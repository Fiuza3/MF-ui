import type { Meta, StoryObj } from "@storybook/react-vite";
import { ArrowRight, Plus } from "lucide-react";
import { Button } from "./Button";

const meta = {
  title: "Primitivos/Button",
  component: Button,
  args: { children: "iniciar projeto", disabled: false },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon", "icon-sm", "icon-lg"],
    },
    asChild: { table: { disable: true } },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Variantes: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-3">
      <Button {...args} variant="default">
        default
      </Button>
      <Button {...args} variant="secondary">
        secondary
      </Button>
      <Button {...args} variant="outline">
        outline
      </Button>
      <Button {...args} variant="ghost">
        ghost
      </Button>
      <Button {...args} variant="link">
        link
      </Button>
      <Button {...args} variant="destructive">
        destructive
      </Button>
    </div>
  ),
};

export const Tamanhos: Story = {
  render: (args) => (
    <div className="flex items-center gap-3">
      <Button {...args} size="sm">
        sm
      </Button>
      <Button {...args} size="default">
        default
      </Button>
      <Button {...args} size="lg">
        lg
      </Button>
      <Button {...args} size="icon" aria-label="adicionar">
        <Plus />
      </Button>
    </div>
  ),
};

export const ComIcone: Story = {
  args: {
    children: (
      <>
        falar no WhatsApp <ArrowRight />
      </>
    ),
  },
};

export const ComoLink: Story = {
  args: { asChild: true, children: <a href="#ancora">renderizado como link</a> },
};
