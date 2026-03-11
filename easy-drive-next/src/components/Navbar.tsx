"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, PhoneCall, MessageCircle } from "lucide-react";
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

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/";
        return pathname === href || pathname.startsWith(`${href}/`);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/85 backdrop-blur-2xl border-b border-slate-100/80 py-3 shadow-[0_12px_36px_-28px_rgba(15,23,42,.35)]" : "bg-transparent py-5"
                }`}
        >
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <Image src="/images/easy-drive-logo.png" alt="Easy-Drive.UK Logo" width={200} height={64} className="w-auto h-11 md:h-14 object-contain" />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/70 px-3 py-2 shadow-[0_10px_30px_-20px_rgba(15,23,42,.35)] backdrop-blur-lg">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`relative rounded-full px-3 py-2 text-sm font-semibold transition-colors ${
                                isActive(link.href)
                                    ? "bg-orange-100 text-brand-orange"
                                    : "text-slate-700 hover:text-brand-orange hover:bg-orange-50/80"
                            }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* CTA Button */}
                <div className="hidden md:flex items-center gap-2">
                    <a href="tel:+448001234567" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:border-slate-300 hover:bg-white transition-colors">
                        <PhoneCall size={16} className="text-brand-orange" />
                        Call
                    </a>
                    <a href="https://wa.me/447777777777" className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50/80 px-4 py-2.5 text-sm font-semibold text-green-700 hover:bg-green-100 transition-colors">
                        <MessageCircle size={16} />
                        WhatsApp
                    </a>
                    <Link href="/contact" className="bg-gradient-to-r from-brand-orange to-orange-600 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-[0_12px_30px_-16px_rgba(243,112,33,.75)] hover:-translate-y-0.5">
                        Book Lesson
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-slate-900"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-2xl shadow-xl py-6 px-6 flex flex-col gap-3 md:hidden border-t border-slate-100"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={`text-base font-semibold rounded-xl px-3 py-2 transition-colors ${
                                    isActive(link.href)
                                        ? "bg-orange-100 text-brand-orange"
                                        : "text-slate-700 hover:text-brand-orange hover:bg-orange-50/70"
                                }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="mt-2 grid grid-cols-2 gap-3">
                            <a href="tel:+448001234567" className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700">
                                <PhoneCall size={16} className="text-brand-orange" />
                                Call
                            </a>
                            <a href="https://wa.me/447777777777" className="inline-flex items-center justify-center gap-2 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-semibold text-green-700">
                                <MessageCircle size={16} />
                                WhatsApp
                            </a>
                        </div>
                        <Link href="/contact" onClick={() => setIsOpen(false)} className="bg-gradient-to-r from-brand-orange to-orange-600 text-white px-6 py-3 rounded-xl text-base font-semibold w-full mt-1 text-center">
                            Book Lesson
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
