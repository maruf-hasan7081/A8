import Link from "next/link";
import { redirect } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { UpdateProfileForm } from "@/components/profile/update-profile-form";
import { getCurrentSession } from "@/lib/session";
export const metadata = {
    title: "Update Profile",
};
export const dynamic = "force-dynamic";
export default async function UpdateProfilePage() {
    const session = await getCurrentSession();
    if (!session) {
        redirect("/login?callbackUrl=/profile/update");
    }
    return (<div className="page-shell py-12 sm:py-16">
      <Link href="/profile" className="inline-flex items-center gap-2 text-sm font-bold text-[#173f35] hover:text-[#9a650f]">
        <ArrowLeft className="size-4" aria-hidden="true"/>
        Back to profile
      </Link>

      <div className="mx-auto mt-7 max-w-3xl rounded-[2.25rem] border border-[#173f35]/10 bg-white p-6 shadow-xl sm:p-10">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#9a650f]">
          Profile settings
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold text-[#173f35]">
          Update your information
        </h1>
        <p className="mt-3 leading-7 text-slate-600">
          Change your display name and image using Better Auth&apos;s update-user feature.
        </p>

        <div className="mt-8">
          <UpdateProfileForm initialName={session.user.name} initialImage={session.user.image}/>
        </div>
      </div>
    </div>);
}
