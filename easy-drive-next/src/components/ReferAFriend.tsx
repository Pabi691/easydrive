"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Gift, UserPlus, Plus, Trash2, CheckCircle, Users } from "lucide-react";

export default function ReferAFriend() {
    const [studentName, setStudentName] = useState("");
    const [phone, setPhone] = useState("");
    const [friends, setFriends] = useState([{ name: "", phone: "" }]);
    const [submitted, setSubmitted] = useState(false);

    const addFriend = () => {
        if (friends.length < 5) setFriends([...friends, { name: "", phone: "" }]);
    };

    const removeFriend = (i: number) => {
        if (friends.length > 1) setFriends(friends.filter((_, idx) => idx !== i));
    };

    const updateFriend = (i: number, field: "name" | "phone", value: string) => {
        setFriends(friends.map((f, idx) => (idx === i ? { ...f, [field]: value } : f)));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section className="py-24 relative overflow-hidden"
            style={{ background: "linear-gradient(180deg, #f0fdf4 0%, #ffffff 50%, #f0fdf4 100%)" }}
        >
            {/* Background glows */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-200/20 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-teal-100/30 rounded-full blur-[80px] -z-10" />

            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="grid lg:grid-cols-2 gap-10 items-center">

                        {/* Left — Info */}
                        <div>
                            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 text-sm font-bold px-4 py-2 rounded-full mb-6">
                                <Gift size={15} />
                                Referral Reward
                            </div>
                            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-5">
                                Recommend a Friend,<br />
                                <span className="text-emerald-600">Get £20</span> Gift Voucher
                            </h2>
                            <p className="text-slate-500 text-lg leading-relaxed mb-6">
                                Know someone who needs driving lessons? Refer between <strong className="text-slate-700">3 and 5 friends</strong> and we&apos;ll send you a <strong className="text-slate-700">£20 gift voucher</strong> as a thank you.
                            </p>

                            {/* Note about adding friends */}
                            <div className="flex items-start gap-3 bg-emerald-50 border border-emerald-100 rounded-2xl px-4 py-3 mb-8">
                                <Users size={18} className="text-emerald-600 mt-0.5 shrink-0" />
                                <p className="text-sm text-emerald-800 leading-relaxed">
                                    Start with one friend and <strong>add up to 5 — one at a time</strong>. Each friend needs their name and phone number so we can follow up with them.
                                </p>
                            </div>

                            <div className="space-y-4">
                                {[
                                    "Add 1 friend to start, up to 5 total",
                                    "Your friend books any driving course",
                                    "You receive a £20 gift voucher",
                                ].map((step, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-7 h-7 rounded-full bg-emerald-500 text-white text-sm font-bold flex items-center justify-center shrink-0">
                                            {i + 1}
                                        </div>
                                        <span className="text-slate-700 font-medium">{step}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right — Form */}
                        <div className="relative rounded-3xl overflow-hidden border border-emerald-100 bg-white shadow-[0_4px_30px_rgba(16,185,129,0.08)] p-8">
                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center justify-center text-center py-10 gap-4"
                                >
                                    <CheckCircle size={52} className="text-emerald-500" />
                                    <h3 className="text-2xl font-extrabold text-slate-900">Thanks, {studentName}!</h3>
                                    <p className="text-slate-500 max-w-xs">
                                        We&apos;ve received your referrals. We&apos;ll be in touch on <strong>{phone}</strong> once your friends book their course.
                                    </p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    {/* Your Details */}
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Your Details</p>
                                        <div className="space-y-3">
                                            <input
                                                required
                                                type="text"
                                                placeholder="Your full name"
                                                value={studentName}
                                                onChange={(e) => setStudentName(e.target.value)}
                                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400 bg-slate-50 text-sm transition-all"
                                            />
                                            <input
                                                required
                                                type="tel"
                                                placeholder="Your telephone number"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400 bg-slate-50 text-sm transition-all"
                                            />
                                        </div>
                                    </div>

                                    {/* Friends */}
                                    <div>
                                        <div className="flex items-center justify-between mb-3">
                                            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                                                Friends You&apos;re Recommending
                                            </p>
                                            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                                                {friends.length} / 5
                                            </span>
                                        </div>

                                        <div className="space-y-3">
                                            {friends.map((f, i) => (
                                                <div key={i} className="rounded-xl border border-slate-100 bg-slate-50 p-3 space-y-2">
                                                    <div className="flex items-center justify-between mb-1">
                                                        <div className="flex items-center gap-2">
                                                            <div className="w-5 h-5 rounded-full bg-emerald-500 text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                                                                {i + 1}
                                                            </div>
                                                            <span className="text-xs font-semibold text-slate-500">Friend {i + 1}</span>
                                                        </div>
                                                        {friends.length > 1 && (
                                                            <button type="button" onClick={() => removeFriend(i)}
                                                                className="text-slate-300 hover:text-red-400 transition-colors"
                                                            >
                                                                <Trash2 size={14} />
                                                            </button>
                                                        )}
                                                    </div>
                                                    <input
                                                        required
                                                        type="text"
                                                        placeholder="Friend's full name"
                                                        value={f.name}
                                                        onChange={(e) => updateFriend(i, "name", e.target.value)}
                                                        className="w-full px-3 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400 bg-white text-sm transition-all"
                                                    />
                                                    <input
                                                        required
                                                        type="tel"
                                                        placeholder="Friend's phone number"
                                                        value={f.phone}
                                                        onChange={(e) => updateFriend(i, "phone", e.target.value)}
                                                        className="w-full px-3 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400 bg-white text-sm transition-all"
                                                    />
                                                </div>
                                            ))}
                                        </div>

                                        {friends.length < 5 && (
                                            <button
                                                type="button"
                                                onClick={addFriend}
                                                className="mt-3 flex items-center gap-1.5 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
                                            >
                                                <Plus size={15} /> Add another friend
                                            </button>
                                        )}
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl transition-all hover:-translate-y-0.5 shadow-[0_8px_20px_-6px_rgba(5,150,105,0.4)] hover:shadow-[0_12px_25px_-6px_rgba(5,150,105,0.5)] active:scale-[0.97]"
                                    >
                                        <UserPlus size={16} />
                                        Submit Referrals
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
