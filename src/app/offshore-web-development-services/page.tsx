import { Metadata } from 'next'
import { generatePageMetadata, generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/seo-config'
import ServiceLandingPage from '@/app/Components/ServiceLandingPage'

export const metadata: Metadata = generatePageMetadata({
    title: 'Offshore Web Development Company & Services in India | BooWorks',
    description: 'Build fast, scalable web platforms with BooWorks offshore web development services in India. Next.js, React, Tailwind, and custom engineering with dedicated remote developers.',
    path: '/offshore-web-development-services',
    keywords: [
        'offshore web development services',
        'offshore website development',
        'offshore website development company',
        'offshore website development services',
        'offshore web development',
        'offshore web development company',
        'offshore web design company',
        'offshore website developers',
        'offshore web development outsourcing',
        'offshore custom website development',
        'offshore web development company in india',
    ],
})

const faqs = [
    {
        question: "Why should an overseas company outsource web development to India?",
        answer: "India offers the world's deepest pool of English-fluent, highly trained full-stack software engineers. Outsourcing to an experienced development firm like BooWorks provides access to cutting-edge tech stacks (Next.js, React, TypeScript, Tailwind) at 50% to 65% lower cost compared to domestic US, UK, or Australian development salaries, without sacrificing code quality or security."
    },
    {
        question: "Who owns the intellectual property (IP) and source code?",
        answer: "You own 100% of the intellectual property, source code, design files, and deployment infrastructure from day one. All code is committed directly to your private GitHub, GitLab, or Bitbucket repositories with clean documentation and complete handover."
    },
    {
        question: "How do you ensure modern performance standards like Core Web Vitals?",
        answer: "Every web build is engineered mobile-first with clean semantic HTML, static pre-rendering (SSG), server-side rendering (SSR), automated image optimization (WebP/AVIF), and zero unnecessary bloat. We target 90+ Google PageSpeed and Lighthouse scores across all key templates."
    },
    {
        question: "Can your developers integrate with our existing team and tech stack?",
        answer: "Absolutely. Our offshore web developers work seamlessly alongside in-house tech leads. We follow standard git branching strategies (GitFlow, trunk-based), submit PRs with unit tests, participate in daily standups, and communicate via Slack or Microsoft Teams."
    },
    {
        question: "What post-launch support and warranty do you provide?",
        answer: "All custom web development projects include a 30-day post-launch warranty covering bug fixes and technical adjustments at no additional charge. Following the warranty, we offer flexible offshore maintenance and SLA-backed support retainers."
    }
]

const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Offshore Web Development Services', url: '/offshore-web-development-services' },
]

export default function OffshoreWebDevelopmentPage() {
    const serviceSchema = generateServiceSchema({
        name: 'Offshore Web Development Services',
        description: 'Custom modern website and web application development services utilizing Next.js, React, TypeScript, and modern headless architectures for global businesses.',
        path: '/offshore-web-development-services',
        serviceType: 'Website Development Outsourcing',
    })

    const faqSchema = generateFAQSchema(faqs)
    const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs)

    return (
        <ServiceLandingPage
            badge="Modern Full-Stack Engineering • India Delivery Hub"
            h1="Offshore Web Development Services & Next.js Engineering"
            subheadline="Build blazingly fast, accessible, and conversion-optimized websites. Hire dedicated offshore web developers and engineering pods in India specializing in Next.js, React, TypeScript, and cloud-native architectures."
            serviceKey="Offshore Web Development Services"
            breadcrumbs={breadcrumbs}
            valueProps={[
                { label: "Modern Stack", detail: "Next.js 16, React 19, TS" },
                { label: "IP Ownership", detail: "100% Client-Owned Code" },
                { label: "Performance", detail: "90+ PageSpeed & CWV" },
                { label: "Cost Savings", detail: "50-65% vs Domestic Dev" },
            ]}
            audience={[
                {
                    title: "Design & Digital Agencies",
                    description: "Bring your Figma designs to life with pixel-perfect, accessible React/Next.js code without hiring expensive in-house coders."
                },
                {
                    title: "Funded Startups & Scaleups",
                    description: "Launch MVP web portals and marketing sites rapidly with dedicated offshore developers acting as your core frontend team."
                },
                {
                    title: "B2B & Mid-Market Firms",
                    description: "Replace legacy slow CMS monoliths with ultra-fast modern headless architectures that rank top on Google and convert visitors."
                },
                {
                    title: "E-Commerce Brands",
                    description: "Develop frictionless headless commerce storefronts with instant page transitions and seamless checkout funnels."
                }
            ]}
            deliverables={[
                {
                    title: "Custom Next.js & React Web Engineering",
                    description: "Production-ready, highly maintainable web applications built on Next.js App Router and modern component architectures.",
                    features: [
                        "Server-Side Rendering (SSR) & Static Site Generation (SSG)",
                        "TypeScript type-safety across all components and API layers",
                        "Tailwind CSS styling with full dark/light theme support",
                        "Clean atomic design pattern with modular component libraries"
                    ]
                },
                {
                    title: "Pixel-Perfect Figma to Code Implementation",
                    description: "Flawless translation of UI/UX design prototypes into semantic, accessible, and responsive code.",
                    features: [
                        "1:1 fidelity with desktop, tablet, and mobile Figma layouts",
                        "Fluid typography, responsive spacing, and micro-interactions",
                        "ARIA compliance and WCAG 2.1 AA accessibility standards",
                        "Cross-browser testing across Chrome, Safari, Firefox, and Edge"
                    ]
                },
                {
                    title: "Headless CMS & API Integration",
                    description: "Empower non-technical marketing teams with intuitive content publishing while maintaining high developer velocity.",
                    features: [
                        "Integration with Sanity, Strapi, Contentful, or WordPress REST API",
                        "Custom schema modeling and intuitive editorial dashboards",
                        "Instant preview environments and automated webhook deployments",
                        "Role-based access controls and versioned content history"
                    ]
                },
                {
                    title: "Core Web Vitals & Speed Optimization",
                    description: "Engineered from the ground up for sub-second load speeds, low layout shift, and instant interactive responsiveness.",
                    features: [
                        "Automated image pipeline with Next.js Image component (WebP/AVIF)",
                        "Dynamic code splitting and tree-shaking for minimal bundle sizes",
                        "Font preloading and zero render-blocking JavaScript",
                        "Edge CDN caching and HTTP/3 performance configuration"
                    ]
                },
                {
                    title: "Custom Web Portals & Web App MVPs",
                    description: "Interactive customer portals, client dashboards, and bespoke business tools tailored to your operational workflows.",
                    features: [
                        "Secure authentication flows (NextAuth, OAuth, Supabase)",
                        "Relational and document database integration (PostgreSQL, MongoDB)",
                        "Payment gateway integrations (Stripe, LemonSqueezy, PayPal)",
                        "RESTful API and GraphQL endpoints with validation schemas"
                    ]
                },
                {
                    title: "Technical SEO & Schema Foundation",
                    description: "Built-in technical SEO scaffolding that ensures every page is discovered, rendered, and indexed effortlessly by search engines.",
                    features: [
                        "Dynamic XML sitemaps and intelligent robots.txt generation",
                        "Automated OpenGraph and Twitter card social metadata",
                        "Schema.org JSON-LD structured data for rich snippet eligibility",
                        "Clean canonical URL generation and 301 redirect management"
                    ]
                }
            ]}
            techStack={[
                {
                    category: "Frontend & UI Frameworks",
                    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Radix UI", "shadcn/ui"]
                },
                {
                    category: "Backend, Database & CMS",
                    tools: ["Node.js", "MongoDB", "PostgreSQL", "Sanity CMS", "Strapi", "Prisma", "Zod"]
                },
                {
                    category: "Deployment, CI/CD & Testing",
                    tools: ["Vercel", "GitHub Actions", "Docker", "AWS", "Cloudflare", "Jest", "Playwright"]
                }
            ]}
            workflow={[
                {
                    step: "01",
                    title: "Technical Architecture & Scoping",
                    description: "We review your designs and functional specs, define the tech stack, plan data models, and establish a milestone delivery plan."
                },
                {
                    step: "02",
                    title: "Design System & Scaffold Setup",
                    description: "We configure the repository, establish CI/CD pipelines, build the foundational component library, and set up staging environments."
                },
                {
                    step: "03",
                    title: "Agile Development Sprints",
                    description: "We code in 2-week sprints, deploying preview URLs for every feature branch, submitting PRs, and reviewing progress with your team."
                },
                {
                    step: "04",
                    title: "QA, Lighthouse Audit & Handover",
                    description: "Cross-browser testing, mobile verification, 90+ Lighthouse audits, zero-downtime production deployment, and 30-day warranty."
                }
            ]}
            engagementModels={[
                {
                    name: "Dedicated Remote Web Developer",
                    bestFor: "Agencies & Continuous Product Development",
                    description: "Hire an experienced full-time Next.js/React developer who works exclusively on your projects under your technical direction.",
                    highlights: [
                        "160 hours per month dedicated capacity",
                        "Full alignment with your timezone & communication tools",
                        "Daily git commits directly to your private repositories",
                        "No long-term lock-in after 60-day pilot"
                    ]
                },
                {
                    name: "Fixed-Scope Turnkey Project",
                    bestFor: "Complete Website Redesigns & Brand Launches",
                    description: "Complete end-to-end development of a new website or web application with guaranteed milestone deliverables and fixed pricing.",
                    highlights: [
                        "Guaranteed milestone delivery schedule",
                        "Fixed project price with zero hidden cost overruns",
                        "Includes UI implementation, CMS setup, and QA",
                        "30-day complimentary post-launch warranty"
                    ]
                },
                {
                    name: "White-Label Dev Partner for Agencies",
                    bestFor: "Agencies Needing Reliable Technical Fulfillment",
                    description: "Outsource development work for your end clients while preserving your agency's branding, margins, and client relationships.",
                    highlights: [
                        "100% white-label confidentiality with strict NDA",
                        "Seamless collaboration inside your Slack or project boards",
                        "Unbranded preview staging environments",
                        "Predictable wholesale agency developer rates"
                    ]
                }
            ]}
            limitations={[
                {
                    point: "Design Readiness Accelerates Sprints",
                    explanation: "For fixed-scope builds, having finalized Figma designs and copy drafts before development kicks off ensures the fastest turnaround. When designs are incomplete, we provide wireframing and design sprints first."
                },
                {
                    point: "Third-Party API Constraints",
                    explanation: "Performance and uptime of third-party APIs (payment processors, legacy CRMs, external databases) depend on their respective service providers. We implement robust fallback and retry mechanisms."
                },
                {
                    point: "Clear Scope Management",
                    explanation: "To keep fixed-price projects strictly on schedule, feature changes requested mid-sprint are formally estimated and scheduled as subsequent milestone phases."
                },
                {
                    point: "Client Domain & Hosting Credentials",
                    explanation: "Production domain launches require DNS access or collaboration with your IT team to configure SSL certificates and nameservers securely."
                }
            ]}
            faqs={faqs}
            relatedServices={[
                {
                    title: "Offshore Software Development",
                    href: "/offshore-software-development",
                    description: "Full-stack SaaS application engineering, mobile app development, and cloud-native architecture."
                },
                {
                    title: "Offshore Website Maintenance",
                    href: "/offshore-website-maintenance-services",
                    description: "Ongoing 24/7 technical support, security patching, dependency updates, and speed maintenance."
                },
                {
                    title: "Offshore SEO Services",
                    href: "/offshore-seo-services",
                    description: "Technical search audits and on-page optimization designed to rank your new web platform top on Google."
                }
            ]}
            jsonLdSchemas={[serviceSchema, faqSchema, breadcrumbSchema]}
        />
    )
}
