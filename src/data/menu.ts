/**
 * DEMO MENU DATA — sample dishes and INR prices created for illustration.
 * This is NOT the official Sozo Izakaya menu; real dishes, availability
 * and pricing may differ. Every category is illustrated with licensed
 * stock or AI-generated demo photography.
 */

export type Category = {
  id: string;
  label: string;
  jp: string;
  blurb: string;
  image: string;
};

export type Dish = {
  id: string;
  name: string;
  jp: string;
  desc: string;
  /** Sample price in INR */
  price: number;
  category: string;
  veg: boolean;
  popular?: boolean;
  spicy?: boolean;
  /** Optional per-dish image override; falls back to the category image. */
  image?: string;
};

export const CATEGORIES: Category[] = [
  {
    id: "sushi",
    label: "Sushi & Sashimi",
    jp: "寿司・刺身",
    blurb: "Cut clean, rolled to order",
    image: "/images/sushi.jpg",
  },
  {
    id: "ramen",
    label: "Ramen & Noodles",
    jp: "拉麺",
    blurb: "Broths worth slowing down for",
    image: "/images/ramen-bowl.jpg",
  },
  {
    id: "dimsum",
    label: "Dim Sum & Gyoza",
    jp: "点心",
    blurb: "Steamed, seared, dipped",
    image: "/images/dimsum.jpg",
  },
  {
    id: "starters",
    label: "Japanese Starters",
    jp: "前菜",
    blurb: "First rounds for the table",
    image: "/images/yakitori.jpg",
  },
  {
    id: "rice",
    label: "Rice Bowls",
    jp: "丼物",
    blurb: "One-bowl comforts",
    image: "/images/donburi.jpg",
  },
  {
    id: "vegetarian",
    label: "Vegetarian Dishes",
    jp: "菜食",
    blurb: "Plant-based, full-flavoured",
    image: "/images/veg.jpg",
  },
  {
    id: "desserts",
    label: "Desserts",
    jp: "甘味",
    blurb: "A soft landing",
    image: "/images/dessert.jpg",
  },
  {
    id: "beverages",
    label: "Beverages",
    jp: "飲物",
    blurb: "Sake, tea & highballs",
    image: "/images/sake.jpg",
  },
];

export const DISHES: Dish[] = [
  /* ------------------------- Sushi & Sashimi ------------------------ */
  {
    id: "salmon-nigiri",
    name: "Salmon Nigiri (2 pc)",
    jp: "サーモン握り",
    desc: "Cured salmon pressed over seasoned sushi rice, brushed with nikiri soy.",
    price: 420,
    category: "sushi",
    veg: false,
    image: "/images/sashimi.jpg",
  },
  {
    id: "tuna-sashimi",
    name: "Tuna Sashimi (5 pc)",
    jp: "鮪刺身",
    desc: "Clean-cut slices of tuna with fresh wasabi, shiso and aged soy.",
    price: 680,
    category: "sushi",
    veg: false,
    popular: true,
    image: "/images/sashimi.jpg",
  },
  {
    id: "california-roll",
    name: "California Roll (8 pc)",
    jp: "カリフォルニア巻",
    desc: "Crab stick, avocado and cucumber rolled in toasted sesame rice.",
    price: 560,
    category: "sushi",
    veg: false,
  },
  {
    id: "spicy-tuna-maki",
    name: "Spicy Tuna Maki",
    jp: "辛口鮪巻",
    desc: "Minced tuna folded with chilli mayo and spring onion.",
    price: 640,
    category: "sushi",
    veg: false,
    spicy: true,
  },
  {
    id: "rainbow-roll",
    name: "Rainbow Roll",
    jp: "虹巻",
    desc: "California roll crowned with salmon, tuna and avocado slices.",
    price: 780,
    category: "sushi",
    veg: false,
    popular: true,
  },
  {
    id: "garden-veggie-roll",
    name: "Garden Veggie Roll",
    jp: "野菜巻",
    desc: "Avocado, cucumber, pickled radish and shiso. Fully plant-based.",
    price: 420,
    category: "sushi",
    veg: true,
    image: "/images/veg.jpg",
  },

  /* ------------------------- Ramen & Noodles ------------------------ */
  {
    id: "tonkotsu-ramen",
    name: "Tonkotsu Ramen",
    jp: "豚骨拉麺",
    desc: "Rich, creamy pork-style broth, chashu, ajitama egg, nori and black garlic oil.",
    price: 720,
    category: "ramen",
    veg: false,
    popular: true,
  },
  {
    id: "shoyu-chicken-ramen",
    name: "Shoyu Chicken Ramen",
    jp: "醤油拉麺",
    desc: "Clear soy-seasoned broth, grilled chicken, bamboo shoots and spring onion.",
    price: 640,
    category: "ramen",
    veg: false,
    image: "/images/ramen.jpg",
  },
  {
    id: "miso-ramen",
    name: "Miso Ramen",
    jp: "味噌拉麺",
    desc: "Miso-tare broth with buttered corn, minced chicken and toasted sesame.",
    price: 620,
    category: "ramen",
    veg: false,
    image: "/images/ramen.jpg",
  },
  {
    id: "tan-tan-ramen",
    name: "Spicy Tan Tan Ramen",
    jp: "担々麺",
    desc: "Sesame-chilli broth, spiced mince, pak choy and a slick of rayu oil.",
    price: 740,
    category: "ramen",
    veg: false,
    spicy: true,
    popular: true,
  },
  {
    id: "veggie-miso-ramen",
    name: "Veggie Miso Ramen",
    jp: "野菜味噌拉麺",
    desc: "Miso broth, roast mushrooms, sweetcorn and nori. Vegetarian.",
    price: 560,
    category: "ramen",
    veg: true,
    image: "/images/ramen.jpg",
  },
  {
    id: "zaru-soba",
    name: "Cold Zaru Soba",
    jp: "ざる蕎麦",
    desc: "Chilled buckwheat noodles with a soy-dashi dipping sauce and wasabi.",
    price: 480,
    category: "ramen",
    veg: true,
    image: "/images/noodles.jpg",
  },

  /* -------------------------- Dim Sum & Gyoza ----------------------- */
  {
    id: "chicken-gyoza",
    name: "Chicken Gyoza (6 pc)",
    jp: "鶏餃子",
    desc: "Pan-seared dumplings with a crisp skirt, ponzu and chilli-sesame dip.",
    price: 420,
    category: "dimsum",
    veg: false,
    popular: true,
    image: "/images/gyoza.jpg",
  },
  {
    id: "prawn-gyoza",
    name: "Prawn Gyoza",
    jp: "海老餃子",
    desc: "Juicy prawn filling, lacy crisp base, yuzu kosho on the side.",
    price: 520,
    category: "dimsum",
    veg: false,
    image: "/images/gyoza.jpg",
  },
  {
    id: "veggie-gyoza",
    name: "Veggie Gyoza",
    jp: "野菜餃子",
    desc: "Cabbage, shiitake and chive dumplings, steamed then seared.",
    price: 380,
    category: "dimsum",
    veg: true,
  },
  {
    id: "pork-shumai",
    name: "Pork Shumai (4 pc)",
    jp: "豚焼売",
    desc: "Open-topped steamed dumplings with ginger and scallion.",
    price: 540,
    category: "dimsum",
    veg: false,
  },
  {
    id: "chilli-oil-wontons",
    name: "Chilli Oil Wontons",
    jp: "辣油雲呑",
    desc: "Silky wontons dressed in house chilli oil, sesame and black vinegar.",
    price: 460,
    category: "dimsum",
    veg: false,
    spicy: true,
  },
  {
    id: "crystal-veg-dumplings",
    name: "Crystal Veg Dumplings",
    jp: "翡翠餃子",
    desc: "Translucent wrappers, glass noodle, water chestnut and bamboo shoot.",
    price: 420,
    category: "dimsum",
    veg: true,
  },

  /* ------------------------ Japanese Starters ----------------------- */
  {
    id: "edamame",
    name: "Edamame, Sea Salt",
    jp: "枝豆",
    desc: "Steamed young soybeans showered with flaked sea salt.",
    price: 320,
    category: "starters",
    veg: true,
    image: "/images/veg.jpg",
  },
  {
    id: "agedashi-tofu",
    name: "Agedashi Tofu",
    jp: "揚げ出し豆腐",
    desc: "Crisp silken tofu in warm dashi with grated daikon and ginger.",
    price: 380,
    category: "starters",
    veg: true,
    popular: true,
    image: "/images/veg.jpg",
  },
  {
    id: "yakitori-skewers",
    name: "Yakitori Skewers (3 pc)",
    jp: "焼鳥",
    desc: "Charcoal-grilled chicken skewers glazed with sweet tare.",
    price: 480,
    category: "starters",
    veg: false,
    popular: true,
    image: "/images/yakitori.jpg",
  },
  {
    id: "chicken-karaage",
    name: "Chicken Karaage",
    jp: "唐揚げ",
    desc: "Soy-ginger marinated fried chicken with yuzu mayo and lemon.",
    price: 460,
    category: "starters",
    veg: false,
    popular: true,
    image: "/images/yakitori.jpg",
  },
  {
    id: "ebi-tempura",
    name: "Ebi Tempura",
    jp: "海老天",
    desc: "Prawns in feather-light tempura with tentsuyu dipping sauce.",
    price: 640,
    category: "starters",
    veg: false,
    image: "/images/tempura.jpg",
  },
  {
    id: "takoyaki",
    name: "Takoyaki (6 pc)",
    jp: "蛸焼",
    desc: "Osaka-style octopus balls, kewpie mayo, bonito flakes and aonori.",
    price: 520,
    category: "starters",
    veg: false,
    image: "/images/gyoza.jpg",
  },

  /* ---------------------------- Rice Bowls -------------------------- */
  {
    id: "chicken-teriyaki-don",
    name: "Chicken Teriyaki Don",
    jp: "照焼丼",
    desc: "Lacquered teriyaki chicken over steamed rice with sesame and pickles.",
    price: 560,
    category: "rice",
    veg: false,
  },
  {
    id: "katsu-curry-rice",
    name: "Katsu Curry Rice",
    jp: "カツカレー",
    desc: "Crisp chicken katsu with a mild, sweet Japanese curry and rice.",
    price: 620,
    category: "rice",
    veg: false,
    popular: true,
  },
  {
    id: "gyudon",
    name: "Gyudon Beef Bowl",
    jp: "牛丼",
    desc: "Thin-sliced beef and onions simmered in sweet soy over rice.",
    price: 680,
    category: "rice",
    veg: false,
  },
  {
    id: "salmon-poke-don",
    name: "Salmon Poké Don",
    jp: "サーモン丼",
    desc: "Marinated salmon, edamame, cucumber and avocado over sushi rice.",
    price: 720,
    category: "rice",
    veg: false,
    image: "/images/sashimi.jpg",
  },
  {
    id: "tofu-katsu-don",
    name: "Tofu Katsu Don",
    jp: "豆腐カツ丼",
    desc: "Crisp tofu cutlet with an onion-dashi glaze over rice. Vegetarian.",
    price: 480,
    category: "rice",
    veg: true,
    image: "/images/veg.jpg",
  },
  {
    id: "veggie-chahan",
    name: "Veggie Chahan",
    jp: "野菜炒飯",
    desc: "Wok-tossed Japanese fried rice with burnt garlic and scallion.",
    price: 440,
    category: "rice",
    veg: true,
  },

  /* ------------------------- Vegetarian Dishes ---------------------- */
  {
    id: "yasai-itame",
    name: "Yasai Itame",
    jp: "野菜炒め",
    desc: "Stir-fried market vegetables in a garlic-soy glaze.",
    price: 420,
    category: "vegetarian",
    veg: true,
  },
  {
    id: "nasu-dengaku",
    name: "Nasu Dengaku",
    jp: "茄子田楽",
    desc: "Miso-glazed aubergine finished with toasted sesame.",
    price: 480,
    category: "vegetarian",
    veg: true,
    popular: true,
  },
  {
    id: "tofu-steak",
    name: "Tofu Steak Teriyaki",
    jp: "豆腐ステーキ",
    desc: "Seared tofu steak with teriyaki glaze and charred greens.",
    price: 460,
    category: "vegetarian",
    veg: true,
  },
  {
    id: "vegetable-tempura",
    name: "Vegetable Tempura",
    jp: "野菜天",
    desc: "Seasonal vegetables in a crisp, lacy tempura batter.",
    price: 440,
    category: "vegetarian",
    veg: true,
    image: "/images/tempura.jpg",
  },
  {
    id: "inari-sushi",
    name: "Inari Sushi (4 pc)",
    jp: "稲荷寿司",
    desc: "Sweet simmered tofu pouches filled with sushi rice.",
    price: 380,
    category: "vegetarian",
    veg: true,
    image: "/images/sushi.jpg",
  },
  {
    id: "avocado-cucumber-maki",
    name: "Avocado Cucumber Maki",
    jp: "アボカド巻",
    desc: "Simple, clean and rolled to order with toasted nori.",
    price: 400,
    category: "vegetarian",
    veg: true,
  },

  /* ------------------------------ Desserts -------------------------- */
  {
    id: "matcha-tiramisu",
    name: "Matcha Tiramisu",
    jp: "抹茶ティラミス",
    desc: "Green-tea mascarpone layered over matcha-soaked sponge.",
    price: 420,
    category: "desserts",
    veg: true,
    popular: true,
  },
  {
    id: "mochi-ice-cream",
    name: "Mochi Ice Cream (3 pc)",
    jp: "餅アイス",
    desc: "Chewy rice cakes wrapped around rotating ice-cream flavours.",
    price: 380,
    category: "desserts",
    veg: true,
  },
  {
    id: "dorayaki",
    name: "Dorayaki, Red Bean",
    jp: "どら焼き",
    desc: "Fluffy pancakes sandwiching sweet azuki bean paste.",
    price: 340,
    category: "desserts",
    veg: true,
  },
  {
    id: "sesame-panna-cotta",
    name: "Black Sesame Panna Cotta",
    jp: "黒胡麻プリン",
    desc: "Nutty sesame set cream with kuromitsu black-sugar syrup.",
    price: 440,
    category: "desserts",
    veg: true,
  },
  {
    id: "yuzu-cheesecake",
    name: "Yuzu Cheesecake",
    jp: "柚子チーズケーキ",
    desc: "Bright citrus cheesecake on a crisp biscuit base.",
    price: 460,
    category: "desserts",
    veg: true,
    popular: true,
  },
  {
    id: "matcha-affogato",
    name: "Matcha Affogato",
    jp: "抹茶アフォガート",
    desc: "Vanilla ice cream drowned in a shot of hot whisked matcha.",
    price: 380,
    category: "desserts",
    veg: true,
    image: "/images/matcha.jpg",
  },

  /* ----------------------------- Beverages -------------------------- */
  {
    id: "hot-sake",
    name: "Hot Sake (180 ml)",
    jp: "熱燗",
    desc: "Classic junmai-style sake, gently warmed for the table.",
    price: 650,
    category: "beverages",
    veg: true,
    popular: true,
  },
  {
    id: "yuzu-cooler",
    name: "Yuzu Cooler",
    jp: "柚子クーラー",
    desc: "Yuzu, soda and mint over crushed ice. Non-alcoholic.",
    price: 320,
    category: "beverages",
    veg: true,
    image: "/images/cocktail.jpg",
  },
  {
    id: "matcha-latte",
    name: "Matcha Latte",
    jp: "抹茶ラテ",
    desc: "Stone-ground style matcha with milk — hot or iced.",
    price: 340,
    category: "beverages",
    veg: true,
    image: "/images/matcha.jpg",
  },
  {
    id: "green-tea-pot",
    name: "Japanese Green Tea (Pot)",
    jp: "緑茶",
    desc: "Sencha-style green tea, brewed at the table.",
    price: 260,
    category: "beverages",
    veg: true,
    image: "/images/matcha.jpg",
  },
  {
    id: "umeshu",
    name: "Umeshu Plum Wine",
    jp: "梅酒",
    desc: "Sweet-tart plum wine served on the rocks.",
    price: 550,
    category: "beverages",
    veg: true,
    image: "/images/cocktail.jpg",
  },
  {
    id: "ramune",
    name: "Ramune Soda",
    jp: "ラムネ",
    desc: "The classic marble-top Japanese soda, served ice cold.",
    price: 220,
    category: "beverages",
    veg: true,
    image: "/images/cocktail.jpg",
  },
];

/** Look up a category by id (falls back to the first category). */
export function categoryById(id: string): Category {
  return CATEGORIES.find((c) => c.id === id) ?? CATEGORIES[0];
}

/** Resolve the best image for a dish (dish override → category image). */
export function dishImage(dish: Dish): string {
  return dish.image ?? categoryById(dish.category).image;
}

/** Number of dishes inside a category. */
export function dishCount(categoryId: string): number {
  return DISHES.filter((d) => d.category === categoryId).length;
}
