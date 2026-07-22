import { AuthShell } from "@/components/auth/auth-shell";
import { RegisterForm } from "@/components/auth/register-form";
export const metadata = {
    title: "Register",
};
export default function RegisterPage() {
    return (<AuthShell eyebrow="Become a reader" title="Create your account" description="Add your name, email, photo URL, and password to join Leaf & Lore.">
      <RegisterForm />
    </AuthShell>);
}
