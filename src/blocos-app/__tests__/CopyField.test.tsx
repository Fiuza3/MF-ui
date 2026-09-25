import { describe, it, expect, vi } from "vitest";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CopyField } from "../CopyField";

// `userEvent.setup()` instala seu próprio stub de `navigator.clipboard` (jsdom não
// implementa a Clipboard API) — por isso o mock precisa ser definido DEPOIS do setup(),
// senão o stub do user-event sobrescreve o nosso.
function mockClipboardWriteText(): ReturnType<typeof vi.fn> {
  const writeTextMock = vi.fn().mockResolvedValue(undefined);
  Object.defineProperty(navigator, "clipboard", {
    value: { writeText: writeTextMock },
    configurable: true,
  });
  return writeTextMock;
}

describe("CopyField", () => {
  it("copia o valor para a área de transferência ao clicar", async () => {
    const user = userEvent.setup();
    const writeTextMock = mockClipboardWriteText();
    render(<CopyField value="ABC-123" label="Chave" />);

    await user.click(screen.getByRole("button", { name: "Copiar valor" }));

    expect(writeTextMock).toHaveBeenCalledWith("ABC-123");
  });

  it("mostra feedback de copiado após o clique", async () => {
    const user = userEvent.setup();
    mockClipboardWriteText();
    render(<CopyField value="ABC-123" />);

    await user.click(screen.getByRole("button", { name: "Copiar valor" }));

    expect(screen.getByRole("button", { name: "Valor copiado" })).toBeTruthy();
  });

  it("anuncia o resultado para leitor de tela", async () => {
    const user = userEvent.setup();
    mockClipboardWriteText();
    render(<CopyField value="ABC-123" />);

    await user.click(screen.getByRole("button", { name: "Copiar valor" }));

    expect(screen.getByRole("status")).toHaveTextContent("Copiado");
  });

  // Clipboard API rejeita fora de HTTPS e sem permissão; sem tratamento o clique
  // virava unhandled rejection e o usuário ficava sem nada.
  it("se a cópia falhar, seleciona o valor e avisa para copiar manualmente", async () => {
    const user = userEvent.setup();
    Object.defineProperty(navigator, "clipboard", {
      value: { writeText: vi.fn().mockRejectedValue(new Error("NotAllowedError")) },
      configurable: true,
    });
    render(<CopyField value="ABC-123" />);
    const input = screen.getByDisplayValue("ABC-123") as HTMLInputElement;

    await user.click(screen.getByRole("button", { name: "Copiar valor" }));

    expect(input.selectionStart).toBe(0);
    expect(input.selectionEnd).toBe("ABC-123".length);
    expect(screen.getByRole("status")).toHaveTextContent(/copie manualmente/i);
    expect(screen.queryByRole("button", { name: "Valor copiado" })).toBeNull();
  });

  it("clique repetido reinicia o tempo do feedback", async () => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
    try {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      mockClipboardWriteText();
      render(<CopyField value="ABC-123" feedbackDurationMs={2000} />);

      await user.click(screen.getByRole("button", { name: "Copiar valor" }));
      await act(() => vi.advanceTimersByTimeAsync(1500));
      await user.click(screen.getByRole("button", { name: "Valor copiado" }));
      await act(() => vi.advanceTimersByTimeAsync(1000));

      expect(screen.getByRole("button", { name: "Valor copiado" })).toBeTruthy();
    } finally {
      vi.useRealTimers();
    }
  });

  it("renderiza o valor em um input readonly", () => {
    render(<CopyField value="ABC-123" />);
    const input = screen.getByDisplayValue("ABC-123") as HTMLInputElement;

    expect(input.readOnly).toBe(true);
  });
});
