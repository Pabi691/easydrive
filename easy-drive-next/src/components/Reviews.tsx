"use client";

import { motion } from "framer-motion";
import { Star, BadgeCheck, Quote } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const reviews = [
    {
        name: "Sarah Hughes",
        text: "Passed first time! My instructor was incredibly patient and made me feel at ease from day one. Highly recommend the automatic intensive course.",
        course: "Automatic Intensive",
        rating: 5,
    },
    {
        name: "James Miller",
        text: "The fast-track test booking system saved me months of waiting. Driving lessons were structured perfectly and helped me pass with zero faults.",
        course: "Manual Weekly",
        rating: 5,
    },
    {
        name: "Emily Clark",
        text: "Excellent service. The premium cars are a joy to drive and the instructors really know how to get you test-ready quickly. 10/10.",
        course: "Automatic Weekly",
        rating: 5,
    },
    {
        name: "Daniel Roberts",
        text: "I was super nervous about manual driving, but my instructor broke it down so well. I passed within 3 weeks thanks to the crash course.",
        course: "Manual Intensive",
        rating: 5,
    },
    {
        name: "Sophie Taylor",
        text: "Amazing experience from start to finish. The booking process was smooth and my instructor was always on time. Couldn't ask for better!",
        course: "Pass Plus",
        rating: 5,
    },
];

export default function Reviews() {
    return (
        <section id="reviews" className="py-24 overflow-hidden relative">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-sm font-bold tracking-widest uppercase mb-4"
                    >
                        Testimonials
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-5xl font-extrabold tracking-tight text-accent mb-5 leading-[1.1]"
                    >
                        Thousands of Happy Drivers
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center justify-center gap-4"
                    >
                        <div className="flex -space-x-2">
                            <img src="https://i.pravatar.cc/100?img=1" className="w-9 h-9 rounded-full border-2 border-white shadow" alt="" />
                            <img src="https://i.pravatar.cc/100?img=2" className="w-9 h-9 rounded-full border-2 border-white shadow" alt="" />
                            <img src="https://i.pravatar.cc/100?img=3" className="w-9 h-9 rounded-full border-2 border-white shadow" alt="" />
                            <div className="w-9 h-9 rounded-full bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center border-2 border-white">+5k</div>
                        </div>
                        <div className="text-left">
                            <div className="flex text-amber-400">
                                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                            </div>
                            <p className="text-xs font-bold text-slate-900 font-[family-name:var(--font-jetbrains)]">4.9/5 Average</p>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-5xl mx-auto"
                >
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={20}
                        grabCursor={true}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                        breakpoints={{
                            640: { slidesPerView: 2, spaceBetween: 24 },
                            1024: { slidesPerView: 3, spaceBetween: 24 },
                        }}
                        modules={[Autoplay, Pagination]}
                        className="!pb-14"
                    >
                        {reviews.map((review, idx) => (
                            <SwiperSlide key={idx}>
                                <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-[0_2px_20px_-6px_rgba(15,23,42,0.08)] h-full flex flex-col hover:shadow-lg transition-shadow">
                                    {/* Quote icon */}
                                    <div className="text-accent/20 mb-4">
                                        <Quote size={28} fill="currentColor" />
                                    </div>

                                    {/* Stars */}
                                    <div className="flex text-amber-400 mb-4">
                                        {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                                    </div>

                                    {/* Review Text */}
                                    <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                                        &quot;{review.text}&quot;
                                    </p>

                                    {/* Author */}
                                    <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-orange-400 flex items-center justify-center text-white text-sm font-bold">
                                                {review.name.split(" ").map(n => n[0]).join("")}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900 text-sm">{review.name}</h4>
                                                <p className="text-xs text-slate-400 flex items-center gap-1">
                                                    <BadgeCheck size={11} className="text-emerald-500" />
                                                    {review.course}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
            </div>
        </section>
    );
}
