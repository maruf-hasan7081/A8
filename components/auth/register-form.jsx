"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, ImageIcon, LockKeyhole, Mail, UserRound } from "lucide-react";
import toast from "react-hot-toast";
import { SocialLoginButton } from "@/components/auth/social-login-button";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { authClient } from "@/lib/auth-client";
export function RegisterForm() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    async function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);
        setErrorMessage("");
        const formData = new FormData(event.currentTarget);
        const name = String(formData.get("name") ?? "").trim();
        const email = String(formData.get("email") ?? "").trim();
        const image = String(formData.get("image") ?? "").trim();
        const password = String(formData.get("password") ?? "");
        try {
            const { error } = await authClient.signUp.email({
                name,
                email,
                image: image || undefined,
                password,
            });
            if (error) {
                const message = error.message ?? "Registration failed.";
                setErrorMessage(message);
                toast.error(message);
                return;
            }
            toast.success("Registration successful. Please log in.");
            router.push("/login?registered=1");
            router.refresh();
        }
        catch (error) {
            const message = error instanceof Error ? error.message : "Registration failed.";
            setErrorMessage(message);
            toast.error(message);
        }
        finally {
            setLoading(false);
        }
    }
    return (<>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="form-control block">
          <span className="label-text mb-2 block font-bold text-slate-700">Name</span>
          <div className="input flex h-12 w-full items-center gap-3 rounded-xl border-[#173f35]/15 bg-[#fffdf8] focus-within:border-[#173f35] focus-within:outline-none">
            <UserRound className="size-5 text-[#9a650f]" aria-hidden="true"/>
            <input name="name" type="text" autoComplete="name" required placeholder="Your full name" className="grow"/>
          </div>
        </label>

        <label className="form-control block">
          <span className="label-text mb-2 block font-bold text-slate-700">Email</span>
          <div className="input flex h-12 w-full items-center gap-3 rounded-xl border-[#173f35]/15 bg-[#fffdf8] focus-within:border-[#173f35] focus-within:outline-none">
            <Mail className="size-5 text-[#9a650f]" aria-hidden="true"/>
            <input name="email" type="email" autoComplete="email" required placeholder="reader@example.com" className="grow"/>
          </div>
        </label>

        <label className="form-control block">
          <span className="label-text mb-2 block font-bold text-slate-700">Photo URL</span>
          <div className="input flex h-12 w-full items-center gap-3 rounded-xl border-[#173f35]/15 bg-[#fffdf8] focus-within:border-[#173f35] focus-within:outline-none">
            <ImageIcon className="size-5 text-[#9a650f]" aria-hidden="true"/>
            <input name="image" type="url" placeholder="https://example.com/photo.jpg" className="grow"/>
          </div>
        </label>

        <label className="form-control block">
          <span className="label-text mb-2 block font-bold text-slate-700">Password</span>
          <div className="input flex h-12 w-full items-center gap-3 rounded-xl border-[#173f35]/15 bg-[#fffdf8] focus-within:border-[#173f35] focus-within:outline-none">
            <LockKeyhole className="size-5 text-[#9a650f]" aria-hidden="true"/>
            <input name="password" type={showPassword ? "text" : "password"} autoComplete="new-password" minLength={8} required placeholder="Minimum 8 characters" className="grow"/>
            <button type="button" onClick={() => setShowPassword((value) => !value)} className="btn btn-ghost btn-xs" aria-label={showPassword ? "Hide password" : "Show password"}>
              {showPassword ? <EyeOff className="size-4"/> : <Eye className="size-4"/>}
            </button>
          </div>
        </label>

        {errorMessage ? (<div className="alert alert-error rounded-xl py-3 text-sm" role="alert">
            <span>{errorMessage}</span>
          </div>) : null}

        <button type="submit" disabled={loading} className="btn h-12 w-full border-0 bg-[#173f35] text-white hover:bg-[#24594b]">
          {loading ? <LoadingSpinner label="Creating account"/> : "Register"}
        </button>
      </form>

      <div className="divider my-7 text-xs uppercase tracking-[0.15em] text-slate-400">or</div>
      <SocialLoginButton callbackURL="/"/>

      <p className="mt-7 text-center text-sm text-slate-600">
        Already have an account?{" "}
        <Link href="/login" className="font-bold text-[#173f35] hover:text-[#9a650f]">
          Login here
        </Link>
      </p>
    </>);
}
