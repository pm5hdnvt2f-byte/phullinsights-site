// EDIT HERE: Insights page wording and every article. Keep newest articles first.
export type Post = {
  // Used in the page address. Use lowercase words separated by hyphens.
  slug: string;
  title: string;
  // Use YYYY-MM-DD so dates sort and display correctly.
  date: string;
  excerpt: string;
  // Each array item becomes a separate paragraph.
  body: string[];
};

export const insightsPageContent = {
  metadata: {
    title: "Insights — Phull Insights",
    description:
      "Field notes and short essays on regulated manufacturing, medtech distribution, and multi-site supply chains.",
  },
  heading: "Insights",
  introduction:
    "Field notes from inside regulated manufacturing and multi-site distribution — what's actually breaking, and what fixed it.",
  backLinkLabel: "← All insights",
};

export const posts: Post[] = [
  {
    slug: "branch-networks-and-their-own-p-and-l",
    title: "Why branch networks lie to their own P&L",
    date: "2026-08-14",
    excerpt:
      "A 16-branch network can hit every regional target and still be losing money on the transactions that actually matter. Here's where the number goes missing.",
    body: [
      "Placeholder draft — replace with the full article before publishing.",
      "A branch network's P&L is built for regional accountability, not for cost-to-serve. That's a reasonable design choice, and it's also exactly why the number that should trigger a redesign — the true cost of the smallest, most complex orders — never shows up on anyone's dashboard.",
      "The fix isn't a bigger spreadsheet. It's re-tracing the physical journey of the transactions that are actually losing money, and measuring what the org chart's version of the P&L was never built to see.",
    ],
  },
  {
    slug: "medtech-distribution-problem",
    title: "The medtech distribution problem nobody puts in a slide",
    date: "2026-07-22",
    excerpt:
      "Regulated supply chains are graded on compliance, not speed. That trade-off is usually the right one — until it quietly becomes an excuse.",
    body: [
      "Placeholder draft — replace with the full article before publishing.",
      "Every regulated distribution network has a version of this sentence in its playbook: 'we move carefully because the product demands it.' True, and also the sentence most likely to be hiding an operating model that hasn't been re-tested in years.",
      "The diagnostic question worth asking isn't 'are we compliant' — it's 'which of our controls are actually protecting patients, and which are protecting the org chart.'",
    ],
  },
  {
    slug: "what-six-sigma-gets-wrong",
    title: "What Six Sigma gets wrong about supply chains",
    date: "2026-06-30",
    excerpt:
      "Six Sigma is built for a process with a fixed boundary. Supply chains don't have one. That mismatch is where most improvement programmes quietly stall.",
    body: [
      "Placeholder draft — replace with the full article before publishing.",
      "A production line has a start and an end. A supply chain doesn't — it hands off between systems, companies, and people who've never met, and the handoff is usually where the defect actually lives.",
      "Borrow the rigour of Six Sigma. Don't borrow its assumption that the process boundary is obvious — in a supply chain, drawing that boundary correctly is most of the work.",
    ],
  },
];
