import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { ToastProvider } from "@/components/ui/toast-provider";

export const metadata: Metadata = {
  title: {
    default: "Leaf & Lore | Online Book Borrowing Platform",
    template: "%s | Leaf & Lore",
  },
  description:
    "Explore and borrow books across Story, Tech, and Science categories.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <Navbar />
        <main className="min-h-[65vh]">{children}</main>
        <Footer />
        <ToastProvider />
      </body>
    </html>
  );
}
