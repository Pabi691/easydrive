import { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { FaCar, FaGears, FaGaugeHigh, FaAward, FaCircleCheck, FaArrowRight, FaPhone, FaWhatsapp } from "react-icons/fa6";
import { courses } from "@/data/courses";

export const metadata: Metadata = {
    title: "Our Services",
    description: "Explore our driving services including automatic, manual, intensive lessons and Pass Plus certification.",
};

const iconMap: Record<string, ReactNode> = {
    automatic: <FaCar className="text-3xl" />,
    manual: <FaGears className="text-3xl" />,
    intensive: <FaGaugeHigh className="text-3xl" />,
    "pass-plus": <FaAward className="text-3xl" />,
};

export default function ServicesPage() {
    return (
        <div className="pt-32 pb-24 bg-white relative overflow-hidden">
            <div className="absolute -top-20 left-0 h-96 w-96 rounded-full bg-orange-100/60 blur-3xl -z-10" />
            <div className="absolute top-20 right-0 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl -z-10" />

            <section className="container mx-auto px-6 md:px-12">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="font-bold text-sm tracking-wider uppercase mb-4 block">
                        What We Offer
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-accent mb-6 leading-[1.05]">
                        Driving Services Built For Every Learner
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                        Choose the path that matches your confidence, schedule, and target test date.
                    </p>
                </div>

                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900">
                        Choose Your Perfect Course
                    </h2>
                    <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
                        Every learner is different. We offer four distinct service paths to match your experience, goals, and timeline.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {courses.map((course) => (
                        <div
                            key={course.title}
                            className="liquid-glass rounded-3xl overflow-hidden border border-white/70"
                        >
                            <div className="h-44 relative">
                                <img src={course.image} alt={course.title} className="h-full w-full object-cover" />
                                <div className={`absolute inset-x-0 top-0 h-2 bg-gradient-to-r ${course.gradient}`} />
                            </div>
                            <div className="p-8">
                                <div className={`w-14 h-14 bg-gradient-to-br ${course.gradient} rounded-xl flex items-center justify-center text-white mb-5`}>
                                    {iconMap[course.slug]}
                                </div>
                                <h3 className="text-2xl font-bold mb-3 text-slate-900">{course.title}</h3>
                                <p className="text-slate-600 leading-relaxed mb-5">{course.summary}</p>
                                <ul className="space-y-2">
                                    {course.highlights.slice(0, 4).map((f) => (
                                        <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                                            <FaCircleCheck className="text-green-500 flex-shrink-0" /> {f}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-6 flex flex-wrap gap-3">
                                    <Link
                                        href={`/services/${course.slug}`}
                                        className={`inline-flex items-center gap-2 bg-gradient-to-r ${course.gradient} text-white px-6 py-2.5 rounded-full text-sm font-bold hover:shadow-lg transition-all`}
                                    >
                                        Course Details <FaArrowRight />
                                    </Link>
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition-colors"
                                    >
                                        Enquire Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-20 bg-gradient-to-b from-blue-50/50 via-white to-orange-50/40">
                <div className="container mx-auto px-6 md:px-12 text-center">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-accent mb-14">
                        How Our Process Works
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { step: "1", title: "Assessment", desc: "We evaluate your driving experience level and recommend the perfect package." },
                            { step: "2", title: "Fast-Track Setup", desc: "Our team secures your DVSA practical test date, bypassing standard queues." },
                            { step: "3", title: "Drive & Pass", desc: "Complete your condensed lessons and pass your test with total confidence." },
                        ].map((s) => (
                            <div key={s.step} className="glass-card p-8 text-left">
                                <div className="w-14 h-14 bg-gradient-to-br from-brand-orange to-orange-600 text-white rounded-full flex items-center justify-center text-xl font-extrabold mb-5">
                                    {s.step}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{s.title}</h3>
                                <p className="text-slate-600">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="max-w-4xl mx-auto px-6 md:px-12">
                    <div className="bg-orange-50/50 border border-orange-100 rounded-3xl p-10 md:p-14 text-center text-slate-900 shadow-sm">
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-accent">Ready to Start Your Engines?</h2>
                        <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto">Don&apos;t wait months to hit the road. Secure your dates today and join thousands of successful Easy-Drive students.</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/contact" className="bg-accent text-white px-8 py-3.5 rounded-full font-bold hover:shadow-xl transition-all">
                                Contact Us
                            </Link>
                            <a href="tel:07777777777" className="bg-white text-slate-800 border border-slate-200 px-8 py-3.5 rounded-full font-bold hover:bg-slate-50 transition-all flex items-center gap-2 shadow-sm">
                                <FaPhone className="text-accent" /> 07777777777
                            </a>
                            <a href="https://wa.me/447777777777" className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-8 py-3.5 rounded-full font-bold hover:bg-emerald-100 transition-all flex items-center gap-2">
                                <FaWhatsapp size={18} /> WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-slate-50 relative">
                <div className="relative max-w-5xl mx-auto px-6 md:px-12">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-accent">Common Questions Before You Book</h2>
                        <p className="text-slate-500">Short answers to the most common learner questions.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            ["How many lessons do I need?", "Most learners pass between 35-50 hours, but we tailor your plan after your first assessment."],
                            ["Can I switch from manual to automatic?", "Yes. We can switch your training plan anytime if your goals or confidence level changes."],
                            ["Do you help with test booking?", "Yes. Intensive learners get fast-track booking support and cancellation monitoring."],
                            ["Do you offer weekend lessons?", "Yes. We run weekday evenings and weekend slots across major service areas."],
                        ].map(([q, a]) => (
                            <div key={q} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_2px_10px_-4px_rgba(15,23,42,0.06)]">
                                <h3 className="text-lg font-bold text-slate-900 mb-2">{q}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
