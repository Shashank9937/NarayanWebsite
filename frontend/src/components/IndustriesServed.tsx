import React from 'react';
import { Factory, Construction, Zap, Flame, Building2 } from 'lucide-react';

const IndustryCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
    <div className="p-10 border border-white/5 hover:bg-brand-green/5 hover:border-brand-green/20 transition-all duration-500 group">
        <Icon className="w-10 h-10 text-brand-green mb-6 group-hover:scale-110 transition-transform" />
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </div>
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
            title: "Public Sector Utilities",
            description: "Strategic partnerships with government entities for district heating and local power."
        },
        {
            icon: Zap,
            title: "Cement Industry",
            description: "Alternative fuel source for high-temperature kilns, reducing overall carbon footprint."
        }
    ];

    return (
        <section className="py-32 px-12 bg-zinc-900/30">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20 text-center lg:text-left">
                    <span className="text-brand-green text-xs font-bold uppercase tracking-widest block mb-6">Market Reach</span>
                    <h2 className="text-5xl font-bold tracking-tight">Industries Powering India.</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-white/5">
                    {industries.map((industry, i) => (
                        <div key={i} className="border-r border-b border-white/5">
                            <IndustryCard {...industry} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
