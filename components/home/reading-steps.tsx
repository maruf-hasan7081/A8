import { BookCheck, Search, UserPlus } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Create an account",
    description: "Register with email or continue securely with Google.",
  },
  {
    icon: Search,
    title: "Find a book",
    description: "Search by title and filter the shelf by category.",
  },
  {
    icon: BookCheck,
    title: "Borrow instantly",
    description: "Open the private details page and confirm your borrowing choice.",
  },
];

export function ReadingSteps() {
  return (
    <section className="page-shell pb-20">
      <div className="rounded-[2.5rem] bg-[#173f35] px-6 py-12 text-white sm:px-10 lg:px-14">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#e6b660]">
              Borrow in minutes
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold">From curiosity to checkout</h2>
            <p className="mt-4 leading-7 text-white/70">
              The complete flow is simple, secure, and responsive on every screen size.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {steps.map(({ icon: Icon, title, description }, index) => (
              <div key={title} className="rounded-3xl bg-white/8 p-5 ring-1 ring-white/10">
                <div className="flex items-center justify-between">
                  <Icon className="size-6 text-[#e6b660]" aria-hidden="true" />
                  <span className="font-display text-2xl font-bold text-white/30">0{index + 1}</span>
                </div>
                <h3 className="mt-5 font-display text-xl font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/65">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
