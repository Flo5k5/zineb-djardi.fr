/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@barba/core/dist/barba.umd.js":
/*!****************************************************!*\
  !*** ./node_modules/@barba/core/dist/barba.umd.js ***!
  \****************************************************/
/***/ (function(module) {

    !function (t, n) {
        true ? module.exports = n() : 0;
     }(this, function () {
       function t(t, n) {
         for (var r = 0; r < n.length; r++) {
           var e = n[r];
           e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(t, e.key, e);
         }
       }
     
       function n(n, r, e) {
         return r && t(n.prototype, r), e && t(n, e), n;
       }
     
       function r() {
         return (r = Object.assign || function (t) {
           for (var n = 1; n < arguments.length; n++) {
             var r = arguments[n];
     
             for (var e in r) Object.prototype.hasOwnProperty.call(r, e) && (t[e] = r[e]);
           }
     
           return t;
         }).apply(this, arguments);
       }
     
       function e(t, n) {
         t.prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
       }
     
       function i(t) {
         return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
           return t.__proto__ || Object.getPrototypeOf(t);
         })(t);
       }
     
       function o(t, n) {
         return (o = Object.setPrototypeOf || function (t, n) {
           return t.__proto__ = n, t;
         })(t, n);
       }
     
       function u(t, n, r) {
         return (u = function () {
           if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
           if (Reflect.construct.sham) return !1;
           if ("function" == typeof Proxy) return !0;
     
           try {
             return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
           } catch (t) {
             return !1;
           }
         }() ? Reflect.construct : function (t, n, r) {
           var e = [null];
           e.push.apply(e, n);
           var i = new (Function.bind.apply(t, e))();
           return r && o(i, r.prototype), i;
         }).apply(null, arguments);
       }
     
       function f(t) {
         var n = "function" == typeof Map ? new Map() : void 0;
         return (f = function (t) {
           if (null === t || -1 === Function.toString.call(t).indexOf("[native code]")) return t;
           if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
     
           if (void 0 !== n) {
             if (n.has(t)) return n.get(t);
             n.set(t, r);
           }
     
           function r() {
             return u(t, arguments, i(this).constructor);
           }
     
           return r.prototype = Object.create(t.prototype, {
             constructor: {
               value: r,
               enumerable: !1,
               writable: !0,
               configurable: !0
             }
           }), o(r, t);
         })(t);
       }
     
       function s(t, n) {
         try {
           var r = t();
         } catch (t) {
           return n(t);
         }
     
         return r && r.then ? r.then(void 0, n) : r;
       }
     
       "undefined" != typeof Symbol && (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))), "undefined" != typeof Symbol && (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));
     
       var c,
           a = "2.9.7",
           h = function () {};
     
       !function (t) {
         t[t.off = 0] = "off", t[t.error = 1] = "error", t[t.warning = 2] = "warning", t[t.info = 3] = "info", t[t.debug = 4] = "debug";
       }(c || (c = {}));
     
       var v = c.off,
           l = function () {
         function t(t) {
           this.t = t;
         }
     
         t.getLevel = function () {
           return v;
         }, t.setLevel = function (t) {
           return v = c[t];
         };
         var n = t.prototype;
         return n.error = function () {
           for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
     
           this.i(console.error, c.error, n);
         }, n.warn = function () {
           for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
     
           this.i(console.warn, c.warning, n);
         }, n.info = function () {
           for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
     
           this.i(console.info, c.info, n);
         }, n.debug = function () {
           for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
     
           this.i(console.log, c.debug, n);
         }, n.i = function (n, r, e) {
           r <= t.getLevel() && n.apply(console, ["[" + this.t + "] "].concat(e));
         }, t;
       }(),
           d = O,
           m = E,
           p = g,
           w = x,
           b = T,
           y = "/",
           P = new RegExp(["(\\\\.)", "(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"), "g");
     
       function g(t, n) {
         for (var r, e = [], i = 0, o = 0, u = "", f = n && n.delimiter || y, s = n && n.whitelist || void 0, c = !1; null !== (r = P.exec(t));) {
           var a = r[0],
               h = r[1],
               v = r.index;
           if (u += t.slice(o, v), o = v + a.length, h) u += h[1], c = !0;else {
             var l = "",
                 d = r[2],
                 m = r[3],
                 p = r[4],
                 w = r[5];
     
             if (!c && u.length) {
               var b = u.length - 1,
                   g = u[b];
               (!s || s.indexOf(g) > -1) && (l = g, u = u.slice(0, b));
             }
     
             u && (e.push(u), u = "", c = !1);
             var E = m || p,
                 x = l || f;
             e.push({
               name: d || i++,
               prefix: l,
               delimiter: x,
               optional: "?" === w || "*" === w,
               repeat: "+" === w || "*" === w,
               pattern: E ? A(E) : "[^" + k(x === f ? x : x + f) + "]+?"
             });
           }
         }
     
         return (u || o < t.length) && e.push(u + t.substr(o)), e;
       }
     
       function E(t, n) {
         return function (r, e) {
           var i = t.exec(r);
           if (!i) return !1;
     
           for (var o = i[0], u = i.index, f = {}, s = e && e.decode || decodeURIComponent, c = 1; c < i.length; c++) if (void 0 !== i[c]) {
             var a = n[c - 1];
             f[a.name] = a.repeat ? i[c].split(a.delimiter).map(function (t) {
               return s(t, a);
             }) : s(i[c], a);
           }
     
           return {
             path: o,
             index: u,
             params: f
           };
         };
       }
     
       function x(t, n) {
         for (var r = new Array(t.length), e = 0; e < t.length; e++) "object" == typeof t[e] && (r[e] = new RegExp("^(?:" + t[e].pattern + ")$", R(n)));
     
         return function (n, e) {
           for (var i = "", o = e && e.encode || encodeURIComponent, u = !e || !1 !== e.validate, f = 0; f < t.length; f++) {
             var s = t[f];
     
             if ("string" != typeof s) {
               var c,
                   a = n ? n[s.name] : void 0;
     
               if (Array.isArray(a)) {
                 if (!s.repeat) throw new TypeError('Expected "' + s.name + '" to not repeat, but got array');
     
                 if (0 === a.length) {
                   if (s.optional) continue;
                   throw new TypeError('Expected "' + s.name + '" to not be empty');
                 }
     
                 for (var h = 0; h < a.length; h++) {
                   if (c = o(a[h], s), u && !r[f].test(c)) throw new TypeError('Expected all "' + s.name + '" to match "' + s.pattern + '"');
                   i += (0 === h ? s.prefix : s.delimiter) + c;
                 }
               } else if ("string" != typeof a && "number" != typeof a && "boolean" != typeof a) {
                 if (!s.optional) throw new TypeError('Expected "' + s.name + '" to be ' + (s.repeat ? "an array" : "a string"));
               } else {
                 if (c = o(String(a), s), u && !r[f].test(c)) throw new TypeError('Expected "' + s.name + '" to match "' + s.pattern + '", but got "' + c + '"');
                 i += s.prefix + c;
               }
             } else i += s;
           }
     
           return i;
         };
       }
     
       function k(t) {
         return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
       }
     
       function A(t) {
         return t.replace(/([=!:$/()])/g, "\\$1");
       }
     
       function R(t) {
         return t && t.sensitive ? "" : "i";
       }
     
       function T(t, n, r) {
         for (var e = (r = r || {}).strict, i = !1 !== r.start, o = !1 !== r.end, u = r.delimiter || y, f = [].concat(r.endsWith || []).map(k).concat("$").join("|"), s = i ? "^" : "", c = 0; c < t.length; c++) {
           var a = t[c];
           if ("string" == typeof a) s += k(a);else {
             var h = a.repeat ? "(?:" + a.pattern + ")(?:" + k(a.delimiter) + "(?:" + a.pattern + "))*" : a.pattern;
             n && n.push(a), s += a.optional ? a.prefix ? "(?:" + k(a.prefix) + "(" + h + "))?" : "(" + h + ")?" : k(a.prefix) + "(" + h + ")";
           }
         }
     
         if (o) e || (s += "(?:" + k(u) + ")?"), s += "$" === f ? "$" : "(?=" + f + ")";else {
           var v = t[t.length - 1],
               l = "string" == typeof v ? v[v.length - 1] === u : void 0 === v;
           e || (s += "(?:" + k(u) + "(?=" + f + "))?"), l || (s += "(?=" + k(u) + "|" + f + ")");
         }
         return new RegExp(s, R(r));
       }
     
       function O(t, n, r) {
         return t instanceof RegExp ? function (t, n) {
           if (!n) return t;
           var r = t.source.match(/\((?!\?)/g);
           if (r) for (var e = 0; e < r.length; e++) n.push({
             name: e,
             prefix: null,
             delimiter: null,
             optional: !1,
             repeat: !1,
             pattern: null
           });
           return t;
         }(t, n) : Array.isArray(t) ? function (t, n, r) {
           for (var e = [], i = 0; i < t.length; i++) e.push(O(t[i], n, r).source);
     
           return new RegExp("(?:" + e.join("|") + ")", R(r));
         }(t, n, r) : function (t, n, r) {
           return T(g(t, r), n, r);
         }(t, n, r);
       }
     
       d.match = function (t, n) {
         var r = [];
         return E(O(t, r, n), r);
       }, d.regexpToFunction = m, d.parse = p, d.compile = function (t, n) {
         return x(g(t, n), n);
       }, d.tokensToFunction = w, d.tokensToRegExp = b;
     
       var S = {
         container: "container",
         history: "history",
         namespace: "namespace",
         prefix: "data-barba",
         prevent: "prevent",
         wrapper: "wrapper"
       },
           j = new (function () {
         function t() {
           this.o = S, this.u = new DOMParser();
         }
     
         var n = t.prototype;
         return n.toString = function (t) {
           return t.outerHTML;
         }, n.toDocument = function (t) {
           return this.u.parseFromString(t, "text/html");
         }, n.toElement = function (t) {
           var n = document.createElement("div");
           return n.innerHTML = t, n;
         }, n.getHtml = function (t) {
           return void 0 === t && (t = document), this.toString(t.documentElement);
         }, n.getWrapper = function (t) {
           return void 0 === t && (t = document), t.querySelector("[" + this.o.prefix + '="' + this.o.wrapper + '"]');
         }, n.getContainer = function (t) {
           return void 0 === t && (t = document), t.querySelector("[" + this.o.prefix + '="' + this.o.container + '"]');
         }, n.removeContainer = function (t) {
           document.body.contains(t) && t.parentNode.removeChild(t);
         }, n.addContainer = function (t, n) {
           var r = this.getContainer();
           r ? this.s(t, r) : n.appendChild(t);
         }, n.getNamespace = function (t) {
           void 0 === t && (t = document);
           var n = t.querySelector("[" + this.o.prefix + "-" + this.o.namespace + "]");
           return n ? n.getAttribute(this.o.prefix + "-" + this.o.namespace) : null;
         }, n.getHref = function (t) {
           if (t.tagName && "a" === t.tagName.toLowerCase()) {
             if ("string" == typeof t.href) return t.href;
             var n = t.getAttribute("href") || t.getAttribute("xlink:href");
             if (n) return this.resolveUrl(n.baseVal || n);
           }
     
           return null;
         }, n.resolveUrl = function () {
           for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
     
           var e = n.length;
           if (0 === e) throw new Error("resolveUrl requires at least one argument; got none.");
           var i = document.createElement("base");
           if (i.href = arguments[0], 1 === e) return i.href;
           var o = document.getElementsByTagName("head")[0];
           o.insertBefore(i, o.firstChild);
     
           for (var u, f = document.createElement("a"), s = 1; s < e; s++) f.href = arguments[s], i.href = u = f.href;
     
           return o.removeChild(i), u;
         }, n.s = function (t, n) {
           n.parentNode.insertBefore(t, n.nextSibling);
         }, t;
       }())(),
           M = new (function () {
         function t() {
           this.h = [], this.v = -1;
         }
     
         var e = t.prototype;
         return e.init = function (t, n) {
           this.l = "barba";
           var r = {
             ns: n,
             scroll: {
               x: window.scrollX,
               y: window.scrollY
             },
             url: t
           };
           this.h.push(r), this.v = 0;
           var e = {
             from: this.l,
             index: 0,
             states: [].concat(this.h)
           };
           window.history && window.history.replaceState(e, "", t);
         }, e.change = function (t, n, r) {
           if (r && r.state) {
             var e = r.state,
                 i = e.index;
             n = this.m(this.v - i), this.replace(e.states), this.v = i;
           } else this.add(t, n);
     
           return n;
         }, e.add = function (t, n) {
           var r = this.size,
               e = this.p(n),
               i = {
             ns: "tmp",
             scroll: {
               x: window.scrollX,
               y: window.scrollY
             },
             url: t
           };
           this.h.push(i), this.v = r;
           var o = {
             from: this.l,
             index: r,
             states: [].concat(this.h)
           };
     
           switch (e) {
             case "push":
               window.history && window.history.pushState(o, "", t);
               break;
     
             case "replace":
               window.history && window.history.replaceState(o, "", t);
           }
         }, e.update = function (t, n) {
           var e = n || this.v,
               i = r({}, this.get(e), {}, t);
           this.set(e, i);
         }, e.remove = function (t) {
           t ? this.h.splice(t, 1) : this.h.pop(), this.v--;
         }, e.clear = function () {
           this.h = [], this.v = -1;
         }, e.replace = function (t) {
           this.h = t;
         }, e.get = function (t) {
           return this.h[t];
         }, e.set = function (t, n) {
           return this.h[t] = n;
         }, e.p = function (t) {
           var n = "push",
               r = t,
               e = S.prefix + "-" + S.history;
           return r.hasAttribute && r.hasAttribute(e) && (n = r.getAttribute(e)), n;
         }, e.m = function (t) {
           return Math.abs(t) > 1 ? t > 0 ? "forward" : "back" : 0 === t ? "popstate" : t > 0 ? "back" : "forward";
         }, n(t, [{
           key: "current",
           get: function () {
             return this.h[this.v];
           }
         }, {
           key: "state",
           get: function () {
             return this.h[this.h.length - 1];
           }
         }, {
           key: "previous",
           get: function () {
             return this.v < 1 ? null : this.h[this.v - 1];
           }
         }, {
           key: "size",
           get: function () {
             return this.h.length;
           }
         }]), t;
       }())(),
           L = function (t, n) {
         try {
           var r = function () {
             if (!n.next.html) return Promise.resolve(t).then(function (t) {
               var r = n.next;
     
               if (t) {
                 var e = j.toElement(t);
                 r.namespace = j.getNamespace(e), r.container = j.getContainer(e), r.html = t, M.update({
                   ns: r.namespace
                 });
                 var i = j.toDocument(t);
                 document.title = i.title;
               }
             });
           }();
     
           return Promise.resolve(r && r.then ? r.then(function () {}) : void 0);
         } catch (t) {
           return Promise.reject(t);
         }
       },
           $ = d,
           _ = {
         __proto__: null,
         update: L,
         nextTick: function () {
           return new Promise(function (t) {
             window.requestAnimationFrame(t);
           });
         },
         pathToRegexp: $
       },
           q = function () {
         return window.location.origin;
       },
           B = function (t) {
         return void 0 === t && (t = window.location.href), U(t).port;
       },
           U = function (t) {
         var n,
             r = t.match(/:\d+/);
         if (null === r) /^http/.test(t) && (n = 80), /^https/.test(t) && (n = 443);else {
           var e = r[0].substring(1);
           n = parseInt(e, 10);
         }
         var i,
             o = t.replace(q(), ""),
             u = {},
             f = o.indexOf("#");
         f >= 0 && (i = o.slice(f + 1), o = o.slice(0, f));
         var s = o.indexOf("?");
         return s >= 0 && (u = D(o.slice(s + 1)), o = o.slice(0, s)), {
           hash: i,
           path: o,
           port: n,
           query: u
         };
       },
           D = function (t) {
         return t.split("&").reduce(function (t, n) {
           var r = n.split("=");
           return t[r[0]] = r[1], t;
         }, {});
       },
           F = function (t) {
         return void 0 === t && (t = window.location.href), t.replace(/(\/#.*|\/|#.*)$/, "");
       },
           H = {
         __proto__: null,
         getHref: function () {
           return window.location.href;
         },
         getOrigin: q,
         getPort: B,
         getPath: function (t) {
           return void 0 === t && (t = window.location.href), U(t).path;
         },
         parse: U,
         parseQuery: D,
         clean: F
       };
     
       function I(t, n, r) {
         return void 0 === n && (n = 2e3), new Promise(function (e, i) {
           var o = new XMLHttpRequest();
           o.onreadystatechange = function () {
             if (o.readyState === XMLHttpRequest.DONE) if (200 === o.status) e(o.responseText);else if (o.status) {
               var n = {
                 status: o.status,
                 statusText: o.statusText
               };
               r(t, n), i(n);
             }
           }, o.ontimeout = function () {
             var e = new Error("Timeout error [" + n + "]");
             r(t, e), i(e);
           }, o.onerror = function () {
             var n = new Error("Fetch error");
             r(t, n), i(n);
           }, o.open("GET", t), o.timeout = n, o.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml"), o.setRequestHeader("x-barba", "yes"), o.send();
         });
       }
     
       var C = function (t) {
         return !!t && ("object" == typeof t || "function" == typeof t) && "function" == typeof t.then;
       };
     
       function N(t, n) {
         return void 0 === n && (n = {}), function () {
           for (var r = arguments.length, e = new Array(r), i = 0; i < r; i++) e[i] = arguments[i];
     
           var o = !1,
               u = new Promise(function (r, i) {
             n.async = function () {
               return o = !0, function (t, n) {
                 t ? i(t) : r(n);
               };
             };
     
             var u = t.apply(n, e);
             o || (C(u) ? u.then(r, i) : r(u));
           });
           return u;
         };
       }
     
       var X = new (function (t) {
         function n() {
           var n;
           return (n = t.call(this) || this).logger = new l("@barba/core"), n.all = ["ready", "page", "reset", "currentAdded", "currentRemoved", "nextAdded", "nextRemoved", "beforeOnce", "once", "afterOnce", "before", "beforeLeave", "leave", "afterLeave", "beforeEnter", "enter", "afterEnter", "after"], n.registered = new Map(), n.init(), n;
         }
     
         e(n, t);
         var r = n.prototype;
         return r.init = function () {
           var t = this;
           this.registered.clear(), this.all.forEach(function (n) {
             t[n] || (t[n] = function (r, e) {
               t.registered.has(n) || t.registered.set(n, new Set()), t.registered.get(n).add({
                 ctx: e || {},
                 fn: r
               });
             });
           });
         }, r.do = function (t) {
           for (var n = this, r = arguments.length, e = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) e[i - 1] = arguments[i];
     
           if (this.registered.has(t)) {
             var o = Promise.resolve();
             return this.registered.get(t).forEach(function (t) {
               o = o.then(function () {
                 return N(t.fn, t.ctx).apply(void 0, e);
               });
             }), o.catch(function (r) {
               n.logger.debug("Hook error [" + t + "]"), n.logger.error(r);
             });
           }
     
           return Promise.resolve();
         }, r.clear = function () {
           var t = this;
           this.all.forEach(function (n) {
             delete t[n];
           }), this.init();
         }, r.help = function () {
           this.logger.info("Available hooks: " + this.all.join(","));
           var t = [];
           this.registered.forEach(function (n, r) {
             return t.push(r);
           }), this.logger.info("Registered hooks: " + t.join(","));
         }, n;
       }(h))(),
           z = function () {
         function t(t) {
           if (this.P = [], "boolean" == typeof t) this.g = t;else {
             var n = Array.isArray(t) ? t : [t];
             this.P = n.map(function (t) {
               return $(t);
             });
           }
         }
     
         return t.prototype.checkHref = function (t) {
           if ("boolean" == typeof this.g) return this.g;
           var n = U(t).path;
           return this.P.some(function (t) {
             return null !== t.exec(n);
           });
         }, t;
       }(),
           G = function (t) {
         function n(n) {
           var r;
           return (r = t.call(this, n) || this).k = new Map(), r;
         }
     
         e(n, t);
         var i = n.prototype;
         return i.set = function (t, n, r) {
           return this.k.set(t, {
             action: r,
             request: n
           }), {
             action: r,
             request: n
           };
         }, i.get = function (t) {
           return this.k.get(t);
         }, i.getRequest = function (t) {
           return this.k.get(t).request;
         }, i.getAction = function (t) {
           return this.k.get(t).action;
         }, i.has = function (t) {
           return !this.checkHref(t) && this.k.has(t);
         }, i.delete = function (t) {
           return this.k.delete(t);
         }, i.update = function (t, n) {
           var e = r({}, this.k.get(t), {}, n);
           return this.k.set(t, e), e;
         }, n;
       }(z),
           Q = function () {
         return !window.history.pushState;
       },
           W = function (t) {
         return !t.el || !t.href;
       },
           J = function (t) {
         var n = t.event;
         return n.which > 1 || n.metaKey || n.ctrlKey || n.shiftKey || n.altKey;
       },
           K = function (t) {
         var n = t.el;
         return n.hasAttribute("target") && "_blank" === n.target;
       },
           V = function (t) {
         var n = t.el;
         return void 0 !== n.protocol && window.location.protocol !== n.protocol || void 0 !== n.hostname && window.location.hostname !== n.hostname;
       },
           Y = function (t) {
         var n = t.el;
         return void 0 !== n.port && B() !== B(n.href);
       },
           Z = function (t) {
         var n = t.el;
         return n.getAttribute && "string" == typeof n.getAttribute("download");
       },
           tt = function (t) {
         return t.el.hasAttribute(S.prefix + "-" + S.prevent);
       },
           nt = function (t) {
         return Boolean(t.el.closest("[" + S.prefix + "-" + S.prevent + '="all"]'));
       },
           rt = function (t) {
         var n = t.href;
         return F(n) === F() && B(n) === B();
       },
           et = function (t) {
         function n(n) {
           var r;
           return (r = t.call(this, n) || this).suite = [], r.tests = new Map(), r.init(), r;
         }
     
         e(n, t);
         var r = n.prototype;
         return r.init = function () {
           this.add("pushState", Q), this.add("exists", W), this.add("newTab", J), this.add("blank", K), this.add("corsDomain", V), this.add("corsPort", Y), this.add("download", Z), this.add("preventSelf", tt), this.add("preventAll", nt), this.add("sameUrl", rt, !1);
         }, r.add = function (t, n, r) {
           void 0 === r && (r = !0), this.tests.set(t, n), r && this.suite.push(t);
         }, r.run = function (t, n, r, e) {
           return this.tests.get(t)({
             el: n,
             event: r,
             href: e
           });
         }, r.checkLink = function (t, n, r) {
           var e = this;
           return this.suite.some(function (i) {
             return e.run(i, t, n, r);
           });
         }, n;
       }(z),
           it = function (t) {
         function n(r, e) {
           var i;
           void 0 === e && (e = "Barba error");
     
           for (var o = arguments.length, u = new Array(o > 2 ? o - 2 : 0), f = 2; f < o; f++) u[f - 2] = arguments[f];
     
           return (i = t.call.apply(t, [this].concat(u)) || this).error = r, i.label = e, Error.captureStackTrace && Error.captureStackTrace(function (t) {
             if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
             return t;
           }(i), n), i.name = "BarbaError", i;
         }
     
         return e(n, t), n;
       }(f(Error)),
           ot = function () {
         function t(t) {
           void 0 === t && (t = []), this.logger = new l("@barba/core"), this.all = [], this.page = [], this.once = [], this.A = [{
             name: "namespace",
             type: "strings"
           }, {
             name: "custom",
             type: "function"
           }], t && (this.all = this.all.concat(t)), this.update();
         }
     
         var n = t.prototype;
         return n.add = function (t, n) {
           switch (t) {
             case "rule":
               this.A.splice(n.position || 0, 0, n.value);
               break;
     
             case "transition":
             default:
               this.all.push(n);
           }
     
           this.update();
         }, n.resolve = function (t, n) {
           var r = this;
           void 0 === n && (n = {});
           var e = n.once ? this.once : this.page;
           e = e.filter(n.self ? function (t) {
             return t.name && "self" === t.name;
           } : function (t) {
             return !t.name || "self" !== t.name;
           });
           var i = new Map(),
               o = e.find(function (e) {
             var o = !0,
                 u = {};
             return !(!n.self || "self" !== e.name) || (r.A.reverse().forEach(function (n) {
               o && (o = r.R(e, n, t, u), e.from && e.to && (o = r.R(e, n, t, u, "from") && r.R(e, n, t, u, "to")), e.from && !e.to && (o = r.R(e, n, t, u, "from")), !e.from && e.to && (o = r.R(e, n, t, u, "to")));
             }), i.set(e, u), o);
           }),
               u = i.get(o),
               f = [];
     
           if (f.push(n.once ? "once" : "page"), n.self && f.push("self"), u) {
             var s,
                 c = [o];
             Object.keys(u).length > 0 && c.push(u), (s = this.logger).info.apply(s, ["Transition found [" + f.join(",") + "]"].concat(c));
           } else this.logger.info("No transition found [" + f.join(",") + "]");
     
           return o;
         }, n.update = function () {
           var t = this;
           this.all = this.all.map(function (n) {
             return t.T(n);
           }).sort(function (t, n) {
             return t.priority - n.priority;
           }).reverse().map(function (t) {
             return delete t.priority, t;
           }), this.page = this.all.filter(function (t) {
             return void 0 !== t.leave || void 0 !== t.enter;
           }), this.once = this.all.filter(function (t) {
             return void 0 !== t.once;
           });
         }, n.R = function (t, n, r, e, i) {
           var o = !0,
               u = !1,
               f = t,
               s = n.name,
               c = s,
               a = s,
               h = s,
               v = i ? f[i] : f,
               l = "to" === i ? r.next : r.current;
     
           if (i ? v && v[s] : v[s]) {
             switch (n.type) {
               case "strings":
               default:
                 var d = Array.isArray(v[c]) ? v[c] : [v[c]];
                 l[c] && -1 !== d.indexOf(l[c]) && (u = !0), -1 === d.indexOf(l[c]) && (o = !1);
                 break;
     
               case "object":
                 var m = Array.isArray(v[a]) ? v[a] : [v[a]];
                 l[a] ? (l[a].name && -1 !== m.indexOf(l[a].name) && (u = !0), -1 === m.indexOf(l[a].name) && (o = !1)) : o = !1;
                 break;
     
               case "function":
                 v[h](r) ? u = !0 : o = !1;
             }
     
             u && (i ? (e[i] = e[i] || {}, e[i][s] = f[i][s]) : e[s] = f[s]);
           }
     
           return o;
         }, n.O = function (t, n, r) {
           var e = 0;
           return (t[n] || t.from && t.from[n] || t.to && t.to[n]) && (e += Math.pow(10, r), t.from && t.from[n] && (e += 1), t.to && t.to[n] && (e += 2)), e;
         }, n.T = function (t) {
           var n = this;
           t.priority = 0;
           var r = 0;
           return this.A.forEach(function (e, i) {
             r += n.O(t, e.name, i + 1);
           }), t.priority = r, t;
         }, t;
       }(),
           ut = function () {
         function t(t) {
           void 0 === t && (t = []), this.logger = new l("@barba/core"), this.S = !1, this.store = new ot(t);
         }
     
         var r = t.prototype;
         return r.get = function (t, n) {
           return this.store.resolve(t, n);
         }, r.doOnce = function (t) {
           var n = t.data,
               r = t.transition;
     
           try {
             var e = function () {
               i.S = !1;
             },
                 i = this,
                 o = r || {};
     
             i.S = !0;
             var u = s(function () {
               return Promise.resolve(i.j("beforeOnce", n, o)).then(function () {
                 return Promise.resolve(i.once(n, o)).then(function () {
                   return Promise.resolve(i.j("afterOnce", n, o)).then(function () {});
                 });
               });
             }, function (t) {
               i.S = !1, i.logger.debug("Transition error [before/after/once]"), i.logger.error(t);
             });
             return Promise.resolve(u && u.then ? u.then(e) : e());
           } catch (t) {
             return Promise.reject(t);
           }
         }, r.doPage = function (t) {
           var n = t.data,
               r = t.transition,
               e = t.page,
               i = t.wrapper;
     
           try {
             var o = function (t) {
               if (u) return t;
               f.S = !1;
             },
                 u = !1,
                 f = this,
                 c = r || {},
                 a = !0 === c.sync || !1;
     
             f.S = !0;
             var h = s(function () {
               function t() {
                 return Promise.resolve(f.j("before", n, c)).then(function () {
                   var t = !1;
     
                   function r(r) {
                     return t ? r : Promise.resolve(f.remove(n)).then(function () {
                       return Promise.resolve(f.j("after", n, c)).then(function () {});
                     });
                   }
     
                   var o = function () {
                     if (a) return s(function () {
                       return Promise.resolve(f.add(n, i)).then(function () {
                         return Promise.resolve(f.j("beforeLeave", n, c)).then(function () {
                           return Promise.resolve(f.j("beforeEnter", n, c)).then(function () {
                             return Promise.resolve(Promise.all([f.leave(n, c), f.enter(n, c)])).then(function () {
                               return Promise.resolve(f.j("afterLeave", n, c)).then(function () {
                                 return Promise.resolve(f.j("afterEnter", n, c)).then(function () {});
                               });
                             });
                           });
                         });
                       });
                     }, function (t) {
                       if (f.M(t)) throw new it(t, "Transition error [sync]");
                     });
     
                     var r = function (r) {
                       return t ? r : s(function () {
                         var t = function () {
                           if (!1 !== o) return Promise.resolve(f.add(n, i)).then(function () {
                             return Promise.resolve(f.j("beforeEnter", n, c)).then(function () {
                               return Promise.resolve(f.enter(n, c, o)).then(function () {
                                 return Promise.resolve(f.j("afterEnter", n, c)).then(function () {});
                               });
                             });
                           });
                         }();
     
                         if (t && t.then) return t.then(function () {});
                       }, function (t) {
                         if (f.M(t)) throw new it(t, "Transition error [before/after/enter]");
                       });
                     },
                         o = !1,
                         u = s(function () {
                       return Promise.resolve(f.j("beforeLeave", n, c)).then(function () {
                         return Promise.resolve(Promise.all([f.leave(n, c), L(e, n)]).then(function (t) {
                           return t[0];
                         })).then(function (t) {
                           return o = t, Promise.resolve(f.j("afterLeave", n, c)).then(function () {});
                         });
                       });
                     }, function (t) {
                       if (f.M(t)) throw new it(t, "Transition error [before/after/leave]");
                     });
     
                     return u && u.then ? u.then(r) : r(u);
                   }();
     
                   return o && o.then ? o.then(r) : r(o);
                 });
               }
     
               var r = function () {
                 if (a) return Promise.resolve(L(e, n)).then(function () {});
               }();
     
               return r && r.then ? r.then(t) : t();
             }, function (t) {
               if (f.S = !1, t.name && "BarbaError" === t.name) throw f.logger.debug(t.label), f.logger.error(t.error), t;
               throw f.logger.debug("Transition error [page]"), f.logger.error(t), t;
             });
             return Promise.resolve(h && h.then ? h.then(o) : o(h));
           } catch (t) {
             return Promise.reject(t);
           }
         }, r.once = function (t, n) {
           try {
             return Promise.resolve(X.do("once", t, n)).then(function () {
               return n.once ? N(n.once, n)(t) : Promise.resolve();
             });
           } catch (t) {
             return Promise.reject(t);
           }
         }, r.leave = function (t, n) {
           try {
             return Promise.resolve(X.do("leave", t, n)).then(function () {
               return n.leave ? N(n.leave, n)(t) : Promise.resolve();
             });
           } catch (t) {
             return Promise.reject(t);
           }
         }, r.enter = function (t, n, r) {
           try {
             return Promise.resolve(X.do("enter", t, n)).then(function () {
               return n.enter ? N(n.enter, n)(t, r) : Promise.resolve();
             });
           } catch (t) {
             return Promise.reject(t);
           }
         }, r.add = function (t, n) {
           try {
             return j.addContainer(t.next.container, n), X.do("nextAdded", t), Promise.resolve();
           } catch (t) {
             return Promise.reject(t);
           }
         }, r.remove = function (t) {
           try {
             return j.removeContainer(t.current.container), X.do("currentRemoved", t), Promise.resolve();
           } catch (t) {
             return Promise.reject(t);
           }
         }, r.M = function (t) {
           return t.message ? !/Timeout error|Fetch error/.test(t.message) : !t.status;
         }, r.j = function (t, n, r) {
           try {
             return Promise.resolve(X.do(t, n, r)).then(function () {
               return r[t] ? N(r[t], r)(n) : Promise.resolve();
             });
           } catch (t) {
             return Promise.reject(t);
           }
         }, n(t, [{
           key: "isRunning",
           get: function () {
             return this.S;
           },
           set: function (t) {
             this.S = t;
           }
         }, {
           key: "hasOnce",
           get: function () {
             return this.store.once.length > 0;
           }
         }, {
           key: "hasSelf",
           get: function () {
             return this.store.all.some(function (t) {
               return "self" === t.name;
             });
           }
         }, {
           key: "shouldWait",
           get: function () {
             return this.store.all.some(function (t) {
               return t.to && !t.to.route || t.sync;
             });
           }
         }]), t;
       }(),
           ft = function () {
         function t(t) {
           var n = this;
           this.names = ["beforeLeave", "afterLeave", "beforeEnter", "afterEnter"], this.byNamespace = new Map(), 0 !== t.length && (t.forEach(function (t) {
             n.byNamespace.set(t.namespace, t);
           }), this.names.forEach(function (t) {
             X[t](n.L(t));
           }));
         }
     
         return t.prototype.L = function (t) {
           var n = this;
           return function (r) {
             var e = t.match(/enter/i) ? r.next : r.current,
                 i = n.byNamespace.get(e.namespace);
             return i && i[t] ? N(i[t], i)(r) : Promise.resolve();
           };
         }, t;
       }();
     
       Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function (t) {
         var n = this;
     
         do {
           if (n.matches(t)) return n;
           n = n.parentElement || n.parentNode;
         } while (null !== n && 1 === n.nodeType);
     
         return null;
       });
       var st = {
         container: null,
         html: "",
         namespace: "",
         url: {
           hash: "",
           href: "",
           path: "",
           port: null,
           query: {}
         }
       };
       return new (function () {
         function t() {
           this.version = a, this.schemaPage = st, this.Logger = l, this.logger = new l("@barba/core"), this.plugins = [], this.hooks = X, this.dom = j, this.helpers = _, this.history = M, this.request = I, this.url = H;
         }
     
         var e = t.prototype;
         return e.use = function (t, n) {
           var r = this.plugins;
           r.indexOf(t) > -1 ? this.logger.warn("Plugin [" + t.name + "] already installed.") : "function" == typeof t.install ? (t.install(this, n), r.push(t)) : this.logger.warn("Plugin [" + t.name + '] has no "install" method.');
         }, e.init = function (t) {
           var n = void 0 === t ? {} : t,
               e = n.transitions,
               i = void 0 === e ? [] : e,
               o = n.views,
               u = void 0 === o ? [] : o,
               f = n.schema,
               s = void 0 === f ? S : f,
               c = n.requestError,
               a = n.timeout,
               h = void 0 === a ? 2e3 : a,
               v = n.cacheIgnore,
               d = void 0 !== v && v,
               m = n.prefetchIgnore,
               p = void 0 !== m && m,
               w = n.preventRunning,
               b = void 0 !== w && w,
               y = n.prevent,
               P = void 0 === y ? null : y,
               g = n.debug,
               E = n.logLevel;
           if (l.setLevel(!0 === (void 0 !== g && g) ? "debug" : void 0 === E ? "off" : E), this.logger.info(this.version), Object.keys(s).forEach(function (t) {
             S[t] && (S[t] = s[t]);
           }), this.$ = c, this.timeout = h, this.cacheIgnore = d, this.prefetchIgnore = p, this.preventRunning = b, this._ = this.dom.getWrapper(), !this._) throw new Error("[@barba/core] No Barba wrapper found");
           this._.setAttribute("aria-live", "polite"), this.q();
           var x = this.data.current;
           if (!x.container) throw new Error("[@barba/core] No Barba container found");
     
           if (this.cache = new G(d), this.prevent = new et(p), this.transitions = new ut(i), this.views = new ft(u), null !== P) {
             if ("function" != typeof P) throw new Error("[@barba/core] Prevent should be a function");
             this.prevent.add("preventCustom", P);
           }
     
           this.history.init(x.url.href, x.namespace), this.B = this.B.bind(this), this.U = this.U.bind(this), this.D = this.D.bind(this), this.F(), this.plugins.forEach(function (t) {
             return t.init();
           });
           var k = this.data;
           k.trigger = "barba", k.next = k.current, k.current = r({}, this.schemaPage), this.hooks.do("ready", k), this.once(k), this.q();
         }, e.destroy = function () {
           this.q(), this.H(), this.history.clear(), this.hooks.clear(), this.plugins = [];
         }, e.force = function (t) {
           window.location.assign(t);
         }, e.go = function (t, n, r) {
           var e;
           if (void 0 === n && (n = "barba"), this.transitions.isRunning) this.force(t);else if (!(e = "popstate" === n ? this.history.current && this.url.getPath(this.history.current.url) === this.url.getPath(t) : this.prevent.run("sameUrl", null, null, t)) || this.transitions.hasSelf) return n = this.history.change(t, n, r), r && (r.stopPropagation(), r.preventDefault()), this.page(t, n, e);
         }, e.once = function (t) {
           try {
             var n = this;
             return Promise.resolve(n.hooks.do("beforeEnter", t)).then(function () {
               function r() {
                 return Promise.resolve(n.hooks.do("afterEnter", t)).then(function () {});
               }
     
               var e = function () {
                 if (n.transitions.hasOnce) {
                   var r = n.transitions.get(t, {
                     once: !0
                   });
                   return Promise.resolve(n.transitions.doOnce({
                     transition: r,
                     data: t
                   })).then(function () {});
                 }
               }();
     
               return e && e.then ? e.then(r) : r();
             });
           } catch (t) {
             return Promise.reject(t);
           }
         }, e.page = function (t, n, e) {
           try {
             var i = function () {
               var t = o.data;
               return Promise.resolve(o.hooks.do("page", t)).then(function () {
                 var n = s(function () {
                   var n = o.transitions.get(t, {
                     once: !1,
                     self: e
                   });
                   return Promise.resolve(o.transitions.doPage({
                     data: t,
                     page: u,
                     transition: n,
                     wrapper: o._
                   })).then(function () {
                     o.q();
                   });
                 }, function () {
                   0 === l.getLevel() && o.force(t.current.url.href);
                 });
                 if (n && n.then) return n.then(function () {});
               });
             },
                 o = this;
     
             o.data.next.url = r({
               href: t
             }, o.url.parse(t)), o.data.trigger = n;
     
             var u = o.cache.has(t) ? o.cache.update(t, {
               action: "click"
             }).request : o.cache.set(t, o.request(t, o.timeout, o.onRequestError.bind(o, n)), "click").request,
                 f = function () {
               if (o.transitions.shouldWait) return Promise.resolve(L(u, o.data)).then(function () {});
             }();
     
             return Promise.resolve(f && f.then ? f.then(i) : i());
           } catch (t) {
             return Promise.reject(t);
           }
         }, e.onRequestError = function (t) {
           this.transitions.isRunning = !1;
     
           for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), e = 1; e < n; e++) r[e - 1] = arguments[e];
     
           var i = r[0],
               o = r[1],
               u = this.cache.getAction(i);
           return this.cache.delete(i), !(this.$ && !1 === this.$(t, u, i, o) || ("click" === u && this.force(i), 1));
         }, e.prefetch = function (t) {
           var n = this;
           this.cache.has(t) || this.cache.set(t, this.request(t, this.timeout, this.onRequestError.bind(this, "barba")).catch(function (t) {
             n.logger.error(t);
           }), "prefetch");
         }, e.F = function () {
           !0 !== this.prefetchIgnore && (document.addEventListener("mouseover", this.B), document.addEventListener("touchstart", this.B)), document.addEventListener("click", this.U), window.addEventListener("popstate", this.D);
         }, e.H = function () {
           !0 !== this.prefetchIgnore && (document.removeEventListener("mouseover", this.B), document.removeEventListener("touchstart", this.B)), document.removeEventListener("click", this.U), window.removeEventListener("popstate", this.D);
         }, e.B = function (t) {
           var n = this,
               r = this.I(t);
     
           if (r) {
             var e = this.dom.getHref(r);
             this.prevent.checkHref(e) || this.cache.has(e) || this.cache.set(e, this.request(e, this.timeout, this.onRequestError.bind(this, r)).catch(function (t) {
               n.logger.error(t);
             }), "enter");
           }
         }, e.U = function (t) {
           var n = this.I(t);
           if (n) return this.transitions.isRunning && this.preventRunning ? (t.preventDefault(), void t.stopPropagation()) : void this.go(this.dom.getHref(n), n, t);
         }, e.D = function (t) {
           this.go(this.url.getHref(), "popstate", t);
         }, e.I = function (t) {
           for (var n = t.target; n && !this.dom.getHref(n);) n = n.parentNode;
     
           if (n && !this.prevent.checkLink(n, t, this.dom.getHref(n))) return n;
         }, e.q = function () {
           var t = this.url.getHref(),
               n = {
             container: this.dom.getContainer(),
             html: this.dom.getHtml(),
             namespace: this.dom.getNamespace(),
             url: r({
               href: t
             }, this.url.parse(t))
           };
           this.C = {
             current: n,
             next: r({}, this.schemaPage),
             trigger: void 0
           }, this.hooks.do("reset", this.data);
         }, n(t, [{
           key: "data",
           get: function () {
             return this.C;
           }
         }, {
           key: "wrapper",
           get: function () {
             return this._;
           }
         }]), t;
       }())();
     });
     
     /***/ }),
     
     /***/ "./node_modules/@maeertin/medialoaded/index.js":
     /*!*****************************************************!*\
       !*** ./node_modules/@maeertin/medialoaded/index.js ***!
       \*****************************************************/
     /***/ (function(module, exports) {
     
     var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;;
     
     (function (window, factory) {
       if (true) {
         // AMD. Register as an anonymous module.
         !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
           return factory(window);
         }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
             __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
       } else {}
     })(typeof window !== 'undefined' ? window : this, function factory(window) {
       function makeArray(value) {
         if (Array.isArray(value)) {
           return value;
         }
     
         var isArrayLike = typeof value === 'object' && typeof value.length === 'number';
     
         if (isArrayLike) {
           return Array.prototype.slice.call(value);
         }
     
         return [value];
       }
     
       function mediaLoaded(el, onComplete) {
         var elements = el;
     
         if (typeof el === 'string') {
           elements = document.querySelectorAll(el);
         }
     
         if (!elements) {
           console.error('mediaLoaded: Invalid element', el);
           return;
         }
     
         elements = makeArray(elements);
         var images = [];
         var videos = [];
         var posters = []; // Find all videos & images
     
         elements.forEach(function (element) {
           if (element.tagName === 'IMG') {
             images.unshift(element);
           } else if (element.tagName === 'VIDEO') {
             videos.unshift(element);
           } else {
             images = images.concat(makeArray(element.getElementsByTagName('img')));
             videos = videos.concat(makeArray(element.getElementsByTagName('video')));
           }
         }); // Find all posters
     
         videos.forEach(function (video) {
           if (video.poster) {
             var poster = new Image();
             poster.src = video.poster;
             posters.push(poster);
           }
         }); // With all posters found, filter out non autoplay videos for touch devices
         // as video events won't trigger until user interaction.
     
         var isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
     
         if (isTouch) {
           videos = videos.filter(function (video) {
             return video.autoplay;
           });
         }
     
         var total = images.length + videos.length + posters.length;
         var hasBroken = false;
         var count = 0;
     
         function complete() {
           if (onComplete) {
             onComplete({
               images: images,
               videos: videos,
               posters: posters,
               hasBroken: hasBroken,
               total: total
             });
           }
         }
     
         function handleMediaLoaded(event) {
           if (event) {
             event.target.removeEventListener(event.type, handleMediaLoaded);
     
             if (event.type === 'error') {
               hasBroken = true;
             }
           }
     
           count += 1;
     
           if (total === count) {
             complete();
           }
         } // Complete if no media found.
     
     
         if (total === 0) {
           complete();
           return;
         }
     
         images.concat(posters).forEach(function (image) {
           // Check for non-zero, non-undefined naturalWidth
           if (!image.complete || !image.naturalWidth) {
             image.addEventListener('load', handleMediaLoaded);
             image.addEventListener('error', handleMediaLoaded);
           } else {
             handleMediaLoaded();
           }
         });
         videos.forEach(function (video) {
           if (video.readyState < 2) {
             video.addEventListener('loadeddata', handleMediaLoaded);
             video.addEventListener('error', handleMediaLoaded);
           } else {
             handleMediaLoaded();
           }
         });
       }
     
       return mediaLoaded;
     });
     
     /***/ }),
     
     /***/ "./node_modules/ansi-html-community/index.js":
     /*!***************************************************!*\
       !*** ./node_modules/ansi-html-community/index.js ***!
       \***************************************************/
     /***/ ((module) => {
     
     "use strict";
     
     
     module.exports = ansiHTML; // Reference to https://github.com/sindresorhus/ansi-regex
     
     var _regANSI = /(?:(?:\u001b\[)|\u009b)(?:(?:[0-9]{1,3})?(?:(?:;[0-9]{0,3})*)?[A-M|f-m])|\u001b[A-M]/;
     var _defColors = {
       reset: ['fff', '000'],
       // [FOREGROUD_COLOR, BACKGROUND_COLOR]
       black: '000',
       red: 'ff0000',
       green: '209805',
       yellow: 'e8bf03',
       blue: '0000ff',
       magenta: 'ff00ff',
       cyan: '00ffee',
       lightgrey: 'f0f0f0',
       darkgrey: '888'
     };
     var _styles = {
       30: 'black',
       31: 'red',
       32: 'green',
       33: 'yellow',
       34: 'blue',
       35: 'magenta',
       36: 'cyan',
       37: 'lightgrey'
     };
     var _openTags = {
       '1': 'font-weight:bold',
       // bold
       '2': 'opacity:0.5',
       // dim
       '3': '<i>',
       // italic
       '4': '<u>',
       // underscore
       '8': 'display:none',
       // hidden
       '9': '<del>' // delete
     
     };
     var _closeTags = {
       '23': '</i>',
       // reset italic
       '24': '</u>',
       // reset underscore
       '29': '</del>' // reset delete
     
     };
     [0, 21, 22, 27, 28, 39, 49].forEach(function (n) {
       _closeTags[n] = '</span>';
     });
     /**
      * Converts text with ANSI color codes to HTML markup.
      * @param {String} text
      * @returns {*}
      */
     
     function ansiHTML(text) {
       // Returns the text if the string has no ANSI escape code.
       if (!_regANSI.test(text)) {
         return text;
       } // Cache opened sequence.
     
     
       var ansiCodes = []; // Replace with markup.
     
       var ret = text.replace(/\033\[(\d+)m/g, function (match, seq) {
         var ot = _openTags[seq];
     
         if (ot) {
           // If current sequence has been opened, close it.
           if (!!~ansiCodes.indexOf(seq)) {
             // eslint-disable-line no-extra-boolean-cast
             ansiCodes.pop();
             return '</span>';
           } // Open tag.
     
     
           ansiCodes.push(seq);
           return ot[0] === '<' ? ot : '<span style="' + ot + ';">';
         }
     
         var ct = _closeTags[seq];
     
         if (ct) {
           // Pop sequence
           ansiCodes.pop();
           return ct;
         }
     
         return '';
       }); // Make sure tags are closed.
     
       var l = ansiCodes.length;
       l > 0 && (ret += Array(l + 1).join('</span>'));
       return ret;
     }
     /**
      * Customize colors.
      * @param {Object} colors reference to _defColors
      */
     
     
     ansiHTML.setColors = function (colors) {
       if (typeof colors !== 'object') {
         throw new Error('`colors` parameter must be an Object.');
       }
     
       var _finalColors = {};
     
       for (var key in _defColors) {
         var hex = colors.hasOwnProperty(key) ? colors[key] : null;
     
         if (!hex) {
           _finalColors[key] = _defColors[key];
           continue;
         }
     
         if ('reset' === key) {
           if (typeof hex === 'string') {
             hex = [hex];
           }
     
           if (!Array.isArray(hex) || hex.length === 0 || hex.some(function (h) {
             return typeof h !== 'string';
           })) {
             throw new Error('The value of `' + key + '` property must be an Array and each item could only be a hex string, e.g.: FF0000');
           }
     
           var defHexColor = _defColors[key];
     
           if (!hex[0]) {
             hex[0] = defHexColor[0];
           }
     
           if (hex.length === 1 || !hex[1]) {
             hex = [hex[0]];
             hex.push(defHexColor[1]);
           }
     
           hex = hex.slice(0, 2);
         } else if (typeof hex !== 'string') {
           throw new Error('The value of `' + key + '` property must be a hex string, e.g.: FF0000');
         }
     
         _finalColors[key] = hex;
       }
     
       _setTags(_finalColors);
     };
     /**
      * Reset colors.
      */
     
     
     ansiHTML.reset = function () {
       _setTags(_defColors);
     };
     /**
      * Expose tags, including open and close.
      * @type {Object}
      */
     
     
     ansiHTML.tags = {};
     
     if (Object.defineProperty) {
       Object.defineProperty(ansiHTML.tags, 'open', {
         get: function () {
           return _openTags;
         }
       });
       Object.defineProperty(ansiHTML.tags, 'close', {
         get: function () {
           return _closeTags;
         }
       });
     } else {
       ansiHTML.tags.open = _openTags;
       ansiHTML.tags.close = _closeTags;
     }
     
     function _setTags(colors) {
       // reset all
       _openTags['0'] = 'font-weight:normal;opacity:1;color:#' + colors.reset[0] + ';background:#' + colors.reset[1]; // inverse
     
       _openTags['7'] = 'color:#' + colors.reset[1] + ';background:#' + colors.reset[0]; // dark grey
     
       _openTags['90'] = 'color:#' + colors.darkgrey;
     
       for (var code in _styles) {
         var color = _styles[code];
         var oriColor = colors[color] || '000';
         _openTags[code] = 'color:#' + oriColor;
         code = parseInt(code);
         _openTags[(code + 10).toString()] = 'background:#' + oriColor;
       }
     }
     
     ansiHTML.reset();
     
     /***/ }),
     
     /***/ "./node_modules/events/events.js":
     /*!***************************************!*\
       !*** ./node_modules/events/events.js ***!
       \***************************************/
     /***/ ((module) => {
     
     "use strict";
     // Copyright Joyent, Inc. and other Node contributors.
     //
     // Permission is hereby granted, free of charge, to any person obtaining a
     // copy of this software and associated documentation files (the
     // "Software"), to deal in the Software without restriction, including
     // without limitation the rights to use, copy, modify, merge, publish,
     // distribute, sublicense, and/or sell copies of the Software, and to permit
     // persons to whom the Software is furnished to do so, subject to the
     // following conditions:
     //
     // The above copyright notice and this permission notice shall be included
     // in all copies or substantial portions of the Software.
     //
     // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
     // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
     // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
     // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
     // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
     // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
     // USE OR OTHER DEALINGS IN THE SOFTWARE.
     
     
     var R = typeof Reflect === 'object' ? Reflect : null;
     var ReflectApply = R && typeof R.apply === 'function' ? R.apply : function ReflectApply(target, receiver, args) {
       return Function.prototype.apply.call(target, receiver, args);
     };
     var ReflectOwnKeys;
     
     if (R && typeof R.ownKeys === 'function') {
       ReflectOwnKeys = R.ownKeys;
     } else if (Object.getOwnPropertySymbols) {
       ReflectOwnKeys = function ReflectOwnKeys(target) {
         return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
       };
     } else {
       ReflectOwnKeys = function ReflectOwnKeys(target) {
         return Object.getOwnPropertyNames(target);
       };
     }
     
     function ProcessEmitWarning(warning) {
       if (console && console.warn) console.warn(warning);
     }
     
     var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
       return value !== value;
     };
     
     function EventEmitter() {
       EventEmitter.init.call(this);
     }
     
     module.exports = EventEmitter;
     module.exports.once = once; // Backwards-compat with node 0.10.x
     
     EventEmitter.EventEmitter = EventEmitter;
     EventEmitter.prototype._events = undefined;
     EventEmitter.prototype._eventsCount = 0;
     EventEmitter.prototype._maxListeners = undefined; // By default EventEmitters will print a warning if more than 10 listeners are
     // added to it. This is a useful default which helps finding memory leaks.
     
     var defaultMaxListeners = 10;
     
     function checkListener(listener) {
       if (typeof listener !== 'function') {
         throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
       }
     }
     
     Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
       enumerable: true,
       get: function () {
         return defaultMaxListeners;
       },
       set: function (arg) {
         if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
           throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
         }
     
         defaultMaxListeners = arg;
       }
     });
     
     EventEmitter.init = function () {
       if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
         this._events = Object.create(null);
         this._eventsCount = 0;
       }
     
       this._maxListeners = this._maxListeners || undefined;
     }; // Obviously not all Emitters should be limited to 10. This function allows
     // that to be increased. Set to zero for unlimited.
     
     
     EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
       if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
         throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
       }
     
       this._maxListeners = n;
       return this;
     };
     
     function _getMaxListeners(that) {
       if (that._maxListeners === undefined) return EventEmitter.defaultMaxListeners;
       return that._maxListeners;
     }
     
     EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
       return _getMaxListeners(this);
     };
     
     EventEmitter.prototype.emit = function emit(type) {
       var args = [];
     
       for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
     
       var doError = type === 'error';
       var events = this._events;
       if (events !== undefined) doError = doError && events.error === undefined;else if (!doError) return false; // If there is no 'error' event listener then throw.
     
       if (doError) {
         var er;
         if (args.length > 0) er = args[0];
     
         if (er instanceof Error) {
           // Note: The comments on the `throw` lines are intentional, they show
           // up in Node's output if this results in an unhandled exception.
           throw er; // Unhandled 'error' event
         } // At least give some kind of context to the user
     
     
         var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
         err.context = er;
         throw err; // Unhandled 'error' event
       }
     
       var handler = events[type];
       if (handler === undefined) return false;
     
       if (typeof handler === 'function') {
         ReflectApply(handler, this, args);
       } else {
         var len = handler.length;
         var listeners = arrayClone(handler, len);
     
         for (var i = 0; i < len; ++i) ReflectApply(listeners[i], this, args);
       }
     
       return true;
     };
     
     function _addListener(target, type, listener, prepend) {
       var m;
       var events;
       var existing;
       checkListener(listener);
       events = target._events;
     
       if (events === undefined) {
         events = target._events = Object.create(null);
         target._eventsCount = 0;
       } else {
         // To avoid recursion in the case that type === "newListener"! Before
         // adding it to the listeners, first emit "newListener".
         if (events.newListener !== undefined) {
           target.emit('newListener', type, listener.listener ? listener.listener : listener); // Re-assign `events` because a newListener handler could have caused the
           // this._events to be assigned to a new object
     
           events = target._events;
         }
     
         existing = events[type];
       }
     
       if (existing === undefined) {
         // Optimize the case of one listener. Don't need the extra array object.
         existing = events[type] = listener;
         ++target._eventsCount;
       } else {
         if (typeof existing === 'function') {
           // Adding the second element, need to change to array.
           existing = events[type] = prepend ? [listener, existing] : [existing, listener]; // If we've already got an array, just append.
         } else if (prepend) {
           existing.unshift(listener);
         } else {
           existing.push(listener);
         } // Check for listener leak
     
     
         m = _getMaxListeners(target);
     
         if (m > 0 && existing.length > m && !existing.warned) {
           existing.warned = true; // No error code for this since it is a Warning
           // eslint-disable-next-line no-restricted-syntax
     
           var w = new Error('Possible EventEmitter memory leak detected. ' + existing.length + ' ' + String(type) + ' listeners ' + 'added. Use emitter.setMaxListeners() to ' + 'increase limit');
           w.name = 'MaxListenersExceededWarning';
           w.emitter = target;
           w.type = type;
           w.count = existing.length;
           ProcessEmitWarning(w);
         }
       }
     
       return target;
     }
     
     EventEmitter.prototype.addListener = function addListener(type, listener) {
       return _addListener(this, type, listener, false);
     };
     
     EventEmitter.prototype.on = EventEmitter.prototype.addListener;
     
     EventEmitter.prototype.prependListener = function prependListener(type, listener) {
       return _addListener(this, type, listener, true);
     };
     
     function onceWrapper() {
       if (!this.fired) {
         this.target.removeListener(this.type, this.wrapFn);
         this.fired = true;
         if (arguments.length === 0) return this.listener.call(this.target);
         return this.listener.apply(this.target, arguments);
       }
     }
     
     function _onceWrap(target, type, listener) {
       var state = {
         fired: false,
         wrapFn: undefined,
         target: target,
         type: type,
         listener: listener
       };
       var wrapped = onceWrapper.bind(state);
       wrapped.listener = listener;
       state.wrapFn = wrapped;
       return wrapped;
     }
     
     EventEmitter.prototype.once = function once(type, listener) {
       checkListener(listener);
       this.on(type, _onceWrap(this, type, listener));
       return this;
     };
     
     EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
       checkListener(listener);
       this.prependListener(type, _onceWrap(this, type, listener));
       return this;
     }; // Emits a 'removeListener' event if and only if the listener was removed.
     
     
     EventEmitter.prototype.removeListener = function removeListener(type, listener) {
       var list, events, position, i, originalListener;
       checkListener(listener);
       events = this._events;
       if (events === undefined) return this;
       list = events[type];
       if (list === undefined) return this;
     
       if (list === listener || list.listener === listener) {
         if (--this._eventsCount === 0) this._events = Object.create(null);else {
           delete events[type];
           if (events.removeListener) this.emit('removeListener', type, list.listener || listener);
         }
       } else if (typeof list !== 'function') {
         position = -1;
     
         for (i = list.length - 1; i >= 0; i--) {
           if (list[i] === listener || list[i].listener === listener) {
             originalListener = list[i].listener;
             position = i;
             break;
           }
         }
     
         if (position < 0) return this;
         if (position === 0) list.shift();else {
           spliceOne(list, position);
         }
         if (list.length === 1) events[type] = list[0];
         if (events.removeListener !== undefined) this.emit('removeListener', type, originalListener || listener);
       }
     
       return this;
     };
     
     EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
     
     EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
       var listeners, events, i;
       events = this._events;
       if (events === undefined) return this; // not listening for removeListener, no need to emit
     
       if (events.removeListener === undefined) {
         if (arguments.length === 0) {
           this._events = Object.create(null);
           this._eventsCount = 0;
         } else if (events[type] !== undefined) {
           if (--this._eventsCount === 0) this._events = Object.create(null);else delete events[type];
         }
     
         return this;
       } // emit removeListener for all listeners on all events
     
     
       if (arguments.length === 0) {
         var keys = Object.keys(events);
         var key;
     
         for (i = 0; i < keys.length; ++i) {
           key = keys[i];
           if (key === 'removeListener') continue;
           this.removeAllListeners(key);
         }
     
         this.removeAllListeners('removeListener');
         this._events = Object.create(null);
         this._eventsCount = 0;
         return this;
       }
     
       listeners = events[type];
     
       if (typeof listeners === 'function') {
         this.removeListener(type, listeners);
       } else if (listeners !== undefined) {
         // LIFO order
         for (i = listeners.length - 1; i >= 0; i--) {
           this.removeListener(type, listeners[i]);
         }
       }
     
       return this;
     };
     
     function _listeners(target, type, unwrap) {
       var events = target._events;
       if (events === undefined) return [];
       var evlistener = events[type];
       if (evlistener === undefined) return [];
       if (typeof evlistener === 'function') return unwrap ? [evlistener.listener || evlistener] : [evlistener];
       return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
     }
     
     EventEmitter.prototype.listeners = function listeners(type) {
       return _listeners(this, type, true);
     };
     
     EventEmitter.prototype.rawListeners = function rawListeners(type) {
       return _listeners(this, type, false);
     };
     
     EventEmitter.listenerCount = function (emitter, type) {
       if (typeof emitter.listenerCount === 'function') {
         return emitter.listenerCount(type);
       } else {
         return listenerCount.call(emitter, type);
       }
     };
     
     EventEmitter.prototype.listenerCount = listenerCount;
     
     function listenerCount(type) {
       var events = this._events;
     
       if (events !== undefined) {
         var evlistener = events[type];
     
         if (typeof evlistener === 'function') {
           return 1;
         } else if (evlistener !== undefined) {
           return evlistener.length;
         }
       }
     
       return 0;
     }
     
     EventEmitter.prototype.eventNames = function eventNames() {
       return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
     };
     
     function arrayClone(arr, n) {
       var copy = new Array(n);
     
       for (var i = 0; i < n; ++i) copy[i] = arr[i];
     
       return copy;
     }
     
     function spliceOne(list, index) {
       for (; index + 1 < list.length; index++) list[index] = list[index + 1];
     
       list.pop();
     }
     
     function unwrapListeners(arr) {
       var ret = new Array(arr.length);
     
       for (var i = 0; i < ret.length; ++i) {
         ret[i] = arr[i].listener || arr[i];
       }
     
       return ret;
     }
     
     function once(emitter, name) {
       return new Promise(function (resolve, reject) {
         function errorListener(err) {
           emitter.removeListener(name, resolver);
           reject(err);
         }
     
         function resolver() {
           if (typeof emitter.removeListener === 'function') {
             emitter.removeListener('error', errorListener);
           }
     
           resolve([].slice.call(arguments));
         }
     
         ;
         eventTargetAgnosticAddListener(emitter, name, resolver, {
           once: true
         });
     
         if (name !== 'error') {
           addErrorHandlerIfEventEmitter(emitter, errorListener, {
             once: true
           });
         }
       });
     }
     
     function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
       if (typeof emitter.on === 'function') {
         eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
       }
     }
     
     function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
       if (typeof emitter.on === 'function') {
         if (flags.once) {
           emitter.once(name, listener);
         } else {
           emitter.on(name, listener);
         }
       } else if (typeof emitter.addEventListener === 'function') {
         // EventTarget does not have `error` event semantics like Node
         // EventEmitters, we do not listen for `error` events here.
         emitter.addEventListener(name, function wrapListener(arg) {
           // IE does not have builtin `{ once: true }` support so we
           // have to do it manually.
           if (flags.once) {
             emitter.removeEventListener(name, wrapListener);
           }
     
           listener(arg);
         });
       } else {
         throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
       }
     }
     
     /***/ }),
     
     /***/ "./node_modules/gsap/CSSPlugin.js":
     /*!****************************************!*\
       !*** ./node_modules/gsap/CSSPlugin.js ***!
       \****************************************/
     /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
     
     "use strict";
     __webpack_require__.r(__webpack_exports__);
     /* harmony export */ __webpack_require__.d(__webpack_exports__, {
     /* harmony export */   "CSSPlugin": () => (/* binding */ CSSPlugin),
     /* harmony export */   "_createElement": () => (/* binding */ _createElement),
     /* harmony export */   "_getBBox": () => (/* binding */ _getBBox),
     /* harmony export */   "checkPrefix": () => (/* binding */ _checkPropPrefix),
     /* harmony export */   "default": () => (/* binding */ CSSPlugin)
     /* harmony export */ });
     /* harmony import */ var _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gsap-core.js */ "./node_modules/gsap/gsap-core.js");
     /*!
      * CSSPlugin 3.10.4
      * https://greensock.com
      *
      * Copyright 2008-2022, GreenSock. All rights reserved.
      * Subject to the terms at https://greensock.com/standard-license or for
      * Club GreenSock members, the agreement issued with that membership.
      * @author: Jack Doyle, jack@greensock.com
     */
     
     /* eslint-disable */
     
     
     var _win,
         _doc,
         _docElement,
         _pluginInitted,
         _tempDiv,
         _tempDivStyler,
         _recentSetterPlugin,
         _windowExists = function _windowExists() {
       return typeof window !== "undefined";
     },
         _transformProps = {},
         _RAD2DEG = 180 / Math.PI,
         _DEG2RAD = Math.PI / 180,
         _atan2 = Math.atan2,
         _bigNum = 1e8,
         _capsExp = /([A-Z])/g,
         _horizontalExp = /(left|right|width|margin|padding|x)/i,
         _complexExp = /[\s,\(]\S/,
         _propertyAliases = {
       autoAlpha: "opacity,visibility",
       scale: "scaleX,scaleY",
       alpha: "opacity"
     },
         _renderCSSProp = function _renderCSSProp(ratio, data) {
       return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
     },
         _renderPropWithEnd = function _renderPropWithEnd(ratio, data) {
       return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
     },
         _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning(ratio, data) {
       return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u : data.b, data);
     },
         //if units change, we need a way to render the original unit/value when the tween goes all the way back to the beginning (ratio:0)
     _renderRoundedCSSProp = function _renderRoundedCSSProp(ratio, data) {
       var value = data.s + data.c * ratio;
       data.set(data.t, data.p, ~~(value + (value < 0 ? -.5 : .5)) + data.u, data);
     },
         _renderNonTweeningValue = function _renderNonTweeningValue(ratio, data) {
       return data.set(data.t, data.p, ratio ? data.e : data.b, data);
     },
         _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd(ratio, data) {
       return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
     },
         _setterCSSStyle = function _setterCSSStyle(target, property, value) {
       return target.style[property] = value;
     },
         _setterCSSProp = function _setterCSSProp(target, property, value) {
       return target.style.setProperty(property, value);
     },
         _setterTransform = function _setterTransform(target, property, value) {
       return target._gsap[property] = value;
     },
         _setterScale = function _setterScale(target, property, value) {
       return target._gsap.scaleX = target._gsap.scaleY = value;
     },
         _setterScaleWithRender = function _setterScaleWithRender(target, property, value, data, ratio) {
       var cache = target._gsap;
       cache.scaleX = cache.scaleY = value;
       cache.renderTransform(ratio, cache);
     },
         _setterTransformWithRender = function _setterTransformWithRender(target, property, value, data, ratio) {
       var cache = target._gsap;
       cache[property] = value;
       cache.renderTransform(ratio, cache);
     },
         _transformProp = "transform",
         _transformOriginProp = _transformProp + "Origin",
         _supports3D,
         _createElement = function _createElement(type, ns) {
       var e = _doc.createElementNS ? _doc.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc.createElement(type); //some servers swap in https for http in the namespace which can break things, making "style" inaccessible.
     
       return e.style ? e : _doc.createElement(type); //some environments won't allow access to the element's style when created with a namespace in which case we default to the standard createElement() to work around the issue. Also note that when GSAP is embedded directly inside an SVG file, createElement() won't allow access to the style object in Firefox (see https://greensock.com/forums/topic/20215-problem-using-tweenmax-in-standalone-self-containing-svg-file-err-cannot-set-property-csstext-of-undefined/).
     },
         _getComputedProperty = function _getComputedProperty(target, property, skipPrefixFallback) {
       var cs = getComputedStyle(target);
       return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty(target, _checkPropPrefix(property) || property, 1) || ""; //css variables may not need caps swapped out for dashes and lowercase.
     },
         _prefixes = "O,Moz,ms,Ms,Webkit".split(","),
         _checkPropPrefix = function _checkPropPrefix(property, element, preferPrefix) {
       var e = element || _tempDiv,
           s = e.style,
           i = 5;
     
       if (property in s && !preferPrefix) {
         return property;
       }
     
       property = property.charAt(0).toUpperCase() + property.substr(1);
     
       while (i-- && !(_prefixes[i] + property in s)) {}
     
       return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
     },
         _initCore = function _initCore() {
       if (_windowExists() && window.document) {
         _win = window;
         _doc = _win.document;
         _docElement = _doc.documentElement;
         _tempDiv = _createElement("div") || {
           style: {}
         };
         _tempDivStyler = _createElement("div");
         _transformProp = _checkPropPrefix(_transformProp);
         _transformOriginProp = _transformProp + "Origin";
         _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0"; //make sure to override certain properties that may contaminate measurements, in case the user has overreaching style sheets.
     
         _supports3D = !!_checkPropPrefix("perspective");
         _pluginInitted = 1;
       }
     },
         _getBBoxHack = function _getBBoxHack(swapIfPossible) {
       //works around issues in some browsers (like Firefox) that don't correctly report getBBox() on SVG elements inside a <defs> element and/or <mask>. We try creating an SVG, adding it to the documentElement and toss the element in there so that it's definitely part of the rendering tree, then grab the bbox and if it works, we actually swap out the original getBBox() method for our own that does these extra steps whenever getBBox is needed. This helps ensure that performance is optimal (only do all these extra steps when absolutely necessary...most elements don't need it).
       var svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
           oldParent = this.parentNode,
           oldSibling = this.nextSibling,
           oldCSS = this.style.cssText,
           bbox;
     
       _docElement.appendChild(svg);
     
       svg.appendChild(this);
       this.style.display = "block";
     
       if (swapIfPossible) {
         try {
           bbox = this.getBBox();
           this._gsapBBox = this.getBBox; //store the original
     
           this.getBBox = _getBBoxHack;
         } catch (e) {}
       } else if (this._gsapBBox) {
         bbox = this._gsapBBox();
       }
     
       if (oldParent) {
         if (oldSibling) {
           oldParent.insertBefore(this, oldSibling);
         } else {
           oldParent.appendChild(this);
         }
       }
     
       _docElement.removeChild(svg);
     
       this.style.cssText = oldCSS;
       return bbox;
     },
         _getAttributeFallbacks = function _getAttributeFallbacks(target, attributesArray) {
       var i = attributesArray.length;
     
       while (i--) {
         if (target.hasAttribute(attributesArray[i])) {
           return target.getAttribute(attributesArray[i]);
         }
       }
     },
         _getBBox = function _getBBox(target) {
       var bounds;
     
       try {
         bounds = target.getBBox(); //Firefox throws errors if you try calling getBBox() on an SVG element that's not rendered (like in a <symbol> or <defs>). https://bugzilla.mozilla.org/show_bug.cgi?id=612118
       } catch (error) {
         bounds = _getBBoxHack.call(target, true);
       }
     
       bounds && (bounds.width || bounds.height) || target.getBBox === _getBBoxHack || (bounds = _getBBoxHack.call(target, true)); //some browsers (like Firefox) misreport the bounds if the element has zero width and height (it just assumes it's at x:0, y:0), thus we need to manually grab the position in that case.
     
       return bounds && !bounds.width && !bounds.x && !bounds.y ? {
         x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
         y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
         width: 0,
         height: 0
       } : bounds;
     },
         _isSVG = function _isSVG(e) {
       return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
     },
         //reports if the element is an SVG on which getBBox() actually works
     _removeProperty = function _removeProperty(target, property) {
       if (property) {
         var style = target.style;
     
         if (property in _transformProps && property !== _transformOriginProp) {
           property = _transformProp;
         }
     
         if (style.removeProperty) {
           if (property.substr(0, 2) === "ms" || property.substr(0, 6) === "webkit") {
             //Microsoft and some Webkit browsers don't conform to the standard of capitalizing the first prefix character, so we adjust so that when we prefix the caps with a dash, it's correct (otherwise it'd be "ms-transform" instead of "-ms-transform" for IE9, for example)
             property = "-" + property;
           }
     
           style.removeProperty(property.replace(_capsExp, "-$1").toLowerCase());
         } else {
           //note: old versions of IE use "removeAttribute()" instead of "removeProperty()"
           style.removeAttribute(property);
         }
       }
     },
         _addNonTweeningPT = function _addNonTweeningPT(plugin, target, property, beginning, end, onlySetAtEnd) {
       var pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
       plugin._pt = pt;
       pt.b = beginning;
       pt.e = end;
     
       plugin._props.push(property);
     
       return pt;
     },
         _nonConvertibleUnits = {
       deg: 1,
       rad: 1,
       turn: 1
     },
         //takes a single value like 20px and converts it to the unit specified, like "%", returning only the numeric amount.
     _convertToUnit = function _convertToUnit(target, property, value, unit) {
       var curValue = parseFloat(value) || 0,
           curUnit = (value + "").trim().substr((curValue + "").length) || "px",
           // some browsers leave extra whitespace at the beginning of CSS variables, hence the need to trim()
       style = _tempDiv.style,
           horizontal = _horizontalExp.test(property),
           isRootSVG = target.tagName.toLowerCase() === "svg",
           measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"),
           amount = 100,
           toPixels = unit === "px",
           toPercent = unit === "%",
           px,
           parent,
           cache,
           isSVG;
     
       if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
         return curValue;
       }
     
       curUnit !== "px" && !toPixels && (curValue = _convertToUnit(target, property, value, "px"));
       isSVG = target.getCTM && _isSVG(target);
     
       if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
         px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
         return (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(toPercent ? curValue / px * amount : curValue / 100 * px);
       }
     
       style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
       parent = ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;
     
       if (isSVG) {
         parent = (target.ownerSVGElement || {}).parentNode;
       }
     
       if (!parent || parent === _doc || !parent.appendChild) {
         parent = _doc.body;
       }
     
       cache = parent._gsap;
     
       if (cache && toPercent && cache.width && horizontal && cache.time === _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._ticker.time) {
         return (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(curValue / cache.width * amount);
       } else {
         (toPercent || curUnit === "%") && (style.position = _getComputedProperty(target, "position"));
         parent === target && (style.position = "static"); // like for borderRadius, if it's a % we must have it relative to the target itself but that may not have position: relative or position: absolute in which case it'd go up the chain until it finds its offsetParent (bad). position: static protects against that.
     
         parent.appendChild(_tempDiv);
         px = _tempDiv[measureProperty];
         parent.removeChild(_tempDiv);
         style.position = "absolute";
     
         if (horizontal && toPercent) {
           cache = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._getCache)(parent);
           cache.time = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._ticker.time;
           cache.width = parent[measureProperty];
         }
       }
     
       return (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
     },
         _get = function _get(target, property, unit, uncache) {
       var value;
       _pluginInitted || _initCore();
     
       if (property in _propertyAliases && property !== "transform") {
         property = _propertyAliases[property];
     
         if (~property.indexOf(",")) {
           property = property.split(",")[0];
         }
       }
     
       if (_transformProps[property] && property !== "transform") {
         value = _parseTransform(target, uncache);
         value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
       } else {
         value = target.style[property];
     
         if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) {
           value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._getProperty)(target, property) || (property === "opacity" ? 1 : 0); // note: some browsers, like Firefox, don't report borderRadius correctly! Instead, it only reports every corner like  borderTopLeftRadius
         }
       }
     
       return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
     },
         _tweenComplexCSSString = function _tweenComplexCSSString(target, prop, start, end) {
       // note: we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
       if (!start || start === "none") {
         // some browsers like Safari actually PREFER the prefixed property and mis-report the unprefixed value like clipPath (BUG). In other words, even though clipPath exists in the style ("clipPath" in target.style) and it's set in the CSS properly (along with -webkit-clip-path), Safari reports clipPath as "none" whereas WebkitClipPath reports accurately like "ellipse(100% 0% at 50% 0%)", so in this case we must SWITCH to using the prefixed property instead. See https://greensock.com/forums/topic/18310-clippath-doesnt-work-on-ios/
         var p = _checkPropPrefix(prop, target, 1),
             s = p && _getComputedProperty(target, p, 1);
     
         if (s && s !== start) {
           prop = p;
           start = s;
         } else if (prop === "borderColor") {
           start = _getComputedProperty(target, "borderTopColor"); // Firefox bug: always reports "borderColor" as "", so we must fall back to borderTopColor. See https://greensock.com/forums/topic/24583-how-to-return-colors-that-i-had-after-reverse/
         }
       }
     
       var pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(this._pt, target.style, prop, 0, 1, _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._renderComplexString),
           index = 0,
           matchIndex = 0,
           a,
           result,
           startValues,
           startNum,
           color,
           startValue,
           endValue,
           endNum,
           chunk,
           endUnit,
           startUnit,
           endValues;
       pt.b = start;
       pt.e = end;
       start += ""; // ensure values are strings
     
       end += "";
     
       if (end === "auto") {
         target.style[prop] = end;
         end = _getComputedProperty(target, prop) || end;
         target.style[prop] = start;
       }
     
       a = [start, end];
     
       (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._colorStringFilter)(a); // pass an array with the starting and ending values and let the filter do whatever it needs to the values. If colors are found, it returns true and then we must match where the color shows up order-wise because for things like boxShadow, sometimes the browser provides the computed values with the color FIRST, but the user provides it with the color LAST, so flip them if necessary. Same for drop-shadow().
     
     
       start = a[0];
       end = a[1];
       startValues = start.match(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numWithUnitExp) || [];
       endValues = end.match(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numWithUnitExp) || [];
     
       if (endValues.length) {
         while (result = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numWithUnitExp.exec(end)) {
           endValue = result[0];
           chunk = end.substring(index, result.index);
     
           if (color) {
             color = (color + 1) % 5;
           } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
             color = 1;
           }
     
           if (endValue !== (startValue = startValues[matchIndex++] || "")) {
             startNum = parseFloat(startValue) || 0;
             startUnit = startValue.substr((startNum + "").length);
             endValue.charAt(1) === "=" && (endValue = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._parseRelative)(startNum, endValue) + startUnit);
             endNum = parseFloat(endValue);
             endUnit = endValue.substr((endNum + "").length);
             index = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numWithUnitExp.lastIndex - endUnit.length;
     
             if (!endUnit) {
               //if something like "perspective:300" is passed in and we must add a unit to the end
               endUnit = endUnit || _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[prop] || startUnit;
     
               if (index === end.length) {
                 end += endUnit;
                 pt.e += endUnit;
               }
             }
     
             if (startUnit !== endUnit) {
               startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
             } // these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.
     
     
             pt._pt = {
               _next: pt._pt,
               p: chunk || matchIndex === 1 ? chunk : ",",
               //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
               s: startNum,
               c: endNum - startNum,
               m: color && color < 4 || prop === "zIndex" ? Math.round : 0
             };
           }
         }
     
         pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)
       } else {
         pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
       }
     
       _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._relExp.test(end) && (pt.e = 0); //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).
     
       this._pt = pt; //start the linked list with this new PropTween. Remember, we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within another plugin too, thus "this" would refer to the plugin.
     
       return pt;
     },
         _keywordToPercent = {
       top: "0%",
       bottom: "100%",
       left: "0%",
       right: "100%",
       center: "50%"
     },
         _convertKeywordsToPercentages = function _convertKeywordsToPercentages(value) {
       var split = value.split(" "),
           x = split[0],
           y = split[1] || "50%";
     
       if (x === "top" || x === "bottom" || y === "left" || y === "right") {
         //the user provided them in the wrong order, so flip them
         value = x;
         x = y;
         y = value;
       }
     
       split[0] = _keywordToPercent[x] || x;
       split[1] = _keywordToPercent[y] || y;
       return split.join(" ");
     },
         _renderClearProps = function _renderClearProps(ratio, data) {
       if (data.tween && data.tween._time === data.tween._dur) {
         var target = data.t,
             style = target.style,
             props = data.u,
             cache = target._gsap,
             prop,
             clearTransforms,
             i;
     
         if (props === "all" || props === true) {
           style.cssText = "";
           clearTransforms = 1;
         } else {
           props = props.split(",");
           i = props.length;
     
           while (--i > -1) {
             prop = props[i];
     
             if (_transformProps[prop]) {
               clearTransforms = 1;
               prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
             }
     
             _removeProperty(target, prop);
           }
         }
     
         if (clearTransforms) {
           _removeProperty(target, _transformProp);
     
           if (cache) {
             cache.svg && target.removeAttribute("transform");
     
             _parseTransform(target, 1); // force all the cached values back to "normal"/identity, otherwise if there's another tween that's already set to render transforms on this element, it could display the wrong values.
     
     
             cache.uncache = 1;
           }
         }
       }
     },
         // note: specialProps should return 1 if (and only if) they have a non-zero priority. It indicates we need to sort the linked list.
     _specialProps = {
       clearProps: function clearProps(plugin, target, property, endValue, tween) {
         if (tween.data !== "isFromStart") {
           var pt = plugin._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
           pt.u = endValue;
           pt.pr = -10;
           pt.tween = tween;
     
           plugin._props.push(property);
     
           return 1;
         }
       }
       /* className feature (about 0.4kb gzipped).
       , className(plugin, target, property, endValue, tween) {
           let _renderClassName = (ratio, data) => {
                   data.css.render(ratio, data.css);
                   if (!ratio || ratio === 1) {
                       let inline = data.rmv,
                           target = data.t,
                           p;
                       target.setAttribute("class", ratio ? data.e : data.b);
                       for (p in inline) {
                           _removeProperty(target, p);
                       }
                   }
               },
               _getAllStyles = (target) => {
                   let styles = {},
                       computed = getComputedStyle(target),
                       p;
                   for (p in computed) {
                       if (isNaN(p) && p !== "cssText" && p !== "length") {
                           styles[p] = computed[p];
                       }
                   }
                   _setDefaults(styles, _parseTransform(target, 1));
                   return styles;
               },
               startClassList = target.getAttribute("class"),
               style = target.style,
               cssText = style.cssText,
               cache = target._gsap,
               classPT = cache.classPT,
               inlineToRemoveAtEnd = {},
               data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
               changingVars = {},
               startVars = _getAllStyles(target),
               transformRelated = /(transform|perspective)/i,
               endVars, p;
           if (classPT) {
               classPT.r(1, classPT.d);
               _removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
           }
           target.setAttribute("class", data.e);
           endVars = _getAllStyles(target, true);
           target.setAttribute("class", startClassList);
           for (p in endVars) {
               if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
                   changingVars[p] = endVars[p];
                   if (!style[p] && style[p] !== "0") {
                       inlineToRemoveAtEnd[p] = 1;
                   }
               }
           }
           cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
           if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://greensock.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
               style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
           }
           _parseTransform(target, true); //to clear the caching of transforms
           data.css = new gsap.plugins.css();
           data.css.init(target, changingVars, tween);
           plugin._props.push(...data.css._props);
           return 1;
       }
       */
     
     },
     
     /*
      * --------------------------------------------------------------------------------------
      * TRANSFORMS
      * --------------------------------------------------------------------------------------
      */
     _identity2DMatrix = [1, 0, 0, 1, 0, 0],
         _rotationalProperties = {},
         _isNullTransform = function _isNullTransform(value) {
       return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
     },
         _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray(target) {
       var matrixString = _getComputedProperty(target, _transformProp);
     
       return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numExp).map(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round);
     },
         _getMatrix = function _getMatrix(target, force2D) {
       var cache = target._gsap || (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._getCache)(target),
           style = target.style,
           matrix = _getComputedTransformMatrixAsArray(target),
           parent,
           nextSibling,
           temp,
           addedToDOM;
     
       if (cache.svg && target.getAttribute("transform")) {
         temp = target.transform.baseVal.consolidate().matrix; //ensures that even complex values like "translate(50,60) rotate(135,0,0)" are parsed because it mashes it into a matrix.
     
         matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
         return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
       } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
         //note: if offsetParent is null, that means the element isn't in the normal document flow, like if it has display:none or one of its ancestors has display:none). Firefox returns null for getComputedStyle() if the element is in an iframe that has display:none. https://bugzilla.mozilla.org/show_bug.cgi?id=548397
         //browsers don't report transforms accurately unless the element is in the DOM and has a display value that's not "none". Firefox and Microsoft browsers have a partial bug where they'll report transforms even if display:none BUT not any percentage-based values like translate(-50%, 8px) will be reported as if it's translate(0, 8px).
         temp = style.display;
         style.display = "block";
         parent = target.parentNode;
     
         if (!parent || !target.offsetParent) {
           // note: in 3.3.0 we switched target.offsetParent to _doc.body.contains(target) to avoid [sometimes unnecessary] MutationObserver calls but that wasn't adequate because there are edge cases where nested position: fixed elements need to get reparented to accurately sense transforms. See https://github.com/greensock/GSAP/issues/388 and https://github.com/greensock/GSAP/issues/375
           addedToDOM = 1; //flag
     
           nextSibling = target.nextSibling;
     
           _docElement.appendChild(target); //we must add it to the DOM in order to get values properly
     
         }
     
         matrix = _getComputedTransformMatrixAsArray(target);
         temp ? style.display = temp : _removeProperty(target, "display");
     
         if (addedToDOM) {
           nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
         }
       }
     
       return force2D && matrix.length > 6 ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]] : matrix;
     },
         _applySVGOrigin = function _applySVGOrigin(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
       var cache = target._gsap,
           matrix = matrixArray || _getMatrix(target, true),
           xOriginOld = cache.xOrigin || 0,
           yOriginOld = cache.yOrigin || 0,
           xOffsetOld = cache.xOffset || 0,
           yOffsetOld = cache.yOffset || 0,
           a = matrix[0],
           b = matrix[1],
           c = matrix[2],
           d = matrix[3],
           tx = matrix[4],
           ty = matrix[5],
           originSplit = origin.split(" "),
           xOrigin = parseFloat(originSplit[0]) || 0,
           yOrigin = parseFloat(originSplit[1]) || 0,
           bounds,
           determinant,
           x,
           y;
     
       if (!originIsAbsolute) {
         bounds = _getBBox(target);
         xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
         yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
       } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
         //if it's zero (like if scaleX and scaleY are zero), skip it to avoid errors with dividing by zero.
         x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
         y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
         xOrigin = x;
         yOrigin = y;
       }
     
       if (smooth || smooth !== false && cache.smooth) {
         tx = xOrigin - xOriginOld;
         ty = yOrigin - yOriginOld;
         cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
         cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
       } else {
         cache.xOffset = cache.yOffset = 0;
       }
     
       cache.xOrigin = xOrigin;
       cache.yOrigin = yOrigin;
       cache.smooth = !!smooth;
       cache.origin = origin;
       cache.originIsAbsolute = !!originIsAbsolute;
       target.style[_transformOriginProp] = "0px 0px"; //otherwise, if someone sets  an origin via CSS, it will likely interfere with the SVG transform attribute ones (because remember, we're baking the origin into the matrix() value).
     
       if (pluginToAddPropTweensTo) {
         _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);
     
         _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);
     
         _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);
     
         _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
       }
     
       target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
     },
         _parseTransform = function _parseTransform(target, uncache) {
       var cache = target._gsap || new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.GSCache(target);
     
       if ("x" in cache && !uncache && !cache.uncache) {
         return cache;
       }
     
       var style = target.style,
           invertedScaleX = cache.scaleX < 0,
           px = "px",
           deg = "deg",
           origin = _getComputedProperty(target, _transformOriginProp) || "0",
           x,
           y,
           z,
           scaleX,
           scaleY,
           rotation,
           rotationX,
           rotationY,
           skewX,
           skewY,
           perspective,
           xOrigin,
           yOrigin,
           matrix,
           angle,
           cos,
           sin,
           a,
           b,
           c,
           d,
           a12,
           a22,
           t1,
           t2,
           t3,
           a13,
           a23,
           a33,
           a42,
           a43,
           a32;
       x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
       scaleX = scaleY = 1;
       cache.svg = !!(target.getCTM && _isSVG(target));
       matrix = _getMatrix(target, cache.svg);
     
       if (cache.svg) {
         t1 = (!cache.uncache || origin === "0px 0px") && !uncache && target.getAttribute("data-svg-origin"); // if origin is 0,0 and cache.uncache is true, let the recorded data-svg-origin stay. Otherwise, whenever we set cache.uncache to true, we'd need to set element.style.transformOrigin = (cache.xOrigin - bbox.x) + "px " + (cache.yOrigin - bbox.y) + "px". Remember, to work around browser inconsistencies we always force SVG elements' transformOrigin to 0,0 and offset the translation accordingly.
     
         _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
       }
     
       xOrigin = cache.xOrigin || 0;
       yOrigin = cache.yOrigin || 0;
     
       if (matrix !== _identity2DMatrix) {
         a = matrix[0]; //a11
     
         b = matrix[1]; //a21
     
         c = matrix[2]; //a31
     
         d = matrix[3]; //a41
     
         x = a12 = matrix[4];
         y = a22 = matrix[5]; //2D matrix
     
         if (matrix.length === 6) {
           scaleX = Math.sqrt(a * a + b * b);
           scaleY = Math.sqrt(d * d + c * c);
           rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0; //note: if scaleX is 0, we cannot accurately measure rotation. Same for skewX with a scaleY of 0. Therefore, we default to the previously recorded value (or zero if that doesn't exist).
     
           skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
           skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));
     
           if (cache.svg) {
             x -= xOrigin - (xOrigin * a + yOrigin * c);
             y -= yOrigin - (xOrigin * b + yOrigin * d);
           } //3D matrix
     
         } else {
           a32 = matrix[6];
           a42 = matrix[7];
           a13 = matrix[8];
           a23 = matrix[9];
           a33 = matrix[10];
           a43 = matrix[11];
           x = matrix[12];
           y = matrix[13];
           z = matrix[14];
           angle = _atan2(a32, a33);
           rotationX = angle * _RAD2DEG; //rotationX
     
           if (angle) {
             cos = Math.cos(-angle);
             sin = Math.sin(-angle);
             t1 = a12 * cos + a13 * sin;
             t2 = a22 * cos + a23 * sin;
             t3 = a32 * cos + a33 * sin;
             a13 = a12 * -sin + a13 * cos;
             a23 = a22 * -sin + a23 * cos;
             a33 = a32 * -sin + a33 * cos;
             a43 = a42 * -sin + a43 * cos;
             a12 = t1;
             a22 = t2;
             a32 = t3;
           } //rotationY
     
     
           angle = _atan2(-c, a33);
           rotationY = angle * _RAD2DEG;
     
           if (angle) {
             cos = Math.cos(-angle);
             sin = Math.sin(-angle);
             t1 = a * cos - a13 * sin;
             t2 = b * cos - a23 * sin;
             t3 = c * cos - a33 * sin;
             a43 = d * sin + a43 * cos;
             a = t1;
             b = t2;
             c = t3;
           } //rotationZ
     
     
           angle = _atan2(b, a);
           rotation = angle * _RAD2DEG;
     
           if (angle) {
             cos = Math.cos(angle);
             sin = Math.sin(angle);
             t1 = a * cos + b * sin;
             t2 = a12 * cos + a22 * sin;
             b = b * cos - a * sin;
             a22 = a22 * cos - a12 * sin;
             a = t1;
             a12 = t2;
           }
     
           if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
             //when rotationY is set, it will often be parsed as 180 degrees different than it should be, and rotationX and rotation both being 180 (it looks the same), so we adjust for that here.
             rotationX = rotation = 0;
             rotationY = 180 - rotationY;
           }
     
           scaleX = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(Math.sqrt(a * a + b * b + c * c));
           scaleY = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(Math.sqrt(a22 * a22 + a32 * a32));
           angle = _atan2(a12, a22);
           skewX = Math.abs(angle) > 0.0002 ? angle * _RAD2DEG : 0;
           perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
         }
     
         if (cache.svg) {
           //sense if there are CSS transforms applied on an SVG element in which case we must overwrite them when rendering. The transform attribute is more reliable cross-browser, but we can't just remove the CSS ones because they may be applied in a CSS rule somewhere (not just inline).
           t1 = target.getAttribute("transform");
           cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
           t1 && target.setAttribute("transform", t1);
         }
       }
     
       if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
         if (invertedScaleX) {
           scaleX *= -1;
           skewX += rotation <= 0 ? 180 : -180;
           rotation += rotation <= 0 ? 180 : -180;
         } else {
           scaleY *= -1;
           skewX += skewX <= 0 ? 180 : -180;
         }
       }
     
       uncache = uncache || cache.uncache;
       cache.x = x - ((cache.xPercent = x && (!uncache && cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
       cache.y = y - ((cache.yPercent = y && (!uncache && cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
       cache.z = z + px;
       cache.scaleX = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(scaleX);
       cache.scaleY = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(scaleY);
       cache.rotation = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(rotation) + deg;
       cache.rotationX = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(rotationX) + deg;
       cache.rotationY = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(rotationY) + deg;
       cache.skewX = skewX + deg;
       cache.skewY = skewY + deg;
       cache.transformPerspective = perspective + px;
     
       if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || 0) {
         style[_transformOriginProp] = _firstTwoOnly(origin);
       }
     
       cache.xOffset = cache.yOffset = 0;
       cache.force3D = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.force3D;
       cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
       cache.uncache = 0;
       return cache;
     },
         _firstTwoOnly = function _firstTwoOnly(value) {
       return (value = value.split(" "))[0] + " " + value[1];
     },
         //for handling transformOrigin values, stripping out the 3rd dimension
     _addPxTranslate = function _addPxTranslate(target, start, value) {
       var unit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(start);
       return (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
     },
         _renderNon3DTransforms = function _renderNon3DTransforms(ratio, cache) {
       cache.z = "0px";
       cache.rotationY = cache.rotationX = "0deg";
       cache.force3D = 0;
     
       _renderCSSTransforms(ratio, cache);
     },
         _zeroDeg = "0deg",
         _zeroPx = "0px",
         _endParenthesis = ") ",
         _renderCSSTransforms = function _renderCSSTransforms(ratio, cache) {
       var _ref = cache || this,
           xPercent = _ref.xPercent,
           yPercent = _ref.yPercent,
           x = _ref.x,
           y = _ref.y,
           z = _ref.z,
           rotation = _ref.rotation,
           rotationY = _ref.rotationY,
           rotationX = _ref.rotationX,
           skewX = _ref.skewX,
           skewY = _ref.skewY,
           scaleX = _ref.scaleX,
           scaleY = _ref.scaleY,
           transformPerspective = _ref.transformPerspective,
           force3D = _ref.force3D,
           target = _ref.target,
           zOrigin = _ref.zOrigin,
           transforms = "",
           use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true; // Safari has a bug that causes it not to render 3D transform-origin values properly, so we force the z origin to 0, record it in the cache, and then do the math here to offset the translate values accordingly (basically do the 3D transform-origin part manually)
     
     
       if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
         var angle = parseFloat(rotationY) * _DEG2RAD,
             a13 = Math.sin(angle),
             a33 = Math.cos(angle),
             cos;
     
         angle = parseFloat(rotationX) * _DEG2RAD;
         cos = Math.cos(angle);
         x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
         y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
         z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
       }
     
       if (transformPerspective !== _zeroPx) {
         transforms += "perspective(" + transformPerspective + _endParenthesis;
       }
     
       if (xPercent || yPercent) {
         transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
       }
     
       if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) {
         transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
       }
     
       if (rotation !== _zeroDeg) {
         transforms += "rotate(" + rotation + _endParenthesis;
       }
     
       if (rotationY !== _zeroDeg) {
         transforms += "rotateY(" + rotationY + _endParenthesis;
       }
     
       if (rotationX !== _zeroDeg) {
         transforms += "rotateX(" + rotationX + _endParenthesis;
       }
     
       if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
         transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
       }
     
       if (scaleX !== 1 || scaleY !== 1) {
         transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
       }
     
       target.style[_transformProp] = transforms || "translate(0, 0)";
     },
         _renderSVGTransforms = function _renderSVGTransforms(ratio, cache) {
       var _ref2 = cache || this,
           xPercent = _ref2.xPercent,
           yPercent = _ref2.yPercent,
           x = _ref2.x,
           y = _ref2.y,
           rotation = _ref2.rotation,
           skewX = _ref2.skewX,
           skewY = _ref2.skewY,
           scaleX = _ref2.scaleX,
           scaleY = _ref2.scaleY,
           target = _ref2.target,
           xOrigin = _ref2.xOrigin,
           yOrigin = _ref2.yOrigin,
           xOffset = _ref2.xOffset,
           yOffset = _ref2.yOffset,
           forceCSS = _ref2.forceCSS,
           tx = parseFloat(x),
           ty = parseFloat(y),
           a11,
           a21,
           a12,
           a22,
           temp;
     
       rotation = parseFloat(rotation);
       skewX = parseFloat(skewX);
       skewY = parseFloat(skewY);
     
       if (skewY) {
         //for performance reasons, we combine all skewing into the skewX and rotation values. Remember, a skewY of 10 degrees looks the same as a rotation of 10 degrees plus a skewX of 10 degrees.
         skewY = parseFloat(skewY);
         skewX += skewY;
         rotation += skewY;
       }
     
       if (rotation || skewX) {
         rotation *= _DEG2RAD;
         skewX *= _DEG2RAD;
         a11 = Math.cos(rotation) * scaleX;
         a21 = Math.sin(rotation) * scaleX;
         a12 = Math.sin(rotation - skewX) * -scaleY;
         a22 = Math.cos(rotation - skewX) * scaleY;
     
         if (skewX) {
           skewY *= _DEG2RAD;
           temp = Math.tan(skewX - skewY);
           temp = Math.sqrt(1 + temp * temp);
           a12 *= temp;
           a22 *= temp;
     
           if (skewY) {
             temp = Math.tan(skewY);
             temp = Math.sqrt(1 + temp * temp);
             a11 *= temp;
             a21 *= temp;
           }
         }
     
         a11 = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(a11);
         a21 = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(a21);
         a12 = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(a12);
         a22 = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(a22);
       } else {
         a11 = scaleX;
         a22 = scaleY;
         a21 = a12 = 0;
       }
     
       if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
         tx = _convertToUnit(target, "x", x, "px");
         ty = _convertToUnit(target, "y", y, "px");
       }
     
       if (xOrigin || yOrigin || xOffset || yOffset) {
         tx = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
         ty = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
       }
     
       if (xPercent || yPercent) {
         //The SVG spec doesn't support percentage-based translation in the "transform" attribute, so we merge it into the translation to simulate it.
         temp = target.getBBox();
         tx = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(tx + xPercent / 100 * temp.width);
         ty = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(ty + yPercent / 100 * temp.height);
       }
     
       temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
       target.setAttribute("transform", temp);
       forceCSS && (target.style[_transformProp] = temp); //some browsers prioritize CSS transforms over the transform attribute. When we sense that the user has CSS transforms applied, we must overwrite them this way (otherwise some browser simply won't render the  transform attribute changes!)
     },
         _addRotationalPropTween = function _addRotationalPropTween(plugin, target, property, startNum, endValue) {
       var cap = 360,
           isString = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._isString)(endValue),
           endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1),
           change = endNum - startNum,
           finalValue = startNum + change + "deg",
           direction,
           pt;
     
       if (isString) {
         direction = endValue.split("_")[1];
     
         if (direction === "short") {
           change %= cap;
     
           if (change !== change % (cap / 2)) {
             change += change < 0 ? cap : -cap;
           }
         }
     
         if (direction === "cw" && change < 0) {
           change = (change + cap * _bigNum) % cap - ~~(change / cap) * cap;
         } else if (direction === "ccw" && change > 0) {
           change = (change - cap * _bigNum) % cap - ~~(change / cap) * cap;
         }
       }
     
       plugin._pt = pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
       pt.e = finalValue;
       pt.u = "deg";
     
       plugin._props.push(property);
     
       return pt;
     },
         _assign = function _assign(target, source) {
       // Internet Explorer doesn't have Object.assign(), so we recreate it here.
       for (var p in source) {
         target[p] = source[p];
       }
     
       return target;
     },
         _addRawTransformPTs = function _addRawTransformPTs(plugin, transforms, target) {
       //for handling cases where someone passes in a whole transform string, like transform: "scale(2, 3) rotate(20deg) translateY(30em)"
       var startCache = _assign({}, target._gsap),
           exclude = "perspective,force3D,transformOrigin,svgOrigin",
           style = target.style,
           endCache,
           p,
           startValue,
           endValue,
           startNum,
           endNum,
           startUnit,
           endUnit;
     
       if (startCache.svg) {
         startValue = target.getAttribute("transform");
         target.setAttribute("transform", "");
         style[_transformProp] = transforms;
         endCache = _parseTransform(target, 1);
     
         _removeProperty(target, _transformProp);
     
         target.setAttribute("transform", startValue);
       } else {
         startValue = getComputedStyle(target)[_transformProp];
         style[_transformProp] = transforms;
         endCache = _parseTransform(target, 1);
         style[_transformProp] = startValue;
       }
     
       for (p in _transformProps) {
         startValue = startCache[p];
         endValue = endCache[p];
     
         if (startValue !== endValue && exclude.indexOf(p) < 0) {
           //tweening to no perspective gives very unintuitive results - just keep the same perspective in that case.
           startUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(startValue);
           endUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(endValue);
           startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
           endNum = parseFloat(endValue);
           plugin._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(plugin._pt, endCache, p, startNum, endNum - startNum, _renderCSSProp);
           plugin._pt.u = endUnit || 0;
     
           plugin._props.push(p);
         }
       }
     
       _assign(endCache, startCache);
     }; // handle splitting apart padding, margin, borderWidth, and borderRadius into their 4 components. Firefox, for example, won't report borderRadius correctly - it will only do borderTopLeftRadius and the other corners. We also want to handle paddingTop, marginLeft, borderRightWidth, etc.
     
     
     (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)("padding,margin,Width,Radius", function (name, index) {
       var t = "Top",
           r = "Right",
           b = "Bottom",
           l = "Left",
           props = (index < 3 ? [t, r, b, l] : [t + l, t + r, b + r, b + l]).map(function (side) {
         return index < 2 ? name + side : "border" + side + name;
       });
     
       _specialProps[index > 1 ? "border" + name : name] = function (plugin, target, property, endValue, tween) {
         var a, vars;
     
         if (arguments.length < 4) {
           // getter, passed target, property, and unit (from _get())
           a = props.map(function (prop) {
             return _get(plugin, prop, property);
           });
           vars = a.join(" ");
           return vars.split(a[0]).length === 5 ? a[0] : vars;
         }
     
         a = (endValue + "").split(" ");
         vars = {};
         props.forEach(function (prop, i) {
           return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
         });
         plugin.init(target, vars, tween);
       };
     });
     
     var CSSPlugin = {
       name: "css",
       register: _initCore,
       targetTest: function targetTest(target) {
         return target.style && target.nodeType;
       },
       init: function init(target, vars, tween, index, targets) {
         var props = this._props,
             style = target.style,
             startAt = tween.vars.startAt,
             startValue,
             endValue,
             endNum,
             startNum,
             type,
             specialProp,
             p,
             startUnit,
             endUnit,
             relative,
             isTransformRelated,
             transformPropTween,
             cache,
             smooth,
             hasPriority;
         _pluginInitted || _initCore();
     
         for (p in vars) {
           if (p === "autoRound") {
             continue;
           }
     
           endValue = vars[p];
     
           if (_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._plugins[p] && (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._checkPlugin)(p, vars, tween, index, target, targets)) {
             // plugins
             continue;
           }
     
           type = typeof endValue;
           specialProp = _specialProps[p];
     
           if (type === "function") {
             endValue = endValue.call(tween, index, target, targets);
             type = typeof endValue;
           }
     
           if (type === "string" && ~endValue.indexOf("random(")) {
             endValue = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._replaceRandom)(endValue);
           }
     
           if (specialProp) {
             specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
           } else if (p.substr(0, 2) === "--") {
             //CSS variable
             startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
             endValue += "";
             _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._colorExp.lastIndex = 0;
     
             if (!_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._colorExp.test(startValue)) {
               // colors don't have units
               startUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(startValue);
               endUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(endValue);
             }
     
             endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
             this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
             props.push(p);
           } else if (type !== "undefined") {
             if (startAt && p in startAt) {
               // in case someone hard-codes a complex value as the start, like top: "calc(2vh / 2)". Without this, it'd use the computed value (always in px)
               startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
               (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._isString)(startValue) && ~startValue.indexOf("random(") && (startValue = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._replaceRandom)(startValue));
               (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(startValue + "") || (startValue += _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[p] || (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(_get(target, p)) || ""); // for cases when someone passes in a unitless value like {x: 100}; if we try setting translate(100, 0px) it won't work.
     
               (startValue + "").charAt(1) === "=" && (startValue = _get(target, p)); // can't work with relative values
             } else {
               startValue = _get(target, p);
             }
     
             startNum = parseFloat(startValue);
             relative = type === "string" && endValue.charAt(1) === "=" && endValue.substr(0, 2);
             relative && (endValue = endValue.substr(2));
             endNum = parseFloat(endValue);
     
             if (p in _propertyAliases) {
               if (p === "autoAlpha") {
                 //special case where we control the visibility along with opacity. We still allow the opacity value to pass through and get tweened.
                 if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) {
                   //if visibility is initially set to "hidden", we should interpret that as intent to make opacity 0 (a convenience)
                   startNum = 0;
                 }
     
                 _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
               }
     
               if (p !== "scale" && p !== "transform") {
                 p = _propertyAliases[p];
                 ~p.indexOf(",") && (p = p.split(",")[0]);
               }
             }
     
             isTransformRelated = p in _transformProps; //--- TRANSFORM-RELATED ---
     
             if (isTransformRelated) {
               if (!transformPropTween) {
                 cache = target._gsap;
                 cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform); // if, for example, gsap.set(... {transform:"translateX(50vw)"}), the _get() call doesn't parse the transform, thus cache.renderTransform won't be set yet so force the parsing of the transform here.
     
                 smooth = vars.smoothOrigin !== false && cache.smooth;
                 transformPropTween = this._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1); //the first time through, create the rendering PropTween so that it runs LAST (in the linked list, we keep adding to the beginning)
     
                 transformPropTween.dep = 1; //flag it as dependent so that if things get killed/overwritten and this is the only PropTween left, we can safely kill the whole tween.
               }
     
               if (p === "scale") {
                 this._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(this._pt, cache, "scaleY", cache.scaleY, (relative ? (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._parseRelative)(cache.scaleY, relative + endNum) : endNum) - cache.scaleY || 0);
                 props.push("scaleY", p);
                 p += "X";
               } else if (p === "transformOrigin") {
                 endValue = _convertKeywordsToPercentages(endValue); //in case something like "left top" or "bottom right" is passed in. Convert to percentages.
     
                 if (cache.svg) {
                   _applySVGOrigin(target, endValue, 0, smooth, 0, this);
                 } else {
                   endUnit = parseFloat(endValue.split(" ")[2]) || 0; //handle the zOrigin separately!
     
                   endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);
     
                   _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
                 }
     
                 continue;
               } else if (p === "svgOrigin") {
                 _applySVGOrigin(target, endValue, 1, smooth, 0, this);
     
                 continue;
               } else if (p in _rotationalProperties) {
                 _addRotationalPropTween(this, cache, p, startNum, relative ? (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._parseRelative)(startNum, relative + endValue) : endValue);
     
                 continue;
               } else if (p === "smoothOrigin") {
                 _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);
     
                 continue;
               } else if (p === "force3D") {
                 cache[p] = endValue;
                 continue;
               } else if (p === "transform") {
                 _addRawTransformPTs(this, endValue, target);
     
                 continue;
               }
             } else if (!(p in style)) {
               p = _checkPropPrefix(p) || p;
             }
     
             if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
               startUnit = (startValue + "").substr((startNum + "").length);
               endNum || (endNum = 0); // protect against NaN
     
               endUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(endValue) || (p in _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units ? _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[p] : startUnit);
               startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
               this._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(this._pt, isTransformRelated ? cache : style, p, startNum, (relative ? (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._parseRelative)(startNum, relative + endNum) : endNum) - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
               this._pt.u = endUnit || 0;
     
               if (startUnit !== endUnit && endUnit !== "%") {
                 //when the tween goes all the way back to the beginning, we need to revert it to the OLD/ORIGINAL value (with those units). We record that as a "b" (beginning) property and point to a render method that handles that. (performance optimization)
                 this._pt.b = startValue;
                 this._pt.r = _renderCSSPropWithBeginning;
               }
             } else if (!(p in style)) {
               if (p in target) {
                 //maybe it's not a style - it could be a property added directly to an element in which case we'll try to animate that.
                 this.add(target, p, startValue || target[p], relative ? relative + endValue : endValue, index, targets);
               } else {
                 (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._missingPlugin)(p, endValue);
     
                 continue;
               }
             } else {
               _tweenComplexCSSString.call(this, target, p, startValue, relative ? relative + endValue : endValue);
             }
     
             props.push(p);
           }
         }
     
         hasPriority && (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._sortPropTweensByPriority)(this);
       },
       get: _get,
       aliases: _propertyAliases,
       getSetter: function getSetter(target, property, plugin) {
         //returns a setter function that accepts target, property, value and applies it accordingly. Remember, properties like "x" aren't as simple as target.style.property = value because they've got to be applied to a proxy object and then merged into a transform string in a renderer.
         var p = _propertyAliases[property];
         p && p.indexOf(",") < 0 && (property = p);
         return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !(0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._isUndefined)(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._getSetter)(target, property);
       },
       core: {
         _removeProperty: _removeProperty,
         _getMatrix: _getMatrix
       }
     };
     _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.utils.checkPrefix = _checkPropPrefix;
     
     (function (positionAndScale, rotation, others, aliases) {
       var all = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)(positionAndScale + "," + rotation + "," + others, function (name) {
         _transformProps[name] = 1;
       });
     
       (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)(rotation, function (name) {
         _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[name] = "deg";
         _rotationalProperties[name] = 1;
       });
     
       _propertyAliases[all[13]] = positionAndScale + "," + rotation;
     
       (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)(aliases, function (name) {
         var split = name.split(":");
         _propertyAliases[split[1]] = all[split[0]];
       });
     })("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
     
     (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (name) {
       _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[name] = "px";
     });
     
     _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(CSSPlugin);
     
     
     /***/ }),
     
     /***/ "./node_modules/gsap/gsap-core.js":
     /*!****************************************!*\
       !*** ./node_modules/gsap/gsap-core.js ***!
       \****************************************/
     /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
     
     "use strict";
     __webpack_require__.r(__webpack_exports__);
     /* harmony export */ __webpack_require__.d(__webpack_exports__, {
     /* harmony export */   "Animation": () => (/* binding */ Animation),
     /* harmony export */   "Back": () => (/* binding */ Back),
     /* harmony export */   "Bounce": () => (/* binding */ Bounce),
     /* harmony export */   "Circ": () => (/* binding */ Circ),
     /* harmony export */   "Cubic": () => (/* binding */ Cubic),
     /* harmony export */   "Elastic": () => (/* binding */ Elastic),
     /* harmony export */   "Expo": () => (/* binding */ Expo),
     /* harmony export */   "GSCache": () => (/* binding */ GSCache),
     /* harmony export */   "Linear": () => (/* binding */ Linear),
     /* harmony export */   "Power0": () => (/* binding */ Power0),
     /* harmony export */   "Power1": () => (/* binding */ Power1),
     /* harmony export */   "Power2": () => (/* binding */ Power2),
     /* harmony export */   "Power3": () => (/* binding */ Power3),
     /* harmony export */   "Power4": () => (/* binding */ Power4),
     /* harmony export */   "PropTween": () => (/* binding */ PropTween),
     /* harmony export */   "Quad": () => (/* binding */ Quad),
     /* harmony export */   "Quart": () => (/* binding */ Quart),
     /* harmony export */   "Quint": () => (/* binding */ Quint),
     /* harmony export */   "Sine": () => (/* binding */ Sine),
     /* harmony export */   "SteppedEase": () => (/* binding */ SteppedEase),
     /* harmony export */   "Strong": () => (/* binding */ Strong),
     /* harmony export */   "Timeline": () => (/* binding */ Timeline),
     /* harmony export */   "TimelineLite": () => (/* binding */ Timeline),
     /* harmony export */   "TimelineMax": () => (/* binding */ Timeline),
     /* harmony export */   "Tween": () => (/* binding */ Tween),
     /* harmony export */   "TweenLite": () => (/* binding */ Tween),
     /* harmony export */   "TweenMax": () => (/* binding */ Tween),
     /* harmony export */   "_checkPlugin": () => (/* binding */ _checkPlugin),
     /* harmony export */   "_colorExp": () => (/* binding */ _colorExp),
     /* harmony export */   "_colorStringFilter": () => (/* binding */ _colorStringFilter),
     /* harmony export */   "_config": () => (/* binding */ _config),
     /* harmony export */   "_forEachName": () => (/* binding */ _forEachName),
     /* harmony export */   "_getCache": () => (/* binding */ _getCache),
     /* harmony export */   "_getProperty": () => (/* binding */ _getProperty),
     /* harmony export */   "_getSetter": () => (/* binding */ _getSetter),
     /* harmony export */   "_isString": () => (/* binding */ _isString),
     /* harmony export */   "_isUndefined": () => (/* binding */ _isUndefined),
     /* harmony export */   "_missingPlugin": () => (/* binding */ _missingPlugin),
     /* harmony export */   "_numExp": () => (/* binding */ _numExp),
     /* harmony export */   "_numWithUnitExp": () => (/* binding */ _numWithUnitExp),
     /* harmony export */   "_parseRelative": () => (/* binding */ _parseRelative),
     /* harmony export */   "_plugins": () => (/* binding */ _plugins),
     /* harmony export */   "_relExp": () => (/* binding */ _relExp),
     /* harmony export */   "_removeLinkedListItem": () => (/* binding */ _removeLinkedListItem),
     /* harmony export */   "_renderComplexString": () => (/* binding */ _renderComplexString),
     /* harmony export */   "_replaceRandom": () => (/* binding */ _replaceRandom),
     /* harmony export */   "_round": () => (/* binding */ _round),
     /* harmony export */   "_roundModifier": () => (/* binding */ _roundModifier),
     /* harmony export */   "_setDefaults": () => (/* binding */ _setDefaults),
     /* harmony export */   "_sortPropTweensByPriority": () => (/* binding */ _sortPropTweensByPriority),
     /* harmony export */   "_ticker": () => (/* binding */ _ticker),
     /* harmony export */   "clamp": () => (/* binding */ clamp),
     /* harmony export */   "default": () => (/* binding */ gsap),
     /* harmony export */   "distribute": () => (/* binding */ distribute),
     /* harmony export */   "getUnit": () => (/* binding */ getUnit),
     /* harmony export */   "gsap": () => (/* binding */ gsap),
     /* harmony export */   "interpolate": () => (/* binding */ interpolate),
     /* harmony export */   "mapRange": () => (/* binding */ mapRange),
     /* harmony export */   "normalize": () => (/* binding */ normalize),
     /* harmony export */   "pipe": () => (/* binding */ pipe),
     /* harmony export */   "random": () => (/* binding */ random),
     /* harmony export */   "selector": () => (/* binding */ selector),
     /* harmony export */   "shuffle": () => (/* binding */ shuffle),
     /* harmony export */   "snap": () => (/* binding */ snap),
     /* harmony export */   "splitColor": () => (/* binding */ splitColor),
     /* harmony export */   "toArray": () => (/* binding */ toArray),
     /* harmony export */   "unitize": () => (/* binding */ unitize),
     /* harmony export */   "wrap": () => (/* binding */ wrap),
     /* harmony export */   "wrapYoyo": () => (/* binding */ wrapYoyo)
     /* harmony export */ });
     function _assertThisInitialized(self) {
       if (self === void 0) {
         throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
       }
     
       return self;
     }
     
     function _inheritsLoose(subClass, superClass) {
       subClass.prototype = Object.create(superClass.prototype);
       subClass.prototype.constructor = subClass;
       subClass.__proto__ = superClass;
     }
     /*!
      * GSAP 3.10.4
      * https://greensock.com
      *
      * @license Copyright 2008-2022, GreenSock. All rights reserved.
      * Subject to the terms at https://greensock.com/standard-license or for
      * Club GreenSock members, the agreement issued with that membership.
      * @author: Jack Doyle, jack@greensock.com
     */
     
     /* eslint-disable */
     
     
     var _config = {
       autoSleep: 120,
       force3D: "auto",
       nullTargetWarn: 1,
       units: {
         lineHeight: ""
       }
     },
         _defaults = {
       duration: .5,
       overwrite: false,
       delay: 0
     },
         _suppressOverwrites,
         _bigNum = 1e8,
         _tinyNum = 1 / _bigNum,
         _2PI = Math.PI * 2,
         _HALF_PI = _2PI / 4,
         _gsID = 0,
         _sqrt = Math.sqrt,
         _cos = Math.cos,
         _sin = Math.sin,
         _isString = function _isString(value) {
       return typeof value === "string";
     },
         _isFunction = function _isFunction(value) {
       return typeof value === "function";
     },
         _isNumber = function _isNumber(value) {
       return typeof value === "number";
     },
         _isUndefined = function _isUndefined(value) {
       return typeof value === "undefined";
     },
         _isObject = function _isObject(value) {
       return typeof value === "object";
     },
         _isNotFalse = function _isNotFalse(value) {
       return value !== false;
     },
         _windowExists = function _windowExists() {
       return typeof window !== "undefined";
     },
         _isFuncOrString = function _isFuncOrString(value) {
       return _isFunction(value) || _isString(value);
     },
         _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function () {},
         // note: IE10 has ArrayBuffer, but NOT ArrayBuffer.isView().
     _isArray = Array.isArray,
         _strictNumExp = /(?:-?\.?\d|\.)+/gi,
         //only numbers (including negatives and decimals) but NOT relative values.
     _numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
         //finds any numbers, including ones that start with += or -=, negative numbers, and ones in scientific notation like 1e-8.
     _numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
         _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
         //duplicate so that while we're looping through matches from exec(), it doesn't contaminate the lastIndex of _numExp which we use to search for colors too.
     _relExp = /[+-]=-?[.\d]+/,
         _delimitedValueExp = /[^,'"\[\]\s]+/gi,
         // previously /[#\-+.]*\b[a-z\d\-=+%.]+/gi but didn't catch special characters.
     _unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
         _globalTimeline,
         _win,
         _coreInitted,
         _doc,
         _globals = {},
         _installScope = {},
         _coreReady,
         _install = function _install(scope) {
       return (_installScope = _merge(scope, _globals)) && gsap;
     },
         _missingPlugin = function _missingPlugin(property, value) {
       return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
     },
         _warn = function _warn(message, suppress) {
       return !suppress && console.warn(message);
     },
         _addGlobal = function _addGlobal(name, obj) {
       return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
     },
         _emptyFunc = function _emptyFunc() {
       return 0;
     },
         _reservedProps = {},
         _lazyTweens = [],
         _lazyLookup = {},
         _lastRenderedFrame,
         _plugins = {},
         _effects = {},
         _nextGCFrame = 30,
         _harnessPlugins = [],
         _callbackNames = "",
         _harness = function _harness(targets) {
       var target = targets[0],
           harnessPlugin,
           i;
       _isObject(target) || _isFunction(target) || (targets = [targets]);
     
       if (!(harnessPlugin = (target._gsap || {}).harness)) {
         // find the first target with a harness. We assume targets passed into an animation will be of similar type, meaning the same kind of harness can be used for them all (performance optimization)
         i = _harnessPlugins.length;
     
         while (i-- && !_harnessPlugins[i].targetTest(target)) {}
     
         harnessPlugin = _harnessPlugins[i];
       }
     
       i = targets.length;
     
       while (i--) {
         targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
       }
     
       return targets;
     },
         _getCache = function _getCache(target) {
       return target._gsap || _harness(toArray(target))[0]._gsap;
     },
         _getProperty = function _getProperty(target, property, v) {
       return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
     },
         _forEachName = function _forEachName(names, func) {
       return (names = names.split(",")).forEach(func) || names;
     },
         //split a comma-delimited list of names into an array, then run a forEach() function and return the split array (this is just a way to consolidate/shorten some code).
     _round = function _round(value) {
       return Math.round(value * 100000) / 100000 || 0;
     },
         _roundPrecise = function _roundPrecise(value) {
       return Math.round(value * 10000000) / 10000000 || 0;
     },
         // increased precision mostly for timing values.
     _parseRelative = function _parseRelative(start, value) {
       var operator = value.charAt(0),
           end = parseFloat(value.substr(2));
       start = parseFloat(start);
       return operator === "+" ? start + end : operator === "-" ? start - end : operator === "*" ? start * end : start / end;
     },
         _arrayContainsAny = function _arrayContainsAny(toSearch, toFind) {
       //searches one array to find matches for any of the items in the toFind array. As soon as one is found, it returns true. It does NOT return all the matches; it's simply a boolean search.
       var l = toFind.length,
           i = 0;
     
       for (; toSearch.indexOf(toFind[i]) < 0 && ++i < l;) {}
     
       return i < l;
     },
         _lazyRender = function _lazyRender() {
       var l = _lazyTweens.length,
           a = _lazyTweens.slice(0),
           i,
           tween;
     
       _lazyLookup = {};
       _lazyTweens.length = 0;
     
       for (i = 0; i < l; i++) {
         tween = a[i];
         tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
       }
     },
         _lazySafeRender = function _lazySafeRender(animation, time, suppressEvents, force) {
       _lazyTweens.length && _lazyRender();
       animation.render(time, suppressEvents, force);
       _lazyTweens.length && _lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when someone calls seek() or time() or progress(), they expect an immediate render.
     },
         _numericIfPossible = function _numericIfPossible(value) {
       var n = parseFloat(value);
       return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString(value) ? value.trim() : value;
     },
         _passThrough = function _passThrough(p) {
       return p;
     },
         _setDefaults = function _setDefaults(obj, defaults) {
       for (var p in defaults) {
         p in obj || (obj[p] = defaults[p]);
       }
     
       return obj;
     },
         _setKeyframeDefaults = function _setKeyframeDefaults(excludeDuration) {
       return function (obj, defaults) {
         for (var p in defaults) {
           p in obj || p === "duration" && excludeDuration || p === "ease" || (obj[p] = defaults[p]);
         }
       };
     },
         _merge = function _merge(base, toMerge) {
       for (var p in toMerge) {
         base[p] = toMerge[p];
       }
     
       return base;
     },
         _mergeDeep = function _mergeDeep(base, toMerge) {
       for (var p in toMerge) {
         p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject(toMerge[p]) ? _mergeDeep(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
       }
     
       return base;
     },
         _copyExcluding = function _copyExcluding(obj, excluding) {
       var copy = {},
           p;
     
       for (p in obj) {
         p in excluding || (copy[p] = obj[p]);
       }
     
       return copy;
     },
         _inheritDefaults = function _inheritDefaults(vars) {
       var parent = vars.parent || _globalTimeline,
           func = vars.keyframes ? _setKeyframeDefaults(_isArray(vars.keyframes)) : _setDefaults;
     
       if (_isNotFalse(vars.inherit)) {
         while (parent) {
           func(vars, parent.vars.defaults);
           parent = parent.parent || parent._dp;
         }
       }
     
       return vars;
     },
         _arraysMatch = function _arraysMatch(a1, a2) {
       var i = a1.length,
           match = i === a2.length;
     
       while (match && i-- && a1[i] === a2[i]) {}
     
       return i < 0;
     },
         _addLinkedListItem = function _addLinkedListItem(parent, child, firstProp, lastProp, sortBy) {
       if (firstProp === void 0) {
         firstProp = "_first";
       }
     
       if (lastProp === void 0) {
         lastProp = "_last";
       }
     
       var prev = parent[lastProp],
           t;
     
       if (sortBy) {
         t = child[sortBy];
     
         while (prev && prev[sortBy] > t) {
           prev = prev._prev;
         }
       }
     
       if (prev) {
         child._next = prev._next;
         prev._next = child;
       } else {
         child._next = parent[firstProp];
         parent[firstProp] = child;
       }
     
       if (child._next) {
         child._next._prev = child;
       } else {
         parent[lastProp] = child;
       }
     
       child._prev = prev;
       child.parent = child._dp = parent;
       return child;
     },
         _removeLinkedListItem = function _removeLinkedListItem(parent, child, firstProp, lastProp) {
       if (firstProp === void 0) {
         firstProp = "_first";
       }
     
       if (lastProp === void 0) {
         lastProp = "_last";
       }
     
       var prev = child._prev,
           next = child._next;
     
       if (prev) {
         prev._next = next;
       } else if (parent[firstProp] === child) {
         parent[firstProp] = next;
       }
     
       if (next) {
         next._prev = prev;
       } else if (parent[lastProp] === child) {
         parent[lastProp] = prev;
       }
     
       child._next = child._prev = child.parent = null; // don't delete the _dp just so we can revert if necessary. But parent should be null to indicate the item isn't in a linked list.
     },
         _removeFromParent = function _removeFromParent(child, onlyIfParentHasAutoRemove) {
       child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove(child);
       child._act = 0;
     },
         _uncache = function _uncache(animation, child) {
       if (animation && (!child || child._end > animation._dur || child._start < 0)) {
         // performance optimization: if a child animation is passed in we should only uncache if that child EXTENDS the animation (its end time is beyond the end)
         var a = animation;
     
         while (a) {
           a._dirty = 1;
           a = a.parent;
         }
       }
     
       return animation;
     },
         _recacheAncestors = function _recacheAncestors(animation) {
       var parent = animation.parent;
     
       while (parent && parent.parent) {
         //sometimes we must force a re-sort of all children and update the duration/totalDuration of all ancestor timelines immediately in case, for example, in the middle of a render loop, one tween alters another tween's timeScale which shoves its startTime before 0, forcing the parent timeline to shift around and shiftChildren() which could affect that next tween's render (startTime). Doesn't matter for the root timeline though.
         parent._dirty = 1;
         parent.totalDuration();
         parent = parent.parent;
       }
     
       return animation;
     },
         _hasNoPausedAncestors = function _hasNoPausedAncestors(animation) {
       return !animation || animation._ts && _hasNoPausedAncestors(animation.parent);
     },
         _elapsedCycleDuration = function _elapsedCycleDuration(animation) {
       return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
     },
         // feed in the totalTime and cycleDuration and it'll return the cycle (iteration minus 1) and if the playhead is exactly at the very END, it will NOT bump up to the next cycle.
     _animationCycle = function _animationCycle(tTime, cycleDuration) {
       var whole = Math.floor(tTime /= cycleDuration);
       return tTime && whole === tTime ? whole - 1 : whole;
     },
         _parentToChildTotalTime = function _parentToChildTotalTime(parentTime, child) {
       return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
     },
         _setEnd = function _setEnd(animation) {
       return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
     },
         _alignPlayhead = function _alignPlayhead(animation, totalTime) {
       // adjusts the animation's _start and _end according to the provided totalTime (only if the parent's smoothChildTiming is true and the animation isn't paused). It doesn't do any rendering or forcing things back into parent timelines, etc. - that's what totalTime() is for.
       var parent = animation._dp;
     
       if (parent && parent.smoothChildTiming && animation._ts) {
         animation._start = _roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));
     
         _setEnd(animation);
     
         parent._dirty || _uncache(parent, animation); //for performance improvement. If the parent's cache is already dirty, it already took care of marking the ancestors as dirty too, so skip the function call here.
       }
     
       return animation;
     },
     
     /*
     _totalTimeToTime = (clampedTotalTime, duration, repeat, repeatDelay, yoyo) => {
         let cycleDuration = duration + repeatDelay,
             time = _round(clampedTotalTime % cycleDuration);
         if (time > duration) {
             time = duration;
         }
         return (yoyo && (~~(clampedTotalTime / cycleDuration) & 1)) ? duration - time : time;
     },
     */
     _postAddChecks = function _postAddChecks(timeline, child) {
       var t;
     
       if (child._time || child._initted && !child._dur) {
         //in case, for example, the _start is moved on a tween that has already rendered. Imagine it's at its end state, then the startTime is moved WAY later (after the end of this timeline), it should render at its beginning.
         t = _parentToChildTotalTime(timeline.rawTime(), child);
     
         if (!child._dur || _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum) {
           child.render(t, true);
         }
       } //if the timeline has already ended but the inserted tween/timeline extends the duration, we should enable this timeline again so that it renders properly. We should also align the playhead with the parent timeline's when appropriate.
     
     
       if (_uncache(timeline, child)._dp && timeline._initted && timeline._time >= timeline._dur && timeline._ts) {
         //in case any of the ancestors had completed but should now be enabled...
         if (timeline._dur < timeline.duration()) {
           t = timeline;
     
           while (t._dp) {
             t.rawTime() >= 0 && t.totalTime(t._tTime); //moves the timeline (shifts its startTime) if necessary, and also enables it. If it's currently zero, though, it may not be scheduled to render until later so there's no need to force it to align with the current playhead position. Only move to catch up with the playhead.
     
             t = t._dp;
           }
         }
     
         timeline._zTime = -_tinyNum; // helps ensure that the next render() will be forced (crossingStart = true in render()), even if the duration hasn't changed (we're adding a child which would need to get rendered). Definitely an edge case. Note: we MUST do this AFTER the loop above where the totalTime() might trigger a render() because this _addToTimeline() method gets called from the Animation constructor, BEFORE tweens even record their targets, etc. so we wouldn't want things to get triggered in the wrong order.
       }
     },
         _addToTimeline = function _addToTimeline(timeline, child, position, skipChecks) {
       child.parent && _removeFromParent(child);
       child._start = _roundPrecise((_isNumber(position) ? position : position || timeline !== _globalTimeline ? _parsePosition(timeline, position, child) : timeline._time) + child._delay);
       child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));
     
       _addLinkedListItem(timeline, child, "_first", "_last", timeline._sort ? "_start" : 0);
     
       _isFromOrFromStart(child) || (timeline._recent = child);
       skipChecks || _postAddChecks(timeline, child);
       return timeline;
     },
         _scrollTrigger = function _scrollTrigger(animation, trigger) {
       return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
     },
         _attemptInitTween = function _attemptInitTween(tween, totalTime, force, suppressEvents) {
       _initTween(tween, totalTime);
     
       if (!tween._initted) {
         return 1;
       }
     
       if (!force && tween._pt && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
         _lazyTweens.push(tween);
     
         tween._lazy = [totalTime, suppressEvents];
         return 1;
       }
     },
         _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart(_ref) {
       var parent = _ref.parent;
       return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart(parent));
     },
         // check parent's _lock because when a timeline repeats/yoyos and does its artificial wrapping, we shouldn't force the ratio back to 0
     _isFromOrFromStart = function _isFromOrFromStart(_ref2) {
       var data = _ref2.data;
       return data === "isFromStart" || data === "isStart";
     },
         _renderZeroDurationTween = function _renderZeroDurationTween(tween, totalTime, suppressEvents, force) {
       var prevRatio = tween.ratio,
           ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1,
           // if the tween or its parent is reversed and the totalTime is 0, we should go to a ratio of 0. Edge case: if a from() or fromTo() stagger tween is placed later in a timeline, the "startAt" zero-duration tween could initially render at a time when the parent timeline's playhead is technically BEFORE where this tween is, so make sure that any "from" and "fromTo" startAt tweens are rendered the first time at a ratio of 1.
       repeatDelay = tween._rDelay,
           tTime = 0,
           pt,
           iteration,
           prevIteration;
     
       if (repeatDelay && tween._repeat) {
         // in case there's a zero-duration tween that has a repeat with a repeatDelay
         tTime = _clamp(0, tween._tDur, totalTime);
         iteration = _animationCycle(tTime, repeatDelay);
         tween._yoyo && iteration & 1 && (ratio = 1 - ratio);
     
         if (iteration !== _animationCycle(tween._tTime, repeatDelay)) {
           // if iteration changed
           prevRatio = 1 - ratio;
           tween.vars.repeatRefresh && tween._initted && tween.invalidate();
         }
       }
     
       if (ratio !== prevRatio || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
         if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents)) {
           // if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately.
           return;
         }
     
         prevIteration = tween._zTime;
         tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0); // when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.
     
         suppressEvents || (suppressEvents = totalTime && !prevIteration); // if it was rendered previously at exactly 0 (_zTime) and now the playhead is moving away, DON'T fire callbacks otherwise they'll seem like duplicates.
     
         tween.ratio = ratio;
         tween._from && (ratio = 1 - ratio);
         tween._time = 0;
         tween._tTime = tTime;
         pt = tween._pt;
     
         while (pt) {
           pt.r(ratio, pt.d);
           pt = pt._next;
         }
     
         tween._startAt && totalTime < 0 && tween._startAt.render(totalTime, true, true);
         tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
         tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");
     
         if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
           ratio && _removeFromParent(tween, 1);
     
           if (!suppressEvents) {
             _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);
     
             tween._prom && tween._prom();
           }
         }
       } else if (!tween._zTime) {
         tween._zTime = totalTime;
       }
     },
         _findNextPauseTween = function _findNextPauseTween(animation, prevTime, time) {
       var child;
     
       if (time > prevTime) {
         child = animation._first;
     
         while (child && child._start <= time) {
           if (child.data === "isPause" && child._start > prevTime) {
             return child;
           }
     
           child = child._next;
         }
       } else {
         child = animation._last;
     
         while (child && child._start >= time) {
           if (child.data === "isPause" && child._start < prevTime) {
             return child;
           }
     
           child = child._prev;
         }
       }
     },
         _setDuration = function _setDuration(animation, duration, skipUncache, leavePlayhead) {
       var repeat = animation._repeat,
           dur = _roundPrecise(duration) || 0,
           totalProgress = animation._tTime / animation._tDur;
       totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
       animation._dur = dur;
       animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
       totalProgress > 0 && !leavePlayhead ? _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress) : animation.parent && _setEnd(animation);
       skipUncache || _uncache(animation.parent, animation);
       return animation;
     },
         _onUpdateTotalDuration = function _onUpdateTotalDuration(animation) {
       return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
     },
         _zeroPosition = {
       _start: 0,
       endTime: _emptyFunc,
       totalDuration: _emptyFunc
     },
         _parsePosition = function _parsePosition(animation, position, percentAnimation) {
       var labels = animation.labels,
           recent = animation._recent || _zeroPosition,
           clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur,
           //in case there's a child that infinitely repeats, users almost never intend for the insertion point of a new child to be based on a SUPER long value like that so we clip it and assume the most recently-added child's endTime should be used instead.
       i,
           offset,
           isPercent;
     
       if (_isString(position) && (isNaN(position) || position in labels)) {
         //if the string is a number like "1", check to see if there's a label with that name, otherwise interpret it as a number (absolute value).
         offset = position.charAt(0);
         isPercent = position.substr(-1) === "%";
         i = position.indexOf("=");
     
         if (offset === "<" || offset === ">") {
           i >= 0 && (position = position.replace(/=/, ""));
           return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
         }
     
         if (i < 0) {
           position in labels || (labels[position] = clippedDuration);
           return labels[position];
         }
     
         offset = parseFloat(position.charAt(i - 1) + position.substr(i + 1));
     
         if (isPercent && percentAnimation) {
           offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
         }
     
         return i > 1 ? _parsePosition(animation, position.substr(0, i - 1), percentAnimation) + offset : clippedDuration + offset;
       }
     
       return position == null ? clippedDuration : +position;
     },
         _createTweenType = function _createTweenType(type, params, timeline) {
       var isLegacy = _isNumber(params[1]),
           varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1),
           vars = params[varsIndex],
           irVars,
           parent;
     
       isLegacy && (vars.duration = params[1]);
       vars.parent = timeline;
     
       if (type) {
         irVars = vars;
         parent = timeline;
     
         while (parent && !("immediateRender" in irVars)) {
           // inheritance hasn't happened yet, but someone may have set a default in an ancestor timeline. We could do vars.immediateRender = _isNotFalse(_inheritDefaults(vars).immediateRender) but that'd exact a slight performance penalty because _inheritDefaults() also runs in the Tween constructor. We're paying a small kb price here to gain speed.
           irVars = parent.vars.defaults || {};
           parent = _isNotFalse(parent.vars.inherit) && parent.parent;
         }
     
         vars.immediateRender = _isNotFalse(irVars.immediateRender);
         type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1]; // "from" vars
       }
     
       return new Tween(params[0], vars, params[varsIndex + 1]);
     },
         _conditionalReturn = function _conditionalReturn(value, func) {
       return value || value === 0 ? func(value) : func;
     },
         _clamp = function _clamp(min, max, value) {
       return value < min ? min : value > max ? max : value;
     },
         getUnit = function getUnit(value, v) {
       return !_isString(value) || !(v = _unitExp.exec(value)) ? "" : v[1];
     },
         // note: protect against padded numbers as strings, like "100.100". That shouldn't return "00" as the unit. If it's numeric, return no unit.
     clamp = function clamp(min, max, value) {
       return _conditionalReturn(value, function (v) {
         return _clamp(min, max, v);
       });
     },
         _slice = [].slice,
         _isArrayLike = function _isArrayLike(value, nonEmpty) {
       return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win;
     },
         _flatten = function _flatten(ar, leaveStrings, accumulator) {
       if (accumulator === void 0) {
         accumulator = [];
       }
     
       return ar.forEach(function (value) {
         var _accumulator;
     
         return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
       }) || accumulator;
     },
         //takes any value and returns an array. If it's a string (and leaveStrings isn't true), it'll use document.querySelectorAll() and convert that to an array. It'll also accept iterables like jQuery objects.
     toArray = function toArray(value, scope, leaveStrings) {
       return _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call((scope || _doc).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
     },
         selector = function selector(value) {
       value = toArray(value)[0] || _warn("Invalid scope") || {};
       return function (v) {
         var el = value.current || value.nativeElement || value;
         return toArray(v, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc.createElement("div") : value);
       };
     },
         shuffle = function shuffle(a) {
       return a.sort(function () {
         return .5 - Math.random();
       });
     },
         // alternative that's a bit faster and more reliably diverse but bigger:   for (let j, v, i = a.length; i; j = Math.floor(Math.random() * i), v = a[--i], a[i] = a[j], a[j] = v); return a;
     //for distributing values across an array. Can accept a number, a function or (most commonly) a function which can contain the following properties: {base, amount, from, ease, grid, axis, length, each}. Returns a function that expects the following parameters: index, target, array. Recognizes the following
     distribute = function distribute(v) {
       if (_isFunction(v)) {
         return v;
       }
     
       var vars = _isObject(v) ? v : {
         each: v
       },
           //n:1 is just to indicate v was a number; we leverage that later to set v according to the length we get. If a number is passed in, we treat it like the old stagger value where 0.1, for example, would mean that things would be distributed with 0.1 between each element in the array rather than a total "amount" that's chunked out among them all.
       ease = _parseEase(vars.ease),
           from = vars.from || 0,
           base = parseFloat(vars.base) || 0,
           cache = {},
           isDecimal = from > 0 && from < 1,
           ratios = isNaN(from) || isDecimal,
           axis = vars.axis,
           ratioX = from,
           ratioY = from;
     
       if (_isString(from)) {
         ratioX = ratioY = {
           center: .5,
           edges: .5,
           end: 1
         }[from] || 0;
       } else if (!isDecimal && ratios) {
         ratioX = from[0];
         ratioY = from[1];
       }
     
       return function (i, target, a) {
         var l = (a || vars).length,
             distances = cache[l],
             originX,
             originY,
             x,
             y,
             d,
             j,
             max,
             min,
             wrapAt;
     
         if (!distances) {
           wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum])[1];
     
           if (!wrapAt) {
             max = -_bigNum;
     
             while (max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l) {}
     
             wrapAt--;
           }
     
           distances = cache[l] = [];
           originX = ratios ? Math.min(wrapAt, l) * ratioX - .5 : from % wrapAt;
           originY = wrapAt === _bigNum ? 0 : ratios ? l * ratioY / wrapAt - .5 : from / wrapAt | 0;
           max = 0;
           min = _bigNum;
     
           for (j = 0; j < l; j++) {
             x = j % wrapAt - originX;
             y = originY - (j / wrapAt | 0);
             distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
             d > max && (max = d);
             d < min && (min = d);
           }
     
           from === "random" && shuffle(distances);
           distances.max = max - min;
           distances.min = min;
           distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
           distances.b = l < 0 ? base - l : base;
           distances.u = getUnit(vars.amount || vars.each) || 0; //unit
     
           ease = ease && l < 0 ? _invertEase(ease) : ease;
         }
     
         l = (distances[i] - distances.min) / distances.max || 0;
         return _roundPrecise(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u; //round in order to work around floating point errors
       };
     },
         _roundModifier = function _roundModifier(v) {
       //pass in 0.1 get a function that'll round to the nearest tenth, or 5 to round to the closest 5, or 0.001 to the closest 1000th, etc.
       var p = Math.pow(10, ((v + "").split(".")[1] || "").length); //to avoid floating point math errors (like 24 * 0.1 == 2.4000000000000004), we chop off at a specific number of decimal places (much faster than toFixed())
     
       return function (raw) {
         var n = Math.round(parseFloat(raw) / v) * v * p;
         return (n - n % 1) / p + (_isNumber(raw) ? 0 : getUnit(raw)); // n - n % 1 replaces Math.floor() in order to handle negative values properly. For example, Math.floor(-150.00000000000003) is 151!
       };
     },
         snap = function snap(snapTo, value) {
       var isArray = _isArray(snapTo),
           radius,
           is2D;
     
       if (!isArray && _isObject(snapTo)) {
         radius = isArray = snapTo.radius || _bigNum;
     
         if (snapTo.values) {
           snapTo = toArray(snapTo.values);
     
           if (is2D = !_isNumber(snapTo[0])) {
             radius *= radius; //performance optimization so we don't have to Math.sqrt() in the loop.
           }
         } else {
           snapTo = _roundModifier(snapTo.increment);
         }
       }
     
       return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function (raw) {
         is2D = snapTo(raw);
         return Math.abs(is2D - raw) <= radius ? is2D : raw;
       } : function (raw) {
         var x = parseFloat(is2D ? raw.x : raw),
             y = parseFloat(is2D ? raw.y : 0),
             min = _bigNum,
             closest = 0,
             i = snapTo.length,
             dx,
             dy;
     
         while (i--) {
           if (is2D) {
             dx = snapTo[i].x - x;
             dy = snapTo[i].y - y;
             dx = dx * dx + dy * dy;
           } else {
             dx = Math.abs(snapTo[i] - x);
           }
     
           if (dx < min) {
             min = dx;
             closest = i;
           }
         }
     
         closest = !radius || min <= radius ? snapTo[closest] : raw;
         return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
       });
     },
         random = function random(min, max, roundingIncrement, returnFunction) {
       return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function () {
         return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * .99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
       });
     },
         pipe = function pipe() {
       for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
         functions[_key] = arguments[_key];
       }
     
       return function (value) {
         return functions.reduce(function (v, f) {
           return f(v);
         }, value);
       };
     },
         unitize = function unitize(func, unit) {
       return function (value) {
         return func(parseFloat(value)) + (unit || getUnit(value));
       };
     },
         normalize = function normalize(min, max, value) {
       return mapRange(min, max, 0, 1, value);
     },
         _wrapArray = function _wrapArray(a, wrapper, value) {
       return _conditionalReturn(value, function (index) {
         return a[~~wrapper(index)];
       });
     },
         wrap = function wrap(min, max, value) {
       // NOTE: wrap() CANNOT be an arrow function! A very odd compiling bug causes problems (unrelated to GSAP).
       var range = max - min;
       return _isArray(min) ? _wrapArray(min, wrap(0, min.length), max) : _conditionalReturn(value, function (value) {
         return (range + (value - min) % range) % range + min;
       });
     },
         wrapYoyo = function wrapYoyo(min, max, value) {
       var range = max - min,
           total = range * 2;
       return _isArray(min) ? _wrapArray(min, wrapYoyo(0, min.length - 1), max) : _conditionalReturn(value, function (value) {
         value = (total + (value - min) % total) % total || 0;
         return min + (value > range ? total - value : value);
       });
     },
         _replaceRandom = function _replaceRandom(value) {
       //replaces all occurrences of random(...) in a string with the calculated random value. can be a range like random(-100, 100, 5) or an array like random([0, 100, 500])
       var prev = 0,
           s = "",
           i,
           nums,
           end,
           isArray;
     
       while (~(i = value.indexOf("random(", prev))) {
         end = value.indexOf(")", i);
         isArray = value.charAt(i + 7) === "[";
         nums = value.substr(i + 7, end - i - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
         s += value.substr(prev, i - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
         prev = end + 1;
       }
     
       return s + value.substr(prev, value.length - prev);
     },
         mapRange = function mapRange(inMin, inMax, outMin, outMax, value) {
       var inRange = inMax - inMin,
           outRange = outMax - outMin;
       return _conditionalReturn(value, function (value) {
         return outMin + ((value - inMin) / inRange * outRange || 0);
       });
     },
         interpolate = function interpolate(start, end, progress, mutate) {
       var func = isNaN(start + end) ? 0 : function (p) {
         return (1 - p) * start + p * end;
       };
     
       if (!func) {
         var isString = _isString(start),
             master = {},
             p,
             i,
             interpolators,
             l,
             il;
     
         progress === true && (mutate = 1) && (progress = null);
     
         if (isString) {
           start = {
             p: start
           };
           end = {
             p: end
           };
         } else if (_isArray(start) && !_isArray(end)) {
           interpolators = [];
           l = start.length;
           il = l - 2;
     
           for (i = 1; i < l; i++) {
             interpolators.push(interpolate(start[i - 1], start[i])); //build the interpolators up front as a performance optimization so that when the function is called many times, it can just reuse them.
           }
     
           l--;
     
           func = function func(p) {
             p *= l;
             var i = Math.min(il, ~~p);
             return interpolators[i](p - i);
           };
     
           progress = end;
         } else if (!mutate) {
           start = _merge(_isArray(start) ? [] : {}, start);
         }
     
         if (!interpolators) {
           for (p in end) {
             _addPropTween.call(master, start, p, "get", end[p]);
           }
     
           func = function func(p) {
             return _renderPropTweens(p, master) || (isString ? start.p : start);
           };
         }
       }
     
       return _conditionalReturn(progress, func);
     },
         _getLabelInDirection = function _getLabelInDirection(timeline, fromTime, backward) {
       //used for nextLabel() and previousLabel()
       var labels = timeline.labels,
           min = _bigNum,
           p,
           distance,
           label;
     
       for (p in labels) {
         distance = labels[p] - fromTime;
     
         if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
           label = p;
           min = distance;
         }
       }
     
       return label;
     },
         _callback = function _callback(animation, type, executeLazyFirst) {
       var v = animation.vars,
           callback = v[type],
           params,
           scope;
     
       if (!callback) {
         return;
       }
     
       params = v[type + "Params"];
       scope = v.callbackScope || animation;
       executeLazyFirst && _lazyTweens.length && _lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onUpdate on a timeline that reports/checks tweened values.
     
       return params ? callback.apply(scope, params) : callback.call(scope);
     },
         _interrupt = function _interrupt(animation) {
       _removeFromParent(animation);
     
       animation.scrollTrigger && animation.scrollTrigger.kill(false);
       animation.progress() < 1 && _callback(animation, "onInterrupt");
       return animation;
     },
         _quickTween,
         _createPlugin = function _createPlugin(config) {
       config = !config.name && config["default"] || config; //UMD packaging wraps things oddly, so for example MotionPathHelper becomes {MotionPathHelper:MotionPathHelper, default:MotionPathHelper}.
     
       var name = config.name,
           isFunc = _isFunction(config),
           Plugin = name && !isFunc && config.init ? function () {
         this._props = [];
       } : config,
           //in case someone passes in an object that's not a plugin, like CustomEase
       instanceDefaults = {
         init: _emptyFunc,
         render: _renderPropTweens,
         add: _addPropTween,
         kill: _killPropTweensOf,
         modifier: _addPluginModifier,
         rawVars: 0
       },
           statics = {
         targetTest: 0,
         get: 0,
         getSetter: _getSetter,
         aliases: {},
         register: 0
       };
     
       _wake();
     
       if (config !== Plugin) {
         if (_plugins[name]) {
           return;
         }
     
         _setDefaults(Plugin, _setDefaults(_copyExcluding(config, instanceDefaults), statics)); //static methods
     
     
         _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config, statics))); //instance methods
     
     
         _plugins[Plugin.prop = name] = Plugin;
     
         if (config.targetTest) {
           _harnessPlugins.push(Plugin);
     
           _reservedProps[name] = 1;
         }
     
         name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin"; //for the global name. "motionPath" should become MotionPathPlugin
       }
     
       _addGlobal(name, Plugin);
     
       config.register && config.register(gsap, Plugin, PropTween);
     },
     
     /*
      * --------------------------------------------------------------------------------------
      * COLORS
      * --------------------------------------------------------------------------------------
      */
     _255 = 255,
         _colorLookup = {
       aqua: [0, _255, _255],
       lime: [0, _255, 0],
       silver: [192, 192, 192],
       black: [0, 0, 0],
       maroon: [128, 0, 0],
       teal: [0, 128, 128],
       blue: [0, 0, _255],
       navy: [0, 0, 128],
       white: [_255, _255, _255],
       olive: [128, 128, 0],
       yellow: [_255, _255, 0],
       orange: [_255, 165, 0],
       gray: [128, 128, 128],
       purple: [128, 0, 128],
       green: [0, 128, 0],
       red: [_255, 0, 0],
       pink: [_255, 192, 203],
       cyan: [0, _255, _255],
       transparent: [_255, _255, _255, 0]
     },
         // possible future idea to replace the hard-coded color name values - put this in the ticker.wake() where we set the _doc:
     // let ctx = _doc.createElement("canvas").getContext("2d");
     // _forEachName("aqua,lime,silver,black,maroon,teal,blue,navy,white,olive,yellow,orange,gray,purple,green,red,pink,cyan", color => {ctx.fillStyle = color; _colorLookup[color] = splitColor(ctx.fillStyle)});
     _hue = function _hue(h, m1, m2) {
       h += h < 0 ? 1 : h > 1 ? -1 : 0;
       return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < .5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + .5 | 0;
     },
         splitColor = function splitColor(v, toHSL, forceAlpha) {
       var a = !v ? _colorLookup.black : _isNumber(v) ? [v >> 16, v >> 8 & _255, v & _255] : 0,
           r,
           g,
           b,
           h,
           s,
           l,
           max,
           min,
           d,
           wasHSL;
     
       if (!a) {
         if (v.substr(-1) === ",") {
           //sometimes a trailing comma is included and we should chop it off (typically from a comma-delimited list of values like a textShadow:"2px 2px 2px blue, 5px 5px 5px rgb(255,0,0)" - in this example "blue," has a trailing comma. We could strip it out inside parseComplex() but we'd need to do it to the beginning and ending values plus it wouldn't provide protection from other potential scenarios like if the user passes in a similar value.
           v = v.substr(0, v.length - 1);
         }
     
         if (_colorLookup[v]) {
           a = _colorLookup[v];
         } else if (v.charAt(0) === "#") {
           if (v.length < 6) {
             //for shorthand like #9F0 or #9F0F (could have alpha)
             r = v.charAt(1);
             g = v.charAt(2);
             b = v.charAt(3);
             v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
           }
     
           if (v.length === 9) {
             // hex with alpha, like #fd5e53ff
             a = parseInt(v.substr(1, 6), 16);
             return [a >> 16, a >> 8 & _255, a & _255, parseInt(v.substr(7), 16) / 255];
           }
     
           v = parseInt(v.substr(1), 16);
           a = [v >> 16, v >> 8 & _255, v & _255];
         } else if (v.substr(0, 3) === "hsl") {
           a = wasHSL = v.match(_strictNumExp);
     
           if (!toHSL) {
             h = +a[0] % 360 / 360;
             s = +a[1] / 100;
             l = +a[2] / 100;
             g = l <= .5 ? l * (s + 1) : l + s - l * s;
             r = l * 2 - g;
             a.length > 3 && (a[3] *= 1); //cast as number
     
             a[0] = _hue(h + 1 / 3, r, g);
             a[1] = _hue(h, r, g);
             a[2] = _hue(h - 1 / 3, r, g);
           } else if (~v.indexOf("=")) {
             //if relative values are found, just return the raw strings with the relative prefixes in place.
             a = v.match(_numExp);
             forceAlpha && a.length < 4 && (a[3] = 1);
             return a;
           }
         } else {
           a = v.match(_strictNumExp) || _colorLookup.transparent;
         }
     
         a = a.map(Number);
       }
     
       if (toHSL && !wasHSL) {
         r = a[0] / _255;
         g = a[1] / _255;
         b = a[2] / _255;
         max = Math.max(r, g, b);
         min = Math.min(r, g, b);
         l = (max + min) / 2;
     
         if (max === min) {
           h = s = 0;
         } else {
           d = max - min;
           s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
           h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
           h *= 60;
         }
     
         a[0] = ~~(h + .5);
         a[1] = ~~(s * 100 + .5);
         a[2] = ~~(l * 100 + .5);
       }
     
       forceAlpha && a.length < 4 && (a[3] = 1);
       return a;
     },
         _colorOrderData = function _colorOrderData(v) {
       // strips out the colors from the string, finds all the numeric slots (with units) and returns an array of those. The Array also has a "c" property which is an Array of the index values where the colors belong. This is to help work around issues where there's a mis-matched order of color/numeric data like drop-shadow(#f00 0px 1px 2px) and drop-shadow(0x 1px 2px #f00). This is basically a helper function used in _formatColors()
       var values = [],
           c = [],
           i = -1;
       v.split(_colorExp).forEach(function (v) {
         var a = v.match(_numWithUnitExp) || [];
         values.push.apply(values, a);
         c.push(i += a.length + 1);
       });
       values.c = c;
       return values;
     },
         _formatColors = function _formatColors(s, toHSL, orderMatchData) {
       var result = "",
           colors = (s + result).match(_colorExp),
           type = toHSL ? "hsla(" : "rgba(",
           i = 0,
           c,
           shell,
           d,
           l;
     
       if (!colors) {
         return s;
       }
     
       colors = colors.map(function (color) {
         return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
       });
     
       if (orderMatchData) {
         d = _colorOrderData(s);
         c = orderMatchData.c;
     
         if (c.join(result) !== d.c.join(result)) {
           shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
           l = shell.length - 1;
     
           for (; i < l; i++) {
             result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
           }
         }
       }
     
       if (!shell) {
         shell = s.split(_colorExp);
         l = shell.length - 1;
     
         for (; i < l; i++) {
           result += shell[i] + colors[i];
         }
       }
     
       return result + shell[l];
     },
         _colorExp = function () {
       var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
           //we'll dynamically build this Regular Expression to conserve file size. After building it, it will be able to find rgb(), rgba(), # (hexadecimal), and named color values like red, blue, purple, etc.,
       p;
     
       for (p in _colorLookup) {
         s += "|" + p + "\\b";
       }
     
       return new RegExp(s + ")", "gi");
     }(),
         _hslExp = /hsl[a]?\(/,
         _colorStringFilter = function _colorStringFilter(a) {
       var combined = a.join(" "),
           toHSL;
       _colorExp.lastIndex = 0;
     
       if (_colorExp.test(combined)) {
         toHSL = _hslExp.test(combined);
         a[1] = _formatColors(a[1], toHSL);
         a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1])); // make sure the order of numbers/colors match with the END value.
     
         return true;
       }
     },
     
     /*
      * --------------------------------------------------------------------------------------
      * TICKER
      * --------------------------------------------------------------------------------------
      */
     _tickerActive,
         _ticker = function () {
       var _getTime = Date.now,
           _lagThreshold = 500,
           _adjustedLag = 33,
           _startTime = _getTime(),
           _lastUpdate = _startTime,
           _gap = 1000 / 240,
           _nextTime = _gap,
           _listeners = [],
           _id,
           _req,
           _raf,
           _self,
           _delta,
           _i,
           _tick = function _tick(v) {
         var elapsed = _getTime() - _lastUpdate,
             manual = v === true,
             overlap,
             dispatch,
             time,
             frame;
     
         elapsed > _lagThreshold && (_startTime += elapsed - _adjustedLag);
         _lastUpdate += elapsed;
         time = _lastUpdate - _startTime;
         overlap = time - _nextTime;
     
         if (overlap > 0 || manual) {
           frame = ++_self.frame;
           _delta = time - _self.time * 1000;
           _self.time = time = time / 1000;
           _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
           dispatch = 1;
         }
     
         manual || (_id = _req(_tick)); //make sure the request is made before we dispatch the "tick" event so that timing is maintained. Otherwise, if processing the "tick" requires a bunch of time (like 15ms) and we're using a setTimeout() that's based on 16.7ms, it'd technically take 31.7ms between frames otherwise.
     
         if (dispatch) {
           for (_i = 0; _i < _listeners.length; _i++) {
             // use _i and check _listeners.length instead of a variable because a listener could get removed during the loop, and if that happens to an element less than the current index, it'd throw things off in the loop.
             _listeners[_i](time, _delta, frame, v);
           }
         }
       };
     
       _self = {
         time: 0,
         frame: 0,
         tick: function tick() {
           _tick(true);
         },
         deltaRatio: function deltaRatio(fps) {
           return _delta / (1000 / (fps || 60));
         },
         wake: function wake() {
           if (_coreReady) {
             if (!_coreInitted && _windowExists()) {
               _win = _coreInitted = window;
               _doc = _win.document || {};
               _globals.gsap = gsap;
               (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version);
     
               _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {});
     
               _raf = _win.requestAnimationFrame;
             }
     
             _id && _self.sleep();
     
             _req = _raf || function (f) {
               return setTimeout(f, _nextTime - _self.time * 1000 + 1 | 0);
             };
     
             _tickerActive = 1;
     
             _tick(2);
           }
         },
         sleep: function sleep() {
           (_raf ? _win.cancelAnimationFrame : clearTimeout)(_id);
           _tickerActive = 0;
           _req = _emptyFunc;
         },
         lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
           _lagThreshold = threshold || 1 / _tinyNum; //zero should be interpreted as basically unlimited
     
           _adjustedLag = Math.min(adjustedLag, _lagThreshold, 0);
         },
         fps: function fps(_fps) {
           _gap = 1000 / (_fps || 240);
           _nextTime = _self.time * 1000 + _gap;
         },
         add: function add(callback, once, prioritize) {
           var func = once ? function (t, d, f, v) {
             callback(t, d, f, v);
     
             _self.remove(func);
           } : callback;
     
           _self.remove(callback);
     
           _listeners[prioritize ? "unshift" : "push"](func);
     
           _wake();
     
           return func;
         },
         remove: function remove(callback, i) {
           ~(i = _listeners.indexOf(callback)) && _listeners.splice(i, 1) && _i >= i && _i--;
         },
         _listeners: _listeners
       };
       return _self;
     }(),
         _wake = function _wake() {
       return !_tickerActive && _ticker.wake();
     },
         //also ensures the core classes are initialized.
     
     /*
     * -------------------------------------------------
     * EASING
     * -------------------------------------------------
     */
     _easeMap = {},
         _customEaseExp = /^[\d.\-M][\d.\-,\s]/,
         _quotesExp = /["']/g,
         _parseObjectInString = function _parseObjectInString(value) {
       //takes a string like "{wiggles:10, type:anticipate})" and turns it into a real object. Notice it ends in ")" and includes the {} wrappers. This is because we only use this function for parsing ease configs and prioritized optimization rather than reusability.
       var obj = {},
           split = value.substr(1, value.length - 3).split(":"),
           key = split[0],
           i = 1,
           l = split.length,
           index,
           val,
           parsedVal;
     
       for (; i < l; i++) {
         val = split[i];
         index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
         parsedVal = val.substr(0, index);
         obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
         key = val.substr(index + 1).trim();
       }
     
       return obj;
     },
         _valueInParentheses = function _valueInParentheses(value) {
       var open = value.indexOf("(") + 1,
           close = value.indexOf(")"),
           nested = value.indexOf("(", open);
       return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
     },
         _configEaseFromString = function _configEaseFromString(name) {
       //name can be a string like "elastic.out(1,0.5)", and pass in _easeMap as obj and it'll parse it out and call the actual function like _easeMap.Elastic.easeOut.config(1,0.5). It will also parse custom ease strings as long as CustomEase is loaded and registered (internally as _easeMap._CE).
       var split = (name + "").split("("),
           ease = _easeMap[split[0]];
       return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
     },
         _invertEase = function _invertEase(ease) {
       return function (p) {
         return 1 - ease(1 - p);
       };
     },
         // allow yoyoEase to be set in children and have those affected when the parent/ancestor timeline yoyos.
     _propagateYoyoEase = function _propagateYoyoEase(timeline, isYoyo) {
       var child = timeline._first,
           ease;
     
       while (child) {
         if (child instanceof Timeline) {
           _propagateYoyoEase(child, isYoyo);
         } else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
           if (child.timeline) {
             _propagateYoyoEase(child.timeline, isYoyo);
           } else {
             ease = child._ease;
             child._ease = child._yEase;
             child._yEase = ease;
             child._yoyo = isYoyo;
           }
         }
     
         child = child._next;
       }
     },
         _parseEase = function _parseEase(ease, defaultEase) {
       return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
     },
         _insertEase = function _insertEase(names, easeIn, easeOut, easeInOut) {
       if (easeOut === void 0) {
         easeOut = function easeOut(p) {
           return 1 - easeIn(1 - p);
         };
       }
     
       if (easeInOut === void 0) {
         easeInOut = function easeInOut(p) {
           return p < .5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
         };
       }
     
       var ease = {
         easeIn: easeIn,
         easeOut: easeOut,
         easeInOut: easeInOut
       },
           lowercaseName;
     
       _forEachName(names, function (name) {
         _easeMap[name] = _globals[name] = ease;
         _easeMap[lowercaseName = name.toLowerCase()] = easeOut;
     
         for (var p in ease) {
           _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
         }
       });
     
       return ease;
     },
         _easeInOutFromOut = function _easeInOutFromOut(easeOut) {
       return function (p) {
         return p < .5 ? (1 - easeOut(1 - p * 2)) / 2 : .5 + easeOut((p - .5) * 2) / 2;
       };
     },
         _configElastic = function _configElastic(type, amplitude, period) {
       var p1 = amplitude >= 1 ? amplitude : 1,
           //note: if amplitude is < 1, we simply adjust the period for a more natural feel. Otherwise the math doesn't work right and the curve starts at 1.
       p2 = (period || (type ? .3 : .45)) / (amplitude < 1 ? amplitude : 1),
           p3 = p2 / _2PI * (Math.asin(1 / p1) || 0),
           easeOut = function easeOut(p) {
         return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
       },
           ease = type === "out" ? easeOut : type === "in" ? function (p) {
         return 1 - easeOut(1 - p);
       } : _easeInOutFromOut(easeOut);
     
       p2 = _2PI / p2; //precalculate to optimize
     
       ease.config = function (amplitude, period) {
         return _configElastic(type, amplitude, period);
       };
     
       return ease;
     },
         _configBack = function _configBack(type, overshoot) {
       if (overshoot === void 0) {
         overshoot = 1.70158;
       }
     
       var easeOut = function easeOut(p) {
         return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
       },
           ease = type === "out" ? easeOut : type === "in" ? function (p) {
         return 1 - easeOut(1 - p);
       } : _easeInOutFromOut(easeOut);
     
       ease.config = function (overshoot) {
         return _configBack(type, overshoot);
       };
     
       return ease;
     }; // a cheaper (kb and cpu) but more mild way to get a parameterized weighted ease by feeding in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
     // _weightedEase = ratio => {
     // 	let y = 0.5 + ratio / 2;
     // 	return p => (2 * (1 - p) * p * y + p * p);
     // },
     // a stronger (but more expensive kb/cpu) parameterized weighted ease that lets you feed in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
     // _weightedEaseStrong = ratio => {
     // 	ratio = .5 + ratio / 2;
     // 	let o = 1 / 3 * (ratio < .5 ? ratio : 1 - ratio),
     // 		b = ratio - o,
     // 		c = ratio + o;
     // 	return p => p === 1 ? p : 3 * b * (1 - p) * (1 - p) * p + 3 * c * (1 - p) * p * p + p * p * p;
     // };
     
     
     _forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function (name, i) {
       var power = i < 5 ? i + 1 : i;
     
       _insertEase(name + ",Power" + (power - 1), i ? function (p) {
         return Math.pow(p, power);
       } : function (p) {
         return p;
       }, function (p) {
         return 1 - Math.pow(1 - p, power);
       }, function (p) {
         return p < .5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
       });
     });
     
     _easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;
     
     _insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());
     
     (function (n, c) {
       var n1 = 1 / c,
           n2 = 2 * n1,
           n3 = 2.5 * n1,
           easeOut = function easeOut(p) {
         return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + .75 : p < n3 ? n * (p -= 2.25 / c) * p + .9375 : n * Math.pow(p - 2.625 / c, 2) + .984375;
       };
     
       _insertEase("Bounce", function (p) {
         return 1 - easeOut(1 - p);
       }, easeOut);
     })(7.5625, 2.75);
     
     _insertEase("Expo", function (p) {
       return p ? Math.pow(2, 10 * (p - 1)) : 0;
     });
     
     _insertEase("Circ", function (p) {
       return -(_sqrt(1 - p * p) - 1);
     });
     
     _insertEase("Sine", function (p) {
       return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
     });
     
     _insertEase("Back", _configBack("in"), _configBack("out"), _configBack());
     
     _easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
       config: function config(steps, immediateStart) {
         if (steps === void 0) {
           steps = 1;
         }
     
         var p1 = 1 / steps,
             p2 = steps + (immediateStart ? 0 : 1),
             p3 = immediateStart ? 1 : 0,
             max = 1 - _tinyNum;
         return function (p) {
           return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
         };
       }
     };
     _defaults.ease = _easeMap["quad.out"];
     
     _forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (name) {
       return _callbackNames += name + "," + name + "Params,";
     });
     /*
      * --------------------------------------------------------------------------------------
      * CACHE
      * --------------------------------------------------------------------------------------
      */
     
     
     var GSCache = function GSCache(target, harness) {
       this.id = _gsID++;
       target._gsap = this;
       this.target = target;
       this.harness = harness;
       this.get = harness ? harness.get : _getProperty;
       this.set = harness ? harness.getSetter : _getSetter;
     };
     /*
      * --------------------------------------------------------------------------------------
      * ANIMATION
      * --------------------------------------------------------------------------------------
      */
     
     var Animation = /*#__PURE__*/function () {
       function Animation(vars) {
         this.vars = vars;
         this._delay = +vars.delay || 0;
     
         if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
           // TODO: repeat: Infinity on a timeline's children must flag that timeline internally and affect its totalDuration, otherwise it'll stop in the negative direction when reaching the start.
           this._rDelay = vars.repeatDelay || 0;
           this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
         }
     
         this._ts = 1;
     
         _setDuration(this, +vars.duration, 1, 1);
     
         this.data = vars.data;
         _tickerActive || _ticker.wake();
       }
     
       var _proto = Animation.prototype;
     
       _proto.delay = function delay(value) {
         if (value || value === 0) {
           this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
           this._delay = value;
           return this;
         }
     
         return this._delay;
       };
     
       _proto.duration = function duration(value) {
         return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
       };
     
       _proto.totalDuration = function totalDuration(value) {
         if (!arguments.length) {
           return this._tDur;
         }
     
         this._dirty = 0;
         return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
       };
     
       _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
         _wake();
     
         if (!arguments.length) {
           return this._tTime;
         }
     
         var parent = this._dp;
     
         if (parent && parent.smoothChildTiming && this._ts) {
           _alignPlayhead(this, _totalTime);
     
           !parent._dp || parent.parent || _postAddChecks(parent, this); // edge case: if this is a child of a timeline that already completed, for example, we must re-activate the parent.
           //in case any of the ancestor timelines had completed but should now be enabled, we should reset their totalTime() which will also ensure that they're lined up properly and enabled. Skip for animations that are on the root (wasteful). Example: a TimelineLite.exportRoot() is performed when there's a paused tween on the root, the export will not complete until that tween is unpaused, but imagine a child gets restarted later, after all [unpaused] tweens have completed. The start of that child would get pushed out, but one of the ancestors may have completed.
     
           while (parent && parent.parent) {
             if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) {
               parent.totalTime(parent._tTime, true);
             }
     
             parent = parent.parent;
           }
     
           if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) {
             //if the animation doesn't have a parent, put it back into its last parent (recorded as _dp for exactly cases like this). Limit to parents with autoRemoveChildren (like globalTimeline) so that if the user manually removes an animation from a timeline and then alters its playhead, it doesn't get added back in.
             _addToTimeline(this._dp, this, this._start - this._delay);
           }
         }
     
         if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
           // check for _ptLookup on a Tween instance to ensure it has actually finished being instantiated, otherwise if this.reverse() gets called in the Animation constructor, it could trigger a render() here even though the _targets weren't populated, thus when _init() is called there won't be any PropTweens (it'll act like the tween is non-functional)
           this._ts || (this._pTime = _totalTime); // otherwise, if an animation is paused, then the playhead is moved back to zero, then resumed, it'd revert back to the original time at the pause
           //if (!this._lock) { // avoid endless recursion (not sure we need this yet or if it's worth the performance hit)
           //   this._lock = 1;
     
           _lazySafeRender(this, _totalTime, suppressEvents); //   this._lock = 0;
           //}
     
         }
     
         return this;
       };
     
       _proto.time = function time(value, suppressEvents) {
         return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time; // note: if the modulus results in 0, the playhead could be exactly at the end or the beginning, and we always defer to the END with a non-zero value, otherwise if you set the time() to the very end (duration()), it would render at the START!
       };
     
       _proto.totalProgress = function totalProgress(value, suppressEvents) {
         return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
       };
     
       _proto.progress = function progress(value, suppressEvents) {
         return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
       };
     
       _proto.iteration = function iteration(value, suppressEvents) {
         var cycleDuration = this.duration() + this._rDelay;
     
         return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
       } // potential future addition:
       // isPlayingBackwards() {
       // 	let animation = this,
       // 		orientation = 1; // 1 = forward, -1 = backward
       // 	while (animation) {
       // 		orientation *= animation.reversed() || (animation.repeat() && !(animation.iteration() & 1)) ? -1 : 1;
       // 		animation = animation.parent;
       // 	}
       // 	return orientation < 0;
       // }
       ;
     
       _proto.timeScale = function timeScale(value) {
         if (!arguments.length) {
           return this._rts === -_tinyNum ? 0 : this._rts; // recorded timeScale. Special case: if someone calls reverse() on an animation with timeScale of 0, we assign it -_tinyNum to remember it's reversed.
         }
     
         if (this._rts === value) {
           return this;
         }
     
         var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime; // make sure to do the parentToChildTotalTime() BEFORE setting the new _ts because the old one must be used in that calculation.
         // future addition? Up side: fast and minimal file size. Down side: only works on this animation; if a timeline is reversed, for example, its childrens' onReverse wouldn't get called.
         //(+value < 0 && this._rts >= 0) && _callback(this, "onReverse", true);
         // prioritize rendering where the parent's playhead lines up instead of this._tTime because there could be a tween that's animating another tween's timeScale in the same rendering loop (same parent), thus if the timeScale tween renders first, it would alter _start BEFORE _tTime was set on that tick (in the rendering loop), effectively freezing it until the timeScale tween finishes.
     
         this._rts = +value || 0;
         this._ts = this._ps || value === -_tinyNum ? 0 : this._rts; // _ts is the functional timeScale which would be 0 if the animation is paused.
     
         this.totalTime(_clamp(-this._delay, this._tDur, tTime), true);
     
         _setEnd(this); // if parent.smoothChildTiming was false, the end time didn't get updated in the _alignPlayhead() method, so do it here.
     
     
         return _recacheAncestors(this);
       };
     
       _proto.paused = function paused(value) {
         if (!arguments.length) {
           return this._ps;
         }
     
         if (this._ps !== value) {
           this._ps = value;
     
           if (value) {
             this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()); // if the pause occurs during the delay phase, make sure that's factored in when resuming.
     
             this._ts = this._act = 0; // _ts is the functional timeScale, so a paused tween would effectively have a timeScale of 0. We record the "real" timeScale as _rts (recorded time scale)
           } else {
             _wake();
     
             this._ts = this._rts; //only defer to _pTime (pauseTime) if tTime is zero. Remember, someone could pause() an animation, then scrub the playhead and resume(). If the parent doesn't have smoothChildTiming, we render at the rawTime() because the startTime won't get updated.
     
             this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum)); // edge case: animation.progress(1).pause().play() wouldn't render again because the playhead is already at the end, but the call to totalTime() below will add it back to its parent...and not remove it again (since removing only happens upon rendering at a new time). Offsetting the _tTime slightly is done simply to cause the final render in totalTime() that'll pop it off its timeline (if autoRemoveChildren is true, of course). Check to make sure _zTime isn't -_tinyNum to avoid an edge case where the playhead is pushed to the end but INSIDE a tween/callback, the timeline itself is paused thus halting rendering and leaving a few unrendered. When resuming, it wouldn't render those otherwise.
           }
         }
     
         return this;
       };
     
       _proto.startTime = function startTime(value) {
         if (arguments.length) {
           this._start = value;
           var parent = this.parent || this._dp;
           parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
           return this;
         }
     
         return this._start;
       };
     
       _proto.endTime = function endTime(includeRepeats) {
         return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
       };
     
       _proto.rawTime = function rawTime(wrapRepeats) {
         var parent = this.parent || this._dp; // _dp = detached parent
     
         return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
       };
     
       _proto.globalTime = function globalTime(rawTime) {
         var animation = this,
             time = arguments.length ? rawTime : animation.rawTime();
     
         while (animation) {
           time = animation._start + time / (animation._ts || 1);
           animation = animation._dp;
         }
     
         return time;
       };
     
       _proto.repeat = function repeat(value) {
         if (arguments.length) {
           this._repeat = value === Infinity ? -2 : value;
           return _onUpdateTotalDuration(this);
         }
     
         return this._repeat === -2 ? Infinity : this._repeat;
       };
     
       _proto.repeatDelay = function repeatDelay(value) {
         if (arguments.length) {
           var time = this._time;
           this._rDelay = value;
     
           _onUpdateTotalDuration(this);
     
           return time ? this.time(time) : this;
         }
     
         return this._rDelay;
       };
     
       _proto.yoyo = function yoyo(value) {
         if (arguments.length) {
           this._yoyo = value;
           return this;
         }
     
         return this._yoyo;
       };
     
       _proto.seek = function seek(position, suppressEvents) {
         return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
       };
     
       _proto.restart = function restart(includeDelay, suppressEvents) {
         return this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
       };
     
       _proto.play = function play(from, suppressEvents) {
         from != null && this.seek(from, suppressEvents);
         return this.reversed(false).paused(false);
       };
     
       _proto.reverse = function reverse(from, suppressEvents) {
         from != null && this.seek(from || this.totalDuration(), suppressEvents);
         return this.reversed(true).paused(false);
       };
     
       _proto.pause = function pause(atTime, suppressEvents) {
         atTime != null && this.seek(atTime, suppressEvents);
         return this.paused(true);
       };
     
       _proto.resume = function resume() {
         return this.paused(false);
       };
     
       _proto.reversed = function reversed(value) {
         if (arguments.length) {
           !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0)); // in case timeScale is zero, reversing would have no effect so we use _tinyNum.
     
           return this;
         }
     
         return this._rts < 0;
       };
     
       _proto.invalidate = function invalidate() {
         this._initted = this._act = 0;
         this._zTime = -_tinyNum;
         return this;
       };
     
       _proto.isActive = function isActive() {
         var parent = this.parent || this._dp,
             start = this._start,
             rawTime;
         return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
       };
     
       _proto.eventCallback = function eventCallback(type, callback, params) {
         var vars = this.vars;
     
         if (arguments.length > 1) {
           if (!callback) {
             delete vars[type];
           } else {
             vars[type] = callback;
             params && (vars[type + "Params"] = params);
             type === "onUpdate" && (this._onUpdate = callback);
           }
     
           return this;
         }
     
         return vars[type];
       };
     
       _proto.then = function then(onFulfilled) {
         var self = this;
         return new Promise(function (resolve) {
           var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough,
               _resolve = function _resolve() {
             var _then = self.then;
             self.then = null; // temporarily null the then() method to avoid an infinite loop (see https://github.com/greensock/GSAP/issues/322)
     
             _isFunction(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
             resolve(f);
             self.then = _then;
           };
     
           if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) {
             _resolve();
           } else {
             self._prom = _resolve;
           }
         });
       };
     
       _proto.kill = function kill() {
         _interrupt(this);
       };
     
       return Animation;
     }();
     
     _setDefaults(Animation.prototype, {
       _time: 0,
       _start: 0,
       _end: 0,
       _tTime: 0,
       _tDur: 0,
       _dirty: 0,
       _repeat: 0,
       _yoyo: false,
       parent: null,
       _initted: false,
       _rDelay: 0,
       _ts: 1,
       _dp: 0,
       ratio: 0,
       _zTime: -_tinyNum,
       _prom: 0,
       _ps: false,
       _rts: 1
     });
     /*
      * -------------------------------------------------
      * TIMELINE
      * -------------------------------------------------
      */
     
     
     var Timeline = /*#__PURE__*/function (_Animation) {
       _inheritsLoose(Timeline, _Animation);
     
       function Timeline(vars, position) {
         var _this;
     
         if (vars === void 0) {
           vars = {};
         }
     
         _this = _Animation.call(this, vars) || this;
         _this.labels = {};
         _this.smoothChildTiming = !!vars.smoothChildTiming;
         _this.autoRemoveChildren = !!vars.autoRemoveChildren;
         _this._sort = _isNotFalse(vars.sortChildren);
         _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position);
         vars.reversed && _this.reverse();
         vars.paused && _this.paused(true);
         vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
         return _this;
       }
     
       var _proto2 = Timeline.prototype;
     
       _proto2.to = function to(targets, vars, position) {
         _createTweenType(0, arguments, this);
     
         return this;
       };
     
       _proto2.from = function from(targets, vars, position) {
         _createTweenType(1, arguments, this);
     
         return this;
       };
     
       _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
         _createTweenType(2, arguments, this);
     
         return this;
       };
     
       _proto2.set = function set(targets, vars, position) {
         vars.duration = 0;
         vars.parent = this;
         _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
         vars.immediateRender = !!vars.immediateRender;
         new Tween(targets, vars, _parsePosition(this, position), 1);
         return this;
       };
     
       _proto2.call = function call(callback, params, position) {
         return _addToTimeline(this, Tween.delayedCall(0, callback, params), position);
       } //ONLY for backward compatibility! Maybe delete?
       ;
     
       _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
         vars.duration = duration;
         vars.stagger = vars.stagger || stagger;
         vars.onComplete = onCompleteAll;
         vars.onCompleteParams = onCompleteAllParams;
         vars.parent = this;
         new Tween(targets, vars, _parsePosition(this, position));
         return this;
       };
     
       _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
         vars.runBackwards = 1;
         _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
         return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
       };
     
       _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
         toVars.startAt = fromVars;
         _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
         return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
       };
     
       _proto2.render = function render(totalTime, suppressEvents, force) {
         var prevTime = this._time,
             tDur = this._dirty ? this.totalDuration() : this._tDur,
             dur = this._dur,
             tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime),
             // if a paused timeline is resumed (or its _start is updated for another reason...which rounds it), that could result in the playhead shifting a **tiny** amount and a zero-duration child at that spot may get rendered at a different ratio, like its totalTime in render() may be 1e-17 instead of 0, for example.
         crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur),
             time,
             child,
             next,
             iteration,
             cycleDuration,
             prevPaused,
             pauseTween,
             timeScale,
             prevStart,
             prevIteration,
             yoyo,
             isYoyo;
         this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);
     
         if (tTime !== this._tTime || force || crossingStart) {
           if (prevTime !== this._time && dur) {
             //if totalDuration() finds a child with a negative startTime and smoothChildTiming is true, things get shifted around internally so we need to adjust the time accordingly. For example, if a tween starts at -30 we must shift EVERYTHING forward 30 seconds and move this timeline's startTime backward by 30 seconds so that things align with the playhead (no jump).
             tTime += this._time - prevTime;
             totalTime += this._time - prevTime;
           }
     
           time = tTime;
           prevStart = this._start;
           timeScale = this._ts;
           prevPaused = !timeScale;
     
           if (crossingStart) {
             dur || (prevTime = this._zTime); //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.
     
             (totalTime || !suppressEvents) && (this._zTime = totalTime);
           }
     
           if (this._repeat) {
             //adjust the time for repeats and yoyos
             yoyo = this._yoyo;
             cycleDuration = dur + this._rDelay;
     
             if (this._repeat < -1 && totalTime < 0) {
               return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
             }
     
             time = _roundPrecise(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)
     
             if (tTime === tDur) {
               // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
               iteration = this._repeat;
               time = dur;
             } else {
               iteration = ~~(tTime / cycleDuration);
     
               if (iteration && iteration === tTime / cycleDuration) {
                 time = dur;
                 iteration--;
               }
     
               time > dur && (time = dur);
             }
     
             prevIteration = _animationCycle(this._tTime, cycleDuration);
             !prevTime && this._tTime && prevIteration !== iteration && (prevIteration = iteration); // edge case - if someone does addPause() at the very beginning of a repeating timeline, that pause is technically at the same spot as the end which causes this._time to get set to 0 when the totalTime would normally place the playhead at the end. See https://greensock.com/forums/topic/23823-closing-nav-animation-not-working-on-ie-and-iphone-6-maybe-other-older-browser/?tab=comments#comment-113005
     
             if (yoyo && iteration & 1) {
               time = dur - time;
               isYoyo = 1;
             }
             /*
             make sure children at the end/beginning of the timeline are rendered properly. If, for example,
             a 3-second long timeline rendered at 2.9 seconds previously, and now renders at 3.2 seconds (which
             would get translated to 2.8 seconds if the timeline yoyos or 0.2 seconds if it just repeats), there
             could be a callback or a short tween that's at 2.95 or 3 seconds in which wouldn't render. So
             we need to push the timeline to the end (and/or beginning depending on its yoyo value). Also we must
             ensure that zero-duration tweens at the very beginning or end of the Timeline work.
             */
     
     
             if (iteration !== prevIteration && !this._lock) {
               var rewinding = yoyo && prevIteration & 1,
                   doesWrap = rewinding === (yoyo && iteration & 1);
               iteration < prevIteration && (rewinding = !rewinding);
               prevTime = rewinding ? 0 : dur;
               this._lock = 1;
               this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
               this._tTime = tTime; // if a user gets the iteration() inside the onRepeat, for example, it should be accurate.
     
               !suppressEvents && this.parent && _callback(this, "onRepeat");
               this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);
     
               if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) {
                 // if prevTime is 0 and we render at the very end, _time will be the end, thus won't match. So in this edge case, prevTime won't match _time but that's okay. If it gets killed in the onRepeat, eject as well.
                 return this;
               }
     
               dur = this._dur; // in case the duration changed in the onRepeat
     
               tDur = this._tDur;
     
               if (doesWrap) {
                 this._lock = 2;
                 prevTime = rewinding ? dur : -0.0001;
                 this.render(prevTime, true);
                 this.vars.repeatRefresh && !isYoyo && this.invalidate();
               }
     
               this._lock = 0;
     
               if (!this._ts && !prevPaused) {
                 return this;
               } //in order for yoyoEase to work properly when there's a stagger, we must swap out the ease in each sub-tween.
     
     
               _propagateYoyoEase(this, isYoyo);
             }
           }
     
           if (this._hasPause && !this._forcing && this._lock < 2) {
             pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time));
     
             if (pauseTween) {
               tTime -= time - (time = pauseTween._start);
             }
           }
     
           this._tTime = tTime;
           this._time = time;
           this._act = !timeScale; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.
     
           if (!this._initted) {
             this._onUpdate = this.vars.onUpdate;
             this._initted = 1;
             this._zTime = totalTime;
             prevTime = 0; // upon init, the playhead should always go forward; someone could invalidate() a completed timeline and then if they restart(), that would make child tweens render in reverse order which could lock in the wrong starting values if they build on each other, like tl.to(obj, {x: 100}).to(obj, {x: 0}).
           }
     
           if (!prevTime && time && !suppressEvents) {
             _callback(this, "onStart");
     
             if (this._tTime !== tTime) {
               // in case the onStart triggered a render at a different spot, eject. Like if someone did animation.pause(0.5) or something inside the onStart.
               return this;
             }
           }
     
           if (time >= prevTime && totalTime >= 0) {
             child = this._first;
     
             while (child) {
               next = child._next;
     
               if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
                 if (child.parent !== this) {
                   // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
                   return this.render(totalTime, suppressEvents, force);
                 }
     
                 child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);
     
                 if (time !== this._time || !this._ts && !prevPaused) {
                   //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
                   pauseTween = 0;
                   next && (tTime += this._zTime = -_tinyNum); // it didn't finish rendering, so flag zTime as negative so that so that the next time render() is called it'll be forced (to render any remaining children)
     
                   break;
                 }
               }
     
               child = next;
             }
           } else {
             child = this._last;
             var adjustedTime = totalTime < 0 ? totalTime : time; //when the playhead goes backward beyond the start of this timeline, we must pass that information down to the child animations so that zero-duration tweens know whether to render their starting or ending values.
     
             while (child) {
               next = child._prev;
     
               if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
                 if (child.parent !== this) {
                   // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
                   return this.render(totalTime, suppressEvents, force);
                 }
     
                 child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force);
     
                 if (time !== this._time || !this._ts && !prevPaused) {
                   //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
                   pauseTween = 0;
                   next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum); // it didn't finish rendering, so adjust zTime so that so that the next time render() is called it'll be forced (to render any remaining children)
     
                   break;
                 }
               }
     
               child = next;
             }
           }
     
           if (pauseTween && !suppressEvents) {
             this.pause();
             pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;
     
             if (this._ts) {
               //the callback resumed playback! So since we may have held back the playhead due to where the pause is positioned, go ahead and jump to where it's SUPPOSED to be (if no pause happened).
               this._start = prevStart; //if the pause was at an earlier time and the user resumed in the callback, it could reposition the timeline (changing its startTime), throwing things off slightly, so we make sure the _start doesn't shift.
     
               _setEnd(this);
     
               return this.render(totalTime, suppressEvents, force);
             }
           }
     
           this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
           if (tTime === tDur && this._tTime >= this.totalDuration() || !tTime && prevTime) if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) if (!this._lock) {
             // remember, a child's callback may alter this timeline's playhead or timeScale which is why we need to add some of these checks.
             (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1); // don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.
     
             if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
               _callback(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);
     
               this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
             }
           }
         }
     
         return this;
       };
     
       _proto2.add = function add(child, position) {
         var _this2 = this;
     
         _isNumber(position) || (position = _parsePosition(this, position, child));
     
         if (!(child instanceof Animation)) {
           if (_isArray(child)) {
             child.forEach(function (obj) {
               return _this2.add(obj, position);
             });
             return this;
           }
     
           if (_isString(child)) {
             return this.addLabel(child, position);
           }
     
           if (_isFunction(child)) {
             child = Tween.delayedCall(0, child);
           } else {
             return this;
           }
         }
     
         return this !== child ? _addToTimeline(this, child, position) : this; //don't allow a timeline to be added to itself as a child!
       };
     
       _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
         if (nested === void 0) {
           nested = true;
         }
     
         if (tweens === void 0) {
           tweens = true;
         }
     
         if (timelines === void 0) {
           timelines = true;
         }
     
         if (ignoreBeforeTime === void 0) {
           ignoreBeforeTime = -_bigNum;
         }
     
         var a = [],
             child = this._first;
     
         while (child) {
           if (child._start >= ignoreBeforeTime) {
             if (child instanceof Tween) {
               tweens && a.push(child);
             } else {
               timelines && a.push(child);
               nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
             }
           }
     
           child = child._next;
         }
     
         return a;
       };
     
       _proto2.getById = function getById(id) {
         var animations = this.getChildren(1, 1, 1),
             i = animations.length;
     
         while (i--) {
           if (animations[i].vars.id === id) {
             return animations[i];
           }
         }
       };
     
       _proto2.remove = function remove(child) {
         if (_isString(child)) {
           return this.removeLabel(child);
         }
     
         if (_isFunction(child)) {
           return this.killTweensOf(child);
         }
     
         _removeLinkedListItem(this, child);
     
         if (child === this._recent) {
           this._recent = this._last;
         }
     
         return _uncache(this);
       };
     
       _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
         if (!arguments.length) {
           return this._tTime;
         }
     
         this._forcing = 1;
     
         if (!this._dp && this._ts) {
           //special case for the global timeline (or any other that has no parent or detached parent).
           this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
         }
     
         _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);
     
         this._forcing = 0;
         return this;
       };
     
       _proto2.addLabel = function addLabel(label, position) {
         this.labels[label] = _parsePosition(this, position);
         return this;
       };
     
       _proto2.removeLabel = function removeLabel(label) {
         delete this.labels[label];
         return this;
       };
     
       _proto2.addPause = function addPause(position, callback, params) {
         var t = Tween.delayedCall(0, callback || _emptyFunc, params);
         t.data = "isPause";
         this._hasPause = 1;
         return _addToTimeline(this, t, _parsePosition(this, position));
       };
     
       _proto2.removePause = function removePause(position) {
         var child = this._first;
         position = _parsePosition(this, position);
     
         while (child) {
           if (child._start === position && child.data === "isPause") {
             _removeFromParent(child);
           }
     
           child = child._next;
         }
       };
     
       _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
         var tweens = this.getTweensOf(targets, onlyActive),
             i = tweens.length;
     
         while (i--) {
           _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
         }
     
         return this;
       };
     
       _proto2.getTweensOf = function getTweensOf(targets, onlyActive) {
         var a = [],
             parsedTargets = toArray(targets),
             child = this._first,
             isGlobalTime = _isNumber(onlyActive),
             // a number is interpreted as a global time. If the animation spans
         children;
     
         while (child) {
           if (child instanceof Tween) {
             if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) {
               // note: if this is for overwriting, it should only be for tweens that aren't paused and are initted.
               a.push(child);
             }
           } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) {
             a.push.apply(a, children);
           }
     
           child = child._next;
         }
     
         return a;
       } // potential future feature - targets() on timelines
       // targets() {
       // 	let result = [];
       // 	this.getChildren(true, true, false).forEach(t => result.push(...t.targets()));
       // 	return result.filter((v, i) => result.indexOf(v) === i);
       // }
       ;
     
       _proto2.tweenTo = function tweenTo(position, vars) {
         vars = vars || {};
     
         var tl = this,
             endTime = _parsePosition(tl, position),
             _vars = vars,
             startAt = _vars.startAt,
             _onStart = _vars.onStart,
             onStartParams = _vars.onStartParams,
             immediateRender = _vars.immediateRender,
             initted,
             tween = Tween.to(tl, _setDefaults({
           ease: vars.ease || "none",
           lazy: false,
           immediateRender: false,
           time: endTime,
           overwrite: "auto",
           duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
           onStart: function onStart() {
             tl.pause();
     
             if (!initted) {
               var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
               tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
               initted = 1;
             }
     
             _onStart && _onStart.apply(tween, onStartParams || []); //in case the user had an onStart in the vars - we don't want to overwrite it.
           }
         }, vars));
     
         return immediateRender ? tween.render(0) : tween;
       };
     
       _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
         return this.tweenTo(toPosition, _setDefaults({
           startAt: {
             time: _parsePosition(this, fromPosition)
           }
         }, vars));
       };
     
       _proto2.recent = function recent() {
         return this._recent;
       };
     
       _proto2.nextLabel = function nextLabel(afterTime) {
         if (afterTime === void 0) {
           afterTime = this._time;
         }
     
         return _getLabelInDirection(this, _parsePosition(this, afterTime));
       };
     
       _proto2.previousLabel = function previousLabel(beforeTime) {
         if (beforeTime === void 0) {
           beforeTime = this._time;
         }
     
         return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
       };
     
       _proto2.currentLabel = function currentLabel(value) {
         return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
       };
     
       _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
         if (ignoreBeforeTime === void 0) {
           ignoreBeforeTime = 0;
         }
     
         var child = this._first,
             labels = this.labels,
             p;
     
         while (child) {
           if (child._start >= ignoreBeforeTime) {
             child._start += amount;
             child._end += amount;
           }
     
           child = child._next;
         }
     
         if (adjustLabels) {
           for (p in labels) {
             if (labels[p] >= ignoreBeforeTime) {
               labels[p] += amount;
             }
           }
         }
     
         return _uncache(this);
       };
     
       _proto2.invalidate = function invalidate() {
         var child = this._first;
         this._lock = 0;
     
         while (child) {
           child.invalidate();
           child = child._next;
         }
     
         return _Animation.prototype.invalidate.call(this);
       };
     
       _proto2.clear = function clear(includeLabels) {
         if (includeLabels === void 0) {
           includeLabels = true;
         }
     
         var child = this._first,
             next;
     
         while (child) {
           next = child._next;
           this.remove(child);
           child = next;
         }
     
         this._dp && (this._time = this._tTime = this._pTime = 0);
         includeLabels && (this.labels = {});
         return _uncache(this);
       };
     
       _proto2.totalDuration = function totalDuration(value) {
         var max = 0,
             self = this,
             child = self._last,
             prevStart = _bigNum,
             prev,
             start,
             parent;
     
         if (arguments.length) {
           return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
         }
     
         if (self._dirty) {
           parent = self.parent;
     
           while (child) {
             prev = child._prev; //record it here in case the tween changes position in the sequence...
     
             child._dirty && child.totalDuration(); //could change the tween._startTime, so make sure the animation's cache is clean before analyzing it.
     
             start = child._start;
     
             if (start > prevStart && self._sort && child._ts && !self._lock) {
               //in case one of the tweens shifted out of order, it needs to be re-inserted into the correct position in the sequence
               self._lock = 1; //prevent endless recursive calls - there are methods that get triggered that check duration/totalDuration when we add().
     
               _addToTimeline(self, child, start - child._delay, 1)._lock = 0;
             } else {
               prevStart = start;
             }
     
             if (start < 0 && child._ts) {
               //children aren't allowed to have negative startTimes unless smoothChildTiming is true, so adjust here if one is found.
               max -= start;
     
               if (!parent && !self._dp || parent && parent.smoothChildTiming) {
                 self._start += start / self._ts;
                 self._time -= start;
                 self._tTime -= start;
               }
     
               self.shiftChildren(-start, false, -1e999);
               prevStart = 0;
             }
     
             child._end > max && child._ts && (max = child._end);
             child = prev;
           }
     
           _setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1, 1);
     
           self._dirty = 0;
         }
     
         return self._tDur;
       };
     
       Timeline.updateRoot = function updateRoot(time) {
         if (_globalTimeline._ts) {
           _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));
     
           _lastRenderedFrame = _ticker.frame;
         }
     
         if (_ticker.frame >= _nextGCFrame) {
           _nextGCFrame += _config.autoSleep || 120;
           var child = _globalTimeline._first;
           if (!child || !child._ts) if (_config.autoSleep && _ticker._listeners.length < 2) {
             while (child && !child._ts) {
               child = child._next;
             }
     
             child || _ticker.sleep();
           }
         }
       };
     
       return Timeline;
     }(Animation);
     
     _setDefaults(Timeline.prototype, {
       _lock: 0,
       _hasPause: 0,
       _forcing: 0
     });
     
     var _addComplexStringPropTween = function _addComplexStringPropTween(target, prop, start, end, setter, stringFilter, funcParam) {
       //note: we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
       var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter),
           index = 0,
           matchIndex = 0,
           result,
           startNums,
           color,
           endNum,
           chunk,
           startNum,
           hasRandom,
           a;
       pt.b = start;
       pt.e = end;
       start += ""; //ensure values are strings
     
       end += "";
     
       if (hasRandom = ~end.indexOf("random(")) {
         end = _replaceRandom(end);
       }
     
       if (stringFilter) {
         a = [start, end];
         stringFilter(a, target, prop); //pass an array with the starting and ending values and let the filter do whatever it needs to the values.
     
         start = a[0];
         end = a[1];
       }
     
       startNums = start.match(_complexStringNumExp) || [];
     
       while (result = _complexStringNumExp.exec(end)) {
         endNum = result[0];
         chunk = end.substring(index, result.index);
     
         if (color) {
           color = (color + 1) % 5;
         } else if (chunk.substr(-5) === "rgba(") {
           color = 1;
         }
     
         if (endNum !== startNums[matchIndex++]) {
           startNum = parseFloat(startNums[matchIndex - 1]) || 0; //these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.
     
           pt._pt = {
             _next: pt._pt,
             p: chunk || matchIndex === 1 ? chunk : ",",
             //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
             s: startNum,
             c: endNum.charAt(1) === "=" ? _parseRelative(startNum, endNum) - startNum : parseFloat(endNum) - startNum,
             m: color && color < 4 ? Math.round : 0
           };
           index = _complexStringNumExp.lastIndex;
         }
       }
     
       pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)
     
       pt.fp = funcParam;
     
       if (_relExp.test(end) || hasRandom) {
         pt.e = 0; //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).
       }
     
       this._pt = pt; //start the linked list with this new PropTween. Remember, we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
     
       return pt;
     },
         _addPropTween = function _addPropTween(target, prop, start, end, index, targets, modifier, stringFilter, funcParam) {
       _isFunction(end) && (end = end(index || 0, target, targets));
       var currentValue = target[prop],
           parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](),
           setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc,
           pt;
     
       if (_isString(end)) {
         if (~end.indexOf("random(")) {
           end = _replaceRandom(end);
         }
     
         if (end.charAt(1) === "=") {
           pt = _parseRelative(parsedStart, end) + (getUnit(parsedStart) || 0);
     
           if (pt || pt === 0) {
             // to avoid isNaN, like if someone passes in a value like "!= whatever"
             end = pt;
           }
         }
       }
     
       if (parsedStart !== end || _forceAllPropTweens) {
         if (!isNaN(parsedStart * end) && end !== "") {
           // fun fact: any number multiplied by "" is evaluated as the number 0!
           pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
           funcParam && (pt.fp = funcParam);
           modifier && pt.modifier(modifier, this, target);
           return this._pt = pt;
         }
     
         !currentValue && !(prop in target) && _missingPlugin(prop, end);
         return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
       }
     },
         //creates a copy of the vars object and processes any function-based values (putting the resulting values directly into the copy) as well as strings with "random()" in them. It does NOT process relative values.
     _processVars = function _processVars(vars, index, target, targets, tween) {
       _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));
     
       if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) {
         return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
       }
     
       var copy = {},
           p;
     
       for (p in vars) {
         copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
       }
     
       return copy;
     },
         _checkPlugin = function _checkPlugin(property, vars, tween, index, target, targets) {
       var plugin, pt, ptLookup, i;
     
       if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
         tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);
     
         if (tween !== _quickTween) {
           ptLookup = tween._ptLookup[tween._targets.indexOf(target)]; //note: we can't use tween._ptLookup[index] because for staggered tweens, the index from the fullTargets array won't match what it is in each individual tween that spawns from the stagger.
     
           i = plugin._props.length;
     
           while (i--) {
             ptLookup[plugin._props[i]] = pt;
           }
         }
       }
     
       return plugin;
     },
         _overwritingTween,
         //store a reference temporarily so we can avoid overwriting itself.
     _forceAllPropTweens,
         _initTween = function _initTween(tween, time) {
       var vars = tween.vars,
           ease = vars.ease,
           startAt = vars.startAt,
           immediateRender = vars.immediateRender,
           lazy = vars.lazy,
           onUpdate = vars.onUpdate,
           onUpdateParams = vars.onUpdateParams,
           callbackScope = vars.callbackScope,
           runBackwards = vars.runBackwards,
           yoyoEase = vars.yoyoEase,
           keyframes = vars.keyframes,
           autoRevert = vars.autoRevert,
           dur = tween._dur,
           prevStartAt = tween._startAt,
           targets = tween._targets,
           parent = tween.parent,
           fullTargets = parent && parent.data === "nested" ? parent.parent._targets : targets,
           autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites,
           tl = tween.timeline,
           cleanVars,
           i,
           p,
           pt,
           target,
           hasPriority,
           gsData,
           harness,
           plugin,
           ptLookup,
           index,
           harnessVars,
           overwritten;
       tl && (!keyframes || !ease) && (ease = "none");
       tween._ease = _parseEase(ease, _defaults.ease);
       tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;
     
       if (yoyoEase && tween._yoyo && !tween._repeat) {
         //there must have been a parent timeline with yoyo:true that is currently in its yoyo phase, so flip the eases.
         yoyoEase = tween._yEase;
         tween._yEase = tween._ease;
         tween._ease = yoyoEase;
       }
     
       tween._from = !tl && !!vars.runBackwards; //nested timelines should never run backwards - the backwards-ness is in the child tweens.
     
       if (!tl || keyframes && !vars.stagger) {
         //if there's an internal timeline, skip all the parsing because we passed that task down the chain.
         harness = targets[0] ? _getCache(targets[0]).harness : 0;
         harnessVars = harness && vars[harness.prop]; //someone may need to specify CSS-specific values AND non-CSS values, like if the element has an "x" property plus it's a standard DOM element. We allow people to distinguish by wrapping plugin-specific stuff in a css:{} object for example.
     
         cleanVars = _copyExcluding(vars, _reservedProps);
     
         if (prevStartAt) {
           _removeFromParent(prevStartAt.render(-1, true));
     
           prevStartAt._lazy = 0;
         }
     
         if (startAt) {
           _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
             data: "isStart",
             overwrite: false,
             parent: parent,
             immediateRender: true,
             lazy: _isNotFalse(lazy),
             startAt: null,
             delay: 0,
             onUpdate: onUpdate,
             onUpdateParams: onUpdateParams,
             callbackScope: callbackScope,
             stagger: 0
           }, startAt))); //copy the properties/values into a new object to avoid collisions, like var to = {x:0}, from = {x:500}; timeline.fromTo(e, from, to).fromTo(e, to, from);
     
     
           time < 0 && !immediateRender && !autoRevert && tween._startAt.render(-1, true); // rare edge case, like if a render is forced in the negative direction of a non-initted tween.
     
           if (immediateRender) {
             time > 0 && !autoRevert && (tween._startAt = 0); //tweens that render immediately (like most from() and fromTo() tweens) shouldn't revert when their parent timeline's playhead goes backward past the startTime because the initial render could have happened anytime and it shouldn't be directly correlated to this tween's startTime. Imagine setting up a complex animation where the beginning states of various objects are rendered immediately but the tween doesn't happen for quite some time - if we revert to the starting values as soon as the playhead goes backward past the tween's startTime, it will throw things off visually. Reversion should only happen in Timeline instances where immediateRender was false or when autoRevert is explicitly set to true.
     
             if (dur && time <= 0) {
               time && (tween._zTime = time);
               return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a Timeline, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
             } // if (time > 0) {
             // 	autoRevert || (tween._startAt = 0); //tweens that render immediately (like most from() and fromTo() tweens) shouldn't revert when their parent timeline's playhead goes backward past the startTime because the initial render could have happened anytime and it shouldn't be directly correlated to this tween's startTime. Imagine setting up a complex animation where the beginning states of various objects are rendered immediately but the tween doesn't happen for quite some time - if we revert to the starting values as soon as the playhead goes backward past the tween's startTime, it will throw things off visually. Reversion should only happen in Timeline instances where immediateRender was false or when autoRevert is explicitly set to true.
             // } else if (dur && !(time < 0 && prevStartAt)) {
             // 	time && (tween._zTime = time);
             // 	return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a Timeline, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
             // }
     
           } else if (autoRevert === false) {
             tween._startAt = 0;
           }
         } else if (runBackwards && dur) {
           //from() tweens must be handled uniquely: their beginning values must be rendered but we don't want overwriting to occur yet (when time is still 0). Wait until the tween actually begins before doing all the routines like overwriting. At that time, we should render at the END of the tween to ensure that things initialize correctly (remember, from() tweens go backwards)
           if (prevStartAt) {
             !autoRevert && (tween._startAt = 0);
           } else {
             time && (immediateRender = false); //in rare cases (like if a from() tween runs and then is invalidate()-ed), immediateRender could be true but the initial forced-render gets skipped, so there's no need to force the render in this context when the _time is greater than 0
     
             p = _setDefaults({
               overwrite: false,
               data: "isFromStart",
               //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
               lazy: immediateRender && _isNotFalse(lazy),
               immediateRender: immediateRender,
               //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
               stagger: 0,
               parent: parent //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y:gsap.utils.wrap([-100,100])})
     
             }, cleanVars);
             harnessVars && (p[harness.prop] = harnessVars); // in case someone does something like .from(..., {css:{}})
     
             _removeFromParent(tween._startAt = Tween.set(targets, p));
     
             time < 0 && tween._startAt.render(-1, true); // rare edge case, like if a render is forced in the negative direction of a non-initted from() tween.
     
             tween._zTime = time;
     
             if (!immediateRender) {
               _initTween(tween._startAt, _tinyNum); //ensures that the initial values are recorded
     
             } else if (!time) {
               return;
             }
           }
         }
     
         tween._pt = tween._ptCache = 0;
         lazy = dur && _isNotFalse(lazy) || lazy && !dur;
     
         for (i = 0; i < targets.length; i++) {
           target = targets[i];
           gsData = target._gsap || _harness(targets)[i]._gsap;
           tween._ptLookup[i] = ptLookup = {};
           _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender(); //if other tweens of the same target have recently initted but haven't rendered yet, we've got to force the render so that the starting values are correct (imagine populating a timeline with a bunch of sequential tweens and then jumping to the end)
     
           index = fullTargets === targets ? i : fullTargets.indexOf(target);
     
           if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
             tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);
     
             plugin._props.forEach(function (name) {
               ptLookup[name] = pt;
             });
     
             plugin.priority && (hasPriority = 1);
           }
     
           if (!harness || harnessVars) {
             for (p in cleanVars) {
               if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) {
                 plugin.priority && (hasPriority = 1);
               } else {
                 ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
               }
             }
           }
     
           tween._op && tween._op[i] && tween.kill(target, tween._op[i]);
     
           if (autoOverwrite && tween._pt) {
             _overwritingTween = tween;
     
             _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time)); // make sure the overwriting doesn't overwrite THIS tween!!!
     
     
             overwritten = !tween.parent;
             _overwritingTween = 0;
           }
     
           tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
         }
     
         hasPriority && _sortPropTweensByPriority(tween);
         tween._onInit && tween._onInit(tween); //plugins like RoundProps must wait until ALL of the PropTweens are instantiated. In the plugin's init() function, it sets the _onInit on the tween instance. May not be pretty/intuitive, but it's fast and keeps file size down.
       }
     
       tween._onUpdate = onUpdate;
       tween._initted = (!tween._op || tween._pt) && !overwritten; // if overwrittenProps resulted in the entire tween being killed, do NOT flag it as initted or else it may render for one tick.
     
       keyframes && time <= 0 && tl.render(_bigNum, true, true); // if there's a 0% keyframe, it'll render in the "before" state for any staggered/delayed animations thus when the following tween initializes, it'll use the "before" state instead of the "after" state as the initial values.
     },
         _updatePropTweens = function _updatePropTweens(tween, property, value, start, startIsRelative, ratio, time) {
       var ptCache = (tween._pt && tween._ptCache || (tween._ptCache = {}))[property],
           pt,
           lookup,
           i;
     
       if (!ptCache) {
         ptCache = tween._ptCache[property] = [];
         lookup = tween._ptLookup;
         i = tween._targets.length;
     
         while (i--) {
           pt = lookup[i][property];
     
           if (pt && pt.d && pt.d._pt) {
             // it's a plugin, so find the nested PropTween
             pt = pt.d._pt;
     
             while (pt && pt.p !== property) {
               pt = pt._next;
             }
           }
     
           if (!pt) {
             // there is no PropTween associated with that property, so we must FORCE one to be created and ditch out of this
             // if the tween has other properties that already rendered at new positions, we'd normally have to rewind to put them back like tween.render(0, true) before forcing an _initTween(), but that can create another edge case like tweening a timeline's progress would trigger onUpdates to fire which could move other things around. It's better to just inform users that .resetTo() should ONLY be used for tweens that already have that property. For example, you can't gsap.to(...{ y: 0 }) and then tween.restTo("x", 200) for example.
             _forceAllPropTweens = 1; // otherwise, when we _addPropTween() and it finds no change between the start and end values, it skips creating a PropTween (for efficiency...why tween when there's no difference?) but in this case we NEED that PropTween created so we can edit it.
     
             tween.vars[property] = "+=0";
     
             _initTween(tween, time);
     
             _forceAllPropTweens = 0;
             return 1;
           }
     
           ptCache.push(pt);
         }
       }
     
       i = ptCache.length;
     
       while (i--) {
         pt = ptCache[i];
         pt.s = (start || start === 0) && !startIsRelative ? start : pt.s + (start || 0) + ratio * pt.c;
         pt.c = value - pt.s;
         pt.e && (pt.e = _round(value) + getUnit(pt.e)); // mainly for CSSPlugin (end value)
     
         pt.b && (pt.b = pt.s + getUnit(pt.b)); // (beginning value)
       }
     },
         _addAliasesToVars = function _addAliasesToVars(targets, vars) {
       var harness = targets[0] ? _getCache(targets[0]).harness : 0,
           propertyAliases = harness && harness.aliases,
           copy,
           p,
           i,
           aliases;
     
       if (!propertyAliases) {
         return vars;
       }
     
       copy = _merge({}, vars);
     
       for (p in propertyAliases) {
         if (p in copy) {
           aliases = propertyAliases[p].split(",");
           i = aliases.length;
     
           while (i--) {
             copy[aliases[i]] = copy[p];
           }
         }
       }
     
       return copy;
     },
         // parses multiple formats, like {"0%": {x: 100}, {"50%": {x: -20}} and { x: {"0%": 100, "50%": -20} }, and an "ease" can be set on any object. We populate an "allProps" object with an Array for each property, like {x: [{}, {}], y:[{}, {}]} with data for each property tween. The objects have a "t" (time), "v", (value), and "e" (ease) property. This allows us to piece together a timeline later.
     _parseKeyframe = function _parseKeyframe(prop, obj, allProps, easeEach) {
       var ease = obj.ease || easeEach || "power1.inOut",
           p,
           a;
     
       if (_isArray(obj)) {
         a = allProps[prop] || (allProps[prop] = []); // t = time (out of 100), v = value, e = ease
     
         obj.forEach(function (value, i) {
           return a.push({
             t: i / (obj.length - 1) * 100,
             v: value,
             e: ease
           });
         });
       } else {
         for (p in obj) {
           a = allProps[p] || (allProps[p] = []);
           p === "ease" || a.push({
             t: parseFloat(prop),
             v: obj[p],
             e: ease
           });
         }
       }
     },
         _parseFuncOrString = function _parseFuncOrString(value, tween, i, target, targets) {
       return _isFunction(value) ? value.call(tween, i, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
     },
         _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
         _staggerPropsToSkip = {};
     
     _forEachName(_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", function (name) {
       return _staggerPropsToSkip[name] = 1;
     });
     /*
      * --------------------------------------------------------------------------------------
      * TWEEN
      * --------------------------------------------------------------------------------------
      */
     
     
     var Tween = /*#__PURE__*/function (_Animation2) {
       _inheritsLoose(Tween, _Animation2);
     
       function Tween(targets, vars, position, skipInherit) {
         var _this3;
     
         if (typeof vars === "number") {
           position.duration = vars;
           vars = position;
           position = null;
         }
     
         _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
         var _this3$vars = _this3.vars,
             duration = _this3$vars.duration,
             delay = _this3$vars.delay,
             immediateRender = _this3$vars.immediateRender,
             stagger = _this3$vars.stagger,
             overwrite = _this3$vars.overwrite,
             keyframes = _this3$vars.keyframes,
             defaults = _this3$vars.defaults,
             scrollTrigger = _this3$vars.scrollTrigger,
             yoyoEase = _this3$vars.yoyoEase,
             parent = vars.parent || _globalTimeline,
             parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [targets] : toArray(targets),
             tl,
             i,
             copy,
             l,
             p,
             curTarget,
             staggerFunc,
             staggerVarsToMerge;
         _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://greensock.com", !_config.nullTargetWarn) || [];
         _this3._ptLookup = []; //PropTween lookup. An array containing an object for each target, having keys for each tweening property
     
         _this3._overwrite = overwrite;
     
         if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
           vars = _this3.vars;
           tl = _this3.timeline = new Timeline({
             data: "nested",
             defaults: defaults || {}
           });
           tl.kill();
           tl.parent = tl._dp = _assertThisInitialized(_this3);
           tl._start = 0;
     
           if (stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
             l = parsedTargets.length;
             staggerFunc = stagger && distribute(stagger);
     
             if (_isObject(stagger)) {
               //users can pass in callbacks like onStart/onComplete in the stagger object. These should fire with each individual tween.
               for (p in stagger) {
                 if (~_staggerTweenProps.indexOf(p)) {
                   staggerVarsToMerge || (staggerVarsToMerge = {});
                   staggerVarsToMerge[p] = stagger[p];
                 }
               }
             }
     
             for (i = 0; i < l; i++) {
               copy = _copyExcluding(vars, _staggerPropsToSkip);
               copy.stagger = 0;
               yoyoEase && (copy.yoyoEase = yoyoEase);
               staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
               curTarget = parsedTargets[i]; //don't just copy duration or delay because if they're a string or function, we'd end up in an infinite loop because _isFuncOrString() would evaluate as true in the child tweens, entering this loop, etc. So we parse the value straight from vars and default to 0.
     
               copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
               copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;
     
               if (!stagger && l === 1 && copy.delay) {
                 // if someone does delay:"random(1, 5)", repeat:-1, for example, the delay shouldn't be inside the repeat.
                 _this3._delay = delay = copy.delay;
                 _this3._start += delay;
                 copy.delay = 0;
               }
     
               tl.to(curTarget, copy, staggerFunc ? staggerFunc(i, curTarget, parsedTargets) : 0);
               tl._ease = _easeMap.none;
             }
     
             tl.duration() ? duration = delay = 0 : _this3.timeline = 0; // if the timeline's duration is 0, we don't need a timeline internally!
           } else if (keyframes) {
             _inheritDefaults(_setDefaults(tl.vars.defaults, {
               ease: "none"
             }));
     
             tl._ease = _parseEase(keyframes.ease || vars.ease || "none");
             var time = 0,
                 a,
                 kf,
                 v;
     
             if (_isArray(keyframes)) {
               keyframes.forEach(function (frame) {
                 return tl.to(parsedTargets, frame, ">");
               });
             } else {
               copy = {};
     
               for (p in keyframes) {
                 p === "ease" || p === "easeEach" || _parseKeyframe(p, keyframes[p], copy, keyframes.easeEach);
               }
     
               for (p in copy) {
                 a = copy[p].sort(function (a, b) {
                   return a.t - b.t;
                 });
                 time = 0;
     
                 for (i = 0; i < a.length; i++) {
                   kf = a[i];
                   v = {
                     ease: kf.e,
                     duration: (kf.t - (i ? a[i - 1].t : 0)) / 100 * duration
                   };
                   v[p] = kf.v;
                   tl.to(parsedTargets, v, time);
                   time += v.duration;
                 }
               }
     
               tl.duration() < duration && tl.to({}, {
                 duration: duration - tl.duration()
               }); // in case keyframes didn't go to 100%
             }
           }
     
           duration || _this3.duration(duration = tl.duration());
         } else {
           _this3.timeline = 0; //speed optimization, faster lookups (no going up the prototype chain)
         }
     
         if (overwrite === true && !_suppressOverwrites) {
           _overwritingTween = _assertThisInitialized(_this3);
     
           _globalTimeline.killTweensOf(parsedTargets);
     
           _overwritingTween = 0;
         }
     
         _addToTimeline(parent, _assertThisInitialized(_this3), position);
     
         vars.reversed && _this3.reverse();
         vars.paused && _this3.paused(true);
     
         if (immediateRender || !duration && !keyframes && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
           _this3._tTime = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)
     
           _this3.render(Math.max(0, -delay)); //in case delay is negative
     
         }
     
         scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
         return _this3;
       }
     
       var _proto3 = Tween.prototype;
     
       _proto3.render = function render(totalTime, suppressEvents, force) {
         var prevTime = this._time,
             tDur = this._tDur,
             dur = this._dur,
             tTime = totalTime > tDur - _tinyNum && totalTime >= 0 ? tDur : totalTime < _tinyNum ? 0 : totalTime,
             time,
             pt,
             iteration,
             cycleDuration,
             prevIteration,
             isYoyo,
             ratio,
             timeline,
             yoyoEase;
     
         if (!dur) {
           _renderZeroDurationTween(this, totalTime, suppressEvents, force);
         } else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== totalTime < 0) {
           //this senses if we're crossing over the start time, in which case we must record _zTime and force the render, but we do it in this lengthy conditional way for performance reasons (usually we can skip the calculations): this._initted && (this._zTime < 0) !== (totalTime < 0)
           time = tTime;
           timeline = this.timeline;
     
           if (this._repeat) {
             //adjust the time for repeats and yoyos
             cycleDuration = dur + this._rDelay;
     
             if (this._repeat < -1 && totalTime < 0) {
               return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
             }
     
             time = _roundPrecise(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)
     
             if (tTime === tDur) {
               // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
               iteration = this._repeat;
               time = dur;
             } else {
               iteration = ~~(tTime / cycleDuration);
     
               if (iteration && iteration === tTime / cycleDuration) {
                 time = dur;
                 iteration--;
               }
     
               time > dur && (time = dur);
             }
     
             isYoyo = this._yoyo && iteration & 1;
     
             if (isYoyo) {
               yoyoEase = this._yEase;
               time = dur - time;
             }
     
             prevIteration = _animationCycle(this._tTime, cycleDuration);
     
             if (time === prevTime && !force && this._initted) {
               //could be during the repeatDelay part. No need to render and fire callbacks.
               this._tTime = tTime;
               return this;
             }
     
             if (iteration !== prevIteration) {
               timeline && this._yEase && _propagateYoyoEase(timeline, isYoyo); //repeatRefresh functionality
     
               if (this.vars.repeatRefresh && !isYoyo && !this._lock) {
                 this._lock = force = 1; //force, otherwise if lazy is true, the _attemptInitTween() will return and we'll jump out and get caught bouncing on each tick.
     
                 this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
               }
             }
           }
     
           if (!this._initted) {
             if (_attemptInitTween(this, totalTime < 0 ? totalTime : time, force, suppressEvents)) {
               this._tTime = 0; // in constructor if immediateRender is true, we set _tTime to -_tinyNum to have the playhead cross the starting point but we can't leave _tTime as a negative number.
     
               return this;
             }
     
             if (prevTime !== this._time) {
               // rare edge case - during initialization, an onUpdate in the _startAt (.fromTo()) might force this tween to render at a different spot in which case we should ditch this render() call so that it doesn't revert the values.
               return this;
             }
     
             if (dur !== this._dur) {
               // while initting, a plugin like InertiaPlugin might alter the duration, so rerun from the start to ensure everything renders as it should.
               return this.render(totalTime, suppressEvents, force);
             }
           }
     
           this._tTime = tTime;
           this._time = time;
     
           if (!this._act && this._ts) {
             this._act = 1; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.
     
             this._lazy = 0;
           }
     
           this.ratio = ratio = (yoyoEase || this._ease)(time / dur);
     
           if (this._from) {
             this.ratio = ratio = 1 - ratio;
           }
     
           if (time && !prevTime && !suppressEvents) {
             _callback(this, "onStart");
     
             if (this._tTime !== tTime) {
               // in case the onStart triggered a render at a different spot, eject. Like if someone did animation.pause(0.5) or something inside the onStart.
               return this;
             }
           }
     
           pt = this._pt;
     
           while (pt) {
             pt.r(ratio, pt.d);
             pt = pt._next;
           }
     
           timeline && timeline.render(totalTime < 0 ? totalTime : !time && isYoyo ? -_tinyNum : timeline._dur * timeline._ease(time / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);
     
           if (this._onUpdate && !suppressEvents) {
             totalTime < 0 && this._startAt && this._startAt.render(totalTime, true, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.
     
             _callback(this, "onUpdate");
           }
     
           this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");
     
           if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
             totalTime < 0 && this._startAt && !this._onUpdate && this._startAt.render(totalTime, true, true);
             (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1); // don't remove if we're rendering at exactly a time of 0, as there could be autoRevert values that should get set on the next tick (if the playhead goes backward beyond the startTime, negative totalTime). Don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.
     
             if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime)) {
               // if prevTime and tTime are zero, we shouldn't fire the onReverseComplete. This could happen if you gsap.to(... {paused:true}).play();
               _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);
     
               this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
             }
           }
         }
     
         return this;
       };
     
       _proto3.targets = function targets() {
         return this._targets;
       };
     
       _proto3.invalidate = function invalidate() {
         this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0;
         this._ptLookup = [];
         this.timeline && this.timeline.invalidate();
         return _Animation2.prototype.invalidate.call(this);
       };
     
       _proto3.resetTo = function resetTo(property, value, start, startIsRelative) {
         _tickerActive || _ticker.wake();
         this._ts || this.play();
         var time = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
             ratio;
         this._initted || _initTween(this, time);
         ratio = this._ease(time / this._dur); // don't just get tween.ratio because it may not have rendered yet.
         // possible future addition to allow an object with multiple values to update, like tween.resetTo({x: 100, y: 200}); At this point, it doesn't seem worth the added kb given the fact that most users will likely opt for the convenient gsap.quickTo() way of interacting with this method.
         // if (_isObject(property)) { // performance optimization
         // 	for (p in property) {
         // 		if (_updatePropTweens(this, p, property[p], value ? value[p] : null, start, ratio, time)) {
         // 			return this.resetTo(property, value, start, startIsRelative); // if a PropTween wasn't found for the property, it'll get forced with a re-initialization so we need to jump out and start over again.
         // 		}
         // 	}
         // } else {
     
         if (_updatePropTweens(this, property, value, start, startIsRelative, ratio, time)) {
           return this.resetTo(property, value, start, startIsRelative); // if a PropTween wasn't found for the property, it'll get forced with a re-initialization so we need to jump out and start over again.
         } //}
     
     
         _alignPlayhead(this, 0);
     
         this.parent || _addLinkedListItem(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0);
         return this.render(0);
       };
     
       _proto3.kill = function kill(targets, vars) {
         if (vars === void 0) {
           vars = "all";
         }
     
         if (!targets && (!vars || vars === "all")) {
           this._lazy = this._pt = 0;
           return this.parent ? _interrupt(this) : this;
         }
     
         if (this.timeline) {
           var tDur = this.timeline.totalDuration();
           this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this); // if nothing is left tweening, interrupt.
     
           this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1); // if a nested tween is killed that changes the duration, it should affect this tween's duration. We must use the ratio, though, because sometimes the internal timeline is stretched like for keyframes where they don't all add up to whatever the parent tween's duration was set to.
     
           return this;
         }
     
         var parsedTargets = this._targets,
             killingTargets = targets ? toArray(targets) : parsedTargets,
             propTweenLookup = this._ptLookup,
             firstPT = this._pt,
             overwrittenProps,
             curLookup,
             curOverwriteProps,
             props,
             p,
             pt,
             i;
     
         if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
           vars === "all" && (this._pt = 0);
           return _interrupt(this);
         }
     
         overwrittenProps = this._op = this._op || [];
     
         if (vars !== "all") {
           //so people can pass in a comma-delimited list of property names
           if (_isString(vars)) {
             p = {};
     
             _forEachName(vars, function (name) {
               return p[name] = 1;
             });
     
             vars = p;
           }
     
           vars = _addAliasesToVars(parsedTargets, vars);
         }
     
         i = parsedTargets.length;
     
         while (i--) {
           if (~killingTargets.indexOf(parsedTargets[i])) {
             curLookup = propTweenLookup[i];
     
             if (vars === "all") {
               overwrittenProps[i] = vars;
               props = curLookup;
               curOverwriteProps = {};
             } else {
               curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
               props = vars;
             }
     
             for (p in props) {
               pt = curLookup && curLookup[p];
     
               if (pt) {
                 if (!("kill" in pt.d) || pt.d.kill(p) === true) {
                   _removeLinkedListItem(this, pt, "_pt");
                 }
     
                 delete curLookup[p];
               }
     
               if (curOverwriteProps !== "all") {
                 curOverwriteProps[p] = 1;
               }
             }
           }
         }
     
         this._initted && !this._pt && firstPT && _interrupt(this); //if all tweening properties are killed, kill the tween. Without this line, if there's a tween with multiple targets and then you killTweensOf() each target individually, the tween would technically still remain active and fire its onComplete even though there aren't any more properties tweening.
     
         return this;
       };
     
       Tween.to = function to(targets, vars) {
         return new Tween(targets, vars, arguments[2]);
       };
     
       Tween.from = function from(targets, vars) {
         return _createTweenType(1, arguments);
       };
     
       Tween.delayedCall = function delayedCall(delay, callback, params, scope) {
         return new Tween(callback, 0, {
           immediateRender: false,
           lazy: false,
           overwrite: false,
           delay: delay,
           onComplete: callback,
           onReverseComplete: callback,
           onCompleteParams: params,
           onReverseCompleteParams: params,
           callbackScope: scope
         });
       };
     
       Tween.fromTo = function fromTo(targets, fromVars, toVars) {
         return _createTweenType(2, arguments);
       };
     
       Tween.set = function set(targets, vars) {
         vars.duration = 0;
         vars.repeatDelay || (vars.repeat = 0);
         return new Tween(targets, vars);
       };
     
       Tween.killTweensOf = function killTweensOf(targets, props, onlyActive) {
         return _globalTimeline.killTweensOf(targets, props, onlyActive);
       };
     
       return Tween;
     }(Animation);
     
     _setDefaults(Tween.prototype, {
       _targets: [],
       _lazy: 0,
       _startAt: 0,
       _op: 0,
       _onInit: 0
     }); //add the pertinent timeline methods to Tween instances so that users can chain conveniently and create a timeline automatically. (removed due to concerns that it'd ultimately add to more confusion especially for beginners)
     // _forEachName("to,from,fromTo,set,call,add,addLabel,addPause", name => {
     // 	Tween.prototype[name] = function() {
     // 		let tl = new Timeline();
     // 		return _addToTimeline(tl, this)[name].apply(tl, toArray(arguments));
     // 	}
     // });
     //for backward compatibility. Leverage the timeline calls.
     
     
     _forEachName("staggerTo,staggerFrom,staggerFromTo", function (name) {
       Tween[name] = function () {
         var tl = new Timeline(),
             params = _slice.call(arguments, 0);
     
         params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
         return tl[name].apply(tl, params);
       };
     });
     /*
      * --------------------------------------------------------------------------------------
      * PROPTWEEN
      * --------------------------------------------------------------------------------------
      */
     
     
     var _setterPlain = function _setterPlain(target, property, value) {
       return target[property] = value;
     },
         _setterFunc = function _setterFunc(target, property, value) {
       return target[property](value);
     },
         _setterFuncWithParam = function _setterFuncWithParam(target, property, value, data) {
       return target[property](data.fp, value);
     },
         _setterAttribute = function _setterAttribute(target, property, value) {
       return target.setAttribute(property, value);
     },
         _getSetter = function _getSetter(target, property) {
       return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
     },
         _renderPlain = function _renderPlain(ratio, data) {
       return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1000000) / 1000000, data);
     },
         _renderBoolean = function _renderBoolean(ratio, data) {
       return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
     },
         _renderComplexString = function _renderComplexString(ratio, data) {
       var pt = data._pt,
           s = "";
     
       if (!ratio && data.b) {
         //b = beginning string
         s = data.b;
       } else if (ratio === 1 && data.e) {
         //e = ending string
         s = data.e;
       } else {
         while (pt) {
           s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 10000) / 10000) + s; //we use the "p" property for the text inbetween (like a suffix). And in the context of a complex string, the modifier (m) is typically just Math.round(), like for RGB colors.
     
           pt = pt._next;
         }
     
         s += data.c; //we use the "c" of the PropTween to store the final chunk of non-numeric text.
       }
     
       data.set(data.t, data.p, s, data);
     },
         _renderPropTweens = function _renderPropTweens(ratio, data) {
       var pt = data._pt;
     
       while (pt) {
         pt.r(ratio, pt.d);
         pt = pt._next;
       }
     },
         _addPluginModifier = function _addPluginModifier(modifier, tween, target, property) {
       var pt = this._pt,
           next;
     
       while (pt) {
         next = pt._next;
         pt.p === property && pt.modifier(modifier, tween, target);
         pt = next;
       }
     },
         _killPropTweensOf = function _killPropTweensOf(property) {
       var pt = this._pt,
           hasNonDependentRemaining,
           next;
     
       while (pt) {
         next = pt._next;
     
         if (pt.p === property && !pt.op || pt.op === property) {
           _removeLinkedListItem(this, pt, "_pt");
         } else if (!pt.dep) {
           hasNonDependentRemaining = 1;
         }
     
         pt = next;
       }
     
       return !hasNonDependentRemaining;
     },
         _setterWithModifier = function _setterWithModifier(target, property, value, data) {
       data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
     },
         _sortPropTweensByPriority = function _sortPropTweensByPriority(parent) {
       var pt = parent._pt,
           next,
           pt2,
           first,
           last; //sorts the PropTween linked list in order of priority because some plugins need to do their work after ALL of the PropTweens were created (like RoundPropsPlugin and ModifiersPlugin)
     
       while (pt) {
         next = pt._next;
         pt2 = first;
     
         while (pt2 && pt2.pr > pt.pr) {
           pt2 = pt2._next;
         }
     
         if (pt._prev = pt2 ? pt2._prev : last) {
           pt._prev._next = pt;
         } else {
           first = pt;
         }
     
         if (pt._next = pt2) {
           pt2._prev = pt;
         } else {
           last = pt;
         }
     
         pt = next;
       }
     
       parent._pt = first;
     }; //PropTween key: t = target, p = prop, r = renderer, d = data, s = start, c = change, op = overwriteProperty (ONLY populated when it's different than p), pr = priority, _next/_prev for the linked list siblings, set = setter, m = modifier, mSet = modifierSetter (the original setter, before a modifier was added)
     
     
     var PropTween = /*#__PURE__*/function () {
       function PropTween(next, target, prop, start, change, renderer, data, setter, priority) {
         this.t = target;
         this.s = start;
         this.c = change;
         this.p = prop;
         this.r = renderer || _renderPlain;
         this.d = data || this;
         this.set = setter || _setterPlain;
         this.pr = priority || 0;
         this._next = next;
     
         if (next) {
           next._prev = this;
         }
       }
     
       var _proto4 = PropTween.prototype;
     
       _proto4.modifier = function modifier(func, tween, target) {
         this.mSet = this.mSet || this.set; //in case it was already set (a PropTween can only have one modifier)
     
         this.set = _setterWithModifier;
         this.m = func;
         this.mt = target; //modifier target
     
         this.tween = tween;
       };
     
       return PropTween;
     }(); //Initialization tasks
     
     _forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (name) {
       return _reservedProps[name] = 1;
     });
     
     _globals.TweenMax = _globals.TweenLite = Tween;
     _globals.TimelineLite = _globals.TimelineMax = Timeline;
     _globalTimeline = new Timeline({
       sortChildren: false,
       defaults: _defaults,
       autoRemoveChildren: true,
       id: "root",
       smoothChildTiming: true
     });
     _config.stringFilter = _colorStringFilter;
     /*
      * --------------------------------------------------------------------------------------
      * GSAP
      * --------------------------------------------------------------------------------------
      */
     
     var _gsap = {
       registerPlugin: function registerPlugin() {
         for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
           args[_key2] = arguments[_key2];
         }
     
         args.forEach(function (config) {
           return _createPlugin(config);
         });
       },
       timeline: function timeline(vars) {
         return new Timeline(vars);
       },
       getTweensOf: function getTweensOf(targets, onlyActive) {
         return _globalTimeline.getTweensOf(targets, onlyActive);
       },
       getProperty: function getProperty(target, property, unit, uncache) {
         _isString(target) && (target = toArray(target)[0]); //in case selector text or an array is passed in
     
         var getter = _getCache(target || {}).get,
             format = unit ? _passThrough : _numericIfPossible;
     
         unit === "native" && (unit = "");
         return !target ? target : !property ? function (property, unit, uncache) {
           return format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
         } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
       },
       quickSetter: function quickSetter(target, property, unit) {
         target = toArray(target);
     
         if (target.length > 1) {
           var setters = target.map(function (t) {
             return gsap.quickSetter(t, property, unit);
           }),
               l = setters.length;
           return function (value) {
             var i = l;
     
             while (i--) {
               setters[i](value);
             }
           };
         }
     
         target = target[0] || {};
     
         var Plugin = _plugins[property],
             cache = _getCache(target),
             p = cache.harness && (cache.harness.aliases || {})[property] || property,
             // in case it's an alias, like "rotate" for "rotation".
         setter = Plugin ? function (value) {
           var p = new Plugin();
           _quickTween._pt = 0;
           p.init(target, unit ? value + unit : value, _quickTween, 0, [target]);
           p.render(1, p);
           _quickTween._pt && _renderPropTweens(1, _quickTween);
         } : cache.set(target, p);
     
         return Plugin ? setter : function (value) {
           return setter(target, p, unit ? value + unit : value, cache, 1);
         };
       },
       quickTo: function quickTo(target, property, vars) {
         var _merge2;
     
         var tween = gsap.to(target, _merge((_merge2 = {}, _merge2[property] = "+=0.1", _merge2.paused = true, _merge2), vars || {})),
             func = function func(value, start, startIsRelative) {
           return tween.resetTo(property, value, start, startIsRelative);
         };
     
         func.tween = tween;
         return func;
       },
       isTweening: function isTweening(targets) {
         return _globalTimeline.getTweensOf(targets, true).length > 0;
       },
       defaults: function defaults(value) {
         value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
         return _mergeDeep(_defaults, value || {});
       },
       config: function config(value) {
         return _mergeDeep(_config, value || {});
       },
       registerEffect: function registerEffect(_ref3) {
         var name = _ref3.name,
             effect = _ref3.effect,
             plugins = _ref3.plugins,
             defaults = _ref3.defaults,
             extendTimeline = _ref3.extendTimeline;
         (plugins || "").split(",").forEach(function (pluginName) {
           return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
         });
     
         _effects[name] = function (targets, vars, tl) {
           return effect(toArray(targets), _setDefaults(vars || {}, defaults), tl);
         };
     
         if (extendTimeline) {
           Timeline.prototype[name] = function (targets, vars, position) {
             return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {}, this), position);
           };
         }
       },
       registerEase: function registerEase(name, ease) {
         _easeMap[name] = _parseEase(ease);
       },
       parseEase: function parseEase(ease, defaultEase) {
         return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
       },
       getById: function getById(id) {
         return _globalTimeline.getById(id);
       },
       exportRoot: function exportRoot(vars, includeDelayedCalls) {
         if (vars === void 0) {
           vars = {};
         }
     
         var tl = new Timeline(vars),
             child,
             next;
         tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);
     
         _globalTimeline.remove(tl);
     
         tl._dp = 0; //otherwise it'll get re-activated when adding children and be re-introduced into _globalTimeline's linked list (then added to itself).
     
         tl._time = tl._tTime = _globalTimeline._time;
         child = _globalTimeline._first;
     
         while (child) {
           next = child._next;
     
           if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) {
             _addToTimeline(tl, child, child._start - child._delay);
           }
     
           child = next;
         }
     
         _addToTimeline(_globalTimeline, tl, 0);
     
         return tl;
       },
       utils: {
         wrap: wrap,
         wrapYoyo: wrapYoyo,
         distribute: distribute,
         random: random,
         snap: snap,
         normalize: normalize,
         getUnit: getUnit,
         clamp: clamp,
         splitColor: splitColor,
         toArray: toArray,
         selector: selector,
         mapRange: mapRange,
         pipe: pipe,
         unitize: unitize,
         interpolate: interpolate,
         shuffle: shuffle
       },
       install: _install,
       effects: _effects,
       ticker: _ticker,
       updateRoot: Timeline.updateRoot,
       plugins: _plugins,
       globalTimeline: _globalTimeline,
       core: {
         PropTween: PropTween,
         globals: _addGlobal,
         Tween: Tween,
         Timeline: Timeline,
         Animation: Animation,
         getCache: _getCache,
         _removeLinkedListItem: _removeLinkedListItem,
         suppressOverwrites: function suppressOverwrites(value) {
           return _suppressOverwrites = value;
         }
       }
     };
     
     _forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function (name) {
       return _gsap[name] = Tween[name];
     });
     
     _ticker.add(Timeline.updateRoot);
     
     _quickTween = _gsap.to({}, {
       duration: 0
     }); // ---- EXTRA PLUGINS --------------------------------------------------------
     
     var _getPluginPropTween = function _getPluginPropTween(plugin, prop) {
       var pt = plugin._pt;
     
       while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) {
         pt = pt._next;
       }
     
       return pt;
     },
         _addModifiers = function _addModifiers(tween, modifiers) {
       var targets = tween._targets,
           p,
           i,
           pt;
     
       for (p in modifiers) {
         i = targets.length;
     
         while (i--) {
           pt = tween._ptLookup[i][p];
     
           if (pt && (pt = pt.d)) {
             if (pt._pt) {
               // is a plugin
               pt = _getPluginPropTween(pt, p);
             }
     
             pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
           }
         }
       }
     },
         _buildModifierPlugin = function _buildModifierPlugin(name, modifier) {
       return {
         name: name,
         rawVars: 1,
         //don't pre-process function-based values or "random()" strings.
         init: function init(target, vars, tween) {
           tween._onInit = function (tween) {
             var temp, p;
     
             if (_isString(vars)) {
               temp = {};
     
               _forEachName(vars, function (name) {
                 return temp[name] = 1;
               }); //if the user passes in a comma-delimited list of property names to roundProps, like "x,y", we round to whole numbers.
     
     
               vars = temp;
             }
     
             if (modifier) {
               temp = {};
     
               for (p in vars) {
                 temp[p] = modifier(vars[p]);
               }
     
               vars = temp;
             }
     
             _addModifiers(tween, vars);
           };
         }
       };
     }; //register core plugins
     
     
     var gsap = _gsap.registerPlugin({
       name: "attr",
       init: function init(target, vars, tween, index, targets) {
         var p, pt;
     
         for (p in vars) {
           pt = this.add(target, "setAttribute", (target.getAttribute(p) || 0) + "", vars[p], index, targets, 0, 0, p);
           pt && (pt.op = p);
     
           this._props.push(p);
         }
       }
     }, {
       name: "endArray",
       init: function init(target, value) {
         var i = value.length;
     
         while (i--) {
           this.add(target, i, target[i] || 0, value[i]);
         }
       }
     }, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap; //to prevent the core plugins from being dropped via aggressive tree shaking, we must include them in the variable declaration in this way.
     
     Tween.version = Timeline.version = gsap.version = "3.10.4";
     _coreReady = 1;
     _windowExists() && _wake();
     var Power0 = _easeMap.Power0,
         Power1 = _easeMap.Power1,
         Power2 = _easeMap.Power2,
         Power3 = _easeMap.Power3,
         Power4 = _easeMap.Power4,
         Linear = _easeMap.Linear,
         Quad = _easeMap.Quad,
         Cubic = _easeMap.Cubic,
         Quart = _easeMap.Quart,
         Quint = _easeMap.Quint,
         Strong = _easeMap.Strong,
         Elastic = _easeMap.Elastic,
         Back = _easeMap.Back,
         SteppedEase = _easeMap.SteppedEase,
         Bounce = _easeMap.Bounce,
         Sine = _easeMap.Sine,
         Expo = _easeMap.Expo,
         Circ = _easeMap.Circ;
     
      //export some internal methods/orojects for use in CSSPlugin so that we can externalize that file and allow custom builds that exclude it.
     
     
     
     /***/ }),
     
     /***/ "./node_modules/gsap/index.js":
     /*!************************************!*\
       !*** ./node_modules/gsap/index.js ***!
       \************************************/
     /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
     
     "use strict";
     __webpack_require__.r(__webpack_exports__);
     /* harmony export */ __webpack_require__.d(__webpack_exports__, {
     /* harmony export */   "Back": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Back),
     /* harmony export */   "Bounce": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Bounce),
     /* harmony export */   "CSSPlugin": () => (/* reexport safe */ _CSSPlugin_js__WEBPACK_IMPORTED_MODULE_1__.CSSPlugin),
     /* harmony export */   "Circ": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Circ),
     /* harmony export */   "Cubic": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Cubic),
     /* harmony export */   "Elastic": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Elastic),
     /* harmony export */   "Expo": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Expo),
     /* harmony export */   "Linear": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Linear),
     /* harmony export */   "Power0": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power0),
     /* harmony export */   "Power1": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power1),
     /* harmony export */   "Power2": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power2),
     /* harmony export */   "Power3": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power3),
     /* harmony export */   "Power4": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power4),
     /* harmony export */   "Quad": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Quad),
     /* harmony export */   "Quart": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Quart),
     /* harmony export */   "Quint": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Quint),
     /* harmony export */   "Sine": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Sine),
     /* harmony export */   "SteppedEase": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.SteppedEase),
     /* harmony export */   "Strong": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Strong),
     /* harmony export */   "TimelineLite": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.TimelineLite),
     /* harmony export */   "TimelineMax": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.TimelineMax),
     /* harmony export */   "TweenLite": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.TweenLite),
     /* harmony export */   "TweenMax": () => (/* binding */ TweenMaxWithCSS),
     /* harmony export */   "default": () => (/* binding */ gsapWithCSS),
     /* harmony export */   "gsap": () => (/* binding */ gsapWithCSS)
     /* harmony export */ });
     /* harmony import */ var _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gsap-core.js */ "./node_modules/gsap/gsap-core.js");
     /* harmony import */ var _CSSPlugin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CSSPlugin.js */ "./node_modules/gsap/CSSPlugin.js");
     
     
     var gsapWithCSS = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(_CSSPlugin_js__WEBPACK_IMPORTED_MODULE_1__.CSSPlugin) || _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap,
         // to protect from tree shaking
     TweenMaxWithCSS = gsapWithCSS.core.Tween;
     
     
     /***/ }),
     
     /***/ "./node_modules/html-entities/lib/index.js":
     /*!*************************************************!*\
       !*** ./node_modules/html-entities/lib/index.js ***!
       \*************************************************/
     /***/ (function(__unused_webpack_module, exports, __webpack_require__) {
     
     "use strict";
     
     
     var __assign = this && this.__assign || function () {
       __assign = Object.assign || function (t) {
         for (var s, i = 1, n = arguments.length; i < n; i++) {
           s = arguments[i];
     
           for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
         }
     
         return t;
       };
     
       return __assign.apply(this, arguments);
     };
     
     Object.defineProperty(exports, "__esModule", ({
       value: true
     }));
     
     var named_references_1 = __webpack_require__(/*! ./named-references */ "./node_modules/html-entities/lib/named-references.js");
     
     var numeric_unicode_map_1 = __webpack_require__(/*! ./numeric-unicode-map */ "./node_modules/html-entities/lib/numeric-unicode-map.js");
     
     var surrogate_pairs_1 = __webpack_require__(/*! ./surrogate-pairs */ "./node_modules/html-entities/lib/surrogate-pairs.js");
     
     var allNamedReferences = __assign(__assign({}, named_references_1.namedReferences), {
       all: named_references_1.namedReferences.html5
     });
     
     var encodeRegExps = {
       specialChars: /[<>'"&]/g,
       nonAscii: /(?:[<>'"&\u0080-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
       nonAsciiPrintable: /(?:[<>'"&\x01-\x08\x11-\x15\x17-\x1F\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
       extensive: /(?:[\x01-\x0c\x0e-\x1f\x21-\x2c\x2e-\x2f\x3a-\x40\x5b-\x60\x7b-\x7d\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g
     };
     var defaultEncodeOptions = {
       mode: 'specialChars',
       level: 'all',
       numeric: 'decimal'
     };
     /** Encodes all the necessary (specified by `level`) characters in the text */
     
     function encode(text, _a) {
       var _b = _a === void 0 ? defaultEncodeOptions : _a,
           _c = _b.mode,
           mode = _c === void 0 ? 'specialChars' : _c,
           _d = _b.numeric,
           numeric = _d === void 0 ? 'decimal' : _d,
           _e = _b.level,
           level = _e === void 0 ? 'all' : _e;
     
       if (!text) {
         return '';
       }
     
       var encodeRegExp = encodeRegExps[mode];
       var references = allNamedReferences[level].characters;
       var isHex = numeric === 'hexadecimal';
       encodeRegExp.lastIndex = 0;
     
       var _b = encodeRegExp.exec(text);
     
       var _c;
     
       if (_b) {
         _c = '';
         var _d = 0;
     
         do {
           if (_d !== _b.index) {
             _c += text.substring(_d, _b.index);
           }
     
           var _e = _b[0];
           var result_1 = references[_e];
     
           if (!result_1) {
             var code_1 = _e.length > 1 ? surrogate_pairs_1.getCodePoint(_e, 0) : _e.charCodeAt(0);
             result_1 = (isHex ? '&#x' + code_1.toString(16) : '&#' + code_1) + ';';
           }
     
           _c += result_1;
           _d = _b.index + _e.length;
         } while (_b = encodeRegExp.exec(text));
     
         if (_d !== text.length) {
           _c += text.substring(_d);
         }
       } else {
         _c = text;
       }
     
       return _c;
     }
     
     exports.encode = encode;
     var defaultDecodeOptions = {
       scope: 'body',
       level: 'all'
     };
     var strict = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);/g;
     var attribute = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+)[;=]?/g;
     var baseDecodeRegExps = {
       xml: {
         strict: strict,
         attribute: attribute,
         body: named_references_1.bodyRegExps.xml
       },
       html4: {
         strict: strict,
         attribute: attribute,
         body: named_references_1.bodyRegExps.html4
       },
       html5: {
         strict: strict,
         attribute: attribute,
         body: named_references_1.bodyRegExps.html5
       }
     };
     
     var decodeRegExps = __assign(__assign({}, baseDecodeRegExps), {
       all: baseDecodeRegExps.html5
     });
     
     var fromCharCode = String.fromCharCode;
     var outOfBoundsChar = fromCharCode(65533);
     var defaultDecodeEntityOptions = {
       level: 'all'
     };
     /** Decodes a single entity */
     
     function decodeEntity(entity, _a) {
       var _b = (_a === void 0 ? defaultDecodeEntityOptions : _a).level,
           level = _b === void 0 ? 'all' : _b;
     
       if (!entity) {
         return '';
       }
     
       var _b = entity;
       var decodeEntityLastChar_1 = entity[entity.length - 1];
     
       if (false) {} else if (false) {} else {
         var decodeResultByReference_1 = allNamedReferences[level].entities[entity];
     
         if (decodeResultByReference_1) {
           _b = decodeResultByReference_1;
         } else if (entity[0] === '&' && entity[1] === '#') {
           var decodeSecondChar_1 = entity[2];
           var decodeCode_1 = decodeSecondChar_1 == 'x' || decodeSecondChar_1 == 'X' ? parseInt(entity.substr(3), 16) : parseInt(entity.substr(2));
           _b = decodeCode_1 >= 0x10ffff ? outOfBoundsChar : decodeCode_1 > 65535 ? surrogate_pairs_1.fromCodePoint(decodeCode_1) : fromCharCode(numeric_unicode_map_1.numericUnicodeMap[decodeCode_1] || decodeCode_1);
         }
       }
     
       return _b;
     }
     
     exports.decodeEntity = decodeEntity;
     /** Decodes all entities in the text */
     
     function decode(text, _a) {
       var decodeSecondChar_1 = _a === void 0 ? defaultDecodeOptions : _a,
           decodeCode_1 = decodeSecondChar_1.level,
           level = decodeCode_1 === void 0 ? 'all' : decodeCode_1,
           _b = decodeSecondChar_1.scope,
           scope = _b === void 0 ? level === 'xml' ? 'strict' : 'body' : _b;
     
       if (!text) {
         return '';
       }
     
       var decodeRegExp = decodeRegExps[level][scope];
       var references = allNamedReferences[level].entities;
       var isAttribute = scope === 'attribute';
       var isStrict = scope === 'strict';
       decodeRegExp.lastIndex = 0;
       var replaceMatch_1 = decodeRegExp.exec(text);
       var replaceResult_1;
     
       if (replaceMatch_1) {
         replaceResult_1 = '';
         var replaceLastIndex_1 = 0;
     
         do {
           if (replaceLastIndex_1 !== replaceMatch_1.index) {
             replaceResult_1 += text.substring(replaceLastIndex_1, replaceMatch_1.index);
           }
     
           var replaceInput_1 = replaceMatch_1[0];
           var decodeResult_1 = replaceInput_1;
           var decodeEntityLastChar_2 = replaceInput_1[replaceInput_1.length - 1];
     
           if (isAttribute && decodeEntityLastChar_2 === '=') {
             decodeResult_1 = replaceInput_1;
           } else if (isStrict && decodeEntityLastChar_2 !== ';') {
             decodeResult_1 = replaceInput_1;
           } else {
             var decodeResultByReference_2 = references[replaceInput_1];
     
             if (decodeResultByReference_2) {
               decodeResult_1 = decodeResultByReference_2;
             } else if (replaceInput_1[0] === '&' && replaceInput_1[1] === '#') {
               var decodeSecondChar_2 = replaceInput_1[2];
               var decodeCode_2 = decodeSecondChar_2 == 'x' || decodeSecondChar_2 == 'X' ? parseInt(replaceInput_1.substr(3), 16) : parseInt(replaceInput_1.substr(2));
               decodeResult_1 = decodeCode_2 >= 0x10ffff ? outOfBoundsChar : decodeCode_2 > 65535 ? surrogate_pairs_1.fromCodePoint(decodeCode_2) : fromCharCode(numeric_unicode_map_1.numericUnicodeMap[decodeCode_2] || decodeCode_2);
             }
           }
     
           replaceResult_1 += decodeResult_1;
           replaceLastIndex_1 = replaceMatch_1.index + replaceInput_1.length;
         } while (replaceMatch_1 = decodeRegExp.exec(text));
     
         if (replaceLastIndex_1 !== text.length) {
           replaceResult_1 += text.substring(replaceLastIndex_1);
         }
       } else {
         replaceResult_1 = text;
       }
     
       return replaceResult_1;
     }
     
     exports.decode = decode;
     
     /***/ }),
     
     /***/ "./node_modules/html-entities/lib/named-references.js":
     /*!************************************************************!*\
       !*** ./node_modules/html-entities/lib/named-references.js ***!
       \************************************************************/
     /***/ ((__unused_webpack_module, exports) => {
     
     "use strict";
     
     
     Object.defineProperty(exports, "__esModule", ({
       value: true
     }));
     exports.bodyRegExps = {
       xml: /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g,
       html4: /&(?:nbsp|iexcl|cent|pound|curren|yen|brvbar|sect|uml|copy|ordf|laquo|not|shy|reg|macr|deg|plusmn|sup2|sup3|acute|micro|para|middot|cedil|sup1|ordm|raquo|frac14|frac12|frac34|iquest|Agrave|Aacute|Acirc|Atilde|Auml|Aring|AElig|Ccedil|Egrave|Eacute|Ecirc|Euml|Igrave|Iacute|Icirc|Iuml|ETH|Ntilde|Ograve|Oacute|Ocirc|Otilde|Ouml|times|Oslash|Ugrave|Uacute|Ucirc|Uuml|Yacute|THORN|szlig|agrave|aacute|acirc|atilde|auml|aring|aelig|ccedil|egrave|eacute|ecirc|euml|igrave|iacute|icirc|iuml|eth|ntilde|ograve|oacute|ocirc|otilde|ouml|divide|oslash|ugrave|uacute|ucirc|uuml|yacute|thorn|yuml|quot|amp|lt|gt|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g,
       html5: /&(?:AElig|AMP|Aacute|Acirc|Agrave|Aring|Atilde|Auml|COPY|Ccedil|ETH|Eacute|Ecirc|Egrave|Euml|GT|Iacute|Icirc|Igrave|Iuml|LT|Ntilde|Oacute|Ocirc|Ograve|Oslash|Otilde|Ouml|QUOT|REG|THORN|Uacute|Ucirc|Ugrave|Uuml|Yacute|aacute|acirc|acute|aelig|agrave|amp|aring|atilde|auml|brvbar|ccedil|cedil|cent|copy|curren|deg|divide|eacute|ecirc|egrave|eth|euml|frac12|frac14|frac34|gt|iacute|icirc|iexcl|igrave|iquest|iuml|laquo|lt|macr|micro|middot|nbsp|not|ntilde|oacute|ocirc|ograve|ordf|ordm|oslash|otilde|ouml|para|plusmn|pound|quot|raquo|reg|sect|shy|sup1|sup2|sup3|szlig|thorn|times|uacute|ucirc|ugrave|uml|uuml|yacute|yen|yuml|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g
     };
     exports.namedReferences = {
       xml: {
         entities: {
           "&lt;": "<",
           "&gt;": ">",
           "&quot;": '"',
           "&apos;": "'",
           "&amp;": "&"
         },
         characters: {
           "<": "&lt;",
           ">": "&gt;",
           '"': "&quot;",
           "'": "&apos;",
           "&": "&amp;"
         }
       },
       html4: {
         entities: {
           "&apos;": "'",
           "&nbsp": " ",
           "&nbsp;": " ",
           "&iexcl": "¡",
           "&iexcl;": "¡",
           "&cent": "¢",
           "&cent;": "¢",
           "&pound": "£",
           "&pound;": "£",
           "&curren": "¤",
           "&curren;": "¤",
           "&yen": "¥",
           "&yen;": "¥",
           "&brvbar": "¦",
           "&brvbar;": "¦",
           "&sect": "§",
           "&sect;": "§",
           "&uml": "¨",
           "&uml;": "¨",
           "&copy": "©",
           "&copy;": "©",
           "&ordf": "ª",
           "&ordf;": "ª",
           "&laquo": "«",
           "&laquo;": "«",
           "&not": "¬",
           "&not;": "¬",
           "&shy": "­",
           "&shy;": "­",
           "&reg": "®",
           "&reg;": "®",
           "&macr": "¯",
           "&macr;": "¯",
           "&deg": "°",
           "&deg;": "°",
           "&plusmn": "±",
           "&plusmn;": "±",
           "&sup2": "²",
           "&sup2;": "²",
           "&sup3": "³",
           "&sup3;": "³",
           "&acute": "´",
           "&acute;": "´",
           "&micro": "µ",
           "&micro;": "µ",
           "&para": "¶",
           "&para;": "¶",
           "&middot": "·",
           "&middot;": "·",
           "&cedil": "¸",
           "&cedil;": "¸",
           "&sup1": "¹",
           "&sup1;": "¹",
           "&ordm": "º",
           "&ordm;": "º",
           "&raquo": "»",
           "&raquo;": "»",
           "&frac14": "¼",
           "&frac14;": "¼",
           "&frac12": "½",
           "&frac12;": "½",
           "&frac34": "¾",
           "&frac34;": "¾",
           "&iquest": "¿",
           "&iquest;": "¿",
           "&Agrave": "À",
           "&Agrave;": "À",
           "&Aacute": "Á",
           "&Aacute;": "Á",
           "&Acirc": "Â",
           "&Acirc;": "Â",
           "&Atilde": "Ã",
           "&Atilde;": "Ã",
           "&Auml": "Ä",
           "&Auml;": "Ä",
           "&Aring": "Å",
           "&Aring;": "Å",
           "&AElig": "Æ",
           "&AElig;": "Æ",
           "&Ccedil": "Ç",
           "&Ccedil;": "Ç",
           "&Egrave": "È",
           "&Egrave;": "È",
           "&Eacute": "É",
           "&Eacute;": "É",
           "&Ecirc": "Ê",
           "&Ecirc;": "Ê",
           "&Euml": "Ë",
           "&Euml;": "Ë",
           "&Igrave": "Ì",
           "&Igrave;": "Ì",
           "&Iacute": "Í",
           "&Iacute;": "Í",
           "&Icirc": "Î",
           "&Icirc;": "Î",
           "&Iuml": "Ï",
           "&Iuml;": "Ï",
           "&ETH": "Ð",
           "&ETH;": "Ð",
           "&Ntilde": "Ñ",
           "&Ntilde;": "Ñ",
           "&Ograve": "Ò",
           "&Ograve;": "Ò",
           "&Oacute": "Ó",
           "&Oacute;": "Ó",
           "&Ocirc": "Ô",
           "&Ocirc;": "Ô",
           "&Otilde": "Õ",
           "&Otilde;": "Õ",
           "&Ouml": "Ö",
           "&Ouml;": "Ö",
           "&times": "×",
           "&times;": "×",
           "&Oslash": "Ø",
           "&Oslash;": "Ø",
           "&Ugrave": "Ù",
           "&Ugrave;": "Ù",
           "&Uacute": "Ú",
           "&Uacute;": "Ú",
           "&Ucirc": "Û",
           "&Ucirc;": "Û",
           "&Uuml": "Ü",
           "&Uuml;": "Ü",
           "&Yacute": "Ý",
           "&Yacute;": "Ý",
           "&THORN": "Þ",
           "&THORN;": "Þ",
           "&szlig": "ß",
           "&szlig;": "ß",
           "&agrave": "à",
           "&agrave;": "à",
           "&aacute": "á",
           "&aacute;": "á",
           "&acirc": "â",
           "&acirc;": "â",
           "&atilde": "ã",
           "&atilde;": "ã",
           "&auml": "ä",
           "&auml;": "ä",
           "&aring": "å",
           "&aring;": "å",
           "&aelig": "æ",
           "&aelig;": "æ",
           "&ccedil": "ç",
           "&ccedil;": "ç",
           "&egrave": "è",
           "&egrave;": "è",
           "&eacute": "é",
           "&eacute;": "é",
           "&ecirc": "ê",
           "&ecirc;": "ê",
           "&euml": "ë",
           "&euml;": "ë",
           "&igrave": "ì",
           "&igrave;": "ì",
           "&iacute": "í",
           "&iacute;": "í",
           "&icirc": "î",
           "&icirc;": "î",
           "&iuml": "ï",
           "&iuml;": "ï",
           "&eth": "ð",
           "&eth;": "ð",
           "&ntilde": "ñ",
           "&ntilde;": "ñ",
           "&ograve": "ò",
           "&ograve;": "ò",
           "&oacute": "ó",
           "&oacute;": "ó",
           "&ocirc": "ô",
           "&ocirc;": "ô",
           "&otilde": "õ",
           "&otilde;": "õ",
           "&ouml": "ö",
           "&ouml;": "ö",
           "&divide": "÷",
           "&divide;": "÷",
           "&oslash": "ø",
           "&oslash;": "ø",
           "&ugrave": "ù",
           "&ugrave;": "ù",
           "&uacute": "ú",
           "&uacute;": "ú",
           "&ucirc": "û",
           "&ucirc;": "û",
           "&uuml": "ü",
           "&uuml;": "ü",
           "&yacute": "ý",
           "&yacute;": "ý",
           "&thorn": "þ",
           "&thorn;": "þ",
           "&yuml": "ÿ",
           "&yuml;": "ÿ",
           "&quot": '"',
           "&quot;": '"',
           "&amp": "&",
           "&amp;": "&",
           "&lt": "<",
           "&lt;": "<",
           "&gt": ">",
           "&gt;": ">",
           "&OElig;": "Œ",
           "&oelig;": "œ",
           "&Scaron;": "Š",
           "&scaron;": "š",
           "&Yuml;": "Ÿ",
           "&circ;": "ˆ",
           "&tilde;": "˜",
           "&ensp;": " ",
           "&emsp;": " ",
           "&thinsp;": " ",
           "&zwnj;": "‌",
           "&zwj;": "‍",
           "&lrm;": "‎",
           "&rlm;": "‏",
           "&ndash;": "–",
           "&mdash;": "—",
           "&lsquo;": "‘",
           "&rsquo;": "’",
           "&sbquo;": "‚",
           "&ldquo;": "“",
           "&rdquo;": "”",
           "&bdquo;": "„",
           "&dagger;": "†",
           "&Dagger;": "‡",
           "&permil;": "‰",
           "&lsaquo;": "‹",
           "&rsaquo;": "›",
           "&euro;": "€",
           "&fnof;": "ƒ",
           "&Alpha;": "Α",
           "&Beta;": "Β",
           "&Gamma;": "Γ",
           "&Delta;": "Δ",
           "&Epsilon;": "Ε",
           "&Zeta;": "Ζ",
           "&Eta;": "Η",
           "&Theta;": "Θ",
           "&Iota;": "Ι",
           "&Kappa;": "Κ",
           "&Lambda;": "Λ",
           "&Mu;": "Μ",
           "&Nu;": "Ν",
           "&Xi;": "Ξ",
           "&Omicron;": "Ο",
           "&Pi;": "Π",
           "&Rho;": "Ρ",
           "&Sigma;": "Σ",
           "&Tau;": "Τ",
           "&Upsilon;": "Υ",
           "&Phi;": "Φ",
           "&Chi;": "Χ",
           "&Psi;": "Ψ",
           "&Omega;": "Ω",
           "&alpha;": "α",
           "&beta;": "β",
           "&gamma;": "γ",
           "&delta;": "δ",
           "&epsilon;": "ε",
           "&zeta;": "ζ",
           "&eta;": "η",
           "&theta;": "θ",
           "&iota;": "ι",
           "&kappa;": "κ",
           "&lambda;": "λ",
           "&mu;": "μ",
           "&nu;": "ν",
           "&xi;": "ξ",
           "&omicron;": "ο",
           "&pi;": "π",
           "&rho;": "ρ",
           "&sigmaf;": "ς",
           "&sigma;": "σ",
           "&tau;": "τ",
           "&upsilon;": "υ",
           "&phi;": "φ",
           "&chi;": "χ",
           "&psi;": "ψ",
           "&omega;": "ω",
           "&thetasym;": "ϑ",
           "&upsih;": "ϒ",
           "&piv;": "ϖ",
           "&bull;": "•",
           "&hellip;": "…",
           "&prime;": "′",
           "&Prime;": "″",
           "&oline;": "‾",
           "&frasl;": "⁄",
           "&weierp;": "℘",
           "&image;": "ℑ",
           "&real;": "ℜ",
           "&trade;": "™",
           "&alefsym;": "ℵ",
           "&larr;": "←",
           "&uarr;": "↑",
           "&rarr;": "→",
           "&darr;": "↓",
           "&harr;": "↔",
           "&crarr;": "↵",
           "&lArr;": "⇐",
           "&uArr;": "⇑",
           "&rArr;": "⇒",
           "&dArr;": "⇓",
           "&hArr;": "⇔",
           "&forall;": "∀",
           "&part;": "∂",
           "&exist;": "∃",
           "&empty;": "∅",
           "&nabla;": "∇",
           "&isin;": "∈",
           "&notin;": "∉",
           "&ni;": "∋",
           "&prod;": "∏",
           "&sum;": "∑",
           "&minus;": "−",
           "&lowast;": "∗",
           "&radic;": "√",
           "&prop;": "∝",
           "&infin;": "∞",
           "&ang;": "∠",
           "&and;": "∧",
           "&or;": "∨",
           "&cap;": "∩",
           "&cup;": "∪",
           "&int;": "∫",
           "&there4;": "∴",
           "&sim;": "∼",
           "&cong;": "≅",
           "&asymp;": "≈",
           "&ne;": "≠",
           "&equiv;": "≡",
           "&le;": "≤",
           "&ge;": "≥",
           "&sub;": "⊂",
           "&sup;": "⊃",
           "&nsub;": "⊄",
           "&sube;": "⊆",
           "&supe;": "⊇",
           "&oplus;": "⊕",
           "&otimes;": "⊗",
           "&perp;": "⊥",
           "&sdot;": "⋅",
           "&lceil;": "⌈",
           "&rceil;": "⌉",
           "&lfloor;": "⌊",
           "&rfloor;": "⌋",
           "&lang;": "〈",
           "&rang;": "〉",
           "&loz;": "◊",
           "&spades;": "♠",
           "&clubs;": "♣",
           "&hearts;": "♥",
           "&diams;": "♦"
         },
         characters: {
           "'": "&apos;",
           " ": "&nbsp;",
           "¡": "&iexcl;",
           "¢": "&cent;",
           "£": "&pound;",
           "¤": "&curren;",
           "¥": "&yen;",
           "¦": "&brvbar;",
           "§": "&sect;",
           "¨": "&uml;",
           "©": "&copy;",
           "ª": "&ordf;",
           "«": "&laquo;",
           "¬": "&not;",
           "­": "&shy;",
           "®": "&reg;",
           "¯": "&macr;",
           "°": "&deg;",
           "±": "&plusmn;",
           "²": "&sup2;",
           "³": "&sup3;",
           "´": "&acute;",
           "µ": "&micro;",
           "¶": "&para;",
           "·": "&middot;",
           "¸": "&cedil;",
           "¹": "&sup1;",
           "º": "&ordm;",
           "»": "&raquo;",
           "¼": "&frac14;",
           "½": "&frac12;",
           "¾": "&frac34;",
           "¿": "&iquest;",
           "À": "&Agrave;",
           "Á": "&Aacute;",
           "Â": "&Acirc;",
           "Ã": "&Atilde;",
           "Ä": "&Auml;",
           "Å": "&Aring;",
           "Æ": "&AElig;",
           "Ç": "&Ccedil;",
           "È": "&Egrave;",
           "É": "&Eacute;",
           "Ê": "&Ecirc;",
           "Ë": "&Euml;",
           "Ì": "&Igrave;",
           "Í": "&Iacute;",
           "Î": "&Icirc;",
           "Ï": "&Iuml;",
           "Ð": "&ETH;",
           "Ñ": "&Ntilde;",
           "Ò": "&Ograve;",
           "Ó": "&Oacute;",
           "Ô": "&Ocirc;",
           "Õ": "&Otilde;",
           "Ö": "&Ouml;",
           "×": "&times;",
           "Ø": "&Oslash;",
           "Ù": "&Ugrave;",
           "Ú": "&Uacute;",
           "Û": "&Ucirc;",
           "Ü": "&Uuml;",
           "Ý": "&Yacute;",
           "Þ": "&THORN;",
           "ß": "&szlig;",
           "à": "&agrave;",
           "á": "&aacute;",
           "â": "&acirc;",
           "ã": "&atilde;",
           "ä": "&auml;",
           "å": "&aring;",
           "æ": "&aelig;",
           "ç": "&ccedil;",
           "è": "&egrave;",
           "é": "&eacute;",
           "ê": "&ecirc;",
           "ë": "&euml;",
           "ì": "&igrave;",
           "í": "&iacute;",
           "î": "&icirc;",
           "ï": "&iuml;",
           "ð": "&eth;",
           "ñ": "&ntilde;",
           "ò": "&ograve;",
           "ó": "&oacute;",
           "ô": "&ocirc;",
           "õ": "&otilde;",
           "ö": "&ouml;",
           "÷": "&divide;",
           "ø": "&oslash;",
           "ù": "&ugrave;",
           "ú": "&uacute;",
           "û": "&ucirc;",
           "ü": "&uuml;",
           "ý": "&yacute;",
           "þ": "&thorn;",
           "ÿ": "&yuml;",
           '"': "&quot;",
           "&": "&amp;",
           "<": "&lt;",
           ">": "&gt;",
           "Œ": "&OElig;",
           "œ": "&oelig;",
           "Š": "&Scaron;",
           "š": "&scaron;",
           "Ÿ": "&Yuml;",
           "ˆ": "&circ;",
           "˜": "&tilde;",
           " ": "&ensp;",
           " ": "&emsp;",
           " ": "&thinsp;",
           "‌": "&zwnj;",
           "‍": "&zwj;",
           "‎": "&lrm;",
           "‏": "&rlm;",
           "–": "&ndash;",
           "—": "&mdash;",
           "‘": "&lsquo;",
           "’": "&rsquo;",
           "‚": "&sbquo;",
           "“": "&ldquo;",
           "”": "&rdquo;",
           "„": "&bdquo;",
           "†": "&dagger;",
           "‡": "&Dagger;",
           "‰": "&permil;",
           "‹": "&lsaquo;",
           "›": "&rsaquo;",
           "€": "&euro;",
           "ƒ": "&fnof;",
           "Α": "&Alpha;",
           "Β": "&Beta;",
           "Γ": "&Gamma;",
           "Δ": "&Delta;",
           "Ε": "&Epsilon;",
           "Ζ": "&Zeta;",
           "Η": "&Eta;",
           "Θ": "&Theta;",
           "Ι": "&Iota;",
           "Κ": "&Kappa;",
           "Λ": "&Lambda;",
           "Μ": "&Mu;",
           "Ν": "&Nu;",
           "Ξ": "&Xi;",
           "Ο": "&Omicron;",
           "Π": "&Pi;",
           "Ρ": "&Rho;",
           "Σ": "&Sigma;",
           "Τ": "&Tau;",
           "Υ": "&Upsilon;",
           "Φ": "&Phi;",
           "Χ": "&Chi;",
           "Ψ": "&Psi;",
           "Ω": "&Omega;",
           "α": "&alpha;",
           "β": "&beta;",
           "γ": "&gamma;",
           "δ": "&delta;",
           "ε": "&epsilon;",
           "ζ": "&zeta;",
           "η": "&eta;",
           "θ": "&theta;",
           "ι": "&iota;",
           "κ": "&kappa;",
           "λ": "&lambda;",
           "μ": "&mu;",
           "ν": "&nu;",
           "ξ": "&xi;",
           "ο": "&omicron;",
           "π": "&pi;",
           "ρ": "&rho;",
           "ς": "&sigmaf;",
           "σ": "&sigma;",
           "τ": "&tau;",
           "υ": "&upsilon;",
           "φ": "&phi;",
           "χ": "&chi;",
           "ψ": "&psi;",
           "ω": "&omega;",
           "ϑ": "&thetasym;",
           "ϒ": "&upsih;",
           "ϖ": "&piv;",
           "•": "&bull;",
           "…": "&hellip;",
           "′": "&prime;",
           "″": "&Prime;",
           "‾": "&oline;",
           "⁄": "&frasl;",
           "℘": "&weierp;",
           "ℑ": "&image;",
           "ℜ": "&real;",
           "™": "&trade;",
           "ℵ": "&alefsym;",
           "←": "&larr;",
           "↑": "&uarr;",
           "→": "&rarr;",
           "↓": "&darr;",
           "↔": "&harr;",
           "↵": "&crarr;",
           "⇐": "&lArr;",
           "⇑": "&uArr;",
           "⇒": "&rArr;",
           "⇓": "&dArr;",
           "⇔": "&hArr;",
           "∀": "&forall;",
           "∂": "&part;",
           "∃": "&exist;",
           "∅": "&empty;",
           "∇": "&nabla;",
           "∈": "&isin;",
           "∉": "&notin;",
           "∋": "&ni;",
           "∏": "&prod;",
           "∑": "&sum;",
           "−": "&minus;",
           "∗": "&lowast;",
           "√": "&radic;",
           "∝": "&prop;",
           "∞": "&infin;",
           "∠": "&ang;",
           "∧": "&and;",
           "∨": "&or;",
           "∩": "&cap;",
           "∪": "&cup;",
           "∫": "&int;",
           "∴": "&there4;",
           "∼": "&sim;",
           "≅": "&cong;",
           "≈": "&asymp;",
           "≠": "&ne;",
           "≡": "&equiv;",
           "≤": "&le;",
           "≥": "&ge;",
           "⊂": "&sub;",
           "⊃": "&sup;",
           "⊄": "&nsub;",
           "⊆": "&sube;",
           "⊇": "&supe;",
           "⊕": "&oplus;",
           "⊗": "&otimes;",
           "⊥": "&perp;",
           "⋅": "&sdot;",
           "⌈": "&lceil;",
           "⌉": "&rceil;",
           "⌊": "&lfloor;",
           "⌋": "&rfloor;",
           "〈": "&lang;",
           "〉": "&rang;",
           "◊": "&loz;",
           "♠": "&spades;",
           "♣": "&clubs;",
           "♥": "&hearts;",
           "♦": "&diams;"
         }
       },
       html5: {
         entities: {
           "&AElig": "Æ",
           "&AElig;": "Æ",
           "&AMP": "&",
           "&AMP;": "&",
           "&Aacute": "Á",
           "&Aacute;": "Á",
           "&Abreve;": "Ă",
           "&Acirc": "Â",
           "&Acirc;": "Â",
           "&Acy;": "А",
           "&Afr;": "𝔄",
           "&Agrave": "À",
           "&Agrave;": "À",
           "&Alpha;": "Α",
           "&Amacr;": "Ā",
           "&And;": "⩓",
           "&Aogon;": "Ą",
           "&Aopf;": "𝔸",
           "&ApplyFunction;": "⁡",
           "&Aring": "Å",
           "&Aring;": "Å",
           "&Ascr;": "𝒜",
           "&Assign;": "≔",
           "&Atilde": "Ã",
           "&Atilde;": "Ã",
           "&Auml": "Ä",
           "&Auml;": "Ä",
           "&Backslash;": "∖",
           "&Barv;": "⫧",
           "&Barwed;": "⌆",
           "&Bcy;": "Б",
           "&Because;": "∵",
           "&Bernoullis;": "ℬ",
           "&Beta;": "Β",
           "&Bfr;": "𝔅",
           "&Bopf;": "𝔹",
           "&Breve;": "˘",
           "&Bscr;": "ℬ",
           "&Bumpeq;": "≎",
           "&CHcy;": "Ч",
           "&COPY": "©",
           "&COPY;": "©",
           "&Cacute;": "Ć",
           "&Cap;": "⋒",
           "&CapitalDifferentialD;": "ⅅ",
           "&Cayleys;": "ℭ",
           "&Ccaron;": "Č",
           "&Ccedil": "Ç",
           "&Ccedil;": "Ç",
           "&Ccirc;": "Ĉ",
           "&Cconint;": "∰",
           "&Cdot;": "Ċ",
           "&Cedilla;": "¸",
           "&CenterDot;": "·",
           "&Cfr;": "ℭ",
           "&Chi;": "Χ",
           "&CircleDot;": "⊙",
           "&CircleMinus;": "⊖",
           "&CirclePlus;": "⊕",
           "&CircleTimes;": "⊗",
           "&ClockwiseContourIntegral;": "∲",
           "&CloseCurlyDoubleQuote;": "”",
           "&CloseCurlyQuote;": "’",
           "&Colon;": "∷",
           "&Colone;": "⩴",
           "&Congruent;": "≡",
           "&Conint;": "∯",
           "&ContourIntegral;": "∮",
           "&Copf;": "ℂ",
           "&Coproduct;": "∐",
           "&CounterClockwiseContourIntegral;": "∳",
           "&Cross;": "⨯",
           "&Cscr;": "𝒞",
           "&Cup;": "⋓",
           "&CupCap;": "≍",
           "&DD;": "ⅅ",
           "&DDotrahd;": "⤑",
           "&DJcy;": "Ђ",
           "&DScy;": "Ѕ",
           "&DZcy;": "Џ",
           "&Dagger;": "‡",
           "&Darr;": "↡",
           "&Dashv;": "⫤",
           "&Dcaron;": "Ď",
           "&Dcy;": "Д",
           "&Del;": "∇",
           "&Delta;": "Δ",
           "&Dfr;": "𝔇",
           "&DiacriticalAcute;": "´",
           "&DiacriticalDot;": "˙",
           "&DiacriticalDoubleAcute;": "˝",
           "&DiacriticalGrave;": "`",
           "&DiacriticalTilde;": "˜",
           "&Diamond;": "⋄",
           "&DifferentialD;": "ⅆ",
           "&Dopf;": "𝔻",
           "&Dot;": "¨",
           "&DotDot;": "⃜",
           "&DotEqual;": "≐",
           "&DoubleContourIntegral;": "∯",
           "&DoubleDot;": "¨",
           "&DoubleDownArrow;": "⇓",
           "&DoubleLeftArrow;": "⇐",
           "&DoubleLeftRightArrow;": "⇔",
           "&DoubleLeftTee;": "⫤",
           "&DoubleLongLeftArrow;": "⟸",
           "&DoubleLongLeftRightArrow;": "⟺",
           "&DoubleLongRightArrow;": "⟹",
           "&DoubleRightArrow;": "⇒",
           "&DoubleRightTee;": "⊨",
           "&DoubleUpArrow;": "⇑",
           "&DoubleUpDownArrow;": "⇕",
           "&DoubleVerticalBar;": "∥",
           "&DownArrow;": "↓",
           "&DownArrowBar;": "⤓",
           "&DownArrowUpArrow;": "⇵",
           "&DownBreve;": "̑",
           "&DownLeftRightVector;": "⥐",
           "&DownLeftTeeVector;": "⥞",
           "&DownLeftVector;": "↽",
           "&DownLeftVectorBar;": "⥖",
           "&DownRightTeeVector;": "⥟",
           "&DownRightVector;": "⇁",
           "&DownRightVectorBar;": "⥗",
           "&DownTee;": "⊤",
           "&DownTeeArrow;": "↧",
           "&Downarrow;": "⇓",
           "&Dscr;": "𝒟",
           "&Dstrok;": "Đ",
           "&ENG;": "Ŋ",
           "&ETH": "Ð",
           "&ETH;": "Ð",
           "&Eacute": "É",
           "&Eacute;": "É",
           "&Ecaron;": "Ě",
           "&Ecirc": "Ê",
           "&Ecirc;": "Ê",
           "&Ecy;": "Э",
           "&Edot;": "Ė",
           "&Efr;": "𝔈",
           "&Egrave": "È",
           "&Egrave;": "È",
           "&Element;": "∈",
           "&Emacr;": "Ē",
           "&EmptySmallSquare;": "◻",
           "&EmptyVerySmallSquare;": "▫",
           "&Eogon;": "Ę",
           "&Eopf;": "𝔼",
           "&Epsilon;": "Ε",
           "&Equal;": "⩵",
           "&EqualTilde;": "≂",
           "&Equilibrium;": "⇌",
           "&Escr;": "ℰ",
           "&Esim;": "⩳",
           "&Eta;": "Η",
           "&Euml": "Ë",
           "&Euml;": "Ë",
           "&Exists;": "∃",
           "&ExponentialE;": "ⅇ",
           "&Fcy;": "Ф",
           "&Ffr;": "𝔉",
           "&FilledSmallSquare;": "◼",
           "&FilledVerySmallSquare;": "▪",
           "&Fopf;": "𝔽",
           "&ForAll;": "∀",
           "&Fouriertrf;": "ℱ",
           "&Fscr;": "ℱ",
           "&GJcy;": "Ѓ",
           "&GT": ">",
           "&GT;": ">",
           "&Gamma;": "Γ",
           "&Gammad;": "Ϝ",
           "&Gbreve;": "Ğ",
           "&Gcedil;": "Ģ",
           "&Gcirc;": "Ĝ",
           "&Gcy;": "Г",
           "&Gdot;": "Ġ",
           "&Gfr;": "𝔊",
           "&Gg;": "⋙",
           "&Gopf;": "𝔾",
           "&GreaterEqual;": "≥",
           "&GreaterEqualLess;": "⋛",
           "&GreaterFullEqual;": "≧",
           "&GreaterGreater;": "⪢",
           "&GreaterLess;": "≷",
           "&GreaterSlantEqual;": "⩾",
           "&GreaterTilde;": "≳",
           "&Gscr;": "𝒢",
           "&Gt;": "≫",
           "&HARDcy;": "Ъ",
           "&Hacek;": "ˇ",
           "&Hat;": "^",
           "&Hcirc;": "Ĥ",
           "&Hfr;": "ℌ",
           "&HilbertSpace;": "ℋ",
           "&Hopf;": "ℍ",
           "&HorizontalLine;": "─",
           "&Hscr;": "ℋ",
           "&Hstrok;": "Ħ",
           "&HumpDownHump;": "≎",
           "&HumpEqual;": "≏",
           "&IEcy;": "Е",
           "&IJlig;": "Ĳ",
           "&IOcy;": "Ё",
           "&Iacute": "Í",
           "&Iacute;": "Í",
           "&Icirc": "Î",
           "&Icirc;": "Î",
           "&Icy;": "И",
           "&Idot;": "İ",
           "&Ifr;": "ℑ",
           "&Igrave": "Ì",
           "&Igrave;": "Ì",
           "&Im;": "ℑ",
           "&Imacr;": "Ī",
           "&ImaginaryI;": "ⅈ",
           "&Implies;": "⇒",
           "&Int;": "∬",
           "&Integral;": "∫",
           "&Intersection;": "⋂",
           "&InvisibleComma;": "⁣",
           "&InvisibleTimes;": "⁢",
           "&Iogon;": "Į",
           "&Iopf;": "𝕀",
           "&Iota;": "Ι",
           "&Iscr;": "ℐ",
           "&Itilde;": "Ĩ",
           "&Iukcy;": "І",
           "&Iuml": "Ï",
           "&Iuml;": "Ï",
           "&Jcirc;": "Ĵ",
           "&Jcy;": "Й",
           "&Jfr;": "𝔍",
           "&Jopf;": "𝕁",
           "&Jscr;": "𝒥",
           "&Jsercy;": "Ј",
           "&Jukcy;": "Є",
           "&KHcy;": "Х",
           "&KJcy;": "Ќ",
           "&Kappa;": "Κ",
           "&Kcedil;": "Ķ",
           "&Kcy;": "К",
           "&Kfr;": "𝔎",
           "&Kopf;": "𝕂",
           "&Kscr;": "𝒦",
           "&LJcy;": "Љ",
           "&LT": "<",
           "&LT;": "<",
           "&Lacute;": "Ĺ",
           "&Lambda;": "Λ",
           "&Lang;": "⟪",
           "&Laplacetrf;": "ℒ",
           "&Larr;": "↞",
           "&Lcaron;": "Ľ",
           "&Lcedil;": "Ļ",
           "&Lcy;": "Л",
           "&LeftAngleBracket;": "⟨",
           "&LeftArrow;": "←",
           "&LeftArrowBar;": "⇤",
           "&LeftArrowRightArrow;": "⇆",
           "&LeftCeiling;": "⌈",
           "&LeftDoubleBracket;": "⟦",
           "&LeftDownTeeVector;": "⥡",
           "&LeftDownVector;": "⇃",
           "&LeftDownVectorBar;": "⥙",
           "&LeftFloor;": "⌊",
           "&LeftRightArrow;": "↔",
           "&LeftRightVector;": "⥎",
           "&LeftTee;": "⊣",
           "&LeftTeeArrow;": "↤",
           "&LeftTeeVector;": "⥚",
           "&LeftTriangle;": "⊲",
           "&LeftTriangleBar;": "⧏",
           "&LeftTriangleEqual;": "⊴",
           "&LeftUpDownVector;": "⥑",
           "&LeftUpTeeVector;": "⥠",
           "&LeftUpVector;": "↿",
           "&LeftUpVectorBar;": "⥘",
           "&LeftVector;": "↼",
           "&LeftVectorBar;": "⥒",
           "&Leftarrow;": "⇐",
           "&Leftrightarrow;": "⇔",
           "&LessEqualGreater;": "⋚",
           "&LessFullEqual;": "≦",
           "&LessGreater;": "≶",
           "&LessLess;": "⪡",
           "&LessSlantEqual;": "⩽",
           "&LessTilde;": "≲",
           "&Lfr;": "𝔏",
           "&Ll;": "⋘",
           "&Lleftarrow;": "⇚",
           "&Lmidot;": "Ŀ",
           "&LongLeftArrow;": "⟵",
           "&LongLeftRightArrow;": "⟷",
           "&LongRightArrow;": "⟶",
           "&Longleftarrow;": "⟸",
           "&Longleftrightarrow;": "⟺",
           "&Longrightarrow;": "⟹",
           "&Lopf;": "𝕃",
           "&LowerLeftArrow;": "↙",
           "&LowerRightArrow;": "↘",
           "&Lscr;": "ℒ",
           "&Lsh;": "↰",
           "&Lstrok;": "Ł",
           "&Lt;": "≪",
           "&Map;": "⤅",
           "&Mcy;": "М",
           "&MediumSpace;": " ",
           "&Mellintrf;": "ℳ",
           "&Mfr;": "𝔐",
           "&MinusPlus;": "∓",
           "&Mopf;": "𝕄",
           "&Mscr;": "ℳ",
           "&Mu;": "Μ",
           "&NJcy;": "Њ",
           "&Nacute;": "Ń",
           "&Ncaron;": "Ň",
           "&Ncedil;": "Ņ",
           "&Ncy;": "Н",
           "&NegativeMediumSpace;": "​",
           "&NegativeThickSpace;": "​",
           "&NegativeThinSpace;": "​",
           "&NegativeVeryThinSpace;": "​",
           "&NestedGreaterGreater;": "≫",
           "&NestedLessLess;": "≪",
           "&NewLine;": "\n",
           "&Nfr;": "𝔑",
           "&NoBreak;": "⁠",
           "&NonBreakingSpace;": " ",
           "&Nopf;": "ℕ",
           "&Not;": "⫬",
           "&NotCongruent;": "≢",
           "&NotCupCap;": "≭",
           "&NotDoubleVerticalBar;": "∦",
           "&NotElement;": "∉",
           "&NotEqual;": "≠",
           "&NotEqualTilde;": "≂̸",
           "&NotExists;": "∄",
           "&NotGreater;": "≯",
           "&NotGreaterEqual;": "≱",
           "&NotGreaterFullEqual;": "≧̸",
           "&NotGreaterGreater;": "≫̸",
           "&NotGreaterLess;": "≹",
           "&NotGreaterSlantEqual;": "⩾̸",
           "&NotGreaterTilde;": "≵",
           "&NotHumpDownHump;": "≎̸",
           "&NotHumpEqual;": "≏̸",
           "&NotLeftTriangle;": "⋪",
           "&NotLeftTriangleBar;": "⧏̸",
           "&NotLeftTriangleEqual;": "⋬",
           "&NotLess;": "≮",
           "&NotLessEqual;": "≰",
           "&NotLessGreater;": "≸",
           "&NotLessLess;": "≪̸",
           "&NotLessSlantEqual;": "⩽̸",
           "&NotLessTilde;": "≴",
           "&NotNestedGreaterGreater;": "⪢̸",
           "&NotNestedLessLess;": "⪡̸",
           "&NotPrecedes;": "⊀",
           "&NotPrecedesEqual;": "⪯̸",
           "&NotPrecedesSlantEqual;": "⋠",
           "&NotReverseElement;": "∌",
           "&NotRightTriangle;": "⋫",
           "&NotRightTriangleBar;": "⧐̸",
           "&NotRightTriangleEqual;": "⋭",
           "&NotSquareSubset;": "⊏̸",
           "&NotSquareSubsetEqual;": "⋢",
           "&NotSquareSuperset;": "⊐̸",
           "&NotSquareSupersetEqual;": "⋣",
           "&NotSubset;": "⊂⃒",
           "&NotSubsetEqual;": "⊈",
           "&NotSucceeds;": "⊁",
           "&NotSucceedsEqual;": "⪰̸",
           "&NotSucceedsSlantEqual;": "⋡",
           "&NotSucceedsTilde;": "≿̸",
           "&NotSuperset;": "⊃⃒",
           "&NotSupersetEqual;": "⊉",
           "&NotTilde;": "≁",
           "&NotTildeEqual;": "≄",
           "&NotTildeFullEqual;": "≇",
           "&NotTildeTilde;": "≉",
           "&NotVerticalBar;": "∤",
           "&Nscr;": "𝒩",
           "&Ntilde": "Ñ",
           "&Ntilde;": "Ñ",
           "&Nu;": "Ν",
           "&OElig;": "Œ",
           "&Oacute": "Ó",
           "&Oacute;": "Ó",
           "&Ocirc": "Ô",
           "&Ocirc;": "Ô",
           "&Ocy;": "О",
           "&Odblac;": "Ő",
           "&Ofr;": "𝔒",
           "&Ograve": "Ò",
           "&Ograve;": "Ò",
           "&Omacr;": "Ō",
           "&Omega;": "Ω",
           "&Omicron;": "Ο",
           "&Oopf;": "𝕆",
           "&OpenCurlyDoubleQuote;": "“",
           "&OpenCurlyQuote;": "‘",
           "&Or;": "⩔",
           "&Oscr;": "𝒪",
           "&Oslash": "Ø",
           "&Oslash;": "Ø",
           "&Otilde": "Õ",
           "&Otilde;": "Õ",
           "&Otimes;": "⨷",
           "&Ouml": "Ö",
           "&Ouml;": "Ö",
           "&OverBar;": "‾",
           "&OverBrace;": "⏞",
           "&OverBracket;": "⎴",
           "&OverParenthesis;": "⏜",
           "&PartialD;": "∂",
           "&Pcy;": "П",
           "&Pfr;": "𝔓",
           "&Phi;": "Φ",
           "&Pi;": "Π",
           "&PlusMinus;": "±",
           "&Poincareplane;": "ℌ",
           "&Popf;": "ℙ",
           "&Pr;": "⪻",
           "&Precedes;": "≺",
           "&PrecedesEqual;": "⪯",
           "&PrecedesSlantEqual;": "≼",
           "&PrecedesTilde;": "≾",
           "&Prime;": "″",
           "&Product;": "∏",
           "&Proportion;": "∷",
           "&Proportional;": "∝",
           "&Pscr;": "𝒫",
           "&Psi;": "Ψ",
           "&QUOT": '"',
           "&QUOT;": '"',
           "&Qfr;": "𝔔",
           "&Qopf;": "ℚ",
           "&Qscr;": "𝒬",
           "&RBarr;": "⤐",
           "&REG": "®",
           "&REG;": "®",
           "&Racute;": "Ŕ",
           "&Rang;": "⟫",
           "&Rarr;": "↠",
           "&Rarrtl;": "⤖",
           "&Rcaron;": "Ř",
           "&Rcedil;": "Ŗ",
           "&Rcy;": "Р",
           "&Re;": "ℜ",
           "&ReverseElement;": "∋",
           "&ReverseEquilibrium;": "⇋",
           "&ReverseUpEquilibrium;": "⥯",
           "&Rfr;": "ℜ",
           "&Rho;": "Ρ",
           "&RightAngleBracket;": "⟩",
           "&RightArrow;": "→",
           "&RightArrowBar;": "⇥",
           "&RightArrowLeftArrow;": "⇄",
           "&RightCeiling;": "⌉",
           "&RightDoubleBracket;": "⟧",
           "&RightDownTeeVector;": "⥝",
           "&RightDownVector;": "⇂",
           "&RightDownVectorBar;": "⥕",
           "&RightFloor;": "⌋",
           "&RightTee;": "⊢",
           "&RightTeeArrow;": "↦",
           "&RightTeeVector;": "⥛",
           "&RightTriangle;": "⊳",
           "&RightTriangleBar;": "⧐",
           "&RightTriangleEqual;": "⊵",
           "&RightUpDownVector;": "⥏",
           "&RightUpTeeVector;": "⥜",
           "&RightUpVector;": "↾",
           "&RightUpVectorBar;": "⥔",
           "&RightVector;": "⇀",
           "&RightVectorBar;": "⥓",
           "&Rightarrow;": "⇒",
           "&Ropf;": "ℝ",
           "&RoundImplies;": "⥰",
           "&Rrightarrow;": "⇛",
           "&Rscr;": "ℛ",
           "&Rsh;": "↱",
           "&RuleDelayed;": "⧴",
           "&SHCHcy;": "Щ",
           "&SHcy;": "Ш",
           "&SOFTcy;": "Ь",
           "&Sacute;": "Ś",
           "&Sc;": "⪼",
           "&Scaron;": "Š",
           "&Scedil;": "Ş",
           "&Scirc;": "Ŝ",
           "&Scy;": "С",
           "&Sfr;": "𝔖",
           "&ShortDownArrow;": "↓",
           "&ShortLeftArrow;": "←",
           "&ShortRightArrow;": "→",
           "&ShortUpArrow;": "↑",
           "&Sigma;": "Σ",
           "&SmallCircle;": "∘",
           "&Sopf;": "𝕊",
           "&Sqrt;": "√",
           "&Square;": "□",
           "&SquareIntersection;": "⊓",
           "&SquareSubset;": "⊏",
           "&SquareSubsetEqual;": "⊑",
           "&SquareSuperset;": "⊐",
           "&SquareSupersetEqual;": "⊒",
           "&SquareUnion;": "⊔",
           "&Sscr;": "𝒮",
           "&Star;": "⋆",
           "&Sub;": "⋐",
           "&Subset;": "⋐",
           "&SubsetEqual;": "⊆",
           "&Succeeds;": "≻",
           "&SucceedsEqual;": "⪰",
           "&SucceedsSlantEqual;": "≽",
           "&SucceedsTilde;": "≿",
           "&SuchThat;": "∋",
           "&Sum;": "∑",
           "&Sup;": "⋑",
           "&Superset;": "⊃",
           "&SupersetEqual;": "⊇",
           "&Supset;": "⋑",
           "&THORN": "Þ",
           "&THORN;": "Þ",
           "&TRADE;": "™",
           "&TSHcy;": "Ћ",
           "&TScy;": "Ц",
           "&Tab;": "\t",
           "&Tau;": "Τ",
           "&Tcaron;": "Ť",
           "&Tcedil;": "Ţ",
           "&Tcy;": "Т",
           "&Tfr;": "𝔗",
           "&Therefore;": "∴",
           "&Theta;": "Θ",
           "&ThickSpace;": "  ",
           "&ThinSpace;": " ",
           "&Tilde;": "∼",
           "&TildeEqual;": "≃",
           "&TildeFullEqual;": "≅",
           "&TildeTilde;": "≈",
           "&Topf;": "𝕋",
           "&TripleDot;": "⃛",
           "&Tscr;": "𝒯",
           "&Tstrok;": "Ŧ",
           "&Uacute": "Ú",
           "&Uacute;": "Ú",
           "&Uarr;": "↟",
           "&Uarrocir;": "⥉",
           "&Ubrcy;": "Ў",
           "&Ubreve;": "Ŭ",
           "&Ucirc": "Û",
           "&Ucirc;": "Û",
           "&Ucy;": "У",
           "&Udblac;": "Ű",
           "&Ufr;": "𝔘",
           "&Ugrave": "Ù",
           "&Ugrave;": "Ù",
           "&Umacr;": "Ū",
           "&UnderBar;": "_",
           "&UnderBrace;": "⏟",
           "&UnderBracket;": "⎵",
           "&UnderParenthesis;": "⏝",
           "&Union;": "⋃",
           "&UnionPlus;": "⊎",
           "&Uogon;": "Ų",
           "&Uopf;": "𝕌",
           "&UpArrow;": "↑",
           "&UpArrowBar;": "⤒",
           "&UpArrowDownArrow;": "⇅",
           "&UpDownArrow;": "↕",
           "&UpEquilibrium;": "⥮",
           "&UpTee;": "⊥",
           "&UpTeeArrow;": "↥",
           "&Uparrow;": "⇑",
           "&Updownarrow;": "⇕",
           "&UpperLeftArrow;": "↖",
           "&UpperRightArrow;": "↗",
           "&Upsi;": "ϒ",
           "&Upsilon;": "Υ",
           "&Uring;": "Ů",
           "&Uscr;": "𝒰",
           "&Utilde;": "Ũ",
           "&Uuml": "Ü",
           "&Uuml;": "Ü",
           "&VDash;": "⊫",
           "&Vbar;": "⫫",
           "&Vcy;": "В",
           "&Vdash;": "⊩",
           "&Vdashl;": "⫦",
           "&Vee;": "⋁",
           "&Verbar;": "‖",
           "&Vert;": "‖",
           "&VerticalBar;": "∣",
           "&VerticalLine;": "|",
           "&VerticalSeparator;": "❘",
           "&VerticalTilde;": "≀",
           "&VeryThinSpace;": " ",
           "&Vfr;": "𝔙",
           "&Vopf;": "𝕍",
           "&Vscr;": "𝒱",
           "&Vvdash;": "⊪",
           "&Wcirc;": "Ŵ",
           "&Wedge;": "⋀",
           "&Wfr;": "𝔚",
           "&Wopf;": "𝕎",
           "&Wscr;": "𝒲",
           "&Xfr;": "𝔛",
           "&Xi;": "Ξ",
           "&Xopf;": "𝕏",
           "&Xscr;": "𝒳",
           "&YAcy;": "Я",
           "&YIcy;": "Ї",
           "&YUcy;": "Ю",
           "&Yacute": "Ý",
           "&Yacute;": "Ý",
           "&Ycirc;": "Ŷ",
           "&Ycy;": "Ы",
           "&Yfr;": "𝔜",
           "&Yopf;": "𝕐",
           "&Yscr;": "𝒴",
           "&Yuml;": "Ÿ",
           "&ZHcy;": "Ж",
           "&Zacute;": "Ź",
           "&Zcaron;": "Ž",
           "&Zcy;": "З",
           "&Zdot;": "Ż",
           "&ZeroWidthSpace;": "​",
           "&Zeta;": "Ζ",
           "&Zfr;": "ℨ",
           "&Zopf;": "ℤ",
           "&Zscr;": "𝒵",
           "&aacute": "á",
           "&aacute;": "á",
           "&abreve;": "ă",
           "&ac;": "∾",
           "&acE;": "∾̳",
           "&acd;": "∿",
           "&acirc": "â",
           "&acirc;": "â",
           "&acute": "´",
           "&acute;": "´",
           "&acy;": "а",
           "&aelig": "æ",
           "&aelig;": "æ",
           "&af;": "⁡",
           "&afr;": "𝔞",
           "&agrave": "à",
           "&agrave;": "à",
           "&alefsym;": "ℵ",
           "&aleph;": "ℵ",
           "&alpha;": "α",
           "&amacr;": "ā",
           "&amalg;": "⨿",
           "&amp": "&",
           "&amp;": "&",
           "&and;": "∧",
           "&andand;": "⩕",
           "&andd;": "⩜",
           "&andslope;": "⩘",
           "&andv;": "⩚",
           "&ang;": "∠",
           "&ange;": "⦤",
           "&angle;": "∠",
           "&angmsd;": "∡",
           "&angmsdaa;": "⦨",
           "&angmsdab;": "⦩",
           "&angmsdac;": "⦪",
           "&angmsdad;": "⦫",
           "&angmsdae;": "⦬",
           "&angmsdaf;": "⦭",
           "&angmsdag;": "⦮",
           "&angmsdah;": "⦯",
           "&angrt;": "∟",
           "&angrtvb;": "⊾",
           "&angrtvbd;": "⦝",
           "&angsph;": "∢",
           "&angst;": "Å",
           "&angzarr;": "⍼",
           "&aogon;": "ą",
           "&aopf;": "𝕒",
           "&ap;": "≈",
           "&apE;": "⩰",
           "&apacir;": "⩯",
           "&ape;": "≊",
           "&apid;": "≋",
           "&apos;": "'",
           "&approx;": "≈",
           "&approxeq;": "≊",
           "&aring": "å",
           "&aring;": "å",
           "&ascr;": "𝒶",
           "&ast;": "*",
           "&asymp;": "≈",
           "&asympeq;": "≍",
           "&atilde": "ã",
           "&atilde;": "ã",
           "&auml": "ä",
           "&auml;": "ä",
           "&awconint;": "∳",
           "&awint;": "⨑",
           "&bNot;": "⫭",
           "&backcong;": "≌",
           "&backepsilon;": "϶",
           "&backprime;": "‵",
           "&backsim;": "∽",
           "&backsimeq;": "⋍",
           "&barvee;": "⊽",
           "&barwed;": "⌅",
           "&barwedge;": "⌅",
           "&bbrk;": "⎵",
           "&bbrktbrk;": "⎶",
           "&bcong;": "≌",
           "&bcy;": "б",
           "&bdquo;": "„",
           "&becaus;": "∵",
           "&because;": "∵",
           "&bemptyv;": "⦰",
           "&bepsi;": "϶",
           "&bernou;": "ℬ",
           "&beta;": "β",
           "&beth;": "ℶ",
           "&between;": "≬",
           "&bfr;": "𝔟",
           "&bigcap;": "⋂",
           "&bigcirc;": "◯",
           "&bigcup;": "⋃",
           "&bigodot;": "⨀",
           "&bigoplus;": "⨁",
           "&bigotimes;": "⨂",
           "&bigsqcup;": "⨆",
           "&bigstar;": "★",
           "&bigtriangledown;": "▽",
           "&bigtriangleup;": "△",
           "&biguplus;": "⨄",
           "&bigvee;": "⋁",
           "&bigwedge;": "⋀",
           "&bkarow;": "⤍",
           "&blacklozenge;": "⧫",
           "&blacksquare;": "▪",
           "&blacktriangle;": "▴",
           "&blacktriangledown;": "▾",
           "&blacktriangleleft;": "◂",
           "&blacktriangleright;": "▸",
           "&blank;": "␣",
           "&blk12;": "▒",
           "&blk14;": "░",
           "&blk34;": "▓",
           "&block;": "█",
           "&bne;": "=⃥",
           "&bnequiv;": "≡⃥",
           "&bnot;": "⌐",
           "&bopf;": "𝕓",
           "&bot;": "⊥",
           "&bottom;": "⊥",
           "&bowtie;": "⋈",
           "&boxDL;": "╗",
           "&boxDR;": "╔",
           "&boxDl;": "╖",
           "&boxDr;": "╓",
           "&boxH;": "═",
           "&boxHD;": "╦",
           "&boxHU;": "╩",
           "&boxHd;": "╤",
           "&boxHu;": "╧",
           "&boxUL;": "╝",
           "&boxUR;": "╚",
           "&boxUl;": "╜",
           "&boxUr;": "╙",
           "&boxV;": "║",
           "&boxVH;": "╬",
           "&boxVL;": "╣",
           "&boxVR;": "╠",
           "&boxVh;": "╫",
           "&boxVl;": "╢",
           "&boxVr;": "╟",
           "&boxbox;": "⧉",
           "&boxdL;": "╕",
           "&boxdR;": "╒",
           "&boxdl;": "┐",
           "&boxdr;": "┌",
           "&boxh;": "─",
           "&boxhD;": "╥",
           "&boxhU;": "╨",
           "&boxhd;": "┬",
           "&boxhu;": "┴",
           "&boxminus;": "⊟",
           "&boxplus;": "⊞",
           "&boxtimes;": "⊠",
           "&boxuL;": "╛",
           "&boxuR;": "╘",
           "&boxul;": "┘",
           "&boxur;": "└",
           "&boxv;": "│",
           "&boxvH;": "╪",
           "&boxvL;": "╡",
           "&boxvR;": "╞",
           "&boxvh;": "┼",
           "&boxvl;": "┤",
           "&boxvr;": "├",
           "&bprime;": "‵",
           "&breve;": "˘",
           "&brvbar": "¦",
           "&brvbar;": "¦",
           "&bscr;": "𝒷",
           "&bsemi;": "⁏",
           "&bsim;": "∽",
           "&bsime;": "⋍",
           "&bsol;": "\\",
           "&bsolb;": "⧅",
           "&bsolhsub;": "⟈",
           "&bull;": "•",
           "&bullet;": "•",
           "&bump;": "≎",
           "&bumpE;": "⪮",
           "&bumpe;": "≏",
           "&bumpeq;": "≏",
           "&cacute;": "ć",
           "&cap;": "∩",
           "&capand;": "⩄",
           "&capbrcup;": "⩉",
           "&capcap;": "⩋",
           "&capcup;": "⩇",
           "&capdot;": "⩀",
           "&caps;": "∩︀",
           "&caret;": "⁁",
           "&caron;": "ˇ",
           "&ccaps;": "⩍",
           "&ccaron;": "č",
           "&ccedil": "ç",
           "&ccedil;": "ç",
           "&ccirc;": "ĉ",
           "&ccups;": "⩌",
           "&ccupssm;": "⩐",
           "&cdot;": "ċ",
           "&cedil": "¸",
           "&cedil;": "¸",
           "&cemptyv;": "⦲",
           "&cent": "¢",
           "&cent;": "¢",
           "&centerdot;": "·",
           "&cfr;": "𝔠",
           "&chcy;": "ч",
           "&check;": "✓",
           "&checkmark;": "✓",
           "&chi;": "χ",
           "&cir;": "○",
           "&cirE;": "⧃",
           "&circ;": "ˆ",
           "&circeq;": "≗",
           "&circlearrowleft;": "↺",
           "&circlearrowright;": "↻",
           "&circledR;": "®",
           "&circledS;": "Ⓢ",
           "&circledast;": "⊛",
           "&circledcirc;": "⊚",
           "&circleddash;": "⊝",
           "&cire;": "≗",
           "&cirfnint;": "⨐",
           "&cirmid;": "⫯",
           "&cirscir;": "⧂",
           "&clubs;": "♣",
           "&clubsuit;": "♣",
           "&colon;": ":",
           "&colone;": "≔",
           "&coloneq;": "≔",
           "&comma;": ",",
           "&commat;": "@",
           "&comp;": "∁",
           "&compfn;": "∘",
           "&complement;": "∁",
           "&complexes;": "ℂ",
           "&cong;": "≅",
           "&congdot;": "⩭",
           "&conint;": "∮",
           "&copf;": "𝕔",
           "&coprod;": "∐",
           "&copy": "©",
           "&copy;": "©",
           "&copysr;": "℗",
           "&crarr;": "↵",
           "&cross;": "✗",
           "&cscr;": "𝒸",
           "&csub;": "⫏",
           "&csube;": "⫑",
           "&csup;": "⫐",
           "&csupe;": "⫒",
           "&ctdot;": "⋯",
           "&cudarrl;": "⤸",
           "&cudarrr;": "⤵",
           "&cuepr;": "⋞",
           "&cuesc;": "⋟",
           "&cularr;": "↶",
           "&cularrp;": "⤽",
           "&cup;": "∪",
           "&cupbrcap;": "⩈",
           "&cupcap;": "⩆",
           "&cupcup;": "⩊",
           "&cupdot;": "⊍",
           "&cupor;": "⩅",
           "&cups;": "∪︀",
           "&curarr;": "↷",
           "&curarrm;": "⤼",
           "&curlyeqprec;": "⋞",
           "&curlyeqsucc;": "⋟",
           "&curlyvee;": "⋎",
           "&curlywedge;": "⋏",
           "&curren": "¤",
           "&curren;": "¤",
           "&curvearrowleft;": "↶",
           "&curvearrowright;": "↷",
           "&cuvee;": "⋎",
           "&cuwed;": "⋏",
           "&cwconint;": "∲",
           "&cwint;": "∱",
           "&cylcty;": "⌭",
           "&dArr;": "⇓",
           "&dHar;": "⥥",
           "&dagger;": "†",
           "&daleth;": "ℸ",
           "&darr;": "↓",
           "&dash;": "‐",
           "&dashv;": "⊣",
           "&dbkarow;": "⤏",
           "&dblac;": "˝",
           "&dcaron;": "ď",
           "&dcy;": "д",
           "&dd;": "ⅆ",
           "&ddagger;": "‡",
           "&ddarr;": "⇊",
           "&ddotseq;": "⩷",
           "&deg": "°",
           "&deg;": "°",
           "&delta;": "δ",
           "&demptyv;": "⦱",
           "&dfisht;": "⥿",
           "&dfr;": "𝔡",
           "&dharl;": "⇃",
           "&dharr;": "⇂",
           "&diam;": "⋄",
           "&diamond;": "⋄",
           "&diamondsuit;": "♦",
           "&diams;": "♦",
           "&die;": "¨",
           "&digamma;": "ϝ",
           "&disin;": "⋲",
           "&div;": "÷",
           "&divide": "÷",
           "&divide;": "÷",
           "&divideontimes;": "⋇",
           "&divonx;": "⋇",
           "&djcy;": "ђ",
           "&dlcorn;": "⌞",
           "&dlcrop;": "⌍",
           "&dollar;": "$",
           "&dopf;": "𝕕",
           "&dot;": "˙",
           "&doteq;": "≐",
           "&doteqdot;": "≑",
           "&dotminus;": "∸",
           "&dotplus;": "∔",
           "&dotsquare;": "⊡",
           "&doublebarwedge;": "⌆",
           "&downarrow;": "↓",
           "&downdownarrows;": "⇊",
           "&downharpoonleft;": "⇃",
           "&downharpoonright;": "⇂",
           "&drbkarow;": "⤐",
           "&drcorn;": "⌟",
           "&drcrop;": "⌌",
           "&dscr;": "𝒹",
           "&dscy;": "ѕ",
           "&dsol;": "⧶",
           "&dstrok;": "đ",
           "&dtdot;": "⋱",
           "&dtri;": "▿",
           "&dtrif;": "▾",
           "&duarr;": "⇵",
           "&duhar;": "⥯",
           "&dwangle;": "⦦",
           "&dzcy;": "џ",
           "&dzigrarr;": "⟿",
           "&eDDot;": "⩷",
           "&eDot;": "≑",
           "&eacute": "é",
           "&eacute;": "é",
           "&easter;": "⩮",
           "&ecaron;": "ě",
           "&ecir;": "≖",
           "&ecirc": "ê",
           "&ecirc;": "ê",
           "&ecolon;": "≕",
           "&ecy;": "э",
           "&edot;": "ė",
           "&ee;": "ⅇ",
           "&efDot;": "≒",
           "&efr;": "𝔢",
           "&eg;": "⪚",
           "&egrave": "è",
           "&egrave;": "è",
           "&egs;": "⪖",
           "&egsdot;": "⪘",
           "&el;": "⪙",
           "&elinters;": "⏧",
           "&ell;": "ℓ",
           "&els;": "⪕",
           "&elsdot;": "⪗",
           "&emacr;": "ē",
           "&empty;": "∅",
           "&emptyset;": "∅",
           "&emptyv;": "∅",
           "&emsp13;": " ",
           "&emsp14;": " ",
           "&emsp;": " ",
           "&eng;": "ŋ",
           "&ensp;": " ",
           "&eogon;": "ę",
           "&eopf;": "𝕖",
           "&epar;": "⋕",
           "&eparsl;": "⧣",
           "&eplus;": "⩱",
           "&epsi;": "ε",
           "&epsilon;": "ε",
           "&epsiv;": "ϵ",
           "&eqcirc;": "≖",
           "&eqcolon;": "≕",
           "&eqsim;": "≂",
           "&eqslantgtr;": "⪖",
           "&eqslantless;": "⪕",
           "&equals;": "=",
           "&equest;": "≟",
           "&equiv;": "≡",
           "&equivDD;": "⩸",
           "&eqvparsl;": "⧥",
           "&erDot;": "≓",
           "&erarr;": "⥱",
           "&escr;": "ℯ",
           "&esdot;": "≐",
           "&esim;": "≂",
           "&eta;": "η",
           "&eth": "ð",
           "&eth;": "ð",
           "&euml": "ë",
           "&euml;": "ë",
           "&euro;": "€",
           "&excl;": "!",
           "&exist;": "∃",
           "&expectation;": "ℰ",
           "&exponentiale;": "ⅇ",
           "&fallingdotseq;": "≒",
           "&fcy;": "ф",
           "&female;": "♀",
           "&ffilig;": "ﬃ",
           "&fflig;": "ﬀ",
           "&ffllig;": "ﬄ",
           "&ffr;": "𝔣",
           "&filig;": "ﬁ",
           "&fjlig;": "fj",
           "&flat;": "♭",
           "&fllig;": "ﬂ",
           "&fltns;": "▱",
           "&fnof;": "ƒ",
           "&fopf;": "𝕗",
           "&forall;": "∀",
           "&fork;": "⋔",
           "&forkv;": "⫙",
           "&fpartint;": "⨍",
           "&frac12": "½",
           "&frac12;": "½",
           "&frac13;": "⅓",
           "&frac14": "¼",
           "&frac14;": "¼",
           "&frac15;": "⅕",
           "&frac16;": "⅙",
           "&frac18;": "⅛",
           "&frac23;": "⅔",
           "&frac25;": "⅖",
           "&frac34": "¾",
           "&frac34;": "¾",
           "&frac35;": "⅗",
           "&frac38;": "⅜",
           "&frac45;": "⅘",
           "&frac56;": "⅚",
           "&frac58;": "⅝",
           "&frac78;": "⅞",
           "&frasl;": "⁄",
           "&frown;": "⌢",
           "&fscr;": "𝒻",
           "&gE;": "≧",
           "&gEl;": "⪌",
           "&gacute;": "ǵ",
           "&gamma;": "γ",
           "&gammad;": "ϝ",
           "&gap;": "⪆",
           "&gbreve;": "ğ",
           "&gcirc;": "ĝ",
           "&gcy;": "г",
           "&gdot;": "ġ",
           "&ge;": "≥",
           "&gel;": "⋛",
           "&geq;": "≥",
           "&geqq;": "≧",
           "&geqslant;": "⩾",
           "&ges;": "⩾",
           "&gescc;": "⪩",
           "&gesdot;": "⪀",
           "&gesdoto;": "⪂",
           "&gesdotol;": "⪄",
           "&gesl;": "⋛︀",
           "&gesles;": "⪔",
           "&gfr;": "𝔤",
           "&gg;": "≫",
           "&ggg;": "⋙",
           "&gimel;": "ℷ",
           "&gjcy;": "ѓ",
           "&gl;": "≷",
           "&glE;": "⪒",
           "&gla;": "⪥",
           "&glj;": "⪤",
           "&gnE;": "≩",
           "&gnap;": "⪊",
           "&gnapprox;": "⪊",
           "&gne;": "⪈",
           "&gneq;": "⪈",
           "&gneqq;": "≩",
           "&gnsim;": "⋧",
           "&gopf;": "𝕘",
           "&grave;": "`",
           "&gscr;": "ℊ",
           "&gsim;": "≳",
           "&gsime;": "⪎",
           "&gsiml;": "⪐",
           "&gt": ">",
           "&gt;": ">",
           "&gtcc;": "⪧",
           "&gtcir;": "⩺",
           "&gtdot;": "⋗",
           "&gtlPar;": "⦕",
           "&gtquest;": "⩼",
           "&gtrapprox;": "⪆",
           "&gtrarr;": "⥸",
           "&gtrdot;": "⋗",
           "&gtreqless;": "⋛",
           "&gtreqqless;": "⪌",
           "&gtrless;": "≷",
           "&gtrsim;": "≳",
           "&gvertneqq;": "≩︀",
           "&gvnE;": "≩︀",
           "&hArr;": "⇔",
           "&hairsp;": " ",
           "&half;": "½",
           "&hamilt;": "ℋ",
           "&hardcy;": "ъ",
           "&harr;": "↔",
           "&harrcir;": "⥈",
           "&harrw;": "↭",
           "&hbar;": "ℏ",
           "&hcirc;": "ĥ",
           "&hearts;": "♥",
           "&heartsuit;": "♥",
           "&hellip;": "…",
           "&hercon;": "⊹",
           "&hfr;": "𝔥",
           "&hksearow;": "⤥",
           "&hkswarow;": "⤦",
           "&hoarr;": "⇿",
           "&homtht;": "∻",
           "&hookleftarrow;": "↩",
           "&hookrightarrow;": "↪",
           "&hopf;": "𝕙",
           "&horbar;": "―",
           "&hscr;": "𝒽",
           "&hslash;": "ℏ",
           "&hstrok;": "ħ",
           "&hybull;": "⁃",
           "&hyphen;": "‐",
           "&iacute": "í",
           "&iacute;": "í",
           "&ic;": "⁣",
           "&icirc": "î",
           "&icirc;": "î",
           "&icy;": "и",
           "&iecy;": "е",
           "&iexcl": "¡",
           "&iexcl;": "¡",
           "&iff;": "⇔",
           "&ifr;": "𝔦",
           "&igrave": "ì",
           "&igrave;": "ì",
           "&ii;": "ⅈ",
           "&iiiint;": "⨌",
           "&iiint;": "∭",
           "&iinfin;": "⧜",
           "&iiota;": "℩",
           "&ijlig;": "ĳ",
           "&imacr;": "ī",
           "&image;": "ℑ",
           "&imagline;": "ℐ",
           "&imagpart;": "ℑ",
           "&imath;": "ı",
           "&imof;": "⊷",
           "&imped;": "Ƶ",
           "&in;": "∈",
           "&incare;": "℅",
           "&infin;": "∞",
           "&infintie;": "⧝",
           "&inodot;": "ı",
           "&int;": "∫",
           "&intcal;": "⊺",
           "&integers;": "ℤ",
           "&intercal;": "⊺",
           "&intlarhk;": "⨗",
           "&intprod;": "⨼",
           "&iocy;": "ё",
           "&iogon;": "į",
           "&iopf;": "𝕚",
           "&iota;": "ι",
           "&iprod;": "⨼",
           "&iquest": "¿",
           "&iquest;": "¿",
           "&iscr;": "𝒾",
           "&isin;": "∈",
           "&isinE;": "⋹",
           "&isindot;": "⋵",
           "&isins;": "⋴",
           "&isinsv;": "⋳",
           "&isinv;": "∈",
           "&it;": "⁢",
           "&itilde;": "ĩ",
           "&iukcy;": "і",
           "&iuml": "ï",
           "&iuml;": "ï",
           "&jcirc;": "ĵ",
           "&jcy;": "й",
           "&jfr;": "𝔧",
           "&jmath;": "ȷ",
           "&jopf;": "𝕛",
           "&jscr;": "𝒿",
           "&jsercy;": "ј",
           "&jukcy;": "є",
           "&kappa;": "κ",
           "&kappav;": "ϰ",
           "&kcedil;": "ķ",
           "&kcy;": "к",
           "&kfr;": "𝔨",
           "&kgreen;": "ĸ",
           "&khcy;": "х",
           "&kjcy;": "ќ",
           "&kopf;": "𝕜",
           "&kscr;": "𝓀",
           "&lAarr;": "⇚",
           "&lArr;": "⇐",
           "&lAtail;": "⤛",
           "&lBarr;": "⤎",
           "&lE;": "≦",
           "&lEg;": "⪋",
           "&lHar;": "⥢",
           "&lacute;": "ĺ",
           "&laemptyv;": "⦴",
           "&lagran;": "ℒ",
           "&lambda;": "λ",
           "&lang;": "⟨",
           "&langd;": "⦑",
           "&langle;": "⟨",
           "&lap;": "⪅",
           "&laquo": "«",
           "&laquo;": "«",
           "&larr;": "←",
           "&larrb;": "⇤",
           "&larrbfs;": "⤟",
           "&larrfs;": "⤝",
           "&larrhk;": "↩",
           "&larrlp;": "↫",
           "&larrpl;": "⤹",
           "&larrsim;": "⥳",
           "&larrtl;": "↢",
           "&lat;": "⪫",
           "&latail;": "⤙",
           "&late;": "⪭",
           "&lates;": "⪭︀",
           "&lbarr;": "⤌",
           "&lbbrk;": "❲",
           "&lbrace;": "{",
           "&lbrack;": "[",
           "&lbrke;": "⦋",
           "&lbrksld;": "⦏",
           "&lbrkslu;": "⦍",
           "&lcaron;": "ľ",
           "&lcedil;": "ļ",
           "&lceil;": "⌈",
           "&lcub;": "{",
           "&lcy;": "л",
           "&ldca;": "⤶",
           "&ldquo;": "“",
           "&ldquor;": "„",
           "&ldrdhar;": "⥧",
           "&ldrushar;": "⥋",
           "&ldsh;": "↲",
           "&le;": "≤",
           "&leftarrow;": "←",
           "&leftarrowtail;": "↢",
           "&leftharpoondown;": "↽",
           "&leftharpoonup;": "↼",
           "&leftleftarrows;": "⇇",
           "&leftrightarrow;": "↔",
           "&leftrightarrows;": "⇆",
           "&leftrightharpoons;": "⇋",
           "&leftrightsquigarrow;": "↭",
           "&leftthreetimes;": "⋋",
           "&leg;": "⋚",
           "&leq;": "≤",
           "&leqq;": "≦",
           "&leqslant;": "⩽",
           "&les;": "⩽",
           "&lescc;": "⪨",
           "&lesdot;": "⩿",
           "&lesdoto;": "⪁",
           "&lesdotor;": "⪃",
           "&lesg;": "⋚︀",
           "&lesges;": "⪓",
           "&lessapprox;": "⪅",
           "&lessdot;": "⋖",
           "&lesseqgtr;": "⋚",
           "&lesseqqgtr;": "⪋",
           "&lessgtr;": "≶",
           "&lesssim;": "≲",
           "&lfisht;": "⥼",
           "&lfloor;": "⌊",
           "&lfr;": "𝔩",
           "&lg;": "≶",
           "&lgE;": "⪑",
           "&lhard;": "↽",
           "&lharu;": "↼",
           "&lharul;": "⥪",
           "&lhblk;": "▄",
           "&ljcy;": "љ",
           "&ll;": "≪",
           "&llarr;": "⇇",
           "&llcorner;": "⌞",
           "&llhard;": "⥫",
           "&lltri;": "◺",
           "&lmidot;": "ŀ",
           "&lmoust;": "⎰",
           "&lmoustache;": "⎰",
           "&lnE;": "≨",
           "&lnap;": "⪉",
           "&lnapprox;": "⪉",
           "&lne;": "⪇",
           "&lneq;": "⪇",
           "&lneqq;": "≨",
           "&lnsim;": "⋦",
           "&loang;": "⟬",
           "&loarr;": "⇽",
           "&lobrk;": "⟦",
           "&longleftarrow;": "⟵",
           "&longleftrightarrow;": "⟷",
           "&longmapsto;": "⟼",
           "&longrightarrow;": "⟶",
           "&looparrowleft;": "↫",
           "&looparrowright;": "↬",
           "&lopar;": "⦅",
           "&lopf;": "𝕝",
           "&loplus;": "⨭",
           "&lotimes;": "⨴",
           "&lowast;": "∗",
           "&lowbar;": "_",
           "&loz;": "◊",
           "&lozenge;": "◊",
           "&lozf;": "⧫",
           "&lpar;": "(",
           "&lparlt;": "⦓",
           "&lrarr;": "⇆",
           "&lrcorner;": "⌟",
           "&lrhar;": "⇋",
           "&lrhard;": "⥭",
           "&lrm;": "‎",
           "&lrtri;": "⊿",
           "&lsaquo;": "‹",
           "&lscr;": "𝓁",
           "&lsh;": "↰",
           "&lsim;": "≲",
           "&lsime;": "⪍",
           "&lsimg;": "⪏",
           "&lsqb;": "[",
           "&lsquo;": "‘",
           "&lsquor;": "‚",
           "&lstrok;": "ł",
           "&lt": "<",
           "&lt;": "<",
           "&ltcc;": "⪦",
           "&ltcir;": "⩹",
           "&ltdot;": "⋖",
           "&lthree;": "⋋",
           "&ltimes;": "⋉",
           "&ltlarr;": "⥶",
           "&ltquest;": "⩻",
           "&ltrPar;": "⦖",
           "&ltri;": "◃",
           "&ltrie;": "⊴",
           "&ltrif;": "◂",
           "&lurdshar;": "⥊",
           "&luruhar;": "⥦",
           "&lvertneqq;": "≨︀",
           "&lvnE;": "≨︀",
           "&mDDot;": "∺",
           "&macr": "¯",
           "&macr;": "¯",
           "&male;": "♂",
           "&malt;": "✠",
           "&maltese;": "✠",
           "&map;": "↦",
           "&mapsto;": "↦",
           "&mapstodown;": "↧",
           "&mapstoleft;": "↤",
           "&mapstoup;": "↥",
           "&marker;": "▮",
           "&mcomma;": "⨩",
           "&mcy;": "м",
           "&mdash;": "—",
           "&measuredangle;": "∡",
           "&mfr;": "𝔪",
           "&mho;": "℧",
           "&micro": "µ",
           "&micro;": "µ",
           "&mid;": "∣",
           "&midast;": "*",
           "&midcir;": "⫰",
           "&middot": "·",
           "&middot;": "·",
           "&minus;": "−",
           "&minusb;": "⊟",
           "&minusd;": "∸",
           "&minusdu;": "⨪",
           "&mlcp;": "⫛",
           "&mldr;": "…",
           "&mnplus;": "∓",
           "&models;": "⊧",
           "&mopf;": "𝕞",
           "&mp;": "∓",
           "&mscr;": "𝓂",
           "&mstpos;": "∾",
           "&mu;": "μ",
           "&multimap;": "⊸",
           "&mumap;": "⊸",
           "&nGg;": "⋙̸",
           "&nGt;": "≫⃒",
           "&nGtv;": "≫̸",
           "&nLeftarrow;": "⇍",
           "&nLeftrightarrow;": "⇎",
           "&nLl;": "⋘̸",
           "&nLt;": "≪⃒",
           "&nLtv;": "≪̸",
           "&nRightarrow;": "⇏",
           "&nVDash;": "⊯",
           "&nVdash;": "⊮",
           "&nabla;": "∇",
           "&nacute;": "ń",
           "&nang;": "∠⃒",
           "&nap;": "≉",
           "&napE;": "⩰̸",
           "&napid;": "≋̸",
           "&napos;": "ŉ",
           "&napprox;": "≉",
           "&natur;": "♮",
           "&natural;": "♮",
           "&naturals;": "ℕ",
           "&nbsp": " ",
           "&nbsp;": " ",
           "&nbump;": "≎̸",
           "&nbumpe;": "≏̸",
           "&ncap;": "⩃",
           "&ncaron;": "ň",
           "&ncedil;": "ņ",
           "&ncong;": "≇",
           "&ncongdot;": "⩭̸",
           "&ncup;": "⩂",
           "&ncy;": "н",
           "&ndash;": "–",
           "&ne;": "≠",
           "&neArr;": "⇗",
           "&nearhk;": "⤤",
           "&nearr;": "↗",
           "&nearrow;": "↗",
           "&nedot;": "≐̸",
           "&nequiv;": "≢",
           "&nesear;": "⤨",
           "&nesim;": "≂̸",
           "&nexist;": "∄",
           "&nexists;": "∄",
           "&nfr;": "𝔫",
           "&ngE;": "≧̸",
           "&nge;": "≱",
           "&ngeq;": "≱",
           "&ngeqq;": "≧̸",
           "&ngeqslant;": "⩾̸",
           "&nges;": "⩾̸",
           "&ngsim;": "≵",
           "&ngt;": "≯",
           "&ngtr;": "≯",
           "&nhArr;": "⇎",
           "&nharr;": "↮",
           "&nhpar;": "⫲",
           "&ni;": "∋",
           "&nis;": "⋼",
           "&nisd;": "⋺",
           "&niv;": "∋",
           "&njcy;": "њ",
           "&nlArr;": "⇍",
           "&nlE;": "≦̸",
           "&nlarr;": "↚",
           "&nldr;": "‥",
           "&nle;": "≰",
           "&nleftarrow;": "↚",
           "&nleftrightarrow;": "↮",
           "&nleq;": "≰",
           "&nleqq;": "≦̸",
           "&nleqslant;": "⩽̸",
           "&nles;": "⩽̸",
           "&nless;": "≮",
           "&nlsim;": "≴",
           "&nlt;": "≮",
           "&nltri;": "⋪",
           "&nltrie;": "⋬",
           "&nmid;": "∤",
           "&nopf;": "𝕟",
           "&not": "¬",
           "&not;": "¬",
           "&notin;": "∉",
           "&notinE;": "⋹̸",
           "&notindot;": "⋵̸",
           "&notinva;": "∉",
           "&notinvb;": "⋷",
           "&notinvc;": "⋶",
           "&notni;": "∌",
           "&notniva;": "∌",
           "&notnivb;": "⋾",
           "&notnivc;": "⋽",
           "&npar;": "∦",
           "&nparallel;": "∦",
           "&nparsl;": "⫽⃥",
           "&npart;": "∂̸",
           "&npolint;": "⨔",
           "&npr;": "⊀",
           "&nprcue;": "⋠",
           "&npre;": "⪯̸",
           "&nprec;": "⊀",
           "&npreceq;": "⪯̸",
           "&nrArr;": "⇏",
           "&nrarr;": "↛",
           "&nrarrc;": "⤳̸",
           "&nrarrw;": "↝̸",
           "&nrightarrow;": "↛",
           "&nrtri;": "⋫",
           "&nrtrie;": "⋭",
           "&nsc;": "⊁",
           "&nsccue;": "⋡",
           "&nsce;": "⪰̸",
           "&nscr;": "𝓃",
           "&nshortmid;": "∤",
           "&nshortparallel;": "∦",
           "&nsim;": "≁",
           "&nsime;": "≄",
           "&nsimeq;": "≄",
           "&nsmid;": "∤",
           "&nspar;": "∦",
           "&nsqsube;": "⋢",
           "&nsqsupe;": "⋣",
           "&nsub;": "⊄",
           "&nsubE;": "⫅̸",
           "&nsube;": "⊈",
           "&nsubset;": "⊂⃒",
           "&nsubseteq;": "⊈",
           "&nsubseteqq;": "⫅̸",
           "&nsucc;": "⊁",
           "&nsucceq;": "⪰̸",
           "&nsup;": "⊅",
           "&nsupE;": "⫆̸",
           "&nsupe;": "⊉",
           "&nsupset;": "⊃⃒",
           "&nsupseteq;": "⊉",
           "&nsupseteqq;": "⫆̸",
           "&ntgl;": "≹",
           "&ntilde": "ñ",
           "&ntilde;": "ñ",
           "&ntlg;": "≸",
           "&ntriangleleft;": "⋪",
           "&ntrianglelefteq;": "⋬",
           "&ntriangleright;": "⋫",
           "&ntrianglerighteq;": "⋭",
           "&nu;": "ν",
           "&num;": "#",
           "&numero;": "№",
           "&numsp;": " ",
           "&nvDash;": "⊭",
           "&nvHarr;": "⤄",
           "&nvap;": "≍⃒",
           "&nvdash;": "⊬",
           "&nvge;": "≥⃒",
           "&nvgt;": ">⃒",
           "&nvinfin;": "⧞",
           "&nvlArr;": "⤂",
           "&nvle;": "≤⃒",
           "&nvlt;": "<⃒",
           "&nvltrie;": "⊴⃒",
           "&nvrArr;": "⤃",
           "&nvrtrie;": "⊵⃒",
           "&nvsim;": "∼⃒",
           "&nwArr;": "⇖",
           "&nwarhk;": "⤣",
           "&nwarr;": "↖",
           "&nwarrow;": "↖",
           "&nwnear;": "⤧",
           "&oS;": "Ⓢ",
           "&oacute": "ó",
           "&oacute;": "ó",
           "&oast;": "⊛",
           "&ocir;": "⊚",
           "&ocirc": "ô",
           "&ocirc;": "ô",
           "&ocy;": "о",
           "&odash;": "⊝",
           "&odblac;": "ő",
           "&odiv;": "⨸",
           "&odot;": "⊙",
           "&odsold;": "⦼",
           "&oelig;": "œ",
           "&ofcir;": "⦿",
           "&ofr;": "𝔬",
           "&ogon;": "˛",
           "&ograve": "ò",
           "&ograve;": "ò",
           "&ogt;": "⧁",
           "&ohbar;": "⦵",
           "&ohm;": "Ω",
           "&oint;": "∮",
           "&olarr;": "↺",
           "&olcir;": "⦾",
           "&olcross;": "⦻",
           "&oline;": "‾",
           "&olt;": "⧀",
           "&omacr;": "ō",
           "&omega;": "ω",
           "&omicron;": "ο",
           "&omid;": "⦶",
           "&ominus;": "⊖",
           "&oopf;": "𝕠",
           "&opar;": "⦷",
           "&operp;": "⦹",
           "&oplus;": "⊕",
           "&or;": "∨",
           "&orarr;": "↻",
           "&ord;": "⩝",
           "&order;": "ℴ",
           "&orderof;": "ℴ",
           "&ordf": "ª",
           "&ordf;": "ª",
           "&ordm": "º",
           "&ordm;": "º",
           "&origof;": "⊶",
           "&oror;": "⩖",
           "&orslope;": "⩗",
           "&orv;": "⩛",
           "&oscr;": "ℴ",
           "&oslash": "ø",
           "&oslash;": "ø",
           "&osol;": "⊘",
           "&otilde": "õ",
           "&otilde;": "õ",
           "&otimes;": "⊗",
           "&otimesas;": "⨶",
           "&ouml": "ö",
           "&ouml;": "ö",
           "&ovbar;": "⌽",
           "&par;": "∥",
           "&para": "¶",
           "&para;": "¶",
           "&parallel;": "∥",
           "&parsim;": "⫳",
           "&parsl;": "⫽",
           "&part;": "∂",
           "&pcy;": "п",
           "&percnt;": "%",
           "&period;": ".",
           "&permil;": "‰",
           "&perp;": "⊥",
           "&pertenk;": "‱",
           "&pfr;": "𝔭",
           "&phi;": "φ",
           "&phiv;": "ϕ",
           "&phmmat;": "ℳ",
           "&phone;": "☎",
           "&pi;": "π",
           "&pitchfork;": "⋔",
           "&piv;": "ϖ",
           "&planck;": "ℏ",
           "&planckh;": "ℎ",
           "&plankv;": "ℏ",
           "&plus;": "+",
           "&plusacir;": "⨣",
           "&plusb;": "⊞",
           "&pluscir;": "⨢",
           "&plusdo;": "∔",
           "&plusdu;": "⨥",
           "&pluse;": "⩲",
           "&plusmn": "±",
           "&plusmn;": "±",
           "&plussim;": "⨦",
           "&plustwo;": "⨧",
           "&pm;": "±",
           "&pointint;": "⨕",
           "&popf;": "𝕡",
           "&pound": "£",
           "&pound;": "£",
           "&pr;": "≺",
           "&prE;": "⪳",
           "&prap;": "⪷",
           "&prcue;": "≼",
           "&pre;": "⪯",
           "&prec;": "≺",
           "&precapprox;": "⪷",
           "&preccurlyeq;": "≼",
           "&preceq;": "⪯",
           "&precnapprox;": "⪹",
           "&precneqq;": "⪵",
           "&precnsim;": "⋨",
           "&precsim;": "≾",
           "&prime;": "′",
           "&primes;": "ℙ",
           "&prnE;": "⪵",
           "&prnap;": "⪹",
           "&prnsim;": "⋨",
           "&prod;": "∏",
           "&profalar;": "⌮",
           "&profline;": "⌒",
           "&profsurf;": "⌓",
           "&prop;": "∝",
           "&propto;": "∝",
           "&prsim;": "≾",
           "&prurel;": "⊰",
           "&pscr;": "𝓅",
           "&psi;": "ψ",
           "&puncsp;": " ",
           "&qfr;": "𝔮",
           "&qint;": "⨌",
           "&qopf;": "𝕢",
           "&qprime;": "⁗",
           "&qscr;": "𝓆",
           "&quaternions;": "ℍ",
           "&quatint;": "⨖",
           "&quest;": "?",
           "&questeq;": "≟",
           "&quot": '"',
           "&quot;": '"',
           "&rAarr;": "⇛",
           "&rArr;": "⇒",
           "&rAtail;": "⤜",
           "&rBarr;": "⤏",
           "&rHar;": "⥤",
           "&race;": "∽̱",
           "&racute;": "ŕ",
           "&radic;": "√",
           "&raemptyv;": "⦳",
           "&rang;": "⟩",
           "&rangd;": "⦒",
           "&range;": "⦥",
           "&rangle;": "⟩",
           "&raquo": "»",
           "&raquo;": "»",
           "&rarr;": "→",
           "&rarrap;": "⥵",
           "&rarrb;": "⇥",
           "&rarrbfs;": "⤠",
           "&rarrc;": "⤳",
           "&rarrfs;": "⤞",
           "&rarrhk;": "↪",
           "&rarrlp;": "↬",
           "&rarrpl;": "⥅",
           "&rarrsim;": "⥴",
           "&rarrtl;": "↣",
           "&rarrw;": "↝",
           "&ratail;": "⤚",
           "&ratio;": "∶",
           "&rationals;": "ℚ",
           "&rbarr;": "⤍",
           "&rbbrk;": "❳",
           "&rbrace;": "}",
           "&rbrack;": "]",
           "&rbrke;": "⦌",
           "&rbrksld;": "⦎",
           "&rbrkslu;": "⦐",
           "&rcaron;": "ř",
           "&rcedil;": "ŗ",
           "&rceil;": "⌉",
           "&rcub;": "}",
           "&rcy;": "р",
           "&rdca;": "⤷",
           "&rdldhar;": "⥩",
           "&rdquo;": "”",
           "&rdquor;": "”",
           "&rdsh;": "↳",
           "&real;": "ℜ",
           "&realine;": "ℛ",
           "&realpart;": "ℜ",
           "&reals;": "ℝ",
           "&rect;": "▭",
           "&reg": "®",
           "&reg;": "®",
           "&rfisht;": "⥽",
           "&rfloor;": "⌋",
           "&rfr;": "𝔯",
           "&rhard;": "⇁",
           "&rharu;": "⇀",
           "&rharul;": "⥬",
           "&rho;": "ρ",
           "&rhov;": "ϱ",
           "&rightarrow;": "→",
           "&rightarrowtail;": "↣",
           "&rightharpoondown;": "⇁",
           "&rightharpoonup;": "⇀",
           "&rightleftarrows;": "⇄",
           "&rightleftharpoons;": "⇌",
           "&rightrightarrows;": "⇉",
           "&rightsquigarrow;": "↝",
           "&rightthreetimes;": "⋌",
           "&ring;": "˚",
           "&risingdotseq;": "≓",
           "&rlarr;": "⇄",
           "&rlhar;": "⇌",
           "&rlm;": "‏",
           "&rmoust;": "⎱",
           "&rmoustache;": "⎱",
           "&rnmid;": "⫮",
           "&roang;": "⟭",
           "&roarr;": "⇾",
           "&robrk;": "⟧",
           "&ropar;": "⦆",
           "&ropf;": "𝕣",
           "&roplus;": "⨮",
           "&rotimes;": "⨵",
           "&rpar;": ")",
           "&rpargt;": "⦔",
           "&rppolint;": "⨒",
           "&rrarr;": "⇉",
           "&rsaquo;": "›",
           "&rscr;": "𝓇",
           "&rsh;": "↱",
           "&rsqb;": "]",
           "&rsquo;": "’",
           "&rsquor;": "’",
           "&rthree;": "⋌",
           "&rtimes;": "⋊",
           "&rtri;": "▹",
           "&rtrie;": "⊵",
           "&rtrif;": "▸",
           "&rtriltri;": "⧎",
           "&ruluhar;": "⥨",
           "&rx;": "℞",
           "&sacute;": "ś",
           "&sbquo;": "‚",
           "&sc;": "≻",
           "&scE;": "⪴",
           "&scap;": "⪸",
           "&scaron;": "š",
           "&sccue;": "≽",
           "&sce;": "⪰",
           "&scedil;": "ş",
           "&scirc;": "ŝ",
           "&scnE;": "⪶",
           "&scnap;": "⪺",
           "&scnsim;": "⋩",
           "&scpolint;": "⨓",
           "&scsim;": "≿",
           "&scy;": "с",
           "&sdot;": "⋅",
           "&sdotb;": "⊡",
           "&sdote;": "⩦",
           "&seArr;": "⇘",
           "&searhk;": "⤥",
           "&searr;": "↘",
           "&searrow;": "↘",
           "&sect": "§",
           "&sect;": "§",
           "&semi;": ";",
           "&seswar;": "⤩",
           "&setminus;": "∖",
           "&setmn;": "∖",
           "&sext;": "✶",
           "&sfr;": "𝔰",
           "&sfrown;": "⌢",
           "&sharp;": "♯",
           "&shchcy;": "щ",
           "&shcy;": "ш",
           "&shortmid;": "∣",
           "&shortparallel;": "∥",
           "&shy": "­",
           "&shy;": "­",
           "&sigma;": "σ",
           "&sigmaf;": "ς",
           "&sigmav;": "ς",
           "&sim;": "∼",
           "&simdot;": "⩪",
           "&sime;": "≃",
           "&simeq;": "≃",
           "&simg;": "⪞",
           "&simgE;": "⪠",
           "&siml;": "⪝",
           "&simlE;": "⪟",
           "&simne;": "≆",
           "&simplus;": "⨤",
           "&simrarr;": "⥲",
           "&slarr;": "←",
           "&smallsetminus;": "∖",
           "&smashp;": "⨳",
           "&smeparsl;": "⧤",
           "&smid;": "∣",
           "&smile;": "⌣",
           "&smt;": "⪪",
           "&smte;": "⪬",
           "&smtes;": "⪬︀",
           "&softcy;": "ь",
           "&sol;": "/",
           "&solb;": "⧄",
           "&solbar;": "⌿",
           "&sopf;": "𝕤",
           "&spades;": "♠",
           "&spadesuit;": "♠",
           "&spar;": "∥",
           "&sqcap;": "⊓",
           "&sqcaps;": "⊓︀",
           "&sqcup;": "⊔",
           "&sqcups;": "⊔︀",
           "&sqsub;": "⊏",
           "&sqsube;": "⊑",
           "&sqsubset;": "⊏",
           "&sqsubseteq;": "⊑",
           "&sqsup;": "⊐",
           "&sqsupe;": "⊒",
           "&sqsupset;": "⊐",
           "&sqsupseteq;": "⊒",
           "&squ;": "□",
           "&square;": "□",
           "&squarf;": "▪",
           "&squf;": "▪",
           "&srarr;": "→",
           "&sscr;": "𝓈",
           "&ssetmn;": "∖",
           "&ssmile;": "⌣",
           "&sstarf;": "⋆",
           "&star;": "☆",
           "&starf;": "★",
           "&straightepsilon;": "ϵ",
           "&straightphi;": "ϕ",
           "&strns;": "¯",
           "&sub;": "⊂",
           "&subE;": "⫅",
           "&subdot;": "⪽",
           "&sube;": "⊆",
           "&subedot;": "⫃",
           "&submult;": "⫁",
           "&subnE;": "⫋",
           "&subne;": "⊊",
           "&subplus;": "⪿",
           "&subrarr;": "⥹",
           "&subset;": "⊂",
           "&subseteq;": "⊆",
           "&subseteqq;": "⫅",
           "&subsetneq;": "⊊",
           "&subsetneqq;": "⫋",
           "&subsim;": "⫇",
           "&subsub;": "⫕",
           "&subsup;": "⫓",
           "&succ;": "≻",
           "&succapprox;": "⪸",
           "&succcurlyeq;": "≽",
           "&succeq;": "⪰",
           "&succnapprox;": "⪺",
           "&succneqq;": "⪶",
           "&succnsim;": "⋩",
           "&succsim;": "≿",
           "&sum;": "∑",
           "&sung;": "♪",
           "&sup1": "¹",
           "&sup1;": "¹",
           "&sup2": "²",
           "&sup2;": "²",
           "&sup3": "³",
           "&sup3;": "³",
           "&sup;": "⊃",
           "&supE;": "⫆",
           "&supdot;": "⪾",
           "&supdsub;": "⫘",
           "&supe;": "⊇",
           "&supedot;": "⫄",
           "&suphsol;": "⟉",
           "&suphsub;": "⫗",
           "&suplarr;": "⥻",
           "&supmult;": "⫂",
           "&supnE;": "⫌",
           "&supne;": "⊋",
           "&supplus;": "⫀",
           "&supset;": "⊃",
           "&supseteq;": "⊇",
           "&supseteqq;": "⫆",
           "&supsetneq;": "⊋",
           "&supsetneqq;": "⫌",
           "&supsim;": "⫈",
           "&supsub;": "⫔",
           "&supsup;": "⫖",
           "&swArr;": "⇙",
           "&swarhk;": "⤦",
           "&swarr;": "↙",
           "&swarrow;": "↙",
           "&swnwar;": "⤪",
           "&szlig": "ß",
           "&szlig;": "ß",
           "&target;": "⌖",
           "&tau;": "τ",
           "&tbrk;": "⎴",
           "&tcaron;": "ť",
           "&tcedil;": "ţ",
           "&tcy;": "т",
           "&tdot;": "⃛",
           "&telrec;": "⌕",
           "&tfr;": "𝔱",
           "&there4;": "∴",
           "&therefore;": "∴",
           "&theta;": "θ",
           "&thetasym;": "ϑ",
           "&thetav;": "ϑ",
           "&thickapprox;": "≈",
           "&thicksim;": "∼",
           "&thinsp;": " ",
           "&thkap;": "≈",
           "&thksim;": "∼",
           "&thorn": "þ",
           "&thorn;": "þ",
           "&tilde;": "˜",
           "&times": "×",
           "&times;": "×",
           "&timesb;": "⊠",
           "&timesbar;": "⨱",
           "&timesd;": "⨰",
           "&tint;": "∭",
           "&toea;": "⤨",
           "&top;": "⊤",
           "&topbot;": "⌶",
           "&topcir;": "⫱",
           "&topf;": "𝕥",
           "&topfork;": "⫚",
           "&tosa;": "⤩",
           "&tprime;": "‴",
           "&trade;": "™",
           "&triangle;": "▵",
           "&triangledown;": "▿",
           "&triangleleft;": "◃",
           "&trianglelefteq;": "⊴",
           "&triangleq;": "≜",
           "&triangleright;": "▹",
           "&trianglerighteq;": "⊵",
           "&tridot;": "◬",
           "&trie;": "≜",
           "&triminus;": "⨺",
           "&triplus;": "⨹",
           "&trisb;": "⧍",
           "&tritime;": "⨻",
           "&trpezium;": "⏢",
           "&tscr;": "𝓉",
           "&tscy;": "ц",
           "&tshcy;": "ћ",
           "&tstrok;": "ŧ",
           "&twixt;": "≬",
           "&twoheadleftarrow;": "↞",
           "&twoheadrightarrow;": "↠",
           "&uArr;": "⇑",
           "&uHar;": "⥣",
           "&uacute": "ú",
           "&uacute;": "ú",
           "&uarr;": "↑",
           "&ubrcy;": "ў",
           "&ubreve;": "ŭ",
           "&ucirc": "û",
           "&ucirc;": "û",
           "&ucy;": "у",
           "&udarr;": "⇅",
           "&udblac;": "ű",
           "&udhar;": "⥮",
           "&ufisht;": "⥾",
           "&ufr;": "𝔲",
           "&ugrave": "ù",
           "&ugrave;": "ù",
           "&uharl;": "↿",
           "&uharr;": "↾",
           "&uhblk;": "▀",
           "&ulcorn;": "⌜",
           "&ulcorner;": "⌜",
           "&ulcrop;": "⌏",
           "&ultri;": "◸",
           "&umacr;": "ū",
           "&uml": "¨",
           "&uml;": "¨",
           "&uogon;": "ų",
           "&uopf;": "𝕦",
           "&uparrow;": "↑",
           "&updownarrow;": "↕",
           "&upharpoonleft;": "↿",
           "&upharpoonright;": "↾",
           "&uplus;": "⊎",
           "&upsi;": "υ",
           "&upsih;": "ϒ",
           "&upsilon;": "υ",
           "&upuparrows;": "⇈",
           "&urcorn;": "⌝",
           "&urcorner;": "⌝",
           "&urcrop;": "⌎",
           "&uring;": "ů",
           "&urtri;": "◹",
           "&uscr;": "𝓊",
           "&utdot;": "⋰",
           "&utilde;": "ũ",
           "&utri;": "▵",
           "&utrif;": "▴",
           "&uuarr;": "⇈",
           "&uuml": "ü",
           "&uuml;": "ü",
           "&uwangle;": "⦧",
           "&vArr;": "⇕",
           "&vBar;": "⫨",
           "&vBarv;": "⫩",
           "&vDash;": "⊨",
           "&vangrt;": "⦜",
           "&varepsilon;": "ϵ",
           "&varkappa;": "ϰ",
           "&varnothing;": "∅",
           "&varphi;": "ϕ",
           "&varpi;": "ϖ",
           "&varpropto;": "∝",
           "&varr;": "↕",
           "&varrho;": "ϱ",
           "&varsigma;": "ς",
           "&varsubsetneq;": "⊊︀",
           "&varsubsetneqq;": "⫋︀",
           "&varsupsetneq;": "⊋︀",
           "&varsupsetneqq;": "⫌︀",
           "&vartheta;": "ϑ",
           "&vartriangleleft;": "⊲",
           "&vartriangleright;": "⊳",
           "&vcy;": "в",
           "&vdash;": "⊢",
           "&vee;": "∨",
           "&veebar;": "⊻",
           "&veeeq;": "≚",
           "&vellip;": "⋮",
           "&verbar;": "|",
           "&vert;": "|",
           "&vfr;": "𝔳",
           "&vltri;": "⊲",
           "&vnsub;": "⊂⃒",
           "&vnsup;": "⊃⃒",
           "&vopf;": "𝕧",
           "&vprop;": "∝",
           "&vrtri;": "⊳",
           "&vscr;": "𝓋",
           "&vsubnE;": "⫋︀",
           "&vsubne;": "⊊︀",
           "&vsupnE;": "⫌︀",
           "&vsupne;": "⊋︀",
           "&vzigzag;": "⦚",
           "&wcirc;": "ŵ",
           "&wedbar;": "⩟",
           "&wedge;": "∧",
           "&wedgeq;": "≙",
           "&weierp;": "℘",
           "&wfr;": "𝔴",
           "&wopf;": "𝕨",
           "&wp;": "℘",
           "&wr;": "≀",
           "&wreath;": "≀",
           "&wscr;": "𝓌",
           "&xcap;": "⋂",
           "&xcirc;": "◯",
           "&xcup;": "⋃",
           "&xdtri;": "▽",
           "&xfr;": "𝔵",
           "&xhArr;": "⟺",
           "&xharr;": "⟷",
           "&xi;": "ξ",
           "&xlArr;": "⟸",
           "&xlarr;": "⟵",
           "&xmap;": "⟼",
           "&xnis;": "⋻",
           "&xodot;": "⨀",
           "&xopf;": "𝕩",
           "&xoplus;": "⨁",
           "&xotime;": "⨂",
           "&xrArr;": "⟹",
           "&xrarr;": "⟶",
           "&xscr;": "𝓍",
           "&xsqcup;": "⨆",
           "&xuplus;": "⨄",
           "&xutri;": "△",
           "&xvee;": "⋁",
           "&xwedge;": "⋀",
           "&yacute": "ý",
           "&yacute;": "ý",
           "&yacy;": "я",
           "&ycirc;": "ŷ",
           "&ycy;": "ы",
           "&yen": "¥",
           "&yen;": "¥",
           "&yfr;": "𝔶",
           "&yicy;": "ї",
           "&yopf;": "𝕪",
           "&yscr;": "𝓎",
           "&yucy;": "ю",
           "&yuml": "ÿ",
           "&yuml;": "ÿ",
           "&zacute;": "ź",
           "&zcaron;": "ž",
           "&zcy;": "з",
           "&zdot;": "ż",
           "&zeetrf;": "ℨ",
           "&zeta;": "ζ",
           "&zfr;": "𝔷",
           "&zhcy;": "ж",
           "&zigrarr;": "⇝",
           "&zopf;": "𝕫",
           "&zscr;": "𝓏",
           "&zwj;": "‍",
           "&zwnj;": "‌"
         },
         characters: {
           "Æ": "&AElig;",
           "&": "&amp;",
           "Á": "&Aacute;",
           "Ă": "&Abreve;",
           "Â": "&Acirc;",
           "А": "&Acy;",
           "𝔄": "&Afr;",
           "À": "&Agrave;",
           "Α": "&Alpha;",
           "Ā": "&Amacr;",
           "⩓": "&And;",
           "Ą": "&Aogon;",
           "𝔸": "&Aopf;",
           "⁡": "&af;",
           "Å": "&angst;",
           "𝒜": "&Ascr;",
           "≔": "&coloneq;",
           "Ã": "&Atilde;",
           "Ä": "&Auml;",
           "∖": "&ssetmn;",
           "⫧": "&Barv;",
           "⌆": "&doublebarwedge;",
           "Б": "&Bcy;",
           "∵": "&because;",
           "ℬ": "&bernou;",
           "Β": "&Beta;",
           "𝔅": "&Bfr;",
           "𝔹": "&Bopf;",
           "˘": "&breve;",
           "≎": "&bump;",
           "Ч": "&CHcy;",
           "©": "&copy;",
           "Ć": "&Cacute;",
           "⋒": "&Cap;",
           "ⅅ": "&DD;",
           "ℭ": "&Cfr;",
           "Č": "&Ccaron;",
           "Ç": "&Ccedil;",
           "Ĉ": "&Ccirc;",
           "∰": "&Cconint;",
           "Ċ": "&Cdot;",
           "¸": "&cedil;",
           "·": "&middot;",
           "Χ": "&Chi;",
           "⊙": "&odot;",
           "⊖": "&ominus;",
           "⊕": "&oplus;",
           "⊗": "&otimes;",
           "∲": "&cwconint;",
           "”": "&rdquor;",
           "’": "&rsquor;",
           "∷": "&Proportion;",
           "⩴": "&Colone;",
           "≡": "&equiv;",
           "∯": "&DoubleContourIntegral;",
           "∮": "&oint;",
           "ℂ": "&complexes;",
           "∐": "&coprod;",
           "∳": "&awconint;",
           "⨯": "&Cross;",
           "𝒞": "&Cscr;",
           "⋓": "&Cup;",
           "≍": "&asympeq;",
           "⤑": "&DDotrahd;",
           "Ђ": "&DJcy;",
           "Ѕ": "&DScy;",
           "Џ": "&DZcy;",
           "‡": "&ddagger;",
           "↡": "&Darr;",
           "⫤": "&DoubleLeftTee;",
           "Ď": "&Dcaron;",
           "Д": "&Dcy;",
           "∇": "&nabla;",
           "Δ": "&Delta;",
           "𝔇": "&Dfr;",
           "´": "&acute;",
           "˙": "&dot;",
           "˝": "&dblac;",
           "`": "&grave;",
           "˜": "&tilde;",
           "⋄": "&diamond;",
           "ⅆ": "&dd;",
           "𝔻": "&Dopf;",
           "¨": "&uml;",
           "⃜": "&DotDot;",
           "≐": "&esdot;",
           "⇓": "&dArr;",
           "⇐": "&lArr;",
           "⇔": "&iff;",
           "⟸": "&xlArr;",
           "⟺": "&xhArr;",
           "⟹": "&xrArr;",
           "⇒": "&rArr;",
           "⊨": "&vDash;",
           "⇑": "&uArr;",
           "⇕": "&vArr;",
           "∥": "&spar;",
           "↓": "&downarrow;",
           "⤓": "&DownArrowBar;",
           "⇵": "&duarr;",
           "̑": "&DownBreve;",
           "⥐": "&DownLeftRightVector;",
           "⥞": "&DownLeftTeeVector;",
           "↽": "&lhard;",
           "⥖": "&DownLeftVectorBar;",
           "⥟": "&DownRightTeeVector;",
           "⇁": "&rightharpoondown;",
           "⥗": "&DownRightVectorBar;",
           "⊤": "&top;",
           "↧": "&mapstodown;",
           "𝒟": "&Dscr;",
           "Đ": "&Dstrok;",
           "Ŋ": "&ENG;",
           "Ð": "&ETH;",
           "É": "&Eacute;",
           "Ě": "&Ecaron;",
           "Ê": "&Ecirc;",
           "Э": "&Ecy;",
           "Ė": "&Edot;",
           "𝔈": "&Efr;",
           "È": "&Egrave;",
           "∈": "&isinv;",
           "Ē": "&Emacr;",
           "◻": "&EmptySmallSquare;",
           "▫": "&EmptyVerySmallSquare;",
           "Ę": "&Eogon;",
           "𝔼": "&Eopf;",
           "Ε": "&Epsilon;",
           "⩵": "&Equal;",
           "≂": "&esim;",
           "⇌": "&rlhar;",
           "ℰ": "&expectation;",
           "⩳": "&Esim;",
           "Η": "&Eta;",
           "Ë": "&Euml;",
           "∃": "&exist;",
           "ⅇ": "&exponentiale;",
           "Ф": "&Fcy;",
           "𝔉": "&Ffr;",
           "◼": "&FilledSmallSquare;",
           "▪": "&squf;",
           "𝔽": "&Fopf;",
           "∀": "&forall;",
           "ℱ": "&Fscr;",
           "Ѓ": "&GJcy;",
           ">": "&gt;",
           "Γ": "&Gamma;",
           "Ϝ": "&Gammad;",
           "Ğ": "&Gbreve;",
           "Ģ": "&Gcedil;",
           "Ĝ": "&Gcirc;",
           "Г": "&Gcy;",
           "Ġ": "&Gdot;",
           "𝔊": "&Gfr;",
           "⋙": "&ggg;",
           "𝔾": "&Gopf;",
           "≥": "&geq;",
           "⋛": "&gtreqless;",
           "≧": "&geqq;",
           "⪢": "&GreaterGreater;",
           "≷": "&gtrless;",
           "⩾": "&ges;",
           "≳": "&gtrsim;",
           "𝒢": "&Gscr;",
           "≫": "&gg;",
           "Ъ": "&HARDcy;",
           "ˇ": "&caron;",
           "^": "&Hat;",
           "Ĥ": "&Hcirc;",
           "ℌ": "&Poincareplane;",
           "ℋ": "&hamilt;",
           "ℍ": "&quaternions;",
           "─": "&boxh;",
           "Ħ": "&Hstrok;",
           "≏": "&bumpeq;",
           "Е": "&IEcy;",
           "Ĳ": "&IJlig;",
           "Ё": "&IOcy;",
           "Í": "&Iacute;",
           "Î": "&Icirc;",
           "И": "&Icy;",
           "İ": "&Idot;",
           "ℑ": "&imagpart;",
           "Ì": "&Igrave;",
           "Ī": "&Imacr;",
           "ⅈ": "&ii;",
           "∬": "&Int;",
           "∫": "&int;",
           "⋂": "&xcap;",
           "⁣": "&ic;",
           "⁢": "&it;",
           "Į": "&Iogon;",
           "𝕀": "&Iopf;",
           "Ι": "&Iota;",
           "ℐ": "&imagline;",
           "Ĩ": "&Itilde;",
           "І": "&Iukcy;",
           "Ï": "&Iuml;",
           "Ĵ": "&Jcirc;",
           "Й": "&Jcy;",
           "𝔍": "&Jfr;",
           "𝕁": "&Jopf;",
           "𝒥": "&Jscr;",
           "Ј": "&Jsercy;",
           "Є": "&Jukcy;",
           "Х": "&KHcy;",
           "Ќ": "&KJcy;",
           "Κ": "&Kappa;",
           "Ķ": "&Kcedil;",
           "К": "&Kcy;",
           "𝔎": "&Kfr;",
           "𝕂": "&Kopf;",
           "𝒦": "&Kscr;",
           "Љ": "&LJcy;",
           "<": "&lt;",
           "Ĺ": "&Lacute;",
           "Λ": "&Lambda;",
           "⟪": "&Lang;",
           "ℒ": "&lagran;",
           "↞": "&twoheadleftarrow;",
           "Ľ": "&Lcaron;",
           "Ļ": "&Lcedil;",
           "Л": "&Lcy;",
           "⟨": "&langle;",
           "←": "&slarr;",
           "⇤": "&larrb;",
           "⇆": "&lrarr;",
           "⌈": "&lceil;",
           "⟦": "&lobrk;",
           "⥡": "&LeftDownTeeVector;",
           "⇃": "&downharpoonleft;",
           "⥙": "&LeftDownVectorBar;",
           "⌊": "&lfloor;",
           "↔": "&leftrightarrow;",
           "⥎": "&LeftRightVector;",
           "⊣": "&dashv;",
           "↤": "&mapstoleft;",
           "⥚": "&LeftTeeVector;",
           "⊲": "&vltri;",
           "⧏": "&LeftTriangleBar;",
           "⊴": "&trianglelefteq;",
           "⥑": "&LeftUpDownVector;",
           "⥠": "&LeftUpTeeVector;",
           "↿": "&upharpoonleft;",
           "⥘": "&LeftUpVectorBar;",
           "↼": "&lharu;",
           "⥒": "&LeftVectorBar;",
           "⋚": "&lesseqgtr;",
           "≦": "&leqq;",
           "≶": "&lg;",
           "⪡": "&LessLess;",
           "⩽": "&les;",
           "≲": "&lsim;",
           "𝔏": "&Lfr;",
           "⋘": "&Ll;",
           "⇚": "&lAarr;",
           "Ŀ": "&Lmidot;",
           "⟵": "&xlarr;",
           "⟷": "&xharr;",
           "⟶": "&xrarr;",
           "𝕃": "&Lopf;",
           "↙": "&swarrow;",
           "↘": "&searrow;",
           "↰": "&lsh;",
           "Ł": "&Lstrok;",
           "≪": "&ll;",
           "⤅": "&Map;",
           "М": "&Mcy;",
           " ": "&MediumSpace;",
           "ℳ": "&phmmat;",
           "𝔐": "&Mfr;",
           "∓": "&mp;",
           "𝕄": "&Mopf;",
           "Μ": "&Mu;",
           "Њ": "&NJcy;",
           "Ń": "&Nacute;",
           "Ň": "&Ncaron;",
           "Ņ": "&Ncedil;",
           "Н": "&Ncy;",
           "​": "&ZeroWidthSpace;",
           "\n": "&NewLine;",
           "𝔑": "&Nfr;",
           "⁠": "&NoBreak;",
           " ": "&nbsp;",
           "ℕ": "&naturals;",
           "⫬": "&Not;",
           "≢": "&nequiv;",
           "≭": "&NotCupCap;",
           "∦": "&nspar;",
           "∉": "&notinva;",
           "≠": "&ne;",
           "≂̸": "&nesim;",
           "∄": "&nexists;",
           "≯": "&ngtr;",
           "≱": "&ngeq;",
           "≧̸": "&ngeqq;",
           "≫̸": "&nGtv;",
           "≹": "&ntgl;",
           "⩾̸": "&nges;",
           "≵": "&ngsim;",
           "≎̸": "&nbump;",
           "≏̸": "&nbumpe;",
           "⋪": "&ntriangleleft;",
           "⧏̸": "&NotLeftTriangleBar;",
           "⋬": "&ntrianglelefteq;",
           "≮": "&nlt;",
           "≰": "&nleq;",
           "≸": "&ntlg;",
           "≪̸": "&nLtv;",
           "⩽̸": "&nles;",
           "≴": "&nlsim;",
           "⪢̸": "&NotNestedGreaterGreater;",
           "⪡̸": "&NotNestedLessLess;",
           "⊀": "&nprec;",
           "⪯̸": "&npreceq;",
           "⋠": "&nprcue;",
           "∌": "&notniva;",
           "⋫": "&ntriangleright;",
           "⧐̸": "&NotRightTriangleBar;",
           "⋭": "&ntrianglerighteq;",
           "⊏̸": "&NotSquareSubset;",
           "⋢": "&nsqsube;",
           "⊐̸": "&NotSquareSuperset;",
           "⋣": "&nsqsupe;",
           "⊂⃒": "&vnsub;",
           "⊈": "&nsubseteq;",
           "⊁": "&nsucc;",
           "⪰̸": "&nsucceq;",
           "⋡": "&nsccue;",
           "≿̸": "&NotSucceedsTilde;",
           "⊃⃒": "&vnsup;",
           "⊉": "&nsupseteq;",
           "≁": "&nsim;",
           "≄": "&nsimeq;",
           "≇": "&ncong;",
           "≉": "&napprox;",
           "∤": "&nsmid;",
           "𝒩": "&Nscr;",
           "Ñ": "&Ntilde;",
           "Ν": "&Nu;",
           "Œ": "&OElig;",
           "Ó": "&Oacute;",
           "Ô": "&Ocirc;",
           "О": "&Ocy;",
           "Ő": "&Odblac;",
           "𝔒": "&Ofr;",
           "Ò": "&Ograve;",
           "Ō": "&Omacr;",
           "Ω": "&ohm;",
           "Ο": "&Omicron;",
           "𝕆": "&Oopf;",
           "“": "&ldquo;",
           "‘": "&lsquo;",
           "⩔": "&Or;",
           "𝒪": "&Oscr;",
           "Ø": "&Oslash;",
           "Õ": "&Otilde;",
           "⨷": "&Otimes;",
           "Ö": "&Ouml;",
           "‾": "&oline;",
           "⏞": "&OverBrace;",
           "⎴": "&tbrk;",
           "⏜": "&OverParenthesis;",
           "∂": "&part;",
           "П": "&Pcy;",
           "𝔓": "&Pfr;",
           "Φ": "&Phi;",
           "Π": "&Pi;",
           "±": "&pm;",
           "ℙ": "&primes;",
           "⪻": "&Pr;",
           "≺": "&prec;",
           "⪯": "&preceq;",
           "≼": "&preccurlyeq;",
           "≾": "&prsim;",
           "″": "&Prime;",
           "∏": "&prod;",
           "∝": "&vprop;",
           "𝒫": "&Pscr;",
           "Ψ": "&Psi;",
           '"': "&quot;",
           "𝔔": "&Qfr;",
           "ℚ": "&rationals;",
           "𝒬": "&Qscr;",
           "⤐": "&drbkarow;",
           "®": "&reg;",
           "Ŕ": "&Racute;",
           "⟫": "&Rang;",
           "↠": "&twoheadrightarrow;",
           "⤖": "&Rarrtl;",
           "Ř": "&Rcaron;",
           "Ŗ": "&Rcedil;",
           "Р": "&Rcy;",
           "ℜ": "&realpart;",
           "∋": "&niv;",
           "⇋": "&lrhar;",
           "⥯": "&duhar;",
           "Ρ": "&Rho;",
           "⟩": "&rangle;",
           "→": "&srarr;",
           "⇥": "&rarrb;",
           "⇄": "&rlarr;",
           "⌉": "&rceil;",
           "⟧": "&robrk;",
           "⥝": "&RightDownTeeVector;",
           "⇂": "&downharpoonright;",
           "⥕": "&RightDownVectorBar;",
           "⌋": "&rfloor;",
           "⊢": "&vdash;",
           "↦": "&mapsto;",
           "⥛": "&RightTeeVector;",
           "⊳": "&vrtri;",
           "⧐": "&RightTriangleBar;",
           "⊵": "&trianglerighteq;",
           "⥏": "&RightUpDownVector;",
           "⥜": "&RightUpTeeVector;",
           "↾": "&upharpoonright;",
           "⥔": "&RightUpVectorBar;",
           "⇀": "&rightharpoonup;",
           "⥓": "&RightVectorBar;",
           "ℝ": "&reals;",
           "⥰": "&RoundImplies;",
           "⇛": "&rAarr;",
           "ℛ": "&realine;",
           "↱": "&rsh;",
           "⧴": "&RuleDelayed;",
           "Щ": "&SHCHcy;",
           "Ш": "&SHcy;",
           "Ь": "&SOFTcy;",
           "Ś": "&Sacute;",
           "⪼": "&Sc;",
           "Š": "&Scaron;",
           "Ş": "&Scedil;",
           "Ŝ": "&Scirc;",
           "С": "&Scy;",
           "𝔖": "&Sfr;",
           "↑": "&uparrow;",
           "Σ": "&Sigma;",
           "∘": "&compfn;",
           "𝕊": "&Sopf;",
           "√": "&radic;",
           "□": "&square;",
           "⊓": "&sqcap;",
           "⊏": "&sqsubset;",
           "⊑": "&sqsubseteq;",
           "⊐": "&sqsupset;",
           "⊒": "&sqsupseteq;",
           "⊔": "&sqcup;",
           "𝒮": "&Sscr;",
           "⋆": "&sstarf;",
           "⋐": "&Subset;",
           "⊆": "&subseteq;",
           "≻": "&succ;",
           "⪰": "&succeq;",
           "≽": "&succcurlyeq;",
           "≿": "&succsim;",
           "∑": "&sum;",
           "⋑": "&Supset;",
           "⊃": "&supset;",
           "⊇": "&supseteq;",
           "Þ": "&THORN;",
           "™": "&trade;",
           "Ћ": "&TSHcy;",
           "Ц": "&TScy;",
           "\t": "&Tab;",
           "Τ": "&Tau;",
           "Ť": "&Tcaron;",
           "Ţ": "&Tcedil;",
           "Т": "&Tcy;",
           "𝔗": "&Tfr;",
           "∴": "&therefore;",
           "Θ": "&Theta;",
           "  ": "&ThickSpace;",
           " ": "&thinsp;",
           "∼": "&thksim;",
           "≃": "&simeq;",
           "≅": "&cong;",
           "≈": "&thkap;",
           "𝕋": "&Topf;",
           "⃛": "&tdot;",
           "𝒯": "&Tscr;",
           "Ŧ": "&Tstrok;",
           "Ú": "&Uacute;",
           "↟": "&Uarr;",
           "⥉": "&Uarrocir;",
           "Ў": "&Ubrcy;",
           "Ŭ": "&Ubreve;",
           "Û": "&Ucirc;",
           "У": "&Ucy;",
           "Ű": "&Udblac;",
           "𝔘": "&Ufr;",
           "Ù": "&Ugrave;",
           "Ū": "&Umacr;",
           _: "&lowbar;",
           "⏟": "&UnderBrace;",
           "⎵": "&bbrk;",
           "⏝": "&UnderParenthesis;",
           "⋃": "&xcup;",
           "⊎": "&uplus;",
           "Ų": "&Uogon;",
           "𝕌": "&Uopf;",
           "⤒": "&UpArrowBar;",
           "⇅": "&udarr;",
           "↕": "&varr;",
           "⥮": "&udhar;",
           "⊥": "&perp;",
           "↥": "&mapstoup;",
           "↖": "&nwarrow;",
           "↗": "&nearrow;",
           "ϒ": "&upsih;",
           "Υ": "&Upsilon;",
           "Ů": "&Uring;",
           "𝒰": "&Uscr;",
           "Ũ": "&Utilde;",
           "Ü": "&Uuml;",
           "⊫": "&VDash;",
           "⫫": "&Vbar;",
           "В": "&Vcy;",
           "⊩": "&Vdash;",
           "⫦": "&Vdashl;",
           "⋁": "&xvee;",
           "‖": "&Vert;",
           "∣": "&smid;",
           "|": "&vert;",
           "❘": "&VerticalSeparator;",
           "≀": "&wreath;",
           " ": "&hairsp;",
           "𝔙": "&Vfr;",
           "𝕍": "&Vopf;",
           "𝒱": "&Vscr;",
           "⊪": "&Vvdash;",
           "Ŵ": "&Wcirc;",
           "⋀": "&xwedge;",
           "𝔚": "&Wfr;",
           "𝕎": "&Wopf;",
           "𝒲": "&Wscr;",
           "𝔛": "&Xfr;",
           "Ξ": "&Xi;",
           "𝕏": "&Xopf;",
           "𝒳": "&Xscr;",
           "Я": "&YAcy;",
           "Ї": "&YIcy;",
           "Ю": "&YUcy;",
           "Ý": "&Yacute;",
           "Ŷ": "&Ycirc;",
           "Ы": "&Ycy;",
           "𝔜": "&Yfr;",
           "𝕐": "&Yopf;",
           "𝒴": "&Yscr;",
           "Ÿ": "&Yuml;",
           "Ж": "&ZHcy;",
           "Ź": "&Zacute;",
           "Ž": "&Zcaron;",
           "З": "&Zcy;",
           "Ż": "&Zdot;",
           "Ζ": "&Zeta;",
           "ℨ": "&zeetrf;",
           "ℤ": "&integers;",
           "𝒵": "&Zscr;",
           "á": "&aacute;",
           "ă": "&abreve;",
           "∾": "&mstpos;",
           "∾̳": "&acE;",
           "∿": "&acd;",
           "â": "&acirc;",
           "а": "&acy;",
           "æ": "&aelig;",
           "𝔞": "&afr;",
           "à": "&agrave;",
           "ℵ": "&aleph;",
           "α": "&alpha;",
           "ā": "&amacr;",
           "⨿": "&amalg;",
           "∧": "&wedge;",
           "⩕": "&andand;",
           "⩜": "&andd;",
           "⩘": "&andslope;",
           "⩚": "&andv;",
           "∠": "&angle;",
           "⦤": "&ange;",
           "∡": "&measuredangle;",
           "⦨": "&angmsdaa;",
           "⦩": "&angmsdab;",
           "⦪": "&angmsdac;",
           "⦫": "&angmsdad;",
           "⦬": "&angmsdae;",
           "⦭": "&angmsdaf;",
           "⦮": "&angmsdag;",
           "⦯": "&angmsdah;",
           "∟": "&angrt;",
           "⊾": "&angrtvb;",
           "⦝": "&angrtvbd;",
           "∢": "&angsph;",
           "⍼": "&angzarr;",
           "ą": "&aogon;",
           "𝕒": "&aopf;",
           "⩰": "&apE;",
           "⩯": "&apacir;",
           "≊": "&approxeq;",
           "≋": "&apid;",
           "'": "&apos;",
           "å": "&aring;",
           "𝒶": "&ascr;",
           "*": "&midast;",
           "ã": "&atilde;",
           "ä": "&auml;",
           "⨑": "&awint;",
           "⫭": "&bNot;",
           "≌": "&bcong;",
           "϶": "&bepsi;",
           "‵": "&bprime;",
           "∽": "&bsim;",
           "⋍": "&bsime;",
           "⊽": "&barvee;",
           "⌅": "&barwedge;",
           "⎶": "&bbrktbrk;",
           "б": "&bcy;",
           "„": "&ldquor;",
           "⦰": "&bemptyv;",
           "β": "&beta;",
           "ℶ": "&beth;",
           "≬": "&twixt;",
           "𝔟": "&bfr;",
           "◯": "&xcirc;",
           "⨀": "&xodot;",
           "⨁": "&xoplus;",
           "⨂": "&xotime;",
           "⨆": "&xsqcup;",
           "★": "&starf;",
           "▽": "&xdtri;",
           "△": "&xutri;",
           "⨄": "&xuplus;",
           "⤍": "&rbarr;",
           "⧫": "&lozf;",
           "▴": "&utrif;",
           "▾": "&dtrif;",
           "◂": "&ltrif;",
           "▸": "&rtrif;",
           "␣": "&blank;",
           "▒": "&blk12;",
           "░": "&blk14;",
           "▓": "&blk34;",
           "█": "&block;",
           "=⃥": "&bne;",
           "≡⃥": "&bnequiv;",
           "⌐": "&bnot;",
           "𝕓": "&bopf;",
           "⋈": "&bowtie;",
           "╗": "&boxDL;",
           "╔": "&boxDR;",
           "╖": "&boxDl;",
           "╓": "&boxDr;",
           "═": "&boxH;",
           "╦": "&boxHD;",
           "╩": "&boxHU;",
           "╤": "&boxHd;",
           "╧": "&boxHu;",
           "╝": "&boxUL;",
           "╚": "&boxUR;",
           "╜": "&boxUl;",
           "╙": "&boxUr;",
           "║": "&boxV;",
           "╬": "&boxVH;",
           "╣": "&boxVL;",
           "╠": "&boxVR;",
           "╫": "&boxVh;",
           "╢": "&boxVl;",
           "╟": "&boxVr;",
           "⧉": "&boxbox;",
           "╕": "&boxdL;",
           "╒": "&boxdR;",
           "┐": "&boxdl;",
           "┌": "&boxdr;",
           "╥": "&boxhD;",
           "╨": "&boxhU;",
           "┬": "&boxhd;",
           "┴": "&boxhu;",
           "⊟": "&minusb;",
           "⊞": "&plusb;",
           "⊠": "&timesb;",
           "╛": "&boxuL;",
           "╘": "&boxuR;",
           "┘": "&boxul;",
           "└": "&boxur;",
           "│": "&boxv;",
           "╪": "&boxvH;",
           "╡": "&boxvL;",
           "╞": "&boxvR;",
           "┼": "&boxvh;",
           "┤": "&boxvl;",
           "├": "&boxvr;",
           "¦": "&brvbar;",
           "𝒷": "&bscr;",
           "⁏": "&bsemi;",
           "\\": "&bsol;",
           "⧅": "&bsolb;",
           "⟈": "&bsolhsub;",
           "•": "&bullet;",
           "⪮": "&bumpE;",
           "ć": "&cacute;",
           "∩": "&cap;",
           "⩄": "&capand;",
           "⩉": "&capbrcup;",
           "⩋": "&capcap;",
           "⩇": "&capcup;",
           "⩀": "&capdot;",
           "∩︀": "&caps;",
           "⁁": "&caret;",
           "⩍": "&ccaps;",
           "č": "&ccaron;",
           "ç": "&ccedil;",
           "ĉ": "&ccirc;",
           "⩌": "&ccups;",
           "⩐": "&ccupssm;",
           "ċ": "&cdot;",
           "⦲": "&cemptyv;",
           "¢": "&cent;",
           "𝔠": "&cfr;",
           "ч": "&chcy;",
           "✓": "&checkmark;",
           "χ": "&chi;",
           "○": "&cir;",
           "⧃": "&cirE;",
           "ˆ": "&circ;",
           "≗": "&cire;",
           "↺": "&olarr;",
           "↻": "&orarr;",
           "Ⓢ": "&oS;",
           "⊛": "&oast;",
           "⊚": "&ocir;",
           "⊝": "&odash;",
           "⨐": "&cirfnint;",
           "⫯": "&cirmid;",
           "⧂": "&cirscir;",
           "♣": "&clubsuit;",
           ":": "&colon;",
           ",": "&comma;",
           "@": "&commat;",
           "∁": "&complement;",
           "⩭": "&congdot;",
           "𝕔": "&copf;",
           "℗": "&copysr;",
           "↵": "&crarr;",
           "✗": "&cross;",
           "𝒸": "&cscr;",
           "⫏": "&csub;",
           "⫑": "&csube;",
           "⫐": "&csup;",
           "⫒": "&csupe;",
           "⋯": "&ctdot;",
           "⤸": "&cudarrl;",
           "⤵": "&cudarrr;",
           "⋞": "&curlyeqprec;",
           "⋟": "&curlyeqsucc;",
           "↶": "&curvearrowleft;",
           "⤽": "&cularrp;",
           "∪": "&cup;",
           "⩈": "&cupbrcap;",
           "⩆": "&cupcap;",
           "⩊": "&cupcup;",
           "⊍": "&cupdot;",
           "⩅": "&cupor;",
           "∪︀": "&cups;",
           "↷": "&curvearrowright;",
           "⤼": "&curarrm;",
           "⋎": "&cuvee;",
           "⋏": "&cuwed;",
           "¤": "&curren;",
           "∱": "&cwint;",
           "⌭": "&cylcty;",
           "⥥": "&dHar;",
           "†": "&dagger;",
           "ℸ": "&daleth;",
           "‐": "&hyphen;",
           "⤏": "&rBarr;",
           "ď": "&dcaron;",
           "д": "&dcy;",
           "⇊": "&downdownarrows;",
           "⩷": "&eDDot;",
           "°": "&deg;",
           "δ": "&delta;",
           "⦱": "&demptyv;",
           "⥿": "&dfisht;",
           "𝔡": "&dfr;",
           "♦": "&diams;",
           "ϝ": "&gammad;",
           "⋲": "&disin;",
           "÷": "&divide;",
           "⋇": "&divonx;",
           "ђ": "&djcy;",
           "⌞": "&llcorner;",
           "⌍": "&dlcrop;",
           $: "&dollar;",
           "𝕕": "&dopf;",
           "≑": "&eDot;",
           "∸": "&minusd;",
           "∔": "&plusdo;",
           "⊡": "&sdotb;",
           "⌟": "&lrcorner;",
           "⌌": "&drcrop;",
           "𝒹": "&dscr;",
           "ѕ": "&dscy;",
           "⧶": "&dsol;",
           "đ": "&dstrok;",
           "⋱": "&dtdot;",
           "▿": "&triangledown;",
           "⦦": "&dwangle;",
           "џ": "&dzcy;",
           "⟿": "&dzigrarr;",
           "é": "&eacute;",
           "⩮": "&easter;",
           "ě": "&ecaron;",
           "≖": "&eqcirc;",
           "ê": "&ecirc;",
           "≕": "&eqcolon;",
           "э": "&ecy;",
           "ė": "&edot;",
           "≒": "&fallingdotseq;",
           "𝔢": "&efr;",
           "⪚": "&eg;",
           "è": "&egrave;",
           "⪖": "&eqslantgtr;",
           "⪘": "&egsdot;",
           "⪙": "&el;",
           "⏧": "&elinters;",
           "ℓ": "&ell;",
           "⪕": "&eqslantless;",
           "⪗": "&elsdot;",
           "ē": "&emacr;",
           "∅": "&varnothing;",
           " ": "&emsp13;",
           " ": "&emsp14;",
           " ": "&emsp;",
           "ŋ": "&eng;",
           " ": "&ensp;",
           "ę": "&eogon;",
           "𝕖": "&eopf;",
           "⋕": "&epar;",
           "⧣": "&eparsl;",
           "⩱": "&eplus;",
           "ε": "&epsilon;",
           "ϵ": "&varepsilon;",
           "=": "&equals;",
           "≟": "&questeq;",
           "⩸": "&equivDD;",
           "⧥": "&eqvparsl;",
           "≓": "&risingdotseq;",
           "⥱": "&erarr;",
           "ℯ": "&escr;",
           "η": "&eta;",
           "ð": "&eth;",
           "ë": "&euml;",
           "€": "&euro;",
           "!": "&excl;",
           "ф": "&fcy;",
           "♀": "&female;",
           "ﬃ": "&ffilig;",
           "ﬀ": "&fflig;",
           "ﬄ": "&ffllig;",
           "𝔣": "&ffr;",
           "ﬁ": "&filig;",
           fj: "&fjlig;",
           "♭": "&flat;",
           "ﬂ": "&fllig;",
           "▱": "&fltns;",
           "ƒ": "&fnof;",
           "𝕗": "&fopf;",
           "⋔": "&pitchfork;",
           "⫙": "&forkv;",
           "⨍": "&fpartint;",
           "½": "&half;",
           "⅓": "&frac13;",
           "¼": "&frac14;",
           "⅕": "&frac15;",
           "⅙": "&frac16;",
           "⅛": "&frac18;",
           "⅔": "&frac23;",
           "⅖": "&frac25;",
           "¾": "&frac34;",
           "⅗": "&frac35;",
           "⅜": "&frac38;",
           "⅘": "&frac45;",
           "⅚": "&frac56;",
           "⅝": "&frac58;",
           "⅞": "&frac78;",
           "⁄": "&frasl;",
           "⌢": "&sfrown;",
           "𝒻": "&fscr;",
           "⪌": "&gtreqqless;",
           "ǵ": "&gacute;",
           "γ": "&gamma;",
           "⪆": "&gtrapprox;",
           "ğ": "&gbreve;",
           "ĝ": "&gcirc;",
           "г": "&gcy;",
           "ġ": "&gdot;",
           "⪩": "&gescc;",
           "⪀": "&gesdot;",
           "⪂": "&gesdoto;",
           "⪄": "&gesdotol;",
           "⋛︀": "&gesl;",
           "⪔": "&gesles;",
           "𝔤": "&gfr;",
           "ℷ": "&gimel;",
           "ѓ": "&gjcy;",
           "⪒": "&glE;",
           "⪥": "&gla;",
           "⪤": "&glj;",
           "≩": "&gneqq;",
           "⪊": "&gnapprox;",
           "⪈": "&gneq;",
           "⋧": "&gnsim;",
           "𝕘": "&gopf;",
           "ℊ": "&gscr;",
           "⪎": "&gsime;",
           "⪐": "&gsiml;",
           "⪧": "&gtcc;",
           "⩺": "&gtcir;",
           "⋗": "&gtrdot;",
           "⦕": "&gtlPar;",
           "⩼": "&gtquest;",
           "⥸": "&gtrarr;",
           "≩︀": "&gvnE;",
           "ъ": "&hardcy;",
           "⥈": "&harrcir;",
           "↭": "&leftrightsquigarrow;",
           "ℏ": "&plankv;",
           "ĥ": "&hcirc;",
           "♥": "&heartsuit;",
           "…": "&mldr;",
           "⊹": "&hercon;",
           "𝔥": "&hfr;",
           "⤥": "&searhk;",
           "⤦": "&swarhk;",
           "⇿": "&hoarr;",
           "∻": "&homtht;",
           "↩": "&larrhk;",
           "↪": "&rarrhk;",
           "𝕙": "&hopf;",
           "―": "&horbar;",
           "𝒽": "&hscr;",
           "ħ": "&hstrok;",
           "⁃": "&hybull;",
           "í": "&iacute;",
           "î": "&icirc;",
           "и": "&icy;",
           "е": "&iecy;",
           "¡": "&iexcl;",
           "𝔦": "&ifr;",
           "ì": "&igrave;",
           "⨌": "&qint;",
           "∭": "&tint;",
           "⧜": "&iinfin;",
           "℩": "&iiota;",
           "ĳ": "&ijlig;",
           "ī": "&imacr;",
           "ı": "&inodot;",
           "⊷": "&imof;",
           "Ƶ": "&imped;",
           "℅": "&incare;",
           "∞": "&infin;",
           "⧝": "&infintie;",
           "⊺": "&intercal;",
           "⨗": "&intlarhk;",
           "⨼": "&iprod;",
           "ё": "&iocy;",
           "į": "&iogon;",
           "𝕚": "&iopf;",
           "ι": "&iota;",
           "¿": "&iquest;",
           "𝒾": "&iscr;",
           "⋹": "&isinE;",
           "⋵": "&isindot;",
           "⋴": "&isins;",
           "⋳": "&isinsv;",
           "ĩ": "&itilde;",
           "і": "&iukcy;",
           "ï": "&iuml;",
           "ĵ": "&jcirc;",
           "й": "&jcy;",
           "𝔧": "&jfr;",
           "ȷ": "&jmath;",
           "𝕛": "&jopf;",
           "𝒿": "&jscr;",
           "ј": "&jsercy;",
           "є": "&jukcy;",
           "κ": "&kappa;",
           "ϰ": "&varkappa;",
           "ķ": "&kcedil;",
           "к": "&kcy;",
           "𝔨": "&kfr;",
           "ĸ": "&kgreen;",
           "х": "&khcy;",
           "ќ": "&kjcy;",
           "𝕜": "&kopf;",
           "𝓀": "&kscr;",
           "⤛": "&lAtail;",
           "⤎": "&lBarr;",
           "⪋": "&lesseqqgtr;",
           "⥢": "&lHar;",
           "ĺ": "&lacute;",
           "⦴": "&laemptyv;",
           "λ": "&lambda;",
           "⦑": "&langd;",
           "⪅": "&lessapprox;",
           "«": "&laquo;",
           "⤟": "&larrbfs;",
           "⤝": "&larrfs;",
           "↫": "&looparrowleft;",
           "⤹": "&larrpl;",
           "⥳": "&larrsim;",
           "↢": "&leftarrowtail;",
           "⪫": "&lat;",
           "⤙": "&latail;",
           "⪭": "&late;",
           "⪭︀": "&lates;",
           "⤌": "&lbarr;",
           "❲": "&lbbrk;",
           "{": "&lcub;",
           "[": "&lsqb;",
           "⦋": "&lbrke;",
           "⦏": "&lbrksld;",
           "⦍": "&lbrkslu;",
           "ľ": "&lcaron;",
           "ļ": "&lcedil;",
           "л": "&lcy;",
           "⤶": "&ldca;",
           "⥧": "&ldrdhar;",
           "⥋": "&ldrushar;",
           "↲": "&ldsh;",
           "≤": "&leq;",
           "⇇": "&llarr;",
           "⋋": "&lthree;",
           "⪨": "&lescc;",
           "⩿": "&lesdot;",
           "⪁": "&lesdoto;",
           "⪃": "&lesdotor;",
           "⋚︀": "&lesg;",
           "⪓": "&lesges;",
           "⋖": "&ltdot;",
           "⥼": "&lfisht;",
           "𝔩": "&lfr;",
           "⪑": "&lgE;",
           "⥪": "&lharul;",
           "▄": "&lhblk;",
           "љ": "&ljcy;",
           "⥫": "&llhard;",
           "◺": "&lltri;",
           "ŀ": "&lmidot;",
           "⎰": "&lmoustache;",
           "≨": "&lneqq;",
           "⪉": "&lnapprox;",
           "⪇": "&lneq;",
           "⋦": "&lnsim;",
           "⟬": "&loang;",
           "⇽": "&loarr;",
           "⟼": "&xmap;",
           "↬": "&rarrlp;",
           "⦅": "&lopar;",
           "𝕝": "&lopf;",
           "⨭": "&loplus;",
           "⨴": "&lotimes;",
           "∗": "&lowast;",
           "◊": "&lozenge;",
           "(": "&lpar;",
           "⦓": "&lparlt;",
           "⥭": "&lrhard;",
           "‎": "&lrm;",
           "⊿": "&lrtri;",
           "‹": "&lsaquo;",
           "𝓁": "&lscr;",
           "⪍": "&lsime;",
           "⪏": "&lsimg;",
           "‚": "&sbquo;",
           "ł": "&lstrok;",
           "⪦": "&ltcc;",
           "⩹": "&ltcir;",
           "⋉": "&ltimes;",
           "⥶": "&ltlarr;",
           "⩻": "&ltquest;",
           "⦖": "&ltrPar;",
           "◃": "&triangleleft;",
           "⥊": "&lurdshar;",
           "⥦": "&luruhar;",
           "≨︀": "&lvnE;",
           "∺": "&mDDot;",
           "¯": "&strns;",
           "♂": "&male;",
           "✠": "&maltese;",
           "▮": "&marker;",
           "⨩": "&mcomma;",
           "м": "&mcy;",
           "—": "&mdash;",
           "𝔪": "&mfr;",
           "℧": "&mho;",
           "µ": "&micro;",
           "⫰": "&midcir;",
           "−": "&minus;",
           "⨪": "&minusdu;",
           "⫛": "&mlcp;",
           "⊧": "&models;",
           "𝕞": "&mopf;",
           "𝓂": "&mscr;",
           "μ": "&mu;",
           "⊸": "&mumap;",
           "⋙̸": "&nGg;",
           "≫⃒": "&nGt;",
           "⇍": "&nlArr;",
           "⇎": "&nhArr;",
           "⋘̸": "&nLl;",
           "≪⃒": "&nLt;",
           "⇏": "&nrArr;",
           "⊯": "&nVDash;",
           "⊮": "&nVdash;",
           "ń": "&nacute;",
           "∠⃒": "&nang;",
           "⩰̸": "&napE;",
           "≋̸": "&napid;",
           "ŉ": "&napos;",
           "♮": "&natural;",
           "⩃": "&ncap;",
           "ň": "&ncaron;",
           "ņ": "&ncedil;",
           "⩭̸": "&ncongdot;",
           "⩂": "&ncup;",
           "н": "&ncy;",
           "–": "&ndash;",
           "⇗": "&neArr;",
           "⤤": "&nearhk;",
           "≐̸": "&nedot;",
           "⤨": "&toea;",
           "𝔫": "&nfr;",
           "↮": "&nleftrightarrow;",
           "⫲": "&nhpar;",
           "⋼": "&nis;",
           "⋺": "&nisd;",
           "њ": "&njcy;",
           "≦̸": "&nleqq;",
           "↚": "&nleftarrow;",
           "‥": "&nldr;",
           "𝕟": "&nopf;",
           "¬": "&not;",
           "⋹̸": "&notinE;",
           "⋵̸": "&notindot;",
           "⋷": "&notinvb;",
           "⋶": "&notinvc;",
           "⋾": "&notnivb;",
           "⋽": "&notnivc;",
           "⫽⃥": "&nparsl;",
           "∂̸": "&npart;",
           "⨔": "&npolint;",
           "↛": "&nrightarrow;",
           "⤳̸": "&nrarrc;",
           "↝̸": "&nrarrw;",
           "𝓃": "&nscr;",
           "⊄": "&nsub;",
           "⫅̸": "&nsubseteqq;",
           "⊅": "&nsup;",
           "⫆̸": "&nsupseteqq;",
           "ñ": "&ntilde;",
           "ν": "&nu;",
           "#": "&num;",
           "№": "&numero;",
           " ": "&numsp;",
           "⊭": "&nvDash;",
           "⤄": "&nvHarr;",
           "≍⃒": "&nvap;",
           "⊬": "&nvdash;",
           "≥⃒": "&nvge;",
           ">⃒": "&nvgt;",
           "⧞": "&nvinfin;",
           "⤂": "&nvlArr;",
           "≤⃒": "&nvle;",
           "<⃒": "&nvlt;",
           "⊴⃒": "&nvltrie;",
           "⤃": "&nvrArr;",
           "⊵⃒": "&nvrtrie;",
           "∼⃒": "&nvsim;",
           "⇖": "&nwArr;",
           "⤣": "&nwarhk;",
           "⤧": "&nwnear;",
           "ó": "&oacute;",
           "ô": "&ocirc;",
           "о": "&ocy;",
           "ő": "&odblac;",
           "⨸": "&odiv;",
           "⦼": "&odsold;",
           "œ": "&oelig;",
           "⦿": "&ofcir;",
           "𝔬": "&ofr;",
           "˛": "&ogon;",
           "ò": "&ograve;",
           "⧁": "&ogt;",
           "⦵": "&ohbar;",
           "⦾": "&olcir;",
           "⦻": "&olcross;",
           "⧀": "&olt;",
           "ō": "&omacr;",
           "ω": "&omega;",
           "ο": "&omicron;",
           "⦶": "&omid;",
           "𝕠": "&oopf;",
           "⦷": "&opar;",
           "⦹": "&operp;",
           "∨": "&vee;",
           "⩝": "&ord;",
           "ℴ": "&oscr;",
           "ª": "&ordf;",
           "º": "&ordm;",
           "⊶": "&origof;",
           "⩖": "&oror;",
           "⩗": "&orslope;",
           "⩛": "&orv;",
           "ø": "&oslash;",
           "⊘": "&osol;",
           "õ": "&otilde;",
           "⨶": "&otimesas;",
           "ö": "&ouml;",
           "⌽": "&ovbar;",
           "¶": "&para;",
           "⫳": "&parsim;",
           "⫽": "&parsl;",
           "п": "&pcy;",
           "%": "&percnt;",
           ".": "&period;",
           "‰": "&permil;",
           "‱": "&pertenk;",
           "𝔭": "&pfr;",
           "φ": "&phi;",
           "ϕ": "&varphi;",
           "☎": "&phone;",
           "π": "&pi;",
           "ϖ": "&varpi;",
           "ℎ": "&planckh;",
           "+": "&plus;",
           "⨣": "&plusacir;",
           "⨢": "&pluscir;",
           "⨥": "&plusdu;",
           "⩲": "&pluse;",
           "⨦": "&plussim;",
           "⨧": "&plustwo;",
           "⨕": "&pointint;",
           "𝕡": "&popf;",
           "£": "&pound;",
           "⪳": "&prE;",
           "⪷": "&precapprox;",
           "⪹": "&prnap;",
           "⪵": "&prnE;",
           "⋨": "&prnsim;",
           "′": "&prime;",
           "⌮": "&profalar;",
           "⌒": "&profline;",
           "⌓": "&profsurf;",
           "⊰": "&prurel;",
           "𝓅": "&pscr;",
           "ψ": "&psi;",
           " ": "&puncsp;",
           "𝔮": "&qfr;",
           "𝕢": "&qopf;",
           "⁗": "&qprime;",
           "𝓆": "&qscr;",
           "⨖": "&quatint;",
           "?": "&quest;",
           "⤜": "&rAtail;",
           "⥤": "&rHar;",
           "∽̱": "&race;",
           "ŕ": "&racute;",
           "⦳": "&raemptyv;",
           "⦒": "&rangd;",
           "⦥": "&range;",
           "»": "&raquo;",
           "⥵": "&rarrap;",
           "⤠": "&rarrbfs;",
           "⤳": "&rarrc;",
           "⤞": "&rarrfs;",
           "⥅": "&rarrpl;",
           "⥴": "&rarrsim;",
           "↣": "&rightarrowtail;",
           "↝": "&rightsquigarrow;",
           "⤚": "&ratail;",
           "∶": "&ratio;",
           "❳": "&rbbrk;",
           "}": "&rcub;",
           "]": "&rsqb;",
           "⦌": "&rbrke;",
           "⦎": "&rbrksld;",
           "⦐": "&rbrkslu;",
           "ř": "&rcaron;",
           "ŗ": "&rcedil;",
           "р": "&rcy;",
           "⤷": "&rdca;",
           "⥩": "&rdldhar;",
           "↳": "&rdsh;",
           "▭": "&rect;",
           "⥽": "&rfisht;",
           "𝔯": "&rfr;",
           "⥬": "&rharul;",
           "ρ": "&rho;",
           "ϱ": "&varrho;",
           "⇉": "&rrarr;",
           "⋌": "&rthree;",
           "˚": "&ring;",
           "‏": "&rlm;",
           "⎱": "&rmoustache;",
           "⫮": "&rnmid;",
           "⟭": "&roang;",
           "⇾": "&roarr;",
           "⦆": "&ropar;",
           "𝕣": "&ropf;",
           "⨮": "&roplus;",
           "⨵": "&rotimes;",
           ")": "&rpar;",
           "⦔": "&rpargt;",
           "⨒": "&rppolint;",
           "›": "&rsaquo;",
           "𝓇": "&rscr;",
           "⋊": "&rtimes;",
           "▹": "&triangleright;",
           "⧎": "&rtriltri;",
           "⥨": "&ruluhar;",
           "℞": "&rx;",
           "ś": "&sacute;",
           "⪴": "&scE;",
           "⪸": "&succapprox;",
           "š": "&scaron;",
           "ş": "&scedil;",
           "ŝ": "&scirc;",
           "⪶": "&succneqq;",
           "⪺": "&succnapprox;",
           "⋩": "&succnsim;",
           "⨓": "&scpolint;",
           "с": "&scy;",
           "⋅": "&sdot;",
           "⩦": "&sdote;",
           "⇘": "&seArr;",
           "§": "&sect;",
           ";": "&semi;",
           "⤩": "&tosa;",
           "✶": "&sext;",
           "𝔰": "&sfr;",
           "♯": "&sharp;",
           "щ": "&shchcy;",
           "ш": "&shcy;",
           "­": "&shy;",
           "σ": "&sigma;",
           "ς": "&varsigma;",
           "⩪": "&simdot;",
           "⪞": "&simg;",
           "⪠": "&simgE;",
           "⪝": "&siml;",
           "⪟": "&simlE;",
           "≆": "&simne;",
           "⨤": "&simplus;",
           "⥲": "&simrarr;",
           "⨳": "&smashp;",
           "⧤": "&smeparsl;",
           "⌣": "&ssmile;",
           "⪪": "&smt;",
           "⪬": "&smte;",
           "⪬︀": "&smtes;",
           "ь": "&softcy;",
           "/": "&sol;",
           "⧄": "&solb;",
           "⌿": "&solbar;",
           "𝕤": "&sopf;",
           "♠": "&spadesuit;",
           "⊓︀": "&sqcaps;",
           "⊔︀": "&sqcups;",
           "𝓈": "&sscr;",
           "☆": "&star;",
           "⊂": "&subset;",
           "⫅": "&subseteqq;",
           "⪽": "&subdot;",
           "⫃": "&subedot;",
           "⫁": "&submult;",
           "⫋": "&subsetneqq;",
           "⊊": "&subsetneq;",
           "⪿": "&subplus;",
           "⥹": "&subrarr;",
           "⫇": "&subsim;",
           "⫕": "&subsub;",
           "⫓": "&subsup;",
           "♪": "&sung;",
           "¹": "&sup1;",
           "²": "&sup2;",
           "³": "&sup3;",
           "⫆": "&supseteqq;",
           "⪾": "&supdot;",
           "⫘": "&supdsub;",
           "⫄": "&supedot;",
           "⟉": "&suphsol;",
           "⫗": "&suphsub;",
           "⥻": "&suplarr;",
           "⫂": "&supmult;",
           "⫌": "&supsetneqq;",
           "⊋": "&supsetneq;",
           "⫀": "&supplus;",
           "⫈": "&supsim;",
           "⫔": "&supsub;",
           "⫖": "&supsup;",
           "⇙": "&swArr;",
           "⤪": "&swnwar;",
           "ß": "&szlig;",
           "⌖": "&target;",
           "τ": "&tau;",
           "ť": "&tcaron;",
           "ţ": "&tcedil;",
           "т": "&tcy;",
           "⌕": "&telrec;",
           "𝔱": "&tfr;",
           "θ": "&theta;",
           "ϑ": "&vartheta;",
           "þ": "&thorn;",
           "×": "&times;",
           "⨱": "&timesbar;",
           "⨰": "&timesd;",
           "⌶": "&topbot;",
           "⫱": "&topcir;",
           "𝕥": "&topf;",
           "⫚": "&topfork;",
           "‴": "&tprime;",
           "▵": "&utri;",
           "≜": "&trie;",
           "◬": "&tridot;",
           "⨺": "&triminus;",
           "⨹": "&triplus;",
           "⧍": "&trisb;",
           "⨻": "&tritime;",
           "⏢": "&trpezium;",
           "𝓉": "&tscr;",
           "ц": "&tscy;",
           "ћ": "&tshcy;",
           "ŧ": "&tstrok;",
           "⥣": "&uHar;",
           "ú": "&uacute;",
           "ў": "&ubrcy;",
           "ŭ": "&ubreve;",
           "û": "&ucirc;",
           "у": "&ucy;",
           "ű": "&udblac;",
           "⥾": "&ufisht;",
           "𝔲": "&ufr;",
           "ù": "&ugrave;",
           "▀": "&uhblk;",
           "⌜": "&ulcorner;",
           "⌏": "&ulcrop;",
           "◸": "&ultri;",
           "ū": "&umacr;",
           "ų": "&uogon;",
           "𝕦": "&uopf;",
           "υ": "&upsilon;",
           "⇈": "&uuarr;",
           "⌝": "&urcorner;",
           "⌎": "&urcrop;",
           "ů": "&uring;",
           "◹": "&urtri;",
           "𝓊": "&uscr;",
           "⋰": "&utdot;",
           "ũ": "&utilde;",
           "ü": "&uuml;",
           "⦧": "&uwangle;",
           "⫨": "&vBar;",
           "⫩": "&vBarv;",
           "⦜": "&vangrt;",
           "⊊︀": "&vsubne;",
           "⫋︀": "&vsubnE;",
           "⊋︀": "&vsupne;",
           "⫌︀": "&vsupnE;",
           "в": "&vcy;",
           "⊻": "&veebar;",
           "≚": "&veeeq;",
           "⋮": "&vellip;",
           "𝔳": "&vfr;",
           "𝕧": "&vopf;",
           "𝓋": "&vscr;",
           "⦚": "&vzigzag;",
           "ŵ": "&wcirc;",
           "⩟": "&wedbar;",
           "≙": "&wedgeq;",
           "℘": "&wp;",
           "𝔴": "&wfr;",
           "𝕨": "&wopf;",
           "𝓌": "&wscr;",
           "𝔵": "&xfr;",
           "ξ": "&xi;",
           "⋻": "&xnis;",
           "𝕩": "&xopf;",
           "𝓍": "&xscr;",
           "ý": "&yacute;",
           "я": "&yacy;",
           "ŷ": "&ycirc;",
           "ы": "&ycy;",
           "¥": "&yen;",
           "𝔶": "&yfr;",
           "ї": "&yicy;",
           "𝕪": "&yopf;",
           "𝓎": "&yscr;",
           "ю": "&yucy;",
           "ÿ": "&yuml;",
           "ź": "&zacute;",
           "ž": "&zcaron;",
           "з": "&zcy;",
           "ż": "&zdot;",
           "ζ": "&zeta;",
           "𝔷": "&zfr;",
           "ж": "&zhcy;",
           "⇝": "&zigrarr;",
           "𝕫": "&zopf;",
           "𝓏": "&zscr;",
           "‍": "&zwj;",
           "‌": "&zwnj;"
         }
       }
     };
     
     /***/ }),
     
     /***/ "./node_modules/html-entities/lib/numeric-unicode-map.js":
     /*!***************************************************************!*\
       !*** ./node_modules/html-entities/lib/numeric-unicode-map.js ***!
       \***************************************************************/
     /***/ ((__unused_webpack_module, exports) => {
     
     "use strict";
     
     
     Object.defineProperty(exports, "__esModule", ({
       value: true
     }));
     exports.numericUnicodeMap = {
       0: 65533,
       128: 8364,
       130: 8218,
       131: 402,
       132: 8222,
       133: 8230,
       134: 8224,
       135: 8225,
       136: 710,
       137: 8240,
       138: 352,
       139: 8249,
       140: 338,
       142: 381,
       145: 8216,
       146: 8217,
       147: 8220,
       148: 8221,
       149: 8226,
       150: 8211,
       151: 8212,
       152: 732,
       153: 8482,
       154: 353,
       155: 8250,
       156: 339,
       158: 382,
       159: 376
     };
     
     /***/ }),
     
     /***/ "./node_modules/html-entities/lib/surrogate-pairs.js":
     /*!***********************************************************!*\
       !*** ./node_modules/html-entities/lib/surrogate-pairs.js ***!
       \***********************************************************/
     /***/ ((__unused_webpack_module, exports) => {
     
     "use strict";
     
     
     Object.defineProperty(exports, "__esModule", ({
       value: true
     }));
     
     exports.fromCodePoint = String.fromCodePoint || function (astralCodePoint) {
       return String.fromCharCode(Math.floor((astralCodePoint - 65536) / 1024) + 55296, (astralCodePoint - 65536) % 1024 + 56320);
     };
     
     exports.getCodePoint = String.prototype.codePointAt ? function (input, position) {
       return input.codePointAt(position);
     } : function (input, position) {
       return (input.charCodeAt(position) - 55296) * 1024 + input.charCodeAt(position + 1) - 56320 + 65536;
     };
     exports.highSurrogateFrom = 55296;
     exports.highSurrogateTo = 56319;
     
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
     
     
     /***/ }),
     
     /***/ "./node_modules/webpack-dev-server/client/clients/WebSocketClient.js":
     /*!***************************************************************************!*\
       !*** ./node_modules/webpack-dev-server/client/clients/WebSocketClient.js ***!
       \***************************************************************************/
     /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
     
     "use strict";
     __webpack_require__.r(__webpack_exports__);
     /* harmony export */ __webpack_require__.d(__webpack_exports__, {
     /* harmony export */   "default": () => (/* binding */ WebSocketClient)
     /* harmony export */ });
     /* harmony import */ var _utils_log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/log.js */ "./node_modules/webpack-dev-server/client/utils/log.js");
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
       Object.defineProperty(Constructor, "prototype", {
         writable: false
       });
       return Constructor;
     }
     
     
     
     var WebSocketClient = /*#__PURE__*/function () {
       /**
        * @param {string} url
        */
       function WebSocketClient(url) {
         _classCallCheck(this, WebSocketClient);
     
         this.client = new WebSocket(url);
     
         this.client.onerror = function (error) {
           _utils_log_js__WEBPACK_IMPORTED_MODULE_0__.log.error(error);
         };
       }
       /**
        * @param {(...args: any[]) => void} f
        */
     
     
       _createClass(WebSocketClient, [{
         key: "onOpen",
         value: function onOpen(f) {
           this.client.onopen = f;
         }
         /**
          * @param {(...args: any[]) => void} f
          */
     
       }, {
         key: "onClose",
         value: function onClose(f) {
           this.client.onclose = f;
         } // call f with the message string as the first argument
     
         /**
          * @param {(...args: any[]) => void} f
          */
     
       }, {
         key: "onMessage",
         value: function onMessage(f) {
           this.client.onmessage = function (e) {
             f(e.data);
           };
         }
       }]);
     
       return WebSocketClient;
     }();
     
     
     
     /***/ }),
     
     /***/ "./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8080&pathname=%2Fws&logging=info&overlay=true&reconnect=10&hot=true&live-reload=true":
     /*!***********************************************************************************************************************************************************************************!*\
       !*** ./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8080&pathname=%2Fws&logging=info&overlay=true&reconnect=10&hot=true&live-reload=true ***!
       \***********************************************************************************************************************************************************************************/
     /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
     
     "use strict";
     var __resourceQuery = "?protocol=ws%3A&hostname=0.0.0.0&port=8080&pathname=%2Fws&logging=info&overlay=true&reconnect=10&hot=true&live-reload=true";
     __webpack_require__.r(__webpack_exports__);
     /* harmony import */ var webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webpack/hot/log.js */ "./node_modules/webpack/hot/log.js");
     /* harmony import */ var webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_0__);
     /* harmony import */ var _utils_stripAnsi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/stripAnsi.js */ "./node_modules/webpack-dev-server/client/utils/stripAnsi.js");
     /* harmony import */ var _utils_parseURL_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/parseURL.js */ "./node_modules/webpack-dev-server/client/utils/parseURL.js");
     /* harmony import */ var _socket_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./socket.js */ "./node_modules/webpack-dev-server/client/socket.js");
     /* harmony import */ var _overlay_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./overlay.js */ "./node_modules/webpack-dev-server/client/overlay.js");
     /* harmony import */ var _utils_log_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/log.js */ "./node_modules/webpack-dev-server/client/utils/log.js");
     /* harmony import */ var _utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/sendMessage.js */ "./node_modules/webpack-dev-server/client/utils/sendMessage.js");
     /* harmony import */ var _utils_reloadApp_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/reloadApp.js */ "./node_modules/webpack-dev-server/client/utils/reloadApp.js");
     /* harmony import */ var _utils_createSocketURL_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/createSocketURL.js */ "./node_modules/webpack-dev-server/client/utils/createSocketURL.js");
     function ownKeys(object, enumerableOnly) {
       var keys = Object.keys(object);
     
       if (Object.getOwnPropertySymbols) {
         var symbols = Object.getOwnPropertySymbols(object);
         enumerableOnly && (symbols = symbols.filter(function (sym) {
           return Object.getOwnPropertyDescriptor(object, sym).enumerable;
         })), keys.push.apply(keys, symbols);
       }
     
       return keys;
     }
     
     function _objectSpread(target) {
       for (var i = 1; i < arguments.length; i++) {
         var source = null != arguments[i] ? arguments[i] : {};
         i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
           _defineProperty(target, key, source[key]);
         }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
           Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
         });
       }
     
       return target;
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
     /* global __resourceQuery, __webpack_hash__ */
     /// <reference types="webpack/module" />
     
     
     
     
     
     
     
     
     
     
     
     /**
      * @typedef {Object} Options
      * @property {boolean} hot
      * @property {boolean} liveReload
      * @property {boolean} progress
      * @property {boolean | { warnings?: boolean, errors?: boolean, trustedTypesPolicyName?: string }} overlay
      * @property {string} [logging]
      * @property {number} [reconnect]
      */
     
     /**
      * @typedef {Object} Status
      * @property {boolean} isUnloading
      * @property {string} currentHash
      * @property {string} [previousHash]
      */
     
     /**
      * @type {Status}
      */
     
     var status = {
       isUnloading: false,
       // TODO Workaround for webpack v4, `__webpack_hash__` is not replaced without HotModuleReplacement
       // eslint-disable-next-line camelcase
       currentHash:  true ? __webpack_require__.h() : 0
     };
     /** @type {Options} */
     
     var options = {
       hot: false,
       liveReload: false,
       progress: false,
       overlay: false
     };
     var parsedResourceQuery = (0,_utils_parseURL_js__WEBPACK_IMPORTED_MODULE_2__["default"])(__resourceQuery);
     var enabledFeatures = {
       "Hot Module Replacement": false,
       "Live Reloading": false,
       Progress: false,
       Overlay: false
     };
     
     if (parsedResourceQuery.hot === "true") {
       options.hot = true;
       enabledFeatures["Hot Module Replacement"] = true;
     }
     
     if (parsedResourceQuery["live-reload"] === "true") {
       options.liveReload = true;
       enabledFeatures["Live Reloading"] = true;
     }
     
     if (parsedResourceQuery.progress === "true") {
       options.progress = true;
       enabledFeatures.Progress = true;
     }
     
     if (parsedResourceQuery.overlay) {
       try {
         options.overlay = JSON.parse(parsedResourceQuery.overlay);
       } catch (e) {
         _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.error("Error parsing overlay options from resource query:", e);
       } // Fill in default "true" params for partially-specified objects.
     
     
       if (typeof options.overlay === "object") {
         options.overlay = _objectSpread({
           errors: true,
           warnings: true
         }, options.overlay);
       }
     
       enabledFeatures.Overlay = true;
     }
     
     if (parsedResourceQuery.logging) {
       options.logging = parsedResourceQuery.logging;
     }
     
     if (typeof parsedResourceQuery.reconnect !== "undefined") {
       options.reconnect = Number(parsedResourceQuery.reconnect);
     }
     /**
      * @param {string} level
      */
     
     
     function setAllLogLevel(level) {
       // This is needed because the HMR logger operate separately from dev server logger
       webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_0___default().setLogLevel(level === "verbose" || level === "log" ? "info" : level);
       (0,_utils_log_js__WEBPACK_IMPORTED_MODULE_5__.setLogLevel)(level);
     }
     
     if (options.logging) {
       setAllLogLevel(options.logging);
     }
     
     (0,_utils_log_js__WEBPACK_IMPORTED_MODULE_5__.logEnabledFeatures)(enabledFeatures);
     self.addEventListener("beforeunload", function () {
       status.isUnloading = true;
     });
     var onSocketMessage = {
       hot: function hot() {
         if (parsedResourceQuery.hot === "false") {
           return;
         }
     
         options.hot = true;
       },
       liveReload: function liveReload() {
         if (parsedResourceQuery["live-reload"] === "false") {
           return;
         }
     
         options.liveReload = true;
       },
       invalid: function invalid() {
         _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("App updated. Recompiling..."); // Fixes #1042. overlay doesn't clear if errors are fixed but warnings remain.
     
         if (options.overlay) {
           (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.hide)();
         }
     
         (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__["default"])("Invalid");
       },
     
       /**
        * @param {string} hash
        */
       hash: function hash(_hash) {
         status.previousHash = status.currentHash;
         status.currentHash = _hash;
       },
       logging: setAllLogLevel,
     
       /**
        * @param {boolean} value
        */
       overlay: function overlay(value) {
         if (typeof document === "undefined") {
           return;
         }
     
         options.overlay = value;
       },
     
       /**
        * @param {number} value
        */
       reconnect: function reconnect(value) {
         if (parsedResourceQuery.reconnect === "false") {
           return;
         }
     
         options.reconnect = value;
       },
     
       /**
        * @param {boolean} value
        */
       progress: function progress(value) {
         options.progress = value;
       },
     
       /**
        * @param {{ pluginName?: string, percent: number, msg: string }} data
        */
       "progress-update": function progressUpdate(data) {
         if (options.progress) {
           _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("".concat(data.pluginName ? "[".concat(data.pluginName, "] ") : "").concat(data.percent, "% - ").concat(data.msg, "."));
         }
     
         (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__["default"])("Progress", data);
       },
       "still-ok": function stillOk() {
         _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("Nothing changed.");
     
         if (options.overlay) {
           (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.hide)();
         }
     
         (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__["default"])("StillOk");
       },
       ok: function ok() {
         (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__["default"])("Ok");
     
         if (options.overlay) {
           (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.hide)();
         }
     
         (0,_utils_reloadApp_js__WEBPACK_IMPORTED_MODULE_7__["default"])(options, status);
       },
       // TODO: remove in v5 in favor of 'static-changed'
     
       /**
        * @param {string} file
        */
       "content-changed": function contentChanged(file) {
         _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("".concat(file ? "\"".concat(file, "\"") : "Content", " from static directory was changed. Reloading..."));
         self.location.reload();
       },
     
       /**
        * @param {string} file
        */
       "static-changed": function staticChanged(file) {
         _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("".concat(file ? "\"".concat(file, "\"") : "Content", " from static directory was changed. Reloading..."));
         self.location.reload();
       },
     
       /**
        * @param {Error[]} warnings
        * @param {any} params
        */
       warnings: function warnings(_warnings, params) {
         _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.warn("Warnings while compiling.");
     
         var printableWarnings = _warnings.map(function (error) {
           var _formatProblem = (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.formatProblem)("warning", error),
               header = _formatProblem.header,
               body = _formatProblem.body;
     
           return "".concat(header, "\n").concat((0,_utils_stripAnsi_js__WEBPACK_IMPORTED_MODULE_1__["default"])(body));
         });
     
         (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__["default"])("Warnings", printableWarnings);
     
         for (var i = 0; i < printableWarnings.length; i++) {
           _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.warn(printableWarnings[i]);
         }
     
         var needShowOverlayForWarnings = typeof options.overlay === "boolean" ? options.overlay : options.overlay && options.overlay.warnings;
     
         if (needShowOverlayForWarnings) {
           var trustedTypesPolicyName = typeof options.overlay === "object" && options.overlay.trustedTypesPolicyName;
           (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.show)("warning", _warnings, trustedTypesPolicyName || null);
         }
     
         if (params && params.preventReloading) {
           return;
         }
     
         (0,_utils_reloadApp_js__WEBPACK_IMPORTED_MODULE_7__["default"])(options, status);
       },
     
       /**
        * @param {Error[]} errors
        */
       errors: function errors(_errors) {
         _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.error("Errors while compiling. Reload prevented.");
     
         var printableErrors = _errors.map(function (error) {
           var _formatProblem2 = (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.formatProblem)("error", error),
               header = _formatProblem2.header,
               body = _formatProblem2.body;
     
           return "".concat(header, "\n").concat((0,_utils_stripAnsi_js__WEBPACK_IMPORTED_MODULE_1__["default"])(body));
         });
     
         (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__["default"])("Errors", printableErrors);
     
         for (var i = 0; i < printableErrors.length; i++) {
           _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.error(printableErrors[i]);
         }
     
         var needShowOverlayForErrors = typeof options.overlay === "boolean" ? options.overlay : options.overlay && options.overlay.errors;
     
         if (needShowOverlayForErrors) {
           var trustedTypesPolicyName = typeof options.overlay === "object" && options.overlay.trustedTypesPolicyName;
           (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.show)("error", _errors, trustedTypesPolicyName || null);
         }
       },
     
       /**
        * @param {Error} error
        */
       error: function error(_error) {
         _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.error(_error);
       },
       close: function close() {
         _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("Disconnected!");
     
         if (options.overlay) {
           (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.hide)();
         }
     
         (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__["default"])("Close");
       }
     };
     var socketURL = (0,_utils_createSocketURL_js__WEBPACK_IMPORTED_MODULE_8__["default"])(parsedResourceQuery);
     (0,_socket_js__WEBPACK_IMPORTED_MODULE_3__["default"])(socketURL, onSocketMessage, options.reconnect);
     
     /***/ }),
     
     /***/ "./node_modules/webpack-dev-server/client/modules/logger/index.js":
     /*!************************************************************************!*\
       !*** ./node_modules/webpack-dev-server/client/modules/logger/index.js ***!
       \************************************************************************/
     /***/ ((__unused_webpack_module, exports) => {
     
     /******/
     (function () {
       // webpackBootstrap
     
       /******/
       "use strict";
       /******/
     
       var __webpack_modules__ = {
         /***/
         "./client-src/modules/logger/SyncBailHookFake.js":
         /*!*******************************************************!*\
           !*** ./client-src/modules/logger/SyncBailHookFake.js ***!
           \*******************************************************/
     
         /***/
         function (module) {
           /**
            * Client stub for tapable SyncBailHook
            */
           module.exports = function clientTapableSyncBailHook() {
             return {
               call: function call() {}
             };
           };
           /***/
     
         },
     
         /***/
         "./node_modules/webpack/lib/logging/Logger.js":
         /*!****************************************************!*\
           !*** ./node_modules/webpack/lib/logging/Logger.js ***!
           \****************************************************/
     
         /***/
         function (__unused_webpack_module, exports) {
           /*
               MIT License http://www.opensource.org/licenses/mit-license.php
               Author Tobias Koppers @sokra
           */
           function _toConsumableArray(arr) {
             return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
           }
     
           function _nonIterableSpread() {
             throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
           }
     
           function _unsupportedIterableToArray(o, minLen) {
             if (!o) return;
             if (typeof o === "string") return _arrayLikeToArray(o, minLen);
             var n = Object.prototype.toString.call(o).slice(8, -1);
             if (n === "Object" && o.constructor) n = o.constructor.name;
             if (n === "Map" || n === "Set") return Array.from(o);
             if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
           }
     
           function _iterableToArray(iter) {
             if (typeof (typeof Symbol !== "undefined" ? Symbol : function (i) {
               return i;
             }) !== "undefined" && iter[(typeof Symbol !== "undefined" ? Symbol : function (i) {
               return i;
             }).iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
           }
     
           function _arrayWithoutHoles(arr) {
             if (Array.isArray(arr)) return _arrayLikeToArray(arr);
           }
     
           function _arrayLikeToArray(arr, len) {
             if (len == null || len > arr.length) len = arr.length;
     
             for (var i = 0, arr2 = new Array(len); i < len; i++) {
               arr2[i] = arr[i];
             }
     
             return arr2;
           }
     
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
             Object.defineProperty(Constructor, "prototype", {
               writable: false
             });
             return Constructor;
           }
     
           var LogType = Object.freeze({
             error:
             /** @type {"error"} */
             "error",
             // message, c style arguments
             warn:
             /** @type {"warn"} */
             "warn",
             // message, c style arguments
             info:
             /** @type {"info"} */
             "info",
             // message, c style arguments
             log:
             /** @type {"log"} */
             "log",
             // message, c style arguments
             debug:
             /** @type {"debug"} */
             "debug",
             // message, c style arguments
             trace:
             /** @type {"trace"} */
             "trace",
             // no arguments
             group:
             /** @type {"group"} */
             "group",
             // [label]
             groupCollapsed:
             /** @type {"groupCollapsed"} */
             "groupCollapsed",
             // [label]
             groupEnd:
             /** @type {"groupEnd"} */
             "groupEnd",
             // [label]
             profile:
             /** @type {"profile"} */
             "profile",
             // [profileName]
             profileEnd:
             /** @type {"profileEnd"} */
             "profileEnd",
             // [profileName]
             time:
             /** @type {"time"} */
             "time",
             // name, time as [seconds, nanoseconds]
             clear:
             /** @type {"clear"} */
             "clear",
             // no arguments
             status:
             /** @type {"status"} */
             "status" // message, arguments
     
           });
           exports.LogType = LogType;
           /** @typedef {typeof LogType[keyof typeof LogType]} LogTypeEnum */
     
           var LOG_SYMBOL = (typeof Symbol !== "undefined" ? Symbol : function (i) {
             return i;
           })("webpack logger raw log method");
           var TIMERS_SYMBOL = (typeof Symbol !== "undefined" ? Symbol : function (i) {
             return i;
           })("webpack logger times");
           var TIMERS_AGGREGATES_SYMBOL = (typeof Symbol !== "undefined" ? Symbol : function (i) {
             return i;
           })("webpack logger aggregated times");
     
           var WebpackLogger = /*#__PURE__*/function () {
             /**
              * @param {function(LogTypeEnum, any[]=): void} log log function
              * @param {function(string | function(): string): WebpackLogger} getChildLogger function to create child logger
              */
             function WebpackLogger(log, getChildLogger) {
               _classCallCheck(this, WebpackLogger);
     
               this[LOG_SYMBOL] = log;
               this.getChildLogger = getChildLogger;
             }
     
             _createClass(WebpackLogger, [{
               key: "error",
               value: function error() {
                 for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                   args[_key] = arguments[_key];
                 }
     
                 this[LOG_SYMBOL](LogType.error, args);
               }
             }, {
               key: "warn",
               value: function warn() {
                 for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                   args[_key2] = arguments[_key2];
                 }
     
                 this[LOG_SYMBOL](LogType.warn, args);
               }
             }, {
               key: "info",
               value: function info() {
                 for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                   args[_key3] = arguments[_key3];
                 }
     
                 this[LOG_SYMBOL](LogType.info, args);
               }
             }, {
               key: "log",
               value: function log() {
                 for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                   args[_key4] = arguments[_key4];
                 }
     
                 this[LOG_SYMBOL](LogType.log, args);
               }
             }, {
               key: "debug",
               value: function debug() {
                 for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
                   args[_key5] = arguments[_key5];
                 }
     
                 this[LOG_SYMBOL](LogType.debug, args);
               }
             }, {
               key: "assert",
               value: function assert(assertion) {
                 if (!assertion) {
                   for (var _len6 = arguments.length, args = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
                     args[_key6 - 1] = arguments[_key6];
                   }
     
                   this[LOG_SYMBOL](LogType.error, args);
                 }
               }
             }, {
               key: "trace",
               value: function trace() {
                 this[LOG_SYMBOL](LogType.trace, ["Trace"]);
               }
             }, {
               key: "clear",
               value: function clear() {
                 this[LOG_SYMBOL](LogType.clear);
               }
             }, {
               key: "status",
               value: function status() {
                 for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
                   args[_key7] = arguments[_key7];
                 }
     
                 this[LOG_SYMBOL](LogType.status, args);
               }
             }, {
               key: "group",
               value: function group() {
                 for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
                   args[_key8] = arguments[_key8];
                 }
     
                 this[LOG_SYMBOL](LogType.group, args);
               }
             }, {
               key: "groupCollapsed",
               value: function groupCollapsed() {
                 for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
                   args[_key9] = arguments[_key9];
                 }
     
                 this[LOG_SYMBOL](LogType.groupCollapsed, args);
               }
             }, {
               key: "groupEnd",
               value: function groupEnd() {
                 for (var _len10 = arguments.length, args = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
                   args[_key10] = arguments[_key10];
                 }
     
                 this[LOG_SYMBOL](LogType.groupEnd, args);
               }
             }, {
               key: "profile",
               value: function profile(label) {
                 this[LOG_SYMBOL](LogType.profile, [label]);
               }
             }, {
               key: "profileEnd",
               value: function profileEnd(label) {
                 this[LOG_SYMBOL](LogType.profileEnd, [label]);
               }
             }, {
               key: "time",
               value: function time(label) {
                 this[TIMERS_SYMBOL] = this[TIMERS_SYMBOL] || new Map();
                 this[TIMERS_SYMBOL].set(label, process.hrtime());
               }
             }, {
               key: "timeLog",
               value: function timeLog(label) {
                 var prev = this[TIMERS_SYMBOL] && this[TIMERS_SYMBOL].get(label);
     
                 if (!prev) {
                   throw new Error("No such label '".concat(label, "' for WebpackLogger.timeLog()"));
                 }
     
                 var time = process.hrtime(prev);
                 this[LOG_SYMBOL](LogType.time, [label].concat(_toConsumableArray(time)));
               }
             }, {
               key: "timeEnd",
               value: function timeEnd(label) {
                 var prev = this[TIMERS_SYMBOL] && this[TIMERS_SYMBOL].get(label);
     
                 if (!prev) {
                   throw new Error("No such label '".concat(label, "' for WebpackLogger.timeEnd()"));
                 }
     
                 var time = process.hrtime(prev);
                 this[TIMERS_SYMBOL].delete(label);
                 this[LOG_SYMBOL](LogType.time, [label].concat(_toConsumableArray(time)));
               }
             }, {
               key: "timeAggregate",
               value: function timeAggregate(label) {
                 var prev = this[TIMERS_SYMBOL] && this[TIMERS_SYMBOL].get(label);
     
                 if (!prev) {
                   throw new Error("No such label '".concat(label, "' for WebpackLogger.timeAggregate()"));
                 }
     
                 var time = process.hrtime(prev);
                 this[TIMERS_SYMBOL].delete(label);
                 this[TIMERS_AGGREGATES_SYMBOL] = this[TIMERS_AGGREGATES_SYMBOL] || new Map();
                 var current = this[TIMERS_AGGREGATES_SYMBOL].get(label);
     
                 if (current !== undefined) {
                   if (time[1] + current[1] > 1e9) {
                     time[0] += current[0] + 1;
                     time[1] = time[1] - 1e9 + current[1];
                   } else {
                     time[0] += current[0];
                     time[1] += current[1];
                   }
                 }
     
                 this[TIMERS_AGGREGATES_SYMBOL].set(label, time);
               }
             }, {
               key: "timeAggregateEnd",
               value: function timeAggregateEnd(label) {
                 if (this[TIMERS_AGGREGATES_SYMBOL] === undefined) return;
                 var time = this[TIMERS_AGGREGATES_SYMBOL].get(label);
                 if (time === undefined) return;
                 this[TIMERS_AGGREGATES_SYMBOL].delete(label);
                 this[LOG_SYMBOL](LogType.time, [label].concat(_toConsumableArray(time)));
               }
             }]);
     
             return WebpackLogger;
           }();
     
           exports.Logger = WebpackLogger;
           /***/
         },
     
         /***/
         "./node_modules/webpack/lib/logging/createConsoleLogger.js":
         /*!*****************************************************************!*\
           !*** ./node_modules/webpack/lib/logging/createConsoleLogger.js ***!
           \*****************************************************************/
     
         /***/
         function (module, __unused_webpack_exports, __nested_webpack_require_12752__) {
           /*
               MIT License http://www.opensource.org/licenses/mit-license.php
               Author Tobias Koppers @sokra
           */
           function _toConsumableArray(arr) {
             return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
           }
     
           function _nonIterableSpread() {
             throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
           }
     
           function _unsupportedIterableToArray(o, minLen) {
             if (!o) return;
             if (typeof o === "string") return _arrayLikeToArray(o, minLen);
             var n = Object.prototype.toString.call(o).slice(8, -1);
             if (n === "Object" && o.constructor) n = o.constructor.name;
             if (n === "Map" || n === "Set") return Array.from(o);
             if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
           }
     
           function _iterableToArray(iter) {
             if (typeof (typeof Symbol !== "undefined" ? Symbol : function (i) {
               return i;
             }) !== "undefined" && iter[(typeof Symbol !== "undefined" ? Symbol : function (i) {
               return i;
             }).iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
           }
     
           function _arrayWithoutHoles(arr) {
             if (Array.isArray(arr)) return _arrayLikeToArray(arr);
           }
     
           function _arrayLikeToArray(arr, len) {
             if (len == null || len > arr.length) len = arr.length;
     
             for (var i = 0, arr2 = new Array(len); i < len; i++) {
               arr2[i] = arr[i];
             }
     
             return arr2;
           }
     
           var _require = __nested_webpack_require_12752__(
           /*! ./Logger */
           "./node_modules/webpack/lib/logging/Logger.js"),
               LogType = _require.LogType;
           /** @typedef {import("../../declarations/WebpackOptions").FilterItemTypes} FilterItemTypes */
     
           /** @typedef {import("../../declarations/WebpackOptions").FilterTypes} FilterTypes */
     
           /** @typedef {import("./Logger").LogTypeEnum} LogTypeEnum */
     
           /** @typedef {function(string): boolean} FilterFunction */
     
           /**
            * @typedef {Object} LoggerConsole
            * @property {function(): void} clear
            * @property {function(): void} trace
            * @property {(...args: any[]) => void} info
            * @property {(...args: any[]) => void} log
            * @property {(...args: any[]) => void} warn
            * @property {(...args: any[]) => void} error
            * @property {(...args: any[]) => void=} debug
            * @property {(...args: any[]) => void=} group
            * @property {(...args: any[]) => void=} groupCollapsed
            * @property {(...args: any[]) => void=} groupEnd
            * @property {(...args: any[]) => void=} status
            * @property {(...args: any[]) => void=} profile
            * @property {(...args: any[]) => void=} profileEnd
            * @property {(...args: any[]) => void=} logTime
            */
     
           /**
            * @typedef {Object} LoggerOptions
            * @property {false|true|"none"|"error"|"warn"|"info"|"log"|"verbose"} level loglevel
            * @property {FilterTypes|boolean} debug filter for debug logging
            * @property {LoggerConsole} console the console to log to
            */
     
           /**
            * @param {FilterItemTypes} item an input item
            * @returns {FilterFunction} filter function
            */
     
     
           var filterToFunction = function filterToFunction(item) {
             if (typeof item === "string") {
               var regExp = new RegExp("[\\\\/]".concat(item.replace( // eslint-disable-next-line no-useless-escape
               /[-[\]{}()*+?.\\^$|]/g, "\\$&"), "([\\\\/]|$|!|\\?)"));
               return function (ident) {
                 return regExp.test(ident);
               };
             }
     
             if (item && typeof item === "object" && typeof item.test === "function") {
               return function (ident) {
                 return item.test(ident);
               };
             }
     
             if (typeof item === "function") {
               return item;
             }
     
             if (typeof item === "boolean") {
               return function () {
                 return item;
               };
             }
           };
           /**
            * @enum {number}
            */
     
     
           var LogLevel = {
             none: 6,
             false: 6,
             error: 5,
             warn: 4,
             info: 3,
             log: 2,
             true: 2,
             verbose: 1
           };
           /**
            * @param {LoggerOptions} options options object
            * @returns {function(string, LogTypeEnum, any[]): void} logging function
            */
     
           module.exports = function (_ref) {
             var _ref$level = _ref.level,
                 level = _ref$level === void 0 ? "info" : _ref$level,
                 _ref$debug = _ref.debug,
                 debug = _ref$debug === void 0 ? false : _ref$debug,
                 console = _ref.console;
             var debugFilters = typeof debug === "boolean" ? [function () {
               return debug;
             }] :
             /** @type {FilterItemTypes[]} */
             [].concat(debug).map(filterToFunction);
             /** @type {number} */
     
             var loglevel = LogLevel["".concat(level)] || 0;
             /**
              * @param {string} name name of the logger
              * @param {LogTypeEnum} type type of the log entry
              * @param {any[]} args arguments of the log entry
              * @returns {void}
              */
     
             var logger = function logger(name, type, args) {
               var labeledArgs = function labeledArgs() {
                 if (Array.isArray(args)) {
                   if (args.length > 0 && typeof args[0] === "string") {
                     return ["[".concat(name, "] ").concat(args[0])].concat(_toConsumableArray(args.slice(1)));
                   } else {
                     return ["[".concat(name, "]")].concat(_toConsumableArray(args));
                   }
                 } else {
                   return [];
                 }
               };
     
               var debug = debugFilters.some(function (f) {
                 return f(name);
               });
     
               switch (type) {
                 case LogType.debug:
                   if (!debug) return; // eslint-disable-next-line node/no-unsupported-features/node-builtins
     
                   if (typeof console.debug === "function") {
                     // eslint-disable-next-line node/no-unsupported-features/node-builtins
                     console.debug.apply(console, _toConsumableArray(labeledArgs()));
                   } else {
                     console.log.apply(console, _toConsumableArray(labeledArgs()));
                   }
     
                   break;
     
                 case LogType.log:
                   if (!debug && loglevel > LogLevel.log) return;
                   console.log.apply(console, _toConsumableArray(labeledArgs()));
                   break;
     
                 case LogType.info:
                   if (!debug && loglevel > LogLevel.info) return;
                   console.info.apply(console, _toConsumableArray(labeledArgs()));
                   break;
     
                 case LogType.warn:
                   if (!debug && loglevel > LogLevel.warn) return;
                   console.warn.apply(console, _toConsumableArray(labeledArgs()));
                   break;
     
                 case LogType.error:
                   if (!debug && loglevel > LogLevel.error) return;
                   console.error.apply(console, _toConsumableArray(labeledArgs()));
                   break;
     
                 case LogType.trace:
                   if (!debug) return;
                   console.trace();
                   break;
     
                 case LogType.groupCollapsed:
                   if (!debug && loglevel > LogLevel.log) return;
     
                   if (!debug && loglevel > LogLevel.verbose) {
                     // eslint-disable-next-line node/no-unsupported-features/node-builtins
                     if (typeof console.groupCollapsed === "function") {
                       // eslint-disable-next-line node/no-unsupported-features/node-builtins
                       console.groupCollapsed.apply(console, _toConsumableArray(labeledArgs()));
                     } else {
                       console.log.apply(console, _toConsumableArray(labeledArgs()));
                     }
     
                     break;
                   }
     
                 // falls through
     
                 case LogType.group:
                   if (!debug && loglevel > LogLevel.log) return; // eslint-disable-next-line node/no-unsupported-features/node-builtins
     
                   if (typeof console.group === "function") {
                     // eslint-disable-next-line node/no-unsupported-features/node-builtins
                     console.group.apply(console, _toConsumableArray(labeledArgs()));
                   } else {
                     console.log.apply(console, _toConsumableArray(labeledArgs()));
                   }
     
                   break;
     
                 case LogType.groupEnd:
                   if (!debug && loglevel > LogLevel.log) return; // eslint-disable-next-line node/no-unsupported-features/node-builtins
     
                   if (typeof console.groupEnd === "function") {
                     // eslint-disable-next-line node/no-unsupported-features/node-builtins
                     console.groupEnd();
                   }
     
                   break;
     
                 case LogType.time:
                   {
                     if (!debug && loglevel > LogLevel.log) return;
                     var ms = args[1] * 1000 + args[2] / 1000000;
                     var msg = "[".concat(name, "] ").concat(args[0], ": ").concat(ms, " ms");
     
                     if (typeof console.logTime === "function") {
                       console.logTime(msg);
                     } else {
                       console.log(msg);
                     }
     
                     break;
                   }
     
                 case LogType.profile:
                   // eslint-disable-next-line node/no-unsupported-features/node-builtins
                   if (typeof console.profile === "function") {
                     // eslint-disable-next-line node/no-unsupported-features/node-builtins
                     console.profile.apply(console, _toConsumableArray(labeledArgs()));
                   }
     
                   break;
     
                 case LogType.profileEnd:
                   // eslint-disable-next-line node/no-unsupported-features/node-builtins
                   if (typeof console.profileEnd === "function") {
                     // eslint-disable-next-line node/no-unsupported-features/node-builtins
                     console.profileEnd.apply(console, _toConsumableArray(labeledArgs()));
                   }
     
                   break;
     
                 case LogType.clear:
                   if (!debug && loglevel > LogLevel.log) return; // eslint-disable-next-line node/no-unsupported-features/node-builtins
     
                   if (typeof console.clear === "function") {
                     // eslint-disable-next-line node/no-unsupported-features/node-builtins
                     console.clear();
                   }
     
                   break;
     
                 case LogType.status:
                   if (!debug && loglevel > LogLevel.info) return;
     
                   if (typeof console.status === "function") {
                     if (args.length === 0) {
                       console.status();
                     } else {
                       console.status.apply(console, _toConsumableArray(labeledArgs()));
                     }
                   } else {
                     if (args.length !== 0) {
                       console.info.apply(console, _toConsumableArray(labeledArgs()));
                     }
                   }
     
                   break;
     
                 default:
                   throw new Error("Unexpected LogType ".concat(type));
               }
             };
     
             return logger;
           };
           /***/
     
         },
     
         /***/
         "./node_modules/webpack/lib/logging/runtime.js":
         /*!*****************************************************!*\
           !*** ./node_modules/webpack/lib/logging/runtime.js ***!
           \*****************************************************/
     
         /***/
         function (__unused_webpack_module, exports, __nested_webpack_require_24417__) {
           /*
               MIT License http://www.opensource.org/licenses/mit-license.php
               Author Tobias Koppers @sokra
           */
           function _extends() {
             _extends = Object.assign ? Object.assign.bind() : function (target) {
               for (var i = 1; i < arguments.length; i++) {
                 var source = arguments[i];
     
                 for (var key in source) {
                   if (Object.prototype.hasOwnProperty.call(source, key)) {
                     target[key] = source[key];
                   }
                 }
               }
     
               return target;
             };
             return _extends.apply(this, arguments);
           }
     
           var SyncBailHook = __nested_webpack_require_24417__(
           /*! tapable/lib/SyncBailHook */
           "./client-src/modules/logger/SyncBailHookFake.js");
     
           var _require = __nested_webpack_require_24417__(
           /*! ./Logger */
           "./node_modules/webpack/lib/logging/Logger.js"),
               Logger = _require.Logger;
     
           var createConsoleLogger = __nested_webpack_require_24417__(
           /*! ./createConsoleLogger */
           "./node_modules/webpack/lib/logging/createConsoleLogger.js");
           /** @type {createConsoleLogger.LoggerOptions} */
     
     
           var currentDefaultLoggerOptions = {
             level: "info",
             debug: false,
             console: console
           };
           var currentDefaultLogger = createConsoleLogger(currentDefaultLoggerOptions);
           /**
            * @param {string} name name of the logger
            * @returns {Logger} a logger
            */
     
           exports.getLogger = function (name) {
             return new Logger(function (type, args) {
               if (exports.hooks.log.call(name, type, args) === undefined) {
                 currentDefaultLogger(name, type, args);
               }
             }, function (childName) {
               return exports.getLogger("".concat(name, "/").concat(childName));
             });
           };
           /**
            * @param {createConsoleLogger.LoggerOptions} options new options, merge with old options
            * @returns {void}
            */
     
     
           exports.configureDefaultLogger = function (options) {
             _extends(currentDefaultLoggerOptions, options);
     
             currentDefaultLogger = createConsoleLogger(currentDefaultLoggerOptions);
           };
     
           exports.hooks = {
             log: new SyncBailHook(["origin", "type", "args"])
           };
           /***/
         }
         /******/
     
       };
       /************************************************************************/
     
       /******/
       // The module cache
     
       /******/
     
       var __webpack_module_cache__ = {};
       /******/
     
       /******/
       // The require function
     
       /******/
     
       function __nested_webpack_require_26940__(moduleId) {
         /******/
         // Check if module is in cache
     
         /******/
         var cachedModule = __webpack_module_cache__[moduleId];
         /******/
     
         if (cachedModule !== undefined) {
           /******/
           return cachedModule.exports;
           /******/
         }
         /******/
         // Create a new module (and put it into the cache)
     
         /******/
     
     
         var module = __webpack_module_cache__[moduleId] = {
           /******/
           // no module.id needed
     
           /******/
           // no module.loaded needed
     
           /******/
           exports: {}
           /******/
     
         };
         /******/
     
         /******/
         // Execute the module function
     
         /******/
     
         __webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_26940__);
         /******/
     
         /******/
         // Return the exports of the module
     
         /******/
     
     
         return module.exports;
         /******/
       }
       /******/
     
       /************************************************************************/
     
       /******/
     
       /* webpack/runtime/define property getters */
     
       /******/
     
     
       !function () {
         /******/
         // define getter functions for harmony exports
     
         /******/
         __nested_webpack_require_26940__.d = function (exports, definition) {
           /******/
           for (var key in definition) {
             /******/
             if (__nested_webpack_require_26940__.o(definition, key) && !__nested_webpack_require_26940__.o(exports, key)) {
               /******/
               Object.defineProperty(exports, key, {
                 enumerable: true,
                 get: definition[key]
               });
               /******/
             }
             /******/
     
           }
           /******/
     
         };
         /******/
     
       }();
       /******/
     
       /******/
     
       /* webpack/runtime/hasOwnProperty shorthand */
     
       /******/
     
       !function () {
         /******/
         __nested_webpack_require_26940__.o = function (obj, prop) {
           return Object.prototype.hasOwnProperty.call(obj, prop);
         };
         /******/
     
       }();
       /******/
     
       /******/
     
       /* webpack/runtime/make namespace object */
     
       /******/
     
       !function () {
         /******/
         // define __esModule on exports
     
         /******/
         __nested_webpack_require_26940__.r = function (exports) {
           /******/
           if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
             /******/
             Object.defineProperty(exports, Symbol.toStringTag, {
               value: 'Module'
             });
             /******/
           }
           /******/
     
     
           Object.defineProperty(exports, '__esModule', {
             value: true
           });
           /******/
         };
         /******/
     
       }();
       /******/
     
       /************************************************************************/
     
       var __webpack_exports__ = {}; // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
     
       !function () {
         /*!********************************************!*\
           !*** ./client-src/modules/logger/index.js ***!
           \********************************************/
         __nested_webpack_require_26940__.r(__webpack_exports__);
         /* harmony export */
     
     
         __nested_webpack_require_26940__.d(__webpack_exports__, {
           /* harmony export */
           "default": function () {
             return (
               /* reexport default export from named module */
               webpack_lib_logging_runtime_js__WEBPACK_IMPORTED_MODULE_0__
             );
           }
           /* harmony export */
     
         });
         /* harmony import */
     
     
         var webpack_lib_logging_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_26940__(
         /*! webpack/lib/logging/runtime.js */
         "./node_modules/webpack/lib/logging/runtime.js");
       }();
       var __webpack_export_target__ = exports;
     
       for (var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
     
       if (__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", {
         value: true
       });
       /******/
     })();
     
     /***/ }),
     
     /***/ "./node_modules/webpack-dev-server/client/overlay.js":
     /*!***********************************************************!*\
       !*** ./node_modules/webpack-dev-server/client/overlay.js ***!
       \***********************************************************/
     /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
     
     "use strict";
     __webpack_require__.r(__webpack_exports__);
     /* harmony export */ __webpack_require__.d(__webpack_exports__, {
     /* harmony export */   "formatProblem": () => (/* binding */ formatProblem),
     /* harmony export */   "hide": () => (/* binding */ hide),
     /* harmony export */   "show": () => (/* binding */ show)
     /* harmony export */ });
     /* harmony import */ var ansi_html_community__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ansi-html-community */ "./node_modules/ansi-html-community/index.js");
     /* harmony import */ var ansi_html_community__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ansi_html_community__WEBPACK_IMPORTED_MODULE_0__);
     /* harmony import */ var html_entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html-entities */ "./node_modules/html-entities/lib/index.js");
     /* harmony import */ var html_entities__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(html_entities__WEBPACK_IMPORTED_MODULE_1__);
     // The error overlay is inspired (and mostly copied) from Create React App (https://github.com/facebookincubator/create-react-app)
     // They, in turn, got inspired by webpack-hot-middleware (https://github.com/glenjamin/webpack-hot-middleware).
     
     
     var colors = {
       reset: ["transparent", "transparent"],
       black: "181818",
       red: "E36049",
       green: "B3CB74",
       yellow: "FFD080",
       blue: "7CAFC2",
       magenta: "7FACCA",
       cyan: "C3C2EF",
       lightgrey: "EBE7E3",
       darkgrey: "6D7891"
     };
     /** @type {HTMLIFrameElement | null | undefined} */
     
     var iframeContainerElement;
     /** @type {HTMLDivElement | null | undefined} */
     
     var containerElement;
     /** @type {Array<(element: HTMLDivElement) => void>} */
     
     var onLoadQueue = [];
     /** @type {TrustedTypePolicy | undefined} */
     
     var overlayTrustedTypesPolicy;
     ansi_html_community__WEBPACK_IMPORTED_MODULE_0___default().setColors(colors);
     /**
      * @param {string | null} trustedTypesPolicyName
      */
     
     function createContainer(trustedTypesPolicyName) {
       // Enable Trusted Types if they are available in the current browser.
       if (window.trustedTypes) {
         overlayTrustedTypesPolicy = window.trustedTypes.createPolicy(trustedTypesPolicyName || "webpack-dev-server#overlay", {
           createHTML: function createHTML(value) {
             return value;
           }
         });
       }
     
       iframeContainerElement = document.createElement("iframe");
       iframeContainerElement.id = "webpack-dev-server-client-overlay";
       iframeContainerElement.src = "about:blank";
       iframeContainerElement.style.position = "fixed";
       iframeContainerElement.style.left = 0;
       iframeContainerElement.style.top = 0;
       iframeContainerElement.style.right = 0;
       iframeContainerElement.style.bottom = 0;
       iframeContainerElement.style.width = "100vw";
       iframeContainerElement.style.height = "100vh";
       iframeContainerElement.style.border = "none";
       iframeContainerElement.style.zIndex = 9999999999;
     
       iframeContainerElement.onload = function () {
         containerElement =
         /** @type {Document} */
     
         /** @type {HTMLIFrameElement} */
         iframeContainerElement.contentDocument.createElement("div");
         containerElement.id = "webpack-dev-server-client-overlay-div";
         containerElement.style.position = "fixed";
         containerElement.style.boxSizing = "border-box";
         containerElement.style.left = 0;
         containerElement.style.top = 0;
         containerElement.style.right = 0;
         containerElement.style.bottom = 0;
         containerElement.style.width = "100vw";
         containerElement.style.height = "100vh";
         containerElement.style.backgroundColor = "rgba(0, 0, 0, 0.85)";
         containerElement.style.color = "#E8E8E8";
         containerElement.style.fontFamily = "Menlo, Consolas, monospace";
         containerElement.style.fontSize = "large";
         containerElement.style.padding = "2rem";
         containerElement.style.lineHeight = "1.2";
         containerElement.style.whiteSpace = "pre-wrap";
         containerElement.style.overflow = "auto";
         var headerElement = document.createElement("span");
         headerElement.innerText = "Compiled with problems:";
         var closeButtonElement = document.createElement("button");
         closeButtonElement.innerText = "X";
         closeButtonElement.style.background = "transparent";
         closeButtonElement.style.border = "none";
         closeButtonElement.style.fontSize = "20px";
         closeButtonElement.style.fontWeight = "bold";
         closeButtonElement.style.color = "white";
         closeButtonElement.style.cursor = "pointer";
         closeButtonElement.style.cssFloat = "right"; // @ts-ignore
     
         closeButtonElement.style.styleFloat = "right";
         closeButtonElement.addEventListener("click", function () {
           hide();
         });
         containerElement.appendChild(headerElement);
         containerElement.appendChild(closeButtonElement);
         containerElement.appendChild(document.createElement("br"));
         containerElement.appendChild(document.createElement("br"));
         /** @type {Document} */
     
         /** @type {HTMLIFrameElement} */
     
         iframeContainerElement.contentDocument.body.appendChild(containerElement);
         onLoadQueue.forEach(function (onLoad) {
           onLoad(
           /** @type {HTMLDivElement} */
           containerElement);
         });
         onLoadQueue = [];
         /** @type {HTMLIFrameElement} */
     
         iframeContainerElement.onload = null;
       };
     
       document.body.appendChild(iframeContainerElement);
     }
     /**
      * @param {(element: HTMLDivElement) => void} callback
      * @param {string | null} trustedTypesPolicyName
      */
     
     
     function ensureOverlayExists(callback, trustedTypesPolicyName) {
       if (containerElement) {
         // Everything is ready, call the callback right away.
         callback(containerElement);
         return;
       }
     
       onLoadQueue.push(callback);
     
       if (iframeContainerElement) {
         return;
       }
     
       createContainer(trustedTypesPolicyName);
     } // Successful compilation.
     
     
     function hide() {
       if (!iframeContainerElement) {
         return;
       } // Clean up and reset internal state.
     
     
       document.body.removeChild(iframeContainerElement);
       iframeContainerElement = null;
       containerElement = null;
     }
     /**
      * @param {string} type
      * @param {string  | { file?: string, moduleName?: string, loc?: string, message?: string }} item
      * @returns {{ header: string, body: string }}
      */
     
     
     function formatProblem(type, item) {
       var header = type === "warning" ? "WARNING" : "ERROR";
       var body = "";
     
       if (typeof item === "string") {
         body += item;
       } else {
         var file = item.file || ""; // eslint-disable-next-line no-nested-ternary
     
         var moduleName = item.moduleName ? item.moduleName.indexOf("!") !== -1 ? "".concat(item.moduleName.replace(/^(\s|\S)*!/, ""), " (").concat(item.moduleName, ")") : "".concat(item.moduleName) : "";
         var loc = item.loc;
         header += "".concat(moduleName || file ? " in ".concat(moduleName ? "".concat(moduleName).concat(file ? " (".concat(file, ")") : "") : file).concat(loc ? " ".concat(loc) : "") : "");
         body += item.message || "";
       }
     
       return {
         header: header,
         body: body
       };
     } // Compilation with errors (e.g. syntax error or missing modules).
     
     /**
      * @param {string} type
      * @param {Array<string  | { file?: string, moduleName?: string, loc?: string, message?: string }>} messages
      * @param {string | null} trustedTypesPolicyName
      */
     
     
     function show(type, messages, trustedTypesPolicyName) {
       ensureOverlayExists(function () {
         messages.forEach(function (message) {
           var entryElement = document.createElement("div");
           var typeElement = document.createElement("span");
     
           var _formatProblem = formatProblem(type, message),
               header = _formatProblem.header,
               body = _formatProblem.body;
     
           typeElement.innerText = header;
           typeElement.style.color = "#".concat(colors.red); // Make it look similar to our terminal.
     
           var text = ansi_html_community__WEBPACK_IMPORTED_MODULE_0___default()((0,html_entities__WEBPACK_IMPORTED_MODULE_1__.encode)(body));
           var messageTextNode = document.createElement("div");
           messageTextNode.innerHTML = overlayTrustedTypesPolicy ? overlayTrustedTypesPolicy.createHTML(text) : text;
           entryElement.appendChild(typeElement);
           entryElement.appendChild(document.createElement("br"));
           entryElement.appendChild(document.createElement("br"));
           entryElement.appendChild(messageTextNode);
           entryElement.appendChild(document.createElement("br"));
           entryElement.appendChild(document.createElement("br"));
           /** @type {HTMLDivElement} */
     
           containerElement.appendChild(entryElement);
         });
       }, trustedTypesPolicyName);
     }
     
     
     
     /***/ }),
     
     /***/ "./node_modules/webpack-dev-server/client/socket.js":
     /*!**********************************************************!*\
       !*** ./node_modules/webpack-dev-server/client/socket.js ***!
       \**********************************************************/
     /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
     
     "use strict";
     __webpack_require__.r(__webpack_exports__);
     /* harmony export */ __webpack_require__.d(__webpack_exports__, {
     /* harmony export */   "client": () => (/* binding */ client),
     /* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
     /* harmony export */ });
     /* harmony import */ var _clients_WebSocketClient_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clients/WebSocketClient.js */ "./node_modules/webpack-dev-server/client/clients/WebSocketClient.js");
     /* harmony import */ var _utils_log_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/log.js */ "./node_modules/webpack-dev-server/client/utils/log.js");
     /* provided dependency */ var __webpack_dev_server_client__ = __webpack_require__(/*! ./node_modules/webpack-dev-server/client/clients/WebSocketClient.js */ "./node_modules/webpack-dev-server/client/clients/WebSocketClient.js");
     /* global __webpack_dev_server_client__ */
     
      // this WebsocketClient is here as a default fallback, in case the client is not injected
     
     /* eslint-disable camelcase */
     
     var Client = // eslint-disable-next-line no-nested-ternary
     typeof __webpack_dev_server_client__ !== "undefined" ? typeof __webpack_dev_server_client__.default !== "undefined" ? __webpack_dev_server_client__.default : __webpack_dev_server_client__ : _clients_WebSocketClient_js__WEBPACK_IMPORTED_MODULE_0__["default"];
     /* eslint-enable camelcase */
     
     var retries = 0;
     var maxRetries = 10; // Initialized client is exported so external consumers can utilize the same instance
     // It is mutable to enforce singleton
     // eslint-disable-next-line import/no-mutable-exports
     
     var client = null;
     /**
      * @param {string} url
      * @param {{ [handler: string]: (data?: any, params?: any) => any }} handlers
      * @param {number} [reconnect]
      */
     
     var socket = function initSocket(url, handlers, reconnect) {
       client = new Client(url);
       client.onOpen(function () {
         retries = 0;
     
         if (typeof reconnect !== "undefined") {
           maxRetries = reconnect;
         }
       });
       client.onClose(function () {
         if (retries === 0) {
           handlers.close();
         } // Try to reconnect.
     
     
         client = null; // After 10 retries stop trying, to prevent logspam.
     
         if (retries < maxRetries) {
           // Exponentially increase timeout to reconnect.
           // Respectfully copied from the package `got`.
           // eslint-disable-next-line no-restricted-properties
           var retryInMs = 1000 * Math.pow(2, retries) + Math.random() * 100;
           retries += 1;
           _utils_log_js__WEBPACK_IMPORTED_MODULE_1__.log.info("Trying to reconnect...");
           setTimeout(function () {
             socket(url, handlers, reconnect);
           }, retryInMs);
         }
       });
       client.onMessage(
       /**
        * @param {any} data
        */
       function (data) {
         var message = JSON.parse(data);
     
         if (handlers[message.type]) {
           handlers[message.type](message.data, message.params);
         }
       });
     };
     
     /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (socket);
     
     /***/ }),
     
     /***/ "./node_modules/webpack-dev-server/client/utils/createSocketURL.js":
     /*!*************************************************************************!*\
       !*** ./node_modules/webpack-dev-server/client/utils/createSocketURL.js ***!
       \*************************************************************************/
     /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
     
     "use strict";
     __webpack_require__.r(__webpack_exports__);
     /* harmony export */ __webpack_require__.d(__webpack_exports__, {
     /* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
     /* harmony export */ });
     /**
      * @param {{ protocol?: string, auth?: string, hostname?: string, port?: string, pathname?: string, search?: string, hash?: string, slashes?: boolean }} objURL
      * @returns {string}
      */
     function format(objURL) {
       var protocol = objURL.protocol || "";
     
       if (protocol && protocol.substr(-1) !== ":") {
         protocol += ":";
       }
     
       var auth = objURL.auth || "";
     
       if (auth) {
         auth = encodeURIComponent(auth);
         auth = auth.replace(/%3A/i, ":");
         auth += "@";
       }
     
       var host = "";
     
       if (objURL.hostname) {
         host = auth + (objURL.hostname.indexOf(":") === -1 ? objURL.hostname : "[".concat(objURL.hostname, "]"));
     
         if (objURL.port) {
           host += ":".concat(objURL.port);
         }
       }
     
       var pathname = objURL.pathname || "";
     
       if (objURL.slashes) {
         host = "//".concat(host || "");
     
         if (pathname && pathname.charAt(0) !== "/") {
           pathname = "/".concat(pathname);
         }
       } else if (!host) {
         host = "";
       }
     
       var search = objURL.search || "";
     
       if (search && search.charAt(0) !== "?") {
         search = "?".concat(search);
       }
     
       var hash = objURL.hash || "";
     
       if (hash && hash.charAt(0) !== "#") {
         hash = "#".concat(hash);
       }
     
       pathname = pathname.replace(/[?#]/g,
       /**
        * @param {string} match
        * @returns {string}
        */
       function (match) {
         return encodeURIComponent(match);
       });
       search = search.replace("#", "%23");
       return "".concat(protocol).concat(host).concat(pathname).concat(search).concat(hash);
     }
     /**
      * @param {URL & { fromCurrentScript?: boolean }} parsedURL
      * @returns {string}
      */
     
     
     function createSocketURL(parsedURL) {
       var hostname = parsedURL.hostname; // Node.js module parses it as `::`
       // `new URL(urlString, [baseURLString])` parses it as '[::]'
     
       var isInAddrAny = hostname === "0.0.0.0" || hostname === "::" || hostname === "[::]"; // why do we need this check?
       // hostname n/a for file protocol (example, when using electron, ionic)
       // see: https://github.com/webpack/webpack-dev-server/pull/384
     
       if (isInAddrAny && self.location.hostname && self.location.protocol.indexOf("http") === 0) {
         hostname = self.location.hostname;
       }
     
       var socketURLProtocol = parsedURL.protocol || self.location.protocol; // When https is used in the app, secure web sockets are always necessary because the browser doesn't accept non-secure web sockets.
     
       if (socketURLProtocol === "auto:" || hostname && isInAddrAny && self.location.protocol === "https:") {
         socketURLProtocol = self.location.protocol;
       }
     
       socketURLProtocol = socketURLProtocol.replace(/^(?:http|.+-extension|file)/i, "ws");
       var socketURLAuth = ""; // `new URL(urlString, [baseURLstring])` doesn't have `auth` property
       // Parse authentication credentials in case we need them
     
       if (parsedURL.username) {
         socketURLAuth = parsedURL.username; // Since HTTP basic authentication does not allow empty username,
         // we only include password if the username is not empty.
     
         if (parsedURL.password) {
           // Result: <username>:<password>
           socketURLAuth = socketURLAuth.concat(":", parsedURL.password);
         }
       } // In case the host is a raw IPv6 address, it can be enclosed in
       // the brackets as the brackets are needed in the final URL string.
       // Need to remove those as url.format blindly adds its own set of brackets
       // if the host string contains colons. That would lead to non-working
       // double brackets (e.g. [[::]]) host
       //
       // All of these web socket url params are optionally passed in through resourceQuery,
       // so we need to fall back to the default if they are not provided
     
     
       var socketURLHostname = (hostname || self.location.hostname || "localhost").replace(/^\[(.*)\]$/, "$1");
       var socketURLPort = parsedURL.port;
     
       if (!socketURLPort || socketURLPort === "0") {
         socketURLPort = self.location.port;
       } // If path is provided it'll be passed in via the resourceQuery as a
       // query param so it has to be parsed out of the querystring in order for the
       // client to open the socket to the correct location.
     
     
       var socketURLPathname = "/ws";
     
       if (parsedURL.pathname && !parsedURL.fromCurrentScript) {
         socketURLPathname = parsedURL.pathname;
       }
     
       return format({
         protocol: socketURLProtocol,
         auth: socketURLAuth,
         hostname: socketURLHostname,
         port: socketURLPort,
         pathname: socketURLPathname,
         slashes: true
       });
     }
     
     /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createSocketURL);
     
     /***/ }),
     
     /***/ "./node_modules/webpack-dev-server/client/utils/getCurrentScriptSource.js":
     /*!********************************************************************************!*\
       !*** ./node_modules/webpack-dev-server/client/utils/getCurrentScriptSource.js ***!
       \********************************************************************************/
     /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
     
     "use strict";
     __webpack_require__.r(__webpack_exports__);
     /* harmony export */ __webpack_require__.d(__webpack_exports__, {
     /* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
     /* harmony export */ });
     /**
      * @returns {string}
      */
     function getCurrentScriptSource() {
       // `document.currentScript` is the most accurate way to find the current script,
       // but is not supported in all browsers.
       if (document.currentScript) {
         return document.currentScript.getAttribute("src");
       } // Fallback to getting all scripts running in the document.
     
     
       var scriptElements = document.scripts || [];
       var scriptElementsWithSrc = Array.prototype.filter.call(scriptElements, function (element) {
         return element.getAttribute("src");
       });
     
       if (scriptElementsWithSrc.length > 0) {
         var currentScript = scriptElementsWithSrc[scriptElementsWithSrc.length - 1];
         return currentScript.getAttribute("src");
       } // Fail as there was no script to use.
     
     
       throw new Error("[webpack-dev-server] Failed to get current script source.");
     }
     
     /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCurrentScriptSource);
     
     /***/ }),
     
     /***/ "./node_modules/webpack-dev-server/client/utils/log.js":
     /*!*************************************************************!*\
       !*** ./node_modules/webpack-dev-server/client/utils/log.js ***!
       \*************************************************************/
     /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
     
     "use strict";
     __webpack_require__.r(__webpack_exports__);
     /* harmony export */ __webpack_require__.d(__webpack_exports__, {
     /* harmony export */   "log": () => (/* binding */ log),
     /* harmony export */   "logEnabledFeatures": () => (/* binding */ logEnabledFeatures),
     /* harmony export */   "setLogLevel": () => (/* binding */ setLogLevel)
     /* harmony export */ });
     /* harmony import */ var _modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/logger/index.js */ "./node_modules/webpack-dev-server/client/modules/logger/index.js");
     /* harmony import */ var _modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0__);
     
     var name = "webpack-dev-server"; // default level is set on the client side, so it does not need
     // to be set by the CLI or API
     
     var defaultLevel = "info"; // options new options, merge with old options
     
     /**
      * @param {false | true | "none" | "error" | "warn" | "info" | "log" | "verbose"} level
      * @returns {void}
      */
     
     function setLogLevel(level) {
       _modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0___default().configureDefaultLogger({
         level: level
       });
     }
     
     setLogLevel(defaultLevel);
     var log = _modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0___default().getLogger(name);
     
     var logEnabledFeatures = function logEnabledFeatures(features) {
       var enabledFeatures = Object.keys(features);
     
       if (!features || enabledFeatures.length === 0) {
         return;
       }
     
       var logString = "Server started:"; // Server started: Hot Module Replacement enabled, Live Reloading enabled, Overlay disabled.
     
       for (var i = 0; i < enabledFeatures.length; i++) {
         var key = enabledFeatures[i];
         logString += " ".concat(key, " ").concat(features[key] ? "enabled" : "disabled", ",");
       } // replace last comma with a period
     
     
       logString = logString.slice(0, -1).concat(".");
       log.info(logString);
     };
     
     
     
     /***/ }),
     
     /***/ "./node_modules/webpack-dev-server/client/utils/parseURL.js":
     /*!******************************************************************!*\
       !*** ./node_modules/webpack-dev-server/client/utils/parseURL.js ***!
       \******************************************************************/
     /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
     
     "use strict";
     __webpack_require__.r(__webpack_exports__);
     /* harmony export */ __webpack_require__.d(__webpack_exports__, {
     /* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
     /* harmony export */ });
     /* harmony import */ var _getCurrentScriptSource_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getCurrentScriptSource.js */ "./node_modules/webpack-dev-server/client/utils/getCurrentScriptSource.js");
     
     /**
      * @param {string} resourceQuery
      * @returns {{ [key: string]: string | boolean }}
      */
     
     function parseURL(resourceQuery) {
       /** @type {{ [key: string]: string }} */
       var options = {};
     
       if (typeof resourceQuery === "string" && resourceQuery !== "") {
         var searchParams = resourceQuery.slice(1).split("&");
     
         for (var i = 0; i < searchParams.length; i++) {
           var pair = searchParams[i].split("=");
           options[pair[0]] = decodeURIComponent(pair[1]);
         }
       } else {
         // Else, get the url from the <script> this file was called with.
         var scriptSource = (0,_getCurrentScriptSource_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
         var scriptSourceURL;
     
         try {
           // The placeholder `baseURL` with `window.location.href`,
           // is to allow parsing of path-relative or protocol-relative URLs,
           // and will have no effect if `scriptSource` is a fully valid URL.
           scriptSourceURL = new URL(scriptSource, self.location.href);
         } catch (error) {// URL parsing failed, do nothing.
           // We will still proceed to see if we can recover using `resourceQuery`
         }
     
         if (scriptSourceURL) {
           options = scriptSourceURL;
           options.fromCurrentScript = true;
         }
       }
     
       return options;
     }
     
     /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parseURL);
     
     /***/ }),
     
     /***/ "./node_modules/webpack-dev-server/client/utils/reloadApp.js":
     /*!*******************************************************************!*\
       !*** ./node_modules/webpack-dev-server/client/utils/reloadApp.js ***!
       \*******************************************************************/
     /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
     
     "use strict";
     __webpack_require__.r(__webpack_exports__);
     /* harmony export */ __webpack_require__.d(__webpack_exports__, {
     /* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
     /* harmony export */ });
     /* harmony import */ var webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webpack/hot/emitter.js */ "./node_modules/webpack/hot/emitter.js");
     /* harmony import */ var webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_0__);
     /* harmony import */ var _log_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./log.js */ "./node_modules/webpack-dev-server/client/utils/log.js");
     
     
     /** @typedef {import("../index").Options} Options
     /** @typedef {import("../index").Status} Status
     
     /**
      * @param {Options} options
      * @param {Status} status
      */
     
     function reloadApp(_ref, status) {
       var hot = _ref.hot,
           liveReload = _ref.liveReload;
     
       if (status.isUnloading) {
         return;
       }
     
       var currentHash = status.currentHash,
           previousHash = status.previousHash;
       var isInitial = currentHash.indexOf(
       /** @type {string} */
       previousHash) >= 0;
     
       if (isInitial) {
         return;
       }
       /**
        * @param {Window} rootWindow
        * @param {number} intervalId
        */
     
     
       function applyReload(rootWindow, intervalId) {
         clearInterval(intervalId);
         _log_js__WEBPACK_IMPORTED_MODULE_1__.log.info("App updated. Reloading...");
         rootWindow.location.reload();
       }
     
       var search = self.location.search.toLowerCase();
       var allowToHot = search.indexOf("webpack-dev-server-hot=false") === -1;
       var allowToLiveReload = search.indexOf("webpack-dev-server-live-reload=false") === -1;
     
       if (hot && allowToHot) {
         _log_js__WEBPACK_IMPORTED_MODULE_1__.log.info("App hot update...");
         webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_0___default().emit("webpackHotUpdate", status.currentHash);
     
         if (typeof self !== "undefined" && self.window) {
           // broadcast update to window
           self.postMessage("webpackHotUpdate".concat(status.currentHash), "*");
         }
       } // allow refreshing the page only if liveReload isn't disabled
       else if (liveReload && allowToLiveReload) {
         var rootWindow = self; // use parent window for reload (in case we're in an iframe with no valid src)
     
         var intervalId = self.setInterval(function () {
           if (rootWindow.location.protocol !== "about:") {
             // reload immediately if protocol is valid
             applyReload(rootWindow, intervalId);
           } else {
             rootWindow = rootWindow.parent;
     
             if (rootWindow.parent === rootWindow) {
               // if parent equals current window we've reached the root which would continue forever, so trigger a reload anyways
               applyReload(rootWindow, intervalId);
             }
           }
         });
       }
     }
     
     /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reloadApp);
     
     /***/ }),
     
     /***/ "./node_modules/webpack-dev-server/client/utils/sendMessage.js":
     /*!*********************************************************************!*\
       !*** ./node_modules/webpack-dev-server/client/utils/sendMessage.js ***!
       \*********************************************************************/
     /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
     
     "use strict";
     __webpack_require__.r(__webpack_exports__);
     /* harmony export */ __webpack_require__.d(__webpack_exports__, {
     /* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
     /* harmony export */ });
     /* global __resourceQuery WorkerGlobalScope */
     // Send messages to the outside, so plugins can consume it.
     
     /**
      * @param {string} type
      * @param {any} [data]
      */
     function sendMsg(type, data) {
       if (typeof self !== "undefined" && (typeof WorkerGlobalScope === "undefined" || !(self instanceof WorkerGlobalScope))) {
         self.postMessage({
           type: "webpack".concat(type),
           data: data
         }, "*");
       }
     }
     
     /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendMsg);
     
     /***/ }),
     
     /***/ "./node_modules/webpack-dev-server/client/utils/stripAnsi.js":
     /*!*******************************************************************!*\
       !*** ./node_modules/webpack-dev-server/client/utils/stripAnsi.js ***!
       \*******************************************************************/
     /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
     
     "use strict";
     __webpack_require__.r(__webpack_exports__);
     /* harmony export */ __webpack_require__.d(__webpack_exports__, {
     /* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
     /* harmony export */ });
     var ansiRegex = new RegExp(["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|"), "g");
     /**
      *
      * Strip [ANSI escape codes](https://en.wikipedia.org/wiki/ANSI_escape_code) from a string.
      * Adapted from code originally released by Sindre Sorhus
      * Licensed the MIT License
      *
      * @param {string} string
      * @return {string}
      */
     
     function stripAnsi(string) {
       if (typeof string !== "string") {
         throw new TypeError("Expected a `string`, got `".concat(typeof string, "`"));
       }
     
       return string.replace(ansiRegex, "");
     }
     
     /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stripAnsi);
     
     /***/ }),
     
     /***/ "./node_modules/webpack/hot/dev-server.js":
     /*!************************************************!*\
       !*** ./node_modules/webpack/hot/dev-server.js ***!
       \************************************************/
     /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
     
     /*
         MIT License http://www.opensource.org/licenses/mit-license.php
         Author Tobias Koppers @sokra
     */
     
     /* globals __webpack_hash__ */
     if (true) {
       var lastHash;
     
       var upToDate = function upToDate() {
         return lastHash.indexOf(__webpack_require__.h()) >= 0;
       };
     
       var log = __webpack_require__(/*! ./log */ "./node_modules/webpack/hot/log.js");
     
       var check = function check() {
         module.hot.check(true).then(function (updatedModules) {
           if (!updatedModules) {
             log("warning", "[HMR] Cannot find update. Need to do a full reload!");
             log("warning", "[HMR] (Probably because of restarting the webpack-dev-server)");
             window.location.reload();
             return;
           }
     
           if (!upToDate()) {
             check();
           }
     
           __webpack_require__(/*! ./log-apply-result */ "./node_modules/webpack/hot/log-apply-result.js")(updatedModules, updatedModules);
     
           if (upToDate()) {
             log("info", "[HMR] App is up to date.");
           }
         }).catch(function (err) {
           var status = module.hot.status();
     
           if (["abort", "fail"].indexOf(status) >= 0) {
             log("warning", "[HMR] Cannot apply update. Need to do a full reload!");
             log("warning", "[HMR] " + log.formatError(err));
             window.location.reload();
           } else {
             log("warning", "[HMR] Update failed: " + log.formatError(err));
           }
         });
       };
     
       var hotEmitter = __webpack_require__(/*! ./emitter */ "./node_modules/webpack/hot/emitter.js");
     
       hotEmitter.on("webpackHotUpdate", function (currentHash) {
         lastHash = currentHash;
     
         if (!upToDate() && module.hot.status() === "idle") {
           log("info", "[HMR] Checking for updates on the server...");
           check();
         }
       });
       log("info", "[HMR] Waiting for update signal from WDS...");
     } else {}
     
     /***/ }),
     
     /***/ "./node_modules/webpack/hot/emitter.js":
     /*!*********************************************!*\
       !*** ./node_modules/webpack/hot/emitter.js ***!
       \*********************************************/
     /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
     
     var EventEmitter = __webpack_require__(/*! events */ "./node_modules/events/events.js");
     
     module.exports = new EventEmitter();
     
     /***/ }),
     
     /***/ "./node_modules/webpack/hot/log-apply-result.js":
     /*!******************************************************!*\
       !*** ./node_modules/webpack/hot/log-apply-result.js ***!
       \******************************************************/
     /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
     
     /*
         MIT License http://www.opensource.org/licenses/mit-license.php
         Author Tobias Koppers @sokra
     */
     module.exports = function (updatedModules, renewedModules) {
       var unacceptedModules = updatedModules.filter(function (moduleId) {
         return renewedModules && renewedModules.indexOf(moduleId) < 0;
       });
     
       var log = __webpack_require__(/*! ./log */ "./node_modules/webpack/hot/log.js");
     
       if (unacceptedModules.length > 0) {
         log("warning", "[HMR] The following modules couldn't be hot updated: (They would need a full reload!)");
         unacceptedModules.forEach(function (moduleId) {
           log("warning", "[HMR]  - " + moduleId);
         });
       }
     
       if (!renewedModules || renewedModules.length === 0) {
         log("info", "[HMR] Nothing hot updated.");
       } else {
         log("info", "[HMR] Updated modules:");
         renewedModules.forEach(function (moduleId) {
           if (typeof moduleId === "string" && moduleId.indexOf("!") !== -1) {
             var parts = moduleId.split("!");
             log.groupCollapsed("info", "[HMR]  - " + parts.pop());
             log("info", "[HMR]  - " + moduleId);
             log.groupEnd("info");
           } else {
             log("info", "[HMR]  - " + moduleId);
           }
         });
         var numberIds = renewedModules.every(function (moduleId) {
           return typeof moduleId === "number";
         });
         if (numberIds) log("info", '[HMR] Consider using the optimization.moduleIds: "named" for module names.');
       }
     };
     
     /***/ }),
     
     /***/ "./node_modules/webpack/hot/log.js":
     /*!*****************************************!*\
       !*** ./node_modules/webpack/hot/log.js ***!
       \*****************************************/
     /***/ ((module) => {
     
     var logLevel = "info";
     
     function dummy() {}
     
     function shouldLog(level) {
       var shouldLog = logLevel === "info" && level === "info" || ["info", "warning"].indexOf(logLevel) >= 0 && level === "warning" || ["info", "warning", "error"].indexOf(logLevel) >= 0 && level === "error";
       return shouldLog;
     }
     
     function logGroup(logFn) {
       return function (level, msg) {
         if (shouldLog(level)) {
           logFn(msg);
         }
       };
     }
     
     module.exports = function (level, msg) {
       if (shouldLog(level)) {
         if (level === "info") {
           console.log(msg);
         } else if (level === "warning") {
           console.warn(msg);
         } else if (level === "error") {
           console.error(msg);
         }
       }
     };
     /* eslint-disable node/no-unsupported-features/node-builtins */
     
     
     var group = console.group || dummy;
     var groupCollapsed = console.groupCollapsed || dummy;
     var groupEnd = console.groupEnd || dummy;
     /* eslint-enable node/no-unsupported-features/node-builtins */
     
     module.exports.group = logGroup(group);
     module.exports.groupCollapsed = logGroup(groupCollapsed);
     module.exports.groupEnd = logGroup(groupEnd);
     
     module.exports.setLogLevel = function (level) {
       logLevel = level;
     };
     
     module.exports.formatError = function (err) {
       var message = err.message;
       var stack = err.stack;
     
       if (!stack) {
         return message;
       } else if (stack.indexOf(message) < 0) {
         return message + "\n" + stack;
       } else {
         return stack;
       }
     };
     
     /***/ }),
     
     /***/ "./src/classes/Animation.js":
     /*!**********************************!*\
       !*** ./src/classes/Animation.js ***!
       \**********************************/
     /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
     
     "use strict";
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
     
     /***/ }),
     
     /***/ "./src/classes/Loader.js":
     /*!*******************************!*\
       !*** ./src/classes/Loader.js ***!
       \*******************************/
     /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
     
     "use strict";
     __webpack_require__.r(__webpack_exports__);
     /* harmony export */ __webpack_require__.d(__webpack_exports__, {
     /* harmony export */   "default": () => (/* binding */ Loader)
     /* harmony export */ });
     /* harmony import */ var _maeertin_medialoaded__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @maeertin/medialoaded */ "./node_modules/@maeertin/medialoaded/index.js");
     /* harmony import */ var _maeertin_medialoaded__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_maeertin_medialoaded__WEBPACK_IMPORTED_MODULE_0__);
      ////////////////////////////////////////////////////////////////
     //
     //  LOADER
     //
     ////////////////////////////////////////////////////////////////
     
     class Loader {
       constructor() {
         this.loadMedia();
       }
     
       loadMedia() {
         const preloadImg = new Promise(resolve => {});
         const elements = document.querySelectorAll(".video");
         console.log(elements);
         _maeertin_medialoaded__WEBPACK_IMPORTED_MODULE_0___default()(elements, instance => {
           console.log("All media loaded", instance);
         });
         let allDone = [preloadImg];
         Promise.all(allDone).then(() => {
           console.log("MEDIA LOADED");
         });
       }
     
     }
     
     /***/ }),
     
     /***/ "./src/classes/Navigation.js":
     /*!***********************************!*\
       !*** ./src/classes/Navigation.js ***!
       \***********************************/
     /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
     
     "use strict";
     __webpack_require__.r(__webpack_exports__);
     /* harmony export */ __webpack_require__.d(__webpack_exports__, {
     /* harmony export */   "default": () => (/* binding */ Navigation)
     /* harmony export */ });
     /* harmony import */ var _utils_responsive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/responsive */ "./src/utils/responsive.js");
     /* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
     
      // import { transition } from "../index";
     ////////////////////////////////////////////////////////////////
     //
     //  MENU
     //
     ////////////////////////////////////////////////////////////////
     
     class Navigation {
       constructor() {
         this.menu = document.querySelector("#menu");
         this.menu_trigger = document.querySelector("#menu_trigger");
         this.menu_status = "off";
         this.menu_animation_time = 1;
         this.menu_ease = "power2.inOut";
         this.primary_menu = document.querySelector("#primary-menu");
         this.li_list = this.primary_menu.querySelectorAll("li");
         this.home_url = document.querySelector("#logo").href;
         this.menuTrigger();
       }
     
       menuTrigger() {
         this.menu_trigger.addEventListener("click", e => {
           if (this.menu_trigger.classList.contains("active")) {
             this.closeMenu();
           } else {
             this.menu_trigger.classList.add("active");
             this.menu_status = "on";
             this.openMenu();
           }
         });
       }
     
       openMenu() {
         this.menu_trigger.classList.add("active");
         this.menu_status = "on";
         gsap__WEBPACK_IMPORTED_MODULE_1__["default"].to("#menu", {
           duration: this.menu_animation_time,
           ease: this.menu_ease,
           height: "100%"
         });
         gsap__WEBPACK_IMPORTED_MODULE_1__["default"].fromTo("#menu li a", {
           yPercent: -100
         }, {
           delay: 0.5,
           duration: 0.8,
           ease: "power3.out",
           yPercent: 0,
           stagger: 0.1
         });
       }
     
       closeMenu() {
         this.menu_trigger.classList.remove("active");
         this.menu_status = "off";
         gsap__WEBPACK_IMPORTED_MODULE_1__["default"].to("#menu", {
           duration: this.menu_animation_time,
           ease: this.menu_ease,
           height: 0
         });
       }
     
       test() {
         if (_utils_responsive__WEBPACK_IMPORTED_MODULE_0__.rsp(RSP_MD)) {
           console.log("BIGGER THAN MOBILE");
         }
       }
     
     }
     
     /***/ }),
     
     /***/ "./src/classes/RAF.js":
     /*!****************************!*\
       !*** ./src/classes/RAF.js ***!
       \****************************/
     /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
     
     "use strict";
     __webpack_require__.r(__webpack_exports__);
     /* harmony export */ __webpack_require__.d(__webpack_exports__, {
     /* harmony export */   "default": () => (/* binding */ RAF)
     /* harmony export */ });
     /* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");
      ////////////////////////////////////////////////////////////////
     //
     //  RAF
     //
     ////////////////////////////////////////////////////////////////
     
     class RAF {
       constructor() {}
     
       render() {
         _index__WEBPACK_IMPORTED_MODULE_0__.scroll.info();
         _index__WEBPACK_IMPORTED_MODULE_0__.scroll.optimisation();
         window.requestAnimationFrame(this.render.bind(this));
       }
     
     }
     
     /***/ }),
     
     /***/ "./src/classes/Scroll.js":
     /*!*******************************!*\
       !*** ./src/classes/Scroll.js ***!
       \*******************************/
     /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
     
     "use strict";
     __webpack_require__.r(__webpack_exports__);
     /* harmony export */ __webpack_require__.d(__webpack_exports__, {
     /* harmony export */   "default": () => (/* binding */ Scroll)
     /* harmony export */ });
     /* harmony import */ var locomotive_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! locomotive-scroll */ "./node_modules/locomotive-scroll/dist/locomotive-scroll.esm.js");
     /* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ "./src/index.js");
      // import gsap from 'gsap';
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
           el: document.querySelector("[data-scroll-container]"),
           smooth: true,
           lerp: 0.09,
           multiplier: 2,
           scrollFromAnywhere: true,
           getSpeed: true
         });
         console.log(this.scroll);
       }
     
       reset() {
         // this.scroll.scroll.instance.scroll.y = 0;
         this.scroll.update();
         this.scroll.scrollTo("top", {
           duration: 0,
           disableLerp: true
         });
         setTimeout(() => {
           this.scroll.update();
         }, 200);
       }
     
       scrollto(target) {
         this.scroll.scrollTo(target, {
           callback: function () {},
           duration: 1000,
           easing: [0.25, 0.0, 0.35, 1.0],
           disableLerp: true
         });
       }
     
       info() {
         console.log('ya'); // console.log(this.scroll.scroll.instance.scroll.y);
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
     
     /***/ "./src/classes/Transition.js":
     /*!***********************************!*\
       !*** ./src/classes/Transition.js ***!
       \***********************************/
     /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
     
     "use strict";
     __webpack_require__.r(__webpack_exports__);
     /* harmony export */ __webpack_require__.d(__webpack_exports__, {
     /* harmony export */   "default": () => (/* binding */ Transition)
     /* harmony export */ });
     /* harmony import */ var _barba_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @barba/core */ "./node_modules/@barba/core/dist/barba.umd.js");
     /* harmony import */ var _barba_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_barba_core__WEBPACK_IMPORTED_MODULE_0__);
     /* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ "./src/index.js");
      // import gsap from 'gsap';
     
      // import { animation } from '../index';
     // import { navigation } from '../index';
     
      ////////////////////////////////////////////////////////////////
     //
     //  TRANSITIONS
     //
     ////////////////////////////////////////////////////////////////
     
     class Transition {
       constructor() {
         this.init();
       }
     
       init() {
         let that = this;
         _barba_core__WEBPACK_IMPORTED_MODULE_0___default().init({
           debug: true,
           transitions: [{
             ////////////////////////////////////////////////////////////////
             //
             //  DEFAULT
             //
             ////////////////////////////////////////////////////////////////
             name: "default-transition",
     
             leave(data) {//
               // console.log('LEAVE');
             },
     
             enter(data) {//
               // console.log('ENTER');
             },
     
             after(data) {
               //
               // console.log('AFTER');
               _index__WEBPACK_IMPORTED_MODULE_1__.videoblock.startAutoplay();
               _index__WEBPACK_IMPORTED_MODULE_1__.videoblock.coverAction();
               _index__WEBPACK_IMPORTED_MODULE_1__.scroll.reset();
             }
     
           }]
         });
       }
     
       link(link_) {
         let link = link_;
         _barba_core__WEBPACK_IMPORTED_MODULE_0___default().go(link);
       }
     
     }
     
     /***/ }),
     
     /***/ "./src/classes/Videoblock.js":
     /*!***********************************!*\
       !*** ./src/classes/Videoblock.js ***!
       \***********************************/
     /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
     
     "use strict";
     __webpack_require__.r(__webpack_exports__);
     /* harmony export */ __webpack_require__.d(__webpack_exports__, {
     /* harmony export */   "default": () => (/* binding */ Videoblock)
     /* harmony export */ });
     /* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
      ////////////////////////////////////////////////////////////////
     //
     //  VIDEO BLOCK
     //
     ////////////////////////////////////////////////////////////////
     
     class Videoblock {
       constructor() {
         this.startAutoplay();
         this.coverAction();
       }
     
       startAutoplay() {
         let video_list = document.querySelectorAll(".block_video .video");
         video_list.forEach(o => {
           o.play();
         });
       }
     
       coverAction() {
         let video_list = document.querySelectorAll(".block_video .cover");
         video_list.forEach(o => {
           let parent = o.parentNode;
           let embedded = parent.querySelector(".embedded iframe");
           o.addEventListener("pointerdown", event => {
             embedded.src += "&autoplay=1";
             this.hideCover(o);
           });
         });
       }
     
       hideCover(target_) {
         let t = target_;
         gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(t, {
           duration: 1,
           ease: "power2.inOut",
           opacity: 0,
           onComplete: () => {
             t.remove();
           }
         });
       }
     
     }
     
     /***/ }),
     
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
     __webpack_require__.g.RSP_XXL = 1600;
     
     /***/ }),
     
     /***/ "./src/index.js":
     /*!**********************!*\
       !*** ./src/index.js ***!
       \**********************/
     /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
     
     "use strict";
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
     
     /***/ }),
     
     /***/ "./src/utils/responsive.js":
     /*!*********************************!*\
       !*** ./src/utils/responsive.js ***!
       \*********************************/
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
     /******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
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
     /******/ 		try {
     /******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
     /******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
     /******/ 			module = execOptions.module;
     /******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
     /******/ 		} catch(e) {
     /******/ 			module.error = e;
     /******/ 			throw e;
     /******/ 		}
     /******/ 	
     /******/ 		// Return the exports of the module
     /******/ 		return module.exports;
     /******/ 	}
     /******/ 	
     /******/ 	// expose the modules object (__webpack_modules__)
     /******/ 	__webpack_require__.m = __webpack_modules__;
     /******/ 	
     /******/ 	// expose the module cache
     /******/ 	__webpack_require__.c = __webpack_module_cache__;
     /******/ 	
     /******/ 	// expose the module execution interceptor
     /******/ 	__webpack_require__.i = [];
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
     /******/ 	/* webpack/runtime/get javascript update chunk filename */
     /******/ 	(() => {
     /******/ 		// This function allow to reference all chunks
     /******/ 		__webpack_require__.hu = (chunkId) => {
     /******/ 			// return url for filenames based on template
     /******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
     /******/ 		};
     /******/ 	})();
     /******/ 	
     /******/ 	/* webpack/runtime/get mini-css chunk filename */
     /******/ 	(() => {
     /******/ 		// This function allow to reference async chunks
     /******/ 		__webpack_require__.miniCssF = (chunkId) => {
     /******/ 			// return url for filenames based on template
     /******/ 			return undefined;
     /******/ 		};
     /******/ 	})();
     /******/ 	
     /******/ 	/* webpack/runtime/get update manifest filename */
     /******/ 	(() => {
     /******/ 		__webpack_require__.hmrF = () => ("app." + __webpack_require__.h() + ".hot-update.json");
     /******/ 	})();
     /******/ 	
     /******/ 	/* webpack/runtime/getFullHash */
     /******/ 	(() => {
     /******/ 		__webpack_require__.h = () => ("bf845d5fac85944e8c15")
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
     /******/ 	/* webpack/runtime/load script */
     /******/ 	(() => {
     /******/ 		var inProgress = {};
     /******/ 		var dataWebpackPrefix = "zinebdjardi:";
     /******/ 		// loadScript function to load a script via script tag
     /******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
     /******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
     /******/ 			var script, needAttach;
     /******/ 			if(key !== undefined) {
     /******/ 				var scripts = document.getElementsByTagName("script");
     /******/ 				for(var i = 0; i < scripts.length; i++) {
     /******/ 					var s = scripts[i];
     /******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
     /******/ 				}
     /******/ 			}
     /******/ 			if(!script) {
     /******/ 				needAttach = true;
     /******/ 				script = document.createElement('script');
     /******/ 		
     /******/ 				script.charset = 'utf-8';
     /******/ 				script.timeout = 120;
     /******/ 				if (__webpack_require__.nc) {
     /******/ 					script.setAttribute("nonce", __webpack_require__.nc);
     /******/ 				}
     /******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
     /******/ 				script.src = url;
     /******/ 			}
     /******/ 			inProgress[url] = [done];
     /******/ 			var onScriptComplete = (prev, event) => {
     /******/ 				// avoid mem leaks in IE.
     /******/ 				script.onerror = script.onload = null;
     /******/ 				clearTimeout(timeout);
     /******/ 				var doneFns = inProgress[url];
     /******/ 				delete inProgress[url];
     /******/ 				script.parentNode && script.parentNode.removeChild(script);
     /******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
     /******/ 				if(prev) return prev(event);
     /******/ 			}
     /******/ 			;
     /******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
     /******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
     /******/ 			script.onload = onScriptComplete.bind(null, script.onload);
     /******/ 			needAttach && document.head.appendChild(script);
     /******/ 		};
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
     /******/ 	/* webpack/runtime/hot module replacement */
     /******/ 	(() => {
     /******/ 		var currentModuleData = {};
     /******/ 		var installedModules = __webpack_require__.c;
     /******/ 		
     /******/ 		// module and require creation
     /******/ 		var currentChildModule;
     /******/ 		var currentParents = [];
     /******/ 		
     /******/ 		// status
     /******/ 		var registeredStatusHandlers = [];
     /******/ 		var currentStatus = "idle";
     /******/ 		
     /******/ 		// while downloading
     /******/ 		var blockingPromises = 0;
     /******/ 		var blockingPromisesWaiting = [];
     /******/ 		
     /******/ 		// The update info
     /******/ 		var currentUpdateApplyHandlers;
     /******/ 		var queuedInvalidatedModules;
     /******/ 		
     /******/ 		// eslint-disable-next-line no-unused-vars
     /******/ 		__webpack_require__.hmrD = currentModuleData;
     /******/ 		
     /******/ 		__webpack_require__.i.push(function (options) {
     /******/ 			var module = options.module;
     /******/ 			var require = createRequire(options.require, options.id);
     /******/ 			module.hot = createModuleHotObject(options.id, module);
     /******/ 			module.parents = currentParents;
     /******/ 			module.children = [];
     /******/ 			currentParents = [];
     /******/ 			options.require = require;
     /******/ 		});
     /******/ 		
     /******/ 		__webpack_require__.hmrC = {};
     /******/ 		__webpack_require__.hmrI = {};
     /******/ 		
     /******/ 		function createRequire(require, moduleId) {
     /******/ 			var me = installedModules[moduleId];
     /******/ 			if (!me) return require;
     /******/ 			var fn = function (request) {
     /******/ 				if (me.hot.active) {
     /******/ 					if (installedModules[request]) {
     /******/ 						var parents = installedModules[request].parents;
     /******/ 						if (parents.indexOf(moduleId) === -1) {
     /******/ 							parents.push(moduleId);
     /******/ 						}
     /******/ 					} else {
     /******/ 						currentParents = [moduleId];
     /******/ 						currentChildModule = request;
     /******/ 					}
     /******/ 					if (me.children.indexOf(request) === -1) {
     /******/ 						me.children.push(request);
     /******/ 					}
     /******/ 				} else {
     /******/ 					console.warn(
     /******/ 						"[HMR] unexpected require(" +
     /******/ 							request +
     /******/ 							") from disposed module " +
     /******/ 							moduleId
     /******/ 					);
     /******/ 					currentParents = [];
     /******/ 				}
     /******/ 				return require(request);
     /******/ 			};
     /******/ 			var createPropertyDescriptor = function (name) {
     /******/ 				return {
     /******/ 					configurable: true,
     /******/ 					enumerable: true,
     /******/ 					get: function () {
     /******/ 						return require[name];
     /******/ 					},
     /******/ 					set: function (value) {
     /******/ 						require[name] = value;
     /******/ 					}
     /******/ 				};
     /******/ 			};
     /******/ 			for (var name in require) {
     /******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
     /******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
     /******/ 				}
     /******/ 			}
     /******/ 			fn.e = function (chunkId) {
     /******/ 				return trackBlockingPromise(require.e(chunkId));
     /******/ 			};
     /******/ 			return fn;
     /******/ 		}
     /******/ 		
     /******/ 		function createModuleHotObject(moduleId, me) {
     /******/ 			var _main = currentChildModule !== moduleId;
     /******/ 			var hot = {
     /******/ 				// private stuff
     /******/ 				_acceptedDependencies: {},
     /******/ 				_acceptedErrorHandlers: {},
     /******/ 				_declinedDependencies: {},
     /******/ 				_selfAccepted: false,
     /******/ 				_selfDeclined: false,
     /******/ 				_selfInvalidated: false,
     /******/ 				_disposeHandlers: [],
     /******/ 				_main: _main,
     /******/ 				_requireSelf: function () {
     /******/ 					currentParents = me.parents.slice();
     /******/ 					currentChildModule = _main ? undefined : moduleId;
     /******/ 					__webpack_require__(moduleId);
     /******/ 				},
     /******/ 		
     /******/ 				// Module API
     /******/ 				active: true,
     /******/ 				accept: function (dep, callback, errorHandler) {
     /******/ 					if (dep === undefined) hot._selfAccepted = true;
     /******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
     /******/ 					else if (typeof dep === "object" && dep !== null) {
     /******/ 						for (var i = 0; i < dep.length; i++) {
     /******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
     /******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
     /******/ 						}
     /******/ 					} else {
     /******/ 						hot._acceptedDependencies[dep] = callback || function () {};
     /******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
     /******/ 					}
     /******/ 				},
     /******/ 				decline: function (dep) {
     /******/ 					if (dep === undefined) hot._selfDeclined = true;
     /******/ 					else if (typeof dep === "object" && dep !== null)
     /******/ 						for (var i = 0; i < dep.length; i++)
     /******/ 							hot._declinedDependencies[dep[i]] = true;
     /******/ 					else hot._declinedDependencies[dep] = true;
     /******/ 				},
     /******/ 				dispose: function (callback) {
     /******/ 					hot._disposeHandlers.push(callback);
     /******/ 				},
     /******/ 				addDisposeHandler: function (callback) {
     /******/ 					hot._disposeHandlers.push(callback);
     /******/ 				},
     /******/ 				removeDisposeHandler: function (callback) {
     /******/ 					var idx = hot._disposeHandlers.indexOf(callback);
     /******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
     /******/ 				},
     /******/ 				invalidate: function () {
     /******/ 					this._selfInvalidated = true;
     /******/ 					switch (currentStatus) {
     /******/ 						case "idle":
     /******/ 							currentUpdateApplyHandlers = [];
     /******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
     /******/ 								__webpack_require__.hmrI[key](
     /******/ 									moduleId,
     /******/ 									currentUpdateApplyHandlers
     /******/ 								);
     /******/ 							});
     /******/ 							setStatus("ready");
     /******/ 							break;
     /******/ 						case "ready":
     /******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
     /******/ 								__webpack_require__.hmrI[key](
     /******/ 									moduleId,
     /******/ 									currentUpdateApplyHandlers
     /******/ 								);
     /******/ 							});
     /******/ 							break;
     /******/ 						case "prepare":
     /******/ 						case "check":
     /******/ 						case "dispose":
     /******/ 						case "apply":
     /******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
     /******/ 								moduleId
     /******/ 							);
     /******/ 							break;
     /******/ 						default:
     /******/ 							// ignore requests in error states
     /******/ 							break;
     /******/ 					}
     /******/ 				},
     /******/ 		
     /******/ 				// Management API
     /******/ 				check: hotCheck,
     /******/ 				apply: hotApply,
     /******/ 				status: function (l) {
     /******/ 					if (!l) return currentStatus;
     /******/ 					registeredStatusHandlers.push(l);
     /******/ 				},
     /******/ 				addStatusHandler: function (l) {
     /******/ 					registeredStatusHandlers.push(l);
     /******/ 				},
     /******/ 				removeStatusHandler: function (l) {
     /******/ 					var idx = registeredStatusHandlers.indexOf(l);
     /******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
     /******/ 				},
     /******/ 		
     /******/ 				//inherit from previous dispose call
     /******/ 				data: currentModuleData[moduleId]
     /******/ 			};
     /******/ 			currentChildModule = undefined;
     /******/ 			return hot;
     /******/ 		}
     /******/ 		
     /******/ 		function setStatus(newStatus) {
     /******/ 			currentStatus = newStatus;
     /******/ 			var results = [];
     /******/ 		
     /******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
     /******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
     /******/ 		
     /******/ 			return Promise.all(results);
     /******/ 		}
     /******/ 		
     /******/ 		function unblock() {
     /******/ 			if (--blockingPromises === 0) {
     /******/ 				setStatus("ready").then(function () {
     /******/ 					if (blockingPromises === 0) {
     /******/ 						var list = blockingPromisesWaiting;
     /******/ 						blockingPromisesWaiting = [];
     /******/ 						for (var i = 0; i < list.length; i++) {
     /******/ 							list[i]();
     /******/ 						}
     /******/ 					}
     /******/ 				});
     /******/ 			}
     /******/ 		}
     /******/ 		
     /******/ 		function trackBlockingPromise(promise) {
     /******/ 			switch (currentStatus) {
     /******/ 				case "ready":
     /******/ 					setStatus("prepare");
     /******/ 				/* fallthrough */
     /******/ 				case "prepare":
     /******/ 					blockingPromises++;
     /******/ 					promise.then(unblock, unblock);
     /******/ 					return promise;
     /******/ 				default:
     /******/ 					return promise;
     /******/ 			}
     /******/ 		}
     /******/ 		
     /******/ 		function waitForBlockingPromises(fn) {
     /******/ 			if (blockingPromises === 0) return fn();
     /******/ 			return new Promise(function (resolve) {
     /******/ 				blockingPromisesWaiting.push(function () {
     /******/ 					resolve(fn());
     /******/ 				});
     /******/ 			});
     /******/ 		}
     /******/ 		
     /******/ 		function hotCheck(applyOnUpdate) {
     /******/ 			if (currentStatus !== "idle") {
     /******/ 				throw new Error("check() is only allowed in idle status");
     /******/ 			}
     /******/ 			return setStatus("check")
     /******/ 				.then(__webpack_require__.hmrM)
     /******/ 				.then(function (update) {
     /******/ 					if (!update) {
     /******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
     /******/ 							function () {
     /******/ 								return null;
     /******/ 							}
     /******/ 						);
     /******/ 					}
     /******/ 		
     /******/ 					return setStatus("prepare").then(function () {
     /******/ 						var updatedModules = [];
     /******/ 						currentUpdateApplyHandlers = [];
     /******/ 		
     /******/ 						return Promise.all(
     /******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
     /******/ 								promises,
     /******/ 								key
     /******/ 							) {
     /******/ 								__webpack_require__.hmrC[key](
     /******/ 									update.c,
     /******/ 									update.r,
     /******/ 									update.m,
     /******/ 									promises,
     /******/ 									currentUpdateApplyHandlers,
     /******/ 									updatedModules
     /******/ 								);
     /******/ 								return promises;
     /******/ 							},
     /******/ 							[])
     /******/ 						).then(function () {
     /******/ 							return waitForBlockingPromises(function () {
     /******/ 								if (applyOnUpdate) {
     /******/ 									return internalApply(applyOnUpdate);
     /******/ 								} else {
     /******/ 									return setStatus("ready").then(function () {
     /******/ 										return updatedModules;
     /******/ 									});
     /******/ 								}
     /******/ 							});
     /******/ 						});
     /******/ 					});
     /******/ 				});
     /******/ 		}
     /******/ 		
     /******/ 		function hotApply(options) {
     /******/ 			if (currentStatus !== "ready") {
     /******/ 				return Promise.resolve().then(function () {
     /******/ 					throw new Error(
     /******/ 						"apply() is only allowed in ready status (state: " +
     /******/ 							currentStatus +
     /******/ 							")"
     /******/ 					);
     /******/ 				});
     /******/ 			}
     /******/ 			return internalApply(options);
     /******/ 		}
     /******/ 		
     /******/ 		function internalApply(options) {
     /******/ 			options = options || {};
     /******/ 		
     /******/ 			applyInvalidatedModules();
     /******/ 		
     /******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
     /******/ 				return handler(options);
     /******/ 			});
     /******/ 			currentUpdateApplyHandlers = undefined;
     /******/ 		
     /******/ 			var errors = results
     /******/ 				.map(function (r) {
     /******/ 					return r.error;
     /******/ 				})
     /******/ 				.filter(Boolean);
     /******/ 		
     /******/ 			if (errors.length > 0) {
     /******/ 				return setStatus("abort").then(function () {
     /******/ 					throw errors[0];
     /******/ 				});
     /******/ 			}
     /******/ 		
     /******/ 			// Now in "dispose" phase
     /******/ 			var disposePromise = setStatus("dispose");
     /******/ 		
     /******/ 			results.forEach(function (result) {
     /******/ 				if (result.dispose) result.dispose();
     /******/ 			});
     /******/ 		
     /******/ 			// Now in "apply" phase
     /******/ 			var applyPromise = setStatus("apply");
     /******/ 		
     /******/ 			var error;
     /******/ 			var reportError = function (err) {
     /******/ 				if (!error) error = err;
     /******/ 			};
     /******/ 		
     /******/ 			var outdatedModules = [];
     /******/ 			results.forEach(function (result) {
     /******/ 				if (result.apply) {
     /******/ 					var modules = result.apply(reportError);
     /******/ 					if (modules) {
     /******/ 						for (var i = 0; i < modules.length; i++) {
     /******/ 							outdatedModules.push(modules[i]);
     /******/ 						}
     /******/ 					}
     /******/ 				}
     /******/ 			});
     /******/ 		
     /******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
     /******/ 				// handle errors in accept handlers and self accepted module load
     /******/ 				if (error) {
     /******/ 					return setStatus("fail").then(function () {
     /******/ 						throw error;
     /******/ 					});
     /******/ 				}
     /******/ 		
     /******/ 				if (queuedInvalidatedModules) {
     /******/ 					return internalApply(options).then(function (list) {
     /******/ 						outdatedModules.forEach(function (moduleId) {
     /******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
     /******/ 						});
     /******/ 						return list;
     /******/ 					});
     /******/ 				}
     /******/ 		
     /******/ 				return setStatus("idle").then(function () {
     /******/ 					return outdatedModules;
     /******/ 				});
     /******/ 			});
     /******/ 		}
     /******/ 		
     /******/ 		function applyInvalidatedModules() {
     /******/ 			if (queuedInvalidatedModules) {
     /******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
     /******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
     /******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
     /******/ 						__webpack_require__.hmrI[key](
     /******/ 							moduleId,
     /******/ 							currentUpdateApplyHandlers
     /******/ 						);
     /******/ 					});
     /******/ 				});
     /******/ 				queuedInvalidatedModules = undefined;
     /******/ 				return true;
     /******/ 			}
     /******/ 		}
     /******/ 	})();
     /******/ 	
     /******/ 	/* webpack/runtime/publicPath */
     /******/ 	(() => {
     /******/ 		var scriptUrl;
     /******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
     /******/ 		var document = __webpack_require__.g.document;
     /******/ 		if (!scriptUrl && document) {
     /******/ 			if (document.currentScript)
     /******/ 				scriptUrl = document.currentScript.src
     /******/ 			if (!scriptUrl) {
     /******/ 				var scripts = document.getElementsByTagName("script");
     /******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
     /******/ 			}
     /******/ 		}
     /******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
     /******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
     /******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
     /******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
     /******/ 		__webpack_require__.p = scriptUrl;
     /******/ 	})();
     /******/ 	
     /******/ 	/* webpack/runtime/css loading */
     /******/ 	(() => {
     /******/ 		var createStylesheet = (chunkId, fullhref, resolve, reject) => {
     /******/ 			var linkTag = document.createElement("link");
     /******/ 		
     /******/ 			linkTag.rel = "stylesheet";
     /******/ 			linkTag.type = "text/css";
     /******/ 			var onLinkComplete = (event) => {
     /******/ 				// avoid mem leaks.
     /******/ 				linkTag.onerror = linkTag.onload = null;
     /******/ 				if (event.type === 'load') {
     /******/ 					resolve();
     /******/ 				} else {
     /******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
     /******/ 					var realHref = event && event.target && event.target.href || fullhref;
     /******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
     /******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
     /******/ 					err.type = errorType;
     /******/ 					err.request = realHref;
     /******/ 					linkTag.parentNode.removeChild(linkTag)
     /******/ 					reject(err);
     /******/ 				}
     /******/ 			}
     /******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
     /******/ 			linkTag.href = fullhref;
     /******/ 		
     /******/ 			document.head.appendChild(linkTag);
     /******/ 			return linkTag;
     /******/ 		};
     /******/ 		var findStylesheet = (href, fullhref) => {
     /******/ 			var existingLinkTags = document.getElementsByTagName("link");
     /******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
     /******/ 				var tag = existingLinkTags[i];
     /******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
     /******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
     /******/ 			}
     /******/ 			var existingStyleTags = document.getElementsByTagName("style");
     /******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
     /******/ 				var tag = existingStyleTags[i];
     /******/ 				var dataHref = tag.getAttribute("data-href");
     /******/ 				if(dataHref === href || dataHref === fullhref) return tag;
     /******/ 			}
     /******/ 		};
     /******/ 		var loadStylesheet = (chunkId) => {
     /******/ 			return new Promise((resolve, reject) => {
     /******/ 				var href = __webpack_require__.miniCssF(chunkId);
     /******/ 				var fullhref = __webpack_require__.p + href;
     /******/ 				if(findStylesheet(href, fullhref)) return resolve();
     /******/ 				createStylesheet(chunkId, fullhref, resolve, reject);
     /******/ 			});
     /******/ 		}
     /******/ 		// no chunk loading
     /******/ 		
     /******/ 		var oldTags = [];
     /******/ 		var newTags = [];
     /******/ 		var applyHandler = (options) => {
     /******/ 			return { dispose: () => {
     /******/ 				for(var i = 0; i < oldTags.length; i++) {
     /******/ 					var oldTag = oldTags[i];
     /******/ 					if(oldTag.parentNode) oldTag.parentNode.removeChild(oldTag);
     /******/ 				}
     /******/ 				oldTags.length = 0;
     /******/ 			}, apply: () => {
     /******/ 				for(var i = 0; i < newTags.length; i++) newTags[i].rel = "stylesheet";
     /******/ 				newTags.length = 0;
     /******/ 			} };
     /******/ 		}
     /******/ 		__webpack_require__.hmrC.miniCss = (chunkIds, removedChunks, removedModules, promises, applyHandlers, updatedModulesList) => {
     /******/ 			applyHandlers.push(applyHandler);
     /******/ 			chunkIds.forEach((chunkId) => {
     /******/ 				var href = __webpack_require__.miniCssF(chunkId);
     /******/ 				var fullhref = __webpack_require__.p + href;
     /******/ 				var oldTag = findStylesheet(href, fullhref);
     /******/ 				if(!oldTag) return;
     /******/ 				promises.push(new Promise((resolve, reject) => {
     /******/ 					var tag = createStylesheet(chunkId, fullhref, () => {
     /******/ 						tag.as = "style";
     /******/ 						tag.rel = "preload";
     /******/ 						resolve();
     /******/ 					}, reject);
     /******/ 					oldTags.push(oldTag);
     /******/ 					newTags.push(tag);
     /******/ 				}));
     /******/ 			});
     /******/ 		}
     /******/ 	})();
     /******/ 	
     /******/ 	/* webpack/runtime/jsonp chunk loading */
     /******/ 	(() => {
     /******/ 		// no baseURI
     /******/ 		
     /******/ 		// object to store loaded and loading chunks
     /******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
     /******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
     /******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
     /******/ 			"app": 0
     /******/ 		};
     /******/ 		
     /******/ 		// no chunk on demand loading
     /******/ 		
     /******/ 		// no prefetching
     /******/ 		
     /******/ 		// no preloaded
     /******/ 		
     /******/ 		var currentUpdatedModulesList;
     /******/ 		var waitingUpdateResolves = {};
     /******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
     /******/ 			currentUpdatedModulesList = updatedModulesList;
     /******/ 			return new Promise((resolve, reject) => {
     /******/ 				waitingUpdateResolves[chunkId] = resolve;
     /******/ 				// start update chunk loading
     /******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
     /******/ 				// create error before stack unwound to get useful stacktrace later
     /******/ 				var error = new Error();
     /******/ 				var loadingEnded = (event) => {
     /******/ 					if(waitingUpdateResolves[chunkId]) {
     /******/ 						waitingUpdateResolves[chunkId] = undefined
     /******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
     /******/ 						var realSrc = event && event.target && event.target.src;
     /******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
     /******/ 						error.name = 'ChunkLoadError';
     /******/ 						error.type = errorType;
     /******/ 						error.request = realSrc;
     /******/ 						reject(error);
     /******/ 					}
     /******/ 				};
     /******/ 				__webpack_require__.l(url, loadingEnded);
     /******/ 			});
     /******/ 		}
     /******/ 		
     /******/ 		self["webpackHotUpdatezinebdjardi"] = (chunkId, moreModules, runtime) => {
     /******/ 			for(var moduleId in moreModules) {
     /******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
     /******/ 					currentUpdate[moduleId] = moreModules[moduleId];
     /******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
     /******/ 				}
     /******/ 			}
     /******/ 			if(runtime) currentUpdateRuntime.push(runtime);
     /******/ 			if(waitingUpdateResolves[chunkId]) {
     /******/ 				waitingUpdateResolves[chunkId]();
     /******/ 				waitingUpdateResolves[chunkId] = undefined;
     /******/ 			}
     /******/ 		};
     /******/ 		
     /******/ 		var currentUpdateChunks;
     /******/ 		var currentUpdate;
     /******/ 		var currentUpdateRemovedChunks;
     /******/ 		var currentUpdateRuntime;
     /******/ 		function applyHandler(options) {
     /******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
     /******/ 			currentUpdateChunks = undefined;
     /******/ 			function getAffectedModuleEffects(updateModuleId) {
     /******/ 				var outdatedModules = [updateModuleId];
     /******/ 				var outdatedDependencies = {};
     /******/ 		
     /******/ 				var queue = outdatedModules.map(function (id) {
     /******/ 					return {
     /******/ 						chain: [id],
     /******/ 						id: id
     /******/ 					};
     /******/ 				});
     /******/ 				while (queue.length > 0) {
     /******/ 					var queueItem = queue.pop();
     /******/ 					var moduleId = queueItem.id;
     /******/ 					var chain = queueItem.chain;
     /******/ 					var module = __webpack_require__.c[moduleId];
     /******/ 					if (
     /******/ 						!module ||
     /******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
     /******/ 					)
     /******/ 						continue;
     /******/ 					if (module.hot._selfDeclined) {
     /******/ 						return {
     /******/ 							type: "self-declined",
     /******/ 							chain: chain,
     /******/ 							moduleId: moduleId
     /******/ 						};
     /******/ 					}
     /******/ 					if (module.hot._main) {
     /******/ 						return {
     /******/ 							type: "unaccepted",
     /******/ 							chain: chain,
     /******/ 							moduleId: moduleId
     /******/ 						};
     /******/ 					}
     /******/ 					for (var i = 0; i < module.parents.length; i++) {
     /******/ 						var parentId = module.parents[i];
     /******/ 						var parent = __webpack_require__.c[parentId];
     /******/ 						if (!parent) continue;
     /******/ 						if (parent.hot._declinedDependencies[moduleId]) {
     /******/ 							return {
     /******/ 								type: "declined",
     /******/ 								chain: chain.concat([parentId]),
     /******/ 								moduleId: moduleId,
     /******/ 								parentId: parentId
     /******/ 							};
     /******/ 						}
     /******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
     /******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
     /******/ 							if (!outdatedDependencies[parentId])
     /******/ 								outdatedDependencies[parentId] = [];
     /******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
     /******/ 							continue;
     /******/ 						}
     /******/ 						delete outdatedDependencies[parentId];
     /******/ 						outdatedModules.push(parentId);
     /******/ 						queue.push({
     /******/ 							chain: chain.concat([parentId]),
     /******/ 							id: parentId
     /******/ 						});
     /******/ 					}
     /******/ 				}
     /******/ 		
     /******/ 				return {
     /******/ 					type: "accepted",
     /******/ 					moduleId: updateModuleId,
     /******/ 					outdatedModules: outdatedModules,
     /******/ 					outdatedDependencies: outdatedDependencies
     /******/ 				};
     /******/ 			}
     /******/ 		
     /******/ 			function addAllToSet(a, b) {
     /******/ 				for (var i = 0; i < b.length; i++) {
     /******/ 					var item = b[i];
     /******/ 					if (a.indexOf(item) === -1) a.push(item);
     /******/ 				}
     /******/ 			}
     /******/ 		
     /******/ 			// at begin all updates modules are outdated
     /******/ 			// the "outdated" status can propagate to parents if they don't accept the children
     /******/ 			var outdatedDependencies = {};
     /******/ 			var outdatedModules = [];
     /******/ 			var appliedUpdate = {};
     /******/ 		
     /******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
     /******/ 				console.warn(
     /******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
     /******/ 				);
     /******/ 			};
     /******/ 		
     /******/ 			for (var moduleId in currentUpdate) {
     /******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
     /******/ 					var newModuleFactory = currentUpdate[moduleId];
     /******/ 					/** @type {TODO} */
     /******/ 					var result;
     /******/ 					if (newModuleFactory) {
     /******/ 						result = getAffectedModuleEffects(moduleId);
     /******/ 					} else {
     /******/ 						result = {
     /******/ 							type: "disposed",
     /******/ 							moduleId: moduleId
     /******/ 						};
     /******/ 					}
     /******/ 					/** @type {Error|false} */
     /******/ 					var abortError = false;
     /******/ 					var doApply = false;
     /******/ 					var doDispose = false;
     /******/ 					var chainInfo = "";
     /******/ 					if (result.chain) {
     /******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
     /******/ 					}
     /******/ 					switch (result.type) {
     /******/ 						case "self-declined":
     /******/ 							if (options.onDeclined) options.onDeclined(result);
     /******/ 							if (!options.ignoreDeclined)
     /******/ 								abortError = new Error(
     /******/ 									"Aborted because of self decline: " +
     /******/ 										result.moduleId +
     /******/ 										chainInfo
     /******/ 								);
     /******/ 							break;
     /******/ 						case "declined":
     /******/ 							if (options.onDeclined) options.onDeclined(result);
     /******/ 							if (!options.ignoreDeclined)
     /******/ 								abortError = new Error(
     /******/ 									"Aborted because of declined dependency: " +
     /******/ 										result.moduleId +
     /******/ 										" in " +
     /******/ 										result.parentId +
     /******/ 										chainInfo
     /******/ 								);
     /******/ 							break;
     /******/ 						case "unaccepted":
     /******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
     /******/ 							if (!options.ignoreUnaccepted)
     /******/ 								abortError = new Error(
     /******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
     /******/ 								);
     /******/ 							break;
     /******/ 						case "accepted":
     /******/ 							if (options.onAccepted) options.onAccepted(result);
     /******/ 							doApply = true;
     /******/ 							break;
     /******/ 						case "disposed":
     /******/ 							if (options.onDisposed) options.onDisposed(result);
     /******/ 							doDispose = true;
     /******/ 							break;
     /******/ 						default:
     /******/ 							throw new Error("Unexception type " + result.type);
     /******/ 					}
     /******/ 					if (abortError) {
     /******/ 						return {
     /******/ 							error: abortError
     /******/ 						};
     /******/ 					}
     /******/ 					if (doApply) {
     /******/ 						appliedUpdate[moduleId] = newModuleFactory;
     /******/ 						addAllToSet(outdatedModules, result.outdatedModules);
     /******/ 						for (moduleId in result.outdatedDependencies) {
     /******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
     /******/ 								if (!outdatedDependencies[moduleId])
     /******/ 									outdatedDependencies[moduleId] = [];
     /******/ 								addAllToSet(
     /******/ 									outdatedDependencies[moduleId],
     /******/ 									result.outdatedDependencies[moduleId]
     /******/ 								);
     /******/ 							}
     /******/ 						}
     /******/ 					}
     /******/ 					if (doDispose) {
     /******/ 						addAllToSet(outdatedModules, [result.moduleId]);
     /******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
     /******/ 					}
     /******/ 				}
     /******/ 			}
     /******/ 			currentUpdate = undefined;
     /******/ 		
     /******/ 			// Store self accepted outdated modules to require them later by the module system
     /******/ 			var outdatedSelfAcceptedModules = [];
     /******/ 			for (var j = 0; j < outdatedModules.length; j++) {
     /******/ 				var outdatedModuleId = outdatedModules[j];
     /******/ 				var module = __webpack_require__.c[outdatedModuleId];
     /******/ 				if (
     /******/ 					module &&
     /******/ 					(module.hot._selfAccepted || module.hot._main) &&
     /******/ 					// removed self-accepted modules should not be required
     /******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
     /******/ 					// when called invalidate self-accepting is not possible
     /******/ 					!module.hot._selfInvalidated
     /******/ 				) {
     /******/ 					outdatedSelfAcceptedModules.push({
     /******/ 						module: outdatedModuleId,
     /******/ 						require: module.hot._requireSelf,
     /******/ 						errorHandler: module.hot._selfAccepted
     /******/ 					});
     /******/ 				}
     /******/ 			}
     /******/ 		
     /******/ 			var moduleOutdatedDependencies;
     /******/ 		
     /******/ 			return {
     /******/ 				dispose: function () {
     /******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
     /******/ 						delete installedChunks[chunkId];
     /******/ 					});
     /******/ 					currentUpdateRemovedChunks = undefined;
     /******/ 		
     /******/ 					var idx;
     /******/ 					var queue = outdatedModules.slice();
     /******/ 					while (queue.length > 0) {
     /******/ 						var moduleId = queue.pop();
     /******/ 						var module = __webpack_require__.c[moduleId];
     /******/ 						if (!module) continue;
     /******/ 		
     /******/ 						var data = {};
     /******/ 		
     /******/ 						// Call dispose handlers
     /******/ 						var disposeHandlers = module.hot._disposeHandlers;
     /******/ 						for (j = 0; j < disposeHandlers.length; j++) {
     /******/ 							disposeHandlers[j].call(null, data);
     /******/ 						}
     /******/ 						__webpack_require__.hmrD[moduleId] = data;
     /******/ 		
     /******/ 						// disable module (this disables requires from this module)
     /******/ 						module.hot.active = false;
     /******/ 		
     /******/ 						// remove module from cache
     /******/ 						delete __webpack_require__.c[moduleId];
     /******/ 		
     /******/ 						// when disposing there is no need to call dispose handler
     /******/ 						delete outdatedDependencies[moduleId];
     /******/ 		
     /******/ 						// remove "parents" references from all children
     /******/ 						for (j = 0; j < module.children.length; j++) {
     /******/ 							var child = __webpack_require__.c[module.children[j]];
     /******/ 							if (!child) continue;
     /******/ 							idx = child.parents.indexOf(moduleId);
     /******/ 							if (idx >= 0) {
     /******/ 								child.parents.splice(idx, 1);
     /******/ 							}
     /******/ 						}
     /******/ 					}
     /******/ 		
     /******/ 					// remove outdated dependency from module children
     /******/ 					var dependency;
     /******/ 					for (var outdatedModuleId in outdatedDependencies) {
     /******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
     /******/ 							module = __webpack_require__.c[outdatedModuleId];
     /******/ 							if (module) {
     /******/ 								moduleOutdatedDependencies =
     /******/ 									outdatedDependencies[outdatedModuleId];
     /******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
     /******/ 									dependency = moduleOutdatedDependencies[j];
     /******/ 									idx = module.children.indexOf(dependency);
     /******/ 									if (idx >= 0) module.children.splice(idx, 1);
     /******/ 								}
     /******/ 							}
     /******/ 						}
     /******/ 					}
     /******/ 				},
     /******/ 				apply: function (reportError) {
     /******/ 					// insert new code
     /******/ 					for (var updateModuleId in appliedUpdate) {
     /******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
     /******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
     /******/ 						}
     /******/ 					}
     /******/ 		
     /******/ 					// run new runtime modules
     /******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
     /******/ 						currentUpdateRuntime[i](__webpack_require__);
     /******/ 					}
     /******/ 		
     /******/ 					// call accept handlers
     /******/ 					for (var outdatedModuleId in outdatedDependencies) {
     /******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
     /******/ 							var module = __webpack_require__.c[outdatedModuleId];
     /******/ 							if (module) {
     /******/ 								moduleOutdatedDependencies =
     /******/ 									outdatedDependencies[outdatedModuleId];
     /******/ 								var callbacks = [];
     /******/ 								var errorHandlers = [];
     /******/ 								var dependenciesForCallbacks = [];
     /******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
     /******/ 									var dependency = moduleOutdatedDependencies[j];
     /******/ 									var acceptCallback =
     /******/ 										module.hot._acceptedDependencies[dependency];
     /******/ 									var errorHandler =
     /******/ 										module.hot._acceptedErrorHandlers[dependency];
     /******/ 									if (acceptCallback) {
     /******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
     /******/ 										callbacks.push(acceptCallback);
     /******/ 										errorHandlers.push(errorHandler);
     /******/ 										dependenciesForCallbacks.push(dependency);
     /******/ 									}
     /******/ 								}
     /******/ 								for (var k = 0; k < callbacks.length; k++) {
     /******/ 									try {
     /******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
     /******/ 									} catch (err) {
     /******/ 										if (typeof errorHandlers[k] === "function") {
     /******/ 											try {
     /******/ 												errorHandlers[k](err, {
     /******/ 													moduleId: outdatedModuleId,
     /******/ 													dependencyId: dependenciesForCallbacks[k]
     /******/ 												});
     /******/ 											} catch (err2) {
     /******/ 												if (options.onErrored) {
     /******/ 													options.onErrored({
     /******/ 														type: "accept-error-handler-errored",
     /******/ 														moduleId: outdatedModuleId,
     /******/ 														dependencyId: dependenciesForCallbacks[k],
     /******/ 														error: err2,
     /******/ 														originalError: err
     /******/ 													});
     /******/ 												}
     /******/ 												if (!options.ignoreErrored) {
     /******/ 													reportError(err2);
     /******/ 													reportError(err);
     /******/ 												}
     /******/ 											}
     /******/ 										} else {
     /******/ 											if (options.onErrored) {
     /******/ 												options.onErrored({
     /******/ 													type: "accept-errored",
     /******/ 													moduleId: outdatedModuleId,
     /******/ 													dependencyId: dependenciesForCallbacks[k],
     /******/ 													error: err
     /******/ 												});
     /******/ 											}
     /******/ 											if (!options.ignoreErrored) {
     /******/ 												reportError(err);
     /******/ 											}
     /******/ 										}
     /******/ 									}
     /******/ 								}
     /******/ 							}
     /******/ 						}
     /******/ 					}
     /******/ 		
     /******/ 					// Load self accepted modules
     /******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
     /******/ 						var item = outdatedSelfAcceptedModules[o];
     /******/ 						var moduleId = item.module;
     /******/ 						try {
     /******/ 							item.require(moduleId);
     /******/ 						} catch (err) {
     /******/ 							if (typeof item.errorHandler === "function") {
     /******/ 								try {
     /******/ 									item.errorHandler(err, {
     /******/ 										moduleId: moduleId,
     /******/ 										module: __webpack_require__.c[moduleId]
     /******/ 									});
     /******/ 								} catch (err2) {
     /******/ 									if (options.onErrored) {
     /******/ 										options.onErrored({
     /******/ 											type: "self-accept-error-handler-errored",
     /******/ 											moduleId: moduleId,
     /******/ 											error: err2,
     /******/ 											originalError: err
     /******/ 										});
     /******/ 									}
     /******/ 									if (!options.ignoreErrored) {
     /******/ 										reportError(err2);
     /******/ 										reportError(err);
     /******/ 									}
     /******/ 								}
     /******/ 							} else {
     /******/ 								if (options.onErrored) {
     /******/ 									options.onErrored({
     /******/ 										type: "self-accept-errored",
     /******/ 										moduleId: moduleId,
     /******/ 										error: err
     /******/ 									});
     /******/ 								}
     /******/ 								if (!options.ignoreErrored) {
     /******/ 									reportError(err);
     /******/ 								}
     /******/ 							}
     /******/ 						}
     /******/ 					}
     /******/ 		
     /******/ 					return outdatedModules;
     /******/ 				}
     /******/ 			};
     /******/ 		}
     /******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
     /******/ 			if (!currentUpdate) {
     /******/ 				currentUpdate = {};
     /******/ 				currentUpdateRuntime = [];
     /******/ 				currentUpdateRemovedChunks = [];
     /******/ 				applyHandlers.push(applyHandler);
     /******/ 			}
     /******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
     /******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
     /******/ 			}
     /******/ 		};
     /******/ 		__webpack_require__.hmrC.jsonp = function (
     /******/ 			chunkIds,
     /******/ 			removedChunks,
     /******/ 			removedModules,
     /******/ 			promises,
     /******/ 			applyHandlers,
     /******/ 			updatedModulesList
     /******/ 		) {
     /******/ 			applyHandlers.push(applyHandler);
     /******/ 			currentUpdateChunks = {};
     /******/ 			currentUpdateRemovedChunks = removedChunks;
     /******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
     /******/ 				obj[key] = false;
     /******/ 				return obj;
     /******/ 			}, {});
     /******/ 			currentUpdateRuntime = [];
     /******/ 			chunkIds.forEach(function (chunkId) {
     /******/ 				if (
     /******/ 					__webpack_require__.o(installedChunks, chunkId) &&
     /******/ 					installedChunks[chunkId] !== undefined
     /******/ 				) {
     /******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
     /******/ 					currentUpdateChunks[chunkId] = true;
     /******/ 				} else {
     /******/ 					currentUpdateChunks[chunkId] = false;
     /******/ 				}
     /******/ 			});
     /******/ 			if (__webpack_require__.f) {
     /******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
     /******/ 					if (
     /******/ 						currentUpdateChunks &&
     /******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
     /******/ 						!currentUpdateChunks[chunkId]
     /******/ 					) {
     /******/ 						promises.push(loadUpdateChunk(chunkId));
     /******/ 						currentUpdateChunks[chunkId] = true;
     /******/ 					}
     /******/ 				};
     /******/ 			}
     /******/ 		};
     /******/ 		
     /******/ 		__webpack_require__.hmrM = () => {
     /******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
     /******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
     /******/ 				if(response.status === 404) return; // no update available
     /******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
     /******/ 				return response.json();
     /******/ 			});
     /******/ 		};
     /******/ 		
     /******/ 		// no on chunks loaded
     /******/ 		
     /******/ 		// no jsonp function
     /******/ 	})();
     /******/ 	
     /************************************************************************/
     /******/ 	
     /******/ 	// module cache are used so entry inlining is disabled
     /******/ 	// startup
     /******/ 	// Load entry module and return exports
     /******/ 	__webpack_require__("./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8080&pathname=%2Fws&logging=info&overlay=true&reconnect=10&hot=true&live-reload=true");
     /******/ 	__webpack_require__("./node_modules/webpack/hot/dev-server.js");
     /******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
     /******/ 	
     /******/ })()
     ;