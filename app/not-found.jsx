import Link from "next/link";
import { ArrowLeft, BookX } from "lucide-react";
export default function NotFound() {
    return (<div className="page-shell grid min-h-[55vh] place-items-center py-16 text-center">
      <div className="max-w-lg">
        <div className="mx-auto grid size-20 place-items-center rounded-3xl bg-[#fff4d9] text-[#9a650f]">
          <BookX className="size-10" aria-hidden="true"/>
        </div>
        <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-[#9a650f]">404</p>
        <h1 className="mt-2 font-display text-4xl font-bold text-[#173f35]">This page is off the shelf</h1>
        <p className="mt-4 leading-7 text-slate-600">
          The book or page you requested could not be found.
        </p>
        <Link href="/books" className="btn mt-7 border-0 bg-[#173f35] text-white hover:bg-[#24594b]">
          <ArrowLeft className="size-4" aria-hidden="true"/>
          Browse all books
        </Link>
      </div>
    </div>);
}
