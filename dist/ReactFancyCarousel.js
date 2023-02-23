var L = Object.defineProperty, O = Object.defineProperties;
var U = Object.getOwnPropertyDescriptors;
var _ = Object.getOwnPropertySymbols;
var R = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var K = (t, n, e) => n in t ? L(t, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[n] = e, A = (t, n) => {
  for (var e in n || (n = {}))
    R.call(n, e) && K(t, e, n[e]);
  if (_)
    for (var e of _(n))
      S.call(n, e) && K(t, e, n[e]);
  return t;
}, E = (t, n) => O(t, U(n));
var k = (t, n) => {
  var e = {};
  for (var r in t)
    R.call(t, r) && n.indexOf(r) < 0 && (e[r] = t[r]);
  if (t != null && _)
    for (var r of _(t))
      n.indexOf(r) < 0 && S.call(t, r) && (e[r] = t[r]);
  return e;
};
import s, { useRef as D, useCallback as y, memo as $, forwardRef as q, useState as G, useMemo as M, Children as j, useEffect as F, useImperativeHandle as J, cloneElement as Q } from "react";
const g = (...t) => t.reduce((n, e) => n.concat(
  typeof e == "string" ? e : Object.keys(e || {}).map((r) => (e || {})[r] ? r : "")
), []).filter(Boolean).join(" "), V = () => D(Math.random().toString(36).substring(2, 7)).current, P = () => y((t) => {
  t.stopPropagation();
  const n = t.currentTarget.parentNode, e = Array.from(n.childNodes), r = e.findIndex((c) => c === t.currentTarget);
  (t.key === "Enter" || t.key === " ") && t.currentTarget.click(), t.key === "ArrowRight" && (r === e.length - 1 ? e[0].focus() : e[r + 1].focus()), t.key === "ArrowLeft" && (r === 0 ? e[e.length - 1].focus() : e[r - 1].focus());
}, []), W = "_carousel_xhwdo_1", X = "_container_xhwdo_6", Y = "_carousel_item_xhwdo_14", T = {
  carousel: W,
  container: X,
  carousel_item: Y
}, Z = (r) => {
  var c = r, {
    className: t,
    children: n
  } = c, e = k(c, [
    "className",
    "children"
  ]);
  return /* @__PURE__ */ s.createElement(
    "section",
    E(A({}, e), {
      className: g(t, T.carousel_item)
    }),
    n
  );
}, ee = $(Z), te = "_indicator_182iv_1", ne = "_indicator_item_182iv_11", re = "_indicator_item_inner_182iv_21", oe = "_active_182iv_31", ae = "_indicatorAnim_182iv_1", f = {
  indicator: te,
  indicator_item: ne,
  indicator_item_inner: re,
  active: oe,
  indicatorAnim: ae
}, ie = ({
  uid: t,
  itemCount: n,
  activeIndex: e,
  duration: r,
  goTo: c
}) => {
  const d = P();
  return /* @__PURE__ */ s.createElement(
    "ul",
    {
      className: f.indicator,
      role: "tablist"
    },
    Array.from({ length: n }).map((o, a) => /* @__PURE__ */ s.createElement(
      "li",
      {
        key: a,
        id: `carousel-indicator-${t}-${a}`,
        role: "tab",
        "aria-label": `change to page ${a + 1}`,
        "aria-controls": `carousel-item-${t}-${a}`,
        "aria-selected": e === a,
        tabIndex: e === a ? 0 : -1,
        className: g(f.indicator_item, { [f.active]: e === a }),
        onClick: () => c(a),
        onKeyDown: d
      },
      /* @__PURE__ */ s.createElement(
        "div",
        {
          className: f.indicator_item_inner,
          style: { animationDuration: `${r}ms` }
        }
      )
    ))
  );
}, ce = $(ie), se = "_indicator_1iyzs_1", le = "_indicator_item_1iyzs_11", me = "_active_1iyzs_21", I = {
  indicator: se,
  indicator_item: le,
  active: me
}, de = ({
  uid: t,
  itemCount: n,
  activeIndex: e,
  goTo: r
}) => {
  const c = P();
  return /* @__PURE__ */ s.createElement(
    "ul",
    {
      className: I.indicator,
      role: "tablist"
    },
    Array.from({ length: n }).map((d, o) => /* @__PURE__ */ s.createElement(
      "li",
      {
        key: o,
        id: `carousel-indicator-${t}-${o}`,
        role: "tab",
        "aria-label": `change to page ${o + 1}`,
        "aria-controls": `carousel-item-${t}-${o}`,
        "aria-selected": e === o,
        tabIndex: e === o ? 0 : -1,
        className: g(I.indicator_item, { [I.active]: e === o }),
        onClick: () => r(o),
        onKeyDown: c
      }
    ))
  );
}, ue = $(de), _e = q((ye, H) => {
  var x = ye, {
    className: t,
    autoplay: n = !1,
    duration: e = 3e3,
    speed: r = 500,
    timingFunction: c = "ease",
    indicator: d = "solid",
    children: o,
    onChange: a
  } = x, B = k(x, [
    "className",
    "autoplay",
    "duration",
    "speed",
    "timingFunction",
    "indicator",
    "children",
    "onChange"
  ]);
  const h = V(), [l, p] = G(0), b = D(0), m = M(() => j.toArray(o), [o]);
  let C = D();
  const z = M(() => d === "solid" ? ce : d === "dot" ? ue : d, [d]), u = y(() => p((i) => i === m.length - 1 ? 0 : i + 1), [m]), v = y(() => p((i) => i === 0 ? m.length - 1 : i - 1), [m]), w = y((i) => p(i), []);
  return F(() => {
    a && l !== b.current && a.call(null, l, b.current), b.current = l;
  }, [l, a]), F(() => (n && m.length > 1 && (C.current = window.setTimeout(u, e)), () => window.clearTimeout(C.current)), [n, l, e, m, u]), J(H, () => ({
    next: u,
    prev: v,
    goTo: w
  }), [u, v, w]), /* @__PURE__ */ s.createElement(
    "div",
    E(A({}, B), {
      className: g(t, T.carousel)
    }),
    /* @__PURE__ */ s.createElement(
      "div",
      {
        className: T.container,
        style: {
          transform: `translate(${-l * 100 + "%"}, 0)`,
          transitionDuration: `${r}ms`,
          transitionTimingFunction: c
        }
      },
      j.map(o, (i, N) => typeof i == "undefined" ? i : Q(i, {
        id: `carousel-item-${h}-${N}`,
        role: "tabpanel",
        "aria-labelledby": `carousel-indicator-${h}-${N}`,
        "aria-hidden": l === N
      }))
    ),
    z && /* @__PURE__ */ s.createElement(
      z,
      {
        uid: h,
        activeIndex: l,
        itemCount: m.length,
        duration: n && m.length > 1 ? e : 0,
        next: u,
        prev: v,
        goTo: w
      }
    )
  );
}), fe = $(_e);
fe.Item = ee;
export {
  fe as default
};
