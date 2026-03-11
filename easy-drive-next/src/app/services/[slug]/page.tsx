import Link from "next/link";
import { Metadata } from "next";
import { FaCircleCheck, FaPhone, FaWhatsapp } from "react-icons/fa6";
import { courses, getCourseBySlug } from "@/data/courses";

type PageProps = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const course = getCourseBySlug(slug);
    if (!course) return { title: "Course Not Found" };
    return {
        title: course.metaTitle,
        description: course.metaDescription,
    };
}

export default async function CourseDetailsPage({ params }: PageProps) {
    const { slug } = await params;
    const course = getCourseBySlug(slug);
    if (!course) {
        return (
            <div className="pt-32 pb-24 bg-white">
                <div className="container mx-auto px-6 md:px-12 text-center">
                    <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">Course Not Found</h1>
                    <p className="text-slate-600 mb-6">
                        The course you&apos;re looking for doesn&apos;t exist yet. View all available courses below.
                    </p>
                    <Link
                        href="/services"
                        className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition-colors"
                    >
                        Back to Services
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-32 pb-24 bg-white relative overflow-hidden">
            <div className="absolute -left-20 top-10 h-80 w-80 rounded-full bg-blue-100/70 blur-3xl -z-10" />
            <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-orange-100/70 blur-3xl -z-10" />

            <section className="container mx-auto px-6 md:px-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="text-brand-orange font-bold text-sm tracking-wider uppercase mb-4 block">
                            Course Details
                        </span>
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.05]">
                            {course.title}
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-6">
                            {course.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-8">
                            {course.badges.map((badge) => (
                                <span
                                    key={badge}
                                    className="rounded-full border border-slate-200 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-700"
                                >
                                    {badge}
                                </span>
                            ))}
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-700 mb-8">
                            <span className="font-semibold text-slate-900">Typical duration:</span> {course.duration}
                        </div>

                        <div className="flex flex-wrap gap-3">
                            <Link
                                href="/contact"
                                className={`inline-flex items-center gap-2 bg-gradient-to-r ${course.gradient} text-white px-7 py-3 rounded-full text-sm font-bold hover:shadow-lg transition-all`}
                            >
                                Book This Course
                            </Link>
                            <Link
                                href="/services"
                                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition-colors"
                            >
                                View All Courses
                            </Link>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-orange-100/70 via-white to-blue-100/70 blur-2xl -z-10" />
                        <div className="rounded-[2.5rem] overflow-hidden border border-white/70 shadow-2xl bg-white">
                            <img src={course.image} alt={course.title} className="h-full w-full object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-16 container mx-auto px-6 md:px-12">
                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="rounded-3xl border border-slate-200 p-8 bg-white">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">What You&apos;ll Learn</h2>
                        <ul className="space-y-3 text-slate-700">
                            {course.highlights.map((item) => (
                                <li key={item} className="flex items-start gap-2">
                                    <FaCircleCheck className="text-green-500 mt-0.5" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="rounded-3xl border border-slate-200 p-8 bg-slate-50">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">Who It&apos;s For</h2>
                        <ul className="space-y-3 text-slate-700">
                            {course.idealFor.map((item) => (
                                <li key={item} className="flex items-start gap-2">
                                    <FaCircleCheck className="text-green-500 mt-0.5" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="rounded-3xl border border-slate-200 p-8 bg-white">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">What&apos;s Included</h2>
                        <ul className="space-y-3 text-slate-700">
                            {course.includes.map((item) => (
                                <li key={item} className="flex items-start gap-2">
                                    <FaCircleCheck className="text-green-500 mt-0.5" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <section className="mt-16">
                <div className="max-w-4xl mx-auto px-6 md:px-12">
                    <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-10 md:p-12 text-center text-white">
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                            Ready to Start {course.title}?
                        </h2>
                        <p className="text-slate-200 mb-7 max-w-2xl mx-auto">
                            Speak with our team to build a plan around your schedule and target test date.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3">
                            <a href="tel:+448001234567" className="rounded-full bg-white px-7 py-3 font-semibold text-slate-900 flex items-center gap-2">
                                <FaPhone /> Call 0800 123 4567
                            </a>
                            <a href="https://wa.me/447777777777" className="rounded-full bg-green-600 px-7 py-3 font-semibold text-white flex items-center gap-2">
                                <FaWhatsapp /> WhatsApp Chat
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
