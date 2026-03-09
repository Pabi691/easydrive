"use client";

import { motion } from "framer-motion";
import { CheckCircle, Award, Star, FastForward, PhoneCall, MessageCircle } from "lucide-react";

export default function Hero() {
    const stats = [
        { icon: <CheckCircle className="text-green-500" size={24} />, text: "92% Pass Rate" },
        { icon: <Award className="text-blue-500" size={24} />, text: "5000+ Passed" },
        { icon: <Star className="text-yellow-500" size={24} />, text: "4.9 Google Rating" },
        { icon: <FastForward className="text-purple-500" size={24} />, text: "Fast-Track Booking" },
    ];

    return (
        <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-36 overflow-hidden bg-gradient-to-b from-orange-50/70 via-white to-blue-50/35">
            <div className="absolute inset-0 bg-white -z-10" />
            <div className="absolute inset-0 bg-[url('/images/hero_driving.png')] bg-cover bg-center opacity-[0.16] -z-10" />
            <div className="absolute -top-20 -left-24 h-80 w-80 rounded-full bg-orange-100/60 blur-3xl -z-10" />
            <div className="absolute top-10 right-0 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl -z-10" />

            <div className="container mx-auto px-6 md:px-12">
                <div className="grid lg:grid-cols-2 gap-14 lg:gap-10 items-center">

                    {/* Left Side: Copy & Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-2xl"
                    >
                        <p className="mb-4 inline-flex rounded-full border border-blue-200 bg-blue-50/80 px-4 py-1.5 text-xs font-semibold tracking-[0.14em] text-blue-700 uppercase">
                            Premium DVSA Driving School
                        </p>
                        <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.02] mb-7">
                            Pass Your Driving Test
                            <span className="block bg-gradient-to-r from-slate-700 via-slate-500 to-slate-400 bg-clip-text text-transparent">Faster, Smarter</span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
                            Learn from DVSA-approved instructors and pass your driving test quickly with our intensive courses designed for modern learners.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-16">
                            <button className="bg-gradient-to-r from-brand-orange to-orange-600 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:-translate-y-0.5 transition-all shadow-[0_16px_34px_-18px_rgba(243,112,33,.78)] active:scale-95">
                                View Courses
                            </button>
                            <button className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-2xl text-lg font-bold hover:bg-slate-50 transition-all active:scale-95 shadow-sm">
                                Book Lesson
                            </button>
                        </div>

                        <div className="mb-10 flex flex-wrap items-center gap-3">
                            <a href="tel:+448001234567" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 transition-colors">
                                <PhoneCall size={16} className="text-brand-orange" />
                                Call 0800 123 4567
                            </a>
                            <a href="https://wa.me/447777777777" className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-5 py-2.5 text-sm font-semibold text-green-700 shadow-sm hover:bg-green-100 transition-colors">
                                <MessageCircle size={16} />
                                WhatsApp Support
                            </a>
                        </div>

                        {/* Floating Stats grid below buttons */}
                        <div className="grid grid-cols-2 gap-4">
                            {stats.map((stat, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                                    className="liquid-glass flex items-center gap-3 p-4 rounded-2xl"
                                >
                                    <div className="bg-white p-2 rounded-xl shadow-sm border border-slate-100">
                                        {stat.icon}
                                    </div>
                                    <span className="font-medium text-slate-700 text-sm">
                                        {stat.text}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Side: Image & UI Elements */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="relative lg:ml-10"
                    >
                        {/* Main Image Base */}
                        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5] md:aspect-square lg:aspect-[4/5] w-full max-w-lg mx-auto bg-slate-100 group">
                            <img
                                src="/images/hero_driving.png"
                                alt="Student learning to drive"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 border border-white/20 rounded-[2rem] pointer-events-none" />
                        </div>

                        {/* Floating UI Elements */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute -left-8 top-1/4 liquid-glass p-5 rounded-3xl hidden md:flex items-center gap-4 z-10"
                        >
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                <CheckCircle size={24} />
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Status</p>
                                <p className="text-lg font-bold text-slate-900">Passed First Time</p>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                            className="absolute -right-8 bottom-1/4 liquid-glass p-5 rounded-3xl hidden md:flex items-center gap-4 z-10"
                        >
                            <div className="flex -space-x-3">
                                <div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white overflow-hidden">
                                    <img src="https://i.pravatar.cc/100?img=1" alt="Student" />
                                </div>
                                <div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white overflow-hidden">
                                    <img src="https://i.pravatar.cc/100?img=2" alt="Student" />
                                </div>
                                <div className="w-10 h-10 rounded-full bg-slate-900 border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                                    +1k
                                </div>
                            </div>
                            <div>
                                <p className="text-sm font-bold text-slate-900">Happy Drivers</p>
                                <div className="flex text-yellow-500">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
