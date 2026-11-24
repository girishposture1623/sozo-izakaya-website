/**
 * REVIEW DATA — the 4.2 / 473 Google rating figures are the supplied
 * restaurant facts. The individual review cards below are SAMPLE
 * PLACEHOLDERS written for layout demonstration, clearly labelled as
 * such in the UI — they are not verified customer reviews.
 */

export type Review = {
  id: string;
  name: string;
  area: string;
  rating: number;
  text: string;
};

export const REVIEWS_DISCLAIMER =
  "The overall 4.2 rating and 473 review count reflect the restaurant's supplied Google listing. The individual review cards below are sample placeholders written for demonstration — they are not verified customer reviews.";

export const REVIEWS: Review[] = [
  {
    id: "r1",
    name: "Aarav Mehta",
    area: "Andheri West",
    rating: 5,
    text: "The ramen broth was deeply comforting and the counter seating makes it feel like a little Tokyo hideout. Warm, quick service too.",
  },
  {
    id: "r2",
    name: "Priya Nair",
    area: "Versova",
    rating: 4,
    text: "Loved the gyoza and the lantern-lit corners. It does get busy on weekends, so plan your evening ahead.",
  },
  {
    id: "r3",
    name: "Karan Shah",
    area: "Juhu",
    rating: 5,
    text: "Great spot for small plates and sake with friends. The yakitori had a proper smoky char — we ordered a second round.",
  },
  {
    id: "r4",
    name: "Sana Sheikh",
    area: "Bandra West",
    rating: 4,
    text: "Cosy, moody and vegetarian-friendly. The nasu dengaku and veggie miso ramen were the standouts for our table.",
  },
  {
    id: "r5",
    name: "Rohan Iyer",
    area: "Lokhandwala",
    rating: 4,
    text: "Solid izakaya vibes and generous pours. Parking in the lanes is tricky — take a rickshaw and thank yourself later.",
  },
  {
    id: "r6",
    name: "Ananya Rao",
    area: "Versova",
    rating: 5,
    text: "Beautiful plating, a mellow playlist and a matcha tiramisu I would happily cross the city for again.",
  },
];
