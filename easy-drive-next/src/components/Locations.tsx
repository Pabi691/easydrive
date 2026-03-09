"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import dynamic from "next/dynamic";

const cities = [
    "London", "Manchester", "Birmingham", "Leeds", "Liverpool", "Bristol", "Brighton"
];

const CityMap = dynamic(() => import("./CityMap"), {
    ssr: false,
    loading: () => (
        <div className="h-full w-full animate-pulse bg-slate-100" />
    ),
});

export default function Locations() {
    return (
        <section id="areas" className="py-28 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Content & City Pills */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="lg:w-1/2"
                    >
                        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.05]">
                            Driving Lessons <br /> <span className="text-slate-400">Near You</span>
                        </h2>
                        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-lg leading-relaxed">
                            Our DVSA-approved driving instructors cover major cities across the UK. Select your city to find an instructor near you and start your driving journey today.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            {cities.map((city, idx) => (
                                <motion.button
                                    key={city}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                                    className="flex items-center gap-2 px-6 py-3 rounded-full border border-slate-200 bg-white/90 text-slate-700 font-semibold hover:bg-slate-900 hover:text-white hover:border-slate-900 shadow-sm transition-colors group"
                                >
                                    <MapPin size={18} className="text-slate-400 group-hover:text-white transition-colors" />
                                    {city}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>

                    {/* UK Map Illustration */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:w-1/2 relative flex justify-center"
                    >
                        <div className="relative w-full max-w-md aspect-square rounded-[3rem] bg-white border border-slate-200 shadow-xl shadow-slate-200/40 overflow-hidden group">
                            <CityMap />

                            <div className="absolute bottom-4 left-4 right-4 z-10 rounded-2xl bg-white/90 backdrop-blur-md border border-white p-3 shadow-md">
                                <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-xs font-semibold text-slate-700">
                                    {cities.map((city) => (
                                        <div key={city} className="flex items-center gap-1.5">
                                            <span className="h-2 w-2 rounded-full bg-red-500" />
                                            {city}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
