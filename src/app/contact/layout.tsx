import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo-config";

export const metadata: Metadata = generatePageMetadata({
    title: "Contact Us - Digital Marketing Agency in Hosur, Krishnagiri, Pennagaram, Dharmapuri",
    description: "Get in touch with Booworks for digital marketing, SEO, website development, and social media services in Hosur, Krishnagiri, Pennagaram, and Dharmapuri. Call us at 7397532847 or email bootech012@gmail.com. Visit us at Gandhi Nagar, Hosur.",
    keywords: [
        "contact digital marketing agency hosur",
        "contact web development company krishnagiri",
        "seo services pennagaram contact",
        "digital marketing dharmapuri contact",
        "booworks contact",
        "web design enquiry hosur",
        "marketing consultation hosur",
        "meta marketing hosur",
        "google ads marketing hosur",
    ],
    path: "/contact",
});

export default function ContactLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
