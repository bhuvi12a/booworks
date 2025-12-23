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

interface ServicesProps {
    isPage?: boolean
}

export function Services({ isPage = false }: ServicesProps) {
    const [isExpanded, setIsExpanded] = React.useState(isPage);

    // Auto-collapse after 25 seconds (only if not a dedicated page)
    React.useEffect(() => {
        if (isPage) return; // Keep expanded on dedicated page

        let timer: NodeJS.Timeout;
        if (isExpanded) {
            timer = setTimeout(() => {
                setIsExpanded(false);
            }, 25000); // 25 seconds
        }
        return () => clearTimeout(timer);
    }, [isExpanded, isPage]);

    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <section className={`py-24 bg-transparent relative overflow-hidden flex flex-col items-center ${isPage ? 'min-h-screen' : 'min-h-[800px]'}`} id="services">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-foreground bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70"
                    >
                        Our <span className="text-primary italic">Services</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto"
                    >
                        {isPage
                            ? "Comprehensive digital marketing solutions tailored to scale your brand and dominate the market."
                            : "Delivering strategic impact through our specialized expertise."}
                    </motion.p>
                </div>

                {/* Stacked Cards Container */}
                <div className="w-full max-w-[1200px] flex items-center justify-center">
                    {isMobile || isPage ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                            {services.map((service, index) => {
                                const Icon = service.icon
                                return (
                                    <motion.div
                                        key={service.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="relative bg-background/80 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-lg group hover:border-primary/50 transition-colors"
                                    >
                                        <div className={`w-14 h-14 rounded-2xl ${service.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                                            <Icon className={`w-7 h-7 ${service.color}`} />
                                        </div>
                                        <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed mb-6">{service.description}</p>
                                    </motion.div>
                                )
                            })}
                        </div>
                    ) : (
                        <motion.div
                            className="relative w-full h-[400px] flex items-center justify-center cursor-pointer perspective-1000 py-10"
                            onClick={() => setIsExpanded(!isExpanded)}
                            whileHover="hover"
                        >
                            {services.map((service, index) => {
                                const Icon = service.icon;
                                let xOffset = 0;
                                if (index === 0) xOffset = -500;
                                if (index === 1) xOffset = -170;
                                if (index === 2) xOffset = 170;
                                if (index === 3) xOffset = 500;

                                return (
                                    <motion.div
                                        key={service.title}
                                        layout
                                        initial={false}
                                        animate={{
                                            x: isExpanded ? xOffset : index * 4,
                                            y: isExpanded ? 0 : -index * 4,
                                            rotate: isExpanded ? 0 : (index - 1.5) * 3,
                                            scale: isExpanded ? 1 : 1 - index * 0.05,
                                            zIndex: services.length - index,
                                        }}
                                        variants={{
                                            hover: {
                                                y: isExpanded ? 0 : [0, -20, 0],
                                                rotate: isExpanded ? 0 : [(index - 1.5) * 3 - 1, (index - 1.5) * 3 + 1, (index - 1.5) * 3 - 1],
                                                transition: {
                                                    duration: 3,
                                                    repeat: Infinity,
                                                    ease: "easeInOut",
                                                    delay: index * 0.2,
                                                }
                                            }
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 200,
                                            damping: 20
                                        }}
                                        className="absolute w-[280px] md:w-[320px] bg-background/80 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] origin-center group"
                                        style={{
                                            boxShadow: isExpanded
                                                ? "0 10px 30px -5px rgba(0, 0, 0, 0.2)"
                                                : "0 25px 50px -12px rgba(0, 0, 0, 0.4)"
                                        }}
                                    >
                                        <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-br from-white/20 to-transparent -z-10" />
                                        <div className={`w-14 h-14 rounded-2xl ${service.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                                            <Icon className={`w-7 h-7 ${service.color}`} />
                                        </div>
                                        <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                                            {service.title}
                                        </h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                            {service.description}
                                        </p>
                                        <div className={`absolute bottom-6 right-6 transition-all duration-500 transform ${isExpanded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
                                            <div className="p-2 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                                <ArrowUpRight size={20} />
                                            </div>
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </motion.div>
                    )}
                </div>

                {!isPage && !isMobile && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="mt-16 text-muted-foreground text-sm flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 backdrop-blur-sm border border-border/50"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        {isExpanded ? "Click to stack cards" : "Hover to dance • Click to expand"}
                    </motion.p>
                )}
            </div>
        </section>
    )
}
