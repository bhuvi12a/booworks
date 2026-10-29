import { Metadata } from 'next'
import { generatePageMetadata, generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/seo-config'
import ServiceLandingPage from '@/app/Components/ServiceLandingPage'

export const metadata: Metadata = generatePageMetadata({
    title: 'Offshore Meta Ads Management Agency in India | Facebook & Instagram Ads | BooWorks',
    description: 'Scale your brand with offshore Meta Ads management from BooWorks. Certified Facebook & Instagram advertising specialists delivering high-ROAS creative testing, CAPI tracking, and full-funnel paid social execution.',
    path: '/offshore-meta-ads-management',
    keywords: [
        'offshore meta ads management',
        'offshore facebook ads management',
        'offshore meta ads agency',
        'offshore instagram ads management',
        'meta advertising outsourcing',
        'offshore paid social agency',
        'facebook ads outsourcing in india',
        'white label meta ads management',
        'meta ads management for ecommerce',
        'b2b meta ads management offshore',
    ],
})

const faqs = [
    {
        question: "Why should we outsource Meta Ads management to BooWorks offshore team?",
        answer: "Outsourcing Meta Ads management to BooWorks in India gives you access to senior Meta Blueprint-certified media buyers and direct-response designers at 50-70% lower management costs than domestic agencies. You get full-time account surveillance, proactive creative refreshes, and server-side tracking without domestic overhead."
    },
    {
        question: "Do you design ad creatives, video hooks, and write sales copy?",
        answer: "Yes. Profitable Meta advertising depends on creative velocity. Our offshore team produces high-converting static carousels, short-form video hooks for Reels, user-generated content (UGC) styling, and persuasive direct-response ad copy tailored to your target audience."
    },
    {
        question: "How do you handle iOS 14.5+ attribution loss and Meta signal degradation?",
        answer: "We deploy server-side Meta Conversions API (CAPI) using Google Tag Manager Server Containers or Cloudflare workers, paired with UTM taxonomy and GA4 custom events. This ensures 90%+ event match quality and accurate algorithmic optimization even with ad blockers and browser restrictions."
    },
    {
        question: "Can BooWorks manage Meta Ads under a white-label arrangement for our agency?",
        answer: "Absolutely. Over 60% of our offshore media buying is delivered white-label for agencies in the US, UK, and Australia. We work inside your Business Manager, integrate into your agency Slack, and deliver white-labeled Looker Studio live performance dashboards."
    },
    {
        question: "Who pays Meta for the advertising spend?",
        answer: "You or your clients pay Meta directly. Ad spend is billed to your credit card inside your Meta Ads Manager. BooWorks only charges a flat monthly management fee or hybrid performance retainer, ensuring 100% financial transparency with zero spend markups."
    }
]

const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Offshore Services', url: '/offshore-services' },
    { name: 'Offshore Meta Ads Management', url: '/offshore-meta-ads-management' },
]

export default function OffshoreMetaAdsPage() {
    const serviceSchema = generateServiceSchema({
        name: 'Offshore Meta Ads Management Services',
        description: 'Certified Facebook and Instagram paid social advertising management, creative testing, Meta Conversions API setup, audience segmentation, and ROAS scaling from India.',
        path: '/offshore-meta-ads-management',
        serviceType: 'Paid Social Advertising & Meta Ads Outsourcing',
    })

    const faqSchema = generateFAQSchema(faqs)
    const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs)

    return (
        <ServiceLandingPage
            badge="Paid Social & Direct Response • Meta Blueprint Certified"
            h1="Offshore Meta Ads Management & Paid Social Scaling"
            subheadline="Convert impressions into profitable pipeline. Partner with dedicated Meta Ads media buyers in India to scale Facebook and Instagram advertising with rapid creative iterations, robust CAPI attribution, and maximum ROAS."
            serviceKey="Offshore Meta Ads Management"
            breadcrumbs={breadcrumbs}
            valueProps={[
                { label: "Certification", detail: "Meta Blueprint Certified" },
                { label: "Attribution", detail: "Server-Side Meta CAPI" },
                { label: "Creative Velocity", detail: "Weekly Ad Variations" },
                { label: "Cost Savings", detail: "50-70% on Management" },
            ]}
            audience={[
                {
                    title: "E-Commerce & D2C Brands",
                    description: "Scale catalog sales and customer acquisition with dynamic product ads (DPA), advantage+ shopping campaigns (ASC), and high-converting Reels creatives."
                },
                {
                    title: "B2B & SaaS Companies",
                    description: "Target enterprise decision-makers and founders with educational lead magnets, webinar funnels, and instant lead forms."
                },
                {
                    title: "Marketing & Creative Agencies",
                    description: "Outsource client Facebook & Instagram media buying to our reliable white-label team while maintaining healthy agency gross margins."
                },
                {
                    title: "High-Ticket Service Businesses",
                    description: "Generate exclusive consultation appointments and qualified inquiries with hyper-targeted regional and demographic campaigns."
                }
            ]}
            deliverables={[
                {
                    title: "Full-Funnel Campaign Architecture",
                    description: "Structured campaigns separating top-of-funnel (prospecting), middle-of-funnel (consideration), and bottom-of-funnel (retargeting) for optimal budget distribution.",
                    features: [
                        "Advantage+ Shopping & Advantage+ Lead Campaign configurations",
                        "Custom intent-based audience exclusions to eliminate wasted spend",
                        "Budget optimization (CBO/ABO) based on marginal ROAS thresholds",
                        "Audience fatigue monitoring and frequency cap controls"
                    ]
                },
                {
                    title: "Creative Strategy & Direct-Response Assets",
                    description: "Ongoing creative testing engine designed to find breakthrough ad concepts before creative fatigue sets in.",
                    features: [
                        "Thumb-stopping hooks and caption overlays for Reels and Stories (9:16)",
                        "High-CTR carousel ads showcasing product benefits and customer proof",
                        "Direct-response copywriting focused on pain points, urgency, and clear CTAs",
                        "Multi-variant dynamic creative testing (DCT) to determine winning hooks"
                    ]
                },
                {
                    title: "Technical Tracking & Server-Side Conversions API (CAPI)",
                    description: "Rock-solid conversion infrastructure ensuring accurate reporting in a privacy-first, cookie-restricted landscape.",
                    features: [
                        "Server-side Meta Conversions API (CAPI) implementation via GTM Server",
                        "Event Deduplication and 8.0+ Event Match Quality Score optimization",
                        "Custom offline conversion imports for closed-won CRM deals",
                        "GA4 cross-channel attribution modeling and UTM taxonomy"
                    ]
                },
                {
                    title: "Looker Studio Dashboards & Weekly Performance Sprints",
                    description: "Complete transparency into cost per acquisition (CPA), blended ROAS, click-through rate (CTR), and conversion volume.",
                    features: [
                        "24/7 accessible Looker Studio dashboard tracking real-time KPIs",
                        "Weekly Loom or Google Meet review video walking through account data",
                        "Clear action items for following sprint creative refreshes",
                        "Proactive bid adjustments and budget scaling recommendations"
                    ]
                }
            ]}
            workflow={[
                {
                    step: "01",
                    title: "Historical Account & Pixel Audit",
                    description: "We review your past campaign metrics, pixel data integrity, audience overlap, and historical winners to identify immediate low-hanging optimization opportunities."
                },
                {
                    step: "02",
                    title: "Funnel Strategy & Creative Roadmap",
                    description: "We map out your customer journey, determine target CPAs and breakeven ROAS, and establish a weekly creative testing schedule."
                },
                {
                    step: "03",
                    title: "CAPI Tracking Setup & Campaign Launch",
                    description: "We verify server-side CAPI events, configure segmented ad sets with broad and lookalike targeting, and launch structured dynamic creative tests."
                },
                {
                    step: "04",
                    title: "Algorithmic Scaling & Creative Refreshes",
                    description: "We allocate spend aggressively to top-performing ad angles, retire fatigued creatives, and deploy bid caps to scale volume without degrading profitability."
                }
            ]}
            techStack={[
                {
                    category: "Core Meta Advertising Platforms",
                    tools: ["Meta Business Manager", "Meta Ads Manager", "Instagram Ads", "Advantage+ Suite"]
                },
                {
                    category: "Tracking, Tagging & Attribution",
                    tools: ["Meta Conversions API (CAPI)", "Google Tag Manager Server Container", "GA4 Attribution", "UTM Taxonomy"]
                },
                {
                    category: "Creative Production & Reporting",
                    tools: ["Figma", "Adobe Premiere Pro", "Canva Pro", "Looker Studio", "Meta Ad Library"]
                }
            ]}
            engagementModels={[
                {
                    name: "Dedicated Meta Ads Media Buyer",
                    bestFor: "D2C Brands & Scaling E-Commerce",
                    description: "Senior certified paid social media buyer managing your Facebook and Instagram accounts with ongoing creative testing and daily bid scaling.",
                    highlights: [
                        "160 dedicated monthly media buying hours",
                        "Weekly creative iterations & copy variations",
                        "Direct communication in your agency Slack",
                        "Timezone-aligned daily working hours"
                    ]
                },
                {
                    name: "White-Label Meta Ads Fulfillment",
                    bestFor: "Creative & Marketing Agencies",
                    description: "Manage client Facebook and Instagram ad campaigns at wholesale agency retainers with fully unbranded performance dashboards.",
                    highlights: [
                        "100% white-label client-facing dashboards",
                        "Tiered monthly pricing based on spend brackets",
                        "Ad creative design and copywriting included",
                        "Strict client confidentiality and NDA protection"
                    ]
                },
                {
                    name: "Meta Ads & CAPI Restructure Sprint",
                    bestFor: "Accounts Suffering from Ad Fatigue or Signal Loss",
                    description: "A 30-day sprint resolving server-side CAPI tracking, rebuilding audience funnels, and deploying fresh high-converting creative angles.",
                    highlights: [
                        "Full tracking and pixel audit with CAPI verification",
                        "Advantage+ campaign restructuring",
                        "10 fresh creative concepts with video hooks",
                        "30 days of active performance optimization"
                    ]
                }
            ]}
            limitations={[
                {
                    point: "Ad Spend Paid Directly to Meta",
                    explanation: "Management retainers cover campaign architecture, creative production, CAPI setup, and optimization. Media spend is billed directly by Meta to your credit card."
                },
                {
                    point: "Meta Advertising Standards",
                    explanation: "All ads and landing pages must comply with Meta Advertising Standards. We ensure strict adherence and cannot override restrictions on non-compliant verticals."
                },
                {
                    point: "Creative Fatigue Velocity",
                    explanation: "On paid social, performance naturally decays over time due to audience fatigue. Long-term ROAS scaling requires continuous creative refreshment and new angle testing."
                },
                {
                    point: "Minimum Ad Spend Recommendation",
                    explanation: "We recommend a minimum media spend of $1,500/month to ensure sufficient conversion event velocity for Meta's algorithmic machine learning."
                }
            ]}
            faqs={faqs}
            relatedServices={[
                {
                    title: "Offshore Google Ads Management",
                    href: "/offshore-google-ads-management",
                    description: "Capture high-intent search queries with certified Google Ads PPC and Performance Max campaigns."
                },
                {
                    title: "Offshore Video Editing Services",
                    href: "/offshore-video-editing-services",
                    description: "Accelerate your creative testing with high-converting short-form video ads, Reels, and UGC editing."
                },
                {
                    title: "Offshore PPC Services",
                    href: "/offshore-ppc-services",
                    description: "Comprehensive multi-channel paid media covering Google, Meta, Bing, and LinkedIn."
                },
                {
                    title: "Offshore Web Development",
                    href: "/offshore-web-development-services",
                    description: "Custom high-speed landing pages engineered in Next.js to maximize paid traffic conversion rates."
                }
            ]}
            jsonLdSchemas={[serviceSchema, faqSchema, breadcrumbSchema]}
        />
    )
}
