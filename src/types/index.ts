/**
 * Domain types for the FLYYY AI Governance platform.
 *
 * These mirror the response shapes the FastAPI backend is expected to return
 * (see src/services/api.ts for the endpoint mapping).
 */

/** Whether a piece of information can actually be retrieved from the SaaS API. */
export type Visibility = "available" | "partial" | "not_exposed" | "unknown";

export type AssetStatus = "enabled" | "disabled" | "unknown";
export type ReviewStatus = "reviewed" | "pending" | "not_required";
export type MonitoringLevel = "full" | "partial" | "none";
export type RiskLevel = "low" | "medium" | "high";
export type Severity = "high" | "medium" | "low";
export type ConnectionStatus = "connected" | "not_connected" | "planned";

export interface AIAsset {
  id: string;
  name: string;
  provider: string;
  platform: string;
  aiType: string;
  capability: string;
  status: AssetStatus;
  userCount: number;
  groups: string[];
  resources: string[];
  monitoring: MonitoringLevel;
  review: ReviewStatus;
  discoverySource: string;
  lastDiscovered: string;
  description: string;
  license: string;
  dataProcessing: string;
  risk: RiskLevel;
}

export interface AIInteraction {
  id: string;
  timestamp: string;
  user: string;
  application: string;
  aiFeature: string;
  action: string;
  /** Short request descriptor when the API exposes one. */
  request: string | null;
  requestVisibility: Visibility;
  response: string | null;
  responseVisibility: Visibility;
  model: string | null;
  modelVisibility: Visibility;
  usage: string | null;
  usageVisibility: Visibility;
  source: string;
  visibility: Visibility;
}

export interface Group {
  id: string;
  name: string;
  description: string;
  memberCount: number;
  aiEnabled: boolean;
  licenses: string[];
  source: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  department: string;
  groups: string[];
  aiAccess: boolean;
  licenses: string[];
  lastAIActivity: string | null;
  risk: RiskLevel;
  review: ReviewStatus;
}

export interface SaaSApplication {
  id: string;
  name: string;
  vendor: string;
  category: string;
  connection: ConnectionStatus;
  aiCapabilities: number;
  users: number;
  lastSync: string | null;
  monitoring: MonitoringLevel;
  notes: string;
}

export interface License {
  id: string;
  name: string;
  sku: string;
  total: number;
  assigned: number;
  platform: string;
  aiEnabling: boolean;
}

export interface Permission {
  id: string;
  principal: string;
  principalType: "user" | "group";
  capability: string;
  permission: string;
  license: string;
  source: string;
  status: "enabled" | "disabled" | "inherited" | "pending";
}

export interface DataResource {
  id: string;
  name: string;
  type: string;
  platform: string;
  users: number;
  permission: string;
  sensitivity: "public" | "internal" | "confidential" | "restricted";
  aiAccessible: "accessible" | "restricted" | "unknown";
  asset: string;
}

export interface AuditEvent {
  id: string;
  timestamp: string;
  event: string;
  actor: string;
  application: string;
  resource: string;
  action: string;
  result: "success" | "failure" | "warning";
}

export interface DiscoveryStep {
  id: string;
  label: string;
  description: string;
}

export interface DiscoveryRun {
  id: string;
  startedAt: string;
  completedAt: string | null;
  status: "idle" | "running" | "completed" | "failed";
  currentStep: number;
  applicationsScanned: number;
  applicationsTotal: number;
  capabilitiesFound: number;
  usersEvaluated: number;
  permissionsEvaluated: number;
}

export interface DiscoveryResultRow {
  id: string;
  capability: string;
  application: string;
  enabled: boolean;
  users: number;
  license: string;
  source: string;
  lastChecked: string;
}

export interface GovernanceAlert {
  id: string;
  severity: Severity;
  title: string;
  description: string;
  timestamp: string;
}

export interface NotificationItem {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  type: "info" | "success" | "warning";
}

export interface MonitoringCoverageRow {
  id: string;
  capability: string;
  application: string;
  activity: Visibility;
  prompt: Visibility;
  response: Visibility;
  model: Visibility;
  usage: Visibility;
  source: string;
}

export interface GovernanceReport {
  id: string;
  name: string;
  description: string;
  lastGenerated: string;
  formats: string[];
  category: string;
}

export interface ActivityPoint {
  date: string;
  interactions: number;
  monitored: number;
}

export interface OverviewMetrics {
  aiAssets: number;
  enabledCapabilities: number;
  usersWithAccess: number;
  interactions30d: number;
  pendingReviews: number;
  dataSources: number;
  health: {
    score: number;
    accessGovernance: number;
    assetCoverage: number;
    monitoringCoverage: number;
    reviewCoverage: number;
  };
  assetDistribution: { name: string; value: number }[];
}
