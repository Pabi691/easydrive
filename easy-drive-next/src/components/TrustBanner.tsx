"use client";

import { motion } from "framer-motion";

const badges = [
    { text: "DVSA Approved", emoji: "🏆" },
    { text: "92% Pass Rate", emoji: "✅" },
    { text: "5,000+ Students", emoji: "🎓" },
    { text: "Modern Vehicles", emoji: "🚗" },
    { text: "Fast-Track Tests", emoji: "⚡" },
    { text: "4.9★ Google Rating", emoji: "⭐" },
    { text: "Flexible Scheduling", emoji: "📅" },
    { text: "Female Instructors", emoji: "👩‍🏫" },
];

export default function TrustBanner() {
    const doubled = [...badges, ...badges];
    return (
        <section className="py-5 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 overflow-hidden relative">
            {/* Colored accent line top */}
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-60" />
            
            <div className="relative">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="flex gap-8 whitespace-nowrap"
                >
                    {doubled.map((badge, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 px-1">
                            <span className="text-lg">{badge.emoji}</span>
                            <span className="text-sm font-semibold text-white/80 tracking-wide">{badge.text}</span>
                            <span className="text-slate-600 mx-2">•</span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Colored accent line bottom */}
            <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-40" />
        </section>
    );
}
