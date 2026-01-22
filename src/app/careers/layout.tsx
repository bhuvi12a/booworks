import { Metadata } from 'next'
import { generatePageMetadata, SITE_CONFIG } from '@/lib/seo-config'
import Script from 'next/script'

export const metadata: Metadata = generatePageMetadata({
    title: 'Careers - Join BooWorks | Sales & Graphic Designer Jobs in Hosur',
    description: 'Join BooWorks team in Hosur! We are hiring Sales Executives and Graphic Designers. Explore career opportunities in digital marketing, SEO, and web development. Apply now for jobs in Hosur, Krishnagiri.',
    keywords: [
        'Jobs in Hosur',
        'Careers in Hosur',
        'Sales Jobs Hosur',
        'Graphic Designer Jobs Hosur',
        'Digital Marketing Jobs Krishnagiri',
        'BooWorks Careers',
        'Sales Executive Jobs Tamil Nadu',
        'Graphic Design Jobs Hosur',
        'Marketing Jobs Hosur',
        'Job Openings Hosur',
    ],
    path: '/careers',
})

const jobPostings = [
    {
        "@context": "https://schema.org",
        "@type": "JobPosting",
        "title": "Sales Executive - Digital Marketing",
        "description": "Drive revenue growth by selling our digital marketing services to businesses across Hosur, Krishnagiri, and surrounding areas. Generate leads and close sales for SEO, web development, and digital marketing services.",
        "datePosted": "2026-01-22",
        "validThrough": "2026-03-31",
        "employmentType": "FULL_TIME",
        "hiringOrganization": {
            "@type": "Organization",
            "name": "BooWorks",
            "sameAs": SITE_CONFIG.url,
            "logo": `${SITE_CONFIG.url}/logo.png`
        },
        "jobLocation": {
            "@type": "Place",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "4/72 Gandhi nagar",
                "addressLocality": "Hosur",
                "addressRegion": "Tamil Nadu",
                "postalCode": "635126",
                "addressCountry": "IN"
            }
        },
        "baseSalary": {
            "@type": "MonetaryAmount",
            "currency": "INR",
            "value": {
                "@type": "QuantitativeValue",
                "minValue": 20000,
                "maxValue": 40000,
                "unitText": "MONTH"
            }
        }
    },
    {
        "@context": "https://schema.org",
        "@type": "JobPosting",
        "title": "Graphic Designer",
        "description": "Create stunning visual content for our clients' digital marketing campaigns, websites, and social media platforms. Design graphics, brand identities, and marketing materials.",
        "datePosted": "2026-01-22",
        "validThrough": "2026-03-31",
        "employmentType": "FULL_TIME",
        "hiringOrganization": {
            "@type": "Organization",
            "name": "BooWorks",
            "sameAs": SITE_CONFIG.url,
            "logo": `${SITE_CONFIG.url}/logo.png`
        },
        "jobLocation": {
            "@type": "Place",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "4/72 Gandhi nagar",
                "addressLocality": "Hosur",
                "addressRegion": "Tamil Nadu",
                "postalCode": "635126",
                "addressCountry": "IN"
            }
        },
        "baseSalary": {
            "@type": "MonetaryAmount",
            "currency": "INR",
            "value": {
                "@type": "QuantitativeValue",
                "minValue": 15000,
                "maxValue": 30000,
                "unitText": "MONTH"
            }
        }
    }
]

export default function CareersLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            {jobPostings.map((job, index) => (
                <Script
                    key={index}
                    id={`job-posting-${index}`}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(job),
                    }}
                />
            ))}
            {children}
        </>
    )
}
