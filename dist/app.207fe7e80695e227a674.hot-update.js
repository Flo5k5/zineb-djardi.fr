"use strict";
self["webpackHotUpdatezinebdjardi"]("app",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scroll": () => (/* binding */ scroll),
/* harmony export */   "videoblock": () => (/* binding */ videoblock)
/* harmony export */ });
/* harmony import */ var _utils_responsive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/responsive */ "./src/utils/responsive.js");
/* harmony import */ var _classes_Scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/Scroll */ "./src/classes/Scroll.js");
// import GLOBALS from './globals';
 // import Navigation from './classes/Navigation';

 // import Animation from './classes/Animation';
// import Transition from './classes/Transition';
// import RAF from './classes/RAF';
// import Videoblock from './classes/Videoblock';
// import Loader from './classes/Loader';
////////////////////////////////////////////////////////////////
//
//  PROJECT
//
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
//
//  BASIC RESPONSIVE
//
////////////////////////////////////////////////////////////////

_utils_responsive__WEBPACK_IMPORTED_MODULE_0__.cssSetTouchDevices("html", "touch", "no_touch"); ////////////////////////////////////////////////////////////////
//
//  NAVIGATION
//
////////////////////////////////////////////////////////////////
// export const navigation = new Navigation();
////////////////////////////////////////////////////////////////
//
//  SCROLL
//
////////////////////////////////////////////////////////////////

const scroll = new _classes_Scroll__WEBPACK_IMPORTED_MODULE_1__["default"](); ////////////////////////////////////////////////////////////////
//
//  TRANSITION
//
////////////////////////////////////////////////////////////////
// export const transition = new Transition();
////////////////////////////////////////////////////////////////
//
//  ANIMATIONS
//
////////////////////////////////////////////////////////////////
// export const animation = new Animation();
////////////////////////////////////////////////////////////////
//
//  RAF
//
////////////////////////////////////////////////////////////////
// const raf = new RAF();
////////////////////////////////////////////////////////////////
//
//  MISC
//
////////////////////////////////////////////////////////////////

const videoblock = new Videoblock(); ////////////////////////////////////////////////////////////////
//
//  LOADER
//
////////////////////////////////////////////////////////////////
// const loader = new Loader();
////////////////////////////////////////////////////////////////
//
//  ON LOAD
//
////////////////////////////////////////////////////////////////

console.log(scroll);
window.addEventListener("load", () => {
  loader.hideLoader(); // scroll.init();
  // // scroll.action();
  // // raf.render();
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
/******/ 	__webpack_require__.h = () => ("24c9d83c52921e9afcca")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjIwN2ZlN2U4MDY5NWUyMjdhNjc0LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0NBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBQSxpRUFBQSxDQUE4QixNQUE5QixFQUFzQyxPQUF0QyxFQUErQyxVQUEvQyxHQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU8sTUFBTUcsTUFBTSxHQUFHLElBQUlGLHVEQUFKLEVBQWYsRUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPLE1BQU1HLFVBQVUsR0FBRyxJQUFJQyxVQUFKLEVBQW5CLEVBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQUMsT0FBTyxDQUFDQyxHQUFSLENBQVlKLE1BQVo7QUFFQUssTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixNQUF4QixFQUFnQyxNQUFNO0VBQ3BDQyxNQUFNLENBQUNDLFVBQVAsR0FEb0MsQ0FFcEM7RUFDQTtFQUNBO0FBQ0QsQ0FMRDtBQU9BLE1BQU1DLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFNBQXZCLENBQWY7QUFFQU4sTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixRQUF4QixFQUFtQ00sQ0FBRCxJQUFPO0VBQ3ZDLElBQUlQLE1BQU0sQ0FBQ1EsT0FBUCxJQUFrQixHQUF0QixFQUEyQjtJQUN6QkosTUFBTSxDQUFDSyxTQUFQLENBQWlCQyxHQUFqQixDQUFxQixRQUFyQjtFQUNELENBRkQsTUFFTztJQUNMTixNQUFNLENBQUNLLFNBQVAsQ0FBaUJFLE1BQWpCLENBQXdCLFFBQXhCO0VBQ0Q7QUFDRixDQU5EOzs7Ozs7OztVQ2pHQSIsInNvdXJjZXMiOlsid2VicGFjazovL3ppbmViZGphcmRpLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3ppbmViZGphcmRpL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgR0xPQkFMUyBmcm9tICcuL2dsb2JhbHMnO1xuaW1wb3J0ICogYXMgcmVzcG9uc2l2ZSBmcm9tIFwiLi91dGlscy9yZXNwb25zaXZlXCI7XG4vLyBpbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuL2NsYXNzZXMvTmF2aWdhdGlvbic7XG5pbXBvcnQgU2Nyb2xsIGZyb20gXCIuL2NsYXNzZXMvU2Nyb2xsXCI7XG4vLyBpbXBvcnQgQW5pbWF0aW9uIGZyb20gJy4vY2xhc3Nlcy9BbmltYXRpb24nO1xuLy8gaW1wb3J0IFRyYW5zaXRpb24gZnJvbSAnLi9jbGFzc2VzL1RyYW5zaXRpb24nO1xuLy8gaW1wb3J0IFJBRiBmcm9tICcuL2NsYXNzZXMvUkFGJztcbi8vIGltcG9ydCBWaWRlb2Jsb2NrIGZyb20gJy4vY2xhc3Nlcy9WaWRlb2Jsb2NrJztcbi8vIGltcG9ydCBMb2FkZXIgZnJvbSAnLi9jbGFzc2VzL0xvYWRlcic7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vXG4vLyAgUFJPSkVDVFxuLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy9cbi8vICBCQVNJQyBSRVNQT05TSVZFXG4vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5yZXNwb25zaXZlLmNzc1NldFRvdWNoRGV2aWNlcyhcImh0bWxcIiwgXCJ0b3VjaFwiLCBcIm5vX3RvdWNoXCIpO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vL1xuLy8gIE5BVklHQVRJT05cbi8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8vIGV4cG9ydCBjb25zdCBuYXZpZ2F0aW9uID0gbmV3IE5hdmlnYXRpb24oKTtcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy9cbi8vICBTQ1JPTExcbi8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmV4cG9ydCBjb25zdCBzY3JvbGwgPSBuZXcgU2Nyb2xsKCk7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vXG4vLyAgVFJBTlNJVElPTlxuLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLy8gZXhwb3J0IGNvbnN0IHRyYW5zaXRpb24gPSBuZXcgVHJhbnNpdGlvbigpO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vL1xuLy8gIEFOSU1BVElPTlNcbi8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8vIGV4cG9ydCBjb25zdCBhbmltYXRpb24gPSBuZXcgQW5pbWF0aW9uKCk7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vXG4vLyAgUkFGXG4vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vLyBjb25zdCByYWYgPSBuZXcgUkFGKCk7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vXG4vLyAgTUlTQ1xuLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuZXhwb3J0IGNvbnN0IHZpZGVvYmxvY2sgPSBuZXcgVmlkZW9ibG9jaygpO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vL1xuLy8gIExPQURFUlxuLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLy8gY29uc3QgbG9hZGVyID0gbmV3IExvYWRlcigpO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vL1xuLy8gIE9OIExPQURcbi8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmNvbnNvbGUubG9nKHNjcm9sbCk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XG4gIGxvYWRlci5oaWRlTG9hZGVyKCk7XG4gIC8vIHNjcm9sbC5pbml0KCk7XG4gIC8vIC8vIHNjcm9sbC5hY3Rpb24oKTtcbiAgLy8gLy8gcmFmLnJlbmRlcigpO1xufSk7XG5cbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGVhZGVyXCIpO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoZSkgPT4ge1xuICBpZiAod2luZG93LnNjcm9sbFkgPj0gMjAwKSB7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJzdGlja3lcIik7XG4gIH0gZWxzZSB7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJzdGlja3lcIik7XG4gIH1cbn0pO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMjRjOWQ4M2M1MjkyMWU5YWZjY2FcIikiXSwibmFtZXMiOlsicmVzcG9uc2l2ZSIsIlNjcm9sbCIsImNzc1NldFRvdWNoRGV2aWNlcyIsInNjcm9sbCIsInZpZGVvYmxvY2siLCJWaWRlb2Jsb2NrIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJsb2FkZXIiLCJoaWRlTG9hZGVyIiwiaGVhZGVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZSIsInNjcm9sbFkiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiXSwic291cmNlUm9vdCI6IiJ9