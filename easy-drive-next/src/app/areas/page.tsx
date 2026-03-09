"use client";

import { motion } from "framer-motion";
import Locations from "@/components/Locations";

export default function AreasPage() {
    return (
        <div className="pt-32 pb-24 bg-white relative overflow-hidden">
            <div className="absolute -top-8 right-0 h-80 w-80 rounded-full bg-green-100/70 blur-3xl -z-10" />
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-10"
                >
                    <span className="text-brand-orange font-bold text-sm tracking-wider uppercase mb-4 block">Locations</span>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.05]">
                        Where We Teach
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-6">
                        We have a growing network of DVSA-approved driving instructors across the UK. Discover if we cover your area below.
                    </p>
                </motion.div>

                {/* Reusing existing component for consistency */}
                <Locations />

                <section className="mt-16 grid md:grid-cols-3 gap-6">
                    {[
                        ["Urban Lessons", "Perfect routes for city confidence, roundabouts, and busy junctions."],
                        ["Suburban Lessons", "Balanced roads for building routine skills with lower pressure."],
                        ["Test-Route Practice", "Focused sessions near local test centers to improve pass probability."],
                    ].map(([title, desc], i) => (
                        <div key={title} className={`rounded-3xl border border-slate-200 p-8 ${i === 1 ? "bg-blue-50" : i === 2 ? "bg-orange-50" : "bg-white"}`}>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">{title}</h3>
                            <p className="text-slate-600">{desc}</p>
                        </div>
                    ))}
                </section>

                <section className="mt-16 rounded-[2rem] bg-[url('https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-slate-900/70" />
                    <div className="relative p-10 md:p-14 text-white">
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Can&apos;t See Your Area Listed?</h2>
                        <p className="text-slate-200 max-w-2xl mb-7">
                            We frequently add instructors in new locations. Message us and we&apos;ll confirm availability or waitlist your area.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <a href="https://wa.me/447777777777" className="rounded-full bg-green-600 px-7 py-3 font-semibold text-white">WhatsApp Availability</a>
                            <a href="tel:+448001234567" className="rounded-full bg-white px-7 py-3 font-semibold text-slate-900">Call Support</a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
