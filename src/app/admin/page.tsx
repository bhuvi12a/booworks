"use client"

import { Mail, FileText, Calendar, ShoppingBag, List, Eye, Package, ArrowRight, Wallet, Users } from "lucide-react"
import Link from "next/link"

// Stats Card Component - Orange Theme
function StatCard({
    title,
    value,
    icon: Icon,
}: {
    title: string,
    value: string | number,
    icon: any,
}) {
    return (
        <div className="group relative rounded-2xl p-8 border border-gray-800 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20 hover:-translate-y-1 bg-gray-800/50 backdrop-blur-xl overflow-hidden hover:border-orange-500/50">
            {/* Orange Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                    <h3 className="font-semibold text-base text-gray-400">{title}</h3>
                    <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500/20 to-amber-500/20 backdrop-blur-sm group-hover:scale-110 transition-transform">
                        <Icon size={24} className="text-orange-500" />
                    </div>
                </div>
                <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">{value}</span>
                </div>
            </div>
        </div>
    )
}

// Management Section Component - Orange Theme
function ManagementCard({
    title,
    description,
    actions
}: {
    title: string,
    description: string,
    actions: { icon: any, label: string, subLabel: string, href: string }[]
}) {
    return (
        <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-gray-800 shadow-lg p-8 flex flex-col h-full hover:shadow-2xl hover:shadow-orange-500/10 hover:border-orange-500/30 transition-all duration-300">
            <div className="mb-8">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">{title}</h3>
                <p className="text-gray-400 text-sm mt-2">{description}</p>
            </div>

            <div className="flex-1 space-y-4">
                {actions.map((action, i) => (
                    <Link
                        key={i}
                        href={action.href}
                        className="group flex items-start gap-4 p-5 rounded-xl border border-gray-700 hover:border-orange-500/50 bg-gray-800/40 hover:bg-gray-800/60 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10 hover:-translate-y-0.5"
                    >
                        <div className="p-3 rounded-lg bg-gradient-to-br from-orange-500/20 to-amber-500/20 text-orange-500 group-hover:scale-110 transition-transform">
                            <action.icon size={22} />
                        </div>
                        <div className="flex-1">
                            <h4 className="font-semibold text-gray-200 group-hover:text-orange-500 transition-colors flex items-center gap-2">
                                {action.label}
                                <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                            </h4>
                            <p className="text-xs text-gray-400 mt-1">{action.subLabel}</p>
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
                <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent tracking-tight">Dashboard Overview</h2>
                <p className="text-gray-400 mt-3 text-lg">
                    Welcome back, <span className="font-semibold text-orange-500">Admin</span>! Here's what's happening today.
                </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                <StatCard
                    title="Contact Enquiries"
                    value="4"
                    icon={Mail}
                />
                <StatCard
                    title="Newsletter Subs"
                    value="12"
                    icon={FileText}
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
                        },
                        {
                            icon: FileText,
                            label: "View Newsletter Subscribers",
                            subLabel: "Manage your mailing list",
                            href: "/admin/newsletter",
                        }
                    ]}
                />
            </div>
        </div>
    )
}
