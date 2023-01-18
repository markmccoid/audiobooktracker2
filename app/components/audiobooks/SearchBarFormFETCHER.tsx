import {
  useSubmit,
  Form,
  useNavigate,
  useSearchParams,
  useTransition,
  useFetcher,
} from "@remix-run/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { Categories } from "~/data/audiobookGet.server";
import _ from "lodash";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsEarbuds } from "react-icons/bs";

type Props = {
  categories: Categories;
};
function SearchBarForm({ categories }: Props) {
  const fetcher = useFetcher();
  const [params, setParams] = useSearchParams();
  const [secondCats, setSecondCats] = useState<string[]>([]);
  const navigate = useNavigate();
  // const submit = useSubmit();
  // Form Refs
  const formRef = useRef<HTMLFormElement>(null);
  const catRef = useRef<HTMLSelectElement>(null);
  const subCatRef = useRef<HTMLSelectElement>(null);

  const [favoriteState, setFavoriteState] = useState(false);
  const [isListenedTo, setIsListenedTo] = useState(false);

  const newParams = useMemo(
    () => ({
      title: params.get("title") || undefined,
      author: params.get("author") || undefined,
      primarycat: params.get("primarycat") || undefined,
      secondarycat: params.get("secondarycat") || undefined,
      sortField: params.get("sortfield") || undefined,
      sortDirection: params.get("sortdirection") || undefined,
      favorited: params.get("favorited") || undefined,
      listenedToFlag: params.get("listenedToFlag") || undefined,
    }),
    [params]
  );

  //~ ----------------------------------
  //~ Auto Form submit with debouncing
  //~ ----------------------------------
  function handleChange(targetForm: HTMLFormElement) {
    fetcher.submit(targetForm, { replace: true });
  }
  const db_handleChange = _.debounce((e) => handleChange(e), 300);
  //~ ----------------------------------
  console.log("fetcher", fetcher.state, fetcher.type);
  return (
    <div className="flex w-full  bg-cerulean-blue-400 p-4 mb-5" id="form">
      <fetcher.Form
        ref={formRef}
        onChange={(e) => db_handleChange(e.currentTarget)}
        className="flex items-center justify-between  flex-grow"
      >
        <div className="flex items-center space-x-2">
          <div className="flex flex-col ">
            <label htmlFor="title" className="search-form-input-label">
              Title
            </label>
            <input
              className="rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
              id="title"
              name="title"
              type="text"
              defaultValue={newParams.title}
              // value={newParams.title}
              // defaultValue={(params.get("title") as string) ?? undefined}
              // onChange={(e) => submit(e.currentTarget.form)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="author" className="search-form-input-label">
              Author
            </label>
            <input
              className="rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
              id="author"
              name="author"
              type="text"
              defaultValue={newParams.author}
            />
          </div>
        </div>
      </fetcher.Form>
    </div>
  );
}

export default SearchBarForm;
