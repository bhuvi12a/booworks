"use client"

import { motion } from "framer-motion"
import { Search, Lightbulb, Rocket, BarChart3, RefreshCw } from "lucide-react"

const processSteps = [
    {
        number: "01",
        icon: Search,
        title: "Discovery & Research",
        description: "We dive deep into your business, competitors, and target audience to understand what drives results in your market.",
        highlights: ["Market Analysis", "Competitor Research", "Audience Profiling"],
    },
    {
        number: "02",
        icon: Lightbulb,
        title: "Strategy Development",
        description: "Custom digital marketing strategy tailored to your goals, budget, and timeline with clear KPIs and milestones.",
        highlights: ["Goal Setting", "Channel Selection", "Budget Planning"],
    },
    {
        number: "03",
        icon: Rocket,
        title: "Campaign Launch",
        description: "Rapid deployment of campaigns across chosen channels with precision targeting and compelling creative assets.",
        highlights: ["Content Creation", "Ad Setup", "Landing Pages"],
    },
    {
        number: "04",
        icon: BarChart3,
        title: "Monitor & Optimize",
        description: "Continuous tracking and optimization based on real-time data to maximize ROI and campaign performance.",
        highlights: ["A/B Testing", "Performance Tracking", "ROI Analysis"],
    },
    {
        number: "05",
        icon: RefreshCw,
        title: "Scale & Repeat",
        description: "Double down on what works, eliminate what doesn't, and scale successful campaigns for exponential growth.",
        highlights: ["Scaling Winners", "Budget Reallocation", "Continuous Improvement"],
    },
]

export function OurProcess() {
    return (
        <section className="py-24 bg-transparent relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-semibold text-primary mb-6"
                    >
                        <Rocket className="w-4 h-4" />
                        Our Process
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
                    >
                        From Strategy to{" "}
                        <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                            Scalable Success
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground text-lg leading-relaxed"
                    >
                        Our proven 5-step methodology ensures every campaign is data-driven, results-focused, and optimized for maximum ROI.
                    </motion.p>
                </div>

                {/* Process Steps */}
                <div className="relative max-w-6xl mx-auto">
                    {/* Connection Line */}
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-y-1/2" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                        {processSteps.map((step, index) => {
                            const Icon = step.icon
                            return (
                                <motion.div
                                    key={step.number}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative group"
                                >
                                    {/* Card */}
                                    <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 h-full">
                                        {/* Step Number */}
                                        <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                                            {step.number}
                                        </div>

                                        {/* Icon */}
                                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                            <Icon className="w-6 h-6 text-primary" />
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-lg font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                                            {step.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                            {step.description}
                                        </p>

                                        {/* Highlights */}
                                        <div className="space-y-1.5">
                                            {step.highlights.map((highlight, i) => (
                                                <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                                                    <div className="w-1 h-1 rounded-full bg-primary" />
                                                    {highlight}
                                                </div>
                                            ))}
                                        </div>

                                        {/* Hover Gradient */}
                                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>

                {/* Bottom Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center"
                >
                    <div className="inline-flex flex-wrap gap-8 justify-center items-center px-8 py-6 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary mb-1">14 Days</div>
                            <div className="text-sm text-muted-foreground">Average Launch Time</div>
                        </div>
                        <div className="hidden md:block w-px h-12 bg-border" />
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                            <div className="text-sm text-muted-foreground">Campaign Monitoring</div>
                        </div>
                        <div className="hidden md:block w-px h-12 bg-border" />
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary mb-1">Weekly</div>
                            <div className="text-sm text-muted-foreground">Performance Reports</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
