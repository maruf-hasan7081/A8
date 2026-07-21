import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Layers3 } from "lucide-react";

import type { Book } from "@/types/book";

export function BookCard({ book }: { book: Book }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[#173f35]/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden bg-[#ece4d3] p-6">
        <Image
          src={book.image_url}
          alt={`Cover of ${book.title}`}
          width={360}
          height={520}
          className="book-shadow mx-auto h-full w-auto rounded-md object-cover transition duration-500 group-hover:scale-105 group-hover:-rotate-1"
        />
        <span className="absolute left-4 top-4 rounded-full bg-[#173f35] px-3 py-1 text-xs font-bold text-white">
          {book.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl font-bold leading-tight text-[#173f35]">
          {book.title}
        </h3>
        <p className="mt-2 text-sm text-slate-500">by {book.author}</p>
        <div className="mt-4 flex items-center gap-4 text-xs font-semibold text-slate-500">
          <span className="inline-flex items-center gap-1.5">
            <Layers3 className="size-4 text-[#9a650f]" aria-hidden="true" />
            {book.available_quantity} copies
          </span>
          <span className="inline-flex items-center gap-1.5">
            <BookOpen className="size-4 text-[#9a650f]" aria-hidden="true" />
            Available
          </span>
        </div>
        <Link
          href={`/books/${book.id}`}
          className="btn mt-5 w-full border-[#173f35]/15 bg-[#173f35] text-white hover:bg-[#24594b]"
        >
          View Details
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
