import { Services } from "@/app/Components/Services";
import { generatePageMetadata } from "@/lib/seo-config";
import { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
    title: "SEO Services & Digital Marketing in Hosur, Krishnagiri, Pennagaram, Dharmapuri",
    description: "Professional SEO services, website development, and digital marketing in Hosur, Krishnagiri, Pennagaram & Dharmapuri. Expert local SEO, web design, website developer hiring, affordable Meta Ads & Google Ads at your budget. SEO packages starting at ₹5,000. Boost rankings and drive organic traffic.",
    keywords: [
        "seo services in hosur",
        "best seo company hosur",
        "local seo services hosur",
        "affordable seo hosur",
        "seo expert hosur",
        "professional seo services hosur",
        "search engine optimization hosur",
        "organic seo hosur",
        "website development in hosur",
        "website developer hiring in hosur",
        "hire web developer hosur",
        "web development company hosur",
        "digital marketing services krishnagiri",
        "digital marketing services hosur",
        "seo services pennagaram",
        "seo services dharmapuri",
        "website development services krishnagiri",
        "website development services hosur",
        "social media marketing krishnagiri",
        "social media marketing hosur",
        "PPC advertising hosur",
        "google ads marketing hosur",
        "affordable google ads hosur",
        "meta marketing hosur",
        "meta ads services hosur",
        "affordable meta ads hosur",
        "facebook ads hosur",
        "cost effective advertising hosur",
        "web design krishnagiri",
        "web design hosur",
        "web development krishnagiri",
        "web development hosur",
        "custom website development",
        "online marketing services",
        "seo consultant hosur",
        "top seo agency hosur",
        "budget friendly digital marketing hosur",
    ],
    path: "/services",
});
export default function ServicesPage() {
    return (
        <Services isPage={true} />
    );
}
