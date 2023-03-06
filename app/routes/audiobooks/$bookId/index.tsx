import { ActionFunction } from "@remix-run/node";
import { Form, Outlet, useRouteLoaderData } from "@remix-run/react";
import BookCard from "~/components/audiobooks/BookCard";
import EditText from "~/components/EditBook/EditText";
import { updateBookDB, updateUserBooksDB } from "~/data/bookDBQueries";
import { getUserFromSession } from "~/data/session.sever";
import { Book } from "~/types/bookTypes";
function BookId() {
  const book = useRouteLoaderData("routes/audiobooks/$bookId") as Book;
  console.log("in bookid index");
  return (
    <div className="ml-4">
      In OUTLET 1
      <BookCard book={book} />
      <EditText bookId={book.id} fieldName="title" origText={book.title} />
      <Form method="post" className="flex flex-col">
        <input type="hidden" id="bookId" name="bookId" value={book.id} />
        <div className="flex space-x-2">
          <label htmlFor="comments">Comments </label>
          <input
            type="text"
            name="comments"
            id="comments"
            defaultValue={book?.comments}
          />
        </div>
        <div className="flex space-x-2">
          <label htmlFor="imageURL">ImageURL </label>
          <input
            type="text"
            name="imageURL"
            id="imageURL"
            defaultValue={book?.imageURL}
          />
        </div>
        <div className="flex border">
          <button type="submit" className="button">
            Save
          </button>
        </div>
      </Form>
    </div>
  );
}

type FormData = {
  bookId: string;
  imageURL?: string;
  comments?: string;
  title?: string;
};
export const action: ActionFunction = async ({ request }) => {
  const userId = await getUserFromSession(request);
  // const formData = await request.formData();
  const formData = Object.fromEntries(await request.formData()) as FormData;
  console.log(formData);
  const bookId = formData.bookId as string;
  // const comments = formData.get("comments") as string;
  // const imageURL = formData.get("imageURL") as string;
  // const button = formData.get("_action") as string;

  if (formData?.imageURL) {
    const bookUpdate = updateBookDB(bookId, { imageURL: formData.imageURL });
    // console.log("BOokUpdate", bookUpdate);
  }
  if (formData?.comments) {
    const userBooks = await updateUserBooksDB(userId, bookId, {
      comments: formData.comments,
    });
  }
  // console.log("NEW", comments);
  return null;
};

export default BookId;
