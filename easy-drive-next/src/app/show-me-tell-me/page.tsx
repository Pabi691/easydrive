import { Metadata } from "next";
import Link from "next/link";

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
        <>
            <section className="bg-gradient-to-br from-slate-50 via-green-50/30 to-blue-50/20 py-20 md:py-28 text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <span className="inline-block bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">Essential DVSA Knowledge</span>
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                        Show Me, <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Tell Me</span> Questions
                    </h1>
                    <p className="text-lg text-muted max-w-xl mx-auto">Master the vehicle safety questions to ace the first part of your practical driving test.</p>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-6">
                    {questions.map((item, i) => (
                        <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-xl transition-all">
                            <div className="flex items-start gap-3 mb-3">
                                <span className="bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0">{i + 1}</span>
                                <h3 className="font-bold text-sm leading-snug">{item.q}</h3>
                            </div>
                            <div className="border-l-2 border-accent pl-4 ml-3">
                                <p className="text-sm text-muted leading-relaxed"><strong>A:</strong> {item.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-16">
                <div className="max-w-3xl mx-auto px-4">
                    <div className="bg-gradient-to-r from-accent to-green-600 rounded-3xl p-10 text-center text-white">
                        <h2 className="text-2xl font-extrabold mb-3">Ready to Test Your Knowledge?</h2>
                        <p className="opacity-90 mb-6">Practice these questions until you&apos;re confident. Then let us help you pass your practical test.</p>
                        <Link href="/courses" className="bg-white text-green-700 px-8 py-3 rounded-full font-bold hover:shadow-xl transition-all">
                            View Our Courses
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
