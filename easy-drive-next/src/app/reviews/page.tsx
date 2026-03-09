"use client";

import { motion } from "framer-motion";
import Reviews from "@/components/Reviews";

export default function ReviewsPage() {
    return (
        <div className="pt-32 pb-24 bg-white relative overflow-hidden">
            <div className="absolute -left-20 top-20 h-80 w-80 rounded-full bg-blue-100/70 blur-3xl -z-10" />
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-10"
                >
                    <span className="text-brand-orange font-bold text-sm tracking-wider uppercase mb-4 block">Success Stories</span>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.05]">
                        Hear From Our Drivers
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-6">
                        Over 5,000 students have passed their driving tests with Easy-Drive.UK. Read their experiences and join our growing list of successful new drivers.
                    </p>
                </motion.div>

                {/* Reusing existing component for consistency */}
                <Reviews />

                <section className="mt-16 grid gap-6 md:grid-cols-3">
                    {[
                        ["Before Lessons", "Nervous, unsure, delaying test booking for months."],
                        ["During Training", "Structured progress, weekly goals, mock test strategy."],
                        ["After Passing", "Confident daily driving and greater independence."],
                    ].map(([title, desc], idx) => (
                        <div key={title} className={`rounded-3xl border border-slate-200 p-8 ${idx === 1 ? "bg-orange-50" : "bg-white"}`}>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">{title}</h3>
                            <p className="text-slate-600">{desc}</p>
                        </div>
                    ))}
                </section>

                <section className="mt-16 rounded-[2rem] border border-slate-200 bg-slate-50 p-10 md:p-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">Want to Be Our Next Success Story?</h2>
                    <p className="text-slate-600 mb-7 max-w-2xl mx-auto">
                        Book a free guidance call and get a realistic plan to pass in your preferred timeline.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                        <a href="tel:+448001234567" className="rounded-full bg-slate-900 px-7 py-3 font-semibold text-white">Call Our Team</a>
                        <a href="https://wa.me/447777777777" className="rounded-full bg-green-600 px-7 py-3 font-semibold text-white">WhatsApp Now</a>
                    </div>
                </section>
            </div>
        </div>
    );
}
