import { Metadata } from 'next'
import { generatePageMetadata, generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/seo-config'
import ServiceLandingPage from '@/app/Components/ServiceLandingPage'

export const metadata: Metadata = generatePageMetadata({
    title: 'Offshore Ecommerce & WordPress Development Services | BooWorks',
    description: 'Custom Shopify, WooCommerce, and WordPress development from BooWorks. Hire dedicated offshore ecommerce developers in India for high-converting online stores.',
    path: '/offshore-ecommerce-development',
    keywords: [
        'offshore ecommerce website development',
        'offshore ecommerce development company',
        'offshore wordpress development',
        'offshore wordpress development company',
        'offshore wordpress developers',
        'offshore woocommerce development',
        'offshore shopify development',
        'offshore shopify developers',
        'offshore custom ecommerce development',
        'hire offshore ecommerce developers india',
    ],
})

const faqs = [
    {
        question: "Should our brand choose Shopify, WooCommerce, or Custom Headless Ecommerce?",
        answer: "Shopify is ideal for D2C brands wanting fast time-to-market, robust checkout security, and low hosting maintenance. WooCommerce is best for businesses seeking full ownership, extensive catalog customization, and lower transaction fees. Custom Headless (Next.js Commerce) is the gold standard for high-volume enterprises demanding sub-second load speeds and complete frontend design freedom."
    },
    {
        question: "Can your offshore developers migrate our store without losing SEO rankings or customer data?",
        answer: "Yes. We execute zero-downtime, SEO-safe ecommerce migrations. We preserve historical order histories, customer records, and product reviews, while establishing 1:1 301 URL redirect mappings to protect search engine rankings and indexed backlinks."
    },
    {
        question: "How do you optimize ecommerce checkout flow and conversion rates?",
        answer: "We engineer single-page checkouts, integrate local payment methods (Apple Pay, Google Pay, Klarna, Afterpay, Stripe), streamline guest checkout paths, minimize form friction, and implement exit-intent recovery mechanisms."
    },
    {
        question: "Can you build custom Shopify private apps and third-party integrations?",
        answer: "Yes. We develop custom Shopify apps (Node.js/React/Remix) and WooCommerce plugins to connect your store with ERPs (SAP, NetSuite), warehouse management systems, custom inventory feeds, and custom 3PL logistics APIs."
    },
    {
        question: "How do you handle ecommerce speed optimization and Core Web Vitals?",
        answer: "We audit and remove bloated third-party app scripts, implement lazy-loading for heavy image catalogs, serve WebP/AVIF images via CDN, and optimize JavaScript execution to ensure mobile PageSpeed scores that increase conversions and lower ad bounce rates."
    }
]

const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Offshore Ecommerce & WordPress Development', url: '/offshore-ecommerce-development' },
]

export default function OffshoreEcommerceDevelopmentPage() {
    const serviceSchema = generateServiceSchema({
        name: 'Offshore Ecommerce & WordPress Development Services',
        description: 'End-to-end ecommerce and CMS engineering services including custom Shopify theme development, WooCommerce architecture, WordPress development, and headless storefronts.',
        path: '/offshore-ecommerce-development',
        serviceType: 'Ecommerce Development Outsourcing',
    })

    const faqSchema = generateFAQSchema(faqs)
    const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs)

    return (
        <ServiceLandingPage
            badge="D2C & Retail Engineering • India Delivery Center"
            h1="Offshore Ecommerce & WordPress Development Services"
            subheadline="Build high-converting, scalable online stores. Hire dedicated offshore Shopify developers, WooCommerce specialists, and WordPress engineers in India to accelerate retail revenue."
            serviceKey="Offshore Ecommerce & WordPress Development"
            breadcrumbs={breadcrumbs}
            valueProps={[
                { label: "Platforms", detail: "Shopify, WooCommerce, Next.js" },
                { label: "Conversion Rate", detail: "Frictionless Checkout UX" },
                { label: "SEO Preserved", detail: "Zero-Loss Store Migration" },
                { label: "Cost Advantage", detail: "Save 50-60% on Dev" },
            ]}
            audience={[
                {
                    title: "D2C Brands & Retailers",
                    description: "Launch bespoke, high-converting digital storefronts that stand out from generic competitors and turn visitors into buyers."
                },
                {
                    title: "Ecommerce Agencies",
                    description: "Scale your store build and customization capacity without hiring expensive domestic Liquid and PHP developers."
                },
                {
                    title: "B2B Wholesalers",
                    description: "Implement custom B2B portals with tiered wholesale pricing, bulk ordering sheets, and corporate quotation approval flows."
                },
                {
                    title: "High-Volume Merchants",
                    description: "Migrate legacy slow stores to modern headless Next.js Commerce platforms with instant page transitions."
                }
            ]}
            deliverables={[
                {
                    title: "Custom Shopify Store & Theme Development",
                    description: "Bespoke Shopify Online Store 2.0 themes engineered from scratch using clean Liquid, Tailwind, and modular sections.",
                    features: [
                        "Custom Shopify 2.0 sections and drag-and-drop block systems",
                        "Mobile-optimized product detail pages with sticky ATC buttons",
                        "Sub-second catalog filtering, sorting, and search mechanics",
                        "Seamless integration of Klaviyo, Reviews, and Upsell modules"
                    ]
                },
                {
                    title: "WooCommerce & Custom WordPress Engineering",
                    description: "Robust, self-hosted ecommerce solutions built for maximum flexibility, complex pricing, and content-heavy sites.",
                    features: [
                        "Custom WooCommerce theme and template development",
                        "Complex product configurators and custom variation builders",
                        "Subscription, membership, and digital download architectures",
                        "Database query optimization for rapid multi-thousand SKU queries"
                    ]
                },
                {
                    title: "Headless Ecommerce Storefronts",
                    description: "Decoupled Next.js frontend storefronts paired with Shopify Plus or BigCommerce backends for maximum speed and SEO.",
                    features: [
                        "Lightning-fast Next.js frontend with edge caching",
                        "GraphQL API integration with Shopify Storefront API",
                        "Instant client-side routing with zero page reload delays",
                        "Flawless 95+ mobile Google PageSpeed scores"
                    ]
                },
                {
                    title: "Platform Migrations & Data Transfer",
                    description: "Safe, zero-downtime store migrations that preserve historical data, customer passwords, and existing organic rankings.",
                    features: [
                        "Magento/WooCommerce to Shopify automated catalog migration",
                        "1:1 301 redirect mapping to preserve hard-earned SEO authority",
                        "Customer and historical order reconciliation and validation",
                        "Pre-launch sandbox staging testing and dry runs"
                    ]
                },
                {
                    title: "Custom Apps, Plugins & ERP Integrations",
                    description: "Bespoke integrations connecting your online storefront with inventory ERPs, CRMs, and custom fulfillment centers.",
                    features: [
                        "Custom private Shopify app development (Node/React/Remix)",
                        "Two-way synchronization with inventory and accounting software",
                        "Custom shipping carrier API and 3PL warehouse webhooks",
                        "Automated tax and multi-currency exchange calculation"
                    ]
                },
                {
                    title: "Speed, Conversion & Checkout Optimization",
                    description: "Targeted performance enhancements designed to slash page drop-off and maximize average order value (AOV).",
                    features: [
                        "Third-party app script auditing and lazy-loading",
                        "One-click upsell and cross-sell drawer implementations",
                        "Express payment gateway checkout integration",
                        "Abandoned cart and browse recovery automation triggers"
                    ]
                }
            ]}
            techStack={[
                {
                    category: "Ecommerce Platforms",
                    tools: ["Shopify / Shopify Plus", "WooCommerce", "WordPress", "BigCommerce", "Next.js Commerce"]
                },
                {
                    category: "Languages & Frameworks",
                    tools: ["Liquid", "PHP", "TypeScript", "React", "Next.js", "Tailwind CSS", "GraphQL"]
                },
                {
                    category: "Integrations & APIs",
                    tools: ["Stripe", "PayPal", "Klaviyo", "Gorgias", "Yotpo", "Zapier", "Rest APIs"]
                }
            ]}
            workflow={[
                {
                    step: "01",
                    title: "Catalog & UX Blueprint",
                    description: "We audit your product architecture, analyze conversion paths, define platform requirements, and wireframe key customer journeys."
                },
                {
                    step: "02",
                    title: "Theme Engineering & Setup",
                    description: "We develop the custom theme in a secure sandbox environment, implementing responsive components and app integrations."
                },
                {
                    step: "03",
                    title: "Data Migration & Payment QA",
                    description: "We migrate SKU catalogs, configure secure payment gateways, test checkout flows, and verify taxes and shipping rules."
                },
                {
                    step: "04",
                    title: "Launch & Conversion Monitoring",
                    description: "Zero-downtime DNS cutover, Google Analytics 4 ecommerce tracking validation, and 30-day post-launch warranty support."
                }
            ]}
            engagementModels={[
                {
                    name: "Dedicated Shopify / WP Developer",
                    bestFor: "D2C Brands with Continuous Iterations",
                    description: "Hire an experienced offshore ecommerce developer to build new landing pages, manage app integrations, and optimize UX weekly.",
                    highlights: [
                        "160 hours/month dedicated capacity",
                        "Direct communication via Slack/Teams",
                        "Fast turnaround for promotional sales & drops",
                        "Flexible monthly retainer without lock-in"
                    ]
                },
                {
                    name: "Turnkey Store Build / Redesign",
                    bestFor: "New Brand Launches & Store Rebuilds",
                    description: "Complete end-to-end design and development of your custom Shopify or WooCommerce store on a fixed-milestone contract.",
                    highlights: [
                        "Fixed investment with guaranteed launch timeline",
                        "Custom theme design & mobile-first checkout",
                        "Complete data migration & app configuration",
                        "Complimentary 30-day post-launch support"
                    ]
                },
                {
                    name: "White-Label Partner for Agencies",
                    bestFor: "Digital & Creative Agencies",
                    description: "Outsource your agency's ecommerce development backlog with unbranded staging environments, strict NDAs, and wholesale rates.",
                    highlights: [
                        "100% white-label unbranded execution",
                        "Direct collaboration with your designers",
                        "Figma-to-Shopify pixel-perfect fidelity",
                        "Predictable per-project wholesale pricing"
                    ]
                }
            ]}
            limitations={[
                {
                    point: "Third-Party App Subscription Fees",
                    explanation: "Store functionality that relies on commercial third-party Shopify apps or WordPress plugins requires direct licenses purchased under your account."
                },
                {
                    point: "Product Photography & Copy",
                    explanation: "High conversion rates depend heavily on professional product photography and persuasive descriptions. Clients provide visual assets or engage our creative copywriting team."
                },
                {
                    point: "Payment Gateway Merchant Approvals",
                    explanation: "Payment merchant underwriting (Stripe, PayPal, Shopify Payments) requires direct submission of your legal business documents and banking information."
                },
                {
                    point: "Platform Transaction Fees",
                    explanation: "Shopify and payment gateways charge standard transaction and processing fees according to your merchant tier agreements."
                }
            ]}
            faqs={faqs}
            relatedServices={[
                {
                    title: "Offshore Paid Advertising (PPC)",
                    href: "/offshore-ppc-services",
                    description: "Scale store sales with high-ROAS Google Shopping and Meta Catalog advertising management."
                },
                {
                    title: "Offshore SEO Services",
                    href: "/offshore-seo-services",
                    description: "Rank product categories and high-intent commercial keywords organically top on Google."
                },
                {
                    title: "Offshore Website Maintenance",
                    href: "/offshore-website-maintenance-services",
                    description: "24/7 store uptime monitoring, plugin security updates, and performance tuning."
                }
            ]}
            jsonLdSchemas={[serviceSchema, faqSchema, breadcrumbSchema]}
        />
    )
}
