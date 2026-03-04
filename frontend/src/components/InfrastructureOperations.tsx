import React from 'react';
import { MapPin, Truck, Warehouse, Activity, ArrowRight } from 'lucide-react';

const OperationalNode = ({ icon: Icon, title, detail }: { icon: any, title: string, detail: string }) => (
    <div className="flex gap-6 items-start group p-6 rounded-2xl hover:bg-white border border-transparent hover:border-brand-accent/20 hover:shadow-lg transition-all duration-300">
        <div className="w-14 h-14 bg-brand-background rounded-xl flex items-center justify-center shrink-0 border border-brand-border group-hover:bg-brand-accent/10 group-hover:border-brand-accent/20 transition-all duration-300">
            <Icon className="w-6 h-6 text-brand-accent group-hover:scale-110 transition-transform" />
        </div>
        <div>
            <h4 className="font-bold text-xl mb-2 tracking-tight text-brand-primary group-hover:text-brand-accent transition-colors">{title}</h4>
            <p className="text-gray-600 text-sm leading-relaxed font-medium">{detail}</p>
        </div>
    </div>
);

export default function InfrastructureOperations() {
    return (
        <section className="py-24 px-6 relative overflow-hidden bg-brand-surface">
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-accent/20 to-transparent" />

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="order-2 lg:order-1 relative">
                        <div className="relative aspect-[4/5] md:aspect-video bg-white rounded-3xl border border-brand-border overflow-hidden shadow-2xl glass-panel group">
                            <div className="absolute inset-0 opacity-80 bg-[url('https://images.unsplash.com/photo-1581094128547-13830440f37e?q=80&w=1200')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="w-20 h-20 rounded-full bg-brand-accent/30 backdrop-blur-md flex items-center justify-center border border-white/40 shadow-xl">
                                    <Activity className="w-8 h-8 text-white animate-pulse" />
                                </div>
                            </div>

                            <div className="absolute bottom-8 left-8 right-8">
                                <div className="flex items-center gap-3 text-white text-[10px] font-bold uppercase tracking-[0.4em] mb-6">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
                                    </span>
                                    Core Network Status: OPTIMAL
                                </div>
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
                                        <div className="text-[10px] text-gray-300 uppercase font-bold tracking-widest mb-1">Active Hubs</div>
                                        <div className="text-2xl font-extrabold text-white">14</div>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
                                        <div className="text-[10px] text-gray-300 uppercase font-bold tracking-widest mb-1">SCM Units</div>
                                        <div className="text-2xl font-extrabold text-white">120+</div>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
                                        <div className="text-[10px] text-gray-300 uppercase font-bold tracking-widest mb-1">SLA Uptime</div>
                                        <div className="text-2xl font-extrabold text-white">99.8%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <span className="text-brand-accent text-sm font-bold uppercase tracking-widest block mb-4">Industrial Logistics</span>
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight leading-tight text-brand-primary">
                            Institutional <br />
                            <span className="text-brand-accent">Scale & Precision.</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-10 leading-relaxed font-medium">
                            Our architecture is engineered for absolute reliability. From automated manufacturing complexes to a GPS-integrated logistics command, we ensure the uninterrupted flow of industrial assets to India's energy backbone.
                        </p>

                        <div className="space-y-4">
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

