var z = Object.defineProperty, B = Object.defineProperties;
var F = Object.getOwnPropertyDescriptors;
var w = Object.getOwnPropertySymbols;
var x = Object.prototype.hasOwnProperty, C = Object.prototype.propertyIsEnumerable;
var T = (t, n, e) => n in t ? z(t, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[n] = e, p = (t, n) => {
  for (var e in n || (n = {}))
    x.call(n, e) && T(t, e, n[e]);
  if (w)
    for (var e of w(n))
      C.call(n, e) && T(t, e, n[e]);
  return t;
}, b = (t, n) => B(t, F(n));
var k = (t, n) => {
  var e = {};
  for (var a in t)
    x.call(t, a) && n.indexOf(a) < 0 && (e[a] = t[a]);
  if (t != null && w)
    for (var a of w(t))
      n.indexOf(a) < 0 && C.call(t, a) && (e[a] = t[a]);
  return e;
};
import m, { useRef as E, memo as R, forwardRef as H, useState as L, useMemo as O, Children as D, useCallback as v, useEffect as M, useImperativeHandle as U, cloneElement as q } from "react";
const I = (...t) => t.reduce((n, e) => n.concat(
  typeof e == "string" ? e : Object.keys(e || {}).map((a) => (e || {})[a] ? a : "")
), []).filter(Boolean).join(" "), G = () => E(Math.random().toString(36).substring(2, 7)).current, J = "_carousel_fw05l_1", Q = "_container_fw05l_6", V = "_carousel_item_fw05l_14", W = "_indicator_fw05l_19", X = "_indicator_item_fw05l_29", Y = "_indicator_item_inner_fw05l_39", Z = "_active_fw05l_49", ee = "_indicatorAnim_fw05l_1", s = {
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
  } = u, e = k(u, [
    "className",
    "children"
  ]);
  return /* @__PURE__ */ m.createElement(
    "section",
    b(p({}, e), {
      className: I(t, s.carousel_item)
    }),
    n
  );
}, ne = R(te), re = H((ie, P) => {
  var N = ie, {
    className: t,
    showIndicator: n = !0,
    autoplay: e = !1,
    duration: a = 3e3,
    speed: u = 500,
    timingFunction: j = "ease",
    children: y,
    onChange: g,
    indicatorRender: A
  } = N, K = k(N, [
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
  const _ = G(), [o, d] = L(0), $ = E(0), c = O(() => D.toArray(y), [y]);
  let h = E();
  const l = v(() => d((r) => r === c.length - 1 ? 0 : r + 1), [c]), f = v(() => d((r) => r === 0 ? c.length - 1 : r - 1), [c]);
  M(() => {
    g && o !== $.current && g.call(null, o, $.current), $.current = o;
  }, [o, g]), M(() => (e && c.length > 1 && (h.current = window.setTimeout(l, a)), () => window.clearTimeout(h.current)), [e, o, a, c, l]), U(P, () => ({
    next: l,
    prev: f,
    goTo: (r) => d(r)
  }), [l, f]);
  const S = v((r) => {
    r.stopPropagation(), (r.key === "Enter" || r.key === " ") && r.currentTarget.click(), r.key === "ArrowRight" && l(), r.key === "ArrowLeft" && f();
  }, [l, f]);
  return /* @__PURE__ */ m.createElement(
    "div",
    b(p({}, K), {
      className: I(t, s.carousel)
    }),
    /* @__PURE__ */ m.createElement(
      "div",
      {
        className: s.container,
        style: {
          transform: `translate(${-o * 100 + "%"}, 0)`,
          transitionDuration: `${u}ms`,
          transitionTimingFunction: j
        }
      },
      D.map(y, (r, i) => typeof r == "undefined" ? r : q(r, {
        id: `carousel-item-${_}-${i}`,
        role: "tabpanel",
        "aria-labelledby": `carousel-indicator-${_}-${i}`,
        "aria-hidden": o === i
      }))
    ),
    n && (A ? A(o, c.length) : /* @__PURE__ */ m.createElement(
      "ul",
      {
        className: s.indicator,
        role: "tablist"
      },
      c.map((r, i) => /* @__PURE__ */ m.createElement(
        "li",
        {
          key: i,
          id: `carousel-indicator-${_}-${i}`,
          role: "tab",
          "aria-label": `change to page ${i + 1}`,
          "aria-controls": `carousel-item-${_}-${i}`,
          "aria-selected": o === i,
          tabIndex: 0,
          className: I(s.indicator_item, { [s.active]: o === i }),
          onClick: () => d(i),
          onKeyDown: S
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
