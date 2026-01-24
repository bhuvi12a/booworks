const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const path = require('path');
const fs = require('fs');

// Load environment variables from .env.local
const envPath = path.resolve(__dirname, '../.env.local');
if (fs.existsSync(envPath)) {
    const envConfig = require('dotenv').parse(fs.readFileSync(envPath));
    for (const k in envConfig) {
        process.env[k] = envConfig[k];
    }
}

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    console.error('Error: MONGODB_URI is not defined in .env.local');
    process.exit(1);
}

const UserSchema = new mongoose.Schema(
    {
        email: { type: String, required: true, unique: true, lowercase: true },
        password: { type: String, required: false },
        name: { type: String, required: false },
        role: { type: String, enum: ['user', 'admin'], default: 'user' },
    },
    { timestamps: true }
);

const User = mongoose.models.User || mongoose.model('User', UserSchema);

async function createAdmin() {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('Connected to MongoDB');

        const email = 'admin@booworks.com';
        const password = 'admin123';
        const hashedPassword = await bcrypt.hash(password, 10);

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            console.log(`User ${email} already exists. Updating password...`);
            existingUser.password = hashedPassword;
            existingUser.role = 'admin'; // Ensure admin role
            await existingUser.save();
            console.log('Password updated to: admin123');
        } else {
            console.log(`Creating new admin user: ${email}`);
            await User.create({
                email,
                password: hashedPassword,
                name: 'Admin User',
                role: 'admin',
            });
            console.log('Admin user created successfully.');
        }

        console.log('Credentials:');
        console.log('Email: admin@booworks.com');
        console.log('Password: admin123');

    } catch (error) {
        console.error('Error creating admin user:', error);
    } finally {
        await mongoose.disconnect();
    }
}

createAdmin();
