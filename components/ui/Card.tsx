import React from "react";

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
    children,
    className = "",
    hover = false,
}) => {
    const baseStyles =
        "bg-white rounded-[var(--radius-card)] p-6 transition-all duration-300";
    const shadowStyles = "shadow-[var(--shadow-card)]";
    const hoverStyles = hover
        ? "hover:shadow-[var(--shadow-hover)] hover:scale-105"
        : "";

    return (
        <div className={`${baseStyles} ${shadowStyles} ${hoverStyles} ${className}`}>
            {children}
        </div>
    );
};
