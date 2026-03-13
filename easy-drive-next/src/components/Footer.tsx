import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle, ArrowRight } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { courses } from "@/data/courses";

export default function Footer() {
    return (
        <footer className="bg-slate-900 pt-20 pb-8 relative overflow-hidden">
            {/* Decorative blurs */}
            <div className="absolute -bottom-32 right-0 h-72 w-72 rounded-full bg-accent/8 blur-[80px]" />

            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

                    {/* Brand */}
                    <div className="space-y-4">
                        <Link href="/" className="inline-block mb-2">
                            <Image
                                src="/images/easy-drive-logo.png"
                                alt="Easy-Drive.UK Logo"
                                width={180}
                                height={50}
                                className="w-auto h-10 object-contain brightness-0 invert opacity-90"
                            />
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Premium driving instruction tailored to your pace. DVSA-approved instructors, modern vehicles, and a proven track record.
                        </p>
                        <div className="flex gap-2.5 pt-2">
                            {[
                                { icon: <Facebook size={15} />, href: "#" },
                                { icon: <FaXTwitter size={13} />, href: "#" },
                                { icon: <Instagram size={15} />, href: "#" },
                            ].map((social, i) => (
                                <a key={i} href={social.href}
                                   className="w-9 h-9 rounded-xl border border-slate-700 bg-slate-800/50 flex items-center justify-center text-slate-400 hover:bg-accent/20 hover:text-accent hover:border-accent/40 transition-all">
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Courses */}
                    <div>
                        <h4 className="font-bold text-white mb-5 text-sm tracking-wider uppercase">Courses</h4>
                        <ul className="space-y-3">
                            {courses.map((course) => (
                                <li key={course.slug}>
                                    <Link href={`/services/${course.slug}`}
                                          className="text-sm text-slate-400 hover:text-accent transition-colors flex items-center gap-1.5 group">
                                        <ArrowRight size={12} className="text-slate-600 group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
                                        {course.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="font-bold text-white mb-5 text-sm tracking-wider uppercase">Company</h4>
                        <ul className="space-y-3">
                            {["About Us", "Testimonials", "FAQs", "Terms & Conditions", "Privacy Policy"].map(item => (
                                <li key={item}>
                                    <Link href="#" className="text-sm text-slate-400 hover:text-accent transition-colors flex items-center gap-1.5 group">
                                        <ArrowRight size={12} className="text-slate-600 group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold text-white mb-5 text-sm tracking-wider uppercase">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Phone size={15} className="text-slate-500 mt-0.5 shrink-0" />
                                <div>
                                    <span className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">Call</span>
                                    <a href="tel:+448001234567" className="block text-sm font-medium text-slate-300 hover:text-accent transition-colors">0800 123 4567</a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <MessageCircle size={15} className="text-emerald-500/60 mt-0.5 shrink-0" />
                                <div>
                                    <span className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">WhatsApp</span>
                                    <a href="https://wa.me/447777777777" className="block text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors">Chat with us</a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail size={15} className="text-slate-500 mt-0.5 shrink-0" />
                                <div>
                                    <span className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">Email</span>
                                    <a href="mailto:hello@easy-drive.uk" className="block text-sm font-medium text-slate-300 hover:text-accent transition-colors">hello@easy-drive.uk</a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin size={15} className="text-slate-500 mt-0.5 shrink-0" />
                                <div>
                                    <span className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">Office</span>
                                    <span className="block text-sm font-medium text-slate-300">123 Driving School Lane<br/>London, W1A 1AA</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-3">
                    <p className="text-sm text-slate-500">
                        &copy; {new Date().getFullYear()} Easy-Drive.UK. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-sm font-medium text-slate-500">All systems operational</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
