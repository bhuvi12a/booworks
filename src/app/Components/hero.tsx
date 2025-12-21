"use client";

// this is a client component
import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { renderCanvas } from "./ui/canvas"
import { DIcons } from "dicons";

import { Button } from "./ui/button";

export function Hero() {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    useEffect(() => {
        renderCanvas();

        // Check for saved theme preference or default to 'light'
        const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' || 'light';
        setTheme(savedTheme);
        document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }, []);

    const toggleTheme = useCallback(() => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
    }, [theme]);

    return (
        <section id="home" className="relative">
            {/* Theme Toggle Button */}
            <div className="absolute right-4 top-4 z-50 md:right-8 md:top-8">
                <button
                    onClick={toggleTheme}
                    className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 bg-background/80 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-background hover:scale-110"
                    aria-label="Toggle theme"
                >
                    {theme === 'dark' ? (
                        <DIcons.Sun className="h-5 w-5 text-yellow-500 transition-transform duration-300 group-hover:rotate-180" />
                    ) : (
                        <DIcons.Moon className="h-5 w-5 text-blue-600 transition-transform duration-300 group-hover:-rotate-12" />
                    )}
                </button>
            </div>

            <div className="animation-delay-8 animate-fadeIn mt-20 flex  flex-col items-center justify-center px-4 text-center md:mt-20">

                <div className="mb-10 mt-4  md:mt-6">
                    <div className="px-2">
                        <div className="border-ali relative mx-auto h-full max-w-7xl border p-6 [mask-image:radial-gradient(800rem_96rem_at_center,white,transparent)] md:px-12 md:py-20">
                            <h1 className="flex  select-none flex-col  px-3 py-2 text-center text-5xl font-semibold leading-none tracking-tight md:flex-col md:text-8xl lg:flex-row lg:text-8xl">
                                <DIcons.Plus
                                    strokeWidth={4}
                                    className="text-ali absolute -left-5 -top-5 h-10 w-10"
                                />
                                <DIcons.Plus
                                    strokeWidth={4}
                                    className="text-ali absolute -bottom-5 -left-5 h-10 w-10"
                                />
                                <DIcons.Plus
                                    strokeWidth={4}
                                    className="text-ali absolute -right-5 -top-5 h-10 w-10"
                                />
                                <DIcons.Plus
                                    strokeWidth={4}
                                    className="text-ali absolute -bottom-5 -right-5 h-10 w-10"
                                />
                                Your complete platform for Digital Marketing.
                            </h1>
                        </div>
                    </div>

                    <h1 className="mt-8 text-2xl md:text-2xl">
                        Scaling brands with precision. I'm{" "}
                        <span className="text-ali font-bold">Bhuvanesh </span>
                    </h1>

                    <p className="md:text-md mx-auto mb-16 mt-2 max-w-2xl px-6 text-sm text-primary/60 sm:px-6 md:max-w-4xl md:px-20 lg:text-lg">
                        Specializing in SEO, PPC, and performance marketing to turn traffic into revenue and drive real business ROI.
                    </p>
                    <div className="flex justify-center gap-2">
                        <Link href={"/dashboard"}>
                            <Button variant="default" size="lg">
                                Start Campaign
                            </Button>
                        </Link>
                        <Link href={"https://cal.com/aliimam/designali"} target="_blank">
                            <Button variant="outline" size="lg">
                                Book a Strategy Call
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
            <canvas
                className="bg-skin-base pointer-events-none absolute inset-0 mx-auto"
                id="canvas"
            ></canvas>
        </section>
    );
};


