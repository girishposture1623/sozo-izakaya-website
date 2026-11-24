import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  jp?: string;
  title: ReactNode;
  copy?: ReactNode;
  align?: "left" | "center";
  /** "dark" for ink backgrounds, "light" for cream backgrounds */
  tone?: "dark" | "light";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  jp,
  title,
  copy,
  align = "left",
  tone = "dark",
  className = "",
}: Props) {
  const center = align === "center";

  return (
    <Reveal className={`${center ? "text-center" : ""} ${className}`}>
      <p
        className={`eyebrow flex items-center gap-3 ${center ? "justify-center" : ""} ${
          tone === "dark" ? "text-aka" : "text-aka-deep"
        }`}
      >
        <span aria-hidden="true" className="inline-block h-px w-8 bg-current" />
        {eyebrow}
        {jp && (
          <span
            aria-hidden="true"
            className="font-jp text-sm normal-case tracking-[0.3em] text-taupe"
          >
            {jp}
          </span>
        )}
      </p>
      <h2
        className={`mt-5 font-display text-4xl font-medium leading-[1.05] sm:text-5xl lg:text-6xl ${
          tone === "dark" ? "text-cream" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {copy && (
        <p
          className={`mt-5 max-w-2xl text-[15px] leading-relaxed sm:text-base ${
            center ? "mx-auto" : ""
          } ${tone === "dark" ? "text-cream/65" : "text-ink/65"}`}
        >
          {copy}
        </p>
      )}
    </Reveal>
  );
}
