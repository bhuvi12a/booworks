import { Metadata } from 'next';

// Business Information
export const SITE_CONFIG = {
    name: 'Booworks',
    title: 'Best Digital Marketing & Website Development Company in Krishnagiri, Hosur | Booworks',
    description: 'Leading digital marketing and website development company in Krishnagiri and Hosur. Expert SEO, social media marketing, web design, web development, and online advertising services. Grow your business with professional digital solutions.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    ogImage: '/og-image.jpg',
    keywords: [
        'best digital marketing in krishnagiri',
        'best digital marketing in hosur',
        'website development company in krishnagiri',
        'website development company in hosur',
        'digital marketing agency krishnagiri',
        'digital marketing agency hosur',
        'SEO services krishnagiri',
        'SEO services hosur',
        'social media marketing krishnagiri',
        'social media marketing hosur',
        'web design krishnagiri',
        'web design hosur',
        'web development krishnagiri',
        'web development hosur',
        'website design company hosur',
        'online marketing krishnagiri',
        'online marketing hosur',
        'digital marketing company tamil nadu',
        'website development services',
        'booworks digital marketing',
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
        email: 'info@booworks.com',
        phone: '+91-XXXXXXXXXX', // Update with actual phone
    },
    social: {
        twitter: '@booworks', // Update with actual handle
        facebook: 'https://facebook.com/booworks', // Update with actual URL
        instagram: 'https://instagram.com/booworks', // Update with actual URL
        linkedin: 'https://linkedin.com/company/booworks', // Update with actual URL
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

// Organization Schema (JSON-LD)
export const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo.png`,
    image: `${SITE_CONFIG.url}${SITE_CONFIG.ogImage}`,
    telephone: SITE_CONFIG.contact.phone,
    email: SITE_CONFIG.contact.email,
    address: {
        '@type': 'PostalAddress',
        addressLocality: SITE_CONFIG.location.city,
        addressRegion: SITE_CONFIG.location.state,
        addressCountry: SITE_CONFIG.location.country,
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: '12.5266', // Krishnagiri coordinates
        longitude: '78.2140',
    },
    areaServed: [
        {
            '@type': 'City',
            name: 'Krishnagiri',
        },
        {
            '@type': 'City',
            name: 'Hosur',
        },
    ],
    sameAs: [
        SITE_CONFIG.social.facebook,
        SITE_CONFIG.social.twitter,
        SITE_CONFIG.social.instagram,
        SITE_CONFIG.social.linkedin,
    ],
    priceRange: '$$',
};

// Local Business Schema
export const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': SITE_CONFIG.url,
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.contact.phone,
    email: SITE_CONFIG.contact.email,
    address: {
        '@type': 'PostalAddress',
        addressLocality: SITE_CONFIG.location.city,
        addressRegion: SITE_CONFIG.location.state,
        addressCountry: SITE_CONFIG.location.country,
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: '12.5266',
        longitude: '78.2140',
    },
    openingHoursSpecification: [
        {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '18:00',
        },
    ],
    sameAs: [
        SITE_CONFIG.social.facebook,
        SITE_CONFIG.social.twitter,
        SITE_CONFIG.social.instagram,
        SITE_CONFIG.social.linkedin,
    ],
};

// Website Schema
export const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    publisher: {
        '@type': 'Organization',
        name: SITE_CONFIG.name,
    },
    potentialAction: {
        '@type': 'SearchAction',
        target: `${SITE_CONFIG.url}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
    },
};
