"use client"

import React from "react"
import { motion } from "framer-motion"
import { Camera, Search, BarChart, Megaphone, ArrowUpRight } from "lucide-react"

const services = [
    {
        title: "Social Media Management",
        description: "Build brand, engage audiences, and drive growth across platforms.",
        icon: Camera,
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
    },
    {
        title: "Search Engine Optimization",
        description: "Drive organic traffic, and improve search rankings for lasting results.",
        icon: Search,
        color: "text-purple-500",
        bgColor: "bg-purple-500/10",
    },
    {
        title: "Performance Marketing & Web Dev",
        description: "Cross channel support to Maximize ROI and reach targeted audiences effectively.",
        icon: BarChart,
        color: "text-indigo-500",
        bgColor: "bg-indigo-500/10",
    },
    {
        title: "Public Relations",
        description: "Maintain a positive brand image through strategic and impactful storytelling.",
        icon: Megaphone,
        color: "text-rose-500",
        bgColor: "bg-rose-500/10",
    },
]

export function Services() {
    return (
        <section className="py-24 bg-secondary/30 relative overflow-hidden" id="services">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-foreground"
                    >
                        Delivering measurable and impactful results through our <span className="text-primary italic">expertise</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground text-lg leading-relaxed"
                    >
                        Focused on delivering strategic solutions that drive growth and maximize brand impact. Our approach combines expertise with insight, helping you reach your goals with clarity and measurable success.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => {
                        const Icon = service.icon
                        return (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="group relative bg-background rounded-2xl p-8 border border-border shadow-sm hover:shadow-xl transition-all duration-300"
                            >
                                <div className={`w-14 h-14 rounded-2xl ${service.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon className={`w-7 h-7 ${service.color}`} />
                                </div>

                                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>

                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    {service.description}
                                </p>

                                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
                                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                                        <ArrowUpRight size={20} />
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
