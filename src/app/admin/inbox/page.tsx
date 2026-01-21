import dbConnect from "@/lib/db"
import Contact from "@/lib/models/Contact"
import InboxClient from "./InboxClient"

// Force dynamic rendering to avoid MongoDB connection during build
export const dynamic = 'force-dynamic'

export default async function InboxPage() {
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
}
