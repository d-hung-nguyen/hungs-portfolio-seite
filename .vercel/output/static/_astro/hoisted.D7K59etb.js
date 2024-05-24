import { _ as Dt } from './tslib.es6.CDuPK5Eb.js'
import './hoisted.DRIXHXSN.js'
function Et(t, e) {
  t.indexOf(e) === -1 && t.push(e)
}
function xt(t, e) {
  const n = t.indexOf(e)
  n > -1 && t.splice(n, 1)
}
const pt = (t, e, n) => Math.min(Math.max(n, t), e),
  O = { duration: 0.3, delay: 0, endDelay: 0, repeat: 0, easing: 'ease' },
  I = (t) => typeof t == 'number',
  _ = (t) => Array.isArray(t) && !I(t[0]),
  Rt = (t, e, n) => {
    const i = e - t
    return ((((n - t) % i) + i) % i) + t
  }
function mt(t, e) {
  return _(t) ? t[Rt(0, t.length, e)] : t
}
const nt = (t, e, n) => -n * t + n * e + t,
  gt = () => {},
  R = (t) => t,
  k = (t, e, n) => (e - t === 0 ? 1 : (n - t) / (e - t))
function it(t, e) {
  const n = t[t.length - 1]
  for (let i = 1; i <= e; i++) {
    const s = k(0, e, i)
    t.push(nt(n, 1, s))
  }
}
function yt(t) {
  const e = [0]
  return it(e, t - 1), e
}
function Ft(t, e = yt(t.length), n = R) {
  const i = t.length,
    s = i - e.length
  return (
    s > 0 && it(e, s),
    (r) => {
      let a = 0
      for (; a < i - 2 && !(r < e[a + 1]); a++);
      let o = pt(0, 1, k(e[a], e[a + 1], r))
      return (o = mt(n, a)(o)), nt(t[a], t[a + 1], o)
    }
  )
}
const vt = (t) => Array.isArray(t) && I(t[0]),
  B = (t) => typeof t == 'object' && !!t.createAnimation,
  U = (t) => typeof t == 'function',
  st = (t) => typeof t == 'string',
  q = { ms: (t) => t * 1e3, s: (t) => t / 1e3 }
function Pt(t, e) {
  return e ? t * (1e3 / e) : 0
}
const Tt = (t, e, n) =>
    (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t,
  It = 1e-7,
  jt = 12
function $t(t, e, n, i, s) {
  let r,
    a,
    o = 0
  do (a = e + (n - e) / 2), (r = Tt(a, i, s) - t), r > 0 ? (n = a) : (e = a)
  while (Math.abs(r) > It && ++o < jt)
  return a
}
function K(t, e, n, i) {
  if (t === e && n === i) return R
  const s = (r) => $t(r, 0, 1, t, n)
  return (r) => (r === 0 || r === 1 ? r : Tt(s(r), e, i))
}
const _t =
    (t, e = 'end') =>
    (n) => {
      n = e === 'end' ? Math.min(n, 0.999) : Math.max(n, 0.001)
      const i = n * t,
        s = e === 'end' ? Math.floor(i) : Math.ceil(i)
      return pt(0, 1, s / t)
    },
  ot = {
    ease: K(0.25, 0.1, 0.25, 1),
    'ease-in': K(0.42, 0, 1, 1),
    'ease-in-out': K(0.42, 0, 0.58, 1),
    'ease-out': K(0, 0, 0.58, 1),
  },
  qt = /\((.*?)\)/
function tt(t) {
  if (U(t)) return t
  if (vt(t)) return K(...t)
  if (ot[t]) return ot[t]
  if (t.startsWith('steps')) {
    const e = qt.exec(t)
    if (e) {
      const n = e[1].split(',')
      return _t(parseFloat(n[0]), n[1].trim())
    }
  }
  return R
}
class Ct {
  constructor(
    e,
    n = [0, 1],
    {
      easing: i,
      duration: s = O.duration,
      delay: r = O.delay,
      endDelay: a = O.endDelay,
      repeat: o = O.repeat,
      offset: u,
      direction: f = 'normal',
      autoplay: h = !0,
    } = {},
  ) {
    if (
      ((this.startTime = null),
      (this.rate = 1),
      (this.t = 0),
      (this.cancelTimestamp = null),
      (this.easing = R),
      (this.duration = 0),
      (this.totalDuration = 0),
      (this.repeat = 0),
      (this.playState = 'idle'),
      (this.finished = new Promise((c, v) => {
        ;(this.resolve = c), (this.reject = v)
      })),
      (i = i || O.easing),
      B(i))
    ) {
      const c = i.createAnimation(n)
      ;(i = c.easing), (n = c.keyframes || n), (s = c.duration || s)
    }
    ;(this.repeat = o), (this.easing = _(i) ? R : tt(i)), this.updateDuration(s)
    const g = Ft(n, u, _(i) ? i.map(tt) : R)
    ;(this.tick = (c) => {
      var v
      r = r
      let l = 0
      this.pauseTime !== void 0
        ? (l = this.pauseTime)
        : (l = (c - this.startTime) * this.rate),
        (this.t = l),
        (l /= 1e3),
        (l = Math.max(l - r, 0)),
        this.playState === 'finished' &&
          this.pauseTime === void 0 &&
          (l = this.totalDuration)
      const d = l / this.duration
      let T = Math.floor(d),
        m = d % 1
      !m && d >= 1 && (m = 1), m === 1 && T--
      const M = T % 2
      ;(f === 'reverse' ||
        (f === 'alternate' && M) ||
        (f === 'alternate-reverse' && !M)) &&
        (m = 1 - m)
      const b = l >= this.totalDuration ? 1 : Math.min(m, 1),
        E = g(this.easing(b))
      e(E),
        this.pauseTime === void 0 &&
        (this.playState === 'finished' || l >= this.totalDuration + a)
          ? ((this.playState = 'finished'),
            (v = this.resolve) === null || v === void 0 || v.call(this, E))
          : this.playState !== 'idle' &&
            (this.frameRequestId = requestAnimationFrame(this.tick))
    }),
      h && this.play()
  }
  play() {
    const e = performance.now()
    ;(this.playState = 'running'),
      this.pauseTime !== void 0
        ? (this.startTime = e - this.pauseTime)
        : this.startTime || (this.startTime = e),
      (this.cancelTimestamp = this.startTime),
      (this.pauseTime = void 0),
      (this.frameRequestId = requestAnimationFrame(this.tick))
  }
  pause() {
    ;(this.playState = 'paused'), (this.pauseTime = this.t)
  }
  finish() {
    ;(this.playState = 'finished'), this.tick(0)
  }
  stop() {
    var e
    ;(this.playState = 'idle'),
      this.frameRequestId !== void 0 &&
        cancelAnimationFrame(this.frameRequestId),
      (e = this.reject) === null || e === void 0 || e.call(this, !1)
  }
  cancel() {
    this.stop(), this.tick(this.cancelTimestamp)
  }
  reverse() {
    this.rate *= -1
  }
  commitStyles() {}
  updateDuration(e) {
    ;(this.duration = e), (this.totalDuration = e * (this.repeat + 1))
  }
  get currentTime() {
    return this.t
  }
  set currentTime(e) {
    this.pauseTime !== void 0 || this.rate === 0
      ? (this.pauseTime = e)
      : (this.startTime = performance.now() - e / this.rate)
  }
  get playbackRate() {
    return this.rate
  }
  set playbackRate(e) {
    this.rate = e
  }
}
var Vt = function () {}
class Kt {
  setAnimation(e) {
    ;(this.animation = e),
      e?.finished.then(() => this.clearAnimation()).catch(() => {})
  }
  clearAnimation() {
    this.animation = this.generator = void 0
  }
}
const Z = new WeakMap()
function bt(t) {
  return Z.has(t) || Z.set(t, { transforms: [], values: new Map() }), Z.get(t)
}
function Ut(t, e) {
  return t.has(e) || t.set(e, new Kt()), t.get(e)
}
const zt = ['', 'X', 'Y', 'Z'],
  Nt = ['translate', 'scale', 'rotate', 'skew'],
  G = { x: 'translateX', y: 'translateY', z: 'translateZ' },
  ct = {
    syntax: '<angle>',
    initialValue: '0deg',
    toDefaultUnit: (t) => t + 'deg',
  },
  Bt = {
    translate: {
      syntax: '<length-percentage>',
      initialValue: '0px',
      toDefaultUnit: (t) => t + 'px',
    },
    rotate: ct,
    scale: { syntax: '<number>', initialValue: 1, toDefaultUnit: R },
    skew: ct,
  },
  V = new Map(),
  at = (t) => `--motion-${t}`,
  L = ['x', 'y', 'z']
Nt.forEach((t) => {
  zt.forEach((e) => {
    L.push(t + e), V.set(at(t + e), Bt[t])
  })
})
const Gt = (t, e) => L.indexOf(t) - L.indexOf(e),
  Lt = new Set(L),
  At = (t) => Lt.has(t),
  Wt = (t, e) => {
    G[e] && (e = G[e])
    const { transforms: n } = bt(t)
    Et(n, e), (t.style.transform = kt(n))
  },
  kt = (t) => t.sort(Gt).reduce(Xt, '').trim(),
  Xt = (t, e) => `${t} ${e}(var(${at(e)}))`,
  et = (t) => t.startsWith('--'),
  lt = new Set()
function Zt(t) {
  if (!lt.has(t)) {
    lt.add(t)
    try {
      const { syntax: e, initialValue: n } = V.has(t) ? V.get(t) : {}
      CSS.registerProperty({
        name: t,
        inherits: !1,
        syntax: e,
        initialValue: n,
      })
    } catch {}
  }
}
const H = (t, e) => document.createElement('div').animate(t, e),
  ut = {
    cssRegisterProperty: () =>
      typeof CSS < 'u' && Object.hasOwnProperty.call(CSS, 'registerProperty'),
    waapi: () => Object.hasOwnProperty.call(Element.prototype, 'animate'),
    partialKeyframes: () => {
      try {
        H({ opacity: [1] })
      } catch {
        return !1
      }
      return !0
    },
    finished: () => !!H({ opacity: [0, 1] }, { duration: 0.001 }).finished,
    linearEasing: () => {
      try {
        H({ opacity: 0 }, { easing: 'linear(0, 1)' })
      } catch {
        return !1
      }
      return !0
    },
  },
  J = {},
  $ = {}
for (const t in ut) $[t] = () => (J[t] === void 0 && (J[t] = ut[t]()), J[t])
const Ht = 0.015,
  Jt = (t, e) => {
    let n = ''
    const i = Math.round(e / Ht)
    for (let s = 0; s < i; s++) n += t(k(0, i - 1, s)) + ', '
    return n.substring(0, n.length - 2)
  },
  ft = (t, e) =>
    U(t)
      ? $.linearEasing()
        ? `linear(${Jt(t, e)})`
        : O.easing
      : vt(t)
        ? Qt(t)
        : t,
  Qt = ([t, e, n, i]) => `cubic-bezier(${t}, ${e}, ${n}, ${i})`
function Yt(t, e) {
  for (let n = 0; n < t.length; n++)
    t[n] === null && (t[n] = n ? t[n - 1] : e())
  return t
}
const St = (t) => (Array.isArray(t) ? t : [t])
function W(t) {
  return G[t] && (t = G[t]), At(t) ? at(t) : t
}
const N = {
  get: (t, e) => {
    e = W(e)
    let n = et(e) ? t.style.getPropertyValue(e) : getComputedStyle(t)[e]
    if (!n && n !== 0) {
      const i = V.get(e)
      i && (n = i.initialValue)
    }
    return n
  },
  set: (t, e, n) => {
    ;(e = W(e)), et(e) ? t.style.setProperty(e, n) : (t.style[e] = n)
  },
}
function Mt(t, e = !0) {
  if (!(!t || t.playState === 'finished'))
    try {
      t.stop ? t.stop() : (e && t.commitStyles(), t.cancel())
    } catch {}
}
function Ot(t, e) {
  var n
  let i = e?.toDefaultUnit || R
  const s = t[t.length - 1]
  if (st(s)) {
    const r =
      ((n = s.match(/(-?[\d.]+)([a-z%]*)/)) === null || n === void 0
        ? void 0
        : n[2]) || ''
    r && (i = (a) => a + r)
  }
  return i
}
function te() {
  return window.__MOTION_DEV_TOOLS_RECORD
}
function ee(t, e, n, i = {}, s) {
  const r = te(),
    a = i.record !== !1 && r
  let o,
    {
      duration: u = O.duration,
      delay: f = O.delay,
      endDelay: h = O.endDelay,
      repeat: g = O.repeat,
      easing: c = O.easing,
      persist: v = !1,
      direction: l,
      offset: d,
      allowWebkitAcceleration: T = !1,
      autoplay: m = !0,
    } = i
  const M = bt(t),
    b = At(e)
  let E = $.waapi()
  b && Wt(t, e)
  const A = W(e),
    w = Ut(M.values, A),
    D = V.get(A)
  return (
    Mt(w.animation, !(B(c) && w.generator) && i.record !== !1),
    () => {
      const S = () => {
        var p, F
        return (F =
          (p = N.get(t, A)) !== null && p !== void 0 ? p : D?.initialValue) !==
          null && F !== void 0
          ? F
          : 0
      }
      let y = Yt(St(n), S)
      const P = Ot(y, D)
      if (B(c)) {
        const p = c.createAnimation(y, e !== 'opacity', S, A, w)
        ;(c = p.easing), (y = p.keyframes || y), (u = p.duration || u)
      }
      if (
        (et(A) && ($.cssRegisterProperty() ? Zt(A) : (E = !1)),
        b && !$.linearEasing() && (U(c) || (_(c) && c.some(U))) && (E = !1),
        E)
      ) {
        D && (y = y.map((x) => (I(x) ? D.toDefaultUnit(x) : x))),
          y.length === 1 && (!$.partialKeyframes() || a) && y.unshift(S())
        const p = {
          delay: q.ms(f),
          duration: q.ms(u),
          endDelay: q.ms(h),
          easing: _(c) ? void 0 : ft(c, u),
          direction: l,
          iterations: g + 1,
          fill: 'both',
        }
        ;(o = t.animate(
          { [A]: y, offset: d, easing: _(c) ? c.map((x) => ft(x, u)) : void 0 },
          p,
        )),
          o.finished ||
            (o.finished = new Promise((x, z) => {
              ;(o.onfinish = x), (o.oncancel = z)
            }))
        const F = y[y.length - 1]
        o.finished
          .then(() => {
            v || (N.set(t, A, F), o.cancel())
          })
          .catch(gt),
          T || (o.playbackRate = 1.000001)
      } else if (s && b)
        (y = y.map((p) => (typeof p == 'string' ? parseFloat(p) : p))),
          y.length === 1 && y.unshift(parseFloat(S())),
          (o = new s(
            (p) => {
              N.set(t, A, P ? P(p) : p)
            },
            y,
            Object.assign(Object.assign({}, i), { duration: u, easing: c }),
          ))
      else {
        const p = y[y.length - 1]
        N.set(t, A, D && I(p) ? D.toDefaultUnit(p) : p)
      }
      return (
        a &&
          r(
            t,
            e,
            y,
            { duration: u, delay: f, easing: c, repeat: g, offset: d },
            'motion-one',
          ),
        w.setAnimation(o),
        o && !m && o.pause(),
        o
      )
    }
  )
}
const ne = (t, e) =>
  t[e] ? Object.assign(Object.assign({}, t), t[e]) : Object.assign({}, t)
function ie(t, e) {
  var n
  return (
    typeof t == 'string'
      ? e
        ? (((n = e[t]) !== null && n !== void 0) ||
            (e[t] = document.querySelectorAll(t)),
          (t = e[t]))
        : (t = document.querySelectorAll(t))
      : t instanceof Element && (t = [t]),
    Array.from(t || [])
  )
}
const se = (t) => t(),
  ae = (t, e, n = O.duration) =>
    new Proxy(
      { animations: t.map(se).filter(Boolean), duration: n, options: e },
      oe,
    ),
  re = (t) => t.animations[0],
  oe = {
    get: (t, e) => {
      const n = re(t)
      switch (e) {
        case 'duration':
          return t.duration
        case 'currentTime':
          return q.s(n?.[e] || 0)
        case 'playbackRate':
        case 'playState':
          return n?.[e]
        case 'finished':
          return (
            t.finished ||
              (t.finished = Promise.all(t.animations.map(ce)).catch(gt)),
            t.finished
          )
        case 'stop':
          return () => {
            t.animations.forEach((i) => Mt(i))
          }
        case 'forEachNative':
          return (i) => {
            t.animations.forEach((s) => i(s, t))
          }
        default:
          return typeof n?.[e] > 'u'
            ? void 0
            : () => t.animations.forEach((i) => i[e]())
      }
    },
    set: (t, e, n) => {
      switch (e) {
        case 'currentTime':
          n = q.ms(n)
        case 'playbackRate':
          for (let i = 0; i < t.animations.length; i++) t.animations[i][e] = n
          return !0
      }
      return !1
    },
  },
  ce = (t) => t.finished
function le(t = 0.1, { start: e = 0, from: n = 0, easing: i } = {}) {
  return (s, r) => {
    const a = I(n) ? n : ue(n, r),
      o = Math.abs(a - s)
    let u = t * o
    if (i) {
      const f = r * t
      u = tt(i)(u / f) * f
    }
    return e + u
  }
}
function ue(t, e) {
  if (t === 'first') return 0
  {
    const n = e - 1
    return t === 'last' ? n : n / 2
  }
}
function fe(t, e, n) {
  return U(t) ? t(e, n) : t
}
function ht(t, e, n, i) {
  var s
  return I(e)
    ? e
    : e.startsWith('-') || e.startsWith('+')
      ? Math.max(0, t + parseFloat(e))
      : e === '<'
        ? n
        : (s = i.get(e)) !== null && s !== void 0
          ? s
          : t
}
function he(t, e, n) {
  for (let i = 0; i < t.length; i++) {
    const s = t[i]
    s.at > e && s.at < n && (xt(t, s), i--)
  }
}
function de(t, e, n, i, s, r) {
  he(t, s, r)
  for (let a = 0; a < e.length; a++)
    t.push({ value: e[a], at: nt(s, r, i[a]), easing: mt(n, a) })
}
function pe(t, e) {
  return t.at === e.at ? (t.value === null ? 1 : -1) : t.at - e.at
}
function me(t, e = {}) {
  var n
  const i = ge(t, e),
    s = i.map((r) => ee(...r, Ct)).filter(Boolean)
  return ae(s, e, (n = i[0]) === null || n === void 0 ? void 0 : n[3].duration)
}
function ge(t, e = {}) {
  var { defaultOptions: n = {} } = e,
    i = Dt(e, ['defaultOptions'])
  const s = [],
    r = new Map(),
    a = {},
    o = new Map()
  let u = 0,
    f = 0,
    h = 0
  for (let g = 0; g < t.length; g++) {
    const c = t[g]
    if (st(c)) {
      o.set(c, f)
      continue
    } else if (!Array.isArray(c)) {
      o.set(c.name, ht(f, c.at, u, o))
      continue
    }
    const [v, l, d = {}] = c
    d.at !== void 0 && (f = ht(f, d.at, u, o))
    let T = 0
    const m = ie(v, a),
      M = m.length
    for (let b = 0; b < M; b++) {
      const E = m[b],
        A = ye(E, r)
      for (const w in l) {
        const D = ve(w, A)
        let S = St(l[w])
        const y = ne(d, w)
        let {
          duration: P = n.duration || O.duration,
          easing: p = n.easing || O.easing,
        } = y
        if (B(p)) {
          Vt(w === 'opacity' || S.length > 1)
          const X = p.createAnimation(S, w !== 'opacity', () => 0, w)
          ;(p = X.easing), (S = X.keyframes || S), (P = X.duration || P)
        }
        const F = fe(d.delay, b, M) || 0,
          x = f + F,
          z = x + P
        let { offset: j = yt(S.length) } = y
        j.length === 1 && j[0] === 0 && (j[1] = 1)
        const rt = j.length - S.length
        rt > 0 && it(j, rt),
          S.length === 1 && S.unshift(null),
          de(D, S, p, j, x, z),
          (T = Math.max(F + P, T)),
          (h = Math.max(z, h))
      }
    }
    ;(u = f), (f += T)
  }
  return (
    r.forEach((g, c) => {
      for (const v in g) {
        const l = g[v]
        l.sort(pe)
        const d = [],
          T = [],
          m = []
        for (let M = 0; M < l.length; M++) {
          const { at: b, value: E, easing: A } = l[M]
          d.push(E), T.push(k(0, h, b)), m.push(A || O.easing)
        }
        T[0] !== 0 && (T.unshift(0), d.unshift(d[0]), m.unshift('linear')),
          T[T.length - 1] !== 1 && (T.push(1), d.push(null)),
          s.push([
            c,
            v,
            d,
            Object.assign(
              Object.assign(Object.assign({}, n), {
                duration: h,
                easing: m,
                offset: T,
              }),
              i,
            ),
          ])
      }
    }),
    s
  )
}
function ye(t, e) {
  return !e.has(t) && e.set(t, {}), e.get(t)
}
function ve(t, e) {
  return e[t] || (e[t] = []), e[t]
}
const Te = 5
function wt(t, e, n) {
  const i = Math.max(e - Te, 0)
  return Pt(n - t(i), e - i)
}
const C = { stiffness: 100, damping: 10, mass: 1 },
  be = (t = C.stiffness, e = C.damping, n = C.mass) =>
    e / (2 * Math.sqrt(t * n))
function Ae(t, e, n) {
  return (t < e && n >= e) || (t > e && n <= e)
}
const Se = ({
    stiffness: t = C.stiffness,
    damping: e = C.damping,
    mass: n = C.mass,
    from: i = 0,
    to: s = 1,
    velocity: r = 0,
    restSpeed: a,
    restDistance: o,
  } = {}) => {
    r = r ? q.s(r) : 0
    const u = { done: !1, hasReachedTarget: !1, current: i, target: s },
      f = s - i,
      h = Math.sqrt(t / n) / 1e3,
      g = be(t, e, n),
      c = Math.abs(f) < 5
    a || (a = c ? 0.01 : 2), o || (o = c ? 0.005 : 0.5)
    let v
    if (g < 1) {
      const l = h * Math.sqrt(1 - g * g)
      v = (d) =>
        s -
        Math.exp(-g * h * d) *
          (((-r + g * h * f) / l) * Math.sin(l * d) + f * Math.cos(l * d))
    } else v = (l) => s - Math.exp(-h * l) * (f + (-r + h * f) * l)
    return (l) => {
      u.current = v(l)
      const d = l === 0 ? r : wt(v, l, u.current),
        T = Math.abs(d) <= a,
        m = Math.abs(s - u.current) <= o
      return (u.done = T && m), (u.hasReachedTarget = Ae(i, s, u.current)), u
    }
  },
  Q = 10,
  Me = 1e4
function Oe(t, e = R) {
  let n,
    i = Q,
    s = t(0)
  const r = [e(s.current)]
  for (; !s.done && i < Me; )
    (s = t(i)),
      r.push(e(s.done ? s.target : s.current)),
      n === void 0 && s.hasReachedTarget && (n = i),
      (i += Q)
  const a = i - Q
  return (
    r.length === 1 && r.push(s.current),
    { keyframes: r, duration: a / 1e3, overshootDuration: (n ?? a) / 1e3 }
  )
}
function dt(t) {
  return I(t) && !isNaN(t)
}
function Y(t) {
  return st(t) ? parseFloat(t) : t
}
function we(t) {
  const e = new WeakMap()
  return (n = {}) => {
    const i = new Map(),
      s = (a = 0, o = 100, u = 0, f = !1) => {
        const h = `${a}-${o}-${u}-${f}`
        return (
          i.has(h) ||
            i.set(h, t(Object.assign({ from: a, to: o, velocity: u }, n))),
          i.get(h)
        )
      },
      r = (a, o) => (e.has(a) || e.set(a, Oe(a, o)), e.get(a))
    return {
      createAnimation: (a, o = !0, u, f, h) => {
        let g,
          c,
          v,
          l = 0,
          d = R
        const T = a.length
        if (o) {
          d = Ot(a, f ? V.get(W(f)) : void 0)
          const m = a[T - 1]
          if (((v = Y(m)), T > 1 && a[0] !== null)) c = Y(a[0])
          else {
            const M = h?.generator
            if (M) {
              const { animation: b, generatorStartTime: E } = h,
                A = b?.startTime || E || 0,
                w = b?.currentTime || performance.now() - A,
                D = M(w).current
              ;(c = D), (l = wt((S) => M(S).current, w, D))
            } else u && (c = Y(u()))
          }
        }
        if (dt(c) && dt(v)) {
          const m = s(c, v, l, f?.includes('scale'))
          ;(g = Object.assign(Object.assign({}, r(m, d)), {
            easing: 'linear',
          })),
            h && ((h.generator = m), (h.generatorStartTime = performance.now()))
        }
        return (
          g ||
            (g = { easing: 'ease', duration: r(s(0, 100)).overshootDuration }),
          g
        )
      },
    }
  }
}
const De = we(Se),
  Ee = [
    '.loader',
    { opacity: [1, 0], pointerEvents: 'none' },
    { easing: 'ease-out' },
  ],
  xe = document.querySelectorAll('.card-animate'),
  Re = [
    Ee,
    [
      xe,
      { y: ['40%', '0%'], opacity: [0, 1] },
      {
        at: '-0.1',
        duration: 0.4,
        delay: le(0.3),
        easing: De({ velocity: 100, stiffness: 50, damping: 10 }),
      },
    ],
  ]
me(Re)
