<<<<<<< HEAD:.vercel/output/functions/_render.func/.vercel/output/_functions/chunks/pages/work_CjwY_GM6.mjs
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, i as renderSlot, e as createAstro, g as renderComponent, o as renderTransition, n as Fragment } from '../astro_C6oBzPwA.mjs';
import 'kleur/colors';
import 'html-escaper';
import { W as WORK, E as EXPERIENCE } from './index_DKRZp7B1.mjs';
import { c as cn, $ as $$BaseLayout } from './404_necM7BSu.mjs';
import 'clsx';
/* empty css                          */

const $$Astro = createAstro();
const $$Container = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Container;
  const { size } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cn(
    "w-full h-full mx-auto px-5",
    size === "sm" && "max-w-screen-sm",
    size === "md" && "max-w-screen-md",
    size === "lg" && "max-w-screen-lg",
    size === "xl" && "max-w-screen-xl",
    size === "2xl" && "max-w-screen-2xl"
  ), "class")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/hng/Documents/1C/astro-portfolio-main/src/components/Container.astro", void 0);
=======
import {
  c as createAstro,
  d as createComponent,
  r as renderTemplate,
  m as maybeRenderHead,
  e as addAttribute,
  i as renderSlot,
  g as renderComponent,
  o as renderTransition,
  n as Fragment,
} from '../astro_D-UXs7MS.mjs'
import 'kleur/colors'
import 'html-escaper'
import { W as WORK, E as EXPERIENCE } from './index_BPaQ15HY.mjs'
import { c as cn, $ as $$BaseLayout } from './404_4DlFmmhl.mjs'
import 'clsx'
/* empty css                          */

const $$Astro = createAstro('http://localhost:4321')
const $$Container = createComponent(
  ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro, $$props, $$slots)
    Astro2.self = $$Container
    const { size } = Astro2.props
    return renderTemplate`${maybeRenderHead()}<div${addAttribute(
      cn(
        'w-full h-full mx-auto px-5',
        size === 'sm' && 'max-w-screen-sm',
        size === 'md' && 'max-w-screen-md',
        size === 'lg' && 'max-w-screen-lg',
        size === 'xl' && 'max-w-screen-xl',
        size === '2xl' && 'max-w-screen-2xl',
      ),
      'class',
    )}> ${renderSlot($$result, $$slots['default'])} </div>`
  },
  '/Users/hng/Documents/1C/astro-portfolio-main/src/components/Container.astro',
  void 0,
)
>>>>>>> refs/remotes/origin/main:.vercel/output/functions/_render.func/.vercel/output/_functions/chunks/pages/work_BSIcg186.mjs

const $$TopLayout = createComponent(
  ($$result, $$props, $$slots) => {
    return renderTemplate`${maybeRenderHead()}<div class="pb-5 pt-36"> ${renderComponent($$result, 'Container', $$Container, { size: 'md' }, { default: ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots['default'])} ` })} </div>`
  },
  '/Users/hng/Documents/1C/astro-portfolio-main/src/layouts/TopLayout.astro',
  void 0,
)

const $$BottomLayout = createComponent(
  ($$result, $$props, $$slots) => {
    return renderTemplate`${maybeRenderHead()}<div class="flex-1 py-5"> ${renderComponent($$result, 'Container', $$Container, { size: 'md' }, { default: ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots['default'])} ` })} </div>`
  },
  '/Users/hng/Documents/1C/astro-portfolio-main/src/layouts/BottomLayout.astro',
  void 0,
)

const $$Work = createComponent(
  ($$result, $$props, $$slots) => {
    return renderTemplate`${renderComponent($$result, 'BaseLayout', $$BaseLayout, { title: WORK.TITLE, description: WORK.DESCRIPTION }, { default: ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex min-h-[80vh] flex-auto flex-col"${addAttribute(renderTransition($$result2, '3ijahyyl'), 'data-astro-transition-scope')}> ${renderComponent($$result2, 'TopLayout', $$TopLayout, {}, { default: ($$result3) => renderTemplate` <h2 class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0"> ${WORK.TITLE} </h2> ` })} ${renderComponent($$result2, 'BottomLayout', $$BottomLayout, {}, { default: ($$result3) => renderTemplate` <ul> ${EXPERIENCE.map((entry) => renderTemplate`<li class="animate mt-4 border-b border-black/10 py-8 first-of-type:mt-0 first-of-type:pt-0 last-of-type:border-none dark:border-white/25"> <div class="mb-4 text-sm uppercase"> ${entry.start} - ${entry.end} </div> <a${addAttribute(entry.link ?? '', 'href')}${addAttribute(`font-semibold ${entry?.link ? 'text-primary' : 'text-foreground'}`, 'class')}> ${entry.company} </a> <div class="text-sm font-semibold">${entry.position}</div> <article class="prose dark:prose-invert"> ${entry.tasks.map((i) => renderTemplate`${renderComponent($$result3, 'Fragment', Fragment, {}, { default: ($$result4) => renderTemplate`${i}` })}`)} </article> </li>`)} </ul> ` })} </main> ` })}`
  },
  '/Users/hng/Documents/1C/astro-portfolio-main/src/pages/work.astro',
  'self',
)

const $$file =
  '/Users/hng/Documents/1C/astro-portfolio-main/src/pages/work.astro'
const $$url = '/work'

export { $$Work as default, $$file as file, $$url as url }
