import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { PaginationControl } from "./Pagination";

const meta = {
  title: "Primitivos/Pagination",
  component: PaginationControl,
  args: { page: 1, totalPages: 12, onPageChange: () => undefined },
  argTypes: {
    page: { control: { type: "number", min: 1 } },
    totalPages: { control: { type: "number", min: 1 } },
    onPageChange: { table: { disable: true } },
  },
} satisfies Meta<typeof PaginationControl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Interativa: Story = {
  render: function Render(args) {
    const [page, setPage] = useState(args.page);
    return <PaginationControl {...args} page={page} onPageChange={setPage} />;
  },
};

export const PoucasPaginas: Story = { args: { totalPages: 3 } };
