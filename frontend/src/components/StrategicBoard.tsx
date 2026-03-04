"use client";

import React from 'react';
import { Shield, TrendingUp, Users } from 'lucide-react';

const BoardMember = ({ role, label }: { role: string, label: string }) => (
    <div className="group border-l-2 border-brand-border pl-6 py-2 hover:border-brand-accent transition-all duration-300">
        <div className="text-xs text-brand-accent uppercase font-bold tracking-widest mb-1">{role}</div>
        <div className="text-xl font-bold text-gray-600 group-hover:text-brand-primary transition-colors tracking-tight">{label}</div>
    </div>
);

export default function StrategicBoard() {
    return (
        <section id="investors" className="py-24 px-6 bg-brand-surface">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-20">
                    <div className="lg:w-1/3">
                        <span className="text-brand-accent text-sm font-bold uppercase tracking-widest block mb-4">Strategic Board</span>
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight text-brand-primary">Institutional <br />Governance.</h2>
                        <p className="text-gray-600 font-medium leading-relaxed text-lg">
                            Guided by a board of technical industrial veterans and ESG strategists. Our governance model is built for venture-scale longevity.
                        </p>
                    </div>

                    <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 mt-4 lg:mt-0">
                        <BoardMember role="Executive Council" label="Technical Strategy" />
                        <BoardMember role="ESG Compliance" label="Carbon Credit Auditing" />
                        <BoardMember role="Operational Excellence" label="JIT Logistics Tech" />
                        <BoardMember role="Investor Relations" label="Venture Growth Hub" />
                    </div>
                </div>

                <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="glass-panel bg-white p-10 group hover:border-brand-accent/40 shadow-sm hover:shadow-lg transition-all duration-300">
                        <div className="w-14 h-14 rounded-2xl bg-brand-background border border-brand-border flex items-center justify-center mb-6">
                            <TrendingUp className="w-6 h-6 text-brand-accent" />
                        </div>
                        <h4 className="text-xl font-bold mb-3 tracking-tight text-brand-primary">Expansion Ready</h4>
                        <p className="text-sm text-gray-600 font-medium leading-relaxed">Infrastructure auditing complete for institutional scale capacity expansion.</p>
                    </div>
                    <div className="glass-panel bg-white p-10 group hover:border-brand-accent/40 shadow-sm hover:shadow-lg transition-all duration-300">
                        <div className="w-14 h-14 rounded-2xl bg-brand-background border border-brand-border flex items-center justify-center mb-6">
                            <Shield className="w-6 h-6 text-brand-accent" />
                        </div>
                        <h4 className="text-xl font-bold mb-3 tracking-tight text-brand-primary">Corporate Integrity</h4>
                        <p className="text-sm text-gray-600 font-medium leading-relaxed">Strong organizational backbone with unwavering industrial quality standards.</p>
                    </div>
                    <div className="glass-panel bg-white p-10 group hover:border-brand-accent/40 shadow-sm hover:shadow-lg transition-all duration-300">
                        <div className="w-14 h-14 rounded-2xl bg-brand-background border border-brand-border flex items-center justify-center mb-6">
                            <Users className="w-6 h-6 text-brand-accent" />
                        </div>
                        <h4 className="text-xl font-bold mb-3 tracking-tight text-brand-primary">150+ Tier-1 Clients</h4>
                        <p className="text-sm text-gray-600 font-medium leading-relaxed">Service level agreements with the nation's largest industrial conglomerates.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

