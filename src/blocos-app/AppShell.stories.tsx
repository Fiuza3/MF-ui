import type { Meta, StoryObj } from "@storybook/react-vite";
import { LayoutDashboard, Megaphone, Settings, Users } from "lucide-react";
import { Logo } from "../componentes/Logo";
import { Button } from "../primitivos/Button";
import { AppShell } from "./AppShell";
import { PageHeader } from "./PageHeader";
import { StatCard } from "./StatCard";

const itensMenu = [
  { label: "Painel", icon: LayoutDashboard },
  { label: "Campanhas", icon: Megaphone },
  { label: "Clientes", icon: Users },
  { label: "Configurações", icon: Settings },
];

const meta = {
  title: "Blocos App/AppShell",
  component: AppShell,
  parameters: { layout: "fullscreen" },
  args: {
    sidebar: (
      <nav className="flex flex-col gap-1 p-4">
        <div className="mb-6 px-2">
          <Logo />
        </div>
        {itensMenu.map(({ label, icon: Icone }) => (
          <Button key={label} asChild variant="ghost" className="justify-start">
            <a href={`#${label.toLowerCase()}`}>
              <Icone /> {label}
            </a>
          </Button>
        ))}
      </nav>
    ),
    topbar: (
      <span className="ml-auto truncate text-sm text-muted-foreground">
        marcus@mfdesenvolvimento.online
      </span>
    ),
    children: (
      <>
        <PageHeader title="Painel" />
        <div className="grid gap-4 p-6 sm:grid-cols-3">
          <StatCard label="Clientes ativos" value="312" delta={{ value: "+8", direction: "up" }} />
          <StatCard label="Mensagens" value="48.213" />
          <StatCard label="Churn" value="2,1%" delta={{ value: "+0,4pp", direction: "down" }} />
        </div>
      </>
    ),
  },
  argTypes: {
    sidebar: { control: false },
    topbar: { control: false },
    children: { control: false },
  },
} satisfies Meta<typeof AppShell>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Painel: Story = {};
