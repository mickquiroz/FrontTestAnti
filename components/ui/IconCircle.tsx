import React from "react";

interface IconCircleProps {
    children: React.ReactNode;
    backgroundColor?: string;
    size?: "sm" | "md" | "lg";
}

export const IconCircle: React.FC<IconCircleProps> = ({
    children,
    backgroundColor = "var(--color-primary)",
    size = "md",
}) => {
    const sizeStyles = {
        sm: "w-12 h-12 text-lg",
        md: "w-16 h-16 text-2xl",
        lg: "w-20 h-20 text-3xl",
    };

    return (
        <div
            className={`${sizeStyles[size]} rounded-full flex items-center justify-center text-white`}
            style={{ backgroundColor }}
        >
            {children}
        </div>
    );
};
