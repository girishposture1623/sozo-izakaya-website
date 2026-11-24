import { ArrowUpRight, Info } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import RatingStars from "../components/RatingStars";
import ReviewCard from "../components/ReviewCard";
import { REVIEWS, REVIEWS_DISCLAIMER } from "../data/reviews";
import { SITE } from "../data/site";

export default function ReviewsSection() {
  return (
    <section
      id="reviews"
      className="relative overflow-hidden border-t border-line/60 bg-ink py-24 lg:py-32"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 top-0 select-none font-jp text-[18vw] leading-none text-cream/[0.03]"
      >
        声
      </span>

      <div className="container-x relative">
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
          <SectionHeading
            eyebrow="Guest voices"
            jp="レビュー"
            title="Rated by Mumbai's diners."
          />

          <Reveal className="flex items-center gap-6 rounded-2xl border border-line/70 bg-smoke/60 px-7 py-5">
            <p className="font-display text-6xl font-semibold leading-none text-cream">
              {SITE.rating}
            </p>
            <div>
              <RatingStars rating={SITE.rating} size={16} />
              <p className="mt-2 text-xs text-taupe">
                Based on{" "}
                <span className="font-semibold text-cream">
                  {SITE.reviewCount} reviews
                </span>{" "}
                on Google
              </p>
              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-aka transition-colors hover:text-cream"
              >
                View on Google Maps
                <ArrowUpRight size={12} aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-8">
          <p className="flex max-w-3xl items-start gap-2 text-xs leading-relaxed text-taupe">
            <Info size={14} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
            {REVIEWS_DISCLAIMER}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <ReviewCard key={r.id} review={r} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
