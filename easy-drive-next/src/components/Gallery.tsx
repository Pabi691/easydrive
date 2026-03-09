"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

const galleryImages = [
    {
        src: "/images/hero_driving.png",
        alt: "Learner driving on a country road"
    },
    {
        src: "/images/hero.png",
        alt: "Instructor demonstrating driving techniques"
    },
    {
        src: "/images/success.png",
        alt: "Student holding pass certificate"
    },
    {
        src: "/images/isometric_3d.png",
        alt: "View from inside the car during a lesson"
    },
    {
        src: "/images/hero_driving.png",
        alt: "Driving instructor handing over car keys"
    }
];

export default function Gallery() {
    return (
        <section className="py-28 bg-gradient-to-b from-white via-orange-50/55 to-white overflow-hidden relative">
            <div className="absolute inset-x-0 top-10 mx-auto h-40 w-[70%] rounded-full bg-orange-50/70 blur-3xl -z-10" />
            <div className="container mx-auto px-6 md:px-12 mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row md:items-end justify-between gap-6"
                >
                    <div>
                        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-4 leading-[1.05]">
                            Life Behind <br /> <span className="text-slate-400">The Wheel</span>
                        </h2>
                    </div>
                    <p className="text-lg md:text-xl text-slate-600 max-w-md pb-2">
                        Get a glimpse into our modern tuition vehicles, high-quality lessons, and the joy of passing.
                    </p>
                </motion.div>
            </div>

            <div className="w-full relative">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <Swiper
                        slidesPerView={1.2}
                        spaceBetween={20}
                        freeMode={true}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true
                        }}
                        breakpoints={{
                            640: { slidesPerView: 2.2, spaceBetween: 24 },
                            1024: { slidesPerView: 3.2, spaceBetween: 32 },
                            1440: { slidesPerView: 4.2, spaceBetween: 40 },
                        }}
                        modules={[FreeMode, Autoplay]}
                        className="px-6 md:px-12 !pb-12"
                    >
                        {galleryImages.map((image, idx) => (
                            <SwiperSlide key={idx} className="h-full">
                                <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden group shadow-md shadow-slate-200/50">
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500" />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
            </div>
        </section>
    );
}
