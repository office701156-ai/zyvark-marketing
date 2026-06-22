import {
  LineChart,
  ShieldCheck,
  Wallet,
  BarChart3,
  type LucideIcon,
} from "lucide-react";

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  // Tailwind gradient classes used for the product accent.
  accent: string;
  features: { title: string; body: string }[];
  highlights: string[];
  // Extended landing-page content.
  overview: string;
  audience: string[];
  stats: { value: string; label: string }[];
  howItWorks: { title: string; body: string }[];
  useCases: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
};

export const products: Product[] = [
  {
    slug: "zymetrics",
    name: "ZyMetrics",
    tagline: "AI crypto analytics that actually tells you what to do.",
    description:
      "Real-time market analytics with AI-generated signals, candlestick charts, RSI/MACD screeners, and sector heatmaps — all in one dashboard.",
    icon: LineChart,
    accent: "from-violet-500 to-fuchsia-500",
    features: [
      {
        title: "AI signal engine",
        body: "Momentum, trend, and reversal signals scored and explained in plain language — no charting PhD required.",
      },
      {
        title: "Pro-grade charts",
        body: "Candlestick charts with indicators, multi-timeframe views, and a screener built for RSI, MACD, and volume.",
      },
      {
        title: "Sector heatmaps",
        body: "See where capital is rotating across sectors, DeFi, and NFTs at a single glance.",
      },
    ],
    highlights: ["AI signals", "Candlestick charts", "RSI/MACD screener", "Sector heatmaps"],
    overview:
      "Most market tools either bury you in raw charts or hand you a black-box 'buy' button with no reasoning. ZyMetrics sits in between: it does the heavy analysis — momentum, trend, divergence, sector rotation — and explains every signal in plain language so you understand the why, not just the what. It's built for people who want institutional-grade analysis without an institutional-grade learning curve.",
    audience: [
      "Active traders who want faster, clearer reads on the market",
      "Long-term investors tracking sector rotation and momentum",
      "Analysts who need screeners and indicators in one place",
      "Newcomers who want signals explained, not just displayed",
    ],
    stats: [
      { value: "24/7", label: "Real-time market coverage" },
      { value: "RSI · MACD", label: "Built-in indicators & screeners" },
      { value: "Plain English", label: "Every AI signal explained" },
    ],
    howItWorks: [
      { title: "Connect the market", body: "Live price and volume data streams into the dashboard across thousands of assets." },
      { title: "AI scores the signals", body: "Momentum, trend, and reversal patterns are detected, scored, and ranked for you." },
      { title: "You decide with context", body: "Every signal comes with a plain-language explanation so you act on understanding, not guesswork." },
    ],
    useCases: [
      { title: "Catch rotation early", body: "Spot capital moving between sectors, DeFi, and NFTs before it's obvious on the charts." },
      { title: "Screen the whole market", body: "Filter by RSI, MACD, and volume to surface setups across hundreds of assets in seconds." },
      { title: "Validate a thesis", body: "Cross-check your read against AI signals and divergence before you commit." },
    ],
    faqs: [
      { q: "Is ZyMetrics financial advice?", a: "No. ZyMetrics provides analytics and signals for informational purposes. It does not provide investment advice, and you remain responsible for your own decisions." },
      { q: "Which indicators are supported?", a: "RSI, MACD, and volume-based screening are built in, alongside candlestick charts with multi-timeframe views and sector heatmaps." },
      { q: "Do I need to be an experienced trader?", a: "No. Signals are explained in plain language specifically so newer users can understand the reasoning behind each one." },
    ],
  },
  {
    slug: "exchange",
    name: "Zyvark Exchange",
    tagline: "Escrow-protected P2P crypto trading you can trust.",
    description:
      "Buy and sell crypto peer-to-peer with funds held in smart escrow until both sides confirm. Built-in dispute resolution and reputation scoring.",
    icon: ShieldCheck,
    accent: "from-cyan-500 to-blue-500",
    features: [
      {
        title: "Smart escrow",
        body: "Funds are locked the moment a trade opens and only released when both parties confirm — no chargebacks, no surprises.",
      },
      {
        title: "Dispute resolution",
        body: "A clear, evidence-based process resolves disputes fast, with an audit trail on every step.",
      },
      {
        title: "Reputation scoring",
        body: "Trade with confidence using transparent counterparty ratings built from real settlement history.",
      },
    ],
    highlights: ["Smart escrow", "Dispute resolution", "Reputation scores", "Low fees"],
    overview:
      "Peer-to-peer trading gives you better rates and more control — but only if you can trust the person on the other side. Zyvark Exchange removes that risk by holding the crypto in smart escrow until both parties confirm. No one has to send first and hope. Combined with reputation scoring and an evidence-based dispute process, it makes P2P trading feel as safe as it should be.",
    audience: [
      "P2P traders who want better rates without counterparty risk",
      "Buyers and sellers tired of chargeback fraud",
      "Users in markets where P2P is the primary on/off ramp",
      "Anyone who values transparent, auditable settlement",
    ],
    stats: [
      { value: "Escrow-first", label: "Funds locked until both confirm" },
      { value: "0 chargebacks", label: "On the escrowed crypto leg" },
      { value: "Reputation", label: "Scores from real settlement history" },
    ],
    howItWorks: [
      { title: "Open a trade", body: "The seller's crypto is locked in smart escrow the moment the trade begins." },
      { title: "Settle off-platform", body: "The buyer pays through the agreed method while the asset stays safely held." },
      { title: "Both confirm, escrow releases", body: "Once both sides confirm, the crypto is released — with a full audit trail on every step." },
    ],
    useCases: [
      { title: "Trade with strangers safely", body: "Reputation scores and escrow let you transact with new counterparties without blind trust." },
      { title: "Resolve disputes fairly", body: "If something goes wrong, an evidence-based process reviews proof and timeline objectively." },
      { title: "Avoid chargeback fraud", body: "Because the crypto is escrowed, the asset leg can't be reversed after release." },
    ],
    faqs: [
      { q: "How does escrow protect me?", a: "The crypto is locked the moment a trade opens and is only released when both parties confirm settlement, so neither side has to move first on trust alone." },
      { q: "What happens if there's a dispute?", a: "A clear, evidence-based dispute process reviews payment proof and the trade timeline, with an audit trail recorded at every step." },
      { q: "How does reputation scoring work?", a: "Counterparty ratings are built transparently from real settlement history, so you can assess who you're trading with before opening a trade." },
    ],
  },
  {
    slug: "ledger",
    name: "Zyvark Ledger",
    tagline: "Automated bank reconciliation and tax-ready books.",
    description:
      "Import statements in any format, auto-categorize transactions, generate invoices, and produce ITR/GST-ready summaries — built for crypto-era accounting.",
    icon: Wallet,
    accent: "from-emerald-500 to-teal-500",
    features: [
      {
        title: "Any-format import",
        body: "CSV, Excel, or PDF statements in — clean, categorized ledgers out, with VDA and GST logic baked in.",
      },
      {
        title: "Auto-invoicing",
        body: "Turn reconciled transactions into compliant invoices with per-invoice PDF export.",
      },
      {
        title: "Tax-ready summaries",
        body: "P&L, advance-tax estimates, and filing-ready summaries generated automatically.",
      },
    ],
    highlights: ["Multi-format import", "Auto-invoicing", "GST & VDA logic", "Filing-ready"],
    overview:
      "For Indian SMBs and founders, the painful part of compliance isn't the filing — it's assembling clean, categorized data from messy statements across banks, payment apps, and exchanges. Zyvark Ledger automates that grind: import statements in any format, auto-categorize every transaction, and generate GST- and ITR-ready summaries with VDA logic built in. What used to take days of spreadsheet wrangling takes minutes.",
    audience: [
      "Small business owners and founders managing their own books",
      "Freelancers and consultants who need filing-ready summaries",
      "Crypto traders who must compute VDA tax accurately",
      "CAs and accountants who want clean data, faster",
    ],
    stats: [
      { value: "CSV · Excel · PDF", label: "Statements in any format" },
      { value: "GST + VDA", label: "Compliance logic built in" },
      { value: "Minutes", label: "From raw statement to filing-ready" },
    ],
    howItWorks: [
      { title: "Import your statements", body: "Drop in bank, payment, or exchange statements in CSV, Excel, or PDF — no manual cleanup." },
      { title: "Auto-categorize & reconcile", body: "Transactions are categorized and reconciled, with GST and VDA rules applied automatically." },
      { title: "Export filing-ready summaries", body: "Generate invoices, P&L, advance-tax estimates, and GSTR-ready summaries in a click." },
    ],
    useCases: [
      { title: "Close the books faster", body: "Turn a month of mixed statements into reconciled, categorized ledgers without the spreadsheet marathon." },
      { title: "Get crypto tax right", body: "Apply VDA logic to exchange data so the flat 30% and TDS computation is built from clean records." },
      { title: "Invoice from real data", body: "Convert reconciled transactions into compliant invoices with per-invoice PDF export." },
    ],
    faqs: [
      { q: "What statement formats can I import?", a: "CSV, Excel, and PDF statements are supported, and transactions are auto-categorized after import — no manual cleanup required." },
      { q: "Does it handle GST and crypto (VDA) tax?", a: "Yes. GST logic and VDA rules are built in, so it can produce GST-ready summaries and support the flat 30% plus TDS computation for crypto." },
      { q: "Is this a replacement for my CA?", a: "No. Ledger prepares clean, filing-ready data and summaries. We always recommend a qualified professional review filings before submission." },
    ],
  },
  {
    slug: "pulse",
    name: "Zyvark Pulse",
    tagline: "Infrastructure monitoring for fintech-grade uptime.",
    description:
      "Poll, alert, and visualize the health of your services and networks with time-series dashboards, anomaly detection, and multi-tenant access.",
    icon: BarChart3,
    accent: "from-amber-500 to-orange-500",
    features: [
      {
        title: "Always-on polling",
        body: "ICMP/SNMP polling with sub-minute resolution feeding a fast time-series backend.",
      },
      {
        title: "Smart alerting",
        body: "Threshold and anomaly-based alerts that reach the right person before users notice.",
      },
      {
        title: "Live dashboards",
        body: "Drag-and-drop dashboards with multi-tenant access for teams and customers.",
      },
    ],
    highlights: ["Sub-minute polling", "Anomaly alerts", "Live dashboards", "Multi-tenant"],
    overview:
      "When your product handles money, downtime costs trust, not just time. Zyvark Pulse watches your services and networks at sub-minute resolution, raising threshold and anomaly-based alerts so the right person knows before customers do. Live, multi-tenant dashboards make it easy to share status with teams and the customers who depend on you.",
    audience: [
      "Engineering and SRE teams running production services",
      "Fintech and SaaS operators with strict uptime needs",
      "Managed service providers monitoring multiple clients",
      "Teams that need to prove uptime to their own customers",
    ],
    stats: [
      { value: "Sub-minute", label: "Polling resolution" },
      { value: "ICMP · SNMP", label: "Network & service checks" },
      { value: "Multi-tenant", label: "Dashboards for teams & clients" },
    ],
    howItWorks: [
      { title: "Point Pulse at your infra", body: "Configure ICMP and SNMP checks across hosts, services, and network devices." },
      { title: "Pulse polls and baselines", body: "Sub-minute polling feeds a fast time-series backend that learns normal behavior." },
      { title: "Get alerted before users", body: "Threshold and anomaly alerts route to the right person, with live dashboards for everyone else." },
    ],
    useCases: [
      { title: "Catch outages early", body: "Sub-minute polling sees short incidents a five-minute check would miss entirely." },
      { title: "Tame alert fatigue", body: "Anomaly detection and routing mean the right person is paged — not the whole team." },
      { title: "Prove your uptime", body: "Share live, multi-tenant dashboards with the teams and customers who depend on you." },
    ],
    faqs: [
      { q: "What can Pulse monitor?", a: "Reachability via ICMP, service and resource health via SNMP, and application latency — across hosts, services, and network devices." },
      { q: "How fast will I know about an outage?", a: "Pulse polls at sub-minute resolution, so short incidents that a five-minute check would miss are caught and alerted quickly." },
      { q: "Can I give customers access?", a: "Yes. Dashboards are multi-tenant, so you can share live status with internal teams and external customers separately." },
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
