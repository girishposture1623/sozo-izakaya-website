import { Link } from "react-router-dom";
import { ArrowUpRight, Flame } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";
import Reveal from "../components/Reveal";

type Tile = {
  name: string;
  jp: string;
  price: number;
  img: string;
  alt: string;
  cat: string;
  big?: boolean;
};

const TILES: Tile[] = [
  {
    name: "Tonkotsu Ramen",
    jp: "豚骨拉麺",
    price: 720,
    img: "/images/ramen-bowl.jpg",
    alt: "Tonkotsu ramen with chashu, egg and nori",
    cat: "ramen",
    big: true,
  },
  {
    name: "Tuna Sashimi",
    jp: "鮪刺身",
    price: 680,
    img: "/images/sashimi.jpg",
    alt: "Slices of fresh sashimi on a black plate",
    cat: "sushi",
  },
  {
    name: "Yakitori Skewers",
    jp: "焼鳥",
    price: 480,
    img: "/images/yakitori.jpg",
    alt: "Yakitori skewers grilling over charcoal",
    cat: "starters",
  },
  {
    name: "Chicken Gyoza",
    jp: "鶏餃子",
    price: 420,
    img: "/images/gyoza.jpg",
    alt: "Pan-seared chicken gyoza on a dark plate",
    cat: "dimsum",
  },
  {
    name: "Matcha Tiramisu",
    jp: "抹茶ティラミス",
    price: 420,
    img: "/images/dessert.jpg",
    alt: "Matcha tiramisu dusted with green-tea powder",
    cat: "desserts",
  },
];

function SignatureTile({ tile }: { tile: Tile }) {
  return (
    <Link
      to={`/menu?cat=${tile.cat}`}
      className={`group relative block overflow-hidden rounded-2xl ${
        tile.big
          ? "h-80 sm:col-span-2 sm:h-96 lg:row-span-2 lg:h-auto"
          : "h-60 lg:h-auto"
      }`}
      aria-label={`${tile.name} — view the ${tile.cat} category on the menu`}
    >
      <img
        src={tile.img}
        alt={tile.alt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-[1.07]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/25 to-transparent"
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-2xl border border-transparent transition-colors duration-500 group-hover:border-aka/60"
      />
      <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-aka px-3 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-cream">
        <Flame size={11} aria-hidden="true" />
        Signature
      </span>
      <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
        <span>
          <span className="block font-jp text-[11px] tracking-[0.2em] text-gold">
            {tile.jp}
          </span>
          <span
            className={`mt-1 block font-display font-semibold text-cream ${
              tile.big ? "text-3xl sm:text-4xl" : "text-2xl"
            }`}
          >
            {tile.name}
          </span>
        </span>
        <span className="whitespace-nowrap font-display text-lg font-semibold text-gold">
          ₹{tile.price}
        </span>
      </span>
    </Link>
  );
}

export default function Signature() {
  return (
    <section className="bg-ink py-24 lg:py-32">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            eyebrow="Chef's signatures"
            jp="おすすめ"
            title="Plates people cross the city for."
            copy="A shortlist of favourites from the kitchen — sample dishes from our demo menu."
          />
          <Reveal delay={0.1}>
            <Button to="/menu" variant="outline" icon={<ArrowUpRight size={14} />}>
              Full Menu
            </Button>
          </Reveal>
        </div>

        <Reveal className="mt-12" delay={0.1}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:[grid-auto-rows:236px]">
            {TILES.map((t) => (
              <SignatureTile key={t.name} tile={t} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
