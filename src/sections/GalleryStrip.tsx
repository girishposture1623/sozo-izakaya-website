import { Link } from "react-router-dom";
import { ArrowUpRight, Plus } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";
import Reveal from "../components/Reveal";

const STRIP: { src: string; alt: string; tall?: boolean }[] = [
  { src: "/images/sushi.jpg", alt: "Assorted sushi rolls on dark slate" },
  { src: "/images/ramen-bowl.jpg", alt: "Tonkotsu-style ramen with chashu and egg" },
  { src: "/images/interior.jpg", alt: "Izakaya dining room with wooden counter", tall: true },
  { src: "/images/yakitori.jpg", alt: "Yakitori skewers over glowing charcoal" },
  { src: "/images/sake.jpg", alt: "Sake poured into a small ceramic cup", tall: true },
  { src: "/images/dessert.jpg", alt: "Matcha dessert on a dark plate" },
  { src: "/images/lanterns.jpg", alt: "Red and white izakaya lanterns" },
  { src: "/images/tempura.jpg", alt: "Golden prawn tempura" },
];

export default function GalleryStrip() {
  return (
    <section className="bg-ink py-24 lg:py-32">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            eyebrow="The gallery"
            jp="写真"
            title="Shot in low light,
 served warm."
            copy="A look at the plates, the room and the pours — demo photography from the gallery."
          />
          <Reveal delay={0.1}>
            <Button to="/gallery" variant="outline" icon={<ArrowUpRight size={14} />}>
              View Gallery
            </Button>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 [grid-auto-rows:150px] sm:[grid-auto-rows:190px] md:grid-cols-4 lg:[grid-auto-rows:228px]">
          {STRIP.map((g, i) => (
            <Reveal
              key={g.src}
              delay={Math.min(i * 0.05, 0.35)}
              className={g.tall ? "row-span-2" : ""}
            >
              <Link
                to="/gallery"
                className="group relative block h-full w-full overflow-hidden rounded-xl"
                aria-label="Open the photo gallery"
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-[1.07]"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/35"
                />
                <span
                  aria-hidden="true"
                  className="absolute left-1/2 top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 scale-75 place-items-center rounded-full bg-aka text-cream opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100"
                >
                  <Plus size={18} />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
