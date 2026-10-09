import type { Meta, StoryObj } from "@storybook/react-vite";
import { AnimationsSection } from "./AnimationsSection";
import { ColorsSection } from "./ColorsSection";
import { ConstructionSection } from "./ConstructionSection";
import { DownloadsSection } from "./DownloadsSection";
import { OpeningSection } from "./OpeningSection";
import { INK } from "./shared";
import { SymbolChoiceSection } from "./SymbolChoiceSection";
import { VariantsSection } from "./VariantsSection";

function BrandManual() {
  return (
    <div className="min-h-screen font-sans text-foreground" style={{ backgroundColor: INK }}>
      <OpeningSection />
      <SymbolChoiceSection />
      <VariantsSection />
      <AnimationsSection />
      <ConstructionSection />
      <ColorsSection />
      <DownloadsSection />
    </div>
  );
}

const meta = {
  title: "Marca/Manual da marca",
  component: BrandManual,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof BrandManual>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Manual: Story = {};
