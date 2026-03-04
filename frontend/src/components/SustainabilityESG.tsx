import React from 'react';
import { Leaf, Recycle, Globe } from 'lucide-react';

const ESGMetric = ({ label, value, sub }: { label: string, value: string, sub: string }) => (
    <div className="text-center lg:text-left group/metric">
        <h4 className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-2 group-hover/metric:text-blue-400 transition-colors">{label}</h4>
        <div className="text-5xl font-bold mb-2 tracking-tight text-white">{value}</div>
        <p className="text-gray-500 text-xs italic font-light">{sub}</p>
    </div>
);

export default function SustainabilityESG() {
    return (
        <section id="sustainability" className="py-32 px-6 overflow-hidden relative bg-[#000000]">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div className="relative z-10">
                        <span className="text-blue-500 text-xs font-bold uppercase tracking-widest block mb-6">Net-Zero Protocol</span>
                        <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight leading-tight">
                            Decarbonizing <br />
                            <span className="gradient-text-accent">Industrial Assets.</span>
                        </h2>
                        <p className="text-lg text-gray-400 mb-12 leading-relaxed font-light">
                            Narayan Enterprises is the institutional benchmark for circular economy integration. By engineering high-density thermal assets from biomass waste, we provide the scalable infrastructure needed for heavy industry to transition to carbon neutrality.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-14 pt-10 border-t border-white/10">
                            <ESGMetric label="Emissions" value="-92%" sub="Relative to coal benchmarks" />
                            <ESGMetric label="Circular" value="100%" sub="Regenerative sourcing" />
                            <ESGMetric label="Impact" value="500K" sub="Metric Tons CO2 offset/yr" />
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 group glass-panel p-4">
                                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                                    <Leaf className="w-5 h-5 text-blue-400" />
                                </div>
                                <p className="text-sm text-gray-300 font-light tracking-wide">ZLD (Zero Liquid Discharge) Certified manufacturing hubs.</p>
                            </div>
                            <div className="flex items-center gap-4 group glass-panel p-4">
                                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                                    <Globe className="w-5 h-5 text-blue-400" />
                                </div>
                                <p className="text-sm text-gray-300 font-light tracking-wide">Accelerating India's 2070 Net Zero commitment through decentralized scale.</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="glass-panel p-10 relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl pointer-events-none" />
                            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 tracking-tight">
                                <Recycle className="text-blue-400 w-6 h-6" />
                                Lifecycle Engineering
                            </h3>

                            <div className="space-y-10 relative">
                                <div className="absolute left-[3px] top-2 bottom-2 w-[2px] bg-white/5" />

                                <div className="relative pl-10 group">
                                    <div className="absolute left-[-2px] top-1.5 w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6] z-10" />
                                    <h4 className="font-semibold mb-1 text-sm tracking-wide text-white">Sovereign Sourcing</h4>
                                    <p className="text-sm text-gray-500 font-light leading-relaxed">Direct regional sourcing protocols for agricultural surplus residue.</p>
                                </div>
                                <div className="relative pl-10 group">
                                    <div className="absolute left-[-2px] top-1.5 w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6] z-10" />
                                    <h4 className="font-semibold mb-1 text-sm tracking-wide text-white">Thermal Compression</h4>
                                    <p className="text-sm text-gray-500 font-light leading-relaxed">High-torque processing without chemical binding agents or synthetic additives.</p>
                                </div>
                                <div className="relative pl-10 group">
                                    <div className="absolute left-[-2px] top-1.5 w-3 h-3 bg-blue-400 rounded-full shadow-[0_0_10px_#60a5fa] z-10" />
                                    <h4 className="font-semibold mb-1 text-sm tracking-wide text-white">Clean Combustion</h4>
                                    <p className="text-sm text-gray-500 font-light leading-relaxed">Predictable energy release with minimal SOx/NOx and ultra-low ash profile.</p>
                                </div>
                            </div>
                        </div>

                        {/* Impact Visualization */}
                        <div className="mt-8 p-8 glass-panel">
                            <div className="flex justify-between items-end gap-2 h-32 mb-6">
                                <div className="w-full bg-white/5 h-[100%] rounded-md flex flex-col items-center justify-end p-4">
                                    <div className="text-gray-500 text-xs font-semibold mb-2">COAL</div>
                                    <div className="w-full h-full bg-zinc-800 rounded-sm" />
                                </div>
                                <div className="w-full bg-blue-500/5 h-[100%] rounded-md flex flex-col items-center justify-end p-4">
                                    <div className="text-blue-400 text-xs font-semibold mb-2">BIOMASS</div>
                                    <div className="w-full h-[8%] bg-blue-500 rounded-sm shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                                </div>
                            </div>
                            <p className="text-[10px] uppercase font-bold tracking-widest text-center text-gray-400 leading-relaxed">
                                Carbon Intensity Index: <span className="text-white">Comparative Energy Output</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

