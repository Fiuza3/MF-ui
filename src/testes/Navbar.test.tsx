import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Navbar } from "../componentes/Navbar";

const links = [{ href: "#servicos", label: "servicos" }];

describe("Navbar", () => {
  it("abre o menu mobile ao clicar no hamburger", async () => {
    const user = userEvent.setup();
    render(<Navbar links={links} />);

    await user.click(screen.getByRole("button", { name: /abrir menu/i }));

    expect(screen.getByRole("navigation", { name: /menu mobile/i })).toBeTruthy();
  });

  it("nao renderiza o menu mobile com opacity 0 no primeiro paint", async () => {
    const user = userEvent.setup();
    const { container } = render(<Navbar links={links} />);

    await user.click(screen.getByRole("button", { name: /abrir menu/i }));

    const escondidos = [...container.querySelectorAll<HTMLElement>("[style]")].filter((el) =>
      /opacity:\s*0\s*(;|$)/.test(el.getAttribute("style") ?? ""),
    );
    expect(escondidos).toHaveLength(0);
  });
});
