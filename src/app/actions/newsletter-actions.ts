"use server"

import dbConnect from "@/lib/db"
import Newsletter from "@/lib/models/Newsletter"
import { revalidatePath } from "next/cache"

export async function deleteSubscriber(id: string) {
    try {
        await dbConnect()
        await Newsletter.findByIdAndDelete(id)
        revalidatePath("/admin/newsletter")
        return { success: true, message: "Subscriber deleted" }
    } catch (error) {
        return { success: false, message: "Failed to delete subscriber" }
    }
}
