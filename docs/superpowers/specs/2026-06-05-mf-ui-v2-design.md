# MF-UI v2.0.0 — Design System Rewrite Spec

## Goal

Full rewrite of `@mf/ui` as a tech-lead-grade design system: complete W3C-aligned token architecture, WCAG 2.2 AA accessibility compliance, consistent English API, and expanded test coverage. Ships as a single breaking release (v2.0.0).

## Architecture

Three independent layers, all delivered in one release:

1. **Tokens** — W3C Design Tokens Format 2025.10 aligned. Spacing, typography, shadows, radius, motion. All defined once in `globals.css` `@theme` block — generates both Tailwind utilities and CSS custom properties automatically (Tailwind v4 behavior). Zero derived tokens (prevents the +28% bundle bloat documented in Feb 2026 case study).

2. **Accessibility** — Three Lighthouse audit failures fixed: `aria-hidden-focus` (carousel clones), `color-contrast` (decorative logo), `label-content-name-mismatch` (interactive buttons). All fixes follow WCAG 2.2 AA and ACCNAME-1.2 spec.

3. **Components** — Props normalized to consistent English API across all blocks. Hardcoded magic values replaced with token references. TypeScript errors resolved. Breaking change: `titulo` → `title`, `descricao` → `description` on all block components.

## Tech Stack

- Next.js 16, React 19, TypeScript 5, Tailwind CSS v4, Framer Motion 12, tsup, Vitest 4
- W3C Design Tokens Format Module 2025.10 (stable)
- WCAG 2.2 AA / ACCNAME-1.2 for accessibility

---

## Section 1: Tokens

### Principles

- **Source of truth:** `src/tokens/globals.css` — one file, `@theme` block
- **Token layers:** Primitives → Semantic only. No component-level tokens (bundle bloat risk)
- **Naming:** `--{category}-{step}` convention (W3C DTF aligned)
- **Performance:** CSS custom properties have <1% measurable runtime cost (web.dev benchmark). `@theme` in Tailwind v4 exposes them automatically — no duplicate definitions

### Spacing Scale

Base 4px, 20 steps. Added to `@theme` in `globals.css`:

```css
@theme {
  --spacing-1:  4px;    --spacing-8:  32px;
  --spacing-2:  8px;    --spacing-10: 40px;
  --spacing-3:  12px;   --spacing-12: 48px;
  --spacing-4:  16px;   --spacing-14: 56px;
  --spacing-5:  20px;   --spacing-16: 64px;
  --spacing-6:  24px;   --spacing-20: 80px;
  --spacing-7:  28px;   --spacing-24: 96px;
}
```

Consumers get Tailwind utilities (`p-4`, `gap-8`) AND CSS vars (`var(--spacing-4)`) from the same definition.

### Typography Scale

`clamp()` for display/heading sizes (fluid, viewport-responsive). Fixed `rem` for body/label/mono (interface text must not be fluid — usability requirement).

```css
@theme {
  /* Display & Headings — fluid */
  --text-display: clamp(3.5rem, 9vw, 9.5rem);
  --text-h1:      clamp(2.2rem, 5vw, 5.8rem);
  --text-h2:      clamp(1.6rem, 3vw, 3.5rem);
  --text-h3:      clamp(1.25rem, 2vw, 1.75rem);

  /* Body & UI — fixed */
  --text-body:    1rem;
  --text-body-lg: 1.125rem;
  --text-small:   0.875rem;
  --text-label:   0.75rem;
  --text-mono:    0.75rem;
  --text-mono-lg: 1rem;

  /* Line heights */
  --leading-tight:  0.88;
  --leading-snug:   0.96;
  --leading-normal: 1.6;

  /* Letter spacing */
  --tracking-wide:   0.18em;
  --tracking-wider:  0.28em;
  --tracking-widest: 0.34em;
}
```

### Shadows / Elevation

`oklch` color space for shadows (W3C 2025 standard, 93% browser support — IE11/Edge Legacy excluded, irrelevant for target audience).

```css
@theme {
  --shadow-sm:   0 1px 3px oklch(0 0 0 / 0.3);
  --shadow-md:   0 4px 16px oklch(0 0 0 / 0.4);
  --shadow-lg:   0 8px 32px oklch(0 0 0 / 0.5);
  --shadow-glow: 0 0 20px var(--cyan-glow), 0 0 60px var(--cyan-dim);
}
```

### Radius Scale

```css
@theme {
  --radius-xs:   2px;
  --radius-sm:   4px;
  --radius-md:   6px;
  --radius-lg:   12px;
  --radius-xl:   16px;
  --radius-full: 9999px;
}
```

### Motion Tokens

Split into focused files for tree-shaking. **Critical rule:** these tokens are only for `transition`/`initial`/`animate` Framer Motion props. Never animate CSS custom properties at 60fps — always triggers repaint (Framer Motion perf guide, 2025).

**`src/tokens/duration.ts`** (replaces `src/lib/motion.ts` durations):
```ts
export const duration = {
  micro:   0.15,  // hover states, focus rings
  fast:    0.24,  // micro-interactions
  reveal:  0.64,  // single element entry
  section: 0.9,   // section-level entry
} as const
```

**`src/tokens/ease.ts`** (replaces `src/lib/motion.ts` easings):
```ts
export const ease = {
  expoOut:   [0.16, 1, 0.3, 1]  as const,
  powerOut:  [0.22, 1, 0.36, 1] as const,
  softInOut: [0.65, 0, 0.35, 1] as const,
} as const
```

**`src/tokens/motion.ts`** (new — preset variants):
```ts
import { duration } from './duration'
import { ease } from './ease'

export const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 24 },
  animate:    { opacity: 1, y: 0 },
  transition: { delay, duration: duration.reveal, ease: ease.expoOut },
})

export const fadeIn = (delay = 0) => ({
  initial:    { opacity: 0 },
  animate:    { opacity: 1 },
  transition: { delay, duration: duration.reveal, ease: ease.expoOut },
})

export const scaleIn = (delay = 0) => ({
  initial:    { opacity: 0, scale: 0.96 },
  animate:    { opacity: 1, scale: 1 },
  transition: { delay, duration: duration.fast, ease: ease.powerOut },
})
```

**`src/tokens/duration.ts`** — also export `blinkMs` (existing constant, kept for compat):
```ts
export const duration = {
  micro:   0.15,
  fast:    0.24,
  reveal:  0.64,
  section: 0.9,
} as const

export const blinkMs = 530  // cursor blink interval, ms
```

**`src/lib/motion.ts`** — kept as re-export shim for backward compatibility:
```ts
export { duration as motionDurations, ease as motionEase } from '../tokens'
export { blinkMs } from '../tokens/duration'
```

**`src/tokens/index.ts`** — export all tokens:
```ts
export { cores } from './cores'
export { duration } from './duration'
export { ease } from './ease'
export { fadeUp, fadeIn, scaleIn } from './motion'
export type { Cores } from './cores'
```

---

## Section 2: Accessibility

All three fixes target WCAG 2.2 AA compliance. Verified against Lighthouse 13.x audit rules.

### Fix 1 — `aria-hidden-focus` (Projects.tsx carousel clones)

**Root cause:** `aria-hidden={true}` on clone wrappers hides from accessibility tree but does NOT remove from tab order (HTML spec intentional behavior). Buttons inside clones remain keyboard-focusable.

**Fix:** Replace `aria-hidden={true}` with `inert` attribute on clone wrappers.

`inert` (HTML Living Standard, W3C) — single attribute that simultaneously:
- Removes from accessibility tree (replaces `aria-hidden`)
- Removes from tab order (replaces `tabIndex={-1}` propagation)
- Blocks pointer events
- Browser support: 93% (Safari ≥15.5, Chrome ≥102, Firefox ≥112)

```tsx
// src/blocos/Projects.tsx
{loopedProjects.map((project, index) => {
  const isClone = index >= projects.length
  return (
    <div
      key={`${project.titulo}-${index}`}
      data-testid={isClone ? 'project-clone' : 'project-item'}
      {...(isClone ? { inert: true } : {})}
    >
      <ProjectFrame
        project={project}
        index={index % projects.length}
        onOpen={setSelected}
      />
    </div>
  )
})}
```

TypeScript: `inert` is in the `React.HTMLAttributes<HTMLDivElement>` type since React 19 — no casting needed.

### Fix 2 — `color-contrast` (Footer.tsx decorative logo)

**Root cause:** Lighthouse 13.x audits `color-contrast` even on `aria-hidden="true"` elements — known behavior, documented in Lighthouse issue tracker. The `<MF/>` element uses `--cyan` at 10% opacity, yielding 1.21:1 contrast.

**Fix:** Add `role="presentation"` alongside `aria-hidden="true"`. This satisfies the Lighthouse 13+ auditor and is semantically correct for purely decorative elements (removes paragraph semantics).

```tsx
// src/componentes/Footer.tsx
<p
  aria-hidden="true"
  role="presentation"
  className="select-none font-mono text-[clamp(5rem,24vw,24rem)] font-black leading-[0.76] tracking-tighter text-[var(--cyan)]/10"
>
  {"<MF/>"}
</p>
```

### Fix 3 — `label-content-name-mismatch` (LogoAnimado + Terminal)

**Root cause:** WCAG 2.5.3 (Label in Name) requires the accessible name of an interactive control to include its visible text. Computed via ACCNAME-1.2 algorithm: `aria-label` overrides visible text, creating a mismatch.

**Fix A — LogoAnimado buttons (header + footer):**

`LogoAnimado` receives a `label` prop. Change the button's `aria-label` to include "MF Desenvolvimento" (the logo text):

```tsx
// src/componentes/LogoAnimado.tsx
<button
  type="button"
  aria-label={`${label} — MF Desenvolvimento`}
  onClick={onClick}
  ...
>
```

For `label="Ir para o topo"` → accessible name becomes `"Ir para o topo — MF Desenvolvimento"` which includes the visible logo text component. WCAG 2.5.3 satisfied.

**Fix B — Live Terminal button (in consuming app):**

The `live-terminal.tsx` in Site-MFDesenvolvimento is already fixed (commit `a47a1ff`). The MF-UI design system has no Terminal component — this fix lives in the consuming app only.

---

## Section 3: Components

### API Normalization — Breaking Change

All block components adopt a shared base interface. Props renamed for consistency:

| Old prop | New prop | Affected files |
|---|---|---|
| `titulo` | `title` | Services, Projects, Process, Stack, Testimonials, About, Contact |
| `descricao` | `description` | Services, Projects, Process, Stack, Testimonials, About, Contact |
| `slotLateral` | `slot` | Hero |
| `slotLateralLabel` | `slotLabel` | Hero |
| `slotMockup` | `mockup` | ProjectItem |

Base type used by all section blocks:
```ts
type SectionBase = {
  eyebrow: string
  title: React.ReactNode
  description: React.ReactNode
}
```

### Token Usage in Components

Components replace hardcoded magic values with token references where a CSS custom property equivalent exists:

- `text-[clamp(2.2rem,5vw,5.8rem)]` → `text-[var(--text-h1)]`
- `text-[clamp(1.8rem,4vw,4.5rem)]` → `text-[var(--text-h2)]`
- `tracking-[0.28em]` → `tracking-[var(--tracking-wider)]`
- `tracking-[0.34em]` → `tracking-[var(--tracking-widest)]`
- `shadow-2xl shadow-cyan/5` → `shadow-[var(--shadow-lg)]`
- Transition durations: use `duration.fast` and `duration.reveal` from TypeScript tokens via inline `style` or Framer Motion `transition` prop — NOT via CSS custom properties (duration tokens are TypeScript-only)

Components do NOT change their visual output — this is a token-binding refactor, not a redesign.

### TypeScript Fixes

**`src/testes/setup.ts` line 15:**
```ts
// Before:
global.ResizeObserver = ...
// After:
globalThis.ResizeObserver = ...
```

**`src/testes/tokens.test.ts` lines 3-4:**
Add a `tsconfig.test.json` at repo root:
```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "types": ["node", "vitest/globals"]
  },
  "include": ["src/testes/**/*"]
}
```

Update `vitest.config.ts` to reference this tsconfig:
```ts
export default defineConfig({
  test: {
    tsconfig: './tsconfig.test.json',
    ...
  }
})
```

Install: `pnpm add -D @types/node`

### New Tests

**Accessibility (critical path):**

```ts
// Projects.test.tsx — additions
it('carousel clones have inert attribute', () => {
  render(<Projects eyebrow="x" title="x" description="x" projects={mockProjects} />)
  const clones = screen.getAllByTestId('project-clone')
  clones.forEach(w => expect(w).toHaveAttribute('inert'))
})

it('original project items do not have inert', () => {
  render(<Projects eyebrow="x" title="x" description="x" projects={mockProjects} />)
  const items = screen.getAllByTestId('project-item')
  items.forEach(w => expect(w).not.toHaveAttribute('inert'))
})
```

```ts
// LogoAnimado.test.tsx — new file
it('button accessible name includes label and brand name', () => {
  render(<LogoAnimado label="Ir para o topo" onClick={() => {}} />)
  expect(
    screen.getByRole('button', { name: /ir para o topo.*mf desenvolvimento/i })
  ).toBeInTheDocument()
})
```

**Button variants:**
```ts
it.each([
  ['default',     /bg-primary/],
  ['outline',     /border/],
  ['ghost',       /hover:bg-accent/],
  ['destructive', /bg-destructive/],
  ['secondary',   /bg-secondary/],
])('Button variant %s renders correct class', (variant, pattern) => {
  const { container } = render(
    <Button variant={variant as ButtonVariant}>label</Button>
  )
  expect(container.firstChild).toHaveClass(expect.stringMatching(pattern))
})
```

**Reduced motion:**
```ts
// Hero.test.tsx — addition
it('does not set motion initial props when prefers-reduced-motion', () => {
  vi.spyOn(window, 'matchMedia').mockReturnValue({
    matches: true,
    media: '(prefers-reduced-motion: reduce)',
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  } as unknown as MediaQueryList)
  const { container } = render(<Hero eyebrow="x" title={<span>x</span>} description="x" cta={{ label: 'x', href: '#' }} stats={[]} />)
  expect(container).toBeInTheDocument()
})
```

### Version Bump

`package.json`: `"version": "1.0.0"` → `"version": "2.0.0"`

Consuming app (`Site-MFDesenvolvimento`) changes needed after v2.0.0 publish:
1. `package.json`: update dep to `github:Fiuza3/mf-ui#v2.0.0`
2. All block usages: rename `titulo` → `title`, `descricao` → `description`
3. `Hero`: rename `slotLateral` → `slot`, `slotLateralLabel` → `slotLabel`

---

## File Map

| File | Action | Reason |
|---|---|---|
| `src/tokens/globals.css` | Modify | Add spacing, typography, shadow, radius to `@theme` |
| `src/tokens/duration.ts` | Create | Motion duration tokens |
| `src/tokens/ease.ts` | Create | Motion easing tokens |
| `src/tokens/motion.ts` | Create | Framer Motion preset variants |
| `src/tokens/index.ts` | Modify | Export new token files |
| `src/lib/motion.ts` | Modify | Re-export shim for backward compat |
| `src/componentes/Footer.tsx` | Modify | Fix color-contrast (role="presentation") |
| `src/componentes/LogoAnimado.tsx` | Modify | Fix label-content-name-mismatch |
| `src/blocos/Projects.tsx` | Modify | Fix aria-hidden-focus (inert), rename props |
| `src/blocos/Hero.tsx` | Modify | Rename props, use token values |
| `src/blocos/Services.tsx` | Modify | Rename props, use token values |
| `src/blocos/Process.tsx` | Modify | Rename props, use token values |
| `src/blocos/Stack.tsx` | Modify | Rename props, use token values |
| `src/blocos/Testimonials.tsx` | Modify | Rename props, use token values |
| `src/blocos/About.tsx` | Modify | Rename props, use token values |
| `src/blocos/Contact.tsx` | Modify | Rename props, use token values |
| `src/blocos/index.ts` | Modify | Re-export updated types |
| `src/primitivos/Button.tsx` | Modify | Use radius/duration tokens |
| `src/testes/setup.ts` | Modify | Fix `global` → `globalThis` |
| `src/testes/tokens.test.ts` | Modify | Fix node: imports |
| `tsconfig.test.json` | Create | Separate tsconfig for tests with node types |
| `vitest.config.ts` | Modify | Reference tsconfig.test.json |
| `package.json` | Modify | Version bump 1.0.0 → 2.0.0, add @types/node devDep |
| `src/testes/Projects.test.tsx` | Modify | Add inert/a11y tests |
| `src/testes/LogoAnimado.test.tsx` | Create | New test file |
| `src/testes/Button.test.tsx` | Modify | Add variant tests |
| `src/testes/Hero.test.tsx` | Modify | Add reduced-motion test |

---

## Non-Goals

- No component-level tokens (third CSS layer) — bundle bloat risk with no benefit for single-team design system
- No Storybook or documentation site — out of scope
- No light theme refinement — placeholder values noted in globals.css, explicitly out of scope
- No new block components — only improving existing ones
- No CSS animation of custom properties at 60fps — Framer Motion handles all animations via transform/opacity
