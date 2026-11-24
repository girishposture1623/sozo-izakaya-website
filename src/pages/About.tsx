import { Share2, Soup, Wine } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import { EnsoMark } from "../components/Logo";

const KANJI = [
  {
    char: "居",
    reading: "i — to stay",
    meaning: "Stay a while",
    note: "The invitation at the heart of it: sit down, settle in, the evening is yours.",
  },
  {
    char: "酒",
    reading: "saka — sake",
    meaning: "Drink comes first",
    note: "Izakaya evenings begin with a pour — sake, a highball or something cold with yuzu.",
  },
  {
    char: "屋",
    reading: "ya — shop",
    meaning: "A little room",
    note: "Small, warm and familiar. The kind of place that becomes 'your place'.",
  },
] as const;

const PILLARS = [
  {
    icon: Share2,
    title: "Share",
    text: "Plates are built for the middle of the table — order in waves and pass everything around.",
  },
  {
    icon: Wine,
    title: "Sip",
    text: "Sake warm or cold, plum wine on the rocks, highballs with clear ice — drinks lead, food follows.",
  },
  {
    icon: Soup,
    title: "Savour",
    text: "End slow: a bowl of ramen, a matcha dessert, one more pot of green tea.",
  },
] as const;

const STEPS = [
  {
    title: "Order for the table",
    text: "Start with drinks and a spread of small plates — edamame, gyoza, something from the grill.",
    img: "/images/gyoza.jpg",
    alt: "Pan-seared gyoza on a dark plate",
  },
  {
    title: "Plates arrive as ready",
    text: "No starters, no mains — the kitchen sends things out the moment they're at their best.",
    img: "/images/tempura.jpg",
    alt: "Golden prawn tempura",
  },
  {
    title: "Pour for each other",
    text: "The izakaya custom: keep an eye on your neighbour's glass, never your own.",
    img: "/images/sake.jpg",
    alt: "Sake poured into a small cup",
  },
  {
    title: "Linger a little longer",
    text: "One more round, one more skewer. The evening ends when you say so.",
    img: "/images/dessert.jpg",
    alt: "Matcha dessert on a dark plate",
  },
] as const;

export default function About() {
  return (
    <>
      <PageHero
        kicker="About Sozo"
        jp="紹介"
        title="An izakaya, the Versova way."
        copy="Sozo Izakaya is a Japanese restaurant in Versova, Andheri West — a room built around the simple idea that food tastes better when the evening isn't rushed."
        image="/images/lanterns.jpg"
        alt="Red and white izakaya lanterns glowing at night"
      />

      {/* ---------------------------- Story ---------------------------- */}
      <section className="bg-cream py-24 text-ink lg:py-32">
        <div className="container-x grid items-center gap-16 lg:grid-cols-2">
          <Reveal className="relative">
            <div
              aria-hidden="true"
              className="absolute -left-4 -top-4 h-full w-full rounded-2xl border border-aka/40"
            />
            <img
              src="/images/chef.jpg"
              alt="A chef preparing sushi at the counter"
              loading="lazy"
              className="relative h-[420px] w-full rounded-2xl object-cover sm:h-[520px]"
            />
            <figure className="absolute -bottom-8 -right-3 w-40 rotate-2 overflow-hidden rounded-xl border-4 border-cream shadow-2xl sm:-right-8 sm:w-56">
              <img
                src="/images/sake.jpg"
                alt="Sake poured at the bar"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </figure>
          </Reveal>

          <div>
            <SectionHeading
              tone="light"
              eyebrow="Who we are"
              jp="私たち"
              title="A neighbourhood room with a Tokyo heartbeat."
            />
            <Reveal delay={0.1}>
              <p className="mt-6 text-[15px] leading-relaxed text-ink/70 sm:text-base">
                Sozo Izakaya sits in Aram Nagar, Versova — a Japanese
                restaurant shaped around the izakaya tradition: a casual,
                glowing room where the evening starts with a drink and
                unfolds plate by plate.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-ink/70 sm:text-base">
                The kitchen moves between the sushi counter, the ramen pot
                and the grill — small plates meant for the middle of the
                table, bowls built for one, and a drinks list that runs from
                sake and umeshu to yuzu coolers and matcha.
              </p>
              <blockquote className="mt-8 border-l-2 border-aka-deep pl-5 font-display text-xl italic leading-relaxed text-ink/80">
                The izakaya rule we cook by: food tastes better when nobody's
                watching the clock.
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ------------------------- The word itself ---------------------- */}
      <section className="border-t border-line/60 bg-ink py-24 lg:py-32">
        <div className="container-x">
          <SectionHeading
            align="center"
            eyebrow="The word itself"
            jp="居酒屋"
            title="What is an izakaya?"
            copy="The word is often read as 'a place to sit and drink' — Japan's beloved answer to the neighbourhood pub, where food and drink arrive together and nobody is in a hurry."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-3">
            {KANJI.map((k, i) => (
              <Reveal key={k.char} delay={i * 0.08}>
                <article className="h-full rounded-2xl border border-line/70 bg-smoke/60 p-8 text-center transition-colors duration-500 hover:border-aka/50">
                  <p aria-hidden="true" className="font-jp text-7xl leading-none text-aka">
                    {k.char}
                  </p>
                  <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.3em] text-gold">
                    {k.reading}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-cream">
                    {k.meaning}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/60">{k.note}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 text-center" delay={0.1}>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-taupe">
              In Japan, izakaya are where colleagues decompress and friends
              gather until the last train. We borrow the spirit, not the
              rulebook — and we've brought it to a Versova lane.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ----------------------------- Pillars -------------------------- */}
      <section className="bg-cream py-24 text-ink lg:py-32">
        <div className="container-x">
          <SectionHeading
            tone="light"
            align="center"
            eyebrow="How we serve"
            jp="流れ"
            title="Share. Sip. Savour."
            copy="Three small rituals that shape every evening at Sozo."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-3">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <article className="h-full rounded-2xl border border-ink/10 bg-sand/50 p-8 transition-colors duration-500 hover:border-aka/50">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-aka text-cream">
                    <p.icon size={20} aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 font-display text-3xl font-semibold">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/60">{p.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------- An evening here ---------------------- */}
      <section className="border-t border-line/60 bg-ink py-24 lg:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="An evening at Sozo"
            jp="夜"
            title="How the night unfolds."
            copy="There's no script — but most evenings at an izakaya find the same easy rhythm."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.07}>
                <article className="group h-full overflow-hidden rounded-2xl border border-line/70 bg-smoke/60 transition-colors duration-500 hover:border-aka/50">
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={s.img}
                      alt={s.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-[1.07]"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-smoke to-transparent"
                    />
                  </div>
                  <div className="p-6">
                    <p className="font-jp text-xs tracking-[0.3em] text-aka">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-semibold text-cream">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-cream/60">{s.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------ CTA ----------------------------- */}
      <section className="relative overflow-hidden bg-aka py-20 text-cream lg:py-24">
        <EnsoMark className="absolute -left-12 -top-12 h-56 w-56 text-cream/15" />
        <EnsoMark className="absolute -bottom-16 -right-12 h-64 w-64 text-cream/10" />
        <div className="container-x relative text-center">
          <Reveal>
            <p className="eyebrow flex items-center justify-center gap-3 text-cream/85">
              <span aria-hidden="true" className="inline-block h-px w-8 bg-current" />
              Kanpai — 乾杯
            </p>
            <h2 className="mx-auto mt-5 max-w-2xl font-display text-4xl font-medium leading-[1.05] sm:text-5xl lg:text-6xl">
              Come hungry. Leave slowly.
            </h2>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Button to="/reservations" variant="cream" size="lg">
                Reserve a Table
              </Button>
              <Button to="/menu" variant="outline" size="lg">
                Explore Menu
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
