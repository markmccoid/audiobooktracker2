import { Form, Link, useActionData, useSubmit } from "@remix-run/react";
import { Book } from "~/types/bookTypes";

import { FaClipboard, FaClipboardCheck } from "react-icons/fa";
import { useCallback, useEffect, useRef, useState } from "react";
import BookImage from "./BookImage";
import BookFavorite from "./BookFavorite";
import BookListenedTo from "./BookListenedTo";

import useCopyToClip from "~/hooks/useCopyToClip";
import BookRatingSet from "./BookRatingSet";

const BookCard = ({ book }: { book: Book }) => {
  const [value, copy] = useCopyToClip(3000);

  const noImage = !book.imageURL || !book.imageURL?.includes("http");

  const amazonLink = `https://www.amazon.com/s/?search-alias=stripbooks&field-author=${book.author}&field-title=${book.title}`;
  const audibleLink = book?.asin
    ? `https://www.audible.com/pd/${book?.asin}`
    : undefined;
  //-- Dynamic Styling
  const twColor = book.source === "audible" ? "audible" : "cerulean-blue";
  const titleBGColor =
    book.source === "audible" ? `bg-audible-500` : `bg-cerulean-blue-500`;
  const titleTextColor =
    book.source === "audible" ? `text-audible-900` : `text-cerulean-blue-100`;
  const borderColor =
    book.source === "audible"
      ? `border-b-audible-900`
      : `border-b-cerulean-blue-900`;
  const cardBGColor =
    book.source === "audible" ? `bg-audible-300` : `bg-cerulean-blue-300`;
  //-- Dynamic Styling END

  return (
    <div
      className={`flex flex-col w-[375px] h-[475px] border border-black m-3 ${cardBGColor}`}
    >
      <div
        className={`flex flex-col border-b ${borderColor} ${titleTextColor} ${titleBGColor} p-1`}
      >
        <div
          className={`text-xl font-semibold ml-1 overflow-hidden text-ellipsis whitespace-nowrap`}
        >
          <Link to={`./${book.id}`}>{book.title}</Link>
        </div>
        <div className="flex flex-row items-center justify-between">
          <div className="max-w-[65%]">
            <BookRatingSet book={book} />
          </div>
          <div className="flex flex-row flex-grow ml-4 mr-2 justify-around">
            <BookFavorite book={book} />
            <BookListenedTo book={book} />
          </div>
        </div>
      </div>
      <div className={`flex `}>
        <a
          href={audibleLink || amazonLink}
          target="_blank"
          className="mx-2 mt-2 flex-shrink-0 transition-all
          hover:border-red-600 hover:scale-105"
        >
          <BookImage
            imageUrl={book.imageURL}
            width={128}
            height={205}
            bookTitle={book.title}
          />
        </a>
        <div className="flex flex-col mt-2 ">
          <div className="book-text-dets">{book.author}</div>
          <div className="book-text-dets">Published - {book.publishedYear}</div>
          <div className="book-text-dets">
            Length -{" "}
            {book.bookLengthText ? book.bookLengthText : book.pageCount}
          </div>
          <div className="book-text-dets">
            {book.primaryCategory}-{book.secondaryCategory}
          </div>
          <div className={`text-md ${titleTextColor} font-semibold`}>
            {book.genres.join(", ")}
          </div>
        </div>
      </div>
      {book.dropboxLocation ? (
        <div className="mt-2 flex flex-col flex-grow overflow-visible relative">
          <div
            className="absolute text-white top-1 right-1 hover:text-green-200 hover:animate-pulse cursor-pointer"
            onClick={() => {
              copy(book.dropboxLocation || "");
            }}
          >
            {value ? (
              <FaClipboardCheck size={20} color="lightgreen" />
            ) : (
              <FaClipboard size={20} />
            )}
          </div>
          <div className="pt-1 bg-cerulean-blue-700 text-green-200 text-center">
            {book.dropboxLocation?.split("/").slice(4, 6).join("/")}
          </div>
          <div className="pb-1 bg-cerulean-blue-700 text-white text-sm text-center">
            {book.dropboxLocation?.split("/").slice(6).join("/")}
          </div>
        </div>
      ) : (
        <div className="mt-2 h-3 bg-audible-700 overflow-visible" />
      )}
      <div
        className={`p-2 pb-0 my-1
                  flex-grow overflow-hidden overflow-y-scroll scrollbar-hide`}
      >
        {book.description}
      </div>
    </div>
  );
};

export default BookCard;
