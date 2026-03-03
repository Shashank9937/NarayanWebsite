"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, BarChart3, ShieldCheck, Zap } from 'lucide-react';

const KPIItem = ({ icon: Icon, value, label }: { icon: any, value: string, label: string }) => (
    <div className="flex flex-col items-center md:items-start">
        <div className="flex items-center gap-3 mb-1">
            <Icon className="w-5 h-5 text-brand-green" />
            <span className="text-3xl font-bold tracking-tight">{value}</span>
        </div>
        <span className="text-xs uppercase tracking-widest text-gray-500 font-semibold">{label}</span>
    </div>
);

export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);
    const headlineRef = useRef<HTMLHeadingElement>(null);
    const kpiRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(headlineRef.current, {
                y: 50,
                opacity: 0,
                duration: 1.2,
                ease: "power4.out",
                delay: 0.5
            });

            gsap.from(".hero-sub", {
                y: 20,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                delay: 0.8
            });

            gsap.from(kpiRef.current?.children || [], {
                y: 30,
                opacity: 0,
                stagger: 0.2,
                duration: 1,
                ease: "power2.out",
                delay: 1.2
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={heroRef} className="relative min-h-screen flex flex-col justify-center px-12 pt-32 overflow-hidden industrial-grid">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal via-brand-charcoal/90 to-transparent z-10" />

            {/* Background Media Placeholder (to be replaced by real video/image) */}
            <div className="absolute inset-0 z-0">
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2000')] bg-cover bg-center opacity-40 grayscale" />
            </div>

            <div className="relative z-20 max-w-5xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 border border-brand-green/20 text-brand-green text-xs font-bold uppercase tracking-widest mb-8">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
                    </span>
                    Next-Generation Industrial Energy
                </div>

                <h1 ref={headlineRef} className="text-6xl md:text-8xl font-bold leading-[0.9] mb-8 tracking-tighter">
                    Powering Industrial India with <br />
                    <span className="text-brand-green">Sustainable Biomass.</span>
                </h1>

                <p className="hero-sub text-xl text-gray-400 max-w-2xl mb-12 font-light leading-relaxed">
                    The institutional leader in large-scale biomass fuel manufacturing and clean energy infrastructure. Reliable. Scalable. Future-Ready.
                </p>

                <div className="hero-sub flex flex-wrap gap-6 mb-20">
                    <button className="group bg-brand-green text-white px-8 py-4 text-sm font-bold uppercase tracking-wider hover:bg-brand-accent transition-all duration-300 flex items-center gap-3">
                        Request Industrial Quote
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="px-8 py-4 text-sm font-bold uppercase tracking-wider border border-white/10 hover:bg-white/5 transition-all duration-300">
                        View Specifications
                    </button>
                </div>

                <div ref={kpiRef} className="grid grid-cols-2 lg:grid-cols-4 gap-12 py-12 border-t border-white/5">
                    <KPIItem icon={BarChart3} value="45,000+" label="Tons Monthly Output" />
                    <KPIItem icon={Zap} value="150+" label="Industrial Clients" />
                    <KPIItem icon={ShieldCheck} value="12+" label="Years of Operations" />
                    <KPIItem icon={BarChart3} value="92%" label="Carbon Reduction vs Coal" />
                </div>
            </div>
        </section>
    );
}
