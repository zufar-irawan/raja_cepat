"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { HiMenu, HiX } from "react-icons/hi"

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 80)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // Close mobile menu when clicking on a link
    const handleLinkClick = () => {
        setIsMobileMenuOpen(false)
    }

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }

        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isMobileMenuOpen])

    const navigationItems = [
        { href: "#beranda", label: "Beranda" },
        { href: "#layanan", label: "Services" },
        { href: "#kendaraan", label: "Vehicle" },
        { href: "#warehouse", label: "Warehouse" },
        { href: "#mitra", label: "Partner" }
    ]

    return (
        <header className="fixed w-full z-50">
            {/* Logo Section */}
            <div className="w-full relative bg-white z-50 shadow-sm">
                <div className="container mx-auto flex items-center justify-between">
                    {/* Logo */}
                    <div className="w-full relative bg-white py-5 z-50">
                        <Image
                            src={"/images/logo.png"}
                            alt="Logo"
                            width={80}
                            height={80}
                            className="mx-auto"
                        />
                    </div>
                </div>
            </div>

            {/* Desktop Navigation Bar - Only visible on desktop when scrolled */}
            <div className={`
                p-3 bg-gray-200 w-full absolute z-10 transition-all delay-100
                ${isScrolled ? 'top-22' : 'top-0'} ease-in-out hidden md:block
            `}>
                <ul className="flex justify-center container mx-auto gap-8">
                    {navigationItems.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className="text-gray-800 hover:text-orange-500 transition-colors duration-300 font-medium"
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`
                lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300
                ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
            `}>
                <div className={`
                    fixed right-0 top-0 h-full w-80 max-w-[80vw] bg-white shadow-2xl transform transition-transform duration-300
                    ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
                `}>
                    {/* Mobile Menu Items */}
                    <nav className="p-4">
                        <ul className="space-y-4">
                            {navigationItems.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        onClick={handleLinkClick}
                                        className="block py-3 px-4 rounded-lg text-gray-800 hover:text-orange-500 hover:bg-orange-50 transition-colors duration-300 font-medium"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>

            {/* Mobile Navigation Bar - Only visible on mobile */}
            <div className={`
                lg:hidden p-3  w-full absolute z-10 transition-all duration-300
                ${isScrolled ? 'top-19' : 'top-0'} ease-in-out
            `}>
                <div className="flex justify-center">
                    <button
                        onClick={() => setIsMobileMenuOpen(true)}
                        className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                        <HiMenu className="w-4 h-4" />
                        <span className="text-sm font-medium">Menu</span>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header