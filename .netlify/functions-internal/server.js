var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 12,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    headers: responseHeaders,
    status: responseStatusCode
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// app/styles/app.css
var app_default = "/build/_assets/app-XP352QNG.css";

// node_modules/@smastrom/react-rating/style.css
var style_default = "/build/_assets/style-ORCDX5CJ.css";

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 33,
    columnNumber: 5
  }, this);
}
var loader = () => (console.log("Root Loader Run"), null), links = () => [
  {
    rel: "stylesheet",
    href: app_default
  },
  {
    rel: "stylesheet",
    href: style_default
  }
], ErrorBoundary = ({ error }) => (console.log("Error Boundary", error), /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { children: "Uncaught Error Boundary" }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 77,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { children: error.message }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 78,
    columnNumber: 9
  }, this)
] }, void 0, !0, {
  fileName: "app/root.tsx",
  lineNumber: 76,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/root.tsx",
  lineNumber: 75,
  columnNumber: 5
}, this)), CatchBoundary = () => {
  var _a;
  let caughtResponse = (0, import_react2.useCatch)();
  return console.log("catchboundary", caughtResponse), /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { children: "Uncaught Error Catch" }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 91,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { children: caughtResponse == null ? void 0 : caughtResponse.statusText }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 92,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { children: (_a = caughtResponse.data) == null ? void 0 : _a.message }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 93,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 90,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 89,
    columnNumber: 5
  }, this);
};

// app/routes/audiobooks.tsx
var audiobooks_exports = {};
__export(audiobooks_exports, {
  default: () => Audiobooks
});
var import_react4 = require("@remix-run/react");

// app/components/audiobooks/HeaderNav.tsx
var import_react3 = require("@remix-run/react"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function HeaderNav() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("nav", { className: "flex p-4 items-center justify-center bg-cerulean-blue-600", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: "text-3xl text-gray-300 font-bold flex flex-grow justify-end ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { to: "/audiobooks", children: "AudioBook Tracker" }, void 0, !1, {
      fileName: "app/components/audiobooks/HeaderNav.tsx",
      lineNumber: 7,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/audiobooks/HeaderNav.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-grow justify-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("form", { action: "/logout", method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      "button",
      {
        type: "submit",
        className: `bg-cerulean-blue-500 text-white text-xl px-4 py-1 border border-cerulean-blue-900 rounded-lg\r
            hover:bg-cerulean-blue-400 transition-all`,
        children: "Log Out"
      },
      void 0,
      !1,
      {
        fileName: "app/components/audiobooks/HeaderNav.tsx",
        lineNumber: 11,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/audiobooks/HeaderNav.tsx",
      lineNumber: 10,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/audiobooks/HeaderNav.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/audiobooks/HeaderNav.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
var HeaderNav_default = HeaderNav;

// app/routes/audiobooks.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function Audiobooks() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(HeaderNav_default, {}, void 0, !1, {
      fileName: "app/routes/audiobooks.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Outlet, {}, void 0, !1, {
      fileName: "app/routes/audiobooks.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/audiobooks.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/routes/audiobooks/$bookId.tsx
var bookId_exports = {};
__export(bookId_exports, {
  default: () => $bookid,
  loader: () => loader2
});
var import_react5 = require("@remix-run/react"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function $bookid() {
  let bookId = (0, import_react5.useLoaderData)();
  console.log("bookData - $", bookId);
  let params = (0, import_react5.useParams)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { className: "text-xl", children: "Book Id Dynamic route" }, void 0, !1, {
      fileName: "app/routes/audiobooks/$bookId.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: params.bookid }, void 0, !1, {
      fileName: "app/routes/audiobooks/$bookId.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Link, { to: "../", children: "Go Back" }, void 0, !1, {
      fileName: "app/routes/audiobooks/$bookId.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Outlet, {}, void 0, !1, {
      fileName: "app/routes/audiobooks/$bookId.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/audiobooks/$bookId.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}
function loader2({ params }) {
  return console.log("params", params), params.bookId;
}

// app/routes/audiobooks/$bookId/edit.subEdit.tsx
var edit_subEdit_exports = {};
__export(edit_subEdit_exports, {
  default: () => edit_subEdit_default
});
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function SubEdit() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: "IN Sub EDIT" }, void 0, !1, {
    fileName: "app/routes/audiobooks/$bookId/edit.subEdit.tsx",
    lineNumber: 2,
    columnNumber: 10
  }, this);
}
var edit_subEdit_default = SubEdit;

// app/routes/audiobooks/$bookId/index.tsx
var bookId_exports2 = {};
__export(bookId_exports2, {
  default: () => bookId_default
});
var import_react6 = require("@remix-run/react"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function BookId() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: [
    "In OUTLET 1",
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react6.Outlet, {}, void 0, !1, {
      fileName: "app/routes/audiobooks/$bookId/index.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/audiobooks/$bookId/index.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
var bookId_default = BookId;

// app/routes/audiobooks/$bookId/edit.tsx
var edit_exports = {};
__export(edit_exports, {
  default: () => edit_default
});
var import_react7 = require("@remix-run/react"), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function Edit() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: [
    "Editing",
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react7.Outlet, {}, void 0, !1, {
      fileName: "app/routes/audiobooks/$bookId/edit.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/audiobooks/$bookId/edit.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
var edit_default = Edit;

// app/routes/audiobooks/index.tsx
var audiobooks_exports2 = {};
__export(audiobooks_exports2, {
  action: () => action,
  default: () => Index,
  loader: () => loader3
});
var import_react19 = require("@remix-run/react");

// app/data/audiobookLoader.server.ts
var import_node = require("@remix-run/node"), import_fs = __toESM(require("fs"));
function readBookMetadata() {
  let rawFileContent = import_fs.default.readFileSync("bookMetadata.json", {
    encoding: "utf-8"
  });
  if (!rawFileContent)
    throw (0, import_node.json)(
      { message: "No books records Found" },
      { status: 404, statusText: "Not Found" }
    );
  return JSON.parse(rawFileContent);
}

// app/data/audiobookGet.server.ts
var import_lodash = __toESM(require("lodash"));

// app/data/prisma.server.ts
var import_client = require("@prisma/client"), prisma;
global.__db || (global.__db = new import_client.PrismaClient(), global.__db.$connect()), prisma = global.__db;

// app/data/audiobookGet.server.ts
function getCategories() {
  let bookMetadata = readBookMetadata();
  return {
    primaryCategories: bookMetadata.primaryCategories,
    secondaryCategories: bookMetadata.secondaryCategories,
    categoryMap: bookMetadata.categoryMap
  };
}

// app/components/audiobooks/BookCard.tsx
var import_react13 = require("@remix-run/react"), import_fa = require("react-icons/fa");

// app/components/audiobooks/BookImage.tsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function BookImage({ imageUrl, width, height, bookTitle }) {
  let noImage = !imageUrl || !(imageUrl != null && imageUrl.includes("http"));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, { children: noImage ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
    "div",
    {
      className: `w-[${128}px] h-[${200}px] border border-gray-700 rounded-lg`,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
        "img",
        {
          className: "border border-gray-700 rounded-lg",
          src: `https://via.placeholder.com/128x200?text=${bookTitle}`,
          width: `${width}px`,
          height: `${height}px`
        },
        void 0,
        !1,
        {
          fileName: "app/components/audiobooks/BookImage.tsx",
          lineNumber: 16,
          columnNumber: 11
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/components/audiobooks/BookImage.tsx",
      lineNumber: 13,
      columnNumber: 9
    },
    this
  ) : /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
    "img",
    {
      className: "border border-gray-700 rounded-lg",
      src: imageUrl,
      width: `${width}px`,
      height: `${height}px`
    },
    void 0,
    !1,
    {
      fileName: "app/components/audiobooks/BookImage.tsx",
      lineNumber: 24,
      columnNumber: 9
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/audiobooks/BookImage.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
var BookImage_default = BookImage;

// app/components/audiobooks/BookFavorite.tsx
var import_react8 = require("@remix-run/react"), import_ai = require("react-icons/ai"), import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function BookFavorite({ book }) {
  var _a, _b;
  let fetcher = (0, import_react8.useFetcher)(), favoriteFlag = ((_a = fetcher == null ? void 0 : fetcher.submission) == null ? void 0 : _a.formData.get("bookid")) === book.id ? !(book != null && book.favorite) : book == null ? void 0 : book.favorite;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(fetcher.Form, { method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      "input",
      {
        type: "hidden",
        id: "favorite",
        name: "favorite",
        value: (_b = book == null ? void 0 : book.favorite) == null ? void 0 : _b.toString()
      },
      void 0,
      !1,
      {
        fileName: "app/components/audiobooks/BookFavorite.tsx",
        lineNumber: 14,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("input", { type: "hidden", id: "bookid", name: "bookid", value: book.id }, void 0, !1, {
      fileName: "app/components/audiobooks/BookFavorite.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      "button",
      {
        type: "submit",
        "aria-label": "toggle favorite",
        name: "_action",
        value: "toggle-favorite",
        children: favoriteFlag ? /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_ai.AiFillHeart, { size: 35, color: "red" }, void 0, !1, {
          fileName: "app/components/audiobooks/BookFavorite.tsx",
          lineNumber: 29,
          columnNumber: 11
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_ai.AiOutlineHeart, { size: 35, color: "black" }, void 0, !1, {
          fileName: "app/components/audiobooks/BookFavorite.tsx",
          lineNumber: 31,
          columnNumber: 11
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/audiobooks/BookFavorite.tsx",
        lineNumber: 22,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/audiobooks/BookFavorite.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}
var BookFavorite_default = BookFavorite;

// app/components/audiobooks/BookListenedTo.tsx
var import_react9 = require("@remix-run/react"), import_bs = require("react-icons/bs"), import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function BookListenedTo({ book }) {
  var _a;
  let fetcher = (0, import_react9.useFetcher)(), BookListenedTo2 = book == null ? void 0 : book.listenedTo, optimisticValue = ((_a = fetcher == null ? void 0 : fetcher.submission) == null ? void 0 : _a.formData.get("bookid")) === book.id ? !BookListenedTo2 : BookListenedTo2;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(fetcher.Form, { method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
      "input",
      {
        type: "hidden",
        id: "listenedto",
        name: "listenedto",
        value: BookListenedTo2 == null ? void 0 : BookListenedTo2.toString()
      },
      void 0,
      !1,
      {
        fileName: "app/components/audiobooks/BookListenedTo.tsx",
        lineNumber: 16,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("input", { type: "hidden", id: "bookid", name: "bookid", value: book.id }, void 0, !1, {
      fileName: "app/components/audiobooks/BookListenedTo.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
      "button",
      {
        type: "submit",
        "aria-label": "toggle listenedto",
        name: "_action",
        value: "toggle-listenedto",
        children: optimisticValue ? /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_bs.BsEarbuds, { size: 35, color: "green" }, void 0, !1, {
          fileName: "app/components/audiobooks/BookListenedTo.tsx",
          lineNumber: 31,
          columnNumber: 11
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_bs.BsEarbuds, { size: 35, color: "black" }, void 0, !1, {
          fileName: "app/components/audiobooks/BookListenedTo.tsx",
          lineNumber: 33,
          columnNumber: 11
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/audiobooks/BookListenedTo.tsx",
        lineNumber: 24,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/audiobooks/BookListenedTo.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}
var BookListenedTo_default = BookListenedTo;

// app/hooks/useCopyToClip.ts
var import_react10 = require("react");
function useCopyToClip(timeout) {
  let [copiedText, setCopiedText] = (0, import_react10.useState)(null);
  return (0, import_react10.useEffect)(() => {
    copiedText && setTimeout(() => setCopiedText(null), timeout);
  }, [copiedText]), [copiedText, async (text) => {
    if (!(navigator != null && navigator.clipboard))
      return console.warn("Clipboard not supported"), !1;
    try {
      return await navigator.clipboard.writeText(text), setCopiedText(text), !0;
    } catch (error) {
      return console.warn("Copy failed", error), setCopiedText(null), !1;
    }
  }];
}
var useCopyToClip_default = useCopyToClip;

// app/components/audiobooks/BookRatingSet.tsx
var import_react11 = require("@remix-run/react"), import_react_rating = require("@smastrom/react-rating"), import_react12 = require("react"), import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function BookRatingSet({ book }) {
  var _a;
  let fetcher = (0, import_react11.useFetcher)(), [rating, setRating] = (0, import_react12.useState)((book == null ? void 0 : book.rating) || 0), [doSubmit, setDoSubmit] = (0, import_react12.useState)(!1), isSubmitting = ((_a = fetcher == null ? void 0 : fetcher.submission) == null ? void 0 : _a.formData.get("bookid")) === book.id, formRef = (0, import_react12.useRef)(null);
  return (0, import_react12.useEffect)(() => {
    doSubmit && formRef.current && (fetcher.submit(formRef.current), setDoSubmit(!1));
  }, [rating]), /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(fetcher.Form, { method: "post", ref: formRef, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("input", { type: "hidden", id: "rating", name: "rating", value: rating }, void 0, !1, {
      fileName: "app/components/audiobooks/BookRatingSet.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("input", { type: "hidden", id: "bookid", name: "bookid", value: book.id }, void 0, !1, {
      fileName: "app/components/audiobooks/BookRatingSet.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("input", { type: "hidden", id: "_action", name: "_action", value: "rating" }, void 0, !1, {
      fileName: "app/components/audiobooks/BookRatingSet.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
      import_react_rating.Rating,
      {
        items: 10,
        transition: "zoom",
        value: rating,
        isDisabled: isSubmitting,
        onChange: (value) => {
          setRating(value), setDoSubmit(!0);
        }
      },
      void 0,
      !1,
      {
        fileName: "app/components/audiobooks/BookRatingSet.tsx",
        lineNumber: 27,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/audiobooks/BookRatingSet.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}
var BookRatingSet_default = BookRatingSet;

// app/components/audiobooks/BookCard.tsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), BookCard = ({ book }) => {
  var _a, _b, _c;
  let [value, copy] = useCopyToClip_default(3e3), noImage = !book.imageURL || !((_a = book.imageURL) != null && _a.includes("http")), amazonLink = `https://www.amazon.com/s/?search-alias=stripbooks&field-author=${book.author}&field-title=${book.title}`, audibleLink = book != null && book.asin ? `https://www.audible.com/pd/${book == null ? void 0 : book.asin}` : void 0, twColor = book.source === "audible" ? "audible" : "cerulean-blue", titleBGColor = book.source === "audible" ? "bg-audible-500" : "bg-cerulean-blue-500", titleTextColor = book.source === "audible" ? "text-audible-900" : "text-cerulean-blue-100", borderColor = book.source === "audible" ? "border-b-audible-900" : "border-b-cerulean-blue-900", cardBGColor = book.source === "audible" ? "bg-audible-300" : "bg-cerulean-blue-300";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
    "div",
    {
      className: `flex flex-col w-[375px] h-[475px] border border-black m-3 ${cardBGColor}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
          "div",
          {
            className: `border-b ${borderColor} ${titleTextColor} ${titleBGColor}  p-1 pb-2`,
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "flex text-xl font-semibold justify-around", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react13.Link, { to: `./${book.id}`, children: book.title }, void 0, !1, {
                fileName: "app/components/audiobooks/BookCard.tsx",
                lineNumber: 41,
                columnNumber: 11
              }, this) }, void 0, !1, {
                fileName: "app/components/audiobooks/BookCard.tsx",
                lineNumber: 40,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "flex flex-row items-center justify-between", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "max-w-[65%]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(BookRatingSet_default, { book }, void 0, !1, {
                  fileName: "app/components/audiobooks/BookCard.tsx",
                  lineNumber: 45,
                  columnNumber: 13
                }, this) }, void 0, !1, {
                  fileName: "app/components/audiobooks/BookCard.tsx",
                  lineNumber: 44,
                  columnNumber: 11
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "flex flex-row flex-grow ml-4 mr-2 justify-around", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(BookFavorite_default, { book }, void 0, !1, {
                    fileName: "app/components/audiobooks/BookCard.tsx",
                    lineNumber: 48,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(BookListenedTo_default, { book }, void 0, !1, {
                    fileName: "app/components/audiobooks/BookCard.tsx",
                    lineNumber: 49,
                    columnNumber: 13
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/components/audiobooks/BookCard.tsx",
                  lineNumber: 47,
                  columnNumber: 11
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/audiobooks/BookCard.tsx",
                lineNumber: 43,
                columnNumber: 9
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/audiobooks/BookCard.tsx",
            lineNumber: 37,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "flex ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
            "a",
            {
              href: audibleLink || amazonLink,
              target: "_blank",
              className: `mx-2 mt-2 flex-shrink-0 hover:border-2 transition-all\r
          hover:border-cerulean-blue-600 hover:rounded-lg`,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
                BookImage_default,
                {
                  imageUrl: book.imageURL,
                  width: 128,
                  height: 205,
                  bookTitle: book.title
                },
                void 0,
                !1,
                {
                  fileName: "app/components/audiobooks/BookCard.tsx",
                  lineNumber: 60,
                  columnNumber: 11
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/components/audiobooks/BookCard.tsx",
              lineNumber: 54,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "flex flex-col mt-2 ", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "book-text-dets", children: book.author }, void 0, !1, {
              fileName: "app/components/audiobooks/BookCard.tsx",
              lineNumber: 68,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "book-text-dets", children: [
              "Published - ",
              book.publishedYear
            ] }, void 0, !0, {
              fileName: "app/components/audiobooks/BookCard.tsx",
              lineNumber: 69,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "book-text-dets", children: [
              "Length -",
              " ",
              book.bookLengthText ? book.bookLengthText : book.pageCount
            ] }, void 0, !0, {
              fileName: "app/components/audiobooks/BookCard.tsx",
              lineNumber: 70,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "book-text-dets", children: [
              book.primaryCategory,
              "-",
              book.secondaryCategory
            ] }, void 0, !0, {
              fileName: "app/components/audiobooks/BookCard.tsx",
              lineNumber: 74,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: `text-md ${titleTextColor} font-semibold`, children: book.genres.join(", ") }, void 0, !1, {
              fileName: "app/components/audiobooks/BookCard.tsx",
              lineNumber: 77,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/audiobooks/BookCard.tsx",
            lineNumber: 67,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/audiobooks/BookCard.tsx",
          lineNumber: 53,
          columnNumber: 7
        }, this),
        book.dropboxLocation ? /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "mt-2 flex flex-col flex-grow overflow-visible relative", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
            "div",
            {
              className: "absolute text-white top-1 right-1 hover:text-green-200 hover:animate-pulse cursor-pointer",
              onClick: () => {
                copy(book.dropboxLocation || "");
              },
              children: value ? /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_fa.FaClipboardCheck, { size: 20, color: "lightgreen" }, void 0, !1, {
                fileName: "app/components/audiobooks/BookCard.tsx",
                lineNumber: 91,
                columnNumber: 15
              }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_fa.FaClipboard, { size: 20 }, void 0, !1, {
                fileName: "app/components/audiobooks/BookCard.tsx",
                lineNumber: 93,
                columnNumber: 15
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/audiobooks/BookCard.tsx",
              lineNumber: 84,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "pt-1 bg-cerulean-blue-700 text-green-200 text-center", children: (_b = book.dropboxLocation) == null ? void 0 : _b.split("/").slice(4, 6).join("/") }, void 0, !1, {
            fileName: "app/components/audiobooks/BookCard.tsx",
            lineNumber: 96,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "pb-1 bg-cerulean-blue-700 text-white text-sm text-center", children: (_c = book.dropboxLocation) == null ? void 0 : _c.split("/").slice(6).join("/") }, void 0, !1, {
            fileName: "app/components/audiobooks/BookCard.tsx",
            lineNumber: 99,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/audiobooks/BookCard.tsx",
          lineNumber: 83,
          columnNumber: 9
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "mt-2 h-3 bg-audible-700 overflow-visible" }, void 0, !1, {
          fileName: "app/components/audiobooks/BookCard.tsx",
          lineNumber: 104,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
          "div",
          {
            className: `p-2 pb-0 my-1
                  flex-grow overflow-hidden overflow-y-scroll scrollbar-hide`,
            children: book.description
          },
          void 0,
          !1,
          {
            fileName: "app/components/audiobooks/BookCard.tsx",
            lineNumber: 106,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/audiobooks/BookCard.tsx",
      lineNumber: 34,
      columnNumber: 5
    },
    this
  );
}, BookCard_default = BookCard;

// app/components/searchBar/SearchBarForm.tsx
var import_react16 = require("@remix-run/react"), import_react17 = require("react"), import_lodash2 = __toESM(require("lodash")), import_ai3 = require("react-icons/ai"), import_bs2 = require("react-icons/bs"), import_bs3 = require("react-icons/bs");

// app/components/SearchInputs/SearchInput.tsx
var import_react14 = require("react"), import_ai2 = require("react-icons/ai"), import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function SearchInput({ defaultValue, label, name, submitForm }, ref) {
  let internalRef = (0, import_react14.useRef)(null), clearInternal = () => {
    internalRef.current && internalRef.current.focus(), internalRef.current && (internalRef == null ? void 0 : internalRef.current.value) !== "" && (internalRef.current.value = "", submitForm());
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex flex-col ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("label", { htmlFor: "title", className: "search-form-input-label", children: label }, void 0, !1, {
      fileName: "app/components/SearchInputs/SearchInput.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "relative", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
        "input",
        {
          className: `rounded-md border-gray-300 shadow-sm pr-5\r
                          focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 \r
                          disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500`,
          id: name,
          name,
          ref: internalRef,
          type: "text",
          defaultValue
        },
        void 0,
        !1,
        {
          fileName: "app/components/SearchInputs/SearchInput.tsx",
          lineNumber: 30,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
        import_ai2.AiOutlineCloseCircle,
        {
          id: "clear-title",
          onClick: (e) => {
            clearInternal();
          },
          className: "absolute top-3 right-1 z-50 cursor-pointer",
          color: "gray"
        },
        void 0,
        !1,
        {
          fileName: "app/components/SearchInputs/SearchInput.tsx",
          lineNumber: 44,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/SearchInputs/SearchInput.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/SearchInputs/SearchInput.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}
var SearchInput_default = SearchInput;

// app/components/input/ThreeOptionState.tsx
var import_react15 = require("react"), import_jsx_dev_runtime15 = require("react/jsx-dev-runtime"), threeWayReducer = (state, action5) => {
  switch (action5.type) {
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
}, ThreeOptionStateComponent = ({
  IconExclude,
  IconInclude,
  IconOffOverlay,
  includeColor,
  fieldName,
  submitFunction
}) => {
  let [threeOptState, toggleThreeOptState] = (0, import_react15.useReducer)(
    threeWayReducer,
    "off"
  );
  return (0, import_react15.useEffect)(() => {
    submitFunction();
  }, [threeOptState]), /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
    "div",
    {
      className: "ml-2 mr-3 mt-4",
      onClick: () => {
        toggleThreeOptState({ type: threeOptState });
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
          "input",
          {
            type: "hidden",
            name: fieldName,
            id: fieldName,
            value: threeOptState.toString()
          },
          void 0,
          !1,
          {
            fileName: "app/components/input/ThreeOptionState.tsx",
            lineNumber: 55,
            columnNumber: 9
          },
          this
        ),
        threeOptState === "include" && /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(IconInclude, { size: 35, color: includeColor }, void 0, !1, {
          fileName: "app/components/input/ThreeOptionState.tsx",
          lineNumber: 62,
          columnNumber: 11
        }, this),
        threeOptState === "off" && /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(IconExclude, { size: 35 }, void 0, !1, {
          fileName: "app/components/input/ThreeOptionState.tsx",
          lineNumber: 64,
          columnNumber: 37
        }, this),
        threeOptState === "exclude" && /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "relative", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
            IconOffOverlay,
            {
              className: "absolute text-red-600 opacity-85",
              size: 35
            },
            void 0,
            !1,
            {
              fileName: "app/components/input/ThreeOptionState.tsx",
              lineNumber: 68,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(IconExclude, { size: 35 }, void 0, !1, {
            fileName: "app/components/input/ThreeOptionState.tsx",
            lineNumber: 72,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/input/ThreeOptionState.tsx",
          lineNumber: 67,
          columnNumber: 11
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/input/ThreeOptionState.tsx",
      lineNumber: 49,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/input/ThreeOptionState.tsx",
    lineNumber: 48,
    columnNumber: 5
  }, this);
}, ThreeOptionState_default = ThreeOptionStateComponent;

// app/components/searchBar/SearchBarForm.tsx
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime"), primaryCategories = ["Biographies", "Fiction", "Language", "NonFiction"], secondaryCategories = [
  "Celebrity",
  "Historical",
  "Science",
  "Action Suspense",
  "Fantasy",
  "General Fiction",
  "Horror",
  "SciFi",
  "Business Wealth",
  "Education",
  "Health Wellness",
  "Productivity",
  "Self Help",
  "Spirituality",
  "Success Motivation",
  "Technology",
  "TTC"
], categoryMap = {
  Biographies: ["Celebrity", "Historical", "Science"],
  Fiction: ["Action Suspense", "Fantasy", "General Fiction", "Horror", "SciFi"],
  Language: [],
  NonFiction: [
    "Business Wealth",
    "Education",
    "Health Wellness",
    "Productivity",
    "Science",
    "Self Help",
    "Spirituality",
    "Success Motivation",
    "Technology",
    "TTC"
  ]
}, ratingReducer = (state, action5) => {
  switch (action5.type) {
    case "asc":
      state = "desc";
      break;
    case "desc":
      state = "off";
      break;
    default:
      state = "asc";
      break;
  }
  return state;
};
function SearchBarForm({ totalBooks }) {
  let [params, setParams] = (0, import_react16.useSearchParams)(), [secondCats, setSecondCats] = (0, import_react17.useState)([]), submit = (0, import_react16.useSubmit)(), [ratingSortState, toggleRSState] = (0, import_react17.useReducer)(ratingReducer, "off"), formRef = (0, import_react17.useRef)(null), catRef = (0, import_react17.useRef)(null), subCatRef = (0, import_react17.useRef)(null), newParams = (0, import_react17.useMemo)(
    () => ({
      title: params.get("title") || void 0,
      author: params.get("author") || void 0,
      primarycat: params.get("primarycat") || void 0,
      secondarycat: params.get("secondarycat") || void 0,
      source: params.get("source") || void 0,
      sortfield: params.get("sortfield") || void 0,
      sortDirection: params.get("sortdirection") || void 0,
      favorited: params.get("favorited") || void 0,
      listenedToFlag: params.get("listenedToFlag") || void 0
    }),
    [params]
  );
  (0, import_react17.useEffect)(() => {
    db_handleChange(formRef.current);
  }, [ratingSortState]), (0, import_react17.useEffect)(() => {
    secondCatsFunc();
  }, [newParams, subCatRef.current]);
  let secondCatsFunc = () => {
    var _a, _b;
    (_a = catRef.current) != null && _a.value ? setSecondCats(["", ...categoryMap[(_b = catRef.current) == null ? void 0 : _b.value]]) : setSecondCats(["", ...secondaryCategories]), newParams.secondarycat && subCatRef.current && (subCatRef.current.value = newParams.secondarycat);
  }, submitForm = (0, import_react17.useCallback)(() => {
    if (formRef.current)
      handleChange(formRef.current);
    else
      throw new Error(
        "Form Ref not Initialized, can't submit form... SearchBarForm.tsx"
      );
  }, [formRef.current]);
  function handleChange(targetForm) {
    submit(targetForm, { replace: !0 });
  }
  let db_handleChange = (0, import_react17.useCallback)(
    import_lodash2.default.debounce((e) => handleChange(e), 400),
    []
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex w-full  bg-cerulean-blue-400 p-4 mb-5", id: "form", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
    import_react16.Form,
    {
      ref: formRef,
      onChange: (e) => db_handleChange(e.currentTarget),
      className: "flex items-center justify-between  flex-grow",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("label", { htmlFor: "primarycat", className: "search-form-input-label", children: "Primary Cat" }, void 0, !1, {
              fileName: "app/components/searchBar/SearchBarForm.tsx",
              lineNumber: 201,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
              "select",
              {
                name: "primarycat",
                ref: catRef,
                onChange: secondCatsFunc,
                defaultValue: newParams.primarycat,
                className: "select-box w-36",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("option", { value: "" }, "empty", !1, {
                    fileName: "app/components/searchBar/SearchBarForm.tsx",
                    lineNumber: 211,
                    columnNumber: 15
                  }, this),
                  primaryCategories == null ? void 0 : primaryCategories.map((cat) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("option", { value: cat, children: cat }, cat, !1, {
                    fileName: "app/components/searchBar/SearchBarForm.tsx",
                    lineNumber: 213,
                    columnNumber: 17
                  }, this))
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/components/searchBar/SearchBarForm.tsx",
                lineNumber: 204,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/searchBar/SearchBarForm.tsx",
            lineNumber: 200,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("label", { htmlFor: "secondarycat", className: "search-form-input-label", children: "Secondary Cat" }, void 0, !1, {
              fileName: "app/components/searchBar/SearchBarForm.tsx",
              lineNumber: 221,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
              "select",
              {
                name: "secondarycat",
                ref: subCatRef,
                defaultValue: newParams.secondarycat,
                className: "select-box w-48",
                children: secondCats == null ? void 0 : secondCats.map((cat) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("option", { value: cat, children: cat }, cat, !1, {
                  fileName: "app/components/searchBar/SearchBarForm.tsx",
                  lineNumber: 231,
                  columnNumber: 17
                }, this))
              },
              void 0,
              !1,
              {
                fileName: "app/components/searchBar/SearchBarForm.tsx",
                lineNumber: 224,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/searchBar/SearchBarForm.tsx",
            lineNumber: 220,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
            SearchInput_default,
            {
              defaultValue: newParams.title,
              submitForm,
              label: "Title",
              name: "title"
            },
            void 0,
            !1,
            {
              fileName: "app/components/searchBar/SearchBarForm.tsx",
              lineNumber: 238,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
            SearchInput_default,
            {
              defaultValue: newParams.author,
              submitForm,
              label: "Author",
              name: "author"
            },
            void 0,
            !1,
            {
              fileName: "app/components/searchBar/SearchBarForm.tsx",
              lineNumber: 246,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex flex-col ", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("label", { htmlFor: "secondarycat", className: "search-form-input-label", children: "Source" }, void 0, !1, {
              fileName: "app/components/searchBar/SearchBarForm.tsx",
              lineNumber: 255,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
              "select",
              {
                name: "source",
                defaultValue: newParams.source,
                className: "select-box w-32",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("option", { value: "" }, "both", !1, {
                    fileName: "app/components/searchBar/SearchBarForm.tsx",
                    lineNumber: 264,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("option", { value: "audible", children: "Audible Only" }, "audible", !1, {
                    fileName: "app/components/searchBar/SearchBarForm.tsx",
                    lineNumber: 265,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("option", { value: "dropbox", children: "Dropbox Only" }, "dropbox", !1, {
                    fileName: "app/components/searchBar/SearchBarForm.tsx",
                    lineNumber: 268,
                    columnNumber: 15
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/components/searchBar/SearchBarForm.tsx",
                lineNumber: 258,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/searchBar/SearchBarForm.tsx",
            lineNumber: 254,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex ", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
              ThreeOptionState_default,
              {
                IconExclude: import_ai3.AiFillHeart,
                IconInclude: import_ai3.AiFillHeart,
                IconOffOverlay: import_bs3.BsSlashLg,
                includeColor: "red",
                fieldName: "favorited",
                submitFunction: () => db_handleChange(formRef.current)
              },
              void 0,
              !1,
              {
                fileName: "app/components/searchBar/SearchBarForm.tsx",
                lineNumber: 312,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
              ThreeOptionState_default,
              {
                IconExclude: import_bs2.BsEarbuds,
                IconInclude: import_bs2.BsEarbuds,
                includeColor: "green",
                IconOffOverlay: import_bs3.BsSlashLg,
                fieldName: "listenedToState",
                submitFunction: () => db_handleChange(formRef.current)
              },
              void 0,
              !1,
              {
                fileName: "app/components/searchBar/SearchBarForm.tsx",
                lineNumber: 322,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/searchBar/SearchBarForm.tsx",
            lineNumber: 299,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/searchBar/SearchBarForm.tsx",
          lineNumber: 198,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex flex-col items-center border border-gray-800 bg-cerulean-blue-300 rounded-md px-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "text-xl", children: "Books" }, void 0, !1, {
            fileName: "app/components/searchBar/SearchBarForm.tsx",
            lineNumber: 333,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "text-xl", children: totalBooks }, void 0, !1, {
            fileName: "app/components/searchBar/SearchBarForm.tsx",
            lineNumber: 334,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/searchBar/SearchBarForm.tsx",
          lineNumber: 332,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex  space-x-4 mr-4 ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex flex-col justify-around ", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
              "input",
              {
                type: "hidden",
                name: "ratingsort",
                id: "ratingsort",
                value: ratingSortState
              },
              void 0,
              !1,
              {
                fileName: "app/components/searchBar/SearchBarForm.tsx",
                lineNumber: 339,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "search-form-input-label ml-0", children: "Rating Sort" }, void 0, !1, {
              fileName: "app/components/searchBar/SearchBarForm.tsx",
              lineNumber: 345,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
              "div",
              {
                className: "cursor-pointer px-2 py-1 text-white text-center self-center w-14 border border-black bg-cerulean-blue-500 rounded-md hover:bg-cerulean-blue-400",
                onClick: () => toggleRSState({ type: ratingSortState }),
                children: `${ratingSortState[0].toUpperCase()}${ratingSortState.slice(1)}`
              },
              void 0,
              !1,
              {
                fileName: "app/components/searchBar/SearchBarForm.tsx",
                lineNumber: 346,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/searchBar/SearchBarForm.tsx",
            lineNumber: 338,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
                "label",
                {
                  htmlFor: "sortfield",
                  className: "search-form-input-label self-center",
                  children: "Sort By"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/searchBar/SearchBarForm.tsx",
                  lineNumber: 357,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
                "input",
                {
                  className: "hidden",
                  type: "checkbox",
                  id: "sortdirection",
                  name: "sortdirection"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/searchBar/SearchBarForm.tsx",
                  lineNumber: 363,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
                "label",
                {
                  htmlFor: "sortdirection",
                  className: "cursor-pointer px-2 py-1 text-white border border-black bg-cerulean-blue-500 rounded-md hover:bg-cerulean-blue-400",
                  children: newParams.sortDirection === "on" ? "Desc" : "Asc"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/searchBar/SearchBarForm.tsx",
                  lineNumber: 369,
                  columnNumber: 15
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/components/searchBar/SearchBarForm.tsx",
              lineNumber: 356,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
              "select",
              {
                name: "sortfield",
                defaultValue: "author",
                className: "select-box",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("option", { value: "author", children: "Author" }, void 0, !1, {
                    fileName: "app/components/searchBar/SearchBarForm.tsx",
                    lineNumber: 381,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("option", { value: "title", children: "Title" }, void 0, !1, {
                    fileName: "app/components/searchBar/SearchBarForm.tsx",
                    lineNumber: 382,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("option", { value: "publishedYear", children: "Published Year" }, void 0, !1, {
                    fileName: "app/components/searchBar/SearchBarForm.tsx",
                    lineNumber: 383,
                    columnNumber: 15
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/components/searchBar/SearchBarForm.tsx",
                lineNumber: 376,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/searchBar/SearchBarForm.tsx",
            lineNumber: 355,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/searchBar/SearchBarForm.tsx",
          lineNumber: 336,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/searchBar/SearchBarForm.tsx",
      lineNumber: 193,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/searchBar/SearchBarForm.tsx",
    lineNumber: 192,
    columnNumber: 5
  }, this);
}
var SearchBarForm_default = SearchBarForm;

// app/data/session.sever.ts
var import_node2 = require("@remix-run/node"), SESSION_SECRET = process.env.SESSION_SECRET;
if (!SESSION_SECRET)
  throw new Error("Session Secret not set");
var sessionStorage = (0, import_node2.createCookieSessionStorage)({
  cookie: {
    secure: !1,
    secrets: [SESSION_SECRET],
    sameSite: "lax",
    maxAge: 30 * 24 * 60 * 60,
    httpOnly: !0
  }
});
async function getUserFromSession(request) {
  return (await sessionStorage.getSession(
    request.headers.get("Cookie")
  )).get("userId");
}
async function destroyUserSession(request) {
  let session = await sessionStorage.getSession(
    request.headers.get("Cookie")
  );
  return console.log("DESTORY", session.get("userId")), (0, import_node2.redirect)("/", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session)
    }
  });
}
async function createUserSession(userId, redirectPath) {
  let session = await sessionStorage.getSession();
  return session.set("userId", userId), (0, import_node2.redirect)(redirectPath, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session)
    }
  });
}

// app/components/audiobooks/BookPagination.tsx
var import_react18 = require("@remix-run/react"), import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
function BookPagination({ prevURL, nextURL, totalPages, currentPage }) {
  let navigate = (0, import_react18.useNavigate)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex bg-white items-center space-x-2 border border-cerulean-blue-300 justify-start rounded-lg", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
      "button",
      {
        disabled: !prevURL,
        className: `button border-0 border-r-cerulean-blue-300 border-r rounded-r-none ${!prevURL && "disabled"}`,
        onClick: () => navigate(prevURL, { replace: !0 }),
        children: "Prev"
      },
      void 0,
      !1,
      {
        fileName: "app/components/audiobooks/BookPagination.tsx",
        lineNumber: 14,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "text-lg", children: [
      currentPage,
      " of ",
      totalPages
    ] }, void 0, !0, {
      fileName: "app/components/audiobooks/BookPagination.tsx",
      lineNumber: 23,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
      "button",
      {
        disabled: !nextURL,
        className: `button rounded-l-none ${!nextURL && "disabled"}`,
        onClick: () => navigate(nextURL, { replace: !0 }),
        children: "Next"
      },
      void 0,
      !1,
      {
        fileName: "app/components/audiobooks/BookPagination.tsx",
        lineNumber: 26,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/audiobooks/BookPagination.tsx",
    lineNumber: 13,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/audiobooks/BookPagination.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}
var BookPagination_default = BookPagination;

// app/utils/helpers.ts
var isEmpty = (value) => value == null;

// app/utils/pagination.ts
function calculateOffsets(offset, pageSize, totalRecords) {
  let prevOffset = offset - pageSize, nextAvailable = !0, prevAvailable = !0;
  prevOffset < 0 && (prevOffset = 0, prevAvailable = !1);
  let nextOffset = offset + pageSize;
  return nextOffset >= totalRecords && (nextOffset = offset, nextAvailable = !1), { prevOffset, nextOffset, prevAvailable, nextAvailable };
}

// app/data/bookDBQueries.ts
var import_lodash3 = __toESM(require("lodash"));
var filterBooksDB = async (userId, filter, sort, pagination) => {
  let pageSize = (pagination == null ? void 0 : pagination.pageSize) || 15, offset = (pagination == null ? void 0 : pagination.offset) || 0, whereStatements = processFilters(filter), dbBooks = await prisma.books.findMany({
    where: {
      ...whereStatements.bookWhere
    },
    include: {
      userBooks: {
        where: {
          userId
        },
        select: {
          favorite: !0,
          listenedTo: !0,
          comments: !0,
          rating: !0
        }
      }
    },
    orderBy: {
      [sort.sortField || "publishedYear"]: sort.sortDirection || "desc"
    }
  }), books = mergeAndFilterBooks(dbBooks, whereStatements.userBooksFilter);
  function reverseRating(ratingIn) {
    return ratingIn === 0 ? 11 : Math.abs(ratingIn - 11);
  }
  sort.ratingSortDirection === "asc" ? books = import_lodash3.default.sortBy(books, [(el) => el.rating || 0]) : sort.ratingSortDirection === "desc" && (books = import_lodash3.default.sortBy(books, [(el) => reverseRating(el.rating || 0)]));
  let paginationOut = calculateOffsets(offset, pageSize, books.length);
  return paginationOut.totalPages = Math.ceil(books.length / pageSize), paginationOut.currentPage = Math.ceil(offset / pageSize) + 1, paginationOut.totalBooks = books.length, { slicedBooks: books.slice(offset, offset + pageSize), paginationOut };
};
function processFilters(filters) {
  let {
    author,
    title,
    primaryCategory,
    secondaryCategory,
    source,
    favoriteFlag,
    listenedToFlag
  } = filters;
  return { bookWhere: buildWhereStmt({
    author: {
      type: "contains",
      value: author
    },
    title: {
      type: "contains",
      value: title
    },
    primaryCategory: {
      type: "equals",
      value: primaryCategory
    },
    secondaryCategory: {
      type: "equals",
      value: secondaryCategory
    },
    source: {
      type: "equals",
      value: source
    }
  }), userBooksFilter: {
    favorite: favoriteFlag,
    listenedTo: listenedToFlag
  } };
}
function buildWhereStmt(processedFilters) {
  let whereStmt = {};
  for (let [key, value] of Object.entries(processedFilters))
    isEmpty(processedFilters[key].value) || processedFilters[key].value === "" || !processedFilters[key] || (whereStmt = {
      ...whereStmt,
      [key]: { [value.type]: value.value, mode: "insensitive" }
    });
  return whereStmt;
}
var updateUserBooksDB = async (userId, bookId, userBookData) => {
  let booksId = bookId;
  return await prisma.userBooks.upsert({
    where: {
      booksId_userId: { booksId, userId }
    },
    create: {
      booksId,
      userId,
      ...userBookData
    },
    update: userBookData
  });
};
function mergeAndFilterBooks(books, userBooksFilter) {
  var _a;
  let mergedBooks = [], { favorite: favoriteState, listenedTo: listenedToState } = userBooksFilter;
  for (let book of books) {
    let userBookObject = ((_a = book == null ? void 0 : book.userBooks) == null ? void 0 : _a.length) === 1 ? book.userBooks[0] : void 0, bookListenedToState = !!(userBookObject != null && userBookObject.listenedTo);
    if (!includeBookThreeOptionCheck(bookListenedToState, listenedToState))
      continue;
    let bookFavoriteState = !!(userBookObject != null && userBookObject.favorite);
    if (!includeBookThreeOptionCheck(bookFavoriteState, favoriteState))
      continue;
    let buildMerge = {
      favorite: userBookObject == null ? void 0 : userBookObject.favorite,
      listenedTo: userBookObject == null ? void 0 : userBookObject.listenedTo,
      comments: userBookObject == null ? void 0 : userBookObject.comments,
      rating: userBookObject == null ? void 0 : userBookObject.rating
    };
    delete book.userBooks, mergedBooks.push({ ...book, ...buildMerge });
  }
  return mergedBooks;
}
var includeBookThreeOptionCheck = (bookState, filterState) => {
  return bookState ? filterState !== "exclude" : filterState !== "include";
};

// app/routes/audiobooks/index.tsx
var import_zod = require("zod"), import_jsx_dev_runtime18 = require("react/jsx-dev-runtime"), loaderSchema = import_zod.z.object({
  author: import_zod.z.string(),
  title: import_zod.z.string(),
  primaryCategory: import_zod.z.string(),
  secondaryCategory: import_zod.z.string(),
  favoriteFlag: import_zod.z.string(),
  listenedToFlag: import_zod.z.string(),
  offest: import_zod.z.number()
}), loader3 = async ({ request }) => {
  let categories = getCategories(), userId = await getUserFromSession(request);
  oo_oo(), console.log("in Loader Function", userId, "afe8aede_0");
  let url = new URL(request.url), favoriteState = url.searchParams.get("favorited"), listenedToState = url.searchParams.get("listenedToState"), sortDirection = url.searchParams.get("sortdirection") ? "desc" : "asc", filter = {
    title: url.searchParams.get("title"),
    author: url.searchParams.get("author"),
    primaryCategory: url.searchParams.get("primarycat"),
    secondaryCategory: url.searchParams.get("secondarycat"),
    source: url.searchParams.get("source"),
    favoriteFlag: favoriteState,
    listenedToFlag: listenedToState
  }, pagination = {
    offset: parseInt(url.searchParams.get("offset"))
  }, sort = {
    sortField: url.searchParams.get("sortfield"),
    sortDirection,
    ratingSortDirection: url.searchParams.get("ratingsort")
  }, { slicedBooks, paginationOut } = await filterBooksDB(
    userId,
    filter,
    sort,
    pagination
  );
  url.searchParams.set("offset", paginationOut.nextOffset.toString());
  let nextURL = paginationOut.nextAvailable ? `${url.pathname}${url.search}` : void 0;
  url.searchParams.set("offset", paginationOut.prevOffset.toString());
  let prevURL = paginationOut.prevAvailable ? `${url.pathname}${url.search}` : void 0;
  return {
    categories,
    books: slicedBooks,
    nextURL,
    prevURL,
    currentPage: paginationOut.currentPage,
    totalPages: paginationOut.totalPages,
    totalBooks: paginationOut.totalBooks
  };
}, action = async ({ request }) => {
  let userId = await getUserFromSession(request), formData = await request.formData(), bookId = formData.get("bookid");
  if (!bookId)
    throw new Error("Null book Id passed");
  let { _action, ...values } = Object.fromEntries(formData);
  return oo_oo(), console.log("Values in Action", _action, values, "afe8aede_1"), _action === "toggle-favorite" ? await updateUserBooksDB(userId, bookId, {
    favorite: values.favorite !== "true"
  }) : _action === "toggle-listenedto" ? await updateUserBooksDB(userId, bookId, {
    listenedTo: values.listenedto !== "true"
  }) : _action === "rating" ? await updateUserBooksDB(userId, bookId, {
    rating: +(values == null ? void 0 : values.rating)
  }) : null;
};
function Index() {
  let navigate = (0, import_react19.useNavigate)(), {
    categories,
    books,
    nextURL,
    prevURL,
    totalPages,
    currentPage,
    totalBooks
  } = (0, import_react19.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(SearchBarForm_default, { totalBooks }, void 0, !1, {
      fileName: "app/routes/audiobooks/index.tsx",
      lineNumber: 187,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex justify-center mr-14", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
      BookPagination_default,
      {
        nextURL,
        prevURL,
        totalPages,
        currentPage
      },
      void 0,
      !1,
      {
        fileName: "app/routes/audiobooks/index.tsx",
        lineNumber: 190,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/audiobooks/index.tsx",
      lineNumber: 189,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex flex-wrap m-2 justify-center border border-red-900 ", children: books == null ? void 0 : books.map((book) => /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(BookCard_default, { book }, book.id, !1, {
      fileName: "app/routes/audiobooks/index.tsx",
      lineNumber: 199,
      columnNumber: 11
    }, this)) }, void 0, !1, {
      fileName: "app/routes/audiobooks/index.tsx",
      lineNumber: 197,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/audiobooks/index.tsx",
    lineNumber: 185,
    columnNumber: 5
  }, this);
}
function oo_oo() {
  try {
    (0, eval)(`/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';function _0x4b93(){var _0x278318=['_hasSymbolPropertyOnItsPath','_replacedLog','589230XryZwa','_addObjectProperty','substr','_getOwnPropertyNames','capped','props','_ws','method','_capIfString','_isPrimitiveWrapperType','autoExpandPreviousObjects','autoExpandPropertyCount','_objectToString','path','_allowedToSend','189668fuWQyR','[object\\x20Map]','elements','join','_propertyAccessor','WebSocket','_quotedRegExp','message','ws/index.js','_setNodeExpandableState','rootExpression','unref','symbol','1798119pETEVD','_setNodeQueryPath','Map','Error','_regExpToString','match','_connectToHost','process','root_exp','_isPrimitiveType','','positiveInfinity','failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help','count','strLength','serialize','next.js','_isMap','perf_hooks','722967NqSGqK','5tBnkVm','function','_p_length','nodeModules','split','_p_','parent','onopen','type','pop','_Symbol','64160oWamGY','[object\\x20Date]','NEGATIVE_INFINITY','_p_name','location','date','3irVzGi','index','[object\\x20Array]','pathToFileURL','number','_socket','\\x20browser','hits','_setNodeId','getOwnPropertySymbols','concat','sortProps','autoExpand','string','send','root_exp_id','negativeInfinity','map','setter','getWebSocketClass','onerror','now','_setNodePermissions','cappedElements','reload','_connected','unknown','depth','_setNodeExpressionPath','__es'+'Module','_undefined','test','valueOf','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','_allowedToConnectOnSend','1776800cVjrRI','autoExpandLimit','_cleanNode','_blacklistedProperty','constructor','getter','_connecting','_property','\\x20server','value','disabledLog','_HTMLAllCollection','noFunctions','_isNegativeZero','allStrLength','reduceLimits','level','Number','onmessage','onclose','null','_setNodeLabel','expressionsToEvaluate','object','data','create','127.0.0.1','_addFunctionsNode','length',["localhost","127.0.0.1","example.cypress.io","MarkHomePC","192.168.1.84"],'host','totalStrLength','349162yqDAFA','cappedProps','_getOwnPropertySymbols','bind','resolveGetters','_numberRegExp','unshift','global','isExpressionToEvaluate','indexOf','argumentResolutionError','node','get','_isSet','port','enumerable','warn','_additionalMetadata','_WebSocketClass','logger\\x20websocket\\x20error','_attemptToReconnect','funcName','getPrototypeOf','ws://','set','_reconnectTimeout','prototype','catch','_hasMapOnItsPath','_addProperty','name','remix','failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help','stringify','hasOwnProperty','console','Symbol','time','forEach','1675655994348','Boolean','failed\\x20to\\x20find\\x20WebSocket','getOwnPropertyDescriptor','default','POSITIVE_INFINITY','getOwnPropertyNames','includes','toLowerCase','HTMLAllCollection','replace','current','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','_addLoadNode','_type','_console_ninja_session','_treeNodePropertiesBeforeFullValue','bigint','_sortProps','hostname','_inBrowser','call','toString','url','_keyStrRegExp','Set','...','_processTreeNodeResult','error','[object\\x20Set]','_propertyName','log','autoExpandMaxDepth','versions','_consoleNinjaAllowedToStart','undefined','_treeNodePropertiesAfterFullValue','55886','array','push','_dateToString','isArray'];_0x4b93=function(){return _0x278318;};return _0x4b93();}var _0xac630d=_0x4baa;(function(_0x53f46c,_0x37051e){var _0x2b1e38=_0x4baa,_0x39f8bf=_0x53f46c();while(!![]){try{var _0x59c843=parseInt(_0x2b1e38(0x239))/0x1+-parseInt(_0x2b1e38(0x282))/0x2*(-parseInt(_0x2b1e38(0x23f))/0x3)+-parseInt(_0x2b1e38(0x20d))/0x4*(parseInt(_0x2b1e38(0x22e))/0x5)+-parseInt(_0x2b1e38(0x1fe))/0x6+parseInt(_0x2b1e38(0x22d))/0x7+-parseInt(_0x2b1e38(0x262))/0x8+parseInt(_0x2b1e38(0x21a))/0x9;if(_0x59c843===_0x37051e)break;else _0x39f8bf['push'](_0x39f8bf['shift']());}catch(_0x55f3d8){_0x39f8bf['push'](_0x39f8bf['shift']());}}}(_0x4b93,0x2a80b));function _0x4baa(_0x43adf4,_0x2ed5ea){var _0x4b93c6=_0x4b93();return _0x4baa=function(_0x4baa5c,_0x4a40b3){_0x4baa5c=_0x4baa5c-0x1c1;var _0x770801=_0x4b93c6[_0x4baa5c];return _0x770801;},_0x4baa(_0x43adf4,_0x2ed5ea);}var ne=Object[_0xac630d(0x27b)],Y=Object['defineProperty'],ie=Object[_0xac630d(0x1d5)],ae=Object['getOwnPropertyNames'],se=Object[_0xac630d(0x1c1)],oe=Object['prototype'][_0xac630d(0x1cd)],de=(_0x325e76,_0x24306e,_0x1db057,_0x7989e0)=>{var _0x1ac885=_0xac630d;if(_0x24306e&&typeof _0x24306e=='object'||typeof _0x24306e=='function'){for(let _0xde8539 of ae(_0x24306e))!oe[_0x1ac885(0x1e7)](_0x325e76,_0xde8539)&&_0xde8539!==_0x1db057&&Y(_0x325e76,_0xde8539,{'get':()=>_0x24306e[_0xde8539],'enumerable':!(_0x7989e0=ie(_0x24306e,_0xde8539))||_0x7989e0[_0x1ac885(0x291)]});}return _0x325e76;},Q=(_0x2b667b,_0x213ed5,_0x12043a)=>(_0x12043a=_0x2b667b!=null?ne(se(_0x2b667b)):{},de(_0x213ed5||!_0x2b667b||!_0x2b667b[_0xac630d(0x25c)]?Y(_0x12043a,'default',{'value':_0x2b667b,'enumerable':!0x0}):_0x12043a,_0x2b667b)),$=class{constructor(_0x49ad6d,_0x52e5e5,_0x5c0afc,_0x5c9e14){var _0x388dec=_0xac630d;this[_0x388dec(0x289)]=_0x49ad6d,this[_0x388dec(0x280)]=_0x52e5e5,this['port']=_0x5c0afc,this['nodeModules']=_0x5c9e14,this[_0x388dec(0x20c)]=!0x0,this[_0x388dec(0x261)]=!0x0,this[_0x388dec(0x258)]=!0x1,this[_0x388dec(0x268)]=!0x1,this[_0x388dec(0x1e6)]=!!this['global'][_0x388dec(0x212)],this[_0x388dec(0x294)]=null,this['_sendErrorMessage']=this[_0x388dec(0x1e6)]?_0x388dec(0x1cb):_0x388dec(0x226);}async[_0xac630d(0x252)](){var _0x248518=_0xac630d;if(this[_0x248518(0x294)])return this['_WebSocketClass'];let _0x1e48da;if(this['_inBrowser'])_0x1e48da=this[_0x248518(0x289)][_0x248518(0x212)];else try{_0x1e48da=require(require(_0x248518(0x20b))['join'](this[_0x248518(0x231)],'ws'));}catch{try{let _0x96f7b6=await import('path');_0x1e48da=(await import((await import(_0x248518(0x1e9)))[_0x248518(0x242)](_0x96f7b6[_0x248518(0x210)](this[_0x248518(0x231)],_0x248518(0x215)))['toString']()))[_0x248518(0x1d6)];}catch{throw new Error(_0x248518(0x1d4));}}return this['_WebSocketClass']=_0x1e48da,_0x1e48da;}['_connectToHost'](){var _0x333817=_0xac630d;this['_connecting']||this[_0x333817(0x258)]||(this['_allowedToConnectOnSend']=!0x1,this[_0x333817(0x268)]=!0x0,this[_0x333817(0x204)]=new Promise((_0x441421,_0x3e8754)=>{var _0x8170f9=_0x333817;this[_0x8170f9(0x252)]()['then'](_0x19e896=>{var _0x304142=_0x8170f9;let _0x1b1e86=new _0x19e896(_0x304142(0x1c2)+this[_0x304142(0x280)]+':'+this[_0x304142(0x290)]);_0x1b1e86[_0x304142(0x253)]=()=>{var _0x32015b=_0x304142;this[_0x32015b(0x258)]=!0x1,this[_0x32015b(0x268)]=!0x1,this['_allowedToSend']=!0x1,this[_0x32015b(0x296)](),_0x3e8754(new Error(_0x32015b(0x295)));},_0x1b1e86[_0x304142(0x235)]=()=>{var _0x2f7d3b=_0x304142;this['_inBrowser']||_0x1b1e86[_0x2f7d3b(0x244)]&&_0x1b1e86[_0x2f7d3b(0x244)][_0x2f7d3b(0x218)]&&_0x1b1e86[_0x2f7d3b(0x244)][_0x2f7d3b(0x218)](),_0x441421(_0x1b1e86);},_0x1b1e86[_0x304142(0x275)]=()=>{var _0x960fc7=_0x304142;this[_0x960fc7(0x258)]=!0x1,this[_0x960fc7(0x268)]=!0x1,this['_allowedToConnectOnSend']=!0x0,this[_0x960fc7(0x296)]();},_0x1b1e86[_0x304142(0x274)]=_0x4b9a74=>{var _0xfedc32=_0x304142;try{_0x4b9a74&&_0x4b9a74[_0xfedc32(0x27a)]&&this[_0xfedc32(0x1e6)]&&JSON['parse'](_0x4b9a74[_0xfedc32(0x27a)])[_0xfedc32(0x205)]===_0xfedc32(0x257)&&this[_0xfedc32(0x289)][_0xfedc32(0x23d)]['reload']();}catch{}};})['then'](_0x593ff1=>(this[_0x8170f9(0x258)]=!0x0,this[_0x8170f9(0x268)]=!0x1,this[_0x8170f9(0x261)]=!0x1,this[_0x8170f9(0x20c)]=!0x0,_0x593ff1))[_0x8170f9(0x1c6)](_0x463ac4=>(this['_connected']=!0x1,this['_connecting']=!0x1,_0x3e8754(new Error(_0x8170f9(0x1de)+_0x463ac4&&_0x463ac4[_0x8170f9(0x214)]))));}));}['_attemptToReconnect'](){var _0x18c6ae=_0xac630d;clearTimeout(this[_0x18c6ae(0x1c4)]),this[_0x18c6ae(0x1c4)]=setTimeout(()=>{var _0x3eb032=_0x18c6ae;this[_0x3eb032(0x258)]||this[_0x3eb032(0x268)]||(this[_0x3eb032(0x220)](),this[_0x3eb032(0x204)]?.[_0x3eb032(0x1c6)](()=>this['_attemptToReconnect']()));},0x1f4);}async[_0xac630d(0x24d)](_0x8d094a){var _0x8b2271=_0xac630d;try{if(!this[_0x8b2271(0x20c)])return;this['_allowedToConnectOnSend']&&this[_0x8b2271(0x220)](),(await this[_0x8b2271(0x204)])['send'](JSON[_0x8b2271(0x1cc)](_0x8d094a));}catch(_0x1a3cd8){console['warn'](this['_sendErrorMessage']+':\\x20'+_0x1a3cd8&&_0x1a3cd8['message']),this[_0x8b2271(0x20c)]=!0x1,this['_attemptToReconnect']();}}};function b(_0x4f3ebe,_0x20d285,_0x48d261,_0x5356d5,_0x26cea4){var _0x5e20de=_0xac630d;let _0xf7426b=_0x48d261[_0x5e20de(0x232)](',')[_0x5e20de(0x250)](_0x14c8e1=>{var _0x34caca=_0x5e20de;try{_0x4f3ebe[_0x34caca(0x1e1)]||((_0x26cea4===_0x34caca(0x22a)||_0x26cea4==='remix')&&(_0x26cea4+=_0x4f3ebe[_0x34caca(0x221)]?.[_0x34caca(0x1f3)]?.[_0x34caca(0x28d)]?_0x34caca(0x26a):_0x34caca(0x245)),_0x4f3ebe['_console_ninja_session']={'id':+new Date(),'tool':_0x26cea4});let _0x32ec98=new $(_0x4f3ebe,_0x20d285,_0x14c8e1,_0x5356d5);return _0x32ec98['send'][_0x34caca(0x285)](_0x32ec98);}catch(_0x31c1b6){return console[_0x34caca(0x292)](_0x34caca(0x260),_0x31c1b6&&_0x31c1b6['message']),()=>{};}});return _0x5f254b=>_0xf7426b['forEach'](_0x22b73e=>_0x22b73e(_0x5f254b));}function Z(_0x6f78f6,_0x44ca49,_0x23ecad){var _0x560510=_0xac630d;if(_0x6f78f6[_0x560510(0x1f4)]!==void 0x0)return _0x6f78f6[_0x560510(0x1f4)];let _0x239046=_0x6f78f6[_0x560510(0x221)]?.[_0x560510(0x1f3)]?.[_0x560510(0x28d)];return _0x239046&&_0x23ecad==='nuxt'?_0x6f78f6[_0x560510(0x1f4)]=!0x1:_0x6f78f6['_consoleNinjaAllowedToStart']=_0x239046||!_0x44ca49||_0x6f78f6[_0x560510(0x23d)]?.[_0x560510(0x1e5)]&&_0x44ca49[_0x560510(0x1d9)](_0x6f78f6[_0x560510(0x23d)][_0x560510(0x1e5)]),_0x6f78f6['_consoleNinjaAllowedToStart'];}((_0x18f4c8,_0x5ac42e,_0x411404,_0x442b87,_0x3e0050,_0x3c28ab,_0x410bdb,_0x2fcf88,_0x5c2abb)=>{var _0x45a39f=_0xac630d;if(!Z(_0x18f4c8,_0x2fcf88,_0x3e0050))return;if(_0x18f4c8[_0x45a39f(0x1fd)]){_0x18f4c8[_0x45a39f(0x1ce)][_0x45a39f(0x1f1)]=_0x18f4c8[_0x45a39f(0x1fd)](_0x18f4c8[_0x45a39f(0x1ce)]['log']);return;}let _0x3d2a15={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x53f542={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2},_0xb566c0={'hits':{}};_0x18f4c8[_0x45a39f(0x1fd)]=_0x55244d=>(..._0x562e3c)=>{var _0x29f9a4=_0x45a39f;try{if(_0x55244d[_0x29f9a4(0x1c9)]===_0x29f9a4(0x26c))return;let _0xc120a1=Date['now'](),_0x3036be=_0x562e3c[_0x29f9a4(0x237)](),_0x2e12c4=_0x562e3c;return _0x55244d(..._0x2e12c4),_0x3832e4(_0x58c7eb(_0x3036be,_0xc120a1,_0x4ed49a,_0x2e12c4)),_0x2e12c4;}finally{_0x18f4c8['console']['log']=_0x55244d;}},_0x18f4c8[_0x45a39f(0x1ce)][_0x45a39f(0x1f1)]=_0x18f4c8['_replacedLog'](_0x18f4c8[_0x45a39f(0x1ce)][_0x45a39f(0x1f1)]);let _0x3832e4=b(_0x18f4c8,_0x5ac42e,_0x411404,_0x442b87,_0x3e0050),_0x10075e=_0x447c1b(),_0x4ed49a=_0x18f4c8[_0x45a39f(0x1e1)];class _0x405e65{constructor(){var _0x14ea9a=_0x45a39f;this[_0x14ea9a(0x1ea)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this['_numberRegExp']=/^(0|[1-9][0-9]*)$/,this[_0x14ea9a(0x213)]=/'([^\\\\']|\\\\')*'/,this[_0x14ea9a(0x25d)]=_0x18f4c8[_0x14ea9a(0x1f5)],this[_0x14ea9a(0x26d)]=_0x18f4c8['HTMLAllCollection'],this['_getOwnPropertyDescriptor']=Object[_0x14ea9a(0x1d5)],this[_0x14ea9a(0x201)]=Object[_0x14ea9a(0x1d8)],this[_0x14ea9a(0x238)]=_0x18f4c8[_0x14ea9a(0x1cf)],this[_0x14ea9a(0x21e)]=RegExp['prototype'][_0x14ea9a(0x1e8)],this['_dateToString']=Date[_0x14ea9a(0x1c5)][_0x14ea9a(0x1e8)];}[_0x45a39f(0x229)](_0x1ba8d8,_0xb3e2e2,_0x30bd00,_0x3a093e){var _0x586ec6=_0x45a39f,_0x8486f7=this,_0x17a133=_0x30bd00[_0x586ec6(0x24b)];function _0x2841ef(_0x239add,_0x313a9a,_0x358216){var _0x2c7563=_0x586ec6;_0x313a9a[_0x2c7563(0x236)]=_0x2c7563(0x259),_0x313a9a[_0x2c7563(0x1ee)]=_0x239add[_0x2c7563(0x214)],_0x3eea47=_0x358216[_0x2c7563(0x28d)][_0x2c7563(0x1dd)],_0x358216[_0x2c7563(0x28d)][_0x2c7563(0x1dd)]=_0x313a9a,_0x8486f7[_0x2c7563(0x1e2)](_0x313a9a,_0x358216);}if(_0xb3e2e2&&_0xb3e2e2[_0x586ec6(0x28c)])_0x2841ef(_0xb3e2e2,_0x1ba8d8,_0x30bd00);else try{_0x30bd00['level']++,_0x30bd00[_0x586ec6(0x24b)]&&_0x30bd00[_0x586ec6(0x208)]['push'](_0xb3e2e2);var _0x4fa1b9,_0x1c0623,_0x1d19d2,_0x4b0a7c,_0xd900a1=[],_0x22be77=[],_0x1702d4,_0x16ef6f=this[_0x586ec6(0x1e0)](_0xb3e2e2),_0x236214=_0x16ef6f===_0x586ec6(0x1f8),_0x49be65=!0x1,_0x4cde2b=_0x16ef6f===_0x586ec6(0x22f),_0x5061a7=this['_isPrimitiveType'](_0x16ef6f),_0x349bdd=this[_0x586ec6(0x207)](_0x16ef6f),_0x53a030=_0x5061a7||_0x349bdd,_0x53897c={},_0x334602=0x0,_0x5cf763=!0x1,_0x3eea47,_0x43ea2b=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x30bd00['depth']){if(_0x236214){if(_0x1c0623=_0xb3e2e2[_0x586ec6(0x27e)],_0x1c0623>_0x30bd00['elements']){for(_0x1d19d2=0x0,_0x4b0a7c=_0x30bd00[_0x586ec6(0x20f)],_0x4fa1b9=_0x1d19d2;_0x4fa1b9<_0x4b0a7c;_0x4fa1b9++)_0x22be77[_0x586ec6(0x1f9)](_0x8486f7[_0x586ec6(0x1c8)](_0xd900a1,_0xb3e2e2,_0x16ef6f,_0x4fa1b9,_0x30bd00));_0x1ba8d8[_0x586ec6(0x256)]=!0x0;}else{for(_0x1d19d2=0x0,_0x4b0a7c=_0x1c0623,_0x4fa1b9=_0x1d19d2;_0x4fa1b9<_0x4b0a7c;_0x4fa1b9++)_0x22be77[_0x586ec6(0x1f9)](_0x8486f7[_0x586ec6(0x1c8)](_0xd900a1,_0xb3e2e2,_0x16ef6f,_0x4fa1b9,_0x30bd00));}_0x30bd00[_0x586ec6(0x209)]+=_0x22be77[_0x586ec6(0x27e)];}if(!(_0x16ef6f===_0x586ec6(0x276)||_0x16ef6f==='undefined')&&!_0x5061a7&&_0x16ef6f!=='String'&&_0x16ef6f!=='Buffer'&&_0x16ef6f!==_0x586ec6(0x1e3)){var _0x2a81c9=_0x3a093e[_0x586ec6(0x203)]||_0x30bd00[_0x586ec6(0x203)];if(this[_0x586ec6(0x28f)](_0xb3e2e2)?(_0x4fa1b9=0x0,_0xb3e2e2['forEach'](function(_0x53c722){var _0x6bbb25=_0x586ec6;if(_0x334602++,_0x30bd00[_0x6bbb25(0x209)]++,_0x334602>_0x2a81c9){_0x5cf763=!0x0;return;}if(!_0x30bd00[_0x6bbb25(0x28a)]&&_0x30bd00['autoExpand']&&_0x30bd00[_0x6bbb25(0x209)]>_0x30bd00[_0x6bbb25(0x263)]){_0x5cf763=!0x0;return;}_0x22be77[_0x6bbb25(0x1f9)](_0x8486f7[_0x6bbb25(0x1c8)](_0xd900a1,_0xb3e2e2,_0x6bbb25(0x1eb),_0x4fa1b9++,_0x30bd00,function(_0x581715){return function(){return _0x581715;};}(_0x53c722)));})):this['_isMap'](_0xb3e2e2)&&_0xb3e2e2['forEach'](function(_0x325f91,_0x5ca65d){var _0x1f73d0=_0x586ec6;if(_0x334602++,_0x30bd00['autoExpandPropertyCount']++,_0x334602>_0x2a81c9){_0x5cf763=!0x0;return;}if(!_0x30bd00[_0x1f73d0(0x28a)]&&_0x30bd00[_0x1f73d0(0x24b)]&&_0x30bd00[_0x1f73d0(0x209)]>_0x30bd00[_0x1f73d0(0x263)]){_0x5cf763=!0x0;return;}var _0x1b4dc6=_0x5ca65d[_0x1f73d0(0x1e8)]();_0x1b4dc6[_0x1f73d0(0x27e)]>0x64&&(_0x1b4dc6=_0x1b4dc6['slice'](0x0,0x64)+_0x1f73d0(0x1ec)),_0x22be77['push'](_0x8486f7[_0x1f73d0(0x1c8)](_0xd900a1,_0xb3e2e2,_0x1f73d0(0x21c),_0x1b4dc6,_0x30bd00,function(_0x53478c){return function(){return _0x53478c;};}(_0x325f91)));}),!_0x49be65){try{for(_0x1702d4 in _0xb3e2e2)if(!(_0x236214&&_0x43ea2b['test'](_0x1702d4))&&!this[_0x586ec6(0x265)](_0xb3e2e2,_0x1702d4,_0x30bd00)){if(_0x334602++,_0x30bd00[_0x586ec6(0x209)]++,_0x334602>_0x2a81c9){_0x5cf763=!0x0;break;}if(!_0x30bd00[_0x586ec6(0x28a)]&&_0x30bd00[_0x586ec6(0x24b)]&&_0x30bd00[_0x586ec6(0x209)]>_0x30bd00[_0x586ec6(0x263)]){_0x5cf763=!0x0;break;}_0x22be77['push'](_0x8486f7[_0x586ec6(0x1ff)](_0xd900a1,_0x53897c,_0xb3e2e2,_0x16ef6f,_0x1702d4,_0x30bd00));}}catch{}if(_0x53897c[_0x586ec6(0x230)]=!0x0,_0x4cde2b&&(_0x53897c[_0x586ec6(0x23c)]=!0x0),!_0x5cf763){var _0x453133=[][_0x586ec6(0x249)](this[_0x586ec6(0x201)](_0xb3e2e2))[_0x586ec6(0x249)](this['_getOwnPropertySymbols'](_0xb3e2e2));for(_0x4fa1b9=0x0,_0x1c0623=_0x453133['length'];_0x4fa1b9<_0x1c0623;_0x4fa1b9++)if(_0x1702d4=_0x453133[_0x4fa1b9],!(_0x236214&&_0x43ea2b[_0x586ec6(0x25e)](_0x1702d4[_0x586ec6(0x1e8)]()))&&!this[_0x586ec6(0x265)](_0xb3e2e2,_0x1702d4,_0x30bd00)&&!_0x53897c[_0x586ec6(0x233)+_0x1702d4[_0x586ec6(0x1e8)]()]){if(_0x334602++,_0x30bd00[_0x586ec6(0x209)]++,_0x334602>_0x2a81c9){_0x5cf763=!0x0;break;}if(!_0x30bd00[_0x586ec6(0x28a)]&&_0x30bd00['autoExpand']&&_0x30bd00['autoExpandPropertyCount']>_0x30bd00[_0x586ec6(0x263)]){_0x5cf763=!0x0;break;}_0x22be77[_0x586ec6(0x1f9)](_0x8486f7[_0x586ec6(0x1ff)](_0xd900a1,_0x53897c,_0xb3e2e2,_0x16ef6f,_0x1702d4,_0x30bd00));}}}}}if(_0x1ba8d8['type']=_0x16ef6f,_0x53a030?(_0x1ba8d8[_0x586ec6(0x26b)]=_0xb3e2e2[_0x586ec6(0x25f)](),this[_0x586ec6(0x206)](_0x16ef6f,_0x1ba8d8,_0x30bd00,_0x3a093e)):_0x16ef6f==='date'?_0x1ba8d8[_0x586ec6(0x26b)]=this[_0x586ec6(0x1fa)][_0x586ec6(0x1e7)](_0xb3e2e2):_0x16ef6f==='RegExp'?_0x1ba8d8['value']=this[_0x586ec6(0x21e)]['call'](_0xb3e2e2):_0x16ef6f===_0x586ec6(0x219)&&this[_0x586ec6(0x238)]?_0x1ba8d8['value']=this[_0x586ec6(0x238)][_0x586ec6(0x1c5)][_0x586ec6(0x1e8)][_0x586ec6(0x1e7)](_0xb3e2e2):!_0x30bd00[_0x586ec6(0x25a)]&&!(_0x16ef6f==='null'||_0x16ef6f===_0x586ec6(0x1f5))&&(delete _0x1ba8d8[_0x586ec6(0x26b)],_0x1ba8d8[_0x586ec6(0x202)]=!0x0),_0x5cf763&&(_0x1ba8d8[_0x586ec6(0x283)]=!0x0),_0x3eea47=_0x30bd00['node'][_0x586ec6(0x1dd)],_0x30bd00['node']['current']=_0x1ba8d8,this[_0x586ec6(0x1e2)](_0x1ba8d8,_0x30bd00),_0x22be77[_0x586ec6(0x27e)]){for(_0x4fa1b9=0x0,_0x1c0623=_0x22be77[_0x586ec6(0x27e)];_0x4fa1b9<_0x1c0623;_0x4fa1b9++)_0x22be77[_0x4fa1b9](_0x4fa1b9);}_0xd900a1['length']&&(_0x1ba8d8['props']=_0xd900a1);}catch(_0x4f7721){_0x2841ef(_0x4f7721,_0x1ba8d8,_0x30bd00);}return this['_additionalMetadata'](_0xb3e2e2,_0x1ba8d8),this[_0x586ec6(0x1f6)](_0x1ba8d8,_0x30bd00),_0x30bd00['node'][_0x586ec6(0x1dd)]=_0x3eea47,_0x30bd00['level']--,_0x30bd00[_0x586ec6(0x24b)]=_0x17a133,_0x30bd00['autoExpand']&&_0x30bd00['autoExpandPreviousObjects'][_0x586ec6(0x237)](),_0x1ba8d8;}[_0x45a39f(0x284)](_0x2c2771){var _0x2639b9=_0x45a39f;return Object[_0x2639b9(0x248)]?Object[_0x2639b9(0x248)](_0x2c2771):[];}[_0x45a39f(0x28f)](_0x4cd9ea){var _0x5b4f97=_0x45a39f;return!!(_0x4cd9ea&&_0x18f4c8['Set']&&this[_0x5b4f97(0x20a)](_0x4cd9ea)===_0x5b4f97(0x1ef)&&_0x4cd9ea[_0x5b4f97(0x1d1)]);}[_0x45a39f(0x265)](_0x372ee2,_0x14b128,_0x5676fe){var _0x89536a=_0x45a39f;return _0x5676fe[_0x89536a(0x26e)]?typeof _0x372ee2[_0x14b128]==_0x89536a(0x22f):!0x1;}[_0x45a39f(0x1e0)](_0x3ba75f){var _0x301abb=_0x45a39f,_0x1c1108='';return _0x1c1108=typeof _0x3ba75f,_0x1c1108===_0x301abb(0x279)?this['_objectToString'](_0x3ba75f)===_0x301abb(0x241)?_0x1c1108='array':this[_0x301abb(0x20a)](_0x3ba75f)===_0x301abb(0x23a)?_0x1c1108=_0x301abb(0x23e):_0x3ba75f===null?_0x1c1108=_0x301abb(0x276):_0x3ba75f['constructor']&&(_0x1c1108=_0x3ba75f[_0x301abb(0x266)]['name']||_0x1c1108):_0x1c1108===_0x301abb(0x1f5)&&this[_0x301abb(0x26d)]&&_0x3ba75f instanceof this[_0x301abb(0x26d)]&&(_0x1c1108=_0x301abb(0x1db)),_0x1c1108;}['_objectToString'](_0x376d2c){var _0x499fe9=_0x45a39f;return Object[_0x499fe9(0x1c5)]['toString'][_0x499fe9(0x1e7)](_0x376d2c);}[_0x45a39f(0x223)](_0x3ef668){var _0x455aea=_0x45a39f;return _0x3ef668==='boolean'||_0x3ef668===_0x455aea(0x24c)||_0x3ef668===_0x455aea(0x243);}['_isPrimitiveWrapperType'](_0x37b6a1){var _0x3d97ca=_0x45a39f;return _0x37b6a1===_0x3d97ca(0x1d3)||_0x37b6a1==='String'||_0x37b6a1==='Number';}['_addProperty'](_0x3a4966,_0x47b015,_0xaac45c,_0x3f3738,_0x8a17a7,_0xdbaae3){var _0x90c073=this;return function(_0x117049){var _0x401007=_0x4baa,_0x5184d3=_0x8a17a7[_0x401007(0x28d)][_0x401007(0x1dd)],_0x231326=_0x8a17a7[_0x401007(0x28d)]['index'],_0x22e95b=_0x8a17a7[_0x401007(0x28d)]['parent'];_0x8a17a7['node'][_0x401007(0x234)]=_0x5184d3,_0x8a17a7[_0x401007(0x28d)]['index']=typeof _0x3f3738=='number'?_0x3f3738:_0x117049,_0x3a4966[_0x401007(0x1f9)](_0x90c073[_0x401007(0x269)](_0x47b015,_0xaac45c,_0x3f3738,_0x8a17a7,_0xdbaae3)),_0x8a17a7[_0x401007(0x28d)]['parent']=_0x22e95b,_0x8a17a7['node']['index']=_0x231326;};}[_0x45a39f(0x1ff)](_0x33c397,_0x5f4d81,_0x447f8b,_0x4969ee,_0x1a366b,_0x29dca5,_0x5a219f){var _0x3004da=_0x45a39f,_0xd5b28d=this;return _0x5f4d81[_0x3004da(0x233)+_0x1a366b[_0x3004da(0x1e8)]()]=!0x0,function(_0x38aaa3){var _0x5cbdda=_0x3004da,_0x9c701=_0x29dca5[_0x5cbdda(0x28d)][_0x5cbdda(0x1dd)],_0x59ab28=_0x29dca5[_0x5cbdda(0x28d)][_0x5cbdda(0x240)],_0x4888b3=_0x29dca5[_0x5cbdda(0x28d)][_0x5cbdda(0x234)];_0x29dca5[_0x5cbdda(0x28d)]['parent']=_0x9c701,_0x29dca5[_0x5cbdda(0x28d)]['index']=_0x38aaa3,_0x33c397['push'](_0xd5b28d[_0x5cbdda(0x269)](_0x447f8b,_0x4969ee,_0x1a366b,_0x29dca5,_0x5a219f)),_0x29dca5[_0x5cbdda(0x28d)][_0x5cbdda(0x234)]=_0x4888b3,_0x29dca5['node']['index']=_0x59ab28;};}[_0x45a39f(0x269)](_0x5e468c,_0x2c7117,_0x2ac6cd,_0x160917,_0x4c4ec1){var _0x14462c=_0x45a39f,_0x44509f=this;_0x4c4ec1||(_0x4c4ec1=function(_0x24a0e3,_0x214759){return _0x24a0e3[_0x214759];});var _0x5c1c79=_0x2ac6cd['toString'](),_0x125b34=_0x160917[_0x14462c(0x278)]||{},_0x1747b4=_0x160917['depth'],_0x9ef742=_0x160917['isExpressionToEvaluate'];try{var _0x2c898b=this['_isMap'](_0x5e468c),_0x3bee88=_0x5c1c79;_0x2c898b&&_0x3bee88[0x0]==='\\x27'&&(_0x3bee88=_0x3bee88[_0x14462c(0x200)](0x1,_0x3bee88[_0x14462c(0x27e)]-0x2));var _0x162705=_0x160917[_0x14462c(0x278)]=_0x125b34[_0x14462c(0x233)+_0x3bee88];_0x162705&&(_0x160917[_0x14462c(0x25a)]=_0x160917['depth']+0x1),_0x160917[_0x14462c(0x28a)]=!!_0x162705;var _0x3227ab=typeof _0x2ac6cd=='symbol',_0x16b998={'name':_0x3227ab||_0x2c898b?_0x5c1c79:this['_propertyName'](_0x5c1c79)};if(_0x3227ab&&(_0x16b998[_0x14462c(0x219)]=!0x0),!(_0x2c7117===_0x14462c(0x1f8)||_0x2c7117===_0x14462c(0x21d))){var _0x4db08f=this['_getOwnPropertyDescriptor'](_0x5e468c,_0x2ac6cd);if(_0x4db08f&&(_0x4db08f[_0x14462c(0x1c3)]&&(_0x16b998[_0x14462c(0x251)]=!0x0),_0x4db08f[_0x14462c(0x28e)]&&!_0x162705&&!_0x160917['resolveGetters']))return _0x16b998[_0x14462c(0x267)]=!0x0,this[_0x14462c(0x1ed)](_0x16b998,_0x160917),_0x16b998;}var _0x3a3139;try{_0x3a3139=_0x4c4ec1(_0x5e468c,_0x2ac6cd);}catch(_0xd6b5f6){return _0x16b998={'name':_0x5c1c79,'type':_0x14462c(0x259),'error':_0xd6b5f6['message']},this['_processTreeNodeResult'](_0x16b998,_0x160917),_0x16b998;}var _0x1ad449=this[_0x14462c(0x1e0)](_0x3a3139),_0x2cad68=this[_0x14462c(0x223)](_0x1ad449);if(_0x16b998[_0x14462c(0x236)]=_0x1ad449,_0x2cad68)this['_processTreeNodeResult'](_0x16b998,_0x160917,_0x3a3139,function(){var _0x3839fb=_0x14462c;_0x16b998[_0x3839fb(0x26b)]=_0x3a3139[_0x3839fb(0x25f)](),!_0x162705&&_0x44509f[_0x3839fb(0x206)](_0x1ad449,_0x16b998,_0x160917,{});});else{var _0x10eaa9=_0x160917[_0x14462c(0x24b)]&&_0x160917['level']<_0x160917[_0x14462c(0x1f2)]&&_0x160917[_0x14462c(0x208)][_0x14462c(0x28b)](_0x3a3139)<0x0&&_0x1ad449!=='function'&&_0x160917[_0x14462c(0x209)]<_0x160917[_0x14462c(0x263)];_0x10eaa9||_0x160917['level']<_0x1747b4||_0x162705?(this['serialize'](_0x16b998,_0x3a3139,_0x160917,_0x162705||{}),this[_0x14462c(0x293)](_0x3a3139,_0x16b998)):this[_0x14462c(0x1ed)](_0x16b998,_0x160917,_0x3a3139,function(){var _0x449faf=_0x14462c;_0x1ad449==='null'||_0x1ad449===_0x449faf(0x1f5)||(delete _0x16b998['value'],_0x16b998[_0x449faf(0x202)]=!0x0);});}return _0x16b998;}finally{_0x160917[_0x14462c(0x278)]=_0x125b34,_0x160917[_0x14462c(0x25a)]=_0x1747b4,_0x160917['isExpressionToEvaluate']=_0x9ef742;}}[_0x45a39f(0x206)](_0x1c8267,_0xdfbfcf,_0x5b53b2,_0x2884cd){var _0x3d251a=_0x45a39f,_0x1be935=_0x2884cd['strLength']||_0x5b53b2[_0x3d251a(0x228)];if((_0x1c8267==='string'||_0x1c8267==='String')&&_0xdfbfcf[_0x3d251a(0x26b)]){let _0x34cbc3=_0xdfbfcf[_0x3d251a(0x26b)][_0x3d251a(0x27e)];_0x5b53b2[_0x3d251a(0x270)]+=_0x34cbc3,_0x5b53b2[_0x3d251a(0x270)]>_0x5b53b2[_0x3d251a(0x281)]?(_0xdfbfcf[_0x3d251a(0x202)]='',delete _0xdfbfcf[_0x3d251a(0x26b)]):_0x34cbc3>_0x1be935&&(_0xdfbfcf[_0x3d251a(0x202)]=_0xdfbfcf[_0x3d251a(0x26b)][_0x3d251a(0x200)](0x0,_0x1be935),delete _0xdfbfcf[_0x3d251a(0x26b)]);}}[_0x45a39f(0x22b)](_0x10fe3e){var _0x2e5fe9=_0x45a39f;return!!(_0x10fe3e&&_0x18f4c8[_0x2e5fe9(0x21c)]&&this[_0x2e5fe9(0x20a)](_0x10fe3e)===_0x2e5fe9(0x20e)&&_0x10fe3e[_0x2e5fe9(0x1d1)]);}[_0x45a39f(0x1f0)](_0xaab59c){var _0x21cdd4=_0x45a39f;if(_0xaab59c['match'](/^\\d+$/))return _0xaab59c;var _0x36d439;try{_0x36d439=JSON[_0x21cdd4(0x1cc)](''+_0xaab59c);}catch{_0x36d439='\\x22'+this[_0x21cdd4(0x20a)](_0xaab59c)+'\\x22';}return _0x36d439[_0x21cdd4(0x21f)](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x36d439=_0x36d439[_0x21cdd4(0x200)](0x1,_0x36d439[_0x21cdd4(0x27e)]-0x2):_0x36d439=_0x36d439[_0x21cdd4(0x1dc)](/'/g,'\\x5c\\x27')['replace'](/\\\\"/g,'\\x22')[_0x21cdd4(0x1dc)](/(^"|"$)/g,'\\x27'),_0x36d439;}['_processTreeNodeResult'](_0x2bb03d,_0x2d246e,_0x5d112c,_0x5d8903){var _0x4346dc=_0x45a39f;this[_0x4346dc(0x1e2)](_0x2bb03d,_0x2d246e),_0x5d8903&&_0x5d8903(),this[_0x4346dc(0x293)](_0x5d112c,_0x2bb03d),this['_treeNodePropertiesAfterFullValue'](_0x2bb03d,_0x2d246e);}[_0x45a39f(0x1e2)](_0x3a6026,_0x29ba6e){var _0x1dbaaf=_0x45a39f;this['_setNodeId'](_0x3a6026,_0x29ba6e),this[_0x1dbaaf(0x21b)](_0x3a6026,_0x29ba6e),this['_setNodeExpressionPath'](_0x3a6026,_0x29ba6e),this[_0x1dbaaf(0x255)](_0x3a6026,_0x29ba6e);}[_0x45a39f(0x247)](_0x196c7d,_0x512a4a){}[_0x45a39f(0x21b)](_0x4d0474,_0x46ca29){}[_0x45a39f(0x277)](_0x59d1e0,_0x551a96){}['_isUndefined'](_0x2d8ad3){var _0x3e4428=_0x45a39f;return _0x2d8ad3===this[_0x3e4428(0x25d)];}[_0x45a39f(0x1f6)](_0x36c5ed,_0xf17282){var _0x478825=_0x45a39f;this[_0x478825(0x277)](_0x36c5ed,_0xf17282),this[_0x478825(0x216)](_0x36c5ed),_0xf17282[_0x478825(0x24a)]&&this[_0x478825(0x1e4)](_0x36c5ed),this[_0x478825(0x27d)](_0x36c5ed,_0xf17282),this['_addLoadNode'](_0x36c5ed,_0xf17282),this['_cleanNode'](_0x36c5ed);}[_0x45a39f(0x293)](_0x2239ba,_0x3544d4){var _0x5232cd=_0x45a39f;try{_0x2239ba&&typeof _0x2239ba[_0x5232cd(0x27e)]==_0x5232cd(0x243)&&(_0x3544d4[_0x5232cd(0x27e)]=_0x2239ba['length']);}catch{}if(_0x3544d4['type']===_0x5232cd(0x243)||_0x3544d4[_0x5232cd(0x236)]===_0x5232cd(0x273)){if(isNaN(_0x3544d4['value']))_0x3544d4['nan']=!0x0,delete _0x3544d4[_0x5232cd(0x26b)];else switch(_0x3544d4[_0x5232cd(0x26b)]){case Number[_0x5232cd(0x1d7)]:_0x3544d4[_0x5232cd(0x225)]=!0x0,delete _0x3544d4['value'];break;case Number['NEGATIVE_INFINITY']:_0x3544d4[_0x5232cd(0x24f)]=!0x0,delete _0x3544d4[_0x5232cd(0x26b)];break;case 0x0:this[_0x5232cd(0x26f)](_0x3544d4[_0x5232cd(0x26b)])&&(_0x3544d4['negativeZero']=!0x0);break;}}else _0x3544d4[_0x5232cd(0x236)]===_0x5232cd(0x22f)&&typeof _0x2239ba['name']=='string'&&_0x2239ba[_0x5232cd(0x1c9)]&&_0x3544d4['name']&&_0x2239ba['name']!==_0x3544d4[_0x5232cd(0x1c9)]&&(_0x3544d4[_0x5232cd(0x297)]=_0x2239ba[_0x5232cd(0x1c9)]);}[_0x45a39f(0x26f)](_0x4d0ed1){var _0x15d0fc=_0x45a39f;return 0x1/_0x4d0ed1===Number[_0x15d0fc(0x23b)];}[_0x45a39f(0x1e4)](_0x23d8af){var _0x109080=_0x45a39f;!_0x23d8af['props']||!_0x23d8af['props'][_0x109080(0x27e)]||_0x23d8af[_0x109080(0x236)]==='array'||_0x23d8af[_0x109080(0x236)]===_0x109080(0x21c)||_0x23d8af['type']==='Set'||_0x23d8af[_0x109080(0x203)]['sort'](function(_0x3f77f6,_0x26f05e){var _0x445080=_0x109080,_0x3395c5=_0x3f77f6[_0x445080(0x1c9)][_0x445080(0x1da)](),_0x4fd26c=_0x26f05e['name'][_0x445080(0x1da)]();return _0x3395c5<_0x4fd26c?-0x1:_0x3395c5>_0x4fd26c?0x1:0x0;});}['_addFunctionsNode'](_0x42815e,_0x520b18){var _0x2bf379=_0x45a39f;if(!(_0x520b18[_0x2bf379(0x26e)]||!_0x42815e[_0x2bf379(0x203)]||!_0x42815e['props']['length'])){for(var _0x162e35=[],_0x54f29c=[],_0x8f9fd8=0x0,_0x80a28c=_0x42815e[_0x2bf379(0x203)][_0x2bf379(0x27e)];_0x8f9fd8<_0x80a28c;_0x8f9fd8++){var _0x5d9d82=_0x42815e[_0x2bf379(0x203)][_0x8f9fd8];_0x5d9d82[_0x2bf379(0x236)]===_0x2bf379(0x22f)?_0x162e35[_0x2bf379(0x1f9)](_0x5d9d82):_0x54f29c['push'](_0x5d9d82);}if(!(!_0x54f29c[_0x2bf379(0x27e)]||_0x162e35['length']<=0x1)){_0x42815e[_0x2bf379(0x203)]=_0x54f29c;var _0x4ef92d={'functionsNode':!0x0,'props':_0x162e35};this[_0x2bf379(0x247)](_0x4ef92d,_0x520b18),this[_0x2bf379(0x277)](_0x4ef92d,_0x520b18),this[_0x2bf379(0x216)](_0x4ef92d),this['_setNodePermissions'](_0x4ef92d,_0x520b18),_0x4ef92d['id']+='\\x20f',_0x42815e[_0x2bf379(0x203)][_0x2bf379(0x288)](_0x4ef92d);}}}[_0x45a39f(0x1df)](_0x1cbf19,_0x7667f9){}[_0x45a39f(0x216)](_0x4c63e4){}['_isArray'](_0x33bc1e){var _0x184ce4=_0x45a39f;return Array[_0x184ce4(0x1fb)](_0x33bc1e)||typeof _0x33bc1e==_0x184ce4(0x279)&&this['_objectToString'](_0x33bc1e)===_0x184ce4(0x241);}[_0x45a39f(0x255)](_0x202dfe,_0x3a83a3){}[_0x45a39f(0x264)](_0x12b97a){var _0x1e1bb9=_0x45a39f;delete _0x12b97a[_0x1e1bb9(0x1fc)],delete _0x12b97a['_hasSetOnItsPath'],delete _0x12b97a[_0x1e1bb9(0x1c7)];}[_0x45a39f(0x25b)](_0x3e2022,_0x1cf062){}[_0x45a39f(0x211)](_0x46371a){var _0x49d322=_0x45a39f;return _0x46371a?_0x46371a[_0x49d322(0x21f)](this[_0x49d322(0x287)])?'['+_0x46371a+']':_0x46371a['match'](this[_0x49d322(0x1ea)])?'.'+_0x46371a:_0x46371a[_0x49d322(0x21f)](this[_0x49d322(0x213)])?'['+_0x46371a+']':'[\\x27'+_0x46371a+'\\x27]':'';}}let _0x44cf11=new _0x405e65();function _0x58c7eb(_0x142cf6,_0x3ce103,_0x2cc761,_0x5612ad){var _0x3bc213=_0x45a39f;let _0x4f9f19,_0x21fc23;try{_0x21fc23=_0x10075e(),_0x4f9f19=_0xb566c0[_0x142cf6],!_0x4f9f19||_0x21fc23-_0x4f9f19['ts']>0x1f4&&_0x4f9f19[_0x3bc213(0x227)]&&_0x4f9f19['time']/_0x4f9f19['count']<0x64?(_0xb566c0[_0x142cf6]=_0x4f9f19={'count':0x0,'time':0x0,'ts':_0x21fc23},_0xb566c0[_0x3bc213(0x246)]={}):_0x21fc23-_0xb566c0['hits']['ts']>0x32&&_0xb566c0[_0x3bc213(0x246)][_0x3bc213(0x227)]&&_0xb566c0[_0x3bc213(0x246)][_0x3bc213(0x1d0)]/_0xb566c0[_0x3bc213(0x246)][_0x3bc213(0x227)]<0x64&&(_0xb566c0[_0x3bc213(0x246)]={});let _0x375cdb=[],_0xfb0835=_0x4f9f19[_0x3bc213(0x271)]||_0xb566c0[_0x3bc213(0x246)][_0x3bc213(0x271)]?_0x53f542:_0x3d2a15;for(var _0x34302f=0x0;_0x34302f<_0x5612ad['length'];_0x34302f++){let _0x2273d7={};_0x2273d7[_0x3bc213(0x203)]=_0xfb0835[_0x3bc213(0x203)],_0x2273d7[_0x3bc213(0x20f)]=_0xfb0835[_0x3bc213(0x20f)],_0x2273d7[_0x3bc213(0x228)]=_0xfb0835[_0x3bc213(0x228)],_0x2273d7[_0x3bc213(0x281)]=_0xfb0835[_0x3bc213(0x281)],_0x2273d7['autoExpandLimit']=_0xfb0835['autoExpandLimit'],_0x2273d7[_0x3bc213(0x1f2)]=_0xfb0835[_0x3bc213(0x1f2)],_0x2273d7[_0x3bc213(0x24a)]=!0x1,_0x2273d7[_0x3bc213(0x26e)]=!_0x5c2abb,_0x2273d7[_0x3bc213(0x25a)]=0x1,_0x2273d7[_0x3bc213(0x272)]=0x0,_0x2273d7['expId']=_0x3bc213(0x24e),_0x2273d7[_0x3bc213(0x217)]=_0x3bc213(0x222),_0x2273d7[_0x3bc213(0x24b)]=!0x0,_0x2273d7[_0x3bc213(0x208)]=[],_0x2273d7[_0x3bc213(0x209)]=0x0,_0x2273d7[_0x3bc213(0x286)]=!0x0,_0x2273d7[_0x3bc213(0x270)]=0x0,_0x2273d7[_0x3bc213(0x28d)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x375cdb[_0x3bc213(0x1f9)](_0x44cf11[_0x3bc213(0x229)]({},_0x5612ad[_0x34302f],_0x2273d7,{}));}return{'method':_0x3bc213(0x1f1),'version':_0x3c28ab,'args':[{'id':_0x142cf6,'ts':_0x3ce103,'args':_0x375cdb,'session':_0x2cc761}]};}catch(_0x1aeb5a){return{'method':_0x3bc213(0x1f1),'version':_0x3c28ab,'args':[{'id':_0x142cf6,'ts':_0x3ce103,'args':[{'type':_0x3bc213(0x259),'error':_0x1aeb5a&&_0x1aeb5a[_0x3bc213(0x214)],'session':_0x2cc761}]}]};}finally{try{if(_0x4f9f19&&_0x21fc23){let _0x3042e0=_0x10075e();_0x4f9f19[_0x3bc213(0x227)]++,_0x4f9f19[_0x3bc213(0x1d0)]+=_0x3042e0-_0x21fc23,_0x4f9f19['ts']=_0x3042e0,_0xb566c0['hits']['count']++,_0xb566c0[_0x3bc213(0x246)][_0x3bc213(0x1d0)]+=_0x3042e0-_0x21fc23,_0xb566c0['hits']['ts']=_0x3042e0,(_0x4f9f19[_0x3bc213(0x227)]>0x32||_0x4f9f19[_0x3bc213(0x1d0)]>0x64)&&(_0x4f9f19[_0x3bc213(0x271)]=!0x0),(_0xb566c0[_0x3bc213(0x246)][_0x3bc213(0x227)]>0x3e8||_0xb566c0[_0x3bc213(0x246)]['time']>0x12c)&&(_0xb566c0['hits'][_0x3bc213(0x271)]=!0x0);}}catch{}}}function _0x447c1b(){var _0x5e2ed7=_0x45a39f;if(_0x18f4c8['performance'])return()=>_0x18f4c8['performance'][_0x5e2ed7(0x254)]();try{let {performance:_0x1f9015}=require(_0x5e2ed7(0x22c));return()=>_0x1f9015[_0x5e2ed7(0x254)]();}catch{return()=>Date[_0x5e2ed7(0x254)]();}}})(globalThis,_0xac630d(0x27c),_0xac630d(0x1f7),"c:\\\\Users\\\\Markm.000\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-0.0.71\\\\node_modules",_0xac630d(0x1ca),'1.0.0',_0xac630d(0x1d2),_0xac630d(0x27f),_0xac630d(0x224));`);
  } catch {
  }
}

// app/routes/logout.ts
var logout_exports = {};
__export(logout_exports, {
  action: () => action2
});
var import_node3 = require("@remix-run/node");
var action2 = async ({ request }) => {
  if (request.method !== "POST")
    throw (0, import_node3.json)({ message: "Invalid request on Logout" }, { status: 400 });
  return await destroyUserSession(request);
};

// app/routes/__auth.tsx
var auth_exports = {};
__export(auth_exports, {
  default: () => AuthLayout,
  loader: () => loader4
});
var import_node4 = require("@remix-run/node"), import_react21 = require("@remix-run/react");

// app/components/Auth/AuthHeader.tsx
var import_react20 = require("@remix-run/react"), import_jsx_dev_runtime19 = require("react/jsx-dev-runtime");
function AuthHeader() {
  let isLoginPage = (0, import_react20.useLocation)().pathname === "/login";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("nav", { className: "bg-emerald-500 p-3 flex text-3xl space-x-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("h1", { className: "", children: "Audiobook Tracker" }, void 0, !1, {
      fileName: "app/components/Auth/AuthHeader.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    isLoginPage && /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react20.Link, { to: "/signup", className: "underline text-green-900", children: "SignUp" }, void 0, !1, {
      fileName: "app/components/Auth/AuthHeader.tsx",
      lineNumber: 17,
      columnNumber: 9
    }, this),
    isLoginPage || /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react20.Link, { to: "/login", className: "underline text-green-900", children: "Login" }, void 0, !1, {
      fileName: "app/components/Auth/AuthHeader.tsx",
      lineNumber: 22,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Auth/AuthHeader.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}
var AuthHeader_default = AuthHeader;

// app/routes/__auth.tsx
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime");
function AuthLayout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "flex flex-col bg-emerald-200 h-screen w-full ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(AuthHeader_default, {}, void 0, !1, {
      fileName: "app/routes/__auth.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react21.Outlet, {}, void 0, !1, {
      fileName: "app/routes/__auth.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/__auth.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}
var loader4 = async ({ request }) => await getUserFromSession(request) ? (0, import_node4.redirect)("/audiobooks") : null;

// app/routes/__auth/signup.tsx
var signup_exports = {};
__export(signup_exports, {
  Signup: () => Signup,
  action: () => action3,
  default: () => signup_default
});
var import_react23 = require("@remix-run/react"), import_react24 = require("react"), import_node5 = require("@remix-run/node");

// app/data/auth.server.ts
var import_bcryptjs = require("bcryptjs");
async function signup({ email, password }) {
  if (await prisma.user.count({ where: { email } })) {
    let error = new Error();
    throw error.message = `User with email address ${email} already exists.`, error.name = "Email Exists", error;
  }
  let passwordHash = await (0, import_bcryptjs.hash)(password, 12), user = await prisma.user.create({
    data: { email, password: passwordHash }
  });
  return createUserSession(user.id, "/audiobooks");
}
async function login({ email, password }) {
  let exsitingUser = await prisma.user.findFirst({ where: { email } });
  if (!exsitingUser) {
    let error = new Error();
    throw error.message = `User with email address ${email} not found.`, error.name = "Server Login Error", error;
  }
  if (!(0, import_bcryptjs.compare)(password, exsitingUser.password)) {
    let error = new Error();
    throw error.message = "Password Incorrect.", error.name = "Server Login Error", error;
  }
  return createUserSession(exsitingUser.id, "/audiobooks");
}

// app/utils/validation.ts
var import_zod2 = require("zod"), AuthFormValues = import_zod2.z.object({
  email: import_zod2.z.string().email(),
  password: import_zod2.z.string().min(5, { message: "Password must be at least 5 chars" }).max(15)
}), authFormValidation = ({ email, password }) => {
  let authResults = AuthFormValues.safeParse({ email, password });
  if (!authResults.success)
    return authResults.error.format();
};

// app/components/input/InputField.tsx
var import_react22 = require("react"), import_jsx_dev_runtime21 = require("react/jsx-dev-runtime"), initType = (type) => type === "passwordWpeek" ? "password" : type;
function InputField({ name, type, onChange, value, label, error }) {
  let controlledProps = onChange ? { onChange, value } : {}, [currType, setCurrType] = (0, import_react22.useState)(initType(type)), peekPasswordToggle = () => setCurrType((state) => state === "password" ? "text" : "password");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("label", { htmlFor: name, children: label }, void 0, !1, {
      fileName: "app/components/input/InputField.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
        "input",
        {
          id: name,
          name,
          type: currType,
          className: "w-full p-2 rounded-lg my-2",
          ...controlledProps
        },
        void 0,
        !1,
        {
          fileName: "app/components/input/InputField.tsx",
          lineNumber: 25,
          columnNumber: 9
        },
        this
      ),
      type === "passwordWpeek" && /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
        "div",
        {
          onMouseDown: peekPasswordToggle,
          onMouseUp: peekPasswordToggle,
          className: "cursor-pointer p-2 border border-black bg-gray-200 rounded-lg",
          children: "Peek"
        },
        void 0,
        !1,
        {
          fileName: "app/components/input/InputField.tsx",
          lineNumber: 33,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/input/InputField.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    error && /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { children: error }, void 0, !1, {
      fileName: "app/components/input/InputField.tsx",
      lineNumber: 42,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/input/InputField.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}
var InputField_default = InputField;

// app/routes/__auth/signup.tsx
var import_jsx_dev_runtime22 = require("react/jsx-dev-runtime"), action3 = async ({ request }) => {
  var _a, _b;
  let formData = await request.formData(), formFields = Object.fromEntries(formData), validationErrors = authFormValidation({
    email: formFields.email,
    password: formFields.password
  });
  if (validationErrors)
    return (0, import_node5.json)({
      name: "Validation Errors",
      email: (_a = validationErrors.email) == null ? void 0 : _a._errors.join("-"),
      password: (_b = validationErrors.password) == null ? void 0 : _b._errors.join("-")
    });
  try {
    await signup({ email: formFields.email, password: formFields.password });
  } catch (error) {
    if (error instanceof Error && error.name === "Email Exists")
      return (0, import_node5.json)(error);
    throw new Error(String(error));
  }
  return null;
}, Signup = () => {
  let [pwVisible, togglePwVisible] = (0, import_react24.useReducer)((state) => !state, !1), actionData = (0, import_react23.useActionData)();
  return console.log("actionData", actionData), /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "flex flex-col flex-grow border border-black justify-center items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("h1", { className: "text-3xl mb-4", children: "Register for Audiobook Tracker" }, void 0, !1, {
      fileName: "app/routes/__auth/signup.tsx",
      lineNumber: 68,
      columnNumber: 7
    }, this),
    (actionData == null ? void 0 : actionData.name) === "Email Exists" && /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { children: actionData.message }, void 0, !1, {
      fileName: "app/routes/__auth/signup.tsx",
      lineNumber: 69,
      columnNumber: 47
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
      import_react23.Form,
      {
        method: "post",
        className: "flex flex-col rounded-lg p-6 w-96 bg-gray-400",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
            InputField_default,
            {
              label: "Email",
              name: "email",
              type: "text",
              error: (actionData == null ? void 0 : actionData.name) === "Validation Errors" ? actionData == null ? void 0 : actionData.email : void 0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/__auth/signup.tsx",
              lineNumber: 74,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
            InputField_default,
            {
              label: "Password",
              name: "password",
              type: "passwordWpeek",
              error: (actionData == null ? void 0 : actionData.name) === "Validation Errors" ? actionData == null ? void 0 : actionData.password : void 0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/__auth/signup.tsx",
              lineNumber: 84,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "w-full text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
            "button",
            {
              type: "submit",
              name: "button",
              value: "signup",
              className: "rounded-lg bg-emerald-800 px-3 py-2 text-xl text-white",
              children: "Sign Up"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/__auth/signup.tsx",
              lineNumber: 96,
              columnNumber: 11
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/__auth/signup.tsx",
            lineNumber: 95,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/__auth/signup.tsx",
        lineNumber: 70,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/__auth/signup.tsx",
    lineNumber: 67,
    columnNumber: 5
  }, this);
}, signup_default = Signup;

// app/routes/__auth/index.tsx
var auth_exports2 = {};
__export(auth_exports2, {
  loader: () => loader5
});
var import_node6 = require("@remix-run/node");
async function loader5({ request }) {
  return (0, import_node6.redirect)("/login");
}

// app/routes/__auth/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action4,
  default: () => login_default
});
var import_node7 = require("@remix-run/node"), import_react25 = require("@remix-run/react");
var import_jsx_dev_runtime23 = require("react/jsx-dev-runtime"), action4 = async ({ request }) => {
  var _a;
  let formData = await request.formData(), { email, password } = Object.fromEntries(formData), validationErrors = authFormValidation({ email, password });
  if (validationErrors != null && validationErrors.email)
    return (0, import_node7.json)({
      name: "Validation Errors",
      email: (_a = validationErrors.email) == null ? void 0 : _a._errors.join("-")
    });
  try {
    return await login({ email, password });
  } catch (error) {
    if (error instanceof Error && error.name === "Server Login Error")
      return (0, import_node7.json)(error);
    throw new Error(String(error));
  }
};
function Login() {
  let actionData = (0, import_react25.useActionData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "flex flex-col flex-grow border border-black justify-center items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("h1", { className: "text-3xl mb-4", children: "Audiobook Tracker Login" }, void 0, !1, {
      fileName: "app/routes/__auth/login.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
      import_react25.Form,
      {
        method: "post",
        className: "flex flex-col rounded-lg p-6 w-96 bg-gray-400",
        children: [
          (actionData == null ? void 0 : actionData.name) === "Server Login Error" && /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { children: actionData.message }, void 0, !1, {
            fileName: "app/routes/__auth/login.tsx",
            lineNumber: 58,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
            InputField_default,
            {
              label: "Email",
              name: "email",
              type: "text",
              error: (actionData == null ? void 0 : actionData.name) === "Validation Errors" ? actionData == null ? void 0 : actionData.email : void 0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/__auth/login.tsx",
              lineNumber: 60,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
            InputField_default,
            {
              label: "Password",
              name: "password",
              type: "password",
              error: (actionData == null ? void 0 : actionData.name) === "Validation Errors" ? actionData == null ? void 0 : actionData.password : void 0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/__auth/login.tsx",
              lineNumber: 70,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "w-full text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
            "button",
            {
              type: "submit",
              name: "button",
              value: "login",
              className: "rounded-lg bg-emerald-800 px-3 py-2 text-xl text-white",
              children: "Sign In"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/__auth/login.tsx",
              lineNumber: 81,
              columnNumber: 11
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/__auth/login.tsx",
            lineNumber: 80,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/__auth/login.tsx",
        lineNumber: 53,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/__auth/login.tsx",
    lineNumber: 51,
    columnNumber: 5
  }, this);
}
var login_default = Login;

// app/routes/init.ts
var init_exports = {};
__export(init_exports, {
  loader: () => loader6
});
var import_node8 = require("@remix-run/node"), loader6 = () => (console.log("INIT Functino"), (0, import_node8.json)({
  initShit: "Yes It is"
}));

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "1060f458", entry: { module: "/build/entry.client-EU4QLAAT.js", imports: ["/build/_shared/chunk-IK7OUPWO.js", "/build/_shared/chunk-VIPVJV6J.js", "/build/_shared/chunk-5KL4PAQL.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-B5KNFPHD.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/__auth": { id: "routes/__auth", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/__auth-2QY5MCPV.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__auth/index": { id: "routes/__auth/index", parentId: "routes/__auth", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/__auth/index-ALM4RXXM.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__auth/login": { id: "routes/__auth/login", parentId: "routes/__auth", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/__auth/login-3PQDFYD6.js", imports: ["/build/_shared/chunk-IJNW62BP.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__auth/signup": { id: "routes/__auth/signup", parentId: "routes/__auth", path: "signup", index: void 0, caseSensitive: void 0, module: "/build/routes/__auth/signup-AQIJ7UZ4.js", imports: ["/build/_shared/chunk-IJNW62BP.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/audiobooks": { id: "routes/audiobooks", parentId: "root", path: "audiobooks", index: void 0, caseSensitive: void 0, module: "/build/routes/audiobooks-VDXOKFTZ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/audiobooks/$bookId": { id: "routes/audiobooks/$bookId", parentId: "routes/audiobooks", path: ":bookId", index: void 0, caseSensitive: void 0, module: "/build/routes/audiobooks/$bookId-7CB4C2S3.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/audiobooks/$bookId/edit": { id: "routes/audiobooks/$bookId/edit", parentId: "routes/audiobooks/$bookId", path: "edit", index: void 0, caseSensitive: void 0, module: "/build/routes/audiobooks/$bookId/edit-2XOA2KYX.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/audiobooks/$bookId/edit.subEdit": { id: "routes/audiobooks/$bookId/edit.subEdit", parentId: "routes/audiobooks/$bookId", path: "edit/subEdit", index: void 0, caseSensitive: void 0, module: "/build/routes/audiobooks/$bookId/edit.subEdit-JBXQQAQX.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/audiobooks/$bookId/index": { id: "routes/audiobooks/$bookId/index", parentId: "routes/audiobooks/$bookId", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/audiobooks/$bookId/index-XICAARCG.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/audiobooks/index": { id: "routes/audiobooks/index", parentId: "routes/audiobooks", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/audiobooks/index-Z7AIB2OH.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/init": { id: "routes/init", parentId: "root", path: "init", index: void 0, caseSensitive: void 0, module: "/build/routes/init-6PTUCPY5.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-54GW2W2K.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-1060F458.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { v2_meta: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/audiobooks": {
    id: "routes/audiobooks",
    parentId: "root",
    path: "audiobooks",
    index: void 0,
    caseSensitive: void 0,
    module: audiobooks_exports
  },
  "routes/audiobooks/$bookId": {
    id: "routes/audiobooks/$bookId",
    parentId: "routes/audiobooks",
    path: ":bookId",
    index: void 0,
    caseSensitive: void 0,
    module: bookId_exports
  },
  "routes/audiobooks/$bookId/edit.subEdit": {
    id: "routes/audiobooks/$bookId/edit.subEdit",
    parentId: "routes/audiobooks/$bookId",
    path: "edit/subEdit",
    index: void 0,
    caseSensitive: void 0,
    module: edit_subEdit_exports
  },
  "routes/audiobooks/$bookId/index": {
    id: "routes/audiobooks/$bookId/index",
    parentId: "routes/audiobooks/$bookId",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: bookId_exports2
  },
  "routes/audiobooks/$bookId/edit": {
    id: "routes/audiobooks/$bookId/edit",
    parentId: "routes/audiobooks/$bookId",
    path: "edit",
    index: void 0,
    caseSensitive: void 0,
    module: edit_exports
  },
  "routes/audiobooks/index": {
    id: "routes/audiobooks/index",
    parentId: "routes/audiobooks",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: audiobooks_exports2
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/__auth": {
    id: "routes/__auth",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: auth_exports
  },
  "routes/__auth/signup": {
    id: "routes/__auth/signup",
    parentId: "routes/__auth",
    path: "signup",
    index: void 0,
    caseSensitive: void 0,
    module: signup_exports
  },
  "routes/__auth/index": {
    id: "routes/__auth/index",
    parentId: "routes/__auth",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: auth_exports2
  },
  "routes/__auth/login": {
    id: "routes/__auth/login",
    parentId: "routes/__auth",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/init": {
    id: "routes/init",
    parentId: "root",
    path: "init",
    index: void 0,
    caseSensitive: void 0,
    module: init_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=server.js.map
