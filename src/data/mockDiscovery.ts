import type { DiscoveryResultRow, DiscoveryRun, DiscoveryStep } from "@/types";

export const discoverySteps: DiscoveryStep[] = [
  {
    id: "connect",
    label: "Connect SaaS",
    description: "Authenticate to the tenant using the registered Entra ID application.",
  },
  {
    id: "apps",
    label: "Discover Applications",
    description: "Enumerate service plans, admin configuration and installed apps.",
  },
  {
    id: "capabilities",
    label: "Detect AI Capabilities",
    description: "Match discovered services against the AI capability signature catalog.",
  },
  {
    id: "permissions",
    label: "Resolve Permissions",
    description: "Resolve directory roles, group membership and resource permissions.",
  },
  {
    id: "licenses",
    label: "Identify Licenses",
    description: "Map AI-enabling SKUs and service plans to users and groups.",
  },
  {
    id: "assets",
    label: "Build AI Assets",
    description: "Normalize findings into governed AI asset records.",
  },
  {
    id: "inventory",
    label: "Update Inventory",
    description: "Persist the inventory and record discovery evidence.",
  },
];

export const initialDiscoveryRun: DiscoveryRun = {
  id: "run-1042",
  startedAt: "2026-08-16T10:28:00Z",
  completedAt: "2026-08-16T10:32:00Z",
  status: "completed",
  currentStep: discoverySteps.length,
  applicationsScanned: 24,
  applicationsTotal: 24,
  capabilitiesFound: 9,
  usersEvaluated: 248,
  permissionsEvaluated: 1204,
};

export const discoverySummary = {
  capabilitiesFound: 9,
  enabled: 7,
  disabled: 2,
  requiresReview: 3,
};

export const mockDiscoveryResults: DiscoveryResultRow[] = [
  {
    id: "dr-1",
    capability: "Microsoft 365 Copilot",
    application: "Microsoft 365",
    enabled: true,
    users: 45,
    license: "Microsoft 365 Copilot",
    source: "Graph service plans",
    lastChecked: "2026-08-16T10:32:00Z",
  },
  {
    id: "dr-2",
    capability: "Copilot in Outlook",
    application: "Microsoft 365",
    enabled: true,
    users: 42,
    license: "Microsoft 365 Copilot",
    source: "Graph service plans",
    lastChecked: "2026-08-16T10:32:00Z",
  },
  {
    id: "dr-3",
    capability: "Copilot in Microsoft Teams",
    application: "Microsoft 365",
    enabled: true,
    users: 38,
    license: "Microsoft 365 Copilot",
    source: "Graph service plans",
    lastChecked: "2026-08-16T10:32:00Z",
  },
  {
    id: "dr-4",
    capability: "Copilot in SharePoint",
    application: "Microsoft 365",
    enabled: true,
    users: 31,
    license: "Microsoft 365 Copilot",
    source: "Admin configuration",
    lastChecked: "2026-08-16T10:32:00Z",
  },
  {
    id: "dr-5",
    capability: "Copilot in Microsoft Loop",
    application: "Microsoft 365",
    enabled: true,
    users: 12,
    license: "Microsoft 365 Copilot",
    source: "Admin configuration",
    lastChecked: "2026-08-16T10:32:00Z",
  },
  {
    id: "dr-6",
    capability: "Copilot in Word / Excel / PowerPoint",
    application: "Microsoft 365",
    enabled: true,
    users: 45,
    license: "Microsoft 365 Copilot",
    source: "Graph service plans",
    lastChecked: "2026-08-16T10:32:00Z",
  },
  {
    id: "dr-7",
    capability: "Copilot Chat (web grounding)",
    application: "Microsoft 365",
    enabled: true,
    users: 248,
    license: "Included with Entra ID sign-in",
    source: "Admin configuration",
    lastChecked: "2026-08-16T10:32:00Z",
  },
  {
    id: "dr-8",
    capability: "Microsoft Copilot Studio",
    application: "Microsoft 365",
    enabled: false,
    users: 0,
    license: "Power Platform",
    source: "Power Platform admin API",
    lastChecked: "2026-08-16T10:32:00Z",
  },
  {
    id: "dr-9",
    capability: "Microsoft Security Copilot",
    application: "Microsoft 365",
    enabled: false,
    users: 0,
    license: "Security Compute Units",
    source: "Graph service plans",
    lastChecked: "2026-08-16T10:32:00Z",
  },
];

export const discoveryProgressMessages = [
  "Connecting to Microsoft 365 tenant…",
  "Discovering applications…",
  "Detecting AI capabilities…",
  "Resolving users and permissions…",
  "Resolving licenses…",
  "Building AI assets…",
  "Updating inventory…",
];
