import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Facebook,
  Instagram,
  MapPin,
  Phone,
  Twitter,
  Youtube,
  type LucideIcon,
} from "lucide-react";
import Logo, { EnsoMark } from "./Logo";
import { DEMO_NOTE, NAV_LINKS, SITE } from "../data/site";

const SOCIAL_ICONS: Record<string, LucideIcon> = {
  instagram: Instagram,
  facebook: Facebook,
  x: Twitter,
  youtube: Youtube,
};

export default function Footer() {
  return (
    <footer className="border-t border-line/70 bg-coal">
      <div className="container-x grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1fr] lg:py-20">
        {/* Brand */}
        <div>
          <Logo />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-cream/55">
            A lantern-lit Japanese izakaya in Versova, Mumbai — sushi, ramen,
            skewers and sake, served the slow way.
          </p>
          <div className="mt-6 flex gap-3">
            {SITE.socials.map((s) => {
              const Icon = SOCIAL_ICONS[s.icon] ?? Instagram;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${s.label} (demo link)`}
                  className="grid h-10 w-10 place-items-center rounded-full border border-line text-taupe transition-all duration-300 hover:border-aka hover:bg-aka hover:text-cream"
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Explore */}
        <nav aria-label="Footer">
          <h3 className="eyebrow text-taupe">Explore</h3>
          <ul className="mt-5 space-y-3">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-sm text-cream/60 transition-colors hover:text-cream"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Visit */}
        <div>
          <h3 className="eyebrow text-taupe">Visit us</h3>
          <address className="mt-5 space-y-1 text-sm not-italic leading-relaxed text-cream/60">
            {SITE.addressLines.map((l) => (
              <p key={l}>{l}</p>
            ))}
          </address>
          <a
            href={SITE.phoneHref}
            className="mt-4 flex items-center gap-2 text-sm text-cream/70 transition-colors hover:text-cream"
          >
            <Phone size={14} className="shrink-0 text-aka" />
            {SITE.phoneDisplay}
          </a>
          <a
            href={SITE.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center gap-2 text-sm text-cream/70 transition-colors hover:text-cream"
          >
            <MapPin size={14} className="shrink-0 text-aka" />
            Get directions
            <ArrowUpRight size={12} />
          </a>
        </div>

        {/* Hours */}
        <div>
          <h3 className="eyebrow text-taupe">Hours</h3>
          <ul className="mt-5 space-y-4 text-sm text-cream/60">
            {SITE.hours.map((h) => (
              <li key={h.days}>
                <p className="font-semibold text-cream/80">{h.days}</p>
                {h.slots.map((s) => (
                  <p key={s} className="text-taupe">
                    {s}
                  </p>
                ))}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[11px] leading-relaxed text-taupe/80">
            {SITE.hoursNote}
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-line/60">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-[11px] text-taupe sm:flex-row">
          <p>© {new Date().getFullYear()} Sozo Izakaya – Versova. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <EnsoMark className="h-3.5 w-3.5 text-aka" />
            Crafted with care in Mumbai
          </p>
        </div>
      </div>

      {/* Honesty ribbon */}
      <div className="border-t border-aka/25 bg-aka/[0.08]">
        <p className="container-x py-3 text-center text-[11px] leading-relaxed text-taupe">
          {DEMO_NOTE}
        </p>
      </div>
    </footer>
  );
}
