import { Quote } from "lucide-react";
import RatingStars from "./RatingStars";
import Reveal from "./Reveal";
import type { Review } from "../data/reviews";

type Props = {
  review: Review;
  index?: number;
};

export default function ReviewCard({ review, index = 0 }: Props) {
  return (
    <Reveal delay={index * 0.07} className="h-full">
      <figure className="flex h-full flex-col rounded-2xl border border-line/70 bg-smoke/60 p-6 transition-colors duration-500 hover:border-gold/40">
        <Quote size={22} className="text-aka" aria-hidden="true" />
        <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-cream/75">
          {review.text}
        </blockquote>
        <figcaption className="mt-6 flex items-center gap-3 border-t border-line/60 pt-5">
          <span
            aria-hidden="true"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-aka/40 bg-aka/15 font-display text-lg text-cream"
          >
            {review.name.charAt(0)}
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-semibold text-cream">
              {review.name}
            </span>
            <span className="block text-[11px] uppercase tracking-[0.18em] text-taupe">
              {review.area}
            </span>
          </span>
          <span className="ml-auto flex flex-col items-end gap-1.5">
            <RatingStars rating={review.rating} size={13} />
            <span className="rounded-full border border-line px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.18em] text-taupe">
              Sample
            </span>
          </span>
        </figcaption>
      </figure>
    </Reveal>
  );
}
