import { Metadata } from "next";
import { locationsData } from "@/lib/location-data";
import { SITE_CONFIG } from "@/lib/seo-config";
import { notFound } from "next/navigation";

interface LayoutProps {
    children: React.ReactNode;
    params: Promise<{ location: string }>;
}

export async function generateMetadata({ params }: { params: Promise<{ location: string }> }): Promise<Metadata> {
    const { location } = await params;
    const data = locationsData.find((l) => l.slug === location);
    if (!data) return {};

    return {
        title: data.title,
        description: data.description,
        keywords: data.keywords,
        alternates: {
            canonical: `${SITE_CONFIG.url}/seo-services-${location}`,
        },
    };
}

export default function DynamicLocationLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
