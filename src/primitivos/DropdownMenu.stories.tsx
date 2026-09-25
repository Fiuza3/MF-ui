import type { Meta, StoryObj } from "@storybook/react-vite";
import { LogOut, Settings, User } from "lucide-react";
import { Button } from "./Button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "./DropdownMenu";

const meta = {
  title: "Primitivos/DropdownMenu",
  component: DropdownMenu,
  subcomponents: { DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem },
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MenuDeConta: Story = {
  render: (args) => (
    <DropdownMenu {...args}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">minha conta</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Marcus Fiuza</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <User /> Perfil
          <DropdownMenuShortcut>⇧P</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings /> Configurações
        </DropdownMenuItem>
        <DropdownMenuCheckboxItem checked>Notificações</DropdownMenuCheckboxItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Tema</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>Escuro</DropdownMenuItem>
            <DropdownMenuItem>Claro</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <LogOut /> Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};
