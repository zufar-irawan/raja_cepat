"use client";
import Header from "@/components/header";
import Footer from "@/components/Footer";
import * as framerMotion from "framer-motion";
import Image from "next/image";
import Banner from "@/components/banner";

const motion = framerMotion.motion;

export default function Home() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-white text-gray-800 pt-18">
        <Banner />

        {/* Partner adan CLients */}
        <section id="mitra" className="py-24 bg-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-[##f05423] mb-12">
              Partner and Clients
            </h2>
            <div className="flex justify-center gap-10 items-center flex-wrap">
              {[
                "penerbit",
                "auriga",
                "cosmax",
                "gokomodo",
                "idmark",
                "Jajai",
                "kitani",
                "eurekabook",
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

        {/* Collaborate CTA Section */}
        <section className="py-20 bg-white text-center">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold bg-[#ff671f] text-transparent bg-clip-text mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Excited to collaborate with RACE?
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <a
              href="https://api.whatsapp.com/send/?phone=6281281050420&text&type=phone_number&app_absent=0"
              className="inline-block bg-[#f05423] hover:bg-[#c6431b] text-white px-6 py-3 rounded-md font-semibold text-sm transition duration-300 shadow-md"
            >
              Contact us
            </a>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
