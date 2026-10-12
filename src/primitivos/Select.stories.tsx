import type { Meta, StoryObj } from "@storybook/react-vite";
import { Building2, User, Users, UsersRound } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "./Select";

const meta = {
  title: "Primitivos/Select",
  component: Select,
  subcomponents: { SelectTrigger, SelectContent, SelectItem, SelectGroup, SelectLabel },
  args: { disabled: false },
  render: (args) => (
    <Select {...args}>
      <SelectTrigger className="w-64" aria-label="Plano">
        <SelectValue placeholder="Escolha um plano" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Mensal</SelectLabel>
          <SelectItem value="basico">Básico</SelectItem>
          <SelectItem value="pro">Pro</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Anual</SelectLabel>
          <SelectItem value="pro-anual">Pro anual</SelectItem>
          <SelectItem value="enterprise" disabled>
            Enterprise (sob consulta)
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
export const ComValor: Story = { args: { defaultValue: "pro" } };

const EQUIPES = [
  { value: "1", label: "Só eu", description: "Você mesmo opera o sistema no dia a dia", icon: <User /> },
  { value: "5", label: "2 a 5 pessoas", description: "Equipe pequena dividindo o trabalho", icon: <Users /> },
  { value: "20", label: "6 a 20 pessoas", description: "Setores diferentes, cada um com o seu acesso", icon: <UsersRound /> },
  { value: "21", label: "Mais de 20 pessoas", description: "Várias equipes, com relatórios por área", icon: <Building2 /> },
];

/** `description` e `icon`: a lista explica cada opção, o gatilho fechado mostra só o rótulo. */
export const ComDescricao: Story = {
  args: { defaultValue: "20" },
  render: (args) => (
    <Select {...args}>
      <SelectTrigger className="w-80" aria-label="Quem vai usar">
        <SelectValue placeholder="Quantas pessoas vão usar?" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Quantas pessoas vão usar o sistema?</SelectLabel>
          {EQUIPES.map((equipe) => (
            <SelectItem key={equipe.value} value={equipe.value} description={equipe.description} icon={equipe.icon}>
              {equipe.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};
