"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
    Home, Users, BarChart3, Settings, LogOut, FileText, Briefcase, Mail,
    Menu, Calendar, CheckCircle, Database, Package, CalendarDays, ShoppingBag, X
} from "lucide-react"
import { signOut } from "next-auth/react"
import { cn } from "@/lib/utils"

function Clock() {
    const [date, setDate] = useState<Date | null>(null)

    useEffect(() => {
        setDate(new Date())
        const timer = setInterval(() => setDate(new Date()), 1000)
        return () => clearInterval(timer)
    }, [])

    if (!date) return <div className="h-4 w-32 bg-white/10 animate-pulse rounded"></div>

    return (
        <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
            <Calendar size={16} className="text-primary" />
            <span>
                {date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/30 mx-1" />
            <span>{date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</span>
        </div>
    )
}

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const pathname = usePathname()

    const isActive = (path: string) => pathname === path

    const NavItem = ({ href, icon: Icon, label, exact = false }: { href: string, icon: any, label: string, exact?: boolean }) => {
        const active = exact ? pathname === href : pathname.startsWith(href)
        return (
            <Link
                href={href}
                onClick={() => setSidebarOpen(false)}
                className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-2xl font-medium transition-all duration-300 group relative overflow-hidden",
                    active
                        ? "bg-gradient-to-r from-primary to-blue-600 text-white shadow-lg shadow-primary/30"
                        : "text-muted-foreground hover:bg-white/50 dark:hover:bg-white/5 hover:text-foreground backdrop-blur-sm"
                )}
            >
                <Icon size={20} className={cn("transition-transform group-hover:scale-110", active && "drop-shadow-sm")} />
                <span className="relative z-10">{label}</span>
                {active && <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />}
            </Link>
        )
    }

    return (
        <div className="flex h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40 dark:from-zinc-950 dark:via-blue-950/20 dark:to-indigo-950/30 font-sans relative overflow-hidden">
            {/* Background Decoration - Frontend Style */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]" />
            </div>

            {/* Mobile Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar - Frontend Style Glassmorphism */}
            <aside className={cn(
                "fixed md:static inset-y-0 left-0 z-50 w-72 bg-white/80 dark:bg-card/80 backdrop-blur-xl border-r border-white/20 shadow-2xl transform transition-transform duration-300 ease-in-out md:translate-x-0 overflow-y-auto",
                sidebarOpen ? "translate-x-0" : "-translate-x-full"
            )}>
                {/* Close button for mobile */}
                <button
                    onClick={() => setSidebarOpen(false)}
                    className="md:hidden absolute top-4 right-4 p-2 rounded-xl hover:bg-white/50 dark:hover:bg-white/10 transition-colors"
                >
                    <X size={20} />
                </button>

                <div className="p-6 border-b border-white/10">
                    <Link href="/admin" className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-2xl bg-gradient-to-tr from-primary to-blue-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-primary/30">
                            B
                        </div>
                        <div>
                            <h1 className="font-bold text-xl leading-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">Admin Panel</h1>
                            <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Booworks Agency</p>
                        </div>
                    </Link>
                </div>

                <nav className="p-4 space-y-8">
                    {/* Main */}
                    <div className="space-y-2">
                        <NavItem href="/admin" icon={Home} label="Dashboard" exact />
                    </div>

                    {/* Management Groups */}
                    <div className="space-y-3">
                        <div className="px-4 text-[11px] font-bold text-muted-foreground/70 uppercase tracking-widest">
                            Enquiry Management
                        </div>
                        <div className="space-y-2">
                            <NavItem href="/admin/inbox" icon={Mail} label="Contact Enquiry" />
                            <NavItem href="/admin/newsletter" icon={FileText} label="Newsletter" />
                            <NavItem href="/admin/bookings" icon={CalendarDays} label="Strategy Calls" />
                        </div>
                    </div>
                </nav>
            </aside>

            {/* Main Content Wrapper */}
            <div className="flex-1 flex flex-col overflow-hidden relative">

                {/* Top Header - Frontend Style */}
                <header className="h-16 bg-white/80 dark:bg-card/80 backdrop-blur-xl border-b border-white/20 flex items-center justify-between px-4 md:px-8 shadow-sm z-10">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setSidebarOpen(true)}
                            className="md:hidden p-2 rounded-xl hover:bg-white/50 dark:hover:bg-white/10 text-muted-foreground transition-colors"
                        >
                            <Menu size={24} />
                        </button>
                        <div className="hidden md:block">
                            <Clock />
                        </div>
                    </div>

                    <div className="flex items-center gap-3 md:gap-6">
                        {/* Status Pills - Frontend Style */}
                        <div className="hidden lg:flex items-center gap-3 text-xs font-medium">
                            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-green-500/10 text-green-600 rounded-full border border-green-500/20 backdrop-blur-sm">
                                <Database size={12} />
                                <span>Server: Online</span>
                            </div>
                            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-green-500/10 text-green-600 rounded-full border border-green-500/20 backdrop-blur-sm">
                                <CheckCircle size={12} />
                                <span>DB: Connected</span>
                            </div>
                        </div>

                        {/* Profile & Logout - Frontend Style */}
                        <div className="flex items-center gap-3 border-l border-white/20 pl-6">
                            <div className="flex items-center gap-2 pr-2">
                                <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-primary to-blue-600 flex items-center justify-center text-white font-bold text-xs shadow-lg shadow-primary/20">
                                    AD
                                </div>
                                <span className="text-sm font-medium hidden sm:block">Admin</span>
                            </div>
                            <button
                                onClick={() => signOut()}
                                className="flex items-center gap-2 px-4 py-2 bg-red-500/10 text-red-600 border border-red-500/20 rounded-full hover:bg-red-500/20 transition-all text-sm font-medium backdrop-blur-sm"
                            >
                                <LogOut size={16} />
                                <span className="hidden sm:inline">Logout</span>
                            </button>
                        </div>
                    </div>
                </header>

                {/* Dashboard Content - Frontend Style */}
                <main className="flex-1 overflow-y-auto bg-transparent p-4 md:p-8 relative z-10">
                    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    )
}
