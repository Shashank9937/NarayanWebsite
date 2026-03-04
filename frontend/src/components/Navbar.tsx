"use client";

import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

interface NavItemProps {
    label: string;
    href: string;
}

const NavItem = ({ label, href }: NavItemProps) => (
    <a
        href={href}
        className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-300 px-4 py-2 rounded-full hover:bg-white/5"
    >
        {label}
    </a>
);

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50 transition-all duration-500 ${scrolled ? 'py-3' : 'py-4'}`}>
            <div className="glass-panel floating-shadow px-6 py-3 flex justify-between items-center w-full">

                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-white to-gray-400 rounded-full flex items-center justify-center font-bold text-black text-sm">
                        N
                    </div>
                    <span className="text-lg font-bold tracking-tight text-white hidden sm:block">
                        Narayan<span className="text-gray-400 font-medium">Energy</span>
                    </span>
                </div>

                <div className="hidden md:flex items-center gap-2">
                    <NavItem label="Products" href="#solutions" />
                    <NavItem label="Infrastructure" href="#operations" />
                    <NavItem label="Sustainability" href="#sustainability" />
                    <NavItem label="Company" href="#investors" />
                </div>

                <button className="group relative overflow-hidden bg-white text-black px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2">
                    <span>Get Quote</span>
                    <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-black transition-colors" />
                </button>

            </div>
        </nav>
    );
}
