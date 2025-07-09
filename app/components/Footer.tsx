"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#151515] text-white relative overflow-hidden px-4 sm:px-8 md:px-20 py-14 md:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Grid Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Image
              src="/images/rece.png"
              alt="Logo RajaCepat"
              width={120}
              height={40}
              className="mb-4"
            />
          </div>

          {/* Tentang */}
          <div>
            <h3 className="text-base font-semibold uppercase mb-4 text-[#ff671f]">Raja Cepat</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="#" className="hover:text-white">Company Profile</Link></li>
              <li><Link href="#" className="hover:text-white">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-white">Career</Link></li>
            </ul>
          </div>

          {/* Bantuan */}
          <div>
            <h3 className="text-base font-semibold uppercase mb-4 text-[#ff671f]">Bantuan</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="#" className="hover:text-white">Delivery Service</Link></li>
              <li><Link href="#" className="hover:text-white">Fullfillments Service</Link></li>
              <li><Link href="#" className="hover:text-white">Syarat & Ketentuan</Link></li>
              <li><Link href="#" className="hover:text-white">Hubungi Kami</Link></li>
            </ul>
          </div>

          {/* Apps */}
          <div>
            <h3 className="text-base font-semibold uppercase mb-4 text-[#ff671f]">Download App</h3>
            <div className="flex flex-col sm:flex-row gap-3 items-center sm:items-start">
              <Image src="/images/appstore.png" alt="App Store" width={135} height={40} />
              <Image src="/images/playstore.png" alt="Play Store" width={135} height={40} />
            </div>
          </div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          className="mt-12 pt-6 border-t border-gray-700 text-center text-sm text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          © {new Date().getFullYear()} RajaCepat. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}
