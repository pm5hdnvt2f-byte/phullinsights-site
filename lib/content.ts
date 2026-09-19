export const services = [
  {
    slug: "diagnostic",
    name: "JourneyIQ diagnostic",
    summary:
      "A time-bound, evidence-led review that reconstructs the supply-chain journey and turns operational friction into a prioritised case for action.",
  },
  {
    slug: "advisory",
    name: "Operations advisory",
    summary:
      "Operating model design, network and branch strategy, and turnaround leadership for complex supply chains under margin, service, or compliance pressure.",
  },
  {
    slug: "monitoring",
    name: "Diagnostic monitoring",
    summary:
      "Focused refreshes that show whether priority exceptions are changing, whether interventions are holding, and where management attention should move next.",
  },
  {
    slug: "capability",
    name: "Team capability",
    summary:
      "Practical methods, decision routines, and handover support that help internal teams keep the diagnostic discipline after the engagement ends.",
  },
];

export const methodology = [
  {
    step: "01",
    name: "Map",
    description:
      "Trace the physical and information flow as it actually runs — including the handoffs, workarounds, and exceptions that formal process maps omit.",
  },
  {
    step: "02",
    name: "Measure",
    description:
      "Quantify service, inventory, time, and cost friction using agreed definitions and an explicit view of data quality.",
  },
  {
    step: "03",
    name: "Diagnose",
    description:
      "Connect symptoms to root causes, preserve the evidence trail, and separate observed facts from assumptions and estimates.",
  },
  {
    step: "04",
    name: "Rebuild",
    description:
      "Prioritise interventions, redesign the operating model where needed, and leave the team with a roadmap it can run and measure.",
  },
];

export const diagnosticOutputs = [
  {
    name: "Executive view",
    description:
      "A concise account of where performance and value are being lost, ordered by decision priority rather than chart count.",
  },
  {
    name: "Evidence trail",
    description:
      "Each material finding links back to the operational records, definitions, caveats, and assumptions that support it.",
  },
  {
    name: "Opportunity register",
    description:
      "Observed issues and estimated opportunities are kept distinct, with confidence and calculation logic visible.",
  },
  {
    name: "Action roadmap",
    description:
      "A sequenced set of management interventions, including what to test first and how progress should be reviewed.",
  },
];

export const evidenceLevels = [
  {
    name: "Observed",
    description: "Present in the source record or directly traceable to it.",
    example: "A delivery arrived after the agreed date.",
  },
  {
    name: "Calculated",
    description: "Derived through a documented, repeatable formula.",
    example: "Lead-time variance across an agreed analysis period.",
  },
  {
    name: "Assumed",
    description: "A business input that the client has reviewed and approved.",
    example: "An agreed inventory carrying-cost rate.",
  },
  {
    name: "Estimated",
    description: "An opportunity range combining evidence with stated assumptions.",
    example: "Potential value available if a defined source of variation is reduced.",
  },
  {
    name: "Recommended",
    description: "A proposed intervention, subject to operational judgement and ownership.",
    example: "Change a supplier review, planning parameter, or release routine.",
  },
];

export const trustPrinciples = [
  {
    name: "Minimum necessary data",
    description:
      "The diagnostic should request only the operational data needed to answer the agreed question. Personal, patient, and clinical data are outside the current proposition.",
  },
  {
    name: "Evidence before narrative",
    description:
      "Core metrics and financial logic use documented calculations. AI may assist interpretation of approved unstructured material, but not silently create operational facts.",
  },
  {
    name: "Visible uncertainty",
    description:
      "Data gaps, assumptions, confidence, and alternative explanations remain visible rather than being hidden by a polished score or summary.",
  },
  {
    name: "Controlled access and retention",
    description:
      "Any live engagement requires agreed access, storage, deletion, and retention controls before client data is transferred or processed.",
  },
  {
    name: "Human review",
    description:
      "Findings and recommendations are reviewed with accountable operators. The diagnostic supports management judgement; it does not replace it.",
  },
  {
    name: "No implied certification",
    description:
      "Public material describes an operating approach, not a claim of regulatory approval, security certification, or production readiness.",
  },
];

export type PostSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type Post = {
  slug: string;
  title: string;
  date: string;
  kind: "Illustrative scenario analysis" | "Practice note";
  readingTime: string;
  excerpt: string;
  disclosure: string;
  sections: PostSection[];
};

export const posts: Post[] = [
  {
    slug: "otif-score-that-hid-the-real-problem",
    title: "The OTIF score that hid the real problem",
    date: "2026-09-19",
    kind: "Illustrative scenario analysis",
    readingTime: "7 minute read",
    excerpt:
      "A stable headline service measure can coexist with growing expediting, repeated promise changes, and avoidable management effort. The journey matters more than the average.",
    disclosure:
      "This is an illustrative scenario based on recurring supply-chain patterns and the JourneyIQ diagnostic method. It does not describe a named client, completed engagement, or verified customer outcome.",
    sections: [
      {
        heading: "The situation",
        paragraphs: [
          "Imagine a regulated manufacturer whose headline on-time-in-full measure looks broadly stable. The monthly review shows no dramatic collapse, suppliers are still being scored, and the ERP continues to report receipts against purchase orders. Yet planners are spending more time chasing confirmations, production is receiving late notice of changes, and the business is holding more buffer than anyone planned.",
          "Nothing in that picture requires a false KPI. The measure may be correct according to its definition and still fail to describe the operating journey that creates the result.",
        ],
      },
      {
        heading: "What the headline misses",
        paragraphs: [
          "A single OTIF percentage compresses several different events: the original requirement, the supplier's first commitment, later promise changes, partial shipments, goods receipt, and the moment the material became usable. If the agreed date is repeatedly moved before the score is calculated, a late journey can finish as an on-time line. If partial deliveries are aggregated, a critical shortfall can disappear inside an acceptable order-level result.",
          "The operational burden also sits outside the metric. A line that arrives on time after five chasers, two escalations, and an emergency replan may score the same as a line that flowed without intervention. The customer sees the same receipt; the organisation pays a very different cost to achieve it.",
        ],
      },
      {
        heading: "How the diagnostic reframes it",
        paragraphs: [
          "JourneyIQ would start by reconstructing the sequence rather than choosing a new dashboard. The relevant record is not only the final receipt. It is the chain from requirement to commitment, change, shipment, receipt, and exception handling. The method then groups variation by supplier, material family, planning horizon, site, and exception type to test which patterns are systematic.",
          "The discipline is to keep the evidence layers separate. A changed promise date is observed. The number of changes is calculated. The operational cost of expediting may require an approved assumption. Any value opportunity is therefore an estimate with a visible confidence level, not a number presented as settled fact.",
        ],
        bullets: [
          "Which date is the service promise actually measured against?",
          "How often is that promise changed, and how late in the planning cycle?",
          "Which lines need manual intervention to achieve an acceptable result?",
          "Where do partial delivery, quarantine, or release timing alter the true service outcome?",
        ],
      },
      {
        heading: "The management decision",
        paragraphs: [
          "The point of the work is not to prove that OTIF is a bad measure. It is to decide where management action belongs. The evidence may support a supplier recovery plan, a clearer commitment rule, a planning-parameter change, a different escalation threshold, or a redefinition of the service measure. It may also show that the existing process is rational and the apparent friction comes from a different constraint.",
          "A useful diagnostic narrows the decision. It should show the few journeys creating disproportionate intervention and explain why they matter, without inviting a broad systems programme before the cause is understood.",
        ],
      },
      {
        heading: "What this scenario does not claim",
        paragraphs: [
          "This scenario does not claim a particular saving, service improvement, or implementation result. Those depend on the client's data, definitions, constraints, and willingness to act. It illustrates a testable proposition: a stable aggregate can conceal a deteriorating journey, and reconstructing that journey can reveal a more useful management question.",
        ],
      },
    ],
  },
  {
    slug: "when-a-control-becomes-a-queue",
    title: "When a control becomes a queue in a regulated supply chain",
    date: "2026-09-18",
    kind: "Illustrative scenario analysis",
    readingTime: "8 minute read",
    excerpt:
      "Compliance controls should protect product and patient safety. A diagnostic can test whether the surrounding handoffs are adding delay without weakening the control itself.",
    disclosure:
      "This is an illustrative MedTech and regulated-manufacturing scenario. It does not describe a real customer, regulatory finding, patient impact, or verified performance result.",
    sections: [
      {
        heading: "The situation",
        paragraphs: [
          "A regulated supply chain holds incoming material until the required checks, documents, and approvals are complete. That is appropriate. Over time, however, teams begin to describe every day in the queue as the unavoidable cost of compliance. Operations sees material waiting. Quality sees incomplete evidence. Procurement sees suppliers responding slowly. Each function is locally correct, but nobody owns the complete journey from receipt to usable stock.",
          "The diagnostic question is not whether controls should be removed. It is whether the control is doing the waiting, or whether the information and ownership around it are creating avoidable delay.",
        ],
      },
      {
        heading: "Protect the control and inspect the handoff",
        paragraphs: [
          "Regulated operations require a careful boundary. Product disposition, clinical decisions, and regulatory interpretation remain with appropriately qualified and authorised people. The operational diagnostic stays with the flow of materials, documents, approvals, and management information.",
          "That boundary still leaves important questions. Was the required document known at order placement? Did it arrive with the shipment? Was the receiving event visible to the reviewing team? Were exception categories applied consistently? Did a missing field stop the clock, or did the item wait before anyone identified the gap? These are flow and governance questions, not a request to dilute the standard.",
        ],
      },
      {
        heading: "The evidence to reconstruct",
        paragraphs: [
          "A useful view links a small set of timestamps and states: purchase requirement, supplier commitment, despatch, receipt, document availability, review start, query raised, response received, approval, and release. The precise fields will differ by organisation, and data quality may itself become the finding.",
          "The analysis then separates compliant processing time from preventable waiting. It looks for repeat patterns by supplier, document type, product family, site, and exception code. It also tests whether the process definition matches what teams actually do, because unofficial workarounds often sit between formal controls.",
        ],
        bullets: [
          "Required evidence defined too late in the journey",
          "Documents present but not visible to the reviewer",
          "Exceptions routed without clear ownership or response time",
          "Different teams using the same status to mean different things",
        ],
      },
      {
        heading: "What a responsible recommendation looks like",
        paragraphs: [
          "A responsible recommendation would preserve the required control and target the surrounding failure mode. That could mean bringing a document requirement forward, clarifying an exception owner, improving status visibility, changing a supplier review routine, or distinguishing genuinely different queues instead of treating them as one backlog.",
          "Any value estimate should remain conditional. Faster availability may affect service or inventory, but the diagnostic should not convert that possibility into a promised financial result without evidence and approved assumptions.",
        ],
      },
      {
        heading: "Why this matters for MedTech positioning",
        paragraphs: [
          "Generic visibility language is not enough in regulated manufacturing. The proposition has to show that operational improvement and control integrity are considered together. JourneyIQ is positioned as a diagnostic for operational and supply-chain decisions; it is not a clinical product, a quality-management system, or a substitute for regulatory expertise.",
        ],
      },
    ],
  },
  {
    slug: "inventory-rises-while-service-falls",
    title: "Why inventory can rise while service still falls",
    date: "2026-09-17",
    kind: "Illustrative scenario analysis",
    readingTime: "7 minute read",
    excerpt:
      "More stock is often a rational response to uncertainty. It can also spread the uncertainty across the network without addressing its source.",
    disclosure:
      "This is an illustrative scenario analysis. It uses no confidential customer data and makes no claim about realised savings or service improvement.",
    sections: [
      {
        heading: "The situation",
        paragraphs: [
          "A business responds to recurring shortages by adding buffer, bringing orders forward, and asking planners to watch critical suppliers more closely. Inventory increases, but service remains volatile. The intuitive conclusion is that the buffer is still too small. That may be true. It may also be treating several different journeys as if they were one problem.",
          "Aggregate inventory can grow while the specific material, location, or timing needed for service remains wrong. The total is visible; the mismatch is buried in the sequence.",
        ],
      },
      {
        heading: "Three patterns that look the same from a distance",
        paragraphs: [
          "The same high-inventory, low-service symptom can be produced by different causes. Supplier lead time may be variable rather than simply long. Planning parameters may be based on an old demand or delivery pattern. Material may arrive but remain unavailable because of documentation, inspection, allocation, or internal movement. Each cause implies a different intervention.",
          "A dashboard that begins with inventory value and service level can show the symptom clearly while leaving the causal journey unresolved.",
        ],
        bullets: [
          "Variation hidden behind an average supplier lead time",
          "Buffers placed at the wrong material, site, or stage",
          "Repeated promise changes triggering unnecessary replanning",
          "Received stock not yet available to the point of demand",
        ],
      },
      {
        heading: "From stock position to journey",
        paragraphs: [
          "The diagnostic links demand, order, commitment, shipment, receipt, and availability events for the journeys in scope. It compares the planned flow with the observed one and tests where variability enters. Segmentation matters: a policy that is sensible for stable, high-volume material may be inappropriate for a low-volume item with irregular documentation or supply risk.",
          "The analysis should resist false precision. Inventory carrying cost, shortage impact, and service consequence may need business assumptions. Those inputs should be visible, approved, and kept separate from observed transaction facts.",
        ],
      },
      {
        heading: "The decision sequence",
        paragraphs: [
          "The first decision is where to intervene, not how much inventory to remove. If variability is supplier-specific, the action may be commercial or operational recovery. If the mismatch is internal, it may be a planning, release, or allocation rule. If the data cannot distinguish these causes, improving the event definition may be more valuable than another optimisation model.",
          "Only after the source of variation is understood should the team test a policy change. The roadmap can then define a controlled intervention, the measures that would confirm improvement, and the conditions under which the change should be reversed.",
        ],
      },
      {
        heading: "What this scenario illustrates",
        paragraphs: [
          "JourneyIQ is not positioned as an inventory optimisation promise. Its role is to make the causal path and management choices clearer. The opportunity may be working capital, service, planning effort, or simply better control of uncertainty. The evidence decides which claim is supportable.",
        ],
      },
    ],
  },
  {
    slug: "every-spreadsheet-tells-a-different-story",
    title: "When every spreadsheet tells a different supply-chain story",
    date: "2026-09-16",
    kind: "Illustrative scenario analysis",
    readingTime: "8 minute read",
    excerpt:
      "Conflicting reports are not only a reporting problem. They are evidence about definitions, ownership, and the way decisions are being made.",
    disclosure:
      "This is an illustrative scenario based on common data-fragmentation patterns. It is not a report of a client project, named system, or verified result.",
    sections: [
      {
        heading: "The situation",
        paragraphs: [
          "Procurement has a supplier file, planning has a shortage tracker, logistics has a shipment view, and finance has the value. Each was built for a legitimate purpose. At the weekly meeting, the totals do not reconcile and the team spends its time explaining which file is current rather than deciding what to do.",
          "The usual response is to ask for one more consolidated report. That can help, but consolidation without a shared event model often creates a larger spreadsheet with the same disagreement inside it.",
        ],
      },
      {
        heading: "Treat disagreement as evidence",
        paragraphs: [
          "Different answers often reveal different definitions. One file may measure purchase-order lines; another may measure orders. One may use the original required date; another the latest confirmed date. A supplier name may map to several identifiers. A receipt can be present in one system before it becomes usable in another.",
          "These are not cosmetic issues. They determine whether the business is measuring supplier reliability, planning stability, logistics execution, or internal availability. A good diagnostic makes the distinctions explicit before it calculates a score.",
        ],
      },
      {
        heading: "Create a common journey without pretending the data is clean",
        paragraphs: [
          "The practical approach is to define the minimum journey in scope, map source fields to that journey, and preserve a link back to the original record. Blocking errors, warnings, and caveats should be treated differently. Missing required dates may prevent one calculation. Duplicate lines may require resolution. An incomplete analysis period may allow a result with a clear caveat.",
          "The goal is not a universal data model for the whole enterprise. It is a reliable enough representation to answer the agreed management question, with the limitations visible.",
        ],
        bullets: [
          "Agree the unit of analysis before comparing totals",
          "Preserve original and revised dates rather than overwriting history",
          "Keep source references so findings can be checked",
          "Report data quality alongside operational performance",
        ],
      },
      {
        heading: "The output is a decision contract",
        paragraphs: [
          "When teams agree what each event means, they are also agreeing how decisions will be made. The result becomes more than a reconciled report. It defines which evidence starts an escalation, which exception belongs to whom, and which change is material enough to review.",
          "That is why data quality should not be hidden as a technical preface. If a critical management decision depends on a field that is routinely missing or reinterpreted, the weakness is part of the operating model.",
        ],
      },
      {
        heading: "What this scenario does not promise",
        paragraphs: [
          "No diagnostic can make fragmented data complete by assertion. Some questions will remain unanswered, and some source processes may need to change before monitoring is reliable. The credible result is a clearer evidence base, an explicit list of limitations, and a prioritised next decision — not a claim that every spreadsheet has been replaced.",
        ],
      },
    ],
  },
  {
    slug: "diagnostic-that-says-do-not-build",
    title: "The diagnostic that says do not build",
    date: "2026-09-15",
    kind: "Practice note",
    readingTime: "6 minute read",
    excerpt:
      "Sometimes the strongest technology recommendation is to stop. A manual diagnostic can test whether better software would create new value before capital is committed.",
    disclosure:
      "This is a practice note derived from the JourneyIQ validation plan. It is not a customer case study and does not report a completed software programme or commercial outcome.",
    sections: [
      {
        heading: "Start with the decision, not the application",
        paragraphs: [
          "Supply-chain teams often know the shape of the tool they want before they have proven the decision it will improve. Upload the files, connect the systems, calculate the measures, and show the exceptions. The sequence sounds reasonable. It can still automate a weak question.",
          "A lower-risk route is to perform the analysis manually on a bounded dataset first. Use the available tools, document every transformation, and present the most important findings to the people who would act on them. The purpose is not to imitate the finished product. It is to test whether the diagnostic creates a decision the customer values.",
        ],
      },
      {
        heading: "Four tests before a build",
        paragraphs: [
          "The first test is access: can the organisation provide usable operational data under acceptable controls? The second is novelty: does the analysis reveal something material that the team did not already know? The third is actionability: can an accountable leader use the finding to choose an intervention? The fourth is repeatability: does the need recur often enough to justify product investment rather than a one-off service?",
          "A positive reaction to a prototype is not the same as passing these tests. The strongest evidence is a customer providing data, investing management time, acting on the result, and — for a commercial proposition — being willing to pay for the work.",
        ],
      },
      {
        heading: "Reasons to stop",
        paragraphs: [
          "A stop decision is valuable evidence. If IT or governance repeatedly prevents access to the minimum data, the proposed delivery model may be wrong. If every finding is already obvious, the analytical method may not be differentiated. If each dataset needs weeks of bespoke interpretation, the service may not be repeatable. If customers value the workshop but not recurring monitoring, the right business may remain advisory rather than software.",
        ],
        bullets: [
          "The problem is discussed but no buyer will sponsor a data pilot",
          "The analysis confirms known issues without changing a decision",
          "Data transformation remains largely bespoke across engagements",
          "The recurring use case is weaker than the one-off diagnostic",
        ],
      },
      {
        heading: "What earns the right to build",
        paragraphs: [
          "Product investment becomes more credible when the same journey, definitions, and decision pattern repeat. At that point, automation can reduce delivery effort, improve consistency, preserve traceability, and support a monitoring rhythm. The software is then serving demonstrated behaviour rather than hoping to create it.",
          "This sequence also protects trust. Security, privacy, access, deletion, and audit expectations can be designed around a real use case and data boundary instead of being treated as generic features added after the product is already broad.",
        ],
      },
      {
        heading: "The practical conclusion",
        paragraphs: [
          "JourneyIQ is therefore presented first as a service-led diagnostic, supported by technology. The proposition can evolve toward recurring monitoring or a productised service only when customer behaviour supports it. Saying no to premature software is not a lack of ambition. It is the same evidence-before-opinion discipline the diagnostic asks clients to apply to their operations.",
        ],
      },
    ],
  },
];
