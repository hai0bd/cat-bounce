! function(e) {
    var t = window.webpackHotUpdate;
    window.webpackHotUpdate = function(e, n) {
        ! function(e, t) {
            if (!w[e] || !S[e]) return;
            for (var n in S[e] = !1, t) Object.prototype.hasOwnProperty.call(t, n) && (f[n] = t[n]);
            0 == --y && 0 === m && P()
        }(e, n), t && t(e, n)
    };
    var n, o = !0,
        r = "11d97a73ddd23f0c7ee2",
        i = 1e4,
        s = {},
        a = [],
        c = [];

    function u(e) {
        var t = A[e];
        if (!t) return V;
        var o = function(o) {
                return t.hot.active ? (A[o] ? -1 === A[o].parents.indexOf(e) && A[o].parents.push(e) : (a = [e], n = o), -1 === t.children.indexOf(o) && t.children.push(o)) : (console.warn("[HMR] unexpected require(" + o + ") from disposed module " + e), a = []), V(o)
            },
            r = function(e) {
                return {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        return V[e]
                    },
                    set: function(t) {
                        V[e] = t
                    }
                }
            };
        for (var i in V) Object.prototype.hasOwnProperty.call(V, i) && "e" !== i && "t" !== i && Object.defineProperty(o, i, r(i));
        return o.e = function(e) {
            return "ready" === d && p("prepare"), m++, V.e(e).then(t, function(e) {
                throw t(), e
            });

            function t() {
                m--, "prepare" === d && (v[e] || _(e), 0 === m && 0 === y && P())
            }
        }, o.t = function(e, t) {
            return 1 & t && (e = o(e)), V.t(e, -2 & t)
        }, o
    }
    var l = [],
        d = "idle";

    function p(e) {
        d = e;
        for (var t = 0; t < l.length; t++) l[t].call(null, e)
    }
    var h, f, g, y = 0,
        m = 0,
        v = {},
        S = {},
        w = {};

    function x(e) {
        return +e + "" === e ? +e : e
    }

    function b(e) {
        if ("idle" !== d) throw new Error("check() is only allowed in idle status");
        return o = e, p("check"),
            function(e) {
                return e = e || 1e4, new Promise(function(t, n) {
                    if ("undefined" == typeof XMLHttpRequest) return n(new Error("No browser support"));
                    try {
                        var o = new XMLHttpRequest,
                            i = V.p + "" + r + ".hot-update.json";
                        o.open("GET", i, !0), o.timeout = e, o.send(null)
                    } catch (e) {
                        return n(e)
                    }
                    o.onreadystatechange = function() {
                        if (4 === o.readyState)
                            if (0 === o.status) n(new Error("Manifest request to " + i + " timed out."));
                            else if (404 === o.status) t();
                        else if (200 !== o.status && 304 !== o.status) n(new Error("Manifest request to " + i + " failed."));
                        else {
                            try {
                                var e = JSON.parse(o.responseText)
                            } catch (e) {
                                return void n(e)
                            }
                            t(e)
                        }
                    }
                })
            }(i).then(function(e) {
                if (!e) return p("idle"), null;
                S = {}, v = {}, w = e.c, g = e.h, p("prepare");
                var t = new Promise(function(e, t) {
                    h = {
                        resolve: e,
                        reject: t
                    }
                });
                f = {};
                return _(0), "prepare" === d && 0 === m && 0 === y && P(), t
            })
    }

    function _(e) {
        w[e] ? (S[e] = !0, y++, function(e) {
            var t = document.getElementsByTagName("head")[0],
                n = document.createElement("script");
            n.charset = "utf-8", n.src = V.p + "" + e + "." + r + ".hot-update.js", t.appendChild(n)
        }(e)) : v[e] = !0
    }

    function P() {
        p("ready");
        var e = h;
        if (h = null, e)
            if (o) Promise.resolve().then(function() {
                return C(o)
            }).then(function(t) {
                e.resolve(t)
            }, function(t) {
                e.reject(t)
            });
            else {
                var t = [];
                for (var n in f) Object.prototype.hasOwnProperty.call(f, n) && t.push(x(n));
                e.resolve(t)
            }
    }

    function C(t) {
        if ("ready" !== d) throw new Error("apply() is only allowed in ready status");
        var n, o, i, c, u;

        function l(e) {
            for (var t = [e], n = {}, o = t.slice().map(function(e) {
                    return {
                        chain: [e],
                        id: e
                    }
                }); o.length > 0;) {
                var r = o.pop(),
                    i = r.id,
                    s = r.chain;
                if ((c = A[i]) && !c.hot._selfAccepted) {
                    if (c.hot._selfDeclined) return {
                        type: "self-declined",
                        chain: s,
                        moduleId: i
                    };
                    if (c.hot._main) return {
                        type: "unaccepted",
                        chain: s,
                        moduleId: i
                    };
                    for (var a = 0; a < c.parents.length; a++) {
                        var u = c.parents[a],
                            l = A[u];
                        if (l) {
                            if (l.hot._declinedDependencies[i]) return {
                                type: "declined",
                                chain: s.concat([u]),
                                moduleId: i,
                                parentId: u
                            }; - 1 === t.indexOf(u) && (l.hot._acceptedDependencies[i] ? (n[u] || (n[u] = []), h(n[u], [i])) : (delete n[u], t.push(u), o.push({
                                chain: s.concat([u]),
                                id: u
                            })))
                        }
                    }
                }
            }
            return {
                type: "accepted",
                moduleId: e,
                outdatedModules: t,
                outdatedDependencies: n
            }
        }

        function h(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n]; - 1 === e.indexOf(o) && e.push(o)
            }
        }
        t = t || {};
        var y = {},
            m = [],
            v = {},
            S = function() {
                console.warn("[HMR] unexpected require(" + _.moduleId + ") to disposed module")
            };
        for (var b in f)
            if (Object.prototype.hasOwnProperty.call(f, b)) {
                var _;
                u = x(b);
                var P = !1,
                    C = !1,
                    T = !1,
                    G = "";
                switch ((_ = f[b] ? l(u) : {
                    type: "disposed",
                    moduleId: b
                }).chain && (G = "\nUpdate propagation: " + _.chain.join(" -> ")), _.type) {
                    case "self-declined":
                        t.onDeclined && t.onDeclined(_), t.ignoreDeclined || (P = new Error("Aborted because of self decline: " + _.moduleId + G));
                        break;
                    case "declined":
                        t.onDeclined && t.onDeclined(_), t.ignoreDeclined || (P = new Error("Aborted because of declined dependency: " + _.moduleId + " in " + _.parentId + G));
                        break;
                    case "unaccepted":
                        t.onUnaccepted && t.onUnaccepted(_), t.ignoreUnaccepted || (P = new Error("Aborted because " + u + " is not accepted" + G));
                        break;
                    case "accepted":
                        t.onAccepted && t.onAccepted(_), C = !0;
                        break;
                    case "disposed":
                        t.onDisposed && t.onDisposed(_), T = !0;
                        break;
                    default:
                        throw new Error("Unexception type " + _.type)
                }
                if (P) return p("abort"), Promise.reject(P);
                if (C)
                    for (u in v[u] = f[u], h(m, _.outdatedModules), _.outdatedDependencies) Object.prototype.hasOwnProperty.call(_.outdatedDependencies, u) && (y[u] || (y[u] = []), h(y[u], _.outdatedDependencies[u]));
                T && (h(m, [_.moduleId]), v[u] = S)
            }
        var E, L = [];
        for (o = 0; o < m.length; o++) u = m[o], A[u] && A[u].hot._selfAccepted && L.push({
            module: u,
            errorHandler: A[u].hot._selfAccepted
        });
        p("dispose"), Object.keys(w).forEach(function(e) {
            !1 === w[e] && function(e) {
                delete installedChunks[e]
            }(e)
        });
        for (var O, I, R = m.slice(); R.length > 0;)
            if (u = R.pop(), c = A[u]) {
                var k = {},
                    M = c.hot._disposeHandlers;
                for (i = 0; i < M.length; i++)(n = M[i])(k);
                for (s[u] = k, c.hot.active = !1, delete A[u], delete y[u], i = 0; i < c.children.length; i++) {
                    var j = A[c.children[i]];
                    j && ((E = j.parents.indexOf(u)) >= 0 && j.parents.splice(E, 1))
                }
            }
        for (u in y)
            if (Object.prototype.hasOwnProperty.call(y, u) && (c = A[u]))
                for (I = y[u], i = 0; i < I.length; i++) O = I[i], (E = c.children.indexOf(O)) >= 0 && c.children.splice(E, 1);
        for (u in p("apply"), r = g, v) Object.prototype.hasOwnProperty.call(v, u) && (e[u] = v[u]);
        var B = null;
        for (u in y)
            if (Object.prototype.hasOwnProperty.call(y, u) && (c = A[u])) {
                I = y[u];
                var N = [];
                for (o = 0; o < I.length; o++)
                    if (O = I[o], n = c.hot._acceptedDependencies[O]) {
                        if (-1 !== N.indexOf(n)) continue;
                        N.push(n)
                    }
                for (o = 0; o < N.length; o++) {
                    n = N[o];
                    try {
                        n(I)
                    } catch (e) {
                        t.onErrored && t.onErrored({
                            type: "accept-errored",
                            moduleId: u,
                            dependencyId: I[o],
                            error: e
                        }), t.ignoreErrored || B || (B = e)
                    }
                }
            }
        for (o = 0; o < L.length; o++) {
            var H = L[o];
            u = H.module, a = [u];
            try {
                V(u)
            } catch (e) {
                if ("function" == typeof H.errorHandler) try {
                    H.errorHandler(e)
                } catch (n) {
                    t.onErrored && t.onErrored({
                        type: "self-accept-error-handler-errored",
                        moduleId: u,
                        error: n,
                        originalError: e
                    }), t.ignoreErrored || B || (B = n), B || (B = e)
                } else t.onErrored && t.onErrored({
                    type: "self-accept-errored",
                    moduleId: u,
                    error: e
                }), t.ignoreErrored || B || (B = e)
            }
        }
        return B ? (p("fail"), Promise.reject(B)) : (p("idle"), new Promise(function(e) {
            e(m)
        }))
    }
    var A = {};

    function V(t) {
        if (A[t]) return A[t].exports;
        var o = A[t] = {
            i: t,
            l: !1,
            exports: {},
            hot: function(e) {
                var t = {
                    _acceptedDependencies: {},
                    _declinedDependencies: {},
                    _selfAccepted: !1,
                    _selfDeclined: !1,
                    _disposeHandlers: [],
                    _main: n !== e,
                    active: !0,
                    accept: function(e, n) {
                        if (void 0 === e) t._selfAccepted = !0;
                        else if ("function" == typeof e) t._selfAccepted = e;
                        else if ("object" == typeof e)
                            for (var o = 0; o < e.length; o++) t._acceptedDependencies[e[o]] = n || function() {};
                        else t._acceptedDependencies[e] = n || function() {}
                    },
                    decline: function(e) {
                        if (void 0 === e) t._selfDeclined = !0;
                        else if ("object" == typeof e)
                            for (var n = 0; n < e.length; n++) t._declinedDependencies[e[n]] = !0;
                        else t._declinedDependencies[e] = !0
                    },
                    dispose: function(e) {
                        t._disposeHandlers.push(e)
                    },
                    addDisposeHandler: function(e) {
                        t._disposeHandlers.push(e)
                    },
                    removeDisposeHandler: function(e) {
                        var n = t._disposeHandlers.indexOf(e);
                        n >= 0 && t._disposeHandlers.splice(n, 1)
                    },
                    check: b,
                    apply: C,
                    status: function(e) {
                        if (!e) return d;
                        l.push(e)
                    },
                    addStatusHandler: function(e) {
                        l.push(e)
                    },
                    removeStatusHandler: function(e) {
                        var t = l.indexOf(e);
                        t >= 0 && l.splice(t, 1)
                    },
                    data: s[e]
                };
                return n = void 0, t
            }(t),
            parents: (c = a, a = [], c),
            children: []
        };
        return e[t].call(o.exports, o, o.exports, u(t)), o.l = !0, o.exports
    }
    V.m = e, V.c = A, V.d = function(e, t, n) {
        V.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, V.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, V.t = function(e, t) {
        if (1 & t && (e = V(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (V.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) V.d(n, o, function(t) {
                return e[t]
            }.bind(null, o));
        return n
    }, V.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return V.d(t, "a", t), t
    }, V.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, V.p = "", V.h = function() {
        return r
    }, u("./source/js/application.js")(V.s = "./source/js/application.js")
}({
    "./node_modules/jquery/dist/jquery.js": function(e, t, n) {
        var o;
        /*!
         * jQuery JavaScript Library v3.3.1
         * https://jquery.com/
         *
         * Includes Sizzle.js
         * https://sizzlejs.com/
         *
         * Copyright JS Foundation and other contributors
         * Released under the MIT license
         * https://jquery.org/license
         *
         * Date: 2018-01-20T17:24Z
         */
        /*!
         * jQuery JavaScript Library v3.3.1
         * https://jquery.com/
         *
         * Includes Sizzle.js
         * https://sizzlejs.com/
         *
         * Copyright JS Foundation and other contributors
         * Released under the MIT license
         * https://jquery.org/license
         *
         * Date: 2018-01-20T17:24Z
         */
        ! function(t, n) {
            "use strict";
            "object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
                if (!e.document) throw new Error("jQuery requires a window with a document");
                return n(e)
            } : n(t)
        }("undefined" != typeof window ? window : this, function(n, r) {
            "use strict";
            var i = [],
                s = n.document,
                a = Object.getPrototypeOf,
                c = i.slice,
                u = i.concat,
                l = i.push,
                d = i.indexOf,
                p = {},
                h = p.toString,
                f = p.hasOwnProperty,
                g = f.toString,
                y = g.call(Object),
                m = {},
                v = function(e) {
                    return "function" == typeof e && "number" != typeof e.nodeType
                },
                S = function(e) {
                    return null != e && e === e.window
                },
                w = {
                    type: !0,
                    src: !0,
                    noModule: !0
                };

            function x(e, t, n) {
                var o, r = (t = t || s).createElement("script");
                if (r.text = e, n)
                    for (o in w) n[o] && (r[o] = n[o]);
                t.head.appendChild(r).parentNode.removeChild(r)
            }

            function b(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? p[h.call(e)] || "object" : typeof e
            }
            var _ = function(e, t) {
                    return new _.fn.init(e, t)
                },
                P = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

            function C(e) {
                var t = !!e && "length" in e && e.length,
                    n = b(e);
                return !v(e) && !S(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
            }
            _.fn = _.prototype = {
                jquery: "3.3.1",
                constructor: _,
                length: 0,
                toArray: function() {
                    return c.call(this)
                },
                get: function(e) {
                    return null == e ? c.call(this) : e < 0 ? this[e + this.length] : this[e]
                },
                pushStack: function(e) {
                    var t = _.merge(this.constructor(), e);
                    return t.prevObject = this, t
                },
                each: function(e) {
                    return _.each(this, e)
                },
                map: function(e) {
                    return this.pushStack(_.map(this, function(t, n) {
                        return e.call(t, n, t)
                    }))
                },
                slice: function() {
                    return this.pushStack(c.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                eq: function(e) {
                    var t = this.length,
                        n = +e + (e < 0 ? t : 0);
                    return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
                },
                end: function() {
                    return this.prevObject || this.constructor()
                },
                push: l,
                sort: i.sort,
                splice: i.splice
            }, _.extend = _.fn.extend = function() {
                var e, t, n, o, r, i, s = arguments[0] || {},
                    a = 1,
                    c = arguments.length,
                    u = !1;
                for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || v(s) || (s = {}), a === c && (s = this, a--); a < c; a++)
                    if (null != (e = arguments[a]))
                        for (t in e) n = s[t], s !== (o = e[t]) && (u && o && (_.isPlainObject(o) || (r = Array.isArray(o))) ? (r ? (r = !1, i = n && Array.isArray(n) ? n : []) : i = n && _.isPlainObject(n) ? n : {}, s[t] = _.extend(u, i, o)) : void 0 !== o && (s[t] = o));
                return s
            }, _.extend({
                expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(e) {
                    throw new Error(e)
                },
                noop: function() {},
                isPlainObject: function(e) {
                    var t, n;
                    return !(!e || "[object Object]" !== h.call(e)) && (!(t = a(e)) || "function" == typeof(n = f.call(t, "constructor") && t.constructor) && g.call(n) === y)
                },
                isEmptyObject: function(e) {
                    var t;
                    for (t in e) return !1;
                    return !0
                },
                globalEval: function(e) {
                    x(e)
                },
                each: function(e, t) {
                    var n, o = 0;
                    if (C(e))
                        for (n = e.length; o < n && !1 !== t.call(e[o], o, e[o]); o++);
                    else
                        for (o in e)
                            if (!1 === t.call(e[o], o, e[o])) break;
                    return e
                },
                trim: function(e) {
                    return null == e ? "" : (e + "").replace(P, "")
                },
                makeArray: function(e, t) {
                    var n = t || [];
                    return null != e && (C(Object(e)) ? _.merge(n, "string" == typeof e ? [e] : e) : l.call(n, e)), n
                },
                inArray: function(e, t, n) {
                    return null == t ? -1 : d.call(t, e, n)
                },
                merge: function(e, t) {
                    for (var n = +t.length, o = 0, r = e.length; o < n; o++) e[r++] = t[o];
                    return e.length = r, e
                },
                grep: function(e, t, n) {
                    for (var o = [], r = 0, i = e.length, s = !n; r < i; r++) !t(e[r], r) !== s && o.push(e[r]);
                    return o
                },
                map: function(e, t, n) {
                    var o, r, i = 0,
                        s = [];
                    if (C(e))
                        for (o = e.length; i < o; i++) null != (r = t(e[i], i, n)) && s.push(r);
                    else
                        for (i in e) null != (r = t(e[i], i, n)) && s.push(r);
                    return u.apply([], s)
                },
                guid: 1,
                support: m
            }), "function" == typeof Symbol && (_.fn[Symbol.iterator] = i[Symbol.iterator]), _.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
                p["[object " + t + "]"] = t.toLowerCase()
            });
            var A =
                /*!
                 * Sizzle CSS Selector Engine v2.3.3
                 * https://sizzlejs.com/
                 *
                 * Copyright jQuery Foundation and other contributors
                 * Released under the MIT license
                 * http://jquery.org/license
                 *
                 * Date: 2016-08-08
                 */
                function(e) {
                    var t, n, o, r, i, s, a, c, u, l, d, p, h, f, g, y, m, v, S, w = "sizzle" + 1 * new Date,
                        x = e.document,
                        b = 0,
                        _ = 0,
                        P = se(),
                        C = se(),
                        A = se(),
                        V = function(e, t) {
                            return e === t && (d = !0), 0
                        },
                        T = {}.hasOwnProperty,
                        G = [],
                        E = G.pop,
                        L = G.push,
                        O = G.push,
                        I = G.slice,
                        R = function(e, t) {
                            for (var n = 0, o = e.length; n < o; n++)
                                if (e[n] === t) return n;
                            return -1
                        },
                        k = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                        M = "[\\x20\\t\\r\\n\\f]",
                        j = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                        B = "\\[" + M + "*(" + j + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + j + "))|)" + M + "*\\]",
                        N = ":(" + j + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + B + ")*)|.*)\\)|)",
                        H = new RegExp(M + "+", "g"),
                        D = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
                        q = new RegExp("^" + M + "*," + M + "*"),
                        F = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
                        U = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
                        W = new RegExp(N),
                        Q = new RegExp("^" + j + "$"),
                        z = {
                            ID: new RegExp("^#(" + j + ")"),
                            CLASS: new RegExp("^\\.(" + j + ")"),
                            TAG: new RegExp("^(" + j + "|[*])"),
                            ATTR: new RegExp("^" + B),
                            PSEUDO: new RegExp("^" + N),
                            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                            bool: new RegExp("^(?:" + k + ")$", "i"),
                            needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
                        },
                        $ = /^(?:input|select|textarea|button)$/i,
                        X = /^h\d$/i,
                        Y = /^[^{]+\{\s*\[native \w/,
                        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                        K = /[+~]/,
                        J = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
                        ee = function(e, t, n) {
                            var o = "0x" + t - 65536;
                            return o != o || n ? t : o < 0 ? String.fromCharCode(o + 65536) : String.fromCharCode(o >> 10 | 55296, 1023 & o | 56320)
                        },
                        te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                        ne = function(e, t) {
                            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                        },
                        oe = function() {
                            p()
                        },
                        re = ve(function(e) {
                            return !0 === e.disabled && ("form" in e || "label" in e)
                        }, {
                            dir: "parentNode",
                            next: "legend"
                        });
                    try {
                        O.apply(G = I.call(x.childNodes), x.childNodes), G[x.childNodes.length].nodeType
                    } catch (e) {
                        O = {
                            apply: G.length ? function(e, t) {
                                L.apply(e, I.call(t))
                            } : function(e, t) {
                                for (var n = e.length, o = 0; e[n++] = t[o++];);
                                e.length = n - 1
                            }
                        }
                    }

                    function ie(e, t, o, r) {
                        var i, a, u, l, d, f, m, v = t && t.ownerDocument,
                            b = t ? t.nodeType : 9;
                        if (o = o || [], "string" != typeof e || !e || 1 !== b && 9 !== b && 11 !== b) return o;
                        if (!r && ((t ? t.ownerDocument || t : x) !== h && p(t), t = t || h, g)) {
                            if (11 !== b && (d = Z.exec(e)))
                                if (i = d[1]) {
                                    if (9 === b) {
                                        if (!(u = t.getElementById(i))) return o;
                                        if (u.id === i) return o.push(u), o
                                    } else if (v && (u = v.getElementById(i)) && S(t, u) && u.id === i) return o.push(u), o
                                } else {
                                    if (d[2]) return O.apply(o, t.getElementsByTagName(e)), o;
                                    if ((i = d[3]) && n.getElementsByClassName && t.getElementsByClassName) return O.apply(o, t.getElementsByClassName(i)), o
                                }
                            if (n.qsa && !A[e + " "] && (!y || !y.test(e))) {
                                if (1 !== b) v = t, m = e;
                                else if ("object" !== t.nodeName.toLowerCase()) {
                                    for ((l = t.getAttribute("id")) ? l = l.replace(te, ne) : t.setAttribute("id", l = w), a = (f = s(e)).length; a--;) f[a] = "#" + l + " " + me(f[a]);
                                    m = f.join(","), v = K.test(e) && ge(t.parentNode) || t
                                }
                                if (m) try {
                                    return O.apply(o, v.querySelectorAll(m)), o
                                } catch (e) {} finally {
                                    l === w && t.removeAttribute("id")
                                }
                            }
                        }
                        return c(e.replace(D, "$1"), t, o, r)
                    }

                    function se() {
                        var e = [];
                        return function t(n, r) {
                            return e.push(n + " ") > o.cacheLength && delete t[e.shift()], t[n + " "] = r
                        }
                    }

                    function ae(e) {
                        return e[w] = !0, e
                    }

                    function ce(e) {
                        var t = h.createElement("fieldset");
                        try {
                            return !!e(t)
                        } catch (e) {
                            return !1
                        } finally {
                            t.parentNode && t.parentNode.removeChild(t), t = null
                        }
                    }

                    function ue(e, t) {
                        for (var n = e.split("|"), r = n.length; r--;) o.attrHandle[n[r]] = t
                    }

                    function le(e, t) {
                        var n = t && e,
                            o = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                        if (o) return o;
                        if (n)
                            for (; n = n.nextSibling;)
                                if (n === t) return -1;
                        return e ? 1 : -1
                    }

                    function de(e) {
                        return function(t) {
                            return "input" === t.nodeName.toLowerCase() && t.type === e
                        }
                    }

                    function pe(e) {
                        return function(t) {
                            var n = t.nodeName.toLowerCase();
                            return ("input" === n || "button" === n) && t.type === e
                        }
                    }

                    function he(e) {
                        return function(t) {
                            return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && re(t) === e : t.disabled === e : "label" in t && t.disabled === e
                        }
                    }

                    function fe(e) {
                        return ae(function(t) {
                            return t = +t, ae(function(n, o) {
                                for (var r, i = e([], n.length, t), s = i.length; s--;) n[r = i[s]] && (n[r] = !(o[r] = n[r]))
                            })
                        })
                    }

                    function ge(e) {
                        return e && void 0 !== e.getElementsByTagName && e
                    }
                    for (t in n = ie.support = {}, i = ie.isXML = function(e) {
                            var t = e && (e.ownerDocument || e).documentElement;
                            return !!t && "HTML" !== t.nodeName
                        }, p = ie.setDocument = function(e) {
                            var t, r, s = e ? e.ownerDocument || e : x;
                            return s !== h && 9 === s.nodeType && s.documentElement ? (f = (h = s).documentElement, g = !i(h), x !== h && (r = h.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", oe, !1) : r.attachEvent && r.attachEvent("onunload", oe)), n.attributes = ce(function(e) {
                                return e.className = "i", !e.getAttribute("className")
                            }), n.getElementsByTagName = ce(function(e) {
                                return e.appendChild(h.createComment("")), !e.getElementsByTagName("*").length
                            }), n.getElementsByClassName = Y.test(h.getElementsByClassName), n.getById = ce(function(e) {
                                return f.appendChild(e).id = w, !h.getElementsByName || !h.getElementsByName(w).length
                            }), n.getById ? (o.filter.ID = function(e) {
                                var t = e.replace(J, ee);
                                return function(e) {
                                    return e.getAttribute("id") === t
                                }
                            }, o.find.ID = function(e, t) {
                                if (void 0 !== t.getElementById && g) {
                                    var n = t.getElementById(e);
                                    return n ? [n] : []
                                }
                            }) : (o.filter.ID = function(e) {
                                var t = e.replace(J, ee);
                                return function(e) {
                                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                    return n && n.value === t
                                }
                            }, o.find.ID = function(e, t) {
                                if (void 0 !== t.getElementById && g) {
                                    var n, o, r, i = t.getElementById(e);
                                    if (i) {
                                        if ((n = i.getAttributeNode("id")) && n.value === e) return [i];
                                        for (r = t.getElementsByName(e), o = 0; i = r[o++];)
                                            if ((n = i.getAttributeNode("id")) && n.value === e) return [i]
                                    }
                                    return []
                                }
                            }), o.find.TAG = n.getElementsByTagName ? function(e, t) {
                                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                            } : function(e, t) {
                                var n, o = [],
                                    r = 0,
                                    i = t.getElementsByTagName(e);
                                if ("*" === e) {
                                    for (; n = i[r++];) 1 === n.nodeType && o.push(n);
                                    return o
                                }
                                return i
                            }, o.find.CLASS = n.getElementsByClassName && function(e, t) {
                                if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e)
                            }, m = [], y = [], (n.qsa = Y.test(h.querySelectorAll)) && (ce(function(e) {
                                f.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + k + ")"), e.querySelectorAll("[id~=" + w + "-]").length || y.push("~="), e.querySelectorAll(":checked").length || y.push(":checked"), e.querySelectorAll("a#" + w + "+*").length || y.push(".#.+[+~]")
                            }), ce(function(e) {
                                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                var t = h.createElement("input");
                                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"), f.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), y.push(",.*:")
                            })), (n.matchesSelector = Y.test(v = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && ce(function(e) {
                                n.disconnectedMatch = v.call(e, "*"), v.call(e, "[s!='']:x"), m.push("!=", N)
                            }), y = y.length && new RegExp(y.join("|")), m = m.length && new RegExp(m.join("|")), t = Y.test(f.compareDocumentPosition), S = t || Y.test(f.contains) ? function(e, t) {
                                var n = 9 === e.nodeType ? e.documentElement : e,
                                    o = t && t.parentNode;
                                return e === o || !(!o || 1 !== o.nodeType || !(n.contains ? n.contains(o) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(o)))
                            } : function(e, t) {
                                if (t)
                                    for (; t = t.parentNode;)
                                        if (t === e) return !0;
                                return !1
                            }, V = t ? function(e, t) {
                                if (e === t) return d = !0, 0;
                                var o = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                return o || (1 & (o = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === o ? e === h || e.ownerDocument === x && S(x, e) ? -1 : t === h || t.ownerDocument === x && S(x, t) ? 1 : l ? R(l, e) - R(l, t) : 0 : 4 & o ? -1 : 1)
                            } : function(e, t) {
                                if (e === t) return d = !0, 0;
                                var n, o = 0,
                                    r = e.parentNode,
                                    i = t.parentNode,
                                    s = [e],
                                    a = [t];
                                if (!r || !i) return e === h ? -1 : t === h ? 1 : r ? -1 : i ? 1 : l ? R(l, e) - R(l, t) : 0;
                                if (r === i) return le(e, t);
                                for (n = e; n = n.parentNode;) s.unshift(n);
                                for (n = t; n = n.parentNode;) a.unshift(n);
                                for (; s[o] === a[o];) o++;
                                return o ? le(s[o], a[o]) : s[o] === x ? -1 : a[o] === x ? 1 : 0
                            }, h) : h
                        }, ie.matches = function(e, t) {
                            return ie(e, null, null, t)
                        }, ie.matchesSelector = function(e, t) {
                            if ((e.ownerDocument || e) !== h && p(e), t = t.replace(U, "='$1']"), n.matchesSelector && g && !A[t + " "] && (!m || !m.test(t)) && (!y || !y.test(t))) try {
                                var o = v.call(e, t);
                                if (o || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return o
                            } catch (e) {}
                            return ie(t, h, null, [e]).length > 0
                        }, ie.contains = function(e, t) {
                            return (e.ownerDocument || e) !== h && p(e), S(e, t)
                        }, ie.attr = function(e, t) {
                            (e.ownerDocument || e) !== h && p(e);
                            var r = o.attrHandle[t.toLowerCase()],
                                i = r && T.call(o.attrHandle, t.toLowerCase()) ? r(e, t, !g) : void 0;
                            return void 0 !== i ? i : n.attributes || !g ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                        }, ie.escape = function(e) {
                            return (e + "").replace(te, ne)
                        }, ie.error = function(e) {
                            throw new Error("Syntax error, unrecognized expression: " + e)
                        }, ie.uniqueSort = function(e) {
                            var t, o = [],
                                r = 0,
                                i = 0;
                            if (d = !n.detectDuplicates, l = !n.sortStable && e.slice(0), e.sort(V), d) {
                                for (; t = e[i++];) t === e[i] && (r = o.push(i));
                                for (; r--;) e.splice(o[r], 1)
                            }
                            return l = null, e
                        }, r = ie.getText = function(e) {
                            var t, n = "",
                                o = 0,
                                i = e.nodeType;
                            if (i) {
                                if (1 === i || 9 === i || 11 === i) {
                                    if ("string" == typeof e.textContent) return e.textContent;
                                    for (e = e.firstChild; e; e = e.nextSibling) n += r(e)
                                } else if (3 === i || 4 === i) return e.nodeValue
                            } else
                                for (; t = e[o++];) n += r(t);
                            return n
                        }, (o = ie.selectors = {
                            cacheLength: 50,
                            createPseudo: ae,
                            match: z,
                            attrHandle: {},
                            find: {},
                            relative: {
                                ">": {
                                    dir: "parentNode",
                                    first: !0
                                },
                                " ": {
                                    dir: "parentNode"
                                },
                                "+": {
                                    dir: "previousSibling",
                                    first: !0
                                },
                                "~": {
                                    dir: "previousSibling"
                                }
                            },
                            preFilter: {
                                ATTR: function(e) {
                                    return e[1] = e[1].replace(J, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(J, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                                },
                                CHILD: function(e) {
                                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ie.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ie.error(e[0]), e
                                },
                                PSEUDO: function(e) {
                                    var t, n = !e[6] && e[2];
                                    return z.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && W.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                                }
                            },
                            filter: {
                                TAG: function(e) {
                                    var t = e.replace(J, ee).toLowerCase();
                                    return "*" === e ? function() {
                                        return !0
                                    } : function(e) {
                                        return e.nodeName && e.nodeName.toLowerCase() === t
                                    }
                                },
                                CLASS: function(e) {
                                    var t = P[e + " "];
                                    return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && P(e, function(e) {
                                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                                    })
                                },
                                ATTR: function(e, t, n) {
                                    return function(o) {
                                        var r = ie.attr(o, e);
                                        return null == r ? "!=" === t : !t || (r += "", "=" === t ? r === n : "!=" === t ? r !== n : "^=" === t ? n && 0 === r.indexOf(n) : "*=" === t ? n && r.indexOf(n) > -1 : "$=" === t ? n && r.slice(-n.length) === n : "~=" === t ? (" " + r.replace(H, " ") + " ").indexOf(n) > -1 : "|=" === t && (r === n || r.slice(0, n.length + 1) === n + "-"))
                                    }
                                },
                                CHILD: function(e, t, n, o, r) {
                                    var i = "nth" !== e.slice(0, 3),
                                        s = "last" !== e.slice(-4),
                                        a = "of-type" === t;
                                    return 1 === o && 0 === r ? function(e) {
                                        return !!e.parentNode
                                    } : function(t, n, c) {
                                        var u, l, d, p, h, f, g = i !== s ? "nextSibling" : "previousSibling",
                                            y = t.parentNode,
                                            m = a && t.nodeName.toLowerCase(),
                                            v = !c && !a,
                                            S = !1;
                                        if (y) {
                                            if (i) {
                                                for (; g;) {
                                                    for (p = t; p = p[g];)
                                                        if (a ? p.nodeName.toLowerCase() === m : 1 === p.nodeType) return !1;
                                                    f = g = "only" === e && !f && "nextSibling"
                                                }
                                                return !0
                                            }
                                            if (f = [s ? y.firstChild : y.lastChild], s && v) {
                                                for (S = (h = (u = (l = (d = (p = y)[w] || (p[w] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] || [])[0] === b && u[1]) && u[2], p = h && y.childNodes[h]; p = ++h && p && p[g] || (S = h = 0) || f.pop();)
                                                    if (1 === p.nodeType && ++S && p === t) {
                                                        l[e] = [b, h, S];
                                                        break
                                                    }
                                            } else if (v && (S = h = (u = (l = (d = (p = t)[w] || (p[w] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] || [])[0] === b && u[1]), !1 === S)
                                                for (;
                                                    (p = ++h && p && p[g] || (S = h = 0) || f.pop()) && ((a ? p.nodeName.toLowerCase() !== m : 1 !== p.nodeType) || !++S || (v && ((l = (d = p[w] || (p[w] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] = [b, S]), p !== t)););
                                            return (S -= r) === o || S % o == 0 && S / o >= 0
                                        }
                                    }
                                },
                                PSEUDO: function(e, t) {
                                    var n, r = o.pseudos[e] || o.setFilters[e.toLowerCase()] || ie.error("unsupported pseudo: " + e);
                                    return r[w] ? r(t) : r.length > 1 ? (n = [e, e, "", t], o.setFilters.hasOwnProperty(e.toLowerCase()) ? ae(function(e, n) {
                                        for (var o, i = r(e, t), s = i.length; s--;) e[o = R(e, i[s])] = !(n[o] = i[s])
                                    }) : function(e) {
                                        return r(e, 0, n)
                                    }) : r
                                }
                            },
                            pseudos: {
                                not: ae(function(e) {
                                    var t = [],
                                        n = [],
                                        o = a(e.replace(D, "$1"));
                                    return o[w] ? ae(function(e, t, n, r) {
                                        for (var i, s = o(e, null, r, []), a = e.length; a--;)(i = s[a]) && (e[a] = !(t[a] = i))
                                    }) : function(e, r, i) {
                                        return t[0] = e, o(t, null, i, n), t[0] = null, !n.pop()
                                    }
                                }),
                                has: ae(function(e) {
                                    return function(t) {
                                        return ie(e, t).length > 0
                                    }
                                }),
                                contains: ae(function(e) {
                                    return e = e.replace(J, ee),
                                        function(t) {
                                            return (t.textContent || t.innerText || r(t)).indexOf(e) > -1
                                        }
                                }),
                                lang: ae(function(e) {
                                    return Q.test(e || "") || ie.error("unsupported lang: " + e), e = e.replace(J, ee).toLowerCase(),
                                        function(t) {
                                            var n;
                                            do {
                                                if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                            } while ((t = t.parentNode) && 1 === t.nodeType);
                                            return !1
                                        }
                                }),
                                target: function(t) {
                                    var n = e.location && e.location.hash;
                                    return n && n.slice(1) === t.id
                                },
                                root: function(e) {
                                    return e === f
                                },
                                focus: function(e) {
                                    return e === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                                },
                                enabled: he(!1),
                                disabled: he(!0),
                                checked: function(e) {
                                    var t = e.nodeName.toLowerCase();
                                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                                },
                                selected: function(e) {
                                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                                },
                                empty: function(e) {
                                    for (e = e.firstChild; e; e = e.nextSibling)
                                        if (e.nodeType < 6) return !1;
                                    return !0
                                },
                                parent: function(e) {
                                    return !o.pseudos.empty(e)
                                },
                                header: function(e) {
                                    return X.test(e.nodeName)
                                },
                                input: function(e) {
                                    return $.test(e.nodeName)
                                },
                                button: function(e) {
                                    var t = e.nodeName.toLowerCase();
                                    return "input" === t && "button" === e.type || "button" === t
                                },
                                text: function(e) {
                                    var t;
                                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                                },
                                first: fe(function() {
                                    return [0]
                                }),
                                last: fe(function(e, t) {
                                    return [t - 1]
                                }),
                                eq: fe(function(e, t, n) {
                                    return [n < 0 ? n + t : n]
                                }),
                                even: fe(function(e, t) {
                                    for (var n = 0; n < t; n += 2) e.push(n);
                                    return e
                                }),
                                odd: fe(function(e, t) {
                                    for (var n = 1; n < t; n += 2) e.push(n);
                                    return e
                                }),
                                lt: fe(function(e, t, n) {
                                    for (var o = n < 0 ? n + t : n; --o >= 0;) e.push(o);
                                    return e
                                }),
                                gt: fe(function(e, t, n) {
                                    for (var o = n < 0 ? n + t : n; ++o < t;) e.push(o);
                                    return e
                                })
                            }
                        }).pseudos.nth = o.pseudos.eq, {
                            radio: !0,
                            checkbox: !0,
                            file: !0,
                            password: !0,
                            image: !0
                        }) o.pseudos[t] = de(t);
                    for (t in {
                            submit: !0,
                            reset: !0
                        }) o.pseudos[t] = pe(t);

                    function ye() {}

                    function me(e) {
                        for (var t = 0, n = e.length, o = ""; t < n; t++) o += e[t].value;
                        return o
                    }

                    function ve(e, t, n) {
                        var o = t.dir,
                            r = t.next,
                            i = r || o,
                            s = n && "parentNode" === i,
                            a = _++;
                        return t.first ? function(t, n, r) {
                            for (; t = t[o];)
                                if (1 === t.nodeType || s) return e(t, n, r);
                            return !1
                        } : function(t, n, c) {
                            var u, l, d, p = [b, a];
                            if (c) {
                                for (; t = t[o];)
                                    if ((1 === t.nodeType || s) && e(t, n, c)) return !0
                            } else
                                for (; t = t[o];)
                                    if (1 === t.nodeType || s)
                                        if (l = (d = t[w] || (t[w] = {}))[t.uniqueID] || (d[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[o] || t;
                                        else {
                                            if ((u = l[i]) && u[0] === b && u[1] === a) return p[2] = u[2];
                                            if (l[i] = p, p[2] = e(t, n, c)) return !0
                                        } return !1
                        }
                    }

                    function Se(e) {
                        return e.length > 1 ? function(t, n, o) {
                            for (var r = e.length; r--;)
                                if (!e[r](t, n, o)) return !1;
                            return !0
                        } : e[0]
                    }

                    function we(e, t, n, o, r) {
                        for (var i, s = [], a = 0, c = e.length, u = null != t; a < c; a++)(i = e[a]) && (n && !n(i, o, r) || (s.push(i), u && t.push(a)));
                        return s
                    }

                    function xe(e, t, n, o, r, i) {
                        return o && !o[w] && (o = xe(o)), r && !r[w] && (r = xe(r, i)), ae(function(i, s, a, c) {
                            var u, l, d, p = [],
                                h = [],
                                f = s.length,
                                g = i || function(e, t, n) {
                                    for (var o = 0, r = t.length; o < r; o++) ie(e, t[o], n);
                                    return n
                                }(t || "*", a.nodeType ? [a] : a, []),
                                y = !e || !i && t ? g : we(g, p, e, a, c),
                                m = n ? r || (i ? e : f || o) ? [] : s : y;
                            if (n && n(y, m, a, c), o)
                                for (u = we(m, h), o(u, [], a, c), l = u.length; l--;)(d = u[l]) && (m[h[l]] = !(y[h[l]] = d));
                            if (i) {
                                if (r || e) {
                                    if (r) {
                                        for (u = [], l = m.length; l--;)(d = m[l]) && u.push(y[l] = d);
                                        r(null, m = [], u, c)
                                    }
                                    for (l = m.length; l--;)(d = m[l]) && (u = r ? R(i, d) : p[l]) > -1 && (i[u] = !(s[u] = d))
                                }
                            } else m = we(m === s ? m.splice(f, m.length) : m), r ? r(null, s, m, c) : O.apply(s, m)
                        })
                    }

                    function be(e) {
                        for (var t, n, r, i = e.length, s = o.relative[e[0].type], a = s || o.relative[" "], c = s ? 1 : 0, l = ve(function(e) {
                                return e === t
                            }, a, !0), d = ve(function(e) {
                                return R(t, e) > -1
                            }, a, !0), p = [function(e, n, o) {
                                var r = !s && (o || n !== u) || ((t = n).nodeType ? l(e, n, o) : d(e, n, o));
                                return t = null, r
                            }]; c < i; c++)
                            if (n = o.relative[e[c].type]) p = [ve(Se(p), n)];
                            else {
                                if ((n = o.filter[e[c].type].apply(null, e[c].matches))[w]) {
                                    for (r = ++c; r < i && !o.relative[e[r].type]; r++);
                                    return xe(c > 1 && Se(p), c > 1 && me(e.slice(0, c - 1).concat({
                                        value: " " === e[c - 2].type ? "*" : ""
                                    })).replace(D, "$1"), n, c < r && be(e.slice(c, r)), r < i && be(e = e.slice(r)), r < i && me(e))
                                }
                                p.push(n)
                            }
                        return Se(p)
                    }
                    return ye.prototype = o.filters = o.pseudos, o.setFilters = new ye, s = ie.tokenize = function(e, t) {
                        var n, r, i, s, a, c, u, l = C[e + " "];
                        if (l) return t ? 0 : l.slice(0);
                        for (a = e, c = [], u = o.preFilter; a;) {
                            for (s in n && !(r = q.exec(a)) || (r && (a = a.slice(r[0].length) || a), c.push(i = [])), n = !1, (r = F.exec(a)) && (n = r.shift(), i.push({
                                    value: n,
                                    type: r[0].replace(D, " ")
                                }), a = a.slice(n.length)), o.filter) !(r = z[s].exec(a)) || u[s] && !(r = u[s](r)) || (n = r.shift(), i.push({
                                value: n,
                                type: s,
                                matches: r
                            }), a = a.slice(n.length));
                            if (!n) break
                        }
                        return t ? a.length : a ? ie.error(e) : C(e, c).slice(0)
                    }, a = ie.compile = function(e, t) {
                        var n, r = [],
                            i = [],
                            a = A[e + " "];
                        if (!a) {
                            for (t || (t = s(e)), n = t.length; n--;)(a = be(t[n]))[w] ? r.push(a) : i.push(a);
                            (a = A(e, function(e, t) {
                                var n = t.length > 0,
                                    r = e.length > 0,
                                    i = function(i, s, a, c, l) {
                                        var d, f, y, m = 0,
                                            v = "0",
                                            S = i && [],
                                            w = [],
                                            x = u,
                                            _ = i || r && o.find.TAG("*", l),
                                            P = b += null == x ? 1 : Math.random() || .1,
                                            C = _.length;
                                        for (l && (u = s === h || s || l); v !== C && null != (d = _[v]); v++) {
                                            if (r && d) {
                                                for (f = 0, s || d.ownerDocument === h || (p(d), a = !g); y = e[f++];)
                                                    if (y(d, s || h, a)) {
                                                        c.push(d);
                                                        break
                                                    }
                                                l && (b = P)
                                            }
                                            n && ((d = !y && d) && m--, i && S.push(d))
                                        }
                                        if (m += v, n && v !== m) {
                                            for (f = 0; y = t[f++];) y(S, w, s, a);
                                            if (i) {
                                                if (m > 0)
                                                    for (; v--;) S[v] || w[v] || (w[v] = E.call(c));
                                                w = we(w)
                                            }
                                            O.apply(c, w), l && !i && w.length > 0 && m + t.length > 1 && ie.uniqueSort(c)
                                        }
                                        return l && (b = P, u = x), S
                                    };
                                return n ? ae(i) : i
                            }(i, r))).selector = e
                        }
                        return a
                    }, c = ie.select = function(e, t, n, r) {
                        var i, c, u, l, d, p = "function" == typeof e && e,
                            h = !r && s(e = p.selector || e);
                        if (n = n || [], 1 === h.length) {
                            if ((c = h[0] = h[0].slice(0)).length > 2 && "ID" === (u = c[0]).type && 9 === t.nodeType && g && o.relative[c[1].type]) {
                                if (!(t = (o.find.ID(u.matches[0].replace(J, ee), t) || [])[0])) return n;
                                p && (t = t.parentNode), e = e.slice(c.shift().value.length)
                            }
                            for (i = z.needsContext.test(e) ? 0 : c.length; i-- && (u = c[i], !o.relative[l = u.type]);)
                                if ((d = o.find[l]) && (r = d(u.matches[0].replace(J, ee), K.test(c[0].type) && ge(t.parentNode) || t))) {
                                    if (c.splice(i, 1), !(e = r.length && me(c))) return O.apply(n, r), n;
                                    break
                                }
                        }
                        return (p || a(e, h))(r, t, !g, n, !t || K.test(e) && ge(t.parentNode) || t), n
                    }, n.sortStable = w.split("").sort(V).join("") === w, n.detectDuplicates = !!d, p(), n.sortDetached = ce(function(e) {
                        return 1 & e.compareDocumentPosition(h.createElement("fieldset"))
                    }), ce(function(e) {
                        return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                    }) || ue("type|href|height|width", function(e, t, n) {
                        if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                    }), n.attributes && ce(function(e) {
                        return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                    }) || ue("value", function(e, t, n) {
                        if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
                    }), ce(function(e) {
                        return null == e.getAttribute("disabled")
                    }) || ue(k, function(e, t, n) {
                        var o;
                        if (!n) return !0 === e[t] ? t.toLowerCase() : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
                    }), ie
                }(n);
            _.find = A, _.expr = A.selectors, _.expr[":"] = _.expr.pseudos, _.uniqueSort = _.unique = A.uniqueSort, _.text = A.getText, _.isXMLDoc = A.isXML, _.contains = A.contains, _.escapeSelector = A.escape;
            var V = function(e, t, n) {
                    for (var o = [], r = void 0 !== n;
                        (e = e[t]) && 9 !== e.nodeType;)
                        if (1 === e.nodeType) {
                            if (r && _(e).is(n)) break;
                            o.push(e)
                        }
                    return o
                },
                T = function(e, t) {
                    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                    return n
                },
                G = _.expr.match.needsContext;

            function E(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            }
            var L = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

            function O(e, t, n) {
                return v(t) ? _.grep(e, function(e, o) {
                    return !!t.call(e, o, e) !== n
                }) : t.nodeType ? _.grep(e, function(e) {
                    return e === t !== n
                }) : "string" != typeof t ? _.grep(e, function(e) {
                    return d.call(t, e) > -1 !== n
                }) : _.filter(t, e, n)
            }
            _.filter = function(e, t, n) {
                var o = t[0];
                return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === o.nodeType ? _.find.matchesSelector(o, e) ? [o] : [] : _.find.matches(e, _.grep(t, function(e) {
                    return 1 === e.nodeType
                }))
            }, _.fn.extend({
                find: function(e) {
                    var t, n, o = this.length,
                        r = this;
                    if ("string" != typeof e) return this.pushStack(_(e).filter(function() {
                        for (t = 0; t < o; t++)
                            if (_.contains(r[t], this)) return !0
                    }));
                    for (n = this.pushStack([]), t = 0; t < o; t++) _.find(e, r[t], n);
                    return o > 1 ? _.uniqueSort(n) : n
                },
                filter: function(e) {
                    return this.pushStack(O(this, e || [], !1))
                },
                not: function(e) {
                    return this.pushStack(O(this, e || [], !0))
                },
                is: function(e) {
                    return !!O(this, "string" == typeof e && G.test(e) ? _(e) : e || [], !1).length
                }
            });
            var I, R = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            (_.fn.init = function(e, t, n) {
                var o, r;
                if (!e) return this;
                if (n = n || I, "string" == typeof e) {
                    if (!(o = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : R.exec(e)) || !o[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    if (o[1]) {
                        if (t = t instanceof _ ? t[0] : t, _.merge(this, _.parseHTML(o[1], t && t.nodeType ? t.ownerDocument || t : s, !0)), L.test(o[1]) && _.isPlainObject(t))
                            for (o in t) v(this[o]) ? this[o](t[o]) : this.attr(o, t[o]);
                        return this
                    }
                    return (r = s.getElementById(o[2])) && (this[0] = r, this.length = 1), this
                }
                return e.nodeType ? (this[0] = e, this.length = 1, this) : v(e) ? void 0 !== n.ready ? n.ready(e) : e(_) : _.makeArray(e, this)
            }).prototype = _.fn, I = _(s);
            var k = /^(?:parents|prev(?:Until|All))/,
                M = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };

            function j(e, t) {
                for (;
                    (e = e[t]) && 1 !== e.nodeType;);
                return e
            }
            _.fn.extend({
                has: function(e) {
                    var t = _(e, this),
                        n = t.length;
                    return this.filter(function() {
                        for (var e = 0; e < n; e++)
                            if (_.contains(this, t[e])) return !0
                    })
                },
                closest: function(e, t) {
                    var n, o = 0,
                        r = this.length,
                        i = [],
                        s = "string" != typeof e && _(e);
                    if (!G.test(e))
                        for (; o < r; o++)
                            for (n = this[o]; n && n !== t; n = n.parentNode)
                                if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && _.find.matchesSelector(n, e))) {
                                    i.push(n);
                                    break
                                }
                    return this.pushStack(i.length > 1 ? _.uniqueSort(i) : i)
                },
                index: function(e) {
                    return e ? "string" == typeof e ? d.call(_(e), this[0]) : d.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function(e, t) {
                    return this.pushStack(_.uniqueSort(_.merge(this.get(), _(e, t))))
                },
                addBack: function(e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                }
            }), _.each({
                parent: function(e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null
                },
                parents: function(e) {
                    return V(e, "parentNode")
                },
                parentsUntil: function(e, t, n) {
                    return V(e, "parentNode", n)
                },
                next: function(e) {
                    return j(e, "nextSibling")
                },
                prev: function(e) {
                    return j(e, "previousSibling")
                },
                nextAll: function(e) {
                    return V(e, "nextSibling")
                },
                prevAll: function(e) {
                    return V(e, "previousSibling")
                },
                nextUntil: function(e, t, n) {
                    return V(e, "nextSibling", n)
                },
                prevUntil: function(e, t, n) {
                    return V(e, "previousSibling", n)
                },
                siblings: function(e) {
                    return T((e.parentNode || {}).firstChild, e)
                },
                children: function(e) {
                    return T(e.firstChild)
                },
                contents: function(e) {
                    return E(e, "iframe") ? e.contentDocument : (E(e, "template") && (e = e.content || e), _.merge([], e.childNodes))
                }
            }, function(e, t) {
                _.fn[e] = function(n, o) {
                    var r = _.map(this, t, n);
                    return "Until" !== e.slice(-5) && (o = n), o && "string" == typeof o && (r = _.filter(o, r)), this.length > 1 && (M[e] || _.uniqueSort(r), k.test(e) && r.reverse()), this.pushStack(r)
                }
            });
            var B = /[^\x20\t\r\n\f]+/g;

            function N(e) {
                return e
            }

            function H(e) {
                throw e
            }

            function D(e, t, n, o) {
                var r;
                try {
                    e && v(r = e.promise) ? r.call(e).done(t).fail(n) : e && v(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(o))
                } catch (e) {
                    n.apply(void 0, [e])
                }
            }
            _.Callbacks = function(e) {
                e = "string" == typeof e ? function(e) {
                    var t = {};
                    return _.each(e.match(B) || [], function(e, n) {
                        t[n] = !0
                    }), t
                }(e) : _.extend({}, e);
                var t, n, o, r, i = [],
                    s = [],
                    a = -1,
                    c = function() {
                        for (r = r || e.once, o = t = !0; s.length; a = -1)
                            for (n = s.shift(); ++a < i.length;) !1 === i[a].apply(n[0], n[1]) && e.stopOnFalse && (a = i.length, n = !1);
                        e.memory || (n = !1), t = !1, r && (i = n ? [] : "")
                    },
                    u = {
                        add: function() {
                            return i && (n && !t && (a = i.length - 1, s.push(n)), function t(n) {
                                _.each(n, function(n, o) {
                                    v(o) ? e.unique && u.has(o) || i.push(o) : o && o.length && "string" !== b(o) && t(o)
                                })
                            }(arguments), n && !t && c()), this
                        },
                        remove: function() {
                            return _.each(arguments, function(e, t) {
                                for (var n;
                                    (n = _.inArray(t, i, n)) > -1;) i.splice(n, 1), n <= a && a--
                            }), this
                        },
                        has: function(e) {
                            return e ? _.inArray(e, i) > -1 : i.length > 0
                        },
                        empty: function() {
                            return i && (i = []), this
                        },
                        disable: function() {
                            return r = s = [], i = n = "", this
                        },
                        disabled: function() {
                            return !i
                        },
                        lock: function() {
                            return r = s = [], n || t || (i = n = ""), this
                        },
                        locked: function() {
                            return !!r
                        },
                        fireWith: function(e, n) {
                            return r || (n = [e, (n = n || []).slice ? n.slice() : n], s.push(n), t || c()), this
                        },
                        fire: function() {
                            return u.fireWith(this, arguments), this
                        },
                        fired: function() {
                            return !!o
                        }
                    };
                return u
            }, _.extend({
                Deferred: function(e) {
                    var t = [
                            ["notify", "progress", _.Callbacks("memory"), _.Callbacks("memory"), 2],
                            ["resolve", "done", _.Callbacks("once memory"), _.Callbacks("once memory"), 0, "resolved"],
                            ["reject", "fail", _.Callbacks("once memory"), _.Callbacks("once memory"), 1, "rejected"]
                        ],
                        o = "pending",
                        r = {
                            state: function() {
                                return o
                            },
                            always: function() {
                                return i.done(arguments).fail(arguments), this
                            },
                            catch: function(e) {
                                return r.then(null, e)
                            },
                            pipe: function() {
                                var e = arguments;
                                return _.Deferred(function(n) {
                                    _.each(t, function(t, o) {
                                        var r = v(e[o[4]]) && e[o[4]];
                                        i[o[1]](function() {
                                            var e = r && r.apply(this, arguments);
                                            e && v(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this, r ? [e] : arguments)
                                        })
                                    }), e = null
                                }).promise()
                            },
                            then: function(e, o, r) {
                                var i = 0;

                                function s(e, t, o, r) {
                                    return function() {
                                        var a = this,
                                            c = arguments,
                                            u = function() {
                                                var n, u;
                                                if (!(e < i)) {
                                                    if ((n = o.apply(a, c)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                                    u = n && ("object" == typeof n || "function" == typeof n) && n.then, v(u) ? r ? u.call(n, s(i, t, N, r), s(i, t, H, r)) : (i++, u.call(n, s(i, t, N, r), s(i, t, H, r), s(i, t, N, t.notifyWith))) : (o !== N && (a = void 0, c = [n]), (r || t.resolveWith)(a, c))
                                                }
                                            },
                                            l = r ? u : function() {
                                                try {
                                                    u()
                                                } catch (n) {
                                                    _.Deferred.exceptionHook && _.Deferred.exceptionHook(n, l.stackTrace), e + 1 >= i && (o !== H && (a = void 0, c = [n]), t.rejectWith(a, c))
                                                }
                                            };
                                        e ? l() : (_.Deferred.getStackHook && (l.stackTrace = _.Deferred.getStackHook()), n.setTimeout(l))
                                    }
                                }
                                return _.Deferred(function(n) {
                                    t[0][3].add(s(0, n, v(r) ? r : N, n.notifyWith)), t[1][3].add(s(0, n, v(e) ? e : N)), t[2][3].add(s(0, n, v(o) ? o : H))
                                }).promise()
                            },
                            promise: function(e) {
                                return null != e ? _.extend(e, r) : r
                            }
                        },
                        i = {};
                    return _.each(t, function(e, n) {
                        var s = n[2],
                            a = n[5];
                        r[n[1]] = s.add, a && s.add(function() {
                            o = a
                        }, t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), s.add(n[3].fire), i[n[0]] = function() {
                            return i[n[0] + "With"](this === i ? void 0 : this, arguments), this
                        }, i[n[0] + "With"] = s.fireWith
                    }), r.promise(i), e && e.call(i, i), i
                },
                when: function(e) {
                    var t = arguments.length,
                        n = t,
                        o = Array(n),
                        r = c.call(arguments),
                        i = _.Deferred(),
                        s = function(e) {
                            return function(n) {
                                o[e] = this, r[e] = arguments.length > 1 ? c.call(arguments) : n, --t || i.resolveWith(o, r)
                            }
                        };
                    if (t <= 1 && (D(e, i.done(s(n)).resolve, i.reject, !t), "pending" === i.state() || v(r[n] && r[n].then))) return i.then();
                    for (; n--;) D(r[n], s(n), i.reject);
                    return i.promise()
                }
            });
            var q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            _.Deferred.exceptionHook = function(e, t) {
                n.console && n.console.warn && e && q.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
            }, _.readyException = function(e) {
                n.setTimeout(function() {
                    throw e
                })
            };
            var F = _.Deferred();

            function U() {
                s.removeEventListener("DOMContentLoaded", U), n.removeEventListener("load", U), _.ready()
            }
            _.fn.ready = function(e) {
                return F.then(e).catch(function(e) {
                    _.readyException(e)
                }), this
            }, _.extend({
                isReady: !1,
                readyWait: 1,
                ready: function(e) {
                    (!0 === e ? --_.readyWait : _.isReady) || (_.isReady = !0, !0 !== e && --_.readyWait > 0 || F.resolveWith(s, [_]))
                }
            }), _.ready.then = F.then, "complete" === s.readyState || "loading" !== s.readyState && !s.documentElement.doScroll ? n.setTimeout(_.ready) : (s.addEventListener("DOMContentLoaded", U), n.addEventListener("load", U));
            var W = function(e, t, n, o, r, i, s) {
                    var a = 0,
                        c = e.length,
                        u = null == n;
                    if ("object" === b(n))
                        for (a in r = !0, n) W(e, t, a, n[a], !0, i, s);
                    else if (void 0 !== o && (r = !0, v(o) || (s = !0), u && (s ? (t.call(e, o), t = null) : (u = t, t = function(e, t, n) {
                            return u.call(_(e), n)
                        })), t))
                        for (; a < c; a++) t(e[a], n, s ? o : o.call(e[a], a, t(e[a], n)));
                    return r ? e : u ? t.call(e) : c ? t(e[0], n) : i
                },
                Q = /^-ms-/,
                z = /-([a-z])/g;

            function $(e, t) {
                return t.toUpperCase()
            }

            function X(e) {
                return e.replace(Q, "ms-").replace(z, $)
            }
            var Y = function(e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
            };

            function Z() {
                this.expando = _.expando + Z.uid++
            }
            Z.uid = 1, Z.prototype = {
                cache: function(e) {
                    var t = e[this.expando];
                    return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0
                    }))), t
                },
                set: function(e, t, n) {
                    var o, r = this.cache(e);
                    if ("string" == typeof t) r[X(t)] = n;
                    else
                        for (o in t) r[X(o)] = t[o];
                    return r
                },
                get: function(e, t) {
                    return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
                },
                access: function(e, t, n) {
                    return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
                },
                remove: function(e, t) {
                    var n, o = e[this.expando];
                    if (void 0 !== o) {
                        if (void 0 !== t) {
                            n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in o ? [t] : t.match(B) || []).length;
                            for (; n--;) delete o[t[n]]
                        }(void 0 === t || _.isEmptyObject(o)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                    }
                },
                hasData: function(e) {
                    var t = e[this.expando];
                    return void 0 !== t && !_.isEmptyObject(t)
                }
            };
            var K = new Z,
                J = new Z,
                ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                te = /[A-Z]/g;

            function ne(e, t, n) {
                var o;
                if (void 0 === n && 1 === e.nodeType)
                    if (o = "data-" + t.replace(te, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(o))) {
                        try {
                            n = function(e) {
                                return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : ee.test(e) ? JSON.parse(e) : e)
                            }(n)
                        } catch (e) {}
                        J.set(e, t, n)
                    } else n = void 0;
                return n
            }
            _.extend({
                hasData: function(e) {
                    return J.hasData(e) || K.hasData(e)
                },
                data: function(e, t, n) {
                    return J.access(e, t, n)
                },
                removeData: function(e, t) {
                    J.remove(e, t)
                },
                _data: function(e, t, n) {
                    return K.access(e, t, n)
                },
                _removeData: function(e, t) {
                    K.remove(e, t)
                }
            }), _.fn.extend({
                data: function(e, t) {
                    var n, o, r, i = this[0],
                        s = i && i.attributes;
                    if (void 0 === e) {
                        if (this.length && (r = J.get(i), 1 === i.nodeType && !K.get(i, "hasDataAttrs"))) {
                            for (n = s.length; n--;) s[n] && 0 === (o = s[n].name).indexOf("data-") && (o = X(o.slice(5)), ne(i, o, r[o]));
                            K.set(i, "hasDataAttrs", !0)
                        }
                        return r
                    }
                    return "object" == typeof e ? this.each(function() {
                        J.set(this, e)
                    }) : W(this, function(t) {
                        var n;
                        if (i && void 0 === t) return void 0 !== (n = J.get(i, e)) ? n : void 0 !== (n = ne(i, e)) ? n : void 0;
                        this.each(function() {
                            J.set(this, e, t)
                        })
                    }, null, t, arguments.length > 1, null, !0)
                },
                removeData: function(e) {
                    return this.each(function() {
                        J.remove(this, e)
                    })
                }
            }), _.extend({
                queue: function(e, t, n) {
                    var o;
                    if (e) return t = (t || "fx") + "queue", o = K.get(e, t), n && (!o || Array.isArray(n) ? o = K.access(e, t, _.makeArray(n)) : o.push(n)), o || []
                },
                dequeue: function(e, t) {
                    t = t || "fx";
                    var n = _.queue(e, t),
                        o = n.length,
                        r = n.shift(),
                        i = _._queueHooks(e, t);
                    "inprogress" === r && (r = n.shift(), o--), r && ("fx" === t && n.unshift("inprogress"), delete i.stop, r.call(e, function() {
                        _.dequeue(e, t)
                    }, i)), !o && i && i.empty.fire()
                },
                _queueHooks: function(e, t) {
                    var n = t + "queueHooks";
                    return K.get(e, n) || K.access(e, n, {
                        empty: _.Callbacks("once memory").add(function() {
                            K.remove(e, [t + "queue", n])
                        })
                    })
                }
            }), _.fn.extend({
                queue: function(e, t) {
                    var n = 2;
                    return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? _.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                        var n = _.queue(this, e, t);
                        _._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && _.dequeue(this, e)
                    })
                },
                dequeue: function(e) {
                    return this.each(function() {
                        _.dequeue(this, e)
                    })
                },
                clearQueue: function(e) {
                    return this.queue(e || "fx", [])
                },
                promise: function(e, t) {
                    var n, o = 1,
                        r = _.Deferred(),
                        i = this,
                        s = this.length,
                        a = function() {
                            --o || r.resolveWith(i, [i])
                        };
                    for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = K.get(i[s], e + "queueHooks")) && n.empty && (o++, n.empty.add(a));
                    return a(), r.promise(t)
                }
            });
            var oe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                re = new RegExp("^(?:([+-])=|)(" + oe + ")([a-z%]*)$", "i"),
                ie = ["Top", "Right", "Bottom", "Left"],
                se = function(e, t) {
                    return "none" === (e = t || e).style.display || "" === e.style.display && _.contains(e.ownerDocument, e) && "none" === _.css(e, "display")
                },
                ae = function(e, t, n, o) {
                    var r, i, s = {};
                    for (i in t) s[i] = e.style[i], e.style[i] = t[i];
                    for (i in r = n.apply(e, o || []), t) e.style[i] = s[i];
                    return r
                };

            function ce(e, t, n, o) {
                var r, i, s = 20,
                    a = o ? function() {
                        return o.cur()
                    } : function() {
                        return _.css(e, t, "")
                    },
                    c = a(),
                    u = n && n[3] || (_.cssNumber[t] ? "" : "px"),
                    l = (_.cssNumber[t] || "px" !== u && +c) && re.exec(_.css(e, t));
                if (l && l[3] !== u) {
                    for (c /= 2, u = u || l[3], l = +c || 1; s--;) _.style(e, t, l + u), (1 - i) * (1 - (i = a() / c || .5)) <= 0 && (s = 0), l /= i;
                    l *= 2, _.style(e, t, l + u), n = n || []
                }
                return n && (l = +l || +c || 0, r = n[1] ? l + (n[1] + 1) * n[2] : +n[2], o && (o.unit = u, o.start = l, o.end = r)), r
            }
            var ue = {};

            function le(e) {
                var t, n = e.ownerDocument,
                    o = e.nodeName,
                    r = ue[o];
                return r || (t = n.body.appendChild(n.createElement(o)), r = _.css(t, "display"), t.parentNode.removeChild(t), "none" === r && (r = "block"), ue[o] = r, r)
            }

            function de(e, t) {
                for (var n, o, r = [], i = 0, s = e.length; i < s; i++)(o = e[i]).style && (n = o.style.display, t ? ("none" === n && (r[i] = K.get(o, "display") || null, r[i] || (o.style.display = "")), "" === o.style.display && se(o) && (r[i] = le(o))) : "none" !== n && (r[i] = "none", K.set(o, "display", n)));
                for (i = 0; i < s; i++) null != r[i] && (e[i].style.display = r[i]);
                return e
            }
            _.fn.extend({
                show: function() {
                    return de(this, !0)
                },
                hide: function() {
                    return de(this)
                },
                toggle: function(e) {
                    return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                        se(this) ? _(this).show() : _(this).hide()
                    })
                }
            });
            var pe = /^(?:checkbox|radio)$/i,
                he = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
                fe = /^$|^module$|\/(?:java|ecma)script/i,
                ge = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""]
                };

            function ye(e, t) {
                var n;
                return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && E(e, t) ? _.merge([e], n) : n
            }

            function me(e, t) {
                for (var n = 0, o = e.length; n < o; n++) K.set(e[n], "globalEval", !t || K.get(t[n], "globalEval"))
            }
            ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;
            var ve = /<|&#?\w+;/;

            function Se(e, t, n, o, r) {
                for (var i, s, a, c, u, l, d = t.createDocumentFragment(), p = [], h = 0, f = e.length; h < f; h++)
                    if ((i = e[h]) || 0 === i)
                        if ("object" === b(i)) _.merge(p, i.nodeType ? [i] : i);
                        else if (ve.test(i)) {
                    for (s = s || d.appendChild(t.createElement("div")), a = (he.exec(i) || ["", ""])[1].toLowerCase(), c = ge[a] || ge._default, s.innerHTML = c[1] + _.htmlPrefilter(i) + c[2], l = c[0]; l--;) s = s.lastChild;
                    _.merge(p, s.childNodes), (s = d.firstChild).textContent = ""
                } else p.push(t.createTextNode(i));
                for (d.textContent = "", h = 0; i = p[h++];)
                    if (o && _.inArray(i, o) > -1) r && r.push(i);
                    else if (u = _.contains(i.ownerDocument, i), s = ye(d.appendChild(i), "script"), u && me(s), n)
                    for (l = 0; i = s[l++];) fe.test(i.type || "") && n.push(i);
                return d
            }! function() {
                var e = s.createDocumentFragment().appendChild(s.createElement("div")),
                    t = s.createElement("input");
                t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), m.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", m.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
            }();
            var we = s.documentElement,
                xe = /^key/,
                be = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                _e = /^([^.]*)(?:\.(.+)|)/;

            function Pe() {
                return !0
            }

            function Ce() {
                return !1
            }

            function Ae() {
                try {
                    return s.activeElement
                } catch (e) {}
            }

            function Ve(e, t, n, o, r, i) {
                var s, a;
                if ("object" == typeof t) {
                    for (a in "string" != typeof n && (o = o || n, n = void 0), t) Ve(e, a, n, o, t[a], i);
                    return e
                }
                if (null == o && null == r ? (r = n, o = n = void 0) : null == r && ("string" == typeof n ? (r = o, o = void 0) : (r = o, o = n, n = void 0)), !1 === r) r = Ce;
                else if (!r) return e;
                return 1 === i && (s = r, (r = function(e) {
                    return _().off(e), s.apply(this, arguments)
                }).guid = s.guid || (s.guid = _.guid++)), e.each(function() {
                    _.event.add(this, t, r, o, n)
                })
            }
            _.event = {
                global: {},
                add: function(e, t, n, o, r) {
                    var i, s, a, c, u, l, d, p, h, f, g, y = K.get(e);
                    if (y)
                        for (n.handler && (n = (i = n).handler, r = i.selector), r && _.find.matchesSelector(we, r), n.guid || (n.guid = _.guid++), (c = y.events) || (c = y.events = {}), (s = y.handle) || (s = y.handle = function(t) {
                                return void 0 !== _ && _.event.triggered !== t.type ? _.event.dispatch.apply(e, arguments) : void 0
                            }), u = (t = (t || "").match(B) || [""]).length; u--;) h = g = (a = _e.exec(t[u]) || [])[1], f = (a[2] || "").split(".").sort(), h && (d = _.event.special[h] || {}, h = (r ? d.delegateType : d.bindType) || h, d = _.event.special[h] || {}, l = _.extend({
                            type: h,
                            origType: g,
                            data: o,
                            handler: n,
                            guid: n.guid,
                            selector: r,
                            needsContext: r && _.expr.match.needsContext.test(r),
                            namespace: f.join(".")
                        }, i), (p = c[h]) || ((p = c[h] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, o, f, s) || e.addEventListener && e.addEventListener(h, s)), d.add && (d.add.call(e, l), l.handler.guid || (l.handler.guid = n.guid)), r ? p.splice(p.delegateCount++, 0, l) : p.push(l), _.event.global[h] = !0)
                },
                remove: function(e, t, n, o, r) {
                    var i, s, a, c, u, l, d, p, h, f, g, y = K.hasData(e) && K.get(e);
                    if (y && (c = y.events)) {
                        for (u = (t = (t || "").match(B) || [""]).length; u--;)
                            if (h = g = (a = _e.exec(t[u]) || [])[1], f = (a[2] || "").split(".").sort(), h) {
                                for (d = _.event.special[h] || {}, p = c[h = (o ? d.delegateType : d.bindType) || h] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = i = p.length; i--;) l = p[i], !r && g !== l.origType || n && n.guid !== l.guid || a && !a.test(l.namespace) || o && o !== l.selector && ("**" !== o || !l.selector) || (p.splice(i, 1), l.selector && p.delegateCount--, d.remove && d.remove.call(e, l));
                                s && !p.length && (d.teardown && !1 !== d.teardown.call(e, f, y.handle) || _.removeEvent(e, h, y.handle), delete c[h])
                            } else
                                for (h in c) _.event.remove(e, h + t[u], n, o, !0);
                        _.isEmptyObject(c) && K.remove(e, "handle events")
                    }
                },
                dispatch: function(e) {
                    var t, n, o, r, i, s, a = _.event.fix(e),
                        c = new Array(arguments.length),
                        u = (K.get(this, "events") || {})[a.type] || [],
                        l = _.event.special[a.type] || {};
                    for (c[0] = a, t = 1; t < arguments.length; t++) c[t] = arguments[t];
                    if (a.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, a)) {
                        for (s = _.event.handlers.call(this, a, u), t = 0;
                            (r = s[t++]) && !a.isPropagationStopped();)
                            for (a.currentTarget = r.elem, n = 0;
                                (i = r.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(i.namespace) || (a.handleObj = i, a.data = i.data, void 0 !== (o = ((_.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, c)) && !1 === (a.result = o) && (a.preventDefault(), a.stopPropagation()));
                        return l.postDispatch && l.postDispatch.call(this, a), a.result
                    }
                },
                handlers: function(e, t) {
                    var n, o, r, i, s, a = [],
                        c = t.delegateCount,
                        u = e.target;
                    if (c && u.nodeType && !("click" === e.type && e.button >= 1))
                        for (; u !== this; u = u.parentNode || this)
                            if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                                for (i = [], s = {}, n = 0; n < c; n++) void 0 === s[r = (o = t[n]).selector + " "] && (s[r] = o.needsContext ? _(r, this).index(u) > -1 : _.find(r, this, null, [u]).length), s[r] && i.push(o);
                                i.length && a.push({
                                    elem: u,
                                    handlers: i
                                })
                            }
                    return u = this, c < t.length && a.push({
                        elem: u,
                        handlers: t.slice(c)
                    }), a
                },
                addProp: function(e, t) {
                    Object.defineProperty(_.Event.prototype, e, {
                        enumerable: !0,
                        configurable: !0,
                        get: v(t) ? function() {
                            if (this.originalEvent) return t(this.originalEvent)
                        } : function() {
                            if (this.originalEvent) return this.originalEvent[e]
                        },
                        set: function(t) {
                            Object.defineProperty(this, e, {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: t
                            })
                        }
                    })
                },
                fix: function(e) {
                    return e[_.expando] ? e : new _.Event(e)
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    focus: {
                        trigger: function() {
                            if (this !== Ae() && this.focus) return this.focus(), !1
                        },
                        delegateType: "focusin"
                    },
                    blur: {
                        trigger: function() {
                            if (this === Ae() && this.blur) return this.blur(), !1
                        },
                        delegateType: "focusout"
                    },
                    click: {
                        trigger: function() {
                            if ("checkbox" === this.type && this.click && E(this, "input")) return this.click(), !1
                        },
                        _default: function(e) {
                            return E(e.target, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function(e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                        }
                    }
                }
            }, _.removeEvent = function(e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n)
            }, _.Event = function(e, t) {
                if (!(this instanceof _.Event)) return new _.Event(e, t);
                e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Pe : Ce, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && _.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[_.expando] = !0
            }, _.Event.prototype = {
                constructor: _.Event,
                isDefaultPrevented: Ce,
                isPropagationStopped: Ce,
                isImmediatePropagationStopped: Ce,
                isSimulated: !1,
                preventDefault: function() {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = Pe, e && !this.isSimulated && e.preventDefault()
                },
                stopPropagation: function() {
                    var e = this.originalEvent;
                    this.isPropagationStopped = Pe, e && !this.isSimulated && e.stopPropagation()
                },
                stopImmediatePropagation: function() {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = Pe, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
                }
            }, _.each({
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
                which: function(e) {
                    var t = e.button;
                    return null == e.which && xe.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && be.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
                }
            }, _.event.addProp), _.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function(e, t) {
                _.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function(e) {
                        var n, o = e.relatedTarget,
                            r = e.handleObj;
                        return o && (o === this || _.contains(this, o)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
                    }
                }
            }), _.fn.extend({
                on: function(e, t, n, o) {
                    return Ve(this, e, t, n, o)
                },
                one: function(e, t, n, o) {
                    return Ve(this, e, t, n, o, 1)
                },
                off: function(e, t, n) {
                    var o, r;
                    if (e && e.preventDefault && e.handleObj) return o = e.handleObj, _(e.delegateTarget).off(o.namespace ? o.origType + "." + o.namespace : o.origType, o.selector, o.handler), this;
                    if ("object" == typeof e) {
                        for (r in e) this.off(r, t, e[r]);
                        return this
                    }
                    return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ce), this.each(function() {
                        _.event.remove(this, e, n, t)
                    })
                }
            });
            var Te = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
                Ge = /<script|<style|<link/i,
                Ee = /checked\s*(?:[^=]|=\s*.checked.)/i,
                Le = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

            function Oe(e, t) {
                return E(e, "table") && E(11 !== t.nodeType ? t : t.firstChild, "tr") && _(e).children("tbody")[0] || e
            }

            function Ie(e) {
                return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
            }

            function Re(e) {
                return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
            }

            function ke(e, t) {
                var n, o, r, i, s, a, c, u;
                if (1 === t.nodeType) {
                    if (K.hasData(e) && (i = K.access(e), s = K.set(t, i), u = i.events))
                        for (r in delete s.handle, s.events = {}, u)
                            for (n = 0, o = u[r].length; n < o; n++) _.event.add(t, r, u[r][n]);
                    J.hasData(e) && (a = J.access(e), c = _.extend({}, a), J.set(t, c))
                }
            }

            function Me(e, t) {
                var n = t.nodeName.toLowerCase();
                "input" === n && pe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
            }

            function je(e, t, n, o) {
                t = u.apply([], t);
                var r, i, s, a, c, l, d = 0,
                    p = e.length,
                    h = p - 1,
                    f = t[0],
                    g = v(f);
                if (g || p > 1 && "string" == typeof f && !m.checkClone && Ee.test(f)) return e.each(function(r) {
                    var i = e.eq(r);
                    g && (t[0] = f.call(this, r, i.html())), je(i, t, n, o)
                });
                if (p && (i = (r = Se(t, e[0].ownerDocument, !1, e, o)).firstChild, 1 === r.childNodes.length && (r = i), i || o)) {
                    for (a = (s = _.map(ye(r, "script"), Ie)).length; d < p; d++) c = r, d !== h && (c = _.clone(c, !0, !0), a && _.merge(s, ye(c, "script"))), n.call(e[d], c, d);
                    if (a)
                        for (l = s[s.length - 1].ownerDocument, _.map(s, Re), d = 0; d < a; d++) c = s[d], fe.test(c.type || "") && !K.access(c, "globalEval") && _.contains(l, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? _._evalUrl && _._evalUrl(c.src) : x(c.textContent.replace(Le, ""), l, c))
                }
                return e
            }

            function Be(e, t, n) {
                for (var o, r = t ? _.filter(t, e) : e, i = 0; null != (o = r[i]); i++) n || 1 !== o.nodeType || _.cleanData(ye(o)), o.parentNode && (n && _.contains(o.ownerDocument, o) && me(ye(o, "script")), o.parentNode.removeChild(o));
                return e
            }
            _.extend({
                htmlPrefilter: function(e) {
                    return e.replace(Te, "<$1></$2>")
                },
                clone: function(e, t, n) {
                    var o, r, i, s, a = e.cloneNode(!0),
                        c = _.contains(e.ownerDocument, e);
                    if (!(m.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || _.isXMLDoc(e)))
                        for (s = ye(a), o = 0, r = (i = ye(e)).length; o < r; o++) Me(i[o], s[o]);
                    if (t)
                        if (n)
                            for (i = i || ye(e), s = s || ye(a), o = 0, r = i.length; o < r; o++) ke(i[o], s[o]);
                        else ke(e, a);
                    return (s = ye(a, "script")).length > 0 && me(s, !c && ye(e, "script")), a
                },
                cleanData: function(e) {
                    for (var t, n, o, r = _.event.special, i = 0; void 0 !== (n = e[i]); i++)
                        if (Y(n)) {
                            if (t = n[K.expando]) {
                                if (t.events)
                                    for (o in t.events) r[o] ? _.event.remove(n, o) : _.removeEvent(n, o, t.handle);
                                n[K.expando] = void 0
                            }
                            n[J.expando] && (n[J.expando] = void 0)
                        }
                }
            }), _.fn.extend({
                detach: function(e) {
                    return Be(this, e, !0)
                },
                remove: function(e) {
                    return Be(this, e)
                },
                text: function(e) {
                    return W(this, function(e) {
                        return void 0 === e ? _.text(this) : this.empty().each(function() {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                        })
                    }, null, e, arguments.length)
                },
                append: function() {
                    return je(this, arguments, function(e) {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Oe(this, e).appendChild(e)
                    })
                },
                prepend: function() {
                    return je(this, arguments, function(e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = Oe(this, e);
                            t.insertBefore(e, t.firstChild)
                        }
                    })
                },
                before: function() {
                    return je(this, arguments, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this)
                    })
                },
                after: function() {
                    return je(this, arguments, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                    })
                },
                empty: function() {
                    for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (_.cleanData(ye(e, !1)), e.textContent = "");
                    return this
                },
                clone: function(e, t) {
                    return e = null != e && e, t = null == t ? e : t, this.map(function() {
                        return _.clone(this, e, t)
                    })
                },
                html: function(e) {
                    return W(this, function(e) {
                        var t = this[0] || {},
                            n = 0,
                            o = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !Ge.test(e) && !ge[(he.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = _.htmlPrefilter(e);
                            try {
                                for (; n < o; n++) 1 === (t = this[n] || {}).nodeType && (_.cleanData(ye(t, !1)), t.innerHTML = e);
                                t = 0
                            } catch (e) {}
                        }
                        t && this.empty().append(e)
                    }, null, e, arguments.length)
                },
                replaceWith: function() {
                    var e = [];
                    return je(this, arguments, function(t) {
                        var n = this.parentNode;
                        _.inArray(this, e) < 0 && (_.cleanData(ye(this)), n && n.replaceChild(t, this))
                    }, e)
                }
            }), _.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function(e, t) {
                _.fn[e] = function(e) {
                    for (var n, o = [], r = _(e), i = r.length - 1, s = 0; s <= i; s++) n = s === i ? this : this.clone(!0), _(r[s])[t](n), l.apply(o, n.get());
                    return this.pushStack(o)
                }
            });
            var Ne = new RegExp("^(" + oe + ")(?!px)[a-z%]+$", "i"),
                He = function(e) {
                    var t = e.ownerDocument.defaultView;
                    return t && t.opener || (t = n), t.getComputedStyle(e)
                },
                De = new RegExp(ie.join("|"), "i");

            function qe(e, t, n) {
                var o, r, i, s, a = e.style;
                return (n = n || He(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || _.contains(e.ownerDocument, e) || (s = _.style(e, t)), !m.pixelBoxStyles() && Ne.test(s) && De.test(t) && (o = a.width, r = a.minWidth, i = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = o, a.minWidth = r, a.maxWidth = i)), void 0 !== s ? s + "" : s
            }

            function Fe(e, t) {
                return {
                    get: function() {
                        if (!e()) return (this.get = t).apply(this, arguments);
                        delete this.get
                    }
                }
            }! function() {
                function e() {
                    if (l) {
                        u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", we.appendChild(u).appendChild(l);
                        var e = n.getComputedStyle(l);
                        o = "1%" !== e.top, c = 12 === t(e.marginLeft), l.style.right = "60%", a = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 36 === l.offsetWidth || "absolute", we.removeChild(u), l = null
                    }
                }

                function t(e) {
                    return Math.round(parseFloat(e))
                }
                var o, r, i, a, c, u = s.createElement("div"),
                    l = s.createElement("div");
                l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", m.clearCloneStyle = "content-box" === l.style.backgroundClip, _.extend(m, {
                    boxSizingReliable: function() {
                        return e(), r
                    },
                    pixelBoxStyles: function() {
                        return e(), a
                    },
                    pixelPosition: function() {
                        return e(), o
                    },
                    reliableMarginLeft: function() {
                        return e(), c
                    },
                    scrollboxSize: function() {
                        return e(), i
                    }
                }))
            }();
            var Ue = /^(none|table(?!-c[ea]).+)/,
                We = /^--/,
                Qe = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                },
                ze = {
                    letterSpacing: "0",
                    fontWeight: "400"
                },
                $e = ["Webkit", "Moz", "ms"],
                Xe = s.createElement("div").style;

            function Ye(e) {
                var t = _.cssProps[e];
                return t || (t = _.cssProps[e] = function(e) {
                    if (e in Xe) return e;
                    for (var t = e[0].toUpperCase() + e.slice(1), n = $e.length; n--;)
                        if ((e = $e[n] + t) in Xe) return e
                }(e) || e), t
            }

            function Ze(e, t, n) {
                var o = re.exec(t);
                return o ? Math.max(0, o[2] - (n || 0)) + (o[3] || "px") : t
            }

            function Ke(e, t, n, o, r, i) {
                var s = "width" === t ? 1 : 0,
                    a = 0,
                    c = 0;
                if (n === (o ? "border" : "content")) return 0;
                for (; s < 4; s += 2) "margin" === n && (c += _.css(e, n + ie[s], !0, r)), o ? ("content" === n && (c -= _.css(e, "padding" + ie[s], !0, r)), "margin" !== n && (c -= _.css(e, "border" + ie[s] + "Width", !0, r))) : (c += _.css(e, "padding" + ie[s], !0, r), "padding" !== n ? c += _.css(e, "border" + ie[s] + "Width", !0, r) : a += _.css(e, "border" + ie[s] + "Width", !0, r));
                return !o && i >= 0 && (c += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - i - c - a - .5))), c
            }

            function Je(e, t, n) {
                var o = He(e),
                    r = qe(e, t, o),
                    i = "border-box" === _.css(e, "boxSizing", !1, o),
                    s = i;
                if (Ne.test(r)) {
                    if (!n) return r;
                    r = "auto"
                }
                return s = s && (m.boxSizingReliable() || r === e.style[t]), ("auto" === r || !parseFloat(r) && "inline" === _.css(e, "display", !1, o)) && (r = e["offset" + t[0].toUpperCase() + t.slice(1)], s = !0), (r = parseFloat(r) || 0) + Ke(e, t, n || (i ? "border" : "content"), s, o, r) + "px"
            }

            function et(e, t, n, o, r) {
                return new et.prototype.init(e, t, n, o, r)
            }
            _.extend({
                cssHooks: {
                    opacity: {
                        get: function(e, t) {
                            if (t) {
                                var n = qe(e, "opacity");
                                return "" === n ? "1" : n
                            }
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {},
                style: function(e, t, n, o) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var r, i, s, a = X(t),
                            c = We.test(t),
                            u = e.style;
                        if (c || (t = Ye(a)), s = _.cssHooks[t] || _.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (r = s.get(e, !1, o)) ? r : u[t];
                        "string" === (i = typeof n) && (r = re.exec(n)) && r[1] && (n = ce(e, t, r), i = "number"), null != n && n == n && ("number" === i && (n += r && r[3] || (_.cssNumber[a] ? "" : "px")), m.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, o)) || (c ? u.setProperty(t, n) : u[t] = n))
                    }
                },
                css: function(e, t, n, o) {
                    var r, i, s, a = X(t);
                    return We.test(t) || (t = Ye(a)), (s = _.cssHooks[t] || _.cssHooks[a]) && "get" in s && (r = s.get(e, !0, n)), void 0 === r && (r = qe(e, t, o)), "normal" === r && t in ze && (r = ze[t]), "" === n || n ? (i = parseFloat(r), !0 === n || isFinite(i) ? i || 0 : r) : r
                }
            }), _.each(["height", "width"], function(e, t) {
                _.cssHooks[t] = {
                    get: function(e, n, o) {
                        if (n) return !Ue.test(_.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Je(e, t, o) : ae(e, Qe, function() {
                            return Je(e, t, o)
                        })
                    },
                    set: function(e, n, o) {
                        var r, i = He(e),
                            s = "border-box" === _.css(e, "boxSizing", !1, i),
                            a = o && Ke(e, t, o, s, i);
                        return s && m.scrollboxSize() === i.position && (a -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(i[t]) - Ke(e, t, "border", !1, i) - .5)), a && (r = re.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = _.css(e, t)), Ze(0, n, a)
                    }
                }
            }), _.cssHooks.marginLeft = Fe(m.reliableMarginLeft, function(e, t) {
                if (t) return (parseFloat(qe(e, "marginLeft")) || e.getBoundingClientRect().left - ae(e, {
                    marginLeft: 0
                }, function() {
                    return e.getBoundingClientRect().left
                })) + "px"
            }), _.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function(e, t) {
                _.cssHooks[e + t] = {
                    expand: function(n) {
                        for (var o = 0, r = {}, i = "string" == typeof n ? n.split(" ") : [n]; o < 4; o++) r[e + ie[o] + t] = i[o] || i[o - 2] || i[0];
                        return r
                    }
                }, "margin" !== e && (_.cssHooks[e + t].set = Ze)
            }), _.fn.extend({
                css: function(e, t) {
                    return W(this, function(e, t, n) {
                        var o, r, i = {},
                            s = 0;
                        if (Array.isArray(t)) {
                            for (o = He(e), r = t.length; s < r; s++) i[t[s]] = _.css(e, t[s], !1, o);
                            return i
                        }
                        return void 0 !== n ? _.style(e, t, n) : _.css(e, t)
                    }, e, t, arguments.length > 1)
                }
            }), _.Tween = et, et.prototype = {
                constructor: et,
                init: function(e, t, n, o, r, i) {
                    this.elem = e, this.prop = n, this.easing = r || _.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = o, this.unit = i || (_.cssNumber[n] ? "" : "px")
                },
                cur: function() {
                    var e = et.propHooks[this.prop];
                    return e && e.get ? e.get(this) : et.propHooks._default.get(this)
                },
                run: function(e) {
                    var t, n = et.propHooks[this.prop];
                    return this.options.duration ? this.pos = t = _.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : et.propHooks._default.set(this), this
                }
            }, et.prototype.init.prototype = et.prototype, et.propHooks = {
                _default: {
                    get: function(e) {
                        var t;
                        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = _.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                    },
                    set: function(e) {
                        _.fx.step[e.prop] ? _.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[_.cssProps[e.prop]] && !_.cssHooks[e.prop] ? e.elem[e.prop] = e.now : _.style(e.elem, e.prop, e.now + e.unit)
                    }
                }
            }, et.propHooks.scrollTop = et.propHooks.scrollLeft = {
                set: function(e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                }
            }, _.easing = {
                linear: function(e) {
                    return e
                },
                swing: function(e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                },
                _default: "swing"
            }, _.fx = et.prototype.init, _.fx.step = {};
            var tt, nt, ot = /^(?:toggle|show|hide)$/,
                rt = /queueHooks$/;

            function it() {
                nt && (!1 === s.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(it) : n.setTimeout(it, _.fx.interval), _.fx.tick())
            }

            function st() {
                return n.setTimeout(function() {
                    tt = void 0
                }), tt = Date.now()
            }

            function at(e, t) {
                var n, o = 0,
                    r = {
                        height: e
                    };
                for (t = t ? 1 : 0; o < 4; o += 2 - t) r["margin" + (n = ie[o])] = r["padding" + n] = e;
                return t && (r.opacity = r.width = e), r
            }

            function ct(e, t, n) {
                for (var o, r = (ut.tweeners[t] || []).concat(ut.tweeners["*"]), i = 0, s = r.length; i < s; i++)
                    if (o = r[i].call(n, t, e)) return o
            }

            function ut(e, t, n) {
                var o, r, i = 0,
                    s = ut.prefilters.length,
                    a = _.Deferred().always(function() {
                        delete c.elem
                    }),
                    c = function() {
                        if (r) return !1;
                        for (var t = tt || st(), n = Math.max(0, u.startTime + u.duration - t), o = 1 - (n / u.duration || 0), i = 0, s = u.tweens.length; i < s; i++) u.tweens[i].run(o);
                        return a.notifyWith(e, [u, o, n]), o < 1 && s ? n : (s || a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u]), !1)
                    },
                    u = a.promise({
                        elem: e,
                        props: _.extend({}, t),
                        opts: _.extend(!0, {
                            specialEasing: {},
                            easing: _.easing._default
                        }, n),
                        originalProperties: t,
                        originalOptions: n,
                        startTime: tt || st(),
                        duration: n.duration,
                        tweens: [],
                        createTween: function(t, n) {
                            var o = _.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                            return u.tweens.push(o), o
                        },
                        stop: function(t) {
                            var n = 0,
                                o = t ? u.tweens.length : 0;
                            if (r) return this;
                            for (r = !0; n < o; n++) u.tweens[n].run(1);
                            return t ? (a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u, t])) : a.rejectWith(e, [u, t]), this
                        }
                    }),
                    l = u.props;
                for (! function(e, t) {
                        var n, o, r, i, s;
                        for (n in e)
                            if (r = t[o = X(n)], i = e[n], Array.isArray(i) && (r = i[1], i = e[n] = i[0]), n !== o && (e[o] = i, delete e[n]), (s = _.cssHooks[o]) && "expand" in s)
                                for (n in i = s.expand(i), delete e[o], i) n in e || (e[n] = i[n], t[n] = r);
                            else t[o] = r
                    }(l, u.opts.specialEasing); i < s; i++)
                    if (o = ut.prefilters[i].call(u, e, l, u.opts)) return v(o.stop) && (_._queueHooks(u.elem, u.opts.queue).stop = o.stop.bind(o)), o;
                return _.map(l, ct, u), v(u.opts.start) && u.opts.start.call(e, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), _.fx.timer(_.extend(c, {
                    elem: e,
                    anim: u,
                    queue: u.opts.queue
                })), u
            }
            _.Animation = _.extend(ut, {
                    tweeners: {
                        "*": [function(e, t) {
                            var n = this.createTween(e, t);
                            return ce(n.elem, e, re.exec(t), n), n
                        }]
                    },
                    tweener: function(e, t) {
                        v(e) ? (t = e, e = ["*"]) : e = e.match(B);
                        for (var n, o = 0, r = e.length; o < r; o++) n = e[o], ut.tweeners[n] = ut.tweeners[n] || [], ut.tweeners[n].unshift(t)
                    },
                    prefilters: [function(e, t, n) {
                        var o, r, i, s, a, c, u, l, d = "width" in t || "height" in t,
                            p = this,
                            h = {},
                            f = e.style,
                            g = e.nodeType && se(e),
                            y = K.get(e, "fxshow");
                        for (o in n.queue || (null == (s = _._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
                                s.unqueued || a()
                            }), s.unqueued++, p.always(function() {
                                p.always(function() {
                                    s.unqueued--, _.queue(e, "fx").length || s.empty.fire()
                                })
                            })), t)
                            if (r = t[o], ot.test(r)) {
                                if (delete t[o], i = i || "toggle" === r, r === (g ? "hide" : "show")) {
                                    if ("show" !== r || !y || void 0 === y[o]) continue;
                                    g = !0
                                }
                                h[o] = y && y[o] || _.style(e, o)
                            }
                        if ((c = !_.isEmptyObject(t)) || !_.isEmptyObject(h))
                            for (o in d && 1 === e.nodeType && (n.overflow = [f.overflow, f.overflowX, f.overflowY], null == (u = y && y.display) && (u = K.get(e, "display")), "none" === (l = _.css(e, "display")) && (u ? l = u : (de([e], !0), u = e.style.display || u, l = _.css(e, "display"), de([e]))), ("inline" === l || "inline-block" === l && null != u) && "none" === _.css(e, "float") && (c || (p.done(function() {
                                    f.display = u
                                }), null == u && (l = f.display, u = "none" === l ? "" : l)), f.display = "inline-block")), n.overflow && (f.overflow = "hidden", p.always(function() {
                                    f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
                                })), c = !1, h) c || (y ? "hidden" in y && (g = y.hidden) : y = K.access(e, "fxshow", {
                                display: u
                            }), i && (y.hidden = !g), g && de([e], !0), p.done(function() {
                                for (o in g || de([e]), K.remove(e, "fxshow"), h) _.style(e, o, h[o])
                            })), c = ct(g ? y[o] : 0, o, p), o in y || (y[o] = c.start, g && (c.end = c.start, c.start = 0))
                    }],
                    prefilter: function(e, t) {
                        t ? ut.prefilters.unshift(e) : ut.prefilters.push(e)
                    }
                }), _.speed = function(e, t, n) {
                    var o = e && "object" == typeof e ? _.extend({}, e) : {
                        complete: n || !n && t || v(e) && e,
                        duration: e,
                        easing: n && t || t && !v(t) && t
                    };
                    return _.fx.off ? o.duration = 0 : "number" != typeof o.duration && (o.duration in _.fx.speeds ? o.duration = _.fx.speeds[o.duration] : o.duration = _.fx.speeds._default), null != o.queue && !0 !== o.queue || (o.queue = "fx"), o.old = o.complete, o.complete = function() {
                        v(o.old) && o.old.call(this), o.queue && _.dequeue(this, o.queue)
                    }, o
                }, _.fn.extend({
                    fadeTo: function(e, t, n, o) {
                        return this.filter(se).css("opacity", 0).show().end().animate({
                            opacity: t
                        }, e, n, o)
                    },
                    animate: function(e, t, n, o) {
                        var r = _.isEmptyObject(e),
                            i = _.speed(t, n, o),
                            s = function() {
                                var t = ut(this, _.extend({}, e), i);
                                (r || K.get(this, "finish")) && t.stop(!0)
                            };
                        return s.finish = s, r || !1 === i.queue ? this.each(s) : this.queue(i.queue, s)
                    },
                    stop: function(e, t, n) {
                        var o = function(e) {
                            var t = e.stop;
                            delete e.stop, t(n)
                        };
                        return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                            var t = !0,
                                r = null != e && e + "queueHooks",
                                i = _.timers,
                                s = K.get(this);
                            if (r) s[r] && s[r].stop && o(s[r]);
                            else
                                for (r in s) s[r] && s[r].stop && rt.test(r) && o(s[r]);
                            for (r = i.length; r--;) i[r].elem !== this || null != e && i[r].queue !== e || (i[r].anim.stop(n), t = !1, i.splice(r, 1));
                            !t && n || _.dequeue(this, e)
                        })
                    },
                    finish: function(e) {
                        return !1 !== e && (e = e || "fx"), this.each(function() {
                            var t, n = K.get(this),
                                o = n[e + "queue"],
                                r = n[e + "queueHooks"],
                                i = _.timers,
                                s = o ? o.length : 0;
                            for (n.finish = !0, _.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = i.length; t--;) i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), i.splice(t, 1));
                            for (t = 0; t < s; t++) o[t] && o[t].finish && o[t].finish.call(this);
                            delete n.finish
                        })
                    }
                }), _.each(["toggle", "show", "hide"], function(e, t) {
                    var n = _.fn[t];
                    _.fn[t] = function(e, o, r) {
                        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(at(t, !0), e, o, r)
                    }
                }), _.each({
                    slideDown: at("show"),
                    slideUp: at("hide"),
                    slideToggle: at("toggle"),
                    fadeIn: {
                        opacity: "show"
                    },
                    fadeOut: {
                        opacity: "hide"
                    },
                    fadeToggle: {
                        opacity: "toggle"
                    }
                }, function(e, t) {
                    _.fn[e] = function(e, n, o) {
                        return this.animate(t, e, n, o)
                    }
                }), _.timers = [], _.fx.tick = function() {
                    var e, t = 0,
                        n = _.timers;
                    for (tt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
                    n.length || _.fx.stop(), tt = void 0
                }, _.fx.timer = function(e) {
                    _.timers.push(e), _.fx.start()
                }, _.fx.interval = 13, _.fx.start = function() {
                    nt || (nt = !0, it())
                }, _.fx.stop = function() {
                    nt = null
                }, _.fx.speeds = {
                    slow: 600,
                    fast: 200,
                    _default: 400
                }, _.fn.delay = function(e, t) {
                    return e = _.fx && _.fx.speeds[e] || e, t = t || "fx", this.queue(t, function(t, o) {
                        var r = n.setTimeout(t, e);
                        o.stop = function() {
                            n.clearTimeout(r)
                        }
                    })
                },
                function() {
                    var e = s.createElement("input"),
                        t = s.createElement("select").appendChild(s.createElement("option"));
                    e.type = "checkbox", m.checkOn = "" !== e.value, m.optSelected = t.selected, (e = s.createElement("input")).value = "t", e.type = "radio", m.radioValue = "t" === e.value
                }();
            var lt, dt = _.expr.attrHandle;
            _.fn.extend({
                attr: function(e, t) {
                    return W(this, _.attr, e, t, arguments.length > 1)
                },
                removeAttr: function(e) {
                    return this.each(function() {
                        _.removeAttr(this, e)
                    })
                }
            }), _.extend({
                attr: function(e, t, n) {
                    var o, r, i = e.nodeType;
                    if (3 !== i && 8 !== i && 2 !== i) return void 0 === e.getAttribute ? _.prop(e, t, n) : (1 === i && _.isXMLDoc(e) || (r = _.attrHooks[t.toLowerCase()] || (_.expr.match.bool.test(t) ? lt : void 0)), void 0 !== n ? null === n ? void _.removeAttr(e, t) : r && "set" in r && void 0 !== (o = r.set(e, n, t)) ? o : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (o = r.get(e, t)) ? o : null == (o = _.find.attr(e, t)) ? void 0 : o)
                },
                attrHooks: {
                    type: {
                        set: function(e, t) {
                            if (!m.radioValue && "radio" === t && E(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t), n && (e.value = n), t
                            }
                        }
                    }
                },
                removeAttr: function(e, t) {
                    var n, o = 0,
                        r = t && t.match(B);
                    if (r && 1 === e.nodeType)
                        for (; n = r[o++];) e.removeAttribute(n)
                }
            }), lt = {
                set: function(e, t, n) {
                    return !1 === t ? _.removeAttr(e, n) : e.setAttribute(n, n), n
                }
            }, _.each(_.expr.match.bool.source.match(/\w+/g), function(e, t) {
                var n = dt[t] || _.find.attr;
                dt[t] = function(e, t, o) {
                    var r, i, s = t.toLowerCase();
                    return o || (i = dt[s], dt[s] = r, r = null != n(e, t, o) ? s : null, dt[s] = i), r
                }
            });
            var pt = /^(?:input|select|textarea|button)$/i,
                ht = /^(?:a|area)$/i;

            function ft(e) {
                return (e.match(B) || []).join(" ")
            }

            function gt(e) {
                return e.getAttribute && e.getAttribute("class") || ""
            }

            function yt(e) {
                return Array.isArray(e) ? e : "string" == typeof e && e.match(B) || []
            }
            _.fn.extend({
                prop: function(e, t) {
                    return W(this, _.prop, e, t, arguments.length > 1)
                },
                removeProp: function(e) {
                    return this.each(function() {
                        delete this[_.propFix[e] || e]
                    })
                }
            }), _.extend({
                prop: function(e, t, n) {
                    var o, r, i = e.nodeType;
                    if (3 !== i && 8 !== i && 2 !== i) return 1 === i && _.isXMLDoc(e) || (t = _.propFix[t] || t, r = _.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (o = r.set(e, n, t)) ? o : e[t] = n : r && "get" in r && null !== (o = r.get(e, t)) ? o : e[t]
                },
                propHooks: {
                    tabIndex: {
                        get: function(e) {
                            var t = _.find.attr(e, "tabindex");
                            return t ? parseInt(t, 10) : pt.test(e.nodeName) || ht.test(e.nodeName) && e.href ? 0 : -1
                        }
                    }
                },
                propFix: {
                    for: "htmlFor",
                    class: "className"
                }
            }), m.optSelected || (_.propHooks.selected = {
                get: function(e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex, null
                },
                set: function(e) {
                    var t = e.parentNode;
                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
                }
            }), _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
                _.propFix[this.toLowerCase()] = this
            }), _.fn.extend({
                addClass: function(e) {
                    var t, n, o, r, i, s, a, c = 0;
                    if (v(e)) return this.each(function(t) {
                        _(this).addClass(e.call(this, t, gt(this)))
                    });
                    if ((t = yt(e)).length)
                        for (; n = this[c++];)
                            if (r = gt(n), o = 1 === n.nodeType && " " + ft(r) + " ") {
                                for (s = 0; i = t[s++];) o.indexOf(" " + i + " ") < 0 && (o += i + " ");
                                r !== (a = ft(o)) && n.setAttribute("class", a)
                            }
                    return this
                },
                removeClass: function(e) {
                    var t, n, o, r, i, s, a, c = 0;
                    if (v(e)) return this.each(function(t) {
                        _(this).removeClass(e.call(this, t, gt(this)))
                    });
                    if (!arguments.length) return this.attr("class", "");
                    if ((t = yt(e)).length)
                        for (; n = this[c++];)
                            if (r = gt(n), o = 1 === n.nodeType && " " + ft(r) + " ") {
                                for (s = 0; i = t[s++];)
                                    for (; o.indexOf(" " + i + " ") > -1;) o = o.replace(" " + i + " ", " ");
                                r !== (a = ft(o)) && n.setAttribute("class", a)
                            }
                    return this
                },
                toggleClass: function(e, t) {
                    var n = typeof e,
                        o = "string" === n || Array.isArray(e);
                    return "boolean" == typeof t && o ? t ? this.addClass(e) : this.removeClass(e) : v(e) ? this.each(function(n) {
                        _(this).toggleClass(e.call(this, n, gt(this), t), t)
                    }) : this.each(function() {
                        var t, r, i, s;
                        if (o)
                            for (r = 0, i = _(this), s = yt(e); t = s[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                        else void 0 !== e && "boolean" !== n || ((t = gt(this)) && K.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : K.get(this, "__className__") || ""))
                    })
                },
                hasClass: function(e) {
                    var t, n, o = 0;
                    for (t = " " + e + " "; n = this[o++];)
                        if (1 === n.nodeType && (" " + ft(gt(n)) + " ").indexOf(t) > -1) return !0;
                    return !1
                }
            });
            var mt = /\r/g;
            _.fn.extend({
                val: function(e) {
                    var t, n, o, r = this[0];
                    return arguments.length ? (o = v(e), this.each(function(n) {
                        var r;
                        1 === this.nodeType && (null == (r = o ? e.call(this, n, _(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = _.map(r, function(e) {
                            return null == e ? "" : e + ""
                        })), (t = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                    })) : r ? (t = _.valHooks[r.type] || _.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : "string" == typeof(n = r.value) ? n.replace(mt, "") : null == n ? "" : n : void 0
                }
            }), _.extend({
                valHooks: {
                    option: {
                        get: function(e) {
                            var t = _.find.attr(e, "value");
                            return null != t ? t : ft(_.text(e))
                        }
                    },
                    select: {
                        get: function(e) {
                            var t, n, o, r = e.options,
                                i = e.selectedIndex,
                                s = "select-one" === e.type,
                                a = s ? null : [],
                                c = s ? i + 1 : r.length;
                            for (o = i < 0 ? c : s ? i : 0; o < c; o++)
                                if (((n = r[o]).selected || o === i) && !n.disabled && (!n.parentNode.disabled || !E(n.parentNode, "optgroup"))) {
                                    if (t = _(n).val(), s) return t;
                                    a.push(t)
                                }
                            return a
                        },
                        set: function(e, t) {
                            for (var n, o, r = e.options, i = _.makeArray(t), s = r.length; s--;)((o = r[s]).selected = _.inArray(_.valHooks.option.get(o), i) > -1) && (n = !0);
                            return n || (e.selectedIndex = -1), i
                        }
                    }
                }
            }), _.each(["radio", "checkbox"], function() {
                _.valHooks[this] = {
                    set: function(e, t) {
                        if (Array.isArray(t)) return e.checked = _.inArray(_(e).val(), t) > -1
                    }
                }, m.checkOn || (_.valHooks[this].get = function(e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                })
            }), m.focusin = "onfocusin" in n;
            var vt = /^(?:focusinfocus|focusoutblur)$/,
                St = function(e) {
                    e.stopPropagation()
                };
            _.extend(_.event, {
                trigger: function(e, t, o, r) {
                    var i, a, c, u, l, d, p, h, g = [o || s],
                        y = f.call(e, "type") ? e.type : e,
                        m = f.call(e, "namespace") ? e.namespace.split(".") : [];
                    if (a = h = c = o = o || s, 3 !== o.nodeType && 8 !== o.nodeType && !vt.test(y + _.event.triggered) && (y.indexOf(".") > -1 && (y = (m = y.split(".")).shift(), m.sort()), l = y.indexOf(":") < 0 && "on" + y, (e = e[_.expando] ? e : new _.Event(y, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = m.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = o), t = null == t ? [e] : _.makeArray(t, [e]), p = _.event.special[y] || {}, r || !p.trigger || !1 !== p.trigger.apply(o, t))) {
                        if (!r && !p.noBubble && !S(o)) {
                            for (u = p.delegateType || y, vt.test(u + y) || (a = a.parentNode); a; a = a.parentNode) g.push(a), c = a;
                            c === (o.ownerDocument || s) && g.push(c.defaultView || c.parentWindow || n)
                        }
                        for (i = 0;
                            (a = g[i++]) && !e.isPropagationStopped();) h = a, e.type = i > 1 ? u : p.bindType || y, (d = (K.get(a, "events") || {})[e.type] && K.get(a, "handle")) && d.apply(a, t), (d = l && a[l]) && d.apply && Y(a) && (e.result = d.apply(a, t), !1 === e.result && e.preventDefault());
                        return e.type = y, r || e.isDefaultPrevented() || p._default && !1 !== p._default.apply(g.pop(), t) || !Y(o) || l && v(o[y]) && !S(o) && ((c = o[l]) && (o[l] = null), _.event.triggered = y, e.isPropagationStopped() && h.addEventListener(y, St), o[y](), e.isPropagationStopped() && h.removeEventListener(y, St), _.event.triggered = void 0, c && (o[l] = c)), e.result
                    }
                },
                simulate: function(e, t, n) {
                    var o = _.extend(new _.Event, n, {
                        type: e,
                        isSimulated: !0
                    });
                    _.event.trigger(o, null, t)
                }
            }), _.fn.extend({
                trigger: function(e, t) {
                    return this.each(function() {
                        _.event.trigger(e, t, this)
                    })
                },
                triggerHandler: function(e, t) {
                    var n = this[0];
                    if (n) return _.event.trigger(e, t, n, !0)
                }
            }), m.focusin || _.each({
                focus: "focusin",
                blur: "focusout"
            }, function(e, t) {
                var n = function(e) {
                    _.event.simulate(t, e.target, _.event.fix(e))
                };
                _.event.special[t] = {
                    setup: function() {
                        var o = this.ownerDocument || this,
                            r = K.access(o, t);
                        r || o.addEventListener(e, n, !0), K.access(o, t, (r || 0) + 1)
                    },
                    teardown: function() {
                        var o = this.ownerDocument || this,
                            r = K.access(o, t) - 1;
                        r ? K.access(o, t, r) : (o.removeEventListener(e, n, !0), K.remove(o, t))
                    }
                }
            });
            var wt = n.location,
                xt = Date.now(),
                bt = /\?/;
            _.parseXML = function(e) {
                var t;
                if (!e || "string" != typeof e) return null;
                try {
                    t = (new n.DOMParser).parseFromString(e, "text/xml")
                } catch (e) {
                    t = void 0
                }
                return t && !t.getElementsByTagName("parsererror").length || _.error("Invalid XML: " + e), t
            };
            var _t = /\[\]$/,
                Pt = /\r?\n/g,
                Ct = /^(?:submit|button|image|reset|file)$/i,
                At = /^(?:input|select|textarea|keygen)/i;

            function Vt(e, t, n, o) {
                var r;
                if (Array.isArray(t)) _.each(t, function(t, r) {
                    n || _t.test(e) ? o(e, r) : Vt(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, o)
                });
                else if (n || "object" !== b(t)) o(e, t);
                else
                    for (r in t) Vt(e + "[" + r + "]", t[r], n, o)
            }
            _.param = function(e, t) {
                var n, o = [],
                    r = function(e, t) {
                        var n = v(t) ? t() : t;
                        o[o.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                    };
                if (Array.isArray(e) || e.jquery && !_.isPlainObject(e)) _.each(e, function() {
                    r(this.name, this.value)
                });
                else
                    for (n in e) Vt(n, e[n], t, r);
                return o.join("&")
            }, _.fn.extend({
                serialize: function() {
                    return _.param(this.serializeArray())
                },
                serializeArray: function() {
                    return this.map(function() {
                        var e = _.prop(this, "elements");
                        return e ? _.makeArray(e) : this
                    }).filter(function() {
                        var e = this.type;
                        return this.name && !_(this).is(":disabled") && At.test(this.nodeName) && !Ct.test(e) && (this.checked || !pe.test(e))
                    }).map(function(e, t) {
                        var n = _(this).val();
                        return null == n ? null : Array.isArray(n) ? _.map(n, function(e) {
                            return {
                                name: t.name,
                                value: e.replace(Pt, "\r\n")
                            }
                        }) : {
                            name: t.name,
                            value: n.replace(Pt, "\r\n")
                        }
                    }).get()
                }
            });
            var Tt = /%20/g,
                Gt = /#.*$/,
                Et = /([?&])_=[^&]*/,
                Lt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                Ot = /^(?:GET|HEAD)$/,
                It = /^\/\//,
                Rt = {},
                kt = {},
                Mt = "*/".concat("*"),
                jt = s.createElement("a");

            function Bt(e) {
                return function(t, n) {
                    "string" != typeof t && (n = t, t = "*");
                    var o, r = 0,
                        i = t.toLowerCase().match(B) || [];
                    if (v(n))
                        for (; o = i[r++];) "+" === o[0] ? (o = o.slice(1) || "*", (e[o] = e[o] || []).unshift(n)) : (e[o] = e[o] || []).push(n)
                }
            }

            function Nt(e, t, n, o) {
                var r = {},
                    i = e === kt;

                function s(a) {
                    var c;
                    return r[a] = !0, _.each(e[a] || [], function(e, a) {
                        var u = a(t, n, o);
                        return "string" != typeof u || i || r[u] ? i ? !(c = u) : void 0 : (t.dataTypes.unshift(u), s(u), !1)
                    }), c
                }
                return s(t.dataTypes[0]) || !r["*"] && s("*")
            }

            function Ht(e, t) {
                var n, o, r = _.ajaxSettings.flatOptions || {};
                for (n in t) void 0 !== t[n] && ((r[n] ? e : o || (o = {}))[n] = t[n]);
                return o && _.extend(!0, e, o), e
            }
            jt.href = wt.href, _.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: wt.href,
                    type: "GET",
                    isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(wt.protocol),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": Mt,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /\bxml\b/,
                        html: /\bhtml/,
                        json: /\bjson\b/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": JSON.parse,
                        "text xml": _.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(e, t) {
                    return t ? Ht(Ht(e, _.ajaxSettings), t) : Ht(_.ajaxSettings, e)
                },
                ajaxPrefilter: Bt(Rt),
                ajaxTransport: Bt(kt),
                ajax: function(e, t) {
                    "object" == typeof e && (t = e, e = void 0), t = t || {};
                    var o, r, i, a, c, u, l, d, p, h, f = _.ajaxSetup({}, t),
                        g = f.context || f,
                        y = f.context && (g.nodeType || g.jquery) ? _(g) : _.event,
                        m = _.Deferred(),
                        v = _.Callbacks("once memory"),
                        S = f.statusCode || {},
                        w = {},
                        x = {},
                        b = "canceled",
                        P = {
                            readyState: 0,
                            getResponseHeader: function(e) {
                                var t;
                                if (l) {
                                    if (!a)
                                        for (a = {}; t = Lt.exec(i);) a[t[1].toLowerCase()] = t[2];
                                    t = a[e.toLowerCase()]
                                }
                                return null == t ? null : t
                            },
                            getAllResponseHeaders: function() {
                                return l ? i : null
                            },
                            setRequestHeader: function(e, t) {
                                return null == l && (e = x[e.toLowerCase()] = x[e.toLowerCase()] || e, w[e] = t), this
                            },
                            overrideMimeType: function(e) {
                                return null == l && (f.mimeType = e), this
                            },
                            statusCode: function(e) {
                                var t;
                                if (e)
                                    if (l) P.always(e[P.status]);
                                    else
                                        for (t in e) S[t] = [S[t], e[t]];
                                return this
                            },
                            abort: function(e) {
                                var t = e || b;
                                return o && o.abort(t), C(0, t), this
                            }
                        };
                    if (m.promise(P), f.url = ((e || f.url || wt.href) + "").replace(It, wt.protocol + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(B) || [""], null == f.crossDomain) {
                        u = s.createElement("a");
                        try {
                            u.href = f.url, u.href = u.href, f.crossDomain = jt.protocol + "//" + jt.host != u.protocol + "//" + u.host
                        } catch (e) {
                            f.crossDomain = !0
                        }
                    }
                    if (f.data && f.processData && "string" != typeof f.data && (f.data = _.param(f.data, f.traditional)), Nt(Rt, f, t, P), l) return P;
                    for (p in (d = _.event && f.global) && 0 == _.active++ && _.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Ot.test(f.type), r = f.url.replace(Gt, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Tt, "+")) : (h = f.url.slice(r.length), f.data && (f.processData || "string" == typeof f.data) && (r += (bt.test(r) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (r = r.replace(Et, "$1"), h = (bt.test(r) ? "&" : "?") + "_=" + xt++ + h), f.url = r + h), f.ifModified && (_.lastModified[r] && P.setRequestHeader("If-Modified-Since", _.lastModified[r]), _.etag[r] && P.setRequestHeader("If-None-Match", _.etag[r])), (f.data && f.hasContent && !1 !== f.contentType || t.contentType) && P.setRequestHeader("Content-Type", f.contentType), P.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Mt + "; q=0.01" : "") : f.accepts["*"]), f.headers) P.setRequestHeader(p, f.headers[p]);
                    if (f.beforeSend && (!1 === f.beforeSend.call(g, P, f) || l)) return P.abort();
                    if (b = "abort", v.add(f.complete), P.done(f.success), P.fail(f.error), o = Nt(kt, f, t, P)) {
                        if (P.readyState = 1, d && y.trigger("ajaxSend", [P, f]), l) return P;
                        f.async && f.timeout > 0 && (c = n.setTimeout(function() {
                            P.abort("timeout")
                        }, f.timeout));
                        try {
                            l = !1, o.send(w, C)
                        } catch (e) {
                            if (l) throw e;
                            C(-1, e)
                        }
                    } else C(-1, "No Transport");

                    function C(e, t, s, a) {
                        var u, p, h, w, x, b = t;
                        l || (l = !0, c && n.clearTimeout(c), o = void 0, i = a || "", P.readyState = e > 0 ? 4 : 0, u = e >= 200 && e < 300 || 304 === e, s && (w = function(e, t, n) {
                            for (var o, r, i, s, a = e.contents, c = e.dataTypes;
                                "*" === c[0];) c.shift(), void 0 === o && (o = e.mimeType || t.getResponseHeader("Content-Type"));
                            if (o)
                                for (r in a)
                                    if (a[r] && a[r].test(o)) {
                                        c.unshift(r);
                                        break
                                    }
                            if (c[0] in n) i = c[0];
                            else {
                                for (r in n) {
                                    if (!c[0] || e.converters[r + " " + c[0]]) {
                                        i = r;
                                        break
                                    }
                                    s || (s = r)
                                }
                                i = i || s
                            }
                            if (i) return i !== c[0] && c.unshift(i), n[i]
                        }(f, P, s)), w = function(e, t, n, o) {
                            var r, i, s, a, c, u = {},
                                l = e.dataTypes.slice();
                            if (l[1])
                                for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
                            for (i = l.shift(); i;)
                                if (e.responseFields[i] && (n[e.responseFields[i]] = t), !c && o && e.dataFilter && (t = e.dataFilter(t, e.dataType)), c = i, i = l.shift())
                                    if ("*" === i) i = c;
                                    else if ("*" !== c && c !== i) {
                                if (!(s = u[c + " " + i] || u["* " + i]))
                                    for (r in u)
                                        if ((a = r.split(" "))[1] === i && (s = u[c + " " + a[0]] || u["* " + a[0]])) {
                                            !0 === s ? s = u[r] : !0 !== u[r] && (i = a[0], l.unshift(a[1]));
                                            break
                                        }
                                if (!0 !== s)
                                    if (s && e.throws) t = s(t);
                                    else try {
                                        t = s(t)
                                    } catch (e) {
                                        return {
                                            state: "parsererror",
                                            error: s ? e : "No conversion from " + c + " to " + i
                                        }
                                    }
                            }
                            return {
                                state: "success",
                                data: t
                            }
                        }(f, w, P, u), u ? (f.ifModified && ((x = P.getResponseHeader("Last-Modified")) && (_.lastModified[r] = x), (x = P.getResponseHeader("etag")) && (_.etag[r] = x)), 204 === e || "HEAD" === f.type ? b = "nocontent" : 304 === e ? b = "notmodified" : (b = w.state, p = w.data, u = !(h = w.error))) : (h = b, !e && b || (b = "error", e < 0 && (e = 0))), P.status = e, P.statusText = (t || b) + "", u ? m.resolveWith(g, [p, b, P]) : m.rejectWith(g, [P, b, h]), P.statusCode(S), S = void 0, d && y.trigger(u ? "ajaxSuccess" : "ajaxError", [P, f, u ? p : h]), v.fireWith(g, [P, b]), d && (y.trigger("ajaxComplete", [P, f]), --_.active || _.event.trigger("ajaxStop")))
                    }
                    return P
                },
                getJSON: function(e, t, n) {
                    return _.get(e, t, n, "json")
                },
                getScript: function(e, t) {
                    return _.get(e, void 0, t, "script")
                }
            }), _.each(["get", "post"], function(e, t) {
                _[t] = function(e, n, o, r) {
                    return v(n) && (r = r || o, o = n, n = void 0), _.ajax(_.extend({
                        url: e,
                        type: t,
                        dataType: r,
                        data: n,
                        success: o
                    }, _.isPlainObject(e) && e))
                }
            }), _._evalUrl = function(e) {
                return _.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    cache: !0,
                    async: !1,
                    global: !1,
                    throws: !0
                })
            }, _.fn.extend({
                wrapAll: function(e) {
                    var t;
                    return this[0] && (v(e) && (e = e.call(this[0])), t = _(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                        for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                        return e
                    }).append(this)), this
                },
                wrapInner: function(e) {
                    return v(e) ? this.each(function(t) {
                        _(this).wrapInner(e.call(this, t))
                    }) : this.each(function() {
                        var t = _(this),
                            n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e)
                    })
                },
                wrap: function(e) {
                    var t = v(e);
                    return this.each(function(n) {
                        _(this).wrapAll(t ? e.call(this, n) : e)
                    })
                },
                unwrap: function(e) {
                    return this.parent(e).not("body").each(function() {
                        _(this).replaceWith(this.childNodes)
                    }), this
                }
            }), _.expr.pseudos.hidden = function(e) {
                return !_.expr.pseudos.visible(e)
            }, _.expr.pseudos.visible = function(e) {
                return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
            }, _.ajaxSettings.xhr = function() {
                try {
                    return new n.XMLHttpRequest
                } catch (e) {}
            };
            var Dt = {
                    0: 200,
                    1223: 204
                },
                qt = _.ajaxSettings.xhr();
            m.cors = !!qt && "withCredentials" in qt, m.ajax = qt = !!qt, _.ajaxTransport(function(e) {
                var t, o;
                if (m.cors || qt && !e.crossDomain) return {
                    send: function(r, i) {
                        var s, a = e.xhr();
                        if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                            for (s in e.xhrFields) a[s] = e.xhrFields[s];
                        for (s in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) a.setRequestHeader(s, r[s]);
                        t = function(e) {
                            return function() {
                                t && (t = o = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? i(0, "error") : i(a.status, a.statusText) : i(Dt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                    binary: a.response
                                } : {
                                    text: a.responseText
                                }, a.getAllResponseHeaders()))
                            }
                        }, a.onload = t(), o = a.onerror = a.ontimeout = t("error"), void 0 !== a.onabort ? a.onabort = o : a.onreadystatechange = function() {
                            4 === a.readyState && n.setTimeout(function() {
                                t && o()
                            })
                        }, t = t("abort");
                        try {
                            a.send(e.hasContent && e.data || null)
                        } catch (e) {
                            if (t) throw e
                        }
                    },
                    abort: function() {
                        t && t()
                    }
                }
            }), _.ajaxPrefilter(function(e) {
                e.crossDomain && (e.contents.script = !1)
            }), _.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function(e) {
                        return _.globalEval(e), e
                    }
                }
            }), _.ajaxPrefilter("script", function(e) {
                void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
            }), _.ajaxTransport("script", function(e) {
                var t, n;
                if (e.crossDomain) return {
                    send: function(o, r) {
                        t = _("<script>").prop({
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function(e) {
                            t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type)
                        }), s.head.appendChild(t[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
            });
            var Ft = [],
                Ut = /(=)\?(?=&|$)|\?\?/;
            _.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var e = Ft.pop() || _.expando + "_" + xt++;
                    return this[e] = !0, e
                }
            }), _.ajaxPrefilter("json jsonp", function(e, t, o) {
                var r, i, s, a = !1 !== e.jsonp && (Ut.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(e.data) && "data");
                if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Ut, "$1" + r) : !1 !== e.jsonp && (e.url += (bt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
                    return s || _.error(r + " was not called"), s[0]
                }, e.dataTypes[0] = "json", i = n[r], n[r] = function() {
                    s = arguments
                }, o.always(function() {
                    void 0 === i ? _(n).removeProp(r) : n[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Ft.push(r)), s && v(i) && i(s[0]), s = i = void 0
                }), "script"
            }), m.createHTMLDocument = function() {
                var e = s.implementation.createHTMLDocument("").body;
                return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
            }(), _.parseHTML = function(e, t, n) {
                return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (m.createHTMLDocument ? ((o = (t = s.implementation.createHTMLDocument("")).createElement("base")).href = s.location.href, t.head.appendChild(o)) : t = s), r = L.exec(e), i = !n && [], r ? [t.createElement(r[1])] : (r = Se([e], t, i), i && i.length && _(i).remove(), _.merge([], r.childNodes)));
                var o, r, i
            }, _.fn.load = function(e, t, n) {
                var o, r, i, s = this,
                    a = e.indexOf(" ");
                return a > -1 && (o = ft(e.slice(a)), e = e.slice(0, a)), v(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), s.length > 0 && _.ajax({
                    url: e,
                    type: r || "GET",
                    dataType: "html",
                    data: t
                }).done(function(e) {
                    i = arguments, s.html(o ? _("<div>").append(_.parseHTML(e)).find(o) : e)
                }).always(n && function(e, t) {
                    s.each(function() {
                        n.apply(this, i || [e.responseText, t, e])
                    })
                }), this
            }, _.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
                _.fn[t] = function(e) {
                    return this.on(t, e)
                }
            }), _.expr.pseudos.animated = function(e) {
                return _.grep(_.timers, function(t) {
                    return e === t.elem
                }).length
            }, _.offset = {
                setOffset: function(e, t, n) {
                    var o, r, i, s, a, c, u = _.css(e, "position"),
                        l = _(e),
                        d = {};
                    "static" === u && (e.style.position = "relative"), a = l.offset(), i = _.css(e, "top"), c = _.css(e, "left"), ("absolute" === u || "fixed" === u) && (i + c).indexOf("auto") > -1 ? (s = (o = l.position()).top, r = o.left) : (s = parseFloat(i) || 0, r = parseFloat(c) || 0), v(t) && (t = t.call(e, n, _.extend({}, a))), null != t.top && (d.top = t.top - a.top + s), null != t.left && (d.left = t.left - a.left + r), "using" in t ? t.using.call(e, d) : l.css(d)
                }
            }, _.fn.extend({
                offset: function(e) {
                    if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                        _.offset.setOffset(this, e, t)
                    });
                    var t, n, o = this[0];
                    return o ? o.getClientRects().length ? (t = o.getBoundingClientRect(), n = o.ownerDocument.defaultView, {
                        top: t.top + n.pageYOffset,
                        left: t.left + n.pageXOffset
                    }) : {
                        top: 0,
                        left: 0
                    } : void 0
                },
                position: function() {
                    if (this[0]) {
                        var e, t, n, o = this[0],
                            r = {
                                top: 0,
                                left: 0
                            };
                        if ("fixed" === _.css(o, "position")) t = o.getBoundingClientRect();
                        else {
                            for (t = this.offset(), n = o.ownerDocument, e = o.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === _.css(e, "position");) e = e.parentNode;
                            e && e !== o && 1 === e.nodeType && ((r = _(e).offset()).top += _.css(e, "borderTopWidth", !0), r.left += _.css(e, "borderLeftWidth", !0))
                        }
                        return {
                            top: t.top - r.top - _.css(o, "marginTop", !0),
                            left: t.left - r.left - _.css(o, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        for (var e = this.offsetParent; e && "static" === _.css(e, "position");) e = e.offsetParent;
                        return e || we
                    })
                }
            }), _.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function(e, t) {
                var n = "pageYOffset" === t;
                _.fn[e] = function(o) {
                    return W(this, function(e, o, r) {
                        var i;
                        if (S(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === r) return i ? i[t] : e[o];
                        i ? i.scrollTo(n ? i.pageXOffset : r, n ? r : i.pageYOffset) : e[o] = r
                    }, e, o, arguments.length)
                }
            }), _.each(["top", "left"], function(e, t) {
                _.cssHooks[t] = Fe(m.pixelPosition, function(e, n) {
                    if (n) return n = qe(e, t), Ne.test(n) ? _(e).position()[t] + "px" : n
                })
            }), _.each({
                Height: "height",
                Width: "width"
            }, function(e, t) {
                _.each({
                    padding: "inner" + e,
                    content: t,
                    "": "outer" + e
                }, function(n, o) {
                    _.fn[o] = function(r, i) {
                        var s = arguments.length && (n || "boolean" != typeof r),
                            a = n || (!0 === r || !0 === i ? "margin" : "border");
                        return W(this, function(t, n, r) {
                            var i;
                            return S(t) ? 0 === o.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? _.css(t, n, a) : _.style(t, n, r, a)
                        }, t, s ? r : void 0, s)
                    }
                })
            }), _.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
                _.fn[t] = function(e, n) {
                    return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                }
            }), _.fn.extend({
                hover: function(e, t) {
                    return this.mouseenter(e).mouseleave(t || e)
                }
            }), _.fn.extend({
                bind: function(e, t, n) {
                    return this.on(e, null, t, n)
                },
                unbind: function(e, t) {
                    return this.off(e, null, t)
                },
                delegate: function(e, t, n, o) {
                    return this.on(t, e, n, o)
                },
                undelegate: function(e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                }
            }), _.proxy = function(e, t) {
                var n, o, r;
                if ("string" == typeof t && (n = e[t], t = e, e = n), v(e)) return o = c.call(arguments, 2), (r = function() {
                    return e.apply(t || this, o.concat(c.call(arguments)))
                }).guid = e.guid = e.guid || _.guid++, r
            }, _.holdReady = function(e) {
                e ? _.readyWait++ : _.ready(!0)
            }, _.isArray = Array.isArray, _.parseJSON = JSON.parse, _.nodeName = E, _.isFunction = v, _.isWindow = S, _.camelCase = X, _.type = b, _.now = Date.now, _.isNumeric = function(e) {
                var t = _.type(e);
                return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
            }, void 0 === (o = function() {
                return _
            }.apply(t, [])) || (e.exports = o);
            var Wt = n.jQuery,
                Qt = n.$;
            return _.noConflict = function(e) {
                return n.$ === _ && (n.$ = Qt), e && n.jQuery === _ && (n.jQuery = Wt), _
            }, r || (n.jQuery = n.$ = _), _
        })
    },
    "./node_modules/matter-js/build/matter.js": function(e, t, n) {
        (function(t) {
            var n;
            ! function(o) {
                e.exports = function() {
                    return function() {
                        return function e(t, o, r) {
                            function i(a, c) {
                                if (!o[a]) {
                                    if (!t[a]) {
                                        var u = "function" == typeof n && n;
                                        if (!c && u) return n(a, !0);
                                        if (s) return s(a, !0);
                                        var l = new Error("Cannot find module '" + a + "'");
                                        throw l.code = "MODULE_NOT_FOUND", l
                                    }
                                    var d = o[a] = {
                                        exports: {}
                                    };
                                    t[a][0].call(d.exports, function(e) {
                                        var n = t[a][1][e];
                                        return i(n || e)
                                    }, d, d.exports, e, t, o, r)
                                }
                                return o[a].exports
                            }
                            for (var s = "function" == typeof n && n, a = 0; a < r.length; a++) i(r[a]);
                            return i
                        }
                    }()({
                        1: [function(e, t, n) {
                            var o = {};
                            t.exports = o;
                            var r = e("../geometry/Vertices"),
                                i = e("../geometry/Vector"),
                                s = e("../core/Sleeping"),
                                a = (e("../render/Render"), e("../core/Common")),
                                c = e("../geometry/Bounds"),
                                u = e("../geometry/Axes");
                            ! function() {
                                o._inertiaScale = 4, o._nextCollidingGroupId = 1, o._nextNonCollidingGroupId = -1, o._nextCategory = 1, o.create = function(t) {
                                    var n = {
                                            id: a.nextId(),
                                            type: "body",
                                            label: "Body",
                                            parts: [],
                                            plugin: {},
                                            angle: 0,
                                            vertices: r.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),
                                            position: {
                                                x: 0,
                                                y: 0
                                            },
                                            force: {
                                                x: 0,
                                                y: 0
                                            },
                                            torque: 0,
                                            positionImpulse: {
                                                x: 0,
                                                y: 0
                                            },
                                            constraintImpulse: {
                                                x: 0,
                                                y: 0,
                                                angle: 0
                                            },
                                            totalContacts: 0,
                                            speed: 0,
                                            angularSpeed: 0,
                                            velocity: {
                                                x: 0,
                                                y: 0
                                            },
                                            angularVelocity: 0,
                                            isSensor: !1,
                                            isStatic: !1,
                                            isSleeping: !1,
                                            motion: 0,
                                            sleepThreshold: 60,
                                            density: .001,
                                            restitution: 0,
                                            friction: .1,
                                            frictionStatic: .5,
                                            frictionAir: .01,
                                            collisionFilter: {
                                                category: 1,
                                                mask: 4294967295,
                                                group: 0
                                            },
                                            slop: .05,
                                            timeScale: 1,
                                            render: {
                                                visible: !0,
                                                opacity: 1,
                                                sprite: {
                                                    xScale: 1,
                                                    yScale: 1,
                                                    xOffset: 0,
                                                    yOffset: 0
                                                },
                                                lineWidth: 0
                                            }
                                        },
                                        o = a.extend(n, t);
                                    return e(o, t), o
                                }, o.nextGroup = function(e) {
                                    return e ? o._nextNonCollidingGroupId-- : o._nextCollidingGroupId++
                                }, o.nextCategory = function() {
                                    return o._nextCategory = o._nextCategory << 1, o._nextCategory
                                };
                                var e = function(e, t) {
                                    t = t || {}, o.set(e, {
                                        bounds: e.bounds || c.create(e.vertices),
                                        positionPrev: e.positionPrev || i.clone(e.position),
                                        anglePrev: e.anglePrev || e.angle,
                                        vertices: e.vertices,
                                        parts: e.parts || [e],
                                        isStatic: e.isStatic,
                                        isSleeping: e.isSleeping,
                                        parent: e.parent || e
                                    }), r.rotate(e.vertices, e.angle, e.position), u.rotate(e.axes, e.angle), c.update(e.bounds, e.vertices, e.velocity), o.set(e, {
                                        axes: t.axes || e.axes,
                                        area: t.area || e.area,
                                        mass: t.mass || e.mass,
                                        inertia: t.inertia || e.inertia
                                    });
                                    var n = e.isStatic ? "#2e2b44" : a.choose(["#006BA6", "#0496FF", "#FFBC42", "#D81159", "#8F2D56"]);
                                    e.render.fillStyle = e.render.fillStyle || n, e.render.strokeStyle = e.render.strokeStyle || "#000", e.render.sprite.xOffset += -(e.bounds.min.x - e.position.x) / (e.bounds.max.x - e.bounds.min.x), e.render.sprite.yOffset += -(e.bounds.min.y - e.position.y) / (e.bounds.max.y - e.bounds.min.y)
                                };
                                o.set = function(e, t, n) {
                                    var r;
                                    for (r in "string" == typeof t && (r = t, (t = {})[r] = n), t)
                                        if (n = t[r], t.hasOwnProperty(r)) switch (r) {
                                            case "isStatic":
                                                o.setStatic(e, n);
                                                break;
                                            case "isSleeping":
                                                s.set(e, n);
                                                break;
                                            case "mass":
                                                o.setMass(e, n);
                                                break;
                                            case "density":
                                                o.setDensity(e, n);
                                                break;
                                            case "inertia":
                                                o.setInertia(e, n);
                                                break;
                                            case "vertices":
                                                o.setVertices(e, n);
                                                break;
                                            case "position":
                                                o.setPosition(e, n);
                                                break;
                                            case "angle":
                                                o.setAngle(e, n);
                                                break;
                                            case "velocity":
                                                o.setVelocity(e, n);
                                                break;
                                            case "angularVelocity":
                                                o.setAngularVelocity(e, n);
                                                break;
                                            case "parts":
                                                o.setParts(e, n);
                                                break;
                                            default:
                                                e[r] = n
                                        }
                                }, o.setStatic = function(e, t) {
                                    for (var n = 0; n < e.parts.length; n++) {
                                        var o = e.parts[n];
                                        o.isStatic = t, t ? (o._original = {
                                            restitution: o.restitution,
                                            friction: o.friction,
                                            mass: o.mass,
                                            inertia: o.inertia,
                                            density: o.density,
                                            inverseMass: o.inverseMass,
                                            inverseInertia: o.inverseInertia
                                        }, o.restitution = 0, o.friction = 1, o.mass = o.inertia = o.density = 1 / 0, o.inverseMass = o.inverseInertia = 0, o.positionPrev.x = o.position.x, o.positionPrev.y = o.position.y, o.anglePrev = o.angle, o.angularVelocity = 0, o.speed = 0, o.angularSpeed = 0, o.motion = 0) : o._original && (o.restitution = o._original.restitution, o.friction = o._original.friction, o.mass = o._original.mass, o.inertia = o._original.inertia, o.density = o._original.density, o.inverseMass = o._original.inverseMass, o.inverseInertia = o._original.inverseInertia, delete o._original)
                                    }
                                }, o.setMass = function(e, t) {
                                    var n = e.inertia / (e.mass / 6);
                                    e.inertia = n * (t / 6), e.inverseInertia = 1 / e.inertia, e.mass = t, e.inverseMass = 1 / e.mass, e.density = e.mass / e.area
                                }, o.setDensity = function(e, t) {
                                    o.setMass(e, t * e.area), e.density = t
                                }, o.setInertia = function(e, t) {
                                    e.inertia = t, e.inverseInertia = 1 / e.inertia
                                }, o.setVertices = function(e, t) {
                                    t[0].body === e ? e.vertices = t : e.vertices = r.create(t, e), e.axes = u.fromVertices(e.vertices), e.area = r.area(e.vertices), o.setMass(e, e.density * e.area);
                                    var n = r.centre(e.vertices);
                                    r.translate(e.vertices, n, -1), o.setInertia(e, o._inertiaScale * r.inertia(e.vertices, e.mass)), r.translate(e.vertices, e.position), c.update(e.bounds, e.vertices, e.velocity)
                                }, o.setParts = function(e, t, n) {
                                    var i;
                                    for (t = t.slice(0), e.parts.length = 0, e.parts.push(e), e.parent = e, i = 0; i < t.length; i++) {
                                        var s = t[i];
                                        s !== e && (s.parent = e, e.parts.push(s))
                                    }
                                    if (1 !== e.parts.length) {
                                        if (n = void 0 === n || n) {
                                            var a = [];
                                            for (i = 0; i < t.length; i++) a = a.concat(t[i].vertices);
                                            r.clockwiseSort(a);
                                            var c = r.hull(a),
                                                u = r.centre(c);
                                            o.setVertices(e, c), r.translate(e.vertices, u)
                                        }
                                        var l = o._totalProperties(e);
                                        e.area = l.area, e.parent = e, e.position.x = l.centre.x, e.position.y = l.centre.y, e.positionPrev.x = l.centre.x, e.positionPrev.y = l.centre.y, o.setMass(e, l.mass), o.setInertia(e, l.inertia), o.setPosition(e, l.centre)
                                    }
                                }, o.setPosition = function(e, t) {
                                    var n = i.sub(t, e.position);
                                    e.positionPrev.x += n.x, e.positionPrev.y += n.y;
                                    for (var o = 0; o < e.parts.length; o++) {
                                        var s = e.parts[o];
                                        s.position.x += n.x, s.position.y += n.y, r.translate(s.vertices, n), c.update(s.bounds, s.vertices, e.velocity)
                                    }
                                }, o.setAngle = function(e, t) {
                                    var n = t - e.angle;
                                    e.anglePrev += n;
                                    for (var o = 0; o < e.parts.length; o++) {
                                        var s = e.parts[o];
                                        s.angle += n, r.rotate(s.vertices, n, e.position), u.rotate(s.axes, n), c.update(s.bounds, s.vertices, e.velocity), o > 0 && i.rotateAbout(s.position, n, e.position, s.position)
                                    }
                                }, o.setVelocity = function(e, t) {
                                    e.positionPrev.x = e.position.x - t.x, e.positionPrev.y = e.position.y - t.y, e.velocity.x = t.x, e.velocity.y = t.y, e.speed = i.magnitude(e.velocity)
                                }, o.setAngularVelocity = function(e, t) {
                                    e.anglePrev = e.angle - t, e.angularVelocity = t, e.angularSpeed = Math.abs(e.angularVelocity)
                                }, o.translate = function(e, t) {
                                    o.setPosition(e, i.add(e.position, t))
                                }, o.rotate = function(e, t, n) {
                                    if (n) {
                                        var r = Math.cos(t),
                                            i = Math.sin(t),
                                            s = e.position.x - n.x,
                                            a = e.position.y - n.y;
                                        o.setPosition(e, {
                                            x: n.x + (s * r - a * i),
                                            y: n.y + (s * i + a * r)
                                        }), o.setAngle(e, e.angle + t)
                                    } else o.setAngle(e, e.angle + t)
                                }, o.scale = function(e, t, n, i) {
                                    var s = 0,
                                        a = 0;
                                    i = i || e.position;
                                    for (var l = 0; l < e.parts.length; l++) {
                                        var d = e.parts[l];
                                        r.scale(d.vertices, t, n, i), d.axes = u.fromVertices(d.vertices), d.area = r.area(d.vertices), o.setMass(d, e.density * d.area), r.translate(d.vertices, {
                                            x: -d.position.x,
                                            y: -d.position.y
                                        }), o.setInertia(d, o._inertiaScale * r.inertia(d.vertices, d.mass)), r.translate(d.vertices, {
                                            x: d.position.x,
                                            y: d.position.y
                                        }), l > 0 && (s += d.area, a += d.inertia), d.position.x = i.x + (d.position.x - i.x) * t, d.position.y = i.y + (d.position.y - i.y) * n, c.update(d.bounds, d.vertices, e.velocity)
                                    }
                                    e.parts.length > 1 && (e.area = s, e.isStatic || (o.setMass(e, e.density * s), o.setInertia(e, a))), e.circleRadius && (t === n ? e.circleRadius *= t : e.circleRadius = null)
                                }, o.update = function(e, t, n, o) {
                                    var s = Math.pow(t * n * e.timeScale, 2),
                                        a = 1 - e.frictionAir * n * e.timeScale,
                                        l = e.position.x - e.positionPrev.x,
                                        d = e.position.y - e.positionPrev.y;
                                    e.velocity.x = l * a * o + e.force.x / e.mass * s, e.velocity.y = d * a * o + e.force.y / e.mass * s, e.positionPrev.x = e.position.x, e.positionPrev.y = e.position.y, e.position.x += e.velocity.x, e.position.y += e.velocity.y, e.angularVelocity = (e.angle - e.anglePrev) * a * o + e.torque / e.inertia * s, e.anglePrev = e.angle, e.angle += e.angularVelocity, e.speed = i.magnitude(e.velocity), e.angularSpeed = Math.abs(e.angularVelocity);
                                    for (var p = 0; p < e.parts.length; p++) {
                                        var h = e.parts[p];
                                        r.translate(h.vertices, e.velocity), p > 0 && (h.position.x += e.velocity.x, h.position.y += e.velocity.y), 0 !== e.angularVelocity && (r.rotate(h.vertices, e.angularVelocity, e.position), u.rotate(h.axes, e.angularVelocity), p > 0 && i.rotateAbout(h.position, e.angularVelocity, e.position, h.position)), c.update(h.bounds, h.vertices, e.velocity)
                                    }
                                }, o.applyForce = function(e, t, n) {
                                    e.force.x += n.x, e.force.y += n.y;
                                    var o = {
                                        x: t.x - e.position.x,
                                        y: t.y - e.position.y
                                    };
                                    e.torque += o.x * n.y - o.y * n.x
                                }, o._totalProperties = function(e) {
                                    for (var t = {
                                            mass: 0,
                                            area: 0,
                                            inertia: 0,
                                            centre: {
                                                x: 0,
                                                y: 0
                                            }
                                        }, n = 1 === e.parts.length ? 0 : 1; n < e.parts.length; n++) {
                                        var o = e.parts[n],
                                            r = o.mass !== 1 / 0 ? o.mass : 1;
                                        t.mass += r, t.area += o.area, t.inertia += o.inertia, t.centre = i.add(t.centre, i.mult(o.position, r))
                                    }
                                    return t.centre = i.div(t.centre, t.mass), t
                                }
                            }()
                        }, {
                            "../core/Common": 14,
                            "../core/Sleeping": 22,
                            "../geometry/Axes": 25,
                            "../geometry/Bounds": 26,
                            "../geometry/Vector": 28,
                            "../geometry/Vertices": 29,
                            "../render/Render": 31
                        }],
                        2: [function(e, t, n) {
                            var o = {};
                            t.exports = o;
                            var r = e("../core/Events"),
                                i = e("../core/Common"),
                                s = e("../geometry/Bounds"),
                                a = e("./Body");
                            ! function() {
                                o.create = function(e) {
                                    return i.extend({
                                        id: i.nextId(),
                                        type: "composite",
                                        parent: null,
                                        isModified: !1,
                                        bodies: [],
                                        constraints: [],
                                        composites: [],
                                        label: "Composite",
                                        plugin: {}
                                    }, e)
                                }, o.setModified = function(e, t, n, r) {
                                    if (e.isModified = t, n && e.parent && o.setModified(e.parent, t, n, r), r)
                                        for (var i = 0; i < e.composites.length; i++) {
                                            var s = e.composites[i];
                                            o.setModified(s, t, n, r)
                                        }
                                }, o.add = function(e, t) {
                                    var n = [].concat(t);
                                    r.trigger(e, "beforeAdd", {
                                        object: t
                                    });
                                    for (var s = 0; s < n.length; s++) {
                                        var a = n[s];
                                        switch (a.type) {
                                            case "body":
                                                if (a.parent !== a) {
                                                    i.warn("Composite.add: skipped adding a compound body part (you must add its parent instead)");
                                                    break
                                                }
                                                o.addBody(e, a);
                                                break;
                                            case "constraint":
                                                o.addConstraint(e, a);
                                                break;
                                            case "composite":
                                                o.addComposite(e, a);
                                                break;
                                            case "mouseConstraint":
                                                o.addConstraint(e, a.constraint)
                                        }
                                    }
                                    return r.trigger(e, "afterAdd", {
                                        object: t
                                    }), e
                                }, o.remove = function(e, t, n) {
                                    var i = [].concat(t);
                                    r.trigger(e, "beforeRemove", {
                                        object: t
                                    });
                                    for (var s = 0; s < i.length; s++) {
                                        var a = i[s];
                                        switch (a.type) {
                                            case "body":
                                                o.removeBody(e, a, n);
                                                break;
                                            case "constraint":
                                                o.removeConstraint(e, a, n);
                                                break;
                                            case "composite":
                                                o.removeComposite(e, a, n);
                                                break;
                                            case "mouseConstraint":
                                                o.removeConstraint(e, a.constraint)
                                        }
                                    }
                                    return r.trigger(e, "afterRemove", {
                                        object: t
                                    }), e
                                }, o.addComposite = function(e, t) {
                                    return e.composites.push(t), t.parent = e, o.setModified(e, !0, !0, !1), e
                                }, o.removeComposite = function(e, t, n) {
                                    var r = i.indexOf(e.composites, t);
                                    if (-1 !== r && (o.removeCompositeAt(e, r), o.setModified(e, !0, !0, !1)), n)
                                        for (var s = 0; s < e.composites.length; s++) o.removeComposite(e.composites[s], t, !0);
                                    return e
                                }, o.removeCompositeAt = function(e, t) {
                                    return e.composites.splice(t, 1), o.setModified(e, !0, !0, !1), e
                                }, o.addBody = function(e, t) {
                                    return e.bodies.push(t), o.setModified(e, !0, !0, !1), e
                                }, o.removeBody = function(e, t, n) {
                                    var r = i.indexOf(e.bodies, t);
                                    if (-1 !== r && (o.removeBodyAt(e, r), o.setModified(e, !0, !0, !1)), n)
                                        for (var s = 0; s < e.composites.length; s++) o.removeBody(e.composites[s], t, !0);
                                    return e
                                }, o.removeBodyAt = function(e, t) {
                                    return e.bodies.splice(t, 1), o.setModified(e, !0, !0, !1), e
                                }, o.addConstraint = function(e, t) {
                                    return e.constraints.push(t), o.setModified(e, !0, !0, !1), e
                                }, o.removeConstraint = function(e, t, n) {
                                    var r = i.indexOf(e.constraints, t);
                                    if (-1 !== r && o.removeConstraintAt(e, r), n)
                                        for (var s = 0; s < e.composites.length; s++) o.removeConstraint(e.composites[s], t, !0);
                                    return e
                                }, o.removeConstraintAt = function(e, t) {
                                    return e.constraints.splice(t, 1), o.setModified(e, !0, !0, !1), e
                                }, o.clear = function(e, t, n) {
                                    if (n)
                                        for (var r = 0; r < e.composites.length; r++) o.clear(e.composites[r], t, !0);
                                    return t ? e.bodies = e.bodies.filter(function(e) {
                                        return e.isStatic
                                    }) : e.bodies.length = 0, e.constraints.length = 0, e.composites.length = 0, o.setModified(e, !0, !0, !1), e
                                }, o.allBodies = function(e) {
                                    for (var t = [].concat(e.bodies), n = 0; n < e.composites.length; n++) t = t.concat(o.allBodies(e.composites[n]));
                                    return t
                                }, o.allConstraints = function(e) {
                                    for (var t = [].concat(e.constraints), n = 0; n < e.composites.length; n++) t = t.concat(o.allConstraints(e.composites[n]));
                                    return t
                                }, o.allComposites = function(e) {
                                    for (var t = [].concat(e.composites), n = 0; n < e.composites.length; n++) t = t.concat(o.allComposites(e.composites[n]));
                                    return t
                                }, o.get = function(e, t, n) {
                                    var r, i;
                                    switch (n) {
                                        case "body":
                                            r = o.allBodies(e);
                                            break;
                                        case "constraint":
                                            r = o.allConstraints(e);
                                            break;
                                        case "composite":
                                            r = o.allComposites(e).concat(e)
                                    }
                                    return r ? 0 === (i = r.filter(function(e) {
                                        return e.id.toString() === t.toString()
                                    })).length ? null : i[0] : null
                                }, o.move = function(e, t, n) {
                                    return o.remove(e, t), o.add(n, t), e
                                }, o.rebase = function(e) {
                                    for (var t = o.allBodies(e).concat(o.allConstraints(e)).concat(o.allComposites(e)), n = 0; n < t.length; n++) t[n].id = i.nextId();
                                    return o.setModified(e, !0, !0, !1), e
                                }, o.translate = function(e, t, n) {
                                    for (var r = n ? o.allBodies(e) : e.bodies, i = 0; i < r.length; i++) a.translate(r[i], t);
                                    return o.setModified(e, !0, !0, !1), e
                                }, o.rotate = function(e, t, n, r) {
                                    for (var i = Math.cos(t), s = Math.sin(t), c = r ? o.allBodies(e) : e.bodies, u = 0; u < c.length; u++) {
                                        var l = c[u],
                                            d = l.position.x - n.x,
                                            p = l.position.y - n.y;
                                        a.setPosition(l, {
                                            x: n.x + (d * i - p * s),
                                            y: n.y + (d * s + p * i)
                                        }), a.rotate(l, t)
                                    }
                                    return o.setModified(e, !0, !0, !1), e
                                }, o.scale = function(e, t, n, r, i) {
                                    for (var s = i ? o.allBodies(e) : e.bodies, c = 0; c < s.length; c++) {
                                        var u = s[c],
                                            l = u.position.x - r.x,
                                            d = u.position.y - r.y;
                                        a.setPosition(u, {
                                            x: r.x + l * t,
                                            y: r.y + d * n
                                        }), a.scale(u, t, n)
                                    }
                                    return o.setModified(e, !0, !0, !1), e
                                }, o.bounds = function(e) {
                                    for (var t = o.allBodies(e), n = [], r = 0; r < t.length; r += 1) {
                                        var i = t[r];
                                        n.push(i.bounds.min, i.bounds.max)
                                    }
                                    return s.create(n)
                                }
                            }()
                        }, {
                            "../core/Common": 14,
                            "../core/Events": 16,
                            "../geometry/Bounds": 26,
                            "./Body": 1
                        }],
                        3: [function(e, t, n) {
                            var o = {};
                            t.exports = o;
                            var r = e("./Composite"),
                                i = (e("../constraint/Constraint"), e("../core/Common"));
                            ! function() {
                                o.create = function(e) {
                                    var t = r.create(),
                                        n = {
                                            label: "World",
                                            gravity: {
                                                x: 0,
                                                y: 1,
                                                scale: .001
                                            },
                                            bounds: {
                                                min: {
                                                    x: -1 / 0,
                                                    y: -1 / 0
                                                },
                                                max: {
                                                    x: 1 / 0,
                                                    y: 1 / 0
                                                }
                                            }
                                        };
                                    return i.extend(t, n, e)
                                }
                            }()
                        }, {
                            "../constraint/Constraint": 12,
                            "../core/Common": 14,
                            "./Composite": 2
                        }],
                        4: [function(e, t, n) {
                            var o = {};
                            t.exports = o,
                                function() {
                                    o.create = function(e) {
                                        return {
                                            id: o.id(e),
                                            vertex: e,
                                            normalImpulse: 0,
                                            tangentImpulse: 0
                                        }
                                    }, o.id = function(e) {
                                        return e.body.id + "_" + e.index
                                    }
                                }()
                        }, {}],
                        5: [function(e, t, n) {
                            var o = {};
                            t.exports = o;
                            var r = e("./SAT"),
                                i = e("./Pair"),
                                s = e("../geometry/Bounds");
                            ! function() {
                                o.collisions = function(e, t) {
                                    for (var n = [], a = t.pairs.table, c = 0; c < e.length; c++) {
                                        var u = e[c][0],
                                            l = e[c][1];
                                        if ((!u.isStatic && !u.isSleeping || !l.isStatic && !l.isSleeping) && (o.canCollide(u.collisionFilter, l.collisionFilter) && s.overlaps(u.bounds, l.bounds)))
                                            for (var d = u.parts.length > 1 ? 1 : 0; d < u.parts.length; d++)
                                                for (var p = u.parts[d], h = l.parts.length > 1 ? 1 : 0; h < l.parts.length; h++) {
                                                    var f = l.parts[h];
                                                    if (p === u && f === l || s.overlaps(p.bounds, f.bounds)) {
                                                        var g, y = i.id(p, f),
                                                            m = a[y];
                                                        g = m && m.isActive ? m.collision : null;
                                                        var v = r.collides(p, f, g);
                                                        v.collided && n.push(v)
                                                    }
                                                }
                                    }
                                    return n
                                }, o.canCollide = function(e, t) {
                                    return e.group === t.group && 0 !== e.group ? e.group > 0 : 0 != (e.mask & t.category) && 0 != (t.mask & e.category)
                                }
                            }()
                        }, {
                            "../geometry/Bounds": 26,
                            "./Pair": 7,
                            "./SAT": 11
                        }],
                        6: [function(e, t, n) {
                            var o = {};
                            t.exports = o;
                            var r = e("./Pair"),
                                i = e("./Detector"),
                                s = e("../core/Common");
                            ! function() {
                                o.create = function(e) {
                                    var t = {
                                        controller: o,
                                        detector: i.collisions,
                                        buckets: {},
                                        pairs: {},
                                        pairsList: [],
                                        bucketWidth: 48,
                                        bucketHeight: 48
                                    };
                                    return s.extend(t, e)
                                }, o.update = function(e, t, n, r) {
                                    var i, s, a, c, u, l = n.world,
                                        d = e.buckets,
                                        p = !1;
                                    for (i = 0; i < t.length; i++) {
                                        var h = t[i];
                                        if ((!h.isSleeping || r) && !(h.bounds.max.x < l.bounds.min.x || h.bounds.min.x > l.bounds.max.x || h.bounds.max.y < l.bounds.min.y || h.bounds.min.y > l.bounds.max.y)) {
                                            var f = o._getRegion(e, h);
                                            if (!h.region || f.id !== h.region.id || r) {
                                                h.region && !r || (h.region = f);
                                                var g = o._regionUnion(f, h.region);
                                                for (s = g.startCol; s <= g.endCol; s++)
                                                    for (a = g.startRow; a <= g.endRow; a++) {
                                                        u = o._getBucketId(s, a), c = d[u];
                                                        var y = s >= f.startCol && s <= f.endCol && a >= f.startRow && a <= f.endRow,
                                                            m = s >= h.region.startCol && s <= h.region.endCol && a >= h.region.startRow && a <= h.region.endRow;
                                                        !y && m && m && c && o._bucketRemoveBody(e, c, h), (h.region === f || y && !m || r) && (c || (c = o._createBucket(d, u)), o._bucketAddBody(e, c, h))
                                                    }
                                                h.region = f, p = !0
                                            }
                                        }
                                    }
                                    p && (e.pairsList = o._createActivePairsList(e))
                                }, o.clear = function(e) {
                                    e.buckets = {}, e.pairs = {}, e.pairsList = []
                                }, o._regionUnion = function(e, t) {
                                    var n = Math.min(e.startCol, t.startCol),
                                        r = Math.max(e.endCol, t.endCol),
                                        i = Math.min(e.startRow, t.startRow),
                                        s = Math.max(e.endRow, t.endRow);
                                    return o._createRegion(n, r, i, s)
                                }, o._getRegion = function(e, t) {
                                    var n = t.bounds,
                                        r = Math.floor(n.min.x / e.bucketWidth),
                                        i = Math.floor(n.max.x / e.bucketWidth),
                                        s = Math.floor(n.min.y / e.bucketHeight),
                                        a = Math.floor(n.max.y / e.bucketHeight);
                                    return o._createRegion(r, i, s, a)
                                }, o._createRegion = function(e, t, n, o) {
                                    return {
                                        id: e + "," + t + "," + n + "," + o,
                                        startCol: e,
                                        endCol: t,
                                        startRow: n,
                                        endRow: o
                                    }
                                }, o._getBucketId = function(e, t) {
                                    return "C" + e + "R" + t
                                }, o._createBucket = function(e, t) {
                                    var n = e[t] = [];
                                    return n
                                }, o._bucketAddBody = function(e, t, n) {
                                    for (var o = 0; o < t.length; o++) {
                                        var i = t[o];
                                        if (!(n.id === i.id || n.isStatic && i.isStatic)) {
                                            var s = r.id(n, i),
                                                a = e.pairs[s];
                                            a ? a[2] += 1 : e.pairs[s] = [n, i, 1]
                                        }
                                    }
                                    t.push(n)
                                }, o._bucketRemoveBody = function(e, t, n) {
                                    t.splice(s.indexOf(t, n), 1);
                                    for (var o = 0; o < t.length; o++) {
                                        var i = t[o],
                                            a = r.id(n, i),
                                            c = e.pairs[a];
                                        c && (c[2] -= 1)
                                    }
                                }, o._createActivePairsList = function(e) {
                                    var t, n, o = [];
                                    t = s.keys(e.pairs);
                                    for (var r = 0; r < t.length; r++)(n = e.pairs[t[r]])[2] > 0 ? o.push(n) : delete e.pairs[t[r]];
                                    return o
                                }
                            }()
                        }, {
                            "../core/Common": 14,
                            "./Detector": 5,
                            "./Pair": 7
                        }],
                        7: [function(e, t, n) {
                            var o = {};
                            t.exports = o;
                            var r = e("./Contact");
                            ! function() {
                                o.create = function(e, t) {
                                    var n = e.bodyA,
                                        r = e.bodyB,
                                        i = e.parentA,
                                        s = e.parentB,
                                        a = {
                                            id: o.id(n, r),
                                            bodyA: n,
                                            bodyB: r,
                                            contacts: {},
                                            activeContacts: [],
                                            separation: 0,
                                            isActive: !0,
                                            isSensor: n.isSensor || r.isSensor,
                                            timeCreated: t,
                                            timeUpdated: t,
                                            inverseMass: i.inverseMass + s.inverseMass,
                                            friction: Math.min(i.friction, s.friction),
                                            frictionStatic: Math.max(i.frictionStatic, s.frictionStatic),
                                            restitution: Math.max(i.restitution, s.restitution),
                                            slop: Math.max(i.slop, s.slop)
                                        };
                                    return o.update(a, e, t), a
                                }, o.update = function(e, t, n) {
                                    var i = e.contacts,
                                        s = t.supports,
                                        a = e.activeContacts,
                                        c = t.parentA,
                                        u = t.parentB;
                                    if (e.collision = t, e.inverseMass = c.inverseMass + u.inverseMass, e.friction = Math.min(c.friction, u.friction), e.frictionStatic = Math.max(c.frictionStatic, u.frictionStatic), e.restitution = Math.max(c.restitution, u.restitution), e.slop = Math.max(c.slop, u.slop), a.length = 0, t.collided) {
                                        for (var l = 0; l < s.length; l++) {
                                            var d = s[l],
                                                p = r.id(d),
                                                h = i[p];
                                            h ? a.push(h) : a.push(i[p] = r.create(d))
                                        }
                                        e.separation = t.depth, o.setActive(e, !0, n)
                                    } else !0 === e.isActive && o.setActive(e, !1, n)
                                }, o.setActive = function(e, t, n) {
                                    t ? (e.isActive = !0, e.timeUpdated = n) : (e.isActive = !1, e.activeContacts.length = 0)
                                }, o.id = function(e, t) {
                                    return e.id < t.id ? "A" + e.id + "B" + t.id : "A" + t.id + "B" + e.id
                                }
                            }()
                        }, {
                            "./Contact": 4
                        }],
                        8: [function(e, t, n) {
                            var o = {};
                            t.exports = o;
                            var r = e("./Pair"),
                                i = e("../core/Common");
                            ! function() {
                                o._pairMaxIdleLife = 1e3, o.create = function(e) {
                                    return i.extend({
                                        table: {},
                                        list: [],
                                        collisionStart: [],
                                        collisionActive: [],
                                        collisionEnd: []
                                    }, e)
                                }, o.update = function(e, t, n) {
                                    var o, s, a, c, u = e.list,
                                        l = e.table,
                                        d = e.collisionStart,
                                        p = e.collisionEnd,
                                        h = e.collisionActive,
                                        f = [];
                                    for (d.length = 0, p.length = 0, h.length = 0, c = 0; c < t.length; c++)(o = t[c]).collided && (s = r.id(o.bodyA, o.bodyB), f.push(s), (a = l[s]) ? (a.isActive ? h.push(a) : d.push(a), r.update(a, o, n)) : (a = r.create(o, n), l[s] = a, d.push(a), u.push(a)));
                                    for (c = 0; c < u.length; c++)(a = u[c]).isActive && -1 === i.indexOf(f, a.id) && (r.setActive(a, !1, n), p.push(a))
                                }, o.removeOld = function(e, t) {
                                    var n, r, i, s, a = e.list,
                                        c = e.table,
                                        u = [];
                                    for (s = 0; s < a.length; s++) n = a[s], (r = n.collision).bodyA.isSleeping || r.bodyB.isSleeping ? n.timeUpdated = t : t - n.timeUpdated > o._pairMaxIdleLife && u.push(s);
                                    for (s = 0; s < u.length; s++) i = u[s] - s, n = a[i], delete c[n.id], a.splice(i, 1)
                                }, o.clear = function(e) {
                                    return e.table = {}, e.list.length = 0, e.collisionStart.length = 0, e.collisionActive.length = 0, e.collisionEnd.length = 0, e
                                }
                            }()
                        }, {
                            "../core/Common": 14,
                            "./Pair": 7
                        }],
                        9: [function(e, t, n) {
                            var o = {};
                            t.exports = o;
                            var r = e("../geometry/Vector"),
                                i = e("./SAT"),
                                s = e("../geometry/Bounds"),
                                a = e("../factory/Bodies"),
                                c = e("../geometry/Vertices");
                            ! function() {
                                o.collides = function(e, t) {
                                    for (var n = [], o = 0; o < t.length; o++) {
                                        var r = t[o];
                                        if (s.overlaps(r.bounds, e.bounds))
                                            for (var a = 1 === r.parts.length ? 0 : 1; a < r.parts.length; a++) {
                                                var c = r.parts[a];
                                                if (s.overlaps(c.bounds, e.bounds)) {
                                                    var u = i.collides(c, e);
                                                    if (u.collided) {
                                                        n.push(u);
                                                        break
                                                    }
                                                }
                                            }
                                    }
                                    return n
                                }, o.ray = function(e, t, n, i) {
                                    i = i || 1e-100;
                                    for (var s = r.angle(t, n), c = r.magnitude(r.sub(t, n)), u = .5 * (n.x + t.x), l = .5 * (n.y + t.y), d = a.rectangle(u, l, c, i, {
                                            angle: s
                                        }), p = o.collides(d, e), h = 0; h < p.length; h += 1) {
                                        var f = p[h];
                                        f.body = f.bodyB = f.bodyA
                                    }
                                    return p
                                }, o.region = function(e, t, n) {
                                    for (var o = [], r = 0; r < e.length; r++) {
                                        var i = e[r],
                                            a = s.overlaps(i.bounds, t);
                                        (a && !n || !a && n) && o.push(i)
                                    }
                                    return o
                                }, o.point = function(e, t) {
                                    for (var n = [], o = 0; o < e.length; o++) {
                                        var r = e[o];
                                        if (s.contains(r.bounds, t))
                                            for (var i = 1 === r.parts.length ? 0 : 1; i < r.parts.length; i++) {
                                                var a = r.parts[i];
                                                if (s.contains(a.bounds, t) && c.contains(a.vertices, t)) {
                                                    n.push(r);
                                                    break
                                                }
                                            }
                                    }
                                    return n
                                }
                            }()
                        }, {
                            "../factory/Bodies": 23,
                            "../geometry/Bounds": 26,
                            "../geometry/Vector": 28,
                            "../geometry/Vertices": 29,
                            "./SAT": 11
                        }],
                        10: [function(e, t, n) {
                            var o = {};
                            t.exports = o;
                            var r = e("../geometry/Vertices"),
                                i = e("../geometry/Vector"),
                                s = e("../core/Common"),
                                a = e("../geometry/Bounds");
                            ! function() {
                                o._restingThresh = 4, o._restingThreshTangent = 6, o._positionDampen = .9, o._positionWarming = .8, o._frictionNormalMultiplier = 5, o.preSolvePosition = function(e) {
                                    var t, n, o;
                                    for (t = 0; t < e.length; t++)(n = e[t]).isActive && (o = n.activeContacts.length, n.collision.parentA.totalContacts += o, n.collision.parentB.totalContacts += o)
                                }, o.solvePosition = function(e, t) {
                                    var n, r, s, a, c, u, l, d, p, h = i._temp[0],
                                        f = i._temp[1],
                                        g = i._temp[2],
                                        y = i._temp[3];
                                    for (n = 0; n < e.length; n++)(r = e[n]).isActive && !r.isSensor && (s = r.collision, a = s.parentA, c = s.parentB, u = s.normal, l = i.sub(i.add(c.positionImpulse, c.position, h), i.add(a.positionImpulse, i.sub(c.position, s.penetration, f), g), y), r.separation = i.dot(u, l));
                                    for (n = 0; n < e.length; n++)(r = e[n]).isActive && !r.isSensor && (s = r.collision, a = s.parentA, c = s.parentB, u = s.normal, p = (r.separation - r.slop) * t, (a.isStatic || c.isStatic) && (p *= 2), a.isStatic || a.isSleeping || (d = o._positionDampen / a.totalContacts, a.positionImpulse.x += u.x * p * d, a.positionImpulse.y += u.y * p * d), c.isStatic || c.isSleeping || (d = o._positionDampen / c.totalContacts, c.positionImpulse.x -= u.x * p * d, c.positionImpulse.y -= u.y * p * d))
                                }, o.postSolvePosition = function(e) {
                                    for (var t = 0; t < e.length; t++) {
                                        var n = e[t];
                                        if (n.totalContacts = 0, 0 !== n.positionImpulse.x || 0 !== n.positionImpulse.y) {
                                            for (var s = 0; s < n.parts.length; s++) {
                                                var c = n.parts[s];
                                                r.translate(c.vertices, n.positionImpulse), a.update(c.bounds, c.vertices, n.velocity), c.position.x += n.positionImpulse.x, c.position.y += n.positionImpulse.y
                                            }
                                            n.positionPrev.x += n.positionImpulse.x, n.positionPrev.y += n.positionImpulse.y, i.dot(n.positionImpulse, n.velocity) < 0 ? (n.positionImpulse.x = 0, n.positionImpulse.y = 0) : (n.positionImpulse.x *= o._positionWarming, n.positionImpulse.y *= o._positionWarming)
                                        }
                                    }
                                }, o.preSolveVelocity = function(e) {
                                    var t, n, o, r, s, a, c, u, l, d, p, h, f, g, y = i._temp[0],
                                        m = i._temp[1];
                                    for (t = 0; t < e.length; t++)
                                        if ((o = e[t]).isActive && !o.isSensor)
                                            for (r = o.activeContacts, s = o.collision, a = s.parentA, c = s.parentB, u = s.normal, l = s.tangent, n = 0; n < r.length; n++) d = r[n], p = d.vertex, h = d.normalImpulse, f = d.tangentImpulse, 0 === h && 0 === f || (y.x = u.x * h + l.x * f, y.y = u.y * h + l.y * f, a.isStatic || a.isSleeping || (g = i.sub(p, a.position, m), a.positionPrev.x += y.x * a.inverseMass, a.positionPrev.y += y.y * a.inverseMass, a.anglePrev += i.cross(g, y) * a.inverseInertia), c.isStatic || c.isSleeping || (g = i.sub(p, c.position, m), c.positionPrev.x -= y.x * c.inverseMass, c.positionPrev.y -= y.y * c.inverseMass, c.anglePrev -= i.cross(g, y) * c.inverseInertia))
                                }, o.solveVelocity = function(e, t) {
                                    for (var n = t * t, r = i._temp[0], a = i._temp[1], c = i._temp[2], u = i._temp[3], l = i._temp[4], d = i._temp[5], p = 0; p < e.length; p++) {
                                        var h = e[p];
                                        if (h.isActive && !h.isSensor) {
                                            var f = h.collision,
                                                g = f.parentA,
                                                y = f.parentB,
                                                m = f.normal,
                                                v = f.tangent,
                                                S = h.activeContacts,
                                                w = 1 / S.length;
                                            g.velocity.x = g.position.x - g.positionPrev.x, g.velocity.y = g.position.y - g.positionPrev.y, y.velocity.x = y.position.x - y.positionPrev.x, y.velocity.y = y.position.y - y.positionPrev.y, g.angularVelocity = g.angle - g.anglePrev, y.angularVelocity = y.angle - y.anglePrev;
                                            for (var x = 0; x < S.length; x++) {
                                                var b = S[x],
                                                    _ = b.vertex,
                                                    P = i.sub(_, g.position, a),
                                                    C = i.sub(_, y.position, c),
                                                    A = i.add(g.velocity, i.mult(i.perp(P), g.angularVelocity), u),
                                                    V = i.add(y.velocity, i.mult(i.perp(C), y.angularVelocity), l),
                                                    T = i.sub(A, V, d),
                                                    G = i.dot(m, T),
                                                    E = i.dot(v, T),
                                                    L = Math.abs(E),
                                                    O = s.sign(E),
                                                    I = (1 + h.restitution) * G,
                                                    R = s.clamp(h.separation + G, 0, 1) * o._frictionNormalMultiplier,
                                                    k = E,
                                                    M = 1 / 0;
                                                L > h.friction * h.frictionStatic * R * n && (M = L, k = s.clamp(h.friction * O * n, -M, M));
                                                var j = i.cross(P, m),
                                                    B = i.cross(C, m),
                                                    N = w / (g.inverseMass + y.inverseMass + g.inverseInertia * j * j + y.inverseInertia * B * B);
                                                if (I *= N, k *= N, G < 0 && G * G > o._restingThresh * n) b.normalImpulse = 0;
                                                else {
                                                    var H = b.normalImpulse;
                                                    b.normalImpulse = Math.min(b.normalImpulse + I, 0), I = b.normalImpulse - H
                                                }
                                                if (E * E > o._restingThreshTangent * n) b.tangentImpulse = 0;
                                                else {
                                                    var D = b.tangentImpulse;
                                                    b.tangentImpulse = s.clamp(b.tangentImpulse + k, -M, M), k = b.tangentImpulse - D
                                                }
                                                r.x = m.x * I + v.x * k, r.y = m.y * I + v.y * k, g.isStatic || g.isSleeping || (g.positionPrev.x += r.x * g.inverseMass, g.positionPrev.y += r.y * g.inverseMass, g.anglePrev += i.cross(P, r) * g.inverseInertia), y.isStatic || y.isSleeping || (y.positionPrev.x -= r.x * y.inverseMass, y.positionPrev.y -= r.y * y.inverseMass, y.anglePrev -= i.cross(C, r) * y.inverseInertia)
                                            }
                                        }
                                    }
                                }
                            }()
                        }, {
                            "../core/Common": 14,
                            "../geometry/Bounds": 26,
                            "../geometry/Vector": 28,
                            "../geometry/Vertices": 29
                        }],
                        11: [function(e, t, n) {
                            var o = {};
                            t.exports = o;
                            var r = e("../geometry/Vertices"),
                                i = e("../geometry/Vector");
                            ! function() {
                                o.collides = function(e, t, n) {
                                    var s, a, c, u, l = !1;
                                    if (n) {
                                        var d = e.parent,
                                            p = t.parent,
                                            h = d.speed * d.speed + d.angularSpeed * d.angularSpeed + p.speed * p.speed + p.angularSpeed * p.angularSpeed;
                                        l = n && n.collided && h < .2, u = n
                                    } else u = {
                                        collided: !1,
                                        bodyA: e,
                                        bodyB: t
                                    };
                                    if (n && l) {
                                        var f = u.axisBody,
                                            g = f === e ? t : e,
                                            y = [f.axes[n.axisNumber]];
                                        if (c = o._overlapAxes(f.vertices, g.vertices, y), u.reused = !0, c.overlap <= 0) return u.collided = !1, u
                                    } else {
                                        if ((s = o._overlapAxes(e.vertices, t.vertices, e.axes)).overlap <= 0) return u.collided = !1, u;
                                        if ((a = o._overlapAxes(t.vertices, e.vertices, t.axes)).overlap <= 0) return u.collided = !1, u;
                                        s.overlap < a.overlap ? (c = s, u.axisBody = e) : (c = a, u.axisBody = t), u.axisNumber = c.axisNumber
                                    }
                                    u.bodyA = e.id < t.id ? e : t, u.bodyB = e.id < t.id ? t : e, u.collided = !0, u.depth = c.overlap, u.parentA = u.bodyA.parent, u.parentB = u.bodyB.parent, e = u.bodyA, t = u.bodyB, i.dot(c.axis, i.sub(t.position, e.position)) < 0 ? u.normal = {
                                        x: c.axis.x,
                                        y: c.axis.y
                                    } : u.normal = {
                                        x: -c.axis.x,
                                        y: -c.axis.y
                                    }, u.tangent = i.perp(u.normal), u.penetration = u.penetration || {}, u.penetration.x = u.normal.x * u.depth, u.penetration.y = u.normal.y * u.depth;
                                    var m = o._findSupports(e, t, u.normal),
                                        v = [];
                                    if (r.contains(e.vertices, m[0]) && v.push(m[0]), r.contains(e.vertices, m[1]) && v.push(m[1]), v.length < 2) {
                                        var S = o._findSupports(t, e, i.neg(u.normal));
                                        r.contains(t.vertices, S[0]) && v.push(S[0]), v.length < 2 && r.contains(t.vertices, S[1]) && v.push(S[1])
                                    }
                                    return v.length < 1 && (v = [m[0]]), u.supports = v, u
                                }, o._overlapAxes = function(e, t, n) {
                                    for (var r, s, a = i._temp[0], c = i._temp[1], u = {
                                            overlap: Number.MAX_VALUE
                                        }, l = 0; l < n.length; l++) {
                                        if (s = n[l], o._projectToAxis(a, e, s), o._projectToAxis(c, t, s), (r = Math.min(a.max - c.min, c.max - a.min)) <= 0) return u.overlap = r, u;
                                        r < u.overlap && (u.overlap = r, u.axis = s, u.axisNumber = l)
                                    }
                                    return u
                                }, o._projectToAxis = function(e, t, n) {
                                    for (var o = i.dot(t[0], n), r = o, s = 1; s < t.length; s += 1) {
                                        var a = i.dot(t[s], n);
                                        a > r ? r = a : a < o && (o = a)
                                    }
                                    e.min = o, e.max = r
                                }, o._findSupports = function(e, t, n) {
                                    for (var o, r, s, a, c = Number.MAX_VALUE, u = i._temp[0], l = t.vertices, d = e.position, p = 0; p < l.length; p++) r = l[p], u.x = r.x - d.x, u.y = r.y - d.y, (o = -i.dot(n, u)) < c && (c = o, s = r);
                                    var h = s.index - 1 >= 0 ? s.index - 1 : l.length - 1;
                                    r = l[h], u.x = r.x - d.x, u.y = r.y - d.y, c = -i.dot(n, u), a = r;
                                    var f = (s.index + 1) % l.length;
                                    return r = l[f], u.x = r.x - d.x, u.y = r.y - d.y, (o = -i.dot(n, u)) < c && (a = r), [s, a]
                                }
                            }()
                        }, {
                            "../geometry/Vector": 28,
                            "../geometry/Vertices": 29
                        }],
                        12: [function(e, t, n) {
                            var o = {};
                            t.exports = o;
                            var r = e("../geometry/Vertices"),
                                i = e("../geometry/Vector"),
                                s = e("../core/Sleeping"),
                                a = e("../geometry/Bounds"),
                                c = e("../geometry/Axes"),
                                u = e("../core/Common");
                            ! function() {
                                o._warming = .4, o._torqueDampen = 1, o._minLength = 1e-6, o.create = function(e) {
                                    var t = e;
                                    t.bodyA && !t.pointA && (t.pointA = {
                                        x: 0,
                                        y: 0
                                    }), t.bodyB && !t.pointB && (t.pointB = {
                                        x: 0,
                                        y: 0
                                    });
                                    var n = t.bodyA ? i.add(t.bodyA.position, t.pointA) : t.pointA,
                                        o = t.bodyB ? i.add(t.bodyB.position, t.pointB) : t.pointB,
                                        r = i.magnitude(i.sub(n, o));
                                    t.length = void 0 !== t.length ? t.length : r, t.id = t.id || u.nextId(), t.label = t.label || "Constraint", t.type = "constraint", t.stiffness = t.stiffness || (t.length > 0 ? 1 : .7), t.damping = t.damping || 0, t.angularStiffness = t.angularStiffness || 0, t.angleA = t.bodyA ? t.bodyA.angle : t.angleA, t.angleB = t.bodyB ? t.bodyB.angle : t.angleB, t.plugin = {};
                                    var s = {
                                        visible: !0,
                                        lineWidth: 2,
                                        strokeStyle: "#ffffff",
                                        type: "line",
                                        anchors: !0
                                    };
                                    return 0 === t.length && t.stiffness > .1 ? (s.type = "pin", s.anchors = !1) : t.stiffness < .9 && (s.type = "spring"), t.render = u.extend(s, t.render), t
                                }, o.preSolveAll = function(e) {
                                    for (var t = 0; t < e.length; t += 1) {
                                        var n = e[t],
                                            o = n.constraintImpulse;
                                        n.isStatic || 0 === o.x && 0 === o.y && 0 === o.angle || (n.position.x += o.x, n.position.y += o.y, n.angle += o.angle)
                                    }
                                }, o.solveAll = function(e, t) {
                                    for (var n = 0; n < e.length; n += 1) {
                                        var r = e[n],
                                            i = !r.bodyA || r.bodyA && r.bodyA.isStatic,
                                            s = !r.bodyB || r.bodyB && r.bodyB.isStatic;
                                        (i || s) && o.solve(e[n], t)
                                    }
                                    for (n = 0; n < e.length; n += 1) r = e[n], i = !r.bodyA || r.bodyA && r.bodyA.isStatic, s = !r.bodyB || r.bodyB && r.bodyB.isStatic, i || s || o.solve(e[n], t)
                                }, o.solve = function(e, t) {
                                    var n = e.bodyA,
                                        r = e.bodyB,
                                        s = e.pointA,
                                        a = e.pointB;
                                    if (n || r) {
                                        n && !n.isStatic && (i.rotate(s, n.angle - e.angleA, s), e.angleA = n.angle), r && !r.isStatic && (i.rotate(a, r.angle - e.angleB, a), e.angleB = r.angle);
                                        var c = s,
                                            u = a;
                                        if (n && (c = i.add(n.position, s)), r && (u = i.add(r.position, a)), c && u) {
                                            var l = i.sub(c, u),
                                                d = i.magnitude(l);
                                            d < o._minLength && (d = o._minLength);
                                            var p, h, f, g, y, m = (d - e.length) / d,
                                                v = e.stiffness < 1 ? e.stiffness * t : e.stiffness,
                                                S = i.mult(l, m * v),
                                                w = (n ? n.inverseMass : 0) + (r ? r.inverseMass : 0),
                                                x = (n ? n.inverseInertia : 0) + (r ? r.inverseInertia : 0),
                                                b = w + x;
                                            if (e.damping) {
                                                var _ = i.create();
                                                f = i.div(l, d), y = i.sub(r && i.sub(r.position, r.positionPrev) || _, n && i.sub(n.position, n.positionPrev) || _), g = i.dot(f, y)
                                            }
                                            n && !n.isStatic && (h = n.inverseMass / w, n.constraintImpulse.x -= S.x * h, n.constraintImpulse.y -= S.y * h, n.position.x -= S.x * h, n.position.y -= S.y * h, e.damping && (n.positionPrev.x -= e.damping * f.x * g * h, n.positionPrev.y -= e.damping * f.y * g * h), p = i.cross(s, S) / b * o._torqueDampen * n.inverseInertia * (1 - e.angularStiffness), n.constraintImpulse.angle -= p, n.angle -= p), r && !r.isStatic && (h = r.inverseMass / w, r.constraintImpulse.x += S.x * h, r.constraintImpulse.y += S.y * h, r.position.x += S.x * h, r.position.y += S.y * h, e.damping && (r.positionPrev.x += e.damping * f.x * g * h, r.positionPrev.y += e.damping * f.y * g * h), p = i.cross(a, S) / b * o._torqueDampen * r.inverseInertia * (1 - e.angularStiffness), r.constraintImpulse.angle += p, r.angle += p)
                                        }
                                    }
                                }, o.postSolveAll = function(e) {
                                    for (var t = 0; t < e.length; t++) {
                                        var n = e[t],
                                            u = n.constraintImpulse;
                                        if (!(n.isStatic || 0 === u.x && 0 === u.y && 0 === u.angle)) {
                                            s.set(n, !1);
                                            for (var l = 0; l < n.parts.length; l++) {
                                                var d = n.parts[l];
                                                r.translate(d.vertices, u), l > 0 && (d.position.x += u.x, d.position.y += u.y), 0 !== u.angle && (r.rotate(d.vertices, u.angle, n.position), c.rotate(d.axes, u.angle), l > 0 && i.rotateAbout(d.position, u.angle, n.position, d.position)), a.update(d.bounds, d.vertices, n.velocity)
                                            }
                                            u.angle *= o._warming, u.x *= o._warming, u.y *= o._warming
                                        }
                                    }
                                }
                            }()
                        }, {
                            "../core/Common": 14,
                            "../core/Sleeping": 22,
                            "../geometry/Axes": 25,
                            "../geometry/Bounds": 26,
                            "../geometry/Vector": 28,
                            "../geometry/Vertices": 29
                        }],
                        13: [function(e, t, n) {
                            var o = {};
                            t.exports = o;
                            var r = e("../geometry/Vertices"),
                                i = e("../core/Sleeping"),
                                s = e("../core/Mouse"),
                                a = e("../core/Events"),
                                c = e("../collision/Detector"),
                                u = e("./Constraint"),
                                l = e("../body/Composite"),
                                d = e("../core/Common"),
                                p = e("../geometry/Bounds");
                            ! function() {
                                o.create = function(e, t) {
                                    var n = (e ? e.mouse : null) || (t ? t.mouse : null);
                                    n || (e && e.render && e.render.canvas ? n = s.create(e.render.canvas) : t && t.element ? n = s.create(t.element) : (n = s.create(), d.warn("MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected")));
                                    var r = u.create({
                                            label: "Mouse Constraint",
                                            pointA: n.position,
                                            pointB: {
                                                x: 0,
                                                y: 0
                                            },
                                            length: .01,
                                            stiffness: .1,
                                            angularStiffness: 1,
                                            render: {
                                                strokeStyle: "#90EE90",
                                                lineWidth: 3
                                            }
                                        }),
                                        i = {
                                            type: "mouseConstraint",
                                            mouse: n,
                                            element: null,
                                            body: null,
                                            constraint: r,
                                            collisionFilter: {
                                                category: 1,
                                                mask: 4294967295,
                                                group: 0
                                            }
                                        },
                                        c = d.extend(i, t);
                                    return a.on(e, "beforeUpdate", function() {
                                        var t = l.allBodies(e.world);
                                        o.update(c, t), o._triggerEvents(c)
                                    }), c
                                }, o.update = function(e, t) {
                                    var n = e.mouse,
                                        o = e.constraint,
                                        s = e.body;
                                    if (0 === n.button) {
                                        if (o.bodyB) i.set(o.bodyB, !1), o.pointA = n.position;
                                        else
                                            for (var u = 0; u < t.length; u++)
                                                if (s = t[u], p.contains(s.bounds, n.position) && c.canCollide(s.collisionFilter, e.collisionFilter))
                                                    for (var l = s.parts.length > 1 ? 1 : 0; l < s.parts.length; l++) {
                                                        var d = s.parts[l];
                                                        if (r.contains(d.vertices, n.position)) {
                                                            o.pointA = n.position, o.bodyB = e.body = s, o.pointB = {
                                                                x: n.position.x - s.position.x,
                                                                y: n.position.y - s.position.y
                                                            }, o.angleB = s.angle, i.set(s, !1), a.trigger(e, "startdrag", {
                                                                mouse: n,
                                                                body: s
                                                            });
                                                            break
                                                        }
                                                    }
                                    } else o.bodyB = e.body = null, o.pointB = null, s && a.trigger(e, "enddrag", {
                                        mouse: n,
                                        body: s
                                    })
                                }, o._triggerEvents = function(e) {
                                    var t = e.mouse,
                                        n = t.sourceEvents;
                                    n.mousemove && a.trigger(e, "mousemove", {
                                        mouse: t
                                    }), n.mousedown && a.trigger(e, "mousedown", {
                                        mouse: t
                                    }), n.mouseup && a.trigger(e, "mouseup", {
                                        mouse: t
                                    }), s.clearSourceEvents(t)
                                }
                            }()
                        }, {
                            "../body/Composite": 2,
                            "../collision/Detector": 5,
                            "../core/Common": 14,
                            "../core/Events": 16,
                            "../core/Mouse": 19,
                            "../core/Sleeping": 22,
                            "../geometry/Bounds": 26,
                            "../geometry/Vertices": 29,
                            "./Constraint": 12
                        }],
                        14: [function(e, n, o) {
                            (function(t) {
                                var o = {};
                                n.exports = o,
                                    function() {
                                        o._nextId = 0, o._seed = 0, o._nowStartTime = +new Date, o.extend = function(e, t) {
                                            var n, r;
                                            "boolean" == typeof t ? (n = 2, r = t) : (n = 1, r = !0);
                                            for (var i = n; i < arguments.length; i++) {
                                                var s = arguments[i];
                                                if (s)
                                                    for (var a in s) r && s[a] && s[a].constructor === Object ? e[a] && e[a].constructor !== Object ? e[a] = s[a] : (e[a] = e[a] || {}, o.extend(e[a], r, s[a])) : e[a] = s[a]
                                            }
                                            return e
                                        }, o.clone = function(e, t) {
                                            return o.extend({}, t, e)
                                        }, o.keys = function(e) {
                                            if (Object.keys) return Object.keys(e);
                                            var t = [];
                                            for (var n in e) t.push(n);
                                            return t
                                        }, o.values = function(e) {
                                            var t = [];
                                            if (Object.keys) {
                                                for (var n = Object.keys(e), o = 0; o < n.length; o++) t.push(e[n[o]]);
                                                return t
                                            }
                                            for (var r in e) t.push(e[r]);
                                            return t
                                        }, o.get = function(e, t, n, o) {
                                            t = t.split(".").slice(n, o);
                                            for (var r = 0; r < t.length; r += 1) e = e[t[r]];
                                            return e
                                        }, o.set = function(e, t, n, r, i) {
                                            var s = t.split(".").slice(r, i);
                                            return o.get(e, t, 0, -1)[s[s.length - 1]] = n, n
                                        }, o.shuffle = function(e) {
                                            for (var t = e.length - 1; t > 0; t--) {
                                                var n = Math.floor(o.random() * (t + 1)),
                                                    r = e[t];
                                                e[t] = e[n], e[n] = r
                                            }
                                            return e
                                        }, o.choose = function(e) {
                                            return e[Math.floor(o.random() * e.length)]
                                        }, o.isElement = function(e) {
                                            return "undefined" != typeof HTMLElement ? e instanceof HTMLElement : !!(e && e.nodeType && e.nodeName)
                                        }, o.isArray = function(e) {
                                            return "[object Array]" === Object.prototype.toString.call(e)
                                        }, o.isFunction = function(e) {
                                            return "function" == typeof e
                                        }, o.isPlainObject = function(e) {
                                            return "object" == typeof e && e.constructor === Object
                                        }, o.isString = function(e) {
                                            return "[object String]" === toString.call(e)
                                        }, o.clamp = function(e, t, n) {
                                            return e < t ? t : e > n ? n : e
                                        }, o.sign = function(e) {
                                            return e < 0 ? -1 : 1
                                        }, o.now = function() {
                                            if (window.performance) {
                                                if (window.performance.now) return window.performance.now();
                                                if (window.performance.webkitNow) return window.performance.webkitNow()
                                            }
                                            return new Date - o._nowStartTime
                                        }, o.random = function(e, t) {
                                            return e = void 0 !== e ? e : 0, t = void 0 !== t ? t : 1, e + n() * (t - e)
                                        };
                                        var n = function() {
                                            return o._seed = (9301 * o._seed + 49297) % 233280, o._seed / 233280
                                        };
                                        o.colorToNumber = function(e) {
                                            return 3 == (e = e.replace("#", "")).length && (e = e.charAt(0) + e.charAt(0) + e.charAt(1) + e.charAt(1) + e.charAt(2) + e.charAt(2)), parseInt(e, 16)
                                        }, o.logLevel = 1, o.log = function() {
                                            console && o.logLevel > 0 && o.logLevel <= 3 && console.log.apply(console, ["matter-js:"].concat(Array.prototype.slice.call(arguments)))
                                        }, o.info = function() {
                                            console && o.logLevel > 0 && o.logLevel <= 2 && console.info.apply(console, ["matter-js:"].concat(Array.prototype.slice.call(arguments)))
                                        }, o.warn = function() {
                                            console && o.logLevel > 0 && o.logLevel <= 3 && console.warn.apply(console, ["matter-js:"].concat(Array.prototype.slice.call(arguments)))
                                        }, o.nextId = function() {
                                            return o._nextId++
                                        }, o.indexOf = function(e, t) {
                                            if (e.indexOf) return e.indexOf(t);
                                            for (var n = 0; n < e.length; n++)
                                                if (e[n] === t) return n;
                                            return -1
                                        }, o.map = function(e, t) {
                                            if (e.map) return e.map(t);
                                            for (var n = [], o = 0; o < e.length; o += 1) n.push(t(e[o]));
                                            return n
                                        }, o.topologicalSort = function(e) {
                                            var t = [],
                                                n = [],
                                                r = [];
                                            for (var i in e) n[i] || r[i] || o._topologicalSort(i, n, r, e, t);
                                            return t
                                        }, o._topologicalSort = function(e, t, n, r, i) {
                                            var s = r[e] || [];
                                            n[e] = !0;
                                            for (var a = 0; a < s.length; a += 1) {
                                                var c = s[a];
                                                n[c] || (t[c] || o._topologicalSort(c, t, n, r, i))
                                            }
                                            n[e] = !1, t[e] = !0, i.push(e)
                                        }, o.chain = function() {
                                            for (var e = [], t = 0; t < arguments.length; t += 1) {
                                                var n = arguments[t];
                                                n._chained ? e.push.apply(e, n._chained) : e.push(n)
                                            }
                                            var o = function() {
                                                for (var t, n = new Array(arguments.length), o = 0, r = arguments.length; o < r; o++) n[o] = arguments[o];
                                                for (o = 0; o < e.length; o += 1) {
                                                    var i = e[o].apply(t, n);
                                                    void 0 !== i && (t = i)
                                                }
                                                return t
                                            };
                                            return o._chained = e, o
                                        }, o.chainPathBefore = function(e, t, n) {
                                            return o.set(e, t, o.chain(n, o.get(e, t)))
                                        }, o.chainPathAfter = function(e, t, n) {
                                            return o.set(e, t, o.chain(o.get(e, t), n))
                                        }, o._requireGlobal = function(n, o) {
                                            var r = "undefined" != typeof window ? window[n] : void 0 !== t ? t[n] : null;
                                            return r || e(o)
                                        }
                                    }()
                            }).call(this, void 0 !== t ? t : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                        }, {}],
                        15: [function(e, t, n) {
                            var o = {};
                            t.exports = o;
                            var r = e("../body/World"),
                                i = e("./Sleeping"),
                                s = e("../collision/Resolver"),
                                a = e("../render/Render"),
                                c = e("../collision/Pairs"),
                                u = (e("./Metrics"), e("../collision/Grid")),
                                l = e("./Events"),
                                d = e("../body/Composite"),
                                p = e("../constraint/Constraint"),
                                h = e("./Common"),
                                f = e("../body/Body");
                            ! function() {
                                o.create = function(e, t) {
                                    t = h.isElement(e) ? t : e, e = h.isElement(e) ? e : null, t = t || {}, (e || t.render) && h.warn("Engine.create: engine.render is deprecated (see docs)");
                                    var n = {
                                            positionIterations: 6,
                                            velocityIterations: 4,
                                            constraintIterations: 2,
                                            enableSleeping: !1,
                                            events: [],
                                            plugin: {},
                                            timing: {
                                                timestamp: 0,
                                                timeScale: 1
                                            },
                                            broadphase: {
                                                controller: u
                                            }
                                        },
                                        o = h.extend(n, t);
                                    if (e || o.render) {
                                        var i = {
                                            element: e,
                                            controller: a
                                        };
                                        o.render = h.extend(i, o.render)
                                    }
                                    return o.render && o.render.controller && (o.render = o.render.controller.create(o.render)), o.render && (o.render.engine = o), o.world = t.world || r.create(o.world), o.pairs = c.create(), o.broadphase = o.broadphase.controller.create(o.broadphase), o.metrics = o.metrics || {
                                        extended: !1
                                    }, o
                                }, o.update = function(e, t, n) {
                                    t = t || 1e3 / 60, n = n || 1;
                                    var r, a = e.world,
                                        u = e.timing,
                                        h = e.broadphase,
                                        f = [];
                                    u.timestamp += t * u.timeScale;
                                    var g = {
                                        timestamp: u.timestamp
                                    };
                                    l.trigger(e, "beforeUpdate", g);
                                    var y = d.allBodies(a),
                                        m = d.allConstraints(a);
                                    for (e.enableSleeping && i.update(y, u.timeScale), o._bodiesApplyGravity(y, a.gravity), o._bodiesUpdate(y, t, u.timeScale, n, a.bounds), p.preSolveAll(y), r = 0; r < e.constraintIterations; r++) p.solveAll(m, u.timeScale);
                                    p.postSolveAll(y), h.controller ? (a.isModified && h.controller.clear(h), h.controller.update(h, y, e, a.isModified), f = h.pairsList) : f = y, a.isModified && d.setModified(a, !1, !1, !0);
                                    var v = h.detector(f, e),
                                        S = e.pairs,
                                        w = u.timestamp;
                                    for (c.update(S, v, w), c.removeOld(S, w), e.enableSleeping && i.afterCollisions(S.list, u.timeScale), S.collisionStart.length > 0 && l.trigger(e, "collisionStart", {
                                            pairs: S.collisionStart
                                        }), s.preSolvePosition(S.list), r = 0; r < e.positionIterations; r++) s.solvePosition(S.list, u.timeScale);
                                    for (s.postSolvePosition(y), p.preSolveAll(y), r = 0; r < e.constraintIterations; r++) p.solveAll(m, u.timeScale);
                                    for (p.postSolveAll(y), s.preSolveVelocity(S.list), r = 0; r < e.velocityIterations; r++) s.solveVelocity(S.list, u.timeScale);
                                    return S.collisionActive.length > 0 && l.trigger(e, "collisionActive", {
                                        pairs: S.collisionActive
                                    }), S.collisionEnd.length > 0 && l.trigger(e, "collisionEnd", {
                                        pairs: S.collisionEnd
                                    }), o._bodiesClearForces(y), l.trigger(e, "afterUpdate", g), e
                                }, o.merge = function(e, t) {
                                    if (h.extend(e, t), t.world) {
                                        e.world = t.world, o.clear(e);
                                        for (var n = d.allBodies(e.world), r = 0; r < n.length; r++) {
                                            var s = n[r];
                                            i.set(s, !1), s.id = h.nextId()
                                        }
                                    }
                                }, o.clear = function(e) {
                                    var t = e.world;
                                    c.clear(e.pairs);
                                    var n = e.broadphase;
                                    if (n.controller) {
                                        var o = d.allBodies(t);
                                        n.controller.clear(n), n.controller.update(n, o, e, !0)
                                    }
                                }, o._bodiesClearForces = function(e) {
                                    for (var t = 0; t < e.length; t++) {
                                        var n = e[t];
                                        n.force.x = 0, n.force.y = 0, n.torque = 0
                                    }
                                }, o._bodiesApplyGravity = function(e, t) {
                                    var n = void 0 !== t.scale ? t.scale : .001;
                                    if ((0 !== t.x || 0 !== t.y) && 0 !== n)
                                        for (var o = 0; o < e.length; o++) {
                                            var r = e[o];
                                            r.isStatic || r.isSleeping || (r.force.y += r.mass * t.y * n, r.force.x += r.mass * t.x * n)
                                        }
                                }, o._bodiesUpdate = function(e, t, n, o, r) {
                                    for (var i = 0; i < e.length; i++) {
                                        var s = e[i];
                                        s.isStatic || s.isSleeping || f.update(s, t, n, o)
                                    }
                                }
                            }()
                        }, {
                            "../body/Body": 1,
                            "../body/Composite": 2,
                            "../body/World": 3,
                            "../collision/Grid": 6,
                            "../collision/Pairs": 8,
                            "../collision/Resolver": 10,
                            "../constraint/Constraint": 12,
                            "../render/Render": 31,
                            "./Common": 14,
                            "./Events": 16,
                            "./Metrics": 18,
                            "./Sleeping": 22
                        }],
                        16: [function(e, t, n) {
                            var o = {};
                            t.exports = o;
                            var r = e("./Common");
                            ! function() {
                                o.on = function(e, t, n) {
                                    for (var o, r = t.split(" "), i = 0; i < r.length; i++) o = r[i], e.events = e.events || {}, e.events[o] = e.events[o] || [], e.events[o].push(n);
                                    return n
                                }, o.off = function(e, t, n) {
                                    if (t) {
                                        "function" == typeof t && (n = t, t = r.keys(e.events).join(" "));
                                        for (var o = t.split(" "), i = 0; i < o.length; i++) {
                                            var s = e.events[o[i]],
                                                a = [];
                                            if (n && s)
                                                for (var c = 0; c < s.length; c++) s[c] !== n && a.push(s[c]);
                                            e.events[o[i]] = a
                                        }
                                    } else e.events = {}
                                }, o.trigger = function(e, t, n) {
                                    var o, i, s, a;
                                    if (e.events) {
                                        n || (n = {}), o = t.split(" ");
                                        for (var c = 0; c < o.length; c++)
                                            if (i = o[c], s = e.events[i]) {
                                                (a = r.clone(n, !1)).name = i, a.source = e;
                                                for (var u = 0; u < s.length; u++) s[u].apply(e, [a])
                                            }
                                    }
                                }
                            }()
                        }, {
                            "./Common": 14
                        }],
                        17: [function(e, t, n) {
                            var o = {};
                            t.exports = o;
                            var r = e("./Plugin"),
                                i = e("./Common");
                            ! function() {
                                o.name = "matter-js", o.version = "0.14.2", o.uses = [], o.used = [], o.use = function() {
                                    r.use(o, Array.prototype.slice.call(arguments))
                                }, o.before = function(e, t) {
                                    return e = e.replace(/^Matter./, ""), i.chainPathBefore(o, e, t)
                                }, o.after = function(e, t) {
                                    return e = e.replace(/^Matter./, ""), i.chainPathAfter(o, e, t)
                                }
                            }()
                        }, {
                            "./Common": 14,
                            "./Plugin": 20
                        }],
                        18: [function(e, t, n) {}, {
                            "../body/Composite": 2,
                            "./Common": 14
                        }],
                        19: [function(e, t, n) {
                            var o = {};
                            t.exports = o;
                            var r = e("../core/Common");
                            ! function() {
                                o.create = function(e) {
                                    var t = {};
                                    return e || r.log("Mouse.create: element was undefined, defaulting to document.body", "warn"), t.element = e || document.body, t.absolute = {
                                        x: 0,
                                        y: 0
                                    }, t.position = {
                                        x: 0,
                                        y: 0
                                    }, t.mousedownPosition = {
                                        x: 0,
                                        y: 0
                                    }, t.mouseupPosition = {
                                        x: 0,
                                        y: 0
                                    }, t.offset = {
                                        x: 0,
                                        y: 0
                                    }, t.scale = {
                                        x: 1,
                                        y: 1
                                    }, t.wheelDelta = 0, t.button = -1, t.pixelRatio = t.element.getAttribute("data-pixel-ratio") || 1, t.sourceEvents = {
                                        mousemove: null,
                                        mousedown: null,
                                        mouseup: null,
                                        mousewheel: null
                                    }, t.mousemove = function(e) {
                                        var n = o._getRelativeMousePosition(e, t.element, t.pixelRatio),
                                            r = e.changedTouches;
                                        r && (t.button = 0, e.preventDefault()), t.absolute.x = n.x, t.absolute.y = n.y, t.position.x = t.absolute.x * t.scale.x + t.offset.x, t.position.y = t.absolute.y * t.scale.y + t.offset.y, t.sourceEvents.mousemove = e
                                    }, t.mousedown = function(e) {
                                        var n = o._getRelativeMousePosition(e, t.element, t.pixelRatio),
                                            r = e.changedTouches;
                                        r ? (t.button = 0, e.preventDefault()) : t.button = e.button, t.absolute.x = n.x, t.absolute.y = n.y, t.position.x = t.absolute.x * t.scale.x + t.offset.x, t.position.y = t.absolute.y * t.scale.y + t.offset.y, t.mousedownPosition.x = t.position.x, t.mousedownPosition.y = t.position.y, t.sourceEvents.mousedown = e
                                    }, t.mouseup = function(e) {
                                        var n = o._getRelativeMousePosition(e, t.element, t.pixelRatio),
                                            r = e.changedTouches;
                                        r && e.preventDefault(), t.button = -1, t.absolute.x = n.x, t.absolute.y = n.y, t.position.x = t.absolute.x * t.scale.x + t.offset.x, t.position.y = t.absolute.y * t.scale.y + t.offset.y, t.mouseupPosition.x = t.position.x, t.mouseupPosition.y = t.position.y, t.sourceEvents.mouseup = e
                                    }, t.mousewheel = function(e) {
                                        t.wheelDelta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail)), e.preventDefault()
                                    }, o.setElement(t, t.element), t
                                }, o.setElement = function(e, t) {
                                    e.element = t, t.addEventListener("mousemove", e.mousemove), t.addEventListener("mousedown", e.mousedown), t.addEventListener("mouseup", e.mouseup), t.addEventListener("mousewheel", e.mousewheel), t.addEventListener("DOMMouseScroll", e.mousewheel), t.addEventListener("touchmove", e.mousemove), t.addEventListener("touchstart", e.mousedown), t.addEventListener("touchend", e.mouseup)
                                }, o.clearSourceEvents = function(e) {
                                    e.sourceEvents.mousemove = null, e.sourceEvents.mousedown = null, e.sourceEvents.mouseup = null, e.sourceEvents.mousewheel = null, e.wheelDelta = 0
                                }, o.setOffset = function(e, t) {
                                    e.offset.x = t.x, e.offset.y = t.y, e.position.x = e.absolute.x * e.scale.x + e.offset.x, e.position.y = e.absolute.y * e.scale.y + e.offset.y
                                }, o.setScale = function(e, t) {
                                    e.scale.x = t.x, e.scale.y = t.y, e.position.x = e.absolute.x * e.scale.x + e.offset.x, e.position.y = e.absolute.y * e.scale.y + e.offset.y
                                }, o._getRelativeMousePosition = function(e, t, n) {
                                    var o, r, i = t.getBoundingClientRect(),
                                        s = document.documentElement || document.body.parentNode || document.body,
                                        a = void 0 !== window.pageXOffset ? window.pageXOffset : s.scrollLeft,
                                        c = void 0 !== window.pageYOffset ? window.pageYOffset : s.scrollTop,
                                        u = e.changedTouches;
                                    return u ? (o = u[0].pageX - i.left - a, r = u[0].pageY - i.top - c) : (o = e.pageX - i.left - a, r = e.pageY - i.top - c), {
                                        x: o / (t.clientWidth / (t.width || t.clientWidth) * n),
                                        y: r / (t.clientHeight / (t.height || t.clientHeight) * n)
                                    }
                                }
                            }()
                        }, {
                            "../core/Common": 14
                        }],
                        20: [function(e, t, n) {
                            var o = {};
                            t.exports = o;
                            var r = e("./Common");
                            ! function() {
                                o._registry = {}, o.register = function(e) {
                                    if (o.isPlugin(e) || r.warn("Plugin.register:", o.toString(e), "does not implement all required fields."), e.name in o._registry) {
                                        var t = o._registry[e.name],
                                            n = o.versionParse(e.version).number,
                                            i = o.versionParse(t.version).number;
                                        n > i ? (r.warn("Plugin.register:", o.toString(t), "was upgraded to", o.toString(e)), o._registry[e.name] = e) : n < i ? r.warn("Plugin.register:", o.toString(t), "can not be downgraded to", o.toString(e)) : e !== t && r.warn("Plugin.register:", o.toString(e), "is already registered to different plugin object")
                                    } else o._registry[e.name] = e;
                                    return e
                                }, o.resolve = function(e) {
                                    return o._registry[o.dependencyParse(e).name]
                                }, o.toString = function(e) {
                                    return "string" == typeof e ? e : (e.name || "anonymous") + "@" + (e.version || e.range || "0.0.0")
                                }, o.isPlugin = function(e) {
                                    return e && e.name && e.version && e.install
                                }, o.isUsed = function(e, t) {
                                    return e.used.indexOf(t) > -1
                                }, o.isFor = function(e, t) {
                                    var n = e.for && o.dependencyParse(e.for);
                                    return !e.for || t.name === n.name && o.versionSatisfies(t.version, n.range)
                                }, o.use = function(e, t) {
                                    if (e.uses = (e.uses || []).concat(t || []), 0 !== e.uses.length) {
                                        for (var n = o.dependencies(e), i = r.topologicalSort(n), s = [], a = 0; a < i.length; a += 1)
                                            if (i[a] !== e.name) {
                                                var c = o.resolve(i[a]);
                                                c ? o.isUsed(e, c.name) || (o.isFor(c, e) || (r.warn("Plugin.use:", o.toString(c), "is for", c.for, "but installed on", o.toString(e) + "."), c._warned = !0), c.install ? c.install(e) : (r.warn("Plugin.use:", o.toString(c), "does not specify an install function."), c._warned = !0), c._warned ? (s.push("🔶 " + o.toString(c)), delete c._warned) : s.push("✅ " + o.toString(c)), e.used.push(c.name)) : s.push("❌ " + i[a])
                                            }
                                        s.length > 0 && r.info(s.join("  "))
                                    } else r.warn("Plugin.use:", o.toString(e), "does not specify any dependencies to install.")
                                }, o.dependencies = function(e, t) {
                                    var n = o.dependencyParse(e),
                                        i = n.name;
                                    if (!(i in (t = t || {}))) {
                                        e = o.resolve(e) || e, t[i] = r.map(e.uses || [], function(t) {
                                            o.isPlugin(t) && o.register(t);
                                            var i = o.dependencyParse(t),
                                                s = o.resolve(t);
                                            return s && !o.versionSatisfies(s.version, i.range) ? (r.warn("Plugin.dependencies:", o.toString(s), "does not satisfy", o.toString(i), "used by", o.toString(n) + "."), s._warned = !0, e._warned = !0) : s || (r.warn("Plugin.dependencies:", o.toString(t), "used by", o.toString(n), "could not be resolved."), e._warned = !0), i.name
                                        });
                                        for (var s = 0; s < t[i].length; s += 1) o.dependencies(t[i][s], t);
                                        return t
                                    }
                                }, o.dependencyParse = function(e) {
                                    if (r.isString(e)) {
                                        return /^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-]+)?))?$/.test(e) || r.warn("Plugin.dependencyParse:", e, "is not a valid dependency string."), {
                                            name: e.split("@")[0],
                                            range: e.split("@")[1] || "*"
                                        }
                                    }
                                    return {
                                        name: e.name,
                                        range: e.range || e.version
                                    }
                                }, o.versionParse = function(e) {
                                    /^\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-]+)?$/.test(e) || r.warn("Plugin.versionParse:", e, "is not a valid version or range.");
                                    var t = e.split("-");
                                    e = t[0];
                                    var n = isNaN(Number(e[0])),
                                        o = n ? e.substr(1) : e,
                                        i = r.map(o.split("."), function(e) {
                                            return Number(e)
                                        });
                                    return {
                                        isRange: n,
                                        version: o,
                                        range: e,
                                        operator: n ? e[0] : "",
                                        parts: i,
                                        prerelease: t[1],
                                        number: 1e8 * i[0] + 1e4 * i[1] + i[2]
                                    }
                                }, o.versionSatisfies = function(e, t) {
                                    t = t || "*";
                                    var n = o.versionParse(t),
                                        r = n.parts,
                                        i = o.versionParse(e),
                                        s = i.parts;
                                    if (n.isRange) {
                                        if ("*" === n.operator || "*" === e) return !0;
                                        if ("~" === n.operator) return s[0] === r[0] && s[1] === r[1] && s[2] >= r[2];
                                        if ("^" === n.operator) return r[0] > 0 ? s[0] === r[0] && i.number >= n.number : r[1] > 0 ? s[1] === r[1] && s[2] >= r[2] : s[2] === r[2]
                                    }
                                    return e === t || "*" === e
                                }
                            }()
                        }, {
                            "./Common": 14
                        }],
                        21: [function(e, t, n) {
                            var o = {};
                            t.exports = o;
                            var r = e("./Events"),
                                i = e("./Engine"),
                                s = e("./Common");
                            ! function() {
                                var e, t, n;
                                ("undefined" != typeof window && (e = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame, t = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame), e) || (e = function(e) {
                                    n = setTimeout(function() {
                                        e(s.now())
                                    }, 1e3 / 60)
                                }, t = function() {
                                    clearTimeout(n)
                                });
                                o.create = function(e) {
                                    var t = s.extend({
                                        fps: 60,
                                        correction: 1,
                                        deltaSampleSize: 60,
                                        counterTimestamp: 0,
                                        frameCounter: 0,
                                        deltaHistory: [],
                                        timePrev: null,
                                        timeScalePrev: 1,
                                        frameRequestId: null,
                                        isFixed: !1,
                                        enabled: !0
                                    }, e);
                                    return t.delta = t.delta || 1e3 / t.fps, t.deltaMin = t.deltaMin || 1e3 / t.fps, t.deltaMax = t.deltaMax || 1e3 / (.5 * t.fps), t.fps = 1e3 / t.delta, t
                                }, o.run = function(t, n) {
                                    return void 0 !== t.positionIterations && (n = t, t = o.create()),
                                        function r(i) {
                                            t.frameRequestId = e(r), i && t.enabled && o.tick(t, n, i)
                                        }(), t
                                }, o.tick = function(e, t, n) {
                                    var o, s = t.timing,
                                        a = 1,
                                        c = {
                                            timestamp: s.timestamp
                                        };
                                    r.trigger(e, "beforeTick", c), r.trigger(t, "beforeTick", c), e.isFixed ? o = e.delta : (o = n - e.timePrev || e.delta, e.timePrev = n, e.deltaHistory.push(o), e.deltaHistory = e.deltaHistory.slice(-e.deltaSampleSize), o = (o = (o = Math.min.apply(null, e.deltaHistory)) < e.deltaMin ? e.deltaMin : o) > e.deltaMax ? e.deltaMax : o, a = o / e.delta, e.delta = o), 0 !== e.timeScalePrev && (a *= s.timeScale / e.timeScalePrev), 0 === s.timeScale && (a = 0), e.timeScalePrev = s.timeScale, e.correction = a, e.frameCounter += 1, n - e.counterTimestamp >= 1e3 && (e.fps = e.frameCounter * ((n - e.counterTimestamp) / 1e3), e.counterTimestamp = n, e.frameCounter = 0), r.trigger(e, "tick", c), r.trigger(t, "tick", c), t.world.isModified && t.render && t.render.controller && t.render.controller.clear && t.render.controller.clear(t.render), r.trigger(e, "beforeUpdate", c), i.update(t, o, a), r.trigger(e, "afterUpdate", c), t.render && t.render.controller && (r.trigger(e, "beforeRender", c), r.trigger(t, "beforeRender", c), t.render.controller.world(t.render), r.trigger(e, "afterRender", c), r.trigger(t, "afterRender", c)), r.trigger(e, "afterTick", c), r.trigger(t, "afterTick", c)
                                }, o.stop = function(e) {
                                    t(e.frameRequestId)
                                }, o.start = function(e, t) {
                                    o.run(e, t)
                                }
                            }()
                        }, {
                            "./Common": 14,
                            "./Engine": 15,
                            "./Events": 16
                        }],
                        22: [function(e, t, n) {
                            var o = {};
                            t.exports = o;
                            var r = e("./Events");
                            ! function() {
                                o._motionWakeThreshold = .18, o._motionSleepThreshold = .08, o._minBias = .9, o.update = function(e, t) {
                                    for (var n = t * t * t, r = 0; r < e.length; r++) {
                                        var i = e[r],
                                            s = i.speed * i.speed + i.angularSpeed * i.angularSpeed;
                                        if (0 === i.force.x && 0 === i.force.y) {
                                            var a = Math.min(i.motion, s),
                                                c = Math.max(i.motion, s);
                                            i.motion = o._minBias * a + (1 - o._minBias) * c, i.sleepThreshold > 0 && i.motion < o._motionSleepThreshold * n ? (i.sleepCounter += 1, i.sleepCounter >= i.sleepThreshold && o.set(i, !0)) : i.sleepCounter > 0 && (i.sleepCounter -= 1)
                                        } else o.set(i, !1)
                                    }
                                }, o.afterCollisions = function(e, t) {
                                    for (var n = t * t * t, r = 0; r < e.length; r++) {
                                        var i = e[r];
                                        if (i.isActive) {
                                            var s = i.collision,
                                                a = s.bodyA.parent,
                                                c = s.bodyB.parent;
                                            if (!(a.isSleeping && c.isSleeping || a.isStatic || c.isStatic) && (a.isSleeping || c.isSleeping)) {
                                                var u = a.isSleeping && !a.isStatic ? a : c,
                                                    l = u === a ? c : a;
                                                !u.isStatic && l.motion > o._motionWakeThreshold * n && o.set(u, !1)
                                            }
                                        }
                                    }
                                }, o.set = function(e, t) {
                                    var n = e.isSleeping;
                                    t ? (e.isSleeping = !0, e.sleepCounter = e.sleepThreshold, e.positionImpulse.x = 0, e.positionImpulse.y = 0, e.positionPrev.x = e.position.x, e.positionPrev.y = e.position.y, e.anglePrev = e.angle, e.speed = 0, e.angularSpeed = 0, e.motion = 0, n || r.trigger(e, "sleepStart")) : (e.isSleeping = !1, e.sleepCounter = 0, n && r.trigger(e, "sleepEnd"))
                                }
                            }()
                        }, {
                            "./Events": 16
                        }],
                        23: [function(e, t, n) {
                            var o = {};
                            t.exports = o;
                            var r, i = e("../geometry/Vertices"),
                                s = e("../core/Common"),
                                a = e("../body/Body"),
                                c = e("../geometry/Bounds"),
                                u = e("../geometry/Vector");
                            ! function() {
                                o.rectangle = function(e, t, n, o, r) {
                                    r = r || {};
                                    var c = {
                                        label: "Rectangle Body",
                                        position: {
                                            x: e,
                                            y: t
                                        },
                                        vertices: i.fromPath("L 0 0 L " + n + " 0 L " + n + " " + o + " L 0 " + o)
                                    };
                                    if (r.chamfer) {
                                        var u = r.chamfer;
                                        c.vertices = i.chamfer(c.vertices, u.radius, u.quality, u.qualityMin, u.qualityMax), delete r.chamfer
                                    }
                                    return a.create(s.extend({}, c, r))
                                }, o.trapezoid = function(e, t, n, o, r, c) {
                                    c = c || {};
                                    var u, l = (1 - 2 * (r *= .5)) * n,
                                        d = n * r,
                                        p = d + l,
                                        h = p + d;
                                    u = r < .5 ? "L 0 0 L " + d + " " + -o + " L " + p + " " + -o + " L " + h + " 0" : "L 0 0 L " + p + " " + -o + " L " + h + " 0";
                                    var f = {
                                        label: "Trapezoid Body",
                                        position: {
                                            x: e,
                                            y: t
                                        },
                                        vertices: i.fromPath(u)
                                    };
                                    if (c.chamfer) {
                                        var g = c.chamfer;
                                        f.vertices = i.chamfer(f.vertices, g.radius, g.quality, g.qualityMin, g.qualityMax), delete c.chamfer
                                    }
                                    return a.create(s.extend({}, f, c))
                                }, o.circle = function(e, t, n, r, i) {
                                    r = r || {};
                                    var a = {
                                        label: "Circle Body",
                                        circleRadius: n
                                    };
                                    i = i || 25;
                                    var c = Math.ceil(Math.max(10, Math.min(i, n)));
                                    return c % 2 == 1 && (c += 1), o.polygon(e, t, c, n, s.extend({}, a, r))
                                }, o.polygon = function(e, t, n, r, c) {
                                    if (c = c || {}, n < 3) return o.circle(e, t, r, c);
                                    for (var u = 2 * Math.PI / n, l = "", d = .5 * u, p = 0; p < n; p += 1) {
                                        var h = d + p * u,
                                            f = Math.cos(h) * r,
                                            g = Math.sin(h) * r;
                                        l += "L " + f.toFixed(3) + " " + g.toFixed(3) + " "
                                    }
                                    var y = {
                                        label: "Polygon Body",
                                        position: {
                                            x: e,
                                            y: t
                                        },
                                        vertices: i.fromPath(l)
                                    };
                                    if (c.chamfer) {
                                        var m = c.chamfer;
                                        y.vertices = i.chamfer(y.vertices, m.radius, m.quality, m.qualityMin, m.qualityMax), delete c.chamfer
                                    }
                                    return a.create(s.extend({}, y, c))
                                }, o.fromVertices = function(e, t, n, o, l, d, p) {
                                    var h, f, g, y, m, v, S, w, x;
                                    for (r || (r = s._requireGlobal("decomp", "poly-decomp")), o = o || {}, f = [], l = void 0 !== l && l, d = void 0 !== d ? d : .01, p = void 0 !== p ? p : 10, r || s.warn("Bodies.fromVertices: poly-decomp.js required. Could not decompose vertices. Fallback to convex hull."), s.isArray(n[0]) || (n = [n]), w = 0; w < n.length; w += 1)
                                        if (y = n[w], (g = i.isConvex(y)) || !r) y = g ? i.clockwiseSort(y) : i.hull(y), f.push({
                                            position: {
                                                x: e,
                                                y: t
                                            },
                                            vertices: y
                                        });
                                        else {
                                            var b = y.map(function(e) {
                                                return [e.x, e.y]
                                            });
                                            r.makeCCW(b), !1 !== d && r.removeCollinearPoints(b, d);
                                            var _ = r.quickDecomp(b);
                                            for (m = 0; m < _.length; m++) {
                                                var P = _[m],
                                                    C = P.map(function(e) {
                                                        return {
                                                            x: e[0],
                                                            y: e[1]
                                                        }
                                                    });
                                                p > 0 && i.area(C) < p || f.push({
                                                    position: i.centre(C),
                                                    vertices: C
                                                })
                                            }
                                        }
                                    for (m = 0; m < f.length; m++) f[m] = a.create(s.extend(f[m], o));
                                    if (l) {
                                        for (m = 0; m < f.length; m++) {
                                            var A = f[m];
                                            for (v = m + 1; v < f.length; v++) {
                                                var V = f[v];
                                                if (c.overlaps(A.bounds, V.bounds)) {
                                                    var T = A.vertices,
                                                        G = V.vertices;
                                                    for (S = 0; S < A.vertices.length; S++)
                                                        for (x = 0; x < V.vertices.length; x++) {
                                                            var E = u.magnitudeSquared(u.sub(T[(S + 1) % T.length], G[x])),
                                                                L = u.magnitudeSquared(u.sub(T[S], G[(x + 1) % G.length]));
                                                            E < 5 && L < 5 && (T[S].isInternal = !0, G[x].isInternal = !0)
                                                        }
                                                }
                                            }
                                        }
                                    }
                                    return f.length > 1 ? (h = a.create(s.extend({
                                        parts: f.slice(0)
                                    }, o)), a.setPosition(h, {
                                        x: e,
                                        y: t
                                    }), h) : f[0]
                                }
                            }()
                        }, {
                            "../body/Body": 1,
                            "../core/Common": 14,
                            "../geometry/Bounds": 26,
                            "../geometry/Vector": 28,
                            "../geometry/Vertices": 29
                        }],
                        24: [function(e, t, n) {
                            var o = {};
                            t.exports = o;
                            var r = e("../body/Composite"),
                                i = e("../constraint/Constraint"),
                                s = e("../core/Common"),
                                a = e("../body/Body"),
                                c = e("./Bodies");
                            ! function() {
                                o.stack = function(e, t, n, o, i, s, c) {
                                    for (var u, l = r.create({
                                            label: "Stack"
                                        }), d = e, p = t, h = 0, f = 0; f < o; f++) {
                                        for (var g = 0, y = 0; y < n; y++) {
                                            var m = c(d, p, y, f, u, h);
                                            if (m) {
                                                var v = m.bounds.max.y - m.bounds.min.y,
                                                    S = m.bounds.max.x - m.bounds.min.x;
                                                v > g && (g = v), a.translate(m, {
                                                    x: .5 * S,
                                                    y: .5 * v
                                                }), d = m.bounds.max.x + i, r.addBody(l, m), u = m, h += 1
                                            } else d += i
                                        }
                                        p += g + s, d = e
                                    }
                                    return l
                                }, o.chain = function(e, t, n, o, a, c) {
                                    for (var u = e.bodies, l = 1; l < u.length; l++) {
                                        var d = u[l - 1],
                                            p = u[l],
                                            h = d.bounds.max.y - d.bounds.min.y,
                                            f = d.bounds.max.x - d.bounds.min.x,
                                            g = p.bounds.max.y - p.bounds.min.y,
                                            y = p.bounds.max.x - p.bounds.min.x,
                                            m = {
                                                bodyA: d,
                                                pointA: {
                                                    x: f * t,
                                                    y: h * n
                                                },
                                                bodyB: p,
                                                pointB: {
                                                    x: y * o,
                                                    y: g * a
                                                }
                                            },
                                            v = s.extend(m, c);
                                        r.addConstraint(e, i.create(v))
                                    }
                                    return e.label += " Chain", e
                                }, o.mesh = function(e, t, n, o, a) {
                                    var c, u, l, d, p, h = e.bodies;
                                    for (c = 0; c < n; c++) {
                                        for (u = 1; u < t; u++) l = h[u - 1 + c * t], d = h[u + c * t], r.addConstraint(e, i.create(s.extend({
                                            bodyA: l,
                                            bodyB: d
                                        }, a)));
                                        if (c > 0)
                                            for (u = 0; u < t; u++) l = h[u + (c - 1) * t], d = h[u + c * t], r.addConstraint(e, i.create(s.extend({
                                                bodyA: l,
                                                bodyB: d
                                            }, a))), o && u > 0 && (p = h[u - 1 + (c - 1) * t], r.addConstraint(e, i.create(s.extend({
                                                bodyA: p,
                                                bodyB: d
                                            }, a)))), o && u < t - 1 && (p = h[u + 1 + (c - 1) * t], r.addConstraint(e, i.create(s.extend({
                                                bodyA: p,
                                                bodyB: d
                                            }, a))))
                                    }
                                    return e.label += " Mesh", e
                                }, o.pyramid = function(e, t, n, r, i, s, c) {
                                    return o.stack(e, t, n, r, i, s, function(t, o, s, u, l, d) {
                                        var p = Math.min(r, Math.ceil(n / 2)),
                                            h = l ? l.bounds.max.x - l.bounds.min.x : 0;
                                        if (!(u > p)) {
                                            var f = u = p - u,
                                                g = n - 1 - u;
                                            if (!(s < f || s > g)) {
                                                1 === d && a.translate(l, {
                                                    x: (s + (n % 2 == 1 ? 1 : -1)) * h,
                                                    y: 0
                                                });
                                                var y = l ? s * h : 0;
                                                return c(e + y + s * i, o, s, u, l, d)
                                            }
                                        }
                                    })
                                }, o.newtonsCradle = function(e, t, n, o, s) {
                                    for (var a = r.create({
                                            label: "Newtons Cradle"
                                        }), u = 0; u < n; u++) {
                                        var l = c.circle(e + u * (1.9 * o), t + s, o, {
                                                inertia: 1 / 0,
                                                restitution: 1,
                                                friction: 0,
                                                frictionAir: 1e-4,
                                                slop: 1
                                            }),
                                            d = i.create({
                                                pointA: {
                                                    x: e + u * (1.9 * o),
                                                    y: t
                                                },
                                                bodyB: l
                                            });
                                        r.addBody(a, l), r.addConstraint(a, d)
                                    }
                                    return a
                                }, o.car = function(e, t, n, o, s) {
                                    var u = a.nextGroup(!0),
                                        l = .5 * -n + 20,
                                        d = .5 * n - 20,
                                        p = r.create({
                                            label: "Car"
                                        }),
                                        h = c.rectangle(e, t, n, o, {
                                            collisionFilter: {
                                                group: u
                                            },
                                            chamfer: {
                                                radius: .5 * o
                                            },
                                            density: 2e-4
                                        }),
                                        f = c.circle(e + l, t + 0, s, {
                                            collisionFilter: {
                                                group: u
                                            },
                                            friction: .8
                                        }),
                                        g = c.circle(e + d, t + 0, s, {
                                            collisionFilter: {
                                                group: u
                                            },
                                            friction: .8
                                        }),
                                        y = i.create({
                                            bodyB: h,
                                            pointB: {
                                                x: l,
                                                y: 0
                                            },
                                            bodyA: f,
                                            stiffness: 1,
                                            length: 0
                                        }),
                                        m = i.create({
                                            bodyB: h,
                                            pointB: {
                                                x: d,
                                                y: 0
                                            },
                                            bodyA: g,
                                            stiffness: 1,
                                            length: 0
                                        });
                                    return r.addBody(p, h), r.addBody(p, f), r.addBody(p, g), r.addConstraint(p, y), r.addConstraint(p, m), p
                                }, o.softBody = function(e, t, n, r, i, a, u, l, d, p) {
                                    d = s.extend({
                                        inertia: 1 / 0
                                    }, d), p = s.extend({
                                        stiffness: .2,
                                        render: {
                                            type: "line",
                                            anchors: !1
                                        }
                                    }, p);
                                    var h = o.stack(e, t, n, r, i, a, function(e, t) {
                                        return c.circle(e, t, l, d)
                                    });
                                    return o.mesh(h, n, r, u, p), h.label = "Soft Body", h
                                }
                            }()
                        }, {
                            "../body/Body": 1,
                            "../body/Composite": 2,
                            "../constraint/Constraint": 12,
                            "../core/Common": 14,
                            "./Bodies": 23
                        }],
                        25: [function(e, t, n) {
                            var o = {};
                            t.exports = o;
                            var r = e("../geometry/Vector"),
                                i = e("../core/Common");
                            ! function() {
                                o.fromVertices = function(e) {
                                    for (var t = {}, n = 0; n < e.length; n++) {
                                        var o = (n + 1) % e.length,
                                            s = r.normalise({
                                                x: e[o].y - e[n].y,
                                                y: e[n].x - e[o].x
                                            }),
                                            a = 0 === s.y ? 1 / 0 : s.x / s.y;
                                        a = a.toFixed(3).toString(), t[a] = s
                                    }
                                    return i.values(t)
                                }, o.rotate = function(e, t) {
                                    if (0 !== t)
                                        for (var n = Math.cos(t), o = Math.sin(t), r = 0; r < e.length; r++) {
                                            var i, s = e[r];
                                            i = s.x * n - s.y * o, s.y = s.x * o + s.y * n, s.x = i
                                        }
                                }
                            }()
                        }, {
                            "../core/Common": 14,
                            "../geometry/Vector": 28
                        }],
                        26: [function(e, t, n) {
                            var o = {};
                            t.exports = o,
                                function() {
                                    o.create = function(e) {
                                        var t = {
                                            min: {
                                                x: 0,
                                                y: 0
                                            },
                                            max: {
                                                x: 0,
                                                y: 0
                                            }
                                        };
                                        return e && o.update(t, e), t
                                    }, o.update = function(e, t, n) {
                                        e.min.x = 1 / 0, e.max.x = -1 / 0, e.min.y = 1 / 0, e.max.y = -1 / 0;
                                        for (var o = 0; o < t.length; o++) {
                                            var r = t[o];
                                            r.x > e.max.x && (e.max.x = r.x), r.x < e.min.x && (e.min.x = r.x), r.y > e.max.y && (e.max.y = r.y), r.y < e.min.y && (e.min.y = r.y)
                                        }
                                        n && (n.x > 0 ? e.max.x += n.x : e.min.x += n.x, n.y > 0 ? e.max.y += n.y : e.min.y += n.y)
                                    }, o.contains = function(e, t) {
                                        return t.x >= e.min.x && t.x <= e.max.x && t.y >= e.min.y && t.y <= e.max.y
                                    }, o.overlaps = function(e, t) {
                                        return e.min.x <= t.max.x && e.max.x >= t.min.x && e.max.y >= t.min.y && e.min.y <= t.max.y
                                    }, o.translate = function(e, t) {
                                        e.min.x += t.x, e.max.x += t.x, e.min.y += t.y, e.max.y += t.y
                                    }, o.shift = function(e, t) {
                                        var n = e.max.x - e.min.x,
                                            o = e.max.y - e.min.y;
                                        e.min.x = t.x, e.max.x = t.x + n, e.min.y = t.y, e.max.y = t.y + o
                                    }
                                }()
                        }, {}],
                        27: [function(e, t, n) {
                            var o = {};
                            t.exports = o;
                            e("../geometry/Bounds");
                            var r = e("../core/Common");
                            ! function() {
                                o.pathToVertices = function(e, t) {
                                    "undefined" == typeof window || "SVGPathSeg" in window || r.warn("Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.");
                                    var n, i, s, a, c, u, l, d, p, h, f, g, y = [],
                                        m = 0,
                                        v = 0,
                                        S = 0;
                                    t = t || 15;
                                    var w = function(e, t, n) {
                                            var o = n % 2 == 1 && n > 1;
                                            if (!p || e != p.x || t != p.y) {
                                                p && o ? (f = p.x, g = p.y) : (f = 0, g = 0);
                                                var r = {
                                                    x: f + e,
                                                    y: g + t
                                                };
                                                !o && p || (p = r), y.push(r), v = f + e, S = g + t
                                            }
                                        },
                                        x = function(e) {
                                            var t = e.pathSegTypeAsLetter.toUpperCase();
                                            if ("Z" !== t) {
                                                switch (t) {
                                                    case "M":
                                                    case "L":
                                                    case "T":
                                                    case "C":
                                                    case "S":
                                                    case "Q":
                                                        v = e.x, S = e.y;
                                                        break;
                                                    case "H":
                                                        v = e.x;
                                                        break;
                                                    case "V":
                                                        S = e.y
                                                }
                                                w(v, S, e.pathSegType)
                                            }
                                        };
                                    for (o._svgPathToAbsolute(e), s = e.getTotalLength(), u = [], n = 0; n < e.pathSegList.numberOfItems; n += 1) u.push(e.pathSegList.getItem(n));
                                    for (l = u.concat(); m < s;) {
                                        if (h = e.getPathSegAtLength(m), (c = u[h]) != d) {
                                            for (; l.length && l[0] != c;) x(l.shift());
                                            d = c
                                        }
                                        switch (c.pathSegTypeAsLetter.toUpperCase()) {
                                            case "C":
                                            case "T":
                                            case "S":
                                            case "Q":
                                            case "A":
                                                a = e.getPointAtLength(m), w(a.x, a.y, 0)
                                        }
                                        m += t
                                    }
                                    for (n = 0, i = l.length; n < i; ++n) x(l[n]);
                                    return y
                                }, o._svgPathToAbsolute = function(e) {
                                    for (var t, n, o, r, i, s, a = e.pathSegList, c = 0, u = 0, l = a.numberOfItems, d = 0; d < l; ++d) {
                                        var p = a.getItem(d),
                                            h = p.pathSegTypeAsLetter;
                                        if (/[MLHVCSQTA]/.test(h)) "x" in p && (c = p.x), "y" in p && (u = p.y);
                                        else switch ("x1" in p && (o = c + p.x1), "x2" in p && (i = c + p.x2), "y1" in p && (r = u + p.y1), "y2" in p && (s = u + p.y2), "x" in p && (c += p.x), "y" in p && (u += p.y), h) {
                                            case "m":
                                                a.replaceItem(e.createSVGPathSegMovetoAbs(c, u), d);
                                                break;
                                            case "l":
                                                a.replaceItem(e.createSVGPathSegLinetoAbs(c, u), d);
                                                break;
                                            case "h":
                                                a.replaceItem(e.createSVGPathSegLinetoHorizontalAbs(c), d);
                                                break;
                                            case "v":
                                                a.replaceItem(e.createSVGPathSegLinetoVerticalAbs(u), d);
                                                break;
                                            case "c":
                                                a.replaceItem(e.createSVGPathSegCurvetoCubicAbs(c, u, o, r, i, s), d);
                                                break;
                                            case "s":
                                                a.replaceItem(e.createSVGPathSegCurvetoCubicSmoothAbs(c, u, i, s), d);
                                                break;
                                            case "q":
                                                a.replaceItem(e.createSVGPathSegCurvetoQuadraticAbs(c, u, o, r), d);
                                                break;
                                            case "t":
                                                a.replaceItem(e.createSVGPathSegCurvetoQuadraticSmoothAbs(c, u), d);
                                                break;
                                            case "a":
                                                a.replaceItem(e.createSVGPathSegArcAbs(c, u, p.r1, p.r2, p.angle, p.largeArcFlag, p.sweepFlag), d);
                                                break;
                                            case "z":
                                            case "Z":
                                                c = t, u = n
                                        }
                                        "M" != h && "m" != h || (t = c, n = u)
                                    }
                                }
                            }()
                        }, {
                            "../core/Common": 14,
                            "../geometry/Bounds": 26
                        }],
                        28: [function(e, t, n) {
                            var o = {};
                            t.exports = o,
                                function() {
                                    o.create = function(e, t) {
                                        return {
                                            x: e || 0,
                                            y: t || 0
                                        }
                                    }, o.clone = function(e) {
                                        return {
                                            x: e.x,
                                            y: e.y
                                        }
                                    }, o.magnitude = function(e) {
                                        return Math.sqrt(e.x * e.x + e.y * e.y)
                                    }, o.magnitudeSquared = function(e) {
                                        return e.x * e.x + e.y * e.y
                                    }, o.rotate = function(e, t, n) {
                                        var o = Math.cos(t),
                                            r = Math.sin(t);
                                        n || (n = {});
                                        var i = e.x * o - e.y * r;
                                        return n.y = e.x * r + e.y * o, n.x = i, n
                                    }, o.rotateAbout = function(e, t, n, o) {
                                        var r = Math.cos(t),
                                            i = Math.sin(t);
                                        o || (o = {});
                                        var s = n.x + ((e.x - n.x) * r - (e.y - n.y) * i);
                                        return o.y = n.y + ((e.x - n.x) * i + (e.y - n.y) * r), o.x = s, o
                                    }, o.normalise = function(e) {
                                        var t = o.magnitude(e);
                                        return 0 === t ? {
                                            x: 0,
                                            y: 0
                                        } : {
                                            x: e.x / t,
                                            y: e.y / t
                                        }
                                    }, o.dot = function(e, t) {
                                        return e.x * t.x + e.y * t.y
                                    }, o.cross = function(e, t) {
                                        return e.x * t.y - e.y * t.x
                                    }, o.cross3 = function(e, t, n) {
                                        return (t.x - e.x) * (n.y - e.y) - (t.y - e.y) * (n.x - e.x)
                                    }, o.add = function(e, t, n) {
                                        return n || (n = {}), n.x = e.x + t.x, n.y = e.y + t.y, n
                                    }, o.sub = function(e, t, n) {
                                        return n || (n = {}), n.x = e.x - t.x, n.y = e.y - t.y, n
                                    }, o.mult = function(e, t) {
                                        return {
                                            x: e.x * t,
                                            y: e.y * t
                                        }
                                    }, o.div = function(e, t) {
                                        return {
                                            x: e.x / t,
                                            y: e.y / t
                                        }
                                    }, o.perp = function(e, t) {
                                        return {
                                            x: (t = !0 === t ? -1 : 1) * -e.y,
                                            y: t * e.x
                                        }
                                    }, o.neg = function(e) {
                                        return {
                                            x: -e.x,
                                            y: -e.y
                                        }
                                    }, o.angle = function(e, t) {
                                        return Math.atan2(t.y - e.y, t.x - e.x)
                                    }, o._temp = [o.create(), o.create(), o.create(), o.create(), o.create(), o.create()]
                                }()
                        }, {}],
                        29: [function(e, t, n) {
                            var o = {};
                            t.exports = o;
                            var r = e("../geometry/Vector"),
                                i = e("../core/Common");
                            ! function() {
                                o.create = function(e, t) {
                                    for (var n = [], o = 0; o < e.length; o++) {
                                        var r = e[o],
                                            i = {
                                                x: r.x,
                                                y: r.y,
                                                index: o,
                                                body: t,
                                                isInternal: !1
                                            };
                                        n.push(i)
                                    }
                                    return n
                                }, o.fromPath = function(e, t) {
                                    var n = [];
                                    return e.replace(/L?\s*([\-\d\.e]+)[\s,]*([\-\d\.e]+)*/gi, function(e, t, o) {
                                        n.push({
                                            x: parseFloat(t),
                                            y: parseFloat(o)
                                        })
                                    }), o.create(n, t)
                                }, o.centre = function(e) {
                                    for (var t, n, i, s = o.area(e, !0), a = {
                                            x: 0,
                                            y: 0
                                        }, c = 0; c < e.length; c++) i = (c + 1) % e.length, t = r.cross(e[c], e[i]), n = r.mult(r.add(e[c], e[i]), t), a = r.add(a, n);
                                    return r.div(a, 6 * s)
                                }, o.mean = function(e) {
                                    for (var t = {
                                            x: 0,
                                            y: 0
                                        }, n = 0; n < e.length; n++) t.x += e[n].x, t.y += e[n].y;
                                    return r.div(t, e.length)
                                }, o.area = function(e, t) {
                                    for (var n = 0, o = e.length - 1, r = 0; r < e.length; r++) n += (e[o].x - e[r].x) * (e[o].y + e[r].y), o = r;
                                    return t ? n / 2 : Math.abs(n) / 2
                                }, o.inertia = function(e, t) {
                                    for (var n, o, i = 0, s = 0, a = e, c = 0; c < a.length; c++) o = (c + 1) % a.length, n = Math.abs(r.cross(a[o], a[c])), i += n * (r.dot(a[o], a[o]) + r.dot(a[o], a[c]) + r.dot(a[c], a[c])), s += n;
                                    return t / 6 * (i / s)
                                }, o.translate = function(e, t, n) {
                                    var o;
                                    if (n)
                                        for (o = 0; o < e.length; o++) e[o].x += t.x * n, e[o].y += t.y * n;
                                    else
                                        for (o = 0; o < e.length; o++) e[o].x += t.x, e[o].y += t.y;
                                    return e
                                }, o.rotate = function(e, t, n) {
                                    if (0 !== t) {
                                        for (var o = Math.cos(t), r = Math.sin(t), i = 0; i < e.length; i++) {
                                            var s = e[i],
                                                a = s.x - n.x,
                                                c = s.y - n.y;
                                            s.x = n.x + (a * o - c * r), s.y = n.y + (a * r + c * o)
                                        }
                                        return e
                                    }
                                }, o.contains = function(e, t) {
                                    for (var n = 0; n < e.length; n++) {
                                        var o = e[n],
                                            r = e[(n + 1) % e.length];
                                        if ((t.x - o.x) * (r.y - o.y) + (t.y - o.y) * (o.x - r.x) > 0) return !1
                                    }
                                    return !0
                                }, o.scale = function(e, t, n, i) {
                                    if (1 === t && 1 === n) return e;
                                    var s, a;
                                    i = i || o.centre(e);
                                    for (var c = 0; c < e.length; c++) s = e[c], a = r.sub(s, i), e[c].x = i.x + a.x * t, e[c].y = i.y + a.y * n;
                                    return e
                                }, o.chamfer = function(e, t, n, o, s) {
                                    t = "number" == typeof t ? [t] : t || [8], n = void 0 !== n ? n : -1, o = o || 2, s = s || 14;
                                    for (var a = [], c = 0; c < e.length; c++) {
                                        var u = e[c - 1 >= 0 ? c - 1 : e.length - 1],
                                            l = e[c],
                                            d = e[(c + 1) % e.length],
                                            p = t[c < t.length ? c : t.length - 1];
                                        if (0 !== p) {
                                            var h = r.normalise({
                                                    x: l.y - u.y,
                                                    y: u.x - l.x
                                                }),
                                                f = r.normalise({
                                                    x: d.y - l.y,
                                                    y: l.x - d.x
                                                }),
                                                g = Math.sqrt(2 * Math.pow(p, 2)),
                                                y = r.mult(i.clone(h), p),
                                                m = r.normalise(r.mult(r.add(h, f), .5)),
                                                v = r.sub(l, r.mult(m, g)),
                                                S = n; - 1 === n && (S = 1.75 * Math.pow(p, .32)), (S = i.clamp(S, o, s)) % 2 == 1 && (S += 1);
                                            for (var w = Math.acos(r.dot(h, f)), x = w / S, b = 0; b < S; b++) a.push(r.add(r.rotate(y, x * b), v))
                                        } else a.push(l)
                                    }
                                    return a
                                }, o.clockwiseSort = function(e) {
                                    var t = o.mean(e);
                                    return e.sort(function(e, n) {
                                        return r.angle(t, e) - r.angle(t, n)
                                    }), e
                                }, o.isConvex = function(e) {
                                    var t, n, o, r, i = 0,
                                        s = e.length;
                                    if (s < 3) return null;
                                    for (t = 0; t < s; t++)
                                        if (o = (t + 2) % s, r = (e[n = (t + 1) % s].x - e[t].x) * (e[o].y - e[n].y), (r -= (e[n].y - e[t].y) * (e[o].x - e[n].x)) < 0 ? i |= 1 : r > 0 && (i |= 2), 3 === i) return !1;
                                    return 0 !== i || null
                                }, o.hull = function(e) {
                                    var t, n, o = [],
                                        i = [];
                                    for ((e = e.slice(0)).sort(function(e, t) {
                                            var n = e.x - t.x;
                                            return 0 !== n ? n : e.y - t.y
                                        }), n = 0; n < e.length; n += 1) {
                                        for (t = e[n]; i.length >= 2 && r.cross3(i[i.length - 2], i[i.length - 1], t) <= 0;) i.pop();
                                        i.push(t)
                                    }
                                    for (n = e.length - 1; n >= 0; n -= 1) {
                                        for (t = e[n]; o.length >= 2 && r.cross3(o[o.length - 2], o[o.length - 1], t) <= 0;) o.pop();
                                        o.push(t)
                                    }
                                    return o.pop(), i.pop(), o.concat(i)
                                }
                            }()
                        }, {
                            "../core/Common": 14,
                            "../geometry/Vector": 28
                        }],
                        30: [function(e, t, n) {
                            var o = t.exports = e("../core/Matter");
                            o.Body = e("../body/Body"), o.Composite = e("../body/Composite"), o.World = e("../body/World"), o.Contact = e("../collision/Contact"), o.Detector = e("../collision/Detector"), o.Grid = e("../collision/Grid"), o.Pairs = e("../collision/Pairs"), o.Pair = e("../collision/Pair"), o.Query = e("../collision/Query"), o.Resolver = e("../collision/Resolver"), o.SAT = e("../collision/SAT"), o.Constraint = e("../constraint/Constraint"), o.MouseConstraint = e("../constraint/MouseConstraint"), o.Common = e("../core/Common"), o.Engine = e("../core/Engine"), o.Events = e("../core/Events"), o.Mouse = e("../core/Mouse"), o.Runner = e("../core/Runner"), o.Sleeping = e("../core/Sleeping"), o.Plugin = e("../core/Plugin"), o.Bodies = e("../factory/Bodies"), o.Composites = e("../factory/Composites"), o.Axes = e("../geometry/Axes"), o.Bounds = e("../geometry/Bounds"), o.Svg = e("../geometry/Svg"), o.Vector = e("../geometry/Vector"), o.Vertices = e("../geometry/Vertices"), o.Render = e("../render/Render"), o.RenderPixi = e("../render/RenderPixi"), o.World.add = o.Composite.add, o.World.remove = o.Composite.remove, o.World.addComposite = o.Composite.addComposite, o.World.addBody = o.Composite.addBody, o.World.addConstraint = o.Composite.addConstraint, o.World.clear = o.Composite.clear, o.Engine.run = o.Runner.run
                        }, {
                            "../body/Body": 1,
                            "../body/Composite": 2,
                            "../body/World": 3,
                            "../collision/Contact": 4,
                            "../collision/Detector": 5,
                            "../collision/Grid": 6,
                            "../collision/Pair": 7,
                            "../collision/Pairs": 8,
                            "../collision/Query": 9,
                            "../collision/Resolver": 10,
                            "../collision/SAT": 11,
                            "../constraint/Constraint": 12,
                            "../constraint/MouseConstraint": 13,
                            "../core/Common": 14,
                            "../core/Engine": 15,
                            "../core/Events": 16,
                            "../core/Matter": 17,
                            "../core/Metrics": 18,
                            "../core/Mouse": 19,
                            "../core/Plugin": 20,
                            "../core/Runner": 21,
                            "../core/Sleeping": 22,
                            "../factory/Bodies": 23,
                            "../factory/Composites": 24,
                            "../geometry/Axes": 25,
                            "../geometry/Bounds": 26,
                            "../geometry/Svg": 27,
                            "../geometry/Vector": 28,
                            "../geometry/Vertices": 29,
                            "../render/Render": 31,
                            "../render/RenderPixi": 32
                        }],
                        31: [function(e, t, n) {
                            var o = {};
                            t.exports = o;
                            var r = e("../core/Common"),
                                i = e("../body/Composite"),
                                s = e("../geometry/Bounds"),
                                a = e("../core/Events"),
                                c = e("../collision/Grid"),
                                u = e("../geometry/Vector"),
                                l = e("../core/Mouse");
                            ! function() {
                                var e, t;
                                "undefined" != typeof window && (e = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
                                    window.setTimeout(function() {
                                        e(r.now())
                                    }, 1e3 / 60)
                                }, t = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame), o.create = function(e) {
                                    var t = {
                                            controller: o,
                                            engine: null,
                                            element: null,
                                            canvas: null,
                                            mouse: null,
                                            frameRequestId: null,
                                            options: {
                                                width: 800,
                                                height: 600,
                                                pixelRatio: 1,
                                                background: "#18181d",
                                                wireframeBackground: "#0f0f13",
                                                hasBounds: !!e.bounds,
                                                enabled: !0,
                                                wireframes: !0,
                                                showSleeping: !0,
                                                showDebug: !1,
                                                showBroadphase: !1,
                                                showBounds: !1,
                                                showVelocity: !1,
                                                showCollisions: !1,
                                                showSeparations: !1,
                                                showAxes: !1,
                                                showPositions: !1,
                                                showAngleIndicator: !1,
                                                showIds: !1,
                                                showShadows: !1,
                                                showVertexNumbers: !1,
                                                showConvexHulls: !1,
                                                showInternalEdges: !1,
                                                showMousePosition: !1
                                            }
                                        },
                                        i = r.extend(t, e);
                                    return i.canvas && (i.canvas.width = i.options.width || i.canvas.width, i.canvas.height = i.options.height || i.canvas.height), i.mouse = e.mouse, i.engine = e.engine, i.canvas = i.canvas || n(i.options.width, i.options.height), i.context = i.canvas.getContext("2d"), i.textures = {}, i.bounds = i.bounds || {
                                        min: {
                                            x: 0,
                                            y: 0
                                        },
                                        max: {
                                            x: i.canvas.width,
                                            y: i.canvas.height
                                        }
                                    }, 1 !== i.options.pixelRatio && o.setPixelRatio(i, i.options.pixelRatio), r.isElement(i.element) ? i.element.appendChild(i.canvas) : i.canvas.parentNode || r.log("Render.create: options.element was undefined, render.canvas was created but not appended", "warn"), i
                                }, o.run = function(t) {
                                    ! function n(r) {
                                        t.frameRequestId = e(n), o.world(t)
                                    }()
                                }, o.stop = function(e) {
                                    t(e.frameRequestId)
                                }, o.setPixelRatio = function(e, t) {
                                    var n = e.options,
                                        o = e.canvas;
                                    "auto" === t && (t = d(o)), n.pixelRatio = t, o.setAttribute("data-pixel-ratio", t), o.width = n.width * t, o.height = n.height * t, o.style.width = n.width + "px", o.style.height = n.height + "px", e.context.scale(t, t)
                                }, o.lookAt = function(e, t, n, o) {
                                    o = void 0 === o || o, t = r.isArray(t) ? t : [t], n = n || {
                                        x: 0,
                                        y: 0
                                    };
                                    for (var i = {
                                            min: {
                                                x: 1 / 0,
                                                y: 1 / 0
                                            },
                                            max: {
                                                x: -1 / 0,
                                                y: -1 / 0
                                            }
                                        }, s = 0; s < t.length; s += 1) {
                                        var a = t[s],
                                            c = a.bounds ? a.bounds.min : a.min || a.position || a,
                                            u = a.bounds ? a.bounds.max : a.max || a.position || a;
                                        c && u && (c.x < i.min.x && (i.min.x = c.x), u.x > i.max.x && (i.max.x = u.x), c.y < i.min.y && (i.min.y = c.y), u.y > i.max.y && (i.max.y = u.y))
                                    }
                                    var d = i.max.x - i.min.x + 2 * n.x,
                                        p = i.max.y - i.min.y + 2 * n.y,
                                        h = e.canvas.height,
                                        f = e.canvas.width,
                                        g = f / h,
                                        y = d / p,
                                        m = 1,
                                        v = 1;
                                    y > g ? v = y / g : m = g / y, e.options.hasBounds = !0, e.bounds.min.x = i.min.x, e.bounds.max.x = i.min.x + d * m, e.bounds.min.y = i.min.y, e.bounds.max.y = i.min.y + p * v, o && (e.bounds.min.x += .5 * d - d * m * .5, e.bounds.max.x += .5 * d - d * m * .5, e.bounds.min.y += .5 * p - p * v * .5, e.bounds.max.y += .5 * p - p * v * .5), e.bounds.min.x -= n.x, e.bounds.max.x -= n.x, e.bounds.min.y -= n.y, e.bounds.max.y -= n.y, e.mouse && (l.setScale(e.mouse, {
                                        x: (e.bounds.max.x - e.bounds.min.x) / e.canvas.width,
                                        y: (e.bounds.max.y - e.bounds.min.y) / e.canvas.height
                                    }), l.setOffset(e.mouse, e.bounds.min))
                                }, o.startViewTransform = function(e) {
                                    var t = e.bounds.max.x - e.bounds.min.x,
                                        n = e.bounds.max.y - e.bounds.min.y,
                                        o = t / e.options.width,
                                        r = n / e.options.height;
                                    e.context.scale(1 / o, 1 / r), e.context.translate(-e.bounds.min.x, -e.bounds.min.y)
                                }, o.endViewTransform = function(e) {
                                    e.context.setTransform(e.options.pixelRatio, 0, 0, e.options.pixelRatio, 0, 0)
                                }, o.world = function(e) {
                                    var t, n = e.engine,
                                        r = n.world,
                                        d = e.canvas,
                                        p = e.context,
                                        f = e.options,
                                        g = i.allBodies(r),
                                        y = i.allConstraints(r),
                                        m = f.wireframes ? f.wireframeBackground : f.background,
                                        v = [],
                                        S = [],
                                        w = {
                                            timestamp: n.timing.timestamp
                                        };
                                    if (a.trigger(e, "beforeRender", w), e.currentBackground !== m && h(e, m), p.globalCompositeOperation = "source-in", p.fillStyle = "transparent", p.fillRect(0, 0, d.width, d.height), p.globalCompositeOperation = "source-over", f.hasBounds) {
                                        for (t = 0; t < g.length; t++) {
                                            var x = g[t];
                                            s.overlaps(x.bounds, e.bounds) && v.push(x)
                                        }
                                        for (t = 0; t < y.length; t++) {
                                            var b = y[t],
                                                _ = b.bodyA,
                                                P = b.bodyB,
                                                C = b.pointA,
                                                A = b.pointB;
                                            _ && (C = u.add(_.position, b.pointA)), P && (A = u.add(P.position, b.pointB)), C && A && ((s.contains(e.bounds, C) || s.contains(e.bounds, A)) && S.push(b))
                                        }
                                        o.startViewTransform(e), e.mouse && (l.setScale(e.mouse, {
                                            x: (e.bounds.max.x - e.bounds.min.x) / e.canvas.width,
                                            y: (e.bounds.max.y - e.bounds.min.y) / e.canvas.height
                                        }), l.setOffset(e.mouse, e.bounds.min))
                                    } else S = y, v = g;
                                    !f.wireframes || n.enableSleeping && f.showSleeping ? o.bodies(e, v, p) : (f.showConvexHulls && o.bodyConvexHulls(e, v, p), o.bodyWireframes(e, v, p)), f.showBounds && o.bodyBounds(e, v, p), (f.showAxes || f.showAngleIndicator) && o.bodyAxes(e, v, p), f.showPositions && o.bodyPositions(e, v, p), f.showVelocity && o.bodyVelocity(e, v, p), f.showIds && o.bodyIds(e, v, p), f.showSeparations && o.separations(e, n.pairs.list, p), f.showCollisions && o.collisions(e, n.pairs.list, p), f.showVertexNumbers && o.vertexNumbers(e, v, p), f.showMousePosition && o.mousePosition(e, e.mouse, p), o.constraints(S, p), f.showBroadphase && n.broadphase.controller === c && o.grid(e, n.broadphase, p), f.showDebug && o.debug(e, p), f.hasBounds && o.endViewTransform(e), a.trigger(e, "afterRender", w)
                                }, o.debug = function(e, t) {
                                    var n = t,
                                        o = e.engine,
                                        r = o.world,
                                        s = o.metrics,
                                        a = e.options;
                                    i.allBodies(r);
                                    if (o.timing.timestamp - (e.debugTimestamp || 0) >= 500) {
                                        var c = "";
                                        s.timing && (c += "fps: " + Math.round(s.timing.fps) + "    "), e.debugString = c, e.debugTimestamp = o.timing.timestamp
                                    }
                                    if (e.debugString) {
                                        n.font = "12px Arial", a.wireframes ? n.fillStyle = "rgba(255,255,255,0.5)" : n.fillStyle = "rgba(0,0,0,0.5)";
                                        for (var u = e.debugString.split("\n"), l = 0; l < u.length; l++) n.fillText(u[l], 50, 50 + 18 * l)
                                    }
                                }, o.constraints = function(e, t) {
                                    for (var n = t, o = 0; o < e.length; o++) {
                                        var i = e[o];
                                        if (i.render.visible && i.pointA && i.pointB) {
                                            var s, a, c = i.bodyA,
                                                l = i.bodyB;
                                            if (s = c ? u.add(c.position, i.pointA) : i.pointA, "pin" === i.render.type) n.beginPath(), n.arc(s.x, s.y, 3, 0, 2 * Math.PI), n.closePath();
                                            else {
                                                if (a = l ? u.add(l.position, i.pointB) : i.pointB, n.beginPath(), n.moveTo(s.x, s.y), "spring" === i.render.type)
                                                    for (var d, p = u.sub(a, s), h = u.perp(u.normalise(p)), f = Math.ceil(r.clamp(i.length / 5, 12, 20)), g = 1; g < f; g += 1) d = g % 2 == 0 ? 1 : -1, n.lineTo(s.x + p.x * (g / f) + h.x * d * 4, s.y + p.y * (g / f) + h.y * d * 4);
                                                n.lineTo(a.x, a.y)
                                            }
                                            i.render.lineWidth && (n.lineWidth = i.render.lineWidth, n.strokeStyle = i.render.strokeStyle, n.stroke()), i.render.anchors && (n.fillStyle = i.render.strokeStyle, n.beginPath(), n.arc(s.x, s.y, 3, 0, 2 * Math.PI), n.arc(a.x, a.y, 3, 0, 2 * Math.PI), n.closePath(), n.fill())
                                        }
                                    }
                                }, o.bodyShadows = function(e, t, n) {
                                    for (var o = n, r = (e.engine, 0); r < t.length; r++) {
                                        var i = t[r];
                                        if (i.render.visible) {
                                            if (i.circleRadius) o.beginPath(), o.arc(i.position.x, i.position.y, i.circleRadius, 0, 2 * Math.PI), o.closePath();
                                            else {
                                                o.beginPath(), o.moveTo(i.vertices[0].x, i.vertices[0].y);
                                                for (var s = 1; s < i.vertices.length; s++) o.lineTo(i.vertices[s].x, i.vertices[s].y);
                                                o.closePath()
                                            }
                                            var a = i.position.x - .5 * e.options.width,
                                                c = i.position.y - .2 * e.options.height,
                                                u = Math.abs(a) + Math.abs(c);
                                            o.shadowColor = "rgba(0,0,0,0.15)", o.shadowOffsetX = .05 * a, o.shadowOffsetY = .05 * c, o.shadowBlur = 1 + 12 * Math.min(1, u / 1e3), o.fill(), o.shadowColor = null, o.shadowOffsetX = null, o.shadowOffsetY = null, o.shadowBlur = null
                                        }
                                    }
                                }, o.bodies = function(e, t, n) {
                                    var o, r, i, s, a = n,
                                        c = (e.engine, e.options),
                                        u = c.showInternalEdges || !c.wireframes;
                                    for (i = 0; i < t.length; i++)
                                        if ((o = t[i]).render.visible)
                                            for (s = o.parts.length > 1 ? 1 : 0; s < o.parts.length; s++)
                                                if ((r = o.parts[s]).render.visible) {
                                                    if (c.showSleeping && o.isSleeping ? a.globalAlpha = .5 * r.render.opacity : 1 !== r.render.opacity && (a.globalAlpha = r.render.opacity), r.render.sprite && r.render.sprite.texture && !c.wireframes) {
                                                        var l = r.render.sprite,
                                                            d = p(e, l.texture);
                                                        a.translate(r.position.x, r.position.y), a.rotate(r.angle), a.drawImage(d, d.width * -l.xOffset * l.xScale, d.height * -l.yOffset * l.yScale, d.width * l.xScale, d.height * l.yScale), a.rotate(-r.angle), a.translate(-r.position.x, -r.position.y)
                                                    } else {
                                                        if (r.circleRadius) a.beginPath(), a.arc(r.position.x, r.position.y, r.circleRadius, 0, 2 * Math.PI);
                                                        else {
                                                            a.beginPath(), a.moveTo(r.vertices[0].x, r.vertices[0].y);
                                                            for (var h = 1; h < r.vertices.length; h++) !r.vertices[h - 1].isInternal || u ? a.lineTo(r.vertices[h].x, r.vertices[h].y) : a.moveTo(r.vertices[h].x, r.vertices[h].y), r.vertices[h].isInternal && !u && a.moveTo(r.vertices[(h + 1) % r.vertices.length].x, r.vertices[(h + 1) % r.vertices.length].y);
                                                            a.lineTo(r.vertices[0].x, r.vertices[0].y), a.closePath()
                                                        }
                                                        c.wireframes ? (a.lineWidth = 1, a.strokeStyle = "#bbb", a.stroke()) : (a.fillStyle = r.render.fillStyle, r.render.lineWidth && (a.lineWidth = r.render.lineWidth, a.strokeStyle = r.render.strokeStyle, a.stroke()), a.fill())
                                                    }
                                                    a.globalAlpha = 1
                                                }
                                }, o.bodyWireframes = function(e, t, n) {
                                    var o, r, i, s, a, c = n,
                                        u = e.options.showInternalEdges;
                                    for (c.beginPath(), i = 0; i < t.length; i++)
                                        if ((o = t[i]).render.visible)
                                            for (a = o.parts.length > 1 ? 1 : 0; a < o.parts.length; a++) {
                                                for (r = o.parts[a], c.moveTo(r.vertices[0].x, r.vertices[0].y), s = 1; s < r.vertices.length; s++) !r.vertices[s - 1].isInternal || u ? c.lineTo(r.vertices[s].x, r.vertices[s].y) : c.moveTo(r.vertices[s].x, r.vertices[s].y), r.vertices[s].isInternal && !u && c.moveTo(r.vertices[(s + 1) % r.vertices.length].x, r.vertices[(s + 1) % r.vertices.length].y);
                                                c.lineTo(r.vertices[0].x, r.vertices[0].y)
                                            }
                                    c.lineWidth = 1, c.strokeStyle = "#bbb", c.stroke()
                                }, o.bodyConvexHulls = function(e, t, n) {
                                    var o, r, i, s = n;
                                    for (s.beginPath(), r = 0; r < t.length; r++)
                                        if ((o = t[r]).render.visible && 1 !== o.parts.length) {
                                            for (s.moveTo(o.vertices[0].x, o.vertices[0].y), i = 1; i < o.vertices.length; i++) s.lineTo(o.vertices[i].x, o.vertices[i].y);
                                            s.lineTo(o.vertices[0].x, o.vertices[0].y)
                                        }
                                    s.lineWidth = 1, s.strokeStyle = "rgba(255,255,255,0.2)", s.stroke()
                                }, o.vertexNumbers = function(e, t, n) {
                                    var o, r, i, s = n;
                                    for (o = 0; o < t.length; o++) {
                                        var a = t[o].parts;
                                        for (i = a.length > 1 ? 1 : 0; i < a.length; i++) {
                                            var c = a[i];
                                            for (r = 0; r < c.vertices.length; r++) s.fillStyle = "rgba(255,255,255,0.2)", s.fillText(o + "_" + r, c.position.x + .8 * (c.vertices[r].x - c.position.x), c.position.y + .8 * (c.vertices[r].y - c.position.y))
                                        }
                                    }
                                }, o.mousePosition = function(e, t, n) {
                                    var o = n;
                                    o.fillStyle = "rgba(255,255,255,0.8)", o.fillText(t.position.x + "  " + t.position.y, t.position.x + 5, t.position.y - 5)
                                }, o.bodyBounds = function(e, t, n) {
                                    var o = n,
                                        r = (e.engine, e.options);
                                    o.beginPath();
                                    for (var i = 0; i < t.length; i++) {
                                        var s = t[i];
                                        if (s.render.visible)
                                            for (var a = t[i].parts, c = a.length > 1 ? 1 : 0; c < a.length; c++) {
                                                var u = a[c];
                                                o.rect(u.bounds.min.x, u.bounds.min.y, u.bounds.max.x - u.bounds.min.x, u.bounds.max.y - u.bounds.min.y)
                                            }
                                    }
                                    r.wireframes ? o.strokeStyle = "rgba(255,255,255,0.08)" : o.strokeStyle = "rgba(0,0,0,0.1)", o.lineWidth = 1, o.stroke()
                                }, o.bodyAxes = function(e, t, n) {
                                    var o, r, i, s, a = n,
                                        c = (e.engine, e.options);
                                    for (a.beginPath(), r = 0; r < t.length; r++) {
                                        var u = t[r],
                                            l = u.parts;
                                        if (u.render.visible)
                                            if (c.showAxes)
                                                for (i = l.length > 1 ? 1 : 0; i < l.length; i++)
                                                    for (o = l[i], s = 0; s < o.axes.length; s++) {
                                                        var d = o.axes[s];
                                                        a.moveTo(o.position.x, o.position.y), a.lineTo(o.position.x + 20 * d.x, o.position.y + 20 * d.y)
                                                    } else
                                                        for (i = l.length > 1 ? 1 : 0; i < l.length; i++)
                                                            for (o = l[i], s = 0; s < o.axes.length; s++) a.moveTo(o.position.x, o.position.y), a.lineTo((o.vertices[0].x + o.vertices[o.vertices.length - 1].x) / 2, (o.vertices[0].y + o.vertices[o.vertices.length - 1].y) / 2)
                                    }
                                    c.wireframes ? (a.strokeStyle = "indianred", a.lineWidth = 1) : (a.strokeStyle = "rgba(255, 255, 255, 0.4)", a.globalCompositeOperation = "overlay", a.lineWidth = 2), a.stroke(), a.globalCompositeOperation = "source-over"
                                }, o.bodyPositions = function(e, t, n) {
                                    var o, r, i, s, a = n,
                                        c = (e.engine, e.options);
                                    for (a.beginPath(), i = 0; i < t.length; i++)
                                        if ((o = t[i]).render.visible)
                                            for (s = 0; s < o.parts.length; s++) r = o.parts[s], a.arc(r.position.x, r.position.y, 3, 0, 2 * Math.PI, !1), a.closePath();
                                    for (c.wireframes ? a.fillStyle = "indianred" : a.fillStyle = "rgba(0,0,0,0.5)", a.fill(), a.beginPath(), i = 0; i < t.length; i++)(o = t[i]).render.visible && (a.arc(o.positionPrev.x, o.positionPrev.y, 2, 0, 2 * Math.PI, !1), a.closePath());
                                    a.fillStyle = "rgba(255,165,0,0.8)", a.fill()
                                }, o.bodyVelocity = function(e, t, n) {
                                    var o = n;
                                    o.beginPath();
                                    for (var r = 0; r < t.length; r++) {
                                        var i = t[r];
                                        i.render.visible && (o.moveTo(i.position.x, i.position.y), o.lineTo(i.position.x + 2 * (i.position.x - i.positionPrev.x), i.position.y + 2 * (i.position.y - i.positionPrev.y)))
                                    }
                                    o.lineWidth = 3, o.strokeStyle = "cornflowerblue", o.stroke()
                                }, o.bodyIds = function(e, t, n) {
                                    var o, r, i = n;
                                    for (o = 0; o < t.length; o++)
                                        if (t[o].render.visible) {
                                            var s = t[o].parts;
                                            for (r = s.length > 1 ? 1 : 0; r < s.length; r++) {
                                                var a = s[r];
                                                i.font = "12px Arial", i.fillStyle = "rgba(255,255,255,0.5)", i.fillText(a.id, a.position.x + 10, a.position.y - 10)
                                            }
                                        }
                                }, o.collisions = function(e, t, n) {
                                    var o, r, i, s, a = n,
                                        c = e.options;
                                    for (a.beginPath(), i = 0; i < t.length; i++)
                                        if ((o = t[i]).isActive)
                                            for (r = o.collision, s = 0; s < o.activeContacts.length; s++) {
                                                var u = o.activeContacts[s],
                                                    l = u.vertex;
                                                a.rect(l.x - 1.5, l.y - 1.5, 3.5, 3.5)
                                            }
                                    for (c.wireframes ? a.fillStyle = "rgba(255,255,255,0.7)" : a.fillStyle = "orange", a.fill(), a.beginPath(), i = 0; i < t.length; i++)
                                        if ((o = t[i]).isActive && (r = o.collision, o.activeContacts.length > 0)) {
                                            var d = o.activeContacts[0].vertex.x,
                                                p = o.activeContacts[0].vertex.y;
                                            2 === o.activeContacts.length && (d = (o.activeContacts[0].vertex.x + o.activeContacts[1].vertex.x) / 2, p = (o.activeContacts[0].vertex.y + o.activeContacts[1].vertex.y) / 2), r.bodyB === r.supports[0].body || !0 === r.bodyA.isStatic ? a.moveTo(d - 8 * r.normal.x, p - 8 * r.normal.y) : a.moveTo(d + 8 * r.normal.x, p + 8 * r.normal.y), a.lineTo(d, p)
                                        }
                                    c.wireframes ? a.strokeStyle = "rgba(255,165,0,0.7)" : a.strokeStyle = "orange", a.lineWidth = 1, a.stroke()
                                }, o.separations = function(e, t, n) {
                                    var o, r, i, s, a, c = n,
                                        u = e.options;
                                    for (c.beginPath(), a = 0; a < t.length; a++)
                                        if ((o = t[a]).isActive) {
                                            r = o.collision, i = r.bodyA;
                                            var l = 1;
                                            (s = r.bodyB).isStatic || i.isStatic || (l = .5), s.isStatic && (l = 0), c.moveTo(s.position.x, s.position.y), c.lineTo(s.position.x - r.penetration.x * l, s.position.y - r.penetration.y * l), l = 1, s.isStatic || i.isStatic || (l = .5), i.isStatic && (l = 0), c.moveTo(i.position.x, i.position.y), c.lineTo(i.position.x + r.penetration.x * l, i.position.y + r.penetration.y * l)
                                        }
                                    u.wireframes ? c.strokeStyle = "rgba(255,165,0,0.5)" : c.strokeStyle = "orange", c.stroke()
                                }, o.grid = function(e, t, n) {
                                    var o = n,
                                        i = e.options;
                                    i.wireframes ? o.strokeStyle = "rgba(255,180,0,0.1)" : o.strokeStyle = "rgba(255,180,0,0.5)", o.beginPath();
                                    for (var s = r.keys(t.buckets), a = 0; a < s.length; a++) {
                                        var c = s[a];
                                        if (!(t.buckets[c].length < 2)) {
                                            var u = c.split(/C|R/);
                                            o.rect(.5 + parseInt(u[1], 10) * t.bucketWidth, .5 + parseInt(u[2], 10) * t.bucketHeight, t.bucketWidth, t.bucketHeight)
                                        }
                                    }
                                    o.lineWidth = 1, o.stroke()
                                }, o.inspector = function(e, t) {
                                    e.engine;
                                    var n, o = e.selected,
                                        r = e.render,
                                        i = r.options;
                                    if (i.hasBounds) {
                                        var s = r.bounds.max.x - r.bounds.min.x,
                                            a = r.bounds.max.y - r.bounds.min.y,
                                            c = s / r.options.width,
                                            u = a / r.options.height;
                                        t.scale(1 / c, 1 / u), t.translate(-r.bounds.min.x, -r.bounds.min.y)
                                    }
                                    for (var l = 0; l < o.length; l++) {
                                        var d = o[l].data;
                                        switch (t.translate(.5, .5), t.lineWidth = 1, t.strokeStyle = "rgba(255,165,0,0.9)", t.setLineDash([1, 2]), d.type) {
                                            case "body":
                                                n = d.bounds, t.beginPath(), t.rect(Math.floor(n.min.x - 3), Math.floor(n.min.y - 3), Math.floor(n.max.x - n.min.x + 6), Math.floor(n.max.y - n.min.y + 6)), t.closePath(), t.stroke();
                                                break;
                                            case "constraint":
                                                var p = d.pointA;
                                                d.bodyA && (p = d.pointB), t.beginPath(), t.arc(p.x, p.y, 10, 0, 2 * Math.PI), t.closePath(), t.stroke()
                                        }
                                        t.setLineDash([]), t.translate(-.5, -.5)
                                    }
                                    null !== e.selectStart && (t.translate(.5, .5), t.lineWidth = 1, t.strokeStyle = "rgba(255,165,0,0.6)", t.fillStyle = "rgba(255,165,0,0.1)", n = e.selectBounds, t.beginPath(), t.rect(Math.floor(n.min.x), Math.floor(n.min.y), Math.floor(n.max.x - n.min.x), Math.floor(n.max.y - n.min.y)), t.closePath(), t.stroke(), t.fill(), t.translate(-.5, -.5)), i.hasBounds && t.setTransform(1, 0, 0, 1, 0, 0)
                                };
                                var n = function(e, t) {
                                        var n = document.createElement("canvas");
                                        return n.width = e, n.height = t, n.oncontextmenu = function() {
                                            return !1
                                        }, n.onselectstart = function() {
                                            return !1
                                        }, n
                                    },
                                    d = function(e) {
                                        var t = e.getContext("2d"),
                                            n = window.devicePixelRatio || 1,
                                            o = t.webkitBackingStorePixelRatio || t.mozBackingStorePixelRatio || t.msBackingStorePixelRatio || t.oBackingStorePixelRatio || t.backingStorePixelRatio || 1;
                                        return n / o
                                    },
                                    p = function(e, t) {
                                        var n = e.textures[t];
                                        return n || ((n = e.textures[t] = new Image).src = t, n)
                                    },
                                    h = function(e, t) {
                                        var n = t;
                                        /(jpg|gif|png)$/.test(t) && (n = "url(" + t + ")"), e.canvas.style.background = n, e.canvas.style.backgroundSize = "contain", e.currentBackground = t
                                    }
                            }()
                        }, {
                            "../body/Composite": 2,
                            "../collision/Grid": 6,
                            "../core/Common": 14,
                            "../core/Events": 16,
                            "../core/Mouse": 19,
                            "../geometry/Bounds": 26,
                            "../geometry/Vector": 28
                        }],
                        32: [function(e, t, n) {
                            var o = {};
                            t.exports = o;
                            var r = e("../geometry/Bounds"),
                                i = e("../body/Composite"),
                                s = e("../core/Common"),
                                a = e("../core/Events"),
                                c = e("../geometry/Vector");
                            ! function() {
                                var e, t;
                                "undefined" != typeof window && (e = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
                                    window.setTimeout(function() {
                                        e(s.now())
                                    }, 1e3 / 60)
                                }, t = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame), o.create = function(e) {
                                    s.warn("RenderPixi.create: Matter.RenderPixi is deprecated (see docs)");
                                    var t = {
                                            controller: o,
                                            engine: null,
                                            element: null,
                                            frameRequestId: null,
                                            canvas: null,
                                            renderer: null,
                                            container: null,
                                            spriteContainer: null,
                                            pixiOptions: null,
                                            options: {
                                                width: 800,
                                                height: 600,
                                                background: "#fafafa",
                                                wireframeBackground: "#222",
                                                hasBounds: !1,
                                                enabled: !0,
                                                wireframes: !0,
                                                showSleeping: !0,
                                                showDebug: !1,
                                                showBroadphase: !1,
                                                showBounds: !1,
                                                showVelocity: !1,
                                                showCollisions: !1,
                                                showAxes: !1,
                                                showPositions: !1,
                                                showAngleIndicator: !1,
                                                showIds: !1,
                                                showShadows: !1
                                            }
                                        },
                                        n = s.extend(t, e),
                                        r = !n.options.wireframes && "transparent" === n.options.background;
                                    return n.pixiOptions = n.pixiOptions || {
                                        view: n.canvas,
                                        transparent: r,
                                        antialias: !0,
                                        backgroundColor: e.background
                                    }, n.mouse = e.mouse, n.engine = e.engine, n.renderer = n.renderer || new PIXI.WebGLRenderer(n.options.width, n.options.height, n.pixiOptions), n.container = n.container || new PIXI.Container, n.spriteContainer = n.spriteContainer || new PIXI.Container, n.canvas = n.canvas || n.renderer.view, n.bounds = n.bounds || {
                                        min: {
                                            x: 0,
                                            y: 0
                                        },
                                        max: {
                                            x: n.options.width,
                                            y: n.options.height
                                        }
                                    }, a.on(n.engine, "beforeUpdate", function() {
                                        o.clear(n)
                                    }), n.textures = {}, n.sprites = {}, n.primitives = {}, n.container.addChild(n.spriteContainer), s.isElement(n.element) ? n.element.appendChild(n.canvas) : s.warn('No "render.element" passed, "render.canvas" was not inserted into document.'), n.canvas.oncontextmenu = function() {
                                        return !1
                                    }, n.canvas.onselectstart = function() {
                                        return !1
                                    }, n
                                }, o.run = function(t) {
                                    ! function n(r) {
                                        t.frameRequestId = e(n), o.world(t)
                                    }()
                                }, o.stop = function(e) {
                                    t(e.frameRequestId)
                                }, o.clear = function(e) {
                                    for (var t = e.container, n = e.spriteContainer; t.children[0];) t.removeChild(t.children[0]);
                                    for (; n.children[0];) n.removeChild(n.children[0]);
                                    var o = e.sprites["bg-0"];
                                    e.textures = {}, e.sprites = {}, e.primitives = {}, e.sprites["bg-0"] = o, o && t.addChildAt(o, 0), e.container.addChild(e.spriteContainer), e.currentBackground = null, t.scale.set(1, 1), t.position.set(0, 0)
                                }, o.setBackground = function(e, t) {
                                    if (e.currentBackground !== t) {
                                        var n = t.indexOf && -1 !== t.indexOf("#"),
                                            o = e.sprites["bg-0"];
                                        if (n) {
                                            var r = s.colorToNumber(t);
                                            e.renderer.backgroundColor = r, o && e.container.removeChild(o)
                                        } else if (!o) {
                                            var i = l(e, t);
                                            (o = e.sprites["bg-0"] = new PIXI.Sprite(i)).position.x = 0, o.position.y = 0, e.container.addChildAt(o, 0)
                                        }
                                        e.currentBackground = t
                                    }
                                }, o.world = function(e) {
                                    var t, n = e.engine,
                                        s = n.world,
                                        a = e.renderer,
                                        u = e.container,
                                        l = e.options,
                                        d = i.allBodies(s),
                                        p = i.allConstraints(s),
                                        h = [];
                                    l.wireframes ? o.setBackground(e, l.wireframeBackground) : o.setBackground(e, l.background);
                                    var f = e.bounds.max.x - e.bounds.min.x,
                                        g = e.bounds.max.y - e.bounds.min.y,
                                        y = f / e.options.width,
                                        m = g / e.options.height;
                                    if (l.hasBounds) {
                                        for (t = 0; t < d.length; t++) {
                                            var v = d[t];
                                            v.render.sprite.visible = r.overlaps(v.bounds, e.bounds)
                                        }
                                        for (t = 0; t < p.length; t++) {
                                            var S = p[t],
                                                w = S.bodyA,
                                                x = S.bodyB,
                                                b = S.pointA,
                                                _ = S.pointB;
                                            w && (b = c.add(w.position, S.pointA)), x && (_ = c.add(x.position, S.pointB)), b && _ && ((r.contains(e.bounds, b) || r.contains(e.bounds, _)) && h.push(S))
                                        }
                                        u.scale.set(1 / y, 1 / m), u.position.set(-e.bounds.min.x * (1 / y), -e.bounds.min.y * (1 / m))
                                    } else h = p;
                                    for (t = 0; t < d.length; t++) o.body(e, d[t]);
                                    for (t = 0; t < h.length; t++) o.constraint(e, h[t]);
                                    a.render(u)
                                }, o.constraint = function(e, t) {
                                    e.engine;
                                    var n = t.bodyA,
                                        o = t.bodyB,
                                        r = t.pointA,
                                        i = t.pointB,
                                        a = e.container,
                                        c = t.render,
                                        u = "c-" + t.id,
                                        l = e.primitives[u];
                                    l || (l = e.primitives[u] = new PIXI.Graphics), c.visible && t.pointA && t.pointB ? (-1 === s.indexOf(a.children, l) && a.addChild(l), l.clear(), l.beginFill(0, 0), l.lineStyle(c.lineWidth, s.colorToNumber(c.strokeStyle), 1), n ? l.moveTo(n.position.x + r.x, n.position.y + r.y) : l.moveTo(r.x, r.y), o ? l.lineTo(o.position.x + i.x, o.position.y + i.y) : l.lineTo(i.x, i.y), l.endFill()) : l.clear()
                                }, o.body = function(e, t) {
                                    e.engine;
                                    var o = t.render;
                                    if (o.visible)
                                        if (o.sprite && o.sprite.texture) {
                                            var r = "b-" + t.id,
                                                i = e.sprites[r],
                                                a = e.spriteContainer;
                                            i || (i = e.sprites[r] = n(e, t)), -1 === s.indexOf(a.children, i) && a.addChild(i), i.position.x = t.position.x, i.position.y = t.position.y, i.rotation = t.angle, i.scale.x = o.sprite.xScale || 1, i.scale.y = o.sprite.yScale || 1
                                        } else {
                                            var c = "b-" + t.id,
                                                l = e.primitives[c],
                                                d = e.container;
                                            l || ((l = e.primitives[c] = u(e, t)).initialAngle = t.angle), -1 === s.indexOf(d.children, l) && d.addChild(l), l.position.x = t.position.x, l.position.y = t.position.y, l.rotation = t.angle - l.initialAngle
                                        }
                                };
                                var n = function(e, t) {
                                        var n = t.render,
                                            o = n.sprite.texture,
                                            r = l(e, o),
                                            i = new PIXI.Sprite(r);
                                        return i.anchor.x = t.render.sprite.xOffset, i.anchor.y = t.render.sprite.yOffset, i
                                    },
                                    u = function(e, t) {
                                        var n, o = t.render,
                                            r = e.options,
                                            i = new PIXI.Graphics,
                                            a = s.colorToNumber(o.fillStyle),
                                            c = s.colorToNumber(o.strokeStyle),
                                            u = s.colorToNumber(o.strokeStyle),
                                            l = s.colorToNumber("#bbb"),
                                            d = s.colorToNumber("#CD5C5C");
                                        i.clear();
                                        for (var p = t.parts.length > 1 ? 1 : 0; p < t.parts.length; p++) {
                                            n = t.parts[p], r.wireframes ? (i.beginFill(0, 0), i.lineStyle(1, l, 1)) : (i.beginFill(a, 1), i.lineStyle(o.lineWidth, c, 1)), i.moveTo(n.vertices[0].x - t.position.x, n.vertices[0].y - t.position.y);
                                            for (var h = 1; h < n.vertices.length; h++) i.lineTo(n.vertices[h].x - t.position.x, n.vertices[h].y - t.position.y);
                                            i.lineTo(n.vertices[0].x - t.position.x, n.vertices[0].y - t.position.y), i.endFill(), (r.showAngleIndicator || r.showAxes) && (i.beginFill(0, 0), r.wireframes ? i.lineStyle(1, d, 1) : i.lineStyle(1, u), i.moveTo(n.position.x - t.position.x, n.position.y - t.position.y), i.lineTo((n.vertices[0].x + n.vertices[n.vertices.length - 1].x) / 2 - t.position.x, (n.vertices[0].y + n.vertices[n.vertices.length - 1].y) / 2 - t.position.y), i.endFill())
                                        }
                                        return i
                                    },
                                    l = function(e, t) {
                                        var n = e.textures[t];
                                        return n || (n = e.textures[t] = PIXI.Texture.fromImage(t)), n
                                    }
                            }()
                        }, {
                            "../body/Composite": 2,
                            "../core/Common": 14,
                            "../core/Events": 16,
                            "../geometry/Bounds": 26,
                            "../geometry/Vector": 28
                        }]
                    }, {}, [30])(30)
                }()
            }()
        }).call(this, n("./node_modules/webpack/buildin/global.js"))
    },
    "./node_modules/webpack/buildin/global.js": function(e, t) {
        var n;
        n = function() {
            return this
        }();
        try {
            n = n || Function("return this")() || (0, eval)("this")
        } catch (e) {
            "object" == typeof window && (n = window)
        }
        e.exports = n
    },
    "./source/css/application.scss": function(e, t) {},
    "./source/img/cats/cat_1.png": function(e, t, n) {
        e.exports = n.p + "img/cat_111f3ec5d85f4234b356c8dbf316f9e60.png"
    },
    "./source/img/cats/cat_2.png": function(e, t, n) {
        e.exports = n.p + "img/cat_255331c7005e24ac9ba7031f8b7002371.png"
    },
    "./source/img/cats/cat_3.png": function(e, t, n) {
        e.exports = n.p + "img/cat_3299d7d0951d624a4375687a89b3e91a3.png"
    },
    "./source/img/cats/cat_4.png": function(e, t, n) {
        e.exports = n.p + "img/cat_489aef513a72c32b722918fb8feac4f37.png"
    },
    "./source/img/cats/cat_5.png": function(e, t, n) {
        e.exports = n.p + "img/cat_57cdf4ec047154632669aa20430ff7828.png"
    },
    "./source/img/cats/cat_6.png": function(e, t, n) {
        e.exports = n.p + "img/cat_6b16ea0041792d8d9bc0dec6cbe00e809.png"
    },
    "./source/img/rainbow/cat_1.png": function(e, t, n) {
        e.exports = n.p + "img/cat_16d52158a9b6b1b3fb98029a10263a88f.png"
    },
    "./source/img/rainbow/cat_2.png": function(e, t, n) {
        e.exports = n.p + "img/cat_2c1fc1ef527a993432283ef79beffee7d.png"
    },
    "./source/img/rainbow/cat_3.png": function(e, t, n) {
        e.exports = n.p + "img/cat_349193b56f7ab75fa3909cdb7b0538cbe.png"
    },
    "./source/img/rainbow/cat_4.png": function(e, t, n) {
        e.exports = n.p + "img/cat_429f7b9b172216089acc3038e2763f24b.png"
    },
    "./source/img/rainbow/cat_5.png": function(e, t, n) {
        e.exports = n.p + "img/cat_58c61f6b574dfeeda1d2e4b33c420c312.png"
    },
    "./source/img/rainbow/cat_6.png": function(e, t, n) {
        e.exports = n.p + "img/cat_69b20b490c4e2bcad051191de3d2a7bde.png"
    },
    "./source/js/application.js": function(e, t, n) {
        "use strict";
        (function(e) {
            n("./source/css/application.scss"), n("./source/js/modal.js"), n("./source/js/wobbler.js"), n("./source/js/decomp.js"), n("./source/js/pathseg.js");
            var t = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n("./node_modules/matter-js/build/matter.js"));
            var o = [n("./source/img/cats/cat_1.png"), n("./source/img/cats/cat_2.png"), n("./source/img/cats/cat_3.png"), n("./source/img/cats/cat_4.png"), n("./source/img/cats/cat_5.png"), n("./source/img/cats/cat_6.png")],
                r = [n("./source/img/rainbow/cat_1.png"), n("./source/img/rainbow/cat_2.png"), n("./source/img/rainbow/cat_3.png"), n("./source/img/rainbow/cat_4.png"), n("./source/img/rainbow/cat_5.png"), n("./source/img/rainbow/cat_6.png")],
                i = t.default.Engine,
                s = t.default.Render,
                a = t.default.World,
                c = t.default.Bodies,
                u = (t.default.Events, t.default.Body),
                l = (t.default.Svg, t.default.Vertices, t.default.Composites),
                d = t.default.MouseConstraint,
                p = t.default.Mouse,
                h = i.create(),
                f = (e("#makeItRainbow"), e("#makeItRain")),
                g = [],
                y = !1,
                m = e(window).width(),
                v = e(window).height(),
                S = m >= 415 ? 1 : .5,
                w = m >= 415 ? 1 : .5,
                x = 0,
                b = function(e, t) {
                    return Math.random() * (t - e) + e
                },
                _ = function() {
                    e("canvas").remove();
                    var t = "#" + Math.random().toString(16).slice(2, 8).toUpperCase();
                    m = e(window).width(), v = e(window).height(), S = m >= 415 ? 1 : .5, w = m >= 415 ? 1 : .5, a.clear(h.world), i.clear(h), (h = i.create({})).timing.timeScale = 1;
                    var n = s.create({
                        element: document.getElementById("cat-bounce"),
                        engine: h,
                        setPixelRatio: "auto",
                        options: {
                            showAngleIndicator: !1,
                            showInternalEdges: !1,
                            showDebug: !1,
                            wireframes: !1,
                            background: "transparent",
                            width: m,
                            height: v
                        }
                    });
                    document.body.style.backgroundImage = "linear-gradient(180deg, " + t + ", #fff)", a.add(h.world, [c.rectangle(m / 2, v + 50, m, 100, {
                        isStatic: !0
                    }), c.rectangle(m / 2, -1e3, m, 100, {
                        isStatic: !0
                    }), c.rectangle(-50, v / 2, 100, v, {
                        isStatic: !0
                    }), c.rectangle(m + 50, v / 2, 100, v, {
                        isStatic: !0
                    })]), o.forEach(function(e, t) {
                        g[t] = c.circle(Math.random() * m, Math.random() * v - v, 100, {
                            restitution: .75 + Math.random(),
                            friction: 1 + Math.random(),
                            frictionStatic: 0,
                            density: 1e-10 + Math.random(),
                            collisionFilter: {
                                category: 2,
                                mask: 1
                            },
                            render: {
                                sprite: {
                                    texture: e,
                                    xScale: S,
                                    yScale: w
                                }
                            }
                        }), a.add(h.world, g[t])
                    });
                    var r = p.create(n.canvas),
                        u = d.create(h, {
                            mouse: r,
                            constraint: {
                                stiffness: .2,
                                render: {
                                    visible: !1
                                }
                            }
                        });
                    a.add(h.world, u), n.mouse = r, i.run(h), s.run(n)
                };
            f.on("click", function(t) {
                y = !0, f.prop("disabled", !0);
                var n = [];
                ++x >= 4 ? (n = r, x = 0) : n = o;
                var i = function(e, t) {
                        return Math.floor(Math.random() * (t - e + 1)) + e
                    }(1, 2),
                    s = document.getElementById("audio" + i);
                s.play();
                var d = function(t) {
                    var n = e(window).width(),
                        o = e(window).height(),
                        r = n >= 415 ? 1 : .5,
                        i = n >= 415 ? 1 : .5,
                        s = 0;
                    return l.stack(0, 2.55 * -o, 10, 8, b(0, 50), b(0, 50), function(e, n) {
                        return s = s >= 6 ? 0 : s++, c.circle(e, n, 100, {
                            restitution: 1.0001,
                            friction: 1,
                            frictionAir: 1e-4,
                            frictionStatic: 15,
                            density: .01,
                            collisionFilter: {
                                category: 2,
                                mask: 14
                            },
                            render: {
                                sprite: {
                                    texture: t[s++],
                                    xScale: r,
                                    yScale: i
                                }
                            }
                        })
                    })
                }(n);
                a.add(h.world, d), 1 === i ? d.bodies.forEach(function(e, t) {
                    u.setAngularVelocity(e, .02 * b(-5, 5)), u.setVelocity(e, {
                        x: 0,
                        y: 30
                    })
                }) : d.bodies.forEach(function(e, t) {
                    u.setAngularVelocity(e, .02 * b(-5, 5)), u.setVelocity(e, {
                        x: 0,
                        y: 15
                    })
                }), s.onended = function() {
                    a.remove(h.world, d), f.prop("disabled", !1), y = !1
                }
            }), e(".txt").html(function(t, n) {
                return "<span>" + e.trim(n).split("").join("</span><span>") + "</span>"
            }), _(), e(window).resize(function() {
                y || _()
            })
        }).call(this, n("./node_modules/jquery/dist/jquery.js"))
    },
    "./source/js/decomp.js": function(e, t, n) {
        "use strict";
        var o, r, i, s, a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        ! function(n) {
            "object" == a(t) && void 0 !== e ? e.exports = n() : (r = [], void 0 === (i = "function" == typeof(o = n) ? o.apply(t, r) : o) || (e.exports = i))
        }(function() {
            return function e(t, n, o) {
                function r(a, c) {
                    if (!n[a]) {
                        if (!t[a]) {
                            if (!c && ("function" == typeof s && s)) return s(a, !0);
                            if (i) return i(a, !0);
                            throw new Error("Cannot find module '" + a + "'")
                        }
                        var u = n[a] = {
                            exports: {}
                        };
                        t[a][0].call(u.exports, function(e) {
                            var n = t[a][1][e];
                            return r(n || e)
                        }, u, u.exports, e, t, n, o)
                    }
                    return n[a].exports
                }
                for (var i = "function" == typeof s && s, a = 0; a < o.length; a++) r(o[a]);
                return r
            }({
                1: [function(e, t, n) {
                    function o(e, t, n) {
                        n = n || 0;
                        var o, r, i, s, a, c, u, l = [0, 0];
                        return o = e[1][1] - e[0][1], r = e[0][0] - e[1][0], i = o * e[0][0] + r * e[0][1], s = t[1][1] - t[0][1], a = t[0][0] - t[1][0], c = s * t[0][0] + a * t[0][1], b(u = o * a - s * r, 0, n) || (l[0] = (a * i - r * c) / u, l[1] = (o * c - s * i) / u), l
                    }

                    function r(e, t, n, o) {
                        var r = t[0] - e[0],
                            i = t[1] - e[1],
                            s = o[0] - n[0],
                            a = o[1] - n[1];
                        if (s * i - a * r == 0) return !1;
                        var c = (r * (n[1] - e[1]) + i * (e[0] - n[0])) / (s * i - a * r),
                            u = (s * (e[1] - n[1]) + a * (n[0] - e[0])) / (a * r - s * i);
                        return c >= 0 && c <= 1 && u >= 0 && u <= 1
                    }

                    function i(e, t, n) {
                        return (t[0] - e[0]) * (n[1] - e[1]) - (n[0] - e[0]) * (t[1] - e[1])
                    }

                    function s(e, t, n) {
                        return i(e, t, n) > 0
                    }

                    function a(e, t, n) {
                        return i(e, t, n) >= 0
                    }

                    function c(e, t, n) {
                        return i(e, t, n) < 0
                    }

                    function u(e, t, n) {
                        return i(e, t, n) <= 0
                    }
                    t.exports = {
                        decomp: function(e) {
                            var t = function e(t) {
                                var n = [],
                                    o = [],
                                    r = [],
                                    i = [];
                                var s = Number.MAX_VALUE;
                                for (var a = 0; a < t.length; ++a)
                                    if (y(t, a))
                                        for (var c = 0; c < t.length; ++c)
                                            if (S(t, a, c)) {
                                                o = e(w(t, a, c, i)), r = e(w(t, c, a, i));
                                                for (var u = 0; u < r.length; u++) o.push(r[u]);
                                                o.length < s && (n = o, s = o.length, n.push([f(t, a), f(t, c)]))
                                            }
                                return n
                            }(e);
                            return t.length > 0 ? function e(t, n) {
                                if (0 === n.length) return [t];
                                if (n instanceof Array && n.length && n[0] instanceof Array && 2 === n[0].length && n[0][0] instanceof Array) {
                                    for (var o = [t], r = 0; r < n.length; r++)
                                        for (var i = n[r], s = 0; s < o.length; s++) {
                                            var a = o[s],
                                                c = e(a, i);
                                            if (c) {
                                                o.splice(s, 1), o.push(c[0], c[1]);
                                                break
                                            }
                                        }
                                    return o
                                }
                                var i = n,
                                    r = t.indexOf(i[0]),
                                    s = t.indexOf(i[1]);
                                return -1 !== r && -1 !== s && [w(t, r, s), w(t, s, r)]
                            }(e, t) : [e]
                        },
                        quickDecomp: function e(t, n, o, r, i, l, d) {
                            l = l || 100;
                            d = d || 0;
                            i = i || 25;
                            n = void 0 !== n ? n : [];
                            o = o || [];
                            r = r || [];
                            var p = [0, 0],
                                m = [0, 0],
                                v = [0, 0];
                            var S = 0,
                                w = 0,
                                b = 0,
                                _ = 0;
                            var P = 0,
                                C = 0,
                                A = 0;
                            var V = [],
                                T = [];
                            var G = t,
                                E = t;
                            if (E.length < 3) return n;
                            d++;
                            if (d > l) return console.warn("quickDecomp: max level (" + l + ") reached."), n;
                            for (var L = 0; L < t.length; ++L)
                                if (y(G, L)) {
                                    o.push(G[L]), S = w = Number.MAX_VALUE;
                                    for (var O = 0; O < t.length; ++O) s(f(G, L - 1), f(G, L), f(G, O)) && u(f(G, L - 1), f(G, L), f(G, O - 1)) && (v = x(f(G, L - 1), f(G, L), f(G, O), f(G, O - 1)), c(f(G, L + 1), f(G, L), v) && (b = h(G[L], v)) < w && (w = b, m = v, C = O)), s(f(G, L + 1), f(G, L), f(G, O + 1)) && u(f(G, L + 1), f(G, L), f(G, O)) && (v = x(f(G, L + 1), f(G, L), f(G, O), f(G, O + 1)), s(f(G, L - 1), f(G, L), v) && (b = h(G[L], v)) < S && (S = b, p = v, P = O));
                                    if (C === (P + 1) % t.length) v[0] = (m[0] + p[0]) / 2, v[1] = (m[1] + p[1]) / 2, r.push(v), L < P ? (g(V, G, L, P + 1), V.push(v), T.push(v), 0 !== C && g(T, G, C, G.length), g(T, G, 0, L + 1)) : (0 !== L && g(V, G, L, G.length), g(V, G, 0, P + 1), V.push(v), T.push(v), g(T, G, C, L + 1));
                                    else {
                                        if (C > P && (P += t.length), _ = Number.MAX_VALUE, P < C) return n;
                                        for (var O = C; O <= P; ++O) a(f(G, L - 1), f(G, L), f(G, O)) && u(f(G, L + 1), f(G, L), f(G, O)) && (b = h(f(G, L), f(G, O))) < _ && (_ = b, A = O % t.length);
                                        L < A ? (g(V, G, L, A + 1), 0 !== A && g(T, G, A, E.length), g(T, G, 0, L + 1)) : (0 !== L && g(V, G, L, E.length), g(V, G, 0, A + 1), g(T, G, A, L + 1))
                                    }
                                    return V.length < T.length ? (e(V, n, o, r, i, l, d), e(T, n, o, r, i, l, d)) : (e(T, n, o, r, i, l, d), e(V, n, o, r, i, l, d)), n
                                }
                            n.push(t);
                            return n
                        },
                        isSimple: function(e) {
                            var t, n = e;
                            for (t = 0; t < n.length - 1; t++)
                                for (var o = 0; o < t - 1; o++)
                                    if (r(n[t], n[t + 1], n[o], n[o + 1])) return !1;
                            for (t = 1; t < n.length - 2; t++)
                                if (r(n[0], n[n.length - 1], n[t], n[t + 1])) return !1;
                            return !0
                        },
                        removeCollinearPoints: function(e, t) {
                            for (var n = 0, o = e.length - 1; e.length > 3 && o >= 0; --o) p(f(e, o - 1), f(e, o), f(e, o + 1), t) && (e.splice(o % e.length, 1), n++);
                            return n
                        },
                        makeCCW: function(e) {
                            for (var t = 0, n = e, o = 1; o < e.length; ++o)(n[o][1] < n[t][1] || n[o][1] === n[t][1] && n[o][0] > n[t][0]) && (t = o);
                            s(f(e, t - 1), f(e, t), f(e, t + 1)) || function(e) {
                                for (var t = [], n = e.length, o = 0; o !== n; o++) t.push(e.pop());
                                for (var o = 0; o !== n; o++) e[o] = t[o]
                            }(e)
                        }
                    };
                    var l = [],
                        d = [];

                    function p(e, t, n, o) {
                        if (o) {
                            var r = l,
                                s = d;
                            r[0] = t[0] - e[0], r[1] = t[1] - e[1], s[0] = n[0] - t[0], s[1] = n[1] - t[1];
                            var a = r[0] * s[0] + r[1] * s[1],
                                c = Math.sqrt(r[0] * r[0] + r[1] * r[1]),
                                u = Math.sqrt(s[0] * s[0] + s[1] * s[1]);
                            return Math.acos(a / (c * u)) < o
                        }
                        return 0 === i(e, t, n)
                    }

                    function h(e, t) {
                        var n = t[0] - e[0],
                            o = t[1] - e[1];
                        return n * n + o * o
                    }

                    function f(e, t) {
                        var n = e.length;
                        return e[t < 0 ? t % n + n : t % n]
                    }

                    function g(e, t, n, o) {
                        for (var r = n; r < o; r++) e.push(t[r])
                    }

                    function y(e, t) {
                        return c(f(e, t - 1), f(e, t), f(e, t + 1))
                    }
                    var m = [],
                        v = [];

                    function S(e, t, n) {
                        var r, i, s = m,
                            c = v;
                        if (a(f(e, t + 1), f(e, t), f(e, n)) && u(f(e, t - 1), f(e, t), f(e, n))) return !1;
                        i = h(f(e, t), f(e, n));
                        for (var l = 0; l !== e.length; ++l)
                            if ((l + 1) % e.length !== t && l !== t && a(f(e, t), f(e, n), f(e, l + 1)) && u(f(e, t), f(e, n), f(e, l)) && (s[0] = f(e, t), s[1] = f(e, n), c[0] = f(e, l), c[1] = f(e, l + 1), r = o(s, c), h(f(e, t), r) < i)) return !1;
                        return !0
                    }

                    function w(e, t, n, o) {
                        var r = o || [];
                        if (function(e) {
                                e.length = 0
                            }(r), t < n)
                            for (var i = t; i <= n; i++) r.push(e[i]);
                        else {
                            for (i = 0; i <= n; i++) r.push(e[i]);
                            for (i = t; i < e.length; i++) r.push(e[i])
                        }
                        return r
                    }

                    function x(e, t, n, o, r) {
                        r = r || 0;
                        var i = t[1] - e[1],
                            s = e[0] - t[0],
                            a = i * e[0] + s * e[1],
                            c = o[1] - n[1],
                            u = n[0] - o[0],
                            l = c * n[0] + u * n[1],
                            d = i * u - c * s;
                        return b(d, 0, r) ? [0, 0] : [(u * a - s * l) / d, (i * l - c * a) / d]
                    }

                    function b(e, t, n) {
                        return n = n || 0, Math.abs(e - t) < n
                    }
                }, {}]
            }, {}, [1])(1)
        })
    },
    "./source/js/modal.js": function(e, t, n) {
        "use strict";
        var o = document.getElementById("myModal"),
            r = document.getElementById("questions"),
            i = document.getElementsByClassName("close")[0];
        r.onclick = function() {
            o.style.display = "block"
        }, i.onclick = function() {
            o.style.display = "none"
        }, window.onclick = function(e) {
            e.target == o && (o.style.display = "none")
        }
    },
    "./source/js/pathseg.js": function(e, t, n) {
        "use strict";
        ! function() {
            "SVGPathSeg" in window || (window.SVGPathSeg = function(e, t, n) {
                this.pathSegType = e, this.pathSegTypeAsLetter = t, this._owningPathSegList = n
            }, window.SVGPathSeg.prototype.classname = "SVGPathSeg", window.SVGPathSeg.PATHSEG_UNKNOWN = 0, window.SVGPathSeg.PATHSEG_CLOSEPATH = 1, window.SVGPathSeg.PATHSEG_MOVETO_ABS = 2, window.SVGPathSeg.PATHSEG_MOVETO_REL = 3, window.SVGPathSeg.PATHSEG_LINETO_ABS = 4, window.SVGPathSeg.PATHSEG_LINETO_REL = 5, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS = 6, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL = 7, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS = 8, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL = 9, window.SVGPathSeg.PATHSEG_ARC_ABS = 10, window.SVGPathSeg.PATHSEG_ARC_REL = 11, window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS = 12, window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL = 13, window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS = 14, window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL = 15, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS = 16, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL = 17, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS = 18, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL = 19, window.SVGPathSeg.prototype._segmentChanged = function() {
                this._owningPathSegList && this._owningPathSegList.segmentChanged(this)
            }, window.SVGPathSegClosePath = function(e) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CLOSEPATH, "z", e)
            }, window.SVGPathSegClosePath.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegClosePath.prototype.toString = function() {
                return "[object SVGPathSegClosePath]"
            }, window.SVGPathSegClosePath.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter
            }, window.SVGPathSegClosePath.prototype.clone = function() {
                return new window.SVGPathSegClosePath(void 0)
            }, window.SVGPathSegMovetoAbs = function(e, t, n) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_MOVETO_ABS, "M", e), this._x = t, this._y = n
            }, window.SVGPathSegMovetoAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegMovetoAbs.prototype.toString = function() {
                return "[object SVGPathSegMovetoAbs]"
            }, window.SVGPathSegMovetoAbs.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + " " + this._x + " " + this._y
            }, window.SVGPathSegMovetoAbs.prototype.clone = function() {
                return new window.SVGPathSegMovetoAbs(void 0, this._x, this._y)
            }, Object.defineProperty(window.SVGPathSegMovetoAbs.prototype, "x", {
                get: function() {
                    return this._x
                },
                set: function(e) {
                    this._x = e, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegMovetoAbs.prototype, "y", {
                get: function() {
                    return this._y
                },
                set: function(e) {
                    this._y = e, this._segmentChanged()
                },
                enumerable: !0
            }), window.SVGPathSegMovetoRel = function(e, t, n) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_MOVETO_REL, "m", e), this._x = t, this._y = n
            }, window.SVGPathSegMovetoRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegMovetoRel.prototype.toString = function() {
                return "[object SVGPathSegMovetoRel]"
            }, window.SVGPathSegMovetoRel.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + " " + this._x + " " + this._y
            }, window.SVGPathSegMovetoRel.prototype.clone = function() {
                return new window.SVGPathSegMovetoRel(void 0, this._x, this._y)
            }, Object.defineProperty(window.SVGPathSegMovetoRel.prototype, "x", {
                get: function() {
                    return this._x
                },
                set: function(e) {
                    this._x = e, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegMovetoRel.prototype, "y", {
                get: function() {
                    return this._y
                },
                set: function(e) {
                    this._y = e, this._segmentChanged()
                },
                enumerable: !0
            }), window.SVGPathSegLinetoAbs = function(e, t, n) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_ABS, "L", e), this._x = t, this._y = n
            }, window.SVGPathSegLinetoAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegLinetoAbs.prototype.toString = function() {
                return "[object SVGPathSegLinetoAbs]"
            }, window.SVGPathSegLinetoAbs.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + " " + this._x + " " + this._y
            }, window.SVGPathSegLinetoAbs.prototype.clone = function() {
                return new window.SVGPathSegLinetoAbs(void 0, this._x, this._y)
            }, Object.defineProperty(window.SVGPathSegLinetoAbs.prototype, "x", {
                get: function() {
                    return this._x
                },
                set: function(e) {
                    this._x = e, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegLinetoAbs.prototype, "y", {
                get: function() {
                    return this._y
                },
                set: function(e) {
                    this._y = e, this._segmentChanged()
                },
                enumerable: !0
            }), window.SVGPathSegLinetoRel = function(e, t, n) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_REL, "l", e), this._x = t, this._y = n
            }, window.SVGPathSegLinetoRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegLinetoRel.prototype.toString = function() {
                return "[object SVGPathSegLinetoRel]"
            }, window.SVGPathSegLinetoRel.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + " " + this._x + " " + this._y
            }, window.SVGPathSegLinetoRel.prototype.clone = function() {
                return new window.SVGPathSegLinetoRel(void 0, this._x, this._y)
            }, Object.defineProperty(window.SVGPathSegLinetoRel.prototype, "x", {
                get: function() {
                    return this._x
                },
                set: function(e) {
                    this._x = e, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegLinetoRel.prototype, "y", {
                get: function() {
                    return this._y
                },
                set: function(e) {
                    this._y = e, this._segmentChanged()
                },
                enumerable: !0
            }), window.SVGPathSegCurvetoCubicAbs = function(e, t, n, o, r, i, s) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS, "C", e), this._x = t, this._y = n, this._x1 = o, this._y1 = r, this._x2 = i, this._y2 = s
            }, window.SVGPathSegCurvetoCubicAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoCubicAbs.prototype.toString = function() {
                return "[object SVGPathSegCurvetoCubicAbs]"
            }, window.SVGPathSegCurvetoCubicAbs.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y
            }, window.SVGPathSegCurvetoCubicAbs.prototype.clone = function() {
                return new window.SVGPathSegCurvetoCubicAbs(void 0, this._x, this._y, this._x1, this._y1, this._x2, this._y2)
            }, Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "x", {
                get: function() {
                    return this._x
                },
                set: function(e) {
                    this._x = e, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "y", {
                get: function() {
                    return this._y
                },
                set: function(e) {
                    this._y = e, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "x1", {
                get: function() {
                    return this._x1
                },
                set: function(e) {
                    this._x1 = e, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "y1", {
                get: function() {
                    return this._y1
                },
                set: function(e) {
                    this._y1 = e, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "x2", {
                get: function() {
                    return this._x2
                },
                set: function(e) {
                    this._x2 = e, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "y2", {
                get: function() {
                    return this._y2
                },
                set: function(e) {
                    this._y2 = e, this._segmentChanged()
                },
                enumerable: !0
            }), window.SVGPathSegCurvetoCubicRel = function(e, t, n, o, r, i, s) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL, "c", e), this._x = t, this._y = n, this._x1 = o, this._y1 = r, this._x2 = i, this._y2 = s
            }, window.SVGPathSegCurvetoCubicRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoCubicRel.prototype.toString = function() {
                return "[object SVGPathSegCurvetoCubicRel]"
            }, window.SVGPathSegCurvetoCubicRel.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y
            }, window.SVGPathSegCurvetoCubicRel.prototype.clone = function() {
                return new window.SVGPathSegCurvetoCubicRel(void 0, this._x, this._y, this._x1, this._y1, this._x2, this._y2)
            }, Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "x", {
                get: function() {
                    return this._x
                },
                set: function(e) {
                    this._x = e, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "y", {
                get: function() {
                    return this._y
                },
                set: function(e) {
                    this._y = e, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "x1", {
                get: function() {
                    return this._x1
                },
                set: function(e) {
                    this._x1 = e, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "y1", {
                get: function() {
                    return this._y1
                },
                set: function(e) {
                    this._y1 = e, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "x2", {
                get: function() {
                    return this._x2
                },
                set: function(e) {
                    this._x2 = e, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "y2", {
                get: function() {
                    return this._y2
                },
                set: function(e) {
                    this._y2 = e, this._segmentChanged()
                },
                enumerable: !0
            }), window.SVGPathSegCurvetoQuadraticAbs = function(e, t, n, o, r) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS, "Q", e), this._x = t, this._y = n, this._x1 = o, this._y1 = r
            }, window.SVGPathSegCurvetoQuadraticAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoQuadraticAbs.prototype.toString = function() {
                return "[object SVGPathSegCurvetoQuadraticAbs]"
            }, window.SVGPathSegCurvetoQuadraticAbs.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x + " " + this._y
            }, window.SVGPathSegCurvetoQuadraticAbs.prototype.clone = function() {
                return new window.SVGPathSegCurvetoQuadraticAbs(void 0, this._x, this._y, this._x1, this._y1)
            }, Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "x", {
                get: function() {
                    return this._x
                },
                set: function(e) {
                    this._x = e, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "y", {
                get: function() {
                    return this._y
                },
                set: function(e) {
                    this._y = e, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "x1", {
                get: function() {
                    return this._x1
                },
                set: function(e) {
                    this._x1 = e, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "y1", {
                get: function() {
                    return this._y1
                },
                set: function(e) {
                    this._y1 = e, this._segmentChanged()
                },
                enumerable: !0
            }), window.SVGPathSegCurvetoQuadraticRel = function(e, t, n, o, r) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL, "q", e), this._x = t, this._y = n, this._x1 = o, this._y1 = r
            }, window.SVGPathSegCurvetoQuadraticRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoQuadraticRel.prototype.toString = function() {
                return "[object SVGPathSegCurvetoQuadraticRel]"
            }, window.SVGPathSegCurvetoQuadraticRel.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x + " " + this._y
            }, window.SVGPathSegCurvetoQuadraticRel.prototype.clone = function() {
                return new window.SVGPathSegCurvetoQuadraticRel(void 0, this._x, this._y, this._x1, this._y1)
            }, Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "x", {
                get: function() {
                    return this._x
                },
                set: function(e) {
                    this._x = e, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "y", {
                get: function() {
                    return this._y
                },
                set: function(e) {
                    this._y = e, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "x1", {
                get: function() {
                    return this._x1
                },
                set: function(e) {
                    this._x1 = e, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "y1", {
                get: function() {
                    return this._y1
                },
                set: function(e) {
                    this._y1 = e, this._segmentChanged()
                },
                enumerable: !0
            }), window.SVGPathSegArcAbs = function(e, t, n, o, r, i, s, a) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_ARC_ABS, "A", e), this._x = t, this._y = n, this._r1 = o, this._r2 = r, this._angle = i, this._largeArcFlag = s, this._sweepFlag = a
            }, window.SVGPathSegArcAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegArcAbs.prototype.toString = function() {
                return "[object SVGPathSegArcAbs]"
            }, window.SVGPathSegArcAbs.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + " " + this._r1 + " " + this._r2 + " " + this._angle + " " + (this._largeArcFlag ? "1" : "0") + " " + (this._sweepFlag ? "1" : "0") + " " + this._x + " " + this._y
            }, window.SVGPathSegArcAbs.prototype.clone = function() {
                return new window.SVGPathSegArcAbs(void 0, this._x, this._y, this._r1, this._r2, this._angle, this._largeArcFlag, this._sweepFlag)
            }, Object.defineProperty(window.SVGPathSegArcAbs.prototype, "x", {
                get: function() {
                    return this._x
                },
                set: function(e) {
                    this._x = e, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegArcAbs.prototype, "y", {
                get: function() {
                    return this._y
                },
                set: function(e) {
                    this._y = e, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegArcAbs.prototype, "r1", {
                get: function() {
                    return this._r1
                },
                set: function(e) {
                    this._r1 = e, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegArcAbs.prototype, "r2", {
                get: function() {
                    return this._r2
                },
                set: function(e) {
                    this._r2 = e, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegArcAbs.prototype, "angle", {
                get: function() {
                    return this._angle
                },
                set: function(e) {
                    this._angle = e, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegArcAbs.prototype, "largeArcFlag", {
                get: function() {
                    return this._largeArcFlag
                },
                set: function(e) {
                    this._largeArcFlag = e, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegArcAbs.prototype, "sweepFlag", {
                get: function() {
                    return this._sweepFlag
                },
                set: function(e) {
                    this._sweepFlag = e, this._segmentChanged()
                },
                enumerable: !0
            }), window.SVGPathSegArcRel = function(e, t, n, o, r, i, s, a) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_ARC_REL, "a", e), this._x = t, this._y = n, this._r1 = o, this._r2 = r, this._angle = i, this._largeArcFlag = s, this._sweepFlag = a
            }, window.SVGPathSegArcRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegArcRel.prototype.toString = function() {
                return "[object SVGPathSegArcRel]"
            }, window.SVGPathSegArcRel.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + " " + this._r1 + " " + this._r2 + " " + this._angle + " " + (this._largeArcFlag ? "1" : "0") + " " + (this._sweepFlag ? "1" : "0") + " " + this._x + " " + this._y
            }, window.SVGPathSegArcRel.prototype.clone = function() {
                return new window.SVGPathSegArcRel(void 0, this._x, this._y, this._r1, this._r2, this._angle, this._largeArcFlag, this._sweepFlag)
            }, Object.defineProperty(window.SVGPathSegArcRel.prototype, "x", {
                get: function() {
                    return this._x
                },
                set: function(e) {
                    this._x = e, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegArcRel.prototype, "y", {
                get: function() {
                    return this._y
                },
                set: function(e) {
                    this._y = e, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegArcRel.prototype, "r1", {
                get: function() {
                    return this._r1
                },
                set: function(e) {
                    this._r1 = e, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegArcRel.prototype, "r2", {
                get: function() {
                    return this._r2
                },
                set: function(e) {
                    this._r2 = e, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegArcRel.prototype, "angle", {
                get: function() {
                    return this._angle
                },
                set: function(e) {
                    this._angle = e, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegArcRel.prototype, "largeArcFlag", {
                get: function() {
                    return this._largeArcFlag
                },
                set: function(e) {
                    this._largeArcFlag = e, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegArcRel.prototype, "sweepFlag", {
                get: function() {
                    return this._sweepFlag
                },
                set: function(e) {
                    this._sweepFlag = e, this._segmentChanged()
                },
                enumerable: !0
            }), window.SVGPathSegLinetoHorizontalAbs = function(e, t) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS, "H", e), this._x = t
            }, window.SVGPathSegLinetoHorizontalAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegLinetoHorizontalAbs.prototype.toString = function() {
                return "[object SVGPathSegLinetoHorizontalAbs]"
            }, window.SVGPathSegLinetoHorizontalAbs.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + " " + this._x
            }, window.SVGPathSegLinetoHorizontalAbs.prototype.clone = function() {
                return new window.SVGPathSegLinetoHorizontalAbs(void 0, this._x)
            }, Object.defineProperty(window.SVGPathSegLinetoHorizontalAbs.prototype, "x", {
                get: function() {
                    return this._x
                },
                set: function(e) {
                    this._x = e, this._segmentChanged()
                },
                enumerable: !0
            }), window.SVGPathSegLinetoHorizontalRel = function(e, t) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL, "h", e), this._x = t
            }, window.SVGPathSegLinetoHorizontalRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegLinetoHorizontalRel.prototype.toString = function() {
                return "[object SVGPathSegLinetoHorizontalRel]"
            }, window.SVGPathSegLinetoHorizontalRel.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + " " + this._x
            }, window.SVGPathSegLinetoHorizontalRel.prototype.clone = function() {
                return new window.SVGPathSegLinetoHorizontalRel(void 0, this._x)
            }, Object.defineProperty(window.SVGPathSegLinetoHorizontalRel.prototype, "x", {
                get: function() {
                    return this._x
                },
                set: function(e) {
                    this._x = e, this._segmentChanged()
                },
                enumerable: !0
            }), window.SVGPathSegLinetoVerticalAbs = function(e, t) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS, "V", e), this._y = t
            }, window.SVGPathSegLinetoVerticalAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegLinetoVerticalAbs.prototype.toString = function() {
                return "[object SVGPathSegLinetoVerticalAbs]"
            }, window.SVGPathSegLinetoVerticalAbs.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + " " + this._y
            }, window.SVGPathSegLinetoVerticalAbs.prototype.clone = function() {
                return new window.SVGPathSegLinetoVerticalAbs(void 0, this._y)
            }, Object.defineProperty(window.SVGPathSegLinetoVerticalAbs.prototype, "y", {
                get: function() {
                    return this._y
                },
                set: function(e) {
                    this._y = e, this._segmentChanged()
                },
                enumerable: !0
            }), window.SVGPathSegLinetoVerticalRel = function(e, t) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL, "v", e), this._y = t
            }, window.SVGPathSegLinetoVerticalRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegLinetoVerticalRel.prototype.toString = function() {
                return "[object SVGPathSegLinetoVerticalRel]"
            }, window.SVGPathSegLinetoVerticalRel.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + " " + this._y
            }, window.SVGPathSegLinetoVerticalRel.prototype.clone = function() {
                return new window.SVGPathSegLinetoVerticalRel(void 0, this._y)
            }, Object.defineProperty(window.SVGPathSegLinetoVerticalRel.prototype, "y", {
                get: function() {
                    return this._y
                },
                set: function(e) {
                    this._y = e, this._segmentChanged()
                },
                enumerable: !0
            }), window.SVGPathSegCurvetoCubicSmoothAbs = function(e, t, n, o, r) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS, "S", e), this._x = t, this._y = n, this._x2 = o, this._y2 = r
            }, window.SVGPathSegCurvetoCubicSmoothAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoCubicSmoothAbs.prototype.toString = function() {
                return "[object SVGPathSegCurvetoCubicSmoothAbs]"
            }, window.SVGPathSegCurvetoCubicSmoothAbs.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y
            }, window.SVGPathSegCurvetoCubicSmoothAbs.prototype.clone = function() {
                return new window.SVGPathSegCurvetoCubicSmoothAbs(void 0, this._x, this._y, this._x2, this._y2)
            }, Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "x", {
                get: function() {
                    return this._x
                },
                set: function(e) {
                    this._x = e, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "y", {
                get: function() {
                    return this._y
                },
                set: function(e) {
                    this._y = e, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "x2", {
                get: function() {
                    return this._x2
                },
                set: function(e) {
                    this._x2 = e, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "y2", {
                get: function() {
                    return this._y2
                },
                set: function(e) {
                    this._y2 = e, this._segmentChanged()
                },
                enumerable: !0
            }), window.SVGPathSegCurvetoCubicSmoothRel = function(e, t, n, o, r) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL, "s", e), this._x = t, this._y = n, this._x2 = o, this._y2 = r
            }, window.SVGPathSegCurvetoCubicSmoothRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoCubicSmoothRel.prototype.toString = function() {
                return "[object SVGPathSegCurvetoCubicSmoothRel]"
            }, window.SVGPathSegCurvetoCubicSmoothRel.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y
            }, window.SVGPathSegCurvetoCubicSmoothRel.prototype.clone = function() {
                return new window.SVGPathSegCurvetoCubicSmoothRel(void 0, this._x, this._y, this._x2, this._y2)
            }, Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "x", {
                get: function() {
                    return this._x
                },
                set: function(e) {
                    this._x = e, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "y", {
                get: function() {
                    return this._y
                },
                set: function(e) {
                    this._y = e, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "x2", {
                get: function() {
                    return this._x2
                },
                set: function(e) {
                    this._x2 = e, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "y2", {
                get: function() {
                    return this._y2
                },
                set: function(e) {
                    this._y2 = e, this._segmentChanged()
                },
                enumerable: !0
            }), window.SVGPathSegCurvetoQuadraticSmoothAbs = function(e, t, n) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS, "T", e), this._x = t, this._y = n
            }, window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.toString = function() {
                return "[object SVGPathSegCurvetoQuadraticSmoothAbs]"
            }, window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + " " + this._x + " " + this._y
            }, window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.clone = function() {
                return new window.SVGPathSegCurvetoQuadraticSmoothAbs(void 0, this._x, this._y)
            }, Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype, "x", {
                get: function() {
                    return this._x
                },
                set: function(e) {
                    this._x = e, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype, "y", {
                get: function() {
                    return this._y
                },
                set: function(e) {
                    this._y = e, this._segmentChanged()
                },
                enumerable: !0
            }), window.SVGPathSegCurvetoQuadraticSmoothRel = function(e, t, n) {
                window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL, "t", e), this._x = t, this._y = n
            }, window.SVGPathSegCurvetoQuadraticSmoothRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoQuadraticSmoothRel.prototype.toString = function() {
                return "[object SVGPathSegCurvetoQuadraticSmoothRel]"
            }, window.SVGPathSegCurvetoQuadraticSmoothRel.prototype._asPathString = function() {
                return this.pathSegTypeAsLetter + " " + this._x + " " + this._y
            }, window.SVGPathSegCurvetoQuadraticSmoothRel.prototype.clone = function() {
                return new window.SVGPathSegCurvetoQuadraticSmoothRel(void 0, this._x, this._y)
            }, Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothRel.prototype, "x", {
                get: function() {
                    return this._x
                },
                set: function(e) {
                    this._x = e, this._segmentChanged()
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothRel.prototype, "y", {
                get: function() {
                    return this._y
                },
                set: function(e) {
                    this._y = e, this._segmentChanged()
                },
                enumerable: !0
            }), window.SVGPathElement.prototype.createSVGPathSegClosePath = function() {
                return new window.SVGPathSegClosePath(void 0)
            }, window.SVGPathElement.prototype.createSVGPathSegMovetoAbs = function(e, t) {
                return new window.SVGPathSegMovetoAbs(void 0, e, t)
            }, window.SVGPathElement.prototype.createSVGPathSegMovetoRel = function(e, t) {
                return new window.SVGPathSegMovetoRel(void 0, e, t)
            }, window.SVGPathElement.prototype.createSVGPathSegLinetoAbs = function(e, t) {
                return new window.SVGPathSegLinetoAbs(void 0, e, t)
            }, window.SVGPathElement.prototype.createSVGPathSegLinetoRel = function(e, t) {
                return new window.SVGPathSegLinetoRel(void 0, e, t)
            }, window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicAbs = function(e, t, n, o, r, i) {
                return new window.SVGPathSegCurvetoCubicAbs(void 0, e, t, n, o, r, i)
            }, window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicRel = function(e, t, n, o, r, i) {
                return new window.SVGPathSegCurvetoCubicRel(void 0, e, t, n, o, r, i)
            }, window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticAbs = function(e, t, n, o) {
                return new window.SVGPathSegCurvetoQuadraticAbs(void 0, e, t, n, o)
            }, window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticRel = function(e, t, n, o) {
                return new window.SVGPathSegCurvetoQuadraticRel(void 0, e, t, n, o)
            }, window.SVGPathElement.prototype.createSVGPathSegArcAbs = function(e, t, n, o, r, i, s) {
                return new window.SVGPathSegArcAbs(void 0, e, t, n, o, r, i, s)
            }, window.SVGPathElement.prototype.createSVGPathSegArcRel = function(e, t, n, o, r, i, s) {
                return new window.SVGPathSegArcRel(void 0, e, t, n, o, r, i, s)
            }, window.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalAbs = function(e) {
                return new window.SVGPathSegLinetoHorizontalAbs(void 0, e)
            }, window.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalRel = function(e) {
                return new window.SVGPathSegLinetoHorizontalRel(void 0, e)
            }, window.SVGPathElement.prototype.createSVGPathSegLinetoVerticalAbs = function(e) {
                return new window.SVGPathSegLinetoVerticalAbs(void 0, e)
            }, window.SVGPathElement.prototype.createSVGPathSegLinetoVerticalRel = function(e) {
                return new window.SVGPathSegLinetoVerticalRel(void 0, e)
            }, window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothAbs = function(e, t, n, o) {
                return new window.SVGPathSegCurvetoCubicSmoothAbs(void 0, e, t, n, o)
            }, window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothRel = function(e, t, n, o) {
                return new window.SVGPathSegCurvetoCubicSmoothRel(void 0, e, t, n, o)
            }, window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothAbs = function(e, t) {
                return new window.SVGPathSegCurvetoQuadraticSmoothAbs(void 0, e, t)
            }, window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothRel = function(e, t) {
                return new window.SVGPathSegCurvetoQuadraticSmoothRel(void 0, e, t)
            }, "getPathSegAtLength" in window.SVGPathElement.prototype || (window.SVGPathElement.prototype.getPathSegAtLength = function(e) {
                if (void 0 === e || !isFinite(e)) throw "Invalid arguments.";
                var t = document.createElementNS("http://www.w3.org/2000/svg", "path");
                t.setAttribute("d", this.getAttribute("d"));
                var n = t.pathSegList.numberOfItems - 1;
                if (n <= 0) return 0;
                do {
                    if (t.pathSegList.removeItem(n), e > t.getTotalLength()) break;
                    n--
                } while (n > 0);
                return n
            })), "SVGPathSegList" in window && "appendItem" in window.SVGPathSegList.prototype || (window.SVGPathSegList = function(e) {
                this._pathElement = e, this._list = this._parsePath(this._pathElement.getAttribute("d")), this._mutationObserverConfig = {
                    attributes: !0,
                    attributeFilter: ["d"]
                }, this._pathElementMutationObserver = new MutationObserver(this._updateListFromPathMutations.bind(this)), this._pathElementMutationObserver.observe(this._pathElement, this._mutationObserverConfig)
            }, window.SVGPathSegList.prototype.classname = "SVGPathSegList", Object.defineProperty(window.SVGPathSegList.prototype, "numberOfItems", {
                get: function() {
                    return this._checkPathSynchronizedToList(), this._list.length
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathElement.prototype, "pathSegList", {
                get: function() {
                    return this._pathSegList || (this._pathSegList = new window.SVGPathSegList(this)), this._pathSegList
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathElement.prototype, "normalizedPathSegList", {
                get: function() {
                    return this.pathSegList
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathElement.prototype, "animatedPathSegList", {
                get: function() {
                    return this.pathSegList
                },
                enumerable: !0
            }), Object.defineProperty(window.SVGPathElement.prototype, "animatedNormalizedPathSegList", {
                get: function() {
                    return this.pathSegList
                },
                enumerable: !0
            }), window.SVGPathSegList.prototype._checkPathSynchronizedToList = function() {
                this._updateListFromPathMutations(this._pathElementMutationObserver.takeRecords())
            }, window.SVGPathSegList.prototype._updateListFromPathMutations = function(e) {
                if (this._pathElement) {
                    var t = !1;
                    e.forEach(function(e) {
                        "d" == e.attributeName && (t = !0)
                    }), t && (this._list = this._parsePath(this._pathElement.getAttribute("d")))
                }
            }, window.SVGPathSegList.prototype._writeListToPath = function() {
                this._pathElementMutationObserver.disconnect(), this._pathElement.setAttribute("d", window.SVGPathSegList._pathSegArrayAsString(this._list)), this._pathElementMutationObserver.observe(this._pathElement, this._mutationObserverConfig)
            }, window.SVGPathSegList.prototype.segmentChanged = function(e) {
                this._writeListToPath()
            }, window.SVGPathSegList.prototype.clear = function() {
                this._checkPathSynchronizedToList(), this._list.forEach(function(e) {
                    e._owningPathSegList = null
                }), this._list = [], this._writeListToPath()
            }, window.SVGPathSegList.prototype.initialize = function(e) {
                return this._checkPathSynchronizedToList(), this._list = [e], e._owningPathSegList = this, this._writeListToPath(), e
            }, window.SVGPathSegList.prototype._checkValidIndex = function(e) {
                if (isNaN(e) || e < 0 || e >= this.numberOfItems) throw "INDEX_SIZE_ERR"
            }, window.SVGPathSegList.prototype.getItem = function(e) {
                return this._checkPathSynchronizedToList(), this._checkValidIndex(e), this._list[e]
            }, window.SVGPathSegList.prototype.insertItemBefore = function(e, t) {
                return this._checkPathSynchronizedToList(), t > this.numberOfItems && (t = this.numberOfItems), e._owningPathSegList && (e = e.clone()), this._list.splice(t, 0, e), e._owningPathSegList = this, this._writeListToPath(), e
            }, window.SVGPathSegList.prototype.replaceItem = function(e, t) {
                return this._checkPathSynchronizedToList(), e._owningPathSegList && (e = e.clone()), this._checkValidIndex(t), this._list[t] = e, e._owningPathSegList = this, this._writeListToPath(), e
            }, window.SVGPathSegList.prototype.removeItem = function(e) {
                this._checkPathSynchronizedToList(), this._checkValidIndex(e);
                var t = this._list[e];
                return this._list.splice(e, 1), this._writeListToPath(), t
            }, window.SVGPathSegList.prototype.appendItem = function(e) {
                return this._checkPathSynchronizedToList(), e._owningPathSegList && (e = e.clone()), this._list.push(e), e._owningPathSegList = this, this._writeListToPath(), e
            }, window.SVGPathSegList._pathSegArrayAsString = function(e) {
                var t = "",
                    n = !0;
                return e.forEach(function(e) {
                    n ? (n = !1, t += e._asPathString()) : t += " " + e._asPathString()
                }), t
            }, window.SVGPathSegList.prototype._parsePath = function(e) {
                if (!e || 0 == e.length) return [];
                var t = this,
                    n = function() {
                        this.pathSegList = []
                    };
                n.prototype.appendSegment = function(e) {
                    this.pathSegList.push(e)
                };
                var o = function(e) {
                    this._string = e, this._currentIndex = 0, this._endIndex = this._string.length, this._previousCommand = window.SVGPathSeg.PATHSEG_UNKNOWN, this._skipOptionalSpaces()
                };
                o.prototype._isCurrentSpace = function() {
                    var e = this._string[this._currentIndex];
                    return e <= " " && (" " == e || "\n" == e || "\t" == e || "\r" == e || "\f" == e)
                }, o.prototype._skipOptionalSpaces = function() {
                    for (; this._currentIndex < this._endIndex && this._isCurrentSpace();) this._currentIndex++;
                    return this._currentIndex < this._endIndex
                }, o.prototype._skipOptionalSpacesOrDelimiter = function() {
                    return !(this._currentIndex < this._endIndex && !this._isCurrentSpace() && "," != this._string.charAt(this._currentIndex)) && (this._skipOptionalSpaces() && this._currentIndex < this._endIndex && "," == this._string.charAt(this._currentIndex) && (this._currentIndex++, this._skipOptionalSpaces()), this._currentIndex < this._endIndex)
                }, o.prototype.hasMoreData = function() {
                    return this._currentIndex < this._endIndex
                }, o.prototype.peekSegmentType = function() {
                    var e = this._string[this._currentIndex];
                    return this._pathSegTypeFromChar(e)
                }, o.prototype._pathSegTypeFromChar = function(e) {
                    switch (e) {
                        case "Z":
                        case "z":
                            return window.SVGPathSeg.PATHSEG_CLOSEPATH;
                        case "M":
                            return window.SVGPathSeg.PATHSEG_MOVETO_ABS;
                        case "m":
                            return window.SVGPathSeg.PATHSEG_MOVETO_REL;
                        case "L":
                            return window.SVGPathSeg.PATHSEG_LINETO_ABS;
                        case "l":
                            return window.SVGPathSeg.PATHSEG_LINETO_REL;
                        case "C":
                            return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS;
                        case "c":
                            return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL;
                        case "Q":
                            return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS;
                        case "q":
                            return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL;
                        case "A":
                            return window.SVGPathSeg.PATHSEG_ARC_ABS;
                        case "a":
                            return window.SVGPathSeg.PATHSEG_ARC_REL;
                        case "H":
                            return window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS;
                        case "h":
                            return window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL;
                        case "V":
                            return window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS;
                        case "v":
                            return window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL;
                        case "S":
                            return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS;
                        case "s":
                            return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL;
                        case "T":
                            return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS;
                        case "t":
                            return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL;
                        default:
                            return window.SVGPathSeg.PATHSEG_UNKNOWN
                    }
                }, o.prototype._nextCommandHelper = function(e, t) {
                    return ("+" == e || "-" == e || "." == e || e >= "0" && e <= "9") && t != window.SVGPathSeg.PATHSEG_CLOSEPATH ? t == window.SVGPathSeg.PATHSEG_MOVETO_ABS ? window.SVGPathSeg.PATHSEG_LINETO_ABS : t == window.SVGPathSeg.PATHSEG_MOVETO_REL ? window.SVGPathSeg.PATHSEG_LINETO_REL : t : window.SVGPathSeg.PATHSEG_UNKNOWN
                }, o.prototype.initialCommandIsMoveTo = function() {
                    if (!this.hasMoreData()) return !0;
                    var e = this.peekSegmentType();
                    return e == window.SVGPathSeg.PATHSEG_MOVETO_ABS || e == window.SVGPathSeg.PATHSEG_MOVETO_REL
                }, o.prototype._parseNumber = function() {
                    var e = 0,
                        t = 0,
                        n = 1,
                        o = 0,
                        r = 1,
                        i = 1,
                        s = this._currentIndex;
                    if (this._skipOptionalSpaces(), this._currentIndex < this._endIndex && "+" == this._string.charAt(this._currentIndex) ? this._currentIndex++ : this._currentIndex < this._endIndex && "-" == this._string.charAt(this._currentIndex) && (this._currentIndex++, r = -1), !(this._currentIndex == this._endIndex || (this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9") && "." != this._string.charAt(this._currentIndex))) {
                        for (var a = this._currentIndex; this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9";) this._currentIndex++;
                        if (this._currentIndex != a)
                            for (var c = this._currentIndex - 1, u = 1; c >= a;) t += u * (this._string.charAt(c--) - "0"), u *= 10;
                        if (this._currentIndex < this._endIndex && "." == this._string.charAt(this._currentIndex)) {
                            if (this._currentIndex++, this._currentIndex >= this._endIndex || this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9") return;
                            for (; this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9";) n *= 10, o += (this._string.charAt(this._currentIndex) - "0") / n, this._currentIndex += 1
                        }
                        if (this._currentIndex != s && this._currentIndex + 1 < this._endIndex && ("e" == this._string.charAt(this._currentIndex) || "E" == this._string.charAt(this._currentIndex)) && "x" != this._string.charAt(this._currentIndex + 1) && "m" != this._string.charAt(this._currentIndex + 1)) {
                            if (this._currentIndex++, "+" == this._string.charAt(this._currentIndex) ? this._currentIndex++ : "-" == this._string.charAt(this._currentIndex) && (this._currentIndex++, i = -1), this._currentIndex >= this._endIndex || this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9") return;
                            for (; this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9";) e *= 10, e += this._string.charAt(this._currentIndex) - "0", this._currentIndex++
                        }
                        var l = t + o;
                        if (l *= r, e && (l *= Math.pow(10, i * e)), s != this._currentIndex) return this._skipOptionalSpacesOrDelimiter(), l
                    }
                }, o.prototype._parseArcFlag = function() {
                    if (!(this._currentIndex >= this._endIndex)) {
                        var e = !1,
                            t = this._string.charAt(this._currentIndex++);
                        if ("0" == t) e = !1;
                        else {
                            if ("1" != t) return;
                            e = !0
                        }
                        return this._skipOptionalSpacesOrDelimiter(), e
                    }
                }, o.prototype.parseSegment = function() {
                    var e = this._string[this._currentIndex],
                        n = this._pathSegTypeFromChar(e);
                    if (n == window.SVGPathSeg.PATHSEG_UNKNOWN) {
                        if (this._previousCommand == window.SVGPathSeg.PATHSEG_UNKNOWN) return null;
                        if ((n = this._nextCommandHelper(e, this._previousCommand)) == window.SVGPathSeg.PATHSEG_UNKNOWN) return null
                    } else this._currentIndex++;
                    switch (this._previousCommand = n, n) {
                        case window.SVGPathSeg.PATHSEG_MOVETO_REL:
                            return new window.SVGPathSegMovetoRel(t, this._parseNumber(), this._parseNumber());
                        case window.SVGPathSeg.PATHSEG_MOVETO_ABS:
                            return new window.SVGPathSegMovetoAbs(t, this._parseNumber(), this._parseNumber());
                        case window.SVGPathSeg.PATHSEG_LINETO_REL:
                            return new window.SVGPathSegLinetoRel(t, this._parseNumber(), this._parseNumber());
                        case window.SVGPathSeg.PATHSEG_LINETO_ABS:
                            return new window.SVGPathSegLinetoAbs(t, this._parseNumber(), this._parseNumber());
                        case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL:
                            return new window.SVGPathSegLinetoHorizontalRel(t, this._parseNumber());
                        case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS:
                            return new window.SVGPathSegLinetoHorizontalAbs(t, this._parseNumber());
                        case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL:
                            return new window.SVGPathSegLinetoVerticalRel(t, this._parseNumber());
                        case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS:
                            return new window.SVGPathSegLinetoVerticalAbs(t, this._parseNumber());
                        case window.SVGPathSeg.PATHSEG_CLOSEPATH:
                            return this._skipOptionalSpaces(), new window.SVGPathSegClosePath(t);
                        case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL:
                            var o = {
                                x1: this._parseNumber(),
                                y1: this._parseNumber(),
                                x2: this._parseNumber(),
                                y2: this._parseNumber(),
                                x: this._parseNumber(),
                                y: this._parseNumber()
                            };
                            return new window.SVGPathSegCurvetoCubicRel(t, o.x, o.y, o.x1, o.y1, o.x2, o.y2);
                        case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS:
                            o = {
                                x1: this._parseNumber(),
                                y1: this._parseNumber(),
                                x2: this._parseNumber(),
                                y2: this._parseNumber(),
                                x: this._parseNumber(),
                                y: this._parseNumber()
                            };
                            return new window.SVGPathSegCurvetoCubicAbs(t, o.x, o.y, o.x1, o.y1, o.x2, o.y2);
                        case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:
                            o = {
                                x2: this._parseNumber(),
                                y2: this._parseNumber(),
                                x: this._parseNumber(),
                                y: this._parseNumber()
                            };
                            return new window.SVGPathSegCurvetoCubicSmoothRel(t, o.x, o.y, o.x2, o.y2);
                        case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:
                            o = {
                                x2: this._parseNumber(),
                                y2: this._parseNumber(),
                                x: this._parseNumber(),
                                y: this._parseNumber()
                            };
                            return new window.SVGPathSegCurvetoCubicSmoothAbs(t, o.x, o.y, o.x2, o.y2);
                        case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL:
                            o = {
                                x1: this._parseNumber(),
                                y1: this._parseNumber(),
                                x: this._parseNumber(),
                                y: this._parseNumber()
                            };
                            return new window.SVGPathSegCurvetoQuadraticRel(t, o.x, o.y, o.x1, o.y1);
                        case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS:
                            o = {
                                x1: this._parseNumber(),
                                y1: this._parseNumber(),
                                x: this._parseNumber(),
                                y: this._parseNumber()
                            };
                            return new window.SVGPathSegCurvetoQuadraticAbs(t, o.x, o.y, o.x1, o.y1);
                        case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL:
                            return new window.SVGPathSegCurvetoQuadraticSmoothRel(t, this._parseNumber(), this._parseNumber());
                        case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS:
                            return new window.SVGPathSegCurvetoQuadraticSmoothAbs(t, this._parseNumber(), this._parseNumber());
                        case window.SVGPathSeg.PATHSEG_ARC_REL:
                            o = {
                                x1: this._parseNumber(),
                                y1: this._parseNumber(),
                                arcAngle: this._parseNumber(),
                                arcLarge: this._parseArcFlag(),
                                arcSweep: this._parseArcFlag(),
                                x: this._parseNumber(),
                                y: this._parseNumber()
                            };
                            return new window.SVGPathSegArcRel(t, o.x, o.y, o.x1, o.y1, o.arcAngle, o.arcLarge, o.arcSweep);
                        case window.SVGPathSeg.PATHSEG_ARC_ABS:
                            o = {
                                x1: this._parseNumber(),
                                y1: this._parseNumber(),
                                arcAngle: this._parseNumber(),
                                arcLarge: this._parseArcFlag(),
                                arcSweep: this._parseArcFlag(),
                                x: this._parseNumber(),
                                y: this._parseNumber()
                            };
                            return new window.SVGPathSegArcAbs(t, o.x, o.y, o.x1, o.y1, o.arcAngle, o.arcLarge, o.arcSweep);
                        default:
                            throw "Unknown path seg type."
                    }
                };
                var r = new n,
                    i = new o(e);
                if (!i.initialCommandIsMoveTo()) return [];
                for (; i.hasMoreData();) {
                    var s = i.parseSegment();
                    if (!s) return [];
                    r.appendSegment(s)
                }
                return r.pathSegList
            })
        }()
    },
    "./source/js/wobbler.js": function(e, t, n) {
        "use strict";
        var o = void 0,
            r = 0,
            i = void 0,
            s = void 0,
            a = document.createElement("div");
        for (a.setAttribute("id", "wobble"), a.setAttribute("class", "btn italic"), a.innerText = "Cat for Bong!", document.body.appendChild(a), o = a.firstChild.nodeValue; a.childNodes.length;) a.removeChild(a.childNodes[0]);
        for (i = 0; i < o.length; i++)(s = document.createElement("span")).setAttribute("id", "wobb" + i), s.style.position = "relative", s.appendChild(document.createTextNode(o.charAt(i))), a.appendChild(s);
        setInterval(function() {
            for (var e = 0; e < o.length; e++) document.getElementById("wobb" + e).style.top = Math.round(3 * Math.sin(e + r)) + "px";
            r++
        }, 150)
    }
});