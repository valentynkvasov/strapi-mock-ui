"use strict";
(() => {
var exports = {};
exports.id = 417;
exports.ids = [417];
exports.modules = {

/***/ 3724:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ create),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: external "draft-js"
const external_draft_js_namespaceObject = require("draft-js");
;// CONCATENATED MODULE: external "draftjs-to-html"
const external_draftjs_to_html_namespaceObject = require("draftjs-to-html");
var external_draftjs_to_html_default = /*#__PURE__*/__webpack_require__.n(external_draftjs_to_html_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/creates.js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const axios = __webpack_require__(2376).default;

const Editor = (0,dynamic.default)(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 6441, 23)).then(mod => mod.Editor), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(6441)],
    modules: ["../components/creates.js -> " + "react-draft-wysiwyg"]
  }
});

class Creates extends external_react_.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "onEditorStateChange", editorState => {
      this.setState({
        editorState: editorState
      }); //console.log(draftToHtml(convertToRaw(this.state.editorState.getCurrentContent())));

      console.log((0,external_draft_js_namespaceObject.convertToRaw)(this.state.editorState.getCurrentContent()));
    });

    _defineProperty(this, "onTitleChange", title => {
      this.setState({
        title: title.target.value
      });
    });

    _defineProperty(this, "onDscrChange", dscr => {
      this.setState({
        dscr: dscr.target.value
      });
    });

    _defineProperty(this, "onSlugChange", slug => {
      this.setState({
        slug: slug.target.value
      });
    });

    this.state = {
      editorState: external_draft_js_namespaceObject.EditorState.createEmpty(),
      uploadedImages: [],
      image: {
        id: null,
        url: ""
      },
      category: {},
      title: null,
      dscr: null,
      slug: null,
      contentResponse: null
    };
    this._uploadImageCallBack = this._uploadImageCallBack.bind(this);
  }

  pickCategory(category) {
    this.setState({
      category: {
        id: category.id,
        name: category.attributes.name
      }
    });
  }

  createContent(e) {
    e.preventDefault();
    let that = this;
    axios.post("http://localhost:1337/content-manager/collection-types/api::article.article", {
      title: this.state.title,
      description: this.state.dscr,
      slug: this.state.slug,
      image: this.state.image,
      content: external_draftjs_to_html_default()((0,external_draft_js_namespaceObject.convertToRaw)(this.state.editorState.getCurrentContent())),
      category: this.state.category.id
    }, {
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjUzMTY1NTY1LCJleHAiOjE2NTU3NTc1NjV9.5FgwWg3u2lVlJdpQ6aDjzxiB-e8Nl8GeC8tiCQgihNU"
      }
    }).then(function (response) {
      console.log(response);
      that.setState({
        contentResponse: response
      });
    }).catch(function (error) {
      console.log(error);
    });
  }

  _uploadImageCallBack(file) {
    let uploadedImages = this.state.uploadedImages;
    let that = this;
    const imageObject = {
      file: file,
      localSrc: URL.createObjectURL(file)
    };
    uploadedImages.push(imageObject);
    that.setState({
      uploadedImages: uploadedImages
    });
    axios.post("http://localhost:1337/upload", {
      fileInfo: {
        name: file.name,
        caption: file.name,
        alternativeText: file.name
      },
      files: file
    }, {
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjUzMTY1NTY1LCJleHAiOjE2NTU3NTc1NjV9.5FgwWg3u2lVlJdpQ6aDjzxiB-e8Nl8GeC8tiCQgihNU",
        "Content-Type": "multipart/form-data"
      }
    }).then(function (response) {
      console.log(response);
      that.setState({
        image: {
          id: response.data[0].id,
          url: imageObject.localSrc
        }
      });
    }).catch(function (error) {
      console.log(error);
    });
    return new Promise((resolve, reject) => {
      resolve({
        data: {}
      });
    });
  }

  render() {
    const {
      editorState
    } = this.state;
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "uk-section",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "uk-container uk-container-small",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
          className: "uk-form-horizontal uk-margin-large",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "uk-margin",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              className: "uk-form-label",
              htmlFor: "form-horizontal-text",
              children: "Article Title"
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "uk-form-controls",
              children: /*#__PURE__*/jsx_runtime_.jsx("input", {
                className: "uk-input",
                id: "form-horizontal-text",
                type: "text",
                placeholder: "Some text...",
                onChange: e => this.onTitleChange(e)
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "uk-margin",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              className: "uk-form-label",
              htmlFor: "form-horizontal-text",
              children: "Article Desctiption"
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "uk-form-controls",
              children: /*#__PURE__*/jsx_runtime_.jsx("input", {
                className: "uk-input",
                id: "form-horizontal-text",
                type: "text",
                placeholder: "Some text...",
                onChange: e => this.onDscrChange(e)
              })
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "uk-margin",
            children: /*#__PURE__*/jsx_runtime_.jsx(Editor, {
              editorState: editorState,
              toolbarClassName: "toolbarClassName",
              wrapperClassName: "wrapper-class",
              editorClassName: "demo-editor",
              onEditorStateChange: this.onEditorStateChange,
              toolbar: {
                inline: {
                  inDropdown: true
                },
                list: {
                  inDropdown: true
                },
                textAlign: {
                  inDropdown: true
                },
                link: {
                  inDropdown: true
                },
                history: {
                  inDropdown: true
                },
                image: {
                  uploadCallback: this._uploadImageCallBack
                },
                inputAccept: "application/pdf,text/plain,application/vnd.openxmlformatsofficedocument.wordprocessingml.document,application/msword,application/vnd.ms-excel"
              }
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "uk-margin",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              className: "uk-form-label",
              htmlFor: "form-horizontal-text",
              children: "Slug"
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "uk-form-controls",
              children: /*#__PURE__*/jsx_runtime_.jsx("input", {
                className: "uk-input",
                id: "form-horizontal-text",
                type: "text",
                placeholder: "",
                onChange: e => this.onSlugChange(e)
              })
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "uk-margin",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "uk-inline",
              children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
                className: "uk-button uk-button-default",
                type: "button",
                children: "Category"
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                "uk-dropdown": "pos: bottom-justify",
                children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
                  className: "uk-nav uk-dropdown-nav",
                  children: this.props.categories.map(category => {
                    return /*#__PURE__*/jsx_runtime_.jsx("li", {
                      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                        onClick: e => this.pickCategory(category),
                        children: category.attributes.name
                      })
                    }, category.id);
                  })
                })
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                style: {
                  margin: "15px"
                },
                children: [" ", "Active Category: ", this.state.category.name]
              })]
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "uk-margin",
            children: ["Image:", this.state.image.id ? /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
              width: "150",
              height: "90",
              src: this.state.image.url
            }) : /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {})]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "uk-margin",
            children: /*#__PURE__*/jsx_runtime_.jsx("button", {
              className: "uk-button uk-button-primary",
              onClick: e => this.createContent(e),
              children: "Create"
            })
          }), this.state.contentResponse ? /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "uk-margin",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "uk-alert-success",
              "uk-alert": true,
              children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "uk-alert-close",
                "uk-close": true
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                children: ["The ", /*#__PURE__*/jsx_runtime_.jsx("b", {
                  children: this.state.contentResponse.data.title
                }), " has been created(as draft)"]
              })]
            })
          }) : /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {})]
        })
      })
    });
  }

}

/* harmony default export */ const creates = (Creates);
// EXTERNAL MODULE: ./lib/api.js
var api = __webpack_require__(883);
// EXTERNAL MODULE: ./components/layout.js + 1 modules
var layout = __webpack_require__(6347);
;// CONCATENATED MODULE: ./pages/create/index.js





const Create = ({
  categories
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(layout/* default */.Z, {
    categories: categories.data,
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "uk-section",
      children: /*#__PURE__*/jsx_runtime_.jsx(creates, {
        categories: categories.data
      })
    })
  });
};

async function getStaticProps({
  params
}) {
  const categoriesRes = await (0,api/* fetchAPI */.I)("/categories");
  return {
    props: {
      categories: categoriesRes
    },
    revalidate: 1
  };
}
/* harmony default export */ const create = (Create);

/***/ }),

/***/ 2376:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 9325:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 822:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 6695:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 2307:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6850:
/***/ ((module) => {

module.exports = require("qs");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6441:
/***/ ((module) => {

module.exports = require("react-draft-wysiwyg");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [61,152,883,277], () => (__webpack_exec__(3724)));
module.exports = __webpack_exports__;

})();