"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, BarChart3, ShieldCheck, Zap } from 'lucide-react';

import MeshBackground from './MeshBackground';

const KPIItem = ({ icon: Icon, value, label }: { icon: any, value: string, label: string }) => (
    <div className="flex flex-col items-center md:items-start group/kpi">
        <div className="flex items-center gap-3 mb-2">
            <Icon className="w-5 h-5 text-brand-green group-hover/kpi:scale-110 transition-transform" />
            <span className="text-3xl font-bold tracking-tight font-heading">{value}</span>
        </div>
        <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">{label}</span>
    </div>
);

export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);
    const headlineRef = useRef<HTMLHeadingElement>(null);
    const kpiRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(headlineRef.current, {
                y: 100,
                opacity: 0,
                duration: 1.5,
                ease: "power4.out",
                delay: 0.5
            });

            gsap.from(".hero-sub", {
                y: 30,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
                delay: 1
            });

            gsap.from(kpiRef.current?.children || [], {
                scale: 0.8,
                opacity: 0,
                stagger: 0.2,
                duration: 1,
                ease: "back.out(1.7)",
                delay: 1.5
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={heroRef} className="relative min-h-screen flex flex-col justify-center px-12 pt-32 overflow-hidden neo-grid">
            <MeshBackground />

            {/* Glow Effects */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-green/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-cyan/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="relative z-20 max-w-6xl">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-brand-green/5 border border-brand-green/20 text-brand-green text-[10px] font-bold uppercase tracking-[0.3em] mb-10 unicorn-glow">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
                    </span>
                    Institutional Industrial Infrastructure
                </div>

                <h1 ref={headlineRef} className="text-7xl md:text-[110px] font-bold leading-[0.85] mb-10 tracking-tight font-heading">
                    THE FUTURE OF <br />
                    <span className="text-gradient-emerald">INDUSTRIAL ENERGY.</span>
                </h1>

                <p className="hero-sub text-xl md:text-2xl text-gray-400 max-w-3xl mb-14 font-light leading-relaxed">
                    Narayan Enterprises is the institutional benchmark for large-scale biomass innovation. Engineering the transition to a carbon-neutral industrial backbone.
                </p>

                <div className="hero-sub flex flex-wrap gap-8 mb-24">
                    <button className="group relative overflow-hidden bg-brand-green text-black px-12 py-5 text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,255,157,0.5)]">
                        <span className="relative z-10 flex items-center gap-3">
                            Request Industrial Quote
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </button>

                    <button className="px-12 py-5 text-sm font-bold uppercase tracking-widest border border-white/10 hover:border-brand-green/50 hover:bg-brand-green/5 transition-all duration-300">
                        Technical Roadmap
                    </button>
                </div>

                <div ref={kpiRef} className="grid grid-cols-2 lg:grid-cols-4 gap-16 py-14 border-t border-white/10">
                    <KPIItem icon={BarChart3} value="45K+" label="Monthly Metric Tons" />
                    <KPIItem icon={Zap} value="150+" label="Tier-1 Enterprise Clients" />
                    <KPIItem icon={ShieldCheck} value="12Y+" label="Institutional Track Record" />
                    <KPIItem icon={BarChart3} value="92%" label="Carbon Offset Efficiency" />
                </div>
            </div>
        </section>
    );
}
