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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Bganimated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Bganimated */ \"./components/Bganimated.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data */ \"./data.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction CardPage() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { id  } = router.query;\n    console.log(id);\n    const card = _data__WEBPACK_IMPORTED_MODULE_5__.territorios.find((c)=>c == id);\n    console.log(card);\n    const [direccion, setdireccion] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    function handleClick(e) {\n        e.preventDefault();\n        console.log(\"clicked\");\n        let nombre = prompt(\"Ingresa la direcci\\xf3n por favor\", \"\");\n        if (nombre === null || nombre === \"\") {\n            alert(\"No ingresaste ningun dato\");\n        } else {\n            setdireccion([\n                ...direccion,\n                nombre\n            ]);\n            console.log(direccion);\n        }\n    }\n    function handleExample(e) {\n        e.preventDefault();\n        const rIndex = Math.floor(Math.random() * _data__WEBPACK_IMPORTED_MODULE_5__.terr.examples.length);\n        setdireccion([\n            ...direccion,\n            \"\".concat(_data__WEBPACK_IMPORTED_MODULE_5__.terr.examples[rIndex], \" \").concat(Math.floor(math.random() * 30) * 7 + 100)\n        ]);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        console.log(\"effect activo\");\n        setdireccion(_data__WEBPACK_IMPORTED_MODULE_5__.terr.directions);\n    }, []);\n    if (!card) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Error al buscar el territorio\"\n        }, void 0, false, {\n            fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n            lineNumber: 43,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container text-light mx-auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"mt-2 text-dark text-center border-bottom border-secondary\",\n                    children: [\n                        \"TERRITORIO \",\n                        card\n                    ]\n                }, void 0, true, {\n                    fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card my-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Bganimated__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                            fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card-body rounded\",\n                            children: direccion.map((d)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"border-bottom text-dark border-dark bg-light rounded-end my-2\",\n                                    style: {\n                                        height: \"35px\"\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"fw-light mx-2\",\n                                        style: {\n                                            height: \"20px\"\n                                        },\n                                        children: d\n                                    }, void 0, false, {\n                                        fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                                        lineNumber: 61,\n                                        columnNumber: 19\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                                    lineNumber: 57,\n                                    columnNumber: 17\n                                }, this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"my-2 d-grid justify-content-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mx-auto\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"btn btn-secondary\",\n                                onClick: handleClick,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"text-light text-center\",\n                                    style: {\n                                        height: \"20px\"\n                                    },\n                                    children: \"AGREGAR EDIFICIO\"\n                                }, void 0, false, {\n                                    fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                                    lineNumber: 72,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                                lineNumber: 71,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mx-auto\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"btn btn-info mt-2\",\n                                onClick: handleExample,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"text-light text-center\",\n                                    style: {\n                                        height: \"20px\"\n                                    },\n                                    children: \"EJEMPLO AUTO\"\n                                }, void 0, false, {\n                                    fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                                    lineNumber: 79,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                                lineNumber: 78,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n            lineNumber: 48,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n_s(CardPage, \"vweLtkhEgDiuFqCaBoEUmlIuO0w=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = CardPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CardPage);\nvar _c;\n$RefreshReg$(_c, \"CardPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90ZXJyaXRvcmlvL1tpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ0k7QUFDUztBQUNSO0FBQ0U7QUFFL0MsU0FBU08sV0FBVzs7SUFDbEIsTUFBTUMsU0FBU1Isc0RBQVNBO0lBQ3hCLE1BQU0sRUFBRVMsR0FBRSxFQUFFLEdBQUdELE9BQU9FLEtBQUs7SUFDM0JDLFFBQVFDLEdBQUcsQ0FBQ0g7SUFDWixNQUFNSSxPQUFPUCxtREFBZ0IsQ0FBQyxDQUFDUyxJQUFNQSxLQUFLTjtJQUMxQ0UsUUFBUUMsR0FBRyxDQUFDQztJQUVaLE1BQU0sQ0FBQ0csV0FBV0MsYUFBYSxHQUFHZiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRTdDLFNBQVNnQixZQUFZQyxDQUFDLEVBQUU7UUFDdEJBLEVBQUVDLGNBQWM7UUFDaEJULFFBQVFDLEdBQUcsQ0FBQztRQUNaLElBQUlTLFNBQVNDLE9BQU8scUNBQWtDO1FBQ3RELElBQUlELFdBQVcsSUFBSSxJQUFJQSxXQUFXLElBQUk7WUFDcENFLE1BQU07UUFDUixPQUFPO1lBQ0xOLGFBQWE7bUJBQUlEO2dCQUFXSzthQUFPO1lBQ25DVixRQUFRQyxHQUFHLENBQUNJO1FBQ2QsQ0FBQztJQUNIO0lBRUEsU0FBU1EsY0FBY0wsQ0FBQyxFQUFFO1FBQ3hCQSxFQUFFQyxjQUFjO1FBQ2hCLE1BQU1LLFNBQVNDLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0UsTUFBTSxLQUFLdkIsdURBQW9CO1FBQzlEWSxhQUFhO2VBQ1JEO1lBQ0YsR0FBMkJVLE9BQXpCckIsZ0RBQWEsQ0FBQ29CLE9BQU8sRUFBQyxLQUE0QyxPQUF6Q0MsS0FBS0MsS0FBSyxDQUFDSSxLQUFLSCxNQUFNLEtBQUssTUFBTSxJQUFJO1NBQ2xFO0lBQ0g7SUFFQTNCLGdEQUFTQSxDQUFDLElBQU07UUFDZFUsUUFBUUMsR0FBRyxDQUFDO1FBQ1pLLGFBQWFaLGtEQUFlO0lBQzlCLEdBQUcsRUFBRTtJQUVMLElBQUksQ0FBQ1EsTUFBTTtRQUNULHFCQUFPLDhEQUFDb0I7c0JBQUk7Ozs7OztJQUNkLENBQUM7SUFFRCxxQkFDRSw4REFBQzdCLDBEQUFNQTtrQkFDTCw0RUFBQzZCO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDQztvQkFBR0QsV0FBVTs7d0JBQTREO3dCQUM1RHJCOzs7Ozs7OzhCQUVkLDhEQUFDb0I7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDL0IsOERBQVVBOzs7OztzQ0FDWCw4REFBQzhCOzRCQUFJQyxXQUFVO3NDQUNabEIsVUFBVW9CLEdBQUcsQ0FBQyxDQUFDQyxJQUFNO2dDQUNwQixxQkFDRSw4REFBQ0o7b0NBQ0NDLFdBQVU7b0NBQ1ZJLE9BQU87d0NBQUVDLFFBQVE7b0NBQU87OENBRXhCLDRFQUFDQzt3Q0FBR04sV0FBVTt3Q0FBZ0JJLE9BQU87NENBQUVDLFFBQVE7d0NBQU87a0RBQ25ERjs7Ozs7Ozs7Ozs7NEJBSVQ7Ozs7Ozs7Ozs7Ozs4QkFHSiw4REFBQ0o7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDRDs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ087Z0NBQU9QLFdBQVU7Z0NBQW9CUSxTQUFTeEI7MENBQzdDLDRFQUFDeUI7b0NBQUdULFdBQVU7b0NBQXlCSSxPQUFPO3dDQUFFQyxRQUFRO29DQUFPOzhDQUFHOzs7Ozs7Ozs7Ozs7Ozs7O3NDQUt0RSw4REFBQ047NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUNPO2dDQUFPUCxXQUFVO2dDQUFvQlEsU0FBU2xCOzBDQUM3Qyw0RUFBQ21CO29DQUFHVCxXQUFVO29DQUF5QkksT0FBTzt3Q0FBRUMsUUFBUTtvQ0FBTzs4Q0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU2hGO0dBakZTaEM7O1FBQ1FQLGtEQUFTQTs7O0tBRGpCTztBQW1GVCwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy90ZXJyaXRvcmlvL1tpZF0uanM/M2I4NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCZ2FuaW1hdGVkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQmdhbmltYXRlZCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgeyB0ZXJyLCB0ZXJyaXRvcmlvcyB9IGZyb20gJy4uLy4uL2RhdGEnO1xyXG5cclxuZnVuY3Rpb24gQ2FyZFBhZ2UoKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnNvbGUubG9nKGlkKTtcclxuICBjb25zdCBjYXJkID0gdGVycml0b3Jpb3MuZmluZCgoYykgPT4gYyA9PSBpZCk7XHJcbiAgY29uc29sZS5sb2coY2FyZCk7XHJcblxyXG4gIGNvbnN0IFtkaXJlY2Npb24sIHNldGRpcmVjY2lvbl0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnNvbGUubG9nKCdjbGlja2VkJyk7XHJcbiAgICBsZXQgbm9tYnJlID0gcHJvbXB0KCdJbmdyZXNhIGxhIGRpcmVjY2nDs24gcG9yIGZhdm9yJywgJycpO1xyXG4gICAgaWYgKG5vbWJyZSA9PT0gbnVsbCB8fCBub21icmUgPT09ICcnKSB7XHJcbiAgICAgIGFsZXJ0KCdObyBpbmdyZXNhc3RlIG5pbmd1biBkYXRvJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRkaXJlY2Npb24oWy4uLmRpcmVjY2lvbiwgbm9tYnJlXSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRpcmVjY2lvbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVFeGFtcGxlKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHJJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRlcnIuZXhhbXBsZXMubGVuZ3RoKTtcclxuICAgIHNldGRpcmVjY2lvbihbXHJcbiAgICAgIC4uLmRpcmVjY2lvbixcclxuICAgICAgYCR7dGVyci5leGFtcGxlc1tySW5kZXhdfSAke01hdGguZmxvb3IobWF0aC5yYW5kb20oKSAqIDMwKSAqIDcgKyAxMDB9YCxcclxuICAgIF0pO1xyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdlZmZlY3QgYWN0aXZvJyk7XHJcbiAgICBzZXRkaXJlY2Npb24odGVyci5kaXJlY3Rpb25zKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGlmICghY2FyZCkge1xyXG4gICAgcmV0dXJuIDxkaXY+RXJyb3IgYWwgYnVzY2FyIGVsIHRlcnJpdG9yaW88L2Rpdj47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciB0ZXh0LWxpZ2h0IG14LWF1dG8nPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9J210LTIgdGV4dC1kYXJrIHRleHQtY2VudGVyIGJvcmRlci1ib3R0b20gYm9yZGVyLXNlY29uZGFyeSc+XHJcbiAgICAgICAgICBURVJSSVRPUklPIHtjYXJkfVxyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQgbXktMyc+XHJcbiAgICAgICAgICA8QmdhbmltYXRlZCAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtYm9keSByb3VuZGVkJz5cclxuICAgICAgICAgICAge2RpcmVjY2lvbi5tYXAoKGQpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2JvcmRlci1ib3R0b20gdGV4dC1kYXJrIGJvcmRlci1kYXJrIGJnLWxpZ2h0IHJvdW5kZWQtZW5kIG15LTInXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogJzM1cHgnIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J2Z3LWxpZ2h0IG14LTInIHN0eWxlPXt7IGhlaWdodDogJzIwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIHtkfVxyXG4gICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXktMiBkLWdyaWQganVzdGlmeS1jb250ZW50LWNlbnRlcic+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXgtYXV0byc+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLXNlY29uZGFyeScgb25DbGljaz17aGFuZGxlQ2xpY2t9PlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J3RleHQtbGlnaHQgdGV4dC1jZW50ZXInIHN0eWxlPXt7IGhlaWdodDogJzIwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgQUdSRUdBUiBFRElGSUNJT1xyXG4gICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXgtYXV0byc+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLWluZm8gbXQtMicgb25DbGljaz17aGFuZGxlRXhhbXBsZX0+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0ndGV4dC1saWdodCB0ZXh0LWNlbnRlcicgc3R5bGU9e3sgaGVpZ2h0OiAnMjBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICBFSkVNUExPIEFVVE8gXHJcbiAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkUGFnZTtcclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQmdhbmltYXRlZCIsIkxheW91dCIsInRlcnIiLCJ0ZXJyaXRvcmlvcyIsIkNhcmRQYWdlIiwicm91dGVyIiwiaWQiLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJjYXJkIiwiZmluZCIsImMiLCJkaXJlY2Npb24iLCJzZXRkaXJlY2Npb24iLCJoYW5kbGVDbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm5vbWJyZSIsInByb21wdCIsImFsZXJ0IiwiaGFuZGxlRXhhbXBsZSIsInJJbmRleCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImV4YW1wbGVzIiwibGVuZ3RoIiwibWF0aCIsImRpcmVjdGlvbnMiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsIm1hcCIsImQiLCJzdHlsZSIsImhlaWdodCIsImgyIiwiYnV0dG9uIiwib25DbGljayIsImgzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/territorio/[id].js\n"));

/***/ })

});