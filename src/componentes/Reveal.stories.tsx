import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card, CardContent } from "../primitivos/Card";
import { Reveal } from "./Reveal";

const meta = {
  title: "Marca/Reveal",
  component: Reveal,
  parameters: { layout: "padded" },
  args: { variant: "up", delayMs: 0, margin: "-70px", children: null },
  argTypes: {
    variant: { control: "inline-radio", options: ["up", "left"] },
    delayMs: { control: { type: "range", min: 0, max: 1000, step: 50 } },
    children: { control: false },
    as: { control: false },
  },
  render: (args) => (
    <div className="flex flex-col gap-6">
      <p className="text-sm text-muted-foreground">Role para baixo para ver a entrada.</p>
      <div className="h-[80vh]" />
      {[0, 1, 2].map((indice) => (
        <Reveal key={indice} {...args} delayMs={(args.delayMs ?? 0) + indice * 120}>
          <Card>
            <CardContent>Bloco {indice + 1}</CardContent>
          </Card>
        </Reveal>
      ))}
    </div>
  ),
} satisfies Meta<typeof Reveal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
export const DaEsquerda: Story = { args: { variant: "left" } };
