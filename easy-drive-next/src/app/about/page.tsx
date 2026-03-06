import { Metadata } from "next";
import Image from "next/image";
import { FaStopwatch, FaUserCheck, FaShieldHalved, FaCheck } from "react-icons/fa6";

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn more about Easy-Drive.UK, our mission to fast-track your driving success.",
};

export default function AboutPage() {
    return (
        <>
            {/* Page Header */}
            <section className="bg-gradient-to-br from-slate-50 via-blue-50/30 to-orange-50/20 py-20 md:py-28 text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                        About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Easy-Drive.UK</span>
                    </h1>
                    <p className="text-lg text-muted max-w-xl mx-auto">We believe learning to drive shouldn&apos;t take years. Discover our mission to get you on the road safely and quickly.</p>
                </div>
            </section>

            {/* Story & Why Choose Us */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-extrabold mb-4">Our Story &amp; Mission</h2>
                        <p className="text-muted leading-relaxed mb-4">
                            Easy-Drive.UK was founded out of frustration with the traditional, painfully slow method of learning to drive. Waiting months for lessons and even longer for practical tests shouldn&apos;t be the norm.
                        </p>
                        <p className="text-muted leading-relaxed">
                            We designed a completely modern intensive course system that does the heavy lifting for you. We match you with top-tier, DVSA-approved local instructors and automatically fast-track your practical test, cutting out the waiting queues entirely.
                        </p>
                    </div>
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                        <h3 className="text-xl font-bold mb-6">Why Choose Us?</h3>
                        <div className="space-y-5">
                            {[
                                { icon: <FaStopwatch />, title: "Fast-Track Test Booking", desc: "We use dedicated software to monitor DVSA cancellations." },
                                { icon: <FaUserCheck />, title: "DVSA Approved Instructors", desc: "Only strict, highly-rated local instructors who know your test routes." },
                                { icon: <FaShieldHalved />, title: "PassProtect Guarantee", desc: "Failing happens. Free re-tests if things go wrong on the day." },
                            ].map((item) => (
                                <div key={item.title} className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center flex-shrink-0">{item.icon}</div>
                                    <div>
                                        <h4 className="font-bold">{item.title}</h4>
                                        <p className="text-sm text-muted">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Modern Fleet */}
            <section className="py-20 bg-slate-50/50">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                    <div className="rounded-2xl overflow-hidden shadow-xl">
                        <Image src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=600&q=80" alt="Modern Driving School Car" width={600} height={400} className="w-full h-80 object-cover" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-extrabold mb-4">Our Modern <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Fleet</span></h2>
                        <p className="text-muted leading-relaxed mb-6">Learn to drive in comfort and style. All our instructors use modern, dual-controlled, highly-rated vehicles.</p>
                        <ul className="space-y-3">
                            {["Modern Hatchbacks: Perfect size for manoeuvres", "Dual Controls: Keep you safe while you learn", "Manual & Auto Options: Choose what suits you best"].map((f) => (
                                <li key={f} className="flex items-center gap-2 text-gray-700"><FaCheck className="text-accent" /> {f}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Instructors */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-extrabold mb-10">Meet Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Experts</span></h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: "Sarah Davies", role: "Grade A Instructor", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80", color: "border-primary" },
                            { name: "Mark Lewis", role: "Auto Specialist", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80", color: "border-secondary" },
                            { name: "Nadia Khan", role: "Nervous Driver Expert", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80", color: "border-accent" },
                        ].map((inst) => (
                            <div key={inst.name} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                                <Image src={inst.img} alt={inst.name} width={80} height={80} className={`w-20 h-20 rounded-full object-cover mx-auto mb-4 border-3 ${inst.color}`} />
                                <h4 className="font-bold text-lg">{inst.name}</h4>
                                <p className="text-sm text-muted">{inst.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
