import { useLoaderData, useNavigate } from "@remix-run/react";
import { getCategories } from "~/data/audiobookGet.server";
import {
  LoaderFunction,
  json,
  ActionFunction,
  redirect,
} from "@remix-run/node";
import { Book, RatingSort } from "~/types/bookTypes";

import BookCard from "~/components/audiobooks/BookCard";
import SearchBarForm from "~/components/audiobooks/SearchBarForm";
import { getUserFromSession } from "~/data/session.sever";

import BookPagination from "~/components/audiobooks/BookPagination";
import { filterBooksDB, updateUserBooksDB } from "~/data/bookDBQueries";
import { SortDirections, SortFields } from "../../types/bookTypes";
import { zfd } from "zod-form-data";
import { z } from "zod";
import { isEmpty, parseBooleanFromString } from "~/utils/helpers";

const loaderSchema = z.object({
  author: z.string(),
  title: z.string(),
  primaryCategory: z.string(),
  secondaryCategory: z.string(),
  favoriteFlag: z.string(),
  listenedToFlag: z.string(),
  offest: z.number(),
});
//--------------------------------------------------
//-- LOADER
//--------------------------------------------------
export const loader: LoaderFunction = async ({ request }) => {
  const categories = getCategories();
  const userId = await getUserFromSession(request);
  console.log("in Loader Function", userId);

  const url = new URL(request.url);

  const favoriteFlag = parseBooleanFromString(
    url.searchParams.get("favorited")
  );
  const listenedToFlag = parseBooleanFromString(
    url.searchParams.get("listenedToFlag")
  );
  const sortDirection = (
    url.searchParams.get("sortdirection") ? "desc" : "asc"
  ) as SortDirections;

  const filter = {
    title: url.searchParams.get("title") as string | undefined,
    author: url.searchParams.get("author") as string | undefined,
    primaryCategory: url.searchParams.get("primarycat") as string | undefined,
    secondaryCategory: url.searchParams.get("secondarycat") as
      | string
      | undefined,
    source: url.searchParams.get("source") as string | undefined,
    favoriteFlag: favoriteFlag,
    listenedToFlag: listenedToFlag,
  };
  const pagination = {
    offset: parseInt(url.searchParams.get("offset")),
  };
  const sort = {
    sortField: url.searchParams.get("sortfield") as SortFields,
    sortDirection,
    ratingSortDirection: url.searchParams.get("ratingsort") as RatingSort,
  };

  const { slicedBooks, paginationOut } = await filterBooksDB(
    userId,
    filter,
    sort,
    pagination
  );
  // build the Next and Prev URLs to send to a Link component
  // NOTE: we are setting the searchParams only so that we extract the new
  //    path with the new offest in the url.search
  url.searchParams.set("offset", paginationOut.nextOffset.toString());
  const nextURL = paginationOut.nextAvailable
    ? `${url.pathname}${url.search}`
    : undefined;
  url.searchParams.set("offset", paginationOut.prevOffset.toString());
  const prevURL = paginationOut.prevAvailable
    ? `${url.pathname}${url.search}`
    : undefined;
  return {
    categories,
    books: slicedBooks,
    nextURL,
    prevURL,
    currentPage: paginationOut.currentPage,
    totalPages: paginationOut.totalPages,
    totalBooks: paginationOut.totalBooks,
  };
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

  if (_action === "toggle-listenedto") {
    // console.log("Values in Action", values);
    // console.log("in Action", bookId, values.listenedto);
    // we are expecting old value and will toggle to new
    return await updateUserBooksDB(userId, bookId, {
      listenedTo: values.listenedto === "true" ? false : true,
    });
  }
  if (_action === "rating") {
    return await updateUserBooksDB(userId, bookId, {
      rating: +values?.rating,
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
    categories,
    books,
    nextURL,
    prevURL,
    totalPages,
    currentPage,
    totalBooks,
  } = useLoaderData() as LoaderData;
  // const categoriesProp = useMemo<Categories>(() => categories, []);
  // console.log("book index", books.length);

  // return (
  //   <div>
  //     <SearchBarForm
  //       categories={{
  //         primaryCategories: ["Fiction", "Non Fiction"],
  //         secondaryCategories: ["Second"],
  //         categoryMap: { Fiction: ["Second"], ["Non Fiction"]: [] },
  //       }}
  //       totalBooks={books.length}
  //     />
  //     <div className="flex flex-wrap m-2 justify-center border border-red-900 ">
  //       {books?.map((book) => (
  //         <BookCard key={book.id} book={book} />
  //       ))}
  //     </div>
  //   </div>
  // );
  return (
    <div className="flex flex-col">
      {/* <SearchBar bookLimit={bookLimit} setBookLimit={setBookLimit} /> */}
      <SearchBarForm totalBooks={totalBooks} />

      <div className="flex justify-center mr-14">
        <BookPagination
          nextURL={nextURL}
          prevURL={prevURL}
          totalPages={totalPages}
          currentPage={currentPage}
        />
      </div>
      <div className="flex flex-wrap m-2 justify-center border border-red-900 ">
        {books?.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

// export const loader: LoaderFunction = async () => {
//   const books = await getAllAudiobooks();
//   return json({ books });
// };
