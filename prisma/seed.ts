import { prisma } from "../app/data/prisma.server";
import audibleBooks from "../audiblebooks.json";
import dropboxBooks from "../audiobooks.json";
import type { AudibleJSON, DropboxJSON, Book } from "../app/types/bookTypes";

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

async function main() {
  const audible: AudibleJSON[] = audibleBooks;
  const dropbox: DropboxJSON[] = dropboxBooks;

  //~ -------------------------
  //~  Audible
  for (let book of audible) {
    const time = book.bookLength ? book.bookLength.trim().split(":") : [];
    let bookLengthMinutes = undefined;
    let bookLengthText = undefined;
    if (time.length > 1) {
      const hours = parseInt(time[0]);
      const mins = parseInt(time[1]);
      bookLengthMinutes = hours * 60 + mins + parseInt(time[2]) / 60;
      bookLengthText = `${hours} hrs and ${mins} mins`;
    }
    const bookToInsert: Book = {
      asin: book.asin,
      source: "audible",
      title: book.title,
      author: book.author,
      description: book.description || "",
      publishedYear: book.publishedYear || 0,
      releaseDate: book.releaseDate ? new Date(book.releaseDate) : undefined,
      narratedBy: book.narratedBy,
      pageCount: book.pageCount,
      bookLengthText,
      bookLengthMinutes,
      imageURL: book.imageURL,
      primaryCategory: book.pathPrimaryCat || "Unknown",
      secondaryCategory: book.pathSecondaryCat || "Unknown",
      genres: book.categories.flatMap((cat) =>
        cat.trim().toLowerCase() !== "self-help"
          ? cat.split("-").map((el) => el.trim())
          : cat.trim()
      ),
    };
    const bookIn = await prisma.books.create({
      data: bookToInsert,
    });
  }

  //~ -------------------------
  //~  Dropbox
  for (let book of dropbox) {
    const { bookLengthMinutes, bookLengthText } = getDropboxBookLength(
      book.bookLength
    );

    const bookToInsert: Book = {
      source: "dropbox",
      dropboxLocation: book.fullPath,
      title: book.title,
      author: book.author,
      description: book.description || "",
      publishedYear: book.publishedYear || 0,
      releaseDate: book.releaseDate ? new Date(book.releaseDate) : undefined,
      narratedBy: book.narratedBy,
      pageCount: book.pageCount,
      bookLengthText: book.bookLength,
      bookLengthMinutes,
      imageURL: book.imageURL,
      primaryCategory: book.pathPrimaryCat || "Unknown",
      secondaryCategory: book.pathSecondaryCat || "Unknown",
      genres: book.categories.flatMap((cat) =>
        cat.trim().toLowerCase() !== "self-help"
          ? cat.split("-").map((el) => el.trim())
          : cat.trim()
      ),
    };
    const bookIn = await prisma.books.create({
      data: bookToInsert,
    });
  }
}

function getDropboxBookLength(bookLength: string | undefined) {
  if (!bookLength)
    return { bookLengthMinutes: undefined, bookLengthText: undefined };

  const timeArray = bookLength
    .replace(/\s/g, "")
    .replace("and", "")
    .replace("hrs", "-")
    .replace("mins", "")
    .replace("hr", "-")
    .replace("min", "")
    .split("-");
  const hours = parseInt(timeArray[0]);
  const min = parseInt(timeArray[1]) || 0;

  const bookLengthMinutes = hours * 60 + min;
  const bookLengthText = `${hours} hrs and ${min} mins`;
  return { bookLengthMinutes, bookLengthText };
}
// Run the seed function
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
