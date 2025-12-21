"use client"

import React, { useState } from "react"
import { Search, Filter, MoreHorizontal, Download, RefreshCw, Mail, Users } from "lucide-react"

// Mock Data
const messages = [
    { id: 1, name: "Alice Smith", email: "alice@example.com", subject: "Project Inquiry", date: "Oct 24, 2024", status: "Unread" },
    { id: 2, name: "Bob Jones", email: "bob@company.com", subject: "Partnership Proposal", date: "Oct 23, 2024", status: "Read" },
    { id: 3, name: "Charlie Day", email: "charlie@gmail.com", subject: "Quote for SEO Services", date: "Oct 22, 2024", status: "Read" },
    { id: 4, name: "Diana Prince", email: "diana@amazon.com", subject: "Marketing Strategy Consultation", date: "Oct 21, 2024", status: "Unread" },
]

const subscribers = [
    { id: 1, email: "john.doe@gmail.com", date: "Oct 24, 2024", status: "Subscribed" },
    { id: 2, email: "sarah.connor@sky.net", date: "Oct 23, 2024", status: "Subscribed" },
    { id: 3, email: "admin@techcorp.com", date: "Oct 22, 2024", status: "Unsubscribed" },
    { id: 4, email: "mike.ross@pearson.com", date: "Oct 21, 2024", status: "Subscribed" },
    { id: 5, email: "rachel.y@gmail.com", date: "Oct 20, 2024", status: "Subscribed" },
]

export default function InboxPage() {
    const [activeTab, setActiveTab] = useState<"messages" | "newsletter">("messages")

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Inbox</h1>
                    <p className="text-muted-foreground">Manage your messages and subscriptions.</p>
                </div>
                <div className="flex gap-2">
                    <button className="flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-lg text-sm font-medium hover:bg-muted transition-colors">
                        <Download size={16} />
                        Export CSV
                    </button>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-1 border-b border-border">
                <button
                    onClick={() => setActiveTab("messages")}
                    className={`flex items-center gap-2 px-6 py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === "messages"
                            ? "border-primary text-primary bg-primary/5"
                            : "border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/50"
                        }`}
                >
                    <Mail size={16} />
                    Contact Messages
                    <span className="ml-1 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs">
                        {messages.length}
                    </span>
                </button>
                <button
                    onClick={() => setActiveTab("newsletter")}
                    className={`flex items-center gap-2 px-6 py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === "newsletter"
                            ? "border-primary text-primary bg-primary/5"
                            : "border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/50"
                        }`}
                >
                    <Users size={16} />
                    Newsletter
                    <span className="ml-1 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs">
                        {subscribers.length}
                    </span>
                </button>
            </div>

            {/* Toolbar */}
            <div className="flex items-center justify-between gap-4 bg-card p-2 rounded-lg border border-border">
                <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full pl-9 pr-4 py-2 bg-background border-none rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                </div>
                <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-muted rounded-md text-muted-foreground" title="Refresh">
                        <RefreshCw size={16} />
                    </button>
                    <button className="p-2 hover:bg-muted rounded-md text-muted-foreground" title="Filter">
                        <Filter size={16} />
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="bg-card rounded-xl border border-border shadow-sm overflow-hidden">
                {activeTab === "messages" && (
                    <div className="relative w-full overflow-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="text-xs text-muted-foreground uppercase bg-muted/40 border-b border-border">
                                <tr>
                                    <th className="px-6 py-3 font-medium">Sender</th>
                                    <th className="px-6 py-3 font-medium">Subject</th>
                                    <th className="px-6 py-3 font-medium">Status</th>
                                    <th className="px-6 py-3 font-medium">Date</th>
                                    <th className="px-6 py-3 font-medium text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                                {messages.map((msg) => (
                                    <tr key={msg.id} className="bg-card hover:bg-muted/30 transition-colors group">
                                        <td className="px-6 py-4">
                                            <div className="font-medium text-foreground">{msg.name}</div>
                                            <div className="text-muted-foreground text-xs">{msg.email}</div>
                                        </td>
                                        <td className="px-6 py-4 font-medium text-foreground/80">{msg.subject}</td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${msg.status === "Unread"
                                                    ? "bg-blue-500/10 text-blue-500"
                                                    : "bg-gray-500/10 text-gray-500"
                                                }`}>
                                                {msg.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-muted-foreground">{msg.date}</td>
                                        <td className="px-6 py-4 text-right">
                                            <button className="p-2 hover:bg-muted rounded-full opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground">
                                                <MoreHorizontal size={16} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {activeTab === "newsletter" && (
                    <div className="relative w-full overflow-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="text-xs text-muted-foreground uppercase bg-muted/40 border-b border-border">
                                <tr>
                                    <th className="px-6 py-3 font-medium">Email</th>
                                    <th className="px-6 py-3 font-medium">Date Subscribed</th>
                                    <th className="px-6 py-3 font-medium">Status</th>
                                    <th className="px-6 py-3 font-medium text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                                {subscribers.map((sub) => (
                                    <tr key={sub.id} className="bg-card hover:bg-muted/30 transition-colors group">
                                        <td className="px-6 py-4 font-medium text-foreground">{sub.email}</td>
                                        <td className="px-6 py-4 text-muted-foreground">{sub.date}</td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${sub.status === "Subscribed"
                                                    ? "bg-green-500/10 text-green-600"
                                                    : "bg-red-500/10 text-red-600"
                                                }`}>
                                                {sub.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button className="p-2 hover:bg-muted rounded-full opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground">
                                                <MoreHorizontal size={16} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            {/* Pagination Placeholder */}
            <div className="flex items-center justify-between text-xs text-muted-foreground px-2">
                <div>Showing 1-{activeTab === "messages" ? messages.length : subscribers.length} of 10</div>
                <div className="flex gap-2">
                    <button className="px-3 py-1 bg-card border border-border rounded hover:bg-muted transition-colors disabled:opacity-50" disabled>Previous</button>
                    <button className="px-3 py-1 bg-card border border-border rounded hover:bg-muted transition-colors">Next</button>
                </div>
            </div>
        </div>
    )
}
