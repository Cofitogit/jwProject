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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Bganimated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Bganimated */ \"./components/Bganimated.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data */ \"./data.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction CardPage() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { id  } = router.query;\n    console.log(id);\n    const card = _data__WEBPACK_IMPORTED_MODULE_5__.territorios.find((c)=>c == id);\n    console.log(card);\n    const [direccion, setdireccion] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    function handleClick(e) {\n        e.preventDefault();\n        console.log(\"clicked\");\n        let nombre = prompt(\"Ingresa la direcci\\xf3n por favor\", \"\");\n        if (nombre === null || nombre === \"\") {\n            alert(\"No ingresaste ningun dato\");\n        } else {\n            setdireccion([\n                ...direccion,\n                nombre\n            ]);\n            console.log(direccion);\n        }\n    }\n    function handleExample(e) {\n        e.preventDefault();\n        const rIndex = Math.floor(Math.random() * _data__WEBPACK_IMPORTED_MODULE_5__.terr.examples.length);\n        setdireccion([\n            ...direccion,\n            \"\".concat(_data__WEBPACK_IMPORTED_MODULE_5__.terr.examples[rIndex], \" (\").concat(rIndex * 7 + 100, \")\")\n        ]);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        console.log(\"effect activo\");\n        setdireccion(_data__WEBPACK_IMPORTED_MODULE_5__.terr.directions);\n    }, []);\n    if (!card) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Error al buscar el territorio\"\n        }, void 0, false, {\n            fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n            lineNumber: 43,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container text-light mx-auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"mt-2 text-dark text-center border-bottom border-secondary\",\n                    children: [\n                        \"TERRITORIO \",\n                        card\n                    ]\n                }, void 0, true, {\n                    fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card my-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Bganimated__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                            fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card-body rounded\",\n                            children: direccion.map((d)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"border-bottom text-dark border-dark bg-light rounded-end my-2\",\n                                    style: {\n                                        height: \"35px\"\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"fw-light mx-2\",\n                                        style: {\n                                            height: \"20px\"\n                                        },\n                                        children: d\n                                    }, void 0, false, {\n                                        fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                                        lineNumber: 61,\n                                        columnNumber: 19\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                                    lineNumber: 57,\n                                    columnNumber: 17\n                                }, this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"my-2 d-grid justify-content-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"btn btn-secondary\",\n                                onClick: handleClick,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"text-light text-center\",\n                                    style: {\n                                        height: \"20px\"\n                                    },\n                                    children: \"AGREGAR EDIFICIO\"\n                                }, void 0, false, {\n                                    fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                                    lineNumber: 72,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                                lineNumber: 71,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"btn btn-info mt-2\",\n                                onClick: handleExample,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"text-light text-center\",\n                                    style: {\n                                        height: \"20px\"\n                                    },\n                                    children: \"AGREGAR EJEMPLO\"\n                                }, void 0, false, {\n                                    fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                                    lineNumber: 79,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                                lineNumber: 78,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n            lineNumber: 48,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"Z:\\\\WEB\\\\jwProject\\\\pages\\\\territorio\\\\[id].js\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n_s(CardPage, \"vweLtkhEgDiuFqCaBoEUmlIuO0w=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = CardPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CardPage);\nvar _c;\n$RefreshReg$(_c, \"CardPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90ZXJyaXRvcmlvL1tpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ0k7QUFDUztBQUNSO0FBQ0U7QUFFL0MsU0FBU08sV0FBVzs7SUFDbEIsTUFBTUMsU0FBU1Isc0RBQVNBO0lBQ3hCLE1BQU0sRUFBRVMsR0FBRSxFQUFFLEdBQUdELE9BQU9FLEtBQUs7SUFDM0JDLFFBQVFDLEdBQUcsQ0FBQ0g7SUFDWixNQUFNSSxPQUFPUCxtREFBZ0IsQ0FBQyxDQUFDUyxJQUFNQSxLQUFLTjtJQUMxQ0UsUUFBUUMsR0FBRyxDQUFDQztJQUVaLE1BQU0sQ0FBQ0csV0FBV0MsYUFBYSxHQUFHZiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRTdDLFNBQVNnQixZQUFZQyxDQUFDLEVBQUU7UUFDdEJBLEVBQUVDLGNBQWM7UUFDaEJULFFBQVFDLEdBQUcsQ0FBQztRQUNaLElBQUlTLFNBQVNDLE9BQU8scUNBQWtDO1FBQ3RELElBQUlELFdBQVcsSUFBSSxJQUFJQSxXQUFXLElBQUk7WUFDcENFLE1BQU07UUFDUixPQUFPO1lBQ0xOLGFBQWE7bUJBQUlEO2dCQUFXSzthQUFPO1lBQ25DVixRQUFRQyxHQUFHLENBQUNJO1FBQ2QsQ0FBQztJQUNIO0lBRUEsU0FBU1EsY0FBY0wsQ0FBQyxFQUFFO1FBQ3hCQSxFQUFFQyxjQUFjO1FBQ2hCLE1BQU1LLFNBQVNDLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0UsTUFBTSxLQUFLdkIsdURBQW9CO1FBQzlEWSxhQUFhO2VBQ1JEO1lBQ0YsR0FBNEJTLE9BQTFCcEIsZ0RBQWEsQ0FBQ29CLE9BQU8sRUFBQyxNQUFxQixPQUFqQkEsU0FBUyxJQUFJLEtBQUk7U0FDL0M7SUFDSDtJQUVBeEIsZ0RBQVNBLENBQUMsSUFBTTtRQUNkVSxRQUFRQyxHQUFHLENBQUM7UUFDWkssYUFBYVosa0RBQWU7SUFDOUIsR0FBRyxFQUFFO0lBRUwsSUFBSSxDQUFDUSxNQUFNO1FBQ1QscUJBQU8sOERBQUNtQjtzQkFBSTs7Ozs7O0lBQ2QsQ0FBQztJQUVELHFCQUNFLDhEQUFDNUIsMERBQU1BO2tCQUNMLDRFQUFDNEI7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUFHRCxXQUFVOzt3QkFBNEQ7d0JBQzVEcEI7Ozs7Ozs7OEJBRWQsOERBQUNtQjtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUM5Qiw4REFBVUE7Ozs7O3NDQUNYLDhEQUFDNkI7NEJBQUlDLFdBQVU7c0NBQ1pqQixVQUFVbUIsR0FBRyxDQUFDLENBQUNDLElBQU07Z0NBQ3BCLHFCQUNFLDhEQUFDSjtvQ0FDQ0MsV0FBVTtvQ0FDVkksT0FBTzt3Q0FBRUMsUUFBUTtvQ0FBTzs4Q0FFeEIsNEVBQUNDO3dDQUFHTixXQUFVO3dDQUFnQkksT0FBTzs0Q0FBRUMsUUFBUTt3Q0FBTztrREFDbkRGOzs7Ozs7Ozs7Ozs0QkFJVDs7Ozs7Ozs7Ozs7OzhCQUdKLDhEQUFDSjtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNEO3NDQUNDLDRFQUFDUTtnQ0FBT1AsV0FBVTtnQ0FBb0JRLFNBQVN2QjswQ0FDN0MsNEVBQUN3QjtvQ0FBR1QsV0FBVTtvQ0FBeUJJLE9BQU87d0NBQUVDLFFBQVE7b0NBQU87OENBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBS3RFLDhEQUFDTjtzQ0FDQyw0RUFBQ1E7Z0NBQU9QLFdBQVU7Z0NBQW9CUSxTQUFTakI7MENBQzdDLDRFQUFDa0I7b0NBQUdULFdBQVU7b0NBQXlCSSxPQUFPO3dDQUFFQyxRQUFRO29DQUFPOzhDQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTaEY7R0FqRlMvQjs7UUFDUVAsa0RBQVNBOzs7S0FEakJPO0FBbUZULCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3RlcnJpdG9yaW8vW2lkXS5qcz8zYjg0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJnYW5pbWF0ZWQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CZ2FuaW1hdGVkJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCB7IHRlcnIsIHRlcnJpdG9yaW9zIH0gZnJvbSAnLi4vLi4vZGF0YSc7XHJcblxyXG5mdW5jdGlvbiBDYXJkUGFnZSgpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc29sZS5sb2coaWQpO1xyXG4gIGNvbnN0IGNhcmQgPSB0ZXJyaXRvcmlvcy5maW5kKChjKSA9PiBjID09IGlkKTtcclxuICBjb25zb2xlLmxvZyhjYXJkKTtcclxuXHJcbiAgY29uc3QgW2RpcmVjY2lvbiwgc2V0ZGlyZWNjaW9uXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc29sZS5sb2coJ2NsaWNrZWQnKTtcclxuICAgIGxldCBub21icmUgPSBwcm9tcHQoJ0luZ3Jlc2EgbGEgZGlyZWNjacOzbiBwb3IgZmF2b3InLCAnJyk7XHJcbiAgICBpZiAobm9tYnJlID09PSBudWxsIHx8IG5vbWJyZSA9PT0gJycpIHtcclxuICAgICAgYWxlcnQoJ05vIGluZ3Jlc2FzdGUgbmluZ3VuIGRhdG8nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldGRpcmVjY2lvbihbLi4uZGlyZWNjaW9uLCBub21icmVdKTtcclxuICAgICAgY29uc29sZS5sb2coZGlyZWNjaW9uKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUV4YW1wbGUoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgckluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGVyci5leGFtcGxlcy5sZW5ndGgpO1xyXG4gICAgc2V0ZGlyZWNjaW9uKFtcclxuICAgICAgLi4uZGlyZWNjaW9uLFxyXG4gICAgICBgJHt0ZXJyLmV4YW1wbGVzW3JJbmRleF19ICgke3JJbmRleCAqIDcgKyAxMDB9KWAsXHJcbiAgICBdKTtcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnZWZmZWN0IGFjdGl2bycpO1xyXG4gICAgc2V0ZGlyZWNjaW9uKHRlcnIuZGlyZWN0aW9ucyk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBpZiAoIWNhcmQpIHtcclxuICAgIHJldHVybiA8ZGl2PkVycm9yIGFsIGJ1c2NhciBlbCB0ZXJyaXRvcmlvPC9kaXY+O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgdGV4dC1saWdodCBteC1hdXRvJz5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPSdtdC0yIHRleHQtZGFyayB0ZXh0LWNlbnRlciBib3JkZXItYm90dG9tIGJvcmRlci1zZWNvbmRhcnknPlxyXG4gICAgICAgICAgVEVSUklUT1JJTyB7Y2FyZH1cclxuICAgICAgICA8L2gxPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkIG15LTMnPlxyXG4gICAgICAgICAgPEJnYW5pbWF0ZWQgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLWJvZHkgcm91bmRlZCc+XHJcbiAgICAgICAgICAgIHtkaXJlY2Npb24ubWFwKChkKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdib3JkZXItYm90dG9tIHRleHQtZGFyayBib3JkZXItZGFyayBiZy1saWdodCByb3VuZGVkLWVuZCBteS0yJ1xyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6ICczNXB4JyB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdmdy1saWdodCBteC0yJyBzdHlsZT17eyBoZWlnaHQ6ICcyMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICB7ZH1cclxuICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J215LTIgZC1ncmlkIGp1c3RpZnktY29udGVudC1jZW50ZXInPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tc2Vjb25kYXJ5JyBvbkNsaWNrPXtoYW5kbGVDbGlja30+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0ndGV4dC1saWdodCB0ZXh0LWNlbnRlcicgc3R5bGU9e3sgaGVpZ2h0OiAnMjBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICBBR1JFR0FSIEVESUZJQ0lPXHJcbiAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLWluZm8gbXQtMicgb25DbGljaz17aGFuZGxlRXhhbXBsZX0+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0ndGV4dC1saWdodCB0ZXh0LWNlbnRlcicgc3R5bGU9e3sgaGVpZ2h0OiAnMjBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICBBR1JFR0FSIEVKRU1QTE9cclxuICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRQYWdlO1xyXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJCZ2FuaW1hdGVkIiwiTGF5b3V0IiwidGVyciIsInRlcnJpdG9yaW9zIiwiQ2FyZFBhZ2UiLCJyb3V0ZXIiLCJpZCIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsImNhcmQiLCJmaW5kIiwiYyIsImRpcmVjY2lvbiIsInNldGRpcmVjY2lvbiIsImhhbmRsZUNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0Iiwibm9tYnJlIiwicHJvbXB0IiwiYWxlcnQiLCJoYW5kbGVFeGFtcGxlIiwickluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiZXhhbXBsZXMiLCJsZW5ndGgiLCJkaXJlY3Rpb25zIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJtYXAiLCJkIiwic3R5bGUiLCJoZWlnaHQiLCJoMiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJoMyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/territorio/[id].js\n"));

/***/ })

});