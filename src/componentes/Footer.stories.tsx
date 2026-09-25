import type { Meta, StoryObj } from "@storybook/react-vite";
import { Footer } from "./Footer";

const meta = {
  title: "Marca/Footer",
  component: Footer,
  parameters: { layout: "fullscreen" },
  args: {
    links: [
      { href: "#servicos", label: "Serviços" },
      { href: "#projetos", label: "Projetos" },
      { href: "#contato", label: "Contato" },
    ],
    email: "contato@mfdesenvolvimento.online",
    localizacao: "São Paulo, SP",
    cnpj: "00.000.000/0001-00",
    nomeEmpresa: "MF Desenvolvimento",
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
export const Minimo: Story = {
  args: { links: [], email: undefined, localizacao: undefined, cnpj: undefined },
};
