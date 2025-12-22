"use client"

import { usePathname } from "next/navigation"
import { Navbar } from "./Navbar"
import Footer from "./Footer"
import { Home, Briefcase, User, Mail } from "lucide-react"

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname()

    // Define routes where global nav/footer should NOT appear
    const isExcluded = pathname.startsWith("/admin") || pathname.startsWith("/api")

    const navItems = [
        { name: 'Home', url: '/', icon: Home },
        { name: 'Services', url: '/#services', icon: Briefcase },
        { name: 'About', url: '/#about', icon: User },
        { name: 'Contact', url: '/contact', icon: Mail }
    ]

    return (
        <>
            {!isExcluded && <Navbar items={navItems} />}
            {children}
            {!isExcluded && <Footer />}
        </>
    )
}
