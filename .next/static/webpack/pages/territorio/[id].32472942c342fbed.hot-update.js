"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/territorio/[id]",{

/***/ "./pages/territorio/[id].js":
/*!**********************************!*\
  !*** ./pages/territorio/[id].js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Bganimated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Bganimated */ \"./components/Bganimated.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data */ \"./data.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction CardPage() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { id  } = router.query;\n    console.log(id);\n    const card = _data__WEBPACK_IMPORTED_MODULE_5__.territorios.find((c)=>c == id);\n    console.log(card);\n    let count = 0;\n    function handleClick(e) {\n        e.preventDefault();\n        console.log(\"clicked\");\n        let nombre = prompt(\"Ingresa la direcci\\xf3n por favor\", \"\");\n        if (nombre === null || nombre === \"\") {\n            alert(\"No ingresaste ningun dato\");\n        } else {\n            _data__WEBPACK_IMPORTED_MODULE_5__.terr.directions.push(nombre);\n            count = count + 1;\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        console.log(\"que\");\n        document.getElementById(\"h1\");\n    }, [\n        count\n    ]);\n    if (!card) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Error al buscar el territorio\"\n        }, void 0, false, {\n            fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n            lineNumber: 34,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container text-light mx-auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"mt-2 text-dark text-center border-bottom border-secondary\",\n                    children: [\n                        \"TERRITORIO \",\n                        card\n                    ]\n                }, void 0, true, {\n                    fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card my-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Bganimated__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                            fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card-body rounded\",\n                            children: [\n                                _data__WEBPACK_IMPORTED_MODULE_5__.terr.directions.map((d)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"border-bottom text-dark border-dark bg-light rounded-end my-2\",\n                                        style: {\n                                            height: \"35px\"\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: \"fw-light mx-2\",\n                                            style: {\n                                                height: \"20px\"\n                                            },\n                                            children: d\n                                        }, void 0, false, {\n                                            fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                                            lineNumber: 52,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                                        lineNumber: 48,\n                                        columnNumber: 17\n                                    }, this);\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"border-bottom text-dark border-dark bg-light rounded-end my-2\",\n                                    style: {\n                                        height: \"35px\"\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"fw-light mx-2\",\n                                        style: {\n                                            height: \"20px\"\n                                        },\n                                        children: \"Juncal 135\"\n                                    }, void 0, false, {\n                                        fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                                        lineNumber: 62,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                                    lineNumber: 58,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"my-2 d-flex justify-content-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"btn btn-secondary\",\n                            onClick: handleClick,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"text-light text-center\",\n                                style: {\n                                    height: \"20px\"\n                                },\n                                children: \"AGREGAR EDIFICIO\"\n                            }, void 0, false, {\n                                fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                                lineNumber: 71,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                            lineNumber: 70,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                        lineNumber: 69,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n_s(CardPage, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = CardPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CardPage);\nvar _c;\n$RefreshReg$(_c, \"CardPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90ZXJyaXRvcmlvL1tpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ047QUFDbUI7QUFDUjtBQUNFO0FBRS9DLFNBQVNNLFdBQVc7O0lBQ2xCLE1BQU1DLFNBQVNQLHNEQUFTQTtJQUN4QixNQUFNLEVBQUVRLEdBQUUsRUFBRSxHQUFHRCxPQUFPRSxLQUFLO0lBQzNCQyxRQUFRQyxHQUFHLENBQUNIO0lBQ1osTUFBTUksT0FBT1AsbURBQWdCLENBQUMsQ0FBQ1MsSUFBTUEsS0FBS047SUFDMUNFLFFBQVFDLEdBQUcsQ0FBQ0M7SUFDWixJQUFJRyxRQUFRO0lBRVosU0FBU0MsWUFBWUMsQ0FBQyxFQUFFO1FBQ3RCQSxFQUFFQyxjQUFjO1FBQ2hCUixRQUFRQyxHQUFHLENBQUM7UUFDWixJQUFJUSxTQUFTQyxPQUFPLHFDQUFrQztRQUN0RCxJQUFJRCxXQUFXLElBQUksSUFBSUEsV0FBVyxJQUFJO1lBQ3BDRSxNQUFNO1FBQ1IsT0FBTztZQUNIakIsdURBQW9CLENBQUNlO1lBQ3JCSixRQUFRQSxRQUFRO1FBQ3BCLENBQUM7SUFDSDtJQUVBZCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2RTLFFBQVFDLEdBQUcsQ0FBQztRQUNaYSxTQUFTQyxjQUFjLENBQUM7SUFDMUIsR0FBRztRQUFDVjtLQUFNO0lBR1YsSUFBSSxDQUFDSCxNQUFNO1FBQ1QscUJBQU8sOERBQUNjO3NCQUFJOzs7Ozs7SUFDZCxDQUFDO0lBRUQscUJBQ0UsOERBQUN2QiwwREFBTUE7a0JBQ0wsNEVBQUN1QjtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0M7b0JBQUdELFdBQVU7O3dCQUE0RDt3QkFDNURmOzs7Ozs7OzhCQUVkLDhEQUFDYztvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUN6Qiw4REFBVUE7Ozs7O3NDQUNYLDhEQUFDd0I7NEJBQUlDLFdBQVU7O2dDQUNadkIsc0RBQW1CLENBQUMsQ0FBQzBCLElBQU07b0NBQzFCLHFCQUNFLDhEQUFDSjt3Q0FDQ0MsV0FBVTt3Q0FDVkksT0FBTzs0Q0FBRUMsUUFBUTt3Q0FBTztrREFFeEIsNEVBQUNDOzRDQUFHTixXQUFVOzRDQUFnQkksT0FBTztnREFBRUMsUUFBUTs0Q0FBTztzREFDbkRGOzs7Ozs7Ozs7OztnQ0FJVDs4Q0FDQSw4REFBQ0o7b0NBQ0NDLFdBQVU7b0NBQ1ZJLE9BQU87d0NBQUVDLFFBQVE7b0NBQU87OENBRXhCLDRFQUFDQzt3Q0FBR04sV0FBVTt3Q0FBZ0JJLE9BQU87NENBQUVDLFFBQVE7d0NBQU87a0RBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQU0vRCw4REFBQ047b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNEO2tDQUNDLDRFQUFDUTs0QkFBT1AsV0FBVTs0QkFBb0JRLFNBQVNuQjtzQ0FDN0MsNEVBQUNvQjtnQ0FBR1QsV0FBVTtnQ0FBeUJJLE9BQU87b0NBQUVDLFFBQVE7Z0NBQU87MENBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU2hGO0dBekVTMUI7O1FBQ1FOLGtEQUFTQTs7O0tBRGpCTTtBQTJFVCwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy90ZXJyaXRvcmlvL1tpZF0uanM/M2I4NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJnYW5pbWF0ZWQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CZ2FuaW1hdGVkJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCB7IHRlcnIsIHRlcnJpdG9yaW9zIH0gZnJvbSAnLi4vLi4vZGF0YSc7XHJcblxyXG5mdW5jdGlvbiBDYXJkUGFnZSgpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc29sZS5sb2coaWQpO1xyXG4gIGNvbnN0IGNhcmQgPSB0ZXJyaXRvcmlvcy5maW5kKChjKSA9PiBjID09IGlkKTtcclxuICBjb25zb2xlLmxvZyhjYXJkKTtcclxuICBsZXQgY291bnQgPSAwO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVDbGljayhlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zb2xlLmxvZygnY2xpY2tlZCcpO1xyXG4gICAgbGV0IG5vbWJyZSA9IHByb21wdCgnSW5ncmVzYSBsYSBkaXJlY2Npw7NuIHBvciBmYXZvcicsICcnKTtcclxuICAgIGlmIChub21icmUgPT09IG51bGwgfHwgbm9tYnJlID09PSAnJykge1xyXG4gICAgICBhbGVydCgnTm8gaW5ncmVzYXN0ZSBuaW5ndW4gZGF0bycpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0ZXJyLmRpcmVjdGlvbnMucHVzaChub21icmUpXHJcbiAgICAgICAgY291bnQgPSBjb3VudCArIDFcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygncXVlJylcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaDFcIilcclxuICB9LCBbY291bnRdKVxyXG4gIFxyXG5cclxuICBpZiAoIWNhcmQpIHtcclxuICAgIHJldHVybiA8ZGl2PkVycm9yIGFsIGJ1c2NhciBlbCB0ZXJyaXRvcmlvPC9kaXY+O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgdGV4dC1saWdodCBteC1hdXRvJz5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPSdtdC0yIHRleHQtZGFyayB0ZXh0LWNlbnRlciBib3JkZXItYm90dG9tIGJvcmRlci1zZWNvbmRhcnknPlxyXG4gICAgICAgICAgVEVSUklUT1JJTyB7Y2FyZH1cclxuICAgICAgICA8L2gxPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkIG15LTMnPlxyXG4gICAgICAgICAgPEJnYW5pbWF0ZWQgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLWJvZHkgcm91bmRlZCc+XHJcbiAgICAgICAgICAgIHt0ZXJyLmRpcmVjdGlvbnMubWFwKChkKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdib3JkZXItYm90dG9tIHRleHQtZGFyayBib3JkZXItZGFyayBiZy1saWdodCByb3VuZGVkLWVuZCBteS0yJ1xyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6ICczNXB4JyB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdmdy1saWdodCBteC0yJyBzdHlsZT17eyBoZWlnaHQ6ICcyMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICB7ZH1cclxuICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdib3JkZXItYm90dG9tIHRleHQtZGFyayBib3JkZXItZGFyayBiZy1saWdodCByb3VuZGVkLWVuZCBteS0yJ1xyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogJzM1cHgnIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdmdy1saWdodCBteC0yJyBzdHlsZT17eyBoZWlnaHQ6ICcyMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgIEp1bmNhbCAxMzVcclxuICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdteS0yIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJz5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLXNlY29uZGFyeScgb25DbGljaz17aGFuZGxlQ2xpY2t9PlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J3RleHQtbGlnaHQgdGV4dC1jZW50ZXInIHN0eWxlPXt7IGhlaWdodDogJzIwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgQUdSRUdBUiBFRElGSUNJT1xyXG4gICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZFBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJCZ2FuaW1hdGVkIiwiTGF5b3V0IiwidGVyciIsInRlcnJpdG9yaW9zIiwiQ2FyZFBhZ2UiLCJyb3V0ZXIiLCJpZCIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsImNhcmQiLCJmaW5kIiwiYyIsImNvdW50IiwiaGFuZGxlQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJub21icmUiLCJwcm9tcHQiLCJhbGVydCIsImRpcmVjdGlvbnMiLCJwdXNoIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwibWFwIiwiZCIsInN0eWxlIiwiaGVpZ2h0IiwiaDIiLCJidXR0b24iLCJvbkNsaWNrIiwiaDMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/territorio/[id].js\n"));

/***/ })

});