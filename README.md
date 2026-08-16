# Copilot Sentinel

BUILD A PROFESSIONAL ENTERPRISE FRONTEND

Microsoft 365 Copilot AI Governance & Monitoring Platform

Build a production-quality frontend for an internship technical evaluation project.

The application demonstrates how an organization can:

Discover AI capabilities embedded inside SaaS applications.

Determine whether AI capabilities are enabled.

Identify users and groups that can access those capabilities.

View licenses, permissions, entitlements, and accessible resources.

Monitor AI interactions and available activity information.

Maintain a centralized AI Asset Inventory.

Clearly distinguish between information that is actually available from APIs and information that the SaaS platform does not expose.

The primary SaaS platform for this implementation is MICROSOFT 365 COPILOT.

The design must communicate:
"Enterprise AI Governance + SaaS AI Discovery + AI Activity Monitoring"

Do NOT make this look like a simple student CRUD dashboard.

It should look like a modern enterprise security/governance product similar in quality to Microsoft security, Datadog, Wiz, Vanta, or other enterprise SaaS governance platforms.

1. TECHNOLOGY

Use:

React.js

TypeScript

Tailwind CSS

shadcn/ui

Lucide React icons

Recharts for charts

Responsive layout

Component-based architecture

Prepare the frontend so that it can later connect to:

Backend:

Python

FastAPI

Database:

PostgreSQL

Authentication:

Microsoft Entra ID / Microsoft OAuth can be integrated later.

For now, create a clean API service layer with mock data so the UI works independently.

Do NOT hardcode data directly inside UI components.

Create:

src/
components/
pages/
layouts/
services/
hooks/
types/
data/
utils/

Create reusable components and typed interfaces.

2. VISUAL DESIGN SYSTEM

Use a premium enterprise security aesthetic.

Theme:

Dark-first interface

Deep navy / charcoal background

White and light-gray typography

Blue/cyan accent for active states

Green for healthy/enabled

Amber for warning/pending review

Red for disabled/risk

Subtle borders

Soft shadows

Minimal gradients

Professional spacing

Do NOT overuse glowing effects.

The UI should feel trustworthy, technical, clean and enterprise-grade.

Use rounded cards, but avoid excessive rounded/pill styling.

Typography should be highly readable.

Use consistent:

8px spacing system

Card padding

Border radius

Font hierarchy

Icon sizing

Table density

Status badges

3. GLOBAL APPLICATION LAYOUT

Create a persistent application shell.

Desktop layout:

LEFT SIDEBAR
+
TOP HEADER
+
MAIN CONTENT

Sidebar:

Logo:
"FLYYY"
Subtitle:
"AI Governance"

Navigation:

Overview
AI Assets
Discovery
AI Interactions
Users & Groups
Applications
Licenses & Permissions
Data Access
Monitoring
Audit Logs
Reports
Settings

Add section labels:

GOVERNANCE
MONITORING
ADMINISTRATION

Sidebar should support collapse/expand.

Bottom of sidebar:

System Status
"All systems operational"

User profile:

Admin User
Security Administrator

4. TOP HEADER

Header should contain:

Left:

Page title
Breadcrumb

Right:

Search
Notifications
Environment selector
User avatar

Environment selector:

Production
Development

Notification icon should show examples such as:

"Microsoft 365 Copilot discovery completed"

"3 AI assets require review"

"New AI interaction detected"

5. OVERVIEW DASHBOARD

Create the main Overview page.

Header:

"AI Governance Overview"

Subtitle:

"Centralized visibility into AI capabilities, access, and activity across your SaaS environment."

Top-right:

"Run Discovery"
button

Secondary:

"Export Report"

KPI CARDS

Create six premium metric cards.

AI Assets

Value:
12

Description:
"Discovered AI capabilities"

Icon:
Brain / Bot

Enabled Capabilities

Value:
9

Description:
"Currently active"

Status:
Healthy

Users With AI Access

Value:
248

Description:
"Across configured groups"

AI Interactions

Value:
1,842

Description:
"Last 30 days"

Pending Reviews

Value:
3

Description:
"Require governance review"

Warning state.

Data Sources

Value:
17

Description:
"Connected resources"

6. AI GOVERNANCE HEALTH

Create a large card:

"AI Governance Health"

Show circular/radial score:

87 / 100

Below it:

Access Governance
92%

Asset Coverage
88%

Monitoring Coverage
79%

Review Coverage
84%

Use progress bars.

Include explanation:

"Governance health is calculated from asset discovery, access visibility, monitoring coverage and review status."

7. AI ACTIVITY CHART

Create a large Recharts line/area chart.

Title:

"AI Interaction Activity"

Filters:

7 Days
30 Days
90 Days

X axis:
Date

Y axis:
Interactions

Show realistic mock data.

Add legend:

AI Interactions
Monitored Events

8. AI ASSET DISTRIBUTION

Create a chart showing AI assets by SaaS application.

Example:

Microsoft 365
Atlassian
Google Workspace
Salesforce
Slack
Notion

Microsoft 365 should be the primary implementation.

Use a donut chart.

9. RECENT AI ACTIVITY

Create a professional table.

Columns:

Time
User
Application
AI Capability
Action
Model
Monitoring Source
Status

Example:

10:42 AM
arun@company.com
Microsoft 365
Copilot
Prompt interaction
GPT model
Microsoft audit API
Observed

10:31 AM
priya@company.com
Microsoft 365
Copilot
Document assistance
Model unavailable
Audit API
Partial visibility

Use status badges:

Observed
Partial
Unavailable

10. GOVERNANCE ALERTS

Create a right-side or bottom card:

"Governance Alerts"

Examples:

High:
"3 users have Copilot access without completed review"

Medium:
"Prompt content unavailable through current API"

Low:
"Discovery data is 6 hours old"

Each alert has:

severity
title
description
timestamp
View button

11. AI ASSETS PAGE

Create page:

"AI Asset Inventory"

Subtitle:

"Discover and govern AI capabilities embedded within SaaS applications."

Top controls:

Search assets
Filter
Status
SaaS Application
AI Type
Review Status

Button:

"+ Add Asset"

ASSET TABLE

Columns:

AI Asset
Provider
SaaS Platform
Capability
Status
Users
Resources
Monitoring
Review
Last Discovered

Example:

Microsoft 365 Copilot

Provider:
Microsoft

Platform:
Microsoft 365

Capability:
AI Assistant

Status:
Enabled

Users:
45

Resources:
SharePoint, Teams, Outlook

Monitoring:
Partial

Review:
Pending Review

12. AI ASSET DETAIL PAGE

When an asset is clicked, open a detailed page.

Header:

Microsoft 365 Copilot

Badges:

Enabled
Discovered
Pending Review

Buttons:

Run Discovery
Mark Reviewed
Export

OVERVIEW

Show cards:

Provider
Microsoft

SaaS Platform
Microsoft 365

AI Type
SaaS AI Feature

Status
Enabled

Monitoring
Partial Visibility

Discovery Source
Microsoft 365 APIs

13. ACCESS & USERS

Create section:

"Access & Users"

Show:

Users with access:
45

Groups:
Sales
Management

License:
Microsoft 365 Copilot

Access status:
Enabled

Create a table:

User
Email
Group
License
Access
Last Activity

14. ACCESSIBLE RESOURCES

Create cards for:

Microsoft Teams
SharePoint
Outlook
OneDrive

Each card:

Resource name
Resource type
Access level
User count

Example:

SharePoint

Access:
Read / Write

Users:
45

15. DISCOVERY PAGE

Create a dedicated discovery workflow.

Header:

"SaaS AI Discovery"

Subtitle:

"Scan connected SaaS environments to identify embedded AI capabilities and access."

Create large discovery card.

Connection:

Microsoft 365

Status:
Connected

Last Scan:
Today, 10:32 AM

Button:

"Run Discovery"

DISCOVERY PROCESS

Show a stepper:

Connect SaaS

Discover Applications

Detect AI Capabilities

Resolve Permissions

Identify Licenses

Build AI Assets

Update Inventory

When running, show animated progress.

Example:

Scanning Microsoft 365...

Applications scanned:
18 / 24

AI capabilities discovered:
9

Users evaluated:
248

Permissions evaluated:
1,204

16. DISCOVERY RESULTS

Create result cards:

AI Capabilities Found
9

Enabled
7

Disabled
2

Requires Review
3

Then table:

Capability
Application
Enabled
Users
License
Source
Last Checked

17. AI INTERACTIONS PAGE

This is one of the most important pages.

Header:

"AI Interaction Monitoring"

Subtitle:

"Monitor observable AI activity across connected SaaS applications."

Top statistics:

Total Interactions
1,842

Observed
1,432

Partial Visibility
326

Unavailable Content
84

18. INTERACTION TABLE

Columns:

Timestamp
User
SaaS Application
AI Feature
Request
Response
Model
Usage
Source
Visibility

Example:

2026-08-16 10:42
arun@company.com
Microsoft 365
Copilot

Request:
"Summarize the sales report..."

Response:
Available

Model:
Not exposed

Usage:
Available

Source:
Audit API

Visibility:
Partial

IMPORTANT:

Do not falsely claim that Microsoft exposes full prompts/responses.

The UI must explicitly communicate visibility limitations.

Use:

"Available"
"Partially Available"
"Not Exposed"

19. INTERACTION DETAIL DRAWER

When clicking an interaction, open a right-side drawer.

Header:

"AI Interaction Details"

Show:

User
Application
AI Capability
Timestamp
Model
Request
Response
Usage
Source

For unavailable information display:

"Not exposed by SaaS API"

Use a neutral information box:

"Visibility limitation"

"Full prompt and response content is not available from the current Microsoft 365 monitoring source."

This is an important governance feature.

Never create fake prompt/response information just to fill the UI.

20. USERS & GROUPS PAGE

Header:

"Users & Groups"

Show:

Total Users
1,248

AI-enabled Users
248

Groups with AI Access
12

Users Pending Review
18

Table:

User
Email
Department
Groups
AI Access
Licenses
Last AI Activity
Risk

Add filters:

Department
AI Access
License
Risk

21. APPLICATIONS PAGE

Show connected SaaS applications.

Primary:

Microsoft 365

Other sample integrations:

Atlassian
Google Workspace
Salesforce
Slack
Notion

But clearly indicate:

"Demo / Planned"

for integrations that are not actually connected.

Microsoft 365:

Connected

Others:

Not Connected / Planned

Do NOT imply that APIs were actually integrated if they are not.

22. LICENSES & PERMISSIONS PAGE

Header:

"Licenses & Permissions"

Create cards:

AI Licenses
Copilot Licenses
Assigned
Available
Unassigned

Permission table:

User / Group
Capability
Permission
License
Source
Status

Include:

Enabled
Disabled
Inherited
Pending Review

23. DATA ACCESS PAGE

This page demonstrates governance depth.

Header:

"AI Data Access"

Subtitle:

"Understand what organizational resources are available to AI-enabled users."

Create resource graph/cards.

Example:

Microsoft 365 Copilot

Connected resources:

SharePoint
Teams
Outlook
OneDrive

For each:

Resource
Users
Permission
Sensitivity
AI Accessible

Use statuses:

Accessible
Restricted
Unknown

Add an information banner:

"AI accessibility reflects the permissions and visibility available through the connected SaaS environment. It does not imply that all content is exposed to the monitoring system."

24. MONITORING COVERAGE PAGE

Create a monitoring coverage dashboard.

Cards:

Assets Monitored
9 / 12

Interaction Visibility
78%

Prompt Visibility
Limited

Response Visibility
Limited

Audit Coverage
91%

Create a matrix:

Capability
Activity
Prompt
Response
Model
Usage

Microsoft 365 Copilot:

Activity:
Available

Prompt:
Not Exposed

Response:
Not Exposed

Model:
Partial

Usage:
Partial

Use clear visual indicators.

Green:
Available

Yellow:
Partial

Gray:
Not Exposed

25. AUDIT LOGS PAGE

Create enterprise audit table.

Columns:

Timestamp
Event
Actor
Application
Resource
Action
Result

Example:

10:42
AI Interaction Detected
Admin
Microsoft 365
Copilot
Monitor
Success

10:32
Discovery Completed
System
Microsoft 365
AI Capabilities
Discover
Success

10:10
Permission Changed
Admin
Microsoft 365
Sales Group
Update
Success

Add filters and search.

26. REPORTS PAGE

Header:

"Governance Reports"

Create report cards:

AI Asset Inventory Report

Access & Permission Report

AI Interaction Monitoring Report

Governance Health Report

Compliance Visibility Report

Each card:

Description
Last Generated
Format

Buttons:

View
Export PDF
Export CSV

27. SETTINGS PAGE

Sections:

Organization

SaaS Connections

Microsoft 365 Connection

Monitoring Configuration

Notification Settings

Data Retention

Security

API Configuration

Do not expose actual secrets.

Use masked fields.

28. MICROSOFT 365 CONNECTION UI

Create a professional connection setup page.

Header:

"Connect Microsoft 365"

Status:

Not Connected / Connected

Show:

Tenant ID
Directory
Admin Account
Connection Status

Button:

"Connect Microsoft 365"

Use Microsoft-style authentication visual.

After connection:

Connected

Tenant:
example.onmicrosoft.com

Last Sync:
2 minutes ago

29. GLOBAL SEARCH

Implement frontend search.

Search across:

AI Assets
Users
Groups
Applications
Interactions
Audit Logs

Show search dropdown with categories.

Example:

Search:
"Copilot"

Results:

AI Asset
Microsoft 365 Copilot

Application
Microsoft 365

Interaction
Copilot interaction

30. FILTERING

Every major table must support:

Search
Sort
Pagination
Filters
Clear Filters

Use reusable filter components.

31. EMPTY STATES

Design professional empty states.

Example:

"No AI interactions found"

"Try changing your filters or run a new discovery."

Button:

Run Discovery

Do not show blank screens.

32. LOADING STATES

Use skeleton loaders.

Do not use generic "Loading..." text everywhere.

Tables:
Skeleton rows

Cards:
Skeleton blocks

Charts:
Chart skeleton

Discovery:
Animated progress state

33. ERROR STATES

Create reusable error components.

Example:

"Unable to retrieve Microsoft 365 data."

Show:

Error ID
Timestamp
Retry button

Do not expose sensitive backend details.

34. RESPONSIVE DESIGN

Desktop:
Primary target.

Tablet:
Responsive sidebar.

Mobile:
Collapsible sidebar and horizontally scrollable tables.

All pages must remain usable.

35. MOCK DATA ARCHITECTURE

Create realistic typed mock data.

Create:

src/data/mockAssets.ts
src/data/mockInteractions.ts
src/data/mockUsers.ts
src/data/mockApplications.ts
src/data/mockAuditLogs.ts
src/data/mockDiscovery.ts

Create TypeScript interfaces:

AIAsset
AIInteraction
User
Group
SaaSApplication
License
Permission
DataResource
AuditEvent
DiscoveryRun

Keep mock data realistic.

36. API SERVICE LAYER

Prepare services:

src/services/api.ts

Functions:

getAIAssets()
getAIAsset(id)
getInteractions()
getUsers()
getGroups()
getApplications()
getLicenses()
getPermissions()
getAuditLogs()
runDiscovery()
getDiscoveryStatus()

Use mock implementations initially.

Structure them so they can later call:

GET /api/assets
GET /api/assets/:id
GET /api/interactions
GET /api/users
GET /api/groups
GET /api/applications
GET /api/licenses
GET /api/permissions
GET /api/audit-logs
POST /api/discovery/run
GET /api/discovery/status

Do not tightly couple the frontend to mock data.

37. IMPORTANT DATA HONESTY RULE

This project is being evaluated on technical understanding.

NEVER fabricate actual Microsoft 365 API capabilities.

Where information is unavailable, show:

"Not Exposed"

"Unavailable through current API"

"Partial Visibility"

"Requires additional telemetry"

This is a core product feature.

The application should demonstrate that the developer understands the difference between:

AI capability discovery

AI access discovery

AI activity monitoring

Actual prompt/response visibility

API limitations

38. DEMO MODE

Create a global:

"Demo Mode"

indicator.

Allow switching:

Demo Data
Live Data

Initially:

Demo Data = enabled

When Live Data is selected, show:

"Microsoft 365 connection required."

This prevents the UI from pretending that live Microsoft APIs are connected.

39. DISCOVERY SIMULATION

For demo purposes, "Run Discovery" should work.

When clicked:

Show progress:

Connecting...
Discovering applications...
Detecting AI capabilities...
Resolving users...
Resolving licenses...
Building AI assets...
Completed.

Then update:

Last Discovery
AI Asset Count
User Count
Capability Count

Use a simulated delay.

Make this easy to replace with a real FastAPI endpoint later.

40. NOTIFICATIONS

Create notification center.

Examples:

Discovery completed

3 assets require review

Monitoring visibility changed

Microsoft 365 connection healthy

New AI capability detected

41. SECURITY UX

Add security-oriented visual language.

Use icons for:

Shield
Lock
Eye
Database
Users
Key
Bot
Activity
Alert

Create "Security & Governance" terminology.

Avoid childish illustrations.

42. NAVIGATION ROUTES

Implement:

/dashboard
/assets
/assets/:id
/discovery
/interactions
/interactions/:id
/users
/groups
/applications
/licenses
/permissions
/data-access
/monitoring
/audit-logs
/reports
/settings
/settings/microsoft-365

Use React Router.

43. DEMO DATA

Use Microsoft 365 Copilot as the main demo asset.

Example:

Asset:
Microsoft 365 Copilot

Provider:
Microsoft

Platform:
Microsoft 365

Type:
SaaS AI Feature

Status:
Enabled

Users:
45

Groups:
Sales

Resources:
SharePoint
Teams
Outlook

Discovery Source:
Microsoft 365 APIs

Review:
Pending Review

Monitoring:
Partial Visibility

Create enough realistic data to make the dashboard feel populated.

44. UX DETAILS

Add tooltips for technical terminology.

Examples:

"AI Asset"
"An AI capability discovered within a SaaS application."

"Partial Visibility"
"Some interaction metadata is available, while certain fields are not exposed by the SaaS provider."

"Not Exposed"
"The connected API does not provide this information."

"Discovery Source"
"The API, configuration, audit log, or other evidence used to identify this capability."

45. IMPORTANT FRONTEND QUALITY REQUIREMENTS

Do not create a generic template.

Do not use excessive gradients.

Do not use random stock images.

Do not use huge hero sections.

Do not use unnecessary animations.

Do not create fake Microsoft branding that could imply official Microsoft software.

The interface should clearly appear to be an independent governance platform.

Use subtle animations:

Page transitions

Hover states

Chart animation

Discovery progress

Drawer transitions

Skeleton loading

46. DASHBOARD FIRST IMPRESSION

When the evaluator logs in, the first screen should immediately communicate:

"What AI exists?"

"Who can use it?"

"How is it being used?"

"What can we actually observe?"

"What requires governance attention?"

The dashboard should answer these five questions within a few seconds.

47. FINAL IMPLEMENTATION REQUIREMENT

Build the complete frontend now.

Prioritize:

Professional dashboard

AI Asset Inventory

AI Asset Detail

Discovery workflow

AI Interaction Monitoring

Users & Groups

Applications

Licenses & Permissions

Data Access

Monitoring Coverage

Audit Logs

Reports

Settings

Ensure all navigation works.

Ensure buttons work.

Ensure filters work.

Ensure tables have realistic data.

Ensure charts render.

Ensure the discovery simulation works.

Ensure the UI has no broken links, empty screens or placeholder components.

Use reusable components instead of duplicating code.

Make the project visually polished enough for an internship technical evaluation.

Most importantly, optimize the application around the evaluation criteria:

Problem understanding

Technical depth

Engineering quality

System design

Implementation quality

Trade-off reasoning

Edge-case handling

Documentation

Understanding of SaaS AI APIs

Understanding of monitoring limitations

The final frontend should feel like a real enterprise AI governance product rather than a college dashboard.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/5d85a783-2564-46b7-a8a8-bc72b7bb60f0).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
