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
console.log(scroll);
window.addEventListener("load", () => {
  loader.hideLoader();
  scroll.init();
  scroll.action();
  raf.render();
});
const header = document.querySelector("#header");
window.addEventListener("scroll", e => {
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
/******/ 	__webpack_require__.h = () => ("de72e350799f406fb302")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmY4YmQ1ZjFkODU0YTk4ODIzNzY2LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFDLGlFQUFBLENBQThCLE1BQTlCLEVBQXNDLE9BQXRDLEVBQStDLFVBQS9DO0FBRU8sTUFBTVMsVUFBVSxHQUFHLElBQUlSLDJEQUFKLEVBQW5CO0FBQ0EsTUFBTVMsTUFBTSxHQUFHLElBQUlSLHVEQUFKLEVBQWY7QUFDQSxNQUFNUyxVQUFVLEdBQUcsSUFBSVAsMkRBQUosRUFBbkI7QUFDQSxNQUFNUSxTQUFTLEdBQUcsSUFBSVQsMERBQUosRUFBbEI7QUFDUCxNQUFNVSxHQUFHLEdBQUcsSUFBSVIsb0RBQUosRUFBWjtBQUNPLE1BQU1TLFVBQVUsR0FBRyxJQUFJUiwyREFBSixFQUFuQjtBQUNQLE1BQU1TLE1BQU0sR0FBRyxJQUFJUix1REFBSixFQUFmO0FBRUFTLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUCxNQUFaO0FBRUFRLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsTUFBeEIsRUFBZ0MsTUFBTTtFQUNwQ0osTUFBTSxDQUFDSyxVQUFQO0VBQ0FWLE1BQU0sQ0FBQ1csSUFBUDtFQUNBWCxNQUFNLENBQUNZLE1BQVA7RUFDQVQsR0FBRyxDQUFDVSxNQUFKO0FBQ0QsQ0FMRDtBQU9BLE1BQU1DLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFNBQXZCLENBQWY7QUFFQVIsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixRQUF4QixFQUFtQ1EsQ0FBRCxJQUFPO0VBQ3ZDLElBQUlULE1BQU0sQ0FBQ1UsT0FBUCxJQUFrQixHQUF0QixFQUEyQjtJQUN6QkosTUFBTSxDQUFDSyxTQUFQLENBQWlCQyxHQUFqQixDQUFxQixRQUFyQjtFQUNELENBRkQsTUFFTztJQUNMTixNQUFNLENBQUNLLFNBQVAsQ0FBaUJFLE1BQWpCLENBQXdCLFFBQXhCO0VBQ0Q7QUFDRixDQU5EOzs7Ozs7OztVQy9CQSIsInNvdXJjZXMiOlsid2VicGFjazovL3ppbmViZGphcmRpLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3ppbmViZGphcmRpL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR0xPQkFMUyBmcm9tIFwiLi9nbG9iYWxzXCI7XG5pbXBvcnQgKiBhcyByZXNwb25zaXZlIGZyb20gXCIuL3V0aWxzL3Jlc3BvbnNpdmVcIjtcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuL2NsYXNzZXMvTmF2aWdhdGlvblwiO1xuaW1wb3J0IFNjcm9sbCBmcm9tIFwiLi9jbGFzc2VzL1Njcm9sbFwiO1xuaW1wb3J0IEFuaW1hdGlvbiBmcm9tIFwiLi9jbGFzc2VzL0FuaW1hdGlvblwiO1xuaW1wb3J0IFRyYW5zaXRpb24gZnJvbSBcIi4vY2xhc3Nlcy9UcmFuc2l0aW9uXCI7XG5pbXBvcnQgUkFGIGZyb20gXCIuL2NsYXNzZXMvUkFGXCI7XG5pbXBvcnQgVmlkZW9ibG9jayBmcm9tIFwiLi9jbGFzc2VzL1ZpZGVvYmxvY2tcIjtcbmltcG9ydCBMb2FkZXIgZnJvbSBcIi4vY2xhc3Nlcy9Mb2FkZXJcIjtcblxucmVzcG9uc2l2ZS5jc3NTZXRUb3VjaERldmljZXMoXCJodG1sXCIsIFwidG91Y2hcIiwgXCJub190b3VjaFwiKTtcblxuZXhwb3J0IGNvbnN0IG5hdmlnYXRpb24gPSBuZXcgTmF2aWdhdGlvbigpO1xuZXhwb3J0IGNvbnN0IHNjcm9sbCA9IG5ldyBTY3JvbGwoKTtcbmV4cG9ydCBjb25zdCB0cmFuc2l0aW9uID0gbmV3IFRyYW5zaXRpb24oKTtcbmV4cG9ydCBjb25zdCBhbmltYXRpb24gPSBuZXcgQW5pbWF0aW9uKCk7XG5jb25zdCByYWYgPSBuZXcgUkFGKCk7XG5leHBvcnQgY29uc3QgdmlkZW9ibG9jayA9IG5ldyBWaWRlb2Jsb2NrKCk7XG5jb25zdCBsb2FkZXIgPSBuZXcgTG9hZGVyKCk7XG5cbmNvbnNvbGUubG9nKHNjcm9sbCk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XG4gIGxvYWRlci5oaWRlTG9hZGVyKCk7XG4gIHNjcm9sbC5pbml0KCk7XG4gIHNjcm9sbC5hY3Rpb24oKTtcbiAgcmFmLnJlbmRlcigpO1xufSk7XG5cbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGVhZGVyXCIpO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoZSkgPT4ge1xuICBpZiAod2luZG93LnNjcm9sbFkgPj0gMjAwKSB7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJzdGlja3lcIik7XG4gIH0gZWxzZSB7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJzdGlja3lcIik7XG4gIH1cbn0pO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZGU3MmUzNTA3OTlmNDA2ZmIzMDJcIikiXSwibmFtZXMiOlsiR0xPQkFMUyIsInJlc3BvbnNpdmUiLCJOYXZpZ2F0aW9uIiwiU2Nyb2xsIiwiQW5pbWF0aW9uIiwiVHJhbnNpdGlvbiIsIlJBRiIsIlZpZGVvYmxvY2siLCJMb2FkZXIiLCJjc3NTZXRUb3VjaERldmljZXMiLCJuYXZpZ2F0aW9uIiwic2Nyb2xsIiwidHJhbnNpdGlvbiIsImFuaW1hdGlvbiIsInJhZiIsInZpZGVvYmxvY2siLCJsb2FkZXIiLCJjb25zb2xlIiwibG9nIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhpZGVMb2FkZXIiLCJpbml0IiwiYWN0aW9uIiwicmVuZGVyIiwiaGVhZGVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZSIsInNjcm9sbFkiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiXSwic291cmNlUm9vdCI6IiJ9