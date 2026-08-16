/**
 * API service layer.
 *
 * Every UI surface reads through these functions. Today they resolve from typed
 * mock data after a simulated latency; switching to the FastAPI backend only
 * requires flipping `USE_MOCK` to false (or setting VITE_API_BASE_URL) — no UI
 * component imports mock data directly.
 *
 * Backend contract:
 *   GET  /api/assets
 *   GET  /api/assets/:id
 *   GET  /api/interactions
 *   GET  /api/interactions/:id
 *   GET  /api/users
 *   GET  /api/groups
 *   GET  /api/applications
 *   GET  /api/licenses
 *   GET  /api/permissions
 *   GET  /api/data-access
 *   GET  /api/monitoring/coverage
 *   GET  /api/audit-logs
 *   GET  /api/overview
 *   GET  /api/reports
 *   POST /api/discovery/run
 *   GET  /api/discovery/status
 */

import { mockApplications, mockNotifications, mockReports } from "@/data/mockApplications";
import { mockAlerts, mockAuditLogs } from "@/data/mockAuditLogs";
import {
  mockAssets,
  mockDataResources,
  mockLicenses,
  mockPermissions,
} from "@/data/mockAssets";
import {
  discoveryProgressMessages,
  discoverySummary,
  discoverySteps,
  initialDiscoveryRun,
  mockDiscoveryResults,
} from "@/data/mockDiscovery";
import {
  interactionStats,
  mockActivitySeries,
  mockInteractions,
  mockMonitoringCoverage,
  monitoringStats,
} from "@/data/mockInteractions";
import { mockGroups, mockUsers, userStats } from "@/data/mockUsers";
import type {
  AIAsset,
  AIInteraction,
  ActivityPoint,
  AuditEvent,
  DataResource,
  DiscoveryResultRow,
  DiscoveryRun,
  GovernanceAlert,
  GovernanceReport,
  Group,
  License,
  MonitoringCoverageRow,
  NotificationItem,
  OverviewMetrics,
  Permission,
  SaaSApplication,
  User,
} from "@/types";

export const API_BASE_URL = import.meta.env["VITE_API_BASE_URL"] ?? "/api";

/** Demo Mode is the default: no live Microsoft 365 tenant is connected. */
export const USE_MOCK = true;

export class ApiError extends Error {
  errorId: string;
  timestamp: string;
  constructor(message: string) {
    super(message);
    this.name = "ApiError";
    this.errorId = `ERR-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
    this.timestamp = new Date().toISOString();
  }
}

function delay<T>(value: T, ms = 320): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

/** Placeholder for the real transport; kept so swapping backends is mechanical. */
async function request<T>(path: string): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    headers: { "Content-Type": "application/json" },
  });
  if (!res.ok) throw new ApiError(`Request to ${path} failed with ${res.status}`);
  return (await res.json()) as T;
}

export async function getAIAssets(): Promise<AIAsset[]> {
  if (!USE_MOCK) return request<AIAsset[]>("/assets");
  return delay(mockAssets);
}

export async function getAIAsset(id: string): Promise<AIAsset | null> {
  if (!USE_MOCK) return request<AIAsset>(`/assets/${id}`);
  return delay(mockAssets.find((a) => a.id === id) ?? null);
}

export async function getInteractions(): Promise<AIInteraction[]> {
  if (!USE_MOCK) return request<AIInteraction[]>("/interactions");
  return delay(mockInteractions);
}

export async function getInteraction(id: string): Promise<AIInteraction | null> {
  if (!USE_MOCK) return request<AIInteraction>(`/interactions/${id}`);
  return delay(mockInteractions.find((i) => i.id === id) ?? null);
}

export async function getInteractionStats() {
  return delay(interactionStats);
}

export async function getUsers(): Promise<User[]> {
  if (!USE_MOCK) return request<User[]>("/users");
  return delay(mockUsers);
}

export async function getUserStats() {
  return delay(userStats);
}

export async function getGroups(): Promise<Group[]> {
  if (!USE_MOCK) return request<Group[]>("/groups");
  return delay(mockGroups);
}

export async function getApplications(): Promise<SaaSApplication[]> {
  if (!USE_MOCK) return request<SaaSApplication[]>("/applications");
  return delay(mockApplications);
}

export async function getLicenses(): Promise<License[]> {
  if (!USE_MOCK) return request<License[]>("/licenses");
  return delay(mockLicenses);
}

export async function getPermissions(): Promise<Permission[]> {
  if (!USE_MOCK) return request<Permission[]>("/permissions");
  return delay(mockPermissions);
}

export async function getDataResources(): Promise<DataResource[]> {
  if (!USE_MOCK) return request<DataResource[]>("/data-access");
  return delay(mockDataResources);
}

export async function getMonitoringCoverage(): Promise<MonitoringCoverageRow[]> {
  if (!USE_MOCK) return request<MonitoringCoverageRow[]>("/monitoring/coverage");
  return delay(mockMonitoringCoverage);
}

export async function getMonitoringStats() {
  return delay(monitoringStats);
}

export async function getAuditLogs(): Promise<AuditEvent[]> {
  if (!USE_MOCK) return request<AuditEvent[]>("/audit-logs");
  return delay(mockAuditLogs);
}

export async function getAlerts(): Promise<GovernanceAlert[]> {
  return delay(mockAlerts);
}

export async function getNotifications(): Promise<NotificationItem[]> {
  return delay(mockNotifications);
}

export async function getReports(): Promise<GovernanceReport[]> {
  return delay(mockReports);
}

export async function getActivitySeries(range: "7" | "30" | "90"): Promise<ActivityPoint[]> {
  return delay(mockActivitySeries[range], 200);
}

export async function getOverviewMetrics(): Promise<OverviewMetrics> {
  if (!USE_MOCK) return request<OverviewMetrics>("/overview");
  return delay({
    aiAssets: 12,
    enabledCapabilities: 9,
    usersWithAccess: 248,
    interactions30d: 1842,
    pendingReviews: 3,
    dataSources: 17,
    health: {
      score: 87,
      accessGovernance: 92,
      assetCoverage: 88,
      monitoringCoverage: 79,
      reviewCoverage: 84,
    },
    assetDistribution: [
      { name: "Microsoft 365", value: 7 },
      { name: "Atlassian", value: 1 },
      { name: "Google Workspace", value: 1 },
      { name: "Salesforce", value: 1 },
      { name: "Slack", value: 1 },
      { name: "Notion", value: 1 },
    ],
  });
}

export async function getDiscoveryResults(): Promise<DiscoveryResultRow[]> {
  return delay(mockDiscoveryResults);
}

export async function getDiscoverySummary() {
  return delay(discoverySummary);
}

export async function getDiscoveryStatus(): Promise<DiscoveryRun> {
  if (!USE_MOCK) return request<DiscoveryRun>("/discovery/status");
  return delay(initialDiscoveryRun, 150);
}

export interface DiscoveryProgress {
  stepIndex: number;
  message: string;
  applicationsScanned: number;
  applicationsTotal: number;
  capabilitiesFound: number;
  usersEvaluated: number;
  permissionsEvaluated: number;
  done: boolean;
}

/**
 * Simulated discovery run. Replace the body with a POST to /api/discovery/run
 * plus polling of /api/discovery/status — the callback contract stays identical.
 */
export function runDiscovery(
  onProgress: (progress: DiscoveryProgress) => void,
): { cancel: () => void; promise: Promise<DiscoveryRun> } {
  let cancelled = false;
  const total = discoverySteps.length;

  const promise = new Promise<DiscoveryRun>((resolve) => {
    let step = 0;
    const tick = () => {
      if (cancelled) return;
      const ratio = (step + 1) / total;
      onProgress({
        stepIndex: step,
        message: discoveryProgressMessages[step] ?? "Working…",
        applicationsScanned: Math.round(24 * ratio),
        applicationsTotal: 24,
        capabilitiesFound: Math.round(9 * ratio),
        usersEvaluated: Math.round(248 * ratio),
        permissionsEvaluated: Math.round(1204 * ratio),
        done: step === total - 1,
      });
      step += 1;
      if (step < total) {
        setTimeout(tick, 900);
      } else {
        resolve({
          ...initialDiscoveryRun,
          id: `run-${Math.floor(Math.random() * 9000 + 1000)}`,
          startedAt: new Date().toISOString(),
          completedAt: new Date().toISOString(),
          status: "completed",
        });
      }
    };
    setTimeout(tick, 400);
  });

  return { cancel: () => (cancelled = true), promise };
}
