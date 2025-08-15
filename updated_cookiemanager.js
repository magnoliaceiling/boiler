window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }

function getUKParliamentCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

let analyticsConsent = 'denied';
let adConsent = 'denied';

const cookieName = 'uk-parliament.cookie-policy';
const policyCookieValue = getUKParliamentCookie(cookieName);

if (policyCookieValue) {
    try {
        const decodedCookie = atob(policyCookieValue);
        const cookieData = JSON.parse(decodedCookie);
        if (cookieData && cookieData.preferences_set) {
            analyticsConsent = cookieData.analytics ? 'granted' : 'denied';
            adConsent = cookieData.marketing ? 'granted' : 'denied';
        }
    } catch (e) {
        console.error('Error parsing cookie policy:', e);
    }
}

gtag('consent', 'default', {
    'analytics_storage': analyticsConsent,
    'ad_storage': adConsent,
    'ad_user_data': adConsent,
    'ad_personalization': adConsent
});

!(function (n) {
    var r = {};
    function o(e) {
        if (r[e]) return r[e].exports;
        var t = (r[e] = {
            i: e,
            l: !1,
            exports: {},
        });
        return n[e].call(t.exports, t, t.exports, o), (t.l = !0), t.exports;
    }
    (o.m = n),
        (o.c = r),
        (o.d = function (e, t, n) {
            o.o(e, t) ||
                Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: n,
                });
        }),
        (o.r = function (e) {
            "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module",
                }),
                Object.defineProperty(e, "__esModule", {
                    value: !0,
                });
        }),
        (o.t = function (t, e) {
            if ((1 & e && (t = o(t)), 8 & e)) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var n = Object.create(null);
            if (
                (o.r(n),
                Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: t,
                }),
                2 & e && "string" != typeof t)
            )
                for (var r in t)
                    o.d(
                        n,
                        r,
                        function (e) {
                            return t[e];
                        }.bind(null, r)
                    );
            return n;
        }),
        (o.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return o.d(t, "a", t), t;
        }),
        (o.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (o.p = "/"),
        o((o.s = 67));
})([
    function (e, t, n) {
        "use strict";
        var r;
        n.d(t, "a", function () {
            return r;
        }),
            ((t = r = r || {})[(t.Analytics = 0)] = "Analytics"),
            (t[(t.Marketing = 1)] = "Marketing");
    },
    function (e, t) {
        e.exports = function (e) {
            try {
                return !!e();
            } catch (e) {
                return !0;
            }
        };
    },
    function (n, e, t) {
        !function (e) {
            function t(e) {
                return e && e.Math == Math && e;
            }
            n.exports =
                t("object" == typeof globalThis && globalThis) ||
                t("object" == typeof window && window) ||
                t("object" == typeof self && self) ||
                t("object" == typeof e && e) ||
                (function () {
                    return this;
                })() ||
                Function("return this")();
        }.call(this, t(38));
    },
    function (e, t, n) {
        var r = n(2),
            o = n(26),
            i = n(8),
            a = n(46),
            s = n(52),
            n = n(81),
            u = o("wks"),
            c = r.Symbol,
            l = n ? c : (c && c.withoutSetter) || a;
        e.exports = function (e) {
            return (i(u, e) && (s || "string" == typeof u[e])) || (s && i(c, e) ? (u[e] = c[e]) : (u[e] = l("Symbol." + e))), u[e];
        };
    },
    function (e, t, n) {
        var r = n(6);
        e.exports = function (e) {
            if (!r(e)) throw TypeError(String(e) + " is not an object");
            return e;
        };
    },
    function (e, t, n) {
        var c = n(2),
            l = n(39).f,
            f = n(9),
            p = n(12),
            h = n(24),
            d = n(72),
            g = n(78);
        e.exports = function (e, t) {
            var n,
                r,
                o,
                i = e.target,
                a = e.global,
                s = e.stat,
                u = a ? c : s ? c[i] || h(i, {}) : (c[i] || {}).prototype;
            if (u)
                for (n in t) {
                    if (((r = t[n]), (o = e.noTargetGet ? (o = l(u, n)) && o.value : u[n]), !g(a ? n : i + (s ? "." : "#") + n, e.forced) && void 0 !== o)) {
                        if (typeof r == typeof o) continue;
                        d(r, o);
                    }
                    (e.sham || (o && o.sham)) && f(r, "sham", !0), p(u, n, r, e);
                }
        };
    },
    function (e, t) {
        e.exports = function (e) {
            return "object" == typeof e ? null !== e : "function" == typeof e;
        };
    },
    function (e, t, n) {
        n = n(1);
        e.exports = !n(function () {
            return (
                7 !=
                Object.defineProperty({}, 1, {
                    get: function () {
                        return 7;
                    },
                })[1]
            );
        });
    },
    function (e, t, n) {
        var r = n(23),
            o = {}.hasOwnProperty;
        e.exports =
            Object.hasOwn ||
            function (e, t) {
                return o.call(r(e), t);
            };
    },
    function (e, t, n) {
        var r = n(7),
            o = n(10),
            i = n(20);
        e.exports = r
            ? function (e, t, n) {
                  return o.f(e, t, i(1, n));
              }
            : function (e, t, n) {
                  return (e[t] = n), e;
              };
    },
    function (e, t, n) {
        var r = n(7),
            o = n(41),
            i = n(4),
            a = n(22),
            s = Object.defineProperty;
        t.f = r
            ? s
            : function (e, t, n) {
                  if ((i(e), (t = a(t, !0)), i(n), o))
                      try {
                          return s(e, t, n);
                      } catch (e) {}
                  if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
                  return "value" in n && (e[t] = n.value), e;
              };
    },
    function (e, t) {
        var n = {}.toString;
        e.exports = function (e) {
            return n.call(e).slice(8, -1);
        };
    },
    function (e, t, n) {
        var s = n(2),
            u = n(9),
            c = n(8),
            l = n(24),
            r = n(43),
            n = n(44),
            o = n.get,
            f = n.enforce,
            p = String(String).split("String");
        (e.exports = function (e, t, n, r) {
            var o = !!r && !!r.unsafe,
                i = !!r && !!r.enumerable,
                a = !!r && !!r.noTargetGet;
            "function" == typeof n && ("string" != typeof t || c(n, "name") || u(n, "name", t), (r = f(n)).source || (r.source = p.join("string" == typeof t ? t : ""))),
                e !== s ? (o ? !a && e[t] && (i = !0) : delete e[t], i ? (e[t] = n) : u(e, t, n)) : i ? (e[t] = n) : l(t, n);
        })(Function.prototype, "toString", function () {
            return ("function" == typeof this && o(this).source) || r(this);
        });
    },
    function (e, t, n) {
        var r = n(5),
            o = n(7);
        r(
            {
                target: "Object",
                stat: !0,
                forced: !o,
                sham: !o,
            },
            {
                defineProperty: n(10).f,
            }
        );
    },
    function (e, t) {
        e.exports = function (e) {
            if (null == e) throw TypeError("Can't call method on " + e);
            return e;
        };
    },
    function (e, t, n) {
        var r = n(29),
            o = Math.min;
        e.exports = function (e) {
            return 0 < e ? o(r(e), 9007199254740991) : 0;
        };
    },
    function (e, t, n) {
        "use strict";
        var d = n(57),
            r = n(58),
            o = n(26),
            g = n(53),
            y = n(44).get,
            i = n(94),
            a = n(95),
            v = RegExp.prototype.exec,
            m = o("native-string-replace", String.prototype.replace),
            b = v,
            x = ((n = /a/), (o = /b*/g), v.call(n, "a"), v.call(o, "a"), 0 !== n.lastIndex || 0 !== o.lastIndex),
            w = r.UNSUPPORTED_Y || r.BROKEN_CARET,
            k = void 0 !== /()??/.exec("")[1];
        (x || k || w || i || a) &&
            (b = function (e) {
                var t,
                    n,
                    r,
                    o,
                    i,
                    a,
                    s = this,
                    u = y(s),
                    c = u.raw;
                if (c) return (c.lastIndex = s.lastIndex), (h = b.call(c, e)), (s.lastIndex = c.lastIndex), h;
                var l = u.groups,
                    f = w && s.sticky,
                    p = d.call(s),
                    c = s.source,
                    h = 0,
                    u = e;
                if (
                    (f &&
                        (-1 === (p = p.replace("y", "")).indexOf("g") && (p += "g"),
                        (u = String(e).slice(s.lastIndex)),
                        0 < s.lastIndex && (!s.multiline || (s.multiline && "\n" !== e[s.lastIndex - 1])) && ((c = "(?: " + c + ")"), (u = " " + u), h++),
                        (t = new RegExp("^(?:" + c + ")", p))),
                    k && (t = new RegExp("^" + c + "$(?!\\s)", p)),
                    x && (n = s.lastIndex),
                    (r = v.call(f ? t : s, u)),
                    f ? (r ? ((r.input = r.input.slice(h)), (r[0] = r[0].slice(h)), (r.index = s.lastIndex), (s.lastIndex += r[0].length)) : (s.lastIndex = 0)) : x && r && (s.lastIndex = s.global ? r.index + r[0].length : n),
                    k &&
                        r &&
                        1 < r.length &&
                        m.call(r[0], t, function () {
                            for (o = 1; o < arguments.length - 2; o++) void 0 === arguments[o] && (r[o] = void 0);
                        }),
                    r && l)
                )
                    for (r.groups = i = g(null), o = 0; o < l.length; o++) i[(a = l[o])[0]] = r[a[1]];
                return r;
            }),
            (e.exports = b);
    },
    function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return r;
        });
        n(13);
        var o = function e() {
                !(function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                })(this, e),
                    (this.analytics = !1),
                    (this.marketing = !1),
                    (this.preferences_set = !1);
            },
            i = n(18);
        function a(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
            }
        }
        var r = (function () {
            function e() {
                !(function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                })(this, e),
                    (this.cookieName = "uk-parliament.cookie-policy"),
                    (this.policyCookie = new o()),
                    (this.wildcardDomains = ["parliament.uk", "digiminster.com"]),
                    this.init();
            }
            var t, n, r;
            return (
                (t = e),
                (n = [
                    {
                        key: "update",
                        value: function (e, t) {
                            gtag('consent', 'update', {
                                 'analytics_storage': e ? 'granted' : 'denied',
                                'ad_storage': t ? 'granted' : 'denied'
                            });
                            (this.policyCookie = {
                                analytics: e,
                                marketing: t,
                                preferences_set: !0,
                            }),
                                (document.cookie = i.a.buildCookieFromObject(this.cookieName, this.policyCookie, this.wildcardDomains, document.location.hostname));
                        },
                    },
                    {
                        key: "acceptAll",
                        value: function () {
                            gtag('consent', 'update', {
        'analytics_storage': 'granted',
        'ad_storage': 'granted',
         'ad_user_data': 'granted',
    'ad_personalization': 'granted'
    });
                            this.update(!0, !0);
                        },
                    },
                    {
                        key: "rejectAll",
                        value: function () {
                             gtag('consent', 'update', {
        'analytics_storage': 'denied',
        'ad_storage': 'denied',
         'ad_user_data': 'denied',
    'ad_personalization': 'denied'
    });
                            this.update(!1, !1);
                        },
                    },
                    {
                        key: "addDataLayerEvent",
                        value: function (e) {
                            window.hasOwnProperty("dataLayer") &&
                                window.dataLayer.push({
                                    event: e,
                                });
                        },
                    },
                    {
                        key: "init",
                        value: function () {
                            var e;
                            if ("" != i.a.getCookieValue(document.cookie, this.cookieName))
                                try {
                                    this.policyCookie = null !== (e = i.a.getCookieValueObject(document.cookie, this.cookieName)) && void 0 !== e ? e : new o();
                                } catch (e) {
                                    return;
                                }
                        },
                    },
                ]) && a(t.prototype, n),
                r && a(t, r),
                e
            );
        })();
    },
    function (e, t, n) {
        "use strict";
        !function (o) {
            n.d(t, "a", function () {
                return e;
            });
            n(35), n(59), n(60), n(54), n(55), n(56), n(33), n(61), n(63), n(13);
            function i(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            var e = (function () {
                function e() {
                    !(function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    })(this, e);
                }
                var t, n, r;
                return (
                    (t = e),
                    (r = [
                        {
                            key: "getCookieValue",
                            value: function (e, t) {
                                for (var n = "".concat(t, "="), r = decodeURIComponent(e).split(";"), o = 0; o < r.length; o++) {
                                    for (var i = r[o]; " " === i.charAt(0); ) i = i.substring(1);
                                    if (0 === i.indexOf(n)) return i.substring(n.length, i.length);
                                }
                                return "";
                            },
                        },
                        {
                            key: "getCookieValueObject",
                            value: function (e, t) {
                                t = this.getCookieValue(e, t);
                                if (!t) return null;
                                t = o.from(t, "base64").toString("ascii");
                                return JSON.parse(t);
                            },
                        },
                        {
                            key: "buildCookieFromObject",
                            value: function (e, t, n, r) {
                                t = o.from(JSON.stringify(t)).toString("base64");
                                return this.buildCookie(e, t, n, r);
                            },
                        },
                        {
                            key: "buildCookie",
                            value: function (e, t, n, r) {
                                var o = new Date();
                                o.setDate(o.getDate() + 365);
                                var o = "expires=".concat(o.toUTCString()),
                                    i = "".concat(e, "=").concat(t, "; ").concat(o, ";path=/");
                                return (
                                    n.forEach(function (e) {
                                        (e = e.toLowerCase()), -1 < r.toLowerCase().indexOf(e) && (i += ";domain=." + e);
                                    }),
                                    i
                                );
                            },
                        },
                    ]),
                    (n = null) && i(t.prototype, n),
                    r && i(t, r),
                    e
                );
            })();
        }.call(this, n(90).Buffer);
    },
    function (Zt, en, e) {
        var tn;
        /*!
         * jQuery JavaScript Library v3.6.0
         * https://jquery.com/
         *
         * Includes Sizzle.js
         * https://sizzlejs.com/
         *
         * Copyright OpenJS Foundation and other contributors
         * Released under the MIT license
         * https://jquery.org/license
         *
         * Date: 2021-03-02T17:08Z
         */
        !(function (e, t) {
            "use strict";
            "object" == typeof Zt.exports
                ? (Zt.exports = e.document
                      ? t(e, !0)
                      : function (e) {
                            if (!e.document) throw new Error("jQuery requires a window with a document");
                            return t(e);
                        })
                : t(e);
        })("undefined" != typeof window ? window : this, function (k, e) {
            "use strict";
            function g(e) {
                return null != e && e === e.window;
            }
            var t = [],
                n = Object.getPrototypeOf,
                s = t.slice,
                y = t.flat
                    ? function (e) {
                          return t.flat.call(e);
                      }
                    : function (e) {
                          return t.concat.apply([], e);
                      },
                u = t.push,
                o = t.indexOf,
                r = {},
                i = r.toString,
                v = r.hasOwnProperty,
                a = v.toString,
                c = a.call(Object),
                m = {},
                b = function (e) {
                    return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item;
                },
                T = k.document,
                l = {
                    type: !0,
                    src: !0,
                    nonce: !0,
                    noModule: !0,
                };
            function x(e, t, n) {
                var r,
                    o,
                    i = (n = n || T).createElement("script");
                if (((i.text = e), t)) for (r in l) (o = t[r] || (t.getAttribute && t.getAttribute(r))) && i.setAttribute(r, o);
                n.head.appendChild(i).parentNode.removeChild(i);
            }
            function d(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? r[i.call(e)] || "object" : typeof e;
            }
            var C = function (e, t) {
                return new C.fn.init(e, t);
            };
            function f(e) {
                var t = !!e && "length" in e && e.length,
                    n = d(e);
                return !b(e) && !g(e) && ("array" === n || 0 === t || ("number" == typeof t && 0 < t && t - 1 in e));
            }
            (C.fn = C.prototype = {
                jquery: "3.6.0",
                constructor: C,
                length: 0,
                toArray: function () {
                    return s.call(this);
                },
                get: function (e) {
                    return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
                },
                pushStack: function (e) {
                    e = C.merge(this.constructor(), e);
                    return (e.prevObject = this), e;
                },
                each: function (e) {
                    return C.each(this, e);
                },
                map: function (n) {
                    return this.pushStack(
                        C.map(this, function (e, t) {
                            return n.call(e, t, e);
                        })
                    );
                },
                slice: function () {
                    return this.pushStack(s.apply(this, arguments));
                },
                first: function () {
                    return this.eq(0);
                },
                last: function () {
                    return this.eq(-1);
                },
                even: function () {
                    return this.pushStack(
                        C.grep(this, function (e, t) {
                            return (t + 1) % 2;
                        })
                    );
                },
                odd: function () {
                    return this.pushStack(
                        C.grep(this, function (e, t) {
                            return t % 2;
                        })
                    );
                },
                eq: function (e) {
                    var t = this.length,
                        e = +e + (e < 0 ? t : 0);
                    return this.pushStack(0 <= e && e < t ? [this[e]] : []);
                },
                end: function () {
                    return this.prevObject || this.constructor();
                },
                push: u,
                sort: t.sort,
                splice: t.splice,
            }),
                (C.extend = C.fn.extend = function () {
                    var e,
                        t,
                        n,
                        r,
                        o,
                        i = arguments[0] || {},
                        a = 1,
                        s = arguments.length,
                        u = !1;
                    for ("boolean" == typeof i && ((u = i), (i = arguments[a] || {}), a++), "object" == typeof i || b(i) || (i = {}), a === s && ((i = this), a--); a < s; a++)
                        if (null != (e = arguments[a]))
                            for (t in e)
                                (n = e[t]),
                                    "__proto__" !== t &&
                                        i !== n &&
                                        (u && n && (C.isPlainObject(n) || (r = Array.isArray(n)))
                                            ? ((o = i[t]), (o = r && !Array.isArray(o) ? [] : r || C.isPlainObject(o) ? o : {}), (r = !1), (i[t] = C.extend(u, o, n)))
                                            : void 0 !== n && (i[t] = n));
                    return i;
                }),
                C.extend({
                    expando: "jQuery" + ("3.6.0" + Math.random()).replace(/\D/g, ""),
                    isReady: !0,
                    error: function (e) {
                        throw new Error(e);
                    },
                    noop: function () {},
                    isPlainObject: function (e) {
                        return !(!e || "[object Object]" !== i.call(e)) && (!(e = n(e)) || ("function" == typeof (e = v.call(e, "constructor") && e.constructor) && a.call(e) === c));
                    },
                    isEmptyObject: function (e) {
                        for (var t in e) return !1;
                        return !0;
                    },
                    globalEval: function (e, t, n) {
                        x(
                            e,
                            {
                                nonce: t && t.nonce,
                            },
                            n
                        );
                    },
                    each: function (e, t) {
                        var n,
                            r = 0;
                        if (f(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
                        else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                        return e;
                    },
                    makeArray: function (e, t) {
                        t = t || [];
                        return null != e && (f(Object(e)) ? C.merge(t, "string" == typeof e ? [e] : e) : u.call(t, e)), t;
                    },
                    inArray: function (e, t, n) {
                        return null == t ? -1 : o.call(t, e, n);
                    },
                    merge: function (e, t) {
                        for (var n = +t.length, r = 0, o = e.length; r < n; r++) e[o++] = t[r];
                        return (e.length = o), e;
                    },
                    grep: function (e, t, n) {
                        for (var r = [], o = 0, i = e.length, a = !n; o < i; o++) !t(e[o], o) != a && r.push(e[o]);
                        return r;
                    },
                    map: function (e, t, n) {
                        var r,
                            o,
                            i = 0,
                            a = [];
                        if (f(e)) for (r = e.length; i < r; i++) null != (o = t(e[i], i, n)) && a.push(o);
                        else for (i in e) null != (o = t(e[i], i, n)) && a.push(o);
                        return y(a);
                    },
                    guid: 1,
                    support: m,
                }),
                "function" == typeof Symbol && (C.fn[Symbol.iterator] = t[Symbol.iterator]),
                C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
                    r["[object " + t + "]"] = t.toLowerCase();
                });
            var p =
                /*!
                 * Sizzle CSS Selector Engine v2.3.6
                 * https://sizzlejs.com/
                 *
                 * Copyright JS Foundation and other contributors
                 * Released under the MIT license
                 * https://js.foundation/
                 *
                 * Date: 2021-02-16
                 */
                (function (n) {
                    function f(e, t) {
                        return (e = "0x" + e.slice(1) - 65536), t || (e < 0 ? String.fromCharCode(65536 + e) : String.fromCharCode((e >> 10) | 55296, (1023 & e) | 56320));
                    }
                    function r() {
                        k();
                    }
                    var e,
                        p,
                        x,
                        i,
                        o,
                        h,
                        d,
                        g,
                        w,
                        u,
                        c,
                        k,
                        T,
                        a,
                        C,
                        y,
                        s,
                        l,
                        v,
                        E = "sizzle" + +new Date(),
                        m = n.document,
                        A = 0,
                        b = 0,
                        S = ue(),
                        j = ue(),
                        D = ue(),
                        O = ue(),
                        R = function (e, t) {
                            return e === t && (c = !0), 0;
                        },
                        N = {}.hasOwnProperty,
                        t = [],
                        L = t.pop,
                        P = t.push,
                        _ = t.push,
                        M = t.slice,
                        I = function (e, t) {
                            for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                            return -1;
                        },
                        B = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                        q = "[\\x20\\t\\r\\n\\f]",
                        H = "(?:\\\\[\\da-fA-F]{1,6}" + q + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                        U = "\\[" + q + "*(" + H + ")(?:" + q + "*([*^$|!~]?=)" + q + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + q + "*\\]",
                        F = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + U + ")*)|.*)\\)|)",
                        W = new RegExp(q + "+", "g"),
                        Y = new RegExp("^" + q + "+|((?:^|[^\\\\])(?:\\\\.)*)" + q + "+$", "g"),
                        $ = new RegExp("^" + q + "*," + q + "*"),
                        z = new RegExp("^" + q + "*([>+~]|" + q + ")" + q + "*"),
                        V = new RegExp(q + "|>"),
                        X = new RegExp(F),
                        G = new RegExp("^" + H + "$"),
                        J = {
                            ID: new RegExp("^#(" + H + ")"),
                            CLASS: new RegExp("^\\.(" + H + ")"),
                            TAG: new RegExp("^(" + H + "|[*])"),
                            ATTR: new RegExp("^" + U),
                            PSEUDO: new RegExp("^" + F),
                            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + q + "*(even|odd|(([+-]|)(\\d*)n|)" + q + "*(?:([+-]|)" + q + "*(\\d+)|))" + q + "*\\)|)", "i"),
                            bool: new RegExp("^(?:" + B + ")$", "i"),
                            needsContext: new RegExp("^" + q + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + q + "*((?:-\\d)?\\d*)" + q + "*\\)|)(?=[^-]|$)", "i"),
                        },
                        Q = /HTML$/i,
                        K = /^(?:input|select|textarea|button)$/i,
                        Z = /^h\d$/i,
                        ee = /^[^{]+\{\s*\[native \w/,
                        te = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                        ne = /[+~]/,
                        re = new RegExp("\\\\[\\da-fA-F]{1,6}" + q + "?|\\\\([^\\r\\n\\f])", "g"),
                        oe = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                        ie = function (e, t) {
                            return t ? ("\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ") : "\\" + e;
                        },
                        ae = me(
                            function (e) {
                                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
                            },
                            {
                                dir: "parentNode",
                                next: "legend",
                            }
                        );
                    try {
                        _.apply((t = M.call(m.childNodes)), m.childNodes), t[m.childNodes.length].nodeType;
                    } catch (e) {
                        _ = {
                            apply: t.length
                                ? function (e, t) {
                                      P.apply(e, M.call(t));
                                  }
                                : function (e, t) {
                                      for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                                      e.length = n - 1;
                                  },
                        };
                    }
                    function se(t, e, n, r) {
                        var o,
                            i,
                            a,
                            s,
                            u,
                            c,
                            l = e && e.ownerDocument,
                            f = e ? e.nodeType : 9;
                        if (((n = n || []), "string" != typeof t || !t || (1 !== f && 9 !== f && 11 !== f))) return n;
                        if (!r && (k(e), (e = e || T), C)) {
                            if (11 !== f && (s = te.exec(t)))
                                if ((c = s[1])) {
                                    if (9 === f) {
                                        if (!(i = e.getElementById(c))) return n;
                                        if (i.id === c) return n.push(i), n;
                                    } else if (l && (i = l.getElementById(c)) && v(e, i) && i.id === c) return n.push(i), n;
                                } else {
                                    if (s[2]) return _.apply(n, e.getElementsByTagName(t)), n;
                                    if ((c = s[3]) && p.getElementsByClassName && e.getElementsByClassName) return _.apply(n, e.getElementsByClassName(c)), n;
                                }
                            if (p.qsa && !O[t + " "] && (!y || !y.test(t)) && (1 !== f || "object" !== e.nodeName.toLowerCase())) {
                                if (((c = t), (l = e), 1 === f && (V.test(t) || z.test(t)))) {
                                    for (((l = (ne.test(t) && ge(e.parentNode)) || e) === e && p.scope) || ((a = e.getAttribute("id")) ? (a = a.replace(oe, ie)) : e.setAttribute("id", (a = E))), o = (u = h(t)).length; o--; )
                                        u[o] = (a ? "#" + a : ":scope") + " " + ve(u[o]);
                                    c = u.join(",");
                                }
                                try {
                                    return _.apply(n, l.querySelectorAll(c)), n;
                                } catch (e) {
                                    O(t, !0);
                                } finally {
                                    a === E && e.removeAttribute("id");
                                }
                            }
                        }
                        return g(t.replace(Y, "$1"), e, n, r);
                    }
                    function ue() {
                        var n = [];
                        function r(e, t) {
                            return n.push(e + " ") > x.cacheLength && delete r[n.shift()], (r[e + " "] = t);
                        }
                        return r;
                    }
                    function ce(e) {
                        return (e[E] = !0), e;
                    }
                    function le(e) {
                        var t = T.createElement("fieldset");
                        try {
                            return !!e(t);
                        } catch (e) {
                            return !1;
                        } finally {
                            t.parentNode && t.parentNode.removeChild(t);
                        }
                    }
                    function fe(e, t) {
                        for (var n = e.split("|"), r = n.length; r--; ) x.attrHandle[n[r]] = t;
                    }
                    function pe(e, t) {
                        var n = t && e,
                            r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                        if (r) return r;
                        if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
                        return e ? 1 : -1;
                    }
                    function he(t) {
                        return function (e) {
                            return "form" in e
                                ? e.parentNode && !1 === e.disabled
                                    ? "label" in e
                                        ? "label" in e.parentNode
                                            ? e.parentNode.disabled === t
                                            : e.disabled === t
                                        : e.isDisabled === t || (e.isDisabled !== !t && ae(e) === t)
                                    : e.disabled === t
                                : "label" in e && e.disabled === t;
                        };
                    }
                    function de(a) {
                        return ce(function (i) {
                            return (
                                (i = +i),
                                ce(function (e, t) {
                                    for (var n, r = a([], e.length, i), o = r.length; o--; ) e[(n = r[o])] && (e[n] = !(t[n] = e[n]));
                                })
                            );
                        });
                    }
                    function ge(e) {
                        return e && void 0 !== e.getElementsByTagName && e;
                    }
                    for (e in ((p = se.support = {}),
                    (o = se.isXML = function (e) {
                        var t = e && e.namespaceURI,
                            e = e && (e.ownerDocument || e).documentElement;
                        return !Q.test(t || (e && e.nodeName) || "HTML");
                    }),
                    (k = se.setDocument = function (e) {
                        var t,
                            e = e ? e.ownerDocument || e : m;
                        return (
                            e != T &&
                                9 === e.nodeType &&
                                e.documentElement &&
                                ((a = (T = e).documentElement),
                                (C = !o(T)),
                                m != T && (t = T.defaultView) && t.top !== t && (t.addEventListener ? t.addEventListener("unload", r, !1) : t.attachEvent && t.attachEvent("onunload", r)),
                                (p.scope = le(function (e) {
                                    return a.appendChild(e).appendChild(T.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
                                })),
                                (p.attributes = le(function (e) {
                                    return (e.className = "i"), !e.getAttribute("className");
                                })),
                                (p.getElementsByTagName = le(function (e) {
                                    return e.appendChild(T.createComment("")), !e.getElementsByTagName("*").length;
                                })),
                                (p.getElementsByClassName = ee.test(T.getElementsByClassName)),
                                (p.getById = le(function (e) {
                                    return (a.appendChild(e).id = E), !T.getElementsByName || !T.getElementsByName(E).length;
                                })),
                                p.getById
                                    ? ((x.filter.ID = function (e) {
                                          var t = e.replace(re, f);
                                          return function (e) {
                                              return e.getAttribute("id") === t;
                                          };
                                      }),
                                      (x.find.ID = function (e, t) {
                                          if (void 0 !== t.getElementById && C) {
                                              e = t.getElementById(e);
                                              return e ? [e] : [];
                                          }
                                      }))
                                    : ((x.filter.ID = function (e) {
                                          var t = e.replace(re, f);
                                          return function (e) {
                                              e = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                              return e && e.value === t;
                                          };
                                      }),
                                      (x.find.ID = function (e, t) {
                                          if (void 0 !== t.getElementById && C) {
                                              var n,
                                                  r,
                                                  o,
                                                  i = t.getElementById(e);
                                              if (i) {
                                                  if ((n = i.getAttributeNode("id")) && n.value === e) return [i];
                                                  for (o = t.getElementsByName(e), r = 0; (i = o[r++]); ) if ((n = i.getAttributeNode("id")) && n.value === e) return [i];
                                              }
                                              return [];
                                          }
                                      })),
                                (x.find.TAG = p.getElementsByTagName
                                    ? function (e, t) {
                                          return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : p.qsa ? t.querySelectorAll(e) : void 0;
                                      }
                                    : function (e, t) {
                                          var n,
                                              r = [],
                                              o = 0,
                                              i = t.getElementsByTagName(e);
                                          if ("*" !== e) return i;
                                          for (; (n = i[o++]); ) 1 === n.nodeType && r.push(n);
                                          return r;
                                      }),
                                (x.find.CLASS =
                                    p.getElementsByClassName &&
                                    function (e, t) {
                                        if (void 0 !== t.getElementsByClassName && C) return t.getElementsByClassName(e);
                                    }),
                                (s = []),
                                (y = []),
                                (p.qsa = ee.test(T.querySelectorAll)) &&
                                    (le(function (e) {
                                        var t;
                                        (a.appendChild(e).innerHTML = "<a id='" + E + "'></a><select id='" + E + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                            e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + q + "*(?:''|\"\")"),
                                            e.querySelectorAll("[selected]").length || y.push("\\[" + q + "*(?:value|" + B + ")"),
                                            e.querySelectorAll("[id~=" + E + "-]").length || y.push("~="),
                                            (t = T.createElement("input")).setAttribute("name", ""),
                                            e.appendChild(t),
                                            e.querySelectorAll("[name='']").length || y.push("\\[" + q + "*name" + q + "*=" + q + "*(?:''|\"\")"),
                                            e.querySelectorAll(":checked").length || y.push(":checked"),
                                            e.querySelectorAll("a#" + E + "+*").length || y.push(".#.+[+~]"),
                                            e.querySelectorAll("\\\f"),
                                            y.push("[\\r\\n\\f]");
                                    }),
                                    le(function (e) {
                                        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                        var t = T.createElement("input");
                                        t.setAttribute("type", "hidden"),
                                            e.appendChild(t).setAttribute("name", "D"),
                                            e.querySelectorAll("[name=d]").length && y.push("name" + q + "*[*^$|!~]?="),
                                            2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"),
                                            (a.appendChild(e).disabled = !0),
                                            2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"),
                                            e.querySelectorAll("*,:x"),
                                            y.push(",.*:");
                                    })),
                                (p.matchesSelector = ee.test((l = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector))) &&
                                    le(function (e) {
                                        (p.disconnectedMatch = l.call(e, "*")), l.call(e, "[s!='']:x"), s.push("!=", F);
                                    }),
                                (y = y.length && new RegExp(y.join("|"))),
                                (s = s.length && new RegExp(s.join("|"))),
                                (t = ee.test(a.compareDocumentPosition)),
                                (v =
                                    t || ee.test(a.contains)
                                        ? function (e, t) {
                                              var n = 9 === e.nodeType ? e.documentElement : e,
                                                  t = t && t.parentNode;
                                              return e === t || !(!t || 1 !== t.nodeType || !(n.contains ? n.contains(t) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(t)));
                                          }
                                        : function (e, t) {
                                              if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                                              return !1;
                                          }),
                                (R = t
                                    ? function (e, t) {
                                          if (e === t) return (c = !0), 0;
                                          var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                          return (
                                              n ||
                                              (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || (!p.sortDetached && t.compareDocumentPosition(e) === n)
                                                  ? e == T || (e.ownerDocument == m && v(m, e))
                                                      ? -1
                                                      : t == T || (t.ownerDocument == m && v(m, t))
                                                      ? 1
                                                      : u
                                                      ? I(u, e) - I(u, t)
                                                      : 0
                                                  : 4 & n
                                                  ? -1
                                                  : 1)
                                          );
                                      }
                                    : function (e, t) {
                                          if (e === t) return (c = !0), 0;
                                          var n,
                                              r = 0,
                                              o = e.parentNode,
                                              i = t.parentNode,
                                              a = [e],
                                              s = [t];
                                          if (!o || !i) return e == T ? -1 : t == T ? 1 : o ? -1 : i ? 1 : u ? I(u, e) - I(u, t) : 0;
                                          if (o === i) return pe(e, t);
                                          for (n = e; (n = n.parentNode); ) a.unshift(n);
                                          for (n = t; (n = n.parentNode); ) s.unshift(n);
                                          for (; a[r] === s[r]; ) r++;
                                          return r ? pe(a[r], s[r]) : a[r] == m ? -1 : s[r] == m ? 1 : 0;
                                      })),
                            T
                        );
                    }),
                    (se.matches = function (e, t) {
                        return se(e, null, null, t);
                    }),
                    (se.matchesSelector = function (e, t) {
                        if ((k(e), p.matchesSelector && C && !O[t + " "] && (!s || !s.test(t)) && (!y || !y.test(t))))
                            try {
                                var n = l.call(e, t);
                                if (n || p.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return n;
                            } catch (e) {
                                O(t, !0);
                            }
                        return 0 < se(t, T, null, [e]).length;
                    }),
                    (se.contains = function (e, t) {
                        return (e.ownerDocument || e) != T && k(e), v(e, t);
                    }),
                    (se.attr = function (e, t) {
                        (e.ownerDocument || e) != T && k(e);
                        var n = x.attrHandle[t.toLowerCase()],
                            n = n && N.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !C) : void 0;
                        return void 0 !== n ? n : p.attributes || !C ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null;
                    }),
                    (se.escape = function (e) {
                        return (e + "").replace(oe, ie);
                    }),
                    (se.error = function (e) {
                        throw new Error("Syntax error, unrecognized expression: " + e);
                    }),
                    (se.uniqueSort = function (e) {
                        var t,
                            n = [],
                            r = 0,
                            o = 0;
                        if (((c = !p.detectDuplicates), (u = !p.sortStable && e.slice(0)), e.sort(R), c)) {
                            for (; (t = e[o++]); ) t === e[o] && (r = n.push(o));
                            for (; r--; ) e.splice(n[r], 1);
                        }
                        return (u = null), e;
                    }),
                    (i = se.getText = function (e) {
                        var t,
                            n = "",
                            r = 0,
                            o = e.nodeType;
                        if (o) {
                            if (1 === o || 9 === o || 11 === o) {
                                if ("string" == typeof e.textContent) return e.textContent;
                                for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
                            } else if (3 === o || 4 === o) return e.nodeValue;
                        } else for (; (t = e[r++]); ) n += i(t);
                        return n;
                    }),
                    ((x = se.selectors = {
                        cacheLength: 50,
                        createPseudo: ce,
                        match: J,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": {
                                dir: "parentNode",
                                first: !0,
                            },
                            " ": {
                                dir: "parentNode",
                            },
                            "+": {
                                dir: "previousSibling",
                                first: !0,
                            },
                            "~": {
                                dir: "previousSibling",
                            },
                        },
                        preFilter: {
                            ATTR: function (e) {
                                return (e[1] = e[1].replace(re, f)), (e[3] = (e[3] || e[4] || e[5] || "").replace(re, f)), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                            },
                            CHILD: function (e) {
                                return (
                                    (e[1] = e[1].toLowerCase()),
                                    "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))), (e[5] = +(e[7] + e[8] || "odd" === e[3]))) : e[3] && se.error(e[0]),
                                    e
                                );
                            },
                            PSEUDO: function (e) {
                                var t,
                                    n = !e[6] && e[2];
                                return J.CHILD.test(e[0])
                                    ? null
                                    : (e[3] ? (e[2] = e[4] || e[5] || "") : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))), e.slice(0, 3));
                            },
                        },
                        filter: {
                            TAG: function (e) {
                                var t = e.replace(re, f).toLowerCase();
                                return "*" === e
                                    ? function () {
                                          return !0;
                                      }
                                    : function (e) {
                                          return e.nodeName && e.nodeName.toLowerCase() === t;
                                      };
                            },
                            CLASS: function (e) {
                                var t = S[e + " "];
                                return (
                                    t ||
                                    ((t = new RegExp("(^|" + q + ")" + e + "(" + q + "|$)")) &&
                                        S(e, function (e) {
                                            return t.test(("string" == typeof e.className && e.className) || (void 0 !== e.getAttribute && e.getAttribute("class")) || "");
                                        }))
                                );
                            },
                            ATTR: function (t, n, r) {
                                return function (e) {
                                    e = se.attr(e, t);
                                    return null == e
                                        ? "!=" === n
                                        : !n ||
                                              ((e += ""),
                                              "=" === n
                                                  ? e === r
                                                  : "!=" === n
                                                  ? e !== r
                                                  : "^=" === n
                                                  ? r && 0 === e.indexOf(r)
                                                  : "*=" === n
                                                  ? r && -1 < e.indexOf(r)
                                                  : "$=" === n
                                                  ? r && e.slice(-r.length) === r
                                                  : "~=" === n
                                                  ? -1 < (" " + e.replace(W, " ") + " ").indexOf(r)
                                                  : "|=" === n && (e === r || e.slice(0, r.length + 1) === r + "-"));
                                };
                            },
                            CHILD: function (d, e, t, g, y) {
                                var v = "nth" !== d.slice(0, 3),
                                    m = "last" !== d.slice(-4),
                                    b = "of-type" === e;
                                return 1 === g && 0 === y
                                    ? function (e) {
                                          return !!e.parentNode;
                                      }
                                    : function (e, t, n) {
                                          var r,
                                              o,
                                              i,
                                              a,
                                              s,
                                              u,
                                              c = v != m ? "nextSibling" : "previousSibling",
                                              l = e.parentNode,
                                              f = b && e.nodeName.toLowerCase(),
                                              p = !n && !b,
                                              h = !1;
                                          if (l) {
                                              if (v) {
                                                  for (; c; ) {
                                                      for (a = e; (a = a[c]); ) if (b ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                                      u = c = "only" === d && !u && "nextSibling";
                                                  }
                                                  return !0;
                                              }
                                              if (((u = [m ? l.firstChild : l.lastChild]), m && p)) {
                                                  for (
                                                      h = (s = (r = (o = (i = (a = l)[E] || (a[E] = {}))[a.uniqueID] || (i[a.uniqueID] = {}))[d] || [])[0] === A && r[1]) && r[2], a = s && l.childNodes[s];
                                                      (a = (++s && a && a[c]) || (h = s = 0) || u.pop());

                                                  )
                                                      if (1 === a.nodeType && ++h && a === e) {
                                                          o[d] = [A, s, h];
                                                          break;
                                                      }
                                              } else if (!1 === (h = p ? (s = (r = (o = (i = (a = e)[E] || (a[E] = {}))[a.uniqueID] || (i[a.uniqueID] = {}))[d] || [])[0] === A && r[1]) : h))
                                                  for (
                                                      ;
                                                      (a = (++s && a && a[c]) || (h = s = 0) || u.pop()) &&
                                                      ((b ? a.nodeName.toLowerCase() !== f : 1 !== a.nodeType) || !++h || (p && ((o = (i = a[E] || (a[E] = {}))[a.uniqueID] || (i[a.uniqueID] = {}))[d] = [A, h]), a !== e));

                                                  );
                                              return (h -= y) === g || (h % g == 0 && 0 <= h / g);
                                          }
                                      };
                            },
                            PSEUDO: function (e, i) {
                                var t,
                                    a = x.pseudos[e] || x.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                                return a[E]
                                    ? a(i)
                                    : 1 < a.length
                                    ? ((t = [e, e, "", i]),
                                      x.setFilters.hasOwnProperty(e.toLowerCase())
                                          ? ce(function (e, t) {
                                                for (var n, r = a(e, i), o = r.length; o--; ) e[(n = I(e, r[o]))] = !(t[n] = r[o]);
                                            })
                                          : function (e) {
                                                return a(e, 0, t);
                                            })
                                    : a;
                            },
                        },
                        pseudos: {
                            not: ce(function (e) {
                                var r = [],
                                    o = [],
                                    s = d(e.replace(Y, "$1"));
                                return s[E]
                                    ? ce(function (e, t, n, r) {
                                          for (var o, i = s(e, null, r, []), a = e.length; a--; ) (o = i[a]) && (e[a] = !(t[a] = o));
                                      })
                                    : function (e, t, n) {
                                          return (r[0] = e), s(r, null, n, o), (r[0] = null), !o.pop();
                                      };
                            }),
                            has: ce(function (t) {
                                return function (e) {
                                    return 0 < se(t, e).length;
                                };
                            }),
                            contains: ce(function (t) {
                                return (
                                    (t = t.replace(re, f)),
                                    function (e) {
                                        return -1 < (e.textContent || i(e)).indexOf(t);
                                    }
                                );
                            }),
                            lang: ce(function (n) {
                                return (
                                    G.test(n || "") || se.error("unsupported lang: " + n),
                                    (n = n.replace(re, f).toLowerCase()),
                                    function (e) {
                                        var t;
                                        do {
                                            if ((t = C ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
                                        } while ((e = e.parentNode) && 1 === e.nodeType);
                                        return !1;
                                    }
                                );
                            }),
                            target: function (e) {
                                var t = n.location && n.location.hash;
                                return t && t.slice(1) === e.id;
                            },
                            root: function (e) {
                                return e === a;
                            },
                            focus: function (e) {
                                return e === T.activeElement && (!T.hasFocus || T.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                            },
                            enabled: he(!1),
                            disabled: he(!0),
                            checked: function (e) {
                                var t = e.nodeName.toLowerCase();
                                return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
                            },
                            selected: function (e) {
                                return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                            },
                            empty: function (e) {
                                for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                                return !0;
                            },
                            parent: function (e) {
                                return !x.pseudos.empty(e);
                            },
                            header: function (e) {
                                return Z.test(e.nodeName);
                            },
                            input: function (e) {
                                return K.test(e.nodeName);
                            },
                            button: function (e) {
                                var t = e.nodeName.toLowerCase();
                                return ("input" === t && "button" === e.type) || "button" === t;
                            },
                            text: function (e) {
                                return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (e = e.getAttribute("type")) || "text" === e.toLowerCase());
                            },
                            first: de(function () {
                                return [0];
                            }),
                            last: de(function (e, t) {
                                return [t - 1];
                            }),
                            eq: de(function (e, t, n) {
                                return [n < 0 ? n + t : n];
                            }),
                            even: de(function (e, t) {
                                for (var n = 0; n < t; n += 2) e.push(n);
                                return e;
                            }),
                            odd: de(function (e, t) {
                                for (var n = 1; n < t; n += 2) e.push(n);
                                return e;
                            }),
                            lt: de(function (e, t, n) {
                                for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
                                return e;
                            }),
                            gt: de(function (e, t, n) {
                                for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                                return e;
                            }),
                        },
                    }).pseudos.nth = x.pseudos.eq),
                    {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0,
                    }))
                        x.pseudos[e] = (function (t) {
                            return function (e) {
                                return "input" === e.nodeName.toLowerCase() && e.type === t;
                            };
                        })(e);
                    for (e in {
                        submit: !0,
                        reset: !0,
                    })
                        x.pseudos[e] = (function (n) {
                            return function (e) {
                                var t = e.nodeName.toLowerCase();
                                return ("input" === t || "button" === t) && e.type === n;
                            };
                        })(e);
                    function ye() {}
                    function ve(e) {
                        for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                        return r;
                    }
                    function me(a, e, t) {
                        var s = e.dir,
                            u = e.next,
                            c = u || s,
                            l = t && "parentNode" === c,
                            f = b++;
                        return e.first
                            ? function (e, t, n) {
                                  for (; (e = e[s]); ) if (1 === e.nodeType || l) return a(e, t, n);
                                  return !1;
                              }
                            : function (e, t, n) {
                                  var r,
                                      o,
                                      i = [A, f];
                                  if (n) {
                                      for (; (e = e[s]); ) if ((1 === e.nodeType || l) && a(e, t, n)) return !0;
                                  } else
                                      for (; (e = e[s]); )
                                          if (1 === e.nodeType || l)
                                              if (((r = (o = e[E] || (e[E] = {}))[e.uniqueID] || (o[e.uniqueID] = {})), u && u === e.nodeName.toLowerCase())) e = e[s] || e;
                                              else {
                                                  if ((o = r[c]) && o[0] === A && o[1] === f) return (i[2] = o[2]);
                                                  if (((r[c] = i)[2] = a(e, t, n))) return !0;
                                              }
                                  return !1;
                              };
                    }
                    function be(o) {
                        return 1 < o.length
                            ? function (e, t, n) {
                                  for (var r = o.length; r--; ) if (!o[r](e, t, n)) return !1;
                                  return !0;
                              }
                            : o[0];
                    }
                    function xe(e, t, n, r, o) {
                        for (var i, a = [], s = 0, u = e.length, c = null != t; s < u; s++) (i = e[s]) && ((n && !n(i, r, o)) || (a.push(i), c && t.push(s)));
                        return a;
                    }
                    function we(h, d, g, y, v, e) {
                        return (
                            y && !y[E] && (y = we(y)),
                            v && !v[E] && (v = we(v, e)),
                            ce(function (e, t, n, r) {
                                var o,
                                    i,
                                    a,
                                    s = [],
                                    u = [],
                                    c = t.length,
                                    l =
                                        e ||
                                        (function (e, t, n) {
                                            for (var r = 0, o = t.length; r < o; r++) se(e, t[r], n);
                                            return n;
                                        })(d || "*", n.nodeType ? [n] : n, []),
                                    f = !h || (!e && d) ? l : xe(l, s, h, n, r),
                                    p = g ? (v || (e ? h : c || y) ? [] : t) : f;
                                if ((g && g(f, p, n, r), y)) for (o = xe(p, u), y(o, [], n, r), i = o.length; i--; ) (a = o[i]) && (p[u[i]] = !(f[u[i]] = a));
                                if (e) {
                                    if (v || h) {
                                        if (v) {
                                            for (o = [], i = p.length; i--; ) (a = p[i]) && o.push((f[i] = a));
                                            v(null, (p = []), o, r);
                                        }
                                        for (i = p.length; i--; ) (a = p[i]) && -1 < (o = v ? I(e, a) : s[i]) && (e[o] = !(t[o] = a));
                                    }
                                } else (p = xe(p === t ? p.splice(c, p.length) : p)), v ? v(null, t, p, r) : _.apply(t, p);
                            })
                        );
                    }
                    function ke(y, v) {
                        function e(e, t, n, r, o) {
                            var i,
                                a,
                                s,
                                u = 0,
                                c = "0",
                                l = e && [],
                                f = [],
                                p = w,
                                h = e || (b && x.find.TAG("*", o)),
                                d = (A += null == p ? 1 : Math.random() || 0.1),
                                g = h.length;
                            for (o && (w = t == T || t || o); c !== g && null != (i = h[c]); c++) {
                                if (b && i) {
                                    for (a = 0, t || i.ownerDocument == T || (k(i), (n = !C)); (s = y[a++]); )
                                        if (s(i, t || T, n)) {
                                            r.push(i);
                                            break;
                                        }
                                    o && (A = d);
                                }
                                m && ((i = !s && i) && u--, e && l.push(i));
                            }
                            if (((u += c), m && c !== u)) {
                                for (a = 0; (s = v[a++]); ) s(l, f, t, n);
                                if (e) {
                                    if (0 < u) for (; c--; ) l[c] || f[c] || (f[c] = L.call(r));
                                    f = xe(f);
                                }
                                _.apply(r, f), o && !e && 0 < f.length && 1 < u + v.length && se.uniqueSort(r);
                            }
                            return o && ((A = d), (w = p)), l;
                        }
                        var m = 0 < v.length,
                            b = 0 < y.length;
                        return m ? ce(e) : e;
                    }
                    return (
                        (ye.prototype = x.filters = x.pseudos),
                        (x.setFilters = new ye()),
                        (h = se.tokenize = function (e, t) {
                            var n,
                                r,
                                o,
                                i,
                                a,
                                s,
                                u,
                                c = j[e + " "];
                            if (c) return t ? 0 : c.slice(0);
                            for (a = e, s = [], u = x.preFilter; a; ) {
                                for (i in ((n && !(r = $.exec(a))) || (r && (a = a.slice(r[0].length) || a), s.push((o = []))),
                                (n = !1),
                                (r = z.exec(a)) &&
                                    ((n = r.shift()),
                                    o.push({
                                        value: n,
                                        type: r[0].replace(Y, " "),
                                    }),
                                    (a = a.slice(n.length))),
                                x.filter))
                                    !(r = J[i].exec(a)) ||
                                        (u[i] && !(r = u[i](r))) ||
                                        ((n = r.shift()),
                                        o.push({
                                            value: n,
                                            type: i,
                                            matches: r,
                                        }),
                                        (a = a.slice(n.length)));
                                if (!n) break;
                            }
                            return t ? a.length : a ? se.error(e) : j(e, s).slice(0);
                        }),
                        (d = se.compile = function (e, t) {
                            var n,
                                r = [],
                                o = [],
                                i = D[e + " "];
                            if (!i) {
                                for (n = (t = t || h(e)).length; n--; )
                                    ((i = (function e(t) {
                                        for (
                                            var r,
                                                n,
                                                o,
                                                i = t.length,
                                                a = x.relative[t[0].type],
                                                s = a || x.relative[" "],
                                                u = a ? 1 : 0,
                                                c = me(
                                                    function (e) {
                                                        return e === r;
                                                    },
                                                    s,
                                                    !0
                                                ),
                                                l = me(
                                                    function (e) {
                                                        return -1 < I(r, e);
                                                    },
                                                    s,
                                                    !0
                                                ),
                                                f = [
                                                    function (e, t, n) {
                                                        return (n = (!a && (n || t !== w)) || ((r = t).nodeType ? c : l)(e, t, n)), (r = null), n;
                                                    },
                                                ];
                                            u < i;
                                            u++
                                        )
                                            if ((n = x.relative[t[u].type])) f = [me(be(f), n)];
                                            else {
                                                if ((n = x.filter[t[u].type].apply(null, t[u].matches))[E]) {
                                                    for (o = ++u; o < i && !x.relative[t[o].type]; o++);
                                                    return we(
                                                        1 < u && be(f),
                                                        1 < u &&
                                                            ve(
                                                                t.slice(0, u - 1).concat({
                                                                    value: " " === t[u - 2].type ? "*" : "",
                                                                })
                                                            ).replace(Y, "$1"),
                                                        n,
                                                        u < o && e(t.slice(u, o)),
                                                        o < i && e((t = t.slice(o))),
                                                        o < i && ve(t)
                                                    );
                                                }
                                                f.push(n);
                                            }
                                        return be(f);
                                    })(t[n]))[E]
                                        ? r
                                        : o
                                    ).push(i);
                                (i = D(e, ke(o, r))).selector = e;
                            }
                            return i;
                        }),
                        (g = se.select = function (e, t, n, r) {
                            var o,
                                i,
                                a,
                                s,
                                u,
                                c = "function" == typeof e && e,
                                l = !r && h((e = c.selector || e));
                            if (((n = n || []), 1 === l.length)) {
                                if (2 < (i = l[0] = l[0].slice(0)).length && "ID" === (a = i[0]).type && 9 === t.nodeType && C && x.relative[i[1].type]) {
                                    if (!(t = (x.find.ID(a.matches[0].replace(re, f), t) || [])[0])) return n;
                                    c && (t = t.parentNode), (e = e.slice(i.shift().value.length));
                                }
                                for (o = J.needsContext.test(e) ? 0 : i.length; o-- && ((a = i[o]), !x.relative[(s = a.type)]); )
                                    if ((u = x.find[s]) && (r = u(a.matches[0].replace(re, f), (ne.test(i[0].type) && ge(t.parentNode)) || t))) {
                                        if ((i.splice(o, 1), !(e = r.length && ve(i)))) return _.apply(n, r), n;
                                        break;
                                    }
                            }
                            return (c || d(e, l))(r, t, !C, n, !t || (ne.test(e) && ge(t.parentNode)) || t), n;
                        }),
                        (p.sortStable = E.split("").sort(R).join("") === E),
                        (p.detectDuplicates = !!c),
                        k(),
                        (p.sortDetached = le(function (e) {
                            return 1 & e.compareDocumentPosition(T.createElement("fieldset"));
                        })),
                        le(function (e) {
                            return (e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href");
                        }) ||
                            fe("type|href|height|width", function (e, t, n) {
                                if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
                            }),
                        (p.attributes &&
                            le(function (e) {
                                return (e.innerHTML = "<input/>"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
                            })) ||
                            fe("value", function (e, t, n) {
                                if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
                            }),
                        le(function (e) {
                            return null == e.getAttribute("disabled");
                        }) ||
                            fe(B, function (e, t, n) {
                                if (!n) return !0 === e[t] ? t.toLowerCase() : (t = e.getAttributeNode(t)) && t.specified ? t.value : null;
                            }),
                        se
                    );
                })(k);
            (C.find = p), (C.expr = p.selectors), (C.expr[":"] = C.expr.pseudos), (C.uniqueSort = C.unique = p.uniqueSort), (C.text = p.getText), (C.isXMLDoc = p.isXML), (C.contains = p.contains), (C.escapeSelector = p.escape);
            function h(e, t, n) {
                for (var r = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                    if (1 === e.nodeType) {
                        if (o && C(e).is(n)) break;
                        r.push(e);
                    }
                return r;
            }
            function w(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n;
            }
            var E = C.expr.match.needsContext;
            function A(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
            }
            var S = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
            function j(e, n, r) {
                return b(n)
                    ? C.grep(e, function (e, t) {
                          return !!n.call(e, t, e) !== r;
                      })
                    : n.nodeType
                    ? C.grep(e, function (e) {
                          return (e === n) !== r;
                      })
                    : "string" != typeof n
                    ? C.grep(e, function (e) {
                          return -1 < o.call(n, e) !== r;
                      })
                    : C.filter(n, e, r);
            }
            (C.filter = function (e, t, n) {
                var r = t[0];
                return (
                    n && (e = ":not(" + e + ")"),
                    1 === t.length && 1 === r.nodeType
                        ? C.find.matchesSelector(r, e)
                            ? [r]
                            : []
                        : C.find.matches(
                              e,
                              C.grep(t, function (e) {
                                  return 1 === e.nodeType;
                              })
                          )
                );
            }),
                C.fn.extend({
                    find: function (e) {
                        var t,
                            n,
                            r = this.length,
                            o = this;
                        if ("string" != typeof e)
                            return this.pushStack(
                                C(e).filter(function () {
                                    for (t = 0; t < r; t++) if (C.contains(o[t], this)) return !0;
                                })
                            );
                        for (n = this.pushStack([]), t = 0; t < r; t++) C.find(e, o[t], n);
                        return 1 < r ? C.uniqueSort(n) : n;
                    },
                    filter: function (e) {
                        return this.pushStack(j(this, e || [], !1));
                    },
                    not: function (e) {
                        return this.pushStack(j(this, e || [], !0));
                    },
                    is: function (e) {
                        return !!j(this, "string" == typeof e && E.test(e) ? C(e) : e || [], !1).length;
                    },
                });
            var D = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            (C.fn.init = function (e, t, n) {
                if (!e) return this;
                if (((n = n || O), "string" != typeof e)) return e.nodeType ? ((this[0] = e), (this.length = 1), this) : b(e) ? (void 0 !== n.ready ? n.ready(e) : e(C)) : C.makeArray(e, this);
                if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : D.exec(e)) || (!r[1] && t)) return (!t || t.jquery ? t || n : this.constructor(t)).find(e);
                if (r[1]) {
                    if (((t = t instanceof C ? t[0] : t), C.merge(this, C.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : T, !0)), S.test(r[1]) && C.isPlainObject(t)))
                        for (var r in t) b(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this;
                }
                return (e = T.getElementById(r[2])) && ((this[0] = e), (this.length = 1)), this;
            }).prototype = C.fn;
            var O = C(T),
                R = /^(?:parents|prev(?:Until|All))/,
                N = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0,
                };
            function L(e, t) {
                for (; (e = e[t]) && 1 !== e.nodeType; );
                return e;
            }
            C.fn.extend({
                has: function (e) {
                    var t = C(e, this),
                        n = t.length;
                    return this.filter(function () {
                        for (var e = 0; e < n; e++) if (C.contains(this, t[e])) return !0;
                    });
                },
                closest: function (e, t) {
                    var n,
                        r = 0,
                        o = this.length,
                        i = [],
                        a = "string" != typeof e && C(e);
                    if (!E.test(e))
                        for (; r < o; r++)
                            for (n = this[r]; n && n !== t; n = n.parentNode)
                                if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && C.find.matchesSelector(n, e))) {
                                    i.push(n);
                                    break;
                                }
                    return this.pushStack(1 < i.length ? C.uniqueSort(i) : i);
                },
                index: function (e) {
                    return e ? ("string" == typeof e ? o.call(C(e), this[0]) : o.call(this, e.jquery ? e[0] : e)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
                },
                add: function (e, t) {
                    return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))));
                },
                addBack: function (e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
                },
            }),
                C.each(
                    {
                        parent: function (e) {
                            e = e.parentNode;
                            return e && 11 !== e.nodeType ? e : null;
                        },
                        parents: function (e) {
                            return h(e, "parentNode");
                        },
                        parentsUntil: function (e, t, n) {
                            return h(e, "parentNode", n);
                        },
                        next: function (e) {
                            return L(e, "nextSibling");
                        },
                        prev: function (e) {
                            return L(e, "previousSibling");
                        },
                        nextAll: function (e) {
                            return h(e, "nextSibling");
                        },
                        prevAll: function (e) {
                            return h(e, "previousSibling");
                        },
                        nextUntil: function (e, t, n) {
                            return h(e, "nextSibling", n);
                        },
                        prevUntil: function (e, t, n) {
                            return h(e, "previousSibling", n);
                        },
                        siblings: function (e) {
                            return w((e.parentNode || {}).firstChild, e);
                        },
                        children: function (e) {
                            return w(e.firstChild);
                        },
                        contents: function (e) {
                            return null != e.contentDocument && n(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), C.merge([], e.childNodes));
                        },
                    },
                    function (r, o) {
                        C.fn[r] = function (e, t) {
                            var n = C.map(this, o, e);
                            return (t = "Until" !== r.slice(-5) ? e : t) && "string" == typeof t && (n = C.filter(t, n)), 1 < this.length && (N[r] || C.uniqueSort(n), R.test(r) && n.reverse()), this.pushStack(n);
                        };
                    }
                );
            var P = /[^\x20\t\r\n\f]+/g;
            function _(e) {
                return e;
            }
            function M(e) {
                throw e;
            }
            function I(e, t, n, r) {
                var o;
                try {
                    e && b((o = e.promise)) ? o.call(e).done(t).fail(n) : e && b((o = e.then)) ? o.call(e, t, n) : t.apply(void 0, [e].slice(r));
                } catch (e) {
                    n.apply(void 0, [e]);
                }
            }
            (C.Callbacks = function (r) {
                var e, n;
                r =
                    "string" == typeof r
                        ? ((e = r),
                          (n = {}),
                          C.each(e.match(P) || [], function (e, t) {
                              n[t] = !0;
                          }),
                          n)
                        : C.extend({}, r);
                function o() {
                    for (s = s || r.once, a = i = !0; c.length; l = -1) for (t = c.shift(); ++l < u.length; ) !1 === u[l].apply(t[0], t[1]) && r.stopOnFalse && ((l = u.length), (t = !1));
                    r.memory || (t = !1), (i = !1), s && (u = t ? [] : "");
                }
                var i,
                    t,
                    a,
                    s,
                    u = [],
                    c = [],
                    l = -1,
                    f = {
                        add: function () {
                            return (
                                u &&
                                    (t && !i && ((l = u.length - 1), c.push(t)),
                                    (function n(e) {
                                        C.each(e, function (e, t) {
                                            b(t) ? (r.unique && f.has(t)) || u.push(t) : t && t.length && "string" !== d(t) && n(t);
                                        });
                                    })(arguments),
                                    t && !i && o()),
                                this
                            );
                        },
                        remove: function () {
                            return (
                                C.each(arguments, function (e, t) {
                                    for (var n; -1 < (n = C.inArray(t, u, n)); ) u.splice(n, 1), n <= l && l--;
                                }),
                                this
                            );
                        },
                        has: function (e) {
                            return e ? -1 < C.inArray(e, u) : 0 < u.length;
                        },
                        empty: function () {
                            return (u = u && []), this;
                        },
                        disable: function () {
                            return (s = c = []), (u = t = ""), this;
                        },
                        disabled: function () {
                            return !u;
                        },
                        lock: function () {
                            return (s = c = []), t || i || (u = t = ""), this;
                        },
                        locked: function () {
                            return !!s;
                        },
                        fireWith: function (e, t) {
                            return s || ((t = [e, (t = t || []).slice ? t.slice() : t]), c.push(t), i || o()), this;
                        },
                        fire: function () {
                            return f.fireWith(this, arguments), this;
                        },
                        fired: function () {
                            return !!a;
                        },
                    };
                return f;
            }),
                C.extend({
                    Deferred: function (e) {
                        var i = [
                                ["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2],
                                ["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"],
                                ["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"],
                            ],
                            o = "pending",
                            a = {
                                state: function () {
                                    return o;
                                },
                                always: function () {
                                    return s.done(arguments).fail(arguments), this;
                                },
                                catch: function (e) {
                                    return a.then(null, e);
                                },
                                pipe: function () {
                                    var o = arguments;
                                    return C.Deferred(function (r) {
                                        C.each(i, function (e, t) {
                                            var n = b(o[t[4]]) && o[t[4]];
                                            s[t[1]](function () {
                                                var e = n && n.apply(this, arguments);
                                                e && b(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments);
                                            });
                                        }),
                                            (o = null);
                                    }).promise();
                                },
                                then: function (t, n, r) {
                                    var u = 0;
                                    function c(o, i, a, s) {
                                        return function () {
                                            function e() {
                                                var e, t;
                                                if (!(o < u)) {
                                                    if ((e = a.apply(n, r)) === i.promise()) throw new TypeError("Thenable self-resolution");
                                                    (t = e && ("object" == typeof e || "function" == typeof e) && e.then),
                                                        b(t)
                                                            ? s
                                                                ? t.call(e, c(u, i, _, s), c(u, i, M, s))
                                                                : (u++, t.call(e, c(u, i, _, s), c(u, i, M, s), c(u, i, _, i.notifyWith)))
                                                            : (a !== _ && ((n = void 0), (r = [e])), (s || i.resolveWith)(n, r));
                                                }
                                            }
                                            var n = this,
                                                r = arguments,
                                                t = s
                                                    ? e
                                                    : function () {
                                                          try {
                                                              e();
                                                          } catch (e) {
                                                              C.Deferred.exceptionHook && C.Deferred.exceptionHook(e, t.stackTrace), u <= o + 1 && (a !== M && ((n = void 0), (r = [e])), i.rejectWith(n, r));
                                                          }
                                                      };
                                            o ? t() : (C.Deferred.getStackHook && (t.stackTrace = C.Deferred.getStackHook()), k.setTimeout(t));
                                        };
                                    }
                                    return C.Deferred(function (e) {
                                        i[0][3].add(c(0, e, b(r) ? r : _, e.notifyWith)), i[1][3].add(c(0, e, b(t) ? t : _)), i[2][3].add(c(0, e, b(n) ? n : M));
                                    }).promise();
                                },
                                promise: function (e) {
                                    return null != e ? C.extend(e, a) : a;
                                },
                            },
                            s = {};
                        return (
                            C.each(i, function (e, t) {
                                var n = t[2],
                                    r = t[5];
                                (a[t[1]] = n.add),
                                    r &&
                                        n.add(
                                            function () {
                                                o = r;
                                            },
                                            i[3 - e][2].disable,
                                            i[3 - e][3].disable,
                                            i[0][2].lock,
                                            i[0][3].lock
                                        ),
                                    n.add(t[3].fire),
                                    (s[t[0]] = function () {
                                        return s[t[0] + "With"](this === s ? void 0 : this, arguments), this;
                                    }),
                                    (s[t[0] + "With"] = n.fireWith);
                            }),
                            a.promise(s),
                            e && e.call(s, s),
                            s
                        );
                    },
                    when: function (e) {
                        function t(t) {
                            return function (e) {
                                (o[t] = this), (i[t] = 1 < arguments.length ? s.call(arguments) : e), --n || a.resolveWith(o, i);
                            };
                        }
                        var n = arguments.length,
                            r = n,
                            o = Array(r),
                            i = s.call(arguments),
                            a = C.Deferred();
                        if (n <= 1 && (I(e, a.done(t(r)).resolve, a.reject, !n), "pending" === a.state() || b(i[r] && i[r].then))) return a.then();
                        for (; r--; ) I(i[r], t(r), a.reject);
                        return a.promise();
                    },
                });
            var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            (C.Deferred.exceptionHook = function (e, t) {
                k.console && k.console.warn && e && B.test(e.name) && k.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
            }),
                (C.readyException = function (e) {
                    k.setTimeout(function () {
                        throw e;
                    });
                });
            var q = C.Deferred();
            function H() {
                T.removeEventListener("DOMContentLoaded", H), k.removeEventListener("load", H), C.ready();
            }
            (C.fn.ready = function (e) {
                return (
                    q.then(e).catch(function (e) {
                        C.readyException(e);
                    }),
                    this
                );
            }),
                C.extend({
                    isReady: !1,
                    readyWait: 1,
                    ready: function (e) {
                        (!0 === e ? --C.readyWait : C.isReady) || ((C.isReady = !0) !== e && 0 < --C.readyWait) || q.resolveWith(T, [C]);
                    },
                }),
                (C.ready.then = q.then),
                "complete" === T.readyState || ("loading" !== T.readyState && !T.documentElement.doScroll) ? k.setTimeout(C.ready) : (T.addEventListener("DOMContentLoaded", H), k.addEventListener("load", H));
            var U = function (e, t, n, r, o, i, a) {
                    var s = 0,
                        u = e.length,
                        c = null == n;
                    if ("object" === d(n)) for (s in ((o = !0), n)) U(e, t, s, n[s], !0, i, a);
                    else if (
                        void 0 !== r &&
                        ((o = !0),
                        b(r) || (a = !0),
                        (t = c
                            ? a
                                ? (t.call(e, r), null)
                                : ((c = t),
                                  function (e, t, n) {
                                      return c.call(C(e), n);
                                  })
                            : t))
                    )
                        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
                    return o ? e : c ? t.call(e) : u ? t(e[0], n) : i;
                },
                F = /^-ms-/,
                W = /-([a-z])/g;
            function Y(e, t) {
                return t.toUpperCase();
            }
            function $(e) {
                return e.replace(F, "ms-").replace(W, Y);
            }
            function z(e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
            }
            function V() {
                this.expando = C.expando + V.uid++;
            }
            (V.uid = 1),
                (V.prototype = {
                    cache: function (e) {
                        var t = e[this.expando];
                        return (
                            t ||
                                ((t = {}),
                                z(e) &&
                                    (e.nodeType
                                        ? (e[this.expando] = t)
                                        : Object.defineProperty(e, this.expando, {
                                              value: t,
                                              configurable: !0,
                                          }))),
                            t
                        );
                    },
                    set: function (e, t, n) {
                        var r,
                            o = this.cache(e);
                        if ("string" == typeof t) o[$(t)] = n;
                        else for (r in t) o[$(r)] = t[r];
                        return o;
                    },
                    get: function (e, t) {
                        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][$(t)];
                    },
                    access: function (e, t, n) {
                        return void 0 === t || (t && "string" == typeof t && void 0 === n) ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
                    },
                    remove: function (e, t) {
                        var n,
                            r = e[this.expando];
                        if (void 0 !== r) {
                            if (void 0 !== t) {
                                n = (t = Array.isArray(t) ? t.map($) : (t = $(t)) in r ? [t] : t.match(P) || []).length;
                                for (; n--; ) delete r[t[n]];
                            }
                            (void 0 !== t && !C.isEmptyObject(r)) || (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
                        }
                    },
                    hasData: function (e) {
                        e = e[this.expando];
                        return void 0 !== e && !C.isEmptyObject(e);
                    },
                });
            var X = new V(),
                G = new V(),
                J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                Q = /[A-Z]/g;
            function K(e, t, n) {
                var r, o;
                if (void 0 === n && 1 === e.nodeType)
                    if (((r = "data-" + t.replace(Q, "-$&").toLowerCase()), "string" == typeof (n = e.getAttribute(r)))) {
                        try {
                            n = "true" === (o = n) || ("false" !== o && ("null" === o ? null : o === +o + "" ? +o : J.test(o) ? JSON.parse(o) : o));
                        } catch (e) {}
                        G.set(e, t, n);
                    } else n = void 0;
                return n;
            }
            C.extend({
                hasData: function (e) {
                    return G.hasData(e) || X.hasData(e);
                },
                data: function (e, t, n) {
                    return G.access(e, t, n);
                },
                removeData: function (e, t) {
                    G.remove(e, t);
                },
                _data: function (e, t, n) {
                    return X.access(e, t, n);
                },
                _removeData: function (e, t) {
                    X.remove(e, t);
                },
            }),
                C.fn.extend({
                    data: function (n, e) {
                        var t,
                            r,
                            o,
                            i = this[0],
                            a = i && i.attributes;
                        if (void 0 !== n)
                            return "object" == typeof n
                                ? this.each(function () {
                                      G.set(this, n);
                                  })
                                : U(
                                      this,
                                      function (e) {
                                          var t;
                                          return i && void 0 === e
                                              ? void 0 !== (t = G.get(i, n)) || void 0 !== (t = K(i, n))
                                                  ? t
                                                  : void 0
                                              : void this.each(function () {
                                                    G.set(this, n, e);
                                                });
                                      },
                                      null,
                                      e,
                                      1 < arguments.length,
                                      null,
                                      !0
                                  );
                        if (this.length && ((o = G.get(i)), 1 === i.nodeType && !X.get(i, "hasDataAttrs"))) {
                            for (t = a.length; t--; ) a[t] && 0 === (r = a[t].name).indexOf("data-") && ((r = $(r.slice(5))), K(i, r, o[r]));
                            X.set(i, "hasDataAttrs", !0);
                        }
                        return o;
                    },
                    removeData: function (e) {
                        return this.each(function () {
                            G.remove(this, e);
                        });
                    },
                }),
                C.extend({
                    queue: function (e, t, n) {
                        var r;
                        if (e) return (r = X.get(e, (t = (t || "fx") + "queue"))), n && (!r || Array.isArray(n) ? (r = X.access(e, t, C.makeArray(n))) : r.push(n)), r || [];
                    },
                    dequeue: function (e, t) {
                        t = t || "fx";
                        var n = C.queue(e, t),
                            r = n.length,
                            o = n.shift(),
                            i = C._queueHooks(e, t);
                        "inprogress" === o && ((o = n.shift()), r--),
                            o &&
                                ("fx" === t && n.unshift("inprogress"),
                                delete i.stop,
                                o.call(
                                    e,
                                    function () {
                                        C.dequeue(e, t);
                                    },
                                    i
                                )),
                            !r && i && i.empty.fire();
                    },
                    _queueHooks: function (e, t) {
                        var n = t + "queueHooks";
                        return (
                            X.get(e, n) ||
                            X.access(e, n, {
                                empty: C.Callbacks("once memory").add(function () {
                                    X.remove(e, [t + "queue", n]);
                                }),
                            })
                        );
                    },
                }),
                C.fn.extend({
                    queue: function (t, n) {
                        var e = 2;
                        return (
                            "string" != typeof t && ((n = t), (t = "fx"), e--),
                            arguments.length < e
                                ? C.queue(this[0], t)
                                : void 0 === n
                                ? this
                                : this.each(function () {
                                      var e = C.queue(this, t, n);
                                      C._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && C.dequeue(this, t);
                                  })
                        );
                    },
                    dequeue: function (e) {
                        return this.each(function () {
                            C.dequeue(this, e);
                        });
                    },
                    clearQueue: function (e) {
                        return this.queue(e || "fx", []);
                    },
                    promise: function (e, t) {
                        function n() {
                            --o || i.resolveWith(a, [a]);
                        }
                        var r,
                            o = 1,
                            i = C.Deferred(),
                            a = this,
                            s = this.length;
                        for ("string" != typeof e && ((t = e), (e = void 0)), e = e || "fx"; s--; ) (r = X.get(a[s], e + "queueHooks")) && r.empty && (o++, r.empty.add(n));
                        return n(), i.promise(t);
                    },
                });
            var Z = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                ee = new RegExp("^(?:([+-])=|)(" + Z + ")([a-z%]*)$", "i"),
                te = ["Top", "Right", "Bottom", "Left"],
                ne = T.documentElement,
                re = function (e) {
                    return C.contains(e.ownerDocument, e);
                },
                oe = {
                    composed: !0,
                };
            ne.getRootNode &&
                (re = function (e) {
                    return C.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument;
                });
            var ie = function (e, t) {
                return "none" === (e = t || e).style.display || ("" === e.style.display && re(e) && "none" === C.css(e, "display"));
            };
            function ae(e, t, n, r) {
                var o,
                    i,
                    a = 20,
                    s = r
                        ? function () {
                              return r.cur();
                          }
                        : function () {
                              return C.css(e, t, "");
                          },
                    u = s(),
                    c = (n && n[3]) || (C.cssNumber[t] ? "" : "px"),
                    l = e.nodeType && (C.cssNumber[t] || ("px" !== c && +u)) && ee.exec(C.css(e, t));
                if (l && l[3] !== c) {
                    for (c = c || l[3], l = +(u /= 2) || 1; a--; ) C.style(e, t, l + c), (1 - i) * (1 - (i = s() / u || 0.5)) <= 0 && (a = 0), (l /= i);
                    C.style(e, t, (l *= 2) + c), (n = n || []);
                }
                return n && ((l = +l || +u || 0), (o = n[1] ? l + (n[1] + 1) * n[2] : +n[2]), r && ((r.unit = c), (r.start = l), (r.end = o))), o;
            }
            var se = {};
            function ue(e, t) {
                for (var n, r, o, i, a, s = [], u = 0, c = e.length; u < c; u++)
                    (r = e[u]).style &&
                        ((n = r.style.display),
                        t
                            ? ("none" === n && ((s[u] = X.get(r, "display") || null), s[u] || (r.style.display = "")),
                              "" === r.style.display &&
                                  ie(r) &&
                                  (s[u] =
                                      ((a = i = void 0),
                                      (i = (o = r).ownerDocument),
                                      (a = o.nodeName),
                                      (o = se[a]) || ((i = i.body.appendChild(i.createElement(a))), (o = C.css(i, "display")), i.parentNode.removeChild(i), (se[a] = o = "none" === o ? "block" : o)))))
                            : "none" !== n && ((s[u] = "none"), X.set(r, "display", n)));
                for (u = 0; u < c; u++) null != s[u] && (e[u].style.display = s[u]);
                return e;
            }
            C.fn.extend({
                show: function () {
                    return ue(this, !0);
                },
                hide: function () {
                    return ue(this);
                },
                toggle: function (e) {
                    return "boolean" == typeof e
                        ? e
                            ? this.show()
                            : this.hide()
                        : this.each(function () {
                              ie(this) ? C(this).show() : C(this).hide();
                          });
                },
            });
            var ce = /^(?:checkbox|radio)$/i,
                le = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                fe = /^$|^module$|\/(?:java|ecma)script/i;
            (Vt = T.createDocumentFragment().appendChild(T.createElement("div"))),
                (p = T.createElement("input")).setAttribute("type", "radio"),
                p.setAttribute("checked", "checked"),
                p.setAttribute("name", "t"),
                Vt.appendChild(p),
                (m.checkClone = Vt.cloneNode(!0).cloneNode(!0).lastChild.checked),
                (Vt.innerHTML = "<textarea>x</textarea>"),
                (m.noCloneChecked = !!Vt.cloneNode(!0).lastChild.defaultValue),
                (Vt.innerHTML = "<option></option>"),
                (m.option = !!Vt.lastChild);
            var pe = {
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""],
            };
            function he(e, t) {
                var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
                return void 0 === t || (t && A(e, t)) ? C.merge([e], n) : n;
            }
            function de(e, t) {
                for (var n = 0, r = e.length; n < r; n++) X.set(e[n], "globalEval", !t || X.get(t[n], "globalEval"));
            }
            (pe.tbody = pe.tfoot = pe.colgroup = pe.caption = pe.thead), (pe.th = pe.td), m.option || (pe.optgroup = pe.option = [1, "<select multiple='multiple'>", "</select>"]);
            var ge = /<|&#?\w+;/;
            function ye(e, t, n, r, o) {
                for (var i, a, s, u, c, l = t.createDocumentFragment(), f = [], p = 0, h = e.length; p < h; p++)
                    if ((i = e[p]) || 0 === i)
                        if ("object" === d(i)) C.merge(f, i.nodeType ? [i] : i);
                        else if (ge.test(i)) {
                            for (a = a || l.appendChild(t.createElement("div")), s = (le.exec(i) || ["", ""])[1].toLowerCase(), s = pe[s] || pe._default, a.innerHTML = s[1] + C.htmlPrefilter(i) + s[2], c = s[0]; c--; ) a = a.lastChild;
                            C.merge(f, a.childNodes), ((a = l.firstChild).textContent = "");
                        } else f.push(t.createTextNode(i));
                for (l.textContent = "", p = 0; (i = f[p++]); )
                    if (r && -1 < C.inArray(i, r)) o && o.push(i);
                    else if (((u = re(i)), (a = he(l.appendChild(i), "script")), u && de(a), n)) for (c = 0; (i = a[c++]); ) fe.test(i.type || "") && n.push(i);
                return l;
            }
            var ve = /^([^.]*)(?:\.(.+)|)/;
            function me() {
                return !0;
            }
            function be() {
                return !1;
            }
            function xe(e, t) {
                return (
                    (e ===
                        (function () {
                            try {
                                return T.activeElement;
                            } catch (e) {}
                        })()) ==
                    ("focus" === t)
                );
            }
            function we(e, t, n, r, o, i) {
                var a, s;
                if ("object" == typeof t) {
                    for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t)) we(e, s, n, r, t[s], i);
                    return e;
                }
                if ((null == r && null == o ? ((o = n), (r = n = void 0)) : null == o && ("string" == typeof n ? ((o = r), (r = void 0)) : ((o = r), (r = n), (n = void 0))), !1 === o)) o = be;
                else if (!o) return e;
                return (
                    1 === i &&
                        ((a = o),
                        ((o = function (e) {
                            return C().off(e), a.apply(this, arguments);
                        }).guid = a.guid || (a.guid = C.guid++))),
                    e.each(function () {
                        C.event.add(this, t, o, r, n);
                    })
                );
            }
            function ke(e, o, i) {
                i
                    ? (X.set(e, o, !1),
                      C.event.add(e, o, {
                          namespace: !1,
                          handler: function (e) {
                              var t,
                                  n,
                                  r = X.get(this, o);
                              if (1 & e.isTrigger && this[o]) {
                                  if (r.length) (C.event.special[o] || {}).delegateType && e.stopPropagation();
                                  else if (((r = s.call(arguments)), X.set(this, o, r), (t = i(this, o)), this[o](), r !== (n = X.get(this, o)) || t ? X.set(this, o, !1) : (n = {}), r !== n))
                                      return e.stopImmediatePropagation(), e.preventDefault(), n && n.value;
                              } else
                                  r.length &&
                                      (X.set(this, o, {
                                          value: C.event.trigger(C.extend(r[0], C.Event.prototype), r.slice(1), this),
                                      }),
                                      e.stopImmediatePropagation());
                          },
                      }))
                    : void 0 === X.get(e, o) && C.event.add(e, o, me);
            }
            (C.event = {
                global: {},
                add: function (t, e, n, r, o) {
                    var i,
                        a,
                        s,
                        u,
                        c,
                        l,
                        f,
                        p,
                        h,
                        d = X.get(t);
                    if (z(t))
                        for (
                            n.handler && ((n = (i = n).handler), (o = i.selector)),
                                o && C.find.matchesSelector(ne, o),
                                n.guid || (n.guid = C.guid++),
                                (s = d.events) || (s = d.events = Object.create(null)),
                                (a = d.handle) ||
                                    (a = d.handle = function (e) {
                                        return void 0 !== C && C.event.triggered !== e.type ? C.event.dispatch.apply(t, arguments) : void 0;
                                    }),
                                u = (e = (e || "").match(P) || [""]).length;
                            u--;

                        )
                            (f = h = (c = ve.exec(e[u]) || [])[1]),
                                (p = (c[2] || "").split(".").sort()),
                                f &&
                                    ((l = C.event.special[f] || {}),
                                    (f = (o ? l.delegateType : l.bindType) || f),
                                    (l = C.event.special[f] || {}),
                                    (c = C.extend(
                                        {
                                            type: f,
                                            origType: h,
                                            data: r,
                                            handler: n,
                                            guid: n.guid,
                                            selector: o,
                                            needsContext: o && C.expr.match.needsContext.test(o),
                                            namespace: p.join("."),
                                        },
                                        i
                                    )),
                                    (h = s[f]) || (((h = s[f] = []).delegateCount = 0), (l.setup && !1 !== l.setup.call(t, r, p, a)) || (t.addEventListener && t.addEventListener(f, a))),
                                    l.add && (l.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
                                    o ? h.splice(h.delegateCount++, 0, c) : h.push(c),
                                    (C.event.global[f] = !0));
                },
                remove: function (e, t, n, r, o) {
                    var i,
                        a,
                        s,
                        u,
                        c,
                        l,
                        f,
                        p,
                        h,
                        d,
                        g,
                        y = X.hasData(e) && X.get(e);
                    if (y && (u = y.events)) {
                        for (c = (t = (t || "").match(P) || [""]).length; c--; )
                            if (((h = g = (s = ve.exec(t[c]) || [])[1]), (d = (s[2] || "").split(".").sort()), h)) {
                                for (f = C.event.special[h] || {}, p = u[(h = (r ? f.delegateType : f.bindType) || h)] || [], s = s[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = i = p.length; i--; )
                                    (l = p[i]),
                                        (!o && g !== l.origType) ||
                                            (n && n.guid !== l.guid) ||
                                            (s && !s.test(l.namespace)) ||
                                            (r && r !== l.selector && ("**" !== r || !l.selector)) ||
                                            (p.splice(i, 1), l.selector && p.delegateCount--, f.remove && f.remove.call(e, l));
                                a && !p.length && ((f.teardown && !1 !== f.teardown.call(e, d, y.handle)) || C.removeEvent(e, h, y.handle), delete u[h]);
                            } else for (h in u) C.event.remove(e, h + t[c], n, r, !0);
                        C.isEmptyObject(u) && X.remove(e, "handle events");
                    }
                },
                dispatch: function (e) {
                    var t,
                        n,
                        r,
                        o,
                        i,
                        a = new Array(arguments.length),
                        s = C.event.fix(e),
                        u = (X.get(this, "events") || Object.create(null))[s.type] || [],
                        e = C.event.special[s.type] || {};
                    for (a[0] = s, t = 1; t < arguments.length; t++) a[t] = arguments[t];
                    if (((s.delegateTarget = this), !e.preDispatch || !1 !== e.preDispatch.call(this, s))) {
                        for (i = C.event.handlers.call(this, s, u), t = 0; (r = i[t++]) && !s.isPropagationStopped(); )
                            for (s.currentTarget = r.elem, n = 0; (o = r.handlers[n++]) && !s.isImmediatePropagationStopped(); )
                                (s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace)) ||
                                    ((s.handleObj = o), (s.data = o.data), void 0 !== (o = ((C.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a)) && !1 === (s.result = o) && (s.preventDefault(), s.stopPropagation()));
                        return e.postDispatch && e.postDispatch.call(this, s), s.result;
                    }
                },
                handlers: function (e, t) {
                    var n,
                        r,
                        o,
                        i,
                        a,
                        s = [],
                        u = t.delegateCount,
                        c = e.target;
                    if (u && c.nodeType && !("click" === e.type && 1 <= e.button))
                        for (; c !== this; c = c.parentNode || this)
                            if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                                for (i = [], a = {}, n = 0; n < u; n++) void 0 === a[(o = (r = t[n]).selector + " ")] && (a[o] = r.needsContext ? -1 < C(o, this).index(c) : C.find(o, this, null, [c]).length), a[o] && i.push(r);
                                i.length &&
                                    s.push({
                                        elem: c,
                                        handlers: i,
                                    });
                            }
                    return (
                        (c = this),
                        u < t.length &&
                            s.push({
                                elem: c,
                                handlers: t.slice(u),
                            }),
                        s
                    );
                },
                addProp: function (t, e) {
                    Object.defineProperty(C.Event.prototype, t, {
                        enumerable: !0,
                        configurable: !0,
                        get: b(e)
                            ? function () {
                                  if (this.originalEvent) return e(this.originalEvent);
                              }
                            : function () {
                                  if (this.originalEvent) return this.originalEvent[t];
                              },
                        set: function (e) {
                            Object.defineProperty(this, t, {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: e,
                            });
                        },
                    });
                },
                fix: function (e) {
                    return e[C.expando] ? e : new C.Event(e);
                },
                special: {
                    load: {
                        noBubble: !0,
                    },
                    click: {
                        setup: function (e) {
                            e = this || e;
                            return ce.test(e.type) && e.click && A(e, "input") && ke(e, "click", me), !1;
                        },
                        trigger: function (e) {
                            e = this || e;
                            return ce.test(e.type) && e.click && A(e, "input") && ke(e, "click"), !0;
                        },
                        _default: function (e) {
                            e = e.target;
                            return (ce.test(e.type) && e.click && A(e, "input") && X.get(e, "click")) || A(e, "a");
                        },
                    },
                    beforeunload: {
                        postDispatch: function (e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                        },
                    },
                },
            }),
                (C.removeEvent = function (e, t, n) {
                    e.removeEventListener && e.removeEventListener(t, n);
                }),
                (C.Event = function (e, t) {
                    if (!(this instanceof C.Event)) return new C.Event(e, t);
                    e && e.type
                        ? ((this.originalEvent = e),
                          (this.type = e.type),
                          (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? me : be),
                          (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
                          (this.currentTarget = e.currentTarget),
                          (this.relatedTarget = e.relatedTarget))
                        : (this.type = e),
                        t && C.extend(this, t),
                        (this.timeStamp = (e && e.timeStamp) || Date.now()),
                        (this[C.expando] = !0);
                }),
                (C.Event.prototype = {
                    constructor: C.Event,
                    isDefaultPrevented: be,
                    isPropagationStopped: be,
                    isImmediatePropagationStopped: be,
                    isSimulated: !1,
                    preventDefault: function () {
                        var e = this.originalEvent;
                        (this.isDefaultPrevented = me), e && !this.isSimulated && e.preventDefault();
                    },
                    stopPropagation: function () {
                        var e = this.originalEvent;
                        (this.isPropagationStopped = me), e && !this.isSimulated && e.stopPropagation();
                    },
                    stopImmediatePropagation: function () {
                        var e = this.originalEvent;
                        (this.isImmediatePropagationStopped = me), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
                    },
                }),
                C.each(
                    {
                        altKey: !0,
                        bubbles: !0,
                        cancelable: !0,
                        changedTouches: !0,
                        ctrlKey: !0,
                        detail: !0,
                        eventPhase: !0,
                        metaKey: !0,
                        pageX: !0,
                        pageY: !0,
                        shiftKey: !0,
                        view: !0,
                        char: !0,
                        code: !0,
                        charCode: !0,
                        key: !0,
                        keyCode: !0,
                        button: !0,
                        buttons: !0,
                        clientX: !0,
                        clientY: !0,
                        offsetX: !0,
                        offsetY: !0,
                        pointerId: !0,
                        pointerType: !0,
                        screenX: !0,
                        screenY: !0,
                        targetTouches: !0,
                        toElement: !0,
                        touches: !0,
                        which: !0,
                    },
                    C.event.addProp
                ),
                C.each(
                    {
                        focus: "focusin",
                        blur: "focusout",
                    },
                    function (e, t) {
                        C.event.special[e] = {
                            setup: function () {
                                return ke(this, e, xe), !1;
                            },
                            trigger: function () {
                                return ke(this, e), !0;
                            },
                            _default: function () {
                                return !0;
                            },
                            delegateType: t,
                        };
                    }
                ),
                C.each(
                    {
                        mouseenter: "mouseover",
                        mouseleave: "mouseout",
                        pointerenter: "pointerover",
                        pointerleave: "pointerout",
                    },
                    function (e, o) {
                        C.event.special[e] = {
                            delegateType: o,
                            bindType: o,
                            handle: function (e) {
                                var t,
                                    n = e.relatedTarget,
                                    r = e.handleObj;
                                return (n && (n === this || C.contains(this, n))) || ((e.type = r.origType), (t = r.handler.apply(this, arguments)), (e.type = o)), t;
                            },
                        };
                    }
                ),
                C.fn.extend({
                    on: function (e, t, n, r) {
                        return we(this, e, t, n, r);
                    },
                    one: function (e, t, n, r) {
                        return we(this, e, t, n, r, 1);
                    },
                    off: function (e, t, n) {
                        var r, o;
                        if (e && e.preventDefault && e.handleObj) return (r = e.handleObj), C(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                        if ("object" != typeof e)
                            return (
                                (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
                                !1 === n && (n = be),
                                this.each(function () {
                                    C.event.remove(this, e, n, t);
                                })
                            );
                        for (o in e) this.off(o, t, e[o]);
                        return this;
                    },
                });
            var Te = /<script|<style|<link/i,
                Ce = /checked\s*(?:[^=]|=\s*.checked.)/i,
                Ee = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
            function Ae(e, t) {
                return (A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && C(e).children("tbody")[0]) || e;
            }
            function Se(e) {
                return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
            }
            function je(e) {
                return "true/" === (e.type || "").slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute("type"), e;
            }
            function De(e, t) {
                var n, r, o, i;
                if (1 === t.nodeType) {
                    if (X.hasData(e) && (i = X.get(e).events)) for (o in (X.remove(t, "handle events"), i)) for (n = 0, r = i[o].length; n < r; n++) C.event.add(t, o, i[o][n]);
                    G.hasData(e) && ((e = G.access(e)), (e = C.extend({}, e)), G.set(t, e));
                }
            }
            function Oe(n, r, o, i) {
                r = y(r);
                var e,
                    t,
                    a,
                    s,
                    u,
                    c,
                    l = 0,
                    f = n.length,
                    p = f - 1,
                    h = r[0],
                    d = b(h);
                if (d || (1 < f && "string" == typeof h && !m.checkClone && Ce.test(h)))
                    return n.each(function (e) {
                        var t = n.eq(e);
                        d && (r[0] = h.call(this, e, t.html())), Oe(t, r, o, i);
                    });
                if (f && ((t = (e = ye(r, n[0].ownerDocument, !1, n, i)).firstChild), 1 === e.childNodes.length && (e = t), t || i)) {
                    for (s = (a = C.map(he(e, "script"), Se)).length; l < f; l++) (u = e), l !== p && ((u = C.clone(u, !0, !0)), s && C.merge(a, he(u, "script"))), o.call(n[l], u, l);
                    if (s)
                        for (c = a[a.length - 1].ownerDocument, C.map(a, je), l = 0; l < s; l++)
                            (u = a[l]),
                                fe.test(u.type || "") &&
                                    !X.access(u, "globalEval") &&
                                    C.contains(c, u) &&
                                    (u.src && "module" !== (u.type || "").toLowerCase()
                                        ? C._evalUrl &&
                                          !u.noModule &&
                                          C._evalUrl(
                                              u.src,
                                              {
                                                  nonce: u.nonce || u.getAttribute("nonce"),
                                              },
                                              c
                                          )
                                        : x(u.textContent.replace(Ee, ""), u, c));
                }
                return n;
            }
            function Re(e, t, n) {
                for (var r, o = t ? C.filter(t, e) : e, i = 0; null != (r = o[i]); i++) n || 1 !== r.nodeType || C.cleanData(he(r)), r.parentNode && (n && re(r) && de(he(r, "script")), r.parentNode.removeChild(r));
                return e;
            }
            C.extend({
                htmlPrefilter: function (e) {
                    return e;
                },
                clone: function (e, t, n) {
                    var r,
                        o,
                        i,
                        a,
                        s,
                        u,
                        c,
                        l = e.cloneNode(!0),
                        f = re(e);
                    if (!(m.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || C.isXMLDoc(e)))
                        for (a = he(l), r = 0, o = (i = he(e)).length; r < o; r++)
                            (s = i[r]), (u = a[r]), (c = void 0), "input" === (c = u.nodeName.toLowerCase()) && ce.test(s.type) ? (u.checked = s.checked) : ("input" !== c && "textarea" !== c) || (u.defaultValue = s.defaultValue);
                    if (t)
                        if (n) for (i = i || he(e), a = a || he(l), r = 0, o = i.length; r < o; r++) De(i[r], a[r]);
                        else De(e, l);
                    return 0 < (a = he(l, "script")).length && de(a, !f && he(e, "script")), l;
                },
                cleanData: function (e) {
                    for (var t, n, r, o = C.event.special, i = 0; void 0 !== (n = e[i]); i++)
                        if (z(n)) {
                            if ((t = n[X.expando])) {
                                if (t.events) for (r in t.events) o[r] ? C.event.remove(n, r) : C.removeEvent(n, r, t.handle);
                                n[X.expando] = void 0;
                            }
                            n[G.expando] && (n[G.expando] = void 0);
                        }
                },
            }),
                C.fn.extend({
                    detach: function (e) {
                        return Re(this, e, !0);
                    },
                    remove: function (e) {
                        return Re(this, e);
                    },
                    text: function (e) {
                        return U(
                            this,
                            function (e) {
                                return void 0 === e
                                    ? C.text(this)
                                    : this.empty().each(function () {
                                          (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                                      });
                            },
                            null,
                            e,
                            arguments.length
                        );
                    },
                    append: function () {
                        return Oe(this, arguments, function (e) {
                            (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || Ae(this, e).appendChild(e);
                        });
                    },
                    prepend: function () {
                        return Oe(this, arguments, function (e) {
                            var t;
                            (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (t = Ae(this, e)).insertBefore(e, t.firstChild);
                        });
                    },
                    before: function () {
                        return Oe(this, arguments, function (e) {
                            this.parentNode && this.parentNode.insertBefore(e, this);
                        });
                    },
                    after: function () {
                        return Oe(this, arguments, function (e) {
                            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                        });
                    },
                    empty: function () {
                        for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (C.cleanData(he(e, !1)), (e.textContent = ""));
                        return this;
                    },
                    clone: function (e, t) {
                        return (
                            (e = null != e && e),
                            (t = null == t ? e : t),
                            this.map(function () {
                                return C.clone(this, e, t);
                            })
                        );
                    },
                    html: function (e) {
                        return U(
                            this,
                            function (e) {
                                var t = this[0] || {},
                                    n = 0,
                                    r = this.length;
                                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                                if ("string" == typeof e && !Te.test(e) && !pe[(le.exec(e) || ["", ""])[1].toLowerCase()]) {
                                    e = C.htmlPrefilter(e);
                                    try {
                                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (C.cleanData(he(t, !1)), (t.innerHTML = e));
                                        t = 0;
                                    } catch (e) {}
                                }
                                t && this.empty().append(e);
                            },
                            null,
                            e,
                            arguments.length
                        );
                    },
                    replaceWith: function () {
                        var n = [];
                        return Oe(
                            this,
                            arguments,
                            function (e) {
                                var t = this.parentNode;
                                C.inArray(this, n) < 0 && (C.cleanData(he(this)), t && t.replaceChild(e, this));
                            },
                            n
                        );
                    },
                }),
                C.each(
                    {
                        appendTo: "append",
                        prependTo: "prepend",
                        insertBefore: "before",
                        insertAfter: "after",
                        replaceAll: "replaceWith",
                    },
                    function (e, a) {
                        C.fn[e] = function (e) {
                            for (var t, n = [], r = C(e), o = r.length - 1, i = 0; i <= o; i++) (t = i === o ? this : this.clone(!0)), C(r[i])[a](t), u.apply(n, t.get());
                            return this.pushStack(n);
                        };
                    }
                );
            function Ne(e, t, n) {
                var r,
                    o = {};
                for (r in t) (o[r] = e.style[r]), (e.style[r] = t[r]);
                for (r in ((n = n.call(e)), t)) e.style[r] = o[r];
                return n;
            }
            var Le,
                Pe,
                _e,
                Me,
                Ie,
                Be,
                qe,
                He,
                Ue = new RegExp("^(" + Z + ")(?!px)[a-z%]+$", "i"),
                Fe = function (e) {
                    var t = e.ownerDocument.defaultView;
                    return (t = !t || !t.opener ? k : t).getComputedStyle(e);
                },
                We = new RegExp(te.join("|"), "i");
            function Ye() {
                var e;
                He &&
                    ((qe.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                    (He.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                    ne.appendChild(qe).appendChild(He),
                    (e = k.getComputedStyle(He)),
                    (Le = "1%" !== e.top),
                    (Be = 12 === $e(e.marginLeft)),
                    (He.style.right = "60%"),
                    (Me = 36 === $e(e.right)),
                    (Pe = 36 === $e(e.width)),
                    (He.style.position = "absolute"),
                    (_e = 12 === $e(He.offsetWidth / 3)),
                    ne.removeChild(qe),
                    (He = null));
            }
            function $e(e) {
                return Math.round(parseFloat(e));
            }
            function ze(e, t, n) {
                var r,
                    o,
                    i = e.style;
                return (
                    (n = n || Fe(e)) &&
                        ("" !== (o = n.getPropertyValue(t) || n[t]) || re(e) || (o = C.style(e, t)),
                        !m.pixelBoxStyles() && Ue.test(o) && We.test(t) && ((r = i.width), (e = i.minWidth), (t = i.maxWidth), (i.minWidth = i.maxWidth = i.width = o), (o = n.width), (i.width = r), (i.minWidth = e), (i.maxWidth = t))),
                    void 0 !== o ? o + "" : o
                );
            }
            function Ve(e, t) {
                return {
                    get: function () {
                        if (!e()) return (this.get = t).apply(this, arguments);
                        delete this.get;
                    },
                };
            }
            (qe = T.createElement("div")),
                (He = T.createElement("div")).style &&
                    ((He.style.backgroundClip = "content-box"),
                    (He.cloneNode(!0).style.backgroundClip = ""),
                    (m.clearCloneStyle = "content-box" === He.style.backgroundClip),
                    C.extend(m, {
                        boxSizingReliable: function () {
                            return Ye(), Pe;
                        },
                        pixelBoxStyles: function () {
                            return Ye(), Me;
                        },
                        pixelPosition: function () {
                            return Ye(), Le;
                        },
                        reliableMarginLeft: function () {
                            return Ye(), Be;
                        },
                        scrollboxSize: function () {
                            return Ye(), _e;
                        },
                        reliableTrDimensions: function () {
                            var e, t, n;
                            return (
                                null == Ie &&
                                    ((e = T.createElement("table")),
                                    (t = T.createElement("tr")),
                                    (n = T.createElement("div")),
                                    (e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate"),
                                    (t.style.cssText = "border:1px solid"),
                                    (t.style.height = "1px"),
                                    (n.style.height = "9px"),
                                    (n.style.display = "block"),
                                    ne.appendChild(e).appendChild(t).appendChild(n),
                                    (n = k.getComputedStyle(t)),
                                    (Ie = parseInt(n.height, 10) + parseInt(n.borderTopWidth, 10) + parseInt(n.borderBottomWidth, 10) === t.offsetHeight),
                                    ne.removeChild(e)),
                                Ie
                            );
                        },
                    }));
            var Xe = ["Webkit", "Moz", "ms"],
                Ge = T.createElement("div").style,
                Je = {};
            function Qe(e) {
                var t = C.cssProps[e] || Je[e];
                return (
                    t ||
                    (e in Ge
                        ? e
                        : (Je[e] =
                              (function (e) {
                                  for (var t = e[0].toUpperCase() + e.slice(1), n = Xe.length; n--; ) if ((e = Xe[n] + t) in Ge) return e;
                              })(e) || e))
                );
            }
            var Ke = /^(none|table(?!-c[ea]).+)/,
                Ze = /^--/,
                et = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block",
                },
                tt = {
                    letterSpacing: "0",
                    fontWeight: "400",
                };
            function nt(e, t, n) {
                var r = ee.exec(t);
                return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
            }
            function rt(e, t, n, r, o, i) {
                var a = "width" === t ? 1 : 0,
                    s = 0,
                    u = 0;
                if (n === (r ? "border" : "content")) return 0;
                for (; a < 4; a += 2)
                    "margin" === n && (u += C.css(e, n + te[a], !0, o)),
                        r
                            ? ("content" === n && (u -= C.css(e, "padding" + te[a], !0, o)), "margin" !== n && (u -= C.css(e, "border" + te[a] + "Width", !0, o)))
                            : ((u += C.css(e, "padding" + te[a], !0, o)), "padding" !== n ? (u += C.css(e, "border" + te[a] + "Width", !0, o)) : (s += C.css(e, "border" + te[a] + "Width", !0, o)));
                return !r && 0 <= i && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - i - u - s - 0.5)) || 0), u;
            }
            function ot(e, t, n) {
                var r = Fe(e),
                    o = (!m.boxSizingReliable() || n) && "border-box" === C.css(e, "boxSizing", !1, r),
                    i = o,
                    a = ze(e, t, r),
                    s = "offset" + t[0].toUpperCase() + t.slice(1);
                if (Ue.test(a)) {
                    if (!n) return a;
                    a = "auto";
                }
                return (
                    ((!m.boxSizingReliable() && o) || (!m.reliableTrDimensions() && A(e, "tr")) || "auto" === a || (!parseFloat(a) && "inline" === C.css(e, "display", !1, r))) &&
                        e.getClientRects().length &&
                        ((o = "border-box" === C.css(e, "boxSizing", !1, r)), (i = s in e) && (a = e[s])),
                    (a = parseFloat(a) || 0) + rt(e, t, n || (o ? "border" : "content"), i, r, a) + "px"
                );
            }
            function it(e, t, n, r, o) {
                return new it.prototype.init(e, t, n, r, o);
            }
            C.extend({
                cssHooks: {
                    opacity: {
                        get: function (e, t) {
                            if (t) {
                                e = ze(e, "opacity");
                                return "" === e ? "1" : e;
                            }
                        },
                    },
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    gridArea: !0,
                    gridColumn: !0,
                    gridColumnEnd: !0,
                    gridColumnStart: !0,
                    gridRow: !0,
                    gridRowEnd: !0,
                    gridRowStart: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0,
                },
                cssProps: {},
                style: function (e, t, n, r) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var o,
                            i,
                            a,
                            s = $(t),
                            u = Ze.test(t),
                            c = e.style;
                        if ((u || (t = Qe(s)), (a = C.cssHooks[t] || C.cssHooks[s]), void 0 === n)) return a && "get" in a && void 0 !== (o = a.get(e, !1, r)) ? o : c[t];
                        "string" === (i = typeof n) && (o = ee.exec(n)) && o[1] && ((n = ae(e, t, o)), (i = "number")),
                            null != n &&
                                n == n &&
                                ("number" !== i || u || (n += (o && o[3]) || (C.cssNumber[s] ? "" : "px")),
                                m.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"),
                                (a && "set" in a && void 0 === (n = a.set(e, n, r))) || (u ? c.setProperty(t, n) : (c[t] = n)));
                    }
                },
                css: function (e, t, n, r) {
                    var o,
                        i = $(t);
                    return (
                        Ze.test(t) || (t = Qe(i)),
                        "normal" === (o = void 0 === (o = (i = C.cssHooks[t] || C.cssHooks[i]) && "get" in i ? i.get(e, !0, n) : o) ? ze(e, t, r) : o) && t in tt && (o = tt[t]),
                        "" === n || n ? ((t = parseFloat(o)), !0 === n || isFinite(t) ? t || 0 : o) : o
                    );
                },
            }),
                C.each(["height", "width"], function (e, s) {
                    C.cssHooks[s] = {
                        get: function (e, t, n) {
                            if (t)
                                return !Ke.test(C.css(e, "display")) || (e.getClientRects().length && e.getBoundingClientRect().width)
                                    ? ot(e, s, n)
                                    : Ne(e, et, function () {
                                          return ot(e, s, n);
                                      });
                        },
                        set: function (e, t, n) {
                            var r,
                                o = Fe(e),
                                i = !m.scrollboxSize() && "absolute" === o.position,
                                a = (i || n) && "border-box" === C.css(e, "boxSizing", !1, o),
                                n = n ? rt(e, s, n, a, o) : 0;
                            return (
                                a && i && (n -= Math.ceil(e["offset" + s[0].toUpperCase() + s.slice(1)] - parseFloat(o[s]) - rt(e, s, "border", !1, o) - 0.5)),
                                n && (r = ee.exec(t)) && "px" !== (r[3] || "px") && ((e.style[s] = t), (t = C.css(e, s))),
                                nt(0, t, n)
                            );
                        },
                    };
                }),
                (C.cssHooks.marginLeft = Ve(m.reliableMarginLeft, function (e, t) {
                    if (t)
                        return (
                            (parseFloat(ze(e, "marginLeft")) ||
                                e.getBoundingClientRect().left -
                                    Ne(
                                        e,
                                        {
                                            marginLeft: 0,
                                        },
                                        function () {
                                            return e.getBoundingClientRect().left;
                                        }
                                    )) + "px"
                        );
                })),
                C.each(
                    {
                        margin: "",
                        padding: "",
                        border: "Width",
                    },
                    function (o, i) {
                        (C.cssHooks[o + i] = {
                            expand: function (e) {
                                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[o + te[t] + i] = r[t] || r[t - 2] || r[0];
                                return n;
                            },
                        }),
                            "margin" !== o && (C.cssHooks[o + i].set = nt);
                    }
                ),
                C.fn.extend({
                    css: function (e, t) {
                        return U(
                            this,
                            function (e, t, n) {
                                var r,
                                    o,
                                    i = {},
                                    a = 0;
                                if (Array.isArray(t)) {
                                    for (r = Fe(e), o = t.length; a < o; a++) i[t[a]] = C.css(e, t[a], !1, r);
                                    return i;
                                }
                                return void 0 !== n ? C.style(e, t, n) : C.css(e, t);
                            },
                            e,
                            t,
                            1 < arguments.length
                        );
                    },
                }),
                ((C.Tween = it).prototype = {
                    constructor: it,
                    init: function (e, t, n, r, o, i) {
                        (this.elem = e), (this.prop = n), (this.easing = o || C.easing._default), (this.options = t), (this.start = this.now = this.cur()), (this.end = r), (this.unit = i || (C.cssNumber[n] ? "" : "px"));
                    },
                    cur: function () {
                        var e = it.propHooks[this.prop];
                        return (e && e.get ? e : it.propHooks._default).get(this);
                    },
                    run: function (e) {
                        var t,
                            n = it.propHooks[this.prop];
                        return (
                            this.options.duration ? (this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)) : (this.pos = t = e),
                            (this.now = (this.end - this.start) * t + this.start),
                            this.options.step && this.options.step.call(this.elem, this.now, this),
                            (n && n.set ? n : it.propHooks._default).set(this),
                            this
                        );
                    },
                }),
                (it.prototype.init.prototype = it.prototype),
                (it.propHooks = {
                    _default: {
                        get: function (e) {
                            return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop]) ? e.elem[e.prop] : (e = C.css(e.elem, e.prop, "")) && "auto" !== e ? e : 0;
                        },
                        set: function (e) {
                            C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || (!C.cssHooks[e.prop] && null == e.elem.style[Qe(e.prop)]) ? (e.elem[e.prop] = e.now) : C.style(e.elem, e.prop, e.now + e.unit);
                        },
                    },
                }),
                (it.propHooks.scrollTop = it.propHooks.scrollLeft = {
                    set: function (e) {
                        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
                    },
                }),
                (C.easing = {
                    linear: function (e) {
                        return e;
                    },
                    swing: function (e) {
                        return 0.5 - Math.cos(e * Math.PI) / 2;
                    },
                    _default: "swing",
                }),
                (C.fx = it.prototype.init),
                (C.fx.step = {});
            var at,
                st,
                ut = /^(?:toggle|show|hide)$/,
                ct = /queueHooks$/;
            function lt() {
                st && (!1 === T.hidden && k.requestAnimationFrame ? k.requestAnimationFrame(lt) : k.setTimeout(lt, C.fx.interval), C.fx.tick());
            }
            function ft() {
                return (
                    k.setTimeout(function () {
                        at = void 0;
                    }),
                    (at = Date.now())
                );
            }
            function pt(e, t) {
                var n,
                    r = 0,
                    o = {
                        height: e,
                    };
                for (t = t ? 1 : 0; r < 4; r += 2 - t) o["margin" + (n = te[r])] = o["padding" + n] = e;
                return t && (o.opacity = o.width = e), o;
            }
            function ht(e, t, n) {
                for (var r, o = (dt.tweeners[t] || []).concat(dt.tweeners["*"]), i = 0, a = o.length; i < a; i++) if ((r = o[i].call(n, t, e))) return r;
            }
            function dt(o, e, t) {
                var n,
                    i,
                    r = 0,
                    a = dt.prefilters.length,
                    s = C.Deferred().always(function () {
                        delete u.elem;
                    }),
                    u = function () {
                        if (i) return !1;
                        for (var e = at || ft(), e = Math.max(0, c.startTime + c.duration - e), t = 1 - (e / c.duration || 0), n = 0, r = c.tweens.length; n < r; n++) c.tweens[n].run(t);
                        return s.notifyWith(o, [c, t, e]), t < 1 && r ? e : (r || s.notifyWith(o, [c, 1, 0]), s.resolveWith(o, [c]), !1);
                    },
                    c = s.promise({
                        elem: o,
                        props: C.extend({}, e),
                        opts: C.extend(
                            !0,
                            {
                                specialEasing: {},
                                easing: C.easing._default,
                            },
                            t
                        ),
                        originalProperties: e,
                        originalOptions: t,
                        startTime: at || ft(),
                        duration: t.duration,
                        tweens: [],
                        createTween: function (e, t) {
                            e = C.Tween(o, c.opts, e, t, c.opts.specialEasing[e] || c.opts.easing);
                            return c.tweens.push(e), e;
                        },
                        stop: function (e) {
                            var t = 0,
                                n = e ? c.tweens.length : 0;
                            if (i) return this;
                            for (i = !0; t < n; t++) c.tweens[t].run(1);
                            return e ? (s.notifyWith(o, [c, 1, 0]), s.resolveWith(o, [c, e])) : s.rejectWith(o, [c, e]), this;
                        },
                    }),
                    l = c.props;
                for (
                    !(function (e, t) {
                        var n, r, o, i, a;
                        for (n in e)
                            if (((o = t[(r = $(n))]), (i = e[n]), Array.isArray(i) && ((o = i[1]), (i = e[n] = i[0])), n !== r && ((e[r] = i), delete e[n]), (a = C.cssHooks[r]) && ("expand" in a)))
                                for (n in ((i = a.expand(i)), delete e[r], i)) (n in e) || ((e[n] = i[n]), (t[n] = o));
                            else t[r] = o;
                    })(l, c.opts.specialEasing);
                    r < a;
                    r++
                )
                    if ((n = dt.prefilters[r].call(c, o, l, c.opts))) return b(n.stop) && (C._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)), n;
                return (
                    C.map(l, ht, c),
                    b(c.opts.start) && c.opts.start.call(o, c),
                    c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always),
                    C.fx.timer(
                        C.extend(u, {
                            elem: o,
                            anim: c,
                            queue: c.opts.queue,
                        })
                    ),
                    c
                );
            }
            (C.Animation = C.extend(dt, {
                tweeners: {
                    "*": [
                        function (e, t) {
                            var n = this.createTween(e, t);
                            return ae(n.elem, e, ee.exec(t), n), n;
                        },
                    ],
                },
                tweener: function (e, t) {
                    for (var n, r = 0, o = (e = b(e) ? ((t = e), ["*"]) : e.match(P)).length; r < o; r++) (n = e[r]), (dt.tweeners[n] = dt.tweeners[n] || []), dt.tweeners[n].unshift(t);
                },
                prefilters: [
                    function (e, t, n) {
                        var r,
                            o,
                            i,
                            a,
                            s,
                            u,
                            c,
                            l = "width" in t || "height" in t,
                            f = this,
                            p = {},
                            h = e.style,
                            d = e.nodeType && ie(e),
                            g = X.get(e, "fxshow");
                        for (r in (n.queue ||
                            (null == (a = C._queueHooks(e, "fx")).unqueued &&
                                ((a.unqueued = 0),
                                (s = a.empty.fire),
                                (a.empty.fire = function () {
                                    a.unqueued || s();
                                })),
                            a.unqueued++,
                            f.always(function () {
                                f.always(function () {
                                    a.unqueued--, C.queue(e, "fx").length || a.empty.fire();
                                });
                            })),
                        t))
                            if (((o = t[r]), ut.test(o))) {
                                if ((delete t[r], (i = i || "toggle" === o), o === (d ? "hide" : "show"))) {
                                    if ("show" !== o || !g || void 0 === g[r]) continue;
                                    d = !0;
                                }
                                p[r] = (g && g[r]) || C.style(e, r);
                            }
                        if ((u = !C.isEmptyObject(t)) || !C.isEmptyObject(p))
                            for (r in (l &&
                                1 === e.nodeType &&
                                ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                                null == (c = g && g.display) && (c = X.get(e, "display")),
                                "none" === (l = C.css(e, "display")) && (c ? (l = c) : (ue([e], !0), (c = e.style.display || c), (l = C.css(e, "display")), ue([e]))),
                                ("inline" === l || ("inline-block" === l && null != c)) &&
                                    "none" === C.css(e, "float") &&
                                    (u ||
                                        (f.done(function () {
                                            h.display = c;
                                        }),
                                        null == c && ((l = h.display), (c = "none" === l ? "" : l))),
                                    (h.display = "inline-block"))),
                            n.overflow &&
                                ((h.overflow = "hidden"),
                                f.always(function () {
                                    (h.overflow = n.overflow[0]), (h.overflowX = n.overflow[1]), (h.overflowY = n.overflow[2]);
                                })),
                            (u = !1),
                            p))
                                u ||
                                    (g
                                        ? "hidden" in g && (d = g.hidden)
                                        : (g = X.access(e, "fxshow", {
                                              display: c,
                                          })),
                                    i && (g.hidden = !d),
                                    d && ue([e], !0),
                                    f.done(function () {
                                        for (r in (d || ue([e]), X.remove(e, "fxshow"), p)) C.style(e, r, p[r]);
                                    })),
                                    (u = ht(d ? g[r] : 0, r, f)),
                                    r in g || ((g[r] = u.start), d && ((u.end = u.start), (u.start = 0)));
                    },
                ],
                prefilter: function (e, t) {
                    t ? dt.prefilters.unshift(e) : dt.prefilters.push(e);
                },
            })),
                (C.speed = function (e, t, n) {
                    var r =
                        e && "object" == typeof e
                            ? C.extend({}, e)
                            : {
                                  complete: n || (!n && t) || (b(e) && e),
                                  duration: e,
                                  easing: (n && t) || (t && !b(t) && t),
                              };
                    return (
                        C.fx.off ? (r.duration = 0) : "number" != typeof r.duration && (r.duration in C.fx.speeds ? (r.duration = C.fx.speeds[r.duration]) : (r.duration = C.fx.speeds._default)),
                        (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
                        (r.old = r.complete),
                        (r.complete = function () {
                            b(r.old) && r.old.call(this), r.queue && C.dequeue(this, r.queue);
                        }),
                        r
                    );
                }),
                C.fn.extend({
                    fadeTo: function (e, t, n, r) {
                        return this.filter(ie).css("opacity", 0).show().end().animate(
                            {
                                opacity: t,
                            },
                            e,
                            n,
                            r
                        );
                    },
                    animate: function (t, e, n, r) {
                        var o = C.isEmptyObject(t),
                            i = C.speed(e, n, r),
                            r = function () {
                                var e = dt(this, C.extend({}, t), i);
                                (o || X.get(this, "finish")) && e.stop(!0);
                            };
                        return (r.finish = r), o || !1 === i.queue ? this.each(r) : this.queue(i.queue, r);
                    },
                    stop: function (o, e, i) {
                        function a(e) {
                            var t = e.stop;
                            delete e.stop, t(i);
                        }
                        return (
                            "string" != typeof o && ((i = e), (e = o), (o = void 0)),
                            e && this.queue(o || "fx", []),
                            this.each(function () {
                                var e = !0,
                                    t = null != o && o + "queueHooks",
                                    n = C.timers,
                                    r = X.get(this);
                                if (t) r[t] && r[t].stop && a(r[t]);
                                else for (t in r) r[t] && r[t].stop && ct.test(t) && a(r[t]);
                                for (t = n.length; t--; ) n[t].elem !== this || (null != o && n[t].queue !== o) || (n[t].anim.stop(i), (e = !1), n.splice(t, 1));
                                (!e && i) || C.dequeue(this, o);
                            })
                        );
                    },
                    finish: function (a) {
                        return (
                            !1 !== a && (a = a || "fx"),
                            this.each(function () {
                                var e,
                                    t = X.get(this),
                                    n = t[a + "queue"],
                                    r = t[a + "queueHooks"],
                                    o = C.timers,
                                    i = n ? n.length : 0;
                                for (t.finish = !0, C.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--; ) o[e].elem === this && o[e].queue === a && (o[e].anim.stop(!0), o.splice(e, 1));
                                for (e = 0; e < i; e++) n[e] && n[e].finish && n[e].finish.call(this);
                                delete t.finish;
                            })
                        );
                    },
                }),
                C.each(["toggle", "show", "hide"], function (e, r) {
                    var o = C.fn[r];
                    C.fn[r] = function (e, t, n) {
                        return null == e || "boolean" == typeof e ? o.apply(this, arguments) : this.animate(pt(r, !0), e, t, n);
                    };
                }),
                C.each(
                    {
                        slideDown: pt("show"),
                        slideUp: pt("hide"),
                        slideToggle: pt("toggle"),
                        fadeIn: {
                            opacity: "show",
                        },
                        fadeOut: {
                            opacity: "hide",
                        },
                        fadeToggle: {
                            opacity: "toggle",
                        },
                    },
                    function (e, r) {
                        C.fn[e] = function (e, t, n) {
                            return this.animate(r, e, t, n);
                        };
                    }
                ),
                (C.timers = []),
                (C.fx.tick = function () {
                    var e,
                        t = 0,
                        n = C.timers;
                    for (at = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
                    n.length || C.fx.stop(), (at = void 0);
                }),
                (C.fx.timer = function (e) {
                    C.timers.push(e), C.fx.start();
                }),
                (C.fx.interval = 13),
                (C.fx.start = function () {
                    st || ((st = !0), lt());
                }),
                (C.fx.stop = function () {
                    st = null;
                }),
                (C.fx.speeds = {
                    slow: 600,
                    fast: 200,
                    _default: 400,
                }),
                (C.fn.delay = function (r, e) {
                    return (
                        (r = (C.fx && C.fx.speeds[r]) || r),
                        this.queue((e = e || "fx"), function (e, t) {
                            var n = k.setTimeout(e, r);
                            t.stop = function () {
                                k.clearTimeout(n);
                            };
                        })
                    );
                }),
                (Vt = T.createElement("input")),
                (Z = T.createElement("select").appendChild(T.createElement("option"))),
                (Vt.type = "checkbox"),
                (m.checkOn = "" !== Vt.value),
                (m.optSelected = Z.selected),
                ((Vt = T.createElement("input")).value = "t"),
                (Vt.type = "radio"),
                (m.radioValue = "t" === Vt.value);
            var gt,
                yt = C.expr.attrHandle;
            C.fn.extend({
                attr: function (e, t) {
                    return U(this, C.attr, e, t, 1 < arguments.length);
                },
                removeAttr: function (e) {
                    return this.each(function () {
                        C.removeAttr(this, e);
                    });
                },
            }),
                C.extend({
                    attr: function (e, t, n) {
                        var r,
                            o,
                            i = e.nodeType;
                        if (3 !== i && 8 !== i && 2 !== i)
                            return void 0 === e.getAttribute
                                ? C.prop(e, t, n)
                                : ((1 === i && C.isXMLDoc(e)) || (o = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? gt : void 0)),
                                  void 0 !== n
                                      ? null === n
                                          ? void C.removeAttr(e, t)
                                          : o && "set" in o && void 0 !== (r = o.set(e, n, t))
                                          ? r
                                          : (e.setAttribute(t, n + ""), n)
                                      : !(o && "get" in o && null !== (r = o.get(e, t))) && null == (r = C.find.attr(e, t))
                                      ? void 0
                                      : r);
                    },
                    attrHooks: {
                        type: {
                            set: function (e, t) {
                                if (!m.radioValue && "radio" === t && A(e, "input")) {
                                    var n = e.value;
                                    return e.setAttribute("type", t), n && (e.value = n), t;
                                }
                            },
                        },
                    },
                    removeAttr: function (e, t) {
                        var n,
                            r = 0,
                            o = t && t.match(P);
                        if (o && 1 === e.nodeType) for (; (n = o[r++]); ) e.removeAttribute(n);
                    },
                }),
                (gt = {
                    set: function (e, t, n) {
                        return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n;
                    },
                }),
                C.each(C.expr.match.bool.source.match(/\w+/g), function (e, t) {
                    var a = yt[t] || C.find.attr;
                    yt[t] = function (e, t, n) {
                        var r,
                            o,
                            i = t.toLowerCase();
                        return n || ((o = yt[i]), (yt[i] = r), (r = null != a(e, t, n) ? i : null), (yt[i] = o)), r;
                    };
                });
            var vt = /^(?:input|select|textarea|button)$/i,
                mt = /^(?:a|area)$/i;
            function bt(e) {
                return (e.match(P) || []).join(" ");
            }
            function xt(e) {
                return (e.getAttribute && e.getAttribute("class")) || "";
            }
            function wt(e) {
                return Array.isArray(e) ? e : ("string" == typeof e && e.match(P)) || [];
            }
            C.fn.extend({
                prop: function (e, t) {
                    return U(this, C.prop, e, t, 1 < arguments.length);
                },
                removeProp: function (e) {
                    return this.each(function () {
                        delete this[C.propFix[e] || e];
                    });
                },
            }),
                C.extend({
                    prop: function (e, t, n) {
                        var r,
                            o,
                            i = e.nodeType;
                        if (3 !== i && 8 !== i && 2 !== i)
                            return (
                                (1 === i && C.isXMLDoc(e)) || ((t = C.propFix[t] || t), (o = C.propHooks[t])),
                                void 0 !== n ? (o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : (e[t] = n)) : o && "get" in o && null !== (r = o.get(e, t)) ? r : e[t]
                            );
                    },
                    propHooks: {
                        tabIndex: {
                            get: function (e) {
                                var t = C.find.attr(e, "tabindex");
                                return t ? parseInt(t, 10) : vt.test(e.nodeName) || (mt.test(e.nodeName) && e.href) ? 0 : -1;
                            },
                        },
                    },
                    propFix: {
                        for: "htmlFor",
                        class: "className",
                    },
                }),
                m.optSelected ||
                    (C.propHooks.selected = {
                        get: function (e) {
                            e = e.parentNode;
                            return e && e.parentNode && e.parentNode.selectedIndex, null;
                        },
                        set: function (e) {
                            e = e.parentNode;
                            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
                        },
                    }),
                C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                    C.propFix[this.toLowerCase()] = this;
                }),
                C.fn.extend({
                    addClass: function (t) {
                        var e,
                            n,
                            r,
                            o,
                            i,
                            a,
                            s = 0;
                        if (b(t))
                            return this.each(function (e) {
                                C(this).addClass(t.call(this, e, xt(this)));
                            });
                        if ((e = wt(t)).length)
                            for (; (n = this[s++]); )
                                if (((a = xt(n)), (r = 1 === n.nodeType && " " + bt(a) + " "))) {
                                    for (i = 0; (o = e[i++]); ) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                                    a !== (a = bt(r)) && n.setAttribute("class", a);
                                }
                        return this;
                    },
                    removeClass: function (t) {
                        var e,
                            n,
                            r,
                            o,
                            i,
                            a,
                            s = 0;
                        if (b(t))
                            return this.each(function (e) {
                                C(this).removeClass(t.call(this, e, xt(this)));
                            });
                        if (!arguments.length) return this.attr("class", "");
                        if ((e = wt(t)).length)
                            for (; (n = this[s++]); )
                                if (((a = xt(n)), (r = 1 === n.nodeType && " " + bt(a) + " "))) {
                                    for (i = 0; (o = e[i++]); ) for (; -1 < r.indexOf(" " + o + " "); ) r = r.replace(" " + o + " ", " ");
                                    a !== (a = bt(r)) && n.setAttribute("class", a);
                                }
                        return this;
                    },
                    toggleClass: function (o, t) {
                        var i = typeof o,
                            a = "string" == i || Array.isArray(o);
                        return "boolean" == typeof t && a
                            ? t
                                ? this.addClass(o)
                                : this.removeClass(o)
                            : b(o)
                            ? this.each(function (e) {
                                  C(this).toggleClass(o.call(this, e, xt(this), t), t);
                              })
                            : this.each(function () {
                                  var e, t, n, r;
                                  if (a) for (t = 0, n = C(this), r = wt(o); (e = r[t++]); ) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                                  else (void 0 !== o && "boolean" != i) || ((e = xt(this)) && X.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", (!e && !1 !== o && X.get(this, "__className__")) || ""));
                              });
                    },
                    hasClass: function (e) {
                        for (var t, n = 0, r = " " + e + " "; (t = this[n++]); ) if (1 === t.nodeType && -1 < (" " + bt(xt(t)) + " ").indexOf(r)) return !0;
                        return !1;
                    },
                });
            var kt = /\r/g;
            C.fn.extend({
                val: function (t) {
                    var n,
                        e,
                        r,
                        o = this[0];
                    return arguments.length
                        ? ((r = b(t)),
                          this.each(function (e) {
                              1 === this.nodeType &&
                                  (null == (e = r ? t.call(this, e, C(this).val()) : t)
                                      ? (e = "")
                                      : "number" == typeof e
                                      ? (e += "")
                                      : Array.isArray(e) &&
                                        (e = C.map(e, function (e) {
                                            return null == e ? "" : e + "";
                                        })),
                                  ((n = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in n && void 0 !== n.set(this, e, "value")) || (this.value = e));
                          }))
                        : o
                        ? (n = C.valHooks[o.type] || C.valHooks[o.nodeName.toLowerCase()]) && "get" in n && void 0 !== (e = n.get(o, "value"))
                            ? e
                            : "string" == typeof (e = o.value)
                            ? e.replace(kt, "")
                            : null == e
                            ? ""
                            : e
                        : void 0;
                },
            }),
                C.extend({
                    valHooks: {
                        option: {
                            get: function (e) {
                                var t = C.find.attr(e, "value");
                                return null != t ? t : bt(C.text(e));
                            },
                        },
                        select: {
                            get: function (e) {
                                for (var t, n = e.options, r = e.selectedIndex, o = "select-one" === e.type, i = o ? null : [], a = o ? r + 1 : n.length, s = r < 0 ? a : o ? r : 0; s < a; s++)
                                    if (((t = n[s]).selected || s === r) && !t.disabled && (!t.parentNode.disabled || !A(t.parentNode, "optgroup"))) {
                                        if (((t = C(t).val()), o)) return t;
                                        i.push(t);
                                    }
                                return i;
                            },
                            set: function (e, t) {
                                for (var n, r, o = e.options, i = C.makeArray(t), a = o.length; a--; ) ((r = o[a]).selected = -1 < C.inArray(C.valHooks.option.get(r), i)) && (n = !0);
                                return n || (e.selectedIndex = -1), i;
                            },
                        },
                    },
                }),
                C.each(["radio", "checkbox"], function () {
                    (C.valHooks[this] = {
                        set: function (e, t) {
                            if (Array.isArray(t)) return (e.checked = -1 < C.inArray(C(e).val(), t));
                        },
                    }),
                        m.checkOn ||
                            (C.valHooks[this].get = function (e) {
                                return null === e.getAttribute("value") ? "on" : e.value;
                            });
                }),
                (m.focusin = "onfocusin" in k);
            function Tt(e) {
                e.stopPropagation();
            }
            var Ct = /^(?:focusinfocus|focusoutblur)$/;
            C.extend(C.event, {
                trigger: function (e, t, n, r) {
                    var o,
                        i,
                        a,
                        s,
                        u,
                        c,
                        l,
                        f = [n || T],
                        p = v.call(e, "type") ? e.type : e,
                        h = v.call(e, "namespace") ? e.namespace.split(".") : [],
                        d = (l = i = n = n || T);
                    if (
                        3 !== n.nodeType &&
                        8 !== n.nodeType &&
                        !Ct.test(p + C.event.triggered) &&
                        (-1 < p.indexOf(".") && ((p = (h = p.split(".")).shift()), h.sort()),
                        (s = p.indexOf(":") < 0 && "on" + p),
                        ((e = e[C.expando] ? e : new C.Event(p, "object" == typeof e && e)).isTrigger = r ? 2 : 3),
                        (e.namespace = h.join(".")),
                        (e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                        (e.result = void 0),
                        e.target || (e.target = n),
                        (t = null == t ? [e] : C.makeArray(t, [e])),
                        (c = C.event.special[p] || {}),
                        r || !c.trigger || !1 !== c.trigger.apply(n, t))
                    ) {
                        if (!r && !c.noBubble && !g(n)) {
                            for (a = c.delegateType || p, Ct.test(a + p) || (d = d.parentNode); d; d = d.parentNode) f.push(d), (i = d);
                            i === (n.ownerDocument || T) && f.push(i.defaultView || i.parentWindow || k);
                        }
                        for (o = 0; (d = f[o++]) && !e.isPropagationStopped(); )
                            (l = d),
                                (e.type = 1 < o ? a : c.bindType || p),
                                (u = (X.get(d, "events") || Object.create(null))[e.type] && X.get(d, "handle")) && u.apply(d, t),
                                (u = s && d[s]) && u.apply && z(d) && ((e.result = u.apply(d, t)), !1 === e.result && e.preventDefault());
                        return (
                            (e.type = p),
                            r ||
                                e.isDefaultPrevented() ||
                                (c._default && !1 !== c._default.apply(f.pop(), t)) ||
                                !z(n) ||
                                (s &&
                                    b(n[p]) &&
                                    !g(n) &&
                                    ((i = n[s]) && (n[s] = null),
                                    (C.event.triggered = p),
                                    e.isPropagationStopped() && l.addEventListener(p, Tt),
                                    n[p](),
                                    e.isPropagationStopped() && l.removeEventListener(p, Tt),
                                    (C.event.triggered = void 0),
                                    i && (n[s] = i))),
                            e.result
                        );
                    }
                },
                simulate: function (e, t, n) {
                    e = C.extend(new C.Event(), n, {
                        type: e,
                        isSimulated: !0,
                    });
                    C.event.trigger(e, null, t);
                },
            }),
                C.fn.extend({
                    trigger: function (e, t) {
                        return this.each(function () {
                            C.event.trigger(e, t, this);
                        });
                    },
                    triggerHandler: function (e, t) {
                        var n = this[0];
                        if (n) return C.event.trigger(e, t, n, !0);
                    },
                }),
                m.focusin ||
                    C.each(
                        {
                            focus: "focusin",
                            blur: "focusout",
                        },
                        function (n, r) {
                            function o(e) {
                                C.event.simulate(r, e.target, C.event.fix(e));
                            }
                            C.event.special[r] = {
                                setup: function () {
                                    var e = this.ownerDocument || this.document || this,
                                        t = X.access(e, r);
                                    t || e.addEventListener(n, o, !0), X.access(e, r, (t || 0) + 1);
                                },
                                teardown: function () {
                                    var e = this.ownerDocument || this.document || this,
                                        t = X.access(e, r) - 1;
                                    t ? X.access(e, r, t) : (e.removeEventListener(n, o, !0), X.remove(e, r));
                                },
                            };
                        }
                    );
            var Et = k.location,
                At = {
                    guid: Date.now(),
                },
                St = /\?/;
            C.parseXML = function (e) {
                var t, n;
                if (!e || "string" != typeof e) return null;
                try {
                    t = new k.DOMParser().parseFromString(e, "text/xml");
                } catch (e) {}
                return (
                    (n = t && t.getElementsByTagName("parsererror")[0]),
                    (t && !n) ||
                        C.error(
                            "Invalid XML: " +
                                (n
                                    ? C.map(n.childNodes, function (e) {
                                          return e.textContent;
                                      }).join("\n")
                                    : e)
                        ),
                    t
                );
            };
            var jt = /\[\]$/,
                Dt = /\r?\n/g,
                Ot = /^(?:submit|button|image|reset|file)$/i,
                Rt = /^(?:input|select|textarea|keygen)/i;
            (C.param = function (e, t) {
                function n(e, t) {
                    (t = b(t) ? t() : t), (o[o.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == t ? "" : t));
                }
                var r,
                    o = [];
                if (null == e) return "";
                if (Array.isArray(e) || (e.jquery && !C.isPlainObject(e)))
                    C.each(e, function () {
                        n(this.name, this.value);
                    });
                else
                    for (r in e)
                        !(function n(r, e, o, i) {
                            if (Array.isArray(e))
                                C.each(e, function (e, t) {
                                    o || jt.test(r) ? i(r, t) : n(r + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, o, i);
                                });
                            else if (o || "object" !== d(e)) i(r, e);
                            else for (var t in e) n(r + "[" + t + "]", e[t], o, i);
                        })(r, e[r], t, n);
                return o.join("&");
            }),
                C.fn.extend({
                    serialize: function () {
                        return C.param(this.serializeArray());
                    },
                    serializeArray: function () {
                        return this.map(function () {
                            var e = C.prop(this, "elements");
                            return e ? C.makeArray(e) : this;
                        })
                            .filter(function () {
                                var e = this.type;
                                return this.name && !C(this).is(":disabled") && Rt.test(this.nodeName) && !Ot.test(e) && (this.checked || !ce.test(e));
                            })
                            .map(function (e, t) {
                                var n = C(this).val();
                                return null == n
                                    ? null
                                    : Array.isArray(n)
                                    ? C.map(n, function (e) {
                                          return {
                                              name: t.name,
                                              value: e.replace(Dt, "\r\n"),
                                          };
                                      })
                                    : {
                                          name: t.name,
                                          value: n.replace(Dt, "\r\n"),
                                      };
                            })
                            .get();
                    },
                });
            var Nt = /%20/g,
                Lt = /#.*$/,
                Pt = /([?&])_=[^&]*/,
                _t = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                Mt = /^(?:GET|HEAD)$/,
                It = /^\/\//,
                Bt = {},
                qt = {},
                Ht = "*/".concat("*"),
                Ut = T.createElement("a");
            function Ft(i) {
                return function (e, t) {
                    "string" != typeof e && ((t = e), (e = "*"));
                    var n,
                        r = 0,
                        o = e.toLowerCase().match(P) || [];
                    if (b(t)) for (; (n = o[r++]); ) "+" === n[0] ? ((n = n.slice(1) || "*"), (i[n] = i[n] || []).unshift(t)) : (i[n] = i[n] || []).push(t);
                };
            }
            function Wt(t, r, o, i) {
                var a = {},
                    s = t === qt;
                function u(e) {
                    var n;
                    return (
                        (a[e] = !0),
                        C.each(t[e] || [], function (e, t) {
                            t = t(r, o, i);
                            return "string" != typeof t || s || a[t] ? (s ? !(n = t) : void 0) : (r.dataTypes.unshift(t), u(t), !1);
                        }),
                        n
                    );
                }
                return u(r.dataTypes[0]) || (!a["*"] && u("*"));
            }
            function Yt(e, t) {
                var n,
                    r,
                    o = C.ajaxSettings.flatOptions || {};
                for (n in t) void 0 !== t[n] && ((o[n] ? e : (r = r || {}))[n] = t[n]);
                return r && C.extend(!0, e, r), e;
            }
            (Ut.href = Et.href),
                C.extend({
                    active: 0,
                    lastModified: {},
                    etag: {},
                    ajaxSettings: {
                        url: Et.href,
                        type: "GET",
                        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),
                        global: !0,
                        processData: !0,
                        async: !0,
                        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                        accepts: {
                            "*": Ht,
                            text: "text/plain",
                            html: "text/html",
                            xml: "application/xml, text/xml",
                            json: "application/json, text/javascript",
                        },
                        contents: {
                            xml: /\bxml\b/,
                            html: /\bhtml/,
                            json: /\bjson\b/,
                        },
                        responseFields: {
                            xml: "responseXML",
                            text: "responseText",
                            json: "responseJSON",
                        },
                        converters: {
                            "* text": String,
                            "text html": !0,
                            "text json": JSON.parse,
                            "text xml": C.parseXML,
                        },
                        flatOptions: {
                            url: !0,
                            context: !0,
                        },
                    },
                    ajaxSetup: function (e, t) {
                        return t ? Yt(Yt(e, C.ajaxSettings), t) : Yt(C.ajaxSettings, e);
                    },
                    ajaxPrefilter: Ft(Bt),
                    ajaxTransport: Ft(qt),
                    ajax: function (e, t) {
                        "object" == typeof e && ((t = e), (e = void 0));
                        var u,
                            c,
                            l,
                            n,
                            f,
                            p,
                            h,
                            r,
                            o,
                            d = C.ajaxSetup({}, (t = t || {})),
                            g = d.context || d,
                            y = d.context && (g.nodeType || g.jquery) ? C(g) : C.event,
                            v = C.Deferred(),
                            m = C.Callbacks("once memory"),
                            b = d.statusCode || {},
                            i = {},
                            a = {},
                            s = "canceled",
                            x = {
                                readyState: 0,
                                getResponseHeader: function (e) {
                                    var t;
                                    if (p) {
                                        if (!n) for (n = {}; (t = _t.exec(l)); ) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                        t = n[e.toLowerCase() + " "];
                                    }
                                    return null == t ? null : t.join(", ");
                                },
                                getAllResponseHeaders: function () {
                                    return p ? l : null;
                                },
                                setRequestHeader: function (e, t) {
                                    return null == p && ((e = a[e.toLowerCase()] = a[e.toLowerCase()] || e), (i[e] = t)), this;
                                },
                                overrideMimeType: function (e) {
                                    return null == p && (d.mimeType = e), this;
                                },
                                statusCode: function (e) {
                                    if (e)
                                        if (p) x.always(e[x.status]);
                                        else for (var t in e) b[t] = [b[t], e[t]];
                                    return this;
                                },
                                abort: function (e) {
                                    e = e || s;
                                    return u && u.abort(e), w(0, e), this;
                                },
                            };
                        if (
                            (v.promise(x),
                            (d.url = ((e || d.url || Et.href) + "").replace(It, Et.protocol + "//")),
                            (d.type = t.method || t.type || d.method || d.type),
                            (d.dataTypes = (d.dataType || "*").toLowerCase().match(P) || [""]),
                            null == d.crossDomain)
                        ) {
                            o = T.createElement("a");
                            try {
                                (o.href = d.url), (o.href = o.href), (d.crossDomain = Ut.protocol + "//" + Ut.host != o.protocol + "//" + o.host);
                            } catch (e) {
                                d.crossDomain = !0;
                            }
                        }
                        if ((d.data && d.processData && "string" != typeof d.data && (d.data = C.param(d.data, d.traditional)), Wt(Bt, d, t, x), p)) return x;
                        for (r in ((h = C.event && d.global) && 0 == C.active++ && C.event.trigger("ajaxStart"),
                        (d.type = d.type.toUpperCase()),
                        (d.hasContent = !Mt.test(d.type)),
                        (c = d.url.replace(Lt, "")),
                        d.hasContent
                            ? d.data && d.processData && 0 === (d.contentType || "").indexOf("application/x-www-form-urlencoded") && (d.data = d.data.replace(Nt, "+"))
                            : ((o = d.url.slice(c.length)),
                              d.data && (d.processData || "string" == typeof d.data) && ((c += (St.test(c) ? "&" : "?") + d.data), delete d.data),
                              !1 === d.cache && ((c = c.replace(Pt, "$1")), (o = (St.test(c) ? "&" : "?") + "_=" + At.guid++ + o)),
                              (d.url = c + o)),
                        d.ifModified && (C.lastModified[c] && x.setRequestHeader("If-Modified-Since", C.lastModified[c]), C.etag[c] && x.setRequestHeader("If-None-Match", C.etag[c])),
                        ((d.data && d.hasContent && !1 !== d.contentType) || t.contentType) && x.setRequestHeader("Content-Type", d.contentType),
                        x.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Ht + "; q=0.01" : "") : d.accepts["*"]),
                        d.headers))
                            x.setRequestHeader(r, d.headers[r]);
                        if (d.beforeSend && (!1 === d.beforeSend.call(g, x, d) || p)) return x.abort();
                        if (((s = "abort"), m.add(d.complete), x.done(d.success), x.fail(d.error), (u = Wt(qt, d, t, x)))) {
                            if (((x.readyState = 1), h && y.trigger("ajaxSend", [x, d]), p)) return x;
                            d.async &&
                                0 < d.timeout &&
                                (f = k.setTimeout(function () {
                                    x.abort("timeout");
                                }, d.timeout));
                            try {
                                (p = !1), u.send(i, w);
                            } catch (e) {
                                if (p) throw e;
                                w(-1, e);
                            }
                        } else w(-1, "No Transport");
                        function w(e, t, n, r) {
                            var o,
                                i,
                                a,
                                s = t;
                            p ||
                                ((p = !0),
                                f && k.clearTimeout(f),
                                (u = void 0),
                                (l = r || ""),
                                (x.readyState = 0 < e ? 4 : 0),
                                (r = (200 <= e && e < 300) || 304 === e),
                                n &&
                                    (a = (function (e, t, n) {
                                        for (var r, o, i, a, s = e.contents, u = e.dataTypes; "*" === u[0]; ) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                                        if (r)
                                            for (o in s)
                                                if (s[o] && s[o].test(r)) {
                                                    u.unshift(o);
                                                    break;
                                                }
                                        if (u[0] in n) i = u[0];
                                        else {
                                            for (o in n) {
                                                if (!u[0] || e.converters[o + " " + u[0]]) {
                                                    i = o;
                                                    break;
                                                }
                                                a = a || o;
                                            }
                                            i = i || a;
                                        }
                                        if (i) return i !== u[0] && u.unshift(i), n[i];
                                    })(d, x, n)),
                                !r && -1 < C.inArray("script", d.dataTypes) && C.inArray("json", d.dataTypes) < 0 && (d.converters["text script"] = function () {}),
                                (a = (function (e, t, n, r) {
                                    var o,
                                        i,
                                        a,
                                        s,
                                        u,
                                        c = {},
                                        l = e.dataTypes.slice();
                                    if (l[1]) for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
                                    for (i = l.shift(); i; )
                                        if ((e.responseFields[i] && (n[e.responseFields[i]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), (u = i), (i = l.shift())))
                                            if ("*" === i) i = u;
                                            else if ("*" !== u && u !== i) {
                                                if (!(a = c[u + " " + i] || c["* " + i]))
                                                    for (o in c)
                                                        if ((s = o.split(" "))[1] === i && (a = c[u + " " + s[0]] || c["* " + s[0]])) {
                                                            !0 === a ? (a = c[o]) : !0 !== c[o] && ((i = s[0]), l.unshift(s[1]));
                                                            break;
                                                        }
                                                if (!0 !== a)
                                                    if (a && e.throws) t = a(t);
                                                    else
                                                        try {
                                                            t = a(t);
                                                        } catch (e) {
                                                            return {
                                                                state: "parsererror",
                                                                error: a ? e : "No conversion from " + u + " to " + i,
                                                            };
                                                        }
                                            }
                                    return {
                                        state: "success",
                                        data: t,
                                    };
                                })(d, a, x, r)),
                                r
                                    ? (d.ifModified && ((n = x.getResponseHeader("Last-Modified")) && (C.lastModified[c] = n), (n = x.getResponseHeader("etag")) && (C.etag[c] = n)),
                                      204 === e || "HEAD" === d.type ? (s = "nocontent") : 304 === e ? (s = "notmodified") : ((s = a.state), (o = a.data), (r = !(i = a.error))))
                                    : ((i = s), (!e && s) || ((s = "error"), e < 0 && (e = 0))),
                                (x.status = e),
                                (x.statusText = (t || s) + ""),
                                r ? v.resolveWith(g, [o, s, x]) : v.rejectWith(g, [x, s, i]),
                                x.statusCode(b),
                                (b = void 0),
                                h && y.trigger(r ? "ajaxSuccess" : "ajaxError", [x, d, r ? o : i]),
                                m.fireWith(g, [x, s]),
                                h && (y.trigger("ajaxComplete", [x, d]), --C.active || C.event.trigger("ajaxStop")));
                        }
                        return x;
                    },
                    getJSON: function (e, t, n) {
                        return C.get(e, t, n, "json");
                    },
                    getScript: function (e, t) {
                        return C.get(e, void 0, t, "script");
                    },
                }),
                C.each(["get", "post"], function (e, o) {
                    C[o] = function (e, t, n, r) {
                        return (
                            b(t) && ((r = r || n), (n = t), (t = void 0)),
                            C.ajax(
                                C.extend(
                                    {
                                        url: e,
                                        type: o,
                                        dataType: r,
                                        data: t,
                                        success: n,
                                    },
                                    C.isPlainObject(e) && e
                                )
                            )
                        );
                    };
                }),
                C.ajaxPrefilter(function (e) {
                    for (var t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
                }),
                (C._evalUrl = function (e, t, n) {
                    return C.ajax({
                        url: e,
                        type: "GET",
                        dataType: "script",
                        cache: !0,
                        async: !1,
                        global: !1,
                        converters: {
                            "text script": function () {},
                        },
                        dataFilter: function (e) {
                            C.globalEval(e, t, n);
                        },
                    });
                }),
                C.fn.extend({
                    wrapAll: function (e) {
                        return (
                            this[0] &&
                                (b(e) && (e = e.call(this[0])),
                                (e = C(e, this[0].ownerDocument).eq(0).clone(!0)),
                                this[0].parentNode && e.insertBefore(this[0]),
                                e
                                    .map(function () {
                                        for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                                        return e;
                                    })
                                    .append(this)),
                            this
                        );
                    },
                    wrapInner: function (n) {
                        return b(n)
                            ? this.each(function (e) {
                                  C(this).wrapInner(n.call(this, e));
                              })
                            : this.each(function () {
                                  var e = C(this),
                                      t = e.contents();
                                  t.length ? t.wrapAll(n) : e.append(n);
                              });
                    },
                    wrap: function (t) {
                        var n = b(t);
                        return this.each(function (e) {
                            C(this).wrapAll(n ? t.call(this, e) : t);
                        });
                    },
                    unwrap: function (e) {
                        return (
                            this.parent(e)
                                .not("body")
                                .each(function () {
                                    C(this).replaceWith(this.childNodes);
                                }),
                            this
                        );
                    },
                }),
                (C.expr.pseudos.hidden = function (e) {
                    return !C.expr.pseudos.visible(e);
                }),
                (C.expr.pseudos.visible = function (e) {
                    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
                }),
                (C.ajaxSettings.xhr = function () {
                    try {
                        return new k.XMLHttpRequest();
                    } catch (e) {}
                });
            var $t = {
                    0: 200,
                    1223: 204,
                },
                zt = C.ajaxSettings.xhr();
            (m.cors = !!zt && "withCredentials" in zt),
                (m.ajax = zt = !!zt),
                C.ajaxTransport(function (o) {
                    var i, a;
                    if (m.cors || (zt && !o.crossDomain))
                        return {
                            send: function (e, t) {
                                var n,
                                    r = o.xhr();
                                if ((r.open(o.type, o.url, o.async, o.username, o.password), o.xhrFields)) for (n in o.xhrFields) r[n] = o.xhrFields[n];
                                for (n in (o.mimeType && r.overrideMimeType && r.overrideMimeType(o.mimeType), o.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e)) r.setRequestHeader(n, e[n]);
                                (i = function (e) {
                                    return function () {
                                        i &&
                                            ((i = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null),
                                            "abort" === e
                                                ? r.abort()
                                                : "error" === e
                                                ? "number" != typeof r.status
                                                    ? t(0, "error")
                                                    : t(r.status, r.statusText)
                                                : t(
                                                      $t[r.status] || r.status,
                                                      r.statusText,
                                                      "text" !== (r.responseType || "text") || "string" != typeof r.responseText
                                                          ? {
                                                                binary: r.response,
                                                            }
                                                          : {
                                                                text: r.responseText,
                                                            },
                                                      r.getAllResponseHeaders()
                                                  ));
                                    };
                                }),
                                    (r.onload = i()),
                                    (a = r.onerror = r.ontimeout = i("error")),
                                    void 0 !== r.onabort
                                        ? (r.onabort = a)
                                        : (r.onreadystatechange = function () {
                                              4 === r.readyState &&
                                                  k.setTimeout(function () {
                                                      i && a();
                                                  });
                                          }),
                                    (i = i("abort"));
                                try {
                                    r.send((o.hasContent && o.data) || null);
                                } catch (e) {
                                    if (i) throw e;
                                }
                            },
                            abort: function () {
                                i && i();
                            },
                        };
                }),
                C.ajaxPrefilter(function (e) {
                    e.crossDomain && (e.contents.script = !1);
                }),
                C.ajaxSetup({
                    accepts: {
                        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
                    },
                    contents: {
                        script: /\b(?:java|ecma)script\b/,
                    },
                    converters: {
                        "text script": function (e) {
                            return C.globalEval(e), e;
                        },
                    },
                }),
                C.ajaxPrefilter("script", function (e) {
                    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
                }),
                C.ajaxTransport("script", function (n) {
                    var r, o;
                    if (n.crossDomain || n.scriptAttrs)
                        return {
                            send: function (e, t) {
                                (r = C("<script>")
                                    .attr(n.scriptAttrs || {})
                                    .prop({
                                        charset: n.scriptCharset,
                                        src: n.url,
                                    })
                                    .on(
                                        "load error",
                                        (o = function (e) {
                                            r.remove(), (o = null), e && t("error" === e.type ? 404 : 200, e.type);
                                        })
                                    )),
                                    T.head.appendChild(r[0]);
                            },
                            abort: function () {
                                o && o();
                            },
                        };
                });
            var Vt,
                Xt = [],
                Gt = /(=)\?(?=&|$)|\?\?/;
            C.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function () {
                    var e = Xt.pop() || C.expando + "_" + At.guid++;
                    return (this[e] = !0), e;
                },
            }),
                C.ajaxPrefilter("json jsonp", function (e, t, n) {
                    var r,
                        o,
                        i,
                        a = !1 !== e.jsonp && (Gt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Gt.test(e.data) && "data");
                    if (a || "jsonp" === e.dataTypes[0])
                        return (
                            (r = e.jsonpCallback = b(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                            a ? (e[a] = e[a].replace(Gt, "$1" + r)) : !1 !== e.jsonp && (e.url += (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
                            (e.converters["script json"] = function () {
                                return i || C.error(r + " was not called"), i[0];
                            }),
                            (e.dataTypes[0] = "json"),
                            (o = k[r]),
                            (k[r] = function () {
                                i = arguments;
                            }),
                            n.always(function () {
                                void 0 === o ? C(k).removeProp(r) : (k[r] = o), e[r] && ((e.jsonpCallback = t.jsonpCallback), Xt.push(r)), i && b(o) && o(i[0]), (i = o = void 0);
                            }),
                            "script"
                        );
                }),
                (m.createHTMLDocument = (((Vt = T.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>"), 2 === Vt.childNodes.length)),
                (C.parseHTML = function (e, t, n) {
                    return "string" != typeof e
                        ? []
                        : ("boolean" == typeof t && ((n = t), (t = !1)),
                          t || (m.createHTMLDocument ? (((r = (t = T.implementation.createHTMLDocument("")).createElement("base")).href = T.location.href), t.head.appendChild(r)) : (t = T)),
                          (r = !n && []),
                          (n = S.exec(e)) ? [t.createElement(n[1])] : ((n = ye([e], t, r)), r && r.length && C(r).remove(), C.merge([], n.childNodes)));
                    var r;
                }),
                (C.fn.load = function (e, t, n) {
                    var r,
                        o,
                        i,
                        a = this,
                        s = e.indexOf(" ");
                    return (
                        -1 < s && ((r = bt(e.slice(s))), (e = e.slice(0, s))),
                        b(t) ? ((n = t), (t = void 0)) : t && "object" == typeof t && (o = "POST"),
                        0 < a.length &&
                            C.ajax({
                                url: e,
                                type: o || "GET",
                                dataType: "html",
                                data: t,
                            })
                                .done(function (e) {
                                    (i = arguments), a.html(r ? C("<div>").append(C.parseHTML(e)).find(r) : e);
                                })
                                .always(
                                    n &&
                                        function (e, t) {
                                            a.each(function () {
                                                n.apply(this, i || [e.responseText, t, e]);
                                            });
                                        }
                                ),
                        this
                    );
                }),
                (C.expr.pseudos.animated = function (t) {
                    return C.grep(C.timers, function (e) {
                        return t === e.elem;
                    }).length;
                }),
                (C.offset = {
                    setOffset: function (e, t, n) {
                        var r,
                            o,
                            i,
                            a,
                            s = C.css(e, "position"),
                            u = C(e),
                            c = {};
                        "static" === s && (e.style.position = "relative"),
                            (i = u.offset()),
                            (r = C.css(e, "top")),
                            (a = C.css(e, "left")),
                            (a = ("absolute" === s || "fixed" === s) && -1 < (r + a).indexOf("auto") ? ((o = (s = u.position()).top), s.left) : ((o = parseFloat(r) || 0), parseFloat(a) || 0)),
                            null != (t = b(t) ? t.call(e, n, C.extend({}, i)) : t).top && (c.top = t.top - i.top + o),
                            null != t.left && (c.left = t.left - i.left + a),
                            "using" in t ? t.using.call(e, c) : u.css(c);
                    },
                }),
                C.fn.extend({
                    offset: function (t) {
                        if (arguments.length)
                            return void 0 === t
                                ? this
                                : this.each(function (e) {
                                      C.offset.setOffset(this, t, e);
                                  });
                        var e,
                            n = this[0];
                        return n
                            ? n.getClientRects().length
                                ? ((e = n.getBoundingClientRect()),
                                  (n = n.ownerDocument.defaultView),
                                  {
                                      top: e.top + n.pageYOffset,
                                      left: e.left + n.pageXOffset,
                                  })
                                : {
                                      top: 0,
                                      left: 0,
                                  }
                            : void 0;
                    },
                    position: function () {
                        if (this[0]) {
                            var e,
                                t,
                                n,
                                r = this[0],
                                o = {
                                    top: 0,
                                    left: 0,
                                };
                            if ("fixed" === C.css(r, "position")) t = r.getBoundingClientRect();
                            else {
                                for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === C.css(e, "position"); ) e = e.parentNode;
                                e && e !== r && 1 === e.nodeType && (((o = C(e).offset()).top += C.css(e, "borderTopWidth", !0)), (o.left += C.css(e, "borderLeftWidth", !0)));
                            }
                            return {
                                top: t.top - o.top - C.css(r, "marginTop", !0),
                                left: t.left - o.left - C.css(r, "marginLeft", !0),
                            };
                        }
                    },
                    offsetParent: function () {
                        return this.map(function () {
                            for (var e = this.offsetParent; e && "static" === C.css(e, "position"); ) e = e.offsetParent;
                            return e || ne;
                        });
                    },
                }),
                C.each(
                    {
                        scrollLeft: "pageXOffset",
                        scrollTop: "pageYOffset",
                    },
                    function (t, o) {
                        var i = "pageYOffset" === o;
                        C.fn[t] = function (e) {
                            return U(
                                this,
                                function (e, t, n) {
                                    var r;
                                    return g(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView), void 0 === n ? (r ? r[o] : e[t]) : void (r ? r.scrollTo(i ? r.pageXOffset : n, i ? n : r.pageYOffset) : (e[t] = n));
                                },
                                t,
                                e,
                                arguments.length
                            );
                        };
                    }
                ),
                C.each(["top", "left"], function (e, n) {
                    C.cssHooks[n] = Ve(m.pixelPosition, function (e, t) {
                        if (t) return (t = ze(e, n)), Ue.test(t) ? C(e).position()[n] + "px" : t;
                    });
                }),
                C.each(
                    {
                        Height: "height",
                        Width: "width",
                    },
                    function (a, s) {
                        C.each(
                            {
                                padding: "inner" + a,
                                content: s,
                                "": "outer" + a,
                            },
                            function (r, i) {
                                C.fn[i] = function (e, t) {
                                    var n = arguments.length && (r || "boolean" != typeof e),
                                        o = r || (!0 === e || !0 === t ? "margin" : "border");
                                    return U(
                                        this,
                                        function (e, t, n) {
                                            var r;
                                            return g(e)
                                                ? 0 === i.indexOf("outer")
                                                    ? e["inner" + a]
                                                    : e.document.documentElement["client" + a]
                                                : 9 === e.nodeType
                                                ? ((r = e.documentElement), Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a]))
                                                : void 0 === n
                                                ? C.css(e, t, o)
                                                : C.style(e, t, n, o);
                                        },
                                        s,
                                        n ? e : void 0,
                                        n
                                    );
                                };
                            }
                        );
                    }
                ),
                C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
                    C.fn[t] = function (e) {
                        return this.on(t, e);
                    };
                }),
                C.fn.extend({
                    bind: function (e, t, n) {
                        return this.on(e, null, t, n);
                    },
                    unbind: function (e, t) {
                        return this.off(e, null, t);
                    },
                    delegate: function (e, t, n, r) {
                        return this.on(t, e, n, r);
                    },
                    undelegate: function (e, t, n) {
                        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
                    },
                    hover: function (e, t) {
                        return this.mouseenter(e).mouseleave(t || e);
                    },
                }),
                C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
                    C.fn[n] = function (e, t) {
                        return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
                    };
                });
            var Jt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            (C.proxy = function (e, t) {
                var n, r;
                if (("string" == typeof t && ((r = e[t]), (t = e), (e = r)), b(e)))
                    return (
                        (n = s.call(arguments, 2)),
                        ((r = function () {
                            return e.apply(t || this, n.concat(s.call(arguments)));
                        }).guid = e.guid = e.guid || C.guid++),
                        r
                    );
            }),
                (C.holdReady = function (e) {
                    e ? C.readyWait++ : C.ready(!0);
                }),
                (C.isArray = Array.isArray),
                (C.parseJSON = JSON.parse),
                (C.nodeName = A),
                (C.isFunction = b),
                (C.isWindow = g),
                (C.camelCase = $),
                (C.type = d),
                (C.now = Date.now),
                (C.isNumeric = function (e) {
                    var t = C.type(e);
                    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
                }),
                (C.trim = function (e) {
                    return null == e ? "" : (e + "").replace(Jt, "");
                }),
                void 0 ===
                    (tn = function () {
                        return C;
                    }.apply(en, [])) || (Zt.exports = tn);
            var Qt = k.jQuery,
                Kt = k.$;
            return (
                (C.noConflict = function (e) {
                    return k.$ === C && (k.$ = Kt), e && k.jQuery === C && (k.jQuery = Qt), C;
                }),
                void 0 === e && (k.jQuery = k.$ = C),
                C
            );
        });
    },
    function (e, t) {
        e.exports = function (e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t,
            };
        };
    },
    function (e, t, n) {
        var r = n(40),
            o = n(14);
        e.exports = function (e) {
            return r(o(e));
        };
    },
    function (e, t, n) {
        var o = n(6);
        e.exports = function (e, t) {
            if (!o(e)) return e;
            var n, r;
            if (t && "function" == typeof (n = e.toString) && !o((r = n.call(e)))) return r;
            if ("function" == typeof (n = e.valueOf) && !o((r = n.call(e)))) return r;
            if (!t && "function" == typeof (n = e.toString) && !o((r = n.call(e)))) return r;
            throw TypeError("Can't convert object to primitive value");
        };
    },
    function (e, t, n) {
        var r = n(14);
        e.exports = function (e) {
            return Object(r(e));
        };
    },
    function (e, t, n) {
        var r = n(2),
            o = n(9);
        e.exports = function (t, n) {
            try {
                o(r, t, n);
            } catch (e) {
                r[t] = n;
            }
            return n;
        };
    },
    function (e, t, n) {
        var r = n(2),
            o = n(24),
            n = "__core-js_shared__",
            n = r[n] || o(n, {});
        e.exports = n;
    },
    function (e, t, n) {
        var r = n(71),
            o = n(25);
        (e.exports = function (e, t) {
            return o[e] || (o[e] = void 0 !== t ? t : {});
        })("versions", []).push({
            version: "3.15.2",
            mode: r ? "pure" : "global",
            copyright: "© 2021 Denis Pushkarev (zloirock.ru)",
        });
    },
    function (e, t) {
        e.exports = {};
    },
    function (e, t, n) {
        function r(e) {
            return "function" == typeof e ? e : void 0;
        }
        var o = n(74),
            i = n(2);
        e.exports = function (e, t) {
            return arguments.length < 2 ? r(o[e]) || r(i[e]) : (o[e] && o[e][t]) || (i[e] && i[e][t]);
        };
    },
    function (e, t) {
        var n = Math.ceil,
            r = Math.floor;
        e.exports = function (e) {
            return isNaN((e = +e)) ? 0 : (0 < e ? r : n)(e);
        };
    },
    function (e, t) {
        e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
    },
    function (e, t, n) {
        var x = n(79),
            w = n(40),
            k = n(23),
            T = n(15),
            C = n(50),
            E = [].push,
            n = function (p) {
                var h = 1 == p,
                    d = 2 == p,
                    g = 3 == p,
                    y = 4 == p,
                    v = 6 == p,
                    m = 7 == p,
                    b = 5 == p || v;
                return function (e, t, n, r) {
                    for (var o, i, a = k(e), s = w(a), u = x(t, n, 3), c = T(s.length), l = 0, r = r || C, f = h ? r(e, c) : d || m ? r(e, 0) : void 0; l < c; l++)
                        if ((b || l in s) && ((i = u((o = s[l]), l, a)), p))
                            if (h) f[l] = i;
                            else if (i)
                                switch (p) {
                                    case 3:
                                        return !0;
                                    case 5:
                                        return o;
                                    case 6:
                                        return l;
                                    case 2:
                                        E.call(f, o);
                                }
                            else
                                switch (p) {
                                    case 4:
                                        return !1;
                                    case 7:
                                        E.call(f, o);
                                }
                    return v ? -1 : g || y ? y : f;
                };
            };
        e.exports = {
            forEach: n(0),
            map: n(1),
            filter: n(2),
            some: n(3),
            every: n(4),
            find: n(5),
            findIndex: n(6),
            filterOut: n(7),
        };
    },
    function (e, t, n) {
        var r,
            o,
            i = n(2),
            n = n(80),
            i = i.process,
            i = i && i.versions,
            i = i && i.v8;
        i ? (o = (r = i.split("."))[0] < 4 ? 1 : r[0] + r[1]) : n && (!(r = n.match(/Edge\/(\d+)/)) || 74 <= r[1]) && (r = n.match(/Chrome\/(\d+)/)) && (o = r[1]), (e.exports = o && +o);
    },
    function (e, t, n) {
        "use strict";
        var r = n(5),
            o = n(1),
            c = n(51),
            l = n(6),
            f = n(23),
            p = n(15),
            h = n(86),
            d = n(50),
            i = n(87),
            a = n(3),
            n = n(32),
            g = a("isConcatSpreadable"),
            y = 9007199254740991,
            v = "Maximum allowed index exceeded",
            o =
                51 <= n ||
                !o(function () {
                    var e = [];
                    return (e[g] = !1), e.concat()[0] !== e;
                }),
            i = i("concat");
        r(
            {
                target: "Array",
                proto: !0,
                forced: !o || !i,
            },
            {
                concat: function (e) {
                    for (var t, n, r, o = f(this), i = d(o, 0), a = 0, s = -1, u = arguments.length; s < u; s++)
                        if (
                            (function (e) {
                                if (!l(e)) return !1;
                                var t = e[g];
                                return void 0 !== t ? !!t : c(e);
                            })((r = -1 === s ? o : arguments[s]))
                        ) {
                            if (((n = p(r.length)), y < a + n)) throw TypeError(v);
                            for (t = 0; t < n; t++, a++) t in r && h(i, a, r[t]);
                        } else {
                            if (y <= a) throw TypeError(v);
                            h(i, a++, r);
                        }
                    return (i.length = a), i;
                },
            }
        );
    },
    function (e, t, n) {
        var r = {};
        (r[n(3)("toStringTag")] = "z"), (e.exports = "[object z]" === String(r));
    },
    function (e, t, n) {
        "use strict";
        var r = n(5),
            n = n(16);
        r(
            {
                target: "RegExp",
                proto: !0,
                forced: /./.exec !== n,
            },
            {
                exec: n,
            }
        );
    },
    function (e, t, n) {
        "use strict";
        var r = n(1);
        e.exports = function (e, t) {
            var n = [][e];
            return (
                !!n &&
                r(function () {
                    n.call(
                        null,
                        t ||
                            function () {
                                throw 1;
                            },
                        1
                    );
                })
            );
        };
    },
    function (e, t, n) {
        "use strict";
        var r = n(5),
            o = n(31).find,
            i = n(82),
            n = "find",
            a = !0;
        n in [] &&
            Array(1)[n](function () {
                a = !1;
            }),
            r(
                {
                    target: "Array",
                    proto: !0,
                    forced: a,
                },
                {
                    find: function (e) {
                        return o(this, e, 1 < arguments.length ? arguments[1] : void 0);
                    },
                }
            ),
            i(n);
    },
    function (e, t) {
        var n = (function () {
            return this;
        })();
        try {
            n = n || new Function("return this")();
        } catch (e) {
            "object" == typeof window && (n = window);
        }
        e.exports = n;
    },
    function (e, t, n) {
        var r = n(7),
            o = n(69),
            i = n(20),
            a = n(21),
            s = n(22),
            u = n(8),
            c = n(41),
            l = Object.getOwnPropertyDescriptor;
        t.f = r
            ? l
            : function (e, t) {
                  if (((e = a(e)), (t = s(t, !0)), c))
                      try {
                          return l(e, t);
                      } catch (e) {}
                  if (u(e, t)) return i(!o.f.call(e, t), e[t]);
              };
    },
    function (e, t, n) {
        var r = n(1),
            o = n(11),
            i = "".split;
        e.exports = r(function () {
            return !Object("z").propertyIsEnumerable(0);
        })
            ? function (e) {
                  return "String" == o(e) ? i.call(e, "") : Object(e);
              }
            : Object;
    },
    function (e, t, n) {
        var r = n(7),
            o = n(1),
            i = n(42);
        e.exports =
            !r &&
            !o(function () {
                return (
                    7 !=
                    Object.defineProperty(i("div"), "a", {
                        get: function () {
                            return 7;
                        },
                    }).a
                );
            });
    },
    function (e, t, n) {
        var r = n(2),
            n = n(6),
            o = r.document,
            i = n(o) && n(o.createElement);
        e.exports = function (e) {
            return i ? o.createElement(e) : {};
        };
    },
    function (e, t, n) {
        var n = n(25),
            r = Function.toString;
        "function" != typeof n.inspectSource &&
            (n.inspectSource = function (e) {
                return r.call(e);
            }),
            (e.exports = n.inspectSource);
    },
    function (e, t, n) {
        var r,
            o,
            i,
            a,
            s,
            u,
            c,
            l,
            f = n(70),
            p = n(2),
            h = n(6),
            d = n(9),
            g = n(8),
            y = n(25),
            v = n(45),
            n = n(27),
            m = "Object already initialized",
            p = p.WeakMap;
        (c =
            f || y.state
                ? ((r = y.state || (y.state = new p())),
                  (o = r.get),
                  (i = r.has),
                  (a = r.set),
                  (s = function (e, t) {
                      if (i.call(r, e)) throw new TypeError(m);
                      return (t.facade = e), a.call(r, e, t), t;
                  }),
                  (u = function (e) {
                      return o.call(r, e) || {};
                  }),
                  function (e) {
                      return i.call(r, e);
                  })
                : ((n[(l = v("state"))] = !0),
                  (s = function (e, t) {
                      if (g(e, l)) throw new TypeError(m);
                      return (t.facade = e), d(e, l, t), t;
                  }),
                  (u = function (e) {
                      return g(e, l) ? e[l] : {};
                  }),
                  function (e) {
                      return g(e, l);
                  })),
            (e.exports = {
                set: s,
                get: u,
                has: c,
                enforce: function (e) {
                    return c(e) ? u(e) : s(e, {});
                },
                getterFor: function (n) {
                    return function (e) {
                        var t;
                        if (!h(e) || (t = u(e)).type !== n) throw TypeError("Incompatible receiver, " + n + " required");
                        return t;
                    };
                },
            });
    },
    function (e, t, n) {
        var r = n(26),
            o = n(46),
            i = r("keys");
        e.exports = function (e) {
            return i[e] || (i[e] = o(e));
        };
    },
    function (e, t) {
        var n = 0,
            r = Math.random();
        e.exports = function (e) {
            return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++n + r).toString(36);
        };
    },
    function (e, t, n) {
        var a = n(8),
            s = n(21),
            u = n(48).indexOf,
            c = n(27);
        e.exports = function (e, t) {
            var n,
                r = s(e),
                o = 0,
                i = [];
            for (n in r) !a(c, n) && a(r, n) && i.push(n);
            for (; t.length > o; ) a(r, (n = t[o++])) && (~u(i, n) || i.push(n));
            return i;
        };
    },
    function (e, t, n) {
        var u = n(21),
            c = n(15),
            l = n(76),
            n = function (s) {
                return function (e, t, n) {
                    var r,
                        o = u(e),
                        i = c(o.length),
                        a = l(n, i);
                    if (s && t != t) {
                        for (; a < i; ) if ((r = o[a++]) != r) return !0;
                    } else for (; a < i; a++) if ((s || a in o) && o[a] === t) return s || a || 0;
                    return !s && -1;
                };
            };
        e.exports = {
            includes: n(!0),
            indexOf: n(!1),
        };
    },
    function (e, t) {
        e.exports = function (e) {
            if ("function" != typeof e) throw TypeError(String(e) + " is not a function");
            return e;
        };
    },
    function (e, t, n) {
        var r = n(6),
            o = n(51),
            i = n(3)("species");
        e.exports = function (e, t) {
            var n;
            return new (void 0 === (n = o(e) && (("function" == typeof (n = e.constructor) && (n === Array || o(n.prototype))) || (r(n) && null === (n = n[i]))) ? void 0 : n) ? Array : n)(0 === t ? 0 : t);
        };
    },
    function (e, t, n) {
        var r = n(11);
        e.exports =
            Array.isArray ||
            function (e) {
                return "Array" == r(e);
            };
    },
    function (e, t, n) {
        var r = n(32),
            n = n(1);
        e.exports =
            !!Object.getOwnPropertySymbols &&
            !n(function () {
                var e = Symbol();
                return !String(e) || !(Object(e) instanceof Symbol) || (!Symbol.sham && r && r < 41);
            });
    },
    function (e, t, n) {
        function r() {}
        function o(e) {
            return "<script>" + e + "</" + h + ">";
        }
        var i,
            a = n(4),
            s = n(83),
            u = n(30),
            c = n(27),
            l = n(85),
            f = n(42),
            n = n(45),
            p = "prototype",
            h = "script",
            d = n("IE_PROTO"),
            g = function () {
                try {
                    i = document.domain && new ActiveXObject("htmlfile");
                } catch (e) {}
                var e;
                g = i
                    ? (function (e) {
                          e.write(o("")), e.close();
                          var t = e.parentWindow.Object;
                          return (e = null), t;
                      })(i)
                    : (((e = f("iframe")).style.display = "none"), l.appendChild(e), (e.src = String("javascript:")), (e = e.contentWindow.document).open(), e.write(o("document.F=Object")), e.close(), e.F);
                for (var t = u.length; t--; ) delete g[p][u[t]];
                return g();
            };
        (c[d] = !0),
            (e.exports =
                Object.create ||
                function (e, t) {
                    var n;
                    return null !== e ? ((r[p] = a(e)), (n = new r()), (r[p] = null), (n[d] = e)) : (n = g()), void 0 === t ? n : s(n, t);
                });
    },
    function (e, t, n) {
        var r = n(12),
            o = Date.prototype,
            i = "Invalid Date",
            n = "toString",
            a = o[n],
            s = o.getTime;
        new Date(NaN) + "" != i &&
            r(o, n, function () {
                var e = s.call(this);
                return e == e ? a.call(this) : i;
            });
    },
    function (e, t, n) {
        var r = n(34),
            o = n(12),
            n = n(88);
        r ||
            o(Object.prototype, "toString", n, {
                unsafe: !0,
            });
    },
    function (e, t, n) {
        "use strict";
        var r = n(12),
            o = n(4),
            i = n(1),
            a = n(57),
            s = "toString",
            u = RegExp.prototype,
            c = u[s],
            n = i(function () {
                return (
                    "/a/b" !=
                    c.call({
                        source: "a",
                        flags: "b",
                    })
                );
            }),
            i = c.name != s;
        (n || i) &&
            r(
                RegExp.prototype,
                s,
                function () {
                    var e = o(this),
                        t = String(e.source),
                        n = e.flags;
                    return "/" + t + "/" + String(void 0 === n && e instanceof RegExp && !("flags" in u) ? a.call(e) : n);
                },
                {
                    unsafe: !0,
                }
            );
    },
    function (e, t, n) {
        "use strict";
        var r = n(4);
        e.exports = function () {
            var e = r(this),
                t = "";
            return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.sticky && (t += "y"), t;
        };
    },
    function (e, t, n) {
        function r(e, t) {
            return RegExp(e, t);
        }
        n = n(1);
        (t.UNSUPPORTED_Y = n(function () {
            var e = r("a", "y");
            return (e.lastIndex = 2), null != e.exec("abcd");
        })),
            (t.BROKEN_CARET = n(function () {
                var e = r("^r", "gy");
                return (e.lastIndex = 2), null != e.exec("str");
            }));
    },
    function (e, t, n) {
        "use strict";
        var r = n(96),
            l = n(97),
            v = n(4),
            f = n(14),
            m = n(98),
            b = n(99),
            x = n(15),
            w = n(101),
            p = n(16),
            o = n(58),
            n = n(1),
            k = o.UNSUPPORTED_Y,
            h = [].push,
            T = Math.min,
            C = 4294967295;
        r(
            "split",
            function (o, d, g) {
                var y =
                    "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || 1 < ".".split(/()()/).length || "".split(/.?/).length
                        ? function (e, t) {
                              var n = String(f(this)),
                                  r = void 0 === t ? C : t >>> 0;
                              if (0 == r) return [];
                              if (void 0 === e) return [n];
                              if (!l(e)) return d.call(n, e, r);
                              for (
                                  var o, i, a, s = [], t = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""), u = 0, c = new RegExp(e.source, t + "g");
                                  (o = p.call(c, n)) && !(u < (i = c.lastIndex) && (s.push(n.slice(u, o.index)), 1 < o.length && o.index < n.length && h.apply(s, o.slice(1)), (a = o[0].length), (u = i), s.length >= r));

                              )
                                  c.lastIndex === o.index && c.lastIndex++;
                              return u === n.length ? (!a && c.test("")) || s.push("") : s.push(n.slice(u)), s.length > r ? s.slice(0, r) : s;
                          }
                        : "0".split(void 0, 0).length
                        ? function (e, t) {
                              return void 0 === e && 0 === t ? [] : d.call(this, e, t);
                          }
                        : d;
                return [
                    function (e, t) {
                        var n = f(this),
                            r = null == e ? void 0 : e[o];
                        return void 0 !== r ? r.call(e, n, t) : y.call(String(n), e, t);
                    },
                    function (e, t) {
                        var n = g(y, this, e, t, y !== d);
                        if (n.done) return n.value;
                        var r = v(this),
                            o = String(e),
                            n = m(r, RegExp),
                            i = r.unicode,
                            e = (r.ignoreCase ? "i" : "") + (r.multiline ? "m" : "") + (r.unicode ? "u" : "") + (k ? "g" : "y"),
                            a = new n(k ? "^(?:" + r.source + ")" : r, e),
                            s = void 0 === t ? C : t >>> 0;
                        if (0 == s) return [];
                        if (0 === o.length) return null === w(a, o) ? [o] : [];
                        for (var u = 0, c = 0, l = []; c < o.length; ) {
                            a.lastIndex = k ? 0 : c;
                            var f,
                                p = w(a, k ? o.slice(c) : o);
                            if (null === p || (f = T(x(a.lastIndex + (k ? c : 0)), o.length)) === u) c = b(o, c, i);
                            else {
                                if ((l.push(o.slice(u, c)), l.length === s)) return l;
                                for (var h = 1; h <= p.length - 1; h++) if ((l.push(p[h]), l.length === s)) return l;
                                c = u = f;
                            }
                        }
                        return l.push(o.slice(u)), l;
                    },
                ];
            },
            !!n(function () {
                var e = /(?:)/,
                    t = e.exec;
                e.exec = function () {
                    return t.apply(this, arguments);
                };
                e = "ab".split(e);
                return 2 !== e.length || "a" !== e[0] || "b" !== e[1];
            }),
            k
        );
    },
    function (e, t, n) {
        "use strict";
        var r = n(5),
            o = n(48).indexOf,
            n = n(36),
            i = [].indexOf,
            a = !!i && 1 / [1].indexOf(1, -0) < 0,
            n = n("indexOf");
        r(
            {
                target: "Array",
                proto: !0,
                forced: a || !n,
            },
            {
                indexOf: function (e) {
                    return a ? i.apply(this, arguments) || 0 : o(this, e, 1 < arguments.length ? arguments[1] : void 0);
                },
            }
        );
    },
    function (e, t, n) {
        "use strict";
        var r = n(5),
            n = n(62);
        r(
            {
                target: "Array",
                proto: !0,
                forced: [].forEach != n,
            },
            {
                forEach: n,
            }
        );
    },
    function (e, t, n) {
        "use strict";
        var r = n(31).forEach,
            n = n(36)("forEach");
        e.exports = n
            ? [].forEach
            : function (e) {
                  return r(this, e, 1 < arguments.length ? arguments[1] : void 0);
              };
    },
    function (e, t, n) {
        var r,
            o = n(2),
            i = n(102),
            a = n(62),
            s = n(9);
        for (r in i) {
            var u = o[r],
                u = u && u.prototype;
            if (u && u.forEach !== a)
                try {
                    s(u, "forEach", a);
                } catch (e) {
                    u.forEach = a;
                }
        }
    },
    function (e, t, n) {
        "use strict";
        !function (o) {
            n.d(t, "a", function () {
                return e;
            });
            n(37), n(13);
            var i = n(65),
                a = n(17);
            function s(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            var e = (function () {
                function e() {
                    !(function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                        (this.template =
                            '\n    <div class="cookie-manager" data-nosnippet>\n        <div id="cookiebanner" class="cookie-banner" hidden role="region" aria-label="Cookie banner">\n            <div class="container">\n                <div class="custom-container">\n                    <div class="text">\n                        <h2>Our use of cookies</h2>\n                        <p>\n                            We use essential cookies to make our site work.\n                        </p>\n                        <p>\n                            We\'d like to use additional cookies to understand how you use the site and improve our services.\n                        </p>\n                        <p>\n                            You can find details of these and all other cookies on our\n                            <a href="https://www.parliament.uk/site-information/privacy/">cookie policy</a>.\n                        </p>\n                     </div>\n                     <div class="actions">                           \n                        <a id="allowall" href="#" class="cookie-manager__button">Accept additional cookies</a>\n                        <a id="rejectall" href="#" class="cookie-manager__button">Reject additional cookies</a>\n                        <a id="managesettings" href="#" data-cookie-manager-open>Cookie settings</a>\n                     </div>\n                </div>\n            </div>\n        </div>\n    </div>');
                }
                var t, n, r;
                return (
                    (t = e),
                    (n = [
                        {
                            key: "init",
                            value: function () {
                                this.insertTemplateIntoDom(),
                                    (this.cookieBanner = o("#cookiebanner")),
                                    (this.policyCookieManager = new a.a()),
                                    (this.cookieManager = new i.a(this.policyCookieManager)),
                                    this.setAllowAllClickEvent(),
                                    this.setCookieSettingsClickEvent(),
                                    this.setRejectAllClickEvent(),
                                    this.setToggleValues();
                            },
                        },
                        {
                            key: "insertTemplateIntoDom",
                            value: function () {
                                o("body").prepend(this.template);
                            },
                        },
                        {
                            key: "setAllowAllClickEvent",
                            value: function () {
                                var t = this;
                                this.cookieBanner.find("#allowall").on("click", function (e) {
                                    e.preventDefault(), t.policyCookieManager.acceptAll(), t.policyCookieManager.addDataLayerEvent("cookieBanner-allowAll-click"), t.setToggleValues();
                                });
                            },
                        },
                        {
                            key: "setRejectAllClickEvent",
                            value: function () {
                                var t = this;
                                this.cookieBanner.find("#rejectall").on("click", function (e) {
                                    e.preventDefault(), t.policyCookieManager.rejectAll(), t.policyCookieManager.addDataLayerEvent("cookieBanner-rejectAll-click"), t.setToggleValues();
                                });
                            },
                        },
                        {
                            key: "setCookieSettingsClickEvent",
                            value: function () {
                                var t = this;
                                o("body")
                                    .find("[data-cookie-manager-open]")
                                    .on("click", function (e) {
                                        e.preventDefault(), t.cookieManager.show();
                                    });
                            },
                        },
                        {
                            key: "setToggleValues",
                            value: function () {
                                this.policyCookieManager.policyCookie.preferences_set && void 0 !== this.policyCookieManager.policyCookie.marketing ? this.cookieBanner.attr("hidden", "true") : this.cookieBanner.removeAttr("hidden"),
                                    this.cookieManager.setToggleValues();
                            },
                        },
                    ]) && s(t.prototype, n),
                    r && s(t, r),
                    e
                );
            })();
        }.call(this, n(19));
    },
    function (e, t, n) {
        "use strict";
        !function (o) {
            n.d(t, "a", function () {
                return e;
            });
            n(33), n(37), n(54), n(55), n(56), n(13);
            var i = n(0);
            function a(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            var e = (function () {
                function t(e) {
                    !(function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    })(this, t),
                        (this.template = '\n    <div class="cookie-manager">\n        <div class="cookie-manager-overlay"></div>\n        <div class="cookie-preferences" id="cookiemodal" role="region" tabindex="-1">\n            <div class="cookie-preferences__header">\n                <h2>Cookie settings</h2>\n                <p>\n                    Cookies are small files saved on your phone, tablet or computer when you visit\n                    a website. They store information about how you use the website, such as the\n                    pages you visit. They are used to make websites work and improve your\n                    experience.\n                </p>\n                <p>\n                    We use three types of cookies. You can choose which cookies you are happy for\n                    us to use.\n                </p>\n                <p>\n                    Read our <a href="https://www.parliament.uk/site-information/privacy/">cookie\n                    policy</a> for more information\n                </p>\n            </div>\n            <div class="cookie-preferences__settings">\n                <div>\n                    <h3>Essential cookies</h3>\n                    <p>\n                        These cookies always need to be on as they help to make our website work.\n                        Essential cookies are a site’s basic form of memory, so they do things\n                        like remember if you are logged in to a part of the website.\n                    </p>\n                    <p>\n                        You may be able to block these cookies by changing the preferences on\n                        your browser, but this can limit you from accessing our online services.\n                    </p>\n                </div>\n                <div>\n                    <h3>Analytics cookies</h3>\n                    <div class="cookie-toggle">\n                        <input\n                            class="cookie-toggle__checkbox"\n                            data-cookiemanager-toggle-type="'
                            .concat(i.a.Analytics, '"\n                            data-cookiemanager-toggle-value="')
                            .concat(i.a[i.a.Analytics].toLowerCase(), '"\n                            id="')
                            .concat(
                                i.a[i.a.Analytics],
                                'toggle"\n                            type="checkbox" />\n                        <label\n                            aria-hidden="true"\n                            class="cookie-toggle__label"\n                            for="'
                            )
                            .concat(
                                i.a[i.a.Analytics],
                                'toggle">\n                        </label>\n                        <span\n                            aria-hidden="true"\n                            class="cookie-toggle__symbol">\n                        </span>\n                    </div>\n                    <p>\n                        We use analytics tools to collect data on how people use our website\n                        to help make improvements. \n                    </p>\n                    <p>\n                        These cookies let us understand how people access our site, where\n                        they are accessing from, what pages they visit and what technology\n                        they are using.\n                    </p>\n                </div>\n                <div>\n                    <h3>Marketing cookies</h3>\n                    <div class="cookie-toggle">\n                        <input\n                            class="cookie-toggle__checkbox"\n                            data-cookiemanager-toggle-type="'
                            )
                            .concat(i.a.Marketing, '"\n                            data-cookiemanager-toggle-value="')
                            .concat(i.a[i.a.Marketing].toLowerCase(), '"\n                            id="')
                            .concat(
                                i.a[i.a.Marketing],
                                'toggle"\n                            type="checkbox" />\n                        <label\n                            aria-hidden="true"\n                            class="cookie-toggle__label"\n                            for="'
                            )
                            .concat(
                                i.a[i.a.Marketing],
                                'toggle">\n                        </label>\n                        <span\n                            aria-hidden="true"\n                            class="cookie-toggle__symbol">\n                        </span>\n                    </div>\n                    <p>\n                        These cookies may be set by third-party sites and help ensure our\n                        marketing content is relevant, timely and interesting to you.\n                    </p>\n                    <p>\n                        It also helps to measure and improve the effectiveness of our\n                        advertising campaigns.\n                    </p>\n                </div>\n            </div>\n            <div class="cookie-preferences__footer">\n                <a id="modalsavepreferences" href="#" class="cookie-manager__button">\n                    Save cookie settings\n                </a>\n                <a id="closemodal" href="#" class="cookie-preferences__close-modal">\n                    Close cookie settings\n                </a>\n            </div>\n        </div>\n    </div>'
                            )),
                        this.init(e);
                }
                var e, n, r;
                return (
                    (e = t),
                    (n = [
                        {
                            key: "show",
                            value: function () {
                                this.overlay.show(), this.modal.removeAttr("hidden"), this.modal.show(), this.modal.focus(), o("body").addClass("cookie-overlay-open");
                            },
                        },
                        {
                            key: "setToggleValues",
                            value: function () {
                                var r = this;
                                o(".cookie-toggle__checkbox").each(function (e, t) {
                                    var n = o(t),
                                        t = n.data("cookiemanager-toggle-value"),
                                        t = r.policyCookieManager.policyCookie.preferences_set && r.policyCookieManager.policyCookie.hasOwnProperty(t) && r.policyCookieManager.policyCookie[t];
                                    n.prop("checked", t), r.toggleChanged(n);
                                });
                            },
                        },
                        {
                            key: "init",
                            value: function (e) {
                                var t = this;
                                (this.policyCookieManager = e),
                                    (this.analytics = !1),
                                    (this.marketing = !1),
                                    this.insertTemplateIntoDom(),
                                    this.setToggleValues(),
                                    (this.modal = o("#cookiemodal")),
                                    (this.overlay = o(".cookie-manager-overlay")),
                                    this.modal.find("#closemodal").on("click", function (e) {
                                        e.preventDefault(), t.closeModal();
                                    }),
                                    this.modal.find("#modalsavepreferences").on("click", function (e) {
                                        e.preventDefault(), t.savePreferences(), t.closeModal(), t.closeBanner();
                                    }),
                                    this.modal.on("change", ".cookie-toggle__checkbox", function (e) {
                                        t.toggleChanged(o(e.target));
                                    });
                            },
                        },
                        {
                            key: "insertTemplateIntoDom",
                            value: function () {
                                o("body").append(this.template);
                            },
                        },
                        {
                            key: "closeBanner",
                            value: function () {
                                o("#cookiebanner").attr("hidden", "true");
                            },
                        },
                        {
                            key: "closeModal",
                            value: function () {
                                this.overlay.hide(), this.modal.hide(), this.setToggleValues(), o("body").removeClass("cookie-overlay-open");
                            },
                        },
                        {
                            key: "savePreferences",
                            value: function () {
                                this.policyCookieManager.update(this.analytics, this.marketing);
                            },
                        },
                        {
                            key: "toggleChanged",
                            value: function (e) {
                                var t = e.is(":checked"),
                                    n = t ? "On" : "Off",
                                    r = e.data("cookiemanager-toggle-type");
                                switch ((e.attr("aria-checked", t.toString()), e.attr("aria-label", "Toggle for " + i.a[r]), e.next().html("<span>" + n + "</span>"), r)) {
                                    case i.a.Analytics:
                                        this.analytics = t;
                                        break;
                                    case i.a.Marketing:
                                        this.marketing = t;
                                }
                            },
                        },
                    ]) && a(e.prototype, n),
                    r && a(e, r),
                    t
                );
            })();
        }.call(this, n(19));
    },
    function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return r;
        });
        var t = n(33),
            t = n(103),
            t = n(60),
            t = n(35),
            t = n(59),
            t = n(61),
            t = n(63),
            t = n(13),
            o = n(17);
        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
            }
        }
        var r = (function () {
            function e() {
                !(function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                })(this, e),
                    (this.policyCookieManager = new o.a()),
                    (this.whitelist = [this.policyCookieManager.cookieName, "ASP.NET_SessionId"]),
                    (this.personalisationCookieList = ["volumeControl1_volumeValue"]),
                    (this.domains = [window.location.hostname, "digiminster.com", "parliament.uk"]);
            }
            var t, n, r;
            return (
                (t = e),
                (n = [
                    {
                        key: "Apply",
                        value: function (e) {
                            void 0 === this.policyCookieManager.policyCookie.marketing && ((this.policyCookieManager.policyCookie.preferences_set = !1), (this.whitelist = [])),
                                (this.policyCookieManager.policyCookie.preferences_set && this.policyCookieManager.policyCookie.analytics) ||
                                    (e && this.disableGoogleTAnalytics(), (e = this.whitelist.concat(this.personalisationCookieList)), this.removeCookies(e)),
                                this.policyCookieManager.policyCookie.preferences_set || this.removeCookiesInBlackList(this.personalisationCookieList);
                        },
                    },
                    {
                        key: "disableGoogleTAnalytics",
                        value: function () {
                            var e = window.ga.getAll()[0].get("trackingId");
                            window["ga-disable-".concat(e)] = !0;
                        },
                    },
                    {
                        key: "removeCookies",
                        value: function (e) {
                            for (var n = this, r = this.getCookieCollection(), o = 0; o < r.length; o++)
                                !(function () {
                                    for (var t = r[o]; " " === t.charAt(0); ) t = t.substring(1);
                                    e.some(function (e) {
                                        return 0 === t.indexOf(e);
                                    }) || n.expireCookie(t);
                                })();
                        },
                    },
                    {
                        key: "removeCookiesInBlackList",
                        value: function (e) {
                            for (var n = this, r = this.getCookieCollection(), o = 0; o < r.length; o++)
                                !(function () {
                                    for (var t = r[o]; " " === t.charAt(0); ) t = t.substring(1);
                                    e.some(function (e) {
                                        return 0 === t.indexOf(e);
                                    }) && n.expireCookie(t);
                                })();
                        },
                    },
                    {
                        key: "getCookieCollection",
                        value: function () {
                            return decodeURIComponent(document.cookie).split(";");
                        },
                    },
                    {
                        key: "expireCookie",
                        value: function (t) {
                            this.domains.forEach(function (e) {
                                document.cookie = "".concat(t, "; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;domain=").concat(e);
                            });
                        },
                    },
                ]) && i(t.prototype, n),
                r && i(t, r),
                e
            );
        })();
    },
    function (e, t, r) {
        "use strict";
        r.r(t),
            function (e) {
                r(68);
                var t = r(64),
                    n = r(66);
                e(function () {
                    new t.a().init();
                }),
                    (window.onload = function () {
                        var e = new n.a();
                        window.ga
                            ? (0, window.ga)(function () {
                                  e.Apply(!0);
                              })
                            : e.Apply();
                    });
            }.call(this, r(19));
    },
    function (e, t, n) {},
    function (e, t, n) {
        "use strict";
        var r = {}.propertyIsEnumerable,
            o = Object.getOwnPropertyDescriptor,
            i =
                o &&
                !r.call(
                    {
                        1: 2,
                    },
                    1
                );
        t.f = i
            ? function (e) {
                  e = o(this, e);
                  return !!e && e.enumerable;
              }
            : r;
    },
    function (e, t, n) {
        var r = n(2),
            n = n(43),
            r = r.WeakMap;
        e.exports = "function" == typeof r && /native code/.test(n(r));
    },
    function (e, t) {
        e.exports = !1;
    },
    function (e, t, n) {
        var s = n(8),
            u = n(73),
            c = n(39),
            l = n(10);
        e.exports = function (e, t) {
            for (var n = u(t), r = l.f, o = c.f, i = 0; i < n.length; i++) {
                var a = n[i];
                s(e, a) || r(e, a, o(t, a));
            }
        };
    },
    function (e, t, n) {
        var r = n(28),
            o = n(75),
            i = n(77),
            a = n(4);
        e.exports =
            r("Reflect", "ownKeys") ||
            function (e) {
                var t = o.f(a(e)),
                    n = i.f;
                return n ? t.concat(n(e)) : t;
            };
    },
    function (e, t, n) {
        n = n(2);
        e.exports = n;
    },
    function (e, t, n) {
        var r = n(47),
            o = n(30).concat("length", "prototype");
        t.f =
            Object.getOwnPropertyNames ||
            function (e) {
                return r(e, o);
            };
    },
    function (e, t, n) {
        var r = n(29),
            o = Math.max,
            i = Math.min;
        e.exports = function (e, t) {
            e = r(e);
            return e < 0 ? o(e + t, 0) : i(e, t);
        };
    },
    function (e, t) {
        t.f = Object.getOwnPropertySymbols;
    },
    function (e, t, n) {
        var r = n(1),
            o = /#|\.prototype\./,
            n = function (e, t) {
                e = a[i(e)];
                return e == u || (e != s && ("function" == typeof t ? r(t) : !!t));
            },
            i = (n.normalize = function (e) {
                return String(e).replace(o, ".").toLowerCase();
            }),
            a = (n.data = {}),
            s = (n.NATIVE = "N"),
            u = (n.POLYFILL = "P");
        e.exports = n;
    },
    function (e, t, n) {
        var i = n(49);
        e.exports = function (r, o, e) {
            if ((i(r), void 0 === o)) return r;
            switch (e) {
                case 0:
                    return function () {
                        return r.call(o);
                    };
                case 1:
                    return function (e) {
                        return r.call(o, e);
                    };
                case 2:
                    return function (e, t) {
                        return r.call(o, e, t);
                    };
                case 3:
                    return function (e, t, n) {
                        return r.call(o, e, t, n);
                    };
            }
            return function () {
                return r.apply(o, arguments);
            };
        };
    },
    function (e, t, n) {
        n = n(28);
        e.exports = n("navigator", "userAgent") || "";
    },
    function (e, t, n) {
        n = n(52);
        e.exports = n && !Symbol.sham && "symbol" == typeof Symbol.iterator;
    },
    function (e, t, n) {
        var r = n(3),
            o = n(53),
            n = n(10),
            i = r("unscopables"),
            a = Array.prototype;
        null == a[i] &&
            n.f(a, i, {
                configurable: !0,
                value: o(null),
            }),
            (e.exports = function (e) {
                a[i][e] = !0;
            });
    },
    function (e, t, n) {
        var r = n(7),
            a = n(10),
            s = n(4),
            u = n(84);
        e.exports = r
            ? Object.defineProperties
            : function (e, t) {
                  s(e);
                  for (var n, r = u(t), o = r.length, i = 0; i < o; ) a.f(e, (n = r[i++]), t[n]);
                  return e;
              };
    },
    function (e, t, n) {
        var r = n(47),
            o = n(30);
        e.exports =
            Object.keys ||
            function (e) {
                return r(e, o);
            };
    },
    function (e, t, n) {
        n = n(28);
        e.exports = n("document", "documentElement");
    },
    function (e, t, n) {
        "use strict";
        var r = n(22),
            o = n(10),
            i = n(20);
        e.exports = function (e, t, n) {
            t = r(t);
            t in e ? o.f(e, t, i(0, n)) : (e[t] = n);
        };
    },
    function (e, t, n) {
        var r = n(1),
            o = n(3),
            i = n(32),
            a = o("species");
        e.exports = function (t) {
            return (
                51 <= i ||
                !r(function () {
                    var e = [];
                    return (
                        ((e.constructor = {})[a] = function () {
                            return {
                                foo: 1,
                            };
                        }),
                        1 !== e[t](Boolean).foo
                    );
                })
            );
        };
    },
    function (e, t, n) {
        "use strict";
        var r = n(34),
            o = n(89);
        e.exports = r
            ? {}.toString
            : function () {
                  return "[object " + o(this) + "]";
              };
    },
    function (e, t, n) {
        var r = n(34),
            o = n(11),
            i = n(3)("toStringTag"),
            a =
                "Arguments" ==
                o(
                    (function () {
                        return arguments;
                    })()
                );
        e.exports = r
            ? o
            : function (e) {
                  var t;
                  return void 0 === e
                      ? "Undefined"
                      : null === e
                      ? "Null"
                      : "string" ==
                        typeof (e = (function (e, t) {
                            try {
                                return e[t];
                            } catch (e) {}
                        })((t = Object(e)), i))
                      ? e
                      : a
                      ? o(t)
                      : "Object" == (e = o(t)) && "function" == typeof t.callee
                      ? "Arguments"
                      : e;
              };
    },
    function (e, N, L) {
        "use strict";
        !function (e) {
            /*!
             * The buffer module from node.js, for the browser.
             *
             * @author   Feross Aboukhadijeh <http://feross.org>
             * @license  MIT
             */
            var s = L(91),
                i = L(92),
                a = L(93);
            function n() {
                return f.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
            }
            function o(e, t) {
                if (n() < t) throw new RangeError("Invalid typed array length");
                return f.TYPED_ARRAY_SUPPORT ? ((e = new Uint8Array(t)).__proto__ = f.prototype) : ((e = null === e ? new f(t) : e).length = t), e;
            }
            function f(e, t, n) {
                if (!(f.TYPED_ARRAY_SUPPORT || this instanceof f)) return new f(e, t, n);
                if ("number" != typeof e) return r(this, e, t, n);
                if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
                return c(this, e);
            }
            function r(e, t, n, r) {
                if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
                return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer
                    ? (function (e, t, n, r) {
                          if ((t.byteLength, n < 0 || t.byteLength < n)) throw new RangeError("'offset' is out of bounds");
                          if (t.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
                          t = void 0 === n && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, n) : new Uint8Array(t, n, r);
                          f.TYPED_ARRAY_SUPPORT ? ((e = t).__proto__ = f.prototype) : (e = l(e, t));
                          return e;
                      })(e, t, n, r)
                    : "string" == typeof t
                    ? (function (e, t, n) {
                          ("string" == typeof n && "" !== n) || (n = "utf8");
                          if (!f.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
                          var r = 0 | h(t, n),
                              n = (e = o(e, r)).write(t, n);
                          n !== r && (e = e.slice(0, n));
                          return e;
                      })(e, t, n)
                    : (function (e, t) {
                          if (f.isBuffer(t)) {
                              var n = 0 | p(t.length);
                              return 0 === (e = o(e, n)).length ? e : (t.copy(e, 0, 0, n), e);
                          }
                          if (t) {
                              if (("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer) || "length" in t)
                                  return "number" != typeof t.length ||
                                      (function (e) {
                                          return e != e;
                                      })(t.length)
                                      ? o(e, 0)
                                      : l(e, t);
                              if ("Buffer" === t.type && a(t.data)) return l(e, t.data);
                          }
                          throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
                      })(e, t);
            }
            function u(e) {
                if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
                if (e < 0) throw new RangeError('"size" argument must not be negative');
            }
            function c(e, t) {
                if ((u(t), (e = o(e, t < 0 ? 0 : 0 | p(t))), !f.TYPED_ARRAY_SUPPORT)) for (var n = 0; n < t; ++n) e[n] = 0;
                return e;
            }
            function l(e, t) {
                var n = t.length < 0 ? 0 : 0 | p(t.length);
                e = o(e, n);
                for (var r = 0; r < n; r += 1) e[r] = 255 & t[r];
                return e;
            }
            function p(e) {
                if (e >= n()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + n().toString(16) + " bytes");
                return 0 | e;
            }
            function h(e, t) {
                if (f.isBuffer(e)) return e.length;
                if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
                var n = (e = "string" != typeof e ? "" + e : e).length;
                if (0 === n) return 0;
                for (var r = !1; ; )
                    switch (t) {
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return n;
                        case "utf8":
                        case "utf-8":
                        case void 0:
                            return D(e).length;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return 2 * n;
                        case "hex":
                            return n >>> 1;
                        case "base64":
                            return O(e).length;
                        default:
                            if (r) return D(e).length;
                            (t = ("" + t).toLowerCase()), (r = !0);
                    }
            }
            function t(e, t, n) {
                var r,
                    o,
                    i,
                    a = !1;
                if ((t = void 0 === t || t < 0 ? 0 : t) > this.length) return "";
                if ((n = void 0 === n || n > this.length ? this.length : n) <= 0) return "";
                if ((n >>>= 0) <= (t >>>= 0)) return "";
                for (e = e || "utf8"; ; )
                    switch (e) {
                        case "hex":
                            return (function (e, t, n) {
                                var r = e.length;
                                (!t || t < 0) && (t = 0);
                                (!n || n < 0 || r < n) && (n = r);
                                for (var o = "", i = t; i < n; ++i)
                                    o += (function (e) {
                                        return e < 16 ? "0" + e.toString(16) : e.toString(16);
                                    })(e[i]);
                                return o;
                            })(this, t, n);
                        case "utf8":
                        case "utf-8":
                            return b(this, t, n);
                        case "ascii":
                            return (function (e, t, n) {
                                var r = "";
                                n = Math.min(e.length, n);
                                for (var o = t; o < n; ++o) r += String.fromCharCode(127 & e[o]);
                                return r;
                            })(this, t, n);
                        case "latin1":
                        case "binary":
                            return (function (e, t, n) {
                                var r = "";
                                n = Math.min(e.length, n);
                                for (var o = t; o < n; ++o) r += String.fromCharCode(e[o]);
                                return r;
                            })(this, t, n);
                        case "base64":
                            return (r = this), (i = n), 0 === (o = t) && i === r.length ? s.fromByteArray(r) : s.fromByteArray(r.slice(o, i));
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return (function (e, t, n) {
                                for (var r = e.slice(t, n), o = "", i = 0; i < r.length; i += 2) o += String.fromCharCode(r[i] + 256 * r[i + 1]);
                                return o;
                            })(this, t, n);
                        default:
                            if (a) throw new TypeError("Unknown encoding: " + e);
                            (e = (e + "").toLowerCase()), (a = !0);
                    }
            }
            function d(e, t, n) {
                var r = e[t];
                (e[t] = e[n]), (e[n] = r);
            }
            function g(e, t, n, r, o) {
                if (0 === e.length) return -1;
                if (("string" == typeof n ? ((r = n), (n = 0)) : 2147483647 < n ? (n = 2147483647) : n < -2147483648 && (n = -2147483648), (n = +n), (n = (n = isNaN(n) ? (o ? 0 : e.length - 1) : n) < 0 ? e.length + n : n) >= e.length)) {
                    if (o) return -1;
                    n = e.length - 1;
                } else if (n < 0) {
                    if (!o) return -1;
                    n = 0;
                }
                if (("string" == typeof t && (t = f.from(t, r)), f.isBuffer(t))) return 0 === t.length ? -1 : y(e, t, n, r, o);
                if ("number" == typeof t)
                    return (t &= 255), f.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? (o ? Uint8Array.prototype.indexOf : Uint8Array.prototype.lastIndexOf).call(e, t, n) : y(e, [t], n, r, o);
                throw new TypeError("val must be string, number or Buffer");
            }
            function y(e, t, n, r, o) {
                var i = 1,
                    a = e.length,
                    s = t.length;
                if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                    if (e.length < 2 || t.length < 2) return -1;
                    (a /= i = 2), (s /= 2), (n /= 2);
                }
                function u(e, t) {
                    return 1 === i ? e[t] : e.readUInt16BE(t * i);
                }
                if (o)
                    for (var c = -1, l = n; l < a; l++)
                        if (u(e, l) === u(t, -1 === c ? 0 : l - c)) {
                            if (l - (c = -1 === c ? l : c) + 1 === s) return c * i;
                        } else -1 !== c && (l -= l - c), (c = -1);
                else
                    for (l = n = a < n + s ? a - s : n; 0 <= l; l--) {
                        for (var f = !0, p = 0; p < s; p++)
                            if (u(e, l + p) !== u(t, p)) {
                                f = !1;
                                break;
                            }
                        if (f) return l;
                    }
                return -1;
            }
            function v(e, t, n, r) {
                return R(
                    (function (e) {
                        for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
                        return t;
                    })(t),
                    e,
                    n,
                    r
                );
            }
            function m(e, t, n, r) {
                return R(
                    (function (e, t) {
                        for (var n, r, o = [], i = 0; i < e.length && !((t -= 2) < 0); ++i) (r = e.charCodeAt(i)), (n = r >> 8), (r = r % 256), o.push(r), o.push(n);
                        return o;
                    })(t, e.length - n),
                    e,
                    n,
                    r
                );
            }
            function b(e, t, n) {
                n = Math.min(e.length, n);
                for (var r = [], o = t; o < n; ) {
                    var i,
                        a,
                        s,
                        u,
                        c = e[o],
                        l = null,
                        f = 239 < c ? 4 : 223 < c ? 3 : 191 < c ? 2 : 1;
                    if (o + f <= n)
                        switch (f) {
                            case 1:
                                c < 128 && (l = c);
                                break;
                            case 2:
                                128 == (192 & (i = e[o + 1])) && 127 < (u = ((31 & c) << 6) | (63 & i)) && (l = u);
                                break;
                            case 3:
                                (i = e[o + 1]), (a = e[o + 2]), 128 == (192 & i) && 128 == (192 & a) && 2047 < (u = ((15 & c) << 12) | ((63 & i) << 6) | (63 & a)) && (u < 55296 || 57343 < u) && (l = u);
                                break;
                            case 4:
                                (i = e[o + 1]),
                                    (a = e[o + 2]),
                                    (s = e[o + 3]),
                                    128 == (192 & i) && 128 == (192 & a) && 128 == (192 & s) && 65535 < (u = ((15 & c) << 18) | ((63 & i) << 12) | ((63 & a) << 6) | (63 & s)) && u < 1114112 && (l = u);
                        }
                    null === l ? ((l = 65533), (f = 1)) : 65535 < l && ((l -= 65536), r.push(((l >>> 10) & 1023) | 55296), (l = 56320 | (1023 & l))), r.push(l), (o += f);
                }
                return (function (e) {
                    var t = e.length;
                    if (t <= x) return String.fromCharCode.apply(String, e);
                    var n = "",
                        r = 0;
                    for (; r < t; ) n += String.fromCharCode.apply(String, e.slice(r, (r += x)));
                    return n;
                })(r);
            }
            (N.Buffer = f),
                (N.SlowBuffer = function (e) {
                    +e != e && (e = 0);
                    return f.alloc(+e);
                }),
                (N.INSPECT_MAX_BYTES = 50),
                (f.TYPED_ARRAY_SUPPORT =
                    void 0 !== e.TYPED_ARRAY_SUPPORT
                        ? e.TYPED_ARRAY_SUPPORT
                        : (function () {
                              try {
                                  var e = new Uint8Array(1);
                                  return (
                                      (e.__proto__ = {
                                          __proto__: Uint8Array.prototype,
                                          foo: function () {
                                              return 42;
                                          },
                                      }),
                                      42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
                                  );
                              } catch (e) {
                                  return !1;
                              }
                          })()),
                (N.kMaxLength = n()),
                (f.poolSize = 8192),
                (f._augment = function (e) {
                    return (e.__proto__ = f.prototype), e;
                }),
                (f.from = function (e, t, n) {
                    return r(null, e, t, n);
                }),
                f.TYPED_ARRAY_SUPPORT &&
                    ((f.prototype.__proto__ = Uint8Array.prototype),
                    (f.__proto__ = Uint8Array),
                    "undefined" != typeof Symbol &&
                        Symbol.species &&
                        f[Symbol.species] === f &&
                        Object.defineProperty(f, Symbol.species, {
                            value: null,
                            configurable: !0,
                        })),
                (f.alloc = function (e, t, n) {
                    return (r = null), (t = t), (n = n), u((e = e)), !(e <= 0) && void 0 !== t ? ("string" == typeof n ? o(r, e).fill(t, n) : o(r, e).fill(t)) : o(r, e);
                    var r;
                }),
                (f.allocUnsafe = function (e) {
                    return c(null, e);
                }),
                (f.allocUnsafeSlow = function (e) {
                    return c(null, e);
                }),
                (f.isBuffer = function (e) {
                    return !(null == e || !e._isBuffer);
                }),
                (f.compare = function (e, t) {
                    if (!f.isBuffer(e) || !f.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
                    if (e === t) return 0;
                    for (var n = e.length, r = t.length, o = 0, i = Math.min(n, r); o < i; ++o)
                        if (e[o] !== t[o]) {
                            (n = e[o]), (r = t[o]);
                            break;
                        }
                    return n < r ? -1 : r < n ? 1 : 0;
                }),
                (f.isEncoding = function (e) {
                    switch (String(e).toLowerCase()) {
                        case "hex":
                        case "utf8":
                        case "utf-8":
                        case "ascii":
                        case "latin1":
                        case "binary":
                        case "base64":
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return !0;
                        default:
                            return !1;
                    }
                }),
                (f.concat = function (e, t) {
                    if (!a(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                    if (0 === e.length) return f.alloc(0);
                    if (void 0 === t) for (o = t = 0; o < e.length; ++o) t += e[o].length;
                    for (var n = f.allocUnsafe(t), r = 0, o = 0; o < e.length; ++o) {
                        var i = e[o];
                        if (!f.isBuffer(i)) throw new TypeError('"list" argument must be an Array of Buffers');
                        i.copy(n, r), (r += i.length);
                    }
                    return n;
                }),
                (f.byteLength = h),
                (f.prototype._isBuffer = !0),
                (f.prototype.swap16 = function () {
                    var e = this.length;
                    if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                    for (var t = 0; t < e; t += 2) d(this, t, t + 1);
                    return this;
                }),
                (f.prototype.swap32 = function () {
                    var e = this.length;
                    if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                    for (var t = 0; t < e; t += 4) d(this, t, t + 3), d(this, t + 1, t + 2);
                    return this;
                }),
                (f.prototype.swap64 = function () {
                    var e = this.length;
                    if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                    for (var t = 0; t < e; t += 8) d(this, t, t + 7), d(this, t + 1, t + 6), d(this, t + 2, t + 5), d(this, t + 3, t + 4);
                    return this;
                }),
                (f.prototype.toString = function () {
                    var e = 0 | this.length;
                    return 0 == e ? "" : 0 === arguments.length ? b(this, 0, e) : t.apply(this, arguments);
                }),
                (f.prototype.equals = function (e) {
                    if (!f.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                    return this === e || 0 === f.compare(this, e);
                }),
                (f.prototype.inspect = function () {
                    var e = "",
                        t = N.INSPECT_MAX_BYTES;
                    return 0 < this.length && ((e = this.toString("hex", 0, t).match(/.{2}/g).join(" ")), this.length > t && (e += " ... ")), "<Buffer " + e + ">";
                }),
                (f.prototype.compare = function (e, t, n, r, o) {
                    if (!f.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                    if ((void 0 === n && (n = e ? e.length : 0), void 0 === r && (r = 0), void 0 === o && (o = this.length), (t = void 0 === t ? 0 : t) < 0 || n > e.length || r < 0 || o > this.length))
                        throw new RangeError("out of range index");
                    if (o <= r && n <= t) return 0;
                    if (o <= r) return -1;
                    if (n <= t) return 1;
                    if (this === e) return 0;
                    for (var i = (o >>>= 0) - (r >>>= 0), a = (n >>>= 0) - (t >>>= 0), s = Math.min(i, a), u = this.slice(r, o), c = e.slice(t, n), l = 0; l < s; ++l)
                        if (u[l] !== c[l]) {
                            (i = u[l]), (a = c[l]);
                            break;
                        }
                    return i < a ? -1 : a < i ? 1 : 0;
                }),
                (f.prototype.includes = function (e, t, n) {
                    return -1 !== this.indexOf(e, t, n);
                }),
                (f.prototype.indexOf = function (e, t, n) {
                    return g(this, e, t, n, !0);
                }),
                (f.prototype.lastIndexOf = function (e, t, n) {
                    return g(this, e, t, n, !1);
                }),
                (f.prototype.write = function (e, t, n, r) {
                    if (void 0 === t) (r = "utf8"), (n = this.length), (t = 0);
                    else if (void 0 === n && "string" == typeof t) (r = t), (n = this.length), (t = 0);
                    else {
                        if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                        (t |= 0), isFinite(n) ? ((n |= 0), void 0 === r && (r = "utf8")) : ((r = n), (n = void 0));
                    }
                    var o = this.length - t;
                    if (((void 0 === n || o < n) && (n = o), (0 < e.length && (n < 0 || t < 0)) || t > this.length)) throw new RangeError("Attempt to write outside buffer bounds");
                    r = r || "utf8";
                    for (var i, a, s, u = !1; ; )
                        switch (r) {
                            case "hex":
                                return (function (e, t, n, r) {
                                    n = Number(n) || 0;
                                    var o = e.length - n;
                                    if (((!r || o < (r = Number(r))) && (r = o), (o = t.length) % 2 != 0)) throw new TypeError("Invalid hex string");
                                    o / 2 < r && (r = o / 2);
                                    for (var i = 0; i < r; ++i) {
                                        var a = parseInt(t.substr(2 * i, 2), 16);
                                        if (isNaN(a)) return i;
                                        e[n + i] = a;
                                    }
                                    return i;
                                })(this, e, t, n);
                            case "utf8":
                            case "utf-8":
                                return (a = t), (s = n), R(D(e, (i = this).length - a), i, a, s);
                            case "ascii":
                                return v(this, e, t, n);
                            case "latin1":
                            case "binary":
                                return v(this, e, t, n);
                            case "base64":
                                return (i = this), (a = t), (s = n), R(O(e), i, a, s);
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return m(this, e, t, n);
                            default:
                                if (u) throw new TypeError("Unknown encoding: " + r);
                                (r = ("" + r).toLowerCase()), (u = !0);
                        }
                }),
                (f.prototype.toJSON = function () {
                    return {
                        type: "Buffer",
                        data: Array.prototype.slice.call(this._arr || this, 0),
                    };
                });
            var x = 4096;
            function w(e, t, n) {
                if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
                if (n < e + t) throw new RangeError("Trying to access beyond buffer length");
            }
            function k(e, t, n, r, o, i) {
                if (!f.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (o < t || t < i) throw new RangeError('"value" argument is out of bounds');
                if (n + r > e.length) throw new RangeError("Index out of range");
            }
            function T(e, t, n, r) {
                t < 0 && (t = 65535 + t + 1);
                for (var o = 0, i = Math.min(e.length - n, 2); o < i; ++o) e[n + o] = (t & (255 << (8 * (r ? o : 1 - o)))) >>> (8 * (r ? o : 1 - o));
            }
            function C(e, t, n, r) {
                t < 0 && (t = 4294967295 + t + 1);
                for (var o = 0, i = Math.min(e.length - n, 4); o < i; ++o) e[n + o] = (t >>> (8 * (r ? o : 3 - o))) & 255;
            }
            function E(e, t, n, r) {
                if (n + r > e.length) throw new RangeError("Index out of range");
                if (n < 0) throw new RangeError("Index out of range");
            }
            function A(e, t, n, r, o) {
                return o || E(e, 0, n, 4), i.write(e, t, n, r, 23, 4), n + 4;
            }
            function S(e, t, n, r, o) {
                return o || E(e, 0, n, 8), i.write(e, t, n, r, 52, 8), n + 8;
            }
            (f.prototype.slice = function (e, t) {
                var n = this.length;
                if (((e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : n < e && (e = n), (t = void 0 === t ? n : ~~t) < 0 ? (t += n) < 0 && (t = 0) : n < t && (t = n), t < e && (t = e), f.TYPED_ARRAY_SUPPORT))
                    (o = this.subarray(e, t)).__proto__ = f.prototype;
                else for (var r = t - e, o = new f(r, void 0), i = 0; i < r; ++i) o[i] = this[i + e];
                return o;
            }),
                (f.prototype.readUIntLE = function (e, t, n) {
                    (e |= 0), (t |= 0), n || w(e, t, this.length);
                    for (var r = this[e], o = 1, i = 0; ++i < t && (o *= 256); ) r += this[e + i] * o;
                    return r;
                }),
                (f.prototype.readUIntBE = function (e, t, n) {
                    (e |= 0), (t |= 0), n || w(e, t, this.length);
                    for (var r = this[e + --t], o = 1; 0 < t && (o *= 256); ) r += this[e + --t] * o;
                    return r;
                }),
                (f.prototype.readUInt8 = function (e, t) {
                    return t || w(e, 1, this.length), this[e];
                }),
                (f.prototype.readUInt16LE = function (e, t) {
                    return t || w(e, 2, this.length), this[e] | (this[e + 1] << 8);
                }),
                (f.prototype.readUInt16BE = function (e, t) {
                    return t || w(e, 2, this.length), (this[e] << 8) | this[e + 1];
                }),
                (f.prototype.readUInt32LE = function (e, t) {
                    return t || w(e, 4, this.length), (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) + 16777216 * this[e + 3];
                }),
                (f.prototype.readUInt32BE = function (e, t) {
                    return t || w(e, 4, this.length), 16777216 * this[e] + ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3]);
                }),
                (f.prototype.readIntLE = function (e, t, n) {
                    (e |= 0), (t |= 0), n || w(e, t, this.length);
                    for (var r = this[e], o = 1, i = 0; ++i < t && (o *= 256); ) r += this[e + i] * o;
                    return (o *= 128) <= r && (r -= Math.pow(2, 8 * t)), r;
                }),
                (f.prototype.readIntBE = function (e, t, n) {
                    (e |= 0), (t |= 0), n || w(e, t, this.length);
                    for (var r = t, o = 1, i = this[e + --r]; 0 < r && (o *= 256); ) i += this[e + --r] * o;
                    return (o *= 128) <= i && (i -= Math.pow(2, 8 * t)), i;
                }),
                (f.prototype.readInt8 = function (e, t) {
                    return t || w(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e];
                }),
                (f.prototype.readInt16LE = function (e, t) {
                    t || w(e, 2, this.length);
                    e = this[e] | (this[e + 1] << 8);
                    return 32768 & e ? 4294901760 | e : e;
                }),
                (f.prototype.readInt16BE = function (e, t) {
                    t || w(e, 2, this.length);
                    e = this[e + 1] | (this[e] << 8);
                    return 32768 & e ? 4294901760 | e : e;
                }),
                (f.prototype.readInt32LE = function (e, t) {
                    return t || w(e, 4, this.length), this[e] | (this[e + 1] << 8) | (this[e + 2] << 16) | (this[e + 3] << 24);
                }),
                (f.prototype.readInt32BE = function (e, t) {
                    return t || w(e, 4, this.length), (this[e] << 24) | (this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3];
                }),
                (f.prototype.readFloatLE = function (e, t) {
                    return t || w(e, 4, this.length), i.read(this, e, !0, 23, 4);
                }),
                (f.prototype.readFloatBE = function (e, t) {
                    return t || w(e, 4, this.length), i.read(this, e, !1, 23, 4);
                }),
                (f.prototype.readDoubleLE = function (e, t) {
                    return t || w(e, 8, this.length), i.read(this, e, !0, 52, 8);
                }),
                (f.prototype.readDoubleBE = function (e, t) {
                    return t || w(e, 8, this.length), i.read(this, e, !1, 52, 8);
                }),
                (f.prototype.writeUIntLE = function (e, t, n, r) {
                    (e = +e), (t |= 0), (n |= 0), r || k(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
                    var o = 1,
                        i = 0;
                    for (this[t] = 255 & e; ++i < n && (o *= 256); ) this[t + i] = (e / o) & 255;
                    return t + n;
                }),
                (f.prototype.writeUIntBE = function (e, t, n, r) {
                    (e = +e), (t |= 0), (n |= 0), r || k(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
                    var o = n - 1,
                        i = 1;
                    for (this[t + o] = 255 & e; 0 <= --o && (i *= 256); ) this[t + o] = (e / i) & 255;
                    return t + n;
                }),
                (f.prototype.writeUInt8 = function (e, t, n) {
                    return (e = +e), (t |= 0), n || k(this, e, t, 1, 255, 0), f.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), (this[t] = 255 & e), t + 1;
                }),
                (f.prototype.writeUInt16LE = function (e, t, n) {
                    return (e = +e), (t |= 0), n || k(this, e, t, 2, 65535, 0), f.TYPED_ARRAY_SUPPORT ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8)) : T(this, e, t, !0), t + 2;
                }),
                (f.prototype.writeUInt16BE = function (e, t, n) {
                    return (e = +e), (t |= 0), n || k(this, e, t, 2, 65535, 0), f.TYPED_ARRAY_SUPPORT ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e)) : T(this, e, t, !1), t + 2;
                }),
                (f.prototype.writeUInt32LE = function (e, t, n) {
                    return (e = +e), (t |= 0), n || k(this, e, t, 4, 4294967295, 0), f.TYPED_ARRAY_SUPPORT ? ((this[t + 3] = e >>> 24), (this[t + 2] = e >>> 16), (this[t + 1] = e >>> 8), (this[t] = 255 & e)) : C(this, e, t, !0), t + 4;
                }),
                (f.prototype.writeUInt32BE = function (e, t, n) {
                    return (e = +e), (t |= 0), n || k(this, e, t, 4, 4294967295, 0), f.TYPED_ARRAY_SUPPORT ? ((this[t] = e >>> 24), (this[t + 1] = e >>> 16), (this[t + 2] = e >>> 8), (this[t + 3] = 255 & e)) : C(this, e, t, !1), t + 4;
                }),
                (f.prototype.writeIntLE = function (e, t, n, r) {
                    (e = +e), (t |= 0), r || k(this, e, t, n, (r = Math.pow(2, 8 * n - 1)) - 1, -r);
                    var o = 0,
                        i = 1,
                        a = 0;
                    for (this[t] = 255 & e; ++o < n && (i *= 256); ) e < 0 && 0 === a && 0 !== this[t + o - 1] && (a = 1), (this[t + o] = (((e / i) >> 0) - a) & 255);
                    return t + n;
                }),
                (f.prototype.writeIntBE = function (e, t, n, r) {
                    (e = +e), (t |= 0), r || k(this, e, t, n, (r = Math.pow(2, 8 * n - 1)) - 1, -r);
                    var o = n - 1,
                        i = 1,
                        a = 0;
                    for (this[t + o] = 255 & e; 0 <= --o && (i *= 256); ) e < 0 && 0 === a && 0 !== this[t + o + 1] && (a = 1), (this[t + o] = (((e / i) >> 0) - a) & 255);
                    return t + n;
                }),
                (f.prototype.writeInt8 = function (e, t, n) {
                    return (e = +e), (t |= 0), n || k(this, e, t, 1, 127, -128), f.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), (this[t] = 255 & (e = e < 0 ? 255 + e + 1 : e)), t + 1;
                }),
                (f.prototype.writeInt16LE = function (e, t, n) {
                    return (e = +e), (t |= 0), n || k(this, e, t, 2, 32767, -32768), f.TYPED_ARRAY_SUPPORT ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8)) : T(this, e, t, !0), t + 2;
                }),
                (f.prototype.writeInt16BE = function (e, t, n) {
                    return (e = +e), (t |= 0), n || k(this, e, t, 2, 32767, -32768), f.TYPED_ARRAY_SUPPORT ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e)) : T(this, e, t, !1), t + 2;
                }),
                (f.prototype.writeInt32LE = function (e, t, n) {
                    return (
                        (e = +e),
                        (t |= 0),
                        n || k(this, e, t, 4, 2147483647, -2147483648),
                        f.TYPED_ARRAY_SUPPORT ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8), (this[t + 2] = e >>> 16), (this[t + 3] = e >>> 24)) : C(this, e, t, !0),
                        t + 4
                    );
                }),
                (f.prototype.writeInt32BE = function (e, t, n) {
                    return (
                        (e = +e),
                        (t |= 0),
                        n || k(this, e, t, 4, 2147483647, -2147483648),
                        e < 0 && (e = 4294967295 + e + 1),
                        f.TYPED_ARRAY_SUPPORT ? ((this[t] = e >>> 24), (this[t + 1] = e >>> 16), (this[t + 2] = e >>> 8), (this[t + 3] = 255 & e)) : C(this, e, t, !1),
                        t + 4
                    );
                }),
                (f.prototype.writeFloatLE = function (e, t, n) {
                    return A(this, e, t, !0, n);
                }),
                (f.prototype.writeFloatBE = function (e, t, n) {
                    return A(this, e, t, !1, n);
                }),
                (f.prototype.writeDoubleLE = function (e, t, n) {
                    return S(this, e, t, !0, n);
                }),
                (f.prototype.writeDoubleBE = function (e, t, n) {
                    return S(this, e, t, !1, n);
                }),
                (f.prototype.copy = function (e, t, n, r) {
                    if (((n = n || 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), (r = 0 < r && r < n ? n : r) === n)) return 0;
                    if (0 === e.length || 0 === this.length) return 0;
                    if ((t = t || 0) < 0) throw new RangeError("targetStart out of bounds");
                    if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
                    if (r < 0) throw new RangeError("sourceEnd out of bounds");
                    r > this.length && (r = this.length);
                    var o,
                        i = (r = e.length - t < r - n ? e.length - t + n : r) - n;
                    if (this === e && n < t && t < r) for (o = i - 1; 0 <= o; --o) e[o + t] = this[o + n];
                    else if (i < 1e3 || !f.TYPED_ARRAY_SUPPORT) for (o = 0; o < i; ++o) e[o + t] = this[o + n];
                    else Uint8Array.prototype.set.call(e, this.subarray(n, n + i), t);
                    return i;
                }),
                (f.prototype.fill = function (e, t, n, r) {
                    if ("string" == typeof e) {
                        var o;
                        if (
                            ("string" == typeof t ? ((r = t), (t = 0), (n = this.length)) : "string" == typeof n && ((r = n), (n = this.length)),
                            1 !== e.length || ((o = e.charCodeAt(0)) < 256 && (e = o)),
                            void 0 !== r && "string" != typeof r)
                        )
                            throw new TypeError("encoding must be a string");
                        if ("string" == typeof r && !f.isEncoding(r)) throw new TypeError("Unknown encoding: " + r);
                    } else "number" == typeof e && (e &= 255);
                    if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
                    if (n <= t) return this;
                    if (((t >>>= 0), (n = void 0 === n ? this.length : n >>> 0), "number" == typeof (e = e || 0))) for (s = t; s < n; ++s) this[s] = e;
                    else for (var i = f.isBuffer(e) ? e : D(new f(e, r).toString()), a = i.length, s = 0; s < n - t; ++s) this[s + t] = i[s % a];
                    return this;
                });
            var j = /[^+\/0-9A-Za-z-_]/g;
            function D(e, t) {
                var n;
                t = t || 1 / 0;
                for (var r = e.length, o = null, i = [], a = 0; a < r; ++a) {
                    if (55295 < (n = e.charCodeAt(a)) && n < 57344) {
                        if (!o) {
                            if (56319 < n) {
                                -1 < (t -= 3) && i.push(239, 191, 189);
                                continue;
                            }
                            if (a + 1 === r) {
                                -1 < (t -= 3) && i.push(239, 191, 189);
                                continue;
                            }
                            o = n;
                            continue;
                        }
                        if (n < 56320) {
                            -1 < (t -= 3) && i.push(239, 191, 189), (o = n);
                            continue;
                        }
                        n = 65536 + (((o - 55296) << 10) | (n - 56320));
                    } else o && -1 < (t -= 3) && i.push(239, 191, 189);
                    if (((o = null), n < 128)) {
                        if (--t < 0) break;
                        i.push(n);
                    } else if (n < 2048) {
                        if ((t -= 2) < 0) break;
                        i.push((n >> 6) | 192, (63 & n) | 128);
                    } else if (n < 65536) {
                        if ((t -= 3) < 0) break;
                        i.push((n >> 12) | 224, ((n >> 6) & 63) | 128, (63 & n) | 128);
                    } else {
                        if (!(n < 1114112)) throw new Error("Invalid code point");
                        if ((t -= 4) < 0) break;
                        i.push((n >> 18) | 240, ((n >> 12) & 63) | 128, ((n >> 6) & 63) | 128, (63 & n) | 128);
                    }
                }
                return i;
            }
            function O(e) {
                return s.toByteArray(
                    (function (e) {
                        var t;
                        if ((e = ((t = e).trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")).replace(j, "")).length < 2) return "";
                        for (; e.length % 4 != 0; ) e += "=";
                        return e;
                    })(e)
                );
            }
            function R(e, t, n, r) {
                for (var o = 0; o < r && !(o + n >= t.length || o >= e.length); ++o) t[o + n] = e[o];
                return o;
            }
        }.call(this, L(38));
    },
    function (e, t, n) {
        "use strict";
        (t.byteLength = function (e) {
            var t = l(e),
                e = t[0],
                t = t[1];
            return (3 * (e + t)) / 4 - t;
        }),
            (t.toByteArray = function (e) {
                var t,
                    n,
                    r = l(e),
                    o = r[0],
                    r = r[1],
                    i = new c(
                        (function (e, t) {
                            return (3 * (e + t)) / 4 - t;
                        })(o, r)
                    ),
                    a = 0,
                    s = 0 < r ? o - 4 : o;
                for (n = 0; n < s; n += 4)
                    (t = (u[e.charCodeAt(n)] << 18) | (u[e.charCodeAt(n + 1)] << 12) | (u[e.charCodeAt(n + 2)] << 6) | u[e.charCodeAt(n + 3)]), (i[a++] = (t >> 16) & 255), (i[a++] = (t >> 8) & 255), (i[a++] = 255 & t);
                2 === r && ((t = (u[e.charCodeAt(n)] << 2) | (u[e.charCodeAt(n + 1)] >> 4)), (i[a++] = 255 & t));
                1 === r && ((t = (u[e.charCodeAt(n)] << 10) | (u[e.charCodeAt(n + 1)] << 4) | (u[e.charCodeAt(n + 2)] >> 2)), (i[a++] = (t >> 8) & 255), (i[a++] = 255 & t));
                return i;
            }),
            (t.fromByteArray = function (e) {
                for (var t, n = e.length, r = n % 3, o = [], i = 0, a = n - r; i < a; i += 16383)
                    o.push(
                        (function (e, t, n) {
                            for (var r, o = [], i = t; i < n; i += 3)
                                (r = ((e[i] << 16) & 16711680) + ((e[i + 1] << 8) & 65280) + (255 & e[i + 2])),
                                    o.push(
                                        (function (e) {
                                            return s[(e >> 18) & 63] + s[(e >> 12) & 63] + s[(e >> 6) & 63] + s[63 & e];
                                        })(r)
                                    );
                            return o.join("");
                        })(e, i, a < i + 16383 ? a : i + 16383)
                    );
                1 == r ? ((t = e[n - 1]), o.push(s[t >> 2] + s[(t << 4) & 63] + "==")) : 2 == r && ((t = (e[n - 2] << 8) + e[n - 1]), o.push(s[t >> 10] + s[(t >> 4) & 63] + s[(t << 2) & 63] + "="));
                return o.join("");
            });
        for (var s = [], u = [], c = "undefined" != typeof Uint8Array ? Uint8Array : Array, r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", o = 0, i = r.length; o < i; ++o) (s[o] = r[o]), (u[r.charCodeAt(o)] = o);
        function l(e) {
            var t = e.length;
            if (0 < t % 4) throw new Error("Invalid string. Length must be a multiple of 4");
            e = e.indexOf("=");
            return [(e = -1 === e ? t : e), e === t ? 0 : 4 - (e % 4)];
        }
        (u["-".charCodeAt(0)] = 62), (u["_".charCodeAt(0)] = 63);
    },
    function (e, t) {
        /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
        (t.read = function (e, t, n, r, o) {
            var i,
                a,
                s = 8 * o - r - 1,
                u = (1 << s) - 1,
                c = u >> 1,
                l = -7,
                f = n ? o - 1 : 0,
                p = n ? -1 : 1,
                n = e[t + f];
            for (f += p, i = n & ((1 << -l) - 1), n >>= -l, l += s; 0 < l; i = 256 * i + e[t + f], f += p, l -= 8);
            for (a = i & ((1 << -l) - 1), i >>= -l, l += r; 0 < l; a = 256 * a + e[t + f], f += p, l -= 8);
            if (0 === i) i = 1 - c;
            else {
                if (i === u) return a ? NaN : (1 / 0) * (n ? -1 : 1);
                (a += Math.pow(2, r)), (i -= c);
            }
            return (n ? -1 : 1) * a * Math.pow(2, i - r);
        }),
            (t.write = function (e, t, n, r, o, i) {
                var a,
                    s,
                    u = 8 * i - o - 1,
                    c = (1 << u) - 1,
                    l = c >> 1,
                    f = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                    p = r ? 0 : i - 1,
                    h = r ? 1 : -1,
                    i = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
                for (
                    t = Math.abs(t),
                        isNaN(t) || t === 1 / 0
                            ? ((s = isNaN(t) ? 1 : 0), (a = c))
                            : ((a = Math.floor(Math.log(t) / Math.LN2)),
                              t * (r = Math.pow(2, -a)) < 1 && (a--, (r *= 2)),
                              2 <= (t += 1 <= a + l ? f / r : f * Math.pow(2, 1 - l)) * r && (a++, (r /= 2)),
                              c <= a + l ? ((s = 0), (a = c)) : 1 <= a + l ? ((s = (t * r - 1) * Math.pow(2, o)), (a += l)) : ((s = t * Math.pow(2, l - 1) * Math.pow(2, o)), (a = 0)));
                    8 <= o;
                    e[n + p] = 255 & s, p += h, s /= 256, o -= 8
                );
                for (a = (a << o) | s, u += o; 0 < u; e[n + p] = 255 & a, p += h, a /= 256, u -= 8);
                e[n + p - h] |= 128 * i;
            });
    },
    function (e, t) {
        var n = {}.toString;
        e.exports =
            Array.isArray ||
            function (e) {
                return "[object Array]" == n.call(e);
            };
    },
    function (e, t, n) {
        n = n(1);
        e.exports = n(function () {
            var e = RegExp(".", "string".charAt(0));
            return !(e.dotAll && e.exec("\n") && "s" === e.flags);
        });
    },
    function (e, t, n) {
        n = n(1);
        e.exports = n(function () {
            var e = RegExp("(?<a>b)", "string".charAt(5));
            return "b" !== e.exec("b").groups.a || "bc" !== "b".replace(e, "$<a>c");
        });
    },
    function (e, t, n) {
        "use strict";
        n(35);
        var u = n(12),
            c = n(16),
            l = n(1),
            f = n(3),
            p = n(9),
            h = f("species"),
            d = RegExp.prototype;
        e.exports = function (n, e, t, r) {
            var a,
                o = f(n),
                s = !l(function () {
                    var e = {};
                    return (
                        (e[o] = function () {
                            return 7;
                        }),
                        7 != ""[n](e)
                    );
                }),
                i =
                    s &&
                    !l(function () {
                        var e = !1,
                            t = /a/;
                        return (
                            "split" === n &&
                                (((t = {
                                    constructor: {},
                                }).constructor[h] = function () {
                                    return t;
                                }),
                                (t.flags = ""),
                                (t[o] = /./[o])),
                            (t.exec = function () {
                                return (e = !0), null;
                            }),
                            t[o](""),
                            !e
                        );
                    });
            (s && i && !t) ||
                ((a = /./[o]),
                (e = e(o, ""[n], function (e, t, n, r, o) {
                    var i = t.exec;
                    return i === c || i === d.exec
                        ? s && !o
                            ? {
                                  done: !0,
                                  value: a.call(t, n, r),
                              }
                            : {
                                  done: !0,
                                  value: e.call(n, t, r),
                              }
                        : {
                              done: !1,
                          };
                })),
                u(String.prototype, n, e[0]),
                u(d, o, e[1])),
                r && p(d[o], "sham", !0);
        };
    },
    function (e, t, n) {
        var r = n(6),
            o = n(11),
            i = n(3)("match");
        e.exports = function (e) {
            var t;
            return r(e) && (void 0 !== (t = e[i]) ? !!t : "RegExp" == o(e));
        };
    },
    function (e, t, n) {
        var r = n(4),
            o = n(49),
            i = n(3)("species");
        e.exports = function (e, t) {
            var n,
                e = r(e).constructor;
            return void 0 === e || null == (n = r(e)[i]) ? t : o(n);
        };
    },
    function (e, t, n) {
        "use strict";
        var r = n(100).charAt;
        e.exports = function (e, t, n) {
            return t + (n ? r(e, t).length : 1);
        };
    },
    function (e, t, n) {
        var a = n(29),
            s = n(14),
            n = function (i) {
                return function (e, t) {
                    var n,
                        r = String(s(e)),
                        o = a(t),
                        e = r.length;
                    return o < 0 || e <= o
                        ? i
                            ? ""
                            : void 0
                        : (t = r.charCodeAt(o)) < 55296 || 56319 < t || o + 1 === e || (n = r.charCodeAt(o + 1)) < 56320 || 57343 < n
                        ? i
                            ? r.charAt(o)
                            : t
                        : i
                        ? r.slice(o, o + 2)
                        : n - 56320 + ((t - 55296) << 10) + 65536;
                };
            };
        e.exports = {
            codeAt: n(!1),
            charAt: n(!0),
        };
    },
    function (e, t, n) {
        var r = n(11),
            o = n(16);
        e.exports = function (e, t) {
            var n = e.exec;
            if ("function" == typeof n) {
                n = n.call(e, t);
                if ("object" != typeof n) throw TypeError("RegExp exec method returned something other than an Object or null");
                return n;
            }
            if ("RegExp" !== r(e)) throw TypeError("RegExp#exec called on incompatible receiver");
            return o.call(e, t);
        };
    },
    function (e, t) {
        e.exports = {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0,
        };
    },
    function (e, t, n) {
        "use strict";
        var r = n(5),
            o = n(31).some;
        r(
            {
                target: "Array",
                proto: !0,
                forced: !n(36)("some"),
            },
            {
                some: function (e) {
                    return o(this, e, 1 < arguments.length ? arguments[1] : void 0);
                },
            }
        );
    },
]);
