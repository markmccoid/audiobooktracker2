import { useFetcher } from "@remix-run/react";
import { Book } from "~/types/bookTypes";
import { Rating } from "@smastrom/react-rating";
import { useEffect, useState, useRef } from "react";
type Props = {
  book: Book;
};
function BookRatingSet({ book }: Props) {
  const fetcher = useFetcher();
  const [rating, setRating] = useState(book?.rating || 0);
  const [doSubmit, setDoSubmit] = useState(false);
  const isSubmitting = fetcher?.submission?.formData.get("bookid") === book.id;
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (doSubmit && formRef.current) {
      fetcher.submit(formRef.current);
      setDoSubmit(false);
    }
  }, [rating]);
  return (
    <fetcher.Form method="post" ref={formRef}>
      <input type="hidden" id="rating" name="rating" value={rating} />
      <input type="hidden" id="bookid" name="bookid" value={book.id} />
      <input type="hidden" id="_action" name="_action" value="rating" />

      <Rating
        // style={{ maxWidth: 250 }}
        items={10}
        transition="zoom"
        // className="max-w-[90%]"
        value={rating}
        isDisabled={isSubmitting}
        onChange={(value: number) => {
          setRating(value);
          setDoSubmit(true);
        }}
      />
    </fetcher.Form>
  );
}

export default BookRatingSet;
