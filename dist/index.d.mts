export { C as Cores, b as blinkMs, c as cores, f as familias, d as motionDurations, e as motionEase, p as pesos } from './ease-D34LFq0Y.mjs';
import * as react_jsx_runtime from 'react/jsx-runtime';
export { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Badge, Button, Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger, Input, Label, Separator, Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger, Textarea, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, badgeVariants, buttonVariants } from './primitivos/index.mjs';
import { ClassValue } from 'clsx';
export { About, AboutProps, Contact, ContactProps, Depoimento, Hero, HeroProps, HeroStat, Process, ProcessProps, ProcessStep, ProjectItem, Projects, ProjectsProps, ServiceItem, Services, ServicesProps, Stack, StackGrupo, StackProps, Testimonials, TestimonialsProps } from './blocos/index.mjs';
import 'class-variance-authority/types';
import 'react';
import 'class-variance-authority';
import '@radix-ui/react-label';
import '@radix-ui/react-separator';
import '@radix-ui/react-accordion';
import '@radix-ui/react-dialog';
import '@radix-ui/react-tooltip';

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

declare function cn(...inputs: ClassValue[]): string;

export { Footer, type FooterLink, type FooterProps, Logo, LogoAnimado, type LogoAnimadoProps, type LogoProps, type NavLink, Navbar, type NavbarProps, RATIO_ALTURA_LOGO, RATIO_AVANCO_LOGO, RATIO_PADDING_LOGO, cn };
