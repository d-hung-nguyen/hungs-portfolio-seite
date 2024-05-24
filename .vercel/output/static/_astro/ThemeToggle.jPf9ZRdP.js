import { j as N } from './jsx-runtime.sPF8iHy4.js'
import { r as i, $ as ee, b as Vo } from './index.BKhn9MD-.js'
import { r as Lt, $ as Ko } from './index.dm83ZpLE.js'
import { a as he, _ as Rn, b as Ho } from './tslib.es6.CDuPK5Eb.js'
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Yo = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xo = (e) => e.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ge = (e, t) => {
  const n = i.forwardRef(
    (
      {
        color: o = 'currentColor',
        size: r = 24,
        strokeWidth: c = 2,
        absoluteStrokeWidth: s,
        className: a = '',
        children: u,
        ...d
      },
      f,
    ) =>
      i.createElement(
        'svg',
        {
          ref: f,
          ...Yo,
          width: r,
          height: r,
          stroke: o,
          strokeWidth: s ? (Number(c) * 24) / Number(r) : c,
          className: ['lucide', `lucide-${Xo(e)}`, a].join(' '),
          ...d,
        },
        [
          ...t.map(([l, h]) => i.createElement(l, h)),
          ...(Array.isArray(u) ? u : [u]),
        ],
      ),
  )
  return (n.displayName = `${e}`), n
}
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zo = Ge('Check', [['path', { d: 'M20 6 9 17l-5-5', key: '1gmf2c' }]])
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qo = Ge('ChevronRight', [
  ['path', { d: 'm9 18 6-6-6-6', key: 'mthhwq' }],
])
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qo = Ge('Circle', [
  ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
])
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jo = Ge('Moon', [
  ['path', { d: 'M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z', key: 'a7tn18' }],
])
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const er = Ge('Sun', [
  ['circle', { cx: '12', cy: '12', r: '4', key: '4exip2' }],
  ['path', { d: 'M12 2v2', key: 'tus03m' }],
  ['path', { d: 'M12 20v2', key: '1lh1kg' }],
  ['path', { d: 'm4.93 4.93 1.41 1.41', key: '149t6j' }],
  ['path', { d: 'm17.66 17.66 1.41 1.41', key: 'ptbguv' }],
  ['path', { d: 'M2 12h2', key: '1t8f8n' }],
  ['path', { d: 'M20 12h2', key: '1q8mjw' }],
  ['path', { d: 'm6.34 17.66-1.41 1.41', key: '1m8zz5' }],
  ['path', { d: 'm19.07 4.93-1.41 1.41', key: '1shlcs' }],
])
function P() {
  return (
    (P = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var o in n) ({}).hasOwnProperty.call(n, o) && (e[o] = n[o])
          }
          return e
        }),
    P.apply(null, arguments)
  )
}
function tr(e, t) {
  typeof e == 'function' ? e(t) : e != null && (e.current = t)
}
function mt(...e) {
  return (t) => e.forEach((n) => tr(n, t))
}
function Y(...e) {
  return i.useCallback(mt(...e), e)
}
const Me = i.forwardRef((e, t) => {
  const { children: n, ...o } = e,
    r = i.Children.toArray(n),
    c = r.find(or)
  if (c) {
    const s = c.props.children,
      a = r.map((u) =>
        u === c
          ? i.Children.count(s) > 1
            ? i.Children.only(null)
            : i.isValidElement(s)
              ? s.props.children
              : null
          : u,
      )
    return i.createElement(
      Pt,
      P({}, o, { ref: t }),
      i.isValidElement(s) ? i.cloneElement(s, void 0, a) : null,
    )
  }
  return i.createElement(Pt, P({}, o, { ref: t }), n)
})
Me.displayName = 'Slot'
const Pt = i.forwardRef((e, t) => {
  const { children: n, ...o } = e
  return i.isValidElement(n)
    ? i.cloneElement(n, { ...rr(o, n.props), ref: t ? mt(t, n.ref) : n.ref })
    : i.Children.count(n) > 1
      ? i.Children.only(null)
      : null
})
Pt.displayName = 'SlotClone'
const nr = ({ children: e }) => i.createElement(i.Fragment, null, e)
function or(e) {
  return i.isValidElement(e) && e.type === nr
}
function rr(e, t) {
  const n = { ...t }
  for (const o in t) {
    const r = e[o],
      c = t[o]
    ;/^on[A-Z]/.test(o)
      ? r && c
        ? (n[o] = (...a) => {
            c(...a), r(...a)
          })
        : r && (n[o] = r)
      : o === 'style'
        ? (n[o] = { ...r, ...c })
        : o === 'className' && (n[o] = [r, c].filter(Boolean).join(' '))
  }
  return { ...e, ...n }
}
function Pn(e) {
  var t,
    n,
    o = ''
  if (typeof e == 'string' || typeof e == 'number') o += e
  else if (typeof e == 'object')
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Pn(e[t])) && (o && (o += ' '), (o += n))
    else for (t in e) e[t] && (o && (o += ' '), (o += t))
  return o
}
function cr() {
  for (var e, t, n = 0, o = ''; n < arguments.length; )
    (e = arguments[n++]) && (t = Pn(e)) && (o && (o += ' '), (o += t))
  return o
}
const Jt = (e) => (typeof e == 'boolean' ? ''.concat(e) : e === 0 ? '0' : e),
  en = cr,
  ir = (e, t) => (n) => {
    var o
    if (t?.variants == null) return en(e, n?.class, n?.className)
    const { variants: r, defaultVariants: c } = t,
      s = Object.keys(r).map((d) => {
        const f = n?.[d],
          l = c?.[d]
        if (f === null) return null
        const h = Jt(f) || Jt(l)
        return r[d][h]
      }),
      a =
        n &&
        Object.entries(n).reduce((d, f) => {
          let [l, h] = f
          return h === void 0 || (d[l] = h), d
        }, {}),
      u =
        t == null || (o = t.compoundVariants) === null || o === void 0
          ? void 0
          : o.reduce((d, f) => {
              let { class: l, className: h, ...m } = f
              return Object.entries(m).every((g) => {
                let [p, b] = g
                return Array.isArray(b)
                  ? b.includes({ ...c, ...a }[p])
                  : { ...c, ...a }[p] === b
              })
                ? [...d, l, h]
                : d
            }, [])
    return en(e, s, u, n?.class, n?.className)
  }
function Mn(e) {
  var t,
    n,
    o = ''
  if (typeof e == 'string' || typeof e == 'number') o += e
  else if (typeof e == 'object')
    if (Array.isArray(e)) {
      var r = e.length
      for (t = 0; t < r; t++)
        e[t] && (n = Mn(e[t])) && (o && (o += ' '), (o += n))
    } else for (n in e) e[n] && (o && (o += ' '), (o += n))
  return o
}
function sr() {
  for (var e, t, n = 0, o = '', r = arguments.length; n < r; n++)
    (e = arguments[n]) && (t = Mn(e)) && (o && (o += ' '), (o += t))
  return o
}
const Ft = '-'
function ar(e) {
  const t = ur(e),
    { conflictingClassGroups: n, conflictingClassGroupModifiers: o } = e
  function r(s) {
    const a = s.split(Ft)
    return a[0] === '' && a.length !== 1 && a.shift(), An(a, t) || lr(s)
  }
  function c(s, a) {
    const u = n[s] || []
    return a && o[s] ? [...u, ...o[s]] : u
  }
  return { getClassGroupId: r, getConflictingClassGroupIds: c }
}
function An(e, t) {
  if (e.length === 0) return t.classGroupId
  const n = e[0],
    o = t.nextPart.get(n),
    r = o ? An(e.slice(1), o) : void 0
  if (r) return r
  if (t.validators.length === 0) return
  const c = e.join(Ft)
  return t.validators.find(({ validator: s }) => s(c))?.classGroupId
}
const tn = /^\[(.+)\]$/
function lr(e) {
  if (tn.test(e)) {
    const t = tn.exec(e)[1],
      n = t?.substring(0, t.indexOf(':'))
    if (n) return 'arbitrary..' + n
  }
}
function ur(e) {
  const { theme: t, prefix: n } = e,
    o = { nextPart: new Map(), validators: [] }
  return (
    fr(Object.entries(e.classGroups), n).forEach(([c, s]) => {
      Mt(s, o, c, t)
    }),
    o
  )
}
function Mt(e, t, n, o) {
  e.forEach((r) => {
    if (typeof r == 'string') {
      const c = r === '' ? t : nn(t, r)
      c.classGroupId = n
      return
    }
    if (typeof r == 'function') {
      if (dr(r)) {
        Mt(r(o), t, n, o)
        return
      }
      t.validators.push({ validator: r, classGroupId: n })
      return
    }
    Object.entries(r).forEach(([c, s]) => {
      Mt(s, nn(t, c), n, o)
    })
  })
}
function nn(e, t) {
  let n = e
  return (
    t.split(Ft).forEach((o) => {
      n.nextPart.has(o) ||
        n.nextPart.set(o, { nextPart: new Map(), validators: [] }),
        (n = n.nextPart.get(o))
    }),
    n
  )
}
function dr(e) {
  return e.isThemeGetter
}
function fr(e, t) {
  return t
    ? e.map(([n, o]) => {
        const r = o.map((c) =>
          typeof c == 'string'
            ? t + c
            : typeof c == 'object'
              ? Object.fromEntries(
                  Object.entries(c).map(([s, a]) => [t + s, a]),
                )
              : c,
        )
        return [n, r]
      })
    : e
}
function pr(e) {
  if (e < 1) return { get: () => {}, set: () => {} }
  let t = 0,
    n = new Map(),
    o = new Map()
  function r(c, s) {
    n.set(c, s), t++, t > e && ((t = 0), (o = n), (n = new Map()))
  }
  return {
    get(c) {
      let s = n.get(c)
      if (s !== void 0) return s
      if ((s = o.get(c)) !== void 0) return r(c, s), s
    },
    set(c, s) {
      n.has(c) ? n.set(c, s) : r(c, s)
    },
  }
}
const _n = '!'
function mr(e) {
  const t = e.separator,
    n = t.length === 1,
    o = t[0],
    r = t.length
  return function (s) {
    const a = []
    let u = 0,
      d = 0,
      f
    for (let p = 0; p < s.length; p++) {
      let b = s[p]
      if (u === 0) {
        if (b === o && (n || s.slice(p, p + r) === t)) {
          a.push(s.slice(d, p)), (d = p + r)
          continue
        }
        if (b === '/') {
          f = p
          continue
        }
      }
      b === '[' ? u++ : b === ']' && u--
    }
    const l = a.length === 0 ? s : s.substring(d),
      h = l.startsWith(_n),
      m = h ? l.substring(1) : l,
      g = f && f > d ? f - d : void 0
    return {
      modifiers: a,
      hasImportantModifier: h,
      baseClassName: m,
      maybePostfixModifierPosition: g,
    }
  }
}
function hr(e) {
  if (e.length <= 1) return e
  const t = []
  let n = []
  return (
    e.forEach((o) => {
      o[0] === '[' ? (t.push(...n.sort(), o), (n = [])) : n.push(o)
    }),
    t.push(...n.sort()),
    t
  )
}
function gr(e) {
  return { cache: pr(e.cacheSize), splitModifiers: mr(e), ...ar(e) }
}
const br = /\s+/
function vr(e, t) {
  const {
      splitModifiers: n,
      getClassGroupId: o,
      getConflictingClassGroupIds: r,
    } = t,
    c = new Set()
  return e
    .trim()
    .split(br)
    .map((s) => {
      const {
        modifiers: a,
        hasImportantModifier: u,
        baseClassName: d,
        maybePostfixModifierPosition: f,
      } = n(s)
      let l = o(f ? d.substring(0, f) : d),
        h = !!f
      if (!l) {
        if (!f) return { isTailwindClass: !1, originalClassName: s }
        if (((l = o(d)), !l))
          return { isTailwindClass: !1, originalClassName: s }
        h = !1
      }
      const m = hr(a).join(':')
      return {
        isTailwindClass: !0,
        modifierId: u ? m + _n : m,
        classGroupId: l,
        originalClassName: s,
        hasPostfixModifier: h,
      }
    })
    .reverse()
    .filter((s) => {
      if (!s.isTailwindClass) return !0
      const { modifierId: a, classGroupId: u, hasPostfixModifier: d } = s,
        f = a + u
      return c.has(f)
        ? !1
        : (c.add(f), r(u, d).forEach((l) => c.add(a + l)), !0)
    })
    .reverse()
    .map((s) => s.originalClassName)
    .join(' ')
}
function wr() {
  let e = 0,
    t,
    n,
    o = ''
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Tn(t)) && (o && (o += ' '), (o += n))
  return o
}
function Tn(e) {
  if (typeof e == 'string') return e
  let t,
    n = ''
  for (let o = 0; o < e.length; o++)
    e[o] && (t = Tn(e[o])) && (n && (n += ' '), (n += t))
  return n
}
function $r(e, ...t) {
  let n,
    o,
    r,
    c = s
  function s(u) {
    const d = t.reduce((f, l) => l(f), e())
    return (n = gr(d)), (o = n.cache.get), (r = n.cache.set), (c = a), a(u)
  }
  function a(u) {
    const d = o(u)
    if (d) return d
    const f = vr(u, n)
    return r(u, f), f
  }
  return function () {
    return c(wr.apply(null, arguments))
  }
}
function F(e) {
  const t = (n) => n[e] || []
  return (t.isThemeGetter = !0), t
}
const On = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  yr = /^\d+\/\d+$/,
  xr = new Set(['px', 'full', 'screen']),
  Er = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Cr =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Sr = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  Rr = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Pr =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
function ce(e) {
  return we(e) || xr.has(e) || yr.test(e)
}
function fe(e) {
  return Te(e, 'length', Ir)
}
function we(e) {
  return !!e && !Number.isNaN(Number(e))
}
function qe(e) {
  return Te(e, 'number', we)
}
function Le(e) {
  return !!e && Number.isInteger(Number(e))
}
function Mr(e) {
  return e.endsWith('%') && we(e.slice(0, -1))
}
function A(e) {
  return On.test(e)
}
function pe(e) {
  return Er.test(e)
}
const Ar = new Set(['length', 'size', 'percentage'])
function _r(e) {
  return Te(e, Ar, kn)
}
function Tr(e) {
  return Te(e, 'position', kn)
}
const Or = new Set(['image', 'url'])
function kr(e) {
  return Te(e, Or, Lr)
}
function Dr(e) {
  return Te(e, '', Nr)
}
function Fe() {
  return !0
}
function Te(e, t, n) {
  const o = On.exec(e)
  return o
    ? o[1]
      ? typeof t == 'string'
        ? o[1] === t
        : t.has(o[1])
      : n(o[2])
    : !1
}
function Ir(e) {
  return Cr.test(e) && !Sr.test(e)
}
function kn() {
  return !1
}
function Nr(e) {
  return Rr.test(e)
}
function Lr(e) {
  return Pr.test(e)
}
function Fr() {
  const e = F('colors'),
    t = F('spacing'),
    n = F('blur'),
    o = F('brightness'),
    r = F('borderColor'),
    c = F('borderRadius'),
    s = F('borderSpacing'),
    a = F('borderWidth'),
    u = F('contrast'),
    d = F('grayscale'),
    f = F('hueRotate'),
    l = F('invert'),
    h = F('gap'),
    m = F('gradientColorStops'),
    g = F('gradientColorStopPositions'),
    p = F('inset'),
    b = F('margin'),
    v = F('opacity'),
    w = F('padding'),
    y = F('saturate'),
    $ = F('scale'),
    x = F('sepia'),
    M = F('skew'),
    C = F('space'),
    R = F('translate'),
    _ = () => ['auto', 'contain', 'none'],
    I = () => ['auto', 'hidden', 'clip', 'visible', 'scroll'],
    L = () => ['auto', A, t],
    S = () => [A, t],
    G = () => ['', ce, fe],
    T = () => ['auto', we, A],
    k = () => [
      'bottom',
      'center',
      'left',
      'left-bottom',
      'left-top',
      'right',
      'right-bottom',
      'right-top',
      'top',
    ],
    z = () => ['solid', 'dashed', 'dotted', 'double', 'none'],
    D = () => [
      'normal',
      'multiply',
      'screen',
      'overlay',
      'darken',
      'lighten',
      'color-dodge',
      'color-burn',
      'hard-light',
      'soft-light',
      'difference',
      'exclusion',
      'hue',
      'saturation',
      'color',
      'luminosity',
    ],
    j = () => [
      'start',
      'end',
      'center',
      'between',
      'around',
      'evenly',
      'stretch',
    ],
    E = () => ['', '0', A],
    W = () => [
      'auto',
      'avoid',
      'all',
      'avoid-page',
      'page',
      'left',
      'right',
      'column',
    ],
    B = () => [we, qe],
    U = () => [we, A]
  return {
    cacheSize: 500,
    separator: ':',
    theme: {
      colors: [Fe],
      spacing: [ce, fe],
      blur: ['none', '', pe, A],
      brightness: B(),
      borderColor: [e],
      borderRadius: ['none', '', 'full', pe, A],
      borderSpacing: S(),
      borderWidth: G(),
      contrast: B(),
      grayscale: E(),
      hueRotate: U(),
      invert: E(),
      gap: S(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Mr, fe],
      inset: L(),
      margin: L(),
      opacity: B(),
      padding: S(),
      saturate: B(),
      scale: B(),
      sepia: E(),
      skew: U(),
      space: S(),
      translate: S(),
    },
    classGroups: {
      aspect: [{ aspect: ['auto', 'square', 'video', A] }],
      container: ['container'],
      columns: [{ columns: [pe] }],
      'break-after': [{ 'break-after': W() }],
      'break-before': [{ 'break-before': W() }],
      'break-inside': [
        { 'break-inside': ['auto', 'avoid', 'avoid-page', 'avoid-column'] },
      ],
      'box-decoration': [{ 'box-decoration': ['slice', 'clone'] }],
      box: [{ box: ['border', 'content'] }],
      display: [
        'block',
        'inline-block',
        'inline',
        'flex',
        'inline-flex',
        'table',
        'inline-table',
        'table-caption',
        'table-cell',
        'table-column',
        'table-column-group',
        'table-footer-group',
        'table-header-group',
        'table-row-group',
        'table-row',
        'flow-root',
        'grid',
        'inline-grid',
        'contents',
        'list-item',
        'hidden',
      ],
      float: [{ float: ['right', 'left', 'none', 'start', 'end'] }],
      clear: [{ clear: ['left', 'right', 'both', 'none', 'start', 'end'] }],
      isolation: ['isolate', 'isolation-auto'],
      'object-fit': [
        { object: ['contain', 'cover', 'fill', 'none', 'scale-down'] },
      ],
      'object-position': [{ object: [...k(), A] }],
      overflow: [{ overflow: I() }],
      'overflow-x': [{ 'overflow-x': I() }],
      'overflow-y': [{ 'overflow-y': I() }],
      overscroll: [{ overscroll: _() }],
      'overscroll-x': [{ 'overscroll-x': _() }],
      'overscroll-y': [{ 'overscroll-y': _() }],
      position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
      inset: [{ inset: [p] }],
      'inset-x': [{ 'inset-x': [p] }],
      'inset-y': [{ 'inset-y': [p] }],
      start: [{ start: [p] }],
      end: [{ end: [p] }],
      top: [{ top: [p] }],
      right: [{ right: [p] }],
      bottom: [{ bottom: [p] }],
      left: [{ left: [p] }],
      visibility: ['visible', 'invisible', 'collapse'],
      z: [{ z: ['auto', Le, A] }],
      basis: [{ basis: L() }],
      'flex-direction': [
        { flex: ['row', 'row-reverse', 'col', 'col-reverse'] },
      ],
      'flex-wrap': [{ flex: ['wrap', 'wrap-reverse', 'nowrap'] }],
      flex: [{ flex: ['1', 'auto', 'initial', 'none', A] }],
      grow: [{ grow: E() }],
      shrink: [{ shrink: E() }],
      order: [{ order: ['first', 'last', 'none', Le, A] }],
      'grid-cols': [{ 'grid-cols': [Fe] }],
      'col-start-end': [{ col: ['auto', { span: ['full', Le, A] }, A] }],
      'col-start': [{ 'col-start': T() }],
      'col-end': [{ 'col-end': T() }],
      'grid-rows': [{ 'grid-rows': [Fe] }],
      'row-start-end': [{ row: ['auto', { span: [Le, A] }, A] }],
      'row-start': [{ 'row-start': T() }],
      'row-end': [{ 'row-end': T() }],
      'grid-flow': [
        { 'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense'] },
      ],
      'auto-cols': [{ 'auto-cols': ['auto', 'min', 'max', 'fr', A] }],
      'auto-rows': [{ 'auto-rows': ['auto', 'min', 'max', 'fr', A] }],
      gap: [{ gap: [h] }],
      'gap-x': [{ 'gap-x': [h] }],
      'gap-y': [{ 'gap-y': [h] }],
      'justify-content': [{ justify: ['normal', ...j()] }],
      'justify-items': [
        { 'justify-items': ['start', 'end', 'center', 'stretch'] },
      ],
      'justify-self': [
        { 'justify-self': ['auto', 'start', 'end', 'center', 'stretch'] },
      ],
      'align-content': [{ content: ['normal', ...j(), 'baseline'] }],
      'align-items': [
        { items: ['start', 'end', 'center', 'baseline', 'stretch'] },
      ],
      'align-self': [
        { self: ['auto', 'start', 'end', 'center', 'stretch', 'baseline'] },
      ],
      'place-content': [{ 'place-content': [...j(), 'baseline'] }],
      'place-items': [
        { 'place-items': ['start', 'end', 'center', 'baseline', 'stretch'] },
      ],
      'place-self': [
        { 'place-self': ['auto', 'start', 'end', 'center', 'stretch'] },
      ],
      p: [{ p: [w] }],
      px: [{ px: [w] }],
      py: [{ py: [w] }],
      ps: [{ ps: [w] }],
      pe: [{ pe: [w] }],
      pt: [{ pt: [w] }],
      pr: [{ pr: [w] }],
      pb: [{ pb: [w] }],
      pl: [{ pl: [w] }],
      m: [{ m: [b] }],
      mx: [{ mx: [b] }],
      my: [{ my: [b] }],
      ms: [{ ms: [b] }],
      me: [{ me: [b] }],
      mt: [{ mt: [b] }],
      mr: [{ mr: [b] }],
      mb: [{ mb: [b] }],
      ml: [{ ml: [b] }],
      'space-x': [{ 'space-x': [C] }],
      'space-x-reverse': ['space-x-reverse'],
      'space-y': [{ 'space-y': [C] }],
      'space-y-reverse': ['space-y-reverse'],
      w: [{ w: ['auto', 'min', 'max', 'fit', 'svw', 'lvw', 'dvw', A, t] }],
      'min-w': [{ 'min-w': [A, t, 'min', 'max', 'fit'] }],
      'max-w': [
        {
          'max-w': [
            A,
            t,
            'none',
            'full',
            'min',
            'max',
            'fit',
            'prose',
            { screen: [pe] },
            pe,
          ],
        },
      ],
      h: [{ h: [A, t, 'auto', 'min', 'max', 'fit', 'svh', 'lvh', 'dvh'] }],
      'min-h': [{ 'min-h': [A, t, 'min', 'max', 'fit', 'svh', 'lvh', 'dvh'] }],
      'max-h': [{ 'max-h': [A, t, 'min', 'max', 'fit', 'svh', 'lvh', 'dvh'] }],
      size: [{ size: [A, t, 'auto', 'min', 'max', 'fit'] }],
      'font-size': [{ text: ['base', pe, fe] }],
      'font-smoothing': ['antialiased', 'subpixel-antialiased'],
      'font-style': ['italic', 'not-italic'],
      'font-weight': [
        {
          font: [
            'thin',
            'extralight',
            'light',
            'normal',
            'medium',
            'semibold',
            'bold',
            'extrabold',
            'black',
            qe,
          ],
        },
      ],
      'font-family': [{ font: [Fe] }],
      'fvn-normal': ['normal-nums'],
      'fvn-ordinal': ['ordinal'],
      'fvn-slashed-zero': ['slashed-zero'],
      'fvn-figure': ['lining-nums', 'oldstyle-nums'],
      'fvn-spacing': ['proportional-nums', 'tabular-nums'],
      'fvn-fraction': ['diagonal-fractions', 'stacked-fractons'],
      tracking: [
        {
          tracking: [
            'tighter',
            'tight',
            'normal',
            'wide',
            'wider',
            'widest',
            A,
          ],
        },
      ],
      'line-clamp': [{ 'line-clamp': ['none', we, qe] }],
      leading: [
        {
          leading: [
            'none',
            'tight',
            'snug',
            'normal',
            'relaxed',
            'loose',
            ce,
            A,
          ],
        },
      ],
      'list-image': [{ 'list-image': ['none', A] }],
      'list-style-type': [{ list: ['none', 'disc', 'decimal', A] }],
      'list-style-position': [{ list: ['inside', 'outside'] }],
      'placeholder-color': [{ placeholder: [e] }],
      'placeholder-opacity': [{ 'placeholder-opacity': [v] }],
      'text-alignment': [
        { text: ['left', 'center', 'right', 'justify', 'start', 'end'] },
      ],
      'text-color': [{ text: [e] }],
      'text-opacity': [{ 'text-opacity': [v] }],
      'text-decoration': [
        'underline',
        'overline',
        'line-through',
        'no-underline',
      ],
      'text-decoration-style': [{ decoration: [...z(), 'wavy'] }],
      'text-decoration-thickness': [
        { decoration: ['auto', 'from-font', ce, fe] },
      ],
      'underline-offset': [{ 'underline-offset': ['auto', ce, A] }],
      'text-decoration-color': [{ decoration: [e] }],
      'text-transform': ['uppercase', 'lowercase', 'capitalize', 'normal-case'],
      'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
      'text-wrap': [{ text: ['wrap', 'nowrap', 'balance', 'pretty'] }],
      indent: [{ indent: S() }],
      'vertical-align': [
        {
          align: [
            'baseline',
            'top',
            'middle',
            'bottom',
            'text-top',
            'text-bottom',
            'sub',
            'super',
            A,
          ],
        },
      ],
      whitespace: [
        {
          whitespace: [
            'normal',
            'nowrap',
            'pre',
            'pre-line',
            'pre-wrap',
            'break-spaces',
          ],
        },
      ],
      break: [{ break: ['normal', 'words', 'all', 'keep'] }],
      hyphens: [{ hyphens: ['none', 'manual', 'auto'] }],
      content: [{ content: ['none', A] }],
      'bg-attachment': [{ bg: ['fixed', 'local', 'scroll'] }],
      'bg-clip': [{ 'bg-clip': ['border', 'padding', 'content', 'text'] }],
      'bg-opacity': [{ 'bg-opacity': [v] }],
      'bg-origin': [{ 'bg-origin': ['border', 'padding', 'content'] }],
      'bg-position': [{ bg: [...k(), Tr] }],
      'bg-repeat': [
        { bg: ['no-repeat', { repeat: ['', 'x', 'y', 'round', 'space'] }] },
      ],
      'bg-size': [{ bg: ['auto', 'cover', 'contain', _r] }],
      'bg-image': [
        {
          bg: [
            'none',
            { 'gradient-to': ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl'] },
            kr,
          ],
        },
      ],
      'bg-color': [{ bg: [e] }],
      'gradient-from-pos': [{ from: [g] }],
      'gradient-via-pos': [{ via: [g] }],
      'gradient-to-pos': [{ to: [g] }],
      'gradient-from': [{ from: [m] }],
      'gradient-via': [{ via: [m] }],
      'gradient-to': [{ to: [m] }],
      rounded: [{ rounded: [c] }],
      'rounded-s': [{ 'rounded-s': [c] }],
      'rounded-e': [{ 'rounded-e': [c] }],
      'rounded-t': [{ 'rounded-t': [c] }],
      'rounded-r': [{ 'rounded-r': [c] }],
      'rounded-b': [{ 'rounded-b': [c] }],
      'rounded-l': [{ 'rounded-l': [c] }],
      'rounded-ss': [{ 'rounded-ss': [c] }],
      'rounded-se': [{ 'rounded-se': [c] }],
      'rounded-ee': [{ 'rounded-ee': [c] }],
      'rounded-es': [{ 'rounded-es': [c] }],
      'rounded-tl': [{ 'rounded-tl': [c] }],
      'rounded-tr': [{ 'rounded-tr': [c] }],
      'rounded-br': [{ 'rounded-br': [c] }],
      'rounded-bl': [{ 'rounded-bl': [c] }],
      'border-w': [{ border: [a] }],
      'border-w-x': [{ 'border-x': [a] }],
      'border-w-y': [{ 'border-y': [a] }],
      'border-w-s': [{ 'border-s': [a] }],
      'border-w-e': [{ 'border-e': [a] }],
      'border-w-t': [{ 'border-t': [a] }],
      'border-w-r': [{ 'border-r': [a] }],
      'border-w-b': [{ 'border-b': [a] }],
      'border-w-l': [{ 'border-l': [a] }],
      'border-opacity': [{ 'border-opacity': [v] }],
      'border-style': [{ border: [...z(), 'hidden'] }],
      'divide-x': [{ 'divide-x': [a] }],
      'divide-x-reverse': ['divide-x-reverse'],
      'divide-y': [{ 'divide-y': [a] }],
      'divide-y-reverse': ['divide-y-reverse'],
      'divide-opacity': [{ 'divide-opacity': [v] }],
      'divide-style': [{ divide: z() }],
      'border-color': [{ border: [r] }],
      'border-color-x': [{ 'border-x': [r] }],
      'border-color-y': [{ 'border-y': [r] }],
      'border-color-t': [{ 'border-t': [r] }],
      'border-color-r': [{ 'border-r': [r] }],
      'border-color-b': [{ 'border-b': [r] }],
      'border-color-l': [{ 'border-l': [r] }],
      'divide-color': [{ divide: [r] }],
      'outline-style': [{ outline: ['', ...z()] }],
      'outline-offset': [{ 'outline-offset': [ce, A] }],
      'outline-w': [{ outline: [ce, fe] }],
      'outline-color': [{ outline: [e] }],
      'ring-w': [{ ring: G() }],
      'ring-w-inset': ['ring-inset'],
      'ring-color': [{ ring: [e] }],
      'ring-opacity': [{ 'ring-opacity': [v] }],
      'ring-offset-w': [{ 'ring-offset': [ce, fe] }],
      'ring-offset-color': [{ 'ring-offset': [e] }],
      shadow: [{ shadow: ['', 'inner', 'none', pe, Dr] }],
      'shadow-color': [{ shadow: [Fe] }],
      opacity: [{ opacity: [v] }],
      'mix-blend': [{ 'mix-blend': [...D(), 'plus-lighter', 'plus-darker'] }],
      'bg-blend': [{ 'bg-blend': D() }],
      filter: [{ filter: ['', 'none'] }],
      blur: [{ blur: [n] }],
      brightness: [{ brightness: [o] }],
      contrast: [{ contrast: [u] }],
      'drop-shadow': [{ 'drop-shadow': ['', 'none', pe, A] }],
      grayscale: [{ grayscale: [d] }],
      'hue-rotate': [{ 'hue-rotate': [f] }],
      invert: [{ invert: [l] }],
      saturate: [{ saturate: [y] }],
      sepia: [{ sepia: [x] }],
      'backdrop-filter': [{ 'backdrop-filter': ['', 'none'] }],
      'backdrop-blur': [{ 'backdrop-blur': [n] }],
      'backdrop-brightness': [{ 'backdrop-brightness': [o] }],
      'backdrop-contrast': [{ 'backdrop-contrast': [u] }],
      'backdrop-grayscale': [{ 'backdrop-grayscale': [d] }],
      'backdrop-hue-rotate': [{ 'backdrop-hue-rotate': [f] }],
      'backdrop-invert': [{ 'backdrop-invert': [l] }],
      'backdrop-opacity': [{ 'backdrop-opacity': [v] }],
      'backdrop-saturate': [{ 'backdrop-saturate': [y] }],
      'backdrop-sepia': [{ 'backdrop-sepia': [x] }],
      'border-collapse': [{ border: ['collapse', 'separate'] }],
      'border-spacing': [{ 'border-spacing': [s] }],
      'border-spacing-x': [{ 'border-spacing-x': [s] }],
      'border-spacing-y': [{ 'border-spacing-y': [s] }],
      'table-layout': [{ table: ['auto', 'fixed'] }],
      caption: [{ caption: ['top', 'bottom'] }],
      transition: [
        {
          transition: [
            'none',
            'all',
            '',
            'colors',
            'opacity',
            'shadow',
            'transform',
            A,
          ],
        },
      ],
      duration: [{ duration: U() }],
      ease: [{ ease: ['linear', 'in', 'out', 'in-out', A] }],
      delay: [{ delay: U() }],
      animate: [{ animate: ['none', 'spin', 'ping', 'pulse', 'bounce', A] }],
      transform: [{ transform: ['', 'gpu', 'none'] }],
      scale: [{ scale: [$] }],
      'scale-x': [{ 'scale-x': [$] }],
      'scale-y': [{ 'scale-y': [$] }],
      rotate: [{ rotate: [Le, A] }],
      'translate-x': [{ 'translate-x': [R] }],
      'translate-y': [{ 'translate-y': [R] }],
      'skew-x': [{ 'skew-x': [M] }],
      'skew-y': [{ 'skew-y': [M] }],
      'transform-origin': [
        {
          origin: [
            'center',
            'top',
            'top-right',
            'right',
            'bottom-right',
            'bottom',
            'bottom-left',
            'left',
            'top-left',
            A,
          ],
        },
      ],
      accent: [{ accent: ['auto', e] }],
      appearance: [{ appearance: ['none', 'auto'] }],
      cursor: [
        {
          cursor: [
            'auto',
            'default',
            'pointer',
            'wait',
            'text',
            'move',
            'help',
            'not-allowed',
            'none',
            'context-menu',
            'progress',
            'cell',
            'crosshair',
            'vertical-text',
            'alias',
            'copy',
            'no-drop',
            'grab',
            'grabbing',
            'all-scroll',
            'col-resize',
            'row-resize',
            'n-resize',
            'e-resize',
            's-resize',
            'w-resize',
            'ne-resize',
            'nw-resize',
            'se-resize',
            'sw-resize',
            'ew-resize',
            'ns-resize',
            'nesw-resize',
            'nwse-resize',
            'zoom-in',
            'zoom-out',
            A,
          ],
        },
      ],
      'caret-color': [{ caret: [e] }],
      'pointer-events': [{ 'pointer-events': ['none', 'auto'] }],
      resize: [{ resize: ['none', 'y', 'x', ''] }],
      'scroll-behavior': [{ scroll: ['auto', 'smooth'] }],
      'scroll-m': [{ 'scroll-m': S() }],
      'scroll-mx': [{ 'scroll-mx': S() }],
      'scroll-my': [{ 'scroll-my': S() }],
      'scroll-ms': [{ 'scroll-ms': S() }],
      'scroll-me': [{ 'scroll-me': S() }],
      'scroll-mt': [{ 'scroll-mt': S() }],
      'scroll-mr': [{ 'scroll-mr': S() }],
      'scroll-mb': [{ 'scroll-mb': S() }],
      'scroll-ml': [{ 'scroll-ml': S() }],
      'scroll-p': [{ 'scroll-p': S() }],
      'scroll-px': [{ 'scroll-px': S() }],
      'scroll-py': [{ 'scroll-py': S() }],
      'scroll-ps': [{ 'scroll-ps': S() }],
      'scroll-pe': [{ 'scroll-pe': S() }],
      'scroll-pt': [{ 'scroll-pt': S() }],
      'scroll-pr': [{ 'scroll-pr': S() }],
      'scroll-pb': [{ 'scroll-pb': S() }],
      'scroll-pl': [{ 'scroll-pl': S() }],
      'snap-align': [{ snap: ['start', 'end', 'center', 'align-none'] }],
      'snap-stop': [{ snap: ['normal', 'always'] }],
      'snap-type': [{ snap: ['none', 'x', 'y', 'both'] }],
      'snap-strictness': [{ snap: ['mandatory', 'proximity'] }],
      touch: [{ touch: ['auto', 'none', 'manipulation'] }],
      'touch-x': [{ 'touch-pan': ['x', 'left', 'right'] }],
      'touch-y': [{ 'touch-pan': ['y', 'up', 'down'] }],
      'touch-pz': ['touch-pinch-zoom'],
      select: [{ select: ['none', 'text', 'all', 'auto'] }],
      'will-change': [
        { 'will-change': ['auto', 'scroll', 'contents', 'transform', A] },
      ],
      fill: [{ fill: [e, 'none'] }],
      'stroke-w': [{ stroke: [ce, fe, qe] }],
      stroke: [{ stroke: [e, 'none'] }],
      sr: ['sr-only', 'not-sr-only'],
      'forced-color-adjust': [{ 'forced-color-adjust': ['auto', 'none'] }],
    },
    conflictingClassGroups: {
      overflow: ['overflow-x', 'overflow-y'],
      overscroll: ['overscroll-x', 'overscroll-y'],
      inset: [
        'inset-x',
        'inset-y',
        'start',
        'end',
        'top',
        'right',
        'bottom',
        'left',
      ],
      'inset-x': ['right', 'left'],
      'inset-y': ['top', 'bottom'],
      flex: ['basis', 'grow', 'shrink'],
      gap: ['gap-x', 'gap-y'],
      p: ['px', 'py', 'ps', 'pe', 'pt', 'pr', 'pb', 'pl'],
      px: ['pr', 'pl'],
      py: ['pt', 'pb'],
      m: ['mx', 'my', 'ms', 'me', 'mt', 'mr', 'mb', 'ml'],
      mx: ['mr', 'ml'],
      my: ['mt', 'mb'],
      size: ['w', 'h'],
      'font-size': ['leading'],
      'fvn-normal': [
        'fvn-ordinal',
        'fvn-slashed-zero',
        'fvn-figure',
        'fvn-spacing',
        'fvn-fraction',
      ],
      'fvn-ordinal': ['fvn-normal'],
      'fvn-slashed-zero': ['fvn-normal'],
      'fvn-figure': ['fvn-normal'],
      'fvn-spacing': ['fvn-normal'],
      'fvn-fraction': ['fvn-normal'],
      'line-clamp': ['display', 'overflow'],
      rounded: [
        'rounded-s',
        'rounded-e',
        'rounded-t',
        'rounded-r',
        'rounded-b',
        'rounded-l',
        'rounded-ss',
        'rounded-se',
        'rounded-ee',
        'rounded-es',
        'rounded-tl',
        'rounded-tr',
        'rounded-br',
        'rounded-bl',
      ],
      'rounded-s': ['rounded-ss', 'rounded-es'],
      'rounded-e': ['rounded-se', 'rounded-ee'],
      'rounded-t': ['rounded-tl', 'rounded-tr'],
      'rounded-r': ['rounded-tr', 'rounded-br'],
      'rounded-b': ['rounded-br', 'rounded-bl'],
      'rounded-l': ['rounded-tl', 'rounded-bl'],
      'border-spacing': ['border-spacing-x', 'border-spacing-y'],
      'border-w': [
        'border-w-s',
        'border-w-e',
        'border-w-t',
        'border-w-r',
        'border-w-b',
        'border-w-l',
      ],
      'border-w-x': ['border-w-r', 'border-w-l'],
      'border-w-y': ['border-w-t', 'border-w-b'],
      'border-color': [
        'border-color-t',
        'border-color-r',
        'border-color-b',
        'border-color-l',
      ],
      'border-color-x': ['border-color-r', 'border-color-l'],
      'border-color-y': ['border-color-t', 'border-color-b'],
      'scroll-m': [
        'scroll-mx',
        'scroll-my',
        'scroll-ms',
        'scroll-me',
        'scroll-mt',
        'scroll-mr',
        'scroll-mb',
        'scroll-ml',
      ],
      'scroll-mx': ['scroll-mr', 'scroll-ml'],
      'scroll-my': ['scroll-mt', 'scroll-mb'],
      'scroll-p': [
        'scroll-px',
        'scroll-py',
        'scroll-ps',
        'scroll-pe',
        'scroll-pt',
        'scroll-pr',
        'scroll-pb',
        'scroll-pl',
      ],
      'scroll-px': ['scroll-pr', 'scroll-pl'],
      'scroll-py': ['scroll-pt', 'scroll-pb'],
      touch: ['touch-x', 'touch-y', 'touch-pz'],
      'touch-x': ['touch'],
      'touch-y': ['touch'],
      'touch-pz': ['touch'],
    },
    conflictingClassGroupModifiers: { 'font-size': ['leading'] },
  }
}
const zr = $r(Fr)
function ae(...e) {
  return zr(sr(e))
}
const Wr = ir(
    'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
    {
      variants: {
        variant: {
          default: 'bg-primary text-primary-foreground hover:bg-primary/90',
          destructive:
            'bg-destructive text-destructive-foreground hover:bg-destructive/90',
          outline:
            'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
          secondary:
            'bg-secondary text-secondary-foreground hover:bg-secondary/80',
          ghost: 'hover:bg-accent hover:text-accent-foreground',
          link: 'text-primary underline-offset-4 hover:underline',
        },
        size: {
          default: 'h-10 px-4 py-2',
          sm: 'h-9 rounded-md px-3',
          lg: 'h-11 rounded-md px-8',
          icon: 'h-10 w-10',
        },
      },
      defaultVariants: { variant: 'default', size: 'default' },
    },
  ),
  Dn = i.forwardRef(
    ({ className: e, variant: t, size: n, asChild: o = !1, ...r }, c) => {
      const s = o ? Me : 'button'
      return N.jsx(s, {
        className: ae(Wr({ variant: t, size: n, className: e })),
        ref: c,
        ...r,
      })
    },
  )
Dn.displayName = 'Button'
function O(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (r) {
    if ((e?.(r), n === !1 || !r.defaultPrevented)) return t?.(r)
  }
}
function Ue(e, t = []) {
  let n = []
  function o(c, s) {
    const a = i.createContext(s),
      u = n.length
    n = [...n, s]
    function d(l) {
      const { scope: h, children: m, ...g } = l,
        p = h?.[e][u] || a,
        b = i.useMemo(() => g, Object.values(g))
      return i.createElement(p.Provider, { value: b }, m)
    }
    function f(l, h) {
      const m = h?.[e][u] || a,
        g = i.useContext(m)
      if (g) return g
      if (s !== void 0) return s
      throw new Error(`\`${l}\` must be used within \`${c}\``)
    }
    return (d.displayName = c + 'Provider'), [d, f]
  }
  const r = () => {
    const c = n.map((s) => i.createContext(s))
    return function (a) {
      const u = a?.[e] || c
      return i.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: u } }), [a, u])
    }
  }
  return (r.scopeName = e), [o, Br(r, ...t)]
}
function Br(...e) {
  const t = e[0]
  if (e.length === 1) return t
  const n = () => {
    const o = e.map((r) => ({ useScope: r(), scopeName: r.scopeName }))
    return function (c) {
      const s = o.reduce((a, { useScope: u, scopeName: d }) => {
        const l = u(c)[`__scope${d}`]
        return { ...a, ...l }
      }, {})
      return i.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s])
    }
  }
  return (n.scopeName = t.scopeName), n
}
function ne(e) {
  const t = i.useRef(e)
  return (
    i.useEffect(() => {
      t.current = e
    }),
    i.useMemo(
      () =>
        (...n) => {
          var o
          return (o = t.current) === null || o === void 0
            ? void 0
            : o.call(t, ...n)
        },
      [],
    )
  )
}
function In({ prop: e, defaultProp: t, onChange: n = () => {} }) {
  const [o, r] = jr({ defaultProp: t, onChange: n }),
    c = e !== void 0,
    s = c ? e : o,
    a = ne(n),
    u = i.useCallback(
      (d) => {
        if (c) {
          const l = typeof d == 'function' ? d(e) : d
          l !== e && a(l)
        } else r(d)
      },
      [c, e, r, a],
    )
  return [s, u]
}
function jr({ defaultProp: e, onChange: t }) {
  const n = i.useState(e),
    [o] = n,
    r = i.useRef(o),
    c = ne(t)
  return (
    i.useEffect(() => {
      r.current !== o && (c(o), (r.current = o))
    }, [o, r, c]),
    n
  )
}
const Gr = [
    'a',
    'button',
    'div',
    'form',
    'h2',
    'h3',
    'img',
    'input',
    'label',
    'li',
    'nav',
    'ol',
    'p',
    'span',
    'svg',
    'ul',
  ],
  X = Gr.reduce((e, t) => {
    const n = i.forwardRef((o, r) => {
      const { asChild: c, ...s } = o,
        a = c ? Me : t
      return (
        i.useEffect(() => {
          window[Symbol.for('radix-ui')] = !0
        }, []),
        i.createElement(a, P({}, s, { ref: r }))
      )
    })
    return (n.displayName = `Primitive.${t}`), { ...e, [t]: n }
  }, {})
function Nn(e, t) {
  e && Lt.flushSync(() => e.dispatchEvent(t))
}
function Ln(e) {
  const t = e + 'CollectionProvider',
    [n, o] = Ue(t),
    [r, c] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    s = (m) => {
      const { scope: g, children: p } = m,
        b = ee.useRef(null),
        v = ee.useRef(new Map()).current
      return ee.createElement(r, { scope: g, itemMap: v, collectionRef: b }, p)
    },
    a = e + 'CollectionSlot',
    u = ee.forwardRef((m, g) => {
      const { scope: p, children: b } = m,
        v = c(a, p),
        w = Y(g, v.collectionRef)
      return ee.createElement(Me, { ref: w }, b)
    }),
    d = e + 'CollectionItemSlot',
    f = 'data-radix-collection-item',
    l = ee.forwardRef((m, g) => {
      const { scope: p, children: b, ...v } = m,
        w = ee.useRef(null),
        y = Y(g, w),
        $ = c(d, p)
      return (
        ee.useEffect(
          () => (
            $.itemMap.set(w, { ref: w, ...v }), () => void $.itemMap.delete(w)
          ),
        ),
        ee.createElement(Me, { [f]: '', ref: y }, b)
      )
    })
  function h(m) {
    const g = c(e + 'CollectionConsumer', m)
    return ee.useCallback(() => {
      const b = g.collectionRef.current
      if (!b) return []
      const v = Array.from(b.querySelectorAll(`[${f}]`))
      return Array.from(g.itemMap.values()).sort(
        ($, x) => v.indexOf($.ref.current) - v.indexOf(x.ref.current),
      )
    }, [g.collectionRef, g.itemMap])
  }
  return [{ Provider: s, Slot: u, ItemSlot: l }, h, o]
}
const Ur = i.createContext(void 0)
function Fn(e) {
  const t = i.useContext(Ur)
  return e || t || 'ltr'
}
function Vr(e, t = globalThis?.document) {
  const n = ne(e)
  i.useEffect(() => {
    const o = (r) => {
      r.key === 'Escape' && n(r)
    }
    return (
      t.addEventListener('keydown', o),
      () => t.removeEventListener('keydown', o)
    )
  }, [n, t])
}
const At = 'dismissableLayer.update',
  Kr = 'dismissableLayer.pointerDownOutside',
  Hr = 'dismissableLayer.focusOutside'
let on
const Yr = i.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  Xr = i.forwardRef((e, t) => {
    var n
    const {
        disableOutsidePointerEvents: o = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: c,
        onFocusOutside: s,
        onInteractOutside: a,
        onDismiss: u,
        ...d
      } = e,
      f = i.useContext(Yr),
      [l, h] = i.useState(null),
      m =
        (n = l?.ownerDocument) !== null && n !== void 0
          ? n
          : globalThis?.document,
      [, g] = i.useState({}),
      p = Y(t, (R) => h(R)),
      b = Array.from(f.layers),
      [v] = [...f.layersWithOutsidePointerEventsDisabled].slice(-1),
      w = b.indexOf(v),
      y = l ? b.indexOf(l) : -1,
      $ = f.layersWithOutsidePointerEventsDisabled.size > 0,
      x = y >= w,
      M = Zr((R) => {
        const _ = R.target,
          I = [...f.branches].some((L) => L.contains(_))
        !x || I || (c?.(R), a?.(R), R.defaultPrevented || u?.())
      }, m),
      C = qr((R) => {
        const _ = R.target
        ;[...f.branches].some((L) => L.contains(_)) ||
          (s?.(R), a?.(R), R.defaultPrevented || u?.())
      }, m)
    return (
      Vr((R) => {
        y === f.layers.size - 1 &&
          (r?.(R), !R.defaultPrevented && u && (R.preventDefault(), u()))
      }, m),
      i.useEffect(() => {
        if (l)
          return (
            o &&
              (f.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((on = m.body.style.pointerEvents),
                (m.body.style.pointerEvents = 'none')),
              f.layersWithOutsidePointerEventsDisabled.add(l)),
            f.layers.add(l),
            rn(),
            () => {
              o &&
                f.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (m.body.style.pointerEvents = on)
            }
          )
      }, [l, m, o, f]),
      i.useEffect(
        () => () => {
          l &&
            (f.layers.delete(l),
            f.layersWithOutsidePointerEventsDisabled.delete(l),
            rn())
        },
        [l, f],
      ),
      i.useEffect(() => {
        const R = () => g({})
        return (
          document.addEventListener(At, R),
          () => document.removeEventListener(At, R)
        )
      }, []),
      i.createElement(
        X.div,
        P({}, d, {
          ref: p,
          style: {
            pointerEvents: $ ? (x ? 'auto' : 'none') : void 0,
            ...e.style,
          },
          onFocusCapture: O(e.onFocusCapture, C.onFocusCapture),
          onBlurCapture: O(e.onBlurCapture, C.onBlurCapture),
          onPointerDownCapture: O(
            e.onPointerDownCapture,
            M.onPointerDownCapture,
          ),
        }),
      )
    )
  })
function Zr(e, t = globalThis?.document) {
  const n = ne(e),
    o = i.useRef(!1),
    r = i.useRef(() => {})
  return (
    i.useEffect(() => {
      const c = (a) => {
          if (a.target && !o.current) {
            let d = function () {
              zn(Kr, n, u, { discrete: !0 })
            }
            const u = { originalEvent: a }
            a.pointerType === 'touch'
              ? (t.removeEventListener('click', r.current),
                (r.current = d),
                t.addEventListener('click', r.current, { once: !0 }))
              : d()
          } else t.removeEventListener('click', r.current)
          o.current = !1
        },
        s = window.setTimeout(() => {
          t.addEventListener('pointerdown', c)
        }, 0)
      return () => {
        window.clearTimeout(s),
          t.removeEventListener('pointerdown', c),
          t.removeEventListener('click', r.current)
      }
    }, [t, n]),
    { onPointerDownCapture: () => (o.current = !0) }
  )
}
function qr(e, t = globalThis?.document) {
  const n = ne(e),
    o = i.useRef(!1)
  return (
    i.useEffect(() => {
      const r = (c) => {
        c.target &&
          !o.current &&
          zn(Hr, n, { originalEvent: c }, { discrete: !1 })
      }
      return (
        t.addEventListener('focusin', r),
        () => t.removeEventListener('focusin', r)
      )
    }, [t, n]),
    {
      onFocusCapture: () => (o.current = !0),
      onBlurCapture: () => (o.current = !1),
    }
  )
}
function rn() {
  const e = new CustomEvent(At)
  document.dispatchEvent(e)
}
function zn(e, t, n, { discrete: o }) {
  const r = n.originalEvent.target,
    c = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n })
  t && r.addEventListener(e, t, { once: !0 }), o ? Nn(r, c) : r.dispatchEvent(c)
}
let vt = 0
function Qr() {
  i.useEffect(() => {
    var e, t
    const n = document.querySelectorAll('[data-radix-focus-guard]')
    return (
      document.body.insertAdjacentElement(
        'afterbegin',
        (e = n[0]) !== null && e !== void 0 ? e : cn(),
      ),
      document.body.insertAdjacentElement(
        'beforeend',
        (t = n[1]) !== null && t !== void 0 ? t : cn(),
      ),
      vt++,
      () => {
        vt === 1 &&
          document
            .querySelectorAll('[data-radix-focus-guard]')
            .forEach((o) => o.remove()),
          vt--
      }
    )
  }, [])
}
function cn() {
  const e = document.createElement('span')
  return (
    e.setAttribute('data-radix-focus-guard', ''),
    (e.tabIndex = 0),
    (e.style.cssText =
      'outline: none; opacity: 0; position: fixed; pointer-events: none'),
    e
  )
}
const wt = 'focusScope.autoFocusOnMount',
  $t = 'focusScope.autoFocusOnUnmount',
  sn = { bubbles: !1, cancelable: !0 },
  Jr = i.forwardRef((e, t) => {
    const {
        loop: n = !1,
        trapped: o = !1,
        onMountAutoFocus: r,
        onUnmountAutoFocus: c,
        ...s
      } = e,
      [a, u] = i.useState(null),
      d = ne(r),
      f = ne(c),
      l = i.useRef(null),
      h = Y(t, (p) => u(p)),
      m = i.useRef({
        paused: !1,
        pause() {
          this.paused = !0
        },
        resume() {
          this.paused = !1
        },
      }).current
    i.useEffect(() => {
      if (o) {
        let p = function (y) {
            if (m.paused || !a) return
            const $ = y.target
            a.contains($) ? (l.current = $) : me(l.current, { select: !0 })
          },
          b = function (y) {
            if (m.paused || !a) return
            const $ = y.relatedTarget
            $ !== null && (a.contains($) || me(l.current, { select: !0 }))
          },
          v = function (y) {
            if (document.activeElement === document.body)
              for (const x of y) x.removedNodes.length > 0 && me(a)
          }
        document.addEventListener('focusin', p),
          document.addEventListener('focusout', b)
        const w = new MutationObserver(v)
        return (
          a && w.observe(a, { childList: !0, subtree: !0 }),
          () => {
            document.removeEventListener('focusin', p),
              document.removeEventListener('focusout', b),
              w.disconnect()
          }
        )
      }
    }, [o, a, m.paused]),
      i.useEffect(() => {
        if (a) {
          ln.add(m)
          const p = document.activeElement
          if (!a.contains(p)) {
            const v = new CustomEvent(wt, sn)
            a.addEventListener(wt, d),
              a.dispatchEvent(v),
              v.defaultPrevented ||
                (ec(cc(Wn(a)), { select: !0 }),
                document.activeElement === p && me(a))
          }
          return () => {
            a.removeEventListener(wt, d),
              setTimeout(() => {
                const v = new CustomEvent($t, sn)
                a.addEventListener($t, f),
                  a.dispatchEvent(v),
                  v.defaultPrevented || me(p ?? document.body, { select: !0 }),
                  a.removeEventListener($t, f),
                  ln.remove(m)
              }, 0)
          }
        }
      }, [a, d, f, m])
    const g = i.useCallback(
      (p) => {
        if ((!n && !o) || m.paused) return
        const b = p.key === 'Tab' && !p.altKey && !p.ctrlKey && !p.metaKey,
          v = document.activeElement
        if (b && v) {
          const w = p.currentTarget,
            [y, $] = tc(w)
          y && $
            ? !p.shiftKey && v === $
              ? (p.preventDefault(), n && me(y, { select: !0 }))
              : p.shiftKey &&
                v === y &&
                (p.preventDefault(), n && me($, { select: !0 }))
            : v === w && p.preventDefault()
        }
      },
      [n, o, m.paused],
    )
    return i.createElement(
      X.div,
      P({ tabIndex: -1 }, s, { ref: h, onKeyDown: g }),
    )
  })
function ec(e, { select: t = !1 } = {}) {
  const n = document.activeElement
  for (const o of e)
    if ((me(o, { select: t }), document.activeElement !== n)) return
}
function tc(e) {
  const t = Wn(e),
    n = an(t, e),
    o = an(t.reverse(), e)
  return [n, o]
}
function Wn(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (o) => {
        const r = o.tagName === 'INPUT' && o.type === 'hidden'
        return o.disabled || o.hidden || r
          ? NodeFilter.FILTER_SKIP
          : o.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP
      },
    })
  for (; n.nextNode(); ) t.push(n.currentNode)
  return t
}
function an(e, t) {
  for (const n of e) if (!nc(n, { upTo: t })) return n
}
function nc(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === 'hidden') return !0
  for (; e; ) {
    if (t !== void 0 && e === t) return !1
    if (getComputedStyle(e).display === 'none') return !0
    e = e.parentElement
  }
  return !1
}
function oc(e) {
  return e instanceof HTMLInputElement && 'select' in e
}
function me(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement
    e.focus({ preventScroll: !0 }), e !== n && oc(e) && t && e.select()
  }
}
const ln = rc()
function rc() {
  let e = []
  return {
    add(t) {
      const n = e[0]
      t !== n && n?.pause(), (e = un(e, t)), e.unshift(t)
    },
    remove(t) {
      var n
      ;(e = un(e, t)), (n = e[0]) === null || n === void 0 || n.resume()
    },
  }
}
function un(e, t) {
  const n = [...e],
    o = n.indexOf(t)
  return o !== -1 && n.splice(o, 1), n
}
function cc(e) {
  return e.filter((t) => t.tagName !== 'A')
}
const Ae = globalThis?.document ? i.useLayoutEffect : () => {},
  ic = Vo.useId || (() => {})
let sc = 0
function _t(e) {
  const [t, n] = i.useState(ic())
  return (
    Ae(() => {
      e || n((o) => o ?? String(sc++))
    }, [e]),
    e || (t ? `radix-${t}` : '')
  )
}
const ac = ['top', 'right', 'bottom', 'left'],
  te = Math.min,
  K = Math.max,
  lt = Math.round,
  Qe = Math.floor,
  ge = (e) => ({ x: e, y: e }),
  lc = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' },
  uc = { start: 'end', end: 'start' }
function Tt(e, t, n) {
  return K(e, te(t, n))
}
function ie(e, t) {
  return typeof e == 'function' ? e(t) : e
}
function se(e) {
  return e.split('-')[0]
}
function Oe(e) {
  return e.split('-')[1]
}
function zt(e) {
  return e === 'x' ? 'y' : 'x'
}
function Wt(e) {
  return e === 'y' ? 'height' : 'width'
}
function ke(e) {
  return ['top', 'bottom'].includes(se(e)) ? 'y' : 'x'
}
function Bt(e) {
  return zt(ke(e))
}
function dc(e, t, n) {
  n === void 0 && (n = !1)
  const o = Oe(e),
    r = Bt(e),
    c = Wt(r)
  let s =
    r === 'x'
      ? o === (n ? 'end' : 'start')
        ? 'right'
        : 'left'
      : o === 'start'
        ? 'bottom'
        : 'top'
  return t.reference[c] > t.floating[c] && (s = ut(s)), [s, ut(s)]
}
function fc(e) {
  const t = ut(e)
  return [Ot(e), t, Ot(t)]
}
function Ot(e) {
  return e.replace(/start|end/g, (t) => uc[t])
}
function pc(e, t, n) {
  const o = ['left', 'right'],
    r = ['right', 'left'],
    c = ['top', 'bottom'],
    s = ['bottom', 'top']
  switch (e) {
    case 'top':
    case 'bottom':
      return n ? (t ? r : o) : t ? o : r
    case 'left':
    case 'right':
      return t ? c : s
    default:
      return []
  }
}
function mc(e, t, n, o) {
  const r = Oe(e)
  let c = pc(se(e), n === 'start', o)
  return (
    r && ((c = c.map((s) => s + '-' + r)), t && (c = c.concat(c.map(Ot)))), c
  )
}
function ut(e) {
  return e.replace(/left|right|bottom|top/g, (t) => lc[t])
}
function hc(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e }
}
function Bn(e) {
  return typeof e != 'number' ? hc(e) : { top: e, right: e, bottom: e, left: e }
}
function dt(e) {
  const { x: t, y: n, width: o, height: r } = e
  return {
    width: o,
    height: r,
    top: n,
    left: t,
    right: t + o,
    bottom: n + r,
    x: t,
    y: n,
  }
}
function dn(e, t, n) {
  let { reference: o, floating: r } = e
  const c = ke(t),
    s = Bt(t),
    a = Wt(s),
    u = se(t),
    d = c === 'y',
    f = o.x + o.width / 2 - r.width / 2,
    l = o.y + o.height / 2 - r.height / 2,
    h = o[a] / 2 - r[a] / 2
  let m
  switch (u) {
    case 'top':
      m = { x: f, y: o.y - r.height }
      break
    case 'bottom':
      m = { x: f, y: o.y + o.height }
      break
    case 'right':
      m = { x: o.x + o.width, y: l }
      break
    case 'left':
      m = { x: o.x - r.width, y: l }
      break
    default:
      m = { x: o.x, y: o.y }
  }
  switch (Oe(t)) {
    case 'start':
      m[s] -= h * (n && d ? -1 : 1)
      break
    case 'end':
      m[s] += h * (n && d ? -1 : 1)
      break
  }
  return m
}
const gc = async (e, t, n) => {
  const {
      placement: o = 'bottom',
      strategy: r = 'absolute',
      middleware: c = [],
      platform: s,
    } = n,
    a = c.filter(Boolean),
    u = await (s.isRTL == null ? void 0 : s.isRTL(t))
  let d = await s.getElementRects({ reference: e, floating: t, strategy: r }),
    { x: f, y: l } = dn(d, o, u),
    h = o,
    m = {},
    g = 0
  for (let p = 0; p < a.length; p++) {
    const { name: b, fn: v } = a[p],
      {
        x: w,
        y,
        data: $,
        reset: x,
      } = await v({
        x: f,
        y: l,
        initialPlacement: o,
        placement: h,
        strategy: r,
        middlewareData: m,
        rects: d,
        platform: s,
        elements: { reference: e, floating: t },
      })
    ;(f = w ?? f),
      (l = y ?? l),
      (m = { ...m, [b]: { ...m[b], ...$ } }),
      x &&
        g <= 50 &&
        (g++,
        typeof x == 'object' &&
          (x.placement && (h = x.placement),
          x.rects &&
            (d =
              x.rects === !0
                ? await s.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: r,
                  })
                : x.rects),
          ({ x: f, y: l } = dn(d, h, u))),
        (p = -1))
  }
  return { x: f, y: l, placement: h, strategy: r, middlewareData: m }
}
async function ze(e, t) {
  var n
  t === void 0 && (t = {})
  const { x: o, y: r, platform: c, rects: s, elements: a, strategy: u } = e,
    {
      boundary: d = 'clippingAncestors',
      rootBoundary: f = 'viewport',
      elementContext: l = 'floating',
      altBoundary: h = !1,
      padding: m = 0,
    } = ie(t, e),
    g = Bn(m),
    b = a[h ? (l === 'floating' ? 'reference' : 'floating') : l],
    v = dt(
      await c.getClippingRect({
        element:
          (n = await (c.isElement == null ? void 0 : c.isElement(b))) == null ||
          n
            ? b
            : b.contextElement ||
              (await (c.getDocumentElement == null
                ? void 0
                : c.getDocumentElement(a.floating))),
        boundary: d,
        rootBoundary: f,
        strategy: u,
      }),
    ),
    w =
      l === 'floating'
        ? { x: o, y: r, width: s.floating.width, height: s.floating.height }
        : s.reference,
    y = await (c.getOffsetParent == null
      ? void 0
      : c.getOffsetParent(a.floating)),
    $ = (await (c.isElement == null ? void 0 : c.isElement(y)))
      ? (await (c.getScale == null ? void 0 : c.getScale(y))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    x = dt(
      c.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await c.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: a,
            rect: w,
            offsetParent: y,
            strategy: u,
          })
        : w,
    )
  return {
    top: (v.top - x.top + g.top) / $.y,
    bottom: (x.bottom - v.bottom + g.bottom) / $.y,
    left: (v.left - x.left + g.left) / $.x,
    right: (x.right - v.right + g.right) / $.x,
  }
}
const bc = (e) => ({
    name: 'arrow',
    options: e,
    async fn(t) {
      const {
          x: n,
          y: o,
          placement: r,
          rects: c,
          platform: s,
          elements: a,
          middlewareData: u,
        } = t,
        { element: d, padding: f = 0 } = ie(e, t) || {}
      if (d == null) return {}
      const l = Bn(f),
        h = { x: n, y: o },
        m = Bt(r),
        g = Wt(m),
        p = await s.getDimensions(d),
        b = m === 'y',
        v = b ? 'top' : 'left',
        w = b ? 'bottom' : 'right',
        y = b ? 'clientHeight' : 'clientWidth',
        $ = c.reference[g] + c.reference[m] - h[m] - c.floating[g],
        x = h[m] - c.reference[m],
        M = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(d))
      let C = M ? M[y] : 0
      ;(!C || !(await (s.isElement == null ? void 0 : s.isElement(M)))) &&
        (C = a.floating[y] || c.floating[g])
      const R = $ / 2 - x / 2,
        _ = C / 2 - p[g] / 2 - 1,
        I = te(l[v], _),
        L = te(l[w], _),
        S = I,
        G = C - p[g] - L,
        T = C / 2 - p[g] / 2 + R,
        k = Tt(S, T, G),
        z =
          !u.arrow &&
          Oe(r) != null &&
          T !== k &&
          c.reference[g] / 2 - (T < S ? I : L) - p[g] / 2 < 0,
        D = z ? (T < S ? T - S : T - G) : 0
      return {
        [m]: h[m] + D,
        data: {
          [m]: k,
          centerOffset: T - k - D,
          ...(z && { alignmentOffset: D }),
        },
        reset: z,
      }
    },
  }),
  vc = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: 'flip',
        options: e,
        async fn(t) {
          var n, o
          const {
              placement: r,
              middlewareData: c,
              rects: s,
              initialPlacement: a,
              platform: u,
              elements: d,
            } = t,
            {
              mainAxis: f = !0,
              crossAxis: l = !0,
              fallbackPlacements: h,
              fallbackStrategy: m = 'bestFit',
              fallbackAxisSideDirection: g = 'none',
              flipAlignment: p = !0,
              ...b
            } = ie(e, t)
          if ((n = c.arrow) != null && n.alignmentOffset) return {}
          const v = se(r),
            w = se(a) === a,
            y = await (u.isRTL == null ? void 0 : u.isRTL(d.floating)),
            $ = h || (w || !p ? [ut(a)] : fc(a))
          !h && g !== 'none' && $.push(...mc(a, p, g, y))
          const x = [a, ...$],
            M = await ze(t, b),
            C = []
          let R = ((o = c.flip) == null ? void 0 : o.overflows) || []
          if ((f && C.push(M[v]), l)) {
            const S = dc(r, s, y)
            C.push(M[S[0]], M[S[1]])
          }
          if (
            ((R = [...R, { placement: r, overflows: C }]),
            !C.every((S) => S <= 0))
          ) {
            var _, I
            const S = (((_ = c.flip) == null ? void 0 : _.index) || 0) + 1,
              G = x[S]
            if (G)
              return {
                data: { index: S, overflows: R },
                reset: { placement: G },
              }
            let T =
              (I = R.filter((k) => k.overflows[0] <= 0).sort(
                (k, z) => k.overflows[1] - z.overflows[1],
              )[0]) == null
                ? void 0
                : I.placement
            if (!T)
              switch (m) {
                case 'bestFit': {
                  var L
                  const k =
                    (L = R.map((z) => [
                      z.placement,
                      z.overflows
                        .filter((D) => D > 0)
                        .reduce((D, j) => D + j, 0),
                    ]).sort((z, D) => z[1] - D[1])[0]) == null
                      ? void 0
                      : L[0]
                  k && (T = k)
                  break
                }
                case 'initialPlacement':
                  T = a
                  break
              }
            if (r !== T) return { reset: { placement: T } }
          }
          return {}
        },
      }
    )
  }
function fn(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  }
}
function pn(e) {
  return ac.some((t) => e[t] >= 0)
}
const wc = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: 'hide',
      options: e,
      async fn(t) {
        const { rects: n } = t,
          { strategy: o = 'referenceHidden', ...r } = ie(e, t)
        switch (o) {
          case 'referenceHidden': {
            const c = await ze(t, { ...r, elementContext: 'reference' }),
              s = fn(c, n.reference)
            return {
              data: { referenceHiddenOffsets: s, referenceHidden: pn(s) },
            }
          }
          case 'escaped': {
            const c = await ze(t, { ...r, altBoundary: !0 }),
              s = fn(c, n.floating)
            return { data: { escapedOffsets: s, escaped: pn(s) } }
          }
          default:
            return {}
        }
      },
    }
  )
}
async function $c(e, t) {
  const { placement: n, platform: o, elements: r } = e,
    c = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)),
    s = se(n),
    a = Oe(n),
    u = ke(n) === 'y',
    d = ['left', 'top'].includes(s) ? -1 : 1,
    f = c && u ? -1 : 1,
    l = ie(t, e)
  let {
    mainAxis: h,
    crossAxis: m,
    alignmentAxis: g,
  } = typeof l == 'number'
    ? { mainAxis: l, crossAxis: 0, alignmentAxis: null }
    : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...l }
  return (
    a && typeof g == 'number' && (m = a === 'end' ? g * -1 : g),
    u ? { x: m * f, y: h * d } : { x: h * d, y: m * f }
  )
}
const yc = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: 'offset',
        options: e,
        async fn(t) {
          var n, o
          const { x: r, y: c, placement: s, middlewareData: a } = t,
            u = await $c(t, e)
          return s === ((n = a.offset) == null ? void 0 : n.placement) &&
            (o = a.arrow) != null &&
            o.alignmentOffset
            ? {}
            : { x: r + u.x, y: c + u.y, data: { ...u, placement: s } }
        },
      }
    )
  },
  xc = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: 'shift',
        options: e,
        async fn(t) {
          const { x: n, y: o, placement: r } = t,
            {
              mainAxis: c = !0,
              crossAxis: s = !1,
              limiter: a = {
                fn: (b) => {
                  let { x: v, y: w } = b
                  return { x: v, y: w }
                },
              },
              ...u
            } = ie(e, t),
            d = { x: n, y: o },
            f = await ze(t, u),
            l = ke(se(r)),
            h = zt(l)
          let m = d[h],
            g = d[l]
          if (c) {
            const b = h === 'y' ? 'top' : 'left',
              v = h === 'y' ? 'bottom' : 'right',
              w = m + f[b],
              y = m - f[v]
            m = Tt(w, m, y)
          }
          if (s) {
            const b = l === 'y' ? 'top' : 'left',
              v = l === 'y' ? 'bottom' : 'right',
              w = g + f[b],
              y = g - f[v]
            g = Tt(w, g, y)
          }
          const p = a.fn({ ...t, [h]: m, [l]: g })
          return { ...p, data: { x: p.x - n, y: p.y - o } }
        },
      }
    )
  },
  Ec = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: o, placement: r, rects: c, middlewareData: s } = t,
            { offset: a = 0, mainAxis: u = !0, crossAxis: d = !0 } = ie(e, t),
            f = { x: n, y: o },
            l = ke(r),
            h = zt(l)
          let m = f[h],
            g = f[l]
          const p = ie(a, t),
            b =
              typeof p == 'number'
                ? { mainAxis: p, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...p }
          if (u) {
            const y = h === 'y' ? 'height' : 'width',
              $ = c.reference[h] - c.floating[y] + b.mainAxis,
              x = c.reference[h] + c.reference[y] - b.mainAxis
            m < $ ? (m = $) : m > x && (m = x)
          }
          if (d) {
            var v, w
            const y = h === 'y' ? 'width' : 'height',
              $ = ['top', 'left'].includes(se(r)),
              x =
                c.reference[l] -
                c.floating[y] +
                (($ && ((v = s.offset) == null ? void 0 : v[l])) || 0) +
                ($ ? 0 : b.crossAxis),
              M =
                c.reference[l] +
                c.reference[y] +
                ($ ? 0 : ((w = s.offset) == null ? void 0 : w[l]) || 0) -
                ($ ? b.crossAxis : 0)
            g < x ? (g = x) : g > M && (g = M)
          }
          return { [h]: m, [l]: g }
        },
      }
    )
  },
  Cc = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: 'size',
        options: e,
        async fn(t) {
          const { placement: n, rects: o, platform: r, elements: c } = t,
            { apply: s = () => {}, ...a } = ie(e, t),
            u = await ze(t, a),
            d = se(n),
            f = Oe(n),
            l = ke(n) === 'y',
            { width: h, height: m } = o.floating
          let g, p
          d === 'top' || d === 'bottom'
            ? ((g = d),
              (p =
                f ===
                ((await (r.isRTL == null ? void 0 : r.isRTL(c.floating)))
                  ? 'start'
                  : 'end')
                  ? 'left'
                  : 'right'))
            : ((p = d), (g = f === 'end' ? 'top' : 'bottom'))
          const b = m - u.top - u.bottom,
            v = h - u.left - u.right,
            w = te(m - u[g], b),
            y = te(h - u[p], v),
            $ = !t.middlewareData.shift
          let x = w,
            M = y
          if (
            (l ? (M = f || $ ? te(y, v) : v) : (x = f || $ ? te(w, b) : b),
            $ && !f)
          ) {
            const R = K(u.left, 0),
              _ = K(u.right, 0),
              I = K(u.top, 0),
              L = K(u.bottom, 0)
            l
              ? (M = h - 2 * (R !== 0 || _ !== 0 ? R + _ : K(u.left, u.right)))
              : (x = m - 2 * (I !== 0 || L !== 0 ? I + L : K(u.top, u.bottom)))
          }
          await s({ ...t, availableWidth: M, availableHeight: x })
          const C = await r.getDimensions(c.floating)
          return h !== C.width || m !== C.height ? { reset: { rects: !0 } } : {}
        },
      }
    )
  }
function De(e) {
  return jn(e) ? (e.nodeName || '').toLowerCase() : '#document'
}
function H(e) {
  var t
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  )
}
function le(e) {
  var t
  return (t = (jn(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement
}
function jn(e) {
  return e instanceof Node || e instanceof H(e).Node
}
function oe(e) {
  return e instanceof Element || e instanceof H(e).Element
}
function re(e) {
  return e instanceof HTMLElement || e instanceof H(e).HTMLElement
}
function mn(e) {
  return typeof ShadowRoot > 'u'
    ? !1
    : e instanceof ShadowRoot || e instanceof H(e).ShadowRoot
}
function Ve(e) {
  const { overflow: t, overflowX: n, overflowY: o, display: r } = J(e)
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + o + n) &&
    !['inline', 'contents'].includes(r)
  )
}
function Sc(e) {
  return ['table', 'td', 'th'].includes(De(e))
}
function jt(e) {
  const t = Gt(),
    n = J(e)
  return (
    n.transform !== 'none' ||
    n.perspective !== 'none' ||
    (n.containerType ? n.containerType !== 'normal' : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== 'none' : !1)) ||
    (!t && (n.filter ? n.filter !== 'none' : !1)) ||
    ['transform', 'perspective', 'filter'].some((o) =>
      (n.willChange || '').includes(o),
    ) ||
    ['paint', 'layout', 'strict', 'content'].some((o) =>
      (n.contain || '').includes(o),
    )
  )
}
function Rc(e) {
  let t = be(e)
  for (; re(t) && !_e(t); ) {
    if (jt(t)) return t
    t = be(t)
  }
  return null
}
function Gt() {
  return typeof CSS > 'u' || !CSS.supports
    ? !1
    : CSS.supports('-webkit-backdrop-filter', 'none')
}
function _e(e) {
  return ['html', 'body', '#document'].includes(De(e))
}
function J(e) {
  return H(e).getComputedStyle(e)
}
function ht(e) {
  return oe(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset }
}
function be(e) {
  if (De(e) === 'html') return e
  const t = e.assignedSlot || e.parentNode || (mn(e) && e.host) || le(e)
  return mn(t) ? t.host : t
}
function Gn(e) {
  const t = be(e)
  return _e(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : re(t) && Ve(t)
      ? t
      : Gn(t)
}
function We(e, t, n) {
  var o
  t === void 0 && (t = []), n === void 0 && (n = !0)
  const r = Gn(e),
    c = r === ((o = e.ownerDocument) == null ? void 0 : o.body),
    s = H(r)
  return c
    ? t.concat(
        s,
        s.visualViewport || [],
        Ve(r) ? r : [],
        s.frameElement && n ? We(s.frameElement) : [],
      )
    : t.concat(r, We(r, [], n))
}
function Un(e) {
  const t = J(e)
  let n = parseFloat(t.width) || 0,
    o = parseFloat(t.height) || 0
  const r = re(e),
    c = r ? e.offsetWidth : n,
    s = r ? e.offsetHeight : o,
    a = lt(n) !== c || lt(o) !== s
  return a && ((n = c), (o = s)), { width: n, height: o, $: a }
}
function Ut(e) {
  return oe(e) ? e : e.contextElement
}
function Re(e) {
  const t = Ut(e)
  if (!re(t)) return ge(1)
  const n = t.getBoundingClientRect(),
    { width: o, height: r, $: c } = Un(t)
  let s = (c ? lt(n.width) : n.width) / o,
    a = (c ? lt(n.height) : n.height) / r
  return (
    (!s || !Number.isFinite(s)) && (s = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    { x: s, y: a }
  )
}
const Pc = ge(0)
function Vn(e) {
  const t = H(e)
  return !Gt() || !t.visualViewport
    ? Pc
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
}
function Mc(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== H(e)) ? !1 : t
}
function $e(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1)
  const r = e.getBoundingClientRect(),
    c = Ut(e)
  let s = ge(1)
  t && (o ? oe(o) && (s = Re(o)) : (s = Re(e)))
  const a = Mc(c, n, o) ? Vn(c) : ge(0)
  let u = (r.left + a.x) / s.x,
    d = (r.top + a.y) / s.y,
    f = r.width / s.x,
    l = r.height / s.y
  if (c) {
    const h = H(c),
      m = o && oe(o) ? H(o) : o
    let g = h,
      p = g.frameElement
    for (; p && o && m !== g; ) {
      const b = Re(p),
        v = p.getBoundingClientRect(),
        w = J(p),
        y = v.left + (p.clientLeft + parseFloat(w.paddingLeft)) * b.x,
        $ = v.top + (p.clientTop + parseFloat(w.paddingTop)) * b.y
      ;(u *= b.x),
        (d *= b.y),
        (f *= b.x),
        (l *= b.y),
        (u += y),
        (d += $),
        (g = H(p)),
        (p = g.frameElement)
    }
  }
  return dt({ width: f, height: l, x: u, y: d })
}
const Ac = [':popover-open', ':modal']
function Vt(e) {
  return Ac.some((t) => {
    try {
      return e.matches(t)
    } catch {
      return !1
    }
  })
}
function _c(e) {
  let { elements: t, rect: n, offsetParent: o, strategy: r } = e
  const c = r === 'fixed',
    s = le(o),
    a = t ? Vt(t.floating) : !1
  if (o === s || (a && c)) return n
  let u = { scrollLeft: 0, scrollTop: 0 },
    d = ge(1)
  const f = ge(0),
    l = re(o)
  if (
    (l || (!l && !c)) &&
    ((De(o) !== 'body' || Ve(s)) && (u = ht(o)), re(o))
  ) {
    const h = $e(o)
    ;(d = Re(o)), (f.x = h.x + o.clientLeft), (f.y = h.y + o.clientTop)
  }
  return {
    width: n.width * d.x,
    height: n.height * d.y,
    x: n.x * d.x - u.scrollLeft * d.x + f.x,
    y: n.y * d.y - u.scrollTop * d.y + f.y,
  }
}
function Tc(e) {
  return Array.from(e.getClientRects())
}
function Kn(e) {
  return $e(le(e)).left + ht(e).scrollLeft
}
function Oc(e) {
  const t = le(e),
    n = ht(e),
    o = e.ownerDocument.body,
    r = K(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth),
    c = K(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight)
  let s = -n.scrollLeft + Kn(e)
  const a = -n.scrollTop
  return (
    J(o).direction === 'rtl' && (s += K(t.clientWidth, o.clientWidth) - r),
    { width: r, height: c, x: s, y: a }
  )
}
function kc(e, t) {
  const n = H(e),
    o = le(e),
    r = n.visualViewport
  let c = o.clientWidth,
    s = o.clientHeight,
    a = 0,
    u = 0
  if (r) {
    ;(c = r.width), (s = r.height)
    const d = Gt()
    ;(!d || (d && t === 'fixed')) && ((a = r.offsetLeft), (u = r.offsetTop))
  }
  return { width: c, height: s, x: a, y: u }
}
function Dc(e, t) {
  const n = $e(e, !0, t === 'fixed'),
    o = n.top + e.clientTop,
    r = n.left + e.clientLeft,
    c = re(e) ? Re(e) : ge(1),
    s = e.clientWidth * c.x,
    a = e.clientHeight * c.y,
    u = r * c.x,
    d = o * c.y
  return { width: s, height: a, x: u, y: d }
}
function hn(e, t, n) {
  let o
  if (t === 'viewport') o = kc(e, n)
  else if (t === 'document') o = Oc(le(e))
  else if (oe(t)) o = Dc(t, n)
  else {
    const r = Vn(e)
    o = { ...t, x: t.x - r.x, y: t.y - r.y }
  }
  return dt(o)
}
function Hn(e, t) {
  const n = be(e)
  return n === t || !oe(n) || _e(n) ? !1 : J(n).position === 'fixed' || Hn(n, t)
}
function Ic(e, t) {
  const n = t.get(e)
  if (n) return n
  let o = We(e, [], !1).filter((a) => oe(a) && De(a) !== 'body'),
    r = null
  const c = J(e).position === 'fixed'
  let s = c ? be(e) : e
  for (; oe(s) && !_e(s); ) {
    const a = J(s),
      u = jt(s)
    !u && a.position === 'fixed' && (r = null),
      (
        c
          ? !u && !r
          : (!u &&
              a.position === 'static' &&
              !!r &&
              ['absolute', 'fixed'].includes(r.position)) ||
            (Ve(s) && !u && Hn(e, s))
      )
        ? (o = o.filter((f) => f !== s))
        : (r = a),
      (s = be(s))
  }
  return t.set(e, o), o
}
function Nc(e) {
  let { element: t, boundary: n, rootBoundary: o, strategy: r } = e
  const s = [
      ...(n === 'clippingAncestors'
        ? Vt(t)
          ? []
          : Ic(t, this._c)
        : [].concat(n)),
      o,
    ],
    a = s[0],
    u = s.reduce(
      (d, f) => {
        const l = hn(t, f, r)
        return (
          (d.top = K(l.top, d.top)),
          (d.right = te(l.right, d.right)),
          (d.bottom = te(l.bottom, d.bottom)),
          (d.left = K(l.left, d.left)),
          d
        )
      },
      hn(t, a, r),
    )
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top,
  }
}
function Lc(e) {
  const { width: t, height: n } = Un(e)
  return { width: t, height: n }
}
function Fc(e, t, n) {
  const o = re(t),
    r = le(t),
    c = n === 'fixed',
    s = $e(e, !0, c, t)
  let a = { scrollLeft: 0, scrollTop: 0 }
  const u = ge(0)
  if (o || (!o && !c))
    if (((De(t) !== 'body' || Ve(r)) && (a = ht(t)), o)) {
      const l = $e(t, !0, c, t)
      ;(u.x = l.x + t.clientLeft), (u.y = l.y + t.clientTop)
    } else r && (u.x = Kn(r))
  const d = s.left + a.scrollLeft - u.x,
    f = s.top + a.scrollTop - u.y
  return { x: d, y: f, width: s.width, height: s.height }
}
function yt(e) {
  return J(e).position === 'static'
}
function gn(e, t) {
  return !re(e) || J(e).position === 'fixed' ? null : t ? t(e) : e.offsetParent
}
function Yn(e, t) {
  const n = H(e)
  if (Vt(e)) return n
  if (!re(e)) {
    let r = be(e)
    for (; r && !_e(r); ) {
      if (oe(r) && !yt(r)) return r
      r = be(r)
    }
    return n
  }
  let o = gn(e, t)
  for (; o && Sc(o) && yt(o); ) o = gn(o, t)
  return o && _e(o) && yt(o) && !jt(o) ? n : o || Rc(e) || n
}
const zc = async function (e) {
  const t = this.getOffsetParent || Yn,
    n = this.getDimensions,
    o = await n(e.floating)
  return {
    reference: Fc(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: o.width, height: o.height },
  }
}
function Wc(e) {
  return J(e).direction === 'rtl'
}
const Bc = {
  convertOffsetParentRelativeRectToViewportRelativeRect: _c,
  getDocumentElement: le,
  getClippingRect: Nc,
  getOffsetParent: Yn,
  getElementRects: zc,
  getClientRects: Tc,
  getDimensions: Lc,
  getScale: Re,
  isElement: oe,
  isRTL: Wc,
}
function jc(e, t) {
  let n = null,
    o
  const r = le(e)
  function c() {
    var a
    clearTimeout(o), (a = n) == null || a.disconnect(), (n = null)
  }
  function s(a, u) {
    a === void 0 && (a = !1), u === void 0 && (u = 1), c()
    const { left: d, top: f, width: l, height: h } = e.getBoundingClientRect()
    if ((a || t(), !l || !h)) return
    const m = Qe(f),
      g = Qe(r.clientWidth - (d + l)),
      p = Qe(r.clientHeight - (f + h)),
      b = Qe(d),
      w = {
        rootMargin: -m + 'px ' + -g + 'px ' + -p + 'px ' + -b + 'px',
        threshold: K(0, te(1, u)) || 1,
      }
    let y = !0
    function $(x) {
      const M = x[0].intersectionRatio
      if (M !== u) {
        if (!y) return s()
        M
          ? s(!1, M)
          : (o = setTimeout(() => {
              s(!1, 1e-7)
            }, 1e3))
      }
      y = !1
    }
    try {
      n = new IntersectionObserver($, { ...w, root: r.ownerDocument })
    } catch {
      n = new IntersectionObserver($, w)
    }
    n.observe(e)
  }
  return s(!0), c
}
function Gc(e, t, n, o) {
  o === void 0 && (o = {})
  const {
      ancestorScroll: r = !0,
      ancestorResize: c = !0,
      elementResize: s = typeof ResizeObserver == 'function',
      layoutShift: a = typeof IntersectionObserver == 'function',
      animationFrame: u = !1,
    } = o,
    d = Ut(e),
    f = r || c ? [...(d ? We(d) : []), ...We(t)] : []
  f.forEach((v) => {
    r && v.addEventListener('scroll', n, { passive: !0 }),
      c && v.addEventListener('resize', n)
  })
  const l = d && a ? jc(d, n) : null
  let h = -1,
    m = null
  s &&
    ((m = new ResizeObserver((v) => {
      let [w] = v
      w &&
        w.target === d &&
        m &&
        (m.unobserve(t),
        cancelAnimationFrame(h),
        (h = requestAnimationFrame(() => {
          var y
          ;(y = m) == null || y.observe(t)
        }))),
        n()
    })),
    d && !u && m.observe(d),
    m.observe(t))
  let g,
    p = u ? $e(e) : null
  u && b()
  function b() {
    const v = $e(e)
    p &&
      (v.x !== p.x ||
        v.y !== p.y ||
        v.width !== p.width ||
        v.height !== p.height) &&
      n(),
      (p = v),
      (g = requestAnimationFrame(b))
  }
  return (
    n(),
    () => {
      var v
      f.forEach((w) => {
        r && w.removeEventListener('scroll', n),
          c && w.removeEventListener('resize', n)
      }),
        l?.(),
        (v = m) == null || v.disconnect(),
        (m = null),
        u && cancelAnimationFrame(g)
    }
  )
}
const Uc = yc,
  Vc = xc,
  Kc = vc,
  Hc = Cc,
  Yc = wc,
  bn = bc,
  Xc = Ec,
  Zc = (e, t, n) => {
    const o = new Map(),
      r = { platform: Bc, ...n },
      c = { ...r.platform, _c: o }
    return gc(e, t, { ...r, platform: c })
  }
var ct = typeof document < 'u' ? i.useLayoutEffect : i.useEffect
function ft(e, t) {
  if (e === t) return !0
  if (typeof e != typeof t) return !1
  if (typeof e == 'function' && e.toString() === t.toString()) return !0
  let n, o, r
  if (e && t && typeof e == 'object') {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1
      for (o = n; o-- !== 0; ) if (!ft(e[o], t[o])) return !1
      return !0
    }
    if (((r = Object.keys(e)), (n = r.length), n !== Object.keys(t).length))
      return !1
    for (o = n; o-- !== 0; ) if (!{}.hasOwnProperty.call(t, r[o])) return !1
    for (o = n; o-- !== 0; ) {
      const c = r[o]
      if (!(c === '_owner' && e.$$typeof) && !ft(e[c], t[c])) return !1
    }
    return !0
  }
  return e !== e && t !== t
}
function Xn(e) {
  return typeof window > 'u'
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function vn(e, t) {
  const n = Xn(e)
  return Math.round(t * n) / n
}
function wn(e) {
  const t = i.useRef(e)
  return (
    ct(() => {
      t.current = e
    }),
    t
  )
}
function qc(e) {
  e === void 0 && (e = {})
  const {
      placement: t = 'bottom',
      strategy: n = 'absolute',
      middleware: o = [],
      platform: r,
      elements: { reference: c, floating: s } = {},
      transform: a = !0,
      whileElementsMounted: u,
      open: d,
    } = e,
    [f, l] = i.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [h, m] = i.useState(o)
  ft(h, o) || m(o)
  const [g, p] = i.useState(null),
    [b, v] = i.useState(null),
    w = i.useCallback((D) => {
      D !== M.current && ((M.current = D), p(D))
    }, []),
    y = i.useCallback((D) => {
      D !== C.current && ((C.current = D), v(D))
    }, []),
    $ = c || g,
    x = s || b,
    M = i.useRef(null),
    C = i.useRef(null),
    R = i.useRef(f),
    _ = u != null,
    I = wn(u),
    L = wn(r),
    S = i.useCallback(() => {
      if (!M.current || !C.current) return
      const D = { placement: t, strategy: n, middleware: h }
      L.current && (D.platform = L.current),
        Zc(M.current, C.current, D).then((j) => {
          const E = { ...j, isPositioned: !0 }
          G.current &&
            !ft(R.current, E) &&
            ((R.current = E),
            Lt.flushSync(() => {
              l(E)
            }))
        })
    }, [h, t, n, L])
  ct(() => {
    d === !1 &&
      R.current.isPositioned &&
      ((R.current.isPositioned = !1), l((D) => ({ ...D, isPositioned: !1 })))
  }, [d])
  const G = i.useRef(!1)
  ct(
    () => (
      (G.current = !0),
      () => {
        G.current = !1
      }
    ),
    [],
  ),
    ct(() => {
      if (($ && (M.current = $), x && (C.current = x), $ && x)) {
        if (I.current) return I.current($, x, S)
        S()
      }
    }, [$, x, S, I, _])
  const T = i.useMemo(
      () => ({ reference: M, floating: C, setReference: w, setFloating: y }),
      [w, y],
    ),
    k = i.useMemo(() => ({ reference: $, floating: x }), [$, x]),
    z = i.useMemo(() => {
      const D = { position: n, left: 0, top: 0 }
      if (!k.floating) return D
      const j = vn(k.floating, f.x),
        E = vn(k.floating, f.y)
      return a
        ? {
            ...D,
            transform: 'translate(' + j + 'px, ' + E + 'px)',
            ...(Xn(k.floating) >= 1.5 && { willChange: 'transform' }),
          }
        : { position: n, left: j, top: E }
    }, [n, a, k.floating, f.x, f.y])
  return i.useMemo(
    () => ({ ...f, update: S, refs: T, elements: k, floatingStyles: z }),
    [f, S, T, k, z],
  )
}
const Qc = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, 'current')
    }
    return {
      name: 'arrow',
      options: e,
      fn(n) {
        const { element: o, padding: r } = typeof e == 'function' ? e(n) : e
        return o && t(o)
          ? o.current != null
            ? bn({ element: o.current, padding: r }).fn(n)
            : {}
          : o
            ? bn({ element: o, padding: r }).fn(n)
            : {}
      },
    }
  },
  Jc = (e, t) => ({ ...Uc(e), options: [e, t] }),
  ei = (e, t) => ({ ...Vc(e), options: [e, t] }),
  ti = (e, t) => ({ ...Xc(e), options: [e, t] }),
  ni = (e, t) => ({ ...Kc(e), options: [e, t] }),
  oi = (e, t) => ({ ...Hc(e), options: [e, t] }),
  ri = (e, t) => ({ ...Yc(e), options: [e, t] }),
  ci = (e, t) => ({ ...Qc(e), options: [e, t] })
function ii(e) {
  const [t, n] = i.useState(void 0)
  return (
    Ae(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight })
        const o = new ResizeObserver((r) => {
          if (!Array.isArray(r) || !r.length) return
          const c = r[0]
          let s, a
          if ('borderBoxSize' in c) {
            const u = c.borderBoxSize,
              d = Array.isArray(u) ? u[0] : u
            ;(s = d.inlineSize), (a = d.blockSize)
          } else (s = e.offsetWidth), (a = e.offsetHeight)
          n({ width: s, height: a })
        })
        return o.observe(e, { box: 'border-box' }), () => o.unobserve(e)
      } else n(void 0)
    }, [e]),
    t
  )
}
const Zn = 'Popper',
  [qn, Qn] = Ue(Zn),
  [si, Jn] = qn(Zn),
  ai = (e) => {
    const { __scopePopper: t, children: n } = e,
      [o, r] = i.useState(null)
    return i.createElement(si, { scope: t, anchor: o, onAnchorChange: r }, n)
  },
  li = 'PopperAnchor',
  ui = i.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: o, ...r } = e,
      c = Jn(li, n),
      s = i.useRef(null),
      a = Y(t, s)
    return (
      i.useEffect(() => {
        c.onAnchorChange(o?.current || s.current)
      }),
      o ? null : i.createElement(X.div, P({}, r, { ref: a }))
    )
  }),
  eo = 'PopperContent',
  [di, ja] = qn(eo),
  fi = i.forwardRef((e, t) => {
    var n, o, r, c, s, a, u, d
    const {
        __scopePopper: f,
        side: l = 'bottom',
        sideOffset: h = 0,
        align: m = 'center',
        alignOffset: g = 0,
        arrowPadding: p = 0,
        avoidCollisions: b = !0,
        collisionBoundary: v = [],
        collisionPadding: w = 0,
        sticky: y = 'partial',
        hideWhenDetached: $ = !1,
        updatePositionStrategy: x = 'optimized',
        onPlaced: M,
        ...C
      } = e,
      R = Jn(eo, f),
      [_, I] = i.useState(null),
      L = Y(t, (Ne) => I(Ne)),
      [S, G] = i.useState(null),
      T = ii(S),
      k = (n = T?.width) !== null && n !== void 0 ? n : 0,
      z = (o = T?.height) !== null && o !== void 0 ? o : 0,
      D = l + (m !== 'center' ? '-' + m : ''),
      j =
        typeof w == 'number'
          ? w
          : { top: 0, right: 0, bottom: 0, left: 0, ...w },
      E = Array.isArray(v) ? v : [v],
      W = E.length > 0,
      B = { padding: j, boundary: E.filter(pi), altBoundary: W },
      {
        refs: U,
        floatingStyles: ue,
        placement: Ie,
        isPositioned: ve,
        middlewareData: q,
      } = qc({
        strategy: 'fixed',
        placement: D,
        whileElementsMounted: (...Ne) =>
          Gc(...Ne, { animationFrame: x === 'always' }),
        elements: { reference: R.anchor },
        middleware: [
          Jc({ mainAxis: h + z, alignmentAxis: g }),
          b &&
            ei({
              mainAxis: !0,
              crossAxis: !1,
              limiter: y === 'partial' ? ti() : void 0,
              ...B,
            }),
          b && ni({ ...B }),
          oi({
            ...B,
            apply: ({
              elements: Ne,
              rects: Qt,
              availableWidth: Bo,
              availableHeight: jo,
            }) => {
              const { width: Go, height: Uo } = Qt.reference,
                Ze = Ne.floating.style
              Ze.setProperty('--radix-popper-available-width', `${Bo}px`),
                Ze.setProperty('--radix-popper-available-height', `${jo}px`),
                Ze.setProperty('--radix-popper-anchor-width', `${Go}px`),
                Ze.setProperty('--radix-popper-anchor-height', `${Uo}px`)
            },
          }),
          S && ci({ element: S, padding: p }),
          mi({ arrowWidth: k, arrowHeight: z }),
          $ && ri({ strategy: 'referenceHidden', ...B }),
        ],
      }),
      [de, Ye] = to(Ie),
      V = ne(M)
    Ae(() => {
      ve && V?.()
    }, [ve, V])
    const Xe = (r = q.arrow) === null || r === void 0 ? void 0 : r.x,
      Lo = (c = q.arrow) === null || c === void 0 ? void 0 : c.y,
      Fo =
        ((s = q.arrow) === null || s === void 0 ? void 0 : s.centerOffset) !==
        0,
      [zo, Wo] = i.useState()
    return (
      Ae(() => {
        _ && Wo(window.getComputedStyle(_).zIndex)
      }, [_]),
      i.createElement(
        'div',
        {
          ref: U.setFloating,
          'data-radix-popper-content-wrapper': '',
          style: {
            ...ue,
            transform: ve ? ue.transform : 'translate(0, -200%)',
            minWidth: 'max-content',
            zIndex: zo,
            '--radix-popper-transform-origin': [
              (a = q.transformOrigin) === null || a === void 0 ? void 0 : a.x,
              (u = q.transformOrigin) === null || u === void 0 ? void 0 : u.y,
            ].join(' '),
          },
          dir: e.dir,
        },
        i.createElement(
          di,
          {
            scope: f,
            placedSide: de,
            onArrowChange: G,
            arrowX: Xe,
            arrowY: Lo,
            shouldHideArrow: Fo,
          },
          i.createElement(
            X.div,
            P({ 'data-side': de, 'data-align': Ye }, C, {
              ref: L,
              style: {
                ...C.style,
                animation: ve ? void 0 : 'none',
                opacity:
                  (d = q.hide) !== null && d !== void 0 && d.referenceHidden
                    ? 0
                    : void 0,
              },
            }),
          ),
        ),
      )
    )
  })
function pi(e) {
  return e !== null
}
const mi = (e) => ({
  name: 'transformOrigin',
  options: e,
  fn(t) {
    var n, o, r, c, s
    const { placement: a, rects: u, middlewareData: d } = t,
      l =
        ((n = d.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !==
        0,
      h = l ? 0 : e.arrowWidth,
      m = l ? 0 : e.arrowHeight,
      [g, p] = to(a),
      b = { start: '0%', center: '50%', end: '100%' }[p],
      v =
        ((o = (r = d.arrow) === null || r === void 0 ? void 0 : r.x) !== null &&
        o !== void 0
          ? o
          : 0) +
        h / 2,
      w =
        ((c = (s = d.arrow) === null || s === void 0 ? void 0 : s.y) !== null &&
        c !== void 0
          ? c
          : 0) +
        m / 2
    let y = '',
      $ = ''
    return (
      g === 'bottom'
        ? ((y = l ? b : `${v}px`), ($ = `${-m}px`))
        : g === 'top'
          ? ((y = l ? b : `${v}px`), ($ = `${u.floating.height + m}px`))
          : g === 'right'
            ? ((y = `${-m}px`), ($ = l ? b : `${w}px`))
            : g === 'left' &&
              ((y = `${u.floating.width + m}px`), ($ = l ? b : `${w}px`)),
      { data: { x: y, y: $ } }
    )
  },
})
function to(e) {
  const [t, n = 'center'] = e.split('-')
  return [t, n]
}
const hi = ai,
  gi = ui,
  bi = fi,
  vi = i.forwardRef((e, t) => {
    var n
    const {
      container: o = globalThis == null ||
      (n = globalThis.document) === null ||
      n === void 0
        ? void 0
        : n.body,
      ...r
    } = e
    return o
      ? Ko.createPortal(i.createElement(X.div, P({}, r, { ref: t })), o)
      : null
  })
function wi(e, t) {
  return i.useReducer((n, o) => {
    const r = t[n][o]
    return r ?? n
  }, e)
}
const Ke = (e) => {
  const { present: t, children: n } = e,
    o = $i(t),
    r =
      typeof n == 'function' ? n({ present: o.isPresent }) : i.Children.only(n),
    c = Y(o.ref, r.ref)
  return typeof n == 'function' || o.isPresent
    ? i.cloneElement(r, { ref: c })
    : null
}
Ke.displayName = 'Presence'
function $i(e) {
  const [t, n] = i.useState(),
    o = i.useRef({}),
    r = i.useRef(e),
    c = i.useRef('none'),
    s = e ? 'mounted' : 'unmounted',
    [a, u] = wi(s, {
      mounted: { UNMOUNT: 'unmounted', ANIMATION_OUT: 'unmountSuspended' },
      unmountSuspended: { MOUNT: 'mounted', ANIMATION_END: 'unmounted' },
      unmounted: { MOUNT: 'mounted' },
    })
  return (
    i.useEffect(() => {
      const d = Je(o.current)
      c.current = a === 'mounted' ? d : 'none'
    }, [a]),
    Ae(() => {
      const d = o.current,
        f = r.current
      if (f !== e) {
        const h = c.current,
          m = Je(d)
        e
          ? u('MOUNT')
          : m === 'none' || d?.display === 'none'
            ? u('UNMOUNT')
            : u(f && h !== m ? 'ANIMATION_OUT' : 'UNMOUNT'),
          (r.current = e)
      }
    }, [e, u]),
    Ae(() => {
      if (t) {
        const d = (l) => {
            const m = Je(o.current).includes(l.animationName)
            l.target === t && m && Lt.flushSync(() => u('ANIMATION_END'))
          },
          f = (l) => {
            l.target === t && (c.current = Je(o.current))
          }
        return (
          t.addEventListener('animationstart', f),
          t.addEventListener('animationcancel', d),
          t.addEventListener('animationend', d),
          () => {
            t.removeEventListener('animationstart', f),
              t.removeEventListener('animationcancel', d),
              t.removeEventListener('animationend', d)
          }
        )
      } else u('ANIMATION_END')
    }, [t, u]),
    {
      isPresent: ['mounted', 'unmountSuspended'].includes(a),
      ref: i.useCallback((d) => {
        d && (o.current = getComputedStyle(d)), n(d)
      }, []),
    }
  )
}
function Je(e) {
  return e?.animationName || 'none'
}
const xt = 'rovingFocusGroup.onEntryFocus',
  yi = { bubbles: !1, cancelable: !0 },
  Kt = 'RovingFocusGroup',
  [kt, no, xi] = Ln(Kt),
  [Ei, oo] = Ue(Kt, [xi]),
  [Ci, Si] = Ei(Kt),
  Ri = i.forwardRef((e, t) =>
    i.createElement(
      kt.Provider,
      { scope: e.__scopeRovingFocusGroup },
      i.createElement(
        kt.Slot,
        { scope: e.__scopeRovingFocusGroup },
        i.createElement(Pi, P({}, e, { ref: t })),
      ),
    ),
  ),
  Pi = i.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: n,
        orientation: o,
        loop: r = !1,
        dir: c,
        currentTabStopId: s,
        defaultCurrentTabStopId: a,
        onCurrentTabStopIdChange: u,
        onEntryFocus: d,
        ...f
      } = e,
      l = i.useRef(null),
      h = Y(t, l),
      m = Fn(c),
      [g = null, p] = In({ prop: s, defaultProp: a, onChange: u }),
      [b, v] = i.useState(!1),
      w = ne(d),
      y = no(n),
      $ = i.useRef(!1),
      [x, M] = i.useState(0)
    return (
      i.useEffect(() => {
        const C = l.current
        if (C)
          return C.addEventListener(xt, w), () => C.removeEventListener(xt, w)
      }, [w]),
      i.createElement(
        Ci,
        {
          scope: n,
          orientation: o,
          dir: m,
          loop: r,
          currentTabStopId: g,
          onItemFocus: i.useCallback((C) => p(C), [p]),
          onItemShiftTab: i.useCallback(() => v(!0), []),
          onFocusableItemAdd: i.useCallback(() => M((C) => C + 1), []),
          onFocusableItemRemove: i.useCallback(() => M((C) => C - 1), []),
        },
        i.createElement(
          X.div,
          P({ tabIndex: b || x === 0 ? -1 : 0, 'data-orientation': o }, f, {
            ref: h,
            style: { outline: 'none', ...e.style },
            onMouseDown: O(e.onMouseDown, () => {
              $.current = !0
            }),
            onFocus: O(e.onFocus, (C) => {
              const R = !$.current
              if (C.target === C.currentTarget && R && !b) {
                const _ = new CustomEvent(xt, yi)
                if ((C.currentTarget.dispatchEvent(_), !_.defaultPrevented)) {
                  const I = y().filter((k) => k.focusable),
                    L = I.find((k) => k.active),
                    S = I.find((k) => k.id === g),
                    T = [L, S, ...I].filter(Boolean).map((k) => k.ref.current)
                  ro(T)
                }
              }
              $.current = !1
            }),
            onBlur: O(e.onBlur, () => v(!1)),
          }),
        ),
      )
    )
  }),
  Mi = 'RovingFocusGroupItem',
  Ai = i.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: n,
        focusable: o = !0,
        active: r = !1,
        tabStopId: c,
        ...s
      } = e,
      a = _t(),
      u = c || a,
      d = Si(Mi, n),
      f = d.currentTabStopId === u,
      l = no(n),
      { onFocusableItemAdd: h, onFocusableItemRemove: m } = d
    return (
      i.useEffect(() => {
        if (o) return h(), () => m()
      }, [o, h, m]),
      i.createElement(
        kt.ItemSlot,
        { scope: n, id: u, focusable: o, active: r },
        i.createElement(
          X.span,
          P({ tabIndex: f ? 0 : -1, 'data-orientation': d.orientation }, s, {
            ref: t,
            onMouseDown: O(e.onMouseDown, (g) => {
              o ? d.onItemFocus(u) : g.preventDefault()
            }),
            onFocus: O(e.onFocus, () => d.onItemFocus(u)),
            onKeyDown: O(e.onKeyDown, (g) => {
              if (g.key === 'Tab' && g.shiftKey) {
                d.onItemShiftTab()
                return
              }
              if (g.target !== g.currentTarget) return
              const p = Oi(g, d.orientation, d.dir)
              if (p !== void 0) {
                g.preventDefault()
                let v = l()
                  .filter((w) => w.focusable)
                  .map((w) => w.ref.current)
                if (p === 'last') v.reverse()
                else if (p === 'prev' || p === 'next') {
                  p === 'prev' && v.reverse()
                  const w = v.indexOf(g.currentTarget)
                  v = d.loop ? ki(v, w + 1) : v.slice(w + 1)
                }
                setTimeout(() => ro(v))
              }
            }),
          }),
        ),
      )
    )
  }),
  _i = {
    ArrowLeft: 'prev',
    ArrowUp: 'prev',
    ArrowRight: 'next',
    ArrowDown: 'next',
    PageUp: 'first',
    Home: 'first',
    PageDown: 'last',
    End: 'last',
  }
function Ti(e, t) {
  return t !== 'rtl'
    ? e
    : e === 'ArrowLeft'
      ? 'ArrowRight'
      : e === 'ArrowRight'
        ? 'ArrowLeft'
        : e
}
function Oi(e, t, n) {
  const o = Ti(e.key, n)
  if (
    !(t === 'vertical' && ['ArrowLeft', 'ArrowRight'].includes(o)) &&
    !(t === 'horizontal' && ['ArrowUp', 'ArrowDown'].includes(o))
  )
    return _i[o]
}
function ro(e) {
  const t = document.activeElement
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return
}
function ki(e, t) {
  return e.map((n, o) => e[(t + o) % e.length])
}
const Di = Ri,
  Ii = Ai
var Ni = function (e) {
    if (typeof document > 'u') return null
    var t = Array.isArray(e) ? e[0] : e
    return t.ownerDocument.body
  },
  Ee = new WeakMap(),
  et = new WeakMap(),
  tt = {},
  Et = 0,
  co = function (e) {
    return e && (e.host || co(e.parentNode))
  },
  Li = function (e, t) {
    return t
      .map(function (n) {
        if (e.contains(n)) return n
        var o = co(n)
        return o && e.contains(o)
          ? o
          : (console.error(
              'aria-hidden',
              n,
              'in not contained inside',
              e,
              '. Doing nothing',
            ),
            null)
      })
      .filter(function (n) {
        return !!n
      })
  },
  Fi = function (e, t, n, o) {
    var r = Li(t, Array.isArray(e) ? e : [e])
    tt[n] || (tt[n] = new WeakMap())
    var c = tt[n],
      s = [],
      a = new Set(),
      u = new Set(r),
      d = function (l) {
        !l || a.has(l) || (a.add(l), d(l.parentNode))
      }
    r.forEach(d)
    var f = function (l) {
      !l ||
        u.has(l) ||
        Array.prototype.forEach.call(l.children, function (h) {
          if (a.has(h)) f(h)
          else
            try {
              var m = h.getAttribute(o),
                g = m !== null && m !== 'false',
                p = (Ee.get(h) || 0) + 1,
                b = (c.get(h) || 0) + 1
              Ee.set(h, p),
                c.set(h, b),
                s.push(h),
                p === 1 && g && et.set(h, !0),
                b === 1 && h.setAttribute(n, 'true'),
                g || h.setAttribute(o, 'true')
            } catch (v) {
              console.error('aria-hidden: cannot operate on ', h, v)
            }
        })
    }
    return (
      f(t),
      a.clear(),
      Et++,
      function () {
        s.forEach(function (l) {
          var h = Ee.get(l) - 1,
            m = c.get(l) - 1
          Ee.set(l, h),
            c.set(l, m),
            h || (et.has(l) || l.removeAttribute(o), et.delete(l)),
            m || l.removeAttribute(n)
        }),
          Et--,
          Et ||
            ((Ee = new WeakMap()),
            (Ee = new WeakMap()),
            (et = new WeakMap()),
            (tt = {}))
      }
    )
  },
  zi = function (e, t, n) {
    n === void 0 && (n = 'data-aria-hidden')
    var o = Array.from(Array.isArray(e) ? e : [e]),
      r = Ni(e)
    return r
      ? (o.push.apply(o, Array.from(r.querySelectorAll('[aria-live]'))),
        Fi(o, r, n, 'aria-hidden'))
      : function () {
          return null
        }
  },
  it = 'right-scroll-bar-position',
  st = 'width-before-scroll-bar',
  Wi = 'with-scroll-bars-hidden',
  Bi = '--removed-body-scroll-bar-size'
function Ct(e, t) {
  return typeof e == 'function' ? e(t) : e && (e.current = t), e
}
function ji(e, t) {
  var n = i.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value
        },
        set current(o) {
          var r = n.value
          r !== o && ((n.value = o), n.callback(o, r))
        },
      },
    }
  })[0]
  return (n.callback = t), n.facade
}
var Gi = typeof window < 'u' ? i.useLayoutEffect : i.useEffect,
  $n = new WeakMap()
function Ui(e, t) {
  var n = ji(null, function (o) {
    return e.forEach(function (r) {
      return Ct(r, o)
    })
  })
  return (
    Gi(
      function () {
        var o = $n.get(n)
        if (o) {
          var r = new Set(o),
            c = new Set(e),
            s = n.current
          r.forEach(function (a) {
            c.has(a) || Ct(a, null)
          }),
            c.forEach(function (a) {
              r.has(a) || Ct(a, s)
            })
        }
        $n.set(n, e)
      },
      [e],
    ),
    n
  )
}
function Vi(e) {
  return e
}
function Ki(e, t) {
  t === void 0 && (t = Vi)
  var n = [],
    o = !1,
    r = {
      read: function () {
        if (o)
          throw new Error(
            'Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.',
          )
        return n.length ? n[n.length - 1] : e
      },
      useMedium: function (c) {
        var s = t(c, o)
        return (
          n.push(s),
          function () {
            n = n.filter(function (a) {
              return a !== s
            })
          }
        )
      },
      assignSyncMedium: function (c) {
        for (o = !0; n.length; ) {
          var s = n
          ;(n = []), s.forEach(c)
        }
        n = {
          push: function (a) {
            return c(a)
          },
          filter: function () {
            return n
          },
        }
      },
      assignMedium: function (c) {
        o = !0
        var s = []
        if (n.length) {
          var a = n
          ;(n = []), a.forEach(c), (s = n)
        }
        var u = function () {
            var f = s
            ;(s = []), f.forEach(c)
          },
          d = function () {
            return Promise.resolve().then(u)
          }
        d(),
          (n = {
            push: function (f) {
              s.push(f), d()
            },
            filter: function (f) {
              return (s = s.filter(f)), n
            },
          })
      },
    }
  return r
}
function Hi(e) {
  e === void 0 && (e = {})
  var t = Ki(null)
  return (t.options = he({ async: !0, ssr: !1 }, e)), t
}
var io = function (e) {
  var t = e.sideCar,
    n = Rn(e, ['sideCar'])
  if (!t)
    throw new Error(
      'Sidecar: please provide `sideCar` property to import the right car',
    )
  var o = t.read()
  if (!o) throw new Error('Sidecar medium not found')
  return i.createElement(o, he({}, n))
}
io.isSideCarExport = !0
function Yi(e, t) {
  return e.useMedium(t), io
}
var so = Hi(),
  St = function () {},
  gt = i.forwardRef(function (e, t) {
    var n = i.useRef(null),
      o = i.useState({
        onScrollCapture: St,
        onWheelCapture: St,
        onTouchMoveCapture: St,
      }),
      r = o[0],
      c = o[1],
      s = e.forwardProps,
      a = e.children,
      u = e.className,
      d = e.removeScrollBar,
      f = e.enabled,
      l = e.shards,
      h = e.sideCar,
      m = e.noIsolation,
      g = e.inert,
      p = e.allowPinchZoom,
      b = e.as,
      v = b === void 0 ? 'div' : b,
      w = Rn(e, [
        'forwardProps',
        'children',
        'className',
        'removeScrollBar',
        'enabled',
        'shards',
        'sideCar',
        'noIsolation',
        'inert',
        'allowPinchZoom',
        'as',
      ]),
      y = h,
      $ = Ui([n, t]),
      x = he(he({}, w), r)
    return i.createElement(
      i.Fragment,
      null,
      f &&
        i.createElement(y, {
          sideCar: so,
          removeScrollBar: d,
          shards: l,
          noIsolation: m,
          inert: g,
          setCallbacks: c,
          allowPinchZoom: !!p,
          lockRef: n,
        }),
      s
        ? i.cloneElement(i.Children.only(a), he(he({}, x), { ref: $ }))
        : i.createElement(v, he({}, x, { className: u, ref: $ }), a),
    )
  })
gt.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }
gt.classNames = { fullWidth: st, zeroRight: it }
var Xi = function () {
  if (typeof __webpack_nonce__ < 'u') return __webpack_nonce__
}
function Zi() {
  if (!document) return null
  var e = document.createElement('style')
  e.type = 'text/css'
  var t = Xi()
  return t && e.setAttribute('nonce', t), e
}
function qi(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t))
}
function Qi(e) {
  var t = document.head || document.getElementsByTagName('head')[0]
  t.appendChild(e)
}
var Ji = function () {
    var e = 0,
      t = null
    return {
      add: function (n) {
        e == 0 && (t = Zi()) && (qi(t, n), Qi(t)), e++
      },
      remove: function () {
        e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null))
      },
    }
  },
  es = function () {
    var e = Ji()
    return function (t, n) {
      i.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove()
            }
          )
        },
        [t && n],
      )
    }
  },
  ao = function () {
    var e = es(),
      t = function (n) {
        var o = n.styles,
          r = n.dynamic
        return e(o, r), null
      }
    return t
  },
  ts = { left: 0, top: 0, right: 0, gap: 0 },
  Rt = function (e) {
    return parseInt(e || '', 10) || 0
  },
  ns = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === 'padding' ? 'paddingLeft' : 'marginLeft'],
      o = t[e === 'padding' ? 'paddingTop' : 'marginTop'],
      r = t[e === 'padding' ? 'paddingRight' : 'marginRight']
    return [Rt(n), Rt(o), Rt(r)]
  },
  os = function (e) {
    if ((e === void 0 && (e = 'margin'), typeof window > 'u')) return ts
    var t = ns(e),
      n = document.documentElement.clientWidth,
      o = window.innerWidth
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, o - n + t[2] - t[0]),
    }
  },
  rs = ao(),
  Pe = 'data-scroll-locked',
  cs = function (e, t, n, o) {
    var r = e.left,
      c = e.top,
      s = e.right,
      a = e.gap
    return (
      n === void 0 && (n = 'margin'),
      `
  .`
        .concat(
          Wi,
          ` {
   overflow: hidden `,
        )
        .concat(
          o,
          `;
   padding-right: `,
        )
        .concat(a, 'px ')
        .concat(
          o,
          `;
  }
  body[`,
        )
        .concat(
          Pe,
          `] {
    overflow: hidden `,
        )
        .concat(
          o,
          `;
    overscroll-behavior: contain;
    `,
        )
        .concat(
          [
            t && 'position: relative '.concat(o, ';'),
            n === 'margin' &&
              `
    padding-left: `
                .concat(
                  r,
                  `px;
    padding-top: `,
                )
                .concat(
                  c,
                  `px;
    padding-right: `,
                )
                .concat(
                  s,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `,
                )
                .concat(a, 'px ')
                .concat(
                  o,
                  `;
    `,
                ),
            n === 'padding' &&
              'padding-right: '.concat(a, 'px ').concat(o, ';'),
          ]
            .filter(Boolean)
            .join(''),
          `
  }
  
  .`,
        )
        .concat(
          it,
          ` {
    right: `,
        )
        .concat(a, 'px ')
        .concat(
          o,
          `;
  }
  
  .`,
        )
        .concat(
          st,
          ` {
    margin-right: `,
        )
        .concat(a, 'px ')
        .concat(
          o,
          `;
  }
  
  .`,
        )
        .concat(it, ' .')
        .concat(
          it,
          ` {
    right: 0 `,
        )
        .concat(
          o,
          `;
  }
  
  .`,
        )
        .concat(st, ' .')
        .concat(
          st,
          ` {
    margin-right: 0 `,
        )
        .concat(
          o,
          `;
  }
  
  body[`,
        )
        .concat(
          Pe,
          `] {
    `,
        )
        .concat(Bi, ': ')
        .concat(
          a,
          `px;
  }
`,
        )
    )
  },
  yn = function () {
    var e = parseInt(document.body.getAttribute(Pe) || '0', 10)
    return isFinite(e) ? e : 0
  },
  is = function () {
    i.useEffect(function () {
      return (
        document.body.setAttribute(Pe, (yn() + 1).toString()),
        function () {
          var e = yn() - 1
          e <= 0
            ? document.body.removeAttribute(Pe)
            : document.body.setAttribute(Pe, e.toString())
        }
      )
    }, [])
  },
  ss = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      o = e.gapMode,
      r = o === void 0 ? 'margin' : o
    is()
    var c = i.useMemo(
      function () {
        return os(r)
      },
      [r],
    )
    return i.createElement(rs, { styles: cs(c, !t, r, n ? '' : '!important') })
  },
  Dt = !1
if (typeof window < 'u')
  try {
    var nt = Object.defineProperty({}, 'passive', {
      get: function () {
        return (Dt = !0), !0
      },
    })
    window.addEventListener('test', nt, nt),
      window.removeEventListener('test', nt, nt)
  } catch {
    Dt = !1
  }
var Ce = Dt ? { passive: !1 } : !1,
  as = function (e) {
    return e.tagName === 'TEXTAREA'
  },
  lo = function (e, t) {
    var n = window.getComputedStyle(e)
    return (
      n[t] !== 'hidden' &&
      !(n.overflowY === n.overflowX && !as(e) && n[t] === 'visible')
    )
  },
  ls = function (e) {
    return lo(e, 'overflowY')
  },
  us = function (e) {
    return lo(e, 'overflowX')
  },
  xn = function (e, t) {
    var n = t
    do {
      typeof ShadowRoot < 'u' && n instanceof ShadowRoot && (n = n.host)
      var o = uo(e, n)
      if (o) {
        var r = fo(e, n),
          c = r[1],
          s = r[2]
        if (c > s) return !0
      }
      n = n.parentNode
    } while (n && n !== document.body)
    return !1
  },
  ds = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      o = e.clientHeight
    return [t, n, o]
  },
  fs = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      o = e.clientWidth
    return [t, n, o]
  },
  uo = function (e, t) {
    return e === 'v' ? ls(t) : us(t)
  },
  fo = function (e, t) {
    return e === 'v' ? ds(t) : fs(t)
  },
  ps = function (e, t) {
    return e === 'h' && t === 'rtl' ? -1 : 1
  },
  ms = function (e, t, n, o, r) {
    var c = ps(e, window.getComputedStyle(t).direction),
      s = c * o,
      a = n.target,
      u = t.contains(a),
      d = !1,
      f = s > 0,
      l = 0,
      h = 0
    do {
      var m = fo(e, a),
        g = m[0],
        p = m[1],
        b = m[2],
        v = p - b - c * g
      ;(g || v) && uo(e, a) && ((l += v), (h += g)), (a = a.parentNode)
    } while ((!u && a !== document.body) || (u && (t.contains(a) || t === a)))
    return ((f && (l === 0 || !r)) || (!f && (h === 0 || !r))) && (d = !0), d
  },
  ot = function (e) {
    return 'changedTouches' in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0]
  },
  En = function (e) {
    return [e.deltaX, e.deltaY]
  },
  Cn = function (e) {
    return e && 'current' in e ? e.current : e
  },
  hs = function (e, t) {
    return e[0] === t[0] && e[1] === t[1]
  },
  gs = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`,
      )
      .concat(
        e,
        ` {pointer-events: all;}
`,
      )
  },
  bs = 0,
  Se = []
function vs(e) {
  var t = i.useRef([]),
    n = i.useRef([0, 0]),
    o = i.useRef(),
    r = i.useState(bs++)[0],
    c = i.useState(function () {
      return ao()
    })[0],
    s = i.useRef(e)
  i.useEffect(
    function () {
      s.current = e
    },
    [e],
  ),
    i.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add('block-interactivity-'.concat(r))
          var p = Ho([e.lockRef.current], (e.shards || []).map(Cn), !0).filter(
            Boolean,
          )
          return (
            p.forEach(function (b) {
              return b.classList.add('allow-interactivity-'.concat(r))
            }),
            function () {
              document.body.classList.remove('block-interactivity-'.concat(r)),
                p.forEach(function (b) {
                  return b.classList.remove('allow-interactivity-'.concat(r))
                })
            }
          )
        }
      },
      [e.inert, e.lockRef.current, e.shards],
    )
  var a = i.useCallback(function (p, b) {
      if ('touches' in p && p.touches.length === 2)
        return !s.current.allowPinchZoom
      var v = ot(p),
        w = n.current,
        y = 'deltaX' in p ? p.deltaX : w[0] - v[0],
        $ = 'deltaY' in p ? p.deltaY : w[1] - v[1],
        x,
        M = p.target,
        C = Math.abs(y) > Math.abs($) ? 'h' : 'v'
      if ('touches' in p && C === 'h' && M.type === 'range') return !1
      var R = xn(C, M)
      if (!R) return !0
      if ((R ? (x = C) : ((x = C === 'v' ? 'h' : 'v'), (R = xn(C, M))), !R))
        return !1
      if (
        (!o.current && 'changedTouches' in p && (y || $) && (o.current = x), !x)
      )
        return !0
      var _ = o.current || x
      return ms(_, b, p, _ === 'h' ? y : $, !0)
    }, []),
    u = i.useCallback(function (p) {
      var b = p
      if (!(!Se.length || Se[Se.length - 1] !== c)) {
        var v = 'deltaY' in b ? En(b) : ot(b),
          w = t.current.filter(function (x) {
            return x.name === b.type && x.target === b.target && hs(x.delta, v)
          })[0]
        if (w && w.should) {
          b.cancelable && b.preventDefault()
          return
        }
        if (!w) {
          var y = (s.current.shards || [])
              .map(Cn)
              .filter(Boolean)
              .filter(function (x) {
                return x.contains(b.target)
              }),
            $ = y.length > 0 ? a(b, y[0]) : !s.current.noIsolation
          $ && b.cancelable && b.preventDefault()
        }
      }
    }, []),
    d = i.useCallback(function (p, b, v, w) {
      var y = { name: p, delta: b, target: v, should: w }
      t.current.push(y),
        setTimeout(function () {
          t.current = t.current.filter(function ($) {
            return $ !== y
          })
        }, 1)
    }, []),
    f = i.useCallback(function (p) {
      ;(n.current = ot(p)), (o.current = void 0)
    }, []),
    l = i.useCallback(function (p) {
      d(p.type, En(p), p.target, a(p, e.lockRef.current))
    }, []),
    h = i.useCallback(function (p) {
      d(p.type, ot(p), p.target, a(p, e.lockRef.current))
    }, [])
  i.useEffect(function () {
    return (
      Se.push(c),
      e.setCallbacks({
        onScrollCapture: l,
        onWheelCapture: l,
        onTouchMoveCapture: h,
      }),
      document.addEventListener('wheel', u, Ce),
      document.addEventListener('touchmove', u, Ce),
      document.addEventListener('touchstart', f, Ce),
      function () {
        ;(Se = Se.filter(function (p) {
          return p !== c
        })),
          document.removeEventListener('wheel', u, Ce),
          document.removeEventListener('touchmove', u, Ce),
          document.removeEventListener('touchstart', f, Ce)
      }
    )
  }, [])
  var m = e.removeScrollBar,
    g = e.inert
  return i.createElement(
    i.Fragment,
    null,
    g ? i.createElement(c, { styles: gs(r) }) : null,
    m ? i.createElement(ss, { gapMode: 'margin' }) : null,
  )
}
const ws = Yi(so, vs)
var po = i.forwardRef(function (e, t) {
  return i.createElement(gt, he({}, e, { ref: t, sideCar: ws }))
})
po.classNames = gt.classNames
const It = ['Enter', ' '],
  $s = ['ArrowDown', 'PageUp', 'Home'],
  mo = ['ArrowUp', 'PageDown', 'End'],
  ys = [...$s, ...mo],
  xs = { ltr: [...It, 'ArrowRight'], rtl: [...It, 'ArrowLeft'] },
  Es = { ltr: ['ArrowLeft'], rtl: ['ArrowRight'] },
  bt = 'Menu',
  [Be, Cs, Ss] = Ln(bt),
  [ye, ho] = Ue(bt, [Ss, Qn, oo]),
  Ht = Qn(),
  go = oo(),
  [Rs, xe] = ye(bt),
  [Ps, He] = ye(bt),
  Ms = (e) => {
    const {
        __scopeMenu: t,
        open: n = !1,
        children: o,
        dir: r,
        onOpenChange: c,
        modal: s = !0,
      } = e,
      a = Ht(t),
      [u, d] = i.useState(null),
      f = i.useRef(!1),
      l = ne(c),
      h = Fn(r)
    return (
      i.useEffect(() => {
        const m = () => {
            ;(f.current = !0),
              document.addEventListener('pointerdown', g, {
                capture: !0,
                once: !0,
              }),
              document.addEventListener('pointermove', g, {
                capture: !0,
                once: !0,
              })
          },
          g = () => (f.current = !1)
        return (
          document.addEventListener('keydown', m, { capture: !0 }),
          () => {
            document.removeEventListener('keydown', m, { capture: !0 }),
              document.removeEventListener('pointerdown', g, { capture: !0 }),
              document.removeEventListener('pointermove', g, { capture: !0 })
          }
        )
      }, []),
      i.createElement(
        hi,
        a,
        i.createElement(
          Rs,
          {
            scope: t,
            open: n,
            onOpenChange: l,
            content: u,
            onContentChange: d,
          },
          i.createElement(
            Ps,
            {
              scope: t,
              onClose: i.useCallback(() => l(!1), [l]),
              isUsingKeyboardRef: f,
              dir: h,
              modal: s,
            },
            o,
          ),
        ),
      )
    )
  },
  bo = i.forwardRef((e, t) => {
    const { __scopeMenu: n, ...o } = e,
      r = Ht(n)
    return i.createElement(gi, P({}, r, o, { ref: t }))
  }),
  vo = 'MenuPortal',
  [As, wo] = ye(vo, { forceMount: void 0 }),
  _s = (e) => {
    const { __scopeMenu: t, forceMount: n, children: o, container: r } = e,
      c = xe(vo, t)
    return i.createElement(
      As,
      { scope: t, forceMount: n },
      i.createElement(
        Ke,
        { present: n || c.open },
        i.createElement(vi, { asChild: !0, container: r }, o),
      ),
    )
  },
  Q = 'MenuContent',
  [Ts, Yt] = ye(Q),
  Os = i.forwardRef((e, t) => {
    const n = wo(Q, e.__scopeMenu),
      { forceMount: o = n.forceMount, ...r } = e,
      c = xe(Q, e.__scopeMenu),
      s = He(Q, e.__scopeMenu)
    return i.createElement(
      Be.Provider,
      { scope: e.__scopeMenu },
      i.createElement(
        Ke,
        { present: o || c.open },
        i.createElement(
          Be.Slot,
          { scope: e.__scopeMenu },
          s.modal
            ? i.createElement(ks, P({}, r, { ref: t }))
            : i.createElement(Ds, P({}, r, { ref: t })),
        ),
      ),
    )
  }),
  ks = i.forwardRef((e, t) => {
    const n = xe(Q, e.__scopeMenu),
      o = i.useRef(null),
      r = Y(t, o)
    return (
      i.useEffect(() => {
        const c = o.current
        if (c) return zi(c)
      }, []),
      i.createElement(
        Xt,
        P({}, e, {
          ref: r,
          trapFocus: n.open,
          disableOutsidePointerEvents: n.open,
          disableOutsideScroll: !0,
          onFocusOutside: O(e.onFocusOutside, (c) => c.preventDefault(), {
            checkForDefaultPrevented: !1,
          }),
          onDismiss: () => n.onOpenChange(!1),
        }),
      )
    )
  }),
  Ds = i.forwardRef((e, t) => {
    const n = xe(Q, e.__scopeMenu)
    return i.createElement(
      Xt,
      P({}, e, {
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        onDismiss: () => n.onOpenChange(!1),
      }),
    )
  }),
  Xt = i.forwardRef((e, t) => {
    const {
        __scopeMenu: n,
        loop: o = !1,
        trapFocus: r,
        onOpenAutoFocus: c,
        onCloseAutoFocus: s,
        disableOutsidePointerEvents: a,
        onEntryFocus: u,
        onEscapeKeyDown: d,
        onPointerDownOutside: f,
        onFocusOutside: l,
        onInteractOutside: h,
        onDismiss: m,
        disableOutsideScroll: g,
        ...p
      } = e,
      b = xe(Q, n),
      v = He(Q, n),
      w = Ht(n),
      y = go(n),
      $ = Cs(n),
      [x, M] = i.useState(null),
      C = i.useRef(null),
      R = Y(t, C, b.onContentChange),
      _ = i.useRef(0),
      I = i.useRef(''),
      L = i.useRef(0),
      S = i.useRef(null),
      G = i.useRef('right'),
      T = i.useRef(0),
      k = g ? po : i.Fragment,
      z = g ? { as: Me, allowPinchZoom: !0 } : void 0,
      D = (E) => {
        var W, B
        const U = I.current + E,
          ue = $().filter((V) => !V.disabled),
          Ie = document.activeElement,
          ve =
            (W = ue.find((V) => V.ref.current === Ie)) === null || W === void 0
              ? void 0
              : W.textValue,
          q = ue.map((V) => V.textValue),
          de = Zs(q, U, ve),
          Ye =
            (B = ue.find((V) => V.textValue === de)) === null || B === void 0
              ? void 0
              : B.ref.current
        ;(function V(Xe) {
          ;(I.current = Xe),
            window.clearTimeout(_.current),
            Xe !== '' && (_.current = window.setTimeout(() => V(''), 1e3))
        })(U),
          Ye && setTimeout(() => Ye.focus())
      }
    i.useEffect(() => () => window.clearTimeout(_.current), []), Qr()
    const j = i.useCallback((E) => {
      var W, B
      return (
        G.current ===
          ((W = S.current) === null || W === void 0 ? void 0 : W.side) &&
        Qs(E, (B = S.current) === null || B === void 0 ? void 0 : B.area)
      )
    }, [])
    return i.createElement(
      Ts,
      {
        scope: n,
        searchRef: I,
        onItemEnter: i.useCallback(
          (E) => {
            j(E) && E.preventDefault()
          },
          [j],
        ),
        onItemLeave: i.useCallback(
          (E) => {
            var W
            j(E) ||
              ((W = C.current) === null || W === void 0 || W.focus(), M(null))
          },
          [j],
        ),
        onTriggerLeave: i.useCallback(
          (E) => {
            j(E) && E.preventDefault()
          },
          [j],
        ),
        pointerGraceTimerRef: L,
        onPointerGraceIntentChange: i.useCallback((E) => {
          S.current = E
        }, []),
      },
      i.createElement(
        k,
        z,
        i.createElement(
          Jr,
          {
            asChild: !0,
            trapped: r,
            onMountAutoFocus: O(c, (E) => {
              var W
              E.preventDefault(),
                (W = C.current) === null || W === void 0 || W.focus()
            }),
            onUnmountAutoFocus: s,
          },
          i.createElement(
            Xr,
            {
              asChild: !0,
              disableOutsidePointerEvents: a,
              onEscapeKeyDown: d,
              onPointerDownOutside: f,
              onFocusOutside: l,
              onInteractOutside: h,
              onDismiss: m,
            },
            i.createElement(
              Di,
              P({ asChild: !0 }, y, {
                dir: v.dir,
                orientation: 'vertical',
                loop: o,
                currentTabStopId: x,
                onCurrentTabStopIdChange: M,
                onEntryFocus: O(u, (E) => {
                  v.isUsingKeyboardRef.current || E.preventDefault()
                }),
              }),
              i.createElement(
                bi,
                P(
                  {
                    role: 'menu',
                    'aria-orientation': 'vertical',
                    'data-state': Co(b.open),
                    'data-radix-menu-content': '',
                    dir: v.dir,
                  },
                  w,
                  p,
                  {
                    ref: R,
                    style: { outline: 'none', ...p.style },
                    onKeyDown: O(p.onKeyDown, (E) => {
                      const B =
                          E.target.closest('[data-radix-menu-content]') ===
                          E.currentTarget,
                        U = E.ctrlKey || E.altKey || E.metaKey,
                        ue = E.key.length === 1
                      B &&
                        (E.key === 'Tab' && E.preventDefault(),
                        !U && ue && D(E.key))
                      const Ie = C.current
                      if (E.target !== Ie || !ys.includes(E.key)) return
                      E.preventDefault()
                      const q = $()
                        .filter((de) => !de.disabled)
                        .map((de) => de.ref.current)
                      mo.includes(E.key) && q.reverse(), Ys(q)
                    }),
                    onBlur: O(e.onBlur, (E) => {
                      E.currentTarget.contains(E.target) ||
                        (window.clearTimeout(_.current), (I.current = ''))
                    }),
                    onPointerMove: O(
                      e.onPointerMove,
                      je((E) => {
                        const W = E.target,
                          B = T.current !== E.clientX
                        if (E.currentTarget.contains(W) && B) {
                          const U = E.clientX > T.current ? 'right' : 'left'
                          ;(G.current = U), (T.current = E.clientX)
                        }
                      }),
                    ),
                  },
                ),
              ),
            ),
          ),
        ),
      ),
    )
  }),
  Is = i.forwardRef((e, t) => {
    const { __scopeMenu: n, ...o } = e
    return i.createElement(X.div, P({}, o, { ref: t }))
  }),
  Nt = 'MenuItem',
  Sn = 'menu.itemSelect',
  Zt = i.forwardRef((e, t) => {
    const { disabled: n = !1, onSelect: o, ...r } = e,
      c = i.useRef(null),
      s = He(Nt, e.__scopeMenu),
      a = Yt(Nt, e.__scopeMenu),
      u = Y(t, c),
      d = i.useRef(!1),
      f = () => {
        const l = c.current
        if (!n && l) {
          const h = new CustomEvent(Sn, { bubbles: !0, cancelable: !0 })
          l.addEventListener(Sn, (m) => o?.(m), { once: !0 }),
            Nn(l, h),
            h.defaultPrevented ? (d.current = !1) : s.onClose()
        }
      }
    return i.createElement(
      $o,
      P({}, r, {
        ref: u,
        disabled: n,
        onClick: O(e.onClick, f),
        onPointerDown: (l) => {
          var h
          ;(h = e.onPointerDown) === null || h === void 0 || h.call(e, l),
            (d.current = !0)
        },
        onPointerUp: O(e.onPointerUp, (l) => {
          var h
          d.current ||
            (h = l.currentTarget) === null ||
            h === void 0 ||
            h.click()
        }),
        onKeyDown: O(e.onKeyDown, (l) => {
          const h = a.searchRef.current !== ''
          n ||
            (h && l.key === ' ') ||
            (It.includes(l.key) &&
              (l.currentTarget.click(), l.preventDefault()))
        }),
      }),
    )
  }),
  $o = i.forwardRef((e, t) => {
    const { __scopeMenu: n, disabled: o = !1, textValue: r, ...c } = e,
      s = Yt(Nt, n),
      a = go(n),
      u = i.useRef(null),
      d = Y(t, u),
      [f, l] = i.useState(!1),
      [h, m] = i.useState('')
    return (
      i.useEffect(() => {
        const g = u.current
        if (g) {
          var p
          m(((p = g.textContent) !== null && p !== void 0 ? p : '').trim())
        }
      }, [c.children]),
      i.createElement(
        Be.ItemSlot,
        { scope: n, disabled: o, textValue: r ?? h },
        i.createElement(
          Ii,
          P({ asChild: !0 }, a, { focusable: !o }),
          i.createElement(
            X.div,
            P(
              {
                role: 'menuitem',
                'data-highlighted': f ? '' : void 0,
                'aria-disabled': o || void 0,
                'data-disabled': o ? '' : void 0,
              },
              c,
              {
                ref: d,
                onPointerMove: O(
                  e.onPointerMove,
                  je((g) => {
                    o
                      ? s.onItemLeave(g)
                      : (s.onItemEnter(g),
                        g.defaultPrevented || g.currentTarget.focus())
                  }),
                ),
                onPointerLeave: O(
                  e.onPointerLeave,
                  je((g) => s.onItemLeave(g)),
                ),
                onFocus: O(e.onFocus, () => l(!0)),
                onBlur: O(e.onBlur, () => l(!1)),
              },
            ),
          ),
        ),
      )
    )
  }),
  Ns = i.forwardRef((e, t) => {
    const { checked: n = !1, onCheckedChange: o, ...r } = e
    return i.createElement(
      xo,
      { scope: e.__scopeMenu, checked: n },
      i.createElement(
        Zt,
        P(
          { role: 'menuitemcheckbox', 'aria-checked': pt(n) ? 'mixed' : n },
          r,
          {
            ref: t,
            'data-state': qt(n),
            onSelect: O(r.onSelect, () => o?.(pt(n) ? !0 : !n), {
              checkForDefaultPrevented: !1,
            }),
          },
        ),
      ),
    )
  }),
  Ls = 'MenuRadioGroup',
  [Ga, Fs] = ye(Ls, { value: void 0, onValueChange: () => {} }),
  zs = 'MenuRadioItem',
  Ws = i.forwardRef((e, t) => {
    const { value: n, ...o } = e,
      r = Fs(zs, e.__scopeMenu),
      c = n === r.value
    return i.createElement(
      xo,
      { scope: e.__scopeMenu, checked: c },
      i.createElement(
        Zt,
        P({ role: 'menuitemradio', 'aria-checked': c }, o, {
          ref: t,
          'data-state': qt(c),
          onSelect: O(
            o.onSelect,
            () => {
              var s
              return (s = r.onValueChange) === null || s === void 0
                ? void 0
                : s.call(r, n)
            },
            { checkForDefaultPrevented: !1 },
          ),
        }),
      ),
    )
  }),
  yo = 'MenuItemIndicator',
  [xo, Bs] = ye(yo, { checked: !1 }),
  js = i.forwardRef((e, t) => {
    const { __scopeMenu: n, forceMount: o, ...r } = e,
      c = Bs(yo, n)
    return i.createElement(
      Ke,
      { present: o || pt(c.checked) || c.checked === !0 },
      i.createElement(
        X.span,
        P({}, r, { ref: t, 'data-state': qt(c.checked) }),
      ),
    )
  }),
  Gs = i.forwardRef((e, t) => {
    const { __scopeMenu: n, ...o } = e
    return i.createElement(
      X.div,
      P({ role: 'separator', 'aria-orientation': 'horizontal' }, o, { ref: t }),
    )
  }),
  Us = 'MenuSub',
  [Ua, Eo] = ye(Us),
  rt = 'MenuSubTrigger',
  Vs = i.forwardRef((e, t) => {
    const n = xe(rt, e.__scopeMenu),
      o = He(rt, e.__scopeMenu),
      r = Eo(rt, e.__scopeMenu),
      c = Yt(rt, e.__scopeMenu),
      s = i.useRef(null),
      { pointerGraceTimerRef: a, onPointerGraceIntentChange: u } = c,
      d = { __scopeMenu: e.__scopeMenu },
      f = i.useCallback(() => {
        s.current && window.clearTimeout(s.current), (s.current = null)
      }, [])
    return (
      i.useEffect(() => f, [f]),
      i.useEffect(() => {
        const l = a.current
        return () => {
          window.clearTimeout(l), u(null)
        }
      }, [a, u]),
      i.createElement(
        bo,
        P({ asChild: !0 }, d),
        i.createElement(
          $o,
          P(
            {
              id: r.triggerId,
              'aria-haspopup': 'menu',
              'aria-expanded': n.open,
              'aria-controls': r.contentId,
              'data-state': Co(n.open),
            },
            e,
            {
              ref: mt(t, r.onTriggerChange),
              onClick: (l) => {
                var h
                ;(h = e.onClick) === null || h === void 0 || h.call(e, l),
                  !(e.disabled || l.defaultPrevented) &&
                    (l.currentTarget.focus(), n.open || n.onOpenChange(!0))
              },
              onPointerMove: O(
                e.onPointerMove,
                je((l) => {
                  c.onItemEnter(l),
                    !l.defaultPrevented &&
                      !e.disabled &&
                      !n.open &&
                      !s.current &&
                      (c.onPointerGraceIntentChange(null),
                      (s.current = window.setTimeout(() => {
                        n.onOpenChange(!0), f()
                      }, 100)))
                }),
              ),
              onPointerLeave: O(
                e.onPointerLeave,
                je((l) => {
                  var h
                  f()
                  const m =
                    (h = n.content) === null || h === void 0
                      ? void 0
                      : h.getBoundingClientRect()
                  if (m) {
                    var g
                    const p =
                        (g = n.content) === null || g === void 0
                          ? void 0
                          : g.dataset.side,
                      b = p === 'right',
                      v = b ? -5 : 5,
                      w = m[b ? 'left' : 'right'],
                      y = m[b ? 'right' : 'left']
                    c.onPointerGraceIntentChange({
                      area: [
                        { x: l.clientX + v, y: l.clientY },
                        { x: w, y: m.top },
                        { x: y, y: m.top },
                        { x: y, y: m.bottom },
                        { x: w, y: m.bottom },
                      ],
                      side: p,
                    }),
                      window.clearTimeout(a.current),
                      (a.current = window.setTimeout(
                        () => c.onPointerGraceIntentChange(null),
                        300,
                      ))
                  } else {
                    if ((c.onTriggerLeave(l), l.defaultPrevented)) return
                    c.onPointerGraceIntentChange(null)
                  }
                }),
              ),
              onKeyDown: O(e.onKeyDown, (l) => {
                const h = c.searchRef.current !== ''
                if (
                  !(e.disabled || (h && l.key === ' ')) &&
                  xs[o.dir].includes(l.key)
                ) {
                  var m
                  n.onOpenChange(!0),
                    (m = n.content) === null || m === void 0 || m.focus(),
                    l.preventDefault()
                }
              }),
            },
          ),
        ),
      )
    )
  }),
  Ks = 'MenuSubContent',
  Hs = i.forwardRef((e, t) => {
    const n = wo(Q, e.__scopeMenu),
      { forceMount: o = n.forceMount, ...r } = e,
      c = xe(Q, e.__scopeMenu),
      s = He(Q, e.__scopeMenu),
      a = Eo(Ks, e.__scopeMenu),
      u = i.useRef(null),
      d = Y(t, u)
    return i.createElement(
      Be.Provider,
      { scope: e.__scopeMenu },
      i.createElement(
        Ke,
        { present: o || c.open },
        i.createElement(
          Be.Slot,
          { scope: e.__scopeMenu },
          i.createElement(
            Xt,
            P({ id: a.contentId, 'aria-labelledby': a.triggerId }, r, {
              ref: d,
              align: 'start',
              side: s.dir === 'rtl' ? 'left' : 'right',
              disableOutsidePointerEvents: !1,
              disableOutsideScroll: !1,
              trapFocus: !1,
              onOpenAutoFocus: (f) => {
                var l
                s.isUsingKeyboardRef.current &&
                  ((l = u.current) === null || l === void 0 || l.focus()),
                  f.preventDefault()
              },
              onCloseAutoFocus: (f) => f.preventDefault(),
              onFocusOutside: O(e.onFocusOutside, (f) => {
                f.target !== a.trigger && c.onOpenChange(!1)
              }),
              onEscapeKeyDown: O(e.onEscapeKeyDown, (f) => {
                s.onClose(), f.preventDefault()
              }),
              onKeyDown: O(e.onKeyDown, (f) => {
                const l = f.currentTarget.contains(f.target),
                  h = Es[s.dir].includes(f.key)
                if (l && h) {
                  var m
                  c.onOpenChange(!1),
                    (m = a.trigger) === null || m === void 0 || m.focus(),
                    f.preventDefault()
                }
              }),
            }),
          ),
        ),
      ),
    )
  })
function Co(e) {
  return e ? 'open' : 'closed'
}
function pt(e) {
  return e === 'indeterminate'
}
function qt(e) {
  return pt(e) ? 'indeterminate' : e ? 'checked' : 'unchecked'
}
function Ys(e) {
  const t = document.activeElement
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return
}
function Xs(e, t) {
  return e.map((n, o) => e[(t + o) % e.length])
}
function Zs(e, t, n) {
  const r = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t,
    c = n ? e.indexOf(n) : -1
  let s = Xs(e, Math.max(c, 0))
  r.length === 1 && (s = s.filter((d) => d !== n))
  const u = s.find((d) => d.toLowerCase().startsWith(r.toLowerCase()))
  return u !== n ? u : void 0
}
function qs(e, t) {
  const { x: n, y: o } = e
  let r = !1
  for (let c = 0, s = t.length - 1; c < t.length; s = c++) {
    const a = t[c].x,
      u = t[c].y,
      d = t[s].x,
      f = t[s].y
    u > o != f > o && n < ((d - a) * (o - u)) / (f - u) + a && (r = !r)
  }
  return r
}
function Qs(e, t) {
  if (!t) return !1
  const n = { x: e.clientX, y: e.clientY }
  return qs(n, t)
}
function je(e) {
  return (t) => (t.pointerType === 'mouse' ? e(t) : void 0)
}
const Js = Ms,
  ea = bo,
  ta = _s,
  na = Os,
  oa = Is,
  ra = Zt,
  ca = Ns,
  ia = Ws,
  sa = js,
  aa = Gs,
  la = Vs,
  ua = Hs,
  So = 'DropdownMenu',
  [da, Va] = Ue(So, [ho]),
  Z = ho(),
  [fa, Ro] = da(So),
  pa = (e) => {
    const {
        __scopeDropdownMenu: t,
        children: n,
        dir: o,
        open: r,
        defaultOpen: c,
        onOpenChange: s,
        modal: a = !0,
      } = e,
      u = Z(t),
      d = i.useRef(null),
      [f = !1, l] = In({ prop: r, defaultProp: c, onChange: s })
    return i.createElement(
      fa,
      {
        scope: t,
        triggerId: _t(),
        triggerRef: d,
        contentId: _t(),
        open: f,
        onOpenChange: l,
        onOpenToggle: i.useCallback(() => l((h) => !h), [l]),
        modal: a,
      },
      i.createElement(
        Js,
        P({}, u, { open: f, onOpenChange: l, dir: o, modal: a }),
        n,
      ),
    )
  },
  ma = 'DropdownMenuTrigger',
  ha = i.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, disabled: o = !1, ...r } = e,
      c = Ro(ma, n),
      s = Z(n)
    return i.createElement(
      ea,
      P({ asChild: !0 }, s),
      i.createElement(
        X.button,
        P(
          {
            type: 'button',
            id: c.triggerId,
            'aria-haspopup': 'menu',
            'aria-expanded': c.open,
            'aria-controls': c.open ? c.contentId : void 0,
            'data-state': c.open ? 'open' : 'closed',
            'data-disabled': o ? '' : void 0,
            disabled: o,
          },
          r,
          {
            ref: mt(t, c.triggerRef),
            onPointerDown: O(e.onPointerDown, (a) => {
              !o &&
                a.button === 0 &&
                a.ctrlKey === !1 &&
                (c.onOpenToggle(), c.open || a.preventDefault())
            }),
            onKeyDown: O(e.onKeyDown, (a) => {
              o ||
                (['Enter', ' '].includes(a.key) && c.onOpenToggle(),
                a.key === 'ArrowDown' && c.onOpenChange(!0),
                ['Enter', ' ', 'ArrowDown'].includes(a.key) &&
                  a.preventDefault())
            }),
          },
        ),
      ),
    )
  }),
  ga = (e) => {
    const { __scopeDropdownMenu: t, ...n } = e,
      o = Z(t)
    return i.createElement(ta, P({}, o, n))
  },
  ba = 'DropdownMenuContent',
  va = i.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e,
      r = Ro(ba, n),
      c = Z(n),
      s = i.useRef(!1)
    return i.createElement(
      na,
      P({ id: r.contentId, 'aria-labelledby': r.triggerId }, c, o, {
        ref: t,
        onCloseAutoFocus: O(e.onCloseAutoFocus, (a) => {
          var u
          s.current ||
            (u = r.triggerRef.current) === null ||
            u === void 0 ||
            u.focus(),
            (s.current = !1),
            a.preventDefault()
        }),
        onInteractOutside: O(e.onInteractOutside, (a) => {
          const u = a.detail.originalEvent,
            d = u.button === 0 && u.ctrlKey === !0,
            f = u.button === 2 || d
          ;(!r.modal || f) && (s.current = !0)
        }),
        style: {
          ...e.style,
          '--radix-dropdown-menu-content-transform-origin':
            'var(--radix-popper-transform-origin)',
          '--radix-dropdown-menu-content-available-width':
            'var(--radix-popper-available-width)',
          '--radix-dropdown-menu-content-available-height':
            'var(--radix-popper-available-height)',
          '--radix-dropdown-menu-trigger-width':
            'var(--radix-popper-anchor-width)',
          '--radix-dropdown-menu-trigger-height':
            'var(--radix-popper-anchor-height)',
        },
      }),
    )
  }),
  wa = i.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e,
      r = Z(n)
    return i.createElement(oa, P({}, r, o, { ref: t }))
  }),
  $a = i.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e,
      r = Z(n)
    return i.createElement(ra, P({}, r, o, { ref: t }))
  }),
  ya = i.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e,
      r = Z(n)
    return i.createElement(ca, P({}, r, o, { ref: t }))
  }),
  xa = i.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e,
      r = Z(n)
    return i.createElement(ia, P({}, r, o, { ref: t }))
  }),
  Ea = i.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e,
      r = Z(n)
    return i.createElement(sa, P({}, r, o, { ref: t }))
  }),
  Ca = i.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e,
      r = Z(n)
    return i.createElement(aa, P({}, r, o, { ref: t }))
  }),
  Sa = i.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e,
      r = Z(n)
    return i.createElement(la, P({}, r, o, { ref: t }))
  }),
  Ra = i.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e,
      r = Z(n)
    return i.createElement(
      ua,
      P({}, r, o, {
        ref: t,
        style: {
          ...e.style,
          '--radix-dropdown-menu-content-transform-origin':
            'var(--radix-popper-transform-origin)',
          '--radix-dropdown-menu-content-available-width':
            'var(--radix-popper-available-width)',
          '--radix-dropdown-menu-content-available-height':
            'var(--radix-popper-available-height)',
          '--radix-dropdown-menu-trigger-width':
            'var(--radix-popper-anchor-width)',
          '--radix-dropdown-menu-trigger-height':
            'var(--radix-popper-anchor-height)',
        },
      }),
    )
  }),
  Pa = pa,
  Ma = ha,
  Aa = ga,
  Po = va,
  Mo = wa,
  Ao = $a,
  _o = ya,
  To = xa,
  Oo = Ea,
  ko = Ca,
  Do = Sa,
  Io = Ra,
  _a = Pa,
  Ta = Ma,
  Oa = i.forwardRef(({ className: e, inset: t, children: n, ...o }, r) =>
    N.jsxs(Do, {
      ref: r,
      className: ae(
        'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent',
        t && 'pl-8',
        e,
      ),
      ...o,
      children: [n, N.jsx(qo, { className: 'ml-auto h-4 w-4' })],
    }),
  )
Oa.displayName = Do.displayName
const ka = i.forwardRef(({ className: e, ...t }, n) =>
  N.jsx(Io, {
    ref: n,
    className: ae(
      'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
      e,
    ),
    ...t,
  }),
)
ka.displayName = Io.displayName
const No = i.forwardRef(({ className: e, sideOffset: t = 4, ...n }, o) =>
  N.jsx(Aa, {
    children: N.jsx(Po, {
      ref: o,
      sideOffset: t,
      className: ae(
        'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        e,
      ),
      ...n,
    }),
  }),
)
No.displayName = Po.displayName
const at = i.forwardRef(({ className: e, inset: t, ...n }, o) =>
  N.jsx(Ao, {
    ref: o,
    className: ae(
      'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      t && 'pl-8',
      e,
    ),
    ...n,
  }),
)
at.displayName = Ao.displayName
const Da = i.forwardRef(({ className: e, children: t, checked: n, ...o }, r) =>
  N.jsxs(_o, {
    ref: r,
    className: ae(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      e,
    ),
    checked: n,
    ...o,
    children: [
      N.jsx('span', {
        className:
          'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
        children: N.jsx(Oo, { children: N.jsx(Zo, { className: 'h-4 w-4' }) }),
      }),
      t,
    ],
  }),
)
Da.displayName = _o.displayName
const Ia = i.forwardRef(({ className: e, children: t, ...n }, o) =>
  N.jsxs(To, {
    ref: o,
    className: ae(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      e,
    ),
    ...n,
    children: [
      N.jsx('span', {
        className:
          'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
        children: N.jsx(Oo, {
          children: N.jsx(Qo, { className: 'h-2 w-2 fill-current' }),
        }),
      }),
      t,
    ],
  }),
)
Ia.displayName = To.displayName
const Na = i.forwardRef(({ className: e, inset: t, ...n }, o) =>
  N.jsx(Mo, {
    ref: o,
    className: ae('px-2 py-1.5 text-sm font-semibold', t && 'pl-8', e),
    ...n,
  }),
)
Na.displayName = Mo.displayName
const La = i.forwardRef(({ className: e, ...t }, n) =>
  N.jsx(ko, { ref: n, className: ae('-mx-1 my-1 h-px bg-muted', e), ...t }),
)
La.displayName = ko.displayName
function Ka() {
  const [e, t] = i.useState('light')
  i.useEffect(() => {
    const o = document.documentElement.classList.contains('dark')
    t(o ? 'dark' : 'light')
  }, []),
    i.useEffect(() => {
      const o =
        e === 'dark' ||
        (e === 'system' &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
      document.documentElement.classList[o ? 'add' : 'remove']('dark')
    }, [e])
  const n = (o) => {
    t(o), localStorage.setItem('theme', o)
  }
  return N.jsxs(_a, {
    children: [
      N.jsx(Ta, {
        asChild: !0,
        children: N.jsxs(Dn, {
          variant: 'outline',
          size: 'icon',
          children: [
            N.jsx(er, {
              className:
                'h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0',
            }),
            N.jsx(Jo, {
              className:
                'absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100',
            }),
            N.jsx('span', { className: 'sr-only', children: 'Toggle theme' }),
          ],
        }),
      }),
      N.jsxs(No, {
        align: 'end',
        children: [
          N.jsx(at, { onClick: () => n('light'), children: 'Light' }),
          N.jsx(at, { onClick: () => n('dark'), children: 'Dark' }),
          N.jsx(at, { onClick: () => n('system'), children: 'System' }),
        ],
      }),
    ],
  })
}
export { Ka as ModeToggle }
