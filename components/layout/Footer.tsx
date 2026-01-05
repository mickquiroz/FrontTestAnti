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

import { Container } from "@/components/ui/Container";

export const Footer: React.FC = () => {
    return (
        <footer className="bg-gradient-footer text-gray-200">
            <Container className="py-10">
                {/* Footer Columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 border-b border-white/10 pb-8">
                    {siteData.footer.columns.map((column) => (
                        <div key={column.title}>
                            <h3 className="text-base font-bold mb-4 text-[var(--color-accent)] tracking-wide uppercase">
                                {column.title}
                            </h3>
                            <ul className="space-y-2">
                                {column.links.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            className="text-sm text-gray-400 hover:text-white transition-colors hover:underline decoration-[var(--color-accent)] underline-offset-4"
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
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-gray-500 font-medium">{siteData.footer.copyright}</p>

                    <div className="flex items-center gap-6">
                        {siteData.footer.social.map((social) => {
                            const IconComponent = socialIcons[social.icon];
                            return (
                                <a
                                    key={social.platform}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-[var(--color-accent)] hover:scale-110 transition-all text-xl"
                                    aria-label={social.platform}
                                >
                                    <IconComponent />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </footer>
    );
};
