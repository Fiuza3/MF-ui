import type { Meta, StoryObj } from "@storybook/react-vite";
import { Logo } from "./Logo";
import { LogoAnimado } from "./LogoAnimado";

const meta = {
  title: "Marca/Logo",
  component: Logo,
  args: { tamanho: 48, compacto: false },
  argTypes: {
    tamanho: { control: { type: "range", min: 12, max: 160, step: 2 } },
    opacidadeColchetes: { control: { type: "range", min: 0, max: 1, step: 0.02 } },
    cor: { control: "color" },
  },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
export const Compacto: Story = { args: { compacto: true } };

export const Animado: Story = {
  render: (args) => <LogoAnimado {...args} />,
};

export const Escala: Story = {
  render: () => (
    <div className="flex items-end gap-6">
      {[16, 24, 40, 64, 96].map((tamanho) => (
        <Logo key={tamanho} tamanho={tamanho} />
      ))}
    </div>
  ),
};
