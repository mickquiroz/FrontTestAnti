"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { siteData } from "@/lib/constants/siteData";
import { Card } from "@/components/ui/Card";
import { IconCircle } from "@/components/ui/IconCircle";
import { SectionContainer } from "@/components/ui/SectionContainer";
import {
    FaBriefcase,
    FaUsers,
    FaUserTie,
    FaGlobe,
} from "react-icons/fa";
import {
    staggerContainer,
    staggerItem,
    useScrollReveal,
    useCountUp,
} from "@/lib/animations/scrollAnimations";

const iconMap: Record<string, React.ComponentType> = {
    FaBriefcase,
    FaUsers,
    FaUserTie,
    FaGlobe,
};

export const TeamKPIs: React.FC = () => {
    const { ref, isInView } = useScrollReveal();
    const [startCounting, setStartCounting] = useState(false);

    useEffect(() => {
        if (isInView && !startCounting) {
            const timer = setTimeout(() => setStartCounting(true), 0);
            return () => clearTimeout(timer);
        }
    }, [isInView, startCounting]);

    return (
        <SectionContainer background="gradient" id="equipo">
            <motion.div
                ref={ref}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={staggerContainer}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
                {siteData.teamKPIs.map((kpi) => {
                    const IconComponent = iconMap[kpi.icon];
                    return (
                        <KPICard
                            key={kpi.id}
                            kpi={kpi}
                            IconComponent={IconComponent}
                            startCounting={startCounting}
                        />
                    );
                })}
            </motion.div>
        </SectionContainer>
    );
};

interface KPICardProps {
    kpi: {
        value: number;
        suffix: string;
        label: string;
    };
    IconComponent: React.ComponentType;
    startCounting: boolean;
}

const KPICard: React.FC<KPICardProps> = ({
    kpi,
    IconComponent,
    startCounting,
}) => {
    const count = useCountUp(kpi.value, 2000, startCounting);

    return (
        <motion.div variants={staggerItem}>
            <Card hover className="text-center h-full">
                <div className="flex justify-center mb-4">
                    <IconCircle backgroundColor="var(--color-accent)">
                        <IconComponent />
                    </IconCircle>
                </div>
                <div className="text-4xl font-bold text-[var(--color-primary)] mb-2">
                    {count}
                    {kpi.suffix}
                </div>
                <div className="text-sm font-medium text-[var(--color-gray)]">
                    {kpi.label}
                </div>
            </Card>
        </motion.div>
    );
};
