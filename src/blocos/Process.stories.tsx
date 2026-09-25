import type { Meta, StoryObj } from "@storybook/react-vite";
import { Process } from "./Process";

const meta = {
  title: "Blocos/Process",
  component: Process,
  parameters: { layout: "fullscreen" },
  args: {
    eyebrow: "processo",
    title: "Como um projeto anda",
    description: "Quatro etapas, cada uma com entrega verificável.",
    steps: [
      {
        numero: "01",
        title: "Diagnóstico",
        description: "Entendo o problema e o negócio antes do código.",
        duracao: "1 semana",
        commitLabel: "git commit -m",
        commitOutput: "docs: escopo validado",
      },
      {
        numero: "02",
        title: "Arquitetura",
        description: "Decisões registradas com trade-offs explícitos.",
        duracao: "1 semana",
      },
      {
        numero: "03",
        title: "Construção",
        description: "Entregas semanais em ambiente de homologação.",
        duracao: "4–8 semanas",
      },
      {
        numero: "04",
        title: "Deploy",
        description: "Produção monitorada e handoff documentado.",
        duracao: "contínuo",
      },
    ],
  },
  argTypes: { title: { control: false }, description: { control: false } },
} satisfies Meta<typeof Process>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
