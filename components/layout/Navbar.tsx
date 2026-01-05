"use client";

import React, { useState, useEffect } from "react";
import { siteData } from "@/lib/constants/siteData";
import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (href: string) => {
        setIsMobileMenuOpen(false);

        if (href.startsWith("/#")) {
            const element = document.querySelector(href.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <nav
            className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-white shadow-md py-3"
                    : "bg-white/95 backdrop-blur-sm py-4"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <a href="/" className="flex items-center">
                        <span className="text-2xl font-bold text-[var(--color-primary)]">
                            SCL
                        </span>
                        <span className="text-2xl font-bold text-[var(--color-accent)] ml-1">
                            Consultores
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {siteData.navigation.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={(e) => {
                                    if (item.href.startsWith("/#")) {
                                        e.preventDefault();
                                        handleNavClick(item.href);
                                    }
                                }}
                                className="text-sm font-medium text-[var(--color-gray)] hover:text-[var(--color-primary)] transition-colors relative group"
                            >
                                {item.label}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--color-accent)] group-hover:w-full transition-all duration-300"></span>
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-[var(--color-primary)] text-2xl"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 space-y-3 border-t border-gray-200 pt-4">
                        {siteData.navigation.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={(e) => {
                                    if (item.href.startsWith("/#")) {
                                        e.preventDefault();
                                    }
                                    handleNavClick(item.href);
                                }}
                                className="block text-sm font-medium text-[var(--color-gray)] hover:text-[var(--color-primary)] transition-colors"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
};
