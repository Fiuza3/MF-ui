import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";
import { Input } from "./Input";
import { Label } from "./Label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./Sheet";

type SheetStoryArgs = { side: "top" | "right" | "bottom" | "left" };

const meta = {
  title: "Primitivos/Sheet",
  args: { side: "right" },
  argTypes: { side: { control: "inline-radio", options: ["top", "right", "bottom", "left"] } },
  render: ({ side }) => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">editar perfil</Button>
      </SheetTrigger>
      <SheetContent side={side}>
        <SheetHeader>
          <SheetTitle>Editar perfil</SheetTitle>
          <SheetDescription>As alterações valem para todos os painéis.</SheetDescription>
        </SheetHeader>
        <div className="grid gap-2 px-4">
          <Label htmlFor="nome">Nome</Label>
          <Input id="nome" defaultValue="Marcus Fiuza" />
        </div>
        <SheetFooter>
          <Button>salvar</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
} satisfies Meta<SheetStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
