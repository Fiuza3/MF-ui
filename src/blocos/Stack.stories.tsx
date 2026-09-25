import type { Meta, StoryObj } from "@storybook/react-vite";
import { Stack } from "./Stack";

const meta = {
  title: "Blocos/Stack",
  component: Stack,
  parameters: { layout: "fullscreen" },
  args: {
    eyebrow: "stack",
    title: "Ferramentas do dia a dia",
    description: "Escolhidas pelo que o projeto precisa, não pela moda.",
    grupos: [
      {
        categoria: "Frontend",
        itens: ["React", "Next.js", "Tailwind", "Radix UI"],
        comando: "pnpm dev",
        description: "Interfaces rápidas e acessíveis.",
      },
      {
        categoria: "Backend",
        itens: ["Node", "Fastify", "Postgres", "Redis"],
        comando: "pnpm start",
      },
      {
        categoria: "Infra",
        itens: ["Docker", "Vercel", "GitHub Actions"],
        comando: "git push",
      },
    ],
  },
  argTypes: { title: { control: false }, description: { control: false } },
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
