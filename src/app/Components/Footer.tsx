"use client"

import React from "react"
import Link from "next/link"
import { useActionState } from "react"
import { Facebook, Instagram, Linkedin, Twitter, Mail, MapPin, Phone, ArrowRight, Loader2, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { subscribeToNewsletter } from "../actions/forms"

function NewsletterForm() {
    const [state, dispatch, isPending] = useActionState(subscribeToNewsletter, undefined)

    return (
        <form action={dispatch} className="flex flex-col gap-3">
            <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all disabled:opacity-50 text-sm"
                disabled={isPending || state?.success}
            />
            <button
                type="submit"
                disabled={isPending || state?.success}
                className={cn(
                    "w-full px-4 py-2 rounded-lg font-medium text-sm transition-all flex items-center justify-center gap-2",
                    state?.success
                        ? "bg-green-500 text-white"
                        : "bg-primary text-primary-foreground hover:opacity-90"
                )}
            >
                {isPending ? (
                    <Loader2 size={16} className="animate-spin" />
                ) : state?.success ? (
                    <>Subscribed <Check size={16} /></>
                ) : (
                    <>Subscribe <ArrowRight size={16} /></>
                )}
            </button>
            {state?.message && !state.success && (
                <p className="text-xs text-red-500">{state.message}</p>
            )}
        </form>
    )
}

const allLocations = [
    { name: "New York", slug: "new-york", badge: "USA" },
    { name: "Dubai", slug: "dubai", badge: "UAE" },
    { name: "Bangalore", slug: "bangalore" },
    { name: "Chennai", slug: "chennai" },
    { name: "Coimbatore", slug: "coimbatore" },
    { name: "Hosur", slug: "hosur" },
    { name: "Krishnagiri", slug: "krishnagiri" },
    { name: "Salem", slug: "salem" },
    { name: "Tiruppur", slug: "tiruppur" },
    { name: "Erode", slug: "erode" },
    { name: "Trichy", slug: "trichy" },
    { name: "Denkanikottai", slug: "denkanikottai" },
    { name: "Shoolagiri", slug: "shoolagiri" },
    { name: "Kelamangalam", slug: "kelamangalam" },
    { name: "Thally", slug: "thally" },
    { name: "Bargur", slug: "bargur" },
    { name: "Uthangarai", slug: "uthangarai" },
    { name: "Pochampalli", slug: "pochampalli" },
    { name: "Kaveripattinam", slug: "kaveripattinam" },
    { name: "Mathur", slug: "mathur" },
    { name: "Rayakottai", slug: "rayakottai" },
    { name: "Bagalur", slug: "bagalur" },
    { name: "Veppanapalli", slug: "veppanapalli" },
]

const footerLinks = {
    services: [
        { name: "Offshore Digital Marketing", href: "/offshore-digital-marketing-services" },
        { name: "Offshore SEO Services", href: "/offshore-seo-services" },
        { name: "Offshore Web Development", href: "/offshore-web-development-services" },
        { name: "Offshore Software Development", href: "/offshore-software-development" },
        { name: "Offshore Google Ads", href: "/offshore-google-ads-management" },
        { name: "Offshore Meta Ads", href: "/offshore-meta-ads-management" },
        { name: "Offshore Video Editing", href: "/offshore-video-editing-services" },
        { name: "Ecommerce & Shopify", href: "/offshore-ecommerce-development" },
        { name: "PPC & Performance Media", href: "/offshore-ppc-services" },
        { name: "Social Media & Creative", href: "/offshore-social-media-marketing" },
        { name: "Website Maintenance", href: "/offshore-website-maintenance-services" },
    ],
    primaryHubs: [
        { name: "New York (USA)", href: "/seo-services-new-york" },
        { name: "Dubai (UAE)", href: "/seo-services-dubai" },
        { name: "Bangalore", href: "/seo-services-bangalore" },
        { name: "Chennai", href: "/seo-services-chennai" },
        { name: "Coimbatore", href: "/seo-services-coimbatore" },
        { name: "Hosur", href: "/seo-services-hosur" },
        { name: "Krishnagiri", href: "/seo-services-krishnagiri" },
        { name: "Salem", href: "/seo-services-salem" },
        { name: "Tiruppur", href: "/seo-services-tiruppur" },
        { name: "Erode", href: "/seo-services-erode" },
        { name: "Tiruchirappalli (Trichy)", href: "/seo-services-trichy" },
    ],
    company: [
        { name: "Services", href: "/services" },
        { name: "Offshore Services Hub", href: "/offshore-services" },
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "AI Marketing", href: "/ai-marketing" },
        { name: "Knowledge Hub (Blog)", href: "/blog" },
        { name: "Contact", href: "/contact" },
    ],
    legal: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Cookie Policy", href: "#" },
    ],
}

const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/booworks", label: "Facebook" },
    { icon: Twitter, href: "https://x.com/booworks", label: "Twitter" },
    { icon: Instagram, href: "https://www.instagram.com/booworks.co?igsh=MWI5Ym8yZTFnMWtkdw==", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/booworks-co", label: "LinkedIn" },
]

export default function Footer() {
    return (
        <footer className="relative bg-muted/30 border-t border-border mt-20 pt-16 pb-8 overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2 text-2xl font-bold tracking-tighter">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                                BooWorks
                            </span>
                        </Link>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                            Premier digital marketing, SEO, and custom web development agency with delivery centers in India serving global and domestic clients.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => {
                                const Icon = social.icon
                                return (
                                    <Link
                                        key={social.label}
                                        href={social.href}
                                        className="p-2 rounded-full bg-background border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 group"
                                        aria-label={social.label}
                                    >
                                        <Icon size={18} className="group-hover:scale-110 transition-transform" />
                                    </Link>
                                )
                            })}
                        </div>
                    </div>

                    {/* Offshore Services Links */}
                    <div>
                        <h3 className="font-semibold text-lg mb-6">Offshore Services</h3>
                        <ul className="space-y-2.5">
                            {footerLinks.services.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group text-sm"
                                    >
                                        <span className="w-0 group-hover:w-2 h-px bg-primary transition-all duration-300" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Primary Hubs */}
                    <div>
                        <h3 className="font-semibold text-lg mb-6">Hubs & Locations</h3>
                        <ul className="space-y-2.5">
                            {footerLinks.primaryHubs.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group text-sm"
                                    >
                                        <span className="w-0 group-hover:w-2 h-px bg-primary transition-all duration-300" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Navigation */}
                    <div>
                        <h3 className="font-semibold text-lg mb-6">Company</h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group text-sm"
                                    >
                                        <span className="w-0 group-hover:w-2 h-px bg-primary transition-all duration-300" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter & Contact */}
                    <div className="space-y-6">
                        <h3 className="font-semibold text-lg">Stay Updated</h3>
                        <p className="text-muted-foreground text-sm">
                            Subscribe for offshore delivery insights, tech benchmarks, and growth strategies.
                        </p>
                        <NewsletterForm />

                        <div className="pt-4 space-y-3">
                            <div className="flex items-center gap-3 text-muted-foreground text-sm">
                                <Mail size={16} className="text-primary shrink-0" />
                                <a href="mailto:bootech012@gmail.com" className="hover:text-primary transition-colors">bootech012@gmail.com</a>
                            </div>
                            <div className="flex items-center gap-3 text-muted-foreground text-sm">
                                <Phone size={16} className="text-primary shrink-0" />
                                <a href="tel:7397532847" className="hover:text-primary transition-colors">+91 7397532847</a>
                            </div>
                            <div className="flex items-center gap-3 text-muted-foreground text-sm">
                                <MapPin size={16} className="text-primary shrink-0" />
                                <span>4/72 Gandhi nagar, Hosur, Zuzuvadi, Krishnagiri District 635126, India</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* All 23 Locations Directory */}
                <div className="pt-8 pb-8 border-t border-border/50">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                            <MapPin size={16} className="text-primary" />
                            <h4 className="font-semibold text-xs md:text-sm tracking-wide text-foreground uppercase">
                                All Locations We Serve • Dedicated Local & International SEO Hubs
                            </h4>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-2 text-xs">
                            {allLocations.map((loc) => (
                                <Link
                                    key={loc.slug}
                                    href={`/seo-services-${loc.slug}`}
                                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5 py-0.5 group"
                                >
                                    <span className="w-1 h-1 rounded-full bg-primary/60 group-hover:scale-125 transition-transform shrink-0" />
                                    <span>SEO in {loc.name}</span>
                                    {loc.badge && (
                                        <span className="text-[10px] bg-primary/10 text-primary px-1 rounded font-medium">
                                            {loc.badge}
                                        </span>
                                    )}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex flex-col items-center md:items-start gap-1">
                        <p>© {new Date().getFullYear()} BooWorks. All rights reserved.</p>
                        <p className="text-xs">Founded by <span className="text-primary font-semibold">Bhuvanesh A</span>, CEO & Co-Founder</p>
                    </div>
                    <div className="flex gap-6">
                        {footerLinks.legal.map((link) => (
                            <Link key={link.name} href={link.href} className="hover:text-primary transition-colors">
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    <a href="https://booworks.co" className="hover:text-primary transition-colors opacity-70 hover:opacity-100">
                        booworks.co
                    </a>
                </div>
            </div>
        </footer>
    )
}
