"use strict";
self["webpackHotUpdatezinebdjardi"]("app",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "animation": () => (/* binding */ animation),
/* harmony export */   "navigation": () => (/* binding */ navigation),
/* harmony export */   "scroll": () => (/* binding */ scroll),
/* harmony export */   "transition": () => (/* binding */ transition),
/* harmony export */   "videoblock": () => (/* binding */ videoblock)
/* harmony export */ });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals */ "./src/globals.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_globals__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_responsive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/responsive */ "./src/utils/responsive.js");
/* harmony import */ var _classes_Navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/Navigation */ "./src/classes/Navigation.js");
/* harmony import */ var _classes_Scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes/Scroll */ "./src/classes/Scroll.js");
/* harmony import */ var _classes_Animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./classes/Animation */ "./src/classes/Animation.js");
/* harmony import */ var _classes_Transition__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./classes/Transition */ "./src/classes/Transition.js");
/* harmony import */ var _classes_RAF__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./classes/RAF */ "./src/classes/RAF.js");
/* harmony import */ var _classes_Videoblock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./classes/Videoblock */ "./src/classes/Videoblock.js");
/* harmony import */ var _classes_Loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./classes/Loader */ "./src/classes/Loader.js");









_utils_responsive__WEBPACK_IMPORTED_MODULE_1__.cssSetTouchDevices("html", "touch", "no_touch");
const navigation = new _classes_Navigation__WEBPACK_IMPORTED_MODULE_2__["default"]();
const scroll = new _classes_Scroll__WEBPACK_IMPORTED_MODULE_3__["default"]();
const transition = new _classes_Transition__WEBPACK_IMPORTED_MODULE_5__["default"]();
const animation = new _classes_Animation__WEBPACK_IMPORTED_MODULE_4__["default"]();
const raf = new _classes_RAF__WEBPACK_IMPORTED_MODULE_6__["default"]();
const videoblock = new _classes_Videoblock__WEBPACK_IMPORTED_MODULE_7__["default"]();
const loader = new _classes_Loader__WEBPACK_IMPORTED_MODULE_8__["default"]();
const header = document.querySelector("#header");
window.addEventListener("load", () => {
  loader.hideLoader();
  scroll.init();
  scroll.action();
  raf.render();
});
window.addEventListener("scroll", () => {
  if (window.scrollY >= 200) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e1c31525d1ae5fbd153d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjljMzRmNTU0M2U0ZDgwNDhkZWIzLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFDLGlFQUFBLENBQThCLE1BQTlCLEVBQXNDLE9BQXRDLEVBQStDLFVBQS9DO0FBRU8sTUFBTVMsVUFBVSxHQUFHLElBQUlSLDJEQUFKLEVBQW5CO0FBQ0EsTUFBTVMsTUFBTSxHQUFHLElBQUlSLHVEQUFKLEVBQWY7QUFDQSxNQUFNUyxVQUFVLEdBQUcsSUFBSVAsMkRBQUosRUFBbkI7QUFDQSxNQUFNUSxTQUFTLEdBQUcsSUFBSVQsMERBQUosRUFBbEI7QUFDUCxNQUFNVSxHQUFHLEdBQUcsSUFBSVIsb0RBQUosRUFBWjtBQUNPLE1BQU1TLFVBQVUsR0FBRyxJQUFJUiwyREFBSixFQUFuQjtBQUNQLE1BQU1TLE1BQU0sR0FBRyxJQUFJUix1REFBSixFQUFmO0FBRUEsTUFBTVMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBZjtBQUVBQyxNQUFNLENBQUNDLGdCQUFQLENBQXdCLE1BQXhCLEVBQWdDLE1BQU07RUFDcENMLE1BQU0sQ0FBQ00sVUFBUDtFQUNBWCxNQUFNLENBQUNZLElBQVA7RUFDQVosTUFBTSxDQUFDYSxNQUFQO0VBQ0FWLEdBQUcsQ0FBQ1csTUFBSjtBQUNELENBTEQ7QUFPQUwsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxNQUFNO0VBQ3RDLElBQUlELE1BQU0sQ0FBQ00sT0FBUCxJQUFrQixHQUF0QixFQUEyQjtJQUN6QlQsTUFBTSxDQUFDVSxTQUFQLENBQWlCQyxHQUFqQixDQUFxQixRQUFyQjtFQUNELENBRkQsTUFFTztJQUNMWCxNQUFNLENBQUNVLFNBQVAsQ0FBaUJFLE1BQWpCLENBQXdCLFFBQXhCO0VBQ0Q7QUFDRixDQU5EOzs7Ozs7OztVQzdCQSIsInNvdXJjZXMiOlsid2VicGFjazovL3ppbmViZGphcmRpLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3ppbmViZGphcmRpL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR0xPQkFMUyBmcm9tIFwiLi9nbG9iYWxzXCI7XG5pbXBvcnQgKiBhcyByZXNwb25zaXZlIGZyb20gXCIuL3V0aWxzL3Jlc3BvbnNpdmVcIjtcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuL2NsYXNzZXMvTmF2aWdhdGlvblwiO1xuaW1wb3J0IFNjcm9sbCBmcm9tIFwiLi9jbGFzc2VzL1Njcm9sbFwiO1xuaW1wb3J0IEFuaW1hdGlvbiBmcm9tIFwiLi9jbGFzc2VzL0FuaW1hdGlvblwiO1xuaW1wb3J0IFRyYW5zaXRpb24gZnJvbSBcIi4vY2xhc3Nlcy9UcmFuc2l0aW9uXCI7XG5pbXBvcnQgUkFGIGZyb20gXCIuL2NsYXNzZXMvUkFGXCI7XG5pbXBvcnQgVmlkZW9ibG9jayBmcm9tIFwiLi9jbGFzc2VzL1ZpZGVvYmxvY2tcIjtcbmltcG9ydCBMb2FkZXIgZnJvbSBcIi4vY2xhc3Nlcy9Mb2FkZXJcIjtcblxucmVzcG9uc2l2ZS5jc3NTZXRUb3VjaERldmljZXMoXCJodG1sXCIsIFwidG91Y2hcIiwgXCJub190b3VjaFwiKTtcblxuZXhwb3J0IGNvbnN0IG5hdmlnYXRpb24gPSBuZXcgTmF2aWdhdGlvbigpO1xuZXhwb3J0IGNvbnN0IHNjcm9sbCA9IG5ldyBTY3JvbGwoKTtcbmV4cG9ydCBjb25zdCB0cmFuc2l0aW9uID0gbmV3IFRyYW5zaXRpb24oKTtcbmV4cG9ydCBjb25zdCBhbmltYXRpb24gPSBuZXcgQW5pbWF0aW9uKCk7XG5jb25zdCByYWYgPSBuZXcgUkFGKCk7XG5leHBvcnQgY29uc3QgdmlkZW9ibG9jayA9IG5ldyBWaWRlb2Jsb2NrKCk7XG5jb25zdCBsb2FkZXIgPSBuZXcgTG9hZGVyKCk7XG5cbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGVhZGVyXCIpO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xuICBsb2FkZXIuaGlkZUxvYWRlcigpO1xuICBzY3JvbGwuaW5pdCgpO1xuICBzY3JvbGwuYWN0aW9uKCk7XG4gIHJhZi5yZW5kZXIoKTtcbn0pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XG4gIGlmICh3aW5kb3cuc2Nyb2xsWSA+PSAyMDApIHtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcInN0aWNreVwiKTtcbiAgfSBlbHNlIHtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZShcInN0aWNreVwiKTtcbiAgfVxufSk7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJlMWMzMTUyNWQxYWU1ZmJkMTUzZFwiKSJdLCJuYW1lcyI6WyJHTE9CQUxTIiwicmVzcG9uc2l2ZSIsIk5hdmlnYXRpb24iLCJTY3JvbGwiLCJBbmltYXRpb24iLCJUcmFuc2l0aW9uIiwiUkFGIiwiVmlkZW9ibG9jayIsIkxvYWRlciIsImNzc1NldFRvdWNoRGV2aWNlcyIsIm5hdmlnYXRpb24iLCJzY3JvbGwiLCJ0cmFuc2l0aW9uIiwiYW5pbWF0aW9uIiwicmFmIiwidmlkZW9ibG9jayIsImxvYWRlciIsImhlYWRlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJoaWRlTG9hZGVyIiwiaW5pdCIsImFjdGlvbiIsInJlbmRlciIsInNjcm9sbFkiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiXSwic291cmNlUm9vdCI6IiJ9