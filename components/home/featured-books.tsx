import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { BookCard } from "@/components/books/book-card";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Book } from "@/types/book";

export function FeaturedBooks({ books }: { books: Book[] }) {
  return (
    <section className="page-shell py-20">
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <SectionHeading
          eyebrow="Featured collection"
          title="Books readers reach for first"
          description="Start with four standout titles selected from our digital shelves."
        />
        <Link
          href="/books"
          className="inline-flex items-center gap-2 font-bold text-[#173f35] hover:text-[#9a650f]"
        >
          See all books
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
}
