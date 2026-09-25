import type { Meta, StoryObj } from "@storybook/react-vite";
import { Plus } from "lucide-react";
import { Button } from "../primitivos/Button";
import { PageHeader } from "./PageHeader";

const meta = {
  title: "Blocos App/PageHeader",
  component: PageHeader,
  parameters: { layout: "fullscreen" },
  args: {
    title: "Campanhas",
    breadcrumb: [{ label: "Painel", href: "#painel" }, { label: "Campanhas" }],
    actions: (
      <>
        <Button variant="outline">exportar</Button>
        <Button>
          <Plus /> nova campanha
        </Button>
      </>
    ),
  },
  argTypes: { actions: { control: false } },
} satisfies Meta<typeof PageHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
export const SoTitulo: Story = { args: { breadcrumb: undefined, actions: undefined } };
