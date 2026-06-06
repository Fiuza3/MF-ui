import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../primitivos/Select";

describe("Select", () => {
  it("renderiza o trigger com placeholder", () => {
    render(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Selecionar categoria" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="moradia">Moradia</SelectItem>
        </SelectContent>
      </Select>
    );
    expect(screen.getByText("Selecionar categoria")).toBeTruthy();
  });

  it("renderiza o trigger com aria-expanded=false quando fechado", () => {
    render(
      <Select>
        <SelectTrigger aria-label="categoria">
          <SelectValue placeholder="Categoria" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="alimentacao">Alimentação</SelectItem>
        </SelectContent>
      </Select>
    );
    const trigger = screen.getByRole("combobox");
    expect(trigger.getAttribute("aria-expanded")).toBe("false");
  });
});
