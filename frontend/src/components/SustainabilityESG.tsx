import React from 'react';
import { Leaf, Recycle, Globe } from 'lucide-react';

const ESGMetric = ({ label, value, sub }: { label: string, value: string, sub: string }) => (
    <div className="text-center lg:text-left group/metric">
        <h4 className="text-brand-accent text-xs font-bold uppercase tracking-widest mb-2 transition-colors">{label}</h4>
        <div className="text-5xl font-extrabold mb-2 tracking-tight text-brand-primary">{value}</div>
        <p className="text-gray-500 text-xs font-medium">{sub}</p>
    </div>
);

export default function SustainabilityESG() {
    return (
        <section id="sustainability" className="py-24 px-6 overflow-hidden relative bg-brand-background">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-accent-light/5 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="relative z-10">
                        <span className="text-brand-accent text-sm font-bold uppercase tracking-widest block mb-4">Net-Zero Protocol</span>
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight leading-tight text-brand-primary">
                            Decarbonizing <br />
                            <span className="text-brand-accent">Industrial Assets.</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-12 leading-relaxed font-medium">
                            Narayan Enterprises is the institutional benchmark for circular economy integration. By engineering high-density thermal assets from biomass waste, we provide the scalable infrastructure needed for heavy industry to transition to carbon neutrality.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-14 pt-10 border-t border-brand-border">
                            <ESGMetric label="Emissions" value="-92%" sub="Relative to coal benchmarks" />
                            <ESGMetric label="Circular" value="100%" sub="Regenerative sourcing" />
                            <ESGMetric label="Impact" value="500K" sub="Metric Tons CO2 offset/yr" />
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 group glass-panel bg-white p-5 border-transparent hover:border-brand-accent/30 transition-all duration-300">
                                <div className="w-12 h-12 rounded-xl bg-brand-background flex items-center justify-center shrink-0">
                                    <Leaf className="w-6 h-6 text-brand-accent" />
                                </div>
                                <p className="text-sm text-gray-600 font-medium tracking-wide">ZLD (Zero Liquid Discharge) Certified manufacturing hubs.</p>
                            </div>
                            <div className="flex items-center gap-4 group glass-panel bg-white p-5 border-transparent hover:border-brand-accent/30 transition-all duration-300">
                                <div className="w-12 h-12 rounded-xl bg-brand-background flex items-center justify-center shrink-0">
                                    <Globe className="w-6 h-6 text-brand-accent" />
                                </div>
                                <p className="text-sm text-gray-600 font-medium tracking-wide">Accelerating India's 2070 Net Zero commitment through decentralized scale.</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="glass-panel p-10 relative overflow-hidden shadow-xl bg-white">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/10 blur-3xl pointer-events-none" />
                            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 tracking-tight text-brand-primary">
                                <Recycle className="text-brand-accent w-7 h-7" />
                                Lifecycle Engineering
                            </h3>

                            <div className="space-y-10 relative">
                                <div className="absolute left-[5px] top-3 bottom-3 w-[2px] bg-brand-border" />

                                <div className="relative pl-12 group">
                                    <div className="absolute left-[0px] top-1.5 w-3 h-3 bg-brand-accent rounded-full z-10 border-4 border-white shadow-[0_0_0_2px_rgba(46,125,50,0.2)]" />
                                    <h4 className="font-bold mb-1 text-base tracking-wide text-brand-primary">Sovereign Sourcing</h4>
                                    <p className="text-sm text-gray-600 font-medium leading-relaxed">Direct regional sourcing protocols for agricultural surplus residue.</p>
                                </div>
                                <div className="relative pl-12 group">
                                    <div className="absolute left-[0px] top-1.5 w-3 h-3 bg-brand-accent rounded-full z-10 border-4 border-white shadow-[0_0_0_2px_rgba(46,125,50,0.2)]" />
                                    <h4 className="font-bold mb-1 text-base tracking-wide text-brand-primary">Thermal Compression</h4>
                                    <p className="text-sm text-gray-600 font-medium leading-relaxed">High-torque processing without chemical binding agents or synthetic additives.</p>
                                </div>
                                <div className="relative pl-12 group">
                                    <div className="absolute left-[0px] top-1.5 w-3 h-3 bg-brand-accent-light rounded-full z-10 border-4 border-white shadow-[0_0_0_2px_rgba(76,175,80,0.2)]" />
                                    <h4 className="font-bold mb-1 text-base tracking-wide text-brand-primary">Clean Combustion</h4>
                                    <p className="text-sm text-gray-600 font-medium leading-relaxed">Predictable energy release with minimal SOx/NOx and ultra-low ash profile.</p>
                                </div>
                            </div>
                        </div>

                        {/* Impact Visualization */}
                        <div className="mt-8 p-8 glass-panel bg-white shadow-lg">
                            <div className="flex justify-between items-end gap-4 h-32 mb-6">
                                <div className="w-full bg-brand-background border border-brand-border h-[100%] rounded-lg flex flex-col items-center justify-end p-4">
                                    <div className="text-gray-500 text-xs font-bold mb-2">COAL</div>
                                    <div className="w-full h-full bg-gray-400 rounded-sm" />
                                </div>
                                <div className="w-full bg-brand-accent/5 border border-brand-accent/10 h-[100%] rounded-lg flex flex-col items-center justify-end p-4">
                                    <div className="text-brand-accent text-xs font-bold mb-2">BIOMASS</div>
                                    <div className="w-full h-[8%] bg-brand-accent rounded-sm shadow-[0_0_15px_rgba(46,125,50,0.3)]" />
                                </div>
                            </div>
                            <p className="text-[10px] uppercase font-bold tracking-widest text-center text-gray-500 leading-relaxed">
                                Carbon Intensity Index: <span className="text-brand-primary">Comparative Energy Output</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

