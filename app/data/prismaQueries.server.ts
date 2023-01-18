import { UserBookData } from "~/types/bookTypes";
import { prisma } from "./prisma.server";

export const getUserBooksData = async (userId: string) => {
  const userBooks = await prisma.user.findFirst({
    where: { id: userId },
    select: {
      UserBooks: true,
    },
  });

  return userBooks?.UserBooks;
};

export const updateUserBooks = async (
  userId: string,
  bookId: string,
  userBookData: UserBookData
) => {
  // console.log("in prisma update", userId, bookId, userBookData);
  // Check if record already exists
  const bookData = await prisma.userBooks.findUnique({
    where: {
      bookId_userId: {
        bookId,
        userId,
      },
    },
  });
  // If so, update record
  if (bookData) {
    const updated = await prisma.userBooks.update({
      where: {
        bookId_userId: {
          bookId,
          userId,
        },
      },
      data: {
        comments: userBookData?.comments || bookData?.comments,
        listenedTo:
          userBookData?.listenedTo === undefined
            ? bookData?.listenedTo
            : userBookData.listenedTo,
        favorite:
          userBookData?.favorite === undefined
            ? bookData?.favorite
            : userBookData.favorite,
        rating: userBookData?.rating || bookData?.rating,
      },
    });
    return updated;
  }
  // if not, insert new record
  const newRec = prisma.userBooks.create({
    data: {
      userId: userId,
      bookId: bookId,
      favorite: userBookData.favorite,
      rating: userBookData.rating,
      listenedTo: userBookData.listenedTo,
      comments: userBookData.comments,
    },
  });
  // console.log("reacord added", newRec);
  return newRec;
};
