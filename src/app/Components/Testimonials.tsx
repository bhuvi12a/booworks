"use client"

import React, { useState, useEffect } from "react"
import { motion, PanInfo, AnimatePresence } from "framer-motion"
import { Quote, Star, ArrowLeft, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const testimonials = [
    {
        id: 1,
        name: "Anand Prabhu",
        role: "Director at Sarvam Builders & Realtors",
        content: "BooWorks transformed our digital marketing strategy completely. Their SEO services helped us reach the top of search results in Hosur, and our lead generation increased by 300%. Exceptional partnership!",
        avatar: "A"
    },
    {
        id: 2,
        name: "Rajan",
        role: "Founder of Prime Craft Interiors",
        content: "Outstanding creative work! The website they designed for us perfectly showcases our interior design portfolio. Our online inquiries tripled within two months. Highly professional team.",
        avatar: "R"
    },
    {
        id: 3,
        name: "Raghul",
        role: "CEO at Samuthra Arihanth Homes",
        content: "The digital marketing campaigns BooWorks created for our real estate projects were phenomenal. Clear communication, data-driven strategies, and excellent ROI. They're true partners in our growth.",
        avatar: "R"
    },
    {
        id: 4,
        name: "Sneha Patel",
        role: "Owner of Empire Toyz",
        content: "BooWorks helped us scale our toy business from local to regional through amazing social media marketing. Their Meta Ads campaigns delivered incredible results at very affordable rates!",
        avatar: "S"
    },
    {
        id: 5,
        name: "Nambi",
        role: "Manager at Dumpling Monkey",
        content: "Amazing results for our restaurant! Their local SEO and Google Ads services brought us tons of new customers. The team understands our business and delivers quality leads consistently.",
        avatar: "N"
    },
    {
        id: 6,
        name: "Viswanth",
        role: "Director at Iconic Innovative Solutions",
        content: "Professional web development and branding services. BooWorks created a modern, responsive website that perfectly represents our IT solutions company. Excellent attention to detail!",
        avatar: "V"
    },
    {
        id: 7,
        name: "Selvam",
        role: "Marketing Head at Cloud IT Solution",
        content: "The best digital marketing agency in Hosur! Their comprehensive approach to SEO and content marketing has significantly boosted our online visibility. Results speak for themselves.",
        avatar: "S"
    },
    {
        id: 8,
        name: "Anand",
        role: "Founder of BTL Engineering",
        content: "BooWorks delivered exceptional website development and digital marketing for our engineering firm. Their technical expertise and creative solutions exceeded our expectations. Highly recommended!",
        avatar: "A"
    },
    {
        id: 9,
        name: "Arun Krishan",
        role: "CEO at Fielduo",
        content: "Outstanding digital marketing partnership! Their strategic approach to branding and online advertising has helped us establish a strong market presence. Professional, creative, and results-driven team.",
        avatar: "A"
    }
]

export function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [exitX, setExitX] = useState<number>(0)

    const handleDragEnd = (
        event: MouseEvent | TouchEvent | PointerEvent,
        info: PanInfo
    ) => {
        if (Math.abs(info.offset.x) > 100) {
            setExitX(info.offset.x)
            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % testimonials.length)
                setExitX(0)
            }, 200)
        }
    }

    // Auto-advance logic (optional, but good for UX)
    // useEffect(() => {
    //   const interval = setInterval(() => {
    //     setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    //   }, 5000);
    //   return () => clearInterval(interval);
    // }, []);

    return (
        <section className="py-24 relative overflow-hidden bg-transparent">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tighter">
                            Loved by <span className="text-primary">Industry Leaders</span>
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Don't just take our word for it. Swipe to see what our partners have to say.
                        </p>
                    </motion.div>
                </div>

                {/* Carousel Area */}
                <div className="relative w-full max-w-lg mx-auto h-[400px] flex items-center justify-center">
                    <div className="relative w-full h-full">
                        {testimonials.map((testimonial, index) => {
                            const isCurrentCard = index === currentIndex
                            // Logic to show next 2 cards in the stack
                            // We need to handle wrapping around the array
                            const diff = (index - currentIndex + testimonials.length) % testimonials.length;

                            // We only render current card and next 2 cards
                            if (diff > 2) return null;

                            const isFirst = diff === 0;
                            const isSecond = diff === 1;
                            const isThird = diff === 2;

                            return (
                                <motion.div
                                    key={testimonial.id}
                                    className={cn(
                                        "absolute top-0 left-0 right-0 mx-auto w-full md:w-[400px] p-8 rounded-3xl",
                                        "bg-card/95 backdrop-blur-xl border border-border/50 shadow-2xl",
                                        "flex flex-col gap-6 cursor-grab active:cursor-grabbing select-none"
                                    )}
                                    style={{
                                        zIndex: isFirst ? 30 : isSecond ? 20 : 10,
                                    }}
                                    drag={isFirst ? "x" : false}
                                    dragConstraints={{ left: 0, right: 0 }}
                                    dragElastic={0.7}
                                    onDragEnd={isFirst ? handleDragEnd : undefined}
                                    initial={false}
                                    animate={{
                                        scale: isFirst ? 1 : isSecond ? 0.95 : 0.9,
                                        opacity: isFirst ? 1 : isSecond ? 0.6 : 0.4,
                                        x: isFirst ? exitX : 0,
                                        y: isFirst ? 0 : isSecond ? 20 : 40, // Increased vertical spacing for better visibility
                                        rotate: isFirst ? exitX / 20 : 0,
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 25,
                                    }}
                                >
                                    {/* Quote Icon */}
                                    <div className="absolute top-6 right-6 text-primary/20">
                                        <Quote size={40} />
                                    </div>

                                    {/* Stars */}
                                    <div className="flex gap-1 text-yellow-500">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={16} fill="currentColor" />
                                        ))}
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10">
                                        <p className="text-card-foreground/80 leading-relaxed text-lg italic">
                                            "{testimonial.content}"
                                        </p>
                                    </div>

                                    {/* Author Info */}
                                    <div className="flex items-center gap-4 mt-auto">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg">
                                            {testimonial.avatar}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-foreground text-lg">{testimonial.name}</h4>
                                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>

                {/* Carousel Indicators / Controls */}
                <div className="flex justify-center items-center gap-8 mt-4 md:mt-8">
                    <button
                        onClick={() => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                        className="p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-colors text-secondary-foreground"
                        aria-label="Previous testimonial"
                    >
                        <ArrowLeft size={20} />
                    </button>

                    <div className="flex gap-2">
                        {testimonials.map((_, index) => (
                            <div
                                key={index}
                                className={cn(
                                    "w-2 h-2 rounded-full transition-all duration-300",
                                    index === currentIndex
                                        ? "w-8 bg-primary"
                                        : "bg-primary/20"
                                )}
                            />
                        ))}
                    </div>

                    <button
                        onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)}
                        className="p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-colors text-secondary-foreground"
                        aria-label="Next testimonial"
                    >
                        <ArrowRight size={20} />
                    </button>
                </div>
            </div>
        </section>
    )
}
