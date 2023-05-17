var O = Object.defineProperty, H = Object.defineProperties;
var ee = Object.getOwnPropertyDescriptors;
var p = Object.getOwnPropertySymbols;
var U = Object.prototype.hasOwnProperty, G = Object.prototype.propertyIsEnumerable;
var B = (t, r, e) => r in t ? O(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e, I = (t, r) => {
  for (var e in r || (r = {}))
    U.call(r, e) && B(t, e, r[e]);
  if (p)
    for (var e of p(r))
      G.call(r, e) && B(t, e, r[e]);
  return t;
}, M = (t, r) => H(t, ee(r));
var j = (t, r) => {
  var e = {};
  for (var n in t)
    U.call(t, n) && r.indexOf(n) < 0 && (e[n] = t[n]);
  if (t != null && p)
    for (var n of p(t))
      r.indexOf(n) < 0 && G.call(t, n) && (e[n] = t[n]);
  return e;
};
import f, { useRef as $, useCallback as _, useMemo as R, forwardRef as te, useState as q, Children as J, useEffect as N, useImperativeHandle as re, cloneElement as ne, memo as ae } from "react";
const v = (...t) => t.reduce((r, e) => r.concat(
  typeof e == "string" ? e : e && Object.keys(e).map((n) => e[n] ? n : "")
), []).filter(Boolean).join(" "), ce = () => $(Math.random().toString(36).substring(2, 7)).current, V = () => _((t) => {
  t.preventDefault(), t.stopPropagation();
  const r = t.currentTarget.parentNode, e = Array.from(r.childNodes), n = e.findIndex((i) => i === t.currentTarget);
  (t.key === "Enter" || t.key === " ") && t.currentTarget.click(), t.key === "ArrowRight" && (n === e.length - 1 ? e[0].focus() : e[n + 1].focus()), t.key === "ArrowLeft" && (n === 0 ? e[e.length - 1].focus() : e[n - 1].focus());
}, []), oe = () => {
  const t = $(), r = $(), e = $(0), n = $(0), i = $(0), m = $(!1), c = _(() => {
    r.current = void 0, e.current = 0, n.current = 0, i.current = 0, window.clearTimeout(t.current), t.current = void 0;
  }, []), l = _((k, y) => {
    r.current = k, e.current = y, n.current = Date.now(), t.current = window.setTimeout(k, y);
  }, []), d = _(() => {
    t.current && (i.current = Date.now(), window.clearTimeout(t.current), m.current = !0);
  }, []), s = _(() => {
    r.current && n.current && i.current && e.current && (e.current = e.current - (i.current - n.current), t.current = window.setTimeout(r.current, e.current), n.current = Date.now(), i.current = 0, m.current = !1);
  }, []);
  return R(() => ({ set: l, clear: c, pause: d, resume: s, pausedRef: m }), [c, d, s, l]);
}, se = "_carousel_1jakq_1", ie = "_container_1jakq_6", ue = "_slide_1jakq_12", le = "_carousel_item_1jakq_17", me = "_fade_1jakq_22", E = {
  carousel: se,
  container: ie,
  slide: ue,
  carousel_item: le,
  fade: me
}, de = (s) => {
  var k = s, {
    style: t,
    className: r,
    uid: e,
    index: n,
    active: i,
    effect: m,
    speed: c,
    children: l
  } = k, d = j(k, [
    "style",
    "className",
    "uid",
    "index",
    "active",
    "effect",
    "speed",
    "children"
  ]);
  return /* @__PURE__ */ f.createElement(
    "section",
    M(I({}, d), {
      style: Object.assign({ transitionDuration: `${c}ms` }, t),
      className: v(r, E.carousel_item, { [E.fade]: m === "fade" }),
      id: `carousel-item-${e}-${n}`,
      role: "tabpanel",
      "data-active": i,
      "aria-labelledby": `carousel-indicator-${e}-${n}`,
      "aria-hidden": !i
    }),
    l
  );
}, _e = "_indicator_mklxc_1", fe = "_indicator_item_mklxc_13", ke = "_indicator_item_outer_mklxc_23", we = "_indicator_item_inner_mklxc_37", $e = "_animation_mklxc_51", ye = "_indicatorAnim_mklxc_1", A = {
  indicator: _e,
  indicator_item: fe,
  indicator_item_outer: ke,
  indicator_item_inner: we,
  animation: $e,
  indicatorAnim: ye
}, ge = ({
  uid: t,
  itemCount: r,
  activeIndex: e,
  animation: n,
  paused: i,
  duration: m,
  goTo: c
}) => {
  const l = V();
  return /* @__PURE__ */ f.createElement(
    "ul",
    {
      className: A.indicator,
      role: "tablist"
    },
    Array.from({ length: r }).map((d, s) => /* @__PURE__ */ f.createElement(
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
        "data-paused": i,
        className: A.indicator_item,
        onClick: () => c(s),
        onKeyDown: l
      },
      /* @__PURE__ */ f.createElement("div", { className: A.indicator_item_outer }, /* @__PURE__ */ f.createElement(
        "div",
        {
          className: v(A.indicator_item_inner, { [A.animation]: n }),
          style: { animationDuration: `${m}ms` }
        }
      ))
    ))
  );
}, be = "_indicator_1kk46_1", Ae = "_indicator_item_1kk46_13", Q = {
  indicator: be,
  indicator_item: Ae
}, Ee = ({
  uid: t,
  itemCount: r,
  activeIndex: e,
  goTo: n
}) => {
  const i = V();
  return /* @__PURE__ */ f.createElement(
    "ul",
    {
      className: Q.indicator,
      role: "tablist"
    },
    Array.from({ length: r }).map((m, c) => /* @__PURE__ */ f.createElement(
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
        className: Q.indicator_item,
        onClick: () => n(c),
        onKeyDown: i
      }
    ))
  );
}, pe = {
  default: "_default_1xqo5_1"
}, Ne = te((Te, W) => {
  var C = Te, {
    className: t,
    autoplay: r = !1,
    effect: e = "slide",
    duration: n = 3e3,
    speed: i = 500,
    timingFunction: m = "ease",
    infiniteLoop: c = !0,
    pauseOnHover: l = !1,
    indicator: d = "solid",
    children: s,
    onChange: k
  } = C, y = j(C, [
    "className",
    "autoplay",
    "effect",
    "duration",
    "speed",
    "timingFunction",
    "infiniteLoop",
    "pauseOnHover",
    "indicator",
    "children",
    "onChange"
  ]);
  const x = ce(), [w, T] = q(0), D = $(0), a = R(() => J.count(s), [s]), F = $(a), u = oe(), [X, K] = q(!1), [Y, S] = q(r && a > 1), P = R(() => d === "solid" ? ge : d === "dot" ? Ee : d, [d]), g = _(() => T((o) => o === a - 1 ? c ? 0 : o : o + 1), [c, a]), h = _(() => T((o) => o === 0 ? c ? a - 1 : o : o - 1), [c, a]), b = _((o) => T(() => o < 0 ? -o > a ? 0 : a + o : o > a - 1 ? a - 1 : o), [a]), Z = _(() => {
    r && a > 1 && l && (u.pause(), K(u.pausedRef.current));
  }, [r, a, l, u]), L = _(() => {
    r && a > 1 && l && (u.resume(), K(u.pausedRef.current));
  }, [r, a, l, u]);
  return N(() => {
    k && w !== D.current && k.call(null, w, D.current), D.current = w;
  }, [w, k]), N(() => (r && a > 1 && (!c && w === a - 1 ? u.clear() : (u.set(g, n), u.pausedRef.current && u.pause())), u.clear), [r, w, n, c, a, g, u]), N(() => (r && a > 1 && window.requestAnimationFrame(
    () => window.requestAnimationFrame(() => S(!0))
  ), () => S(!1)), [r, n, a]), N(() => {
    a !== F.current && b(0), F.current = a;
  }, [a, b]), re(W, () => ({
    next: g,
    prev: h,
    goTo: b
  }), [g, h, b]), /* @__PURE__ */ f.createElement(
    "div",
    M(I({}, y), {
      className: v(t, pe.default, E.carousel),
      role: "region",
      "aria-label": "carousel",
      onMouseEnter: (o) => {
        Z(), y.onMouseEnter && y.onMouseEnter.call(void 0, o);
      },
      onMouseLeave: (o) => {
        L(), y.onMouseLeave && y.onMouseLeave.call(void 0, o);
      }
    }),
    s && /* @__PURE__ */ f.createElement(
      "div",
      {
        className: v(E.container, { [E.slide]: e === "slide" }),
        style: e === "slide" ? {
          transform: `translate(${-w * 100 + "%"}, 0)`,
          transitionDuration: `${i}ms`,
          transitionTimingFunction: m
        } : void 0
      },
      J.map(s, (o, z) => ne(o, {
        uid: x,
        index: z,
        active: w === z,
        effect: e === "fade" ? "fade" : "none",
        speed: i
      }))
    ),
    s && P && /* @__PURE__ */ f.createElement(
      P,
      {
        uid: x,
        activeIndex: w,
        itemCount: a,
        animation: Y,
        paused: X,
        duration: n,
        next: g,
        prev: h,
        goTo: b
      }
    )
  );
}), ve = ae(Ne);
ve.Item = de;
export {
  ve as default,
  V as useAccessibility
};
