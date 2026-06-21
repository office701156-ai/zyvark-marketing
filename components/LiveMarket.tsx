import { TrendingDown, TrendingUp } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

type Coin = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number | null;
  sparkline_in_7d?: { price: number[] };
};

// Fallback used if the CoinGecko API is unavailable (rate limit / outage),
// so the page always renders. Real data refreshes via ISR every 5 minutes.
const fallback: Coin[] = [
  { id: "bitcoin", symbol: "btc", name: "Bitcoin", image: "", current_price: 67250, price_change_percentage_24h: 1.8 },
  { id: "ethereum", symbol: "eth", name: "Ethereum", image: "", current_price: 3520, price_change_percentage_24h: 2.4 },
  { id: "solana", symbol: "sol", name: "Solana", image: "", current_price: 168, price_change_percentage_24h: -0.9 },
  { id: "binancecoin", symbol: "bnb", name: "BNB", image: "", current_price: 605, price_change_percentage_24h: 0.6 },
  { id: "ripple", symbol: "xrp", name: "XRP", image: "", current_price: 0.62, price_change_percentage_24h: -1.4 },
];

async function getMarket(): Promise<{ coins: Coin[]; live: boolean }> {
  try {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=true&price_change_percentage=24h",
      { next: { revalidate: 300 } },
    );
    if (!res.ok) throw new Error(`status ${res.status}`);
    const data = (await res.json()) as Coin[];
    if (!Array.isArray(data) || data.length === 0) throw new Error("empty");
    return { coins: data, live: true };
  } catch {
    return { coins: fallback, live: false };
  }
}

function fmtPrice(n: number) {
  return n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: n < 1 ? 4 : 2,
    maximumFractionDigits: n < 1 ? 4 : 2,
  });
}

function Sparkline({ prices, up }: { prices: number[]; up: boolean }) {
  if (!prices || prices.length < 2) {
    return <div className="h-8 w-24" aria-hidden="true" />;
  }
  // Downsample to keep the SVG light.
  const step = Math.ceil(prices.length / 40);
  const pts = prices.filter((_, i) => i % step === 0);
  const min = Math.min(...pts);
  const max = Math.max(...pts);
  const range = max - min || 1;
  const w = 96;
  const h = 32;
  const d = pts
    .map((p, i) => {
      const x = (i / (pts.length - 1)) * w;
      const y = h - ((p - min) / range) * h;
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="overflow-visible" aria-hidden="true">
      <path
        d={d}
        fill="none"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={up ? "stroke-emerald-400" : "stroke-red-400"}
      />
    </svg>
  );
}

export async function LiveMarket() {
  const { coins, live } = await getMarket();

  return (
    <Section className="bg-muted/20">
      <SectionHeading
        eyebrow="Powered by ZyMetrics"
        title="Real market data, live right now"
        subtitle="A taste of what ZyMetrics tracks for you 24/7 — prices, momentum, and trend at a glance."
      />

      <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl border border-border bg-card">
        <div className="flex items-center justify-between border-b border-border px-5 py-3">
          <span className="text-xs font-medium text-muted-foreground">
            Top assets by market cap
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
            <span
              className={`h-2 w-2 rounded-full ${live ? "bg-emerald-400 animate-pulse" : "bg-amber-400"}`}
            />
            {live ? "Live · CoinGecko" : "Sample data"}
          </span>
        </div>

        <ul className="divide-y divide-border">
          {coins.map((c) => {
            const change = c.price_change_percentage_24h ?? 0;
            const up = change >= 0;
            return (
              <li
                key={c.id}
                className="flex items-center gap-4 px-5 py-4"
              >
                <div className="flex min-w-0 flex-1 items-center gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-muted text-xs font-bold uppercase text-muted-foreground">
                    {c.symbol.slice(0, 3)}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold">{c.name}</p>
                    <p className="text-xs uppercase text-muted-foreground">
                      {c.symbol}
                    </p>
                  </div>
                </div>

                <div className="hidden sm:block">
                  <Sparkline prices={c.sparkline_in_7d?.price ?? []} up={up} />
                </div>

                <div className="w-28 text-right">
                  <p className="text-sm font-semibold tabular-nums">
                    {fmtPrice(c.current_price)}
                  </p>
                  <p
                    className={`inline-flex items-center justify-end gap-1 text-xs font-medium tabular-nums ${up ? "text-emerald-400" : "text-red-400"}`}
                  >
                    {up ? (
                      <TrendingUp className="h-3 w-3" />
                    ) : (
                      <TrendingDown className="h-3 w-3" />
                    )}
                    {Math.abs(change).toFixed(2)}%
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mt-8 text-center">
        <Button href="/products/zymetrics" variant="secondary">
          Explore ZyMetrics
        </Button>
      </div>
    </Section>
  );
}
