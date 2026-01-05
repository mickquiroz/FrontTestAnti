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
        "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 cursor-pointer";

    const variantStyles = {
        primary:
            "bg-[var(--color-accent)] text-white hover:bg-[#E67700] hover:shadow-lg hover:scale-105",
        secondary:
            "bg-[var(--color-primary)] text-white hover:bg-[#006E94] hover:shadow-lg hover:scale-105",
        outline:
            "border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white",
    };

    const sizeStyles = {
        sm: "px-4 py-2 text-xs",
        md: "px-6 py-3 text-sm",
        lg: "px-8 py-4 text-base",
    };

    const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

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
