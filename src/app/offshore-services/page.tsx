import { Metadata } from "next"
import Link from "next/link"
import { generatePageMetadata, generateBreadcrumbSchema, generateFAQSchema, SITE_CONFIG } from "@/lib/seo-config"
import { 
    Search, Code2, Globe2, ShoppingCart, 
    Megaphone, Palette, Wrench, Cpu, ArrowRight, 
    CheckCircle2, Shield, Clock, Users, Sparkles,
    Target, Share2, Video
} from "lucide-react"

export const metadata: Metadata = generatePageMetadata({
    title: "Offshore Digital Marketing & Web Development Services | BooWorks",
    description: "Explore BooWorks full-spectrum offshore services: SEO, custom Next.js web development, software engineering, Shopify ecommerce, Google Ads, Meta Ads, video editing, and website maintenance from India.",
    path: "/offshore-services",
    keywords: [
        "offshore digital marketing services",
        "offshore web development services",
        "offshore seo services",
        "offshore software development",
        "offshore ecommerce development",
        "offshore ppc services",
        "offshore google ads management",
        "offshore meta ads management",
        "offshore video editing services",
        "offshore social media marketing",
        "offshore website maintenance",
        "offshore digital marketing agency india",
        "offshore services hub",
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
        title: "Offshore Google Ads Management",
        href: "/offshore-google-ads-management",
        badge: "Search & PMax",
        icon: Target,
        description: "Laser-targeted Google Search, Performance Max, and Shopping campaigns engineered to capture high-intent commercial buyers.",
        highlights: ["Certified Google Partner specialists", "Single-theme ad group (STAG) precision", "Enhanced Conversions & GA4 tracking", "Daily negative keyword sculpting"]
    },
    {
        title: "Offshore Meta Ads Management",
        href: "/offshore-meta-ads-management",
        badge: "Paid Social & ROAS",
        icon: Share2,
        description: "Full-funnel Facebook and Instagram advertising with high-converting creative iterations and server-side CAPI attribution.",
        highlights: ["Meta Blueprint certified buyers", "Server-side Meta Conversions API", "Dynamic creative testing (DCT)", "Advantage+ shopping scaling"]
    },
    {
        title: "Offshore Video Editing Services",
        href: "/offshore-video-editing-services",
        badge: "Post-Production",
        icon: Video,
        description: "Dedicated video editing and 2D/3D motion graphics for YouTube channels, viral TikToks/Reels, SaaS explainers, and paid video ads.",
        highlights: ["Fast 24-48h turnaround time", "Frame.io timecoded review workflows", "Animated dynamic captions & sound FX", "Adobe Premiere & DaVinci Resolve"]
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
        description: "Multi-channel paid media covering Google, Meta, Bing, and LinkedIn advertising focused on lower CAC and higher pipeline return.",
        highlights: ["Multi-network media strategy", "Unified cross-platform attribution", "Zero markups on media spend", "White-label agency fulfillment"]
    },
    {
        title: "Offshore Social Media & Creative",
        href: "/offshore-social-media-marketing",
        badge: "Brand & Content",
        icon: Palette,
        description: "Engaging social media management, brand identity kits, multi-slide carousels, short-form video editing, and motion graphics.",
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
        answer: "BooWorks provides an optimal blend of technical seniority, modern technology stacks (Next.js, React, TypeScript), fluent English communication, and rigorous project management. We eliminate communication frictions by embedding directly into your Slack and project management systems with guaranteed daily working hour overlap."
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
    { name: "Offshore Services", url: "/offshore-services" },
]

export default function OffshoreServicesHubPage() {
    const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs)
    const faqSchema = generateFAQSchema(hubFaqs)

    const serviceListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "@id": `${SITE_CONFIG.url}/offshore-services#servicelist`,
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
                        Empower your organization with specialized remote teams in India. We combine data-driven search marketing, modern Next.js software engineering, certified Google & Meta Ads management, and high-velocity video editing to scale your pipeline with capital efficiency.
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

                {/* Core Practice Pillars Grid */}
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

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

                                    <div className="pt-4 border-t border-border/40 flex items-center justify-between text-xs font-semibold text-primary group-hover:translate-x-1 transition-transform">
                                        <span>Explore Practice Details</span>
                                        <ArrowRight size={14} />
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </section>

                {/* Delivery Model & Trust Guarantee */}
                <section className="mb-24 bg-card/40 backdrop-blur-md border border-white/10 rounded-3xl p-8 sm:p-12">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <span className="text-xs font-semibold uppercase tracking-wider text-primary">Risk-Free Engagement</span>
                        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mt-1">Why Global Teams Trust BooWorks</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="text-center space-y-3">
                            <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary mx-auto flex items-center justify-center">
                                <Shield size={24} />
                            </div>
                            <h4 className="font-bold text-foreground">Bilateral NDAs & IP Safety</h4>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                Complete legal security. We sign mutual NDAs before initial discovery and assign 100% intellectual property ownership to you upon delivery.
                            </p>
                        </div>

                        <div className="text-center space-y-3">
                            <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary mx-auto flex items-center justify-center">
                                <Clock size={24} />
                            </div>
                            <h4 className="font-bold text-foreground">Guaranteed Timezone Sync</h4>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                Our pods provide 3 to 5 hours of direct working overlap with US, UK, and Australian business hours for standups and rapid communication.
                            </p>
                        </div>

                        <div className="text-center space-y-3">
                            <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary mx-auto flex items-center justify-center">
                                <Users size={24} />
                            </div>
                            <h4 className="font-bold text-foreground">Dedicated Senior Pods</h4>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                No bait-and-switch junior staff. You interview and approve senior engineers, certified media buyers, and senior technical SEO specialists directly.
                            </p>
                        </div>

                        <div className="text-center space-y-3">
                            <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary mx-auto flex items-center justify-center">
                                <CheckCircle2 size={24} />
                            </div>
                            <h4 className="font-bold text-foreground">Transparent Agile Sprints</h4>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                Track every task in Jira or ClickUp. Review burndown charts, staging deployments, and live Looker Studio performance dashboards weekly.
                            </p>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="mb-24 max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-xs font-semibold uppercase tracking-wider text-primary">Common Inquiries</span>
                        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mt-1">Frequently Asked Questions</h2>
                    </div>

                    <div className="space-y-4">
                        {hubFaqs.map((faq, idx) => (
                            <details
                                key={idx}
                                className="group bg-card/60 backdrop-blur-md rounded-2xl p-6 border border-white/10 transition-colors open:border-primary/40 open:bg-card/90"
                            >
                                <summary className="font-semibold text-foreground text-sm sm:text-base cursor-pointer list-none flex items-center justify-between">
                                    <span>{faq.question}</span>
                                    <span className="text-primary text-xl ml-4 font-light transition-transform group-open:rotate-45">+</span>
                                </summary>
                                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mt-4 pt-4 border-t border-border/40 font-normal">
                                    {faq.answer}
                                </p>
                            </details>
                        ))}
                    </div>
                </section>

                {/* Conversion Call to Action */}
                <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 via-background to-blue-600/10 border border-primary/30 p-8 sm:p-14 text-center">
                    <div className="max-w-2xl mx-auto space-y-6">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
                            Ready to Build Your Offshore Delivery Engine?
                        </h2>
                        <p className="text-muted-foreground text-sm sm:text-base">
                            Schedule a 30-minute technical consultation with our engineering and growth directors to scope your project, review talent profiles, and receive a customized cost breakdown.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                            <Link
                                href="/contact"
                                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
                            >
                                Book Technical Consultation
                            </Link>
                            <Link
                                href="/services"
                                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-secondary/80 text-foreground font-semibold text-sm hover:bg-secondary transition-colors border border-white/10"
                            >
                                View Local Agency Services
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}
