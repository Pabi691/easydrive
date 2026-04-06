"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Settings, Gamepad2, Zap, ShieldCheck, ClipboardCheck, ArrowRight } from "lucide-react";
import { courses } from "@/data/courses";

gsap.registerPlugin(ScrollTrigger);

export default function Courses() {
    const sectionRef = useRef<HTMLElement>(null);
    const headlineRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);
    const carContainerRef = useRef<HTMLDivElement>(null);
    const carRef = useRef<HTMLDivElement>(null);

    const iconMap: Record<string, ReactNode> = {
        automatic: <Gamepad2 size={20} className="text-blue-400" />,
        manual: <Settings size={20} className="text-slate-400" />,
        intensive: <Zap size={20} className="text-purple-400" />,
        "pass-plus": <ShieldCheck size={20} className="text-emerald-400" />,
        "test-ready": <ClipboardCheck size={20} className="text-teal-400" />,
    };

    const accentMap: Record<string, string> = {
        automatic: "from-blue-500 to-cyan-400",
        manual: "from-slate-600 to-slate-400",
        intensive: "from-purple-500 to-pink-400",
        "pass-plus": "from-emerald-500 to-teal-400",
        "test-ready": "from-teal-500 to-cyan-600",
    };

    const badgeMap: Record<string, string> = {
        automatic: "bg-blue-500/10 text-blue-400 border-blue-500/20",
        manual: "bg-slate-500/10 text-slate-400 border-slate-500/20",
        intensive: "bg-purple-500/10 text-purple-400 border-purple-500/20",
        "pass-plus": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
        "test-ready": "bg-teal-500/10 text-teal-400 border-teal-500/20",
    };

    const glowMap: Record<string, string> = {
        automatic: "rgba(59,130,246,0.15)",
        manual: "rgba(100,116,139,0.12)",
        intensive: "rgba(168,85,247,0.15)",
        "pass-plus": "rgba(16,185,129,0.15)",
        "test-ready": "rgba(20,184,166,0.15)",
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Headline animation
            if (headlineRef.current) {
                const els = headlineRef.current.querySelectorAll(".anim-el");
                gsap.fromTo(els,
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1, y: 0,
                        duration: 0.6, stagger: 0.1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: headlineRef.current,
                            start: "top 85%",
                            once: true
                        }
                    }
                );
            }

            // Card entrance — staggered fade up + scale
            if (cardsRef.current) {
                const cards = cardsRef.current.querySelectorAll(".course-card");
                gsap.fromTo(cards,
                    { opacity: 0, y: 40, scale: 0.95 },
                    {
                        opacity: 1, y: 0, scale: 1,
                        duration: 0.6, stagger: 0.12,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: cardsRef.current,
                            start: "top 80%",
                            once: true
                        }
                    }
                );
            }

            // === SCROLL-DRIVEN CAR ANIMATION ===
            // Single timeline controls everything — scroll down = forward, scroll up = backward
            if (carRef.current && carContainerRef.current) {
                const carTimeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: carContainerRef.current,
                        start: "top bottom",   // Starts when the top of the car area hits the bottom of the screen
                        end: "bottom top",     // Ends when the bottom of the car area hits the top of the screen
                        scrub: 0.5,
                        invalidateOnRefresh: true,
                    }
                });

                // 1. Car moves across the full road
                // carTimeline.fromTo(carRef.current,
                //     { x: "-8%" },
                //     { x: "95%", ease: "power1.inOut" },
                //     0
                // );

                const container = carContainerRef.current;
                const car = carRef.current;

                const maxX = container.offsetWidth - car.offsetWidth;

                carTimeline.fromTo(car,
                    { x: 0 },
                    {
                        x: maxX,
                        ease: "power1.inOut"
                    },
                    0
                );

                // 2. Both wheels spin — direction auto-reverses on scroll up
                const wheels = carRef.current.querySelectorAll(".car-wheel-spokes");
                carTimeline.fromTo(wheels,
                    { rotation: 0 },
                    { rotation: 2160, ease: "none" },  // 6 full rotations
                    0
                );

                // 3. Exhaust smoke — tied to scroll progress (appears/fades with motion)
                const smokePuffs = carRef.current.querySelectorAll(".exhaust-smoke");
                smokePuffs.forEach((puff, i) => {
                    carTimeline.fromTo(puff,
                        { opacity: 0, x: 0, scale: 0.4 },
                        {
                            opacity: 0.3 - (i * 0.05),
                            x: -(8 + i * 6),
                            scale: 1.2 + (i * 0.3),
                            ease: "power1.out"
                        },
                        0
                    );
                });
            }

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="courses" className="py-24 relative overflow-hidden"
            style={{ background: "linear-gradient(180deg, #f8fafc 0%, #ffffff 40%, #f8fafc 100%)" }}
        >
            {/* Automotive Blueprint Background Pattern */}
            <div className="absolute inset-0 -z-10 opacity-[0.04]" style={{
                backgroundImage: `
                    linear-gradient(rgba(15,23,42,0.3) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(15,23,42,0.3) 1px, transparent 1px),
                    linear-gradient(rgba(15,23,42,0.15) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(15,23,42,0.15) 1px, transparent 1px)
                `,
                backgroundSize: "100px 100px, 100px 100px, 20px 20px, 20px 20px"
            }} />

            {/* Road lane dashes */}
            <div className="absolute inset-0 -z-10 opacity-[0.03]" style={{
                backgroundImage: `repeating-linear-gradient(
                    90deg,
                    transparent,
                    transparent 40px,
                    rgba(15,23,42,0.4) 40px,
                    rgba(15,23,42,0.4) 80px
                )`,
                backgroundSize: "120px 3px",
                backgroundRepeat: "repeat-x",
                backgroundPosition: "center 50%"
            }} />

            {/* Soft color washes */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-50/40 rounded-full blur-[80px] -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-50/20 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-6 md:px-12">

                {/* Header */}
                <div ref={headlineRef} className="text-center max-w-3xl mx-auto mb-16">
                    <p className="anim-el text-sm font-bold tracking-widest uppercase mb-4 opacity-0">
                        Our Courses
                    </p>
                    <h2 className="anim-el text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-accent mb-5 leading-[1.15] whitespace-nowrap opacity-0">
                        Driving Packages Tailored For You
                    </h2>
                    <p className="anim-el text-lg text-slate-500 leading-relaxed opacity-0">
                        Choose the path to passing your practical driving test — from beginner lessons to intensive fast-track courses.
                    </p>
                </div>

                {/* Course Cards */}
                <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-5 gap-5 relative z-10">
                    {courses.map((course, idx) => {
                        const badgeClass = badgeMap[course.slug] ?? "bg-slate-500/10 text-slate-400 border-slate-500/20";
                        const accentClass = accentMap[course.slug] ?? "from-slate-600 to-slate-400";
                        const glow = glowMap[course.slug] ?? "rgba(100,116,139,0.1)";
                        return (
                            <div
                                key={idx}
                                className="course-card opacity-0 group flex flex-col h-full rounded-2xl overflow-hidden transition-all duration-400 hover:-translate-y-2 cursor-default"
                                style={{
                                    background: "rgba(255,255,255,0.7)",
                                    backdropFilter: "blur(16px)",
                                    border: "1px solid rgba(255,255,255,0.8)",
                                    boxShadow: `0 4px 24px -6px rgba(15,23,42,0.08), 0 0 0 1px rgba(15,23,42,0.03)`
                                }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLDivElement).style.boxShadow = `0 20px 50px -12px ${glow}, 0 8px 24px -8px rgba(15,23,42,0.12), 0 0 0 1px rgba(15,23,42,0.05)`;
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLDivElement).style.boxShadow = `0 4px 24px -6px rgba(15,23,42,0.08), 0 0 0 1px rgba(15,23,42,0.03)`;
                                }}
                            >
                                {/* Image */}
                                <div className="h-44 relative overflow-hidden">
                                    <img
                                        src={course.image}
                                        alt={course.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />

                                    {/* Floating Icon */}
                                    <div className="absolute top-3 right-3 p-2.5 rounded-xl transition-transform duration-300 group-hover:scale-110"
                                        style={{
                                            background: "rgba(255,255,255,0.85)",
                                            backdropFilter: "blur(8px)",
                                            border: "1px solid rgba(255,255,255,0.9)",
                                            boxShadow: "0 4px 16px rgba(0,0,0,0.08)"
                                        }}
                                    >
                                        {iconMap[course.slug]}
                                    </div>

                                    {/* Top accent bar */}
                                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${accentClass}`} />
                                </div>

                                {/* Body */}
                                <div className="p-5 flex flex-col flex-grow">
                                    <div className="flex items-center gap-2 mb-2.5">
                                        <span className={`text-[11px] font-bold px-2.5 py-1 rounded-lg border ${badgeClass}`}>
                                            {course.badges[0]}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">{course.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed mb-5 flex-grow">
                                        {course.summary}
                                    </p>
                                    <Link
                                        href={`/services/${course.slug}`}
                                        className="relative overflow-hidden flex items-center justify-center gap-2 text-sm font-bold text-white rounded-full py-3 group/btn transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.97]"
                                        style={{
                                            background: "linear-gradient(135deg, #1e293b, #334155)",
                                            boxShadow: "0 4px 16px rgba(15,23,42,0.2)"
                                        }}
                                        onMouseEnter={(e) => {
                                            (e.currentTarget as HTMLAnchorElement).style.background = "linear-gradient(135deg, #FF6B2C, #FF8F42)";
                                            (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 24px rgba(255,107,44,0.3)";
                                        }}
                                        onMouseLeave={(e) => {
                                            (e.currentTarget as HTMLAnchorElement).style.background = "linear-gradient(135deg, #1e293b, #334155)";
                                            (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 16px rgba(15,23,42,0.2)";
                                        }}
                                    >
                                        Learn More
                                        <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Scroll-Driven Orange Hatchback Animation */}
                <div ref={carContainerRef} className="relative mt-14 h-24 overflow-hidden">
                    {/* Road surface */}
                    <div className="absolute bottom-5 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-slate-300/70 to-transparent" />
                    {/* Road dashes */}
                    {/* <div className="absolute bottom-[28px] left-0 right-0 h-[2px]" style={{
                        backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 20px, #cbd5e1 20px, #cbd5e1 40px)",
                        opacity: 0.35
                    }} /> */}

                    {/* Orange Hatchback — Easy-Drive Logo Style */}
                    <div ref={carRef} className="absolute bottom-2 left-0" style={{ width: "120px" }}>
                        <svg viewBox="0 0 120 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[120px] h-[48px]">
                            {/* Soft shadow */}
                            <ellipse cx="60" cy="46" rx="42" ry="2.5" fill="#000" opacity="0.08" />

                            {/* === BODY — Orange Hatchback === */}
                            {/* Lower body */}
                            <path d="M12 32H108C111 32 113 30 113 27V24C113 22 111 20 109 20H14C11 20 9 22 9 24V27C9 30 11 32 12 32Z" fill="#FF6B2C" />
                            {/* Upper body / roof — hatchback slope */}
                            <path d="M38 12H72L82 20H28L38 12Z" fill="#E85D1F" />
                            {/* Rear hatch slope */}
                            <path d="M28 20L38 12H42L30 20Z" fill="#D4521A" />
                            {/* Front hood slope */}
                            <path d="M82 20L72 12H76L88 20Z" fill="#D4521A" />

                            {/* Windshield — front */}
                            <path d="M70 13.5H74L84 20H68V13.5Z" fill="#a5d8ff" opacity="0.7" />
                            {/* Windshield — rear */}
                            <path d="M40 13.5H46V20H30L40 13.5Z" fill="#a5d8ff" opacity="0.6" />
                            {/* Side windows */}
                            <rect x="48" y="14" width="9" height="6" rx="1" fill="#a5d8ff" opacity="0.55" />
                            <rect x="58" y="14" width="9" height="6" rx="1" fill="#a5d8ff" opacity="0.55" />
                            {/* Window divider */}
                            <rect x="57" y="14" width="1" height="6" fill="#E85D1F" />

                            {/* Front grille */}
                            <rect x="108" y="23" width="4" height="5" rx="1.5" fill="#333" />
                            {/* Headlights */}
                            <rect x="109" y="22" width="4" height="2.5" rx="1" fill="#fef3c7" />
                            <rect x="110" y="22.5" width="2" height="1.5" rx="0.75" fill="#fbbf24" />
                            {/* Taillights */}
                            <rect x="9" y="22" width="3.5" height="2.5" rx="1" fill="#ef4444" />
                            <rect x="9" y="25" width="3.5" height="1.5" rx="0.75" fill="#dc2626" opacity="0.7" />

                            {/* Number plate area */}
                            <rect x="100" y="26" width="8" height="3" rx="1" fill="#f1f5f9" />

                            {/* Body line accent */}
                            <rect x="16" y="25" width="90" height="0.8" rx="0.4" fill="#D4521A" opacity="0.4" />

                            {/* Door handles */}
                            <rect x="50" y="23" width="4" height="0.8" rx="0.4" fill="#D4521A" opacity="0.6" />
                            <rect x="64" y="23" width="4" height="0.8" rx="0.4" fill="#D4521A" opacity="0.6" />

                            {/* Side mirror */}
                            <rect x="84" y="18" width="2.5" height="3" rx="1" fill="#E85D1F" />

                            {/* === WHEELS === */}
                            {/* Rear wheel */}
                            <circle cx="30" cy="34" r="6" fill="#1e293b" />
                            <circle cx="30" cy="34" r="4.5" fill="#374151" />
                            <g className="car-wheel-spokes" style={{ transformOrigin: "30px 34px" }}>
                                <line x1="30" y1="30.5" x2="30" y2="37.5" stroke="#9ca3af" strokeWidth="0.8" />
                                <line x1="26.5" y1="34" x2="33.5" y2="34" stroke="#9ca3af" strokeWidth="0.8" />
                                <line x1="27.5" y1="31.5" x2="32.5" y2="36.5" stroke="#9ca3af" strokeWidth="0.6" />
                                <line x1="27.5" y1="36.5" x2="32.5" y2="31.5" stroke="#9ca3af" strokeWidth="0.6" />
                            </g>
                            <circle cx="30" cy="34" r="1.5" fill="#6b7280" />

                            {/* Front wheel */}
                            <circle cx="90" cy="34" r="6" fill="#1e293b" />
                            <circle cx="90" cy="34" r="4.5" fill="#374151" />
                            <g className="car-wheel-spokes" style={{ transformOrigin: "90px 34px" }}>
                                <line x1="90" y1="30.5" x2="90" y2="37.5" stroke="#9ca3af" strokeWidth="0.8" />
                                <line x1="86.5" y1="34" x2="93.5" y2="34" stroke="#9ca3af" strokeWidth="0.8" />
                                <line x1="87.5" y1="31.5" x2="92.5" y2="36.5" stroke="#9ca3af" strokeWidth="0.6" />
                                <line x1="87.5" y1="36.5" x2="92.5" y2="31.5" stroke="#9ca3af" strokeWidth="0.6" />
                            </g>
                            <circle cx="90" cy="34" r="1.5" fill="#6b7280" />

                            {/* Wheel arches */}
                            <path d="M20 32C20 26 24 23 30 23C36 23 40 26 40 32" stroke="#E85D1F" strokeWidth="1.5" fill="none" />
                            <path d="M80 32C80 26 84 23 90 23C96 23 100 26 100 32" stroke="#E85D1F" strokeWidth="1.5" fill="none" />
                        </svg>

                        {/* Exhaust smoke puffs */}
                        <div className="absolute -left-3 bottom-[10px] flex gap-[3px] items-center">
                            <div className="exhaust-smoke w-3 h-3 rounded-full bg-slate-400/0 blur-[3px]" />
                            <div className="exhaust-smoke w-2.5 h-2.5 rounded-full bg-slate-400/0 blur-[2px]" />
                            <div className="exhaust-smoke w-2 h-2 rounded-full bg-slate-300/0 blur-[2px]" />
                            <div className="exhaust-smoke w-1.5 h-1.5 rounded-full bg-slate-300/0 blur-[1px]" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
