"use server"

import dbConnect from "@/lib/db"
import Contact from "@/lib/models/Contact"
import { revalidatePath } from "next/cache"

export async function deleteEnquiry(id: string) {
    try {
        await dbConnect()
        await Contact.findByIdAndDelete(id)
        revalidatePath("/admin/inbox")
        return { success: true, message: "Enquiry deleted" }
    } catch (error) {
        return { success: false, message: "Failed to delete enquiry" }
    }
}
