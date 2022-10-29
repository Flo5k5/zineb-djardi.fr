/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/classes/Scroll.js":
/*!******************************!*\
  !*** ./js/classes/Scroll.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Scroll)
/* harmony export */ });
/* harmony import */ var locomotive_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! locomotive-scroll */ "./node_modules/locomotive-scroll/dist/locomotive-scroll.esm.js");
////////////////////////////////////////////////////////////////
//
//  ©PRAKT
//
////////////////////////////////////////////////////////////////

 // import { animation } from '../index';
////////////////////////////////////////////////////////////////
//
//  SCROLL LOCOMOTIVE
//
////////////////////////////////////////////////////////////////

class Scroll {
  constructor() {
    this.scroll;
  }

  init() {
    this.scroll = new locomotive_scroll__WEBPACK_IMPORTED_MODULE_0__["default"]({
      el: document.querySelector('.scroll_wrapper'),
      smooth: true,
      lerp: .09,
      multiplier: 2,
      scrollFromAnywhere: true,
      getSpeed: true
    });
  }

  reset() {
    // this.scroll.scroll.instance.scroll.y = 0;
    this.scroll.update();
    this.scroll.scrollTo('top', {
      duration: 0,
      disableLerp: true
    });
    setTimeout(() => {
      this.scroll.update();
    }, 200);
  }

  scrollto(target) {
    this.scroll.scrollTo(target, {
      'callback': function () {},
      'duration': 1000,
      'easing': [0.25, 0.00, 0.35, 1.00],
      'disableLerp': true
    });
  }

  info() {// console.log(this.scroll.scroll.instance.scroll.y);
    // console.log(this.scroll.scroll.instance.speed);
    // console.log(this.scroll.scroll);
  } // action() {
  //     this.scroll.on('call', ( a ) => {
  //         let call_obj = this.scroll.scroll.callObj;
  //         switch( a ){
  //             case 'c_text': animation.texIn( call_obj ); break;
  //             case 'c_img': animation.imageIn( call_obj ); break;
  //             case 'c_video': animation.videoIn( call_obj ); break;
  //         }
  //     } );
  // }


}

/***/ }),

/***/ "./js/globals.js":
/*!***********************!*\
  !*** ./js/globals.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

////////////////////////////////////////////////////////////////
//
//  ©PRAKT
//
////////////////////////////////////////////////////////////////
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
__webpack_require__.g.RSP_XXL = 1600;

/***/ }),

/***/ "./js/utils/responsive.js":
/*!********************************!*\
  !*** ./js/utils/responsive.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cssSetTouchDevices": () => (/* binding */ cssSetTouchDevices),
/* harmony export */   "isTouch": () => (/* binding */ isTouch),
/* harmony export */   "rsp": () => (/* binding */ rsp)
/* harmony export */ });
////////////////////////////////////////////////////////////////
//
//  ©PRAKT
//
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
//
//  RESPONSIVE
//
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
//
//  RESPONSIVE BREAKPOINTS CONTROL
//
////////////////////////////////////////////////////////////////
function rsp(val_, reverse_) {
  let rv = '';
  if (reverse_) reverse_ == true ? rv = true : rv = false;else rv = false;
  let val = val_;
  let w = window.innerWidth;
  if (w > val && !rv) return true;
  if (w < val && rv) return true;
} ////////////////////////////////////////////////////////////////
//
//  IS TOUCH
//
////////////////////////////////////////////////////////////////

function isTouch() {
  let touch;
  'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? touch = true : touch = false;
  return touch;
} ////////////////////////////////////////////////////////////////
//
//  SET TOUCH / NO TOUCH CLASSES
//
////////////////////////////////////////////////////////////////

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

/***/ }),

/***/ "./node_modules/locomotive-scroll/dist/locomotive-scroll.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/locomotive-scroll/dist/locomotive-scroll.esm.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Native": () => (/* binding */ Native),
/* harmony export */   "Smooth": () => (/* binding */ Smooth),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* locomotive-scroll v4.1.3 | MIT License | https://github.com/locomotivemtl/locomotive-scroll */
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var defaults = {
  el: document,
  name: 'scroll',
  offset: [0, 0],
  repeat: false,
  smooth: false,
  initPosition: {
    x: 0,
    y: 0
  },
  direction: 'vertical',
  gestureDirection: 'vertical',
  reloadOnContextChange: false,
  lerp: 0.1,
  "class": 'is-inview',
  scrollbarContainer: false,
  scrollbarClass: 'c-scrollbar',
  scrollingClass: 'has-scroll-scrolling',
  draggingClass: 'has-scroll-dragging',
  smoothClass: 'has-scroll-smooth',
  initClass: 'has-scroll-init',
  getSpeed: false,
  getDirection: false,
  scrollFromAnywhere: false,
  multiplier: 1,
  firefoxMultiplier: 50,
  touchMultiplier: 2,
  resetNativeScroll: true,
  tablet: {
    smooth: false,
    direction: 'vertical',
    gestureDirection: 'vertical',
    breakpoint: 1024
  },
  smartphone: {
    smooth: false,
    direction: 'vertical',
    gestureDirection: 'vertical'
  }
};

var _default = /*#__PURE__*/function () {
  function _default() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, _default);

    Object.assign(this, defaults, options);
    this.smartphone = defaults.smartphone;
    if (options.smartphone) Object.assign(this.smartphone, options.smartphone);
    this.tablet = defaults.tablet;
    if (options.tablet) Object.assign(this.tablet, options.tablet);
    this.namespace = 'locomotive';
    this.html = document.documentElement;
    this.windowHeight = window.innerHeight;
    this.windowWidth = window.innerWidth;
    this.windowMiddle = {
      x: this.windowWidth / 2,
      y: this.windowHeight / 2
    };
    this.els = {};
    this.currentElements = {};
    this.listeners = {};
    this.hasScrollTicking = false;
    this.hasCallEventSet = false;
    this.checkScroll = this.checkScroll.bind(this);
    this.checkResize = this.checkResize.bind(this);
    this.checkEvent = this.checkEvent.bind(this);
    this.instance = {
      scroll: {
        x: 0,
        y: 0
      },
      limit: {
        x: this.html.offsetWidth,
        y: this.html.offsetHeight
      },
      currentElements: this.currentElements
    };

    if (this.isMobile) {
      if (this.isTablet) {
        this.context = 'tablet';
      } else {
        this.context = 'smartphone';
      }
    } else {
      this.context = 'desktop';
    }

    if (this.isMobile) this.direction = this[this.context].direction;

    if (this.direction === 'horizontal') {
      this.directionAxis = 'x';
    } else {
      this.directionAxis = 'y';
    }

    if (this.getDirection) {
      this.instance.direction = null;
    }

    if (this.getDirection) {
      this.instance.speed = 0;
    }

    this.html.classList.add(this.initClass);
    window.addEventListener('resize', this.checkResize, false);
  }

  _createClass(_default, [{
    key: "init",
    value: function init() {
      this.initEvents();
    }
  }, {
    key: "checkScroll",
    value: function checkScroll() {
      this.dispatchScroll();
    }
  }, {
    key: "checkResize",
    value: function checkResize() {
      var _this = this;

      if (!this.resizeTick) {
        this.resizeTick = true;
        requestAnimationFrame(function () {
          _this.resize();

          _this.resizeTick = false;
        });
      }
    }
  }, {
    key: "resize",
    value: function resize() {}
  }, {
    key: "checkContext",
    value: function checkContext() {
      if (!this.reloadOnContextChange) return;
      this.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1 || this.windowWidth < this.tablet.breakpoint;
      this.isTablet = this.isMobile && this.windowWidth >= this.tablet.breakpoint;
      var oldContext = this.context;

      if (this.isMobile) {
        if (this.isTablet) {
          this.context = 'tablet';
        } else {
          this.context = 'smartphone';
        }
      } else {
        this.context = 'desktop';
      }

      if (oldContext != this.context) {
        var oldSmooth = oldContext == 'desktop' ? this.smooth : this[oldContext].smooth;
        var newSmooth = this.context == 'desktop' ? this.smooth : this[this.context].smooth;
        if (oldSmooth != newSmooth) window.location.reload();
      }
    }
  }, {
    key: "initEvents",
    value: function initEvents() {
      var _this2 = this;

      this.scrollToEls = this.el.querySelectorAll("[data-".concat(this.name, "-to]"));
      this.setScrollTo = this.setScrollTo.bind(this);
      this.scrollToEls.forEach(function (el) {
        el.addEventListener('click', _this2.setScrollTo, false);
      });
    }
  }, {
    key: "setScrollTo",
    value: function setScrollTo(event) {
      event.preventDefault();
      this.scrollTo(event.currentTarget.getAttribute("data-".concat(this.name, "-href")) || event.currentTarget.getAttribute('href'), {
        offset: event.currentTarget.getAttribute("data-".concat(this.name, "-offset"))
      });
    }
  }, {
    key: "addElements",
    value: function addElements() {}
  }, {
    key: "detectElements",
    value: function detectElements(hasCallEventSet) {
      var _this3 = this;

      var scrollTop = this.instance.scroll.y;
      var scrollBottom = scrollTop + this.windowHeight;
      var scrollLeft = this.instance.scroll.x;
      var scrollRight = scrollLeft + this.windowWidth;
      Object.entries(this.els).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            i = _ref2[0],
            el = _ref2[1];

        if (el && (!el.inView || hasCallEventSet)) {
          if (_this3.direction === 'horizontal') {
            if (scrollRight >= el.left && scrollLeft < el.right) {
              _this3.setInView(el, i);
            }
          } else {
            if (scrollBottom >= el.top && scrollTop < el.bottom) {
              _this3.setInView(el, i);
            }
          }
        }

        if (el && el.inView) {
          if (_this3.direction === 'horizontal') {
            var width = el.right - el.left;
            el.progress = (_this3.instance.scroll.x - (el.left - _this3.windowWidth)) / (width + _this3.windowWidth);

            if (scrollRight < el.left || scrollLeft > el.right) {
              _this3.setOutOfView(el, i);
            }
          } else {
            var height = el.bottom - el.top;
            el.progress = (_this3.instance.scroll.y - (el.top - _this3.windowHeight)) / (height + _this3.windowHeight);

            if (scrollBottom < el.top || scrollTop > el.bottom) {
              _this3.setOutOfView(el, i);
            }
          }
        }
      }); // this.els = this.els.filter((current, i) => {
      //     return current !== null;
      // });

      this.hasScrollTicking = false;
    }
  }, {
    key: "setInView",
    value: function setInView(current, i) {
      this.els[i].inView = true;
      current.el.classList.add(current["class"]);
      this.currentElements[i] = current;

      if (current.call && this.hasCallEventSet) {
        this.dispatchCall(current, 'enter');

        if (!current.repeat) {
          this.els[i].call = false;
        }
      } // if (!current.repeat && !current.speed && !current.sticky) {
      //     if (!current.call || current.call && this.hasCallEventSet) {
      //        this.els[i] = null
      //     }
      // }

    }
  }, {
    key: "setOutOfView",
    value: function setOutOfView(current, i) {
      var _this4 = this; // if (current.repeat || current.speed !== undefined) {


      this.els[i].inView = false; // }

      Object.keys(this.currentElements).forEach(function (el) {
        el === i && delete _this4.currentElements[el];
      });

      if (current.call && this.hasCallEventSet) {
        this.dispatchCall(current, 'exit');
      }

      if (current.repeat) {
        current.el.classList.remove(current["class"]);
      }
    }
  }, {
    key: "dispatchCall",
    value: function dispatchCall(current, way) {
      this.callWay = way;
      this.callValue = current.call.split(',').map(function (item) {
        return item.trim();
      });
      this.callObj = current;
      if (this.callValue.length == 1) this.callValue = this.callValue[0];
      var callEvent = new Event(this.namespace + 'call');
      this.el.dispatchEvent(callEvent);
    }
  }, {
    key: "dispatchScroll",
    value: function dispatchScroll() {
      var scrollEvent = new Event(this.namespace + 'scroll');
      this.el.dispatchEvent(scrollEvent);
    }
  }, {
    key: "setEvents",
    value: function setEvents(event, func) {
      if (!this.listeners[event]) {
        this.listeners[event] = [];
      }

      var list = this.listeners[event];
      list.push(func);

      if (list.length === 1) {
        this.el.addEventListener(this.namespace + event, this.checkEvent, false);
      }

      if (event === 'call') {
        this.hasCallEventSet = true;
        this.detectElements(true);
      }
    }
  }, {
    key: "unsetEvents",
    value: function unsetEvents(event, func) {
      if (!this.listeners[event]) return;
      var list = this.listeners[event];
      var index = list.indexOf(func);
      if (index < 0) return;
      list.splice(index, 1);

      if (list.index === 0) {
        this.el.removeEventListener(this.namespace + event, this.checkEvent, false);
      }
    }
  }, {
    key: "checkEvent",
    value: function checkEvent(event) {
      var _this5 = this;

      var name = event.type.replace(this.namespace, '');
      var list = this.listeners[name];
      if (!list || list.length === 0) return;
      list.forEach(function (func) {
        switch (name) {
          case 'scroll':
            return func(_this5.instance);

          case 'call':
            return func(_this5.callValue, _this5.callWay, _this5.callObj);

          default:
            return func();
        }
      });
    }
  }, {
    key: "startScroll",
    value: function startScroll() {}
  }, {
    key: "stopScroll",
    value: function stopScroll() {}
  }, {
    key: "setScroll",
    value: function setScroll(x, y) {
      this.instance.scroll = {
        x: 0,
        y: 0
      };
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var _this6 = this;

      window.removeEventListener('resize', this.checkResize, false);
      Object.keys(this.listeners).forEach(function (event) {
        _this6.el.removeEventListener(_this6.namespace + event, _this6.checkEvent, false);
      });
      this.listeners = {};
      this.scrollToEls.forEach(function (el) {
        el.removeEventListener('click', _this6.setScrollTo, false);
      });
      this.html.classList.remove(this.initClass);
    }
  }]);

  return _default;
}();

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
  return module = {
    exports: {}
  }, fn(module, module.exports), module.exports;
}

var smoothscroll = createCommonjsModule(function (module, exports) {
  /* smoothscroll v0.4.4 - 2019 - Dustan Kasten, Jeremias Menichelli - MIT License */
  (function () {
    // polyfill
    function polyfill() {
      // aliases
      var w = window;
      var d = document; // return if scroll behavior is supported and polyfill is not forced

      if ('scrollBehavior' in d.documentElement.style && w.__forceSmoothScrollPolyfill__ !== true) {
        return;
      } // globals


      var Element = w.HTMLElement || w.Element;
      var SCROLL_TIME = 468; // object gathering original scroll methods

      var original = {
        scroll: w.scroll || w.scrollTo,
        scrollBy: w.scrollBy,
        elementScroll: Element.prototype.scroll || scrollElement,
        scrollIntoView: Element.prototype.scrollIntoView
      }; // define timing method

      var now = w.performance && w.performance.now ? w.performance.now.bind(w.performance) : Date.now;
      /**
       * indicates if a the current browser is made by Microsoft
       * @method isMicrosoftBrowser
       * @param {String} userAgent
       * @returns {Boolean}
       */

      function isMicrosoftBrowser(userAgent) {
        var userAgentPatterns = ['MSIE ', 'Trident/', 'Edge/'];
        return new RegExp(userAgentPatterns.join('|')).test(userAgent);
      }
      /*
       * IE has rounding bug rounding down clientHeight and clientWidth and
       * rounding up scrollHeight and scrollWidth causing false positives
       * on hasScrollableSpace
       */


      var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;
      /**
       * changes scroll position inside an element
       * @method scrollElement
       * @param {Number} x
       * @param {Number} y
       * @returns {undefined}
       */

      function scrollElement(x, y) {
        this.scrollLeft = x;
        this.scrollTop = y;
      }
      /**
       * returns result of applying ease math function to a number
       * @method ease
       * @param {Number} k
       * @returns {Number}
       */


      function ease(k) {
        return 0.5 * (1 - Math.cos(Math.PI * k));
      }
      /**
       * indicates if a smooth behavior should be applied
       * @method shouldBailOut
       * @param {Number|Object} firstArg
       * @returns {Boolean}
       */


      function shouldBailOut(firstArg) {
        if (firstArg === null || typeof firstArg !== 'object' || firstArg.behavior === undefined || firstArg.behavior === 'auto' || firstArg.behavior === 'instant') {
          // first argument is not an object/null
          // or behavior is auto, instant or undefined
          return true;
        }

        if (typeof firstArg === 'object' && firstArg.behavior === 'smooth') {
          // first argument is an object and behavior is smooth
          return false;
        } // throw error when behavior is not supported


        throw new TypeError('behavior member of ScrollOptions ' + firstArg.behavior + ' is not a valid value for enumeration ScrollBehavior.');
      }
      /**
       * indicates if an element has scrollable space in the provided axis
       * @method hasScrollableSpace
       * @param {Node} el
       * @param {String} axis
       * @returns {Boolean}
       */


      function hasScrollableSpace(el, axis) {
        if (axis === 'Y') {
          return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;
        }

        if (axis === 'X') {
          return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;
        }
      }
      /**
       * indicates if an element has a scrollable overflow property in the axis
       * @method canOverflow
       * @param {Node} el
       * @param {String} axis
       * @returns {Boolean}
       */


      function canOverflow(el, axis) {
        var overflowValue = w.getComputedStyle(el, null)['overflow' + axis];
        return overflowValue === 'auto' || overflowValue === 'scroll';
      }
      /**
       * indicates if an element can be scrolled in either axis
       * @method isScrollable
       * @param {Node} el
       * @param {String} axis
       * @returns {Boolean}
       */


      function isScrollable(el) {
        var isScrollableY = hasScrollableSpace(el, 'Y') && canOverflow(el, 'Y');
        var isScrollableX = hasScrollableSpace(el, 'X') && canOverflow(el, 'X');
        return isScrollableY || isScrollableX;
      }
      /**
       * finds scrollable parent of an element
       * @method findScrollableParent
       * @param {Node} el
       * @returns {Node} el
       */


      function findScrollableParent(el) {
        while (el !== d.body && isScrollable(el) === false) {
          el = el.parentNode || el.host;
        }

        return el;
      }
      /**
       * self invoked function that, given a context, steps through scrolling
       * @method step
       * @param {Object} context
       * @returns {undefined}
       */


      function step(context) {
        var time = now();
        var value;
        var currentX;
        var currentY;
        var elapsed = (time - context.startTime) / SCROLL_TIME; // avoid elapsed times higher than one

        elapsed = elapsed > 1 ? 1 : elapsed; // apply easing to elapsed time

        value = ease(elapsed);
        currentX = context.startX + (context.x - context.startX) * value;
        currentY = context.startY + (context.y - context.startY) * value;
        context.method.call(context.scrollable, currentX, currentY); // scroll more if we have not reached our destination

        if (currentX !== context.x || currentY !== context.y) {
          w.requestAnimationFrame(step.bind(w, context));
        }
      }
      /**
       * scrolls window or element with a smooth behavior
       * @method smoothScroll
       * @param {Object|Node} el
       * @param {Number} x
       * @param {Number} y
       * @returns {undefined}
       */


      function smoothScroll(el, x, y) {
        var scrollable;
        var startX;
        var startY;
        var method;
        var startTime = now(); // define scroll context

        if (el === d.body) {
          scrollable = w;
          startX = w.scrollX || w.pageXOffset;
          startY = w.scrollY || w.pageYOffset;
          method = original.scroll;
        } else {
          scrollable = el;
          startX = el.scrollLeft;
          startY = el.scrollTop;
          method = scrollElement;
        } // scroll looping over a frame


        step({
          scrollable: scrollable,
          method: method,
          startTime: startTime,
          startX: startX,
          startY: startY,
          x: x,
          y: y
        });
      } // ORIGINAL METHODS OVERRIDES
      // w.scroll and w.scrollTo


      w.scroll = w.scrollTo = function () {
        // avoid action when no arguments are passed
        if (arguments[0] === undefined) {
          return;
        } // avoid smooth behavior if not required


        if (shouldBailOut(arguments[0]) === true) {
          original.scroll.call(w, arguments[0].left !== undefined ? arguments[0].left : typeof arguments[0] !== 'object' ? arguments[0] : w.scrollX || w.pageXOffset, // use top prop, second argument if present or fallback to scrollY
          arguments[0].top !== undefined ? arguments[0].top : arguments[1] !== undefined ? arguments[1] : w.scrollY || w.pageYOffset);
          return;
        } // LET THE SMOOTHNESS BEGIN!


        smoothScroll.call(w, d.body, arguments[0].left !== undefined ? ~~arguments[0].left : w.scrollX || w.pageXOffset, arguments[0].top !== undefined ? ~~arguments[0].top : w.scrollY || w.pageYOffset);
      }; // w.scrollBy


      w.scrollBy = function () {
        // avoid action when no arguments are passed
        if (arguments[0] === undefined) {
          return;
        } // avoid smooth behavior if not required


        if (shouldBailOut(arguments[0])) {
          original.scrollBy.call(w, arguments[0].left !== undefined ? arguments[0].left : typeof arguments[0] !== 'object' ? arguments[0] : 0, arguments[0].top !== undefined ? arguments[0].top : arguments[1] !== undefined ? arguments[1] : 0);
          return;
        } // LET THE SMOOTHNESS BEGIN!


        smoothScroll.call(w, d.body, ~~arguments[0].left + (w.scrollX || w.pageXOffset), ~~arguments[0].top + (w.scrollY || w.pageYOffset));
      }; // Element.prototype.scroll and Element.prototype.scrollTo


      Element.prototype.scroll = Element.prototype.scrollTo = function () {
        // avoid action when no arguments are passed
        if (arguments[0] === undefined) {
          return;
        } // avoid smooth behavior if not required


        if (shouldBailOut(arguments[0]) === true) {
          // if one number is passed, throw error to match Firefox implementation
          if (typeof arguments[0] === 'number' && arguments[1] === undefined) {
            throw new SyntaxError('Value could not be converted');
          }

          original.elementScroll.call(this, // use left prop, first number argument or fallback to scrollLeft
          arguments[0].left !== undefined ? ~~arguments[0].left : typeof arguments[0] !== 'object' ? ~~arguments[0] : this.scrollLeft, // use top prop, second argument or fallback to scrollTop
          arguments[0].top !== undefined ? ~~arguments[0].top : arguments[1] !== undefined ? ~~arguments[1] : this.scrollTop);
          return;
        }

        var left = arguments[0].left;
        var top = arguments[0].top; // LET THE SMOOTHNESS BEGIN!

        smoothScroll.call(this, this, typeof left === 'undefined' ? this.scrollLeft : ~~left, typeof top === 'undefined' ? this.scrollTop : ~~top);
      }; // Element.prototype.scrollBy


      Element.prototype.scrollBy = function () {
        // avoid action when no arguments are passed
        if (arguments[0] === undefined) {
          return;
        } // avoid smooth behavior if not required


        if (shouldBailOut(arguments[0]) === true) {
          original.elementScroll.call(this, arguments[0].left !== undefined ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, arguments[0].top !== undefined ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop);
          return;
        }

        this.scroll({
          left: ~~arguments[0].left + this.scrollLeft,
          top: ~~arguments[0].top + this.scrollTop,
          behavior: arguments[0].behavior
        });
      }; // Element.prototype.scrollIntoView


      Element.prototype.scrollIntoView = function () {
        // avoid smooth behavior if not required
        if (shouldBailOut(arguments[0]) === true) {
          original.scrollIntoView.call(this, arguments[0] === undefined ? true : arguments[0]);
          return;
        } // LET THE SMOOTHNESS BEGIN!


        var scrollableParent = findScrollableParent(this);
        var parentRects = scrollableParent.getBoundingClientRect();
        var clientRects = this.getBoundingClientRect();

        if (scrollableParent !== d.body) {
          // reveal element inside parent
          smoothScroll.call(this, scrollableParent, scrollableParent.scrollLeft + clientRects.left - parentRects.left, scrollableParent.scrollTop + clientRects.top - parentRects.top); // reveal parent in viewport unless is fixed

          if (w.getComputedStyle(scrollableParent).position !== 'fixed') {
            w.scrollBy({
              left: parentRects.left,
              top: parentRects.top,
              behavior: 'smooth'
            });
          }
        } else {
          // reveal element in viewport
          w.scrollBy({
            left: clientRects.left,
            top: clientRects.top,
            behavior: 'smooth'
          });
        }
      };
    }

    {
      // commonjs
      module.exports = {
        polyfill: polyfill
      };
    }
  })();
});
var smoothscroll_1 = smoothscroll.polyfill;

var _default$1 = /*#__PURE__*/function (_Core) {
  _inherits(_default, _Core);

  var _super = _createSuper(_default);

  function _default() {
    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, _default);

    _this = _super.call(this, options);

    if (_this.resetNativeScroll) {
      if (history.scrollRestoration) {
        history.scrollRestoration = 'manual';
      }

      window.scrollTo(0, 0);
    }

    window.addEventListener('scroll', _this.checkScroll, false);

    if (window.smoothscrollPolyfill === undefined) {
      window.smoothscrollPolyfill = smoothscroll;
      window.smoothscrollPolyfill.polyfill();
    }

    return _this;
  }

  _createClass(_default, [{
    key: "init",
    value: function init() {
      this.instance.scroll.y = window.pageYOffset;
      this.addElements();
      this.detectElements();

      _get(_getPrototypeOf(_default.prototype), "init", this).call(this);
    }
  }, {
    key: "checkScroll",
    value: function checkScroll() {
      var _this2 = this;

      _get(_getPrototypeOf(_default.prototype), "checkScroll", this).call(this);

      if (this.getDirection) {
        this.addDirection();
      }

      if (this.getSpeed) {
        this.addSpeed();
        this.speedTs = Date.now();
      }

      this.instance.scroll.y = window.pageYOffset;

      if (Object.entries(this.els).length) {
        if (!this.hasScrollTicking) {
          requestAnimationFrame(function () {
            _this2.detectElements();
          });
          this.hasScrollTicking = true;
        }
      }
    }
  }, {
    key: "addDirection",
    value: function addDirection() {
      if (window.pageYOffset > this.instance.scroll.y) {
        if (this.instance.direction !== 'down') {
          this.instance.direction = 'down';
        }
      } else if (window.pageYOffset < this.instance.scroll.y) {
        if (this.instance.direction !== 'up') {
          this.instance.direction = 'up';
        }
      }
    }
  }, {
    key: "addSpeed",
    value: function addSpeed() {
      if (window.pageYOffset != this.instance.scroll.y) {
        this.instance.speed = (window.pageYOffset - this.instance.scroll.y) / Math.max(1, Date.now() - this.speedTs);
      } else {
        this.instance.speed = 0;
      }
    }
  }, {
    key: "resize",
    value: function resize() {
      if (Object.entries(this.els).length) {
        this.windowHeight = window.innerHeight;
        this.updateElements();
      }
    }
  }, {
    key: "addElements",
    value: function addElements() {
      var _this3 = this;

      this.els = {};
      var els = this.el.querySelectorAll('[data-' + this.name + ']');
      els.forEach(function (el, index) {
        var BCR = el.getBoundingClientRect();
        var cl = el.dataset[_this3.name + 'Class'] || _this3["class"];
        var id = typeof el.dataset[_this3.name + 'Id'] === 'string' ? el.dataset[_this3.name + 'Id'] : index;
        var top;
        var left;
        var offset = typeof el.dataset[_this3.name + 'Offset'] === 'string' ? el.dataset[_this3.name + 'Offset'].split(',') : _this3.offset;
        var repeat = el.dataset[_this3.name + 'Repeat'];
        var call = el.dataset[_this3.name + 'Call'];
        var target = el.dataset[_this3.name + 'Target'];
        var targetEl;

        if (target !== undefined) {
          targetEl = document.querySelector("".concat(target));
        } else {
          targetEl = el;
        }

        var targetElBCR = targetEl.getBoundingClientRect();
        top = targetElBCR.top + _this3.instance.scroll.y;
        left = targetElBCR.left + _this3.instance.scroll.x;
        var bottom = top + targetEl.offsetHeight;
        var right = left + targetEl.offsetWidth;

        if (repeat == 'false') {
          repeat = false;
        } else if (repeat != undefined) {
          repeat = true;
        } else {
          repeat = _this3.repeat;
        }

        var relativeOffset = _this3.getRelativeOffset(offset);

        top = top + relativeOffset[0];
        bottom = bottom - relativeOffset[1];
        var mappedEl = {
          el: el,
          targetEl: targetEl,
          id: id,
          "class": cl,
          top: top,
          bottom: bottom,
          left: left,
          right: right,
          offset: offset,
          progress: 0,
          repeat: repeat,
          inView: false,
          call: call
        };
        _this3.els[id] = mappedEl;

        if (el.classList.contains(cl)) {
          _this3.setInView(_this3.els[id], id);
        }
      });
    }
  }, {
    key: "updateElements",
    value: function updateElements() {
      var _this4 = this;

      Object.entries(this.els).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            i = _ref2[0],
            el = _ref2[1];

        var top = el.targetEl.getBoundingClientRect().top + _this4.instance.scroll.y;

        var bottom = top + el.targetEl.offsetHeight;

        var relativeOffset = _this4.getRelativeOffset(el.offset);

        _this4.els[i].top = top + relativeOffset[0];
        _this4.els[i].bottom = bottom - relativeOffset[1];
      });
      this.hasScrollTicking = false;
    }
  }, {
    key: "getRelativeOffset",
    value: function getRelativeOffset(offset) {
      var relativeOffset = [0, 0];

      if (offset) {
        for (var i = 0; i < offset.length; i++) {
          if (typeof offset[i] == 'string') {
            if (offset[i].includes('%')) {
              relativeOffset[i] = parseInt(offset[i].replace('%', '') * this.windowHeight / 100);
            } else {
              relativeOffset[i] = parseInt(offset[i]);
            }
          } else {
            relativeOffset[i] = offset[i];
          }
        }
      }

      return relativeOffset;
    }
    /**
     * Scroll to a desired target.
     *
     * @param  Available options :
     *          target {node, string, "top", "bottom", int} - The DOM element we want to scroll to
     *          options {object} - Options object for additionnal settings.
     * @return {void}
     */

  }, {
    key: "scrollTo",
    value: function scrollTo(target) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; // Parse options

      var offset = parseInt(options.offset) || 0; // An offset to apply on top of given `target` or `sourceElem`'s target

      var callback = options.callback ? options.callback : false; // function called when scrollTo completes (note that it won't wait for lerp to stabilize)

      if (typeof target === 'string') {
        // Selector or boundaries
        if (target === 'top') {
          target = this.html;
        } else if (target === 'bottom') {
          target = this.html.offsetHeight - window.innerHeight;
        } else {
          target = document.querySelector(target); // If the query fails, abort

          if (!target) {
            return;
          }
        }
      } else if (typeof target === 'number') {
        // Absolute coordinate
        target = parseInt(target);
      } else if (target && target.tagName) ;else {
        console.warn('`target` parameter is not valid');
        return;
      } // We have a target that is not a coordinate yet, get it


      if (typeof target !== 'number') {
        offset = target.getBoundingClientRect().top + offset + this.instance.scroll.y;
      } else {
        offset = target + offset;
      }

      var isTargetReached = function isTargetReached() {
        return parseInt(window.pageYOffset) === parseInt(offset);
      };

      if (callback) {
        if (isTargetReached()) {
          callback();
          return;
        } else {
          var onScroll = function onScroll() {
            if (isTargetReached()) {
              window.removeEventListener('scroll', onScroll);
              callback();
            }
          };

          window.addEventListener('scroll', onScroll);
        }
      }

      window.scrollTo({
        top: offset,
        behavior: options.duration === 0 ? 'auto' : 'smooth'
      });
    }
  }, {
    key: "update",
    value: function update() {
      this.addElements();
      this.detectElements();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      _get(_getPrototypeOf(_default.prototype), "destroy", this).call(this);

      window.removeEventListener('scroll', this.checkScroll, false);
    }
  }]);

  return _default;
}(_default);
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */


var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};

function E() {// Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}

E.prototype = {
  on: function (name, callback, ctx) {
    var e = this.e || (this.e = {});
    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });
    return this;
  },
  once: function (name, callback, ctx) {
    var self = this;

    function listener() {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    }

    listener._ = callback;
    return this.on(name, listener, ctx);
  },
  emit: function (name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;

    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }

    return this;
  },
  off: function (name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];

    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback) liveEvents.push(evts[i]);
      }
    } // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910


    liveEvents.length ? e[name] = liveEvents : delete e[name];
    return this;
  }
};
var tinyEmitter = E;
var lethargy = createCommonjsModule(function (module, exports) {
  // Generated by CoffeeScript 1.9.2
  (function () {
    var root;
    root = exports !== null ? exports : this;

    root.Lethargy = function () {
      function Lethargy(stability, sensitivity, tolerance, delay) {
        this.stability = stability != null ? Math.abs(stability) : 8;
        this.sensitivity = sensitivity != null ? 1 + Math.abs(sensitivity) : 100;
        this.tolerance = tolerance != null ? 1 + Math.abs(tolerance) : 1.1;
        this.delay = delay != null ? delay : 150;

        this.lastUpDeltas = function () {
          var i, ref, results;
          results = [];

          for (i = 1, ref = this.stability * 2; 1 <= ref ? i <= ref : i >= ref; 1 <= ref ? i++ : i--) {
            results.push(null);
          }

          return results;
        }.call(this);

        this.lastDownDeltas = function () {
          var i, ref, results;
          results = [];

          for (i = 1, ref = this.stability * 2; 1 <= ref ? i <= ref : i >= ref; 1 <= ref ? i++ : i--) {
            results.push(null);
          }

          return results;
        }.call(this);

        this.deltasTimestamp = function () {
          var i, ref, results;
          results = [];

          for (i = 1, ref = this.stability * 2; 1 <= ref ? i <= ref : i >= ref; 1 <= ref ? i++ : i--) {
            results.push(null);
          }

          return results;
        }.call(this);
      }

      Lethargy.prototype.check = function (e) {
        var lastDelta;
        e = e.originalEvent || e;

        if (e.wheelDelta != null) {
          lastDelta = e.wheelDelta;
        } else if (e.deltaY != null) {
          lastDelta = e.deltaY * -40;
        } else if (e.detail != null || e.detail === 0) {
          lastDelta = e.detail * -40;
        }

        this.deltasTimestamp.push(Date.now());
        this.deltasTimestamp.shift();

        if (lastDelta > 0) {
          this.lastUpDeltas.push(lastDelta);
          this.lastUpDeltas.shift();
          return this.isInertia(1);
        } else {
          this.lastDownDeltas.push(lastDelta);
          this.lastDownDeltas.shift();
          return this.isInertia(-1);
        }
      };

      Lethargy.prototype.isInertia = function (direction) {
        var lastDeltas, lastDeltasNew, lastDeltasOld, newAverage, newSum, oldAverage, oldSum;
        lastDeltas = direction === -1 ? this.lastDownDeltas : this.lastUpDeltas;

        if (lastDeltas[0] === null) {
          return direction;
        }

        if (this.deltasTimestamp[this.stability * 2 - 2] + this.delay > Date.now() && lastDeltas[0] === lastDeltas[this.stability * 2 - 1]) {
          return false;
        }

        lastDeltasOld = lastDeltas.slice(0, this.stability);
        lastDeltasNew = lastDeltas.slice(this.stability, this.stability * 2);
        oldSum = lastDeltasOld.reduce(function (t, s) {
          return t + s;
        });
        newSum = lastDeltasNew.reduce(function (t, s) {
          return t + s;
        });
        oldAverage = oldSum / lastDeltasOld.length;
        newAverage = newSum / lastDeltasNew.length;

        if (Math.abs(oldAverage) < Math.abs(newAverage * this.tolerance) && this.sensitivity < Math.abs(newAverage)) {
          return direction;
        } else {
          return false;
        }
      };

      Lethargy.prototype.showLastUpDeltas = function () {
        return this.lastUpDeltas;
      };

      Lethargy.prototype.showLastDownDeltas = function () {
        return this.lastDownDeltas;
      };

      return Lethargy;
    }();
  }).call(commonjsGlobal);
});

var support = function getSupport() {
  return {
    hasWheelEvent: 'onwheel' in document,
    hasMouseWheelEvent: 'onmousewheel' in document,
    hasTouch: 'ontouchstart' in window || window.TouchEvent || window.DocumentTouch && document instanceof DocumentTouch,
    hasTouchWin: navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
    hasPointer: !!window.navigator.msPointerEnabled,
    hasKeyDown: 'onkeydown' in document,
    isFirefox: navigator.userAgent.indexOf('Firefox') > -1
  };
}();

var toString = Object.prototype.toString,
    hasOwnProperty$1 = Object.prototype.hasOwnProperty;

var bindallStandalone = function (object) {
  if (!object) return console.warn('bindAll requires at least one argument.');
  var functions = Array.prototype.slice.call(arguments, 1);

  if (functions.length === 0) {
    for (var method in object) {
      if (hasOwnProperty$1.call(object, method)) {
        if (typeof object[method] == 'function' && toString.call(object[method]) == "[object Function]") {
          functions.push(method);
        }
      }
    }
  }

  for (var i = 0; i < functions.length; i++) {
    var f = functions[i];
    object[f] = bind(object[f], object);
  }
};
/*
    Faster bind without specific-case checking. (see https://coderwall.com/p/oi3j3w).
    bindAll is only needed for events binding so no need to make slow fixes for constructor
    or partial application.
*/


function bind(func, context) {
  return function () {
    return func.apply(context, arguments);
  };
}

var Lethargy = lethargy.Lethargy;
var EVT_ID = 'virtualscroll';
var src = VirtualScroll;
var keyCodes = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  SPACE: 32
};

function VirtualScroll(options) {
  bindallStandalone(this, '_onWheel', '_onMouseWheel', '_onTouchStart', '_onTouchMove', '_onKeyDown');
  this.el = window;

  if (options && options.el) {
    this.el = options.el;
    delete options.el;
  }

  this.options = objectAssign({
    mouseMultiplier: 1,
    touchMultiplier: 2,
    firefoxMultiplier: 15,
    keyStep: 120,
    preventTouch: false,
    unpreventTouchClass: 'vs-touchmove-allowed',
    limitInertia: false,
    useKeyboard: true,
    useTouch: true
  }, options);
  if (this.options.limitInertia) this._lethargy = new Lethargy();
  this._emitter = new tinyEmitter();
  this._event = {
    y: 0,
    x: 0,
    deltaX: 0,
    deltaY: 0
  };
  this.touchStartX = null;
  this.touchStartY = null;
  this.bodyTouchAction = null;

  if (this.options.passive !== undefined) {
    this.listenerOptions = {
      passive: this.options.passive
    };
  }
}

VirtualScroll.prototype._notify = function (e) {
  var evt = this._event;
  evt.x += evt.deltaX;
  evt.y += evt.deltaY;

  this._emitter.emit(EVT_ID, {
    x: evt.x,
    y: evt.y,
    deltaX: evt.deltaX,
    deltaY: evt.deltaY,
    originalEvent: e
  });
};

VirtualScroll.prototype._onWheel = function (e) {
  var options = this.options;
  if (this._lethargy && this._lethargy.check(e) === false) return;
  var evt = this._event; // In Chrome and in Firefox (at least the new one)

  evt.deltaX = e.wheelDeltaX || e.deltaX * -1;
  evt.deltaY = e.wheelDeltaY || e.deltaY * -1; // for our purpose deltamode = 1 means user is on a wheel mouse, not touch pad
  // real meaning: https://developer.mozilla.org/en-US/docs/Web/API/WheelEvent#Delta_modes

  if (support.isFirefox && e.deltaMode == 1) {
    evt.deltaX *= options.firefoxMultiplier;
    evt.deltaY *= options.firefoxMultiplier;
  }

  evt.deltaX *= options.mouseMultiplier;
  evt.deltaY *= options.mouseMultiplier;

  this._notify(e);
};

VirtualScroll.prototype._onMouseWheel = function (e) {
  if (this.options.limitInertia && this._lethargy.check(e) === false) return;
  var evt = this._event; // In Safari, IE and in Chrome if 'wheel' isn't defined

  evt.deltaX = e.wheelDeltaX ? e.wheelDeltaX : 0;
  evt.deltaY = e.wheelDeltaY ? e.wheelDeltaY : e.wheelDelta;

  this._notify(e);
};

VirtualScroll.prototype._onTouchStart = function (e) {
  var t = e.targetTouches ? e.targetTouches[0] : e;
  this.touchStartX = t.pageX;
  this.touchStartY = t.pageY;
};

VirtualScroll.prototype._onTouchMove = function (e) {
  var options = this.options;

  if (options.preventTouch && !e.target.classList.contains(options.unpreventTouchClass)) {
    e.preventDefault();
  }

  var evt = this._event;
  var t = e.targetTouches ? e.targetTouches[0] : e;
  evt.deltaX = (t.pageX - this.touchStartX) * options.touchMultiplier;
  evt.deltaY = (t.pageY - this.touchStartY) * options.touchMultiplier;
  this.touchStartX = t.pageX;
  this.touchStartY = t.pageY;

  this._notify(e);
};

VirtualScroll.prototype._onKeyDown = function (e) {
  var evt = this._event;
  evt.deltaX = evt.deltaY = 0;
  var windowHeight = window.innerHeight - 40;

  switch (e.keyCode) {
    case keyCodes.LEFT:
    case keyCodes.UP:
      evt.deltaY = this.options.keyStep;
      break;

    case keyCodes.RIGHT:
    case keyCodes.DOWN:
      evt.deltaY = -this.options.keyStep;
      break;

    case e.shiftKey:
      evt.deltaY = windowHeight;
      break;

    case keyCodes.SPACE:
      evt.deltaY = -windowHeight;
      break;

    default:
      return;
  }

  this._notify(e);
};

VirtualScroll.prototype._bind = function () {
  if (support.hasWheelEvent) this.el.addEventListener('wheel', this._onWheel, this.listenerOptions);
  if (support.hasMouseWheelEvent) this.el.addEventListener('mousewheel', this._onMouseWheel, this.listenerOptions);

  if (support.hasTouch && this.options.useTouch) {
    this.el.addEventListener('touchstart', this._onTouchStart, this.listenerOptions);
    this.el.addEventListener('touchmove', this._onTouchMove, this.listenerOptions);
  }

  if (support.hasPointer && support.hasTouchWin) {
    this.bodyTouchAction = document.body.style.msTouchAction;
    document.body.style.msTouchAction = 'none';
    this.el.addEventListener('MSPointerDown', this._onTouchStart, true);
    this.el.addEventListener('MSPointerMove', this._onTouchMove, true);
  }

  if (support.hasKeyDown && this.options.useKeyboard) document.addEventListener('keydown', this._onKeyDown);
};

VirtualScroll.prototype._unbind = function () {
  if (support.hasWheelEvent) this.el.removeEventListener('wheel', this._onWheel);
  if (support.hasMouseWheelEvent) this.el.removeEventListener('mousewheel', this._onMouseWheel);

  if (support.hasTouch) {
    this.el.removeEventListener('touchstart', this._onTouchStart);
    this.el.removeEventListener('touchmove', this._onTouchMove);
  }

  if (support.hasPointer && support.hasTouchWin) {
    document.body.style.msTouchAction = this.bodyTouchAction;
    this.el.removeEventListener('MSPointerDown', this._onTouchStart, true);
    this.el.removeEventListener('MSPointerMove', this._onTouchMove, true);
  }

  if (support.hasKeyDown && this.options.useKeyboard) document.removeEventListener('keydown', this._onKeyDown);
};

VirtualScroll.prototype.on = function (cb, ctx) {
  this._emitter.on(EVT_ID, cb, ctx);

  var events = this._emitter.e;
  if (events && events[EVT_ID] && events[EVT_ID].length === 1) this._bind();
};

VirtualScroll.prototype.off = function (cb, ctx) {
  this._emitter.off(EVT_ID, cb, ctx);

  var events = this._emitter.e;
  if (!events[EVT_ID] || events[EVT_ID].length <= 0) this._unbind();
};

VirtualScroll.prototype.reset = function () {
  var evt = this._event;
  evt.x = 0;
  evt.y = 0;
};

VirtualScroll.prototype.destroy = function () {
  this._emitter.off();

  this._unbind();
};

function lerp(start, end, amt) {
  return (1 - amt) * start + amt * end;
}

function getTranslate(el) {
  var translate = {};
  if (!window.getComputedStyle) return;
  var style = getComputedStyle(el);
  var transform = style.transform || style.webkitTransform || style.mozTransform;
  var mat = transform.match(/^matrix3d\((.+)\)$/);

  if (mat) {
    translate.x = mat ? parseFloat(mat[1].split(', ')[12]) : 0;
    translate.y = mat ? parseFloat(mat[1].split(', ')[13]) : 0;
  } else {
    mat = transform.match(/^matrix\((.+)\)$/);
    translate.x = mat ? parseFloat(mat[1].split(', ')[4]) : 0;
    translate.y = mat ? parseFloat(mat[1].split(', ')[5]) : 0;
  }

  return translate;
}
/**
 * Returns an array containing all the parent nodes of the given node
 * @param  {object} node
 * @return {array} parent nodes
 */


function getParents(elem) {
  // Set up a parent array
  var parents = []; // Push each parent element to the array

  for (; elem && elem !== document; elem = elem.parentNode) {
    parents.push(elem);
  } // Return our parent array


  return parents;
} // https://gomakethings.com/how-to-get-the-closest-parent-element-with-a-matching-selector-using-vanilla-javascript/

/**
 * https://github.com/gre/bezier-easing
 * BezierEasing - use bezier curve for transition easing function
 * by Gaëtan Renaudeau 2014 - 2015 – MIT License
 */
// These values are established by empiricism with tests (tradeoff: performance VS precision)


var NEWTON_ITERATIONS = 4;
var NEWTON_MIN_SLOPE = 0.001;
var SUBDIVISION_PRECISION = 0.0000001;
var SUBDIVISION_MAX_ITERATIONS = 10;
var kSplineTableSize = 11;
var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);
var float32ArraySupported = typeof Float32Array === 'function';

function A(aA1, aA2) {
  return 1.0 - 3.0 * aA2 + 3.0 * aA1;
}

function B(aA1, aA2) {
  return 3.0 * aA2 - 6.0 * aA1;
}

function C(aA1) {
  return 3.0 * aA1;
} // Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.


function calcBezier(aT, aA1, aA2) {
  return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
} // Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.


function getSlope(aT, aA1, aA2) {
  return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
}

function binarySubdivide(aX, aA, aB, mX1, mX2) {
  var currentX,
      currentT,
      i = 0;

  do {
    currentT = aA + (aB - aA) / 2.0;
    currentX = calcBezier(currentT, mX1, mX2) - aX;

    if (currentX > 0.0) {
      aB = currentT;
    } else {
      aA = currentT;
    }
  } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);

  return currentT;
}

function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
  for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
    var currentSlope = getSlope(aGuessT, mX1, mX2);

    if (currentSlope === 0.0) {
      return aGuessT;
    }

    var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
    aGuessT -= currentX / currentSlope;
  }

  return aGuessT;
}

function LinearEasing(x) {
  return x;
}

var src$1 = function bezier(mX1, mY1, mX2, mY2) {
  if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
    throw new Error('bezier x values must be in [0, 1] range');
  }

  if (mX1 === mY1 && mX2 === mY2) {
    return LinearEasing;
  } // Precompute samples table


  var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);

  for (var i = 0; i < kSplineTableSize; ++i) {
    sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
  }

  function getTForX(aX) {
    var intervalStart = 0.0;
    var currentSample = 1;
    var lastSample = kSplineTableSize - 1;

    for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
      intervalStart += kSampleStepSize;
    }

    --currentSample; // Interpolate to provide an initial guess for t

    var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    var guessForT = intervalStart + dist * kSampleStepSize;
    var initialSlope = getSlope(guessForT, mX1, mX2);

    if (initialSlope >= NEWTON_MIN_SLOPE) {
      return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
    } else if (initialSlope === 0.0) {
      return guessForT;
    } else {
      return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
    }
  }

  return function BezierEasing(x) {
    // Because JavaScript number are imprecise, we should guarantee the extremes are right.
    if (x === 0) {
      return 0;
    }

    if (x === 1) {
      return 1;
    }

    return calcBezier(getTForX(x), mY1, mY2);
  };
};

var keyCodes$1 = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  SPACE: 32,
  TAB: 9,
  PAGEUP: 33,
  PAGEDOWN: 34,
  HOME: 36,
  END: 35
};

var _default$2 = /*#__PURE__*/function (_Core) {
  _inherits(_default, _Core);

  var _super = _createSuper(_default);

  function _default() {
    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, _default);

    if (history.scrollRestoration) {
      history.scrollRestoration = 'manual';
    }

    window.scrollTo(0, 0);
    _this = _super.call(this, options);
    if (_this.inertia) _this.lerp = _this.inertia * 0.1;
    _this.isScrolling = false;
    _this.isDraggingScrollbar = false;
    _this.isTicking = false;
    _this.hasScrollTicking = false;
    _this.parallaxElements = {};
    _this.stop = false;
    _this.scrollbarContainer = options.scrollbarContainer;
    _this.checkKey = _this.checkKey.bind(_assertThisInitialized(_this));
    window.addEventListener('keydown', _this.checkKey, false);
    return _this;
  }

  _createClass(_default, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      this.html.classList.add(this.smoothClass);
      this.html.setAttribute("data-".concat(this.name, "-direction"), this.direction);
      this.instance = _objectSpread2({
        delta: {
          x: this.initPosition.x,
          y: this.initPosition.y
        },
        scroll: {
          x: this.initPosition.x,
          y: this.initPosition.y
        }
      }, this.instance);
      this.vs = new src({
        el: this.scrollFromAnywhere ? document : this.el,
        mouseMultiplier: navigator.platform.indexOf('Win') > -1 ? 1 : 0.4,
        firefoxMultiplier: this.firefoxMultiplier,
        touchMultiplier: this.touchMultiplier,
        useKeyboard: false,
        passive: true
      });
      this.vs.on(function (e) {
        if (_this2.stop) {
          return;
        }

        if (!_this2.isDraggingScrollbar) {
          requestAnimationFrame(function () {
            _this2.updateDelta(e);

            if (!_this2.isScrolling) _this2.startScrolling();
          });
        }
      });
      this.setScrollLimit();
      this.initScrollBar();
      this.addSections();
      this.addElements();
      this.checkScroll(true);
      this.transformElements(true, true);

      _get(_getPrototypeOf(_default.prototype), "init", this).call(this);
    }
  }, {
    key: "setScrollLimit",
    value: function setScrollLimit() {
      this.instance.limit.y = this.el.offsetHeight - this.windowHeight;

      if (this.direction === 'horizontal') {
        var totalWidth = 0;
        var nodes = this.el.children;

        for (var i = 0; i < nodes.length; i++) {
          totalWidth += nodes[i].offsetWidth;
        }

        this.instance.limit.x = totalWidth - this.windowWidth;
      }
    }
  }, {
    key: "startScrolling",
    value: function startScrolling() {
      this.startScrollTs = Date.now(); // Record timestamp

      this.isScrolling = true;
      this.checkScroll();
      this.html.classList.add(this.scrollingClass);
    }
  }, {
    key: "stopScrolling",
    value: function stopScrolling() {
      cancelAnimationFrame(this.checkScrollRaf); // Prevent checkScroll to continue looping
      //Pevent scrollbar glitch/locking

      this.startScrollTs = undefined;

      if (this.scrollToRaf) {
        cancelAnimationFrame(this.scrollToRaf);
        this.scrollToRaf = null;
      }

      this.isScrolling = false;
      this.instance.scroll.y = Math.round(this.instance.scroll.y);
      this.html.classList.remove(this.scrollingClass);
    }
  }, {
    key: "checkKey",
    value: function checkKey(e) {
      var _this3 = this;

      if (this.stop) {
        // If we are stopped, we don't want any scroll to occur because of a keypress
        // Prevent tab to scroll to activeElement
        if (e.keyCode == keyCodes$1.TAB) {
          requestAnimationFrame(function () {
            // Make sure native scroll is always at top of page
            _this3.html.scrollTop = 0;
            document.body.scrollTop = 0;
            _this3.html.scrollLeft = 0;
            document.body.scrollLeft = 0;
          });
        }

        return;
      }

      switch (e.keyCode) {
        case keyCodes$1.TAB:
          // Do not remove the RAF
          // It allows to override the browser's native scrollTo, which is essential
          requestAnimationFrame(function () {
            // Make sure native scroll is always at top of page
            _this3.html.scrollTop = 0;
            document.body.scrollTop = 0;
            _this3.html.scrollLeft = 0;
            document.body.scrollLeft = 0; // Request scrollTo on the focusedElement, putting it at the center of the screen

            _this3.scrollTo(document.activeElement, {
              offset: -window.innerHeight / 2
            });
          });
          break;

        case keyCodes$1.UP:
          if (this.isActiveElementScrollSensitive()) {
            this.instance.delta[this.directionAxis] -= 240;
          }

          break;

        case keyCodes$1.DOWN:
          if (this.isActiveElementScrollSensitive()) {
            this.instance.delta[this.directionAxis] += 240;
          }

          break;

        case keyCodes$1.PAGEUP:
          this.instance.delta[this.directionAxis] -= window.innerHeight;
          break;

        case keyCodes$1.PAGEDOWN:
          this.instance.delta[this.directionAxis] += window.innerHeight;
          break;

        case keyCodes$1.HOME:
          this.instance.delta[this.directionAxis] -= this.instance.limit[this.directionAxis];
          break;

        case keyCodes$1.END:
          this.instance.delta[this.directionAxis] += this.instance.limit[this.directionAxis];
          break;

        case keyCodes$1.SPACE:
          if (this.isActiveElementScrollSensitive()) {
            if (e.shiftKey) {
              this.instance.delta[this.directionAxis] -= window.innerHeight;
            } else {
              this.instance.delta[this.directionAxis] += window.innerHeight;
            }
          }

          break;

        default:
          return;
      }

      if (this.instance.delta[this.directionAxis] < 0) this.instance.delta[this.directionAxis] = 0;
      if (this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis]) this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis];
      this.stopScrolling(); // Stop any movement, allows to kill any other `scrollTo` still happening

      this.isScrolling = true;
      this.checkScroll();
      this.html.classList.add(this.scrollingClass);
    }
  }, {
    key: "isActiveElementScrollSensitive",
    value: function isActiveElementScrollSensitive() {
      return !(document.activeElement instanceof HTMLInputElement) && !(document.activeElement instanceof HTMLTextAreaElement) && !(document.activeElement instanceof HTMLButtonElement) && !(document.activeElement instanceof HTMLSelectElement);
    }
  }, {
    key: "checkScroll",
    value: function checkScroll() {
      var _this4 = this;

      var forced = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (forced || this.isScrolling || this.isDraggingScrollbar) {
        if (!this.hasScrollTicking) {
          this.checkScrollRaf = requestAnimationFrame(function () {
            return _this4.checkScroll();
          });
          this.hasScrollTicking = true;
        }

        this.updateScroll();
        var distance = Math.abs(this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis]);
        var timeSinceStart = Date.now() - this.startScrollTs; // Get the time since the scroll was started: the scroll can be stopped again only past 100ms

        if (!this.animatingScroll && timeSinceStart > 100 && (distance < 0.5 && this.instance.delta[this.directionAxis] != 0 || distance < 0.5 && this.instance.delta[this.directionAxis] == 0)) {
          this.stopScrolling();
        }

        Object.entries(this.sections).forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              i = _ref2[0],
              section = _ref2[1];

          if (section.persistent || _this4.instance.scroll[_this4.directionAxis] > section.offset[_this4.directionAxis] && _this4.instance.scroll[_this4.directionAxis] < section.limit[_this4.directionAxis]) {
            if (_this4.direction === 'horizontal') {
              _this4.transform(section.el, -_this4.instance.scroll[_this4.directionAxis], 0);
            } else {
              _this4.transform(section.el, 0, -_this4.instance.scroll[_this4.directionAxis]);
            }

            if (!section.inView) {
              section.inView = true;
              section.el.style.opacity = 1;
              section.el.style.pointerEvents = 'all';
              section.el.setAttribute("data-".concat(_this4.name, "-section-inview"), '');
            }
          } else {
            if (section.inView || forced) {
              section.inView = false;
              section.el.style.opacity = 0;
              section.el.style.pointerEvents = 'none';
              section.el.removeAttribute("data-".concat(_this4.name, "-section-inview"));
            }

            _this4.transform(section.el, 0, 0);
          }
        });

        if (this.getDirection) {
          this.addDirection();
        }

        if (this.getSpeed) {
          this.addSpeed();
          this.speedTs = Date.now();
        }

        this.detectElements();
        this.transformElements();

        if (this.hasScrollbar) {
          var scrollBarTranslation = this.instance.scroll[this.directionAxis] / this.instance.limit[this.directionAxis] * this.scrollBarLimit[this.directionAxis];

          if (this.direction === 'horizontal') {
            this.transform(this.scrollbarThumb, scrollBarTranslation, 0);
          } else {
            this.transform(this.scrollbarThumb, 0, scrollBarTranslation);
          }
        }

        _get(_getPrototypeOf(_default.prototype), "checkScroll", this).call(this);

        this.hasScrollTicking = false;
      }
    }
  }, {
    key: "resize",
    value: function resize() {
      this.windowHeight = window.innerHeight;
      this.windowWidth = window.innerWidth;
      this.checkContext();
      this.windowMiddle = {
        x: this.windowWidth / 2,
        y: this.windowHeight / 2
      };
      this.update();
    }
  }, {
    key: "updateDelta",
    value: function updateDelta(e) {
      var delta;
      var gestureDirection = this[this.context] && this[this.context].gestureDirection ? this[this.context].gestureDirection : this.gestureDirection;

      if (gestureDirection === 'both') {
        delta = e.deltaX + e.deltaY;
      } else if (gestureDirection === 'vertical') {
        delta = e.deltaY;
      } else if (gestureDirection === 'horizontal') {
        delta = e.deltaX;
      } else {
        delta = e.deltaY;
      }

      this.instance.delta[this.directionAxis] -= delta * this.multiplier;
      if (this.instance.delta[this.directionAxis] < 0) this.instance.delta[this.directionAxis] = 0;
      if (this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis]) this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis];
    }
  }, {
    key: "updateScroll",
    value: function updateScroll(e) {
      if (this.isScrolling || this.isDraggingScrollbar) {
        this.instance.scroll[this.directionAxis] = lerp(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis], this.lerp);
      } else {
        if (this.instance.scroll[this.directionAxis] > this.instance.limit[this.directionAxis]) {
          this.setScroll(this.instance.scroll[this.directionAxis], this.instance.limit[this.directionAxis]);
        } else if (this.instance.scroll.y < 0) {
          this.setScroll(this.instance.scroll[this.directionAxis], 0);
        } else {
          this.setScroll(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis]);
        }
      }
    }
  }, {
    key: "addDirection",
    value: function addDirection() {
      if (this.instance.delta.y > this.instance.scroll.y) {
        if (this.instance.direction !== 'down') {
          this.instance.direction = 'down';
        }
      } else if (this.instance.delta.y < this.instance.scroll.y) {
        if (this.instance.direction !== 'up') {
          this.instance.direction = 'up';
        }
      }

      if (this.instance.delta.x > this.instance.scroll.x) {
        if (this.instance.direction !== 'right') {
          this.instance.direction = 'right';
        }
      } else if (this.instance.delta.x < this.instance.scroll.x) {
        if (this.instance.direction !== 'left') {
          this.instance.direction = 'left';
        }
      }
    }
  }, {
    key: "addSpeed",
    value: function addSpeed() {
      if (this.instance.delta[this.directionAxis] != this.instance.scroll[this.directionAxis]) {
        this.instance.speed = (this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis]) / Math.max(1, Date.now() - this.speedTs);
      } else {
        this.instance.speed = 0;
      }
    }
  }, {
    key: "initScrollBar",
    value: function initScrollBar() {
      this.scrollbar = document.createElement('span');
      this.scrollbarThumb = document.createElement('span');
      this.scrollbar.classList.add("".concat(this.scrollbarClass));
      this.scrollbarThumb.classList.add("".concat(this.scrollbarClass, "_thumb"));
      this.scrollbar.append(this.scrollbarThumb);

      if (this.scrollbarContainer) {
        this.scrollbarContainer.append(this.scrollbar);
      } else {
        document.body.append(this.scrollbar);
      } // Scrollbar Events


      this.getScrollBar = this.getScrollBar.bind(this);
      this.releaseScrollBar = this.releaseScrollBar.bind(this);
      this.moveScrollBar = this.moveScrollBar.bind(this);
      this.scrollbarThumb.addEventListener('mousedown', this.getScrollBar);
      window.addEventListener('mouseup', this.releaseScrollBar);
      window.addEventListener('mousemove', this.moveScrollBar); // Set scrollbar values

      this.hasScrollbar = false;

      if (this.direction == 'horizontal') {
        if (this.instance.limit.x + this.windowWidth <= this.windowWidth) {
          return;
        }
      } else {
        if (this.instance.limit.y + this.windowHeight <= this.windowHeight) {
          return;
        }
      }

      this.hasScrollbar = true;
      this.scrollbarBCR = this.scrollbar.getBoundingClientRect();
      this.scrollbarHeight = this.scrollbarBCR.height;
      this.scrollbarWidth = this.scrollbarBCR.width;

      if (this.direction === 'horizontal') {
        this.scrollbarThumb.style.width = "".concat(this.scrollbarWidth * this.scrollbarWidth / (this.instance.limit.x + this.scrollbarWidth), "px");
      } else {
        this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit.y + this.scrollbarHeight), "px");
      }

      this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect();
      this.scrollBarLimit = {
        x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
        y: this.scrollbarHeight - this.scrollbarThumbBCR.height
      };
    }
  }, {
    key: "reinitScrollBar",
    value: function reinitScrollBar() {
      this.hasScrollbar = false;

      if (this.direction == 'horizontal') {
        if (this.instance.limit.x + this.windowWidth <= this.windowWidth) {
          return;
        }
      } else {
        if (this.instance.limit.y + this.windowHeight <= this.windowHeight) {
          return;
        }
      }

      this.hasScrollbar = true;
      this.scrollbarBCR = this.scrollbar.getBoundingClientRect();
      this.scrollbarHeight = this.scrollbarBCR.height;
      this.scrollbarWidth = this.scrollbarBCR.width;

      if (this.direction === 'horizontal') {
        this.scrollbarThumb.style.width = "".concat(this.scrollbarWidth * this.scrollbarWidth / (this.instance.limit.x + this.scrollbarWidth), "px");
      } else {
        this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit.y + this.scrollbarHeight), "px");
      }

      this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect();
      this.scrollBarLimit = {
        x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
        y: this.scrollbarHeight - this.scrollbarThumbBCR.height
      };
    }
  }, {
    key: "destroyScrollBar",
    value: function destroyScrollBar() {
      this.scrollbarThumb.removeEventListener('mousedown', this.getScrollBar);
      window.removeEventListener('mouseup', this.releaseScrollBar);
      window.removeEventListener('mousemove', this.moveScrollBar);
      this.scrollbar.remove();
    }
  }, {
    key: "getScrollBar",
    value: function getScrollBar(e) {
      this.isDraggingScrollbar = true;
      this.checkScroll();
      this.html.classList.remove(this.scrollingClass);
      this.html.classList.add(this.draggingClass);
    }
  }, {
    key: "releaseScrollBar",
    value: function releaseScrollBar(e) {
      this.isDraggingScrollbar = false;

      if (this.isScrolling) {
        this.html.classList.add(this.scrollingClass);
      }

      this.html.classList.remove(this.draggingClass);
    }
  }, {
    key: "moveScrollBar",
    value: function moveScrollBar(e) {
      var _this5 = this;

      if (this.isDraggingScrollbar) {
        requestAnimationFrame(function () {
          var x = (e.clientX - _this5.scrollbarBCR.left) * 100 / _this5.scrollbarWidth * _this5.instance.limit.x / 100;
          var y = (e.clientY - _this5.scrollbarBCR.top) * 100 / _this5.scrollbarHeight * _this5.instance.limit.y / 100;

          if (y > 0 && y < _this5.instance.limit.y) {
            _this5.instance.delta.y = y;
          }

          if (x > 0 && x < _this5.instance.limit.x) {
            _this5.instance.delta.x = x;
          }
        });
      }
    }
  }, {
    key: "addElements",
    value: function addElements() {
      var _this6 = this;

      this.els = {};
      this.parallaxElements = {}; // this.sections.forEach((section, y) => {

      var els = this.el.querySelectorAll("[data-".concat(this.name, "]"));
      els.forEach(function (el, index) {
        // Try and find the target's parent section
        var targetParents = getParents(el);
        var section = Object.entries(_this6.sections).map(function (_ref3) {
          var _ref4 = _slicedToArray(_ref3, 2),
              key = _ref4[0],
              section = _ref4[1];

          return section;
        }).find(function (section) {
          return targetParents.includes(section.el);
        });
        var cl = el.dataset[_this6.name + 'Class'] || _this6["class"];
        var id = typeof el.dataset[_this6.name + 'Id'] === 'string' ? el.dataset[_this6.name + 'Id'] : 'el' + index;
        var top;
        var left;
        var repeat = el.dataset[_this6.name + 'Repeat'];
        var call = el.dataset[_this6.name + 'Call'];
        var position = el.dataset[_this6.name + 'Position'];
        var delay = el.dataset[_this6.name + 'Delay'];
        var direction = el.dataset[_this6.name + 'Direction'];
        var sticky = typeof el.dataset[_this6.name + 'Sticky'] === 'string';
        var speed = el.dataset[_this6.name + 'Speed'] ? parseFloat(el.dataset[_this6.name + 'Speed']) / 10 : false;
        var offset = typeof el.dataset[_this6.name + 'Offset'] === 'string' ? el.dataset[_this6.name + 'Offset'].split(',') : _this6.offset;
        var target = el.dataset[_this6.name + 'Target'];
        var targetEl;

        if (target !== undefined) {
          targetEl = document.querySelector("".concat(target));
        } else {
          targetEl = el;
        }

        var targetElBCR = targetEl.getBoundingClientRect();

        if (section === null) {
          top = targetElBCR.top + _this6.instance.scroll.y - getTranslate(targetEl).y;
          left = targetElBCR.left + _this6.instance.scroll.x - getTranslate(targetEl).x;
        } else {
          if (!section.inView) {
            top = targetElBCR.top - getTranslate(section.el).y - getTranslate(targetEl).y;
            left = targetElBCR.left - getTranslate(section.el).x - getTranslate(targetEl).x;
          } else {
            top = targetElBCR.top + _this6.instance.scroll.y - getTranslate(targetEl).y;
            left = targetElBCR.left + _this6.instance.scroll.x - getTranslate(targetEl).x;
          }
        }

        var bottom = top + targetEl.offsetHeight;
        var right = left + targetEl.offsetWidth;
        var middle = {
          x: (right - left) / 2 + left,
          y: (bottom - top) / 2 + top
        };

        if (sticky) {
          var elBCR = el.getBoundingClientRect();
          var elTop = elBCR.top;
          var elLeft = elBCR.left;
          var elDistance = {
            x: elLeft - left,
            y: elTop - top
          };
          top += window.innerHeight;
          left += window.innerWidth;
          bottom = elTop + targetEl.offsetHeight - el.offsetHeight - elDistance[_this6.directionAxis];
          right = elLeft + targetEl.offsetWidth - el.offsetWidth - elDistance[_this6.directionAxis];
          middle = {
            x: (right - left) / 2 + left,
            y: (bottom - top) / 2 + top
          };
        }

        if (repeat == 'false') {
          repeat = false;
        } else if (repeat != undefined) {
          repeat = true;
        } else {
          repeat = _this6.repeat;
        }

        var relativeOffset = [0, 0];

        if (offset) {
          if (_this6.direction === 'horizontal') {
            for (var i = 0; i < offset.length; i++) {
              if (typeof offset[i] == 'string') {
                if (offset[i].includes('%')) {
                  relativeOffset[i] = parseInt(offset[i].replace('%', '') * _this6.windowWidth / 100);
                } else {
                  relativeOffset[i] = parseInt(offset[i]);
                }
              } else {
                relativeOffset[i] = offset[i];
              }
            }

            left = left + relativeOffset[0];
            right = right - relativeOffset[1];
          } else {
            for (var i = 0; i < offset.length; i++) {
              if (typeof offset[i] == 'string') {
                if (offset[i].includes('%')) {
                  relativeOffset[i] = parseInt(offset[i].replace('%', '') * _this6.windowHeight / 100);
                } else {
                  relativeOffset[i] = parseInt(offset[i]);
                }
              } else {
                relativeOffset[i] = offset[i];
              }
            }

            top = top + relativeOffset[0];
            bottom = bottom - relativeOffset[1];
          }
        }

        var mappedEl = {
          el: el,
          id: id,
          "class": cl,
          section: section,
          top: top,
          middle: middle,
          bottom: bottom,
          left: left,
          right: right,
          offset: offset,
          progress: 0,
          repeat: repeat,
          inView: false,
          call: call,
          speed: speed,
          delay: delay,
          position: position,
          target: targetEl,
          direction: direction,
          sticky: sticky
        };
        _this6.els[id] = mappedEl;

        if (el.classList.contains(cl)) {
          _this6.setInView(_this6.els[id], id);
        }

        if (speed !== false || sticky) {
          _this6.parallaxElements[id] = mappedEl;
        }
      }); // });
    }
  }, {
    key: "addSections",
    value: function addSections() {
      var _this7 = this;

      this.sections = {};
      var sections = this.el.querySelectorAll("[data-".concat(this.name, "-section]"));

      if (sections.length === 0) {
        sections = [this.el];
      }

      sections.forEach(function (section, index) {
        var id = typeof section.dataset[_this7.name + 'Id'] === 'string' ? section.dataset[_this7.name + 'Id'] : 'section' + index;
        var sectionBCR = section.getBoundingClientRect();
        var offset = {
          x: sectionBCR.left - window.innerWidth * 1.5 - getTranslate(section).x,
          y: sectionBCR.top - window.innerHeight * 1.5 - getTranslate(section).y
        };
        var limit = {
          x: offset.x + sectionBCR.width + window.innerWidth * 2,
          y: offset.y + sectionBCR.height + window.innerHeight * 2
        };
        var persistent = typeof section.dataset[_this7.name + 'Persistent'] === 'string';
        section.setAttribute('data-scroll-section-id', id);
        var mappedSection = {
          el: section,
          offset: offset,
          limit: limit,
          inView: false,
          persistent: persistent,
          id: id
        };
        _this7.sections[id] = mappedSection;
      });
    }
  }, {
    key: "transform",
    value: function transform(element, x, y, delay) {
      var transform;

      if (!delay) {
        transform = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(x, ",").concat(y, ",0,1)");
      } else {
        var start = getTranslate(element);
        var lerpX = lerp(start.x, x, delay);
        var lerpY = lerp(start.y, y, delay);
        transform = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(lerpX, ",").concat(lerpY, ",0,1)");
      }

      element.style.webkitTransform = transform;
      element.style.msTransform = transform;
      element.style.transform = transform;
    }
  }, {
    key: "transformElements",
    value: function transformElements(isForced) {
      var _this8 = this;

      var setAllElements = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var scrollRight = this.instance.scroll.x + this.windowWidth;
      var scrollBottom = this.instance.scroll.y + this.windowHeight;
      var scrollMiddle = {
        x: this.instance.scroll.x + this.windowMiddle.x,
        y: this.instance.scroll.y + this.windowMiddle.y
      };
      Object.entries(this.parallaxElements).forEach(function (_ref5) {
        var _ref6 = _slicedToArray(_ref5, 2),
            i = _ref6[0],
            current = _ref6[1];

        var transformDistance = false;

        if (isForced) {
          transformDistance = 0;
        }

        if (current.inView || setAllElements) {
          switch (current.position) {
            case 'top':
              transformDistance = _this8.instance.scroll[_this8.directionAxis] * -current.speed;
              break;

            case 'elementTop':
              transformDistance = (scrollBottom - current.top) * -current.speed;
              break;

            case 'bottom':
              transformDistance = (_this8.instance.limit[_this8.directionAxis] - scrollBottom + _this8.windowHeight) * current.speed;
              break;

            case 'left':
              transformDistance = _this8.instance.scroll[_this8.directionAxis] * -current.speed;
              break;

            case 'elementLeft':
              transformDistance = (scrollRight - current.left) * -current.speed;
              break;

            case 'right':
              transformDistance = (_this8.instance.limit[_this8.directionAxis] - scrollRight + _this8.windowHeight) * current.speed;
              break;

            default:
              transformDistance = (scrollMiddle[_this8.directionAxis] - current.middle[_this8.directionAxis]) * -current.speed;
              break;
          }
        }

        if (current.sticky) {
          if (current.inView) {
            if (_this8.direction === 'horizontal') {
              transformDistance = _this8.instance.scroll.x - current.left + window.innerWidth;
            } else {
              transformDistance = _this8.instance.scroll.y - current.top + window.innerHeight;
            }
          } else {
            if (_this8.direction === 'horizontal') {
              if (_this8.instance.scroll.x < current.left - window.innerWidth && _this8.instance.scroll.x < current.left - window.innerWidth / 2) {
                transformDistance = 0;
              } else if (_this8.instance.scroll.x > current.right && _this8.instance.scroll.x > current.right + 100) {
                transformDistance = current.right - current.left + window.innerWidth;
              } else {
                transformDistance = false;
              }
            } else {
              if (_this8.instance.scroll.y < current.top - window.innerHeight && _this8.instance.scroll.y < current.top - window.innerHeight / 2) {
                transformDistance = 0;
              } else if (_this8.instance.scroll.y > current.bottom && _this8.instance.scroll.y > current.bottom + 100) {
                transformDistance = current.bottom - current.top + window.innerHeight;
              } else {
                transformDistance = false;
              }
            }
          }
        }

        if (transformDistance !== false) {
          if (current.direction === 'horizontal' || _this8.direction === 'horizontal' && current.direction !== 'vertical') {
            _this8.transform(current.el, transformDistance, 0, isForced ? false : current.delay);
          } else {
            _this8.transform(current.el, 0, transformDistance, isForced ? false : current.delay);
          }
        }
      });
    }
    /**
     * Scroll to a desired target.
     *
     * @param  Available options :
     *          target {node, string, "top", "bottom", int} - The DOM element we want to scroll to
     *          options {object} - Options object for additionnal settings.
     * @return {void}
     */

  }, {
    key: "scrollTo",
    value: function scrollTo(target) {
      var _this9 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; // Parse options

      var offset = parseInt(options.offset) || 0; // An offset to apply on top of given `target` or `sourceElem`'s target

      var duration = !isNaN(parseInt(options.duration)) ? parseInt(options.duration) : 1000; // Duration of the scroll animation in milliseconds

      var easing = options.easing || [0.25, 0.0, 0.35, 1.0]; // An array of 4 floats between 0 and 1 defining the bezier curve for the animation's easing. See http://greweb.me/bezier-easing-editor/example/

      var disableLerp = options.disableLerp ? true : false; // Lerp effect won't be applied if set to true

      var callback = options.callback ? options.callback : false; // function called when scrollTo completes (note that it won't wait for lerp to stabilize)

      easing = src$1.apply(void 0, _toConsumableArray(easing));

      if (typeof target === 'string') {
        // Selector or boundaries
        if (target === 'top') {
          target = 0;
        } else if (target === 'bottom') {
          target = this.instance.limit.y;
        } else if (target === 'left') {
          target = 0;
        } else if (target === 'right') {
          target = this.instance.limit.x;
        } else {
          target = document.querySelector(target); // If the query fails, abort

          if (!target) {
            return;
          }
        }
      } else if (typeof target === 'number') {
        // Absolute coordinate
        target = parseInt(target);
      } else if (target && target.tagName) ;else {
        console.warn('`target` parameter is not valid');
        return;
      } // We have a target that is not a coordinate yet, get it


      if (typeof target !== 'number') {
        // Verify the given target belongs to this scroll scope
        var targetInScope = getParents(target).includes(this.el);

        if (!targetInScope) {
          // If the target isn't inside our main element, abort any action
          return;
        } // Get target offset from top


        var targetBCR = target.getBoundingClientRect();
        var offsetTop = targetBCR.top;
        var offsetLeft = targetBCR.left; // Try and find the target's parent section

        var targetParents = getParents(target);
        var parentSection = targetParents.find(function (candidate) {
          return Object.entries(_this9.sections) // Get sections associative array as a regular array
          .map(function (_ref7) {
            var _ref8 = _slicedToArray(_ref7, 2),
                key = _ref8[0],
                section = _ref8[1];

            return section;
          }) // map to section only (we dont need the key here)
          .find(function (section) {
            return section.el == candidate;
          }); // finally find the section that matches the candidate
        });
        var parentSectionOffset = 0;

        if (parentSection) {
          parentSectionOffset = getTranslate(parentSection)[this.directionAxis]; // We got a parent section, store it's current offset to remove it later
        } else {
          // if no parent section is found we need to use instance scroll directly
          parentSectionOffset = -this.instance.scroll[this.directionAxis];
        } // Final value of scroll destination : offsetTop + (optional offset given in options) - (parent's section translate)


        if (this.direction === 'horizontal') {
          offset = offsetLeft + offset - parentSectionOffset;
        } else {
          offset = offsetTop + offset - parentSectionOffset;
        }
      } else {
        offset = target + offset;
      } // Actual scrollto
      // ==========================================================================
      // Setup


      var scrollStart = parseFloat(this.instance.delta[this.directionAxis]);
      var scrollTarget = Math.max(0, Math.min(offset, this.instance.limit[this.directionAxis])); // Make sure our target is in the scroll boundaries

      var scrollDiff = scrollTarget - scrollStart;

      var render = function render(p) {
        if (disableLerp) {
          if (_this9.direction === 'horizontal') {
            _this9.setScroll(scrollStart + scrollDiff * p, _this9.instance.delta.y);
          } else {
            _this9.setScroll(_this9.instance.delta.x, scrollStart + scrollDiff * p);
          }
        } else {
          _this9.instance.delta[_this9.directionAxis] = scrollStart + scrollDiff * p;
        }
      }; // Prepare the scroll


      this.animatingScroll = true; // This boolean allows to prevent `checkScroll()` from calling `stopScrolling` when the animation is slow (i.e. at the beginning of an EaseIn)

      this.stopScrolling(); // Stop any movement, allows to kill any other `scrollTo` still happening

      this.startScrolling(); // Restart the scroll
      // Start the animation loop

      var start = Date.now();

      var loop = function loop() {
        var p = (Date.now() - start) / duration; // Animation progress

        if (p > 1) {
          // Animation ends
          render(1);
          _this9.animatingScroll = false;
          if (duration == 0) _this9.update();
          if (callback) callback();
        } else {
          _this9.scrollToRaf = requestAnimationFrame(loop);
          render(easing(p));
        }
      };

      loop();
    }
  }, {
    key: "update",
    value: function update() {
      this.setScrollLimit();
      this.addSections();
      this.addElements();
      this.detectElements();
      this.updateScroll();
      this.transformElements(true);
      this.reinitScrollBar();
      this.checkScroll(true);
    }
  }, {
    key: "startScroll",
    value: function startScroll() {
      this.stop = false;
    }
  }, {
    key: "stopScroll",
    value: function stopScroll() {
      this.stop = true;
    }
  }, {
    key: "setScroll",
    value: function setScroll(x, y) {
      this.instance = _objectSpread2(_objectSpread2({}, this.instance), {}, {
        scroll: {
          x: x,
          y: y
        },
        delta: {
          x: x,
          y: y
        },
        speed: 0
      });
    }
  }, {
    key: "destroy",
    value: function destroy() {
      _get(_getPrototypeOf(_default.prototype), "destroy", this).call(this);

      this.stopScrolling();
      this.html.classList.remove(this.smoothClass);
      this.vs.destroy();
      this.destroyScrollBar();
      window.removeEventListener('keydown', this.checkKey, false);
    }
  }]);

  return _default;
}(_default);

var Smooth = /*#__PURE__*/function () {
  function Smooth() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Smooth);

    this.options = options; // Override default options with given ones

    Object.assign(this, defaults, options);
    this.smartphone = defaults.smartphone;
    if (options.smartphone) Object.assign(this.smartphone, options.smartphone);
    this.tablet = defaults.tablet;
    if (options.tablet) Object.assign(this.tablet, options.tablet);
    if (!this.smooth && this.direction == 'horizontal') console.warn('🚨 `smooth:false` & `horizontal` direction are not yet compatible');
    if (!this.tablet.smooth && this.tablet.direction == 'horizontal') console.warn('🚨 `smooth:false` & `horizontal` direction are not yet compatible (tablet)');
    if (!this.smartphone.smooth && this.smartphone.direction == 'horizontal') console.warn('🚨 `smooth:false` & `horizontal` direction are not yet compatible (smartphone)');
    this.init();
  }

  _createClass(Smooth, [{
    key: "init",
    value: function init() {
      this.options.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1 || window.innerWidth < this.tablet.breakpoint;
      this.options.isTablet = this.options.isMobile && window.innerWidth >= this.tablet.breakpoint;

      if (this.smooth && !this.options.isMobile || this.tablet.smooth && this.options.isTablet || this.smartphone.smooth && this.options.isMobile && !this.options.isTablet) {
        this.scroll = new _default$2(this.options);
      } else {
        this.scroll = new _default$1(this.options);
      }

      this.scroll.init();

      if (window.location.hash) {
        // Get the hash without the '#' and find the matching element
        var id = window.location.hash.slice(1, window.location.hash.length);
        var target = document.getElementById(id); // If found, scroll to the element

        if (target) this.scroll.scrollTo(target);
      }
    }
  }, {
    key: "update",
    value: function update() {
      this.scroll.update();
    }
  }, {
    key: "start",
    value: function start() {
      this.scroll.startScroll();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.scroll.stopScroll();
    }
  }, {
    key: "scrollTo",
    value: function scrollTo(target, options) {
      this.scroll.scrollTo(target, options);
    }
  }, {
    key: "setScroll",
    value: function setScroll(x, y) {
      this.scroll.setScroll(x, y);
    }
  }, {
    key: "on",
    value: function on(event, func) {
      this.scroll.setEvents(event, func);
    }
  }, {
    key: "off",
    value: function off(event, func) {
      this.scroll.unsetEvents(event, func);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.scroll.destroy();
    }
  }]);

  return Smooth;
}();

var Native = /*#__PURE__*/function () {
  function Native() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Native);

    this.options = options; // Override default options with given ones

    Object.assign(this, defaults, options);
    this.smartphone = defaults.smartphone;
    if (options.smartphone) Object.assign(this.smartphone, options.smartphone);
    this.tablet = defaults.tablet;
    if (options.tablet) Object.assign(this.tablet, options.tablet);
    this.init();
  }

  _createClass(Native, [{
    key: "init",
    value: function init() {
      this.scroll = new _default$1(this.options);
      this.scroll.init();

      if (window.location.hash) {
        // Get the hash without the '#' and find the matching element
        var id = window.location.hash.slice(1, window.location.hash.length);
        var target = document.getElementById(id); // If found, scroll to the element

        if (target) this.scroll.scrollTo(target);
      }
    }
  }, {
    key: "update",
    value: function update() {
      this.scroll.update();
    }
  }, {
    key: "start",
    value: function start() {
      this.scroll.startScroll();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.scroll.stopScroll();
    }
  }, {
    key: "scrollTo",
    value: function scrollTo(target, options) {
      this.scroll.scrollTo(target, options);
    }
  }, {
    key: "setScroll",
    value: function setScroll(x, y) {
      this.scroll.setScroll(x, y);
    }
  }, {
    key: "on",
    value: function on(event, func) {
      this.scroll.setEvents(event, func);
    }
  }, {
    key: "off",
    value: function off(event, func) {
      this.scroll.unsetEvents(event, func);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.scroll.destroy();
    }
  }]);

  return Native;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Smooth);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scroll": () => (/* binding */ scroll)
/* harmony export */ });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals */ "./js/globals.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_globals__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_responsive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/responsive */ "./js/utils/responsive.js");
/* harmony import */ var _classes_Scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/Scroll */ "./js/classes/Scroll.js");
////////////////////////////////////////////////////////////////
//
//  ©PRAKT
//
////////////////////////////////////////////////////////////////

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

_utils_responsive__WEBPACK_IMPORTED_MODULE_1__.cssSetTouchDevices('html', 'touch', 'no_touch'); ////////////////////////////////////////////////////////////////
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

const scroll = new _classes_Scroll__WEBPACK_IMPORTED_MODULE_2__["default"](); ////////////////////////////////////////////////////////////////
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
// export const videoblock = new Videoblock();
////////////////////////////////////////////////////////////////
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

window.addEventListener('load', () => {// loader.hideLoader();
  // scroll.init();
  // scroll.action();
  // raf.render();
});
const header = document.querySelector('#header');
window.addEventListener('scroll', e => {
  if (window.scrollY >= 200) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNIcW5CLE1BQU0sQ0FBQ3RuQixTQUFQLENBQWlCRSxNQUFqQixDQUF5QixRQUF6QjtFQUNIO0FBQ0osQ0FORCxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vemluZWJkamFyZGkvLi9qcy9jbGFzc2VzL1Njcm9sbC5qcyIsIndlYnBhY2s6Ly96aW5lYmRqYXJkaS8uL2pzL2dsb2JhbHMuanMiLCJ3ZWJwYWNrOi8vemluZWJkamFyZGkvLi9qcy91dGlscy9yZXNwb25zaXZlLmpzIiwid2VicGFjazovL3ppbmViZGphcmRpLy4vbm9kZV9tb2R1bGVzL2xvY29tb3RpdmUtc2Nyb2xsL2Rpc3QvbG9jb21vdGl2ZS1zY3JvbGwuZXNtLmpzIiwid2VicGFjazovL3ppbmViZGphcmRpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3ppbmViZGphcmRpL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3ppbmViZGphcmRpL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly96aW5lYmRqYXJkaS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3ppbmViZGphcmRpL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vemluZWJkamFyZGkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly96aW5lYmRqYXJkaS8uL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vXG4vLyAgwqlQUkFLVFxuLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuaW1wb3J0IExvY29tb3RpdmVTY3JvbGwgZnJvbSAnbG9jb21vdGl2ZS1zY3JvbGwnO1xuaW1wb3J0IGdzYXAgZnJvbSAnZ3NhcCc7XG4vLyBpbXBvcnQgeyBhbmltYXRpb24gfSBmcm9tICcuLi9pbmRleCc7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vXG4vLyAgU0NST0xMIExPQ09NT1RJVkVcbi8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcm9sbCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zY3JvbGw7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5zY3JvbGwgPSBuZXcgTG9jb21vdGl2ZVNjcm9sbCh7XG5cdFx0XHRlbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjcm9sbF93cmFwcGVyJyksXG5cdFx0XHRzbW9vdGg6IHRydWUsXG4gICAgICAgICAgICBsZXJwOiAuMDksXG5cdFx0XHRtdWx0aXBsaWVyOiAyLFxuICAgICAgICAgICAgc2Nyb2xsRnJvbUFueXdoZXJlOiB0cnVlLFxuICAgICAgICAgICAgZ2V0U3BlZWQ6IHRydWVcblx0XHR9KTtcbiAgICB9XG5cbiAgICByZXNldCgpIHtcbiAgICAgICAgLy8gdGhpcy5zY3JvbGwuc2Nyb2xsLmluc3RhbmNlLnNjcm9sbC55ID0gMDtcbiAgICAgICAgdGhpcy5zY3JvbGwudXBkYXRlKCk7XG4gICAgICAgIHRoaXMuc2Nyb2xsLnNjcm9sbFRvKCd0b3AnLCB7IGR1cmF0aW9uOiAwLCBkaXNhYmxlTGVycDogdHJ1ZSB9ICk7XG4gICAgICAgIHNldFRpbWVvdXQoICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsLnVwZGF0ZSgpO1xuICAgICAgICB9LCAyMDAgKTtcbiAgICB9XG5cbiAgICBzY3JvbGx0byggdGFyZ2V0ICkge1xuICAgICAgICB0aGlzLnNjcm9sbC5zY3JvbGxUbyggdGFyZ2V0LCB7XG4gICAgICAgICAgICAnY2FsbGJhY2snOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnZHVyYXRpb24nOiAxMDAwLFxuICAgICAgICAgICAgJ2Vhc2luZyc6IFswLjI1LCAwLjAwLCAwLjM1LCAxLjAwXSxcbiAgICAgICAgICAgICdkaXNhYmxlTGVycCc6IHRydWVcbiAgICAgICAgfSApO1xuICAgIH1cblxuICAgIGluZm8oKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2Nyb2xsLnNjcm9sbC5pbnN0YW5jZS5zY3JvbGwueSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2Nyb2xsLnNjcm9sbC5pbnN0YW5jZS5zcGVlZCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2Nyb2xsLnNjcm9sbCk7XG4gICAgfVxuXG4gICAgLy8gYWN0aW9uKCkge1xuICAgIC8vICAgICB0aGlzLnNjcm9sbC5vbignY2FsbCcsICggYSApID0+IHtcbiAgICAvLyAgICAgICAgIGxldCBjYWxsX29iaiA9IHRoaXMuc2Nyb2xsLnNjcm9sbC5jYWxsT2JqO1xuICAgIC8vICAgICAgICAgc3dpdGNoKCBhICl7XG4gICAgLy8gICAgICAgICAgICAgY2FzZSAnY190ZXh0JzogYW5pbWF0aW9uLnRleEluKCBjYWxsX29iaiApOyBicmVhaztcbiAgICAvLyAgICAgICAgICAgICBjYXNlICdjX2ltZyc6IGFuaW1hdGlvbi5pbWFnZUluKCBjYWxsX29iaiApOyBicmVhaztcbiAgICAvLyAgICAgICAgICAgICBjYXNlICdjX3ZpZGVvJzogYW5pbWF0aW9uLnZpZGVvSW4oIGNhbGxfb2JqICk7IGJyZWFrO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9ICk7XG4gICAgLy8gfVxufVxuIiwiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy9cbi8vICDCqVBSQUtUXG4vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vL1xuLy8gIEdMT0JBTFMgXG4vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vL1xuLy8gIFJFU1BPTlNJVkUgQlJFQUtQT0lOVFMgKEJBU0VEIE9OIEJPT1RTVFJBUClcbi8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmdsb2JhbC5SU1BfWFhTID0gMzIwO1xuZ2xvYmFsLlJTUF9YUyA9IDM3NTtcbmdsb2JhbC5SU1BfU00gPSA3Njg7XG5nbG9iYWwuUlNQX01EID0gOTkyO1xuZ2xvYmFsLlJTUF9MRyA9IDEyMDA7XG5nbG9iYWwuUlNQX1hMID0gMTQwMDtcbmdsb2JhbC5SU1BfWFhMID0gMTYwMDtcbiIsIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vXG4vLyAgwqlQUkFLVFxuLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy9cbi8vICBSRVNQT05TSVZFXG4vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vL1xuLy8gIFJFU1BPTlNJVkUgQlJFQUtQT0lOVFMgQ09OVFJPTFxuLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuZXhwb3J0IGZ1bmN0aW9uIHJzcCggdmFsXywgcmV2ZXJzZV8gKSB7XG4gICAgbGV0IHJ2ID0gJyc7XG4gICAgaWYoIHJldmVyc2VfICkgKCByZXZlcnNlXyA9PSB0cnVlICkgPyBydiA9IHRydWUgOiBydiA9IGZhbHNlO1xuICAgIGVsc2UgcnYgPSBmYWxzZTtcbiAgICBsZXQgdmFsID0gdmFsXztcbiAgICBsZXQgdyA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIGlmKCB3ID4gdmFsICYmICFydiApIHJldHVybiB0cnVlO1xuXHRpZiggdyA8IHZhbCAmJiBydiApIHJldHVybiB0cnVlO1xufVxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vL1xuLy8gIElTIFRPVUNIXG4vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNUb3VjaCgpIHtcbiAgICBsZXQgdG91Y2g7XG4gICAgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCBcbiAgICAgICAgfHwgbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzID4gMCBcbiAgICAgICAgfHwgbmF2aWdhdG9yLm1zTWF4VG91Y2hQb2ludHMgPiAwICkgPyB0b3VjaCA9IHRydWUgOiB0b3VjaCA9IGZhbHNlO1xuICAgIHJldHVybiB0b3VjaDtcbn1cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy9cbi8vICBTRVQgVE9VQ0ggLyBOTyBUT1VDSCBDTEFTU0VTXG4vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5leHBvcnQgZnVuY3Rpb24gY3NzU2V0VG91Y2hEZXZpY2VzKCB0YWdfLCB0b3VjaF8sIG5vX3RvdWNoXyApIHtcbiAgICBsZXQgdG91Y2g7XG4gICAgbGV0IHRhZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIHRhZ18gKTtcbiAgICBsZXQgdG91Y2hfY2xhc3MgPSB0b3VjaF87XG4gICAgbGV0IG5vX3RvdWNoX2NsYXNzID0gbm9fdG91Y2hfO1xuICAgIHRvdWNoID0gaXNUb3VjaCgpO1xuICAgIGlmKCB0b3VjaCApIHtcbiAgICAgICAgdGFnLmNsYXNzTGlzdC5hZGQoIHRvdWNoX2NsYXNzICk7XG4gICAgICAgIHRhZy5jbGFzc0xpc3QucmVtb3ZlKCBub190b3VjaF9jbGFzcyApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRhZy5jbGFzc0xpc3QuYWRkKCBub190b3VjaF9jbGFzcyApO1xuICAgICAgICB0YWcuY2xhc3NMaXN0LnJlbW92ZSggdG91Y2hfY2xhc3MgKTtcbiAgICB9XG59IiwiLyogbG9jb21vdGl2ZS1zY3JvbGwgdjQuMS4zIHwgTUlUIExpY2Vuc2UgfCBodHRwczovL2dpdGh1Yi5jb20vbG9jb21vdGl2ZW10bC9sb2NvbW90aXZlLXNjcm9sbCAqL1xuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpO1xuICAgIGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlO1xuICAgIH0pO1xuICAgIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTtcbiAgfVxuXG4gIHJldHVybiBrZXlzO1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkMih0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTtcblxuICAgIGlmIChpICUgMikge1xuICAgICAgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlO1xuICBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlO1xuICBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlO1xuXG4gIHRyeSB7XG4gICAgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9XG5cbiAgcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7XG4gIHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpO1xuXG4gIHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHtcbiAgICB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksXG4gICAgICAgIHJlc3VsdDtcblxuICAgIGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7XG4gICAgICB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yO1xuXG4gICAgICByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBfc3VwZXJQcm9wQmFzZShvYmplY3QsIHByb3BlcnR5KSB7XG4gIHdoaWxlICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpKSB7XG4gICAgb2JqZWN0ID0gX2dldFByb3RvdHlwZU9mKG9iamVjdCk7XG4gICAgaWYgKG9iamVjdCA9PT0gbnVsbCkgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gb2JqZWN0O1xufVxuXG5mdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBSZWZsZWN0LmdldCkge1xuICAgIF9nZXQgPSBSZWZsZWN0LmdldDtcbiAgfSBlbHNlIHtcbiAgICBfZ2V0ID0gZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICAgICAgdmFyIGJhc2UgPSBfc3VwZXJQcm9wQmFzZSh0YXJnZXQsIHByb3BlcnR5KTtcblxuICAgICAgaWYgKCFiYXNlKSByZXR1cm47XG4gICAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZSwgcHJvcGVydHkpO1xuXG4gICAgICBpZiAoZGVzYy5nZXQpIHtcbiAgICAgICAgcmV0dXJuIGRlc2MuZ2V0LmNhbGwocmVjZWl2ZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGVzYy52YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIgfHwgdGFyZ2V0KTtcbn1cblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7XG59XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47XG4gIHZhciBfYXJyID0gW107XG4gIHZhciBfbiA9IHRydWU7XG4gIHZhciBfZCA9IGZhbHNlO1xuICB2YXIgX2UgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZCA9IHRydWU7XG4gICAgX2UgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2Fycjtcbn1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIGFycjJbaV0gPSBhcnJbaV07XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbnZhciBkZWZhdWx0cyA9IHtcbiAgZWw6IGRvY3VtZW50LFxuICBuYW1lOiAnc2Nyb2xsJyxcbiAgb2Zmc2V0OiBbMCwgMF0sXG4gIHJlcGVhdDogZmFsc2UsXG4gIHNtb290aDogZmFsc2UsXG4gIGluaXRQb3NpdGlvbjoge1xuICAgIHg6IDAsXG4gICAgeTogMFxuICB9LFxuICBkaXJlY3Rpb246ICd2ZXJ0aWNhbCcsXG4gIGdlc3R1cmVEaXJlY3Rpb246ICd2ZXJ0aWNhbCcsXG4gIHJlbG9hZE9uQ29udGV4dENoYW5nZTogZmFsc2UsXG4gIGxlcnA6IDAuMSxcbiAgXCJjbGFzc1wiOiAnaXMtaW52aWV3JyxcbiAgc2Nyb2xsYmFyQ29udGFpbmVyOiBmYWxzZSxcbiAgc2Nyb2xsYmFyQ2xhc3M6ICdjLXNjcm9sbGJhcicsXG4gIHNjcm9sbGluZ0NsYXNzOiAnaGFzLXNjcm9sbC1zY3JvbGxpbmcnLFxuICBkcmFnZ2luZ0NsYXNzOiAnaGFzLXNjcm9sbC1kcmFnZ2luZycsXG4gIHNtb290aENsYXNzOiAnaGFzLXNjcm9sbC1zbW9vdGgnLFxuICBpbml0Q2xhc3M6ICdoYXMtc2Nyb2xsLWluaXQnLFxuICBnZXRTcGVlZDogZmFsc2UsXG4gIGdldERpcmVjdGlvbjogZmFsc2UsXG4gIHNjcm9sbEZyb21Bbnl3aGVyZTogZmFsc2UsXG4gIG11bHRpcGxpZXI6IDEsXG4gIGZpcmVmb3hNdWx0aXBsaWVyOiA1MCxcbiAgdG91Y2hNdWx0aXBsaWVyOiAyLFxuICByZXNldE5hdGl2ZVNjcm9sbDogdHJ1ZSxcbiAgdGFibGV0OiB7XG4gICAgc21vb3RoOiBmYWxzZSxcbiAgICBkaXJlY3Rpb246ICd2ZXJ0aWNhbCcsXG4gICAgZ2VzdHVyZURpcmVjdGlvbjogJ3ZlcnRpY2FsJyxcbiAgICBicmVha3BvaW50OiAxMDI0XG4gIH0sXG4gIHNtYXJ0cGhvbmU6IHtcbiAgICBzbW9vdGg6IGZhbHNlLFxuICAgIGRpcmVjdGlvbjogJ3ZlcnRpY2FsJyxcbiAgICBnZXN0dXJlRGlyZWN0aW9uOiAndmVydGljYWwnXG4gIH1cbn07XG5cbnZhciBfZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIF9kZWZhdWx0KCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBfZGVmYXVsdCk7XG5cbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICB0aGlzLnNtYXJ0cGhvbmUgPSBkZWZhdWx0cy5zbWFydHBob25lO1xuICAgIGlmIChvcHRpb25zLnNtYXJ0cGhvbmUpIE9iamVjdC5hc3NpZ24odGhpcy5zbWFydHBob25lLCBvcHRpb25zLnNtYXJ0cGhvbmUpO1xuICAgIHRoaXMudGFibGV0ID0gZGVmYXVsdHMudGFibGV0O1xuICAgIGlmIChvcHRpb25zLnRhYmxldCkgT2JqZWN0LmFzc2lnbih0aGlzLnRhYmxldCwgb3B0aW9ucy50YWJsZXQpO1xuICAgIHRoaXMubmFtZXNwYWNlID0gJ2xvY29tb3RpdmUnO1xuICAgIHRoaXMuaHRtbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICB0aGlzLndpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICB0aGlzLndpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgdGhpcy53aW5kb3dNaWRkbGUgPSB7XG4gICAgICB4OiB0aGlzLndpbmRvd1dpZHRoIC8gMixcbiAgICAgIHk6IHRoaXMud2luZG93SGVpZ2h0IC8gMlxuICAgIH07XG4gICAgdGhpcy5lbHMgPSB7fTtcbiAgICB0aGlzLmN1cnJlbnRFbGVtZW50cyA9IHt9O1xuICAgIHRoaXMubGlzdGVuZXJzID0ge307XG4gICAgdGhpcy5oYXNTY3JvbGxUaWNraW5nID0gZmFsc2U7XG4gICAgdGhpcy5oYXNDYWxsRXZlbnRTZXQgPSBmYWxzZTtcbiAgICB0aGlzLmNoZWNrU2Nyb2xsID0gdGhpcy5jaGVja1Njcm9sbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2hlY2tSZXNpemUgPSB0aGlzLmNoZWNrUmVzaXplLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaGVja0V2ZW50ID0gdGhpcy5jaGVja0V2ZW50LmJpbmQodGhpcyk7XG4gICAgdGhpcy5pbnN0YW5jZSA9IHtcbiAgICAgIHNjcm9sbDoge1xuICAgICAgICB4OiAwLFxuICAgICAgICB5OiAwXG4gICAgICB9LFxuICAgICAgbGltaXQ6IHtcbiAgICAgICAgeDogdGhpcy5odG1sLm9mZnNldFdpZHRoLFxuICAgICAgICB5OiB0aGlzLmh0bWwub2Zmc2V0SGVpZ2h0XG4gICAgICB9LFxuICAgICAgY3VycmVudEVsZW1lbnRzOiB0aGlzLmN1cnJlbnRFbGVtZW50c1xuICAgIH07XG5cbiAgICBpZiAodGhpcy5pc01vYmlsZSkge1xuICAgICAgaWYgKHRoaXMuaXNUYWJsZXQpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gJ3RhYmxldCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSAnc21hcnRwaG9uZSc7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29udGV4dCA9ICdkZXNrdG9wJztcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc01vYmlsZSkgdGhpcy5kaXJlY3Rpb24gPSB0aGlzW3RoaXMuY29udGV4dF0uZGlyZWN0aW9uO1xuXG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIHRoaXMuZGlyZWN0aW9uQXhpcyA9ICd4JztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kaXJlY3Rpb25BeGlzID0gJ3knO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmdldERpcmVjdGlvbikge1xuICAgICAgdGhpcy5pbnN0YW5jZS5kaXJlY3Rpb24gPSBudWxsO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmdldERpcmVjdGlvbikge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zcGVlZCA9IDA7XG4gICAgfVxuXG4gICAgdGhpcy5odG1sLmNsYXNzTGlzdC5hZGQodGhpcy5pbml0Q2xhc3MpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmNoZWNrUmVzaXplLCBmYWxzZSk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoX2RlZmF1bHQsIFt7XG4gICAga2V5OiBcImluaXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgIHRoaXMuaW5pdEV2ZW50cygpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjaGVja1Njcm9sbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjaGVja1Njcm9sbCgpIHtcbiAgICAgIHRoaXMuZGlzcGF0Y2hTY3JvbGwoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY2hlY2tSZXNpemVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2hlY2tSZXNpemUoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICBpZiAoIXRoaXMucmVzaXplVGljaykge1xuICAgICAgICB0aGlzLnJlc2l6ZVRpY2sgPSB0cnVlO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzLnJlc2l6ZSgpO1xuXG4gICAgICAgICAgX3RoaXMucmVzaXplVGljayA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVzaXplXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2l6ZSgpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwiY2hlY2tDb250ZXh0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNoZWNrQ29udGV4dCgpIHtcbiAgICAgIGlmICghdGhpcy5yZWxvYWRPbkNvbnRleHRDaGFuZ2UpIHJldHVybjtcbiAgICAgIHRoaXMuaXNNb2JpbGUgPSAvQW5kcm9pZHxpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgfHwgbmF2aWdhdG9yLnBsYXRmb3JtID09PSAnTWFjSW50ZWwnICYmIG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyA+IDEgfHwgdGhpcy53aW5kb3dXaWR0aCA8IHRoaXMudGFibGV0LmJyZWFrcG9pbnQ7XG4gICAgICB0aGlzLmlzVGFibGV0ID0gdGhpcy5pc01vYmlsZSAmJiB0aGlzLndpbmRvd1dpZHRoID49IHRoaXMudGFibGV0LmJyZWFrcG9pbnQ7XG4gICAgICB2YXIgb2xkQ29udGV4dCA9IHRoaXMuY29udGV4dDtcblxuICAgICAgaWYgKHRoaXMuaXNNb2JpbGUpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNUYWJsZXQpIHtcbiAgICAgICAgICB0aGlzLmNvbnRleHQgPSAndGFibGV0JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmNvbnRleHQgPSAnc21hcnRwaG9uZSc7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29udGV4dCA9ICdkZXNrdG9wJztcbiAgICAgIH1cblxuICAgICAgaWYgKG9sZENvbnRleHQgIT0gdGhpcy5jb250ZXh0KSB7XG4gICAgICAgIHZhciBvbGRTbW9vdGggPSBvbGRDb250ZXh0ID09ICdkZXNrdG9wJyA/IHRoaXMuc21vb3RoIDogdGhpc1tvbGRDb250ZXh0XS5zbW9vdGg7XG4gICAgICAgIHZhciBuZXdTbW9vdGggPSB0aGlzLmNvbnRleHQgPT0gJ2Rlc2t0b3AnID8gdGhpcy5zbW9vdGggOiB0aGlzW3RoaXMuY29udGV4dF0uc21vb3RoO1xuICAgICAgICBpZiAob2xkU21vb3RoICE9IG5ld1Ntb290aCkgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpbml0RXZlbnRzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGluaXRFdmVudHMoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdGhpcy5zY3JvbGxUb0VscyA9IHRoaXMuZWwucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLVwiLmNvbmNhdCh0aGlzLm5hbWUsIFwiLXRvXVwiKSk7XG4gICAgICB0aGlzLnNldFNjcm9sbFRvID0gdGhpcy5zZXRTY3JvbGxUby5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy5zY3JvbGxUb0Vscy5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF90aGlzMi5zZXRTY3JvbGxUbywgZmFsc2UpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldFNjcm9sbFRvXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFNjcm9sbFRvKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5zY3JvbGxUbyhldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtXCIuY29uY2F0KHRoaXMubmFtZSwgXCItaHJlZlwiKSkgfHwgZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSwge1xuICAgICAgICBvZmZzZXQ6IGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1cIi5jb25jYXQodGhpcy5uYW1lLCBcIi1vZmZzZXRcIikpXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYWRkRWxlbWVudHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkRWxlbWVudHMoKSB7fVxuICB9LCB7XG4gICAga2V5OiBcImRldGVjdEVsZW1lbnRzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRldGVjdEVsZW1lbnRzKGhhc0NhbGxFdmVudFNldCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIHZhciBzY3JvbGxUb3AgPSB0aGlzLmluc3RhbmNlLnNjcm9sbC55O1xuICAgICAgdmFyIHNjcm9sbEJvdHRvbSA9IHNjcm9sbFRvcCArIHRoaXMud2luZG93SGVpZ2h0O1xuICAgICAgdmFyIHNjcm9sbExlZnQgPSB0aGlzLmluc3RhbmNlLnNjcm9sbC54O1xuICAgICAgdmFyIHNjcm9sbFJpZ2h0ID0gc2Nyb2xsTGVmdCArIHRoaXMud2luZG93V2lkdGg7XG4gICAgICBPYmplY3QuZW50cmllcyh0aGlzLmVscykuZm9yRWFjaChmdW5jdGlvbiAoX3JlZikge1xuICAgICAgICB2YXIgX3JlZjIgPSBfc2xpY2VkVG9BcnJheShfcmVmLCAyKSxcbiAgICAgICAgICAgIGkgPSBfcmVmMlswXSxcbiAgICAgICAgICAgIGVsID0gX3JlZjJbMV07XG5cbiAgICAgICAgaWYgKGVsICYmICghZWwuaW5WaWV3IHx8IGhhc0NhbGxFdmVudFNldCkpIHtcbiAgICAgICAgICBpZiAoX3RoaXMzLmRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsUmlnaHQgPj0gZWwubGVmdCAmJiBzY3JvbGxMZWZ0IDwgZWwucmlnaHQpIHtcbiAgICAgICAgICAgICAgX3RoaXMzLnNldEluVmlldyhlbCwgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChzY3JvbGxCb3R0b20gPj0gZWwudG9wICYmIHNjcm9sbFRvcCA8IGVsLmJvdHRvbSkge1xuICAgICAgICAgICAgICBfdGhpczMuc2V0SW5WaWV3KGVsLCBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZWwgJiYgZWwuaW5WaWV3KSB7XG4gICAgICAgICAgaWYgKF90aGlzMy5kaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgdmFyIHdpZHRoID0gZWwucmlnaHQgLSBlbC5sZWZ0O1xuICAgICAgICAgICAgZWwucHJvZ3Jlc3MgPSAoX3RoaXMzLmluc3RhbmNlLnNjcm9sbC54IC0gKGVsLmxlZnQgLSBfdGhpczMud2luZG93V2lkdGgpKSAvICh3aWR0aCArIF90aGlzMy53aW5kb3dXaWR0aCk7XG5cbiAgICAgICAgICAgIGlmIChzY3JvbGxSaWdodCA8IGVsLmxlZnQgfHwgc2Nyb2xsTGVmdCA+IGVsLnJpZ2h0KSB7XG4gICAgICAgICAgICAgIF90aGlzMy5zZXRPdXRPZlZpZXcoZWwsIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgaGVpZ2h0ID0gZWwuYm90dG9tIC0gZWwudG9wO1xuICAgICAgICAgICAgZWwucHJvZ3Jlc3MgPSAoX3RoaXMzLmluc3RhbmNlLnNjcm9sbC55IC0gKGVsLnRvcCAtIF90aGlzMy53aW5kb3dIZWlnaHQpKSAvIChoZWlnaHQgKyBfdGhpczMud2luZG93SGVpZ2h0KTtcblxuICAgICAgICAgICAgaWYgKHNjcm9sbEJvdHRvbSA8IGVsLnRvcCB8fCBzY3JvbGxUb3AgPiBlbC5ib3R0b20pIHtcbiAgICAgICAgICAgICAgX3RoaXMzLnNldE91dE9mVmlldyhlbCwgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTsgLy8gdGhpcy5lbHMgPSB0aGlzLmVscy5maWx0ZXIoKGN1cnJlbnQsIGkpID0+IHtcbiAgICAgIC8vICAgICByZXR1cm4gY3VycmVudCAhPT0gbnVsbDtcbiAgICAgIC8vIH0pO1xuXG4gICAgICB0aGlzLmhhc1Njcm9sbFRpY2tpbmcgPSBmYWxzZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0SW5WaWV3XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldEluVmlldyhjdXJyZW50LCBpKSB7XG4gICAgICB0aGlzLmVsc1tpXS5pblZpZXcgPSB0cnVlO1xuICAgICAgY3VycmVudC5lbC5jbGFzc0xpc3QuYWRkKGN1cnJlbnRbXCJjbGFzc1wiXSk7XG4gICAgICB0aGlzLmN1cnJlbnRFbGVtZW50c1tpXSA9IGN1cnJlbnQ7XG5cbiAgICAgIGlmIChjdXJyZW50LmNhbGwgJiYgdGhpcy5oYXNDYWxsRXZlbnRTZXQpIHtcbiAgICAgICAgdGhpcy5kaXNwYXRjaENhbGwoY3VycmVudCwgJ2VudGVyJyk7XG5cbiAgICAgICAgaWYgKCFjdXJyZW50LnJlcGVhdCkge1xuICAgICAgICAgIHRoaXMuZWxzW2ldLmNhbGwgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSAvLyBpZiAoIWN1cnJlbnQucmVwZWF0ICYmICFjdXJyZW50LnNwZWVkICYmICFjdXJyZW50LnN0aWNreSkge1xuICAgICAgLy8gICAgIGlmICghY3VycmVudC5jYWxsIHx8IGN1cnJlbnQuY2FsbCAmJiB0aGlzLmhhc0NhbGxFdmVudFNldCkge1xuICAgICAgLy8gICAgICAgIHRoaXMuZWxzW2ldID0gbnVsbFxuICAgICAgLy8gICAgIH1cbiAgICAgIC8vIH1cblxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRPdXRPZlZpZXdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0T3V0T2ZWaWV3KGN1cnJlbnQsIGkpIHtcbiAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICAvLyBpZiAoY3VycmVudC5yZXBlYXQgfHwgY3VycmVudC5zcGVlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmVsc1tpXS5pblZpZXcgPSBmYWxzZTsgLy8gfVxuXG4gICAgICBPYmplY3Qua2V5cyh0aGlzLmN1cnJlbnRFbGVtZW50cykuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgZWwgPT09IGkgJiYgZGVsZXRlIF90aGlzNC5jdXJyZW50RWxlbWVudHNbZWxdO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChjdXJyZW50LmNhbGwgJiYgdGhpcy5oYXNDYWxsRXZlbnRTZXQpIHtcbiAgICAgICAgdGhpcy5kaXNwYXRjaENhbGwoY3VycmVudCwgJ2V4aXQnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGN1cnJlbnQucmVwZWF0KSB7XG4gICAgICAgIGN1cnJlbnQuZWwuY2xhc3NMaXN0LnJlbW92ZShjdXJyZW50W1wiY2xhc3NcIl0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJkaXNwYXRjaENhbGxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGlzcGF0Y2hDYWxsKGN1cnJlbnQsIHdheSkge1xuICAgICAgdGhpcy5jYWxsV2F5ID0gd2F5O1xuICAgICAgdGhpcy5jYWxsVmFsdWUgPSBjdXJyZW50LmNhbGwuc3BsaXQoJywnKS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0udHJpbSgpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmNhbGxPYmogPSBjdXJyZW50O1xuICAgICAgaWYgKHRoaXMuY2FsbFZhbHVlLmxlbmd0aCA9PSAxKSB0aGlzLmNhbGxWYWx1ZSA9IHRoaXMuY2FsbFZhbHVlWzBdO1xuICAgICAgdmFyIGNhbGxFdmVudCA9IG5ldyBFdmVudCh0aGlzLm5hbWVzcGFjZSArICdjYWxsJyk7XG4gICAgICB0aGlzLmVsLmRpc3BhdGNoRXZlbnQoY2FsbEV2ZW50KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZGlzcGF0Y2hTY3JvbGxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGlzcGF0Y2hTY3JvbGwoKSB7XG4gICAgICB2YXIgc2Nyb2xsRXZlbnQgPSBuZXcgRXZlbnQodGhpcy5uYW1lc3BhY2UgKyAnc2Nyb2xsJyk7XG4gICAgICB0aGlzLmVsLmRpc3BhdGNoRXZlbnQoc2Nyb2xsRXZlbnQpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRFdmVudHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0RXZlbnRzKGV2ZW50LCBmdW5jKSB7XG4gICAgICBpZiAoIXRoaXMubGlzdGVuZXJzW2V2ZW50XSkge1xuICAgICAgICB0aGlzLmxpc3RlbmVyc1tldmVudF0gPSBbXTtcbiAgICAgIH1cblxuICAgICAgdmFyIGxpc3QgPSB0aGlzLmxpc3RlbmVyc1tldmVudF07XG4gICAgICBsaXN0LnB1c2goZnVuYyk7XG5cbiAgICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIodGhpcy5uYW1lc3BhY2UgKyBldmVudCwgdGhpcy5jaGVja0V2ZW50LCBmYWxzZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChldmVudCA9PT0gJ2NhbGwnKSB7XG4gICAgICAgIHRoaXMuaGFzQ2FsbEV2ZW50U2V0ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5kZXRlY3RFbGVtZW50cyh0cnVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidW5zZXRFdmVudHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdW5zZXRFdmVudHMoZXZlbnQsIGZ1bmMpIHtcbiAgICAgIGlmICghdGhpcy5saXN0ZW5lcnNbZXZlbnRdKSByZXR1cm47XG4gICAgICB2YXIgbGlzdCA9IHRoaXMubGlzdGVuZXJzW2V2ZW50XTtcbiAgICAgIHZhciBpbmRleCA9IGxpc3QuaW5kZXhPZihmdW5jKTtcbiAgICAgIGlmIChpbmRleCA8IDApIHJldHVybjtcbiAgICAgIGxpc3Quc3BsaWNlKGluZGV4LCAxKTtcblxuICAgICAgaWYgKGxpc3QuaW5kZXggPT09IDApIHtcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMubmFtZXNwYWNlICsgZXZlbnQsIHRoaXMuY2hlY2tFdmVudCwgZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjaGVja0V2ZW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNoZWNrRXZlbnQoZXZlbnQpIHtcbiAgICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgICB2YXIgbmFtZSA9IGV2ZW50LnR5cGUucmVwbGFjZSh0aGlzLm5hbWVzcGFjZSwgJycpO1xuICAgICAgdmFyIGxpc3QgPSB0aGlzLmxpc3RlbmVyc1tuYW1lXTtcbiAgICAgIGlmICghbGlzdCB8fCBsaXN0Lmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgICAgbGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChmdW5jKSB7XG4gICAgICAgIHN3aXRjaCAobmFtZSkge1xuICAgICAgICAgIGNhc2UgJ3Njcm9sbCc6XG4gICAgICAgICAgICByZXR1cm4gZnVuYyhfdGhpczUuaW5zdGFuY2UpO1xuXG4gICAgICAgICAgY2FzZSAnY2FsbCc6XG4gICAgICAgICAgICByZXR1cm4gZnVuYyhfdGhpczUuY2FsbFZhbHVlLCBfdGhpczUuY2FsbFdheSwgX3RoaXM1LmNhbGxPYmopO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBmdW5jKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzdGFydFNjcm9sbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdGFydFNjcm9sbCgpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwic3RvcFNjcm9sbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdG9wU2Nyb2xsKCkge31cbiAgfSwge1xuICAgIGtleTogXCJzZXRTY3JvbGxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0U2Nyb2xsKHgsIHkpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsID0ge1xuICAgICAgICB4OiAwLFxuICAgICAgICB5OiAwXG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJkZXN0cm95XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICB2YXIgX3RoaXM2ID0gdGhpcztcblxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuY2hlY2tSZXNpemUsIGZhbHNlKTtcbiAgICAgIE9iamVjdC5rZXlzKHRoaXMubGlzdGVuZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBfdGhpczYuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihfdGhpczYubmFtZXNwYWNlICsgZXZlbnQsIF90aGlzNi5jaGVja0V2ZW50LCBmYWxzZSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMubGlzdGVuZXJzID0ge307XG4gICAgICB0aGlzLnNjcm9sbFRvRWxzLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX3RoaXM2LnNldFNjcm9sbFRvLCBmYWxzZSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuaHRtbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuaW5pdENsYXNzKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gX2RlZmF1bHQ7XG59KCk7XG5cbnZhciBjb21tb25qc0dsb2JhbCA9IHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbFRoaXMgOiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHt9O1xuXG5mdW5jdGlvbiBjcmVhdGVDb21tb25qc01vZHVsZShmbiwgbW9kdWxlKSB7XG5cdHJldHVybiBtb2R1bGUgPSB7IGV4cG9ydHM6IHt9IH0sIGZuKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMpLCBtb2R1bGUuZXhwb3J0cztcbn1cblxudmFyIHNtb290aHNjcm9sbCA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUsIGV4cG9ydHMpIHtcbi8qIHNtb290aHNjcm9sbCB2MC40LjQgLSAyMDE5IC0gRHVzdGFuIEthc3RlbiwgSmVyZW1pYXMgTWVuaWNoZWxsaSAtIE1JVCBMaWNlbnNlICovXG4oZnVuY3Rpb24gKCkge1xuXG4gIC8vIHBvbHlmaWxsXG4gIGZ1bmN0aW9uIHBvbHlmaWxsKCkge1xuICAgIC8vIGFsaWFzZXNcbiAgICB2YXIgdyA9IHdpbmRvdztcbiAgICB2YXIgZCA9IGRvY3VtZW50O1xuXG4gICAgLy8gcmV0dXJuIGlmIHNjcm9sbCBiZWhhdmlvciBpcyBzdXBwb3J0ZWQgYW5kIHBvbHlmaWxsIGlzIG5vdCBmb3JjZWRcbiAgICBpZiAoXG4gICAgICAnc2Nyb2xsQmVoYXZpb3InIGluIGQuZG9jdW1lbnRFbGVtZW50LnN0eWxlICYmXG4gICAgICB3Ll9fZm9yY2VTbW9vdGhTY3JvbGxQb2x5ZmlsbF9fICE9PSB0cnVlXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gZ2xvYmFsc1xuICAgIHZhciBFbGVtZW50ID0gdy5IVE1MRWxlbWVudCB8fCB3LkVsZW1lbnQ7XG4gICAgdmFyIFNDUk9MTF9USU1FID0gNDY4O1xuXG4gICAgLy8gb2JqZWN0IGdhdGhlcmluZyBvcmlnaW5hbCBzY3JvbGwgbWV0aG9kc1xuICAgIHZhciBvcmlnaW5hbCA9IHtcbiAgICAgIHNjcm9sbDogdy5zY3JvbGwgfHwgdy5zY3JvbGxUbyxcbiAgICAgIHNjcm9sbEJ5OiB3LnNjcm9sbEJ5LFxuICAgICAgZWxlbWVudFNjcm9sbDogRWxlbWVudC5wcm90b3R5cGUuc2Nyb2xsIHx8IHNjcm9sbEVsZW1lbnQsXG4gICAgICBzY3JvbGxJbnRvVmlldzogRWxlbWVudC5wcm90b3R5cGUuc2Nyb2xsSW50b1ZpZXdcbiAgICB9O1xuXG4gICAgLy8gZGVmaW5lIHRpbWluZyBtZXRob2RcbiAgICB2YXIgbm93ID1cbiAgICAgIHcucGVyZm9ybWFuY2UgJiYgdy5wZXJmb3JtYW5jZS5ub3dcbiAgICAgICAgPyB3LnBlcmZvcm1hbmNlLm5vdy5iaW5kKHcucGVyZm9ybWFuY2UpXG4gICAgICAgIDogRGF0ZS5ub3c7XG5cbiAgICAvKipcbiAgICAgKiBpbmRpY2F0ZXMgaWYgYSB0aGUgY3VycmVudCBicm93c2VyIGlzIG1hZGUgYnkgTWljcm9zb2Z0XG4gICAgICogQG1ldGhvZCBpc01pY3Jvc29mdEJyb3dzZXJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdXNlckFnZW50XG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgZnVuY3Rpb24gaXNNaWNyb3NvZnRCcm93c2VyKHVzZXJBZ2VudCkge1xuICAgICAgdmFyIHVzZXJBZ2VudFBhdHRlcm5zID0gWydNU0lFICcsICdUcmlkZW50LycsICdFZGdlLyddO1xuXG4gICAgICByZXR1cm4gbmV3IFJlZ0V4cCh1c2VyQWdlbnRQYXR0ZXJucy5qb2luKCd8JykpLnRlc3QodXNlckFnZW50KTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIElFIGhhcyByb3VuZGluZyBidWcgcm91bmRpbmcgZG93biBjbGllbnRIZWlnaHQgYW5kIGNsaWVudFdpZHRoIGFuZFxuICAgICAqIHJvdW5kaW5nIHVwIHNjcm9sbEhlaWdodCBhbmQgc2Nyb2xsV2lkdGggY2F1c2luZyBmYWxzZSBwb3NpdGl2ZXNcbiAgICAgKiBvbiBoYXNTY3JvbGxhYmxlU3BhY2VcbiAgICAgKi9cbiAgICB2YXIgUk9VTkRJTkdfVE9MRVJBTkNFID0gaXNNaWNyb3NvZnRCcm93c2VyKHcubmF2aWdhdG9yLnVzZXJBZ2VudCkgPyAxIDogMDtcblxuICAgIC8qKlxuICAgICAqIGNoYW5nZXMgc2Nyb2xsIHBvc2l0aW9uIGluc2lkZSBhbiBlbGVtZW50XG4gICAgICogQG1ldGhvZCBzY3JvbGxFbGVtZW50XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHhcbiAgICAgKiBAcGFyYW0ge051bWJlcn0geVxuICAgICAqIEByZXR1cm5zIHt1bmRlZmluZWR9XG4gICAgICovXG4gICAgZnVuY3Rpb24gc2Nyb2xsRWxlbWVudCh4LCB5KSB7XG4gICAgICB0aGlzLnNjcm9sbExlZnQgPSB4O1xuICAgICAgdGhpcy5zY3JvbGxUb3AgPSB5O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHJldHVybnMgcmVzdWx0IG9mIGFwcGx5aW5nIGVhc2UgbWF0aCBmdW5jdGlvbiB0byBhIG51bWJlclxuICAgICAqIEBtZXRob2QgZWFzZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBrXG4gICAgICogQHJldHVybnMge051bWJlcn1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBlYXNlKGspIHtcbiAgICAgIHJldHVybiAwLjUgKiAoMSAtIE1hdGguY29zKE1hdGguUEkgKiBrKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogaW5kaWNhdGVzIGlmIGEgc21vb3RoIGJlaGF2aW9yIHNob3VsZCBiZSBhcHBsaWVkXG4gICAgICogQG1ldGhvZCBzaG91bGRCYWlsT3V0XG4gICAgICogQHBhcmFtIHtOdW1iZXJ8T2JqZWN0fSBmaXJzdEFyZ1xuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHNob3VsZEJhaWxPdXQoZmlyc3RBcmcpIHtcbiAgICAgIGlmIChcbiAgICAgICAgZmlyc3RBcmcgPT09IG51bGwgfHxcbiAgICAgICAgdHlwZW9mIGZpcnN0QXJnICE9PSAnb2JqZWN0JyB8fFxuICAgICAgICBmaXJzdEFyZy5iZWhhdmlvciA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICAgIGZpcnN0QXJnLmJlaGF2aW9yID09PSAnYXV0bycgfHxcbiAgICAgICAgZmlyc3RBcmcuYmVoYXZpb3IgPT09ICdpbnN0YW50J1xuICAgICAgKSB7XG4gICAgICAgIC8vIGZpcnN0IGFyZ3VtZW50IGlzIG5vdCBhbiBvYmplY3QvbnVsbFxuICAgICAgICAvLyBvciBiZWhhdmlvciBpcyBhdXRvLCBpbnN0YW50IG9yIHVuZGVmaW5lZFxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBmaXJzdEFyZyA9PT0gJ29iamVjdCcgJiYgZmlyc3RBcmcuYmVoYXZpb3IgPT09ICdzbW9vdGgnKSB7XG4gICAgICAgIC8vIGZpcnN0IGFyZ3VtZW50IGlzIGFuIG9iamVjdCBhbmQgYmVoYXZpb3IgaXMgc21vb3RoXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLy8gdGhyb3cgZXJyb3Igd2hlbiBiZWhhdmlvciBpcyBub3Qgc3VwcG9ydGVkXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICAnYmVoYXZpb3IgbWVtYmVyIG9mIFNjcm9sbE9wdGlvbnMgJyArXG4gICAgICAgICAgZmlyc3RBcmcuYmVoYXZpb3IgK1xuICAgICAgICAgICcgaXMgbm90IGEgdmFsaWQgdmFsdWUgZm9yIGVudW1lcmF0aW9uIFNjcm9sbEJlaGF2aW9yLidcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogaW5kaWNhdGVzIGlmIGFuIGVsZW1lbnQgaGFzIHNjcm9sbGFibGUgc3BhY2UgaW4gdGhlIHByb3ZpZGVkIGF4aXNcbiAgICAgKiBAbWV0aG9kIGhhc1Njcm9sbGFibGVTcGFjZVxuICAgICAqIEBwYXJhbSB7Tm9kZX0gZWxcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gYXhpc1xuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGhhc1Njcm9sbGFibGVTcGFjZShlbCwgYXhpcykge1xuICAgICAgaWYgKGF4aXMgPT09ICdZJykge1xuICAgICAgICByZXR1cm4gZWwuY2xpZW50SGVpZ2h0ICsgUk9VTkRJTkdfVE9MRVJBTkNFIDwgZWwuc2Nyb2xsSGVpZ2h0O1xuICAgICAgfVxuXG4gICAgICBpZiAoYXhpcyA9PT0gJ1gnKSB7XG4gICAgICAgIHJldHVybiBlbC5jbGllbnRXaWR0aCArIFJPVU5ESU5HX1RPTEVSQU5DRSA8IGVsLnNjcm9sbFdpZHRoO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGluZGljYXRlcyBpZiBhbiBlbGVtZW50IGhhcyBhIHNjcm9sbGFibGUgb3ZlcmZsb3cgcHJvcGVydHkgaW4gdGhlIGF4aXNcbiAgICAgKiBAbWV0aG9kIGNhbk92ZXJmbG93XG4gICAgICogQHBhcmFtIHtOb2RlfSBlbFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBheGlzXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgZnVuY3Rpb24gY2FuT3ZlcmZsb3coZWwsIGF4aXMpIHtcbiAgICAgIHZhciBvdmVyZmxvd1ZhbHVlID0gdy5nZXRDb21wdXRlZFN0eWxlKGVsLCBudWxsKVsnb3ZlcmZsb3cnICsgYXhpc107XG5cbiAgICAgIHJldHVybiBvdmVyZmxvd1ZhbHVlID09PSAnYXV0bycgfHwgb3ZlcmZsb3dWYWx1ZSA9PT0gJ3Njcm9sbCc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogaW5kaWNhdGVzIGlmIGFuIGVsZW1lbnQgY2FuIGJlIHNjcm9sbGVkIGluIGVpdGhlciBheGlzXG4gICAgICogQG1ldGhvZCBpc1Njcm9sbGFibGVcbiAgICAgKiBAcGFyYW0ge05vZGV9IGVsXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGF4aXNcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBpc1Njcm9sbGFibGUoZWwpIHtcbiAgICAgIHZhciBpc1Njcm9sbGFibGVZID0gaGFzU2Nyb2xsYWJsZVNwYWNlKGVsLCAnWScpICYmIGNhbk92ZXJmbG93KGVsLCAnWScpO1xuICAgICAgdmFyIGlzU2Nyb2xsYWJsZVggPSBoYXNTY3JvbGxhYmxlU3BhY2UoZWwsICdYJykgJiYgY2FuT3ZlcmZsb3coZWwsICdYJyk7XG5cbiAgICAgIHJldHVybiBpc1Njcm9sbGFibGVZIHx8IGlzU2Nyb2xsYWJsZVg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZmluZHMgc2Nyb2xsYWJsZSBwYXJlbnQgb2YgYW4gZWxlbWVudFxuICAgICAqIEBtZXRob2QgZmluZFNjcm9sbGFibGVQYXJlbnRcbiAgICAgKiBAcGFyYW0ge05vZGV9IGVsXG4gICAgICogQHJldHVybnMge05vZGV9IGVsXG4gICAgICovXG4gICAgZnVuY3Rpb24gZmluZFNjcm9sbGFibGVQYXJlbnQoZWwpIHtcbiAgICAgIHdoaWxlIChlbCAhPT0gZC5ib2R5ICYmIGlzU2Nyb2xsYWJsZShlbCkgPT09IGZhbHNlKSB7XG4gICAgICAgIGVsID0gZWwucGFyZW50Tm9kZSB8fCBlbC5ob3N0O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZWw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogc2VsZiBpbnZva2VkIGZ1bmN0aW9uIHRoYXQsIGdpdmVuIGEgY29udGV4dCwgc3RlcHMgdGhyb3VnaCBzY3JvbGxpbmdcbiAgICAgKiBAbWV0aG9kIHN0ZXBcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29udGV4dFxuICAgICAqIEByZXR1cm5zIHt1bmRlZmluZWR9XG4gICAgICovXG4gICAgZnVuY3Rpb24gc3RlcChjb250ZXh0KSB7XG4gICAgICB2YXIgdGltZSA9IG5vdygpO1xuICAgICAgdmFyIHZhbHVlO1xuICAgICAgdmFyIGN1cnJlbnRYO1xuICAgICAgdmFyIGN1cnJlbnRZO1xuICAgICAgdmFyIGVsYXBzZWQgPSAodGltZSAtIGNvbnRleHQuc3RhcnRUaW1lKSAvIFNDUk9MTF9USU1FO1xuXG4gICAgICAvLyBhdm9pZCBlbGFwc2VkIHRpbWVzIGhpZ2hlciB0aGFuIG9uZVxuICAgICAgZWxhcHNlZCA9IGVsYXBzZWQgPiAxID8gMSA6IGVsYXBzZWQ7XG5cbiAgICAgIC8vIGFwcGx5IGVhc2luZyB0byBlbGFwc2VkIHRpbWVcbiAgICAgIHZhbHVlID0gZWFzZShlbGFwc2VkKTtcblxuICAgICAgY3VycmVudFggPSBjb250ZXh0LnN0YXJ0WCArIChjb250ZXh0LnggLSBjb250ZXh0LnN0YXJ0WCkgKiB2YWx1ZTtcbiAgICAgIGN1cnJlbnRZID0gY29udGV4dC5zdGFydFkgKyAoY29udGV4dC55IC0gY29udGV4dC5zdGFydFkpICogdmFsdWU7XG5cbiAgICAgIGNvbnRleHQubWV0aG9kLmNhbGwoY29udGV4dC5zY3JvbGxhYmxlLCBjdXJyZW50WCwgY3VycmVudFkpO1xuXG4gICAgICAvLyBzY3JvbGwgbW9yZSBpZiB3ZSBoYXZlIG5vdCByZWFjaGVkIG91ciBkZXN0aW5hdGlvblxuICAgICAgaWYgKGN1cnJlbnRYICE9PSBjb250ZXh0LnggfHwgY3VycmVudFkgIT09IGNvbnRleHQueSkge1xuICAgICAgICB3LnJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwLmJpbmQodywgY29udGV4dCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHNjcm9sbHMgd2luZG93IG9yIGVsZW1lbnQgd2l0aCBhIHNtb290aCBiZWhhdmlvclxuICAgICAqIEBtZXRob2Qgc21vb3RoU2Nyb2xsXG4gICAgICogQHBhcmFtIHtPYmplY3R8Tm9kZX0gZWxcbiAgICAgKiBAcGFyYW0ge051bWJlcn0geFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB5XG4gICAgICogQHJldHVybnMge3VuZGVmaW5lZH1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzbW9vdGhTY3JvbGwoZWwsIHgsIHkpIHtcbiAgICAgIHZhciBzY3JvbGxhYmxlO1xuICAgICAgdmFyIHN0YXJ0WDtcbiAgICAgIHZhciBzdGFydFk7XG4gICAgICB2YXIgbWV0aG9kO1xuICAgICAgdmFyIHN0YXJ0VGltZSA9IG5vdygpO1xuXG4gICAgICAvLyBkZWZpbmUgc2Nyb2xsIGNvbnRleHRcbiAgICAgIGlmIChlbCA9PT0gZC5ib2R5KSB7XG4gICAgICAgIHNjcm9sbGFibGUgPSB3O1xuICAgICAgICBzdGFydFggPSB3LnNjcm9sbFggfHwgdy5wYWdlWE9mZnNldDtcbiAgICAgICAgc3RhcnRZID0gdy5zY3JvbGxZIHx8IHcucGFnZVlPZmZzZXQ7XG4gICAgICAgIG1ldGhvZCA9IG9yaWdpbmFsLnNjcm9sbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNjcm9sbGFibGUgPSBlbDtcbiAgICAgICAgc3RhcnRYID0gZWwuc2Nyb2xsTGVmdDtcbiAgICAgICAgc3RhcnRZID0gZWwuc2Nyb2xsVG9wO1xuICAgICAgICBtZXRob2QgPSBzY3JvbGxFbGVtZW50O1xuICAgICAgfVxuXG4gICAgICAvLyBzY3JvbGwgbG9vcGluZyBvdmVyIGEgZnJhbWVcbiAgICAgIHN0ZXAoe1xuICAgICAgICBzY3JvbGxhYmxlOiBzY3JvbGxhYmxlLFxuICAgICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgICAgc3RhcnRUaW1lOiBzdGFydFRpbWUsXG4gICAgICAgIHN0YXJ0WDogc3RhcnRYLFxuICAgICAgICBzdGFydFk6IHN0YXJ0WSxcbiAgICAgICAgeDogeCxcbiAgICAgICAgeTogeVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gT1JJR0lOQUwgTUVUSE9EUyBPVkVSUklERVNcbiAgICAvLyB3LnNjcm9sbCBhbmQgdy5zY3JvbGxUb1xuICAgIHcuc2Nyb2xsID0gdy5zY3JvbGxUbyA9IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gYXZvaWQgYWN0aW9uIHdoZW4gbm8gYXJndW1lbnRzIGFyZSBwYXNzZWRcbiAgICAgIGlmIChhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIGF2b2lkIHNtb290aCBiZWhhdmlvciBpZiBub3QgcmVxdWlyZWRcbiAgICAgIGlmIChzaG91bGRCYWlsT3V0KGFyZ3VtZW50c1swXSkgPT09IHRydWUpIHtcbiAgICAgICAgb3JpZ2luYWwuc2Nyb2xsLmNhbGwoXG4gICAgICAgICAgdyxcbiAgICAgICAgICBhcmd1bWVudHNbMF0ubGVmdCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IGFyZ3VtZW50c1swXS5sZWZ0XG4gICAgICAgICAgICA6IHR5cGVvZiBhcmd1bWVudHNbMF0gIT09ICdvYmplY3QnXG4gICAgICAgICAgICAgID8gYXJndW1lbnRzWzBdXG4gICAgICAgICAgICAgIDogdy5zY3JvbGxYIHx8IHcucGFnZVhPZmZzZXQsXG4gICAgICAgICAgLy8gdXNlIHRvcCBwcm9wLCBzZWNvbmQgYXJndW1lbnQgaWYgcHJlc2VudCBvciBmYWxsYmFjayB0byBzY3JvbGxZXG4gICAgICAgICAgYXJndW1lbnRzWzBdLnRvcCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IGFyZ3VtZW50c1swXS50b3BcbiAgICAgICAgICAgIDogYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgPyBhcmd1bWVudHNbMV1cbiAgICAgICAgICAgICAgOiB3LnNjcm9sbFkgfHwgdy5wYWdlWU9mZnNldFxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gTEVUIFRIRSBTTU9PVEhORVNTIEJFR0lOIVxuICAgICAgc21vb3RoU2Nyb2xsLmNhbGwoXG4gICAgICAgIHcsXG4gICAgICAgIGQuYm9keSxcbiAgICAgICAgYXJndW1lbnRzWzBdLmxlZnQgIT09IHVuZGVmaW5lZFxuICAgICAgICAgID8gfn5hcmd1bWVudHNbMF0ubGVmdFxuICAgICAgICAgIDogdy5zY3JvbGxYIHx8IHcucGFnZVhPZmZzZXQsXG4gICAgICAgIGFyZ3VtZW50c1swXS50b3AgIT09IHVuZGVmaW5lZFxuICAgICAgICAgID8gfn5hcmd1bWVudHNbMF0udG9wXG4gICAgICAgICAgOiB3LnNjcm9sbFkgfHwgdy5wYWdlWU9mZnNldFxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgLy8gdy5zY3JvbGxCeVxuICAgIHcuc2Nyb2xsQnkgPSBmdW5jdGlvbigpIHtcbiAgICAgIC8vIGF2b2lkIGFjdGlvbiB3aGVuIG5vIGFyZ3VtZW50cyBhcmUgcGFzc2VkXG4gICAgICBpZiAoYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBhdm9pZCBzbW9vdGggYmVoYXZpb3IgaWYgbm90IHJlcXVpcmVkXG4gICAgICBpZiAoc2hvdWxkQmFpbE91dChhcmd1bWVudHNbMF0pKSB7XG4gICAgICAgIG9yaWdpbmFsLnNjcm9sbEJ5LmNhbGwoXG4gICAgICAgICAgdyxcbiAgICAgICAgICBhcmd1bWVudHNbMF0ubGVmdCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IGFyZ3VtZW50c1swXS5sZWZ0XG4gICAgICAgICAgICA6IHR5cGVvZiBhcmd1bWVudHNbMF0gIT09ICdvYmplY3QnID8gYXJndW1lbnRzWzBdIDogMCxcbiAgICAgICAgICBhcmd1bWVudHNbMF0udG9wICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gYXJndW1lbnRzWzBdLnRvcFxuICAgICAgICAgICAgOiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDBcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIExFVCBUSEUgU01PT1RITkVTUyBCRUdJTiFcbiAgICAgIHNtb290aFNjcm9sbC5jYWxsKFxuICAgICAgICB3LFxuICAgICAgICBkLmJvZHksXG4gICAgICAgIH5+YXJndW1lbnRzWzBdLmxlZnQgKyAody5zY3JvbGxYIHx8IHcucGFnZVhPZmZzZXQpLFxuICAgICAgICB+fmFyZ3VtZW50c1swXS50b3AgKyAody5zY3JvbGxZIHx8IHcucGFnZVlPZmZzZXQpXG4gICAgICApO1xuICAgIH07XG5cbiAgICAvLyBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGwgYW5kIEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbFRvXG4gICAgRWxlbWVudC5wcm90b3R5cGUuc2Nyb2xsID0gRWxlbWVudC5wcm90b3R5cGUuc2Nyb2xsVG8gPSBmdW5jdGlvbigpIHtcbiAgICAgIC8vIGF2b2lkIGFjdGlvbiB3aGVuIG5vIGFyZ3VtZW50cyBhcmUgcGFzc2VkXG4gICAgICBpZiAoYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBhdm9pZCBzbW9vdGggYmVoYXZpb3IgaWYgbm90IHJlcXVpcmVkXG4gICAgICBpZiAoc2hvdWxkQmFpbE91dChhcmd1bWVudHNbMF0pID09PSB0cnVlKSB7XG4gICAgICAgIC8vIGlmIG9uZSBudW1iZXIgaXMgcGFzc2VkLCB0aHJvdyBlcnJvciB0byBtYXRjaCBGaXJlZm94IGltcGxlbWVudGF0aW9uXG4gICAgICAgIGlmICh0eXBlb2YgYXJndW1lbnRzWzBdID09PSAnbnVtYmVyJyAmJiBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcignVmFsdWUgY291bGQgbm90IGJlIGNvbnZlcnRlZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgb3JpZ2luYWwuZWxlbWVudFNjcm9sbC5jYWxsKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgLy8gdXNlIGxlZnQgcHJvcCwgZmlyc3QgbnVtYmVyIGFyZ3VtZW50IG9yIGZhbGxiYWNrIHRvIHNjcm9sbExlZnRcbiAgICAgICAgICBhcmd1bWVudHNbMF0ubGVmdCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IH5+YXJndW1lbnRzWzBdLmxlZnRcbiAgICAgICAgICAgIDogdHlwZW9mIGFyZ3VtZW50c1swXSAhPT0gJ29iamVjdCcgPyB+fmFyZ3VtZW50c1swXSA6IHRoaXMuc2Nyb2xsTGVmdCxcbiAgICAgICAgICAvLyB1c2UgdG9wIHByb3AsIHNlY29uZCBhcmd1bWVudCBvciBmYWxsYmFjayB0byBzY3JvbGxUb3BcbiAgICAgICAgICBhcmd1bWVudHNbMF0udG9wICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gfn5hcmd1bWVudHNbMF0udG9wXG4gICAgICAgICAgICA6IGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gfn5hcmd1bWVudHNbMV0gOiB0aGlzLnNjcm9sbFRvcFxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGxlZnQgPSBhcmd1bWVudHNbMF0ubGVmdDtcbiAgICAgIHZhciB0b3AgPSBhcmd1bWVudHNbMF0udG9wO1xuXG4gICAgICAvLyBMRVQgVEhFIFNNT09USE5FU1MgQkVHSU4hXG4gICAgICBzbW9vdGhTY3JvbGwuY2FsbChcbiAgICAgICAgdGhpcyxcbiAgICAgICAgdGhpcyxcbiAgICAgICAgdHlwZW9mIGxlZnQgPT09ICd1bmRlZmluZWQnID8gdGhpcy5zY3JvbGxMZWZ0IDogfn5sZWZ0LFxuICAgICAgICB0eXBlb2YgdG9wID09PSAndW5kZWZpbmVkJyA/IHRoaXMuc2Nyb2xsVG9wIDogfn50b3BcbiAgICAgICk7XG4gICAgfTtcblxuICAgIC8vIEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbEJ5XG4gICAgRWxlbWVudC5wcm90b3R5cGUuc2Nyb2xsQnkgPSBmdW5jdGlvbigpIHtcbiAgICAgIC8vIGF2b2lkIGFjdGlvbiB3aGVuIG5vIGFyZ3VtZW50cyBhcmUgcGFzc2VkXG4gICAgICBpZiAoYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBhdm9pZCBzbW9vdGggYmVoYXZpb3IgaWYgbm90IHJlcXVpcmVkXG4gICAgICBpZiAoc2hvdWxkQmFpbE91dChhcmd1bWVudHNbMF0pID09PSB0cnVlKSB7XG4gICAgICAgIG9yaWdpbmFsLmVsZW1lbnRTY3JvbGwuY2FsbChcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIGFyZ3VtZW50c1swXS5sZWZ0ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gfn5hcmd1bWVudHNbMF0ubGVmdCArIHRoaXMuc2Nyb2xsTGVmdFxuICAgICAgICAgICAgOiB+fmFyZ3VtZW50c1swXSArIHRoaXMuc2Nyb2xsTGVmdCxcbiAgICAgICAgICBhcmd1bWVudHNbMF0udG9wICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gfn5hcmd1bWVudHNbMF0udG9wICsgdGhpcy5zY3JvbGxUb3BcbiAgICAgICAgICAgIDogfn5hcmd1bWVudHNbMV0gKyB0aGlzLnNjcm9sbFRvcFxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zY3JvbGwoe1xuICAgICAgICBsZWZ0OiB+fmFyZ3VtZW50c1swXS5sZWZ0ICsgdGhpcy5zY3JvbGxMZWZ0LFxuICAgICAgICB0b3A6IH5+YXJndW1lbnRzWzBdLnRvcCArIHRoaXMuc2Nyb2xsVG9wLFxuICAgICAgICBiZWhhdmlvcjogYXJndW1lbnRzWzBdLmJlaGF2aW9yXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gRWxlbWVudC5wcm90b3R5cGUuc2Nyb2xsSW50b1ZpZXdcbiAgICBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGxJbnRvVmlldyA9IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gYXZvaWQgc21vb3RoIGJlaGF2aW9yIGlmIG5vdCByZXF1aXJlZFxuICAgICAgaWYgKHNob3VsZEJhaWxPdXQoYXJndW1lbnRzWzBdKSA9PT0gdHJ1ZSkge1xuICAgICAgICBvcmlnaW5hbC5zY3JvbGxJbnRvVmlldy5jYWxsKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB0cnVlIDogYXJndW1lbnRzWzBdXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBMRVQgVEhFIFNNT09USE5FU1MgQkVHSU4hXG4gICAgICB2YXIgc2Nyb2xsYWJsZVBhcmVudCA9IGZpbmRTY3JvbGxhYmxlUGFyZW50KHRoaXMpO1xuICAgICAgdmFyIHBhcmVudFJlY3RzID0gc2Nyb2xsYWJsZVBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHZhciBjbGllbnRSZWN0cyA9IHRoaXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgIGlmIChzY3JvbGxhYmxlUGFyZW50ICE9PSBkLmJvZHkpIHtcbiAgICAgICAgLy8gcmV2ZWFsIGVsZW1lbnQgaW5zaWRlIHBhcmVudFxuICAgICAgICBzbW9vdGhTY3JvbGwuY2FsbChcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIHNjcm9sbGFibGVQYXJlbnQsXG4gICAgICAgICAgc2Nyb2xsYWJsZVBhcmVudC5zY3JvbGxMZWZ0ICsgY2xpZW50UmVjdHMubGVmdCAtIHBhcmVudFJlY3RzLmxlZnQsXG4gICAgICAgICAgc2Nyb2xsYWJsZVBhcmVudC5zY3JvbGxUb3AgKyBjbGllbnRSZWN0cy50b3AgLSBwYXJlbnRSZWN0cy50b3BcbiAgICAgICAgKTtcblxuICAgICAgICAvLyByZXZlYWwgcGFyZW50IGluIHZpZXdwb3J0IHVubGVzcyBpcyBmaXhlZFxuICAgICAgICBpZiAody5nZXRDb21wdXRlZFN0eWxlKHNjcm9sbGFibGVQYXJlbnQpLnBvc2l0aW9uICE9PSAnZml4ZWQnKSB7XG4gICAgICAgICAgdy5zY3JvbGxCeSh7XG4gICAgICAgICAgICBsZWZ0OiBwYXJlbnRSZWN0cy5sZWZ0LFxuICAgICAgICAgICAgdG9wOiBwYXJlbnRSZWN0cy50b3AsXG4gICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gcmV2ZWFsIGVsZW1lbnQgaW4gdmlld3BvcnRcbiAgICAgICAgdy5zY3JvbGxCeSh7XG4gICAgICAgICAgbGVmdDogY2xpZW50UmVjdHMubGVmdCxcbiAgICAgICAgICB0b3A6IGNsaWVudFJlY3RzLnRvcCxcbiAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHtcbiAgICAvLyBjb21tb25qc1xuICAgIG1vZHVsZS5leHBvcnRzID0geyBwb2x5ZmlsbDogcG9seWZpbGwgfTtcbiAgfVxuXG59KCkpO1xufSk7XG52YXIgc21vb3Roc2Nyb2xsXzEgPSBzbW9vdGhzY3JvbGwucG9seWZpbGw7XG5cbnZhciBfZGVmYXVsdCQxID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29yZSkge1xuICBfaW5oZXJpdHMoX2RlZmF1bHQsIF9Db3JlKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKF9kZWZhdWx0KTtcblxuICBmdW5jdGlvbiBfZGVmYXVsdCgpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgX2RlZmF1bHQpO1xuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBvcHRpb25zKTtcblxuICAgIGlmIChfdGhpcy5yZXNldE5hdGl2ZVNjcm9sbCkge1xuICAgICAgaWYgKGhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIF90aGlzLmNoZWNrU2Nyb2xsLCBmYWxzZSk7XG5cbiAgICBpZiAod2luZG93LnNtb290aHNjcm9sbFBvbHlmaWxsID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHdpbmRvdy5zbW9vdGhzY3JvbGxQb2x5ZmlsbCA9IHNtb290aHNjcm9sbDtcbiAgICAgIHdpbmRvdy5zbW9vdGhzY3JvbGxQb2x5ZmlsbC5wb2x5ZmlsbCgpO1xuICAgIH1cblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhfZGVmYXVsdCwgW3tcbiAgICBrZXk6IFwiaW5pdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zY3JvbGwueSA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICAgIHRoaXMuYWRkRWxlbWVudHMoKTtcbiAgICAgIHRoaXMuZGV0ZWN0RWxlbWVudHMoKTtcblxuICAgICAgX2dldChfZ2V0UHJvdG90eXBlT2YoX2RlZmF1bHQucHJvdG90eXBlKSwgXCJpbml0XCIsIHRoaXMpLmNhbGwodGhpcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNoZWNrU2Nyb2xsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNoZWNrU2Nyb2xsKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIF9nZXQoX2dldFByb3RvdHlwZU9mKF9kZWZhdWx0LnByb3RvdHlwZSksIFwiY2hlY2tTY3JvbGxcIiwgdGhpcykuY2FsbCh0aGlzKTtcblxuICAgICAgaWYgKHRoaXMuZ2V0RGlyZWN0aW9uKSB7XG4gICAgICAgIHRoaXMuYWRkRGlyZWN0aW9uKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmdldFNwZWVkKSB7XG4gICAgICAgIHRoaXMuYWRkU3BlZWQoKTtcbiAgICAgICAgdGhpcy5zcGVlZFRzID0gRGF0ZS5ub3coKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5pbnN0YW5jZS5zY3JvbGwueSA9IHdpbmRvdy5wYWdlWU9mZnNldDtcblxuICAgICAgaWYgKE9iamVjdC5lbnRyaWVzKHRoaXMuZWxzKS5sZW5ndGgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmhhc1Njcm9sbFRpY2tpbmcpIHtcbiAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMyLmRldGVjdEVsZW1lbnRzKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5oYXNTY3JvbGxUaWNraW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJhZGREaXJlY3Rpb25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkRGlyZWN0aW9uKCkge1xuICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2UuZGlyZWN0aW9uICE9PSAnZG93bicpIHtcbiAgICAgICAgICB0aGlzLmluc3RhbmNlLmRpcmVjdGlvbiA9ICdkb3duJztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPCB0aGlzLmluc3RhbmNlLnNjcm9sbC55KSB7XG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlLmRpcmVjdGlvbiAhPT0gJ3VwJykge1xuICAgICAgICAgIHRoaXMuaW5zdGFuY2UuZGlyZWN0aW9uID0gJ3VwJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJhZGRTcGVlZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRTcGVlZCgpIHtcbiAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgIT0gdGhpcy5pbnN0YW5jZS5zY3JvbGwueSkge1xuICAgICAgICB0aGlzLmluc3RhbmNlLnNwZWVkID0gKHdpbmRvdy5wYWdlWU9mZnNldCAtIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkpIC8gTWF0aC5tYXgoMSwgRGF0ZS5ub3coKSAtIHRoaXMuc3BlZWRUcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmluc3RhbmNlLnNwZWVkID0gMDtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVzaXplXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2l6ZSgpIHtcbiAgICAgIGlmIChPYmplY3QuZW50cmllcyh0aGlzLmVscykubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMud2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICB0aGlzLnVwZGF0ZUVsZW1lbnRzKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImFkZEVsZW1lbnRzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZEVsZW1lbnRzKCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIHRoaXMuZWxzID0ge307XG4gICAgICB2YXIgZWxzID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS0nICsgdGhpcy5uYW1lICsgJ10nKTtcbiAgICAgIGVscy5mb3JFYWNoKGZ1bmN0aW9uIChlbCwgaW5kZXgpIHtcbiAgICAgICAgdmFyIEJDUiA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICB2YXIgY2wgPSBlbC5kYXRhc2V0W190aGlzMy5uYW1lICsgJ0NsYXNzJ10gfHwgX3RoaXMzW1wiY2xhc3NcIl07XG4gICAgICAgIHZhciBpZCA9IHR5cGVvZiBlbC5kYXRhc2V0W190aGlzMy5uYW1lICsgJ0lkJ10gPT09ICdzdHJpbmcnID8gZWwuZGF0YXNldFtfdGhpczMubmFtZSArICdJZCddIDogaW5kZXg7XG4gICAgICAgIHZhciB0b3A7XG4gICAgICAgIHZhciBsZWZ0O1xuICAgICAgICB2YXIgb2Zmc2V0ID0gdHlwZW9mIGVsLmRhdGFzZXRbX3RoaXMzLm5hbWUgKyAnT2Zmc2V0J10gPT09ICdzdHJpbmcnID8gZWwuZGF0YXNldFtfdGhpczMubmFtZSArICdPZmZzZXQnXS5zcGxpdCgnLCcpIDogX3RoaXMzLm9mZnNldDtcbiAgICAgICAgdmFyIHJlcGVhdCA9IGVsLmRhdGFzZXRbX3RoaXMzLm5hbWUgKyAnUmVwZWF0J107XG4gICAgICAgIHZhciBjYWxsID0gZWwuZGF0YXNldFtfdGhpczMubmFtZSArICdDYWxsJ107XG4gICAgICAgIHZhciB0YXJnZXQgPSBlbC5kYXRhc2V0W190aGlzMy5uYW1lICsgJ1RhcmdldCddO1xuICAgICAgICB2YXIgdGFyZ2V0RWw7XG5cbiAgICAgICAgaWYgKHRhcmdldCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGFyZ2V0RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiXCIuY29uY2F0KHRhcmdldCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRhcmdldEVsID0gZWw7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdGFyZ2V0RWxCQ1IgPSB0YXJnZXRFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgdG9wID0gdGFyZ2V0RWxCQ1IudG9wICsgX3RoaXMzLmluc3RhbmNlLnNjcm9sbC55O1xuICAgICAgICBsZWZ0ID0gdGFyZ2V0RWxCQ1IubGVmdCArIF90aGlzMy5pbnN0YW5jZS5zY3JvbGwueDtcbiAgICAgICAgdmFyIGJvdHRvbSA9IHRvcCArIHRhcmdldEVsLm9mZnNldEhlaWdodDtcbiAgICAgICAgdmFyIHJpZ2h0ID0gbGVmdCArIHRhcmdldEVsLm9mZnNldFdpZHRoO1xuXG4gICAgICAgIGlmIChyZXBlYXQgPT0gJ2ZhbHNlJykge1xuICAgICAgICAgIHJlcGVhdCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKHJlcGVhdCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXBlYXQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlcGVhdCA9IF90aGlzMy5yZXBlYXQ7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcmVsYXRpdmVPZmZzZXQgPSBfdGhpczMuZ2V0UmVsYXRpdmVPZmZzZXQob2Zmc2V0KTtcblxuICAgICAgICB0b3AgPSB0b3AgKyByZWxhdGl2ZU9mZnNldFswXTtcbiAgICAgICAgYm90dG9tID0gYm90dG9tIC0gcmVsYXRpdmVPZmZzZXRbMV07XG4gICAgICAgIHZhciBtYXBwZWRFbCA9IHtcbiAgICAgICAgICBlbDogZWwsXG4gICAgICAgICAgdGFyZ2V0RWw6IHRhcmdldEVsLFxuICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICBcImNsYXNzXCI6IGNsLFxuICAgICAgICAgIHRvcDogdG9wLFxuICAgICAgICAgIGJvdHRvbTogYm90dG9tLFxuICAgICAgICAgIGxlZnQ6IGxlZnQsXG4gICAgICAgICAgcmlnaHQ6IHJpZ2h0LFxuICAgICAgICAgIG9mZnNldDogb2Zmc2V0LFxuICAgICAgICAgIHByb2dyZXNzOiAwLFxuICAgICAgICAgIHJlcGVhdDogcmVwZWF0LFxuICAgICAgICAgIGluVmlldzogZmFsc2UsXG4gICAgICAgICAgY2FsbDogY2FsbFxuICAgICAgICB9O1xuICAgICAgICBfdGhpczMuZWxzW2lkXSA9IG1hcHBlZEVsO1xuXG4gICAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoY2wpKSB7XG4gICAgICAgICAgX3RoaXMzLnNldEluVmlldyhfdGhpczMuZWxzW2lkXSwgaWQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidXBkYXRlRWxlbWVudHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlRWxlbWVudHMoKSB7XG4gICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5lbHMpLmZvckVhY2goZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgdmFyIF9yZWYyID0gX3NsaWNlZFRvQXJyYXkoX3JlZiwgMiksXG4gICAgICAgICAgICBpID0gX3JlZjJbMF0sXG4gICAgICAgICAgICBlbCA9IF9yZWYyWzFdO1xuXG4gICAgICAgIHZhciB0b3AgPSBlbC50YXJnZXRFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyBfdGhpczQuaW5zdGFuY2Uuc2Nyb2xsLnk7XG5cbiAgICAgICAgdmFyIGJvdHRvbSA9IHRvcCArIGVsLnRhcmdldEVsLm9mZnNldEhlaWdodDtcblxuICAgICAgICB2YXIgcmVsYXRpdmVPZmZzZXQgPSBfdGhpczQuZ2V0UmVsYXRpdmVPZmZzZXQoZWwub2Zmc2V0KTtcblxuICAgICAgICBfdGhpczQuZWxzW2ldLnRvcCA9IHRvcCArIHJlbGF0aXZlT2Zmc2V0WzBdO1xuICAgICAgICBfdGhpczQuZWxzW2ldLmJvdHRvbSA9IGJvdHRvbSAtIHJlbGF0aXZlT2Zmc2V0WzFdO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmhhc1Njcm9sbFRpY2tpbmcgPSBmYWxzZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0UmVsYXRpdmVPZmZzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0UmVsYXRpdmVPZmZzZXQob2Zmc2V0KSB7XG4gICAgICB2YXIgcmVsYXRpdmVPZmZzZXQgPSBbMCwgMF07XG5cbiAgICAgIGlmIChvZmZzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvZmZzZXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAodHlwZW9mIG9mZnNldFtpXSA9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgaWYgKG9mZnNldFtpXS5pbmNsdWRlcygnJScpKSB7XG4gICAgICAgICAgICAgIHJlbGF0aXZlT2Zmc2V0W2ldID0gcGFyc2VJbnQob2Zmc2V0W2ldLnJlcGxhY2UoJyUnLCAnJykgKiB0aGlzLndpbmRvd0hlaWdodCAvIDEwMCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZWxhdGl2ZU9mZnNldFtpXSA9IHBhcnNlSW50KG9mZnNldFtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlbGF0aXZlT2Zmc2V0W2ldID0gb2Zmc2V0W2ldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVsYXRpdmVPZmZzZXQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNjcm9sbCB0byBhIGRlc2lyZWQgdGFyZ2V0LlxuICAgICAqXG4gICAgICogQHBhcmFtICBBdmFpbGFibGUgb3B0aW9ucyA6XG4gICAgICogICAgICAgICAgdGFyZ2V0IHtub2RlLCBzdHJpbmcsIFwidG9wXCIsIFwiYm90dG9tXCIsIGludH0gLSBUaGUgRE9NIGVsZW1lbnQgd2Ugd2FudCB0byBzY3JvbGwgdG9cbiAgICAgKiAgICAgICAgICBvcHRpb25zIHtvYmplY3R9IC0gT3B0aW9ucyBvYmplY3QgZm9yIGFkZGl0aW9ubmFsIHNldHRpbmdzLlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzY3JvbGxUb1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzY3JvbGxUbyh0YXJnZXQpIHtcbiAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICAgIC8vIFBhcnNlIG9wdGlvbnNcbiAgICAgIHZhciBvZmZzZXQgPSBwYXJzZUludChvcHRpb25zLm9mZnNldCkgfHwgMDsgLy8gQW4gb2Zmc2V0IHRvIGFwcGx5IG9uIHRvcCBvZiBnaXZlbiBgdGFyZ2V0YCBvciBgc291cmNlRWxlbWAncyB0YXJnZXRcblxuICAgICAgdmFyIGNhbGxiYWNrID0gb3B0aW9ucy5jYWxsYmFjayA/IG9wdGlvbnMuY2FsbGJhY2sgOiBmYWxzZTsgLy8gZnVuY3Rpb24gY2FsbGVkIHdoZW4gc2Nyb2xsVG8gY29tcGxldGVzIChub3RlIHRoYXQgaXQgd29uJ3Qgd2FpdCBmb3IgbGVycCB0byBzdGFiaWxpemUpXG5cbiAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAvLyBTZWxlY3RvciBvciBib3VuZGFyaWVzXG4gICAgICAgIGlmICh0YXJnZXQgPT09ICd0b3AnKSB7XG4gICAgICAgICAgdGFyZ2V0ID0gdGhpcy5odG1sO1xuICAgICAgICB9IGVsc2UgaWYgKHRhcmdldCA9PT0gJ2JvdHRvbScpIHtcbiAgICAgICAgICB0YXJnZXQgPSB0aGlzLmh0bWwub2Zmc2V0SGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gSWYgdGhlIHF1ZXJ5IGZhaWxzLCBhYm9ydFxuXG4gICAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgLy8gQWJzb2x1dGUgY29vcmRpbmF0ZVxuICAgICAgICB0YXJnZXQgPSBwYXJzZUludCh0YXJnZXQpO1xuICAgICAgfSBlbHNlIGlmICh0YXJnZXQgJiYgdGFyZ2V0LnRhZ05hbWUpIDsgZWxzZSB7XG4gICAgICAgIGNvbnNvbGUud2FybignYHRhcmdldGAgcGFyYW1ldGVyIGlzIG5vdCB2YWxpZCcpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9IC8vIFdlIGhhdmUgYSB0YXJnZXQgdGhhdCBpcyBub3QgYSBjb29yZGluYXRlIHlldCwgZ2V0IGl0XG5cblxuICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgIT09ICdudW1iZXInKSB7XG4gICAgICAgIG9mZnNldCA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyBvZmZzZXQgKyB0aGlzLmluc3RhbmNlLnNjcm9sbC55O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2Zmc2V0ID0gdGFyZ2V0ICsgb2Zmc2V0O1xuICAgICAgfVxuXG4gICAgICB2YXIgaXNUYXJnZXRSZWFjaGVkID0gZnVuY3Rpb24gaXNUYXJnZXRSZWFjaGVkKCkge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQod2luZG93LnBhZ2VZT2Zmc2V0KSA9PT0gcGFyc2VJbnQob2Zmc2V0KTtcbiAgICAgIH07XG5cbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBpZiAoaXNUYXJnZXRSZWFjaGVkKCkpIHtcbiAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgb25TY3JvbGwgPSBmdW5jdGlvbiBvblNjcm9sbCgpIHtcbiAgICAgICAgICAgIGlmIChpc1RhcmdldFJlYWNoZWQoKSkge1xuICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpO1xuICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgIHRvcDogb2Zmc2V0LFxuICAgICAgICBiZWhhdmlvcjogb3B0aW9ucy5kdXJhdGlvbiA9PT0gMCA/ICdhdXRvJyA6ICdzbW9vdGgnXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICAgIHRoaXMuYWRkRWxlbWVudHMoKTtcbiAgICAgIHRoaXMuZGV0ZWN0RWxlbWVudHMoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZGVzdHJveVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgX2dldChfZ2V0UHJvdG90eXBlT2YoX2RlZmF1bHQucHJvdG90eXBlKSwgXCJkZXN0cm95XCIsIHRoaXMpLmNhbGwodGhpcyk7XG5cbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmNoZWNrU2Nyb2xsLCBmYWxzZSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIF9kZWZhdWx0O1xufShfZGVmYXVsdCk7XG5cbi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxudmFyIG9iamVjdEFzc2lnbiA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG5cbmZ1bmN0aW9uIEUgKCkge1xuICAvLyBLZWVwIHRoaXMgZW1wdHkgc28gaXQncyBlYXNpZXIgdG8gaW5oZXJpdCBmcm9tXG4gIC8vICh2aWEgaHR0cHM6Ly9naXRodWIuY29tL2xpcHNtYWNrIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL3Njb3R0Y29yZ2FuL3RpbnktZW1pdHRlci9pc3N1ZXMvMylcbn1cblxuRS5wcm90b3R5cGUgPSB7XG4gIG9uOiBmdW5jdGlvbiAobmFtZSwgY2FsbGJhY2ssIGN0eCkge1xuICAgIHZhciBlID0gdGhpcy5lIHx8ICh0aGlzLmUgPSB7fSk7XG5cbiAgICAoZVtuYW1lXSB8fCAoZVtuYW1lXSA9IFtdKSkucHVzaCh7XG4gICAgICBmbjogY2FsbGJhY2ssXG4gICAgICBjdHg6IGN0eFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgb25jZTogZnVuY3Rpb24gKG5hbWUsIGNhbGxiYWNrLCBjdHgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgZnVuY3Rpb24gbGlzdGVuZXIgKCkge1xuICAgICAgc2VsZi5vZmYobmFtZSwgbGlzdGVuZXIpO1xuICAgICAgY2FsbGJhY2suYXBwbHkoY3R4LCBhcmd1bWVudHMpO1xuICAgIH1cbiAgICBsaXN0ZW5lci5fID0gY2FsbGJhY2s7XG4gICAgcmV0dXJuIHRoaXMub24obmFtZSwgbGlzdGVuZXIsIGN0eCk7XG4gIH0sXG5cbiAgZW1pdDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB2YXIgZGF0YSA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICB2YXIgZXZ0QXJyID0gKCh0aGlzLmUgfHwgKHRoaXMuZSA9IHt9KSlbbmFtZV0gfHwgW10pLnNsaWNlKCk7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBsZW4gPSBldnRBcnIubGVuZ3RoO1xuXG4gICAgZm9yIChpOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGV2dEFycltpXS5mbi5hcHBseShldnRBcnJbaV0uY3R4LCBkYXRhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICBvZmY6IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaykge1xuICAgIHZhciBlID0gdGhpcy5lIHx8ICh0aGlzLmUgPSB7fSk7XG4gICAgdmFyIGV2dHMgPSBlW25hbWVdO1xuICAgIHZhciBsaXZlRXZlbnRzID0gW107XG5cbiAgICBpZiAoZXZ0cyAmJiBjYWxsYmFjaykge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGV2dHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaWYgKGV2dHNbaV0uZm4gIT09IGNhbGxiYWNrICYmIGV2dHNbaV0uZm4uXyAhPT0gY2FsbGJhY2spXG4gICAgICAgICAgbGl2ZUV2ZW50cy5wdXNoKGV2dHNbaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlbW92ZSBldmVudCBmcm9tIHF1ZXVlIHRvIHByZXZlbnQgbWVtb3J5IGxlYWtcbiAgICAvLyBTdWdnZXN0ZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL2xhemRcbiAgICAvLyBSZWY6IGh0dHBzOi8vZ2l0aHViLmNvbS9zY290dGNvcmdhbi90aW55LWVtaXR0ZXIvY29tbWl0L2M2ZWJmYWE5YmM5NzNiMzNkMTEwYTg0YTMwNzc0MmI3Y2Y5NGM5NTMjY29tbWl0Y29tbWVudC01MDI0OTEwXG5cbiAgICAobGl2ZUV2ZW50cy5sZW5ndGgpXG4gICAgICA/IGVbbmFtZV0gPSBsaXZlRXZlbnRzXG4gICAgICA6IGRlbGV0ZSBlW25hbWVdO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn07XG5cbnZhciB0aW55RW1pdHRlciA9IEU7XG5cbnZhciBsZXRoYXJneSA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUsIGV4cG9ydHMpIHtcbi8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMS45LjJcbihmdW5jdGlvbigpIHtcbiAgdmFyIHJvb3Q7XG5cbiAgcm9vdCA9ICBleHBvcnRzICE9PSBudWxsID8gZXhwb3J0cyA6IHRoaXM7XG5cbiAgcm9vdC5MZXRoYXJneSA9IChmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBMZXRoYXJneShzdGFiaWxpdHksIHNlbnNpdGl2aXR5LCB0b2xlcmFuY2UsIGRlbGF5KSB7XG4gICAgICB0aGlzLnN0YWJpbGl0eSA9IHN0YWJpbGl0eSAhPSBudWxsID8gTWF0aC5hYnMoc3RhYmlsaXR5KSA6IDg7XG4gICAgICB0aGlzLnNlbnNpdGl2aXR5ID0gc2Vuc2l0aXZpdHkgIT0gbnVsbCA/IDEgKyBNYXRoLmFicyhzZW5zaXRpdml0eSkgOiAxMDA7XG4gICAgICB0aGlzLnRvbGVyYW5jZSA9IHRvbGVyYW5jZSAhPSBudWxsID8gMSArIE1hdGguYWJzKHRvbGVyYW5jZSkgOiAxLjE7XG4gICAgICB0aGlzLmRlbGF5ID0gZGVsYXkgIT0gbnVsbCA/IGRlbGF5IDogMTUwO1xuICAgICAgdGhpcy5sYXN0VXBEZWx0YXMgPSAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBpLCByZWYsIHJlc3VsdHM7XG4gICAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICAgICAgZm9yIChpID0gMSwgcmVmID0gdGhpcy5zdGFiaWxpdHkgKiAyOyAxIDw9IHJlZiA/IGkgPD0gcmVmIDogaSA+PSByZWY7IDEgPD0gcmVmID8gaSsrIDogaS0tKSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgfSkuY2FsbCh0aGlzKTtcbiAgICAgIHRoaXMubGFzdERvd25EZWx0YXMgPSAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBpLCByZWYsIHJlc3VsdHM7XG4gICAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICAgICAgZm9yIChpID0gMSwgcmVmID0gdGhpcy5zdGFiaWxpdHkgKiAyOyAxIDw9IHJlZiA/IGkgPD0gcmVmIDogaSA+PSByZWY7IDEgPD0gcmVmID8gaSsrIDogaS0tKSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgfSkuY2FsbCh0aGlzKTtcbiAgICAgIHRoaXMuZGVsdGFzVGltZXN0YW1wID0gKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaSwgcmVmLCByZXN1bHRzO1xuICAgICAgICByZXN1bHRzID0gW107XG4gICAgICAgIGZvciAoaSA9IDEsIHJlZiA9IHRoaXMuc3RhYmlsaXR5ICogMjsgMSA8PSByZWYgPyBpIDw9IHJlZiA6IGkgPj0gcmVmOyAxIDw9IHJlZiA/IGkrKyA6IGktLSkge1xuICAgICAgICAgIHJlc3VsdHMucHVzaChudWxsKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgIH0pLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgTGV0aGFyZ3kucHJvdG90eXBlLmNoZWNrID0gZnVuY3Rpb24oZSkge1xuICAgICAgdmFyIGxhc3REZWx0YTtcbiAgICAgIGUgPSBlLm9yaWdpbmFsRXZlbnQgfHwgZTtcbiAgICAgIGlmIChlLndoZWVsRGVsdGEgIT0gbnVsbCkge1xuICAgICAgICBsYXN0RGVsdGEgPSBlLndoZWVsRGVsdGE7XG4gICAgICB9IGVsc2UgaWYgKGUuZGVsdGFZICE9IG51bGwpIHtcbiAgICAgICAgbGFzdERlbHRhID0gZS5kZWx0YVkgKiAtNDA7XG4gICAgICB9IGVsc2UgaWYgKChlLmRldGFpbCAhPSBudWxsKSB8fCBlLmRldGFpbCA9PT0gMCkge1xuICAgICAgICBsYXN0RGVsdGEgPSBlLmRldGFpbCAqIC00MDtcbiAgICAgIH1cbiAgICAgIHRoaXMuZGVsdGFzVGltZXN0YW1wLnB1c2goRGF0ZS5ub3coKSk7XG4gICAgICB0aGlzLmRlbHRhc1RpbWVzdGFtcC5zaGlmdCgpO1xuICAgICAgaWYgKGxhc3REZWx0YSA+IDApIHtcbiAgICAgICAgdGhpcy5sYXN0VXBEZWx0YXMucHVzaChsYXN0RGVsdGEpO1xuICAgICAgICB0aGlzLmxhc3RVcERlbHRhcy5zaGlmdCgpO1xuICAgICAgICByZXR1cm4gdGhpcy5pc0luZXJ0aWEoMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmxhc3REb3duRGVsdGFzLnB1c2gobGFzdERlbHRhKTtcbiAgICAgICAgdGhpcy5sYXN0RG93bkRlbHRhcy5zaGlmdCgpO1xuICAgICAgICByZXR1cm4gdGhpcy5pc0luZXJ0aWEoLTEpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBMZXRoYXJneS5wcm90b3R5cGUuaXNJbmVydGlhID0gZnVuY3Rpb24oZGlyZWN0aW9uKSB7XG4gICAgICB2YXIgbGFzdERlbHRhcywgbGFzdERlbHRhc05ldywgbGFzdERlbHRhc09sZCwgbmV3QXZlcmFnZSwgbmV3U3VtLCBvbGRBdmVyYWdlLCBvbGRTdW07XG4gICAgICBsYXN0RGVsdGFzID0gZGlyZWN0aW9uID09PSAtMSA/IHRoaXMubGFzdERvd25EZWx0YXMgOiB0aGlzLmxhc3RVcERlbHRhcztcbiAgICAgIGlmIChsYXN0RGVsdGFzWzBdID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBkaXJlY3Rpb247XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5kZWx0YXNUaW1lc3RhbXBbKHRoaXMuc3RhYmlsaXR5ICogMikgLSAyXSArIHRoaXMuZGVsYXkgPiBEYXRlLm5vdygpICYmIGxhc3REZWx0YXNbMF0gPT09IGxhc3REZWx0YXNbKHRoaXMuc3RhYmlsaXR5ICogMikgLSAxXSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBsYXN0RGVsdGFzT2xkID0gbGFzdERlbHRhcy5zbGljZSgwLCB0aGlzLnN0YWJpbGl0eSk7XG4gICAgICBsYXN0RGVsdGFzTmV3ID0gbGFzdERlbHRhcy5zbGljZSh0aGlzLnN0YWJpbGl0eSwgdGhpcy5zdGFiaWxpdHkgKiAyKTtcbiAgICAgIG9sZFN1bSA9IGxhc3REZWx0YXNPbGQucmVkdWNlKGZ1bmN0aW9uKHQsIHMpIHtcbiAgICAgICAgcmV0dXJuIHQgKyBzO1xuICAgICAgfSk7XG4gICAgICBuZXdTdW0gPSBsYXN0RGVsdGFzTmV3LnJlZHVjZShmdW5jdGlvbih0LCBzKSB7XG4gICAgICAgIHJldHVybiB0ICsgcztcbiAgICAgIH0pO1xuICAgICAgb2xkQXZlcmFnZSA9IG9sZFN1bSAvIGxhc3REZWx0YXNPbGQubGVuZ3RoO1xuICAgICAgbmV3QXZlcmFnZSA9IG5ld1N1bSAvIGxhc3REZWx0YXNOZXcubGVuZ3RoO1xuICAgICAgaWYgKE1hdGguYWJzKG9sZEF2ZXJhZ2UpIDwgTWF0aC5hYnMobmV3QXZlcmFnZSAqIHRoaXMudG9sZXJhbmNlKSAmJiAodGhpcy5zZW5zaXRpdml0eSA8IE1hdGguYWJzKG5ld0F2ZXJhZ2UpKSkge1xuICAgICAgICByZXR1cm4gZGlyZWN0aW9uO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBMZXRoYXJneS5wcm90b3R5cGUuc2hvd0xhc3RVcERlbHRhcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMubGFzdFVwRGVsdGFzO1xuICAgIH07XG5cbiAgICBMZXRoYXJneS5wcm90b3R5cGUuc2hvd0xhc3REb3duRGVsdGFzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5sYXN0RG93bkRlbHRhcztcbiAgICB9O1xuXG4gICAgcmV0dXJuIExldGhhcmd5O1xuXG4gIH0pKCk7XG5cbn0pLmNhbGwoY29tbW9uanNHbG9iYWwpO1xufSk7XG5cbnZhciBzdXBwb3J0ID0gKGZ1bmN0aW9uIGdldFN1cHBvcnQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaGFzV2hlZWxFdmVudDogJ29ud2hlZWwnIGluIGRvY3VtZW50LFxuICAgICAgICBoYXNNb3VzZVdoZWVsRXZlbnQ6ICdvbm1vdXNld2hlZWwnIGluIGRvY3VtZW50LFxuICAgICAgICBoYXNUb3VjaDogKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdykgfHwgd2luZG93LlRvdWNoRXZlbnQgfHwgd2luZG93LkRvY3VtZW50VG91Y2ggJiYgZG9jdW1lbnQgaW5zdGFuY2VvZiBEb2N1bWVudFRvdWNoLFxuICAgICAgICBoYXNUb3VjaFdpbjogbmF2aWdhdG9yLm1zTWF4VG91Y2hQb2ludHMgJiYgbmF2aWdhdG9yLm1zTWF4VG91Y2hQb2ludHMgPiAxLFxuICAgICAgICBoYXNQb2ludGVyOiAhIXdpbmRvdy5uYXZpZ2F0b3IubXNQb2ludGVyRW5hYmxlZCxcbiAgICAgICAgaGFzS2V5RG93bjogJ29ua2V5ZG93bicgaW4gZG9jdW1lbnQsXG4gICAgICAgIGlzRmlyZWZveDogbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdGaXJlZm94JykgPiAtMVxuICAgIH07XG59KSgpO1xuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLFxuICAgIGhhc093blByb3BlcnR5JDEgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG52YXIgYmluZGFsbFN0YW5kYWxvbmUgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICBpZighb2JqZWN0KSByZXR1cm4gY29uc29sZS53YXJuKCdiaW5kQWxsIHJlcXVpcmVzIGF0IGxlYXN0IG9uZSBhcmd1bWVudC4nKTtcblxuICAgIHZhciBmdW5jdGlvbnMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuXG4gICAgaWYgKGZ1bmN0aW9ucy5sZW5ndGggPT09IDApIHtcblxuICAgICAgICBmb3IgKHZhciBtZXRob2QgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgICBpZihoYXNPd25Qcm9wZXJ0eSQxLmNhbGwob2JqZWN0LCBtZXRob2QpKSB7XG4gICAgICAgICAgICAgICAgaWYodHlwZW9mIG9iamVjdFttZXRob2RdID09ICdmdW5jdGlvbicgJiYgdG9TdHJpbmcuY2FsbChvYmplY3RbbWV0aG9kXSkgPT0gXCJbb2JqZWN0IEZ1bmN0aW9uXVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9ucy5wdXNoKG1ldGhvZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IGZ1bmN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZiA9IGZ1bmN0aW9uc1tpXTtcbiAgICAgICAgb2JqZWN0W2ZdID0gYmluZChvYmplY3RbZl0sIG9iamVjdCk7XG4gICAgfVxufTtcblxuLypcbiAgICBGYXN0ZXIgYmluZCB3aXRob3V0IHNwZWNpZmljLWNhc2UgY2hlY2tpbmcuIChzZWUgaHR0cHM6Ly9jb2RlcndhbGwuY29tL3Avb2kzajN3KS5cbiAgICBiaW5kQWxsIGlzIG9ubHkgbmVlZGVkIGZvciBldmVudHMgYmluZGluZyBzbyBubyBuZWVkIHRvIG1ha2Ugc2xvdyBmaXhlcyBmb3IgY29uc3RydWN0b3JcbiAgICBvciBwYXJ0aWFsIGFwcGxpY2F0aW9uLlxuKi9cbmZ1bmN0aW9uIGJpbmQoZnVuYywgY29udGV4dCkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJndW1lbnRzKTtcbiAgfTtcbn1cblxudmFyIExldGhhcmd5ID0gbGV0aGFyZ3kuTGV0aGFyZ3k7XG5cblxuXG52YXIgRVZUX0lEID0gJ3ZpcnR1YWxzY3JvbGwnO1xuXG52YXIgc3JjID0gVmlydHVhbFNjcm9sbDtcblxudmFyIGtleUNvZGVzID0ge1xuICAgIExFRlQ6IDM3LFxuICAgIFVQOiAzOCxcbiAgICBSSUdIVDogMzksXG4gICAgRE9XTjogNDAsXG4gICAgU1BBQ0U6IDMyXG59O1xuXG5mdW5jdGlvbiBWaXJ0dWFsU2Nyb2xsKG9wdGlvbnMpIHtcbiAgICBiaW5kYWxsU3RhbmRhbG9uZSh0aGlzLCAnX29uV2hlZWwnLCAnX29uTW91c2VXaGVlbCcsICdfb25Ub3VjaFN0YXJ0JywgJ19vblRvdWNoTW92ZScsICdfb25LZXlEb3duJyk7XG5cbiAgICB0aGlzLmVsID0gd2luZG93O1xuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZWwpIHtcbiAgICAgICAgdGhpcy5lbCA9IG9wdGlvbnMuZWw7XG4gICAgICAgIGRlbGV0ZSBvcHRpb25zLmVsO1xuICAgIH1cbiAgICB0aGlzLm9wdGlvbnMgPSBvYmplY3RBc3NpZ24oe1xuICAgICAgICBtb3VzZU11bHRpcGxpZXI6IDEsXG4gICAgICAgIHRvdWNoTXVsdGlwbGllcjogMixcbiAgICAgICAgZmlyZWZveE11bHRpcGxpZXI6IDE1LFxuICAgICAgICBrZXlTdGVwOiAxMjAsXG4gICAgICAgIHByZXZlbnRUb3VjaDogZmFsc2UsXG4gICAgICAgIHVucHJldmVudFRvdWNoQ2xhc3M6ICd2cy10b3VjaG1vdmUtYWxsb3dlZCcsXG4gICAgICAgIGxpbWl0SW5lcnRpYTogZmFsc2UsXG4gICAgICAgIHVzZUtleWJvYXJkOiB0cnVlLFxuICAgICAgICB1c2VUb3VjaDogdHJ1ZVxuICAgIH0sIG9wdGlvbnMpO1xuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5saW1pdEluZXJ0aWEpIHRoaXMuX2xldGhhcmd5ID0gbmV3IExldGhhcmd5KCk7XG5cbiAgICB0aGlzLl9lbWl0dGVyID0gbmV3IHRpbnlFbWl0dGVyKCk7XG4gICAgdGhpcy5fZXZlbnQgPSB7XG4gICAgICAgIHk6IDAsXG4gICAgICAgIHg6IDAsXG4gICAgICAgIGRlbHRhWDogMCxcbiAgICAgICAgZGVsdGFZOiAwXG4gICAgfTtcbiAgICB0aGlzLnRvdWNoU3RhcnRYID0gbnVsbDtcbiAgICB0aGlzLnRvdWNoU3RhcnRZID0gbnVsbDtcbiAgICB0aGlzLmJvZHlUb3VjaEFjdGlvbiA9IG51bGw7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnBhc3NpdmUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLmxpc3RlbmVyT3B0aW9ucyA9IHtwYXNzaXZlOiB0aGlzLm9wdGlvbnMucGFzc2l2ZX07XG4gICAgfVxufVxuXG5WaXJ0dWFsU2Nyb2xsLnByb3RvdHlwZS5fbm90aWZ5ID0gZnVuY3Rpb24oZSkge1xuICAgIHZhciBldnQgPSB0aGlzLl9ldmVudDtcbiAgICBldnQueCArPSBldnQuZGVsdGFYO1xuICAgIGV2dC55ICs9IGV2dC5kZWx0YVk7XG5cbiAgIHRoaXMuX2VtaXR0ZXIuZW1pdChFVlRfSUQsIHtcbiAgICAgICAgeDogZXZ0LngsXG4gICAgICAgIHk6IGV2dC55LFxuICAgICAgICBkZWx0YVg6IGV2dC5kZWx0YVgsXG4gICAgICAgIGRlbHRhWTogZXZ0LmRlbHRhWSxcbiAgICAgICAgb3JpZ2luYWxFdmVudDogZVxuICAgfSk7XG59O1xuXG5WaXJ0dWFsU2Nyb2xsLnByb3RvdHlwZS5fb25XaGVlbCA9IGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICBpZiAodGhpcy5fbGV0aGFyZ3kgJiYgdGhpcy5fbGV0aGFyZ3kuY2hlY2soZSkgPT09IGZhbHNlKSByZXR1cm47XG4gICAgdmFyIGV2dCA9IHRoaXMuX2V2ZW50O1xuXG4gICAgLy8gSW4gQ2hyb21lIGFuZCBpbiBGaXJlZm94IChhdCBsZWFzdCB0aGUgbmV3IG9uZSlcbiAgICBldnQuZGVsdGFYID0gZS53aGVlbERlbHRhWCB8fCBlLmRlbHRhWCAqIC0xO1xuICAgIGV2dC5kZWx0YVkgPSBlLndoZWVsRGVsdGFZIHx8IGUuZGVsdGFZICogLTE7XG5cbiAgICAvLyBmb3Igb3VyIHB1cnBvc2UgZGVsdGFtb2RlID0gMSBtZWFucyB1c2VyIGlzIG9uIGEgd2hlZWwgbW91c2UsIG5vdCB0b3VjaCBwYWRcbiAgICAvLyByZWFsIG1lYW5pbmc6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaGVlbEV2ZW50I0RlbHRhX21vZGVzXG4gICAgaWYoc3VwcG9ydC5pc0ZpcmVmb3ggJiYgZS5kZWx0YU1vZGUgPT0gMSkge1xuICAgICAgICBldnQuZGVsdGFYICo9IG9wdGlvbnMuZmlyZWZveE11bHRpcGxpZXI7XG4gICAgICAgIGV2dC5kZWx0YVkgKj0gb3B0aW9ucy5maXJlZm94TXVsdGlwbGllcjtcbiAgICB9XG5cbiAgICBldnQuZGVsdGFYICo9IG9wdGlvbnMubW91c2VNdWx0aXBsaWVyO1xuICAgIGV2dC5kZWx0YVkgKj0gb3B0aW9ucy5tb3VzZU11bHRpcGxpZXI7XG5cbiAgICB0aGlzLl9ub3RpZnkoZSk7XG59O1xuXG5WaXJ0dWFsU2Nyb2xsLnByb3RvdHlwZS5fb25Nb3VzZVdoZWVsID0gZnVuY3Rpb24oZSkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMubGltaXRJbmVydGlhICYmIHRoaXMuX2xldGhhcmd5LmNoZWNrKGUpID09PSBmYWxzZSkgcmV0dXJuO1xuXG4gICAgdmFyIGV2dCA9IHRoaXMuX2V2ZW50O1xuXG4gICAgLy8gSW4gU2FmYXJpLCBJRSBhbmQgaW4gQ2hyb21lIGlmICd3aGVlbCcgaXNuJ3QgZGVmaW5lZFxuICAgIGV2dC5kZWx0YVggPSAoZS53aGVlbERlbHRhWCkgPyBlLndoZWVsRGVsdGFYIDogMDtcbiAgICBldnQuZGVsdGFZID0gKGUud2hlZWxEZWx0YVkpID8gZS53aGVlbERlbHRhWSA6IGUud2hlZWxEZWx0YTtcblxuICAgIHRoaXMuX25vdGlmeShlKTtcbn07XG5cblZpcnR1YWxTY3JvbGwucHJvdG90eXBlLl9vblRvdWNoU3RhcnQgPSBmdW5jdGlvbihlKSB7XG4gICAgdmFyIHQgPSAoZS50YXJnZXRUb3VjaGVzKSA/IGUudGFyZ2V0VG91Y2hlc1swXSA6IGU7XG4gICAgdGhpcy50b3VjaFN0YXJ0WCA9IHQucGFnZVg7XG4gICAgdGhpcy50b3VjaFN0YXJ0WSA9IHQucGFnZVk7XG59O1xuXG5WaXJ0dWFsU2Nyb2xsLnByb3RvdHlwZS5fb25Ub3VjaE1vdmUgPSBmdW5jdGlvbihlKSB7XG4gICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgaWYob3B0aW9ucy5wcmV2ZW50VG91Y2hcbiAgICAgICAgJiYgIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhvcHRpb25zLnVucHJldmVudFRvdWNoQ2xhc3MpKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICB2YXIgZXZ0ID0gdGhpcy5fZXZlbnQ7XG5cbiAgICB2YXIgdCA9IChlLnRhcmdldFRvdWNoZXMpID8gZS50YXJnZXRUb3VjaGVzWzBdIDogZTtcblxuICAgIGV2dC5kZWx0YVggPSAodC5wYWdlWCAtIHRoaXMudG91Y2hTdGFydFgpICogb3B0aW9ucy50b3VjaE11bHRpcGxpZXI7XG4gICAgZXZ0LmRlbHRhWSA9ICh0LnBhZ2VZIC0gdGhpcy50b3VjaFN0YXJ0WSkgKiBvcHRpb25zLnRvdWNoTXVsdGlwbGllcjtcblxuICAgIHRoaXMudG91Y2hTdGFydFggPSB0LnBhZ2VYO1xuICAgIHRoaXMudG91Y2hTdGFydFkgPSB0LnBhZ2VZO1xuXG4gICAgdGhpcy5fbm90aWZ5KGUpO1xufTtcblxuVmlydHVhbFNjcm9sbC5wcm90b3R5cGUuX29uS2V5RG93biA9IGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgZXZ0ID0gdGhpcy5fZXZlbnQ7XG4gICAgZXZ0LmRlbHRhWCA9IGV2dC5kZWx0YVkgPSAwO1xuICAgIHZhciB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSA0MDtcblxuICAgIHN3aXRjaChlLmtleUNvZGUpIHtcbiAgICAgICAgY2FzZSBrZXlDb2Rlcy5MRUZUOlxuICAgICAgICBjYXNlIGtleUNvZGVzLlVQOlxuICAgICAgICAgICAgZXZ0LmRlbHRhWSA9IHRoaXMub3B0aW9ucy5rZXlTdGVwO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBrZXlDb2Rlcy5SSUdIVDpcbiAgICAgICAgY2FzZSBrZXlDb2Rlcy5ET1dOOlxuICAgICAgICAgICAgZXZ0LmRlbHRhWSA9IC0gdGhpcy5vcHRpb25zLmtleVN0ZXA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAgZS5zaGlmdEtleTpcbiAgICAgICAgICAgIGV2dC5kZWx0YVkgPSB3aW5kb3dIZWlnaHQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBrZXlDb2Rlcy5TUEFDRTpcbiAgICAgICAgICAgIGV2dC5kZWx0YVkgPSAtIHdpbmRvd0hlaWdodDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX25vdGlmeShlKTtcbn07XG5cblZpcnR1YWxTY3JvbGwucHJvdG90eXBlLl9iaW5kID0gZnVuY3Rpb24oKSB7XG4gICAgaWYoc3VwcG9ydC5oYXNXaGVlbEV2ZW50KSB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgdGhpcy5fb25XaGVlbCwgdGhpcy5saXN0ZW5lck9wdGlvbnMpO1xuICAgIGlmKHN1cHBvcnQuaGFzTW91c2VXaGVlbEV2ZW50KSB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCB0aGlzLl9vbk1vdXNlV2hlZWwsIHRoaXMubGlzdGVuZXJPcHRpb25zKTtcblxuICAgIGlmKHN1cHBvcnQuaGFzVG91Y2ggJiYgdGhpcy5vcHRpb25zLnVzZVRvdWNoKSB7XG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuX29uVG91Y2hTdGFydCwgdGhpcy5saXN0ZW5lck9wdGlvbnMpO1xuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuX29uVG91Y2hNb3ZlLCB0aGlzLmxpc3RlbmVyT3B0aW9ucyk7XG4gICAgfVxuXG4gICAgaWYoc3VwcG9ydC5oYXNQb2ludGVyICYmIHN1cHBvcnQuaGFzVG91Y2hXaW4pIHtcbiAgICAgICAgdGhpcy5ib2R5VG91Y2hBY3Rpb24gPSBkb2N1bWVudC5ib2R5LnN0eWxlLm1zVG91Y2hBY3Rpb247XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUubXNUb3VjaEFjdGlvbiA9ICdub25lJztcbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdNU1BvaW50ZXJEb3duJywgdGhpcy5fb25Ub3VjaFN0YXJ0LCB0cnVlKTtcbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdNU1BvaW50ZXJNb3ZlJywgdGhpcy5fb25Ub3VjaE1vdmUsIHRydWUpO1xuICAgIH1cblxuICAgIGlmKHN1cHBvcnQuaGFzS2V5RG93biAmJiB0aGlzLm9wdGlvbnMudXNlS2V5Ym9hcmQpIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9vbktleURvd24pO1xufTtcblxuVmlydHVhbFNjcm9sbC5wcm90b3R5cGUuX3VuYmluZCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmKHN1cHBvcnQuaGFzV2hlZWxFdmVudCkgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCd3aGVlbCcsIHRoaXMuX29uV2hlZWwpO1xuICAgIGlmKHN1cHBvcnQuaGFzTW91c2VXaGVlbEV2ZW50KSB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCB0aGlzLl9vbk1vdXNlV2hlZWwpO1xuXG4gICAgaWYoc3VwcG9ydC5oYXNUb3VjaCkge1xuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLl9vblRvdWNoU3RhcnQpO1xuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuX29uVG91Y2hNb3ZlKTtcbiAgICB9XG5cbiAgICBpZihzdXBwb3J0Lmhhc1BvaW50ZXIgJiYgc3VwcG9ydC5oYXNUb3VjaFdpbikge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm1zVG91Y2hBY3Rpb24gPSB0aGlzLmJvZHlUb3VjaEFjdGlvbjtcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdNU1BvaW50ZXJEb3duJywgdGhpcy5fb25Ub3VjaFN0YXJ0LCB0cnVlKTtcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdNU1BvaW50ZXJNb3ZlJywgdGhpcy5fb25Ub3VjaE1vdmUsIHRydWUpO1xuICAgIH1cblxuICAgIGlmKHN1cHBvcnQuaGFzS2V5RG93biAmJiB0aGlzLm9wdGlvbnMudXNlS2V5Ym9hcmQpIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9vbktleURvd24pO1xufTtcblxuVmlydHVhbFNjcm9sbC5wcm90b3R5cGUub24gPSBmdW5jdGlvbihjYiwgY3R4KSB7XG4gIHRoaXMuX2VtaXR0ZXIub24oRVZUX0lELCBjYiwgY3R4KTtcblxuICB2YXIgZXZlbnRzID0gdGhpcy5fZW1pdHRlci5lO1xuICBpZiAoZXZlbnRzICYmIGV2ZW50c1tFVlRfSURdICYmIGV2ZW50c1tFVlRfSURdLmxlbmd0aCA9PT0gMSkgdGhpcy5fYmluZCgpO1xufTtcblxuVmlydHVhbFNjcm9sbC5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24oY2IsIGN0eCkge1xuICB0aGlzLl9lbWl0dGVyLm9mZihFVlRfSUQsIGNiLCBjdHgpO1xuXG4gIHZhciBldmVudHMgPSB0aGlzLl9lbWl0dGVyLmU7XG4gIGlmICghZXZlbnRzW0VWVF9JRF0gfHwgZXZlbnRzW0VWVF9JRF0ubGVuZ3RoIDw9IDApIHRoaXMuX3VuYmluZCgpO1xufTtcblxuVmlydHVhbFNjcm9sbC5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZXZ0ID0gdGhpcy5fZXZlbnQ7XG4gICAgZXZ0LnggPSAwO1xuICAgIGV2dC55ID0gMDtcbn07XG5cblZpcnR1YWxTY3JvbGwucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9lbWl0dGVyLm9mZigpO1xuICAgIHRoaXMuX3VuYmluZCgpO1xufTtcblxuZnVuY3Rpb24gbGVycChzdGFydCwgZW5kLCBhbXQpIHtcbiAgcmV0dXJuICgxIC0gYW10KSAqIHN0YXJ0ICsgYW10ICogZW5kO1xufVxuXG5mdW5jdGlvbiBnZXRUcmFuc2xhdGUoZWwpIHtcbiAgdmFyIHRyYW5zbGF0ZSA9IHt9O1xuICBpZiAoIXdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKSByZXR1cm47XG4gIHZhciBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWwpO1xuICB2YXIgdHJhbnNmb3JtID0gc3R5bGUudHJhbnNmb3JtIHx8IHN0eWxlLndlYmtpdFRyYW5zZm9ybSB8fCBzdHlsZS5tb3pUcmFuc2Zvcm07XG4gIHZhciBtYXQgPSB0cmFuc2Zvcm0ubWF0Y2goL15tYXRyaXgzZFxcKCguKylcXCkkLyk7XG5cbiAgaWYgKG1hdCkge1xuICAgIHRyYW5zbGF0ZS54ID0gbWF0ID8gcGFyc2VGbG9hdChtYXRbMV0uc3BsaXQoJywgJylbMTJdKSA6IDA7XG4gICAgdHJhbnNsYXRlLnkgPSBtYXQgPyBwYXJzZUZsb2F0KG1hdFsxXS5zcGxpdCgnLCAnKVsxM10pIDogMDtcbiAgfSBlbHNlIHtcbiAgICBtYXQgPSB0cmFuc2Zvcm0ubWF0Y2goL15tYXRyaXhcXCgoLispXFwpJC8pO1xuICAgIHRyYW5zbGF0ZS54ID0gbWF0ID8gcGFyc2VGbG9hdChtYXRbMV0uc3BsaXQoJywgJylbNF0pIDogMDtcbiAgICB0cmFuc2xhdGUueSA9IG1hdCA/IHBhcnNlRmxvYXQobWF0WzFdLnNwbGl0KCcsICcpWzVdKSA6IDA7XG4gIH1cblxuICByZXR1cm4gdHJhbnNsYXRlO1xufVxuXG4vKipcbiAqIFJldHVybnMgYW4gYXJyYXkgY29udGFpbmluZyBhbGwgdGhlIHBhcmVudCBub2RlcyBvZiB0aGUgZ2l2ZW4gbm9kZVxuICogQHBhcmFtICB7b2JqZWN0fSBub2RlXG4gKiBAcmV0dXJuIHthcnJheX0gcGFyZW50IG5vZGVzXG4gKi9cbmZ1bmN0aW9uIGdldFBhcmVudHMoZWxlbSkge1xuICAvLyBTZXQgdXAgYSBwYXJlbnQgYXJyYXlcbiAgdmFyIHBhcmVudHMgPSBbXTsgLy8gUHVzaCBlYWNoIHBhcmVudCBlbGVtZW50IHRvIHRoZSBhcnJheVxuXG4gIGZvciAoOyBlbGVtICYmIGVsZW0gIT09IGRvY3VtZW50OyBlbGVtID0gZWxlbS5wYXJlbnROb2RlKSB7XG4gICAgcGFyZW50cy5wdXNoKGVsZW0pO1xuICB9IC8vIFJldHVybiBvdXIgcGFyZW50IGFycmF5XG5cblxuICByZXR1cm4gcGFyZW50cztcbn0gLy8gaHR0cHM6Ly9nb21ha2V0aGluZ3MuY29tL2hvdy10by1nZXQtdGhlLWNsb3Nlc3QtcGFyZW50LWVsZW1lbnQtd2l0aC1hLW1hdGNoaW5nLXNlbGVjdG9yLXVzaW5nLXZhbmlsbGEtamF2YXNjcmlwdC9cblxuLyoqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZ3JlL2Jlemllci1lYXNpbmdcbiAqIEJlemllckVhc2luZyAtIHVzZSBiZXppZXIgY3VydmUgZm9yIHRyYW5zaXRpb24gZWFzaW5nIGZ1bmN0aW9uXG4gKiBieSBHYcOrdGFuIFJlbmF1ZGVhdSAyMDE0IC0gMjAxNSDigJMgTUlUIExpY2Vuc2VcbiAqL1xuXG4vLyBUaGVzZSB2YWx1ZXMgYXJlIGVzdGFibGlzaGVkIGJ5IGVtcGlyaWNpc20gd2l0aCB0ZXN0cyAodHJhZGVvZmY6IHBlcmZvcm1hbmNlIFZTIHByZWNpc2lvbilcbnZhciBORVdUT05fSVRFUkFUSU9OUyA9IDQ7XG52YXIgTkVXVE9OX01JTl9TTE9QRSA9IDAuMDAxO1xudmFyIFNVQkRJVklTSU9OX1BSRUNJU0lPTiA9IDAuMDAwMDAwMTtcbnZhciBTVUJESVZJU0lPTl9NQVhfSVRFUkFUSU9OUyA9IDEwO1xuXG52YXIga1NwbGluZVRhYmxlU2l6ZSA9IDExO1xudmFyIGtTYW1wbGVTdGVwU2l6ZSA9IDEuMCAvIChrU3BsaW5lVGFibGVTaXplIC0gMS4wKTtcblxudmFyIGZsb2F0MzJBcnJheVN1cHBvcnRlZCA9IHR5cGVvZiBGbG9hdDMyQXJyYXkgPT09ICdmdW5jdGlvbic7XG5cbmZ1bmN0aW9uIEEgKGFBMSwgYUEyKSB7IHJldHVybiAxLjAgLSAzLjAgKiBhQTIgKyAzLjAgKiBhQTE7IH1cbmZ1bmN0aW9uIEIgKGFBMSwgYUEyKSB7IHJldHVybiAzLjAgKiBhQTIgLSA2LjAgKiBhQTE7IH1cbmZ1bmN0aW9uIEMgKGFBMSkgICAgICB7IHJldHVybiAzLjAgKiBhQTE7IH1cblxuLy8gUmV0dXJucyB4KHQpIGdpdmVuIHQsIHgxLCBhbmQgeDIsIG9yIHkodCkgZ2l2ZW4gdCwgeTEsIGFuZCB5Mi5cbmZ1bmN0aW9uIGNhbGNCZXppZXIgKGFULCBhQTEsIGFBMikgeyByZXR1cm4gKChBKGFBMSwgYUEyKSAqIGFUICsgQihhQTEsIGFBMikpICogYVQgKyBDKGFBMSkpICogYVQ7IH1cblxuLy8gUmV0dXJucyBkeC9kdCBnaXZlbiB0LCB4MSwgYW5kIHgyLCBvciBkeS9kdCBnaXZlbiB0LCB5MSwgYW5kIHkyLlxuZnVuY3Rpb24gZ2V0U2xvcGUgKGFULCBhQTEsIGFBMikgeyByZXR1cm4gMy4wICogQShhQTEsIGFBMikgKiBhVCAqIGFUICsgMi4wICogQihhQTEsIGFBMikgKiBhVCArIEMoYUExKTsgfVxuXG5mdW5jdGlvbiBiaW5hcnlTdWJkaXZpZGUgKGFYLCBhQSwgYUIsIG1YMSwgbVgyKSB7XG4gIHZhciBjdXJyZW50WCwgY3VycmVudFQsIGkgPSAwO1xuICBkbyB7XG4gICAgY3VycmVudFQgPSBhQSArIChhQiAtIGFBKSAvIDIuMDtcbiAgICBjdXJyZW50WCA9IGNhbGNCZXppZXIoY3VycmVudFQsIG1YMSwgbVgyKSAtIGFYO1xuICAgIGlmIChjdXJyZW50WCA+IDAuMCkge1xuICAgICAgYUIgPSBjdXJyZW50VDtcbiAgICB9IGVsc2Uge1xuICAgICAgYUEgPSBjdXJyZW50VDtcbiAgICB9XG4gIH0gd2hpbGUgKE1hdGguYWJzKGN1cnJlbnRYKSA+IFNVQkRJVklTSU9OX1BSRUNJU0lPTiAmJiArK2kgPCBTVUJESVZJU0lPTl9NQVhfSVRFUkFUSU9OUyk7XG4gIHJldHVybiBjdXJyZW50VDtcbn1cblxuZnVuY3Rpb24gbmV3dG9uUmFwaHNvbkl0ZXJhdGUgKGFYLCBhR3Vlc3NULCBtWDEsIG1YMikge1xuIGZvciAodmFyIGkgPSAwOyBpIDwgTkVXVE9OX0lURVJBVElPTlM7ICsraSkge1xuICAgdmFyIGN1cnJlbnRTbG9wZSA9IGdldFNsb3BlKGFHdWVzc1QsIG1YMSwgbVgyKTtcbiAgIGlmIChjdXJyZW50U2xvcGUgPT09IDAuMCkge1xuICAgICByZXR1cm4gYUd1ZXNzVDtcbiAgIH1cbiAgIHZhciBjdXJyZW50WCA9IGNhbGNCZXppZXIoYUd1ZXNzVCwgbVgxLCBtWDIpIC0gYVg7XG4gICBhR3Vlc3NUIC09IGN1cnJlbnRYIC8gY3VycmVudFNsb3BlO1xuIH1cbiByZXR1cm4gYUd1ZXNzVDtcbn1cblxuZnVuY3Rpb24gTGluZWFyRWFzaW5nICh4KSB7XG4gIHJldHVybiB4O1xufVxuXG52YXIgc3JjJDEgPSBmdW5jdGlvbiBiZXppZXIgKG1YMSwgbVkxLCBtWDIsIG1ZMikge1xuICBpZiAoISgwIDw9IG1YMSAmJiBtWDEgPD0gMSAmJiAwIDw9IG1YMiAmJiBtWDIgPD0gMSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2JlemllciB4IHZhbHVlcyBtdXN0IGJlIGluIFswLCAxXSByYW5nZScpO1xuICB9XG5cbiAgaWYgKG1YMSA9PT0gbVkxICYmIG1YMiA9PT0gbVkyKSB7XG4gICAgcmV0dXJuIExpbmVhckVhc2luZztcbiAgfVxuXG4gIC8vIFByZWNvbXB1dGUgc2FtcGxlcyB0YWJsZVxuICB2YXIgc2FtcGxlVmFsdWVzID0gZmxvYXQzMkFycmF5U3VwcG9ydGVkID8gbmV3IEZsb2F0MzJBcnJheShrU3BsaW5lVGFibGVTaXplKSA6IG5ldyBBcnJheShrU3BsaW5lVGFibGVTaXplKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrU3BsaW5lVGFibGVTaXplOyArK2kpIHtcbiAgICBzYW1wbGVWYWx1ZXNbaV0gPSBjYWxjQmV6aWVyKGkgKiBrU2FtcGxlU3RlcFNpemUsIG1YMSwgbVgyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFRGb3JYIChhWCkge1xuICAgIHZhciBpbnRlcnZhbFN0YXJ0ID0gMC4wO1xuICAgIHZhciBjdXJyZW50U2FtcGxlID0gMTtcbiAgICB2YXIgbGFzdFNhbXBsZSA9IGtTcGxpbmVUYWJsZVNpemUgLSAxO1xuXG4gICAgZm9yICg7IGN1cnJlbnRTYW1wbGUgIT09IGxhc3RTYW1wbGUgJiYgc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdIDw9IGFYOyArK2N1cnJlbnRTYW1wbGUpIHtcbiAgICAgIGludGVydmFsU3RhcnQgKz0ga1NhbXBsZVN0ZXBTaXplO1xuICAgIH1cbiAgICAtLWN1cnJlbnRTYW1wbGU7XG5cbiAgICAvLyBJbnRlcnBvbGF0ZSB0byBwcm92aWRlIGFuIGluaXRpYWwgZ3Vlc3MgZm9yIHRcbiAgICB2YXIgZGlzdCA9IChhWCAtIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSkgLyAoc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGUgKyAxXSAtIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSk7XG4gICAgdmFyIGd1ZXNzRm9yVCA9IGludGVydmFsU3RhcnQgKyBkaXN0ICoga1NhbXBsZVN0ZXBTaXplO1xuXG4gICAgdmFyIGluaXRpYWxTbG9wZSA9IGdldFNsb3BlKGd1ZXNzRm9yVCwgbVgxLCBtWDIpO1xuICAgIGlmIChpbml0aWFsU2xvcGUgPj0gTkVXVE9OX01JTl9TTE9QRSkge1xuICAgICAgcmV0dXJuIG5ld3RvblJhcGhzb25JdGVyYXRlKGFYLCBndWVzc0ZvclQsIG1YMSwgbVgyKTtcbiAgICB9IGVsc2UgaWYgKGluaXRpYWxTbG9wZSA9PT0gMC4wKSB7XG4gICAgICByZXR1cm4gZ3Vlc3NGb3JUO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYmluYXJ5U3ViZGl2aWRlKGFYLCBpbnRlcnZhbFN0YXJ0LCBpbnRlcnZhbFN0YXJ0ICsga1NhbXBsZVN0ZXBTaXplLCBtWDEsIG1YMik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIEJlemllckVhc2luZyAoeCkge1xuICAgIC8vIEJlY2F1c2UgSmF2YVNjcmlwdCBudW1iZXIgYXJlIGltcHJlY2lzZSwgd2Ugc2hvdWxkIGd1YXJhbnRlZSB0aGUgZXh0cmVtZXMgYXJlIHJpZ2h0LlxuICAgIGlmICh4ID09PSAwKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgaWYgKHggPT09IDEpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICByZXR1cm4gY2FsY0JlemllcihnZXRURm9yWCh4KSwgbVkxLCBtWTIpO1xuICB9O1xufTtcblxudmFyIGtleUNvZGVzJDEgPSB7XG4gIExFRlQ6IDM3LFxuICBVUDogMzgsXG4gIFJJR0hUOiAzOSxcbiAgRE9XTjogNDAsXG4gIFNQQUNFOiAzMixcbiAgVEFCOiA5LFxuICBQQUdFVVA6IDMzLFxuICBQQUdFRE9XTjogMzQsXG4gIEhPTUU6IDM2LFxuICBFTkQ6IDM1XG59O1xuXG52YXIgX2RlZmF1bHQkMiA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvcmUpIHtcbiAgX2luaGVyaXRzKF9kZWZhdWx0LCBfQ29yZSk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihfZGVmYXVsdCk7XG5cbiAgZnVuY3Rpb24gX2RlZmF1bHQoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIF9kZWZhdWx0KTtcblxuICAgIGlmIChoaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICBoaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCc7XG4gICAgfVxuXG4gICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgb3B0aW9ucyk7XG4gICAgaWYgKF90aGlzLmluZXJ0aWEpIF90aGlzLmxlcnAgPSBfdGhpcy5pbmVydGlhICogMC4xO1xuICAgIF90aGlzLmlzU2Nyb2xsaW5nID0gZmFsc2U7XG4gICAgX3RoaXMuaXNEcmFnZ2luZ1Njcm9sbGJhciA9IGZhbHNlO1xuICAgIF90aGlzLmlzVGlja2luZyA9IGZhbHNlO1xuICAgIF90aGlzLmhhc1Njcm9sbFRpY2tpbmcgPSBmYWxzZTtcbiAgICBfdGhpcy5wYXJhbGxheEVsZW1lbnRzID0ge307XG4gICAgX3RoaXMuc3RvcCA9IGZhbHNlO1xuICAgIF90aGlzLnNjcm9sbGJhckNvbnRhaW5lciA9IG9wdGlvbnMuc2Nyb2xsYmFyQ29udGFpbmVyO1xuICAgIF90aGlzLmNoZWNrS2V5ID0gX3RoaXMuY2hlY2tLZXkuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBfdGhpcy5jaGVja0tleSwgZmFsc2UpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhfZGVmYXVsdCwgW3tcbiAgICBrZXk6IFwiaW5pdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHRoaXMuaHRtbC5jbGFzc0xpc3QuYWRkKHRoaXMuc21vb3RoQ2xhc3MpO1xuICAgICAgdGhpcy5odG1sLnNldEF0dHJpYnV0ZShcImRhdGEtXCIuY29uY2F0KHRoaXMubmFtZSwgXCItZGlyZWN0aW9uXCIpLCB0aGlzLmRpcmVjdGlvbik7XG4gICAgICB0aGlzLmluc3RhbmNlID0gX29iamVjdFNwcmVhZDIoe1xuICAgICAgICBkZWx0YToge1xuICAgICAgICAgIHg6IHRoaXMuaW5pdFBvc2l0aW9uLngsXG4gICAgICAgICAgeTogdGhpcy5pbml0UG9zaXRpb24ueVxuICAgICAgICB9LFxuICAgICAgICBzY3JvbGw6IHtcbiAgICAgICAgICB4OiB0aGlzLmluaXRQb3NpdGlvbi54LFxuICAgICAgICAgIHk6IHRoaXMuaW5pdFBvc2l0aW9uLnlcbiAgICAgICAgfVxuICAgICAgfSwgdGhpcy5pbnN0YW5jZSk7XG4gICAgICB0aGlzLnZzID0gbmV3IHNyYyh7XG4gICAgICAgIGVsOiB0aGlzLnNjcm9sbEZyb21Bbnl3aGVyZSA/IGRvY3VtZW50IDogdGhpcy5lbCxcbiAgICAgICAgbW91c2VNdWx0aXBsaWVyOiBuYXZpZ2F0b3IucGxhdGZvcm0uaW5kZXhPZignV2luJykgPiAtMSA/IDEgOiAwLjQsXG4gICAgICAgIGZpcmVmb3hNdWx0aXBsaWVyOiB0aGlzLmZpcmVmb3hNdWx0aXBsaWVyLFxuICAgICAgICB0b3VjaE11bHRpcGxpZXI6IHRoaXMudG91Y2hNdWx0aXBsaWVyLFxuICAgICAgICB1c2VLZXlib2FyZDogZmFsc2UsXG4gICAgICAgIHBhc3NpdmU6IHRydWVcbiAgICAgIH0pO1xuICAgICAgdGhpcy52cy5vbihmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoX3RoaXMyLnN0b3ApIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIV90aGlzMi5pc0RyYWdnaW5nU2Nyb2xsYmFyKSB7XG4gICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzMi51cGRhdGVEZWx0YShlKTtcblxuICAgICAgICAgICAgaWYgKCFfdGhpczIuaXNTY3JvbGxpbmcpIF90aGlzMi5zdGFydFNjcm9sbGluZygpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuc2V0U2Nyb2xsTGltaXQoKTtcbiAgICAgIHRoaXMuaW5pdFNjcm9sbEJhcigpO1xuICAgICAgdGhpcy5hZGRTZWN0aW9ucygpO1xuICAgICAgdGhpcy5hZGRFbGVtZW50cygpO1xuICAgICAgdGhpcy5jaGVja1Njcm9sbCh0cnVlKTtcbiAgICAgIHRoaXMudHJhbnNmb3JtRWxlbWVudHModHJ1ZSwgdHJ1ZSk7XG5cbiAgICAgIF9nZXQoX2dldFByb3RvdHlwZU9mKF9kZWZhdWx0LnByb3RvdHlwZSksIFwiaW5pdFwiLCB0aGlzKS5jYWxsKHRoaXMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRTY3JvbGxMaW1pdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRTY3JvbGxMaW1pdCgpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UubGltaXQueSA9IHRoaXMuZWwub2Zmc2V0SGVpZ2h0IC0gdGhpcy53aW5kb3dIZWlnaHQ7XG5cbiAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgIHZhciB0b3RhbFdpZHRoID0gMDtcbiAgICAgICAgdmFyIG5vZGVzID0gdGhpcy5lbC5jaGlsZHJlbjtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdG90YWxXaWR0aCArPSBub2Rlc1tpXS5vZmZzZXRXaWR0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW5zdGFuY2UubGltaXQueCA9IHRvdGFsV2lkdGggLSB0aGlzLndpbmRvd1dpZHRoO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzdGFydFNjcm9sbGluZ1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdGFydFNjcm9sbGluZygpIHtcbiAgICAgIHRoaXMuc3RhcnRTY3JvbGxUcyA9IERhdGUubm93KCk7IC8vIFJlY29yZCB0aW1lc3RhbXBcblxuICAgICAgdGhpcy5pc1Njcm9sbGluZyA9IHRydWU7XG4gICAgICB0aGlzLmNoZWNrU2Nyb2xsKCk7XG4gICAgICB0aGlzLmh0bWwuY2xhc3NMaXN0LmFkZCh0aGlzLnNjcm9sbGluZ0NsYXNzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic3RvcFNjcm9sbGluZ1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdG9wU2Nyb2xsaW5nKCkge1xuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5jaGVja1Njcm9sbFJhZik7IC8vIFByZXZlbnQgY2hlY2tTY3JvbGwgdG8gY29udGludWUgbG9vcGluZ1xuICAgICAgLy9QZXZlbnQgc2Nyb2xsYmFyIGdsaXRjaC9sb2NraW5nXG5cbiAgICAgIHRoaXMuc3RhcnRTY3JvbGxUcyA9IHVuZGVmaW5lZDtcblxuICAgICAgaWYgKHRoaXMuc2Nyb2xsVG9SYWYpIHtcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5zY3JvbGxUb1JhZik7XG4gICAgICAgIHRoaXMuc2Nyb2xsVG9SYWYgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmlzU2Nyb2xsaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLmluc3RhbmNlLnNjcm9sbC55ID0gTWF0aC5yb3VuZCh0aGlzLmluc3RhbmNlLnNjcm9sbC55KTtcbiAgICAgIHRoaXMuaHRtbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuc2Nyb2xsaW5nQ2xhc3MpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjaGVja0tleVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjaGVja0tleShlKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgaWYgKHRoaXMuc3RvcCkge1xuICAgICAgICAvLyBJZiB3ZSBhcmUgc3RvcHBlZCwgd2UgZG9uJ3Qgd2FudCBhbnkgc2Nyb2xsIHRvIG9jY3VyIGJlY2F1c2Ugb2YgYSBrZXlwcmVzc1xuICAgICAgICAvLyBQcmV2ZW50IHRhYiB0byBzY3JvbGwgdG8gYWN0aXZlRWxlbWVudFxuICAgICAgICBpZiAoZS5rZXlDb2RlID09IGtleUNvZGVzJDEuVEFCKSB7XG4gICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSBuYXRpdmUgc2Nyb2xsIGlzIGFsd2F5cyBhdCB0b3Agb2YgcGFnZVxuICAgICAgICAgICAgX3RoaXMzLmh0bWwuc2Nyb2xsVG9wID0gMDtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gMDtcbiAgICAgICAgICAgIF90aGlzMy5odG1sLnNjcm9sbExlZnQgPSAwO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0ID0gMDtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgICAgY2FzZSBrZXlDb2RlcyQxLlRBQjpcbiAgICAgICAgICAvLyBEbyBub3QgcmVtb3ZlIHRoZSBSQUZcbiAgICAgICAgICAvLyBJdCBhbGxvd3MgdG8gb3ZlcnJpZGUgdGhlIGJyb3dzZXIncyBuYXRpdmUgc2Nyb2xsVG8sIHdoaWNoIGlzIGVzc2VudGlhbFxuICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgbmF0aXZlIHNjcm9sbCBpcyBhbHdheXMgYXQgdG9wIG9mIHBhZ2VcbiAgICAgICAgICAgIF90aGlzMy5odG1sLnNjcm9sbFRvcCA9IDA7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IDA7XG4gICAgICAgICAgICBfdGhpczMuaHRtbC5zY3JvbGxMZWZ0ID0gMDtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdCA9IDA7IC8vIFJlcXVlc3Qgc2Nyb2xsVG8gb24gdGhlIGZvY3VzZWRFbGVtZW50LCBwdXR0aW5nIGl0IGF0IHRoZSBjZW50ZXIgb2YgdGhlIHNjcmVlblxuXG4gICAgICAgICAgICBfdGhpczMuc2Nyb2xsVG8oZG9jdW1lbnQuYWN0aXZlRWxlbWVudCwge1xuICAgICAgICAgICAgICBvZmZzZXQ6IC13aW5kb3cuaW5uZXJIZWlnaHQgLyAyXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIGtleUNvZGVzJDEuVVA6XG4gICAgICAgICAgaWYgKHRoaXMuaXNBY3RpdmVFbGVtZW50U2Nyb2xsU2Vuc2l0aXZlKCkpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UuZGVsdGFbdGhpcy5kaXJlY3Rpb25BeGlzXSAtPSAyNDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBrZXlDb2RlcyQxLkRPV046XG4gICAgICAgICAgaWYgKHRoaXMuaXNBY3RpdmVFbGVtZW50U2Nyb2xsU2Vuc2l0aXZlKCkpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UuZGVsdGFbdGhpcy5kaXJlY3Rpb25BeGlzXSArPSAyNDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBrZXlDb2RlcyQxLlBBR0VVUDpcbiAgICAgICAgICB0aGlzLmluc3RhbmNlLmRlbHRhW3RoaXMuZGlyZWN0aW9uQXhpc10gLT0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2Uga2V5Q29kZXMkMS5QQUdFRE9XTjpcbiAgICAgICAgICB0aGlzLmluc3RhbmNlLmRlbHRhW3RoaXMuZGlyZWN0aW9uQXhpc10gKz0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2Uga2V5Q29kZXMkMS5IT01FOlxuICAgICAgICAgIHRoaXMuaW5zdGFuY2UuZGVsdGFbdGhpcy5kaXJlY3Rpb25BeGlzXSAtPSB0aGlzLmluc3RhbmNlLmxpbWl0W3RoaXMuZGlyZWN0aW9uQXhpc107XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBrZXlDb2RlcyQxLkVORDpcbiAgICAgICAgICB0aGlzLmluc3RhbmNlLmRlbHRhW3RoaXMuZGlyZWN0aW9uQXhpc10gKz0gdGhpcy5pbnN0YW5jZS5saW1pdFt0aGlzLmRpcmVjdGlvbkF4aXNdO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2Uga2V5Q29kZXMkMS5TUEFDRTpcbiAgICAgICAgICBpZiAodGhpcy5pc0FjdGl2ZUVsZW1lbnRTY3JvbGxTZW5zaXRpdmUoKSkge1xuICAgICAgICAgICAgaWYgKGUuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5kZWx0YVt0aGlzLmRpcmVjdGlvbkF4aXNdIC09IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UuZGVsdGFbdGhpcy5kaXJlY3Rpb25BeGlzXSArPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmluc3RhbmNlLmRlbHRhW3RoaXMuZGlyZWN0aW9uQXhpc10gPCAwKSB0aGlzLmluc3RhbmNlLmRlbHRhW3RoaXMuZGlyZWN0aW9uQXhpc10gPSAwO1xuICAgICAgaWYgKHRoaXMuaW5zdGFuY2UuZGVsdGFbdGhpcy5kaXJlY3Rpb25BeGlzXSA+IHRoaXMuaW5zdGFuY2UubGltaXRbdGhpcy5kaXJlY3Rpb25BeGlzXSkgdGhpcy5pbnN0YW5jZS5kZWx0YVt0aGlzLmRpcmVjdGlvbkF4aXNdID0gdGhpcy5pbnN0YW5jZS5saW1pdFt0aGlzLmRpcmVjdGlvbkF4aXNdO1xuICAgICAgdGhpcy5zdG9wU2Nyb2xsaW5nKCk7IC8vIFN0b3AgYW55IG1vdmVtZW50LCBhbGxvd3MgdG8ga2lsbCBhbnkgb3RoZXIgYHNjcm9sbFRvYCBzdGlsbCBoYXBwZW5pbmdcblxuICAgICAgdGhpcy5pc1Njcm9sbGluZyA9IHRydWU7XG4gICAgICB0aGlzLmNoZWNrU2Nyb2xsKCk7XG4gICAgICB0aGlzLmh0bWwuY2xhc3NMaXN0LmFkZCh0aGlzLnNjcm9sbGluZ0NsYXNzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaXNBY3RpdmVFbGVtZW50U2Nyb2xsU2Vuc2l0aXZlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzQWN0aXZlRWxlbWVudFNjcm9sbFNlbnNpdGl2ZSgpIHtcbiAgICAgIHJldHVybiAhKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSAmJiAhKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MVGV4dEFyZWFFbGVtZW50KSAmJiAhKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MQnV0dG9uRWxlbWVudCkgJiYgIShkb2N1bWVudC5hY3RpdmVFbGVtZW50IGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjaGVja1Njcm9sbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjaGVja1Njcm9sbCgpIHtcbiAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICB2YXIgZm9yY2VkID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBmYWxzZTtcblxuICAgICAgaWYgKGZvcmNlZCB8fCB0aGlzLmlzU2Nyb2xsaW5nIHx8IHRoaXMuaXNEcmFnZ2luZ1Njcm9sbGJhcikge1xuICAgICAgICBpZiAoIXRoaXMuaGFzU2Nyb2xsVGlja2luZykge1xuICAgICAgICAgIHRoaXMuY2hlY2tTY3JvbGxSYWYgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzNC5jaGVja1Njcm9sbCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuaGFzU2Nyb2xsVGlja2luZyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZVNjcm9sbCgpO1xuICAgICAgICB2YXIgZGlzdGFuY2UgPSBNYXRoLmFicyh0aGlzLmluc3RhbmNlLmRlbHRhW3RoaXMuZGlyZWN0aW9uQXhpc10gLSB0aGlzLmluc3RhbmNlLnNjcm9sbFt0aGlzLmRpcmVjdGlvbkF4aXNdKTtcbiAgICAgICAgdmFyIHRpbWVTaW5jZVN0YXJ0ID0gRGF0ZS5ub3coKSAtIHRoaXMuc3RhcnRTY3JvbGxUczsgLy8gR2V0IHRoZSB0aW1lIHNpbmNlIHRoZSBzY3JvbGwgd2FzIHN0YXJ0ZWQ6IHRoZSBzY3JvbGwgY2FuIGJlIHN0b3BwZWQgYWdhaW4gb25seSBwYXN0IDEwMG1zXG5cbiAgICAgICAgaWYgKCF0aGlzLmFuaW1hdGluZ1Njcm9sbCAmJiB0aW1lU2luY2VTdGFydCA+IDEwMCAmJiAoZGlzdGFuY2UgPCAwLjUgJiYgdGhpcy5pbnN0YW5jZS5kZWx0YVt0aGlzLmRpcmVjdGlvbkF4aXNdICE9IDAgfHwgZGlzdGFuY2UgPCAwLjUgJiYgdGhpcy5pbnN0YW5jZS5kZWx0YVt0aGlzLmRpcmVjdGlvbkF4aXNdID09IDApKSB7XG4gICAgICAgICAgdGhpcy5zdG9wU2Nyb2xsaW5nKCk7XG4gICAgICAgIH1cblxuICAgICAgICBPYmplY3QuZW50cmllcyh0aGlzLnNlY3Rpb25zKS5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgICAgdmFyIF9yZWYyID0gX3NsaWNlZFRvQXJyYXkoX3JlZiwgMiksXG4gICAgICAgICAgICAgIGkgPSBfcmVmMlswXSxcbiAgICAgICAgICAgICAgc2VjdGlvbiA9IF9yZWYyWzFdO1xuXG4gICAgICAgICAgaWYgKHNlY3Rpb24ucGVyc2lzdGVudCB8fCBfdGhpczQuaW5zdGFuY2Uuc2Nyb2xsW190aGlzNC5kaXJlY3Rpb25BeGlzXSA+IHNlY3Rpb24ub2Zmc2V0W190aGlzNC5kaXJlY3Rpb25BeGlzXSAmJiBfdGhpczQuaW5zdGFuY2Uuc2Nyb2xsW190aGlzNC5kaXJlY3Rpb25BeGlzXSA8IHNlY3Rpb24ubGltaXRbX3RoaXM0LmRpcmVjdGlvbkF4aXNdKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXM0LmRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICAgIF90aGlzNC50cmFuc2Zvcm0oc2VjdGlvbi5lbCwgLV90aGlzNC5pbnN0YW5jZS5zY3JvbGxbX3RoaXM0LmRpcmVjdGlvbkF4aXNdLCAwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIF90aGlzNC50cmFuc2Zvcm0oc2VjdGlvbi5lbCwgMCwgLV90aGlzNC5pbnN0YW5jZS5zY3JvbGxbX3RoaXM0LmRpcmVjdGlvbkF4aXNdKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFzZWN0aW9uLmluVmlldykge1xuICAgICAgICAgICAgICBzZWN0aW9uLmluVmlldyA9IHRydWU7XG4gICAgICAgICAgICAgIHNlY3Rpb24uZWwuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICAgICAgICAgIHNlY3Rpb24uZWwuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdhbGwnO1xuICAgICAgICAgICAgICBzZWN0aW9uLmVsLnNldEF0dHJpYnV0ZShcImRhdGEtXCIuY29uY2F0KF90aGlzNC5uYW1lLCBcIi1zZWN0aW9uLWludmlld1wiKSwgJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoc2VjdGlvbi5pblZpZXcgfHwgZm9yY2VkKSB7XG4gICAgICAgICAgICAgIHNlY3Rpb24uaW5WaWV3ID0gZmFsc2U7XG4gICAgICAgICAgICAgIHNlY3Rpb24uZWwuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICAgIHNlY3Rpb24uZWwuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICAgICAgICAgICAgc2VjdGlvbi5lbC5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLVwiLmNvbmNhdChfdGhpczQubmFtZSwgXCItc2VjdGlvbi1pbnZpZXdcIikpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfdGhpczQudHJhbnNmb3JtKHNlY3Rpb24uZWwsIDAsIDApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMuZ2V0RGlyZWN0aW9uKSB7XG4gICAgICAgICAgdGhpcy5hZGREaXJlY3Rpb24oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmdldFNwZWVkKSB7XG4gICAgICAgICAgdGhpcy5hZGRTcGVlZCgpO1xuICAgICAgICAgIHRoaXMuc3BlZWRUcyA9IERhdGUubm93KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRldGVjdEVsZW1lbnRzKCk7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtRWxlbWVudHMoKTtcblxuICAgICAgICBpZiAodGhpcy5oYXNTY3JvbGxiYXIpIHtcbiAgICAgICAgICB2YXIgc2Nyb2xsQmFyVHJhbnNsYXRpb24gPSB0aGlzLmluc3RhbmNlLnNjcm9sbFt0aGlzLmRpcmVjdGlvbkF4aXNdIC8gdGhpcy5pbnN0YW5jZS5saW1pdFt0aGlzLmRpcmVjdGlvbkF4aXNdICogdGhpcy5zY3JvbGxCYXJMaW1pdFt0aGlzLmRpcmVjdGlvbkF4aXNdO1xuXG4gICAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtKHRoaXMuc2Nyb2xsYmFyVGh1bWIsIHNjcm9sbEJhclRyYW5zbGF0aW9uLCAwKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0odGhpcy5zY3JvbGxiYXJUaHVtYiwgMCwgc2Nyb2xsQmFyVHJhbnNsYXRpb24pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIF9nZXQoX2dldFByb3RvdHlwZU9mKF9kZWZhdWx0LnByb3RvdHlwZSksIFwiY2hlY2tTY3JvbGxcIiwgdGhpcykuY2FsbCh0aGlzKTtcblxuICAgICAgICB0aGlzLmhhc1Njcm9sbFRpY2tpbmcgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVzaXplXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2l6ZSgpIHtcbiAgICAgIHRoaXMud2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgdGhpcy53aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgdGhpcy5jaGVja0NvbnRleHQoKTtcbiAgICAgIHRoaXMud2luZG93TWlkZGxlID0ge1xuICAgICAgICB4OiB0aGlzLndpbmRvd1dpZHRoIC8gMixcbiAgICAgICAgeTogdGhpcy53aW5kb3dIZWlnaHQgLyAyXG4gICAgICB9O1xuICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidXBkYXRlRGVsdGFcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlRGVsdGEoZSkge1xuICAgICAgdmFyIGRlbHRhO1xuICAgICAgdmFyIGdlc3R1cmVEaXJlY3Rpb24gPSB0aGlzW3RoaXMuY29udGV4dF0gJiYgdGhpc1t0aGlzLmNvbnRleHRdLmdlc3R1cmVEaXJlY3Rpb24gPyB0aGlzW3RoaXMuY29udGV4dF0uZ2VzdHVyZURpcmVjdGlvbiA6IHRoaXMuZ2VzdHVyZURpcmVjdGlvbjtcblxuICAgICAgaWYgKGdlc3R1cmVEaXJlY3Rpb24gPT09ICdib3RoJykge1xuICAgICAgICBkZWx0YSA9IGUuZGVsdGFYICsgZS5kZWx0YVk7XG4gICAgICB9IGVsc2UgaWYgKGdlc3R1cmVEaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgZGVsdGEgPSBlLmRlbHRhWTtcbiAgICAgIH0gZWxzZSBpZiAoZ2VzdHVyZURpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgIGRlbHRhID0gZS5kZWx0YVg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWx0YSA9IGUuZGVsdGFZO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmluc3RhbmNlLmRlbHRhW3RoaXMuZGlyZWN0aW9uQXhpc10gLT0gZGVsdGEgKiB0aGlzLm11bHRpcGxpZXI7XG4gICAgICBpZiAodGhpcy5pbnN0YW5jZS5kZWx0YVt0aGlzLmRpcmVjdGlvbkF4aXNdIDwgMCkgdGhpcy5pbnN0YW5jZS5kZWx0YVt0aGlzLmRpcmVjdGlvbkF4aXNdID0gMDtcbiAgICAgIGlmICh0aGlzLmluc3RhbmNlLmRlbHRhW3RoaXMuZGlyZWN0aW9uQXhpc10gPiB0aGlzLmluc3RhbmNlLmxpbWl0W3RoaXMuZGlyZWN0aW9uQXhpc10pIHRoaXMuaW5zdGFuY2UuZGVsdGFbdGhpcy5kaXJlY3Rpb25BeGlzXSA9IHRoaXMuaW5zdGFuY2UubGltaXRbdGhpcy5kaXJlY3Rpb25BeGlzXTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidXBkYXRlU2Nyb2xsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZVNjcm9sbChlKSB7XG4gICAgICBpZiAodGhpcy5pc1Njcm9sbGluZyB8fCB0aGlzLmlzRHJhZ2dpbmdTY3JvbGxiYXIpIHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zY3JvbGxbdGhpcy5kaXJlY3Rpb25BeGlzXSA9IGxlcnAodGhpcy5pbnN0YW5jZS5zY3JvbGxbdGhpcy5kaXJlY3Rpb25BeGlzXSwgdGhpcy5pbnN0YW5jZS5kZWx0YVt0aGlzLmRpcmVjdGlvbkF4aXNdLCB0aGlzLmxlcnApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2Nyb2xsW3RoaXMuZGlyZWN0aW9uQXhpc10gPiB0aGlzLmluc3RhbmNlLmxpbWl0W3RoaXMuZGlyZWN0aW9uQXhpc10pIHtcbiAgICAgICAgICB0aGlzLnNldFNjcm9sbCh0aGlzLmluc3RhbmNlLnNjcm9sbFt0aGlzLmRpcmVjdGlvbkF4aXNdLCB0aGlzLmluc3RhbmNlLmxpbWl0W3RoaXMuZGlyZWN0aW9uQXhpc10pO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkgPCAwKSB7XG4gICAgICAgICAgdGhpcy5zZXRTY3JvbGwodGhpcy5pbnN0YW5jZS5zY3JvbGxbdGhpcy5kaXJlY3Rpb25BeGlzXSwgMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRTY3JvbGwodGhpcy5pbnN0YW5jZS5zY3JvbGxbdGhpcy5kaXJlY3Rpb25BeGlzXSwgdGhpcy5pbnN0YW5jZS5kZWx0YVt0aGlzLmRpcmVjdGlvbkF4aXNdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJhZGREaXJlY3Rpb25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkRGlyZWN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMuaW5zdGFuY2UuZGVsdGEueSA+IHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2UuZGlyZWN0aW9uICE9PSAnZG93bicpIHtcbiAgICAgICAgICB0aGlzLmluc3RhbmNlLmRpcmVjdGlvbiA9ICdkb3duJztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLmluc3RhbmNlLmRlbHRhLnkgPCB0aGlzLmluc3RhbmNlLnNjcm9sbC55KSB7XG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlLmRpcmVjdGlvbiAhPT0gJ3VwJykge1xuICAgICAgICAgIHRoaXMuaW5zdGFuY2UuZGlyZWN0aW9uID0gJ3VwJztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5pbnN0YW5jZS5kZWx0YS54ID4gdGhpcy5pbnN0YW5jZS5zY3JvbGwueCkge1xuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZS5kaXJlY3Rpb24gIT09ICdyaWdodCcpIHtcbiAgICAgICAgICB0aGlzLmluc3RhbmNlLmRpcmVjdGlvbiA9ICdyaWdodCc7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pbnN0YW5jZS5kZWx0YS54IDwgdGhpcy5pbnN0YW5jZS5zY3JvbGwueCkge1xuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZS5kaXJlY3Rpb24gIT09ICdsZWZ0Jykge1xuICAgICAgICAgIHRoaXMuaW5zdGFuY2UuZGlyZWN0aW9uID0gJ2xlZnQnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImFkZFNwZWVkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZFNwZWVkKCkge1xuICAgICAgaWYgKHRoaXMuaW5zdGFuY2UuZGVsdGFbdGhpcy5kaXJlY3Rpb25BeGlzXSAhPSB0aGlzLmluc3RhbmNlLnNjcm9sbFt0aGlzLmRpcmVjdGlvbkF4aXNdKSB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc3BlZWQgPSAodGhpcy5pbnN0YW5jZS5kZWx0YVt0aGlzLmRpcmVjdGlvbkF4aXNdIC0gdGhpcy5pbnN0YW5jZS5zY3JvbGxbdGhpcy5kaXJlY3Rpb25BeGlzXSkgLyBNYXRoLm1heCgxLCBEYXRlLm5vdygpIC0gdGhpcy5zcGVlZFRzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc3BlZWQgPSAwO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpbml0U2Nyb2xsQmFyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGluaXRTY3JvbGxCYXIoKSB7XG4gICAgICB0aGlzLnNjcm9sbGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIHRoaXMuc2Nyb2xsYmFyVGh1bWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICB0aGlzLnNjcm9sbGJhci5jbGFzc0xpc3QuYWRkKFwiXCIuY29uY2F0KHRoaXMuc2Nyb2xsYmFyQ2xhc3MpKTtcbiAgICAgIHRoaXMuc2Nyb2xsYmFyVGh1bWIuY2xhc3NMaXN0LmFkZChcIlwiLmNvbmNhdCh0aGlzLnNjcm9sbGJhckNsYXNzLCBcIl90aHVtYlwiKSk7XG4gICAgICB0aGlzLnNjcm9sbGJhci5hcHBlbmQodGhpcy5zY3JvbGxiYXJUaHVtYik7XG5cbiAgICAgIGlmICh0aGlzLnNjcm9sbGJhckNvbnRhaW5lcikge1xuICAgICAgICB0aGlzLnNjcm9sbGJhckNvbnRhaW5lci5hcHBlbmQodGhpcy5zY3JvbGxiYXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQodGhpcy5zY3JvbGxiYXIpO1xuICAgICAgfSAvLyBTY3JvbGxiYXIgRXZlbnRzXG5cblxuICAgICAgdGhpcy5nZXRTY3JvbGxCYXIgPSB0aGlzLmdldFNjcm9sbEJhci5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy5yZWxlYXNlU2Nyb2xsQmFyID0gdGhpcy5yZWxlYXNlU2Nyb2xsQmFyLmJpbmQodGhpcyk7XG4gICAgICB0aGlzLm1vdmVTY3JvbGxCYXIgPSB0aGlzLm1vdmVTY3JvbGxCYXIuYmluZCh0aGlzKTtcbiAgICAgIHRoaXMuc2Nyb2xsYmFyVGh1bWIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5nZXRTY3JvbGxCYXIpO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLnJlbGVhc2VTY3JvbGxCYXIpO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMubW92ZVNjcm9sbEJhcik7IC8vIFNldCBzY3JvbGxiYXIgdmFsdWVzXG5cbiAgICAgIHRoaXMuaGFzU2Nyb2xsYmFyID0gZmFsc2U7XG5cbiAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2UubGltaXQueCArIHRoaXMud2luZG93V2lkdGggPD0gdGhpcy53aW5kb3dXaWR0aCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2UubGltaXQueSArIHRoaXMud2luZG93SGVpZ2h0IDw9IHRoaXMud2luZG93SGVpZ2h0KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaGFzU2Nyb2xsYmFyID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2Nyb2xsYmFyQkNSID0gdGhpcy5zY3JvbGxiYXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICB0aGlzLnNjcm9sbGJhckhlaWdodCA9IHRoaXMuc2Nyb2xsYmFyQkNSLmhlaWdodDtcbiAgICAgIHRoaXMuc2Nyb2xsYmFyV2lkdGggPSB0aGlzLnNjcm9sbGJhckJDUi53aWR0aDtcblxuICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxiYXJUaHVtYi5zdHlsZS53aWR0aCA9IFwiXCIuY29uY2F0KHRoaXMuc2Nyb2xsYmFyV2lkdGggKiB0aGlzLnNjcm9sbGJhcldpZHRoIC8gKHRoaXMuaW5zdGFuY2UubGltaXQueCArIHRoaXMuc2Nyb2xsYmFyV2lkdGgpLCBcInB4XCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zY3JvbGxiYXJUaHVtYi5zdHlsZS5oZWlnaHQgPSBcIlwiLmNvbmNhdCh0aGlzLnNjcm9sbGJhckhlaWdodCAqIHRoaXMuc2Nyb2xsYmFySGVpZ2h0IC8gKHRoaXMuaW5zdGFuY2UubGltaXQueSArIHRoaXMuc2Nyb2xsYmFySGVpZ2h0KSwgXCJweFwiKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zY3JvbGxiYXJUaHVtYkJDUiA9IHRoaXMuc2Nyb2xsYmFyVGh1bWIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICB0aGlzLnNjcm9sbEJhckxpbWl0ID0ge1xuICAgICAgICB4OiB0aGlzLnNjcm9sbGJhcldpZHRoIC0gdGhpcy5zY3JvbGxiYXJUaHVtYkJDUi53aWR0aCxcbiAgICAgICAgeTogdGhpcy5zY3JvbGxiYXJIZWlnaHQgLSB0aGlzLnNjcm9sbGJhclRodW1iQkNSLmhlaWdodFxuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVpbml0U2Nyb2xsQmFyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlaW5pdFNjcm9sbEJhcigpIHtcbiAgICAgIHRoaXMuaGFzU2Nyb2xsYmFyID0gZmFsc2U7XG5cbiAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2UubGltaXQueCArIHRoaXMud2luZG93V2lkdGggPD0gdGhpcy53aW5kb3dXaWR0aCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2UubGltaXQueSArIHRoaXMud2luZG93SGVpZ2h0IDw9IHRoaXMud2luZG93SGVpZ2h0KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaGFzU2Nyb2xsYmFyID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2Nyb2xsYmFyQkNSID0gdGhpcy5zY3JvbGxiYXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICB0aGlzLnNjcm9sbGJhckhlaWdodCA9IHRoaXMuc2Nyb2xsYmFyQkNSLmhlaWdodDtcbiAgICAgIHRoaXMuc2Nyb2xsYmFyV2lkdGggPSB0aGlzLnNjcm9sbGJhckJDUi53aWR0aDtcblxuICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxiYXJUaHVtYi5zdHlsZS53aWR0aCA9IFwiXCIuY29uY2F0KHRoaXMuc2Nyb2xsYmFyV2lkdGggKiB0aGlzLnNjcm9sbGJhcldpZHRoIC8gKHRoaXMuaW5zdGFuY2UubGltaXQueCArIHRoaXMuc2Nyb2xsYmFyV2lkdGgpLCBcInB4XCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zY3JvbGxiYXJUaHVtYi5zdHlsZS5oZWlnaHQgPSBcIlwiLmNvbmNhdCh0aGlzLnNjcm9sbGJhckhlaWdodCAqIHRoaXMuc2Nyb2xsYmFySGVpZ2h0IC8gKHRoaXMuaW5zdGFuY2UubGltaXQueSArIHRoaXMuc2Nyb2xsYmFySGVpZ2h0KSwgXCJweFwiKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zY3JvbGxiYXJUaHVtYkJDUiA9IHRoaXMuc2Nyb2xsYmFyVGh1bWIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICB0aGlzLnNjcm9sbEJhckxpbWl0ID0ge1xuICAgICAgICB4OiB0aGlzLnNjcm9sbGJhcldpZHRoIC0gdGhpcy5zY3JvbGxiYXJUaHVtYkJDUi53aWR0aCxcbiAgICAgICAgeTogdGhpcy5zY3JvbGxiYXJIZWlnaHQgLSB0aGlzLnNjcm9sbGJhclRodW1iQkNSLmhlaWdodFxuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZGVzdHJveVNjcm9sbEJhclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95U2Nyb2xsQmFyKCkge1xuICAgICAgdGhpcy5zY3JvbGxiYXJUaHVtYi5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmdldFNjcm9sbEJhcik7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMucmVsZWFzZVNjcm9sbEJhcik7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5tb3ZlU2Nyb2xsQmFyKTtcbiAgICAgIHRoaXMuc2Nyb2xsYmFyLnJlbW92ZSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRTY3JvbGxCYXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U2Nyb2xsQmFyKGUpIHtcbiAgICAgIHRoaXMuaXNEcmFnZ2luZ1Njcm9sbGJhciA9IHRydWU7XG4gICAgICB0aGlzLmNoZWNrU2Nyb2xsKCk7XG4gICAgICB0aGlzLmh0bWwuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLnNjcm9sbGluZ0NsYXNzKTtcbiAgICAgIHRoaXMuaHRtbC5jbGFzc0xpc3QuYWRkKHRoaXMuZHJhZ2dpbmdDbGFzcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbGVhc2VTY3JvbGxCYXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVsZWFzZVNjcm9sbEJhcihlKSB7XG4gICAgICB0aGlzLmlzRHJhZ2dpbmdTY3JvbGxiYXIgPSBmYWxzZTtcblxuICAgICAgaWYgKHRoaXMuaXNTY3JvbGxpbmcpIHtcbiAgICAgICAgdGhpcy5odG1sLmNsYXNzTGlzdC5hZGQodGhpcy5zY3JvbGxpbmdDbGFzcyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaHRtbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuZHJhZ2dpbmdDbGFzcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm1vdmVTY3JvbGxCYXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbW92ZVNjcm9sbEJhcihlKSB7XG4gICAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgICAgaWYgKHRoaXMuaXNEcmFnZ2luZ1Njcm9sbGJhcikge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciB4ID0gKGUuY2xpZW50WCAtIF90aGlzNS5zY3JvbGxiYXJCQ1IubGVmdCkgKiAxMDAgLyBfdGhpczUuc2Nyb2xsYmFyV2lkdGggKiBfdGhpczUuaW5zdGFuY2UubGltaXQueCAvIDEwMDtcbiAgICAgICAgICB2YXIgeSA9IChlLmNsaWVudFkgLSBfdGhpczUuc2Nyb2xsYmFyQkNSLnRvcCkgKiAxMDAgLyBfdGhpczUuc2Nyb2xsYmFySGVpZ2h0ICogX3RoaXM1Lmluc3RhbmNlLmxpbWl0LnkgLyAxMDA7XG5cbiAgICAgICAgICBpZiAoeSA+IDAgJiYgeSA8IF90aGlzNS5pbnN0YW5jZS5saW1pdC55KSB7XG4gICAgICAgICAgICBfdGhpczUuaW5zdGFuY2UuZGVsdGEueSA9IHk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHggPiAwICYmIHggPCBfdGhpczUuaW5zdGFuY2UubGltaXQueCkge1xuICAgICAgICAgICAgX3RoaXM1Lmluc3RhbmNlLmRlbHRhLnggPSB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImFkZEVsZW1lbnRzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZEVsZW1lbnRzKCkge1xuICAgICAgdmFyIF90aGlzNiA9IHRoaXM7XG5cbiAgICAgIHRoaXMuZWxzID0ge307XG4gICAgICB0aGlzLnBhcmFsbGF4RWxlbWVudHMgPSB7fTsgLy8gdGhpcy5zZWN0aW9ucy5mb3JFYWNoKChzZWN0aW9uLCB5KSA9PiB7XG5cbiAgICAgIHZhciBlbHMgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1cIi5jb25jYXQodGhpcy5uYW1lLCBcIl1cIikpO1xuICAgICAgZWxzLmZvckVhY2goZnVuY3Rpb24gKGVsLCBpbmRleCkge1xuICAgICAgICAvLyBUcnkgYW5kIGZpbmQgdGhlIHRhcmdldCdzIHBhcmVudCBzZWN0aW9uXG4gICAgICAgIHZhciB0YXJnZXRQYXJlbnRzID0gZ2V0UGFyZW50cyhlbCk7XG4gICAgICAgIHZhciBzZWN0aW9uID0gT2JqZWN0LmVudHJpZXMoX3RoaXM2LnNlY3Rpb25zKS5tYXAoZnVuY3Rpb24gKF9yZWYzKSB7XG4gICAgICAgICAgdmFyIF9yZWY0ID0gX3NsaWNlZFRvQXJyYXkoX3JlZjMsIDIpLFxuICAgICAgICAgICAgICBrZXkgPSBfcmVmNFswXSxcbiAgICAgICAgICAgICAgc2VjdGlvbiA9IF9yZWY0WzFdO1xuXG4gICAgICAgICAgcmV0dXJuIHNlY3Rpb247XG4gICAgICAgIH0pLmZpbmQoZnVuY3Rpb24gKHNlY3Rpb24pIHtcbiAgICAgICAgICByZXR1cm4gdGFyZ2V0UGFyZW50cy5pbmNsdWRlcyhzZWN0aW9uLmVsKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBjbCA9IGVsLmRhdGFzZXRbX3RoaXM2Lm5hbWUgKyAnQ2xhc3MnXSB8fCBfdGhpczZbXCJjbGFzc1wiXTtcbiAgICAgICAgdmFyIGlkID0gdHlwZW9mIGVsLmRhdGFzZXRbX3RoaXM2Lm5hbWUgKyAnSWQnXSA9PT0gJ3N0cmluZycgPyBlbC5kYXRhc2V0W190aGlzNi5uYW1lICsgJ0lkJ10gOiAnZWwnICsgaW5kZXg7XG4gICAgICAgIHZhciB0b3A7XG4gICAgICAgIHZhciBsZWZ0O1xuICAgICAgICB2YXIgcmVwZWF0ID0gZWwuZGF0YXNldFtfdGhpczYubmFtZSArICdSZXBlYXQnXTtcbiAgICAgICAgdmFyIGNhbGwgPSBlbC5kYXRhc2V0W190aGlzNi5uYW1lICsgJ0NhbGwnXTtcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gZWwuZGF0YXNldFtfdGhpczYubmFtZSArICdQb3NpdGlvbiddO1xuICAgICAgICB2YXIgZGVsYXkgPSBlbC5kYXRhc2V0W190aGlzNi5uYW1lICsgJ0RlbGF5J107XG4gICAgICAgIHZhciBkaXJlY3Rpb24gPSBlbC5kYXRhc2V0W190aGlzNi5uYW1lICsgJ0RpcmVjdGlvbiddO1xuICAgICAgICB2YXIgc3RpY2t5ID0gdHlwZW9mIGVsLmRhdGFzZXRbX3RoaXM2Lm5hbWUgKyAnU3RpY2t5J10gPT09ICdzdHJpbmcnO1xuICAgICAgICB2YXIgc3BlZWQgPSBlbC5kYXRhc2V0W190aGlzNi5uYW1lICsgJ1NwZWVkJ10gPyBwYXJzZUZsb2F0KGVsLmRhdGFzZXRbX3RoaXM2Lm5hbWUgKyAnU3BlZWQnXSkgLyAxMCA6IGZhbHNlO1xuICAgICAgICB2YXIgb2Zmc2V0ID0gdHlwZW9mIGVsLmRhdGFzZXRbX3RoaXM2Lm5hbWUgKyAnT2Zmc2V0J10gPT09ICdzdHJpbmcnID8gZWwuZGF0YXNldFtfdGhpczYubmFtZSArICdPZmZzZXQnXS5zcGxpdCgnLCcpIDogX3RoaXM2Lm9mZnNldDtcbiAgICAgICAgdmFyIHRhcmdldCA9IGVsLmRhdGFzZXRbX3RoaXM2Lm5hbWUgKyAnVGFyZ2V0J107XG4gICAgICAgIHZhciB0YXJnZXRFbDtcblxuICAgICAgICBpZiAodGFyZ2V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0YXJnZXRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJcIi5jb25jYXQodGFyZ2V0KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGFyZ2V0RWwgPSBlbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0YXJnZXRFbEJDUiA9IHRhcmdldEVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgIGlmIChzZWN0aW9uID09PSBudWxsKSB7XG4gICAgICAgICAgdG9wID0gdGFyZ2V0RWxCQ1IudG9wICsgX3RoaXM2Lmluc3RhbmNlLnNjcm9sbC55IC0gZ2V0VHJhbnNsYXRlKHRhcmdldEVsKS55O1xuICAgICAgICAgIGxlZnQgPSB0YXJnZXRFbEJDUi5sZWZ0ICsgX3RoaXM2Lmluc3RhbmNlLnNjcm9sbC54IC0gZ2V0VHJhbnNsYXRlKHRhcmdldEVsKS54O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICghc2VjdGlvbi5pblZpZXcpIHtcbiAgICAgICAgICAgIHRvcCA9IHRhcmdldEVsQkNSLnRvcCAtIGdldFRyYW5zbGF0ZShzZWN0aW9uLmVsKS55IC0gZ2V0VHJhbnNsYXRlKHRhcmdldEVsKS55O1xuICAgICAgICAgICAgbGVmdCA9IHRhcmdldEVsQkNSLmxlZnQgLSBnZXRUcmFuc2xhdGUoc2VjdGlvbi5lbCkueCAtIGdldFRyYW5zbGF0ZSh0YXJnZXRFbCkueDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdG9wID0gdGFyZ2V0RWxCQ1IudG9wICsgX3RoaXM2Lmluc3RhbmNlLnNjcm9sbC55IC0gZ2V0VHJhbnNsYXRlKHRhcmdldEVsKS55O1xuICAgICAgICAgICAgbGVmdCA9IHRhcmdldEVsQkNSLmxlZnQgKyBfdGhpczYuaW5zdGFuY2Uuc2Nyb2xsLnggLSBnZXRUcmFuc2xhdGUodGFyZ2V0RWwpLng7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGJvdHRvbSA9IHRvcCArIHRhcmdldEVsLm9mZnNldEhlaWdodDtcbiAgICAgICAgdmFyIHJpZ2h0ID0gbGVmdCArIHRhcmdldEVsLm9mZnNldFdpZHRoO1xuICAgICAgICB2YXIgbWlkZGxlID0ge1xuICAgICAgICAgIHg6IChyaWdodCAtIGxlZnQpIC8gMiArIGxlZnQsXG4gICAgICAgICAgeTogKGJvdHRvbSAtIHRvcCkgLyAyICsgdG9wXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHN0aWNreSkge1xuICAgICAgICAgIHZhciBlbEJDUiA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgIHZhciBlbFRvcCA9IGVsQkNSLnRvcDtcbiAgICAgICAgICB2YXIgZWxMZWZ0ID0gZWxCQ1IubGVmdDtcbiAgICAgICAgICB2YXIgZWxEaXN0YW5jZSA9IHtcbiAgICAgICAgICAgIHg6IGVsTGVmdCAtIGxlZnQsXG4gICAgICAgICAgICB5OiBlbFRvcCAtIHRvcFxuICAgICAgICAgIH07XG4gICAgICAgICAgdG9wICs9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgICBsZWZ0ICs9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICAgIGJvdHRvbSA9IGVsVG9wICsgdGFyZ2V0RWwub2Zmc2V0SGVpZ2h0IC0gZWwub2Zmc2V0SGVpZ2h0IC0gZWxEaXN0YW5jZVtfdGhpczYuZGlyZWN0aW9uQXhpc107XG4gICAgICAgICAgcmlnaHQgPSBlbExlZnQgKyB0YXJnZXRFbC5vZmZzZXRXaWR0aCAtIGVsLm9mZnNldFdpZHRoIC0gZWxEaXN0YW5jZVtfdGhpczYuZGlyZWN0aW9uQXhpc107XG4gICAgICAgICAgbWlkZGxlID0ge1xuICAgICAgICAgICAgeDogKHJpZ2h0IC0gbGVmdCkgLyAyICsgbGVmdCxcbiAgICAgICAgICAgIHk6IChib3R0b20gLSB0b3ApIC8gMiArIHRvcFxuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVwZWF0ID09ICdmYWxzZScpIHtcbiAgICAgICAgICByZXBlYXQgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChyZXBlYXQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmVwZWF0ID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXBlYXQgPSBfdGhpczYucmVwZWF0O1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHJlbGF0aXZlT2Zmc2V0ID0gWzAsIDBdO1xuXG4gICAgICAgIGlmIChvZmZzZXQpIHtcbiAgICAgICAgICBpZiAoX3RoaXM2LmRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9mZnNldC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICBpZiAodHlwZW9mIG9mZnNldFtpXSA9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGlmIChvZmZzZXRbaV0uaW5jbHVkZXMoJyUnKSkge1xuICAgICAgICAgICAgICAgICAgcmVsYXRpdmVPZmZzZXRbaV0gPSBwYXJzZUludChvZmZzZXRbaV0ucmVwbGFjZSgnJScsICcnKSAqIF90aGlzNi53aW5kb3dXaWR0aCAvIDEwMCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHJlbGF0aXZlT2Zmc2V0W2ldID0gcGFyc2VJbnQob2Zmc2V0W2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVsYXRpdmVPZmZzZXRbaV0gPSBvZmZzZXRbaV07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGVmdCA9IGxlZnQgKyByZWxhdGl2ZU9mZnNldFswXTtcbiAgICAgICAgICAgIHJpZ2h0ID0gcmlnaHQgLSByZWxhdGl2ZU9mZnNldFsxXTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvZmZzZXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvZmZzZXRbaV0gPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBpZiAob2Zmc2V0W2ldLmluY2x1ZGVzKCclJykpIHtcbiAgICAgICAgICAgICAgICAgIHJlbGF0aXZlT2Zmc2V0W2ldID0gcGFyc2VJbnQob2Zmc2V0W2ldLnJlcGxhY2UoJyUnLCAnJykgKiBfdGhpczYud2luZG93SGVpZ2h0IC8gMTAwKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmVsYXRpdmVPZmZzZXRbaV0gPSBwYXJzZUludChvZmZzZXRbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZWxhdGl2ZU9mZnNldFtpXSA9IG9mZnNldFtpXTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0b3AgPSB0b3AgKyByZWxhdGl2ZU9mZnNldFswXTtcbiAgICAgICAgICAgIGJvdHRvbSA9IGJvdHRvbSAtIHJlbGF0aXZlT2Zmc2V0WzFdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBtYXBwZWRFbCA9IHtcbiAgICAgICAgICBlbDogZWwsXG4gICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgIFwiY2xhc3NcIjogY2wsXG4gICAgICAgICAgc2VjdGlvbjogc2VjdGlvbixcbiAgICAgICAgICB0b3A6IHRvcCxcbiAgICAgICAgICBtaWRkbGU6IG1pZGRsZSxcbiAgICAgICAgICBib3R0b206IGJvdHRvbSxcbiAgICAgICAgICBsZWZ0OiBsZWZ0LFxuICAgICAgICAgIHJpZ2h0OiByaWdodCxcbiAgICAgICAgICBvZmZzZXQ6IG9mZnNldCxcbiAgICAgICAgICBwcm9ncmVzczogMCxcbiAgICAgICAgICByZXBlYXQ6IHJlcGVhdCxcbiAgICAgICAgICBpblZpZXc6IGZhbHNlLFxuICAgICAgICAgIGNhbGw6IGNhbGwsXG4gICAgICAgICAgc3BlZWQ6IHNwZWVkLFxuICAgICAgICAgIGRlbGF5OiBkZWxheSxcbiAgICAgICAgICBwb3NpdGlvbjogcG9zaXRpb24sXG4gICAgICAgICAgdGFyZ2V0OiB0YXJnZXRFbCxcbiAgICAgICAgICBkaXJlY3Rpb246IGRpcmVjdGlvbixcbiAgICAgICAgICBzdGlja3k6IHN0aWNreVxuICAgICAgICB9O1xuICAgICAgICBfdGhpczYuZWxzW2lkXSA9IG1hcHBlZEVsO1xuXG4gICAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoY2wpKSB7XG4gICAgICAgICAgX3RoaXM2LnNldEluVmlldyhfdGhpczYuZWxzW2lkXSwgaWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNwZWVkICE9PSBmYWxzZSB8fCBzdGlja3kpIHtcbiAgICAgICAgICBfdGhpczYucGFyYWxsYXhFbGVtZW50c1tpZF0gPSBtYXBwZWRFbDtcbiAgICAgICAgfVxuICAgICAgfSk7IC8vIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJhZGRTZWN0aW9uc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRTZWN0aW9ucygpIHtcbiAgICAgIHZhciBfdGhpczcgPSB0aGlzO1xuXG4gICAgICB0aGlzLnNlY3Rpb25zID0ge307XG4gICAgICB2YXIgc2VjdGlvbnMgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1cIi5jb25jYXQodGhpcy5uYW1lLCBcIi1zZWN0aW9uXVwiKSk7XG5cbiAgICAgIGlmIChzZWN0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgc2VjdGlvbnMgPSBbdGhpcy5lbF07XG4gICAgICB9XG5cbiAgICAgIHNlY3Rpb25zLmZvckVhY2goZnVuY3Rpb24gKHNlY3Rpb24sIGluZGV4KSB7XG4gICAgICAgIHZhciBpZCA9IHR5cGVvZiBzZWN0aW9uLmRhdGFzZXRbX3RoaXM3Lm5hbWUgKyAnSWQnXSA9PT0gJ3N0cmluZycgPyBzZWN0aW9uLmRhdGFzZXRbX3RoaXM3Lm5hbWUgKyAnSWQnXSA6ICdzZWN0aW9uJyArIGluZGV4O1xuICAgICAgICB2YXIgc2VjdGlvbkJDUiA9IHNlY3Rpb24uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHZhciBvZmZzZXQgPSB7XG4gICAgICAgICAgeDogc2VjdGlvbkJDUi5sZWZ0IC0gd2luZG93LmlubmVyV2lkdGggKiAxLjUgLSBnZXRUcmFuc2xhdGUoc2VjdGlvbikueCxcbiAgICAgICAgICB5OiBzZWN0aW9uQkNSLnRvcCAtIHdpbmRvdy5pbm5lckhlaWdodCAqIDEuNSAtIGdldFRyYW5zbGF0ZShzZWN0aW9uKS55XG4gICAgICAgIH07XG4gICAgICAgIHZhciBsaW1pdCA9IHtcbiAgICAgICAgICB4OiBvZmZzZXQueCArIHNlY3Rpb25CQ1Iud2lkdGggKyB3aW5kb3cuaW5uZXJXaWR0aCAqIDIsXG4gICAgICAgICAgeTogb2Zmc2V0LnkgKyBzZWN0aW9uQkNSLmhlaWdodCArIHdpbmRvdy5pbm5lckhlaWdodCAqIDJcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHBlcnNpc3RlbnQgPSB0eXBlb2Ygc2VjdGlvbi5kYXRhc2V0W190aGlzNy5uYW1lICsgJ1BlcnNpc3RlbnQnXSA9PT0gJ3N0cmluZyc7XG4gICAgICAgIHNlY3Rpb24uc2V0QXR0cmlidXRlKCdkYXRhLXNjcm9sbC1zZWN0aW9uLWlkJywgaWQpO1xuICAgICAgICB2YXIgbWFwcGVkU2VjdGlvbiA9IHtcbiAgICAgICAgICBlbDogc2VjdGlvbixcbiAgICAgICAgICBvZmZzZXQ6IG9mZnNldCxcbiAgICAgICAgICBsaW1pdDogbGltaXQsXG4gICAgICAgICAgaW5WaWV3OiBmYWxzZSxcbiAgICAgICAgICBwZXJzaXN0ZW50OiBwZXJzaXN0ZW50LFxuICAgICAgICAgIGlkOiBpZFxuICAgICAgICB9O1xuICAgICAgICBfdGhpczcuc2VjdGlvbnNbaWRdID0gbWFwcGVkU2VjdGlvbjtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ0cmFuc2Zvcm1cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdHJhbnNmb3JtKGVsZW1lbnQsIHgsIHksIGRlbGF5KSB7XG4gICAgICB2YXIgdHJhbnNmb3JtO1xuXG4gICAgICBpZiAoIWRlbGF5KSB7XG4gICAgICAgIHRyYW5zZm9ybSA9IFwibWF0cml4M2QoMSwwLDAuMDAsMCwwLjAwLDEsMC4wMCwwLDAsMCwxLDAsXCIuY29uY2F0KHgsIFwiLFwiKS5jb25jYXQoeSwgXCIsMCwxKVwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBzdGFydCA9IGdldFRyYW5zbGF0ZShlbGVtZW50KTtcbiAgICAgICAgdmFyIGxlcnBYID0gbGVycChzdGFydC54LCB4LCBkZWxheSk7XG4gICAgICAgIHZhciBsZXJwWSA9IGxlcnAoc3RhcnQueSwgeSwgZGVsYXkpO1xuICAgICAgICB0cmFuc2Zvcm0gPSBcIm1hdHJpeDNkKDEsMCwwLjAwLDAsMC4wMCwxLDAuMDAsMCwwLDAsMSwwLFwiLmNvbmNhdChsZXJwWCwgXCIsXCIpLmNvbmNhdChsZXJwWSwgXCIsMCwxKVwiKTtcbiAgICAgIH1cblxuICAgICAgZWxlbWVudC5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gICAgICBlbGVtZW50LnN0eWxlLm1zVHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInRyYW5zZm9ybUVsZW1lbnRzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRyYW5zZm9ybUVsZW1lbnRzKGlzRm9yY2VkKSB7XG4gICAgICB2YXIgX3RoaXM4ID0gdGhpcztcblxuICAgICAgdmFyIHNldEFsbEVsZW1lbnRzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcbiAgICAgIHZhciBzY3JvbGxSaWdodCA9IHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnggKyB0aGlzLndpbmRvd1dpZHRoO1xuICAgICAgdmFyIHNjcm9sbEJvdHRvbSA9IHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkgKyB0aGlzLndpbmRvd0hlaWdodDtcbiAgICAgIHZhciBzY3JvbGxNaWRkbGUgPSB7XG4gICAgICAgIHg6IHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnggKyB0aGlzLndpbmRvd01pZGRsZS54LFxuICAgICAgICB5OiB0aGlzLmluc3RhbmNlLnNjcm9sbC55ICsgdGhpcy53aW5kb3dNaWRkbGUueVxuICAgICAgfTtcbiAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMucGFyYWxsYXhFbGVtZW50cykuZm9yRWFjaChmdW5jdGlvbiAoX3JlZjUpIHtcbiAgICAgICAgdmFyIF9yZWY2ID0gX3NsaWNlZFRvQXJyYXkoX3JlZjUsIDIpLFxuICAgICAgICAgICAgaSA9IF9yZWY2WzBdLFxuICAgICAgICAgICAgY3VycmVudCA9IF9yZWY2WzFdO1xuXG4gICAgICAgIHZhciB0cmFuc2Zvcm1EaXN0YW5jZSA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChpc0ZvcmNlZCkge1xuICAgICAgICAgIHRyYW5zZm9ybURpc3RhbmNlID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjdXJyZW50LmluVmlldyB8fCBzZXRBbGxFbGVtZW50cykge1xuICAgICAgICAgIHN3aXRjaCAoY3VycmVudC5wb3NpdGlvbikge1xuICAgICAgICAgICAgY2FzZSAndG9wJzpcbiAgICAgICAgICAgICAgdHJhbnNmb3JtRGlzdGFuY2UgPSBfdGhpczguaW5zdGFuY2Uuc2Nyb2xsW190aGlzOC5kaXJlY3Rpb25BeGlzXSAqIC1jdXJyZW50LnNwZWVkO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnZWxlbWVudFRvcCc6XG4gICAgICAgICAgICAgIHRyYW5zZm9ybURpc3RhbmNlID0gKHNjcm9sbEJvdHRvbSAtIGN1cnJlbnQudG9wKSAqIC1jdXJyZW50LnNwZWVkO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnYm90dG9tJzpcbiAgICAgICAgICAgICAgdHJhbnNmb3JtRGlzdGFuY2UgPSAoX3RoaXM4Lmluc3RhbmNlLmxpbWl0W190aGlzOC5kaXJlY3Rpb25BeGlzXSAtIHNjcm9sbEJvdHRvbSArIF90aGlzOC53aW5kb3dIZWlnaHQpICogY3VycmVudC5zcGVlZDtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICAgICAgICB0cmFuc2Zvcm1EaXN0YW5jZSA9IF90aGlzOC5pbnN0YW5jZS5zY3JvbGxbX3RoaXM4LmRpcmVjdGlvbkF4aXNdICogLWN1cnJlbnQuc3BlZWQ7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdlbGVtZW50TGVmdCc6XG4gICAgICAgICAgICAgIHRyYW5zZm9ybURpc3RhbmNlID0gKHNjcm9sbFJpZ2h0IC0gY3VycmVudC5sZWZ0KSAqIC1jdXJyZW50LnNwZWVkO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgICAgICB0cmFuc2Zvcm1EaXN0YW5jZSA9IChfdGhpczguaW5zdGFuY2UubGltaXRbX3RoaXM4LmRpcmVjdGlvbkF4aXNdIC0gc2Nyb2xsUmlnaHQgKyBfdGhpczgud2luZG93SGVpZ2h0KSAqIGN1cnJlbnQuc3BlZWQ7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICB0cmFuc2Zvcm1EaXN0YW5jZSA9IChzY3JvbGxNaWRkbGVbX3RoaXM4LmRpcmVjdGlvbkF4aXNdIC0gY3VycmVudC5taWRkbGVbX3RoaXM4LmRpcmVjdGlvbkF4aXNdKSAqIC1jdXJyZW50LnNwZWVkO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY3VycmVudC5zdGlja3kpIHtcbiAgICAgICAgICBpZiAoY3VycmVudC5pblZpZXcpIHtcbiAgICAgICAgICAgIGlmIChfdGhpczguZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtRGlzdGFuY2UgPSBfdGhpczguaW5zdGFuY2Uuc2Nyb2xsLnggLSBjdXJyZW50LmxlZnQgKyB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybURpc3RhbmNlID0gX3RoaXM4Lmluc3RhbmNlLnNjcm9sbC55IC0gY3VycmVudC50b3AgKyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChfdGhpczguZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgICAgaWYgKF90aGlzOC5pbnN0YW5jZS5zY3JvbGwueCA8IGN1cnJlbnQubGVmdCAtIHdpbmRvdy5pbm5lcldpZHRoICYmIF90aGlzOC5pbnN0YW5jZS5zY3JvbGwueCA8IGN1cnJlbnQubGVmdCAtIHdpbmRvdy5pbm5lcldpZHRoIC8gMikge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybURpc3RhbmNlID0gMDtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChfdGhpczguaW5zdGFuY2Uuc2Nyb2xsLnggPiBjdXJyZW50LnJpZ2h0ICYmIF90aGlzOC5pbnN0YW5jZS5zY3JvbGwueCA+IGN1cnJlbnQucmlnaHQgKyAxMDApIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1EaXN0YW5jZSA9IGN1cnJlbnQucmlnaHQgLSBjdXJyZW50LmxlZnQgKyB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1EaXN0YW5jZSA9IGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpZiAoX3RoaXM4Lmluc3RhbmNlLnNjcm9sbC55IDwgY3VycmVudC50b3AgLSB3aW5kb3cuaW5uZXJIZWlnaHQgJiYgX3RoaXM4Lmluc3RhbmNlLnNjcm9sbC55IDwgY3VycmVudC50b3AgLSB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyKSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtRGlzdGFuY2UgPSAwO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKF90aGlzOC5pbnN0YW5jZS5zY3JvbGwueSA+IGN1cnJlbnQuYm90dG9tICYmIF90aGlzOC5pbnN0YW5jZS5zY3JvbGwueSA+IGN1cnJlbnQuYm90dG9tICsgMTAwKSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtRGlzdGFuY2UgPSBjdXJyZW50LmJvdHRvbSAtIGN1cnJlbnQudG9wICsgd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybURpc3RhbmNlID0gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHJhbnNmb3JtRGlzdGFuY2UgIT09IGZhbHNlKSB7XG4gICAgICAgICAgaWYgKGN1cnJlbnQuZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcgfHwgX3RoaXM4LmRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnICYmIGN1cnJlbnQuZGlyZWN0aW9uICE9PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgICBfdGhpczgudHJhbnNmb3JtKGN1cnJlbnQuZWwsIHRyYW5zZm9ybURpc3RhbmNlLCAwLCBpc0ZvcmNlZCA/IGZhbHNlIDogY3VycmVudC5kZWxheSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF90aGlzOC50cmFuc2Zvcm0oY3VycmVudC5lbCwgMCwgdHJhbnNmb3JtRGlzdGFuY2UsIGlzRm9yY2VkID8gZmFsc2UgOiBjdXJyZW50LmRlbGF5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTY3JvbGwgdG8gYSBkZXNpcmVkIHRhcmdldC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgQXZhaWxhYmxlIG9wdGlvbnMgOlxuICAgICAqICAgICAgICAgIHRhcmdldCB7bm9kZSwgc3RyaW5nLCBcInRvcFwiLCBcImJvdHRvbVwiLCBpbnR9IC0gVGhlIERPTSBlbGVtZW50IHdlIHdhbnQgdG8gc2Nyb2xsIHRvXG4gICAgICogICAgICAgICAgb3B0aW9ucyB7b2JqZWN0fSAtIE9wdGlvbnMgb2JqZWN0IGZvciBhZGRpdGlvbm5hbCBzZXR0aW5ncy5cbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic2Nyb2xsVG9cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2Nyb2xsVG8odGFyZ2V0KSB7XG4gICAgICB2YXIgX3RoaXM5ID0gdGhpcztcblxuICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgICAgLy8gUGFyc2Ugb3B0aW9uc1xuICAgICAgdmFyIG9mZnNldCA9IHBhcnNlSW50KG9wdGlvbnMub2Zmc2V0KSB8fCAwOyAvLyBBbiBvZmZzZXQgdG8gYXBwbHkgb24gdG9wIG9mIGdpdmVuIGB0YXJnZXRgIG9yIGBzb3VyY2VFbGVtYCdzIHRhcmdldFxuXG4gICAgICB2YXIgZHVyYXRpb24gPSAhaXNOYU4ocGFyc2VJbnQob3B0aW9ucy5kdXJhdGlvbikpID8gcGFyc2VJbnQob3B0aW9ucy5kdXJhdGlvbikgOiAxMDAwOyAvLyBEdXJhdGlvbiBvZiB0aGUgc2Nyb2xsIGFuaW1hdGlvbiBpbiBtaWxsaXNlY29uZHNcblxuICAgICAgdmFyIGVhc2luZyA9IG9wdGlvbnMuZWFzaW5nIHx8IFswLjI1LCAwLjAsIDAuMzUsIDEuMF07IC8vIEFuIGFycmF5IG9mIDQgZmxvYXRzIGJldHdlZW4gMCBhbmQgMSBkZWZpbmluZyB0aGUgYmV6aWVyIGN1cnZlIGZvciB0aGUgYW5pbWF0aW9uJ3MgZWFzaW5nLiBTZWUgaHR0cDovL2dyZXdlYi5tZS9iZXppZXItZWFzaW5nLWVkaXRvci9leGFtcGxlL1xuXG4gICAgICB2YXIgZGlzYWJsZUxlcnAgPSBvcHRpb25zLmRpc2FibGVMZXJwID8gdHJ1ZSA6IGZhbHNlOyAvLyBMZXJwIGVmZmVjdCB3b24ndCBiZSBhcHBsaWVkIGlmIHNldCB0byB0cnVlXG5cbiAgICAgIHZhciBjYWxsYmFjayA9IG9wdGlvbnMuY2FsbGJhY2sgPyBvcHRpb25zLmNhbGxiYWNrIDogZmFsc2U7IC8vIGZ1bmN0aW9uIGNhbGxlZCB3aGVuIHNjcm9sbFRvIGNvbXBsZXRlcyAobm90ZSB0aGF0IGl0IHdvbid0IHdhaXQgZm9yIGxlcnAgdG8gc3RhYmlsaXplKVxuXG4gICAgICBlYXNpbmcgPSBzcmMkMS5hcHBseSh2b2lkIDAsIF90b0NvbnN1bWFibGVBcnJheShlYXNpbmcpKTtcblxuICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIC8vIFNlbGVjdG9yIG9yIGJvdW5kYXJpZXNcbiAgICAgICAgaWYgKHRhcmdldCA9PT0gJ3RvcCcpIHtcbiAgICAgICAgICB0YXJnZXQgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKHRhcmdldCA9PT0gJ2JvdHRvbScpIHtcbiAgICAgICAgICB0YXJnZXQgPSB0aGlzLmluc3RhbmNlLmxpbWl0Lnk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0ID09PSAnbGVmdCcpIHtcbiAgICAgICAgICB0YXJnZXQgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKHRhcmdldCA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICAgIHRhcmdldCA9IHRoaXMuaW5zdGFuY2UubGltaXQueDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIElmIHRoZSBxdWVyeSBmYWlscywgYWJvcnRcblxuICAgICAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdudW1iZXInKSB7XG4gICAgICAgIC8vIEFic29sdXRlIGNvb3JkaW5hdGVcbiAgICAgICAgdGFyZ2V0ID0gcGFyc2VJbnQodGFyZ2V0KTtcbiAgICAgIH0gZWxzZSBpZiAodGFyZ2V0ICYmIHRhcmdldC50YWdOYW1lKSA7IGVsc2Uge1xuICAgICAgICBjb25zb2xlLndhcm4oJ2B0YXJnZXRgIHBhcmFtZXRlciBpcyBub3QgdmFsaWQnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBXZSBoYXZlIGEgdGFyZ2V0IHRoYXQgaXMgbm90IGEgY29vcmRpbmF0ZSB5ZXQsIGdldCBpdFxuXG5cbiAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ICE9PSAnbnVtYmVyJykge1xuICAgICAgICAvLyBWZXJpZnkgdGhlIGdpdmVuIHRhcmdldCBiZWxvbmdzIHRvIHRoaXMgc2Nyb2xsIHNjb3BlXG4gICAgICAgIHZhciB0YXJnZXRJblNjb3BlID0gZ2V0UGFyZW50cyh0YXJnZXQpLmluY2x1ZGVzKHRoaXMuZWwpO1xuXG4gICAgICAgIGlmICghdGFyZ2V0SW5TY29wZSkge1xuICAgICAgICAgIC8vIElmIHRoZSB0YXJnZXQgaXNuJ3QgaW5zaWRlIG91ciBtYWluIGVsZW1lbnQsIGFib3J0IGFueSBhY3Rpb25cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gLy8gR2V0IHRhcmdldCBvZmZzZXQgZnJvbSB0b3BcblxuXG4gICAgICAgIHZhciB0YXJnZXRCQ1IgPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHZhciBvZmZzZXRUb3AgPSB0YXJnZXRCQ1IudG9wO1xuICAgICAgICB2YXIgb2Zmc2V0TGVmdCA9IHRhcmdldEJDUi5sZWZ0OyAvLyBUcnkgYW5kIGZpbmQgdGhlIHRhcmdldCdzIHBhcmVudCBzZWN0aW9uXG5cbiAgICAgICAgdmFyIHRhcmdldFBhcmVudHMgPSBnZXRQYXJlbnRzKHRhcmdldCk7XG4gICAgICAgIHZhciBwYXJlbnRTZWN0aW9uID0gdGFyZ2V0UGFyZW50cy5maW5kKGZ1bmN0aW9uIChjYW5kaWRhdGUpIHtcbiAgICAgICAgICByZXR1cm4gT2JqZWN0LmVudHJpZXMoX3RoaXM5LnNlY3Rpb25zKSAvLyBHZXQgc2VjdGlvbnMgYXNzb2NpYXRpdmUgYXJyYXkgYXMgYSByZWd1bGFyIGFycmF5XG4gICAgICAgICAgLm1hcChmdW5jdGlvbiAoX3JlZjcpIHtcbiAgICAgICAgICAgIHZhciBfcmVmOCA9IF9zbGljZWRUb0FycmF5KF9yZWY3LCAyKSxcbiAgICAgICAgICAgICAgICBrZXkgPSBfcmVmOFswXSxcbiAgICAgICAgICAgICAgICBzZWN0aW9uID0gX3JlZjhbMV07XG5cbiAgICAgICAgICAgIHJldHVybiBzZWN0aW9uO1xuICAgICAgICAgIH0pIC8vIG1hcCB0byBzZWN0aW9uIG9ubHkgKHdlIGRvbnQgbmVlZCB0aGUga2V5IGhlcmUpXG4gICAgICAgICAgLmZpbmQoZnVuY3Rpb24gKHNlY3Rpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBzZWN0aW9uLmVsID09IGNhbmRpZGF0ZTtcbiAgICAgICAgICB9KTsgLy8gZmluYWxseSBmaW5kIHRoZSBzZWN0aW9uIHRoYXQgbWF0Y2hlcyB0aGUgY2FuZGlkYXRlXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgcGFyZW50U2VjdGlvbk9mZnNldCA9IDA7XG5cbiAgICAgICAgaWYgKHBhcmVudFNlY3Rpb24pIHtcbiAgICAgICAgICBwYXJlbnRTZWN0aW9uT2Zmc2V0ID0gZ2V0VHJhbnNsYXRlKHBhcmVudFNlY3Rpb24pW3RoaXMuZGlyZWN0aW9uQXhpc107IC8vIFdlIGdvdCBhIHBhcmVudCBzZWN0aW9uLCBzdG9yZSBpdCdzIGN1cnJlbnQgb2Zmc2V0IHRvIHJlbW92ZSBpdCBsYXRlclxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGlmIG5vIHBhcmVudCBzZWN0aW9uIGlzIGZvdW5kIHdlIG5lZWQgdG8gdXNlIGluc3RhbmNlIHNjcm9sbCBkaXJlY3RseVxuICAgICAgICAgIHBhcmVudFNlY3Rpb25PZmZzZXQgPSAtdGhpcy5pbnN0YW5jZS5zY3JvbGxbdGhpcy5kaXJlY3Rpb25BeGlzXTtcbiAgICAgICAgfSAvLyBGaW5hbCB2YWx1ZSBvZiBzY3JvbGwgZGVzdGluYXRpb24gOiBvZmZzZXRUb3AgKyAob3B0aW9uYWwgb2Zmc2V0IGdpdmVuIGluIG9wdGlvbnMpIC0gKHBhcmVudCdzIHNlY3Rpb24gdHJhbnNsYXRlKVxuXG5cbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICBvZmZzZXQgPSBvZmZzZXRMZWZ0ICsgb2Zmc2V0IC0gcGFyZW50U2VjdGlvbk9mZnNldDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvZmZzZXQgPSBvZmZzZXRUb3AgKyBvZmZzZXQgLSBwYXJlbnRTZWN0aW9uT2Zmc2V0O1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvZmZzZXQgPSB0YXJnZXQgKyBvZmZzZXQ7XG4gICAgICB9IC8vIEFjdHVhbCBzY3JvbGx0b1xuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgIC8vIFNldHVwXG5cblxuICAgICAgdmFyIHNjcm9sbFN0YXJ0ID0gcGFyc2VGbG9hdCh0aGlzLmluc3RhbmNlLmRlbHRhW3RoaXMuZGlyZWN0aW9uQXhpc10pO1xuICAgICAgdmFyIHNjcm9sbFRhcmdldCA9IE1hdGgubWF4KDAsIE1hdGgubWluKG9mZnNldCwgdGhpcy5pbnN0YW5jZS5saW1pdFt0aGlzLmRpcmVjdGlvbkF4aXNdKSk7IC8vIE1ha2Ugc3VyZSBvdXIgdGFyZ2V0IGlzIGluIHRoZSBzY3JvbGwgYm91bmRhcmllc1xuXG4gICAgICB2YXIgc2Nyb2xsRGlmZiA9IHNjcm9sbFRhcmdldCAtIHNjcm9sbFN0YXJ0O1xuXG4gICAgICB2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKHApIHtcbiAgICAgICAgaWYgKGRpc2FibGVMZXJwKSB7XG4gICAgICAgICAgaWYgKF90aGlzOS5kaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgX3RoaXM5LnNldFNjcm9sbChzY3JvbGxTdGFydCArIHNjcm9sbERpZmYgKiBwLCBfdGhpczkuaW5zdGFuY2UuZGVsdGEueSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF90aGlzOS5zZXRTY3JvbGwoX3RoaXM5Lmluc3RhbmNlLmRlbHRhLngsIHNjcm9sbFN0YXJ0ICsgc2Nyb2xsRGlmZiAqIHApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdGhpczkuaW5zdGFuY2UuZGVsdGFbX3RoaXM5LmRpcmVjdGlvbkF4aXNdID0gc2Nyb2xsU3RhcnQgKyBzY3JvbGxEaWZmICogcDtcbiAgICAgICAgfVxuICAgICAgfTsgLy8gUHJlcGFyZSB0aGUgc2Nyb2xsXG5cblxuICAgICAgdGhpcy5hbmltYXRpbmdTY3JvbGwgPSB0cnVlOyAvLyBUaGlzIGJvb2xlYW4gYWxsb3dzIHRvIHByZXZlbnQgYGNoZWNrU2Nyb2xsKClgIGZyb20gY2FsbGluZyBgc3RvcFNjcm9sbGluZ2Agd2hlbiB0aGUgYW5pbWF0aW9uIGlzIHNsb3cgKGkuZS4gYXQgdGhlIGJlZ2lubmluZyBvZiBhbiBFYXNlSW4pXG5cbiAgICAgIHRoaXMuc3RvcFNjcm9sbGluZygpOyAvLyBTdG9wIGFueSBtb3ZlbWVudCwgYWxsb3dzIHRvIGtpbGwgYW55IG90aGVyIGBzY3JvbGxUb2Agc3RpbGwgaGFwcGVuaW5nXG5cbiAgICAgIHRoaXMuc3RhcnRTY3JvbGxpbmcoKTsgLy8gUmVzdGFydCB0aGUgc2Nyb2xsXG4gICAgICAvLyBTdGFydCB0aGUgYW5pbWF0aW9uIGxvb3BcblxuICAgICAgdmFyIHN0YXJ0ID0gRGF0ZS5ub3coKTtcblxuICAgICAgdmFyIGxvb3AgPSBmdW5jdGlvbiBsb29wKCkge1xuICAgICAgICB2YXIgcCA9IChEYXRlLm5vdygpIC0gc3RhcnQpIC8gZHVyYXRpb247IC8vIEFuaW1hdGlvbiBwcm9ncmVzc1xuXG4gICAgICAgIGlmIChwID4gMSkge1xuICAgICAgICAgIC8vIEFuaW1hdGlvbiBlbmRzXG4gICAgICAgICAgcmVuZGVyKDEpO1xuICAgICAgICAgIF90aGlzOS5hbmltYXRpbmdTY3JvbGwgPSBmYWxzZTtcbiAgICAgICAgICBpZiAoZHVyYXRpb24gPT0gMCkgX3RoaXM5LnVwZGF0ZSgpO1xuICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdGhpczkuc2Nyb2xsVG9SYWYgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XG4gICAgICAgICAgcmVuZGVyKGVhc2luZyhwKSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGxvb3AoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICAgIHRoaXMuc2V0U2Nyb2xsTGltaXQoKTtcbiAgICAgIHRoaXMuYWRkU2VjdGlvbnMoKTtcbiAgICAgIHRoaXMuYWRkRWxlbWVudHMoKTtcbiAgICAgIHRoaXMuZGV0ZWN0RWxlbWVudHMoKTtcbiAgICAgIHRoaXMudXBkYXRlU2Nyb2xsKCk7XG4gICAgICB0aGlzLnRyYW5zZm9ybUVsZW1lbnRzKHRydWUpO1xuICAgICAgdGhpcy5yZWluaXRTY3JvbGxCYXIoKTtcbiAgICAgIHRoaXMuY2hlY2tTY3JvbGwodHJ1ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInN0YXJ0U2Nyb2xsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0YXJ0U2Nyb2xsKCkge1xuICAgICAgdGhpcy5zdG9wID0gZmFsc2U7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInN0b3BTY3JvbGxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RvcFNjcm9sbCgpIHtcbiAgICAgIHRoaXMuc3RvcCA9IHRydWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldFNjcm9sbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRTY3JvbGwoeCwgeSkge1xuICAgICAgdGhpcy5pbnN0YW5jZSA9IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCB0aGlzLmluc3RhbmNlKSwge30sIHtcbiAgICAgICAgc2Nyb2xsOiB7XG4gICAgICAgICAgeDogeCxcbiAgICAgICAgICB5OiB5XG4gICAgICAgIH0sXG4gICAgICAgIGRlbHRhOiB7XG4gICAgICAgICAgeDogeCxcbiAgICAgICAgICB5OiB5XG4gICAgICAgIH0sXG4gICAgICAgIHNwZWVkOiAwXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZGVzdHJveVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgX2dldChfZ2V0UHJvdG90eXBlT2YoX2RlZmF1bHQucHJvdG90eXBlKSwgXCJkZXN0cm95XCIsIHRoaXMpLmNhbGwodGhpcyk7XG5cbiAgICAgIHRoaXMuc3RvcFNjcm9sbGluZygpO1xuICAgICAgdGhpcy5odG1sLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5zbW9vdGhDbGFzcyk7XG4gICAgICB0aGlzLnZzLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuZGVzdHJveVNjcm9sbEJhcigpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmNoZWNrS2V5LCBmYWxzZSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIF9kZWZhdWx0O1xufShfZGVmYXVsdCk7XG5cbnZhciBTbW9vdGggPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTbW9vdGgoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNtb290aCk7XG5cbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zOyAvLyBPdmVycmlkZSBkZWZhdWx0IG9wdGlvbnMgd2l0aCBnaXZlbiBvbmVzXG5cbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICB0aGlzLnNtYXJ0cGhvbmUgPSBkZWZhdWx0cy5zbWFydHBob25lO1xuICAgIGlmIChvcHRpb25zLnNtYXJ0cGhvbmUpIE9iamVjdC5hc3NpZ24odGhpcy5zbWFydHBob25lLCBvcHRpb25zLnNtYXJ0cGhvbmUpO1xuICAgIHRoaXMudGFibGV0ID0gZGVmYXVsdHMudGFibGV0O1xuICAgIGlmIChvcHRpb25zLnRhYmxldCkgT2JqZWN0LmFzc2lnbih0aGlzLnRhYmxldCwgb3B0aW9ucy50YWJsZXQpO1xuICAgIGlmICghdGhpcy5zbW9vdGggJiYgdGhpcy5kaXJlY3Rpb24gPT0gJ2hvcml6b250YWwnKSBjb25zb2xlLndhcm4oJ/CfmqggYHNtb290aDpmYWxzZWAgJiBgaG9yaXpvbnRhbGAgZGlyZWN0aW9uIGFyZSBub3QgeWV0IGNvbXBhdGlibGUnKTtcbiAgICBpZiAoIXRoaXMudGFibGV0LnNtb290aCAmJiB0aGlzLnRhYmxldC5kaXJlY3Rpb24gPT0gJ2hvcml6b250YWwnKSBjb25zb2xlLndhcm4oJ/CfmqggYHNtb290aDpmYWxzZWAgJiBgaG9yaXpvbnRhbGAgZGlyZWN0aW9uIGFyZSBub3QgeWV0IGNvbXBhdGlibGUgKHRhYmxldCknKTtcbiAgICBpZiAoIXRoaXMuc21hcnRwaG9uZS5zbW9vdGggJiYgdGhpcy5zbWFydHBob25lLmRpcmVjdGlvbiA9PSAnaG9yaXpvbnRhbCcpIGNvbnNvbGUud2Fybign8J+aqCBgc21vb3RoOmZhbHNlYCAmIGBob3Jpem9udGFsYCBkaXJlY3Rpb24gYXJlIG5vdCB5ZXQgY29tcGF0aWJsZSAoc21hcnRwaG9uZSknKTtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhTbW9vdGgsIFt7XG4gICAga2V5OiBcImluaXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5pc01vYmlsZSA9IC9BbmRyb2lkfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSB8fCBuYXZpZ2F0b3IucGxhdGZvcm0gPT09ICdNYWNJbnRlbCcgJiYgbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzID4gMSB8fCB3aW5kb3cuaW5uZXJXaWR0aCA8IHRoaXMudGFibGV0LmJyZWFrcG9pbnQ7XG4gICAgICB0aGlzLm9wdGlvbnMuaXNUYWJsZXQgPSB0aGlzLm9wdGlvbnMuaXNNb2JpbGUgJiYgd2luZG93LmlubmVyV2lkdGggPj0gdGhpcy50YWJsZXQuYnJlYWtwb2ludDtcblxuICAgICAgaWYgKHRoaXMuc21vb3RoICYmICF0aGlzLm9wdGlvbnMuaXNNb2JpbGUgfHwgdGhpcy50YWJsZXQuc21vb3RoICYmIHRoaXMub3B0aW9ucy5pc1RhYmxldCB8fCB0aGlzLnNtYXJ0cGhvbmUuc21vb3RoICYmIHRoaXMub3B0aW9ucy5pc01vYmlsZSAmJiAhdGhpcy5vcHRpb25zLmlzVGFibGV0KSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsID0gbmV3IF9kZWZhdWx0JDIodGhpcy5vcHRpb25zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsID0gbmV3IF9kZWZhdWx0JDEodGhpcy5vcHRpb25zKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zY3JvbGwuaW5pdCgpO1xuXG4gICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhhc2gpIHtcbiAgICAgICAgLy8gR2V0IHRoZSBoYXNoIHdpdGhvdXQgdGhlICcjJyBhbmQgZmluZCB0aGUgbWF0Y2hpbmcgZWxlbWVudFxuICAgICAgICB2YXIgaWQgPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zbGljZSgxLCB3aW5kb3cubG9jYXRpb24uaGFzaC5sZW5ndGgpO1xuICAgICAgICB2YXIgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpOyAvLyBJZiBmb3VuZCwgc2Nyb2xsIHRvIHRoZSBlbGVtZW50XG5cbiAgICAgICAgaWYgKHRhcmdldCkgdGhpcy5zY3JvbGwuc2Nyb2xsVG8odGFyZ2V0KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICAgIHRoaXMuc2Nyb2xsLnVwZGF0ZSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzdGFydFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgIHRoaXMuc2Nyb2xsLnN0YXJ0U2Nyb2xsKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInN0b3BcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgIHRoaXMuc2Nyb2xsLnN0b3BTY3JvbGwoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2Nyb2xsVG9cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2Nyb2xsVG8odGFyZ2V0LCBvcHRpb25zKSB7XG4gICAgICB0aGlzLnNjcm9sbC5zY3JvbGxUbyh0YXJnZXQsIG9wdGlvbnMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRTY3JvbGxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0U2Nyb2xsKHgsIHkpIHtcbiAgICAgIHRoaXMuc2Nyb2xsLnNldFNjcm9sbCh4LCB5KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb24oZXZlbnQsIGZ1bmMpIHtcbiAgICAgIHRoaXMuc2Nyb2xsLnNldEV2ZW50cyhldmVudCwgZnVuYyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9mZlwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvZmYoZXZlbnQsIGZ1bmMpIHtcbiAgICAgIHRoaXMuc2Nyb2xsLnVuc2V0RXZlbnRzKGV2ZW50LCBmdW5jKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZGVzdHJveVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgdGhpcy5zY3JvbGwuZGVzdHJveSgpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTbW9vdGg7XG59KCk7XG5cbnZhciBOYXRpdmUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBOYXRpdmUoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE5hdGl2ZSk7XG5cbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zOyAvLyBPdmVycmlkZSBkZWZhdWx0IG9wdGlvbnMgd2l0aCBnaXZlbiBvbmVzXG5cbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICB0aGlzLnNtYXJ0cGhvbmUgPSBkZWZhdWx0cy5zbWFydHBob25lO1xuICAgIGlmIChvcHRpb25zLnNtYXJ0cGhvbmUpIE9iamVjdC5hc3NpZ24odGhpcy5zbWFydHBob25lLCBvcHRpb25zLnNtYXJ0cGhvbmUpO1xuICAgIHRoaXMudGFibGV0ID0gZGVmYXVsdHMudGFibGV0O1xuICAgIGlmIChvcHRpb25zLnRhYmxldCkgT2JqZWN0LmFzc2lnbih0aGlzLnRhYmxldCwgb3B0aW9ucy50YWJsZXQpO1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE5hdGl2ZSwgW3tcbiAgICBrZXk6IFwiaW5pdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgdGhpcy5zY3JvbGwgPSBuZXcgX2RlZmF1bHQkMSh0aGlzLm9wdGlvbnMpO1xuICAgICAgdGhpcy5zY3JvbGwuaW5pdCgpO1xuXG4gICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhhc2gpIHtcbiAgICAgICAgLy8gR2V0IHRoZSBoYXNoIHdpdGhvdXQgdGhlICcjJyBhbmQgZmluZCB0aGUgbWF0Y2hpbmcgZWxlbWVudFxuICAgICAgICB2YXIgaWQgPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zbGljZSgxLCB3aW5kb3cubG9jYXRpb24uaGFzaC5sZW5ndGgpO1xuICAgICAgICB2YXIgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpOyAvLyBJZiBmb3VuZCwgc2Nyb2xsIHRvIHRoZSBlbGVtZW50XG5cbiAgICAgICAgaWYgKHRhcmdldCkgdGhpcy5zY3JvbGwuc2Nyb2xsVG8odGFyZ2V0KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICAgIHRoaXMuc2Nyb2xsLnVwZGF0ZSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzdGFydFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgIHRoaXMuc2Nyb2xsLnN0YXJ0U2Nyb2xsKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInN0b3BcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgIHRoaXMuc2Nyb2xsLnN0b3BTY3JvbGwoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2Nyb2xsVG9cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2Nyb2xsVG8odGFyZ2V0LCBvcHRpb25zKSB7XG4gICAgICB0aGlzLnNjcm9sbC5zY3JvbGxUbyh0YXJnZXQsIG9wdGlvbnMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRTY3JvbGxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0U2Nyb2xsKHgsIHkpIHtcbiAgICAgIHRoaXMuc2Nyb2xsLnNldFNjcm9sbCh4LCB5KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb24oZXZlbnQsIGZ1bmMpIHtcbiAgICAgIHRoaXMuc2Nyb2xsLnNldEV2ZW50cyhldmVudCwgZnVuYyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9mZlwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvZmYoZXZlbnQsIGZ1bmMpIHtcbiAgICAgIHRoaXMuc2Nyb2xsLnVuc2V0RXZlbnRzKGV2ZW50LCBmdW5jKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZGVzdHJveVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgdGhpcy5zY3JvbGwuZGVzdHJveSgpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBOYXRpdmU7XG59KCk7XG5cbmV4cG9ydCBkZWZhdWx0IFNtb290aDtcbmV4cG9ydCB7IE5hdGl2ZSwgU21vb3RoIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vL1xuLy8gIMKpUFJBS1Rcbi8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmltcG9ydCBHTE9CQUxTIGZyb20gJy4vZ2xvYmFscyc7XG5pbXBvcnQgKiBhcyByZXNwb25zaXZlIGZyb20gJy4vdXRpbHMvcmVzcG9uc2l2ZSc7XG4vLyBpbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuL2NsYXNzZXMvTmF2aWdhdGlvbic7XG5pbXBvcnQgU2Nyb2xsIGZyb20gJy4vY2xhc3Nlcy9TY3JvbGwnO1xuLy8gaW1wb3J0IEFuaW1hdGlvbiBmcm9tICcuL2NsYXNzZXMvQW5pbWF0aW9uJztcbi8vIGltcG9ydCBUcmFuc2l0aW9uIGZyb20gJy4vY2xhc3Nlcy9UcmFuc2l0aW9uJztcbi8vIGltcG9ydCBSQUYgZnJvbSAnLi9jbGFzc2VzL1JBRic7XG4vLyBpbXBvcnQgVmlkZW9ibG9jayBmcm9tICcuL2NsYXNzZXMvVmlkZW9ibG9jayc7XG4vLyBpbXBvcnQgTG9hZGVyIGZyb20gJy4vY2xhc3Nlcy9Mb2FkZXInO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vL1xuLy8gIFBST0pFQ1QgXG4vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vL1xuLy8gIEJBU0lDIFJFU1BPTlNJVkVcbi8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbnJlc3BvbnNpdmUuY3NzU2V0VG91Y2hEZXZpY2VzKCAnaHRtbCcsICd0b3VjaCcsICdub190b3VjaCcgKTtcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy9cbi8vICBOQVZJR0FUSU9OXG4vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vLyBleHBvcnQgY29uc3QgbmF2aWdhdGlvbiA9IG5ldyBOYXZpZ2F0aW9uKCk7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vXG4vLyAgU0NST0xMXG4vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5leHBvcnQgY29uc3Qgc2Nyb2xsID0gbmV3IFNjcm9sbCgpO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vL1xuLy8gIFRSQU5TSVRJT05cbi8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8vIGV4cG9ydCBjb25zdCB0cmFuc2l0aW9uID0gbmV3IFRyYW5zaXRpb24oKTtcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy9cbi8vICBBTklNQVRJT05TXG4vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vLyBleHBvcnQgY29uc3QgYW5pbWF0aW9uID0gbmV3IEFuaW1hdGlvbigpO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vL1xuLy8gIFJBRlxuLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLy8gY29uc3QgcmFmID0gbmV3IFJBRigpO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vL1xuLy8gIE1JU0Ncbi8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8vIGV4cG9ydCBjb25zdCB2aWRlb2Jsb2NrID0gbmV3IFZpZGVvYmxvY2soKTtcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy9cbi8vICBMT0FERVJcbi8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8vIGNvbnN0IGxvYWRlciA9IG5ldyBMb2FkZXIoKTtcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy9cbi8vICBPTiBMT0FEXG4vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAvLyBsb2FkZXIuaGlkZUxvYWRlcigpO1xuICAgIC8vIHNjcm9sbC5pbml0KCk7XG4gICAgLy8gc2Nyb2xsLmFjdGlvbigpO1xuICAgIC8vIHJhZi5yZW5kZXIoKTtcbn0pO1xuXG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnI2hlYWRlcicgKTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdzY3JvbGwnLCAoIGUgKSA9PiB7XG4gICAgaWYoIHdpbmRvdy5zY3JvbGxZID49IDIwMCApIHtcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoICdzdGlja3knICk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoICdzdGlja3knICk7XG4gICAgfVxufSApOyJdLCJuYW1lcyI6WyJMb2NvbW90aXZlU2Nyb2xsIiwiZ3NhcCIsIlNjcm9sbCIsImNvbnN0cnVjdG9yIiwic2Nyb2xsIiwiaW5pdCIsImVsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic21vb3RoIiwibGVycCIsIm11bHRpcGxpZXIiLCJzY3JvbGxGcm9tQW55d2hlcmUiLCJnZXRTcGVlZCIsInJlc2V0IiwidXBkYXRlIiwic2Nyb2xsVG8iLCJkdXJhdGlvbiIsImRpc2FibGVMZXJwIiwic2V0VGltZW91dCIsInNjcm9sbHRvIiwidGFyZ2V0IiwiaW5mbyIsImdsb2JhbCIsIlJTUF9YWFMiLCJSU1BfWFMiLCJSU1BfU00iLCJSU1BfTUQiLCJSU1BfTEciLCJSU1BfWEwiLCJSU1BfWFhMIiwicnNwIiwidmFsXyIsInJldmVyc2VfIiwicnYiLCJ2YWwiLCJ3Iiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlzVG91Y2giLCJ0b3VjaCIsImRvY3VtZW50RWxlbWVudCIsIm5hdmlnYXRvciIsIm1heFRvdWNoUG9pbnRzIiwibXNNYXhUb3VjaFBvaW50cyIsImNzc1NldFRvdWNoRGV2aWNlcyIsInRhZ18iLCJ0b3VjaF8iLCJub190b3VjaF8iLCJ0YWciLCJ0b3VjaF9jbGFzcyIsIm5vX3RvdWNoX2NsYXNzIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIlR5cGVFcnJvciIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwicHJvcHMiLCJpIiwibGVuZ3RoIiwiZGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Iiwia2V5IiwiX2NyZWF0ZUNsYXNzIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwicHJvdG90eXBlIiwiX2RlZmluZVByb3BlcnR5Iiwib2JqIiwidmFsdWUiLCJvd25LZXlzIiwib2JqZWN0IiwiZW51bWVyYWJsZU9ubHkiLCJrZXlzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwic3ltYm9scyIsImZpbHRlciIsInN5bSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInB1c2giLCJhcHBseSIsIl9vYmplY3RTcHJlYWQyIiwiYXJndW1lbnRzIiwic291cmNlIiwiZm9yRWFjaCIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiX2luaGVyaXRzIiwic3ViQ2xhc3MiLCJzdXBlckNsYXNzIiwiY3JlYXRlIiwiX3NldFByb3RvdHlwZU9mIiwiX2dldFByb3RvdHlwZU9mIiwibyIsInNldFByb3RvdHlwZU9mIiwiZ2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJwIiwiX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIlJlZmxlY3QiLCJjb25zdHJ1Y3QiLCJzaGFtIiwiUHJveHkiLCJEYXRlIiwidG9TdHJpbmciLCJjYWxsIiwiZSIsIl9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJzZWxmIiwiUmVmZXJlbmNlRXJyb3IiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsIl9jcmVhdGVTdXBlciIsIkRlcml2ZWQiLCJoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiX2NyZWF0ZVN1cGVySW50ZXJuYWwiLCJTdXBlciIsInJlc3VsdCIsIk5ld1RhcmdldCIsIl9zdXBlclByb3BCYXNlIiwicHJvcGVydHkiLCJoYXNPd25Qcm9wZXJ0eSIsIl9nZXQiLCJyZWNlaXZlciIsImdldCIsImJhc2UiLCJkZXNjIiwiX3NsaWNlZFRvQXJyYXkiLCJhcnIiLCJfYXJyYXlXaXRoSG9sZXMiLCJfaXRlcmFibGVUb0FycmF5TGltaXQiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVSZXN0IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiX2FycmF5V2l0aG91dEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheSIsIl9ub25JdGVyYWJsZVNwcmVhZCIsIkFycmF5IiwiaXNBcnJheSIsIl9hcnJheUxpa2VUb0FycmF5IiwiaXRlciIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiZnJvbSIsIl9hcnIiLCJfbiIsIl9kIiwiX2UiLCJ1bmRlZmluZWQiLCJfaSIsIl9zIiwibmV4dCIsImRvbmUiLCJlcnIiLCJtaW5MZW4iLCJuIiwic2xpY2UiLCJuYW1lIiwidGVzdCIsImxlbiIsImFycjIiLCJkZWZhdWx0cyIsIm9mZnNldCIsInJlcGVhdCIsImluaXRQb3NpdGlvbiIsIngiLCJ5IiwiZGlyZWN0aW9uIiwiZ2VzdHVyZURpcmVjdGlvbiIsInJlbG9hZE9uQ29udGV4dENoYW5nZSIsInNjcm9sbGJhckNvbnRhaW5lciIsInNjcm9sbGJhckNsYXNzIiwic2Nyb2xsaW5nQ2xhc3MiLCJkcmFnZ2luZ0NsYXNzIiwic21vb3RoQ2xhc3MiLCJpbml0Q2xhc3MiLCJnZXREaXJlY3Rpb24iLCJmaXJlZm94TXVsdGlwbGllciIsInRvdWNoTXVsdGlwbGllciIsInJlc2V0TmF0aXZlU2Nyb2xsIiwidGFibGV0IiwiYnJlYWtwb2ludCIsInNtYXJ0cGhvbmUiLCJfZGVmYXVsdCIsIm9wdGlvbnMiLCJhc3NpZ24iLCJuYW1lc3BhY2UiLCJodG1sIiwid2luZG93SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJ3aW5kb3dXaWR0aCIsIndpbmRvd01pZGRsZSIsImVscyIsImN1cnJlbnRFbGVtZW50cyIsImxpc3RlbmVycyIsImhhc1Njcm9sbFRpY2tpbmciLCJoYXNDYWxsRXZlbnRTZXQiLCJjaGVja1Njcm9sbCIsImJpbmQiLCJjaGVja1Jlc2l6ZSIsImNoZWNrRXZlbnQiLCJsaW1pdCIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0IiwiaXNNb2JpbGUiLCJpc1RhYmxldCIsImNvbnRleHQiLCJkaXJlY3Rpb25BeGlzIiwic3BlZWQiLCJhZGRFdmVudExpc3RlbmVyIiwiaW5pdEV2ZW50cyIsImRpc3BhdGNoU2Nyb2xsIiwiX3RoaXMiLCJyZXNpemVUaWNrIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicmVzaXplIiwiY2hlY2tDb250ZXh0IiwidXNlckFnZW50IiwicGxhdGZvcm0iLCJvbGRDb250ZXh0Iiwib2xkU21vb3RoIiwibmV3U21vb3RoIiwibG9jYXRpb24iLCJyZWxvYWQiLCJfdGhpczIiLCJzY3JvbGxUb0VscyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjb25jYXQiLCJzZXRTY3JvbGxUbyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50VGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwiYWRkRWxlbWVudHMiLCJkZXRlY3RFbGVtZW50cyIsIl90aGlzMyIsInNjcm9sbFRvcCIsInNjcm9sbEJvdHRvbSIsInNjcm9sbExlZnQiLCJzY3JvbGxSaWdodCIsImVudHJpZXMiLCJfcmVmIiwiX3JlZjIiLCJpblZpZXciLCJsZWZ0IiwicmlnaHQiLCJzZXRJblZpZXciLCJ0b3AiLCJib3R0b20iLCJ3aWR0aCIsInByb2dyZXNzIiwic2V0T3V0T2ZWaWV3IiwiaGVpZ2h0IiwiY3VycmVudCIsImRpc3BhdGNoQ2FsbCIsIl90aGlzNCIsIndheSIsImNhbGxXYXkiLCJjYWxsVmFsdWUiLCJzcGxpdCIsIm1hcCIsIml0ZW0iLCJ0cmltIiwiY2FsbE9iaiIsImNhbGxFdmVudCIsIkV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsInNjcm9sbEV2ZW50Iiwic2V0RXZlbnRzIiwiZnVuYyIsImxpc3QiLCJ1bnNldEV2ZW50cyIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJfdGhpczUiLCJ0eXBlIiwicmVwbGFjZSIsInN0YXJ0U2Nyb2xsIiwic3RvcFNjcm9sbCIsInNldFNjcm9sbCIsImRlc3Ryb3kiLCJfdGhpczYiLCJjb21tb25qc0dsb2JhbCIsImdsb2JhbFRoaXMiLCJjcmVhdGVDb21tb25qc01vZHVsZSIsImZuIiwibW9kdWxlIiwiZXhwb3J0cyIsInNtb290aHNjcm9sbCIsInBvbHlmaWxsIiwiZCIsInN0eWxlIiwiX19mb3JjZVNtb290aFNjcm9sbFBvbHlmaWxsX18iLCJFbGVtZW50IiwiSFRNTEVsZW1lbnQiLCJTQ1JPTExfVElNRSIsIm9yaWdpbmFsIiwic2Nyb2xsQnkiLCJlbGVtZW50U2Nyb2xsIiwic2Nyb2xsRWxlbWVudCIsInNjcm9sbEludG9WaWV3Iiwibm93IiwicGVyZm9ybWFuY2UiLCJpc01pY3Jvc29mdEJyb3dzZXIiLCJ1c2VyQWdlbnRQYXR0ZXJucyIsIlJlZ0V4cCIsImpvaW4iLCJST1VORElOR19UT0xFUkFOQ0UiLCJlYXNlIiwiayIsIk1hdGgiLCJjb3MiLCJQSSIsInNob3VsZEJhaWxPdXQiLCJmaXJzdEFyZyIsImJlaGF2aW9yIiwiaGFzU2Nyb2xsYWJsZVNwYWNlIiwiYXhpcyIsImNsaWVudEhlaWdodCIsInNjcm9sbEhlaWdodCIsImNsaWVudFdpZHRoIiwic2Nyb2xsV2lkdGgiLCJjYW5PdmVyZmxvdyIsIm92ZXJmbG93VmFsdWUiLCJnZXRDb21wdXRlZFN0eWxlIiwiaXNTY3JvbGxhYmxlIiwiaXNTY3JvbGxhYmxlWSIsImlzU2Nyb2xsYWJsZVgiLCJmaW5kU2Nyb2xsYWJsZVBhcmVudCIsImJvZHkiLCJwYXJlbnROb2RlIiwiaG9zdCIsInN0ZXAiLCJ0aW1lIiwiY3VycmVudFgiLCJjdXJyZW50WSIsImVsYXBzZWQiLCJzdGFydFRpbWUiLCJzdGFydFgiLCJzdGFydFkiLCJtZXRob2QiLCJzY3JvbGxhYmxlIiwic21vb3RoU2Nyb2xsIiwic2Nyb2xsWCIsInBhZ2VYT2Zmc2V0Iiwic2Nyb2xsWSIsInBhZ2VZT2Zmc2V0IiwiU3ludGF4RXJyb3IiLCJzY3JvbGxhYmxlUGFyZW50IiwicGFyZW50UmVjdHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjbGllbnRSZWN0cyIsInBvc2l0aW9uIiwic21vb3Roc2Nyb2xsXzEiLCJfZGVmYXVsdCQxIiwiX0NvcmUiLCJfc3VwZXIiLCJoaXN0b3J5Iiwic2Nyb2xsUmVzdG9yYXRpb24iLCJzbW9vdGhzY3JvbGxQb2x5ZmlsbCIsImFkZERpcmVjdGlvbiIsImFkZFNwZWVkIiwic3BlZWRUcyIsIm1heCIsInVwZGF0ZUVsZW1lbnRzIiwiQkNSIiwiY2wiLCJkYXRhc2V0IiwiaWQiLCJ0YXJnZXRFbCIsInRhcmdldEVsQkNSIiwicmVsYXRpdmVPZmZzZXQiLCJnZXRSZWxhdGl2ZU9mZnNldCIsIm1hcHBlZEVsIiwiY29udGFpbnMiLCJpbmNsdWRlcyIsInBhcnNlSW50IiwiY2FsbGJhY2siLCJ0YWdOYW1lIiwiY29uc29sZSIsIndhcm4iLCJpc1RhcmdldFJlYWNoZWQiLCJvblNjcm9sbCIsInByb3BJc0VudW1lcmFibGUiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsInRvT2JqZWN0Iiwic2hvdWxkVXNlTmF0aXZlIiwidGVzdDEiLCJTdHJpbmciLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwidGVzdDIiLCJmcm9tQ2hhckNvZGUiLCJvcmRlcjIiLCJ0ZXN0MyIsImxldHRlciIsIm9iamVjdEFzc2lnbiIsInRvIiwicyIsIkUiLCJvbiIsImN0eCIsIm9uY2UiLCJsaXN0ZW5lciIsIm9mZiIsIl8iLCJlbWl0IiwiZGF0YSIsImV2dEFyciIsImV2dHMiLCJsaXZlRXZlbnRzIiwidGlueUVtaXR0ZXIiLCJsZXRoYXJneSIsInJvb3QiLCJMZXRoYXJneSIsInN0YWJpbGl0eSIsInNlbnNpdGl2aXR5IiwidG9sZXJhbmNlIiwiZGVsYXkiLCJhYnMiLCJsYXN0VXBEZWx0YXMiLCJyZWYiLCJyZXN1bHRzIiwibGFzdERvd25EZWx0YXMiLCJkZWx0YXNUaW1lc3RhbXAiLCJjaGVjayIsImxhc3REZWx0YSIsIm9yaWdpbmFsRXZlbnQiLCJ3aGVlbERlbHRhIiwiZGVsdGFZIiwiZGV0YWlsIiwic2hpZnQiLCJpc0luZXJ0aWEiLCJsYXN0RGVsdGFzIiwibGFzdERlbHRhc05ldyIsImxhc3REZWx0YXNPbGQiLCJuZXdBdmVyYWdlIiwibmV3U3VtIiwib2xkQXZlcmFnZSIsIm9sZFN1bSIsInJlZHVjZSIsInQiLCJzaG93TGFzdFVwRGVsdGFzIiwic2hvd0xhc3REb3duRGVsdGFzIiwic3VwcG9ydCIsImdldFN1cHBvcnQiLCJoYXNXaGVlbEV2ZW50IiwiaGFzTW91c2VXaGVlbEV2ZW50IiwiaGFzVG91Y2giLCJUb3VjaEV2ZW50IiwiRG9jdW1lbnRUb3VjaCIsImhhc1RvdWNoV2luIiwiaGFzUG9pbnRlciIsIm1zUG9pbnRlckVuYWJsZWQiLCJoYXNLZXlEb3duIiwiaXNGaXJlZm94IiwiaGFzT3duUHJvcGVydHkkMSIsImJpbmRhbGxTdGFuZGFsb25lIiwiZnVuY3Rpb25zIiwiZiIsIkVWVF9JRCIsInNyYyIsIlZpcnR1YWxTY3JvbGwiLCJrZXlDb2RlcyIsIkxFRlQiLCJVUCIsIlJJR0hUIiwiRE9XTiIsIlNQQUNFIiwibW91c2VNdWx0aXBsaWVyIiwia2V5U3RlcCIsInByZXZlbnRUb3VjaCIsInVucHJldmVudFRvdWNoQ2xhc3MiLCJsaW1pdEluZXJ0aWEiLCJ1c2VLZXlib2FyZCIsInVzZVRvdWNoIiwiX2xldGhhcmd5IiwiX2VtaXR0ZXIiLCJfZXZlbnQiLCJkZWx0YVgiLCJ0b3VjaFN0YXJ0WCIsInRvdWNoU3RhcnRZIiwiYm9keVRvdWNoQWN0aW9uIiwicGFzc2l2ZSIsImxpc3RlbmVyT3B0aW9ucyIsIl9ub3RpZnkiLCJldnQiLCJfb25XaGVlbCIsIndoZWVsRGVsdGFYIiwid2hlZWxEZWx0YVkiLCJkZWx0YU1vZGUiLCJfb25Nb3VzZVdoZWVsIiwiX29uVG91Y2hTdGFydCIsInRhcmdldFRvdWNoZXMiLCJwYWdlWCIsInBhZ2VZIiwiX29uVG91Y2hNb3ZlIiwiX29uS2V5RG93biIsImtleUNvZGUiLCJzaGlmdEtleSIsIl9iaW5kIiwibXNUb3VjaEFjdGlvbiIsIl91bmJpbmQiLCJjYiIsImV2ZW50cyIsInN0YXJ0IiwiZW5kIiwiYW10IiwiZ2V0VHJhbnNsYXRlIiwidHJhbnNsYXRlIiwidHJhbnNmb3JtIiwid2Via2l0VHJhbnNmb3JtIiwibW96VHJhbnNmb3JtIiwibWF0IiwibWF0Y2giLCJwYXJzZUZsb2F0IiwiZ2V0UGFyZW50cyIsImVsZW0iLCJwYXJlbnRzIiwiTkVXVE9OX0lURVJBVElPTlMiLCJORVdUT05fTUlOX1NMT1BFIiwiU1VCRElWSVNJT05fUFJFQ0lTSU9OIiwiU1VCRElWSVNJT05fTUFYX0lURVJBVElPTlMiLCJrU3BsaW5lVGFibGVTaXplIiwia1NhbXBsZVN0ZXBTaXplIiwiZmxvYXQzMkFycmF5U3VwcG9ydGVkIiwiRmxvYXQzMkFycmF5IiwiQSIsImFBMSIsImFBMiIsIkIiLCJDIiwiY2FsY0JlemllciIsImFUIiwiZ2V0U2xvcGUiLCJiaW5hcnlTdWJkaXZpZGUiLCJhWCIsImFBIiwiYUIiLCJtWDEiLCJtWDIiLCJjdXJyZW50VCIsIm5ld3RvblJhcGhzb25JdGVyYXRlIiwiYUd1ZXNzVCIsImN1cnJlbnRTbG9wZSIsIkxpbmVhckVhc2luZyIsInNyYyQxIiwiYmV6aWVyIiwibVkxIiwibVkyIiwiRXJyb3IiLCJzYW1wbGVWYWx1ZXMiLCJnZXRURm9yWCIsImludGVydmFsU3RhcnQiLCJjdXJyZW50U2FtcGxlIiwibGFzdFNhbXBsZSIsImRpc3QiLCJndWVzc0ZvclQiLCJpbml0aWFsU2xvcGUiLCJCZXppZXJFYXNpbmciLCJrZXlDb2RlcyQxIiwiVEFCIiwiUEFHRVVQIiwiUEFHRURPV04iLCJIT01FIiwiRU5EIiwiX2RlZmF1bHQkMiIsImluZXJ0aWEiLCJpc1Njcm9sbGluZyIsImlzRHJhZ2dpbmdTY3JvbGxiYXIiLCJpc1RpY2tpbmciLCJwYXJhbGxheEVsZW1lbnRzIiwic3RvcCIsImNoZWNrS2V5Iiwic2V0QXR0cmlidXRlIiwiZGVsdGEiLCJ2cyIsInVwZGF0ZURlbHRhIiwic3RhcnRTY3JvbGxpbmciLCJzZXRTY3JvbGxMaW1pdCIsImluaXRTY3JvbGxCYXIiLCJhZGRTZWN0aW9ucyIsInRyYW5zZm9ybUVsZW1lbnRzIiwidG90YWxXaWR0aCIsIm5vZGVzIiwiY2hpbGRyZW4iLCJzdGFydFNjcm9sbFRzIiwic3RvcFNjcm9sbGluZyIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiY2hlY2tTY3JvbGxSYWYiLCJzY3JvbGxUb1JhZiIsInJvdW5kIiwiYWN0aXZlRWxlbWVudCIsImlzQWN0aXZlRWxlbWVudFNjcm9sbFNlbnNpdGl2ZSIsIkhUTUxJbnB1dEVsZW1lbnQiLCJIVE1MVGV4dEFyZWFFbGVtZW50IiwiSFRNTEJ1dHRvbkVsZW1lbnQiLCJIVE1MU2VsZWN0RWxlbWVudCIsImZvcmNlZCIsInVwZGF0ZVNjcm9sbCIsImRpc3RhbmNlIiwidGltZVNpbmNlU3RhcnQiLCJhbmltYXRpbmdTY3JvbGwiLCJzZWN0aW9ucyIsInNlY3Rpb24iLCJwZXJzaXN0ZW50Iiwib3BhY2l0eSIsInBvaW50ZXJFdmVudHMiLCJyZW1vdmVBdHRyaWJ1dGUiLCJoYXNTY3JvbGxiYXIiLCJzY3JvbGxCYXJUcmFuc2xhdGlvbiIsInNjcm9sbEJhckxpbWl0Iiwic2Nyb2xsYmFyVGh1bWIiLCJzY3JvbGxiYXIiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kIiwiZ2V0U2Nyb2xsQmFyIiwicmVsZWFzZVNjcm9sbEJhciIsIm1vdmVTY3JvbGxCYXIiLCJzY3JvbGxiYXJCQ1IiLCJzY3JvbGxiYXJIZWlnaHQiLCJzY3JvbGxiYXJXaWR0aCIsInNjcm9sbGJhclRodW1iQkNSIiwicmVpbml0U2Nyb2xsQmFyIiwiZGVzdHJveVNjcm9sbEJhciIsImNsaWVudFgiLCJjbGllbnRZIiwidGFyZ2V0UGFyZW50cyIsIl9yZWYzIiwiX3JlZjQiLCJmaW5kIiwic3RpY2t5IiwibWlkZGxlIiwiZWxCQ1IiLCJlbFRvcCIsImVsTGVmdCIsImVsRGlzdGFuY2UiLCJfdGhpczciLCJzZWN0aW9uQkNSIiwibWFwcGVkU2VjdGlvbiIsImVsZW1lbnQiLCJsZXJwWCIsImxlcnBZIiwibXNUcmFuc2Zvcm0iLCJpc0ZvcmNlZCIsIl90aGlzOCIsInNldEFsbEVsZW1lbnRzIiwic2Nyb2xsTWlkZGxlIiwiX3JlZjUiLCJfcmVmNiIsInRyYW5zZm9ybURpc3RhbmNlIiwiX3RoaXM5IiwiaXNOYU4iLCJlYXNpbmciLCJ0YXJnZXRJblNjb3BlIiwidGFyZ2V0QkNSIiwib2Zmc2V0VG9wIiwib2Zmc2V0TGVmdCIsInBhcmVudFNlY3Rpb24iLCJjYW5kaWRhdGUiLCJfcmVmNyIsIl9yZWY4IiwicGFyZW50U2VjdGlvbk9mZnNldCIsInNjcm9sbFN0YXJ0Iiwic2Nyb2xsVGFyZ2V0IiwibWluIiwic2Nyb2xsRGlmZiIsInJlbmRlciIsImxvb3AiLCJTbW9vdGgiLCJoYXNoIiwiZ2V0RWxlbWVudEJ5SWQiLCJOYXRpdmUiLCJHTE9CQUxTIiwicmVzcG9uc2l2ZSIsImhlYWRlciJdLCJzb3VyY2VSb290IjoiIn0=