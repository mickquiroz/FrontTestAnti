"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteData } from "@/lib/constants/siteData";
import { Card } from "@/components/ui/Card";
import { IconCircle } from "@/components/ui/IconCircle";
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
        <section className="relative py-16 md:py-20" id="valores">
            <div className="absolute inset-0 flex">
                {/* Left Blue Block */}
                <div className="w-0 md:w-1/3 bg-[var(--color-primary)]"></div>
                {/* Right Light Gradient */}
                <div className="w-full md:w-2/3 bg-gradient-light"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold">
                        <span className="text-[var(--color-primary)]">{title}</span>{" "}
                        <span className="text-accent">{titleHighlight}</span>
                    </h2>
                </motion.div>

                {/* Values Grid */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={staggerContainer}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {items.map((value) => {
                        const IconComponent = iconMap[value.icon];
                        return (
                            <motion.div key={value.id} variants={staggerItem}>
                                <Card hover className="text-center h-full">
                                    <div className="flex justify-center mb-4">
                                        <IconCircle>
                                            <IconComponent />
                                        </IconCircle>
                                    </div>
                                    <h3 className="text-lg font-bold text-[var(--color-primary)] mb-2">
                                        {value.title}
                                    </h3>
                                    <p className="text-sm text-[var(--color-gray)]">
                                        {value.description}
                                    </p>
                                </Card>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};
