import { Star } from "lucide-react";

type Props = {
  rating: number;
  size?: number;
  className?: string;
};

/** Five-star row with fractional gold fill (e.g. 4.2 → 84%). */
export default function RatingStars({ rating, size = 16, className = "" }: Props) {
  const pct = Math.max(0, Math.min(100, (rating / 5) * 100));

  const row = (filled: boolean) => (
    <div className="flex gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          strokeWidth={1.5}
          className={filled ? "fill-gold text-gold" : "fill-transparent text-taupe/50"}
        />
      ))}
    </div>
  );

  return (
    <span
      className={`relative inline-flex ${className}`}
      role="img"
      aria-label={`Rated ${rating} out of 5`}
    >
      {row(false)}
      <span className="absolute inset-0 overflow-hidden" style={{ width: `${pct}%` }}>
        {row(true)}
      </span>
    </span>
  );
}
