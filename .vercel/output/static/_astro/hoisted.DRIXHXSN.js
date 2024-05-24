const g = 'data-astro-transition-persist'
function ee(e) {
  for (const t of document.scripts)
    for (const n of e.scripts)
      if (
        !n.hasAttribute('data-astro-rerun') &&
        ((!t.src && t.textContent === n.textContent) ||
          (t.src && t.type === n.type && t.src === n.src))
      ) {
        n.dataset.astroExec = ''
        break
      }
}
function te(e) {
  const t = document.documentElement,
    n = [...t.attributes].filter(
      ({ name: r }) => (t.removeAttribute(r), r.startsWith('data-astro-')),
    )
  ;[...e.documentElement.attributes, ...n].forEach(({ name: r, value: o }) =>
    t.setAttribute(r, o),
  )
}
function ne(e) {
  for (const t of Array.from(document.head.children)) {
    const n = ie(t, e)
    n ? n.remove() : t.remove()
  }
  document.head.append(...e.head.children)
}
function re(e, t) {
  t.replaceWith(e)
  for (const n of t.querySelectorAll(`[${g}]`)) {
    const r = n.getAttribute(g),
      o = e.querySelector(`[${g}="${r}"]`)
    o &&
      (o.replaceWith(n),
      o.localName === 'astro-island' &&
        se(n) &&
        (n.setAttribute('ssr', ''),
        n.setAttribute('props', o.getAttribute('props'))))
  }
}
const oe = () => {
    const e = document.activeElement
    if (e?.closest(`[${g}]`)) {
      if (e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement) {
        const t = e.selectionStart,
          n = e.selectionEnd
        return () => L({ activeElement: e, start: t, end: n })
      }
      return () => L({ activeElement: e })
    } else return () => L({ activeElement: null })
  },
  L = ({ activeElement: e, start: t, end: n }) => {
    e &&
      (e.focus(),
      (e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement) &&
        (typeof t == 'number' && (e.selectionStart = t),
        typeof n == 'number' && (e.selectionEnd = n)))
  },
  ie = (e, t) => {
    const n = e.getAttribute(g),
      r = n && t.head.querySelector(`[${g}="${n}"]`)
    if (r) return r
    if (e.matches('link[rel=stylesheet]')) {
      const o = e.getAttribute('href')
      return t.head.querySelector(`link[rel=stylesheet][href="${o}"]`)
    }
    return null
  },
  se = (e) => {
    const t = e.dataset.astroTransitionPersistProps
    return t == null || t === 'false'
  },
  ae = (e) => {
    ee(e), te(e), ne(e)
    const t = oe()
    re(e.body, document.body), t()
  },
  ce = 'astro:before-preparation',
  le = 'astro:after-preparation',
  ue = 'astro:before-swap',
  de = 'astro:after-swap',
  fe = (e) => document.dispatchEvent(new Event(e))
class q extends Event {
  from
  to
  direction
  navigationType
  sourceElement
  info
  newDocument
  signal
  constructor(t, n, r, o, i, c, a, l, d, u) {
    super(t, n),
      (this.from = r),
      (this.to = o),
      (this.direction = i),
      (this.navigationType = c),
      (this.sourceElement = a),
      (this.info = l),
      (this.newDocument = d),
      (this.signal = u),
      Object.defineProperties(this, {
        from: { enumerable: !0 },
        to: { enumerable: !0, writable: !0 },
        direction: { enumerable: !0, writable: !0 },
        navigationType: { enumerable: !0 },
        sourceElement: { enumerable: !0 },
        info: { enumerable: !0 },
        newDocument: { enumerable: !0, writable: !0 },
        signal: { enumerable: !0 },
      })
  }
}
class me extends q {
  formData
  loader
  constructor(t, n, r, o, i, c, a, l, d, u) {
    super(ce, { cancelable: !0 }, t, n, r, o, i, c, a, l),
      (this.formData = d),
      (this.loader = u.bind(this, this)),
      Object.defineProperties(this, {
        formData: { enumerable: !0 },
        loader: { enumerable: !0, writable: !0 },
      })
  }
}
class he extends q {
  direction
  viewTransition
  swap
  constructor(t, n) {
    super(
      ue,
      void 0,
      t.from,
      t.to,
      t.direction,
      t.navigationType,
      t.sourceElement,
      t.info,
      t.newDocument,
      t.signal,
    ),
      (this.direction = t.direction),
      (this.viewTransition = n),
      (this.swap = () => ae(this.newDocument)),
      Object.defineProperties(this, {
        direction: { enumerable: !0 },
        viewTransition: { enumerable: !0 },
        swap: { enumerable: !0, writable: !0 },
      })
  }
}
async function pe(e, t, n, r, o, i, c, a, l) {
  const d = new me(e, t, n, r, o, i, window.document, c, a, l)
  return (
    document.dispatchEvent(d) &&
      (await d.loader(),
      d.defaultPrevented ||
        (fe(le), d.navigationType !== 'traverse' && I({ scrollX, scrollY }))),
    d
  )
}
function we(e, t) {
  const n = new he(e, t)
  return document.dispatchEvent(n), n.swap(), n
}
const ge = history.pushState.bind(history),
  b = history.replaceState.bind(history),
  I = (e) => {
    history.state &&
      ((history.scrollRestoration = 'manual'),
      b({ ...history.state, ...e }, ''))
  },
  x = !!document.startViewTransition,
  D = () => !!document.querySelector('[name="astro-view-transitions-enabled"]'),
  B = (e, t) => e.pathname === t.pathname && e.search === t.search
let f, w, E
const V = (e) => document.dispatchEvent(new Event(e)),
  j = () => V('astro:page-load'),
  ve = () => {
    let e = document.createElement('div')
    e.setAttribute('aria-live', 'assertive'),
      e.setAttribute('aria-atomic', 'true'),
      (e.className = 'astro-route-announcer'),
      document.body.append(e),
      setTimeout(() => {
        let t =
          document.title ||
          document.querySelector('h1')?.textContent ||
          location.pathname
        e.textContent = t
      }, 60)
  },
  $ = 'data-astro-transition-persist',
  N = 'data-astro-transition',
  k = 'data-astro-transition-fallback'
let H,
  v = 0
history.state
  ? ((v = history.state.index),
    scrollTo({ left: history.state.scrollX, top: history.state.scrollY }))
  : D() &&
    (b({ index: v, scrollX, scrollY }, ''),
    (history.scrollRestoration = 'manual'))
async function ye(e, t) {
  try {
    const n = await fetch(e, t),
      o = (n.headers.get('content-type') ?? '').split(';', 1)[0].trim()
    return o !== 'text/html' && o !== 'application/xhtml+xml'
      ? null
      : {
          html: await n.text(),
          redirected: n.redirected ? n.url : void 0,
          mediaType: o,
        }
  } catch {
    return null
  }
}
function W() {
  const e = document.querySelector('[name="astro-view-transitions-fallback"]')
  return e ? e.getAttribute('content') : 'animate'
}
function be() {
  let e = Promise.resolve()
  for (const t of Array.from(document.scripts)) {
    if (t.dataset.astroExec === '') continue
    const n = t.getAttribute('type')
    if (n && n !== 'module' && n !== 'text/javascript') continue
    const r = document.createElement('script')
    r.innerHTML = t.innerHTML
    for (const o of t.attributes) {
      if (o.name === 'src') {
        const i = new Promise((c) => {
          r.onload = r.onerror = c
        })
        e = e.then(() => i)
      }
      r.setAttribute(o.name, o.value)
    }
    ;(r.dataset.astroExec = ''), t.replaceWith(r)
  }
  return e
}
const K = (e, t, n, r, o) => {
  const i = B(t, e),
    c = document.title
  document.title = r
  let a = !1
  if (e.href !== location.href && !o)
    if (n.history === 'replace') {
      const l = history.state
      b(
        { ...n.state, index: l.index, scrollX: l.scrollX, scrollY: l.scrollY },
        '',
        e.href,
      )
    } else ge({ ...n.state, index: ++v, scrollX: 0, scrollY: 0 }, '', e.href)
  if (
    ((document.title = c),
    (E = e),
    i || (scrollTo({ left: 0, top: 0, behavior: 'instant' }), (a = !0)),
    o)
  )
    scrollTo(o.scrollX, o.scrollY)
  else {
    if (e.hash) {
      history.scrollRestoration = 'auto'
      const l = history.state
      ;(location.href = e.href),
        history.state ||
          (b(l, ''), i && window.dispatchEvent(new PopStateEvent('popstate')))
    } else a || scrollTo({ left: 0, top: 0, behavior: 'instant' })
    history.scrollRestoration = 'manual'
  }
}
function Te(e) {
  const t = []
  for (const n of e.querySelectorAll('head link[rel=stylesheet]'))
    if (
      !document.querySelector(
        `[${$}="${n.getAttribute($)}"], link[rel=stylesheet][href="${n.getAttribute('href')}"]`,
      )
    ) {
      const r = document.createElement('link')
      r.setAttribute('rel', 'preload'),
        r.setAttribute('as', 'style'),
        r.setAttribute('href', n.getAttribute('href')),
        t.push(
          new Promise((o) => {
            ;['load', 'error'].forEach((i) => r.addEventListener(i, o)),
              document.head.append(r)
          }),
        )
    }
  return t
}
async function _(e, t, n, r, o) {
  async function i(l) {
    function d(h) {
      const m = h.effect
      return !m || !(m instanceof KeyframeEffect) || !m.target
        ? !1
        : window.getComputedStyle(m.target, m.pseudoElement)
            .animationIterationCount === 'infinite'
    }
    const u = document.getAnimations()
    document.documentElement.setAttribute(k, l)
    const p = document.getAnimations().filter((h) => !u.includes(h) && !d(h))
    return Promise.allSettled(p.map((h) => h.finished))
  }
  if (o === 'animate' && !n.transitionSkipped && !e.signal.aborted)
    try {
      await i('old')
    } catch {}
  const c = document.title,
    a = we(e, n.viewTransition)
  K(a.to, a.from, t, c, r),
    V(de),
    o === 'animate' &&
      (!n.transitionSkipped && !a.signal.aborted
        ? i('new').finally(() => n.viewTransitionFinished())
        : n.viewTransitionFinished())
}
function Ee() {
  return f?.controller.abort(), (f = { controller: new AbortController() })
}
async function J(e, t, n, r, o) {
  const i = Ee()
  if (!D() || location.origin !== n.origin) {
    i === f && (f = void 0), (location.href = n.href)
    return
  }
  const c = o ? 'traverse' : r.history === 'replace' ? 'replace' : 'push'
  if (
    (c !== 'traverse' && I({ scrollX, scrollY }),
    B(t, n) && ((e !== 'back' && n.hash) || (e === 'back' && t.hash)))
  ) {
    K(n, t, r, document.title, o), i === f && (f = void 0)
    return
  }
  const a = await pe(
    t,
    n,
    e,
    c,
    r.sourceElement,
    r.info,
    i.controller.signal,
    r.formData,
    l,
  )
  if (a.defaultPrevented || a.signal.aborted) {
    i === f && (f = void 0), a.signal.aborted || (location.href = n.href)
    return
  }
  async function l(s) {
    const p = s.to.href,
      h = { signal: s.signal }
    if (s.formData) {
      h.method = 'POST'
      const R =
        s.sourceElement instanceof HTMLFormElement
          ? s.sourceElement
          : s.sourceElement instanceof HTMLElement && 'form' in s.sourceElement
            ? s.sourceElement.form
            : s.sourceElement?.closest('form')
      h.body =
        R?.attributes.getNamedItem('enctype')?.value ===
        'application/x-www-form-urlencoded'
          ? new URLSearchParams(s.formData)
          : s.formData
    }
    const m = await ye(p, h)
    if (m === null) {
      s.preventDefault()
      return
    }
    if (
      (m.redirected && (s.to = new URL(m.redirected)),
      (H ??= new DOMParser()),
      (s.newDocument = H.parseFromString(m.html, m.mediaType)),
      s.newDocument.querySelectorAll('noscript').forEach((R) => R.remove()),
      !s.newDocument.querySelector('[name="astro-view-transitions-enabled"]') &&
        !s.formData)
    ) {
      s.preventDefault()
      return
    }
    const A = Te(s.newDocument)
    A.length && !s.signal.aborted && (await Promise.all(A))
  }
  async function d() {
    if (w && w.viewTransition) {
      try {
        w.viewTransition.skipTransition()
      } catch {}
      try {
        await w.viewTransition.updateCallbackDone
      } catch {}
    }
    return (w = { transitionSkipped: !1 })
  }
  const u = await d()
  if (a.signal.aborted) {
    i === f && (f = void 0)
    return
  }
  if ((document.documentElement.setAttribute(N, a.direction), x))
    u.viewTransition = document.startViewTransition(
      async () => await _(a, r, u, o),
    )
  else {
    const s = (async () => {
      await Promise.resolve(), await _(a, r, u, o, W())
    })()
    u.viewTransition = {
      updateCallbackDone: s,
      ready: s,
      finished: new Promise((p) => (u.viewTransitionFinished = p)),
      skipTransition: () => {
        ;(u.transitionSkipped = !0), document.documentElement.removeAttribute(k)
      },
    }
  }
  u.viewTransition.updateCallbackDone.finally(async () => {
    await be(), j(), ve()
  }),
    u.viewTransition.finished.finally(() => {
      ;(u.viewTransition = void 0),
        u === w && (w = void 0),
        i === f && (f = void 0),
        document.documentElement.removeAttribute(N),
        document.documentElement.removeAttribute(k)
    })
  try {
    await u.viewTransition.updateCallbackDone
  } catch (s) {
    const p = s
    console.log('[astro]', p.name, p.message, p.stack)
  }
}
async function C(e, t) {
  await J('forward', E, new URL(e, location.href), t ?? {})
}
function Se(e) {
  if (!D() && e.state) {
    location.reload()
    return
  }
  if (e.state === null) return
  const t = history.state,
    n = t.index,
    r = n > v ? 'forward' : 'back'
  ;(v = n), J(r, E, new URL(location.href), {}, t)
}
const M = () => {
  history.state &&
    (scrollX !== history.state.scrollX || scrollY !== history.state.scrollY) &&
    I({ scrollX, scrollY })
}
{
  if (x || W() !== 'none')
    if (
      ((E = new URL(location.href)),
      addEventListener('popstate', Se),
      addEventListener('load', j),
      'onscrollend' in window)
    )
      addEventListener('scrollend', M)
    else {
      let e, t, n, r
      const o = () => {
        if (r !== history.state?.index) {
          clearInterval(e), (e = void 0)
          return
        }
        if (t === scrollY && n === scrollX) {
          clearInterval(e), (e = void 0), M()
          return
        } else (t = scrollY), (n = scrollX)
      }
      addEventListener(
        'scroll',
        () => {
          e === void 0 &&
            ((r = history.state.index),
            (t = scrollY),
            (n = scrollX),
            (e = window.setInterval(o, 50)))
        },
        { passive: !0 },
      )
    }
  for (const e of document.scripts) e.dataset.astroExec = ''
}
const G = new Set(),
  T = new WeakSet()
let P,
  Q,
  F = !1
function Ae(e) {
  F ||
    ((F = !0),
    (P ??= e?.prefetchAll ?? !1),
    (Q ??= e?.defaultStrategy ?? 'hover'),
    Re(),
    Le(),
    ke(),
    Ie())
}
function Re() {
  for (const e of ['touchstart', 'mousedown'])
    document.body.addEventListener(
      e,
      (t) => {
        y(t.target, 'tap') && S(t.target.href, { ignoreSlowConnection: !0 })
      },
      { passive: !0 },
    )
}
function Le() {
  let e
  document.body.addEventListener(
    'focusin',
    (r) => {
      y(r.target, 'hover') && t(r)
    },
    { passive: !0 },
  ),
    document.body.addEventListener('focusout', n, { passive: !0 }),
    O(() => {
      for (const r of document.getElementsByTagName('a'))
        T.has(r) ||
          (y(r, 'hover') &&
            (T.add(r),
            r.addEventListener('mouseenter', t, { passive: !0 }),
            r.addEventListener('mouseleave', n, { passive: !0 })))
    })
  function t(r) {
    const o = r.target.href
    e && clearTimeout(e),
      (e = setTimeout(() => {
        S(o)
      }, 80))
  }
  function n() {
    e && (clearTimeout(e), (e = 0))
  }
}
function ke() {
  let e
  O(() => {
    for (const t of document.getElementsByTagName('a'))
      T.has(t) || (y(t, 'viewport') && (T.add(t), (e ??= Pe()), e.observe(t)))
  })
}
function Pe() {
  const e = new WeakMap()
  return new IntersectionObserver((t, n) => {
    for (const r of t) {
      const o = r.target,
        i = e.get(o)
      r.isIntersecting
        ? (i && clearTimeout(i),
          e.set(
            o,
            setTimeout(() => {
              n.unobserve(o), e.delete(o), S(o.href)
            }, 300),
          ))
        : i && (clearTimeout(i), e.delete(o))
    }
  })
}
function Ie() {
  O(() => {
    for (const e of document.getElementsByTagName('a'))
      y(e, 'load') && S(e.href)
  })
}
function S(e, t) {
  const n = t?.ignoreSlowConnection ?? !1
  if (xe(e, n))
    if (
      (G.add(e),
      document.createElement('link').relList?.supports?.('prefetch') &&
        t?.with !== 'fetch')
    ) {
      const r = document.createElement('link')
      ;(r.rel = 'prefetch'), r.setAttribute('href', e), document.head.append(r)
    } else fetch(e, { priority: 'low' })
}
function xe(e, t) {
  if (!navigator.onLine || (!t && z())) return !1
  try {
    const n = new URL(e, location.href)
    return (
      location.origin === n.origin &&
      (location.pathname !== n.pathname || location.search !== n.search) &&
      !G.has(e)
    )
  } catch {}
  return !1
}
function y(e, t) {
  if (e?.tagName !== 'A') return !1
  const n = e.dataset.astroPrefetch
  return n === 'false'
    ? !1
    : t === 'tap' && (n != null || P) && z()
      ? !0
      : (n == null && P) || n === ''
        ? t === Q
        : n === t
}
function z() {
  if ('connection' in navigator) {
    const e = navigator.connection
    return e.saveData || /2g/.test(e.effectiveType)
  }
  return !1
}
function O(e) {
  e()
  let t = !1
  document.addEventListener('astro:page-load', () => {
    if (!t) {
      t = !0
      return
    }
    e()
  })
}
function De() {
  const e = document.querySelector('[name="astro-view-transitions-fallback"]')
  return e ? e.getAttribute('content') : 'animate'
}
function U(e) {
  return e.dataset.astroReload !== void 0
}
;(x || De() !== 'none') &&
  (document.addEventListener('click', (e) => {
    let t = e.target
    if (
      (e.composed && (t = e.composedPath()[0]),
      t instanceof Element && (t = t.closest('a, area')),
      !(t instanceof HTMLAnchorElement) &&
        !(t instanceof SVGAElement) &&
        !(t instanceof HTMLAreaElement))
    )
      return
    const n = t instanceof HTMLElement ? t.target : t.target.baseVal,
      r = t instanceof HTMLElement ? t.href : t.href.baseVal,
      o = new URL(r, location.href).origin
    U(t) ||
      t.hasAttribute('download') ||
      !t.href ||
      (n && n !== '_self') ||
      o !== location.origin ||
      e.button !== 0 ||
      e.metaKey ||
      e.ctrlKey ||
      e.altKey ||
      e.shiftKey ||
      e.defaultPrevented ||
      (e.preventDefault(),
      C(r, {
        history: t.dataset.astroHistory === 'replace' ? 'replace' : 'auto',
        sourceElement: t,
      }))
  }),
  document.addEventListener('submit', (e) => {
    let t = e.target
    if (t.tagName !== 'FORM' || e.defaultPrevented || U(t)) return
    const n = t,
      r = e.submitter,
      o = new FormData(n, r),
      i = typeof n.action == 'string' ? n.action : n.getAttribute('action'),
      c = typeof n.method == 'string' ? n.method : n.getAttribute('method')
    let a = r?.getAttribute('formaction') ?? i ?? location.pathname
    const l = r?.getAttribute('formmethod') ?? c ?? 'get'
    if (l === 'dialog' || location.origin !== new URL(a, location.href).origin)
      return
    const d = { sourceElement: r ?? n }
    if (l === 'get') {
      const u = new URLSearchParams(o),
        s = new URL(a)
      ;(s.search = u.toString()), (a = s.toString())
    } else d.formData = o
    e.preventDefault(), C(a, d)
  }),
  Ae({ prefetchAll: !0 }))
var Oe = '@vercel/speed-insights',
  $e = '1.0.11',
  Ne = () => {
    window.si ||
      (window.si = function (...t) {
        ;(window.siq = window.siq || []).push(t)
      })
  }
function He() {
  return typeof window < 'u'
}
function _e() {
  try {
    const e = 'production'
  } catch {}
  return 'production'
}
function X() {
  return _e() === 'development'
}
function Ce(e, t) {
  if (!e || !t) return e
  let n = e
  try {
    const r = Object.entries(t)
    for (const [o, i] of r)
      if (!Array.isArray(i)) {
        const c = Y(i)
        c.test(n) && (n = n.replace(c, `/[${o}]`))
      }
    for (const [o, i] of r)
      if (Array.isArray(i)) {
        const c = Y(i.join('/'))
        c.test(n) && (n = n.replace(c, `/[...${o}]`))
      }
    return n
  } catch {
    return e
  }
}
function Y(e) {
  return new RegExp(`/${Me(e)}(?=[/?#]|$)`)
}
function Me(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}
var Z = 'https://va.vercel-scripts.com/v1/speed-insights',
  Fe = `${Z}/script.js`,
  Ue = `${Z}/script.debug.js`,
  Xe = '/_vercel/speed-insights/script.js'
function Ye(e = {}) {
  var t
  if (!He() || e.route === null) return null
  Ne()
  const r = !!e.dsn ? Fe : Xe,
    o = e.scriptSrc || (X() ? Ue : r)
  if (document.head.querySelector(`script[src*="${o}"]`)) return null
  e.beforeSend &&
    ((t = window.si) == null || t.call(window, 'beforeSend', e.beforeSend))
  const i = document.createElement('script')
  return (
    (i.src = o),
    (i.defer = !0),
    (i.dataset.sdkn = Oe + (e.framework ? `/${e.framework}` : '')),
    (i.dataset.sdkv = $e),
    e.sampleRate && (i.dataset.sampleRate = e.sampleRate.toString()),
    e.route && (i.dataset.route = e.route),
    e.endpoint && (i.dataset.endpoint = e.endpoint),
    e.dsn && (i.dataset.dsn = e.dsn),
    X() && e.debug === !1 && (i.dataset.debug = 'false'),
    (i.onerror = () => {
      console.log(
        `[Vercel Speed Insights] Failed to load script from ${o}. Please check if any content blockers are enabled and try again.`,
      )
    }),
    document.head.appendChild(i),
    {
      setRoute: (c) => {
        i.dataset.route = c ?? void 0
      },
    }
  )
}
customElements.define(
  'vercel-speed-insights',
  class extends HTMLElement {
    constructor() {
      super()
      try {
        const t = JSON.parse(this.dataset.props ?? '{}'),
          n = JSON.parse(this.dataset.params ?? '{}'),
          r = Ce(this.dataset.pathname ?? '', n)
        Ye({
          route: r,
          ...t,
          framework: 'astro',
          beforeSend: window.speedInsightsBeforeSend,
        })
      } catch (t) {
        throw new Error(`Failed to parse SpeedInsights properties: ${t}`)
      }
    }
  },
)
