import type { Meta, StoryObj } from "@storybook/react-vite";
import { Logo } from "../componentes/Logo";
import { About } from "./About";

const meta = {
  title: "Blocos/About",
  component: About,
  parameters: { layout: "fullscreen" },
  args: {
    eyebrow: "sobre",
    title: "Engenharia com dono",
    paragrafos: [
      "A MF Desenvolvimento cria e mantém sistemas em produção para empresas que precisam de software confiável.",
      "Cada projeto tem uma pessoa técnica responsável do diagnóstico ao deploy.",
    ],
    slotLateral: (
      <div className="flex h-full items-center justify-center rounded-xl border p-10">
        <Logo tamanho={72} />
      </div>
    ),
  },
  argTypes: { title: { control: false }, slotLateral: { control: false } },
} satisfies Meta<typeof About>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
export const SemSlot: Story = { args: { slotLateral: undefined } };
