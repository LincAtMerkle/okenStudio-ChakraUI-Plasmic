"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/plasmic-host",{

/***/ "./pages/plasmic-host.tsx":
/*!********************************!*\
  !*** ./pages/plasmic-host.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PlasmicHost; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _plasmicapp_host__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @plasmicapp/host */ \"./node_modules/@plasmicapp/host/dist/host.esm.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _allComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./allComponents */ \"./pages/allComponents.tsx\");\n/* harmony import */ var _pro_package_src_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pro-package/src/index */ \"./pro-package/src/index.ts\");\n\n\n\n\n\n\n\nconst themePro = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.extendTheme)({\n    colors: {\n        ..._chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.theme.colors,\n        brand: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.theme.colors.purple\n    }\n}, _pro_package_src_index__WEBPACK_IMPORTED_MODULE_5__.theme);\n(0,_allComponents__WEBPACK_IMPORTED_MODULE_3__.registerAllComponents)();\nfunction PlasmicHost() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.ChakraProvider, {\n        theme: themePro,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_plasmicapp_host__WEBPACK_IMPORTED_MODULE_2__.PlasmicCanvasHost, {}, void 0, false, {\n            fileName: \"/Users/MrBiscuit/Documents/TokenStudio-ChakraUI-Plasmic/pages/plasmic-host.tsx\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/MrBiscuit/Documents/TokenStudio-ChakraUI-Plasmic/pages/plasmic-host.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n_c = PlasmicHost;\nvar _c;\n$RefreshReg$(_c, \"PlasmicHost\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wbGFzbWljLWhvc3QudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQStCO0FBQ3NCO0FBQ0g7QUFDSTtBQUNNO0FBQ007QUFHbEUsTUFBTVEsV0FBV0YsNkRBQVdBLENBQzFCO0lBQ0VHLFFBQVE7UUFBRSxHQUFHRiwwREFBZ0I7UUFBRUcsT0FBT0gsaUVBQXVCO0lBQUM7QUFDaEUsR0FDQUYseURBQVFBO0FBR1ZGLHFFQUFxQkE7QUFFTixTQUFTUyxjQUFjO0lBQ3BDLHFCQUNFLDhEQUFDViw0REFBY0E7UUFBQ0UsT0FBT0k7a0JBQ3JCLDRFQUFDUCwrREFBaUJBOzs7Ozs7Ozs7O0FBR3hCLENBQUM7S0FOdUJXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3BsYXNtaWMtaG9zdC50c3g/NWVlNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFBsYXNtaWNDYW52YXNIb3N0IH0gZnJvbSBcIkBwbGFzbWljYXBwL2hvc3RcIjtcbmltcG9ydCB7IENoYWtyYVByb3ZpZGVyIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7cmVnaXN0ZXJBbGxDb21wb25lbnRzfSBmcm9tIFwiLi9hbGxDb21wb25lbnRzXCI7XG5pbXBvcnQgeyB0aGVtZSBhcyBwcm9UaGVtZSB9IGZyb20gJy4uL3Byby1wYWNrYWdlL3NyYy9pbmRleCdcbmltcG9ydCB7IGV4dGVuZFRoZW1lLCB0aGVtZSBhcyBiYXNlVGhlbWUgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuXG5cbmNvbnN0IHRoZW1lUHJvID0gZXh0ZW5kVGhlbWUoXG4gIHtcbiAgICBjb2xvcnM6IHsgLi4uYmFzZVRoZW1lLmNvbG9ycywgYnJhbmQ6IGJhc2VUaGVtZS5jb2xvcnMucHVycGxlIH0sXG4gIH0sXG4gIHByb1RoZW1lLFxuKVxuXG5yZWdpc3RlckFsbENvbXBvbmVudHMoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGxhc21pY0hvc3QoKSB7XG4gIHJldHVybiAoXG4gICAgPENoYWtyYVByb3ZpZGVyIHRoZW1lPXt0aGVtZVByb30+XG4gICAgICA8UGxhc21pY0NhbnZhc0hvc3QgLz5cbiAgICA8L0NoYWtyYVByb3ZpZGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUGxhc21pY0NhbnZhc0hvc3QiLCJDaGFrcmFQcm92aWRlciIsInJlZ2lzdGVyQWxsQ29tcG9uZW50cyIsInRoZW1lIiwicHJvVGhlbWUiLCJleHRlbmRUaGVtZSIsImJhc2VUaGVtZSIsInRoZW1lUHJvIiwiY29sb3JzIiwiYnJhbmQiLCJwdXJwbGUiLCJQbGFzbWljSG9zdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/plasmic-host.tsx\n"));

/***/ })

});