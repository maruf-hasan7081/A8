import Link from "next/link";
import { BookOpenText, Leaf } from "lucide-react";
export function Logo() {
    return (<Link href="/" aria-label="Leaf and Lore home" className="group inline-flex items-center gap-2">
      <span className="relative grid size-10 place-items-center rounded-2xl bg-[#173f35] text-white shadow-sm transition-transform group-hover:-rotate-3">
        <BookOpenText className="size-5" aria-hidden="true"/>
        <Leaf className="absolute -right-1 -top-1 size-4 rounded-full bg-[#d99b3d] p-0.5 text-[#173f35]" aria-hidden="true"/>
      </span>
      <span className="font-display text-xl font-bold tracking-tight text-[#173f35]">
        Leaf <span className="text-[#b87316]">&</span> Lore
      </span>
    </Link>);
}
