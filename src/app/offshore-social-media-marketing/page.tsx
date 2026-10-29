import { Metadata } from 'next'
import { generatePageMetadata, generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/seo-config'
import ServiceLandingPage from '@/app/Components/ServiceLandingPage'

export const metadata: Metadata = generatePageMetadata({
    title: 'Offshore Social Media Marketing & Creative Agency | BooWorks',
    description: 'Elevate your brand presence with offshore social media marketing, content creation, and graphic design from India. Dedicated designers, copywriters, and video editors.',
    path: '/offshore-social-media-marketing',
    keywords: [
        'offshore social media marketing services',
        'offshore social media marketing',
        'offshore social media marketing agency',
        'offshore social media management',
        'offshore content marketing',
        'offshore graphic design services',
        'offshore graphic design agency',
        'offshore branding agency',
        'offshore video editing services',
        'offshore motion graphics services',
        'offshore content creation agency',
    ],
})

const faqs = [
    {
        question: "How do your offshore designers maintain brand consistency with our existing guidelines?",
        answer: "We strictly adhere to your design system, Figma brand kits, typography hierarchies, and color palettes. Before beginning production, we create a standardized Brand Style Bible ensuring every asset—from Instagram carousels to LinkedIn infographics—aligns flawlessly with your identity."
    },
    {
        question: "Can we hire a dedicated graphic designer or video editor full-time?",
        answer: "Yes. Through our Dedicated Creative Talent model, you get a full-time, experienced graphic designer, motion designer, or video editor working exclusively on your creative requests inside your Slack and project management boards."
    },
    {
        question: "What is your typical turnaround time for creative assets?",
        answer: "Standard graphic design requests (social graphics, carousel slides, banner ads) are typically turned around in 24 to 48 hours. Complex motion graphics and video editing projects typically take 48 to 72 hours, depending on storyboard length and revision rounds."
    },
    {
        question: "What raw footage and assets do we need to provide for video editing?",
        answer: "You can upload raw smartphone videos, webinar recordings, podcast clips, or product footage via Google Drive, Dropbox, or Frame.io. Our editors handle color grading, audio cleanup, dynamic subtitle animations, sound design, and format resizing for TikTok, Reels, and Shorts."
    },
    {
        question: "Do you also handle community management and social post scheduling?",
        answer: "Yes. Our social media managers write engaging captions, research relevant hashtags, schedule posts across your channels (Buffer, Hootsuite, Later), and monitor inbound comments and DMs during agreed-upon coverage windows."
    }
]

const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Offshore Social Media & Creative Services', url: '/offshore-social-media-marketing' },
]

export default function OffshoreSocialMediaPage() {
    const serviceSchema = generateServiceSchema({
        name: 'Offshore Social Media Marketing & Creative Services',
        description: 'Comprehensive offshore social media management, graphic design, motion graphics, video editing, and brand identity engineering from India.',
        path: '/offshore-social-media-marketing',
        serviceType: 'Social Media & Creative Outsourcing',
    })

    const faqSchema = generateFAQSchema(faqs)
    const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs)

    return (
        <ServiceLandingPage
            badge="Creative Studio & Brand Engineering • India Delivery Center"
            h1="Offshore Social Media Marketing & Creative Branding Agency"
            subheadline="Elevate your brand aesthetic and maintain an active digital footprint. Hire dedicated offshore graphic designers, content copywriters, and video editors in India to produce high-impact creative assets at scale."
            serviceKey="Offshore Social Media & Creative Services"
            breadcrumbs={breadcrumbs}
            valueProps={[
                { label: "Creative Talent", detail: "Figma & Adobe Specialists" },
                { label: "Fast Turnaround", detail: "24-48 Hour Deliveries" },
                { label: "Multi-Format", detail: "Reels, Carousels & Video" },
                { label: "Cost Advantage", detail: "Save 55-70% on Creative" },
            ]}
            audience={[
                {
                    title: "Digital & Ad Agencies",
                    description: "Deliver hundreds of monthly social graphics, client pitch decks, and ad creatives without expanding your expensive domestic design department."
                },
                {
                    title: "D2C & Consumer Brands",
                    description: "Fuel your daily organic social feed, Instagram Reels, TikTok videos, and paid ad creative variations with continuous asset production."
                },
                {
                    title: "B2B SaaS & Enterprise",
                    description: "Translate complex product features into clean LinkedIn carousels, customer case study PDFs, and professional slide decks."
                },
                {
                    title: "Founders & Creators",
                    description: "Build personal brand authority on LinkedIn and X (Twitter) through ghostwritten thought leadership and polished infographics."
                }
            ]}
            deliverables={[
                {
                    title: "End-to-End Social Media Management",
                    description: "Strategic content calendars, daily publishing schedules, and community engagement workflows that cultivate loyal followers.",
                    features: [
                        "Monthly multi-platform editorial content calendar planning",
                        "Platform-native copywriting tailored for LinkedIn, Instagram, and X",
                        "Automated post scheduling via Buffer, Hootsuite, or Sprout Social",
                        "Monthly follower growth, engagement rate, and reach analytics"
                    ]
                },
                {
                    title: "Custom Graphic Design & Asset Production",
                    description: "High-end visual assets that reinforce brand credibility across websites, paid advertising, and organic social channels.",
                    features: [
                        "Multi-slide educational Instagram and LinkedIn carousels",
                        "High-converting paid advertising static banners (all aspect ratios)",
                        "Custom blog featured graphics, infographics, and data visualizations",
                        "Sales enablement one-pagers, whitepapers, and presentation decks"
                    ]
                },
                {
                    title: "Short-Form Video Editing (Reels, TikTok, Shorts)",
                    description: "Engaging vertical video editing that captures short attention spans, hooks viewers, and drives organic algorithm reach.",
                    features: [
                        "Dynamic animated subtitles, jump-cuts, and visual sound effects",
                        "Repurposing long-form podcasts, webinars, and interviews into clips",
                        "B-roll selection, pacing optimization, and color correction",
                        "Thumbnail design optimized for high organic click-through rates"
                    ]
                },
                {
                    title: "Brand Identity Systems & Visual Style Guides",
                    description: "Foundational visual branding that establishes a memorable, authoritative brand presence in crowded markets.",
                    features: [
                        "Logo mark design, responsive variations, and iconography",
                        "Typography hierarchy selection and cohesive color palette systems",
                        "Comprehensive Figma design system and component kit handover",
                        "Brand voice, tone, and visual usage guidelines documentation"
                    ]
                },
                {
                    title: "Motion Graphics & 2D Animation",
                    description: "Dynamic animated graphics and micro-interactions that elevate brand storytelling and explain complex product workflows.",
                    features: [
                        "Animated logo stingers and video intro/outro animations",
                        "Product feature highlight animations and UI screencast walkthroughs",
                        "Kinetic typography animations for social ad hooks",
                        "Lottie vector animations for lightweight website integration"
                    ]
                },
                {
                    title: "White-Label Creative Fulfillment for Agencies",
                    description: "An elastic offshore creative team working directly under your agency brand, delivering client work seamlessly.",
                    features: [
                        "Direct collaboration inside your Slack, ClickUp, or Asana",
                        "Figma source files and unbranded client review links",
                        "Unlimited revisions during active sprint windows",
                        "Predictable flat monthly retainer pricing per creative seat"
                    ]
                }
            ]}
            techStack={[
                {
                    category: "Design & Prototyping",
                    tools: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "Canva Pro", "InDesign"]
                },
                {
                    category: "Video Editing & Motion Design",
                    tools: ["Adobe Premiere Pro", "Adobe After Effects", "CapCut Pro", "DaVinci Resolve", "Frame.io"]
                },
                {
                    category: "Publishing, Scheduling & Social Ops",
                    tools: ["Buffer", "Hootsuite", "Later", "Sprout Social", "Slack", "ClickUp"]
                }
            ]}
            workflow={[
                {
                    step: "01",
                    title: "Brand Alignment & Asset Ingestion",
                    description: "We review your brand guidelines, ingest raw visual assets and logos, and calibrate our designers to your visual standards."
                },
                {
                    step: "02",
                    title: "Editorial & Creative Sprint Planning",
                    description: "We establish a bi-weekly creative roadmap, draft content calendars, and generate initial concept moodboards for approval."
                },
                {
                    step: "03",
                    title: "Production & Asynchronous Review",
                    description: "Our dedicated designers produce assets, post drafts in Figma or Frame.io for quick feedback, and iterate within 24 hours."
                },
                {
                    step: "04",
                    title: "Scheduling, Distribution & Reporting",
                    description: "Approved assets are scheduled across your social profiles, engagement is monitored, and monthly performance reports are delivered."
                }
            ]}
            engagementModels={[
                {
                    name: "Dedicated Creative Seat",
                    bestFor: "Agencies & Content-Heavy Brands",
                    description: "Hire a full-time, dedicated Graphic Designer, Motion Designer, or Video Editor working exclusively on your creative queue.",
                    highlights: [
                        "160 hours per month dedicated capacity",
                        "Direct communication via Slack/Teams",
                        "Daily turnaround on active design requests",
                        "Full access to raw Figma and Adobe project files"
                    ]
                },
                {
                    name: "Monthly Social Media Growth Retainer",
                    bestFor: "Brands Needing Hands-Off Social Execution",
                    description: "Complete management of your social media profiles, including content strategy, graphic creation, video editing, and scheduling.",
                    highlights: [
                        "12 to 20 custom branded social posts per month",
                        "4 to 8 edited short-form Reels/Shorts per month",
                        "Complete caption drafting and hashtag strategy",
                        "Monthly audience engagement and growth reporting"
                    ]
                },
                {
                    name: "Brand Identity Design Sprint",
                    bestFor: "New Company Launches & Brand Refresh",
                    description: "A focused 3-to-4 week design sprint to create a complete corporate identity, logo system, color palette, and visual brand bible.",
                    highlights: [
                        "3 distinct logo design concepts with revisions",
                        "Complete typography, color palette, and iconography system",
                        "Figma Brand Kit and social media template pack",
                        "Full vector source files and copyright assignment"
                    ]
                }
            ]}
            limitations={[
                {
                    point: "Clear Design Briefs Ensure Speed",
                    explanation: "Creative production is fastest when briefs include reference visual styles, target dimensions, copy drafts, and functional goals. When copy is unwritten, our copywriting team handles scriptwriting."
                },
                {
                    point: "Raw Video Quality Depends on Source Footage",
                    explanation: "While our video editors can color grade, clean audio, and add dynamic motion graphics, high-resolution original recordings (1080p/4K with clean microphone audio) produce the most professional end results."
                },
                {
                    point: "Third-Party Social Platform Algorithmic Shifts",
                    explanation: "Organic reach on social platforms (Instagram, LinkedIn, TikTok) fluctuates with algorithm updates. We focus on consistent quality and engagement triggers rather than chasing fragile vanity hacks."
                },
                {
                    point: "Community Engagement Boundaries",
                    explanation: "Our social media managers handle positive brand engagement and FAQs based on your approved answer handbook. Complex technical support inquiries are escalated to your internal team."
                }
            ]}
            faqs={faqs}
            relatedServices={[
                {
                    title: "Offshore Paid Advertising (PPC)",
                    href: "/offshore-ppc-services",
                    description: "Transform your high-performing social graphics into scalable, profitable Meta and Google ad campaigns."
                },
                {
                    title: "Offshore Digital Marketing",
                    href: "/offshore-digital-marketing-services",
                    description: "Integrate your social media strategy into a comprehensive multi-channel digital growth engine."
                },
                {
                    title: "Offshore Web Development",
                    href: "/offshore-web-development-services",
                    description: "Implement your new visual branding seamlessly across high-performance custom web applications."
                }
            ]}
            jsonLdSchemas={[serviceSchema, faqSchema, breadcrumbSchema]}
        />
    )
}
