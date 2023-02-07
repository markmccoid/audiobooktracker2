import { Outlet, useRouteLoaderData } from "@remix-run/react";
import BookCard from "~/components/audiobooks/BookCard";
import { Book } from "~/types/bookTypes";
function BookId() {
  const book = useRouteLoaderData("routes/audiobooks/$bookId") as Book;
  console.log("book data", book);
  return (
    <div>
      In OUTLET 1
      <BookCard book={book} />
    </div>
  );
}

export default BookId;
