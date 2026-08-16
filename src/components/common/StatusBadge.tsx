import { cva, type VariantProps } from "class-variance-authority";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import type {
  AssetStatus,
  ConnectionStatus,
  MonitoringLevel,
  ReviewStatus,
  RiskLevel,
  Severity,
  Visibility,
} from "@/types";

const badge = cva(
  "inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 text-xs font-medium whitespace-nowrap",
  {
    variants: {
      tone: {
        success: "border-success/30 bg-success/10 text-success",
        warning: "border-warning/30 bg-warning/10 text-warning",
        danger: "border-destructive/35 bg-destructive/10 text-destructive",
        info: "border-info/30 bg-info/10 text-info",
        neutral: "border-border bg-secondary text-muted-foreground",
        accent: "border-primary/30 bg-primary/10 text-primary",
      },
    },
    defaultVariants: { tone: "neutral" },
  },
);

export type Tone = NonNullable<VariantProps<typeof badge>["tone"]>;

export function StatusBadge({
  tone,
  children,
  dot = true,
  className,
}: {
  tone: Tone;
  children: ReactNode;
  dot?: boolean;
  className?: string;
}) {
  return (
    <span className={cn(badge({ tone }), className)}>
      {dot && <span className="size-1.5 rounded-full bg-current" aria-hidden />}
      {children}
    </span>
  );
}

const visibilityMap: Record<Visibility, { tone: Tone; label: string }> = {
  available: { tone: "success", label: "Available" },
  partial: { tone: "warning", label: "Partially Available" },
  not_exposed: { tone: "neutral", label: "Not Exposed" },
  unknown: { tone: "neutral", label: "Unknown" },
};

export function VisibilityBadge({ value }: { value: Visibility }) {
  const v = visibilityMap[value];
  return <StatusBadge tone={v.tone}>{v.label}</StatusBadge>;
}

const assetStatusMap: Record<AssetStatus, { tone: Tone; label: string }> = {
  enabled: { tone: "success", label: "Enabled" },
  disabled: { tone: "danger", label: "Disabled" },
  unknown: { tone: "neutral", label: "Unknown" },
};

export function AssetStatusBadge({ value }: { value: AssetStatus }) {
  const v = assetStatusMap[value];
  return <StatusBadge tone={v.tone}>{v.label}</StatusBadge>;
}

const reviewMap: Record<ReviewStatus, { tone: Tone; label: string }> = {
  reviewed: { tone: "success", label: "Reviewed" },
  pending: { tone: "warning", label: "Pending Review" },
  not_required: { tone: "neutral", label: "Not Required" },
};

export function ReviewBadge({ value }: { value: ReviewStatus }) {
  const v = reviewMap[value];
  return <StatusBadge tone={v.tone}>{v.label}</StatusBadge>;
}

const monitoringMap: Record<MonitoringLevel, { tone: Tone; label: string }> = {
  full: { tone: "success", label: "Full" },
  partial: { tone: "warning", label: "Partial" },
  none: { tone: "neutral", label: "None" },
};

export function MonitoringBadge({ value }: { value: MonitoringLevel }) {
  const v = monitoringMap[value];
  return <StatusBadge tone={v.tone}>{v.label}</StatusBadge>;
}

const riskMap: Record<RiskLevel, { tone: Tone; label: string }> = {
  low: { tone: "success", label: "Low" },
  medium: { tone: "warning", label: "Medium" },
  high: { tone: "danger", label: "High" },
};

export function RiskBadge({ value }: { value: RiskLevel }) {
  const v = riskMap[value];
  return <StatusBadge tone={v.tone}>{v.label}</StatusBadge>;
}

const severityMap: Record<Severity, { tone: Tone; label: string }> = {
  high: { tone: "danger", label: "High" },
  medium: { tone: "warning", label: "Medium" },
  low: { tone: "info", label: "Low" },
};

export function SeverityBadge({ value }: { value: Severity }) {
  const v = severityMap[value];
  return <StatusBadge tone={v.tone}>{v.label}</StatusBadge>;
}

const connectionMap: Record<ConnectionStatus, { tone: Tone; label: string }> = {
  connected: { tone: "success", label: "Connected" },
  not_connected: { tone: "neutral", label: "Not Connected" },
  planned: { tone: "info", label: "Demo / Planned" },
};

export function ConnectionBadge({ value }: { value: ConnectionStatus }) {
  const v = connectionMap[value];
  return <StatusBadge tone={v.tone}>{v.label}</StatusBadge>;
}
