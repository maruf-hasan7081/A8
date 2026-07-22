import Link from "next/link";
import { ArrowRight, BookMarked, Sparkles } from "lucide-react";
export function Hero() {
    return (<section className="paper-grid overflow-hidden border-b border-[#173f35]/10">
      <div className="page-shell grid min-h-[620px] items-center gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d99b3d]/30 bg-[#fff8e8] px-4 py-2 text-sm font-bold text-[#8a5a10]">
            <Sparkles className="size-4" aria-hidden="true"/>
            Your digital reading room
          </div>
          <h1 className="font-display text-balance text-5xl font-bold leading-[1.02] tracking-tight text-[#173f35] sm:text-6xl lg:text-7xl">
            Find Your Next Read
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Discover handpicked stories, practical technology guides, and fascinating
            science books. Your next great idea is only a page away.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/books" className="btn h-13 border-0 bg-[#173f35] px-6 text-white shadow-lg hover:bg-[#24594b]">
              Browse Now
              <ArrowRight className="size-5" aria-hidden="true"/>
            </Link>
            <Link href="/register" className="btn h-13 border-[#173f35]/20 bg-white px-6 text-[#173f35] hover:border-[#173f35] hover:bg-[#173f35]/5">
              Join the Library
            </Link>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
            {[
            ["12+", "Curated books"],
            ["3", "Book categories"],
            ["24/7", "Digital access"],
        ].map(([value, label]) => (<div key={label} className="rounded-2xl border border-[#173f35]/10 bg-white/70 p-4 backdrop-blur">
                <p className="font-display text-2xl font-bold text-[#173f35]">{value}</p>
                <p className="mt-1 text-xs font-semibold text-slate-500 sm:text-sm">{label}</p>
              </div>))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute -left-6 top-10 size-28 rounded-full bg-[#d99b3d]/25 blur-3xl"/>
          <div className="absolute -right-6 bottom-10 size-36 rounded-full bg-[#173f35]/20 blur-3xl"/>
          <div className="relative rounded-[2rem] border border-[#173f35]/10 bg-[#fffaf0] p-6 shadow-2xl sm:p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9a650f]">
                  Reader&apos;s pick
                </p>
                <h2 className="mt-2 font-display text-3xl font-bold text-[#173f35]">
                  A universe inside every cover
                </h2>
              </div>
              <div className="grid size-14 place-items-center rounded-2xl bg-[#173f35] text-white">
                <BookMarked className="size-7" aria-hidden="true"/>
              </div>
            </div>

            <div className="mt-8 flex items-end justify-center gap-3 rounded-3xl bg-[#173f35] px-5 pb-0 pt-8">
              <div className="h-48 w-20 -rotate-6 rounded-t-lg bg-[#d99b3d] p-3 shadow-lg">
                <span className="block font-display text-sm font-bold text-[#173f35]">STORY</span>
              </div>
              <div className="h-60 w-24 rounded-t-lg bg-[#f5ead0] p-3 shadow-xl">
                <span className="block font-display text-sm font-bold text-[#173f35]">SCIENCE</span>
              </div>
              <div className="h-52 w-20 rotate-6 rounded-t-lg bg-[#89aa9f] p-3 shadow-lg">
                <span className="block font-display text-sm font-bold text-[#173f35]">TECH</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);
}
