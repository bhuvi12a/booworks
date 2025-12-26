"use client"

import { motion } from "framer-motion"
import { Globe, Rocket, FileCode, Database, Briefcase, ShoppingBag, TrendingUp } from "lucide-react"

const industries = [
    {
        icon: Globe,
        name: "Website Development",
        description: "Custom-built websites tailored to your business needs with modern design and functionality",
        growth: "Full-Stack",
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
    },
    {
        icon: Rocket,
        name: "Landing Pages",
        description: "High-converting landing pages optimized for campaigns and lead generation",
        growth: "Conversion-Focused",
        color: "text-purple-500",
        bgColor: "bg-purple-500/10",
    },
    {
        icon: FileCode,
        name: "Static Websites",
        description: "Fast, secure, and SEO-friendly static sites perfect for portfolios and business pages",
        growth: "Lightning Fast",
        color: "text-green-500",
        bgColor: "bg-green-500/10",
    },
    {
        icon: Database,
        name: "Dynamic Websites",
        description: "Interactive web applications with databases, user authentication, and real-time features",
        growth: "Feature-Rich",
        color: "text-orange-500",
        bgColor: "bg-orange-500/10",
    },
    {
        icon: Briefcase,
        name: "Portfolio Sites",
        description: "Stunning portfolio websites to showcase your work and attract clients",
        growth: "Creative Design",
        color: "text-pink-500",
        bgColor: "bg-pink-500/10",
    },
    {
        icon: ShoppingBag,
        name: "E-Commerce Sites",
        description: "Complete online stores with payment integration, inventory management, and analytics",
        growth: "Sales-Ready",
        color: "text-indigo-500",
        bgColor: "bg-indigo-500/10",
    },
]

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

                    {/* Industries Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {industries.map((industry, index) => {
                            const Icon = industry.icon
                            return (
                                <motion.div
                                    key={industry.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
                                >
                                    {/* Icon */}
                                    <div className={`w-12 h-12 rounded-2xl ${industry.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon className={`w-6 h-6 ${industry.color}`} />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                                        {industry.name}
                                    </h3>
                                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                                        {industry.description}
                                    </p>

                                    {/* Growth Badge */}
                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                                        <span className="text-xs font-semibold text-primary">
                                            {industry.growth}
                                        </span>
                                    </div>

                                    {/* Hover Gradient */}
                                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                                </motion.div>
                            )
                        })}
                    </div>
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
