'use client';

import Header from "../components/header";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-white text-gray-800">
        {/* Banner Section */}
        <section className="relative h-[600px] w-full overflow-hidden">
          {/* Background Image */}
          <Image
            src="/images/ImageBg.jpg" 
            alt="Clean Banner"
            fill
            priority
            className="object-cover"
          />

          {/* SVG Overlay Diagonal Merah */}
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

          {/* Teks */}
          <div className="absolute z-20 text-white p-10 w-full md:w-1/2 h-full flex items-center animate-fade-in">
            <div>
              <h2 className="text-4xl font-bold mb-3">CLEAN</h2>
              <p className="text-sm leading-relaxed">
                Melalui prinsip profesional, mengutamakan budaya bersih & kepatuhan, tidak melupakan etika, mendukung
                hal-hal bermuatan lingkungan demi menciptakan proses operasional bisnis yang lebih baik.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
