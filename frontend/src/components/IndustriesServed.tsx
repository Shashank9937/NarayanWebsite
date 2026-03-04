"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Factory, Construction, Zap, Flame, Building2 } from 'lucide-react';

const IndustryCard = ({ icon: Icon, title, description, delay }: { icon: any, title: string, description: string, delay: number }) => (
    <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay }}
        whileHover={{ y: -5 }}
        className="glass-panel p-10 group relative overflow-hidden transition-all duration-300"
    >
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none" />

        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-colors duration-300">
            <Icon className="w-6 h-6 text-gray-300 group-hover:text-blue-400 group-hover:scale-110 transition-all duration-300" />
        </div>

        <h3 className="text-xl font-bold mb-4 tracking-tight">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed font-light">{description}</p>
    </motion.div>
);

export default function IndustriesServed() {
    const industries = [
        {
            icon: Zap,
            title: "Thermal Power Plants",
            description: "Co-firing biomass with coal to meet regulatory emission norms while maintaining power output."
        },
        {
            icon: Factory,
            title: "Industrial Boilers",
            description: "High-efficiency fuel pellets for textile, pharmaceutical, and chemical manufacturing units."
        },
        {
            icon: Flame,
            title: "Brick Kilns",
            description: "Low-ash briquettes providing consistent heat for large-scale masonry production."
        },
        {
            icon: Construction,
            title: "Manufacturing Units",
            description: "Reliable energy sourcing for heavy machinery and continuous production lines."
        },
        {
            icon: Building2,
            title: "Public Sector",
            description: "Strategic partnerships with government entities for district heating and local power."
        },
        {
            icon: Zap,
            title: "Cement Industry",
            description: "Alternative fuel source for high-temperature kilns, reducing overall carbon footprint."
        }
    ];

    return (
        <section className="py-32 px-6 relative bg-[#000000]">
            <div className="max-w-6xl mx-auto">
                <div className="mb-20 text-center max-w-2xl mx-auto">
                    <span className="text-blue-500 text-xs font-bold uppercase tracking-widest block mb-4">Market Reach</span>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Industries Powering India.</h2>
                    <p className="text-lg text-gray-400 font-light leading-relaxed">
                        Supplying baseline continuous thermal energy across the manufacturing spectrum.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {industries.map((industry, i) => (
                        <IndustryCard key={i} {...industry} delay={i * 0.1} />
                    ))}
                </div>
            </div>
        </section>
    );
}

