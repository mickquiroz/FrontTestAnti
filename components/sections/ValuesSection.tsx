"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteData } from "@/lib/constants/siteData";
import { Card } from "@/components/ui/Card";
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
        <section className="relative py-20 md:py-28 w-full overflow-hidden" id="valores">
            {/* Background Layer */}
            <div className="absolute inset-0 flex flex-col lg:flex-row h-full">
                {/* Left Blue Block - 50% width on desktop for balance */}
                <div className="w-full lg:w-1/2 bg-[var(--color-primary)] h-[300px] lg:h-full relative overflow-hidden">
                    {/* Subtle pattern instead of interfering blob */}
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--color-white),_transparent_70%)]"></div>
                </div>
                {/* Right Light Gradient */}
                <div className="w-full lg:w-1/2 bg-gradient-light h-full"></div>
            </div>

            {/* Content Layer */}
            <Container className="relative z-10 h-full">
                <div className="flex flex-col lg:flex-row h-full">

                    {/* Left Column: Title & Intro */}
                    <div className="flex-1 flex flex-col justify-center pt-8 lg:pt-0 lg:pr-16">
                        <motion.div
                            ref={ref}
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                <span className="text-white block mb-2">{title}</span>
                                <span className="text-[var(--color-accent)]">{titleHighlight}</span>
                            </h2>
                            <div className="w-24 h-2 bg-[var(--color-accent)] mt-8 rounded-full shadow-lg"></div>

                            <p className="mt-8 text-white/90 text-lg leading-relaxed font-medium max-w-sm">
                                Guiamos nuestro trabajo con principios sólidos que garantizan resultados excepcionales.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right Column: Cards Grid */}
                    <div className="flex-1 lg:pl-8">
                        <motion.div
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            variants={staggerContainer}
                            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 pt-0 lg:pt-12 pb-12"
                        >
                            {items.map((value) => {
                                const IconComponent = iconMap[value.icon];
                                return (
                                    <motion.div key={value.id} variants={staggerItem}>
                                        <Card hover className="h-full border-none shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 transform hover:-translate-y-1 bg-white p-6 md:p-8">
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
