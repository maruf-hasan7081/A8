import { FeaturedBooks } from "@/components/home/featured-books";
import { GenreCards } from "@/components/home/genre-cards";
import { Hero } from "@/components/home/hero";
import { Marquee } from "@/components/home/marquee";
import { ReadingSteps } from "@/components/home/reading-steps";
import { Testimonials } from "@/components/home/testimonials";
import { getFeaturedBooks } from "@/lib/books";

export default function HomePage() {
  const featuredBooks = getFeaturedBooks(4);

  return (
    <>
      <Hero />
      <Marquee />
      <FeaturedBooks books={featuredBooks} />
      <GenreCards />
      <Testimonials />
      <ReadingSteps />
    </>
  );
}
