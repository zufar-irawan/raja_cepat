"use client";

import Header from "@/components/header";
import Footer from "@/components/Footer";
import VehicleSection from "@/components/KendaraanGaleri";
import Image from "next/image";
import { motion } from "framer-motion";
import Banner from "@/components/banner";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white text-gray-800 pt-20">
        {/* HERO SECTION */}
        <Banner />

        {/* Services Section */}
        <section className="py-14 bg-gradient-to-b from-orange-500 to-orange-300 text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-2">Our Services</h2>
            <h3 className="text-xl font-medium mb-4">Charter & Courier</h3>
            <p className="text-base mb-10">
              We have a few products that can fit in any situation—take a look!
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5">
              {[
                {
                  title: "Same day Services",
                  desc: "Delivery on the same day or within 8 hours",
                  img: "/images/Sameday.png",
                },
                {
                  title: "Next day Services",
                  desc: "Delivery arrives the next day or within 24 hours.",
                  img: "/images/NextDay.png",
                },
                {
                  title: "Regular Services",
                  desc: "Standard shipping within 1–3 days.",
                  img: "/images/RegularService.png",
                },
                {
                  title: "Cargo Darat",
                  desc: "Ground services with GPS & ERP-equipped vehicles.",
                  img: "/images/CargoDarat.png",
                },
                {
                  title: "Cargo Laut",
                  desc: "Ship cargo with various options to suit your needs.",
                  img: "/images/CargoLaut.png",
                },
                {
                  title: "Cargo Udara",
                  desc: "Fastest delivery via trusted air freight partners.",
                  img: "/images/CargoUdara.png",
                },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  className="bg-white text-gray-800 px-4 py-6 rounded-xl border border-gray-200 shadow-md flex flex-col items-center justify-between h-[310px] hover:ring-2 hover:ring-orange-400 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-[90px] h-[90px] mb-4">
                    <Image
                      src={card.img}
                      alt={card.title}
                      width={90}
                      height={90}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h4 className="text-sm font-semibold text-orange-600 text-center h-12 flex items-center justify-center">
                    {card.title}
                  </h4>
                  <p className="text-xs text-gray-700 text-center h-14 flex items-center justify-center px-2">
                    {card.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* VEHICLE SECTION */}
        <VehicleSection />

        {/* WareHouse Section */}
        <section id="warehouse" className="py-24">
          <div className="w-full p-20 bg-orange-500">
            <h1 className="text-white font-bold text-center text-3xl py-10">Warehouse</h1>

            <div className="flex flex-col gap-5 w-[80%] mx-auto md:flex-row">
              <div>
                <Image
                  src="/images/warehouse.png"
                  alt="warehouse"
                  width={2500}
                  height={2500}
                />
              </div>

              <div className="text-gray-200 text-md">
                <p>
                  Sebuah fasilitas dinamis yang penting dalam
                  rantai pasokan, melayani semua kegiatan pemenuhan
                  operasional termasuk proses Inbound, Pemeriksaan
                  QC, Pelabelan, Penyimpanan, Pengemasan, Outbound,
                  dan Pengiriman.
                </p>

                <p className="pt-10">
                  Ini memainkan peran kunci dalam membebaskan UMKM
                  dan wirausahawan dari beban biaya tetap dengan
                  menyediakan layanan pemenuhan yang mendukung ekspansi
                  bisnis ke area strategis di seluruh Indonesia dengan
                  risiko minimal. Gudang berfungsi sebagai mitra penting
                  bagi kliennya, mendorong pertumbuhan dan efisiensi
                  bisnis.
                </p>
              </div>
            </div>
          </div>


        </section>

        {/* PARTNER SECTION */}
        <section id="mitra" className="py-24 bg-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#f05423] mb-10">
              Partner and Clients
            </h2>
            <div className="flex justify-center gap-8 items-center flex-wrap">
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
                    className="h-10 grayscale hover:grayscale-0 transition duration-300"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                  />
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white text-center">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold bg-[#ff671f] text-transparent bg-clip-text mb-6"
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