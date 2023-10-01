"use strict";
self["webpackHotUpdatezinebdjardi"]("style",{

/***/ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


/* eslint-env browser */

/*
  eslint-disable
  no-console,
  func-names
*/

/** @typedef {any} TODO */

var normalizeUrl = __webpack_require__(/*! ./normalize-url */ "./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js");

var srcByModuleId = Object.create(null);
var noDocument = typeof document === "undefined";
var forEach = Array.prototype.forEach;
/**
 * @param {function} fn
 * @param {number} time
 * @returns {(function(): void)|*}
 */

function debounce(fn, time) {
  var timeout = 0;
  return function () {
    // @ts-ignore
    var self = this; // eslint-disable-next-line prefer-rest-params

    var args = arguments;

    var functionCall = function functionCall() {
      return fn.apply(self, args);
    };

    clearTimeout(timeout); // @ts-ignore

    timeout = setTimeout(functionCall, time);
  };
}

function noop() {}
/**
 * @param {TODO} moduleId
 * @returns {TODO}
 */


function getCurrentScriptUrl(moduleId) {
  var src = srcByModuleId[moduleId];

  if (!src) {
    if (document.currentScript) {
      src =
      /** @type {HTMLScriptElement} */
      document.currentScript.src;
    } else {
      var scripts = document.getElementsByTagName("script");
      var lastScriptTag = scripts[scripts.length - 1];

      if (lastScriptTag) {
        src = lastScriptTag.src;
      }
    }

    srcByModuleId[moduleId] = src;
  }
  /**
   * @param {string} fileMap
   * @returns {null | string[]}
   */


  return function (fileMap) {
    if (!src) {
      return null;
    }

    var splitResult = src.split(/([^\\/]+)\.js$/);
    var filename = splitResult && splitResult[1];

    if (!filename) {
      return [src.replace(".js", ".css")];
    }

    if (!fileMap) {
      return [src.replace(".js", ".css")];
    }

    return fileMap.split(",").map(function (mapRule) {
      var reg = new RegExp("".concat(filename, "\\.js$"), "g");
      return normalizeUrl(src.replace(reg, "".concat(mapRule.replace(/{fileName}/g, filename), ".css")));
    });
  };
}
/**
 * @param {TODO} el
 * @param {string} [url]
 */


function updateCss(el, url) {
  if (!url) {
    if (!el.href) {
      return;
    } // eslint-disable-next-line


    url = el.href.split("?")[0];
  }

  if (!isUrlRequest(
  /** @type {string} */
  url)) {
    return;
  }

  if (el.isLoaded === false) {
    // We seem to be about to replace a css link that hasn't loaded yet.
    // We're probably changing the same file more than once.
    return;
  }

  if (!url || !(url.indexOf(".css") > -1)) {
    return;
  } // eslint-disable-next-line no-param-reassign


  el.visited = true;
  var newEl = el.cloneNode();
  newEl.isLoaded = false;
  newEl.addEventListener("load", function () {
    if (newEl.isLoaded) {
      return;
    }

    newEl.isLoaded = true;
    el.parentNode.removeChild(el);
  });
  newEl.addEventListener("error", function () {
    if (newEl.isLoaded) {
      return;
    }

    newEl.isLoaded = true;
    el.parentNode.removeChild(el);
  });
  newEl.href = "".concat(url, "?").concat(Date.now());

  if (el.nextSibling) {
    el.parentNode.insertBefore(newEl, el.nextSibling);
  } else {
    el.parentNode.appendChild(newEl);
  }
}
/**
 * @param {string} href
 * @param {TODO} src
 * @returns {TODO}
 */


function getReloadUrl(href, src) {
  var ret; // eslint-disable-next-line no-param-reassign

  href = normalizeUrl(href);
  src.some(
  /**
   * @param {string} url
   */
  // eslint-disable-next-line array-callback-return
  function (url) {
    if (href.indexOf(src) > -1) {
      ret = url;
    }
  });
  return ret;
}
/**
 * @param {string} [src]
 * @returns {boolean}
 */


function reloadStyle(src) {
  if (!src) {
    return false;
  }

  var elements = document.querySelectorAll("link");
  var loaded = false;
  forEach.call(elements, function (el) {
    if (!el.href) {
      return;
    }

    var url = getReloadUrl(el.href, src);

    if (!isUrlRequest(url)) {
      return;
    }

    if (el.visited === true) {
      return;
    }

    if (url) {
      updateCss(el, url);
      loaded = true;
    }
  });
  return loaded;
}

function reloadAll() {
  var elements = document.querySelectorAll("link");
  forEach.call(elements, function (el) {
    if (el.visited === true) {
      return;
    }

    updateCss(el);
  });
}
/**
 * @param {string} url
 * @returns {boolean}
 */


function isUrlRequest(url) {
  // An URL is not an request if
  // It is not http or https
  if (!/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(url)) {
    return false;
  }

  return true;
}
/**
 * @param {TODO} moduleId
 * @param {TODO} options
 * @returns {TODO}
 */


module.exports = function (moduleId, options) {
  if (noDocument) {
    console.log("no window.document found, will not HMR CSS");
    return noop;
  }

  var getScriptSrc = getCurrentScriptUrl(moduleId);

  function update() {
    var src = getScriptSrc(options.filename);
    var reloaded = reloadStyle(src);

    if (options.locals) {
      console.log("[HMR] Detected local css modules. Reload all css");
      reloadAll();
      return;
    }

    if (reloaded) {
      console.log("[HMR] css reload %s", src.join(" "));
    } else {
      console.log("[HMR] Reload all css");
      reloadAll();
    }
  }

  return debounce(update, 50);
};

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js":
/*!************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js ***!
  \************************************************************************/
/***/ ((module) => {


/* eslint-disable */

/**
 * @param {string[]} pathComponents
 * @returns {string}
 */

function normalizeUrl(pathComponents) {
  return pathComponents.reduce(function (accumulator, item) {
    switch (item) {
      case "..":
        accumulator.pop();
        break;

      case ".":
        break;

      default:
        accumulator.push(item);
    }

    return accumulator;
  },
  /** @type {string[]} */
  []).join("/");
}
/**
 * @param {string} urlString
 * @returns {string}
 */


module.exports = function (urlString) {
  urlString = urlString.trim();

  if (/^data:/i.test(urlString)) {
    return urlString;
  }

  var protocol = urlString.indexOf("//") !== -1 ? urlString.split("//")[0] + "//" : "";
  var components = urlString.replace(new RegExp(protocol, "i"), "").split("/");
  var host = components[0].toLowerCase().replace(/\.$/, "");
  components[0] = "";
  var path = normalizeUrl(components);
  return protocol + host + path;
};

/***/ }),

/***/ "./src/style/index.scss":
/*!******************************!*\
  !*** ./src/style/index.scss ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1696098108366
      var cssReload = __webpack_require__(/*! ../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"publicPath":"","locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1ad64496cd7ffb5b8751")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGUuOWQ3NjQzNjgxM2YwZDQ0YjZjNTIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBYTtBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBQ0EsSUFBSUEsWUFBWSxHQUFHQyxtQkFBTyxDQUFDLHlGQUFELENBQTFCOztBQUVBLElBQUlDLGFBQWEsR0FBR0MsTUFBTSxDQUFDQyxNQUFQLENBQWMsSUFBZCxDQUFwQjtBQUNBLElBQUlDLFVBQVUsR0FBRyxPQUFPQyxRQUFQLEtBQW9CLFdBQXJDO0FBQ0EsSUFBSUMsT0FBTyxHQUFHQyxLQUFLLENBQUNDLFNBQU4sQ0FBZ0JGLE9BQTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTRyxRQUFULENBQWtCQyxFQUFsQixFQUFzQkMsSUFBdEIsRUFBNEI7RUFDMUIsSUFBSUMsT0FBTyxHQUFHLENBQWQ7RUFDQSxPQUFPLFlBQVk7SUFDakI7SUFDQSxJQUFJQyxJQUFJLEdBQUcsSUFBWCxDQUZpQixDQUVBOztJQUVqQixJQUFJQyxJQUFJLEdBQUdDLFNBQVg7O0lBRUEsSUFBSUMsWUFBWSxHQUFHLFNBQVNBLFlBQVQsR0FBd0I7TUFDekMsT0FBT04sRUFBRSxDQUFDTyxLQUFILENBQVNKLElBQVQsRUFBZUMsSUFBZixDQUFQO0lBQ0QsQ0FGRDs7SUFJQUksWUFBWSxDQUFDTixPQUFELENBQVosQ0FWaUIsQ0FVTTs7SUFFdkJBLE9BQU8sR0FBR08sVUFBVSxDQUFDSCxZQUFELEVBQWVMLElBQWYsQ0FBcEI7RUFDRCxDQWJEO0FBY0Q7O0FBRUQsU0FBU1MsSUFBVCxHQUFnQixDQUFFO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxTQUFTQyxtQkFBVCxDQUE2QkMsUUFBN0IsRUFBdUM7RUFDckMsSUFBSUMsR0FBRyxHQUFHdEIsYUFBYSxDQUFDcUIsUUFBRCxDQUF2Qjs7RUFFQSxJQUFJLENBQUNDLEdBQUwsRUFBVTtJQUNSLElBQUlsQixRQUFRLENB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LGNBQWMsK0JBQStCO0FBQ3hKLE1BQU0sVUFBVTtBQUNoQixNQUFNLGlCQUFpQjtBQUN2QjtBQUNBOzs7Ozs7OztVQ1JBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vemluZWJkamFyZGkvLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanMiLCJ3ZWJwYWNrOi8vemluZWJkamFyZGkvLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvbm9ybWFsaXplLXVybC5qcyIsIndlYnBhY2s6Ly96aW5lYmRqYXJkaS8uL3NyYy9zdHlsZS9pbmRleC5zY3NzPzRlNGUiLCJ3ZWJwYWNrOi8vemluZWJkamFyZGkvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuLypcbiAgZXNsaW50LWRpc2FibGVcbiAgbm8tY29uc29sZSxcbiAgZnVuYy1uYW1lc1xuKi9cblxuLyoqIEB0eXBlZGVmIHthbnl9IFRPRE8gKi9cbnZhciBub3JtYWxpemVVcmwgPSByZXF1aXJlKFwiLi9ub3JtYWxpemUtdXJsXCIpO1xuXG52YXIgc3JjQnlNb2R1bGVJZCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG52YXIgbm9Eb2N1bWVudCA9IHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIjtcbnZhciBmb3JFYWNoID0gQXJyYXkucHJvdG90eXBlLmZvckVhY2g7XG4vKipcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcGFyYW0ge251bWJlcn0gdGltZVxuICogQHJldHVybnMgeyhmdW5jdGlvbigpOiB2b2lkKXwqfVxuICovXG5cbmZ1bmN0aW9uIGRlYm91bmNlKGZuLCB0aW1lKSB7XG4gIHZhciB0aW1lb3V0ID0gMDtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgdmFyIHNlbGYgPSB0aGlzOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLXJlc3QtcGFyYW1zXG5cbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcblxuICAgIHZhciBmdW5jdGlvbkNhbGwgPSBmdW5jdGlvbiBmdW5jdGlvbkNhbGwoKSB7XG4gICAgICByZXR1cm4gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgfTtcblxuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTsgLy8gQHRzLWlnbm9yZVxuXG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb25DYWxsLCB0aW1lKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gbm9vcCgpIHt9XG4vKipcbiAqIEBwYXJhbSB7VE9ET30gbW9kdWxlSWRcbiAqIEByZXR1cm5zIHtUT0RPfVxuICovXG5cblxuZnVuY3Rpb24gZ2V0Q3VycmVudFNjcmlwdFVybChtb2R1bGVJZCkge1xuICB2YXIgc3JjID0gc3JjQnlNb2R1bGVJZFttb2R1bGVJZF07XG5cbiAgaWYgKCFzcmMpIHtcbiAgICBpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCkge1xuICAgICAgc3JjID1cbiAgICAgIC8qKiBAdHlwZSB7SFRNTFNjcmlwdEVsZW1lbnR9ICovXG4gICAgICBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcbiAgICAgIHZhciBsYXN0U2NyaXB0VGFnID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdO1xuXG4gICAgICBpZiAobGFzdFNjcmlwdFRhZykge1xuICAgICAgICBzcmMgPSBsYXN0U2NyaXB0VGFnLnNyYztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzcmNCeU1vZHVsZUlkW21vZHVsZUlkXSA9IHNyYztcbiAgfVxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGVNYXBcbiAgICogQHJldHVybnMge251bGwgfCBzdHJpbmdbXX1cbiAgICovXG5cblxuICByZXR1cm4gZnVuY3Rpb24gKGZpbGVNYXApIHtcbiAgICBpZiAoIXNyYykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIHNwbGl0UmVzdWx0ID0gc3JjLnNwbGl0KC8oW15cXFxcL10rKVxcLmpzJC8pO1xuICAgIHZhciBmaWxlbmFtZSA9IHNwbGl0UmVzdWx0ICYmIHNwbGl0UmVzdWx0WzFdO1xuXG4gICAgaWYgKCFmaWxlbmFtZSkge1xuICAgICAgcmV0dXJuIFtzcmMucmVwbGFjZShcIi5qc1wiLCBcIi5jc3NcIildO1xuICAgIH1cblxuICAgIGlmICghZmlsZU1hcCkge1xuICAgICAgcmV0dXJuIFtzcmMucmVwbGFjZShcIi5qc1wiLCBcIi5jc3NcIildO1xuICAgIH1cblxuICAgIHJldHVybiBmaWxlTWFwLnNwbGl0KFwiLFwiKS5tYXAoZnVuY3Rpb24gKG1hcFJ1bGUpIHtcbiAgICAgIHZhciByZWcgPSBuZXcgUmVnRXhwKFwiXCIuY29uY2F0KGZpbGVuYW1lLCBcIlxcXFwuanMkXCIpLCBcImdcIik7XG4gICAgICByZXR1cm4gbm9ybWFsaXplVXJsKHNyYy5yZXBsYWNlKHJlZywgXCJcIi5jb25jYXQobWFwUnVsZS5yZXBsYWNlKC97ZmlsZU5hbWV9L2csIGZpbGVuYW1lKSwgXCIuY3NzXCIpKSk7XG4gICAgfSk7XG4gIH07XG59XG4vKipcbiAqIEBwYXJhbSB7VE9ET30gZWxcbiAqIEBwYXJhbSB7c3RyaW5nfSBbdXJsXVxuICovXG5cblxuZnVuY3Rpb24gdXBkYXRlQ3NzKGVsLCB1cmwpIHtcbiAgaWYgKCF1cmwpIHtcbiAgICBpZiAoIWVsLmhyZWYpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuXG5cbiAgICB1cmwgPSBlbC5ocmVmLnNwbGl0KFwiP1wiKVswXTtcbiAgfVxuXG4gIGlmICghaXNVcmxSZXF1ZXN0KFxuICAvKiogQHR5cGUge3N0cmluZ30gKi9cbiAgdXJsKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChlbC5pc0xvYWRlZCA9PT0gZmFsc2UpIHtcbiAgICAvLyBXZSBzZWVtIHRvIGJlIGFib3V0IHRvIHJlcGxhY2UgYSBjc3MgbGluayB0aGF0IGhhc24ndCBsb2FkZWQgeWV0LlxuICAgIC8vIFdlJ3JlIHByb2JhYmx5IGNoYW5naW5nIHRoZSBzYW1lIGZpbGUgbW9yZSB0aGFuIG9uY2UuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKCF1cmwgfHwgISh1cmwuaW5kZXhPZihcIi5jc3NcIikgPiAtMSkpIHtcbiAgICByZXR1cm47XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICBlbC52aXNpdGVkID0gdHJ1ZTtcbiAgdmFyIG5ld0VsID0gZWwuY2xvbmVOb2RlKCk7XG4gIG5ld0VsLmlzTG9hZGVkID0gZmFsc2U7XG4gIG5ld0VsLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAobmV3RWwuaXNMb2FkZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBuZXdFbC5pc0xvYWRlZCA9IHRydWU7XG4gICAgZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbCk7XG4gIH0pO1xuICBuZXdFbC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgZnVuY3Rpb24gKCkge1xuICAgIGlmIChuZXdFbC5pc0xvYWRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG5ld0VsLmlzTG9hZGVkID0gdHJ1ZTtcbiAgICBlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsKTtcbiAgfSk7XG4gIG5ld0VsLmhyZWYgPSBcIlwiLmNvbmNhdCh1cmwsIFwiP1wiKS5jb25jYXQoRGF0ZS5ub3coKSk7XG5cbiAgaWYgKGVsLm5leHRTaWJsaW5nKSB7XG4gICAgZWwucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3RWwsIGVsLm5leHRTaWJsaW5nKTtcbiAgfSBlbHNlIHtcbiAgICBlbC5wYXJlbnROb2RlLmFwcGVuZENoaWxkKG5ld0VsKTtcbiAgfVxufVxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gaHJlZlxuICogQHBhcmFtIHtUT0RPfSBzcmNcbiAqIEByZXR1cm5zIHtUT0RPfVxuICovXG5cblxuZnVuY3Rpb24gZ2V0UmVsb2FkVXJsKGhyZWYsIHNyYykge1xuICB2YXIgcmV0OyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cblxuICBocmVmID0gbm9ybWFsaXplVXJsKGhyZWYpO1xuICBzcmMuc29tZShcbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICovXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgZnVuY3Rpb24gKHVybCkge1xuICAgIGlmIChocmVmLmluZGV4T2Yoc3JjKSA+IC0xKSB7XG4gICAgICByZXQgPSB1cmw7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJldDtcbn1cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IFtzcmNdXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuXG5cbmZ1bmN0aW9uIHJlbG9hZFN0eWxlKHNyYykge1xuICBpZiAoIXNyYykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaW5rXCIpO1xuICB2YXIgbG9hZGVkID0gZmFsc2U7XG4gIGZvckVhY2guY2FsbChlbGVtZW50cywgZnVuY3Rpb24gKGVsKSB7XG4gICAgaWYgKCFlbC5ocmVmKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHVybCA9IGdldFJlbG9hZFVybChlbC5ocmVmLCBzcmMpO1xuXG4gICAgaWYgKCFpc1VybFJlcXVlc3QodXJsKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChlbC52aXNpdGVkID09PSB0cnVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHVybCkge1xuICAgICAgdXBkYXRlQ3NzKGVsLCB1cmwpO1xuICAgICAgbG9hZGVkID0gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gbG9hZGVkO1xufVxuXG5mdW5jdGlvbiByZWxvYWRBbGwoKSB7XG4gIHZhciBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaW5rXCIpO1xuICBmb3JFYWNoLmNhbGwoZWxlbWVudHMsIGZ1bmN0aW9uIChlbCkge1xuICAgIGlmIChlbC52aXNpdGVkID09PSB0cnVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdXBkYXRlQ3NzKGVsKTtcbiAgfSk7XG59XG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5cblxuZnVuY3Rpb24gaXNVcmxSZXF1ZXN0KHVybCkge1xuICAvLyBBbiBVUkwgaXMgbm90IGFuIHJlcXVlc3QgaWZcbiAgLy8gSXQgaXMgbm90IGh0dHAgb3IgaHR0cHNcbiAgaWYgKCEvXlthLXpBLVpdW2EtekEtWlxcZCtcXC0uXSo6Ly50ZXN0KHVybCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cbi8qKlxuICogQHBhcmFtIHtUT0RPfSBtb2R1bGVJZFxuICogQHBhcmFtIHtUT0RPfSBvcHRpb25zXG4gKiBAcmV0dXJucyB7VE9ET31cbiAqL1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG1vZHVsZUlkLCBvcHRpb25zKSB7XG4gIGlmIChub0RvY3VtZW50KSB7XG4gICAgY29uc29sZS5sb2coXCJubyB3aW5kb3cuZG9jdW1lbnQgZm91bmQsIHdpbGwgbm90IEhNUiBDU1NcIik7XG4gICAgcmV0dXJuIG5vb3A7XG4gIH1cblxuICB2YXIgZ2V0U2NyaXB0U3JjID0gZ2V0Q3VycmVudFNjcmlwdFVybChtb2R1bGVJZCk7XG5cbiAgZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIHZhciBzcmMgPSBnZXRTY3JpcHRTcmMob3B0aW9ucy5maWxlbmFtZSk7XG4gICAgdmFyIHJlbG9hZGVkID0gcmVsb2FkU3R5bGUoc3JjKTtcblxuICAgIGlmIChvcHRpb25zLmxvY2Fscykge1xuICAgICAgY29uc29sZS5sb2coXCJbSE1SXSBEZXRlY3RlZCBsb2NhbCBjc3MgbW9kdWxlcy4gUmVsb2FkIGFsbCBjc3NcIik7XG4gICAgICByZWxvYWRBbGwoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocmVsb2FkZWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiW0hNUl0gY3NzIHJlbG9hZCAlc1wiLCBzcmMuam9pbihcIiBcIikpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIltITVJdIFJlbG9hZCBhbGwgY3NzXCIpO1xuICAgICAgcmVsb2FkQWxsKCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRlYm91bmNlKHVwZGF0ZSwgNTApO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogZXNsaW50LWRpc2FibGUgKi9cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBwYXRoQ29tcG9uZW50c1xuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplVXJsKHBhdGhDb21wb25lbnRzKSB7XG4gIHJldHVybiBwYXRoQ29tcG9uZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjY3VtdWxhdG9yLCBpdGVtKSB7XG4gICAgc3dpdGNoIChpdGVtKSB7XG4gICAgICBjYXNlIFwiLi5cIjpcbiAgICAgICAgYWNjdW11bGF0b3IucG9wKCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFwiLlwiOlxuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYWNjdW11bGF0b3IucHVzaChpdGVtKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWNjdW11bGF0b3I7XG4gIH0sXG4gIC8qKiBAdHlwZSB7c3RyaW5nW119ICovXG4gIFtdKS5qb2luKFwiL1wiKTtcbn1cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFN0cmluZ1xuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybFN0cmluZykge1xuICB1cmxTdHJpbmcgPSB1cmxTdHJpbmcudHJpbSgpO1xuXG4gIGlmICgvXmRhdGE6L2kudGVzdCh1cmxTdHJpbmcpKSB7XG4gICAgcmV0dXJuIHVybFN0cmluZztcbiAgfVxuXG4gIHZhciBwcm90b2NvbCA9IHVybFN0cmluZy5pbmRleE9mKFwiLy9cIikgIT09IC0xID8gdXJsU3RyaW5nLnNwbGl0KFwiLy9cIilbMF0gKyBcIi8vXCIgOiBcIlwiO1xuICB2YXIgY29tcG9uZW50cyA9IHVybFN0cmluZy5yZXBsYWNlKG5ldyBSZWdFeHAocHJvdG9jb2wsIFwiaVwiKSwgXCJcIikuc3BsaXQoXCIvXCIpO1xuICB2YXIgaG9zdCA9IGNvbXBvbmVudHNbMF0udG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXC4kLywgXCJcIik7XG4gIGNvbXBvbmVudHNbMF0gPSBcIlwiO1xuICB2YXIgcGF0aCA9IG5vcm1hbGl6ZVVybChjb21wb25lbnRzKTtcbiAgcmV0dXJuIHByb3RvY29sICsgaG9zdCArIHBhdGg7XG59OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2OTYwOTgxMDgzNjZcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wicHVibGljUGF0aFwiOlwiXCIsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIxYWQ2NDQ5NmNkN2ZmYjViODc1MVwiKSJdLCJuYW1lcyI6WyJub3JtYWxpemVVcmwiLCJyZXF1aXJlIiwic3JjQnlNb2R1bGVJZCIsIk9iamVjdCIsImNyZWF0ZSIsIm5vRG9jdW1lbnQiLCJkb2N1bWVudCIsImZvckVhY2giLCJBcnJheSIsInByb3RvdHlwZSIsImRlYm91bmNlIiwiZm4iLCJ0aW1lIiwidGltZW91dCIsInNlbGYiLCJhcmdzIiwiYXJndW1lbnRzIiwiZnVuY3Rpb25DYWxsIiwiYXBwbHkiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0Iiwibm9vcCIsImdldEN1cnJlbnRTY3JpcHRVcmwiLCJtb2R1bGVJZCIsInNyYyIsImN1cnJlbnRTY3JpcHQiLCJzY3JpcHRzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJsYXN0U2NyaXB0VGFnIiwibGVuZ3RoIiwiZmlsZU1hcCIsInNwbGl0UmVzdWx0Iiwic3BsaXQiLCJmaWxlbmFtZSIsInJlcGxhY2UiLCJtYXAiLCJtYXBSdWxlIiwicmVnIiwiUmVnRXhwIiwiY29uY2F0IiwidXBkYXRlQ3NzIiwiZWwiLCJ1cmwiLCJocmVmIiwiaXNVcmxSZXF1ZXN0IiwiaXNMb2FkZWQiLCJpbmRleE9mIiwidmlzaXRlZCIsIm5ld0VsIiwiY2xvbmVOb2RlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsIkRhdGUiLCJub3ciLCJuZXh0U2libGluZyIsImluc2VydEJlZm9yZSIsImFwcGVuZENoaWxkIiwiZ2V0UmVsb2FkVXJsIiwicmV0Iiwic29tZSIsInJlbG9hZFN0eWxlIiwiZWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibG9hZGVkIiwiY2FsbCIsInJlbG9hZEFsbCIsInRlc3QiLCJtb2R1bGUiLCJleHBvcnRzIiwib3B0aW9ucyIsImNvbnNvbGUiLCJsb2ciLCJnZXRTY3JpcHRTcmMiLCJ1cGRhdGUiLCJyZWxvYWRlZCIsImxvY2FscyIsImpvaW4iLCJwYXRoQ29tcG9uZW50cyIsInJlZHVjZSIsImFjY3VtdWxhdG9yIiwiaXRlbSIsInBvcCIsInB1c2giLCJ1cmxTdHJpbmciLCJ0cmltIiwicHJvdG9jb2wiLCJjb21wb25lbnRzIiwiaG9zdCIsInRvTG93ZXJDYXNlIiwicGF0aCJdLCJzb3VyY2VSb290IjoiIn0=