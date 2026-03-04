"use client";

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';
import ThreeBackground from './ThreeBackground';

const AnimatedCounter = ({ value, label, suffix = "" }: { value: number, label: string, suffix?: string }) => {
    const counterRef = useRef<HTMLDivElement>(null);
    const [count, setCount] = useState(0);

    useEffect(() => {
        let obj = { val: 0 };
        const ctx = gsap.context(() => {
            gsap.to(obj, {
                val: value,
                duration: 2.5,
                ease: "power3.out",
                delay: 1.5,
                onUpdate: () => {
                    setCount(Math.floor(obj.val));
                }
            });
        }, counterRef);
        return () => ctx.revert();
    }, [value]);

    return (
        <div ref={counterRef} className="flex flex-col items-center group cursor-default">
            <div className="text-4xl md:text-5xl font-bold tracking-tight mb-2 group-hover:scale-105 transition-transform duration-300">
                {count}{suffix}
            </div>
            <div className="text-sm font-medium text-gray-500 uppercase tracking-widest">{label}</div>
        </div>
    );
};

export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(contentRef.current?.children || [], {
                y: 40,
                opacity: 0,
                duration: 1.2,
                stagger: 0.15,
                ease: "power3.out",
                delay: 0.2
            });
        }, heroRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={heroRef} className="relative min-h-[110vh] flex flex-col items-center justify-center px-6 overflow-hidden bg-black">
            <ThreeBackground />

            {/* Subtle glow behind content */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

            <div ref={contentRef} className="relative z-20 max-w-5xl mx-auto flex flex-col items-center text-center mt-20">

                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-gray-300 text-xs font-medium mb-10 transition-all hover:bg-white/5">
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                    Next-Generation Industrial Infrastructure
                </div>

                <h1 className="text-6xl md:text-[80px] lg:text-[100px] font-bold leading-[1.05] tracking-tight mb-8">
                    Clean Industrial Energy <br />
                    Through <span className="gradient-text-accent">Biomass Fuel.</span>
                </h1>

                <p className="text-lg md:text-2xl text-gray-400 max-w-2xl mb-12 font-light leading-relaxed">
                    Powering Tier-1 manufacturing and thermal plants with zero-compromise, ultra-dense sustainable biomass assets.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-6 mb-24">
                    <button className="group relative overflow-hidden bg-white text-black px-10 py-4 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-[1.02] flex items-center gap-2 w-full sm:w-auto justify-center shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                        <span>Request Quote</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button className="w-full sm:w-auto px-10 py-4 rounded-full text-sm font-medium text-white glass-panel hover:bg-white/10 transition-all duration-300">
                        View Products
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-16 md:gap-32 pt-12 border-t border-white/10">
                    <AnimatedCounter value={5000} label="Tons Supplied" suffix="+" />
                    <AnimatedCounter value={150} label="Industrial Clients" suffix="+" />
                    <AnimatedCounter value={12} label="Power Plants Served" />
                </div>
            </div>
        </section>
    );
}
