"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import Reviews from "@/components/Reviews";
import { FaGoogle, FaFacebook, FaStar } from "react-icons/fa6";
import { SiTrustpilot } from "react-icons/si";

export default function ReviewsPage() {
    const ratingSummary = {
        score: "4.9",
        total: "2,150+ total reviews",
        highlight: "Rated excellent across Google, Trustpilot, and Facebook.",
    };

    const platformMap: Record<string, { icon: ReactNode; badge: string }> = {
        Google: {
            icon: <FaGoogle className="text-blue-600" />,
            badge: "bg-blue-50 text-blue-700 border-blue-100",
        },
        Trustpilot: {
            icon: <SiTrustpilot className="text-emerald-600" />,
            badge: "bg-emerald-50 text-emerald-700 border-emerald-100",
        },
        Facebook: {
            icon: <FaFacebook className="text-indigo-600" />,
            badge: "bg-indigo-50 text-indigo-700 border-indigo-100",
        },
    };

    const customerReviews = [
        {
            name: "Ayesha M.",
            rating: 5,
            platform: "Google",
            course: "Automatic Lessons",
            quote: "Instructor was calm and clear. Passed first time after 3 weeks of focused lessons.",
        },
        {
            name: "Daniel R.",
            rating: 5,
            platform: "Trustpilot",
            course: "Intensive Course",
            quote: "Fast-track booking and daily sessions made the difference. Highly professional team.",
        },
        {
            name: "Sophie L.",
            rating: 5,
            platform: "Facebook",
            course: "Pass Plus",
            quote: "Loved the structured lessons and honest feedback. The Pass Plus module was great.",
        },
        {
            name: "Mohsin A.",
            rating: 5,
            platform: "Google",
            course: "Manual Lessons",
            quote: "Great coaching on clutch control and hill starts. I felt test-ready in 4 weeks.",
        },
        {
            name: "Priya N.",
            rating: 4,
            platform: "Trustpilot",
            course: "Automatic Lessons",
            quote: "Clear lesson plan with plenty of mock tests. Friendly instructors and good scheduling.",
        },
        {
            name: "Lewis P.",
            rating: 5,
            platform: "Facebook",
            course: "Intensive Course",
            quote: "Daily lessons, structured plan, and a brilliant instructor. Passed with only 2 minors.",
        },
    ];

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

                <section className="mt-16 rounded-[2rem] border border-slate-200 bg-white p-10 md:p-12">
                    <div className="grid lg:grid-cols-3 gap-10 items-start">
                        <div className="lg:col-span-1">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Customer Reviews & Ratings</h2>
                            <p className="text-slate-600 mb-6">
                                {ratingSummary.highlight}
                            </p>
                            <div className="flex items-center gap-4 mb-5">
                                <div className="text-5xl font-extrabold text-slate-900">{ratingSummary.score}</div>
                                <div>
                                    <div className="flex items-center gap-1 text-yellow-500 mb-1">
                                        {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                                    </div>
                                    <p className="text-sm text-slate-600">{ratingSummary.total}</p>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {Object.entries(platformMap).map(([label, meta]) => (
                                    <span
                                        key={label}
                                        className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold ${meta.badge}`}
                                    >
                                        {meta.icon}
                                        {label}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="lg:col-span-2 grid gap-6 md:grid-cols-2">
                            {customerReviews.map((review) => {
                                const platform = platformMap[review.platform];
                                return (
                                    <div key={`${review.name}-${review.platform}`} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 flex flex-col h-full">
                                        <div className="flex items-center justify-between mb-3">
                                            <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold ${platform.badge}`}>
                                                {platform.icon}
                                                {review.platform}
                                            </span>
                                            <div className="flex items-center gap-1 text-yellow-500">
                                                {[...Array(review.rating)].map((_, i) => <FaStar key={i} />)}
                                            </div>
                                        </div>
                                        <p className="text-slate-700 text-sm leading-relaxed flex-grow">
                                            &quot;{review.quote}&quot;
                                        </p>
                                        <div className="mt-4 text-xs text-slate-600">
                                            <span className="font-semibold text-slate-900">{review.name}</span> · {review.course}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

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
