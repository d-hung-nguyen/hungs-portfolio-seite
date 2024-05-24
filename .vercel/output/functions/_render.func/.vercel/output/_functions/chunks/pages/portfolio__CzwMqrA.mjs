<<<<<<< HEAD:.vercel/output/functions/_render.func/.vercel/output/_functions/chunks/pages/portfolio__CzwMqrA.mjs
import { c as createComponent, r as renderTemplate } from '../astro_C6oBzPwA.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
=======
import {
  d as createComponent,
  r as renderTemplate,
} from '../astro_D-UXs7MS.mjs'
import 'kleur/colors'
import 'html-escaper'
import 'clsx'
>>>>>>> refs/remotes/origin/main:.vercel/output/functions/_render.func/.vercel/output/_functions/chunks/pages/portfolio_CoLKmuF5.mjs

const $$Portfolio = createComponent(
  async ($$result, $$props, $$slots) => {
    return renderTemplate`<!-- ---
import { WORK } from '../lib/constants'
import BaseLayout from '../layouts/BaseLayout.astro'
import TopLayout from '../layouts/TopLayout.astro'
import BottomLayout from '../layouts/BottomLayout.astro'
import ProjectCard from '../components/ProjectCard.astro'

import { contentfulClient } from '../lib/contentful'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import type { EntryFieldTypes } from 'contentful'

interface Project {
  contentTypeId: 'Projects'
  fields: {
    name: EntryFieldTypes.Text
    img: EntryFieldTypes.AssetLink
    website: EntryFieldTypes.EntryResourceLink<any>
    repositorio: EntryFieldTypes.EntryResourceLink<any>
  }
}

const entries = await contentfulClient.getEntries<Project>({})
---

<BaseLayout
  title="Portfolio"
  description="Projects and some clone's that I did"
>
  <main class="flex min-h-[80vh] flex-auto flex-col" transition:animate="slide">
    <TopLayout>
      <h2
        class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0"
      >
        Projects and clone's
      </h2>
    </TopLayout>
    <BottomLayout>
      <div class="flex w-full flex-wrap justify-center gap-2">
        {
          entries.items.map((entry: any) => (
            <ProjectCard
              key={entry?.sys?.id}
              href={entry?.fields?.website}
              heading={entry?.fields?.name}
              subheading={entry?.fields?.description}
              imagePath={entry?.fields?.img?.fields?.file.url}
              altText={entry?.fields?.img?.fields.title}
              class="w-full sm:w-2/5"
            />
          ))
        }
      </div>
    </BottomLayout>
  </main>
</BaseLayout> -->`
  },
  '/Users/hng/Documents/1C/astro-portfolio-main/src/pages/portfolio.astro',
  void 0,
)

const $$file =
  '/Users/hng/Documents/1C/astro-portfolio-main/src/pages/portfolio.astro'
const $$url = '/portfolio'

export { $$Portfolio as default, $$file as file, $$url as url }
