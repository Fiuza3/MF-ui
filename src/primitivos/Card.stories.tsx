import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "./Badge";
import { Button } from "./Button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./Card";

const meta = {
  title: "Primitivos/Card",
  component: Card,
  subcomponents: { CardHeader, CardTitle, CardDescription, CardAction, CardContent, CardFooter },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Completo: Story = {
  render: (args) => (
    <Card {...args} className="w-96">
      <CardHeader>
        <CardTitle>Plano mensal</CardTitle>
        <CardDescription>Manutenção e evolução contínua do sistema.</CardDescription>
        <CardAction>
          <Badge variant="secondary">ativo</Badge>
        </CardAction>
      </CardHeader>
      <CardContent className="text-sm">
        Suporte prioritário, deploys semanais e monitoramento 24/7.
      </CardContent>
      <CardFooter className="gap-2">
        <Button>assinar</Button>
        <Button variant="ghost">detalhes</Button>
      </CardFooter>
    </Card>
  ),
};

export const SoConteudo: Story = {
  render: (args) => (
    <Card {...args} className="w-80">
      <CardContent className="text-sm">Card sem header nem footer.</CardContent>
    </Card>
  ),
};
