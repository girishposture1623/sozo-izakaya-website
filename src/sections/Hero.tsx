import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown, MapPin, Star } from "lucide-react";
import Button from "../components/Button";
import { SITE } from "../data/site";
import { EASE } from "../lib/motion";

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative flex h-svh min-h-[660px] items-center overflow-hidden">
      <motion.img
        src="/images/hero.jpg"
        alt="A steaming bowl of ramen eaten with chopsticks at Sozo Izakaya"
        initial={reduce ? false : { scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.6, ease: EASE }}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/55 to-ink/25"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-noise opacity-35" />

      <p
        aria-hidden="true"
        className="jp-v absolute right-8 top-1/2 hidden -translate-y-1/2 select-none text-2xl text-cream/25 lg:block"
      >
        居酒屋
      </p>

      <div className="container-x relative pt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          className="eyebrow flex items-center gap-3 text-aka"
        >
          <span aria-hidden="true" className="inline-block h-px w-10 bg-current" />
          Izakaya · Versova, Mumbai
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: EASE }}
          className="mt-6 font-display text-[clamp(4rem,11vw,9rem)] font-medium leading-[0.9] tracking-[0.02em] text-cream"
        >
          SOZO
          <span className="mt-4 block font-body text-[clamp(0.65rem,1.4vw,0.9rem)] font-bold uppercase tracking-[0.65em] text-cream/80">
            居酒屋 — Izakaya · Versova
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55, ease: EASE }}
          className="mt-7 max-w-xl text-base leading-relaxed text-cream/70 sm:text-lg"
        >
          Tokyo-style small plates, ramen and sake — a lantern-lit
          neighbourhood izakaya tucked into the lanes of Versova.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7, ease: EASE }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button to="/reservations" size="lg">
            Reserve a Table
          </Button>
          <Button to="/menu" size="lg" variant="outline">
            Explore Menu
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-cream/70"
        >
          <span className="flex items-center gap-2">
            <Star size={16} className="fill-gold text-gold" aria-hidden="true" />
            <strong className="font-semibold text-cream">{SITE.rating}</strong> ·{" "}
            {SITE.reviewCount} Google reviews
          </span>
          <span aria-hidden="true" className="hidden h-4 w-px bg-cream/20 sm:block" />
          <span className="flex items-center gap-2">
            <MapPin size={15} className="text-aka" aria-hidden="true" />
            Versova, Andheri West
          </span>
          <span aria-hidden="true" className="hidden h-4 w-px bg-cream/20 sm:block" />
          <span>
            {SITE.priceRange}{" "}
            <span className="text-taupe">{SITE.priceNote}</span>
          </span>
        </motion.div>
      </div>

      <motion.a
        href="#intro"
        aria-label="Scroll to introduction"
        animate={reduce ? undefined : { y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-bold uppercase tracking-[0.35em] text-cream/50 transition-colors hover:text-cream md:flex"
      >
        Scroll
        <ChevronDown size={16} aria-hidden="true" />
      </motion.a>
    </section>
  );
}
