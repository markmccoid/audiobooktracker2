import { Outlet, useLoaderData, useParams, Link } from "@remix-run/react";
import { getBookById } from "~/data/audiobookGet.server";

export default function $bookid() {
  const bookId = useLoaderData();
  console.log("bookData - $", bookId);
  const params = useParams();

  return (
    <>
      <h1 className="text-xl">Book Id Dynamic route</h1>
      <div>{params.bookid}</div>
      <Link to="../">Go Back</Link>
      <Outlet />
    </>
  );
}

export function loader({ params }) {
  // Need a query that will return a book based on the bookId passed in params
  console.log("params", params);
  return params.bookId;
}
