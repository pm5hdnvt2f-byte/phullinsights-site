# Executive profile preview evidence record

Status: preview-only working record created 22 September 2026. It does not approve a production release.

## Page brief

- Page: `/recruiter/`
- Primary audience: executive recruiters and hiring decision-makers
- Primary question: does Pupsi Phull fit the level, operating scale, sector and outcomes required for this mandate?
- Decision or action: decide whether to start a confidential fit conversation
- Search intent: find and assess Pupsi Phull's operations and supply chain executive profile
- Visual idea: move from mandate fit to separately contextualised scale, then outcomes, career trajectory, capabilities and next step
- Constraints: preserve Client, Recruiter and Peer routing; retain the current Phull Insights visual system; do not combine the £100m and £230m scopes; use the sustainability qualification exactly; do not publish

## Source priority applied

1. `Pupsi_Phull_Executive_Profile.pdf` for roles, remit, dates, scale, outcomes, sectors, capabilities and qualifications.
2. `Phull_Insights_ChatGPT_Project_Framework_v1.0.docx` for audience architecture, brand hierarchy, evidence rules, British English, SEO, accessibility and release checks.
3. Current preview implementation for the established design language and route structure.

## Claims used in the Recruiter route

| Claim | Source context | Time period | Preview status |
|---|---|---|---|
| More than 20 years in MedTech, logistics, distribution and technical services | Executive profile introduction | Career to September 2026 | Verified for preview |
| Current Head of Supply Chain Operations in a regulated UK MedTech business | Executive profile introduction and career snapshot | May 2026 to present | Verified for preview |
| £100m P&L accountability | Operations Director, RS Group; 16 RS Local branches plus Calibration and Oil Labs | April 2024 to July 2025 | Verified for preview; keep separate |
| £230m revenue scope | Value Added Solutions and Technical Director, RS Group; four technical service lines | December 2022 to April 2024 | Verified for preview; keep separate |
| £75m consolidated line haul portfolio | Head of Commercial and Strategy, DHL GlobalMatch | July 2020 to November 2022 | Verified for preview |
| Selected outcome metrics | Executive profile Selected Outcomes section | Role-specific periods stated in profile | Verified for preview with organisation context retained |
| Postgraduate Certificate in Sustainability, Cranfield University, 2026 | Project framework exact wording, supported by executive profile | 2026 | Use exactly |

## Material decision record

| Date | Decision | Rationale | Affected pages | Approval status |
|---|---|---|---|---|
| 2026-09-22 | Rebuild the Recruiter route around mandate fit, separate operating scale, sourced outcomes, career trajectory and leadership approach | The previous route listed metrics but did not give enough context for a recruiter to assess fit or distinguish scale correctly | `/recruiter/`; Person structured data | Preview requested by owner; production approval not implied |
| 2026-09-22 | Remove DSO and SLA metrics from the Recruiter route | These figures are absent from the supplied Executive Profile and therefore fail the requested source rule for recruiter-facing claims | `/recruiter/` | Preview requested by owner |
| 2026-09-22 | Replace Person `worksFor` with `affiliation` and add the current job title | The Executive Profile names a current UK MedTech remit; `worksFor: Phull Insights` could imply the wrong employer | Person structured data | Preview requested by owner |
