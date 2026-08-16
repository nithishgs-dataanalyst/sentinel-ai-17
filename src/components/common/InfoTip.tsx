import { Info } from "lucide-react";
import type { ReactNode } from "react";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

export const glossary: Record<string, string> = {
  "AI Asset": "An AI capability discovered within a SaaS application.",
  "Partial Visibility":
    "Some interaction metadata is available, while certain fields are not exposed by the SaaS provider.",
  "Not Exposed": "The connected API does not provide this information.",
  "Discovery Source":
    "The API, configuration, audit log, or other evidence used to identify this capability.",
  "Governance Health":
    "Composite score derived from asset discovery, access visibility, monitoring coverage and review status.",
  "Monitoring Coverage":
    "The share of discovered AI capabilities for which an observable telemetry source exists.",
  "Demo Mode":
    "The interface is rendering typed mock data. No live SaaS tenant is connected.",
};

export function InfoTip({
  term,
  text,
  children,
  className,
}: {
  term?: string;
  text?: string;
  children?: ReactNode;
  className?: string;
}) {
  const content = text ?? (term ? glossary[term] : undefined) ?? "";
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <span
          className={cn(
            "inline-flex cursor-help items-center gap-1 underline decoration-dotted decoration-muted-foreground/60 underline-offset-4",
            className,
          )}
        >
          {children ?? term}
          {!children && <Info className="size-3.5 text-muted-foreground" />}
        </span>
      </TooltipTrigger>
      <TooltipContent className="max-w-xs text-xs leading-relaxed">
        {term && <span className="block font-semibold">{term}</span>}
        {content}
      </TooltipContent>
    </Tooltip>
  );
}
