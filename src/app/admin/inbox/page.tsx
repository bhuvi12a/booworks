import dbConnect from "@/lib/db"
import Contact from "@/lib/models/Contact"
import InboxClient from "./InboxClient"

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
                    <h1 className="text-3xl font-bold tracking-tight">Contact Enquiries</h1>
                    <p className="text-muted-foreground mt-2">Manage customer messages and enquiries</p>
                </div>
                <div className="bg-primary/10 text-primary px-4 py-2 rounded-lg font-mono font-bold">
                    Total: {plainEnquiries.length}
                </div>
            </div>

            <InboxClient enquiries={plainEnquiries} />
        </div>
    )
}
