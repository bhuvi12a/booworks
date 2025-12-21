"use client"

import React from "react"
import { motion } from "framer-motion"

const clients = [
    { name: "Manipal ProLearn", color: "text-orange-500" },
    { name: "IBM", color: "text-blue-600" },
    { name: "RiverSoft", color: "text-blue-500" },
    { name: "Third Wave Coffee", color: "text-stone-700" },
    { name: "The Little Gym", color: "text-sky-500" },
    { name: "House of Quadri", color: "text-gray-800" },
    // Duplicate for seamless loop
    { name: "Manipal ProLearn", color: "text-orange-500" },
    { name: "IBM", color: "text-blue-600" },
    { name: "RiverSoft", color: "text-blue-500" },
    { name: "Third Wave Coffee", color: "text-stone-700" },
    { name: "The Little Gym", color: "text-sky-500" },
    { name: "House of Quadri", color: "text-gray-800" },
]

export function Clients() {
    return (
        <section className="py-12 border-y border-border/40 bg-muted/20 overflow-hidden relative">
            <div className="container mx-auto px-6 mb-8 text-center">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                    Trusted by Innovative Companies
                </p>
            </div>

            <div className="relative flex overflow-hidden">
                {/* Gradients for smooth fade effect at edges */}
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

                <motion.div
                    className="flex gap-16 items-center px-4"
                    animate={{
                        x: ["0%", "-50%"],
                    }}
                    transition={{
                        duration: 20,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    {[...clients, ...clients].map((client, index) => (
                        <div
                            key={index}
                            className={`text-2xl md:text-3xl font-bold whitespace-nowrap opacity-70 hover:opacity-100 transition-opacity cursor-pointer ${client.color}`}
                        >
                            {client.name}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
