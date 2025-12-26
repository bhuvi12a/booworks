"use client"

import { motion } from "framer-motion"
import { Globe, Rocket, FileCode, Database, Briefcase, ShoppingBag } from "lucide-react"

const websiteTypes = [
    {
        icon: Globe,
        name: "Website Development",
        description: "Custom-built websites tailored to your business needs with modern design and functionality",
        badge: "Full-Stack",
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
    },
    {
        icon: Rocket,
        name: "Landing Pages",
        description: "High-converting landing pages optimized for campaigns and lead generation",
        badge: "Conversion-Focused",
        color: "text-purple-500",
        bgColor: "bg-purple-500/10",
    },
    {
        icon: FileCode,
        name: "Static Websites",
        description: "Fast, secure, and SEO-friendly static sites perfect for portfolios and business pages",
        badge: "Lightning Fast",
        color: "text-green-500",
        bgColor: "bg-green-500/10",
    },
    {
        icon: Database,
        name: "Dynamic Websites",
        description: "Interactive web applications with databases, user authentication, and real-time features",
        badge: "Feature-Rich",
        color: "text-orange-500",
        bgColor: "bg-orange-500/10",
    },
    {
        icon: Briefcase,
        name: "Portfolio Sites",
        description: "Stunning portfolio websites to showcase your work and attract clients",
        badge: "Creative Design",
        color: "text-pink-500",
        bgColor: "bg-pink-500/10",
    },
    {
        icon: ShoppingBag,
        name: "E-Commerce Sites",
        description: "Complete online stores with payment integration, inventory management, and analytics",
        badge: "Sales-Ready",
        color: "text-indigo-500",
        bgColor: "bg-indigo-500/10",
    },
]

export function StackedWebsiteCards() {
    return (
        <div className="w-full flex flex-col items-center">
            {/* Stacked Cards Container */}
            <div className="relative w-full max-w-[600px] h-[450px] flex items-center justify-center">
                {websiteTypes.map((type, index) => {
                    const Icon = type.icon

                    // Calculate positions for stacking
                    const translateX = index * 60
                    const translateY = index * 35
                    const zIndex = 60 - index * 10

                    return (
                        <motion.div
                            key={type.name}
                            initial={{ opacity: 0, scale: 0.8, y: 50 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="absolute"
                            style={{
                                zIndex,
                                transform: `translateX(${translateX}px) translateY(${translateY}px)`,
                            }}
                        >
                            <div
                                className={`
                                    group relative w-[350px] h-[160px] 
                                    rounded-2xl border-2 border-white/10
                                    bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg
                                    p-6 cursor-pointer select-none
                                    transition-all duration-500 ease-out
                                    hover:scale-105 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20
                                    hover:-translate-y-8 hover:z-[100]
                                    ${index > 2 ? 'grayscale-[0.8] hover:grayscale-0' : ''}
                                `}
                                style={{
                                    transform: 'skewY(-3deg)',
                                }}
                            >
                                {/* Overlay for back cards */}
                                {index > 2 && (
                                    <div className="absolute inset-0 rounded-2xl bg-background/50 group-hover:opacity-0 transition-opacity duration-500" />
                                )}

                                {/* Content */}
                                <div className="relative z-10 flex flex-col h-full justify-between">
                                    {/* Header */}
                                    <div className="flex items-center gap-3">
                                        <div className={`w-12 h-12 rounded-xl ${type.bgColor} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                            <Icon className={`w-6 h-6 ${type.color}`} />
                                        </div>
                                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                                            {type.name}
                                        </h3>
                                    </div>

                                    {/* Description */}
                                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                                        {type.description}
                                    </p>

                                    {/* Badge */}
                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 w-fit">
                                        <span className="text-xs font-semibold text-primary">
                                            {type.badge}
                                        </span>
                                    </div>
                                </div>

                                {/* Hover gradient effect */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            </div>
                        </motion.div>
                    )
                })}
            </div>

            {/* Hint */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-8 flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 backdrop-blur-sm border border-border/50 text-sm text-muted-foreground"
            >
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Hover over cards to explore
            </motion.div>
        </div>
    )
}
