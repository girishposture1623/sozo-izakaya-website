import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { EASE } from "../lib/motion";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
};

/** Scroll-into-view fade/rise wrapper used across every section. */
export default function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  once = true,
}: Props) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-60px" }}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
