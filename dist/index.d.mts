export { Cores, NomeDeCor, NomeDeCurva, NomeDeDuracao, cores, curvas, duracoes, familias, pesos, tokensDeCor, tokensDeMotion } from './tokens/index.mjs';
import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
export { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Badge, Button, Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Checkbox, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, Input, Label, Pagination, PaginationContent, PaginationControl, PaginationControlProps, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue, Separator, Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger, Skeleton, Switch, Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow, Tabs, TabsContent, TabsList, TabsTrigger, Textarea, Toast, ToastAction, ToastClose, ToastComponentProvider, ToastData, ToastDescription, ToastProvider, ToastTitle, ToastVariant, ToastViewport, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, badgeVariants, buttonVariants, toastVariants, useToast } from './primitivos/index.mjs';
import { ClassValue } from 'clsx';
export { About, AboutProps, Contact, ContactProps, Depoimento, Hero, HeroProps, HeroStat, Process, ProcessProps, ProcessStep, ProjectItem, Projects, ProjectsProps, ServiceItem, Services, ServicesProps, Stack, StackGrupo, StackProps, Testimonials, TestimonialsProps } from './blocos/index.mjs';
export { AppShell, AppShellProps, CopyField, CopyFieldProps, DataTable, DataTableColumn, DataTableProps, EmptyState, EmptyStateProps, FormField, FormFieldProps, PageHeader, PageHeaderBreadcrumbItem, PageHeaderProps, StatCard, StatCardDelta, StatCardProps } from './blocos-app/index.mjs';
import 'class-variance-authority/types';
import 'class-variance-authority';
import '@radix-ui/react-label';
import '@radix-ui/react-separator';
import '@radix-ui/react-accordion';
import '@radix-ui/react-dialog';
import '@radix-ui/react-tooltip';
import '@radix-ui/react-select';
import '@radix-ui/react-checkbox';
import '@radix-ui/react-switch';
import '@radix-ui/react-tabs';
import '@radix-ui/react-dropdown-menu';
import '@radix-ui/react-toast';

type LogoProps = {
    tamanho?: number;
    cor?: string;
    opacidadeColchetes?: number;
    compacto?: boolean;
    className?: string;
};
declare const RATIO_AVANCO_LOGO: number;
declare const RATIO_ALTURA_LOGO: number;
declare const RATIO_PADDING_LOGO: number;
declare function Logo({ tamanho, cor, opacidadeColchetes, compacto, className, }: LogoProps): react_jsx_runtime.JSX.Element;

type LogoAnimadoProps = {
    tamanho?: number;
    cor?: string;
    opacidadeColchetes?: number;
    compacto?: boolean;
    onClick?: () => void;
    label?: string;
    className?: string;
};
declare function LogoAnimado({ tamanho, cor, opacidadeColchetes, compacto, onClick, label, className, }: LogoAnimadoProps): react_jsx_runtime.JSX.Element;

type NavLink = {
    href: string;
    label: string;
    externo?: boolean;
};
type NavbarProps = {
    links?: NavLink[];
    ctaHref?: string;
    ctaLabel?: string;
    onLogoClick?: () => void;
};
declare function Navbar({ links, ctaHref, ctaLabel, onLogoClick, }: NavbarProps): react_jsx_runtime.JSX.Element;

type FooterLink = {
    href: string;
    label: string;
};
type FooterProps = {
    links?: FooterLink[];
    email?: string;
    localizacao?: string;
    cnpj?: string;
    nomeEmpresa?: string;
    onLogoClick?: () => void;
};
declare function Footer({ links, email, localizacao, cnpj, nomeEmpresa, onLogoClick, }: FooterProps): react_jsx_runtime.JSX.Element;

type RevealProps = {
    as?: keyof React.JSX.IntrinsicElements;
    variant?: "up" | "left";
    delayMs?: number;
    margin?: string;
    className?: string;
    children: React.ReactNode;
} & Omit<React.ButtonHTMLAttributes<HTMLElement>, "className" | "children">;
declare function Reveal({ as, variant, delayMs, margin, className, children, ...rest }: RevealProps): react_jsx_runtime.JSX.Element;

type NodeNetworkProps = {
    /** Quantidade de nós. Padrão: 52. */
    count?: number;
    /** Distância máxima (px) para ligar dois nós com uma linha. Padrão: 160. */
    maxDistance?: number;
    /** Velocidade dos nós. Padrão: 0.45. */
    speed?: number;
    /**
     * Cor das linhas e nós. Por padrão lê o token `--primary` em runtime,
     * acompanhando tema claro/escuro automaticamente.
     */
    color?: string;
    className?: string;
};
/**
 * Fundo decorativo: rede de partículas conectadas (canvas).
 * Lê `--cyan` em runtime e reage à troca de tema (.light/.dark no <html>).
 */
declare function NodeNetwork({ count, maxDistance, speed, color, className, }: NodeNetworkProps): react_jsx_runtime.JSX.Element;

declare function cn(...inputs: ClassValue[]): string;

/**
 * Leitura de token de design em runtime.
 *
 * Os valores dos tokens vivem em `globals.css` e trocam com o tema. Em CSS
 * isso e resolvido por `var(--token)`. Em JavaScript nao existe equivalente
 * estatico: uma constante em TS congela um dos temas e passa a mentir assim
 * que o outro entra. Por isso, quando um valor precisa chegar a uma API que
 * nao entende `var()` — canvas, WebGL, uma lib de grafico — ele e lido do
 * elemento, ja resolvido pelo navegador e ja correto para o tema ativo.
 */
/**
 * Le uma custom property resolvida a partir de `el`.
 *
 * @param el       elemento de onde herdar o tema (normalmente o proprio no).
 * @param token    nome da custom property, com os dois hifens: `"--primary"`.
 * @param fallback valor usado quando o token nao esta definido — por exemplo
 *                 antes do CSS carregar, ou em ambiente de teste. O padrao e
 *                 a cor de texto computada do elemento, que sempre existe e
 *                 acompanha o tema; se nem ela existir, `"transparent"`.
 */
declare function lerToken(el: Element, token: string, fallback?: string): string;

export { Footer, type FooterLink, type FooterProps, Logo, LogoAnimado, type LogoAnimadoProps, type LogoProps, type NavLink, Navbar, type NavbarProps, NodeNetwork, type NodeNetworkProps, RATIO_ALTURA_LOGO, RATIO_AVANCO_LOGO, RATIO_PADDING_LOGO, Reveal, type RevealProps, cn, lerToken };
