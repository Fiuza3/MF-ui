import type { Meta, StoryObj } from "@storybook/react-vite";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./Accordion";

const perguntas = [
  { id: "prazo", pergunta: "Qual o prazo médio de um projeto?", resposta: "De 4 a 12 semanas." },
  { id: "stack", pergunta: "Qual stack vocês usam?", resposta: "React, Node e Postgres." },
  { id: "suporte", pergunta: "Tem suporte depois da entrega?", resposta: "Sim, plano mensal." },
];

const meta = {
  title: "Primitivos/Accordion",
  component: Accordion,
  subcomponents: { AccordionItem, AccordionTrigger, AccordionContent },
  args: { type: "single" },
  render: (args) => (
    <Accordion {...args} className="w-[min(24rem,calc(100vw-2rem))]">
      {perguntas.map((item) => (
        <AccordionItem key={item.id} value={item.id}>
          <AccordionTrigger>{item.pergunta}</AccordionTrigger>
          <AccordionContent>{item.resposta}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  ),
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unico: Story = { args: { type: "single", collapsible: true } };
export const Multiplo: Story = { args: { type: "multiple" } };
