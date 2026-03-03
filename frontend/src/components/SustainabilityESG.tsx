import React from 'react';
import { Leaf, Recycle, Globe } from 'lucide-react';

const ESGMetric = ({ label, value, sub }: { label: string, value: string, sub: string }) => (
    <div className="text-center lg:text-left group/metric">
        <h4 className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-3 group-hover/metric:text-brand-green transition-colors">{label}</h4>
        <div className="text-5xl font-bold mb-2 font-heading tracking-tight">{value}</div>
        <p className="text-gray-400 text-xs italic font-light">{sub}</p>
    </div>
);

export default function SustainabilityESG() {
    return (
        <section id="sustainability" className="py-40 px-12 overflow-hidden relative bg-brand-charcoal">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-green/5 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                    <div className="relative z-10">
                        <span className="text-brand-green text-[10px] font-bold uppercase tracking-[0.4em] block mb-8">Net-Zero Protocol</span>
                        <h2 className="text-6xl font-bold mb-10 tracking-tight font-heading leading-tight">
                            Decarbonizing <br />
                            <span className="text-gradient-emerald">Industrial Assets.</span>
                        </h2>
                        <p className="text-xl text-gray-400 mb-14 leading-relaxed font-light">
                            Narayan Enterprises is the institutional benchmark for circular economy integration. By engineering high-density thermal assets from biomass waste, we provide the scalable infrastructure needed for heavy industry to transition to carbon neutrality.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 pt-10 border-t border-white/10">
                            <ESGMetric label="Emissions" value="-92%" sub="Relative to coal benchmarks" />
                            <ESGMetric label="Circular" value="100%" sub="Regenerative sourcing" />
                            <ESGMetric label="Impact" value="500K" sub="Metric Tons CO2 offset/yr" />
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-center gap-5 group">
                                <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center group-hover:bg-brand-green/20 transition-all">
                                    <Leaf className="w-5 h-5 text-brand-green" />
                                </div>
                                <p className="text-sm text-gray-400 font-light tracking-wide">ZLD (Zero Liquid Discharge) Certified manufacturing hubs.</p>
                            </div>
                            <div className="flex items-center gap-5 group">
                                <div className="w-10 h-10 rounded-full bg-brand-cyan/10 flex items-center justify-center group-hover:bg-brand-cyan/20 transition-all">
                                    <Globe className="w-5 h-5 text-brand-cyan" />
                                </div>
                                <p className="text-sm text-gray-400 font-light tracking-wide">Accelerating India's 2070 Net Zero commitment through decentralized scale.</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-6 border border-brand-green/10 rounded-2xl pointer-events-none" />
                        <div className="glass-morphism p-12 border border-white/5 relative unicorn-glow overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/10 blur-3xl pointer-events-none" />
                            <h3 className="text-2xl font-bold mb-10 flex items-center gap-4 font-heading tracking-wider">
                                <Recycle className="text-brand-green w-6 h-6" />
                                Lifecycle Engineering
                            </h3>

                            <div className="space-y-14 relative">
                                <div className="absolute left-[3px] top-2 bottom-2 w-[1px] bg-white/10" />

                                <div className="relative pl-12 group">
                                    <div className="absolute left-0 top-1 w-2 h-2 bg-brand-green rounded-full shadow-[0_0_10px_#00FF9D] z-10 transition-transform group-hover:scale-150" />
                                    <h4 className="font-bold mb-2 font-heading text-sm tracking-widest text-white/90">Sovereign Sourcing</h4>
                                    <p className="text-xs text-gray-500 font-light leading-relaxed">Direct regional sourcing protocols for agricultural surplus residue.</p>
                                </div>
                                <div className="relative pl-12 group">
                                    <div className="absolute left-0 top-1 w-2 h-2 bg-brand-green rounded-full shadow-[0_0_10px_#00FF9D] z-10 transition-transform group-hover:scale-150" />
                                    <h4 className="font-bold mb-2 font-heading text-sm tracking-widest text-white/90">Thermal Compression</h4>
                                    <p className="text-xs text-gray-500 font-light leading-relaxed">High-torque processing without chemical binding agents or synthetic additives.</p>
                                </div>
                                <div className="relative pl-12 group">
                                    <div className="absolute left-0 top-1 w-2 h-2 bg-brand-cyan rounded-full shadow-[0_0_10px_#00E5FF] z-10 transition-transform group-hover:scale-150" />
                                    <h4 className="font-bold mb-2 font-heading text-sm tracking-widest text-white/90">Clean Combustion</h4>
                                    <p className="text-xs text-gray-500 font-light leading-relaxed">Predictable energy release with minimal SOx/NOx and ultra-low ash profile.</p>
                                </div>
                            </div>
                        </div>

                        {/* Impact Visualization */}
                        <div className="mt-12 p-8 glass-morphism border border-white/5">
                            <div className="flex justify-between items-end gap-2 h-40 mb-6">
                                <div className="w-full bg-white/5 h-[100%] rounded-sm flex flex-col items-center justify-end p-4 transition-all hover:bg-white/10">
                                    <div className="text-gray-500 text-[10px] font-bold mb-2">COAL</div>
                                    <div className="w-full h-full bg-zinc-800 rounded-sm" />
                                </div>
                                <div className="w-full bg-brand-green/5 h-[100%] rounded-sm flex flex-col items-center justify-end p-4 transition-all hover:bg-brand-green/10">
                                    <div className="text-brand-green text-[10px] font-bold mb-2">BIOMASS</div>
                                    <div className="w-full h-[8%] bg-brand-green rounded-sm shadow-[0_0_20px_rgba(0,255,157,0.5)]" />
                                </div>
                            </div>
                            <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-center text-gray-500 leading-relaxed">
                                Carbon Intensity Index: <span className="text-white">Comparative Energy Output</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
