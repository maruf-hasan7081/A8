import type { Metadata } from "next";

import { AuthShell } from "@/components/auth/auth-shell";
import { LoginForm } from "@/components/auth/login-form";
import { safeCallbackUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Login",
};

interface LoginPageProps {
  searchParams: Promise<{ callbackUrl?: string; registered?: string; error?: string }>;
}

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const params = await searchParams;
  const callbackURL = safeCallbackUrl(params.callbackUrl);

  return (
    <AuthShell
      eyebrow="Welcome back"
      title="Login to your library"
      description="Use your email and password or continue with Google."
    >
      {params.registered === "1" ? (
        <div className="alert alert-success mb-5 rounded-xl py-3 text-sm" role="status">
          <span>Your account was created. Log in to continue.</span>
        </div>
      ) : null}
      {params.error === "google" ? (
        <div className="alert alert-error mb-5 rounded-xl py-3 text-sm" role="alert">
          <span>Google sign-in was cancelled or failed. Please try again.</span>
        </div>
      ) : null}
      <LoginForm callbackURL={callbackURL} />
    </AuthShell>
  );
}
