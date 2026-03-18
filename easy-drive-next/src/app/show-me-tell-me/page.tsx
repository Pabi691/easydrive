import { Metadata } from "next";
import Link from "next/link";
import { FaPhone, FaWhatsapp } from "react-icons/fa6";

export const metadata: Metadata = {
    title: "Show Me, Tell Me Questions",
    description: "Master the DVSA vehicle safety questions before your practical test with Easy-Drive.UK.",
};

const questions = [
    { q: "Tell me how you'd check that the brakes are working before starting a journey.", a: "Brakes should not feel spongy or slack. Brakes should be tested as you set off. Vehicle should not pull to one side." },
    { q: "Show me how you'd check that the horn is working.", a: "Turn on ignition if necessary. Check is carried out by pressing the horn and listening for the sound." },
    { q: "Tell me where you'd find the info for the recommended tyre pressures for this car.", a: "You can find this in the manufacturer's guide, or sometimes on a sticker inside the driver's door shut, or inside the fuel filler flap." },
    { q: "Show me how you'd clean the windscreen using the washers and wipers.", a: "Turn on ignition if necessary. Operate the right-hand stalk (usually by pulling it towards you) to spray and wipe." },
    { q: "Show me how you'd set the rear demister.", a: "Turn on ignition if necessary. Press the rear demister switch, which usually has a rectangular icon with vertical lines." },
    { q: "Tell me how you'd check the headlights and tail lights are working.", a: "Turn on ignition and headlights. Walk around the vehicle to check all lights. Use reflections in windows or walls to check tail lights." },
    { q: "Show me how you'd check that the direction indicators are working.", a: "Apply the indicators or hazard warning switch and walk around the vehicle to inspect." },
    { q: "Tell me how you'd check the power-assisted steering is working.", a: "Two checks: gentle pressure on the steering wheel should give a response when the engine is running, and the steering should not be stiff." },
];

export default function ShowMeTellMePage() {
    return (
        <div className="pt-32 pb-24 bg-white relative overflow-hidden">
            <div className="absolute -top-10 -left-16 h-80 w-80 rounded-full bg-green-100/60 blur-3xl -z-10" />
            <div className="absolute top-10 right-0 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl -z-10" />

            <section className="container mx-auto px-6 md:px-12 text-center mb-16">
                <div className="max-w-4xl mx-auto">
                    <span className="inline-block bg-green-100 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">Essential DVSA Knowledge</span>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-accent leading-[1.05]">
                        Show Me, Tell Me Questions
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">Master the vehicle safety questions to ace the first part of your practical driving test.</p>
                </div>
            </section>

            <section className="container mx-auto px-6 md:px-12 mb-20">
                <div className="grid md:grid-cols-2 gap-6">
                    {questions.map((item, i) => (
                        <div key={i} className="glass-card p-6">
                            <div className="flex items-start gap-3 mb-3">
                                <span className="bg-accent text-white text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0">{i + 1}</span>
                                <h3 className="font-bold text-sm leading-snug text-slate-900">{item.q}</h3>
                            </div>
                            <div className="border-l-2 border-emerald-400 pl-4 ml-3">
                                <p className="text-sm text-slate-700 leading-relaxed"><strong>A:</strong> {item.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-20 bg-gradient-to-b from-blue-50/45 via-white to-orange-50/35 mb-16">
                <div className="max-w-6xl mx-auto px-6 md:px-12">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-10 text-accent">How To Score Better On Test Day</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            ["Say it confidently", "Answer clearly and avoid overexplaining. Keep it simple and direct."],
                            ["Practice with your car controls", "Memorize wipers, demisters, lights, and horn controls before test day."],
                            ["Use a 10-minute routine", "Revise 3 questions daily for one week and repeat weak areas."],
                        ].map(([title, desc], idx) => (
                            <div key={title} className={`rounded-3xl border border-slate-200 p-8 ${idx === 1 ? "bg-blue-50" : idx === 2 ? "bg-orange-50" : "bg-white"}`}>
                                <h3 className="text-2xl font-bold mb-3 text-slate-900">{title}</h3>
                                <p className="text-slate-600">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="max-w-3xl mx-auto px-6 md:px-12">
                    <div className="bg-emerald-50/50 border border-emerald-100 rounded-3xl p-10 text-center text-slate-900 shadow-sm">
                        <h2 className="text-2xl text-accent font-extrabold mb-3">Ready to Test Your Knowledge?</h2>
                        <p className="text-slate-600 mb-6 max-w-xl mx-auto">Practice these questions until you&apos;re confident. Then let us help you pass your practical test.</p>
                        <div className="flex flex-wrap justify-center gap-3">
                            <Link href="/services" className="bg-emerald-600 text-white border border-emerald-700 px-8 py-3 rounded-full font-bold hover:bg-emerald-700 hover:shadow-xl transition-all">
                                View Our Courses
                            </Link>
                            <a href="tel:+448001234567" className="bg-accent text-white px-8 py-3 rounded-full font-bold hover:shadow-xl shadow-accent/20 hover:bg-[#E05D23] transition-all inline-flex items-center gap-2">
                                <FaPhone /> Call
                            </a>
                            <a href="https://wa.me/447777777777" className="bg-white text-emerald-700 border border-emerald-200 px-8 py-3 rounded-full font-bold hover:bg-emerald-50 hover:shadow-sm transition-all inline-flex items-center gap-2">
                                <FaWhatsapp size={18} /> WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
