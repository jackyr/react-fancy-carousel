var O = Object.defineProperty, H = Object.defineProperties;
var ee = Object.getOwnPropertyDescriptors;
var E = Object.getOwnPropertySymbols;
var G = Object.prototype.hasOwnProperty, J = Object.prototype.propertyIsEnumerable;
var U = (t, r, e) => r in t ? O(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e, I = (t, r) => {
  for (var e in r || (r = {}))
    G.call(r, e) && U(t, e, r[e]);
  if (E)
    for (var e of E(r))
      J.call(r, e) && U(t, e, r[e]);
  return t;
}, M = (t, r) => H(t, ee(r));
var j = (t, r) => {
  var e = {};
  for (var n in t)
    G.call(t, n) && r.indexOf(n) < 0 && (e[n] = t[n]);
  if (t != null && E)
    for (var n of E(t))
      r.indexOf(n) < 0 && J.call(t, n) && (e[n] = t[n]);
  return e;
};
import f, { useRef as k, useCallback as _, useMemo as q, forwardRef as te, useState as R, Children as Q, useEffect as p, useImperativeHandle as re, cloneElement as ne, memo as ae } from "react";
const N = (...t) => t.reduce((r, e) => r.concat(
  typeof e == "string" ? e : e && Object.keys(e).map((n) => e[n] ? n : "")
), []).filter(Boolean).join(" "), ce = () => k(Math.random().toString(36).substring(2, 7)).current, W = () => _((t) => {
  t.preventDefault(), t.stopPropagation();
  const r = t.currentTarget.parentNode, e = Array.from(r.childNodes), n = e.findIndex((s) => s === t.currentTarget);
  (t.key === "Enter" || t.key === " ") && t.currentTarget.click(), t.key === "ArrowRight" && (n === e.length - 1 ? e[0].focus() : e[n + 1].focus()), t.key === "ArrowLeft" && (n === 0 ? e[e.length - 1].focus() : e[n - 1].focus());
}, []), oe = () => {
  const t = k(), r = k(), e = k(0), n = k(0), s = k(0), m = k(!1), c = _(() => {
    r.current = void 0, e.current = 0, n.current = 0, s.current = 0, window.clearTimeout(t.current), t.current = void 0;
  }, []), l = _(($, w) => {
    r.current = $, e.current = w, n.current = Date.now(), t.current = window.setTimeout($, w);
  }, []), d = _(() => {
    t.current && (s.current = Date.now(), window.clearTimeout(t.current), m.current = !0);
  }, []), i = _(() => {
    r.current && n.current && s.current && e.current && (e.current = e.current - (s.current - n.current), t.current = window.setTimeout(r.current, e.current), n.current = Date.now(), s.current = 0, m.current = !1);
  }, []);
  return q(() => ({ set: l, clear: c, pause: d, resume: i, pausedRef: m }), [c, d, i, l]);
}, se = "_carousel_1jakq_1", ie = "_container_1jakq_6", ue = "_slide_1jakq_12", le = "_carousel_item_1jakq_17", me = "_fade_1jakq_22", A = {
  carousel: se,
  container: ie,
  slide: ue,
  carousel_item: le,
  fade: me
}, de = (i) => {
  var $ = i, {
    style: t,
    className: r,
    uid: e,
    index: n,
    active: s,
    effect: m,
    speed: c,
    children: l
  } = $, d = j($, [
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
      className: N(r, A.carousel_item, { [A.fade]: m === "fade" }),
      id: `carousel-item-${e}-${n}`,
      role: "tabpanel",
      "data-active": s,
      "aria-labelledby": `carousel-indicator-${e}-${n}`,
      "aria-hidden": !s
    }),
    l
  );
}, _e = "_indicator_htco_1", fe = "_indicator_item_htco_13", $e = "_indicator_item_outer_htco_19", ye = "_indicator_item_inner_htco_28", ke = "_animation_htco_42", we = "_indicatorAnim_htco_1", h = {
  indicator: _e,
  indicator_item: fe,
  indicator_item_outer: $e,
  indicator_item_inner: ye,
  animation: ke,
  indicatorAnim: we
}, ge = ({
  uid: t,
  itemCount: r,
  activeIndex: e,
  animation: n,
  paused: s,
  duration: m,
  goTo: c
}) => {
  const l = W();
  return /* @__PURE__ */ f.createElement(
    "ul",
    {
      className: h.indicator,
      role: "tablist"
    },
    Array.from({ length: r }).map((d, i) => /* @__PURE__ */ f.createElement(
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
        "data-paused": s,
        className: h.indicator_item,
        onClick: () => c(i),
        onKeyDown: l
      },
      /* @__PURE__ */ f.createElement("div", { className: h.indicator_item_outer }, /* @__PURE__ */ f.createElement(
        "div",
        {
          className: N(h.indicator_item_inner, { [h.animation]: n }),
          style: { animationDuration: `${m}ms` }
        }
      ))
    ))
  );
}, be = "_indicator_1kk46_1", he = "_indicator_item_1kk46_13", V = {
  indicator: be,
  indicator_item: he
}, Ae = ({
  uid: t,
  itemCount: r,
  activeIndex: e,
  goTo: n
}) => {
  const s = W();
  return /* @__PURE__ */ f.createElement(
    "ul",
    {
      className: V.indicator,
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
        className: V.indicator_item,
        onClick: () => n(c),
        onKeyDown: s
      }
    ))
  );
}, Ee = {
  default: "_default_1xqo5_1"
}, pe = te((ve, X) => {
  var C = ve, {
    className: t,
    autoplay: r = !1,
    effect: e = "slide",
    duration: n = 3e3,
    speed: s = 500,
    timingFunction: m = "ease",
    infiniteLoop: c = !0,
    pauseOnHover: l = !1,
    indicator: d = "solid",
    children: i,
    onChange: $
  } = C, w = j(C, [
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
  const F = ce(), [y, v] = R(0), T = k(0), a = q(() => Q.count(i), [i]), K = k(a), u = oe(), [Y, S] = R(!1), [Z, P] = R(r && a > 1), z = q(() => d === "solid" ? ge : d === "dot" ? Ae : d, [d]), g = _(() => v((o) => o === a - 1 ? c ? 0 : o : o + 1), [c, a]), D = _(() => v((o) => o === 0 ? c ? a - 1 : o : o - 1), [c, a]), b = _((o) => v(() => o < 0 ? -o > a ? 0 : a + o : o > a - 1 ? a - 1 : o), [a]), x = _(() => {
    r && a > 1 && l && (u.pause(), S(u.pausedRef.current));
  }, [r, a, l, u]), L = _(() => {
    r && a > 1 && l && (u.resume(), S(u.pausedRef.current));
  }, [r, a, l, u]);
  return p(() => {
    $ && y !== T.current && $.call(null, y, T.current), T.current = y;
  }, [y, $]), p(() => (r && a > 1 && (!c && y === a - 1 ? u.clear() : (u.set(g, n), u.pausedRef.current && u.pause())), u.clear), [r, y, n, c, a, g, u]), p(() => (r && a > 1 && window.requestAnimationFrame(() => P(!0)), () => P(!1)), [r, n, a]), p(() => {
    a !== K.current && b(0), K.current = a;
  }, [a, b]), re(X, () => ({
    next: g,
    prev: D,
    goTo: b
  }), [g, D, b]), /* @__PURE__ */ f.createElement(
    "div",
    M(I({}, w), {
      className: N(t, Ee.default, A.carousel),
      role: "region",
      "aria-label": "carousel",
      onMouseEnter: (o) => {
        x(), w.onMouseEnter && w.onMouseEnter.call(void 0, o);
      },
      onMouseLeave: (o) => {
        L(), w.onMouseLeave && w.onMouseLeave.call(void 0, o);
      }
    }),
    /* @__PURE__ */ f.createElement(
      "div",
      {
        className: N(A.container, { [A.slide]: e === "slide" }),
        style: e === "slide" ? {
          transform: `translate(${-y * 100 + "%"}, 0)`,
          transitionDuration: `${s}ms`,
          transitionTimingFunction: m
        } : void 0
      },
      Q.map(i, (o, B) => typeof o == "undefined" ? o : ne(o, {
        uid: F,
        index: B,
        active: y === B,
        effect: e === "fade" ? "fade" : "none",
        speed: s
      }))
    ),
    z && /* @__PURE__ */ f.createElement(
      z,
      {
        uid: F,
        activeIndex: y,
        itemCount: a,
        animation: Z,
        paused: Y,
        duration: n,
        next: g,
        prev: D,
        goTo: b
      }
    )
  );
}), Ne = ae(pe);
Ne.Item = de;
export {
  Ne as default,
  W as useAccessibility
};
