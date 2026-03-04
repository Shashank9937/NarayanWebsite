import React from 'react';
import { MapPin, Truck, Warehouse, Activity, ArrowRight } from 'lucide-react';

const OperationalNode = ({ icon: Icon, title, detail }: { icon: any, title: string, detail: string }) => (
    <div className="flex gap-6 items-start group p-6 rounded-2xl hover:bg-white/[0.02] border border-transparent hover:border-white/5 transition-all duration-300">
        <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 transition-all duration-300">
            <Icon className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform" />
        </div>
        <div>
            <h4 className="font-bold text-xl mb-2 tracking-tight group-hover:text-blue-400 transition-colors">{title}</h4>
            <p className="text-gray-400 text-sm leading-relaxed font-light">{detail}</p>
        </div>
    </div>
);

export default function InfrastructureOperations() {
    return (
        <section className="py-32 px-6 relative overflow-hidden bg-[#000000]">
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div className="order-2 lg:order-1 relative">
                        <div className="relative aspect-[4/5] md:aspect-video bg-zinc-900 rounded-3xl border border-white/10 overflow-hidden shadow-2xl glass-panel group">
                            <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1581094128547-13830440f37e?q=80&w=1200')] bg-cover bg-center grayscale transition-transform duration-1000 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="w-20 h-20 rounded-full bg-blue-500/20 backdrop-blur-md flex items-center justify-center border border-blue-500/30">
                                    <Activity className="w-8 h-8 text-blue-400 animate-pulse" />
                                </div>
                            </div>

                            <div className="absolute bottom-8 left-8 right-8">
                                <div className="flex items-center gap-3 text-blue-400 text-[10px] font-bold uppercase tracking-[0.4em] mb-6">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                    </span>
                                    Core Network Status: OPTIMAL
                                </div>
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="bg-black/50 backdrop-blur-md p-4 rounded-xl border border-white/5">
                                        <div className="text-[10px] text-gray-500 uppercase font-semibold tracking-widest mb-1">Active Hubs</div>
                                        <div className="text-2xl font-bold text-white">14</div>
                                    </div>
                                    <div className="bg-black/50 backdrop-blur-md p-4 rounded-xl border border-white/5">
                                        <div className="text-[10px] text-gray-500 uppercase font-semibold tracking-widest mb-1">SCM Units</div>
                                        <div className="text-2xl font-bold text-white">120+</div>
                                    </div>
                                    <div className="bg-black/50 backdrop-blur-md p-4 rounded-xl border border-white/5">
                                        <div className="text-[10px] text-gray-500 uppercase font-semibold tracking-widest mb-1">SLA Uptime</div>
                                        <div className="text-2xl font-bold text-white">99.8%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <span className="text-blue-500 text-xs font-bold uppercase tracking-widest block mb-6">Industrial Logistics</span>
                        <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight leading-tight">
                            Institutional <br />
                            <span className="gradient-text-accent">Scale & Precision.</span>
                        </h2>
                        <p className="text-lg text-gray-400 mb-10 leading-relaxed font-light">
                            Our architecture is engineered for absolute redundancy. From automated manufacturing complexes to a GPS-integrated logistics command, we ensure the uninterrupted flow of industrial assets to India's energy backbone.
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

