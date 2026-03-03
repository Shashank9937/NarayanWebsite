"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function MeshBackground() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const colors = ['#00FF9D', '#00E5FF', '#004D30'];
            const bubbles = Array.from({ length: 15 });

            bubbles.forEach((_, i) => {
                const bubble = document.createElement('div');
                bubble.className = 'absolute rounded-full blur-[120px] opacity-20 pointer-events-none';
                const size = Math.random() * 600 + 400;
                bubble.style.width = `${size}px`;
                bubble.style.height = `${size}px`;
                bubble.style.backgroundColor = colors[i % colors.length];
                containerRef.current?.appendChild(bubble);

                gsap.set(bubble, {
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                });

                gsap.to(bubble, {
                    x: `+=${Math.random() * 400 - 200}`,
                    y: `+=${Math.random() * 400 - 200}`,
                    opacity: Math.random() * 0.3 + 0.1,
                    duration: Math.random() * 10 + 10,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 z-0 overflow-hidden bg-brand-charcoal opacity-40 pointer-events-none"
        />
    );
}
