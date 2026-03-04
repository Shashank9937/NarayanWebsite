"use client";

import React, { useState, useEffect } from 'react';
import { ChevronRight, Leaf } from 'lucide-react';

interface NavItemProps {
    label: string;
    href: string;
}

const NavItem = ({ label, href }: NavItemProps) => (
    <a
        href={href}
        className="text-sm font-semibold text-brand-primary hover:text-brand-accent transition-colors duration-300 px-4 py-2"
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
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-4' : 'bg-white/90 backdrop-blur-md py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center w-full">

                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-accent rounded-lg flex items-center justify-center">
                        <Leaf className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-brand-primary hidden sm:block">
                        Narayan<span className="text-brand-accent font-medium">Enterprises</span>
                    </span>
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <NavItem label="Products" href="#solutions" />
                    <NavItem label="Infrastructure" href="#operations" />
                    <NavItem label="Sustainability" href="#sustainability" />
                    <NavItem label="Governance" href="#investors" />
                </div>

                <button className="group bg-brand-primary text-white px-6 py-2.5 rounded-md text-sm font-bold transition-all duration-300 hover:bg-brand-accent flex items-center gap-2 shadow-lg">
                    <span>Contact Sales</span>
                    <ChevronRight className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" />
                </button>

            </div>
        </nav>
    );
}

