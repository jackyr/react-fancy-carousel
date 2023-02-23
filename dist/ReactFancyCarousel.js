var O = Object.defineProperty, U = Object.defineProperties;
var G = Object.getOwnPropertyDescriptors;
var h = Object.getOwnPropertySymbols;
var M = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var F = (t, n, e) => n in t ? O(t, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[n] = e, k = (t, n) => {
  for (var e in n || (n = {}))
    M.call(n, e) && F(t, e, n[e]);
  if (h)
    for (var e of h(n))
      S.call(n, e) && F(t, e, n[e]);
  return t;
}, v = (t, n) => U(t, G(n));
var I = (t, n) => {
  var e = {};
  for (var r in t)
    M.call(t, r) && n.indexOf(r) < 0 && (e[r] = t[r]);
  if (t != null && h)
    for (var r of h(t))
      n.indexOf(r) < 0 && S.call(t, r) && (e[r] = t[r]);
  return e;
};
import l, { useRef as T, useCallback as $, forwardRef as J, useState as j, useMemo as P, Children as q, useEffect as w, useImperativeHandle as Q, cloneElement as V, memo as W } from "react";
const f = (...t) => t.reduce((n, e) => n.concat(
  typeof e == "string" ? e : Object.keys(e || {}).map((r) => (e || {})[r] ? r : "")
), []).filter(Boolean).join(" "), X = () => T(Math.random().toString(36).substring(2, 7)).current, B = () => $((t) => {
  t.stopPropagation();
  const n = t.currentTarget.parentNode, e = Array.from(n.childNodes), r = e.findIndex((c) => c === t.currentTarget);
  (t.key === "Enter" || t.key === " ") && (t.preventDefault(), t.currentTarget.click()), t.key === "ArrowRight" && (r === e.length - 1 ? e[0].focus() : e[r + 1].focus()), t.key === "ArrowLeft" && (r === 0 ? e[e.length - 1].focus() : e[r - 1].focus());
}, []), Y = "_carousel_xhwdo_1", Z = "_container_xhwdo_6", ee = "_carousel_item_xhwdo_14", C = {
  carousel: Y,
  container: Z,
  carousel_item: ee
}, te = (r) => {
  var c = r, {
    className: t,
    children: n
  } = c, e = I(c, [
    "className",
    "children"
  ]);
  return /* @__PURE__ */ l.createElement(
    "section",
    v(k({}, e), {
      className: f(t, C.carousel_item)
    }),
    n
  );
}, ne = "_indicator_uwymd_1", re = "_indicator_item_uwymd_11", oe = "_indicator_item_inner_uwymd_21", ae = "_active_uwymd_31", ie = "_animation_uwymd_35", ce = "_indicatorAnim_uwymd_1", _ = {
  indicator: ne,
  indicator_item: re,
  indicator_item_inner: oe,
  active: ae,
  animation: ie,
  indicatorAnim: ce
}, se = ({
  uid: t,
  itemCount: n,
  activeIndex: e,
  animation: r,
  duration: c,
  goTo: u
}) => {
  const i = B();
  return /* @__PURE__ */ l.createElement(
    "ul",
    {
      className: _.indicator,
      role: "tablist"
    },
    Array.from({ length: n }).map((y, s) => /* @__PURE__ */ l.createElement(
      "li",
      {
        key: s,
        id: `carousel-indicator-${t}-${s}`,
        role: "tab",
        "aria-label": `change to page ${s + 1}`,
        "aria-controls": `carousel-item-${t}-${s}`,
        "aria-selected": e === s,
        tabIndex: e === s ? 0 : -1,
        className: f(_.indicator_item, { [_.active]: e === s }),
        onClick: () => u(s),
        onKeyDown: i
      },
      /* @__PURE__ */ l.createElement(
        "div",
        {
          className: f(_.indicator_item_inner, { [_.animation]: r }),
          style: { animationDuration: `${c}ms` }
        }
      )
    ))
  );
}, le = "_indicator_1iyzs_1", me = "_indicator_item_1iyzs_11", ue = "_active_1iyzs_21", D = {
  indicator: le,
  indicator_item: me,
  active: ue
}, de = ({
  uid: t,
  itemCount: n,
  activeIndex: e,
  goTo: r
}) => {
  const c = B();
  return /* @__PURE__ */ l.createElement(
    "ul",
    {
      className: D.indicator,
      role: "tablist"
    },
    Array.from({ length: n }).map((u, i) => /* @__PURE__ */ l.createElement(
      "li",
      {
        key: i,
        id: `carousel-indicator-${t}-${i}`,
        role: "tab",
        "aria-label": `change to page ${i + 1}`,
        "aria-controls": `carousel-item-${t}-${i}`,
        "aria-selected": e === i,
        tabIndex: e === i ? 0 : -1,
        className: f(D.indicator_item, { [D.active]: e === i }),
        onClick: () => r(i),
        onKeyDown: c
      }
    ))
  );
}, _e = J((ye, H) => {
  var z = ye, {
    className: t,
    autoplay: n = !1,
    duration: e = 3e3,
    speed: r = 500,
    timingFunction: c = "ease",
    indicator: u = "solid",
    children: i,
    onChange: y
  } = z, s = I(z, [
    "className",
    "autoplay",
    "duration",
    "speed",
    "timingFunction",
    "indicator",
    "children",
    "onChange"
  ]);
  const b = X(), [m, p] = j(0), A = T(0), o = P(() => q.toArray(i), [i]);
  let K = T();
  const [L, R] = j(n && o.length > 1), x = P(() => u === "solid" ? se : u === "dot" ? de : u, [u]), d = $(() => p((a) => a === o.length - 1 ? 0 : a + 1), [o]), N = $(() => p((a) => a === 0 ? o.length - 1 : a - 1), [o]), g = $((a) => p(() => a < 0 ? -a > o.length ? 0 : o.length + a : a > o.length - 1 ? o.length - 1 : a), [o]);
  return w(() => {
    y && m !== A.current && y.call(null, m, A.current), A.current = m;
  }, [m, y]), w(() => (n && o.length > 1 && (K.current = window.setTimeout(d, e)), () => window.clearTimeout(K.current)), [n, m, e, o, d]), w(() => (n && o.length > 1 && window.requestAnimationFrame(() => R(!0)), () => R(!1)), [n, e, o]), w(() => {
    g(0);
  }, [o]), Q(H, () => ({
    next: d,
    prev: N,
    goTo: g
  }), [d, N, g]), /* @__PURE__ */ l.createElement(
    "div",
    v(k({}, s), {
      className: f(t, C.carousel)
    }),
    /* @__PURE__ */ l.createElement(
      "div",
      {
        className: C.container,
        style: {
          transform: `translate(${-m * 100 + "%"}, 0)`,
          transitionDuration: `${r}ms`,
          transitionTimingFunction: c
        }
      },
      q.map(i, (a, E) => typeof a == "undefined" ? a : V(a, {
        id: `carousel-item-${b}-${E}`,
        role: "tabpanel",
        "aria-labelledby": `carousel-indicator-${b}-${E}`,
        "aria-hidden": m === E
      }))
    ),
    x && /* @__PURE__ */ l.createElement(
      x,
      {
        uid: b,
        activeIndex: m,
        itemCount: o.length,
        animation: L,
        duration: e,
        next: d,
        prev: N,
        goTo: g
      }
    )
  );
}), fe = W(_e);
fe.Item = te;
export {
  fe as default,
  B as useAccessibility
};
