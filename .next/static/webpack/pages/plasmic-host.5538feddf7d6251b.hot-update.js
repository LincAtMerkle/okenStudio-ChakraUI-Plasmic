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

/***/ "./pages/checkbox.tsx":
/*!****************************!*\
  !*** ./pages/checkbox.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"registerCheckbox\": function() { return /* binding */ registerCheckbox; }\n/* harmony export */ });\n/* harmony import */ var _plasmicapp_host__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @plasmicapp/host */ \"./node_modules/@plasmicapp/host/dist/host.esm.js\");\n\nfunction registerCheckbox() {\n    (0,_plasmicapp_host__WEBPACK_IMPORTED_MODULE_0__.registerComponent)(Checkbox, {\n        name: \"Checkbox\",\n        importPath: \"@chakra-ui/react\",\n        props: {\n            colorScheme: {\n                type: \"choice\",\n                options: [\n                    \"whiteAlpha\",\n                    \"blackAlpha\",\n                    \"gray\",\n                    \"red\",\n                    \"orange\",\n                    \"yellow\",\n                    \"green\",\n                    \"teal\",\n                    \"blue\",\n                    \"cyan\",\n                    \"purple\",\n                    \"pink\",\n                    \"linkedin\",\n                    \"facebook\",\n                    \"messenger\",\n                    \"whatsapp\",\n                    \"twitter\",\n                    \"telegram\"\n                ],\n                defaultValue: \"blue\"\n            },\n            size: {\n                type: \"choice\",\n                options: [\n                    \"xl\",\n                    \"sm\",\n                    \"md\",\n                    \"lg\"\n                ]\n            },\n            value: {\n                type: \"string\"\n            },\n            spacing: {\n                type: \"string\",\n                defaultValue: \"0.5rem\"\n            },\n            isChecked: {\n                type: \"boolean\"\n            },\n            isIndeterminate: {\n                type: \"boolean\"\n            },\n            isDisabled: {\n                type: \"boolean\"\n            },\n            isRequired: {\n                type: \"boolean\"\n            },\n            isInvalid: {\n                type: \"boolean\"\n            },\n            children: {\n                type: \"slot\",\n                defaultValue: {\n                    type: \"text\",\n                    value: \"Checkbox\"\n                }\n            }\n        }\n    });\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jaGVja2JveC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBb0Q7QUFHN0MsU0FBU0MsbUJBQW1CO0lBRS9CRCxtRUFBaUJBLENBQUNFLFVBQVU7UUFDeEJDLE1BQU07UUFDTkMsWUFBWTtRQUNaQyxPQUFPO1lBQ0xDLGFBQWE7Z0JBQ1hDLE1BQU07Z0JBQ05DLFNBQVM7b0JBQ1A7b0JBQ0E7b0JBQ0E7b0JBQ0E7b0JBQ0E7b0JBQ0E7b0JBQ0E7b0JBQ0E7b0JBQ0E7b0JBQ0E7b0JBQ0E7b0JBQ0E7b0JBQ0E7b0JBQ0E7b0JBQ0E7b0JBQ0E7b0JBQ0E7b0JBQ0E7aUJBQ0Q7Z0JBQ0RDLGNBQWM7WUFDaEI7WUFDQUMsTUFBTTtnQkFDSkgsTUFBTTtnQkFDTkMsU0FBUztvQkFBQztvQkFBTTtvQkFBTTtvQkFBTTtpQkFBSztZQUNuQztZQUNBRyxPQUFPO2dCQUNMSixNQUFNO1lBQ1I7WUFDQUssU0FBUztnQkFDUEwsTUFBTTtnQkFDTkUsY0FBYztZQUNoQjtZQUNBSSxXQUFXO2dCQUNUTixNQUFNO1lBQ1I7WUFDQU8saUJBQWlCO2dCQUNmUCxNQUFNO1lBQ1I7WUFDQVEsWUFBWTtnQkFDVlIsTUFBTTtZQUNSO1lBQ0FTLFlBQVk7Z0JBQ1ZULE1BQU07WUFDUjtZQUNBVSxXQUFXO2dCQUNUVixNQUFNO1lBQ1I7WUFDQVcsVUFBVTtnQkFDUlgsTUFBTTtnQkFDTkUsY0FBYztvQkFDWkYsTUFBTTtvQkFDTkksT0FBTztnQkFDVDtZQUNGO1FBQ0Y7SUFDRjtBQUNOLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hlY2tib3gudHN4PzVmYzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtyZWdpc3RlckNvbXBvbmVudCB9IGZyb20gXCJAcGxhc21pY2FwcC9ob3N0XCI7XG5pbXBvcnQge0NoZWNib3h9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCJcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyQ2hlY2tib3goKSB7XG5cbiAgICByZWdpc3RlckNvbXBvbmVudChDaGVja2JveCwge1xuICAgICAgICBuYW1lOiBcIkNoZWNrYm94XCIsXG4gICAgICAgIGltcG9ydFBhdGg6IFwiQGNoYWtyYS11aS9yZWFjdFwiLFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgIGNvbG9yU2NoZW1lOiB7XG4gICAgICAgICAgICB0eXBlOiBcImNob2ljZVwiLFxuICAgICAgICAgICAgb3B0aW9uczogW1xuICAgICAgICAgICAgICBcIndoaXRlQWxwaGFcIixcbiAgICAgICAgICAgICAgXCJibGFja0FscGhhXCIsXG4gICAgICAgICAgICAgIFwiZ3JheVwiLFxuICAgICAgICAgICAgICBcInJlZFwiLFxuICAgICAgICAgICAgICBcIm9yYW5nZVwiLFxuICAgICAgICAgICAgICBcInllbGxvd1wiLFxuICAgICAgICAgICAgICBcImdyZWVuXCIsXG4gICAgICAgICAgICAgIFwidGVhbFwiLFxuICAgICAgICAgICAgICBcImJsdWVcIixcbiAgICAgICAgICAgICAgXCJjeWFuXCIsXG4gICAgICAgICAgICAgIFwicHVycGxlXCIsXG4gICAgICAgICAgICAgIFwicGlua1wiLFxuICAgICAgICAgICAgICBcImxpbmtlZGluXCIsXG4gICAgICAgICAgICAgIFwiZmFjZWJvb2tcIixcbiAgICAgICAgICAgICAgXCJtZXNzZW5nZXJcIixcbiAgICAgICAgICAgICAgXCJ3aGF0c2FwcFwiLFxuICAgICAgICAgICAgICBcInR3aXR0ZXJcIixcbiAgICAgICAgICAgICAgXCJ0ZWxlZ3JhbVwiLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogXCJibHVlXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzaXplOiB7XG4gICAgICAgICAgICB0eXBlOiBcImNob2ljZVwiLFxuICAgICAgICAgICAgb3B0aW9uczogW1wieGxcIiwgXCJzbVwiLCBcIm1kXCIsIFwibGdcIl0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNwYWNpbmc6IHtcbiAgICAgICAgICAgIHR5cGU6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IFwiMC41cmVtXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpc0NoZWNrZWQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFwiYm9vbGVhblwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgaXNJbmRldGVybWluYXRlOiB7XG4gICAgICAgICAgICB0eXBlOiBcImJvb2xlYW5cIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlzRGlzYWJsZWQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFwiYm9vbGVhblwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgaXNSZXF1aXJlZDoge1xuICAgICAgICAgICAgdHlwZTogXCJib29sZWFuXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpc0ludmFsaWQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFwiYm9vbGVhblwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY2hpbGRyZW46IHtcbiAgICAgICAgICAgIHR5cGU6IFwic2xvdFwiLFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiB7XG4gICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICB2YWx1ZTogXCJDaGVja2JveFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSk7XG59XG4iXSwibmFtZXMiOlsicmVnaXN0ZXJDb21wb25lbnQiLCJyZWdpc3RlckNoZWNrYm94IiwiQ2hlY2tib3giLCJuYW1lIiwiaW1wb3J0UGF0aCIsInByb3BzIiwiY29sb3JTY2hlbWUiLCJ0eXBlIiwib3B0aW9ucyIsImRlZmF1bHRWYWx1ZSIsInNpemUiLCJ2YWx1ZSIsInNwYWNpbmciLCJpc0NoZWNrZWQiLCJpc0luZGV0ZXJtaW5hdGUiLCJpc0Rpc2FibGVkIiwiaXNSZXF1aXJlZCIsImlzSW52YWxpZCIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/checkbox.tsx\n"));

/***/ })

});