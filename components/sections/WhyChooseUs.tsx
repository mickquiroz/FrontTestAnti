"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteData } from "@/lib/constants/siteData";
import { Card } from "@/components/ui/Card";
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
                className="text-center mb-16"
            >
                <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-primary)]">
                    {title}
                </h2>
            </motion.div>

            {/* Features Grid */}
            <motion.div
                ref={ref}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={staggerContainer}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            >
                {features.map((feature) => {
                    const IconComponent = iconMap[feature.icon];
                    return (
                        <motion.div key={feature.id} variants={staggerItem}>
                            <Card hover className="h-full border border-gray-100 shadow-[var(--shadow-card)] hover:shadow-2xl transition-all duration-300">
                                <div className="flex items-start gap-5">
                                    <div
                                        className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl text-white shadow-md transform group-hover:rotate-12 transition-transform duration-300"
                                        style={{ backgroundColor: feature.color || 'var(--color-primary)' }}
                                    >
                                        <IconComponent />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-[var(--color-primary)] mb-2">
                                            {feature.title}
                                        </h3>
                                        <p className="text-sm text-[var(--color-gray)] leading-relaxed opacity-90">
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
                className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-[var(--color-primary)] rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl -ml-10 -mb-10 pointer-events-none"></div>

                {kpiSummary.map((kpi, index) => (
                    <div key={index} className="text-center relative z-10 border-b md:border-b-0 md:border-r border-white/10 last:border-0 pb-6 md:pb-0">
                        <div className="text-4xl md:text-5xl font-bold text-[var(--color-accent)] mb-2">
                            {kpi.value}
                        </div>
                        <div className="text-base font-medium opacity-90 tracking-wide uppercase text-sm">{kpi.label}</div>
                    </div>
                ))}
            </motion.div>
        </SectionContainer>
    );
};
