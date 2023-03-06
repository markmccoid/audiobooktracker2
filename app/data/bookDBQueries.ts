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
import { ThreeOptionState } from "~/components/searchBar/SearchBarForm";

//~ -- -- -- -- -- -- -- -- --- -- -- -- --
//~ Get a Single Book's Data
//~ -- -- -- -- -- -- -- -- --- -- -- -- --
export async function getSingleBook(userId: string, bookId: string) {
  const book = await prisma.books.findFirst({
    where: {
      id: bookId,
    },
    include: {
      userBooks: {
        where: {
          userId,
        },
      },
    },
  });

  if (!book) return null;

  const userBookInfo = {
    favorite: book?.userBooks[0]?.favorite,
    listenedTo: book?.userBooks[0]?.listenedTo,
    comments: book?.userBooks[0]?.comments,
    rating: book?.userBooks[0]?.rating,
  };
  let mergedBook: Book & { userBooks?: UserBooks[] } = {
    ...book,
    ...userBookInfo,
  };
  delete mergedBook.userBooks;

  return mergedBook;
}

//~ -- -- -- -- -- -- -- -- --- -- -- -- --
//~ Filter Books Data
//~ -- -- -- -- -- -- -- -- --- -- -- -- --
export const filterBooksDB = async (
  userId: string,
  filter: BookFilter,
  sort: SortOptions,
  pagination: Pagination
) => {
  // console.log("SORT OPTS", sort);
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
//~ Upsert Books Data
//~ This will be the main book record
//~ -- -- -- -- -- -- -- -- --- -- -- -- --
export const updateBookDB = async (bookId: string, data: Partial<Book>) => {
  try {
    const bookUpdate = await prisma.books.update({
      where: {
        id: bookId,
      },
      data,
    });
    return bookUpdate;
  } catch (e) {
    return `Error updating book record ${e}`;
  }
};
//~ -- -- -- -- -- -- -- -- --- -- -- -- --
//~ Upsert UserBooks Data
//~ This will be favorite, listenedTo, Rating and Comments
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
//~ Filter books based on favorite and listenedTo states
//~ Any returned books will have their userBookObject data
//~ flattened so it matches Book type
//~ -------------------------------------------------
function mergeAndFilterBooks(
  books: QueryBookwUserBook[],
  userBooksFilter: {
    favorite: ThreeOptionState;
    listenedTo: ThreeOptionState;
  }
) {
  let mergedBooks: Book[] = [];
  const { favorite: favoriteState, listenedTo: listenedToState } =
    userBooksFilter;
  //-- Loop through books and filter based on passed favorite and
  //-- listenedTo states.
  for (const book of books) {
    const userBookObject =
      book?.userBooks?.length === 1 ? book.userBooks[0] : undefined;

    // ListenedTo Check include, exclude or off state
    const bookListenedToState = !!userBookObject?.listenedTo;
    if (!includeBookThreeOptionCheck(bookListenedToState, listenedToState)) {
      continue;
    }

    // Favorite Check include, exclude or off state
    const bookFavoriteState = !!userBookObject?.favorite;
    if (!includeBookThreeOptionCheck(bookFavoriteState, favoriteState)) {
      continue;
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
  //-- Loop end

  return mergedBooks;
}

//~ -------------------------------------------------
//~ when checking Favarite or ListenedTo, the filter can
//~ be in one of three states (off, include, exclude)
//~ This is a helper function to determine if the book should
//~ be include or excluded based on the current state and the userBooks value
//~ -------------------------------------------------
const includeBookThreeOptionCheck = (
  bookState: boolean,
  filterState: ThreeOptionState | undefined
) => {
  // if filterState is off or undefined
  //! Return true means that this book SHOULD be included in results
  //! Return false means that this book should NOT be include in results
  /**
   * bookState = false - filterState = undefined - true
   * bookState = false - filterState = off       - true
   * bookState = false - filterState = include   - false
   * bookState = false - filterState = exclude   - true
   
   * bookState = true - filterState = undefined - true
   * bookState = true - filterState = off       - true
   * bookState = true - filterState = include   - true
   * bookState = true - filterState = exclude   - false
   */

  if (!bookState) {
    if (filterState === "include") {
      return false;
    } else {
      return true;
    }
  }

  if (filterState === "exclude") {
    return false;
  } else {
    return true;
  }
};
