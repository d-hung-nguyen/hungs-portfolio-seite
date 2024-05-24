import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead, i as renderSlot, n as Fragment, e as addAttribute } from '../astro_D-UXs7MS.mjs';
import 'kleur/colors';
import 'html-escaper';
import { c as cn, b as buttonVariants, B as Button, $ as $$BaseLayout } from './404_4DlFmmhl.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { SquareArrowOutUpRight, Download } from 'lucide-react';
import moment from 'moment-timezone';

const WORK = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked."
};
const STUDIES = [
  {
    title: "Certificate in Fullstack Software Development",
    institution: "Neuefische",
    link: "(Intensive course) in JavaScript, React, Astro, MongoDB, and SQL.",
    date: "Jan 2014 - Apr 2024"
  },
  {
    title: "Bachelor's Degree",
    institution: "Foreign Trade University",
    link: "Business Administration - BBA, Business Administration and Management, General",
    date: "2001 - 2005"
  },
  {
    title: "Bachelor's Degree",
    institution: "Phuong Dong University",
    link: "in English, Han-nom, and Far Eastern Culture.",
    date: "2001 - 2005"
  }
];
const EXPERIENCE = [
  {
    company: "Kerzner International - Regional Sales Office",
    location: "Frankfurt am Main, Germany",
    position: "Sales & Marketing DACH & CEE",
    start: "Sep 2015",
    end: "Nov 2023",
    tasks: [
      "Developed and implemented marketing strategies to increase brand awareness and revenue in the DACH and CEE regions.",
      "Conducted market research to identify new opportunities and trends.",
      "Managed relationships with key stakeholders and partners.",
      "Coordinated promotional activities and events.",
      "Analyzed marketing campaign performance and adjusted strategies accordingly."
    ]
  },
  {
    company: "Velaa Private Island, Maldives",
    location: "Maldives",
    position: "Project Consultant, Reservations and Revenue Management",
    start: "Mar 2015",
    end: "Jul 2015",
    tasks: [
      "Coordinated and supervised daily reservation operations and revenue reports.",
      "Developed and implemented revenue management strategies.",
      "Trained staff on reservation procedures and revenue management techniques.",
      "Monitored booking trends and adjusted pricing strategies to maximize revenue.",
      "Ensured high levels of customer satisfaction through efficient reservation processes."
    ]
  },
  {
    company: "RCI, Schliersee",
    location: "Schliersee, Germany",
    position: "Reservations and Front Office Manager",
    start: "Mar 2014",
    end: "Mar 2015",
    tasks: [
      "Advised on optimizing booking systems and revenue strategies.",
      "Managed front office operations, ensuring smooth check-in and check-out processes.",
      "Handled guest inquiries and resolved complaints.",
      "Trained and supervised front office staff.",
      "Implemented new reservation systems to improve efficiency."
    ]
  },
  {
    company: "One&Only The Palm, Dubai",
    location: "Dubai, UAE",
    position: "Reservations and Revenue Manager",
    start: "Sep 2010",
    end: "Feb 2015",
    tasks: [
      "Led the reservations team and strategic planning for revenue optimization for a successful hotel opening.",
      "Developed and implemented revenue management strategies.",
      "Monitored booking trends and adjusted pricing strategies.",
      "Trained and supervised reservation staff.",
      "Ensured high levels of customer satisfaction through efficient reservation processes."
    ]
  },
  {
    company: "InterContinental Asiana Saigon",
    location: "Ho Chi Minh City, Vietnam",
    position: "Assistant Reservations Manager",
    start: "Aug 2009",
    end: "Sep 2010",
    tasks: [
      "Managed front office and reservations, enhancing customer satisfaction and loyalty.",
      "Assisted in the development and implementation of revenue management strategies.",
      "Trained and supervised reservation staff.",
      "Handled guest inquiries and resolved complaints.",
      "Monitored booking trends and adjusted pricing strategies."
    ]
  },
  {
    company: "One&Only Royal Mirage, Dubai",
    location: "Dubai, UAE",
    position: "Reservations and Revenue Coordinator",
    start: "Jun 2006",
    end: "Aug 2009",
    tasks: [
      "Coordinated reservations and revenue management.",
      "Developed and implemented revenue management strategies.",
      "Monitored booking trends and adjusted pricing strategies.",
      "Trained and supervised reservation staff.",
      "Ensured high levels of customer satisfaction through efficient reservation processes."
    ]
  },
  {
    company: "Sofitel Legend Metropole Hanoi",
    location: "Hanoi, Vietnam",
    position: "Reservations Agent",
    start: "May 2005",
    end: "Jun 2006",
    tasks: [
      "Supported the establishment of efficient reservation processes for market introduction.",
      "Handled reservations and customer inquiries.",
      "Ensured high service quality.",
      "Assisted in the development and implementation of revenue management strategies.",
      "Trained and supervised reservation staff."
    ]
  }
];

const $$Astro$2 = createAstro("http://localhost:4321");
const $$ContentCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ContentCard;
  const { title, body } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${title && renderTemplate`${maybeRenderHead()}<h2 class="z-20 m-0 text-xl font-bold">${title}</h2>`}${body && renderTemplate`<p class="m-0 text-base font-light">${body}</p>`}${renderSlot($$result2, $$slots["default"])}` })}`;
}, "/Users/hng/Documents/1C/astro-portfolio-main/src/components/ContentCard.astro", void 0);

const Card = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    ),
    ...props
  }
));
Card.displayName = "Card";
const CardHeader = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
const CardTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "h3",
  {
    ref,
    className: cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
const CardDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "p",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
const CardContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
const CardFooter = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";

const $$Astro$1 = createAstro("http://localhost:4321");
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Card;
  const { title, body, colSpan, rowSpan, href, colorText } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "ShadcnCard", Card, { "className": `card-animate transfor-y-[-40%] align-start perspective-1200 group group relative col-span-1 h-auto w-full flex-none transform justify-start overflow-hidden p-6 shadow-lg transition duration-75 ease-in-out ${colSpan || "md:col-span-2"} ${rowSpan || ""} ${href ? "cursor-pointer hover:border-primary" : ""}` }, { "default": ($$result2) => renderTemplate`${href ? renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(`block h-full w-full ${colorText || " "}`, "class")}> ${renderComponent($$result2, "SquareArrowOutUpRight", SquareArrowOutUpRight, { "className": "group-hover:text-primary position absolute right-6 ", "size": 20 })} ${renderComponent($$result2, "ContentCard", $$ContentCard, { "title": title, "body": body }, { "default": ($$result3) => renderTemplate` ${renderSlot($$result3, $$slots["default"])} ` })} </a>` : renderTemplate`${renderComponent($$result2, "ContentCard", $$ContentCard, { "title": title, "body": body }, { "default": ($$result3) => renderTemplate` ${renderSlot($$result3, $$slots["default"])} ` })}`}` })}`;
}, "/Users/hng/Documents/1C/astro-portfolio-main/src/components/Card.astro", void 0);

const $$IntroCard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Card", $$Card, { "colSpan": "md:col-span-3", "rowSpan": "md:row-span-2" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex h-full w-full"> <div class="flex flex-col justify-between gap-4 md:max-h-[300px]"> <div class="flex h-full flex-col gap-4"> <h6 class="m-0 text-sm font-light text-gray-500">welcome</h6> <p class="m-0, pr-10 text-xl font-light">
Hi, I'm <b class="font-bold">Hung Nguyen</b>, a highly motivated and
          experienced hotel management professional with over 20 years in the
          hospitality industry. Proven track record in sales & marketing,
          revenue management, customer service, and team leadership. Skilled in
          utilizing technology to enhance operational efficiency and guest
          satisfaction.
</p> </div> <!-- <div class="flex gap-4">
        <a href={LINKS.github} aria-label="github profile" target="_blank">
          <Button aria-label="github profile">
            <Github />
            <span class="sr-only">GitHub Profile</span>
          </Button>
        </a>
        <a href={LINKS.linkedin} aria-label="linkeding profile" target="_blank">
          <Button aria-label="linkedin profile">
            <Linkedin />
            <span class="sr-only">Linkedin Profile</span>
          </Button>
        </a>
        <a href={LINKS.mail} aria-label="mail profile" target="_blank">
          <Button>
            <Mail />
            <span class="sr-only">Email contact</span>
          </Button>
        </a>
      </div> --> </div> <img width="500" height="500" src="/me.png" class="pointer-events-none absolute bottom-[-20px] right-[-110px] z-[-1] max-h-[300px] w-auto select-none opacity-75 md:relative md:bottom-auto md:right-auto md:z-auto md:opacity-100" alt="memoji of Hung Nguyen"> </div> ` })}`;
}, "/Users/hng/Documents/1C/astro-portfolio-main/src/components/sections/IntroCard.astro", void 0);

const Timezone = ({ timezone }) => {
  const [dateTime, setDateTime] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      const now = moment().tz(timezone);
      setDateTime(now.format("dddd, DD MMMM YYYY [a] h:mm:ss A"));
    }, 1e3);
    return () => clearInterval(interval);
  }, [timezone]);
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("p", { children: dateTime }),
    /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: "Frankfurt am Main, Germany" })
  ] });
};

const $$TimeZoneCard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Card", $$Card, { "colSpan": "lg:col-span-1", "rowSpan": "md:row-span-2", "title": "Time zone" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TimeZoneV2", Timezone, { "timezone": "Europe/Berlin", "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/hng/Documents/1C/astro-portfolio-main/src/components/sections/TimeZoneCardV2", "client:component-export": "default" })} ` })}`;
}, "/Users/hng/Documents/1C/astro-portfolio-main/src/components/sections/TimeZoneCard.astro", void 0);

const $$ContactsCard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Card", $$Card, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="h-full"> <header class="flex justify-start"> <h1 class="text-xl font-bold text-foreground">
Let's start working together!
</h1> </header> <div class="row-auto mt-4 flex"> <h2 class="text-gray-500"> <p>nd.hung@me.com</p> <p>Frankfurt am Main, Germany</p> </h2> <address class="mt-4 flex flex-col"></address> <span class="mt-4 flex-row"> <a href="mailto:nd.hung@me.com" target="_blank" rel="noreferrer"${addAttribute(buttonVariants({ variant: "outline" }), "class")}>
Email
</a> <a href="https://www.linkedin.com/in/nd-hung/" target="_blank" rel="noreferrer"${addAttribute(buttonVariants({ variant: "outline" }), "class")}>
LinkedIn
</a> <a href="https://github.com/d-hung-nguyen" target="_blank" rel="noreferrer"${addAttribute(buttonVariants({ variant: "outline" }), "class")}>
GitHub
</a> </span> </div> </div> ` })}`;
}, "/Users/hng/Documents/1C/astro-portfolio-main/src/components/sections/ContactsCard.astro", void 0);

const $$CVCard = createComponent(($$result, $$props, $$slots) => {
  const PDF = "/hung-cv-english.pdf";
  const PDFDE = "hung-cv-german-pdf.pdf";
  return renderTemplate`${renderComponent($$result, "Card", $$Card, { "title": "CV" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="card-actions mt-2 flex w-full items-center justify-center"> <div class="row-span-1 mt-4 flex space-x-2"> <figure> <object${addAttribute(PDF, "data")} type="application/pdf" width="100%"></object> </figure> <div class="mt-4 flex flex-col gap-2"> <p class="text-sm text-muted-foreground">
View and download my resume by clicking on the button below
</p> <a target="_blank"${addAttribute(PDF, "href")}> ${renderComponent($$result2, "Download", Download, {}, { "default": ($$result3) => renderTemplate` Download Resume ` })} </a> </div> <figure> <object${addAttribute(PDF, "data")} type="application/pdf" width="100%"></object> </figure> <div class="mt-4 flex flex-col gap-2"> <p class="text-sm text-muted-foreground">
View and download my resume in German by clicking on the button below
</p> <a target="_blank"${addAttribute(PDFDE, "href")}> ${renderComponent($$result2, "Download", Download, {}, { "default": ($$result3) => renderTemplate` Download Resume in German` })} </a> </div> </div> </div> ` })}`;
}, "/Users/hng/Documents/1C/astro-portfolio-main/src/components/sections/CVCard.astro", void 0);

const $$ExperienceCard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Card", $$Card, { "colSpan": "md:col-span-2", "rowSpan": "md:row-span-1", "title": "Experience" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-2 space-y-4"> ${EXPERIENCE.slice(0, 6).map((exp) => renderTemplate`<div> <h3 class="text-lg font-semibold"> ${exp.company}</h3> ${exp.position} <p class="text-sm text-gray-600"> ${exp.start} - ${exp.end} </p> </div>`)} <a href="/work"> ${renderComponent($$result2, "Button", Button, { "variant": "link", "className": "pl-0" }, { "default": ($$result3) => renderTemplate` View More ` })} </a> </div> ` })}`;
}, "/Users/hng/Documents/1C/astro-portfolio-main/src/components/sections/ExperienceCard.astro", void 0);

const $$StudyCard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Card", $$Card, { "colSpan": "md:col-span-2", "rowSpan": "md:row-span-1", "title": "Studies" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-2 space-y-4"> ${STUDIES.slice(0, 3).map((study) => renderTemplate`<div> <h3 class="text-lg font-semibold"> ${study.institution}</h3> ${study.title} in ${study.link} <p class="text-sm text-gray-600">${study.date}</p> </div>`)},
</div> ` })}`;
}, "/Users/hng/Documents/1C/astro-portfolio-main/src/components/sections/StudyCard.astro", void 0);

const $$Astro = createAstro("http://localhost:4321");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate` ${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Hung Nguyen - Hotel Sales and Marketing specialist and Full Stack Developer", "description": "Hung Nguyen - Hotel Sales and Marketing specialist and Full Stack Developer - Portfolio, Projects, CV, About Me, Contact, Timezone, Now, Experience, Tattoo, Study" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="lg:grid-rows relative m-auto grid w-full max-w-6xl gap-2 overflow-hidden p-2 sm:gap-2 sm:p-4 md:grid-cols-2 md:gap-3 md:p-6 lg:grid-cols-4 lg:gap-4"> ${renderComponent($$result2, "IntroCard", $$IntroCard, {})} ${renderComponent($$result2, "TimeZoneCard", $$TimeZoneCard, {})} ${renderComponent($$result2, "ExperienceCard", $$ExperienceCard, {})} ${renderComponent($$result2, "StudyCard", $$StudyCard, {})} ${renderComponent($$result2, "CVCard", $$CVCard, {})} ${renderComponent($$result2, "ContactsCard", $$ContactsCard, {})} </main> ` })} <!-- <Card
      colSpan="md:col-span-1"
      rowSpan="md:row-span-2"
      title="Portfolio & Projects"
      href="/portfolio"
    />  --> <!-- <Card colSpan="md:col-span-1" rowSpan="md:row-span-1">
      <!-- <div class="flex h-full flex-col justify-between">
        <!-- <blockquote class="mt-6 border-l-2 pl-6 italic">
          “Anything one man can imagine, other men can make real.”
        </blockquote> --> <!-- <p class="mt-2 text-xs">- Jules Verne</p>
      </div> --> <!-- </Card> --> <!-- <TattooCard /> --> <!-- <Card colSpan="md:col-span-1" rowSpan="md:row-span-1">
      <p class="text-xs">
        © 2023 · Crafted with ♥️ using <a
          href="https://astro.build/"
          target="_blank"
          class="text-red-500">Astro</a
        > by Gianmarco.
      </p>
    </Card> -->`;
}, "/Users/hng/Documents/1C/astro-portfolio-main/src/pages/index.astro", void 0);

const $$file = "/Users/hng/Documents/1C/astro-portfolio-main/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { EXPERIENCE as E, WORK as W, index as i };
