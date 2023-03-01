var x = Object.defineProperty, G = Object.defineProperties;
var J = Object.getOwnPropertyDescriptors;
var k = Object.getOwnPropertySymbols;
var S = Object.prototype.hasOwnProperty, z = Object.prototype.propertyIsEnumerable;
var M = (t, n, e) => n in t ? x(t, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[n] = e, E = (t, n) => {
  for (var e in n || (n = {}))
    S.call(n, e) && M(t, e, n[e]);
  if (k)
    for (var e of k(n))
      z.call(n, e) && M(t, e, n[e]);
  return t;
}, q = (t, n) => G(t, J(n));
var h = (t, n) => {
  var e = {};
  for (var r in t)
    S.call(t, r) && n.indexOf(r) < 0 && (e[r] = t[r]);
  if (t != null && k)
    for (var r of k(t))
      n.indexOf(r) < 0 && z.call(t, r) && (e[r] = t[r]);
  return e;
};
import l, { useRef as v, useCallback as w, forwardRef as Q, useState as O, useMemo as P, Children as B, useEffect as g, useImperativeHandle as V, cloneElement as W, memo as X } from "react";
const p = (...t) => t.reduce((n, e) => n.concat(
  typeof e == "string" ? e : e && Object.keys(e).map((r) => e[r] ? r : "")
), []).filter(Boolean).join(" "), Y = () => v(Math.random().toString(36).substring(2, 7)).current, L = () => w((t) => {
  t.stopPropagation();
  const n = t.currentTarget.parentNode, e = Array.from(n.childNodes), r = e.findIndex((c) => c === t.currentTarget);
  (t.key === "Enter" || t.key === " ") && (t.preventDefault(), t.currentTarget.click()), t.key === "ArrowRight" && (r === e.length - 1 ? e[0].focus() : e[r + 1].focus()), t.key === "ArrowLeft" && (r === 0 ? e[e.length - 1].focus() : e[r - 1].focus());
}, []), Z = "_carousel_1jakq_1", ee = "_container_1jakq_6", te = "_slide_1jakq_12", ne = "_carousel_item_1jakq_17", re = "_fade_1jakq_22", y = {
  carousel: Z,
  container: ee,
  slide: te,
  carousel_item: ne,
  fade: re
}, ae = (D) => {
  var $ = D, {
    style: t,
    className: n,
    uid: e,
    index: r,
    active: c,
    effect: d,
    speed: a,
    children: u
  } = $, s = h($, [
    "style",
    "className",
    "uid",
    "index",
    "active",
    "effect",
    "speed",
    "children"
  ]);
  return /* @__PURE__ */ l.createElement(
    "section",
    q(E({}, s), {
      style: Object.assign({ transitionDuration: `${a}ms` }, t),
      className: p(n, y.carousel_item, { [y.fade]: d === "fade" }),
      id: `carousel-item-${e}-${r}`,
      role: "tabpanel",
      "data-active": c,
      "aria-labelledby": `carousel-indicator-${e}-${r}`,
      "aria-hidden": !c
    }),
    u
  );
}, oe = "_indicator_jqkl4_1", ie = "_indicator_item_jqkl4_11", se = "_indicator_item_inner_jqkl4_21", ce = "_animation_jqkl4_35", le = "_indicatorAnim_jqkl4_1", b = {
  indicator: oe,
  indicator_item: ie,
  indicator_item_inner: se,
  animation: ce,
  indicatorAnim: le
}, me = ({
  uid: t,
  itemCount: n,
  activeIndex: e,
  animation: r,
  duration: c,
  goTo: d
}) => {
  const a = L();
  return /* @__PURE__ */ l.createElement(
    "ul",
    {
      className: b.indicator,
      role: "tablist"
    },
    Array.from({ length: n }).map((u, s) => /* @__PURE__ */ l.createElement(
      "li",
      {
        key: s,
        id: `carousel-indicator-${t}-${s}`,
        role: "tab",
        "aria-label": `change to page ${s + 1}`,
        "aria-controls": `carousel-item-${t}-${s}`,
        "aria-selected": e === s,
        tabIndex: e === s ? 0 : -1,
        "data-active": e === s,
        className: b.indicator_item,
        onClick: () => d(s),
        onKeyDown: a
      },
      /* @__PURE__ */ l.createElement(
        "div",
        {
          className: p(b.indicator_item_inner, { [b.animation]: r }),
          style: { animationDuration: `${c}ms` }
        }
      )
    ))
  );
}, de = "_indicator_1yfvs_1", ue = "_indicator_item_1yfvs_11", H = {
  indicator: de,
  indicator_item: ue
}, _e = ({
  uid: t,
  itemCount: n,
  activeIndex: e,
  goTo: r
}) => {
  const c = L();
  return /* @__PURE__ */ l.createElement(
    "ul",
    {
      className: H.indicator,
      role: "tablist"
    },
    Array.from({ length: n }).map((d, a) => /* @__PURE__ */ l.createElement(
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
        onClick: () => r(a),
        onKeyDown: c
      }
    ))
  );
}, fe = {
  default: "_default_hwawz_1"
}, ye = Q((ke, $) => {
  var I = ke, {
    className: t,
    autoplay: n = !1,
    effect: e = "slide",
    duration: r = 3e3,
    speed: c = 500,
    timingFunction: d = "ease",
    indicator: a = "solid",
    children: u,
    onChange: s
  } = I, D = h(I, [
    "className",
    "autoplay",
    "effect",
    "duration",
    "speed",
    "timingFunction",
    "indicator",
    "children",
    "onChange"
  ]);
  const T = Y(), [m, j] = O(0), A = v(0), o = P(() => B.count(u), [u]), C = v(), [U, K] = O(n && o > 1), R = P(() => a === "solid" ? me : a === "dot" ? _e : a, [a]), _ = w(() => j((i) => i === o - 1 ? 0 : i + 1), [o]), N = w(() => j((i) => i === 0 ? o - 1 : i - 1), [o]), f = w((i) => j(() => i < 0 ? -i > o ? 0 : o + i : i > o - 1 ? o - 1 : i), [o]);
  return g(() => {
    s && m !== A.current && s.call(null, m, A.current), A.current = m;
  }, [m, s]), g(() => (n && o > 1 && (C.current = window.setTimeout(_, r)), () => window.clearTimeout(C.current)), [n, m, r, o, _]), g(() => (n && o > 1 && window.requestAnimationFrame(() => K(!0)), () => K(!1)), [n, r, o]), g(() => {
    f(0);
  }, [o, f]), V($, () => ({
    next: _,
    prev: N,
    goTo: f
  }), [_, N, f]), /* @__PURE__ */ l.createElement(
    "div",
    q(E({}, D), {
      className: p(t, fe.default, y.carousel)
    }),
    /* @__PURE__ */ l.createElement(
      "div",
      {
        className: p(y.container, { [y.slide]: e === "slide" }),
        style: e === "slide" ? {
          transform: `translate(${-m * 100 + "%"}, 0)`,
          transitionDuration: `${c}ms`,
          transitionTimingFunction: d
        } : void 0
      },
      B.map(u, (i, F) => typeof i == "undefined" ? i : W(i, {
        uid: T,
        index: F,
        active: m === F,
        effect: e === "fade" ? "fade" : "none",
        speed: c
      }))
    ),
    R && /* @__PURE__ */ l.createElement(
      R,
      {
        uid: T,
        activeIndex: m,
        itemCount: o,
        animation: U,
        duration: r,
        next: _,
        prev: N,
        goTo: f
      }
    )
  );
}), $e = X(ye);
$e.Item = ae;
export {
  $e as default,
  L as useAccessibility
};
