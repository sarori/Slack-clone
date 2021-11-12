"use strict";
(self["webpackChunkslack_clone"] = self["webpackChunkslack_clone"] || []).push([["pages_Channel_index_tsx"],{

/***/ "./pages/Channel/index.tsx":
/*!*********************************!*\
  !*** ./pages/Channel/index.tsx ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _pages_DirectMessage_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pages/DirectMessage/styles */ "./pages/DirectMessage/styles.tsx");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _utils_fetcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @utils/fetcher */ "./utils/fetcher.ts");
/* harmony import */ var _components_ChatBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/ChatBox */ "./components/ChatBox/index.tsx");
/* harmony import */ var _components_ChatList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/ChatList */ "./components/ChatList/index.tsx");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @hooks/useInput */ "./hooks/useInput.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_makeSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @utils/makeSection */ "./utils/makeSection.ts");
/* harmony import */ var _hooks_useSocket__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @hooks/useSocket */ "./hooks/useSocket.ts");
/* harmony import */ var _components_InviteChannelModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @components/InviteChannelModal */ "./components/InviteChannelModal/index.tsx");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./styles */ "./pages/Channel/styles.tsx");
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















var Channel = function Channel() {
  _s2();

  var _chatData$, _chatData;

  var _useParams = (0,react_router__WEBPACK_IMPORTED_MODULE_12__.useParams)(),
      workspace = _useParams.workspace,
      channel = _useParams.channel;

  var _useSWR = (0,swr__WEBPACK_IMPORTED_MODULE_2__["default"])('/api/users', _utils_fetcher__WEBPACK_IMPORTED_MODULE_3__["default"]),
      myData = _useSWR.data;

  var _useInput = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_6__["default"])(''),
      _useInput2 = _slicedToArray(_useInput, 3),
      chat = _useInput2[0],
      onChangeChat = _useInput2[1],
      setChat = _useInput2[2];

  var _useSWR2 = (0,swr__WEBPACK_IMPORTED_MODULE_2__["default"])("/api/workspaces/".concat(workspace, "/channels/").concat(channel), _utils_fetcher__WEBPACK_IMPORTED_MODULE_3__["default"]),
      channelData = _useSWR2.data;

  var _useSWRInfinite = (0,swr__WEBPACK_IMPORTED_MODULE_2__.useSWRInfinite)(function (index) {
    return "/api/workspaces/".concat(workspace, "/channels/").concat(channel, "/chats?perPage=20&page=").concat(index + 1);
  }, _utils_fetcher__WEBPACK_IMPORTED_MODULE_3__["default"]),
      chatData = _useSWRInfinite.data,
      mutateChat = _useSWRInfinite.mutate,
      revalidate = _useSWRInfinite.revalidate,
      setSize = _useSWRInfinite.setSize;

  var _useSWR3 = (0,swr__WEBPACK_IMPORTED_MODULE_2__["default"])(myData ? "/api/workspaces/".concat(workspace, "/channels/").concat(channel, "/members") : null, _utils_fetcher__WEBPACK_IMPORTED_MODULE_3__["default"]),
      channelMembersData = _useSWR3.data;

  var _useSocket = (0,_hooks_useSocket__WEBPACK_IMPORTED_MODULE_9__["default"])(workspace),
      _useSocket2 = _slicedToArray(_useSocket, 1),
      socket = _useSocket2[0];

  var isEmpty = (chatData === null || chatData === void 0 ? void 0 : (_chatData$ = chatData[0]) === null || _chatData$ === void 0 ? void 0 : _chatData$.length) === 0;
  var isReachingEnd = isEmpty || chatData && ((_chatData = chatData[chatData.length - 1]) === null || _chatData === void 0 ? void 0 : _chatData.length) < 20 || false;
  var scrollbarRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      showInviteChannelModal = _useState2[0],
      setShowInviteChannelModal = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      dragOver = _useState4[0],
      setDragOver = _useState4[1]; // 0초 A: 안녕~(optimistic UI)
  // 1초 B: 안녕~
  // 2초 A: 안녕~(실제 서버)


  var onSubmitForm = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (e) {
    e.preventDefault();
    console.log(chat);

    if (chat !== null && chat !== void 0 && chat.trim() && chatData && channelData) {
      var savedChat = chat;
      mutateChat(function (prevChatData) {
        var _chatData$0$;

        prevChatData === null || prevChatData === void 0 ? void 0 : prevChatData[0].unshift({
          id: (((_chatData$0$ = chatData[0][0]) === null || _chatData$0$ === void 0 ? void 0 : _chatData$0$.id) || 0) + 1,
          content: savedChat,
          UserId: myData.id,
          User: myData,
          ChannelId: channelData.id,
          Channel: channelData,
          createdAt: new Date()
        });
        return prevChatData;
      }, false).then(function () {
        var _scrollbarRef$current;

        setChat('');
        (_scrollbarRef$current = scrollbarRef.current) === null || _scrollbarRef$current === void 0 ? void 0 : _scrollbarRef$current.scrollToBottom();
      });
      axios__WEBPACK_IMPORTED_MODULE_7___default().post("/api/workspaces/".concat(workspace, "/channels/").concat(channel, "/chats"), {
        content: chat
      }).then(function () {
        revalidate();
      }).catch(console.error);
    }
  }, [chat, chatData, myData, channelData, workspace, channel]);
  var onMessage = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (data) {
    // id는 상대방 아이디
    if (data.Channel.name === channel && (data.content.startsWith('uploads\\') || data.content.startsWith('uploads/') || data.UserId !== (myData === null || myData === void 0 ? void 0 : myData.id))) {
      mutateChat(function (chatData) {
        chatData === null || chatData === void 0 ? void 0 : chatData[0].unshift(data);
        return chatData;
      }, false).then(function () {
        if (scrollbarRef.current) {
          if (scrollbarRef.current.getScrollHeight() < scrollbarRef.current.getClientHeight() + scrollbarRef.current.getScrollTop() + 150) {
            var _scrollbarRef$current2;

            console.log('scrollToBottom!', (_scrollbarRef$current2 = scrollbarRef.current) === null || _scrollbarRef$current2 === void 0 ? void 0 : _scrollbarRef$current2.getValues());
            setTimeout(function () {
              var _scrollbarRef$current3;

              (_scrollbarRef$current3 = scrollbarRef.current) === null || _scrollbarRef$current3 === void 0 ? void 0 : _scrollbarRef$current3.scrollToBottom();
            }, 50);
          }
        }
      });
    }
  }, [channel, myData]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    socket === null || socket === void 0 ? void 0 : socket.on('message', onMessage);
    return function () {
      socket === null || socket === void 0 ? void 0 : socket.off('message', onMessage);
    };
  }, [socket, onMessage]); // 로딩 시 스크롤바 제일 아래로

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if ((chatData === null || chatData === void 0 ? void 0 : chatData.length) === 1) {
      console.log('toBottomWhenLoaded', scrollbarRef.current);
      setTimeout(function () {
        var _scrollbarRef$current4;

        console.log('scrollbar', scrollbarRef.current);
        (_scrollbarRef$current4 = scrollbarRef.current) === null || _scrollbarRef$current4 === void 0 ? void 0 : _scrollbarRef$current4.scrollToBottom();
      }, 500);
    }
  }, [chatData]);
  var onClickInviteChannel = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    setShowInviteChannelModal(true);
  }, []);
  var onCloseModal = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    setShowInviteChannelModal(false);
  }, []);
  var onChangeFile = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (e) {
    var formData = new FormData();

    if (e.target.files) {
      // Use DataTransferItemList interface to access the file(s)
      for (var i = 0; i < e.target.files.length; i++) {
        var file = e.target.files[i].getAsFile();
        console.log('... file[' + i + '].name = ' + file.name);
        formData.append('image', file);
      }
    }

    axios__WEBPACK_IMPORTED_MODULE_7___default().post("/api/workspaces/".concat(workspace, "/channels/").concat(channel, "/images"), formData).then(function () {});
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    localStorage.setItem("".concat(workspace, "-").concat(channel), new Date().getTime().toString());
  }, [workspace, channel]);
  var onDrop = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (e) {
    e.preventDefault();
    console.log(e);
    var formData = new FormData();

    if (e.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      for (var i = 0; i < e.dataTransfer.items.length; i++) {
        // If dropped items aren't files, reject them
        console.log(e.dataTransfer.items[i]);

        if (e.dataTransfer.items[i].kind === 'file') {
          var file = e.dataTransfer.items[i].getAsFile();
          console.log(e, '.... file[' + i + '].name = ' + file.name);
          formData.append('image', file);
        }
      }
    } else {
      // Use DataTransfer interface to access the file(s)
      for (var _i2 = 0; _i2 < e.dataTransfer.files.length; _i2++) {
        console.log(e, '... file[' + _i2 + '].name = ' + e.dataTransfer.files[_i2].name);
        formData.append('image', e.dataTransfer.files[_i2]);
      }
    }

    axios__WEBPACK_IMPORTED_MODULE_7___default().post("/api/workspaces/".concat(workspace, "/channels/").concat(channel, "/images"), formData).then(function () {
      setDragOver(false);
      localStorage.setItem("".concat(workspace, "-").concat(channel), new Date().getTime().toString());
    });
  }, [workspace, channel]);
  var onDragOver = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (e) {
    e.preventDefault();
    console.log(e);
    setDragOver(true);
  }, []); // if (channelsData && !channelData) {
  //   return <Redirect to={`/workspace/${workspace}/channel/일반`} />;
  // }

  if (!myData || !myData) {
    return null;
  }

  var chatSections = (0,_utils_makeSection__WEBPACK_IMPORTED_MODULE_8__["default"])(chatData ? chatData.flat().reverse() : []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_DirectMessage_styles__WEBPACK_IMPORTED_MODULE_1__.Container, {
    onDrop: onDrop,
    onDragOver: onDragOver
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_DirectMessage_styles__WEBPACK_IMPORTED_MODULE_1__.Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "#", channel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      display: 'flex',
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, channelMembersData === null || channelMembersData === void 0 ? void 0 : channelMembersData.length), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: onClickInviteChannel,
    className: "c-button-unstyled p-ia__view_header__button",
    "aria-label": "Add people to #react-native",
    "data-sk": "tooltip_parent",
    type: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "c-icon p-ia__view_header__button_icon c-icon--add-user",
    "aria-hidden": "true"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ChatList__WEBPACK_IMPORTED_MODULE_5__["default"], {
    chatSections: chatSections,
    ref: scrollbarRef,
    setSize: setSize,
    isReachingEnd: isReachingEnd
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ChatBox__WEBPACK_IMPORTED_MODULE_4__["default"], {
    chat: chat,
    onChangeChat: onChangeChat,
    onSubmitForm: onSubmitForm
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_InviteChannelModal__WEBPACK_IMPORTED_MODULE_10__["default"], {
    show: showInviteChannelModal,
    onCloseModal: onCloseModal,
    setShowInviteChannelModal: setShowInviteChannelModal
  }), dragOver && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_11__.DragOver, null, "\uC5C5\uB85C\uB4DC!"));
};

_s2(Channel, "lvobImJ43gduiX8SiUzaeuTi/Hw=", false, function () {
  return [react_router__WEBPACK_IMPORTED_MODULE_12__.useParams, swr__WEBPACK_IMPORTED_MODULE_2__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_6__["default"], swr__WEBPACK_IMPORTED_MODULE_2__["default"], swr__WEBPACK_IMPORTED_MODULE_2__.useSWRInfinite, swr__WEBPACK_IMPORTED_MODULE_2__["default"], _hooks_useSocket__WEBPACK_IMPORTED_MODULE_9__["default"]];
});

_c = Channel;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Channel);

var _c;

__webpack_require__.$Refresh$.register(_c, "Channel");

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

/***/ "./pages/Channel/styles.tsx":
/*!**********************************!*\
  !*** ./pages/Channel/styles.tsx ***!
  \**********************************/
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
  target: "e1yi8ua22",
  label: "Container"
})( false ? 0 : {
  name: "1a0r0eh",
  styles: "display:flex;flex-wrap:wrap;height:calc(100vh - 38px);flex-flow:column;position:relative",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYXJvcmkvQ29kaW5nL1NsYWNrLWNsb25lL3BhZ2VzL0NoYW5uZWwvc3R5bGVzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFbUMiLCJmaWxlIjoiL1VzZXJzL3Nhcm9yaS9Db2RpbmcvU2xhY2stY2xvbmUvcGFnZXMvQ2hhbm5lbC9zdHlsZXMudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzOHB4KTtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbmA7XG5cbmV4cG9ydCBjb25zdCBIZWFkZXIgPSBzdHlsZWQuaGVhZGVyYFxuICBoZWlnaHQ6IDY0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICAtLXNhZi0wOiByZ2JhKHZhcigtLXNrX2ZvcmVncm91bmRfbG93LCAyOSwgMjgsIDI5KSwgMC4xMyk7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgdmFyKC0tc2FmLTApO1xuICBwYWRkaW5nOiAyMHB4IDE2cHggMjBweCAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgXG4gICYgLmhlYWRlci1yaWdodCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAxO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmV4cG9ydCBjb25zdCBEcmFnT3ZlciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA2NHB4O1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2NHB4KTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIG9wYWNpdHk6IDAuNztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogNDBweDtcbmA7XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
var Header = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("header",  false ? 0 : {
  target: "e1yi8ua21",
  label: "Header"
})( false ? 0 : {
  name: "1ezwwi6",
  styles: "height:64px;display:flex;width:100%;--saf-0:rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);box-shadow:0 1px 0 var(--saf-0);padding:20px 16px 20px 20px;font-weight:bold;align-items:center;& .header-right{display:flex;flex:1;justify-content:flex-end;align-items:center;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYXJvcmkvQ29kaW5nL1NsYWNrLWNsb25lL3BhZ2VzL0NoYW5uZWwvc3R5bGVzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVbUMiLCJmaWxlIjoiL1VzZXJzL3Nhcm9yaS9Db2RpbmcvU2xhY2stY2xvbmUvcGFnZXMvQ2hhbm5lbC9zdHlsZXMudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzOHB4KTtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbmA7XG5cbmV4cG9ydCBjb25zdCBIZWFkZXIgPSBzdHlsZWQuaGVhZGVyYFxuICBoZWlnaHQ6IDY0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICAtLXNhZi0wOiByZ2JhKHZhcigtLXNrX2ZvcmVncm91bmRfbG93LCAyOSwgMjgsIDI5KSwgMC4xMyk7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgdmFyKC0tc2FmLTApO1xuICBwYWRkaW5nOiAyMHB4IDE2cHggMjBweCAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgXG4gICYgLmhlYWRlci1yaWdodCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAxO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmV4cG9ydCBjb25zdCBEcmFnT3ZlciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA2NHB4O1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2NHB4KTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIG9wYWNpdHk6IDAuNztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogNDBweDtcbmA7XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
var DragOver = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  false ? 0 : {
  target: "e1yi8ua20",
  label: "DragOver"
})( false ? 0 : {
  name: "czjct4",
  styles: "position:absolute;top:64px;left:0;width:100%;height:calc(100% - 64px);background:white;opacity:0.7;display:flex;align-items:center;justify-content:center;font-size:40px",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYXJvcmkvQ29kaW5nL1NsYWNrLWNsb25lL3BhZ2VzL0NoYW5uZWwvc3R5bGVzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQmtDIiwiZmlsZSI6Ii9Vc2Vycy9zYXJvcmkvQ29kaW5nL1NsYWNrLWNsb25lL3BhZ2VzL0NoYW5uZWwvc3R5bGVzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzhweCk7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5gO1xuXG5leHBvcnQgY29uc3QgSGVhZGVyID0gc3R5bGVkLmhlYWRlcmBcbiAgaGVpZ2h0OiA2NHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgLS1zYWYtMDogcmdiYSh2YXIoLS1za19mb3JlZ3JvdW5kX2xvdywgMjksIDI4LCAyOSksIDAuMTMpO1xuICBib3gtc2hhZG93OiAwIDFweCAwIHZhcigtLXNhZi0wKTtcbiAgcGFkZGluZzogMjBweCAxNnB4IDIwcHggMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIFxuICAmIC5oZWFkZXItcmlnaHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleDogMTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5leHBvcnQgY29uc3QgRHJhZ092ZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNjRweDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNjRweCk7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBvcGFjaXR5OiAwLjc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDQwcHg7XG5gO1xuIl19 */",
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0U7QUFBRyxhQUFTLEVBQUMsd0RBQWI7QUFBc0UsbUJBQVk7QUFBbEYsSUFQRixDQUZGLENBRkYsQ0FERixlQWdCRSxpREFBQyw0REFBRDtBQUFVLGdCQUFZLEVBQUVvQixZQUF4QjtBQUFzQyxPQUFHLEVBQUV6RCxZQUEzQztBQUF5RCxXQUFPLEVBQUVOLE9BQWxFO0FBQTJFLGlCQUFhLEVBQUVLO0FBQTFGLElBaEJGLGVBaUJFLGlEQUFDLDJEQUFEO0FBQVMsUUFBSSxFQUFFZCxJQUFmO0FBQXFCLGdCQUFZLEVBQUVDLFlBQW5DO0FBQWlELGdCQUFZLEVBQUVtQjtBQUEvRCxJQWpCRixlQWtCRSxpREFBQyx1RUFBRDtBQUNFLFFBQUksRUFBRUosc0JBRFI7QUFFRSxnQkFBWSxFQUFFcUMsWUFGaEI7QUFHRSw2QkFBeUIsRUFBRXBDO0FBSDdCLElBbEJGLEVBdUJHQyxRQUFRLGlCQUFJLGlEQUFDLDhDQUFELDhCQXZCZixDQURGO0FBMkJELENBaE5EOztJQUFNdkI7VUFDMkJaLHNEQUNOQyw2Q0FDYUsseURBQ1JMLDZDQU0xQkMsaURBSWlDRCw2Q0FJcEJROzs7S0FsQmJHO0FBa05OLGlFQUFlQSxPQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoT08sSUFBTWQsU0FBUyxHQUFHLGtGQUFIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUFmO0FBUUEsSUFBTUMsTUFBTSxHQUFHLHFGQUFIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUFaO0FBaUJBLElBQU1ZLFFBQVEsR0FBRyxrRkFBSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFBZCIsInNvdXJjZXMiOlsid2VicGFjazovL3NsYWNrLWNsb25lLy4vcGFnZXMvQ2hhbm5lbC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vc2xhY2stY2xvbmUvLi9wYWdlcy9DaGFubmVsL3N0eWxlcy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb250YWluZXIsIEhlYWRlciB9IGZyb20gJ0BwYWdlcy9EaXJlY3RNZXNzYWdlL3N0eWxlcyc7XG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHVzZVNXUiwgeyB1c2VTV1JJbmZpbml0ZSB9IGZyb20gJ3N3cic7XG5pbXBvcnQgZmV0Y2hlciBmcm9tICdAdXRpbHMvZmV0Y2hlcic7XG5pbXBvcnQgQ2hhdEJveCBmcm9tICdAY29tcG9uZW50cy9DaGF0Qm94JztcbmltcG9ydCBDaGF0TGlzdCBmcm9tICdAY29tcG9uZW50cy9DaGF0TGlzdCc7XG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnQGhvb2tzL3VzZUlucHV0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBJQ2hhbm5lbCwgSUNoYXQsIElVc2VyIH0gZnJvbSAnQHR5cGluZ3MvZGInO1xuaW1wb3J0IG1ha2VTZWN0aW9uIGZyb20gJ0B1dGlscy9tYWtlU2VjdGlvbic7XG5pbXBvcnQgU2Nyb2xsYmFycyBmcm9tICdyZWFjdC1jdXN0b20tc2Nyb2xsYmFycyc7XG5pbXBvcnQgdXNlU29ja2V0IGZyb20gJ0Bob29rcy91c2VTb2NrZXQnO1xuaW1wb3J0IEludml0ZUNoYW5uZWxNb2RhbCBmcm9tICdAY29tcG9uZW50cy9JbnZpdGVDaGFubmVsTW9kYWwnO1xuaW1wb3J0IHsgRHJhZ092ZXIgfSBmcm9tICcuL3N0eWxlcyc7XG5cbmNvbnN0IENoYW5uZWwgPSAoKSA9PiB7XG4gIGNvbnN0IHsgd29ya3NwYWNlLCBjaGFubmVsIH0gPSB1c2VQYXJhbXM8eyB3b3Jrc3BhY2U6IHN0cmluZzsgY2hhbm5lbDogc3RyaW5nIH0+KCk7XG4gIGNvbnN0IHsgZGF0YTogbXlEYXRhIH0gPSB1c2VTV1IoJy9hcGkvdXNlcnMnLCBmZXRjaGVyKTtcbiAgY29uc3QgW2NoYXQsIG9uQ2hhbmdlQ2hhdCwgc2V0Q2hhdF0gPSB1c2VJbnB1dCgnJyk7XG4gIGNvbnN0IHsgZGF0YTogY2hhbm5lbERhdGEgfSA9IHVzZVNXUjxJQ2hhbm5lbD4oYC9hcGkvd29ya3NwYWNlcy8ke3dvcmtzcGFjZX0vY2hhbm5lbHMvJHtjaGFubmVsfWAsIGZldGNoZXIpO1xuICBjb25zdCB7XG4gICAgZGF0YTogY2hhdERhdGEsXG4gICAgbXV0YXRlOiBtdXRhdGVDaGF0LFxuICAgIHJldmFsaWRhdGUsXG4gICAgc2V0U2l6ZSxcbiAgfSA9IHVzZVNXUkluZmluaXRlPElDaGF0W10+KFxuICAgIChpbmRleCkgPT4gYC9hcGkvd29ya3NwYWNlcy8ke3dvcmtzcGFjZX0vY2hhbm5lbHMvJHtjaGFubmVsfS9jaGF0cz9wZXJQYWdlPTIwJnBhZ2U9JHtpbmRleCArIDF9YCxcbiAgICBmZXRjaGVyLFxuICApO1xuICBjb25zdCB7IGRhdGE6IGNoYW5uZWxNZW1iZXJzRGF0YSB9ID0gdXNlU1dSPElVc2VyW10+KFxuICAgIG15RGF0YSA/IGAvYXBpL3dvcmtzcGFjZXMvJHt3b3Jrc3BhY2V9L2NoYW5uZWxzLyR7Y2hhbm5lbH0vbWVtYmVyc2AgOiBudWxsLFxuICAgIGZldGNoZXIsXG4gICk7XG4gIGNvbnN0IFtzb2NrZXRdID0gdXNlU29ja2V0KHdvcmtzcGFjZSk7XG4gIGNvbnN0IGlzRW1wdHkgPSBjaGF0RGF0YT8uWzBdPy5sZW5ndGggPT09IDA7XG4gIGNvbnN0IGlzUmVhY2hpbmdFbmQgPSBpc0VtcHR5IHx8IChjaGF0RGF0YSAmJiBjaGF0RGF0YVtjaGF0RGF0YS5sZW5ndGggLSAxXT8ubGVuZ3RoIDwgMjApIHx8IGZhbHNlO1xuICBjb25zdCBzY3JvbGxiYXJSZWYgPSB1c2VSZWY8U2Nyb2xsYmFycz4obnVsbCk7XG4gIGNvbnN0IFtzaG93SW52aXRlQ2hhbm5lbE1vZGFsLCBzZXRTaG93SW52aXRlQ2hhbm5lbE1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2RyYWdPdmVyLCBzZXREcmFnT3Zlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgLy8gMOy0iCBBOiDslYjrhZV+KG9wdGltaXN0aWMgVUkpXG4gIC8vIDHstIggQjog7JWI64WVflxuICAvLyAy7LSIIEE6IOyViOuFlX4o7Iuk7KCcIOyEnOuyhClcblxuICBjb25zdCBvblN1Ym1pdEZvcm0gPSB1c2VDYWxsYmFjayhcbiAgICAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc29sZS5sb2coY2hhdCk7XG4gICAgICBpZiAoY2hhdD8udHJpbSgpICYmIGNoYXREYXRhICYmIGNoYW5uZWxEYXRhKSB7XG4gICAgICAgIGNvbnN0IHNhdmVkQ2hhdCA9IGNoYXQ7XG4gICAgICAgIG11dGF0ZUNoYXQoKHByZXZDaGF0RGF0YSkgPT4ge1xuICAgICAgICAgIHByZXZDaGF0RGF0YT8uWzBdLnVuc2hpZnQoe1xuICAgICAgICAgICAgaWQ6IChjaGF0RGF0YVswXVswXT8uaWQgfHwgMCkgKyAxLFxuICAgICAgICAgICAgY29udGVudDogc2F2ZWRDaGF0LFxuICAgICAgICAgICAgVXNlcklkOiBteURhdGEuaWQsXG4gICAgICAgICAgICBVc2VyOiBteURhdGEsXG4gICAgICAgICAgICBDaGFubmVsSWQ6IGNoYW5uZWxEYXRhLmlkLFxuICAgICAgICAgICAgQ2hhbm5lbDogY2hhbm5lbERhdGEsXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCksXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIHByZXZDaGF0RGF0YTtcbiAgICAgICAgfSwgZmFsc2UpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHNldENoYXQoJycpO1xuICAgICAgICAgIHNjcm9sbGJhclJlZi5jdXJyZW50Py5zY3JvbGxUb0JvdHRvbSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgYXhpb3NcbiAgICAgICAgICAucG9zdChgL2FwaS93b3Jrc3BhY2VzLyR7d29ya3NwYWNlfS9jaGFubmVscy8ke2NoYW5uZWx9L2NoYXRzYCwge1xuICAgICAgICAgICAgY29udGVudDogY2hhdCxcbiAgICAgICAgICB9KVxuICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHJldmFsaWRhdGUoKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaChjb25zb2xlLmVycm9yKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFtjaGF0LCBjaGF0RGF0YSwgbXlEYXRhLCBjaGFubmVsRGF0YSwgd29ya3NwYWNlLCBjaGFubmVsXSxcbiAgKTtcblxuICBjb25zdCBvbk1lc3NhZ2UgPSB1c2VDYWxsYmFjayhcbiAgICAoZGF0YTogSUNoYXQpID0+IHtcbiAgICAgIC8vIGlk64qUIOyDgeuMgOuwqSDslYTsnbTrlJRcbiAgICAgIGlmIChcbiAgICAgICAgZGF0YS5DaGFubmVsLm5hbWUgPT09IGNoYW5uZWwgJiZcbiAgICAgICAgKGRhdGEuY29udGVudC5zdGFydHNXaXRoKCd1cGxvYWRzXFxcXCcpIHx8IGRhdGEuY29udGVudC5zdGFydHNXaXRoKCd1cGxvYWRzLycpIHx8IGRhdGEuVXNlcklkICE9PSBteURhdGE/LmlkKVxuICAgICAgKSB7XG4gICAgICAgIG11dGF0ZUNoYXQoKGNoYXREYXRhKSA9PiB7XG4gICAgICAgICAgY2hhdERhdGE/LlswXS51bnNoaWZ0KGRhdGEpO1xuICAgICAgICAgIHJldHVybiBjaGF0RGF0YTtcbiAgICAgICAgfSwgZmFsc2UpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGlmIChzY3JvbGxiYXJSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBzY3JvbGxiYXJSZWYuY3VycmVudC5nZXRTY3JvbGxIZWlnaHQoKSA8XG4gICAgICAgICAgICAgIHNjcm9sbGJhclJlZi5jdXJyZW50LmdldENsaWVudEhlaWdodCgpICsgc2Nyb2xsYmFyUmVmLmN1cnJlbnQuZ2V0U2Nyb2xsVG9wKCkgKyAxNTBcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2Nyb2xsVG9Cb3R0b20hJywgc2Nyb2xsYmFyUmVmLmN1cnJlbnQ/LmdldFZhbHVlcygpKTtcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2Nyb2xsYmFyUmVmLmN1cnJlbnQ/LnNjcm9sbFRvQm90dG9tKCk7XG4gICAgICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgW2NoYW5uZWwsIG15RGF0YV0sXG4gICk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzb2NrZXQ/Lm9uKCdtZXNzYWdlJywgb25NZXNzYWdlKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgc29ja2V0Py5vZmYoJ21lc3NhZ2UnLCBvbk1lc3NhZ2UpO1xuICAgIH07XG4gIH0sIFtzb2NrZXQsIG9uTWVzc2FnZV0pO1xuXG4gIC8vIOuhnOuUqSDsi5wg7Iqk7YGs66Gk67CUIOygnOydvCDslYTrnpjroZxcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY2hhdERhdGE/Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc29sZS5sb2coJ3RvQm90dG9tV2hlbkxvYWRlZCcsIHNjcm9sbGJhclJlZi5jdXJyZW50KTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnc2Nyb2xsYmFyJywgc2Nyb2xsYmFyUmVmLmN1cnJlbnQpO1xuICAgICAgICBzY3JvbGxiYXJSZWYuY3VycmVudD8uc2Nyb2xsVG9Cb3R0b20oKTtcbiAgICAgIH0sIDUwMCk7XG4gICAgfVxuICB9LCBbY2hhdERhdGFdKTtcblxuICBjb25zdCBvbkNsaWNrSW52aXRlQ2hhbm5lbCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRTaG93SW52aXRlQ2hhbm5lbE1vZGFsKHRydWUpO1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgb25DbG9zZU1vZGFsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFNob3dJbnZpdGVDaGFubmVsTW9kYWwoZmFsc2UpO1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgb25DaGFuZ2VGaWxlID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGlmIChlLnRhcmdldC5maWxlcykge1xuICAgICAgLy8gVXNlIERhdGFUcmFuc2Zlckl0ZW1MaXN0IGludGVyZmFjZSB0byBhY2Nlc3MgdGhlIGZpbGUocylcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZS50YXJnZXQuZmlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzW2ldLmdldEFzRmlsZSgpO1xuICAgICAgICBjb25zb2xlLmxvZygnLi4uIGZpbGVbJyArIGkgKyAnXS5uYW1lID0gJyArIGZpbGUubmFtZSk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLCBmaWxlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgYXhpb3MucG9zdChgL2FwaS93b3Jrc3BhY2VzLyR7d29ya3NwYWNlfS9jaGFubmVscy8ke2NoYW5uZWx9L2ltYWdlc2AsIGZvcm1EYXRhKS50aGVuKCgpID0+IHt9KTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7d29ya3NwYWNlfS0ke2NoYW5uZWx9YCwgbmV3IERhdGUoKS5nZXRUaW1lKCkudG9TdHJpbmcoKSk7XG4gIH0sIFt3b3Jrc3BhY2UsIGNoYW5uZWxdKTtcblxuICBjb25zdCBvbkRyb3AgPSB1c2VDYWxsYmFjayhcbiAgICAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgaWYgKGUuZGF0YVRyYW5zZmVyLml0ZW1zKSB7XG4gICAgICAgIC8vIFVzZSBEYXRhVHJhbnNmZXJJdGVtTGlzdCBpbnRlcmZhY2UgdG8gYWNjZXNzIHRoZSBmaWxlKHMpXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZS5kYXRhVHJhbnNmZXIuaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAvLyBJZiBkcm9wcGVkIGl0ZW1zIGFyZW4ndCBmaWxlcywgcmVqZWN0IHRoZW1cbiAgICAgICAgICBjb25zb2xlLmxvZyhlLmRhdGFUcmFuc2Zlci5pdGVtc1tpXSk7XG4gICAgICAgICAgaWYgKGUuZGF0YVRyYW5zZmVyLml0ZW1zW2ldLmtpbmQgPT09ICdmaWxlJykge1xuICAgICAgICAgICAgY29uc3QgZmlsZSA9IGUuZGF0YVRyYW5zZmVyLml0ZW1zW2ldLmdldEFzRmlsZSgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSwgJy4uLi4gZmlsZVsnICsgaSArICddLm5hbWUgPSAnICsgZmlsZS5uYW1lKTtcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLCBmaWxlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFVzZSBEYXRhVHJhbnNmZXIgaW50ZXJmYWNlIHRvIGFjY2VzcyB0aGUgZmlsZShzKVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGUuZGF0YVRyYW5zZmVyLmZpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZSwgJy4uLiBmaWxlWycgKyBpICsgJ10ubmFtZSA9ICcgKyBlLmRhdGFUcmFuc2Zlci5maWxlc1tpXS5uYW1lKTtcbiAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ltYWdlJywgZS5kYXRhVHJhbnNmZXIuZmlsZXNbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBheGlvcy5wb3N0KGAvYXBpL3dvcmtzcGFjZXMvJHt3b3Jrc3BhY2V9L2NoYW5uZWxzLyR7Y2hhbm5lbH0vaW1hZ2VzYCwgZm9ybURhdGEpLnRoZW4oKCkgPT4ge1xuICAgICAgICBzZXREcmFnT3ZlcihmYWxzZSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke3dvcmtzcGFjZX0tJHtjaGFubmVsfWAsIG5ldyBEYXRlKCkuZ2V0VGltZSgpLnRvU3RyaW5nKCkpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBbd29ya3NwYWNlLCBjaGFubmVsXSxcbiAgKTtcblxuICBjb25zdCBvbkRyYWdPdmVyID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2coZSk7XG4gICAgc2V0RHJhZ092ZXIodHJ1ZSk7XG4gIH0sIFtdKTtcblxuICAvLyBpZiAoY2hhbm5lbHNEYXRhICYmICFjaGFubmVsRGF0YSkge1xuICAvLyAgIHJldHVybiA8UmVkaXJlY3QgdG89e2Avd29ya3NwYWNlLyR7d29ya3NwYWNlfS9jaGFubmVsL+ydvOuwmGB9IC8+O1xuICAvLyB9XG5cbiAgaWYgKCFteURhdGEgfHwgIW15RGF0YSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgY2hhdFNlY3Rpb25zID0gbWFrZVNlY3Rpb24oY2hhdERhdGEgPyBjaGF0RGF0YS5mbGF0KCkucmV2ZXJzZSgpIDogW10pO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBvbkRyb3A9e29uRHJvcH0gb25EcmFnT3Zlcj17b25EcmFnT3Zlcn0+XG4gICAgICA8SGVhZGVyPlxuICAgICAgICA8c3Bhbj4je2NoYW5uZWx9PC9zcGFuPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleDogMSwganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxuICAgICAgICAgIDxzcGFuPntjaGFubmVsTWVtYmVyc0RhdGE/Lmxlbmd0aH08L3NwYW4+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17b25DbGlja0ludml0ZUNoYW5uZWx9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjLWJ1dHRvbi11bnN0eWxlZCBwLWlhX192aWV3X2hlYWRlcl9fYnV0dG9uXCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJBZGQgcGVvcGxlIHRvICNyZWFjdC1uYXRpdmVcIlxuICAgICAgICAgICAgZGF0YS1zaz1cInRvb2x0aXBfcGFyZW50XCJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImMtaWNvbiBwLWlhX192aWV3X2hlYWRlcl9fYnV0dG9uX2ljb24gYy1pY29uLS1hZGQtdXNlclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9IZWFkZXI+XG4gICAgICA8Q2hhdExpc3QgY2hhdFNlY3Rpb25zPXtjaGF0U2VjdGlvbnN9IHJlZj17c2Nyb2xsYmFyUmVmfSBzZXRTaXplPXtzZXRTaXplfSBpc1JlYWNoaW5nRW5kPXtpc1JlYWNoaW5nRW5kfSAvPlxuICAgICAgPENoYXRCb3ggY2hhdD17Y2hhdH0gb25DaGFuZ2VDaGF0PXtvbkNoYW5nZUNoYXR9IG9uU3VibWl0Rm9ybT17b25TdWJtaXRGb3JtfSAvPlxuICAgICAgPEludml0ZUNoYW5uZWxNb2RhbFxuICAgICAgICBzaG93PXtzaG93SW52aXRlQ2hhbm5lbE1vZGFsfVxuICAgICAgICBvbkNsb3NlTW9kYWw9e29uQ2xvc2VNb2RhbH1cbiAgICAgICAgc2V0U2hvd0ludml0ZUNoYW5uZWxNb2RhbD17c2V0U2hvd0ludml0ZUNoYW5uZWxNb2RhbH1cbiAgICAgIC8+XG4gICAgICB7ZHJhZ092ZXIgJiYgPERyYWdPdmVyPuyXheuhnOuTnCE8L0RyYWdPdmVyPn1cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoYW5uZWw7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDM4cHgpO1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuYDtcblxuZXhwb3J0IGNvbnN0IEhlYWRlciA9IHN0eWxlZC5oZWFkZXJgXG4gIGhlaWdodDogNjRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIC0tc2FmLTA6IHJnYmEodmFyKC0tc2tfZm9yZWdyb3VuZF9sb3csIDI5LCAyOCwgMjkpLCAwLjEzKTtcbiAgYm94LXNoYWRvdzogMCAxcHggMCB2YXIoLS1zYWYtMCk7XG4gIHBhZGRpbmc6IDIwcHggMTZweCAyMHB4IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBcbiAgJiAuaGVhZGVyLXJpZ2h0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXg6IDE7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuZXhwb3J0IGNvbnN0IERyYWdPdmVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDY0cHg7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDY0cHgpO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgb3BhY2l0eTogMC43O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiA0MHB4O1xuYDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJDb250YWluZXIiLCJIZWFkZXIiLCJ1c2VQYXJhbXMiLCJ1c2VTV1IiLCJ1c2VTV1JJbmZpbml0ZSIsImZldGNoZXIiLCJDaGF0Qm94IiwiQ2hhdExpc3QiLCJ1c2VJbnB1dCIsImF4aW9zIiwibWFrZVNlY3Rpb24iLCJ1c2VTb2NrZXQiLCJJbnZpdGVDaGFubmVsTW9kYWwiLCJEcmFnT3ZlciIsIkNoYW5uZWwiLCJ3b3Jrc3BhY2UiLCJjaGFubmVsIiwibXlEYXRhIiwiZGF0YSIsImNoYXQiLCJvbkNoYW5nZUNoYXQiLCJzZXRDaGF0IiwiY2hhbm5lbERhdGEiLCJpbmRleCIsImNoYXREYXRhIiwibXV0YXRlQ2hhdCIsIm11dGF0ZSIsInJldmFsaWRhdGUiLCJzZXRTaXplIiwiY2hhbm5lbE1lbWJlcnNEYXRhIiwic29ja2V0IiwiaXNFbXB0eSIsImxlbmd0aCIsImlzUmVhY2hpbmdFbmQiLCJzY3JvbGxiYXJSZWYiLCJzaG93SW52aXRlQ2hhbm5lbE1vZGFsIiwic2V0U2hvd0ludml0ZUNoYW5uZWxNb2RhbCIsImRyYWdPdmVyIiwic2V0RHJhZ092ZXIiLCJvblN1Ym1pdEZvcm0iLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwidHJpbSIsInNhdmVkQ2hhdCIsInByZXZDaGF0RGF0YSIsInVuc2hpZnQiLCJpZCIsImNvbnRlbnQiLCJVc2VySWQiLCJVc2VyIiwiQ2hhbm5lbElkIiwiY3JlYXRlZEF0IiwiRGF0ZSIsInRoZW4iLCJjdXJyZW50Iiwic2Nyb2xsVG9Cb3R0b20iLCJwb3N0IiwiY2F0Y2giLCJlcnJvciIsIm9uTWVzc2FnZSIsIm5hbWUiLCJzdGFydHNXaXRoIiwiZ2V0U2Nyb2xsSGVpZ2h0IiwiZ2V0Q2xpZW50SGVpZ2h0IiwiZ2V0U2Nyb2xsVG9wIiwiZ2V0VmFsdWVzIiwic2V0VGltZW91dCIsIm9uIiwib2ZmIiwib25DbGlja0ludml0ZUNoYW5uZWwiLCJvbkNsb3NlTW9kYWwiLCJvbkNoYW5nZUZpbGUiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwidGFyZ2V0IiwiZmlsZXMiLCJpIiwiZmlsZSIsImdldEFzRmlsZSIsImFwcGVuZCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJnZXRUaW1lIiwidG9TdHJpbmciLCJvbkRyb3AiLCJkYXRhVHJhbnNmZXIiLCJpdGVtcyIsImtpbmQiLCJvbkRyYWdPdmVyIiwiY2hhdFNlY3Rpb25zIiwiZmxhdCIsInJldmVyc2UiLCJkaXNwbGF5IiwiZmxleCIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyJdLCJzb3VyY2VSb290IjoiIn0=