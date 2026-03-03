"use client";

import React from 'react';
import { Shield, TrendingUp, Users } from 'lucide-react';

const BoardMember = ({ role, label }: { role: string, label: string }) => (
    <div className="group border-l border-white/5 pl-8 py-4 hover:border-brand-green transition-all">
        <div className="text-[10px] text-brand-green uppercase font-bold tracking-[0.2em] mb-2">{role}</div>
        <div className="text-xl font-bold font-heading group-hover:text-white transition-colors">{label}</div>
    </div>
);

export default function StrategicBoard() {
    return (
        <section id="investors" className="py-40 px-12 bg-brand-charcoal border-y border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-24">
                    <div className="lg:w-1/3">
                        <span className="text-brand-green text-[10px] font-bold uppercase tracking-[0.4em] block mb-8">Strategic Board</span>
                        <h2 className="text-5xl font-bold mb-8 tracking-tight font-heading leading-tight">Institutional <br />Governance.</h2>
                        <p className="text-gray-400 font-light leading-relaxed">
                            Guided by a board of technical industrial veterans and ESG strategists. Our governance model is built for venture-scale longevity.
                        </p>
                    </div>

                    <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-16">
                        <BoardMember role="Executive Council" label="Technical Strategy" />
                        <BoardMember role="ESG Compliance" label="Carbon Credit Auditing" />
                        <BoardMember role="Operational Excellence" label="JIT Logistics Tech" />
                        <BoardMember role="Investor Relations" label="Venture Growth Hub" />
                    </div>
                </div>

                <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="glass-morphism p-10 border border-white/5 group hover:border-brand-cyan/30 transition-all">
                        <TrendingUp className="w-8 h-8 text-brand-cyan mb-6" />
                        <h4 className="text-lg font-bold font-heading mb-4 tracking-wider">Series-V Ready</h4>
                        <p className="text-sm text-gray-500 font-light">Infrastructure auditing complete for institutional scale expansion.</p>
                    </div>
                    <div className="glass-morphism p-10 border border-white/5 group hover:border-brand-green/30 transition-all">
                        <Shield className="w-8 h-8 text-brand-green mb-6" />
                        <h4 className="text-lg font-bold font-heading mb-4 tracking-wider">A+ Rated Debt</h4>
                        <p className="text-sm text-gray-500 font-light">Strong financial backbone with institutional credit facility benchmarks.</p>
                    </div>
                    <div className="glass-morphism p-10 border border-white/5 group hover:border-brand-cyan/30 transition-all">
                        <Users className="w-8 h-8 text-brand-cyan mb-6" />
                        <h4 className="text-lg font-bold font-heading mb-4 tracking-wider">150+ Tier-1</h4>
                        <p className="text-sm text-gray-500 font-light">Service level agreements with the nation's largest industrial conglomerates.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
