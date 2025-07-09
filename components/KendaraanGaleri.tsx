"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface Vehicle {
  name: string;
  image: string;
  capacity: string;
  volume: string;
}

const vehicles: Vehicle[] = [
  {
    name: "CDE Truck",
    image: "/images/cde.png",
    capacity: "2.200kg",
    volume: "P 310 x L 170 x T 170",
  },
  {
    name: "CDE Frozen Truck",
    image: "/images/frozen.png",
    capacity: "2.000kg",
    volume: "P 475 x L 170 x T 175",
  },
  {
    name: "L300",
    image: "/images/l300.png",
    capacity: "800kg",
    volume: "P 237 x L 163 x T 122",
  },
  {
    name: "Grand Max",
    image: "/images/grandmax.png",
    capacity: "600kg",
    volume: "P 220 x L 135 x T 130",
  },
  {
    name: "Motor",
    image: "/images/motor.png",
    capacity: "30kg",
    volume: "P 100 x L 50 x T 40",
  },
];

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
};


export default function VehicleSection() {
  const [selected, setSelected] = useState<Vehicle | null>(null);

  return (
    <section className="py-20 bg-white text-center relative z-10">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-[#0c229f] mb-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Meet our vehicles!
      </motion.h2>
      <motion.p
        className="text-gray-600 mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        We provide a lot of vehicle to rescue your needs!
      </motion.p>

      <div className="flex flex-wrap justify-center gap-6 px-4 z-20 relative">
        {vehicles.map((v, i) => (
          <motion.div
            key={v.name}
            className="bg-white border border-blue-200 rounded-xl shadow-md p-4 cursor-pointer w-[220px] hover:shadow-xl transition"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
            custom={i}
            onClick={() => setSelected(v)}
          >
            <Image
              src={v.image}
              alt={v.name}
              width={160}
              height={100}
              className="mx-auto object-contain"
            />
            <h3 className="text-lg font-bold mt-4 text-[#0c229f]">{v.name}</h3>
            <p className="text-sm text-gray-700">Capacity Max: {v.capacity}</p>
            <p className="text-sm mb-1 text-gray-700">Vol (cm): {v.volume}</p>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className=""
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
            >

              <Image
                src={selected.image}
                alt={selected.name}
                width={800}
                height={400}
                className="w-full h-auto object-contain rounded"
              />

              <div className="mt-4 text-center">
                <h3 className="text-2xl font-bold text-[#ff671f] mb-1">
                  {selected.name}
                </h3>
                <p className="text-sm text-black">
                  Capacity Max: {selected.capacity}
                </p>
                <p className="text-sm text-black">Volume: {selected.volume}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
