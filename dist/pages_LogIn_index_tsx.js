"use strict";
(self["webpackChunkslack_clone"] = self["webpackChunkslack_clone"] || []).push([["pages_LogIn_index_tsx"],{

/***/ "./pages/LogIn/index.tsx":
/*!*******************************!*\
  !*** ./pages/LogIn/index.tsx ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hooks/useInput */ "./hooks/useInput.ts");
/* harmony import */ var _pages_SignUp_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pages/SignUp/styles */ "./pages/SignUp/styles.tsx");
/* harmony import */ var _utils_fetcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @utils/fetcher */ "./utils/fetcher.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s2 = __webpack_require__.$Refresh$.signature();

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var LogIn = function LogIn() {
  _s2();

  var _useSWR = (0,swr__WEBPACK_IMPORTED_MODULE_5__["default"])('/api/users', _utils_fetcher__WEBPACK_IMPORTED_MODULE_2__["default"]),
      data = _useSWR.data,
      error = _useSWR.error,
      revalidate = _useSWR.revalidate,
      mutate = _useSWR.mutate;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      logInError = _useState2[0],
      setLogInError = _useState2[1];

  var _useInput = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_0__["default"])(''),
      _useInput2 = _slicedToArray(_useInput, 2),
      email = _useInput2[0],
      onChangeEmail = _useInput2[1];

  var _useInput3 = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_0__["default"])(['']),
      _useInput4 = _slicedToArray(_useInput3, 2),
      password = _useInput4[0],
      onChangePassword = _useInput4[1];

  var onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(function (e) {
    e.preventDefault();
    setLogInError(false);
    axios__WEBPACK_IMPORTED_MODULE_3___default().post('/api/users/login', {
      email: email,
      password: password
    }, {
      withCredentials: true
    }).then(function (response) {
      // mutate(response.data, false);
      revalidate();
    }).catch(function (error) {
      var _error$response, _error$response$data;

      setLogInError(((_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.statusCode) === 401);
    });
  }, [email, password]);

  if (data === undefined) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", null, "Loading...");
  }

  if (data) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_router__WEBPACK_IMPORTED_MODULE_6__.Redirect, {
      to: "/workspace/sleact/channel/\uC77C\uBC18"
    });
  } // if (!error && userData) {
  //   console.log('로그인됨', userData);
  //   return <Redirect to="/workspace/sleact/channel/일반" />;
  // }


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
    id: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_pages_SignUp_styles__WEBPACK_IMPORTED_MODULE_1__.Header, null, "Sleact"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_pages_SignUp_styles__WEBPACK_IMPORTED_MODULE_1__.Form, {
    onSubmit: onSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_pages_SignUp_styles__WEBPACK_IMPORTED_MODULE_1__.Label, {
    id: "email-label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", null, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_pages_SignUp_styles__WEBPACK_IMPORTED_MODULE_1__.Input, {
    type: "email",
    id: "email",
    name: "email",
    value: email,
    onChange: onChangeEmail
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_pages_SignUp_styles__WEBPACK_IMPORTED_MODULE_1__.Label, {
    id: "password-label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", null, "Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_pages_SignUp_styles__WEBPACK_IMPORTED_MODULE_1__.Input, {
    type: "password",
    id: "password",
    name: "password",
    value: password,
    onChange: onChangePassword
  })), logInError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_pages_SignUp_styles__WEBPACK_IMPORTED_MODULE_1__.Error, null, "Not matched")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_pages_SignUp_styles__WEBPACK_IMPORTED_MODULE_1__.Button, {
    type: "submit"
  }, "LogIn")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_pages_SignUp_styles__WEBPACK_IMPORTED_MODULE_1__.LinkContainer, null, "You are not registed yet? \xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Link, {
    to: "/signup"
  }, "Sign Up")));
};

_s2(LogIn, "ZGC3x5a9h82bJQS/WAeDRXnyEh8=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_5__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_0__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_0__["default"]];
});

_c = LogIn;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LogIn);

var _c;

__webpack_require__.$Refresh$.register(_c, "LogIn");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBQywrREFBRCx1REFFRSxpREFBQyxrREFBRDtBQUFNLE1BQUUsRUFBQztBQUFULGVBRkYsQ0FsQkYsQ0FERjtBQXlCRCxDQWxFRDs7SUFBTUw7VUFDd0NGLDZDQUViZCx5REFDTUE7OztLQUpqQ2dCO0FBb0VOLGlFQUFlQSxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2xhY2stY2xvbmUvLi9wYWdlcy9Mb2dJbi9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZUlucHV0IGZyb20gJ0Bob29rcy91c2VJbnB1dCc7XG5pbXBvcnQgeyBCdXR0b24sIEVycm9yLCBGb3JtLCBIZWFkZXIsIElucHV0LCBMYWJlbCwgTGlua0NvbnRhaW5lciB9IGZyb20gJ0BwYWdlcy9TaWduVXAvc3R5bGVzJztcbmltcG9ydCBmZXRjaGVyIGZyb20gJ0B1dGlscy9mZXRjaGVyJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XG5pbXBvcnQgeyBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbmNvbnN0IExvZ0luID0gKCkgPT4ge1xuICBjb25zdCB7IGRhdGEsIGVycm9yLCByZXZhbGlkYXRlLCBtdXRhdGUgfSA9IHVzZVNXUignL2FwaS91c2VycycsIGZldGNoZXIpO1xuICBjb25zdCBbbG9nSW5FcnJvciwgc2V0TG9nSW5FcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtlbWFpbCwgb25DaGFuZ2VFbWFpbF0gPSB1c2VJbnB1dCgnJyk7XG4gIGNvbnN0IFtwYXNzd29yZCwgb25DaGFuZ2VQYXNzd29yZF0gPSB1c2VJbnB1dChbJyddKTtcbiAgY29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjayhcbiAgICAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgc2V0TG9nSW5FcnJvcihmYWxzZSk7XG4gICAgICBheGlvc1xuICAgICAgICAucG9zdChcbiAgICAgICAgICAnL2FwaS91c2Vycy9sb2dpbicsXG4gICAgICAgICAgeyBlbWFpbCwgcGFzc3dvcmQgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAvLyBtdXRhdGUocmVzcG9uc2UuZGF0YSwgZmFsc2UpO1xuICAgICAgICAgIHJldmFsaWRhdGUoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIHNldExvZ0luRXJyb3IoZXJyb3IucmVzcG9uc2U/LmRhdGE/LnN0YXR1c0NvZGUgPT09IDQwMSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgW2VtYWlsLCBwYXNzd29yZF0sXG4gICk7XG5cbiAgaWYgKGRhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XG4gIH1cblxuICBpZiAoZGF0YSkge1xuICAgIHJldHVybiA8UmVkaXJlY3QgdG89XCIvd29ya3NwYWNlL3NsZWFjdC9jaGFubmVsL+ydvOuwmFwiIC8+O1xuICB9XG5cbiAgLy8gaWYgKCFlcnJvciAmJiB1c2VyRGF0YSkge1xuICAvLyAgIGNvbnNvbGUubG9nKCfroZzqt7jsnbjrkKgnLCB1c2VyRGF0YSk7XG4gIC8vICAgcmV0dXJuIDxSZWRpcmVjdCB0bz1cIi93b3Jrc3BhY2Uvc2xlYWN0L2NoYW5uZWwv7J2867CYXCIgLz47XG4gIC8vIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9XCJjb250YWluZXJcIj5cbiAgICAgIDxIZWFkZXI+U2xlYWN0PC9IZWFkZXI+XG4gICAgICA8Rm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxuICAgICAgICA8TGFiZWwgaWQ9XCJlbWFpbC1sYWJlbFwiPlxuICAgICAgICAgIDxzcGFuPkVtYWlsPC9zcGFuPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8SW5wdXQgdHlwZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHZhbHVlPXtlbWFpbH0gb25DaGFuZ2U9e29uQ2hhbmdlRW1haWx9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGFiZWw+XG4gICAgICAgIDxMYWJlbCBpZD1cInBhc3N3b3JkLWxhYmVsXCI+XG4gICAgICAgICAgPHNwYW4+UGFzc3dvcmQ8L3NwYW4+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgdmFsdWU9e3Bhc3N3b3JkfSBvbkNoYW5nZT17b25DaGFuZ2VQYXNzd29yZH0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7bG9nSW5FcnJvciAmJiA8RXJyb3I+Tm90IG1hdGNoZWQ8L0Vycm9yPn1cbiAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+TG9nSW48L0J1dHRvbj5cbiAgICAgIDwvRm9ybT5cbiAgICAgIDxMaW5rQ29udGFpbmVyPlxuICAgICAgICBZb3UgYXJlIG5vdCByZWdpc3RlZCB5ZXQ/ICZuYnNwO1xuICAgICAgICA8TGluayB0bz1cIi9zaWdudXBcIj5TaWduIFVwPC9MaW5rPlxuICAgICAgPC9MaW5rQ29udGFpbmVyPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9nSW47XG4iXSwibmFtZXMiOlsidXNlSW5wdXQiLCJCdXR0b24iLCJFcnJvciIsIkZvcm0iLCJIZWFkZXIiLCJJbnB1dCIsIkxhYmVsIiwiTGlua0NvbnRhaW5lciIsImZldGNoZXIiLCJheGlvcyIsIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJ1c2VTdGF0ZSIsIkxpbmsiLCJ1c2VTV1IiLCJSZWRpcmVjdCIsIkxvZ0luIiwiZGF0YSIsImVycm9yIiwicmV2YWxpZGF0ZSIsIm11dGF0ZSIsImxvZ0luRXJyb3IiLCJzZXRMb2dJbkVycm9yIiwiZW1haWwiLCJvbkNoYW5nZUVtYWlsIiwicGFzc3dvcmQiLCJvbkNoYW5nZVBhc3N3b3JkIiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJwb3N0Iiwid2l0aENyZWRlbnRpYWxzIiwidGhlbiIsInJlc3BvbnNlIiwiY2F0Y2giLCJzdGF0dXNDb2RlIiwidW5kZWZpbmVkIl0sInNvdXJjZVJvb3QiOiIifQ==