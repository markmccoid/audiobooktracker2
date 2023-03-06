import { ActionFunction, LoaderFunction } from "@remix-run/node";
import {
  Outlet,
  useLoaderData,
  useParams,
  Link,
  useNavigate,
} from "@remix-run/react";
import { getBookById } from "~/data/audiobookGet.server";
import { getSingleBook } from "~/data/bookDBQueries";
import { getUserFromSession } from "~/data/session.sever";

export default function $bookid() {
  const navigate = useNavigate();
  const bookId = useLoaderData();
  // console.log("bookData - $", bookId);
  const params = useParams();
  const goBack = () => navigate(-1);
  return (
    <>
      <h1 className="text-xl">Book Id Dynamic route</h1>
      <div onClick={goBack} className="button">
        Go Back
      </div>
      <Outlet />
    </>
  );
}

export const loader: LoaderFunction = async ({ request, params }) => {
  const userId = await getUserFromSession(request);
  // Get book data with user data merged in
  let bookData = null;
  if (params?.bookId) {
    bookData = await getSingleBook(userId, params.bookId);
  }
  return bookData;
};
