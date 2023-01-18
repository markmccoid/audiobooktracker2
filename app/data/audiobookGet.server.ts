import { prisma } from "./prisma.server";
import { readBookData, readBookMetadata } from "./audiobookLoader.server";
import _ from "lodash";
import { getUserBooksData } from "./prismaQueries.server";

export async function getAllAudiobooks(userId: string) {
  const books = readBookData();
  const userBooksData = await getUserBooksData(userId);
  // console.log("userbooks", userBooksData);
  // userBooksData?.UserBooks.map(book => book.id)
  if (userBooksData) {
    for (let bookData of userBooksData) {
      const index = books.findIndex((book) => book.id === bookData.bookId);
      books[index] = {
        ...books[index],
        rating: bookData?.rating,
        favorite: bookData?.favorite,
        listenedTo: bookData?.listenedTo,
        listenedToDate: bookData?.listenedToDate,
        comments: bookData?.comments,
      };
    }
  }
  return books;
}

// export function storeNotes(notes) {
//   return fs.writeFile("notes.json", JSON.stringify({ notes: notes || [] }));
// }

export function getBookById(id: string) {
  // console.log("book id", id);
  return readBookData().find((el) => el.id === id);
}

type BookFilter = {
  primaryCat?: string;
  secondaryCat?: string;
  author?: string;
  title?: string;
  favoriteFlag?: string | undefined;
  listenedToFlag?: string | undefined;
};
export type SortFields = "publishedYear" | "author" | "title";
export type SortDirections = "asc" | "desc";
type SortOptions = {
  sortField: SortFields;
  sortDirection: SortDirections;
};
type Pagination = {
  pageSize?: number;
  offset?: number;
};

type PaginationOut = {
  prevOffset: number;
  nextOffset: number;
  prevAvailable: boolean;
  nextAvailable: boolean;
  totalPages: number;
  currentPage: number;
  totalBooks: number;
};
export async function filterBooks(
  userId: string,
  filter: BookFilter,
  sort: SortOptions,
  pagination: Pagination
) {
  //console.log("title", filter.title === "", filter.title?.length);
  const bookData = await getAllAudiobooks(userId);
  const sortField = sort?.sortField || "title";
  const sortDirection = sort?.sortDirection || "asc";
  const pageSize = pagination?.pageSize || 8;
  const offset = pagination?.offset || 0;

  let includeIdArray: string[] = [];

  for (let book of bookData) {
    let includeFlag = false;
    //~ Order of filter
    //~ Primary Cat, Secondary Cat, Author, Title, limit
    //~~~ Primary Category Filter

    if (validFilter(filter.primaryCat) && filter.primaryCat) {
      if (book?.pathPrimaryCat === filter.primaryCat) {
        includeFlag = true;
      } else {
        continue;
      }
    }

    //~~~ Secondary Category Filter
    if (validFilter(filter.secondaryCat) && filter.secondaryCat) {
      if (book.pathSecondaryCat === filter.secondaryCat) {
        includeFlag = true;
      } else {
        continue;
      }
    }

    //~~~ Title Filter
    if (validFilter(filter.title) && filter.title) {
      if (book.title.toLowerCase().includes(filter.title.toLowerCase())) {
        includeFlag = true;
      } else {
        continue;
      }
    }

    //~~~ Author Filter
    if (validFilter(filter.author) && filter.author) {
      if (book.author.toLowerCase().includes(filter.author.toLowerCase())) {
        includeFlag = true;
      } else {
        continue;
      }
    }

    //~~~ favoriteFlag Filter
    if (filter.favoriteFlag === "true") {
      if (book.favorite) {
        includeFlag = true;
      } else {
        continue;
      }
    } else {
      // If favorite filter not ON, then include ALL records regardless of their fav flag setting
      includeFlag = true;
    }
    //~~~ listenedToFlag Filter
    if (filter.listenedToFlag === "true") {
      if (book.listenedTo) {
        includeFlag = true;
      } else {
        continue;
      }
    } else {
      // If include filter not ON, then include ALL records regardless of their include flag setting
      includeFlag = true;
    }
    // If se get here we probably don't even need to check includeFlag
    // since we are jumping out of loop if book doesn't meet criteria
    if (includeFlag) includeIdArray.push(book.id);
  }

  // Pull books that were included based on search criteria
  // and then apply the limit if it exists
  const filteredBooks = bookData.filter((el) =>
    includeIdArray.some((id) => id == el.id)
  );

  const sortedBooks =
    sortDirection === "asc"
      ? _.sortBy(filteredBooks, [sortField])
      : _.reverse(_.sortBy(filteredBooks, [sortField]));

  const totalBooks = sortedBooks.length;

  // console.log("get books", sortedBooks.length, offset, pageSize);
  // console.log(
  //   "get books STATS",
  //   Math.ceil(sortedBooks.length / pageSize),
  //   Math.ceil(offset / pageSize)
  // );

  const paginationOut = calculateOffsets(offset, pageSize, sortedBooks.length);
  paginationOut.totalPages = Math.ceil(sortedBooks.length / pageSize);
  paginationOut.currentPage = Math.ceil(offset / pageSize) + 1;
  paginationOut.totalBooks = totalBooks;

  const books = sortedBooks.slice(offset, offset + pageSize);
  console.log(
    "Prev and Next Offset",
    paginationOut.prevOffset,
    paginationOut.nextOffset
  );
  // Sort by the sort options
  // console.log("Sort Field", sortField, sortDirection);
  return { books, paginationOut };
}

//---------------------------------------------------
//---------------------------------------------------
export type Categories = {
  primaryCategories: string[];
  secondaryCategories: string[];
  categoryMap: Record<string, string[]>;
};
export function getCategories(): Categories {
  const bookMetadata = readBookMetadata();
  return {
    primaryCategories: bookMetadata.primaryCategories,
    secondaryCategories: bookMetadata.secondaryCategories,
    categoryMap: bookMetadata.categoryMap,
  };
}

//---------------------------
//---------------------------
function validFilter(filter: string | undefined) {
  if (!filter) return false;
  if (filter) {
    if (filter === "" || filter.length === 0 || !filter) {
      return false;
    }
  }
  return true;
}

//---------------------------
//---------------------------
function calculateOffsets(
  offset: number,
  pageSize: number,
  totalRecords: number
): PaginationOut {
  // calc previous offset, can't be less than zero
  let prevOffset = offset - pageSize;
  let nextAvailable = true;
  let prevAvailable = true;
  if (prevOffset < 0) {
    prevOffset = 0;
    prevAvailable = false;
  }

  // calc next offset, can't be greater than total records
  let nextOffset = offset + pageSize;
  if (nextOffset >= totalRecords) {
    nextOffset = offset;
    nextAvailable = false;
  }

  return { prevOffset, nextOffset, prevAvailable, nextAvailable };
}
