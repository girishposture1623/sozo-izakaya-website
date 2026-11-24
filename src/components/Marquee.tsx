import { EnsoMark } from "./Logo";

const ITEMS = [
  "Sushi 寿司",
  "Ramen 拉麺",
  "Yakitori 焼鳥",
  "Gyoza 餃子",
  "Sake 日本酒",
  "Matcha 抹茶",
  "Donburi 丼物",
  "Izakaya 居酒屋",
];

/** Infinite scrolling marquee strip between homepage sections. */
export default function Marquee() {
  const row = [...ITEMS, ...ITEMS];

  return (
    <div
      aria-hidden="true"
      className="overflow-hidden border-y border-line/60 bg-coal py-5"
    >
      <div className="flex w-max animate-marquee items-center">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-12 pr-12">
            <span className="whitespace-nowrap text-xs font-bold uppercase tracking-[0.45em] text-taupe/80">
              {t}
            </span>
            <EnsoMark className="h-3.5 w-3.5 text-aka/70" />
          </span>
        ))}
      </div>
    </div>
  );
}
