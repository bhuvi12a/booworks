"use server"

import dbConnect from "@/lib/db"
import Newsletter from "@/lib/models/Newsletter"
import Contact from "@/lib/models/Contact"
import { revalidatePath } from "next/cache"
import { z } from "zod"

// Zod schemas for validation
const NewsletterSchema = z.object({
    email: z.string().email("Invalid email address"),
})

const ContactSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().optional(),
    subject: z.string().optional(),
    message: z.string().min(10, "Message must be at least 10 characters"),
})

export async function subscribeToNewsletter(prevState: any, formData: FormData) {
    try {
        const email = formData.get("email") as string

        const validation = NewsletterSchema.safeParse({ email })

        if (!validation.success) {
            return {
                success: false,
                message: validation.error.issues[0].message,
            }
        }

        await dbConnect()

        // Check if already subscribed
        const existing = await Newsletter.findOne({ email })
        if (existing) {
            return {
                success: false,
                message: "This email is already subscribed!",
            }
        }

        await Newsletter.create({ email })

        revalidatePath("/admin/newsletter") // Revalidate admin page so new sub appears

        return {
            success: true,
            message: "Successfully subscribed!",
        }
    } catch (error: any) {
        console.error("Newsletter Error:", error)
        return {
            success: false,
            message: "Something went wrong. Please try again.",
        }
    }
}

export async function submitContact(prevState: any, formData: FormData) {
    try {
        const data = {
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            phone: formData.get("phone") as string,
            subject: formData.get("subject") as string,
            message: formData.get("message") as string,
        }

        const validation = ContactSchema.safeParse(data)

        if (!validation.success) {
            return {
                success: false,
                message: validation.error.issues[0].message
            }
        }

        await dbConnect()

        await Contact.create(data)

        revalidatePath("/admin/inbox")

        return {
            success: true,
            message: "Message sent successfully! We'll get back to you soon."
        }

    } catch (error: any) {
        console.error("Contact Error:", error)
        return {
            success: false,
            message: "Failed to send message. Please try again."
        }
    }
}
