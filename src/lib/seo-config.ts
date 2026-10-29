import { Metadata } from 'next';

// Business Information
export const SITE_CONFIG = {
    name: 'BooWorks',
    title: 'Best SEO & Digital Marketing Company in Hosur | Best Website Development Hosur - Booworks',
    description: 'Best Digital Marketing in Hosur ⭐ Leading SEO services & #1 Website Development in Hosur, Krishnagiri. Expert web design, affordable Meta Ads & Google Ads services. AI-powered marketing with ChatGPT & Gemini. Trusted by 200+ clients with 450% ROI. Book a free strategy call!',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://booworks.co',
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

        // OFFSHORE & INTERNATIONAL TARGET KEYWORDS (Added)
        'offshore digital marketing',
        'offshore digital marketing services',
        'offshore digital marketing company',
        'offshore digital marketing agency',
        'offshore digital marketing solutions',
        'offshore marketing services',
        'offshore marketing agency',
        'offshore digital marketing outsourcing',
        'offshore seo',
        'offshore seo services',
        'offshore seo company',
        'offshore seo agency',
        'offshore seo outsourcing',
        'offshore seo experts',
        'offshore technical seo services',
        'offshore on page seo services',
        'offshore off page seo services',
        'offshore local seo services',
        'offshore ecommerce seo services',
        'offshore international seo services',
        'offshore link building services',
        'offshore seo audit services',
        'affordable offshore seo services',
        'white label offshore seo services',
        'offshore website development',
        'offshore website development company',
        'offshore website development services',
        'offshore web development',
        'offshore web development company',
        'offshore web development services',
        'offshore web design company',
        'offshore website developers',
        'offshore web development outsourcing',
        'offshore custom website development',
        'offshore software development',
        'offshore software development company',
        'offshore software development services',
        'offshore software developers',
        'offshore full stack developers',
        'offshore application development',
        'offshore mobile app development',
        'offshore SaaS development company',
        'offshore custom software development',
        'offshore wordpress development',
        'offshore wordpress development company',
        'offshore wordpress developers',
        'offshore woocommerce development',
        'offshore shopify development',
        'offshore shopify developers',
        'offshore ecommerce development company',
        'offshore ecommerce website development',
        'offshore ppc services',
        'offshore ppc agency',
        'offshore google ads management',
        'offshore google ads agency',
        'offshore meta ads management',
        'offshore facebook ads management',
        'offshore paid advertising services',
        'offshore performance marketing agency',
        'offshore lead generation services',
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
        'offshore website maintenance',
        'offshore website maintenance services',
        'offshore website management',
        'offshore website redesign services',
        'offshore website speed optimization',
        'offshore website migration services',
        'offshore website support services',
        'offshore seo company in india',
        'offshore digital marketing company in india',
        'offshore web development company in india',
        'offshore seo services usa',
        'offshore web development company usa',
        'offshore seo services uk',
        'offshore digital marketing agency australia',
        'offshore digital marketing agency dubai',
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
    alternateName: 'BooWorks Digital Marketing & Web Development Agency',
    description: 'Premier digital marketing, SEO, web development, and offshore delivery agency based in Hosur, Krishnagiri, serving domestic and international clients.',
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo.png`,
    image: `${SITE_CONFIG.url}${SITE_CONFIG.ogImage}`,
    telephone: '+917397532847',
    email: 'bootech012@gmail.com',
    priceRange: '₹₹ / $$',
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
        { '@type': 'City', name: 'Hosur' },
        { '@type': 'City', name: 'Krishnagiri' },
        { '@type': 'City', name: 'Bangalore' },
        { '@type': 'City', name: 'Chennai' },
        { '@type': 'City', name: 'Coimbatore' },
        { '@type': 'City', name: 'Salem' },
        { '@type': 'Country', name: 'India' },
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Country', name: 'United Kingdom' },
        { '@type': 'Country', name: 'United Arab Emirates' },
        { '@type': 'Country', name: 'Canada' },
        { '@type': 'Country', name: 'Australia' },
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
    hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Digital Marketing, Web Development & Offshore Services',
        itemListElement: [
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Digital Marketing Services in Hosur',
                    description: 'Comprehensive digital marketing solutions including SEO, social media marketing, content marketing, and performance advertising.',
                },
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Website Development Services in Hosur',
                    description: 'Custom, responsive Next.js and full-stack website development and UI/UX design for businesses in Hosur, Krishnagiri, and globally.',
                },
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'SEO Services & Google Maps Ranking',
                    description: 'Expert local SEO, technical SEO, and organic search optimization to rank on page 1 of Google.',
                },
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Offshore Digital Services & Remote Engineering',
                    description: 'Dedicated offshore SEO, web development, and performance marketing teams delivering high-ROI digital solutions worldwide.',
                },
            },
        ],
    },
};

// Compliant Website Schema
export const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_CONFIG.url}/#website`,
    name: 'BooWorks',
    alternateName: 'BooWorks Digital Marketing & Offshore Agency',
    url: SITE_CONFIG.url,
    description: 'Leading SEO, digital marketing, website development, and offshore digital services agency.',
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
            description: 'Core Digital Marketing & Web Development Services',
            url: `${SITE_CONFIG.url}/services`,
        },
        {
            '@type': 'SiteNavigationElement',
            position: 3,
            name: 'Offshore Services',
            description: 'Dedicated Offshore Digital Marketing, SEO & Tech Hub',
            url: `${SITE_CONFIG.url}/offshore-services`,
        },
        {
            '@type': 'SiteNavigationElement',
            position: 4,
            name: 'Offshore SEO Services',
            description: 'Offshore SEO, Technical SEO & Link Building Services',
            url: `${SITE_CONFIG.url}/offshore-seo-services`,
        },
        {
            '@type': 'SiteNavigationElement',
            position: 5,
            name: 'Offshore Web Development',
            description: 'Modern Next.js, React & Custom Web Engineering',
            url: `${SITE_CONFIG.url}/offshore-web-development-services`,
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
