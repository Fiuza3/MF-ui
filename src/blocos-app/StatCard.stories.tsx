import type { Meta, StoryObj } from "@storybook/react-vite";
import { MessageSquare } from "lucide-react";
import { StatCard } from "./StatCard";

const meta = {
  title: "Blocos App/StatCard",
  component: StatCard,
  args: {
    label: "Mensagens enviadas",
    value: "48.213",
    delta: { value: "+12,4% vs. mês passado", direction: "up" },
    icon: <MessageSquare />,
  },
  argTypes: { icon: { control: false } },
} satisfies Meta<typeof StatCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const cartaoUnico: NonNullable<Story["decorators"]> = [
  (Story) => (
    <div className="w-72">
      <Story />
    </div>
  ),
];

export const Playground: Story = { decorators: cartaoUnico };
export const Queda: Story = {
  decorators: cartaoUnico,
  args: { label: "Taxa de entrega", value: "91%", delta: { value: "-3pp", direction: "down" } },
};
export const SemVariacao: Story = {
  decorators: cartaoUnico,
  args: { delta: undefined, icon: undefined },
};

export const Grade: Story = {
  decorators: [
    (Story) => (
      <div className="w-[min(48rem,calc(100vw-2rem))]">
        <Story />
      </div>
    ),
  ],
  render: () => (
    <div className="grid gap-4 sm:grid-cols-3">
      <StatCard label="Clientes ativos" value="312" delta={{ value: "+8", direction: "up" }} />
      <StatCard label="Receita" value="R$ 41,2 mil" delta={{ value: "estável" }} />
      <StatCard label="Taxa de entrega" value="96%" delta={{ value: "-1pp", direction: "down" }} />
    </div>
  ),
};
