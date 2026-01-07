"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteData } from "@/lib/constants/siteData";
import { SectionContainer } from "@/components/ui/SectionContainer";
import {
    staggerContainer,
    staggerItem,
    fadeIn,
} from "@/lib/animations/scrollAnimations";

export const HistoryTimeline: React.FC = () => {
    const { milestones } = siteData.history;

    return (
        <SectionContainer background="white" id="historia" className="overflow-visible">
            {/* Section Title */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="text-center mb-16 md:mb-24"
            >
                <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-primary)]">
                    <span className="text-[var(--color-gray)]">Nuestra</span>{" "}
                    <span className="text-[var(--color-accent)]">Historia</span>
                </h2>
            </motion.div>

            {/* Timeline Wrapper */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="relative mx-auto"
            >
                {/* --- DESKTOP HORIZONTAL TIMELINE --- */}
                <div className="hidden md:block relative">
                    {/* Horizontal Connecting Line */}
                    <div className="absolute top-[2.5rem] left-0 right-0 h-1 bg-gray-100 rounded-full w-full -z-10"></div>
                    <div className="absolute top-[2.5rem] left-0 h-1 bg-[var(--color-primary)] opacity-20 rounded-full w-full -z-10"></div>

                    <div className="grid grid-cols-3 gap-8 text-center">
                        {milestones.map((milestone) => (
                            <motion.div
                                key={milestone.year}
                                variants={staggerItem}
                                className="relative flex flex-col items-center pt-0 group"
                            >
                                {/* Year Bubble */}
                                <div className="w-20 h-20 rounded-full bg-white border-4 border-[var(--color-primary)] shadow-lg flex items-center justify-center text-[var(--color-primary)] font-bold text-xl mb-8 z-10 transition-transform duration-300 group-hover:scale-110 group-hover:border-[var(--color-accent)]">
                                    {milestone.year}
                                </div>

                                {/* Content Card */}
                                <div className="bg-white p-6 rounded-2xl shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 w-full max-w-sm border border-gray-50 h-full flex flex-col justify-start">
                                    <h3 className="font-bold text-xl text-[var(--color-primary)] mb-3">
                                        {milestone.title}
                                    </h3>
                                    <p className="text-[var(--color-gray)] leading-relaxed text-sm">
                                        {milestone.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* --- MOBILE VERTICAL TIMELINE --- */}
                <div className="md:hidden space-y-12 pl-4">
                    {milestones.map((milestone) => (
                        <motion.div
                            key={milestone.year}
                            variants={staggerItem}
                            className="flex gap-6 relative"
                        >
                            {/* Line connecting dots */}
                            <div className="absolute left-[11px] top-10 bottom-[-48px] w-0.5 bg-[var(--color-primary)] opacity-30 last:hidden"></div>

                            {/* Dot */}
                            <div className="flex-shrink-0 relative z-10 mt-1">
                                <div className="w-6 h-6 rounded-full bg-[var(--color-accent)] border-4 border-white shadow-md"></div>
                            </div>

                            {/* Content */}
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 w-full">
                                <div className="font-bold text-2xl text-[var(--color-primary)] mb-1">
                                    {milestone.year}
                                </div>
                                <h3 className="font-bold text-lg text-[var(--color-gray)] mb-2">
                                    {milestone.title}
                                </h3>
                                <p className="text-base text-[var(--color-gray)] leading-relaxed">
                                    {milestone.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </SectionContainer>
    );
};
