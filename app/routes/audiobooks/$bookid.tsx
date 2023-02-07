import { LoaderFunction } from "@remix-run/node";
import { Outlet, useLoaderData, useParams, Link } from "@remix-run/react";
import { getBookById } from "~/data/audiobookGet.server";
import { getSingleBook } from "~/data/bookDBQueries";
import { getUserFromSession } from "~/data/session.sever";

export default function $bookid() {
  const bookId = useLoaderData();
  console.log("bookData - $", bookId);
  const params = useParams();

  return (
    <>
      <h1 className="text-xl">Book Id Dynamic route</h1>
      <Link to="../" className="button">
        <div>{params.bookid}</div>
        Go Back
      </Link>
      <Outlet />
    </>
  );
}

export const loader: LoaderFunction = async ({ request, params }) => {
  const userId = await getUserFromSession(request);
  // Get book data with user data merged in
  const bookData = await getSingleBook(userId, params.bookId);
  return bookData || null;
};
