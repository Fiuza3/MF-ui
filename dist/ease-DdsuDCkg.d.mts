declare const cores: {
    readonly fundo: "#0B0F14";
    readonly superficie: "#141C26";
    readonly superficieElevada: "#0F1520";
    readonly borda: "#1E2A38";
    readonly bordaForte: "#2A3B4D";
    readonly textoPrimario: "#F7FAFC";
    readonly textoSecundario: "#A0AEC0";
    readonly textoSutil: "#5C6B7E";
    readonly accent: "#3DF2E0";
    readonly accentForte: "#5DF5E6";
    readonly accentSutil: "rgba(61,242,224,0.1)";
    readonly alerta: "#FFBD2E";
    readonly erro: "#E40014";
};
type Cores = typeof cores;

declare const familias: {
    readonly sans: "var(--fonte-sans), system-ui, -apple-system, sans-serif";
    readonly mono: "var(--fonte-mono), ui-monospace, SFMono-Regular, Menlo, monospace";
    readonly logo: "'MF Logo Mono', ui-monospace, SFMono-Regular, Menlo, monospace";
};
declare const pesos: {
    readonly regular: 400;
    readonly medio: 500;
    readonly semibold: 600;
    readonly bold: 700;
};

declare const duration: {
    readonly micro: 0.15;
    readonly fast: 0.24;
    readonly reveal: 0.64;
    readonly section: 0.9;
};
declare const blinkMs = 530;

declare const ease: {
    readonly expoOut: readonly [0.16, 1, 0.3, 1];
    readonly powerOut: readonly [0.22, 1, 0.36, 1];
    readonly softInOut: readonly [0.65, 0, 0.35, 1];
};

export { type Cores as C, blinkMs as b, cores as c, duration as d, ease as e, familias as f, pesos as p };
