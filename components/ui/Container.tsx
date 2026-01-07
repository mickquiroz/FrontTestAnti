import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export const Container: React.FC<ContainerProps> = ({
    children,
    className = "",
    id,
    ...props
}) => {
    return (
        <div
            id={id}
            className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};
