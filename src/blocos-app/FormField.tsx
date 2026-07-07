import * as React from 'react'

import { cn } from '../lib/cn'
import { Label } from '../primitivos/Label'

export type FormFieldProps = {
  label: React.ReactNode
  error?: React.ReactNode
  children: React.ReactNode
  className?: string
  htmlFor?: string
}

/**
 * Envelope genérico de campo de formulário: label + slot de input + mensagem de erro.
 * O input em si (Input, Select, Textarea, ...) é passado via `children`.
 */
function FormField({ label, error, children, className, htmlFor }: FormFieldProps) {
  const errorId = htmlFor ? `${htmlFor}-error` : undefined

  return (
    <div data-slot="form-field" className={cn('flex flex-col gap-1.5', className)}>
      <Label htmlFor={htmlFor}>{label}</Label>
      <div
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
      >
        {children}
      </div>
      {error && (
        <p id={errorId} role="alert" className="text-destructive text-xs font-medium">
          {error}
        </p>
      )}
    </div>
  )
}

export { FormField }
