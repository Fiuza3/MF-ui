import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./Input";

const meta = {
  title: "Primitivos/Input",
  component: Input,
  args: { placeholder: "seu@email.com", type: "email", disabled: false },
  argTypes: {
    type: { control: "select", options: ["text", "email", "password", "number", "file"] },
    "aria-invalid": { control: "boolean" },
  },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
export const Invalido: Story = { args: { "aria-invalid": true, defaultValue: "email-invalido" } };
export const Desabilitado: Story = { args: { disabled: true } };
export const Arquivo: Story = { args: { type: "file" } };
