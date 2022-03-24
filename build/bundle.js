(() => {
    var r = {
            790: () => {},
            918: (r, e, n) => {
                "use strict";
                n.d(e, { Z: () => s });
                var t = n(81),
                    o = n.n(t),
                    a = n(645),
                    i = n.n(a)()(o());
                i.push([r.id, '*,\r\n*::after,\r\n*::before {\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    padding: 0;\r\n    margin: 0;\r\n    height: 100vh;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.button {\r\n    appearance: button;\r\n    backface-visibility: hidden;\r\n    background-color: #405cf5;\r\n    border-radius: 6px;\r\n    border-width: 0;\r\n    box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset, rgba(50, 50, 93, .1) 0 2px 5px 0, rgba(0, 0, 0, .07) 0 1px 1px 0;\r\n    box-sizing: border-box;\r\n    color: #fff;\r\n    cursor: pointer;\r\n    font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif;\r\n    font-size: 100%;\r\n    height: 44px;\r\n    line-height: 1.15;\r\n    outline: none;\r\n    overflow: hidden;\r\n    padding: 0 25px;\r\n    position: relative;\r\n    text-align: center;\r\n    text-transform: none;\r\n    transform: translateZ(0);\r\n    transition: all .2s, box-shadow .08s ease-in;\r\n    user-select: none;\r\n    -webkit-user-select: none;\r\n    touch-action: manipulation;\r\n}\r\n\r\n.button:disabled {\r\n    cursor: default;\r\n}\r\n\r\n.button:focus {\r\n    box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset, rgba(50, 50, 93, .2) 0 6px 15px 0, rgba(0, 0, 0, .1) 0 2px 2px 0, rgba(50, 151, 211, .3) 0 0 0 4px;\r\n}', ""]);
                const s = i
            },
            645: r => {
                "use strict";
                r.exports = function(r) {
                    var e = [];
                    return e.toString = function() {
                        return this.map((function(e) {
                            var n = "",
                                t = void 0 !== e[5];
                            return e[4] && (n += "@supports (".concat(e[4], ") {")), e[2] && (n += "@media ".concat(e[2], " {")), t && (n += "@layer".concat(e[5].length > 0 ? " ".concat(e[5]) : "", " {")), n += r(e), t && (n += "}"), e[2] && (n += "}"), e[4] && (n += "}"), n
                        })).join("")
                    }, e.i = function(r, n, t, o, a) {
                        "string" == typeof r && (r = [
                            [null, r, void 0]
                        ]);
                        var i = {};
                        if (t)
                            for (var s = 0; s < this.length; s++) {
                                var c = this[s][0];
                                null != c && (i[c] = !0)
                            }
                        for (var u = 0; u < r.length; u++) {
                            var p = [].concat(r[u]);
                            t && i[p[0]] || (void 0 !== a && (void 0 === p[5] || (p[1] = "@layer".concat(p[5].length > 0 ? " ".concat(p[5]) : "", " {").concat(p[1], "}")), p[5] = a), n && (p[2] ? (p[1] = "@media ".concat(p[2], " {").concat(p[1], "}"), p[2] = n) : p[2] = n), o && (p[4] ? (p[1] = "@supports (".concat(p[4], ") {").concat(p[1], "}"), p[4] = o) : p[4] = "".concat(o)), e.push(p))
                        }
                    }, e
                }
            },
            81: r => {
                "use strict";
                r.exports = function(r) { return r[1] }
            },
            379: r => {
                "use strict";
                var e = [];

                function n(r) {
                    for (var n = -1, t = 0; t < e.length; t++)
                        if (e[t].identifier === r) { n = t; break }
                    return n
                }

                function t(r, t) {
                    for (var a = {}, i = [], s = 0; s < r.length; s++) {
                        var c = r[s],
                            u = t.base ? c[0] + t.base : c[0],
                            p = a[u] || 0,
                            l = "".concat(u, " ").concat(p);
                        a[u] = p + 1;
                        var d = n(l),
                            f = { css: c[1], media: c[2], sourceMap: c[3], supports: c[4], layer: c[5] };
                        if (-1 !== d) e[d].references++, e[d].updater(f);
                        else {
                            var v = o(f, t);
                            t.byIndex = s, e.splice(s, 0, { identifier: l, updater: v, references: 1 })
                        }
                        i.push(l)
                    }
                    return i
                }

                function o(r, e) {
                    var n = e.domAPI(e);
                    return n.update(r),
                        function(e) {
                            if (e) {
                                if (e.css === r.css && e.media === r.media && e.sourceMap === r.sourceMap && e.supports === r.supports && e.layer === r.layer) return;
                                n.update(r = e)
                            } else n.remove()
                        }
                }
                r.exports = function(r, o) {
                    var a = t(r = r || [], o = o || {});
                    return function(r) {
                        r = r || [];
                        for (var i = 0; i < a.length; i++) {
                            var s = n(a[i]);
                            e[s].references--
                        }
                        for (var c = t(r, o), u = 0; u < a.length; u++) {
                            var p = n(a[u]);
                            0 === e[p].references && (e[p].updater(), e.splice(p, 1))
                        }
                        a = c
                    }
                }
            },
            569: r => {
                "use strict";
                var e = {};
                r.exports = function(r, n) {
                    var t = function(r) {
                        if (void 0 === e[r]) {
                            var n = document.querySelector(r);
                            if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try { n = n.contentDocument.head } catch (r) { n = null }
                            e[r] = n
                        }
                        return e[r]
                    }(r);
                    if (!t) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                    t.appendChild(n)
                }
            },
            216: r => {
                "use strict";
                r.exports = function(r) { var e = document.createElement("style"); return r.setAttributes(e, r.attributes), r.insert(e, r.options), e }
            },
            565: (r, e, n) => {
                "use strict";
                r.exports = function(r) {
                    var e = n.nc;
                    e && r.setAttribute("nonce", e)
                }
            },
            795: r => {
                "use strict";
                r.exports = function(r) {
                    var e = r.insertStyleElement(r);
                    return {
                        update: function(n) {
                            ! function(r, e, n) {
                                var t = "";
                                n.supports && (t += "@supports (".concat(n.supports, ") {")), n.media && (t += "@media ".concat(n.media, " {"));
                                var o = void 0 !== n.layer;
                                o && (t += "@layer".concat(n.layer.length > 0 ? " ".concat(n.layer) : "", " {")), t += n.css, o && (t += "}"), n.media && (t += "}"), n.supports && (t += "}");
                                var a = n.sourceMap;
                                a && "undefined" != typeof btoa && (t += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a)))), " */")), e.styleTagTransform(t, r, e.options)
                            }(e, r, n)
                        },
                        remove: function() {
                            ! function(r) {
                                if (null === r.parentNode) return !1;
                                r.parentNode.removeChild(r)
                            }(e)
                        }
                    }
                }
            },
            589: r => {
                "use strict";
                r.exports = function(r, e) {
                    if (e.styleSheet) e.styleSheet.cssText = r;
                    else {
                        for (; e.firstChild;) e.removeChild(e.firstChild);
                        e.appendChild(document.createTextNode(r))
                    }
                }
            }
        },
        e = {};

    function n(t) { var o = e[t]; if (void 0 !== o) return o.exports; var a = e[t] = { id: t, exports: {} }; return r[t](a, a.exports, n), a.exports }
    n.n = r => { var e = r && r.__esModule ? () => r.default : () => r; return n.d(e, { a: e }), e }, n.d = (r, e) => { for (var t in e) n.o(e, t) && !n.o(r, t) && Object.defineProperty(r, t, { enumerable: !0, get: e[t] }) }, n.o = (r, e) => Object.prototype.hasOwnProperty.call(r, e), (() => {
        "use strict";
        var r = n(379),
            e = n.n(r),
            t = n(795),
            o = n.n(t),
            a = n(569),
            i = n.n(a),
            s = n(565),
            c = n.n(s),
            u = n(216),
            p = n.n(u),
            l = n(589),
            d = n.n(l),
            f = n(918),
            v = {};
        v.styleTagTransform = d(), v.setAttributes = c(), v.insert = i().bind(null, "head"), v.domAPI = o(), v.insertStyleElement = p(), e()(f.Z, v), f.Z && f.Z.locals && f.Z.locals;
        var b = n(790);
        n.n(b)()()
    })()
})();