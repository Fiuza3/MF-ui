import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
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

  it("renderiza o valor em um input readonly", () => {
    render(<CopyField value="ABC-123" />);
    const input = screen.getByDisplayValue("ABC-123") as HTMLInputElement;

    expect(input.readOnly).toBe(true);
  });
});
