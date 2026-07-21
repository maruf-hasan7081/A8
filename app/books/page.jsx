import { BooksBrowser } from "@/components/books/books-browser";
export const metadata = {
    title: "All Books",
    description: "Search and filter the Leaf & Lore book collection.",
};
export default async function AllBooksPage({ searchParams }) {
    const { category } = await searchParams;
    return (<div className="page-shell py-14 sm:py-16">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#9a650f]">
          Digital collection
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-[#173f35] sm:text-5xl">
          Find the right book for today
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          Search by title or use the category sidebar to explore Story, Tech, and Science.
        </p>
      </div>
      <BooksBrowser initialCategory={category}/>
    </div>);
}
