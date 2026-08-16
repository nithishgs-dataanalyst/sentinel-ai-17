import type { ComponentType, ReactNode } from "react";

import { StatusBadge, type Tone } from "@/components/common/StatusBadge";
import { cn } from "@/lib/utils";

export function Panel({
  title,
  description,
  actions,
  children,
  className,
  bodyClassName,
}: {
  title?: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
}) {
  return (
    <section className={cn("panel flex flex-col", className)}>
      {(title || actions) && (
        <header className="flex flex-wrap items-start justify-between gap-3 border-b border-border px-5 py-4">
          <div className="min-w-0">
            {title && (
              <h2 className="text-sm font-semibold tracking-tight text-foreground">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-1 text-xs text-muted-foreground">{description}</p>
            )}
          </div>
          {actions && <div className="flex items-center gap-2">{actions}</div>}
        </header>
      )}
      <div className={cn("p-5", bodyClassName)}>{children}</div>
    </section>
  );
}

export function KpiCard({
  label,
  value,
  description,
  icon: Icon,
  tone = "neutral",
  badge,
  loading,
}: {
  label: string;
  value: string | number;
  description?: string;
  icon: ComponentType<{ className?: string }>;
  tone?: Tone;
  badge?: string;
  loading?: boolean;
}) {
  const accent: Record<Tone, string> = {
    success: "text-success",
    warning: "text-warning",
    danger: "text-destructive",
    info: "text-info",
    neutral: "text-muted-foreground",
    accent: "text-primary",
  };

  return (
    <div className="panel group relative overflow-hidden p-5 transition-colors hover:border-primary/40">
      <div className="flex items-start justify-between gap-3">
        <p className="text-eyebrow">{label}</p>
        <span
          className={cn(
            "flex size-8 shrink-0 items-center justify-center rounded-md border border-border bg-secondary",
            accent[tone],
          )}
        >
          <Icon className="size-4" />
        </span>
      </div>
      <p className="tabular mt-3 text-3xl font-semibold tracking-tight text-foreground">
        {loading ? "—" : value}
      </p>
      <div className="mt-2 flex items-center gap-2">
        {description && <p className="text-xs text-muted-foreground">{description}</p>}
      </div>
      {badge && (
        <div className="mt-3">
          <StatusBadge tone={tone}>{badge}</StatusBadge>
        </div>
      )}
    </div>
  );
}

export function StatTile({
  label,
  value,
  hint,
  tone = "neutral",
}: {
  label: string;
  value: ReactNode;
  hint?: string;
  tone?: Tone;
}) {
  const accent: Record<Tone, string> = {
    success: "text-success",
    warning: "text-warning",
    danger: "text-destructive",
    info: "text-info",
    neutral: "text-foreground",
    accent: "text-primary",
  };
  return (
    <div className="panel p-4">
      <p className="text-eyebrow">{label}</p>
      <p className={cn("tabular mt-2 text-2xl font-semibold", accent[tone])}>{value}</p>
      {hint && <p className="mt-1 text-xs text-muted-foreground">{hint}</p>}
    </div>
  );
}

export function InfoBanner({
  children,
  title,
  icon: Icon,
}: {
  children: ReactNode;
  title?: string;
  icon?: ComponentType<{ className?: string }>;
}) {
  return (
    <div className="flex gap-3 rounded-lg border border-info/25 bg-info/5 p-4">
      {Icon && <Icon className="mt-0.5 size-4 shrink-0 text-info" />}
      <div className="text-xs leading-relaxed text-muted-foreground">
        {title && <p className="mb-1 text-sm font-medium text-foreground">{title}</p>}
        {children}
      </div>
    </div>
  );
}
