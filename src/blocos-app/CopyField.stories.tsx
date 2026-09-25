import type { Meta, StoryObj } from "@storybook/react-vite";
import { CopyField } from "./CopyField";

const meta = {
  title: "Blocos App/CopyField",
  component: CopyField,
  args: {
    label: "Webhook",
    value: "https://api.exemplo.com/webhooks/a1b2c3d4",
    feedbackDurationMs: 2000,
  },
  decorators: [
    (Story) => (
      <div className="w-[28rem]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CopyField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
export const SemLabel: Story = { args: { label: undefined } };
