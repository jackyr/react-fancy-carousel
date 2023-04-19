var V = Object.defineProperty, W = Object.defineProperties;
var X = Object.getOwnPropertyDescriptors;
var g = Object.getOwnPropertySymbols;
var O = Object.prototype.hasOwnProperty, P = Object.prototype.propertyIsEnumerable;
var S = (t, r, e) => r in t ? V(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e, D = (t, r) => {
  for (var e in r || (r = {}))
    O.call(r, e) && S(t, e, r[e]);
  if (g)
    for (var e of g(r))
      P.call(r, e) && S(t, e, r[e]);
  return t;
}, T = (t, r) => W(t, X(r));
var j = (t, r) => {
  var e = {};
  for (var n in t)
    O.call(t, n) && r.indexOf(n) < 0 && (e[n] = t[n]);
  if (t != null && g)
    for (var n of g(t))
      r.indexOf(n) < 0 && P.call(t, n) && (e[n] = t[n]);
  return e;
};
import l, { useRef as w, useCallback as N, forwardRef as Y, useState as z, useMemo as B, Children as H, useEffect as p, useImperativeHandle as Z, cloneElement as x, memo as L } from "react";
const A = (...t) => t.reduce((r, e) => r.concat(
  typeof e == "string" ? e : e && Object.keys(e).map((n) => e[n] ? n : "")
), []).filter(Boolean).join(" "), ee = () => w(Math.random().toString(36).substring(2, 7)).current, G = () => N((t) => {
  t.preventDefault(), t.stopPropagation();
  const r = t.currentTarget.parentNode, e = Array.from(r.childNodes), n = e.findIndex((s) => s === t.currentTarget);
  (t.key === "Enter" || t.key === " ") && t.currentTarget.click(), t.key === "ArrowRight" && (n === e.length - 1 ? e[0].focus() : e[n + 1].focus()), t.key === "ArrowLeft" && (n === 0 ? e[e.length - 1].focus() : e[n - 1].focus());
}, []), te = "_carousel_1jakq_1", re = "_container_1jakq_6", ne = "_slide_1jakq_12", ae = "_carousel_item_1jakq_17", oe = "_fade_1jakq_22", $ = {
  carousel: te,
  container: re,
  slide: ne,
  carousel_item: ae,
  fade: oe
}, ie = (y) => {
  var k = y, {
    style: t,
    className: r,
    uid: e,
    index: n,
    active: s,
    effect: d,
    speed: o,
    children: u
  } = k, c = j(k, [
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
    T(D({}, c), {
      style: Object.assign({ transitionDuration: `${o}ms` }, t),
      className: A(r, $.carousel_item, { [$.fade]: d === "fade" }),
      id: `carousel-item-${e}-${n}`,
      role: "tabpanel",
      "data-active": s,
      "aria-labelledby": `carousel-indicator-${e}-${n}`,
      "aria-hidden": !s
    }),
    u
  );
}, ce = "_indicator_1b5pa_1", se = "_indicator_item_1b5pa_13", le = "_indicator_item_outer_1b5pa_19", me = "_indicator_item_inner_1b5pa_28", ue = "_animation_1b5pa_42", de = "_indicatorAnim_1b5pa_1", b = {
  indicator: ce,
  indicator_item: se,
  indicator_item_outer: le,
  indicator_item_inner: me,
  animation: ue,
  indicatorAnim: de
}, _e = ({
  uid: t,
  itemCount: r,
  activeIndex: e,
  animation: n,
  duration: s,
  goTo: d
}) => {
  const o = G();
  return /* @__PURE__ */ l.createElement(
    "ul",
    {
      className: b.indicator,
      role: "tablist"
    },
    Array.from({ length: r }).map((u, c) => /* @__PURE__ */ l.createElement(
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
      /* @__PURE__ */ l.createElement("div", { className: b.indicator_item_outer }, /* @__PURE__ */ l.createElement(
        "div",
        {
          className: A(b.indicator_item_inner, { [b.animation]: n }),
          style: { animationDuration: `${s}ms` }
        }
      ))
    ))
  );
}, fe = "_indicator_1kk46_1", be = "_indicator_item_1kk46_13", U = {
  indicator: fe,
  indicator_item: be
}, $e = ({
  uid: t,
  itemCount: r,
  activeIndex: e,
  goTo: n
}) => {
  const s = G();
  return /* @__PURE__ */ l.createElement(
    "ul",
    {
      className: U.indicator,
      role: "tablist"
    },
    Array.from({ length: r }).map((d, o) => /* @__PURE__ */ l.createElement(
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
        onKeyDown: s
      }
    ))
  );
}, ye = {
  default: "_default_1xqo5_1"
}, ke = Y((pe, J) => {
  var q = pe, {
    className: t,
    autoplay: r = !1,
    effect: e = "slide",
    duration: n = 3e3,
    speed: s = 500,
    timingFunction: d = "ease",
    infiniteLoop: o = !0,
    indicator: u = "solid",
    children: c,
    onChange: y
  } = q, k = j(q, [
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
  const C = ee(), [m, E] = z(0), I = w(0), a = B(() => H.count(c), [c]), K = w(a), h = w(), [Q, R] = z(r && a > 1), F = B(() => u === "solid" ? _e : u === "dot" ? $e : u, [u]), _ = N(() => E((i) => i === a - 1 ? o ? 0 : i : i + 1), [o, a]), v = N(() => E((i) => i === 0 ? o ? a - 1 : i : i - 1), [o, a]), f = N((i) => E(() => i < 0 ? -i > a ? 0 : a + i : i > a - 1 ? a - 1 : i), [a]);
  return p(() => {
    y && m !== I.current && y.call(null, m, I.current), I.current = m;
  }, [m, y]), p(() => (r && a > 1 && (!o && m === a - 1 ? window.clearTimeout(h.current) : h.current = window.setTimeout(_, n)), () => window.clearTimeout(h.current)), [r, m, n, o, a, _]), p(() => (r && a > 1 && window.requestAnimationFrame(() => R(!0)), () => R(!1)), [r, n, a]), p(() => {
    a !== K.current && f(0), K.current = a;
  }, [a, f]), Z(J, () => ({
    next: _,
    prev: v,
    goTo: f
  }), [_, v, f]), /* @__PURE__ */ l.createElement(
    "div",
    T(D({}, k), {
      className: A(t, ye.default, $.carousel)
    }),
    /* @__PURE__ */ l.createElement(
      "div",
      {
        className: A($.container, { [$.slide]: e === "slide" }),
        style: e === "slide" ? {
          transform: `translate(${-m * 100 + "%"}, 0)`,
          transitionDuration: `${s}ms`,
          transitionTimingFunction: d
        } : void 0
      },
      H.map(c, (i, M) => typeof i == "undefined" ? i : x(i, {
        uid: C,
        index: M,
        active: m === M,
        effect: e === "fade" ? "fade" : "none",
        speed: s
      }))
    ),
    F && /* @__PURE__ */ l.createElement(
      F,
      {
        uid: C,
        activeIndex: m,
        itemCount: a,
        animation: Q,
        duration: n,
        next: _,
        prev: v,
        goTo: f
      }
    )
  );
}), ge = L(ke);
ge.Item = ie;
export {
  ge as default,
  G as useAccessibility
};
