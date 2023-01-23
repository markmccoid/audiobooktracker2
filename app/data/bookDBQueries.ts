import { UserBooks } from "@prisma/client";
import { Book, QueryBookwUserBook, UserBookData } from "~/types/bookTypes";
import { prisma } from "./prisma.server";
import {
  BookFilter,
  Pagination,
  PaginationOut,
  SortDirections,
  SortFields,
  SortOptions,
} from "../types/bookTypes";
import metadata from "../../bookMetadata.json";
import { isEmpty } from "~/utils/helpers";

export async function getAllAudiobooksDB(userId: string) {
  // const books = await prisma.userBooks.findMany({
  //   where: {
  //     AND: [
  //       { userId, favorite: true },
  //       { books: { title: { contains: "season", mode: "insensitive" } } },
  //     ],
  //   },

  //   include: {
  //     books: {
  //       select: {
  //         author: true,
  //         title: true,
  //       },
  //     },
  //   },
  // });

  const books = await prisma.books.findMany({
    where: {
      author: {
        contains: "",
        mode: "insensitive",
      },
      title: {
        contains: "multi",
        mode: "insensitive",
      },
      // primaryCategory: {
      //   equals: "fiction",
      //   mode: "insensitive",
      // },
      // secondaryCategory: {
      //   equals: "horror",
      //   mode: "insensitive",
      // },
    },
    include: {
      userBooks: {
        where: {
          userId,
        },
      },
    },
  });

  console.log("books", books);
  //~ -------------------------------------------------
  //~ Flatten UserBooks data
  let mergedBooks: Book[] & { userBooks: UserBooks[] } = [];
  // Loop through books and if it contains userBooks, then merge the data
  // assumption is that there will be either zero or one item in the array per user.
  mergedBooks = books.map((book) => {
    let mergedBook: Book = { ...book };
    delete mergedBook.userBooks;

    if (book.userBooks.length === 1) {
      mergedBook = {
        ...mergedBook,
        favorite: book.userBooks[0].favorite,
        listenedTo: book.userBooks[0].listenedTo,
        comments: book.userBooks[0].comments,
        rating: book.userBooks[0].rating,
      };
    }
    return mergedBook;
  });
  //~ -------------------------------------------------
  // // userBooksData?.UserBooks.map(book => book.id)
  // if (userBooksData) {
  //   for (let bookData of userBooksData) {
  //     const index = books.findIndex((book) => book.id === bookData.bookId);
  //     books[index] = {
  //       ...books[index],
  //       rating: bookData?.rating,
  //       favorite: bookData?.favorite,
  //       listenedTo: bookData?.listenedTo,
  //       listenedToDate: bookData?.listenedToDate,
  //       comments: bookData?.comments,
  //     };
  //   }
  // }
  return mergedBooks;
}
type Where = {
  primaryCategory?: {
    equals: string;
    mode: "insenitive" | "default";
  };
  secondaryCategory?: {
    equals: string;
    mode: "insenitive" | "default";
  };
};
//~ -- -- -- -- -- -- -- -- --- -- -- -- --
//~ Filter Books Data
//~ -- -- -- -- -- -- -- -- --- -- -- -- --
export const filterBooksDB = async (
  userId: string,
  filter: BookFilter,
  sort: SortOptions,
  pagination: Pagination
) => {
  console.log("sort", sort);
  const whereStatements = processFilters(filter);
  console.log(whereStatements);
  // let whereStmt: Where = processFilters(bookFilters);

  const books = await prisma.books.findMany({
    where: {
      ...whereStatements.bookWhere,
    },
    include: {
      userBooks: {
        select: {
          favorite: true,
          listenedTo: true,
          comments: true,
          rating: true,
        },
      },
    },
    orderBy: {
      [sort.sortField]: sort.sortDirection,
    },
  });

  console.log(books.length);
  return flattenBookData(books);
};
//~ -- -- -- -- -- -- -- -- --- -- -- -- --
//~ Process passed filters and return
//~ Where Statements
//~ -- -- -- -- -- -- -- -- --- -- -- -- --
function processFilters(filters: Record<string, any>) {
  // Take raw filters object and pull out Book filters and UserBook filters
  // remove nulls and add proper comparison operators
  //
  let {
    author,
    title,
    primaryCategory,
    secondaryCategory,
    favoriteFlag,
    listenedToFlag,
  } = filters;

  // -- BUILD BOOK WHERE
  // -- The buildWhereStmt function will determine if values are undefined
  const bookFilters = {
    author: {
      type: "contains",
      value: author,
    },
    title: {
      type: "contains",
      value: title,
    },
    primaryCategory: {
      type: "equals",
      value: primaryCategory,
    },
    secondaryCategory: {
      type: "equals",
      value: secondaryCategory,
    },
  };

  const bookWhere = buildWhereStmt(bookFilters);

  // -- BUILD USERBOOKS FILTER Info
  // -- We will process UserBooks filters via Javascript
  // -- The return values will clean up passed values
  const userBooksFilter = {
    favorite: favoriteFlag === "true" ? true : false,
    listenedTo: listenedToFlag === "true" ? true : false,
  };
  // const userBookWhere = buildWhereStmt(userBooksFilter);

  return { bookWhere, userBooksFilter };
}

//~ -- -- -- -- -- -- -- -- --- -- -- -- --
//~ Create Where Statment
//~ -- -- -- -- -- -- -- -- --- -- -- -- --
type ProcessedFilter = Record<string, { type: string; value: any }>;
function buildWhereStmt(processedFilters: ProcessedFilter) {
  let whereStmt = {};

  for (const [key, value] of Object.entries(processedFilters)) {
    // Check if filter is null, undefined, or empty
    if (
      isEmpty(processedFilters[key].value) ||
      processedFilters[key].value === "" ||
      !processedFilters[key]
    )
      continue;

    whereStmt = {
      ...whereStmt,
      [key]: { [value.type]: value.value, mode: "insensitive" },
    };
  }
  return whereStmt;
}

//~ -- -- -- -- -- -- -- -- --- -- -- -- --
//~ Upsert UserBooks Data
//~ -- -- -- -- -- -- -- -- --- -- -- -- --
export const updateUserBooksDB = async (
  userId: string,
  bookId: string,
  userBookData: UserBookData
) => {
  const booksId = bookId;

  //-- --- --- ----
  //- Upsert passed userBookData
  //- Every user can have one record in userBooks for each book
  const newUserBook = await prisma.userBooks.upsert({
    where: {
      booksId_userId: { booksId, userId },
    },
    create: {
      booksId,
      userId,
      ...userBookData,
    },
    update: userBookData,
  });

  return newUserBook;
};

//~ -------------------------------------------------
//~ Flatten UserBooks data
//~ -------------------------------------------------
function flattenBookData(books: QueryBookwUserBook[]) {
  let mergedBooks: Book[] = [];
  // Loop through books and if it contains userBooks, then merge the data
  // assumption is that there will be either zero or one item in the array per user.
  mergedBooks = books.map((book) => {
    let mergedBook: QueryBookwUserBook = { ...book };
    delete mergedBook.userBooks;

    if (book?.userBooks?.length === 1) {
      mergedBook = {
        ...mergedBook,
        favorite: book.userBooks[0].favorite,
        listenedTo: book.userBooks[0].listenedTo,
        comments: book.userBooks[0].comments,
        rating: book.userBooks[0].rating,
      };
    }
    return mergedBook;
  });
  return mergedBooks;
}
