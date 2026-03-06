import { Metadata } from "next";
import Link from "next/link";
import { FaCheck, FaStar } from "react-icons/fa6";

export const metadata: Metadata = {
    title: "Courses",
    description: "Explore Easy-Drive.UK's intensive, semi-intensive, and refresher driving courses.",
};

const courses = [
    {
        badge: "Beginner Zero Experience",
        title: "40 Hour Complete",
        desc: "For learners who have never sat behind the wheel before.",
        price: "£1,850",
        features: ["Fast-tracked Practical Test", "Fast-tracked Theory Test", "Comprehensive Foundation", "PassProtect Guarantee Included"],
        popular: false,
    },
    {
        badge: "Most Popular",
        title: "30 Hour Intensive",
        desc: "For learners with some previous experience wanting to pass fast.",
        price: "£1,450",
        features: ["Fast-tracked Practical Test", "Theory Test Support", "Focused Intensive Training", "PassProtect Guarantee Included"],
        popular: true,
    },
    {
        badge: "Refresher",
        title: "10 Hour Top-Up",
        desc: "For near-test-ready learners or those who failed recently.",
        price: "£650",
        features: ["Fast-tracked Practical Test", "Test Route Practice", "Mock Test Session", "Confidence Builder"],
        popular: false,
    },
];

export default function CoursesPage() {
    return (
        <>
            <section className="bg-gradient-to-br from-slate-50 via-orange-50/30 to-blue-50/20 py-20 md:py-28 text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Course Packages</span></h1>
                    <p className="text-lg text-muted max-w-xl mx-auto">Choose the course that fits your experience level and budget. All courses include a fast-tracked test date.</p>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
                    {courses.map((course) => (
                        <div key={course.title} className={`bg-white rounded-2xl border shadow-sm p-8 flex flex-col relative ${course.popular ? "border-primary shadow-xl scale-105" : "border-gray-100"}`}>
                            {course.popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold px-4 py-1 rounded-full">
                                    Most Popular
                                </div>
                            )}
                            <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 self-start ${course.popular ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"}`}>
                                {course.badge}
                            </span>
                            <h3 className="text-2xl font-extrabold mb-2">{course.title}</h3>
                            <p className="text-muted text-sm mb-4">{course.desc}</p>
                            <p className="text-4xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">{course.price}</p>
                            <ul className="space-y-3 flex-1">
                                {course.features.map((f) => (
                                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                                        <FaCheck className="text-accent flex-shrink-0" /> {f}
                                    </li>
                                ))}
                            </ul>
                            <Link href="/contact" className={`mt-8 text-center py-3 rounded-full font-bold transition-all ${course.popular ? "bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg" : "border-2 border-primary text-primary hover:bg-primary hover:text-white"}`}>
                                Select Package
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-slate-50/50">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-extrabold text-center mb-10">Course <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">FAQs</span></h2>
                    <div className="space-y-4">
                        {[
                            { q: "How quickly can I pass?", a: "Most students on our intensive courses pass within 1-2 weeks." },
                            { q: "What's included in the price?", a: "All courses include lesson hours, fast-tracked test booking, and instructor support." },
                            { q: "Can I pay in instalments?", a: "Yes, we offer flexible payment plans. Contact us for details." },
                        ].map((faq) => (
                            <div key={faq.q} className="bg-white rounded-xl border border-gray-100 p-6">
                                <h4 className="font-bold mb-2">{faq.q}</h4>
                                <p className="text-muted text-sm">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
