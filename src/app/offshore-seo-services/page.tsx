import { Metadata } from 'next'
import { generatePageMetadata, generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/seo-config'
import ServiceLandingPage from '@/app/Components/ServiceLandingPage'

export const metadata: Metadata = generatePageMetadata({
    title: 'Offshore SEO Services & White Label Agency in India | BooWorks',
    description: 'Boost search rankings with BooWorks offshore SEO services in India. Technical audits, international SEO, white-hat link acquisition, and white-label agency partnerships.',
    path: '/offshore-seo-services',
    keywords: [
        'offshore seo services',
        'offshore seo',
        'offshore seo company',
        'offshore seo agency',
        'offshore seo outsourcing',
        'offshore seo experts',
        'offshore technical seo services',
        'offshore on page seo services',
        'offshore off page seo services',
        'offshore local seo services',
        'offshore ecommerce seo services',
        'offshore international seo services',
        'offshore link building services',
        'offshore seo audit services',
        'affordable offshore seo services',
        'white label offshore seo services',
        'offshore seo company in india',
    ],
})

const faqs = [
    {
        question: "What makes BooWorks' offshore SEO different from low-cost spam agencies?",
        answer: "We strictly practice white-hat, technical and entity-based SEO. We do not use private blog networks (PBNs), automated link blasts, or spun content. Our specialists conduct deep code audits, Core Web Vitals optimizations, structured data implementation, and editorial digital PR that protect your domain authority across major Google algorithm updates."
    },
    {
        question: "How does white-label offshore SEO work for digital marketing agencies?",
        answer: "We function as your silent backend SEO department. We provide white-label client audits, monthly performance slide decks, and quarterly strategy roadmaps in unbranded formats or customized with your agency's logo and color palette. You maintain 100% client relationship ownership."
    },
    {
        question: "How long does it take to see tangible ranking and traffic improvements?",
        answer: "Typically, technical fixes and crawl error resolutions show initial indexation improvements within 3 to 6 weeks. Significant organic keyword movements and qualified organic traffic gains generally materialize within 90 to 180 days, depending on existing domain authority and competitive landscape."
    },
    {
        question: "Do your offshore SEO specialists understand international and multi-regional SEO?",
        answer: "Yes. We have extensive experience configuring hreflang annotations, ccTLD vs subfolder architectures, geo-targeting in Google Search Console, and localized search intent modeling across North America (US, Canada), the UK, Australia, and the Middle East (UAE)."
    },
    {
        question: "What specific link building methodologies do you employ?",
        answer: "We focus on genuine editorial outreach, resource page inclusion, digital PR, unlinked brand mention reclamation, and guest contributions on real, high-DR websites with active organic traffic. We never buy links from link farms or public link marketplaces."
    }
]

const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Offshore SEO Services', url: '/offshore-seo-services' },
]

export default function OffshoreSEOPage() {
    const serviceSchema = generateServiceSchema({
        name: 'Offshore SEO Services',
        description: 'Enterprise and white-label offshore search engine optimization services including technical audits, international SEO, on-page optimization, and editorial link building.',
        path: '/offshore-seo-services',
        serviceType: 'Search Engine Optimization Outsourcing',
    })

    const faqSchema = generateFAQSchema(faqs)
    const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs)

    return (
        <ServiceLandingPage
            badge="Technical & White-Label SEO • India Center of Excellence"
            h1="Offshore SEO Services & Dedicated Search Engine Specialists"
            subheadline="Elevate organic search visibility, outrank entrenched competitors, and secure qualified international pipeline. We deliver senior-level technical SEO, semantic content clusters, and white-hat link acquisition from India."
            serviceKey="Offshore SEO Services"
            breadcrumbs={breadcrumbs}
            valueProps={[
                { label: "Methodology", detail: "100% White-Hat Practices" },
                { label: "Technical Depth", detail: "Core Web Vitals & Next.js" },
                { label: "Agency Ready", detail: "Full White-Label Delivery" },
                { label: "Reporting", detail: "Live Looker Studio Dashboards" },
            ]}
            audience={[
                {
                    title: "SEO & Digital Agencies",
                    description: "Outsource fulfillment bottleneck. Scale your active client accounts with dedicated technical SEO execution and unbranded reporting."
                },
                {
                    title: "B2B & SaaS Companies",
                    description: "Capture bottom-of-funnel commercial keywords and software alternative queries with high organic purchase intent."
                },
                {
                    title: "E-Commerce Platforms",
                    description: "Optimize massive product catalogs, resolve faceted navigation index bloat, and capture high-volume category searches."
                },
                {
                    title: "International Enterprises",
                    description: "Dominate search results across multiple geographic regions with structured international SEO architectures."
                }
            ]}
            deliverables={[
                {
                    title: "Deep Technical SEO Audits & Remediation",
                    description: "Root-cause diagnostics that uncover and resolve crawl bottlenecks, indexing anomalies, and rendering issues.",
                    features: [
                        "Log file analysis and Googlebot crawl budget optimization",
                        "JavaScript rendering & Next.js/React hydration audits",
                        "Core Web Vitals (LCP, INP, CLS) optimization roadmap",
                        "Canonical, redirect chain, and pagination resolution"
                    ]
                },
                {
                    title: "Semantic Keyword Intent & Topic Clustering",
                    description: "Data-driven keyword mapping structured around search intent, topical authority, and revenue potential.",
                    features: [
                        "Commercial vs. informational search intent segmentation",
                        "Pillar-and-cluster content roadmaps to establish topic topicality",
                        "SERP feature analysis (Featured Snippets, People Also Ask)",
                        "Keyword cannibalization detection and URL mapping"
                    ]
                },
                {
                    title: "On-Page Optimization & Schema Architecture",
                    description: "Granular on-page engineering that maximizes relevance signals for Google's neural matching and RankBrain algorithms.",
                    features: [
                        "High-CTR title tag and meta description engineering",
                        "Logical H1-H6 heading hierarchy and semantic HTML structure",
                        "Advanced JSON-LD structured data (Organization, Service, FAQ, Product)",
                        "Internal link graph optimization with descriptive anchor text"
                    ]
                },
                {
                    title: "Manual White-Hat Link Acquisition",
                    description: "High-authority contextual backlink acquisition that builds authentic domain rating without penalty risks.",
                    features: [
                        "Targeted editorial blogger and journalist outreach",
                        "Digital PR assets and industry benchmark studies",
                        "Unlinked brand mention reclamation and broken link building",
                        "Strict veto power over every placement before publication"
                    ]
                },
                {
                    title: "International & Multi-Regional SEO",
                    description: "Scale organic visibility seamlessly across the USA, UK, Canada, Australia, and UAE markets.",
                    features: [
                        "Multi-lingual & multi-regional hreflang tag implementation",
                        "Geo-targeted subfolder vs ccTLD domain strategy",
                        "International Google Search Console property segmentation",
                        "Local currency and regional keyword intent localization"
                    ]
                },
                {
                    title: "White-Label Reporting & GSC Analysis",
                    description: "Transparent, automated reporting that proves tangible commercial value to internal or external stakeholders.",
                    features: [
                        "Interactive Looker Studio dashboards linked to GSC & GA4",
                        "Granular CTR vs impressions query tier analysis",
                        "Organic conversion and assisted attribution tracking",
                        "Monthly video walkthroughs explaining key trends and next steps"
                    ]
                }
            ]}
            techStack={[
                {
                    category: "Crawl & Diagnostic Engines",
                    tools: ["Screaming Frog SEO Spider", "Sitebulb", "Deepcrawl (Lumar)", "Google Search Console", "Chrome DevTools"]
                },
                {
                    category: "Competitive & Keyword Intelligence",
                    tools: ["Ahrefs", "SEMrush", "Keyword Insights", "Clearscope", "SurferSEO"]
                },
                {
                    category: "Schema & Performance Validation",
                    tools: ["Google Rich Results Test", "Schema.org Validator", "PageSpeed Insights", "WebPageTest", "Looker Studio"]
                }
            ]}
            workflow={[
                {
                    step: "01",
                    title: "360-Degree Technical Audit",
                    description: "We crawl the entire domain, identify indexation blocks, inspect server response codes, and benchmark current organic rankings."
                },
                {
                    step: "02",
                    title: "Architecture & Intent Blueprint",
                    description: "We map target keywords to unique canonical URLs, restructure internal linking, and construct a 6-month priority action roadmap."
                },
                {
                    step: "03",
                    title: "Agile On-Page & Technical Sprints",
                    description: "We deploy code fixes, write optimized metadata, implement structured data, and release optimized content assets."
                },
                {
                    step: "04",
                    title: "Off-Page Outreach & GSC Optimization",
                    description: "We execute targeted manual outreach, review Google Search Console search performance data, and fine-tune titles for CTR lift."
                }
            ]}
            engagementModels={[
                {
                    name: "Dedicated Offshore SEO Specialist",
                    bestFor: "Agencies & In-House Marketing Teams",
                    description: "A full-time, experienced technical SEO engineer embedded into your team, managing audits, on-page optimization, and technical tickets.",
                    highlights: [
                        "160 dedicated hours per month",
                        "Direct communication via Slack/Teams",
                        "US/UK/AUS/UAE working hour overlap",
                        "Direct Jira/ClickUp issue ticket implementation"
                    ]
                },
                {
                    name: "White-Label Agency Retainer",
                    bestFor: "SEO Agencies Reselling Services",
                    description: "Complete fulfillment per client website with zero BooWorks branding. We handle technical audits, content briefs, and monthly reports.",
                    highlights: [
                        "Fixed per-website monthly tier pricing",
                        "100% white-label unbranded Google Slides & PDFs",
                        "Strict NDA confidentiality guarantee",
                        "Effortless account scalability"
                    ]
                },
                {
                    name: "Comprehensive Technical SEO Sprint",
                    bestFor: "Site Migrations & Algorithm Recovery",
                    description: "A focused, intensive 4-to-8 week sprint to resolve complex technical debts, handle CMS migrations, or recover from traffic drops.",
                    highlights: [
                        "Exhaustive 100+ point technical audit report",
                        "Direct developer-ready pull requests or issue tickets",
                        "Pre- and post-migration redirect mapping",
                        "30-day post-sprint indexation monitoring"
                    ]
                }
            ]}
            limitations={[
                {
                    point: "No Rank Guarantees on Uncontrollable Algorithms",
                    explanation: "Google's search algorithm incorporates thousands of dynamic ranking signals and frequent core updates. While our technical execution adheres strictly to official Webmaster Guidelines, no honest agency can guarantee a #1 rank for a specific keyword."
                },
                {
                    point: "Content Development Requirements",
                    explanation: "Technical SEO builds the engine, but authoritative content fuels rankings. Clients must either provide topical domain expertise or approve content briefs created by our writers."
                },
                {
                    point: "Development Access Needed",
                    explanation: "Resolving technical issues (redirects, header tags, schema, speed) requires CMS or codebase access (Git/WordPress/Shopify). We can also provide documented tickets for your internal engineering team."
                },
                {
                    point: "Realistic 3-to-6 Month Horizon",
                    explanation: "Organic search results compound over time. Businesses needing immediate leads within 48 hours should complement SEO with our Offshore PPC Services."
                }
            ]}
            faqs={faqs}
            relatedServices={[
                {
                    title: "Offshore Web Development",
                    href: "/offshore-web-development-services",
                    description: "High-speed Next.js and custom web application engineering with built-in technical SEO best practices."
                },
                {
                    title: "Offshore Digital Marketing",
                    href: "/offshore-digital-marketing-services",
                    description: "Full-funnel offshore growth services combining SEO, performance advertising, and marketing automation."
                },
                {
                    title: "Offshore Website Maintenance",
                    href: "/offshore-website-maintenance-services",
                    description: "Proactive uptime monitoring, security patching, and continuous Core Web Vitals performance tuning."
                }
            ]}
            jsonLdSchemas={[serviceSchema, faqSchema, breadcrumbSchema]}
        />
    )
}
