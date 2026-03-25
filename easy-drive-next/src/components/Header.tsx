"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaClock, FaWhatsapp, FaFacebook, FaInstagram, FaTiktok, FaStar, FaBars, FaXmark, FaPhone } from "react-icons/fa6";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/reviews", label: "Reviews" },
    { href: "/show-me-tell-me", label: "Show Me Tell Me" },
    { href: "/contact", label: "Contact Us" },
];

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50">
            {/* Slim top accent bar */}
            <div className="bg-gradient-to-r from-[#004883] via-[#f37021] to-[#6eb746] h-1" />

            {/* Main nav */}
            <div className="bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-[0_4px_30px_rgba(0,0,0,0.04)]">
                <div className="max-w-7xl mx-auto px-4 py-0">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2 shrink-0">
                            <Image
                                src="/images/easy-drive-logo.png"
                                alt="Easy-Drive.UK Logo"
                                width={200}
                                height={64}
                                className="h-11 w-auto object-contain"
                            />
                        </Link>

                        {/* Desktop Navigation — centered */}
                        <nav className="hidden lg:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="relative px-3.5 py-2 text-[13px] font-semibold text-gray-700 uppercase tracking-wide rounded-lg hover:text-[#f37021] hover:bg-orange-50/80 transition-all duration-200"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>

                        {/* Right side — contact + CTA */}
                        <div className="hidden lg:flex items-center gap-4">
                            <div className="flex items-center gap-1.5 text-sm text-gray-500">
                                <div className="flex text-yellow-400 text-[10px] gap-0.5">
                                    {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                                </div>
                                <span className="font-bold text-gray-700 text-xs">4.9</span>
                            </div>
                            <div className="w-px h-5 bg-gray-200" />
                            <a
                                href="https://wa.me/447777777777"
                                className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-green-600 transition-colors"
                            >
                                <FaWhatsapp className="text-green-500" />
                                <span className="text-xs font-medium">07777777777</span>
                            </a>
                            <Link
                                href="/contact"
                                className="bg-gradient-to-r from-[#f37021] to-[#e85d10] text-white px-5 py-2 rounded-full text-xs font-bold hover:shadow-lg hover:shadow-orange-200 hover:-translate-y-0.5 transition-all duration-200"
                            >
                                Book Now
                            </Link>
                        </div>

                        {/* Mobile hamburger */}
                        <button
                            className="lg:hidden p-2 text-gray-700 hover:text-[#f37021] transition-colors"
                            onClick={() => setMobileOpen(!mobileOpen)}
                        >
                            {mobileOpen ? <FaXmark size={22} /> : <FaBars size={22} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile drawer */}
            {mobileOpen && (
                <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-xl animate-in slide-in-from-top duration-200">
                    <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className="px-4 py-3 text-sm font-semibold text-gray-700 rounded-xl hover:bg-orange-50 hover:text-[#f37021] transition-all"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="mt-3 pt-3 border-t border-gray-100 flex flex-col gap-2">
                            <a href="tel:07777777777" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600">
                                <FaPhone className="text-[#f37021]" /> 07777777777
                            </a>
                            <Link
                                href="/contact"
                                className="bg-gradient-to-r from-[#f37021] to-[#e85d10] text-white text-center px-6 py-3 rounded-full text-sm font-bold"
                            >
                                Book Now
                            </Link>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
