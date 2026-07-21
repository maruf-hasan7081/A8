import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import {
  BadgeCheck,
  CalendarClock,
  Edit3,
  Fingerprint,
  Mail,
  ShieldCheck,
  UserRound,
} from "lucide-react";

import { getCurrentSession } from "@/lib/session";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "My Profile",
};

export const dynamic = "force-dynamic";

export default async function ProfilePage() {
  const session = await getCurrentSession();

  if (!session) {
    redirect("/login?callbackUrl=/profile");
  }

  const user = session.user;
  const details = [
    { label: "Full name", value: user.name, icon: UserRound },
    { label: "Email address", value: user.email, icon: Mail },
    {
      label: "Email verified",
      value: user.emailVerified ? "Yes" : "No",
      icon: BadgeCheck,
    },
    { label: "User ID", value: user.id, icon: Fingerprint },
    { label: "Account created", value: formatDate(user.createdAt), icon: CalendarClock },
    { label: "Last updated", value: formatDate(user.updatedAt), icon: ShieldCheck },
  ];

  return (
    <div className="page-shell py-12 sm:py-16">
      <div className="overflow-hidden rounded-[2.25rem] border border-[#173f35]/10 bg-white shadow-xl">
        <div className="paper-grid bg-[#173f35] px-6 py-10 text-white sm:px-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <div className="avatar">
                <div className="size-28 overflow-hidden rounded-3xl bg-white/10 ring-4 ring-white/15">
                  {user.image ? (
                    // User profile images may come from any valid external provider.
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={user.image} alt={user.name} className="h-full w-full object-cover" />
                  ) : (
                    <div className="grid h-full w-full place-items-center">
                      <UserRound className="size-12 text-white/70" aria-hidden="true" />
                    </div>
                  )}
                </div>
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#e6b660]">
                  Private profile
                </p>
                <h1 className="mt-2 font-display text-4xl font-bold">{user.name}</h1>
                <p className="mt-2 text-white/65">{user.email}</p>
              </div>
            </div>

            <Link
              href="/profile/update"
              className="btn h-12 border-0 bg-[#d99b3d] px-5 text-[#173f35] hover:bg-[#e6b660]"
            >
              <Edit3 className="size-4" aria-hidden="true" />
              Update Information
            </Link>
          </div>
        </div>

        <div className="p-6 sm:p-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#9a650f]">
              User information
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-[#173f35]">
              Account details
            </h2>
            <p className="mt-3 text-slate-600">
              All profile information currently available from your authenticated account.
            </p>
          </div>

          <dl className="mt-8 grid gap-4 md:grid-cols-2">
            {details.map(({ label, value, icon: Icon }) => (
              <div
                key={label}
                className="rounded-2xl border border-[#173f35]/10 bg-[#fffdf8] p-5"
              >
                <dt className="flex items-center gap-2 text-sm font-bold text-slate-500">
                  <Icon className="size-4 text-[#9a650f]" aria-hidden="true" />
                  {label}
                </dt>
                <dd className="mt-2 break-words font-semibold text-[#173f35]">
                  {String(value)}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
