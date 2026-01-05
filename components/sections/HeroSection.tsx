"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteData } from "@/lib/constants/siteData";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { fadeIn, slideUp } from "@/lib/animations/scrollAnimations";

export const HeroSection: React.FC = () => {
    const { title, highlightedWords, subtitle, ctaText, ctaLink } =
        siteData.hero;

    return (
        <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden w-full">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('/images/hero-bg.jpg')`,
                }}
            >
                {/* Refined Blue Gradient Overlay - Lighter and more sophisticated */}
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(90deg, rgba(0, 133, 179, 0.85) 0%, rgba(0, 133, 179, 0.6) 40%, rgba(0, 133, 179, 0.4) 100%)",
                    }}
                ></div>
                {/* Horizontal gradient fade for text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
            </div>

            {/* Content centered in Container */}
            <div className="relative z-10 w-full">
                <Container>
                    <div className="max-w-xl">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeIn}
                            className="space-y-8"
                        >
                            <motion.h1
                                variants={slideUp}
                                className="text-white leading-[1.1] drop-shadow-md"
                            >
                                {title}{" "}
                                <span className="text-[var(--color-accent)]">
                                    {highlightedWords.join(" y ")}
                                </span>
                            </motion.h1>

                            <motion.p
                                variants={slideUp}
                                className="text-lg md:text-xl text-white/95 font-medium leading-relaxed max-w-lg"
                            >
                                {subtitle}
                            </motion.p>

                            <motion.div variants={slideUp} className="pt-2">
                                <Button
                                    variant="primary"
                                    size="lg"
                                    href={ctaLink}
                                    className="transform transition-transform hover:scale-105 shadow-lg hover:shadow-xl rounded-full px-10"
                                >
                                    {ctaText}
                                </Button>
                            </motion.div>
                        </motion.div>
                    </div>
                </Container>
            </div>
        </section>
    );
};
