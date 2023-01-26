import {
  useSubmit,
  Form,
  useNavigate,
  useSearchParams,
  useTransition,
} from "@remix-run/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { Categories } from "~/data/audiobookGet.server";
import _ from "lodash";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import { BsEarbuds } from "react-icons/bs";
import SearchInput from "../SearchInputs/SearchInput";

type Props = {
  categories: Categories;
  totalBooks: number;
};

//-------------------------------------------
//-- Temporary categories mappings
//-------------------------------------------
const primaryCategories = ["Biographies", "Fiction", "Language", "NonFiction"];
const secondaryCategories = [
  "Celebrity",
  "Historical",
  "Science",
  "Action Suspense",
  "Fantasy",
  "General Fiction",
  "Horror",
  "SciFi",
  "Business Wealth",
  "Education",
  "Health Wellness",
  "Productivity",
  "Self Help",
  "Spirituality",
  "Success Motivation",
  "Technology",
  "TTC",
];
const categoryMap = {
  Biographies: ["Celebrity", "Historical", "Science"],
  Fiction: ["Action Suspense", "Fantasy", "General Fiction", "Horror", "SciFi"],
  Language: [],
  NonFiction: [
    "Business Wealth",
    "Education",
    "Health Wellness",
    "Productivity",
    "Science",
    "Self Help",
    "Spirituality",
    "Success Motivation",
    "Technology",
    "TTC",
  ],
};
//~ --------------------------------------------------------
//~ SearchBarForm Component ------
//~ --------------------------------------------------------
function SearchBarForm({ totalBooks }: Props) {
  const [params, setParams] = useSearchParams();
  const [secondCats, setSecondCats] = useState<string[]>([]);
  const navigate = useNavigate();
  const submit = useSubmit();
  // Form Refs
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const testRef = useRef<HTMLInputElement>(null);
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
      source: params.get("source") || undefined,
      sortfield: params.get("sortfield") || undefined,
      sortdirection: params.get("sortdirection") || undefined,
      favorited: params.get("favorited") || undefined,
      listenedToFlag: params.get("listenedToFlag") || undefined,
    }),
    [params]
  );

  //~ For icon search entries (fav and listenedto)
  useEffect(() => {
    if (formRef?.current) {
      handleChange(formRef.current);
    }
  }, [isListenedTo, favoriteState]);

  // Whenever params change, we need to deal with the
  // secondary categories.  First populating them with the appropriate
  // secondary cats based on the primary selected AND if there is a secondarcat
  // in the search params, we need to make it the value on the secondary/sub cat select element
  useEffect(() => {
    secondCatsFunc();
  }, [newParams, subCatRef.current]);

  const secondCatsFunc = () => {
    if (catRef.current?.value) {
      setSecondCats(["", ...categoryMap[catRef.current?.value]]);
    } else {
      setSecondCats(["", ...secondaryCategories]);
    }

    if (newParams.secondarycat && subCatRef.current) {
      subCatRef.current.value = newParams.secondarycat;
      // catRef.current.value = "Fiction";
    }
  };
  //

  const clearSearchParams = () => {
    setSecondCats([]);
    setIsListenedTo(false);
    setFavoriteState(false);
    formRef.current?.reset();
    submit(formRef.current, { replace: true });
    // navigate("/");
  };

  const clearInputField = (inputName: string) => {
    if (inputRef.current) {
      inputRef.current?.focus();
      inputRef.current.value = "";
      handleChange(formRef.current);
    }
  };
  const clearInputFieldTest = (inputName: string) => {
    if (testRef.current) {
      testRef.current?.focus();
      testRef.current.value = "";
      handleChange(formRef.current);
    }
  };

  const submitForm = () => {
    if (formRef.current) {
      handleChange(formRef.current);
    } else {
      throw new Error(
        "Form Ref not Initialized, can't submit form... SearchBarForm.tsx"
      );
    }
  };
  //~ ----------------------------------
  //~ Auto Form submit with debouncing
  //~ ----------------------------------
  function handleChange(targetForm: HTMLFormElement) {
    submit(targetForm, { replace: true });
  }
  const db_handleChange = _.debounce((e) => handleChange(e), 300);
  //~ ----------------------------------

  return (
    <div className="flex w-full  bg-cerulean-blue-400 p-4 mb-5" id="form">
      <Form
        ref={formRef}
        onChange={(e) => db_handleChange(e.currentTarget)}
        className="flex items-center justify-between  flex-grow"
      >
        <div className="flex items-center space-x-2">
          <SearchInput
            // ref={testRef}
            defaultValue={newParams.title}
            submitForm={submitForm}
            label="Title"
            name="title"
          />

          <SearchInput
            // ref={testRef}
            defaultValue={newParams.author}
            submitForm={submitForm}
            label="Author"
            name="author"
          />

          <div className="flex flex-col">
            <label htmlFor="primarycat" className="search-form-input-label">
              Primary Cat
            </label>
            <select
              name="primarycat"
              ref={catRef}
              onChange={secondCatsFunc}
              defaultValue={newParams.primarycat}
              className="select-box w-36"
            >
              <option key="empty" value=""></option>
              {primaryCategories?.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="secondarycat" className="search-form-input-label">
              Secondary Cat
            </label>
            <select
              name="secondarycat"
              ref={subCatRef}
              defaultValue={newParams.secondarycat}
              className="select-box w-48"
            >
              {secondCats?.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          {/* Audible/Dropbox or Both */}
          <div className="flex flex-col ">
            <label htmlFor="secondarycat" className="search-form-input-label">
              Source
            </label>
            <select
              name="source"
              // ref={subCatRef}
              defaultValue={newParams.source}
              className="select-box w-32"
            >
              <option key="both" value=""></option>
              <option key="audible" value="audible">
                Audible Only
              </option>
              <option key="dropbox" value="dropbox">
                Dropbox Only
              </option>
            </select>
          </div>

          {/* FAVORITES */}
          {/* FAVORITES WORKING START -------------------------*/}
          {/* <div
            onClick={() => {
              setFavoriteState((prev) => !prev);
            }}
          >
            <input
              type="hidden"
              name="favorited"
              id="favorited"
              // defaultValue={newParams.listenedToFlag}
              // value={isListenedTo.toString() === "true" ? "false" : "true"}
              // value={isListenedTo.toString()}
              value={favoriteState.toString()}
            />
            {favoriteState ? (
              <AiFillHeart size={35} color={"#ff758c"} />
            ) : (
              <AiOutlineHeart size={35} />
            )}
          </div> */}
          {/* FAVORITES END -------------------------*/}

          <div
            onClick={() => {
              setFavoriteState((prev) => !prev);
            }}
          >
            <input
              type="hidden"
              name="favorited"
              id="favorited"
              value={favoriteState.toString()}
            />
            {favoriteState ? (
              <AiFillHeart size={35} color="red" />
            ) : (
              <AiOutlineHeart size={35} />
            )}
          </div>

          <div
            onClick={() => {
              setIsListenedTo((prev) => !prev);
            }}
          >
            <input
              type="hidden"
              name="listenedToFlag"
              id="listenedToFlag"
              value={isListenedTo.toString()}
            />
            {isListenedTo ? (
              <BsEarbuds size={35} color="green" />
            ) : (
              <BsEarbuds size={35} />
            )}
          </div>
          <button
            type="submit"
            className="bg-cerulean-blue-500 text-white text-xl px-4 py-1 border border-cerulean-blue-900 rounded-lg
            hover:bg-cerulean-blue-400 transition-all"
          >
            Filter
          </button>
          <button
            onClick={clearSearchParams}
            className="bg-cerulean-blue-500 text-white text-xl px-4 py-1 border border-cerulean-blue-900 rounded-lg
            hover:bg-cerulean-blue-400 transition-all"
          >
            Clear
          </button>
        </div>
        <div className="flex flex-col items-center border border-gray-800 bg-cerulean-blue-300 rounded-md px-2">
          <div className="text-xl">Books</div>
          <div className="text-xl">{totalBooks}</div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex flex-col">
            <label htmlFor="sortfield" className="search-form-input-label">
              Sort By
            </label>
            <select
              name="sortfield"
              defaultValue="author"
              className="select-box"
            >
              <option value="author">Author</option>
              <option value="title">Title</option>
              <option value="publishedYear">Published Year</option>
            </select>
            <input
              className="hidden"
              type="checkbox"
              id="sortdirection"
              name="sortdirection"
            />
          </div>
          <label
            htmlFor="sortdirection"
            className="mt-4 px-2 py-1 text-white border border-black bg-cerulean-blue-500 rounded-md hover:bg-cerulean-blue-400"
          >
            {newParams.sortDirection === "on" ? "desc" : "asc"}
          </label>
        </div>
      </Form>
    </div>
  );
}

export default SearchBarForm;
