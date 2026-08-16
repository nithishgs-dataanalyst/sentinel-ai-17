import type { Group, User } from "@/types";

const departments = [
  "Sales",
  "Management",
  "Engineering",
  "Legal",
  "Finance",
  "Marketing",
  "Support",
];

const firstNames = [
  "Arun",
  "Priya",
  "Meera",
  "Karan",
  "Divya",
  "Rahul",
  "Sneha",
  "Vikram",
  "Ananya",
  "Nikhil",
  "Fatima",
  "Joel",
  "Sara",
  "Rohit",
  "Kavya",
  "Imran",
  "Tara",
  "Dev",
  "Neha",
  "Sanjay",
  "Lakshmi",
  "Gaurav",
  "Ishaan",
  "Ritu",
  "Manav",
  "Pooja",
  "Aditya",
  "Zoya",
  "Harsh",
  "Nandini",
];

const lastNames = [
  "Sharma",
  "Nair",
  "Iyer",
  "Patel",
  "Rao",
  "Menon",
  "Gupta",
  "Chowdhury",
  "Reddy",
  "Kulkarni",
];

function seeded(i: number, mod: number) {
  return (i * 2654435761) % mod;
}

export const mockGroups: Group[] = [
  {
    id: "grp-sales",
    name: "Sales",
    description: "Global sales organization",
    memberCount: 96,
    aiEnabled: true,
    licenses: ["Microsoft 365 Copilot", "Microsoft 365 E5"],
    source: "Entra ID security group",
  },
  {
    id: "grp-management",
    name: "Management",
    description: "Directors and above",
    memberCount: 34,
    aiEnabled: true,
    licenses: ["Microsoft 365 Copilot", "Microsoft 365 E5"],
    source: "Entra ID security group",
  },
  {
    id: "grp-engineering",
    name: "Engineering",
    description: "Product and platform engineering",
    memberCount: 212,
    aiEnabled: true,
    licenses: ["Microsoft 365 E5"],
    source: "Entra ID security group",
  },
  {
    id: "grp-legal",
    name: "Legal",
    description: "Legal and compliance",
    memberCount: 18,
    aiEnabled: true,
    licenses: ["Microsoft 365 Copilot"],
    source: "Entra ID security group",
  },
  {
    id: "grp-finance",
    name: "Finance",
    description: "Finance and procurement",
    memberCount: 41,
    aiEnabled: false,
    licenses: ["Microsoft 365 E3"],
    source: "Entra ID security group",
  },
  {
    id: "grp-contractors",
    name: "Contractors",
    description: "External contractors — AI access blocked by policy",
    memberCount: 63,
    aiEnabled: false,
    licenses: ["Microsoft 365 E3"],
    source: "Entra ID dynamic group",
  },
];

export const mockUsers: User[] = Array.from({ length: 64 }, (_, i) => {
  const first = firstNames[i % firstNames.length];
  const last = lastNames[seeded(i + 3, lastNames.length)];
  const department = departments[seeded(i + 7, departments.length)];
  const aiAccess = i % 3 !== 2 && department !== "Support";
  const risk: User["risk"] = i % 11 === 0 ? "high" : i % 4 === 0 ? "medium" : "low";
  const review: User["review"] = i % 7 === 0 ? "pending" : "reviewed";
  return {
    id: `usr-${String(i + 1).padStart(3, "0")}`,
    name: `${first} ${last}`,
    email: `${first.toLowerCase()}${i === 0 ? "" : i}@company.com`,
    department,
    groups: [department, ...(i % 5 === 0 ? ["Management"] : [])],
    aiAccess,
    licenses: aiAccess
      ? ["Microsoft 365 Copilot", "Microsoft 365 E5"]
      : ["Microsoft 365 E3"],
    lastAIActivity: aiAccess
      ? new Date(Date.UTC(2026, 7, 16, 10 - (i % 9), 55 - (i % 50))).toISOString()
      : null,
    risk,
    review,
  };
});

// Ensure the headline demo users exist with stable identities.
mockUsers[0] = {
  ...mockUsers[0],
  name: "Arun Sharma",
  email: "arun@company.com",
  department: "Sales",
  groups: ["Sales"],
  aiAccess: true,
  licenses: ["Microsoft 365 Copilot", "Microsoft 365 E5"],
  risk: "medium",
  review: "pending",
};
mockUsers[1] = {
  ...mockUsers[1],
  name: "Priya Nair",
  email: "priya@company.com",
  department: "Management",
  groups: ["Management", "Sales"],
  aiAccess: true,
  licenses: ["Microsoft 365 Copilot", "Microsoft 365 E5"],
  risk: "low",
  review: "reviewed",
};
mockUsers[2] = {
  ...mockUsers[2],
  name: "Meera Iyer",
  email: "meera@company.com",
  department: "Legal",
  groups: ["Legal"],
  aiAccess: true,
  licenses: ["Microsoft 365 Copilot"],
  risk: "high",
  review: "pending",
};

export const userStats = {
  totalUsers: 1248,
  aiEnabledUsers: 248,
  groupsWithAIAccess: 12,
  usersPendingReview: 18,
};
