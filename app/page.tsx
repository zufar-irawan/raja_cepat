"use client";

import Header from "@/components/header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-white text-gray-800 pt-18">
        <Banner />

        {/* Services Section */}
        <section className="py-20 bg-gradient-to-b from-orange-500 to-orange-300 text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold mb-2">Our Services</h2>
            <h3 className="text-2xl font-semibold mb-4">Charter & Courier</h3>
            <p className="text-lg mb-12">
              We have a few product that can fit in you any situations, let
              take a look!
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
              {[
                {
                  title: "Same day Services",
                  desc: "Delivery on the same day or within 8 hours",
                  img: "/images/Sameday.png",
                },
                {
                  title: "Next day Services",
                  desc: "Delivery arrive the next day or within 24 hours.",
                  img: "/images/NextDay.png",
                },
                {
                  title: "Regular Services",
                  desc: "Standard Shipping within 1-3 days.",
                  img: "/images/RegularService.png",
                },
                {
                  title: "Cargo Darat",
                  desc: "Ground services with various types of vehicles equipped with GPS & ERP.",
                  img: "/images/CargoDarat.jpg",
                },
                {
                  title: "Cargo Laut",
                  desc: "Delivery on the same day or within 8 hours",
                  img: "/images/CargoLaut.jpg",
                },
                {
                  title: "Cargo Udara",
                  desc: "Delivery on the same day or within 8 hours",
                  img: "/images/CargoUdara.jpg",
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className="bg-white text-gray-800 px-4 py-6 rounded-lg shadow-md flex flex-col items-center justify-between hover:scale-105 transition h-80"
                >
                  <Image
                    src={card.img}
                    alt={card.title}
                    width={100}
                    height={100}
                    className="mb-4 object-contain"
                  />

                  <h4 className="text-center text-sm font-bold text-orange-600 h-10 flex items-center justify-center">
                    {card.title}
                  </h4>

                  <p className="text-center text-xs text-gray-700 h-14 flex items-center justify-center">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner and Clients */}
        <section id="mitra" className="py-24 bg-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-[#f05423] mb-12">
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

        {/* CTA Section */}
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
