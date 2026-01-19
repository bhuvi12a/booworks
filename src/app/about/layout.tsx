import { generatePageMetadata } from "@/lib/seo-config";
import { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
    title: "About Us - Leading Digital Marketing Agency in Hosur, Krishnagiri, Pennagaram, Dharmapuri",
    description: "Booworks is a new generation digital marketing agency serving Hosur, Krishnagiri, Pennagaram, and Dharmapuri. We blend data precision with creative brilliance to help brands dominate their markets through SEO, social media, and performance marketing.",
    keywords: [
        "digital marketing agency hosur",
        "digital marketing agency krishnagiri",
        "digital marketing agency pennagaram",
        "digital marketing agency dharmapuri",
        "about booworks",
        "web development company hosur",
        "seo services hosur",
        "social media marketing hosur",
        "marketing agency tamil nadu",
    ],
    path: "/about",
});

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
