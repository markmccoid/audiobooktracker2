import { useState, useRef, forwardRef } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

type Props = {
  defaultValue: string | undefined;
  label: string;
  name: string;
  submitForm: () => void;
};
function SearchInput(
  { defaultValue, label, name, submitForm }: Props,
  ref: React.RefObject<HTMLInputElement>
) {
  const internalRef = useRef<HTMLInputElement>(null);

  const clearInternal = () => {
    internalRef.current && internalRef.current.focus();
    if (internalRef.current && internalRef?.current.value !== "") {
      internalRef.current.value = "";
      submitForm();
    }
  };

  return (
    <div className="flex flex-col ">
      <label htmlFor="title" className="search-form-input-label">
        {label}
      </label>
      <div className="relative">
        <input
          className="rounded-md border-gray-300 shadow-sm pr-5
                          focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 
                          disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
          id={name}
          name={name}
          ref={internalRef}
          type="text"
          defaultValue={defaultValue}
          // value={newParams.title}
          // defaultValue={(params.get("title") as string) ?? undefined}
          // onChange={(e) => submit(e.currentTarget.form)}
        />

        <AiOutlineCloseCircle
          id="clear-title"
          onClick={(e) => {
            clearInternal();
            // clearInputField(e.currentTarget.id);
          }}
          className="absolute top-3 right-1 z-50 cursor-pointer"
          color="gray"
        />
      </div>
    </div>
  );
}

// export default forwardRef(SearchInput);
export default SearchInput;
