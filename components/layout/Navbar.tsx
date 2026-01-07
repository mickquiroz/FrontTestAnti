"use client";

import React, { useState, useEffect } from "react";
import { siteData } from "@/lib/constants/siteData";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { Container } from "@/components/ui/Container";

export const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            // Active section logic
            const sections = siteData.navigation
                .filter(item => item.href.startsWith("/#"))
                .map(item => item.href.substring(2)); // remove "/#"

            for (const sectionId of sections) {
                const element = document.getElementById(sectionId);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        // Initial check
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (href: string) => {
        setIsMobileMenuOpen(false);

        if (href.startsWith("/#")) {
            const sectionId = href.substring(2);
            // Manually set active for immediate feedback
            setActiveSection(sectionId);

            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <nav
            className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
                : "bg-white py-5 shadow-sm"
                }`}
        >
            <Container>
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center group">
                        <span className="text-3xl font-extrabold text-[var(--color-primary)] tracking-tight group-hover:opacity-90 transition-opacity">
                            SCL
                        </span>
                        <span className="text-3xl font-bold text-[var(--color-accent)] ml-2 group-hover:opacity-90 transition-opacity">
                            Consultores
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-x-8 lg:gap-x-12">
                        {siteData.navigation.map((item) => {
                            const isAnchor = item.href.startsWith("/#");
                            const sectionId = isAnchor ? item.href.substring(2) : "";
                            const isActive = activeSection === sectionId;

                            return (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    onClick={(e) => {
                                        if (isAnchor) {
                                            e.preventDefault();
                                            handleNavClick(item.href);
                                        }
                                    }}
                                    className={`text-sm font-semibold transition-colors relative py-1 ${isActive
                                        ? "text-[var(--color-primary)]"
                                        : "text-[var(--color-gray)] hover:text-[var(--color-primary)]"
                                        }`}
                                >
                                    {item.label}
                                    <span className={`absolute bottom-0 left-0 h-0.5 bg-[var(--color-accent)] transition-all duration-300 ${isActive ? "w-full" : "w-0 hover:w-full"
                                        }`}></span>
                                </a>
                            );
                        })}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-[var(--color-primary)] text-2xl p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 animate-slide-down">
                        <div className="flex flex-col py-4 px-6 space-y-4">
                            {siteData.navigation.map((item) => {
                                const isAnchor = item.href.startsWith("/#");
                                const sectionId = isAnchor ? item.href.substring(2) : "";
                                const isActive = activeSection === sectionId;
                                return (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        onClick={(e) => {
                                            if (isAnchor) {
                                                e.preventDefault();
                                            }
                                            handleNavClick(item.href);
                                        }}
                                        className={`block text-lg font-medium transition-colors ${isActive
                                            ? "text-[var(--color-primary)] pl-2 border-l-4 border-[var(--color-accent)]"
                                            : "text-[var(--color-gray)] hover:text-[var(--color-primary)]"
                                            }`}
                                    >
                                        {item.label}
                                    </a>
                                )
                            })}
                        </div>
                    </div>
                )}
            </Container>
        </nav>
    );
};
