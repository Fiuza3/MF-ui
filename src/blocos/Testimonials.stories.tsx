import type { Meta, StoryObj } from "@storybook/react-vite";
import { Testimonials } from "./Testimonials";

const meta = {
  title: "Blocos/Testimonials",
  component: Testimonials,
  parameters: { layout: "fullscreen" },
  args: {
    eyebrow: "depoimentos",
    title: "Quem já trabalhou comigo",
    depoimentos: [
      {
        texto: "Texto de exemplo: entregou no prazo e explicou cada decisão técnica.",
        autor: "Cliente Exemplo A",
        papel: "Fundador",
        empresa: "Empresa A",
      },
      {
        texto: "Texto de exemplo: o sistema aguentou o pico de Black Friday sem cair.",
        autor: "Cliente Exemplo B",
        papel: "CTO",
        empresa: "Empresa B",
      },
      {
        texto: "Texto de exemplo: documentação que o time novo conseguiu seguir sozinho.",
        autor: "Cliente Exemplo C",
      },
    ],
  },
  argTypes: { title: { control: false } },
} satisfies Meta<typeof Testimonials>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
