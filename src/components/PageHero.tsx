import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Props = {
  kicker: string;
  jp: string;
  title: ReactNode;
  copy?: string;
  image: string;
  alt: string;
  children?: ReactNode;
};

/** Shared inner-page hero banner with image, gradient and vertical kanji. */
export default function PageHero({ kicker, jp, title, copy, image, alt, children }: Props) {
  return (
    <section className="relative overflow-hidden pb-16 pt-36 lg:pb-20 lg:pt-44">
      <img
        src={image}
        alt={alt}
        loading="eager"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/40"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/60"
      />
      <p
        aria-hidden="true"
        className="jp-v absolute right-6 top-1/2 hidden -translate-y-1/2 select-none text-xl text-cream/20 lg:block"
      >
        {jp}
      </p>

      <div className="container-x relative">
        <Reveal>
          <p className="eyebrow flex items-center gap-3 text-aka">
            <span aria-hidden="true" className="inline-block h-px w-8 bg-current" />
            {kicker}
            <span
              aria-hidden="true"
              className="font-jp text-sm normal-case tracking-[0.3em] text-taupe"
            >
              {jp}
            </span>
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-5xl font-medium leading-[1.02] text-cream sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          {copy && (
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-cream/65 sm:text-base">
              {copy}
            </p>
          )}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
