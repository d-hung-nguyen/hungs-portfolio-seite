import {
  c as createAstro,
  d as createComponent,
  r as renderTemplate,
  e as addAttribute,
  f as renderHead,
  m as maybeRenderHead,
  g as renderComponent,
  h as createTransitionScope,
  i as renderSlot,
} from '../astro_D-UXs7MS.mjs'
import 'kleur/colors'
import 'html-escaper'
import { clsx } from 'clsx'
/* empty css                          */
import { jsx, jsxs } from 'react/jsx-runtime'
import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'
import { ChevronRight, Check, Circle, Sun, Moon } from 'lucide-react'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'

const $$Astro$3 = createAstro('https://nest-port.de')
const $$ViewTransitions = createComponent(
  ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots)
    Astro2.self = $$ViewTransitions
    const { fallback = 'animate' } = Astro2.props
    return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, 'content')}>`
  },
  '/Users/hng/Documents/1C/astro-portfolio-main/node_modules/astro/components/ViewTransitions.astro',
  void 0,
)

const $$Astro$2 = createAstro('https://nest-port.de')
const $$HeadSEO = createComponent(
  ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots)
    Astro2.self = $$HeadSEO
    console.log('Site URL:', Astro2.site)
    console.log('Pathname:', Astro2.url.pathname)
    const baseURL = new URL(Astro2.site || 'https://default-fallback-url.com')
    const canonicalURL = new URL(Astro2.url.pathname || '/', baseURL.href)
    if (!Astro2.props.ogImage) {
      Astro2.props.ogImage = new URL('View1.png', canonicalURL.href)
    }
    Astro2.props
    return renderTemplate`<html lang="en"> <head><!-- Meta tags and links -->${renderHead()}</head> <body> <!-- Body content goes here --> </body></html>`
  },
  '/Users/hng/Documents/1C/astro-portfolio-main/src/components/HeadSEO.astro',
  void 0,
)

const $$Footer = createComponent(
  ($$result, $$props, $$slots) => {
    return renderTemplate`${maybeRenderHead()}<footer class="border-t py-6 md:px-8 md:py-0"> <div class="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row"> <p class="text-center text-sm leading-loose text-muted-foreground md:text-left">
Built by${' Hung Nguyen'}
:
${/* @__PURE__ */ new Date().getFullYear()} </p> </div> </footer>`
  },
  '/Users/hng/Documents/1C/astro-portfolio-main/src/components/Footer.astro',
  void 0,
)

function cn(...inputs) {
  return twMerge(clsx(inputs))
}

const buttonVariants = cva(
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
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return /* @__PURE__ */ jsx(Comp, {
      className: cn(buttonVariants({ variant, size, className })),
      ref,
      ...props,
    })
  },
)
Button.displayName = 'Button'

const DropdownMenu = DropdownMenuPrimitive.Root
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger
const DropdownMenuSubTrigger = React.forwardRef(
  ({ className, inset, children, ...props }, ref) =>
    /* @__PURE__ */ jsxs(DropdownMenuPrimitive.SubTrigger, {
      ref,
      className: cn(
        'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent',
        inset && 'pl-8',
        className,
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx(ChevronRight, { className: 'ml-auto h-4 w-4' }),
      ],
    }),
)
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName
const DropdownMenuSubContent = React.forwardRef(
  ({ className, ...props }, ref) =>
    /* @__PURE__ */ jsx(DropdownMenuPrimitive.SubContent, {
      ref,
      className: cn(
        'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        className,
      ),
      ...props,
    }),
)
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName
const DropdownMenuContent = React.forwardRef(
  ({ className, sideOffset = 4, ...props }, ref) =>
    /* @__PURE__ */ jsx(DropdownMenuPrimitive.Portal, {
      children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.Content, {
        ref,
        sideOffset,
        className: cn(
          'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          className,
        ),
        ...props,
      }),
    }),
)
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName
const DropdownMenuItem = React.forwardRef(
  ({ className, inset, ...props }, ref) =>
    /* @__PURE__ */ jsx(DropdownMenuPrimitive.Item, {
      ref,
      className: cn(
        'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        inset && 'pl-8',
        className,
      ),
      ...props,
    }),
)
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName
const DropdownMenuCheckboxItem = React.forwardRef(
  ({ className, children, checked, ...props }, ref) =>
    /* @__PURE__ */ jsxs(DropdownMenuPrimitive.CheckboxItem, {
      ref,
      className: cn(
        'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        className,
      ),
      checked,
      ...props,
      children: [
        /* @__PURE__ */ jsx('span', {
          className:
            'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
          children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, {
            children: /* @__PURE__ */ jsx(Check, { className: 'h-4 w-4' }),
          }),
        }),
        children,
      ],
    }),
)
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName
const DropdownMenuRadioItem = React.forwardRef(
  ({ className, children, ...props }, ref) =>
    /* @__PURE__ */ jsxs(DropdownMenuPrimitive.RadioItem, {
      ref,
      className: cn(
        'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        className,
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx('span', {
          className:
            'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
          children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, {
            children: /* @__PURE__ */ jsx(Circle, {
              className: 'h-2 w-2 fill-current',
            }),
          }),
        }),
        children,
      ],
    }),
)
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName
const DropdownMenuLabel = React.forwardRef(
  ({ className, inset, ...props }, ref) =>
    /* @__PURE__ */ jsx(DropdownMenuPrimitive.Label, {
      ref,
      className: cn(
        'px-2 py-1.5 text-sm font-semibold',
        inset && 'pl-8',
        className,
      ),
      ...props,
    }),
)
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName
const DropdownMenuSeparator = React.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ jsx(DropdownMenuPrimitive.Separator, {
    ref,
    className: cn('-mx-1 my-1 h-px bg-muted', className),
    ...props,
  }),
)
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

function ModeToggle() {
  const [theme, setThemeState] = React.useState('light')
  React.useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark')
    setThemeState(isDarkMode ? 'dark' : 'light')
  }, [])
  React.useEffect(() => {
    const isDark =
      theme === 'dark' ||
      (theme === 'system' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    document.documentElement.classList[isDark ? 'add' : 'remove']('dark')
  }, [theme])
  const onChangeTheme = (theme2) => {
    setThemeState(theme2)
    localStorage.setItem('theme', theme2)
  }
  return /* @__PURE__ */ jsxs(DropdownMenu, {
    children: [
      /* @__PURE__ */ jsx(DropdownMenuTrigger, {
        asChild: true,
        children: /* @__PURE__ */ jsxs(Button, {
          variant: 'outline',
          size: 'icon',
          children: [
            /* @__PURE__ */ jsx(Sun, {
              className:
                'h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0',
            }),
            /* @__PURE__ */ jsx(Moon, {
              className:
                'absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100',
            }),
            /* @__PURE__ */ jsx('span', {
              className: 'sr-only',
              children: 'Toggle theme',
            }),
          ],
        }),
      }),
      /* @__PURE__ */ jsxs(DropdownMenuContent, {
        align: 'end',
        children: [
          /* @__PURE__ */ jsx(DropdownMenuItem, {
            onClick: () => onChangeTheme('light'),
            children: 'Light',
          }),
          /* @__PURE__ */ jsx(DropdownMenuItem, {
            onClick: () => onChangeTheme('dark'),
            children: 'Dark',
          }),
          /* @__PURE__ */ jsx(DropdownMenuItem, {
            onClick: () => onChangeTheme('system'),
            children: 'System',
          }),
        ],
      }),
    ],
  })
}

var __freeze$1 = Object.freeze
var __defProp$1 = Object.defineProperty
var __template$1 = (cooked, raw) =>
  __freeze$1(__defProp$1(cooked, 'raw', { value: __freeze$1(cooked.slice()) }))
var _a$1
const $$Header = createComponent(
  ($$result, $$props, $$slots) => {
    return renderTemplate(
      _a$1 ||
        (_a$1 = __template$1([
          "<script>\n  document.addEventListener('astro:after-swap', function () {\n    if (localStorage.getItem('theme') === 'dark')\n      document.documentElement.classList.toggle('dark', true)\n  })\n\n  const getThemePreference = () => {\n    return localStorage.getItem('theme')\n  }\n\n  const isDark = getThemePreference() === 'dark'\n  document.documentElement.classList[isDark ? 'add' : 'remove']('dark')\n</script> ",
          '<header class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"> <div class="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0"> <div class="flex gap-6 md:gap-10"> <span class="inline-block font-bold">HNG</span> </div> <div class="flex flex-1 items-center justify-end space-x-4"> <nav class="flex items-center space-x-1"> <a href="mailto:nd.hung@me.com" target="_blank" rel="noreferrer"',
          '>\nEmail\n</a> <a href="https://www.linkedin.com/in/nd-hung/" target="_blank" rel="noreferrer"',
          '>\nLinkedIn\n</a> <a href="https://github.com/d-hung-nguyen" target="_blank" rel="noreferrer"',
          '>\nGitHub\n</a> ',
          ' </nav> </div> </div> </header>',
        ])),
      maybeRenderHead(),
      addAttribute(buttonVariants({ variant: 'ghost' }), 'class'),
      addAttribute(buttonVariants({ variant: 'ghost' }), 'class'),
      addAttribute(buttonVariants({ variant: 'ghost' }), 'class'),
      renderComponent($$result, 'ModeToggle', ModeToggle, {
        'client:load': true,
        'client:component-hydration': 'load',
        'client:component-path':
          '/Users/hng/Documents/1C/astro-portfolio-main/src/components/ui/ThemeToggle',
        'client:component-export': 'ModeToggle',
        'data-astro-transition-persist': createTransitionScope(
          $$result,
          'mepp556t',
        ),
      }),
    )
  },
  '/Users/hng/Documents/1C/astro-portfolio-main/src/components/Header.astro',
  'self',
)

var __freeze = Object.freeze
var __defProp = Object.defineProperty
var __template = (cooked, raw) =>
  __freeze(__defProp(cooked, 'raw', { value: __freeze(raw || cooked.slice()) }))
var _a
const $$Technologies = createComponent(
  ($$result, $$props, $$slots) => {
    return renderTemplate(
      _a ||
        (_a = __template(
          [
            '<html lang="en" data-astro-cid-jyqqxfiv> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Animate SVG Icons</title>',
            `</head> <body data-astro-cid-jyqqxfiv> <div id="icons" data-astro-cid-jyqqxfiv> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 826" data-astro-cid-jyqqxfiv> <path fill="#085da7" d="M1682.585 222.046c-40.793 6.368-63.111 30.875-60.19 66.091 2.582 31.132 22.646 46.739 73.72 57.344 46.601 9.676 59.019 17.085 61.398 36.636 5.741 47.165-64.027 62.875-132.744 29.891l-7.832-3.76.281 11.066.282 11.067 6 2.43c25.757 10.434 71.139 15.506 97.151 10.859 40.602-7.255 62.395-29.833 62.332-64.58-.066-36.204-15.927-49.707-73.483-62.554-50.257-11.219-61.009-18.453-60.993-41.036.012-15.456 5.778-25.053 19.11-31.804 24.426-12.369 68.176-8.067 100.259 9.859 2.407 1.345 4.432 2.446 4.5 2.447.068.001-.101-5.061-.376-11.25l-.5-11.252-9.5-3.293c-21.824-7.563-58.863-11.37-79.415-8.161M319.16 224.713c-.523.983-5.086 11.012-10.142 22.287-5.056 11.275-10.728 23.803-12.605 27.839-1.877 4.037-3.413 7.491-3.413 7.677 0 .186-1.629 3.858-3.621 8.161-3.614 7.809-30.514 67.202-43.513 96.073a90918.286 90918.286 0 0 1-13.967 31c-3.906 8.663-7.94 17.663-8.965 20l-1.863 4.25h19.704l6.221-14.25c7.258-16.626 6.338-15.434 16.284-21.097 33.445-19.043 77.094-19.401 115.902-.949 11.418 5.429 11.73 5.665 13.782 10.435 1.155 2.684 3.82 8.588 5.923 13.121 2.102 4.532 4.143 9.252 4.535 10.49.701 2.214.98 2.25 17.204 2.25 9.071 0 16.288-.337 16.04-.75-.249-.413-6.847-14.925-14.663-32.25s-17.484-38.7-21.485-47.5c-11.608-25.528-48.219-106.588-55.554-123l-6.704-15-9.075-.287c-7.871-.249-9.201-.05-10.025 1.5M425 223.316c0 .847-2.176 12.403-2.623 13.934-.482 1.647 1.939 1.75 41.056 1.75H505v203h31V239h41.5c37.742 0 41.5-.148 41.5-1.635 0-.899-.528-4.499-1.173-8L616.654 223h-95.827c-52.705 0-95.827.142-95.827.316M657 332.5V442h124.792l1.354-7.75 1.354-7.75-48.75-.259-48.75-.26V223h-30v109.5m249.632-106.75c-.781 1.512-4.884 10.4-9.117 19.75l-9.509 21c-2.31 5.1-14.112 31.194-23.745 52.5-4.103 9.075-10.291 22.8-13.75 30.5-3.46 7.7-7.716 17.105-9.458 20.9-1.742 3.795-7.455 16.395-12.695 28a15061.95 15061.95 0 0 1-14.443 31.893c-2.703 5.936-4.915 11.015-4.915 11.286 0 .272 4.353.365 9.673.207l9.672-.286 6.578-14.797 6.577-14.796 6.707-3.886c30.818-17.855 72.395-20.859 106.482-7.694 22.266 8.599 23.42 9.609 31.331 27.423l6.328 14.25h15.933c12.344 0 15.821-.282 15.437-1.25-.447-1.124-25.738-57.116-60.868-134.75a26805.847 26805.847 0 0 1-25.123-55.725L925.5 223.049l-8.724-.024c-8.517-.024-8.758.04-10.144 2.725M1066 332.5V442h18v-89.083c0-51.415.375-88.943.887-88.75.488.183 17.2 19.233 37.138 42.333 19.938 23.1 38.608 44.7 41.49 48 2.881 3.3 21.076 24.337 40.433 46.75l35.194 40.75H1263V223h-18v88.5c0 52.775-.369 88.5-.914 88.5-.921 0-9.626-9.723-31.785-35.5-6.619-7.7-20.982-24.364-31.918-37.031-59.42-68.826-76.573-88.651-83.207-96.169l-7.324-8.3H1066v109.5m235.854-101.75-1.354 7.75 41.75.261 41.75.261V442h30V239h83.839l-.831-3.25c-.458-1.787-1.124-5.387-1.481-8l-.65-4.75H1303.208l-1.354 7.75M1535 332.5V442h31V223h-31v109.5m-633.475-57.795c-4.282 9.787-17.221 39.313-28.754 65.614-11.532 26.3-20.797 47.988-20.589 48.196.208.208 4.415-1.244 9.348-3.228 30.606-12.305 68.603-12.065 98.419.623 4.041 1.72 7.574 2.9 7.852 2.622.278-.277-5.941-15.023-13.818-32.768A68741.073 68741.073 0 0 1 925.279 291c-7.909-17.875-14.738-32.858-15.174-33.295-.437-.437-4.298 7.213-8.58 17M292.834 323.25c-15.739 35.887-28.464 65.413-28.279 65.613.186.199 4.134-1.268 8.775-3.261 30.284-13.008 75.406-12.201 102.546 1.834 4.327 2.237 5.334 1.697 3.609-1.936-.783-1.65-5.52-12.225-10.528-23.5-35.149-79.148-44.277-99.769-45.04-101.75-.477-1.238-1.227-2.25-1.667-2.25-.44 0-13.677 29.363-29.416 65.25m95.916 214.53-12.75.28V607h9v-27l7.25.025 7.25.026 9.572 13.224 9.571 13.225 5.703.301 5.703.3-10.109-13.633c-5.56-7.498-9.958-13.741-9.774-13.873.184-.132 2.451-1.024 5.037-1.982 15.974-5.918 17.112-29.226 1.795-36.752-6.225-3.058-10.092-3.48-28.248-3.081m79.5-.019-22.25.277V607h49v-8h-39v-23h30l.001-3.75.002-3.75-15.002.3-15.001.3V545H493.121l-.311-3.673c-.17-2.02-.76-3.711-1.31-3.758-.55-.047-11.012.04-23.25.192m56.269.778c-6.923 2.637-13.519 10.71-13.519 16.546 0 8.384 6.359 13.881 23.5 20.316 13.584 5.099 16.5 7.482 16.5 13.48 0 11.762-19.935 14.135-34.087 4.057l-3-2.136-2.457 2.65c-3.354 3.62-3.239 3.904 3.202 7.933 12.893 8.064 32.776 7.313 41.044-1.551 9.664-10.361 4.913-24.207-10.202-29.73-22.602-8.258-24.5-9.467-24.5-15.606 0-9.956 16.389-12.983 28.791-5.318l3.406 2.105 2.366-2.892c3.293-4.027 3.239-4.123-4.268-7.636-8.097-3.789-20.052-4.779-26.776-2.218m74.41-.234c-31.644 8.965-35.334 51.61-5.651 65.321 8.927 4.123 26.268 4.265 34.722.284 27.777-13.081 27.777-50.982 0-63.666-6.674-3.048-21.635-4.046-29.071-1.939m77.821-.527-13.75.278V607h9v-27h14.811l7.344 10.082c4.04 5.545 8.364 11.62 9.61 13.5 2.13 3.215 2.597 3.418 7.872 3.418 4.347 0 5.386-.281 4.62-1.25-5.493-6.946-18.257-24.935-18.257-25.729 0-.562.569-1.021 1.265-1.021 6.677 0 14.558-8.858 15.427-17.339 1.899-18.539-7.567-24.497-37.942-23.883m75.203-.011-24.547.267.406 3.483.407 3.483H751v62h4.25l4.25.001V545.5l11.308-.283 11.309-.284-.309-3.61c-.366-4.291 2.825-3.911-29.855-3.556m57.605.725c-8.425 3.001-12.713 8.077-13.278 15.717-.701 9.474 4.599 14.783 20.391 20.427 16.378 5.854 20.548 9.369 18.902 15.931-2.672 10.645-23.6 11.947-34.33 2.135l-2.256-2.063-2.986 2.86c-3.743 3.587-2.738 5.028 6.772 9.71 23.214 11.428 49.197-3.266 40.323-22.804-2.312-5.091-5.38-7.01-20.596-12.885-12.847-4.959-17.5-8.279-17.5-12.485 0-9.582 13.963-13.354 26.378-7.126l6.122 3.072 2.25-2.546c2.947-3.335 2.857-3.901-1-6.258-7.899-4.828-21.252-6.513-29.192-3.685m101.618-.354c-4.88 1.406-11.607 8.579-12.929 13.787-1.093 4.307-1.082 4.337 3.479 9.214 2.517 2.69 4.396 5.023 4.175 5.184-15.342 11.153-18.122 23.611-7.676 34.405 6.922 7.152 22.87 8.414 34.15 2.702l5.774-2.923 2.702 3.31c2.492 3.054 3.088 3.286 7.675 2.997l4.974-.314-5.26-5.607-5.259-5.607 2.457-4.396c1.351-2.418 2.862-6.982 3.358-10.143l.901-5.747h-3.848c-2.613 0-3.849.445-3.849 1.385 0 2.9-3.356 11.615-4.473 11.615-1.621 0-31.527-32.538-31.527-34.302 0-2.362 4.118-6.85 7.636-8.319 6.718-2.807 15.239-.896 19.359 4.342 1.637 2.081 2.366 2.325 4.66 1.561 4.146-1.382 3.966-3.03-.834-7.629-6.419-6.151-16.164-8.246-25.645-5.515m90.812-.305c-.625.211-.988 12.984-.988 34.75V607h3.933c4.914 0 5.008-.287 4.939-15l-.054-11.5 7.014-.292c8.065-.336 6.176-1.925 19.671 16.542l7.49 10.25h5.004c2.751 0 5.003-.236 5.003-.525 0-.288-4.107-6.026-9.126-12.75-10.161-13.612-10.799-14.725-8.441-14.725 9.66 0 18.055-13.397 15.511-24.752-2.932-13.082-8.73-16.045-32.206-16.455-9.22-.161-17.207-.143-17.75.04m90.012-.063-20.5.27.182 34.23.181 34.23 24.069.268 24.068.268V599h-40.066l.283-11.25.283-11.25 15.25-.276 15.25-.276V569h-13.918c-18.498 0-17.082 1.045-17.082-12.607V545h38v-3.5c0-1.925-.338-3.533-.75-3.574-.412-.041-1.65-.154-2.75-.25-1.1-.097-11.225-.055-22.5.094m57.406.968c-8.85 3.809-12.406 8.422-12.406 16.093 0 10.142 4.932 14.503 24 21.219 11.465 4.039 15 7.028 15 12.686 0 12.058-23.3 14.352-35.318 3.477-1.774-1.606-1.996-1.549-4.277 1.102-3.22 3.744-3.136 4.011 2.345 7.499 15.24 9.697 36.122 7.919 43.981-3.743 1.783-2.645 2.269-4.765 2.269-9.89 0-9.12-4.174-13.196-19.09-18.643-17.456-6.375-19.91-8.105-19.91-14.038 0-10.277 16.932-13.143 29.397-4.976 2.459 1.611 2.616 1.575 5.039-1.18 3.457-3.931 3.386-4.064-3.976-7.51-8.399-3.93-20.597-4.875-27.054-2.096m56.728-.949c-.816.272-1.134 10.032-1.134 34.794V607h9v-34.5c0-18.975-.338-34.558-.75-34.629-2.142-.368-6.12-.414-7.116-.082m109.862.044c-.635.213-.996 12.794-.996 34.75V607h49v-8h-19.75l-19.75.001.131-11.251.13-11.25 15.178-.276 15.179-.277-.309-3.547-.309-3.547-14.75.023-14.75.024v-10.368c0-5.703-.273-11.08-.607-11.95-.54-1.409 1.493-1.582 18.56-1.582h19.168l-.311-3.53-.31-3.531-22.254-.219c-12.24-.121-22.703-.07-23.25.113m67.254-.069-2.25.375V607h9v-27c0-14.85.338-26.997.75-26.992.412.004 10.2 12.15 21.75 26.992l21 26.984 4.5-.242 4.5-.242.263-34.25c.208-27.034-.003-34.264-1-34.317-.695-.038-2.726-.259-4.513-.492l-3.25-.424v27.575c0 15.319-.388 27.427-.874 27.241-.947-.361-5.085-5.533-27.068-33.833-7.903-10.175-14.718-18.896-15.144-19.38-.889-1.01-4.388-1.401-7.664-.856m100.679.548c-31.014 8.74-34.681 51.948-5.546 65.347 5.521 2.539 7.189 2.815 17.117 2.827 12.922.016 16.165-.929 24.671-7.19l6.187-4.555-3.349-2.734-3.35-2.734-4.266 3.257c-17.779 13.571-44.435 4.989-46.947-15.115-3.393-27.158 23.779-42.373 46.509-26.043l4.685 3.366 2.68-1.952c3.606-2.627 3.363-3.726-1.665-7.51-9.834-7.402-24.98-10.274-36.726-6.964M1541 571.883V607h49v-8h-40v-23h31v-6.948l-15.25-.276-15.25-.276-.282-11.75-.281-11.75H1587v-7l-20.75-.014c-11.412-.007-21.763-.285-23-.616l-2.25-.603v35.116m78.728-33.556c-11.208 3.486-17.105 15.623-11.809 24.307 3.475 5.7 7.455 7.929 26.581 14.884 17.335 6.303 13.794 21.732-4.988 21.732-6.664 0-14.21-2.678-18.256-6.479l-2.269-2.132-2.993 2.867-2.992 2.867 2.078 2.213c6.385 6.796 25.175 10.559 35.374 7.084 9.587-3.266 14.546-9.472 14.546-18.203 0-9.29-4.787-13.557-22.308-19.882-12.553-4.532-15.437-6.283-16.714-10.152-3.796-11.502 13.529-16.822 27.651-8.49l3.81 2.249 2.865-3.206 2.864-3.206-3.099-1.884c-8.634-5.251-21.783-7.231-30.341-4.569M1238 572.5V607l12.75-.006c33.414-.015 48.64-10.813 48.64-34.494 0-23.955-13.907-34.5-45.495-34.5H1238v34.5m-853-13.361v14.14l11.275-.498c16.635-.734 21.725-4.129 21.725-14.493 0-9.853-5.985-13.273-23.25-13.282L385 545v14.139m215.698-12.695c-30.259 10.793-21.635 52.93 10.795 52.743 24.193-.139 36.746-27.47 20.776-45.233-7.229-8.041-20.94-11.302-31.571-7.51M672 559.139v14.14l11.428-.504c17.125-.756 23.311-5.084 22.245-15.566-.893-8.778-7.245-12.155-22.923-12.187L672 545v14.139m337.945-13.494c-.03.47-.09 6.705-.133 13.855l-.079 13 10.883-.037c8.76-.03 11.652-.42 14.819-2 10.261-5.118 10.986-17.976 1.306-23.155-3.508-1.876-26.69-3.315-26.796-1.663M1247 571.892V599h10.025c24.614 0 38.374-14.823 32.408-34.913-3.65-12.29-13.483-18.248-31.183-18.893l-11.25-.41v27.108m-338.953 2.297c-9.768 6.583-9.509 18.988.497 23.832 6.424 3.11 16.445 2.238 21.521-1.873l2.225-1.802-6.395-6.897a9895.89 9895.89 0 0 1-10.402-11.238l-4.007-4.339-3.439 2.317" fill-rule="evenodd" data-astro-cid-jyqqxfiv></path> </svg> <!-- Example SVGs --> <svg viewBox="0 0 24 24" data-astro-cid-jyqqxfiv> <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44a23.476 23.476 0 0 0-3.107-.534A23.892 23.892 0 0 0 12.769 4.7c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442a22.73 22.73 0 0 0-3.113.538 15.02 15.02 0 0 1-.254-1.42c-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87a25.64 25.64 0 0 1-4.412.005 26.64 26.64 0 0 1-1.183-1.86c-.372-.64-.71-1.29-1.018-1.946a25.17 25.17 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25.245 25.245 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933a25.952 25.952 0 0 0-1.345-2.32zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493a23.966 23.966 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23.142 23.142 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39a25.819 25.819 0 0 0 1.341-2.338zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143a22.005 22.005 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295a1.185 1.185 0 0 1-.553-.132c-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" data-astro-cid-jyqqxfiv></path> </svg> <svg viewBox="0 0 24 24" data-astro-cid-jyqqxfiv> <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" data-astro-cid-jyqqxfiv></path> </svg> <svg viewBox="0 0 24 24" data-astro-cid-jyqqxfiv> <path d="M21.362 9.354H12V.396a.396.396 0 0 0-.716-.233L2.203 12.424l-.401.562a1.04 1.04 0 0 0 .836 1.659H12v8.959a.396.396 0 0 0 .716.233l9.081-12.261.401-.562a1.04 1.04 0 0 0-.836-1.66z" data-astro-cid-jyqqxfiv></path> </svg> <svg viewBox="0 0 24 24" data-astro-cid-jyqqxfiv> <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z" data-astro-cid-jyqqxfiv></path> </svg> <svg viewBox="0 0 24 24" data-astro-cid-jyqqxfiv> <path d="M 0 94.621094 L 375 94.621094 L 375 257.371094 L 0 257.371094 Z M 0 94.621094 " data-astro-cid-jyqqxfiv></path> </svg> <svg viewBox="0 0 24 24" data-astro-cid-jyqqxfiv> <path d="M24 1.61h-9.94L12 5.16 9.94 1.61H0l12 20.78ZM12 14.08 5.16 2.23h4.43L12 6.41l2.41-4.18h4.43Z" data-astro-cid-jyqqxfiv></path> </svg> <svg viewBox="0 0 24 24" data-astro-cid-jyqqxfiv> <path d="M9.931 12.645h4.138l-2.07-4.908m0-7.737L.68 3.982l1.726 14.771L12 24l9.596-5.242L23.32 3.984 11.999.001zm7.064 18.31h-2.638l-1.422-3.503H8.996l-1.422 3.504h-2.64L12 2.65z" data-astro-cid-jyqqxfiv></path> </svg> <svg viewBox="0 0 24 24" data-astro-cid-jyqqxfiv> <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" data-astro-cid-jyqqxfiv></path> </svg> <svg viewBox="0 0 24 24" data-astro-cid-jyqqxfiv> <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" data-astro-cid-jyqqxfiv></path> </svg> <svg viewBox="0 0 24 24" data-astro-cid-jyqqxfiv> <path d="M23.15 2.587 18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" data-astro-cid-jyqqxfiv></path> </svg> <svg viewBox="0 0 24 24" data-astro-cid-jyqqxfiv> <path d="m8.286 10.578.512-8.657a.306.306 0 0 1 .247-.282L17.377.006a.306.306 0 0 1 .353.385l-1.558 5.403a.306.306 0 0 0 .352.385l2.388-.46a.306.306 0 0 1 .332.438l-6.79 13.55-.123.19a.294.294 0 0 1-.252.14c-.177 0-.35-.152-.305-.369l1.095-5.301a.306.306 0 0 0-.388-.355l-1.433.435a.306.306 0 0 1-.389-.354l.69-3.375a.306.306 0 0 0-.37-.36l-2.32.536a.306.306 0 0 1-.374-.316zm14.976-7.926L17.284 3.74l-.544 1.887 2.077-.4a.8.8 0 0 1 .84.369.8.8 0 0 1 .034.783L12.9 19.93l-.013.025-.015.023-.122.19a.801.801 0 0 1-.672.37.826.826 0 0 1-.634-.302.8.8 0 0 1-.16-.67l1.029-4.981-1.12.34a.81.81 0 0 1-.86-.262.802.802 0 0 1-.165-.67l.63-3.08-2.027.468a.808.808 0 0 1-.768-.233.81.81 0 0 1-.217-.6l.389-6.57-7.44-1.33a.612.612 0 0 0-.64.906L11.58 23.691a.612.612 0 0 0 1.066-.004l11.26-20.135a.612.612 0 0 0-.644-.9z" data-astro-cid-jyqqxfiv></path> </svg> <svg viewBox="0 0 24 24" data-astro-cid-jyqqxfiv> <path d="M23.546 10.93 13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187" data-astro-cid-jyqqxfiv></path> </svg> <svg viewBox="0 0 24 24" data-astro-cid-jyqqxfiv> <path d="M12 10.406A1.594 1.594 0 0 0 10.406 12 1.594 1.594 0 0 0 12 13.594 1.594 1.594 0 0 0 13.594 12 1.594 1.594 0 0 0 12 10.406Zm5.499-4.33a2.998 2.998 0 0 1 .643.054 1.668 1.668 0 0 1 .48.172 1.085 1.085 0 0 1 .29.235 1.032 1.032 0 0 1 .185.315 1.454 1.454 0 0 1 .084.452c.007.195-.015.398-.058.603-.054.261-.14.521-.244.778-.137.334-.304.66-.49.978-.245.417-.52.818-.817 1.207-.145.191-.3.376-.455.561-.22-.238-.443-.472-.673-.7a23.61 23.61 0 0 0-2.05-1.797l-.23.296.23-.296-.018-.014-.461.592.018.014a22.864 22.864 0 0 1 1.984 1.74c.241.237.475.48.703.73-.099.108-.194.22-.296.326-.099.104-.2.207-.301.308l.53.53c.106-.105.21-.212.313-.32.085-.088.164-.182.248-.272.065.078.135.152.198.231a13.317 13.317 0 0 1 .909 1.262c.211.336.404.681.564 1.036a5.23 5.23 0 0 1 .293.806 3.019 3.019 0 0 1 .102.637c.008.178-.007.351-.05.508-.034.123-.087.239-.157.338h-.001c-.068.098-.157.186-.26.256-.121.083-.264.146-.418.191-.188.054-.39.081-.6.09-.266.01-.538-.01-.814-.05-.357-.051-.713-.134-1.067-.238-.464-.137-.92-.307-1.369-.5h-.001c-.584-.253-1.153-.543-1.71-.86l-.025-.015c.578-.377 1.144-.77 1.686-1.194l-.21-.27.211.27.018-.015-.463-.59-.017.014c-.695.542-1.418 1.047-2.168 1.505a18.53 18.53 0 0 1-1.827.983c-.473.219-.954.415-1.444.576a8.68 8.68 0 0 1-1.142.296c-.286.052-.571.086-.853.09-.222.003-.438-.013-.643-.055-.175-.036-.338-.092-.48-.172-.111-.063-.21-.142-.29-.234-.079-.091-.142-.199-.185-.315-.051-.137-.078-.292-.084-.453a2.54 2.54 0 0 1 .058-.603c.055-.261.14-.52.245-.777a7.704 7.704 0 0 1 .49-.978 12.09 12.09 0 0 1 1.271-1.767c.232.251.469.497.712.737a23.645 23.645 0 0 0 2.02 1.765l.461-.591a22.9 22.9 0 0 1-1.955-1.709c-.254-.25-.501-.506-.741-.769.099-.108.195-.219.295-.325.103-.107.206-.213.31-.317l-.53-.53c-.108.108-.215.218-.321.328-.085.089-.165.183-.248.273-.055-.066-.114-.128-.169-.195-.329-.406-.638-.827-.916-1.263-.214-.338-.408-.683-.571-1.04-.126-.275-.233-.555-.308-.838-.057-.215-.094-.428-.102-.637a1.67 1.67 0 0 1 .05-.507c.034-.124.087-.239.157-.339h.001c.068-.098.158-.186.26-.256a1.446 1.446 0 0 1 .419-.19c.187-.055.389-.082.599-.09a4.545 4.545 0 0 1 .814.048 7.708 7.708 0 0 1 1.067.24 12.092 12.092 0 0 1 1.369.5 17.248 17.248 0 0 1 1.736.874 24.003 24.003 0 0 0-1.694 1.202l.462.59c.683-.534 1.393-1.031 2.13-1.484.594-.363 1.203-.697 1.83-.99.474-.222.956-.42 1.448-.583a8.816 8.816 0 0 1 1.146-.303c.298-.056.595-.092.887-.096Zm-.01-.75h-.001c-.346.005-.684.047-1.014.108a9.546 9.546 0 0 0-1.245.329 14.202 14.202 0 0 0-1.529.616c-.583.272-1.146.582-1.696.91-.121-.073-.243-.145-.367-.215-.577-.329-1.171-.632-1.785-.897-.472-.203-.955-.385-1.455-.531-.38-.112-.772-.204-1.172-.262-.309-.044-.626-.068-.95-.055-.254.01-.516.043-.776.117-.218.064-.436.156-.636.294a1.774 1.774 0 0 0-.717 1.014c-.068.247-.087.497-.077.737a3.728 3.728 0 0 0 .127.798 6.016 6.016 0 0 0 .351.959 9.548 9.548 0 0 0 .62 1.128 14.203 14.203 0 0 0 .967 1.335c.08.098.166.19.248.286-.189.222-.375.446-.552.679-.311.408-.604.834-.867 1.282a8.44 8.44 0 0 0-.538 1.075 5.28 5.28 0 0 0-.283.908c-.053.249-.083.512-.073.782a2.182 2.182 0 0 0 .13.688v.001a1.775 1.775 0 0 0 .81.94 2.403 2.403 0 0 0 .697.253 3.699 3.699 0 0 0 .805.07 5.97 5.97 0 0 0 .977-.102l.001-.001a9.412 9.412 0 0 0 1.24-.32c.523-.173 1.031-.38 1.526-.61.599-.278 1.178-.593 1.742-.93.121.072.243.144.366.214a17.99 17.99 0 0 0 1.785.898 12.832 12.832 0 0 0 1.455.53c.38.112.772.204 1.172.262a5.284 5.284 0 0 0 .95.056c.254-.01.516-.044.776-.118.218-.063.436-.156.636-.294a1.775 1.775 0 0 0 .717-1.014c.068-.248.087-.497.077-.736-.011-.277-.06-.544-.127-.799-.085-.322-.202-.629-.335-.923-.178-.393-.387-.767-.612-1.127-.294-.466-.618-.908-.959-1.333-.09-.111-.188-.216-.28-.324.189-.222.374-.447.552-.679.311-.409.604-.835.867-1.283a8.441 8.441 0 0 0 .538-1.075 5.277 5.277 0 0 0 .283-.907c.053-.25.083-.513.073-.783-.007-.226-.045-.46-.13-.688v-.001a1.775 1.775 0 0 0-.81-.94c-.224-.126-.462-.204-.697-.252a3.7 3.7 0 0 0-.805-.07ZM12 0l10.392 6v12L12 24 1.607 18V6Z" data-astro-cid-jyqqxfiv></path> </svg> <svg viewBox="0 0 24 24" data-astro-cid-jyqqxfiv> <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" data-astro-cid-jyqqxfiv></path> </svg> <svg viewBox="0 0 24 24" data-astro-cid-jyqqxfiv> <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" data-astro-cid-jyqqxfiv></path> </svg> <svg viewBox="0 0 24 24" data-astro-cid-jyqqxfiv> <path d="M23.15 2.587 18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" data-astro-cid-jyqqxfiv></path> </svg> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2234 574" data-astro-cid-jyqqxfiv> <path d="M204.09 1.049C135.754 9.616 67.068 68.48 27.482 152.405-2.812 216.63-8.133 284.173 12.704 340 45.42 427.654 143.07 454.988 227 399.984 332.599 330.78 383.884 175.172 334.529 73.718 309.4 22.061 259.267-5.868 204.09 1.049m805.91.076c-15.588 1.798-32.967 7.568-46 15.271-55.52 32.819-54.205 95.144 2.57 121.75l8.788 4.118-12.429 4.374C920.078 161.72 880.254 189.765 859 219.829c-48.924 69.201-27.323 152.4 49.5 190.66 89.661 44.654 218.609 8.146 256.429-72.6 17.805-38.015 8.411-85.054-21.829-109.309-3.361-2.696-5.976-5.037-5.81-5.203.165-.166 5.455-.775 11.755-1.355 75.282-6.923 119.261-51.303 105.933-106.898-10.455-43.61-58.612-64.55-94.745-41.196-27.585 17.829-36.635 61.405-12.752 61.405 11.033 0 14.547-8.32 10.437-24.707-3.317-13.226.173-20.685 12.814-27.385 35.401-18.764 72.378 11.528 63.757 52.23-4.434 20.933-17.31 34.969-38.839 42.341-16.37 5.604-22.892 6.284-69.15 7.203-70.244 1.395-93.786 7.67-119.875 31.948-30.545 28.426-31.217 81.068-1.249 97.915 23.522 13.223 60.434 5.266 64.754-13.96 3.357-14.942-18.089-22.313-26.697-9.175-2.938 4.484-10.682 12.334-13.714 13.902-7.089 3.666-17.723.814-23.615-6.335-20.917-25.376-4.045-62.877 34.151-75.903 16.903-5.765 43.413-7.259 59.745-3.367 36.296 8.649 59.469 41.779 53.72 76.802-6.419 39.105-33.877 68.23-78.308 83.063-59.282 19.791-131.379-.25-160.736-44.681-29.601-44.801-24.322-100.624 12.997-137.43 26.397-26.035 52.184-39.382 114.624-59.328 28.006-8.946 29.582-10.383 19.049-17.36-5.027-3.33-5.893-3.311-17.346.378-26.232 8.451-48.127 8.817-61.5 1.029-40.915-23.827-19.538-91.437 33.169-104.907 26.899-6.874 45.503 1.159 60.331 26.051 8.505 14.279 14.437 18.276 22.265 15.006 12.83-5.361 11.705-20.979-2.468-34.236C1076.601 6.47 1042.933-2.674 1010 1.125m458.5-.537c-59.561 8.564-110.084 42.687-151.7 102.457-52.108 74.841-69.037 160.903-45.466 231.135 28.565 85.111 117.596 118.836 199.666 75.634 101.902-53.642 165.019-195.048 135.952-304.588-14.471-54.535-52.146-93.125-100.376-102.814C1499.495.99 1474.151-.224 1468.5.588M2051 2.063c-2.475.37-8.1 1.614-12.5 2.765-14.472 3.786-32.37 5.986-61.876 7.605-4.883.268-8.98.617-9.106.777-.44.559-3.518 10.154-3.518 10.968 0 .452 5.063.833 11.25.846 18.743.04 23.6 2.363 24.499 11.717.594 6.179-.602 10.786-15.254 58.759-6.384 20.9-13.798 45.2-16.476 54-8.341 27.408-54.132 177.351-58.11 190.285-9.983 32.455-12.054 54.145-6.322 66.215 6.116 12.881 18.063 21.113 33.645 23.183 31.575 4.194 60.221-20.056 82.615-69.934 5.261-11.72 5.362-11.249-2.399-11.249-6.42 0-6.574.062-7.627 3.083-11.725 33.636-41.575 65.137-57.543 60.728-14.801-4.087-14.881-22.223-.292-65.811 8.659-25.871 9.669-29.179 83.972-275 11.055-36.575 20.293-67.048 20.528-67.718.613-1.75-.41-1.977-5.486-1.219M199.866 16.382C136.574 33.14 85.469 125.532 67.326 256c-2.502 17.994-2.536 69.071-.056 83.97 6.458 38.796 27.82 68.126 53.599 73.59 70.437 14.93 133.275-64.295 161.059-203.06 18.364-91.722 10.977-158.485-20.323-183.668-14.936-12.017-39.878-16.239-61.739-10.45m1263.634-.725c-51.964 11.086-97.606 75.639-122.37 173.073-22.204 87.357-21.137 159.218 2.896 195.149 15.958 23.857 27.79 30.619 53.474 30.564 33.129-.072 58.437-14.63 83.611-48.098 51.545-68.526 85.123-219.629 65.827-296.225-10.843-43.046-41.909-63.324-83.438-54.463M434.456 163.49c-22 4.733-47.326 26.862-66.83 58.394-3.094 5.002-5.626 9.324-5.626 9.605 0 .281 3.099.511 6.886.511h6.886l4.08-6.867c19.252-32.406 43.417-48.205 46.729-30.552.906 4.828-1.041 11.583-36.426 126.419-17.541 56.925-31.7 103.837-31.465 104.25.785 1.375 42.948.896 44.066-.5.55-.687 4.027-11.15 7.726-23.25 31.924-104.424 60.019-161.971 97.807-200.336 23.2-23.554 45.691-26.801 51.327-7.412 3.11 10.698.561 19.878-28.121 101.26-22.916 65.022-27.979 80.359-29.6 89.667-4.869 27.964 8.049 44.897 34.105 44.707 25.896-.19 47.659-12.886 66.655-38.886 5.038-6.895 15.345-24.163 15.345-25.708 0-.436-3.284-.792-7.297-.792h-7.298l-7.952 12.149c-20.451 31.241-42.103 43.535-49.556 28.137-2.991-6.176-3.824-3.145 23.603-85.797 13.504-40.694 26.151-79.389 28.105-85.989 6.549-22.124 5.704-37.819-2.714-50.425-10.249-15.348-34.772-23.136-55.391-17.59-27.549 7.41-58.847 42.102-85.718 95.015-3.911 7.7-7.276 13.506-7.479 12.902-.203-.604 2.091-8.479 5.097-17.5 6.857-20.58 11.362-38.372 13.14-51.902 3.818-29.035-7.808-44.303-30.084-39.51m335.7-.327c-40.355 4.686-94.899 55.031-122.761 113.311-20.58 43.048-25.005 88.638-11.36 117.026 4.526 9.415 11.312 17.875 18.965 23.643 40.087 30.216 94.613 4.495 128.029-60.393L790.11 343h-14.867l-5.173 10.15c-19.112 37.495-43.584 59.107-66.826 59.015-30.076-.118-39.572-27.259-26.94-77l3.196-12.585 15.5-6.827c71.474-31.48 109.982-61.891 120.611-95.253 11.307-35.488-9.339-61.532-45.455-57.337m934.611-.04c-22.997 3.211-50.091 27.49-72.68 65.127l-2.25 3.75 7.331-.012 7.332-.012 3.309-6.023c21.336-38.843 55.098-53.186 45.787-19.453-.759 2.75-16.053 52.638-33.988 110.863C1641.674 375.588 1627 423.83 1627 424.568c0 1.076 3.874 1.341 19.602 1.341 27.769 0 23.97 2.633 31.4-21.755 32.568-106.905 64.354-171.214 102.241-206.851 19.483-18.326 39.721-21.338 46.686-6.95 5.46 11.28 3.868 17.241-30.837 115.478-19.761 55.935-24.222 69.798-26.101 81.11-4.936 29.715 14.404 47.451 45.509 41.736 27.707-5.092 49.456-23.66 67.85-57.927l3.623-6.75-7.737.047-7.736.048-7.5 11.652c-17.757 27.589-37.424 41.101-47.16 32.402-6.911-6.176-7.234-4.807 21.639-91.649 28.387-85.377 29.968-90.513 31.412-102.073 3.822-30.595-16.143-51.864-48.46-51.626-32.967.244-67.906 34.692-100.356 98.949-2.847 5.637-5.652 10.25-6.233 10.25-.61 0-.756-.739-.345-1.75 7.111-17.498 16.916-54.382 18.685-70.284 2.865-25.768-7.887-39.709-28.415-36.843m375.696-.033c-20.868 2.649-36.969 24.36-43.893 59.189-3.764 18.936-3.793 23.139-.162 23.553 6.182.705 9.592-.655 9.592-3.827 0-5.38 4.107-24.24 7.011-32.199 10.944-29.987 31.901-27.358 40.905 5.132 15.258 55.06 1.908 198.835-23.061 248.357-14.444 28.646-62.545 69.126-90.499 76.159-12.246 3.081-25.334 1.785-49.856-4.938-22.339-6.124-40.504-.671-43.055 12.924-4.555 24.281 34.814 33.864 77.796 18.936 27.662-9.607 48.533-24.105 89.242-61.991 86.889-80.864 151.969-171.86 171.405-239.663 15.124-52.759 8.758-98.293-14.262-102.026-11.12-1.803-20.678 11.556-17.721 24.768.641 2.864 3.905 10.119 7.254 16.122 12.731 22.822 14.311 36.933 7.264 64.884-8.868 35.173-38.199 87.613-72.396 129.437-8.258 10.1-10.7 12.062-9.758 7.843.276-1.238 1.929-8.282 3.673-15.654 14.278-60.36 16.8-143.679 5.529-182.608-8.662-29.917-30.463-47.513-55.008-44.398M758.5 180.828c-25.498 12.057-53.358 56.796-70.615 113.396-1.798 5.899-2.933 11.061-2.521 11.473.961.961 14.328-6.173 27.136-14.484 52.681-34.182 83.822-78.779 72.124-103.29-3.764-7.888-16.902-11.456-26.124-7.095" fill-rule="evenodd" data-astro-cid-jyqqxfiv></path> </svg> <!-- Add more SVGs as needed --> </div> <script type="module">
      const hero = document.getElementById('icons')
      const svgs = Array.from(hero.querySelectorAll('svg'))

      const w = window.innerWidth
      const h = window.innerHeight

      function animateBackgroundIcons() {
        const availableSvgs = svgs.filter((svg) => !svg.isAnimating)
        const svgToAnimate =
          availableSvgs[Math.floor(Math.random() * availableSvgs.length)]
        if (!svgToAnimate) return

        svgToAnimate.addEventListener(
          'animationend',
          () => {
            svgToAnimate.classList.remove('animate-moving-background')
            svgToAnimate.removeAttribute('style')
            svgToAnimate.isAnimating = false
          },
          { once: true },
        )

        svgToAnimate.setAttribute(
          'style',
          \`top: \${Math.floor(Math.random() * h)}px;
         left: \${Math.floor(Math.random() * w)}px;\`,
        )

        svgToAnimate.classList.add('animate-moving-background')
        svgToAnimate.isAnimating = true
      }

      setInterval(animateBackgroundIcons, 2000)
      animateBackgroundIcons()
    <\/script> </body> </html>`,
          ],
          [
            '<html lang="en" data-astro-cid-jyqqxfiv> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Animate SVG Icons</title>',
            `</head> <body data-astro-cid-jyqqxfiv> <div id="icons" data-astro-cid-jyqqxfiv> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 826" data-astro-cid-jyqqxfiv> <path fill="#085da7" d="M1682.585 222.046c-40.793 6.368-63.111 30.875-60.19 66.091 2.582 31.132 22.646 46.739 73.72 57.344 46.601 9.676 59.019 17.085 61.398 36.636 5.741 47.165-64.027 62.875-132.744 29.891l-7.832-3.76.281 11.066.282 11.067 6 2.43c25.757 10.434 71.139 15.506 97.151 10.859 40.602-7.255 62.395-29.833 62.332-64.58-.066-36.204-15.927-49.707-73.483-62.554-50.257-11.219-61.009-18.453-60.993-41.036.012-15.456 5.778-25.053 19.11-31.804 24.426-12.369 68.176-8.067 100.259 9.859 2.407 1.345 4.432 2.446 4.5 2.447.068.001-.101-5.061-.376-11.25l-.5-11.252-9.5-3.293c-21.824-7.563-58.863-11.37-79.415-8.161M319.16 224.713c-.523.983-5.086 11.012-10.142 22.287-5.056 11.275-10.728 23.803-12.605 27.839-1.877 4.037-3.413 7.491-3.413 7.677 0 .186-1.629 3.858-3.621 8.161-3.614 7.809-30.514 67.202-43.513 96.073a90918.286 90918.286 0 0 1-13.967 31c-3.906 8.663-7.94 17.663-8.965 20l-1.863 4.25h19.704l6.221-14.25c7.258-16.626 6.338-15.434 16.284-21.097 33.445-19.043 77.094-19.401 115.902-.949 11.418 5.429 11.73 5.665 13.782 10.435 1.155 2.684 3.82 8.588 5.923 13.121 2.102 4.532 4.143 9.252 4.535 10.49.701 2.214.98 2.25 17.204 2.25 9.071 0 16.288-.337 16.04-.75-.249-.413-6.847-14.925-14.663-32.25s-17.484-38.7-21.485-47.5c-11.608-25.528-48.219-106.588-55.554-123l-6.704-15-9.075-.287c-7.871-.249-9.201-.05-10.025 1.5M425 223.316c0 .847-2.176 12.403-2.623 13.934-.482 1.647 1.939 1.75 41.056 1.75H505v203h31V239h41.5c37.742 0 41.5-.148 41.5-1.635 0-.899-.528-4.499-1.173-8L616.654 223h-95.827c-52.705 0-95.827.142-95.827.316M657 332.5V442h124.792l1.354-7.75 1.354-7.75-48.75-.259-48.75-.26V223h-30v109.5m249.632-106.75c-.781 1.512-4.884 10.4-9.117 19.75l-9.509 21c-2.31 5.1-14.112 31.194-23.745 52.5-4.103 9.075-10.291 22.8-13.75 30.5-3.46 7.7-7.716 17.105-9.458 20.9-1.742 3.795-7.455 16.395-12.695 28a15061.95 15061.95 0 0 1-14.443 31.893c-2.703 5.936-4.915 11.015-4.915 11.286 0 .272 4.353.365 9.673.207l9.672-.286 6.578-14.797 6.577-14.796 6.707-3.886c30.818-17.855 72.395-20.859 106.482-7.694 22.266 8.599 23.42 9.609 31.331 27.423l6.328 14.25h15.933c12.344 0 15.821-.282 15.437-1.25-.447-1.124-25.738-57.116-60.868-134.75a26805.847 26805.847 0 0 1-25.123-55.725L925.5 223.049l-8.724-.024c-8.517-.024-8.758.04-10.144 2.725M1066 332.5V442h18v-89.083c0-51.415.375-88.943.887-88.75.488.183 17.2 19.233 37.138 42.333 19.938 23.1 38.608 44.7 41.49 48 2.881 3.3 21.076 24.337 40.433 46.75l35.194 40.75H1263V223h-18v88.5c0 52.775-.369 88.5-.914 88.5-.921 0-9.626-9.723-31.785-35.5-6.619-7.7-20.982-24.364-31.918-37.031-59.42-68.826-76.573-88.651-83.207-96.169l-7.324-8.3H1066v109.5m235.854-101.75-1.354 7.75 41.75.261 41.75.261V442h30V239h83.839l-.831-3.25c-.458-1.787-1.124-5.387-1.481-8l-.65-4.75H1303.208l-1.354 7.75M1535 332.5V442h31V223h-31v109.5m-633.475-57.795c-4.282 9.787-17.221 39.313-28.754 65.614-11.532 26.3-20.797 47.988-20.589 48.196.208.208 4.415-1.244 9.348-3.228 30.606-12.305 68.603-12.065 98.419.623 4.041 1.72 7.574 2.9 7.852 2.622.278-.277-5.941-15.023-13.818-32.768A68741.073 68741.073 0 0 1 925.279 291c-7.909-17.875-14.738-32.858-15.174-33.295-.437-.437-4.298 7.213-8.58 17M292.834 323.25c-15.739 35.887-28.464 65.413-28.279 65.613.186.199 4.134-1.268 8.775-3.261 30.284-13.008 75.406-12.201 102.546 1.834 4.327 2.237 5.334 1.697 3.609-1.936-.783-1.65-5.52-12.225-10.528-23.5-35.149-79.148-44.277-99.769-45.04-101.75-.477-1.238-1.227-2.25-1.667-2.25-.44 0-13.677 29.363-29.416 65.25m95.916 214.53-12.75.28V607h9v-27l7.25.025 7.25.026 9.572 13.224 9.571 13.225 5.703.301 5.703.3-10.109-13.633c-5.56-7.498-9.958-13.741-9.774-13.873.184-.132 2.451-1.024 5.037-1.982 15.974-5.918 17.112-29.226 1.795-36.752-6.225-3.058-10.092-3.48-28.248-3.081m79.5-.019-22.25.277V607h49v-8h-39v-23h30l.001-3.75.002-3.75-15.002.3-15.001.3V545H493.121l-.311-3.673c-.17-2.02-.76-3.711-1.31-3.758-.55-.047-11.012.04-23.25.192m56.269.778c-6.923 2.637-13.519 10.71-13.519 16.546 0 8.384 6.359 13.881 23.5 20.316 13.584 5.099 16.5 7.482 16.5 13.48 0 11.762-19.935 14.135-34.087 4.057l-3-2.136-2.457 2.65c-3.354 3.62-3.239 3.904 3.202 7.933 12.893 8.064 32.776 7.313 41.044-1.551 9.664-10.361 4.913-24.207-10.202-29.73-22.602-8.258-24.5-9.467-24.5-15.606 0-9.956 16.389-12.983 28.791-5.318l3.406 2.105 2.366-2.892c3.293-4.027 3.239-4.123-4.268-7.636-8.097-3.789-20.052-4.779-26.776-2.218m74.41-.234c-31.644 8.965-35.334 51.61-5.651 65.321 8.927 4.123 26.268 4.265 34.722.284 27.777-13.081 27.777-50.982 0-63.666-6.674-3.048-21.635-4.046-29.071-1.939m77.821-.527-13.75.278V607h9v-27h14.811l7.344 10.082c4.04 5.545 8.364 11.62 9.61 13.5 2.13 3.215 2.597 3.418 7.872 3.418 4.347 0 5.386-.281 4.62-1.25-5.493-6.946-18.257-24.935-18.257-25.729 0-.562.569-1.021 1.265-1.021 6.677 0 14.558-8.858 15.427-17.339 1.899-18.539-7.567-24.497-37.942-23.883m75.203-.011-24.547.267.406 3.483.407 3.483H751v62h4.25l4.25.001V545.5l11.308-.283 11.309-.284-.309-3.61c-.366-4.291 2.825-3.911-29.855-3.556m57.605.725c-8.425 3.001-12.713 8.077-13.278 15.717-.701 9.474 4.599 14.783 20.391 20.427 16.378 5.854 20.548 9.369 18.902 15.931-2.672 10.645-23.6 11.947-34.33 2.135l-2.256-2.063-2.986 2.86c-3.743 3.587-2.738 5.028 6.772 9.71 23.214 11.428 49.197-3.266 40.323-22.804-2.312-5.091-5.38-7.01-20.596-12.885-12.847-4.959-17.5-8.279-17.5-12.485 0-9.582 13.963-13.354 26.378-7.126l6.122 3.072 2.25-2.546c2.947-3.335 2.857-3.901-1-6.258-7.899-4.828-21.252-6.513-29.192-3.685m101.618-.354c-4.88 1.406-11.607 8.579-12.929 13.787-1.093 4.307-1.082 4.337 3.479 9.214 2.517 2.69 4.396 5.023 4.175 5.184-15.342 11.153-18.122 23.611-7.676 34.405 6.922 7.152 22.87 8.414 34.15 2.702l5.774-2.923 2.702 3.31c2.492 3.054 3.088 3.286 7.675 2.997l4.974-.314-5.26-5.607-5.259-5.607 2.457-4.396c1.351-2.418 2.862-6.982 3.358-10.143l.901-5.747h-3.848c-2.613 0-3.849.445-3.849 1.385 0 2.9-3.356 11.615-4.473 11.615-1.621 0-31.527-32.538-31.527-34.302 0-2.362 4.118-6.85 7.636-8.319 6.718-2.807 15.239-.896 19.359 4.342 1.637 2.081 2.366 2.325 4.66 1.561 4.146-1.382 3.966-3.03-.834-7.629-6.419-6.151-16.164-8.246-25.645-5.515m90.812-.305c-.625.211-.988 12.984-.988 34.75V607h3.933c4.914 0 5.008-.287 4.939-15l-.054-11.5 7.014-.292c8.065-.336 6.176-1.925 19.671 16.542l7.49 10.25h5.004c2.751 0 5.003-.236 5.003-.525 0-.288-4.107-6.026-9.126-12.75-10.161-13.612-10.799-14.725-8.441-14.725 9.66 0 18.055-13.397 15.511-24.752-2.932-13.082-8.73-16.045-32.206-16.455-9.22-.161-17.207-.143-17.75.04m90.012-.063-20.5.27.182 34.23.181 34.23 24.069.268 24.068.268V599h-40.066l.283-11.25.283-11.25 15.25-.276 15.25-.276V569h-13.918c-18.498 0-17.082 1.045-17.082-12.607V545h38v-3.5c0-1.925-.338-3.533-.75-3.574-.412-.041-1.65-.154-2.75-.25-1.1-.097-11.225-.055-22.5.094m57.406.968c-8.85 3.809-12.406 8.422-12.406 16.093 0 10.142 4.932 14.503 24 21.219 11.465 4.039 15 7.028 15 12.686 0 12.058-23.3 14.352-35.318 3.477-1.774-1.606-1.996-1.549-4.277 1.102-3.22 3.744-3.136 4.011 2.345 7.499 15.24 9.697 36.122 7.919 43.981-3.743 1.783-2.645 2.269-4.765 2.269-9.89 0-9.12-4.174-13.196-19.09-18.643-17.456-6.375-19.91-8.105-19.91-14.038 0-10.277 16.932-13.143 29.397-4.976 2.459 1.611 2.616 1.575 5.039-1.18 3.457-3.931 3.386-4.064-3.976-7.51-8.399-3.93-20.597-4.875-27.054-2.096m56.728-.949c-.816.272-1.134 10.032-1.134 34.794V607h9v-34.5c0-18.975-.338-34.558-.75-34.629-2.142-.368-6.12-.414-7.116-.082m109.862.044c-.635.213-.996 12.794-.996 34.75V607h49v-8h-19.75l-19.75.001.131-11.251.13-11.25 15.178-.276 15.179-.277-.309-3.547-.309-3.547-14.75.023-14.75.024v-10.368c0-5.703-.273-11.08-.607-11.95-.54-1.409 1.493-1.582 18.56-1.582h19.168l-.311-3.53-.31-3.531-22.254-.219c-12.24-.121-22.703-.07-23.25.113m67.254-.069-2.25.375V607h9v-27c0-14.85.338-26.997.75-26.992.412.004 10.2 12.15 21.75 26.992l21 26.984 4.5-.242 4.5-.242.263-34.25c.208-27.034-.003-34.264-1-34.317-.695-.038-2.726-.259-4.513-.492l-3.25-.424v27.575c0 15.319-.388 27.427-.874 27.241-.947-.361-5.085-5.533-27.068-33.833-7.903-10.175-14.718-18.896-15.144-19.38-.889-1.01-4.388-1.401-7.664-.856m100.679.548c-31.014 8.74-34.681 51.948-5.546 65.347 5.521 2.539 7.189 2.815 17.117 2.827 12.922.016 16.165-.929 24.671-7.19l6.187-4.555-3.349-2.734-3.35-2.734-4.266 3.257c-17.779 13.571-44.435 4.989-46.947-15.115-3.393-27.158 23.779-42.373 46.509-26.043l4.685 3.366 2.68-1.952c3.606-2.627 3.363-3.726-1.665-7.51-9.834-7.402-24.98-10.274-36.726-6.964M1541 571.883V607h49v-8h-40v-23h31v-6.948l-15.25-.276-15.25-.276-.282-11.75-.281-11.75H1587v-7l-20.75-.014c-11.412-.007-21.763-.285-23-.616l-2.25-.603v35.116m78.728-33.556c-11.208 3.486-17.105 15.623-11.809 24.307 3.475 5.7 7.455 7.929 26.581 14.884 17.335 6.303 13.794 21.732-4.988 21.732-6.664 0-14.21-2.678-18.256-6.479l-2.269-2.132-2.993 2.867-2.992 2.867 2.078 2.213c6.385 6.796 25.175 10.559 35.374 7.084 9.587-3.266 14.546-9.472 14.546-18.203 0-9.29-4.787-13.557-22.308-19.882-12.553-4.532-15.437-6.283-16.714-10.152-3.796-11.502 13.529-16.822 27.651-8.49l3.81 2.249 2.865-3.206 2.864-3.206-3.099-1.884c-8.634-5.251-21.783-7.231-30.341-4.569M1238 572.5V607l12.75-.006c33.414-.015 48.64-10.813 48.64-34.494 0-23.955-13.907-34.5-45.495-34.5H1238v34.5m-853-13.361v14.14l11.275-.498c16.635-.734 21.725-4.129 21.725-14.493 0-9.853-5.985-13.273-23.25-13.282L385 545v14.139m215.698-12.695c-30.259 10.793-21.635 52.93 10.795 52.743 24.193-.139 36.746-27.47 20.776-45.233-7.229-8.041-20.94-11.302-31.571-7.51M672 559.139v14.14l11.428-.504c17.125-.756 23.311-5.084 22.245-15.566-.893-8.778-7.245-12.155-22.923-12.187L672 545v14.139m337.945-13.494c-.03.47-.09 6.705-.133 13.855l-.079 13 10.883-.037c8.76-.03 11.652-.42 14.819-2 10.261-5.118 10.986-17.976 1.306-23.155-3.508-1.876-26.69-3.315-26.796-1.663M1247 571.892V599h10.025c24.614 0 38.374-14.823 32.408-34.913-3.65-12.29-13.483-18.248-31.183-18.893l-11.25-.41v27.108m-338.953 2.297c-9.768 6.583-9.509 18.988.497 23.832 6.424 3.11 16.445 2.238 21.521-1.873l2.225-1.802-6.395-6.897a9895.89 9895.89 0 0 1-10.402-11.238l-4.007-4.339-3.439 2.317" fill-rule="evenodd" data-astro-cid-jyqqxfiv></path> </svg> <!-- Example SVGs --> <svg viewBox="0 0 24 24" data-astro-cid-jyqqxfiv> <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44a23.476 23.476 0 0 0-3.107-.534A23.892 23.892 0 0 0 12.769 4.7c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442a22.73 22.73 0 0 0-3.113.538 15.02 15.02 0 0 1-.254-1.42c-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87a25.64 25.64 0 0 1-4.412.005 26.64 26.64 0 0 1-1.183-1.86c-.372-.64-.71-1.29-1.018-1.946a25.17 25.17 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25.245 25.245 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933a25.952 25.952 0 0 0-1.345-2.32zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493a23.966 23.966 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23.142 23.142 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39a25.819 25.819 0 0 0 1.341-2.338zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143a22.005 22.005 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295a1.185 1.185 0 0 1-.553-.132c-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" data-astro-cid-jyqqxfiv></path> </svg> <svg viewBox="0 0 24 24" data-astro-cid-jyqqxfiv> <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" data-astro-cid-jyqqxfiv></path> </svg> <svg viewBox="0 0 24 24" data-astro-cid-jyqqxfiv> <path d="M21.362 9.354H12V.396a.396.396 0 0 0-.716-.233L2.203 12.424l-.401.562a1.04 1.04 0 0 0 .836 1.659H12v8.959a.396.396 0 0 0 .716.233l9.081-12.261.401-.562a1.04 1.04 0 0 0-.836-1.66z" data-astro-cid-jyqqxfiv></path> </svg> <svg viewBox="0 0 24 24" data-astro-cid-jyqqxfiv> <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z" data-astro-cid-jyqqxfiv></path> </svg> <svg viewBox="0 0 24 24" data-astro-cid-jyqqxfiv> <path d="M 0 94.621094 L 375 94.621094 L 375 257.371094 L 0 257.371094 Z M 0 94.621094 " data-astro-cid-jyqqxfiv></path> </svg> <svg viewBox="0 0 24 24" data-astro-cid-jyqqxfiv> <path d="M24 1.61h-9.94L12 5.16 9.94 1.61H0l12 20.78ZM12 14.08 5.16 2.23h4.43L12 6.41l2.41-4.18h4.43Z" data-astro-cid-jyqqxfiv></path> </svg> <svg viewBox="0 0 24 24" data-astro-cid-jyqqxfiv> <path d="M9.931 12.645h4.138l-2.07-4.908m0-7.737L.68 3.982l1.726 14.771L12 24l9.596-5.242L23.32 3.984 11.999.001zm7.064 18.31h-2.638l-1.422-3.503H8.996l-1.422 3.504h-2.64L12 2.65z" data-astro-cid-jyqqxfiv></path> </svg> <svg viewBox="0 0 24 24" data-astro-cid-jyqqxfiv> <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" data-astro-cid-jyqqxfiv></path> </svg> <svg viewBox="0 0 24 24" data-astro-cid-jyqqxfiv> <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" data-astro-cid-jyqqxfiv></path> </svg> <svg viewBox="0 0 24 24" data-astro-cid-jyqqxfiv> <path d="M23.15 2.587 18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" data-astro-cid-jyqqxfiv></path> </svg> <svg viewBox="0 0 24 24" data-astro-cid-jyqqxfiv> <path d="m8.286 10.578.512-8.657a.306.306 0 0 1 .247-.282L17.377.006a.306.306 0 0 1 .353.385l-1.558 5.403a.306.306 0 0 0 .352.385l2.388-.46a.306.306 0 0 1 .332.438l-6.79 13.55-.123.19a.294.294 0 0 1-.252.14c-.177 0-.35-.152-.305-.369l1.095-5.301a.306.306 0 0 0-.388-.355l-1.433.435a.306.306 0 0 1-.389-.354l.69-3.375a.306.306 0 0 0-.37-.36l-2.32.536a.306.306 0 0 1-.374-.316zm14.976-7.926L17.284 3.74l-.544 1.887 2.077-.4a.8.8 0 0 1 .84.369.8.8 0 0 1 .034.783L12.9 19.93l-.013.025-.015.023-.122.19a.801.801 0 0 1-.672.37.826.826 0 0 1-.634-.302.8.8 0 0 1-.16-.67l1.029-4.981-1.12.34a.81.81 0 0 1-.86-.262.802.802 0 0 1-.165-.67l.63-3.08-2.027.468a.808.808 0 0 1-.768-.233.81.81 0 0 1-.217-.6l.389-6.57-7.44-1.33a.612.612 0 0 0-.64.906L11.58 23.691a.612.612 0 0 0 1.066-.004l11.26-20.135a.612.612 0 0 0-.644-.9z" data-astro-cid-jyqqxfiv></path> </svg> <svg viewBox="0 0 24 24" data-astro-cid-jyqqxfiv> <path d="M23.546 10.93 13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187" data-astro-cid-jyqqxfiv></path> </svg> <svg viewBox="0 0 24 24" data-astro-cid-jyqqxfiv> <path d="M12 10.406A1.594 1.594 0 0 0 10.406 12 1.594 1.594 0 0 0 12 13.594 1.594 1.594 0 0 0 13.594 12 1.594 1.594 0 0 0 12 10.406Zm5.499-4.33a2.998 2.998 0 0 1 .643.054 1.668 1.668 0 0 1 .48.172 1.085 1.085 0 0 1 .29.235 1.032 1.032 0 0 1 .185.315 1.454 1.454 0 0 1 .084.452c.007.195-.015.398-.058.603-.054.261-.14.521-.244.778-.137.334-.304.66-.49.978-.245.417-.52.818-.817 1.207-.145.191-.3.376-.455.561-.22-.238-.443-.472-.673-.7a23.61 23.61 0 0 0-2.05-1.797l-.23.296.23-.296-.018-.014-.461.592.018.014a22.864 22.864 0 0 1 1.984 1.74c.241.237.475.48.703.73-.099.108-.194.22-.296.326-.099.104-.2.207-.301.308l.53.53c.106-.105.21-.212.313-.32.085-.088.164-.182.248-.272.065.078.135.152.198.231a13.317 13.317 0 0 1 .909 1.262c.211.336.404.681.564 1.036a5.23 5.23 0 0 1 .293.806 3.019 3.019 0 0 1 .102.637c.008.178-.007.351-.05.508-.034.123-.087.239-.157.338h-.001c-.068.098-.157.186-.26.256-.121.083-.264.146-.418.191-.188.054-.39.081-.6.09-.266.01-.538-.01-.814-.05-.357-.051-.713-.134-1.067-.238-.464-.137-.92-.307-1.369-.5h-.001c-.584-.253-1.153-.543-1.71-.86l-.025-.015c.578-.377 1.144-.77 1.686-1.194l-.21-.27.211.27.018-.015-.463-.59-.017.014c-.695.542-1.418 1.047-2.168 1.505a18.53 18.53 0 0 1-1.827.983c-.473.219-.954.415-1.444.576a8.68 8.68 0 0 1-1.142.296c-.286.052-.571.086-.853.09-.222.003-.438-.013-.643-.055-.175-.036-.338-.092-.48-.172-.111-.063-.21-.142-.29-.234-.079-.091-.142-.199-.185-.315-.051-.137-.078-.292-.084-.453a2.54 2.54 0 0 1 .058-.603c.055-.261.14-.52.245-.777a7.704 7.704 0 0 1 .49-.978 12.09 12.09 0 0 1 1.271-1.767c.232.251.469.497.712.737a23.645 23.645 0 0 0 2.02 1.765l.461-.591a22.9 22.9 0 0 1-1.955-1.709c-.254-.25-.501-.506-.741-.769.099-.108.195-.219.295-.325.103-.107.206-.213.31-.317l-.53-.53c-.108.108-.215.218-.321.328-.085.089-.165.183-.248.273-.055-.066-.114-.128-.169-.195-.329-.406-.638-.827-.916-1.263-.214-.338-.408-.683-.571-1.04-.126-.275-.233-.555-.308-.838-.057-.215-.094-.428-.102-.637a1.67 1.67 0 0 1 .05-.507c.034-.124.087-.239.157-.339h.001c.068-.098.158-.186.26-.256a1.446 1.446 0 0 1 .419-.19c.187-.055.389-.082.599-.09a4.545 4.545 0 0 1 .814.048 7.708 7.708 0 0 1 1.067.24 12.092 12.092 0 0 1 1.369.5 17.248 17.248 0 0 1 1.736.874 24.003 24.003 0 0 0-1.694 1.202l.462.59c.683-.534 1.393-1.031 2.13-1.484.594-.363 1.203-.697 1.83-.99.474-.222.956-.42 1.448-.583a8.816 8.816 0 0 1 1.146-.303c.298-.056.595-.092.887-.096Zm-.01-.75h-.001c-.346.005-.684.047-1.014.108a9.546 9.546 0 0 0-1.245.329 14.202 14.202 0 0 0-1.529.616c-.583.272-1.146.582-1.696.91-.121-.073-.243-.145-.367-.215-.577-.329-1.171-.632-1.785-.897-.472-.203-.955-.385-1.455-.531-.38-.112-.772-.204-1.172-.262-.309-.044-.626-.068-.95-.055-.254.01-.516.043-.776.117-.218.064-.436.156-.636.294a1.774 1.774 0 0 0-.717 1.014c-.068.247-.087.497-.077.737a3.728 3.728 0 0 0 .127.798 6.016 6.016 0 0 0 .351.959 9.548 9.548 0 0 0 .62 1.128 14.203 14.203 0 0 0 .967 1.335c.08.098.166.19.248.286-.189.222-.375.446-.552.679-.311.408-.604.834-.867 1.282a8.44 8.44 0 0 0-.538 1.075 5.28 5.28 0 0 0-.283.908c-.053.249-.083.512-.073.782a2.182 2.182 0 0 0 .13.688v.001a1.775 1.775 0 0 0 .81.94 2.403 2.403 0 0 0 .697.253 3.699 3.699 0 0 0 .805.07 5.97 5.97 0 0 0 .977-.102l.001-.001a9.412 9.412 0 0 0 1.24-.32c.523-.173 1.031-.38 1.526-.61.599-.278 1.178-.593 1.742-.93.121.072.243.144.366.214a17.99 17.99 0 0 0 1.785.898 12.832 12.832 0 0 0 1.455.53c.38.112.772.204 1.172.262a5.284 5.284 0 0 0 .95.056c.254-.01.516-.044.776-.118.218-.063.436-.156.636-.294a1.775 1.775 0 0 0 .717-1.014c.068-.248.087-.497.077-.736-.011-.277-.06-.544-.127-.799-.085-.322-.202-.629-.335-.923-.178-.393-.387-.767-.612-1.127-.294-.466-.618-.908-.959-1.333-.09-.111-.188-.216-.28-.324.189-.222.374-.447.552-.679.311-.409.604-.835.867-1.283a8.441 8.441 0 0 0 .538-1.075 5.277 5.277 0 0 0 .283-.907c.053-.25.083-.513.073-.783-.007-.226-.045-.46-.13-.688v-.001a1.775 1.775 0 0 0-.81-.94c-.224-.126-.462-.204-.697-.252a3.7 3.7 0 0 0-.805-.07ZM12 0l10.392 6v12L12 24 1.607 18V6Z" data-astro-cid-jyqqxfiv></path> </svg> <svg viewBox="0 0 24 24" data-astro-cid-jyqqxfiv> <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" data-astro-cid-jyqqxfiv></path> </svg> <svg viewBox="0 0 24 24" data-astro-cid-jyqqxfiv> <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" data-astro-cid-jyqqxfiv></path> </svg> <svg viewBox="0 0 24 24" data-astro-cid-jyqqxfiv> <path d="M23.15 2.587 18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" data-astro-cid-jyqqxfiv></path> </svg> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2234 574" data-astro-cid-jyqqxfiv> <path d="M204.09 1.049C135.754 9.616 67.068 68.48 27.482 152.405-2.812 216.63-8.133 284.173 12.704 340 45.42 427.654 143.07 454.988 227 399.984 332.599 330.78 383.884 175.172 334.529 73.718 309.4 22.061 259.267-5.868 204.09 1.049m805.91.076c-15.588 1.798-32.967 7.568-46 15.271-55.52 32.819-54.205 95.144 2.57 121.75l8.788 4.118-12.429 4.374C920.078 161.72 880.254 189.765 859 219.829c-48.924 69.201-27.323 152.4 49.5 190.66 89.661 44.654 218.609 8.146 256.429-72.6 17.805-38.015 8.411-85.054-21.829-109.309-3.361-2.696-5.976-5.037-5.81-5.203.165-.166 5.455-.775 11.755-1.355 75.282-6.923 119.261-51.303 105.933-106.898-10.455-43.61-58.612-64.55-94.745-41.196-27.585 17.829-36.635 61.405-12.752 61.405 11.033 0 14.547-8.32 10.437-24.707-3.317-13.226.173-20.685 12.814-27.385 35.401-18.764 72.378 11.528 63.757 52.23-4.434 20.933-17.31 34.969-38.839 42.341-16.37 5.604-22.892 6.284-69.15 7.203-70.244 1.395-93.786 7.67-119.875 31.948-30.545 28.426-31.217 81.068-1.249 97.915 23.522 13.223 60.434 5.266 64.754-13.96 3.357-14.942-18.089-22.313-26.697-9.175-2.938 4.484-10.682 12.334-13.714 13.902-7.089 3.666-17.723.814-23.615-6.335-20.917-25.376-4.045-62.877 34.151-75.903 16.903-5.765 43.413-7.259 59.745-3.367 36.296 8.649 59.469 41.779 53.72 76.802-6.419 39.105-33.877 68.23-78.308 83.063-59.282 19.791-131.379-.25-160.736-44.681-29.601-44.801-24.322-100.624 12.997-137.43 26.397-26.035 52.184-39.382 114.624-59.328 28.006-8.946 29.582-10.383 19.049-17.36-5.027-3.33-5.893-3.311-17.346.378-26.232 8.451-48.127 8.817-61.5 1.029-40.915-23.827-19.538-91.437 33.169-104.907 26.899-6.874 45.503 1.159 60.331 26.051 8.505 14.279 14.437 18.276 22.265 15.006 12.83-5.361 11.705-20.979-2.468-34.236C1076.601 6.47 1042.933-2.674 1010 1.125m458.5-.537c-59.561 8.564-110.084 42.687-151.7 102.457-52.108 74.841-69.037 160.903-45.466 231.135 28.565 85.111 117.596 118.836 199.666 75.634 101.902-53.642 165.019-195.048 135.952-304.588-14.471-54.535-52.146-93.125-100.376-102.814C1499.495.99 1474.151-.224 1468.5.588M2051 2.063c-2.475.37-8.1 1.614-12.5 2.765-14.472 3.786-32.37 5.986-61.876 7.605-4.883.268-8.98.617-9.106.777-.44.559-3.518 10.154-3.518 10.968 0 .452 5.063.833 11.25.846 18.743.04 23.6 2.363 24.499 11.717.594 6.179-.602 10.786-15.254 58.759-6.384 20.9-13.798 45.2-16.476 54-8.341 27.408-54.132 177.351-58.11 190.285-9.983 32.455-12.054 54.145-6.322 66.215 6.116 12.881 18.063 21.113 33.645 23.183 31.575 4.194 60.221-20.056 82.615-69.934 5.261-11.72 5.362-11.249-2.399-11.249-6.42 0-6.574.062-7.627 3.083-11.725 33.636-41.575 65.137-57.543 60.728-14.801-4.087-14.881-22.223-.292-65.811 8.659-25.871 9.669-29.179 83.972-275 11.055-36.575 20.293-67.048 20.528-67.718.613-1.75-.41-1.977-5.486-1.219M199.866 16.382C136.574 33.14 85.469 125.532 67.326 256c-2.502 17.994-2.536 69.071-.056 83.97 6.458 38.796 27.82 68.126 53.599 73.59 70.437 14.93 133.275-64.295 161.059-203.06 18.364-91.722 10.977-158.485-20.323-183.668-14.936-12.017-39.878-16.239-61.739-10.45m1263.634-.725c-51.964 11.086-97.606 75.639-122.37 173.073-22.204 87.357-21.137 159.218 2.896 195.149 15.958 23.857 27.79 30.619 53.474 30.564 33.129-.072 58.437-14.63 83.611-48.098 51.545-68.526 85.123-219.629 65.827-296.225-10.843-43.046-41.909-63.324-83.438-54.463M434.456 163.49c-22 4.733-47.326 26.862-66.83 58.394-3.094 5.002-5.626 9.324-5.626 9.605 0 .281 3.099.511 6.886.511h6.886l4.08-6.867c19.252-32.406 43.417-48.205 46.729-30.552.906 4.828-1.041 11.583-36.426 126.419-17.541 56.925-31.7 103.837-31.465 104.25.785 1.375 42.948.896 44.066-.5.55-.687 4.027-11.15 7.726-23.25 31.924-104.424 60.019-161.971 97.807-200.336 23.2-23.554 45.691-26.801 51.327-7.412 3.11 10.698.561 19.878-28.121 101.26-22.916 65.022-27.979 80.359-29.6 89.667-4.869 27.964 8.049 44.897 34.105 44.707 25.896-.19 47.659-12.886 66.655-38.886 5.038-6.895 15.345-24.163 15.345-25.708 0-.436-3.284-.792-7.297-.792h-7.298l-7.952 12.149c-20.451 31.241-42.103 43.535-49.556 28.137-2.991-6.176-3.824-3.145 23.603-85.797 13.504-40.694 26.151-79.389 28.105-85.989 6.549-22.124 5.704-37.819-2.714-50.425-10.249-15.348-34.772-23.136-55.391-17.59-27.549 7.41-58.847 42.102-85.718 95.015-3.911 7.7-7.276 13.506-7.479 12.902-.203-.604 2.091-8.479 5.097-17.5 6.857-20.58 11.362-38.372 13.14-51.902 3.818-29.035-7.808-44.303-30.084-39.51m335.7-.327c-40.355 4.686-94.899 55.031-122.761 113.311-20.58 43.048-25.005 88.638-11.36 117.026 4.526 9.415 11.312 17.875 18.965 23.643 40.087 30.216 94.613 4.495 128.029-60.393L790.11 343h-14.867l-5.173 10.15c-19.112 37.495-43.584 59.107-66.826 59.015-30.076-.118-39.572-27.259-26.94-77l3.196-12.585 15.5-6.827c71.474-31.48 109.982-61.891 120.611-95.253 11.307-35.488-9.339-61.532-45.455-57.337m934.611-.04c-22.997 3.211-50.091 27.49-72.68 65.127l-2.25 3.75 7.331-.012 7.332-.012 3.309-6.023c21.336-38.843 55.098-53.186 45.787-19.453-.759 2.75-16.053 52.638-33.988 110.863C1641.674 375.588 1627 423.83 1627 424.568c0 1.076 3.874 1.341 19.602 1.341 27.769 0 23.97 2.633 31.4-21.755 32.568-106.905 64.354-171.214 102.241-206.851 19.483-18.326 39.721-21.338 46.686-6.95 5.46 11.28 3.868 17.241-30.837 115.478-19.761 55.935-24.222 69.798-26.101 81.11-4.936 29.715 14.404 47.451 45.509 41.736 27.707-5.092 49.456-23.66 67.85-57.927l3.623-6.75-7.737.047-7.736.048-7.5 11.652c-17.757 27.589-37.424 41.101-47.16 32.402-6.911-6.176-7.234-4.807 21.639-91.649 28.387-85.377 29.968-90.513 31.412-102.073 3.822-30.595-16.143-51.864-48.46-51.626-32.967.244-67.906 34.692-100.356 98.949-2.847 5.637-5.652 10.25-6.233 10.25-.61 0-.756-.739-.345-1.75 7.111-17.498 16.916-54.382 18.685-70.284 2.865-25.768-7.887-39.709-28.415-36.843m375.696-.033c-20.868 2.649-36.969 24.36-43.893 59.189-3.764 18.936-3.793 23.139-.162 23.553 6.182.705 9.592-.655 9.592-3.827 0-5.38 4.107-24.24 7.011-32.199 10.944-29.987 31.901-27.358 40.905 5.132 15.258 55.06 1.908 198.835-23.061 248.357-14.444 28.646-62.545 69.126-90.499 76.159-12.246 3.081-25.334 1.785-49.856-4.938-22.339-6.124-40.504-.671-43.055 12.924-4.555 24.281 34.814 33.864 77.796 18.936 27.662-9.607 48.533-24.105 89.242-61.991 86.889-80.864 151.969-171.86 171.405-239.663 15.124-52.759 8.758-98.293-14.262-102.026-11.12-1.803-20.678 11.556-17.721 24.768.641 2.864 3.905 10.119 7.254 16.122 12.731 22.822 14.311 36.933 7.264 64.884-8.868 35.173-38.199 87.613-72.396 129.437-8.258 10.1-10.7 12.062-9.758 7.843.276-1.238 1.929-8.282 3.673-15.654 14.278-60.36 16.8-143.679 5.529-182.608-8.662-29.917-30.463-47.513-55.008-44.398M758.5 180.828c-25.498 12.057-53.358 56.796-70.615 113.396-1.798 5.899-2.933 11.061-2.521 11.473.961.961 14.328-6.173 27.136-14.484 52.681-34.182 83.822-78.779 72.124-103.29-3.764-7.888-16.902-11.456-26.124-7.095" fill-rule="evenodd" data-astro-cid-jyqqxfiv></path> </svg> <!-- Add more SVGs as needed --> </div> <script type="module">
      const hero = document.getElementById('icons')
      const svgs = Array.from(hero.querySelectorAll('svg'))

      const w = window.innerWidth
      const h = window.innerHeight

      function animateBackgroundIcons() {
        const availableSvgs = svgs.filter((svg) => !svg.isAnimating)
        const svgToAnimate =
          availableSvgs[Math.floor(Math.random() * availableSvgs.length)]
        if (!svgToAnimate) return

        svgToAnimate.addEventListener(
          'animationend',
          () => {
            svgToAnimate.classList.remove('animate-moving-background')
            svgToAnimate.removeAttribute('style')
            svgToAnimate.isAnimating = false
          },
          { once: true },
        )

        svgToAnimate.setAttribute(
          'style',
          \\\`top: \\\${Math.floor(Math.random() * h)}px;
         left: \\\${Math.floor(Math.random() * w)}px;\\\`,
        )

        svgToAnimate.classList.add('animate-moving-background')
        svgToAnimate.isAnimating = true
      }

      setInterval(animateBackgroundIcons, 2000)
      animateBackgroundIcons()
    <\/script> </body> </html>`,
          ],
        )),
      renderHead(),
    )
  },
  '/Users/hng/Documents/1C/astro-portfolio-main/src/components/sections/Technologies.astro',
  void 0,
)

const $$Astro$1 = createAstro('https://nest-port.de')
const $$Index = createComponent(
  ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots)
    Astro2.self = $$Index
    const propsStr = JSON.stringify(Astro2.props)
    const paramsStr = JSON.stringify(Astro2.params)
    return renderTemplate`${renderComponent($$result, 'vercel-speed-insights', 'vercel-speed-insights', { 'data-props': propsStr, 'data-params': paramsStr, 'data-pathname': Astro2.url.pathname })} `
  },
  '/Users/hng/Documents/1C/astro-portfolio-main/node_modules/@vercel/speed-insights/dist/astro/index.astro',
  void 0,
)

const $$Astro = createAstro('https://nest-port.de')
const $$BaseLayout = createComponent(
  ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro, $$props, $$slots)
    Astro2.self = $$BaseLayout
    const { title, description, ogImage } = Astro2.props
    return renderTemplate`<html lang="en"> ${renderComponent($$result, 'SpeedInsights', $$Index, {})}${renderComponent($$result, 'HeadSEO', $$HeadSEO, { title: title, description: description, ogImage: ogImage })}${renderComponent($$result, 'ViewTransitions', $$ViewTransitions, {})}${maybeRenderHead()}<body class="min-h-screen bg-background font-sans antialiased"> ${renderComponent($$result, 'Technologies', $$Technologies, {})} <div class="flex flex-col items-center justify-center"> ${renderComponent($$result, 'Header', $$Header, {})} ${renderSlot($$result, $$slots['default'])} ${renderComponent($$result, 'Footer', $$Footer, {})} </div> </body></html>`
  },
  '/Users/hng/Documents/1C/astro-portfolio-main/src/layouts/BaseLayout.astro',
  void 0,
)

const $$404 = createComponent(
  ($$result, $$props, $$slots) => {
    return renderTemplate`${renderComponent(
      $$result,
      'BaseLayout',
      $$BaseLayout,
      {
        title: '404 - Not Found',
        description: '404 Error \u2014 this page was not found',
      },
      {
        default: (
          $$result2,
        ) => renderTemplate` ${maybeRenderHead()}<main class="flex h-[80vh] flex-auto"> <div class="flex flex-col items-center justify-center px-8"> <img src="/me_hello.png" alt="404" class="mb-8 size-64"> <p class="text-sm text-muted-foreground">404</p> <h1 class="text-4xl font-extrabold tracking-tight lg:text-5xl">
Page not found
</h1> <p class="mb-4 leading-7 [&:not(:first-child)]:mt-6">
Sorry, we couldn't find the page you're looking for.
</p> <a href="/" rel="noreferrer"${addAttribute(buttonVariants(), 'class')}> Go back home</a> </div> </main> `,
      },
    )}`
  },
  '/Users/hng/Documents/1C/astro-portfolio-main/src/pages/404.astro',
  void 0,
)

const $$file =
  '/Users/hng/Documents/1C/astro-portfolio-main/src/pages/404.astro'
const $$url = '/404'

const _404 = /*#__PURE__*/ Object.freeze(
  /*#__PURE__*/ Object.defineProperty(
    {
      __proto__: null,
      default: $$404,
      file: $$file,
      url: $$url,
    },
    Symbol.toStringTag,
    { value: 'Module' },
  ),
)

export {
  $$BaseLayout as $,
  Button as B,
  _404 as _,
  buttonVariants as b,
  cn as c,
}
