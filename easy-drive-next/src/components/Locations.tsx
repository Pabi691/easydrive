"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";

const cities = [
    "London", "Manchester", "Birmingham", "Leeds", "Liverpool", "Bristol", "Brighton"
];

const CityMap = dynamic(() => import("./CityMap"), {
    ssr: false,
    loading: () => (
        <div className="h-full w-full animate-pulse bg-slate-100 rounded-2xl" />
    ),
});

export default function Locations() {
    return (
        <section id="areas" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-blue-50/50 blur-[100px] -z-10" />

            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col lg:flex-row items-center gap-14">

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.5 }}
                        className="lg:w-1/2"
                    >
                        <p className="text-sm font-bold tracking-widest text-accent uppercase mb-4">Coverage Areas</p>
                        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-5 leading-[1.1]">
                            Lessons{" "}
                            <span className="text-gradient-cool">Near You</span>
                        </h2>
                        <p className="text-lg text-slate-500 mb-8 max-w-md leading-relaxed">
                            Our DVSA-approved instructors cover major cities across the UK. Find an instructor in your area today.
                        </p>

                        <div className="flex flex-wrap gap-2.5 mb-8">
                            {cities.map((city, idx) => (
                                <motion.button
                                    key={city}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: idx * 0.06 }}
                                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-200 bg-white text-slate-700 font-medium text-sm hover:bg-slate-900 hover:text-white hover:border-slate-900 shadow-sm transition-all group"
                                >
                                    <MapPin size={13} className="text-slate-400 group-hover:text-white transition-colors" />
                                    {city}
                                </motion.button>
                            ))}
                        </div>

                        <Link
                            href="/areas"
                            className="inline-flex items-center gap-2 text-sm font-bold text-accent group"
                        >
                            View all areas
                            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                    </motion.div>

                    {/* Map */}
                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:w-1/2 relative flex justify-center"
                    >
                        <div className="relative w-full max-w-md aspect-square rounded-2xl bg-white border border-slate-200 shadow-xl shadow-slate-200/40 overflow-hidden">
                            <CityMap />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
