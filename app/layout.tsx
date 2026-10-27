import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/header";
import { AuthProvider } from "@/components/AuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next Blog",
  description: "A minimal blogging site created with NextJS App Router",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-full`}>
        <div className="min-h-dvh bg-zinc-200 text-zinc-950">
          <div className="mx-auto flex min-h-dvh w-full max-w-[1100px] flex-col border-x border-zinc-300 bg-white">
            
            <Header />
            <AuthProvider>
              <main className="flex-1 px-4 py-8 sm:px-6 sm:py-10">
                {children}
              </main>
            </AuthProvider>
            <footer className="flex h-14 items-center border-t border-zinc-300 px-4 text-sm text-zinc-500 sm:px-6">
              2026 Next Blog
            </footer>
          </div>
        </div>  
        </body>
    </html>
  );
}
