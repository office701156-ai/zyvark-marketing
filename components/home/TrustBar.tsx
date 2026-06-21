import { Container } from "@/components/ui/Container";

// TODO: replace these placeholder metrics with real, verifiable numbers.
const stats = [
  { value: "10k+", label: "Active users" },
  { value: "$480M", label: "Volume secured" },
  { value: "99.9%", label: "Uptime" },
  { value: "4.9/5", label: "Avg. rating" },
];

export function TrustBar() {
  return (
    <section className="border-y border-border bg-muted/30 py-10">
      <Container>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-3xl font-bold gradient-text">
                {s.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
