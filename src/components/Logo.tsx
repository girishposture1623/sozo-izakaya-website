import { Link } from "react-router-dom";

/** Hand-drawn style ensō circle — the Sozo brand mark. */
export function EnsoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <circle
        cx="32"
        cy="32"
        r="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="6.5"
        strokeLinecap="round"
        strokeDasharray="132 19"
        transform="rotate(-68 32 32)"
      />
    </svg>
  );
}

export default function Logo() {
  return (
    <Link
      to="/"
      className="group flex items-center gap-3"
      aria-label="Sozo Izakaya — back to home"
    >
      <EnsoMark className="h-10 w-10 shrink-0 text-aka transition-transform duration-700 ease-out group-hover:rotate-[25deg]" />
      <span className="leading-none">
        <span className="block font-display text-[26px] font-semibold tracking-[0.1em] text-cream">
          SOZO
        </span>
        <span className="mt-1 block whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.4em] text-taupe">
          Izakaya · Versova
        </span>
      </span>
    </Link>
  );
}
