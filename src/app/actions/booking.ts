"use server";

import dbConnect from "@/lib/db";
import Booking from "@/lib/models/Booking";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const bookingSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email address"),
    date: z.string().min(1, "Date is required"),
    time: z.string().min(1, "Time is required"),
});

export async function bookCall(prevState: any, formData: FormData) {
    try {
        await dbConnect();

        const rawData = {
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            date: formData.get("date") as string,
            time: formData.get("time") as string,
        };

        const validation = bookingSchema.safeParse(rawData);

        if (!validation.success) {
            return {
                success: false,
                message: validation.error.issues[0].message,
            };
        }

        await Booking.create({
            ...rawData,
            date: new Date(rawData.date)
        });

        revalidatePath("/admin/bookings");

        return {
            success: true,
            message: "Booking confirmed! We'll be in touch shortly.",
        };
    } catch (error: any) {
        console.error("Booking error:", error);
        return {
            success: false,
            message: "Failed to book call. Please try again.",
        };
    }
}

export async function deleteBooking(id: string) {
    try {
        await dbConnect();
        await Booking.findByIdAndDelete(id);
        revalidatePath("/admin/bookings");
        return { success: true };
    } catch (error) {
        return { success: false, message: "Failed to delete booking" };
    }
}
