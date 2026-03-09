"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';

const reviews = [
    {
        name: "Sarah Hughes",
        photo: "/images/success.png",
        cardImage: "/images/hero_driving.png",
        rating: 5,
        text: "Passed first time! My instructor was incredibly patient and made me feel at ease from day one. Highly recommend the automatic intensive course.",
    },
    {
        name: "James Miller",
        photo: "/images/hero.png",
        cardImage: "/images/hero.png",
        rating: 5,
        text: "The fast-track test booking system saved me months of waiting. Driving lessons were structured perfectly and helped me pass with zero faults.",
    },
    {
        name: "Emily Clark",
        photo: "/images/isometric_3d.png",
        cardImage: "/images/success.png",
        rating: 5,
        text: "Excellent service. The premium cars are a joy to drive and the instructors really know how to get you test-ready quickly. 10/10.",
    },
    {
        name: "Daniel Roberts",
        photo: "/images/hero_driving.png",
        cardImage: "/images/isometric_3d.png",
        rating: 5,
        text: "I was super nervous about manual driving, but my instructor broke it down so well. I passed within 3 weeks thanks to the crash course.",
    },
];

export default function Reviews() {
    return (
        <section id="reviews" className="py-28 bg-gradient-to-b from-white via-blue-50/45 to-white overflow-hidden relative">
            {/* Decorative background elements */}
            <div className="absolute inset-0 bg-[url('/images/hero.png')] bg-cover bg-center opacity-[0.14]" />
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/3 -z-10" />
            <div className="absolute -left-16 bottom-0 w-72 h-72 bg-orange-50 rounded-full blur-3xl opacity-70 -z-10" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="text-left"
                    >
                        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.05]">
                            Thousands of <br /> <span className="text-slate-400">Happy Student Drivers</span>
                        </h2>
                        <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-md">
                            Don&apos;t just take our word for it. Read real stories from students who passed their driving tests with Easy-Drive.UK.
                        </p>

                        <div className="flex items-center gap-6 mb-8">
                            <div className="flex -space-x-4">
                                <img src="https://i.pravatar.cc/100?img=1" className="w-12 h-12 rounded-full border-2 border-white shadow-sm" alt="Student" />
                                <img src="https://i.pravatar.cc/100?img=2" className="w-12 h-12 rounded-full border-2 border-white shadow-sm" alt="Student" />
                                <img src="https://i.pravatar.cc/100?img=3" className="w-12 h-12 rounded-full border-2 border-white shadow-sm" alt="Student" />
                                <div className="w-12 h-12 rounded-full bg-slate-900 border-2 border-white text-white flex items-center justify-center text-xs font-bold shadow-sm">+5k</div>
                            </div>
                            <div>
                                <div className="flex text-yellow-500 mb-1">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                                </div>
                                <p className="text-sm font-semibold text-slate-900">4.9/5 Average Rating</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full max-w-[340px] md:max-w-md mx-auto relative"
                    >
                        <Swiper
                            effect={'cards'}
                            grabCursor={true}
                            modules={[EffectCards, Autoplay]}
                            autoplay={{
                                delay: 3500,
                                disableOnInteraction: false,
                            }}
                            className="w-full h-auto"
                        >
                            {reviews.map((review, idx) => (
                                <SwiperSlide key={idx} className="liquid-glass rounded-3xl p-8 flex flex-col h-[380px]">
                                    <div className="mb-5 h-24 w-full overflow-hidden rounded-2xl border border-white/70">
                                        <img src={review.cardImage} alt={review.name} className="h-full w-full object-cover" />
                                    </div>
                                    <div className="flex text-yellow-400 mb-6">
                                        {[...Array(review.rating)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                                    </div>
                                    <p className="text-slate-700 text-lg leading-relaxed mb-8 flex-grow">
                                        &quot;{review.text}&quot;
                                    </p>
                                    <div className="flex items-center gap-4 mt-auto">
                                        <img src={review.photo} alt={review.name} className="w-14 h-14 rounded-full object-cover border border-slate-200" />
                                        <div>
                                            <h4 className="font-bold text-slate-900">{review.name}</h4>
                                            <p className="text-sm text-slate-500">Passed <span className="text-green-600 font-medium">First Time</span></p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
