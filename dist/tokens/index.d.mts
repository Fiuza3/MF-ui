/**
 * Tokens de cor.
 *
 * Os VALORES ficam em `globals.css` e trocam entre `:root, .dark` e `.light`.
 * Aqui existem apenas referencias — nenhum hexadecimal. Uma constante com o
 * valor literal so estaria certa em um dos dois temas.
 *
 * - em estilo inline ou CSS-in-JS: use `cores.accent` (`"var(--primary)"`).
 * - em API que nao entende `var()` (canvas, WebGL, libs de grafico): use
 *   `lerToken(el, tokensDeCor.accent)`, que resolve no tema ativo.
 */
declare const NOMES: {
    readonly fundo: "--background";
    readonly texto: "--foreground";
    readonly superficie: "--card";
    readonly superficieTexto: "--card-foreground";
    readonly superficieElevada: "--surface-raised";
    readonly flutuante: "--popover";
    readonly flutuanteTexto: "--popover-foreground";
    readonly primaria: "--primary";
    readonly primariaTexto: "--primary-foreground";
    readonly primariaHover: "--primary-hover";
    readonly primariaSutil: "--cyan-dim";
    readonly marca: "--brand";
    readonly marcaTexto: "--brand-foreground";
    readonly secundaria: "--secondary";
    readonly secundariaTexto: "--secondary-foreground";
    readonly neutra: "--muted";
    readonly neutraTexto: "--muted-foreground";
    readonly textoSutil: "--subtle-foreground";
    readonly destaque: "--accent";
    readonly destaqueTexto: "--accent-foreground";
    readonly alerta: "--warning";
    readonly alertaTexto: "--warning-foreground";
    readonly sucesso: "--success";
    readonly sucessoTexto: "--success-foreground";
    readonly erro: "--destructive";
    readonly erroTexto: "--destructive-foreground";
    readonly borda: "--border";
    readonly bordaCampo: "--input";
    readonly foco: "--ring";
};
type NomeDeCor = keyof typeof NOMES;
/** Nome da custom property de cada token, para uso com `lerToken`. */
declare const tokensDeCor: Record<NomeDeCor, string>;
/** Referencia `var(--token)` de cada cor, para estilo inline e CSS-in-JS. */
declare const cores: Record<NomeDeCor, string>;
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

/**
 * Tokens de motion.
 *
 * Mesma regra das cores: os valores vivem em `globals.css`, aqui so ha
 * referencias. Isso mantem uma unica definicao de "quanto tempo dura uma
 * entrada" — antes havia duas, em unidades diferentes, e elas ja tinham
 * divergido (0.64s no TypeScript contra 600ms no CSS).
 */
declare const DURACOES: {
    readonly micro: "--mf-duration-micro";
    readonly rapida: "--mf-duration-fast";
    readonly entrada: "--mf-duration-reveal";
    readonly secao: "--mf-duration-section";
};
declare const CURVAS: {
    readonly expo: "--mf-ease-expo";
    readonly power: "--mf-ease-power";
    readonly suave: "--mf-ease-soft";
};
type NomeDeDuracao = keyof typeof DURACOES;
type NomeDeCurva = keyof typeof CURVAS;
/** Nomes das custom properties, para uso com `lerToken`. */
declare const tokensDeMotion: {
    readonly duracoes: {
        readonly micro: "--mf-duration-micro";
        readonly rapida: "--mf-duration-fast";
        readonly entrada: "--mf-duration-reveal";
        readonly secao: "--mf-duration-section";
    };
    readonly curvas: {
        readonly expo: "--mf-ease-expo";
        readonly power: "--mf-ease-power";
        readonly suave: "--mf-ease-soft";
    };
};
/** `var(--token)` de cada duracao, para `style` e `transition` inline. */
declare const duracoes: Record<NomeDeDuracao, string>;
/** `var(--token)` de cada curva de aceleracao. */
declare const curvas: Record<NomeDeCurva, string>;

export { type Cores, type NomeDeCor, type NomeDeCurva, type NomeDeDuracao, cores, curvas, duracoes, familias, pesos, tokensDeCor, tokensDeMotion };
