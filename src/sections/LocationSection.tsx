import { Clock, MapPin, Phone } from "lucide-react";
import Button from "../components/Button";
import Reveal from "../components/Reveal";
import { EnsoMark } from "../components/Logo";
import { SITE } from "../data/site";

export default function LocationSection() {
  return (
    <section className="bg-ink pb-24 lg:pb-32">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-line/70 bg-coal">
            <EnsoMark className="absolute -right-16 -top-16 h-64 w-64 text-aka/10" />

            <div className="grid lg:grid-cols-2">
              <div className="relative p-8 sm:p-12 lg:p-14">
                <p className="eyebrow flex items-center gap-3 text-aka">
                  <span aria-hidden="true" className="inline-block h-px w-8 bg-current" />
                  Find us
                  <span
                    aria-hidden="true"
                    className="font-jp text-sm normal-case tracking-[0.3em] text-taupe"
                  >
                    アクセス
                  </span>
                </p>
                <h2 className="mt-5 font-display text-4xl font-medium leading-[1.05] text-cream sm:text-5xl">
                  Tucked into the lanes of Versova.
                </h2>

                <address className="mt-6 space-y-1 text-[15px] not-italic leading-relaxed text-cream/70">
                  {SITE.addressLines.map((l) => (
                    <p key={l}>{l}</p>
                  ))}
                </address>

                <div className="mt-6 space-y-3 text-sm">
                  <a
                    href={SITE.phoneHref}
                    className="flex items-center gap-3 text-cream/80 transition-colors hover:text-cream"
                  >
                    <Phone size={16} className="shrink-0 text-aka" aria-hidden="true" />
                    {SITE.phoneDisplay}
                  </a>
                  <p className="flex items-center gap-3 text-cream/60">
                    <Clock size={16} className="shrink-0 text-aka" aria-hidden="true" />
                    12:00 PM – 11:30 PM
                    <span className="text-taupe">(call to verify)</span>
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Button
                    href={SITE.mapsUrl}
                    external
                    icon={<MapPin size={14} aria-hidden="true" />}
                  >
                    Get Directions
                  </Button>
                  <Button
                    href={SITE.phoneHref}
                    variant="outline"
                    icon={<Phone size={14} aria-hidden="true" />}
                  >
                    Call Us
                  </Button>
                </div>
              </div>

              <div className="relative min-h-[320px]">
                <img
                  src="/images/table.jpg"
                  alt="A candle-lit table set for the evening at Sozo Izakaya"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-r from-coal via-coal/20 to-transparent"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
