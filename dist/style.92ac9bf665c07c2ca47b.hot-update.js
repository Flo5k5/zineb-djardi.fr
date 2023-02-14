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
      // 1676046205455
      var cssReload = __webpack_require__(/*! ../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"publicPath":"","locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("93d733a708ee9a686115")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGUuOTJhYzliZjY2NWMwN2MyY2E0N2IuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBYTtBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBQ0EsSUFBSUEsWUFBWSxHQUFHQyxtQkFBTyxDQUFDLHlGQUFELENBQTFCOztBQUVBLElBQUlDLGFBQWEsR0FBR0MsTUFBTSxDQUFDQyxNQUFQLENBQWMsSUFBZCxDQUFwQjtBQUNBLElBQUlDLFVBQVUsR0FBRyxPQUFPQyxRQUFQLEtBQW9CLFdBQXJDO0FBQ0EsSUFBSUMsT0FBTyxHQUFHQyxLQUFLLENBQUNDLFNBQU4sQ0FBZ0JGLE9BQTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTRyxRQUFULENBQWtCQyxFQUFsQixFQUFzQkMsSUFBdEIsRUFBNEI7RUFDMUIsSUFBSUMsT0FBTyxHQUFHLENBQWQ7RUFDQSxPQUFPLFlBQVk7SUFDakI7SUFDQSxJQUFJQyxJQUFJLEdBQUcsSUFBWCxDQUZpQixDQUVBOztJQUVqQixJQUFJQyxJQUFJLEdBQUdDLFNBQVg7O0lBRUEsSUFBSUMsWUFBWSxHQUFHLFNBQVNBLFlBQVQsR0FBd0I7TUFDekMsT0FBT04sRUFBRSxDQUFDTyxLQUFILENBQVNKLElBQVQsRUFBZUMsSUFBZixDQUFQO0lBQ0QsQ0FGRDs7SUFJQUksWUFBWSxDQUFDTixPQUFELENBQVosQ0FWaUIsQ0FVTTs7SUFFdkJBLE9BQU8sR0FBR08sVUFBVSxDQUFDSCxZQUFELEVBQWVMLElBQWYsQ0FBcEI7RUFDRCxDQWJEO0FBY0Q7O0FBRUQsU0FBU1MsSUFBVCxHQUFnQixDQUFFO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxTQUFTQyxtQkFBVCxDQUE2QkMsUUFBN0IsRUFBdUM7RUFDckMsSUFBSUMsR0FBRyxHQUFHdEIsYUFBYSxDQUFDcUIsUUFBRCxDQUF2Qjs7RUFFQSxJQUFJLENBQUNDLEdBQUwsRUFBVTtJQUNSLElBQUlsQixRQUFRLENB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LGNBQWMsK0JBQStCO0FBQ3hKLE1BQU0sVUFBVTtBQUNoQixNQUFNLGlCQUFpQjtBQUN2QjtBQUNBOzs7Ozs7OztVQ1JBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vemluZWJkamFyZGkvLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanMiLCJ3ZWJwYWNrOi8vemluZWJkamFyZGkvLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvbm9ybWFsaXplLXVybC5qcyIsIndlYnBhY2s6Ly96aW5lYmRqYXJkaS8uL3NyYy9zdHlsZS9pbmRleC5zY3NzIiwid2VicGFjazovL3ppbmViZGphcmRpL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbi8qXG4gIGVzbGludC1kaXNhYmxlXG4gIG5vLWNvbnNvbGUsXG4gIGZ1bmMtbmFtZXNcbiovXG5cbi8qKiBAdHlwZWRlZiB7YW55fSBUT0RPICovXG52YXIgbm9ybWFsaXplVXJsID0gcmVxdWlyZShcIi4vbm9ybWFsaXplLXVybFwiKTtcblxudmFyIHNyY0J5TW9kdWxlSWQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xudmFyIG5vRG9jdW1lbnQgPSB0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCI7XG52YXIgZm9yRWFjaCA9IEFycmF5LnByb3RvdHlwZS5mb3JFYWNoO1xuLyoqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHBhcmFtIHtudW1iZXJ9IHRpbWVcbiAqIEByZXR1cm5zIHsoZnVuY3Rpb24oKTogdm9pZCl8Kn1cbiAqL1xuXG5mdW5jdGlvbiBkZWJvdW5jZShmbiwgdGltZSkge1xuICB2YXIgdGltZW91dCA9IDA7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHZhciBzZWxmID0gdGhpczsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1yZXN0LXBhcmFtc1xuXG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG5cbiAgICB2YXIgZnVuY3Rpb25DYWxsID0gZnVuY3Rpb24gZnVuY3Rpb25DYWxsKCkge1xuICAgICAgcmV0dXJuIGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgIH07XG5cbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7IC8vIEB0cy1pZ25vcmVcblxuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uQ2FsbCwgdGltZSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuLyoqXG4gKiBAcGFyYW0ge1RPRE99IG1vZHVsZUlkXG4gKiBAcmV0dXJucyB7VE9ET31cbiAqL1xuXG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRTY3JpcHRVcmwobW9kdWxlSWQpIHtcbiAgdmFyIHNyYyA9IHNyY0J5TW9kdWxlSWRbbW9kdWxlSWRdO1xuXG4gIGlmICghc3JjKSB7XG4gICAgaWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpIHtcbiAgICAgIHNyYyA9XG4gICAgICAvKiogQHR5cGUge0hUTUxTY3JpcHRFbGVtZW50fSAqL1xuICAgICAgZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG4gICAgICB2YXIgbGFzdFNjcmlwdFRhZyA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXTtcblxuICAgICAgaWYgKGxhc3RTY3JpcHRUYWcpIHtcbiAgICAgICAgc3JjID0gbGFzdFNjcmlwdFRhZy5zcmM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3JjQnlNb2R1bGVJZFttb2R1bGVJZF0gPSBzcmM7XG4gIH1cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlTWFwXG4gICAqIEByZXR1cm5zIHtudWxsIHwgc3RyaW5nW119XG4gICAqL1xuXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChmaWxlTWFwKSB7XG4gICAgaWYgKCFzcmMpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBzcGxpdFJlc3VsdCA9IHNyYy5zcGxpdCgvKFteXFxcXC9dKylcXC5qcyQvKTtcbiAgICB2YXIgZmlsZW5hbWUgPSBzcGxpdFJlc3VsdCAmJiBzcGxpdFJlc3VsdFsxXTtcblxuICAgIGlmICghZmlsZW5hbWUpIHtcbiAgICAgIHJldHVybiBbc3JjLnJlcGxhY2UoXCIuanNcIiwgXCIuY3NzXCIpXTtcbiAgICB9XG5cbiAgICBpZiAoIWZpbGVNYXApIHtcbiAgICAgIHJldHVybiBbc3JjLnJlcGxhY2UoXCIuanNcIiwgXCIuY3NzXCIpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmlsZU1hcC5zcGxpdChcIixcIikubWFwKGZ1bmN0aW9uIChtYXBSdWxlKSB7XG4gICAgICB2YXIgcmVnID0gbmV3IFJlZ0V4cChcIlwiLmNvbmNhdChmaWxlbmFtZSwgXCJcXFxcLmpzJFwiKSwgXCJnXCIpO1xuICAgICAgcmV0dXJuIG5vcm1hbGl6ZVVybChzcmMucmVwbGFjZShyZWcsIFwiXCIuY29uY2F0KG1hcFJ1bGUucmVwbGFjZSgve2ZpbGVOYW1lfS9nLCBmaWxlbmFtZSksIFwiLmNzc1wiKSkpO1xuICAgIH0pO1xuICB9O1xufVxuLyoqXG4gKiBAcGFyYW0ge1RPRE99IGVsXG4gKiBAcGFyYW0ge3N0cmluZ30gW3VybF1cbiAqL1xuXG5cbmZ1bmN0aW9uIHVwZGF0ZUNzcyhlbCwgdXJsKSB7XG4gIGlmICghdXJsKSB7XG4gICAgaWYgKCFlbC5ocmVmKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcblxuXG4gICAgdXJsID0gZWwuaHJlZi5zcGxpdChcIj9cIilbMF07XG4gIH1cblxuICBpZiAoIWlzVXJsUmVxdWVzdChcbiAgLyoqIEB0eXBlIHtzdHJpbmd9ICovXG4gIHVybCkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoZWwuaXNMb2FkZWQgPT09IGZhbHNlKSB7XG4gICAgLy8gV2Ugc2VlbSB0byBiZSBhYm91dCB0byByZXBsYWNlIGEgY3NzIGxpbmsgdGhhdCBoYXNuJ3QgbG9hZGVkIHlldC5cbiAgICAvLyBXZSdyZSBwcm9iYWJseSBjaGFuZ2luZyB0aGUgc2FtZSBmaWxlIG1vcmUgdGhhbiBvbmNlLlxuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghdXJsIHx8ICEodXJsLmluZGV4T2YoXCIuY3NzXCIpID4gLTEpKSB7XG4gICAgcmV0dXJuO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgZWwudmlzaXRlZCA9IHRydWU7XG4gIHZhciBuZXdFbCA9IGVsLmNsb25lTm9kZSgpO1xuICBuZXdFbC5pc0xvYWRlZCA9IGZhbHNlO1xuICBuZXdFbC5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKG5ld0VsLmlzTG9hZGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbmV3RWwuaXNMb2FkZWQgPSB0cnVlO1xuICAgIGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpO1xuICB9KTtcbiAgbmV3RWwuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAobmV3RWwuaXNMb2FkZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBuZXdFbC5pc0xvYWRlZCA9IHRydWU7XG4gICAgZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbCk7XG4gIH0pO1xuICBuZXdFbC5ocmVmID0gXCJcIi5jb25jYXQodXJsLCBcIj9cIikuY29uY2F0KERhdGUubm93KCkpO1xuXG4gIGlmIChlbC5uZXh0U2libGluZykge1xuICAgIGVsLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld0VsLCBlbC5uZXh0U2libGluZyk7XG4gIH0gZWxzZSB7XG4gICAgZWwucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChuZXdFbCk7XG4gIH1cbn1cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGhyZWZcbiAqIEBwYXJhbSB7VE9ET30gc3JjXG4gKiBAcmV0dXJucyB7VE9ET31cbiAqL1xuXG5cbmZ1bmN0aW9uIGdldFJlbG9hZFVybChocmVmLCBzcmMpIHtcbiAgdmFyIHJldDsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG5cbiAgaHJlZiA9IG5vcm1hbGl6ZVVybChocmVmKTtcbiAgc3JjLnNvbWUoXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqL1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gIGZ1bmN0aW9uICh1cmwpIHtcbiAgICBpZiAoaHJlZi5pbmRleE9mKHNyYykgPiAtMSkge1xuICAgICAgcmV0ID0gdXJsO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXQ7XG59XG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBbc3JjXVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cblxuXG5mdW5jdGlvbiByZWxvYWRTdHlsZShzcmMpIHtcbiAgaWYgKCFzcmMpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwibGlua1wiKTtcbiAgdmFyIGxvYWRlZCA9IGZhbHNlO1xuICBmb3JFYWNoLmNhbGwoZWxlbWVudHMsIGZ1bmN0aW9uIChlbCkge1xuICAgIGlmICghZWwuaHJlZikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciB1cmwgPSBnZXRSZWxvYWRVcmwoZWwuaHJlZiwgc3JjKTtcblxuICAgIGlmICghaXNVcmxSZXF1ZXN0KHVybCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZWwudmlzaXRlZCA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh1cmwpIHtcbiAgICAgIHVwZGF0ZUNzcyhlbCwgdXJsKTtcbiAgICAgIGxvYWRlZCA9IHRydWU7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGxvYWRlZDtcbn1cblxuZnVuY3Rpb24gcmVsb2FkQWxsKCkge1xuICB2YXIgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwibGlua1wiKTtcbiAgZm9yRWFjaC5jYWxsKGVsZW1lbnRzLCBmdW5jdGlvbiAoZWwpIHtcbiAgICBpZiAoZWwudmlzaXRlZCA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHVwZGF0ZUNzcyhlbCk7XG4gIH0pO1xufVxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuXG5cbmZ1bmN0aW9uIGlzVXJsUmVxdWVzdCh1cmwpIHtcbiAgLy8gQW4gVVJMIGlzIG5vdCBhbiByZXF1ZXN0IGlmXG4gIC8vIEl0IGlzIG5vdCBodHRwIG9yIGh0dHBzXG4gIGlmICghL15bYS16QS1aXVthLXpBLVpcXGQrXFwtLl0qOi8udGVzdCh1cmwpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG4vKipcbiAqIEBwYXJhbSB7VE9ET30gbW9kdWxlSWRcbiAqIEBwYXJhbSB7VE9ET30gb3B0aW9uc1xuICogQHJldHVybnMge1RPRE99XG4gKi9cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChtb2R1bGVJZCwgb3B0aW9ucykge1xuICBpZiAobm9Eb2N1bWVudCkge1xuICAgIGNvbnNvbGUubG9nKFwibm8gd2luZG93LmRvY3VtZW50IGZvdW5kLCB3aWxsIG5vdCBITVIgQ1NTXCIpO1xuICAgIHJldHVybiBub29wO1xuICB9XG5cbiAgdmFyIGdldFNjcmlwdFNyYyA9IGdldEN1cnJlbnRTY3JpcHRVcmwobW9kdWxlSWQpO1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICB2YXIgc3JjID0gZ2V0U2NyaXB0U3JjKG9wdGlvbnMuZmlsZW5hbWUpO1xuICAgIHZhciByZWxvYWRlZCA9IHJlbG9hZFN0eWxlKHNyYyk7XG5cbiAgICBpZiAob3B0aW9ucy5sb2NhbHMpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiW0hNUl0gRGV0ZWN0ZWQgbG9jYWwgY3NzIG1vZHVsZXMuIFJlbG9hZCBhbGwgY3NzXCIpO1xuICAgICAgcmVsb2FkQWxsKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHJlbG9hZGVkKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIltITVJdIGNzcyByZWxvYWQgJXNcIiwgc3JjLmpvaW4oXCIgXCIpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJbSE1SXSBSZWxvYWQgYWxsIGNzc1wiKTtcbiAgICAgIHJlbG9hZEFsbCgpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkZWJvdW5jZSh1cGRhdGUsIDUwKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGVzbGludC1kaXNhYmxlICovXG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmdbXX0gcGF0aENvbXBvbmVudHNcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZVVybChwYXRoQ29tcG9uZW50cykge1xuICByZXR1cm4gcGF0aENvbXBvbmVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2N1bXVsYXRvciwgaXRlbSkge1xuICAgIHN3aXRjaCAoaXRlbSkge1xuICAgICAgY2FzZSBcIi4uXCI6XG4gICAgICAgIGFjY3VtdWxhdG9yLnBvcCgpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcIi5cIjpcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGFjY3VtdWxhdG9yLnB1c2goaXRlbSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjY3VtdWxhdG9yO1xuICB9LFxuICAvKiogQHR5cGUge3N0cmluZ1tdfSAqL1xuICBbXSkuam9pbihcIi9cIik7XG59XG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxTdHJpbmdcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmxTdHJpbmcpIHtcbiAgdXJsU3RyaW5nID0gdXJsU3RyaW5nLnRyaW0oKTtcblxuICBpZiAoL15kYXRhOi9pLnRlc3QodXJsU3RyaW5nKSkge1xuICAgIHJldHVybiB1cmxTdHJpbmc7XG4gIH1cblxuICB2YXIgcHJvdG9jb2wgPSB1cmxTdHJpbmcuaW5kZXhPZihcIi8vXCIpICE9PSAtMSA/IHVybFN0cmluZy5zcGxpdChcIi8vXCIpWzBdICsgXCIvL1wiIDogXCJcIjtcbiAgdmFyIGNvbXBvbmVudHMgPSB1cmxTdHJpbmcucmVwbGFjZShuZXcgUmVnRXhwKHByb3RvY29sLCBcImlcIiksIFwiXCIpLnNwbGl0KFwiL1wiKTtcbiAgdmFyIGhvc3QgPSBjb21wb25lbnRzWzBdLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFwuJC8sIFwiXCIpO1xuICBjb21wb25lbnRzWzBdID0gXCJcIjtcbiAgdmFyIHBhdGggPSBub3JtYWxpemVVcmwoY29tcG9uZW50cyk7XG4gIHJldHVybiBwcm90b2NvbCArIGhvc3QgKyBwYXRoO1xufTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjc2MDQ2MjA1NDU1XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcInB1YmxpY1BhdGhcIjpcIlwiLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOTNkNzMzYTcwOGVlOWE2ODYxMTVcIikiXSwibmFtZXMiOlsibm9ybWFsaXplVXJsIiwicmVxdWlyZSIsInNyY0J5TW9kdWxlSWQiLCJPYmplY3QiLCJjcmVhdGUiLCJub0RvY3VtZW50IiwiZG9jdW1lbnQiLCJmb3JFYWNoIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJkZWJvdW5jZSIsImZuIiwidGltZSIsInRpbWVvdXQiLCJzZWxmIiwiYXJncyIsImFyZ3VtZW50cyIsImZ1bmN0aW9uQ2FsbCIsImFwcGx5IiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsIm5vb3AiLCJnZXRDdXJyZW50U2NyaXB0VXJsIiwibW9kdWxlSWQiLCJzcmMiLCJjdXJyZW50U2NyaXB0Iiwic2NyaXB0cyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwibGFzdFNjcmlwdFRhZyIsImxlbmd0aCIsImZpbGVNYXAiLCJzcGxpdFJlc3VsdCIsInNwbGl0IiwiZmlsZW5hbWUiLCJyZXBsYWNlIiwibWFwIiwibWFwUnVsZSIsInJlZyIsIlJlZ0V4cCIsImNvbmNhdCIsInVwZGF0ZUNzcyIsImVsIiwidXJsIiwiaHJlZiIsImlzVXJsUmVxdWVzdCIsImlzTG9hZGVkIiwiaW5kZXhPZiIsInZpc2l0ZWQiLCJuZXdFbCIsImNsb25lTm9kZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJEYXRlIiwibm93IiwibmV4dFNpYmxpbmciLCJpbnNlcnRCZWZvcmUiLCJhcHBlbmRDaGlsZCIsImdldFJlbG9hZFVybCIsInJldCIsInNvbWUiLCJyZWxvYWRTdHlsZSIsImVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImxvYWRlZCIsImNhbGwiLCJyZWxvYWRBbGwiLCJ0ZXN0IiwibW9kdWxlIiwiZXhwb3J0cyIsIm9wdGlvbnMiLCJjb25zb2xlIiwibG9nIiwiZ2V0U2NyaXB0U3JjIiwidXBkYXRlIiwicmVsb2FkZWQiLCJsb2NhbHMiLCJqb2luIiwicGF0aENvbXBvbmVudHMiLCJyZWR1Y2UiLCJhY2N1bXVsYXRvciIsIml0ZW0iLCJwb3AiLCJwdXNoIiwidXJsU3RyaW5nIiwidHJpbSIsInByb3RvY29sIiwiY29tcG9uZW50cyIsImhvc3QiLCJ0b0xvd2VyQ2FzZSIsInBhdGgiXSwic291cmNlUm9vdCI6IiJ9