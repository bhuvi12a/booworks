"use server"

import { deleteMessage, deleteSubscriber, updateMessageStatus } from "@/lib/store"
import { revalidatePath } from "next/cache"

export async function removeMessage(id: string) {
    await deleteMessage(id)
    revalidatePath("/admin/inbox")
}

export async function removeSubscriber(id: string) {
    await deleteSubscriber(id)
    revalidatePath("/admin/inbox")
}

export async function markMessageAsRead(id: string) {
    await updateMessageStatus(id, "Read")
    revalidatePath("/admin/inbox")
}
