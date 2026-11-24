import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { CATEGORIES, dishCount } from "../data/menu";

export default function Categories() {
  return (
    <section className="border-t border-line/60 bg-coal py-24 lg:py-32">
      <div className="container-x">
        <SectionHeading
          align="center"
          eyebrow="The menu"
          jp="お品書き"
          title="Start anywhere. Order everything."
          copy="Eight ways into the evening — from sushi and ramen to dim sum, donburi and dessert."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((c, i) => (
            <Reveal key={c.id} delay={Math.min(i * 0.05, 0.35)}>
              <Link
                to={`/menu?cat=${c.id}`}
                className="group relative block h-60 overflow-hidden rounded-2xl"
                aria-label={`View the ${c.label} category on the menu`}
              >
                <img
                  src={c.image}
                  alt={`${c.label} at Sozo Izakaya`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-[1.07]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/35 to-ink/10 transition-colors duration-500 group-hover:via-ink/20"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 rounded-2xl border border-transparent transition-colors duration-500 group-hover:border-aka/60"
                />
                <span
                  aria-hidden="true"
                  className="absolute right-4 top-4 grid h-9 w-9 -translate-y-1 place-items-center rounded-full border border-cream/30 bg-ink/50 text-cream opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <ArrowUpRight size={16} />
                </span>
                <span className="absolute inset-x-0 bottom-0 p-5">
                  <span className="block font-jp text-[11px] tracking-[0.2em] text-gold">
                    {c.jp}
                  </span>
                  <span className="mt-1 block font-display text-2xl font-semibold text-cream">
                    {c.label}
                  </span>
                  <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.3em] text-cream/55">
                    {dishCount(c.id)} dishes
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
