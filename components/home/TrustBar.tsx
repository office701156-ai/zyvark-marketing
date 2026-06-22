import { Container } from "@/components/ui/Container";

// Capability-based trust signals — verifiable, no invented metrics.
// Swap in real usage numbers here once you have them.
const stats = [
  { value: "4-in-1", label: "Products, one login" },
  { value: "GST + VDA", label: "Compliance built in" },
  { value: "Escrow", label: "Protected trades" },
  { value: "Free", label: "To get started" },
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
