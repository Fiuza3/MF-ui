import type { Decorator, Preview } from "@storybook/react-vite";
import "./preview.css";

const TEMAS = ["dark", "light"] as const;
type Tema = (typeof TEMAS)[number];

function ehTema(valor: unknown): valor is Tema {
  return TEMAS.some((tema) => tema === valor);
}

// O tema do design system vive na classe do <html>, igual nos consumers;
// aplicar só no wrapper da story deixaria portais (Dialog, Toast) no tema errado.
const comTema: Decorator = (Story, context) => {
  const tema = ehTema(context.globals.tema) ? context.globals.tema : "dark";
  document.documentElement.classList.remove(...TEMAS);
  document.documentElement.classList.add(tema);
  return <Story />;
};

const preview: Preview = {
  decorators: [comTema],
  globalTypes: {
    tema: {
      description: "Tema do design system",
      toolbar: {
        title: "Tema",
        icon: "mirror",
        items: [
          { value: "dark", title: "Escuro" },
          { value: "light", title: "Claro" },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: { tema: "dark" },
  parameters: {
    layout: "centered",
    backgrounds: { disable: true },
    controls: { expanded: true, sort: "requiredFirst" },
  },
  tags: ["autodocs"],
};

export default preview;
