import Link from "next/link";
import { Camera, Code2, Mail, MapPin, MessagesSquare, Phone } from "lucide-react";
import { Logo } from "@/components/ui/logo";
const socialLinks = [
    { href: "https://facebook.com", label: "Facebook", icon: MessagesSquare },
    { href: "https://instagram.com", label: "Instagram", icon: Camera },
    { href: "https://github.com", label: "GitHub", icon: Code2 },
];
export function Footer() {
    return (<footer className="mt-20 border-t border-[#173f35]/10 bg-[#112f28] text-[#fffaf0]">
      <div className="page-shell grid gap-10 py-12 md:grid-cols-[1.2fr_0.8fr_1fr]">
        <div>
          <div className="inline-flex rounded-2xl bg-white p-3">
            <Logo />
          </div>
          <p className="mt-5 max-w-md leading-7 text-white/70">
            A modern online library for curious readers. Explore stories, technology,
            and science from any device.
          </p>
          <div className="mt-5 flex gap-3">
            {socialLinks.map(({ href, label, icon: Icon }) => (<a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="grid size-10 place-items-center rounded-xl bg-white/10 transition hover:-translate-y-1 hover:bg-[#d99b3d] hover:text-[#173f35]">
                <Icon className="size-5" aria-hidden="true"/>
              </a>))}
          </div>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold">Explore</h2>
          <ul className="mt-4 space-y-3 text-white/70">
            <li><Link className="hover:text-white" href="/">Home</Link></li>
            <li><Link className="hover:text-white" href="/books">All Books</Link></li>
            <li><Link className="hover:text-white" href="/profile">My Profile</Link></li>
            <li><Link className="hover:text-white" href="/register">Create Account</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold">Contact Us</h2>
          <ul className="mt-4 space-y-4 text-white/70">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-5 shrink-0 text-[#d99b3d]" aria-hidden="true"/>
              <span>Readers Avenue, Dhaka, Bangladesh</span>
            </li>
            <li className="flex gap-3">
              <Mail className="size-5 shrink-0 text-[#d99b3d]" aria-hidden="true"/>
              <a className="hover:text-white" href="mailto:hello@leafandlore.com">hello@leafandlore.com</a>
            </li>
            <li className="flex gap-3">
              <Phone className="size-5 shrink-0 text-[#d99b3d]" aria-hidden="true"/>
              <a className="hover:text-white" href="tel:+8801700000000">+880 1700-000000</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-sm text-white/55">
        © {new Date().getFullYear()} Leaf & Lore. Built for the Category A8 assignment.
      </div>
    </footer>);
}
