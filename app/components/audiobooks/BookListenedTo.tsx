import { Form, useFetcher, useTransition } from "@remix-run/react";
import { Book } from "~/types/bookTypes";
import { BsEarbuds } from "react-icons/bs";

type Props = {
  book: Book;
};
function BookListenedTo({ book }: Props) {
  const fetcher = useFetcher();
  const BookListenedTo = book?.listenedTo;
  const settingItem = fetcher?.submission?.formData.get("bookid") === book.id;
  const optimisticValue = settingItem ? !BookListenedTo : BookListenedTo;

  return (
    <fetcher.Form method="post">
      <input
        type="hidden"
        id="listenedto"
        name="listenedto"
        value={BookListenedTo?.toString()}
      />
      <input type="hidden" id="bookid" name="bookid" value={book.id} />

      <button
        type="submit"
        aria-label="toggle listenedto"
        name="_action"
        value="toggle-listenedto"
      >
        {optimisticValue ? (
          <BsEarbuds size={35} color="green" />
        ) : (
          <BsEarbuds size={35} color={"black"} />
        )}
      </button>
    </fetcher.Form>
  );
}

export default BookListenedTo;
