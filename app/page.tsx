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
      <Footer />
    </>
  );
}
