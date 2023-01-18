import {
  Form,
  Link,
  useActionData,
  useSubmit,
  useTransition,
} from "@remix-run/react";
import { Book } from "~/types/bookTypes";

import { BsEarbuds } from "react-icons/bs";
import { useCallback, useEffect, useRef, useState } from "react";
import BookImage from "./BookImage";
import BookFavorite from "./BookFavorite";
import BookListenedTo from "./BookListenedTo";

const BookCard = ({ book }: { book: Book }) => {
  const noImage = !book.imageURL || !book.imageURL?.includes("http");
  const transition = useTransition();

  const actionData = useActionData();
  // console.log("Action Data", actionData);
  const [isFav, setIsFav] = useState(false);
  const [listenedTo, setListenedTo] = useState(false);
  const submit = useSubmit();
  const formFavRef = useRef<HTMLFormElement>();

  const handleFavorite = () => {
    setIsFav((prev) => !prev);
  };
  const amazonLink = `https://www.amazon.com/s/?search-alias=stripbooks&field-author=${book.author}&field-title=${book.title}`;
  const audibleLink = book?.asin
    ? `https://www.audible.com/pd/${book?.asin}`
    : undefined;
  return (
    <div className="flex flex-col w-[375px] h-[475px] border border-black m-3 bg-cerulean-blue-200">
      <div className="flex text-xl font-semibold justify-around border-b border-b-cerulean-blue-900 p-1 pb-2 bg-cerulean-blue-300 text-cerulean-blue-900">
        {book.title}
        <BookFavorite book={book} />
        <BookListenedTo book={book} />
      </div>
      <div className="flex bg-cerulean-blue-200">
        <a
          href={audibleLink || amazonLink}
          target="_blank"
          className="mx-2 mt-2 flex-shrink-0 hover:border-2 transition-all
          hover:border-cerulean-blue-600 hover:rounded-lg hover:scale-102"
        >
          <BookImage imageUrl={book.imageURL} width={128} height={205} />
        </a>
        <div className="flex flex-col mt-2 ">
          <div className="book-text-dets">{book.author}</div>
          <div className="book-text-dets">Published - {book.publishedYear}</div>
          <div className="book-text-dets">
            Length - {book.bookLength ? book.bookLength : book.pageCount}
          </div>
          <div className="book-text-dets">
            {book.pathPrimaryCat}-{book.pathSecondaryCat}
          </div>
          <div className="text-md text-cerulean-blue-900 font-semibold ">
            {book.categories.join(", ")}
          </div>
        </div>
      </div>
      <div
        className="bg-cerulean-blue-200 p-2 pb-0 my-1
                  flex-grow overflow-hidden overflow-y-scroll scrollbar-hide"
      >
        {book.description}
      </div>
    </div>
    // <div className="w-72 border border-gray-700 rounded-md h-80 mb-3">
    //   <div className="h-80 overflow-hidden">
    //     <div>{book.pathPrimaryCat}</div>
    //     <div>{book.publishedYear}</div>
    //     {!noImage ? (
    //       <img
    //         className="float-left mx-2 mt-2 border border-gray-700 rounded-lg"
    //         src={book.imageURL}
    //         width="128px"
    //         height="205px"
    //       />
    //     ) : (
    //       <div className="w-[128px] h-[205px]" />
    //     )}
    //     <Link to={`${book.id}`}>
    //       <div className="text-xl font-bold">{book.title}</div>
    //     </Link>
    //     <div className="text-lg font-semibold mb-2">{book.author}</div>
    //     <div className="">{book.description}</div>
    //   </div>
    // </div>
  );
};

export default BookCard;
