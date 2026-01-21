"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"

// Create array of logos for seamless scrolling - all client logos
const clientLogos = [
    { src: "/clients/sarvam-white.png", alt: "Sarvam Builders & Realtors", width: 180, height: 60 },
    { src: "/clients/primecraft-logo.png", alt: "Prime Craft Interiors and Signages", width: 220, height: 90 },
    { src: "/clients/samuthra-logo.png", alt: "Samuthra Arihanth Homes", width: 270, height: 75 },
    { src: "/clients/empire-toyz-logo.png", alt: "Empire Toyz", width: 240, height: 75 },
    { src: "/clients/dumpling-monkey-logo.png", alt: "Dumpling Monkey", width: 150, height: 150 },
    { src: "/clients/iconic-innovative-logo.png", alt: "Iconic Innovative Solutions", width: 210, height: 105 },
    { src: "/clients/cloud-it-logo.png", alt: "Cloud IT Solution", width: 220, height: 105 },
    { src: "/clients/btl-engineering-logo.png", alt: "BTL Engineering", width: 220, height: 90 },
    { src: "/clients/fielduo-logo.png", alt: "Fielduo", width: 180, height: 75 },
]

export function Clients() {
    return (
        <section className="py-20 bg-gradient-to-b from-background via-muted/30 to-background overflow-hidden relative">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5" />

            <div className="container mx-auto px-6 mb-12 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">
                        OUR CLIENTS
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Loved by <span className="text-primary">Industry Leaders</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        We're proud to partner with innovative companies across various industries
                    </p>
                </motion.div>
            </div>

            <div className="relative">
                {/* Enhanced gradients for fade effect */}
                <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-background via-background to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-background via-background to-transparent z-10" />

                <motion.div
                    className="flex gap-8 items-center"
                    animate={{
                        x: ["0%", "-50%"],
                    }}
                    transition={{
                        duration: 30,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    {[...clientLogos, ...clientLogos].map((logo, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 group"
                        >
                            <div className="bg-white dark:bg-card rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-border/50 hover:border-primary/50 hover:scale-105 min-w-[200px] md:min-w-[280px] h-[140px] md:h-[180px] flex items-center justify-center">
                                <Image
                                    src={logo.src}
                                    alt={logo.alt}
                                    width={logo.width}
                                    height={logo.height}
                                    className="object-contain max-w-full max-h-full opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                                />
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Stats section */}
            <div className="container mx-auto px-6 mt-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                    <div className="text-center">
                        <h3 className="text-3xl md:text-4xl font-bold text-primary mb-1">9+</h3>
                        <p className="text-sm text-muted-foreground">Happy Clients</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-3xl md:text-4xl font-bold text-primary mb-1">50+</h3>
                        <p className="text-sm text-muted-foreground">Projects Done</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-3xl md:text-4xl font-bold text-primary mb-1">100%</h3>
                        <p className="text-sm text-muted-foreground">Satisfaction</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-3xl md:text-4xl font-bold text-primary mb-1">24/7</h3>
                        <p className="text-sm text-muted-foreground">Support</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
