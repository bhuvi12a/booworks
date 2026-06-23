import { locationsData } from "@/lib/location-data"
import { notFound } from "next/navigation"
import LocationClientPage from "./LocationClientPage"

export async function generateStaticParams() {
    return locationsData.map((loc) => ({
        location: loc.slug,
    }));
}

interface PageProps {
    params: Promise<{ location: string }>;
}

export default async function Page({ params }: PageProps) {
    const { location } = await params;
    const data = locationsData.find((l) => l.slug === location);

    if (!data) {
        notFound();
    }

    return <LocationClientPage data={data} />;
}
