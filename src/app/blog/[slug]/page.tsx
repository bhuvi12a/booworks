import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { blogPosts, BlogPost } from "@/lib/blog-data"
import { generatePageMetadata, generateBreadcrumbSchema, generateFAQSchema, SITE_CONFIG } from "@/lib/seo-config"
import { 
    Clock, Calendar, ArrowLeft, ArrowRight, 
    User, CheckCircle2, ChevronRight, Share2, 
    Sparkles, Shield, Bookmark 
} from "lucide-react"

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }))
}

interface PageProps {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params
    const post = blogPosts.find((p) => p.slug === slug)
    if (!post) return {}

    return generatePageMetadata({
        title: `${post.title} | BooWorks Knowledge Hub`,
        description: post.excerpt,
        keywords: post.targetKeywords,
        path: `/blog/${post.slug}`,
    })
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params
    const post = blogPosts.find((p) => p.slug === slug)

    if (!post) {
        notFound()
    }

    const breadcrumbs = [
        { name: "Home", url: "/" },
        { name: "Knowledge Hub", url: "/blog" },
        { name: post.title, url: `/blog/${post.slug}` },
    ]

    const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs)
    const faqSchema = generateFAQSchema(post.faqs)

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "@id": `${SITE_CONFIG.url}/blog/${post.slug}#article`,
        headline: post.title,
        description: post.excerpt,
        url: `${SITE_CONFIG.url}/blog/${post.slug}`,
        datePublished: post.publishDate,
        dateModified: post.modifiedDate,
        inLanguage: "en",
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${SITE_CONFIG.url}/blog/${post.slug}`,
        },
        author: {
            "@type": "Person",
            name: post.author.name,
            jobTitle: post.author.role,
        },
        publisher: {
            "@type": "Organization",
            name: "BooWorks",
            url: SITE_CONFIG.url,
            logo: {
                "@type": "ImageObject",
                url: `${SITE_CONFIG.url}/logo.png`,
            },
        },
    }

    return (
        <main className="min-h-screen bg-background relative overflow-hidden pt-28 pb-20">
            {/* Inject JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* Background Ambient Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-[-5%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[140px]" />
                <div className="absolute top-[35%] right-[-10%] w-[35%] h-[35%] bg-blue-600/10 rounded-full blur-[140px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 max-w-4xl">
                {/* Breadcrumbs Navigation */}
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center space-x-2 text-xs md:text-sm text-muted-foreground flex-wrap">
                        {breadcrumbs.map((crumb, idx) => {
                            const isLast = idx === breadcrumbs.length - 1
                            return (
                                <li key={crumb.url} className="flex items-center">
                                    {idx > 0 && <ChevronRight size={14} className="mx-1.5 opacity-60" />}
                                    {isLast ? (
                                        <span className="text-foreground font-medium truncate max-w-[240px] sm:max-w-md" aria-current="page">
                                            {crumb.name}
                                        </span>
                                    ) : (
                                        <Link href={crumb.url} className="hover:text-primary transition-colors">
                                            {crumb.name}
                                        </Link>
                                    )}
                                </li>
                            )
                        })}
                    </ol>
                </nav>

                {/* Article Header */}
                <header className="mb-12 pb-8 border-b border-border/40">
                    <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-xs font-semibold text-primary mb-4">
                        <Bookmark size={13} className="text-primary" />
                        {post.category}
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.2] mb-6">
                        {post.title}
                    </h1>

                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 font-normal">
                        {post.excerpt}
                    </p>

                    <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground pt-4 border-t border-white/5">
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-bold text-primary text-sm">
                                {post.author.name[0]}
                            </div>
                            <div>
                                <p className="font-semibold text-foreground text-sm">{post.author.name}</p>
                                <p className="text-xs text-muted-foreground">{post.author.role}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1.5">
                                <Calendar size={14} className="opacity-70" />
                                <span>Updated: {post.modifiedDate}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <Clock size={14} className="opacity-70" />
                                <span>{post.readTime}</span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Contextual Commercial Callout Banner */}
                <div className="mb-12 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-6 rounded-2xl border border-primary/25 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <span className="text-xs uppercase font-bold tracking-wider text-primary">Need Execution Support?</span>
                        <h2 className="text-base sm:text-lg font-bold text-foreground mt-0.5">
                            Partner with Our Specialized {post.primaryServiceLabel} Team
                        </h2>
                        <p className="text-xs text-muted-foreground mt-1">
                            Deploy senior engineers and marketers in India with guaranteed US/UK/UAE timezone overlap.
                        </p>
                    </div>
                    <Link
                        href={post.primaryServiceUrl}
                        className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-xs shrink-0 shadow-md hover:opacity-90 transition-all hover:scale-105"
                    >
                        Explore Service
                        <ArrowRight size={14} className="ml-1.5" />
                    </Link>
                </div>

                {/* Article Content Body */}
                <article className="prose prose-invert prose-lg max-w-none mb-16 space-y-10">
                    <p className="text-lg leading-relaxed text-foreground/90 font-normal">
                        {post.content.intro}
                    </p>

                    {post.content.sections.map((section, idx) => (
                        <section key={idx} className="space-y-4">
                            <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight pt-4 border-t border-border/30">
                                {section.h2}
                            </h2>

                            {section.paragraphs.map((p, pIdx) => (
                                <p key={pIdx} className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                                    {p}
                                </p>
                            ))}

                            {section.bullets && (
                                <ul className="space-y-2.5 my-4 bg-card/40 p-6 rounded-2xl border border-white/5 list-none pl-0">
                                    {section.bullets.map((b, bIdx) => (
                                        <li key={bIdx} className="flex items-start text-xs sm:text-sm text-foreground/90 gap-2.5">
                                            <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                                            <span>{b}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {section.callout && (
                                <div className="bg-secondary/40 border-l-4 border-primary p-5 rounded-r-2xl my-6">
                                    <h3 className="text-sm font-bold text-foreground mb-1">
                                        {section.callout.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                        {section.callout.text}
                                    </p>
                                </div>
                            )}
                        </section>
                    ))}

                    <div className="pt-6 border-t border-border/40">
                        <h2 className="text-2xl font-bold text-foreground mb-3">Key Takeaways & Conclusion</h2>
                        <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                            {post.content.conclusion}
                        </p>
                    </div>
                </article>

                {/* Frequently Asked Questions */}
                <section className="mb-16 pt-8 border-t border-border/40">
                    <h2 className="text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {post.faqs.map((faq, i) => (
                            <div key={i} className="bg-card/50 rounded-2xl p-6 border border-white/5">
                                <h3 className="text-base font-bold text-foreground mb-2">{faq.question}</h3>
                                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Bottom Navigation & Conversion Box */}
                <div className="bg-gradient-to-br from-card to-card/60 rounded-3xl p-8 border border-primary/30 text-center shadow-xl">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">Next Steps</span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-foreground mt-2 mb-3">
                        Accelerate Your Roadmap with BooWorks
                    </h2>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-6 max-w-xl mx-auto leading-relaxed">
                        Schedule an exploratory scoping call with our senior leadership to evaluate technical fit, engagement models, and project estimates.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm shadow-lg shadow-primary/25 hover:opacity-90 transition-all hover:scale-105"
                        >
                            Schedule a Strategy Call
                            <ArrowRight size={16} className="ml-2" />
                        </Link>
                        <Link
                            href={post.primaryServiceUrl}
                            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-secondary/70 border border-white/10 text-foreground font-medium text-sm hover:bg-secondary transition-all"
                        >
                            View {post.primaryServiceLabel}
                        </Link>
                    </div>
                </div>

                {/* Back to Blog Hub */}
                <div className="mt-8 text-center">
                    <Link
                        href="/blog"
                        className="inline-flex items-center text-xs font-medium text-muted-foreground hover:text-primary transition-colors gap-1.5"
                    >
                        <ArrowLeft size={14} />
                        Back to Knowledge Hub Directory
                    </Link>
                </div>
            </div>
        </main>
    )
}

