import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  ArrowRightIcon,
  BotIcon,
  CalculatorIcon,
  CalendarClockIcon,
  FileSignatureIcon,
  WalletIcon,
} from "lucide-react";

import { AnimatedIcon } from "./AnimatedIcon";
import type { AnimatedIconAnimation, AnimatedIconTrigger } from "./AnimatedIcon";

const meta = {
  title: "Primitivos/AnimatedIcon",
  component: AnimatedIcon,
  args: { icon: CalculatorIcon, size: 32 },
  argTypes: {
    animation: { control: "select", options: ["draw", "pulse", "nudge", "spin"] },
    trigger: { control: "select", options: ["hover", "inview", "always"] },
    icon: { table: { disable: true } },
  },
} satisfies Meta<typeof AnimatedIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

const animacoes: AnimatedIconAnimation[] = ["draw", "pulse", "nudge", "spin"];
const gatilhos: AnimatedIconTrigger[] = ["hover", "inview", "always"];
const icones = [CalculatorIcon, WalletIcon, CalendarClockIcon, FileSignatureIcon, BotIcon, ArrowRightIcon];

export const Playground: Story = {};

export const Grade: Story = {
  render: () => (
    <div className="grid grid-cols-[auto_repeat(3,1fr)] items-center gap-6">
      <span />
      {gatilhos.map((gatilho) => (
        <span key={gatilho} className="text-xs text-muted-foreground">
          {gatilho}
        </span>
      ))}
      {animacoes.map((animacao, linha) => (
        <Linha key={animacao} animacao={animacao} icone={icones[linha % icones.length]!} />
      ))}
    </div>
  ),
};

function Linha({ animacao, icone }: { animacao: AnimatedIconAnimation; icone: typeof CalculatorIcon }) {
  return (
    <>
      <span className="text-xs text-muted-foreground">{animacao}</span>
      {gatilhos.map((gatilho) => (
        <AnimatedIcon key={gatilho} icon={icone} animation={animacao} trigger={gatilho} size={32} />
      ))}
    </>
  );
}

export const GatilhoPorAncestral: Story = {
  render: () => (
    <div className="group flex w-64 items-center gap-3 rounded-lg border p-4">
      <AnimatedIcon icon={BotIcon} animation="draw" size={28} />
      <span className="flex-1 text-sm">Passe o mouse no card</span>
      <AnimatedIcon icon={ArrowRightIcon} animation="nudge" size={20} />
    </div>
  ),
};

export const TodosOsIcones: Story = {
  render: () => (
    <div className="flex gap-4">
      {icones.map((icone, i) => (
        <AnimatedIcon key={i} icon={icone} trigger="inview" size={32} />
      ))}
    </div>
  ),
};
