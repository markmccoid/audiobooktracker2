import { Form, useFetcher, useTransition } from "@remix-run/react";
import { Book } from "~/types/bookTypes";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
type Props = {
  book: Book;
};
function BookFavorite({ book }: Props) {
  const fetcher = useFetcher();
  const isFaving = fetcher?.submission?.formData.get("bookid") === book.id;
  const favoriteFlag = isFaving ? !book?.favorite : book?.favorite;

  return (
    <fetcher.Form method="post">
      <input
        type="hidden"
        id="favorite"
        name="favorite"
        value={book?.favorite?.toString()}
      />
      <input type="hidden" id="bookid" name="bookid" value={book.id} />

      <button
        type="submit"
        aria-label="toggle favorite"
        name="_action"
        value="toggle-favorite"
      >
        {favoriteFlag ? (
          <AiFillHeart size={35} color={"red"} />
        ) : (
          <AiOutlineHeart size={35} color={"black"} />
        )}
      </button>
    </fetcher.Form>
  );
}

export default BookFavorite;
