import { UserBooks } from "@prisma/client";
import { ThreeOptionState } from "~/components/searchBar/SearchBarForm";

export type Book = {
  id?: string;
  asin?: string | undefined | null;
  dropboxLocation?: string | undefined | null;
  source: string | "audible" | "dropbox";
  audioFileCount?: number;
  title: string;
  description: string;
  author: string;
  narratedBy?: string | undefined | null;
  publishedYear: number;
  releaseDate?: Date | undefined | null;
  publisher?: string | undefined | null;
  pageCount?: number | undefined | null;
  imageURL?: string | undefined | null;
  bookLengthText?: string | undefined | null;
  bookLengthMinutes?: number | undefined | null;
  genres: string[];
  primaryCategory: string;
  secondaryCategory: string;
  comments?: string | undefined | null;
  rating?: number | undefined | null;
  listenedTo?: boolean | undefined | null;
  listenedToDate?: Date;
  favorite?: boolean | undefined | null;
};
export type QueryBookwUserBook = Book & { userBooks?: UserBookData[] };

// Must conform to the prisma schema for UserBooks
export type UserBookData = {
  comments?: string | undefined | null;
  favorite?: boolean | undefined | null;
  rating?: number | undefined | null;
  listenedTo?: boolean | undefined | null;
};

//~ --------------------------------------------
//~ Types for Filtered Pulls
//~ --------------------------------------------
export type BookFilter = {
  primaryCategory?: string;
  secondaryCategory?: string;
  author?: string;
  title?: string;
  favoriteFlag?: ThreeOptionState | undefined;
  listenedToFlag?: ThreeOptionState | undefined;
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
