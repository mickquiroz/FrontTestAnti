"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { siteData } from "@/lib/constants/siteData";
import { Card } from "@/components/ui/Card";
import { SectionContainer } from "@/components/ui/SectionContainer";
import {
    staggerContainer,
    staggerItem,
    useScrollReveal,
} from "@/lib/animations/scrollAnimations";

export const PurposeMissionVision: React.FC = () => {
    const { ref, isInView } = useScrollReveal();

    return (
        <SectionContainer background="light" id="nosotros">
            <motion.div
                ref={ref}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16"
            >
                {siteData.purposeMissionVision.map((item) => (
                    <motion.div key={item.id} variants={staggerItem}>
                        <Card hover className="h-full text-center shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] border-none p-8">
                            {/* Circular Image */}
                            <div className="flex justify-center mb-8">
                                <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="text-[var(--color-gray)] leading-relaxed text-base">
                                {item.description}
                            </p>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </SectionContainer>
    );
};
