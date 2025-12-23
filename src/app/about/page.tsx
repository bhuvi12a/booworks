"use client"

import { motion } from "framer-motion"
import { Users, Target, Zap, Award } from "lucide-react"

export default function AboutPage() {
    return (
        <main className="min-h-screen pt-24 pb-12 px-6">
            <div className="container mx-auto max-w-5xl">

                {/* Header Section */}
                <div className="text-center mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
                    >
                        We Are <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">Booworks</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-muted-foreground max-w-2xl mx-auto"
                    >
                        A new generation digital growth agency blending data precision with creative brilliance.
                    </motion.p>
                </div>

                {/* Mission Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl"
                    >
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                            <Target size={24} />
                        </div>
                        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            To empower ambitious brands with the digital infrastructure they need to dominate their markets. We don't just run ads; we build revenue engines that scale predictably.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl"
                    >
                        <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 text-blue-500">
                            <Zap size={24} />
                        </div>
                        <h2 className="text-2xl font-bold mb-4">Our Philosophy</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Speed and precision. In the digital age, being first matters, but being right matters more. We obsess over data to ensure every creative decision is backed by solid ROI potential.
                        </p>
                    </motion.div>
                </div>

                {/* The "Why Us" Section */}
                <div className="relative overflow-hidden rounded-[2.5rem] bg-white/5 border border-white/10 p-8 md:p-12 text-center mb-24">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-12 relative z-10"
                    >
                        The Results Speak For Themselves
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                        {[
                            { label: "Revenue Generated", value: "$5M+", icon: Award },
                            { label: "Active Clients", value: "200+", icon: Users },
                            { label: "Campaign ROI", value: "350%", icon: Zap },
                        ].map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/20 transition-colors"
                            >
                                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Team / Culture Teaser */}
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-6">Ready to Scale?</h2>
                    <p className="text-muted-foreground mb-8">Join the hundreds of brands rewriting their growth story with us.</p>
                    {/* Add CTA button if needed, or leave for the footer as is common */}
                </div>
            </div>
        </main>
    )
}
