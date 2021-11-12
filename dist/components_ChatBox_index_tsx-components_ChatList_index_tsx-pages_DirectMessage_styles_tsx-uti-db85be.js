"use strict";
(self["webpackChunkslack_clone"] = self["webpackChunkslack_clone"] || []).push([["components_ChatBox_index_tsx-components_ChatList_index_tsx-pages_DirectMessage_styles_tsx-uti-db85be"],{

/***/ "./components/Chat/index.tsx":
/*!***********************************!*\
  !*** ./components/Chat/index.tsx ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./components/Chat/styles.tsx");
/* harmony import */ var gravatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gravatar */ "./node_modules/gravatar/index.js");
/* harmony import */ var gravatar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gravatar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var regexify_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! regexify-string */ "./node_modules/regexify-string/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();







var BACK_URL =  true ? 'http://localhost:3095' : 0;

var Chat = /*#__PURE__*/_s( /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(_c = _s(function (_ref) {
  _s();

  var data = _ref.data;

  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useParams)(),
      workspace = _useParams.workspace;

  var user = 'Sender' in data ? data.Sender : data.User;
  var result = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return data.content.startsWith('uploads\\') || data.content.startsWith('uploads/') ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: "".concat(BACK_URL, "/").concat(data.content),
      style: {
        maxHeight: 200
      }
    }) : (0,regexify_string__WEBPACK_IMPORTED_MODULE_4__["default"])({
      pattern: /@\[(.+?)]\((\d+?)\)|\n/g,
      decorator: function decorator(match, index) {
        var arr = match.match(/@\[(.+?)]\((\d+?)\)/);

        if (arr) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
            key: match + index,
            to: "/workspace/".concat(workspace, "/dm/").concat(arr[2])
          }, "@", arr[1]);
        }

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", {
          key: index
        });
      },
      input: data.content
    });
  }, [workspace, data.content]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.ChatWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: " chat-img"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: gravatar__WEBPACK_IMPORTED_MODULE_2___default().url(user.email, {
      s: '36px',
      d: 'retro'
    }),
    alt: user.nickname
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "chat-text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "chat-user"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, user.nickname), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, dayjs__WEBPACK_IMPORTED_MODULE_3___default()(data.createdAt).format('h:mm A'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, result)));
}, "OKGkO2+xzl1QGtH+BqMIvyp4jpM=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useParams];
})), "OKGkO2+xzl1QGtH+BqMIvyp4jpM=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useParams];
});

_c2 = Chat;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c3 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(Chat));

var _c, _c2, _c3;

__webpack_require__.$Refresh$.register(_c, "Chat$memo");
__webpack_require__.$Refresh$.register(_c2, "Chat");
__webpack_require__.$Refresh$.register(_c3, "%default%");

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

/***/ }),

/***/ "./components/Chat/styles.tsx":
/*!************************************!*\
  !*** ./components/Chat/styles.tsx ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatWrapper": () => (/* binding */ ChatWrapper)
/* harmony export */ });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled/base */ "./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");



function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var ChatWrapper = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  false ? 0 : {
  target: "efl4fwb0",
  label: "ChatWrapper"
})( false ? 0 : {
  name: "1gm3yh0",
  styles: "display:flex;padding:8px 20px;&:hover{background:#eee;}& .chat-img{display:flex;width:36px;margin-right:8px;& img{width:36px;height:36px;}}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYXJvcmkvQ29kaW5nL1NsYWNrLWNsb25lL2NvbXBvbmVudHMvQ2hhdC9zdHlsZXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVxQyIsImZpbGUiOiIvVXNlcnMvc2Fyb3JpL0NvZGluZy9TbGFjay1jbG9uZS9jb21wb25lbnRzL0NoYXQvc3R5bGVzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuZXhwb3J0IGNvbnN0IENoYXRXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogOHB4IDIwcHg7XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNlZWU7XG4gIH1cbiAgJiAuY2hhdC1pbWcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDM2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgJiBpbWcge1xuICAgICAgd2lkdGg6IDM2cHg7XG4gICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgfVxuICB9XG5gO1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

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

/***/ }),

/***/ "./components/ChatBox/index.tsx":
/*!**************************************!*\
  !*** ./components/ChatBox/index.tsx ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_ChatBox_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/ChatBox/styles */ "./components/ChatBox/styles.tsx");
/* harmony import */ var autosize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! autosize */ "./node_modules/autosize/dist/autosize.esm.js");
/* harmony import */ var react_mentions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-mentions */ "./node_modules/react-mentions/dist/react-mentions.esm.js");
/* harmony import */ var gravatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gravatar */ "./node_modules/gravatar/index.js");
/* harmony import */ var gravatar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(gravatar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _utils_fetcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @utils/fetcher */ "./utils/fetcher.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();










var ChatBox = function ChatBox(_ref) {
  _s();

  var chat = _ref.chat,
      onSubmitForm = _ref.onSubmitForm,
      onChangeChat = _ref.onChangeChat,
      placeholder = _ref.placeholder;

  var _useParams = (0,react_router__WEBPACK_IMPORTED_MODULE_7__.useParams)(),
      workspace = _useParams.workspace;

  var _useSWR = (0,swr__WEBPACK_IMPORTED_MODULE_5__["default"])('/api/users', _utils_fetcher__WEBPACK_IMPORTED_MODULE_6__["default"], {
    dedupingInterval: 2000 // 2초

  }),
      userData = _useSWR.data,
      error = _useSWR.error,
      revalidate = _useSWR.revalidate,
      mutate = _useSWR.mutate;

  var _useSWR2 = (0,swr__WEBPACK_IMPORTED_MODULE_5__["default"])(userData ? "/api/workspaces/".concat(workspace, "/members") : null, _utils_fetcher__WEBPACK_IMPORTED_MODULE_6__["default"]),
      memberData = _useSWR2.data;

  var textareaRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (textareaRef.current) {
      (0,autosize__WEBPACK_IMPORTED_MODULE_2__["default"])(textareaRef.current);
    }
  }, []);
  var onKeydownChat = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (e) {
    if (e.key === 'Enter') {
      if (!e.shiftKey) {
        e.preventDefault();
        onSubmitForm(e);
      }
    }
  }, [onSubmitForm]);
  var renderSuggestion = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (suggestion, search, highlightedDisplay, index, focus) {
    if (!memberData) return;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ChatBox_styles__WEBPACK_IMPORTED_MODULE_1__.EachMention, {
      focus: focus
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: gravatar__WEBPACK_IMPORTED_MODULE_4___default().url(memberData[index].email, {
        s: '20px',
        d: 'retro'
      }),
      alt: memberData[index].nickname
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, highlightedDisplay));
  }, [memberData]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ChatBox_styles__WEBPACK_IMPORTED_MODULE_1__.ChatArea, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ChatBox_styles__WEBPACK_IMPORTED_MODULE_1__.Form, {
    onSubmit: onSubmitForm
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ChatBox_styles__WEBPACK_IMPORTED_MODULE_1__.MentionsTextarea, {
    id: "editor-chat",
    value: chat,
    onChange: onChangeChat,
    onKeyPress: onKeydownChat,
    placeholder: placeholder,
    inputRef: textareaRef,
    allowSuggestionsAboveCursor: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_mentions__WEBPACK_IMPORTED_MODULE_3__.Mention, {
    appendSpaceOnAdd: true,
    trigger: "@",
    data: (memberData === null || memberData === void 0 ? void 0 : memberData.map(function (v) {
      return {
        id: v.id,
        display: v.nickname
      };
    })) || [],
    renderSuggestion: renderSuggestion
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ChatBox_styles__WEBPACK_IMPORTED_MODULE_1__.Toolbox, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ChatBox_styles__WEBPACK_IMPORTED_MODULE_1__.SendButton, {
    className: 'c-button-unstyled c-icon_button c-icon_button--light c-icon_button--size_medium c-texty_input__button c-texty_input__button--send' + (chat !== null && chat !== void 0 && chat.trim() ? '' : ' c-texty_input__button--disabled'),
    "data-qa": "texty_send_button",
    "aria-label": "Send message",
    "data-sk": "tooltip_parent",
    type: "submit",
    disabled: !(chat !== null && chat !== void 0 && chat.trim())
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "c-icon c-icon--paperplane-filled",
    "aria-hidden": "true"
  })))));
};

_s(ChatBox, "enIm8lp+66gpYdIEN+ARGlEVtcA=", false, function () {
  return [react_router__WEBPACK_IMPORTED_MODULE_7__.useParams, swr__WEBPACK_IMPORTED_MODULE_5__["default"], swr__WEBPACK_IMPORTED_MODULE_5__["default"]];
});

_c = ChatBox;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatBox);

var _c;

__webpack_require__.$Refresh$.register(_c, "ChatBox");

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

/***/ }),

/***/ "./components/ChatBox/styles.tsx":
/*!***************************************!*\
  !*** ./components/ChatBox/styles.tsx ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatArea": () => (/* binding */ ChatArea),
/* harmony export */   "Form": () => (/* binding */ Form),
/* harmony export */   "MentionsTextarea": () => (/* binding */ MentionsTextarea),
/* harmony export */   "Toolbox": () => (/* binding */ Toolbox),
/* harmony export */   "SendButton": () => (/* binding */ SendButton),
/* harmony export */   "EachMention": () => (/* binding */ EachMention)
/* harmony export */ });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled/base */ "./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js");
/* harmony import */ var react_mentions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-mentions */ "./node_modules/react-mentions/dist/react-mentions.esm.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");



function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

 // import { MentionsInput } from 'react-mentions';

var ChatArea = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  false ? 0 : {
  target: "ev1jcg25",
  label: "ChatArea"
})( false ? 0 : {
  name: "ra6cyy",
  styles: "display:flex;width:100%;padding:20px;padding-top:0",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYXJvcmkvQ29kaW5nL1NsYWNrLWNsb25lL2NvbXBvbmVudHMvQ2hhdEJveC9zdHlsZXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlrQyIsImZpbGUiOiIvVXNlcnMvc2Fyb3JpL0NvZGluZy9TbGFjay1jbG9uZS9jb21wb25lbnRzL0NoYXRCb3gvc3R5bGVzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IE1lbnRpb25zSW5wdXQgfSBmcm9tICdyZWFjdC1tZW50aW9ucyc7XG4vLyBpbXBvcnQgeyBNZW50aW9uc0lucHV0IH0gZnJvbSAncmVhY3QtbWVudGlvbnMnO1xuXG5leHBvcnQgY29uc3QgQ2hhdEFyZWEgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMjBweDtcbiAgcGFkZGluZy10b3A6IDA7XG5gO1xuXG5leHBvcnQgY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxuICBjb2xvcjogcmdiKDI5LCAyOCwgMjkpO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyOSwgMjgsIDI5KTtcbmA7XG5cbmV4cG9ydCBjb25zdCBNZW50aW9uc1RleHRhcmVhID0gc3R5bGVkKE1lbnRpb25zSW5wdXQpYFxuICBmb250LWZhbWlseTogU2xhY2stTGF0bywgYXBwbGVMb2dvLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHBhZGRpbmc6IDhweCA5cHg7XG4gIHdpZHRoOiAxMDAlO1xuICAmIHN0cm9uZyB7XG4gICAgYmFja2dyb3VuZDogc2t5Ymx1ZTtcbiAgfVxuICAmIHRleHRhcmVhIHtcbiAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgcGFkZGluZzogOXB4IDEwcHggIWltcG9ydGFudDtcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XG4gICAgcmVzaXplOiBub25lICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG4gICYgdWwge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIHBhZGRpbmc6IDlweCAxMHB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB3aWR0aDogMTUwcHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBUb29sYm94ID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiByZ2IoMjQ4LCAyNDgsIDI0OCk7XG4gIGhlaWdodDogNDFweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYigyMjEsIDIyMSwgMjIxKTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IFNlbmRCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1cHg7XG4gIHRvcDogNXB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IEVhY2hNZW50aW9uID0gc3R5bGVkLmJ1dHRvbjx7IGZvY3VzOiBib29sZWFuIH0+YFxuICBwYWRkaW5nOiA0cHggMjBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHJnYigyOCwgMjksIDI4KTtcbiAgd2lkdGg6IDEwMCU7XG4gICYgaW1nIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgfVxuICAkeyh7IGZvY3VzIH0pID0+XG4gICAgZm9jdXMgJiZcbiAgICBgXG4gICAgYmFja2dyb3VuZDogIzEyNjRhMztcbiAgICBjb2xvcjogd2hpdGU7XG4gIGB9O1xuYDtcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
var Form = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("form",  false ? 0 : {
  target: "ev1jcg24",
  label: "Form"
})( false ? 0 : {
  name: "33ihw2",
  styles: "color:rgb(29, 28, 29);font-size:15px;width:100%;border-radius:4px;border:1px solid rgb(29, 28, 29)",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYXJvcmkvQ29kaW5nL1NsYWNrLWNsb25lL2NvbXBvbmVudHMvQ2hhdEJveC9zdHlsZXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVcrQiIsImZpbGUiOiIvVXNlcnMvc2Fyb3JpL0NvZGluZy9TbGFjay1jbG9uZS9jb21wb25lbnRzL0NoYXRCb3gvc3R5bGVzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IE1lbnRpb25zSW5wdXQgfSBmcm9tICdyZWFjdC1tZW50aW9ucyc7XG4vLyBpbXBvcnQgeyBNZW50aW9uc0lucHV0IH0gZnJvbSAncmVhY3QtbWVudGlvbnMnO1xuXG5leHBvcnQgY29uc3QgQ2hhdEFyZWEgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMjBweDtcbiAgcGFkZGluZy10b3A6IDA7XG5gO1xuXG5leHBvcnQgY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxuICBjb2xvcjogcmdiKDI5LCAyOCwgMjkpO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyOSwgMjgsIDI5KTtcbmA7XG5cbmV4cG9ydCBjb25zdCBNZW50aW9uc1RleHRhcmVhID0gc3R5bGVkKE1lbnRpb25zSW5wdXQpYFxuICBmb250LWZhbWlseTogU2xhY2stTGF0bywgYXBwbGVMb2dvLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHBhZGRpbmc6IDhweCA5cHg7XG4gIHdpZHRoOiAxMDAlO1xuICAmIHN0cm9uZyB7XG4gICAgYmFja2dyb3VuZDogc2t5Ymx1ZTtcbiAgfVxuICAmIHRleHRhcmVhIHtcbiAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgcGFkZGluZzogOXB4IDEwcHggIWltcG9ydGFudDtcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XG4gICAgcmVzaXplOiBub25lICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG4gICYgdWwge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIHBhZGRpbmc6IDlweCAxMHB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB3aWR0aDogMTUwcHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBUb29sYm94ID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiByZ2IoMjQ4LCAyNDgsIDI0OCk7XG4gIGhlaWdodDogNDFweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYigyMjEsIDIyMSwgMjIxKTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IFNlbmRCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1cHg7XG4gIHRvcDogNXB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IEVhY2hNZW50aW9uID0gc3R5bGVkLmJ1dHRvbjx7IGZvY3VzOiBib29sZWFuIH0+YFxuICBwYWRkaW5nOiA0cHggMjBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHJnYigyOCwgMjksIDI4KTtcbiAgd2lkdGg6IDEwMCU7XG4gICYgaW1nIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgfVxuICAkeyh7IGZvY3VzIH0pID0+XG4gICAgZm9jdXMgJiZcbiAgICBgXG4gICAgYmFja2dyb3VuZDogIzEyNjRhMztcbiAgICBjb2xvcjogd2hpdGU7XG4gIGB9O1xuYDtcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
var MentionsTextarea = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(react_mentions__WEBPACK_IMPORTED_MODULE_1__.MentionsInput,  false ? 0 : {
  target: "ev1jcg23",
  label: "MentionsTextarea"
})( false ? 0 : {
  name: "bka2jr",
  styles: "font-family:Slack-Lato,appleLogo,sans-serif;font-size:15px;padding:8px 9px;width:100%;& strong{background:skyblue;}& textarea{height:44px;padding:9px 10px!important;outline:none!important;border-radius:4px!important;resize:none!important;line-height:22px;border:none;}& ul{border:1px solid lightgray;max-height:200px;overflow-y:auto;padding:9px 10px;background:white;border-radius:4px;width:150px;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYXJvcmkvQ29kaW5nL1NsYWNrLWNsb25lL2NvbXBvbmVudHMvQ2hhdEJveC9zdHlsZXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1CcUQiLCJmaWxlIjoiL1VzZXJzL3Nhcm9yaS9Db2RpbmcvU2xhY2stY2xvbmUvY29tcG9uZW50cy9DaGF0Qm94L3N0eWxlcy50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBNZW50aW9uc0lucHV0IH0gZnJvbSAncmVhY3QtbWVudGlvbnMnO1xuLy8gaW1wb3J0IHsgTWVudGlvbnNJbnB1dCB9IGZyb20gJ3JlYWN0LW1lbnRpb25zJztcblxuZXhwb3J0IGNvbnN0IENoYXRBcmVhID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHBhZGRpbmctdG9wOiAwO1xuYDtcblxuZXhwb3J0IGNvbnN0IEZvcm0gPSBzdHlsZWQuZm9ybWBcbiAgY29sb3I6IHJnYigyOSwgMjgsIDI5KTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjksIDI4LCAyOSk7XG5gO1xuXG5leHBvcnQgY29uc3QgTWVudGlvbnNUZXh0YXJlYSA9IHN0eWxlZChNZW50aW9uc0lucHV0KWBcbiAgZm9udC1mYW1pbHk6IFNsYWNrLUxhdG8sIGFwcGxlTG9nbywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwYWRkaW5nOiA4cHggOXB4O1xuICB3aWR0aDogMTAwJTtcbiAgJiBzdHJvbmcge1xuICAgIGJhY2tncm91bmQ6IHNreWJsdWU7XG4gIH1cbiAgJiB0ZXh0YXJlYSB7XG4gICAgaGVpZ2h0OiA0NHB4O1xuICAgIHBhZGRpbmc6IDlweCAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xuICAgIHJlc2l6ZTogbm9uZSAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxuICAmIHVsIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBwYWRkaW5nOiA5cHggMTBweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgd2lkdGg6IDE1MHB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgVG9vbGJveCA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogcmdiKDI0OCwgMjQ4LCAyNDgpO1xuICBoZWlnaHQ6IDQxcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMjIxLCAyMjEsIDIyMSk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBTZW5kQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNXB4O1xuICB0b3A6IDVweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBFYWNoTWVudGlvbiA9IHN0eWxlZC5idXR0b248eyBmb2N1czogYm9vbGVhbiB9PmBcbiAgcGFkZGluZzogNHB4IDIwcHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiByZ2IoMjgsIDI5LCAyOCk7XG4gIHdpZHRoOiAxMDAlO1xuICAmIGltZyB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIH1cbiAgJHsoeyBmb2N1cyB9KSA9PlxuICAgIGZvY3VzICYmXG4gICAgYFxuICAgIGJhY2tncm91bmQ6ICMxMjY0YTM7XG4gICAgY29sb3I6IHdoaXRlO1xuICBgfTtcbmA7XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
var Toolbox = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  false ? 0 : {
  target: "ev1jcg22",
  label: "Toolbox"
})( false ? 0 : {
  name: "13ie2qx",
  styles: "position:relative;background:rgb(248, 248, 248);height:41px;display:flex;border-top:1px solid rgb(221, 221, 221);align-items:center;border-bottom-left-radius:4px;border-bottom-right-radius:4px",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYXJvcmkvQ29kaW5nL1NsYWNrLWNsb25lL2NvbXBvbmVudHMvQ2hhdEJveC9zdHlsZXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStDaUMiLCJmaWxlIjoiL1VzZXJzL3Nhcm9yaS9Db2RpbmcvU2xhY2stY2xvbmUvY29tcG9uZW50cy9DaGF0Qm94L3N0eWxlcy50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBNZW50aW9uc0lucHV0IH0gZnJvbSAncmVhY3QtbWVudGlvbnMnO1xuLy8gaW1wb3J0IHsgTWVudGlvbnNJbnB1dCB9IGZyb20gJ3JlYWN0LW1lbnRpb25zJztcblxuZXhwb3J0IGNvbnN0IENoYXRBcmVhID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHBhZGRpbmctdG9wOiAwO1xuYDtcblxuZXhwb3J0IGNvbnN0IEZvcm0gPSBzdHlsZWQuZm9ybWBcbiAgY29sb3I6IHJnYigyOSwgMjgsIDI5KTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjksIDI4LCAyOSk7XG5gO1xuXG5leHBvcnQgY29uc3QgTWVudGlvbnNUZXh0YXJlYSA9IHN0eWxlZChNZW50aW9uc0lucHV0KWBcbiAgZm9udC1mYW1pbHk6IFNsYWNrLUxhdG8sIGFwcGxlTG9nbywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwYWRkaW5nOiA4cHggOXB4O1xuICB3aWR0aDogMTAwJTtcbiAgJiBzdHJvbmcge1xuICAgIGJhY2tncm91bmQ6IHNreWJsdWU7XG4gIH1cbiAgJiB0ZXh0YXJlYSB7XG4gICAgaGVpZ2h0OiA0NHB4O1xuICAgIHBhZGRpbmc6IDlweCAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xuICAgIHJlc2l6ZTogbm9uZSAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxuICAmIHVsIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBwYWRkaW5nOiA5cHggMTBweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgd2lkdGg6IDE1MHB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgVG9vbGJveCA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogcmdiKDI0OCwgMjQ4LCAyNDgpO1xuICBoZWlnaHQ6IDQxcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMjIxLCAyMjEsIDIyMSk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBTZW5kQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNXB4O1xuICB0b3A6IDVweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBFYWNoTWVudGlvbiA9IHN0eWxlZC5idXR0b248eyBmb2N1czogYm9vbGVhbiB9PmBcbiAgcGFkZGluZzogNHB4IDIwcHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiByZ2IoMjgsIDI5LCAyOCk7XG4gIHdpZHRoOiAxMDAlO1xuICAmIGltZyB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIH1cbiAgJHsoeyBmb2N1cyB9KSA9PlxuICAgIGZvY3VzICYmXG4gICAgYFxuICAgIGJhY2tncm91bmQ6ICMxMjY0YTM7XG4gICAgY29sb3I6IHdoaXRlO1xuICBgfTtcbmA7XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
var SendButton = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("button",  false ? 0 : {
  target: "ev1jcg21",
  label: "SendButton"
})( false ? 0 : {
  name: "xrrdm2",
  styles: "position:absolute;right:5px;top:5px",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYXJvcmkvQ29kaW5nL1NsYWNrLWNsb25lL2NvbXBvbmVudHMvQ2hhdEJveC9zdHlsZXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBEdUMiLCJmaWxlIjoiL1VzZXJzL3Nhcm9yaS9Db2RpbmcvU2xhY2stY2xvbmUvY29tcG9uZW50cy9DaGF0Qm94L3N0eWxlcy50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBNZW50aW9uc0lucHV0IH0gZnJvbSAncmVhY3QtbWVudGlvbnMnO1xuLy8gaW1wb3J0IHsgTWVudGlvbnNJbnB1dCB9IGZyb20gJ3JlYWN0LW1lbnRpb25zJztcblxuZXhwb3J0IGNvbnN0IENoYXRBcmVhID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHBhZGRpbmctdG9wOiAwO1xuYDtcblxuZXhwb3J0IGNvbnN0IEZvcm0gPSBzdHlsZWQuZm9ybWBcbiAgY29sb3I6IHJnYigyOSwgMjgsIDI5KTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjksIDI4LCAyOSk7XG5gO1xuXG5leHBvcnQgY29uc3QgTWVudGlvbnNUZXh0YXJlYSA9IHN0eWxlZChNZW50aW9uc0lucHV0KWBcbiAgZm9udC1mYW1pbHk6IFNsYWNrLUxhdG8sIGFwcGxlTG9nbywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwYWRkaW5nOiA4cHggOXB4O1xuICB3aWR0aDogMTAwJTtcbiAgJiBzdHJvbmcge1xuICAgIGJhY2tncm91bmQ6IHNreWJsdWU7XG4gIH1cbiAgJiB0ZXh0YXJlYSB7XG4gICAgaGVpZ2h0OiA0NHB4O1xuICAgIHBhZGRpbmc6IDlweCAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xuICAgIHJlc2l6ZTogbm9uZSAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxuICAmIHVsIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBwYWRkaW5nOiA5cHggMTBweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgd2lkdGg6IDE1MHB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgVG9vbGJveCA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogcmdiKDI0OCwgMjQ4LCAyNDgpO1xuICBoZWlnaHQ6IDQxcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMjIxLCAyMjEsIDIyMSk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBTZW5kQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNXB4O1xuICB0b3A6IDVweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBFYWNoTWVudGlvbiA9IHN0eWxlZC5idXR0b248eyBmb2N1czogYm9vbGVhbiB9PmBcbiAgcGFkZGluZzogNHB4IDIwcHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiByZ2IoMjgsIDI5LCAyOCk7XG4gIHdpZHRoOiAxMDAlO1xuICAmIGltZyB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIH1cbiAgJHsoeyBmb2N1cyB9KSA9PlxuICAgIGZvY3VzICYmXG4gICAgYFxuICAgIGJhY2tncm91bmQ6ICMxMjY0YTM7XG4gICAgY29sb3I6IHdoaXRlO1xuICBgfTtcbmA7XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
var EachMention = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("button",  false ? 0 : {
  target: "ev1jcg20",
  label: "EachMention"
})("padding:4px 20px;background:transparent;border:none;display:flex;align-items:center;color:rgb(28, 29, 28);width:100%;& img{margin-right:5px;}", function (_ref) {
  var focus = _ref.focus;
  return focus && "\n    background: #1264a3;\n    color: white;\n  ";
}, ";" + ( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYXJvcmkvQ29kaW5nL1NsYWNrLWNsb25lL2NvbXBvbmVudHMvQ2hhdEJveC9zdHlsZXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdFNEQiLCJmaWxlIjoiL1VzZXJzL3Nhcm9yaS9Db2RpbmcvU2xhY2stY2xvbmUvY29tcG9uZW50cy9DaGF0Qm94L3N0eWxlcy50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBNZW50aW9uc0lucHV0IH0gZnJvbSAncmVhY3QtbWVudGlvbnMnO1xuLy8gaW1wb3J0IHsgTWVudGlvbnNJbnB1dCB9IGZyb20gJ3JlYWN0LW1lbnRpb25zJztcblxuZXhwb3J0IGNvbnN0IENoYXRBcmVhID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHBhZGRpbmctdG9wOiAwO1xuYDtcblxuZXhwb3J0IGNvbnN0IEZvcm0gPSBzdHlsZWQuZm9ybWBcbiAgY29sb3I6IHJnYigyOSwgMjgsIDI5KTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjksIDI4LCAyOSk7XG5gO1xuXG5leHBvcnQgY29uc3QgTWVudGlvbnNUZXh0YXJlYSA9IHN0eWxlZChNZW50aW9uc0lucHV0KWBcbiAgZm9udC1mYW1pbHk6IFNsYWNrLUxhdG8sIGFwcGxlTG9nbywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwYWRkaW5nOiA4cHggOXB4O1xuICB3aWR0aDogMTAwJTtcbiAgJiBzdHJvbmcge1xuICAgIGJhY2tncm91bmQ6IHNreWJsdWU7XG4gIH1cbiAgJiB0ZXh0YXJlYSB7XG4gICAgaGVpZ2h0OiA0NHB4O1xuICAgIHBhZGRpbmc6IDlweCAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xuICAgIHJlc2l6ZTogbm9uZSAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxuICAmIHVsIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBwYWRkaW5nOiA5cHggMTBweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgd2lkdGg6IDE1MHB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgVG9vbGJveCA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogcmdiKDI0OCwgMjQ4LCAyNDgpO1xuICBoZWlnaHQ6IDQxcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMjIxLCAyMjEsIDIyMSk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBTZW5kQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNXB4O1xuICB0b3A6IDVweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBFYWNoTWVudGlvbiA9IHN0eWxlZC5idXR0b248eyBmb2N1czogYm9vbGVhbiB9PmBcbiAgcGFkZGluZzogNHB4IDIwcHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiByZ2IoMjgsIDI5LCAyOCk7XG4gIHdpZHRoOiAxMDAlO1xuICAmIGltZyB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIH1cbiAgJHsoeyBmb2N1cyB9KSA9PlxuICAgIGZvY3VzICYmXG4gICAgYFxuICAgIGJhY2tncm91bmQ6ICMxMjY0YTM7XG4gICAgY29sb3I6IHdoaXRlO1xuICBgfTtcbmA7XG4iXX0= */"));

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

/***/ }),

/***/ "./components/ChatList/index.tsx":
/*!***************************************!*\
  !*** ./components/ChatList/index.tsx ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles */ "./components/ChatList/styles.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_Chat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Chat */ "./components/Chat/index.tsx");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-custom-scrollbars */ "./node_modules/react-custom-scrollbars/lib/index.js");
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






var ChatList = /*#__PURE__*/_s2( /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(_c = _s2(function (_ref, scrollRef) {
  _s2();

  var chatSections = _ref.chatSections,
      setSize = _ref.setSize,
      isReachingEnd = _ref.isReachingEnd;
  var onScroll = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (values) {
    if (values.scrollTop === 0 && !isReachingEnd) {
      console.log('가장 위');
      setSize(function (prevSize) {
        return prevSize + 1;
      }).then(function () {
        // 스크롤 위치 유지
        var current = scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current;

        if (current) {
          current.scrollTop(current.getScrollHeight() - values.scrollHeight);
        }
      });
    }
  }, [scrollRef, isReachingEnd, setSize]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_styles__WEBPACK_IMPORTED_MODULE_0__.ChatZone, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_3__.Scrollbars, {
    autoHide: true,
    ref: scrollRef,
    onScrollFrame: onScroll
  }, Object.entries(chatSections).map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        date = _ref3[0],
        chats = _ref3[1];

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_styles__WEBPACK_IMPORTED_MODULE_0__.Section, {
      className: "section-".concat(date),
      key: date
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_styles__WEBPACK_IMPORTED_MODULE_0__.StickyHeader, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", null, date)), chats.map(function (chat) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_Chat__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: chat.id,
        data: chat
      });
    }));
  })));
}, "EfBdFFGza9k3eGlVsnvddhAgPCg=")), "EfBdFFGza9k3eGlVsnvddhAgPCg=");

_c2 = ChatList;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatList);

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "ChatList$forwardRef");
__webpack_require__.$Refresh$.register(_c2, "ChatList");

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

/***/ }),

/***/ "./components/ChatList/styles.tsx":
/*!****************************************!*\
  !*** ./components/ChatList/styles.tsx ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatZone": () => (/* binding */ ChatZone),
/* harmony export */   "Section": () => (/* binding */ Section),
/* harmony export */   "StickyHeader": () => (/* binding */ StickyHeader)
/* harmony export */ });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled/base */ "./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");



function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var ChatZone = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  false ? 0 : {
  target: "e1bqdqck2",
  label: "ChatZone"
})( false ? 0 : {
  name: "1op36e9",
  styles: "width:100%;display:flex;flex:1",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYXJvcmkvQ29kaW5nL1NsYWNrLWNsb25lL2NvbXBvbmVudHMvQ2hhdExpc3Qvc3R5bGVzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFa0MiLCJmaWxlIjoiL1VzZXJzL3Nhcm9yaS9Db2RpbmcvU2xhY2stY2xvbmUvY29tcG9uZW50cy9DaGF0TGlzdC9zdHlsZXMudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG5leHBvcnQgY29uc3QgQ2hhdFpvbmUgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbmA7XG5cbmV4cG9ydCBjb25zdCBTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xuYDtcblxuZXhwb3J0IGNvbnN0IFN0aWNreUhlYWRlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4OiAxO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAxNHB4O1xuICAmIGJ1dHRvbiB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGhlaWdodDogMjhweDtcbiAgICBsaW5lLWhlaWdodDogMjdweDtcbiAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgei1pbmRleDogMjtcbiAgICAtLXNhZi0wOiByZ2JhKHZhcigtLXNrX2ZvcmVncm91bmRfbG93LCAyOSwgMjgsIDI5KSwgMC4xMyk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHZhcigtLXNhZi0wKSwgMCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC0xM3B4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG5gO1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
var Section = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("section",  false ? 0 : {
  target: "e1bqdqck1",
  label: "Section"
})( false ? 0 : {
  name: "10zp55f",
  styles: "margin-top:20px;border-top:1px solid #eee",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYXJvcmkvQ29kaW5nL1NsYWNrLWNsb25lL2NvbXBvbmVudHMvQ2hhdExpc3Qvc3R5bGVzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRcUMiLCJmaWxlIjoiL1VzZXJzL3Nhcm9yaS9Db2RpbmcvU2xhY2stY2xvbmUvY29tcG9uZW50cy9DaGF0TGlzdC9zdHlsZXMudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG5leHBvcnQgY29uc3QgQ2hhdFpvbmUgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbmA7XG5cbmV4cG9ydCBjb25zdCBTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xuYDtcblxuZXhwb3J0IGNvbnN0IFN0aWNreUhlYWRlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4OiAxO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAxNHB4O1xuICAmIGJ1dHRvbiB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGhlaWdodDogMjhweDtcbiAgICBsaW5lLWhlaWdodDogMjdweDtcbiAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgei1pbmRleDogMjtcbiAgICAtLXNhZi0wOiByZ2JhKHZhcigtLXNrX2ZvcmVncm91bmRfbG93LCAyOSwgMjgsIDI5KSwgMC4xMyk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHZhcigtLXNhZi0wKSwgMCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC0xM3B4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG5gO1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
var StickyHeader = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  false ? 0 : {
  target: "e1bqdqck0",
  label: "StickyHeader"
})( false ? 0 : {
  name: "16cu5ak",
  styles: "display:flex;justify-content:center;flex:1;width:100%;position:sticky;top:14px;& button{font-weight:bold;font-size:13px;height:28px;line-height:27px;padding:0 16px;z-index:2;--saf-0:rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);box-shadow:0 0 0 1px var(--saf-0),0 1px 3px 0 rgba(0, 0, 0, 0.08);border-radius:24px;position:relative;top:-13px;background:white;border:none;outline:none;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYXJvcmkvQ29kaW5nL1NsYWNrLWNsb25lL2NvbXBvbmVudHMvQ2hhdExpc3Qvc3R5bGVzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhc0MiLCJmaWxlIjoiL1VzZXJzL3Nhcm9yaS9Db2RpbmcvU2xhY2stY2xvbmUvY29tcG9uZW50cy9DaGF0TGlzdC9zdHlsZXMudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG5leHBvcnQgY29uc3QgQ2hhdFpvbmUgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbmA7XG5cbmV4cG9ydCBjb25zdCBTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xuYDtcblxuZXhwb3J0IGNvbnN0IFN0aWNreUhlYWRlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4OiAxO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAxNHB4O1xuICAmIGJ1dHRvbiB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGhlaWdodDogMjhweDtcbiAgICBsaW5lLWhlaWdodDogMjdweDtcbiAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgei1pbmRleDogMjtcbiAgICAtLXNhZi0wOiByZ2JhKHZhcigtLXNrX2ZvcmVncm91bmRfbG93LCAyOSwgMjgsIDI5KSwgMC4xMyk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHZhcigtLXNhZi0wKSwgMCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC0xM3B4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG5gO1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

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

/***/ }),

/***/ "./pages/DirectMessage/styles.tsx":
/*!****************************************!*\
  !*** ./pages/DirectMessage/styles.tsx ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": () => (/* binding */ Container),
/* harmony export */   "Header": () => (/* binding */ Header),
/* harmony export */   "DragOver": () => (/* binding */ DragOver)
/* harmony export */ });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled/base */ "./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");



function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var Container = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  false ? 0 : {
  target: "e12dtmgu2",
  label: "Container"
})( false ? 0 : {
  name: "1a0r0eh",
  styles: "display:flex;flex-wrap:wrap;height:calc(100vh - 38px);flex-flow:column;position:relative",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYXJvcmkvQ29kaW5nL1NsYWNrLWNsb25lL3BhZ2VzL0RpcmVjdE1lc3NhZ2Uvc3R5bGVzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFbUMiLCJmaWxlIjoiL1VzZXJzL3Nhcm9yaS9Db2RpbmcvU2xhY2stY2xvbmUvcGFnZXMvRGlyZWN0TWVzc2FnZS9zdHlsZXMudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzOHB4KTtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbmA7XG5cbmV4cG9ydCBjb25zdCBIZWFkZXIgPSBzdHlsZWQuaGVhZGVyYFxuICBoZWlnaHQ6IDY0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICAtLXNhZi0wOiByZ2JhKHZhcigtLXNrX2ZvcmVncm91bmRfbG93LCAyOSwgMjgsIDI5KSwgMC4xMyk7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgdmFyKC0tc2FmLTApO1xuICBwYWRkaW5nOiAyMHB4IDE2cHggMjBweCAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgJiBpbWcge1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgRHJhZ092ZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNjRweDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNjRweCk7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBvcGFjaXR5OiAwLjc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDQwcHg7XG5gO1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
var Header = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("header",  false ? 0 : {
  target: "e12dtmgu1",
  label: "Header"
})( false ? 0 : {
  name: "1c17pcy",
  styles: "height:64px;display:flex;width:100%;--saf-0:rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);box-shadow:0 1px 0 var(--saf-0);padding:20px 16px 20px 20px;font-weight:bold;align-items:center;& img{margin-right:5px;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYXJvcmkvQ29kaW5nL1NsYWNrLWNsb25lL3BhZ2VzL0RpcmVjdE1lc3NhZ2Uvc3R5bGVzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVbUMiLCJmaWxlIjoiL1VzZXJzL3Nhcm9yaS9Db2RpbmcvU2xhY2stY2xvbmUvcGFnZXMvRGlyZWN0TWVzc2FnZS9zdHlsZXMudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzOHB4KTtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbmA7XG5cbmV4cG9ydCBjb25zdCBIZWFkZXIgPSBzdHlsZWQuaGVhZGVyYFxuICBoZWlnaHQ6IDY0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICAtLXNhZi0wOiByZ2JhKHZhcigtLXNrX2ZvcmVncm91bmRfbG93LCAyOSwgMjgsIDI5KSwgMC4xMyk7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgdmFyKC0tc2FmLTApO1xuICBwYWRkaW5nOiAyMHB4IDE2cHggMjBweCAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgJiBpbWcge1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgRHJhZ092ZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNjRweDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNjRweCk7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBvcGFjaXR5OiAwLjc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDQwcHg7XG5gO1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
var DragOver = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  false ? 0 : {
  target: "e12dtmgu0",
  label: "DragOver"
})( false ? 0 : {
  name: "czjct4",
  styles: "position:absolute;top:64px;left:0;width:100%;height:calc(100% - 64px);background:white;opacity:0.7;display:flex;align-items:center;justify-content:center;font-size:40px",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYXJvcmkvQ29kaW5nL1NsYWNrLWNsb25lL3BhZ2VzL0RpcmVjdE1lc3NhZ2Uvc3R5bGVzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3QmtDIiwiZmlsZSI6Ii9Vc2Vycy9zYXJvcmkvQ29kaW5nL1NsYWNrLWNsb25lL3BhZ2VzL0RpcmVjdE1lc3NhZ2Uvc3R5bGVzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzhweCk7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5gO1xuXG5leHBvcnQgY29uc3QgSGVhZGVyID0gc3R5bGVkLmhlYWRlcmBcbiAgaGVpZ2h0OiA2NHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgLS1zYWYtMDogcmdiYSh2YXIoLS1za19mb3JlZ3JvdW5kX2xvdywgMjksIDI4LCAyOSksIDAuMTMpO1xuICBib3gtc2hhZG93OiAwIDFweCAwIHZhcigtLXNhZi0wKTtcbiAgcGFkZGluZzogMjBweCAxNnB4IDIwcHggMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICYgaW1nIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IERyYWdPdmVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDY0cHg7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDY0cHgpO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgb3BhY2l0eTogMC43O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiA0MHB4O1xuYDtcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

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

/***/ }),

/***/ "./utils/makeSection.ts":
/*!******************************!*\
  !*** ./utils/makeSection.ts ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ makeSection)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


function makeSection(chatList) {
  var sections = {};
  chatList.forEach(function (chat) {
    var monthDate = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(chat.createdAt).format('YYYY-MM-DD');

    if (Array.isArray(sections[monthDate])) {
      sections[monthDate].push(chat);
    } else {
      sections[monthDate] = [chat];
    }
  });
  return sections;
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50c19DaGF0Qm94X2luZGV4X3RzeC1jb21wb25lbnRzX0NoYXRMaXN0X2luZGV4X3RzeC1wYWdlc19EaXJlY3RNZXNzYWdlX3N0eWxlc190c3gtdXRpLWRiODViZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUEsSUFBTVMsUUFBUSxHQUFHQyxLQUFBLEdBQXlDLHVCQUF6QyxHQUFtRSxDQUFwRjs7QUFDQSxJQUFNRyxJQUFlLGlDQUFHWiwyQ0FBSSxTQUFDLGdCQUFjO0FBQUE7O0FBQUEsTUFBWGEsSUFBVyxRQUFYQSxJQUFXOztBQUN6QyxtQkFBc0JOLDJEQUFTLEVBQS9CO0FBQUEsTUFBUU8sU0FBUixjQUFRQSxTQUFSOztBQUNBLE1BQU1DLElBQVcsR0FBRyxZQUFZRixJQUFaLEdBQW1CQSxJQUFJLENBQUNHLE1BQXhCLEdBQWlDSCxJQUFJLENBQUNJLElBQTFEO0FBRUEsTUFBTUMsTUFBTSxHQUFHakIsOENBQU8sQ0FDcEI7QUFBQSxXQUNFWSxJQUFJLENBQUNNLE9BQUwsQ0FBYUMsVUFBYixDQUF3QixXQUF4QixLQUF3Q1AsSUFBSSxDQUFDTSxPQUFMLENBQWFDLFVBQWIsQ0FBd0IsVUFBeEIsQ0FBeEMsZ0JBQ0U7QUFBSyxTQUFHLFlBQUtaLFFBQUwsY0FBaUJLLElBQUksQ0FBQ00sT0FBdEIsQ0FBUjtBQUF5QyxXQUFLLEVBQUU7QUFBRUUsaUJBQVMsRUFBRTtBQUFiO0FBQWhELE1BREYsR0FHRWhCLDJEQUFjLENBQUM7QUFDYmlCLGFBQU8sRUFBRSx5QkFESTtBQUViQyxlQUZhLHFCQUVIQyxLQUZHLEVBRUlDLEtBRkosRUFFVztBQUN0QixZQUFNQyxHQUFvQixHQUFHRixLQUFLLENBQUNBLEtBQU4sQ0FBWSxxQkFBWixDQUE3Qjs7QUFDQSxZQUFJRSxHQUFKLEVBQVM7QUFDUCw4QkFDRSxpREFBQyxrREFBRDtBQUFNLGVBQUcsRUFBRUYsS0FB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aW5kZXgudHN4Iiwid2VicGFjazovL3NsYWNrLWNsb25lLy4vY29tcG9uZW50cy9DaGF0L3N0eWxlcy50c3giLCJ3ZWJwYWNrOi8vc2xhY2stY2xvbmUvLi9jb21wb25lbnRzL0NoYXRCb3gvaW5kZXgudHN4Iiwid2VicGFjazovL3NsYWNrLWNsb25lLy4vY29tcG9uZW50cy9DaGF0Qm94L3N0eWxlcy50c3giLCJ3ZWJwYWNrOi8vc2xhY2stY2xvbmUvLi9jb21wb25lbnRzL0NoYXRMaXN0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly9zbGFjay1jbG9uZS8uL2NvbXBvbmVudHMvQ2hhdExpc3Qvc3R5bGVzLnRzeCIsIndlYnBhY2s6Ly9zbGFjay1jbG9uZS8uL3BhZ2VzL0RpcmVjdE1lc3NhZ2Uvc3R5bGVzLnRzeCIsIndlYnBhY2s6Ly9zbGFjay1jbG9uZS8uL3V0aWxzL21ha2VTZWN0aW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElETSwgSUNoYXQsIElVc2VyIH0gZnJvbSAnQHR5cGluZ3MvZGInO1xuaW1wb3J0IFJlYWN0LCB7IFZGQywgbWVtbywgdXNlTWVtbywgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDaGF0V3JhcHBlciB9IGZyb20gJy4vc3R5bGVzJztcbmltcG9ydCBncmF2YXRhciBmcm9tICdncmF2YXRhcic7XG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnO1xuaW1wb3J0IHJlZ2V4aWZ5U3RyaW5nIGZyb20gJ3JlZ2V4aWZ5LXN0cmluZyc7XG5pbXBvcnQgeyBMaW5rLCB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgZGF0YTogSURNIHwgSUNoYXQ7XG59XG5cbmNvbnN0IEJBQ0tfVVJMID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgPyAnaHR0cDovL2xvY2FsaG9zdDozMDk1JyA6ICdodHRwczovL3NsZWFjdC5ub2RlYmlyZC5jb20nO1xuY29uc3QgQ2hhdDogRkM8UHJvcHM+ID0gbWVtbygoeyBkYXRhIH0pID0+IHtcbiAgY29uc3QgeyB3b3Jrc3BhY2UgfSA9IHVzZVBhcmFtczx7IHdvcmtzcGFjZTogc3RyaW5nOyBjaGFubmVsOiBzdHJpbmcgfT4oKTtcbiAgY29uc3QgdXNlcjogSVVzZXIgPSAnU2VuZGVyJyBpbiBkYXRhID8gZGF0YS5TZW5kZXIgOiBkYXRhLlVzZXI7XG5cbiAgY29uc3QgcmVzdWx0ID0gdXNlTWVtbzwoc3RyaW5nIHwgSlNYLkVsZW1lbnQpW10gfCBKU1guRWxlbWVudD4oXG4gICAgKCkgPT5cbiAgICAgIGRhdGEuY29udGVudC5zdGFydHNXaXRoKCd1cGxvYWRzXFxcXCcpIHx8IGRhdGEuY29udGVudC5zdGFydHNXaXRoKCd1cGxvYWRzLycpID8gKFxuICAgICAgICA8aW1nIHNyYz17YCR7QkFDS19VUkx9LyR7ZGF0YS5jb250ZW50fWB9IHN0eWxlPXt7IG1heEhlaWdodDogMjAwIH19IC8+XG4gICAgICApIDogKFxuICAgICAgICByZWdleGlmeVN0cmluZyh7XG4gICAgICAgICAgcGF0dGVybjogL0BcXFsoLis/KV1cXCgoXFxkKz8pXFwpfFxcbi9nLFxuICAgICAgICAgIGRlY29yYXRvcihtYXRjaCwgaW5kZXgpIHtcbiAgICAgICAgICAgIGNvbnN0IGFycjogc3RyaW5nW10gfCBudWxsID0gbWF0Y2gubWF0Y2goL0BcXFsoLis/KV1cXCgoXFxkKz8pXFwpLykhO1xuICAgICAgICAgICAgaWYgKGFycikge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxMaW5rIGtleT17bWF0Y2ggKyBpbmRleH0gdG89e2Avd29ya3NwYWNlLyR7d29ya3NwYWNlfS9kbS8ke2FyclsyXX1gfT5cbiAgICAgICAgICAgICAgICAgIEB7YXJyWzFdfVxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiA8YnIga2V5PXtpbmRleH0gLz47XG4gICAgICAgICAgfSxcbiAgICAgICAgICBpbnB1dDogZGF0YS5jb250ZW50LFxuICAgICAgICB9KVxuICAgICAgKSxcbiAgICBbd29ya3NwYWNlLCBkYXRhLmNvbnRlbnRdLFxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPENoYXRXcmFwcGVyPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJcbiAgICAgIGNoYXQtaW1nXCJcbiAgICAgID5cbiAgICAgICAgPGltZyBzcmM9e2dyYXZhdGFyLnVybCh1c2VyLmVtYWlsLCB7IHM6ICczNnB4JywgZDogJ3JldHJvJyB9KX0gYWx0PXt1c2VyLm5pY2tuYW1lfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtdGV4dFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtdXNlclwiPlxuICAgICAgICAgIDxiPnt1c2VyLm5pY2tuYW1lfTwvYj5cbiAgICAgICAgICA8c3Bhbj57ZGF5anMoZGF0YS5jcmVhdGVkQXQpLmZvcm1hdCgnaDptbSBBJyl9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHA+e3Jlc3VsdH08L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L0NoYXRXcmFwcGVyPlxuICApO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW8oQ2hhdCk7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbmV4cG9ydCBjb25zdCBDaGF0V3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDhweCAyMHB4O1xuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuICB9XG4gICYgLmNoYXQtaW1nIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAzNnB4O1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICYgaW1nIHtcbiAgICAgIHdpZHRoOiAzNnB4O1xuICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgIH1cbiAgfVxuYDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIFZGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENoYXRBcmVhLCBGb3JtLCBNZW50aW9uc1RleHRhcmVhLCBUb29sYm94LCBTZW5kQnV0dG9uLCBFYWNoTWVudGlvbiB9IGZyb20gJ0Bjb21wb25lbnRzL0NoYXRCb3gvc3R5bGVzJztcbmltcG9ydCBhdXRvc2l6ZSBmcm9tICdhdXRvc2l6ZSc7XG5pbXBvcnQgeyBNZW50aW9uLCBTdWdnZXN0aW9uRGF0YUl0ZW0gfSBmcm9tICdyZWFjdC1tZW50aW9ucyc7XG5pbXBvcnQgZ3JhdmF0YXIgZnJvbSAnZ3JhdmF0YXInO1xuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xuaW1wb3J0IHsgSVVzZXIgfSBmcm9tICdAdHlwaW5ncy9kYic7XG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IGZldGNoZXIgZnJvbSAnQHV0aWxzL2ZldGNoZXInO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBjaGF0OiBzdHJpbmc7XG4gIG9uU3VibWl0Rm9ybTogKGU6IGFueSkgPT4gdm9pZDtcbiAgb25DaGFuZ2VDaGF0OiAoZTogYW55KSA9PiB2b2lkO1xuICBwbGFjZWhvbGRlcj86IHN0cmluZztcbn1cblxuY29uc3QgQ2hhdEJveDogVkZDPFByb3BzPiA9ICh7IGNoYXQsIG9uU3VibWl0Rm9ybSwgb25DaGFuZ2VDaGF0LCBwbGFjZWhvbGRlciB9KSA9PiB7XG4gIGNvbnN0IHsgd29ya3NwYWNlIH0gPSB1c2VQYXJhbXM8eyB3b3Jrc3BhY2U6IHN0cmluZyB9PigpO1xuICBjb25zdCB7XG4gICAgZGF0YTogdXNlckRhdGEsXG4gICAgZXJyb3IsXG4gICAgcmV2YWxpZGF0ZSxcbiAgICBtdXRhdGUsXG4gIH0gPSB1c2VTV1I8SVVzZXIgfCBmYWxzZT4oJy9hcGkvdXNlcnMnLCBmZXRjaGVyLCB7XG4gICAgZGVkdXBpbmdJbnRlcnZhbDogMjAwMCwgLy8gMuy0iFxuICB9KTtcbiAgY29uc3QgeyBkYXRhOiBtZW1iZXJEYXRhIH0gPSB1c2VTV1I8SVVzZXJbXT4odXNlckRhdGEgPyBgL2FwaS93b3Jrc3BhY2VzLyR7d29ya3NwYWNlfS9tZW1iZXJzYCA6IG51bGwsIGZldGNoZXIpO1xuICBjb25zdCB0ZXh0YXJlYVJlZiA9IHVzZVJlZjxIVE1MVGV4dEFyZWFFbGVtZW50PihudWxsKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodGV4dGFyZWFSZWYuY3VycmVudCkge1xuICAgICAgYXV0b3NpemUodGV4dGFyZWFSZWYuY3VycmVudCk7XG4gICAgfVxuICB9LCBbXSk7XG4gIGNvbnN0IG9uS2V5ZG93bkNoYXQgPSB1c2VDYWxsYmFjayhcbiAgICAoZSkgPT4ge1xuICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgIGlmICghZS5zaGlmdEtleSkge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBvblN1Ym1pdEZvcm0oZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtvblN1Ym1pdEZvcm1dLFxuICApO1xuICBjb25zdCByZW5kZXJTdWdnZXN0aW9uID0gdXNlQ2FsbGJhY2soXG4gICAgKFxuICAgICAgc3VnZ2VzdGlvbjogU3VnZ2VzdGlvbkRhdGFJdGVtLFxuICAgICAgc2VhcmNoOiBzdHJpbmcsXG4gICAgICBoaWdobGlnaHRlZERpc3BsYXk6IFJlYWN0LlJlYWN0Tm9kZSxcbiAgICAgIGluZGV4OiBudW1iZXIsXG4gICAgICBmb2N1czogYm9vbGVhbixcbiAgICApOiBSZWFjdC5SZWFjdE5vZGUgPT4ge1xuICAgICAgaWYgKCFtZW1iZXJEYXRhKSByZXR1cm47XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8RWFjaE1lbnRpb24gZm9jdXM9e2ZvY3VzfT5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9e2dyYXZhdGFyLnVybChtZW1iZXJEYXRhW2luZGV4XS5lbWFpbCwgeyBzOiAnMjBweCcsIGQ6ICdyZXRybycgfSl9XG4gICAgICAgICAgICBhbHQ9e21lbWJlckRhdGFbaW5kZXhdLm5pY2tuYW1lfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHNwYW4+e2hpZ2hsaWdodGVkRGlzcGxheX08L3NwYW4+XG4gICAgICAgIDwvRWFjaE1lbnRpb24+XG4gICAgICApO1xuICAgIH0sXG4gICAgW21lbWJlckRhdGFdLFxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPENoYXRBcmVhPlxuICAgICAgPEZvcm0gb25TdWJtaXQ9e29uU3VibWl0Rm9ybX0+XG4gICAgICAgIDxNZW50aW9uc1RleHRhcmVhXG4gICAgICAgICAgaWQ9XCJlZGl0b3ItY2hhdFwiXG4gICAgICAgICAgdmFsdWU9e2NoYXR9XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlQ2hhdH1cbiAgICAgICAgICBvbktleVByZXNzPXtvbktleWRvd25DaGF0fVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICBpbnB1dFJlZj17dGV4dGFyZWFSZWZ9XG4gICAgICAgICAgYWxsb3dTdWdnZXN0aW9uc0Fib3ZlQ3Vyc29yXG4gICAgICAgID5cbiAgICAgICAgICA8TWVudGlvblxuICAgICAgICAgICAgYXBwZW5kU3BhY2VPbkFkZFxuICAgICAgICAgICAgdHJpZ2dlcj1cIkBcIlxuICAgICAgICAgICAgZGF0YT17bWVtYmVyRGF0YT8ubWFwKCh2KSA9PiAoeyBpZDogdi5pZCwgZGlzcGxheTogdi5uaWNrbmFtZSB9KSkgfHwgW119XG4gICAgICAgICAgICByZW5kZXJTdWdnZXN0aW9uPXtyZW5kZXJTdWdnZXN0aW9ufVxuICAgICAgICAgIC8+XG4gICAgICAgICAgey8qIDx0ZXh0YXJlYSB2YWx1ZT17Y2hhdH0gb25DaGFuZ2U9e29uQ2hhbmdlQ2hhdH0gb25LZXlEb3duPXtvbktleWRvd25DaGF0fSAvPiAqL31cbiAgICAgICAgPC9NZW50aW9uc1RleHRhcmVhPlxuXG4gICAgICAgIDxUb29sYm94PlxuICAgICAgICAgIDxTZW5kQnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAnYy1idXR0b24tdW5zdHlsZWQgYy1pY29uX2J1dHRvbiBjLWljb25fYnV0dG9uLS1saWdodCBjLWljb25fYnV0dG9uLS1zaXplX21lZGl1bSBjLXRleHR5X2lucHV0X19idXR0b24gYy10ZXh0eV9pbnB1dF9fYnV0dG9uLS1zZW5kJyArXG4gICAgICAgICAgICAgIChjaGF0Py50cmltKCkgPyAnJyA6ICcgYy10ZXh0eV9pbnB1dF9fYnV0dG9uLS1kaXNhYmxlZCcpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkYXRhLXFhPVwidGV4dHlfc2VuZF9idXR0b25cIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlNlbmQgbWVzc2FnZVwiXG4gICAgICAgICAgICBkYXRhLXNrPVwidG9vbHRpcF9wYXJlbnRcIlxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICBkaXNhYmxlZD17IWNoYXQ/LnRyaW0oKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJjLWljb24gYy1pY29uLS1wYXBlcnBsYW5lLWZpbGxlZFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XG4gICAgICAgICAgPC9TZW5kQnV0dG9uPlxuICAgICAgICA8L1Rvb2xib3g+XG4gICAgICA8L0Zvcm0+XG4gICAgPC9DaGF0QXJlYT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoYXRCb3g7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBNZW50aW9uc0lucHV0IH0gZnJvbSAncmVhY3QtbWVudGlvbnMnO1xuLy8gaW1wb3J0IHsgTWVudGlvbnNJbnB1dCB9IGZyb20gJ3JlYWN0LW1lbnRpb25zJztcblxuZXhwb3J0IGNvbnN0IENoYXRBcmVhID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHBhZGRpbmctdG9wOiAwO1xuYDtcblxuZXhwb3J0IGNvbnN0IEZvcm0gPSBzdHlsZWQuZm9ybWBcbiAgY29sb3I6IHJnYigyOSwgMjgsIDI5KTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjksIDI4LCAyOSk7XG5gO1xuXG5leHBvcnQgY29uc3QgTWVudGlvbnNUZXh0YXJlYSA9IHN0eWxlZChNZW50aW9uc0lucHV0KWBcbiAgZm9udC1mYW1pbHk6IFNsYWNrLUxhdG8sIGFwcGxlTG9nbywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwYWRkaW5nOiA4cHggOXB4O1xuICB3aWR0aDogMTAwJTtcbiAgJiBzdHJvbmcge1xuICAgIGJhY2tncm91bmQ6IHNreWJsdWU7XG4gIH1cbiAgJiB0ZXh0YXJlYSB7XG4gICAgaGVpZ2h0OiA0NHB4O1xuICAgIHBhZGRpbmc6IDlweCAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xuICAgIHJlc2l6ZTogbm9uZSAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxuICAmIHVsIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBwYWRkaW5nOiA5cHggMTBweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgd2lkdGg6IDE1MHB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgVG9vbGJveCA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogcmdiKDI0OCwgMjQ4LCAyNDgpO1xuICBoZWlnaHQ6IDQxcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMjIxLCAyMjEsIDIyMSk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBTZW5kQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNXB4O1xuICB0b3A6IDVweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBFYWNoTWVudGlvbiA9IHN0eWxlZC5idXR0b248eyBmb2N1czogYm9vbGVhbiB9PmBcbiAgcGFkZGluZzogNHB4IDIwcHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiByZ2IoMjgsIDI5LCAyOCk7XG4gIHdpZHRoOiAxMDAlO1xuICAmIGltZyB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIH1cbiAgJHsoeyBmb2N1cyB9KSA9PlxuICAgIGZvY3VzICYmXG4gICAgYFxuICAgIGJhY2tncm91bmQ6ICMxMjY0YTM7XG4gICAgY29sb3I6IHdoaXRlO1xuICBgfTtcbmA7XG4iLCJpbXBvcnQgeyBDaGF0Wm9uZSwgU2VjdGlvbiwgU3RpY2t5SGVhZGVyIH0gZnJvbSAnLi9zdHlsZXMnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCBmb3J3YXJkUmVmLCBSZWZPYmplY3QsIE11dGFibGVSZWZPYmplY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJQ2hhdCwgSURNIH0gZnJvbSAnQHR5cGluZ3MvZGInO1xuaW1wb3J0IENoYXQgZnJvbSAnQGNvbXBvbmVudHMvQ2hhdCc7XG5pbXBvcnQgeyBTY3JvbGxiYXJzIH0gZnJvbSAncmVhY3QtY3VzdG9tLXNjcm9sbGJhcnMnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBjaGF0U2VjdGlvbnM6IHsgW2tleTogc3RyaW5nXTogKElETSB8IElDaGF0KVtdIH07XG4gIHNldFNpemU6IChmOiAoc2l6ZTogbnVtYmVyKSA9PiBudW1iZXIpID0+IFByb21pc2U8KElETSB8IElDaGF0KVtdW10gfCB1bmRlZmluZWQ+O1xuICBpc1JlYWNoaW5nRW5kOiBib29sZWFuO1xufVxuY29uc3QgQ2hhdExpc3QgPSBmb3J3YXJkUmVmPFNjcm9sbGJhcnMsIFByb3BzPigoeyBjaGF0U2VjdGlvbnMsIHNldFNpemUsIGlzUmVhY2hpbmdFbmQgfSwgc2Nyb2xsUmVmKSA9PiB7XG4gIGNvbnN0IG9uU2Nyb2xsID0gdXNlQ2FsbGJhY2soXG4gICAgKHZhbHVlcykgPT4ge1xuICAgICAgaWYgKHZhbHVlcy5zY3JvbGxUb3AgPT09IDAgJiYgIWlzUmVhY2hpbmdFbmQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ+qwgOyepSDsnIQnKTtcbiAgICAgICAgc2V0U2l6ZSgocHJldlNpemUpID0+IHByZXZTaXplICsgMSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgLy8g7Iqk7YGs66GkIOychOy5mCDsnKDsp4BcbiAgICAgICAgICBjb25zdCBjdXJyZW50ID0gKHNjcm9sbFJlZiBhcyBNdXRhYmxlUmVmT2JqZWN0PFNjcm9sbGJhcnM+KT8uY3VycmVudDtcbiAgICAgICAgICBpZiAoY3VycmVudCkge1xuICAgICAgICAgICAgY3VycmVudC5zY3JvbGxUb3AoY3VycmVudC5nZXRTY3JvbGxIZWlnaHQoKSAtIHZhbHVlcy5zY3JvbGxIZWlnaHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBbc2Nyb2xsUmVmLCBpc1JlYWNoaW5nRW5kLCBzZXRTaXplXSxcbiAgKTtcbiAgcmV0dXJuIChcbiAgICA8Q2hhdFpvbmU+XG4gICAgICA8U2Nyb2xsYmFycyBhdXRvSGlkZSByZWY9e3Njcm9sbFJlZn0gb25TY3JvbGxGcmFtZT17b25TY3JvbGx9PlxuICAgICAgICB7T2JqZWN0LmVudHJpZXMoY2hhdFNlY3Rpb25zKS5tYXAoKFtkYXRlLCBjaGF0c10pID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFNlY3Rpb24gY2xhc3NOYW1lPXtgc2VjdGlvbi0ke2RhdGV9YH0ga2V5PXtkYXRlfT5cbiAgICAgICAgICAgICAgPFN0aWNreUhlYWRlcj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uPntkYXRlfTwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L1N0aWNreUhlYWRlcj5cbiAgICAgICAgICAgICAge2NoYXRzLm1hcCgoY2hhdCkgPT4gKFxuICAgICAgICAgICAgICAgIDxDaGF0IGtleT17Y2hhdC5pZH0gZGF0YT17Y2hhdH0gLz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L1NlY3Rpb24+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L1Njcm9sbGJhcnM+XG4gICAgPC9DaGF0Wm9uZT5cbiAgKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBDaGF0TGlzdDtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuZXhwb3J0IGNvbnN0IENoYXRab25lID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDE7XG5gO1xuXG5leHBvcnQgY29uc3QgU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcbmA7XG5cbmV4cG9ydCBjb25zdCBTdGlja3lIZWFkZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleDogMTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMTRweDtcbiAgJiBidXR0b24ge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBoZWlnaHQ6IDI4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gICAgcGFkZGluZzogMCAxNnB4O1xuICAgIHotaW5kZXg6IDI7XG4gICAgLS1zYWYtMDogcmdiYSh2YXIoLS1za19mb3JlZ3JvdW5kX2xvdywgMjksIDI4LCAyOSksIDAuMTMpO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCB2YXIoLS1zYWYtMCksIDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtMTNweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuYDtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzhweCk7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5gO1xuXG5leHBvcnQgY29uc3QgSGVhZGVyID0gc3R5bGVkLmhlYWRlcmBcbiAgaGVpZ2h0OiA2NHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgLS1zYWYtMDogcmdiYSh2YXIoLS1za19mb3JlZ3JvdW5kX2xvdywgMjksIDI4LCAyOSksIDAuMTMpO1xuICBib3gtc2hhZG93OiAwIDFweCAwIHZhcigtLXNhZi0wKTtcbiAgcGFkZGluZzogMjBweCAxNnB4IDIwcHggMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICYgaW1nIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IERyYWdPdmVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDY0cHg7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDY0cHgpO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgb3BhY2l0eTogMC43O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiA0MHB4O1xuYDtcbiIsImltcG9ydCB7IElDaGF0LCBJRE0gfSBmcm9tICdAdHlwaW5ncy9kYic7XG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYWtlU2VjdGlvbihjaGF0TGlzdDogKElETSB8IElDaGF0KVtdKSB7XG4gIGNvbnN0IHNlY3Rpb25zOiB7IFtrZXk6IHN0cmluZ106IChJRE0gfCBJQ2hhdClbXSB9ID0ge307XG4gIGNoYXRMaXN0LmZvckVhY2goKGNoYXQpID0+IHtcbiAgICBjb25zdCBtb250aERhdGUgPSBkYXlqcyhjaGF0LmNyZWF0ZWRBdCkuZm9ybWF0KCdZWVlZLU1NLUREJyk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoc2VjdGlvbnNbbW9udGhEYXRlXSkpIHtcbiAgICAgIHNlY3Rpb25zW21vbnRoRGF0ZV0ucHVzaChjaGF0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VjdGlvbnNbbW9udGhEYXRlXSA9IFtjaGF0XTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gc2VjdGlvbnM7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJtZW1vIiwidXNlTWVtbyIsIkNoYXRXcmFwcGVyIiwiZ3JhdmF0YXIiLCJkYXlqcyIsInJlZ2V4aWZ5U3RyaW5nIiwiTGluayIsInVzZVBhcmFtcyIsIkJBQ0tfVVJMIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiQ2hhdCIsImRhdGEiLCJ3b3Jrc3BhY2UiLCJ1c2VyIiwiU2VuZGVyIiwiVXNlciIsInJlc3VsdCIsImNvbnRlbnQiLCJzdGFydHNXaXRoIiwibWF4SGVpZ2h0IiwicGF0dGVybiIsImRlY29yYXRvciIsIm1hdGNoIiwiaW5kZXgiLCJhcnIiLCJpbnB1dCIsInVybCIsImVtYWlsIiwicyIsImQiLCJuaWNrbmFtZSIsImNyZWF0ZWRBdCIsImZvcm1hdCIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiQ2hhdEFyZWEiLCJGb3JtIiwiTWVudGlvbnNUZXh0YXJlYSIsIlRvb2xib3giLCJTZW5kQnV0dG9uIiwiRWFjaE1lbnRpb24iLCJhdXRvc2l6ZSIsIk1lbnRpb24iLCJ1c2VTV1IiLCJmZXRjaGVyIiwiQ2hhdEJveCIsImNoYXQiLCJvblN1Ym1pdEZvcm0iLCJvbkNoYW5nZUNoYXQiLCJwbGFjZWhvbGRlciIsImRlZHVwaW5nSW50ZXJ2YWwiLCJ1c2VyRGF0YSIsImVycm9yIiwicmV2YWxpZGF0ZSIsIm11dGF0ZSIsIm1lbWJlckRhdGEiLCJ0ZXh0YXJlYVJlZiIsImN1cnJlbnQiLCJvbktleWRvd25DaGF0IiwiZSIsImtleSIsInNoaWZ0S2V5IiwicHJldmVudERlZmF1bHQiLCJyZW5kZXJTdWdnZXN0aW9uIiwic3VnZ2VzdGlvbiIsInNlYXJjaCIsImhpZ2hsaWdodGVkRGlzcGxheSIsImZvY3VzIiwibWFwIiwidiIsImlkIiwiZGlzcGxheSIsInRyaW0iLCJNZW50aW9uc0lucHV0IiwiQ2hhdFpvbmUiLCJTZWN0aW9uIiwiU3RpY2t5SGVhZGVyIiwiZm9yd2FyZFJlZiIsIlNjcm9sbGJhcnMiLCJDaGF0TGlzdCIsInNjcm9sbFJlZiIsImNoYXRTZWN0aW9ucyIsInNldFNpemUiLCJpc1JlYWNoaW5nRW5kIiwib25TY3JvbGwiLCJ2YWx1ZXMiLCJzY3JvbGxUb3AiLCJjb25zb2xlIiwibG9nIiwicHJldlNpemUiLCJ0aGVuIiwiZ2V0U2Nyb2xsSGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwiT2JqZWN0IiwiZW50cmllcyIsImRhdGUiLCJjaGF0cyIsIkNvbnRhaW5lciIsIkhlYWRlciIsIkRyYWdPdmVyIiwibWFrZVNlY3Rpb24iLCJjaGF0TGlzdCIsInNlY3Rpb25zIiwiZm9yRWFjaCIsIm1vbnRoRGF0ZSIsIkFycmF5IiwiaXNBcnJheSIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9