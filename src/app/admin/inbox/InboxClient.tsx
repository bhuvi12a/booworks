"use client"

import { Mail, Trash2, Eye, X } from "lucide-react"
import { useState } from "react"
import { deleteEnquiry } from "@/app/actions/contact-actions"

interface Enquiry {
    _id: string
    name: string
    email: string
    phone?: string
    subject?: string
    message: string
    createdAt: Date
}

export default function InboxClient({ enquiries }: { enquiries: Enquiry[] }) {
    const [selectedEnquiry, setSelectedEnquiry] = useState<Enquiry | null>(null)

    const handleDelete = async (id: string) => {
        if (confirm("Are you sure you want to delete this enquiry?")) {
            await deleteEnquiry(id)
        }
    }

    return (
        <>
            {/* Desktop Table View */}
            <div className="hidden lg:block bg-white dark:bg-card rounded-xl border border-border shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-muted/50 text-muted-foreground uppercase text-xs font-semibold">
                            <tr>
                                <th className="px-6 py-4">#</th>
                                <th className="px-6 py-4">Name</th>
                                <th className="px-6 py-4">Email</th>
                                <th className="px-6 py-4">Phone</th>
                                <th className="px-6 py-4">Subject</th>
                                <th className="px-6 py-4">Message</th>
                                <th className="px-6 py-4">Date</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {enquiries.length === 0 ? (
                                <tr>
                                    <td colSpan={8} className="px-6 py-12 text-center text-muted-foreground">
                                        <div className="flex flex-col items-center gap-3">
                                            <div className="p-3 rounded-full bg-muted">
                                                <Mail size={24} />
                                            </div>
                                            <p>No enquiries yet.</p>
                                        </div>
                                    </td>
                                </tr>
                            ) : (
                                enquiries.map((enquiry, index) => (
                                    <tr key={enquiry._id} className="hover:bg-muted/30 transition-colors">
                                        <td className="px-6 py-4 text-muted-foreground font-mono">{index + 1}</td>
                                        <td className="px-6 py-4 font-medium text-foreground">{enquiry.name}</td>
                                        <td className="px-6 py-4 text-muted-foreground">{enquiry.email}</td>
                                        <td className="px-6 py-4 text-muted-foreground">{enquiry.phone || '-'}</td>
                                        <td className="px-6 py-4">
                                            <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                                                {enquiry.subject || 'General'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-muted-foreground max-w-xs truncate" title={enquiry.message}>
                                            {enquiry.message}
                                        </td>
                                        <td className="px-6 py-4 text-muted-foreground text-xs" suppressHydrationWarning>
                                            {new Date(enquiry.createdAt).toLocaleDateString()}<br />
                                            {new Date(enquiry.createdAt).toLocaleTimeString()}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <button
                                                    onClick={() => setSelectedEnquiry(enquiry)}
                                                    className="text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/30 p-2 rounded-lg transition-colors"
                                                    title="View Full Message"
                                                >
                                                    <Eye size={16} />
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(enquiry._id)}
                                                    className="text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 p-2 rounded-lg transition-colors"
                                                    title="Delete Enquiry"
                                                >
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Mobile Card View */}
            <div className="lg:hidden space-y-4">
                {enquiries.length === 0 ? (
                    <div className="bg-white dark:bg-card rounded-xl border border-border p-12 text-center">
                        <div className="flex flex-col items-center gap-3 text-muted-foreground">
                            <div className="p-3 rounded-full bg-muted">
                                <Mail size={24} />
                            </div>
                            <p>No enquiries yet.</p>
                        </div>
                    </div>
                ) : (
                    enquiries.map((enquiry, index) => (
                        <div key={enquiry._id} className="bg-white dark:bg-card rounded-xl border border-border p-4 shadow-sm">
                            <div className="flex justify-between items-start mb-3">
                                <div className="flex-1">
                                    <div className="font-bold text-lg">{enquiry.name}</div>
                                    <div className="text-sm text-muted-foreground">{enquiry.email}</div>
                                </div>
                                <span className="text-xs font-mono text-muted-foreground">#{index + 1}</span>
                            </div>

                            <div className="space-y-2 mb-3">
                                {enquiry.phone && (
                                    <div className="text-sm">
                                        <span className="font-semibold">Phone:</span> {enquiry.phone}
                                    </div>
                                )}
                                <div className="text-sm">
                                    <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                                        {enquiry.subject || 'General'}
                                    </span>
                                </div>
                                <div className="text-sm text-muted-foreground line-clamp-2">
                                    {enquiry.message}
                                </div>
                                <div className="text-xs text-muted-foreground" suppressHydrationWarning>
                                    {new Date(enquiry.createdAt).toLocaleDateString()} at {new Date(enquiry.createdAt).toLocaleTimeString()}
                                </div>
                            </div>

                            <div className="flex gap-2 pt-3 border-t border-border">
                                <button
                                    onClick={() => setSelectedEnquiry(enquiry)}
                                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-50 text-blue-600 rounded-lg transition-colors hover:bg-blue-100"
                                >
                                    <Eye size={16} />
                                    <span className="text-sm font-medium">View</span>
                                </button>
                                <button
                                    onClick={() => handleDelete(enquiry._id)}
                                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-red-50 text-red-600 rounded-lg transition-colors hover:bg-red-100"
                                >
                                    <Trash2 size={16} />
                                    <span className="text-sm font-medium">Delete</span>
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* View Modal */}
            {selectedEnquiry && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedEnquiry(null)}>
                    <div className="bg-white dark:bg-card rounded-2xl p-8 max-w-2xl w-full shadow-2xl" onClick={(e) => e.stopPropagation()}>
                        <div className="flex justify-between items-start mb-6">
                            <h2 className="text-2xl font-bold">Enquiry Details</h2>
                            <button
                                onClick={() => setSelectedEnquiry(null)}
                                className="p-2 hover:bg-muted rounded-lg transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="text-sm font-semibold text-muted-foreground">Name</label>
                                <p className="text-lg font-medium">{selectedEnquiry.name}</p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-sm font-semibold text-muted-foreground">Email</label>
                                    <p className="font-medium">{selectedEnquiry.email}</p>
                                </div>
                                <div>
                                    <label className="text-sm font-semibold text-muted-foreground">Phone</label>
                                    <p className="font-medium">{selectedEnquiry.phone || 'Not provided'}</p>
                                </div>
                            </div>
                            <div>
                                <label className="text-sm font-semibold text-muted-foreground">Subject</label>
                                <p className="font-medium">{selectedEnquiry.subject || 'General Enquiry'}</p>
                            </div>
                            <div>
                                <label className="text-sm font-semibold text-muted-foreground">Message</label>
                                <p className="bg-muted/50 p-4 rounded-lg mt-2 whitespace-pre-wrap">{selectedEnquiry.message}</p>
                            </div>
                            <div>
                                <label className="text-sm font-semibold text-muted-foreground">Received</label>
                                <p className="font-medium" suppressHydrationWarning>
                                    {new Date(selectedEnquiry.createdAt).toLocaleDateString()} at {new Date(selectedEnquiry.createdAt).toLocaleTimeString()}
                                </p>
                            </div>
                        </div>

                        <div className="mt-6 flex gap-3 justify-end">
                            <button
                                onClick={() => setSelectedEnquiry(null)}
                                className="px-4 py-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors"
                            >
                                Close
                            </button>
                            <button
                                onClick={() => {
                                    handleDelete(selectedEnquiry._id)
                                    setSelectedEnquiry(null)
                                }}
                                className="px-4 py-2 bg-red-500 text-white hover:bg-red-600 rounded-lg transition-colors"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
