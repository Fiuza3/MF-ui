import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "../primitivos/Input";
import { FormField } from "./FormField";

const meta = {
  title: "Blocos App/FormField",
  component: FormField,
  args: {
    label: "Telefone",
    htmlFor: "telefone",
    error: "",
    children: <Input id="telefone" placeholder="(11) 99999-0000" />,
  },
  argTypes: { children: { control: false } },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof FormField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
export const ComErro: Story = {
  args: {
    error: "Informe um telefone com DDD.",
    children: <Input id="telefone" defaultValue="9999" aria-invalid />,
  },
};
