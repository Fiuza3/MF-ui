# MF-UI — Primitivos Financeiros (v2.1.0) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Adicionar 6 primitivos ao MF-UI — `Select`, `Checkbox`, `Switch`, `Tabs`, `Skeleton`, `Table` — com identidade visual idêntica ao site MFDesenvolvimento (dark: cyan `#3DF2E0`, fundo `#0B0F14`).

**Architecture:** Cada primitivo segue o padrão já estabelecido no MF-UI: wrapper fino sobre Radix UI (ou HTML nativo para Table/Skeleton), estilizado com Tailwind v4 usando os CSS custom properties do `globals.css`. Todos exportados via `src/primitivos/index.ts` e `src/index.ts`. Build via tsup. TDD com Vitest + @testing-library/react.

**Tech Stack:** React 19, Radix UI (`@radix-ui/react-select`, `@radix-ui/react-checkbox`, `@radix-ui/react-switch`, `@radix-ui/react-tabs`), Tailwind v4, CVA, Vitest 4, tsup.

---

## Mapa de Arquivos

```
src/primitivos/
  Select.tsx          ← novo — wrapper Radix Select com ícone ChevronDown
  Checkbox.tsx        ← novo — wrapper Radix Checkbox com ícone Check
  Switch.tsx          ← novo — wrapper Radix Switch
  Tabs.tsx            ← novo — wrapper Radix Tabs (Root + List + Trigger + Content)
  Skeleton.tsx        ← novo — div com animate-pulse, sem Radix
  Table.tsx           ← novo — table HTML semântico com subcomponentes
  index.ts            ← modificar — adicionar 6 novos exports

src/testes/
  Select.test.tsx     ← novo
  Checkbox.test.tsx   ← novo
  Switch.test.tsx     ← novo
  Tabs.test.tsx       ← novo
  Skeleton.test.tsx   ← novo
  Table.test.tsx      ← novo

package.json          ← modificar — adicionar 4 novas peerDeps + devDeps Radix
```

---

## Task 1: Instalar dependências Radix + bump versão

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Instalar os 4 pacotes Radix novos**

```bash
cd C:\Users\Marcus\Documents\Github\MFDESENVOLVIMENTO\MF-UI
pnpm add -D @radix-ui/react-select @radix-ui/react-checkbox @radix-ui/react-switch @radix-ui/react-tabs
```

Expected: 4 pacotes adicionados ao devDependencies.

- [ ] **Step 2: Adicionar como peerDependencies no package.json**

Abrir `package.json` e adicionar dentro de `"peerDependencies"`:

```json
"@radix-ui/react-checkbox": ">=1.1",
"@radix-ui/react-select": ">=2.1",
"@radix-ui/react-switch": ">=1.1",
"@radix-ui/react-tabs": ">=1.1"
```

- [ ] **Step 3: Bump versão para 2.1.0**

Em `package.json`, alterar `"version": "2.0.0"` para `"version": "2.1.0"`.

- [ ] **Step 4: Verificar que os testes existentes ainda passam**

```bash
cd C:\Users\Marcus\Documents\Github\MFDESENVOLVIMENTO\MF-UI
pnpm test
```

Expected: `43 tests passed`.

- [ ] **Step 5: Commit**

```bash
cd C:\Users\Marcus\Documents\Github\MFDESENVOLVIMENTO\MF-UI
git add package.json pnpm-lock.yaml
git commit -m "chore: adiciona dependências Radix para primitivos financeiros e bump para v2.1.0"
```

---

## Task 2: Select

**Files:**
- Create: `src/primitivos/Select.tsx`
- Create: `src/testes/Select.test.tsx`
- Modify: `src/primitivos/index.ts`

- [ ] **Step 1: Escrever o teste (Red)**

Criar `src/testes/Select.test.tsx`:

```tsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../primitivos/Select";

describe("Select", () => {
  it("renderiza o trigger com placeholder", () => {
    render(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Selecionar categoria" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="moradia">Moradia</SelectItem>
        </SelectContent>
      </Select>
    );
    expect(screen.getByText("Selecionar categoria")).toBeTruthy();
  });

  it("renderiza o trigger com aria-expanded=false quando fechado", () => {
    render(
      <Select>
        <SelectTrigger aria-label="categoria">
          <SelectValue placeholder="Categoria" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="alimentacao">Alimentação</SelectItem>
        </SelectContent>
      </Select>
    );
    const trigger = screen.getByRole("combobox");
    expect(trigger.getAttribute("aria-expanded")).toBe("false");
  });
});
```

- [ ] **Step 2: Rodar para confirmar falha**

```bash
cd C:\Users\Marcus\Documents\Github\MFDESENVOLVIMENTO\MF-UI
pnpm test -- Select
```

Expected: FAIL — `Cannot find module '../primitivos/Select'`

- [ ] **Step 3: Implementar Select.tsx**

Criar `src/primitivos/Select.tsx`:

```tsx
'use client'

import * as React from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from 'lucide-react'

import { cn } from '../lib/cn'

function Select({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />
}

function SelectGroup({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />
}

function SelectValue({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />
}

function SelectTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger>) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      className={cn(
        'border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*=\'size-\'])]:size-4 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 aria-invalid:border-destructive dark:bg-input/30 dark:aria-invalid:ring-destructive/40 flex h-9 w-full items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2',
        className,
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="size-4 opacity-50 shrink-0" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn('flex cursor-default items-center justify-center py-1', className)}
      {...props}
    >
      <ChevronUpIcon className="size-4" />
    </SelectPrimitive.ScrollUpButton>
  )
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn('flex cursor-default items-center justify-center py-1', className)}
      {...props}
    >
      <ChevronDownIcon className="size-4" />
    </SelectPrimitive.ScrollDownButton>
  )
}

function SelectContent({
  className,
  children,
  position = 'popper',
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border shadow-md',
          position === 'popper' &&
            'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
          className,
        )}
        position={position}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            'p-1',
            position === 'popper' &&
              'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]',
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn('text-muted-foreground px-2 py-1.5 text-xs', className)}
      {...props}
    />
  )
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        'focus:bg-accent focus:text-accent-foreground [&_svg:not([class*=\'size-\'])]:size-4 relative flex w-full cursor-default select-none items-center gap-2 rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0',
        className,
      )}
      {...props}
    >
      <span className="absolute right-2 flex size-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn('bg-border pointer-events-none -mx-1 my-1 h-px', className)}
      {...props}
    />
  )
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}
```

- [ ] **Step 4: Rodar para confirmar passa**

```bash
cd C:\Users\Marcus\Documents\Github\MFDESENVOLVIMENTO\MF-UI
pnpm test -- Select
```

Expected: `2 tests passed`

- [ ] **Step 5: Adicionar export ao index.ts**

Em `src/primitivos/index.ts`, adicionar no final:

```ts
export * from "./Select";
```

- [ ] **Step 6: Commit**

```bash
cd C:\Users\Marcus\Documents\Github\MFDESENVOLVIMENTO\MF-UI
git add src/primitivos/Select.tsx src/testes/Select.test.tsx src/primitivos/index.ts
git commit -m "feat(primitivos): adiciona Select com wrapper Radix"
```

---

## Task 3: Checkbox

**Files:**
- Create: `src/primitivos/Checkbox.tsx`
- Create: `src/testes/Checkbox.test.tsx`
- Modify: `src/primitivos/index.ts`

- [ ] **Step 1: Escrever o teste (Red)**

Criar `src/testes/Checkbox.test.tsx`:

```tsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Checkbox } from "../primitivos/Checkbox";

describe("Checkbox", () => {
  it("renderiza com role=checkbox", () => {
    render(<Checkbox aria-label="recorrente" />);
    expect(screen.getByRole("checkbox")).toBeTruthy();
  });

  it("renderiza desabilitado com atributo disabled", () => {
    render(<Checkbox aria-label="recorrente" disabled />);
    const el = screen.getByRole("checkbox");
    expect(el.hasAttribute("disabled") || el.getAttribute("data-disabled") !== null).toBe(true);
  });
});
```

- [ ] **Step 2: Rodar para confirmar falha**

```bash
cd C:\Users\Marcus\Documents\Github\MFDESENVOLVIMENTO\MF-UI
pnpm test -- Checkbox
```

Expected: FAIL — `Cannot find module '../primitivos/Checkbox'`

- [ ] **Step 3: Implementar Checkbox.tsx**

Criar `src/primitivos/Checkbox.tsx`:

```tsx
'use client'

import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { CheckIcon } from 'lucide-react'

import { cn } from '../lib/cn'

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        'peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-current transition-none"
      >
        <CheckIcon className="size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
```

- [ ] **Step 4: Rodar para confirmar passa**

```bash
cd C:\Users\Marcus\Documents\Github\MFDESENVOLVIMENTO\MF-UI
pnpm test -- Checkbox
```

Expected: `2 tests passed`

- [ ] **Step 5: Adicionar export ao index.ts**

Em `src/primitivos/index.ts`, adicionar no final:

```ts
export * from "./Checkbox";
```

- [ ] **Step 6: Commit**

```bash
cd C:\Users\Marcus\Documents\Github\MFDESENVOLVIMENTO\MF-UI
git add src/primitivos/Checkbox.tsx src/testes/Checkbox.test.tsx src/primitivos/index.ts
git commit -m "feat(primitivos): adiciona Checkbox com wrapper Radix"
```

---

## Task 4: Switch

**Files:**
- Create: `src/primitivos/Switch.tsx`
- Create: `src/testes/Switch.test.tsx`
- Modify: `src/primitivos/index.ts`

- [ ] **Step 1: Escrever o teste (Red)**

Criar `src/testes/Switch.test.tsx`:

```tsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Switch } from "../primitivos/Switch";

describe("Switch", () => {
  it("renderiza com role=switch", () => {
    render(<Switch aria-label="ativar modo" />);
    expect(screen.getByRole("switch")).toBeTruthy();
  });

  it("renderiza com aria-checked=false por padrão", () => {
    render(<Switch aria-label="ativar modo" />);
    const el = screen.getByRole("switch");
    expect(el.getAttribute("aria-checked")).toBe("false");
  });
});
```

- [ ] **Step 2: Rodar para confirmar falha**

```bash
cd C:\Users\Marcus\Documents\Github\MFDESENVOLVIMENTO\MF-UI
pnpm test -- Switch
```

Expected: FAIL — `Cannot find module '../primitivos/Switch'`

- [ ] **Step 3: Implementar Switch.tsx**

Criar `src/primitivos/Switch.tsx`:

```tsx
'use client'

import * as React from 'react'
import * as SwitchPrimitive from '@radix-ui/react-switch'

import { cn } from '../lib/cn'

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        'peer focus-visible:border-ring focus-visible:ring-ring/50 dark:focus-visible:ring-ring/20 inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input dark:data-[state=unchecked]:bg-input/80',
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          'bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0',
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
```

- [ ] **Step 4: Rodar para confirmar passa**

```bash
cd C:\Users\Marcus\Documents\Github\MFDESENVOLVIMENTO\MF-UI
pnpm test -- Switch
```

Expected: `2 tests passed`

- [ ] **Step 5: Adicionar export ao index.ts**

Em `src/primitivos/index.ts`, adicionar no final:

```ts
export * from "./Switch";
```

- [ ] **Step 6: Commit**

```bash
cd C:\Users\Marcus\Documents\Github\MFDESENVOLVIMENTO\MF-UI
git add src/primitivos/Switch.tsx src/testes/Switch.test.tsx src/primitivos/index.ts
git commit -m "feat(primitivos): adiciona Switch com wrapper Radix"
```

---

## Task 5: Tabs

**Files:**
- Create: `src/primitivos/Tabs.tsx`
- Create: `src/testes/Tabs.test.tsx`
- Modify: `src/primitivos/index.ts`

- [ ] **Step 1: Escrever o teste (Red)**

Criar `src/testes/Tabs.test.tsx`:

```tsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../primitivos/Tabs";

describe("Tabs", () => {
  it("renderiza os triggers com role=tab", () => {
    render(
      <Tabs defaultValue="receitas">
        <TabsList>
          <TabsTrigger value="receitas">Receitas</TabsTrigger>
          <TabsTrigger value="despesas">Despesas</TabsTrigger>
        </TabsList>
        <TabsContent value="receitas">Conteúdo receitas</TabsContent>
        <TabsContent value="despesas">Conteúdo despesas</TabsContent>
      </Tabs>
    );
    expect(screen.getAllByRole("tab").length).toBe(2);
  });

  it("renderiza o conteúdo da tab ativa", () => {
    render(
      <Tabs defaultValue="receitas">
        <TabsList>
          <TabsTrigger value="receitas">Receitas</TabsTrigger>
        </TabsList>
        <TabsContent value="receitas">Conteúdo visível</TabsContent>
      </Tabs>
    );
    expect(screen.getByText("Conteúdo visível")).toBeTruthy();
  });
});
```

- [ ] **Step 2: Rodar para confirmar falha**

```bash
cd C:\Users\Marcus\Documents\Github\MFDESENVOLVIMENTO\MF-UI
pnpm test -- Tabs
```

Expected: FAIL — `Cannot find module '../primitivos/Tabs'`

- [ ] **Step 3: Implementar Tabs.tsx**

Criar `src/primitivos/Tabs.tsx`:

```tsx
'use client'

import * as React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'

import { cn } from '../lib/cn'

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn('flex flex-col gap-2', className)}
      {...props}
    />
  )
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        'bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-1',
        className,
      )}
      {...props}
    />
  )
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        'data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*=\'size-\'])]:size-4',
        className,
      )}
      {...props}
    />
  )
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn('flex-1 outline-none', className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
```

- [ ] **Step 4: Rodar para confirmar passa**

```bash
cd C:\Users\Marcus\Documents\Github\MFDESENVOLVIMENTO\MF-UI
pnpm test -- Tabs
```

Expected: `2 tests passed`

- [ ] **Step 5: Adicionar export ao index.ts**

Em `src/primitivos/index.ts`, adicionar no final:

```ts
export * from "./Tabs";
```

- [ ] **Step 6: Commit**

```bash
cd C:\Users\Marcus\Documents\Github\MFDESENVOLVIMENTO\MF-UI
git add src/primitivos/Tabs.tsx src/testes/Tabs.test.tsx src/primitivos/index.ts
git commit -m "feat(primitivos): adiciona Tabs com wrapper Radix"
```

---

## Task 6: Skeleton

**Files:**
- Create: `src/primitivos/Skeleton.tsx`
- Create: `src/testes/Skeleton.test.tsx`
- Modify: `src/primitivos/index.ts`

- [ ] **Step 1: Escrever o teste (Red)**

Criar `src/testes/Skeleton.test.tsx`:

```tsx
import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Skeleton } from "../primitivos/Skeleton";

describe("Skeleton", () => {
  it("renderiza com data-slot=skeleton", () => {
    const { container } = render(<Skeleton />);
    expect(container.querySelector('[data-slot="skeleton"]')).toBeTruthy();
  });

  it("aceita className extra", () => {
    const { container } = render(<Skeleton className="h-4 w-32" />);
    const el = container.querySelector('[data-slot="skeleton"]');
    expect(el?.classList.contains('h-4')).toBe(true);
    expect(el?.classList.contains('w-32')).toBe(true);
  });
});
```

- [ ] **Step 2: Rodar para confirmar falha**

```bash
cd C:\Users\Marcus\Documents\Github\MFDESENVOLVIMENTO\MF-UI
pnpm test -- Skeleton
```

Expected: FAIL — `Cannot find module '../primitivos/Skeleton'`

- [ ] **Step 3: Implementar Skeleton.tsx**

Criar `src/primitivos/Skeleton.tsx`:

```tsx
import * as React from 'react'

import { cn } from '../lib/cn'

function Skeleton({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="skeleton"
      className={cn('bg-accent/10 animate-pulse rounded-md', className)}
      {...props}
    />
  )
}

export { Skeleton }
```

- [ ] **Step 4: Rodar para confirmar passa**

```bash
cd C:\Users\Marcus\Documents\Github\MFDESENVOLVIMENTO\MF-UI
pnpm test -- Skeleton
```

Expected: `2 tests passed`

- [ ] **Step 5: Adicionar export ao index.ts**

Em `src/primitivos/index.ts`, adicionar no final:

```ts
export * from "./Skeleton";
```

- [ ] **Step 6: Commit**

```bash
cd C:\Users\Marcus\Documents\Github\MFDESENVOLVIMENTO\MF-UI
git add src/primitivos/Skeleton.tsx src/testes/Skeleton.test.tsx src/primitivos/index.ts
git commit -m "feat(primitivos): adiciona Skeleton com animate-pulse"
```

---

## Task 7: Table

**Files:**
- Create: `src/primitivos/Table.tsx`
- Create: `src/testes/Table.test.tsx`
- Modify: `src/primitivos/index.ts`

- [ ] **Step 1: Escrever o teste (Red)**

Criar `src/testes/Table.test.tsx`:

```tsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from "../primitivos/Table";

describe("Table", () => {
  it("renderiza estrutura semântica correta", () => {
    render(
      <Table>
        <TableCaption>Lista de transações</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Descrição</TableHead>
            <TableHead>Valor</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Salário</TableCell>
            <TableCell>R$ 5.000</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(screen.getByText("Lista de transações")).toBeTruthy();
    expect(screen.getByText("Salário")).toBeTruthy();
    expect(screen.getByText("R$ 5.000")).toBeTruthy();
  });

  it("renderiza um elemento table no DOM", () => {
    const { container } = render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>item</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(container.querySelector("table")).toBeTruthy();
  });
});
```

- [ ] **Step 2: Rodar para confirmar falha**

```bash
cd C:\Users\Marcus\Documents\Github\MFDESENVOLVIMENTO\MF-UI
pnpm test -- Table
```

Expected: FAIL — `Cannot find module '../primitivos/Table'`

- [ ] **Step 3: Implementar Table.tsx**

Criar `src/primitivos/Table.tsx`:

```tsx
import * as React from 'react'

import { cn } from '../lib/cn'

function Table({ className, ...props }: React.ComponentProps<'table'>) {
  return (
    <div data-slot="table-wrapper" className="relative w-full overflow-x-auto">
      <table
        data-slot="table"
        className={cn('w-full caption-bottom text-sm', className)}
        {...props}
      />
    </div>
  )
}

function TableHeader({ className, ...props }: React.ComponentProps<'thead'>) {
  return (
    <thead
      data-slot="table-header"
      className={cn('[&_tr]:border-b', className)}
      {...props}
    />
  )
}

function TableBody({ className, ...props }: React.ComponentProps<'tbody'>) {
  return (
    <tbody
      data-slot="table-body"
      className={cn('[&_tr:last-child]:border-0', className)}
      {...props}
    />
  )
}

function TableFooter({ className, ...props }: React.ComponentProps<'tfoot'>) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn('bg-muted/50 border-t font-medium [&>tr]:last:border-b-0', className)}
      {...props}
    />
  )
}

function TableRow({ className, ...props }: React.ComponentProps<'tr'>) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        'border-b border-border hover:bg-surface-raised/50 data-[state=selected]:bg-muted transition-colors',
        className,
      )}
      {...props}
    />
  )
}

function TableHead({ className, ...props }: React.ComponentProps<'th'>) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        'text-muted-foreground h-10 px-3 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
        className,
      )}
      {...props}
    />
  )
}

function TableCell({ className, ...props }: React.ComponentProps<'td'>) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        'px-3 py-3 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
        className,
      )}
      {...props}
    />
  )
}

function TableCaption({ className, ...props }: React.ComponentProps<'caption'>) {
  return (
    <caption
      data-slot="table-caption"
      className={cn('text-muted-foreground mt-4 text-sm', className)}
      {...props}
    />
  )
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
}
```

- [ ] **Step 4: Rodar para confirmar passa**

```bash
cd C:\Users\Marcus\Documents\Github\MFDESENVOLVIMENTO\MF-UI
pnpm test -- Table
```

Expected: `2 tests passed`

- [ ] **Step 5: Adicionar export ao index.ts**

Em `src/primitivos/index.ts`, adicionar no final:

```ts
export * from "./Table";
```

- [ ] **Step 6: Commit**

```bash
cd C:\Users\Marcus\Documents\Github\MFDESENVOLVIMENTO\MF-UI
git add src/primitivos/Table.tsx src/testes/Table.test.tsx src/primitivos/index.ts
git commit -m "feat(primitivos): adiciona Table com subcomponentes semânticos"
```

---

## Task 8: Exportar do src/index.ts + build + tag v2.1.0

**Files:**
- Modify: `src/index.ts`

- [ ] **Step 1: Adicionar re-exports em src/index.ts**

Em `src/index.ts`, o `export * from "./primitivos"` já exporta tudo de `primitivos/index.ts`, então apenas confirmar que a linha existe:

```ts
// Deve existir esta linha — se não existir, adicionar:
export * from "./primitivos";
```

Verificar com:

```bash
cd C:\Users\Marcus\Documents\Github\MFDESENVOLVIMENTO\MF-UI
grep "primitivos" src/index.ts
```

Expected: linha `export * from "./primitivos";` presente.

- [ ] **Step 2: Rodar todos os testes**

```bash
cd C:\Users\Marcus\Documents\Github\MFDESENVOLVIMENTO\MF-UI
pnpm test
```

Expected: todos os testes passam (43 antigos + 12 novos = 55 testes).

- [ ] **Step 3: Build**

```bash
cd C:\Users\Marcus\Documents\Github\MFDESENVOLVIMENTO\MF-UI
pnpm build
```

Expected: `dist/` gerado sem erros de TypeScript.

- [ ] **Step 4: Commit do dist e tag**

```bash
cd C:\Users\Marcus\Documents\Github\MFDESENVOLVIMENTO\MF-UI
git add dist/ src/index.ts
git commit -m "chore: build v2.1.0 com Select, Checkbox, Switch, Tabs, Skeleton, Table"
git tag v2.1.0
```

---

## Self-Review

**1. Spec coverage:**
- ✅ Select — Task 2
- ✅ Checkbox — Task 3
- ✅ Switch — Task 4
- ✅ Tabs — Task 5
- ✅ Skeleton — Task 6
- ✅ Table — Task 7
- ✅ Instalação deps — Task 1
- ✅ Build + tag — Task 8

**2. Placeholder scan:** Nenhum "TBD", "TODO" ou "implement later" encontrado. Todos os steps têm código completo.

**3. Type consistency:**
- `cn` importado de `'../lib/cn'` em todos os primitivos — consistente com o padrão do repositório.
- `data-slot` em todos os elementos raiz — consistente com Button, Card, Badge, etc.
- Exports nomeados (não default) — consistente com todos os primitivos existentes.
- `'use client'` apenas nos primitivos que usam Radix (Select, Checkbox, Switch, Tabs) — Skeleton e Table são HTML puro sem diretiva.
