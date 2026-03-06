import { Metadata } from "next";
import { FaPhone, FaEnvelope, FaLocationDot } from "react-icons/fa6";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with Easy-Drive.UK. Book your intensive driving course today.",
};

export default function ContactPage() {
    return (
        <>
            <section className="bg-gradient-to-br from-slate-50 via-orange-50/30 to-blue-50/20 py-20 md:py-28 text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                        Get In <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Touch</span>
                    </h1>
                    <p className="text-lg text-muted max-w-xl mx-auto">Have questions? Ready to book? Reach out and we&apos;ll get you on the road.</p>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                        <h2 className="text-2xl font-extrabold mb-6">Send Us a Message</h2>
                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <input type="text" placeholder="First Name" className="border border-gray-200 rounded-xl px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" />
                                <input type="text" placeholder="Last Name" className="border border-gray-200 rounded-xl px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" />
                            </div>
                            <input type="email" placeholder="Email Address" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" />
                            <input type="tel" placeholder="Phone Number" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" />
                            <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-500 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors">
                                <option>Select a Course</option>
                                <option>Automatic Driving Lessons</option>
                                <option>Manual Driving Lessons</option>
                                <option>Intensive Driving Lessons</option>
                                <option>Pass Plus</option>
                                <option>Refresher Lessons</option>
                            </select>
                            <textarea rows={4} placeholder="Your Message" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none" />
                            <label className="flex items-start gap-2 text-sm text-gray-600">
                                <input type="checkbox" className="mt-0.5 accent-primary" required />
                                <span>I consent to having this website store and process my personal data in order to respond to my enquiry. I have read and agree to the Privacy Policy.</span>
                            </label>
                            <button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3.5 rounded-full font-bold hover:shadow-xl hover:shadow-primary/20 transition-all">
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Info + Map */}
                    <div className="space-y-8">
                        <div className="space-y-6">
                            {[
                                { icon: <FaPhone />, label: "Call Us", value: "07777777777" },
                                { icon: <FaEnvelope />, label: "Email Us", value: "support@easy-drive.uk" },
                                { icon: <FaLocationDot />, label: "Visit Us", value: "Manchester HQ, United Kingdom" },
                            ].map((c) => (
                                <div key={c.label} className="flex items-center gap-4 bg-white rounded-xl border border-gray-100 shadow-sm p-5">
                                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary text-white rounded-xl flex items-center justify-center text-lg">{c.icon}</div>
                                    <div>
                                        <p className="text-sm text-muted">{c.label}</p>
                                        <p className="font-bold">{c.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                            <iframe
                                width="100%"
                                height="300"
                                style={{ border: 0 }}
                                loading="lazy"
                                allowFullScreen
                                src="https://maps.google.com/maps?q=Manchester%20UK&t=m&z=12&output=embed&iwloc=near"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
