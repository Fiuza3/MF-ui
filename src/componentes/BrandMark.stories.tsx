import type { Meta, StoryObj } from "@storybook/react-vite";
import { BRAND_ANIMATIONS, BRAND_TONES, BRAND_VARIANTS } from "../brand";
import { BrandMark } from "./BrandMark";
import { BrandMarkAnimated } from "./BrandMarkAnimated";

const meta = {
  title: "Componentes/BrandMark",
  component: BrandMark,
  args: { variant: "horizontal", tone: "cyan", height: 64 },
  argTypes: {
    variant: { control: "select", options: BRAND_VARIANTS },
    tone: { control: "select", options: BRAND_TONES },
    height: { control: { type: "range", min: 16, max: 240, step: 4 } },
  },
} satisfies Meta<typeof BrandMark>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Animada: StoryObj<typeof BrandMarkAnimated> = {
  args: { animation: "assemble", variant: "horizontal", tone: "cyan", height: 64 },
  argTypes: {
    animation: { control: "select", options: BRAND_ANIMATIONS },
    variant: { control: "select", options: BRAND_VARIANTS },
    tone: { control: "select", options: BRAND_TONES },
    height: { control: { type: "range", min: 16, max: 240, step: 4 } },
  },
  render: (args) => <BrandMarkAnimated {...args} />,
};
