import React from 'react';
import { MapPin, Truck, Warehouse, Activity, ArrowRight } from 'lucide-react';

const OperationalNode = ({ icon: Icon, title, detail }: { icon: any, title: string, detail: string }) => (
    <div className="flex gap-8 items-start group">
        <div className="w-14 h-14 bg-brand-green/5 border border-white/5 rounded-sm flex items-center justify-center shrink-0 group-hover:border-brand-green/30 transition-all duration-500">
            <Icon className="w-6 h-6 text-brand-green group-hover:scale-110 transition-transform" />
        </div>
        <div>
            <h4 className="font-bold text-xl mb-2 font-heading tracking-wide group-hover:text-brand-green transition-colors">{title}</h4>
            <p className="text-gray-500 text-sm leading-relaxed font-light">{detail}</p>
        </div>
    </div>
);

export default function InfrastructureOperations() {
    return (
        <section className="py-40 px-12 relative overflow-hidden bg-brand-charcoal">
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-cyan/20 to-transparent" />

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                    <div className="order-2 lg:order-1 relative">
                        <div className="absolute -inset-4 border border-brand-cyan/10 rounded-2xl pointer-events-none" />
                        <div className="relative aspect-[4/5] md:aspect-video bg-zinc-900 border border-white/5 overflow-hidden glass-morphism unicorn-glow">
                            <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1581094128547-13830440f37e?q=80&w=1200')] bg-cover bg-center grayscale" />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent" />

                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20 rounded-full bg-brand-green/20 backdrop-blur-md flex items-center justify-center border border-brand-green/30 animate-pulse">
                                    <Activity className="w-8 h-8 text-brand-green" />
                                </div>
                            </div>

                            <div className="absolute bottom-10 left-10 right-10">
                                <div className="flex items-center gap-3 text-brand-green text-[10px] font-bold uppercase tracking-[0.4em] mb-6">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
                                    </span>
                                    Core Network Status: OPTIMAL
                                </div>
                                <div className="grid grid-cols-3 gap-6">
                                    <div className="glass-morphism p-5 border border-white/5">
                                        <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-2">Active Hubs</div>
                                        <div className="text-2xl font-bold font-heading">14</div>
                                    </div>
                                    <div className="glass-morphism p-5 border border-white/5">
                                        <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-2">SCM Units</div>
                                        <div className="text-2xl font-bold font-heading">120+</div>
                                    </div>
                                    <div className="glass-morphism p-5 border border-white/5">
                                        <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-2">SLA Uptime</div>
                                        <div className="text-2xl font-bold font-heading">99.8%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <span className="text-brand-green text-[10px] font-bold uppercase tracking-[0.4em] block mb-8">Industrial Logistics</span>
                        <h2 className="text-6xl font-bold mb-10 tracking-tight font-heading leading-tight">
                            Institutional <br />
                            <span className="text-gradient-emerald">Scale & Precision.</span>
                        </h2>
                        <p className="text-xl text-gray-400 mb-14 leading-relaxed font-light">
                            Our architecture is engineered for absolute redundancy. From automated manufacturing complexes to a GPS-integrated logistics command, we ensure the uninterrupted flow of industrial assets to India's energy backbone.
                        </p>

                        <div className="space-y-12">
                            <OperationalNode
                                icon={Warehouse}
                                title="Strategic Asset Repositories"
                                detail="Weather-proof storage infrastructure with 100,000+ metric ton capacity across 5 core industrial states."
                            />
                            <OperationalNode
                                icon={Truck}
                                title="Autonomous SCM Fleet"
                                detail="Real-time telemetry-tracked logistics network ensuring precision Just-In-Time (JIT) provisioning."
                            />
                            <OperationalNode
                                icon={MapPin}
                                title="Continental Distribution"
                                detail="Manufacturing complexes strategically positioned in Gujarat, Maharashtra, and MP for zero-lag distribution."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
