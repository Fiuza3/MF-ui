import * as React from "react";
import { ArrowDownRightIcon, ArrowUpRightIcon } from "lucide-react";

import { cn } from "../lib/cn";
import { Card, CardContent } from "../primitivos/Card";

export type StatCardDelta = {
  value: React.ReactNode;
  direction?: "up" | "down" | "neutral";
  /**
   * Significado da variação. Por padrão subir é positivo; em métrica invertida
   * (churn, custo, tempo de resposta) passe `tom: "negativo"` com `direction: "up"`.
   */
  tom?: "positivo" | "negativo" | "neutro";
};

export type StatCardProps = {
  label: React.ReactNode;
  value: React.ReactNode;
  icon?: React.ReactNode;
  delta?: StatCardDelta;
  className?: string;
};

type Tom = NonNullable<StatCardDelta["tom"]>;

const tomPorDirecao: Record<NonNullable<StatCardDelta["direction"]>, Tom> = {
  up: "positivo",
  down: "negativo",
  neutral: "neutro",
};

const corPorTom: Record<Tom, string> = {
  positivo: "text-success",
  negativo: "text-destructive",
  neutro: "text-muted-foreground",
};

const setaPorDirecao: Record<NonNullable<StatCardDelta["direction"]>, React.ReactNode> = {
  up: <ArrowUpRightIcon aria-hidden="true" />,
  down: <ArrowDownRightIcon aria-hidden="true" />,
  neutral: null,
};

/** Cartão de métrica única (label + valor + variação opcional) para dashboards. */
function StatCard({ label, value, icon, delta, className }: StatCardProps) {
  const direcao = delta?.direction ?? "neutral";
  const tom = delta?.tom ?? tomPorDirecao[direcao];

  return (
    <Card className={cn("gap-1 py-5", className)}>
      <CardContent className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 flex-col gap-1">
          <p className="text-muted-foreground text-xs font-medium uppercase tracking-wide">
            {label}
          </p>
          <p className="text-foreground text-2xl font-semibold tabular-nums">{value}</p>
          {delta && (
            <p
              data-direction={direcao}
              className={cn(
                "inline-flex items-center gap-0.5 text-xs font-medium [&_svg]:size-3.5 [&_svg]:shrink-0",
                corPorTom[tom],
              )}
            >
              {setaPorDirecao[direcao]}
              {delta.value}
            </p>
          )}
        </div>
        {icon && (
          <div
            data-slot="stat-card-icon"
            className="bg-accent/10 text-accent flex size-9 shrink-0 items-center justify-center rounded-md [&_svg]:size-4.5"
          >
            {icon}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export { StatCard };
