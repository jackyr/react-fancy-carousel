var O = Object.defineProperty, U = Object.defineProperties;
var G = Object.getOwnPropertyDescriptors;
var $ = Object.getOwnPropertySymbols;
var S = Object.prototype.hasOwnProperty, j = Object.prototype.propertyIsEnumerable;
var M = (t, n, e) => n in t ? O(t, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[n] = e, v = (t, n) => {
  for (var e in n || (n = {}))
    S.call(n, e) && M(t, e, n[e]);
  if ($)
    for (var e of $(n))
      j.call(n, e) && M(t, e, n[e]);
  return t;
}, h = (t, n) => U(t, G(n));
var I = (t, n) => {
  var e = {};
  for (var r in t)
    S.call(t, r) && n.indexOf(r) < 0 && (e[r] = t[r]);
  if (t != null && $)
    for (var r of $(t))
      n.indexOf(r) < 0 && j.call(t, r) && (e[r] = t[r]);
  return e;
};
import l, { useRef as C, useCallback as b, forwardRef as J, useState as P, useMemo as q, Children as D, useEffect as g, useImperativeHandle as Q, cloneElement as V, memo as W } from "react";
const y = (...t) => t.reduce((n, e) => n.concat(
  typeof e == "string" ? e : Object.keys(e || {}).map((r) => (e || {})[r] ? r : "")
), []).filter(Boolean).join(" "), X = () => C(Math.random().toString(36).substring(2, 7)).current, B = () => b((t) => {
  t.stopPropagation();
  const n = t.currentTarget.parentNode, e = Array.from(n.childNodes), r = e.findIndex((c) => c === t.currentTarget);
  (t.key === "Enter" || t.key === " ") && (t.preventDefault(), t.currentTarget.click()), t.key === "ArrowRight" && (r === e.length - 1 ? e[0].focus() : e[r + 1].focus()), t.key === "ArrowLeft" && (r === 0 ? e[e.length - 1].focus() : e[r - 1].focus());
}, []), Y = "_carousel_xhwdo_1", Z = "_container_xhwdo_6", ee = "_carousel_item_xhwdo_14", z = {
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
    h(v({}, e), {
      className: y(t, z.carousel_item)
    }),
    n
  );
}, ne = "_indicator_uwymd_1", re = "_indicator_item_uwymd_11", oe = "_indicator_item_inner_uwymd_21", ae = "_active_uwymd_31", ie = "_animation_uwymd_35", ce = "_indicatorAnim_uwymd_1", f = {
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
  const a = B();
  return /* @__PURE__ */ l.createElement(
    "ul",
    {
      className: f.indicator,
      role: "tablist"
    },
    Array.from({ length: n }).map((w, s) => /* @__PURE__ */ l.createElement(
      "li",
      {
        key: s,
        id: `carousel-indicator-${t}-${s}`,
        role: "tab",
        "aria-label": `change to page ${s + 1}`,
        "aria-controls": `carousel-item-${t}-${s}`,
        "aria-selected": e === s,
        tabIndex: e === s ? 0 : -1,
        className: y(f.indicator_item, { [f.active]: e === s }),
        onClick: () => u(s),
        onKeyDown: a
      },
      /* @__PURE__ */ l.createElement(
        "div",
        {
          className: y(f.indicator_item_inner, { [f.animation]: r }),
          style: { animationDuration: `${c}ms` }
        }
      )
    ))
  );
}, le = "_indicator_1iyzs_1", me = "_indicator_item_1iyzs_11", ue = "_active_1iyzs_21", T = {
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
      className: T.indicator,
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
        className: y(T.indicator_item, { [T.active]: e === a }),
        onClick: () => r(a),
        onKeyDown: c
      }
    ))
  );
}, _e = J((ye, H) => {
  var K = ye, {
    className: t,
    autoplay: n = !1,
    duration: e = 3e3,
    speed: r = 500,
    timingFunction: c = "ease",
    indicator: u = "solid",
    children: a,
    onChange: w
  } = K, s = I(K, [
    "className",
    "autoplay",
    "duration",
    "speed",
    "timingFunction",
    "indicator",
    "children",
    "onChange"
  ]);
  const p = X(), [m, A] = P(0), N = C(0), o = q(() => (console.log(D.count(a)), D.count(a)), [a]), R = C(), [L, x] = P(n && o > 1), F = q(() => u === "solid" ? se : u === "dot" ? de : u, [u]), d = b(() => A((i) => i === o - 1 ? 0 : i + 1), [o]), E = b(() => A((i) => i === 0 ? o - 1 : i - 1), [o]), _ = b((i) => A(() => i < 0 ? -i > o ? 0 : o + i : i > o - 1 ? o - 1 : i), [o]);
  return g(() => {
    w && m !== N.current && w.call(null, m, N.current), N.current = m;
  }, [m, w]), g(() => (n && o > 1 && (R.current = window.setTimeout(d, e)), () => window.clearTimeout(R.current)), [n, m, e, o, d]), g(() => (n && o > 1 && window.requestAnimationFrame(() => x(!0)), () => x(!1)), [n, e, o]), g(() => {
    _(0);
  }, [o, _]), Q(H, () => ({
    next: d,
    prev: E,
    goTo: _
  }), [d, E, _]), /* @__PURE__ */ l.createElement(
    "div",
    h(v({}, s), {
      className: y(t, z.carousel)
    }),
    /* @__PURE__ */ l.createElement(
      "div",
      {
        className: z.container,
        style: {
          transform: `translate(${-m * 100 + "%"}, 0)`,
          transitionDuration: `${r}ms`,
          transitionTimingFunction: c
        }
      },
      D.map(a, (i, k) => typeof i == "undefined" ? i : V(i, {
        id: `carousel-item-${p}-${k}`,
        role: "tabpanel",
        "aria-labelledby": `carousel-indicator-${p}-${k}`,
        "aria-hidden": m === k
      }))
    ),
    F && /* @__PURE__ */ l.createElement(
      F,
      {
        uid: p,
        activeIndex: m,
        itemCount: o,
        animation: L,
        duration: e,
        next: d,
        prev: E,
        goTo: _
      }
    )
  );
}), fe = W(_e);
fe.Item = te;
export {
  fe as default,
  B as useAccessibility
};
