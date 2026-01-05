"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteData } from "@/lib/constants/siteData";
import { SectionContainer } from "@/components/ui/SectionContainer";
import {
    staggerContainer,
    staggerItem,
    useScrollReveal,
} from "@/lib/animations/scrollAnimations";

export const HistoryTimeline: React.FC = () => {
    const { ref, isInView } = useScrollReveal();
    const { title, milestones } = siteData.history;

    return (
        <SectionContainer background="white" id="historia">
            {/* Section Title */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-20"
            >
                <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-primary)]">
                    <span className="text-[var(--color-gray)]">Nuestra</span>{" "}
                    <span className="text-[var(--color-accent)]">Historia</span>
                </h2>
            </motion.div>

            {/* Timeline */}
            <motion.div
                ref={ref}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={staggerContainer}
                className="relative mx-auto"
            >
                {/* Desktop Horizontal Timeline */}
                <div className="hidden md:block">
                    <div className="relative py-10">
                        {/* Timeline Line */}
                        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent opacity-30 transform -translate-y-1/2"></div>
                        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[var(--color-primary)] transform -translate-y-1/2 w-full"></div>

                        {/* Milestones Grid - Adjusted specifically for 6 items to fit nicely */}
                        <div className="grid grid-cols-6 gap-8">
                            {milestones.map((milestone, index) => (
                                <motion.div
                                    key={milestone.year}
                                    variants={staggerItem}
                                    className="relative flex flex-col items-center group"
                                >
                                    {/* Content Top (Alternating could be cool, but sticking to clean top-down for now, just nicely spaced) */}

                                    {/* Dot with Pulse Effect */}
                                    <div className="relative mb-8 z-10">
                                        <div className="w-8 h-8 rounded-full bg-[var(--color-accent)] border-4 border-white shadow-xl relative z-10 group-hover:scale-125 transition-transform duration-300"></div>
                                        <div className="absolute inset-0 bg-[var(--color-accent)] rounded-full animate-ping opacity-20"></div>
                                    </div>

                                    {/* Text Content */}
                                    <div className="text-center px-2">
                                        <div className="text-3xl font-bold text-[var(--color-primary)] mb-3 opacity-90">
                                            {milestone.year}
                                        </div>
                                        <div className="font-bold text-lg text-[var(--color-gray)] mb-2 leading-tight">
                                            {milestone.title}
                                        </div>
                                        <div className="text-sm text-[var(--color-gray)] opacity-80 leading-relaxed">
                                            {milestone.description}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mobile Vertical Timeline */}
                <div className="md:hidden space-y-10 pl-4">
                    {milestones.map((milestone) => (
                        <motion.div
                            key={milestone.year}
                            variants={staggerItem}
                            className="flex gap-6 relative"
                        >
                            {/* Line connecting dots */}
                            <div className="absolute left-[11px] top-8 bottom-[-40px] w-0.5 bg-[var(--color-primary)] opacity-30 last:hidden"></div>

                            {/* Dot */}
                            <div className="flex-shrink-0 pt-1 relative z-10">
                                <div className="w-6 h-6 rounded-full bg-[var(--color-accent)] border-4 border-white shadow-md"></div>
                            </div>

                            {/* Content */}
                            <div className="pb-2">
                                <div className="font-bold text-2xl text-[var(--color-primary)] mb-1">
                                    {milestone.year}
                                </div>
                                <div className="font-bold text-lg text-[var(--color-gray)] mb-2">
                                    {milestone.title}
                                </div>
                                <div className="text-base text-[var(--color-gray)] leading-relaxed">
                                    {milestone.description}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </SectionContainer>
    );
};
