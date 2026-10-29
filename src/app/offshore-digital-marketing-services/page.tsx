import { Metadata } from 'next'
import { generatePageMetadata, generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/seo-config'
import ServiceLandingPage from '@/app/Components/ServiceLandingPage'

export const metadata: Metadata = generatePageMetadata({
    title: 'Offshore Digital Marketing Services & Agency in India | BooWorks',
    description: 'Scale your agency or brand with BooWorks offshore digital marketing services in India. Full-funnel SEO, PPC, social, and content teams with dedicated account management.',
    path: '/offshore-digital-marketing-services',
    keywords: [
        'offshore digital marketing services',
        'offshore digital marketing',
        'offshore digital marketing company',
        'offshore digital marketing agency',
        'offshore digital marketing solutions',
        'offshore marketing services',
        'offshore marketing agency',
        'offshore digital marketing outsourcing',
        'offshore digital marketing company in india',
    ],
})

const faqs = [
    {
        question: "Why should an overseas agency or enterprise outsource digital marketing to India?",
        answer: "Outsourcing digital marketing to India enables agencies and brands in the US, UK, Canada, Australia, and UAE to reduce operational overhead by 50% to 70% while tapping into deeply experienced, English-fluent specialists. It eliminates local recruiting delays, payroll liabilities, and allows domestic teams to focus on client strategy and high-level business development."
    },
    {
        question: "How does BooWorks handle timezone differences with US, UK, and Australian clients?",
        answer: "We structure guaranteed working hour overlap. For North American clients (EST/PST), we maintain late-afternoon and evening overlap for real-time standups, Slack huddles, and approvals. For UK (GMT), UAE (GST), and Australian (AEST) clients, our standard business hours provide 4 to 8 hours of live collaboration every business day."
    },
    {
        question: "Can BooWorks operate as a white-label partner under our brand?",
        answer: "Yes. Many of our offshore clients are digital marketing agencies that resell our deliverables under their own name. We deliver unbranded or co-branded reports, operate inside your project management boards (Asana, ClickUp, Monday, Slack), and sign strict Non-Disclosure Agreements (NDAs)."
    },
    {
        question: "What communication channels and project management tools do you use?",
        answer: "We integrate directly into your workflow via Slack, Microsoft Teams, ClickUp, Asana, Trello, or Jira. We run weekly video syncs via Google Meet or Zoom and provide transparent, real-time Looker Studio performance dashboards."
    },
    {
        question: "What are your minimum commitment terms and billing structures?",
        answer: "We offer flexible monthly retainers with no lock-in contracts after an initial 90-day pilot, as well as milestone-based project billing. Payments are invoiced in USD, GBP, EUR, AUD, or AED via international bank wire or secure card processing."
    }
]

const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Offshore Digital Marketing Services', url: '/offshore-digital-marketing-services' },
]

export default function OffshoreDigitalMarketingPage() {
    const serviceSchema = generateServiceSchema({
        name: 'Offshore Digital Marketing Services',
        description: 'Comprehensive offshore digital marketing solutions covering search engine optimization, paid advertising, content marketing, and multi-channel campaign management.',
        path: '/offshore-digital-marketing-services',
        serviceType: 'Digital Marketing Outsourcing',
    })

    const faqSchema = generateFAQSchema(faqs)
    const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs)

    return (
        <ServiceLandingPage
            badge="Offshore Growth Engine • India Delivery Center"
            h1="Offshore Digital Marketing Services & Dedicated Remote Teams"
            subheadline="Empower your marketing operations with high-caliber, cost-effective digital marketing outsourcing from India. Full-funnel execution across SEO, paid media, creative assets, and analytics."
            serviceKey="Offshore Digital Marketing Services"
            breadcrumbs={breadcrumbs}
            valueProps={[
                { label: "Cost Efficiency", detail: "Save 50-70% on Hiring" },
                { label: "Timezone Alignment", detail: "US, UK, AUS, UAE Overlap" },
                { label: "Confidentiality", detail: "Strict NDA & IP Protection" },
                { label: "Execution Speed", detail: "Sprint-Based Agility" },
            ]}
            audience={[
                {
                    title: "Overseas Marketing Agencies",
                    description: "Scale agency fulfillment without the high overhead of domestic hires. Rebrand our deliverables with 100% white-label confidentiality."
                },
                {
                    title: "B2B & SaaS Startups",
                    description: "Acquire high-intent inbound pipeline through structured SEO, LinkedIn campaigns, and performance marketing with capital efficiency."
                },
                {
                    title: "D2C & E-Commerce Brands",
                    description: "Run profitable multi-channel customer acquisition across Google Shopping, Meta catalog ads, and retention email marketing."
                },
                {
                    title: "Mid-Market Enterprises",
                    description: "Supplement your in-house marketing department with specialized offshore execution teams that manage day-to-day campaign mechanics."
                }
            ]}
            deliverables={[
                {
                    title: "Full-Funnel Organic Search (SEO)",
                    description: "End-to-end organic acquisition strategies designed to capture high-intent commercial keywords and outrank domestic competitors.",
                    features: [
                        "Comprehensive technical audits & crawl budget optimization",
                        "Keyword intent mapping & cluster content roadmaps",
                        "High-authority white-hat link acquisition campaigns",
                        "Transparent monthly organic rankings & traffic reporting"
                    ]
                },
                {
                    title: "Multi-Channel Paid Advertising (PPC)",
                    description: "High-ROAS paid media management designed to scale lead generation and sales while driving down customer acquisition costs (CAC).",
                    features: [
                        "Google Search, Performance Max & Shopping campaign setup",
                        "Meta (Facebook & Instagram) funnel architecture & creative testing",
                        "Negative keyword pruning and automated smart bidding",
                        "Conversion API & server-side tracking validation"
                    ]
                },
                {
                    title: "Content Marketing & Social Media",
                    description: "Omnichannel content creation and social media asset design that establishes brand authority and drives sustained engagement.",
                    features: [
                        "Industry-specific editorial calendar development",
                        "High-converting landing page copywriting & blog drafting",
                        "Custom branded graphics, carousels, and short-form video edits",
                        "Community moderation and social engagement workflows"
                    ]
                },
                {
                    title: "Conversion Rate Optimization (CRO)",
                    description: "Transform website traffic into qualified leads through heuristic analysis, heatmaps, and systematic landing page experiments.",
                    features: [
                        "User flow analysis and friction point diagnostics",
                        "A/B multivariate landing page testing and copy variations",
                        "Form optimization and CTA hierarchy refinement",
                        "Micro-conversion and behavioral event instrumentation"
                    ]
                },
                {
                    title: "Analytics, Attribution & Dashboards",
                    description: "Unified marketing reporting that eliminates guesswork and delivers executive-ready transparency to stakeholders.",
                    features: [
                        "Google Analytics 4 (GA4) custom event tracking setup",
                        "Interactive Looker Studio executive dashboards",
                        "Cross-channel ROAS and CAC attribution modeling",
                        "Weekly asynchronous Loom & Slack performance briefings"
                    ]
                },
                {
                    title: "Marketing Automation & CRM Ops",
                    description: "Nurture cold prospects into sales-qualified leads through automated lifecycle workflows and CRM integrations.",
                    features: [
                        "HubSpot, ActiveCampaign & Klaviyo flow setup",
                        "Lead scoring, segmentation, and automated drip sequences",
                        "Zapier/Make webhooks connecting lead forms to sales CRMs",
                        "List hygiene and deliverability health management"
                    ]
                }
            ]}
            techStack={[
                {
                    category: "Search & Competitive Intelligence",
                    tools: ["Ahrefs", "SEMrush", "Screaming Frog", "Google Search Console", "Google Trends", "Sitebulb"]
                },
                {
                    category: "Paid Advertising & Attribution",
                    tools: ["Google Ads", "Meta Ads Manager", "LinkedIn Campaign Manager", "Google Tag Manager", "Triple Whale", "GA4"]
                },
                {
                    category: "Creative, Automation & Reporting",
                    tools: ["Figma", "Adobe Creative Suite", "Looker Studio", "HubSpot", "Klaviyo", "Zapier"]
                }
            ]}
            workflow={[
                {
                    step: "01",
                    title: "Discovery & Alignment",
                    description: "We audit your existing channels, dissect competitor positioning, align on business KPIs, and define exact communication protocols."
                },
                {
                    step: "02",
                    title: "Dedicated Team Onboarding",
                    description: "We allocate handpicked specialists to your account, integrate into your Slack and project boards, and establish approval workflows."
                },
                {
                    step: "03",
                    title: "Agile Sprint Execution",
                    description: "We execute in 2-week agile sprints, deploying deliverables, launching experiments, and providing daily asynchronous progress logs."
                },
                {
                    step: "04",
                    title: "Review & Continuous Iteration",
                    description: "Bi-weekly syncs and monthly strategic reviews to analyze data, adjust budget allocation, and scale top-performing campaigns."
                }
            ]}
            engagementModels={[
                {
                    name: "Dedicated Offshore Pod",
                    bestFor: "Agencies & Scaling Startups",
                    description: "A full-time remote pod (SEO specialist, PPC manager, copywriter, designer) working exclusively as an extension of your company.",
                    highlights: [
                        "160 hours/month per dedicated resource",
                        "Direct daily Slack/Teams communication",
                        "Guaranteed working timezone overlap",
                        "Replace or adjust team members as needs evolve"
                    ]
                },
                {
                    name: "White-Label Agency Fulfillment",
                    bestFor: "Digital Agencies with Growing Client Rosters",
                    description: "Fulfill client deliverables under your agency brand with complete NDA protection, unbranded decks, and flexible per-client capacity.",
                    highlights: [
                        "100% white-label client-ready reporting",
                        "Fixed monthly cost per client account",
                        "Seamless client handoff or backend execution",
                        "Scale accounts up or down without hiring headaches"
                    ]
                },
                {
                    name: "Milestone-Based Growth Sprint",
                    bestFor: "Specific Growth Initiatives & Launches",
                    description: "Focused execution for specific digital marketing campaigns, brand launches, site audits, or paid media restructure sprints.",
                    highlights: [
                        "Clear scope of work with milestone sign-offs",
                        "Fixed budget with zero unexpected overages",
                        "30 to 90-day execution timelines",
                        "Comprehensive post-launch transition documentation"
                    ]
                }
            ]}
            limitations={[
                {
                    point: "No Overnight Ranking Guarantees",
                    explanation: "Organic search engine optimization requires technical integrity, quality content, and authority accumulation over 3 to 6 months. We do not engage in black-hat shortcuts that jeopardize long-term domain health."
                },
                {
                    point: "Ad Spend Is Separate",
                    explanation: "Our fees cover strategic campaign architecture, management, creative design, and optimization. Media spend is paid directly to advertising platforms (Google, Meta) using your business billing profile."
                },
                {
                    point: "Collaboration & Fast Approvals Needed",
                    explanation: "Offshore success requires timely feedback on copy, ad creatives, and strategic directional inputs. Delays in client approvals naturally impact campaign deployment timelines."
                },
                {
                    point: "Native Local Nuances Handled Strategically",
                    explanation: "For hyper-localized regional marketing, we rely on client guidelines to capture distinct cultural colloquialisms, while our team focuses on global international English standards."
                }
            ]}
            faqs={faqs}
            relatedServices={[
                {
                    title: "Offshore SEO Services",
                    href: "/offshore-seo-services",
                    description: "Deep technical SEO audits, international keyword strategy, and white-hat link acquisition from senior SEO engineers."
                },
                {
                    title: "Offshore Web Development",
                    href: "/offshore-web-development-services",
                    description: "Modern Next.js, React, and custom web application engineering with dedicated full-stack remote teams."
                },
                {
                    title: "Offshore Paid Advertising (PPC)",
                    href: "/offshore-ppc-services",
                    description: "Performance Google Ads and Meta Ads management focused on ROAS scaling and B2B lead generation."
                }
            ]}
            jsonLdSchemas={[serviceSchema, faqSchema, breadcrumbSchema]}
        />
    )
}
