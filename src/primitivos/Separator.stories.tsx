import type { Meta, StoryObj } from "@storybook/react-vite";
import { Separator } from "./Separator";

const meta = {
  title: "Primitivos/Separator",
  component: Separator,
  args: { orientation: "horizontal" },
  argTypes: { orientation: { control: "inline-radio", options: ["horizontal", "vertical"] } },
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  render: (args) => (
    <div className="w-72 text-sm">
      <p>Diagnóstico</p>
      <Separator {...args} className="my-3" />
      <p>Entrega</p>
    </div>
  ),
};

export const Vertical: Story = {
  args: { orientation: "vertical" },
  render: (args) => (
    <div className="flex h-5 items-center gap-3 text-sm">
      <span>Sobre</span>
      <Separator {...args} />
      <span>Projetos</span>
      <Separator {...args} />
      <span>Contato</span>
    </div>
  ),
};
