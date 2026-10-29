import { Metadata } from 'next'
import { generatePageMetadata, generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/seo-config'
import ServiceLandingPage from '@/app/Components/ServiceLandingPage'

export const metadata: Metadata = generatePageMetadata({
    title: 'Offshore Software Development Company & Dedicated Engineers | BooWorks',
    description: 'Hire offshore software developers in India for SaaS platforms, cloud web apps, and mobile development. Full-stack engineering with modern agile workflows.',
    path: '/offshore-software-development',
    keywords: [
        'offshore software development services',
        'offshore software development',
        'offshore software development company',
        'offshore software developers',
        'offshore full stack developers',
        'offshore application development',
        'offshore mobile app development',
        'offshore SaaS development company',
        'offshore custom software development',
        'hire offshore developers india',
    ],
})

const faqs = [
    {
        question: "How do you vet and select offshore software developers at BooWorks?",
        answer: "Our software engineers undergo a rigorous 4-stage evaluation: technical code challenges in modern TypeScript/Python, systems architecture assessment, real-time debugging interviews, and English communication proficiency. Only the top 3% of applicants join our dedicated offshore engineering roster."
    },
    {
        question: "Can I manage the offshore developers directly, or is there an intermediary?",
        answer: "You have complete flexibility. In dedicated staff augmentation models, you manage the developers directly via your own Slack, Jira, and standups. In managed delivery models, a senior BooWorks Project Manager / Scrum Master handles daily sprint coordination and reporting."
    },
    {
        question: "What security and intellectual property safeguards do you implement?",
        answer: "We sign enforceable bilateral Non-Disclosure Agreements (NDAs), intellectual property assignment deeds, and adhere to strict data security protocols. Code is developed in your repositories, environments are isolated, and no client data is stored on unsecured local machines."
    },
    {
        question: "How quickly can we scale our engineering team up or down?",
        answer: "For dedicated developers, we can onboard pre-vetted engineers within 1 to 2 weeks. Scaling up or down requires standard 30-day notice, giving your company maximum operational agility without severance or recruitment liabilities."
    },
    {
        question: "What stacks do your full-stack offshore developers specialize in?",
        answer: "Our core engineering capabilities center on TypeScript, Next.js, React, Node.js, Python, FastAPI, React Native, PostgreSQL, MongoDB, Redis, Docker, and AWS/GCP cloud environments."
    }
]

const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Offshore Software Development', url: '/offshore-software-development' },
]

export default function OffshoreSoftwareDevelopmentPage() {
    const serviceSchema = generateServiceSchema({
        name: 'Offshore Software Development Services',
        description: 'Bespoke offshore software engineering services including SaaS platform development, dedicated full-stack developers, mobile app engineering, and cloud backend architecture.',
        path: '/offshore-software-development',
        serviceType: 'Software Development Outsourcing',
    })

    const faqSchema = generateFAQSchema(faqs)
    const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs)

    return (
        <ServiceLandingPage
            badge="Enterprise Engineering & SaaS Labs • India Delivery Center"
            h1="Offshore Software Development Services & Dedicated Engineers"
            subheadline="Accelerate product roadmaps and scale engineering capacity. Hire vetted offshore software developers, full-stack engineers, and cloud architects in India to build resilient SaaS platforms and mobile applications."
            serviceKey="Offshore Software Development"
            breadcrumbs={breadcrumbs}
            valueProps={[
                { label: "Engineering Talent", detail: "Vetted Senior Full-Stack" },
                { label: "Agile Sprints", detail: "Scrum & Trunk-Based Dev" },
                { label: "Security & IP", detail: "100% IP Assignment" },
                { label: "Cost Advantage", detail: "Up to 65% Capital Savings" },
            ]}
            audience={[
                {
                    title: "Tech Startups & Founders",
                    description: "Build, launch, and iterate your SaaS MVP with high capital efficiency before raising your next funding round."
                },
                {
                    title: "Scaleups & CTOs",
                    description: "Augment your existing engineering squads to burn through product backlogs without long domestic hiring cycles."
                },
                {
                    title: "Software Development Agencies",
                    description: "White-label custom software development and backend systems architecture for your enterprise client projects."
                },
                {
                    title: "Traditional Businesses",
                    description: "Automate legacy workflows, replace manual paper processes, and modernize internal tooling with bespoke cloud software."
                }
            ]}
            deliverables={[
                {
                    title: "Custom SaaS Product Development",
                    description: "Architect and build multi-tenant, cloud-native Software-as-a-Service platforms engineered for horizontal scalability.",
                    features: [
                        "Multi-tenant database architectures and tenant isolation",
                        "Role-based access control (RBAC) and team management",
                        "Subscription billing & invoicing integration (Stripe, Chargebee)",
                        "Real-time event logging, audit trails, and webhooks"
                    ]
                },
                {
                    title: "Dedicated Full-Stack Developer Teams",
                    description: "Pre-vetted software engineers embedded directly into your engineering workflows and version control systems.",
                    features: [
                        "Dedicated senior developers focused 100% on your product",
                        "Daily participation in standups, sprint planning, and retros",
                        "Clean commits, descriptive pull requests, and automated tests",
                        "Timezone overlap with US, UK, Australia, and Middle East"
                    ]
                },
                {
                    title: "Mobile App Development (iOS & Android)",
                    description: "Cross-platform mobile applications that deliver native performance, fluid gestures, and offline-first capabilities.",
                    features: [
                        "React Native & Expo cross-platform mobile engineering",
                        "Seamless push notification & device hardware integrations",
                        "App Store & Google Play Store submission and compliance",
                        "Offline data caching and synchronization protocols"
                    ]
                },
                {
                    title: "Cloud Backend, API & Microservices",
                    description: "Resilient serverless and microservice architectures built to process high-throughput transaction loads reliably.",
                    features: [
                        "RESTful & GraphQL API design with OpenAPI/Swagger documentation",
                        "Asynchronous job queues and message brokers (RabbitMQ, Redis)",
                        "Database schema modeling, indexing, and connection pooling",
                        "Containerized deployments using Docker and Kubernetes"
                    ]
                },
                {
                    title: "Legacy Software Modernization",
                    description: "Refactor or rewrite monolithic legacy applications into modern, modular microservices without disrupting live operations.",
                    features: [
                        "Architectural assessment and technical debt audit",
                        "Phased strangler-fig migration roadmaps",
                        "Database migration, data cleansing, and integrity verification",
                        "Modern UI/UX redesign and API encapsulation"
                    ]
                },
                {
                    title: "DevOps, CI/CD & Automated Testing",
                    description: "Implement modern automated delivery pipelines that catch regressions early and enable continuous deployment.",
                    features: [
                        "Automated CI/CD pipelines via GitHub Actions and GitLab CI",
                        "Unit, integration, and end-to-end testing (Jest, Playwright)",
                        "Cloud infrastructure-as-code (Terraform, AWS CDK)",
                        "24/7 server health monitoring and automated alerts"
                    ]
                }
            ]}
            techStack={[
                {
                    category: "Languages & Frameworks",
                    tools: ["TypeScript", "Python", "Node.js", "Next.js", "React", "React Native", "FastAPI"]
                },
                {
                    category: "Databases & Caching",
                    tools: ["PostgreSQL", "MongoDB", "Redis", "Prisma ORM", "Mongoose", "Supabase"]
                },
                {
                    category: "Cloud, DevOps & Tooling",
                    tools: ["AWS", "Google Cloud", "Docker", "Kubernetes", "GitHub Actions", "Terraform", "Postman"]
                }
            ]}
            workflow={[
                {
                    step: "01",
                    title: "Architecture & Tech Assessment",
                    description: "We analyze your software requirements, define database schemas, select appropriate cloud services, and outline sprint milestones."
                },
                {
                    step: "02",
                    title: "Environment & CI/CD Setup",
                    description: "We configure staging environments, code repositories, automated linter rules, and initial database migrations."
                },
                {
                    step: "03",
                    title: "Iterative Sprint Sprints",
                    description: "2-week sprints with test-driven development, daily git pushes, feature branch previews, and regular sprint demo sessions."
                },
                {
                    step: "04",
                    title: "Security Review & Deployment",
                    description: "Vulnerability scanning, performance load testing, blue-green production deployment, and post-launch stability monitoring."
                }
            ]}
            engagementModels={[
                {
                    name: "Dedicated Engineering Squad",
                    bestFor: "SaaS Startups & Growth Scaleups",
                    description: "A tailored offshore team (Full-Stack Engineer, QA Specialist, Technical Lead) working exclusively on your product backlog.",
                    highlights: [
                        "160 hours per developer each month",
                        "Direct management in your Slack and Jira",
                        "Weekly code reviews by senior technical architects",
                        "Scalable capacity with 30-day notice adjustments"
                    ]
                },
                {
                    name: "Fixed-Price MVP Delivery",
                    bestFor: "Early-Stage Startups & Product Launches",
                    description: "Turn your functional requirements into a functional, market-ready SaaS MVP within an agreed timeline and fixed investment budget.",
                    highlights: [
                        "Defined scope, milestones, and timeline (8-16 weeks)",
                        "Zero risk of unexpected budget inflation",
                        "Complete documentation and deployment handover",
                        "Includes post-launch warranty and bug fixes"
                    ]
                },
                {
                    name: "Staff Augmentation (Individual Engineers)",
                    bestFor: "Engineering Teams Needing Specific Skills",
                    description: "Hire individual senior React, Node, or Python developers to fill specialized skill gaps within your domestic engineering organization.",
                    highlights: [
                        "Interview and select specific engineers",
                        "Direct reporting to your internal engineering manager",
                        "Full alignment with your timezone and tools",
                        "Zero payroll, visa, or benefits administration overhead"
                    ]
                }
            ]}
            limitations={[
                {
                    point: "Detailed Specifications Speed Up Delivery",
                    explanation: "Software engineering thrives on clarity. Clear user stories, wireframes, and acceptance criteria accelerate velocity and prevent misunderstandings. When specs are high-level, we include scoping sprints."
                },
                {
                    point: "Testing & Code Quality Take Precedence",
                    explanation: "We do not compromise on code safety to hit arbitrary rush dates. Every PR is peer-reviewed and tested to prevent costly technical debt and architectural rewrites down the line."
                },
                {
                    point: "Infrastructure Hosting Costs",
                    explanation: "Cloud computing infrastructure expenses (AWS, GCP, Vercel, Supabase) are paid directly to your cloud providers under your corporate accounts."
                },
                {
                    point: "Active Product Owner Needed",
                    explanation: "High-performing offshore development requires an active internal Product Owner or stakeholder available for weekly demos and acceptance testing."
                }
            ]}
            faqs={faqs}
            relatedServices={[
                {
                    title: "Offshore Web Development",
                    href: "/offshore-web-development-services",
                    description: "High-speed frontend development, marketing portals, and headless CMS implementations."
                },
                {
                    title: "Offshore Website Maintenance",
                    href: "/offshore-website-maintenance-services",
                    description: "Continuous server monitoring, security patching, dependency upgrades, and database maintenance."
                },
                {
                    title: "Offshore SEO Services",
                    href: "/offshore-seo-services",
                    description: "Technical SEO and organic growth roadmaps to drive user acquisition for your new SaaS platform."
                }
            ]}
            jsonLdSchemas={[serviceSchema, faqSchema, breadcrumbSchema]}
        />
    )
}
