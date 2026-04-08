"use client";

import { useState, useEffect } from "react";
import { PhoneCall } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingContact() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 1200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {/* ── DESKTOP: floating pills bottom-right ── */}
            <div
                className="hidden lg:flex fixed bottom-6 right-6 z-[9999] flex-col items-end gap-3 transition-all duration-700"
                style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(24px)",
                }}
            >
                {/* WhatsApp */}
                <a
                    href="https://wa.me/447836409023"
                    aria-label="Chat on WhatsApp"
                    className="group relative flex items-center gap-0 overflow-hidden rounded-full shadow-lg transition-all duration-300 hover:shadow-[0_8px_32px_rgba(16,185,129,0.4)] active:scale-95"
                    style={{
                        background: "linear-gradient(135deg, #25D366, #128C7E)",
                        padding: "14px",
                        maxWidth: "52px",
                        width: "auto",
                    }}
                    onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.maxWidth = "180px";
                        (e.currentTarget as HTMLAnchorElement).style.padding = "14px 20px 14px 14px";
                    }}
                    onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.maxWidth = "52px";
                        (e.currentTarget as HTMLAnchorElement).style.padding = "14px";
                    }}
                >
                    <span className="absolute inset-0 rounded-full animate-ping opacity-20 bg-emerald-400 pointer-events-none" />
                    <FaWhatsapp size={24} className="text-white relative z-10 shrink-0" />
                    <span className="text-white text-sm font-semibold whitespace-nowrap overflow-hidden relative z-10 transition-all duration-300 max-w-0 group-hover:max-w-[120px] opacity-0 group-hover:opacity-100 ml-0 group-hover:ml-3">
                        WhatsApp Us
                    </span>
                </a>

                {/* Call */}
                <a
                    href="tel:+447836409023"
                    aria-label="Call us"
                    className="group relative flex items-center gap-0 overflow-hidden rounded-full shadow-lg transition-all duration-300 hover:shadow-[0_8px_32px_rgba(255,107,44,0.45)] active:scale-95"
                    style={{
                        background: "linear-gradient(135deg, #FF6B2C, #e85520)",
                        padding: "14px",
                        maxWidth: "52px",
                        width: "auto",
                    }}
                    onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.maxWidth = "180px";
                        (e.currentTarget as HTMLAnchorElement).style.padding = "14px 20px 14px 14px";
                    }}
                    onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.maxWidth = "52px";
                        (e.currentTarget as HTMLAnchorElement).style.padding = "14px";
                    }}
                >
                    <PhoneCall size={22} className="text-white relative z-10 shrink-0" />
                    <span className="text-white text-sm font-semibold whitespace-nowrap overflow-hidden relative z-10 transition-all duration-300 max-w-0 group-hover:max-w-[120px] opacity-0 group-hover:opacity-100 ml-0 group-hover:ml-3">
                        07836 409023
                    </span>
                </a>
            </div>

            {/* ── MOBILE: full-width bar pinned to bottom ── */}
            <div
                className="lg:hidden fixed bottom-0 left-0 right-0 z-[9999] flex transition-all duration-700"
                style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(100%)",
                }}
            >
                {/* Call — left 50% */}
                <a
                    href="tel:+447836409023"
                    className="relative flex w-1/2 items-center justify-center gap-2.5 py-4 active:brightness-90 transition-all"
                    style={{ background: "linear-gradient(135deg, #FF6B2C, #e85520)" }}
                >
                    <PhoneCall size={20} className="text-white shrink-0" />
                    <span className="text-white text-[15px] font-bold tracking-wide">Call Now</span>
                </a>

                {/* Divider */}
                <div className="w-px bg-white/20 shrink-0" />

                {/* WhatsApp — right 50% */}
                <a
                    href="https://wa.me/447836409023"
                    className="relative flex w-1/2 items-center justify-center gap-2.5 py-4 active:brightness-90 transition-all"
                    style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
                >
                    {/* subtle ping on WhatsApp */}
                    <span className="absolute inset-0 animate-pulse opacity-10 bg-white pointer-events-none" />
                    <FaWhatsapp size={22} className="text-white shrink-0 relative z-10" />
                    <span className="text-white text-[15px] font-bold tracking-wide relative z-10">WhatsApp</span>
                </a>
            </div>
        </>
    );
}
