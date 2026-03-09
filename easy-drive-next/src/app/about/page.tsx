"use client";

import { motion } from "framer-motion";
import { CheckCircle, Award, ShieldCheck, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="pt-32 pb-24 bg-white relative overflow-hidden">
            <div className="absolute -top-16 -left-16 h-72 w-72 rounded-full bg-orange-100/70 blur-3xl -z-10" />
            <div className="absolute top-20 right-0 h-96 w-96 rounded-full bg-blue-100/70 blur-3xl -z-10" />
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <span className="text-brand-orange font-bold text-sm tracking-wider uppercase mb-4 block">About Us</span>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.05]">
                        Driving Excellence Across the UK
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                        Welcome to Easy-Drive.UK. We believe learning to drive should be safe, structured, and enjoyable. Our DVSA-approved instructors are dedicated to helping you pass your test faster and become a confident driver for life.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3] bg-slate-100 group"
                    >
                        <Image
                            src="/images/hero_driving.png"
                            alt="Student learning to drive"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Mission</h2>
                            <p className="text-slate-500 leading-relaxed text-lg">
                                To provide the highest standard of driving tuition through modern vehicles, expert instructors, and a curriculum designed not just for passing a test, but for lifelong safe driving.
                            </p>
                        </div>

                        <ul className="space-y-6">
                            {[
                                "Fully qualified DVSA-approved driving instructors.",
                                "High-quality modern dual-control tuition vehicles.",
                                "Fast-track practical test booking service.",
                                "Tailored courses to suit total beginners to advanced drivers."
                            ].map((text, i) => (
                                <li key={i} className="flex gap-4 items-start">
                                    <div className="bg-orange-50 p-2 rounded-full text-brand-orange">
                                        <CheckCircle size={20} />
                                    </div>
                                    <span className="text-slate-700 font-medium">{text}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                <section className="mb-20 rounded-[2rem] bg-gradient-to-r from-slate-900 to-slate-800 p-10 md:p-14 text-white">
                    <div className="grid gap-8 md:grid-cols-4">
                        {[
                            { icon: <Users size={24} />, title: "5000+", subtitle: "Students Passed" },
                            { icon: <Award size={24} />, title: "4.9/5", subtitle: "Average Rating" },
                            { icon: <ShieldCheck size={24} />, title: "92%", subtitle: "First-Time Pass Rate" },
                            { icon: <CheckCircle size={24} />, title: "7 Days", subtitle: "Support Availability" },
                        ].map((item) => (
                            <div key={item.subtitle} className="rounded-2xl border border-white/15 bg-white/10 p-6">
                                <div className="mb-4 text-orange-300">{item.icon}</div>
                                <p className="text-3xl font-extrabold">{item.title}</p>
                                <p className="text-sm text-slate-200">{item.subtitle}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-20 grid gap-8 md:grid-cols-3">
                    {[
                        {
                            title: "Friendly Instructors",
                            desc: "Patient, supportive coaching that helps nervous learners build confidence quickly.",
                            bg: "bg-blue-50",
                        },
                        {
                            title: "Modern Tuition Cars",
                            desc: "Dual-control vehicles with easy handling and clean interiors for comfortable lessons.",
                            bg: "bg-orange-50",
                        },
                        {
                            title: "Flexible Scheduling",
                            desc: "Morning, evening, and weekend slots built around your work or university routine.",
                            bg: "bg-green-50",
                        },
                    ].map((item) => (
                        <div key={item.title} className={`rounded-3xl border border-slate-200 p-8 ${item.bg}`}>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
                            <p className="text-slate-600">{item.desc}</p>
                        </div>
                    ))}
                </section>

                <section className="rounded-[2rem] border border-slate-200 bg-white p-10 md:p-14 text-center shadow-sm">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Ready to Learn with Easy-Drive?</h2>
                    <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
                        Speak to our team for a personalized plan based on your goals, location, and test timeline.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                        <Link href="/contact" className="rounded-full bg-brand-orange px-7 py-3 font-semibold text-white hover:bg-orange-600 transition-colors">Book Your Plan</Link>
                        <a href="https://wa.me/447777777777" className="rounded-full border border-green-300 bg-green-50 px-7 py-3 font-semibold text-green-700 hover:bg-green-100 transition-colors">WhatsApp Us</a>
                    </div>
                </section>
            </div>
        </div>
    );
}
