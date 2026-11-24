import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

export default function Intro() {
  return (
    <section id="intro" className="relative overflow-hidden bg-cream py-24 text-ink lg:py-32">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 top-8 select-none font-jp text-[22vw] leading-none text-ink/[0.04]"
      >
        居酒屋
      </span>

      <div className="container-x relative grid items-center gap-16 lg:grid-cols-2">
        <div>
          <SectionHeading
            tone="light"
            eyebrow="Irasshaimase — welcome"
            jp="ようこそ"
            title={
              <>
                A little slice of Tokyo,
                <br />
                tucked into Versova.
              </>
            }
          />
          <Reveal delay={0.1}>
            <p className="mt-6 text-[15px] leading-relaxed text-ink/70 sm:text-base">
              Sozo Izakaya is a Japanese restaurant in Versova, Andheri West,
              built around the izakaya way of eating — drinks first, then a
              slow parade of small plates made for sharing. Sushi and sashimi,
              steaming bowls of ramen, charcoal-kissed skewers and highballs,
              all in a room that glows low and warm.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-ink/70 sm:text-base">
              Come with friends, order for the table and let the evening
              stretch. That’s the whole idea.
            </p>
            <Link
              to="/about"
              className="group mt-8 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-aka-deep"
            >
              Our story
              <span className="grid h-9 w-9 place-items-center rounded-full border border-aka-deep/40 transition-all duration-500 group-hover:bg-aka-deep group-hover:text-cream">
                <ArrowRight size={15} aria-hidden="true" />
              </span>
            </Link>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="relative">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -left-4 -top-4 h-full w-full rounded-2xl border border-aka/40"
            />
            <img
              src="/images/chef.jpg"
              alt="A chef laying fresh salmon over a sushi roll at the counter"
              loading="lazy"
              className="relative h-[420px] w-full rounded-2xl object-cover sm:h-[520px]"
            />
            <figure className="absolute -bottom-8 -right-3 w-40 rotate-2 overflow-hidden rounded-xl border-4 border-cream shadow-2xl sm:-right-8 sm:w-56">
              <img
                src="/images/lanterns.jpg"
                alt="Glowing red and white izakaya lanterns"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </figure>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
