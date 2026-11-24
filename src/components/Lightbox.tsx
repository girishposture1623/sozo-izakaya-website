import { useCallback, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryItem } from "../data/gallery";

type Props = {
  items: GalleryItem[];
  index: number | null;
  onClose: () => void;
  onNavigate: (i: number) => void;
};

/** Accessible fullscreen image viewer with keyboard navigation. */
export default function Lightbox({ items, index, onClose, onNavigate }: Props) {
  const item = index !== null ? items[index] : undefined;

  const go = useCallback(
    (dir: 1 | -1) => {
      if (index === null || items.length === 0) return;
      onNavigate((index + dir + items.length) % items.length);
    },
    [index, items.length, onNavigate]
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, go, onClose]);

  return (
    <AnimatePresence>
      {item && index !== null && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm sm:p-8"
        >
          <button
            type="button"
            aria-label="Close viewer"
            onClick={onClose}
            className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full border border-cream/20 bg-ink/60 text-cream transition-colors hover:border-aka hover:text-aka sm:right-6 sm:top-6"
          >
            <X size={20} />
          </button>

          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              go(-1);
            }}
            className="absolute left-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-cream/20 bg-ink/60 text-cream transition-colors hover:border-aka hover:text-aka sm:left-6"
          >
            <ChevronLeft size={20} />
          </button>

          <motion.figure
            key={index}
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            onClick={(e) => e.stopPropagation()}
            className="max-w-5xl"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="max-h-[76vh] w-auto max-w-full rounded-lg object-contain"
            />
            <figcaption className="mt-4 flex items-center justify-between gap-4">
              <span className="text-sm text-cream/80">{item.caption}</span>
              <span className="text-xs font-bold tracking-[0.25em] text-taupe">
                {index + 1} / {items.length}
              </span>
            </figcaption>
          </motion.figure>

          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              go(1);
            }}
            className="absolute right-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-cream/20 bg-ink/60 text-cream transition-colors hover:border-aka hover:text-aka sm:right-6"
          >
            <ChevronRight size={20} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
