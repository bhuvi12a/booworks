"use client"

import { useEffect, useState } from "react"
import { Clock } from "lucide-react"

export function LiveClock() {
    const [time, setTime] = useState<string | null>(null)

    useEffect(() => {
        const updateTime = () => {
            setTime(new Date().toLocaleTimeString(undefined, {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            }))
        }
        updateTime()
        const interval = setInterval(updateTime, 1000)
        return () => clearInterval(interval)
    }, [])

    if (!time) return null

    return (
        <span className="flex items-center gap-2 text-[10px] px-2 py-1 bg-primary/5 text-primary rounded-md border border-primary/20 font-mono">
            <Clock size={10} className="animate-pulse" />
            <span className="font-bold">LIVE:</span> {time}
        </span>
    )
}
