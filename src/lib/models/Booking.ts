import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name"],
        maxlength: [60, "Name cannot be more than 60 characters"],
    },
    email: {
        type: String,
        required: [true, "Please provide an email"],
    },
    date: {
        type: Date,
        required: [true, "Please provide a date"],
    },
    time: {
        type: String,
        required: [true, "Please provide a time slot"],
    },
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'cancelled'],
        default: 'pending',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.models.Booking || mongoose.model("Booking", BookingSchema);
