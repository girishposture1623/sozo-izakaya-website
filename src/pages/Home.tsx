import Hero from "../sections/Hero";
import Intro from "../sections/Intro";
import Marquee from "../components/Marquee";
import Signature from "../sections/Signature";
import Categories from "../sections/Categories";
import GalleryStrip from "../sections/GalleryStrip";
import Ambience from "../sections/Ambience";
import ReviewsSection from "../sections/ReviewsSection";
import LocationSection from "../sections/LocationSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Marquee />
      <Signature />
      <Categories />
      <GalleryStrip />
      <Ambience />
      <ReviewsSection />
      <LocationSection />
    </>
  );
}
