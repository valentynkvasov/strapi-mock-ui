exports.id = 277;
exports.ids = [277];
exports.modules = {

/***/ 6347:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/nav.js





const Nav = ({
  categories
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
      className: "uk-navbar-container",
      "data-uk-navbar": true,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "uk-navbar-left",
        children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
          className: "uk-navbar-nav",
          children: /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                children: "Strapi Blog"
              })
            })
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "uk-navbar-right",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
          className: "uk-navbar-nav",
          children: [categories.map(category => {
            return /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: `/category/${category.attributes.slug}`,
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "uk-link-reset",
                  children: category.attributes.name
                })
              })
            }, category.id);
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: `/create`,
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "uk-link-reset",
                children: "Create_New_Arcticle"
              })
            })
          }, "create")]
        })
      })]
    })
  });
};

/* harmony default export */ const nav = (Nav);
;// CONCATENATED MODULE: ./components/layout.js





const Layout = ({
  children,
  categories,
  seo
}) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
  children: [/*#__PURE__*/jsx_runtime_.jsx(nav, {
    categories: categories
  }), children]
});

/* harmony default export */ const layout = (Layout);

/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;