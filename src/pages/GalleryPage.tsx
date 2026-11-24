import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Expand, Images } from "lucide-react";
import PageHero from "../components/PageHero";
import Lightbox from "../components/Lightbox";
import { GALLERY, GALLERY_CATS, galleryCatLabel } from "../data/gallery";
import { EASE } from "../lib/motion";

export default function GalleryPage() {
  const [cat, setCat] = useState("all");
  const [index, setIndex] = useState<number | null>(null);

  const items = useMemo(
    () => GALLERY.filter((g) => cat === "all" || g.cat === cat),
    [cat]
  );

  return (
    <>
      <PageHero
        kicker="The gallery"
        jp="写真"
        title="Low light, warm plates."
        copy="Sushi, ramen, the grill, the room and the pours — a look around Sozo Izakaya."
        image="/images/interior.jpg"
        alt="Izakaya dining room with a wooden counter"
      />

      {/* Filter chips */}
      <div className="border-b border-line/60">
        <div
          className="container-x no-scrollbar flex gap-2 overflow-x-auto py-5"
          role="group"
          aria-label="Filter gallery by category"
        >
          {GALLERY_CATS.map((c) => (
            <button
              key={c.id}
              type="button"
              aria-pressed={cat === c.id}
              onClick={() => {
                setCat(c.id);
                setIndex(null);
              }}
              className={`whitespace-nowrap rounded-full border px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] transition-all duration-300 ${
                cat === c.id
                  ? "border-aka bg-aka text-cream"
                  : "border-line text-taupe hover:border-cream/40 hover:text-cream"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      <section className="container-x py-14 lg:py-20">
        <p className="mb-8 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-taupe">
          <Images size={14} className="text-aka" aria-hidden="true" />
          {items.length} photographs
          {cat !== "all" && <span className="text-cream">· {galleryCatLabel(cat)}</span>}
        </p>

        <motion.div
          layout
          className="grid grid-cols-2 gap-3 [grid-auto-rows:160px] sm:[grid-auto-rows:200px] md:grid-cols-3 lg:grid-cols-4 lg:[grid-auto-rows:220px]"
        >
          <AnimatePresence mode="popLayout">
            {items.map((g, i) => (
              <motion.button
                layout
                key={g.src}
                type="button"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: Math.min(i * 0.03, 0.3), ease: EASE }}
                onClick={() => setIndex(i)}
                aria-label={`Open image: ${g.caption}`}
                className={`group relative overflow-hidden rounded-xl text-left ${
                  g.tall ? "row-span-2" : ""
                }`}
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-[1.07]"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <span
                  aria-hidden="true"
                  className="absolute right-3 top-3 grid h-9 w-9 scale-75 place-items-center rounded-full bg-aka text-cream opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100"
                >
                  <Expand size={15} />
                </span>
                <span className="absolute inset-x-0 bottom-0 translate-y-2 p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="block text-sm font-semibold text-cream">{g.caption}</span>
                  <span className="mt-0.5 block text-[10px] font-bold uppercase tracking-[0.25em] text-gold">
                    {galleryCatLabel(g.cat)}
                  </span>
                </span>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        <p className="mt-10 border-t border-line/60 pt-6 text-[11px] leading-relaxed text-taupe">
          Demo photography — licensed stock images (Pexels) and AI-generated
          visuals created for this concept website.
        </p>
      </section>

      <Lightbox
        items={items}
        index={index}
        onClose={() => setIndex(null)}
        onNavigate={setIndex}
      />
    </>
  );
}
