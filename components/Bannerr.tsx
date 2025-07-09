"use client"

import { div } from "framer-motion/client";
import { SetStateAction, useEffect, useState } from "react";

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const slides = [
        {
            id: 1,
            title: "Transform Your Business",
            subtitle: "Revolusi Digital Dimulai Dari Sini",
            description: "Solusi teknologi terdepan untuk membawa bisnis Anda ke level selanjutnya dengan inovasi yang mengubah segalanya",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
            cta: "Mulai Sekarang",
            gradient: "from-blue-600 via-purple-600 to-pink-600"
        },
        {
            id: 2,
            title: "Innovation at Scale",
            subtitle: "Teknologi Masa Depan, Hari Ini",
            description: "Bergabunglah dengan ribuan perusahaan yang telah mempercayai platform kami untuk transformasi digital mereka",
            image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2025&q=80",
            cta: "Pelajari Lebih Lanjut",
            gradient: "from-emerald-600 via-teal-600 to-cyan-600"
        },
        {
            id: 3,
            title: "Global Excellence",
            subtitle: "Standar Internasional, Pelayanan Lokal",
            description: "Rasakan pengalaman premium dengan dukungan 24/7 dan teknologi berstandar global yang dapat diandalkan",
            image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            cta: "Hubungi Kami",
            gradient: "from-orange-600 via-red-600 to-pink-600"
        }
    ];

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, slides.length]);

    const goToSlide = (index: SetStateAction<number>) => {
        setCurrentSlide(index);
    };

    return (

        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Slides */}
            <div className="absolute inset-0">
                {slides.map((slide, index: number) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60 z-10" />
                        <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} opacity-20 z-10`} />
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>

            {/* Content */}
            <div className="relative z-20 container mx-auto px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 opacity-80">
                        <span className="text-lg font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            {slides[currentSlide].subtitle}
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent leading-tight">
                        {slides[currentSlide].title}
                    </h1>

                    <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        {slides[currentSlide].description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl">
                            {slides[currentSlide].cta}
                        </button>
                    </div>
                </div>
            </div>

            {/* Navigation Controls */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
                <div className="flex space-x-3">
                    {slides.map((_, index: number) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                                ? 'bg-white scale-125'
                                : 'bg-white/40 hover:bg-white/60'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>

    )
}

export default Banner