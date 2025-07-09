"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 80)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header className="fixed w-full z-50">
            <div className="w-full relative bg-white py-5 z-50">
                <Image
                    src={"/images/logo.png"}
                    alt="Logo"
                    width={80}
                    height={80}
                    className="mx-auto"
                />
            </div>

            <div className={`
                p-3 bg-gray-200 w-full absolute z-10 transition-all delay-100
                ${isScrolled ? 'top-22' : 'top-0'} ease-in-out
            `}>
                <ul className="flex justify-center w-[50%] mx-auto gap-8">
                    <li className="text-gray-800 hover:text-orange-500"><Link href={"#"}>Beranda</Link></li>
                    <li className="text-gray-800 hover:text-orange-500"><Link href={"#"}>Tentang</Link></li>
                    <li className="text-gray-800 hover:text-orange-500"><Link href={"#"}>Kontak</Link></li>
                </ul>
            </div>
        </header>
    )
}

export default Header