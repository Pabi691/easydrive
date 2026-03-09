"use client";

import { motion } from "framer-motion";
import { Settings, Gamepad2, Zap, ShieldCheck, ArrowRight } from "lucide-react";

const courses = [
    {
        title: "Automatic Lessons",
        description: "Learn faster without the hassle of gears and clutch control. Perfect for quick passes and city driving.",
        icon: <Gamepad2 size={24} className="text-blue-500" />,
        image: "/images/hero.png",
        color: "bg-blue-50 text-blue-600",
    },
    {
        title: "Manual Lessons",
        description: "The traditional way. Gain a full license that allows you to drive any car, anywhere in the world.",
        icon: <Settings size={24} className="text-slate-700" />,
        image: "/images/hero_driving.png",
        color: "bg-slate-100 text-slate-700",
    },
    {
        title: "Intensive Crash Course",
        description: "Pass your test in just 1 to 4 weeks with intensive daily driving sessions. Fast-track test included.",
        icon: <Zap size={24} className="text-purple-500" />,
        image: "/images/success.png",
        color: "bg-purple-50 text-purple-600",
    },
    {
        title: "Pass Plus Course",
        description: "Build confidence after passing. Learn motorway driving, night driving, and advanced hazard perception.",
        icon: <ShieldCheck size={24} className="text-green-500" />,
        image: "/images/isometric_3d.png",
        color: "bg-green-50 text-green-600",
    },
];

import { Variants } from "framer-motion";

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.15 }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Courses() {
    return (
        <section id="courses" className="py-28 bg-gradient-to-b from-white via-blue-50/45 to-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/hero.png')] bg-cover bg-center opacity-[0.14]" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-blue-50/70 to-white/90" />
            <div className="absolute inset-x-0 top-6 mx-auto h-44 w-[80%] max-w-6xl rounded-full bg-blue-50/50 blur-3xl -z-10" />
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-18">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.05]"
                    >
                        Driving Packages <br /> <span className="text-slate-400">Tailored For You</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-lg md:text-xl text-slate-600"
                    >
                        Choose the clear path to passing your practical driving test. From beginner lessons to intensive fast-track courses.
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-7"
                >
                    {courses.map((course, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            whileHover={{ y: -8 }}
                            className="liquid-glass overflow-hidden group flex flex-col h-full transition-all duration-300 rounded-3xl"
                        >
                            {/* Image Header */}
                            <div className="h-48 relative overflow-hidden bg-slate-100">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-sm border border-white/70">
                                    {course.icon}
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-2xl font-bold text-slate-900 mb-3 leading-tight">{course.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                                    {course.description}
                                </p>
                                <button className="flex items-center gap-2 text-sm font-semibold text-slate-900 group/btn mt-auto">
                                    Explore Course
                                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
