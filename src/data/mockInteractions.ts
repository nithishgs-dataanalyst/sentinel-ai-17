import type { AIInteraction, ActivityPoint, MonitoringCoverageRow } from "@/types";

const users = [
  "arun@company.com",
  "priya@company.com",
  "meera@company.com",
  "karan@company.com",
  "divya@company.com",
  "rahul@company.com",
  "sneha@company.com",
  "vikram@company.com",
];

const features = [
  { feature: "Microsoft 365 Copilot", action: "Prompt interaction" },
  { feature: "Copilot in Outlook", action: "Email drafting" },
  { feature: "Copilot in Microsoft Teams", action: "Meeting recap generated" },
  { feature: "Copilot in SharePoint", action: "Document assistance" },
  { feature: "Copilot in Microsoft Loop", action: "Content generation" },
];

/**
 * Request descriptors that the Microsoft 365 audit schema actually surfaces
 * (activity type + accessed resources), never verbatim prompt content.
 */
const requestDescriptors = [
  "Copilot interaction against 1 SharePoint document",
  "Copilot interaction against 3 Exchange items",
  "Copilot interaction against 1 Teams meeting transcript",
  "Copilot interaction against 2 OneDrive files",
  "Copilot interaction — no resources referenced",
];

function iso(i: number) {
  const base = Date.UTC(2026, 7, 16, 10, 42, 0);
  return new Date(base - i * 7 * 60 * 1000).toISOString();
}

export const mockInteractions: AIInteraction[] = Array.from({ length: 48 }, (_, i) => {
  const f = features[i % features.length]!;
  const visibility: AIInteraction["visibility"] =
    i % 9 === 4 ? "not_exposed" : i % 3 === 1 ? "partial" : "available";
  const hasDescriptor = visibility !== "not_exposed";
  return {
    id: `int-${String(i + 1).padStart(4, "0")}`,
    timestamp: iso(i),
    user: users[i % users.length]!,
    application: "Microsoft 365",
    aiFeature: f.feature,
    action: f.action,
    request: hasDescriptor ? requestDescriptors[i % requestDescriptors.length]! : null,
    requestVisibility: hasDescriptor ? "partial" : "not_exposed",
    response: null,
    responseVisibility: "not_exposed",
    model: null,
    modelVisibility: i % 4 === 0 ? "partial" : "not_exposed",
    usage: i % 3 === 0 ? "1 Copilot interaction (billable unit)" : null,
    usageVisibility: i % 3 === 0 ? "available" : "unknown",
    source:
      i % 5 === 0
        ? "Microsoft Purview audit log"
        : "Microsoft 365 unified audit API (Graph)",
    visibility,
  };
});

export const interactionStats = {
  total: 1842,
  observed: 1432,
  partial: 326,
  unavailable: 84,
};

export const mockActivitySeries: Record<"7" | "30" | "90", ActivityPoint[]> = {
  "7": buildSeries(7, 210),
  "30": buildSeries(30, 62),
  "90": buildSeries(90, 55),
};

function buildSeries(days: number, base: number): ActivityPoint[] {
  const out: ActivityPoint[] = [];
  const end = Date.UTC(2026, 7, 16);
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date(end - i * 86400000);
    const wave = Math.sin(i / 3.1) * base * 0.22 + Math.cos(i / 7.7) * base * 0.13;
    const weekday = d.getUTCDay();
    const weekendFactor = weekday === 0 || weekday === 6 ? 0.42 : 1;
    const interactions = Math.max(4, Math.round((base + wave + (i % 5) * 4) * weekendFactor));
    out.push({
      date: d.toISOString().slice(0, 10),
      interactions,
      monitored: Math.round(interactions * (0.72 + ((i % 7) * 0.02))),
    });
  }
  return out;
}

export const mockMonitoringCoverage: MonitoringCoverageRow[] = [
  {
    id: "cov-1",
    capability: "Microsoft 365 Copilot",
    application: "Microsoft 365",
    activity: "available",
    prompt: "not_exposed",
    response: "not_exposed",
    model: "partial",
    usage: "partial",
    source: "Unified audit log (CopilotInteraction)",
  },
  {
    id: "cov-2",
    capability: "Copilot in Outlook",
    application: "Microsoft 365",
    activity: "available",
    prompt: "not_exposed",
    response: "not_exposed",
    model: "not_exposed",
    usage: "partial",
    source: "Unified audit log",
  },
  {
    id: "cov-3",
    capability: "Copilot in Microsoft Teams",
    application: "Microsoft 365",
    activity: "available",
    prompt: "not_exposed",
    response: "not_exposed",
    model: "not_exposed",
    usage: "partial",
    source: "Unified audit log + Teams reports",
  },
  {
    id: "cov-4",
    capability: "Copilot in SharePoint",
    application: "Microsoft 365",
    activity: "partial",
    prompt: "not_exposed",
    response: "not_exposed",
    model: "not_exposed",
    usage: "unknown",
    source: "Unified audit log (resource references only)",
  },
  {
    id: "cov-5",
    capability: "Copilot in Microsoft Loop",
    application: "Microsoft 365",
    activity: "not_exposed",
    prompt: "not_exposed",
    response: "not_exposed",
    model: "not_exposed",
    usage: "not_exposed",
    source: "No dedicated audit schema",
  },
  {
    id: "cov-6",
    capability: "Microsoft Copilot Studio",
    application: "Microsoft 365",
    activity: "unknown",
    prompt: "unknown",
    response: "unknown",
    model: "unknown",
    usage: "unknown",
    source: "Capability disabled — no telemetry",
  },
];

export const monitoringStats = {
  assetsMonitored: 9,
  assetsTotal: 12,
  interactionVisibility: 78,
  promptVisibility: "Limited",
  responseVisibility: "Limited",
  auditCoverage: 91,
};
