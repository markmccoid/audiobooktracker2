import { useReducer, useState } from "react";
import { useFetcher } from "@remix-run/react";

type Props = {
  bookId: string | undefined;
  fieldName: string;
  origText: string;
};
function EditText({ bookId, fieldName, origText }: Props) {
  if (!bookId) return null;
  const [isEditing, toggleEditing] = useReducer((state) => {
    console.log("in reducer", state);
    return !state;
  }, false);
  const fetcher = useFetcher();
  const inputClass = isEditing ? "" : "bg-slate-300";
  return (
    <div>
      <fetcher.Form method="post">
        <div
          onClick={toggleEditing}
          className={`${isEditing ? "cursor-pointer" : "cursor-auto"}  `}
        >
          {/* <button onClick={toggleEditing}>toggle-{isEditing.toString()}</button> */}
          <input type="hidden" id="bookId" name="bookId" value={bookId} />
          <input
            type="text"
            className={`${inputClass}`}
            name={fieldName}
            id={fieldName}
            defaultValue={origText}
            disabled={!isEditing}
          />
          <button
            id="_action"
            name="_action"
            value="updateBook"
            className="button"
          >
            Save
          </button>
        </div>
      </fetcher.Form>
    </div>
  );
}

export default EditText;
