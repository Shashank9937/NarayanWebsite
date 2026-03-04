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
                y: 30,
                opacity: 0,
                stagger: 0.2,
                duration: 0.8,
                ease: "power3.out"
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 px-6 relative overflow-hidden bg-brand-background">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
                <div className="flex-1">
                    <span className="text-brand-accent text-sm font-bold uppercase tracking-widest block mb-4">Global Footprint</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight leading-tight text-brand-primary">
                        Commanding <br />
                        <span className="text-brand-accent">Market Reach.</span>
                    </h2>
                    <p className="text-lg text-gray-600 mb-10 leading-relaxed font-medium">
                        Operating at a scale that redefines industrial energy. From our base in India to expanding hubs in Southeast Asia, Narayan Enterprises is built for global infrastructure.
                    </p>

                    <div className="grid grid-cols-2 gap-10">
                        <div className="impact-stat">
                            <div className="text-3xl font-extrabold text-brand-primary mb-1">PAN-INDIA</div>
                            <div className="text-xs text-brand-accent font-bold uppercase tracking-widest">Supply Chain Coverage</div>
                        </div>
                        <div className="impact-stat">
                            <div className="text-3xl font-extrabold text-brand-primary mb-1">SEA-X</div>
                            <div className="text-xs text-brand-accent font-bold uppercase tracking-widest">Southeast Asia Exports</div>
                        </div>
                    </div>
                </div>

                <div className="flex-1 relative group w-full max-w-md mx-auto">
                    <div className="absolute inset-0 bg-brand-accent-light/5 blur-[100px] rounded-full group-hover:bg-brand-accent/10 transition-all duration-700" />
                    <div className="glass-panel aspect-square rounded-full flex flex-col items-center justify-center relative shadow-lg overflow-hidden bg-white hover:border-brand-accent/30 transition-all duration-500">
                        <Globe className="w-48 h-48 text-brand-accent/10 absolute animate-pulse duration-[3000ms]" />
                        <div className="text-center relative z-10">
                            <div className="text-6xl font-extrabold mb-2 text-brand-primary">12+</div>
                            <div className="text-sm text-brand-accent uppercase font-bold tracking-widest">International Ports</div>
                        </div>

                        {/* Orbiting elements */}
                        <div className="absolute w-full h-full animate-[spin_20s_linear_infinite]">
                            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-3 h-3 bg-brand-accent rounded-full shadow-[0_0_10px_rgba(46,125,50,0.5)]" />
                        </div>
                        <div className="absolute w-3/4 h-3/4 animate-[spin_15s_linear_infinite_reverse]">
                            <div className="absolute bottom-4 right-1/4 w-2 h-2 bg-green-400 rounded-full shadow-[0_0_10px_rgba(76,175,80,0.5)]" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

