import { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo-config'

export const metadata: Metadata = generatePageMetadata({
    title: 'ChatGPT, Gemini & DeepSeek AI Marketing Services in Hosur | BooWorks',
    description: 'Discover how BooWorks combines ChatGPT, Google Gemini, and DeepSeek AI with human expertise for superior digital marketing results in Hosur, Krishnagiri. AI-powered SEO, content strategy, and marketing automation services.',
    keywords: [
        'ChatGPT Marketing Hosur',
        'Gemini AI Services',
        'DeepSeek Marketing Tools',
        'AI Digital Marketing Hosur',
        'ChatGPT vs Gemini vs DeepSeek',
        'AI Content Marketing',
        'AI SEO Services Hosur',
        'ChatGPT for Business',
        'Gemini Marketing Automation',
        'AI Marketing Agency Hosur',
        'AI-Powered SEO Krishnagiri',
    ],
    path: '/ai-marketing',
})

export default function AIMarketingLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
