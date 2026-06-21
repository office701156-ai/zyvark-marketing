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
  },
  {
    slug: "ledger",
    name: "Zyvark Ledger",
    // TODO: confirm this product's positioning, or replace with a real product.
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
  },
  {
    slug: "pulse",
    name: "Zyvark Pulse",
    // TODO: confirm this product's positioning, or replace with a real product.
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
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
