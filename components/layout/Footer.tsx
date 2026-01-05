"use client";

import React from "react";
import { siteData } from "@/lib/constants/siteData";
import {
    FaLinkedin,
    FaTwitter,
    FaFacebook,
    FaInstagram,
} from "react-icons/fa";

const socialIcons: Record<string, React.ComponentType> = {
    FaLinkedin,
    FaTwitter,
    FaFacebook,
    FaInstagram,
};

export const Footer: React.FC = () => {
    return (
        <footer className="bg-gradient-footer text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Footer Columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {siteData.footer.columns.map((column) => (
                        <div key={column.title}>
                            <h3 className="text-lg font-bold mb-4 text-[var(--color-accent)]">
                                {column.title}
                            </h3>
                            <ul className="space-y-2">
                                {column.links.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            className="text-sm text-gray-300 hover:text-white transition-colors"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Social Media & Copyright */}
                <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-gray-400">{siteData.footer.copyright}</p>

                    <div className="flex items-center gap-4">
                        {siteData.footer.social.map((social) => {
                            const IconComponent = socialIcons[social.icon];
                            return (
                                <a
                                    key={social.platform}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-[var(--color-accent)] transition-colors text-xl"
                                    aria-label={social.platform}
                                >
                                    <IconComponent />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </footer>
    );
};
