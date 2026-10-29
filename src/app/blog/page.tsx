import { Metadata } from "next"
import Link from "next/link"
import { generatePageMetadata, generateBreadcrumbSchema, SITE_CONFIG } from "@/lib/seo-config"
import { blogPosts } from "@/lib/blog-data"
import { BookOpen, Clock, Calendar, ArrowRight, Sparkles, User } from "lucide-react"

export const metadata: Metadata = generatePageMetadata({
    title: "Offshore SEO & Web Development Guides | BooWorks Knowledge Hub",
    description: "In-depth technical guides, cost comparisons, and strategic frameworks on offshore SEO, web development, and digital marketing outsourcing from India.",
    path: "/blog",
    keywords: [
        "offshore seo guide",
        "offshore web development blog",
        "offshore digital marketing insights",
        "how offshore seo works",
        "offshore development team evaluation",
        "digital agency outsourcing guide",
    ],
})

const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Knowledge Hub", url: "/blog" },
]

export default function BlogHubPage() {
    const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs)

    const blogListSchema = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "@id": `${SITE_CONFIG.url}/blog#blog`,
        name: "BooWorks Knowledge Hub",
        description: "Actionable technical guides on offshore digital marketing, SEO, and web engineering.",
        publisher: {
            "@type": "Organization",
            name: "BooWorks",
            url: SITE_CONFIG.url,
            logo: {
                "@type": "ImageObject",
                url: `${SITE_CONFIG.url}/logo.png`,
            },
        },
        blogPost: blogPosts.map((post) => ({
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            url: `${SITE_CONFIG.url}/blog/${post.slug}`,
            datePublished: post.publishDate,
            dateModified: post.modifiedDate,
            author: {
                "@type": "Person",
                name: post.author.name,
            },
        })),
    }

    return (
        <main className="min-h-screen bg-background relative overflow-hidden pt-28 pb-16">
            {/* Inject Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
            />

            {/* Background Ambient Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-[-5%] left-[-10%] w-[45%] h-[45%] bg-primary/15 rounded-full blur-[130px]" />
                <div className="absolute top-[35%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[130px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs md:text-sm font-semibold text-primary mb-4">
                        <Sparkles size={14} className="text-primary animate-pulse" />
                        Strategic Frameworks & Engineering Playbooks
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.15] mb-6">
                        Offshore Engineering & Growth Knowledge Hub
                    </h1>

                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                        Data-driven guides, cost analyses, and operational playbooks written by senior practitioners for founders, CMOs, and agency directors.
                    </p>
                </div>

                {/* Articles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {blogPosts.map((post) => (
                        <article
                            key={post.slug}
                            className="group bg-card/60 hover:bg-card/90 backdrop-blur-md rounded-3xl p-7 border border-white/10 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
                        >
                            <div>
                                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold border border-primary/20">
                                        {post.category}
                                    </span>
                                    <div className="flex items-center gap-1.5">
                                        <Clock size={13} className="text-muted-foreground/70" />
                                        <span>{post.readTime}</span>
                                    </div>
                                </div>

                                <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">
                                    <Link href={`/blog/${post.slug}`}>
                                        {post.title}
                                    </Link>
                                </h2>

                                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-6">
                                    {post.excerpt}
                                </p>
                            </div>

                            <div>
                                <div className="flex items-center justify-between pt-4 border-t border-white/5 text-xs text-muted-foreground">
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-[10px]">
                                            {post.author.name[0]}
                                        </div>
                                        <span>{post.author.name}</span>
                                    </div>
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="font-semibold text-primary inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                                    >
                                        Read Guide
                                        <ArrowRight size={14} />
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Bottom Call to Action */}
                <div className="max-w-3xl mx-auto text-center bg-card/40 rounded-3xl p-10 border border-white/10">
                    <BookOpen className="w-10 h-10 text-primary mx-auto mb-4" />
                    <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                        Have Questions About Building Your Offshore Strategy?
                    </h2>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-6 leading-relaxed max-w-xl mx-auto">
                        Speak directly with our technical leadership. We will evaluate your operational bottleneck, recommend the ideal engagement model, and prepare an honest timeline estimate.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm shadow-lg shadow-primary/25 hover:opacity-90 transition-all hover:scale-105"
                    >
                        Schedule a Strategy Scoping Call
                        <ArrowRight size={16} className="ml-2" />
                    </Link>
                </div>
            </div>
        </main>
    )
}

