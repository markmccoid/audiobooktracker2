import { useReducer, useEffect } from "react";
import { IconType } from "react-icons";

import { ThreeOptionState } from "../searchBar/SearchBarForm";

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

type Props = {
  IconInclude: IconType;
  IconExclude: IconType;
  IconOffOverlay: IconType;
  includeColor: string;
  fieldName: string;
  submitFunction: () => void;
};
const ThreeOptionStateComponent = ({
  IconExclude,
  IconInclude,
  IconOffOverlay,
  includeColor,
  fieldName,
  submitFunction,
}: Props) => {
  const [threeOptState, toggleThreeOptState] = useReducer(
    threeWayReducer,
    "off"
  );
  useEffect(() => {
    submitFunction();
  }, [threeOptState]);
  return (
    <div>
      <div
        className="ml-2 mr-3 mt-4"
        onClick={() => {
          toggleThreeOptState({ type: threeOptState });
        }}
      >
        <input
          type="hidden"
          name={fieldName}
          id={fieldName}
          value={threeOptState.toString()}
        />
        {threeOptState === "include" && (
          <IconInclude size={35} color={includeColor} />
        )}
        {threeOptState === "off" && <IconExclude size={35} />}

        {threeOptState === "exclude" && (
          <div className="relative">
            <IconOffOverlay
              className="absolute text-red-600 opacity-85"
              size={35}
            />
            <IconExclude size={35} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ThreeOptionStateComponent;
