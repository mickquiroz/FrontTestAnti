"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteData } from "@/lib/constants/siteData";
import { Card } from "@/components/ui/Card";
import { IconCircle } from "@/components/ui/IconCircle";
import { SectionContainer } from "@/components/ui/SectionContainer";
import {
    FaMedal,
    FaCogs,
    FaPeopleCarry,
    FaRocket,
    FaHeadset,
    FaChartBar,
} from "react-icons/fa";
import {
    staggerContainer,
    staggerItem,
    useScrollReveal,
} from "@/lib/animations/scrollAnimations";

const iconMap: Record<string, React.ComponentType> = {
    FaMedal,
    FaCogs,
    FaPeopleCarry,
    FaRocket,
    FaHeadset,
    FaChartBar,
};

export const WhyChooseUs: React.FC = () => {
    const { ref, isInView } = useScrollReveal();
    const { title, features, kpiSummary } = siteData.whyChooseUs;

    return (
        <SectionContainer background="white" id="por-que-elegirnos">
            {/* Section Title */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)]">
                    {title}
                </h2>
            </motion.div>

            {/* Features Grid */}
            <motion.div
                ref={ref}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={staggerContainer}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
            >
                {features.map((feature) => {
                    const IconComponent = iconMap[feature.icon];
                    return (
                        <motion.div key={feature.id} variants={staggerItem}>
                            <Card hover className="h-full">
                                <div className="flex items-start gap-4">
                                    <div
                                        className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center text-2xl text-[var(--color-primary)]"
                                        style={{ backgroundColor: feature.color }}
                                    >
                                        <IconComponent />
                                    </div>
                                    <div>
                                        <h3 className="text-base font-bold text-[var(--color-primary)] mb-2">
                                            {feature.title}
                                        </h3>
                                        <p className="text-sm text-[var(--color-gray)]">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    );
                })}
            </motion.div>

            {/* KPI Summary Row */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-[var(--color-primary)] rounded-2xl p-8 text-white"
            >
                {kpiSummary.map((kpi, index) => (
                    <div key={index} className="text-center">
                        <div className="text-3xl font-bold text-[var(--color-accent)] mb-2">
                            {kpi.value}
                        </div>
                        <div className="text-sm font-medium">{kpi.label}</div>
                    </div>
                ))}
            </motion.div>
        </SectionContainer>
    );
};
