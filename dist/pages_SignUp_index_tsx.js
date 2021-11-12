"use strict";
(self["webpackChunkslack_clone"] = self["webpackChunkslack_clone"] || []).push([["pages_SignUp_index_tsx"],{

/***/ "./pages/SignUp/index.tsx":
/*!********************************!*\
  !*** ./pages/SignUp/index.tsx ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hooks/useInput */ "./hooks/useInput.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./pages/SignUp/styles.tsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _utils_fetcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @utils/fetcher */ "./utils/fetcher.ts");
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










var SignUp = function SignUp() {
  _s2();

  var _useSWR = (0,swr__WEBPACK_IMPORTED_MODULE_4__["default"])('/api/users', _utils_fetcher__WEBPACK_IMPORTED_MODULE_5__["default"]),
      data = _useSWR.data,
      error = _useSWR.error,
      revalidate = _useSWR.revalidate;

  var _useInput = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_0__["default"])(''),
      _useInput2 = _slicedToArray(_useInput, 2),
      email = _useInput2[0],
      onChangeEmail = _useInput2[1];

  var _useInput3 = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_0__["default"])(''),
      _useInput4 = _slicedToArray(_useInput3, 2),
      nickname = _useInput4[0],
      onChangeNickname = _useInput4[1];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      password = _useState2[0],
      setPassword = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      passwordCheck = _useState4[0],
      setPasswordCheck = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      mismatchError = _useState6[0],
      setMismatchError = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      _useState8 = _slicedToArray(_useState7, 2),
      signUpError = _useState8[0],
      setSignUpError = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      signUpSuccess = _useState10[0],
      setSignUpSuccess = _useState10[1];

  var onChangePassword = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (e) {
    var value = e.target.value;
    setPassword(value);
    setMismatchError(value !== passwordCheck);
  }, [passwordCheck]);
  var onChangePasswordCheck = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (e) {
    var value = e.target.value;
    setPasswordCheck(value);
    setMismatchError(value !== password);
  }, [password, nickname, email, passwordCheck]);
  var onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (e) {
    e.preventDefault();

    if (!mismatchError && nickname) {
      setSignUpError('');
      setSignUpSuccess(false);
      axios__WEBPACK_IMPORTED_MODULE_3___default().post('/api/users', {
        email: email,
        nickname: nickname,
        password: password
      }).then(function (response) {
        console.log(response);
        setSignUpSuccess(true);
      }).catch(function (error) {
        console.log(error.response.data);
        setSignUpError(error.response.data);
      }).finally(function () {});
    }
  }, [email, nickname, password, passwordCheck, mismatchError]);

  if (data === undefined) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, "Loading...");
  }

  if (data) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router__WEBPACK_IMPORTED_MODULE_6__.Redirect, {
      to: "/workspace/sleact/channel/\uC77C\uBC18"
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    id: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.Header, null, "Sleact"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.Form, {
    onSubmit: onSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.Label, {
    id: "email-label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, "\uC774\uBA54\uC77C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.Input, {
    type: "email",
    id: "email",
    name: "email",
    onChange: onChangeEmail,
    value: email
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.Label, {
    id: "nickname-label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, "\uB2C9\uB124\uC784"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.Input, {
    type: "text",
    id: "nickname",
    name: "nickname",
    onChange: onChangeNickname,
    value: nickname
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.Label, {
    id: "password-label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, "\uBE44\uBC00\uBC88\uD638"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.Input, {
    type: "password",
    id: "password",
    name: "password",
    onChange: onChangePassword,
    value: password
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.Label, {
    id: "password-check-label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, "\uBE44\uBC00\uBC88\uD638 \uD655\uC778"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.Input, {
    type: "password",
    id: "password-check",
    name: "password-check",
    onChange: onChangePasswordCheck,
    value: passwordCheck
  })), mismatchError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.Error, null, "Check your password again."), !nickname && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.Error, null, "\uB2C9\uB124\uC784\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694."), signUpError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.Error, null, signUpError), signUpSuccess && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.Success, null, "\uD68C\uC6D0\uAC00\uC785\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uB85C\uADF8\uC778\uD574\uC8FC\uC138\uC694")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.Button, {
    type: "submit"
  }, "\uD68C\uC6D0\uAC00\uC785")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.LinkContainer, null, "Do you have account?\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Link, {
    to: "/login"
  }, "Login")));
};

_s2(SignUp, "bqReiA3nV3VUK2jK7pSmSHTGHV4=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_4__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_0__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_0__["default"]];
});

_c = SignUp;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignUp);

var _c;

__webpack_require__.$Refresh$.register(_c, "SignUp");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFEO0FBQU8sUUFBSSxFQUFDLFVBQVo7QUFBdUIsTUFBRSxFQUFDLFVBQTFCO0FBQXFDLFFBQUksRUFBQyxVQUExQztBQUFxRCxZQUFRLEVBQUVZLGdCQUEvRDtBQUFpRixTQUFLLEVBQUVWO0FBQXhGLElBREYsQ0FGRixDQWZGLGVBc0JFLGlEQUFDLDBDQUFEO0FBQU8sTUFBRSxFQUFDO0FBQVYsa0JBQ0UsdUdBREYsZUFFRSwyRUFDRSxpREFBQywwQ0FBRDtBQUNFLFFBQUksRUFBQyxVQURQO0FBRUUsTUFBRSxFQUFDLGdCQUZMO0FBR0UsUUFBSSxFQUFDLGdCQUhQO0FBSUUsWUFBUSxFQUFFYyxxQkFKWjtBQUtFLFNBQUssRUFBRVo7QUFMVCxJQURGLENBRkYsRUFXR0UsYUFBYSxpQkFBSSxpREFBQywwQ0FBRCxxQ0FYcEIsRUFZRyxDQUFDTixRQUFELGlCQUFhLGlEQUFDLDBDQUFELHlFQVpoQixFQWFHUSxXQUFXLGlCQUFJLGlEQUFDLDBDQUFELFFBQVFBLFdBQVIsQ0FibEIsRUFjR0UsYUFBYSxpQkFBSSxpREFBQyw0Q0FBRCw2R0FkcEIsQ0F0QkYsZUFzQ0UsaURBQUMsMkNBQUQ7QUFBUSxRQUFJLEVBQUM7QUFBYixnQ0F0Q0YsQ0FGRixlQTJDRSxpREFBQyxrREFBRCxpREFFRSxpREFBQyxrREFBRDtBQUFNLE1BQUUsRUFBQztBQUFULGFBRkYsQ0EzQ0YsQ0FERjtBQWtERCxDQWpIRDs7SUFBTWhCO1VBQ2dDRiw2Q0FDTGYseURBQ01BOzs7S0FIakNpQjtBQW1ITixpRUFBZUEsTUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL3NsYWNrLWNsb25lLy4vcGFnZXMvU2lnblVwL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlSW5wdXQgZnJvbSAnQGhvb2tzL3VzZUlucHV0JztcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBIZWFkZXIsIExhYmVsLCBJbnB1dCwgTGlua0NvbnRhaW5lciwgQnV0dG9uLCBGb3JtLCBFcnJvciwgU3VjY2VzcyB9IGZyb20gJy4vc3R5bGVzJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XG5pbXBvcnQgZmV0Y2hlciBmcm9tICdAdXRpbHMvZmV0Y2hlcic7XG5cbmNvbnN0IFNpZ25VcCA9ICgpID0+IHtcbiAgY29uc3QgeyBkYXRhLCBlcnJvciwgcmV2YWxpZGF0ZSB9ID0gdXNlU1dSKCcvYXBpL3VzZXJzJywgZmV0Y2hlcik7XG4gIGNvbnN0IFtlbWFpbCwgb25DaGFuZ2VFbWFpbF0gPSB1c2VJbnB1dCgnJyk7XG4gIGNvbnN0IFtuaWNrbmFtZSwgb25DaGFuZ2VOaWNrbmFtZV0gPSB1c2VJbnB1dCgnJyk7XG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbcGFzc3dvcmRDaGVjaywgc2V0UGFzc3dvcmRDaGVja10gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFttaXNtYXRjaEVycm9yLCBzZXRNaXNtYXRjaEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3NpZ25VcEVycm9yLCBzZXRTaWduVXBFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtzaWduVXBTdWNjZXNzLCBzZXRTaWduVXBTdWNjZXNzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgb25DaGFuZ2VQYXNzd29yZCA9IHVzZUNhbGxiYWNrKFxuICAgIChlKSA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIHRhcmdldDogeyB2YWx1ZSB9LFxuICAgICAgfSA9IGU7XG4gICAgICBzZXRQYXNzd29yZCh2YWx1ZSk7XG4gICAgICBzZXRNaXNtYXRjaEVycm9yKHZhbHVlICE9PSBwYXNzd29yZENoZWNrKTtcbiAgICB9LFxuICAgIFtwYXNzd29yZENoZWNrXSxcbiAgKTtcblxuICBjb25zdCBvbkNoYW5nZVBhc3N3b3JkQ2hlY2sgPSB1c2VDYWxsYmFjayhcbiAgICAoZSkgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICB0YXJnZXQ6IHsgdmFsdWUgfSxcbiAgICAgIH0gPSBlO1xuICAgICAgc2V0UGFzc3dvcmRDaGVjayh2YWx1ZSk7XG4gICAgICBzZXRNaXNtYXRjaEVycm9yKHZhbHVlICE9PSBwYXNzd29yZCk7XG4gICAgfSxcbiAgICBbcGFzc3dvcmQsIG5pY2tuYW1lLCBlbWFpbCwgcGFzc3dvcmRDaGVja10sXG4gICk7XG5cbiAgY29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjayhcbiAgICAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKCFtaXNtYXRjaEVycm9yICYmIG5pY2tuYW1lKSB7XG4gICAgICAgIHNldFNpZ25VcEVycm9yKCcnKTtcbiAgICAgICAgc2V0U2lnblVwU3VjY2VzcyhmYWxzZSk7XG4gICAgICAgIGF4aW9zXG4gICAgICAgICAgLnBvc3QoJy9hcGkvdXNlcnMnLCB7XG4gICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgIG5pY2tuYW1lLFxuICAgICAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgICAgfSlcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIHNldFNpZ25VcFN1Y2Nlc3ModHJ1ZSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgIHNldFNpZ25VcEVycm9yKGVycm9yLnJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmZpbmFsbHkoKCkgPT4ge30pO1xuICAgICAgfVxuICAgIH0sXG4gICAgW2VtYWlsLCBuaWNrbmFtZSwgcGFzc3dvcmQsIHBhc3N3b3JkQ2hlY2ssIG1pc21hdGNoRXJyb3JdLFxuICApO1xuICBpZiAoZGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcbiAgfVxuICBpZiAoZGF0YSkge1xuICAgIHJldHVybiA8UmVkaXJlY3QgdG89XCIvd29ya3NwYWNlL3NsZWFjdC9jaGFubmVsL+ydvOuwmFwiIC8+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPVwiY29udGFpbmVyXCI+XG4gICAgICA8SGVhZGVyPlNsZWFjdDwvSGVhZGVyPlxuICAgICAgPEZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cbiAgICAgICAgPExhYmVsIGlkPVwiZW1haWwtbGFiZWxcIj5cbiAgICAgICAgICA8c3Bhbj7snbTrqZTsnbw8L3NwYW4+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgb25DaGFuZ2U9e29uQ2hhbmdlRW1haWx9IHZhbHVlPXtlbWFpbH0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MYWJlbD5cblxuICAgICAgICA8TGFiZWwgaWQ9XCJuaWNrbmFtZS1sYWJlbFwiPlxuICAgICAgICAgIDxzcGFuPuuLieuEpOyehDwvc3Bhbj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuaWNrbmFtZVwiIG5hbWU9XCJuaWNrbmFtZVwiIG9uQ2hhbmdlPXtvbkNoYW5nZU5pY2tuYW1lfSB2YWx1ZT17bmlja25hbWV9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGFiZWw+XG5cbiAgICAgICAgPExhYmVsIGlkPVwicGFzc3dvcmQtbGFiZWxcIj5cbiAgICAgICAgICA8c3Bhbj7ruYTrsIDrsojtmLg8L3NwYW4+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmR9IHZhbHVlPXtwYXNzd29yZH0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MYWJlbD5cblxuICAgICAgICA8TGFiZWwgaWQ9XCJwYXNzd29yZC1jaGVjay1sYWJlbFwiPlxuICAgICAgICAgIDxzcGFuPuu5hOuwgOuyiO2YuCDtmZXsnbg8L3NwYW4+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkLWNoZWNrXCJcbiAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkLWNoZWNrXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmRDaGVja31cbiAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkQ2hlY2t9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHttaXNtYXRjaEVycm9yICYmIDxFcnJvcj5DaGVjayB5b3VyIHBhc3N3b3JkIGFnYWluLjwvRXJyb3I+fVxuICAgICAgICAgIHshbmlja25hbWUgJiYgPEVycm9yPuuLieuEpOyehOydhCDsnoXroKXtlbTso7zshLjsmpQuPC9FcnJvcj59XG4gICAgICAgICAge3NpZ25VcEVycm9yICYmIDxFcnJvcj57c2lnblVwRXJyb3J9PC9FcnJvcj59XG4gICAgICAgICAge3NpZ25VcFN1Y2Nlc3MgJiYgPFN1Y2Nlc3M+7ZqM7JuQ6rCA7J6F65CY7JeI7Iq164uI64ukLiDroZzqt7jsnbjtlbTso7zshLjsmpQ8L1N1Y2Nlc3M+fVxuICAgICAgICA8L0xhYmVsPlxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj7tmozsm5DqsIDsnoU8L0J1dHRvbj5cbiAgICAgIDwvRm9ybT5cblxuICAgICAgPExpbmtDb250YWluZXI+XG4gICAgICAgIERvIHlvdSBoYXZlIGFjY291bnQ/Jm5ic3A7XG4gICAgICAgIDxMaW5rIHRvPVwiL2xvZ2luXCI+TG9naW48L0xpbms+XG4gICAgICA8L0xpbmtDb250YWluZXI+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaWduVXA7XG4iXSwibmFtZXMiOlsidXNlSW5wdXQiLCJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlU3RhdGUiLCJMaW5rIiwiSGVhZGVyIiwiTGFiZWwiLCJJbnB1dCIsIkxpbmtDb250YWluZXIiLCJCdXR0b24iLCJGb3JtIiwiRXJyb3IiLCJTdWNjZXNzIiwiYXhpb3MiLCJSZWRpcmVjdCIsInVzZVNXUiIsImZldGNoZXIiLCJTaWduVXAiLCJkYXRhIiwiZXJyb3IiLCJyZXZhbGlkYXRlIiwiZW1haWwiLCJvbkNoYW5nZUVtYWlsIiwibmlja25hbWUiLCJvbkNoYW5nZU5pY2tuYW1lIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInBhc3N3b3JkQ2hlY2siLCJzZXRQYXNzd29yZENoZWNrIiwibWlzbWF0Y2hFcnJvciIsInNldE1pc21hdGNoRXJyb3IiLCJzaWduVXBFcnJvciIsInNldFNpZ25VcEVycm9yIiwic2lnblVwU3VjY2VzcyIsInNldFNpZ25VcFN1Y2Nlc3MiLCJvbkNoYW5nZVBhc3N3b3JkIiwiZSIsInZhbHVlIiwidGFyZ2V0Iiwib25DaGFuZ2VQYXNzd29yZENoZWNrIiwib25TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJmaW5hbGx5IiwidW5kZWZpbmVkIl0sInNvdXJjZVJvb3QiOiIifQ==