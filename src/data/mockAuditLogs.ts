import type { AuditEvent, GovernanceAlert } from "@/types";

const templates: Omit<AuditEvent, "id" | "timestamp">[] = [
  {
    event: "AI Interaction Detected",
    actor: "System",
    application: "Microsoft 365",
    resource: "Microsoft 365 Copilot",
    action: "Monitor",
    result: "success",
  },
  {
    event: "Discovery Completed",
    actor: "System",
    application: "Microsoft 365",
    resource: "AI Capabilities",
    action: "Discover",
    result: "success",
  },
  {
    event: "Permission Changed",
    actor: "admin@company.com",
    application: "Microsoft 365",
    resource: "Sales Group",
    action: "Update",
    result: "success",
  },
  {
    event: "License Assigned",
    actor: "admin@company.com",
    application: "Microsoft 365",
    resource: "Microsoft 365 Copilot",
    action: "Assign",
    result: "success",
  },
  {
    event: "Audit Log Fetch",
    actor: "System",
    application: "Microsoft 365",
    resource: "Unified Audit Log",
    action: "Read",
    result: "warning",
  },
  {
    event: "Asset Marked Reviewed",
    actor: "admin@company.com",
    application: "Microsoft 365",
    resource: "Copilot in Outlook",
    action: "Review",
    result: "success",
  },
  {
    event: "Connector Token Refresh",
    actor: "System",
    application: "Microsoft 365",
    resource: "Entra ID application",
    action: "Authenticate",
    result: "success",
  },
  {
    event: "Report Exported",
    actor: "admin@company.com",
    application: "FLYYY",
    resource: "AI Asset Inventory Report",
    action: "Export",
    result: "success",
  },
  {
    event: "Monitoring Gap Recorded",
    actor: "System",
    application: "Microsoft 365",
    resource: "Copilot in Microsoft Loop",
    action: "Monitor",
    result: "failure",
  },
];

export const mockAuditLogs: AuditEvent[] = Array.from({ length: 54 }, (_, i) => {
  const t = templates[i % templates.length]!;
  return {
    ...t,
    id: `evt-${String(i + 1).padStart(4, "0")}`,
    timestamp: new Date(Date.UTC(2026, 7, 16, 10, 42, 0) - i * 19 * 60 * 1000).toISOString(),
  };
});

export const mockAlerts: GovernanceAlert[] = [
  {
    id: "alr-1",
    severity: "high",
    title: "3 users have Copilot access without completed review",
    description:
      "Access was granted through the Legal group license assignment but no governance review has been recorded.",
    timestamp: "2026-08-16T09:14:00Z",
  },
  {
    id: "alr-2",
    severity: "medium",
    title: "Prompt content unavailable through current API",
    description:
      "The Microsoft 365 unified audit schema records interaction events and referenced resources, not prompt or response text.",
    timestamp: "2026-08-16T08:05:00Z",
  },
  {
    id: "alr-3",
    severity: "medium",
    title: "Copilot in Microsoft Loop has no monitoring source",
    description:
      "This capability is enabled for 12 users but produces no audit records the connector can read.",
    timestamp: "2026-08-15T21:40:00Z",
  },
  {
    id: "alr-4",
    severity: "low",
    title: "Discovery data is 6 hours old",
    description: "Last successful discovery run completed at 10:32 today.",
    timestamp: "2026-08-16T04:32:00Z",
  },
];
