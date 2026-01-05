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
                className="text-center mb-16"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)]">
                    {title}
                </h2>
            </motion.div>

            {/* Timeline - Horizontal on Desktop, Vertical on Mobile */}
            <motion.div
                ref={ref}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={staggerContainer}
                className="relative"
            >
                {/* Desktop Horizontal Timeline */}
                <div className="hidden md:block">
                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute top-1/2 left-0 right-0 h-1 bg-[var(--color-primary)] transform -translate-y-1/2"></div>

                        {/* Milestones */}
                        <div className="grid grid-cols-6 gap-4">
                            {milestones.map((milestone, index) => (
                                <motion.div
                                    key={milestone.year}
                                    variants={staggerItem}
                                    className="relative"
                                >
                                    {/* Dot */}
                                    <div className="flex justify-center mb-4">
                                        <div className="w-6 h-6 rounded-full bg-[var(--color-accent)] border-4 border-white shadow-lg z-10"></div>
                                    </div>

                                    {/* Content */}
                                    <div className="text-center">
                                        <div className="font-bold text-lg text-[var(--color-primary)] mb-2">
                                            {milestone.year}
                                        </div>
                                        <div className="font-semibold text-sm text-[var(--color-gray)] mb-1">
                                            {milestone.title}
                                        </div>
                                        <div className="text-xs text-[var(--color-gray)]">
                                            {milestone.description}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mobile Vertical Timeline */}
                <div className="md:hidden space-y-8">
                    {milestones.map((milestone) => (
                        <motion.div
                            key={milestone.year}
                            variants={staggerItem}
                            className="flex gap-4"
                        >
                            {/* Dot and Line */}
                            <div className="flex flex-col items-center">
                                <div className="w-6 h-6 rounded-full bg-[var(--color-accent)] border-4 border-white shadow-lg flex-shrink-0"></div>
                                <div className="w-1 flex-grow bg-[var(--color-primary)] mt-2"></div>
                            </div>

                            {/* Content */}
                            <div className="pb-8">
                                <div className="font-bold text-xl text-[var(--color-primary)] mb-1">
                                    {milestone.year}
                                </div>
                                <div className="font-semibold text-base text-[var(--color-gray)] mb-2">
                                    {milestone.title}
                                </div>
                                <div className="text-sm text-[var(--color-gray)]">
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
