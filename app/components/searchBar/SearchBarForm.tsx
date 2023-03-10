import {
  useSubmit,
  Form,
  useNavigate,
  useSearchParams,
} from "@remix-run/react";
import {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";
import { Categories } from "~/data/audiobookGet.server";
import _ from "lodash";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import { BsEarbuds } from "react-icons/bs";
import { BsSlashLg } from "react-icons/bs";
import SearchInput from "../SearchInputs/SearchInput";
import ThreeOptionState from "../input/ThreeOptionState";
import ThreeOptionStateComponent from "../input/ThreeOptionState";

type Props = {
  categories: Categories;
  totalBooks: number;
};

export type ThreeOptionState = "off" | "include" | "exclude";
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
const categoryMap: Record<string, string[]> = {
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

const ratingReducer = (
  state: "asc" | "desc" | "off",
  action: { type: "asc" | "desc" | "off" }
) => {
  switch (action.type) {
    case "asc":
      state = "desc";
      break;
    case "desc":
      state = "off";
      break;
    default:
      state = "asc";
      break;
  }
  return state;
};

const threeWayReducer = (
  state: ThreeOptionState,
  action: { type: ThreeOptionState }
) => {
  switch (action.type) {
    case "include":
      state = "exclude";
      break;
    case "exclude":
      state = "off";
      break;
    default:
      state = "include";
      break;
  }
  return state;
};
//~ --------------------------------------------------------
//~ SearchBarForm Component ------
//~ --------------------------------------------------------
function SearchBarForm({ totalBooks }: Props) {
  const [params, setParams] = useSearchParams();
  const [secondCats, setSecondCats] = useState<string[]>([]);

  const submit = useSubmit();
  const [ratingSortState, toggleRSState] = useReducer(ratingReducer, "off");

  // Form Refs
  const formRef = useRef<HTMLFormElement>(null);
  const catRef = useRef<HTMLSelectElement>(null);
  const subCatRef = useRef<HTMLSelectElement>(null);

  const newParams = useMemo(
    () => ({
      title: params.get("title") || undefined,
      author: params.get("author") || undefined,
      primarycat: params.get("primarycat") || undefined,
      secondarycat: params.get("secondarycat") || undefined,
      source: params.get("source") || undefined,
      sortfield: params.get("sortfield") || undefined,
      sortDirection: params.get("sortdirection") || undefined,
      favorited: params.get("favorited") || undefined,
      listenedToFlag: params.get("listenedToFlag") || undefined,
    }),
    [params]
  );

  //~ For changes in ratingSortState
  useEffect(() => {
    db_handleChange(formRef.current);
  }, [ratingSortState]);

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

  // This currently isn't debounced because it is only used
  // to submit on a clear when using the inputField for Author and Title
  const submitForm = useCallback(() => {
    if (formRef.current) {
      handleChange(formRef.current);
    } else {
      throw new Error(
        "Form Ref not Initialized, can't submit form... SearchBarForm.tsx"
      );
    }
  }, [formRef.current]);

  //~ ----------------------------------
  //~ Auto Form submit with debouncing
  //~ ----------------------------------
  function handleChange(targetForm: HTMLFormElement) {
    submit(targetForm, { replace: true });
  }
  const db_handleChange = useCallback(
    _.debounce((e) => handleChange(e), 400),
    []
  );
  //~ ----------------------------------

  return (
    <div className="flex w-full  bg-cerulean-blue-400 p-4 mb-5" id="form">
      <Form
        ref={formRef}
        onChange={(e) => db_handleChange(e.currentTarget)}
        className="flex items-center justify-between  flex-grow"
      >
        <div className="flex items-center space-x-2">
          {/* Primary Category */}
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
          {/* Secondary Category */}
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
          {/* Title */}
          <SearchInput
            // ref={testRef}
            defaultValue={newParams.title}
            submitForm={submitForm}
            label="Title"
            name="title"
          />
          {/* Author */}
          <SearchInput
            // ref={testRef}
            defaultValue={newParams.author}
            submitForm={submitForm}
            label="Author"
            name="author"
          />
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
          {/* Favorite Flag */}

          <div className="flex ">
            {/* <div
              className="ml-2 mr-3 mt-4"
              onClick={() => {
                toggleFavoriteState({ type: favoriteState });
              }}
            >
              <input
                type="hidden"
                name="favorited"
                id="favorited"
                value={favoriteState.toString()}
              /> */}
            <ThreeOptionStateComponent
              IconExclude={AiFillHeart}
              IconInclude={AiFillHeart}
              IconOffOverlay={BsSlashLg}
              includeColor="red"
              fieldName="favorited"
              submitFunction={() => db_handleChange(formRef.current)}
            />
            {/* </div> */}
            {/* ListenedTo Three Option State off, include, exclude */}
            <ThreeOptionStateComponent
              IconExclude={BsEarbuds}
              IconInclude={BsEarbuds}
              includeColor="green"
              IconOffOverlay={BsSlashLg}
              fieldName="listenedToState"
              submitFunction={() => db_handleChange(formRef.current)}
            />
          </div>
        </div>
        <div className="flex flex-col items-center border border-gray-800 bg-cerulean-blue-300 rounded-md px-2">
          <div className="text-xl">Books</div>
          <div className="text-xl">{totalBooks}</div>
        </div>
        <div className="flex  space-x-4 mr-4 ">
          {/* Rating Sort */}
          <div className="flex flex-col justify-around ">
            <input
              type="hidden"
              name="ratingsort"
              id="ratingsort"
              value={ratingSortState}
            />
            <div className="search-form-input-label ml-0">Rating Sort</div>
            <div
              className="cursor-pointer px-2 py-1 text-white text-center self-center w-14 border border-black bg-cerulean-blue-500 rounded-md hover:bg-cerulean-blue-400"
              onClick={() => toggleRSState({ type: ratingSortState })}
            >
              {`${ratingSortState[0].toUpperCase()}${ratingSortState.slice(1)}`}
            </div>
          </div>
          {/* Rating Sort END */}

          <div className="flex flex-col">
            <div className="flex justify-between">
              <label
                htmlFor="sortfield"
                className="search-form-input-label self-center"
              >
                Sort By
              </label>
              <input
                className="hidden"
                type="checkbox"
                id="sortdirection"
                name="sortdirection"
              />
              <label
                htmlFor="sortdirection"
                className="cursor-pointer px-2 py-1 text-white border border-black bg-cerulean-blue-500 rounded-md hover:bg-cerulean-blue-400"
              >
                {newParams.sortDirection === "on" ? "Desc" : "Asc"}
              </label>
            </div>
            <select
              name="sortfield"
              defaultValue="author"
              className="select-box"
            >
              <option value="author">Author</option>
              <option value="title">Title</option>
              <option value="publishedYear">Published Year</option>
            </select>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default SearchBarForm;
