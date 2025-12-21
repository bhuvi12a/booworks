"use client"

import { Mail, FileText, Calendar, ShoppingBag, List, Eye, Package, ArrowRight, Wallet, Users } from "lucide-react"
import Link from "next/link"

// Stats Card Component
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
        <div className={`rounded-2xl p-6 border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${bgClass} ${colorClass}`}>
            <div className="flex justify-between items-start mb-4">
                <h3 className="font-medium text-sm lg:text-base opacity-90">{title}</h3>
                <div className={`p-2 rounded-lg bg-white/50 backdrop-blur-sm`}>
                    <Icon size={20} />
                </div>
            </div>
            <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold">{value}</span>
            </div>
        </div>
    )
}

// Management Section Component
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
        <div className="bg-white dark:bg-card rounded-2xl border border-border/50 shadow-sm p-6 lg:p-8 flex flex-col h-full">
            <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{title}</h3>
                <p className="text-muted-foreground text-sm mt-1">{description}</p>
            </div>

            <div className="flex-1 space-y-4">
                {actions.map((action, i) => (
                    <Link
                        key={i}
                        href={action.href}
                        className={`group flex items-start gap-4 p-4 rounded-xl border border-border/50 hover:border-${action.color}-500/30 hover:bg-${action.color}-50/50 dark:hover:bg-${action.color}-950/10 transition-all duration-300`}
                    >
                        <div className={`p-3 rounded-lg bg-${action.color}-100/50 dark:bg-${action.color}-900/20 text-${action.color}-600 dark:text-${action.color}-400 group-hover:scale-110 transition-transform`}>
                            <action.icon size={22} />
                        </div>
                        <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-primary transition-colors flex items-center gap-2">
                                {action.label}
                            </h4>
                            <p className="text-xs text-muted-foreground mt-0.5">{action.subLabel}</p>
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
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white tracking-tight">Dashboard Overview</h2>
                <p className="text-muted-foreground mt-2 text-lg">
                    Welcome back, <span className="font-semibold text-foreground">Admin</span>! Here's what's happening today.
                </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
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
                <StatCard
                    title="Appointments"
                    value="0"
                    icon={Calendar}
                    colorClass="text-purple-600 border-purple-100"
                    bgClass="bg-purple-50/50"
                />
                <StatCard
                    title="Products"
                    value="24"
                    icon={Package}
                    colorClass="text-teal-600 border-teal-100"
                    bgClass="bg-teal-50/50"
                />
                <StatCard
                    title="Product Enquiries"
                    value="0"
                    icon={List}
                    colorClass="text-cyan-600 border-cyan-100"
                    bgClass="bg-cyan-50/50"
                />
            </div>

            {/* Detailed Management Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

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
                            href: "/admin/inbox",
                            color: "green"
                        },
                        {
                            icon: Calendar,
                            label: "View Appointments",
                            subLabel: "Manage bookings and schedules",
                            href: "/admin/appointments",
                            color: "purple"
                        }
                    ]}
                />

                {/* Product Management */}
                <ManagementCard
                    title="Product Management"
                    description="Manage products and product enquiries"
                    actions={[
                        {
                            icon: ShoppingBag,
                            label: "Manage Products",
                            subLabel: "Add, edit, or delete products",
                            href: "/admin/products",
                            color: "teal"
                        },
                        {
                            icon: List,
                            label: "View Product Enquiries",
                            subLabel: "Manage customer product queries",
                            href: "/admin/product-enquiries",
                            color: "cyan"
                        }
                    ]}
                />

                {/* Inventory Management */}
                <ManagementCard
                    title="Inventory Management"
                    description="Manage batches and stock levels"
                    actions={[
                        {
                            icon: Wallet,
                            label: "View Inventory",
                            subLabel: "Manage products and batches",
                            href: "/admin/inventory",
                            color: "indigo"
                        },
                        {
                            icon: Package,
                            label: "Add New Inventory",
                            subLabel: "Create new product batch",
                            href: "/admin/inventory/new",
                            color: "violet"
                        }
                    ]}
                />
            </div>
        </div>
    )
}
