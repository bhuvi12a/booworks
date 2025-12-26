import { Services } from "@/app/Components/Services";
import { generatePageMetadata } from "@/lib/seo-config";
import { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
    title: "Digital Marketing & Website Development Services in Krishnagiri, Hosur",
    description: "Expert digital marketing and website development services in Krishnagiri and Hosur. Offering SEO, social media marketing, PPC advertising, content marketing, web design, and custom web development. Boost your online presence with proven strategies.",
    keywords: [
        "digital marketing services krishnagiri",
        "digital marketing services hosur",
        "website development services krishnagiri",
        "website development services hosur",
        "SEO services krishnagiri",
        "SEO services hosur",
        "social media marketing krishnagiri",
        "social media marketing hosur",
        "PPC advertising krishnagiri",
        "web design krishnagiri",
        "web design hosur",
        "web development krishnagiri",
        "web development hosur",
        "custom website development",
        "online marketing services",
    ],
    path: "/services",
});
export default function ServicesPage() {
    return (
        <Services isPage={true} />
    );
}
