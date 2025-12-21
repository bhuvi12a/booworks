import fs from 'fs/promises'
import path from 'path'

const DB_PATH = path.join(process.cwd(), 'data.json')

export interface Message {
    id: string
    name: string
    email: string
    subject: string
    message: string // Added message body
    date: string
    status: 'Read' | 'Unread'
}

export interface Subscriber {
    id: string
    email: string
    date: string
    status: 'Subscribed' | 'Unsubscribed'
}

export interface DBData {
    messages: Message[]
    subscribers: Subscriber[]
}

// Initialize DB if not exists
async function initDB() {
    try {
        await fs.access(DB_PATH)
    } catch {
        const initialData: DBData = {
            messages: [
                { id: "1", name: "Alice Smith (Demo)", email: "alice@example.com", subject: "Project Inquiry", message: "Hi, I'd like to discuss a project.", date: new Date().toLocaleDateString(), status: "Unread" }
            ],
            subscribers: [
                { id: "1", email: "demo@subscriber.com", date: new Date().toLocaleDateString(), status: "Subscribed" }
            ]
        }
        await fs.writeFile(DB_PATH, JSON.stringify(initialData, null, 2))
    }
}

export async function getDB(): Promise<DBData> {
    await initDB()
    const data = await fs.readFile(DB_PATH, 'utf-8')
    return JSON.parse(data)
}

export async function saveMessage(message: Omit<Message, 'id' | 'date' | 'status'>) {
    const db = await getDB()
    const newMessage: Message = {
        ...message,
        id: Math.random().toString(36).substring(7),
        date: new Date().toLocaleDateString(),
        status: 'Unread',
    }
    db.messages.unshift(newMessage)
    await fs.writeFile(DB_PATH, JSON.stringify(db, null, 2))
    return newMessage
}

export async function saveSubscriber(email: string) {
    const db = await getDB()
    // Check duplicates
    if (db.subscribers.some(s => s.email === email)) return false

    const newSubscriber: Subscriber = {
        id: Math.random().toString(36).substring(7),
        email,
        date: new Date().toLocaleDateString(),
        status: 'Subscribed',
    }
    db.subscribers.unshift(newSubscriber)
    await fs.writeFile(DB_PATH, JSON.stringify(db, null, 2))
    return newSubscriber
}

export async function deleteMessage(id: string) {
    const db = await getDB()
    db.messages = db.messages.filter(m => m.id !== id)
    await fs.writeFile(DB_PATH, JSON.stringify(db, null, 2))
}

export async function deleteSubscriber(id: string) {
    const db = await getDB()
    db.subscribers = db.subscribers.filter(s => s.id !== id)
    await fs.writeFile(DB_PATH, JSON.stringify(db, null, 2))
}

export async function updateMessageStatus(id: string, status: 'Read' | 'Unread') {
    const db = await getDB()
    const msg = db.messages.find(m => m.id === id)
    if (msg) {
        msg.status = status
        await fs.writeFile(DB_PATH, JSON.stringify(db, null, 2))
    }
}
