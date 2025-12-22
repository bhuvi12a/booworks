import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IContact extends Document {
    name: string;
    email: string;
    phone?: string;
    subject?: string;
    message: string;
    isRead: boolean;
    createdAt: Date;
}

const ContactSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
        },
        phone: {
            type: String,
            trim: true,
        },
        subject: {
            type: String,
            trim: true,
        },
        message: {
            type: String,
            required: true,
        },
        isRead: {
            type: Boolean,
            default: false,
        }
    },
    {
        timestamps: true,
    }
);

const Contact: Model<IContact> =
    (mongoose.models.Contact as Model<IContact>) ||
    mongoose.model<IContact>('Contact', ContactSchema);

export default Contact;
