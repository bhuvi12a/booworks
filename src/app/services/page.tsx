import { Metadata } from "next"
import Link from "next/link"
import { generatePageMetadata, generateBreadcrumbSchema, generateFAQSchema, SITE_CONFIG } from "@/lib/seo-config"
import { 
    Search, Code2, Globe2, ShoppingCart, 
    Megaphone, Palette, Wrench, Cpu, ArrowRight, 
    CheckCircle2, Shield, Clock, Users, Sparkles
} from "lucide-react"

export const metadata: Metadata = generatePageMetadata({
    title: "Offshore Digital Marketing & Web Development Services | BooWorks",
    description: "Explore BooWorks' full-spectrum offshore services: SEO, custom Next.js web development, software engineering, Shopify ecommerce, PPC, and website maintenance from India.",
    path: "/services",
    keywords: [
        "offshore digital marketing services",
        "offshore web development services",
        "offshore seo services",
        "offshore software development",
        "offshore ecommerce development",
        "offshore ppc services",
        "offshore social media marketing",
        "offshore website maintenance",
        "offshore digital marketing agency india",
        "digital marketing services hosur",
    ],
})

const practices = [
    {
        title: "Offshore SEO Services",
        href: "/offshore-seo-services",
        badge: "Search Authority",
        icon: Search,
        description: "Enterprise technical SEO audits, international keyword intent mapping, on-page optimization, and white-hat editorial link acquisition.",
        highlights: ["Core Web Vitals optimization", "White-label agency fulfillment", "Zero PBNs / 100% white-hat", "Live Looker Studio reporting"]
    },
    {
        title: "Offshore Web Development",
        href: "/offshore-web-development-services",
        badge: "Modern Frontend",
        icon: Code2,
        description: "Custom high-speed website and web portal engineering using Next.js 16, React 19, TypeScript, and modern headless CMS platforms.",
        highlights: ["Server-Side Rendering (SSR/SSG)", "1:1 pixel-perfect Figma coding", "Sub-second page speeds (90+ CWV)", "100% client code ownership"]
    },
    {
        title: "Offshore Digital Marketing",
        href: "/offshore-digital-marketing-services",
        badge: "Full-Funnel Growth",
        icon: Globe2,
        description: "Comprehensive multi-channel digital growth engines combining organic search, performance ads, content marketing, and conversion optimization.",
        highlights: ["Dedicated offshore marketing pods", "US/UK/AUS/UAE timezone overlap", "Multi-channel funnel attribution", "Save 50-70% on payroll overhead"]
    },
    {
        title: "Offshore Software Development",
        href: "/offshore-software-development",
        badge: "Cloud & SaaS",
        icon: Cpu,
        description: "Custom cloud software, multi-tenant SaaS platforms, cross-platform mobile apps, and scalable REST/GraphQL API architectures.",
        highlights: ["Senior full-stack engineers in India", "Agile 2-week sprint delivery", "Enforceable bilateral NDAs", "PostgreSQL, MongoDB, AWS & Docker"]
    },
    {
        title: "Offshore Ecommerce Development",
        href: "/offshore-ecommerce-development",
        badge: "Retail & D2C",
        icon: ShoppingCart,
        description: "Bespoke Shopify Online Store 2.0 themes, custom WooCommerce stores, headless ecommerce storefronts, and seamless platform migrations.",
        highlights: ["Zero-downtime SEO-safe migrations", "Checkout conversion optimization", "Custom ERP & inventory sync", "Sub-second catalog browsing"]
    },
    {
        title: "Offshore PPC & Paid Advertising",
        href: "/offshore-ppc-services",
        badge: "Performance Media",
        icon: Megaphone,
        description: "Data-driven Google Search, Performance Max, Meta Ads, and B2B LinkedIn campaign management focused on ROAS and pipeline generation.",
        highlights: ["Certified Google & Meta specialists", "Server-side Meta CAPI & GA4", "Zero markups on media spend", "Negative keyword daily pruning"]
    },
    {
        title: "Offshore Social Media & Creative",
        href: "/offshore-social-media-marketing",
        badge: "Brand & Content",
        icon: Palette,
        description: "Engaging social media management, brand identity kits, multi-slide carousels, short-form video editing (Reels/TikTok), and motion graphics.",
        highlights: ["Dedicated designers & video editors", "24-48 hour asset turnaround", "Figma design systems & brand bibles", "Omnichannel publishing workflows"]
    },
    {
        title: "Offshore Website Maintenance",
        href: "/offshore-website-maintenance-services",
        badge: "Site Reliability",
        icon: Wrench,
        description: "Proactive 24/7 uptime monitoring, staging-first security patching, daily cloud backups, continuous speed tuning, and emergency SLA support.",
        highlights: ["Under 30-minute critical response SLA", "Staging-first zero-breakage updates", "Automated off-site cloud backups", "WordPress, Shopify & Next.js care"]
    }
]

const hubFaqs = [
    {
        question: "Why should an overseas company choose BooWorks as its offshore partner in India?",
        answer: "BooWorks provides an optimal blend of technical seniority, modern technology stacks (Next.js, React, TypeScript), fluent English communication, and rigorous project management. We eliminate the communication frictions typical of legacy BPOs by embedding directly into your Slack and project management systems with guaranteed daily working hour overlap."
    },
    {
        question: "How do you protect our confidential business data and intellectual property?",
        answer: "We sign enforceable bilateral Non-Disclosure Agreements (NDAs) and intellectual property assignment deeds prior to commencing work. All source code is committed directly to your private repositories, environments are access-controlled, and we adhere to international data security best practices."
    },
    {
        question: "What engagement models are available across your service lines?",
        answer: "We offer three primary engagement structures: (1) Dedicated Remote Teams on a monthly full-time retainer, (2) Fixed-Price Milestone Projects with defined deliverables and timelines, and (3) White-Label Agency Partnerships with unbranded client reporting."
    },
    {
        question: "Which international markets and timezones do you actively support?",
        answer: "We actively support clients across the United States (EST/PST), United Kingdom (GMT), Canada, Australia (AEST), and the United Arab Emirates (GST), structuring daily real-time overlap for standups, approvals, and strategy discussions."
    }
]

const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
]

export default function ServicesPage() {
    const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs)
    const faqSchema = generateFAQSchema(hubFaqs)

    const serviceListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "@id": `${SITE_CONFIG.url}/services#servicelist`,
        name: "BooWorks Offshore Digital & Web Engineering Practices",
        itemListElement: practices.map((p, idx) => ({
            "@type": "ListItem",
            position: idx + 1,
            name: p.title,
            url: `${SITE_CONFIG.url}${p.href}`,
            description: p.description,
        })),
    }

    return (
        <main className="min-h-screen bg-background relative overflow-hidden pt-28 pb-16">
            {/* Inject Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceListSchema) }}
            />

            {/* Background Ambient Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-[-5%] left-[-10%] w-[45%] h-[45%] bg-primary/15 rounded-full blur-[130px]" />
                <div className="absolute top-[40%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[130px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                {/* Header Section */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs md:text-sm font-semibold text-primary mb-4">
                        <Sparkles size={14} className="text-primary animate-pulse" />
                        Comprehensive Offshore Engineering & Growth Matrix
                    </div>
                    
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.15] mb-6">
                        Offshore Digital Marketing & Custom Web Engineering Services
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-normal">
                        Empower your organization with specialized remote teams in India. We combine data-driven search marketing, modern Next.js software engineering, and performance paid media to scale your pipeline with capital efficiency.
                    </p>

                    {/* Quick Value Metrics */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 pt-8 border-t border-border/40">
                        <div>
                            <span className="text-2xl md:text-3xl font-extrabold text-foreground">50-70%</span>
                            <p className="text-xs text-muted-foreground uppercase tracking-wider mt-0.5">Overhead Savings</p>
                        </div>
                        <div>
                            <span className="text-2xl md:text-3xl font-extrabold text-foreground">100%</span>
                            <p className="text-xs text-muted-foreground uppercase tracking-wider mt-0.5">Code & IP Ownership</p>
                        </div>
                        <div>
                            <span className="text-2xl md:text-3xl font-extrabold text-foreground">24-48h</span>
                            <p className="text-xs text-muted-foreground uppercase tracking-wider mt-0.5">Sprint Velocity</p>
                        </div>
                        <div>
                            <span className="text-2xl md:text-3xl font-extrabold text-foreground">US/UK/UAE</span>
                            <p className="text-xs text-muted-foreground uppercase tracking-wider mt-0.5">Timezone Overlap</p>
                        </div>
                    </div>
                </div>

                {/* 8 Core Practice Pillars Grid */}
                <section className="mb-24">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-border/40">
                        <div>
                            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Core Practices</span>
                            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mt-1">Specialized Service Offerings</h2>
                        </div>
                        <p className="text-xs sm:text-sm text-muted-foreground mt-2 sm:mt-0 max-w-md">
                            Select a dedicated practice to review detailed deliverables, technology stacks, workflows, and transparent pricing models.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {practices.map((practice) => {
                            const Icon = practice.icon
                            return (
                                <Link
                                    key={practice.title}
                                    href={practice.href}
                                    className="group bg-card/60 hover:bg-card/90 backdrop-blur-md rounded-3xl p-6 border border-white/10 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
                                >
                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                                                <Icon size={24} />
                                            </div>
                                            <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-secondary/80 text-muted-foreground border border-white/5">
                                                {practice.badge}
                                            </span>
                                        </div>

                                        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                            {practice.title}
                                        </h3>

                                        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-6">
                                            {practice.description}
                                        </p>

                                        <ul className="space-y-2 mb-6">
                                            {practice.highlights.map((h, i) => (
                                                <li key={i} className="flex items-start text-xs text-foreground/85 gap-2">
                                                    <CheckCircle2 size={14} className="text-primary shrink-0 mt-0.5" />
                                                    <span>{h}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-primary">
                                        <span>Explore Practice</span>
                                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </section>

                {/* Why Outsource to India Section */}
                <section className="mb-24 bg-card/40 rounded-3xl p-8 md:p-12 border border-white/10">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <span className="text-xs font-semibold uppercase tracking-wider text-primary">The India Advantage</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Why Global Brands Partner with BooWorks in India</h2>
                        <p className="text-muted-foreground text-sm md:text-base mt-2">
                            India has evolved from low-cost support into the premier global engineering powerhouse. We deliver senior technical leadership without the high cost of domestic hiring.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-background/40 p-6 rounded-2xl border border-white/5">
                            <Users className="w-8 h-8 text-primary mb-4" />
                            <h3 className="text-lg font-bold text-foreground mb-2">Elite Technical Talent</h3>
                            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                Access certified Next.js developers, full-stack engineers, and senior SEO strategists who build with modern component architectures and clean documentation.
                            </p>
                        </div>
                        <div className="bg-background/40 p-6 rounded-2xl border border-white/5">
                            <Clock className="w-8 h-8 text-primary mb-4" />
                            <h3 className="text-lg font-bold text-foreground mb-2">Timezone Overlap & Agility</h3>
                            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                Our schedules align with US EST/PST, UK GMT, and UAE GST business hours. Enjoy overnight task progression while your domestic team sleeps.
                            </p>
                        </div>
                        <div className="bg-background/40 p-6 rounded-2xl border border-white/5">
                            <Shield className="w-8 h-8 text-primary mb-4" />
                            <h3 className="text-lg font-bold text-foreground mb-2">NDA & IP Security</h3>
                            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                Comprehensive non-disclosure agreements, complete client IP assignment, secure code repositories, and unbranded white-label options.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Regional & Domestic Hubs */}
                <section className="mb-24">
                    <div className="text-center max-w-3xl mx-auto mb-8">
                        <span className="text-xs font-semibold uppercase tracking-wider text-primary">Geographic Reach</span>
                        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mt-1">Regional Delivery Centers & Local Hubs</h2>
                        <p className="text-muted-foreground text-xs sm:text-sm mt-1">
                            In addition to serving international clients across North America, Europe, Australia, and the Middle East, we operate dedicated regional digital marketing practices in key business hubs.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-3">
                        {[
                            { name: "Offshore Hub - New York (USA)", href: "/seo-services-new-york" },
                            { name: "Middle East Hub - Dubai (UAE)", href: "/seo-services-dubai" },
                            { name: "Bangalore Tech Hub", href: "/seo-services-bangalore" },
                            { name: "Chennai IT Corridor", href: "/seo-services-chennai" },
                            { name: "Coimbatore Engineering Hub", href: "/seo-services-coimbatore" },
                            { name: "Hosur Industrial Delivery Center", href: "/seo-services-hosur" },
                            { name: "Tiruppur Knitwear & Export Hub", href: "/seo-services-tiruppur" },
                            { name: "Salem Manufacturing Hub", href: "/seo-services-salem" },
                            { name: "Tiruchirappalli (Trichy)", href: "/seo-services-trichy" },
                            { name: "Erode Agro-Export Hub", href: "/seo-services-erode" },
                        ].map((loc) => (
                            <Link
                                key={loc.name}
                                href={loc.href}
                                className="px-4 py-2 rounded-full bg-secondary/40 hover:bg-primary/20 border border-white/5 hover:border-primary/40 text-xs text-foreground transition-all"
                            >
                                {loc.name}
                            </Link>
                        ))}
                    </div>
                </section>

                {/* FAQs Section */}
                <section className="mb-24 max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <span className="text-xs font-semibold uppercase tracking-wider text-primary">Got Questions?</span>
                        <h2 className="text-3xl font-bold text-foreground mt-1">Frequently Asked Questions</h2>
                    </div>

                    <div className="space-y-4">
                        {hubFaqs.map((faq, i) => (
                            <div key={i} className="bg-card/50 rounded-2xl p-6 border border-white/5">
                                <h3 className="text-base font-bold text-foreground mb-2">{faq.question}</h3>
                                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Consultation Call to Action */}
                <section className="text-center max-w-3xl mx-auto bg-gradient-to-r from-card to-card/60 p-10 rounded-3xl border border-primary/30 shadow-2xl">
                    <h2 className="text-3xl font-bold text-foreground mb-3">Ready to Discuss Your Offshore Strategy?</h2>
                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                        Book a 30-minute scoping call with our technical leadership. We will evaluate your requirements, provide honest feedback, and prepare a tailored milestone proposal.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-base shadow-lg shadow-primary/25 hover:opacity-90 transition-all hover:scale-105"
                    >
                        Schedule a Strategy Consultation
                        <ArrowRight size={18} className="ml-2" />
                    </Link>
                </section>
            </div>
        </main>
    )
}
