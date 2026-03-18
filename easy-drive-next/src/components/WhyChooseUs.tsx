"use client";

import { useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, Gauge, Car, Clock, CreditCard, Heart, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ── Feature data ── */
const features = [
    {
        icon: <ShieldCheck size={28} />,
        title: "DVSA Approved",
        desc: "All instructors are fully DVSA-approved and DBS-checked for your safety.",
        accent: "#10b981",
        accentLight: "rgba(16,185,129,0.08)",
        glowColor: "rgba(16,185,129,0.15)",
        stat: "100%",
        statLabel: "Verified",
    },
    {
        icon: <Gauge size={28} />,
        title: "92% Pass Rate",
        desc: "Our structured teaching method gives you a significantly higher first-time pass rate.",
        accent: "#3b82f6",
        accentLight: "rgba(59,130,246,0.08)",
        glowColor: "rgba(59,130,246,0.15)",
        stat: "92%",
        statLabel: "First-Time",
    },
    {
        icon: <Car size={28} />,
        title: "Premium Vehicles",
        desc: "Learn in dual-control, modern vehicles that are comfortable, safe, and well-maintained.",
        accent: "#8b5cf6",
        accentLight: "rgba(139,92,246,0.08)",
        glowColor: "rgba(139,92,246,0.15)",
        stat: "2024",
        statLabel: "Fleet Year",
    },
    {
        icon: <Clock size={28} />,
        title: "Fast-Track Tests",
        desc: "We find cancellation test slots to get you on the road months sooner than normal.",
        accent: "#f97316",
        accentLight: "rgba(249,115,22,0.08)",
        glowColor: "rgba(249,115,22,0.15)",
        stat: "2x",
        statLabel: "Faster",
    },
    {
        icon: <CreditCard size={28} />,
        title: "Flexible Payments",
        desc: "Pay per lesson or save with course packages. No hidden fees, ever.",
        accent: "#ec4899",
        accentLight: "rgba(236,72,153,0.08)",
        glowColor: "rgba(236,72,153,0.15)",
        stat: "£0",
        statLabel: "Hidden Fees",
    },
    {
        icon: <Heart size={28} />,
        title: "Patient Instructors",
        desc: "Nervous? That's okay. Our instructors are trained to put you completely at ease.",
        accent: "#eab308",
        accentLight: "rgba(234,179,8,0.08)",
        glowColor: "rgba(234,179,8,0.15)",
        stat: "5K+",
        statLabel: "Happy Students",
    },
];

export default function WhyChooseUs() {
    const sectionRef = useRef<HTMLElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
    const headingRef = useRef<HTMLDivElement>(null);

    /* ── 3D Tilt handler ── */
    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>, idx: number) => {
        const card = cardsRef.current[idx];
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;

        gsap.to(card, {
            rotateX, rotateY,
            duration: 0.4,
            ease: "power2.out",
            transformPerspective: 800,
        });

        // Move glow with cursor
        const glow = card.querySelector(".card-glow") as HTMLElement;
        if (glow) {
            glow.style.left = `${x}px`;
            glow.style.top = `${y}px`;
            glow.style.opacity = "1";
        }
    }, []);

    const handleMouseLeave = useCallback((idx: number) => {
        const card = cardsRef.current[idx];
        if (!card) return;
        gsap.to(card, {
            rotateX: 0, rotateY: 0,
            duration: 0.5,
            ease: "power2.out",
        });
        const glow = card.querySelector(".card-glow") as HTMLElement;
        if (glow) glow.style.opacity = "0";
    }, []);

    /* ── GSAP Scroll Animations ── */
    useEffect(() => {
        const ctx = gsap.context(() => {

            // Heading entrance
            if (headingRef.current) {
                gsap.fromTo(headingRef.current.children,
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1, y: 0,
                        duration: 0.7,
                        stagger: 0.12,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: headingRef.current,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        }
                    }
                );
            }

            // Cards — staggered entrance
            cardsRef.current.forEach((card, i) => {
                if (!card) return;
                gsap.fromTo(card,
                    { opacity: 0, y: 60, scale: 0.92 },
                    {
                        opacity: 1, y: 0, scale: 1,
                        duration: 0.65,
                        delay: i * 0.1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 90%",
                            toggleActions: "play none none none",
                        }
                    }
                );

                // Floating icon animation
                const icon = card.querySelector(".feature-icon");
                if (icon) {
                    gsap.to(icon, {
                        y: -4, duration: 2, ease: "sine.inOut",
                        yoyo: true, repeat: -1,
                        delay: i * 0.3,
                    });
                }
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    /* ── The featured card (index 0) ── */
    const featured = features[0];
    const smallCards = features.slice(1);

    return (
        <section ref={sectionRef} className="relative py-28 overflow-hidden"
            style={{ background: "#ffffff" }}
        >

            {/* ═══ BACKGROUND — Light ═══ */}
            <div className="absolute inset-0 -z-10 bg-[url('/images/hero_night_city.png')] bg-cover bg-center opacity-15" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/95 via-white/85 to-white/95" />
            <div className="absolute inset-0 -z-10">
                {/* Soft color washes */}
                <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-orange-50/50 blur-[120px]" />
                <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-blue-50/50 blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">

                {/* ═══ HEADING ═══ */}
                <div ref={headingRef} className="text-center max-w-3xl mx-auto mb-20">
                    <p className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase mb-5 px-4 py-2 rounded-full border border-[#FF6B2C]/20"
                        style={{ background: "rgba(255,107,44,0.06)" }}
                    >
                        <Sparkles size={14} />
                        Why Easy-Drive
                    </p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-accent mb-6 leading-[1.08]">
                        Everything You Need to Pass First Time
                    </h2>
                    <p className="text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
                        We&apos;ve built the most complete driving school experience — here&apos;s why 5,000+ students chose us.
                    </p>
                </div>

                {/* ═══ ASYMMETRIC GRID ═══ */}
                {/* Changing layout to 2 columns: column 1 (1/3 width) and column 2 (2/3 width) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6">

                    {/* ── FEATURED CARD (Left Column) ── */}
                    <div
                        ref={el => { cardsRef.current[0] = el; }}
                        onMouseMove={(e) => handleMouseMove(e, 0)}
                        onMouseLeave={() => handleMouseLeave(0)}
                        className="lg:col-span-4 relative group cursor-pointer flex"
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        <div className="relative w-full h-full rounded-3xl p-8 lg:p-10 overflow-hidden border border-slate-100 transition-shadow duration-500 group-hover:shadow-2xl flex flex-col"
                            style={{
                                background: "rgba(255,255,255,0.9)",
                                backdropFilter: "blur(20px)",
                                WebkitBackdropFilter: "blur(20px)",
                                boxShadow: "0 4px 24px -6px rgba(15,23,42,0.08)",
                            }}
                        >
                            {/* Pointer-following glow */}
                            <div className="card-glow absolute w-56 h-56 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 opacity-0"
                                style={{ background: `radial-gradient(circle, ${featured.glowColor}, transparent 70%)`, filter: "blur(30px)" }}
                            />

                            {/* Highlight sweep */}
                            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"
                                style={{ background: "linear-gradient(90deg, transparent, rgba(0,0,0,0.02), transparent)" }}
                            />

                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase mb-6 px-3 py-1.5 rounded-full w-fit"
                                style={{ color: featured.accent, background: featured.accentLight, border: `1px solid ${featured.accent}22` }}
                            >
                                Featured
                            </div>

                            {/* Icon */}
                            <div className="feature-icon w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg"
                                style={{ background: featured.accent, boxShadow: `0 8px 32px ${featured.glowColor}` }}
                            >
                                {featured.icon}
                            </div>

                            {/* Stat */}
                            <div className="text-5xl lg:text-6xl font-black text-slate-700 absolute top-6 right-8 select-none"
                                style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                                {featured.stat}
                            </div>

                            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3">{featured.title}</h3>
                            <p className="text-slate-500 text-base leading-relaxed mb-8 max-w-sm">{featured.desc}</p>

                            {/* Mini car wireframe illustration */}
                            <div className="mt-auto pt-4">
                                <svg viewBox="0 0 200 40" className="w-48 opacity-15" fill="none">
                                    <path d="M20 30h160c3 0 5-2 5-5v-5c0-2-2-4-4-4h-30l-10-10h-60l-14 10H20c-3 0-5 2-5 4v5c0 3 2 5 5 5z"
                                        stroke={featured.accent} strokeWidth="1.5" fill="none" />
                                    <circle cx="55" cy="32" r="6" stroke={featured.accent} strokeWidth="1.5" className="featured-wheel" style={{ transformOrigin: "55px 32px" }} />
                                    <circle cx="155" cy="32" r="6" stroke={featured.accent} strokeWidth="1.5" className="featured-wheel" style={{ transformOrigin: "155px 32px" }} />
                                </svg>
                            </div>

                            {/* Bottom accent line */}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px]"
                                style={{ background: `linear-gradient(90deg, transparent, ${featured.accent}33, transparent)` }}
                            />
                        </div>
                    </div>

                    {/* ── SMALL CARDS CONTAINER (Right Column) ── */}
                    <div className="lg:col-span-8 flex flex-col gap-5 lg:gap-6">
                        {/* Top Row: 3 cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-6">
                            {smallCards.slice(0, 3).map((feature, i) => {
                                const realIdx = i + 1;
                                return (
                                    <div
                                        key={realIdx}
                                        ref={el => { cardsRef.current[realIdx] = el; }}
                                        onMouseMove={(e) => handleMouseMove(e, realIdx)}
                                        onMouseLeave={() => handleMouseLeave(realIdx)}
                                        className="relative group cursor-pointer flex"
                                        style={{ transformStyle: "preserve-3d" }}
                                    >
                                        <div className="relative w-full h-full rounded-2xl p-6 overflow-hidden border border-slate-100 transition-all duration-500 group-hover:shadow-xl group-hover:border-slate-200 flex flex-col"
                                            style={{
                                                background: "rgba(255,255,255,0.9)",
                                                backdropFilter: "blur(16px)",
                                                WebkitBackdropFilter: "blur(16px)",
                                                boxShadow: "0 2px 16px -4px rgba(15,23,42,0.06)",
                                            }}
                                        >
                                            {/* Pointer-following glow */}
                                            <div className="card-glow absolute w-40 h-40 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 opacity-0"
                                                style={{ background: `radial-gradient(circle, ${feature.glowColor}, transparent 70%)`, filter: "blur(25px)" }}
                                            />

                                            {/* Highlight sweep */}
                                            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"
                                                style={{ background: "linear-gradient(90deg, transparent, rgba(0,0,0,0.02), transparent)" }}
                                            />

                                            {/* Top row: icon + stat */}
                                            <div className="flex items-start justify-between mb-4">
                                                <div className="feature-icon w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg transition-transform duration-300 group-hover:scale-110"
                                                    style={{ background: feature.accent, boxShadow: `0 6px 24px ${feature.glowColor}` }}
                                                >
                                                    {feature.icon}
                                                </div>
                                                <div className="text-right">
                                                    <div className="text-2xl font-bold text-slate-800" style={{ fontFamily: "'Inter', sans-serif" }}>
                                                        {feature.stat}
                                                    </div>
                                                    <div className="text-[10px] font-semibold tracking-wider uppercase text-slate-400">
                                                        {feature.statLabel}
                                                    </div>
                                                </div>
                                            </div>

                                            <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-slate-800 transition-colors">
                                                {feature.title}
                                            </h3>
                                            <p className="text-slate-500 text-sm leading-relaxed">
                                                {feature.desc}
                                            </p>

                                            {/* Bottom accent line */}
                                            <div className="absolute bottom-0 left-0 w-0 h-[2px] group-hover:w-full transition-all duration-700 mt-auto"
                                                style={{ background: `linear-gradient(90deg, ${feature.accent}, transparent)` }}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        {/* Bottom Row: 2 cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
                            {smallCards.slice(3, 5).map((feature, i) => {
                                const realIdx = i + 4;
                                return (
                                    <div
                                        key={realIdx}
                                        ref={el => { cardsRef.current[realIdx] = el; }}
                                        onMouseMove={(e) => handleMouseMove(e, realIdx)}
                                        onMouseLeave={() => handleMouseLeave(realIdx)}
                                        className="relative group cursor-pointer flex"
                                        style={{ transformStyle: "preserve-3d" }}
                                    >
                                        <div className="relative w-full h-full rounded-2xl p-6 overflow-hidden border border-slate-100 transition-all duration-500 group-hover:shadow-xl group-hover:border-slate-200 flex flex-col"
                                            style={{
                                                background: "rgba(255,255,255,0.9)",
                                                backdropFilter: "blur(16px)",
                                                WebkitBackdropFilter: "blur(16px)",
                                                boxShadow: "0 2px 16px -4px rgba(15,23,42,0.06)",
                                            }}
                                        >
                                            {/* Pointer-following glow */}
                                            <div className="card-glow absolute w-40 h-40 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 opacity-0"
                                                style={{ background: `radial-gradient(circle, ${feature.glowColor}, transparent 70%)`, filter: "blur(25px)" }}
                                            />

                                            {/* Highlight sweep */}
                                            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"
                                                style={{ background: "linear-gradient(90deg, transparent, rgba(0,0,0,0.02), transparent)" }}
                                            />

                                            {/* Top row: icon + stat */}
                                            <div className="flex items-start justify-between mb-4">
                                                <div className="feature-icon w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg transition-transform duration-300 group-hover:scale-110"
                                                    style={{ background: feature.accent, boxShadow: `0 6px 24px ${feature.glowColor}` }}
                                                >
                                                    {feature.icon}
                                                </div>
                                                <div className="text-right">
                                                    <div className="text-2xl font-bold text-slate-800" style={{ fontFamily: "'Inter', sans-serif" }}>
                                                        {feature.stat}
                                                    </div>
                                                    <div className="text-[10px] font-semibold tracking-wider uppercase text-slate-400">
                                                        {feature.statLabel}
                                                    </div>
                                                </div>
                                            </div>

                                            <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-slate-800 transition-colors">
                                                {feature.title}
                                            </h3>
                                            <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-grow">
                                                {feature.desc}
                                            </p>

                                            {/* Bottom accent line */}
                                            <div className="absolute bottom-0 left-0 w-0 h-[2px] group-hover:w-full transition-all duration-700 mt-auto"
                                                style={{ background: `linear-gradient(90deg, ${feature.accent}, transparent)` }}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
