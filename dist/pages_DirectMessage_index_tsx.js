"use strict";
(self["webpackChunkslack_clone"] = self["webpackChunkslack_clone"] || []).push([["pages_DirectMessage_index_tsx"],{

/***/ "./pages/DirectMessage/index.tsx":
/*!***************************************!*\
  !*** ./pages/DirectMessage/index.tsx ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _pages_DirectMessage_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pages/DirectMessage/styles */ "./pages/DirectMessage/styles.tsx");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _utils_fetcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @utils/fetcher */ "./utils/fetcher.ts");
/* harmony import */ var gravatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gravatar */ "./node_modules/gravatar/index.js");
/* harmony import */ var gravatar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(gravatar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ChatBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/ChatBox */ "./components/ChatBox/index.tsx");
/* harmony import */ var _components_ChatList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/ChatList */ "./components/ChatList/index.tsx");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @hooks/useInput */ "./hooks/useInput.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_makeSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @utils/makeSection */ "./utils/makeSection.ts");
/* harmony import */ var _hooks_useSocket__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @hooks/useSocket */ "./hooks/useSocket.ts");
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














var DirectMessage = function DirectMessage() {
  _s2();

  var _chatData$, _chatData;

  var _useParams = (0,react_router__WEBPACK_IMPORTED_MODULE_11__.useParams)(),
      workspace = _useParams.workspace,
      id = _useParams.id;

  var _useSWR = (0,swr__WEBPACK_IMPORTED_MODULE_2__["default"])("/api/workspaces/".concat(workspace, "/users/").concat(id), _utils_fetcher__WEBPACK_IMPORTED_MODULE_3__["default"]),
      userData = _useSWR.data;

  var _useSWR2 = (0,swr__WEBPACK_IMPORTED_MODULE_2__["default"])('/api/users', _utils_fetcher__WEBPACK_IMPORTED_MODULE_3__["default"]),
      myData = _useSWR2.data;

  var scrollbarRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  var _useInput = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"])(''),
      _useInput2 = _slicedToArray(_useInput, 3),
      chat = _useInput2[0],
      onChangeChat = _useInput2[1],
      setChat = _useInput2[2];

  var _useSWRInfinite = (0,swr__WEBPACK_IMPORTED_MODULE_2__.useSWRInfinite)(function (index) {
    return "/api/workspaces/".concat(workspace, "/dms/").concat(id, "/chats?perPage=20&page=").concat(index + 1);
  }, _utils_fetcher__WEBPACK_IMPORTED_MODULE_3__["default"]),
      chatData = _useSWRInfinite.data,
      mutateChat = _useSWRInfinite.mutate,
      revalidate = _useSWRInfinite.revalidate,
      setSize = _useSWRInfinite.setSize;

  var isEmpty = (chatData === null || chatData === void 0 ? void 0 : (_chatData$ = chatData[0]) === null || _chatData$ === void 0 ? void 0 : _chatData$.length) === 0;
  var isReachingEnd = isEmpty || chatData && ((_chatData = chatData[chatData.length - 1]) === null || _chatData === void 0 ? void 0 : _chatData.length) < 20 || false;

  var _useSocket = (0,_hooks_useSocket__WEBPACK_IMPORTED_MODULE_10__["default"])(workspace),
      _useSocket2 = _slicedToArray(_useSocket, 1),
      socket = _useSocket2[0];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      dragOver = _useState2[0],
      setDragOver = _useState2[1];

  var onSubmitForm = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (e) {
    e.preventDefault();

    if (chat !== null && chat !== void 0 && chat.trim() && chatData) {
      var savedChat = chat;
      mutateChat(function (prevChatData) {
        var _chatData$0$;

        prevChatData === null || prevChatData === void 0 ? void 0 : prevChatData[0].unshift({
          id: (((_chatData$0$ = chatData[0][0]) === null || _chatData$0$ === void 0 ? void 0 : _chatData$0$.id) || 0) + 1,
          content: savedChat,
          SenderId: myData.id,
          Sender: myData,
          ReceiverId: userData.id,
          Receiver: userData,
          createdAt: new Date()
        });
        return prevChatData;
      }, false).then(function () {
        var _scrollbarRef$current;

        setChat('');
        (_scrollbarRef$current = scrollbarRef.current) === null || _scrollbarRef$current === void 0 ? void 0 : _scrollbarRef$current.scrollToBottom();
      });
      axios__WEBPACK_IMPORTED_MODULE_8___default().post("/api/workspaces/".concat(workspace, "/dms/").concat(id, "/chats"), {
        content: chat
      }).then(function () {
        revalidate();
      }).catch(console.error);
    }
  }, [chat, chatData, myData, userData, workspace, id]);
  var onMessage = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (data) {
    //id : other party's id
    if (data.SenderId === Number(id) && myData.id !== Number(id)) {
      mutateChat(function (chatData) {
        chatData === null || chatData === void 0 ? void 0 : chatData[0].unshift(data);
        return chatData;
      }, false).then(function () {
        if (scrollbarRef.current) {
          if (scrollbarRef.current.getScrollHeight() < scrollbarRef.current.getClientHeight() + scrollbarRef.current.getScrollTop() + 150) {
            console.log('scrollToBottom!', scrollbarRef.current.getValues());
            setTimeout(function () {
              var _scrollbarRef$current2;

              (_scrollbarRef$current2 = scrollbarRef.current) === null || _scrollbarRef$current2 === void 0 ? void 0 : _scrollbarRef$current2.scrollToBottom();
            }, 50);
          }
        }
      });
    }
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    socket === null || socket === void 0 ? void 0 : socket.on('dm', onMessage);
    return function () {
      socket === null || socket === void 0 ? void 0 : socket.off('dm', onMessage);
    };
  }, [socket, onMessage]); //scroll down when loading

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if ((chatData === null || chatData === void 0 ? void 0 : chatData.length) === 1) {
      var _scrollbarRef$current3;

      (_scrollbarRef$current3 = scrollbarRef.current) === null || _scrollbarRef$current3 === void 0 ? void 0 : _scrollbarRef$current3.scrollToBottom();
    }
  }, [chatData]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    localStorage.setItem("".concat(workspace, "-").concat(id), new Date().getTime().toString());
  }, [workspace, id]);
  var onDrop = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (e) {
    e.preventDefault();
    console.log(e);
    var formData = new FormData();

    if (e.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      for (var i = 0; i < e.dataTransfer.items.length; i++) {
        // If dropped items aren't files, reject them
        if (e.dataTransfer.items[i].kind === 'file') {
          var file = e.dataTransfer.items[i].getAsFile();
          console.log('... file[' + i + '].name = ' + file.name);
          formData.append('image', file);
        }
      }
    } else {
      // Use DataTransfer interface to access the file(s)
      for (var _i2 = 0; _i2 < e.dataTransfer.files.length; _i2++) {
        console.log('... file[' + _i2 + '].name = ' + e.dataTransfer.files[_i2].name);
        formData.append('image', e.dataTransfer.files[_i2]);
      }
    }

    axios__WEBPACK_IMPORTED_MODULE_8___default().post("/api/workspaces/".concat(workspace, "/dms/").concat(id, "/images"), formData).then(function () {
      setDragOver(false);
      localStorage.setItem("".concat(workspace, "-").concat(id), new Date().getTime().toString());
      mutateChat();
    });
  }, [workspace, id, mutateChat]);
  var onDragOver = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (e) {
    e.preventDefault();
    console.log(e);
    setDragOver(true);
  }, []);

  if (!userData || !myData) {
    return null;
  }

  var chatSections = (0,_utils_makeSection__WEBPACK_IMPORTED_MODULE_9__["default"])(chatData ? chatData.flat().reverse() : []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_DirectMessage_styles__WEBPACK_IMPORTED_MODULE_1__.Container, {
    onDrop: onDrop,
    onDragOver: onDragOver
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_DirectMessage_styles__WEBPACK_IMPORTED_MODULE_1__.Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: gravatar__WEBPACK_IMPORTED_MODULE_4___default().url(userData.email, {
      s: '24px',
      d: 'retro'
    }),
    alt: userData.nickname
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, userData.nickname)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ChatList__WEBPACK_IMPORTED_MODULE_6__["default"], {
    chatSections: chatSections,
    ref: scrollbarRef,
    setSize: setSize,
    isReachingEnd: isReachingEnd
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ChatBox__WEBPACK_IMPORTED_MODULE_5__["default"], {
    chat: chat,
    onChangeChat: onChangeChat,
    onSubmitForm: onSubmitForm
  }), dragOver && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_DirectMessage_styles__WEBPACK_IMPORTED_MODULE_1__.DragOver, null, "\uC5C5\uB85C\uB4DC!"));
};

_s2(DirectMessage, "Fy82lY+xvmOihC7+BhOMCkBrIvw=", false, function () {
  return [react_router__WEBPACK_IMPORTED_MODULE_11__.useParams, swr__WEBPACK_IMPORTED_MODULE_2__["default"], swr__WEBPACK_IMPORTED_MODULE_2__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"], swr__WEBPACK_IMPORTED_MODULE_2__.useSWRInfinite, _hooks_useSocket__WEBPACK_IMPORTED_MODULE_10__["default"]];
});

_c = DirectMessage;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DirectMessage);

var _c;

__webpack_require__.$Refresh$.register(_c, "DirectMessage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NUUsbURBQUEsQ0FBYVUsUUFBUSxDQUFDdUUsS0FBdEIsRUFBNkI7QUFBRUMsT0FBQyxFQUFFLE1BQUw7QUFBYUMsT0FBQyxFQUFFO0FBQWhCLEtBQTdCLENBQVY7QUFBbUUsT0FBRyxFQUFFekUsUUFBUSxDQUFDMEU7QUFBakYsSUFERixlQUVFLCtEQUFPMUUsUUFBUSxDQUFDMEUsUUFBaEIsQ0FGRixDQURGLGVBS0UsaURBQUMsNERBQUQ7QUFBVSxnQkFBWSxFQUFFUCxZQUF4QjtBQUFzQyxPQUFHLEVBQUVoRSxZQUEzQztBQUF5RCxXQUFPLEVBQUVTLE9BQWxFO0FBQTJFLGlCQUFhLEVBQUVHO0FBQTFGLElBTEYsZUFNRSxpREFBQywyREFBRDtBQUFTLFFBQUksRUFBRVgsSUFBZjtBQUFxQixnQkFBWSxFQUFFQyxZQUFuQztBQUFpRCxnQkFBWSxFQUFFYztBQUEvRCxJQU5GLEVBT0dGLFFBQVEsaUJBQUksaURBQUMsaUVBQUQsOEJBUGYsQ0FERjtBQVdELENBbEpEOztJQUFNcEI7VUFDc0JYLHNEQUNDQyw2Q0FDRkEsNkNBRWFNLHlEQU1sQ0wsaURBTWFROzs7S0FqQmJDO0FBb0pOLGlFQUFlQSxhQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2xhY2stY2xvbmUvLi9wYWdlcy9EaXJlY3RNZXNzYWdlL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbnRhaW5lciwgRHJhZ092ZXIsIEhlYWRlciB9IGZyb20gJ0BwYWdlcy9EaXJlY3RNZXNzYWdlL3N0eWxlcyc7XG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHVzZVNXUiwgeyB1c2VTV1JJbmZpbml0ZSB9IGZyb20gJ3N3cic7XG5pbXBvcnQgZmV0Y2hlciBmcm9tICdAdXRpbHMvZmV0Y2hlcic7XG5pbXBvcnQgZ3JhdmF0YXIgZnJvbSAnZ3JhdmF0YXInO1xuaW1wb3J0IENoYXRCb3ggZnJvbSAnQGNvbXBvbmVudHMvQ2hhdEJveCc7XG5pbXBvcnQgQ2hhdExpc3QgZnJvbSAnQGNvbXBvbmVudHMvQ2hhdExpc3QnO1xuaW1wb3J0IHVzZUlucHV0IGZyb20gJ0Bob29rcy91c2VJbnB1dCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgSURNIH0gZnJvbSAnQHR5cGluZ3MvZGInO1xuaW1wb3J0IG1ha2VTZWN0aW9uIGZyb20gJ0B1dGlscy9tYWtlU2VjdGlvbic7XG5pbXBvcnQgU2Nyb2xsYmFycyBmcm9tICdyZWFjdC1jdXN0b20tc2Nyb2xsYmFycyc7XG5pbXBvcnQgdXNlU29ja2V0IGZyb20gJ0Bob29rcy91c2VTb2NrZXQnO1xuXG5jb25zdCBEaXJlY3RNZXNzYWdlID0gKCkgPT4ge1xuICBjb25zdCB7IHdvcmtzcGFjZSwgaWQgfSA9IHVzZVBhcmFtczx7IHdvcmtzcGFjZTogc3RyaW5nOyBpZDogc3RyaW5nIH0+KCk7XG4gIGNvbnN0IHsgZGF0YTogdXNlckRhdGEgfSA9IHVzZVNXUihgL2FwaS93b3Jrc3BhY2VzLyR7d29ya3NwYWNlfS91c2Vycy8ke2lkfWAsIGZldGNoZXIpO1xuICBjb25zdCB7IGRhdGE6IG15RGF0YSB9ID0gdXNlU1dSKCcvYXBpL3VzZXJzJywgZmV0Y2hlcik7XG4gIGNvbnN0IHNjcm9sbGJhclJlZiA9IHVzZVJlZjxTY3JvbGxiYXJzPihudWxsKTtcbiAgY29uc3QgW2NoYXQsIG9uQ2hhbmdlQ2hhdCwgc2V0Q2hhdF0gPSB1c2VJbnB1dCgnJyk7XG4gIGNvbnN0IHtcbiAgICBkYXRhOiBjaGF0RGF0YSxcbiAgICBtdXRhdGU6IG11dGF0ZUNoYXQsXG4gICAgcmV2YWxpZGF0ZSxcbiAgICBzZXRTaXplLFxuICB9ID0gdXNlU1dSSW5maW5pdGU8SURNW10+KFxuICAgIChpbmRleCkgPT4gYC9hcGkvd29ya3NwYWNlcy8ke3dvcmtzcGFjZX0vZG1zLyR7aWR9L2NoYXRzP3BlclBhZ2U9MjAmcGFnZT0ke2luZGV4ICsgMX1gLFxuICAgIGZldGNoZXIsXG4gICk7XG4gIGNvbnN0IGlzRW1wdHkgPSBjaGF0RGF0YT8uWzBdPy5sZW5ndGggPT09IDA7XG4gIGNvbnN0IGlzUmVhY2hpbmdFbmQgPSBpc0VtcHR5IHx8IChjaGF0RGF0YSAmJiBjaGF0RGF0YVtjaGF0RGF0YS5sZW5ndGggLSAxXT8ubGVuZ3RoIDwgMjApIHx8IGZhbHNlO1xuICBjb25zdCBbc29ja2V0XSA9IHVzZVNvY2tldCh3b3Jrc3BhY2UpO1xuICBjb25zdCBbZHJhZ092ZXIsIHNldERyYWdPdmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBvblN1Ym1pdEZvcm0gPSB1c2VDYWxsYmFjayhcbiAgICAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKGNoYXQ/LnRyaW0oKSAmJiBjaGF0RGF0YSkge1xuICAgICAgICBjb25zdCBzYXZlZENoYXQgPSBjaGF0O1xuICAgICAgICBtdXRhdGVDaGF0KChwcmV2Q2hhdERhdGEpID0+IHtcbiAgICAgICAgICBwcmV2Q2hhdERhdGE/LlswXS51bnNoaWZ0KHtcbiAgICAgICAgICAgIGlkOiAoY2hhdERhdGFbMF1bMF0/LmlkIHx8IDApICsgMSxcbiAgICAgICAgICAgIGNvbnRlbnQ6IHNhdmVkQ2hhdCxcbiAgICAgICAgICAgIFNlbmRlcklkOiBteURhdGEuaWQsXG4gICAgICAgICAgICBTZW5kZXI6IG15RGF0YSxcbiAgICAgICAgICAgIFJlY2VpdmVySWQ6IHVzZXJEYXRhLmlkLFxuICAgICAgICAgICAgUmVjZWl2ZXI6IHVzZXJEYXRhLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiBwcmV2Q2hhdERhdGE7XG4gICAgICAgIH0sIGZhbHNlKS50aGVuKCgpID0+IHtcbiAgICAgICAgICBzZXRDaGF0KCcnKTtcbiAgICAgICAgICBzY3JvbGxiYXJSZWYuY3VycmVudD8uc2Nyb2xsVG9Cb3R0b20oKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGF4aW9zXG4gICAgICAgICAgLnBvc3QoYC9hcGkvd29ya3NwYWNlcy8ke3dvcmtzcGFjZX0vZG1zLyR7aWR9L2NoYXRzYCwge1xuICAgICAgICAgICAgY29udGVudDogY2hhdCxcbiAgICAgICAgICB9KVxuICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHJldmFsaWRhdGUoKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaChjb25zb2xlLmVycm9yKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFtjaGF0LCBjaGF0RGF0YSwgbXlEYXRhLCB1c2VyRGF0YSwgd29ya3NwYWNlLCBpZF0sXG4gICk7XG5cbiAgY29uc3Qgb25NZXNzYWdlID0gdXNlQ2FsbGJhY2soKGRhdGE6IElETSkgPT4ge1xuICAgIC8vaWQgOiBvdGhlciBwYXJ0eSdzIGlkXG4gICAgaWYgKGRhdGEuU2VuZGVySWQgPT09IE51bWJlcihpZCkgJiYgbXlEYXRhLmlkICE9PSBOdW1iZXIoaWQpKSB7XG4gICAgICBtdXRhdGVDaGF0KChjaGF0RGF0YSkgPT4ge1xuICAgICAgICBjaGF0RGF0YT8uWzBdLnVuc2hpZnQoZGF0YSk7XG4gICAgICAgIHJldHVybiBjaGF0RGF0YTtcbiAgICAgIH0sIGZhbHNlKS50aGVuKCgpID0+IHtcbiAgICAgICAgaWYgKHNjcm9sbGJhclJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgc2Nyb2xsYmFyUmVmLmN1cnJlbnQuZ2V0U2Nyb2xsSGVpZ2h0KCkgPFxuICAgICAgICAgICAgc2Nyb2xsYmFyUmVmLmN1cnJlbnQuZ2V0Q2xpZW50SGVpZ2h0KCkgKyBzY3JvbGxiYXJSZWYuY3VycmVudC5nZXRTY3JvbGxUb3AoKSArIDE1MFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Njcm9sbFRvQm90dG9tIScsIHNjcm9sbGJhclJlZi5jdXJyZW50LmdldFZhbHVlcygpKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBzY3JvbGxiYXJSZWYuY3VycmVudD8uc2Nyb2xsVG9Cb3R0b20oKTtcbiAgICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc29ja2V0Py5vbignZG0nLCBvbk1lc3NhZ2UpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBzb2NrZXQ/Lm9mZignZG0nLCBvbk1lc3NhZ2UpO1xuICAgIH07XG4gIH0sIFtzb2NrZXQsIG9uTWVzc2FnZV0pO1xuXG4gIC8vc2Nyb2xsIGRvd24gd2hlbiBsb2FkaW5nXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGNoYXREYXRhPy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHNjcm9sbGJhclJlZi5jdXJyZW50Py5zY3JvbGxUb0JvdHRvbSgpO1xuICAgIH1cbiAgfSwgW2NoYXREYXRhXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHt3b3Jrc3BhY2V9LSR7aWR9YCwgbmV3IERhdGUoKS5nZXRUaW1lKCkudG9TdHJpbmcoKSk7XG4gIH0sIFt3b3Jrc3BhY2UsIGlkXSk7XG5cbiAgY29uc3Qgb25Ecm9wID0gdXNlQ2FsbGJhY2soXG4gICAgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgIGlmIChlLmRhdGFUcmFuc2Zlci5pdGVtcykge1xuICAgICAgICAvLyBVc2UgRGF0YVRyYW5zZmVySXRlbUxpc3QgaW50ZXJmYWNlIHRvIGFjY2VzcyB0aGUgZmlsZShzKVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGUuZGF0YVRyYW5zZmVyLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgLy8gSWYgZHJvcHBlZCBpdGVtcyBhcmVuJ3QgZmlsZXMsIHJlamVjdCB0aGVtXG4gICAgICAgICAgaWYgKGUuZGF0YVRyYW5zZmVyLml0ZW1zW2ldLmtpbmQgPT09ICdmaWxlJykge1xuICAgICAgICAgICAgY29uc3QgZmlsZSA9IGUuZGF0YVRyYW5zZmVyLml0ZW1zW2ldLmdldEFzRmlsZSgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy4uLiBmaWxlWycgKyBpICsgJ10ubmFtZSA9ICcgKyBmaWxlLm5hbWUpO1xuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdpbWFnZScsIGZpbGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVXNlIERhdGFUcmFuc2ZlciBpbnRlcmZhY2UgdG8gYWNjZXNzIHRoZSBmaWxlKHMpXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZS5kYXRhVHJhbnNmZXIuZmlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnLi4uIGZpbGVbJyArIGkgKyAnXS5uYW1lID0gJyArIGUuZGF0YVRyYW5zZmVyLmZpbGVzW2ldLm5hbWUpO1xuICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLCBlLmRhdGFUcmFuc2Zlci5maWxlc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGF4aW9zLnBvc3QoYC9hcGkvd29ya3NwYWNlcy8ke3dvcmtzcGFjZX0vZG1zLyR7aWR9L2ltYWdlc2AsIGZvcm1EYXRhKS50aGVuKCgpID0+IHtcbiAgICAgICAgc2V0RHJhZ092ZXIoZmFsc2UpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHt3b3Jrc3BhY2V9LSR7aWR9YCwgbmV3IERhdGUoKS5nZXRUaW1lKCkudG9TdHJpbmcoKSk7XG4gICAgICAgIG11dGF0ZUNoYXQoKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgW3dvcmtzcGFjZSwgaWQsIG11dGF0ZUNoYXRdLFxuICApO1xuXG4gIGNvbnN0IG9uRHJhZ092ZXIgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgICBzZXREcmFnT3Zlcih0cnVlKTtcbiAgfSwgW10pO1xuXG4gIGlmICghdXNlckRhdGEgfHwgIW15RGF0YSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGNvbnN0IGNoYXRTZWN0aW9ucyA9IG1ha2VTZWN0aW9uKGNoYXREYXRhID8gY2hhdERhdGEuZmxhdCgpLnJldmVyc2UoKSA6IFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgb25Ecm9wPXtvbkRyb3B9IG9uRHJhZ092ZXI9e29uRHJhZ092ZXJ9PlxuICAgICAgPEhlYWRlcj5cbiAgICAgICAgPGltZyBzcmM9e2dyYXZhdGFyLnVybCh1c2VyRGF0YS5lbWFpbCwgeyBzOiAnMjRweCcsIGQ6ICdyZXRybycgfSl9IGFsdD17dXNlckRhdGEubmlja25hbWV9IC8+XG4gICAgICAgIDxzcGFuPnt1c2VyRGF0YS5uaWNrbmFtZX08L3NwYW4+XG4gICAgICA8L0hlYWRlcj5cbiAgICAgIDxDaGF0TGlzdCBjaGF0U2VjdGlvbnM9e2NoYXRTZWN0aW9uc30gcmVmPXtzY3JvbGxiYXJSZWZ9IHNldFNpemU9e3NldFNpemV9IGlzUmVhY2hpbmdFbmQ9e2lzUmVhY2hpbmdFbmR9IC8+XG4gICAgICA8Q2hhdEJveCBjaGF0PXtjaGF0fSBvbkNoYW5nZUNoYXQ9e29uQ2hhbmdlQ2hhdH0gb25TdWJtaXRGb3JtPXtvblN1Ym1pdEZvcm19IC8+XG4gICAgICB7ZHJhZ092ZXIgJiYgPERyYWdPdmVyPuyXheuhnOuTnCE8L0RyYWdPdmVyPn1cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERpcmVjdE1lc3NhZ2U7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiQ29udGFpbmVyIiwiRHJhZ092ZXIiLCJIZWFkZXIiLCJ1c2VQYXJhbXMiLCJ1c2VTV1IiLCJ1c2VTV1JJbmZpbml0ZSIsImZldGNoZXIiLCJncmF2YXRhciIsIkNoYXRCb3giLCJDaGF0TGlzdCIsInVzZUlucHV0IiwiYXhpb3MiLCJtYWtlU2VjdGlvbiIsInVzZVNvY2tldCIsIkRpcmVjdE1lc3NhZ2UiLCJ3b3Jrc3BhY2UiLCJpZCIsInVzZXJEYXRhIiwiZGF0YSIsIm15RGF0YSIsInNjcm9sbGJhclJlZiIsImNoYXQiLCJvbkNoYW5nZUNoYXQiLCJzZXRDaGF0IiwiaW5kZXgiLCJjaGF0RGF0YSIsIm11dGF0ZUNoYXQiLCJtdXRhdGUiLCJyZXZhbGlkYXRlIiwic2V0U2l6ZSIsImlzRW1wdHkiLCJsZW5ndGgiLCJpc1JlYWNoaW5nRW5kIiwic29ja2V0IiwiZHJhZ092ZXIiLCJzZXREcmFnT3ZlciIsIm9uU3VibWl0Rm9ybSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRyaW0iLCJzYXZlZENoYXQiLCJwcmV2Q2hhdERhdGEiLCJ1bnNoaWZ0IiwiY29udGVudCIsIlNlbmRlcklkIiwiU2VuZGVyIiwiUmVjZWl2ZXJJZCIsIlJlY2VpdmVyIiwiY3JlYXRlZEF0IiwiRGF0ZSIsInRoZW4iLCJjdXJyZW50Iiwic2Nyb2xsVG9Cb3R0b20iLCJwb3N0IiwiY2F0Y2giLCJjb25zb2xlIiwiZXJyb3IiLCJvbk1lc3NhZ2UiLCJOdW1iZXIiLCJnZXRTY3JvbGxIZWlnaHQiLCJnZXRDbGllbnRIZWlnaHQiLCJnZXRTY3JvbGxUb3AiLCJsb2ciLCJnZXRWYWx1ZXMiLCJzZXRUaW1lb3V0Iiwib24iLCJvZmYiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZ2V0VGltZSIsInRvU3RyaW5nIiwib25Ecm9wIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImRhdGFUcmFuc2ZlciIsIml0ZW1zIiwiaSIsImtpbmQiLCJmaWxlIiwiZ2V0QXNGaWxlIiwibmFtZSIsImFwcGVuZCIsImZpbGVzIiwib25EcmFnT3ZlciIsImNoYXRTZWN0aW9ucyIsImZsYXQiLCJyZXZlcnNlIiwidXJsIiwiZW1haWwiLCJzIiwiZCIsIm5pY2tuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==