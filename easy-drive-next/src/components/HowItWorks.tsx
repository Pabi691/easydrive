"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { MousePointerClick, CalendarCheck, Flag, ArrowRight } from "lucide-react";

const steps = [
    {
        num: "01",
        title: "Choose Your Course",
        description: "Browse our tailored learning packages and pick the one that fits your schedule — weekly lessons or a crash course.",
        icon: <MousePointerClick size={24} className="text-accent" />,
        color: "bg-orange-50 border-orange-100",
    },
    {
        num: "02",
        title: "Book Fast-Track Test",
        description: "We handle the DVSA booking, finding cancellations and fast-tracking your practical test dates to save months.",
        icon: <CalendarCheck size={24} className="text-blue-500" />,
        color: "bg-blue-50 border-blue-100",
    },
    {
        num: "03",
        title: "Learn & Pass",
        description: "Learn with highly rated, DVSA-approved instructors in premium modern cars until you pass with confidence.",
        icon: <Flag size={24} className="text-emerald-500" />,
        color: "bg-emerald-50 border-emerald-100",
    },
];

export default function HowItWorks() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 80%", "end 40%"]
    });

    return (
        <section className="py-24 bg-gradient-to-b from-slate-50/80 to-white relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-sm font-bold tracking-widest uppercase mb-4"
                    >
                        How It Works
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-5xl font-extrabold tracking-tight text-accent mb-5 leading-[1.1]"
                    >
                        Three Steps to Your Licence
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg text-slate-500 leading-relaxed"
                    >
                        A streamlined process designed to get you licensed as quickly and safely as possible.
                    </motion.p>
                </div>

                <div ref={containerRef} className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-6 relative">
                        {/* Connecting line (desktop) */}
                        <div className="hidden md:block absolute top-20 left-[18%] right-[18%] h-[2px] bg-slate-100 z-0">
                            <motion.div
                                style={{ scaleX: scrollYProgress }}
                                className="h-full bg-gradient-to-r from-accent via-blue-400 to-emerald-400 origin-left"
                            />
                        </div>

                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: idx * 0.15 }}
                                className="relative z-10 text-center"
                            >
                                {/* Step circle */}
                                <div className="mx-auto mb-6 relative">
                                    <div className={`w-16 h-16 ${step.color} border rounded-2xl flex items-center justify-center mx-auto shadow-sm`}>
                                        {step.icon}
                                    </div>
                                </div>

                                {/* Card */}
                                <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-[0_2px_20px_-6px_rgba(15,23,42,0.08)] hover:shadow-lg transition-shadow">
                                    <h3 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
