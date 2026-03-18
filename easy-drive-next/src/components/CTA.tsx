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
                    <div className="relative overflow-hidden rounded-3xl bg-orange-50/70 border border-orange-100 p-10 md:p-16 text-center shadow-[0_4px_30px_rgba(15,23,42,0.03)]">
                        {/* Background image overlay */}
                        <div className="absolute inset-0 bg-[url('/images/hero_driving.png')] bg-cover bg-center opacity-[0.03]" />

                        {/* Accent glow */}
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
                        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[80px]" />

                        <div className="relative z-10 max-w-2xl mx-auto">
                            <motion.h2
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.15, duration: 0.5 }}
                                className="text-4xl md:text-5xl font-extrabold tracking-tight text-accent mb-5 leading-[1.1]"
                            >
                                Ready to Start Driving?
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.25, duration: 0.5 }}
                                className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl mx-auto"
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
                                    <div key={i} className="flex items-center gap-1.5 text-sm font-medium text-slate-700">
                                        <CheckCircle size={14} className="text-emerald-500" />
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
                                    className="bg-accent hover:bg-[#E05D23] text-white text-base px-8 py-3.5 flex items-center justify-center gap-2 group hover:-translate-y-0.5 shadow-[0_8px_20px_-6px_rgba(255,107,44,0.4)] hover:shadow-[0_12px_25px_-6px_rgba(255,107,44,0.5)] active:scale-[0.97] transition-all rounded-[14px] font-bold"
                                >
                                    View Courses
                                    <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                                </Link>
                                <a
                                    href="tel:+448001234567"
                                    className="inline-flex items-center justify-center gap-2 text-base font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm rounded-[14px] px-8 py-3.5 transition-all hover:-translate-y-0.5 active:scale-[0.97]"
                                >
                                    <PhoneCall size={16} className="text-accent" />
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
                                <a href="https://wa.me/447777777777" className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-50 px-5 py-2.5 text-sm font-bold text-emerald-700 hover:bg-emerald-100 transition-all">
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
