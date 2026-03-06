import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaLocationDot } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {/* Brand */}
                <div>
                    <Image
                        src="/images/easy-drive-logo.png"
                        alt="Easy-Drive.UK Logo"
                        width={140}
                        height={100}
                        className="h-20 w-auto object-contain mb-4"
                    />
                    <p className="text-sm text-gray-400 leading-relaxed">
                        Empowering learners to pass fast through intensive, modern driving courses.
                    </p>
                    <div className="flex gap-3 mt-4">
                        <a href="#" className="text-gray-400 hover:text-primary transition-colors"><FaFacebook size={20} /></a>
                        <a href="#" className="text-gray-400 hover:text-primary transition-colors"><FaInstagram size={20} /></a>
                        <a href="#" className="text-gray-400 hover:text-primary transition-colors"><FaTwitter size={20} /></a>
                    </div>
                </div>

                {/* Courses */}
                <div>
                    <h4 className="text-white font-bold text-lg mb-4">Courses</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/services" className="hover:text-primary transition-colors">All Services</Link></li>
                        <li><Link href="/courses" className="hover:text-primary transition-colors">Intensive Crash Courses</Link></li>
                        <li><Link href="/courses" className="hover:text-primary transition-colors">Manual Driving Lessons</Link></li>
                        <li><Link href="/courses" className="hover:text-primary transition-colors">Automatic Driving Lessons</Link></li>
                        <li><Link href="/courses" className="hover:text-primary transition-colors">Refresher Lessons</Link></li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h4 className="text-white font-bold text-lg mb-4">Support</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/courses" className="hover:text-primary transition-colors">Course Recommender</Link></li>
                        <li><Link href="/show-me-tell-me" className="hover:text-primary transition-colors">Theory Test Advice</Link></li>
                        <li><Link href="/show-me-tell-me" className="hover:text-primary transition-colors">Practical Test Tips</Link></li>
                        <li><Link href="/#locations" className="hover:text-primary transition-colors">Areas We Cover</Link></li>
                        <li><Link href="/#faq" className="hover:text-primary transition-colors">FAQ</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-white font-bold text-lg mb-4">Contact Us</h4>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-center gap-2"><FaPhone className="text-accent" /> 0777777777777</li>
                        <li className="flex items-center gap-2"><FaEnvelope className="text-accent" /> support@easy-drive.uk</li>
                        <li className="flex items-center gap-2"><FaLocationDot className="text-accent" /> Manchester HQ, United Kingdom</li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 mt-12 pt-6 border-t border-gray-700 text-center text-sm text-gray-500">
                &copy; 2026 Easy-Drive.UK. All Rights Reserved.
            </div>
        </footer>
    );
}
