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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Bganimated__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Bganimated */ \"./components/Bganimated.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data */ \"./data.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction CardPage() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { id  } = router.query;\n    const card = _data__WEBPACK_IMPORTED_MODULE_6__.territorios.find((c)=>c == id);\n    const [visible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [direccion, setdireccion] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    function handleClick(e) {\n        e.preventDefault();\n        setVisible(!visible);\n    }\n    function handleExample(e) {\n        e.preventDefault();\n        const rIndex = Math.floor(Math.random() * _data__WEBPACK_IMPORTED_MODULE_6__.terr.examples.length);\n        setdireccion([\n            ...direccion,\n            \"\".concat(_data__WEBPACK_IMPORTED_MODULE_6__.terr.examples[rIndex], \" \").concat(Math.floor(Math.random() * 30) * 7 + 100)\n        ]);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        console.log(\"effect activo\");\n        setdireccion(_data__WEBPACK_IMPORTED_MODULE_6__.terr.directions);\n    }, []);\n    if (!card) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Error al buscar el territorio\"\n        }, void 0, false, {\n            fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n            lineNumber: 36,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container text-light mx-auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"mt-2 text-dark text-center border-bottom border-secondary\",\n                    children: [\n                        \"TERRITORIO \",\n                        card\n                    ]\n                }, void 0, true, {\n                    fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card my-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Bganimated__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card-body rounded\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"position-absolute card-body rounded-3\",\n                                    style: {\n                                        width: \"300px\",\n                                        top: \"100px\",\n                                        left: \"50%\",\n                                        transform: \"translate(-50%, -50%)\",\n                                        backgroundColor: \"#f9e2f7\",\n                                        display: visible ? \"block\" : \"none\"\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            className: \"text-left text-secondary\",\n                                            children: \"Introduzca la direcci\\xf3n del edificio en el espacio blanco:\"\n                                        }, void 0, false, {\n                                            fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                                            lineNumber: 59,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                                            className: \"text-secondary\"\n                                        }, void 0, false, {\n                                            fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                                            lineNumber: 62,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            class: \"input-group flex-nowrap\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    class: \"input-group-text\",\n                                                    id: \"addon-wrapping\"\n                                                }, void 0, false, {\n                                                    fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                                                    lineNumber: 64,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    type: \"text\",\n                                                    class: \"form-control\",\n                                                    placeholder: \"Escribir aqu\\xed\",\n                                                    \"aria-label\": \"Direcci\\xf3n del edificio\",\n                                                    \"aria-describedby\": \"addon-wrapping\"\n                                                }, void 0, false, {\n                                                    fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                                                    lineNumber: 65,\n                                                    columnNumber: 17\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                                            lineNumber: 63,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"d-flex justify-content-between my-3\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    className: \"btn btn-success\",\n                                                    children: \"GUARDAR\"\n                                                }, void 0, false, {\n                                                    fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                                                    lineNumber: 74,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    className: \"btn btn-light\",\n                                                    children: \"CANCELAR\"\n                                                }, void 0, false, {\n                                                    fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                                                    lineNumber: 75,\n                                                    columnNumber: 17\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                                            lineNumber: 73,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                                    lineNumber: 48,\n                                    columnNumber: 13\n                                }, this),\n                                direccion.map((d)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: \"/tablero/2\",\n                                        className: \"text-decoration-none\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"border-bottom text-dark border-dark bg-light rounded-end my-2\",\n                                            style: {\n                                                height: \"35px\"\n                                            },\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                className: \"fw-light mx-2\",\n                                                style: {\n                                                    height: \"20px\"\n                                                },\n                                                children: d\n                                            }, void 0, false, {\n                                                fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                                                lineNumber: 85,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                                            lineNumber: 81,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                                        lineNumber: 80,\n                                        columnNumber: 17\n                                    }, this);\n                                })\n                            ]\n                        }, void 0, true, {\n                            fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"my-2 d-grid justify-content-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mx-auto\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"btn btn-secondary\",\n                                onClick: handleClick,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"text-light text-center\",\n                                    style: {\n                                        height: \"20px\"\n                                    },\n                                    children: \"AGREGAR EDIFICIO\"\n                                }, void 0, false, {\n                                    fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                                    lineNumber: 97,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                                lineNumber: 96,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                            lineNumber: 95,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mx-auto\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"btn btn-info mt-2\",\n                                onClick: handleExample,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"text-light text-center\",\n                                    style: {\n                                        height: \"20px\"\n                                    },\n                                    children: \"EJEMPLO AUTO\"\n                                }, void 0, false, {\n                                    fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                                    lineNumber: 104,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                                lineNumber: 103,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                            lineNumber: 102,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                    lineNumber: 94,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n            lineNumber: 41,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n}\n_s(CardPage, \"sGxooOeO1ufALL6kvZvtigmG050=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = CardPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CardPage); /**   function handleClick(e) {\r\n    e.preventDefault();\r\n    let nombre = prompt('Ingresa la dirección por favor', '');\r\n    if (nombre === null || nombre === '') {\r\n      alert('No ingresaste ningun dato');\r\n    } else {\r\n      setdireccion([...direccion, nombre]);\r\n    }\r\n  } */ \nvar _c;\n$RefreshReg$(_c, \"CardPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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N0MsNEVBQUN1QjtvQ0FBR1QsV0FBVTtvQ0FBeUJFLE9BQU87d0NBQUVvQixRQUFRO29DQUFPOzhDQUFHOzs7Ozs7Ozs7Ozs7Ozs7O3NDQUt0RSw4REFBQ3ZCOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDa0I7Z0NBQU9sQixXQUFVO2dDQUFvQndCLFNBQVNuQzswQ0FDN0MsNEVBQUNvQjtvQ0FBR1QsV0FBVTtvQ0FBeUJFLE9BQU87d0NBQUVvQixRQUFRO29DQUFPOzhDQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTaEY7R0F6R1MvQzs7UUFDUVAsa0RBQVNBOzs7S0FEakJPO0FBMkdULCtEQUFlQSxRQUFRQSxFQUFDLENBRXhCOzs7Ozs7OztJQVFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3RlcnJpdG9yaW8vW2lkXS5qcz8zYjg0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJnYW5pbWF0ZWQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CZ2FuaW1hdGVkJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCB7IHRlcnIsIHRlcnJpdG9yaW9zIH0gZnJvbSAnLi4vLi4vZGF0YSc7XHJcblxyXG5mdW5jdGlvbiBDYXJkUGFnZSgpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3QgY2FyZCA9IHRlcnJpdG9yaW9zLmZpbmQoKGMpID0+IGMgPT0gaWQpO1xyXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICBjb25zdCBbZGlyZWNjaW9uLCBzZXRkaXJlY2Npb25dID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVDbGljayhlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRWaXNpYmxlKCF2aXNpYmxlKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlRXhhbXBsZShlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBySW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0ZXJyLmV4YW1wbGVzLmxlbmd0aCk7XHJcbiAgICBzZXRkaXJlY2Npb24oW1xyXG4gICAgICAuLi5kaXJlY2Npb24sXHJcbiAgICAgIGAke3RlcnIuZXhhbXBsZXNbckluZGV4XX0gJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzMCkgKiA3ICsgMTAwfWAsXHJcbiAgICBdKTtcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnZWZmZWN0IGFjdGl2bycpO1xyXG4gICAgc2V0ZGlyZWNjaW9uKHRlcnIuZGlyZWN0aW9ucyk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBpZiAoIWNhcmQpIHtcclxuICAgIHJldHVybiA8ZGl2PkVycm9yIGFsIGJ1c2NhciBlbCB0ZXJyaXRvcmlvPC9kaXY+O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgdGV4dC1saWdodCBteC1hdXRvJz5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPSdtdC0yIHRleHQtZGFyayB0ZXh0LWNlbnRlciBib3JkZXItYm90dG9tIGJvcmRlci1zZWNvbmRhcnknPlxyXG4gICAgICAgICAgVEVSUklUT1JJTyB7Y2FyZH1cclxuICAgICAgICA8L2gxPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkIG15LTMnPlxyXG4gICAgICAgICAgPEJnYW5pbWF0ZWQgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLWJvZHkgcm91bmRlZCc+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9J3Bvc2l0aW9uLWFic29sdXRlIGNhcmQtYm9keSByb3VuZGVkLTMnXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMzAwcHgnLFxyXG4gICAgICAgICAgICAgICAgdG9wOiAnMTAwcHgnLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogJzUwJScsXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2Y5ZTJmNycsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiB2aXNpYmxlID8gXCJibG9ja1wiIDogXCJub25lXCJcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0ndGV4dC1sZWZ0IHRleHQtc2Vjb25kYXJ5Jz5cclxuICAgICAgICAgICAgICAgIEludHJvZHV6Y2EgbGEgZGlyZWNjacOzbiBkZWwgZWRpZmljaW8gZW4gZWwgZXNwYWNpbyBibGFuY286XHJcbiAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPSd0ZXh0LXNlY29uZGFyeScvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2lucHV0LWdyb3VwIGZsZXgtbm93cmFwJz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdpbnB1dC1ncm91cC10ZXh0JyBpZD0nYWRkb24td3JhcHBpbmcnPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgICBjbGFzcz0nZm9ybS1jb250cm9sJ1xyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRXNjcmliaXIgYXF1w60nXHJcbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9J0RpcmVjY2nDs24gZGVsIGVkaWZpY2lvJ1xyXG4gICAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PSdhZGRvbi13cmFwcGluZydcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBteS0zJz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLXN1Y2Nlc3MnPkdVQVJEQVI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLWxpZ2h0Jz5DQU5DRUxBUjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge2RpcmVjY2lvbi5tYXAoKGQpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC90YWJsZXJvLzJgfSBjbGFzc05hbWU9J3RleHQtZGVjb3JhdGlvbi1ub25lJz5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYm9yZGVyLWJvdHRvbSB0ZXh0LWRhcmsgYm9yZGVyLWRhcmsgYmctbGlnaHQgcm91bmRlZC1lbmQgbXktMidcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6ICczNXB4JyB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0nZnctbGlnaHQgbXgtMicgc3R5bGU9e3sgaGVpZ2h0OiAnMjBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7ZH1cclxuICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdteS0yIGQtZ3JpZCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdteC1hdXRvJz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tc2Vjb25kYXJ5JyBvbkNsaWNrPXtoYW5kbGVDbGlja30+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0ndGV4dC1saWdodCB0ZXh0LWNlbnRlcicgc3R5bGU9e3sgaGVpZ2h0OiAnMjBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICBBR1JFR0FSIEVESUZJQ0lPXHJcbiAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdteC1hdXRvJz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4taW5mbyBtdC0yJyBvbkNsaWNrPXtoYW5kbGVFeGFtcGxlfT5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSd0ZXh0LWxpZ2h0IHRleHQtY2VudGVyJyBzdHlsZT17eyBoZWlnaHQ6ICcyMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgIEVKRU1QTE8gQVVUT1xyXG4gICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZFBhZ2U7XHJcblxyXG4vKiogICBmdW5jdGlvbiBoYW5kbGVDbGljayhlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgbm9tYnJlID0gcHJvbXB0KCdJbmdyZXNhIGxhIGRpcmVjY2nDs24gcG9yIGZhdm9yJywgJycpO1xyXG4gICAgaWYgKG5vbWJyZSA9PT0gbnVsbCB8fCBub21icmUgPT09ICcnKSB7XHJcbiAgICAgIGFsZXJ0KCdObyBpbmdyZXNhc3RlIG5pbmd1biBkYXRvJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRkaXJlY2Npb24oWy4uLmRpcmVjY2lvbiwgbm9tYnJlXSk7XHJcbiAgICB9XHJcbiAgfSAqLyJdLCJuYW1lcyI6WyJMaW5rIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJCZ2FuaW1hdGVkIiwiTGF5b3V0IiwidGVyciIsInRlcnJpdG9yaW9zIiwiQ2FyZFBhZ2UiLCJyb3V0ZXIiLCJpZCIsInF1ZXJ5IiwiY2FyZCIsImZpbmQiLCJjIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJkaXJlY2Npb24iLCJzZXRkaXJlY2Npb24iLCJoYW5kbGVDbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZUV4YW1wbGUiLCJySW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJleGFtcGxlcyIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJkaXJlY3Rpb25zIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJzdHlsZSIsIndpZHRoIiwidG9wIiwibGVmdCIsInRyYW5zZm9ybSIsImJhY2tncm91bmRDb2xvciIsImRpc3BsYXkiLCJoMyIsImhyIiwiY2xhc3MiLCJzcGFuIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJhcmlhLWxhYmVsIiwiYXJpYS1kZXNjcmliZWRieSIsImJ1dHRvbiIsIm1hcCIsImQiLCJocmVmIiwiaGVpZ2h0IiwiaDIiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/territorio/[id].js\n"));

/***/ })

});