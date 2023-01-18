import {
  InputField_default,
  require_auth
} from "/build/_shared/chunk-VZCHT2WQ.js";
import {
  Form,
  require_jsx_dev_runtime,
  useActionData
} from "/build/_shared/chunk-FK4ILHOD.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/__auth/login.tsx
var import_auth = __toESM(require_auth());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Login() {
  const actionData = useActionData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col flex-grow border border-black justify-center items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl mb-4", children: "Audiobook Tracker Login" }, void 0, false, {
      fileName: "app/routes/__auth/login.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Form,
      {
        method: "post",
        className: "flex flex-col rounded-lg p-6 w-96 bg-gray-400",
        children: [
          (actionData == null ? void 0 : actionData.name) === "Server Login Error" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: actionData.message }, void 0, false, {
            fileName: "app/routes/__auth/login.tsx",
            lineNumber: 58,
            columnNumber: 11
          }, this),
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
              fileName: "app/routes/__auth/login.tsx",
              lineNumber: 60,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            InputField_default,
            {
              label: "Password",
              name: "password",
              type: "password",
              error: (actionData == null ? void 0 : actionData.name) === "Validation Errors" ? actionData == null ? void 0 : actionData.password : void 0
            },
            void 0,
            false,
            {
              fileName: "app/routes/__auth/login.tsx",
              lineNumber: 70,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "button",
            {
              type: "submit",
              name: "button",
              value: "login",
              className: "rounded-lg bg-emerald-800 px-3 py-2 text-xl text-white",
              children: "Sign In"
            },
            void 0,
            false,
            {
              fileName: "app/routes/__auth/login.tsx",
              lineNumber: 81,
              columnNumber: 11
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/__auth/login.tsx",
            lineNumber: 80,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/routes/__auth/login.tsx",
        lineNumber: 53,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/__auth/login.tsx",
    lineNumber: 51,
    columnNumber: 5
  }, this);
}
var login_default = Login;
export {
  login_default as default
};
//# sourceMappingURL=/build/routes/__auth/login-HA34MHXF.js.map
