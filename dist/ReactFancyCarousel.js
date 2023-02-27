var x = Object.defineProperty, G = Object.defineProperties;
var J = Object.getOwnPropertyDescriptors;
var y = Object.getOwnPropertySymbols;
var M = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var F = (t, n, e) => n in t ? x(t, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[n] = e, E = (t, n) => {
  for (var e in n || (n = {}))
    M.call(n, e) && F(t, e, n[e]);
  if (y)
    for (var e of y(n))
      S.call(n, e) && F(t, e, n[e]);
  return t;
}, D = (t, n) => G(t, J(n));
var I = (t, n) => {
  var e = {};
  for (var a in t)
    M.call(t, a) && n.indexOf(a) < 0 && (e[a] = t[a]);
  if (t != null && y)
    for (var a of y(t))
      n.indexOf(a) < 0 && S.call(t, a) && (e[a] = t[a]);
  return e;
};
import l, { useRef as h, useCallback as p, forwardRef as Q, useState as O, useMemo as P, Children as B, useEffect as b, useImperativeHandle as V, cloneElement as W, memo as X } from "react";
const j = (...t) => t.reduce((n, e) => n.concat(
  typeof e == "string" ? e : Object.keys(e || {}).map((a) => (e || {})[a] ? a : "")
), []).filter(Boolean).join(" "), Y = () => h(Math.random().toString(36).substring(2, 7)).current, L = () => p((t) => {
  t.stopPropagation();
  const n = t.currentTarget.parentNode, e = Array.from(n.childNodes), a = e.findIndex((c) => c === t.currentTarget);
  (t.key === "Enter" || t.key === " ") && (t.preventDefault(), t.currentTarget.click()), t.key === "ArrowRight" && (a === e.length - 1 ? e[0].focus() : e[a + 1].focus()), t.key === "ArrowLeft" && (a === 0 ? e[e.length - 1].focus() : e[a - 1].focus());
}, []), Z = "_carousel_1jakq_1", ee = "_container_1jakq_6", te = "_slide_1jakq_12", ne = "_carousel_item_1jakq_17", ae = "_fade_1jakq_22", k = {
  carousel: Z,
  container: ee,
  slide: te,
  carousel_item: ne,
  fade: ae
}, re = (q) => {
  var $ = q, {
    style: t,
    className: n,
    uid: e,
    index: a,
    active: c,
    effect: u,
    speed: r,
    children: d
  } = $, s = I($, [
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
    D(E({}, s), {
      style: Object.assign({ transitionDuration: `${r}ms` }, t),
      className: j(n, k.carousel_item, { [k.fade]: u === "fade" }),
      id: `carousel-item-${e}-${a}`,
      role: "tabpanel",
      "data-active": c,
      "aria-labelledby": `carousel-indicator-${e}-${a}`,
      "aria-hidden": !c
    }),
    d
  );
}, oe = "_indicator_akzuj_1", ie = "_indicator_item_akzuj_11", se = "_indicator_item_inner_akzuj_21", ce = "_animation_akzuj_35", le = "_indicatorAnim_akzuj_1", g = {
  indicator: oe,
  indicator_item: ie,
  indicator_item_inner: se,
  animation: ce,
  indicatorAnim: le
}, me = ({
  uid: t,
  itemCount: n,
  activeIndex: e,
  animation: a,
  duration: c,
  goTo: u
}) => {
  const r = L();
  return /* @__PURE__ */ l.createElement(
    "ul",
    {
      className: g.indicator,
      role: "tablist"
    },
    Array.from({ length: n }).map((d, s) => /* @__PURE__ */ l.createElement(
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
        className: g.indicator_item,
        onClick: () => u(s),
        onKeyDown: r
      },
      /* @__PURE__ */ l.createElement(
        "div",
        {
          className: j(g.indicator_item_inner, { [g.animation]: a }),
          style: { animationDuration: `${c}ms` }
        }
      )
    ))
  );
}, ue = "_indicator_qkbio_1", de = "_indicator_item_qkbio_11", H = {
  indicator: ue,
  indicator_item: de
}, _e = ({
  uid: t,
  itemCount: n,
  activeIndex: e,
  goTo: a
}) => {
  const c = L();
  return /* @__PURE__ */ l.createElement(
    "ul",
    {
      className: H.indicator,
      role: "tablist"
    },
    Array.from({ length: n }).map((u, r) => /* @__PURE__ */ l.createElement(
      "li",
      {
        key: r,
        id: `carousel-indicator-${t}-${r}`,
        role: "tab",
        "aria-label": `change to page ${r + 1}`,
        "aria-controls": `carousel-item-${t}-${r}`,
        "aria-selected": e === r,
        tabIndex: e === r ? 0 : -1,
        "data-active": e === r,
        className: H.indicator_item,
        onClick: () => a(r),
        onKeyDown: c
      }
    ))
  );
}, fe = Q(($e, $) => {
  var T = $e, {
    className: t,
    autoplay: n = !1,
    effect: e = "slide",
    duration: a = 3e3,
    speed: c = 500,
    timingFunction: u = "ease",
    indicator: r = "solid",
    children: d,
    onChange: s
  } = T, q = I(T, [
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
  const v = Y(), [m, w] = O(0), A = h(0), o = P(() => B.count(d), [d]), z = h(), [U, C] = O(n && o > 1), K = P(() => r === "solid" ? me : r === "dot" ? _e : r, [r]), _ = p(() => w((i) => i === o - 1 ? 0 : i + 1), [o]), N = p(() => w((i) => i === 0 ? o - 1 : i - 1), [o]), f = p((i) => w(() => i < 0 ? -i > o ? 0 : o + i : i > o - 1 ? o - 1 : i), [o]);
  return b(() => {
    s && m !== A.current && s.call(null, m, A.current), A.current = m;
  }, [m, s]), b(() => (n && o > 1 && (z.current = window.setTimeout(_, a)), () => window.clearTimeout(z.current)), [n, m, a, o, _]), b(() => (n && o > 1 && window.requestAnimationFrame(() => C(!0)), () => C(!1)), [n, a, o]), b(() => {
    f(0);
  }, [o, f]), V($, () => ({
    next: _,
    prev: N,
    goTo: f
  }), [_, N, f]), /* @__PURE__ */ l.createElement(
    "div",
    D(E({}, q), {
      className: j(t, k.carousel)
    }),
    /* @__PURE__ */ l.createElement(
      "div",
      {
        className: j(k.container, { [k.slide]: e === "slide" }),
        style: e === "slide" ? {
          transform: `translate(${-m * 100 + "%"}, 0)`,
          transitionDuration: `${c}ms`,
          transitionTimingFunction: u
        } : void 0
      },
      B.map(d, (i, R) => typeof i == "undefined" ? i : W(i, {
        uid: v,
        index: R,
        active: m === R,
        effect: e === "fade" ? "fade" : "none",
        speed: c
      }))
    ),
    K && /* @__PURE__ */ l.createElement(
      K,
      {
        uid: v,
        activeIndex: m,
        itemCount: o,
        animation: U,
        duration: a,
        next: _,
        prev: N,
        goTo: f
      }
    )
  );
}), ke = X(fe);
ke.Item = re;
export {
  ke as default,
  L as useAccessibility
};
