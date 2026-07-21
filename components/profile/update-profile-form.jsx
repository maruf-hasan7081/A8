"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ImageIcon, Save, UserRound } from "lucide-react";
import toast from "react-hot-toast";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { authClient } from "@/lib/auth-client";
export function UpdateProfileForm({ initialName, initialImage, }) {
    const router = useRouter();
    const { refetch } = authClient.useSession();
    const [name, setName] = useState(initialName);
    const [image, setImage] = useState(initialImage ?? "");
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    async function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);
        setErrorMessage("");
        try {
            const { error } = await authClient.updateUser({
                name: name.trim(),
                image: image.trim() || null,
            });
            if (error) {
                const message = error.message ?? "Could not update your profile.";
                setErrorMessage(message);
                toast.error(message);
                return;
            }
            await refetch();
            toast.success("Profile updated successfully.");
            router.push("/profile");
            router.refresh();
        }
        catch (error) {
            const message = error instanceof Error ? error.message : "Could not update your profile.";
            setErrorMessage(message);
            toast.error(message);
        }
        finally {
            setLoading(false);
        }
    }
    return (<form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex flex-col gap-6 rounded-3xl border border-[#173f35]/10 bg-[#fffdf8] p-5 sm:flex-row sm:items-center">
        <div className="avatar">
          <div className="size-24 overflow-hidden rounded-3xl bg-[#173f35]/10 ring-4 ring-white">
            {image ? (
        // Profile URLs are user-provided, so a normal image element supports any valid host.
        // eslint-disable-next-line @next/next/no-img-element
        <img src={image} alt="Profile preview" className="h-full w-full object-cover"/>) : (<div className="grid h-full w-full place-items-center text-[#173f35]">
                <UserRound className="size-10" aria-hidden="true"/>
              </div>)}
          </div>
        </div>
        <div>
          <p className="font-display text-xl font-bold text-[#173f35]">Profile preview</p>
          <p className="mt-1 text-sm leading-6 text-slate-500">
            Enter a publicly accessible image URL to update your avatar.
          </p>
        </div>
      </div>

      <label className="form-control block">
        <span className="label-text mb-2 block font-bold text-slate-700">Name</span>
        <div className="input flex h-12 w-full items-center gap-3 rounded-xl border-[#173f35]/15 bg-white focus-within:border-[#173f35] focus-within:outline-none">
          <UserRound className="size-5 text-[#9a650f]" aria-hidden="true"/>
          <input value={name} onChange={(event) => setName(event.target.value)} type="text" required minLength={2} className="grow" placeholder="Your full name"/>
        </div>
      </label>

      <label className="form-control block">
        <span className="label-text mb-2 block font-bold text-slate-700">Image URL</span>
        <div className="input flex h-12 w-full items-center gap-3 rounded-xl border-[#173f35]/15 bg-white focus-within:border-[#173f35] focus-within:outline-none">
          <ImageIcon className="size-5 text-[#9a650f]" aria-hidden="true"/>
          <input value={image} onChange={(event) => setImage(event.target.value)} type="url" className="grow" placeholder="https://example.com/profile.jpg"/>
        </div>
      </label>

      {errorMessage ? (<div className="alert alert-error rounded-xl py-3 text-sm" role="alert">
          <span>{errorMessage}</span>
        </div>) : null}

      <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
        <button type="button" onClick={() => router.back()} className="btn h-12 border-[#173f35]/15 bg-white text-[#173f35]">
          Cancel
        </button>
        <button type="submit" disabled={loading || !name.trim()} className="btn h-12 border-0 bg-[#173f35] px-6 text-white hover:bg-[#24594b]">
          {loading ? (<LoadingSpinner label="Updating"/>) : (<>
              <Save className="size-5" aria-hidden="true"/>
              Update Information
            </>)}
        </button>
      </div>
    </form>);
}
