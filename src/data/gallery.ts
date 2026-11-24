/**
 * GALLERY DATA — licensed stock photography (Pexels) and AI-generated
 * demo imagery. Organised by category for the gallery filters.
 */

export type GalleryCategory = { id: string; label: string };

export const GALLERY_CATS: GalleryCategory[] = [
  { id: "all", label: "All" },
  { id: "sushi", label: "Sushi & Rolls" },
  { id: "ramen", label: "Ramen & Bowls" },
  { id: "grill", label: "Starters & Grill" },
  { id: "interior", label: "Interiors" },
  { id: "drinks", label: "Drinks & Bar" },
  { id: "dessert", label: "Desserts & Tea" },
];

export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  cat: string;
  tall?: boolean;
};

export const GALLERY: GalleryItem[] = [
  {
    src: "/images/sushi.jpg",
    alt: "Assorted sushi rolls arranged on dark slate",
    caption: "Assorted maki, rolled to order",
    cat: "sushi",
  },
  {
    src: "/images/sashimi.jpg",
    alt: "Fresh salmon sashimi on a black plate with wasabi",
    caption: "Salmon sashimi, cut clean",
    cat: "sushi",
  },
  {
    src: "/images/ramen-bowl.jpg",
    alt: "Tonkotsu-style ramen with chashu, egg and nori",
    caption: "A bowl worth slowing down for",
    cat: "ramen",
  },
  {
    src: "/images/noodles.jpg",
    alt: "Noodles lifted high with chopsticks",
    caption: "The noodle pull",
    cat: "ramen",
  },
  {
    src: "/images/donburi.jpg",
    alt: "Teriyaki chicken donburi rice bowl on a dark table",
    caption: "Teriyaki don, lacquered and warm",
    cat: "ramen",
  },
  {
    src: "/images/yakitori.jpg",
    alt: "Yakitori skewers grilling over glowing charcoal",
    caption: "Skewers over glowing charcoal",
    cat: "grill",
    tall: true,
  },
  {
    src: "/images/gyoza.jpg",
    alt: "Pan-seared gyoza on a dark ceramic plate",
    caption: "Gyoza, crisp-skirted",
    cat: "grill",
  },
  {
    src: "/images/tempura.jpg",
    alt: "Golden prawn tempura with dipping sauce",
    caption: "Ebi tempura, feather-light",
    cat: "grill",
  },
  {
    src: "/images/dimsum.jpg",
    alt: "Steamed dumplings in a bamboo basket",
    caption: "Steamed and served hot",
    cat: "grill",
  },
  {
    src: "/images/interior.jpg",
    alt: "Izakaya dining room with a wooden counter and warm lighting",
    caption: "The dining room",
    cat: "interior",
    tall: true,
  },
  {
    src: "/images/lanterns.jpg",
    alt: "Red and white izakaya lanterns glowing at night",
    caption: "Lantern light",
    cat: "interior",
  },
  {
    src: "/images/table.jpg",
    alt: "A candle-lit table set with ceramics and chopsticks",
    caption: "Set for the evening",
    cat: "interior",
  },
  {
    src: "/images/chef.jpg",
    alt: "A chef laying salmon over a sushi roll at the counter",
    caption: "From the counter",
    cat: "interior",
  },
  {
    src: "/images/bar.jpg",
    alt: "Backlit shelves of whisky bottles behind a dark bar",
    caption: "The back bar",
    cat: "drinks",
    tall: true,
  },
  {
    src: "/images/sake.jpg",
    alt: "Sake poured from a ceramic flask into a small cup",
    caption: "Sake, poured for the table",
    cat: "drinks",
  },
  {
    src: "/images/cocktail.jpg",
    alt: "A yuzu highball cocktail with clear ice on a dark bar",
    caption: "Yuzu highball",
    cat: "drinks",
  },
  {
    src: "/images/matcha.jpg",
    alt: "Matcha green tea whisked in a ceramic bowl",
    caption: "Whisked matcha",
    cat: "dessert",
  },
  {
    src: "/images/dessert.jpg",
    alt: "Matcha dessert dusted with green-tea powder on a dark plate",
    caption: "Matcha, in dessert form",
    cat: "dessert",
  },
  {
    src: "/images/veg.jpg",
    alt: "Vegetable sushi rolls with avocado on black slate",
    caption: "Garden rolls, plant-based",
    cat: "sushi",
  },
  {
    src: "/images/hero.jpg",
    alt: "A bowl of ramen with chopsticks in moody low light",
    caption: "Steam rising",
    cat: "ramen",
  },
];

export function galleryCatLabel(id: string): string {
  return GALLERY_CATS.find((c) => c.id === id)?.label ?? id;
}
