import { Metadata } from 'next'
import { generatePageMetadata, generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/seo-config'
import ServiceLandingPage from '@/app/Components/ServiceLandingPage'

export const metadata: Metadata = generatePageMetadata({
    title: 'Offshore PPC Services & Google Ads Agency in India | BooWorks',
    description: 'Maximize ROAS with BooWorks offshore PPC services in India. Certified Google Ads & Meta Ads specialists delivering high-converting campaigns and white-label management.',
    path: '/offshore-ppc-services',
    keywords: [
        'offshore ppc services',
        'offshore ppc agency',
        'offshore google ads management',
        'offshore google ads agency',
        'offshore meta ads management',
        'offshore paid advertising services',
        'offshore performance marketing agency',
        'offshore lead generation services',
        'white label ppc services',
    ],
})

const faqs = [
    {
        question: "How do you ensure ad spend is not wasted on low-quality search terms?",
        answer: "We employ strict negative keyword sculpting, granular single-theme ad groups (STAGs), exact and phrase match intent controls, and bid exclusions for irrelevant queries. We analyze search term reports daily to eliminate budget leakage and direct spend toward high-converting transactional searches."
    },
    {
        question: "Can BooWorks manage PPC campaigns under a white-label arrangement for our agency?",
        answer: "Yes. Many marketing and web agencies outsource PPC management to us. We manage campaigns directly inside your agency's Google Ads and Meta Business Manager accounts, generate unbranded Looker Studio reports, and communicate via your private Slack channels."
    },
    {
        question: "Who pays the ad networks (Google, Meta, LinkedIn) for advertising spend?",
        answer: "You maintain complete ownership and transparency. Ad spend is billed directly by Google or Meta to your corporate credit card or credit line. BooWorks only charges a transparent management fee, ensuring zero conflict of interest."
    },
    {
        question: "How do you handle conversion tracking and server-side attribution?",
        answer: "We implement robust Google Tag Manager (GTM) containers, Google Analytics 4 (GA4) custom events, and Meta Conversions API (CAPI) to ensure accurate cross-device tracking that bypasses ad blockers and iOS tracking restrictions."
    },
    {
        question: "What minimum ad spend budget do you recommend for offshore PPC management?",
        answer: "While we manage accounts of various sizes, we typically recommend a minimum monthly media spend of $1,500 to $2,500 (USD) to ensure sufficient statistical data for rapid A/B testing and machine-learning smart bidding optimization."
    }
]

const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Offshore PPC Services', url: '/offshore-ppc-services' },
]

export default function OffshorePPCPage() {
    const serviceSchema = generateServiceSchema({
        name: 'Offshore PPC Services',
        description: 'Performance-driven paid advertising management covering Google Search Ads, Performance Max, Meta Ads, LinkedIn Ads, conversion tracking, and white-label agency execution.',
        path: '/offshore-ppc-services',
        serviceType: 'Pay-Per-Click Advertising Outsourcing',
    })

    const faqSchema = generateFAQSchema(faqs)
    const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs)

    return (
        <ServiceLandingPage
            badge="Performance Marketing & ROAS Scaling • India Delivery Center"
            h1="Offshore PPC Services & Performance Paid Advertising"
            subheadline="Drive qualified inbound pipeline and profitable ecommerce sales. Partner with certified Google Ads and Meta Ads specialists in India to maximize Return on Ad Spend (ROAS) and lower acquisition costs."
            serviceKey="Offshore PPC Services"
            breadcrumbs={breadcrumbs}
            valueProps={[
                { label: "Certifications", detail: "Google & Meta Certified" },
                { label: "Transparency", detail: "Zero Ad Spend Markups" },
                { label: "Tracking", detail: "Server-Side CAPI & GA4" },
                { label: "Cost Savings", detail: "50-70% on Management" },
            ]}
            audience={[
                {
                    title: "Digital Marketing Agencies",
                    description: "Deliver high-ROAS PPC campaigns for your agency clients without recruiting costly domestic media buyers."
                },
                {
                    title: "B2B & Professional Services",
                    description: "Target decision-makers and C-level buyers on Google Search and LinkedIn to generate qualified consultation bookings."
                },
                {
                    title: "E-Commerce & Retail Brands",
                    description: "Scale catalog sales through Google Shopping, Performance Max, and high-converting Meta retargeting funnels."
                },
                {
                    title: "Local & Multi-Location Brands",
                    description: "Dominate high-intent local search queries and map packs to drive calls, appointments, and foot traffic."
                }
            ]}
            deliverables={[
                {
                    title: "Google Search & Performance Max Campaigns",
                    description: "Laser-targeted search advertising designed to capture prospects at the exact moment they search for your solutions.",
                    features: [
                        "High-intent commercial keyword selection & match type strategy",
                        "Compelling responsive search ads (RSAs) with dynamic keyword insertion",
                        "Smart Bidding configuration (Target CPA, Target ROAS)",
                        "Asset group engineering for Performance Max multi-channel reach"
                    ]
                },
                {
                    title: "Meta (Facebook & Instagram) Funnel Architecture",
                    description: "Full-funnel social advertising that warms cold audiences, builds social proof, and converts browsing into purchases.",
                    features: [
                        "Top-of-funnel (TOF) hook testing with UGC and motion graphics",
                        "Middle-of-funnel (MOF) social proof and consideration sequences",
                        "Bottom-of-funnel (BOF) dynamic product ads (DPA) and offer retargeting",
                        "Lookalike audience modeling and first-party customer list exclusion"
                    ]
                },
                {
                    title: "B2B LinkedIn & Account-Based Marketing",
                    description: "Target key enterprise stakeholders by job title, industry vertical, and company size to generate high-ACV leads.",
                    features: [
                        "Job function, seniority, and company list account targeting",
                        "Native LinkedIn Lead Gen Forms with automated CRM sync",
                        "Sponsored Content, Thought Leader Ads, and InMail execution",
                        "B2B conversion tracking and pipeline attribution modeling"
                    ]
                },
                {
                    title: "Conversion Tracking & Server-Side CAPI",
                    description: "Flawless tracking architecture that feeds accurate conversion data into ad network machine learning algorithms.",
                    features: [
                        "Google Tag Manager (GTM) custom trigger and tag architecture",
                        "Meta Conversions API (CAPI) server-side event tracking",
                        "Google Analytics 4 (GA4) custom event and purchase tracking",
                        "Call tracking and CRM webhook integration for lead validation"
                    ]
                },
                {
                    title: "Dedicated Landing Page Design & CRO",
                    description: "Custom, ultra-fast landing pages engineered to maximize conversion rates and slash cost-per-acquisition (CPA).",
                    features: [
                        "Message-matched landing page copywriting and visual layout",
                        "Single-purpose conversion funnels with minimal exit friction",
                        "A/B headline, offer, and call-to-action testing experiments",
                        "Mobile-optimized micro-interactions and instant form validation"
                    ]
                },
                {
                    title: "White-Label Real-Time Reporting",
                    description: "Executive-ready dashboards that showcase tangible return on investment, CPA trends, and spend efficiency.",
                    features: [
                        "Custom Looker Studio live dashboards branded to your agency",
                        "Daily automated budget pacing and anomaly detection alerts",
                        "Blended ROAS, CAC, and lead quality reconciliation reports",
                        "Weekly asynchronous Loom video updates explaining key metrics"
                    ]
                }
            ]}
            techStack={[
                {
                    category: "Ad Networks & Platforms",
                    tools: ["Google Ads", "Meta Ads Manager", "LinkedIn Campaign Manager", "Microsoft Advertising", "TikTok Ads"]
                },
                {
                    category: "Tracking, Tagging & Attribution",
                    tools: ["Google Tag Manager", "Google Analytics 4", "Meta CAPI", "Triple Whale", "Hotjar", "PostHog"]
                },
                {
                    category: "Competitive & Keyword Research",
                    tools: ["SpyFu", "SEMrush Advertising Research", "AdSpy", "Meta Ad Library", "Looker Studio"]
                }
            ]}
            workflow={[
                {
                    step: "01",
                    title: "Account Audit & Benchmark",
                    description: "We review historical ad spend, analyze wasted clicks, inspect conversion tracking integrity, and benchmark cost-per-lead."
                },
                {
                    step: "02",
                    title: "Campaign Architecture & Tracking",
                    description: "We rebuild campaign structures, write high-converting ad copy, configure GTM/GA4 conversion events, and set negative keyword lists."
                },
                {
                    step: "03",
                    title: "Launch & Smart Bidding Incubation",
                    description: "We launch campaigns with controlled manual/max-clicks bidding to gather clean baseline conversion signals before smart bidding."
                },
                {
                    step: "04",
                    title: "Scale, Prune & Optimize",
                    description: "Daily negative keyword pruning, creative iteration, automated bid scaling on winning ad sets, and weekly progress syncs."
                }
            ]}
            engagementModels={[
                {
                    name: "Dedicated Offshore PPC Manager",
                    bestFor: "Agencies & High-Volume Advertisers",
                    description: "A full-time certified media buyer managing your Google and Meta accounts with daily optimization and direct Slack communication.",
                    highlights: [
                        "160 dedicated hours per month",
                        "Direct management in your accounts",
                        "Daily bid adjustments & search query pruning",
                        "Timezone overlap with your working hours"
                    ]
                },
                {
                    name: "White-Label Agency PPC Fulfillment",
                    bestFor: "Agencies Reselling Paid Media",
                    description: "Fixed monthly management fee per client account with complete white-label unbranded reporting and strict NDA protection.",
                    highlights: [
                        "100% white-label unbranded client reporting",
                        "Tiered wholesale pricing based on ad spend brackets",
                        "Zero setup fees for onboarding new client accounts",
                        "Instant scalability for new agency client wins"
                    ]
                },
                {
                    name: "PPC Audit & Restructure Sprint",
                    bestFor: "Underperforming Accounts Needing a Reset",
                    description: "A 30-day intensive audit and campaign rebuild to fix broken conversion tracking, eliminate wasted spend, and reboot growth.",
                    highlights: [
                        "Comprehensive account audit identifying wasted spend",
                        "Complete restructuring of campaigns, keywords, and ads",
                        "Full conversion tracking and GTM verification",
                        "30-day post-launch optimization and handover"
                    ]
                }
            ]}
            limitations={[
                {
                    point: "Ad Spend Is Not Included",
                    explanation: "Management fees cover strategic setup, ongoing optimization, creative copywriting, and reporting. Ad spend is paid directly to advertising networks using your billing credentials."
                },
                {
                    point: "Ad Network Approval Policies",
                    explanation: "All advertising campaigns are subject to Google, Meta, and LinkedIn editorial policies. We ensure complete compliance but cannot override network restrictions on prohibited verticals."
                },
                {
                    point: "Learning Phase Requirements",
                    explanation: "Machine-learning bidding algorithms require 30 to 50 conversion events to calibrate accurately. Premature budget cuts during the initial learning phase hinder performance."
                },
                {
                    point: "Landing Page Quality Impacts Conversion",
                    explanation: "Even the highest-intent traffic will not convert if the landing page is slow, confusing, or lacks trust signals. We provide CRO recommendations to ensure end-to-end funnel alignment."
                }
            ]}
            faqs={faqs}
            relatedServices={[
                {
                    title: "Offshore Digital Marketing",
                    href: "/offshore-digital-marketing-services",
                    description: "Full-funnel digital marketing combining paid search, SEO, and omnichannel creative execution."
                },
                {
                    title: "Offshore SEO Services",
                    href: "/offshore-seo-services",
                    description: "Build sustainable organic search equity alongside paid advertising to lower blended customer acquisition costs."
                },
                {
                    title: "Offshore Web Development",
                    href: "/offshore-web-development-services",
                    description: "High-speed custom landing page development engineered to achieve maximum Google Ads Quality Scores."
                }
            ]}
            jsonLdSchemas={[serviceSchema, faqSchema, breadcrumbSchema]}
        />
    )
}
