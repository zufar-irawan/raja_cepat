"use client";
import Header from "@/components/header";
import Footer from "@/components/Footer";
import * as framerMotion from "framer-motion";
import Image from "next/image";

const motion = framerMotion.motion;

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

      {/* Partner adan CLients */}
      <section id="mitra" className="py-24 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[##f05423] mb-12">
            Partner and Clients
          </h2>
          <div className="flex justify-center gap-10 items-center flex-wrap">
            {[
              "eurekabook",
              "auriga",
              "cosmax",
              "gokomodo",
              "idmark",
              "Jajai",
              "kitani",
              "penerbit",
              "pro",
              "sinbad",
              "super",
              "w",
            ].map((logo, i) => {
              const ext = logo === "w" ? "jpg" : "png";
              return (
                <motion.img
                  key={logo}
                  src={`/images/${logo}.${ext}`}
                  alt={logo}
                  className="h-12"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                />
              );
            })}
          </div>
        </div>
      </section>
      <Footer  />
    </>
  );
}
