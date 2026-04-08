"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Reviews", href: "/reviews" },
    { name: "Show Me Tell Me", href: "/show-me-tell-me" },
    { name: "Areas", href: "/areas" },
    { name: "Contact", href: "/contact" },
];

const OVERLAY_EASE_IN  = [0.22, 1, 0.36, 1] as const;
const OVERLAY_EASE_OUT = [0.65, 0, 0.35, 1] as const;

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/";
        return pathname === href || pathname.startsWith(`${href}/`);
    };

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    return (
        <header
            className={`fixed top-0 w-full z-[999] transition-all duration-500 ${
                scrolled && !isOpen
                    ? "py-2 bg-white/85 backdrop-blur-2xl border-b border-slate-100/80 shadow-[0_4px_30px_rgba(15,23,42,0.06)]"
                    : "py-4 bg-transparent"
            }`}
            style={{ isolation: "isolate" }}
        >
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <Image
                        src="/images/easy-drive-logo.png"
                        alt="Easy-Drive.UK Logo"
                        width={200}
                        height={64}
                        className="w-auto h-20 md:h-[150px] object-contain"
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-1 rounded-full border border-slate-200/80 bg-white/70 px-2 py-1.5 backdrop-blur-xl shadow-[0_8px_30px_-20px_rgba(15,23,42,0.15)]">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                                isActive(link.href)
                                    ? "bg-accent/10 text-accent"
                                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                            }`}
                        >
                            {link.name}
                            {isActive(link.href) && (
                                <motion.div
                                    layoutId="nav-indicator"
                                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-accent rounded-full"
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                />
                            )}
                        </Link>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <div className="hidden lg:flex items-center gap-2">
                    <Link
                        href="/contact"
                        className="btn-primary text-sm px-5 py-2.5 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-16px_rgba(255,107,44,0.45)] active:scale-95 transition-all"
                    >
                        Book Lesson
                    </Link>
                </div>

                {/* Hamburger — animated icon swap */}
                <button
                    className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-full text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                    onClick={() => setIsOpen((v) => !v)}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                >
                    <AnimatePresence mode="wait" initial={false}>
                        {isOpen ? (
                            <motion.span
                                key="close"
                                initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                                animate={{ rotate: 0,   opacity: 1, scale: 1   }}
                                exit={{   rotate:  90, opacity: 0, scale: 0.6 }}
                                transition={{ duration: 0.2, ease: "easeInOut" }}
                                className="absolute"
                            >
                                <X size={24} />
                            </motion.span>
                        ) : (
                            <motion.span
                                key="open"
                                initial={{ rotate:  90, opacity: 0, scale: 0.6 }}
                                animate={{ rotate: 0,   opacity: 1, scale: 1   }}
                                exit={{   rotate: -90, opacity: 0, scale: 0.6 }}
                                transition={{ duration: 0.2, ease: "easeInOut" }}
                                className="absolute"
                            >
                                <Menu size={24} />
                            </motion.span>
                        )}
                    </AnimatePresence>
                </button>
            </div>

            {/* ── Mobile Fullscreen Overlay ── */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ y: "-100%", opacity: 0 }}
                        animate={{ y: "0%",    opacity: 1 }}
                        exit={{   y: "-100%", opacity: 0 }}
                        transition={{
                            duration: 0.45,
                            ease: isOpen ? OVERLAY_EASE_IN : OVERLAY_EASE_OUT,
                        }}
                        className="fixed inset-0 top-0 bg-white flex flex-col z-[1000] lg:hidden overflow-y-auto"
                        style={{ isolation: "isolate" }}
                    >
                        {/* Header row inside overlay */}
                        <div className="flex justify-between items-center px-6 py-5 border-b border-slate-100">
                            <Link href="/" onClick={() => setIsOpen(false)}>
                                <Image
                                    src="/images/easy-drive-logo.png"
                                    alt="Easy-Drive.UK"
                                    width={180}
                                    height={56}
                                    className="w-auto h-10 object-contain"
                                />
                            </Link>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="w-10 h-10 flex items-center justify-center rounded-full text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Nav links */}
                        <nav className="flex-1 flex flex-col justify-center px-8 gap-1">
                            {navLinks.map((link, idx) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -24 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{   opacity: 0, x: -16 }}
                                    transition={{
                                        delay: 0.12 + idx * 0.055,
                                        duration: 0.35,
                                        ease: OVERLAY_EASE_IN,
                                    }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`flex items-center justify-between text-2xl font-semibold py-3.5 border-b border-slate-100 transition-colors ${
                                            isActive(link.href)
                                                ? "text-accent"
                                                : "text-slate-700 hover:text-slate-900"
                                        }`}
                                    >
                                        {link.name}
                                        {isActive(link.href) && (
                                            <span className="w-2 h-2 rounded-full bg-accent" />
                                        )}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>

                        {/* Bottom CTA */}
                        <motion.div
                            className="px-8 pb-10 pt-6"
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{   opacity: 0, y: 8  }}
                            transition={{ delay: 0.38, duration: 0.35, ease: OVERLAY_EASE_IN }}
                        >
                            <Link
                                href="/contact"
                                onClick={() => setIsOpen(false)}
                                className="btn-primary block text-center text-base py-4 rounded-2xl"
                            >
                                Book Lesson
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
