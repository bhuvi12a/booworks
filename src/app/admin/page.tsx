"use client"

import { Mail, FileText, Calendar, ShoppingBag, List, Eye, Package, ArrowRight, Wallet, Users } from "lucide-react"
import Link from "next/link"

// Stats Card Component - Frontend Style
function StatCard({
    title,
    value,
    icon: Icon,
    colorClass,
    bgClass
}: {
    title: string,
    value: string | number,
    icon: any,
    colorClass: string,
    bgClass: string
}) {
    return (
        <div className={`group relative rounded-3xl p-8 border border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1 bg-white/60 dark:bg-card/60 backdrop-blur-xl overflow-hidden`}>
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                    <h3 className="font-semibold text-base text-muted-foreground">{title}</h3>
                    <div className={`p-3 rounded-2xl bg-gradient-to-br from-primary/20 to-blue-500/20 backdrop-blur-sm group-hover:scale-110 transition-transform`}>
                        <Icon size={24} className="text-primary" />
                    </div>
                </div>
                <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">{value}</span>
                </div>
            </div>
        </div>
    )
}

// Management Section Component - Frontend Style
function ManagementCard({
    title,
    description,
    actions
}: {
    title: string,
    description: string,
    actions: { icon: any, label: string, subLabel: string, href: string, color: string }[]
}) {
    return (
        <div className="bg-white/60 dark:bg-card/60 backdrop-blur-xl rounded-3xl border border-white/20 shadow-lg p-8 flex flex-col h-full hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
            <div className="mb-8">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">{title}</h3>
                <p className="text-muted-foreground text-sm mt-2">{description}</p>
            </div>

            <div className="flex-1 space-y-4">
                {actions.map((action, i) => (
                    <Link
                        key={i}
                        href={action.href}
                        className={`group flex items-start gap-4 p-5 rounded-2xl border border-white/20 hover:border-primary/30 bg-white/40 dark:bg-card/40 hover:bg-white/60 dark:hover:bg-card/60 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5`}
                    >
                        <div className={`p-3 rounded-xl bg-gradient-to-br from-primary/20 to-blue-500/20 text-primary group-hover:scale-110 transition-transform`}>
                            <action.icon size={22} />
                        </div>
                        <div className="flex-1">
                            <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                                {action.label}
                                <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                            </h4>
                            <p className="text-xs text-muted-foreground mt-1">{action.subLabel}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default function AdminPage() {
    return (
        <div className="space-y-10 pb-10">
            {/* Welcome Section */}
            <div>
                <h2 className="text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text tracking-tight">Dashboard Overview</h2>
                <p className="text-muted-foreground mt-3 text-lg">
                    Welcome back, <span className="font-semibold text-primary">Admin</span>! Here's what's happening today.
                </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                <StatCard
                    title="Contact Enquiries"
                    value="4"
                    icon={Mail}
                    colorClass="text-blue-600 border-blue-100"
                    bgClass="bg-blue-50/50"
                />
                <StatCard
                    title="Newsletter Subs"
                    value="12"
                    icon={FileText}
                    colorClass="text-green-600 border-green-100"
                    bgClass="bg-green-50/50"
                />
            </div>

            {/* Detailed Management Sections */}
            <div className="max-w-xl">
                {/* Enquiry Management */}
                <ManagementCard
                    title="Enquiry Management"
                    description="Manage customer enquiries and communications"
                    actions={[
                        {
                            icon: Mail,
                            label: "View Contact Enquiries",
                            subLabel: "Manage customer messages",
                            href: "/admin/inbox",
                            color: "blue"
                        },
                        {
                            icon: FileText,
                            label: "View Newsletter Subscribers",
                            subLabel: "Manage your mailing list",
                            href: "/admin/newsletter",
                            color: "green"
                        }
                    ]}
                />
            </div>
        </div>
    )
}
