"use client";

import { motion } from "framer-motion";
import { ArrowRight, PhoneCall, MessageCircle } from "lucide-react";

export default function CTA() {
    return (
        <section className="py-28 bg-gradient-to-b from-white via-slate-50/60 to-white relative overflow-hidden">
            <div className="absolute -top-16 left-0 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl -z-10" />
            <div className="absolute -bottom-20 right-0 h-72 w-72 rounded-full bg-orange-100/60 blur-3xl -z-10" />
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="relative max-w-5xl mx-auto"
                >
                    {/* Subtle Glow Behind the Card */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-100/70 via-orange-100/70 to-green-100/70 rounded-[3rem] blur-2xl opacity-60 -z-10" />

                    {/* Large Glass Card */}
                    <div className="liquid-glass bg-white/50 relative overflow-hidden rounded-[3rem] p-10 md:p-20 text-center group hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500">
                        <div className="absolute inset-0 bg-[url('/images/hero_driving.png')] bg-cover bg-center opacity-[0.2]" />
                        <div className="absolute inset-0 bg-gradient-to-b from-white/88 to-white/78" />

                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.05]">
                                Ready to Start <br /> <span className="text-slate-500">Driving?</span>
                            </h2>

                            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
                                Join thousands of students who passed their driving test with us. Begin your journey toward independence today.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
                                <button className="bg-slate-900 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2 group/btn">
                                    View Courses
                                    <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                                <a href="tel:+448001234567" className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl text-lg font-medium hover:bg-slate-50 transition-all shadow-sm hover:shadow-md hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2">
                                    <PhoneCall size={20} className="text-slate-500" />
                                    Call Now
                                </a>
                            </div>
                            <div className="flex justify-center">
                                <a href="https://wa.me/447777777777" className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-5 py-2.5 text-sm font-semibold text-green-700 shadow-sm hover:bg-green-100 transition-colors">
                                    <MessageCircle size={16} />
                                    Chat on WhatsApp
                                </a>
                            </div>
                        </div>

                        {/* Decorative background circle in card */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full blur-[100px] opacity-60 -z-10 pointer-events-none group-hover:scale-110 transition-transform duration-1000" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
