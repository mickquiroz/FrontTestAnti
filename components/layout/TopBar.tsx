"use client";

import React from "react";
import { siteData } from "@/lib/constants/siteData";
import { FaEnvelope, FaPhone } from "react-icons/fa";

export const TopBar: React.FC = () => {
    const { email, phone1, phone2 } = siteData.contact;

    return (
        <div className="bg-[var(--color-primary)] text-white py-2">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs sm:text-sm">
                    <div className="flex items-center gap-2">
                        <FaEnvelope className="text-[var(--color-accent)]" />
                        <a
                            href={`mailto:${email}`}
                            className="hover:text-[var(--color-accent)] transition-colors"
                        >
                            {email}
                        </a>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <FaPhone className="text-[var(--color-accent)]" />
                            <span>{phone1}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaPhone className="text-[var(--color-accent)]" />
                            <span>{phone2}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
