import { Metadata } from 'next';

// Business Information
export const SITE_CONFIG = {
    name: 'BooWorks',
    title: 'BooWorks | Offshore Digital Marketing, SEO & Web Development Agency',
    description: 'BooWorks is a premier offshore digital marketing, SEO, and web development agency. We deliver dedicated remote teams, white-label SEO, and high-performance web engineering with reliable communication and transparent reporting.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://booworks.co',
    ogImage: '/og-image.jpg',
    keywords: [
        // OFFSHORE & INTERNATIONAL TARGET KEYWORDS
        'offshore digital marketing services',
        'offshore digital marketing company',
        'offshore digital marketing agency',
        'offshore digital marketing outsourcing',
        'offshore seo services',
        'offshore seo company',
        'offshore seo agency',
        'offshore seo outsourcing',
        'offshore technical seo services',
        'white label offshore seo services',
        'offshore website development',
        'offshore website development company',
        'offshore web development services',
        'offshore custom website development',
        'offshore software development',
        'offshore software development company',
        'offshore full stack developers',
        'offshore mobile app development',
        'offshore ecommerce development company',
        'offshore shopify development',
        'offshore wordpress development',
        'offshore ppc services',
        'offshore google ads management',
        'offshore social media marketing',
        'offshore website maintenance services',
        'offshore seo company in india',
        'offshore digital marketing company in india',
        'offshore web development company in india',

        // REGIONAL & DOMESTIC KEYWORDS
        'best seo company in hosur',
        'digital marketing in hosur',
        'digital marketing company in hosur',
        'website development in hosur',
        'seo services krishnagiri',
        'digital marketing services bangalore',
        'digital marketing services chennai',
    ],
    locations: [
        {
            city: 'Krishnagiri',
            state: 'Tamil Nadu',
            country: 'India',
            coordinates: { lat: '12.5266', lng: '78.2140' },
        },
        {
            city: 'Hosur',
            state: 'Tamil Nadu',
            country: 'India',
            coordinates: { lat: '12.7409', lng: '77.8253' },
        },
    ],
    location: {
        city: 'Krishnagiri',
        state: 'Tamil Nadu',
        country: 'India',
    },
    contact: {
        email: 'bootech012@gmail.com',
        phone: '+91-7397532847',
    },
    founder: {
        name: 'Bhuvanesh A',
        title: 'CEO & Co-Founder',
    },
    social: {
        twitter: '@booworks',
        facebook: 'https://facebook.com/booworks',
        instagram: 'https://www.instagram.com/booworks.co?igsh=MWI5Ym8yZTFnMWtkdw==',
        linkedin: 'https://www.linkedin.com/company/booworks-co',
    },
};

// Generate metadata for pages
export function generatePageMetadata({
    title,
    description,
    keywords,
    path = '',
    ogImage,
}: {
    title: string;
    description: string;
    keywords?: string[];
    path?: string;
    ogImage?: string;
}): Metadata {
    const url = `${SITE_CONFIG.url}${path}`;
    const image = ogImage || SITE_CONFIG.ogImage;
    const fullTitle = title.includes('BooWorks') || title.includes('Booworks') ? title : `${title} | ${SITE_CONFIG.name}`;

    return {
        title: fullTitle,
        description,
        keywords: keywords || SITE_CONFIG.keywords,
        authors: [{ name: SITE_CONFIG.name }],
        creator: SITE_CONFIG.name,
        publisher: SITE_CONFIG.name,
        metadataBase: new URL(SITE_CONFIG.url),
        alternates: {
            canonical: url,
        },
        openGraph: {
            type: 'website',
            locale: 'en_US',
            url,
            title: fullTitle,
            description,
            siteName: SITE_CONFIG.name,
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: fullTitle,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: fullTitle,
            description,
            images: [image],
            creator: SITE_CONFIG.social.twitter,
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
    };
}

// Enhanced Local Business Schema with Precise Geo Data and Service Areas
export const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_CONFIG.url}/#localbusiness`,
    name: 'BooWorks',
    alternateName: 'BooWorks Offshore Digital & Web Development Agency',
    description: 'International offshore digital marketing, SEO, and custom web development agency delivering remote teams and dedicated digital engineering from India.',
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo.png`,
    image: `${SITE_CONFIG.url}${SITE_CONFIG.ogImage}`,
    telephone: '+917397532847',
    email: 'bootech012@gmail.com',
    priceRange: '$$',
    founder: {
        '@type': 'Person',
        name: 'Bhuvanesh A',
        jobTitle: 'CEO & Co-Founder',
    },
    address: {
        '@type': 'PostalAddress',
        streetAddress: '4/72 Gandhi nagar, Zuzuvadi',
        addressLocality: 'Hosur',
        addressRegion: 'Tamil Nadu',
        postalCode: '635126',
        addressCountry: 'IN',
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: 12.7409,
        longitude: 77.8253,
    },
    areaServed: [
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Country', name: 'United Kingdom' },
        { '@type': 'Country', name: 'Canada' },
        { '@type': 'Country', name: 'Australia' },
        { '@type': 'Country', name: 'United Arab Emirates' },
        { '@type': 'Country', name: 'India' },
        { '@type': 'City', name: 'Hosur' },
        { '@type': 'City', name: 'Bangalore' },
        { '@type': 'City', name: 'Chennai' },
        { '@type': 'City', name: 'Coimbatore' },
        { '@type': 'City', name: 'Dubai' },
    ],
    openingHoursSpecification: [
        {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '19:00',
        },
    ],
    sameAs: [
        'https://www.instagram.com/booworks.co?igsh=MWI5Ym8yZTFnMWtkdw==',
        'https://facebook.com/booworks',
        'https://www.linkedin.com/company/booworks-co',
    ],
};

// Compliant Website Schema (Without invalid search action)
export const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_CONFIG.url}/#website`,
    name: 'BooWorks',
    alternateName: 'BooWorks Offshore Digital Agency',
    url: SITE_CONFIG.url,
    description: 'International offshore digital marketing, SEO, and web development agency.',
    inLanguage: 'en',
    publisher: {
        '@type': 'Organization',
        '@id': `${SITE_CONFIG.url}/#organization`,
        name: 'BooWorks',
        url: SITE_CONFIG.url,
        logo: {
            '@type': 'ImageObject',
            url: `${SITE_CONFIG.url}/logo.png`,
        },
    },
};

// Site Navigation Element Schema for Google Sitelinks
export const siteNavigationSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${SITE_CONFIG.url}/#sitenavigation`,
    name: 'Site Navigation',
    itemListElement: [
        {
            '@type': 'SiteNavigationElement',
            position: 1,
            name: 'Home',
            description: 'BooWorks Homepage',
            url: `${SITE_CONFIG.url}/`,
        },
        {
            '@type': 'SiteNavigationElement',
            position: 2,
            name: 'Services',
            description: 'Offshore Digital Marketing & Web Services Hub',
            url: `${SITE_CONFIG.url}/services`,
        },
        {
            '@type': 'SiteNavigationElement',
            position: 3,
            name: 'Offshore SEO Services',
            description: 'Offshore SEO, Technical SEO & Link Building Services',
            url: `${SITE_CONFIG.url}/offshore-seo-services`,
        },
        {
            '@type': 'SiteNavigationElement',
            position: 4,
            name: 'Offshore Web Development',
            description: 'Modern Next.js, React & Custom Web Engineering',
            url: `${SITE_CONFIG.url}/offshore-web-development-services`,
        },
        {
            '@type': 'SiteNavigationElement',
            position: 5,
            name: 'Offshore Digital Marketing',
            description: 'Full-Funnel Offshore Digital Marketing Outsourcing',
            url: `${SITE_CONFIG.url}/offshore-digital-marketing-services`,
        },
        {
            '@type': 'SiteNavigationElement',
            position: 6,
            name: 'About',
            description: 'About BooWorks - Team, Vision & Delivery Center',
            url: `${SITE_CONFIG.url}/about`,
        },
        {
            '@type': 'SiteNavigationElement',
            position: 7,
            name: 'Contact',
            description: 'Book a Strategy Call or Request a Project Quote',
            url: `${SITE_CONFIG.url}/contact`,
        },
    ],
};

// Breadcrumb Schema Generator
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url.startsWith('http') ? item.url : `${SITE_CONFIG.url}${item.url}`,
        })),
    };
}

// Service Schema Generator
export function generateServiceSchema({
    name,
    description,
    path,
    serviceType,
}: {
    name: string;
    description: string;
    path: string;
    serviceType: string;
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': `${SITE_CONFIG.url}${path}#service`,
        name,
        serviceType,
        description,
        provider: {
            '@type': 'Organization',
            '@id': `${SITE_CONFIG.url}/#organization`,
            name: SITE_CONFIG.name,
            url: SITE_CONFIG.url,
            telephone: SITE_CONFIG.contact.phone,
            email: SITE_CONFIG.contact.email,
        },
        areaServed: [
            { '@type': 'Country', name: 'United States' },
            { '@type': 'Country', name: 'United Kingdom' },
            { '@type': 'Country', name: 'Canada' },
            { '@type': 'Country', name: 'Australia' },
            { '@type': 'Country', name: 'United Arab Emirates' },
            { '@type': 'Country', name: 'India' },
        ],
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: `${name} Offerings`,
        },
    };
}

// FAQPage Schema Generator
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };
}
