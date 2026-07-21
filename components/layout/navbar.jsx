"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LogIn, LogOut, Menu, UserRound } from "lucide-react";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import { Logo } from "@/components/ui/logo";
const navItems = [
    { href: "/", label: "Home" },
    { href: "/books", label: "All Books" },
    { href: "/profile", label: "My Profile" },
];
export function Navbar() {
    const pathname = usePathname();
    const router = useRouter();
    const { data: session, isPending } = authClient.useSession();
    async function handleLogout() {
        const { error } = await authClient.signOut();
        if (error) {
            toast.error(error.message ?? "Could not log out.");
            return;
        }
        toast.success("Logged out successfully.");
        router.push("/");
        router.refresh();
    }
    const links = navItems.map((item) => {
        const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
        return (<li key={item.href}>
        <Link href={item.href} className={active
                ? "bg-[#173f35] text-white hover:bg-[#173f35]"
                : "font-semibold text-slate-700 hover:bg-[#173f35]/10 hover:text-[#173f35]"}>
          {item.label}
        </Link>
      </li>);
    });
    return (<header className="sticky top-0 z-50 border-b border-[#173f35]/10 bg-[#fffdf8]/90 backdrop-blur-xl">
      <div className="page-shell navbar min-h-20 px-0">
        <div className="navbar-start">
          <Logo />
        </div>

        <nav className="navbar-center hidden lg:flex" aria-label="Primary navigation">
          <ul className="menu menu-horizontal gap-1 rounded-2xl bg-white/70 px-2 py-1 shadow-sm ring-1 ring-[#173f35]/10">
            {links}
          </ul>
        </nav>

        <div className="navbar-end gap-2">
          {isPending ? (<span className="skeleton h-10 w-28 rounded-xl" aria-label="Loading user"/>) : session?.user ? (<>
              <Link href="/profile" className="hidden max-w-36 items-center gap-2 rounded-xl bg-[#173f35]/8 px-3 py-2 text-sm font-semibold text-[#173f35] sm:flex" title={session.user.name}>
                <UserRound className="size-4 shrink-0" aria-hidden="true"/>
                <span className="truncate">{session.user.name}</span>
              </Link>
              <button type="button" onClick={handleLogout} className="btn border-0 bg-[#173f35] text-white hover:bg-[#24594b]">
                <LogOut className="size-4" aria-hidden="true"/>
                <span className="hidden sm:inline">Logout</span>
              </button>
            </>) : (<Link href="/login" className="btn border-0 bg-[#173f35] text-white hover:bg-[#24594b]">
              <LogIn className="size-4" aria-hidden="true"/>
              Login
            </Link>)}

          <div className="dropdown dropdown-end lg:hidden">
            <button type="button" tabIndex={0} className="btn btn-square btn-ghost" aria-label="Open navigation menu">
              <Menu className="size-5" aria-hidden="true"/>
            </button>
            <ul tabIndex={0} className="menu dropdown-content z-50 mt-3 w-56 rounded-2xl bg-[#fffdf8] p-3 shadow-xl ring-1 ring-[#173f35]/10">
              {links}
            </ul>
          </div>
        </div>
      </div>
    </header>);
}
