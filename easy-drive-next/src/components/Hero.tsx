"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle, Award, Star, FastForward, PhoneCall, ArrowRight, Shield } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const sectionRef = useRef<HTMLElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);
    const headlineRef = useRef<HTMLHeadingElement>(null);
    const badgeRef = useRef<HTMLDivElement>(null);
    const descRef = useRef<HTMLParagraphElement>(null);
    const ctaBlockRef = useRef<HTMLDivElement>(null);
    const phoneRef = useRef<HTMLAnchorElement>(null);
    const phoneGlowRef = useRef<HTMLDivElement>(null);
    const whatsappRef = useRef<HTMLAnchorElement>(null);
    const consultRef = useRef<HTMLAnchorElement>(null);
    const consultShimmerRef = useRef<HTMLDivElement>(null);
    const statsRef = useRef<HTMLDivElement>(null);
    const imageCardRef = useRef<HTMLDivElement>(null);
    const floatingCard1Ref = useRef<HTMLDivElement>(null);
    const floatingCard2Ref = useRef<HTMLDivElement>(null);

    const stats = [
        { icon: <CheckCircle className="text-emerald-400" size={18} />, label: "Pass Rate", value: "92%", glow: "shadow-emerald-500/20" },
        { icon: <Award className="text-blue-400" size={18} />, label: "Students", value: "5,000+", glow: "shadow-blue-500/20" },
        { icon: <Star className="text-amber-400" size={18} />, label: "Google", value: "4.9★", glow: "shadow-amber-500/20" },
        { icon: <FastForward className="text-violet-400" size={18} />, label: "Booking", value: "Fast-Track", glow: "shadow-violet-500/20" },
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Badge: fade + slide down
            gsap.fromTo(badgeRef.current,
                { opacity: 0, y: -20 },
                { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: "power2.out" }
            );

            // Headline: letter stagger animation
            if (headlineRef.current) {
                const text = headlineRef.current.querySelectorAll(".hero-word");
                gsap.fromTo(text,
                    { opacity: 0, y: 40, rotateX: 20 },
                    {
                        opacity: 1, y: 0, rotateX: 0,
                        duration: 0.7, stagger: 0.08, delay: 0.5,
                        ease: "power3.out"
                    }
                );
            }

            // Description: fade up
            gsap.fromTo(descRef.current,
                { opacity: 0, y: 24 },
                { opacity: 1, y: 0, duration: 0.6, delay: 1.0, ease: "power2.out" }
            );

            // === NEW CTA HIERARCHY ANIMATIONS ===
            // Phone number: scale in + continuous glow pulse
            gsap.fromTo(phoneRef.current,
                { opacity: 0, scale: 0.8 },
                { opacity: 1, scale: 1, duration: 0.6, delay: 1.1, ease: "back.out(1.7)" }
            );
            // Phone glow pulse animation
            gsap.to(phoneGlowRef.current, {
                opacity: 0.6, scale: 1.15,
                duration: 1.8, repeat: -1, yoyo: true,
                ease: "sine.inOut", delay: 1.8
            });
            // Phone subtle float
            gsap.to(phoneRef.current, {
                y: -3, duration: 2.4, repeat: -1, yoyo: true,
                ease: "sine.inOut", delay: 2
            });

            // WhatsApp: scale bounce in
            gsap.fromTo(whatsappRef.current,
                { opacity: 0, scale: 0.5, rotation: -45 },
                { opacity: 1, scale: 1, rotation: 0, duration: 0.5, delay: 1.3, ease: "back.out(2)" }
            );

            // Consultation button: slide in + shimmer
            gsap.fromTo(consultRef.current,
                { opacity: 0, x: -20 },
                { opacity: 1, x: 0, duration: 0.5, delay: 1.5, ease: "power2.out" }
            );
            // Liquid glass shimmer — continuous
            gsap.to(consultShimmerRef.current, {
                x: "200%",
                duration: 3, repeat: -1, repeatDelay: 2,
                ease: "power1.inOut", delay: 2
            });

            // View courses: slide in
            if (ctaBlockRef.current) {
                const viewCourses = ctaBlockRef.current.querySelector(".view-courses-btn");
                gsap.fromTo(viewCourses,
                    { opacity: 0, x: -16 },
                    { opacity: 1, x: 0, duration: 0.5, delay: 1.65, ease: "power2.out" }
                );
            }

            // Stats cards: staggered slide-up
            if (statsRef.current) {
                const cards = statsRef.current.querySelectorAll(".stat-card");
                gsap.fromTo(cards,
                    { opacity: 0, y: 30, scale: 0.92 },
                    {
                        opacity: 1, y: 0, scale: 1,
                        duration: 0.5, stagger: 0.1, delay: 1.8,
                        ease: "power3.out"
                    }
                );
            }

            // Hero image card: slow zoom-in
            gsap.fromTo(imageCardRef.current,
                { opacity: 0, scale: 0.9 },
                { opacity: 1, scale: 1, duration: 1.2, delay: 0.6, ease: "power2.out" }
            );

            // Floating cards: continuous floating animation
            gsap.to(floatingCard1Ref.current, {
                y: -14, duration: 2.5, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 1.8
            });
            gsap.fromTo(floatingCard1Ref.current,
                { opacity: 0, x: -30 },
                { opacity: 1, x: 0, duration: 0.6, delay: 1.8, ease: "power2.out" }
            );

            gsap.to(floatingCard2Ref.current, {
                y: 12, duration: 3, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 2.2
            });
            gsap.fromTo(floatingCard2Ref.current,
                { opacity: 0, x: 30 },
                { opacity: 1, x: 0, duration: 0.6, delay: 2.2, ease: "power2.out" }
            );

            // Scroll parallax effects
            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
                onUpdate: (self) => {
                    const progress = self.progress;
                    if (bgRef.current) {
                        gsap.set(bgRef.current, { y: progress * 80 });
                    }
                    if (imageCardRef.current) {
                        gsap.set(imageCardRef.current, { scale: 1 + progress * 0.05 });
                    }
                }
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const headlineWords = ["Pass", "Your", "Test", "Faster", "&", "Smarter"];

    return (
        <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-16 lg:pt-24 lg:pb-20">

            {/* Background Image + Overlay */}
            <div ref={bgRef} className="absolute inset-0 -z-10">
                <img
                    src="/images/hero_night_city.png"
                    alt=""
                    className="w-full h-full object-cover scale-110 blur-[2px]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1e]/90 via-[#0a0f1e]/75 to-[#0a0f1e]/50" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e]/80 via-transparent to-[#0a0f1e]/40" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-accent/8 rounded-full blur-[120px]" />
                <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-blue-500/6 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-10 items-center">

                    {/* ===== LEFT CONTENT ===== */}
                    <div className="max-w-xl">

                        {/* DVSA Badge */}
                        <div ref={badgeRef} className="mb-7 inline-flex items-center gap-2.5 rounded-full px-5 py-2.5 text-xs font-bold tracking-wider uppercase opacity-0"
                            style={{
                                background: "rgba(255,255,255,0.08)",
                                backdropFilter: "blur(16px)",
                                border: "1px solid rgba(255,255,255,0.12)",
                                boxShadow: "0 4px 24px rgba(0,0,0,0.2)"
                            }}
                        >
                            <Shield size={14} className="text-accent" />
                            <span className="text-white/90">DVSA Approved School</span>
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        </div>

                        {/* Headline — word stagger */}
                        <h1 ref={headlineRef} className="text-[3rem] sm:text-[3.75rem] lg:text-[4.5rem] font-extrabold tracking-[-0.03em] leading-[1.05] mb-6" style={{ perspective: "600px" }}>
                            {headlineWords.map((word, i) => (
                                <span key={i} className={`hero-word inline-block mr-[0.3em] opacity-0 ${
                                    i >= 3 ? "bg-gradient-to-r from-accent via-orange-400 to-amber-300 bg-clip-text text-transparent" : "text-white"
                                }`}>
                                    {word}
                                </span>
                            ))}
                        </h1>

                        {/* Sub description */}
                        <p ref={descRef} className="text-lg text-white/55 mb-9 leading-relaxed max-w-md opacity-0">
                            Learn from DVSA-approved instructors and pass your driving test first time with our intensive, structured courses.
                        </p>

                        {/* ===== REDESIGNED CTA BLOCK ===== */}
                        <div ref={ctaBlockRef} className="space-y-5 mb-10">

                            {/* ROW 1: Phone (main highlight) + WhatsApp (icon circle) */}
                            <div className="flex items-center gap-3">
                                {/* Phone Number — #1 Priority */}
                                <a
                                    ref={phoneRef}
                                    href="tel:+448001234567"
                                    className="relative group inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-base font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-[0.97] opacity-0"
                                    style={{
                                        background: "rgba(255,255,255,0.1)",
                                        backdropFilter: "blur(20px)",
                                        border: "1px solid rgba(255,107,44,0.35)",
                                        boxShadow: "0 4px 24px rgba(255,107,44,0.2), 0 0 40px rgba(255,107,44,0.08)"
                                    }}
                                >
                                    {/* Glow pulse behind */}
                                    <div
                                        ref={phoneGlowRef}
                                        className="absolute inset-0 rounded-full opacity-30 pointer-events-none"
                                        style={{
                                            background: "radial-gradient(ellipse at center, rgba(255,107,44,0.3), transparent 70%)",
                                            filter: "blur(8px)"
                                        }}
                                    />
                                    <div className="relative z-10 w-9 h-9 rounded-full bg-gradient-to-br from-accent to-orange-500 flex items-center justify-center shadow-lg shadow-accent/30">
                                        <PhoneCall size={16} className="text-white" />
                                    </div>
                                    <span className="relative z-10 font-[family-name:var(--font-jetbrains)] text-white tracking-wide">0800 123 4567</span>
                                </a>

                                {/* WhatsApp — Icon Only Circle */}
                                <a
                                    ref={whatsappRef}
                                    href="https://wa.me/447777777777"
                                    aria-label="WhatsApp"
                                    className="relative w-[52px] h-[52px] rounded-full flex items-center justify-center group transition-all duration-300 hover:-translate-y-1 hover:scale-110 active:scale-95 opacity-0"
                                    style={{
                                        background: "rgba(16,185,129,0.12)",
                                        backdropFilter: "blur(16px)",
                                        border: "1px solid rgba(16,185,129,0.3)",
                                        boxShadow: "0 4px 20px rgba(16,185,129,0.15), 0 0 30px rgba(16,185,129,0.06)"
                                    }}
                                >
                                    <FaWhatsapp size={22} className="text-emerald-400 group-hover:text-emerald-300 transition-colors" />
                                    {/* Neon glow on hover */}
                                    <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                        style={{
                                            boxShadow: "0 0 20px rgba(16,185,129,0.4), 0 0 40px rgba(16,185,129,0.15)"
                                        }}
                                    />
                                </a>
                            </div>

                            {/* ROW 2: Book Consultation (primary) + View Courses (secondary) */}
                            <div className="flex flex-col sm:flex-row gap-3">
                                {/* Book Free Consultation — Primary Liquid Glass CTA */}
                                <Link
                                    ref={consultRef}
                                    href="/contact"
                                    className="relative overflow-hidden group text-[15px] font-bold px-7 py-3.5 rounded-2xl text-white flex items-center justify-center gap-2.5 transition-all duration-300 hover:-translate-y-1 active:scale-[0.97] opacity-0"
                                    style={{
                                        background: "linear-gradient(135deg, rgba(255,107,44,0.85), rgba(255,143,66,0.85))",
                                        backdropFilter: "blur(12px)",
                                        border: "1px solid rgba(255,255,255,0.2)",
                                        boxShadow: "0 8px 32px rgba(255,107,44,0.3), inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(0,0,0,0.1)"
                                    }}
                                >
                                    {/* Liquid glass shimmer */}
                                    <div
                                        ref={consultShimmerRef}
                                        className="absolute top-0 -left-full w-1/2 h-full pointer-events-none"
                                        style={{
                                            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)",
                                            transform: "skewX(-20deg)"
                                        }}
                                    />
                                    <span className="relative z-10 flex items-center gap-2">
                                        Book Free Consultation
                                        <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </Link>

                                {/* View Courses — Secondary / Lighter */}
                                <Link
                                    href="/services"
                                    className="view-courses-btn text-[15px] font-semibold px-7 py-3.5 rounded-2xl text-white/75 flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-1 hover:text-white hover:bg-white/12 active:scale-[0.97] opacity-0"
                                    style={{
                                        background: "rgba(255,255,255,0.06)",
                                        backdropFilter: "blur(10px)",
                                        border: "1px solid rgba(255,255,255,0.1)",
                                        boxShadow: "0 2px 12px rgba(0,0,0,0.1)"
                                    }}
                                >
                                    View Courses
                                    <ArrowRight size={14} className="opacity-50" />
                                </Link>
                            </div>
                        </div>

                        {/* Stats Row */}
                        <div ref={statsRef} className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            {stats.map((stat, idx) => (
                                <div
                                    key={idx}
                                    className={`stat-card opacity-0 flex items-center gap-2.5 px-3.5 py-3 rounded-2xl cursor-default transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${stat.glow}`}
                                    style={{
                                        background: "rgba(255,255,255,0.06)",
                                        backdropFilter: "blur(16px)",
                                        border: "1px solid rgba(255,255,255,0.1)",
                                        boxShadow: "0 4px 20px rgba(0,0,0,0.15)"
                                    }}
                                >
                                    {stat.icon}
                                    <div>
                                        <p className="text-sm font-bold text-white font-[family-name:var(--font-jetbrains)]">{stat.value}</p>
                                        <p className="text-[10px] text-white/40">{stat.label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ===== RIGHT — IMAGE CARD ===== */}
                    <div className="relative flex justify-center">

                        {/* Main Image Card with glassmorphism */}
                        <div ref={imageCardRef} className="relative rounded-3xl overflow-hidden aspect-[3/4] w-full max-w-md opacity-0 group"
                            style={{
                                boxShadow: "0 25px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)",
                                border: "1px solid rgba(255,255,255,0.1)"
                            }}
                        >
                            <img
                                src="/images/hero_driving.png"
                                alt="Student holding pass certificate with driving car"
                                className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e]/60 via-transparent to-[#0a0f1e]/20" />
                            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                        </div>

                        {/* Floating Card 1 — Passed First Time */}
                        <div ref={floatingCard1Ref} className="absolute -left-6 top-[30%] z-20 hidden md:flex items-center gap-3 opacity-0"
                            style={{
                                background: "rgba(255,255,255,0.1)",
                                backdropFilter: "blur(20px)",
                                border: "1px solid rgba(255,255,255,0.15)",
                                borderRadius: "18px",
                                padding: "14px 18px",
                                boxShadow: "0 8px 32px rgba(0,0,0,0.3)"
                            }}
                        >
                            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                                <CheckCircle size={20} className="text-emerald-400" />
                            </div>
                            <div>
                                <p className="text-[10px] text-white/40 font-semibold uppercase tracking-wider">Status</p>
                                <p className="text-sm font-bold text-white">Passed First Time</p>
                            </div>
                        </div>

                        {/* Floating Card 2 — Happy Drivers */}
                        <div ref={floatingCard2Ref} className="absolute -right-6 bottom-[28%] z-20 hidden md:flex items-center gap-3 opacity-0"
                            style={{
                                background: "rgba(255,255,255,0.1)",
                                backdropFilter: "blur(20px)",
                                border: "1px solid rgba(255,255,255,0.15)",
                                borderRadius: "18px",
                                padding: "14px 18px",
                                boxShadow: "0 8px 32px rgba(0,0,0,0.3)"
                            }}
                        >
                            <div className="flex -space-x-2.5">
                                <img src="https://i.pravatar.cc/100?img=1" className="w-8 h-8 rounded-full border-2 border-white/20" alt="" />
                                <img src="https://i.pravatar.cc/100?img=2" className="w-8 h-8 rounded-full border-2 border-white/20" alt="" />
                                <div className="w-8 h-8 rounded-full bg-accent text-white text-[9px] font-bold flex items-center justify-center border-2 border-white/20">+5k</div>
                            </div>
                            <div>
                                <p className="text-sm font-bold text-white">Happy Drivers</p>
                                <div className="flex text-amber-400">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={11} fill="currentColor" />)}
                                </div>
                            </div>
                        </div>

                        {/* Decorative glow behind image */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-accent/10 blur-[100px] rounded-full" />
                    </div>
                </div>
            </div>

            {/* Bottom fade line */}
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </section>
    );
}
