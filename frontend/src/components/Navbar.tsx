import React from 'react';
import { LucideIcon } from 'lucide-react';

interface NavItemProps {
    label: string;
    href: string;
}

const NavItem = ({ label, href }: NavItemProps) => (
    <a
        href={href}
        className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-300 uppercase tracking-widest"
    >
        {label}
    </a>
);

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 glass-morphism border-b border-white/5 py-6 px-12 flex justify-between items-center">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-brand-green rounded-sm flex items-center justify-center font-bold text-white">N</div>
                <span className="text-xl font-bold tracking-tighter uppercase">Narayan <span className="text-brand-green">Enterprises</span></span>
            </div>

            <div className="hidden md:flex gap-10">
                <NavItem label="Solutions" href="#solutions" />
                <NavItem label="Operations" href="#operations" />
                <NavItem label="Sustainability" href="#sustainability" />
                <NavItem label="Governance" href="#governance" />
                <NavItem label="Investors" href="#investors" />
            </div>

            <button className="bg-brand-green text-white px-6 py-2 text-sm font-bold uppercase tracking-wider hover:bg-brand-accent transition-all duration-300">
                Request Quote
            </button>
        </nav>
    );
}
