import React from "react";
import { Container } from "@/components/ui/Container";

interface SectionContainerProps {
    children: React.ReactNode;
    className?: string;
    background?: "white" | "light" | "gradient";
    id?: string;
}

export const SectionContainer: React.FC<SectionContainerProps> = ({
    children,
    className = "",
    background = "white",
    id,
}) => {
    const backgroundStyles = {
        white: "bg-white",
        light: "bg-[var(--color-bg-light)]",
        gradient: "bg-gradient-light",
    };

    return (
        <section
            id={id}
            className={`py-16 md:py-20 w-full ${backgroundStyles[background]} ${className}`}
        >
            <Container>
                {children}
            </Container>
        </section>
    );
};
