"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall, MessageCircle, CheckCircle } from "lucide-react";

export default function CTA() {
    return (
        <section className="py-24 relative overflow-hidden"
            style={{ background: "linear-gradient(180deg, #f8fafc 0%, #f0f4f8 50%, #f8fafc 100%)" }}
        >
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                    className="relative max-w-5xl mx-auto"
                >
                    {/* Main CTA card */}
                    <div className="relative overflow-hidden rounded-3xl bg-slate-900 p-10 md:p-16 text-center">
                        {/* Background image overlay */}
                        <div className="absolute inset-0 bg-[url('/images/hero_driving.png')] bg-cover bg-center opacity-[0.15]" />
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-800" />

                        {/* Accent glow */}
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]" />
                        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/8 rounded-full blur-[80px]" />

                        <div className="relative z-10 max-w-2xl mx-auto">
                            <motion.h2
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.15, duration: 0.5 }}
                                className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#FF6B2C] mb-5 leading-[1.1]"
                            >
                                Ready to Start Driving?
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.25, duration: 0.5 }}
                                className="text-lg text-slate-400 mb-8 leading-relaxed"
                            >
                                Join thousands of students who passed their driving test with us. Begin your journey towards independence today.
                            </motion.p>

                            {/* Benefits mini-list */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.35, duration: 0.5 }}
                                className="flex flex-wrap items-center justify-center gap-4 mb-8"
                            >
                                {["DVSA-approved instructors", "Fast-track test booking", "92% pass rate"].map((item, i) => (
                                    <div key={i} className="flex items-center gap-1.5 text-sm text-slate-300">
                                        <CheckCircle size={14} className="text-emerald-400" />
                                        {item}
                                    </div>
                                ))}
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                                className="flex flex-col sm:flex-row gap-3 justify-center mb-5"
                            >
                                <Link
                                    href="/services"
                                    className="btn-primary text-base px-7 py-3.5 flex items-center justify-center gap-2 group hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-10px_rgba(255,107,44,0.5)] active:scale-[0.97] transition-all"
                                >
                                    View Courses
                                    <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                                </Link>
                                <a
                                    href="tel:+448001234567"
                                    className="inline-flex items-center justify-center gap-2 text-base font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/10 rounded-[14px] px-7 py-3.5 transition-all hover:-translate-y-0.5 active:scale-[0.97]"
                                >
                                    <PhoneCall size={16} />
                                    Call Now
                                </a>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.55, duration: 0.5 }}
                                className="flex justify-center"
                            >
                                <a href="https://wa.me/447777777777" className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-5 py-2.5 text-sm font-medium text-emerald-400 hover:bg-emerald-500/20 transition-all">
                                    <MessageCircle size={14} />
                                    Chat on WhatsApp
                                </a>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
