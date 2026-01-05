import React from "react";

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
            className={`py-16 md:py-20 ${backgroundStyles[background]} ${className}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {children}
            </div>
        </section>
    );
};
