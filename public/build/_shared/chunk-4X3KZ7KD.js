import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-5TTTVQAI.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// empty-module:~/data/auth.server
var require_auth = __commonJS({
  "empty-module:~/data/auth.server"(exports, module) {
    module.exports = {};
  }
});

// app/components/input/InputField.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var initType = (type) => type === "passwordWpeek" ? "password" : type;
function InputField({ name, type, onChange, value, label, error }) {
  const controlledProps = onChange ? { onChange, value } : {};
  const [currType, setCurrType] = (0, import_react.useState)(initType(type));
  const peekPasswordToggle = () => setCurrType((state) => state === "password" ? "text" : "password");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: name, children: label }, void 0, false, {
      fileName: "app/components/input/InputField.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "input",
        {
          id: name,
          name,
          type: currType,
          className: "w-full p-2 rounded-lg my-2",
          ...controlledProps
        },
        void 0,
        false,
        {
          fileName: "app/components/input/InputField.tsx",
          lineNumber: 25,
          columnNumber: 9
        },
        this
      ),
      type === "passwordWpeek" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "div",
        {
          onMouseDown: peekPasswordToggle,
          onMouseUp: peekPasswordToggle,
          className: "cursor-pointer p-2 border border-black bg-gray-200 rounded-lg",
          children: "Peek"
        },
        void 0,
        false,
        {
          fileName: "app/components/input/InputField.tsx",
          lineNumber: 33,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/components/input/InputField.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: error }, void 0, false, {
      fileName: "app/components/input/InputField.tsx",
      lineNumber: 42,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/input/InputField.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}
var InputField_default = InputField;

export {
  require_auth,
  InputField_default
};
//# sourceMappingURL=/build/_shared/chunk-4X3KZ7KD.js.map
