import { Metadata } from 'next'
import { generatePageMetadata, generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/seo-config'
import ServiceLandingPage from '@/app/Components/ServiceLandingPage'

export const metadata: Metadata = generatePageMetadata({
    title: 'Offshore Google Ads Management Agency in India | Google Partner | BooWorks',
    description: 'Drive qualified search traffic and lower CPA with offshore Google Ads management from BooWorks. Certified Google Ads experts in India managing Search, Performance Max, and Shopping campaigns.',
    path: '/offshore-google-ads-management',
    keywords: [
        'offshore google ads management',
        'offshore google ads agency',
        'google ads outsourcing in india',
        'google ads agency in india',
        'offshore ppc management',
        'performance max management offshore',
        'google shopping management offshore',
        'white label google ads management',
        'b2b google ads agency offshore',
        'search engine marketing outsourcing',
    ],
})

const faqs = [
    {
        question: "Why should we choose BooWorks for offshore Google Ads management?",
        answer: "BooWorks provides certified Google Ads specialists with deep experience across Search, Performance Max, and Shopping networks. By operating from our India delivery center, you achieve 50-70% lower management fees compared to US, UK, or Australian agencies, while benefiting from rigorous daily search query audits, negative keyword sculpting, and transparent reporting."
    },
    {
        question: "How do you improve Google Ads Quality Score and lower Cost-Per-Click (CPC)?",
        answer: "We structure campaigns using tightly themed ad groups (STAGs) ensuring high keyword-to-ad copy relevance. We write compelling responsive search ads (RSAs) with dynamic insertion, optimize landing page experience and load speed, and aggressively purge low-relevance queries to lift Quality Scores to 8-10, directly slashing average CPCs."
    },
    {
        question: "How do you optimize Performance Max (PMax) campaigns to prevent budget waste?",
        answer: "We avoid 'black box' PMax wastage by feeding Google's algorithm high-quality first-party customer audience signals, structuring themed asset groups with professional video and copy assets, applying brand exclusions and negative keywords at the account level, and monitoring search theme performance."
    },
    {
        question: "Can BooWorks manage Google Ads under a white-label agreement for our marketing agency?",
        answer: "Yes. Many digital agencies in North America and Europe outsource their Google Ads fulfillment to BooWorks. We operate within your agency MCC, join client Slack channels as your internal paid search team, and provide unbranded or custom-branded Looker Studio performance dashboards."
    },
    {
        question: "What tracking and conversion infrastructure do you implement?",
        answer: "We implement Google Tag Manager (GTM) with Enhanced Conversions, GA4 cross-domain tracking, and call tracking integrations (CallRail / CallTrackingMetrics). This ensures that offline lead status, closed sales, and form submissions are attributed accurately to specific search keywords."
    }
]

const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Offshore Services', url: '/offshore-services' },
    { name: 'Offshore Google Ads Management', url: '/offshore-google-ads-management' },
]

export default function OffshoreGoogleAdsPage() {
    const serviceSchema = generateServiceSchema({
        name: 'Offshore Google Ads Management Services',
        description: 'Certified Google Ads search, Performance Max, Shopping, and display management, bid strategy optimization, and conversion tracking from India.',
        path: '/offshore-google-ads-management',
        serviceType: 'Google Ads & Search Engine Marketing Outsourcing',
    })

    const faqSchema = generateFAQSchema(faqs)
    const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs)

    return (
        <ServiceLandingPage
            badge="Search Advertising & PMax Scaling • Certified Google Partner"
            h1="Offshore Google Ads Management & Performance PPC"
            subheadline="Capture high-intent buyers when they search for what you offer. Partner with certified Google Ads specialists in India to design laser-targeted Search, Performance Max, and Shopping campaigns that reduce acquisition costs and maximize ROAS."
            serviceKey="Offshore Google Ads Management"
            breadcrumbs={breadcrumbs}
            valueProps={[
                { label: "Expertise", detail: "Google Certified Partner" },
                { label: "Optimization", detail: "Daily Search Query Audits" },
                { label: "Tracking", detail: "Enhanced Conversions & GA4" },
                { label: "Cost Savings", detail: "50-70% on Management" },
            ]}
            audience={[
                {
                    title: "B2B & Professional Services",
                    description: "Target decision-makers and enterprise procurement leaders searching for specialized software, consulting, and industrial equipment."
                },
                {
                    title: "E-Commerce & Retail Stores",
                    description: "Dominate Google Shopping and Performance Max with optimized merchant feeds, custom labels, and high-margin product tiering."
                },
                {
                    title: "Digital Marketing Agencies",
                    description: "Scale your agency's PPC revenue without hiring expensive in-house domestic media buyers. Deliver world-class white-label Google Ads."
                },
                {
                    title: "High-Ticket Local & Service Brands",
                    description: "Dominate localized commercial searches for legal, healthcare, real estate, and home service keywords to generate instant qualified calls."
                }
            ]}
            deliverables={[
                {
                    title: "Single-Theme Ad Group (STAG) Search Campaigns",
                    description: "Granular campaign structures engineered for high Quality Scores, high CTRs, and precise budget control.",
                    features: [
                        "Comprehensive commercial intent keyword research and match-type pruning",
                        "High-converting Responsive Search Ads (RSAs) with 15 pinned and dynamic headlines",
                        "Full ad asset deployment: Sitelinks, Callouts, Structured Snippets, Image Assets, and Lead Forms",
                        "Smart Bidding migration (Target CPA and Target ROAS) once statistical significance is reached"
                    ]
                },
                {
                    title: "Performance Max & Shopping Feed Optimization",
                    description: "Maximizing revenue across Google Search, Maps, Display, YouTube, and Discover with controlled machine learning.",
                    features: [
                        "Google Merchant Center feed setup, diagnostics, and Supplemental Feed optimization",
                        "Product grouping by margin, seasonality, and historical velocity (Zombie, Hero, Sidekick tiers)",
                        "Account-level negative keyword lists to prevent PMax from cannibalizing branded search",
                        "Audience signal enrichment using customer match lists and high-intent custom segments"
                    ]
                },
                {
                    title: "Negative Keyword Sculpting & Waste Elimination",
                    description: "Continuous surveillance of real search terms to ensure zero ad budget is squandered on informational or irrelevant queries.",
                    features: [
                        "Daily search query report analysis and aggressive negative keyword additions",
                        "Competitor and job-seeker search term exclusions",
                        "Cross-campaign negative keyword lists to eliminate internal keyword cannibalization",
                        "Geo-targeting exclusions to prevent traffic from outside approved service territories"
                    ]
                },
                {
                    title: "Enhanced Conversions & Full Attribution Tracking",
                    description: "Flawless tracking infrastructure providing the Google Ads algorithm with clean, privacy-safe conversion signals.",
                    features: [
                        "Enhanced Conversions implementation for high accuracy on hashed customer data",
                        "Google Tag Manager custom event triggers for form submissions, chats, and calls",
                        "GA4 cross-channel attribution reporting and conversion value assignment",
                        "Custom Looker Studio dashboards displaying real-time ROAS and cost-per-lead"
                    ]
                }
            ]}
            workflow={[
                {
                    step: "01",
                    title: "Account Audit & Competitive Research",
                    description: "We audit your historical search queries, Quality Scores, conversion settings, and competitors to locate wasted spend and revenue opportunities."
                },
                {
                    step: "02",
                    title: "Granular Structuring & Ad Copywriting",
                    description: "We build tightly themed ad groups, write high-CTR responsive search ads, set up all extensions, and implement negative keyword safeguards."
                },
                {
                    step: "03",
                    title: "Enhanced Tracking Setup & Launch",
                    description: "We deploy Enhanced Conversions via GTM, test all form and call attribution pathways, and launch with manual or maximize clicks bid limits."
                },
                {
                    step: "04",
                    title: "Smart Bidding & Continuous Scaling",
                    description: "Once 30+ conversion events are recorded, we transition to Target CPA/ROAS, optimize asset groups, and scale winning keyword clusters."
                }
            ]}
            techStack={[
                {
                    category: "Core Google Ad Platforms",
                    tools: ["Google Ads MCC", "Google Merchant Center", "YouTube Advertising", "Google Display Network"]
                },
                {
                    category: "Tracking, Tagging & Attribution",
                    tools: ["Google Tag Manager (GTM)", "Enhanced Conversions", "Google Analytics 4 (GA4)", "CallRail"]
                },
                {
                    category: "Reporting & Competitor Intel",
                    tools: ["Looker Studio", "SpyFu", "SEMrush Advertising", "Google Keyword Planner"]
                }
            ]}
            engagementModels={[
                {
                    name: "Dedicated Google Ads Specialist",
                    bestFor: "Agencies & High-Growth Brands",
                    description: "Full-time certified Google Ads manager operating inside your MCC with daily bid adjustments and query management.",
                    highlights: [
                        "160 dedicated monthly hours",
                        "Daily search query & negative keyword audits",
                        "Direct communication via your agency Slack",
                        "Guaranteed daily working timezone overlap"
                    ]
                },
                {
                    name: "White-Label Agency PPC Pod",
                    bestFor: "Marketing Agencies Reselling Paid Search",
                    description: "Wholesale tier-based management per client account with white-label Looker Studio performance dashboards.",
                    highlights: [
                        "100% unbranded client-ready reports",
                        "Fixed wholesale monthly pricing brackets",
                        "Zero onboarding fees for new client accounts",
                        "Rapid turnaround on campaign builds"
                    ]
                },
                {
                    name: "30-Day Google Ads Audit & Rebuild",
                    bestFor: "Accounts with Low ROAS or Wasteful Spend",
                    description: "Intensive restructuring to fix keyword cannibalization, prune search terms, set up Enhanced Conversions, and reboot ROAS.",
                    highlights: [
                        "Complete search query and Quality Score audit",
                        "Reconstruction of STAGs and RSAs",
                        "Enhanced Conversions and GA4 tracking setup",
                        "30 days of active post-launch optimization"
                    ]
                }
            ]}
            limitations={[
                {
                    point: "Direct Media Spend Not Included",
                    explanation: "Management retainers cover strategy, setup, ongoing negative pruning, ad copy, and reporting. Google bills ad spend directly to your corporate payment method."
                },
                {
                    point: "Google Editorial Policies",
                    explanation: "All search campaigns and extensions are subject to Google Ads advertising policies. We adhere strictly to guidelines and cannot override policy restrictions on prohibited verticals."
                },
                {
                    point: "Smart Bidding Learning Period",
                    explanation: "Target CPA and Target ROAS require 30 to 50 conversion events to calibrate accurately. Premature bid or budget edits during learning phases can disrupt algorithmic efficiency."
                },
                {
                    point: "Landing Page Conversion Dependency",
                    explanation: "Traffic quality is only half the equation. High conversion rates depend on fast, mobile-friendly landing pages with clear trust indicators."
                }
            ]}
            faqs={faqs}
            relatedServices={[
                {
                    title: "Offshore Meta Ads Management",
                    href: "/offshore-meta-ads-management",
                    description: "Complement search intent with full-funnel Facebook and Instagram paid social advertising."
                },
                {
                    title: "Offshore SEO Services",
                    href: "/offshore-seo-services",
                    description: "Combine paid search with organic technical SEO to dominate page 1 of Google search results."
                },
                {
                    title: "Offshore PPC Services",
                    href: "/offshore-ppc-services",
                    description: "Full multi-network paid advertising outsourcing across Google, Meta, Bing, and LinkedIn."
                },
                {
                    title: "Offshore Web Development",
                    href: "/offshore-web-development-services",
                    description: "High-speed Next.js landing pages built to convert high-cost Google Ads clicks into customers."
                }
            ]}
            jsonLdSchemas={[serviceSchema, faqSchema, breadcrumbSchema]}
        />
    )
}
