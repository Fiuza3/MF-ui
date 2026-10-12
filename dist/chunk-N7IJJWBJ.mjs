'use client'

import {
  cn
} from "./chunk-TE62FXIV.mjs";

// src/primitivos/Badge.tsx
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { jsx } from "react/jsx-runtime";
var badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring focus-visible:ring-[3px] aria-invalid:not-focus-visible:ring-destructive/20 dark:aria-invalid:not-focus-visible:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive: "border-transparent bg-destructive text-destructive-foreground [a&]:hover:bg-destructive/90 focus-visible:ring-destructive",
        outline: "text-foreground [a&]:hover:bg-foreground/10 [a&]:hover:text-foreground dark:border-input"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({
  className,
  variant,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "span";
  return /* @__PURE__ */ jsx(Comp, { "data-slot": "badge", className: cn(badgeVariants({ variant }), className), ...props });
}

// src/primitivos/Textarea.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
function Textarea({ className, ...props }) {
  return /* @__PURE__ */ jsx2(
    "textarea",
    {
      "data-slot": "textarea",
      className: cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring aria-invalid:not-focus-visible:ring-destructive/20 dark:aria-invalid:not-focus-visible:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      ),
      ...props
    }
  );
}

// src/primitivos/Separator.tsx
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { jsx as jsx3 } from "react/jsx-runtime";
function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}) {
  return /* @__PURE__ */ jsx3(
    SeparatorPrimitive.Root,
    {
      "data-slot": "separator",
      decorative,
      orientation,
      className: cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      ),
      ...props
    }
  );
}

// src/primitivos/Accordion.tsx
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";
import { jsx as jsx4, jsxs } from "react/jsx-runtime";
function Accordion({ ...props }) {
  return /* @__PURE__ */ jsx4(AccordionPrimitive.Root, { "data-slot": "accordion", ...props });
}
function AccordionItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx4(
    AccordionPrimitive.Item,
    {
      "data-slot": "accordion-item",
      className: cn("border-b last:border-b-0", className),
      ...props
    }
  );
}
function AccordionTrigger({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx4(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ jsxs(
    AccordionPrimitive.Trigger,
    {
      "data-slot": "accordion-trigger",
      className: cn(
        "focus-visible:border-ring focus-visible:ring-ring flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx4(ChevronDownIcon, { className: "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" })
      ]
    }
  ) });
}
function AccordionContent({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx4(
    AccordionPrimitive.Content,
    {
      "data-slot": "accordion-content",
      className: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",
      ...props,
      children: /* @__PURE__ */ jsx4("div", { className: cn("pt-0 pb-4", className), children })
    }
  );
}

// src/primitivos/Tooltip.tsx
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { jsx as jsx5, jsxs as jsxs2 } from "react/jsx-runtime";
function TooltipProvider({
  delayDuration = 0,
  ...props
}) {
  return /* @__PURE__ */ jsx5(
    TooltipPrimitive.Provider,
    {
      "data-slot": "tooltip-provider",
      delayDuration,
      ...props
    }
  );
}
function Tooltip({ ...props }) {
  return /* @__PURE__ */ jsx5(TooltipProvider, { children: /* @__PURE__ */ jsx5(TooltipPrimitive.Root, { "data-slot": "tooltip", ...props }) });
}
function TooltipTrigger({ ...props }) {
  return /* @__PURE__ */ jsx5(TooltipPrimitive.Trigger, { "data-slot": "tooltip-trigger", ...props });
}
function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx5(TooltipPrimitive.Portal, { children: /* @__PURE__ */ jsxs2(
    TooltipPrimitive.Content,
    {
      "data-slot": "tooltip-content",
      sideOffset,
      className: cn(
        "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx5(TooltipPrimitive.Arrow, { className: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
      ]
    }
  ) });
}

// src/primitivos/Select.tsx
import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { CheckIcon, ChevronDownIcon as ChevronDownIcon2, ChevronUpIcon } from "lucide-react";
import { jsx as jsx6, jsxs as jsxs3 } from "react/jsx-runtime";
function Select({ ...props }) {
  return /* @__PURE__ */ jsx6(SelectPrimitive.Root, { "data-slot": "select", ...props });
}
function SelectGroup({ ...props }) {
  return /* @__PURE__ */ jsx6(SelectPrimitive.Group, { "data-slot": "select-group", ...props });
}
function SelectValue({ ...props }) {
  return /* @__PURE__ */ jsx6(SelectPrimitive.Value, { "data-slot": "select-value", ...props });
}
function SelectTrigger({
  className,
  children,
  size = "default",
  ...props
}) {
  const alturas = {
    default: "h-9 px-3 py-2 text-sm",
    sm: "h-8 px-3 py-1.5 text-sm",
    xs: "h-7 px-2 py-1 text-xs"
  };
  return /* @__PURE__ */ jsxs3(
    SelectPrimitive.Trigger,
    {
      "data-slot": "select-trigger",
      className: cn(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='size-'])]:size-4 focus-visible:border-ring focus-visible:ring-ring aria-invalid:not-focus-visible:ring-destructive/20 aria-invalid:border-destructive dark:bg-input/30 dark:aria-invalid:not-focus-visible:ring-destructive/40 flex w-full items-center justify-between gap-2 rounded-md border bg-transparent whitespace-nowrap shadow-xs outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2",
        alturas[size],
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx6(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ jsx6(ChevronDownIcon2, { "data-slot": "select-trigger-icon", className: "size-4 opacity-50 shrink-0" }) })
      ]
    }
  );
}
function SelectScrollUpButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx6(
    SelectPrimitive.ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: cn("flex cursor-default items-center justify-center py-1", className),
      ...props,
      children: /* @__PURE__ */ jsx6(ChevronUpIcon, { className: "size-4" })
    }
  );
}
function SelectScrollDownButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx6(
    SelectPrimitive.ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: cn("flex cursor-default items-center justify-center py-1", className),
      ...props,
      children: /* @__PURE__ */ jsx6(ChevronDownIcon2, { className: "size-4" })
    }
  );
}
function SelectContent({
  className,
  children,
  position = "popper",
  ...props
}) {
  return /* @__PURE__ */ jsx6(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs3(
    SelectPrimitive.Content,
    {
      "data-slot": "select-content",
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border shadow-md",
        position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      ),
      position,
      ...props,
      children: [
        /* @__PURE__ */ jsx6(SelectScrollUpButton, {}),
        /* @__PURE__ */ jsx6(
          SelectPrimitive.Viewport,
          {
            className: cn(
              "p-1",
              position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
            ),
            children
          }
        ),
        /* @__PURE__ */ jsx6(SelectScrollDownButton, {})
      ]
    }
  ) });
}
function SelectLabel({ className, ...props }) {
  return /* @__PURE__ */ jsx6(
    SelectPrimitive.Label,
    {
      "data-slot": "select-label",
      className: cn("text-muted-foreground px-2 py-1.5 text-xs", className),
      ...props
    }
  );
}
function SelectItem({ className, children, description, icon, ...props }) {
  const descriptionId = React.useId();
  const hasDescription = description !== void 0 && description !== null;
  const hasIcon = icon !== void 0 && icon !== null;
  return /* @__PURE__ */ jsxs3(
    SelectPrimitive.Item,
    {
      "data-slot": "select-item",
      "aria-describedby": hasDescription ? descriptionId : void 0,
      className: cn(
        "group/select-item focus:bg-foreground/10 focus:text-foreground [&_svg:not([class*='size-'])]:size-4 relative flex w-full cursor-default select-none items-center gap-2 rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        (hasDescription || hasIcon) && "gap-3 py-2",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx6(
          "span",
          {
            "data-slot": "select-item-indicator",
            className: "absolute right-2 flex size-3.5 items-center justify-center",
            children: /* @__PURE__ */ jsx6(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx6(CheckIcon, { className: "size-4" }) })
          }
        ),
        hasIcon && /* @__PURE__ */ jsx6(
          "span",
          {
            "data-slot": "select-item-icon",
            "aria-hidden": "true",
            className: "bg-muted text-foreground group-data-[state=checked]/select-item:bg-brand group-data-[state=checked]/select-item:text-brand-foreground flex size-8 shrink-0 items-center justify-center rounded-md transition-colors",
            children: icon
          }
        ),
        /* @__PURE__ */ jsxs3("span", { "data-slot": "select-item-body", className: "grid min-w-0 gap-0.5", children: [
          /* @__PURE__ */ jsx6("span", { "data-slot": "select-item-label", children: /* @__PURE__ */ jsx6(SelectPrimitive.ItemText, { children }) }),
          hasDescription && /* @__PURE__ */ jsx6(
            "span",
            {
              id: descriptionId,
              "data-slot": "select-item-description",
              className: "text-muted-foreground text-xs leading-snug",
              children: description
            }
          )
        ] })
      ]
    }
  );
}
function SelectSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx6(
    SelectPrimitive.Separator,
    {
      "data-slot": "select-separator",
      className: cn("bg-border pointer-events-none -mx-1 my-1 h-px", className),
      ...props
    }
  );
}

// src/primitivos/Checkbox.tsx
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon as CheckIcon2 } from "lucide-react";
import { jsx as jsx7 } from "react/jsx-runtime";
function Checkbox({ className, ...props }) {
  return /* @__PURE__ */ jsx7(
    CheckboxPrimitive.Root,
    {
      "data-slot": "checkbox",
      className: cn(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring aria-invalid:not-focus-visible:ring-destructive/20 dark:aria-invalid:not-focus-visible:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx7(
        CheckboxPrimitive.Indicator,
        {
          "data-slot": "checkbox-indicator",
          className: "flex items-center justify-center text-current transition-none",
          children: /* @__PURE__ */ jsx7(CheckIcon2, { className: "size-3.5" })
        }
      )
    }
  );
}

// src/primitivos/Switch.tsx
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { jsx as jsx8 } from "react/jsx-runtime";
function Switch({ className, ...props }) {
  return /* @__PURE__ */ jsx8(
    SwitchPrimitive.Root,
    {
      "data-slot": "switch",
      className: cn(
        "peer focus-visible:border-ring focus-visible:ring-ring inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input dark:data-[state=unchecked]:bg-input/80",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx8(
        SwitchPrimitive.Thumb,
        {
          "data-slot": "switch-thumb",
          className: cn(
            "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
          )
        }
      )
    }
  );
}

// src/primitivos/Tabs.tsx
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { jsx as jsx9 } from "react/jsx-runtime";
function Tabs({ className, ...props }) {
  return /* @__PURE__ */ jsx9(
    TabsPrimitive.Root,
    {
      "data-slot": "tabs",
      className: cn("flex flex-col gap-2", className),
      ...props
    }
  );
}
function TabsList({ className, ...props }) {
  return /* @__PURE__ */ jsx9(
    TabsPrimitive.List,
    {
      "data-slot": "tabs-list",
      className: cn(
        "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-1",
        className
      ),
      ...props
    }
  );
}
function TabsTrigger({ className, ...props }) {
  return /* @__PURE__ */ jsx9(
    TabsPrimitive.Trigger,
    {
      "data-slot": "tabs-trigger",
      className: cn(
        "text-muted-foreground hover:text-foreground data-[state=active]:bg-card data-[state=active]:text-foreground dark:data-[state=active]:border-input focus-visible:border-ring focus-visible:ring-ring focus-visible:outline-ring inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    }
  );
}
function TabsContent({ className, ...props }) {
  return /* @__PURE__ */ jsx9(
    TabsPrimitive.Content,
    {
      "data-slot": "tabs-content",
      className: cn("flex-1 outline-none", className),
      ...props
    }
  );
}

// src/primitivos/DropdownMenu.tsx
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { CheckIcon as CheckIcon3, ChevronRightIcon, CircleIcon } from "lucide-react";
import { jsx as jsx10, jsxs as jsxs4 } from "react/jsx-runtime";
function DropdownMenu({ ...props }) {
  return /* @__PURE__ */ jsx10(DropdownMenuPrimitive.Root, { "data-slot": "dropdown-menu", ...props });
}
function DropdownMenuTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx10(DropdownMenuPrimitive.Trigger, { "data-slot": "dropdown-menu-trigger", ...props });
}
function DropdownMenuPortal({
  ...props
}) {
  return /* @__PURE__ */ jsx10(DropdownMenuPrimitive.Portal, { "data-slot": "dropdown-menu-portal", ...props });
}
function DropdownMenuGroup({ ...props }) {
  return /* @__PURE__ */ jsx10(DropdownMenuPrimitive.Group, { "data-slot": "dropdown-menu-group", ...props });
}
function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}) {
  return /* @__PURE__ */ jsx10(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx10(
    DropdownMenuPrimitive.Content,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset,
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        className
      ),
      ...props
    }
  ) });
}
function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx10(
    DropdownMenuPrimitive.Item,
    {
      "data-slot": "dropdown-menu-item",
      "data-inset": inset,
      "data-variant": variant,
      className: cn(
        "focus:bg-foreground/10 focus:text-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    }
  );
}
function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}) {
  return /* @__PURE__ */ jsxs4(
    DropdownMenuPrimitive.CheckboxItem,
    {
      "data-slot": "dropdown-menu-checkbox-item",
      className: cn(
        "focus:bg-foreground/10 focus:text-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      checked,
      ...props,
      children: [
        /* @__PURE__ */ jsx10("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsx10(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx10(CheckIcon3, { className: "size-4" }) }) }),
        children
      ]
    }
  );
}
function DropdownMenuRadioGroup({
  ...props
}) {
  return /* @__PURE__ */ jsx10(DropdownMenuPrimitive.RadioGroup, { "data-slot": "dropdown-menu-radio-group", ...props });
}
function DropdownMenuRadioItem({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs4(
    DropdownMenuPrimitive.RadioItem,
    {
      "data-slot": "dropdown-menu-radio-item",
      className: cn(
        "focus:bg-foreground/10 focus:text-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx10("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsx10(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx10(CircleIcon, { className: "size-2 fill-current" }) }) }),
        children
      ]
    }
  );
}
function DropdownMenuLabel({
  className,
  inset,
  ...props
}) {
  return /* @__PURE__ */ jsx10(
    DropdownMenuPrimitive.Label,
    {
      "data-slot": "dropdown-menu-label",
      "data-inset": inset,
      className: cn("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", className),
      ...props
    }
  );
}
function DropdownMenuSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx10(
    DropdownMenuPrimitive.Separator,
    {
      "data-slot": "dropdown-menu-separator",
      className: cn("bg-border -mx-1 my-1 h-px", className),
      ...props
    }
  );
}
function DropdownMenuShortcut({ className, ...props }) {
  return /* @__PURE__ */ jsx10(
    "span",
    {
      "data-slot": "dropdown-menu-shortcut",
      className: cn("text-muted-foreground ml-auto text-xs tracking-widest", className),
      ...props
    }
  );
}
function DropdownMenuSub({ ...props }) {
  return /* @__PURE__ */ jsx10(DropdownMenuPrimitive.Sub, { "data-slot": "dropdown-menu-sub", ...props });
}
function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs4(
    DropdownMenuPrimitive.SubTrigger,
    {
      "data-slot": "dropdown-menu-sub-trigger",
      "data-inset": inset,
      className: cn(
        "focus:bg-foreground/10 focus:text-foreground data-[state=open]:bg-foreground/10 data-[state=open]:text-foreground [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx10(ChevronRightIcon, { className: "ml-auto size-4" })
      ]
    }
  );
}
function DropdownMenuSubContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx10(
    DropdownMenuPrimitive.SubContent,
    {
      "data-slot": "dropdown-menu-sub-content",
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        className
      ),
      ...props
    }
  );
}

// src/primitivos/Toast.tsx
import * as React2 from "react";
import * as ToastPrimitive from "@radix-ui/react-toast";
import { cva as cva2 } from "class-variance-authority";
import { XIcon } from "lucide-react";
import { jsx as jsx11, jsxs as jsxs5 } from "react/jsx-runtime";
function ToastProvider({ ...props }) {
  return /* @__PURE__ */ jsx11(ToastPrimitive.Provider, { "data-slot": "toast-provider", ...props });
}
function ToastViewport({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx11(
    ToastPrimitive.Viewport,
    {
      "data-slot": "toast-viewport",
      className: cn(
        "fixed inset-x-0 top-0 z-100 flex max-h-screen w-full flex-col-reverse p-4 sm:top-auto sm:right-0 sm:bottom-0 sm:left-auto sm:flex-col md:max-w-[420px]",
        className
      ),
      ...props
    }
  );
}
var toastVariants = cva2(
  "data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-(--radix-toast-swipe-end-x) data-[swipe=move]:translate-x-(--radix-toast-swipe-move-x) data-[swipe=move]:transition-none group relative pointer-events-auto flex w-full items-center justify-between gap-3 overflow-hidden rounded-md border p-4 shadow-lg transition-all data-[swipe=end]:animate-out data-[state=closed]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:animate-in data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "bg-popover text-popover-foreground border-border",
        success: "bg-popover text-popover-foreground border-success/60",
        destructive: "bg-destructive text-destructive-foreground border-destructive [&_[data-slot=toast-description]]:text-destructive-foreground/85 [&_[data-slot=toast-action]]:border-destructive-foreground/40 [&_[data-slot=toast-action]]:hover:bg-destructive-foreground/10 [&_[data-slot=toast-action]]:hover:text-destructive-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function ToastRoot({
  className,
  variant,
  ...props
}) {
  return /* @__PURE__ */ jsx11(
    ToastPrimitive.Root,
    {
      "data-slot": "toast",
      className: cn(toastVariants({ variant }), className),
      ...props
    }
  );
}
function ToastTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx11(
    ToastPrimitive.Title,
    {
      "data-slot": "toast-title",
      className: cn("text-sm font-semibold", className),
      ...props
    }
  );
}
function ToastDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx11(
    ToastPrimitive.Description,
    {
      "data-slot": "toast-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}
function ToastAction({ className, ...props }) {
  return /* @__PURE__ */ jsx11(
    ToastPrimitive.Action,
    {
      "data-slot": "toast-action",
      className: cn(
        "shrink-0 rounded-md border bg-transparent px-3 py-1.5 text-sm font-medium transition-colors hover:bg-foreground/10 hover:text-foreground focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring",
        className
      ),
      ...props
    }
  );
}
function ToastClose({ className, ...props }) {
  return /* @__PURE__ */ jsx11(
    ToastPrimitive.Close,
    {
      "data-slot": "toast-close",
      "aria-label": "Fechar",
      className: cn(
        "inline-flex size-8 shrink-0 items-center justify-center rounded-md text-current opacity-70 transition-opacity hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring",
        // Sem hover em tela de toque: só esconde onde o ponteiro consegue revelar.
        "pointer-fine:opacity-0 pointer-fine:group-hover:opacity-70 pointer-fine:hover:opacity-100 pointer-fine:focus-visible:opacity-100",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx11(XIcon, { className: "size-4" })
    }
  );
}
var ToastContext = React2.createContext(null);
var toastSeq = 0;
function gerarToastId() {
  toastSeq += 1;
  return `toast-${toastSeq}-${Date.now()}`;
}
function ToastComponentProvider({ children }) {
  const [toasts, setToasts] = React2.useState([]);
  const dismiss = React2.useCallback((id) => {
    setToasts((atual) => atual.filter((t) => t.id !== id));
  }, []);
  const toast = React2.useCallback((data) => {
    const id = gerarToastId();
    setToasts((atual) => [...atual, { ...data, id }]);
    return id;
  }, []);
  const value = React2.useMemo(() => ({ toasts, toast, dismiss }), [toasts, toast, dismiss]);
  return /* @__PURE__ */ jsx11(ToastContext.Provider, { value, children: /* @__PURE__ */ jsxs5(ToastProvider, { children: [
    children,
    toasts.map((t) => /* @__PURE__ */ jsxs5(
      ToastRoot,
      {
        variant: t.variant,
        duration: t.duration ?? 5e3,
        onOpenChange: (open) => {
          if (!open) dismiss(t.id);
        },
        children: [
          /* @__PURE__ */ jsxs5("div", { className: "flex flex-col gap-1", children: [
            t.title && /* @__PURE__ */ jsx11(ToastTitle, { children: t.title }),
            t.description && /* @__PURE__ */ jsx11(ToastDescription, { children: t.description })
          ] }),
          t.action && /* @__PURE__ */ jsx11(ToastAction, { altText: t.action.label, onClick: t.action.onClick, children: t.action.label }),
          /* @__PURE__ */ jsx11(ToastClose, {})
        ]
      },
      t.id
    )),
    /* @__PURE__ */ jsx11(ToastViewport, {})
  ] }) });
}
function useToast() {
  const context = React2.useContext(ToastContext);
  if (!context) {
    throw new Error("useToast deve ser usado dentro de <ToastComponentProvider>");
  }
  return context;
}

export {
  badgeVariants,
  Badge,
  Textarea,
  Separator,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectScrollUpButton,
  SelectScrollDownButton,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  Checkbox,
  Switch,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuPortal,
  DropdownMenuGroup,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  ToastProvider,
  ToastViewport,
  toastVariants,
  ToastRoot,
  ToastTitle,
  ToastDescription,
  ToastAction,
  ToastClose,
  ToastComponentProvider,
  useToast
};
//# sourceMappingURL=chunk-N7IJJWBJ.mjs.map