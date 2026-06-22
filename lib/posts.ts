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
  {
    slug: "ai-trading-signals-explained",
    title: "AI trading signals explained: what they are and what they aren't",
    titleTag: "AI Trading Signals Explained | Zyvark",
    description:
      "What AI trading signals actually measure, how to read them critically, and why an explained signal beats a black-box one.",
    excerpt:
      "What the signals measure, where they help, and the limits every honest tool should own up to.",
    date: "2026-08-05",
    readingMinutes: 6,
    category: "Analytics",
    keyword: "ai trading signals",
    relatedProduct: "zymetrics",
    body: [
      { type: "p", text: "\"AI signal\" has become a marketing word, which makes it hard to know what's real. Used honestly, a signal is a scored read on market conditions — not a prediction and not advice. Here's how to think about them critically." },
      { type: "h2", text: "What a signal actually is" },
      { type: "p", text: "A signal scores patterns in price and volume — momentum building, a trend weakening, a reversal forming — and ranks how strong that pattern looks right now. It compresses analysis you could do by hand into a single, comparable read." },
      { type: "h2", text: "What a signal is not" },
      { type: "ul", items: [ "A guarantee — no model predicts the future", "Financial advice — you still own the decision", "A reason to skip your own risk management" ] },
      { type: "h2", text: "Why explanation matters" },
      { type: "p", text: "A signal you can't interrogate is a coin flip you can't learn from. The value is in the reasoning: which indicators fired, on what timeframe, and how strongly. ZyMetrics scores signals and explains each one in plain language, so you build judgment instead of dependence." },
    ],
  },
  {
    slug: "spotting-sector-rotation-in-crypto",
    title: "Sector rotation in crypto: how to spot where capital is moving",
    titleTag: "Spotting Crypto Sector Rotation | Zyvark",
    description:
      "What sector rotation is, the early signs capital is moving between sectors, and how heatmaps make it visible at a glance.",
    excerpt:
      "What rotation looks like before it's obvious, and how to read it without staring at fifty charts.",
    date: "2026-08-12",
    readingMinutes: 5,
    category: "Analytics",
    keyword: "crypto sector rotation",
    relatedProduct: "zymetrics",
    body: [
      { type: "p", text: "Money rarely flows into every asset at once. It rotates — out of one sector, into another. Spotting that early is one of the more durable edges in market analysis. Here's how to read it." },
      { type: "h2", text: "What rotation looks like" },
      { type: "p", text: "Rotation shows up as relative strength: one sector outperforming while another cools, even when the broad market is flat. The signal is in the comparison, not the absolute move." },
      { type: "h2", text: "Early signs to watch" },
      { type: "ul", items: [ "Relative strength shifting between sectors week over week", "Volume concentrating in a previously quiet area", "Leaders stalling while laggards catch a bid" ] },
      { type: "h2", text: "Seeing it at a glance" },
      { type: "p", text: "Tracking this by hand across sectors, DeFi, and NFTs is tedious. ZyMetrics' sector heatmaps make rotation visible in one view, so you notice the shift while it's still early." },
    ],
  },
  {
    slug: "candlestick-charts-for-beginners",
    title: "Candlestick charts for beginners: reading price action",
    titleTag: "Candlestick Charts for Beginners | Zyvark",
    description:
      "Learn to read candlestick charts — what each candle shows, common patterns, and how to use them without overreading.",
    excerpt:
      "What a candle actually tells you, the handful of patterns worth knowing, and how not to overread them.",
    date: "2026-08-19",
    readingMinutes: 6,
    category: "Analytics",
    keyword: "candlestick charts for beginners",
    relatedProduct: "zymetrics",
    body: [
      { type: "p", text: "Candlestick charts pack four numbers — open, high, low, close — into one shape per period. Once you can read the shape, price action gets a lot less intimidating." },
      { type: "h2", text: "Anatomy of a candle" },
      { type: "p", text: "The body spans open to close; the wicks reach to the high and low. A long body means decisive movement; long wicks mean the price was rejected at those extremes." },
      { type: "h2", text: "A few patterns worth knowing" },
      { type: "ul", items: [ "Doji — open and close nearly equal, signalling indecision", "Engulfing — one candle's body fully covers the prior one, hinting at a shift", "Long wicks — rejection of a price level" ] },
      { type: "h2", text: "Don't overread it" },
      { type: "p", text: "Patterns are context, not commands — they matter more at key levels and alongside volume. ZyMetrics pairs candlestick charts with indicators and multi-timeframe views so you read patterns in context, not isolation." },
    ],
  },
  {
    slug: "how-to-avoid-p2p-crypto-scams-india",
    title: "How to avoid P2P crypto scams in India",
    titleTag: "How to Avoid P2P Crypto Scams in India | Zyvark",
    description:
      "Common P2P crypto scams in India and the practical habits — escrow, reputation checks, payment proof — that prevent them.",
    excerpt:
      "The common scams, the red flags, and the habits that keep your P2P trades safe.",
    date: "2026-08-26",
    readingMinutes: 6,
    category: "Exchange & Trust",
    keyword: "p2p crypto scams india",
    relatedProduct: "exchange",
    body: [
      { type: "p", text: "P2P trading gives you better rates and control, but it also attracts scammers who exploit trust. The good news: almost every common scam relies on you releasing funds before settlement is real. Remove that, and most attacks fail." },
      { type: "h2", text: "Common scams to know" },
      { type: "ul", items: [ "Fake payment confirmations or doctored screenshots", "Chargeback fraud after the crypto is released", "Pressure to settle off-platform or 'release early as a favour'", "Impersonation of support or a counterparty" ] },
      { type: "h2", text: "Red flags" },
      { type: "ul", items: [ "Urgency — being rushed to confirm or release", "Requests to bypass escrow or platform rules", "A counterparty with no settlement history" ] },
      { type: "h2", text: "Habits that protect you" },
      { type: "p", text: "Always trade through escrow, verify payment is actually settled before confirming, and check reputation before you open a trade. Zyvark Exchange builds these in: crypto stays in escrow until both sides confirm, and reputation scores come from real settlement history." },
    ],
  },
  {
    slug: "reputation-scoring-in-p2p-trading",
    title: "Reputation scoring in P2P trading: why it matters",
    titleTag: "Why Reputation Scoring Matters in P2P | Zyvark",
    description:
      "How reputation scoring works in P2P crypto trading, why it reduces risk, and what makes a score trustworthy.",
    excerpt:
      "How scores are built, why they reduce risk, and what separates a real score from a gameable one.",
    date: "2026-09-02",
    readingMinutes: 5,
    category: "Exchange & Trust",
    keyword: "p2p reputation scoring",
    relatedProduct: "exchange",
    body: [
      { type: "p", text: "In P2P trading, you're choosing a counterparty as much as a price. Reputation scoring turns a stranger into a known quantity — if the score is built on something real." },
      { type: "h2", text: "What a good score is built on" },
      { type: "ul", items: [ "Real settlement history, not self-reported claims", "Volume and consistency over time", "Dispute outcomes, recorded transparently" ] },
      { type: "h2", text: "Why it reduces risk" },
      { type: "p", text: "A track record of completed, undisputed trades is the single best predictor of a smooth trade. It lets you avoid the riskiest counterparties before any funds are committed." },
      { type: "h2", text: "What makes it trustworthy" },
      { type: "p", text: "A score is only as good as its source. Zyvark Exchange builds reputation transparently from real settlement history — paired with escrow, so trust is verified, not assumed." },
    ],
  },
  {
    slug: "advance-tax-for-freelancers-and-founders",
    title: "Advance tax for freelancers and founders: a quick guide",
    titleTag: "Advance Tax for Freelancers & Founders | Zyvark",
    description:
      "Who pays advance tax in India, the quarterly due dates and instalments, and how to estimate it without surprises.",
    excerpt:
      "Who owes it, the four instalment dates, and how to estimate it so March holds no surprises.",
    date: "2026-09-09",
    readingMinutes: 6,
    category: "GST & Compliance",
    keyword: "advance tax calculation for freelancers",
    relatedProduct: "ledger",
    body: [
      { type: "p", text: "If your tax liability for the year is likely to exceed the threshold, you're expected to pay it in instalments through the year — not in one lump at filing. Missing this invites interest under sections 234B and 234C. This is general information, not tax advice." },
      { type: "h2", text: "Who needs to pay" },
      { type: "p", text: "Broadly, any taxpayer whose net tax liability for the year exceeds ₹10,000 is liable for advance tax, including freelancers and founders with non-salary income where TDS doesn't cover the bill." },
      { type: "h2", text: "The instalment schedule" },
      { type: "ul", items: [ "By 15 June — 15% of estimated liability", "By 15 September — 45% (cumulative)", "By 15 December — 75% (cumulative)", "By 15 March — 100% (cumulative)" ] },
      { type: "h2", text: "Estimating without surprises" },
      { type: "p", text: "The hard part is forecasting income from irregular invoices and mixed accounts. Zyvark Ledger reconciles your transactions and generates advance-tax estimates from real data, so each instalment is grounded in your actual numbers." },
    ],
  },
  {
    slug: "gst-2a-vs-2b-reconciliation",
    title: "GST 2A vs 2B reconciliation: fixing input tax credit mismatches",
    titleTag: "GSTR-2A vs 2B Reconciliation Guide | Zyvark",
    description:
      "The difference between GSTR-2A and 2B, why ITC mismatches happen, and how to reconcile them to protect your credit.",
    excerpt:
      "What separates 2A from 2B, why your ITC doesn't match, and how to reconcile it cleanly.",
    date: "2026-09-16",
    readingMinutes: 7,
    category: "GST & Compliance",
    keyword: "gst 2a 2b reconciliation",
    relatedProduct: "ledger",
    body: [
      { type: "p", text: "Input tax credit is real money, and the GST system only lets you claim what your suppliers have actually reported. Reconciling your purchases against 2A and 2B is how you protect that credit. This is general information, not tax advice." },
      { type: "h2", text: "2A vs 2B — the difference" },
      { type: "p", text: "GSTR-2A is dynamic — it updates as suppliers file. GSTR-2B is static, generated once for a period as a definitive statement of available ITC. Most reconciliation now anchors on 2B, with 2A used to investigate gaps." },
      { type: "h2", text: "Why mismatches happen" },
      { type: "ul", items: [ "Supplier filed late or in a different period", "Wrong GSTIN or invoice number", "Invoice not uploaded by the supplier at all", "Differences in taxable value or tax amount" ] },
      { type: "h2", text: "Reconciling cleanly" },
      { type: "p", text: "The workflow is: match your purchase register against 2B, flag the differences, and chase suppliers on missing invoices before you finalise the claim. Zyvark Ledger automates the matching so you only spend time on the exceptions that matter." },
    ],
  },
  {
    slug: "threshold-vs-anomaly-alerting",
    title: "Threshold vs anomaly alerting: choosing the right approach",
    titleTag: "Threshold vs Anomaly Alerting | Zyvark",
    description:
      "When to use threshold alerts, when anomaly detection wins, and how to combine both to cut noise without missing incidents.",
    excerpt:
      "Where simple thresholds work, where they fail, and how anomaly detection fills the gap.",
    date: "2026-09-23",
    readingMinutes: 5,
    category: "Monitoring",
    keyword: "threshold vs anomaly alerting",
    relatedProduct: "pulse",
    body: [
      { type: "p", text: "Good alerting tells you about real problems and stays quiet otherwise. The two main approaches — thresholds and anomaly detection — solve different halves of that problem." },
      { type: "h2", text: "When thresholds work" },
      { type: "p", text: "Thresholds are perfect for clear limits: disk above 95%, latency above your SLA. They're simple, predictable, and easy to reason about." },
      { type: "h2", text: "Where thresholds fail" },
      { type: "ul", items: [ "Metrics with daily or weekly cycles trigger false alarms", "A static limit can't tell 'busy' from 'broken'", "Set them tight and you get noise; loose and you miss incidents" ] },
      { type: "h2", text: "Combining both" },
      { type: "p", text: "Use thresholds for hard limits and anomaly detection for everything that has a normal rhythm. Zyvark Pulse supports both and routes alerts to the right person, so you catch incidents without drowning the team in noise." },
    ],
  },
];

export function getAllPosts(): BlogPost[] {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
