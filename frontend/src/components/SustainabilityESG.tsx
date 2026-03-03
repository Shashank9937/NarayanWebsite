import React from 'react';
import { Leaf, Recycle, TrendingDown, Globe } from 'lucide-react';

const ESGMetric = ({ label, value, sub }: { label: string, value: string, sub: string }) => (
    <div className="text-center lg:text-left">
        <h4 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">{label}</h4>
        <div className="text-4xl font-bold mb-1">{value}</div>
        <p className="text-gray-400 text-sm italic">{sub}</p>
    </div>
);

export default function SustainabilityESG() {
    return (
        <section id="sustainability" className="py-32 px-12 overflow-hidden relative">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-brand-green/20 rounded-full blur-[120px]" />

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div>
                        <span className="text-brand-green text-xs font-bold uppercase tracking-widest block mb-6">Sustainability & ESG</span>
                        <h2 className="text-5xl font-bold mb-8 tracking-tight">Decarbonizing the Industrial Backbone.</h2>
                        <p className="text-lg text-gray-400 mb-12 leading-relaxed">
                            Narayan Enterprises is committed to the circular economy. By converting biomass waste into high-density fuel, we reduce methane emissions from landfills while providing a sustainable alternative to fossil fuels.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                            <ESGMetric label="Emissions" value="-92%" sub="vs Coal standard" />
                            <ESGMetric label="Circular" value="100%" sub="Sourcing model" />
                            <ESGMetric label="Impact" value="500k" sub="Tons CO2 Offset/Yr" />
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <Leaf className="w-6 h-6 text-brand-green shrink-0" />
                                <p className="text-sm text-gray-500">Zero Liquid Discharge (ZLD) certified manufacturing hubs.</p>
                            </div>
                            <div className="flex items-start gap-4">
                                <Globe className="w-6 h-6 text-brand-green shrink-0" />
                                <p className="text-sm text-gray-500">Contributing to India's Net Zero 2070 commitment.</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="glass-morphism p-12 border border-brand-green/20">
                            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                                <Recycle className="text-brand-green" />
                                Biomass Lifecycle
                            </h3>

                            <div className="space-y-12">
                                <div className="relative pl-8 border-l-2 border-brand-green/30">
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-brand-green rounded-full" />
                                    <h4 className="font-bold mb-2">Sustainable Sourcing</h4>
                                    <p className="text-xs text-gray-400">Agricultural residues collected directly from regional farming hubs.</p>
                                </div>
                                <div className="relative pl-8 border-l-2 border-brand-green/30">
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-brand-green rounded-full" />
                                    <h4 className="font-bold mb-2">Industrial Processing</h4>
                                    <p className="text-xs text-gray-400">High-pressure compression without chemical binders.</p>
                                </div>
                                <div className="relative pl-8 border-l-2 border-brand-green/30">
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-white/20 rounded-full" />
                                    <h4 className="font-bold mb-2">Clean Combustion</h4>
                                    <p className="text-xs text-gray-400">Consistent energy release with minimal ash and SOx/NOx emissions.</p>
                                </div>
                            </div>
                        </div>

                        {/* Visual Graph Mockup */}
                        <div className="mt-8 p-6 glass-morphism border border-white/5">
                            <div className="flex justify-between items-end gap-1 h-32">
                                <div className="w-full bg-zinc-800 h-[100%] rounded-t-sm flex items-center justify-center text-[10px] font-bold">Coal</div>
                                <div className="w-full bg-brand-green h-[8%] rounded-t-sm flex items-center justify-center text-[10px] font-bold">Biomass</div>
                            </div>
                            <p className="mt-4 text-[10px] uppercase font-bold tracking-widest text-center text-gray-500">CO2 Emissions per MW Generated</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
