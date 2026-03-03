import React from 'react';

const ValueCard = ({ title, description }: { title: string, description: string }) => (
    <div className="p-8 border border-white/5 hover:border-brand-green/30 transition-colors group">
        <h3 className="text-xl font-bold mb-4 group-hover:text-brand-green transition-colors">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
);

export default function CorporateOverview() {
    return (
        <section className="py-32 px-12 bg-zinc-900/50">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                <div>
                    <span className="text-brand-green text-xs font-bold uppercase tracking-widest block mb-6">Institutional Profile</span>
                    <h2 className="text-5xl font-bold mb-8 tracking-tight">A Decade of Scaling Sustainable Energy.</h2>
                    <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                        Founded in 2012, Narayan Enterprises has evolved from a regional biomass supplier to a national industrial infrastructure partner. We bridge the gap between agricultural waste and industrial energy needs, providing a reliable, carbon-neutral alternative to coal.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-brand-green font-bold uppercase tracking-widest text-xs mb-4">Vision 2030</h4>
                            <p className="text-sm text-gray-500">To displace 5 million tons of industrial coal usage annually through advanced biomass technology.</p>
                        </div>
                        <div>
                            <h4 className="text-brand-green font-bold uppercase tracking-widest text-xs mb-4">Our Mission</h4>
                            <p className="text-sm text-gray-500">Engineering high-calorific fuel solutions that empower industries to transition to net-zero without compromising on scale.</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ValueCard title="Integrity" description="Transparency in supply chain and calorific value reporting." />
                    <ValueCard title="Sustainability" description="Circular economy model benefiting farmers and industries." />
                    <ValueCard title="Scale" description="Industrial-grade production capacity (45,000+ tons/month)." />
                    <ValueCard title="Reliability" description="JIT delivery systems for thermal power plants and boilers." />
                </div>
            </div>
        </section>
    );
}
