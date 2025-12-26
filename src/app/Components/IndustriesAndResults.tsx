"use client"

import { motion } from "framer-motion"
import { TrendingUp } from "lucide-react"
import { StackedWebsiteCards } from "./StackedWebsiteCards"

const results = [
    { metric: "5M+", label: "Revenue Generated", icon: "💰" },
    { metric: "200+", label: "Happy Clients", icon: "🎯" },
    { metric: "350%", label: "Average ROI", icon: "📈" },
    { metric: "12M+", label: "Leads Delivered", icon: "🚀" },
]

export function IndustriesAndResults() {
    return (
        <section className="py-24 bg-transparent relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary/10 via-blue-500/5 to-transparent rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Results Section */}
                <div className="mb-24">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-semibold text-primary mb-6"
                        >
                            <TrendingUp className="w-4 h-4" />
                            Proven Results
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
                        >
                            Numbers That{" "}
                            <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                                Speak Volumes
                            </span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-muted-foreground text-lg leading-relaxed"
                        >
                            Real results from real campaigns. Here's what we've achieved for businesses in Krishnagiri, Hosur, and beyond.
                        </motion.p>
                    </div>

                    {/* Results Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                        {results.map((result, index) => (
                            <motion.div
                                key={result.label}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-center hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 group"
                            >
                                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                                    {result.icon}
                                </div>
                                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                                    {result.metric}
                                </div>
                                <div className="text-sm text-muted-foreground font-medium">
                                    {result.label}
                                </div>
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Website Development Types Section */}
                <div>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
                        >
                            Websites We{" "}
                            <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                                Build
                            </span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-muted-foreground text-lg leading-relaxed"
                        >
                            From simple landing pages to complex web applications, we create stunning websites that drive results.
                        </motion.p>
                    </div>

                    {/* Stacked Cards Display */}
                    <StackedWebsiteCards />
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <p className="text-muted-foreground text-lg mb-4">
                        Need a custom solution? We've got you covered.
                    </p>
                    <p className="text-sm text-muted-foreground">
                        Our expert developers can build any type of website tailored to your unique requirements.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
