"use client"

import { motion } from "framer-motion"
import { Briefcase, MapPin, Clock, TrendingUp, Palette, Users, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

const jobOpenings = [
    {
        id: 1,
        title: "Sales Executive - Digital Marketing",
        type: "Full-time",
        location: "Hosur, Tamil Nadu",
        department: "Sales",
        icon: TrendingUp,
        description: "Drive revenue growth by selling our digital marketing services to businesses across Hosur, Krishnagiri, and surrounding areas.",
        responsibilities: [
            "Generate leads and close sales for SEO, web development, and digital marketing services",
            "Build and maintain strong client relationships",
            "Meet and exceed monthly sales targets",
            "Conduct client presentations and product demonstrations",
            "Collaborate with marketing team to develop sales strategies"
        ],
        requirements: [
            "2+ years of sales experience (digital marketing preferred)",
            "Excellent communication and negotiation skills",
            "Self-motivated with a proven track record of meeting targets",
            "Knowledge of digital marketing services is a plus",
            "Bike/vehicle for client visits required"
        ],
        salary: "₹20,000 - ₹40,000/month + Performance Incentives"
    },
    {
        id: 2,
        title: "Graphic Designer",
        type: "Full-time",
        location: "Hosur, Tamil Nadu",
        department: "Creative",
        icon: Palette,
        description: "Create stunning visual content for our clients' digital marketing campaigns, websites, and social media platforms.",
        responsibilities: [
            "Design graphics for social media, websites, and marketing materials",
            "Create brand identities, logos, and visual guidelines",
            "Collaborate with marketing team on campaign creatives",
            "Edit and enhance images and videos",
            "Stay updated with latest design trends and tools"
        ],
        requirements: [
            "1-3 years of graphic design experience",
            "Proficiency in Adobe Creative Suite (Photoshop, Illustrator, After Effects)",
            "Strong portfolio showcasing creative work",
            "Understanding of UI/UX design principles",
            "Ability to work on multiple projects simultaneously"
        ],
        salary: "₹15,000 - ₹30,000/month"
    },
    {
        id: 3,
        title: "Business Development Manager",
        type: "Full-time",
        location: "Hosur, Tamil Nadu",
        department: "Sales",
        icon: Users,
        description: "Lead our business development efforts and expand BooWorks' client base across Tamil Nadu.",
        responsibilities: [
            "Identify and pursue new business opportunities",
            "Develop strategic partnerships with businesses",
            "Lead sales team and mentor junior sales executives",
            "Create and execute business development strategies",
            "Represent BooWorks at networking events and conferences"
        ],
        requirements: [
            "3+ years in business development or sales management",
            "Strong leadership and team management skills",
            "Excellent networking and relationship-building abilities",
            "Experience in digital marketing industry preferred",
            "MBA or relevant degree is a plus"
        ],
        salary: "₹30,000 - ₹50,000/month + Performance Bonus"
    }
]

const benefits = [
    "Competitive salary with performance incentives",
    "Professional development and training opportunities",
    "Friendly and collaborative work environment",
    "Career growth opportunities",
    "Flexible work arrangements",
    "Health insurance (for eligible positions)"
]

export default function CareersPage() {
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
                        <Briefcase className="text-primary" size={20} />
                        <span className="text-sm font-medium text-primary">Join Our Team</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
                    >
                        Build Your Career at
                        <br />
                        <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                            BooWorks
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                    >
                        Join a dynamic team that's transforming digital marketing in Hosur and Krishnagiri.
                        We're looking for passionate, driven individuals ready to make an impact.
                    </motion.p>
                </div>

                {/* Why Join BooWorks */}
                <div className="mb-24">
                    <h2 className="text-3xl font-bold text-center mb-12">Why Work With Us?</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={benefit}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-r from-primary/5 to-blue-500/5 border border-white/10"
                            >
                                <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                                <span className="text-muted-foreground">{benefit}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Job Openings */}
                <div className="mb-24">
                    <h2 className="text-3xl font-bold text-center mb-4">Current Openings</h2>
                    <p className="text-center text-muted-foreground mb-12">
                        Explore opportunities to grow your career with BooWorks
                    </p>

                    <div className="space-y-8">
                        {jobOpenings.map((job, index) => {
                            const Icon = job.icon
                            return (
                                <motion.div
                                    key={job.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative overflow-hidden rounded-3xl bg-card/50 backdrop-blur-sm border border-border/50 p-8 hover:border-primary/30 transition-all"
                                >
                                    {/* Job Header */}
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                                <Icon size={24} />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                                                <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                                                    <span className="flex items-center gap-1">
                                                        <Briefcase size={14} />
                                                        {job.type}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <MapPin size={14} />
                                                        {job.location}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <Clock size={14} />
                                                        {job.department}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <Link
                                            href={`/contact?job=${encodeURIComponent(job.title)}`}
                                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity whitespace-nowrap"
                                        >
                                            Apply Now
                                            <ArrowRight size={18} />
                                        </Link>
                                    </div>

                                    {/* Job Description */}
                                    <p className="text-muted-foreground mb-6">{job.description}</p>

                                    {/* Salary */}
                                    <div className="mb-6 p-4 rounded-xl bg-primary/5 border border-primary/10">
                                        <p className="font-semibold text-primary">{job.salary}</p>
                                    </div>

                                    {/* Responsibilities & Requirements */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold mb-3 flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-primary" />
                                                Key Responsibilities
                                            </h4>
                                            <ul className="space-y-2">
                                                {job.responsibilities.map((resp, idx) => (
                                                    <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                                                        <span className="text-primary mt-1">•</span>
                                                        <span>{resp}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-3 flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-blue-500" />
                                                Requirements
                                            </h4>
                                            <ul className="space-y-2">
                                                {job.requirements.map((req, idx) => (
                                                    <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                                                        <span className="text-blue-500 mt-1">•</span>
                                                        <span>{req}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })}
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
                            Don't See Your Role?
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                            We're always looking for talented individuals. Send us your resume and
                            we'll keep you in mind for future opportunities.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
                        >
                            Send Your Resume
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </motion.div>

            </div>
        </main>
    )
}
