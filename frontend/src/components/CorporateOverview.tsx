import React from 'react';

const ValueCard = ({ title, description, index }: { title: string, description: string, index: number }) => (
    <div className="p-8 glass-panel group relative overflow-hidden bg-white hover:border-brand-accent/50 transition-all duration-300">
        <div className="absolute top-0 left-0 w-1 h-0 bg-brand-accent group-hover:h-full transition-all duration-500" />
        <span className="text-5xl font-extrabold text-brand-background absolute top-4 right-4 group-hover:text-brand-accent/10 transition-colors">0{index + 1}</span>
        <h3 className="text-xl font-bold mb-3 text-brand-primary group-hover:text-brand-accent transition-colors tracking-tight relative z-10">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed font-normal relative z-10">{description}</p>
    </div>
);

export default function CorporateOverview() {
    return (
        <section className="py-24 px-6 relative overflow-hidden bg-brand-surface">
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-accent-light/5 blur-[150px] rounded-full -translate-x-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="relative z-10">
                    <span className="text-brand-accent text-sm font-bold uppercase tracking-widest block mb-4">Corporate Overview</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight leading-tight text-brand-primary">
                        Powering the <br />
                        <span className="text-brand-accent">Green Industrial Age.</span>
                    </h2>
                    <p className="text-lg text-gray-600 mb-10 leading-relaxed font-medium">
                        Narayan Enterprises is not just a supplier; we are the technical backbone of India's green industrial revolution. Since 2012, we've engineered the transition from volatile fossil fuels to high-calorific, carbon-neutral biomass infrastructure.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-8 border-t border-brand-border">
                        <div>
                            <h4 className="text-brand-primary font-bold text-base mb-2">Vision 2030</h4>
                            <p className="text-sm text-gray-600 leading-relaxed font-medium">"Displacing 5M tons of industrial coal annually through advanced thermal engineering."</p>
                        </div>
                        <div>
                            <h4 className="text-brand-primary font-bold text-base mb-2">Core Mission</h4>
                            <p className="text-sm text-gray-600 leading-relaxed font-medium">Scaling high-density fuel assets that allow Tier-1 industries to achieve Net Zero without operational compromise.</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
                    <div className="absolute inset-0 bg-brand-accent/5 blur-[100px] -z-10 rounded-full" />
                    <ValueCard index={0} title="Technical Integrity" description="Uncompromising precision in calorific testing and moisture control metrics." />
                    <ValueCard index={1} title="Sustainability" description="Circular economy protocols that transform agricultural waste into industrial gold." />
                    <ValueCard index={2} title="Operational Scale" description="Commanding a 45,000+ metric ton monthly output for India's largest plants." />
                    <ValueCard index={3} title="Future-Ready" description="JIT autonomous logistics integrated with enterprise thermal auditing." />
                </div>
            </div>
        </section>
    );
}
