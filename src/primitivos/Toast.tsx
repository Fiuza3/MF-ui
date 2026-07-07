'use client'

import * as React from 'react'
import * as ToastPrimitive from '@radix-ui/react-toast'
import { cva, type VariantProps } from 'class-variance-authority'
import { XIcon } from 'lucide-react'

import { cn } from '../lib/cn'

function ToastProvider({
  ...props
}: React.ComponentProps<typeof ToastPrimitive.Provider>) {
  return <ToastPrimitive.Provider data-slot="toast-provider" {...props} />
}

function ToastViewport({
  className,
  ...props
}: React.ComponentProps<typeof ToastPrimitive.Viewport>) {
  return (
    <ToastPrimitive.Viewport
      data-slot="toast-viewport"
      className={cn(
        'fixed top-0 z-100 flex max-h-screen w-full flex-col-reverse p-4 sm:top-auto sm:right-0 sm:bottom-0 sm:flex-col md:max-w-[420px]',
        className,
      )}
      {...props}
    />
  )
}

const toastVariants = cva(
  'data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-(--radix-toast-swipe-end-x) data-[swipe=move]:translate-x-(--radix-toast-swipe-move-x) data-[swipe=move]:transition-none group relative pointer-events-auto flex w-full items-center justify-between gap-3 overflow-hidden rounded-md border p-4 shadow-lg transition-all data-[swipe=end]:animate-out data-[state=closed]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:animate-in data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full',
  {
    variants: {
      variant: {
        default: 'bg-popover text-popover-foreground border-border',
        success: 'bg-popover text-popover-foreground border-primary/40',
        destructive: 'bg-destructive text-white border-destructive',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

function ToastRoot({
  className,
  variant,
  ...props
}: React.ComponentProps<typeof ToastPrimitive.Root> & VariantProps<typeof toastVariants>) {
  return (
    <ToastPrimitive.Root
      data-slot="toast"
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  )
}

function ToastTitle({ className, ...props }: React.ComponentProps<typeof ToastPrimitive.Title>) {
  return (
    <ToastPrimitive.Title
      data-slot="toast-title"
      className={cn('text-sm font-semibold', className)}
      {...props}
    />
  )
}

function ToastDescription({
  className,
  ...props
}: React.ComponentProps<typeof ToastPrimitive.Description>) {
  return (
    <ToastPrimitive.Description
      data-slot="toast-description"
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  )
}

function ToastAction({
  className,
  ...props
}: React.ComponentProps<typeof ToastPrimitive.Action>) {
  return (
    <ToastPrimitive.Action
      data-slot="toast-action"
      className={cn(
        'shrink-0 rounded-md border bg-transparent px-3 py-1.5 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50',
        className,
      )}
      {...props}
    />
  )
}

function ToastClose({ className, ...props }: React.ComponentProps<typeof ToastPrimitive.Close>) {
  return (
    <ToastPrimitive.Close
      data-slot="toast-close"
      aria-label="Fechar"
      className={cn(
        'shrink-0 rounded-md p-1 text-foreground/60 opacity-0 transition-opacity hover:text-foreground focus-visible:opacity-100 focus-visible:outline-none group-hover:opacity-100',
        className,
      )}
      {...props}
    >
      <XIcon className="size-4" />
    </ToastPrimitive.Close>
  )
}

export type ToastVariant = NonNullable<VariantProps<typeof toastVariants>['variant']>

export type ToastData = {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  variant?: ToastVariant
  duration?: number
  action?: { label: string; onClick: () => void }
}

type ToastInput = Omit<ToastData, 'id'>

type ToastContextValue = {
  toasts: ToastData[]
  toast: (data: ToastInput) => string
  dismiss: (id: string) => void
}

const ToastContext = React.createContext<ToastContextValue | null>(null)

let toastSeq = 0
function gerarToastId(): string {
  toastSeq += 1
  return `toast-${toastSeq}-${Date.now()}`
}

/** Provider da fila de toasts — envolve a árvore da aplicação uma única vez. */
function ToastComponentProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<ToastData[]>([])

  const dismiss = React.useCallback((id: string) => {
    setToasts((atual) => atual.filter((t) => t.id !== id))
  }, [])

  const toast = React.useCallback((data: ToastInput) => {
    const id = gerarToastId()
    setToasts((atual) => [...atual, { ...data, id }])
    return id
  }, [])

  const value = React.useMemo(() => ({ toasts, toast, dismiss }), [toasts, toast, dismiss])

  return (
    <ToastContext.Provider value={value}>
      <ToastProvider>
        {children}
        {toasts.map((t) => (
          <ToastRoot
            key={t.id}
            variant={t.variant}
            duration={t.duration ?? 5000}
            onOpenChange={(open) => {
              if (!open) dismiss(t.id)
            }}
          >
            <div className="flex flex-col gap-1">
              {t.title && <ToastTitle>{t.title}</ToastTitle>}
              {t.description && <ToastDescription>{t.description}</ToastDescription>}
            </div>
            {t.action && (
              <ToastAction altText={t.action.label} onClick={t.action.onClick}>
                {t.action.label}
              </ToastAction>
            )}
            <ToastClose />
          </ToastRoot>
        ))}
        <ToastViewport />
      </ToastProvider>
    </ToastContext.Provider>
  )
}

/** Hook de acesso à fila de toasts — precisa estar dentro de `<ToastComponentProvider>`. */
function useToast(): ToastContextValue {
  const context = React.useContext(ToastContext)
  if (!context) {
    throw new Error('useToast deve ser usado dentro de <ToastComponentProvider>')
  }
  return context
}

export {
  ToastProvider,
  ToastViewport,
  ToastRoot as Toast,
  ToastTitle,
  ToastDescription,
  ToastAction,
  ToastClose,
  ToastComponentProvider,
  useToast,
  toastVariants,
}
