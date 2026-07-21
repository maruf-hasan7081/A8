"use client";
import { useEffect, useMemo, useState } from "react";
import { BookOpen, Search, SlidersHorizontal } from "lucide-react";
import { BookCard } from "@/components/books/book-card";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
const categories = ["All", "Story", "Tech", "Science"];
function normalizeCategory(category) {
    return categories.includes(category)
        ? category
        : "All";
}
export function BooksBrowser({ initialCategory }) {
    const [books, setBooks] = useState([]);
    const [query, setQuery] = useState("");
    const [category, setCategory] = useState(normalizeCategory(initialCategory));
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    useEffect(() => {
        const controller = new AbortController();
        async function loadBooks() {
            try {
                setLoading(true);
                const response = await fetch("/api/books", {
                    signal: controller.signal,
                    cache: "no-store",
                });
                if (!response.ok) {
                    throw new Error("Could not load the book collection.");
                }
                const data = (await response.json());
                setBooks(data);
                setError("");
            }
            catch (caughtError) {
                if (caughtError instanceof DOMException && caughtError.name === "AbortError") {
                    return;
                }
                setError(caughtError instanceof Error
                    ? caughtError.message
                    : "Could not load the book collection.");
            }
            finally {
                setLoading(false);
            }
        }
        void loadBooks();
        return () => controller.abort();
    }, []);
    const filteredBooks = useMemo(() => {
        const normalizedQuery = query.trim().toLowerCase();
        return books.filter((book) => {
            const matchesCategory = category === "All" || book.category === category;
            const matchesQuery = book.title.toLowerCase().includes(normalizedQuery);
            return matchesCategory && matchesQuery;
        });
    }, [books, category, query]);
    return (<div className="grid gap-8 lg:grid-cols-[250px_1fr]">
      <aside className="h-fit rounded-3xl border border-[#173f35]/10 bg-white p-5 shadow-sm lg:sticky lg:top-28">
        <div className="flex items-center gap-2 font-display text-xl font-bold text-[#173f35]">
          <SlidersHorizontal className="size-5" aria-hidden="true"/>
          Categories
        </div>
        <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-1">
          {categories.map((item) => {
            const count = item === "All"
                ? books.length
                : books.filter((book) => book.category === item).length;
            return (<button type="button" key={item} onClick={() => setCategory(item)} className={`flex items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-bold transition ${category === item
                    ? "bg-[#173f35] text-white"
                    : "bg-[#173f35]/5 text-slate-700 hover:bg-[#173f35]/10"}`}>
                <span>{item}</span>
                <span className={`rounded-full px-2 py-0.5 text-xs ${category === item ? "bg-white/15" : "bg-white"}`}>
                  {count}
                </span>
              </button>);
        })}
        </div>
      </aside>

      <section>
        <label className="input input-lg flex w-full items-center gap-3 rounded-2xl border-[#173f35]/15 bg-white shadow-sm focus-within:border-[#173f35] focus-within:outline-none">
          <Search className="size-5 text-[#9a650f]" aria-hidden="true"/>
          <input value={query} onChange={(event) => setQuery(event.target.value)} type="search" className="grow" placeholder="Search books by title..." aria-label="Search books by title"/>
        </label>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm font-semibold text-slate-500">
            Showing <span className="text-[#173f35]">{filteredBooks.length}</span> book
            {filteredBooks.length === 1 ? "" : "s"}
          </p>
          <p className="rounded-full bg-[#fff4d9] px-3 py-1 text-xs font-bold text-[#8a5a10]">
            Filter: {category}
          </p>
        </div>

        {loading ? (<div className="grid min-h-80 place-items-center rounded-3xl border border-dashed border-[#173f35]/20 bg-white/50">
            <LoadingSpinner label="Loading books"/>
          </div>) : error ? (<div className="alert alert-error mt-8 rounded-2xl" role="alert">
            <span>{error}</span>
          </div>) : filteredBooks.length === 0 ? (<div className="mt-8 grid min-h-80 place-items-center rounded-3xl border border-dashed border-[#173f35]/20 bg-white/60 p-8 text-center">
            <div>
              <BookOpen className="mx-auto size-12 text-[#d99b3d]" aria-hidden="true"/>
              <h2 className="mt-4 font-display text-2xl font-bold text-[#173f35]">
                No matching books
              </h2>
              <p className="mt-2 text-slate-500">Try another title or category.</p>
            </div>
          </div>) : (<div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filteredBooks.map((book) => (<BookCard key={book.id} book={book}/>))}
          </div>)}
      </section>
    </div>);
}
