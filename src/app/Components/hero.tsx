"use client";

// this is a client component
import { useEffect, useState } from "react";
import Link from "next/link";

import { Button } from "./ui/button";
import { BookingModal } from "./BookingModal";

import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Users, ArrowRight } from "lucide-react";

export function Hero() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    const stats = [
        { label: "Clients Served", value: "200+", icon: Users },
        { label: "Revenue Generated", value: "$5M+", icon: TrendingUp },
        { label: "Client Growth", value: "300%", icon: CheckCircle2 },
    ];

    // Animated Number Component
    function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
        const [count, setCount] = useState(0);

        useEffect(() => {
            let startTime: number;
            const duration = 2000; // 2 seconds
            const startValue = 0;

            const animate = (currentTime: number) => {
                if (!startTime) startTime = currentTime;
                const progress = Math.min((currentTime - startTime) / duration, 1);

                // Easing function for smooth animation
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                setCount(Math.floor(easeOutQuart * value));

                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };

            requestAnimationFrame(animate);
        }, [value]);

        return (
            <div className="text-lg font-bold">
                {count.toLocaleString()}{suffix}
            </div>
        );
    }

    return (
        <section id="home" className="relative overflow-hidden bg-transparent py-20 md:py-32">
            <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />

            {/* Background Decoration (Matches Testimonials) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container relative z-10 mx-auto px-6">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    {/* Left Content */}
                    <div className="flex flex-col space-y-8 text-left">
                        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-semibold text-primary">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
                            </span>
                            #1 Digital Marketing Partner in Hosur & Krishnagiri
                        </div>

                        <h1 className="text-5xl font-bold tracking-tight text-foreground md:text-7xl">
                            Scale <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Brands</span> with <br />
                            <span className="text-primary italic">Precision Marketing</span>
                        </h1>


                        <p className="max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl font-medium">
                            Elevating businesses in Hosur and Krishnagiri through data-driven SEO, high-performance PPC, and strategic digital dominance. Best digital marketing & website development services with 450% ROI.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Button
                                variant="default"
                                size="lg"
                                onClick={() => setIsBookingOpen(true)}
                                className="rounded-full px-8 text-lg shadow-xl shadow-primary/20 transition-transform hover:scale-105"
                            >
                                Book a Strategy Call
                            </Button>
                        </div>

                        {/* Stats Section */}
                        <div className="grid grid-cols-1 gap-6 pt-8 sm:grid-cols-3">
                            {stats.map((stat, i) => (
                                <div key={i} className="group flex flex-col transition-transform hover:scale-105 cursor-default">
                                    <div className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors">{stat.value}</div>
                                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Content - Abstract Marketing Graphic */}
                    <div className="relative hidden lg:block">
                        <div className="relative mx-auto aspect-square w-full max-w-md">
                            {/* Animated ROI Card */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="absolute -left-4 top-10 flex w-64 items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-2xl shadow-2xl"
                            >
                                {/* Circular Progress */}
                                <div className="relative h-16 w-16 flex-shrink-0">
                                    {/* Background Circle */}
                                    <svg className="h-full w-full -rotate-90 transform">
                                        <circle
                                            cx="32"
                                            cy="32"
                                            r="28"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                            fill="none"
                                            className="text-primary/10"
                                        />
                                        {/* Animated Progress Circle */}
                                        <motion.circle
                                            cx="32"
                                            cy="32"
                                            r="28"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                            fill="none"
                                            strokeLinecap="round"
                                            className="text-primary"
                                            initial={{ strokeDasharray: "0 176" }}
                                            animate={{ strokeDasharray: "158 176" }} // 90% of circle (450/500)
                                            transition={{ duration: 2, delay: 0.8, ease: "easeOut" }}
                                        />
                                    </svg>
                                    {/* Icon in center */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ duration: 0.5, delay: 1.2 }}
                                        >
                                            <TrendingUp size={20} className="text-primary" />
                                        </motion.div>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-xs text-muted-foreground">ROI Target</div>
                                    <AnimatedNumber value={450} suffix="% Met" />
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.7 }}
                                className="absolute -right-4 bottom-20 flex w-64 items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-2xl shadow-2xl"
                            >
                                <div className="h-12 w-12 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-500">
                                    <Users size={24} />
                                </div>
                                <div>
                                    <div className="text-xs text-muted-foreground">Active Leads</div>
                                    <AnimatedNumber value={12450} suffix="+" />
                                </div>
                            </motion.div>

                            {/* Main Logo Graphic */}
                            <div className="h-full w-full rounded-full bg-gradient-to-br from-primary/30 via-blue-600/20 to-transparent blur-3xl" />
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, delay: 0.3 }}
                                className="absolute inset-10 rounded-full border border-white/10 bg-white/5 p-8 backdrop-blur-sm flex items-center justify-center"
                            >
                                <motion.div
                                    animate={{
                                        rotate: [0, 5, -5, 0],
                                    }}
                                    transition={{
                                        duration: 6,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="relative w-full h-full flex items-center justify-center"
                                >
                                    <img
                                        src="/bw-logo-dark.png"
                                        alt="BooWorks Logo"
                                        className="w-[90%] h-[90%] object-contain drop-shadow-2xl"
                                    />
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


