import React from "react";

interface ButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "outline";
    size?: "sm" | "md" | "lg";
    href?: string;
    onClick?: () => void;
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = "primary",
    size = "md",
    href,
    onClick,
    className = "",
}) => {
    const baseStyles =
        "inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary:
            "bg-[var(--color-accent-orange)] text-white hover:bg-[#E57600] focus:ring-[#FF8600] shadow-md hover:shadow-lg",
        secondary:
            "bg-white text-[var(--color-primary-blue)] border-2 border-[var(--color-primary-blue)] hover:bg-gray-50 focus:ring-[#0085B3]",
        outline:
            "bg-transparent text-white border-2 border-white hover:bg-white/10 focus:ring-white",
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };

    const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    if (href) {
        return (
            <a href={href} className={combinedStyles}>
                {children}
            </a>
        );
    }

    return (
        <button onClick={onClick} className={combinedStyles}>
            {children}
        </button>
    );
};
