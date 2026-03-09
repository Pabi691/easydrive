"use client";

import { motion } from "framer-motion";
import Courses from "@/components/Courses";
import Link from "next/link";

export default function CoursesPage() {
    return (
        <div className="pt-32 pb-24 bg-white relative overflow-hidden">
            <div className="absolute -left-16 top-16 h-72 w-72 rounded-full bg-blue-100/70 blur-3xl -z-10" />
            <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-orange-100/70 blur-3xl -z-10" />
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-10"
                >
                    <span className="text-brand-orange font-bold text-sm tracking-wider uppercase mb-4 block">Our Curriculum</span>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.05]">
                        Detailed Driving Courses
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-6">
                        Explore our comprehensive range of courses tailored to fit your experience level, budget, and timeline.
                    </p>
                </motion.div>

                {/* Reusing existing component for consistency */}
                <Courses />

                <section className="mt-20 grid gap-6 md:grid-cols-3">
                    {[
                        {
                            title: "Beginner Path",
                            points: ["No experience needed", "Structured weekly coaching", "Confidence-first approach"],
                            bg: "bg-blue-50",
                        },
                        {
                            title: "Fast Pass Path",
                            points: ["1-2 week intensive options", "Priority test booking", "Daily feedback and mock tests"],
                            bg: "bg-orange-50",
                        },
                        {
                            title: "Post-Pass Path",
                            points: ["Pass Plus modules", "Motorway confidence", "Night and weather driving"],
                            bg: "bg-green-50",
                        },
                    ].map((path) => (
                        <div key={path.title} className={`rounded-3xl border border-slate-200 p-8 ${path.bg}`}>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">{path.title}</h3>
                            <ul className="space-y-2 text-slate-700">
                                {path.points.map((point) => <li key={point}>- {point}</li>)}
                            </ul>
                        </div>
                    ))}
                </section>

                <section className="mt-16 rounded-[2rem] bg-gradient-to-r from-slate-900 to-slate-800 p-10 md:p-12 text-white text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Need Help Choosing a Course?</h2>
                    <p className="text-slate-200 mb-7 max-w-2xl mx-auto">
                        We can recommend the right package in one quick call based on your experience and deadline.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                        <a href="tel:+448001234567" className="rounded-full bg-white px-7 py-3 font-semibold text-slate-900">Call 0800 123 4567</a>
                        <a href="https://wa.me/447777777777" className="rounded-full bg-green-600 px-7 py-3 font-semibold text-white">WhatsApp Chat</a>
                        <Link href="/contact" className="rounded-full border border-white/30 bg-white/10 px-7 py-3 font-semibold text-white">Enquire Online</Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
