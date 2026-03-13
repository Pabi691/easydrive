"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
    { value: 5000, suffix: "+", label: "Happy Students", color: "text-accent" },
    { value: 92, suffix: "%", label: "First-Time Pass Rate", color: "text-emerald-500" },
    { value: 4.9, suffix: "★", label: "Google Rating", color: "text-amber-500", decimals: 1 },
    { value: 15, suffix: "+", label: "Years Experience", color: "text-blue-500" },
];

function AnimatedCounter({ value, suffix, decimals = 0 }: { value: number; suffix: string; decimals?: number }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (!isInView) return;
        const duration = 2000;
        const start = Date.now();
        const step = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(eased * value);
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [isInView, value]);

    return (
        <span ref={ref}>
            {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
            {suffix}
        </span>
    );
}

export default function Stats() {
    return (
        <section className="py-16 relative overflow-hidden">
            {/* Vibrant gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 -z-10" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(255,107,44,0.15)_0%,_transparent_50%)] -z-10" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(59,130,246,0.12)_0%,_transparent_50%)] -z-10" />

            {/* Accent lines */}
            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            className="text-center"
                        >
                            <div className={`text-4xl md:text-5xl font-extrabold ${stat.color} mb-2 font-[family-name:var(--font-heading)] tracking-tight`}>
                                <AnimatedCounter value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                            </div>
                            <p className="text-sm text-slate-400 font-medium tracking-wide uppercase">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
