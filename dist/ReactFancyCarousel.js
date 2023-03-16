var Q = Object.defineProperty, V = Object.defineProperties;
var W = Object.getOwnPropertyDescriptors;
var g = Object.getOwnPropertySymbols;
var S = Object.prototype.hasOwnProperty, z = Object.prototype.propertyIsEnumerable;
var M = (t, r, e) => r in t ? Q(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e, p = (t, r) => {
  for (var e in r || (r = {}))
    S.call(r, e) && M(t, e, r[e]);
  if (g)
    for (var e of g(r))
      z.call(r, e) && M(t, e, r[e]);
  return t;
}, v = (t, r) => V(t, W(r));
var D = (t, r) => {
  var e = {};
  for (var n in t)
    S.call(t, n) && r.indexOf(n) < 0 && (e[n] = t[n]);
  if (t != null && g)
    for (var n of g(t))
      r.indexOf(n) < 0 && z.call(t, n) && (e[n] = t[n]);
  return e;
};
import m, { useRef as I, useCallback as j, forwardRef as X, useState as O, useMemo as P, Children as B, useEffect as w, useImperativeHandle as Y, cloneElement as Z, memo as x } from "react";
const A = (...t) => t.reduce((r, e) => r.concat(
  typeof e == "string" ? e : e && Object.keys(e).map((n) => e[n] ? n : "")
), []).filter(Boolean).join(" "), L = () => I(Math.random().toString(36).substring(2, 7)).current, U = () => j((t) => {
  t.preventDefault(), t.stopPropagation();
  const r = t.currentTarget.parentNode, e = Array.from(r.childNodes), n = e.findIndex((c) => c === t.currentTarget);
  (t.key === "Enter" || t.key === " ") && t.currentTarget.click(), t.key === "ArrowRight" && (n === e.length - 1 ? e[0].focus() : e[n + 1].focus()), t.key === "ArrowLeft" && (n === 0 ? e[e.length - 1].focus() : e[n - 1].focus());
}, []), ee = "_carousel_1jakq_1", te = "_container_1jakq_6", re = "_slide_1jakq_12", ne = "_carousel_item_1jakq_17", ae = "_fade_1jakq_22", y = {
  carousel: ee,
  container: te,
  slide: re,
  carousel_item: ne,
  fade: ae
}, oe = ($) => {
  var k = $, {
    style: t,
    className: r,
    uid: e,
    index: n,
    active: c,
    effect: d,
    speed: a,
    children: u
  } = k, i = D(k, [
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
    v(p({}, i), {
      style: Object.assign({ transitionDuration: `${a}ms` }, t),
      className: A(r, y.carousel_item, { [y.fade]: d === "fade" }),
      id: `carousel-item-${e}-${n}`,
      role: "tabpanel",
      "data-active": c,
      "aria-labelledby": `carousel-indicator-${e}-${n}`,
      "aria-hidden": !c
    }),
    u
  );
}, se = "_indicator_jqkl4_1", ie = "_indicator_item_jqkl4_11", ce = "_indicator_item_inner_jqkl4_21", le = "_animation_jqkl4_35", me = "_indicatorAnim_jqkl4_1", b = {
  indicator: se,
  indicator_item: ie,
  indicator_item_inner: ce,
  animation: le,
  indicatorAnim: me
}, ue = ({
  uid: t,
  itemCount: r,
  activeIndex: e,
  animation: n,
  duration: c,
  goTo: d
}) => {
  const a = U();
  return /* @__PURE__ */ m.createElement(
    "ul",
    {
      className: b.indicator,
      role: "tablist"
    },
    Array.from({ length: r }).map((u, i) => /* @__PURE__ */ m.createElement(
      "li",
      {
        key: i,
        id: `carousel-indicator-${t}-${i}`,
        role: "tab",
        "aria-label": `change to page ${i + 1}`,
        "aria-controls": `carousel-item-${t}-${i}`,
        "aria-selected": e === i,
        tabIndex: e === i ? 0 : -1,
        "data-active": e === i,
        className: b.indicator_item,
        onClick: () => d(i),
        onKeyDown: a
      },
      /* @__PURE__ */ m.createElement(
        "div",
        {
          className: A(b.indicator_item_inner, { [b.animation]: n }),
          style: { animationDuration: `${c}ms` }
        }
      )
    ))
  );
}, de = "_indicator_1yfvs_1", _e = "_indicator_item_1yfvs_11", H = {
  indicator: de,
  indicator_item: _e
}, fe = ({
  uid: t,
  itemCount: r,
  activeIndex: e,
  goTo: n
}) => {
  const c = U();
  return /* @__PURE__ */ m.createElement(
    "ul",
    {
      className: H.indicator,
      role: "tablist"
    },
    Array.from({ length: r }).map((d, a) => /* @__PURE__ */ m.createElement(
      "li",
      {
        key: a,
        id: `carousel-indicator-${t}-${a}`,
        role: "tab",
        "aria-label": `change to page ${a + 1}`,
        "aria-controls": `carousel-item-${t}-${a}`,
        "aria-selected": e === a,
        tabIndex: e === a ? 0 : -1,
        "data-active": e === a,
        className: H.indicator_item,
        onClick: () => n(a),
        onKeyDown: c
      }
    ))
  );
}, ye = {
  default: "_default_hwawz_1"
}, $e = X((ge, G) => {
  var T = ge, {
    className: t,
    autoplay: r = !1,
    effect: e = "slide",
    duration: n = 3e3,
    speed: c = 500,
    timingFunction: d = "ease",
    infiniteLoop: a = !0,
    indicator: u = "solid",
    children: i,
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
  const C = L(), [l, N] = O(0), E = I(0), o = P(() => B.count(i), [i]), q = I(), [J, K] = O(r && o > 1), R = P(() => u === "solid" ? ue : u === "dot" ? fe : u, [u]), _ = j(() => N((s) => s === o - 1 ? a ? 0 : s : s + 1), [a, o]), h = j(() => N((s) => s === 0 ? a ? o - 1 : s : s - 1), [a, o]), f = j((s) => N(() => s < 0 ? -s > o ? 0 : o + s : s > o - 1 ? o - 1 : s), [o]);
  return w(() => {
    $ && l !== E.current && $.call(null, l, E.current), E.current = l;
  }, [l, $]), w(() => (r && o > 1 && (!a && l === o - 1 ? window.clearTimeout(q.current) : q.current = window.setTimeout(_, n)), () => window.clearTimeout(q.current)), [r, l, n, a, o, _]), w(() => (r && o > 1 && window.requestAnimationFrame(() => K(!0)), () => K(!1)), [r, n, o]), w(() => {
    f(0);
  }, [o, f]), Y(G, () => ({
    next: _,
    prev: h,
    goTo: f
  }), [_, h, f]), /* @__PURE__ */ m.createElement(
    "div",
    v(p({}, k), {
      className: A(t, ye.default, y.carousel)
    }),
    /* @__PURE__ */ m.createElement(
      "div",
      {
        className: A(y.container, { [y.slide]: e === "slide" }),
        style: e === "slide" ? {
          transform: `translate(${-l * 100 + "%"}, 0)`,
          transitionDuration: `${c}ms`,
          transitionTimingFunction: d
        } : void 0
      },
      B.map(i, (s, F) => typeof s == "undefined" ? s : Z(s, {
        uid: C,
        index: F,
        active: l === F,
        effect: e === "fade" ? "fade" : "none",
        speed: c
      }))
    ),
    R && /* @__PURE__ */ m.createElement(
      R,
      {
        uid: C,
        activeIndex: l,
        itemCount: o,
        animation: J,
        duration: n,
        next: _,
        prev: h,
        goTo: f
      }
    )
  );
}), ke = x($e);
ke.Item = oe;
export {
  ke as default,
  U as useAccessibility
};
