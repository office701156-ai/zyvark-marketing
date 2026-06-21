import Link from "next/link";
import { site } from "@/lib/site";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2 font-display text-lg font-bold tracking-tight ${className ?? ""}`}
      aria-label={`${site.name} home`}
    >
      <span className="grid h-8 w-8 place-items-center rounded-lg gradient-bg text-white">
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
          <path
            d="M5 5h14L7 19h12"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span>
        Zyvark<span className="text-muted-foreground"> Solutions</span>
      </span>
    </Link>
  );
}
