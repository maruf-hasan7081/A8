import { BookHeart, ShieldCheck, Sparkles } from "lucide-react";
export function AuthShell({ eyebrow, title, description, children }) {
    return (<div className="page-shell py-12 sm:py-16">
      <div className="grid overflow-hidden rounded-[2.25rem] border border-[#173f35]/10 bg-white shadow-xl lg:grid-cols-[0.85fr_1.15fr]">
        <aside className="paper-grid relative hidden overflow-hidden bg-[#173f35] p-10 text-white lg:flex lg:flex-col lg:justify-between">
          <div className="absolute -right-16 -top-16 size-52 rounded-full border border-white/10"/>
          <div className="absolute -right-8 -top-8 size-36 rounded-full border border-white/10"/>
          <div>
            <div className="grid size-14 place-items-center rounded-2xl bg-[#d99b3d] text-[#173f35]">
              <BookHeart className="size-7" aria-hidden="true"/>
            </div>
            <h2 className="mt-8 font-display text-4xl font-bold leading-tight">
              Your next chapter starts with one secure sign-in.
            </h2>
            <p className="mt-5 max-w-md leading-7 text-white/70">
              Save your identity, open private book details, borrow titles, and keep your profile current.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex gap-3 rounded-2xl bg-white/8 p-4 ring-1 ring-white/10">
              <ShieldCheck className="mt-0.5 size-5 shrink-0 text-[#e6b660]" aria-hidden="true"/>
              <div>
                <p className="font-bold">Better Auth protection</p>
                <p className="mt-1 text-sm text-white/60">Email/password and Google authentication.</p>
              </div>
            </div>
            <div className="flex gap-3 rounded-2xl bg-white/8 p-4 ring-1 ring-white/10">
              <Sparkles className="mt-0.5 size-5 shrink-0 text-[#e6b660]" aria-hidden="true"/>
              <div>
                <p className="font-bold">No unnecessary friction</p>
                <p className="mt-1 text-sm text-white/60">No email verification or forgot-password flow.</p>
              </div>
            </div>
          </div>
        </aside>

        <section className="p-6 sm:p-10 lg:p-14">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#9a650f]">{eyebrow}</p>
          <h1 className="mt-3 font-display text-4xl font-bold text-[#173f35]">{title}</h1>
          <p className="mt-3 leading-7 text-slate-600">{description}</p>
          <div className="mt-8">{children}</div>
        </section>
      </div>
    </div>);
}
