import {
  useLoaderData,
  Link,
  useMatches,
  useSearchParams,
  useParams,
  useTransition,
  useNavigate,
} from "@remix-run/react";
import {
  Categories,
  filterBooks,
  getAllAudiobooks,
  getCategories,
  SortDirections,
  SortFields,
} from "~/data/audiobookGet.server";
import {
  LoaderFunction,
  json,
  ActionFunction,
  redirect,
} from "@remix-run/node";
import { Book } from "~/types/bookTypes";
import { useEffect, useMemo, useRef, useState } from "react";
import BookCard from "~/components/audiobooks/BookCard";
import SearchBarForm from "~/components/audiobooks/SearchBarForm";
import { getUserFromSession } from "~/data/session.sever";
import { getUserBooks, updateUserBooks } from "~/data/prismaQueries.server";
import BookPagination from "~/components/audiobooks/BookPagination";
import {
  filterBooksDB,
  getAllAudiobooksDB,
  updateUserBooksDB,
} from "~/data/bookDBQueries";

//--------------------------------------------------
//-- LOADER
//--------------------------------------------------
export const loader: LoaderFunction = async ({ request }) => {
  const categories = getCategories();
  const userId = await getUserFromSession(request);
  console.log("in Loader Function", userId);
  //console.log("User Books client", JSON.stringify(userBooks));
  const url = new URL(request.url);
  const favoriteFlag = url.searchParams.get("favorited");
  const listenedToFlag = url.searchParams.get("listenedToFlag");
  const sortDirection = (
    url.searchParams.get("sortdirection") ? "desc" : "asc"
  ) as SortDirections;

  console.log("FAV, LIS", favoriteFlag, listenedToFlag);
  const filter = {
    title: url.searchParams.get("title") as string | undefined,
    author: url.searchParams.get("author") as string | undefined,
    primaryCategory: url.searchParams.get("primarycat") as string | undefined,
    secondaryCategory: url.searchParams.get("secondarycat") as
      | string
      | undefined,
    favoriteFlag: favoriteFlag as string | undefined,
    listenedToFlag: listenedToFlag as string | undefined,
  };
  const pagination = {
    offset: parseInt(url.searchParams.get("offset")),
  };
  const sort = {
    sortField: url.searchParams.get("sortfield") as SortFields,
    sortDirection,
  };
  // const books = await getAllAudiobooksDB(userId);
  const books = await filterBooksDB(userId, filter, sort, pagination);
  // console.log("loaderfunc", books.length);
  return { books };
  // const { books, paginationOut } = await filterBooks(
  //   userId,
  //   filter,
  //   sort,
  //   pagination
  // );
  // // build the Next and Prev URLs to send to a Link component
  // url.searchParams.set("offset", paginationOut.nextOffset.toString());
  // const nextURL = paginationOut.nextAvailable
  //   ? `${url.pathname}${url.search}`
  //   : undefined;
  // url.searchParams.set("offset", paginationOut.prevOffset.toString());
  // const prevURL = paginationOut.prevAvailable
  //   ? `${url.pathname}${url.search}`
  //   : undefined;
  // return {
  //   categories,
  //   books,
  //   nextURL,
  //   prevURL,
  //   currentPage: paginationOut.currentPage,
  //   totalPages: paginationOut.totalPages,
  //   totalBooks: paginationOut.totalBooks,
  // };
};

//--------------------------------------------------
//-- ACTION
//--------------------------------------------------
export const action: ActionFunction = async ({ request }) => {
  const userId = await getUserFromSession(request);
  const formData = await request.formData();
  const bookId = formData.get("bookid") as string;

  if (!bookId) {
    throw new Error("Null book Id passed");
  }

  const { _action, ...values } = Object.fromEntries(formData);

  console.log("Values in Action", _action, values);
  if (_action === "toggle-favorite") {
    // console.log("Values in Action", values);
    // console.log("in Action", bookId, values.favorite);
    // we are expecting old value and will toggle to new
    return await updateUserBooksDB(userId, bookId, {
      favorite: values.favorite === "true" ? false : true,
    });
  }
  // console.log("isFavorite", formData.get("favorite"));
  if (_action === "toggle-listenedto") {
    // console.log("Values in Action", values);
    // console.log("in Action", bookId, values.listenedto);
    // we are expecting old value and will toggle to new
    return await updateUserBooksDB(userId, bookId, {
      listenedTo: values.listenedto === "true" ? false : true,
    });
  }
  return null;
};

type LoaderData = {
  categories: Awaited<ReturnType<typeof getCategories>>;
  books: Awaited<Book[]>;
  nextURL: Awaited<string>;
  prevURL: Awaited<string>;
  totalPages: Awaited<number>;
  currentPage: Awaited<number>;
  totalBooks: Awaited<number>;
};

//--------------------------------------------------
//-- COMPONENT
//--------------------------------------------------
export default function Index() {
  // const [params] = useSearchParams();
  // const transition = useTransition();
  const navigate = useNavigate();
  const {
    // categories,
    books,
    // nextURL,
    // prevURL,
    // totalPages,
    // currentPage,
    // totalBooks,
  } = useLoaderData() as LoaderData;
  // const categoriesProp = useMemo<Categories>(() => categories, []);
  // console.log("book index", books.length);

  return (
    <div>
      <SearchBarForm
        categories={{
          primaryCategories: ["Fiction", "Non Fiction"],
          secondaryCategories: ["Second"],
          categoryMap: { Fiction: ["Second"], ["Non Fiction"]: [] },
        }}
        totalBooks={books.length}
      />
      <div className="flex flex-wrap m-2 justify-center border border-red-900 ">
        {books?.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
  // return (
  //   <div className="flex flex-col">
  //     {/* <SearchBar bookLimit={bookLimit} setBookLimit={setBookLimit} /> */}
  //     <SearchBarForm categories={categoriesProp} totalBooks={totalBooks} />

  //     <div className="flex justify-center mr-14">
  //       <BookPagination
  //         nextURL={nextURL}
  //         prevURL={prevURL}
  //         totalPages={totalPages}
  //         currentPage={currentPage}
  //       />
  //     </div>
  //     <div className="flex flex-wrap m-2 justify-center border border-red-900 ">
  //       {books?.map((book) => (
  //         <BookCard key={book.id} book={book} />
  //       ))}
  //     </div>
  //   </div>
  // );
}

// export const loader: LoaderFunction = async () => {
//   const books = await getAllAudiobooks();
//   return json({ books });
// };
