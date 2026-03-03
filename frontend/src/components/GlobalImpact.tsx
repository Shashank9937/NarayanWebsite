"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Globe } from 'lucide-react';

export default function GlobalImpact() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".impact-stat", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
                y: 50,
                opacity: 0,
                stagger: 0.2,
                duration: 1,
                ease: "power4.out"
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-40 px-12 relative overflow-hidden bg-brand-surface">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-right from-transparent via-brand-green/20 to-transparent" />

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-center">
                <div className="flex-1">
                    <span className="text-brand-green text-[10px] font-bold uppercase tracking-[0.4em] block mb-8">Global Footprint</span>
                    <h2 className="text-6xl font-bold mb-10 tracking-tight font-heading">
                        Commanding <br />
                        <span className="text-gradient-emerald">Market Dominance.</span>
                    </h2>
                    <p className="text-xl text-gray-400 mb-12 leading-relaxed font-light">
                        Operating at a scale that redefines industrial energy. From our base in India to expanding hubs in Southeast Asia, Narayan Enterprises is built for global infrastructure.
                    </p>

                    <div className="grid grid-cols-2 gap-12">
                        <div className="impact-stat">
                            <div className="text-4xl font-bold font-heading text-brand-green mb-2">PAN-INDIA</div>
                            <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Supply Chain Coverage</div>
                        </div>
                        <div className="impact-stat">
                            <div className="text-4xl font-bold font-heading text-brand-cyan mb-2">SEA-X</div>
                            <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Southeast Asia Exports</div>
                        </div>
                    </div>
                </div>

                <div className="flex-1 relative group">
                    <div className="absolute -inset-10 bg-brand-green/5 blur-[100px] rounded-full group-hover:bg-brand-green/10 transition-all" />
                    <div className="glass-morphism aspect-square rounded-full flex items-center justify-center border border-white/5 relative unicorn-glow">
                        <Globe className="w-64 h-64 text-brand-green/20 absolute animate-pulse" />
                        <div className="text-center relative z-10">
                            <div className="text-7xl font-bold font-heading mb-2">12+</div>
                            <div className="text-[10px] text-brand-green uppercase font-bold tracking-[0.3em]">International Ports</div>
                        </div>

                        {/* Orbiting dots */}
                        <div className="absolute w-full h-full animate-[spin_20s_linear_infinite]">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-brand-green rounded-full shadow-[0_0_15px_#00FF9D]" />
                        </div>
                        <div className="absolute w-3/4 h-3/4 animate-[spin_15s_linear_infinite_reverse]">
                            <div className="absolute bottom-0 right-1/4 w-2 h-2 bg-brand-cyan rounded-full shadow-[0_0_15px_#00E5FF]" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
