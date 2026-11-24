import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Flame, Info, Search, SearchX, X } from "lucide-react";
import PageHero from "../components/PageHero";
import DishCard, { VegMark } from "../components/DishCard";
import Button from "../components/Button";
import { CATEGORIES, DISHES, categoryById } from "../data/menu";

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`whitespace-nowrap rounded-full border px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] transition-all duration-300 ${
        active
          ? "border-aka bg-aka text-cream"
          : "border-line text-taupe hover:border-cream/40 hover:text-cream"
      }`}
    >
      {children}
    </button>
  );
}

export default function MenuPage() {
  const [params, setParams] = useSearchParams();
  const [query, setQuery] = useState("");
  const active = params.get("cat") ?? "all";

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return DISHES.filter(
      (d) =>
        (active === "all" || d.category === active) &&
        (!q || `${d.name} ${d.jp} ${d.desc}`.toLowerCase().includes(q))
    );
  }, [active, query]);

  const selectCategory = (id: string) => {
    setParams(id === "all" ? {} : { cat: id }, { preventScrollReset: true });
  };

  const resetAll = () => {
    setQuery("");
    selectCategory("all");
  };

  return (
    <>
      <PageHero
        kicker="The menu"
        jp="お品書き"
        title="Eat like the evening has no end."
        copy="Sushi and sashimi, ramen and rice bowls, skewers off the grill and a sweet finish — explore all eight categories."
        image="/images/sushi.jpg"
        alt="Assorted sushi rolls on dark slate"
      />

      {/* Sample-data disclaimer */}
      <div className="border-b border-line/60 bg-gold/[0.07]">
        <div className="container-x flex items-start gap-3 py-4 text-xs leading-relaxed text-gold/90 sm:text-[13px]">
          <Info size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
          <p>
            <strong className="font-bold">Sample menu.</strong> The dishes and
            prices shown are demo data for illustration — this is not the
            official Sozo Izakaya menu, and actual dishes, availability and
            pricing may differ. All prices in INR (₹).
          </p>
        </div>
      </div>

      {/* Sticky filter bar */}
      <div className="sticky top-20 z-30 border-b border-line/60 bg-ink/90 backdrop-blur-md">
        <div className="container-x flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between">
          <div
            className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 sm:mx-0 sm:px-0"
            role="group"
            aria-label="Filter menu by category"
          >
            <Chip active={active === "all"} onClick={() => selectCategory("all")}>
              All
            </Chip>
            {CATEGORIES.map((c) => (
              <Chip
                key={c.id}
                active={active === c.id}
                onClick={() => selectCategory(c.id)}
              >
                {c.label}
              </Chip>
            ))}
          </div>

          <label className="relative block shrink-0 lg:w-72">
            <Search
              size={16}
              aria-hidden="true"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-taupe"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search dishes…"
              aria-label="Search dishes"
              className="w-full rounded-full border border-line bg-coal py-2.5 pl-11 pr-10 text-sm text-cream placeholder:text-taupe/60 focus:border-aka focus:outline-none"
            />
            {query && (
              <button
                type="button"
                aria-label="Clear search"
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-taupe transition-colors hover:text-cream"
              >
                <X size={15} />
              </button>
            )}
          </label>
        </div>
      </div>

      {/* Dish grid */}
      <section className="container-x py-14 lg:py-20">
        <p
          aria-live="polite"
          className="mb-8 text-xs font-bold uppercase tracking-[0.3em] text-taupe"
        >
          Showing <span className="text-cream">{filtered.length}</span> of{" "}
          {DISHES.length} dishes
          {active !== "all" && (
            <>
              {" "}
              in <span className="text-aka">{categoryById(active).label}</span>
            </>
          )}
        </p>

        {filtered.length > 0 ? (
          <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((d, i) => (
                <DishCard key={d.id} dish={d} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="flex flex-col items-center rounded-2xl border border-dashed border-line py-20 text-center">
            <span className="grid h-14 w-14 place-items-center rounded-full border border-line text-taupe">
              <SearchX size={22} aria-hidden="true" />
            </span>
            <p className="mt-6 font-display text-2xl text-cream">
              Nothing matches “{query}”
            </p>
            <p className="mt-2 max-w-sm text-sm text-cream/55">
              Try a different search — “ramen”, “matcha” or “gyoza” are all
              good places to start.
            </p>
            <Button variant="outline" size="sm" className="mt-6" onClick={resetAll}>
              Reset filters
            </Button>
          </div>
        )}

        {/* Legend */}
        <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-line/60 pt-8 text-xs text-taupe">
          <span className="flex items-center gap-2">
            <VegMark veg /> Vegetarian
          </span>
          <span className="flex items-center gap-2">
            <VegMark veg={false} /> Non-vegetarian
          </span>
          <span className="flex items-center gap-2">
            <Flame size={13} className="text-aka" aria-hidden="true" /> House favourite
          </span>
          <span className="sm:ml-auto">All prices in ₹ INR · sample data</span>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-line/60 bg-coal py-16">
        <div className="container-x flex flex-wrap items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-3xl font-medium text-cream sm:text-4xl">
              Found your favourites?
            </h2>
            <p className="mt-2 text-sm text-cream/60">
              Save a seat — the counter fills up fast on weekends.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button to="/reservations">Reserve a Table</Button>
            <Button href="tel:+919867986481" variant="outline">
              Call the Restaurant
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
