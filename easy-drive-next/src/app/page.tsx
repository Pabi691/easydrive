import { Metadata } from "next";
import Link from "next/link";
import { FaLocationDot, FaStopwatch, FaShieldHalved, FaGraduationCap, FaStar, FaCar, FaArrowRight } from "react-icons/fa6";
import HeroScene3DWrapper from "@/components/HeroScene3DWrapper";

export const metadata: Metadata = {
  title: "Intensive Driving Courses | Easy-Drive.UK",
  description: "Fast-track your way to a driving license with Easy-Drive.UK's modern intensive driving courses.",
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-orange-50/30 to-blue-50/20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 pt-12 md:pt-16 pb-0 grid md:grid-cols-2 gap-6 items-center">
          <div className="z-10">
            <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
              UK&apos;s #1 Intensive Course Provider
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Pass Your <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Driving Test</span> in Days, Not Months
            </h1>
            <p className="text-lg text-muted leading-relaxed mb-8 max-w-xl">
              We match you with top-tier DVSA-approved local instructors and fast-track your practical test. Choose intensive or semi-intensive — get on the road faster.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/courses" className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3.5 rounded-full font-bold hover:shadow-xl hover:shadow-primary/20 transition-all hover:-translate-y-0.5">
                View Courses
              </Link>
              <Link href="/contact" className="border-2 border-primary text-primary px-8 py-3.5 rounded-full font-bold hover:bg-primary hover:text-white transition-all">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="relative">
            <HeroScene3DWrapper />
          </div>
        </div>
        {/* Decorative gradient orbs */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { num: "92%", label: "First-Time Pass Rate" },
            { num: "5,000+", label: "Students Passed" },
            { num: "4.9/5", label: "Google Rating" },
            { num: "1-2 Weeks", label: "Average Course Length" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{stat.num}</p>
              <p className="text-sm text-muted mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-accent font-bold text-sm uppercase tracking-wide">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Driving Packages <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Tailored to You</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <FaCar />, title: "Automatic Lessons", desc: "Learn effortlessly with modern automatic vehicles." },
              { icon: <FaGraduationCap />, title: "Manual Lessons", desc: "Master full vehicle control with manual gears." },
              { icon: <FaStopwatch />, title: "Intensive Courses", desc: "Fast-track 1–2 week crash courses." },
              { icon: <FaShieldHalved />, title: "Pass Plus", desc: "Post-test advanced skills certification." },
            ].map((s) => (
              <div key={s.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white text-xl mb-4 group-hover:scale-110 transition-transform">
                  {s.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-muted text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
              View All Services <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold">The Road to Your <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Licence</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Course Recommender", desc: "Answer a few questions and our system matches you to your ideal driving bundle." },
              { step: "2", title: "Fast-Track Booking", desc: "We match you with a DVSA-approved instructor and book your test weeks ahead of the queue." },
              { step: "3", title: "Learn & Pass", desc: "Complete your intensive lessons and ace your practical test with confidence." },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary text-white rounded-full flex items-center justify-center text-2xl font-extrabold mx-auto mb-4">
                  {s.step}
                </div>
                <h3 className="font-bold text-xl mb-2">{s.title}</h3>
                <p className="text-muted">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-slate-50/50" id="locations">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <iframe
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=United%20Kingdom&t=m&z=6&output=embed&iwloc=near"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Find Driving Lessons <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Near You</span></h2>
            <p className="text-muted mb-6">Our experienced instructors operate nationwide. Find out more about learning to drive in your area.</p>
            <div className="flex flex-wrap gap-2">
              {["Birmingham", "Brighton", "Bristol", "Derby", "Edinburgh", "Glasgow", "Leeds", "Liverpool", "London", "Manchester"].map((city) => (
                <span key={city} className="bg-white border border-gray-200 rounded-full px-4 py-2 text-sm font-medium text-gray-700 flex items-center gap-1.5 hover:border-primary hover:text-primary transition-colors cursor-pointer">
                  <FaLocationDot className="text-primary text-xs" /> {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold">What Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Students Say</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Sarah T.", text: "Passed first time in just 10 days! The intensive course was exactly what I needed.", rating: 5 },
              { name: "James R.", text: "Amazing instructors and the fast-track booking saved me months of waiting.", rating: 5 },
              { name: "Priya K.", text: "Nervous at first but my instructor was incredibly patient. Highly recommend Easy-Drive.UK!", rating: 5 },
            ].map((r) => (
              <div key={r.name} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="flex text-yellow-400 gap-0.5 mb-3">
                  {[...Array(r.rating)].map((_, i) => <FaStar key={i} />)}
                </div>
                <p className="text-gray-600 mb-4 italic">&ldquo;{r.text}&rdquo;</p>
                <p className="font-bold text-sm">{r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-10 md:p-14 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Ready to Start Driving?</h2>
            <p className="text-lg opacity-90 mb-8">Join thousands of successful students who passed their driving tests fast and efficiently.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/courses" className="bg-white text-primary px-8 py-3.5 rounded-full font-bold hover:shadow-xl transition-all">View Courses</Link>
              <a href="tel:07777777777" className="bg-gray-900 text-white px-8 py-3.5 rounded-full font-bold hover:bg-gray-800 transition-all">Call 07777777777</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
