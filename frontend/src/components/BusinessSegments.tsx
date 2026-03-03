import React from 'react';
import { FileDown, Table } from 'lucide-react';

const SpecItem = ({ label, value }: { label: string, value: string }) => (
    <div className="flex justify-between py-3 border-b border-white/5">
        <span className="text-gray-500 text-sm">{label}</span>
        <span className="font-medium text-sm">{value}</span>
    </div>
);

const SegmentCard = ({ title, description, specs }: { title: string, description: string, specs: any[] }) => (
    <div className="glass-morphism p-10 border border-white/5 flex flex-col h-full">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-gray-400 text-sm mb-8 flex-grow">{description}</p>

        <div className="bg-black/20 p-6 rounded-lg mb-8">
            <div className="flex items-center gap-2 mb-4 text-brand-green">
                <Table className="w-4 h-4" />
                <span className="text-[10px] uppercase font-bold tracking-widest">Technical Specifications</span>
            </div>
            {specs.map((spec, i) => <SpecItem key={i} {...spec} />)}
        </div>

        <button className="flex items-center justify-center gap-2 w-full py-3 border border-brand-green/30 text-brand-green text-xs font-bold uppercase tracking-widest hover:bg-brand-green hover:text-white transition-all duration-300">
            <FileDown className="w-4 h-4" />
            Download PDF Specs
        </button>
    </div>
);

export default function BusinessSegments() {
    const segments = [
        {
            title: "Biomass Fuel Pellets",
            description: "High-density energy source designed for industrial boilers and thermal power plants. Optimized for consistent combustion.",
            specs: [
                { label: "Calorific Value", value: "4200 - 4600 kcal/kg" },
                { label: "Moisture Content", value: "< 8%" },
                { label: "Ash Content", value: "< 2%" },
                { label: "Density", value: "> 650 kg/m³" }
            ]
        },
        {
            title: "Press Mesh Pallets",
            description: "Specially engineered biomass pallets for heavy industrial applications requiring high thermal stability.",
            specs: [
                { label: "Calorific Value", value: "4000 - 4300 kcal/kg" },
                { label: "Moisture Content", value: "< 10%" },
                { label: "Ash Content", value: "< 5%" },
                { label: "Monthly Capacity", value: "12,000 Tons" }
            ]
        },
        {
            title: "Industrial Briquettes",
            description: "Large-format biomass briquettes for brick kilns and community kitchens. High burning duration with low smoke.",
            specs: [
                { label: "Diameter", value: "70mm - 90mm" },
                { label: "Calorific Value", value: "3800 - 4100 kcal/kg" },
                { label: "Ash Content", value: "< 7%" },
                { label: "Packaging", value: "Loose / Bagged" }
            ]
        }
    ];

    return (
        <section id="solutions" className="py-32 px-12">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20">
                    <span className="text-brand-green text-xs font-bold uppercase tracking-widest block mb-6">Business Segments</span>
                    <h2 className="text-5xl font-bold tracking-tight">Engineering Industrial Excellence.</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {segments.map((segment, i) => <SegmentCard key={i} {...segment} />)}
                </div>
            </div>
        </section>
    );
}
