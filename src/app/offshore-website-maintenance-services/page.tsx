import { Metadata } from 'next'
import { generatePageMetadata, generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/seo-config'
import ServiceLandingPage from '@/app/Components/ServiceLandingPage'

export const metadata: Metadata = generatePageMetadata({
    title: 'Offshore Website Maintenance & Speed Optimization Services | BooWorks',
    description: 'Keep your digital platforms secure, fast, and up to date with BooWorks offshore website maintenance services. 24/7 uptime monitoring, security patches, and SLA support.',
    path: '/offshore-website-maintenance-services',
    keywords: [
        'offshore website maintenance services',
        'offshore website maintenance',
        'offshore website management',
        'offshore website redesign services',
        'offshore website speed optimization',
        'offshore website migration services',
        'offshore website support services',
        'wordpress maintenance services offshore',
    ],
})

const faqs = [
    {
        question: "What platforms and content management systems do you support?",
        answer: "We provide comprehensive maintenance for Next.js/React web applications, WordPress & WooCommerce sites, Shopify stores, headless CMS platforms (Sanity, Strapi, Contentful), and custom Node.js/PHP web portals."
    },
    {
        question: "How do you prevent updates from breaking live site functionality?",
        answer: "We strictly enforce a staging-first protocol. All plugin updates, dependency patches, and code changes are tested in an isolated staging environment before deployment. We run visual regression tests and automated smoke tests to ensure zero unexpected breaking changes on the production website."
    },
    {
        question: "What is your emergency incident response time for website outages?",
        answer: "For critical production outages, our 24/7 monitoring systems alert our on-call engineers within 60 seconds. Under our priority SLA retainers, initial technical intervention begins within 15 to 30 minutes to restore site uptime and troubleshoot root causes."
    },
    {
        question: "Can your offshore maintenance engineers handle continuous speed optimization?",
        answer: "Yes. Core Web Vitals degrade over time as marketing teams upload uncompressed images or insert third-party tracking scripts. We conduct monthly speed audits, optimize media assets, refine caching policies, and clean database overhead to maintain top Google PageSpeed scores."
    },
    {
        question: "Can unused maintenance retainer hours roll over to the next month?",
        answer: "Under our standard retainers, maintenance hours are reserved each month for guaranteed developer availability, proactive security monitoring, and daily backups. Unused development hours can be applied toward small feature requests and design tweaks within the current billing cycle."
    }
]

const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Offshore Website Maintenance Services', url: '/offshore-website-maintenance-services' },
]

export default function OffshoreWebsiteMaintenancePage() {
    const serviceSchema = generateServiceSchema({
        name: 'Offshore Website Maintenance Services',
        description: 'Proactive website maintenance, 24/7 uptime monitoring, security patching, speed optimization, and technical support retainers from India.',
        path: '/offshore-website-maintenance-services',
        serviceType: 'Website Maintenance Outsourcing',
    })

    const faqSchema = generateFAQSchema(faqs)
    const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs)

    return (
        <ServiceLandingPage
            badge="Site Reliability & DevOps Support • India Delivery Center"
            h1="Offshore Website Maintenance & Technical Support Services"
            subheadline="Protect your digital investments, maintain blazing-fast load speeds, and eliminate downtime risks. Dedicated offshore web engineers providing 24/7 monitoring, security patching, and SLA-backed support."
            serviceKey="Offshore Website Maintenance Services"
            breadcrumbs={breadcrumbs}
            valueProps={[
                { label: "Uptime Monitoring", detail: "24/7 Automated Checks" },
                { label: "Security & Backups", detail: "Daily Cloud Snapshots" },
                { label: "SLA Response", detail: "Under 30 Min Critical SLA" },
                { label: "Cost Savings", detail: "Save 50-65% on Retainers" },
            ]}
            audience={[
                {
                    title: "Digital & Design Agencies",
                    description: "Offer lucrative monthly website maintenance packages to your clients without burdening your internal development team."
                },
                {
                    title: "E-Commerce Merchants",
                    description: "Ensure your store never crashes during flash sales, black Friday drops, or high-volume marketing campaigns."
                },
                {
                    title: "Corporate & B2B Websites",
                    description: "Maintain continuous compliance, SSL renewals, security vulnerability patches, and content updates with zero internal hassle."
                },
                {
                    title: "High-Traffic Content Portals",
                    description: "Optimize database queries, configure edge CDN caching, and preserve fast PageSpeed scores as content catalogs expand."
                }
            ]}
            deliverables={[
                {
                    title: "24/7 Uptime & Server Health Monitoring",
                    description: "Automated real-time monitoring that alerts our engineering team the second a server degradation or outage occurs.",
                    features: [
                        "Ping checks every 60 seconds from multiple global nodes",
                        "SSL certificate validity and auto-renewal monitoring",
                        "Server CPU, memory, and disk usage threshold alerts",
                        "Incident response logs and root-cause post-mortem reports"
                    ]
                },
                {
                    title: "Proactive Security Patching & Malware Defense",
                    description: "Comprehensive vulnerability management that keeps hackers, brute-force bots, and malicious injections at bay.",
                    features: [
                        "Routine core, theme, and plugin security updates (staging first)",
                        "Web Application Firewall (WAF) & Cloudflare DDoS mitigation setup",
                        "Daily automated malware and file integrity scans",
                        "Emergency remediation and blacklisting removal guarantee"
                    ]
                },
                {
                    title: "Daily Cloud Backups & Instant Disaster Recovery",
                    description: "Redundant, off-site cloud backups that ensure your website can be restored in minutes in the event of hardware failure.",
                    features: [
                        "Automated daily database and full-file cloud backups",
                        "Secure off-site encrypted storage (Amazon S3 / Google Cloud)",
                        "Single-click disaster recovery and rollback capability",
                        "Quarterly disaster recovery drill testing"
                    ]
                },
                {
                    title: "Core Web Vitals & Speed Optimization",
                    description: "Continuous performance audits that keep your website loading under 1.5 seconds and preserve organic search rankings.",
                    features: [
                        "Monthly Google PageSpeed Insights & Lighthouse benchmarking",
                        "Automated image compression and WebP/AVIF asset conversion",
                        "Database overhead cleanup and transient query purging",
                        "Server-side caching and CDN edge rule optimization"
                    ]
                },
                {
                    title: "Staging-First Testing & Zero-Downtime Deploys",
                    description: "A disciplined engineering workflow that ensures updates never disrupt your live customer-facing operations.",
                    features: [
                        "Isolated staging sandbox mirror of your production website",
                        "Pre-deployment visual regression and functionality smoke tests",
                        "Zero-downtime database schema migration protocols",
                        "Git-based version control with documented changelogs"
                    ]
                },
                {
                    title: "On-Demand Development & Content Updates",
                    description: "A dedicated pool of engineering hours each month for minor feature additions, banner updates, and design refinements.",
                    features: [
                        "Direct ticket submission via email, Slack, or project board",
                        "Fast 24 to 48-hour turnaround on standard web tasks",
                        "Form testing, link check audits, and 404 broken link fixes",
                        "Detailed monthly transparent task-by-task hour reports"
                    ]
                }
            ]}
            techStack={[
                {
                    category: "Monitoring & Reliability",
                    tools: ["UptimeRobot", "Pingdom", "New Relic", "Sentry", "Cloudflare", "Datadog"]
                },
                {
                    category: "CMS & Platform Environments",
                    tools: ["WordPress", "Shopify", "Next.js", "Node.js", "WooCommerce", "AWS EC2", "Vercel"]
                },
                {
                    category: "Security & Backup Infrastructure",
                    tools: ["Amazon S3", "Wordfence", "Patchstack", "SSL/TLS", "GitHub", "WP-CLI"]
                }
            ]}
            workflow={[
                {
                    step: "01",
                    title: "Site Onboarding & Health Audit",
                    description: "We audit your existing plugins, inspect server configurations, configure 24/7 monitoring sensors, and create initial cloud backups."
                },
                {
                    step: "02",
                    title: "Staging Environment Mirror",
                    description: "We establish an identical staging environment to safely test all updates, patches, and code changes before production release."
                },
                {
                    step: "03",
                    title: "Proactive Maintenance Cycles",
                    description: "Bi-weekly update sprints where patches are applied on staging, tested, and pushed to production during low-traffic maintenance windows."
                },
                {
                    step: "04",
                    title: "Monthly Reporting & Advisory",
                    description: "You receive an executive summary detailing uptime statistics, security scans, Core Web Vitals health, and completed maintenance tasks."
                }
            ]}
            engagementModels={[
                {
                    name: "Essential Care Retainer",
                    bestFor: "Corporate & Small Business Websites",
                    description: "Core maintenance covering 24/7 monitoring, security updates, daily backups, and up to 2 hours of on-demand developer support.",
                    highlights: [
                        "24/7 uptime monitoring & daily backups",
                        "Bi-weekly security updates (staging first)",
                        "2 hours of included development tasks",
                        "Monthly executive maintenance report"
                    ]
                },
                {
                    name: "Growth & Ecommerce SLA",
                    bestFor: "High-Traffic Websites & Online Stores",
                    description: "Enhanced support covering hourly backups, priority 30-minute critical response SLA, speed audits, and 5 hours of monthly dev support.",
                    highlights: [
                        "Hourly backups during peak sales hours",
                        "Priority emergency 30-minute response SLA",
                        "Monthly Core Web Vitals speed optimization",
                        "5 hours of included development tasks"
                    ]
                },
                {
                    name: "White-Label Agency Fleet Care",
                    bestFor: "Agencies Managing 5+ Client Websites",
                    description: "Wholesale fleet maintenance pricing enabling digital agencies to profitably resell website care packages without hiring support engineers.",
                    highlights: [
                        "Discounted per-site fleet pricing",
                        "100% white-label unbranded client reports",
                        "Single unified dashboard for all client sites",
                        "Dedicated technical account manager"
                    ]
                }
            ]}
            limitations={[
                {
                    point: "Hosting Provider Server Uptime",
                    explanation: "If an outage is caused by physical datacenter hardware failure or network issues at your third-party hosting company (e.g. GoDaddy, Bluehost, AWS), we coordinate directly with their support team to expedite resolution."
                },
                {
                    point: "Abandoned Third-Party Plugins",
                    explanation: "When a third-party plugin is permanently abandoned by its original developer and poses security vulnerabilities, we recommend and implement a modern supported alternative."
                },
                {
                    point: "Major Architectural Redesigns",
                    explanation: "Maintenance retainers cover ongoing health, updates, and minor enhancements. Full-scale site redesigns or ground-up rebuilds are scoped as dedicated Web Development projects."
                },
                {
                    point: "Credential & Access Requirements",
                    explanation: "To provide full monitoring and backups, our team requires administrative CMS credentials, hosting control panel access, and DNS management access."
                }
            ]}
            faqs={faqs}
            relatedServices={[
                {
                    title: "Offshore Web Development",
                    href: "/offshore-web-development-services",
                    description: "Upgrade legacy sites to ultra-fast Next.js architectures with built-in scalability and reliability."
                },
                {
                    title: "Offshore Ecommerce Development",
                    href: "/offshore-ecommerce-development",
                    description: "Dedicated Shopify and WooCommerce store development, checkout optimization, and catalog management."
                },
                {
                    title: "Offshore SEO Services",
                    href: "/offshore-seo-services",
                    description: "Protect and improve organic search visibility with continuous technical audits and on-page optimization."
                }
            ]}
            jsonLdSchemas={[serviceSchema, faqSchema, breadcrumbSchema]}
        />
    )
}
