import type { Meta, StoryObj } from "@storybook/react-vite";
import { Label } from "./Label";
import { Switch } from "./Switch";

const meta = {
  title: "Primitivos/Switch",
  component: Switch,
  args: { disabled: false, defaultChecked: false },
  render: (args) => (
    <div className="flex items-center gap-2">
      <Switch {...args} id="sw" />
      <Label htmlFor="sw">Modo manutenção</Label>
    </div>
  ),
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
export const Ligado: Story = { args: { defaultChecked: true } };
