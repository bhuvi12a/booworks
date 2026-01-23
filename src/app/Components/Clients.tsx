"use client"

import React, { useState } from "react"
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
    { src: "/clients/siddha-ayurveda-logo.png", alt: "Traditional Siddha Ayurveda Clinic", width: 200, height: 200 },
]

export default function Clients() {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <section className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-hidden relative">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
                backgroundSize: '50px 50px'
            }} />

            <div className="container mx-auto px-6 mb-12 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-2">
                        OUR CLIENTS
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                        Loved by <span className="text-blue-400">Industry Leaders</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Hover over our logo to see our amazing clients
                    </p>
                </motion.div>
            </div>

            {/* Flower Structure - Hover Interaction */}
            <div className="relative h-[500px] sm:h-[600px] md:h-[650px] w-full flex items-center justify-center">
                <div className="relative w-full h-full max-w-6xl mx-auto">

                    {/* Center - BooWorks Logo (Flower Center / Hover Trigger) */}
                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        onTouchStart={() => setIsHovered(true)}
                        onTouchEnd={() => setTimeout(() => setIsHovered(false), 3000)}
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full bg-gradient-to-br from-blue-500/20 via-blue-600/10 to-transparent backdrop-blur-md border-4 border-blue-500/50 flex items-center justify-center shadow-[0_0_50px_rgba(59,130,246,0.3)] cursor-pointer hover:border-blue-400/70 active:border-blue-400/70 transition-all relative"
                        >
                            {/* Pulse ring effect */}
                            <motion.div
                                className="absolute inset-0 rounded-full border-2 border-blue-400/40"
                                animate={{
                                    scale: [1, 1.3, 1],
                                    opacity: [0.6, 0, 0.6],
                                }}
                                transition={{
                                    duration: 2.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                            <img
                                src="/bw-logo-dark.png"
                                alt="BooWorks - Hover to reveal clients"
                                className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain drop-shadow-2xl relative z-10"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 1 }}
                            animate={{ opacity: isHovered ? 0 : 1 }}
                            transition={{ duration: 0.3 }}
                            className="absolute top-full mt-4 sm:mt-6 left-1/2 -translate-x-1/2 text-xs sm:text-sm text-gray-400 flex items-center gap-2 whitespace-nowrap px-4"
                        >
                            <span className="animate-pulse">👆</span>
                            <span className="hidden sm:inline">Hover to reveal our clients</span>
                            <span className="sm:hidden">Tap to reveal our clients</span>
                        </motion.div>
                    </div>

                    {/* Client Logo Petals - Positioned around center */}
                    {clientLogos.map((logo, index) => {
                        // Calculate angle starting from top and going clockwise
                        const angleOffset = -90 // Start from top
                        const angleDegrees = angleOffset + (index * 360) / clientLogos.length
                        const angleRadians = (angleDegrees * Math.PI) / 180

                        // Distance from center (radius) - responsive
                        const radiusMobile = 160 // Mobile radius
                        const radiusTablet = 200 // Tablet radius
                        const radiusDesktop = 260 // Desktop radius

                        // Use different radius based on screen size
                        const isMobile = typeof window !== 'undefined' && window.innerWidth < 640
                        const isTablet = typeof window !== 'undefined' && window.innerWidth >= 640 && window.innerWidth < 1024
                        const radius = isMobile ? radiusMobile : isTablet ? radiusTablet : radiusDesktop

                        // Calculate X and Y positions
                        const x = radius * Math.cos(angleRadians)
                        const y = radius * Math.sin(angleRadians)

                        // Circle size based on screen
                        const circleSizeMobile = 45 // Half of 90px
                        const circleSizeTablet = 50 // Half of 100px
                        const circleSizeDesktop = 60 // Half of 120px
                        const circleOffset = isMobile ? -circleSizeMobile : isTablet ? -circleSizeTablet : -circleSizeDesktop

                        return (
                            <motion.div
                                key={index}
                                className="absolute top-1/2 left-1/2"
                                initial={{
                                    x: circleOffset,
                                    y: circleOffset,
                                    scale: 0,
                                    opacity: 0
                                }}
                                animate={{
                                    x: isHovered ? x + circleOffset : circleOffset,
                                    y: isHovered ? y + circleOffset : circleOffset,
                                    scale: isHovered ? 1 : 0,
                                    opacity: isHovered ? 1 : 0,
                                }}
                                transition={{
                                    duration: 0.6,
                                    delay: isHovered ? index * 0.07 : 0,
                                    ease: [0.34, 1.56, 0.64, 1],
                                }}
                            >
                                <div className="w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] lg:w-[130px] lg:h-[130px] rounded-full bg-gradient-to-br from-gray-700/60 via-gray-800/70 to-gray-900/80 backdrop-blur-sm border-2 border-blue-500/30 flex items-center justify-center hover:scale-110 active:scale-110 hover:border-blue-400/60 active:border-blue-400/60 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300 p-3 sm:p-4 md:p-5">
                                    <img
                                        src={logo.src}
                                        alt={logo.alt}
                                        className="object-contain max-w-full max-h-full opacity-90 hover:opacity-100 transition-opacity"
                                    />
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>

            {/* Stats section */}
            <div className="container mx-auto px-6 mt-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                    <div className="text-center">
                        <h3 className="text-3xl md:text-4xl font-bold text-blue-400 mb-1">9+</h3>
                        <p className="text-sm text-gray-400">Happy Clients</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-3xl md:text-4xl font-bold text-blue-400 mb-1">50+</h3>
                        <p className="text-sm text-gray-400">Projects Done</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-3xl md:text-4xl font-bold text-blue-400 mb-1">100%</h3>
                        <p className="text-sm text-gray-400">Satisfaction</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-3xl md:text-4xl font-bold text-blue-400 mb-1">24/7</h3>
                        <p className="text-sm text-gray-400">Support</p>
                    </div>
                </div>
            </div>
        </section>
    )
}