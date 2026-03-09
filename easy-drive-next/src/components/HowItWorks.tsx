"use client";

import { motion } from "framer-motion";
import { MousePointerClick, CalendarCheck, Flag } from "lucide-react";

const steps = [
    {
        title: "Choose Your Driving Course",
        description: "Browse our tailored learning packages and pick the one that fits your schedule, whether it's weekly lessons or an intensive crash course.",
        icon: <MousePointerClick size={28} className="text-slate-900" />,
        image: "/images/hero.png",
    },
    {
        title: "Book Fast-Track Test",
        description: "We handle the DVSA booking system for you, finding cancellations and fast-tracking your practical test dates to save you months of waiting.",
        icon: <CalendarCheck size={28} className="text-slate-900" />,
        image: "/images/success.png",
    },
    {
        title: "Learn & Pass Confidently",
        description: "Learn with highly rated, DVSA-approved instructors in premium modern cars until you are ready and confident to pass your test.",
        icon: <Flag size={28} className="text-slate-900" />,
        image: "/images/hero_driving.png",
    },
];

export default function HowItWorks() {
    return (
        <section className="py-28 bg-slate-50/80 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50/65 via-white to-orange-50/55" />
            <div className="absolute inset-0 bg-[url('/images/hero_driving.png')] bg-cover bg-center opacity-[0.13]" />
            <div className="absolute left-0 top-14 h-48 w-48 rounded-full bg-orange-100/60 blur-3xl" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.05]"
                    >
                        How It Works
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-lg md:text-xl text-slate-600"
                    >
                        A simple, streamlined process designed to get you behind the wheel and licensed as quickly and safely as possible.
                    </motion.p>
                </div>

                <div className="max-w-5xl mx-auto relative cursor-default">
                    {/* Animated Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[45px] left-[10%] right-[10%] h-[2px] bg-slate-100">
                        <motion.div
                            initial={{ width: "0%" }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
                            className="absolute top-0 left-0 h-full bg-slate-900 origin-left"
                        />
                    </div>

                    <div className="grid md:grid-cols-3 gap-10 md:gap-8 relative z-10">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: idx * 0.2 }}
                                className="liquid-glass flex flex-col items-center text-center group p-7 md:p-8 rounded-3xl"
                            >
                                <div className="mb-6 h-28 w-full overflow-hidden rounded-2xl border border-white/70">
                                    <img src={step.image} alt={step.title} className="h-full w-full object-cover" />
                                </div>
                                {/* Step Node */}
                                <div className="relative mb-8">
                                    <div className="w-24 h-24 bg-white rounded-full border-4 border-white shadow-xl shadow-slate-200/50 flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300">
                                        {step.icon}
                                    </div>
                                    {/* Step Number Badge */}
                                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md z-20">
                                        {idx + 1}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-tight">{step.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed max-w-sm">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
