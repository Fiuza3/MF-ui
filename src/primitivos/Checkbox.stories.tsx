import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "./Checkbox";
import { Label } from "./Label";

const meta = {
  title: "Primitivos/Checkbox",
  component: Checkbox,
  args: { disabled: false, defaultChecked: false },
  argTypes: { "aria-invalid": { control: "boolean" } },
  render: (args) => (
    <div className="flex items-center gap-2">
      <Checkbox {...args} id="cb" />
      <Label htmlFor="cb">Receber novidades</Label>
    </div>
  ),
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
export const Marcado: Story = { args: { defaultChecked: true } };
