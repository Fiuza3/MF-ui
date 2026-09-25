import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "./Checkbox";
import { Input } from "./Input";
import { Label } from "./Label";

const meta = {
  title: "Primitivos/Label",
  component: Label,
  args: { children: "E-mail" },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ComInput: Story = {
  render: (args) => (
    <div className="grid w-80 gap-2">
      <Label {...args} htmlFor="email" />
      <Input id="email" placeholder="seu@email.com" />
    </div>
  ),
};

export const ComCheckboxDesabilitado: Story = {
  args: { children: "Aceito os termos" },
  render: (args) => (
    <div className="flex items-center gap-2">
      <Checkbox id="termos" disabled />
      <Label {...args} htmlFor="termos" />
    </div>
  ),
};
