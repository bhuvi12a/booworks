"use server"

import { saveSubscriber, saveMessage } from "@/lib/store"
import { revalidatePath } from "next/cache"

export async function subscribeToNewsletter(prevState: any, formData: FormData) {
    const email = formData.get("email") as string
    if (!email || !email.includes("@")) {
        return { success: false, message: "Invalid email" }
    }

    await saveSubscriber(email)
    revalidatePath("/admin/inbox")
    return { success: true, message: "Subscribed successfully!" }
}

export async function submitContactForm(prevState: any, formData: FormData) {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    if (!email || !name || !message) {
        return { success: false, message: "Please fill in all required fields" }
    }

    await saveMessage({ name, email, subject, message })
    revalidatePath("/admin/inbox")
    return { success: true, message: "Message sent successfully!" }
}
