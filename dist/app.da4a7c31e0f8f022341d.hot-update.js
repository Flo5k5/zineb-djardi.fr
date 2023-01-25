"use strict";
self["webpackHotUpdatezinebdjardi"]("app",{

/***/ "./src/classes/Animation.js":
/*!**********************************!*\
  !*** ./src/classes/Animation.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Animation)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
 ////////////////////////////////////////////////////////////////
//
//  ANIMATION
//
////////////////////////////////////////////////////////////////

class Animation {
  constructor() {} //  BLOCK TEXT


  textIn(target_) {
    let id = target_.el.dataset.id;
    let t = document.querySelector('[data-id="' + id + '"]');
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].fromTo(t, {
      yPercent: 20,
      rotate: 3,
      opacity: 0
    }, {
      duration: 2,
      ease: "power2.out",
      opacity: 1,
      rotate: 0,
      yPercent: 0
    });
  } //  BLOCK IMAGES


  imageIn(target_) {
    let id = target_.el.dataset.id;
    let t = document.querySelector('[data-id="' + id + '"]');
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].fromTo(t, {
      yPercent: 20,
      opacity: 0
    }, {
      duration: 2,
      ease: "power2.out",
      yPercent: 0,
      opacity: 1
    });
  } //  BLOCK VIDEO


  videoIn(target_) {
    let id = target_.el.dataset.id;
    let t = document.querySelector('[data-id="' + id + '"]');
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].fromTo(t, {
      yPercent: 20,
      opacity: 0
    }, {
      duration: 2,
      ease: "power2.out",
      yPercent: 0,
      opacity: 1
    });
  }

}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5a1ab98a35208846a70a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmRhNGE3YzMxZTBmOGYwMjIzNDFkLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Q0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLE1BQU1DLFNBQU4sQ0FBZ0I7RUFDN0JDLFdBQVcsR0FBRyxDQUFFLENBRGEsQ0FHN0I7OztFQUNBQyxNQUFNLENBQUNDLE9BQUQsRUFBVTtJQUNkLElBQUlDLEVBQUUsR0FBR0QsT0FBTyxDQUFDRSxFQUFSLENBQVdDLE9BQVgsQ0FBbUJGLEVBQTVCO0lBQ0EsSUFBSUcsQ0FBQyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZUFBZUwsRUFBZixHQUFvQixJQUEzQyxDQUFSO0lBQ0FMLG1EQUFBLENBQ0VRLENBREYsRUFFRTtNQUNFSSxRQUFRLEVBQUUsRUFEWjtNQUVFQyxNQUFNLEVBQUUsQ0FGVjtNQUdFQyxPQUFPLEVBQUU7SUFIWCxDQUZGLEVBT0U7TUFDRUMsUUFBUSxFQUFFLENBRFo7TUFFRUMsSUFBSSxFQUFFLFlBRlI7TUFHRUYsT0FBTyxFQUFFLENBSFg7TUFJRUQsTUFBTSxFQUFFLENBSlY7TUFLRUQsUUFBUSxFQUFFO0lBTFosQ0FQRjtFQWVELENBdEI0QixDQXdCN0I7OztFQUNBSyxPQUFPLENBQUNiLE9BQUQsRUFBVTtJQUNmLElBQUlDLEVBQUUsR0FBR0QsT0FBTyxDQUFDRSxFQUFSLENBQVdDLE9BQVgsQ0FBbUJGLEVBQTVCO0lBQ0EsSUFBSUcsQ0FBQyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZUFBZUwsRUFBZixHQUFvQixJQUEzQyxDQUFSO0lBRUFMLG1EQUFBLENBQ0VRLENBREYsRUFFRTtNQUNFSSxRQUFRLEVBQUUsRUFEWjtNQUVFRSxPQUFPLEVBQUU7SUFGWCxDQUZGLEVBTUU7TUFDRUMsUUFBUSxFQUFFLENBRFo7TUFFRUMsSUFBSSxFQUFFLFlBRlI7TUFHRUosUUFBUSxFQUFFLENBSFo7TUFJRUUsT0FBTyxFQUFFO0lBSlgsQ0FORjtFQWFELENBMUM0QixDQTRDN0I7OztFQUNBSSxPQUFPLENBQUNkLE9BQUQsRUFBVTtJQUNmLElBQUlDLEVBQUUsR0FBR0QsT0FBTyxDQUFDRSxFQUFSLENBQVdDLE9BQVgsQ0FBbUJGLEVBQTVCO0lBQ0EsSUFBSUcsQ0FBQyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZUFBZUwsRUFBZixHQUFvQixJQUEzQyxDQUFSO0lBRUFMLG1EQUFBLENBQ0VRLENBREYsRUFFRTtNQUNFSSxRQUFRLEVBQUUsRUFEWjtNQUVFRSxPQUFPLEVBQUU7SUFGWCxDQUZGLEVBTUU7TUFDRUMsUUFBUSxFQUFFLENBRFo7TUFFRUMsSUFBSSxFQUFFLFlBRlI7TUFHRUosUUFBUSxFQUFFLENBSFo7TUFJRUUsT0FBTyxFQUFFO0lBSlgsQ0FORjtFQWFEOztBQTlENEI7Ozs7Ozs7O1VDUi9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vemluZWJkamFyZGkvLi9zcmMvY2xhc3Nlcy9BbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vemluZWJkamFyZGkvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnc2FwIGZyb20gXCJnc2FwXCI7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vXG4vLyAgQU5JTUFUSU9OXG4vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbmltYXRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgLy8gIEJMT0NLIFRFWFRcbiAgdGV4dEluKHRhcmdldF8pIHtcbiAgICBsZXQgaWQgPSB0YXJnZXRfLmVsLmRhdGFzZXQuaWQ7XG4gICAgbGV0IHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1pZD1cIicgKyBpZCArICdcIl0nKTtcbiAgICBnc2FwLmZyb21UbyhcbiAgICAgIHQsXG4gICAgICB7XG4gICAgICAgIHlQZXJjZW50OiAyMCxcbiAgICAgICAgcm90YXRlOiAzLFxuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZHVyYXRpb246IDIsXG4gICAgICAgIGVhc2U6IFwicG93ZXIyLm91dFwiLFxuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICByb3RhdGU6IDAsXG4gICAgICAgIHlQZXJjZW50OiAwLFxuICAgICAgfVxuICAgICk7XG4gIH1cblxuICAvLyAgQkxPQ0sgSU1BR0VTXG4gIGltYWdlSW4odGFyZ2V0Xykge1xuICAgIGxldCBpZCA9IHRhcmdldF8uZWwuZGF0YXNldC5pZDtcbiAgICBsZXQgdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWlkPVwiJyArIGlkICsgJ1wiXScpO1xuXG4gICAgZ3NhcC5mcm9tVG8oXG4gICAgICB0LFxuICAgICAge1xuICAgICAgICB5UGVyY2VudDogMjAsXG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBkdXJhdGlvbjogMixcbiAgICAgICAgZWFzZTogXCJwb3dlcjIub3V0XCIsXG4gICAgICAgIHlQZXJjZW50OiAwLFxuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgfVxuICAgICk7XG4gIH1cblxuICAvLyAgQkxPQ0sgVklERU9cbiAgdmlkZW9Jbih0YXJnZXRfKSB7XG4gICAgbGV0IGlkID0gdGFyZ2V0Xy5lbC5kYXRhc2V0LmlkO1xuICAgIGxldCB0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtaWQ9XCInICsgaWQgKyAnXCJdJyk7XG5cbiAgICBnc2FwLmZyb21UbyhcbiAgICAgIHQsXG4gICAgICB7XG4gICAgICAgIHlQZXJjZW50OiAyMCxcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGR1cmF0aW9uOiAyLFxuICAgICAgICBlYXNlOiBcInBvd2VyMi5vdXRcIixcbiAgICAgICAgeVBlcmNlbnQ6IDAsXG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICB9XG4gICAgKTtcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNWExYWI5OGEzNTIwODg0NmE3MGFcIikiXSwibmFtZXMiOlsiZ3NhcCIsIkFuaW1hdGlvbiIsImNvbnN0cnVjdG9yIiwidGV4dEluIiwidGFyZ2V0XyIsImlkIiwiZWwiLCJkYXRhc2V0IiwidCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImZyb21UbyIsInlQZXJjZW50Iiwicm90YXRlIiwib3BhY2l0eSIsImR1cmF0aW9uIiwiZWFzZSIsImltYWdlSW4iLCJ2aWRlb0luIl0sInNvdXJjZVJvb3QiOiIifQ==