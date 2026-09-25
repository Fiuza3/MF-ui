import type { Meta, StoryObj } from "@storybook/react-vite";
import { Projects } from "./Projects";

const meta = {
  title: "Blocos/Projects",
  component: Projects,
  parameters: { layout: "fullscreen" },
  args: {
    eyebrow: "projetos",
    title: "Sistemas em produção",
    description: "Uma amostra do que já está rodando para clientes.",
    projects: [
      {
        title: "Plataforma de disparo",
        description: "Envio em massa via WhatsApp com fila e relatórios.",
        tags: ["Node", "Redis", "Postgres"],
        ano: 2025,
        categoria: "SaaS",
        metrica: "1,2 mi",
        resultado: "mensagens/mês",
      },
      {
        title: "Gateway de SMS",
        description: "API de SMS com roteamento entre operadoras.",
        tags: ["Go", "Kafka"],
        ano: 2024,
        categoria: "API",
        metrica: "99,9%",
        resultado: "taxa de entrega",
      },
      {
        title: "Site institucional",
        description: "Landing de alta conversão com CMS headless.",
        tags: ["Next.js", "Tailwind"],
        ano: 2026,
        categoria: "Web",
        href: "#projeto",
      },
    ],
  },
  argTypes: { title: { control: false }, description: { control: false } },
} satisfies Meta<typeof Projects>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
