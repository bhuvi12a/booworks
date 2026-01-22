"use client"

import { motion } from "framer-motion"
import { Bot, Sparkles, TrendingUp, Zap, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function AIMarketingPage() {
    return (
        <main className="min-h-screen pt-24 pb-12 px-6">
            <div className="container mx-auto max-w-6xl">

                {/* Hero Section */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
                    >
                        <Bot className="text-primary" size={20} />
                        <span className="text-sm font-medium text-primary">AI-Powered Marketing Solutions</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
                    >
                        ChatGPT, Gemini & DeepSeek
                        <br />
                        <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                            Meet Human Expertise
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                    >
                        While AI tools like ChatGPT, Google Gemini, and DeepSeek are powerful, they're just tools.
                        BooWorks combines cutting-edge AI with strategic human insight to deliver marketing results
                        that automated tools alone simply can't achieve.
                    </motion.p>
                </div>

                {/* AI Tools Comparison */}
                <div className="mb-24">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Understanding AI Marketing Tools
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "ChatGPT",
                                icon: "🤖",
                                description: "OpenAI's conversational AI excels at content generation, brainstorming, and customer service automation.",
                                bestFor: "Content ideation, copywriting assistance, chatbot development"
                            },
                            {
                                name: "Google Gemini",
                                icon: "✨",
                                description: "Google's multimodal AI offers deep integration with Google services and advanced reasoning capabilities.",
                                bestFor: "Data analysis, Google Ads optimization, multi-format content"
                            },
                            {
                                name: "DeepSeek",
                                icon: "🔍",
                                description: "Advanced AI for deep market analysis, competitor research, and strategic insights.",
                                bestFor: "Market research, trend analysis, competitive intelligence"
                            }
                        ].map((tool, index) => (
                            <motion.div
                                key={tool.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/5 via-blue-500/5 to-transparent border border-white/10 p-8"
                            >
                                <div className="text-5xl mb-4">{tool.icon}</div>
                                <h3 className="text-2xl font-bold mb-3">{tool.name}</h3>
                                <p className="text-muted-foreground mb-4">{tool.description}</p>
                                <div className="pt-4 border-t border-white/10">
                                    <p className="text-sm font-semibold text-primary mb-2">Best For:</p>
                                    <p className="text-sm text-muted-foreground">{tool.bestFor}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Why BooWorks Approach */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Why AI Alone Isn't Enough
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            ChatGPT, Gemini, and DeepSeek are incredible tools, but they lack the strategic
                            thinking, industry expertise, and local market knowledge that drives real results.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                icon: Sparkles,
                                title: "AI + Human Strategy",
                                description: "We use ChatGPT and Gemini for content generation, then refine with human expertise to ensure brand voice, local relevance, and strategic alignment."
                            },
                            {
                                icon: TrendingUp,
                                title: "Data-Driven Insights",
                                description: "DeepSeek helps us analyze market trends, but our team interprets the data to create actionable strategies specific to Hosur, Krishnagiri, and Tamil Nadu markets."
                            },
                            {
                                icon: Zap,
                                title: "Automated Efficiency",
                                description: "AI tools handle repetitive tasks like initial keyword research and content drafts, freeing our experts to focus on strategy, creativity, and optimization."
                            },
                            {
                                icon: CheckCircle,
                                title: "Quality Assurance",
                                description: "Every AI-generated piece goes through human review to ensure accuracy, cultural sensitivity, and alignment with Google's E-E-A-T guidelines."
                            }
                        ].map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/20 transition-colors"
                            >
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                    <feature.icon size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                    <p className="text-muted-foreground">{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Our AI-Enhanced Services */}
                <div className="mb-24">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Our AI-Enhanced Services
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "AI-Powered SEO Content Strategy",
                            "ChatGPT-Assisted Copywriting",
                            "Gemini-Enhanced Google Ads",
                            "DeepSeek Market Analysis",
                            "AI Content Automation",
                            "Intelligent Chatbot Development",
                            "AI-Driven Social Media Management",
                            "Automated Email Marketing",
                            "AI Analytics & Reporting"
                        ].map((service, index) => (
                            <motion.div
                                key={service}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-primary/5 to-blue-500/5 border border-white/10"
                            >
                                <CheckCircle className="text-primary flex-shrink-0" size={20} />
                                <span className="font-medium">{service}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary/20 via-blue-500/10 to-transparent border border-white/10 p-12 text-center"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Ready to Combine AI Power with Human Expertise?
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Stop struggling with ChatGPT, Gemini, or DeepSeek alone. Let BooWorks show you
                            how to leverage AI strategically for real business growth.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
                        >
                            Get Started Today
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </motion.div>

            </div>
        </main>
    )
}
