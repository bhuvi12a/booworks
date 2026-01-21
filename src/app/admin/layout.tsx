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
        <div className="flex items-center gap-2 text-sm text-gray-300 font-medium">
            <Calendar size={16} className="text-orange-500" />
            <span>
                {date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
            <span className="w-1 h-1 rounded-full bg-gray-500 mx-1" />
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
                    "flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 group",
                    active
                        ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/20"
                        : "text-gray-400 hover:bg-gray-800 hover:text-white"
                )}
            >
                <Icon size={20} className={cn("transition-transform group-hover:scale-110")} />
                <span>{label}</span>
            </Link>
        )
    }

    return (
        <div className="flex h-screen bg-gray-900">
            {/* Mobile Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/60 z-40 md:hidden backdrop-blur-sm"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar - Dark Theme */}
            <aside className={cn(
                "fixed md:static inset-y-0 left-0 z-50 w-72 bg-gray-950 border-r border-gray-800 shadow-xl transform transition-transform duration-300 ease-in-out md:translate-x-0 overflow-y-auto",
                sidebarOpen ? "translate-x-0" : "-translate-x-full"
            )}>
                {/* Close button for mobile */}
                <button
                    onClick={() => setSidebarOpen(false)}
                    className="md:hidden absolute top-4 right-4 p-2 rounded-xl hover:bg-gray-800 transition-colors text-gray-400 hover:text-white"
                >
                    <X size={20} />
                </button>

                {/* Logo Header */}
                <div className="p-6 border-b border-gray-800">
                    <Link href="/admin" className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                            B
                        </div>
                        <div>
                            <h1 className="font-bold text-xl text-white">BooWorks</h1>
                            <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Admin Panel</p>
                        </div>
                    </Link>
                </div>

                <nav className="p-4 space-y-6">
                    {/* Dashboard */}
                    <div className="space-y-2">
                        <NavItem href="/admin" icon={Home} label="Dashboard" exact />
                    </div>

                    {/* Enquiry Management */}
                    <div className="space-y-2">
                        <div className="px-4 text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">
                            Enquiry Management
                        </div>
                        <NavItem href="/admin/inbox" icon={Mail} label="Contact Enquiry" />
                        <NavItem href="/admin/newsletter" icon={FileText} label="Newsletter" />
                        <NavItem href="/admin/bookings" icon={CalendarDays} label="Strategy Calls" />
                    </div>
                </nav>
            </aside>

            {/* Main Content Wrapper */}
            <div className="flex-1 flex flex-col overflow-hidden">

                {/* Top Header */}
                <header className="h-16 bg-gray-800 border-b border-gray-700 flex items-center justify-between px-4 md:px-8 shadow-sm">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setSidebarOpen(true)}
                            className="md:hidden p-2 rounded-xl hover:bg-gray-700 text-gray-300 hover:text-white transition-colors"
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
                            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-green-900/30 text-green-400 rounded-full border border-green-800">
                                <Database size={12} />
                                <span>Server: Online</span>
                            </div>
                            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-green-900/30 text-green-400 rounded-full border border-green-800">
                                <CheckCircle size={12} />
                                <span>DB: Connected</span>
                            </div>
                        </div>

                        {/* Profile & Logout */}
                        <div className="flex items-center gap-3 border-l border-gray-700 pl-6">
                            <div className="flex items-center gap-2 pr-2">
                                <div className="h-9 w-9 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white font-bold text-xs shadow-md">
                                    AD
                                </div>
                                <span className="text-sm font-medium hidden sm:block text-gray-200">Admin</span>
                            </div>
                            <button
                                onClick={() => signOut()}
                                className="flex items-center gap-2 px-4 py-2 bg-red-900/30 text-red-400 border border-red-800 rounded-full hover:bg-red-900/50 transition-all text-sm font-medium"
                            >
                                <LogOut size={16} />
                                <span className="hidden sm:inline">Logout</span>
                            </button>
                        </div>
                    </div>
                </header>

                {/* Dashboard Content */}
                <main className="flex-1 overflow-y-auto bg-gray-900 p-4 md:p-8">
                    <div className="max-w-7xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    )
}
