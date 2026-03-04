"use client";

import React from 'react';
import { Fuel, Zap, TrendingDown, Factory, CheckCircle2 } from 'lucide-react';

const ComparisonCard = ({ title, conventional, biomass, savings, highlights }: { title: string, conventional: string, biomass: string, savings: string, highlights: string[] }) => (
    <div className="glass-panel bg-white p-8 group hover:-translate-y-2 transition-transform duration-500 shadow-xl border-t-4 border-t-transparent hover:border-t-brand-accent">
        <h3 className="text-2xl font-bold tracking-tight mb-8 text-brand-primary">{title}</h3>

        <div className="space-y-6 mb-8">
            <div className="flex justify-between items-center pb-4 border-b border-brand-border">
                <div className="flex items-center gap-3">
                    <Fuel className="w-5 h-5 text-gray-400" />
                    <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">{conventional}</span>
                </div>
                <div className="w-16 h-1 bg-gray-200 rounded-full" />
            </div>

            <div className="flex justify-between items-center pb-4 border-b border-brand-border">
                <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-brand-accent" />
                    <span className="text-sm font-bold text-brand-primary uppercase tracking-widest">{biomass}</span>
                </div>
                <div className="w-16 h-1 bg-brand-accent rounded-full shadow-[0_0_10px_rgba(46,125,50,0.4)] relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-brand-accent rounded-full" />
                </div>
            </div>
        </div>

        <div className="bg-brand-background rounded-xl p-5 mb-8 border border-brand-border">
            <div className="flex items-center gap-3 text-brand-accent font-extrabold text-xl mb-1">
                <TrendingDown className="w-6 h-6" />
                <span>Save up to {savings}%</span>
            </div>
            <p className="text-xs text-brand-primary font-medium tracking-wide">Reduction in operational fuel costs</p>
        </div>

        <ul className="space-y-3">
            {highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0" />
                    <span className="text-sm font-medium text-gray-600 leading-relaxed">{item}</span>
                </li>
            ))}
        </ul>
    </div>
);

export default function FuelComparison() {
    return (
        <section className="py-24 px-6 bg-brand-surface relative z-10 border-t border-brand-border/50">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                    <div className="lg:col-span-4">
                        <span className="text-brand-accent text-sm font-bold uppercase tracking-widest block mb-4">Financial Engineering</span>
                        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8 text-brand-primary">
                            Outperforming <span className="text-gray-400 line-through decoration-2 decoration-brand-accent text-brand-primary/50">Fossil Fuels.</span>
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed font-medium mb-10">
                            Fossil fuels are volatile, expensive, and environmentally destructive. Our high-density biofuel assets deliver superior thermal stability while dramatically reducing capital burn across your operational stack.
                        </p>

                        <div className="glass-panel p-6 bg-brand-background border border-brand-border">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center shrink-0">
                                    <Factory className="w-6 h-6 text-brand-accent" />
                                </div>
                                <h4 className="font-bold text-lg text-brand-primary tracking-tight">Industrial Impact</h4>
                            </div>
                            <p className="text-sm text-gray-600 font-medium leading-relaxed">
                                Partnering with us allows enterprise-scale facilities to mitigate risk against erratic fossil fuel supply chains, while directly accelerating their ESG and Net-Zero mandates.
                            </p>
                        </div>
                    </div>

                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-brand-accent/5 blur-[100px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none -z-10" />

                        <ComparisonCard
                            title="LPG Conversion"
                            conventional="Liquid Petroleum Gas"
                            biomass="Bio-Pellets"
                            savings="50"
                            highlights={[
                                "Direct reduction in explosive hazard risk",
                                "Consistent high-temperature burning",
                                "Elimination of heavy cylinder logistics"
                            ]}
                        />

                        <ComparisonCard
                            title="Diesel Displacement"
                            conventional="Industrial Diesel"
                            biomass="Bio-Pellets"
                            savings="45"
                            highlights={[
                                "Zero SOx/NOx toxic emissions",
                                "Immunity to global crude oil price shocks",
                                "Significantly lower equipment corrosion rates"
                            ]}
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}
