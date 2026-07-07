import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ToastComponentProvider, useToast } from "../../primitivos/Toast";

function Disparador() {
  const { toast } = useToast();
  return (
    <div>
      <button type="button" onClick={() => toast({ title: "Salvo com sucesso" })}>
        disparar 1
      </button>
      <button type="button" onClick={() => toast({ title: "Erro ao salvar", variant: "destructive" })}>
        disparar 2
      </button>
    </div>
  );
}

describe("Toast", () => {
  it("empilha múltiplos toasts disparados", async () => {
    const user = userEvent.setup();
    render(
      <ToastComponentProvider>
        <Disparador />
      </ToastComponentProvider>,
    );

    await user.click(screen.getByRole("button", { name: "disparar 1" }));
    await user.click(screen.getByRole("button", { name: "disparar 2" }));

    expect(screen.getByText("Salvo com sucesso")).toBeTruthy();
    expect(screen.getByText("Erro ao salvar")).toBeTruthy();
  });

  it("remove o toast ao clicar em fechar", async () => {
    const user = userEvent.setup();
    render(
      <ToastComponentProvider>
        <Disparador />
      </ToastComponentProvider>,
    );

    await user.click(screen.getByRole("button", { name: "disparar 1" }));
    expect(screen.getByText("Salvo com sucesso")).toBeTruthy();

    await user.click(screen.getByRole("button", { name: "Fechar" }));

    await waitFor(() => {
      expect(screen.queryByText("Salvo com sucesso")).toBeNull();
    });
  });
});
