import type { Meta, StoryObj } from "@storybook/react-vite";
import { Textarea } from "./Textarea";

const meta = {
  title: "Primitivos/Textarea",
  component: Textarea,
  args: { placeholder: "Conte sobre o seu projeto…", disabled: false },
  argTypes: { "aria-invalid": { control: "boolean" } },
  decorators: [
    (Story) => (
      <div className="w-[min(24rem,calc(100vw-2rem))]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
export const Invalido: Story = { args: { "aria-invalid": true } };
