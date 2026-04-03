"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="pt-32 pb-24 bg-slate-50 relative min-h-screen overflow-hidden">
            <div className="absolute -top-10 right-0 h-80 w-80 rounded-full bg-orange-100/70 blur-3xl -z-10" />
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="font-bold text-sm tracking-wider uppercase mb-4 block">Contact Us</span>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-accent mb-6">
                        Get In Touch
                    </h1>
                    <p className="text-lg text-slate-500 leading-relaxed">
                        Have a question about our courses? Want to check instructor availability in your area? Our team is here to help you get on the road.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-1 space-y-8"
                    >
                        <div className="glass-card bg-white p-8 group hover:border-accent transition-colors duration-300">
                            <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                                <Phone size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Call Us</h3>
                            <p className="text-slate-500 mb-4 text-sm">Mon-Fri from 8am to 8pm.</p>
                            <a href="tel:+448001234567" className="text-lg font-bold text-accent hover:underline">0800 123 4567</a>
                        </div>

                        <div className="glass-card bg-white p-8 group hover:border-brand-blue transition-colors duration-300">
                            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-brand-blue mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                                <Mail size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Email Us</h3>
                            <p className="text-slate-500 mb-4 text-sm">We&apos;ll respond within 24 hours.</p>
                            <a href="mailto:hello@easy-drive.uk" className="text-lg font-bold text-brand-blue hover:underline">hello@easy-drive.uk</a>
                        </div>

                        <div className="glass-card bg-white p-8 group hover:border-green-500 transition-colors duration-300">
                            <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-600 mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                                <MessageCircle size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">WhatsApp</h3>
                            <p className="text-slate-500 mb-4 text-sm">Quick replies for bookings and course advice.</p>
                            <a href="https://wa.me/447777777777" className="text-lg font-bold text-green-600 hover:underline">Chat on WhatsApp</a>
                        </div>

                        <div className="glass-card bg-white p-8 group hover:border-accent transition-colors duration-300">
                            <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                                <MapPin size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Head Office</h3>
                            <p className="text-slate-500 text-sm">
                                123 Driving School Lane<br />
                                London, W1A 1AA<br />
                                United Kingdom
                            </p>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="lg:col-span-2 glass-card bg-white p-8 rounded-[2rem] order-first lg:order-last"
                    >
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h2>
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                                    <input type="text" id="firstName" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all bg-slate-50" placeholder="John" />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                                    <input type="text" id="lastName" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all bg-slate-50" placeholder="Doe" />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                                    <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all bg-slate-50" placeholder="john@example.com" />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                                    <input type="tel" id="phone" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all bg-slate-50" placeholder="07700 900000" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">Enquiry Type</label>
                                <select id="subject" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all bg-slate-50 text-slate-700">
                                    <option>Booking an intensive course</option>
                                    <option>Weekly driving lessons</option>
                                    <option>Instructor enquiry</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                                <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all bg-slate-50 resize-none" placeholder="How can we help you?"></textarea>
                            </div>

                            <button type="submit" className="w-full bg-accent text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-[#E05D23] transition-all shadow-lg shadow-accent/20 flex items-center justify-center gap-2 active:scale-95">
                                Send Message
                                <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>

                <section className="max-w-6xl mx-auto mt-16 rounded-[2rem] bg-white border border-slate-200 p-10 md:p-12">
                    <h2 className="text-3xl font-extrabold text-accent mb-8 text-center">Quick Answers</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            ["How soon can I start?", "Usually within 3-7 days depending on area and lesson type."],
                            ["Can I pay in installments?", "Yes, selected packages support staged payments."],
                            ["Do you provide intensive test support?", "Yes, from booking through mock test prep and test-day strategy."],
                        ].map(([q, a]) => (
                            <div key={q} className="rounded-2xl bg-slate-50 border border-slate-100 p-6">
                                <h3 className="font-bold text-slate-900 mb-2">{q}</h3>
                                <p className="text-sm text-slate-600">{a}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
