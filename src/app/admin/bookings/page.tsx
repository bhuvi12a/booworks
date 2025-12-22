import { Trash2, Calendar, Clock, User, Mail } from "lucide-react"
import dbConnect from "@/lib/db"
import Booking from "@/lib/models/Booking"
import { deleteBooking } from "@/app/actions/booking"

export default async function BookingsPage() {
    await dbConnect()
    const bookings = await Booking.find({}).sort({ date: 1, time: 1 }) // Sort by upcoming date

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Strategy Calls</h1>
                    <p className="text-muted-foreground mt-2">Manage upcoming strategy call appointments</p>
                </div>
                <div className="bg-primary/10 text-primary px-4 py-2 rounded-lg font-mono font-bold">
                    Total: {bookings.length}
                </div>
            </div>

            {/* Desktop Table View */}
            <div className="hidden lg:block bg-white dark:bg-card rounded-xl border border-border shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-muted/50 text-muted-foreground uppercase text-xs font-semibold">
                            <tr>
                                <th className="px-6 py-4">#</th>
                                <th className="px-6 py-4">Client Name</th>
                                <th className="px-6 py-4">Email</th>
                                <th className="px-6 py-4">Date</th>
                                <th className="px-6 py-4">Time</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {bookings.length === 0 ? (
                                <tr>
                                    <td colSpan={7} className="px-6 py-12 text-center text-muted-foreground">
                                        <div className="flex flex-col items-center gap-3">
                                            <div className="p-3 rounded-full bg-muted">
                                                <Calendar size={24} />
                                            </div>
                                            <p>No confirmed bookings yet.</p>
                                        </div>
                                    </td>
                                </tr>
                            ) : (
                                bookings.map((booking, index) => (
                                    <tr key={booking._id.toString()} className="hover:bg-muted/30 transition-colors">
                                        <td className="px-6 py-4 text-muted-foreground font-mono" suppressHydrationWarning>{index + 1}</td>
                                        <td className="px-6 py-4 font-medium text-foreground">{booking.name}</td>
                                        <td className="px-6 py-4 text-muted-foreground">{booking.email}</td>
                                        <td className="px-6 py-4 font-medium" suppressHydrationWarning>
                                            {new Date(booking.date).toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-1.5 px-2 py-1 bg-blue-50 text-blue-700 w-fit rounded-md text-xs font-semibold">
                                                <Clock size={12} />
                                                {booking.time}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                <span className="w-1.5 h-1.5 rounded-full bg-green-600"></span>
                                                Confirmed
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <form action={async () => {
                                                "use server"
                                                await deleteBooking(booking._id.toString())
                                            }}>
                                                <button
                                                    type="submit"
                                                    className="text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 p-2 rounded-lg transition-colors"
                                                    title="Cancel Booking"
                                                // Note: Ideally add client-side confirmation here
                                                >
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
            <div className="lg:hidden space-y-4">
                {bookings.length === 0 ? (
                    <div className="bg-white dark:bg-card rounded-xl border border-border p-12 text-center">
                        <div className="flex flex-col items-center gap-3 text-muted-foreground">
                            <div className="p-3 rounded-full bg-muted">
                                <Calendar size={24} />
                            </div>
                            <p>No bookings yet.</p>
                        </div>
                    </div>
                ) : (
                    bookings.map((booking, index) => (
                        <div key={booking._id.toString()} className="bg-white dark:bg-card rounded-xl border border-border p-5 shadow-sm">
                            <div className="flex justify-between items-start mb-4 border-b border-border pb-3">
                                <div>
                                    <div className="font-bold text-lg">{booking.name}</div>
                                    <div className="text-sm text-muted-foreground flex items-center gap-1 mt-0.5">
                                        <Mail size={12} /> {booking.email}
                                    </div>
                                </div>
                                <span className="text-xs font-mono text-muted-foreground">#{index + 1}</span>
                            </div>

                            <div className="grid grid-cols-2 gap-3 mb-4">
                                <div className="bg-muted/30 p-2 rounded-lg">
                                    <div className="text-xs text-muted-foreground mb-1 flex items-center gap-1"><Calendar size={12} /> Date</div>
                                    <div className="font-medium text-sm" suppressHydrationWarning>
                                        {new Date(booking.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                                    </div>
                                </div>
                                <div className="bg-muted/30 p-2 rounded-lg">
                                    <div className="text-xs text-muted-foreground mb-1 flex items-center gap-1"><Clock size={12} /> Time</div>
                                    <div className="font-medium text-sm text-primary">{booking.time}</div>
                                </div>
                            </div>

                            <form action={async () => {
                                "use server"
                                await deleteBooking(booking._id.toString())
                            }}>
                                <button type="submit" className="w-full flex items-center justify-center gap-2 px-3 py-3 bg-red-50 text-red-600 rounded-xl transition-colors hover:bg-red-100 font-medium border border-red-100">
                                    <Trash2 size={16} />
                                    Cancel Booking
                                </button>
                            </form>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}
