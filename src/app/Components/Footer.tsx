"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useActionState } from "react"
import { Facebook, Instagram, Linkedin, Twitter, Mail, MapPin, Phone, ArrowRight, Heart, Loader2, Check } from "lucide-react"
import { cn } from "@/lib/utils"
// import { useFormState } from "react-dom" // Use if useActionState not available
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
                className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all disabled:opacity-50"
                disabled={isPending || state?.success}
            />
            <button
                type="submit"
                disabled={isPending || state?.success}
                className={cn(
                    "w-full px-4 py-2 rounded-lg font-medium transition-all flex items-center justify-center gap-2",
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

const footerLinks = {
    services: [
        { name: "SEO Optimization", href: "#" },
        { name: "Digital Marketing", href: "#" },
        { name: "Content Strategy", href: "#" },
        { name: "Social Media", href: "#" },
        { name: "Web Designing", href: "#" },
    ],
    company: [
        { name: "About Us", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Case Studies", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Contact", href: "#" },
    ],
    legal: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Cookie Policy", href: "#" },
    ],
}

const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "https://www.instagram.com/booworks.co?igsh=MWI5Ym8yZTFnMWtkdw==", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
]

export default function Footer() {
    return (
        <footer className="relative bg-muted/30 border-t border-border mt-20 pt-16 pb-8 overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2 text-2xl font-bold tracking-tighter">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                                BooWorks
                            </span>
                        </Link>
                        <p className="text-muted-foreground leading-relaxed">
                            Elevating brands through data-driven digital marketing strategies and creative excellence.
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

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-lg mb-6">Services</h3>
                        <ul className="space-y-4">
                            {footerLinks.services.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="w-0 group-hover:w-2 h-px bg-primary transition-all duration-300" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-6">Company</h3>
                        <ul className="space-y-4">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
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
                            Subscribe to our newsletter for the latest marketing trends and insights.
                        </p>
                        <NewsletterForm />

                        <div className="pt-4 space-y-3">
                            <div className="flex items-center gap-3 text-muted-foreground text-sm">
                                <Mail size={16} className="text-primary" />
                                <a href="mailto:bootech07@gmail.com" className="hover:text-primary transition-colors">bootech07@gmail.com</a>
                            </div>
                            <div className="flex items-center gap-3 text-muted-foreground text-sm">
                                <Phone size={16} className="text-primary" />
                                <a href="tel:7397532847" className="hover:text-primary transition-colors">7397532847</a>
                            </div>
                            <div className="flex items-center gap-3 text-muted-foreground text-sm">
                                <MapPin size={16} className="text-primary" />
                                <span> 4/72 Gandhi nagar , Hosur, Zuzuvadi, Krishnagiri District 635126</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} BooWorks Inc. All rights reserved.</p>
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
