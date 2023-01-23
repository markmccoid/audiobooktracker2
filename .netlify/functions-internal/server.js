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
var app_default = "/build/_assets/app-GCR3A6OX.css";

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
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 32,
    columnNumber: 5
  }, this);
}
var loader = () => (console.log("Root Loader Run"), null), links = () => [
  {
    rel: "stylesheet",
    href: app_default
  }
], ErrorBoundary = ({ error }) => (console.log("Error Boundary", error), /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { children: "Uncaught Error Boundary" }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 72,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { children: error.message }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 73,
    columnNumber: 9
  }, this)
] }, void 0, !0, {
  fileName: "app/root.tsx",
  lineNumber: 71,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/root.tsx",
  lineNumber: 70,
  columnNumber: 5
}, this)), CatchBoundary = () => {
  var _a;
  let caughtResponse = (0, import_react2.useCatch)();
  return console.log("catchboundary", caughtResponse), /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { children: "Uncaught Error Catch" }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 86,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { children: caughtResponse == null ? void 0 : caughtResponse.statusText }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 87,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { children: (_a = caughtResponse.data) == null ? void 0 : _a.message }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 88,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 85,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 84,
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

// app/routes/audiobooks/$bookid.tsx
var bookid_exports = {};
__export(bookid_exports, {
  default: () => $bookid,
  loader: () => loader2
});
var import_react5 = require("@remix-run/react");

// app/data/audiobookLoader.server.ts
var import_node = require("@remix-run/node"), import_fs = __toESM(require("fs"));
function readBookData() {
  let rawFileContent = import_fs.default.readFileSync("audiobooks.json", {
    encoding: "utf-8"
  }), rawAudibleContent = import_fs.default.readFileSync("audiblebooks.json", {
    encoding: "utf-8"
  });
  if (!rawFileContent && !rawAudibleContent)
    throw (0, import_node.json)(
      { message: "No books records Found" },
      { status: 404, statusText: "Not Found" }
    );
  return [
    ...JSON.parse(rawFileContent),
    ...JSON.parse(rawAudibleContent)
  ];
}
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
function getBookById(id) {
  return readBookData().find((el) => el.id === id);
}
function getCategories() {
  let bookMetadata = readBookMetadata();
  return {
    primaryCategories: bookMetadata.primaryCategories,
    secondaryCategories: bookMetadata.secondaryCategories,
    categoryMap: bookMetadata.categoryMap
  };
}

// app/routes/audiobooks/$bookid.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function $bookid() {
  let bookData = (0, import_react5.useLoaderData)();
  console.log("bookData - $", bookData);
  let params = (0, import_react5.useParams)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { className: "text-xl", children: "Book Id Dynamic route" }, void 0, !1, {
      fileName: "app/routes/audiobooks/$bookid.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: params.bookid }, void 0, !1, {
      fileName: "app/routes/audiobooks/$bookid.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
      "TEST",
      bookData.title
    ] }, void 0, !0, {
      fileName: "app/routes/audiobooks/$bookid.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: bookData.author }, void 0, !1, {
      fileName: "app/routes/audiobooks/$bookid.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: bookData.releaseYear }, void 0, !1, {
      fileName: "app/routes/audiobooks/$bookid.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/audiobooks/$bookid.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}
function loader2({ params }) {
  return getBookById(params.bookid);
}

// app/routes/audiobooks/index.tsx
var audiobooks_exports2 = {};
__export(audiobooks_exports2, {
  action: () => action,
  default: () => Index,
  loader: () => loader3
});
var import_react13 = require("@remix-run/react");

// app/components/audiobooks/BookCard.tsx
var import_react8 = require("@remix-run/react"), import_react9 = require("react");

// app/components/audiobooks/BookImage.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function BookImage({ imageUrl, width, height }) {
  let noImage = !imageUrl || !(imageUrl != null && imageUrl.includes("http"));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: noImage ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
    "div",
    {
      className: `w-[${width}px] h-[${height}px] border border-gray-700 rounded-lg`,
      children: "\u{1F5BC}\uFE0F"
    },
    void 0,
    !1,
    {
      fileName: "app/components/audiobooks/BookImage.tsx",
      lineNumber: 12,
      columnNumber: 9
    },
    this
  ) : /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
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
      lineNumber: 18,
      columnNumber: 9
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/audiobooks/BookImage.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}
var BookImage_default = BookImage;

// app/components/audiobooks/BookFavorite.tsx
var import_react6 = require("@remix-run/react"), import_ai = require("react-icons/ai"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function BookFavorite({ book }) {
  var _a, _b;
  let fetcher = (0, import_react6.useFetcher)(), favoriteFlag = ((_a = fetcher == null ? void 0 : fetcher.submission) == null ? void 0 : _a.formData.get("bookid")) === book.id ? !(book != null && book.favorite) : book == null ? void 0 : book.favorite;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(fetcher.Form, { method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("input", { type: "hidden", id: "bookid", name: "bookid", value: book.id }, void 0, !1, {
      fileName: "app/components/audiobooks/BookFavorite.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      "button",
      {
        type: "submit",
        "aria-label": "toggle favorite",
        name: "_action",
        value: "toggle-favorite",
        children: favoriteFlag ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_ai.AiFillHeart, { size: 35, color: "red" }, void 0, !1, {
          fileName: "app/components/audiobooks/BookFavorite.tsx",
          lineNumber: 29,
          columnNumber: 11
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_ai.AiOutlineHeart, { size: 35 }, void 0, !1, {
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
var import_react7 = require("@remix-run/react"), import_bs = require("react-icons/bs"), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function BookListenedTo({ book }) {
  var _a;
  let fetcher = (0, import_react7.useFetcher)(), BookListenedTo2 = book == null ? void 0 : book.listenedTo, optimisticValue = ((_a = fetcher == null ? void 0 : fetcher.submission) == null ? void 0 : _a.formData.get("bookid")) === book.id ? !BookListenedTo2 : BookListenedTo2;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(fetcher.Form, { method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("input", { type: "hidden", id: "bookid", name: "bookid", value: book.id }, void 0, !1, {
      fileName: "app/components/audiobooks/BookListenedTo.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
      "button",
      {
        type: "submit",
        "aria-label": "toggle listenedto",
        name: "_action",
        value: "toggle-listenedto",
        children: optimisticValue ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_bs.BsEarbuds, { size: 35, color: "green" }, void 0, !1, {
          fileName: "app/components/audiobooks/BookListenedTo.tsx",
          lineNumber: 31,
          columnNumber: 11
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_bs.BsEarbuds, { size: 35 }, void 0, !1, {
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

// app/components/audiobooks/BookCard.tsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), BookCard = ({ book }) => {
  var _a;
  let noImage = !book.imageURL || !((_a = book.imageURL) != null && _a.includes("http")), transition = (0, import_react8.useTransition)(), actionData = (0, import_react8.useActionData)(), [isFav, setIsFav] = (0, import_react9.useState)(!1), [listenedTo, setListenedTo] = (0, import_react9.useState)(!1), submit = (0, import_react8.useSubmit)(), formFavRef = (0, import_react9.useRef)(), handleFavorite = () => {
    setIsFav((prev) => !prev);
  }, amazonLink = `https://www.amazon.com/s/?search-alias=stripbooks&field-author=${book.author}&field-title=${book.title}`, audibleLink = book != null && book.asin ? `https://www.audible.com/pd/${book == null ? void 0 : book.asin}` : void 0;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex flex-col w-[375px] h-[475px] border border-black m-3 bg-cerulean-blue-200", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex text-xl font-semibold justify-around border-b border-b-cerulean-blue-900 p-1 pb-2 bg-cerulean-blue-300 text-cerulean-blue-900", children: [
      book.title,
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(BookFavorite_default, { book }, void 0, !1, {
        fileName: "app/components/audiobooks/BookCard.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(BookListenedTo_default, { book }, void 0, !1, {
        fileName: "app/components/audiobooks/BookCard.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/audiobooks/BookCard.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex bg-cerulean-blue-200", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
        "a",
        {
          href: audibleLink || amazonLink,
          target: "_blank",
          className: `mx-2 mt-2 flex-shrink-0 hover:border-2 transition-all\r
          hover:border-cerulean-blue-600 hover:rounded-lg hover:scale-102`,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(BookImage_default, { imageUrl: book.imageURL, width: 128, height: 205 }, void 0, !1, {
            fileName: "app/components/audiobooks/BookCard.tsx",
            lineNumber: 48,
            columnNumber: 11
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/audiobooks/BookCard.tsx",
          lineNumber: 42,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex flex-col mt-2 ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "book-text-dets", children: book.author }, void 0, !1, {
          fileName: "app/components/audiobooks/BookCard.tsx",
          lineNumber: 51,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "book-text-dets", children: [
          "Published - ",
          book.publishedYear
        ] }, void 0, !0, {
          fileName: "app/components/audiobooks/BookCard.tsx",
          lineNumber: 52,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "book-text-dets", children: [
          "Length -",
          " ",
          book.bookLengthText ? book.bookLengthText : book.pageCount
        ] }, void 0, !0, {
          fileName: "app/components/audiobooks/BookCard.tsx",
          lineNumber: 53,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "book-text-dets", children: [
          book.primaryCategory,
          "-",
          book.secondaryCategory
        ] }, void 0, !0, {
          fileName: "app/components/audiobooks/BookCard.tsx",
          lineNumber: 57,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "text-md text-cerulean-blue-900 font-semibold ", children: book.genres.join(", ") }, void 0, !1, {
          fileName: "app/components/audiobooks/BookCard.tsx",
          lineNumber: 60,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/audiobooks/BookCard.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/audiobooks/BookCard.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      "div",
      {
        className: `bg-cerulean-blue-200 p-2 pb-0 my-1\r
                  flex-grow overflow-hidden overflow-y-scroll scrollbar-hide`,
        children: book.description
      },
      void 0,
      !1,
      {
        fileName: "app/components/audiobooks/BookCard.tsx",
        lineNumber: 65,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/audiobooks/BookCard.tsx",
    lineNumber: 35,
    columnNumber: 5
  }, this);
}, BookCard_default = BookCard;

// app/components/audiobooks/SearchBarForm.tsx
var import_react11 = require("@remix-run/react"), import_react12 = require("react"), import_lodash2 = __toESM(require("lodash")), import_ai3 = require("react-icons/ai"), import_bs2 = require("react-icons/bs");

// app/components/SearchInputs/SearchInput.tsx
var import_react10 = require("react"), import_ai2 = require("react-icons/ai"), import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function SearchInput({ defaultValue, label, name, submitForm }, ref) {
  let internalRef = (0, import_react10.useRef)(null), clearInternal = () => {
    internalRef.current && internalRef.current.focus(), internalRef.current && (internalRef == null ? void 0 : internalRef.current.value) !== "" && (internalRef.current.value = "", submitForm());
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex flex-col ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("label", { htmlFor: "title", className: "search-form-input-label", children: label }, void 0, !1, {
      fileName: "app/components/SearchInputs/SearchInput.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "relative", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
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

// app/components/audiobooks/SearchBarForm.tsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), primaryCategories = ["Biographies", "Fiction", "Language", "NonFiction"], secondaryCategories = [
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
};
function SearchBarForm({ totalBooks }) {
  let [params, setParams] = (0, import_react11.useSearchParams)(), [secondCats, setSecondCats] = (0, import_react12.useState)([]), navigate = (0, import_react11.useNavigate)(), submit = (0, import_react11.useSubmit)(), formRef = (0, import_react12.useRef)(null), inputRef = (0, import_react12.useRef)(null), testRef = (0, import_react12.useRef)(null), catRef = (0, import_react12.useRef)(null), subCatRef = (0, import_react12.useRef)(null), [favoriteState, setFavoriteState] = (0, import_react12.useState)(!1), [isListenedTo, setIsListenedTo] = (0, import_react12.useState)(!1), newParams = (0, import_react12.useMemo)(
    () => ({
      title: params.get("title") || void 0,
      author: params.get("author") || void 0,
      primarycat: params.get("primarycat") || void 0,
      secondarycat: params.get("secondarycat") || void 0,
      sortfield: params.get("sortfield") || void 0,
      sortdirection: params.get("sortdirection") || void 0,
      favorited: params.get("favorited") || void 0,
      listenedToFlag: params.get("listenedToFlag") || void 0
    }),
    [params]
  );
  (0, import_react12.useEffect)(() => {
    formRef != null && formRef.current && handleChange(formRef.current);
  }, [isListenedTo, favoriteState]), (0, import_react12.useEffect)(() => {
    secondCatsFunc();
  }, [newParams, subCatRef.current]);
  let secondCatsFunc = () => {
    var _a, _b;
    (_a = catRef.current) != null && _a.value ? setSecondCats(["", ...categoryMap[(_b = catRef.current) == null ? void 0 : _b.value]]) : setSecondCats(["", ...secondaryCategories]), newParams.secondarycat && subCatRef.current && (subCatRef.current.value = newParams.secondarycat);
  }, clearSearchParams = () => {
    var _a;
    setSecondCats([]), setIsListenedTo(!1), setFavoriteState(!1), (_a = formRef.current) == null || _a.reset(), submit(formRef.current, { replace: !0 });
  }, clearInputField = (inputName) => {
    var _a;
    inputRef.current && ((_a = inputRef.current) == null || _a.focus(), inputRef.current.value = "", handleChange(formRef.current));
  }, clearInputFieldTest = (inputName) => {
    var _a;
    testRef.current && ((_a = testRef.current) == null || _a.focus(), testRef.current.value = "", handleChange(formRef.current));
  }, submitForm = () => {
    if (formRef.current)
      handleChange(formRef.current);
    else
      throw new Error(
        "Form Ref not Initialized, can't submit form... SearchBarForm.tsx"
      );
  };
  function handleChange(targetForm) {
    submit(targetForm, { replace: !0 });
  }
  let db_handleChange = import_lodash2.default.debounce((e) => handleChange(e), 300);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex w-full  bg-cerulean-blue-400 p-4 mb-5", id: "form", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("button", { className: "button", onClick: () => alert("Here"), children: "Upload Categories" }, void 0, !1, {
      fileName: "app/components/audiobooks/SearchBarForm.tsx",
      lineNumber: 169,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
      import_react11.Form,
      {
        ref: formRef,
        onChange: (e) => db_handleChange(e.currentTarget),
        className: "flex items-center justify-between  flex-grow",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
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
                fileName: "app/components/audiobooks/SearchBarForm.tsx",
                lineNumber: 178,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
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
                fileName: "app/components/audiobooks/SearchBarForm.tsx",
                lineNumber: 186,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex flex-col", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("label", { htmlFor: "primarycat", className: "search-form-input-label", children: "Primary Cat" }, void 0, !1, {
                fileName: "app/components/audiobooks/SearchBarForm.tsx",
                lineNumber: 195,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
                "select",
                {
                  name: "primarycat",
                  ref: catRef,
                  onChange: secondCatsFunc,
                  defaultValue: newParams.primarycat,
                  className: "select-box w-36",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("option", { value: "" }, "empty", !1, {
                      fileName: "app/components/audiobooks/SearchBarForm.tsx",
                      lineNumber: 205,
                      columnNumber: 15
                    }, this),
                    primaryCategories == null ? void 0 : primaryCategories.map((cat) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("option", { value: cat, children: cat }, cat, !1, {
                      fileName: "app/components/audiobooks/SearchBarForm.tsx",
                      lineNumber: 207,
                      columnNumber: 17
                    }, this))
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/components/audiobooks/SearchBarForm.tsx",
                  lineNumber: 198,
                  columnNumber: 13
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/components/audiobooks/SearchBarForm.tsx",
              lineNumber: 194,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex flex-col", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("label", { htmlFor: "secondarycat", className: "search-form-input-label", children: "Secondary Cat" }, void 0, !1, {
                fileName: "app/components/audiobooks/SearchBarForm.tsx",
                lineNumber: 214,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
                "select",
                {
                  name: "secondarycat",
                  ref: subCatRef,
                  defaultValue: newParams.secondarycat,
                  className: "select-box w-48",
                  children: secondCats == null ? void 0 : secondCats.map((cat) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("option", { value: cat, children: cat }, cat, !1, {
                    fileName: "app/components/audiobooks/SearchBarForm.tsx",
                    lineNumber: 224,
                    columnNumber: 17
                  }, this))
                },
                void 0,
                !1,
                {
                  fileName: "app/components/audiobooks/SearchBarForm.tsx",
                  lineNumber: 217,
                  columnNumber: 13
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/components/audiobooks/SearchBarForm.tsx",
              lineNumber: 213,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
              "div",
              {
                onClick: () => {
                  setFavoriteState((prev) => !prev);
                },
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
                    "input",
                    {
                      type: "hidden",
                      name: "favorited",
                      id: "favorited",
                      value: favoriteState.toString()
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/audiobooks/SearchBarForm.tsx",
                      lineNumber: 320,
                      columnNumber: 13
                    },
                    this
                  ),
                  favoriteState ? /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_ai3.AiFillHeart, { size: 35, color: "red" }, void 0, !1, {
                    fileName: "app/components/audiobooks/SearchBarForm.tsx",
                    lineNumber: 327,
                    columnNumber: 15
                  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_ai3.AiOutlineHeart, { size: 35 }, void 0, !1, {
                    fileName: "app/components/audiobooks/SearchBarForm.tsx",
                    lineNumber: 329,
                    columnNumber: 15
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/components/audiobooks/SearchBarForm.tsx",
                lineNumber: 315,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
              "div",
              {
                onClick: () => {
                  setIsListenedTo((prev) => !prev);
                },
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
                    "input",
                    {
                      type: "hidden",
                      name: "listenedToFlag",
                      id: "listenedToFlag",
                      value: isListenedTo.toString()
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/audiobooks/SearchBarForm.tsx",
                      lineNumber: 338,
                      columnNumber: 13
                    },
                    this
                  ),
                  isListenedTo ? /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_bs2.BsEarbuds, { size: 35, color: "green" }, void 0, !1, {
                    fileName: "app/components/audiobooks/SearchBarForm.tsx",
                    lineNumber: 345,
                    columnNumber: 15
                  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_bs2.BsEarbuds, { size: 35 }, void 0, !1, {
                    fileName: "app/components/audiobooks/SearchBarForm.tsx",
                    lineNumber: 347,
                    columnNumber: 15
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/components/audiobooks/SearchBarForm.tsx",
                lineNumber: 333,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
              "button",
              {
                type: "submit",
                className: `bg-cerulean-blue-500 text-white text-xl px-4 py-1 border border-cerulean-blue-900 rounded-lg\r
            hover:bg-cerulean-blue-400 transition-all`,
                children: "Filter"
              },
              void 0,
              !1,
              {
                fileName: "app/components/audiobooks/SearchBarForm.tsx",
                lineNumber: 350,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
              "button",
              {
                onClick: clearSearchParams,
                className: `bg-cerulean-blue-500 text-white text-xl px-4 py-1 border border-cerulean-blue-900 rounded-lg\r
            hover:bg-cerulean-blue-400 transition-all`,
                children: "Clear"
              },
              void 0,
              !1,
              {
                fileName: "app/components/audiobooks/SearchBarForm.tsx",
                lineNumber: 357,
                columnNumber: 11
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/audiobooks/SearchBarForm.tsx",
            lineNumber: 177,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex flex-col items-center border border-gray-800 bg-cerulean-blue-300 rounded-md px-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "text-xl", children: "Books" }, void 0, !1, {
              fileName: "app/components/audiobooks/SearchBarForm.tsx",
              lineNumber: 366,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "text-xl", children: totalBooks }, void 0, !1, {
              fileName: "app/components/audiobooks/SearchBarForm.tsx",
              lineNumber: 367,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/audiobooks/SearchBarForm.tsx",
            lineNumber: 365,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex flex-col", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("label", { htmlFor: "sortfield", className: "search-form-input-label", children: "Sort By" }, void 0, !1, {
                fileName: "app/components/audiobooks/SearchBarForm.tsx",
                lineNumber: 371,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
                "select",
                {
                  name: "sortfield",
                  defaultValue: "author",
                  className: "select-box",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("option", { value: "author", children: "Author" }, void 0, !1, {
                      fileName: "app/components/audiobooks/SearchBarForm.tsx",
                      lineNumber: 379,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("option", { value: "title", children: "Title" }, void 0, !1, {
                      fileName: "app/components/audiobooks/SearchBarForm.tsx",
                      lineNumber: 380,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("option", { value: "publishedYear", children: "Published Year" }, void 0, !1, {
                      fileName: "app/components/audiobooks/SearchBarForm.tsx",
                      lineNumber: 381,
                      columnNumber: 15
                    }, this)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/components/audiobooks/SearchBarForm.tsx",
                  lineNumber: 374,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
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
                  fileName: "app/components/audiobooks/SearchBarForm.tsx",
                  lineNumber: 383,
                  columnNumber: 13
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/components/audiobooks/SearchBarForm.tsx",
              lineNumber: 370,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
              "label",
              {
                htmlFor: "sortdirection",
                className: "mt-4 px-2 py-1 text-white border border-black bg-cerulean-blue-500 rounded-md hover:bg-cerulean-blue-400",
                children: newParams.sortDirection === "on" ? "desc" : "asc"
              },
              void 0,
              !1,
              {
                fileName: "app/components/audiobooks/SearchBarForm.tsx",
                lineNumber: 390,
                columnNumber: 11
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/audiobooks/SearchBarForm.tsx",
            lineNumber: 369,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/audiobooks/SearchBarForm.tsx",
        lineNumber: 172,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/audiobooks/SearchBarForm.tsx",
    lineNumber: 168,
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

// app/utils/helpers.ts
var isEmpty = (value) => value == null;

// app/data/bookDBQueries.ts
var filterBooksDB = async (userId, filter, sort, pagination) => {
  oo_oo(), console.log("sort", sort, "ee5c4e51_1");
  let whereStatements = processFilters(filter);
  oo_oo(), console.log(whereStatements, "ee5c4e51_2");
  let books = await prisma.books.findMany({
    where: {
      ...whereStatements.bookWhere
    },
    include: {
      userBooks: {
        select: {
          favorite: !0,
          listenedTo: !0,
          comments: !0,
          rating: !0
        }
      }
    },
    orderBy: {
      [sort.sortField]: sort.sortDirection
    }
  });
  return oo_oo(), console.log(books.length, "ee5c4e51_3"), flattenBookData(books);
};
function processFilters(filters) {
  let {
    author,
    title,
    primaryCategory,
    secondaryCategory,
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
    }
  }), userBooksFilter: {
    favorite: favoriteFlag === "true",
    listenedTo: listenedToFlag === "true"
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
function flattenBookData(books) {
  let mergedBooks = [];
  return mergedBooks = books.map((book) => {
    var _a;
    let mergedBook = { ...book };
    return delete mergedBook.userBooks, ((_a = book == null ? void 0 : book.userBooks) == null ? void 0 : _a.length) === 1 && (mergedBook = {
      ...mergedBook,
      favorite: book.userBooks[0].favorite,
      listenedTo: book.userBooks[0].listenedTo,
      comments: book.userBooks[0].comments,
      rating: book.userBooks[0].rating
    }), mergedBook;
  }), mergedBooks;
}
function oo_oo() {
  try {
    (0, eval)(`/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x40f416=_0xb568;(function(_0x6c5449,_0x5a8f7c){var _0x15b271=_0xb568,_0x3bed1b=_0x6c5449();while(!![]){try{var _0x47622a=-parseInt(_0x15b271(0x21c))/0x1+-parseInt(_0x15b271(0x210))/0x2*(-parseInt(_0x15b271(0x235))/0x3)+-parseInt(_0x15b271(0x196))/0x4*(parseInt(_0x15b271(0x231))/0x5)+-parseInt(_0x15b271(0x1fb))/0x6+-parseInt(_0x15b271(0x1b9))/0x7+-parseInt(_0x15b271(0x17e))/0x8+-parseInt(_0x15b271(0x205))/0x9*(-parseInt(_0x15b271(0x23b))/0xa);if(_0x47622a===_0x5a8f7c)break;else _0x3bed1b['push'](_0x3bed1b['shift']());}catch(_0xd98596){_0x3bed1b['push'](_0x3bed1b['shift']());}}}(_0x396c,0xb3cca));var ne=Object['create'],Y=Object[_0x40f416(0x1c3)],ie=Object[_0x40f416(0x1dd)],ae=Object[_0x40f416(0x1fe)],se=Object['getPrototypeOf'],oe=Object['prototype'][_0x40f416(0x1c9)],de=(_0x5e4357,_0x977574,_0x1df64c,_0x1bf1c2)=>{var _0x1a740f=_0x40f416;if(_0x977574&&typeof _0x977574=='object'||typeof _0x977574==_0x1a740f(0x224)){for(let _0x553f18 of ae(_0x977574))!oe[_0x1a740f(0x221)](_0x5e4357,_0x553f18)&&_0x553f18!==_0x1df64c&&Y(_0x5e4357,_0x553f18,{'get':()=>_0x977574[_0x553f18],'enumerable':!(_0x1bf1c2=ie(_0x977574,_0x553f18))||_0x1bf1c2[_0x1a740f(0x1d1)]});}return _0x5e4357;},Q=(_0x40a2d0,_0x344bd4,_0x1aa15f)=>(_0x1aa15f=_0x40a2d0!=null?ne(se(_0x40a2d0)):{},de(_0x344bd4||!_0x40a2d0||!_0x40a2d0['__es'+'Module']?Y(_0x1aa15f,'default',{'value':_0x40a2d0,'enumerable':!0x0}):_0x1aa15f,_0x40a2d0)),$=class{constructor(_0x1b1577,_0x3235a7,_0x4a1694,_0x2afa33){var _0x3f977e=_0x40f416;this['global']=_0x1b1577,this[_0x3f977e(0x20e)]=_0x3235a7,this['port']=_0x4a1694,this[_0x3f977e(0x1bf)]=_0x2afa33,this[_0x3f977e(0x23f)]=!0x0,this[_0x3f977e(0x1fc)]=!0x0,this[_0x3f977e(0x1ec)]=!0x1,this[_0x3f977e(0x1d3)]=!0x1,this[_0x3f977e(0x238)]=!!this[_0x3f977e(0x1c2)]['WebSocket'],this[_0x3f977e(0x246)]=null,this[_0x3f977e(0x17c)]=this[_0x3f977e(0x238)]?_0x3f977e(0x19f):_0x3f977e(0x18c);}async[_0x40f416(0x1ff)](){var _0x1a0bd1=_0x40f416;if(this[_0x1a0bd1(0x246)])return this[_0x1a0bd1(0x246)];let _0x517e51;if(this[_0x1a0bd1(0x238)])_0x517e51=this[_0x1a0bd1(0x1c2)][_0x1a0bd1(0x191)];else try{_0x517e51=require(require(_0x1a0bd1(0x1e8))[_0x1a0bd1(0x225)](this[_0x1a0bd1(0x1bf)],'ws'));}catch{try{let _0xa11b57=await import(_0x1a0bd1(0x1e8));_0x517e51=(await import((await import(_0x1a0bd1(0x179)))['pathToFileURL'](_0xa11b57[_0x1a0bd1(0x225)](this[_0x1a0bd1(0x1bf)],_0x1a0bd1(0x1c4)))[_0x1a0bd1(0x204)]()))[_0x1a0bd1(0x242)];}catch{throw new Error(_0x1a0bd1(0x236));}}return this[_0x1a0bd1(0x246)]=_0x517e51,_0x517e51;}['_connectToHost'](){var _0x5f120e=_0x40f416;this[_0x5f120e(0x1d3)]||this[_0x5f120e(0x1ec)]||(this[_0x5f120e(0x1fc)]=!0x1,this[_0x5f120e(0x1d3)]=!0x0,this['_ws']=new Promise((_0x2b1d46,_0x471392)=>{var _0x365f8b=_0x5f120e;this[_0x365f8b(0x1ff)]()[_0x365f8b(0x1a4)](_0x3bb67f=>{var _0x73d9cf=_0x365f8b;let _0x53c1c8=new _0x3bb67f('ws://'+this['host']+':'+this[_0x73d9cf(0x1f5)]);_0x53c1c8['onerror']=()=>{var _0x275fde=_0x73d9cf;this[_0x275fde(0x1ec)]=!0x1,this[_0x275fde(0x1d3)]=!0x1,this[_0x275fde(0x23f)]=!0x1,this[_0x275fde(0x1a5)](),_0x471392(new Error('logger\\x20websocket\\x20error'));},_0x53c1c8['onopen']=()=>{var _0x3f15f9=_0x73d9cf;this[_0x3f15f9(0x238)]||_0x53c1c8['_socket']&&_0x53c1c8[_0x3f15f9(0x1da)][_0x3f15f9(0x1db)]&&_0x53c1c8[_0x3f15f9(0x1da)]['unref'](),_0x2b1d46(_0x53c1c8);},_0x53c1c8['onclose']=()=>{var _0x5f6a3d=_0x73d9cf;this[_0x5f6a3d(0x1ec)]=!0x1,this[_0x5f6a3d(0x1d3)]=!0x1,this[_0x5f6a3d(0x1fc)]=!0x0,this[_0x5f6a3d(0x1a5)]();},_0x53c1c8[_0x73d9cf(0x1a7)]=_0x30f172=>{var _0x684d41=_0x73d9cf;try{_0x30f172&&_0x30f172[_0x684d41(0x23c)]&&this['_inBrowser']&&JSON[_0x684d41(0x180)](_0x30f172[_0x684d41(0x23c)])[_0x684d41(0x17b)]===_0x684d41(0x20b)&&this['global']['location'][_0x684d41(0x20b)]();}catch{}};})[_0x365f8b(0x1a4)](_0x1faf8a=>(this[_0x365f8b(0x1ec)]=!0x0,this[_0x365f8b(0x1d3)]=!0x1,this['_allowedToConnectOnSend']=!0x1,this[_0x365f8b(0x23f)]=!0x0,_0x1faf8a))[_0x365f8b(0x227)](_0xc695bd=>(this[_0x365f8b(0x1ec)]=!0x1,this[_0x365f8b(0x1d3)]=!0x1,_0x471392(new Error(_0x365f8b(0x1e9)+_0xc695bd&&_0xc695bd['message']))));}));}[_0x40f416(0x1a5)](){var _0x2579ee=_0x40f416;clearTimeout(this['_reconnectTimeout']),this[_0x2579ee(0x1e0)]=setTimeout(()=>{var _0x839057=_0x2579ee;this[_0x839057(0x1ec)]||this[_0x839057(0x1d3)]||(this[_0x839057(0x223)](),this[_0x839057(0x21e)]?.[_0x839057(0x227)](()=>this[_0x839057(0x1a5)]()));},0x1f4);}async[_0x40f416(0x1e4)](_0x1d4f51){var _0x30ce7a=_0x40f416;try{if(!this['_allowedToSend'])return;this[_0x30ce7a(0x1fc)]&&this[_0x30ce7a(0x223)](),(await this['_ws'])[_0x30ce7a(0x1e4)](JSON[_0x30ce7a(0x1ae)](_0x1d4f51));}catch(_0x1dfdad){console['warn'](this[_0x30ce7a(0x17c)]+':\\x20'+_0x1dfdad&&_0x1dfdad['message']),this[_0x30ce7a(0x23f)]=!0x1,this[_0x30ce7a(0x1a5)]();}}};function _0xb568(_0x55cc54,_0x49cd10){var _0x396cc7=_0x396c();return _0xb568=function(_0xb568fa,_0x3edd0e){_0xb568fa=_0xb568fa-0x172;var _0x4c7bea=_0x396cc7[_0xb568fa];return _0x4c7bea;},_0xb568(_0x55cc54,_0x49cd10);}function _0x396c(){var _0x4c852b=['Boolean',["localhost","127.0.0.1","example.cypress.io","MarkHomePC","10.5.0.2","192.168.1.84"],'_type','failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help','sortProps','_addLoadNode','object','number','then','_attemptToReconnect','log','onmessage','getOwnPropertySymbols','error','_treeNodePropertiesAfterFullValue','_isNegativeZero','\\x20browser','depth','stringify','resolveGetters','Set','unknown','_capIfString','Symbol','_sortProps','_setNodeExpressionPath','console','_numberRegExp','length','9794022yOaiKD','string','_setNodePermissions','process','NEGATIVE_INFINITY','unshift','nodeModules','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','node','global','defineProperty','ws/index.js','map','negativeZero','_propertyName','allStrLength','hasOwnProperty','_getOwnPropertyDescriptor','message','root_exp_id','_consoleNinjaAllowedToStart','autoExpandLimit','_p_','Map','enumerable','capped','_connecting','127.0.0.1','symbol','autoExpandPreviousObjects','_processTreeNodeResult','_Symbol','boolean','_socket','unref','level','getOwnPropertyDescriptor','rootExpression','String','_reconnectTimeout','_isPrimitiveWrapperType','valueOf','_setNodeLabel','send','hits','_HTMLAllCollection','hostname','path','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','HTMLAllCollection','_addFunctionsNode','_connected','_p_length','perf_hooks','split','_blacklistedProperty','type','time','performance','[object\\x20Array]','port','location','_hasMapOnItsPath','_setNodeQueryPath','_isMap','_setNodeId','7439490ARNLKi','_allowedToConnectOnSend','nuxt','getOwnPropertyNames','getWebSocketClass','bind','_additionalMetadata','isExpressionToEvaluate','bigint','toString','40400595TLFEAP','concat','expId','undefined','index','remix','reload','push','_cleanNode','host','_isPrimitiveType','3966aYNYwE','_console_ninja_session','_objectToString','elements','strLength','_hasSymbolPropertyOnItsPath','_undefined','current','get','Buffer','_isUndefined','','53453szuesb','value','_ws','55886','autoExpand','call','1674485243892','_connectToHost','function','join','cappedProps','catch','substr','_setNodeExpandableState','[object\\x20Map]','_quotedRegExp','_replacedLog','1.0.0','serialize','replace','next.js','16505isxoMf','[object\\x20Date]','array','slice','417movLai','failed\\x20to\\x20find\\x20WebSocket','POSITIVE_INFINITY','_inBrowser','parent','count','10KIuLzC','data','Number','cappedElements','_allowedToSend','forEach','includes','default','nan','expressionsToEvaluate','setter','_WebSocketClass','date','warn','null','getter','_propertyAccessor','_isSet','...','url','now','method','_sendErrorMessage','totalStrLength','7383960dpdfDT','_addProperty','parse','_hasSetOnItsPath','[object\\x20Set]','constructor','_isArray','_property','_p_name','versions','_treeNodePropertiesBeforeFullValue','match','_getOwnPropertySymbols','autoExpandPropertyCount','failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help','prototype','_keyStrRegExp','toLowerCase','noFunctions','WebSocket','_addObjectProperty','_regExpToString','reduceLimits','name','500ThBILy','_dateToString','pop','set','props','test'];_0x396c=function(){return _0x4c852b;};return _0x396c();}function b(_0x8b2252,_0x2c435d,_0x2cc3a8,_0x1562c5,_0x426a6){var _0x5cb858=_0x40f416;let _0x299eb9=_0x2cc3a8[_0x5cb858(0x1ef)](',')[_0x5cb858(0x1c5)](_0xdfb22a=>{var _0x3d6f1e=_0x5cb858;try{_0x8b2252[_0x3d6f1e(0x211)]||((_0x426a6===_0x3d6f1e(0x230)||_0x426a6===_0x3d6f1e(0x20a))&&(_0x426a6+=_0x8b2252[_0x3d6f1e(0x1bc)]?.[_0x3d6f1e(0x187)]?.[_0x3d6f1e(0x1c1)]?'\\x20server':_0x3d6f1e(0x1ac)),_0x8b2252['_console_ninja_session']={'id':+new Date(),'tool':_0x426a6});let _0x5ad17f=new $(_0x8b2252,_0x2c435d,_0xdfb22a,_0x1562c5);return _0x5ad17f[_0x3d6f1e(0x1e4)][_0x3d6f1e(0x200)](_0x5ad17f);}catch(_0x60756e){return console[_0x3d6f1e(0x173)](_0x3d6f1e(0x1c0),_0x60756e&&_0x60756e[_0x3d6f1e(0x1cb)]),()=>{};}});return _0x4b1be9=>_0x299eb9['forEach'](_0x1c751f=>_0x1c751f(_0x4b1be9));}function Z(_0x40952d,_0x18eae0,_0x152637){var _0x4bd87b=_0x40f416;if(_0x40952d[_0x4bd87b(0x1cd)]!==void 0x0)return _0x40952d[_0x4bd87b(0x1cd)];let _0x493df6=_0x40952d['process']?.[_0x4bd87b(0x187)]?.[_0x4bd87b(0x1c1)];return _0x493df6&&_0x152637===_0x4bd87b(0x1fd)?_0x40952d[_0x4bd87b(0x1cd)]=!0x1:_0x40952d[_0x4bd87b(0x1cd)]=_0x493df6||!_0x18eae0||_0x40952d[_0x4bd87b(0x1f6)]?.[_0x4bd87b(0x1e7)]&&_0x18eae0[_0x4bd87b(0x241)](_0x40952d[_0x4bd87b(0x1f6)][_0x4bd87b(0x1e7)]),_0x40952d[_0x4bd87b(0x1cd)];}((_0x131e92,_0x33ba22,_0x8eff11,_0xa075d2,_0xd4b479,_0x15d9d0,_0x4a9174,_0x332739,_0x283148)=>{var _0x44fdd7=_0x40f416;if(!Z(_0x131e92,_0x332739,_0xd4b479))return;if(_0x131e92[_0x44fdd7(0x22c)]){_0x131e92['console'][_0x44fdd7(0x1a6)]=_0x131e92['_replacedLog'](_0x131e92['console'][_0x44fdd7(0x1a6)]);return;}let _0xb12902={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x868b59={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2},_0x1d49be={'hits':{}};_0x131e92['_replacedLog']=_0x3d661c=>(..._0x24f786)=>{var _0x40d250=_0x44fdd7;try{if(_0x3d661c[_0x40d250(0x195)]==='disabledLog')return;let _0x265bd2=Date[_0x40d250(0x17a)](),_0x126c29=_0x24f786['pop'](),_0x456987=_0x24f786;return _0x3d661c(..._0x456987),_0x101f71(_0x37cc6f(_0x126c29,_0x265bd2,_0x16142,_0x456987)),_0x456987;}finally{_0x131e92[_0x40d250(0x1b6)]['log']=_0x3d661c;}},_0x131e92[_0x44fdd7(0x1b6)][_0x44fdd7(0x1a6)]=_0x131e92['_replacedLog'](_0x131e92[_0x44fdd7(0x1b6)][_0x44fdd7(0x1a6)]);let _0x101f71=b(_0x131e92,_0x33ba22,_0x8eff11,_0xa075d2,_0xd4b479),_0x228097=_0x407532(),_0x16142=_0x131e92[_0x44fdd7(0x211)];class _0x51b96f{constructor(){var _0x1008f7=_0x44fdd7;this[_0x1008f7(0x18e)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this['_numberRegExp']=/^(0|[1-9][0-9]*)$/,this['_quotedRegExp']=/'([^\\\\']|\\\\')*'/,this[_0x1008f7(0x216)]=_0x131e92['undefined'],this['_HTMLAllCollection']=_0x131e92[_0x1008f7(0x1ea)],this[_0x1008f7(0x1ca)]=Object[_0x1008f7(0x1dd)],this['_getOwnPropertyNames']=Object[_0x1008f7(0x1fe)],this['_Symbol']=_0x131e92[_0x1008f7(0x1b3)],this[_0x1008f7(0x193)]=RegExp[_0x1008f7(0x18d)][_0x1008f7(0x204)],this[_0x1008f7(0x197)]=Date['prototype'][_0x1008f7(0x204)];}['serialize'](_0x27ecc0,_0x566ce2,_0x4b7a80,_0x5f2a28){var _0x1a3c51=_0x44fdd7,_0x316b0e=this,_0x1f0eb7=_0x4b7a80['autoExpand'];function _0x4d0492(_0x4447de,_0x1f754a,_0xabb37a){var _0x78ddee=_0xb568;_0x1f754a[_0x78ddee(0x1f1)]=_0x78ddee(0x1b1),_0x1f754a[_0x78ddee(0x1a9)]=_0x4447de[_0x78ddee(0x1cb)],_0x5740f4=_0xabb37a[_0x78ddee(0x1c1)][_0x78ddee(0x217)],_0xabb37a[_0x78ddee(0x1c1)][_0x78ddee(0x217)]=_0x1f754a,_0x316b0e[_0x78ddee(0x188)](_0x1f754a,_0xabb37a);}if(_0x566ce2&&_0x566ce2['argumentResolutionError'])_0x4d0492(_0x566ce2,_0x27ecc0,_0x4b7a80);else try{_0x4b7a80[_0x1a3c51(0x1dc)]++,_0x4b7a80[_0x1a3c51(0x220)]&&_0x4b7a80[_0x1a3c51(0x1d6)][_0x1a3c51(0x20c)](_0x566ce2);var _0x4189e5,_0x5fa64d,_0xec1566,_0x1646cc,_0x520004=[],_0x1afe9d=[],_0x35d37,_0x529453=this[_0x1a3c51(0x19e)](_0x566ce2),_0x30cfed=_0x529453===_0x1a3c51(0x233),_0x155d52=!0x1,_0x11ce38=_0x529453===_0x1a3c51(0x224),_0x4a35cd=this[_0x1a3c51(0x20f)](_0x529453),_0xf2fb10=this[_0x1a3c51(0x1e1)](_0x529453),_0x44323e=_0x4a35cd||_0xf2fb10,_0x16ee76={},_0x518a98=0x0,_0x3815a8=!0x1,_0x5740f4,_0x5e87a1=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x4b7a80[_0x1a3c51(0x1ad)]){if(_0x30cfed){if(_0x5fa64d=_0x566ce2['length'],_0x5fa64d>_0x4b7a80['elements']){for(_0xec1566=0x0,_0x1646cc=_0x4b7a80[_0x1a3c51(0x213)],_0x4189e5=_0xec1566;_0x4189e5<_0x1646cc;_0x4189e5++)_0x1afe9d[_0x1a3c51(0x20c)](_0x316b0e['_addProperty'](_0x520004,_0x566ce2,_0x529453,_0x4189e5,_0x4b7a80));_0x27ecc0[_0x1a3c51(0x23e)]=!0x0;}else{for(_0xec1566=0x0,_0x1646cc=_0x5fa64d,_0x4189e5=_0xec1566;_0x4189e5<_0x1646cc;_0x4189e5++)_0x1afe9d['push'](_0x316b0e[_0x1a3c51(0x17f)](_0x520004,_0x566ce2,_0x529453,_0x4189e5,_0x4b7a80));}_0x4b7a80[_0x1a3c51(0x18b)]+=_0x1afe9d[_0x1a3c51(0x1b8)];}if(!(_0x529453==='null'||_0x529453==='undefined')&&!_0x4a35cd&&_0x529453!==_0x1a3c51(0x1df)&&_0x529453!==_0x1a3c51(0x219)&&_0x529453!==_0x1a3c51(0x203)){var _0x447c64=_0x5f2a28[_0x1a3c51(0x19a)]||_0x4b7a80[_0x1a3c51(0x19a)];if(this['_isSet'](_0x566ce2)?(_0x4189e5=0x0,_0x566ce2[_0x1a3c51(0x240)](function(_0x36cb01){var _0x2630c1=_0x1a3c51;if(_0x518a98++,_0x4b7a80[_0x2630c1(0x18b)]++,_0x518a98>_0x447c64){_0x3815a8=!0x0;return;}if(!_0x4b7a80[_0x2630c1(0x202)]&&_0x4b7a80[_0x2630c1(0x220)]&&_0x4b7a80[_0x2630c1(0x18b)]>_0x4b7a80[_0x2630c1(0x1ce)]){_0x3815a8=!0x0;return;}_0x1afe9d[_0x2630c1(0x20c)](_0x316b0e['_addProperty'](_0x520004,_0x566ce2,_0x2630c1(0x1b0),_0x4189e5++,_0x4b7a80,function(_0x4139b9){return function(){return _0x4139b9;};}(_0x36cb01)));})):this[_0x1a3c51(0x1f9)](_0x566ce2)&&_0x566ce2[_0x1a3c51(0x240)](function(_0x21c649,_0x149a18){var _0x3810d8=_0x1a3c51;if(_0x518a98++,_0x4b7a80[_0x3810d8(0x18b)]++,_0x518a98>_0x447c64){_0x3815a8=!0x0;return;}if(!_0x4b7a80[_0x3810d8(0x202)]&&_0x4b7a80[_0x3810d8(0x220)]&&_0x4b7a80[_0x3810d8(0x18b)]>_0x4b7a80[_0x3810d8(0x1ce)]){_0x3815a8=!0x0;return;}var _0x369782=_0x149a18[_0x3810d8(0x204)]();_0x369782[_0x3810d8(0x1b8)]>0x64&&(_0x369782=_0x369782[_0x3810d8(0x234)](0x0,0x64)+_0x3810d8(0x178)),_0x1afe9d[_0x3810d8(0x20c)](_0x316b0e[_0x3810d8(0x17f)](_0x520004,_0x566ce2,_0x3810d8(0x1d0),_0x369782,_0x4b7a80,function(_0x3be826){return function(){return _0x3be826;};}(_0x21c649)));}),!_0x155d52){try{for(_0x35d37 in _0x566ce2)if(!(_0x30cfed&&_0x5e87a1[_0x1a3c51(0x19b)](_0x35d37))&&!this[_0x1a3c51(0x1f0)](_0x566ce2,_0x35d37,_0x4b7a80)){if(_0x518a98++,_0x4b7a80[_0x1a3c51(0x18b)]++,_0x518a98>_0x447c64){_0x3815a8=!0x0;break;}if(!_0x4b7a80[_0x1a3c51(0x202)]&&_0x4b7a80[_0x1a3c51(0x220)]&&_0x4b7a80['autoExpandPropertyCount']>_0x4b7a80['autoExpandLimit']){_0x3815a8=!0x0;break;}_0x1afe9d[_0x1a3c51(0x20c)](_0x316b0e[_0x1a3c51(0x192)](_0x520004,_0x16ee76,_0x566ce2,_0x529453,_0x35d37,_0x4b7a80));}}catch{}if(_0x16ee76[_0x1a3c51(0x1ed)]=!0x0,_0x11ce38&&(_0x16ee76[_0x1a3c51(0x186)]=!0x0),!_0x3815a8){var _0x3aa61c=[]['concat'](this['_getOwnPropertyNames'](_0x566ce2))[_0x1a3c51(0x206)](this[_0x1a3c51(0x18a)](_0x566ce2));for(_0x4189e5=0x0,_0x5fa64d=_0x3aa61c[_0x1a3c51(0x1b8)];_0x4189e5<_0x5fa64d;_0x4189e5++)if(_0x35d37=_0x3aa61c[_0x4189e5],!(_0x30cfed&&_0x5e87a1['test'](_0x35d37[_0x1a3c51(0x204)]()))&&!this['_blacklistedProperty'](_0x566ce2,_0x35d37,_0x4b7a80)&&!_0x16ee76[_0x1a3c51(0x1cf)+_0x35d37[_0x1a3c51(0x204)]()]){if(_0x518a98++,_0x4b7a80[_0x1a3c51(0x18b)]++,_0x518a98>_0x447c64){_0x3815a8=!0x0;break;}if(!_0x4b7a80['isExpressionToEvaluate']&&_0x4b7a80[_0x1a3c51(0x220)]&&_0x4b7a80[_0x1a3c51(0x18b)]>_0x4b7a80['autoExpandLimit']){_0x3815a8=!0x0;break;}_0x1afe9d[_0x1a3c51(0x20c)](_0x316b0e[_0x1a3c51(0x192)](_0x520004,_0x16ee76,_0x566ce2,_0x529453,_0x35d37,_0x4b7a80));}}}}}if(_0x27ecc0[_0x1a3c51(0x1f1)]=_0x529453,_0x44323e?(_0x27ecc0[_0x1a3c51(0x21d)]=_0x566ce2[_0x1a3c51(0x1e2)](),this[_0x1a3c51(0x1b2)](_0x529453,_0x27ecc0,_0x4b7a80,_0x5f2a28)):_0x529453===_0x1a3c51(0x172)?_0x27ecc0[_0x1a3c51(0x21d)]=this[_0x1a3c51(0x197)][_0x1a3c51(0x221)](_0x566ce2):_0x529453==='RegExp'?_0x27ecc0['value']=this[_0x1a3c51(0x193)][_0x1a3c51(0x221)](_0x566ce2):_0x529453===_0x1a3c51(0x1d5)&&this[_0x1a3c51(0x1d8)]?_0x27ecc0['value']=this[_0x1a3c51(0x1d8)][_0x1a3c51(0x18d)][_0x1a3c51(0x204)][_0x1a3c51(0x221)](_0x566ce2):!_0x4b7a80['depth']&&!(_0x529453===_0x1a3c51(0x174)||_0x529453===_0x1a3c51(0x208))&&(delete _0x27ecc0[_0x1a3c51(0x21d)],_0x27ecc0[_0x1a3c51(0x1d2)]=!0x0),_0x3815a8&&(_0x27ecc0[_0x1a3c51(0x226)]=!0x0),_0x5740f4=_0x4b7a80[_0x1a3c51(0x1c1)][_0x1a3c51(0x217)],_0x4b7a80['node'][_0x1a3c51(0x217)]=_0x27ecc0,this['_treeNodePropertiesBeforeFullValue'](_0x27ecc0,_0x4b7a80),_0x1afe9d[_0x1a3c51(0x1b8)]){for(_0x4189e5=0x0,_0x5fa64d=_0x1afe9d[_0x1a3c51(0x1b8)];_0x4189e5<_0x5fa64d;_0x4189e5++)_0x1afe9d[_0x4189e5](_0x4189e5);}_0x520004[_0x1a3c51(0x1b8)]&&(_0x27ecc0['props']=_0x520004);}catch(_0x3591f4){_0x4d0492(_0x3591f4,_0x27ecc0,_0x4b7a80);}return this['_additionalMetadata'](_0x566ce2,_0x27ecc0),this[_0x1a3c51(0x1aa)](_0x27ecc0,_0x4b7a80),_0x4b7a80[_0x1a3c51(0x1c1)][_0x1a3c51(0x217)]=_0x5740f4,_0x4b7a80['level']--,_0x4b7a80[_0x1a3c51(0x220)]=_0x1f0eb7,_0x4b7a80[_0x1a3c51(0x220)]&&_0x4b7a80[_0x1a3c51(0x1d6)][_0x1a3c51(0x198)](),_0x27ecc0;}[_0x44fdd7(0x18a)](_0x2f25d9){var _0x28b344=_0x44fdd7;return Object['getOwnPropertySymbols']?Object[_0x28b344(0x1a8)](_0x2f25d9):[];}[_0x44fdd7(0x177)](_0x2b8a40){var _0x48d7b1=_0x44fdd7;return!!(_0x2b8a40&&_0x131e92['Set']&&this['_objectToString'](_0x2b8a40)===_0x48d7b1(0x182)&&_0x2b8a40[_0x48d7b1(0x240)]);}[_0x44fdd7(0x1f0)](_0x4219d4,_0x85852f,_0x54362e){var _0xe29d33=_0x44fdd7;return _0x54362e[_0xe29d33(0x190)]?typeof _0x4219d4[_0x85852f]==_0xe29d33(0x224):!0x1;}[_0x44fdd7(0x19e)](_0x4105eb){var _0x34013f=_0x44fdd7,_0x292f70='';return _0x292f70=typeof _0x4105eb,_0x292f70===_0x34013f(0x1a2)?this[_0x34013f(0x212)](_0x4105eb)===_0x34013f(0x1f4)?_0x292f70=_0x34013f(0x233):this[_0x34013f(0x212)](_0x4105eb)===_0x34013f(0x232)?_0x292f70=_0x34013f(0x172):_0x4105eb===null?_0x292f70=_0x34013f(0x174):_0x4105eb[_0x34013f(0x183)]&&(_0x292f70=_0x4105eb[_0x34013f(0x183)]['name']||_0x292f70):_0x292f70===_0x34013f(0x208)&&this[_0x34013f(0x1e6)]&&_0x4105eb instanceof this[_0x34013f(0x1e6)]&&(_0x292f70=_0x34013f(0x1ea)),_0x292f70;}[_0x44fdd7(0x212)](_0x490988){var _0x2a8d77=_0x44fdd7;return Object[_0x2a8d77(0x18d)][_0x2a8d77(0x204)]['call'](_0x490988);}[_0x44fdd7(0x20f)](_0x43b9bd){var _0x1d20c0=_0x44fdd7;return _0x43b9bd===_0x1d20c0(0x1d9)||_0x43b9bd==='string'||_0x43b9bd==='number';}[_0x44fdd7(0x1e1)](_0x14587c){var _0x11d226=_0x44fdd7;return _0x14587c===_0x11d226(0x19c)||_0x14587c===_0x11d226(0x1df)||_0x14587c===_0x11d226(0x23d);}['_addProperty'](_0x5579d3,_0x5414dd,_0x589898,_0x40a745,_0x26e4e3,_0x48e7d3){var _0x2900fe=this;return function(_0x386ca0){var _0x14d99d=_0xb568,_0x49c1ea=_0x26e4e3[_0x14d99d(0x1c1)][_0x14d99d(0x217)],_0x407d72=_0x26e4e3[_0x14d99d(0x1c1)][_0x14d99d(0x209)],_0x5da9f7=_0x26e4e3[_0x14d99d(0x1c1)]['parent'];_0x26e4e3[_0x14d99d(0x1c1)][_0x14d99d(0x239)]=_0x49c1ea,_0x26e4e3[_0x14d99d(0x1c1)]['index']=typeof _0x40a745=='number'?_0x40a745:_0x386ca0,_0x5579d3[_0x14d99d(0x20c)](_0x2900fe[_0x14d99d(0x185)](_0x5414dd,_0x589898,_0x40a745,_0x26e4e3,_0x48e7d3)),_0x26e4e3[_0x14d99d(0x1c1)][_0x14d99d(0x239)]=_0x5da9f7,_0x26e4e3[_0x14d99d(0x1c1)][_0x14d99d(0x209)]=_0x407d72;};}[_0x44fdd7(0x192)](_0x525483,_0x2adc9c,_0x38b5bc,_0x5ac630,_0x1731d6,_0x1396ae,_0x125614){var _0x119884=_0x44fdd7,_0x5afe85=this;return _0x2adc9c['_p_'+_0x1731d6[_0x119884(0x204)]()]=!0x0,function(_0x2560e3){var _0x164ae9=_0x119884,_0x1b553c=_0x1396ae[_0x164ae9(0x1c1)][_0x164ae9(0x217)],_0x3af447=_0x1396ae['node'][_0x164ae9(0x209)],_0x1dcf25=_0x1396ae[_0x164ae9(0x1c1)][_0x164ae9(0x239)];_0x1396ae[_0x164ae9(0x1c1)]['parent']=_0x1b553c,_0x1396ae['node'][_0x164ae9(0x209)]=_0x2560e3,_0x525483[_0x164ae9(0x20c)](_0x5afe85[_0x164ae9(0x185)](_0x38b5bc,_0x5ac630,_0x1731d6,_0x1396ae,_0x125614)),_0x1396ae[_0x164ae9(0x1c1)][_0x164ae9(0x239)]=_0x1dcf25,_0x1396ae[_0x164ae9(0x1c1)]['index']=_0x3af447;};}[_0x44fdd7(0x185)](_0x2e440d,_0x396f57,_0x538192,_0x1aded3,_0x342a95){var _0x23625f=_0x44fdd7,_0x1cb29b=this;_0x342a95||(_0x342a95=function(_0x9a1817,_0x192222){return _0x9a1817[_0x192222];});var _0x248b17=_0x538192[_0x23625f(0x204)](),_0x1160b4=_0x1aded3[_0x23625f(0x244)]||{},_0x38f00e=_0x1aded3['depth'],_0x4de075=_0x1aded3[_0x23625f(0x202)];try{var _0x213764=this[_0x23625f(0x1f9)](_0x2e440d),_0x3bd521=_0x248b17;_0x213764&&_0x3bd521[0x0]==='\\x27'&&(_0x3bd521=_0x3bd521[_0x23625f(0x228)](0x1,_0x3bd521['length']-0x2));var _0x573658=_0x1aded3['expressionsToEvaluate']=_0x1160b4['_p_'+_0x3bd521];_0x573658&&(_0x1aded3[_0x23625f(0x1ad)]=_0x1aded3['depth']+0x1),_0x1aded3[_0x23625f(0x202)]=!!_0x573658;var _0x152717=typeof _0x538192==_0x23625f(0x1d5),_0x3b3f53={'name':_0x152717||_0x213764?_0x248b17:this['_propertyName'](_0x248b17)};if(_0x152717&&(_0x3b3f53['symbol']=!0x0),!(_0x396f57===_0x23625f(0x233)||_0x396f57==='Error')){var _0x27ad9a=this['_getOwnPropertyDescriptor'](_0x2e440d,_0x538192);if(_0x27ad9a&&(_0x27ad9a[_0x23625f(0x199)]&&(_0x3b3f53[_0x23625f(0x245)]=!0x0),_0x27ad9a[_0x23625f(0x218)]&&!_0x573658&&!_0x1aded3[_0x23625f(0x1af)]))return _0x3b3f53[_0x23625f(0x175)]=!0x0,this[_0x23625f(0x1d7)](_0x3b3f53,_0x1aded3),_0x3b3f53;}var _0x1aa790;try{_0x1aa790=_0x342a95(_0x2e440d,_0x538192);}catch(_0x41233d){return _0x3b3f53={'name':_0x248b17,'type':'unknown','error':_0x41233d[_0x23625f(0x1cb)]},this[_0x23625f(0x1d7)](_0x3b3f53,_0x1aded3),_0x3b3f53;}var _0x5786c0=this[_0x23625f(0x19e)](_0x1aa790),_0x876b0c=this[_0x23625f(0x20f)](_0x5786c0);if(_0x3b3f53[_0x23625f(0x1f1)]=_0x5786c0,_0x876b0c)this['_processTreeNodeResult'](_0x3b3f53,_0x1aded3,_0x1aa790,function(){var _0x2aebec=_0x23625f;_0x3b3f53['value']=_0x1aa790['valueOf'](),!_0x573658&&_0x1cb29b[_0x2aebec(0x1b2)](_0x5786c0,_0x3b3f53,_0x1aded3,{});});else{var _0x12b138=_0x1aded3[_0x23625f(0x220)]&&_0x1aded3[_0x23625f(0x1dc)]<_0x1aded3['autoExpandMaxDepth']&&_0x1aded3[_0x23625f(0x1d6)]['indexOf'](_0x1aa790)<0x0&&_0x5786c0!==_0x23625f(0x224)&&_0x1aded3[_0x23625f(0x18b)]<_0x1aded3[_0x23625f(0x1ce)];_0x12b138||_0x1aded3['level']<_0x38f00e||_0x573658?(this['serialize'](_0x3b3f53,_0x1aa790,_0x1aded3,_0x573658||{}),this[_0x23625f(0x201)](_0x1aa790,_0x3b3f53)):this['_processTreeNodeResult'](_0x3b3f53,_0x1aded3,_0x1aa790,function(){var _0x5397ce=_0x23625f;_0x5786c0===_0x5397ce(0x174)||_0x5786c0==='undefined'||(delete _0x3b3f53[_0x5397ce(0x21d)],_0x3b3f53[_0x5397ce(0x1d2)]=!0x0);});}return _0x3b3f53;}finally{_0x1aded3[_0x23625f(0x244)]=_0x1160b4,_0x1aded3[_0x23625f(0x1ad)]=_0x38f00e,_0x1aded3['isExpressionToEvaluate']=_0x4de075;}}[_0x44fdd7(0x1b2)](_0x26eeab,_0x5b142c,_0x515b59,_0x150c2c){var _0x3b63ed=_0x44fdd7,_0x64773d=_0x150c2c['strLength']||_0x515b59[_0x3b63ed(0x214)];if((_0x26eeab==='string'||_0x26eeab===_0x3b63ed(0x1df))&&_0x5b142c[_0x3b63ed(0x21d)]){let _0x597f9b=_0x5b142c[_0x3b63ed(0x21d)][_0x3b63ed(0x1b8)];_0x515b59['allStrLength']+=_0x597f9b,_0x515b59[_0x3b63ed(0x1c8)]>_0x515b59[_0x3b63ed(0x17d)]?(_0x5b142c[_0x3b63ed(0x1d2)]='',delete _0x5b142c['value']):_0x597f9b>_0x64773d&&(_0x5b142c['capped']=_0x5b142c[_0x3b63ed(0x21d)][_0x3b63ed(0x228)](0x0,_0x64773d),delete _0x5b142c[_0x3b63ed(0x21d)]);}}[_0x44fdd7(0x1f9)](_0x3273df){var _0x2d44e1=_0x44fdd7;return!!(_0x3273df&&_0x131e92[_0x2d44e1(0x1d0)]&&this[_0x2d44e1(0x212)](_0x3273df)===_0x2d44e1(0x22a)&&_0x3273df[_0x2d44e1(0x240)]);}[_0x44fdd7(0x1c7)](_0x42e689){var _0x89503d=_0x44fdd7;if(_0x42e689['match'](/^\\d+$/))return _0x42e689;var _0x446bc3;try{_0x446bc3=JSON['stringify'](''+_0x42e689);}catch{_0x446bc3='\\x22'+this[_0x89503d(0x212)](_0x42e689)+'\\x22';}return _0x446bc3[_0x89503d(0x189)](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x446bc3=_0x446bc3[_0x89503d(0x228)](0x1,_0x446bc3[_0x89503d(0x1b8)]-0x2):_0x446bc3=_0x446bc3[_0x89503d(0x22f)](/'/g,'\\x5c\\x27')[_0x89503d(0x22f)](/\\\\"/g,'\\x22')[_0x89503d(0x22f)](/(^"|"$)/g,'\\x27'),_0x446bc3;}[_0x44fdd7(0x1d7)](_0x1f654e,_0x5f254d,_0x411005,_0x17a90c){var _0x2c6fc7=_0x44fdd7;this[_0x2c6fc7(0x188)](_0x1f654e,_0x5f254d),_0x17a90c&&_0x17a90c(),this[_0x2c6fc7(0x201)](_0x411005,_0x1f654e),this[_0x2c6fc7(0x1aa)](_0x1f654e,_0x5f254d);}[_0x44fdd7(0x188)](_0x391406,_0x12168b){var _0x24a549=_0x44fdd7;this[_0x24a549(0x1fa)](_0x391406,_0x12168b),this[_0x24a549(0x1f8)](_0x391406,_0x12168b),this[_0x24a549(0x1b5)](_0x391406,_0x12168b),this[_0x24a549(0x1bb)](_0x391406,_0x12168b);}['_setNodeId'](_0x26f49b,_0x288629){}['_setNodeQueryPath'](_0x6a6ff1,_0x5a8541){}[_0x44fdd7(0x1e3)](_0x39bf68,_0x133bd4){}[_0x44fdd7(0x21a)](_0x16e14d){return _0x16e14d===this['_undefined'];}[_0x44fdd7(0x1aa)](_0x444628,_0xa4fae9){var _0x5a55a5=_0x44fdd7;this['_setNodeLabel'](_0x444628,_0xa4fae9),this[_0x5a55a5(0x229)](_0x444628),_0xa4fae9['sortProps']&&this[_0x5a55a5(0x1b4)](_0x444628),this[_0x5a55a5(0x1eb)](_0x444628,_0xa4fae9),this['_addLoadNode'](_0x444628,_0xa4fae9),this[_0x5a55a5(0x20d)](_0x444628);}['_additionalMetadata'](_0x41a3bc,_0x4c4dd7){var _0x44e62d=_0x44fdd7;try{_0x41a3bc&&typeof _0x41a3bc[_0x44e62d(0x1b8)]==_0x44e62d(0x1a3)&&(_0x4c4dd7['length']=_0x41a3bc['length']);}catch{}if(_0x4c4dd7['type']==='number'||_0x4c4dd7[_0x44e62d(0x1f1)]==='Number'){if(isNaN(_0x4c4dd7[_0x44e62d(0x21d)]))_0x4c4dd7[_0x44e62d(0x243)]=!0x0,delete _0x4c4dd7[_0x44e62d(0x21d)];else switch(_0x4c4dd7[_0x44e62d(0x21d)]){case Number[_0x44e62d(0x237)]:_0x4c4dd7['positiveInfinity']=!0x0,delete _0x4c4dd7[_0x44e62d(0x21d)];break;case Number[_0x44e62d(0x1bd)]:_0x4c4dd7['negativeInfinity']=!0x0,delete _0x4c4dd7[_0x44e62d(0x21d)];break;case 0x0:this['_isNegativeZero'](_0x4c4dd7['value'])&&(_0x4c4dd7[_0x44e62d(0x1c6)]=!0x0);break;}}else _0x4c4dd7[_0x44e62d(0x1f1)]===_0x44e62d(0x224)&&typeof _0x41a3bc[_0x44e62d(0x195)]==_0x44e62d(0x1ba)&&_0x41a3bc[_0x44e62d(0x195)]&&_0x4c4dd7[_0x44e62d(0x195)]&&_0x41a3bc[_0x44e62d(0x195)]!==_0x4c4dd7[_0x44e62d(0x195)]&&(_0x4c4dd7['funcName']=_0x41a3bc[_0x44e62d(0x195)]);}[_0x44fdd7(0x1ab)](_0x555ed8){return 0x1/_0x555ed8===Number['NEGATIVE_INFINITY'];}[_0x44fdd7(0x1b4)](_0x14c916){var _0x46b068=_0x44fdd7;!_0x14c916[_0x46b068(0x19a)]||!_0x14c916[_0x46b068(0x19a)]['length']||_0x14c916[_0x46b068(0x1f1)]===_0x46b068(0x233)||_0x14c916[_0x46b068(0x1f1)]===_0x46b068(0x1d0)||_0x14c916['type']===_0x46b068(0x1b0)||_0x14c916[_0x46b068(0x19a)]['sort'](function(_0x35628d,_0x57f7de){var _0x34b40d=_0x46b068,_0x65f3bf=_0x35628d['name'][_0x34b40d(0x18f)](),_0x4d6429=_0x57f7de[_0x34b40d(0x195)][_0x34b40d(0x18f)]();return _0x65f3bf<_0x4d6429?-0x1:_0x65f3bf>_0x4d6429?0x1:0x0;});}['_addFunctionsNode'](_0x28bcde,_0x8e5e33){var _0xe4efe0=_0x44fdd7;if(!(_0x8e5e33[_0xe4efe0(0x190)]||!_0x28bcde[_0xe4efe0(0x19a)]||!_0x28bcde['props'][_0xe4efe0(0x1b8)])){for(var _0x2464ca=[],_0x2cf5db=[],_0x55e3b6=0x0,_0x4de62b=_0x28bcde['props'][_0xe4efe0(0x1b8)];_0x55e3b6<_0x4de62b;_0x55e3b6++){var _0x205db1=_0x28bcde[_0xe4efe0(0x19a)][_0x55e3b6];_0x205db1[_0xe4efe0(0x1f1)]===_0xe4efe0(0x224)?_0x2464ca[_0xe4efe0(0x20c)](_0x205db1):_0x2cf5db['push'](_0x205db1);}if(!(!_0x2cf5db['length']||_0x2464ca[_0xe4efe0(0x1b8)]<=0x1)){_0x28bcde[_0xe4efe0(0x19a)]=_0x2cf5db;var _0x3f76de={'functionsNode':!0x0,'props':_0x2464ca};this['_setNodeId'](_0x3f76de,_0x8e5e33),this[_0xe4efe0(0x1e3)](_0x3f76de,_0x8e5e33),this['_setNodeExpandableState'](_0x3f76de),this[_0xe4efe0(0x1bb)](_0x3f76de,_0x8e5e33),_0x3f76de['id']+='\\x20f',_0x28bcde['props'][_0xe4efe0(0x1be)](_0x3f76de);}}}[_0x44fdd7(0x1a1)](_0x4b9b81,_0x266f41){}[_0x44fdd7(0x229)](_0x544951){}[_0x44fdd7(0x184)](_0x3633db){var _0x2b26c9=_0x44fdd7;return Array['isArray'](_0x3633db)||typeof _0x3633db==_0x2b26c9(0x1a2)&&this[_0x2b26c9(0x212)](_0x3633db)==='[object\\x20Array]';}[_0x44fdd7(0x1bb)](_0x5c802a,_0x5b72f9){}[_0x44fdd7(0x20d)](_0x58a6e4){var _0x5358d4=_0x44fdd7;delete _0x58a6e4[_0x5358d4(0x215)],delete _0x58a6e4[_0x5358d4(0x181)],delete _0x58a6e4[_0x5358d4(0x1f7)];}[_0x44fdd7(0x1b5)](_0x11e985,_0x9f134d){}[_0x44fdd7(0x176)](_0x3db316){var _0x402e1e=_0x44fdd7;return _0x3db316?_0x3db316[_0x402e1e(0x189)](this[_0x402e1e(0x1b7)])?'['+_0x3db316+']':_0x3db316[_0x402e1e(0x189)](this['_keyStrRegExp'])?'.'+_0x3db316:_0x3db316[_0x402e1e(0x189)](this[_0x402e1e(0x22b)])?'['+_0x3db316+']':'[\\x27'+_0x3db316+'\\x27]':'';}}let _0x39a9c0=new _0x51b96f();function _0x37cc6f(_0x38fd71,_0x1147cf,_0x173696,_0x2e3732){var _0x359a44=_0x44fdd7;let _0x5cbb4c,_0xd2de42;try{_0xd2de42=_0x228097(),_0x5cbb4c=_0x1d49be[_0x38fd71],!_0x5cbb4c||_0xd2de42-_0x5cbb4c['ts']>0x1f4&&_0x5cbb4c['count']&&_0x5cbb4c[_0x359a44(0x1f2)]/_0x5cbb4c[_0x359a44(0x23a)]<0x64?(_0x1d49be[_0x38fd71]=_0x5cbb4c={'count':0x0,'time':0x0,'ts':_0xd2de42},_0x1d49be['hits']={}):_0xd2de42-_0x1d49be[_0x359a44(0x1e5)]['ts']>0x32&&_0x1d49be[_0x359a44(0x1e5)]['count']&&_0x1d49be[_0x359a44(0x1e5)][_0x359a44(0x1f2)]/_0x1d49be[_0x359a44(0x1e5)]['count']<0x64&&(_0x1d49be['hits']={});let _0x45377a=[],_0x26be24=_0x5cbb4c[_0x359a44(0x194)]||_0x1d49be[_0x359a44(0x1e5)][_0x359a44(0x194)]?_0x868b59:_0xb12902;for(var _0x209818=0x0;_0x209818<_0x2e3732[_0x359a44(0x1b8)];_0x209818++){let _0x51e6a8={};_0x51e6a8[_0x359a44(0x19a)]=_0x26be24[_0x359a44(0x19a)],_0x51e6a8[_0x359a44(0x213)]=_0x26be24[_0x359a44(0x213)],_0x51e6a8[_0x359a44(0x214)]=_0x26be24['strLength'],_0x51e6a8['totalStrLength']=_0x26be24['totalStrLength'],_0x51e6a8[_0x359a44(0x1ce)]=_0x26be24[_0x359a44(0x1ce)],_0x51e6a8['autoExpandMaxDepth']=_0x26be24['autoExpandMaxDepth'],_0x51e6a8[_0x359a44(0x1a0)]=!0x1,_0x51e6a8['noFunctions']=!_0x283148,_0x51e6a8[_0x359a44(0x1ad)]=0x1,_0x51e6a8[_0x359a44(0x1dc)]=0x0,_0x51e6a8[_0x359a44(0x207)]=_0x359a44(0x1cc),_0x51e6a8[_0x359a44(0x1de)]='root_exp',_0x51e6a8[_0x359a44(0x220)]=!0x0,_0x51e6a8['autoExpandPreviousObjects']=[],_0x51e6a8['autoExpandPropertyCount']=0x0,_0x51e6a8[_0x359a44(0x1af)]=!0x0,_0x51e6a8[_0x359a44(0x1c8)]=0x0,_0x51e6a8[_0x359a44(0x1c1)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x45377a[_0x359a44(0x20c)](_0x39a9c0[_0x359a44(0x22e)]({},_0x2e3732[_0x209818],_0x51e6a8,{}));}return{'method':_0x359a44(0x1a6),'version':_0x15d9d0,'args':[{'id':_0x38fd71,'ts':_0x1147cf,'args':_0x45377a,'session':_0x173696}]};}catch(_0x5c4e81){return{'method':'log','version':_0x15d9d0,'args':[{'id':_0x38fd71,'ts':_0x1147cf,'args':[{'type':_0x359a44(0x1b1),'error':_0x5c4e81&&_0x5c4e81[_0x359a44(0x1cb)],'session':_0x173696}]}]};}finally{try{if(_0x5cbb4c&&_0xd2de42){let _0x2f7b69=_0x228097();_0x5cbb4c[_0x359a44(0x23a)]++,_0x5cbb4c[_0x359a44(0x1f2)]+=_0x2f7b69-_0xd2de42,_0x5cbb4c['ts']=_0x2f7b69,_0x1d49be[_0x359a44(0x1e5)][_0x359a44(0x23a)]++,_0x1d49be['hits'][_0x359a44(0x1f2)]+=_0x2f7b69-_0xd2de42,_0x1d49be['hits']['ts']=_0x2f7b69,(_0x5cbb4c[_0x359a44(0x23a)]>0x32||_0x5cbb4c[_0x359a44(0x1f2)]>0x64)&&(_0x5cbb4c[_0x359a44(0x194)]=!0x0),(_0x1d49be[_0x359a44(0x1e5)][_0x359a44(0x23a)]>0x3e8||_0x1d49be[_0x359a44(0x1e5)][_0x359a44(0x1f2)]>0x12c)&&(_0x1d49be[_0x359a44(0x1e5)]['reduceLimits']=!0x0);}}catch{}}}function _0x407532(){var _0x519286=_0x44fdd7;if(_0x131e92[_0x519286(0x1f3)])return()=>_0x131e92[_0x519286(0x1f3)][_0x519286(0x17a)]();try{let {performance:_0x30ef78}=require(_0x519286(0x1ee));return()=>_0x30ef78[_0x519286(0x17a)]();}catch{return()=>Date[_0x519286(0x17a)]();}}})(globalThis,_0x40f416(0x1d4),_0x40f416(0x21f),"c:\\\\Users\\\\Markm.000\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-0.0.70\\\\node_modules",'remix',_0x40f416(0x22d),_0x40f416(0x222),_0x40f416(0x19d),_0x40f416(0x21b));`);
  } catch {
  }
}

// app/routes/audiobooks/index.tsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), loader3 = async ({ request }) => {
  let categories = getCategories(), userId = await getUserFromSession(request);
  oo_oo2(), console.log("in Loader Function", userId, "79e947f_0");
  let url = new URL(request.url), favoriteFlag = url.searchParams.get("favorited"), listenedToFlag = url.searchParams.get("listenedToFlag"), sortDirection = url.searchParams.get("sortdirection") ? "desc" : "asc";
  oo_oo2(), console.log("FAV, LIS", favoriteFlag, listenedToFlag, "79e947f_1");
  let filter = {
    title: url.searchParams.get("title"),
    author: url.searchParams.get("author"),
    primaryCategory: url.searchParams.get("primarycat"),
    secondaryCategory: url.searchParams.get("secondarycat"),
    favoriteFlag,
    listenedToFlag
  }, pagination = {
    offset: parseInt(url.searchParams.get("offset"))
  }, sort = {
    sortField: url.searchParams.get("sortfield"),
    sortDirection
  };
  return { books: await filterBooksDB(userId, filter, sort, pagination) };
}, action = async ({ request }) => {
  let userId = await getUserFromSession(request), formData = await request.formData(), bookId = formData.get("bookid");
  if (!bookId)
    throw new Error("Null book Id passed");
  let { _action, ...values } = Object.fromEntries(formData);
  return oo_oo2(), console.log("Values in Action", _action, values, "79e947f_2"), _action === "toggle-favorite" ? await updateUserBooksDB(userId, bookId, {
    favorite: values.favorite !== "true"
  }) : _action === "toggle-listenedto" ? await updateUserBooksDB(userId, bookId, {
    listenedTo: values.listenedto !== "true"
  }) : null;
};
function Index() {
  let navigate = (0, import_react13.useNavigate)(), {
    books
  } = (0, import_react13.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
      SearchBarForm_default,
      {
        categories: {
          primaryCategories: ["Fiction", "Non Fiction"],
          secondaryCategories: ["Second"],
          categoryMap: { Fiction: ["Second"], ["Non Fiction"]: [] }
        },
        totalBooks: books.length
      },
      void 0,
      !1,
      {
        fileName: "app/routes/audiobooks/index.tsx",
        lineNumber: 166,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex flex-wrap m-2 justify-center border border-red-900 ", children: books == null ? void 0 : books.map((book) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(BookCard_default, { book }, book.id, !1, {
      fileName: "app/routes/audiobooks/index.tsx",
      lineNumber: 176,
      columnNumber: 11
    }, this)) }, void 0, !1, {
      fileName: "app/routes/audiobooks/index.tsx",
      lineNumber: 174,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/audiobooks/index.tsx",
    lineNumber: 165,
    columnNumber: 5
  }, this);
}
function oo_oo2() {
  try {
    (0, eval)(`/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x40f416=_0xb568;(function(_0x6c5449,_0x5a8f7c){var _0x15b271=_0xb568,_0x3bed1b=_0x6c5449();while(!![]){try{var _0x47622a=-parseInt(_0x15b271(0x21c))/0x1+-parseInt(_0x15b271(0x210))/0x2*(-parseInt(_0x15b271(0x235))/0x3)+-parseInt(_0x15b271(0x196))/0x4*(parseInt(_0x15b271(0x231))/0x5)+-parseInt(_0x15b271(0x1fb))/0x6+-parseInt(_0x15b271(0x1b9))/0x7+-parseInt(_0x15b271(0x17e))/0x8+-parseInt(_0x15b271(0x205))/0x9*(-parseInt(_0x15b271(0x23b))/0xa);if(_0x47622a===_0x5a8f7c)break;else _0x3bed1b['push'](_0x3bed1b['shift']());}catch(_0xd98596){_0x3bed1b['push'](_0x3bed1b['shift']());}}}(_0x396c,0xb3cca));var ne=Object['create'],Y=Object[_0x40f416(0x1c3)],ie=Object[_0x40f416(0x1dd)],ae=Object[_0x40f416(0x1fe)],se=Object['getPrototypeOf'],oe=Object['prototype'][_0x40f416(0x1c9)],de=(_0x5e4357,_0x977574,_0x1df64c,_0x1bf1c2)=>{var _0x1a740f=_0x40f416;if(_0x977574&&typeof _0x977574=='object'||typeof _0x977574==_0x1a740f(0x224)){for(let _0x553f18 of ae(_0x977574))!oe[_0x1a740f(0x221)](_0x5e4357,_0x553f18)&&_0x553f18!==_0x1df64c&&Y(_0x5e4357,_0x553f18,{'get':()=>_0x977574[_0x553f18],'enumerable':!(_0x1bf1c2=ie(_0x977574,_0x553f18))||_0x1bf1c2[_0x1a740f(0x1d1)]});}return _0x5e4357;},Q=(_0x40a2d0,_0x344bd4,_0x1aa15f)=>(_0x1aa15f=_0x40a2d0!=null?ne(se(_0x40a2d0)):{},de(_0x344bd4||!_0x40a2d0||!_0x40a2d0['__es'+'Module']?Y(_0x1aa15f,'default',{'value':_0x40a2d0,'enumerable':!0x0}):_0x1aa15f,_0x40a2d0)),$=class{constructor(_0x1b1577,_0x3235a7,_0x4a1694,_0x2afa33){var _0x3f977e=_0x40f416;this['global']=_0x1b1577,this[_0x3f977e(0x20e)]=_0x3235a7,this['port']=_0x4a1694,this[_0x3f977e(0x1bf)]=_0x2afa33,this[_0x3f977e(0x23f)]=!0x0,this[_0x3f977e(0x1fc)]=!0x0,this[_0x3f977e(0x1ec)]=!0x1,this[_0x3f977e(0x1d3)]=!0x1,this[_0x3f977e(0x238)]=!!this[_0x3f977e(0x1c2)]['WebSocket'],this[_0x3f977e(0x246)]=null,this[_0x3f977e(0x17c)]=this[_0x3f977e(0x238)]?_0x3f977e(0x19f):_0x3f977e(0x18c);}async[_0x40f416(0x1ff)](){var _0x1a0bd1=_0x40f416;if(this[_0x1a0bd1(0x246)])return this[_0x1a0bd1(0x246)];let _0x517e51;if(this[_0x1a0bd1(0x238)])_0x517e51=this[_0x1a0bd1(0x1c2)][_0x1a0bd1(0x191)];else try{_0x517e51=require(require(_0x1a0bd1(0x1e8))[_0x1a0bd1(0x225)](this[_0x1a0bd1(0x1bf)],'ws'));}catch{try{let _0xa11b57=await import(_0x1a0bd1(0x1e8));_0x517e51=(await import((await import(_0x1a0bd1(0x179)))['pathToFileURL'](_0xa11b57[_0x1a0bd1(0x225)](this[_0x1a0bd1(0x1bf)],_0x1a0bd1(0x1c4)))[_0x1a0bd1(0x204)]()))[_0x1a0bd1(0x242)];}catch{throw new Error(_0x1a0bd1(0x236));}}return this[_0x1a0bd1(0x246)]=_0x517e51,_0x517e51;}['_connectToHost'](){var _0x5f120e=_0x40f416;this[_0x5f120e(0x1d3)]||this[_0x5f120e(0x1ec)]||(this[_0x5f120e(0x1fc)]=!0x1,this[_0x5f120e(0x1d3)]=!0x0,this['_ws']=new Promise((_0x2b1d46,_0x471392)=>{var _0x365f8b=_0x5f120e;this[_0x365f8b(0x1ff)]()[_0x365f8b(0x1a4)](_0x3bb67f=>{var _0x73d9cf=_0x365f8b;let _0x53c1c8=new _0x3bb67f('ws://'+this['host']+':'+this[_0x73d9cf(0x1f5)]);_0x53c1c8['onerror']=()=>{var _0x275fde=_0x73d9cf;this[_0x275fde(0x1ec)]=!0x1,this[_0x275fde(0x1d3)]=!0x1,this[_0x275fde(0x23f)]=!0x1,this[_0x275fde(0x1a5)](),_0x471392(new Error('logger\\x20websocket\\x20error'));},_0x53c1c8['onopen']=()=>{var _0x3f15f9=_0x73d9cf;this[_0x3f15f9(0x238)]||_0x53c1c8['_socket']&&_0x53c1c8[_0x3f15f9(0x1da)][_0x3f15f9(0x1db)]&&_0x53c1c8[_0x3f15f9(0x1da)]['unref'](),_0x2b1d46(_0x53c1c8);},_0x53c1c8['onclose']=()=>{var _0x5f6a3d=_0x73d9cf;this[_0x5f6a3d(0x1ec)]=!0x1,this[_0x5f6a3d(0x1d3)]=!0x1,this[_0x5f6a3d(0x1fc)]=!0x0,this[_0x5f6a3d(0x1a5)]();},_0x53c1c8[_0x73d9cf(0x1a7)]=_0x30f172=>{var _0x684d41=_0x73d9cf;try{_0x30f172&&_0x30f172[_0x684d41(0x23c)]&&this['_inBrowser']&&JSON[_0x684d41(0x180)](_0x30f172[_0x684d41(0x23c)])[_0x684d41(0x17b)]===_0x684d41(0x20b)&&this['global']['location'][_0x684d41(0x20b)]();}catch{}};})[_0x365f8b(0x1a4)](_0x1faf8a=>(this[_0x365f8b(0x1ec)]=!0x0,this[_0x365f8b(0x1d3)]=!0x1,this['_allowedToConnectOnSend']=!0x1,this[_0x365f8b(0x23f)]=!0x0,_0x1faf8a))[_0x365f8b(0x227)](_0xc695bd=>(this[_0x365f8b(0x1ec)]=!0x1,this[_0x365f8b(0x1d3)]=!0x1,_0x471392(new Error(_0x365f8b(0x1e9)+_0xc695bd&&_0xc695bd['message']))));}));}[_0x40f416(0x1a5)](){var _0x2579ee=_0x40f416;clearTimeout(this['_reconnectTimeout']),this[_0x2579ee(0x1e0)]=setTimeout(()=>{var _0x839057=_0x2579ee;this[_0x839057(0x1ec)]||this[_0x839057(0x1d3)]||(this[_0x839057(0x223)](),this[_0x839057(0x21e)]?.[_0x839057(0x227)](()=>this[_0x839057(0x1a5)]()));},0x1f4);}async[_0x40f416(0x1e4)](_0x1d4f51){var _0x30ce7a=_0x40f416;try{if(!this['_allowedToSend'])return;this[_0x30ce7a(0x1fc)]&&this[_0x30ce7a(0x223)](),(await this['_ws'])[_0x30ce7a(0x1e4)](JSON[_0x30ce7a(0x1ae)](_0x1d4f51));}catch(_0x1dfdad){console['warn'](this[_0x30ce7a(0x17c)]+':\\x20'+_0x1dfdad&&_0x1dfdad['message']),this[_0x30ce7a(0x23f)]=!0x1,this[_0x30ce7a(0x1a5)]();}}};function _0xb568(_0x55cc54,_0x49cd10){var _0x396cc7=_0x396c();return _0xb568=function(_0xb568fa,_0x3edd0e){_0xb568fa=_0xb568fa-0x172;var _0x4c7bea=_0x396cc7[_0xb568fa];return _0x4c7bea;},_0xb568(_0x55cc54,_0x49cd10);}function _0x396c(){var _0x4c852b=['Boolean',["localhost","127.0.0.1","example.cypress.io","MarkHomePC","10.5.0.2","192.168.1.84"],'_type','failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help','sortProps','_addLoadNode','object','number','then','_attemptToReconnect','log','onmessage','getOwnPropertySymbols','error','_treeNodePropertiesAfterFullValue','_isNegativeZero','\\x20browser','depth','stringify','resolveGetters','Set','unknown','_capIfString','Symbol','_sortProps','_setNodeExpressionPath','console','_numberRegExp','length','9794022yOaiKD','string','_setNodePermissions','process','NEGATIVE_INFINITY','unshift','nodeModules','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','node','global','defineProperty','ws/index.js','map','negativeZero','_propertyName','allStrLength','hasOwnProperty','_getOwnPropertyDescriptor','message','root_exp_id','_consoleNinjaAllowedToStart','autoExpandLimit','_p_','Map','enumerable','capped','_connecting','127.0.0.1','symbol','autoExpandPreviousObjects','_processTreeNodeResult','_Symbol','boolean','_socket','unref','level','getOwnPropertyDescriptor','rootExpression','String','_reconnectTimeout','_isPrimitiveWrapperType','valueOf','_setNodeLabel','send','hits','_HTMLAllCollection','hostname','path','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','HTMLAllCollection','_addFunctionsNode','_connected','_p_length','perf_hooks','split','_blacklistedProperty','type','time','performance','[object\\x20Array]','port','location','_hasMapOnItsPath','_setNodeQueryPath','_isMap','_setNodeId','7439490ARNLKi','_allowedToConnectOnSend','nuxt','getOwnPropertyNames','getWebSocketClass','bind','_additionalMetadata','isExpressionToEvaluate','bigint','toString','40400595TLFEAP','concat','expId','undefined','index','remix','reload','push','_cleanNode','host','_isPrimitiveType','3966aYNYwE','_console_ninja_session','_objectToString','elements','strLength','_hasSymbolPropertyOnItsPath','_undefined','current','get','Buffer','_isUndefined','','53453szuesb','value','_ws','55886','autoExpand','call','1674485243892','_connectToHost','function','join','cappedProps','catch','substr','_setNodeExpandableState','[object\\x20Map]','_quotedRegExp','_replacedLog','1.0.0','serialize','replace','next.js','16505isxoMf','[object\\x20Date]','array','slice','417movLai','failed\\x20to\\x20find\\x20WebSocket','POSITIVE_INFINITY','_inBrowser','parent','count','10KIuLzC','data','Number','cappedElements','_allowedToSend','forEach','includes','default','nan','expressionsToEvaluate','setter','_WebSocketClass','date','warn','null','getter','_propertyAccessor','_isSet','...','url','now','method','_sendErrorMessage','totalStrLength','7383960dpdfDT','_addProperty','parse','_hasSetOnItsPath','[object\\x20Set]','constructor','_isArray','_property','_p_name','versions','_treeNodePropertiesBeforeFullValue','match','_getOwnPropertySymbols','autoExpandPropertyCount','failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help','prototype','_keyStrRegExp','toLowerCase','noFunctions','WebSocket','_addObjectProperty','_regExpToString','reduceLimits','name','500ThBILy','_dateToString','pop','set','props','test'];_0x396c=function(){return _0x4c852b;};return _0x396c();}function b(_0x8b2252,_0x2c435d,_0x2cc3a8,_0x1562c5,_0x426a6){var _0x5cb858=_0x40f416;let _0x299eb9=_0x2cc3a8[_0x5cb858(0x1ef)](',')[_0x5cb858(0x1c5)](_0xdfb22a=>{var _0x3d6f1e=_0x5cb858;try{_0x8b2252[_0x3d6f1e(0x211)]||((_0x426a6===_0x3d6f1e(0x230)||_0x426a6===_0x3d6f1e(0x20a))&&(_0x426a6+=_0x8b2252[_0x3d6f1e(0x1bc)]?.[_0x3d6f1e(0x187)]?.[_0x3d6f1e(0x1c1)]?'\\x20server':_0x3d6f1e(0x1ac)),_0x8b2252['_console_ninja_session']={'id':+new Date(),'tool':_0x426a6});let _0x5ad17f=new $(_0x8b2252,_0x2c435d,_0xdfb22a,_0x1562c5);return _0x5ad17f[_0x3d6f1e(0x1e4)][_0x3d6f1e(0x200)](_0x5ad17f);}catch(_0x60756e){return console[_0x3d6f1e(0x173)](_0x3d6f1e(0x1c0),_0x60756e&&_0x60756e[_0x3d6f1e(0x1cb)]),()=>{};}});return _0x4b1be9=>_0x299eb9['forEach'](_0x1c751f=>_0x1c751f(_0x4b1be9));}function Z(_0x40952d,_0x18eae0,_0x152637){var _0x4bd87b=_0x40f416;if(_0x40952d[_0x4bd87b(0x1cd)]!==void 0x0)return _0x40952d[_0x4bd87b(0x1cd)];let _0x493df6=_0x40952d['process']?.[_0x4bd87b(0x187)]?.[_0x4bd87b(0x1c1)];return _0x493df6&&_0x152637===_0x4bd87b(0x1fd)?_0x40952d[_0x4bd87b(0x1cd)]=!0x1:_0x40952d[_0x4bd87b(0x1cd)]=_0x493df6||!_0x18eae0||_0x40952d[_0x4bd87b(0x1f6)]?.[_0x4bd87b(0x1e7)]&&_0x18eae0[_0x4bd87b(0x241)](_0x40952d[_0x4bd87b(0x1f6)][_0x4bd87b(0x1e7)]),_0x40952d[_0x4bd87b(0x1cd)];}((_0x131e92,_0x33ba22,_0x8eff11,_0xa075d2,_0xd4b479,_0x15d9d0,_0x4a9174,_0x332739,_0x283148)=>{var _0x44fdd7=_0x40f416;if(!Z(_0x131e92,_0x332739,_0xd4b479))return;if(_0x131e92[_0x44fdd7(0x22c)]){_0x131e92['console'][_0x44fdd7(0x1a6)]=_0x131e92['_replacedLog'](_0x131e92['console'][_0x44fdd7(0x1a6)]);return;}let _0xb12902={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x868b59={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2},_0x1d49be={'hits':{}};_0x131e92['_replacedLog']=_0x3d661c=>(..._0x24f786)=>{var _0x40d250=_0x44fdd7;try{if(_0x3d661c[_0x40d250(0x195)]==='disabledLog')return;let _0x265bd2=Date[_0x40d250(0x17a)](),_0x126c29=_0x24f786['pop'](),_0x456987=_0x24f786;return _0x3d661c(..._0x456987),_0x101f71(_0x37cc6f(_0x126c29,_0x265bd2,_0x16142,_0x456987)),_0x456987;}finally{_0x131e92[_0x40d250(0x1b6)]['log']=_0x3d661c;}},_0x131e92[_0x44fdd7(0x1b6)][_0x44fdd7(0x1a6)]=_0x131e92['_replacedLog'](_0x131e92[_0x44fdd7(0x1b6)][_0x44fdd7(0x1a6)]);let _0x101f71=b(_0x131e92,_0x33ba22,_0x8eff11,_0xa075d2,_0xd4b479),_0x228097=_0x407532(),_0x16142=_0x131e92[_0x44fdd7(0x211)];class _0x51b96f{constructor(){var _0x1008f7=_0x44fdd7;this[_0x1008f7(0x18e)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this['_numberRegExp']=/^(0|[1-9][0-9]*)$/,this['_quotedRegExp']=/'([^\\\\']|\\\\')*'/,this[_0x1008f7(0x216)]=_0x131e92['undefined'],this['_HTMLAllCollection']=_0x131e92[_0x1008f7(0x1ea)],this[_0x1008f7(0x1ca)]=Object[_0x1008f7(0x1dd)],this['_getOwnPropertyNames']=Object[_0x1008f7(0x1fe)],this['_Symbol']=_0x131e92[_0x1008f7(0x1b3)],this[_0x1008f7(0x193)]=RegExp[_0x1008f7(0x18d)][_0x1008f7(0x204)],this[_0x1008f7(0x197)]=Date['prototype'][_0x1008f7(0x204)];}['serialize'](_0x27ecc0,_0x566ce2,_0x4b7a80,_0x5f2a28){var _0x1a3c51=_0x44fdd7,_0x316b0e=this,_0x1f0eb7=_0x4b7a80['autoExpand'];function _0x4d0492(_0x4447de,_0x1f754a,_0xabb37a){var _0x78ddee=_0xb568;_0x1f754a[_0x78ddee(0x1f1)]=_0x78ddee(0x1b1),_0x1f754a[_0x78ddee(0x1a9)]=_0x4447de[_0x78ddee(0x1cb)],_0x5740f4=_0xabb37a[_0x78ddee(0x1c1)][_0x78ddee(0x217)],_0xabb37a[_0x78ddee(0x1c1)][_0x78ddee(0x217)]=_0x1f754a,_0x316b0e[_0x78ddee(0x188)](_0x1f754a,_0xabb37a);}if(_0x566ce2&&_0x566ce2['argumentResolutionError'])_0x4d0492(_0x566ce2,_0x27ecc0,_0x4b7a80);else try{_0x4b7a80[_0x1a3c51(0x1dc)]++,_0x4b7a80[_0x1a3c51(0x220)]&&_0x4b7a80[_0x1a3c51(0x1d6)][_0x1a3c51(0x20c)](_0x566ce2);var _0x4189e5,_0x5fa64d,_0xec1566,_0x1646cc,_0x520004=[],_0x1afe9d=[],_0x35d37,_0x529453=this[_0x1a3c51(0x19e)](_0x566ce2),_0x30cfed=_0x529453===_0x1a3c51(0x233),_0x155d52=!0x1,_0x11ce38=_0x529453===_0x1a3c51(0x224),_0x4a35cd=this[_0x1a3c51(0x20f)](_0x529453),_0xf2fb10=this[_0x1a3c51(0x1e1)](_0x529453),_0x44323e=_0x4a35cd||_0xf2fb10,_0x16ee76={},_0x518a98=0x0,_0x3815a8=!0x1,_0x5740f4,_0x5e87a1=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x4b7a80[_0x1a3c51(0x1ad)]){if(_0x30cfed){if(_0x5fa64d=_0x566ce2['length'],_0x5fa64d>_0x4b7a80['elements']){for(_0xec1566=0x0,_0x1646cc=_0x4b7a80[_0x1a3c51(0x213)],_0x4189e5=_0xec1566;_0x4189e5<_0x1646cc;_0x4189e5++)_0x1afe9d[_0x1a3c51(0x20c)](_0x316b0e['_addProperty'](_0x520004,_0x566ce2,_0x529453,_0x4189e5,_0x4b7a80));_0x27ecc0[_0x1a3c51(0x23e)]=!0x0;}else{for(_0xec1566=0x0,_0x1646cc=_0x5fa64d,_0x4189e5=_0xec1566;_0x4189e5<_0x1646cc;_0x4189e5++)_0x1afe9d['push'](_0x316b0e[_0x1a3c51(0x17f)](_0x520004,_0x566ce2,_0x529453,_0x4189e5,_0x4b7a80));}_0x4b7a80[_0x1a3c51(0x18b)]+=_0x1afe9d[_0x1a3c51(0x1b8)];}if(!(_0x529453==='null'||_0x529453==='undefined')&&!_0x4a35cd&&_0x529453!==_0x1a3c51(0x1df)&&_0x529453!==_0x1a3c51(0x219)&&_0x529453!==_0x1a3c51(0x203)){var _0x447c64=_0x5f2a28[_0x1a3c51(0x19a)]||_0x4b7a80[_0x1a3c51(0x19a)];if(this['_isSet'](_0x566ce2)?(_0x4189e5=0x0,_0x566ce2[_0x1a3c51(0x240)](function(_0x36cb01){var _0x2630c1=_0x1a3c51;if(_0x518a98++,_0x4b7a80[_0x2630c1(0x18b)]++,_0x518a98>_0x447c64){_0x3815a8=!0x0;return;}if(!_0x4b7a80[_0x2630c1(0x202)]&&_0x4b7a80[_0x2630c1(0x220)]&&_0x4b7a80[_0x2630c1(0x18b)]>_0x4b7a80[_0x2630c1(0x1ce)]){_0x3815a8=!0x0;return;}_0x1afe9d[_0x2630c1(0x20c)](_0x316b0e['_addProperty'](_0x520004,_0x566ce2,_0x2630c1(0x1b0),_0x4189e5++,_0x4b7a80,function(_0x4139b9){return function(){return _0x4139b9;};}(_0x36cb01)));})):this[_0x1a3c51(0x1f9)](_0x566ce2)&&_0x566ce2[_0x1a3c51(0x240)](function(_0x21c649,_0x149a18){var _0x3810d8=_0x1a3c51;if(_0x518a98++,_0x4b7a80[_0x3810d8(0x18b)]++,_0x518a98>_0x447c64){_0x3815a8=!0x0;return;}if(!_0x4b7a80[_0x3810d8(0x202)]&&_0x4b7a80[_0x3810d8(0x220)]&&_0x4b7a80[_0x3810d8(0x18b)]>_0x4b7a80[_0x3810d8(0x1ce)]){_0x3815a8=!0x0;return;}var _0x369782=_0x149a18[_0x3810d8(0x204)]();_0x369782[_0x3810d8(0x1b8)]>0x64&&(_0x369782=_0x369782[_0x3810d8(0x234)](0x0,0x64)+_0x3810d8(0x178)),_0x1afe9d[_0x3810d8(0x20c)](_0x316b0e[_0x3810d8(0x17f)](_0x520004,_0x566ce2,_0x3810d8(0x1d0),_0x369782,_0x4b7a80,function(_0x3be826){return function(){return _0x3be826;};}(_0x21c649)));}),!_0x155d52){try{for(_0x35d37 in _0x566ce2)if(!(_0x30cfed&&_0x5e87a1[_0x1a3c51(0x19b)](_0x35d37))&&!this[_0x1a3c51(0x1f0)](_0x566ce2,_0x35d37,_0x4b7a80)){if(_0x518a98++,_0x4b7a80[_0x1a3c51(0x18b)]++,_0x518a98>_0x447c64){_0x3815a8=!0x0;break;}if(!_0x4b7a80[_0x1a3c51(0x202)]&&_0x4b7a80[_0x1a3c51(0x220)]&&_0x4b7a80['autoExpandPropertyCount']>_0x4b7a80['autoExpandLimit']){_0x3815a8=!0x0;break;}_0x1afe9d[_0x1a3c51(0x20c)](_0x316b0e[_0x1a3c51(0x192)](_0x520004,_0x16ee76,_0x566ce2,_0x529453,_0x35d37,_0x4b7a80));}}catch{}if(_0x16ee76[_0x1a3c51(0x1ed)]=!0x0,_0x11ce38&&(_0x16ee76[_0x1a3c51(0x186)]=!0x0),!_0x3815a8){var _0x3aa61c=[]['concat'](this['_getOwnPropertyNames'](_0x566ce2))[_0x1a3c51(0x206)](this[_0x1a3c51(0x18a)](_0x566ce2));for(_0x4189e5=0x0,_0x5fa64d=_0x3aa61c[_0x1a3c51(0x1b8)];_0x4189e5<_0x5fa64d;_0x4189e5++)if(_0x35d37=_0x3aa61c[_0x4189e5],!(_0x30cfed&&_0x5e87a1['test'](_0x35d37[_0x1a3c51(0x204)]()))&&!this['_blacklistedProperty'](_0x566ce2,_0x35d37,_0x4b7a80)&&!_0x16ee76[_0x1a3c51(0x1cf)+_0x35d37[_0x1a3c51(0x204)]()]){if(_0x518a98++,_0x4b7a80[_0x1a3c51(0x18b)]++,_0x518a98>_0x447c64){_0x3815a8=!0x0;break;}if(!_0x4b7a80['isExpressionToEvaluate']&&_0x4b7a80[_0x1a3c51(0x220)]&&_0x4b7a80[_0x1a3c51(0x18b)]>_0x4b7a80['autoExpandLimit']){_0x3815a8=!0x0;break;}_0x1afe9d[_0x1a3c51(0x20c)](_0x316b0e[_0x1a3c51(0x192)](_0x520004,_0x16ee76,_0x566ce2,_0x529453,_0x35d37,_0x4b7a80));}}}}}if(_0x27ecc0[_0x1a3c51(0x1f1)]=_0x529453,_0x44323e?(_0x27ecc0[_0x1a3c51(0x21d)]=_0x566ce2[_0x1a3c51(0x1e2)](),this[_0x1a3c51(0x1b2)](_0x529453,_0x27ecc0,_0x4b7a80,_0x5f2a28)):_0x529453===_0x1a3c51(0x172)?_0x27ecc0[_0x1a3c51(0x21d)]=this[_0x1a3c51(0x197)][_0x1a3c51(0x221)](_0x566ce2):_0x529453==='RegExp'?_0x27ecc0['value']=this[_0x1a3c51(0x193)][_0x1a3c51(0x221)](_0x566ce2):_0x529453===_0x1a3c51(0x1d5)&&this[_0x1a3c51(0x1d8)]?_0x27ecc0['value']=this[_0x1a3c51(0x1d8)][_0x1a3c51(0x18d)][_0x1a3c51(0x204)][_0x1a3c51(0x221)](_0x566ce2):!_0x4b7a80['depth']&&!(_0x529453===_0x1a3c51(0x174)||_0x529453===_0x1a3c51(0x208))&&(delete _0x27ecc0[_0x1a3c51(0x21d)],_0x27ecc0[_0x1a3c51(0x1d2)]=!0x0),_0x3815a8&&(_0x27ecc0[_0x1a3c51(0x226)]=!0x0),_0x5740f4=_0x4b7a80[_0x1a3c51(0x1c1)][_0x1a3c51(0x217)],_0x4b7a80['node'][_0x1a3c51(0x217)]=_0x27ecc0,this['_treeNodePropertiesBeforeFullValue'](_0x27ecc0,_0x4b7a80),_0x1afe9d[_0x1a3c51(0x1b8)]){for(_0x4189e5=0x0,_0x5fa64d=_0x1afe9d[_0x1a3c51(0x1b8)];_0x4189e5<_0x5fa64d;_0x4189e5++)_0x1afe9d[_0x4189e5](_0x4189e5);}_0x520004[_0x1a3c51(0x1b8)]&&(_0x27ecc0['props']=_0x520004);}catch(_0x3591f4){_0x4d0492(_0x3591f4,_0x27ecc0,_0x4b7a80);}return this['_additionalMetadata'](_0x566ce2,_0x27ecc0),this[_0x1a3c51(0x1aa)](_0x27ecc0,_0x4b7a80),_0x4b7a80[_0x1a3c51(0x1c1)][_0x1a3c51(0x217)]=_0x5740f4,_0x4b7a80['level']--,_0x4b7a80[_0x1a3c51(0x220)]=_0x1f0eb7,_0x4b7a80[_0x1a3c51(0x220)]&&_0x4b7a80[_0x1a3c51(0x1d6)][_0x1a3c51(0x198)](),_0x27ecc0;}[_0x44fdd7(0x18a)](_0x2f25d9){var _0x28b344=_0x44fdd7;return Object['getOwnPropertySymbols']?Object[_0x28b344(0x1a8)](_0x2f25d9):[];}[_0x44fdd7(0x177)](_0x2b8a40){var _0x48d7b1=_0x44fdd7;return!!(_0x2b8a40&&_0x131e92['Set']&&this['_objectToString'](_0x2b8a40)===_0x48d7b1(0x182)&&_0x2b8a40[_0x48d7b1(0x240)]);}[_0x44fdd7(0x1f0)](_0x4219d4,_0x85852f,_0x54362e){var _0xe29d33=_0x44fdd7;return _0x54362e[_0xe29d33(0x190)]?typeof _0x4219d4[_0x85852f]==_0xe29d33(0x224):!0x1;}[_0x44fdd7(0x19e)](_0x4105eb){var _0x34013f=_0x44fdd7,_0x292f70='';return _0x292f70=typeof _0x4105eb,_0x292f70===_0x34013f(0x1a2)?this[_0x34013f(0x212)](_0x4105eb)===_0x34013f(0x1f4)?_0x292f70=_0x34013f(0x233):this[_0x34013f(0x212)](_0x4105eb)===_0x34013f(0x232)?_0x292f70=_0x34013f(0x172):_0x4105eb===null?_0x292f70=_0x34013f(0x174):_0x4105eb[_0x34013f(0x183)]&&(_0x292f70=_0x4105eb[_0x34013f(0x183)]['name']||_0x292f70):_0x292f70===_0x34013f(0x208)&&this[_0x34013f(0x1e6)]&&_0x4105eb instanceof this[_0x34013f(0x1e6)]&&(_0x292f70=_0x34013f(0x1ea)),_0x292f70;}[_0x44fdd7(0x212)](_0x490988){var _0x2a8d77=_0x44fdd7;return Object[_0x2a8d77(0x18d)][_0x2a8d77(0x204)]['call'](_0x490988);}[_0x44fdd7(0x20f)](_0x43b9bd){var _0x1d20c0=_0x44fdd7;return _0x43b9bd===_0x1d20c0(0x1d9)||_0x43b9bd==='string'||_0x43b9bd==='number';}[_0x44fdd7(0x1e1)](_0x14587c){var _0x11d226=_0x44fdd7;return _0x14587c===_0x11d226(0x19c)||_0x14587c===_0x11d226(0x1df)||_0x14587c===_0x11d226(0x23d);}['_addProperty'](_0x5579d3,_0x5414dd,_0x589898,_0x40a745,_0x26e4e3,_0x48e7d3){var _0x2900fe=this;return function(_0x386ca0){var _0x14d99d=_0xb568,_0x49c1ea=_0x26e4e3[_0x14d99d(0x1c1)][_0x14d99d(0x217)],_0x407d72=_0x26e4e3[_0x14d99d(0x1c1)][_0x14d99d(0x209)],_0x5da9f7=_0x26e4e3[_0x14d99d(0x1c1)]['parent'];_0x26e4e3[_0x14d99d(0x1c1)][_0x14d99d(0x239)]=_0x49c1ea,_0x26e4e3[_0x14d99d(0x1c1)]['index']=typeof _0x40a745=='number'?_0x40a745:_0x386ca0,_0x5579d3[_0x14d99d(0x20c)](_0x2900fe[_0x14d99d(0x185)](_0x5414dd,_0x589898,_0x40a745,_0x26e4e3,_0x48e7d3)),_0x26e4e3[_0x14d99d(0x1c1)][_0x14d99d(0x239)]=_0x5da9f7,_0x26e4e3[_0x14d99d(0x1c1)][_0x14d99d(0x209)]=_0x407d72;};}[_0x44fdd7(0x192)](_0x525483,_0x2adc9c,_0x38b5bc,_0x5ac630,_0x1731d6,_0x1396ae,_0x125614){var _0x119884=_0x44fdd7,_0x5afe85=this;return _0x2adc9c['_p_'+_0x1731d6[_0x119884(0x204)]()]=!0x0,function(_0x2560e3){var _0x164ae9=_0x119884,_0x1b553c=_0x1396ae[_0x164ae9(0x1c1)][_0x164ae9(0x217)],_0x3af447=_0x1396ae['node'][_0x164ae9(0x209)],_0x1dcf25=_0x1396ae[_0x164ae9(0x1c1)][_0x164ae9(0x239)];_0x1396ae[_0x164ae9(0x1c1)]['parent']=_0x1b553c,_0x1396ae['node'][_0x164ae9(0x209)]=_0x2560e3,_0x525483[_0x164ae9(0x20c)](_0x5afe85[_0x164ae9(0x185)](_0x38b5bc,_0x5ac630,_0x1731d6,_0x1396ae,_0x125614)),_0x1396ae[_0x164ae9(0x1c1)][_0x164ae9(0x239)]=_0x1dcf25,_0x1396ae[_0x164ae9(0x1c1)]['index']=_0x3af447;};}[_0x44fdd7(0x185)](_0x2e440d,_0x396f57,_0x538192,_0x1aded3,_0x342a95){var _0x23625f=_0x44fdd7,_0x1cb29b=this;_0x342a95||(_0x342a95=function(_0x9a1817,_0x192222){return _0x9a1817[_0x192222];});var _0x248b17=_0x538192[_0x23625f(0x204)](),_0x1160b4=_0x1aded3[_0x23625f(0x244)]||{},_0x38f00e=_0x1aded3['depth'],_0x4de075=_0x1aded3[_0x23625f(0x202)];try{var _0x213764=this[_0x23625f(0x1f9)](_0x2e440d),_0x3bd521=_0x248b17;_0x213764&&_0x3bd521[0x0]==='\\x27'&&(_0x3bd521=_0x3bd521[_0x23625f(0x228)](0x1,_0x3bd521['length']-0x2));var _0x573658=_0x1aded3['expressionsToEvaluate']=_0x1160b4['_p_'+_0x3bd521];_0x573658&&(_0x1aded3[_0x23625f(0x1ad)]=_0x1aded3['depth']+0x1),_0x1aded3[_0x23625f(0x202)]=!!_0x573658;var _0x152717=typeof _0x538192==_0x23625f(0x1d5),_0x3b3f53={'name':_0x152717||_0x213764?_0x248b17:this['_propertyName'](_0x248b17)};if(_0x152717&&(_0x3b3f53['symbol']=!0x0),!(_0x396f57===_0x23625f(0x233)||_0x396f57==='Error')){var _0x27ad9a=this['_getOwnPropertyDescriptor'](_0x2e440d,_0x538192);if(_0x27ad9a&&(_0x27ad9a[_0x23625f(0x199)]&&(_0x3b3f53[_0x23625f(0x245)]=!0x0),_0x27ad9a[_0x23625f(0x218)]&&!_0x573658&&!_0x1aded3[_0x23625f(0x1af)]))return _0x3b3f53[_0x23625f(0x175)]=!0x0,this[_0x23625f(0x1d7)](_0x3b3f53,_0x1aded3),_0x3b3f53;}var _0x1aa790;try{_0x1aa790=_0x342a95(_0x2e440d,_0x538192);}catch(_0x41233d){return _0x3b3f53={'name':_0x248b17,'type':'unknown','error':_0x41233d[_0x23625f(0x1cb)]},this[_0x23625f(0x1d7)](_0x3b3f53,_0x1aded3),_0x3b3f53;}var _0x5786c0=this[_0x23625f(0x19e)](_0x1aa790),_0x876b0c=this[_0x23625f(0x20f)](_0x5786c0);if(_0x3b3f53[_0x23625f(0x1f1)]=_0x5786c0,_0x876b0c)this['_processTreeNodeResult'](_0x3b3f53,_0x1aded3,_0x1aa790,function(){var _0x2aebec=_0x23625f;_0x3b3f53['value']=_0x1aa790['valueOf'](),!_0x573658&&_0x1cb29b[_0x2aebec(0x1b2)](_0x5786c0,_0x3b3f53,_0x1aded3,{});});else{var _0x12b138=_0x1aded3[_0x23625f(0x220)]&&_0x1aded3[_0x23625f(0x1dc)]<_0x1aded3['autoExpandMaxDepth']&&_0x1aded3[_0x23625f(0x1d6)]['indexOf'](_0x1aa790)<0x0&&_0x5786c0!==_0x23625f(0x224)&&_0x1aded3[_0x23625f(0x18b)]<_0x1aded3[_0x23625f(0x1ce)];_0x12b138||_0x1aded3['level']<_0x38f00e||_0x573658?(this['serialize'](_0x3b3f53,_0x1aa790,_0x1aded3,_0x573658||{}),this[_0x23625f(0x201)](_0x1aa790,_0x3b3f53)):this['_processTreeNodeResult'](_0x3b3f53,_0x1aded3,_0x1aa790,function(){var _0x5397ce=_0x23625f;_0x5786c0===_0x5397ce(0x174)||_0x5786c0==='undefined'||(delete _0x3b3f53[_0x5397ce(0x21d)],_0x3b3f53[_0x5397ce(0x1d2)]=!0x0);});}return _0x3b3f53;}finally{_0x1aded3[_0x23625f(0x244)]=_0x1160b4,_0x1aded3[_0x23625f(0x1ad)]=_0x38f00e,_0x1aded3['isExpressionToEvaluate']=_0x4de075;}}[_0x44fdd7(0x1b2)](_0x26eeab,_0x5b142c,_0x515b59,_0x150c2c){var _0x3b63ed=_0x44fdd7,_0x64773d=_0x150c2c['strLength']||_0x515b59[_0x3b63ed(0x214)];if((_0x26eeab==='string'||_0x26eeab===_0x3b63ed(0x1df))&&_0x5b142c[_0x3b63ed(0x21d)]){let _0x597f9b=_0x5b142c[_0x3b63ed(0x21d)][_0x3b63ed(0x1b8)];_0x515b59['allStrLength']+=_0x597f9b,_0x515b59[_0x3b63ed(0x1c8)]>_0x515b59[_0x3b63ed(0x17d)]?(_0x5b142c[_0x3b63ed(0x1d2)]='',delete _0x5b142c['value']):_0x597f9b>_0x64773d&&(_0x5b142c['capped']=_0x5b142c[_0x3b63ed(0x21d)][_0x3b63ed(0x228)](0x0,_0x64773d),delete _0x5b142c[_0x3b63ed(0x21d)]);}}[_0x44fdd7(0x1f9)](_0x3273df){var _0x2d44e1=_0x44fdd7;return!!(_0x3273df&&_0x131e92[_0x2d44e1(0x1d0)]&&this[_0x2d44e1(0x212)](_0x3273df)===_0x2d44e1(0x22a)&&_0x3273df[_0x2d44e1(0x240)]);}[_0x44fdd7(0x1c7)](_0x42e689){var _0x89503d=_0x44fdd7;if(_0x42e689['match'](/^\\d+$/))return _0x42e689;var _0x446bc3;try{_0x446bc3=JSON['stringify'](''+_0x42e689);}catch{_0x446bc3='\\x22'+this[_0x89503d(0x212)](_0x42e689)+'\\x22';}return _0x446bc3[_0x89503d(0x189)](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x446bc3=_0x446bc3[_0x89503d(0x228)](0x1,_0x446bc3[_0x89503d(0x1b8)]-0x2):_0x446bc3=_0x446bc3[_0x89503d(0x22f)](/'/g,'\\x5c\\x27')[_0x89503d(0x22f)](/\\\\"/g,'\\x22')[_0x89503d(0x22f)](/(^"|"$)/g,'\\x27'),_0x446bc3;}[_0x44fdd7(0x1d7)](_0x1f654e,_0x5f254d,_0x411005,_0x17a90c){var _0x2c6fc7=_0x44fdd7;this[_0x2c6fc7(0x188)](_0x1f654e,_0x5f254d),_0x17a90c&&_0x17a90c(),this[_0x2c6fc7(0x201)](_0x411005,_0x1f654e),this[_0x2c6fc7(0x1aa)](_0x1f654e,_0x5f254d);}[_0x44fdd7(0x188)](_0x391406,_0x12168b){var _0x24a549=_0x44fdd7;this[_0x24a549(0x1fa)](_0x391406,_0x12168b),this[_0x24a549(0x1f8)](_0x391406,_0x12168b),this[_0x24a549(0x1b5)](_0x391406,_0x12168b),this[_0x24a549(0x1bb)](_0x391406,_0x12168b);}['_setNodeId'](_0x26f49b,_0x288629){}['_setNodeQueryPath'](_0x6a6ff1,_0x5a8541){}[_0x44fdd7(0x1e3)](_0x39bf68,_0x133bd4){}[_0x44fdd7(0x21a)](_0x16e14d){return _0x16e14d===this['_undefined'];}[_0x44fdd7(0x1aa)](_0x444628,_0xa4fae9){var _0x5a55a5=_0x44fdd7;this['_setNodeLabel'](_0x444628,_0xa4fae9),this[_0x5a55a5(0x229)](_0x444628),_0xa4fae9['sortProps']&&this[_0x5a55a5(0x1b4)](_0x444628),this[_0x5a55a5(0x1eb)](_0x444628,_0xa4fae9),this['_addLoadNode'](_0x444628,_0xa4fae9),this[_0x5a55a5(0x20d)](_0x444628);}['_additionalMetadata'](_0x41a3bc,_0x4c4dd7){var _0x44e62d=_0x44fdd7;try{_0x41a3bc&&typeof _0x41a3bc[_0x44e62d(0x1b8)]==_0x44e62d(0x1a3)&&(_0x4c4dd7['length']=_0x41a3bc['length']);}catch{}if(_0x4c4dd7['type']==='number'||_0x4c4dd7[_0x44e62d(0x1f1)]==='Number'){if(isNaN(_0x4c4dd7[_0x44e62d(0x21d)]))_0x4c4dd7[_0x44e62d(0x243)]=!0x0,delete _0x4c4dd7[_0x44e62d(0x21d)];else switch(_0x4c4dd7[_0x44e62d(0x21d)]){case Number[_0x44e62d(0x237)]:_0x4c4dd7['positiveInfinity']=!0x0,delete _0x4c4dd7[_0x44e62d(0x21d)];break;case Number[_0x44e62d(0x1bd)]:_0x4c4dd7['negativeInfinity']=!0x0,delete _0x4c4dd7[_0x44e62d(0x21d)];break;case 0x0:this['_isNegativeZero'](_0x4c4dd7['value'])&&(_0x4c4dd7[_0x44e62d(0x1c6)]=!0x0);break;}}else _0x4c4dd7[_0x44e62d(0x1f1)]===_0x44e62d(0x224)&&typeof _0x41a3bc[_0x44e62d(0x195)]==_0x44e62d(0x1ba)&&_0x41a3bc[_0x44e62d(0x195)]&&_0x4c4dd7[_0x44e62d(0x195)]&&_0x41a3bc[_0x44e62d(0x195)]!==_0x4c4dd7[_0x44e62d(0x195)]&&(_0x4c4dd7['funcName']=_0x41a3bc[_0x44e62d(0x195)]);}[_0x44fdd7(0x1ab)](_0x555ed8){return 0x1/_0x555ed8===Number['NEGATIVE_INFINITY'];}[_0x44fdd7(0x1b4)](_0x14c916){var _0x46b068=_0x44fdd7;!_0x14c916[_0x46b068(0x19a)]||!_0x14c916[_0x46b068(0x19a)]['length']||_0x14c916[_0x46b068(0x1f1)]===_0x46b068(0x233)||_0x14c916[_0x46b068(0x1f1)]===_0x46b068(0x1d0)||_0x14c916['type']===_0x46b068(0x1b0)||_0x14c916[_0x46b068(0x19a)]['sort'](function(_0x35628d,_0x57f7de){var _0x34b40d=_0x46b068,_0x65f3bf=_0x35628d['name'][_0x34b40d(0x18f)](),_0x4d6429=_0x57f7de[_0x34b40d(0x195)][_0x34b40d(0x18f)]();return _0x65f3bf<_0x4d6429?-0x1:_0x65f3bf>_0x4d6429?0x1:0x0;});}['_addFunctionsNode'](_0x28bcde,_0x8e5e33){var _0xe4efe0=_0x44fdd7;if(!(_0x8e5e33[_0xe4efe0(0x190)]||!_0x28bcde[_0xe4efe0(0x19a)]||!_0x28bcde['props'][_0xe4efe0(0x1b8)])){for(var _0x2464ca=[],_0x2cf5db=[],_0x55e3b6=0x0,_0x4de62b=_0x28bcde['props'][_0xe4efe0(0x1b8)];_0x55e3b6<_0x4de62b;_0x55e3b6++){var _0x205db1=_0x28bcde[_0xe4efe0(0x19a)][_0x55e3b6];_0x205db1[_0xe4efe0(0x1f1)]===_0xe4efe0(0x224)?_0x2464ca[_0xe4efe0(0x20c)](_0x205db1):_0x2cf5db['push'](_0x205db1);}if(!(!_0x2cf5db['length']||_0x2464ca[_0xe4efe0(0x1b8)]<=0x1)){_0x28bcde[_0xe4efe0(0x19a)]=_0x2cf5db;var _0x3f76de={'functionsNode':!0x0,'props':_0x2464ca};this['_setNodeId'](_0x3f76de,_0x8e5e33),this[_0xe4efe0(0x1e3)](_0x3f76de,_0x8e5e33),this['_setNodeExpandableState'](_0x3f76de),this[_0xe4efe0(0x1bb)](_0x3f76de,_0x8e5e33),_0x3f76de['id']+='\\x20f',_0x28bcde['props'][_0xe4efe0(0x1be)](_0x3f76de);}}}[_0x44fdd7(0x1a1)](_0x4b9b81,_0x266f41){}[_0x44fdd7(0x229)](_0x544951){}[_0x44fdd7(0x184)](_0x3633db){var _0x2b26c9=_0x44fdd7;return Array['isArray'](_0x3633db)||typeof _0x3633db==_0x2b26c9(0x1a2)&&this[_0x2b26c9(0x212)](_0x3633db)==='[object\\x20Array]';}[_0x44fdd7(0x1bb)](_0x5c802a,_0x5b72f9){}[_0x44fdd7(0x20d)](_0x58a6e4){var _0x5358d4=_0x44fdd7;delete _0x58a6e4[_0x5358d4(0x215)],delete _0x58a6e4[_0x5358d4(0x181)],delete _0x58a6e4[_0x5358d4(0x1f7)];}[_0x44fdd7(0x1b5)](_0x11e985,_0x9f134d){}[_0x44fdd7(0x176)](_0x3db316){var _0x402e1e=_0x44fdd7;return _0x3db316?_0x3db316[_0x402e1e(0x189)](this[_0x402e1e(0x1b7)])?'['+_0x3db316+']':_0x3db316[_0x402e1e(0x189)](this['_keyStrRegExp'])?'.'+_0x3db316:_0x3db316[_0x402e1e(0x189)](this[_0x402e1e(0x22b)])?'['+_0x3db316+']':'[\\x27'+_0x3db316+'\\x27]':'';}}let _0x39a9c0=new _0x51b96f();function _0x37cc6f(_0x38fd71,_0x1147cf,_0x173696,_0x2e3732){var _0x359a44=_0x44fdd7;let _0x5cbb4c,_0xd2de42;try{_0xd2de42=_0x228097(),_0x5cbb4c=_0x1d49be[_0x38fd71],!_0x5cbb4c||_0xd2de42-_0x5cbb4c['ts']>0x1f4&&_0x5cbb4c['count']&&_0x5cbb4c[_0x359a44(0x1f2)]/_0x5cbb4c[_0x359a44(0x23a)]<0x64?(_0x1d49be[_0x38fd71]=_0x5cbb4c={'count':0x0,'time':0x0,'ts':_0xd2de42},_0x1d49be['hits']={}):_0xd2de42-_0x1d49be[_0x359a44(0x1e5)]['ts']>0x32&&_0x1d49be[_0x359a44(0x1e5)]['count']&&_0x1d49be[_0x359a44(0x1e5)][_0x359a44(0x1f2)]/_0x1d49be[_0x359a44(0x1e5)]['count']<0x64&&(_0x1d49be['hits']={});let _0x45377a=[],_0x26be24=_0x5cbb4c[_0x359a44(0x194)]||_0x1d49be[_0x359a44(0x1e5)][_0x359a44(0x194)]?_0x868b59:_0xb12902;for(var _0x209818=0x0;_0x209818<_0x2e3732[_0x359a44(0x1b8)];_0x209818++){let _0x51e6a8={};_0x51e6a8[_0x359a44(0x19a)]=_0x26be24[_0x359a44(0x19a)],_0x51e6a8[_0x359a44(0x213)]=_0x26be24[_0x359a44(0x213)],_0x51e6a8[_0x359a44(0x214)]=_0x26be24['strLength'],_0x51e6a8['totalStrLength']=_0x26be24['totalStrLength'],_0x51e6a8[_0x359a44(0x1ce)]=_0x26be24[_0x359a44(0x1ce)],_0x51e6a8['autoExpandMaxDepth']=_0x26be24['autoExpandMaxDepth'],_0x51e6a8[_0x359a44(0x1a0)]=!0x1,_0x51e6a8['noFunctions']=!_0x283148,_0x51e6a8[_0x359a44(0x1ad)]=0x1,_0x51e6a8[_0x359a44(0x1dc)]=0x0,_0x51e6a8[_0x359a44(0x207)]=_0x359a44(0x1cc),_0x51e6a8[_0x359a44(0x1de)]='root_exp',_0x51e6a8[_0x359a44(0x220)]=!0x0,_0x51e6a8['autoExpandPreviousObjects']=[],_0x51e6a8['autoExpandPropertyCount']=0x0,_0x51e6a8[_0x359a44(0x1af)]=!0x0,_0x51e6a8[_0x359a44(0x1c8)]=0x0,_0x51e6a8[_0x359a44(0x1c1)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x45377a[_0x359a44(0x20c)](_0x39a9c0[_0x359a44(0x22e)]({},_0x2e3732[_0x209818],_0x51e6a8,{}));}return{'method':_0x359a44(0x1a6),'version':_0x15d9d0,'args':[{'id':_0x38fd71,'ts':_0x1147cf,'args':_0x45377a,'session':_0x173696}]};}catch(_0x5c4e81){return{'method':'log','version':_0x15d9d0,'args':[{'id':_0x38fd71,'ts':_0x1147cf,'args':[{'type':_0x359a44(0x1b1),'error':_0x5c4e81&&_0x5c4e81[_0x359a44(0x1cb)],'session':_0x173696}]}]};}finally{try{if(_0x5cbb4c&&_0xd2de42){let _0x2f7b69=_0x228097();_0x5cbb4c[_0x359a44(0x23a)]++,_0x5cbb4c[_0x359a44(0x1f2)]+=_0x2f7b69-_0xd2de42,_0x5cbb4c['ts']=_0x2f7b69,_0x1d49be[_0x359a44(0x1e5)][_0x359a44(0x23a)]++,_0x1d49be['hits'][_0x359a44(0x1f2)]+=_0x2f7b69-_0xd2de42,_0x1d49be['hits']['ts']=_0x2f7b69,(_0x5cbb4c[_0x359a44(0x23a)]>0x32||_0x5cbb4c[_0x359a44(0x1f2)]>0x64)&&(_0x5cbb4c[_0x359a44(0x194)]=!0x0),(_0x1d49be[_0x359a44(0x1e5)][_0x359a44(0x23a)]>0x3e8||_0x1d49be[_0x359a44(0x1e5)][_0x359a44(0x1f2)]>0x12c)&&(_0x1d49be[_0x359a44(0x1e5)]['reduceLimits']=!0x0);}}catch{}}}function _0x407532(){var _0x519286=_0x44fdd7;if(_0x131e92[_0x519286(0x1f3)])return()=>_0x131e92[_0x519286(0x1f3)][_0x519286(0x17a)]();try{let {performance:_0x30ef78}=require(_0x519286(0x1ee));return()=>_0x30ef78[_0x519286(0x17a)]();}catch{return()=>Date[_0x519286(0x17a)]();}}})(globalThis,_0x40f416(0x1d4),_0x40f416(0x21f),"c:\\\\Users\\\\Markm.000\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-0.0.70\\\\node_modules",'remix',_0x40f416(0x22d),_0x40f416(0x222),_0x40f416(0x19d),_0x40f416(0x21b));`);
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
var import_node4 = require("@remix-run/node"), import_react15 = require("@remix-run/react");

// app/components/Auth/AuthHeader.tsx
var import_react14 = require("@remix-run/react"), import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function AuthHeader() {
  let isLoginPage = (0, import_react14.useLocation)().pathname === "/login";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("nav", { className: "bg-emerald-500 p-3 flex text-3xl space-x-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h1", { className: "", children: "Audiobook Tracker" }, void 0, !1, {
      fileName: "app/components/Auth/AuthHeader.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    isLoginPage && /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react14.Link, { to: "/signup", className: "underline text-green-900", children: "SignUp" }, void 0, !1, {
      fileName: "app/components/Auth/AuthHeader.tsx",
      lineNumber: 17,
      columnNumber: 9
    }, this),
    isLoginPage || /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react14.Link, { to: "/login", className: "underline text-green-900", children: "Login" }, void 0, !1, {
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
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function AuthLayout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex flex-col bg-emerald-200 h-screen w-full ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(AuthHeader_default, {}, void 0, !1, {
      fileName: "app/routes/__auth.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react15.Outlet, {}, void 0, !1, {
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
var import_react17 = require("@remix-run/react"), import_react18 = require("react"), import_node5 = require("@remix-run/node");

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
var import_zod = require("zod"), AuthFormValues = import_zod.z.object({
  email: import_zod.z.string().email(),
  password: import_zod.z.string().min(5, { message: "Password must be at least 5 chars" }).max(15)
}), authFormValidation = ({ email, password }) => {
  let authResults = AuthFormValues.safeParse({ email, password });
  if (!authResults.success)
    return authResults.error.format();
};

// app/components/input/InputField.tsx
var import_react16 = require("react"), import_jsx_dev_runtime15 = require("react/jsx-dev-runtime"), initType = (type) => type === "passwordWpeek" ? "password" : type;
function InputField({ name, type, onChange, value, label, error }) {
  let controlledProps = onChange ? { onChange, value } : {}, [currType, setCurrType] = (0, import_react16.useState)(initType(type)), peekPasswordToggle = () => setCurrType((state) => state === "password" ? "text" : "password");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("label", { htmlFor: name, children: label }, void 0, !1, {
      fileName: "app/components/input/InputField.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
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
      type === "passwordWpeek" && /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
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
    error && /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { children: error }, void 0, !1, {
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
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime"), action3 = async ({ request }) => {
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
  let [pwVisible, togglePwVisible] = (0, import_react18.useReducer)((state) => !state, !1), actionData = (0, import_react17.useActionData)();
  return console.log("actionData", actionData), /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex flex-col flex-grow border border-black justify-center items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h1", { className: "text-3xl mb-4", children: "Register for Audiobook Tracker" }, void 0, !1, {
      fileName: "app/routes/__auth/signup.tsx",
      lineNumber: 68,
      columnNumber: 7
    }, this),
    (actionData == null ? void 0 : actionData.name) === "Email Exists" && /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { children: actionData.message }, void 0, !1, {
      fileName: "app/routes/__auth/signup.tsx",
      lineNumber: 69,
      columnNumber: 47
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
      import_react17.Form,
      {
        method: "post",
        className: "flex flex-col rounded-lg p-6 w-96 bg-gray-400",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "w-full text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
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
var import_node7 = require("@remix-run/node"), import_react19 = require("@remix-run/react");
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime"), action4 = async ({ request }) => {
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
  let actionData = (0, import_react19.useActionData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex flex-col flex-grow border border-black justify-center items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h1", { className: "text-3xl mb-4", children: "Audiobook Tracker Login" }, void 0, !1, {
      fileName: "app/routes/__auth/login.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
      import_react19.Form,
      {
        method: "post",
        className: "flex flex-col rounded-lg p-6 w-96 bg-gray-400",
        children: [
          (actionData == null ? void 0 : actionData.name) === "Server Login Error" && /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { children: actionData.message }, void 0, !1, {
            fileName: "app/routes/__auth/login.tsx",
            lineNumber: 58,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "w-full text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
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
var assets_manifest_default = { version: "68002516", entry: { module: "/build/entry.client-P324NGTP.js", imports: ["/build/_shared/chunk-K5QHLV7Z.js", "/build/_shared/chunk-5KL4PAQL.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-R2DTEL3I.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/__auth": { id: "routes/__auth", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/__auth-JOSH24KI.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__auth/index": { id: "routes/__auth/index", parentId: "routes/__auth", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/__auth/index-ALM4RXXM.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__auth/login": { id: "routes/__auth/login", parentId: "routes/__auth", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/__auth/login-UQSMYZLS.js", imports: ["/build/_shared/chunk-YDOKAZYN.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__auth/signup": { id: "routes/__auth/signup", parentId: "routes/__auth", path: "signup", index: void 0, caseSensitive: void 0, module: "/build/routes/__auth/signup-ZQXLXBCO.js", imports: ["/build/_shared/chunk-YDOKAZYN.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/audiobooks": { id: "routes/audiobooks", parentId: "root", path: "audiobooks", index: void 0, caseSensitive: void 0, module: "/build/routes/audiobooks-FEV6BIXH.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/audiobooks/$bookid": { id: "routes/audiobooks/$bookid", parentId: "routes/audiobooks", path: ":bookid", index: void 0, caseSensitive: void 0, module: "/build/routes/audiobooks/$bookid-O5GIPASG.js", imports: ["/build/_shared/chunk-LNE2JUGL.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/audiobooks/index": { id: "routes/audiobooks/index", parentId: "routes/audiobooks", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/audiobooks/index-ZQNND3RI.js", imports: ["/build/_shared/chunk-LNE2JUGL.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/init": { id: "routes/init", parentId: "root", path: "init", index: void 0, caseSensitive: void 0, module: "/build/routes/init-6PTUCPY5.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-54GW2W2K.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-68002516.js" };

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
  "routes/audiobooks/$bookid": {
    id: "routes/audiobooks/$bookid",
    parentId: "routes/audiobooks",
    path: ":bookid",
    index: void 0,
    caseSensitive: void 0,
    module: bookid_exports
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
