"use client"

import { useActionState } from "react"
import { submitContact } from "@/app/actions/forms"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone, Send, Loader2, User, MessageSquare, CheckCircle } from "lucide-react"

export default function ContactPage() {
    const [state, action, isPending] = useActionState(submitContact, undefined)

    return (
        <div className="min-h-screen bg-background relative overflow-hidden pt-24 pb-12">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
                    >
                        Get in <span className="text-primary italic">Touch</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground text-lg leading-relaxed"
                    >
                        Have a project in mind or want to explore how we can help your business grow? We'd love to hear from you.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="bg-secondary/30 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="relative z-10 flex items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-xl mb-1">Email Us</h3>
                                    <p className="text-muted-foreground mb-2">For general enquiries and support</p>
                                    <a href="mailto:bootech07@gmail.com" className="text-primary font-medium hover:underline">bootech07@gmail.com</a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-secondary/30 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="relative z-10 flex items-start gap-4">
                                <div className="p-3 bg-purple-500/10 rounded-xl text-purple-600">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-xl mb-1">Visit Us</h3>
                                    <p className="text-muted-foreground mb-2">Come say hello at our office</p>
                                    <p className="font-medium text-foreground max-w-xs">4/72 Gandhi nagar, Hosur, Zuzuvadi, Krishnagiri District 635126</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-secondary/30 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="relative z-10 flex items-start gap-4">
                                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-600">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-xl mb-1">Call Us</h3>
                                    <p className="text-muted-foreground mb-2">Mon-Fri from 9am to 6pm</p>
                                    <a href="tel:7397532847" className="text-blue-600 font-medium hover:underline">7397532847</a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-white/80 dark:bg-card/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 lg:p-10 border border-border shadow-lg relative w-full"
                    >
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold">Send an Enquiry</h3>
                            <p className="text-muted-foreground text-sm">Fill out the form below and we'll get back to you.</p>
                        </div>

                        {state?.success ? (
                            <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in zoom-in duration-500">
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600">
                                    <CheckCircle size={40} />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">Enquiry Sent!</h3>
                                <p className="text-muted-foreground max-w-xs">
                                    {state.message}
                                </p>
                                <button
                                    onClick={() => window.location.reload()}
                                    className="mt-8 text-primary font-medium hover:underline"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form action={action} className="space-y-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium ml-1">Name <span className="text-red-500">*</span></label>
                                        <div className="relative">
                                            <input
                                                id="name"
                                                name="name"
                                                type="text"
                                                required
                                                placeholder="Your Name"
                                                className="w-full pl-10 pr-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
                                            />
                                            <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium ml-1">Email <span className="text-red-500">*</span></label>
                                        <div className="relative">
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                required
                                                placeholder="john@example.com"
                                                className="w-full pl-10 pr-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
                                            />
                                            <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-medium ml-1">Phone</label>
                                        <div className="relative">
                                            <input
                                                id="phone"
                                                name="phone"
                                                type="tel"
                                                placeholder="+91 99999 99999"
                                                className="w-full pl-10 pr-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
                                            />
                                            <Phone size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="subject" className="text-sm font-medium ml-1">Subject</label>
                                        <div className="relative">
                                            <select
                                                id="subject"
                                                name="subject"
                                                className="w-full pl-4 pr-10 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm appearance-none"
                                            >
                                                <option value="General Enquiry">General Enquiry</option>
                                                <option value="Service Request">Service Request</option>
                                                <option value="Project Collaboration">Project Collaboration</option>
                                                <option value="Feedback">Feedback</option>
                                            </select>
                                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                                <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium ml-1">Message <span className="text-red-500">*</span></label>
                                    <div className="relative">
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={5}
                                            placeholder="Tell us about your project..."
                                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none shadow-sm"
                                        />
                                        <MessageSquare size={18} className="absolute left-3 top-4 text-muted-foreground" />
                                    </div>
                                </div>

                                {state?.success === false && (
                                    <div className="p-3 rounded-lg bg-red-50 text-red-600 text-sm animate-in fade-in slide-in-from-top-2">
                                        {state.message}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isPending}
                                    className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:opacity-90 transition-all shadow-lg shadow-primary/25 flex items-center justify-center gap-2 transform active:scale-[0.98]"
                                >
                                    {isPending ? (
                                        <>
                                            <Loader2 size={24} className="animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Enquiry
                                            <Send size={20} />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
