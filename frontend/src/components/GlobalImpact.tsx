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
        <section ref={sectionRef} className="py-32 px-6 relative overflow-hidden bg-[#000000]">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
                <div className="flex-1">
                    <span className="text-blue-500 text-xs font-bold uppercase tracking-widest block mb-4">Global Footprint</span>
                    <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight leading-tight">
                        Commanding <br />
                        <span className="gradient-text-accent">Market Dominance.</span>
                    </h2>
                    <p className="text-lg text-gray-400 mb-10 leading-relaxed font-light">
                        Operating at a scale that redefines industrial energy. From our base in India to expanding hubs in Southeast Asia, Narayan Enterprises is built for global infrastructure.
                    </p>

                    <div className="grid grid-cols-2 gap-10">
                        <div className="impact-stat">
                            <div className="text-3xl font-bold text-white mb-1">PAN-INDIA</div>
                            <div className="text-xs text-gray-500 font-medium">Supply Chain Coverage</div>
                        </div>
                        <div className="impact-stat">
                            <div className="text-3xl font-bold text-white mb-1">SEA-X</div>
                            <div className="text-xs text-blue-400 font-medium">Southeast Asia Exports</div>
                        </div>
                    </div>
                </div>

                <div className="flex-1 relative group w-full max-w-md mx-auto">
                    <div className="absolute inset-0 bg-blue-500/5 blur-[100px] rounded-full group-hover:bg-blue-500/10 transition-all duration-700" />
                    <div className="glass-panel aspect-square rounded-full flex flex-col items-center justify-center relative shadow-2xl overflow-hidden hover:bg-white/[0.04] transition-colors duration-500">
                        <Globe className="w-48 h-48 text-blue-500/10 absolute animate-pulse duration-[3000ms]" />
                        <div className="text-center relative z-10">
                            <div className="text-6xl font-bold mb-2">12+</div>
                            <div className="text-xs text-blue-500 uppercase font-bold tracking-widest">International Ports</div>
                        </div>

                        {/* Orbiting elements */}
                        <div className="absolute w-full h-full animate-[spin_20s_linear_infinite]">
                            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_10px_#60a5fa]" />
                        </div>
                        <div className="absolute w-3/4 h-3/4 animate-[spin_15s_linear_infinite_reverse]">
                            <div className="absolute bottom-4 right-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full shadow-[0_0_10px_#c084fc]" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

