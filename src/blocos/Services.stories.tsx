import type { Meta, StoryObj } from "@storybook/react-vite";
import { Services } from "./Services";

const meta = {
  title: "Blocos/Services",
  component: Services,
  parameters: { layout: "fullscreen" },
  args: {
    eyebrow: "serviços",
    title: "O que eu construo",
    description: "Do MVP ao sistema que aguenta produção.",
    services: [
      {
        id: "saas",
        tag: "01",
        title: "Sistemas SaaS",
        description: "Produtos web multi-tenant com cobrança recorrente.",
        items: ["Next.js", "Postgres", "Stripe"],
      },
      {
        id: "integrações",
        tag: "02",
        title: "Integrações",
        description: "WhatsApp, SMS, gateways de pagamento e ERPs.",
        items: ["Webhooks", "Filas", "Retries"],
      },
      {
        id: "consultoria",
        tag: "03",
        title: "Consultoria técnica",
        description: "Diagnóstico de arquitetura e plano de evolução.",
        items: ["Code review", "Performance", "Segurança"],
      },
    ],
  },
  argTypes: { title: { control: false }, description: { control: false } },
} satisfies Meta<typeof Services>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
