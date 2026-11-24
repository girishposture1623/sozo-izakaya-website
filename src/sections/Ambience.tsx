import { GlassWater, Lamp, Users, UtensilsCrossed } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { EnsoMark } from "../components/Logo";
import { SITE } from "../data/site";

const FEATURES = [
  {
    icon: UtensilsCrossed,
    title: "Built for sharing",
    text: "Small plates land as they're ready — order in rounds and pass everything.",
  },
  {
    icon: GlassWater,
    title: "Sake & highballs",
    text: "A drinks-first room: sake, umeshu, yuzu coolers and whisked matcha.",
  },
  {
    icon: Lamp,
    title: "Lantern-lit corners",
    text: "Dark timber, paper-lantern glow and counter seats for solo evenings.",
  },
  {
    icon: Users,
    title: "Bring the table",
    text: "Made for groups, date nights and everything in between.",
  },
] as const;

const STATS = [
  { value: String(SITE.rating), label: "Google rating" },
  { value: String(SITE.reviewCount), label: "Google reviews" },
  { value: SITE.priceRange, label: "per person" },
  { value: "8", label: "menu categories" },
] as const;

export default function Ambience() {
  return (
    <section className="relative overflow-hidden bg-cream py-24 text-ink lg:py-32">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-8 bottom-0 select-none font-jp text-[20vw] leading-none text-ink/[0.04]"
      >
        酒
      </span>

      <div className="container-x relative grid items-center gap-16 lg:grid-cols-2">
        <Reveal className="relative order-2 lg:order-1">
          <EnsoMark
            aria-hidden="true"
            className="absolute -right-6 -top-10 z-10 h-20 w-20 text-aka/40"
          />
          <img
            src="/images/interior.jpg"
            alt="The warm wooden interior of an izakaya with counter seating"
            loading="lazy"
            className="h-[420px] w-full rounded-2xl object-cover sm:h-[520px]"
          />
          <figure className="absolute -bottom-10 -left-3 w-44 -rotate-2 overflow-hidden rounded-xl border-4 border-cream shadow-2xl sm:-left-8 sm:w-60">
            <img
              src="/images/bar.jpg"
              alt="Backlit bottles behind the bar"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </figure>
        </Reveal>

        <div className="order-1 lg:order-2">
          <SectionHeading
            tone="light"
            eyebrow="The room"
            jp="雰囲気"
            title="Low light, warm wood, lantern glow."
            copy="The room is tuned for unhurried evenings — close tables, a working counter and music that stays out of the conversation's way."
          />

          <Reveal delay={0.1}>
            <ul className="mt-9 grid gap-x-8 gap-y-7 sm:grid-cols-2">
              {FEATURES.map((f) => (
                <li key={f.title} className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-aka/40 text-aka-deep">
                    <f.icon size={18} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-display text-lg font-semibold">
                      {f.title}
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-ink/60">
                      {f.text}
                    </span>
                  </span>
                </li>
              ))}
            </ul>

            <dl className="mt-10 grid grid-cols-2 gap-y-6 border-t border-ink/10 pt-8 sm:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label}>
                  <dt className="order-2 mt-1 block text-[10px] font-bold uppercase tracking-[0.25em] text-ink/50">
                    {s.label}
                  </dt>
                  <dd className="font-display text-3xl font-semibold text-ink">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
