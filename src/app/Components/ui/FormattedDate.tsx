"use client"

import { useEffect, useState } from "react"

interface FormattedDateProps {
    date: Date | string
    includeTime?: boolean
    mode?: 'date' | 'time' | 'both'
    useUTC?: boolean
}

export function FormattedDate({ date, includeTime = true, mode = 'both', useUTC = false }: FormattedDateProps) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <span className="opacity-0">Loading...</span>
    }

    const d = new Date(date)
    const options: Intl.DateTimeFormatOptions = {
        timeZone: useUTC ? 'UTC' : undefined
    }

    if (mode === 'date') {
        return <>{d.toLocaleDateString(undefined, { ...options, weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })}</>
    }

    if (mode === 'time') {
        return <>{d.toLocaleTimeString(undefined, { ...options, hour: '2-digit', minute: '2-digit' })}</>
    }

    return (
        <>
            {d.toLocaleString(undefined, {
                ...options,
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            })}
        </>
    )
}
