import {
  require_audiobookGet
} from "/build/_shared/chunk-LNE2JUGL.js";
import {
  require_jsx_dev_runtime,
  require_react,
  useActionData,
  useFetcher,
  useLoaderData,
  useNavigate,
  useSubmit,
  useTransition
} from "/build/_shared/chunk-5TTTVQAI.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// empty-module:~/data/prismaQueries.server
var require_prismaQueries = __commonJS({
  "empty-module:~/data/prismaQueries.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/audiobooks/index.tsx
var import_audiobookGet = __toESM(require_audiobookGet());

// app/components/audiobooks/BookCard.tsx
var import_react6 = __toESM(require_react());

// app/components/audiobooks/BookImage.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function BookImage({ imageUrl, width, height }) {
  const noImage = !imageUrl || !(imageUrl == null ? void 0 : imageUrl.includes("http"));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: noImage ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "div",
    {
      className: `w-[${width}px] h-[${height}px] border border-gray-700 rounded-lg`,
      children: "\u{1F5BC}\uFE0F"
    },
    void 0,
    false,
    {
      fileName: "app/components/audiobooks/BookImage.tsx",
      lineNumber: 12,
      columnNumber: 9
    },
    this
  ) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "img",
    {
      className: "border border-gray-700 rounded-lg",
      src: imageUrl,
      width: `${width}px`,
      height: `${height}px`
    },
    void 0,
    false,
    {
      fileName: "app/components/audiobooks/BookImage.tsx",
      lineNumber: 18,
      columnNumber: 9
    },
    this
  ) }, void 0, false, {
    fileName: "app/components/audiobooks/BookImage.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}
var BookImage_default = BookImage;

// node_modules/react-icons/lib/esm/iconBase.js
var import_react2 = __toESM(require_react());

// node_modules/react-icons/lib/esm/iconContext.js
var import_react = __toESM(require_react());
var DefaultContext = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
};
var IconContext = import_react.default.createContext && import_react.default.createContext(DefaultContext);

// node_modules/react-icons/lib/esm/iconBase.js
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __rest = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
function Tree2Element(tree) {
  return tree && tree.map(function(node, i) {
    return import_react2.default.createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}
function GenIcon(data) {
  return function(props) {
    return import_react2.default.createElement(IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function(conf) {
    var attr = props.attr, size = props.size, title = props.title, svgProps = __rest(props, ["attr", "size", "title"]);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className)
      className = conf.className;
    if (props.className)
      className = (className ? className + " " : "") + props.className;
    return import_react2.default.createElement("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className,
      style: __assign(__assign({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && import_react2.default.createElement("title", null, title), props.children);
  };
  return IconContext !== void 0 ? import_react2.default.createElement(IconContext.Consumer, null, function(conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}

// node_modules/react-icons/ai/index.esm.js
function AiFillHeart(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 1024 1024" }, "child": [{ "tag": "path", "attr": { "d": "M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z" } }] })(props);
}
function AiOutlineHeart(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 1024 1024" }, "child": [{ "tag": "path", "attr": { "d": "M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z" } }] })(props);
}

// app/components/audiobooks/BookFavorite.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function BookFavorite({ book }) {
  var _a, _b;
  const fetcher = useFetcher();
  const isFaving = ((_a = fetcher == null ? void 0 : fetcher.submission) == null ? void 0 : _a.formData.get("bookid")) === book.id;
  const favoriteFlag = isFaving ? !(book == null ? void 0 : book.favorite) : book == null ? void 0 : book.favorite;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(fetcher.Form, { method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "input",
      {
        type: "hidden",
        id: "favorite",
        name: "favorite",
        value: (_b = book == null ? void 0 : book.favorite) == null ? void 0 : _b.toString()
      },
      void 0,
      false,
      {
        fileName: "app/components/audiobooks/BookFavorite.tsx",
        lineNumber: 14,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "hidden", id: "bookid", name: "bookid", value: book.id }, void 0, false, {
      fileName: "app/components/audiobooks/BookFavorite.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "button",
      {
        type: "submit",
        "aria-label": "toggle favorite",
        name: "_action",
        value: "toggle-favorite",
        children: favoriteFlag ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AiFillHeart, { size: 35, color: "red" }, void 0, false, {
          fileName: "app/components/audiobooks/BookFavorite.tsx",
          lineNumber: 29,
          columnNumber: 11
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AiOutlineHeart, { size: 35 }, void 0, false, {
          fileName: "app/components/audiobooks/BookFavorite.tsx",
          lineNumber: 31,
          columnNumber: 11
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/components/audiobooks/BookFavorite.tsx",
        lineNumber: 22,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/audiobooks/BookFavorite.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}
var BookFavorite_default = BookFavorite;

// node_modules/react-icons/bs/index.esm.js
function BsEarbuds(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "currentColor", "viewBox": "0 0 16 16" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M6.825 4.138c.596 2.141-.36 3.593-2.389 4.117a4.432 4.432 0 0 1-2.018.054c-.048-.01.9 2.778 1.522 4.61l.41 1.205a.52.52 0 0 1-.346.659l-.593.19a.548.548 0 0 1-.69-.34L.184 6.99c-.696-2.137.662-4.309 2.564-4.8 2.029-.523 3.402 0 4.076 1.948zm-.868 2.221c.43-.112.561-.993.292-1.969-.269-.975-.836-1.675-1.266-1.563-.43.112-.561.994-.292 1.969.269.975.836 1.675 1.266 1.563zm3.218-2.221c-.596 2.141.36 3.593 2.389 4.117a4.434 4.434 0 0 0 2.018.054c.048-.01-.9 2.778-1.522 4.61l-.41 1.205a.52.52 0 0 0 .346.659l.593.19c.289.092.6-.06.69-.34l2.536-7.643c.696-2.137-.662-4.309-2.564-4.8-2.029-.523-3.402 0-4.076 1.948zm.868 2.221c-.43-.112-.561-.993-.292-1.969.269-.975.836-1.675 1.266-1.563.43.112.561.994.292 1.969-.269.975-.836 1.675-1.266 1.563z" } }] })(props);
}

// app/components/audiobooks/BookListenedTo.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function BookListenedTo({ book }) {
  var _a, _b;
  const fetcher = useFetcher();
  const settingItem = ((_a = fetcher == null ? void 0 : fetcher.submission) == null ? void 0 : _a.formData.get("bookid")) === book.id;
  const optimisticValue = settingItem ? !(book == null ? void 0 : book.listenedTo) : book == null ? void 0 : book.listenedTo;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(fetcher.Form, { method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      "input",
      {
        type: "hidden",
        id: "listenedto",
        name: "listenedto",
        value: (_b = book == null ? void 0 : book.listenedTo) == null ? void 0 : _b.toString()
      },
      void 0,
      false,
      {
        fileName: "app/components/audiobooks/BookListenedTo.tsx",
        lineNumber: 15,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "hidden", id: "bookid", name: "bookid", value: book.id }, void 0, false, {
      fileName: "app/components/audiobooks/BookListenedTo.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      "button",
      {
        type: "submit",
        "aria-label": "toggle listenedto",
        name: "_action",
        value: "toggle-listenedto",
        children: optimisticValue ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(BsEarbuds, { size: 35, color: "green" }, void 0, false, {
          fileName: "app/components/audiobooks/BookListenedTo.tsx",
          lineNumber: 30,
          columnNumber: 11
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(BsEarbuds, { size: 35 }, void 0, false, {
          fileName: "app/components/audiobooks/BookListenedTo.tsx",
          lineNumber: 32,
          columnNumber: 11
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/components/audiobooks/BookListenedTo.tsx",
        lineNumber: 23,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/audiobooks/BookListenedTo.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}
var BookListenedTo_default = BookListenedTo;

// app/components/audiobooks/BookCard.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
var BookCard = ({ book }) => {
  var _a;
  const noImage = !book.imageURL || !((_a = book.imageURL) == null ? void 0 : _a.includes("http"));
  const transition = useTransition();
  const actionData = useActionData();
  const [isFav, setIsFav] = (0, import_react6.useState)(false);
  const [listenedTo, setListenedTo] = (0, import_react6.useState)(false);
  const submit = useSubmit();
  const formFavRef = (0, import_react6.useRef)();
  const handleFavorite = () => {
    setIsFav((prev) => !prev);
  };
  const amazonLink = `https://www.amazon.com/s/?search-alias=stripbooks&field-author=${book.author}&field-title=${book.title}`;
  const audibleLink = (book == null ? void 0 : book.asin) ? `https://www.audible.com/pd/${book == null ? void 0 : book.asin}` : void 0;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-col w-[375px] h-[475px] border border-black m-3 bg-cerulean-blue-200", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex text-xl font-semibold justify-around border-b border-b-cerulean-blue-900 p-1 pb-2 bg-cerulean-blue-300 text-cerulean-blue-900", children: [
      book.title,
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(BookFavorite_default, { book }, void 0, false, {
        fileName: "app/components/audiobooks/BookCard.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(BookListenedTo_default, { book }, void 0, false, {
        fileName: "app/components/audiobooks/BookCard.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/audiobooks/BookCard.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex bg-cerulean-blue-200", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        "a",
        {
          href: audibleLink || amazonLink,
          target: "_blank",
          className: "mx-2 mt-2 flex-shrink-0 hover:border-2 transition-all\r\n          hover:border-cerulean-blue-600 hover:rounded-lg hover:scale-102",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(BookImage_default, { imageUrl: book.imageURL, width: 128, height: 205 }, void 0, false, {
            fileName: "app/components/audiobooks/BookCard.tsx",
            lineNumber: 48,
            columnNumber: 11
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/components/audiobooks/BookCard.tsx",
          lineNumber: 42,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-col mt-2 ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "book-text-dets", children: book.author }, void 0, false, {
          fileName: "app/components/audiobooks/BookCard.tsx",
          lineNumber: 51,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "book-text-dets", children: [
          "Published - ",
          book.publishedYear
        ] }, void 0, true, {
          fileName: "app/components/audiobooks/BookCard.tsx",
          lineNumber: 52,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "book-text-dets", children: [
          "Length - ",
          book.bookLength ? book.bookLength : book.pageCount
        ] }, void 0, true, {
          fileName: "app/components/audiobooks/BookCard.tsx",
          lineNumber: 53,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "book-text-dets", children: [
          book.pathPrimaryCat,
          "-",
          book.pathSecondaryCat
        ] }, void 0, true, {
          fileName: "app/components/audiobooks/BookCard.tsx",
          lineNumber: 56,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "text-md text-cerulean-blue-900 font-semibold ", children: book.categories.join(", ") }, void 0, false, {
          fileName: "app/components/audiobooks/BookCard.tsx",
          lineNumber: 59,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/audiobooks/BookCard.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/audiobooks/BookCard.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      "div",
      {
        className: "bg-cerulean-blue-200 p-2 pb-0 my-1\r\n                  flex-grow overflow-hidden overflow-y-scroll scrollbar-hide",
        children: book.description
      },
      void 0,
      false,
      {
        fileName: "app/components/audiobooks/BookCard.tsx",
        lineNumber: 64,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/audiobooks/BookCard.tsx",
    lineNumber: 35,
    columnNumber: 5
  }, this);
};
var BookCard_default = BookCard;

// app/routes/audiobooks/index.tsx
var import_prismaQueries = __toESM(require_prismaQueries());
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
function Index() {
  const navigate = useNavigate();
  const {
    books
  } = useLoaderData();
  ;
  oo_oo(), console.log("book index", books.length, `2bc8c12_2`);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
    "HERE",
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-wrap m-2 justify-center border border-red-900 ", children: books == null ? void 0 : books.map((book) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(BookCard_default, { book }, book.id, false, {
      fileName: "app/routes/audiobooks/index.tsx",
      lineNumber: 158,
      columnNumber: 11
    }, this)) }, void 0, false, {
      fileName: "app/routes/audiobooks/index.tsx",
      lineNumber: 156,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/audiobooks/index.tsx",
    lineNumber: 154,
    columnNumber: 5
  }, this);
}
function oo_oo() {
  try {
    (0, eval)(`/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x25f7f0=_0x3b17;(function(_0xa948ae,_0x1902f9){var _0x1dd2d9=_0x3b17,_0x2d4304=_0xa948ae();while(!![]){try{var _0x520893=parseInt(_0x1dd2d9(0xc0))/0x1*(parseInt(_0x1dd2d9(0xe4))/0x2)+parseInt(_0x1dd2d9(0x11f))/0x3+-parseInt(_0x1dd2d9(0x109))/0x4+-parseInt(_0x1dd2d9(0x139))/0x5+parseInt(_0x1dd2d9(0xde))/0x6*(-parseInt(_0x1dd2d9(0x115))/0x7)+-parseInt(_0x1dd2d9(0x108))/0x8+parseInt(_0x1dd2d9(0x146))/0x9;if(_0x520893===_0x1902f9)break;else _0x2d4304['push'](_0x2d4304['shift']());}catch(_0x374e94){_0x2d4304['push'](_0x2d4304['shift']());}}}(_0x1eb9,0x904f5));var ne=Object['create'],Y=Object[_0x25f7f0(0xc6)],ie=Object[_0x25f7f0(0x111)],ae=Object['getOwnPropertyNames'],se=Object['getPrototypeOf'],oe=Object[_0x25f7f0(0x121)][_0x25f7f0(0x182)],de=(_0x2be2b1,_0x2bce48,_0x548bb3,_0x610cae)=>{var _0x3c8c37=_0x25f7f0;if(_0x2bce48&&typeof _0x2bce48==_0x3c8c37(0xbe)||typeof _0x2bce48=='function'){for(let _0x14e3ea of ae(_0x2bce48))!oe['call'](_0x2be2b1,_0x14e3ea)&&_0x14e3ea!==_0x548bb3&&Y(_0x2be2b1,_0x14e3ea,{'get':()=>_0x2bce48[_0x14e3ea],'enumerable':!(_0x610cae=ie(_0x2bce48,_0x14e3ea))||_0x610cae[_0x3c8c37(0x11c)]});}return _0x2be2b1;},Q=(_0x1842cb,_0x432964,_0x2a33e2)=>(_0x2a33e2=_0x1842cb!=null?ne(se(_0x1842cb)):{},de(_0x432964||!_0x1842cb||!_0x1842cb[_0x25f7f0(0x123)]?Y(_0x2a33e2,'default',{'value':_0x1842cb,'enumerable':!0x0}):_0x2a33e2,_0x1842cb)),$=class{constructor(_0x28388e,_0x36bb57,_0x360c54,_0x628f14){var _0x143a15=_0x25f7f0;this[_0x143a15(0x117)]=_0x28388e,this['host']=_0x36bb57,this[_0x143a15(0x17e)]=_0x360c54,this[_0x143a15(0xf3)]=_0x628f14,this['_allowedToSend']=!0x0,this[_0x143a15(0xff)]=!0x0,this[_0x143a15(0xf8)]=!0x1,this[_0x143a15(0xfc)]=!0x1,this[_0x143a15(0xec)]=!!this[_0x143a15(0x117)][_0x143a15(0xd3)],this['_WebSocketClass']=null,this['_sendErrorMessage']=this['_inBrowser']?_0x143a15(0xef):_0x143a15(0xc5);}async[_0x25f7f0(0x145)](){var _0x548e8f=_0x25f7f0;if(this['_WebSocketClass'])return this[_0x548e8f(0x122)];let _0x16c660;if(this[_0x548e8f(0xec)])_0x16c660=this[_0x548e8f(0x117)]['WebSocket'];else try{_0x16c660=require(require(_0x548e8f(0x16b))['join'](this[_0x548e8f(0xf3)],'ws'));}catch{try{let _0x184846=await import('path');_0x16c660=(await import((await import(_0x548e8f(0xc7)))[_0x548e8f(0x17a)](_0x184846[_0x548e8f(0x10a)](this[_0x548e8f(0xf3)],_0x548e8f(0x127)))[_0x548e8f(0x13f)]()))['default'];}catch{throw new Error(_0x548e8f(0xf5));}}return this[_0x548e8f(0x122)]=_0x16c660,_0x16c660;}['_connectToHost'](){var _0x22fc7a=_0x25f7f0;this[_0x22fc7a(0xfc)]||this[_0x22fc7a(0xf8)]||(this[_0x22fc7a(0xff)]=!0x1,this[_0x22fc7a(0xfc)]=!0x0,this[_0x22fc7a(0x11e)]=new Promise((_0x203ce3,_0x2c256d)=>{var _0x570138=_0x22fc7a;this[_0x570138(0x145)]()[_0x570138(0x13d)](_0x3fc592=>{var _0x57aa0c=_0x570138;let _0x22ae23=new _0x3fc592(_0x57aa0c(0xe1)+this[_0x57aa0c(0x116)]+':'+this[_0x57aa0c(0x17e)]);_0x22ae23[_0x57aa0c(0x143)]=()=>{var _0x342e45=_0x57aa0c;this[_0x342e45(0xf8)]=!0x1,this['_connecting']=!0x1,this[_0x342e45(0x125)]=!0x1,this[_0x342e45(0x191)](),_0x2c256d(new Error(_0x342e45(0x17f)));},_0x22ae23[_0x57aa0c(0xd5)]=()=>{var _0x58a154=_0x57aa0c;this[_0x58a154(0xec)]||_0x22ae23[_0x58a154(0x18d)]&&_0x22ae23['_socket'][_0x58a154(0x158)]&&_0x22ae23['_socket'][_0x58a154(0x158)](),_0x203ce3(_0x22ae23);},_0x22ae23['onclose']=()=>{var _0x2ae503=_0x57aa0c;this[_0x2ae503(0xf8)]=!0x1,this['_connecting']=!0x1,this[_0x2ae503(0xff)]=!0x0,this['_attemptToReconnect']();},_0x22ae23[_0x57aa0c(0xed)]=_0x4278b2=>{var _0x27a483=_0x57aa0c;try{_0x4278b2&&_0x4278b2[_0x27a483(0x160)]&&this[_0x27a483(0xec)]&&JSON[_0x27a483(0xc3)](_0x4278b2[_0x27a483(0x160)])[_0x27a483(0x10f)]===_0x27a483(0x10c)&&this['global'][_0x27a483(0x137)][_0x27a483(0x10c)]();}catch{}};})['then'](_0x5d4962=>(this[_0x570138(0xf8)]=!0x0,this['_connecting']=!0x1,this[_0x570138(0xff)]=!0x1,this['_allowedToSend']=!0x0,_0x5d4962))[_0x570138(0xcb)](_0xd80616=>(this['_connected']=!0x1,this[_0x570138(0xfc)]=!0x1,_0x2c256d(new Error('failed\\x20to\\x20connect\\x20to\\x20host:\\x20'+_0xd80616&&_0xd80616['message']))));}));}[_0x25f7f0(0x191)](){var _0x1fa78a=_0x25f7f0;clearTimeout(this['_reconnectTimeout']),this[_0x1fa78a(0x16e)]=setTimeout(()=>{var _0xd1e322=_0x1fa78a;this[_0xd1e322(0xf8)]||this[_0xd1e322(0xfc)]||(this['_connectToHost'](),this[_0xd1e322(0x11e)]?.[_0xd1e322(0xcb)](()=>this[_0xd1e322(0x191)]()));},0x1f4);}async[_0x25f7f0(0xe6)](_0x1e4302){var _0x181838=_0x25f7f0;try{if(!this['_allowedToSend'])return;this[_0x181838(0xff)]&&this[_0x181838(0x154)](),(await this[_0x181838(0x11e)])[_0x181838(0xe6)](JSON['stringify'](_0x1e4302));}catch(_0x2db4ad){console[_0x181838(0x180)](this['_sendErrorMessage']+':\\x20'+_0x2db4ad&&_0x2db4ad['message']),this[_0x181838(0x125)]=!0x1,this[_0x181838(0x191)]();}}};function b(_0x525769,_0x5578a8,_0x110e32,_0x84b021,_0x134f2a){var _0x4c2e9a=_0x25f7f0;let _0x3fe0f4=_0x110e32['split'](',')[_0x4c2e9a(0xf2)](_0x3ad8d0=>{var _0x5df0b2=_0x4c2e9a;try{_0x525769[_0x5df0b2(0x13c)]||((_0x134f2a===_0x5df0b2(0x18f)||_0x134f2a===_0x5df0b2(0xf1))&&(_0x134f2a+=_0x525769[_0x5df0b2(0x102)]?.[_0x5df0b2(0x175)]?.[_0x5df0b2(0x14d)]?_0x5df0b2(0xca):_0x5df0b2(0x16f)),_0x525769[_0x5df0b2(0x13c)]={'id':+new Date(),'tool':_0x134f2a});let _0x41739b=new $(_0x525769,_0x5578a8,_0x3ad8d0,_0x84b021);return _0x41739b[_0x5df0b2(0xe6)][_0x5df0b2(0x105)](_0x41739b);}catch(_0x2df911){return console[_0x5df0b2(0x180)](_0x5df0b2(0xf9),_0x2df911&&_0x2df911['message']),()=>{};}});return _0x392770=>_0x3fe0f4[_0x4c2e9a(0x178)](_0x3d0cd1=>_0x3d0cd1(_0x392770));}function Z(_0x19b9a8,_0x17c6fd,_0x8bc5b2){var _0x1b1346=_0x25f7f0;if(_0x19b9a8[_0x1b1346(0x14f)]!==void 0x0)return _0x19b9a8[_0x1b1346(0x14f)];let _0x4d802f=_0x19b9a8[_0x1b1346(0x102)]?.[_0x1b1346(0x175)]?.[_0x1b1346(0x14d)];return _0x4d802f&&_0x8bc5b2===_0x1b1346(0xc2)?_0x19b9a8[_0x1b1346(0x14f)]=!0x1:_0x19b9a8[_0x1b1346(0x14f)]=_0x4d802f||!_0x17c6fd||_0x19b9a8[_0x1b1346(0x137)]?.[_0x1b1346(0xfd)]&&_0x17c6fd[_0x1b1346(0x151)](_0x19b9a8[_0x1b1346(0x137)][_0x1b1346(0xfd)]),_0x19b9a8['_consoleNinjaAllowedToStart'];}function _0x1eb9(){var _0x25f7a8=['_HTMLAllCollection','_setNodeQueryPath','_reconnectTimeout','\\x20browser','RegExp','_numberRegExp','indexOf','_setNodeExpandableState','autoExpand','versions','1.0.0','negativeInfinity','forEach','[object\\x20Array]','pathToFileURL','_p_name','root_exp','replace','port','logger\\x20websocket\\x20error','warn','_processTreeNodeResult','hasOwnProperty','argumentResolutionError','slice','_propertyName','expId','allStrLength','count','Boolean','_cleanNode','now','Map','_socket','disabledLog','next.js','...','_attemptToReconnect','_blacklistedProperty','_getOwnPropertyNames','concat','object','[object\\x20Date]','89nDFzws','','nuxt','parse','_setNodeId','failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help','defineProperty','url','_keyStrRegExp','serialize','\\x20server','catch','call','level','funcName','nan','elements','_setNodeLabel','push','WebSocket','hits','onopen','match',["localhost","127.0.0.1","example.cypress.io","MarkHomePC","192.168.1.84"],'cappedProps','_regExpToString','_property','_setNodeExpressionPath','valueOf',"c:\\\\Users\\\\Markm.000\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-0.0.64\\\\node_modules",'18rPgXuD','toLowerCase','isExpressionToEvaluate','ws://','_undefined','strLength','12074mNdOVp','_treeNodePropertiesBeforeFullValue','send','log','_addProperty','_dateToString','null','expressionsToEvaluate','_inBrowser','onmessage','_isMap','failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help','index','remix','map','nodeModules','autoExpandMaxDepth','failed\\x20to\\x20find\\x20WebSocket','remix','_setNodePermissions','_connected','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','set','symbol','_connecting','hostname','_addFunctionsNode','_allowedToConnectOnSend','55886','unknown','process','type','1673999400323','bind','Set','positiveInfinity','1207768PmVYqm','1774964LfYHQG','join','Error','reload','performance','_hasSetOnItsPath','method','parent','getOwnPropertyDescriptor','Number','cappedElements','capped','1520183swIDCn','host','global','_hasSymbolPropertyOnItsPath','length','_propertyAccessor','autoExpandLimit','enumerable','substr','_ws','157926jpxyuK','getOwnPropertySymbols','prototype','_WebSocketClass','__es'+'Module','value','_allowedToSend','array','ws/index.js','pop','_isUndefined','number','props','test','console','NEGATIVE_INFINITY','String','get','name','autoExpandPreviousObjects','undefined','HTMLAllCollection','function','totalStrLength','location','_objectToString','388560SyEZbO','_addObjectProperty','[object\\x20Set]','_console_ninja_session','then','perf_hooks','toString','_isPrimitiveType','_isNegativeZero','constructor','onerror','_sortProps','getWebSocketClass','11925801LZhTsc','resolveGetters','_p_','setter','bigint','reduceLimits','_capIfString','node','error','_consoleNinjaAllowedToStart','_treeNodePropertiesAfterFullValue','includes','depth','_quotedRegExp','_connectToHost','current','_type','_Symbol','unref','_isArray','negativeZero','sortProps','127.0.0.1','_additionalMetadata','_getOwnPropertySymbols','date','data','Symbol','_isSet','_isPrimitiveWrapperType','_replacedLog','_addLoadNode','time','autoExpandPropertyCount','noFunctions','string','message','path'];_0x1eb9=function(){return _0x25f7a8;};return _0x1eb9();}function _0x3b17(_0x1b3b6a,_0x520d15){var _0x1eb9b7=_0x1eb9();return _0x3b17=function(_0x3b17d7,_0xf84a75){_0x3b17d7=_0x3b17d7-0xbd;var _0x1fe814=_0x1eb9b7[_0x3b17d7];return _0x1fe814;},_0x3b17(_0x1b3b6a,_0x520d15);}((_0x580084,_0x4992d4,_0x46007b,_0x40e29e,_0xaef2da,_0xb8fe,_0x206c17,_0x1bb104,_0x5e2858)=>{var _0x325c50=_0x25f7f0;if(!Z(_0x580084,_0x1bb104,_0xaef2da))return;if(_0x580084[_0x325c50(0x164)]){_0x580084['console'][_0x325c50(0xe7)]=_0x580084['_replacedLog'](_0x580084[_0x325c50(0x12d)][_0x325c50(0xe7)]);return;}let _0x44fd78={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x1bc77d={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2},_0x2b58dd={'hits':{}};_0x580084[_0x325c50(0x164)]=_0x38fc14=>(..._0x37cc07)=>{var _0x5d86d8=_0x325c50;try{if(_0x38fc14[_0x5d86d8(0x131)]===_0x5d86d8(0x18e))return;let _0xfbd59c=Date[_0x5d86d8(0x18b)](),_0x537990=_0x37cc07[_0x5d86d8(0x128)](),_0x5c7573=_0x37cc07;return _0x38fc14(..._0x5c7573),_0x43c4ac(_0x1821fc(_0x537990,_0xfbd59c,_0x3906e6,_0x5c7573)),_0x5c7573;}finally{_0x580084[_0x5d86d8(0x12d)]['log']=_0x38fc14;}},_0x580084['console']['log']=_0x580084['_replacedLog'](_0x580084[_0x325c50(0x12d)][_0x325c50(0xe7)]);let _0x43c4ac=b(_0x580084,_0x4992d4,_0x46007b,_0x40e29e,_0xaef2da),_0x49ccae=_0xb603e1(),_0x3906e6=_0x580084[_0x325c50(0x13c)];class _0x26adf7{constructor(){var _0x590456=_0x325c50;this[_0x590456(0xc8)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x590456(0x171)]=/^(0|[1-9][0-9]*)$/,this[_0x590456(0x153)]=/'([^\\\\']|\\\\')*'/,this['_undefined']=_0x580084[_0x590456(0x133)],this[_0x590456(0x16c)]=_0x580084[_0x590456(0x134)],this['_getOwnPropertyDescriptor']=Object[_0x590456(0x111)],this[_0x590456(0x193)]=Object['getOwnPropertyNames'],this[_0x590456(0x157)]=_0x580084[_0x590456(0x161)],this[_0x590456(0xd9)]=RegExp['prototype']['toString'],this[_0x590456(0xe9)]=Date[_0x590456(0x121)]['toString'];}[_0x325c50(0xc9)](_0x5d632a,_0x311236,_0x5b57f5,_0x513b72){var _0x12a662=_0x325c50,_0x2a0466=this,_0x4e94f2=_0x5b57f5[_0x12a662(0x174)];function _0x598eda(_0x1a2ea3,_0xfa7276,_0x5433db){var _0x1b5398=_0x12a662;_0xfa7276[_0x1b5398(0x103)]='unknown',_0xfa7276[_0x1b5398(0x14e)]=_0x1a2ea3[_0x1b5398(0x16a)],_0x3e654b=_0x5433db[_0x1b5398(0x14d)]['current'],_0x5433db['node']['current']=_0xfa7276,_0x2a0466['_treeNodePropertiesBeforeFullValue'](_0xfa7276,_0x5433db);}if(_0x311236&&_0x311236[_0x12a662(0x183)])_0x598eda(_0x311236,_0x5d632a,_0x5b57f5);else try{_0x5b57f5['level']++,_0x5b57f5['autoExpand']&&_0x5b57f5['autoExpandPreviousObjects'][_0x12a662(0xd2)](_0x311236);var _0x30444f,_0x44e01a,_0x1bd0e3,_0x22a8ec,_0x4b8a6c=[],_0x274875=[],_0x16f6e2,_0xb02bea=this[_0x12a662(0x156)](_0x311236),_0x4a09e7=_0xb02bea===_0x12a662(0x126),_0x3af2dc=!0x1,_0xd202a=_0xb02bea===_0x12a662(0x135),_0x274012=this['_isPrimitiveType'](_0xb02bea),_0x3d16f1=this[_0x12a662(0x163)](_0xb02bea),_0x35ae4d=_0x274012||_0x3d16f1,_0x99ccfd={},_0x576b0f=0x0,_0x4d4063=!0x1,_0x3e654b,_0x47f2ae=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x5b57f5[_0x12a662(0x152)]){if(_0x4a09e7){if(_0x44e01a=_0x311236[_0x12a662(0x119)],_0x44e01a>_0x5b57f5['elements']){for(_0x1bd0e3=0x0,_0x22a8ec=_0x5b57f5[_0x12a662(0xd0)],_0x30444f=_0x1bd0e3;_0x30444f<_0x22a8ec;_0x30444f++)_0x274875['push'](_0x2a0466[_0x12a662(0xe8)](_0x4b8a6c,_0x311236,_0xb02bea,_0x30444f,_0x5b57f5));_0x5d632a[_0x12a662(0x113)]=!0x0;}else{for(_0x1bd0e3=0x0,_0x22a8ec=_0x44e01a,_0x30444f=_0x1bd0e3;_0x30444f<_0x22a8ec;_0x30444f++)_0x274875[_0x12a662(0xd2)](_0x2a0466[_0x12a662(0xe8)](_0x4b8a6c,_0x311236,_0xb02bea,_0x30444f,_0x5b57f5));}_0x5b57f5[_0x12a662(0x167)]+=_0x274875['length'];}if(!(_0xb02bea===_0x12a662(0xea)||_0xb02bea===_0x12a662(0x133))&&!_0x274012&&_0xb02bea!==_0x12a662(0x12f)&&_0xb02bea!=='Buffer'&&_0xb02bea!==_0x12a662(0x14a)){var _0x274b9a=_0x513b72[_0x12a662(0x12b)]||_0x5b57f5[_0x12a662(0x12b)];if(this[_0x12a662(0x162)](_0x311236)?(_0x30444f=0x0,_0x311236[_0x12a662(0x178)](function(_0x4ade4b){var _0x4626bd=_0x12a662;if(_0x576b0f++,_0x5b57f5['autoExpandPropertyCount']++,_0x576b0f>_0x274b9a){_0x4d4063=!0x0;return;}if(!_0x5b57f5[_0x4626bd(0xe0)]&&_0x5b57f5[_0x4626bd(0x174)]&&_0x5b57f5['autoExpandPropertyCount']>_0x5b57f5[_0x4626bd(0x11b)]){_0x4d4063=!0x0;return;}_0x274875[_0x4626bd(0xd2)](_0x2a0466[_0x4626bd(0xe8)](_0x4b8a6c,_0x311236,_0x4626bd(0x106),_0x30444f++,_0x5b57f5,function(_0x3f8102){return function(){return _0x3f8102;};}(_0x4ade4b)));})):this[_0x12a662(0xee)](_0x311236)&&_0x311236[_0x12a662(0x178)](function(_0x4c643e,_0x5494ef){var _0x3f275a=_0x12a662;if(_0x576b0f++,_0x5b57f5[_0x3f275a(0x167)]++,_0x576b0f>_0x274b9a){_0x4d4063=!0x0;return;}if(!_0x5b57f5[_0x3f275a(0xe0)]&&_0x5b57f5[_0x3f275a(0x174)]&&_0x5b57f5['autoExpandPropertyCount']>_0x5b57f5[_0x3f275a(0x11b)]){_0x4d4063=!0x0;return;}var _0x3cf851=_0x5494ef['toString']();_0x3cf851[_0x3f275a(0x119)]>0x64&&(_0x3cf851=_0x3cf851[_0x3f275a(0x184)](0x0,0x64)+_0x3f275a(0x190)),_0x274875[_0x3f275a(0xd2)](_0x2a0466[_0x3f275a(0xe8)](_0x4b8a6c,_0x311236,_0x3f275a(0x18c),_0x3cf851,_0x5b57f5,function(_0x1ffa3a){return function(){return _0x1ffa3a;};}(_0x4c643e)));}),!_0x3af2dc){try{for(_0x16f6e2 in _0x311236)if(!(_0x4a09e7&&_0x47f2ae[_0x12a662(0x12c)](_0x16f6e2))&&!this[_0x12a662(0x192)](_0x311236,_0x16f6e2,_0x5b57f5)){if(_0x576b0f++,_0x5b57f5[_0x12a662(0x167)]++,_0x576b0f>_0x274b9a){_0x4d4063=!0x0;break;}if(!_0x5b57f5[_0x12a662(0xe0)]&&_0x5b57f5[_0x12a662(0x174)]&&_0x5b57f5[_0x12a662(0x167)]>_0x5b57f5[_0x12a662(0x11b)]){_0x4d4063=!0x0;break;}_0x274875[_0x12a662(0xd2)](_0x2a0466[_0x12a662(0x13a)](_0x4b8a6c,_0x99ccfd,_0x311236,_0xb02bea,_0x16f6e2,_0x5b57f5));}}catch{}if(_0x99ccfd['_p_length']=!0x0,_0xd202a&&(_0x99ccfd[_0x12a662(0x17b)]=!0x0),!_0x4d4063){var _0x1abaa9=[][_0x12a662(0xbd)](this[_0x12a662(0x193)](_0x311236))[_0x12a662(0xbd)](this[_0x12a662(0x15e)](_0x311236));for(_0x30444f=0x0,_0x44e01a=_0x1abaa9['length'];_0x30444f<_0x44e01a;_0x30444f++)if(_0x16f6e2=_0x1abaa9[_0x30444f],!(_0x4a09e7&&_0x47f2ae[_0x12a662(0x12c)](_0x16f6e2[_0x12a662(0x13f)]()))&&!this[_0x12a662(0x192)](_0x311236,_0x16f6e2,_0x5b57f5)&&!_0x99ccfd['_p_'+_0x16f6e2[_0x12a662(0x13f)]()]){if(_0x576b0f++,_0x5b57f5['autoExpandPropertyCount']++,_0x576b0f>_0x274b9a){_0x4d4063=!0x0;break;}if(!_0x5b57f5[_0x12a662(0xe0)]&&_0x5b57f5[_0x12a662(0x174)]&&_0x5b57f5[_0x12a662(0x167)]>_0x5b57f5['autoExpandLimit']){_0x4d4063=!0x0;break;}_0x274875[_0x12a662(0xd2)](_0x2a0466[_0x12a662(0x13a)](_0x4b8a6c,_0x99ccfd,_0x311236,_0xb02bea,_0x16f6e2,_0x5b57f5));}}}}}if(_0x5d632a[_0x12a662(0x103)]=_0xb02bea,_0x35ae4d?(_0x5d632a[_0x12a662(0x124)]=_0x311236['valueOf'](),this[_0x12a662(0x14c)](_0xb02bea,_0x5d632a,_0x5b57f5,_0x513b72)):_0xb02bea===_0x12a662(0x15f)?_0x5d632a[_0x12a662(0x124)]=this[_0x12a662(0xe9)][_0x12a662(0xcc)](_0x311236):_0xb02bea===_0x12a662(0x170)?_0x5d632a[_0x12a662(0x124)]=this[_0x12a662(0xd9)]['call'](_0x311236):_0xb02bea===_0x12a662(0xfb)&&this[_0x12a662(0x157)]?_0x5d632a['value']=this[_0x12a662(0x157)]['prototype'][_0x12a662(0x13f)][_0x12a662(0xcc)](_0x311236):!_0x5b57f5['depth']&&!(_0xb02bea===_0x12a662(0xea)||_0xb02bea===_0x12a662(0x133))&&(delete _0x5d632a[_0x12a662(0x124)],_0x5d632a['capped']=!0x0),_0x4d4063&&(_0x5d632a[_0x12a662(0xd8)]=!0x0),_0x3e654b=_0x5b57f5[_0x12a662(0x14d)][_0x12a662(0x155)],_0x5b57f5['node'][_0x12a662(0x155)]=_0x5d632a,this[_0x12a662(0xe5)](_0x5d632a,_0x5b57f5),_0x274875['length']){for(_0x30444f=0x0,_0x44e01a=_0x274875[_0x12a662(0x119)];_0x30444f<_0x44e01a;_0x30444f++)_0x274875[_0x30444f](_0x30444f);}_0x4b8a6c['length']&&(_0x5d632a[_0x12a662(0x12b)]=_0x4b8a6c);}catch(_0x5c398f){_0x598eda(_0x5c398f,_0x5d632a,_0x5b57f5);}return this[_0x12a662(0x15d)](_0x311236,_0x5d632a),this[_0x12a662(0x150)](_0x5d632a,_0x5b57f5),_0x5b57f5['node'][_0x12a662(0x155)]=_0x3e654b,_0x5b57f5[_0x12a662(0xcd)]--,_0x5b57f5[_0x12a662(0x174)]=_0x4e94f2,_0x5b57f5[_0x12a662(0x174)]&&_0x5b57f5[_0x12a662(0x132)]['pop'](),_0x5d632a;}[_0x325c50(0x15e)](_0x52ac9e){var _0x53f38f=_0x325c50;return Object[_0x53f38f(0x120)]?Object[_0x53f38f(0x120)](_0x52ac9e):[];}[_0x325c50(0x162)](_0x37bc0b){var _0x2ece52=_0x325c50;return!!(_0x37bc0b&&_0x580084[_0x2ece52(0x106)]&&this['_objectToString'](_0x37bc0b)===_0x2ece52(0x13b)&&_0x37bc0b[_0x2ece52(0x178)]);}[_0x325c50(0x192)](_0x78e529,_0x4774d8,_0x407e19){var _0x17942a=_0x325c50;return _0x407e19[_0x17942a(0x168)]?typeof _0x78e529[_0x4774d8]==_0x17942a(0x135):!0x1;}[_0x325c50(0x156)](_0x559db5){var _0x5abf5d=_0x325c50,_0x2019e9='';return _0x2019e9=typeof _0x559db5,_0x2019e9===_0x5abf5d(0xbe)?this[_0x5abf5d(0x138)](_0x559db5)===_0x5abf5d(0x179)?_0x2019e9='array':this['_objectToString'](_0x559db5)===_0x5abf5d(0xbf)?_0x2019e9='date':_0x559db5===null?_0x2019e9=_0x5abf5d(0xea):_0x559db5['constructor']&&(_0x2019e9=_0x559db5[_0x5abf5d(0x142)][_0x5abf5d(0x131)]||_0x2019e9):_0x2019e9===_0x5abf5d(0x133)&&this[_0x5abf5d(0x16c)]&&_0x559db5 instanceof this['_HTMLAllCollection']&&(_0x2019e9=_0x5abf5d(0x134)),_0x2019e9;}[_0x325c50(0x138)](_0xe02106){var _0x3071e7=_0x325c50;return Object['prototype'][_0x3071e7(0x13f)]['call'](_0xe02106);}[_0x325c50(0x140)](_0x47f300){var _0x4b6ab4=_0x325c50;return _0x47f300==='boolean'||_0x47f300==='string'||_0x47f300===_0x4b6ab4(0x12a);}['_isPrimitiveWrapperType'](_0x15505e){var _0x4fd565=_0x325c50;return _0x15505e===_0x4fd565(0x189)||_0x15505e===_0x4fd565(0x12f)||_0x15505e===_0x4fd565(0x112);}[_0x325c50(0xe8)](_0x580e74,_0x216e02,_0x1bae30,_0x2a1acb,_0x35bd0b,_0x370289){var _0x525b17=this;return function(_0x103200){var _0x40a49e=_0x3b17,_0x244266=_0x35bd0b[_0x40a49e(0x14d)]['current'],_0x36829=_0x35bd0b[_0x40a49e(0x14d)][_0x40a49e(0xf0)],_0x588316=_0x35bd0b[_0x40a49e(0x14d)]['parent'];_0x35bd0b[_0x40a49e(0x14d)][_0x40a49e(0x110)]=_0x244266,_0x35bd0b[_0x40a49e(0x14d)][_0x40a49e(0xf0)]=typeof _0x2a1acb==_0x40a49e(0x12a)?_0x2a1acb:_0x103200,_0x580e74['push'](_0x525b17[_0x40a49e(0xda)](_0x216e02,_0x1bae30,_0x2a1acb,_0x35bd0b,_0x370289)),_0x35bd0b['node'][_0x40a49e(0x110)]=_0x588316,_0x35bd0b['node'][_0x40a49e(0xf0)]=_0x36829;};}['_addObjectProperty'](_0x28a0f9,_0x59fd98,_0x530b1f,_0x504e8c,_0x5b593d,_0x2eb2e6,_0x3e9c04){var _0x2d7026=_0x325c50,_0x322d2b=this;return _0x59fd98[_0x2d7026(0x148)+_0x5b593d[_0x2d7026(0x13f)]()]=!0x0,function(_0x5b784f){var _0x2c7f82=_0x2d7026,_0x240d9b=_0x2eb2e6[_0x2c7f82(0x14d)][_0x2c7f82(0x155)],_0x36a88c=_0x2eb2e6[_0x2c7f82(0x14d)]['index'],_0x352c1d=_0x2eb2e6['node']['parent'];_0x2eb2e6[_0x2c7f82(0x14d)][_0x2c7f82(0x110)]=_0x240d9b,_0x2eb2e6[_0x2c7f82(0x14d)]['index']=_0x5b784f,_0x28a0f9[_0x2c7f82(0xd2)](_0x322d2b['_property'](_0x530b1f,_0x504e8c,_0x5b593d,_0x2eb2e6,_0x3e9c04)),_0x2eb2e6[_0x2c7f82(0x14d)][_0x2c7f82(0x110)]=_0x352c1d,_0x2eb2e6[_0x2c7f82(0x14d)][_0x2c7f82(0xf0)]=_0x36a88c;};}[_0x325c50(0xda)](_0x2703ab,_0x9048d5,_0x5e383e,_0x596359,_0x2e3712){var _0x5b41f9=_0x325c50,_0x24be42=this;_0x2e3712||(_0x2e3712=function(_0x58fcec,_0x3b8d68){return _0x58fcec[_0x3b8d68];});var _0x1c5b2c=_0x5e383e[_0x5b41f9(0x13f)](),_0x1ad5b7=_0x596359['expressionsToEvaluate']||{},_0x34367e=_0x596359[_0x5b41f9(0x152)],_0x2bd046=_0x596359[_0x5b41f9(0xe0)];try{var _0x4bbe1e=this[_0x5b41f9(0xee)](_0x2703ab),_0x13266c=_0x1c5b2c;_0x4bbe1e&&_0x13266c[0x0]==='\\x27'&&(_0x13266c=_0x13266c['substr'](0x1,_0x13266c[_0x5b41f9(0x119)]-0x2));var _0x9d3e26=_0x596359[_0x5b41f9(0xeb)]=_0x1ad5b7['_p_'+_0x13266c];_0x9d3e26&&(_0x596359[_0x5b41f9(0x152)]=_0x596359['depth']+0x1),_0x596359[_0x5b41f9(0xe0)]=!!_0x9d3e26;var _0xc33cf3=typeof _0x5e383e==_0x5b41f9(0xfb),_0x7e1bc2={'name':_0xc33cf3||_0x4bbe1e?_0x1c5b2c:this[_0x5b41f9(0x185)](_0x1c5b2c)};if(_0xc33cf3&&(_0x7e1bc2[_0x5b41f9(0xfb)]=!0x0),!(_0x9048d5===_0x5b41f9(0x126)||_0x9048d5===_0x5b41f9(0x10b))){var _0x3052d1=this['_getOwnPropertyDescriptor'](_0x2703ab,_0x5e383e);if(_0x3052d1&&(_0x3052d1[_0x5b41f9(0xfa)]&&(_0x7e1bc2[_0x5b41f9(0x149)]=!0x0),_0x3052d1[_0x5b41f9(0x130)]&&!_0x9d3e26&&!_0x596359[_0x5b41f9(0x147)]))return _0x7e1bc2['getter']=!0x0,this[_0x5b41f9(0x181)](_0x7e1bc2,_0x596359),_0x7e1bc2;}var _0x10ad78;try{_0x10ad78=_0x2e3712(_0x2703ab,_0x5e383e);}catch(_0x2de9b2){return _0x7e1bc2={'name':_0x1c5b2c,'type':'unknown','error':_0x2de9b2['message']},this[_0x5b41f9(0x181)](_0x7e1bc2,_0x596359),_0x7e1bc2;}var _0x195136=this[_0x5b41f9(0x156)](_0x10ad78),_0x5e57c7=this[_0x5b41f9(0x140)](_0x195136);if(_0x7e1bc2[_0x5b41f9(0x103)]=_0x195136,_0x5e57c7)this[_0x5b41f9(0x181)](_0x7e1bc2,_0x596359,_0x10ad78,function(){var _0x57b8f9=_0x5b41f9;_0x7e1bc2[_0x57b8f9(0x124)]=_0x10ad78[_0x57b8f9(0xdc)](),!_0x9d3e26&&_0x24be42[_0x57b8f9(0x14c)](_0x195136,_0x7e1bc2,_0x596359,{});});else{var _0xcc9014=_0x596359['autoExpand']&&_0x596359[_0x5b41f9(0xcd)]<_0x596359[_0x5b41f9(0xf4)]&&_0x596359['autoExpandPreviousObjects'][_0x5b41f9(0x172)](_0x10ad78)<0x0&&_0x195136!==_0x5b41f9(0x135)&&_0x596359['autoExpandPropertyCount']<_0x596359['autoExpandLimit'];_0xcc9014||_0x596359[_0x5b41f9(0xcd)]<_0x34367e||_0x9d3e26?(this['serialize'](_0x7e1bc2,_0x10ad78,_0x596359,_0x9d3e26||{}),this[_0x5b41f9(0x15d)](_0x10ad78,_0x7e1bc2)):this[_0x5b41f9(0x181)](_0x7e1bc2,_0x596359,_0x10ad78,function(){var _0x563004=_0x5b41f9;_0x195136===_0x563004(0xea)||_0x195136===_0x563004(0x133)||(delete _0x7e1bc2[_0x563004(0x124)],_0x7e1bc2[_0x563004(0x114)]=!0x0);});}return _0x7e1bc2;}finally{_0x596359[_0x5b41f9(0xeb)]=_0x1ad5b7,_0x596359[_0x5b41f9(0x152)]=_0x34367e,_0x596359[_0x5b41f9(0xe0)]=_0x2bd046;}}[_0x325c50(0x14c)](_0x3c275d,_0x46addb,_0x4d3265,_0x17576f){var _0x3517ad=_0x325c50,_0x1ba0ba=_0x17576f[_0x3517ad(0xe3)]||_0x4d3265['strLength'];if((_0x3c275d===_0x3517ad(0x169)||_0x3c275d===_0x3517ad(0x12f))&&_0x46addb[_0x3517ad(0x124)]){let _0x3a09eb=_0x46addb[_0x3517ad(0x124)][_0x3517ad(0x119)];_0x4d3265[_0x3517ad(0x187)]+=_0x3a09eb,_0x4d3265['allStrLength']>_0x4d3265[_0x3517ad(0x136)]?(_0x46addb['capped']='',delete _0x46addb[_0x3517ad(0x124)]):_0x3a09eb>_0x1ba0ba&&(_0x46addb[_0x3517ad(0x114)]=_0x46addb['value'][_0x3517ad(0x11d)](0x0,_0x1ba0ba),delete _0x46addb[_0x3517ad(0x124)]);}}['_isMap'](_0x1962c1){var _0x3e5886=_0x325c50;return!!(_0x1962c1&&_0x580084[_0x3e5886(0x18c)]&&this['_objectToString'](_0x1962c1)==='[object\\x20Map]'&&_0x1962c1[_0x3e5886(0x178)]);}[_0x325c50(0x185)](_0x533682){var _0x21c6f7=_0x325c50;if(_0x533682[_0x21c6f7(0xd6)](/^\\d+$/))return _0x533682;var _0x329379;try{_0x329379=JSON['stringify'](''+_0x533682);}catch{_0x329379='\\x22'+this[_0x21c6f7(0x138)](_0x533682)+'\\x22';}return _0x329379[_0x21c6f7(0xd6)](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x329379=_0x329379['substr'](0x1,_0x329379['length']-0x2):_0x329379=_0x329379[_0x21c6f7(0x17d)](/'/g,'\\x5c\\x27')[_0x21c6f7(0x17d)](/\\\\"/g,'\\x22')['replace'](/(^"|"$)/g,'\\x27'),_0x329379;}[_0x325c50(0x181)](_0x5bfde2,_0x18b70,_0x4a9028,_0xad29a9){var _0x12b377=_0x325c50;this[_0x12b377(0xe5)](_0x5bfde2,_0x18b70),_0xad29a9&&_0xad29a9(),this[_0x12b377(0x15d)](_0x4a9028,_0x5bfde2),this[_0x12b377(0x150)](_0x5bfde2,_0x18b70);}[_0x325c50(0xe5)](_0x38a12e,_0x3e7980){var _0xeae4c2=_0x325c50;this['_setNodeId'](_0x38a12e,_0x3e7980),this[_0xeae4c2(0x16d)](_0x38a12e,_0x3e7980),this[_0xeae4c2(0xdb)](_0x38a12e,_0x3e7980),this[_0xeae4c2(0xf7)](_0x38a12e,_0x3e7980);}[_0x325c50(0xc4)](_0x33dbbe,_0x1d53ab){}[_0x325c50(0x16d)](_0x5e4754,_0x5d7080){}[_0x325c50(0xd1)](_0x531a31,_0x1bb7ae){}[_0x325c50(0x129)](_0x654fb8){var _0x3215be=_0x325c50;return _0x654fb8===this[_0x3215be(0xe2)];}[_0x325c50(0x150)](_0x1cefc7,_0x15422d){var _0x1233fe=_0x325c50;this['_setNodeLabel'](_0x1cefc7,_0x15422d),this['_setNodeExpandableState'](_0x1cefc7),_0x15422d[_0x1233fe(0x15b)]&&this[_0x1233fe(0x144)](_0x1cefc7),this[_0x1233fe(0xfe)](_0x1cefc7,_0x15422d),this[_0x1233fe(0x165)](_0x1cefc7,_0x15422d),this[_0x1233fe(0x18a)](_0x1cefc7);}[_0x325c50(0x15d)](_0x534b7f,_0x2e67fd){var _0x493958=_0x325c50;try{_0x534b7f&&typeof _0x534b7f[_0x493958(0x119)]==_0x493958(0x12a)&&(_0x2e67fd[_0x493958(0x119)]=_0x534b7f[_0x493958(0x119)]);}catch{}if(_0x2e67fd[_0x493958(0x103)]===_0x493958(0x12a)||_0x2e67fd['type']===_0x493958(0x112)){if(isNaN(_0x2e67fd[_0x493958(0x124)]))_0x2e67fd[_0x493958(0xcf)]=!0x0,delete _0x2e67fd[_0x493958(0x124)];else switch(_0x2e67fd[_0x493958(0x124)]){case Number['POSITIVE_INFINITY']:_0x2e67fd[_0x493958(0x107)]=!0x0,delete _0x2e67fd[_0x493958(0x124)];break;case Number[_0x493958(0x12e)]:_0x2e67fd[_0x493958(0x177)]=!0x0,delete _0x2e67fd[_0x493958(0x124)];break;case 0x0:this[_0x493958(0x141)](_0x2e67fd['value'])&&(_0x2e67fd[_0x493958(0x15a)]=!0x0);break;}}else _0x2e67fd[_0x493958(0x103)]==='function'&&typeof _0x534b7f[_0x493958(0x131)]==_0x493958(0x169)&&_0x534b7f[_0x493958(0x131)]&&_0x2e67fd[_0x493958(0x131)]&&_0x534b7f[_0x493958(0x131)]!==_0x2e67fd[_0x493958(0x131)]&&(_0x2e67fd[_0x493958(0xce)]=_0x534b7f[_0x493958(0x131)]);}['_isNegativeZero'](_0x5a7221){var _0x70fd4=_0x325c50;return 0x1/_0x5a7221===Number[_0x70fd4(0x12e)];}[_0x325c50(0x144)](_0xdc054f){var _0xfbc4f2=_0x325c50;!_0xdc054f[_0xfbc4f2(0x12b)]||!_0xdc054f[_0xfbc4f2(0x12b)][_0xfbc4f2(0x119)]||_0xdc054f[_0xfbc4f2(0x103)]==='array'||_0xdc054f[_0xfbc4f2(0x103)]==='Map'||_0xdc054f['type']===_0xfbc4f2(0x106)||_0xdc054f[_0xfbc4f2(0x12b)]['sort'](function(_0x15041c,_0x4707aa){var _0x244e57=_0xfbc4f2,_0x197e77=_0x15041c[_0x244e57(0x131)][_0x244e57(0xdf)](),_0x5a3361=_0x4707aa[_0x244e57(0x131)]['toLowerCase']();return _0x197e77<_0x5a3361?-0x1:_0x197e77>_0x5a3361?0x1:0x0;});}[_0x325c50(0xfe)](_0x357ef9,_0x4b5e34){var _0x4488ac=_0x325c50;if(!(_0x4b5e34['noFunctions']||!_0x357ef9['props']||!_0x357ef9['props'][_0x4488ac(0x119)])){for(var _0x2574b0=[],_0x2faaa8=[],_0x232ee5=0x0,_0x1e2c1a=_0x357ef9[_0x4488ac(0x12b)][_0x4488ac(0x119)];_0x232ee5<_0x1e2c1a;_0x232ee5++){var _0x207f89=_0x357ef9[_0x4488ac(0x12b)][_0x232ee5];_0x207f89['type']===_0x4488ac(0x135)?_0x2574b0[_0x4488ac(0xd2)](_0x207f89):_0x2faaa8[_0x4488ac(0xd2)](_0x207f89);}if(!(!_0x2faaa8[_0x4488ac(0x119)]||_0x2574b0['length']<=0x1)){_0x357ef9[_0x4488ac(0x12b)]=_0x2faaa8;var _0x1eeafa={'functionsNode':!0x0,'props':_0x2574b0};this[_0x4488ac(0xc4)](_0x1eeafa,_0x4b5e34),this[_0x4488ac(0xd1)](_0x1eeafa,_0x4b5e34),this[_0x4488ac(0x173)](_0x1eeafa),this['_setNodePermissions'](_0x1eeafa,_0x4b5e34),_0x1eeafa['id']+='\\x20f',_0x357ef9[_0x4488ac(0x12b)]['unshift'](_0x1eeafa);}}}['_addLoadNode'](_0x48e845,_0x7906ed){}[_0x325c50(0x173)](_0x3515d6){}[_0x325c50(0x159)](_0xde90c9){var _0x22662c=_0x325c50;return Array['isArray'](_0xde90c9)||typeof _0xde90c9==_0x22662c(0xbe)&&this[_0x22662c(0x138)](_0xde90c9)===_0x22662c(0x179);}[_0x325c50(0xf7)](_0x37ccbc,_0x46b86b){}[_0x325c50(0x18a)](_0x466a6c){var _0x48412d=_0x325c50;delete _0x466a6c[_0x48412d(0x118)],delete _0x466a6c[_0x48412d(0x10e)],delete _0x466a6c['_hasMapOnItsPath'];}[_0x325c50(0xdb)](_0x56b557,_0x170cb9){}[_0x325c50(0x11a)](_0x59d8c6){var _0x292089=_0x325c50;return _0x59d8c6?_0x59d8c6['match'](this[_0x292089(0x171)])?'['+_0x59d8c6+']':_0x59d8c6[_0x292089(0xd6)](this[_0x292089(0xc8)])?'.'+_0x59d8c6:_0x59d8c6[_0x292089(0xd6)](this[_0x292089(0x153)])?'['+_0x59d8c6+']':'[\\x27'+_0x59d8c6+'\\x27]':'';}}let _0x2dd4a7=new _0x26adf7();function _0x1821fc(_0xd6b9b,_0xada22a,_0x4873b9,_0x32ab80){var _0x1568d2=_0x325c50;let _0x4424f2,_0xd200e5;try{_0xd200e5=_0x49ccae(),_0x4424f2=_0x2b58dd[_0xd6b9b],!_0x4424f2||_0xd200e5-_0x4424f2['ts']>0x1f4&&_0x4424f2[_0x1568d2(0x188)]&&_0x4424f2[_0x1568d2(0x166)]/_0x4424f2[_0x1568d2(0x188)]<0x64?(_0x2b58dd[_0xd6b9b]=_0x4424f2={'count':0x0,'time':0x0,'ts':_0xd200e5},_0x2b58dd[_0x1568d2(0xd4)]={}):_0xd200e5-_0x2b58dd['hits']['ts']>0x32&&_0x2b58dd['hits'][_0x1568d2(0x188)]&&_0x2b58dd['hits']['time']/_0x2b58dd[_0x1568d2(0xd4)][_0x1568d2(0x188)]<0x64&&(_0x2b58dd[_0x1568d2(0xd4)]={});let _0x334055=[],_0x58a793=_0x4424f2[_0x1568d2(0x14b)]||_0x2b58dd[_0x1568d2(0xd4)][_0x1568d2(0x14b)]?_0x1bc77d:_0x44fd78;for(var _0x42d3a6=0x0;_0x42d3a6<_0x32ab80[_0x1568d2(0x119)];_0x42d3a6++){let _0x91dda3={};_0x91dda3['props']=_0x58a793[_0x1568d2(0x12b)],_0x91dda3['elements']=_0x58a793[_0x1568d2(0xd0)],_0x91dda3[_0x1568d2(0xe3)]=_0x58a793['strLength'],_0x91dda3['totalStrLength']=_0x58a793[_0x1568d2(0x136)],_0x91dda3[_0x1568d2(0x11b)]=_0x58a793[_0x1568d2(0x11b)],_0x91dda3[_0x1568d2(0xf4)]=_0x58a793[_0x1568d2(0xf4)],_0x91dda3[_0x1568d2(0x15b)]=!0x1,_0x91dda3['noFunctions']=!_0x5e2858,_0x91dda3[_0x1568d2(0x152)]=0x1,_0x91dda3['level']=0x0,_0x91dda3[_0x1568d2(0x186)]='root_exp_id',_0x91dda3['rootExpression']=_0x1568d2(0x17c),_0x91dda3[_0x1568d2(0x174)]=!0x0,_0x91dda3[_0x1568d2(0x132)]=[],_0x91dda3[_0x1568d2(0x167)]=0x0,_0x91dda3[_0x1568d2(0x147)]=!0x0,_0x91dda3['allStrLength']=0x0,_0x91dda3[_0x1568d2(0x14d)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x334055['push'](_0x2dd4a7[_0x1568d2(0xc9)]({},_0x32ab80[_0x42d3a6],_0x91dda3,{}));}return{'method':_0x1568d2(0xe7),'version':_0xb8fe,'args':[{'id':_0xd6b9b,'ts':_0xada22a,'args':_0x334055,'session':_0x4873b9}]};}catch(_0x304c00){return{'method':_0x1568d2(0xe7),'version':_0xb8fe,'args':[{'id':_0xd6b9b,'ts':_0xada22a,'args':[{'type':_0x1568d2(0x101),'error':_0x304c00&&_0x304c00['message'],'session':_0x4873b9}]}]};}finally{try{if(_0x4424f2&&_0xd200e5){let _0x1a313c=_0x49ccae();_0x4424f2[_0x1568d2(0x188)]++,_0x4424f2[_0x1568d2(0x166)]+=_0x1a313c-_0xd200e5,_0x4424f2['ts']=_0x1a313c,_0x2b58dd[_0x1568d2(0xd4)]['count']++,_0x2b58dd[_0x1568d2(0xd4)][_0x1568d2(0x166)]+=_0x1a313c-_0xd200e5,_0x2b58dd['hits']['ts']=_0x1a313c,(_0x4424f2['count']>0x32||_0x4424f2['time']>0x64)&&(_0x4424f2[_0x1568d2(0x14b)]=!0x0),(_0x2b58dd[_0x1568d2(0xd4)][_0x1568d2(0x188)]>0x3e8||_0x2b58dd[_0x1568d2(0xd4)][_0x1568d2(0x166)]>0x12c)&&(_0x2b58dd[_0x1568d2(0xd4)][_0x1568d2(0x14b)]=!0x0);}}catch{}}}function _0xb603e1(){var _0x5306db=_0x325c50;if(_0x580084['performance'])return()=>_0x580084[_0x5306db(0x10d)]['now']();try{let {performance:_0x409e09}=require(_0x5306db(0x13e));return()=>_0x409e09['now']();}catch{return()=>Date['now']();}}})(globalThis,_0x25f7f0(0x15c),_0x25f7f0(0x100),_0x25f7f0(0xdd),_0x25f7f0(0xf6),_0x25f7f0(0x176),_0x25f7f0(0x104),_0x25f7f0(0xd7),_0x25f7f0(0xc1));`);
  } catch (e) {
  }
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/audiobooks/index-O6FD7NAI.js.map
