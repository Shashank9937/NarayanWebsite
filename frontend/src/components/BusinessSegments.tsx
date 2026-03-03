import React from 'react';
import { FileDown, Table, ArrowUpRight } from 'lucide-react';

const SpecItem = ({ label, value }: { label: string, value: string }) => (
    <div className="flex justify-between py-4 border-b border-white/5 group/spec">
        <span className="text-gray-500 text-[10px] uppercase font-bold tracking-widest group-hover/spec:text-brand-green transition-colors">{label}</span>
        <span className="font-bold text-xs text-white tracking-wider">{value}</span>
    </div>
);

const SegmentCard = ({ title, description, specs }: { title: string, description: string, specs: any[] }) => (
    <div className="glass-morphism p-12 group relative overflow-hidden transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_20px_50px_rgba(0,255,157,0.1)] flex flex-col h-full">
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/5 blur-3xl group-hover:bg-brand-green/20 transition-all pointer-events-none" />

        <div className="mb-10">
            <h3 className="text-3xl font-bold mb-6 tracking-tight font-heading group-hover:text-brand-green transition-colors">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed font-light">{description}</p>
        </div>

        <div className="bg-white/5 p-8 border border-white/5 mb-10 group-hover:border-brand-green/20 transition-colors">
            <div className="flex items-center gap-3 mb-6 text-brand-green">
                <Table className="w-4 h-4" />
                <span className="text-[10px] uppercase font-bold tracking-[0.3em]">Technical Specs</span>
            </div>
            <div className="space-y-1">
                {specs.map((spec, i) => <SpecItem key={i} {...spec} />)}
            </div>
        </div>

        <button className="flex items-center justify-between group/btn w-full px-8 py-5 border border-white/10 text-white text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-brand-green hover:text-black hover:border-brand-green transition-all duration-300">
            <span>Download PDF Specs</span>
            <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
        </button>
    </div>
);

export default function BusinessSegments() {
    const segments = [
        {
            title: "Premium Bio-Pellets",
            description: "High-density thermal infrastructure designed for continuous-run Tier-1 industrial boilers and power generation plants.",
            specs: [
                { label: "Calorific Index", value: "4600+ kcal/kg" },
                { label: "Moisture Profile", value: "< 7.5%" },
                { label: "Ash Threshold", value: "Ultra-Low (<2%)" },
                { label: "Venture Class", value: "A+ Grade" }
            ]
        },
        {
            title: "Precision Bio-Pallets",
            description: "Engineered press-mesh fuel segments for strategic manufacturing sectors requiring extreme thermal consistency.",
            specs: [
                { label: "Thermal Rating", value: "High-Stability" },
                { label: "Process Control", value: "Automated" },
                { label: "Ash Profile", value: "Industrial (<5%)" },
                { label: "Capacity", value: "12,000 MT/Mo" }
            ]
        },
        {
            title: "Heavy Briquettes",
            description: "Large-format energy assets for high-torque industrial kilns and massive thermal-processing communities.",
            specs: [
                { label: "Diameter Class", value: "90mm Nexus" },
                { label: "Burn Duration", value: "Extended" },
                { label: "Smoke Profile", value: "Zero-Visible" },
                { label: "Supply Tier", value: "Enterprise" }
            ]
        }
    ];

    return (
        <section id="solutions" className="py-40 px-12 relative bg-brand-charcoal">
            <div className="absolute inset-0 neo-grid opacity-20 pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <div className="mb-24 flex justify-between items-end">
                    <div className="max-w-3xl">
                        <span className="text-brand-green text-[10px] font-bold uppercase tracking-[0.4em] block mb-8">Asset Portfolio</span>
                        <h2 className="text-6xl font-bold tracking-tight font-heading">Engineering <span className="text-gradient-emerald">Industrial Assets.</span></h2>
                    </div>
                    <div className="hidden lg:block text-right">
                        <div className="text-4xl font-bold font-heading mb-2">45K<span className="text-brand-green">.MT</span></div>
                        <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Aggregate Monthly Flow</div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {segments.map((segment, i) => <SegmentCard key={i} {...segment} />)}
                </div>
            </div>
        </section>
    );
}
