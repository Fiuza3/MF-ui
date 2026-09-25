import type { Meta, StoryObj } from "@storybook/react-vite";
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
