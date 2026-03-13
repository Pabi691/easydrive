"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const galleryImages = [
    { src: "/images/hero_driving.png", alt: "Learner driving on a country road", label: "Behind the Wheel" },
    { src: "/images/hero.png", alt: "Instructor demonstrating techniques", label: "Expert Instruction" },
    { src: "/images/success.png", alt: "Student holding pass certificate", label: "Test Day Success" },
    { src: "/images/isometric_3d.png", alt: "Premium interior car view", label: "Premium Vehicles" },
    { src: "/images/hero_driving.png", alt: "Practice on real roads", label: "Real Road Practice" },
];

export default function Gallery() {
    return (
        <section className="py-24 bg-gradient-to-b from-slate-50/80 to-white overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col md:flex-row md:items-end justify-between gap-6"
                >
                    <div>
                        <p className="text-sm font-bold tracking-widest text-accent uppercase mb-4">Gallery</p>
                        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                            Life Behind{" "}
                            <span className="text-gradient-cool">The Wheel</span>
                        </h2>
                    </div>
                    <p className="text-lg text-slate-500 max-w-sm pb-1">
                        From lesson one to the big pass — see the Easy-Drive experience.
                    </p>
                </motion.div>
            </div>

            <div className="w-full">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <Swiper
                        slidesPerView={1.3}
                        spaceBetween={16}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true
                        }}
                        breakpoints={{
                            640: { slidesPerView: 2.3, spaceBetween: 20 },
                            1024: { slidesPerView: 3.3, spaceBetween: 24 },
                            1440: { slidesPerView: 4.3, spaceBetween: 28 },
                        }}
                        modules={[Autoplay]}
                        className="px-6 md:px-12"
                    >
                        {galleryImages.map((image, idx) => (
                            <SwiperSlide key={idx}>
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group shadow-md shadow-slate-200/50 border border-slate-100">
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        loading="lazy"
                                    />
                                    {/* Hover overlay with label */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                                        <p className="text-white font-bold text-sm">{image.label}</p>
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
