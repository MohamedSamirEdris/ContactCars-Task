"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_ProductItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ProductItem */ \"./components/ProductItem.js\");\n\n\n\nvar __N_SSP = true;\nfunction Home(param) {\n    let { products  } = param;\n    // const [products, setProduct] = useState([]);\n    // async function fetchProduct() {\n    //   try {\n    //     const resposnse = await fetch('http://localhost:8000/products');\n    //     const data = await resposnse.json();\n    //     console.log(data);\n    //     setProduct(data);\n    //   } catch (error) {\n    //     console.log(error);\n    //   }\n    // }\n    // useEffect(() => {\n    //   fetchProduct();\n    // }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        title: \"Home Page\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4\",\n            children: products.map((product)=>[\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        product: product\n                    }, product.slug, false, {\n                        fileName: \"/Users/amrsamir/Desktop/JS/contactcars/pages/index.js\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, this)\n                ])\n        }, void 0, false, {\n            fileName: \"/Users/amrsamir/Desktop/JS/contactcars/pages/index.js\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/amrsamir/Desktop/JS/contactcars/pages/index.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUEwQztBQUNVOztBQUdyQyxTQUFTRSxLQUFLLEtBQVksRUFBRTtRQUFkLEVBQUVDLFNBQVEsRUFBRSxHQUFaO0lBQzNCLCtDQUErQztJQUUvQyxrQ0FBa0M7SUFDbEMsVUFBVTtJQUNWLHVFQUF1RTtJQUN2RSwyQ0FBMkM7SUFDM0MseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUN4QixzQkFBc0I7SUFDdEIsMEJBQTBCO0lBQzFCLE1BQU07SUFDTixJQUFJO0lBRUosb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixVQUFVO0lBRVYscUJBQ0UsOERBQUNILDBEQUFNQTtRQUFDSSxPQUFNO2tCQUNaLDRFQUFDQztZQUFJQyxXQUFVO3NCQUNaSCxTQUFTSSxHQUFHLENBQUMsQ0FBQ0MsVUFBWTtrQ0FDekIsOERBQUNQLCtEQUFXQTt3QkFBQ08sU0FBU0E7dUJBQWNBLFFBQVFDLElBQUk7Ozs7O2lCQUNqRDs7Ozs7Ozs7Ozs7QUFJVCxDQUFDO0tBM0J1QlAiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBQcm9kdWN0SXRlbSBmcm9tICcuLi9jb21wb25lbnRzL1Byb2R1Y3RJdGVtJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgcHJvZHVjdHMgfSkge1xuICAvLyBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RdID0gdXNlU3RhdGUoW10pO1xuXG4gIC8vIGFzeW5jIGZ1bmN0aW9uIGZldGNoUHJvZHVjdCgpIHtcbiAgLy8gICB0cnkge1xuICAvLyAgICAgY29uc3QgcmVzcG9zbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9wcm9kdWN0cycpO1xuICAvLyAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3Bvc25zZS5qc29uKCk7XG4gIC8vICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgLy8gICAgIHNldFByb2R1Y3QoZGF0YSk7XG4gIC8vICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgLy8gICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgLy8gICB9XG4gIC8vIH1cblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGZldGNoUHJvZHVjdCgpO1xuICAvLyB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IHRpdGxlPVwiSG9tZSBQYWdlXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTMgbGc6Z3JpZC1jb2xzLTRcIj5cbiAgICAgICAge3Byb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4gW1xuICAgICAgICAgIDxQcm9kdWN0SXRlbSBwcm9kdWN0PXtwcm9kdWN0fSBrZXk9e3Byb2R1Y3Quc2x1Z30gLz4sXG4gICAgICAgIF0pfVxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoe3F1ZXJ5fSkge1xuICBjb25zdCB7Y2F0ZWdvcnl9ID0gcXVlcnlcbiAgbGV0IHVybCA9ICdodHRwOi8vbG9jYWxob3N0OjgwMDAvcHJvZHVjdHMnO1xuICBjYXRlZ29yeSA/IHVybCs9IGA/Y2F0ZWdvcnkvJHtjYXRlZ29yeX1gOiBudWxsO1xuICBcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9wcm9kdWN0c2ApO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcHJvZHVjdHM6IGRhdGEsXG4gICAgfSxcbiAgfTtcbn1cblxuXG4iXSwibmFtZXMiOlsiTGF5b3V0IiwiUHJvZHVjdEl0ZW0iLCJIb21lIiwicHJvZHVjdHMiLCJ0aXRsZSIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsInByb2R1Y3QiLCJzbHVnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});