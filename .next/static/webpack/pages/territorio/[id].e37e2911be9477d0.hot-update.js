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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Bganimated__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Bganimated */ \"./components/Bganimated.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data */ \"./data.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction CardPage() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { id  } = router.query;\n    const card = _data__WEBPACK_IMPORTED_MODULE_6__.territorios.find((c)=>c == id);\n    const [direccion, setdireccion] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    function handleClick(e) {\n        e.preventDefault();\n        console.log(\"clicked\");\n        let nombre = prompt(\"Ingresa la direcci\\xf3n por favor\", \"\");\n        if (nombre === null || nombre === \"\") {\n            alert(\"No ingresaste ningun dato\");\n        } else {\n            setdireccion([\n                ...direccion,\n                nombre\n            ]);\n        }\n    }\n    function handleExample(e) {\n        e.preventDefault();\n        const rIndex = Math.floor(Math.random() * _data__WEBPACK_IMPORTED_MODULE_6__.terr.examples.length);\n        setdireccion([\n            ...direccion,\n            \"\".concat(_data__WEBPACK_IMPORTED_MODULE_6__.terr.examples[rIndex], \" \").concat(Math.floor(Math.random() * 30) * 7 + 100)\n        ]);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        console.log(\"effect activo\");\n        setdireccion(_data__WEBPACK_IMPORTED_MODULE_6__.terr.directions);\n    }, []);\n    if (!card) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Error al buscar el territorio\"\n        }, void 0, false, {\n            fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n            lineNumber: 41,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"position-absolute bg-danger\",\n                style: {\n                    width: \"200px\",\n                    height: \"300px\"\n                }\n            }, void 0, false, {\n                fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container text-light mx-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"mt-2 text-dark text-center border-bottom border-secondary\",\n                        children: [\n                            \"TERRITORIO \",\n                            card\n                        ]\n                    }, void 0, true, {\n                        fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card my-3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Bganimated__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"card-body rounded\",\n                                children: direccion.map((d)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: \"/tablero/2\",\n                                        className: \"text-decoration-none\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"border-bottom text-dark border-dark bg-light rounded-end my-2\",\n                                            style: {\n                                                height: \"35px\"\n                                            },\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                className: \"fw-light mx-2\",\n                                                style: {\n                                                    height: \"20px\"\n                                                },\n                                                children: d\n                                            }, void 0, false, {\n                                                fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                                                lineNumber: 61,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                                            lineNumber: 57,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                                        lineNumber: 56,\n                                        columnNumber: 17\n                                    }, this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"my-2 d-grid justify-content-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mx-auto\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"btn btn-secondary\",\n                                    onClick: handleClick,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: \"text-light text-center\",\n                                        style: {\n                                            height: \"20px\"\n                                        },\n                                        children: \"AGREGAR EDIFICIO\"\n                                    }, void 0, false, {\n                                        fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                                        lineNumber: 73,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                                    lineNumber: 72,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mx-auto\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"btn btn-info mt-2\",\n                                    onClick: handleExample,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: \"text-light text-center\",\n                                        style: {\n                                            height: \"20px\"\n                                        },\n                                        children: \"EJEMPLO AUTO\"\n                                    }, void 0, false, {\n                                        fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                                        lineNumber: 80,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                                    lineNumber: 79,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                                lineNumber: 78,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_s(CardPage, \"vweLtkhEgDiuFqCaBoEUmlIuO0w=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = CardPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CardPage);\nvar _c;\n$RefreshReg$(_c, \"CardPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dGVycml0b3Jpby9baWRdLmpzPzNiODQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQmdhbmltYXRlZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0JnYW5pbWF0ZWQnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IHsgdGVyciwgdGVycml0b3Jpb3MgfSBmcm9tICcuLi8uLi9kYXRhJztcclxuXHJcbmZ1bmN0aW9uIENhcmRQYWdlKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcclxuICBjb25zdCBjYXJkID0gdGVycml0b3Jpb3MuZmluZCgoYykgPT4gYyA9PSBpZCk7XHJcblxyXG4gIGNvbnN0IFtkaXJlY2Npb24sIHNldGRpcmVjY2lvbl0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnNvbGUubG9nKCdjbGlja2VkJyk7XHJcbiAgICBsZXQgbm9tYnJlID0gcHJvbXB0KCdJbmdyZXNhIGxhIGRpcmVjY2nDs24gcG9yIGZhdm9yJywgJycpO1xyXG4gICAgaWYgKG5vbWJyZSA9PT0gbnVsbCB8fCBub21icmUgPT09ICcnKSB7XHJcbiAgICAgIGFsZXJ0KCdObyBpbmdyZXNhc3RlIG5pbmd1biBkYXRvJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRkaXJlY2Npb24oWy4uLmRpcmVjY2lvbiwgbm9tYnJlXSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVFeGFtcGxlKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHJJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRlcnIuZXhhbXBsZXMubGVuZ3RoKTtcclxuICAgIHNldGRpcmVjY2lvbihbXHJcbiAgICAgIC4uLmRpcmVjY2lvbixcclxuICAgICAgYCR7dGVyci5leGFtcGxlc1tySW5kZXhdfSAke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMwKSAqIDcgKyAxMDB9YCxcclxuICAgIF0pO1xyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdlZmZlY3QgYWN0aXZvJyk7XHJcbiAgICBzZXRkaXJlY2Npb24odGVyci5kaXJlY3Rpb25zKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGlmICghY2FyZCkge1xyXG4gICAgcmV0dXJuIDxkaXY+RXJyb3IgYWwgYnVzY2FyIGVsIHRlcnJpdG9yaW88L2Rpdj47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3Bvc2l0aW9uLWFic29sdXRlIGJnLWRhbmdlcicgc3R5bGU9e3t3aWR0aDogJzIwMHB4JywgaGVpZ2h0OiAnMzAwcHgnfX0+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgdGV4dC1saWdodCBteC1hdXRvJz5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPSdtdC0yIHRleHQtZGFyayB0ZXh0LWNlbnRlciBib3JkZXItYm90dG9tIGJvcmRlci1zZWNvbmRhcnknPlxyXG4gICAgICAgICAgVEVSUklUT1JJTyB7Y2FyZH1cclxuICAgICAgICA8L2gxPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkIG15LTMnPlxyXG4gICAgICAgICAgPEJnYW5pbWF0ZWQgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLWJvZHkgcm91bmRlZCc+XHJcbiAgICAgICAgICAgIHtkaXJlY2Npb24ubWFwKChkKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvdGFibGVyby8yYH0gY2xhc3NOYW1lPSd0ZXh0LWRlY29yYXRpb24tbm9uZSc+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2JvcmRlci1ib3R0b20gdGV4dC1kYXJrIGJvcmRlci1kYXJrIGJnLWxpZ2h0IHJvdW5kZWQtZW5kIG15LTInXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAnMzVweCcgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J2Z3LWxpZ2h0IG14LTInIHN0eWxlPXt7IGhlaWdodDogJzIwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2R9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXktMiBkLWdyaWQganVzdGlmeS1jb250ZW50LWNlbnRlcic+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXgtYXV0byc+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLXNlY29uZGFyeScgb25DbGljaz17aGFuZGxlQ2xpY2t9PlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J3RleHQtbGlnaHQgdGV4dC1jZW50ZXInIHN0eWxlPXt7IGhlaWdodDogJzIwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgQUdSRUdBUiBFRElGSUNJT1xyXG4gICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXgtYXV0byc+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLWluZm8gbXQtMicgb25DbGljaz17aGFuZGxlRXhhbXBsZX0+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0ndGV4dC1saWdodCB0ZXh0LWNlbnRlcicgc3R5bGU9e3sgaGVpZ2h0OiAnMjBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICBFSkVNUExPIEFVVE9cclxuICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRQYWdlO1xyXG4iXSwibmFtZXMiOlsiTGluayIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQmdhbmltYXRlZCIsIkxheW91dCIsInRlcnIiLCJ0ZXJyaXRvcmlvcyIsIkNhcmRQYWdlIiwicm91dGVyIiwiaWQiLCJxdWVyeSIsImNhcmQiLCJmaW5kIiwiYyIsImRpcmVjY2lvbiIsInNldGRpcmVjY2lvbiIsImhhbmRsZUNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsIm5vbWJyZSIsInByb21wdCIsImFsZXJ0IiwiaGFuZGxlRXhhbXBsZSIsInJJbmRleCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImV4YW1wbGVzIiwibGVuZ3RoIiwiZGlyZWN0aW9ucyIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJoMSIsIm1hcCIsImQiLCJocmVmIiwiaDIiLCJidXR0b24iLCJvbkNsaWNrIiwiaDMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/territorio/[id].js\n"));

/***/ })

});