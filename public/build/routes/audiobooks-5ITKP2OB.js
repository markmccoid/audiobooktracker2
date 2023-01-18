import {
  require_audiobookGet
} from "/build/_shared/chunk-LNE2JUGL.js";
import {
  Link,
  Outlet,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-K5QHLV7Z.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/components/audiobooks/HeaderNav.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function HeaderNav() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "flex p-4 items-center justify-center bg-cerulean-blue-600", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl text-gray-300 font-bold flex flex-grow justify-end ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/audiobooks", children: "AudioBook Tracker" }, void 0, false, {
      fileName: "app/components/audiobooks/HeaderNav.tsx",
      lineNumber: 7,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/audiobooks/HeaderNav.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-grow justify-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { action: "/logout", method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "button",
      {
        type: "submit",
        className: "bg-cerulean-blue-500 text-white text-xl px-4 py-1 border border-cerulean-blue-900 rounded-lg\r\n            hover:bg-cerulean-blue-400 transition-all",
        children: "Log Out"
      },
      void 0,
      false,
      {
        fileName: "app/components/audiobooks/HeaderNav.tsx",
        lineNumber: 11,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/audiobooks/HeaderNav.tsx",
      lineNumber: 10,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/audiobooks/HeaderNav.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/audiobooks/HeaderNav.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
var HeaderNav_default = HeaderNav;

// app/routes/audiobooks.tsx
var import_audiobookGet = __toESM(require_audiobookGet());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function Audiobooks() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HeaderNav_default, {}, void 0, false, {
      fileName: "app/routes/audiobooks.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/audiobooks.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/audiobooks.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}
export {
  Audiobooks as default
};
//# sourceMappingURL=/build/routes/audiobooks-5ITKP2OB.js.map
