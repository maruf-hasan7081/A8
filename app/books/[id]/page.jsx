import Image from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { ArrowLeft, BookOpen, Layers3, Tag, UserRound } from "lucide-react";
import { BorrowButton } from "@/components/books/borrow-button";
import { getBookById } from "@/lib/books";
import { getCurrentSession } from "@/lib/session";
export async function generateMetadata({ params }) {
    const { id } = await params;
    const book = getBookById(id);
    return {
        title: book?.title ?? "Book Details",
        description: book?.description,
    };
}
export const dynamic = "force-dynamic";
export default async function BookDetailsPage({ params }) {
    const { id } = await params;
    const session = await getCurrentSession();
    if (!session) {
        redirect(`/login?callbackUrl=${encodeURIComponent(`/books/${id}`)}`);
    }
    const book = getBookById(id);
    if (!book)
        notFound();
    return (<div className="page-shell py-12 sm:py-16">
      <Link href="/books" className="inline-flex items-center gap-2 text-sm font-bold text-[#173f35] hover:text-[#9a650f]">
        <ArrowLeft className="size-4" aria-hidden="true"/>
        Back to all books
      </Link>

      <article className="mt-7 grid overflow-hidden rounded-[2.25rem] border border-[#173f35]/10 bg-white shadow-xl lg:grid-cols-[0.8fr_1.2fr]">
        <div className="paper-grid grid min-h-[480px] place-items-center bg-[#ece4d3] p-8 sm:p-12">
          <Image src={book.image_url} alt={`Cover of ${book.title}`} width={480} height={700} priority className="book-shadow max-h-[560px] w-auto rounded-lg object-cover"/>
        </div>

        <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
          <div className="flex flex-wrap gap-2">
            <span className="badge h-8 border-0 bg-[#173f35] px-3 font-bold text-white">
              <Tag className="mr-1 size-3.5" aria-hidden="true"/>
              {book.category}
            </span>
            <span className="badge h-8 border-[#d99b3d]/30 bg-[#fff4d9] px-3 font-bold text-[#8a5a10]">
              <Layers3 className="mr-1 size-3.5" aria-hidden="true"/>
              {book.available_quantity} copies left
            </span>
          </div>

          <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-[#173f35] sm:text-5xl">
            {book.title}
          </h1>
          <p className="mt-4 inline-flex items-center gap-2 text-lg font-semibold text-slate-600">
            <UserRound className="size-5 text-[#9a650f]" aria-hidden="true"/>
            {book.author}
          </p>

          <div className="mt-8 border-y border-[#173f35]/10 py-7">
            <h2 className="flex items-center gap-2 font-display text-xl font-bold text-[#173f35]">
              <BookOpen className="size-5 text-[#9a650f]" aria-hidden="true"/>
              About this book
            </h2>
            <p className="mt-3 text-base leading-8 text-slate-600">{book.description}</p>
          </div>

          <div className="mt-8">
            <BorrowButton title={book.title} availableQuantity={book.available_quantity}/>
            <p className="mt-3 text-sm text-slate-500">
              Signed in as <span className="font-semibold">{session.user.email}</span>
            </p>
          </div>
        </div>
      </article>
    </div>);
}
