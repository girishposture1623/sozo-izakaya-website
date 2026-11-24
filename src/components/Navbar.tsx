import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Phone } from "lucide-react";
import Logo from "./Logo";
import Button from "./Button";
import { NAV_LINKS, SITE } from "../data/site";
import useScrolled from "../hooks/useScrolled";
import { EASE } from "../lib/motion";

export default function Navbar() {
  const scrolled = useScrolled(24);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  /* Close the mobile menu whenever the route changes */
  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.search]);

  /* Lock body scroll while the mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || open
            ? "border-b border-line/70 bg-ink/90 backdrop-blur-md"
            : "border-b border-transparent bg-gradient-to-b from-ink/80 via-ink/30 to-transparent"
        }`}
      >
        <div className="container-x flex h-20 items-center justify-between gap-6">
          <Logo />

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `group relative py-2 text-[11px] font-bold uppercase tracking-[0.28em] transition-colors ${
                    isActive ? "text-cream" : "text-taupe hover:text-cream"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-0 -bottom-0.5 h-px origin-left bg-aka transition-transform duration-500 ${
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3 sm:gap-5">
            <a
              href={SITE.phoneHref}
              className="hidden items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-taupe transition-colors hover:text-cream xl:flex"
            >
              <Phone size={14} className="text-aka" />
              {SITE.phoneDisplay}
            </a>

            <Button
              to="/reservations"
              size="sm"
              className="hidden sm:inline-flex"
              icon={<ArrowUpRight size={14} />}
            >
              Reserve a Table
            </Button>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="relative grid h-11 w-11 place-items-center border border-line bg-ink/60 text-cream transition-colors hover:border-aka lg:hidden"
            >
              <span className="relative block h-3.5 w-5">
                <span
                  aria-hidden="true"
                  className={`absolute left-0 top-0 h-[1.5px] w-full bg-current transition-all duration-300 ${
                    open ? "top-1/2 -translate-y-1/2 rotate-45" : ""
                  }`}
                />
                <span
                  aria-hidden="true"
                  className={`absolute left-0 top-1/2 h-[1.5px] w-full -translate-y-1/2 bg-current transition-all duration-300 ${
                    open ? "opacity-0" : ""
                  }`}
                />
                <span
                  aria-hidden="true"
                  className={`absolute bottom-0 left-0 h-[1.5px] w-full bg-current transition-all duration-300 ${
                    open ? "bottom-1/2 translate-y-1/2 -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* ------------------------- Mobile overlay ------------------------- */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 overflow-y-auto bg-ink pt-28 pb-10"
          >
            <div className="container-x flex min-h-full flex-col">
              <nav className="flex flex-col" aria-label="Mobile">
                {NAV_LINKS.map((l, i) => (
                  <motion.div
                    key={l.to}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.07 * i + 0.1, duration: 0.5, ease: EASE }}
                  >
                    <NavLink
                      to={l.to}
                      end={l.to === "/"}
                      className={({ isActive }) =>
                        `group flex items-baseline gap-4 border-b border-line/60 py-4 ${
                          isActive ? "text-cream" : "text-cream/70"
                        }`
                      }
                    >
                      <span className="font-jp text-xs text-aka">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-4xl font-medium">{l.label}</span>
                      <ArrowUpRight
                        size={20}
                        className="ml-auto text-taupe transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                      />
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5, ease: EASE }}
                className="mt-10 flex flex-col gap-6"
              >
                <Button to="/reservations" size="lg" className="w-full sm:w-auto">
                  Reserve a Table
                </Button>
                <a
                  href={SITE.phoneHref}
                  className="flex items-center gap-3 text-sm font-semibold tracking-wide text-cream/80"
                >
                  <Phone size={16} className="text-aka" />
                  {SITE.phoneDisplay}
                </a>
                <p className="max-w-xs text-xs leading-relaxed text-taupe">
                  {SITE.addressFull}
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
