import type { Meta, StoryObj } from "@storybook/react-vite";
import { FormField } from "../blocos-app/FormField";
import { Button } from "../primitivos/Button";
import { Input } from "../primitivos/Input";
import { Textarea } from "../primitivos/Textarea";
import { Contact } from "./Contact";

const meta = {
  title: "Blocos/Contact",
  component: Contact,
  parameters: { layout: "fullscreen" },
  args: {
    eyebrow: "contato",
    title: "Vamos conversar sobre o seu projeto",
    description: "Resposta em até 1 dia útil.",
    cta: { label: "falar no WhatsApp", href: "#whatsapp" },
    email: "contato@mfdesenvolvimento.online",
  },
  argTypes: {
    title: { control: false },
    description: { control: false },
    slotFormulario: { control: false },
  },
} satisfies Meta<typeof Contact>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const ComFormulario: Story = {
  args: {
    slotFormulario: (
      <form className="grid gap-4" onSubmit={(e) => e.preventDefault()}>
        <FormField label="Nome" htmlFor="contato-nome">
          <Input id="contato-nome" />
        </FormField>
        <FormField label="Mensagem" htmlFor="contato-msg">
          <Textarea id="contato-msg" />
        </FormField>
        <Button type="submit">enviar</Button>
      </form>
    ),
  },
};
