import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { courses } from "@/data/courses";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-slate-100 pt-20 pb-8 relative overflow-hidden">
            <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl -z-10" />
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Column 1: Brand */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <Image src="/images/easy-drive-logo.png" alt="Easy-Drive.UK Logo" width={220} height={60} className="w-auto h-12 object-contain" />
                        </Link>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            Premium driving instruction tailored to your pace. Learn from DVSA-approved instructors and pass with confidence in top-tier vehicles.
                        </p>
                        <div className="flex gap-4 pt-4">
                            <a href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-colors">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-colors">
                                <FaXTwitter size={16} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-colors">
                                <Instagram size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Courses */}
                    <div>
                        <h4 className="font-semibold text-slate-900 mb-6">Driving Courses</h4>
                        <ul className="space-y-4">
                            {courses.map((course) => (
                                <li key={course.slug}>
                                    <Link
                                        href={`/services/${course.slug}`}
                                        className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
                                    >
                                        {course.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Support */}
                    <div>
                        <h4 className="font-semibold text-slate-900 mb-6">Support</h4>
                        <ul className="space-y-4">
                            <li>
                                <Link href="#" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">About Us</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Testimonials</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">FAQs</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Terms & Conditions</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Privacy Policy</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div>
                        <h4 className="font-semibold text-slate-900 mb-6">Contact Us</h4>
                        <ul className="space-y-5">
                            <li className="flex items-start gap-3">
                                <Phone size={18} className="text-slate-400 mt-0.5" />
                                <div className="flex flex-col">
                                    <span className="text-sm text-slate-500">Call anytime</span>
                                    <a href="tel:+448001234567" className="text-sm font-medium text-slate-900 hover:underline">0800 123 4567</a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <MessageCircle size={18} className="text-green-500 mt-0.5" />
                                <div className="flex flex-col">
                                    <span className="text-sm text-slate-500">WhatsApp</span>
                                    <a href="https://wa.me/447777777777" className="text-sm font-medium text-slate-900 hover:underline">Chat with support</a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail size={18} className="text-slate-400 mt-0.5" />
                                <div className="flex flex-col">
                                    <span className="text-sm text-slate-500">Email us</span>
                                    <a href="mailto:hello@easy-drive.uk" className="text-sm font-medium text-slate-900 hover:underline">hello@easy-drive.uk</a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-slate-400 mt-0.5" />
                                <div className="flex flex-col">
                                    <span className="text-sm text-slate-500">Headquarters</span>
                                    <span className="text-sm font-medium text-slate-900">123 Driving School Lane<br />London, W1A 1AA</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-slate-500">
                        &copy; {new Date().getFullYear()} Easy-Drive.UK. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        <span className="text-sm font-medium text-slate-700">All systems operational</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
