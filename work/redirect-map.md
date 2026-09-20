# Recommended production redirects

Owner approval recorded 20 September 2026. These permanent redirects are approved for future implementation after the production platform, current routes and traffic are checked. They are not active in the preview and production remains unchanged.

| Existing route | Recommended destination |
|---|---|
| `/executive-leadership/` | `/recruiter/` |
| `/track-record/` | `/insights/` |
| `/track-record/otif-branch-network/` | `/insights/delivery-confirmed-otif/` |
| `/track-record/temperature-controlled-logistics/` | `/insights/cold-chain-sla-redesign/` |
| `/track-record/regulated-medtech-baseline/` | `/insights/` |
| `/track-record/network-restructuring/` | `/insights/` |
| `/medtech-supply-chain-consultancy/` | `/services/medtech-supply-chain/` |
| `/operations-network-transformation/` | `/services/operations-transformation/` |
| `/supply-chain-diagnostic/` | `/services/supply-chain-consultancy/` |
| `/insights/otif-score-that-hid-the-real-problem/` | `/insights/delivery-confirmed-otif/` |
| `/insights/inventory-rises-while-service-falls/` | `/insights/inventory-service-protected/` |
| `/insights/when-a-control-becomes-a-queue/` | `/insights/` until the queued case page exists |
| `/insights/every-spreadsheet-tells-a-different-story/` | `/methodology/` |
| `/insights/diagnostic-that-says-do-not-build/` | `/journeyiq/` while the temporary name remains |

Validation after implementation: one hop only, destination returns 200, destination canonical is self-referencing, no redirect loops, query strings preserved where required, and analytics annotations distinguish migrated traffic.
