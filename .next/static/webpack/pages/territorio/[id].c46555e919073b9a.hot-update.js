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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Bganimated__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Bganimated */ \"./components/Bganimated.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data */ \"./data.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction CardPage() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { id  } = router.query;\n    const card = _data__WEBPACK_IMPORTED_MODULE_6__.territorios.find((c)=>c == id);\n    const [direccion, setdireccion] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    function handleClick(e) {\n        e.preventDefault();\n        console.log(\"clicked\");\n        let nombre = prompt(\"Ingresa la direcci\\xf3n por favor\", \"\");\n        if (nombre === null || nombre === \"\") {\n            alert(\"No ingresaste ningun dato\");\n        } else {\n            setdireccion([\n                ...direccion,\n                nombre\n            ]);\n        }\n    }\n    function handleExample(e) {\n        e.preventDefault();\n        const rIndex = Math.floor(Math.random() * _data__WEBPACK_IMPORTED_MODULE_6__.terr.examples.length);\n        setdireccion([\n            ...direccion,\n            \"\".concat(_data__WEBPACK_IMPORTED_MODULE_6__.terr.examples[rIndex], \" \").concat(Math.floor(Math.random() * 30) * 7 + 100)\n        ]);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        console.log(\"effect activo\");\n        setdireccion(_data__WEBPACK_IMPORTED_MODULE_6__.terr.directions);\n    }, []);\n    if (!card) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Error al buscar el territorio\"\n        }, void 0, false, {\n            fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n            lineNumber: 41,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container text-light mx-auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"mt-2 text-dark text-center border-bottom border-secondary\",\n                    children: [\n                        \"TERRITORIO \",\n                        card\n                    ]\n                }, void 0, true, {\n                    fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card my-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Bganimated__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card-body rounded\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"position-absolute card-body rounded-3 bg-secondary\",\n                                    style: {\n                                        width: \"300px\",\n                                        height: \"300px\",\n                                        top: \"100px\",\n                                        left: \"50%\",\n                                        transform: \"translate(-50%, -50%)\"\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            children: \"Introduzca la direcci\\xf3n del edificio en el espacio blanco:\"\n                                        }, void 0, false, {\n                                            fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                                            lineNumber: 63,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            class: \"input-group flex-nowrap\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    class: \"input-group-text\",\n                                                    id: \"addon-wrapping\"\n                                                }, void 0, false, {\n                                                    fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                                                    lineNumber: 65,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    type: \"text\",\n                                                    class: \"form-control\",\n                                                    placeholder: \"Escribe aqu\\xed\",\n                                                    \"aria-label\": \"Direcci\\xf3n del edificio\",\n                                                    \"aria-describedby\": \"addon-wrapping\"\n                                                }, void 0, false, {\n                                                    fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                                                    lineNumber: 66,\n                                                    columnNumber: 17\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                                            lineNumber: 64,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                                    lineNumber: 53,\n                                    columnNumber: 13\n                                }, this),\n                                direccion.map((d)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: \"/tablero/2\",\n                                        className: \"text-decoration-none\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"border-bottom text-dark border-dark bg-light rounded-end my-2\",\n                                            style: {\n                                                height: \"35px\"\n                                            },\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                className: \"fw-light mx-2\",\n                                                style: {\n                                                    height: \"20px\"\n                                                },\n                                                children: d\n                                            }, void 0, false, {\n                                                fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                                                lineNumber: 82,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                                            lineNumber: 78,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                                        lineNumber: 77,\n                                        columnNumber: 17\n                                    }, this);\n                                })\n                            ]\n                        }, void 0, true, {\n                            fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"my-2 d-grid justify-content-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mx-auto\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"btn btn-secondary\",\n                                onClick: handleClick,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"text-light text-center\",\n                                    style: {\n                                        height: \"20px\"\n                                    },\n                                    children: \"AGREGAR EDIFICIO\"\n                                }, void 0, false, {\n                                    fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                                    lineNumber: 94,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                                lineNumber: 93,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mx-auto\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"btn btn-info mt-2\",\n                                onClick: handleExample,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"text-light text-center\",\n                                    style: {\n                                        height: \"20px\"\n                                    },\n                                    children: \"EJEMPLO AUTO\"\n                                }, void 0, false, {\n                                    fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                                    lineNumber: 101,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                                lineNumber: 100,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                            lineNumber: 99,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                    lineNumber: 91,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_s(CardPage, \"vweLtkhEgDiuFqCaBoEUmlIuO0w=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = CardPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CardPage);\nvar _c;\n$RefreshReg$(_c, \"CardPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNvQjtnQ0FBT3BCLFdBQVU7Z0NBQW9CcUIsU0FBUzlCOzBDQUM3Qyw0RUFBQ2lCO29DQUFHUixXQUFVO29DQUF5QkUsT0FBTzt3Q0FBRUUsUUFBUTtvQ0FBTzs4Q0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU2hGO0dBdEdTOUI7O1FBQ1FQLGtEQUFTQTs7O0tBRGpCTztBQXdHVCwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy90ZXJyaXRvcmlvL1tpZF0uanM/M2I4NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCZ2FuaW1hdGVkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQmdhbmltYXRlZCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgeyB0ZXJyLCB0ZXJyaXRvcmlvcyB9IGZyb20gJy4uLy4uL2RhdGEnO1xyXG5cclxuZnVuY3Rpb24gQ2FyZFBhZ2UoKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnN0IGNhcmQgPSB0ZXJyaXRvcmlvcy5maW5kKChjKSA9PiBjID09IGlkKTtcclxuXHJcbiAgY29uc3QgW2RpcmVjY2lvbiwgc2V0ZGlyZWNjaW9uXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc29sZS5sb2coJ2NsaWNrZWQnKTtcclxuICAgIGxldCBub21icmUgPSBwcm9tcHQoJ0luZ3Jlc2EgbGEgZGlyZWNjacOzbiBwb3IgZmF2b3InLCAnJyk7XHJcbiAgICBpZiAobm9tYnJlID09PSBudWxsIHx8IG5vbWJyZSA9PT0gJycpIHtcclxuICAgICAgYWxlcnQoJ05vIGluZ3Jlc2FzdGUgbmluZ3VuIGRhdG8nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldGRpcmVjY2lvbihbLi4uZGlyZWNjaW9uLCBub21icmVdKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUV4YW1wbGUoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgckluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGVyci5leGFtcGxlcy5sZW5ndGgpO1xyXG4gICAgc2V0ZGlyZWNjaW9uKFtcclxuICAgICAgLi4uZGlyZWNjaW9uLFxyXG4gICAgICBgJHt0ZXJyLmV4YW1wbGVzW3JJbmRleF19ICR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMzApICogNyArIDEwMH1gLFxyXG4gICAgXSk7XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ2VmZmVjdCBhY3Rpdm8nKTtcclxuICAgIHNldGRpcmVjY2lvbih0ZXJyLmRpcmVjdGlvbnMpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgaWYgKCFjYXJkKSB7XHJcbiAgICByZXR1cm4gPGRpdj5FcnJvciBhbCBidXNjYXIgZWwgdGVycml0b3JpbzwvZGl2PjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIHRleHQtbGlnaHQgbXgtYXV0byc+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT0nbXQtMiB0ZXh0LWRhcmsgdGV4dC1jZW50ZXIgYm9yZGVyLWJvdHRvbSBib3JkZXItc2Vjb25kYXJ5Jz5cclxuICAgICAgICAgIFRFUlJJVE9SSU8ge2NhcmR9XHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZCBteS0zJz5cclxuICAgICAgICAgIDxCZ2FuaW1hdGVkIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZC1ib2R5IHJvdW5kZWQnPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdwb3NpdGlvbi1hYnNvbHV0ZSBjYXJkLWJvZHkgcm91bmRlZC0zIGJnLXNlY29uZGFyeSdcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6ICczMDBweCcsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICczMDBweCcsXHJcbiAgICAgICAgICAgICAgICB0b3A6ICcxMDBweCcsXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAnNTAlJyxcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGgzPkludHJvZHV6Y2EgbGEgZGlyZWNjacOzbiBkZWwgZWRpZmljaW8gZW4gZWwgZXNwYWNpbyBibGFuY286PC9oMz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdpbnB1dC1ncm91cCBmbGV4LW5vd3JhcCc+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0naW5wdXQtZ3JvdXAtdGV4dCcgaWQ9J2FkZG9uLXdyYXBwaW5nJz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgICAgY2xhc3M9J2Zvcm0tY29udHJvbCdcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VzY3JpYmUgYXF1w60nXHJcbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9J0RpcmVjY2nDs24gZGVsIGVkaWZpY2lvJ1xyXG4gICAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PSdhZGRvbi13cmFwcGluZydcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7ZGlyZWNjaW9uLm1hcCgoZCkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3RhYmxlcm8vMmB9IGNsYXNzTmFtZT0ndGV4dC1kZWNvcmF0aW9uLW5vbmUnPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdib3JkZXItYm90dG9tIHRleHQtZGFyayBib3JkZXItZGFyayBiZy1saWdodCByb3VuZGVkLWVuZCBteS0yJ1xyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogJzM1cHgnIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdmdy1saWdodCBteC0yJyBzdHlsZT17eyBoZWlnaHQ6ICcyMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtkfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J215LTIgZC1ncmlkIGp1c3RpZnktY29udGVudC1jZW50ZXInPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J214LWF1dG8nPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1zZWNvbmRhcnknIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSd0ZXh0LWxpZ2h0IHRleHQtY2VudGVyJyBzdHlsZT17eyBoZWlnaHQ6ICcyMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgIEFHUkVHQVIgRURJRklDSU9cclxuICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J214LWF1dG8nPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1pbmZvIG10LTInIG9uQ2xpY2s9e2hhbmRsZUV4YW1wbGV9PlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J3RleHQtbGlnaHQgdGV4dC1jZW50ZXInIHN0eWxlPXt7IGhlaWdodDogJzIwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgRUpFTVBMTyBBVVRPXHJcbiAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkUGFnZTtcclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkJnYW5pbWF0ZWQiLCJMYXlvdXQiLCJ0ZXJyIiwidGVycml0b3Jpb3MiLCJDYXJkUGFnZSIsInJvdXRlciIsImlkIiwicXVlcnkiLCJjYXJkIiwiZmluZCIsImMiLCJkaXJlY2Npb24iLCJzZXRkaXJlY2Npb24iLCJoYW5kbGVDbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJub21icmUiLCJwcm9tcHQiLCJhbGVydCIsImhhbmRsZUV4YW1wbGUiLCJySW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJleGFtcGxlcyIsImxlbmd0aCIsImRpcmVjdGlvbnMiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIiwiaDMiLCJjbGFzcyIsInNwYW4iLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsImFyaWEtbGFiZWwiLCJhcmlhLWRlc2NyaWJlZGJ5IiwibWFwIiwiZCIsImhyZWYiLCJoMiIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/territorio/[id].js\n"));

/***/ })

});