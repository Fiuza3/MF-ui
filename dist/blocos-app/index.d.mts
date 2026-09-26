import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';

type AppShellProps = {
    sidebar: React.ReactNode;
    topbar: React.ReactNode;
    children: React.ReactNode;
    className?: string;
    /**
     * Largura da sidebar em tela larga, como classe do Tailwind. Padrão `w-64`.
     *
     * Existe porque painel de ferramenta às vezes quer trilho de ícones em vez
     * de menu com rótulo, e 256px de trilho é desperdício de tela. A gaveta do
     * celular **não** acompanha: lá o espaço é o da tela inteira e rótulo é o
     * que torna o menu utilizável com o polegar.
     */
    larguraSidebar?: string;
};
/**
 * Shell genérico de painel: sidebar fixa em telas largas, topbar sticky,
 * conteúdo scrollável. Sidebar/topbar/children são 100% controlados por props —
 * este bloco não conhece nada do domínio da aplicação que o consome.
 */
declare function AppShell({ sidebar, topbar, children, className, larguraSidebar }: AppShellProps): react_jsx_runtime.JSX.Element;

type EmptyStateProps = {
    icon?: React.ReactNode;
    title: React.ReactNode;
    description?: React.ReactNode;
    action?: React.ReactNode;
    className?: string;
};
/** Estado vazio genérico — usado por DataTable e livremente por qualquer view. */
declare function EmptyState({ icon, title, description, action, className }: EmptyStateProps): react_jsx_runtime.JSX.Element;

type DataTableColumn<TRow> = {
    key: string;
    header: React.ReactNode;
    render: (row: TRow) => React.ReactNode;
    className?: string;
};
type DataTableProps<TRow> = {
    columns: DataTableColumn<TRow>[];
    rows: TRow[];
    /** Extrai uma key estável de cada linha. Padrão: índice (usar quando possível uma key real). */
    getRowKey?: (row: TRow, index: number) => React.Key;
    loading?: boolean;
    /** Quantidade de linhas de skeleton exibidas durante `loading`. Padrão: 5. */
    loadingRowCount?: number;
    emptyState?: React.ReactNode | EmptyStateProps;
    page?: number;
    totalPages?: number;
    onPageChange?: (page: number) => void;
    className?: string;
};
/**
 * Tabela de dados genérica sobre o primitivo Table: colunas/linhas via props,
 * skeleton de carregamento, estado vazio e paginação integrada.
 */
declare function DataTable<TRow>({ columns, rows, getRowKey, loading, loadingRowCount, emptyState, page, totalPages, onPageChange, className, }: DataTableProps<TRow>): react_jsx_runtime.JSX.Element;

type StatCardDelta = {
    value: React.ReactNode;
    direction?: "up" | "down" | "neutral";
    /**
     * Significado da variação. Por padrão subir é positivo; em métrica invertida
     * (churn, custo, tempo de resposta) passe `tom: "negativo"` com `direction: "up"`.
     */
    tom?: "positivo" | "negativo" | "neutro";
};
type StatCardProps = {
    label: React.ReactNode;
    value: React.ReactNode;
    icon?: React.ReactNode;
    delta?: StatCardDelta;
    className?: string;
};
/** Cartão de métrica única (label + valor + variação opcional) para dashboards. */
declare function StatCard({ label, value, icon, delta, className }: StatCardProps): react_jsx_runtime.JSX.Element;

type PageHeaderBreadcrumbItem = {
    label: React.ReactNode;
    href?: string;
};
type PageHeaderProps = {
    title: React.ReactNode;
    breadcrumb?: PageHeaderBreadcrumbItem[];
    actions?: React.ReactNode;
    className?: string;
};
/** Cabeçalho de página genérico: breadcrumb opcional, título e slot de ações. */
declare function PageHeader({ title, breadcrumb, actions, className }: PageHeaderProps): react_jsx_runtime.JSX.Element;

type FormFieldProps = {
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
declare function FormField({ label, error, children, className, htmlFor }: FormFieldProps): react_jsx_runtime.JSX.Element;

type CopyFieldProps = {
    value: string;
    label?: React.ReactNode;
    className?: string;
    /** Tempo (ms) que o feedback de "copiado" fica visível. Padrão: 2000. */
    feedbackDurationMs?: number;
};
/** Campo somente-leitura com botão de copiar para a área de transferência. */
declare function CopyField({ value, label, className, feedbackDurationMs }: CopyFieldProps): react_jsx_runtime.JSX.Element;

export { AppShell, type AppShellProps, CopyField, type CopyFieldProps, DataTable, type DataTableColumn, type DataTableProps, EmptyState, type EmptyStateProps, FormField, type FormFieldProps, PageHeader, type PageHeaderBreadcrumbItem, type PageHeaderProps, StatCard, type StatCardDelta, type StatCardProps };
