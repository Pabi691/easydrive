"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
    {
        q: "How quickly can I get a driving test booked?",
        a: "We typically find cancellation slots within 1-3 weeks, compared to the usual 3-6 month DVSA wait time. Our fast-track system monitors available slots 24/7.",
    },
    {
        q: "Do you offer automatic and manual lessons?",
        a: "Yes! We offer both automatic and manual driving lessons. Automatic is our most popular choice — it's easier to learn and lets you focus on road awareness.",
    },
    {
        q: "What's included in the intensive crash course?",
        a: "The intensive course includes 30+ hours of professional instruction, all learning materials, mock tests, and a fast-tracked practical test booking — all within 1-2 weeks.",
    },
    {
        q: "Are your instructors DVSA approved?",
        a: "Absolutely. Every instructor is DVSA-approved (green badge), fully DBS-checked, and has a minimum 4.5-star student rating. We only work with the best.",
    },
    {
        q: "What happens if I fail my test?",
        a: "Don't worry — it happens. We'll rebook your test for free and provide additional practice sessions focused on the areas that need improvement. No extra charges.",
    },
    {
        q: "Can I pay in instalments?",
        a: "Yes, we offer flexible payment plans. You can pay per lesson, in weekly instalments, or save money by booking a full course package upfront.",
    },
];

function FAQItem({ faq, idx, isOpen, toggle }: { faq: typeof faqs[0]; idx: number; isOpen: boolean; toggle: () => void }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.06 }}
        >
            <button
                onClick={toggle}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 ${isOpen
                    ? "bg-accent/5 border-accent/20 shadow-md shadow-accent/5"
                    : "bg-white border-slate-100 hover:bg-slate-50 hover:border-slate-200 shadow-[0_2px_12px_-4px_rgba(15,23,42,0.06)]"
                    }`}
            >
                <div className="flex items-center justify-between gap-4">
                    <h3 className={`font-bold text-[15px] leading-snug ${isOpen ? "text-accent" : "text-slate-900"}`}>
                        {faq.q}
                    </h3>
                    <ChevronDown
                        size={18}
                        className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-accent" : "text-slate-400"
                            }`}
                    />
                </div>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                        >
                            <p className="text-slate-500 text-sm leading-relaxed mt-3 pr-8">
                                {faq.a}
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </button>
        </motion.div>
    );
}

export default function FAQ() {
    const [openIdx, setOpenIdx] = useState<number | null>(0);

    return (
        <section className="py-24 bg-gradient-to-b from-white to-slate-50/80 relative overflow-hidden">
            <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-orange-50/40 to-transparent rounded-full blur-[80px] -z-10" />
            <div className="absolute bottom-20 left-0 w-[350px] h-[350px] bg-gradient-to-tr from-blue-50/40 to-transparent rounded-full blur-[80px] -z-10" />

            <div className="container mx-auto px-6 md:px-12">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-14">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-accent to-orange-500 flex items-center justify-center text-white shadow-lg shadow-accent/25"
                        >
                            <HelpCircle size={26} />
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl md:text-5xl font-extrabold tracking-tight text-accent mb-5 leading-[1.1]"
                        >
                            Frequently Asked Questions
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1, duration: 0.5 }}
                            className="text-lg text-slate-500 leading-relaxed"
                        >
                            Got questions? We&apos;ve got answers. Here are the most common ones.
                        </motion.p>
                    </div>

                    <div className="space-y-3">
                        {faqs.map((faq, idx) => (
                            <FAQItem
                                key={idx}
                                faq={faq}
                                idx={idx}
                                isOpen={openIdx === idx}
                                toggle={() => setOpenIdx(openIdx === idx ? null : idx)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
