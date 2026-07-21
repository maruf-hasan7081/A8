"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
export function SocialLoginButton({ callbackURL = "/" }) {
    const [loading, setLoading] = useState(false);
    async function handleGoogleLogin() {
        try {
            setLoading(true);
            const { error } = await authClient.signIn.social({
                provider: "google",
                callbackURL,
                errorCallbackURL: "/login?error=google",
            });
            if (error) {
                toast.error(error.message ?? "Google sign-in failed.");
                setLoading(false);
            }
        }
        catch (error) {
            toast.error(error instanceof Error ? error.message : "Google sign-in failed.");
            setLoading(false);
        }
    }
    return (<button type="button" onClick={handleGoogleLogin} disabled={loading} className="btn h-12 w-full border-[#173f35]/15 bg-white text-slate-700 hover:border-[#173f35]/35 hover:bg-[#173f35]/5">
      {loading ? (<LoadingSpinner label="Connecting"/>) : (<>
          <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
            <path fill="#4285F4" d="M21.6 12.23c0-.71-.06-1.22-.2-1.75H12v3.4h5.52a4.73 4.73 0 0 1-2.05 3.02l-.02.11 2.98 2.31.2.02c1.82-1.68 2.97-4.15 2.97-7.11Z"/>
            <path fill="#34A853" d="M12 22c2.7 0 4.97-.89 6.63-2.42l-3.16-2.44c-.85.57-1.99.97-3.47.97-2.6 0-4.8-1.76-5.59-4.19l-.1.01-3.1 2.4-.03.09A10 10 0 0 0 12 22Z"/>
            <path fill="#FBBC05" d="M6.41 13.92A6.02 6.02 0 0 1 6.09 12c0-.67.12-1.31.31-1.92l-.01-.13-3.14-2.44-.1.05A10 10 0 0 0 2 12c0 1.6.38 3.11 1.18 4.44l3.23-2.52Z"/>
            <path fill="#EA4335" d="M12 5.89c1.88 0 3.15.81 3.87 1.48l2.83-2.76C16.96 3 14.7 2 12 2a10 10 0 0 0-8.82 5.56l3.22 2.52C7.2 7.65 9.4 5.89 12 5.89Z"/>
          </svg>
          Continue with Google
        </>)}
    </button>);
}
