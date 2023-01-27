import { UserBooks } from "@prisma/client";

export type Book = {
  id?: string;
  asin?: string;
  dropboxLocation?: string;
  source: "audible" | "dropbox";
  audioFileCount?: number;
  title: string;
  description: string;
  author: string;
  narratedBy?: string;
  publishedYear: number;
  releaseDate?: Date;
  publisher?: string;
  pageCount?: number;
  imageURL?: string;
  bookLengthText?: string;
  bookLengthMinutes?: number;
  genres: string[];
  primaryCategory: string;
  secondaryCategory: string;
  comments?: string | undefined | null;
  rating?: number | undefined | null;
  listenedTo?: boolean | undefined | null;
  listenedToDate?: Date;
  favorite?: boolean | undefined | null;
};
export type QueryBookwUserBook = Book & { userBooks?: UserBooks[] };

// Must conform to the prisma schema for UserBooks
export type UserBookData = {
  comments?: string;
  favorite?: boolean;
  rating?: number;
  listenedTo?: boolean;
};

//~ --------------------------------------------
//~ Types for Filtered Pulls
//~ --------------------------------------------
export type BookFilter = {
  primaryCategory?: string;
  secondaryCategory?: string;
  author?: string;
  title?: string;
  favoriteFlag?: boolean | undefined;
  listenedToFlag?: boolean | undefined;
};
export type SortFields = "publishedYear" | "author" | "title";
export type SortDirections = "asc" | "desc";
export type RatingSort = "asc" | "desc" | "off" | null | undefined;
export type SortOptions = {
  sortField: SortFields;
  sortDirection: SortDirections;
  ratingSortDirection: RatingSort;
};
export type Pagination = {
  pageSize?: number;
  offset?: number;
};

export type PaginationOut = {
  prevOffset: number;
  nextOffset: number;
  prevAvailable: boolean;
  nextAvailable: boolean;
  totalPages: number;
  currentPage: number;
  totalBooks: number;
};

//~ --------------------------------------------
//~ Other Book Types
//~ --------------------------------------------

export type AudibleBook = Omit<Book, "dropboxLocation">;
export type DropboxBook = Omit<Book, "asin">;

export type BookMetadata = {
  authors: string[];
  primaryCategories: string[];
  secondaryCategories: string[];
  categories: string[];
  categoryMap: Record<string, string[]>;
};
