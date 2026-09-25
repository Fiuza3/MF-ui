import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./Tooltip";

const meta = {
  title: "Primitivos/Tooltip",
  component: Tooltip,
  subcomponents: { TooltipTrigger, TooltipContent },
  args: { defaultOpen: true },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Padrao: Story = {
  render: (args) => (
    <Tooltip {...args}>
      <TooltipTrigger asChild>
        <Button variant="outline">passe o mouse</Button>
      </TooltipTrigger>
      <TooltipContent sideOffset={6}>Copia o link de pagamento</TooltipContent>
    </Tooltip>
  ),
};
