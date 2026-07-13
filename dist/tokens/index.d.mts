export { C as Cores, b as blinkMs, c as cores, d as duration, e as ease, f as familias, p as pesos } from '../ease-DdsuDCkg.mjs';

declare const fadeUp: (delay?: number) => {
    initial: {
        opacity: number;
        y: number;
    };
    animate: {
        opacity: number;
        y: number;
    };
    transition: {
        delay: number;
        duration: 0.64;
        ease: readonly [0.16, 1, 0.3, 1];
    };
};
declare const fadeIn: (delay?: number) => {
    initial: {
        opacity: number;
    };
    animate: {
        opacity: number;
    };
    transition: {
        delay: number;
        duration: 0.64;
        ease: readonly [0.16, 1, 0.3, 1];
    };
};
declare const scaleIn: (delay?: number) => {
    initial: {
        opacity: number;
        scale: number;
    };
    animate: {
        opacity: number;
        scale: number;
    };
    transition: {
        delay: number;
        duration: 0.24;
        ease: readonly [0.22, 1, 0.36, 1];
    };
};

export { fadeIn, fadeUp, scaleIn };
