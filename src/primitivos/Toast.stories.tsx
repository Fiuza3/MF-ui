import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";
import { ToastComponentProvider, useToast, type ToastVariant } from "./Toast";

type ToastStoryArgs = {
  title: string;
  description: string;
  variant: ToastVariant;
  duration: number;
  comAcao: boolean;
};

function Disparador({ title, description, variant, duration, comAcao }: ToastStoryArgs) {
  const { toast } = useToast();
  const action = comAcao ? { label: "desfazer", onClick: () => undefined } : undefined;
  return (
    <Button onClick={() => toast({ title, description, variant, duration, action })}>
      disparar toast
    </Button>
  );
}

const meta = {
  title: "Primitivos/Toast",
  args: {
    title: "Mensagem enviada",
    description: "Entregue para 1.248 contatos.",
    variant: "default",
    duration: 5000,
    comAcao: false,
  },
  argTypes: {
    variant: { control: "inline-radio", options: ["default", "success", "destructive"] },
    duration: { control: { type: "number", step: 1000 } },
  },
  render: (args) => (
    <ToastComponentProvider>
      <Disparador {...args} />
    </ToastComponentProvider>
  ),
} satisfies Meta<ToastStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Erro: Story = {
  args: {
    title: "Falha no envio",
    description: "Instância do WhatsApp desconectada.",
    variant: "destructive",
    comAcao: true,
  },
};
