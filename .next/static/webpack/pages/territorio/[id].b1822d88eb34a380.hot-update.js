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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Bganimated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Bganimated */ \"./components/Bganimated.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data */ \"./data.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction CardPage() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { id  } = router.query;\n    console.log(id);\n    const card = _data__WEBPACK_IMPORTED_MODULE_5__.territorios.find((c)=>c == id);\n    console.log(card);\n    const [direccion, setdireccion] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    function handleClick(e) {\n        e.preventDefault();\n        console.log(\"clicked\");\n        let nombre = prompt(\"Ingresa la direcci\\xf3n por favor\", \"\");\n        if (nombre === null || nombre === \"\") {\n            alert(\"No ingresaste ningun dato\");\n        } else {\n            setdireccion([\n                ..._data__WEBPACK_IMPORTED_MODULE_5__.terr.directions,\n                nombre\n            ]);\n            console.log(direccion);\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        console.log(\"effect activo\");\n        setdireccion(_data__WEBPACK_IMPORTED_MODULE_5__.terr.directions);\n    }, [\n        direccion\n    ]);\n    if (!card) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Error al buscar el territorio\"\n        }, void 0, false, {\n            fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n            lineNumber: 38,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container text-light mx-auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"mt-2 text-dark text-center border-bottom border-secondary\",\n                    children: [\n                        \"TERRITORIO \",\n                        card\n                    ]\n                }, void 0, true, {\n                    fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card my-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Bganimated__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                            fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card-body rounded\",\n                            children: [\n                                direccion.map((d)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"border-bottom text-dark border-dark bg-light rounded-end my-2\",\n                                        style: {\n                                            height: \"35px\"\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: \"fw-light mx-2\",\n                                            style: {\n                                                height: \"20px\"\n                                            },\n                                            children: d\n                                        }, void 0, false, {\n                                            fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                                            lineNumber: 56,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                                        lineNumber: 52,\n                                        columnNumber: 17\n                                    }, this);\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"border-bottom text-dark border-dark bg-light rounded-end my-2\",\n                                    style: {\n                                        height: \"35px\"\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"fw-light mx-2\",\n                                        style: {\n                                            height: \"20px\"\n                                        },\n                                        children: \"Juncal 135\"\n                                    }, void 0, false, {\n                                        fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                                        lineNumber: 66,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                                    lineNumber: 62,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"my-2 d-flex justify-content-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"btn btn-secondary\",\n                            onClick: handleClick,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"text-light text-center\",\n                                style: {\n                                    height: \"20px\"\n                                },\n                                children: \"AGREGAR EDIFICIO\"\n                            }, void 0, false, {\n                                fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                                lineNumber: 75,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                            lineNumber: 74,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                        lineNumber: 73,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n            lineNumber: 43,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_s(CardPage, \"vweLtkhEgDiuFqCaBoEUmlIuO0w=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = CardPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CardPage);\nvar _c;\n$RefreshReg$(_c, \"CardPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90ZXJyaXRvcmlvL1tpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ0k7QUFDUztBQUNSO0FBQ0U7QUFFL0MsU0FBU08sV0FBVzs7SUFDbEIsTUFBTUMsU0FBU1Isc0RBQVNBO0lBQ3hCLE1BQU0sRUFBRVMsR0FBRSxFQUFFLEdBQUdELE9BQU9FLEtBQUs7SUFDM0JDLFFBQVFDLEdBQUcsQ0FBQ0g7SUFDWixNQUFNSSxPQUFPUCxtREFBZ0IsQ0FBQyxDQUFDUyxJQUFNQSxLQUFLTjtJQUMxQ0UsUUFBUUMsR0FBRyxDQUFDQztJQUVaLE1BQU0sQ0FBQ0csV0FBV0MsYUFBYSxHQUFHZiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRTdDLFNBQVNnQixZQUFZQyxDQUFDLEVBQUU7UUFDdEJBLEVBQUVDLGNBQWM7UUFDaEJULFFBQVFDLEdBQUcsQ0FBQztRQUNaLElBQUlTLFNBQVNDLE9BQU8scUNBQWtDO1FBQ3RELElBQUlELFdBQVcsSUFBSSxJQUFJQSxXQUFXLElBQUk7WUFDcENFLE1BQU07UUFDUixPQUFPO1lBQ0hOLGFBQWE7bUJBQ05aLGtEQUFlO2dCQUFFZ0I7YUFDdkI7WUFFRFYsUUFBUUMsR0FBRyxDQUFDSTtRQUNoQixDQUFDO0lBQ0g7SUFFQWYsZ0RBQVNBLENBQUMsSUFBTTtRQUNkVSxRQUFRQyxHQUFHLENBQUM7UUFDWkssYUFBYVosa0RBQWU7SUFDOUIsR0FBRztRQUFDVztLQUFVO0lBR2QsSUFBSSxDQUFDSCxNQUFNO1FBQ1QscUJBQU8sOERBQUNZO3NCQUFJOzs7Ozs7SUFDZCxDQUFDO0lBRUQscUJBQ0UsOERBQUNyQiwwREFBTUE7a0JBQ0wsNEVBQUNxQjtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0M7b0JBQUdELFdBQVU7O3dCQUE0RDt3QkFDNURiOzs7Ozs7OzhCQUVkLDhEQUFDWTtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUN2Qiw4REFBVUE7Ozs7O3NDQUNYLDhEQUFDc0I7NEJBQUlDLFdBQVU7O2dDQUNaVixVQUFVWSxHQUFHLENBQUMsQ0FBQ0MsSUFBTTtvQ0FDcEIscUJBQ0UsOERBQUNKO3dDQUNDQyxXQUFVO3dDQUNWSSxPQUFPOzRDQUFFQyxRQUFRO3dDQUFPO2tEQUV4Qiw0RUFBQ0M7NENBQUdOLFdBQVU7NENBQWdCSSxPQUFPO2dEQUFFQyxRQUFROzRDQUFPO3NEQUNuREY7Ozs7Ozs7Ozs7O2dDQUlUOzhDQUNBLDhEQUFDSjtvQ0FDQ0MsV0FBVTtvQ0FDVkksT0FBTzt3Q0FBRUMsUUFBUTtvQ0FBTzs4Q0FFeEIsNEVBQUNDO3dDQUFHTixXQUFVO3dDQUFnQkksT0FBTzs0Q0FBRUMsUUFBUTt3Q0FBTztrREFBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBTS9ELDhEQUFDTjtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ0Q7a0NBQ0MsNEVBQUNROzRCQUFPUCxXQUFVOzRCQUFvQlEsU0FBU2hCO3NDQUM3Qyw0RUFBQ2lCO2dDQUFHVCxXQUFVO2dDQUF5QkksT0FBTztvQ0FBRUMsUUFBUTtnQ0FBTzswQ0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTaEY7R0E3RVN4Qjs7UUFDUVAsa0RBQVNBOzs7S0FEakJPO0FBK0VULCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3RlcnJpdG9yaW8vW2lkXS5qcz8zYjg0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJnYW5pbWF0ZWQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CZ2FuaW1hdGVkJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCB7IHRlcnIsIHRlcnJpdG9yaW9zIH0gZnJvbSAnLi4vLi4vZGF0YSc7XHJcblxyXG5mdW5jdGlvbiBDYXJkUGFnZSgpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc29sZS5sb2coaWQpO1xyXG4gIGNvbnN0IGNhcmQgPSB0ZXJyaXRvcmlvcy5maW5kKChjKSA9PiBjID09IGlkKTtcclxuICBjb25zb2xlLmxvZyhjYXJkKTtcclxuXHJcbiAgY29uc3QgW2RpcmVjY2lvbiwgc2V0ZGlyZWNjaW9uXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVDbGljayhlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zb2xlLmxvZygnY2xpY2tlZCcpO1xyXG4gICAgbGV0IG5vbWJyZSA9IHByb21wdCgnSW5ncmVzYSBsYSBkaXJlY2Npw7NuIHBvciBmYXZvcicsICcnKTtcclxuICAgIGlmIChub21icmUgPT09IG51bGwgfHwgbm9tYnJlID09PSAnJykge1xyXG4gICAgICBhbGVydCgnTm8gaW5ncmVzYXN0ZSBuaW5ndW4gZGF0bycpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRkaXJlY2Npb24oW1xyXG4gICAgICAgICAgICAuLi50ZXJyLmRpcmVjdGlvbnMsIG5vbWJyZVxyXG4gICAgICAgIF1cclxuICAgICAgICApXHJcbiAgICAgICAgY29uc29sZS5sb2coZGlyZWNjaW9uKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdlZmZlY3QgYWN0aXZvJylcclxuICAgIHNldGRpcmVjY2lvbih0ZXJyLmRpcmVjdGlvbnMpXHJcbiAgfSwgW2RpcmVjY2lvbl0pXHJcbiAgXHJcblxyXG4gIGlmICghY2FyZCkge1xyXG4gICAgcmV0dXJuIDxkaXY+RXJyb3IgYWwgYnVzY2FyIGVsIHRlcnJpdG9yaW88L2Rpdj47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciB0ZXh0LWxpZ2h0IG14LWF1dG8nPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9J210LTIgdGV4dC1kYXJrIHRleHQtY2VudGVyIGJvcmRlci1ib3R0b20gYm9yZGVyLXNlY29uZGFyeSc+XHJcbiAgICAgICAgICBURVJSSVRPUklPIHtjYXJkfVxyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQgbXktMyc+XHJcbiAgICAgICAgICA8QmdhbmltYXRlZCAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtYm9keSByb3VuZGVkJz5cclxuICAgICAgICAgICAge2RpcmVjY2lvbi5tYXAoKGQpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2JvcmRlci1ib3R0b20gdGV4dC1kYXJrIGJvcmRlci1kYXJrIGJnLWxpZ2h0IHJvdW5kZWQtZW5kIG15LTInXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogJzM1cHgnIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J2Z3LWxpZ2h0IG14LTInIHN0eWxlPXt7IGhlaWdodDogJzIwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIHtkfVxyXG4gICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9J2JvcmRlci1ib3R0b20gdGV4dC1kYXJrIGJvcmRlci1kYXJrIGJnLWxpZ2h0IHJvdW5kZWQtZW5kIG15LTInXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAnMzVweCcgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J2Z3LWxpZ2h0IG14LTInIHN0eWxlPXt7IGhlaWdodDogJzIwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgSnVuY2FsIDEzNVxyXG4gICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J215LTIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXInPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tc2Vjb25kYXJ5JyBvbkNsaWNrPXtoYW5kbGVDbGlja30+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0ndGV4dC1saWdodCB0ZXh0LWNlbnRlcicgc3R5bGU9e3sgaGVpZ2h0OiAnMjBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICBBR1JFR0FSIEVESUZJQ0lPXHJcbiAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkUGFnZTtcclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQmdhbmltYXRlZCIsIkxheW91dCIsInRlcnIiLCJ0ZXJyaXRvcmlvcyIsIkNhcmRQYWdlIiwicm91dGVyIiwiaWQiLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJjYXJkIiwiZmluZCIsImMiLCJkaXJlY2Npb24iLCJzZXRkaXJlY2Npb24iLCJoYW5kbGVDbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm5vbWJyZSIsInByb21wdCIsImFsZXJ0IiwiZGlyZWN0aW9ucyIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwibWFwIiwiZCIsInN0eWxlIiwiaGVpZ2h0IiwiaDIiLCJidXR0b24iLCJvbkNsaWNrIiwiaDMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/territorio/[id].js\n"));

/***/ })

});