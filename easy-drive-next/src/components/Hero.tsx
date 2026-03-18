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
        { icon: <CheckCircle className="text-emerald-600" size={18} />, label: "Pass Rate", value: "92%" },
        { icon: <Award className="text-blue-600" size={18} />, label: "Students", value: "5,000+" },
        { icon: <Star className="text-amber-500" size={18} />, label: "Google", value: "4.9★" },
        { icon: <FastForward className="text-violet-600" size={18} />, label: "Booking", value: "Fast-Track" },
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

            // Phone number: scale in + continuous glow pulse
            gsap.fromTo(phoneRef.current,
                { opacity: 0, scale: 0.8 },
                { opacity: 1, scale: 1, duration: 0.6, delay: 1.1, ease: "back.out(1.7)" }
            );
            gsap.to(phoneGlowRef.current, {
                opacity: 0.6, scale: 1.15,
                duration: 1.8, repeat: -1, yoyo: true,
                ease: "sine.inOut", delay: 1.8
            });
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
        <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-16 lg:pt-24 lg:pb-20"
            style={{ background: "linear-gradient(180deg, #ffffff 0%, #fef9f5 100%)" }}
        >

            {/* Background Overlay */}
            {/* <div className="absolute inset-0 -z-10" style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)" }}>
                <img src="/images/hero_night_city.png" alt="" className="w-full h-full object-cover scale-110 blur-[1px] opacity-25" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/60"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-white/50"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-[#FF6B2C]/8 rounded-full blur-[120px]"></div>
                <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-blue-500/[0.06] rounded-full blur-[100px]"></div>
            </div> */}

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-10 items-center">

                    {/* ===== LEFT CONTENT ===== */}
                    <div className="max-w-xl">

                        {/* DVSA Badge */}
                        <div ref={badgeRef} className="mb-7 inline-flex items-center gap-2.5 rounded-full px-5 py-2.5 text-xs font-bold tracking-wider uppercase opacity-0"
                            style={{
                                background: "rgba(255,107,44,0.08)",
                                border: "1px solid rgba(255,107,44,0.2)",
                            }}
                        >
                            <Shield size={14} className="text-[#FF6B2C]" />
                            <span className="text-gray-700">DVSA Approved School</span>
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        </div>

                        {/* Headline — single H1, no gradient text */}
                        <h1 ref={headlineRef} className="text-[3rem] sm:text-[3.75rem] lg:text-[4.5rem] font-extrabold tracking-[-0.03em] leading-[1.05] mb-6" style={{ perspective: "600px" }}>
                            {headlineWords.map((word, i) => (
                                <span key={i} className={`hero-word inline-block mr-[0.3em] opacity-0 ${i >= 3 ? "text-[#FF6B2C]" : "text-[#FF6B2C]"
                                    }`}>
                                    {word}
                                </span>
                            ))}
                        </h1>

                        {/* Sub description */}
                        <p ref={descRef} className="text-lg text-gray-500 mb-9 leading-relaxed max-w-md opacity-0">
                            Learn from DVSA-approved instructors and pass your driving test first time with our intensive, structured courses.
                        </p>

                        {/* ===== CTA BLOCK ===== */}
                        <div ref={ctaBlockRef} className="space-y-5 mb-10">

                            {/* ROW 1: Phone (main highlight) + WhatsApp (icon circle) */}
                            <div className="flex items-center gap-3">
                                {/* Phone Number — #1 Priority */}
                                <a
                                    ref={phoneRef}
                                    href="tel:+448001234567"
                                    className="relative group inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-base font-bold text-gray-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-[0.97] opacity-0"
                                    style={{
                                        background: "rgba(255,107,44,0.06)",
                                        border: "1px solid rgba(255,107,44,0.25)",
                                        boxShadow: "0 4px 20px rgba(255,107,44,0.1)"
                                    }}
                                >
                                    {/* Glow pulse behind */}
                                    <div
                                        ref={phoneGlowRef}
                                        className="absolute inset-0 rounded-full opacity-30 pointer-events-none"
                                        style={{
                                            background: "radial-gradient(ellipse at center, rgba(255,107,44,0.15), transparent 70%)",
                                            filter: "blur(8px)"
                                        }}
                                    />
                                    <div className="relative z-10 w-9 h-9 rounded-full bg-[#FF6B2C] flex items-center justify-center shadow-lg">
                                        <PhoneCall size={16} className="text-white" />
                                    </div>
                                    <span className="relative z-10 font-[family-name:var(--font-jetbrains)] text-gray-800 tracking-wide">0800 123 4567</span>
                                </a>

                                {/* WhatsApp — Icon Only Circle */}
                                <a
                                    ref={whatsappRef}
                                    href="https://wa.me/447777777777"
                                    aria-label="WhatsApp"
                                    className="relative w-[52px] h-[52px] rounded-full flex items-center justify-center group transition-all duration-300 hover:-translate-y-1 hover:scale-110 active:scale-95 opacity-0"
                                    style={{
                                        background: "rgba(16,185,129,0.08)",
                                        border: "1px solid rgba(16,185,129,0.25)",
                                        boxShadow: "0 4px 16px rgba(16,185,129,0.1)"
                                    }}
                                >
                                    <FaWhatsapp size={22} className="text-emerald-600 group-hover:text-emerald-500 transition-colors" />
                                </a>
                            </div>

                            {/* ROW 2: Book Consultation (primary) + View Courses (secondary) */}
                            <div className="flex flex-col sm:flex-row gap-3">
                                {/* Book Free Consultation — Primary CTA */}
                                <Link
                                    ref={consultRef}
                                    href="/contact"
                                    className="relative overflow-hidden group text-[15px] font-bold px-7 py-3.5 rounded-2xl text-white flex items-center justify-center gap-2.5 transition-all duration-300 hover:-translate-y-1 active:scale-[0.97] opacity-0"
                                    style={{
                                        background: "#FF6B2C",
                                        boxShadow: "0 8px 24px rgba(255,107,44,0.3)"
                                    }}
                                >
                                    {/* Shimmer effect */}
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

                                {/* View Courses — Secondary */}
                                <Link
                                    href="/services"
                                    className="view-courses-btn text-[15px] font-semibold px-7 py-3.5 rounded-2xl text-gray-600 flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-1 hover:text-gray-800 active:scale-[0.97] opacity-0"
                                    style={{
                                        background: "rgba(0,0,0,0.04)",
                                        border: "1px solid rgba(0,0,0,0.1)",
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
                                    className="stat-card opacity-0 flex items-center gap-2.5 px-3.5 py-3 rounded-2xl cursor-default transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                                    style={{
                                        background: "rgba(0,0,0,0.02)",
                                        border: "1px solid rgba(0,0,0,0.08)",
                                    }}
                                >
                                    {stat.icon}
                                    <div>
                                        <p className="text-sm font-bold text-gray-800 font-[family-name:var(--font-jetbrains)]">{stat.value}</p>
                                        <p className="text-[10px] text-gray-400">{stat.label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ===== RIGHT — IMAGE CARD ===== */}
                    <div className="relative flex justify-center">

                        {/* Main Image Card */}
                        <div ref={imageCardRef} className="relative rounded-3xl overflow-hidden aspect-[3/4] w-full max-w-md opacity-0 group"
                            style={{
                                boxShadow: "0 25px 50px rgba(0,0,0,0.12)",
                                border: "1px solid rgba(0,0,0,0.08)"
                            }}
                        >
                            <img
                                src="/images/hero_driving.png"
                                alt="Student holding pass certificate with driving car"
                                className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-1000"
                            />
                        </div>

                        {/* Floating Card 1 — Passed First Time */}
                        <div ref={floatingCard1Ref} className="absolute -left-6 top-[30%] z-20 hidden md:flex items-center gap-3 opacity-0"
                            style={{
                                background: "rgba(255,255,255,0.95)",
                                backdropFilter: "blur(20px)",
                                border: "1px solid rgba(0,0,0,0.08)",
                                borderRadius: "18px",
                                padding: "14px 18px",
                                boxShadow: "0 8px 32px rgba(0,0,0,0.1)"
                            }}
                        >
                            <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                                <CheckCircle size={20} className="text-emerald-600" />
                            </div>
                            <div>
                                <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Status</p>
                                <p className="text-sm font-bold text-gray-800">Passed First Time</p>
                            </div>
                        </div>

                        {/* Floating Card 2 — Happy Drivers */}
                        <div ref={floatingCard2Ref} className="absolute -right-6 bottom-[28%] z-20 hidden md:flex items-center gap-3 opacity-0"
                            style={{
                                background: "rgba(255,255,255,0.95)",
                                backdropFilter: "blur(20px)",
                                border: "1px solid rgba(0,0,0,0.08)",
                                borderRadius: "18px",
                                padding: "14px 18px",
                                boxShadow: "0 8px 32px rgba(0,0,0,0.1)"
                            }}
                        >
                            <div className="flex -space-x-2.5">
                                <img src="https://i.pravatar.cc/100?img=1" className="w-8 h-8 rounded-full border-2 border-white" alt="" />
                                <img src="https://i.pravatar.cc/100?img=2" className="w-8 h-8 rounded-full border-2 border-white" alt="" />
                                <div className="w-8 h-8 rounded-full bg-[#FF6B2C] text-white text-[9px] font-bold flex items-center justify-center border-2 border-white">+5k</div>
                            </div>
                            <div>
                                <p className="text-sm font-bold text-gray-800">Happy Drivers</p>
                                <div className="flex text-amber-500">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={11} fill="currentColor" />)}
                                </div>
                            </div>
                        </div>

                        {/* Subtle decorative glow behind image */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#FF6B2C]/5 blur-[100px] rounded-full" />
                    </div>
                </div>
            </div>
        </section>
    );
}
