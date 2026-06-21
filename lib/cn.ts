/** Tiny classname joiner — keeps deps light (no clsx needed). */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
