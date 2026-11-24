/**
 * Central site configuration for Sozo Izakaya – Versova.
 * Address, phone, rating and review count are the supplied restaurant facts.
 */

export const SITE = {
  name: "Sozo Izakaya",
  place: "Versova, Mumbai",
  tagline: "Small plates. Big pours. Slow evenings.",
  addressLines: [
    "02, JP Road, Aram Nagar Part 2",
    "Jeet Nagar, Versova, Andheri West",
    "Mumbai, Maharashtra 400061, India",
  ],
  addressFull:
    "02, JP Rd, Aram Nagar Part 2, Jeet Nagar, Versova, Andheri West, Mumbai, Maharashtra 400061, India",
  phoneDisplay: "+91 98679 86481",
  phoneHref: "tel:+919867986481",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Sozo+Izakaya+Versova+Mumbai",
  mapsEmbed:
    "https://maps.google.com/maps?q=Sozo%20Izakaya%2C%20Versova%2C%20Mumbai&z=16&output=embed",
  rating: 4.2,
  reviewCount: 473,
  priceRange: "₹400 – ₹1,600",
  priceNote: "approx. per person",
  hours: [
    {
      days: "Monday – Friday",
      slots: ["12:00 PM – 3:30 PM", "6:30 PM – 11:30 PM"],
    },
    {
      days: "Saturday – Sunday",
      slots: ["12:00 PM – 4:00 PM", "6:00 PM – 12:00 AM"],
    },
  ],
  hoursNote:
    "Indicative timings only — please call the restaurant to verify current opening hours before you visit.",
  socials: [
    { label: "Instagram", href: "https://instagram.com/", icon: "instagram" },
    { label: "Facebook", href: "https://facebook.com/", icon: "facebook" },
    { label: "X (Twitter)", href: "https://x.com/", icon: "x" },
    { label: "YouTube", href: "https://youtube.com/", icon: "youtube" },
  ],
} as const;

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/menu", label: "Menu" },
  { to: "/gallery", label: "Gallery" },
  { to: "/reservations", label: "Reservations" },
  { to: "/contact", label: "Contact" },
] as const;

export const DEMO_NOTE =
  "Concept demo website — dishes, prices, timings and reviews shown here are illustrative samples, not verified restaurant data.";
