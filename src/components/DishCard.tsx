import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import type { Dish } from "../data/menu";
import { categoryById, dishImage } from "../data/menu";
import { EASE } from "../lib/motion";

/** Indian-style veg / non-veg mark used across the menu. */
export function VegMark({ veg, className = "" }: { veg: boolean; className?: string }) {
  return (
    <span
      role="img"
      aria-label={veg ? "Vegetarian" : "Non-vegetarian"}
      title={veg ? "Vegetarian" : "Non-vegetarian"}
      className={`flex h-5 w-5 items-center justify-center rounded-[4px] border bg-ink/75 backdrop-blur-sm ${
        veg ? "border-emerald-400" : "border-red-400"
      } ${className}`}
    >
      <span className={`h-2 w-2 rounded-full ${veg ? "bg-emerald-400" : "bg-red-400"}`} />
    </span>
  );
}

type Props = {
  dish: Dish;
  index?: number;
};

export default function DishCard({ dish, index = 0 }: Props) {
  const cat = categoryById(dish.category);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.04, 0.4), ease: EASE }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-line/70 bg-smoke/70 transition-colors duration-500 hover:border-aka/50"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={dishImage(dish)}
          alt={`${dish.name} — ${cat.label}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent"
        />
        <div className="absolute left-3 top-3 flex gap-2">
          {dish.popular && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-aka px-3 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-cream">
              <Flame size={11} aria-hidden="true" />
              Popular
            </span>
          )}
          {dish.spicy && (
            <span className="inline-flex items-center rounded-full border border-gold/60 bg-ink/70 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-gold">
              Spicy
            </span>
          )}
        </div>
        <VegMark veg={dish.veg} className="absolute right-3 top-3" />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-[22px] font-semibold leading-tight text-cream">
            {dish.name}
          </h3>
          <p className="whitespace-nowrap font-display text-xl font-semibold text-gold">
            ₹{dish.price.toLocaleString("en-IN")}
          </p>
        </div>
        <p className="mt-1 font-jp text-xs tracking-[0.18em] text-taupe">{dish.jp}</p>
        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-cream/60">
          {dish.desc}
        </p>
        <p className="mt-auto pt-4 text-[10px] font-bold uppercase tracking-[0.3em] text-taupe/80">
          {cat.label}
        </p>
      </div>
    </motion.article>
  );
}
