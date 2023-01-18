import {
  InputField_default,
  require_auth
} from "/build/_shared/chunk-VZCHT2WQ.js";
import {
  Form,
  require_jsx_dev_runtime,
  require_react,
  useActionData
} from "/build/_shared/chunk-FK4ILHOD.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/__auth/signup.tsx
var import_react2 = __toESM(require_react());
var import_auth = __toESM(require_auth());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Signup = () => {
  const [pwVisible, togglePwVisible] = (0, import_react2.useReducer)((state) => {
    return !state;
  }, false);
  const actionData = useActionData();
  console.log("actionData", actionData);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col flex-grow border border-black justify-center items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl mb-4", children: "Register for Audiobook Tracker" }, void 0, false, {
      fileName: "app/routes/__auth/signup.tsx",
      lineNumber: 67,
      columnNumber: 7
    }, this),
    (actionData == null ? void 0 : actionData.name) === "Email Exists" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: actionData.message }, void 0, false, {
      fileName: "app/routes/__auth/signup.tsx",
      lineNumber: 68,
      columnNumber: 47
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Form,
      {
        method: "post",
        className: "flex flex-col rounded-lg p-6 w-96 bg-gray-400",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            InputField_default,
            {
              label: "Email",
              name: "email",
              type: "text",
              error: (actionData == null ? void 0 : actionData.name) === "Validation Errors" ? actionData == null ? void 0 : actionData.email : void 0
            },
            void 0,
            false,
            {
              fileName: "app/routes/__auth/signup.tsx",
              lineNumber: 73,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            InputField_default,
            {
              label: "Password",
              name: "password",
              type: "passwordWpeek",
              error: (actionData == null ? void 0 : actionData.name) === "Validation Errors" ? actionData == null ? void 0 : actionData.password : void 0
            },
            void 0,
            false,
            {
              fileName: "app/routes/__auth/signup.tsx",
              lineNumber: 83,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "button",
            {
              type: "submit",
              name: "button",
              value: "signup",
              className: "rounded-lg bg-emerald-800 px-3 py-2 text-xl text-white",
              children: "Sign Up"
            },
            void 0,
            false,
            {
              fileName: "app/routes/__auth/signup.tsx",
              lineNumber: 95,
              columnNumber: 11
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/__auth/signup.tsx",
            lineNumber: 94,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/routes/__auth/signup.tsx",
        lineNumber: 69,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/__auth/signup.tsx",
    lineNumber: 66,
    columnNumber: 5
  }, this);
};
var signup_default = Signup;
export {
  signup_default as default
};
//# sourceMappingURL=/build/routes/__auth/signup-RO27GHNI.js.map
