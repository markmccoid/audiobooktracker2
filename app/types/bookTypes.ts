export type Book = {
  id: string;
  asin?: string;
  fullPath?: string;
  source: "audible" | "dropbox";
  audioFileCount?: number;
  title: string;
  description: string;
  author: string;
  authors?: string[];
  narratedBy?: string;
  publishedYear: number;
  releaseDate?: Date;
  publisher?: string;
  pageCount?: number;
  imageURL?: string;
  bookLengthText?: string;
  bookLengthMinutes?: number;
  genres: string[];
  pathDirArray?: string[];
  primaryCategory: string;
  secondaryCategory: string;
  comments?: string | undefined | null;
  rating?: number | undefined | null;
  listenedTo?: boolean | undefined | null;
  listenedToDate?: Date;
  favorite?: boolean | undefined | null;
};

export type AudibleBook = Omit<Book, "pathDirArray">;
export type DropboxBook = Omit<Book, "asin">;

// Must conform to the prisma schema for UserBooks
export type UserBookData = {
  comments?: string;
  favorite?: boolean;
  rating?: number;
  listenedTo?: boolean;
};

export type BookMetadata = {
  authors: string[];
  primaryCategories: string[];
  secondaryCategories: string[];
  categories: string[];
  categoryMap: Record<string, string[]>;
};

export type AudibleJSON = {
  id: string;
  fullPath: string;
  audioFileCount?: number;
  title: string;
  author: string;
  narratedBy?: string;
  publishedYear?: number;
  releaseDate?: string;
  publisher?: string;
  pageCount?: number;
  bookLength?: string;
  categories: string[];
  pathPrimaryCat: string;
  pathSecondaryCat: string;
  description?: string | undefined;
  imageURL?: string;
  asin?: string;
};

export type DropboxJSON = {
  id: string;
  fullPath: string;
  audioFileCount?: number;
  title: string;
  author: string;
  narratedBy?: string;
  publishedYear?: number;
  releaseDate?: string;
  publisher?: string;
  pageCount?: number;
  bookLength?: string;
  categories: string[];
  pathDirArray: string[];
  pathPrimaryCat: string;
  pathSecondaryCat?: string;
  description?: string;
  imageURL?: string;
};
