import {
  require_audiobookGet
} from "/build/_shared/chunk-LNE2JUGL.js";
import {
  require_jsx_dev_runtime,
  useLoaderData,
  useParams
} from "/build/_shared/chunk-5TTTVQAI.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/audiobooks/$bookid.tsx
var import_audiobookGet = __toESM(require_audiobookGet());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function $bookid() {
  const bookData = useLoaderData();
  console.log("bookData - $", bookData);
  const params = useParams();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-xl", children: "Book Id Dynamic route" }, void 0, false, {
      fileName: "app/routes/audiobooks/$bookid.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: params.bookid }, void 0, false, {
      fileName: "app/routes/audiobooks/$bookid.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      "TEST",
      bookData.title
    ] }, void 0, true, {
      fileName: "app/routes/audiobooks/$bookid.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: bookData.author }, void 0, false, {
      fileName: "app/routes/audiobooks/$bookid.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: bookData.releaseYear }, void 0, false, {
      fileName: "app/routes/audiobooks/$bookid.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/audiobooks/$bookid.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}
export {
  $bookid as default
};
//# sourceMappingURL=/build/routes/audiobooks/$bookid-NURKRPG5.js.map
