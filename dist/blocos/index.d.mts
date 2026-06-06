import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';

type HeroStat = {
    value: React.ReactNode;
    label: string;
};
type HeroProps = {
    eyebrow: string;
    title: React.ReactNode;
    description: React.ReactNode;
    cta: {
        label: string;
        href: string;
    };
    stats: HeroStat[];
    slot?: React.ReactNode;
    slotLabel?: string;
};
declare function Hero({ eyebrow, title, description, cta, stats, slot, slotLabel, }: HeroProps): react_jsx_runtime.JSX.Element;

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
    title: React.ReactNode;
    description: React.ReactNode;
    services: ServiceItem[];
};
declare function Services({ eyebrow, title, description, services, }: ServicesProps): react_jsx_runtime.JSX.Element;

type ProjectItem = {
    title: string;
    description?: string;
    tags?: string[];
    mockup?: React.ReactNode;
    href?: string;
    /** optional metadata shown in cards */
    ano?: number;
    categoria?: string;
    metrica?: string;
    resultado?: string;
};
type ProjectsProps = {
    eyebrow: string;
    title: React.ReactNode;
    description: React.ReactNode;
    projects: ProjectItem[];
};
declare function Projects({ eyebrow, title, description, projects, }: ProjectsProps): react_jsx_runtime.JSX.Element;

type ProcessStep = {
    numero: string;
    title: string;
    description: string;
    duracao?: string;
    commitLabel?: string;
    commitOutput?: string;
};
type ProcessProps = {
    eyebrow: string;
    title: React.ReactNode;
    description: React.ReactNode;
    steps: ProcessStep[];
};
declare function Process({ eyebrow, title, description, steps }: ProcessProps): react_jsx_runtime.JSX.Element;

type StackGrupo = {
    categoria: string;
    itens: string[];
    /** optional sub-label shown as a CLI command in the detail panel */
    comando?: string;
    /** optional description shown in the detail panel */
    description?: string;
};
type StackProps = {
    eyebrow: string;
    title: React.ReactNode;
    description: React.ReactNode;
    grupos: StackGrupo[];
};
declare function Stack({ eyebrow, title, description, grupos }: StackProps): react_jsx_runtime.JSX.Element;

type Depoimento = {
    texto: string;
    autor: string;
    papel?: string;
    empresa?: string;
};
type TestimonialsProps = {
    eyebrow: string;
    title: React.ReactNode;
    depoimentos: Depoimento[];
};
declare function Testimonials({ eyebrow, title, depoimentos, }: TestimonialsProps): react_jsx_runtime.JSX.Element;

type AboutProps = {
    eyebrow: string;
    title: React.ReactNode;
    paragrafos: React.ReactNode[];
    slotLateral?: React.ReactNode;
};
declare function About({ eyebrow, title, paragrafos, slotLateral, }: AboutProps): react_jsx_runtime.JSX.Element;

type ContactProps = {
    eyebrow: string;
    title: React.ReactNode;
    description: React.ReactNode;
    cta: {
        label: string;
        href: string;
    };
    email?: string;
    slotFormulario?: React.ReactNode;
};
declare function Contact({ eyebrow, title, description, cta, email, slotFormulario, }: ContactProps): react_jsx_runtime.JSX.Element;

export { About, type AboutProps, Contact, type ContactProps, type Depoimento, Hero, type HeroProps, type HeroStat, Process, type ProcessProps, type ProcessStep, type ProjectItem, Projects, type ProjectsProps, type ServiceItem, Services, type ServicesProps, Stack, type StackGrupo, type StackProps, Testimonials, type TestimonialsProps };
