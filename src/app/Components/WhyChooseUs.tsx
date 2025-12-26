"use client"

import { motion } from "framer-motion"
import { Target, Zap, TrendingUp, Shield, Award, Users2 } from "lucide-react"

const benefits = [
    {
        icon: Target,
        title: "Data-Driven Strategies",
        description: "Every campaign is backed by deep analytics and market research to ensure maximum ROI and measurable results.",
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
    },
    {
        icon: Zap,
        title: "Rapid Execution",
        description: "Fast-paced implementation with agile methodologies. We move quickly without compromising quality or strategy.",
        color: "text-purple-500",
        bgColor: "bg-purple-500/10",
    },
    {
        icon: TrendingUp,
        title: "Proven Track Record",
        description: "200+ successful campaigns with an average 350% ROI. Our results speak louder than promises.",
        color: "text-green-500",
        bgColor: "bg-green-500/10",
    },
    {
        icon: Shield,
        title: "Transparent Reporting",
        description: "Real-time dashboards and weekly reports. You'll always know exactly how your campaigns are performing.",
        color: "text-orange-500",
        bgColor: "bg-orange-500/10",
    },
    {
        icon: Award,
        title: "Industry Expertise",
        description: "Specialized knowledge across e-commerce, SaaS, healthcare, education, and local businesses.",
        color: "text-pink-500",
        bgColor: "bg-pink-500/10",
    },
    {
        icon: Users2,
        title: "Dedicated Support",
        description: "Your success is our mission. Get a dedicated account manager and 24/7 support for all your needs.",
        color: "text-indigo-500",
        bgColor: "bg-indigo-500/10",
    },
]

export function WhyChooseUs() {
    return (
        <section className="py-24 bg-transparent relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-semibold text-primary mb-6"
                    >
                        <Award className="w-4 h-4" />
                        Why Booworks
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
                    >
                        Your Growth Partner in{" "}
                        <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                            Digital Success
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground text-lg leading-relaxed"
                    >
                        We don't just run campaigns—we build revenue engines. Here's why businesses in Krishnagiri and Hosur trust us with their digital growth.
                    </motion.p>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon
                        return (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
                            >
                                {/* Icon */}
                                <div className={`w-14 h-14 rounded-2xl ${benefit.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon className={`w-7 h-7 ${benefit.color}`} />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                                    {benefit.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {benefit.description}
                                </p>

                                {/* Hover Gradient */}
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                            </motion.div>
                        )
                    })}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <p className="text-muted-foreground text-lg mb-6">
                        Ready to experience the Booworks difference?
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <div className="px-6 py-3 rounded-full bg-secondary/50 backdrop-blur-sm border border-border/50 text-sm font-medium">
                            ⚡ Fast Turnaround
                        </div>
                        <div className="px-6 py-3 rounded-full bg-secondary/50 backdrop-blur-sm border border-border/50 text-sm font-medium">
                            📊 Data-Driven
                        </div>
                        <div className="px-6 py-3 rounded-full bg-secondary/50 backdrop-blur-sm border border-border/50 text-sm font-medium">
                            🎯 Results-Focused
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
