"use server"

import dbConnect from "@/lib/db"

export async function testMongoConnection() {
    try {
        console.log('🔍 Testing MongoDB connection...')
        await dbConnect()
        console.log('✅ Connection test successful!')
        return {
            success: true,
            message: 'MongoDB connection successful!'
        }
    } catch (error: any) {
        console.error('❌ Connection test failed:', error)
        return {
            success: false,
            message: error.message || 'Connection failed',
            error: error.toString()
        }
    }
}
