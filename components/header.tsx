import * as React from 'react'
import { Button } from "@/components/ui/button"
import Link from "next/link";

async function Logo() {
    return (
        <p className={"text-slate-400"}>
            <a className="font-medium text-xl hover:text-slate-100 transition-colors duration-75" href="/">Shan CW</a>
        </p>
    )
}

async function Nav() {
    return (
        <nav className={"ml-auto flex items-center gap-2 sm:gap-6"}>
            <Button className="text-xl font-medium" variant="link" asChild>
                <Link href="/">Home</Link>
            </Button>
            <Button className="text-xl font-medium" variant="link" asChild>
                <Link href="/projects">Projects</Link>
            </Button>
            <Button className="text-xl font-medium" variant="link" asChild>
                <Link href="/posts">Blogs</Link>
            </Button>
        </nav>
    )
}

export function Header() {
    return (
        <header className="gutter fixed top-0 left-0 z-10 flex h-20 w-full items-center  border-b backdrop-blur-lg">
            <Logo/>
            <Nav/>
        </header>
    )
}
