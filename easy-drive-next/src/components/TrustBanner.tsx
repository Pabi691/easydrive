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
    { text: "Experienced Instructors", emoji: "🎯" }
];

export default function TrustBanner() {
    const doubled = [...badges, ...badges];
    return (
        <section className="py-5 overflow-hidden relative"
            style={{ background: "linear-gradient(180deg, #fff7f2 0%, #fef2ea 100%)" }}
        >
            {/* Top accent line */}
            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF6B2C]/20 to-transparent" />

            <div className="relative">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="flex gap-8 whitespace-nowrap"
                >
                    {doubled.map((badge, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 px-1">
                            <span className="text-lg">{badge.emoji}</span>
                            <span className="text-sm font-semibold text-slate-700 tracking-wide">{badge.text}</span>
                            <span className="text-slate-300 mx-2">•</span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF6B2C]/15 to-transparent" />
        </section>
    );
}
