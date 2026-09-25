"use client";

import * as React from "react";
import { CheckIcon, CopyIcon } from "lucide-react";

import { cn } from "../lib/cn";
import { Button } from "../primitivos/Button";
import { Input } from "../primitivos/Input";
import { Label } from "../primitivos/Label";

export type CopyFieldProps = {
  value: string;
  label?: React.ReactNode;
  className?: string;
  /** Tempo (ms) que o feedback de "copiado" fica visível. Padrão: 2000. */
  feedbackDurationMs?: number;
};

type EstadoCopia = "ocioso" | "copiado" | "falhou";

const MENSAGEM: Record<EstadoCopia, string> = {
  ocioso: "",
  copiado: "Copiado",
  falhou: "Não foi possível copiar. O valor está selecionado: copie manualmente.",
};

// A Clipboard API rejeita fora de HTTPS e sem permissão — falha é caminho
// esperado, não exceção.
async function copiarTexto(texto: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(texto);
    return true;
  } catch {
    return false;
  }
}

/** Campo somente-leitura com botão de copiar para a área de transferência. */
function CopyField({ value, label, className, feedbackDurationMs = 2000 }: CopyFieldProps) {
  const [estado, setEstado] = React.useState<EstadoCopia>("ocioso");
  const inputRef = React.useRef<HTMLInputElement>(null);
  const timerRef = React.useRef<number | undefined>(undefined);
  const inputId = React.useId();

  React.useEffect(() => () => window.clearTimeout(timerRef.current), []);

  async function copiarValor() {
    window.clearTimeout(timerRef.current);
    const copiou = await copiarTexto(value);
    if (!copiou) inputRef.current?.select();
    setEstado(copiou ? "copiado" : "falhou");
    timerRef.current = window.setTimeout(() => setEstado("ocioso"), feedbackDurationMs);
  }

  const copiado = estado === "copiado";

  return (
    <div data-slot="copy-field" className={cn("flex flex-col gap-1.5", className)}>
      {label && <Label htmlFor={inputId}>{label}</Label>}
      <div className="flex items-center gap-2">
        <Input ref={inputRef} id={inputId} readOnly value={value} className="font-mono" />
        <Button
          type="button"
          variant="outline"
          size="icon"
          aria-label={copiado ? "Valor copiado" : "Copiar valor"}
          onClick={copiarValor}
        >
          {copiado ? <CheckIcon className="text-primary" /> : <CopyIcon />}
        </Button>
      </div>
      <p
        role="status"
        className={estado === "falhou" ? "text-muted-foreground text-xs" : "sr-only"}
      >
        {MENSAGEM[estado]}
      </p>
    </div>
  );
}

export { CopyField };
