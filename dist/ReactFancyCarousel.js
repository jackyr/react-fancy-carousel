var V = Object.defineProperty, W = Object.defineProperties;
var X = Object.getOwnPropertyDescriptors;
var g = Object.getOwnPropertySymbols;
var z = Object.prototype.hasOwnProperty, O = Object.prototype.propertyIsEnumerable;
var S = (t, r, e) => r in t ? V(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e, v = (t, r) => {
  for (var e in r || (r = {}))
    z.call(r, e) && S(t, e, r[e]);
  if (g)
    for (var e of g(r))
      O.call(r, e) && S(t, e, r[e]);
  return t;
}, I = (t, r) => W(t, X(r));
var D = (t, r) => {
  var e = {};
  for (var n in t)
    z.call(t, n) && r.indexOf(n) < 0 && (e[n] = t[n]);
  if (t != null && g)
    for (var n of g(t))
      r.indexOf(n) < 0 && O.call(t, n) && (e[n] = t[n]);
  return e;
};
import m, { useRef as j, useCallback as A, forwardRef as Y, useState as P, useMemo as B, Children as H, useEffect as w, useImperativeHandle as Z, cloneElement as x, memo as L } from "react";
const N = (...t) => t.reduce((r, e) => r.concat(
  typeof e == "string" ? e : e && Object.keys(e).map((n) => e[n] ? n : "")
), []).filter(Boolean).join(" "), ee = () => j(Math.random().toString(36).substring(2, 7)).current, G = () => A((t) => {
  t.preventDefault(), t.stopPropagation();
  const r = t.currentTarget.parentNode, e = Array.from(r.childNodes), n = e.findIndex((i) => i === t.currentTarget);
  (t.key === "Enter" || t.key === " ") && t.currentTarget.click(), t.key === "ArrowRight" && (n === e.length - 1 ? e[0].focus() : e[n + 1].focus()), t.key === "ArrowLeft" && (n === 0 ? e[e.length - 1].focus() : e[n - 1].focus());
}, []), te = "_carousel_1jakq_1", re = "_container_1jakq_6", ne = "_slide_1jakq_12", ae = "_carousel_item_1jakq_17", oe = "_fade_1jakq_22", y = {
  carousel: te,
  container: re,
  slide: ne,
  carousel_item: ae,
  fade: oe
}, se = ($) => {
  var k = $, {
    style: t,
    className: r,
    uid: e,
    index: n,
    active: i,
    effect: d,
    speed: o,
    children: u
  } = k, c = D(k, [
    "style",
    "className",
    "uid",
    "index",
    "active",
    "effect",
    "speed",
    "children"
  ]);
  return /* @__PURE__ */ m.createElement(
    "section",
    I(v({}, c), {
      style: Object.assign({ transitionDuration: `${o}ms` }, t),
      className: N(r, y.carousel_item, { [y.fade]: d === "fade" }),
      id: `carousel-item-${e}-${n}`,
      role: "tabpanel",
      "data-active": i,
      "aria-labelledby": `carousel-indicator-${e}-${n}`,
      "aria-hidden": !i
    }),
    u
  );
}, ce = "_indicator_jqkl4_1", ie = "_indicator_item_jqkl4_11", le = "_indicator_item_inner_jqkl4_21", me = "_animation_jqkl4_35", ue = "_indicatorAnim_jqkl4_1", b = {
  indicator: ce,
  indicator_item: ie,
  indicator_item_inner: le,
  animation: me,
  indicatorAnim: ue
}, de = ({
  uid: t,
  itemCount: r,
  activeIndex: e,
  animation: n,
  duration: i,
  goTo: d
}) => {
  const o = G();
  return /* @__PURE__ */ m.createElement(
    "ul",
    {
      className: b.indicator,
      role: "tablist"
    },
    Array.from({ length: r }).map((u, c) => /* @__PURE__ */ m.createElement(
      "li",
      {
        key: c,
        id: `carousel-indicator-${t}-${c}`,
        role: "tab",
        "aria-label": `change to page ${c + 1}`,
        "aria-controls": `carousel-item-${t}-${c}`,
        "aria-selected": e === c,
        tabIndex: e === c ? 0 : -1,
        "data-active": e === c,
        className: b.indicator_item,
        onClick: () => d(c),
        onKeyDown: o
      },
      /* @__PURE__ */ m.createElement(
        "div",
        {
          className: N(b.indicator_item_inner, { [b.animation]: n }),
          style: { animationDuration: `${i}ms` }
        }
      )
    ))
  );
}, _e = "_indicator_1yfvs_1", fe = "_indicator_item_1yfvs_11", U = {
  indicator: _e,
  indicator_item: fe
}, ye = ({
  uid: t,
  itemCount: r,
  activeIndex: e,
  goTo: n
}) => {
  const i = G();
  return /* @__PURE__ */ m.createElement(
    "ul",
    {
      className: U.indicator,
      role: "tablist"
    },
    Array.from({ length: r }).map((d, o) => /* @__PURE__ */ m.createElement(
      "li",
      {
        key: o,
        id: `carousel-indicator-${t}-${o}`,
        role: "tab",
        "aria-label": `change to page ${o + 1}`,
        "aria-controls": `carousel-item-${t}-${o}`,
        "aria-selected": e === o,
        tabIndex: e === o ? 0 : -1,
        "data-active": e === o,
        className: U.indicator_item,
        onClick: () => n(o),
        onKeyDown: i
      }
    ))
  );
}, $e = {
  default: "_default_hwawz_1"
}, ke = Y((we, J) => {
  var T = we, {
    className: t,
    autoplay: r = !1,
    effect: e = "slide",
    duration: n = 3e3,
    speed: i = 500,
    timingFunction: d = "ease",
    infiniteLoop: o = !0,
    indicator: u = "solid",
    children: c,
    onChange: $
  } = T, k = D(T, [
    "className",
    "autoplay",
    "effect",
    "duration",
    "speed",
    "timingFunction",
    "infiniteLoop",
    "indicator",
    "children",
    "onChange"
  ]);
  const C = ee(), [l, E] = P(0), q = j(0), a = B(() => H.count(c), [c]), K = j(a), h = j(), [Q, R] = P(r && a > 1), F = B(() => u === "solid" ? de : u === "dot" ? ye : u, [u]), _ = A(() => E((s) => s === a - 1 ? o ? 0 : s : s + 1), [o, a]), p = A(() => E((s) => s === 0 ? o ? a - 1 : s : s - 1), [o, a]), f = A((s) => E(() => s < 0 ? -s > a ? 0 : a + s : s > a - 1 ? a - 1 : s), [a]);
  return w(() => {
    $ && l !== q.current && $.call(null, l, q.current), q.current = l;
  }, [l, $]), w(() => (r && a > 1 && (!o && l === a - 1 ? window.clearTimeout(h.current) : h.current = window.setTimeout(_, n)), () => window.clearTimeout(h.current)), [r, l, n, o, a, _]), w(() => (r && a > 1 && window.requestAnimationFrame(() => R(!0)), () => R(!1)), [r, n, a]), w(() => {
    a !== K.current && f(0), K.current = a;
  }, [a, f]), Z(J, () => ({
    next: _,
    prev: p,
    goTo: f
  }), [_, p, f]), /* @__PURE__ */ m.createElement(
    "div",
    I(v({}, k), {
      className: N(t, $e.default, y.carousel)
    }),
    /* @__PURE__ */ m.createElement(
      "div",
      {
        className: N(y.container, { [y.slide]: e === "slide" }),
        style: e === "slide" ? {
          transform: `translate(${-l * 100 + "%"}, 0)`,
          transitionDuration: `${i}ms`,
          transitionTimingFunction: d
        } : void 0
      },
      H.map(c, (s, M) => typeof s == "undefined" ? s : x(s, {
        uid: C,
        index: M,
        active: l === M,
        effect: e === "fade" ? "fade" : "none",
        speed: i
      }))
    ),
    F && /* @__PURE__ */ m.createElement(
      F,
      {
        uid: C,
        activeIndex: l,
        itemCount: a,
        animation: Q,
        duration: n,
        next: _,
        prev: p,
        goTo: f
      }
    )
  );
}), ge = L(ke);
ge.Item = se;
export {
  ge as default,
  G as useAccessibility
};
