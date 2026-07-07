'use client'

import * as React from 'react'
import { CheckIcon, CopyIcon } from 'lucide-react'

import { cn } from '../lib/cn'
import { Button } from '../primitivos/Button'
import { Input } from '../primitivos/Input'
import { Label } from '../primitivos/Label'

export type CopyFieldProps = {
  value: string
  label?: React.ReactNode
  className?: string
  /** Tempo (ms) que o feedback de "copiado" fica visível. Padrão: 2000. */
  feedbackDurationMs?: number
}

/** Campo somente-leitura com botão de copiar para a área de transferência. */
function CopyField({ value, label, className, feedbackDurationMs = 2000 }: CopyFieldProps) {
  const [copiado, setCopiado] = React.useState(false)
  const inputId = React.useId()

  async function copiarValor() {
    await navigator.clipboard.writeText(value)
    setCopiado(true)
    window.setTimeout(() => setCopiado(false), feedbackDurationMs)
  }

  return (
    <div data-slot="copy-field" className={cn('flex flex-col gap-1.5', className)}>
      {label && <Label htmlFor={inputId}>{label}</Label>}
      <div className="flex items-center gap-2">
        <Input id={inputId} readOnly value={value} className="font-mono" />
        <Button
          type="button"
          variant="outline"
          size="icon"
          aria-label={copiado ? 'Valor copiado' : 'Copiar valor'}
          onClick={copiarValor}
        >
          {copiado ? <CheckIcon className="text-primary" /> : <CopyIcon />}
        </Button>
      </div>
    </div>
  )
}

export { CopyField }
