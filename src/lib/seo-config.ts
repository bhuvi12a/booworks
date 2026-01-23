import { Metadata } from 'next';

// Business Information
export const SITE_CONFIG = {
    name: 'Booworks',
    title: 'Best SEO & Digital Marketing Company in Hosur | Best Website Development Hosur - Booworks',
    description: 'Best Digital Marketing in Hosur ⭐ Leading SEO services & #1 Website Development in Hosur, Krishnagiri. Expert web design, affordable Meta Ads & Google Ads services. AI-powered marketing with ChatGPT & Gemini. Trusted by 200+ clients with 450% ROI. Book a free strategy call!',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.booworks.co',
    ogImage: '/og-image.jpg',
    keywords: [
        // PRIMARY TARGET KEYWORDS (High Priority for Ranking)
        'Best Digital Marketing in Hosur',
        'Best Website Development in Hosur',
        'Best Digital Marketing Company Hosur',
        'Best Web Development Company Hosur',
        'Top Digital Marketing Agency Hosur',
        'No 1 Website Development Hosur',

        // SECONDARY KEYWORDS
        'Digital Marketing Services Hosur',
        'Website Development Services Hosur',
        'SEO Company Hosur',
        'Web Design Company Hosur',
        'Professional Website Development Hosur',
        'Digital Marketing Expert Hosur',
        'Affordable Website Development Hosur',
        'Best SEO Services Hosur',

        // LOCATION-SPECIFIC KEYWORDS
        'Digital Marketing Krishnagiri',
        'Website Development Krishnagiri',
        'SEO Services Krishnagiri',
        'Web Development Pennagaram',
        'Digital Marketing Dharmapuri',
        'Local SEO Services Hosur',

        // SERVICE-SPECIFIC KEYWORDS
        'Affordable Meta Ads Hosur',
        'Google Ads Services Hosur',
        'Social Media Marketing Hosur',
        'E-commerce Website Development Hosur',
        'Custom Web Design Hosur',
        'Responsive Website Development Hosur',
        'Mobile App Development Hosur',

        // AI & ADVANCED MARKETING
        'AI-Powered Digital Marketing Hosur',
        'ChatGPT for Business Marketing',
        'Gemini AI Marketing Tools',
        'AI Content Marketing Hosur',
        'AI SEO Services',
        'Marketing Automation Hosur',

        // COMPETITIVE KEYWORDS
        'Best SEO Company Tamil Nadu',
        'Top Digital Marketing Agency Tamil Nadu',
        'Website Developer Hosur',
        'SEO Expert Hosur',
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
        email: 'bootech07@gmail.com',
        phone: '+91-7397532847',
    },
    founder: {
        name: 'Bhuvanesh A',
        title: 'CEO & Co-Founder',
    },
    social: {
        twitter: '@booworks', // Update with actual handle
        facebook: 'https://facebook.com/booworks', // Update with actual URL
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
    const fullTitle = title.includes('Booworks') ? title : `${title} | ${SITE_CONFIG.name}`;

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
            locale: 'en_IN',
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

// Organization Schema (JSON-LD) - Removed to avoid duplication with LocalBusiness
// Using LocalBusiness which is more specific than ProfessionalService

// Enhanced Local Business Schema with Precise Geo Data and Service Areas
export const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.booworks.co/#localbusiness',
    name: 'Booworks',
    alternateName: 'Best Digital Marketing & Website Development Company in Hosur',
    description: 'Best Digital Marketing in Hosur & Best Website Development in Hosur. #1 rated digital marketing company and web development agency serving Hosur, Krishnagiri. Expert SEO services, professional web design, affordable Meta Ads & Google Ads. Trusted by 200+ clients.',
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo.png`,
    image: `${SITE_CONFIG.url}${SITE_CONFIG.ogImage}`,
    telephone: '+917397532847',
    email: 'bootech07@gmail.com',
    priceRange: '$$',
    founder: {
        '@type': 'Person',
        name: 'Bhuvanesh A',
        jobTitle: 'CEO & Co-Founder',
    },
    address: {
        '@type': 'PostalAddress',
        streetAddress: 'Krishnagiri',
        addressLocality: 'Krishnagiri',
        addressRegion: 'Tamil Nadu',
        postalCode: '635001',
        addressCountry: 'IN',
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: 12.5266,
        longitude: 78.2140,
    },
    areaServed: [
        {
            '@type': 'City',
            name: 'Hosur',
            '@id': 'https://en.wikipedia.org/wiki/Hosur',
        },
        {
            '@type': 'City',
            name: 'Krishnagiri',
            '@id': 'https://en.wikipedia.org/wiki/Krishnagiri',
        },
        {
            '@type': 'City',
            name: 'Dharmapuri',
            '@id': 'https://en.wikipedia.org/wiki/Dharmapuri',
        },
        {
            '@type': 'City',
            name: 'Pennagaram',
        },
    ],
    openingHoursSpecification: [
        {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '18:00',
        },
    ],
    sameAs: [
        'https://www.instagram.com/booworks.co?igsh=MWI5Ym8yZTFnMWtkdw==',
        'https://facebook.com/booworks',
        'https://www.linkedin.com/company/booworks-co',
    ],
    hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Best Digital Marketing & Website Development Services in Hosur',
        itemListElement: [
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Best Digital Marketing Services in Hosur',
                    description: 'Top-rated digital marketing services in Hosur including SEO, Meta Ads, Google Ads, and social media marketing. Trusted by 200+ clients with proven 450% ROI.',
                },
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Best Website Development Services in Hosur',
                    description: 'Professional website development and web design services in Hosur. Custom, responsive, and SEO-optimized websites for businesses in Hosur, Krishnagiri, and Tamil Nadu.',
                },
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'SEO Services Hosur',
                    description: 'Expert local SEO and organic search optimization services in Hosur to rank #1 on Google. Increase website traffic and generate quality leads.',
                },
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Web Design & Development',
                    description: 'Affordable web design, e-commerce development, and custom website solutions in Hosur. Mobile-responsive and conversion-optimized designs.',
                },
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Meta Ads & Google Ads Management',
                    description: 'Cost-effective Meta (Facebook/Instagram) Ads and Google Ads campaign management in Hosur. Maximize ROI with data-driven PPC strategies.',
                },
            },
        ],
    },
};

// Enhanced Website Schema with SearchAction for Sitelinks
export const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://www.booworks.co/#website',
    name: 'Booworks',
    alternateName: 'BooWorks Digital Marketing',
    url: SITE_CONFIG.url,
    description: 'Leading SEO and digital marketing company in Hosur, Krishnagiri',
    inLanguage: 'en-IN',
    publisher: {
        '@type': 'Organization',
        '@id': 'https://www.booworks.co/#organization',
        name: 'Booworks',
        logo: {
            '@type': 'ImageObject',
            url: `${SITE_CONFIG.url}/logo.png`,
        },
    },
    potentialAction: {
        '@type': 'SearchAction',
        target: {
            '@type': 'EntryPoint',
            urlTemplate: `${SITE_CONFIG.url}/search?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
    },
};

// Site Navigation Element Schema for Google Sitelinks
export const siteNavigationSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': 'https://www.booworks.co/#sitenavigation',
    name: 'Site Navigation',
    itemListElement: [
        {
            '@type': 'SiteNavigationElement',
            position: 1,
            name: 'Home',
            description: 'BooWorks Digital Marketing Homepage',
            url: `${SITE_CONFIG.url}/`,
        },
        {
            '@type': 'SiteNavigationElement',
            position: 2,
            name: 'Services',
            description: 'Our Digital Marketing Services',
            url: `${SITE_CONFIG.url}/services`,
        },
        {
            '@type': 'SiteNavigationElement',
            position: 3,
            name: 'SEO Services',
            description: 'Professional SEO Services in Hosur and Krishnagiri',
            url: `${SITE_CONFIG.url}/services#seo`,
        },
        {
            '@type': 'SiteNavigationElement',
            position: 4,
            name: 'Web Development',
            description: 'Website Development and Design Services',
            url: `${SITE_CONFIG.url}/services#web-development`,
        },
        {
            '@type': 'SiteNavigationElement',
            position: 5,
            name: 'AI Marketing',
            description: 'ChatGPT, Gemini & DeepSeek AI Marketing Services',
            url: `${SITE_CONFIG.url}/ai-marketing`,
        },
        {
            '@type': 'SiteNavigationElement',
            position: 6,
            name: 'Careers',
            description: 'Join BooWorks - Sales & Graphic Designer Jobs in Hosur',
            url: `${SITE_CONFIG.url}/careers`,
        },
        {
            '@type': 'SiteNavigationElement',
            position: 7,
            name: 'Contact',
            description: 'Get in Touch with BooWorks',
            url: `${SITE_CONFIG.url}/contact`,
        },
    ],
};

// Breadcrumb Schema Generator for Individual Pages
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };
}
