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
import { calculateOffsets } from "~/utils/pagination";
import _ from "lodash";

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
  console.log("SORT OPTS", sort);
  const pageSize = pagination?.pageSize || 15;
  const offset = pagination?.offset || 0;

  const whereStatements = processFilters(filter);

  const dbBooks = await prisma.books.findMany({
    where: {
      ...whereStatements.bookWhere,
    },
    include: {
      userBooks: {
        where: {
          userId,
        },
        select: {
          favorite: true,
          listenedTo: true,
          comments: true,
          rating: true,
        },
      },
    },
    orderBy: {
      [sort.sortField || "publishedYear"]: sort.sortDirection || "desc",
    },
  });

  // Merge and filter on UserBooks filters
  let books = mergeAndFilterBooks(dbBooks, whereStatements.userBooksFilter);

  //-- Helper function for rate sorting
  function reverseRating(ratingIn: number): number {
    if (ratingIn === 0) return 11;
    return Math.abs(ratingIn - 11);
  }

  // Check for a rating sorting flag  -> "off" | "asc" | "desc"
  if (sort.ratingSortDirection === "asc") {
    books = _.sortBy(books, [(el) => el.rating || 0]);
  } else if (sort.ratingSortDirection === "desc") {
    // Would normally reverse the the sort from above, but we are sorting
    // the rating independent of the other sort.  So while reversing would
    // sort the ratings properly, the titles would be sorted opposite of what
    // was chose.
    // Instead I just flip the rating so that 10 = 1, 9 = 2, etc.
    books = _.sortBy(books, [(el) => reverseRating(el.rating || 0)]);
  }

  const paginationOut = calculateOffsets(offset, pageSize, books.length);
  paginationOut.totalPages = Math.ceil(books.length / pageSize);
  paginationOut.currentPage = Math.ceil(offset / pageSize) + 1;
  paginationOut.totalBooks = books.length;

  const slicedBooks = books.slice(offset, offset + pageSize);
  // console.log(
  //   "Prev and Next Offset",
  //   paginationOut.prevOffset,
  //   paginationOut.nextOffset,
  //   slicedBooks.length
  // );

  return { slicedBooks, paginationOut };
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
    source,
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
    source: {
      type: "equals",
      value: source,
    },
  };

  const bookWhere = buildWhereStmt(bookFilters);
  // console.log("passed filters", filters);
  // console.log("where built", bookWhere);
  // -- BUILD USERBOOKS FILTER Info
  // -- We will process UserBooks filters via Javascript
  // -- The return values will clean up passed values
  const userBooksFilter = {
    favorite: favoriteFlag,
    listenedTo: listenedToFlag,
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
function mergeAndFilterBooks(
  books: QueryBookwUserBook[],
  userBooksFilter: {
    favorite: boolean;
    listenedTo: boolean;
  }
) {
  let mergedBooks: Book[] = [];
  // Loop through books and if it contains userBooks, then merge the data
  // assumption is that there will be either zero or one item in the array per user.
  const { favorite: showOnlyFavorite, listenedTo: showOnlyListendTo } =
    userBooksFilter;
  for (const book of books) {
    const userBookObject =
      book?.userBooks?.length === 1 ? book.userBooks[0] : undefined;
    // Bail if this book has no userbook record and filter for showing fav or listened to is set
    if (!userBookObject && (showOnlyFavorite || showOnlyListendTo)) continue;

    // if no userbook filters set, then add to mergedBooks any record without a userBook entry
    if (!userBookObject) {
      mergedBooks.push(book);
    }

    // if userBook entry exists, flattend userBook fields and check for userbook filters
    if (userBookObject) {
      if (showOnlyFavorite || showOnlyListendTo) {
        if (
          (showOnlyFavorite && !userBookObject?.favorite) ||
          (showOnlyListendTo && !userBookObject?.listenedTo)
        ) {
          continue;
        }
      }

      let buildMerge = {
        favorite: userBookObject?.favorite,
        listenedTo: userBookObject?.listenedTo,
        comments: userBookObject?.comments,
        rating: userBookObject?.rating,
      };
      delete book.userBooks;
      mergedBooks.push({ ...book, ...buildMerge });
    }
  }
  // mergedBooks = books.map((book) => {
  //   let mergedBook: QueryBookwUserBook = { ...book };
  //   delete mergedBook.userBooks;

  //   if (book?.userBooks?.length === 1) {
  //     if (book.userBooks[0].favorite && !userBooksFilter.favorite) return;

  //     mergedBook = {
  //       ...mergedBook,
  //       favorite: book.userBooks[0].favorite,
  //       listenedTo: book.userBooks[0].listenedTo,
  //       comments: book.userBooks[0].comments,
  //       rating: book.userBooks[0].rating,
  //     };
  //   }
  //   return mergedBook;
  // });
  return mergedBooks;
}
