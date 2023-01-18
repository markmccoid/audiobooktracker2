import {
  Link,
  Outlet,
  require_jsx_dev_runtime,
  useLocation
} from "/build/_shared/chunk-5TTTVQAI.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/components/Auth/AuthHeader.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function AuthHeader() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "bg-emerald-500 p-3 flex text-3xl space-x-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "", children: "Audiobook Tracker" }, void 0, false, {
      fileName: "app/components/Auth/AuthHeader.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    isLoginPage && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/signup", className: "underline text-green-900", children: "SignUp" }, void 0, false, {
      fileName: "app/components/Auth/AuthHeader.tsx",
      lineNumber: 17,
      columnNumber: 9
    }, this),
    isLoginPage || /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/login", className: "underline text-green-900", children: "Login" }, void 0, false, {
      fileName: "app/components/Auth/AuthHeader.tsx",
      lineNumber: 22,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Auth/AuthHeader.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}
var AuthHeader_default = AuthHeader;

// app/routes/__auth.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function AuthLayout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col bg-emerald-200 h-screen w-full ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AuthHeader_default, {}, void 0, false, {
      fileName: "app/routes/__auth.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/__auth.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/__auth.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}
export {
  AuthLayout as default
};
//# sourceMappingURL=/build/routes/__auth-7EZAGBPW.js.map
