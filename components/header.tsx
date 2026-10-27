import Link from "next/link";
import React, { Suspense } from "react";
import Image from "next/image";
import { LoginLink, LogoutLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";
import Profile from "./Profile";

export default function Header() {
    return (
        <header className="flex h-14 items-center justify-between border-b border-zinc-200 px-4 sm:px-6">
            <Link href="/" className="flex items-center gap-3 font-semibold">
                <Image src="/next.svg" alt="" width={89} height={18} priority />
            </Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Profile />
            </Suspense>
            <nav className="flex items-center gap-4 text-sm font-medium text-zinc -600">
                <LoginLink>Sign in</LoginLink>
                <LogoutLink>Sign out</LogoutLink>
                <RegisterLink>Sign up</RegisterLink>
                <Link href="/" className="hover:text-zinc-950">Home</Link>
                <Link href="/posts" className="hover:text-zinc-950">Posts</Link>
            </nav>


        </header>
    );
}