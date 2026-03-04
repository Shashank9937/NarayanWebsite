"use client";

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ArrowRight, Leaf } from 'lucide-react';

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
                delay: 1.0,
                onUpdate: () => {
                    setCount(Math.floor(obj.val));
                }
            });
        }, counterRef);
        return () => ctx.revert();
    }, [value]);

    return (
        <div ref={counterRef} className="flex flex-col items-center group cursor-default">
            <div className="text-4xl md:text-5xl font-bold tracking-tight mb-2 text-white group-hover:scale-105 transition-transform duration-300">
                {count}{suffix}
            </div>
            <div className="text-sm font-semibold text-white/80 uppercase tracking-widest">{label}</div>
        </div>
    );
};

export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(contentRef.current?.children || [], {
                y: 30,
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
        <section ref={heroRef} className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 overflow-hidden bg-brand-background mt-20">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2641&auto=format&fit=crop')" }}
            >
                <div className="absolute inset-0 bg-brand-primary/80 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-transparent to-transparent opacity-90" />
            </div>

            <div ref={contentRef} className="relative z-20 max-w-5xl mx-auto flex flex-col items-center text-center mt-12">

                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-10 transition-all hover:bg-white/20">
                    <Leaf className="w-4 h-4 text-brand-accent-light" />
                    Sustainable Industrial Bio-Energy
                </div>

                <h1 className="text-5xl md:text-[70px] lg:text-[90px] font-extrabold leading-[1.05] tracking-tight mb-8 text-white">
                    Clean Industrial Energy <br />
                    Through <span className="text-brand-accent-light">Biomass Fuel.</span>
                </h1>

                <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-12 font-medium leading-relaxed">
                    Powering Tier-1 manufacturing and thermal plants with zero-compromise, ultra-dense sustainable biomass assets. Partnering for a greener tomorrow.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-6 mb-20">
                    <button className="group relative overflow-hidden bg-brand-accent text-white px-10 py-4 rounded-md text-base font-bold transition-all duration-300 hover:bg-green-700 flex items-center gap-2 w-full sm:w-auto justify-center shadow-xl">
                        <span>Request Quote</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button className="w-full sm:w-auto px-10 py-4 rounded-md text-base font-bold text-white bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
                        View Products
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-16 md:gap-32 pt-12 border-t border-white/20 w-full max-w-4xl mx-auto">
                    <AnimatedCounter value={5000} label="Tons Supplied" suffix="+" />
                    <AnimatedCounter value={150} label="Industrial Clients" suffix="+" />
                    <AnimatedCounter value={12} label="Power Plants Served" />
                </div>
            </div>
        </section>
    );
}
