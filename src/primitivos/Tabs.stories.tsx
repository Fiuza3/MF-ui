import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./Tabs";

const meta = {
  title: "Primitivos/Tabs",
  component: Tabs,
  subcomponents: { TabsList, TabsTrigger, TabsContent },
  args: { defaultValue: "visao-geral", orientation: "horizontal" },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Padrao: Story = {
  render: (args) => (
    <Tabs {...args} className="w-[min(24rem,calc(100vw-2rem))]">
      <TabsList>
        <TabsTrigger value="visao-geral">Visão geral</TabsTrigger>
        <TabsTrigger value="faturas">Faturas</TabsTrigger>
        <TabsTrigger value="config" disabled>
          Configurações
        </TabsTrigger>
      </TabsList>
      <TabsContent value="visao-geral" className="text-sm">
        Resumo do mês corrente.
      </TabsContent>
      <TabsContent value="faturas" className="text-sm">
        Histórico de cobranças.
      </TabsContent>
    </Tabs>
  ),
};
