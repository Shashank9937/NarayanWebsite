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
        <nav className="fixed top-0 w-full z-50 glass-morphism border-b border-white/5 py-4 px-12 flex justify-between items-center backdrop-blur-3xl">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-green rounded-sm flex items-center justify-center font-bold text-black shadow-[0_0_20px_rgba(0,255,157,0.4)]">
                    N
                </div>
                <span className="text-xl font-bold tracking-tighter uppercase font-heading">
                    Narayan <span className="text-brand-green">Enterprises</span>
                </span>
            </div>

            <div className="hidden md:flex gap-12">
                <NavItem label="Solutions" href="#solutions" />
                <NavItem label="Operations" href="#operations" />
                <NavItem label="Sustainability" href="#sustainability" />
                <NavItem label="Strategic" href="#investors" />
            </div>

            <button className="relative group overflow-hidden bg-brand-green text-black px-10 py-3 text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,157,0.6)]">
                <span className="relative z-10">Request Industrial Quote</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
        </nav>
    );
}
