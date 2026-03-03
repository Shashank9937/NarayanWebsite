import React from 'react';
import { MapPin, Truck, Warehouse, Activity } from 'lucide-react';

const OperationalNode = ({ icon: Icon, title, detail }: { icon: any, title: string, detail: string }) => (
    <div className="flex gap-6 items-start">
        <div className="w-12 h-12 bg-brand-green/10 border border-brand-green/20 rounded-full flex items-center justify-center shrink-0">
            <Icon className="w-6 h-6 text-brand-green" />
        </div>
        <div>
            <h4 className="font-bold text-lg mb-1">{title}</h4>
            <p className="text-gray-500 text-sm leading-relaxed">{detail}</p>
        </div>
    </div>
);

export default function InfrastructureOperations() {
    return (
        <section className="py-32 px-12 bg-black">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="relative aspect-video bg-zinc-900 border border-white/5 rounded-lg overflow-hidden glass-morphism">
                            <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1581094128547-13830440f37e?q=80&w=1200')] bg-cover bg-center" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />

                            <div className="absolute bottom-8 left-8 right-8">
                                <div className="flex items-center gap-2 text-brand-green text-[10px] font-bold uppercase tracking-widest mb-4">
                                    <Activity className="w-3 h-3 animate-pulse" />
                                    Live Network Status: Operational
                                </div>
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="bg-black/40 backdrop-blur-md p-4 border border-white/5">
                                        <div className="text-xs text-gray-500 mb-1">Active Hubs</div>
                                        <div className="text-xl font-bold">14</div>
                                    </div>
                                    <div className="bg-black/40 backdrop-blur-md p-4 border border-white/5">
                                        <div className="text-xs text-gray-500 mb-1">Fleet Count</div>
                                        <div className="text-xl font-bold">120+</div>
                                    </div>
                                    <div className="bg-black/40 backdrop-blur-md p-4 border border-white/5">
                                        <div className="text-xs text-gray-500 mb-1">Uptime</div>
                                        <div className="text-xl font-bold">99.8%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <span className="text-brand-green text-xs font-bold uppercase tracking-widest block mb-6">Operations & Logistics</span>
                        <h2 className="text-5xl font-bold mb-8 tracking-tight">Institutional Scale & Precision.</h2>
                        <p className="text-lg text-gray-400 mb-12 leading-relaxed">
                            Our infrastructure is engineered for redundancy and scale. From automated manufacturing hubs to a dedicated logistics fleet, we ensure uninterrupted fuel supply to India's core industries.
                        </p>

                        <div className="space-y-10">
                            <OperationalNode
                                icon={Warehouse}
                                title="Strategic Storage Facilities"
                                detail="Weather-proof storage capacity of over 100,000 tons across 5 states, mitigating seasonal supply fluctuations."
                            />
                            <OperationalNode
                                icon={Truck}
                                title="Dedicated SCM Fleet"
                                detail="GPS-tracked logistics network ensuring Just-In-Time (JIT) delivery for large-scale industrial boilers."
                            />
                            <OperationalNode
                                icon={MapPin}
                                title="Pan-India Reach"
                                detail="Manufacturing hubs strategically located in Gujarat, Maharashtra, and Madhya Pradesh for optimized distribution."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
