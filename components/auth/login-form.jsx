"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { SocialLoginButton } from "@/components/auth/social-login-button";
export function LoginForm({ callbackURL = "/" }) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    async function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);
        setErrorMessage("");
        const formData = new FormData(event.currentTarget);
        const email = String(formData.get("email") ?? "").trim();
        const password = String(formData.get("password") ?? "");
        try {
            const { error } = await authClient.signIn.email({
                email,
                password,
                rememberMe: true,
            });
            if (error) {
                const message = error.message ?? "Invalid email or password.";
                setErrorMessage(message);
                toast.error(message);
                return;
            }
            toast.success("Login successful.");
            router.push(callbackURL);
            router.refresh();
        }
        catch (error) {
            const message = error instanceof Error ? error.message : "Login failed.";
            setErrorMessage(message);
            toast.error(message);
        }
        finally {
            setLoading(false);
        }
    }
    return (<>
      <form onSubmit={handleSubmit} className="space-y-5">
        <label className="form-control block">
          <span className="label-text mb-2 block font-bold text-slate-700">Email</span>
          <div className="input flex h-12 w-full items-center gap-3 rounded-xl border-[#173f35]/15 bg-[#fffdf8] focus-within:border-[#173f35] focus-within:outline-none">
            <Mail className="size-5 text-[#9a650f]" aria-hidden="true"/>
            <input name="email" type="email" autoComplete="email" required placeholder="reader@example.com" className="grow"/>
          </div>
        </label>

        <label className="form-control block">
          <span className="label-text mb-2 block font-bold text-slate-700">Password</span>
          <div className="input flex h-12 w-full items-center gap-3 rounded-xl border-[#173f35]/15 bg-[#fffdf8] focus-within:border-[#173f35] focus-within:outline-none">
            <LockKeyhole className="size-5 text-[#9a650f]" aria-hidden="true"/>
            <input name="password" type={showPassword ? "text" : "password"} autoComplete="current-password" minLength={8} required placeholder="Minimum 8 characters" className="grow"/>
            <button type="button" onClick={() => setShowPassword((value) => !value)} className="btn btn-ghost btn-xs" aria-label={showPassword ? "Hide password" : "Show password"}>
              {showPassword ? <EyeOff className="size-4"/> : <Eye className="size-4"/>}
            </button>
          </div>
        </label>

        {errorMessage ? (<div className="alert alert-error rounded-xl py-3 text-sm" role="alert">
            <span>{errorMessage}</span>
          </div>) : null}

        <button type="submit" disabled={loading} className="btn h-12 w-full border-0 bg-[#173f35] text-white hover:bg-[#24594b]">
          {loading ? <LoadingSpinner label="Logging in"/> : "Login"}
        </button>
      </form>

      <div className="divider my-7 text-xs uppercase tracking-[0.15em] text-slate-400">or</div>
      <SocialLoginButton callbackURL={callbackURL}/>

      <p className="mt-7 text-center text-sm text-slate-600">
        New to Leaf & Lore?{" "}
        <Link href="/register" className="font-bold text-[#173f35] hover:text-[#9a650f]">
          Register here
        </Link>
      </p>
    </>);
}
