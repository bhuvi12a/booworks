import mongoose, { Schema, Document, Model } from 'mongoose';

export interface INewsletter extends Document {
    email: string;
    createdAt: Date;
}

// Check if model is already compiled to avoid hot-reload errors
const NewsletterSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
        },
    },
    {
        timestamps: true,
    }
);

const Newsletter: Model<INewsletter> =
    (mongoose.models.Newsletter as Model<INewsletter>) ||
    mongoose.model<INewsletter>('Newsletter', NewsletterSchema);

export default Newsletter;
