import { Metadata } from 'next'
import { generatePageMetadata, generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/seo-config'
import ServiceLandingPage from '@/app/Components/ServiceLandingPage'

export const metadata: Metadata = generatePageMetadata({
    title: 'Offshore Video Editing Services & Motion Graphics in India | BooWorks',
    description: 'Scale your video output with offshore video editing services from BooWorks. Dedicated post-production team in India for YouTube, TikTok, Reels, SaaS product demos, and motion graphics.',
    path: '/offshore-video-editing-services',
    keywords: [
        'offshore video editing services',
        'offshore video editing agency',
        'video editing outsourcing in india',
        'offshore motion graphics services',
        'youtube video editing outsourcing',
        'reels video editing offshore',
        'tiktok video editing services',
        'b2b video editing agency',
        'hire offshore video editors',
        'dedicated video editor offshore',
    ],
})

const faqs = [
    {
        question: "Why should we outsource video editing to BooWorks offshore team in India?",
        answer: "Video post-production requires significant time, computing power, and specialized creative skills. Outsourcing to BooWorks in India gives you access to full-time Adobe Premiere Pro and After Effects professionals at 50-70% lower costs than domestic hires, allowing you to publish 3x-5x more video content consistently without burnout."
    },
    {
        question: "What software, tools, and visual plugins does your editing team use?",
        answer: "Our editors work with industry-standard professional suites: Adobe Premiere Pro, After Effects, DaVinci Resolve Studio (for advanced color grading), Blender, Photoshop, Illustrator, and Epidemic Sound/Artlist for fully licensed music and sound effects (SFX)."
    },
    {
        question: "How do we transfer large 4K raw video files back and forth?",
        answer: "We establish streamlined high-speed cloud file transfer workflows using Frame.io, Google Drive Workspace, Dropbox, or LucidLink. Frame.io enables frame-accurate timecoded comments and visual annotations, making revisions effortless and precise."
    },
    {
        question: "What is your typical turnaround time for video deliverables?",
        answer: "For short-form videos (Reels, TikTok, YouTube Shorts), our typical turnaround is 24 to 48 hours. For standard YouTube long-form videos (8-15 minutes), turnaround is 48 to 72 hours. Rush delivery workflows can be arranged for time-sensitive marketing campaigns."
    },
    {
        question: "Can your editors follow our brand guidelines and unique editing style?",
        answer: "Yes. During onboarding, we build a customized Brand Asset Library containing your fonts, color palettes, lower-thirds, intro/outro animations, pacing preferences, and reference videos. Each video undergoes internal creative QC before delivery to ensure consistent brand compliance."
    }
]

const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Offshore Services', url: '/offshore-services' },
    { name: 'Offshore Video Editing Services', url: '/offshore-video-editing-services' },
]

export default function OffshoreVideoEditingPage() {
    const serviceSchema = generateServiceSchema({
        name: 'Offshore Video Editing Services',
        description: 'Professional post-production, short-form Reels and TikTok editing, YouTube video editing, motion graphics animations, color grading, and sound design from India.',
        path: '/offshore-video-editing-services',
        serviceType: 'Video Post-Production & Motion Graphics Outsourcing',
    })

    const faqSchema = generateFAQSchema(faqs)
    const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs)

    return (
        <ServiceLandingPage
            badge="Post-Production & Motion Graphics • Dedicated Video Editors in India"
            h1="Offshore Video Editing & Motion Graphics Services"
            subheadline="Transform raw footage into captivating, high-retention video stories. Partner with dedicated video editors and motion designers in India to scale YouTube channels, social media Reels, and high-converting video ads."
            serviceKey="Offshore Video Editing Services"
            breadcrumbs={breadcrumbs}
            valueProps={[
                { label: "Turnaround", detail: "24-48 Hour Delivery" },
                { label: "Collaboration", detail: "Frame.io Timecoded Reviews" },
                { label: "Licensing", detail: "Royalty-Free Audio & SFX" },
                { label: "Cost Savings", detail: "50-70% on Post-Production" },
            ]}
            audience={[
                {
                    title: "Content Creators & Influencers",
                    description: "Free up hours of editing time. Hand off raw video files and receive polished, retention-optimized YouTube episodes and Shorts."
                },
                {
                    title: "E-Commerce & D2C Brands",
                    description: "Turn user-generated content (UGC) and product clips into high-converting video ads and TikToks that drive measurable sales."
                },
                {
                    title: "Marketing & Creative Agencies",
                    description: "White-label our video production team to expand your agency's creative bandwidth and offer high-margin video packages to clients."
                },
                {
                    title: "SaaS & B2B Technology Companies",
                    description: "Produce crisp software UI walkthroughs, customer testimonial case studies, and 2D motion graphic explainer videos."
                }
            ]}
            deliverables={[
                {
                    title: "Short-Form Video Editing (Reels, TikTok, Shorts)",
                    description: "High-retention vertical video edits engineered for maximum watch time and organic algorithm distribution.",
                    features: [
                        "Dynamic animated captions and text popups (Hormozi / Ali Abdaal styles)",
                        "Pattern interrupts, zoom cuts, sound effects (SFX), and B-roll overlays",
                        "Thumb-stopping hook optimization in the first 3 seconds",
                        "Exported in native 9:16 vertical resolution optimized for mobile displays"
                    ]
                },
                {
                    title: "YouTube & Long-Form Video Post-Production",
                    description: "Complete episodic video editing that keeps viewers engaged throughout the entire video narrative.",
                    features: [
                        "Multi-camera angle syncing and rough cut assembly",
                        "Pacing enhancement with jump-cut pruning and storytelling structure",
                        "Contextual B-roll sourcing, custom lower-thirds, and visual chapter cards",
                        "Click-worthy high-CTR YouTube thumbnail design included upon request"
                    ]
                },
                {
                    title: "Motion Graphics & 2D Animated Explainers",
                    description: "Custom animated graphic sequences that simplify complex product features and elevate brand authority.",
                    features: [
                        "Vector logo animations, kinetic typography, and infographic motion",
                        "SaaS product UI walkthrough animations with smooth cursor zooms",
                        "Branded intros, outros, and lower-third graphic packages",
                        "Lottie and MP4 web-ready exports for landing page embeds"
                    ]
                },
                {
                    title: "Color Grading & Audio Mastering",
                    description: "Cinema-grade finishing ensuring professional broadcast audio levels and vibrant visual contrast.",
                    features: [
                        "DaVinci Resolve studio color correction, white balance, and skin tone tuning",
                        "LUT application and color palette consistency across scenes",
                        "Audio noise reduction, dialogue de-essing, EQ, and loudness normalization (-14 LUFS for YouTube)",
                        "Layered sound design with ambient audio, whooshes, risers, and impact hits"
                    ]
                }
            ]}
            workflow={[
                {
                    step: "01",
                    title: "Footage Upload & Creative Brief",
                    description: "Upload raw camera files, screen recordings, and audio to Frame.io or cloud storage with your editing notes or script."
                },
                {
                    step: "02",
                    title: "Rough Cut & Storyline Assembly",
                    description: "Our editor cuts the filler, syncs multi-camera tracks, and builds the foundational narrative sequence."
                },
                {
                    step: "03",
                    title: "Motion Graphics, Sound Design & Grading",
                    description: "We add animated text, B-roll, custom SFX, licensed background music, and perform final color grading."
                },
                {
                    step: "04",
                    title: "Timecoded Review & Final Delivery",
                    description: "Leave comments directly on Frame.io timestamps. We implement revisions quickly and deliver full 4K/1080p final exports."
                }
            ]}
            techStack={[
                {
                    category: "NLE Video Editing & Color",
                    tools: ["Adobe Premiere Pro", "DaVinci Resolve Studio", "Final Cut Pro"]
                },
                {
                    category: "Motion Graphics & Visual FX",
                    tools: ["Adobe After Effects", "Blender", "Adobe Photoshop", "Adobe Illustrator"]
                },
                {
                    category: "Collaboration & Sound Design",
                    tools: ["Frame.io", "Epidemic Sound", "Artlist", "Adobe Audition", "LucidLink"]
                }
            ]}
            engagementModels={[
                {
                    name: "Dedicated Offshore Video Editor",
                    bestFor: "Content Creators, YouTubers & High-Volume Brands",
                    description: "A full-time senior video editor and motion designer dedicated entirely to your brand queue with daily Slack communication.",
                    highlights: [
                        "160 dedicated post-production hours per month",
                        "Unlimited video edits and revisions in queue",
                        "Fast 24 to 48-hour delivery on short-form assets",
                        "Custom brand preset and asset kit creation"
                    ]
                },
                {
                    name: "Agency White-Label Video Production Pod",
                    bestFor: "Creative & Marketing Agencies",
                    description: "Scalable video post-production capacity for agencies delivering client reels, TikToks, and commercials under strict white-label NDAs.",
                    highlights: [
                        "Wholesale per-video or monthly pod pricing",
                        "Frame.io white-label client review links",
                        "Multi-editor redundancy for zero vacation delays",
                        "Consistent brand style adherence across editors"
                    ]
                },
                {
                    name: "Short-Form Video Package (15-30 Videos)",
                    bestFor: "Brands Launching Social Organic & Paid Ads",
                    description: "Batch production turning raw long-form videos, podcasts, or product clips into 15 to 30 high-impact Reels, Shorts, and TikToks.",
                    highlights: [
                        "Complete hook extraction and storyline cutting",
                        "Animated captions, sound effects, and motion b-roll",
                        "Ready-to-publish vertical formats (9:16)",
                        "Two iterative revision rounds per video"
                    ]
                }
            ]}
            limitations={[
                {
                    point: "On-Location Filming Not Provided",
                    explanation: "Our offshore service focuses on digital post-production, editing, motion graphics, color grading, and audio mastering. Clients provide raw recorded footage, screen recordings, or product clips."
                },
                {
                    point: "Revision Cycles and Scope",
                    explanation: "Standard packages include two rounds of timecoded Frame.io revisions. Major storyline rewrites or script overhauls after final cut approval may require additional sprint hours."
                },
                {
                    point: "Raw Footage Quality Dependency",
                    explanation: "While we employ cinema-grade noise reduction and audio mastering, extremely poor lighting or severely distorted audio cannot always be fully restored to studio broadcast standards."
                },
                {
                    point: "Cloud File Transfer Bandwidth",
                    explanation: "Uploading high-bitrate 4K RAW or ProRes camera footage requires a stable high-speed internet connection on the client side for initial cloud transfer."
                }
            ]}
            faqs={faqs}
            relatedServices={[
                {
                    title: "Offshore Meta Ads Management",
                    href: "/offshore-meta-ads-management",
                    description: "Deploy your edited video assets directly into high-ROAS Facebook and Instagram ad campaigns."
                },
                {
                    title: "Offshore Social Media Marketing",
                    href: "/offshore-social-media-marketing",
                    description: "Turn edited Reels and TikToks into organic distribution and community engagement across channels."
                },
                {
                    title: "Offshore Google Ads Management",
                    href: "/offshore-google-ads-management",
                    description: "Run YouTube in-stream and Shorts video ads that capture target buyers across Google network."
                },
                {
                    title: "Offshore Web Development",
                    href: "/offshore-web-development-services",
                    description: "Incorporate lightweight, high-speed video embeds into custom Next.js landing pages."
                }
            ]}
            jsonLdSchemas={[serviceSchema, faqSchema, breadcrumbSchema]}
        />
    )
}
