"use client";

import React from 'react';
import { Shield, TrendingUp, Users } from 'lucide-react';

const BoardMember = ({ role, label }: { role: string, label: string }) => (
    <div className="group border-l-2 border-white/5 pl-6 py-2 hover:border-blue-500 transition-all duration-300">
        <div className="text-xs text-blue-500 uppercase font-semibold tracking-widest mb-1">{role}</div>
        <div className="text-xl font-bold text-gray-300 group-hover:text-white transition-colors tracking-tight">{label}</div>
    </div>
);

export default function StrategicBoard() {
    return (
        <section id="investors" className="py-32 px-6 bg-[#000000]">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-20">
                    <div className="lg:w-1/3">
                        <span className="text-blue-500 text-xs font-bold uppercase tracking-widest block mb-4">Strategic Board</span>
                        <h2 className="text-5xl font-bold mb-6 tracking-tight leading-tight">Institutional <br />Governance.</h2>
                        <p className="text-gray-400 font-light leading-relaxed text-lg">
                            Guided by a board of technical industrial veterans and ESG strategists. Our governance model is built for venture-scale longevity.
                        </p>
                    </div>

                    <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                        <BoardMember role="Executive Council" label="Technical Strategy" />
                        <BoardMember role="ESG Compliance" label="Carbon Credit Auditing" />
                        <BoardMember role="Operational Excellence" label="JIT Logistics Tech" />
                        <BoardMember role="Investor Relations" label="Venture Growth Hub" />
                    </div>
                </div>

                <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="glass-panel p-8 group hover:bg-white/[0.04] transition-all duration-300">
                        <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6">
                            <TrendingUp className="w-6 h-6 text-blue-400" />
                        </div>
                        <h4 className="text-xl font-bold mb-3 tracking-tight">Series-V Ready</h4>
                        <p className="text-sm text-gray-500 font-light leading-relaxed">Infrastructure auditing complete for institutional scale expansion.</p>
                    </div>
                    <div className="glass-panel p-8 group hover:bg-white/[0.04] transition-all duration-300">
                        <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6">
                            <Shield className="w-6 h-6 text-purple-400" />
                        </div>
                        <h4 className="text-xl font-bold mb-3 tracking-tight">A+ Rated Debt</h4>
                        <p className="text-sm text-gray-500 font-light leading-relaxed">Strong financial backbone with institutional credit facility benchmarks.</p>
                    </div>
                    <div className="glass-panel p-8 group hover:bg-white/[0.04] transition-all duration-300">
                        <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6">
                            <Users className="w-6 h-6 text-blue-400" />
                        </div>
                        <h4 className="text-xl font-bold mb-3 tracking-tight">150+ Tier-1</h4>
                        <p className="text-sm text-gray-500 font-light leading-relaxed">Service level agreements with the nation's largest industrial conglomerates.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

