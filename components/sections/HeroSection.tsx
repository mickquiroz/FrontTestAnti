"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteData } from "@/lib/constants/siteData";
import { Button } from "@/components/ui/Button";
import { fadeIn, slideUp } from "@/lib/animations/scrollAnimations";

export const HeroSection: React.FC = () => {
    const { title, highlightedWords, subtitle, ctaText, ctaLink } =
        siteData.hero;

    return (
        <section className="relative h-[600px] md:h-[700px] flex items-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('/images/hero-bg.jpg')`,
                }}
            >
                {/* Blue Gradient Overlay from Left */}
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(90deg, rgba(0, 133, 179, 0.9) 0%, rgba(0, 133, 179, 0.7) 40%, rgba(0, 133, 179, 0.3) 70%, transparent 100%)",
                    }}
                ></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-3xl">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        className="space-y-6"
                    >
                        <motion.h1
                            variants={slideUp}
                            className="text-white leading-tight"
                        >
                            {title}{" "}
                            <span className="text-accent">
                                {highlightedWords.join(" y ")}
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={slideUp}
                            className="text-lg md:text-xl text-white/90 font-medium"
                        >
                            {subtitle}
                        </motion.p>

                        <motion.div variants={slideUp}>
                            <Button variant="primary" size="lg" href={ctaLink}>
                                {ctaText}
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
