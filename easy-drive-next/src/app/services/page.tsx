import { Metadata } from "next";
import Link from "next/link";
import { FaCar, FaGears, FaGaugeHigh, FaAward, FaCircleCheck, FaArrowRight, FaPhone } from "react-icons/fa6";
import Scene3DWrapper from "@/components/Scene3DWrapper";

export const metadata: Metadata = {
    title: "Our Services",
    description: "Explore our driving services including automatic, manual, intensive lessons and Pass Plus certification.",
};

const services = [
    {
        icon: <FaCar className="text-3xl" />,
        title: "Automatic Driving Lessons",
        desc: "Learn to drive with ease in our modern, dual-controlled automatic vehicles. Perfect for beginners who want to focus purely on road skills without worrying about gear changes.",
        features: ["Modern dual-controlled autos", "Perfect for nervous learners", "Quicker to learn", "Growing in popularity"],
        color: "from-orange-500 to-red-500",
    },
    {
        icon: <FaGears className="text-3xl" />,
        title: "Manual Driving Lessons",
        desc: "Master the art of manual driving. Full control over your vehicle with dedicated clutch and gear training, giving you the freedom to drive any car on the road.",
        features: ["Full vehicle mastery", "Drive any car type", "Better fuel economy", "Greater car selection"],
        color: "from-blue-600 to-indigo-600",
    },
    {
        icon: <FaGaugeHigh className="text-3xl" />,
        title: "Intensive Driving Lessons",
        desc: "Our flagship service. Condense months of traditional lessons into a focused 1-2 week intensive course. Ideal for those who need to pass quickly.",
        features: ["Pass in 1-2 weeks", "Fast-track test booking", "Dedicated 1-on-1 training", "Structured daily schedule"],
        color: "from-green-500 to-emerald-600",
    },
    {
        icon: <FaAward className="text-3xl" />,
        title: "Pass Plus",
        desc: "Already passed your test? Take your skills to the next level with our Pass Plus certification covering motorways, night driving, and adverse weather conditions.",
        features: ["Motorway training", "Night driving skills", "All-weather confidence", "Insurance discounts"],
        color: "from-purple-500 to-pink-500",
    },
];

export default function ServicesPage() {
    return (
        <>
            {/* Hero with 3D */}
            <section className="relative bg-gradient-to-br from-slate-50 via-orange-50/20 to-blue-50/30 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-6 items-center">
                    <div className="z-10">
                        <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
                            What We Offer
                        </span>
                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                            Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Driving Services</span>
                        </h1>
                        <p className="text-lg text-muted leading-relaxed mb-8 max-w-lg">
                            Comprehensive driving solutions tailored to every learner. From complete beginners to experienced drivers wanting advanced certification.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-3.5 rounded-full font-bold hover:shadow-xl hover:shadow-primary/20 transition-all hover:-translate-y-0.5"
                        >
                            Get Started <FaArrowRight />
                        </Link>
                    </div>
                    <div>
                        <Scene3DWrapper />
                    </div>
                </div>
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            </section>

            {/* Services Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-extrabold">
                            Choose Your <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Perfect Course</span>
                        </h2>
                        <p className="text-muted mt-3 max-w-xl mx-auto">Every learner is different. We offer four distinct service paths to match your experience, goals, and timeline.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {services.map((service) => (
                            <div
                                key={service.title}
                                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all group overflow-hidden"
                            >
                                <div className={`bg-gradient-to-r ${service.color} h-2`} />
                                <div className="p-8">
                                    <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform`}>
                                        {service.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                                    <p className="text-muted leading-relaxed mb-5">{service.desc}</p>
                                    <ul className="space-y-2">
                                        {service.features.map((f) => (
                                            <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                                                <FaCircleCheck className="text-accent flex-shrink-0" /> {f}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link
                                        href="/contact"
                                        className={`mt-6 inline-flex items-center gap-2 bg-gradient-to-r ${service.color} text-white px-6 py-2.5 rounded-full text-sm font-bold hover:shadow-lg transition-all`}
                                    >
                                        Enquire Now <FaArrowRight />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-slate-50/50">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-14">
                        How Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Process</span> Works
                    </h2>
                    <div className="grid md:grid-cols-3 gap-10">
                        {[
                            { step: "1", title: "Assessment", desc: "We evaluate your driving experience level and recommend the perfect package." },
                            { step: "2", title: "Fast-Track Setup", desc: "Our team secures your DVSA practical test date, bypassing standard queues." },
                            { step: "3", title: "Drive & Pass", desc: "Complete your condensed lessons and pass your test with total confidence." },
                        ].map((s) => (
                            <div key={s.step}>
                                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary text-white rounded-full flex items-center justify-center text-2xl font-extrabold mx-auto mb-5">
                                    {s.step}
                                </div>
                                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                                <p className="text-muted">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-10 md:p-14 text-center text-white">
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Ready to Start Your Engines?</h2>
                        <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">Don&apos;t wait months to hit the road. Secure your dates today and join thousands of successful Easy-Drive students.</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/contact" className="bg-white text-primary px-8 py-3.5 rounded-full font-bold hover:shadow-xl transition-all">
                                Contact Us
                            </Link>
                            <a href="tel:07777777777" className="bg-gray-900 text-white px-8 py-3.5 rounded-full font-bold hover:bg-gray-800 transition-all flex items-center gap-2">
                                <FaPhone /> 07777777777
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
