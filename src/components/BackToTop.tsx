import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import useScrolled from "../hooks/useScrolled";

/** Floating back-to-top button, visible after 600px of scrolling. */
export default function BackToTop() {
  const show = useScrolled(600);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          key="back-to-top"
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-aka text-cream shadow-[0_10px_30px_rgba(200,50,43,0.35)] transition-colors hover:bg-aka-deep"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
