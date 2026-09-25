import type { Meta, StoryObj } from "@storybook/react-vite";
import { Navbar } from "./Navbar";

const meta = {
  title: "Marca/Navbar",
  component: Navbar,
  parameters: { layout: "fullscreen" },
  args: {
    links: [
      { href: "#servicos", label: "Serviços" },
      { href: "#projetos", label: "Projetos" },
      { href: "#processo", label: "Processo" },
      { href: "https://github.com/Fiuza3", label: "GitHub", externo: true },
    ],
    ctaHref: "#contato",
    ctaLabel: "Fale comigo",
  },
  decorators: [
    (Story) => (
      <div className="min-h-[150vh]">
        <Story />
        <p className="px-6 pt-32 text-sm text-muted-foreground">
          Role a página para ver o estado com scroll.
        </p>
      </div>
    ),
  ],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
export const Mobile: Story = { globals: { viewport: { value: "mobile1", isRotated: false } } };
