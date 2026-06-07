import * as react_jsx_runtime from 'react/jsx-runtime';
import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React from 'react';
import { VariantProps } from 'class-variance-authority';
import * as LabelPrimitive from '@radix-ui/react-label';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import * as SelectPrimitive from '@radix-ui/react-select';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import * as TabsPrimitive from '@radix-ui/react-tabs';

declare const buttonVariants: (props?: ({
    variant?: "link" | "outline" | "default" | "destructive" | "secondary" | "ghost" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon" | "icon-sm" | "icon-lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function Button({ className, variant, size, asChild, ...props }: React.ComponentProps<'button'> & VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
}): react_jsx_runtime.JSX.Element;

declare function Card({ className, ...props }: React.ComponentProps<'div'>): react_jsx_runtime.JSX.Element;
declare function CardHeader({ className, ...props }: React.ComponentProps<'div'>): react_jsx_runtime.JSX.Element;
declare function CardTitle({ className, ...props }: React.ComponentProps<'div'>): react_jsx_runtime.JSX.Element;
declare function CardDescription({ className, ...props }: React.ComponentProps<'div'>): react_jsx_runtime.JSX.Element;
declare function CardAction({ className, ...props }: React.ComponentProps<'div'>): react_jsx_runtime.JSX.Element;
declare function CardContent({ className, ...props }: React.ComponentProps<'div'>): react_jsx_runtime.JSX.Element;
declare function CardFooter({ className, ...props }: React.ComponentProps<'div'>): react_jsx_runtime.JSX.Element;

declare const badgeVariants: (props?: ({
    variant?: "outline" | "default" | "destructive" | "secondary" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function Badge({ className, variant, asChild, ...props }: React.ComponentProps<'span'> & VariantProps<typeof badgeVariants> & {
    asChild?: boolean;
}): react_jsx_runtime.JSX.Element;

declare function Input({ className, type, ...props }: React.ComponentProps<'input'>): react_jsx_runtime.JSX.Element;

declare function Textarea({ className, ...props }: React.ComponentProps<'textarea'>): react_jsx_runtime.JSX.Element;

declare function Label({ className, ...props }: React.ComponentProps<typeof LabelPrimitive.Root>): react_jsx_runtime.JSX.Element;

declare function Separator({ className, orientation, decorative, ...props }: React.ComponentProps<typeof SeparatorPrimitive.Root>): react_jsx_runtime.JSX.Element;

declare function Accordion({ ...props }: React.ComponentProps<typeof AccordionPrimitive.Root>): react_jsx_runtime.JSX.Element;
declare function AccordionItem({ className, ...props }: React.ComponentProps<typeof AccordionPrimitive.Item>): react_jsx_runtime.JSX.Element;
declare function AccordionTrigger({ className, children, ...props }: React.ComponentProps<typeof AccordionPrimitive.Trigger>): react_jsx_runtime.JSX.Element;
declare function AccordionContent({ className, children, ...props }: React.ComponentProps<typeof AccordionPrimitive.Content>): react_jsx_runtime.JSX.Element;

declare function Dialog({ ...props }: React.ComponentProps<typeof DialogPrimitive.Root>): react_jsx_runtime.JSX.Element;
declare function DialogTrigger({ ...props }: React.ComponentProps<typeof DialogPrimitive.Trigger>): react_jsx_runtime.JSX.Element;
declare function DialogPortal({ ...props }: React.ComponentProps<typeof DialogPrimitive.Portal>): react_jsx_runtime.JSX.Element;
declare function DialogClose({ ...props }: React.ComponentProps<typeof DialogPrimitive.Close>): react_jsx_runtime.JSX.Element;
declare function DialogOverlay({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Overlay>): react_jsx_runtime.JSX.Element;
declare function DialogContent({ className, children, showCloseButton, ...props }: React.ComponentProps<typeof DialogPrimitive.Content> & {
    showCloseButton?: boolean;
}): react_jsx_runtime.JSX.Element;
declare function DialogHeader({ className, ...props }: React.ComponentProps<'div'>): react_jsx_runtime.JSX.Element;
declare function DialogFooter({ className, ...props }: React.ComponentProps<'div'>): react_jsx_runtime.JSX.Element;
declare function DialogTitle({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Title>): react_jsx_runtime.JSX.Element;
declare function DialogDescription({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Description>): react_jsx_runtime.JSX.Element;

declare function Sheet({ ...props }: React.ComponentProps<typeof DialogPrimitive.Root>): react_jsx_runtime.JSX.Element;
declare function SheetTrigger({ ...props }: React.ComponentProps<typeof DialogPrimitive.Trigger>): react_jsx_runtime.JSX.Element;
declare function SheetClose({ ...props }: React.ComponentProps<typeof DialogPrimitive.Close>): react_jsx_runtime.JSX.Element;
declare function SheetContent({ className, children, side, ...props }: React.ComponentProps<typeof DialogPrimitive.Content> & {
    side?: 'top' | 'right' | 'bottom' | 'left';
}): react_jsx_runtime.JSX.Element;
declare function SheetHeader({ className, ...props }: React.ComponentProps<'div'>): react_jsx_runtime.JSX.Element;
declare function SheetFooter({ className, ...props }: React.ComponentProps<'div'>): react_jsx_runtime.JSX.Element;
declare function SheetTitle({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Title>): react_jsx_runtime.JSX.Element;
declare function SheetDescription({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Description>): react_jsx_runtime.JSX.Element;

declare function TooltipProvider({ delayDuration, ...props }: React.ComponentProps<typeof TooltipPrimitive.Provider>): react_jsx_runtime.JSX.Element;
declare function Tooltip({ ...props }: React.ComponentProps<typeof TooltipPrimitive.Root>): react_jsx_runtime.JSX.Element;
declare function TooltipTrigger({ ...props }: React.ComponentProps<typeof TooltipPrimitive.Trigger>): react_jsx_runtime.JSX.Element;
declare function TooltipContent({ className, sideOffset, children, ...props }: React.ComponentProps<typeof TooltipPrimitive.Content>): react_jsx_runtime.JSX.Element;

declare function Select({ ...props }: React.ComponentProps<typeof SelectPrimitive.Root>): react_jsx_runtime.JSX.Element;
declare function SelectGroup({ ...props }: React.ComponentProps<typeof SelectPrimitive.Group>): react_jsx_runtime.JSX.Element;
declare function SelectValue({ ...props }: React.ComponentProps<typeof SelectPrimitive.Value>): react_jsx_runtime.JSX.Element;
declare function SelectTrigger({ className, children, ...props }: React.ComponentProps<typeof SelectPrimitive.Trigger>): react_jsx_runtime.JSX.Element;
declare function SelectScrollUpButton({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>): react_jsx_runtime.JSX.Element;
declare function SelectScrollDownButton({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>): react_jsx_runtime.JSX.Element;
declare function SelectContent({ className, children, position, ...props }: React.ComponentProps<typeof SelectPrimitive.Content>): react_jsx_runtime.JSX.Element;
declare function SelectLabel({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.Label>): react_jsx_runtime.JSX.Element;
declare function SelectItem({ className, children, ...props }: React.ComponentProps<typeof SelectPrimitive.Item>): react_jsx_runtime.JSX.Element;
declare function SelectSeparator({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.Separator>): react_jsx_runtime.JSX.Element;

declare function Checkbox({ className, ...props }: React.ComponentProps<typeof CheckboxPrimitive.Root>): react_jsx_runtime.JSX.Element;

declare function Switch({ className, ...props }: React.ComponentProps<typeof SwitchPrimitive.Root>): react_jsx_runtime.JSX.Element;

declare function Tabs({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Root>): react_jsx_runtime.JSX.Element;
declare function TabsList({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.List>): react_jsx_runtime.JSX.Element;
declare function TabsTrigger({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Trigger>): react_jsx_runtime.JSX.Element;
declare function TabsContent({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Content>): react_jsx_runtime.JSX.Element;

declare function Skeleton({ className, ...props }: React.ComponentProps<'div'>): react_jsx_runtime.JSX.Element;

declare function Table({ className, ...props }: React.ComponentProps<'table'>): react_jsx_runtime.JSX.Element;
declare function TableHeader({ className, ...props }: React.ComponentProps<'thead'>): react_jsx_runtime.JSX.Element;
declare function TableBody({ className, ...props }: React.ComponentProps<'tbody'>): react_jsx_runtime.JSX.Element;
declare function TableFooter({ className, ...props }: React.ComponentProps<'tfoot'>): react_jsx_runtime.JSX.Element;
declare function TableRow({ className, ...props }: React.ComponentProps<'tr'>): react_jsx_runtime.JSX.Element;
declare function TableHead({ className, ...props }: React.ComponentProps<'th'>): react_jsx_runtime.JSX.Element;
declare function TableCell({ className, ...props }: React.ComponentProps<'td'>): react_jsx_runtime.JSX.Element;
declare function TableCaption({ className, ...props }: React.ComponentProps<'caption'>): react_jsx_runtime.JSX.Element;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Badge, Button, Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Checkbox, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger, Input, Label, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue, Separator, Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger, Skeleton, Switch, Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow, Tabs, TabsContent, TabsList, TabsTrigger, Textarea, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, badgeVariants, buttonVariants };
