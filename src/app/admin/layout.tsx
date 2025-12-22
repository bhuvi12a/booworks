"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
    Home, Users, BarChart3, Settings, LogOut, FileText, Briefcase, Mail,
    Menu, Calendar, CheckCircle, Database, Package, CalendarDays, ShoppingBag
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

    if (!date) return <div className="h-4 w-32 bg-muted/20 animate-pulse rounded"></div>

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
                    "flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 group relative overflow-hidden",
                    active
                        ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
            >
                <Icon size={20} className={cn("transition-transform group-hover:scale-110", active && "animate-bounce-subtle")} />
                <span className="relative z-10">{label}</span>
                {active && <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />}
            </Link>
        )
    }

    return (
        <div className="flex h-screen bg-gray-50/50 dark:bg-zinc-950 font-sans">
            {/* Mobile Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={cn(
                "fixed md:static inset-y-0 left-0 z-50 w-72 bg-white dark:bg-card border-r border-border shadow-2xl md:shadow-none transform transition-transform duration-300 ease-in-out md:translate-x-0 overflow-y-auto",
                sidebarOpen ? "translate-x-0" : "-translate-x-full"
            )}>
                <div className="p-6 border-b border-border/50">
                    <Link href="/admin" className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-primary to-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/20">
                            B
                        </div>
                        <div>
                            <h1 className="font-bold text-lg leading-tight">Admin Panel</h1>
                            <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Booworks Agency</p>
                        </div>
                    </Link>
                </div>

                <nav className="p-4 space-y-8">
                    {/* Main */}
                    <div className="space-y-1">
                        <NavItem href="/admin" icon={Home} label="Dashboard" exact />
                    </div>

                    {/* Management Groups */}
                    <div className="space-y-3">
                        <div className="px-4 text-[11px] font-bold text-muted-foreground/70 uppercase tracking-widest">
                            Enquiry Management
                        </div>
                        <div className="space-y-1">
                            <NavItem href="/admin/inbox" icon={Mail} label="Contact Enquiry" />
                            <NavItem href="/admin/newsletter" icon={FileText} label="Newsletter" />
                            <NavItem href="/admin/bookings" icon={CalendarDays} label="Strategy Calls" />
                        </div>
                    </div>
                </nav>
            </aside>

            {/* Main Content Wrapper */}
            <div className="flex-1 flex flex-col overflow-hidden relative">

                {/* Top Header */}
                <header className="h-16 bg-white dark:bg-card border-b border-border flex items-center justify-between px-4 md:px-8 shadow-sm z-10">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setSidebarOpen(true)}
                            className="md:hidden p-2 rounded-lg hover:bg-muted text-muted-foreground transition-colors"
                        >
                            <Menu size={24} />
                        </button>
                        <div className="hidden md:block">
                            <Clock />
                        </div>
                    </div>

                    <div className="flex items-center gap-3 md:gap-6">
                        {/* Status Pills */}
                        <div className="hidden lg:flex items-center gap-3 text-xs font-medium">
                            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-green-500/10 text-green-600 rounded-full border border-green-500/20">
                                <Database size={12} />
                                <span>Server: Online</span>
                            </div>
                            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-green-500/10 text-green-600 rounded-full border border-green-500/20">
                                <CheckCircle size={12} />
                                <span>DB: Connected</span>
                            </div>
                        </div>

                        {/* Profile & Logout */}
                        <div className="flex items-center gap-3 border-l border-border pl-6">
                            <div className="flex items-center gap-2 pr-2">
                                <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold text-xs border border-green-200">
                                    AD
                                </div>
                                <span className="text-sm font-medium hidden sm:block">Admin</span>
                            </div>
                            <button
                                onClick={() => signOut()}
                                className="flex items-center gap-2 px-3 py-1.5 bg-red-50 text-red-600 border border-red-200 rounded-lg hover:bg-red-100 transition-colors text-sm font-medium"
                            >
                                <LogOut size={16} />
                                <span className="hidden sm:inline">Logout</span>
                            </button>
                        </div>
                    </div>
                </header>

                {/* Dashboard Content */}
                <main className="flex-1 overflow-y-auto bg-gray-50/50 dark:bg-zinc-950 p-4 md:p-8">
                    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    )
}
