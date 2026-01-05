"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteData } from "@/lib/constants/siteData";
import { Card } from "@/components/ui/Card";
import { IconCircle } from "@/components/ui/IconCircle";
import { Container } from "@/components/ui/Container";
import {
    FaStar,
    FaLightbulb,
    FaShieldAlt,
    FaHandshake,
    FaHeart,
    FaChartLine,
} from "react-icons/fa";
import {
    staggerContainer,
    staggerItem,
    useScrollReveal,
} from "@/lib/animations/scrollAnimations";

const iconMap: Record<string, React.ComponentType> = {
    FaStar,
    FaLightbulb,
    FaShieldAlt,
    FaHandshake,
    FaHeart,
    FaChartLine,
};

export const ValuesSection: React.FC = () => {
    const { ref, isInView } = useScrollReveal();
    const { title, titleHighlight, items } = siteData.values;

    return (
        <section className="relative py-20 md:py-28 overflow-hidden w-full" id="valores">
            {/* Split Background - Full Bleed */}
            <div className="absolute inset-0 flex flex-col md:flex-row h-full">
                {/* Left Blue Block - 35% width on desktop */}
                <div className="w-full md:w-[35%] bg-[var(--color-primary)] h-[300px] md:h-full relative overflow-hidden">
                    {/* Decorative circle for depth */}
                    <div className="absolute -right-20 -top-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
                </div>
                {/* Right Light Gradient - 65% width on desktop */}
                <div className="w-full md:w-[65%] bg-gradient-light h-full"></div>
            </div>

            {/* Content - Centered */}
            <Container className="relative z-10 h-full">
                <div className="flex flex-col md:flex-row md:gap-12 lg:gap-20 h-full">

                    {/* Title Section (Left Column) - Positioned over the blue bg */}
                    <div className="w-full md:w-[30%] flex flex-col justify-start pt-10 md:pt-20 mb-12 md:mb-0">
                        <motion.div
                            ref={ref}
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="sticky top-24"
                        >
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                <span className="text-white block mb-2">{title}</span>
                                <span className="text-[var(--color-accent)]">{titleHighlight}</span>
                            </h2>
                            <div className="w-20 h-1.5 bg-[var(--color-accent)] mt-8 rounded-full"></div>
                        </motion.div>
                    </div>

                    {/* Cards Grid (Right Column) - Positioned over the light bg */}
                    <div className="w-full md:w-[70%]">
                        <motion.div
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            variants={staggerContainer}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 pt-0 md:pt-12 pb-12"
                        >
                            {items.map((value) => {
                                const IconComponent = iconMap[value.icon];
                                return (
                                    <motion.div key={value.id} variants={staggerItem}>
                                        <Card hover className="h-full border-none shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 transform hover:-translate-y-1 bg-white p-8">
                                            <div className="flex items-start justify-between mb-6">
                                                <div className="p-3 bg-[var(--color-primary)]/10 rounded-full">
                                                    <span className="text-2xl text-[var(--color-primary)]">
                                                        <IconComponent />
                                                    </span>
                                                </div>
                                            </div>

                                            <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">
                                                {value.title}
                                            </h3>
                                            <p className="text-[var(--color-gray)] leading-relaxed text-sm md:text-base font-medium">
                                                {value.description}
                                            </p>
                                        </Card>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>
                </div>
            </Container>
        </section>
    );
};
