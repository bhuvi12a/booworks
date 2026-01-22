import { Trash2, Mail } from "lucide-react"
import dbConnect from "@/lib/db"
import Newsletter from "@/lib/models/Newsletter"
import { deleteSubscriber } from "@/app/actions/newsletter-actions"
import { redirect } from "next/navigation"

// Force dynamic rendering to avoid MongoDB connection during build
export const dynamic = 'force-dynamic'

export default async function NewsletterPage() {
    try {
        await dbConnect()
        const subscribers = await Newsletter.find({}).sort({ createdAt: -1 })

        return (
            <div className="space-y-6">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent tracking-tight">Newsletter Subscribers</h1>
                        <p className="text-gray-400 mt-2">Manage your email subscription list</p>
                    </div>
                    <div className="bg-orange-500/20 text-orange-500 border border-orange-500/30 px-4 py-2 rounded-lg font-mono font-bold">
                        Total: {subscribers.length}
                    </div>
                </div>

                {/* Desktop Table View */}
                <div className="hidden md:block bg-gray-800/50 rounded-xl border border-gray-700 shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-gray-900/50 text-gray-400 uppercase text-xs font-semibold">
                                <tr>
                                    <th className="px-6 py-4">#</th>
                                    <th className="px-6 py-4">Email Address</th>
                                    <th className="px-6 py-4">Subscribed At</th>
                                    <th className="px-6 py-4 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                                {subscribers.length === 0 ? (
                                    <tr>
                                        <td colSpan={4} className="px-6 py-12 text-center text-muted-foreground">
                                            <div className="flex flex-col items-center gap-3">
                                                <div className="p-3 rounded-full bg-muted">
                                                    <Mail size={24} />
                                                </div>
                                                <p>No subscribers yet.</p>
                                            </div>
                                        </td>
                                    </tr>
                                ) : (
                                    subscribers.map((sub, index) => (
                                        <tr key={sub._id.toString()} className="hover:bg-muted/30 transition-colors">
                                            <td className="px-6 py-4 text-muted-foreground font-mono">{index + 1}</td>
                                            <td className="px-6 py-4 font-medium text-foreground">{sub.email}</td>
                                            <td className="px-6 py-4 text-muted-foreground" suppressHydrationWarning>
                                                {new Date(sub.createdAt).toLocaleDateString()} {new Date(sub.createdAt).toLocaleTimeString()}
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <form action={async () => {
                                                    "use server"
                                                    await deleteSubscriber(sub._id.toString())
                                                }}>
                                                    <button type="submit" className="text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 p-2 rounded-lg transition-colors" title="Delete Subscriber">
                                                        <Trash2 size={16} />
                                                    </button>
                                                </form>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Mobile Card View */}
                <div className="md:hidden space-y-3">
                    {subscribers.length === 0 ? (
                        <div className="bg-white dark:bg-card rounded-xl border border-border p-12 text-center">
                            <div className="flex flex-col items-center gap-3 text-muted-foreground">
                                <div className="p-3 rounded-full bg-muted">
                                    <Mail size={24} />
                                </div>
                                <p>No subscribers yet.</p>
                            </div>
                        </div>
                    ) : (
                        subscribers.map((sub, index) => (
                            <div key={sub._id.toString()} className="bg-white dark:bg-card rounded-xl border border-border p-4 shadow-sm">
                                <div className="flex justify-between items-start mb-2">
                                    <div className="flex-1">
                                        <div className="font-semibold text-foreground break-all">{sub.email}</div>
                                        <div className="text-xs text-muted-foreground mt-1" suppressHydrationWarning>
                                            {new Date(sub.createdAt).toLocaleDateString()} at {new Date(sub.createdAt).toLocaleTimeString()}
                                        </div>
                                    </div>
                                    <span className="text-xs font-mono text-muted-foreground ml-2">#{index + 1}</span>
                                </div>
                                <form action={async () => {
                                    "use server"
                                    await deleteSubscriber(sub._id.toString())
                                }} className="mt-3 pt-3 border-t border-border">
                                    <button type="submit" className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-red-50 text-red-600 rounded-lg transition-colors hover:bg-red-100">
                                        <Trash2 size={16} />
                                        <span className="text-sm font-medium">Delete</span>
                                    </button>
                                </form>
                            </div>
                        ))
                    )}
                </div>
            </div>
        )
    } catch (error) {
        console.error('Error loading newsletter subscribers:', error)
        return (
            <div className="space-y-6">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent tracking-tight">Newsletter Subscribers</h1>
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-8 text-center">
                    <p className="text-red-500 font-semibold mb-2">⚠️ Database Connection Error</p>
                    <p className="text-muted-foreground text-sm">
                        Unable to connect to the database. Please check your MongoDB connection settings and ensure your IP is whitelisted in MongoDB Atlas.
                    </p>
                </div>
            </div>
        )
    }
}
