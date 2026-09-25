import type { Meta, StoryObj } from "@storybook/react-vite";
import { NodeNetwork } from "./NodeNetwork";

const meta = {
  title: "Marca/NodeNetwork",
  component: NodeNetwork,
  parameters: { layout: "fullscreen" },
  args: { count: 52, maxDistance: 160, speed: 0.45 },
  argTypes: {
    count: { control: { type: "range", min: 5, max: 200, step: 1 } },
    maxDistance: { control: { type: "range", min: 40, max: 400, step: 10 } },
    speed: { control: { type: "range", min: 0, max: 3, step: 0.05 } },
    color: { control: "color" },
  },
  decorators: [
    (Story) => (
      <div className="relative h-[480px] w-full overflow-hidden">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof NodeNetwork>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
export const Densa: Story = { args: { count: 140, maxDistance: 120 } };
