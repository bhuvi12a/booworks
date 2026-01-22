import dbConnect from "@/lib/db"
import Contact from "@/lib/models/Contact"
import InboxClient from "./InboxClient"

// Force dynamic rendering to avoid MongoDB connection during build
export const dynamic = 'force-dynamic'

export default async function InboxPage() {
    try {
        await dbConnect()
        const enquiries = await Contact.find({}).sort({ createdAt: -1 }).lean()

        // Convert to plain objects for client component
        const plainEnquiries = enquiries.map(e => ({
            _id: e._id.toString(),
            name: e.name,
            email: e.email,
            phone: e.phone,
            subject: e.subject,
            message: e.message,
            createdAt: e.createdAt
        }))

        return (
            <div className="space-y-6">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent tracking-tight">Contact Enquiries</h1>
                        <p className="text-gray-400 mt-2">Manage customer messages and enquiries</p>
                    </div>
                    <div className="bg-orange-500/20 text-orange-500 border border-orange-500/30 px-4 py-2 rounded-lg font-mono font-bold">
                        Total: {plainEnquiries.length}
                    </div>
                </div>

                <InboxClient enquiries={plainEnquiries} />
            </div>
        )
    } catch (error) {
        console.error('Error loading enquiries:', error)
        return (
            <div className="space-y-6">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent tracking-tight">Contact Enquiries</h1>
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
