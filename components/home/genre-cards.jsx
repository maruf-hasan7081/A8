import Link from "next/link";
import { Atom, Code2, Feather, MoveRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
const genres = [
    {
        title: "Story",
        description: "Fiction that carries you into new lives, worlds, and possibilities.",
        icon: Feather,
        className: "bg-[#f7dfb5]",
    },
    {
        title: "Tech",
        description: "Practical ideas for building software and understanding modern systems.",
        icon: Code2,
        className: "bg-[#d8e7e1]",
    },
    {
        title: "Science",
        description: "Clear, compelling journeys through nature, space, biology, and discovery.",
        icon: Atom,
        className: "bg-[#e1dcf4]",
    },
];
export function GenreCards() {
    return (<section className="border-y border-[#173f35]/10 bg-white/55 py-20">
      <div className="page-shell">
        <SectionHeading eyebrow="Browse by mood" title="Three shelves, endless directions" description="Choose a category and quickly narrow the collection to the kind of book you need today." centered/>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {genres.map(({ title, description, icon: Icon, className }) => (<Link key={title} href={`/books?category=${title}`} className={`${className} group rounded-[2rem] border border-[#173f35]/10 p-7 transition hover:-translate-y-1 hover:shadow-xl`}>
              <div className="grid size-14 place-items-center rounded-2xl bg-[#173f35] text-white">
                <Icon className="size-7" aria-hidden="true"/>
              </div>
              <h3 className="mt-8 font-display text-3xl font-bold text-[#173f35]">{title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{description}</p>
              <span className="mt-6 inline-flex items-center gap-2 font-bold text-[#173f35]">
                Explore {title}
                <MoveRight className="size-4 transition group-hover:translate-x-1" aria-hidden="true"/>
              </span>
            </Link>))}
        </div>
      </div>
    </section>);
}
