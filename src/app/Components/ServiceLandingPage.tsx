"use client"

import React, { useActionState, useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { 
    ChevronRight, CheckCircle2, ChevronDown, 
    Send, Loader2, User, Mail, Phone, MessageSquare,
    Shield, Clock, Globe, ArrowRight, Sparkles, Check
} from "lucide-react"
import { submitContact } from "@/app/actions/forms"

export interface AudienceItem {
    title: string
    description: string
}

export interface DeliverableItem {
    title: string
    description: string
    features: string[]
}

export interface TechStackCategory {
    category: string
    tools: string[]
}

export interface WorkflowStep {
    step: string
    title: string
    description: string
}

export interface EngagementModel {
    name: string
    description: string
    bestFor: string
    highlights: string[]
}

export interface ServiceLimitation {
    point: string
    explanation: string
}

export interface FAQItem {
    question: string
    answer: string
}

export interface RelatedServiceItem {
    title: string
    href: string
    description: string
}

export interface ServiceLandingPageProps {
    badge: string
    h1: string
    subheadline: string
    serviceKey: string
    breadcrumbs: { name: string; url: string }[]
    valueProps: { label: string; detail: string }[]
    audience: AudienceItem[]
    deliverables: DeliverableItem[]
    techStack: TechStackCategory[]
    workflow: WorkflowStep[]
    engagementModels: EngagementModel[]
    limitations: ServiceLimitation[]
    faqs: FAQItem[]
    relatedServices: RelatedServiceItem[]
    jsonLdSchemas: object[]
}

export default function ServiceLandingPage(props: ServiceLandingPageProps) {
    const [state, action, isPending] = useActionState(submitContact, undefined)
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)

    const toggleFaq = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index)
    }

    return (
        <main className="min-h-screen bg-background relative overflow-hidden pt-28 pb-16">
            {/* Inject JSON-LD Schemas */}
            {props.jsonLdSchemas.map((schema, i) => (
                <script
                    key={i}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}

            {/* Background Ambient Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-[-5%] left-[-10%] w-[45%] h-[45%] bg-primary/15 rounded-full blur-[120px]" />
                <div className="absolute top-[35%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[5%] left-[20%] w-[35%] h-[35%] bg-purple-600/10 rounded-full blur-[130px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                {/* Breadcrumbs Navigation */}
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center space-x-2 text-xs md:text-sm text-muted-foreground flex-wrap">
                        {props.breadcrumbs.map((crumb, idx) => {
                            const isLast = idx === props.breadcrumbs.length - 1
                            return (
                                <li key={crumb.url} className="flex items-center">
                                    {idx > 0 && <ChevronRight size={14} className="mx-1.5 opacity-60" />}
                                    {isLast ? (
                                        <span className="text-foreground font-medium" aria-current="page">
                                            {crumb.name}
                                        </span>
                                    ) : (
                                        <Link href={crumb.url} className="hover:text-primary transition-colors">
                                            {crumb.name}
                                        </Link>
                                    )}
                                </li>
                            )
                        })}
                    </ol>
                </nav>

                {/* Hero Section */}
                <div className="grid items-center gap-12 lg:grid-cols-12 mb-24">
                    <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
                        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs md:text-sm font-semibold text-primary">
                            <Sparkles size={14} className="text-primary animate-pulse" />
                            {props.badge}
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.15]">
                            {props.h1}
                        </h1>

                        <p className="text-lg md:text-xl leading-relaxed text-muted-foreground font-normal max-w-2xl">
                            {props.subheadline}
                        </p>

                        {/* Quick Trust Highlights */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-border/40">
                            {props.valueProps.map((vp) => (
                                <div key={vp.label} className="flex flex-col">
                                    <span className="text-xs uppercase tracking-wider text-muted-foreground">{vp.label}</span>
                                    <span className="text-sm font-semibold text-foreground mt-0.5">{vp.detail}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-2 flex flex-wrap gap-4">
                            <a
                                href="#contact-quote"
                                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-base shadow-lg shadow-primary/25 hover:opacity-90 transition-all hover:scale-[1.02]"
                            >
                                Request Strategy & Quote
                                <ArrowRight size={18} className="ml-2" />
                            </a>
                            <a
                                href="#deliverables"
                                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-secondary/60 border border-white/10 text-foreground font-medium text-base hover:bg-secondary transition-all"
                            >
                                View Deliverables
                            </a>
                        </div>
                    </div>

                    {/* Quick Consultation Form Box (Hero Right) */}
                    <div className="lg:col-span-5" id="hero-quote">
                        <div className="bg-card/90 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl relative">
                            <div className="mb-6">
                                <span className="text-xs font-semibold uppercase tracking-wider text-primary">Offshore Delivery Center</span>
                                <h2 className="text-2xl font-bold text-foreground mt-1">Talk to a Senior Specialist</h2>
                                <p className="text-muted-foreground text-xs sm:text-sm mt-1">
                                    Get an honest scoping call, timeline estimate, and pricing breakdown within 24 hours.
                                </p>
                            </div>

                            {state?.success ? (
                                <div className="text-center py-8">
                                    <div className="w-14 h-14 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <Check size={28} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-1">Inquiry Received</h3>
                                    <p className="text-sm text-muted-foreground">{state.message}</p>
                                </div>
                            ) : (
                                <form action={action} className="space-y-4">
                                    <input type="hidden" name="subject" value={`Offshore Lead: ${props.serviceKey}`} />
                                    
                                    <div>
                                        <label htmlFor="hero-name" className="text-xs font-medium text-muted-foreground block mb-1">
                                            Full Name <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <input
                                                id="hero-name"
                                                name="name"
                                                type="text"
                                                required
                                                placeholder="Sarah Jenkins"
                                                className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-background/60 border border-border/60 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 text-foreground placeholder:text-muted-foreground/40"
                                            />
                                            <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground/50" />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="hero-email" className="text-xs font-medium text-muted-foreground block mb-1">
                                            Business Email <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <input
                                                id="hero-email"
                                                name="email"
                                                type="email"
                                                required
                                                placeholder="sarah@agency.com"
                                                className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-background/60 border border-border/60 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 text-foreground placeholder:text-muted-foreground/40"
                                            />
                                            <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground/50" />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="hero-phone" className="text-xs font-medium text-muted-foreground block mb-1">
                                            Phone / WhatsApp (With Country Code)
                                        </label>
                                        <div className="relative">
                                            <input
                                                id="hero-phone"
                                                name="phone"
                                                type="tel"
                                                placeholder="+1 (555) 019-2834"
                                                className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-background/60 border border-border/60 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 text-foreground placeholder:text-muted-foreground/40"
                                            />
                                            <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground/50" />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="hero-message" className="text-xs font-medium text-muted-foreground block mb-1">
                                            Brief Project Requirements <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <textarea
                                                id="hero-message"
                                                name="message"
                                                rows={3}
                                                required
                                                placeholder="Describe your goals, tech stack, or team requirements..."
                                                className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-background/60 border border-border/60 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 text-foreground resize-none placeholder:text-muted-foreground/40"
                                            />
                                            <MessageSquare size={16} className="absolute left-3 top-3 text-muted-foreground/50" />
                                        </div>
                                    </div>

                                    {state?.success === false && (
                                        <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs">
                                            {state.message}
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={isPending}
                                        className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-50"
                                    >
                                        {isPending ? (
                                            <>
                                                <Loader2 size={16} className="animate-spin" />
                                                Transmitting...
                                            </>
                                        ) : (
                                            <>
                                                Book Consultation Call
                                                <Send size={15} />
                                            </>
                                        )}
                                    </button>
                                    <p className="text-[11px] text-center text-muted-foreground/70">
                                        Strict NDA Protection • Direct Access to Technical Lead • No High-Pressure Sales
                                    </p>
                                </form>
                            )}
                        </div>
                    </div>
                </div>

                {/* Target Audience Section */}
                <section className="mb-24">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <span className="text-xs font-semibold uppercase tracking-wider text-primary">Strategic Fit</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">Who This Service Is Designed For</h2>
                        <p className="text-muted-foreground text-sm md:text-base mt-2">
                            Our offshore operational models are structured to eliminate hiring bottlenecks, reduce cost-per-deliverable, and maintain uncompromising quality standards.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {props.audience.map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-card/60 backdrop-blur-md rounded-2xl p-6 border border-white/5 hover:border-primary/40 transition-all group"
                            >
                                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold mb-4 group-hover:scale-105 transition-transform">
                                    0{idx + 1}
                                </div>
                                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Key Deliverables Section */}
                <section id="deliverables" className="mb-24">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <span className="text-xs font-semibold uppercase tracking-wider text-primary">Scope & Deliverables</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">Specific Outputs You Can Expect</h2>
                        <p className="text-muted-foreground text-sm md:text-base mt-2">
                            We avoid vague consulting advice. Every offshore engagement includes tangible, measurable deliverables backed by transparent documentation.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {props.deliverables.map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-gradient-to-b from-card/80 to-card/40 backdrop-blur-md rounded-3xl p-7 border border-white/10 hover:border-primary/50 transition-all flex flex-col justify-between"
                            >
                                <div>
                                    <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                                    <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{item.description}</p>
                                    <ul className="space-y-2 mb-6">
                                        {item.features.map((feat, fIdx) => (
                                            <li key={fIdx} className="flex items-start text-xs sm:text-sm text-foreground/90 gap-2">
                                                <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                                                <span>{feat}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Tech Stack & Tooling Matrix */}
                <section className="mb-24">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <span className="text-xs font-semibold uppercase tracking-wider text-primary">Tooling & Engineering</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">Technologies & Platforms We Deploy</h2>
                        <p className="text-muted-foreground text-sm md:text-base mt-2">
                            Our team works with enterprise-standard frameworks, diagnostic tools, and marketing intelligence software.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {props.techStack.map((group, idx) => (
                            <div key={idx} className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-white/5">
                                <h3 className="text-base font-bold text-foreground mb-4 pb-2 border-b border-border/40">
                                    {group.category}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {group.tools.map((tool, tIdx) => (
                                        <span
                                            key={tIdx}
                                            className="px-3 py-1.5 rounded-lg bg-secondary/80 border border-white/5 text-xs text-foreground/90 font-medium"
                                        >
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 4-Step Offshore Workflow */}
                <section className="mb-24">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <span className="text-xs font-semibold uppercase tracking-wider text-primary">Execution Model</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">How We Collaborate Seamlessly Across Borders</h2>
                        <p className="text-muted-foreground text-sm md:text-base mt-2">
                            A structured, predictable 4-phase process that keeps projects on schedule, communication transparent, and milestones measurable.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {props.workflow.map((step, idx) => (
                            <div
                                key={idx}
                                className="relative bg-card/60 backdrop-blur-md rounded-2xl p-6 border border-white/5 flex flex-col justify-between"
                            >
                                <div>
                                    <span className="text-3xl font-extrabold text-primary/40 block mb-3">{step.step}</span>
                                    <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Engagement Models */}
                <section className="mb-24">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <span className="text-xs font-semibold uppercase tracking-wider text-primary">Flexible Collaboration</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">Offshore Engagement Models</h2>
                        <p className="text-muted-foreground text-sm md:text-base mt-2">
                            Select the hiring structure that aligns with your operational cadence, budget, and project roadmap.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {props.engagementModels.map((model, idx) => (
                            <div
                                key={idx}
                                className={`rounded-3xl p-7 border flex flex-col justify-between ${
                                    idx === 0 
                                        ? "bg-card/90 border-primary/50 shadow-xl shadow-primary/5" 
                                        : "bg-card/50 border-white/10"
                                }`}
                            >
                                <div>
                                    <h3 className="text-xl font-bold text-foreground mb-1">{model.name}</h3>
                                    <p className="text-xs text-primary font-medium mb-4">Best for: {model.bestFor}</p>
                                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{model.description}</p>
                                    <ul className="space-y-2.5 mb-6">
                                        {model.highlights.map((hl, hIdx) => (
                                            <li key={hIdx} className="flex items-start text-xs sm:text-sm text-foreground gap-2">
                                                <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                                                <span>{hl}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <a
                                    href="#contact-quote"
                                    className="w-full text-center py-2.5 rounded-xl bg-secondary/80 hover:bg-primary hover:text-primary-foreground border border-white/10 transition-colors text-xs font-semibold"
                                >
                                    Select Engagement Model
                                </a>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Service Limitations & Honest Grounding */}
                <section className="mb-24">
                    <div className="max-w-4xl mx-auto bg-secondary/20 rounded-3xl p-8 border border-white/5">
                        <div className="flex items-center gap-3 mb-6">
                            <Shield className="text-primary w-6 h-6" />
                            <h2 className="text-2xl font-bold text-foreground">Service Transparency & Real Expectations</h2>
                        </div>
                        <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                            We pride ourselves on technical rigor and intellectual honesty. We do not make misleading guarantees, promise overnight #1 Google positions, or hide operational prerequisites.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {props.limitations.map((lim, idx) => (
                                <div key={idx} className="bg-background/40 p-5 rounded-2xl border border-white/5">
                                    <h3 className="text-sm font-bold text-foreground mb-1.5 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        {lim.point}
                                    </h3>
                                    <p className="text-xs text-muted-foreground leading-relaxed">{lim.explanation}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQs Section (Accordion) */}
                <section className="mb-24 max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-xs font-semibold uppercase tracking-wider text-primary">Got Questions?</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">Frequently Asked Questions</h2>
                        <p className="text-muted-foreground text-sm mt-2">
                            Clear answers about timezone overlap, IP ownership, communications, and contract terms.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {props.faqs.map((faq, idx) => {
                            const isOpen = openFaqIndex === idx
                            return (
                                <div
                                    key={idx}
                                    className="rounded-2xl border border-white/10 bg-card/60 backdrop-blur-sm overflow-hidden transition-colors"
                                >
                                    <button
                                        onClick={() => toggleFaq(idx)}
                                        className="w-full text-left px-6 py-4 flex items-center justify-between text-base font-semibold text-foreground focus:outline-none"
                                        aria-expanded={isOpen}
                                    >
                                        <span>{faq.question}</span>
                                        <ChevronDown
                                            size={18}
                                            className={`text-primary transition-transform duration-300 shrink-0 ml-4 ${
                                                isOpen ? "rotate-180" : ""
                                            }`}
                                        />
                                    </button>
                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.25 }}
                                            >
                                                <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-white/5 pt-3">
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            )
                        })}
                    </div>
                </section>

                {/* Related Services Internal Linking */}
                <section className="mb-24">
                    <div className="text-center max-w-3xl mx-auto mb-10">
                        <span className="text-xs font-semibold uppercase tracking-wider text-primary">Cross-Disciplinary Teams</span>
                        <h2 className="text-2xl md:text-3xl font-bold mt-1 text-foreground">Explore Related Offshore Practices</h2>
                        <p className="text-muted-foreground text-xs md:text-sm mt-1">
                            Build a complete digital engineering and growth ecosystem with our integrated offshore capabilities.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {props.relatedServices.map((rel, idx) => (
                            <Link
                                key={idx}
                                href={rel.href}
                                className="group bg-card/50 hover:bg-card/80 p-6 rounded-2xl border border-white/5 hover:border-primary/40 transition-all flex flex-col justify-between"
                            >
                                <div>
                                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors flex items-center justify-between">
                                        {rel.title}
                                        <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                                    </h3>
                                    <p className="text-muted-foreground text-xs leading-relaxed mt-2">{rel.description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Bottom CTA / Consultation Form */}
                <section id="contact-quote" className="max-w-4xl mx-auto">
                    <div className="bg-gradient-to-br from-card to-card/60 rounded-3xl p-8 md:p-12 border border-primary/30 shadow-2xl relative overflow-hidden">
                        <div className="text-center max-w-2xl mx-auto mb-8">
                            <span className="text-xs font-bold uppercase tracking-widest text-primary">Start Your Partnership</span>
                            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">Ready to Build Your Offshore Engine?</h2>
                            <p className="text-muted-foreground text-sm md:text-base mt-2">
                                Send us your project requirements or book a scoping call with our senior technical specialists.
                            </p>
                        </div>

                        {state?.success ? (
                            <div className="text-center py-10">
                                <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Check size={32} />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">Thank You for Reaching Out</h3>
                                <p className="text-muted-foreground">{state.message}</p>
                            </div>
                        ) : (
                            <form action={action} className="space-y-6">
                                <input type="hidden" name="subject" value={`Offshore Consultation: ${props.serviceKey}`} />
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="btm-name" className="text-xs font-medium text-muted-foreground block mb-1.5">
                                            Your Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            id="btm-name"
                                            name="name"
                                            type="text"
                                            required
                                            placeholder="Michael Chang"
                                            className="w-full px-4 py-3 rounded-xl bg-background/60 border border-border/60 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 text-foreground"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="btm-email" className="text-xs font-medium text-muted-foreground block mb-1.5">
                                            Work Email <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            id="btm-email"
                                            name="email"
                                            type="email"
                                            required
                                            placeholder="michael@company.com"
                                            className="w-full px-4 py-3 rounded-xl bg-background/60 border border-border/60 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 text-foreground"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="btm-phone" className="text-xs font-medium text-muted-foreground block mb-1.5">
                                            Phone / WhatsApp (With Country Code)
                                        </label>
                                        <input
                                            id="btm-phone"
                                            name="phone"
                                            type="tel"
                                            placeholder="+44 7911 123456"
                                            className="w-full px-4 py-3 rounded-xl bg-background/60 border border-border/60 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 text-foreground"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="btm-service" className="text-xs font-medium text-muted-foreground block mb-1.5">
                                            Primary Engagement Focus
                                        </label>
                                        <input
                                            id="btm-service"
                                            name="service"
                                            type="text"
                                            defaultValue={props.serviceKey}
                                            className="w-full px-4 py-3 rounded-xl bg-background/60 border border-border/60 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 text-foreground"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="btm-message" className="text-xs font-medium text-muted-foreground block mb-1.5">
                                        Project Scope, Timeline, or Question <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        id="btm-message"
                                        name="message"
                                        rows={4}
                                        required
                                        placeholder="Please provide details about your target timeline, current challenges, or specific skills needed..."
                                        className="w-full px-4 py-3 rounded-xl bg-background/60 border border-border/60 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 text-foreground resize-none"
                                    />
                                </div>

                                {state?.success === false && (
                                    <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs">
                                        {state.message}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isPending}
                                    className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold text-base hover:opacity-90 transition-all shadow-xl shadow-primary/25 flex items-center justify-center gap-2 disabled:opacity-50"
                                >
                                    {isPending ? (
                                        <>
                                            <Loader2 size={20} className="animate-spin" />
                                            Submitting Inquiry...
                                        </>
                                    ) : (
                                        <>
                                            Submit Project Requirements
                                            <Send size={18} />
                                        </>
                                    )}
                                </button>
                                <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-xs text-muted-foreground">
                                    <span className="flex items-center gap-1.5"><Shield size={14} className="text-primary" /> 100% Confidential NDA</span>
                                    <span className="flex items-center gap-1.5"><Clock size={14} className="text-primary" /> Under 24h Response</span>
                                    <span className="flex items-center gap-1.5"><Globe size={14} className="text-primary" /> Direct English Communication</span>
                                </div>
                            </form>
                        )}
                    </div>
                </section>
            </div>
        </main>
    )
}
