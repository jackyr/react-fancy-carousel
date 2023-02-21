var z = Object.defineProperty, B = Object.defineProperties;
var F = Object.getOwnPropertyDescriptors;
var w = Object.getOwnPropertySymbols;
var x = Object.prototype.hasOwnProperty, C = Object.prototype.propertyIsEnumerable;
var k = (t, n, e) => n in t ? z(t, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[n] = e, b = (t, n) => {
  for (var e in n || (n = {}))
    x.call(n, e) && k(t, e, n[e]);
  if (w)
    for (var e of w(n))
      C.call(n, e) && k(t, e, n[e]);
  return t;
}, y = (t, n) => B(t, F(n));
var v = (t, n) => {
  var e = {};
  for (var a in t)
    x.call(t, a) && n.indexOf(a) < 0 && (e[a] = t[a]);
  if (t != null && w)
    for (var a of w(t))
      n.indexOf(a) < 0 && C.call(t, a) && (e[a] = t[a]);
  return e;
};
import m, { useRef as I, memo as R, forwardRef as H, useState as L, useMemo as O, Children as D, useCallback as E, useEffect as M, useImperativeHandle as U, cloneElement as q } from "react";
const A = (...t) => t.reduce((n, e) => n.concat(
  typeof e == "string" ? e : Object.keys(e || {}).map((a) => (e || {})[a] ? a : "")
), []).filter(Boolean).join(" "), G = () => I(Math.random().toString(36).substring(2, 7)).current, J = "_carousel_fw05l_1", Q = "_container_fw05l_6", V = "_carousel_item_fw05l_14", W = "_indicator_fw05l_19", X = "_indicator_item_fw05l_29", Y = "_indicator_item_inner_fw05l_39", Z = "_active_fw05l_49", ee = "_indicatorAnim_fw05l_1", s = {
  carousel: J,
  container: Q,
  carousel_item: V,
  indicator: W,
  indicator_item: X,
  indicator_item_inner: Y,
  active: Z,
  indicatorAnim: ee
}, te = (a) => {
  var u = a, {
    className: t,
    children: n
  } = u, e = v(u, [
    "className",
    "children"
  ]);
  return /* @__PURE__ */ m.createElement(
    "section",
    y(b({}, e), {
      className: A(t, s.carousel_item)
    }),
    n
  );
}, ne = R(te), re = H((oe, K) => {
  var h = oe, {
    className: t,
    showIndicator: n = !0,
    autoplay: e = !1,
    duration: a = 3e3,
    speed: u = 500,
    timingFunction: S = "ease",
    children: g,
    onChange: p,
    indicatorRender: N
  } = h, j = v(h, [
    "className",
    "showIndicator",
    "autoplay",
    "duration",
    "speed",
    "timingFunction",
    "children",
    "onChange",
    "indicatorRender"
  ]);
  const _ = G(), [i, d] = L(0), $ = I(0), c = O(() => D.toArray(g), [g]);
  let T = I();
  const l = E(() => d((r) => r === c.length - 1 ? 0 : r + 1), [c]), f = E(() => d((r) => r === 0 ? c.length - 1 : r - 1), [c]);
  M(() => {
    p && i !== $.current && p.call(null, i, $.current), $.current = i;
  }, [i, p]), M(() => (e && c.length > 1 && (T.current = window.setTimeout(l, a)), () => window.clearTimeout(T.current)), [e, i, a, c, l]), U(K, () => ({
    next: l,
    prev: f,
    goTo: (r) => d(r)
  }), [l, f]);
  const P = E((r) => {
    r.stopPropagation(), (r.code === "Enter" || r.code === "Space") && r.currentTarget.click(), r.code === "ArrowRight" && l(), r.code === "ArrowLeft" && f();
  }, [l, f]);
  return /* @__PURE__ */ m.createElement(
    "div",
    y(b({}, j), {
      className: A(t, s.carousel)
    }),
    /* @__PURE__ */ m.createElement(
      "div",
      {
        className: s.container,
        style: {
          transform: `translate(${-i * 100 + "%"}, 0)`,
          transitionDuration: `${u}ms`,
          transitionTimingFunction: S
        }
      },
      D.map(g, (r, o) => typeof r == "undefined" ? r : q(r, {
        id: `carousel-item-${_}-${o}`,
        role: "tabpanel",
        "aria-labelledby": `carousel-indicator-${_}-${o}`,
        "aria-hidden": i === o
      }))
    ),
    n && (N ? N(i, c.length) : /* @__PURE__ */ m.createElement(
      "ul",
      {
        className: s.indicator,
        role: "tablist"
      },
      c.map((r, o) => /* @__PURE__ */ m.createElement(
        "li",
        {
          key: o,
          id: `carousel-indicator-${_}-${o}`,
          role: "tab",
          "aria-label": `change to page ${o + 1}`,
          "aria-controls": `carousel-item-${_}-${o}`,
          "aria-selected": i === o,
          tabIndex: 0,
          className: A(s.indicator_item, { [s.active]: i === o }),
          onClick: () => d(o),
          onKeyDown: P
        },
        /* @__PURE__ */ m.createElement(
          "div",
          {
            className: s.indicator_item_inner,
            style: { animationDuration: e && c.length > 1 ? `${a}ms` : "0" }
          }
        )
      ))
    ))
  );
}), ae = R(re);
ae.Item = ne;
export {
  ae as default
};
