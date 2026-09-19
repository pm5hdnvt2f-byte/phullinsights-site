// EDIT HERE: service descriptions and the four methodology steps.
export const serviceSummaries = [
  {
    slug: "advisory",
    name: "Advisory",
    summary:
      "Operating model design, network and branch strategy, and turnaround leadership for supply chains carrying tens to hundreds of millions in throughput.",
  },
  {
    slug: "technology",
    name: "Technology",
    summary:
      "Tools that reconstruct what actually happened in a supply chain — ingesting the emails, ERP exports, and PDFs nobody has time to read, and turning them into a journey you can see.",
  },
  {
    slug: "methodology",
    name: "Methodology",
    summary:
      "A four-stage diagnostic, drawn from Six Sigma and PRINCE2 discipline, that finds root cause before it prescribes a fix.",
  },
  {
    slug: "insights",
    name: "Insights",
    summary:
      "Field notes from inside regulated manufacturing and multi-site distribution — what's actually breaking, and what fixed it.",
  },
];

export const methodology = [
  {
    step: "01",
    name: "Map",
    description:
      "Trace the physical and information flow as it actually runs — not as the org chart or the process manual says it does.",
  },
  {
    step: "02",
    name: "Measure",
    description:
      "Quantify the friction: dwell time, exception rate, cost to serve, and the points where service actually fails.",
  },
  {
    step: "03",
    name: "Diagnose",
    description:
      "Isolate root cause using structured root-cause analysis, not the loudest anecdote in the room.",
  },
  {
    step: "04",
    name: "Rebuild",
    description:
      "Redesign the operating model — and the technology behind it, where that's the real constraint — then hand over a plan the team can run without you.",
  },
];

export const servicesPageContent = {
  metadata: {
    title: "Services — Phull Insights",
    description:
      "Advisory, technology, methodology, and insights: four ways Phull Insights works with supply chains under pressure to perform.",
  },
  heading: "Services",
  introduction:
    "Four ways in, depending on whether the problem is the operating model, the visibility into it, the discipline behind the review, or simply deciding whether this way of working fits.",
  sections: [
    {
      slug: "advisory",
      name: "Advisory",
      paragraphs: [
        "Operating model design, network and branch strategy, and turnaround leadership for supply chains carrying tens to hundreds of millions in throughput.",
        "businesses running a distribution or branch network under margin or service pressure, where the current structure was inherited rather than designed.",
        "a diagnosed root cause, a redesigned operating model, and hands-on leadership through the first phase of change where that's useful.",
      ],
      labels: [null, "Who it's for: ", "What you get: "],
    },
    {
      slug: "technology",
      name: "Technology",
      paragraphs: [
        "Tools that ingest the unstructured data a supply chain already produces — emails, ERP exports, delivery notes, scanned PDFs — and reconstruct the actual journey an order or shipment took.",
        "teams who suspect their reporting doesn't reflect reality, but don't have the hours to trace it by hand.",
        "a working visibility tool built around your own data, not a slide deck describing what one could look like.",
      ],
      labels: [null, "Who it's for: ", "What you get: "],
    },
    {
      slug: "methodology",
      name: "Methodology",
      paragraphs: [
        "A four-stage diagnostic, drawn from Six Sigma and PRINCE2 discipline, that finds root cause before it prescribes a fix. Every engagement runs through all four stages, in order.",
      ],
      labels: [null],
    },
    {
      slug: "insights",
      name: "Insights",
      paragraphs: [
        "Field notes and short essays drawn from live engagements — what's actually breaking in regulated manufacturing and multi-site distribution, and what fixed it.",
        "anyone deciding whether this way of working fits their problem, before the first conversation.",
      ],
      labels: [null, "Who it's for: "],
      link: { href: "/insights/", label: "Read the latest insights" },
    },
  ],
};
