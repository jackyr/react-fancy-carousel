var L = Object.defineProperty, O = Object.defineProperties;
var U = Object.getOwnPropertyDescriptors;
var _ = Object.getOwnPropertySymbols;
var S = Object.prototype.hasOwnProperty, x = Object.prototype.propertyIsEnumerable;
var R = (t, n, e) => n in t ? L(t, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[n] = e, A = (t, n) => {
  for (var e in n || (n = {}))
    S.call(n, e) && R(t, e, n[e]);
  if (_)
    for (var e of _(n))
      x.call(n, e) && R(t, e, n[e]);
  return t;
}, E = (t, n) => O(t, U(n));
var k = (t, n) => {
  var e = {};
  for (var r in t)
    S.call(t, r) && n.indexOf(r) < 0 && (e[r] = t[r]);
  if (t != null && _)
    for (var r of _(t))
      n.indexOf(r) < 0 && x.call(t, r) && (e[r] = t[r]);
  return e;
};
import l, { useRef as D, useCallback as y, memo as g, forwardRef as q, useState as G, useMemo as M, Children as j, useEffect as F, useImperativeHandle as J, cloneElement as Q } from "react";
const $ = (...t) => t.reduce((n, e) => n.concat(
  typeof e == "string" ? e : Object.keys(e || {}).map((r) => (e || {})[r] ? r : "")
), []).filter(Boolean).join(" "), V = () => D(Math.random().toString(36).substring(2, 7)).current, P = () => y((t) => {
  t.stopPropagation();
  const n = t.currentTarget.parentNode, e = Array.from(n.childNodes), r = e.findIndex((s) => s === t.currentTarget);
  (t.key === "Enter" || t.key === " ") && (t.preventDefault(), t.currentTarget.click()), t.key === "ArrowRight" && (r === e.length - 1 ? e[0].focus() : e[r + 1].focus()), t.key === "ArrowLeft" && (r === 0 ? e[e.length - 1].focus() : e[r - 1].focus());
}, []), W = "_carousel_xhwdo_1", X = "_container_xhwdo_6", Y = "_carousel_item_xhwdo_14", T = {
  carousel: W,
  container: X,
  carousel_item: Y
}, Z = (r) => {
  var s = r, {
    className: t,
    children: n
  } = s, e = k(s, [
    "className",
    "children"
  ]);
  return /* @__PURE__ */ l.createElement(
    "section",
    E(A({}, e), {
      className: $(t, T.carousel_item)
    }),
    n
  );
}, ee = g(Z), te = "_indicator_182iv_1", ne = "_indicator_item_182iv_11", re = "_indicator_item_inner_182iv_21", oe = "_active_182iv_31", ae = "_indicatorAnim_182iv_1", f = {
  indicator: te,
  indicator_item: ne,
  indicator_item_inner: re,
  active: oe,
  indicatorAnim: ae
}, ce = ({
  uid: t,
  itemCount: n,
  activeIndex: e,
  duration: r,
  goTo: s
}) => {
  const u = P();
  return /* @__PURE__ */ l.createElement(
    "ul",
    {
      className: f.indicator,
      role: "tablist"
    },
    Array.from({ length: n }).map((a, i) => /* @__PURE__ */ l.createElement(
      "li",
      {
        key: i,
        id: `carousel-indicator-${t}-${i}`,
        role: "tab",
        "aria-label": `change to page ${i + 1}`,
        "aria-controls": `carousel-item-${t}-${i}`,
        "aria-selected": e === i,
        tabIndex: e === i ? 0 : -1,
        className: $(f.indicator_item, { [f.active]: e === i }),
        onClick: () => s(i),
        onKeyDown: u
      },
      /* @__PURE__ */ l.createElement(
        "div",
        {
          className: f.indicator_item_inner,
          style: { animationDuration: `${r}ms` }
        }
      )
    ))
  );
}, ie = g(ce), se = "_indicator_1iyzs_1", le = "_indicator_item_1iyzs_11", me = "_active_1iyzs_21", I = {
  indicator: se,
  indicator_item: le,
  active: me
}, ue = ({
  uid: t,
  itemCount: n,
  activeIndex: e,
  goTo: r
}) => {
  const s = P();
  return /* @__PURE__ */ l.createElement(
    "ul",
    {
      className: I.indicator,
      role: "tablist"
    },
    Array.from({ length: n }).map((u, a) => /* @__PURE__ */ l.createElement(
      "li",
      {
        key: a,
        id: `carousel-indicator-${t}-${a}`,
        role: "tab",
        "aria-label": `change to page ${a + 1}`,
        "aria-controls": `carousel-item-${t}-${a}`,
        "aria-selected": e === a,
        tabIndex: e === a ? 0 : -1,
        className: $(I.indicator_item, { [I.active]: e === a }),
        onClick: () => r(a),
        onKeyDown: s
      }
    ))
  );
}, de = g(ue), _e = q((ye, H) => {
  var C = ye, {
    className: t,
    autoplay: n = !1,
    duration: e = 3e3,
    speed: r = 500,
    timingFunction: s = "ease",
    indicator: u = "solid",
    children: a,
    onChange: i
  } = C, B = k(C, [
    "className",
    "autoplay",
    "duration",
    "speed",
    "timingFunction",
    "indicator",
    "children",
    "onChange"
  ]);
  const h = V(), [m, p] = G(0), v = D(0), c = M(() => j.toArray(a), [a]);
  let z = D();
  const K = M(() => u === "solid" ? ie : u === "dot" ? de : u, [u]), d = y(() => p((o) => o === c.length - 1 ? 0 : o + 1), [c]), b = y(() => p((o) => o === 0 ? c.length - 1 : o - 1), [c]), w = y((o) => p(() => o < 0 ? -o > c.length ? 0 : c.length + o : o > c.length - 1 ? c.length - 1 : o), [c]);
  return F(() => {
    i && m !== v.current && i.call(null, m, v.current), v.current = m;
  }, [m, i]), F(() => (n && c.length > 1 && (z.current = window.setTimeout(d, e)), () => window.clearTimeout(z.current)), [n, m, e, c, d]), J(H, () => ({
    next: d,
    prev: b,
    goTo: w
  }), [d, b, w]), /* @__PURE__ */ l.createElement(
    "div",
    E(A({}, B), {
      className: $(t, T.carousel)
    }),
    /* @__PURE__ */ l.createElement(
      "div",
      {
        className: T.container,
        style: {
          transform: `translate(${-m * 100 + "%"}, 0)`,
          transitionDuration: `${r}ms`,
          transitionTimingFunction: s
        }
      },
      j.map(a, (o, N) => typeof o == "undefined" ? o : Q(o, {
        id: `carousel-item-${h}-${N}`,
        role: "tabpanel",
        "aria-labelledby": `carousel-indicator-${h}-${N}`,
        "aria-hidden": m === N
      }))
    ),
    K && /* @__PURE__ */ l.createElement(
      K,
      {
        uid: h,
        activeIndex: m,
        itemCount: c.length,
        duration: n && c.length > 1 ? e : 0,
        next: d,
        prev: b,
        goTo: w
      }
    )
  );
}), fe = g(_e);
fe.Item = ee;
export {
  fe as default,
  P as useAccessibility
};
