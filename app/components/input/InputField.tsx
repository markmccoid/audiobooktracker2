import { useState } from "react";

type Props = {
  name: string;
  type: "text" | "password" | "passwordWpeek";
  onChange?: (...args: any) => any;
  value?: string;
  label: string;
  error?: string;
};

const initType = (type) => (type === "passwordWpeek" ? "password" : type);
function InputField({ name, type, onChange, value, label, error }: Props) {
  const controlledProps = onChange ? { onChange, value } : {};

  const [currType, setCurrType] = useState(initType(type));

  const peekPasswordToggle = () =>
    setCurrType((state) => (state === "password" ? "text" : "password"));

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <div className="flex items-center space-x-2">
        <input
          id={name}
          name={name}
          type={currType}
          className="w-full p-2 rounded-lg my-2"
          {...controlledProps}
        />
        {type === "passwordWpeek" && (
          <div
            onMouseDown={peekPasswordToggle}
            onMouseUp={peekPasswordToggle}
            className="cursor-pointer p-2 border border-black bg-gray-200 rounded-lg"
          >
            Peek
          </div>
        )}
      </div>
      {error && <div>{error}</div>}
    </div>
  );
}

export default InputField;
