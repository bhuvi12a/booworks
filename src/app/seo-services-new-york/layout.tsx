import { generatePageMetadata } from "@/lib/seo-config";
import { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
    title: "Best SEO & Digital Marketing Service in New York - BooWorks",
    description: "Looking for the best SEO service or best digital marketing service in New York? ⭐ BooWorks is the #1 digital marketing company. Expert Google Ads, Meta Ads & SEO services. Book a free strategy call!",
    keywords: [
        "best seo service in new york",
        "best digital marketing service in new york",
        "google ads service in new york",
        "meta ads service in new york",
        "SEO services in new york",
        "Digital Marketing in New York",
        "seo services nyc",
        "best seo company nyc",
        "local seo new york",
        "pay per click advertising nyc",
        "seo consultant new york",
        "social media marketing new york",
        "web design new york",
        "website development new york",
        "hire website developer new york"
    ],
    path: "/seo-services-new-york",
});

export default function NewYorkLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
