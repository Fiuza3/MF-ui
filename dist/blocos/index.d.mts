import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';

type HeroStat = {
    value: React.ReactNode;
    label: string;
};
type HeroProps = {
    eyebrow: string;
    headline: React.ReactNode;
    descricao: React.ReactNode;
    cta: {
        label: string;
        href: string;
    };
    stats: HeroStat[];
    slotLateral?: React.ReactNode;
    slotLateralLabel?: string;
};
declare function Hero({ eyebrow, headline, descricao, cta, stats, slotLateral, slotLateralLabel, }: HeroProps): react_jsx_runtime.JSX.Element;

type ServiceItem = {
    id: string;
    tag: string;
    title: string;
    description: string;
    items: string[];
    motif?: React.ReactNode;
};
type ServicesProps = {
    eyebrow: string;
    titulo: React.ReactNode;
    descricao: React.ReactNode;
    services: ServiceItem[];
};
declare function Services({ eyebrow, titulo, descricao, services, }: ServicesProps): react_jsx_runtime.JSX.Element;

type ProjectItem = {
    titulo: string;
    descricao?: string;
    tags?: string[];
    slotMockup?: React.ReactNode;
    href?: string;
    /** optional metadata shown in cards */
    ano?: number;
    categoria?: string;
    metrica?: string;
    resultado?: string;
};
type ProjectsProps = {
    eyebrow: string;
    titulo: React.ReactNode;
    descricao: React.ReactNode;
    projects: ProjectItem[];
};
declare function Projects({ eyebrow, titulo, descricao, projects, }: ProjectsProps): react_jsx_runtime.JSX.Element;

type ProcessStep = {
    numero: string;
    titulo: string;
    descricao: string;
    duracao?: string;
    commitLabel?: string;
    commitOutput?: string;
};
type ProcessProps = {
    eyebrow: string;
    titulo: React.ReactNode;
    descricao: React.ReactNode;
    steps: ProcessStep[];
};
declare function Process({ eyebrow, titulo, descricao, steps }: ProcessProps): react_jsx_runtime.JSX.Element;

type StackGrupo = {
    categoria: string;
    itens: string[];
    /** optional sub-label shown as a CLI command in the detail panel */
    comando?: string;
    /** optional description shown in the detail panel */
    descricao?: string;
};
type StackProps = {
    eyebrow: string;
    titulo: React.ReactNode;
    descricao: React.ReactNode;
    grupos: StackGrupo[];
};
declare function Stack({ eyebrow, titulo, descricao, grupos }: StackProps): react_jsx_runtime.JSX.Element;

type Depoimento = {
    texto: string;
    autor: string;
    papel?: string;
    empresa?: string;
};
type TestimonialsProps = {
    eyebrow: string;
    titulo: React.ReactNode;
    depoimentos: Depoimento[];
};
declare function Testimonials({ eyebrow, titulo, depoimentos, }: TestimonialsProps): react_jsx_runtime.JSX.Element;

type AboutProps = {
    eyebrow: string;
    titulo: React.ReactNode;
    paragrafos: React.ReactNode[];
    slotLateral?: React.ReactNode;
};
declare function About({ eyebrow, titulo, paragrafos, slotLateral, }: AboutProps): react_jsx_runtime.JSX.Element;

type ContactProps = {
    eyebrow: string;
    titulo: React.ReactNode;
    descricao: React.ReactNode;
    cta: {
        label: string;
        href: string;
    };
    email?: string;
    slotFormulario?: React.ReactNode;
};
declare function Contact({ eyebrow, titulo, descricao, cta, email, slotFormulario, }: ContactProps): react_jsx_runtime.JSX.Element;

export { About, type AboutProps, Contact, type ContactProps, type Depoimento, Hero, type HeroProps, type HeroStat, Process, type ProcessProps, type ProcessStep, type ProjectItem, Projects, type ProjectsProps, type ServiceItem, Services, type ServicesProps, Stack, type StackGrupo, type StackProps, Testimonials, type TestimonialsProps };
