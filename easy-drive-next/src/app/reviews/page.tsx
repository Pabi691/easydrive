import { Metadata } from "next";
import Link from "next/link";
import { FaStar, FaTrophy, FaUsers, FaThumbsUp } from "react-icons/fa6";

export const metadata: Metadata = {
    title: "Reviews",
    description: "Read what thousands of students say about learning with Easy-Drive.UK.",
};

const reviews = [
    { name: "Sarah T.", location: "Manchester", text: "Passed first time in just 10 days! Easy-Drive.UK made the whole process so smooth.", rating: 5 },
    { name: "James R.", location: "London", text: "Amazing instructors and the fast-track booking saved me months of waiting around.", rating: 5 },
    { name: "Priya K.", location: "Birmingham", text: "Nervous at first but my instructor was incredibly patient. Can not recommend enough!", rating: 5 },
    { name: "Tom W.", location: "Leeds", text: "The intensive course was absolutely intense but worth every penny. Passed with 3 minors.", rating: 5 },
    { name: "Emma L.", location: "Bristol", text: "PassProtect was a lifesaver. Failed first time but got a free retest and passed!", rating: 4 },
    { name: "David C.", location: "Edinburgh", text: "From complete beginner to full licence in 2 weeks. Brilliant experience all round.", rating: 5 },
];

export default function ReviewsPage() {
    return (
        <>
            <section className="bg-gradient-to-br from-slate-50 via-orange-50/30 to-blue-50/20 py-20 md:py-28 text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Student <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Reviews</span></h1>
                    <p className="text-lg text-muted max-w-xl mx-auto">Join thousands of successful learners who trusted Easy-Drive.UK to pass their driving test.</p>
                </div>
            </section>

            {/* Stats */}
            <section className="py-12 bg-white border-b border-gray-100">
                <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                        { icon: <FaStar className="text-yellow-400" />, num: "4.9/5", label: "Average Rating" },
                        { icon: <FaUsers className="text-primary" />, num: "5,000+", label: "Happy Students" },
                        { icon: <FaTrophy className="text-accent" />, num: "92%", label: "First-Time Pass" },
                        { icon: <FaThumbsUp className="text-secondary" />, num: "99%", label: "Would Recommend" },
                    ].map((s) => (
                        <div key={s.label}>
                            <div className="text-2xl mb-2 flex justify-center">{s.icon}</div>
                            <p className="text-2xl font-extrabold">{s.num}</p>
                            <p className="text-sm text-muted">{s.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Reviews Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.map((r, i) => (
                        <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-xl transition-all">
                            <div className="flex text-yellow-400 gap-0.5 mb-3">
                                {[...Array(r.rating)].map((_, j) => <FaStar key={j} />)}
                                {[...Array(5 - r.rating)].map((_, j) => <FaStar key={j} className="text-gray-200" />)}
                            </div>
                            <p className="text-gray-600 mb-4 italic leading-relaxed">&ldquo;{r.text}&rdquo;</p>
                            <div>
                                <p className="font-bold text-sm">{r.name}</p>
                                <p className="text-xs text-muted">{r.location}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Leave a Review CTA */}
            <section className="py-16 bg-slate-50/50">
                <div className="max-w-2xl mx-auto px-4 text-center">
                    <h2 className="text-2xl font-extrabold mb-3">Already <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Passed?</span></h2>
                    <p className="text-muted mb-6">We love hearing from our successful students. Share your story to help future learners choose Easy-Drive.UK.</p>
                    <div className="flex flex-wrap gap-3 justify-center">
                        <a href="#" className="border-2 border-green-500 text-green-600 px-6 py-2.5 rounded-full font-bold hover:bg-green-500 hover:text-white transition-all flex items-center gap-2"><FaStar /> Trustpilot</a>
                        <a href="#" className="border-2 border-blue-500 text-blue-600 px-6 py-2.5 rounded-full font-bold hover:bg-blue-500 hover:text-white transition-all flex items-center gap-2">G Google Review</a>
                    </div>
                </div>
            </section>
        </>
    );
}
