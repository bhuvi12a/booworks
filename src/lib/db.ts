import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

interface MongooseCache {
    conn: mongoose.Connection | null;
    promise: Promise<mongoose.Connection> | null;
}

declare global {
    var mongoose: MongooseCache;
}

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
            serverSelectionTimeoutMS: 10000, // 10 seconds
            connectTimeoutMS: 10000, // 10 seconds
        };

        console.log('🔌 Attempting to connect to MongoDB...');

        cached.promise = mongoose.connect(MONGODB_URI!, opts).then((mongoose) => {
            console.log('✅ MongoDB connected successfully');
            return mongoose.connection;
        }).catch((error) => {
            console.error('❌ MongoDB connection error:', error.message);
            throw error;
        });
    }

    try {
        cached.conn = await cached.promise;
    } catch (e) {
        cached.promise = null;
        console.error('❌ Failed to establish MongoDB connection:', e);
        throw e;
    }

    return cached.conn;
}

export default dbConnect;
