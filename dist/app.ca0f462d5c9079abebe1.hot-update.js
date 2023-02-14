self["webpackHotUpdatezinebdjardi"]("app",{

/***/ "./src/globals.js":
/*!************************!*\
  !*** ./src/globals.js ***!
  \************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

////////////////////////////////////////////////////////////////
//
//  GLOBALS
//
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
//
//  RESPONSIVE BREAKPOINTS (BASED ON BOOTSTRAP)
//
////////////////////////////////////////////////////////////////
__webpack_require__.g.RSP_XXS = 320;
__webpack_require__.g.RSP_XS = 375;
__webpack_require__.g.RSP_SM = 768;
__webpack_require__.g.RSP_MD = 992;
__webpack_require__.g.RSP_LG = 1200;
__webpack_require__.g.RSP_XL = 1400;
__webpack_require__.g.RSP_XXL = 1600; ////////////////////////////////////////////////////////////////
// SLIDER METHODE
////////////////////////////////////////////////////////////////

const slideContainer = document.querySelector(".slide_container");
const slides = document.querySelectorAll(".slide");
const menuItems = document.querySelectorAll(".menu li");
let currentSlide = 0;
slides.forEach((slide, index) => {
  if (index === currentSlide) {
    slide.style.display = "flex";
  } else {
    slide.style.display = "none";
  }
});
menuItems[currentSlide].classList.add("active");

const prevSlide = () => {
  slides[currentSlide].style.display = "none";
  menuItems[currentSlide].classList.remove("active");
  currentSlide = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
  slides[currentSlide].style.display = "flex";
  menuItems[currentSlide].classList.add("active");
};

const nextSlide = () => {
  slides[currentSlide].style.display = "none";
  menuItems[currentSlide].classList.remove("active");
  currentSlide = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
  slides[currentSlide].style.display = "flex";
  menuItems[currentSlide].classList.add("active");
};

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    slides[currentSlide].style.display = "none";
    menuItems[currentSlide].classList.remove("active");
    currentSlide = index;
    slides[currentSlide].style.display = "flex";
    menuItems[currentSlide].classList.add("active");
  });
}); ////////////////////////////////////////////////////////////////
// SLIDER CAS CLIENT
////////////////////////////////////////////////////////////////

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("01100c40ec8be81838e7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBcUMsTUFBckM7SUFDQU4sU0FBUyxDQUFDQyxZQUFELENBQVQsQ0FBd0JNLFNBQXhCLENBQWtDRyxNQUFsQyxDQUF5QyxRQUF6QztJQUNBVCxZQUFZLEdBQUdHLEtBQWY7SUFDQU4sTUFBTSxDQUFDRyxZQUFELENBQU4sQ0FBcUJJLEtBQXJCLENBQTJCQyxPQUEzQixHQUFxQyxNQUFyQztJQUNBTixTQUFTLENBQUNDLFlBQUQsQ0FBVCxDQUF3Qk0sU0FBeEIsQ0FBa0NDLEdBQWxDLENBQXNDLFFBQXRDO0VBQ0MsQ0FORDtBQU9DLENBUkQsR0FXQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDcEVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vemluZWJkamFyZGkvLi9zcmMvZ2xvYmFscy5qcyIsIndlYnBhY2s6Ly96aW5lYmRqYXJkaS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy9cbi8vICBHTE9CQUxTXG4vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vL1xuLy8gIFJFU1BPTlNJVkUgQlJFQUtQT0lOVFMgKEJBU0VEIE9OIEJPT1RTVFJBUClcbi8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmdsb2JhbC5SU1BfWFhTID0gMzIwO1xuZ2xvYmFsLlJTUF9YUyA9IDM3NTtcbmdsb2JhbC5SU1BfU00gPSA3Njg7XG5nbG9iYWwuUlNQX01EID0gOTkyO1xuZ2xvYmFsLlJTUF9MRyA9IDEyMDA7XG5nbG9iYWwuUlNQX1hMID0gMTQwMDtcbmdsb2JhbC5SU1BfWFhMID0gMTYwMDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBTTElERVIgTUVUSE9ERVxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5jb25zdCBzbGlkZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVfY29udGFpbmVyXCIpO1xuY29uc3Qgc2xpZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zbGlkZVwiKTtcbmNvbnN0IG1lbnVJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWVudSBsaVwiKTtcblxubGV0IGN1cnJlbnRTbGlkZSA9IDA7XG5zbGlkZXMuZm9yRWFjaCgoc2xpZGUsIGluZGV4KSA9PiB7XG5pZiAoaW5kZXggPT09IGN1cnJlbnRTbGlkZSkge1xuc2xpZGUuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xufSBlbHNlIHtcbnNsaWRlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn1cbn0pO1xubWVudUl0ZW1zW2N1cnJlbnRTbGlkZV0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblxuY29uc3QgcHJldlNsaWRlID0gKCkgPT4ge1xuc2xpZGVzW2N1cnJlbnRTbGlkZV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xubWVudUl0ZW1zW2N1cnJlbnRTbGlkZV0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbmN1cnJlbnRTbGlkZSA9IGN1cnJlbnRTbGlkZSA+IDAgPyBjdXJyZW50U2xpZGUgLSAxIDogc2xpZGVzLmxlbmd0aCAtIDE7XG5zbGlkZXNbY3VycmVudFNsaWRlXS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG5tZW51SXRlbXNbY3VycmVudFNsaWRlXS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xufTtcblxuY29uc3QgbmV4dFNsaWRlID0gKCkgPT4ge1xuc2xpZGVzW2N1cnJlbnRTbGlkZV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xubWVudUl0ZW1zW2N1cnJlbnRTbGlkZV0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbmN1cnJlbnRTbGlkZSA9IGN1cnJlbnRTbGlkZSA8IHNsaWRlcy5sZW5ndGggLSAxID8gY3VycmVudFNsaWRlICsgMSA6IDA7XG5zbGlkZXNbY3VycmVudFNsaWRlXS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG5tZW51SXRlbXNbY3VycmVudFNsaWRlXS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xufTtcblxubWVudUl0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG5pdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5zbGlkZXNbY3VycmVudFNsaWRlXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5tZW51SXRlbXNbY3VycmVudFNsaWRlXS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuY3VycmVudFNsaWRlID0gaW5kZXg7XG5zbGlkZXNbY3VycmVudFNsaWRlXS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG5tZW51SXRlbXNbY3VycmVudFNsaWRlXS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xufSk7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBTTElERVIgQ0FTIENMSUVOVFxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiAgXG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjAxMTAwYzQwZWM4YmU4MTgzOGU3XCIpIl0sIm5hbWVzIjpbImdsb2JhbCIsIlJTUF9YWFMiLCJSU1BfWFMiLCJSU1BfU00iLCJSU1BfTUQiLCJSU1BfTEciLCJSU1BfWEwiLCJSU1BfWFhMIiwic2xpZGVDb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzbGlkZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibWVudUl0ZW1zIiwiY3VycmVudFNsaWRlIiwiZm9yRWFjaCIsInNsaWRlIiwiaW5kZXgiLCJzdHlsZSIsImRpc3BsYXkiLCJjbGFzc0xpc3QiLCJhZGQiLCJwcmV2U2xpZGUiLCJyZW1vdmUiLCJsZW5ndGgiLCJuZXh0U2xpZGUiLCJpdGVtIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=