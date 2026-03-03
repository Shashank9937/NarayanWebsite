import React from 'react';

const ValueCard = ({ title, description, index }: { title: string, description: string, index: number }) => (
    <div className="p-10 glass-morphism border border-white/5 hover:border-brand-green/40 transition-all group relative overflow-hidden unicorn-glow">
        <div className="absolute top-0 left-0 w-1 h-0 bg-brand-green group-hover:h-full transition-all duration-500" />
        <span className="text-4xl font-bold text-white/5 absolute top-4 right-4 group-hover:text-brand-green/10 transition-colors font-heading">0{index + 1}</span>
        <h3 className="text-xl font-bold mb-4 group-hover:text-brand-green transition-colors font-heading tracking-wider">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed font-light">{description}</p>
    </div>
);

export default function CorporateOverview() {
    return (
        <section className="py-40 px-12 relative overflow-hidden">
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-green/5 blur-[150px] rounded-full -translate-x-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                <div className="relative z-10">
                    <span className="text-brand-green text-[10px] font-bold uppercase tracking-[0.4em] block mb-8">Venture Profile</span>
                    <h2 className="text-6xl font-bold mb-10 tracking-tight font-heading leading-tight">
                        Powering the <br />
                        <span className="text-gradient-emerald">Next Industrial Age.</span>
                    </h2>
                    <p className="text-xl text-gray-400 mb-12 leading-relaxed font-light">
                        Narayan Enterprises is not just a supplier; we are the technical backbone of India's green industrial revolution. Since 2012, we've engineered the transition from volatile fossil fuels to high-calorific, carbon-neutral biomass infrastructure.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-white/10">
                        <div>
                            <h4 className="text-brand-green font-bold uppercase tracking-[0.2em] text-[10px] mb-4">Vision 2030</h4>
                            <p className="text-sm text-gray-500 leading-relaxed italic">"Displacing 5M tons of industrial coal annually through advanced thermal engineering."</p>
                        </div>
                        <div>
                            <h4 className="text-brand-green font-bold uppercase tracking-[0.2em] text-[10px] mb-4">Core Mission</h4>
                            <p className="text-sm text-gray-500 leading-relaxed">Scaling high-density fuel assets that allow Tier-1 industries to achieve Net Zero without operational compromise.</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                    <div className="absolute -inset-4 border border-brand-green/10 rounded-xl pointer-events-none" />
                    <ValueCard index={0} title="Technical Integrity" description="Uncompromising precision in calorific testing and moisture control metrics." />
                    <ValueCard index={1} title="Sustainability" description="Circular economy protocols that transform agricultural waste into industrial gold." />
                    <ValueCard index={2} title="Operational Scale" description="Commanding a 45,000+ metric ton monthly output for India's largest plants." />
                    <ValueCard index={3} title="Future-Ready" description="JIT autonomous logistics integrated with enterprise thermal auditing." />
                </div>
            </div>
        </section>
    );
}
