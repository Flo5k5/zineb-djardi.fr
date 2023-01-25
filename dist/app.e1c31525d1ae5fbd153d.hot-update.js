"use strict";
self["webpackHotUpdatezinebdjardi"]("app",{

/***/ "./src/utils/responsive.js":
/*!*********************************!*\
  !*** ./src/utils/responsive.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cssSetTouchDevices": () => (/* binding */ cssSetTouchDevices),
/* harmony export */   "isTouch": () => (/* binding */ isTouch),
/* harmony export */   "rsp": () => (/* binding */ rsp)
/* harmony export */ });
////////////////////////////////////////////////////////////////
//
//  RESPONSIVE
//
////////////////////////////////////////////////////////////////
//  RESPONSIVE BREAKPOINTS CONTROL
function rsp(val_, reverse_) {
  let rv = "";
  if (reverse_) reverse_ == true ? rv = true : rv = false;else rv = false;
  let val = val_;
  let w = window.innerWidth;
  if (w > val && !rv) return true;
  if (w < val && rv) return true;
} //  IS TOUCH

function isTouch() {
  let touch;
  "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? touch = true : touch = false;
  return touch;
} //  SET TOUCH / NO TOUCH CLASSES

function cssSetTouchDevices(tag_, touch_, no_touch_) {
  let touch;
  let tag = document.querySelector(tag_);
  let touch_class = touch_;
  let no_touch_class = no_touch_;
  touch = isTouch();

  if (touch) {
    tag.classList.add(touch_class);
    tag.classList.remove(no_touch_class);
  } else {
    tag.classList.add(no_touch_class);
    tag.classList.remove(touch_class);
  }
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("da4a7c31e0f8f022341d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmUxYzMxNTI1ZDFhZTVmYmQxNTNkLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ08sU0FBU0EsR0FBVCxDQUFhQyxJQUFiLEVBQW1CQyxRQUFuQixFQUE2QjtFQUNsQyxJQUFJQyxFQUFFLEdBQUcsRUFBVDtFQUNBLElBQUlELFFBQUosRUFBY0EsUUFBUSxJQUFJLElBQVosR0FBb0JDLEVBQUUsR0FBRyxJQUF6QixHQUFrQ0EsRUFBRSxHQUFHLEtBQXZDLENBQWQsS0FDS0EsRUFBRSxHQUFHLEtBQUw7RUFDTCxJQUFJQyxHQUFHLEdBQUdILElBQVY7RUFDQSxJQUFJSSxDQUFDLEdBQUdDLE1BQU0sQ0FBQ0MsVUFBZjtFQUNBLElBQUlGLENBQUMsR0FBR0QsR0FBSixJQUFXLENBQUNELEVBQWhCLEVBQW9CLE9BQU8sSUFBUDtFQUNwQixJQUFJRSxDQUFDLEdBQUdELEdBQUosSUFBV0QsRUFBZixFQUFtQixPQUFPLElBQVA7QUFDcEIsRUFFRDs7QUFDTyxTQUFTSyxPQUFULEdBQW1CO0VBQ3hCLElBQUlDLEtBQUo7RUFDQSxrQkFBa0JDLFFBQVEsQ0FBQ0MsZUFBM0IsSUFDQUMsU0FBUyxDQUFDQyxjQUFWLEdBQTJCLENBRDNCLElBRUFELFNBQVMsQ0FBQ0UsZ0JBQVYsR0FBNkIsQ0FGN0IsR0FHS0wsS0FBSyxHQUFHLElBSGIsR0FJS0EsS0FBSyxHQUFHLEtBSmI7RUFLQSxPQUFPQSxLQUFQO0FBQ0QsRUFFRDs7QUFDTyxTQUFTTSxrQkFBVCxDQUE0QkMsSUFBNUIsRUFBa0NDLE1BQWxDLEVBQTBDQyxTQUExQyxFQUFxRDtFQUMxRCxJQUFJVCxLQUFKO0VBQ0EsSUFBSVUsR0FBRyxHQUFHVCxRQUFRLENBQUNVLGFBQVQsQ0FBdUJKLElBQXZCLENBQVY7RUFDQSxJQUFJSyxXQUFXLEdBQUdKLE1BQWxCO0VBQ0EsSUFBSUssY0FBYyxHQUFHSixTQUFyQjtFQUNBVCxLQUFLLEdBQUdELE9BQU8sRUFBZjs7RUFDQSxJQUFJQyxLQUFKLEVBQVc7SUFDVFUsR0FBRyxDQUFDSSxTQUFKLENBQWNDLEdBQWQsQ0FBa0JILFdBQWxCO0lBQ0FGLEdBQUcsQ0FBQ0ksU0FBSixDQUFjRSxNQUFkLENBQXFCSCxjQUFyQjtFQUNELENBSEQsTUFHTztJQUNMSCxHQUFHLENBQUNJLFNBQUosQ0FBY0MsR0FBZCxDQUFrQkYsY0FBbEI7SUFDQUgsR0FBRyxDQUFDSSxTQUFKLENBQWNFLE1BQWQsQ0FBcUJKLFdBQXJCO0VBQ0Q7QUFDRjs7Ozs7Ozs7VUMxQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96aW5lYmRqYXJkaS8uL3NyYy91dGlscy9yZXNwb25zaXZlLmpzIiwid2VicGFjazovL3ppbmViZGphcmRpL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vL1xuLy8gIFJFU1BPTlNJVkVcbi8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8vICBSRVNQT05TSVZFIEJSRUFLUE9JTlRTIENPTlRST0xcbmV4cG9ydCBmdW5jdGlvbiByc3AodmFsXywgcmV2ZXJzZV8pIHtcbiAgbGV0IHJ2ID0gXCJcIjtcbiAgaWYgKHJldmVyc2VfKSByZXZlcnNlXyA9PSB0cnVlID8gKHJ2ID0gdHJ1ZSkgOiAocnYgPSBmYWxzZSk7XG4gIGVsc2UgcnYgPSBmYWxzZTtcbiAgbGV0IHZhbCA9IHZhbF87XG4gIGxldCB3ID0gd2luZG93LmlubmVyV2lkdGg7XG4gIGlmICh3ID4gdmFsICYmICFydikgcmV0dXJuIHRydWU7XG4gIGlmICh3IDwgdmFsICYmIHJ2KSByZXR1cm4gdHJ1ZTtcbn1cblxuLy8gIElTIFRPVUNIXG5leHBvcnQgZnVuY3Rpb24gaXNUb3VjaCgpIHtcbiAgbGV0IHRvdWNoO1xuICBcIm9udG91Y2hzdGFydFwiIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCB8fFxuICBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgPiAwIHx8XG4gIG5hdmlnYXRvci5tc01heFRvdWNoUG9pbnRzID4gMFxuICAgID8gKHRvdWNoID0gdHJ1ZSlcbiAgICA6ICh0b3VjaCA9IGZhbHNlKTtcbiAgcmV0dXJuIHRvdWNoO1xufVxuXG4vLyAgU0VUIFRPVUNIIC8gTk8gVE9VQ0ggQ0xBU1NFU1xuZXhwb3J0IGZ1bmN0aW9uIGNzc1NldFRvdWNoRGV2aWNlcyh0YWdfLCB0b3VjaF8sIG5vX3RvdWNoXykge1xuICBsZXQgdG91Y2g7XG4gIGxldCB0YWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhZ18pO1xuICBsZXQgdG91Y2hfY2xhc3MgPSB0b3VjaF87XG4gIGxldCBub190b3VjaF9jbGFzcyA9IG5vX3RvdWNoXztcbiAgdG91Y2ggPSBpc1RvdWNoKCk7XG4gIGlmICh0b3VjaCkge1xuICAgIHRhZy5jbGFzc0xpc3QuYWRkKHRvdWNoX2NsYXNzKTtcbiAgICB0YWcuY2xhc3NMaXN0LnJlbW92ZShub190b3VjaF9jbGFzcyk7XG4gIH0gZWxzZSB7XG4gICAgdGFnLmNsYXNzTGlzdC5hZGQobm9fdG91Y2hfY2xhc3MpO1xuICAgIHRhZy5jbGFzc0xpc3QucmVtb3ZlKHRvdWNoX2NsYXNzKTtcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZGE0YTdjMzFlMGY4ZjAyMjM0MWRcIikiXSwibmFtZXMiOlsicnNwIiwidmFsXyIsInJldmVyc2VfIiwicnYiLCJ2YWwiLCJ3Iiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlzVG91Y2giLCJ0b3VjaCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwibmF2aWdhdG9yIiwibWF4VG91Y2hQb2ludHMiLCJtc01heFRvdWNoUG9pbnRzIiwiY3NzU2V0VG91Y2hEZXZpY2VzIiwidGFnXyIsInRvdWNoXyIsIm5vX3RvdWNoXyIsInRhZyIsInF1ZXJ5U2VsZWN0b3IiLCJ0b3VjaF9jbGFzcyIsIm5vX3RvdWNoX2NsYXNzIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIl0sInNvdXJjZVJvb3QiOiIifQ==