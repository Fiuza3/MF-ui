import type { Meta, StoryObj } from "@storybook/react-vite";
import { NodeNetwork } from "../componentes/NodeNetwork";
import { Hero } from "./Hero";

const meta = {
  title: "Blocos/Hero",
  component: Hero,
  parameters: { layout: "fullscreen" },
  args: {
    eyebrow: "boot / build / ship",
    title: (
      <h1 className="max-w-5xl text-[length:var(--text-h1)] leading-[0.96] font-black tracking-tight">
        Software sob medida, <span className="text-primary">do diagnóstico ao deploy.</span>
      </h1>
    ),
    description: "Diagnóstico antes do código. Sistemas que o seu time consegue manter.",
    cta: { label: "iniciar projeto", href: "#contato" },
    stats: [
      { value: "8+", label: "anos" },
      { value: "40+", label: "sistemas entregues" },
      { value: "99,9%", label: "uptime" },
    ],
    slotLabel: "rede",
  },
  argTypes: { title: { control: false }, slot: { control: false } },
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const ComSlot: Story = {
  args: {
    slot: (
      <div className="relative h-72 w-full overflow-hidden rounded-xl border">
        <NodeNetwork count={30} />
      </div>
    ),
  },
};
