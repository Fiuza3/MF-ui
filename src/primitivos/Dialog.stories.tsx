import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./Dialog";

const meta = {
  title: "Primitivos/Dialog",
  component: Dialog,
  subcomponents: { DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle },
  parameters: { layout: "centered" },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Confirmacao: Story = {
  render: (args) => (
    <Dialog {...args}>
      <DialogTrigger asChild>
        <Button variant="destructive">excluir cliente</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Excluir cliente?</DialogTitle>
          <DialogDescription>
            O histórico de mensagens também será apagado. Essa ação não pode ser desfeita.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">cancelar</Button>
          </DialogClose>
          <Button variant="destructive">excluir</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const SemBotaoFechar: Story = {
  render: (args) => (
    <Dialog {...args}>
      <DialogTrigger asChild>
        <Button variant="outline">abrir</Button>
      </DialogTrigger>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>Processando pagamento</DialogTitle>
          <DialogDescription>Não feche esta janela.</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  ),
};
