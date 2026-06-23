"use client"

import React, { useActionState, useState } from "react"
import { motion } from "framer-motion"
import { 
    Search, BarChart, Megaphone, Target, Zap, TrendingUp, 
    Users, CheckCircle, Mail, Phone, Send, Loader2, User, 
    MessageSquare, Star, Quote
} from "lucide-react"
import { submitContact } from "@/app/actions/forms"
import { LocationSEOData } from "@/lib/location-data"

export default function LocationClientPage({ data }: { data: LocationSEOData }) {
    const [state, action, isPending] = useActionState(submitContact, undefined)
    const [currentIndex, setCurrentIndex] = useState(0)

    const specialtyIcons = [Search, Target, Megaphone, BarChart];
    const specialtyColors = ["text-purple-500", "text-blue-500", "text-rose-500", "text-indigo-500"];
    const specialtyBgColors = ["bg-purple-500/10", "bg-blue-500/10", "bg-rose-500/10", "bg-indigo-500/10"];

    const services = data.serviceSpecialties.map((specialty, index) => ({
        title: specialty.title,
        description: specialty.description,
        icon: specialtyIcons[index % specialtyIcons.length],
        color: specialtyColors[index % specialtyColors.length],
        bgColor: specialtyBgColors[index % specialtyBgColors.length],
    }));

    // Service Schema for current location
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": `SEO & Digital Marketing Services in ${data.cityName}`,
        "provider": {
            "@type": "LocalBusiness",
            "name": "Booworks",
            "url": "https://www.booworks.co",
            "telephone": "+917397532847",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Krishnagiri",
                "addressLocality": "Krishnagiri",
                "addressRegion": "Tamil Nadu",
                "postalCode": "635001",
                "addressCountry": "IN"
            }
        },
        "areaServed": [
            {
                "@type": "City",
                "name": data.cityName,
            },
            {
                "@type": "State",
                "name": data.stateName
            }
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": `${data.cityName} Digital Marketing Services`
        }
    }

    return (
        <main className="min-h-screen bg-background relative overflow-hidden pt-24 pb-12">
            {/* Inject JSON-LD Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(schema),
                }}
            />

            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Hero Section */}
                <div className="grid items-center gap-12 lg:grid-cols-2 mb-24">
                    {/* Left Hero Content */}
                    <div className="flex flex-col space-y-8 text-left">
                        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-semibold text-primary">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
                            </span>
                            Top-Tier Digital Marketing in {data.cityName}
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-none">
                            Best <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">SEO</span> & <br />
                            <span className="text-primary italic">Digital Marketing Services</span> in {data.cityName}
                        </h1>

                        <p className="max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl font-medium">
                            {data.heroSubheadline}
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground font-bold px-8 py-4 text-lg shadow-xl shadow-primary/25 transition-transform hover:scale-105"
                            >
                                Book a Strategy Call
                            </a>
                        </div>

                        {/* Stats Row */}
                        <div className="grid grid-cols-1 gap-6 pt-8 sm:grid-cols-3 border-t border-border/50">
                            <div className="group flex flex-col cursor-default">
                                <div className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors">{data.stats.served}</div>
                                <div className="text-sm text-muted-foreground">Clients Served</div>
                            </div>
                            <div className="group flex flex-col cursor-default">
                                <div className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors">{data.stats.revenue}</div>
                                <div className="text-sm text-muted-foreground">Revenue Generated</div>
                            </div>
                            <div className="group flex flex-col cursor-default">
                                <div className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors">{data.stats.roi}</div>
                                <div className="text-sm text-muted-foreground">Average Campaign ROI</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Hero Content - Abstract ROI Widget */}
                    <div className="relative hidden lg:block">
                        <div className="relative mx-auto aspect-square w-full max-w-md">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 via-blue-600/20 to-transparent blur-3xl" />
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, delay: 0.3 }}
                                className="absolute inset-10 rounded-full border border-white/10 bg-white/5 p-8 backdrop-blur-sm flex flex-col items-center justify-center text-center"
                            >
                                <motion.div
                                    animate={{ rotate: [0, 5, -5, 0] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                    className="flex flex-col items-center justify-center"
                                >
                                    <Zap className="w-16 h-16 text-primary mb-4 animate-bounce" />
                                    <h3 className="text-3xl font-bold text-foreground mb-2">{data.stats.roi} Average ROI</h3>
                                    <p className="text-sm text-muted-foreground max-w-[200px]">Data-driven optimization targeting {data.cityName} local keywords.</p>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Services Section */}
                <div className="mb-24">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                            Our Premium <span className="text-primary italic">Services</span>
                        </h2>
                        <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
                            Comprehensive digital growth solutions engineered to dominate {data.cityName} search results and campaigns.
                        </p>
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
                                    className="relative bg-background/85 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-lg group hover:border-primary/50 transition-all duration-300"
                                >
                                    <div className={`w-14 h-14 rounded-2xl ${service.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                                        <Icon className={`w-7 h-7 ${service.color}`} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">{service.description}</p>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>

                {/* AI + Human Hybrid Strategy */}
                <div className="mb-24 relative overflow-hidden rounded-[2.5rem] bg-white/5 border border-white/10 p-8 md:p-12">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                        <div>
                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary mb-4">
                                Future-Proof Marketing
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">{data.growthPlanTitle}</h2>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                {data.growthPlanDescription}
                            </p>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                {data.localContext} We utilize advanced language models (ChatGPT, Google Gemini) and deep market intelligence tools (DeepSeek) to map intent and target the highest-ranking local keywords. 
                                Every strategy is reviewed and perfected by our expert marketing team to guarantee cultural alignment and strict compliance with Google&apos;s E-E-A-T guidelines.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <div className="px-4 py-2 rounded-full bg-secondary/50 border border-border/50 text-sm font-semibold">🤖 ChatGPT-Enhanced Copy</div>
                                <div className="px-4 py-2 rounded-full bg-secondary/50 border border-border/50 text-sm font-semibold">✨ Gemini Data Mining</div>
                                <div className="px-4 py-2 rounded-full bg-secondary/50 border border-border/50 text-sm font-semibold">🔍 DeepSeek Competitor Intel</div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            {[
                                { title: data.serviceSpecialties[0]?.title || "SEO Optimization", desc: `Targeting high-priority search terms in ${data.cityName}.` },
                                { title: data.serviceSpecialties[1]?.title || "Laser PPC Mapping", desc: "Structuring highly efficient Meta Ads and Google Ads campaigns." },
                                { title: data.serviceSpecialties[2]?.title || "Lead Generation Engines", desc: "Crafting beautiful, high-converting landing pages built on modern Next.js foundations." }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/25 transition-colors">
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                        <CheckCircle size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground">{item.title}</h4>
                                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Local Testimonials Carousel */}
                {data.testimonials && data.testimonials.length > 0 && (
                    <div className="mb-24">
                        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
                            Trusted by <span className="text-primary italic">{data.cityName} Innovators</span>
                        </h2>

                        <div className="relative w-full max-w-2xl mx-auto">
                            <div className="bg-card/90 backdrop-blur-xl border border-border/50 p-8 md:p-12 rounded-3xl shadow-2xl relative flex flex-col gap-6">
                                <Quote className="absolute top-6 right-6 text-primary/10 w-16 h-16 pointer-events-none" />
                                <div className="flex gap-1 text-yellow-500">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} fill="currentColor" />
                                    ))}
                                </div>
                                <p className="text-card-foreground/90 leading-relaxed text-lg md:text-xl italic">
                                    &ldquo;{data.testimonials[currentIndex].content}&rdquo;
                                </p>
                                <div className="flex items-center gap-4 mt-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-primary-foreground font-bold text-lg">
                                        {data.testimonials[currentIndex].avatar}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-foreground text-lg">{data.testimonials[currentIndex].name}</h4>
                                        <p className="text-sm text-muted-foreground">{data.testimonials[currentIndex].role}</p>
                                    </div>
                                </div>

                                {/* Carousel controls */}
                                {data.testimonials.length > 1 && (
                                    <div className="flex gap-3 justify-end mt-4">
                                        <button
                                            onClick={() => setCurrentIndex((prev) => (prev - 1 + data.testimonials.length) % data.testimonials.length)}
                                            className="p-2 rounded-full bg-secondary/50 hover:bg-secondary text-secondary-foreground transition-colors"
                                            aria-label="Previous testimonial"
                                        >
                                            &larr;
                                        </button>
                                        <button
                                            onClick={() => setCurrentIndex((prev) => (prev + 1) % data.testimonials.length)}
                                            className="p-2 rounded-full bg-secondary/50 hover:bg-secondary text-secondary-foreground transition-colors"
                                            aria-label="Next testimonial"
                                        >
                                            &rarr;
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Contact Section */}
                <div id="contact" className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start mb-16">
                    {/* Left Contact Text */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">
                                Ready to Dominate <br />
                                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">{data.cityName} Market?</span>
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Get in touch to schedule your free 30-minute strategy call. Our experts will audit your local SEO performance and campaign architecture, providing a clear blueprint for growth.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="bg-secondary/30 backdrop-blur-xl rounded-2xl p-6 border border-white/10 flex items-center gap-4">
                                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Email Us</h3>
                                    <a href="mailto:bootech012@gmail.com" className="text-primary hover:underline">bootech012@gmail.com</a>
                                </div>
                            </div>

                            <div className="bg-secondary/30 backdrop-blur-xl rounded-2xl p-6 border border-white/10 flex items-center gap-4">
                                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-600">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Call Us</h3>
                                    <a href="tel:+917397532847" className="text-blue-600 hover:underline">+91 7397532847</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Contact Form */}
                    <div className="bg-secondary/20 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl w-full">
                        <h3 className="text-2xl font-bold mb-6">Send an Enquiry</h3>
                        {state?.success ? (
                            <div className="text-center py-8">
                                <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle size={32} />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">Enquiry Sent!</h3>
                                <p className="text-muted-foreground max-w-xs">{state.message}</p>
                                <button
                                    onClick={() => window.location.reload()}
                                    className="mt-6 text-primary font-medium hover:underline"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form action={action} className="space-y-6">
                                <input type="hidden" name="subject" value={`${data.cityName} Landing Page Lead`} />
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-muted-foreground">
                                            Name <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <input
                                                id="name"
                                                name="name"
                                                type="text"
                                                required
                                                placeholder="Your Name"
                                                className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-background/50 border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all placeholder:text-muted-foreground/50 text-foreground"
                                            />
                                            <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground/50" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-muted-foreground">
                                            Email <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                required
                                                placeholder="you@example.com"
                                                className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-background/50 border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all placeholder:text-muted-foreground/50 text-foreground"
                                            />
                                            <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground/50" />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium text-muted-foreground">Phone</label>
                                    <div className="relative">
                                        <input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            placeholder="+91 7397532847"
                                            className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-background/50 border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all placeholder:text-muted-foreground/50 text-foreground"
                                        />
                                        <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground/50" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-muted-foreground">
                                        Message <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={5}
                                            placeholder="Tell us about your project or service needs..."
                                            className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-background/50 border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all resize-none placeholder:text-muted-foreground/50 text-foreground"
                                        />
                                        <MessageSquare size={18} className="absolute left-4 top-4 text-muted-foreground/50" />
                                    </div>
                                </div>

                                {state?.success === false && (
                                    <div className="p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 text-sm">
                                        {state.message}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isPending}
                                    className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:opacity-90 transition-all shadow-lg shadow-primary/25 flex items-center justify-center gap-2 disabled:opacity-50"
                                >
                                    {isPending ? (
                                        <>
                                            <Loader2 size={24} className="animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Enquiry
                                            <Send size={20} />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </main>
    )
}
