import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="font-display text-7xl font-bold gradient-text">404</p>
      <h1 className="mt-4 font-display text-2xl font-bold">
        This page took an unexpected exit.
      </h1>
      <p className="mt-3 max-w-md text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s
        get you back on track.
      </p>
      <div className="mt-8 flex gap-3">
        <Button href="/">Back home</Button>
        <Button href="/products" variant="secondary">
          Browse products
        </Button>
      </div>
      <Link href="/contact" className="mt-6 text-sm text-muted-foreground hover:text-foreground">
        Think this is a mistake? Contact us →
      </Link>
    </Container>
  );
}
