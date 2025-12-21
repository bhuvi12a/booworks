"use client"

import React, { useState } from "react"
import { Search, Filter, MoreHorizontal, Download, RefreshCw, Mail, Users, Trash2, CheckCircle } from "lucide-react"
import { removeMessage, removeSubscriber, markMessageAsRead } from "@/app/actions/admin"

export function InboxClient({ initialMessages, initialSubscribers }: { initialMessages: any[], initialSubscribers: any[] }) {
    const [activeTab, setActiveTab] = useState<"messages" | "newsletter">("messages")
    const [filter, setFilter] = useState<"all" | "unread" | "read">("all")

    // Sort messages: Unread first, then by date (assuming id correlates roughly or just simple sort)
    // For now we just filter
    const messages = initialMessages.filter(m => {
        if (filter === "all") return true
        if (filter === "unread") return m.status === "Unread"
        if (filter === "read") return m.status === "Read"
        return true
    })

    // Simple optimistic update could be done here by maintaining local state and syncing with props,
    // but the server action revalidates the path, so the page should reload with new data.

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
                        {initialMessages.length}
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
                        {initialSubscribers.length}
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
                    {activeTab === "messages" && (
                        <select
                            value={filter}
                            onChange={(e) => setFilter(e.target.value as any)}
                            className="p-2 bg-background border border-border rounded-md text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
                        >
                            <option value="all">All Messages</option>
                            <option value="unread">Unread</option>
                            <option value="read">Read</option>
                        </select>
                    )}
                    <button className="p-2 hover:bg-muted rounded-md text-muted-foreground" title="Refresh">
                        <RefreshCw size={16} />
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="bg-card rounded-xl border border-border shadow-sm overflow-hidden min-h-[400px]">
                {activeTab === "messages" && (
                    <div className="relative w-full overflow-auto">
                        {messages.length === 0 ? (
                            <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
                                <Mail size={48} className="mb-4 opacity-50" />
                                <p>No messages found.</p>
                            </div>
                        ) : (
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
                                    {messages.map((msg: any) => (
                                        <tr key={msg.id} className="bg-card hover:bg-muted/30 transition-colors group">
                                            <td className="px-6 py-4">
                                                <div className="font-medium text-foreground">{msg.name}</div>
                                                <div className="text-muted-foreground text-xs">{msg.email}</div>
                                            </td>
                                            <td className="px-6 py-4 font-medium text-foreground/80">
                                                {msg.subject}
                                                {msg.message && <div className="text-xs text-muted-foreground truncate max-w-[200px]">{msg.message}</div>}
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`px-2 py-1 rounded-full text-xs font-medium border ${msg.status === "Unread"
                                                        ? "bg-blue-500/10 text-blue-500 border-blue-500/20"
                                                        : "bg-gray-500/10 text-gray-500 border-gray-500/20"
                                                    }`}>
                                                    {msg.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-muted-foreground">{msg.date}</td>
                                            <td className="px-6 py-4 text-right">
                                                <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    {msg.status === "Unread" && (
                                                        <button
                                                            onClick={() => markMessageAsRead(msg.id)}
                                                            className="p-2 hover:bg-primary/10 text-primary rounded-full transition-colors"
                                                            title="Mark as Read"
                                                        >
                                                            <CheckCircle size={16} />
                                                        </button>
                                                    )}
                                                    <button
                                                        onClick={() => removeMessage(msg.id)}
                                                        className="p-2 hover:bg-red-500/10 text-red-500 rounded-full transition-colors"
                                                        title="Delete"
                                                    >
                                                        <Trash2 size={16} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                )}

                {activeTab === "newsletter" && (
                    <div className="relative w-full overflow-auto">
                        {initialSubscribers.length === 0 ? (
                            <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
                                <Users size={48} className="mb-4 opacity-50" />
                                <p>No subscribers yet.</p>
                            </div>
                        ) : (
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
                                    {initialSubscribers.map((sub: any) => (
                                        <tr key={sub.id} className="bg-card hover:bg-muted/30 transition-colors group">
                                            <td className="px-6 py-4 font-medium text-foreground">{sub.email}</td>
                                            <td className="px-6 py-4 text-muted-foreground">{sub.date}</td>
                                            <td className="px-6 py-4">
                                                <span className={`px-2 py-1 rounded-full text-xs font-medium border ${sub.status === "Subscribed"
                                                        ? "bg-green-500/10 text-green-600 border-green-500/20"
                                                        : "bg-red-500/10 text-red-600 border-red-500/20"
                                                    }`}>
                                                    {sub.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <button
                                                        onClick={() => removeSubscriber(sub.id)}
                                                        className="p-2 hover:bg-red-500/10 text-red-500 rounded-full transition-colors"
                                                        title="Delete"
                                                    >
                                                        <Trash2 size={16} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                )}
            </div>

            {/* Pagination Placeholder */}
            <div className="flex items-center justify-between text-xs text-muted-foreground px-2">
                <div>Showing all items</div>
                <div className="flex gap-2">
                    <button className="px-3 py-1 bg-card border border-border rounded hover:bg-muted transition-colors disabled:opacity-50" disabled>Previous</button>
                    <button className="px-3 py-1 bg-card border border-border rounded hover:bg-muted transition-colors" disabled>Next</button>
                </div>
            </div>
        </div>
    )
}
