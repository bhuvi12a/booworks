import { MetadataRoute } from 'next';
import { locationsData } from '@/lib/location-data';
import { SITE_CONFIG } from '@/lib/seo-config';
import { blogPosts } from '@/lib/blog-data';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = SITE_CONFIG.url;
    const currentDate = new Date();

    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: currentDate,
            changeFrequency: 'weekly' as const,
            priority: 1.0,
        },
        {
            url: `${baseUrl}/services`,
            lastModified: currentDate,
            changeFrequency: 'weekly' as const,
            priority: 0.95,
        },
        // Offshore Services Hub
        {
            url: `${baseUrl}/offshore-services`,
            lastModified: currentDate,
            changeFrequency: 'weekly' as const,
            priority: 0.95,
        },
        // Core Offshore Practice Landing Pages
        {
            url: `${baseUrl}/offshore-digital-marketing-services`,
            lastModified: currentDate,
            changeFrequency: 'weekly' as const,
            priority: 0.95,
        },
        {
            url: `${baseUrl}/offshore-seo-services`,
            lastModified: currentDate,
            changeFrequency: 'weekly' as const,
            priority: 0.95,
        },
        {
            url: `${baseUrl}/offshore-web-development-services`,
            lastModified: currentDate,
            changeFrequency: 'weekly' as const,
            priority: 0.95,
        },
        {
            url: `${baseUrl}/offshore-software-development`,
            lastModified: currentDate,
            changeFrequency: 'weekly' as const,
            priority: 0.95,
        },
        {
            url: `${baseUrl}/offshore-ecommerce-development`,
            lastModified: currentDate,
            changeFrequency: 'weekly' as const,
            priority: 0.95,
        },
        {
            url: `${baseUrl}/offshore-google-ads-management`,
            lastModified: currentDate,
            changeFrequency: 'weekly' as const,
            priority: 0.95,
        },
        {
            url: `${baseUrl}/offshore-meta-ads-management`,
            lastModified: currentDate,
            changeFrequency: 'weekly' as const,
            priority: 0.95,
        },
        {
            url: `${baseUrl}/offshore-video-editing-services`,
            lastModified: currentDate,
            changeFrequency: 'weekly' as const,
            priority: 0.95,
        },
        {
            url: `${baseUrl}/offshore-ppc-services`,
            lastModified: currentDate,
            changeFrequency: 'weekly' as const,
            priority: 0.95,
        },
        {
            url: `${baseUrl}/offshore-social-media-marketing`,
            lastModified: currentDate,
            changeFrequency: 'weekly' as const,
            priority: 0.95,
        },
        {
            url: `${baseUrl}/offshore-website-maintenance-services`,
            lastModified: currentDate,
            changeFrequency: 'weekly' as const,
            priority: 0.95,
        },
        // Knowledge Hub Directory
        {
            url: `${baseUrl}/blog`,
            lastModified: currentDate,
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
        // Supporting Pages
        {
            url: `${baseUrl}/ai-marketing`,
            lastModified: currentDate,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: currentDate,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/careers`,
            lastModified: currentDate,
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: currentDate,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
    ];

    const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.modifiedDate),
        changeFrequency: 'monthly' as const,
        priority: 0.85,
    }));

    const dynamicLocationRoutes: MetadataRoute.Sitemap = locationsData.map((loc) => ({
        url: `${baseUrl}/seo-services-${loc.slug}`,
        lastModified: currentDate,
        changeFrequency: 'weekly' as const,
        priority: 0.85,
    }));

    return [...staticRoutes, ...blogRoutes, ...dynamicLocationRoutes];
}
