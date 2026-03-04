import React from 'react';

const ValueCard = ({ title, description, index }: { title: string, description: string, index: number }) => (
    <div className="p-8 glass-panel hover:bg-white/[0.04] transition-all group relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-0 bg-blue-500 group-hover:h-full transition-all duration-500" />
        <span className="text-4xl font-bold text-white/5 absolute top-4 right-4 group-hover:text-blue-500/10 transition-colors">0{index + 1}</span>
        <h3 className="text-lg font-bold mb-3 group-hover:text-blue-400 transition-colors tracking-tight">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed font-light">{description}</p>
    </div>
);

export default function CorporateOverview() {
    return (
        <section className="py-32 px-6 relative overflow-hidden bg-[#000000]">
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[150px] rounded-full -translate-x-1/2 pointer-events-none" />

            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                <div className="relative z-10">
                    <span className="text-blue-500 text-xs font-bold uppercase tracking-widest block mb-6">Venture Profile</span>
                    <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight leading-tight">
                        Powering the <br />
                        <span className="gradient-text-accent">Next Industrial Age.</span>
                    </h2>
                    <p className="text-lg text-gray-400 mb-10 leading-relaxed font-light">
                        Narayan Enterprises is not just a supplier; we are the technical backbone of India's green industrial revolution. Since 2012, we've engineered the transition from volatile fossil fuels to high-calorific, carbon-neutral biomass infrastructure.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-8 border-t border-white/10">
                        <div>
                            <h4 className="text-white font-semibold text-sm mb-3">Vision 2030</h4>
                            <p className="text-sm text-gray-500 leading-relaxed">"Displacing 5M tons of industrial coal annually through advanced thermal engineering."</p>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold text-sm mb-3">Core Mission</h4>
                            <p className="text-sm text-gray-500 leading-relaxed">Scaling high-density fuel assets that allow Tier-1 industries to achieve Net Zero without operational compromise.</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
                    <ValueCard index={0} title="Technical Integrity" description="Uncompromising precision in calorific testing and moisture control metrics." />
                    <ValueCard index={1} title="Sustainability" description="Circular economy protocols that transform agricultural waste into industrial gold." />
                    <ValueCard index={2} title="Operational Scale" description="Commanding a 45,000+ metric ton monthly output for India's largest plants." />
                    <ValueCard index={3} title="Future-Ready" description="JIT autonomous logistics integrated with enterprise thermal auditing." />
                </div>
            </div>
        </section>
    );
}
