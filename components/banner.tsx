"use client"

import { div } from "framer-motion/client";
import Image from "next/image";
import { SetStateAction, useEffect, useState } from "react";

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const slides = [
        {
            id: 1,
            text: (
                <div className="
                            absolute z-20 text-white p-10 w-full md:w-1/2 
                            h-full flex items-center animate-fade-in
                            left-0
                        ">
                    <div>
                        <h2 className="text-4xl font-bold mb-3">RAJA CEPAT</h2>
                        <p className="text-md leading-relaxed">
                            PT Raja Cepat Nusantara adalah perusahaan di bidang perkapalan dan transportasi laut,
                            berkantor pusat di Sekejati, Jawa Barat, dengan 250–499 karyawan dan pendapatan hingga Rp25 juta.
                        </p>
                    </div>
                </div>
            ),
            image: "/images/ImageBg.jpg",
            overlay: (
                <svg
                    className="absolute top-0 left-0 w-full h-full z-10"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                >
                    <polygon
                        points="0,0 60,0 40,100 0,100"
                        fill="rgba(220, 38, 38, 0.42)" // merah semi-transparan
                    />
                </svg>
            )
        },
        {
            id: 2,
            text: (
                <div className="
                            absolute z-20 text-white p-10 w-full md:w-1/2 
                            h-full flex items-center animate-fade-in
                            right-0 ml-auto justify-end
                        ">
                    <div>
                        <h2 className="text-4xl font-bold mb-3">Layanan Terpercaya</h2>
                        <p className="text-md leading-relaxed">
                            Kami hadir untuk memenuhi kebutuhan <span className="font-bold">pengiriman barang</span> Anda ke seluruh Indonesia,
                            dengan layanan yang <span className="font-bold">aman</span>, <span className="font-bold">cepat</span>, dan
                            <span className="font-bold">tepat waktu</span>.
                        </p>
                    </div>
                </div>
            ),
            image: "/images/ImageBg2.jpg",
            overlay: (
                <svg
                    className="absolute top-0 left-0 w-full h-full z-10"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                >
                    <polygon
                        points="100,0 40,0 60,100 100,100"
                        fill="rgba(59, 130, 246, 0.42)" // biru semi-transparan
                    />
                </svg>
            )
        },
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
        <>
            {/* Banner Section */}
            <section className="relative h-[600px] w-full overflow-hidden">
                {/* Background Image */}
                {slides.map((slide, index: number) => (
                    <div
                        key={slide.id}
                        className={`transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <Image
                            src={slide.image}
                            alt="Banner"
                            fill
                            priority
                            className="object-cover"
                        />

                        {slide.overlay}

                        {slide.text}
                    </div>
                ))}

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
        </>
    )
}

export default Banner