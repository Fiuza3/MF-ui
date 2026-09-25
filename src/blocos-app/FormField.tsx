"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "../lib/cn";
import { Label } from "../primitivos/Label";

export type FormFieldProps = {
  label: React.ReactNode;
  error?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  /** Id do controle. Sem ele, o FormField gera um e aplica no filho. */
  htmlFor?: string;
};

/**
 * Envelope genérico de campo de formulário: label + slot de input + mensagem de erro.
 * O input em si (Input, Textarea, SelectTrigger, ...) é passado via `children`, e recebe
 * id, aria-invalid e aria-describedby direto — é no controle que o estilo de erro e o
 * leitor de tela olham, não numa div em volta.
 */
function FormField({ label, error, children, className, htmlFor }: FormFieldProps) {
  const idGerado = React.useId();
  const controlId = htmlFor ?? idGerado;
  const errorId = `${controlId}-error`;
  const propsDoControle = {
    id: controlId,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? errorId : undefined,
  };

  return (
    <div data-slot="form-field" className={cn("flex flex-col gap-1.5", className)}>
      <Label htmlFor={controlId}>{label}</Label>
      {React.isValidElement(children) ? <Slot {...propsDoControle}>{children}</Slot> : children}
      {error && (
        <p id={errorId} role="alert" className="text-destructive text-xs font-medium">
          {error}
        </p>
      )}
    </div>
  );
}

export { FormField };
