import type { Meta, StoryObj } from "@storybook/react-vite";
import { Inbox, Plus } from "lucide-react";
import { Button } from "../primitivos/Button";
import { EmptyState } from "./EmptyState";

const meta = {
  title: "Blocos App/EmptyState",
  component: EmptyState,
  args: {
    title: "Nenhuma campanha ainda",
    description: "Crie a primeira campanha para começar a disparar mensagens.",
    icon: <Inbox />,
    action: (
      <Button>
        <Plus /> nova campanha
      </Button>
    ),
  },
  argTypes: { icon: { control: false }, action: { control: false } },
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
export const SoTitulo: Story = {
  args: { description: undefined, icon: undefined, action: undefined },
};
