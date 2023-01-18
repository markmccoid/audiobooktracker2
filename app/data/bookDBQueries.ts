import { Book, UserBookData } from "~/types/bookTypes";
import { prisma } from "./prisma.server";

export async function getAllAudiobooksDB(userId: string) {
  const books = await prisma.books.findMany({
    include: {
      userBooks: {
        where: {
          userId,
        },
      },
    },
  });

  // Flatten UserBooks data
  let mergedBooks: Book[] = [];
  // Loop through books and if it contains userBooks, then merge the data
  // assumption is that there will be on item in the array per user.
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

//~ -- -- -- -- -- -- -- -- --- -- -- -- --
//~ Upsert UserBooks Data
//~ -- -- -- -- -- -- -- -- --- -- -- -- --
export const updateUserBooksDB = async (
  userId: string,
  bookId: string,
  userBookData: UserBookData
) => {
  const booksId = bookId;

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
