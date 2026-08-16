import type { GovernanceReport, NotificationItem, SaaSApplication } from "@/types";

export const mockApplications: SaaSApplication[] = [
  {
    id: "app-m365",
    name: "Microsoft 365",
    vendor: "Microsoft",
    category: "Productivity suite",
    connection: "connected",
    aiCapabilities: 7,
    users: 1248,
    lastSync: "2026-08-16T10:32:00Z",
    monitoring: "partial",
    notes:
      "Primary implementation. Discovery via Microsoft Graph, admin configuration and the unified audit log.",
  },
  {
    id: "app-atlassian",
    name: "Atlassian",
    vendor: "Atlassian",
    category: "Work management",
    connection: "planned",
    aiCapabilities: 1,
    users: 0,
    lastSync: null,
    monitoring: "none",
    notes: "Demo / Planned — no API integration implemented.",
  },
  {
    id: "app-google",
    name: "Google Workspace",
    vendor: "Google",
    category: "Productivity suite",
    connection: "planned",
    aiCapabilities: 1,
    users: 0,
    lastSync: null,
    monitoring: "none",
    notes: "Demo / Planned — no API integration implemented.",
  },
  {
    id: "app-salesforce",
    name: "Salesforce",
    vendor: "Salesforce",
    category: "CRM",
    connection: "planned",
    aiCapabilities: 1,
    users: 0,
    lastSync: null,
    monitoring: "none",
    notes: "Demo / Planned — no API integration implemented.",
  },
  {
    id: "app-slack",
    name: "Slack",
    vendor: "Salesforce",
    category: "Communication",
    connection: "not_connected",
    aiCapabilities: 1,
    users: 0,
    lastSync: null,
    monitoring: "none",
    notes: "Demo / Planned — no API integration implemented.",
  },
  {
    id: "app-notion",
    name: "Notion",
    vendor: "Notion Labs",
    category: "Knowledge base",
    connection: "not_connected",
    aiCapabilities: 1,
    users: 0,
    lastSync: null,
    monitoring: "none",
    notes: "Demo / Planned — no API integration implemented.",
  },
];

export const mockNotifications: NotificationItem[] = [
  {
    id: "ntf-1",
    title: "Microsoft 365 discovery completed",
    description: "9 AI capabilities detected across 24 applications.",
    timestamp: "2026-08-16T10:32:00Z",
    type: "success",
  },
  {
    id: "ntf-2",
    title: "3 AI assets require review",
    description: "Copilot in SharePoint, Loop and Teams are pending governance review.",
    timestamp: "2026-08-16T09:14:00Z",
    type: "warning",
  },
  {
    id: "ntf-3",
    title: "New AI interaction detected",
    description: "Copilot interaction observed for arun@company.com.",
    timestamp: "2026-08-16T10:42:00Z",
    type: "info",
  },
  {
    id: "ntf-4",
    title: "Monitoring visibility changed",
    description: "Prompt content remains not exposed by the current audit source.",
    timestamp: "2026-08-15T18:02:00Z",
    type: "warning",
  },
  {
    id: "ntf-5",
    title: "Microsoft 365 connection healthy",
    description: "Token refresh succeeded. Graph permissions validated.",
    timestamp: "2026-08-15T06:00:00Z",
    type: "success",
  },
];

export const mockReports: GovernanceReport[] = [
  {
    id: "rep-inventory",
    name: "AI Asset Inventory Report",
    description:
      "Complete inventory of discovered AI capabilities, their status, owners and discovery evidence.",
    lastGenerated: "2026-08-16T08:00:00Z",
    formats: ["PDF", "CSV"],
    category: "Inventory",
  },
  {
    id: "rep-access",
    name: "Access & Permission Report",
    description:
      "Users, groups, licenses and entitlements that grant access to AI capabilities.",
    lastGenerated: "2026-08-15T08:00:00Z",
    formats: ["PDF", "CSV"],
    category: "Access",
  },
  {
    id: "rep-interactions",
    name: "AI Interaction Monitoring Report",
    description:
      "Observable AI activity with explicit annotation of fields not exposed by the SaaS provider.",
    lastGenerated: "2026-08-16T06:30:00Z",
    formats: ["PDF", "CSV"],
    category: "Monitoring",
  },
  {
    id: "rep-health",
    name: "Governance Health Report",
    description:
      "Composite governance score across discovery, access, monitoring and review coverage.",
    lastGenerated: "2026-08-14T08:00:00Z",
    formats: ["PDF"],
    category: "Governance",
  },
  {
    id: "rep-visibility",
    name: "Compliance Visibility Report",
    description:
      "Documents which governance signals are available versus unavailable through connected APIs.",
    lastGenerated: "2026-08-12T08:00:00Z",
    formats: ["PDF", "CSV"],
    category: "Compliance",
  },
];
