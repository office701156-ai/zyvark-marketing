// Typed, dependency-free blog content. Each post links to a related product so
// the content hub feeds the product pages (internal linking + topical authority).

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  // SEO title tag (<= ~60 chars). Falls back to title if omitted.
  titleTag?: string;
  description: string; // meta description, <= ~155 chars
  excerpt: string;
  date: string; // ISO
  readingMinutes: number;
  category: string;
  keyword: string; // primary target keyword
  relatedProduct: string; // product slug in lib/products.ts
  body: Block[];
};

export const posts: BlogPost[] = [
  {
    slug: "gstr-1-filing-guide-for-smbs",
    title: "GSTR-1 filing for Indian SMBs: a step-by-step guide",
    titleTag: "GSTR-1 Filing Guide for SMBs (2026) | Zyvark",
    description:
      "A plain-English, step-by-step guide to filing GSTR-1 in India — due dates, invoice details, common errors, and how to file faster.",
    excerpt:
      "Due dates, the exact invoice details you need, and the mistakes that trigger notices — explained without the jargon.",
    date: "2026-07-01",
    readingMinutes: 7,
    category: "GST & Compliance",
    keyword: "how to file gstr-1",
    relatedProduct: "ledger",
    body: [
      {
        type: "p",
        text: "GSTR-1 is the return where you report every outward supply — your sales — for a tax period. Get it right and your buyers can claim input tax credit cleanly; get it wrong and you invite mismatches, notices, and blocked credit. This guide walks through the whole process for a small business.",
      },
      { type: "h2", text: "Who files GSTR-1 and when" },
      {
        type: "p",
        text: "Every registered regular taxpayer files GSTR-1. Monthly filers report by the 11th of the following month. Businesses under the QRMP scheme file quarterly, by the 13th of the month after the quarter, using the IFF for the first two months if they choose.",
      },
      { type: "h2", text: "What you need before you start" },
      {
        type: "ul",
        items: [
          "Invoice-wise details of B2B supplies (GSTIN, invoice number, date, taxable value, tax)",
          "Consolidated B2C supplies, split by rate and place of supply",
          "Credit and debit notes issued during the period",
          "Exports, nil-rated, and exempt supplies",
          "HSN-wise summary of outward supplies",
        ],
      },
      { type: "h2", text: "Filing, step by step" },
      {
        type: "ul",
        items: [
          "Log in to the GST portal and open Returns Dashboard for the period",
          "Enter or import B2B, B2C, export, and credit/debit note details",
          "Add the HSN summary and document series",
          "Preview the return and reconcile totals against your books",
          "Submit, then file with DSC or EVC",
        ],
      },
      { type: "h2", text: "Common mistakes that trigger notices" },
      {
        type: "ul",
        items: [
          "Wrong GSTIN or place of supply on B2B invoices",
          "Totals that don't reconcile with GSTR-3B",
          "Missing credit/debit notes, inflating taxable value",
          "Filing late, which blocks the buyer's ITC and adds late fees",
        ],
      },
      { type: "h2", text: "Filing faster" },
      {
        type: "p",
        text: "The slow part is never the portal — it's assembling clean, categorized invoice data from messy bank statements and spreadsheets. That is exactly the gap Zyvark Ledger closes: import statements in any format, auto-categorize transactions, and generate a GSTR-1-ready summary you can reconcile in minutes instead of days.",
      },
    ],
  },
  {
    slug: "crypto-tax-india-2026-vda-tds-explained",
    title: "Crypto tax in India 2026: VDA 30% and 1% TDS explained",
    titleTag: "Crypto Tax India 2026: VDA 30% + 1% TDS | Zyvark",
    description:
      "How crypto and other VDAs are taxed in India — the flat 30% rate, 1% TDS under 194S, no set-off of losses, and how to stay compliant.",
    excerpt:
      "The flat 30% on gains, the 1% TDS under section 194S, and the loss rules that catch most traders off guard.",
    date: "2026-07-08",
    readingMinutes: 8,
    category: "Crypto Tax",
    keyword: "crypto tax india",
    relatedProduct: "ledger",
    body: [
      {
        type: "p",
        text: "India taxes Virtual Digital Assets (VDAs) under a dedicated regime. The rules are strict and unforgiving, and the mechanics around TDS and loss set-off trip up even experienced traders. Here is what applies. This is general information, not tax advice — confirm specifics with a qualified professional.",
      },
      { type: "h2", text: "The flat 30% on gains" },
      {
        type: "p",
        text: "Income from the transfer of a VDA is taxed at a flat 30% under section 115BBH, plus applicable surcharge and cess. Only the cost of acquisition is deductible — no expenses, no indexation, no slab benefit, regardless of your income level.",
      },
      { type: "h2", text: "1% TDS under section 194S" },
      {
        type: "p",
        text: "A 1% TDS applies on the transfer of VDAs above the threshold, deducted at the time of payment. On most Indian exchanges this is handled at source, but peer-to-peer and off-exchange trades shift the compliance burden onto the parties involved.",
      },
      { type: "h2", text: "Losses don't behave like you'd expect" },
      {
        type: "ul",
        items: [
          "Loss from one VDA cannot be set off against gain from another VDA",
          "VDA losses cannot be set off against any other income",
          "VDA losses cannot be carried forward to future years",
        ],
      },
      { type: "h2", text: "What good record-keeping looks like" },
      {
        type: "ul",
        items: [
          "Every trade with date, asset, quantity, and INR value",
          "Cost of acquisition per lot for accurate gain computation",
          "TDS deducted and reflected in Form 26AS / AIS",
          "A reconciliation between exchange statements and your books",
        ],
      },
      { type: "h2", text: "Keeping it straight at scale" },
      {
        type: "p",
        text: "Manually reconciling hundreds of trades against 26AS is where errors creep in. Zyvark Ledger imports exchange and bank statements, applies VDA logic, and produces filing-ready summaries — so the 30%/TDS computation is built from clean data, not a last-minute spreadsheet.",
      },
    ],
  },
  {
    slug: "reading-rsi-and-macd-screener-guide",
    title: "How to read RSI and MACD: a practical screener guide",
    titleTag: "RSI & MACD Screener Guide for Beginners | Zyvark",
    description:
      "Understand RSI and MACD without the jargon — what each signal means, how they work together, and how to screen for them.",
    excerpt:
      "What overbought really means, how MACD crossovers work, and why the two indicators are stronger together than alone.",
    date: "2026-07-15",
    readingMinutes: 6,
    category: "Analytics",
    keyword: "rsi macd screener",
    relatedProduct: "zymetrics",
    body: [
      {
        type: "p",
        text: "RSI and MACD are two of the most widely used momentum indicators. Used well, they help you read whether a move has strength behind it. Used blindly, they generate noise. Here is how to actually interpret them. Nothing here is investment advice.",
      },
      { type: "h2", text: "RSI: momentum on a 0–100 scale" },
      {
        type: "p",
        text: "The Relative Strength Index measures the speed and magnitude of recent price changes. Readings above 70 are often called overbought and below 30 oversold — but in a strong trend, an asset can stay overbought for a long time. RSI is most useful for spotting divergence, where price makes a new high but RSI doesn't.",
      },
      { type: "h2", text: "MACD: trend and momentum together" },
      {
        type: "p",
        text: "MACD plots the difference between two moving averages against a signal line. A crossover above the signal line suggests building bullish momentum; a crossover below suggests the opposite. The histogram shows how that momentum is accelerating or fading.",
      },
      { type: "h2", text: "Why they're better together" },
      {
        type: "ul",
        items: [
          "RSI flags exhaustion; MACD confirms whether the trend is turning",
          "Agreement between the two raises confidence in a setup",
          "Divergence on both at once is a stronger warning than either alone",
        ],
      },
      { type: "h2", text: "Screening at scale" },
      {
        type: "p",
        text: "Checking these by hand across dozens of assets is slow. ZyMetrics includes an RSI/MACD screener and plain-language AI signals, so you can surface setups across the market in seconds and read why a signal fired — without a charting PhD.",
      },
    ],
  },
  {
    slug: "how-escrow-protected-p2p-crypto-works",
    title: "How escrow-protected P2P crypto trading actually works",
    titleTag: "How Escrow-Protected P2P Crypto Works | Zyvark",
    description:
      "What escrow-protected peer-to-peer crypto trading is, how smart escrow prevents chargebacks, and how disputes are resolved.",
    excerpt:
      "Why escrow removes counterparty risk, how funds are locked and released, and what happens when a trade is disputed.",
    date: "2026-07-22",
    readingMinutes: 6,
    category: "Exchange & Trust",
    keyword: "p2p crypto exchange india",
    relatedProduct: "exchange",
    body: [
      {
        type: "p",
        text: "Peer-to-peer crypto trading lets two people transact directly. The hard problem is trust: who sends first? Escrow solves it by holding the asset until both sides have done their part. Here's how it works in practice.",
      },
      { type: "h2", text: "The core problem: counterparty risk" },
      {
        type: "p",
        text: "In a naive P2P trade, whoever moves first is exposed. The buyer who pays first risks never receiving crypto; the seller who releases first risks a reversed payment. Escrow neutralizes this by becoming a neutral holder.",
      },
      { type: "h2", text: "How smart escrow locks and releases funds" },
      {
        type: "ul",
        items: [
          "The seller's crypto is locked in escrow the moment a trade opens",
          "The buyer pays through the agreed method off-platform",
          "On confirmation from both sides, escrow releases the crypto to the buyer",
          "Because the asset is already locked, there are no chargebacks on the crypto leg",
        ],
      },
      { type: "h2", text: "When a trade is disputed" },
      {
        type: "p",
        text: "If the two parties disagree, an evidence-based dispute process reviews payment proof and the trade timeline, with an audit trail on every step. Reputation scores built from real settlement history help you choose trustworthy counterparties before you ever open a trade.",
      },
      { type: "h2", text: "Trading with confidence" },
      {
        type: "p",
        text: "Zyvark Exchange combines smart escrow, transparent dispute resolution, and reputation scoring so P2P trades settle predictably. Trust isn't a feature bolted on — it's the foundation the product is built on.",
      },
    ],
  },
  {
    slug: "server-uptime-monitoring-101",
    title: "Server uptime monitoring 101 for fintech-grade reliability",
    titleTag: "Server Uptime Monitoring 101 | Zyvark",
    description:
      "The fundamentals of uptime monitoring — what to poll, how alerting should work, and how to catch incidents before users do.",
    excerpt:
      "What to actually monitor, why polling resolution matters, and how to alert the right person before customers notice.",
    date: "2026-07-29",
    readingMinutes: 6,
    category: "Monitoring",
    keyword: "server uptime monitoring tool",
    relatedProduct: "pulse",
    body: [
      {
        type: "p",
        text: "If your product handles money, downtime isn't just an inconvenience — it's lost trust. Uptime monitoring is how you find out something is wrong before your customers tell you. Here are the fundamentals.",
      },
      { type: "h2", text: "What to monitor" },
      {
        type: "ul",
        items: [
          "Reachability — is the host up? (ICMP/ping)",
          "Service health — are the right ports and endpoints responding?",
          "Resource pressure — CPU, memory, disk, and interface load (SNMP)",
          "Application latency — are responses within budget?",
        ],
      },
      { type: "h2", text: "Why polling resolution matters" },
      {
        type: "p",
        text: "A check every five minutes can miss a 90-second outage entirely. Sub-minute polling against a fast time-series backend gives you the resolution to see short incidents and the history to spot slow degradation before it becomes an outage.",
      },
      { type: "h2", text: "Alerting that doesn't cry wolf" },
      {
        type: "ul",
        items: [
          "Threshold alerts for clear breaches (disk at 95%)",
          "Anomaly detection for deviations from normal baselines",
          "Routing so the right person is paged, not the whole team",
          "Suppression to avoid alert storms during a known incident",
        ],
      },
      { type: "h2", text: "Seeing it all in one place" },
      {
        type: "p",
        text: "Zyvark Pulse polls at sub-minute resolution, raises threshold and anomaly alerts, and visualizes service health on live, multi-tenant dashboards — so you catch incidents before users notice and prove your uptime to the teams that depend on you.",
      },
    ],
  },
];

export function getAllPosts(): BlogPost[] {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
