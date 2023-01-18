import { useLoaderData, useParams } from "@remix-run/react";
import { getBookById } from "~/data/audiobookGet.server";

export default function $bookid() {
  const bookData = useLoaderData();
  console.log("bookData - $", bookData);
  const params = useParams();

  return (
    <>
      <h1 className="text-xl">Book Id Dynamic route</h1>
      <div>{params.bookid}</div>
      <div>TEST{bookData.title}</div>
      <div>{bookData.author}</div>
      <div>{bookData.releaseYear}</div>
    </>
  );
}

export function loader({ params }) {
  return getBookById(params.bookid);
}
