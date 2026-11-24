import { ArrowUpRight, Clock, MapPin, Phone } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import { SITE } from "../data/site";

export default function Contact() {
  return (
    <>
      <PageHero
        kicker="Contact & location"
        jp="連絡"
        title="Find your way to Versova."
        copy="Call ahead for a table, or just follow the lanterns down JP Road — we're in Aram Nagar Part 2."
        image="/images/lanterns.jpg"
        alt="Glowing izakaya lanterns at night"
      />

      {/* Info cards */}
      <section className="container-x grid gap-6 py-16 md:grid-cols-3 lg:py-24">
        <Reveal>
          <article className="flex h-full flex-col rounded-2xl border border-line/70 bg-smoke/60 p-7">
            <span className="grid h-12 w-12 place-items-center rounded-full border border-aka/40 bg-aka/15 text-aka">
              <MapPin size={20} aria-hidden="true" />
            </span>
            <h2 className="mt-6 font-display text-2xl font-semibold text-cream">Visit</h2>
            <address className="mt-3 flex-1 space-y-1 text-sm not-italic leading-relaxed text-cream/65">
              {SITE.addressLines.map((l) => (
                <p key={l}>{l}</p>
              ))}
            </address>
            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-aka transition-colors hover:text-cream"
            >
              Get directions
              <ArrowUpRight size={13} aria-hidden="true" />
            </a>
          </article>
        </Reveal>

        <Reveal delay={0.08}>
          <article className="flex h-full flex-col rounded-2xl border border-line/70 bg-smoke/60 p-7">
            <span className="grid h-12 w-12 place-items-center rounded-full border border-aka/40 bg-aka/15 text-aka">
              <Phone size={20} aria-hidden="true" />
            </span>
            <h2 className="mt-6 font-display text-2xl font-semibold text-cream">Call</h2>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-cream/65">
              For reservations, large tables and anything else — the team
              picks up during opening hours.
            </p>
            <a
              href={SITE.phoneHref}
              className="mt-5 block font-display text-2xl font-semibold text-gold transition-colors hover:text-cream"
            >
              {SITE.phoneDisplay}
            </a>
            <span className="mt-1 text-[11px] uppercase tracking-[0.2em] text-taupe">
              Tap to call
            </span>
          </article>
        </Reveal>

        <Reveal delay={0.16}>
          <article className="flex h-full flex-col rounded-2xl border border-line/70 bg-smoke/60 p-7">
            <span className="grid h-12 w-12 place-items-center rounded-full border border-aka/40 bg-aka/15 text-aka">
              <Clock size={20} aria-hidden="true" />
            </span>
            <h2 className="mt-6 font-display text-2xl font-semibold text-cream">Hours</h2>
            <ul className="mt-3 flex-1 space-y-3 text-sm text-cream/65">
              {SITE.hours.map((h) => (
                <li key={h.days}>
                  <p className="font-semibold text-cream/85">{h.days}</p>
                  {h.slots.map((s) => (
                    <p key={s} className="text-taupe">
                      {s}
                    </p>
                  ))}
                </li>
              ))}
            </ul>
            <p className="mt-4 border-t border-line/60 pt-3 text-[11px] leading-relaxed text-gold/85">
              {SITE.hoursNote}
            </p>
          </article>
        </Reveal>
      </section>

      {/* Map */}
      <section className="container-x pb-24">
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-line/70">
            <iframe
              title="Map — Sozo Izakaya, Versova, Mumbai"
              src={SITE.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="h-[400px] w-full lg:h-[460px]"
            />
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-6 flex flex-wrap gap-4">
            <Button href={SITE.mapsUrl} external icon={<MapPin size={14} aria-hidden="true" />}>
              Open in Google Maps
            </Button>
            <Button href={SITE.phoneHref} variant="outline" icon={<Phone size={14} aria-hidden="true" />}>
              Call {SITE.phoneDisplay}
            </Button>
          </div>
        </Reveal>

        {/* Social strip */}
        <Reveal delay={0.12}>
          <div className="mt-12 flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-line/70 bg-smoke/60 p-7">
            <div>
              <h2 className="font-display text-2xl font-semibold text-cream">
                Follow along
              </h2>
              <p className="mt-1 text-sm text-cream/55">
                Specials, new plates and late-night ramen runs.
              </p>
            </div>
            <div className="flex items-center gap-3">
              {SITE.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${s.label} (demo link)`}
                  className="rounded-full border border-line px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-taupe transition-all duration-300 hover:border-aka hover:bg-aka hover:text-cream"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
