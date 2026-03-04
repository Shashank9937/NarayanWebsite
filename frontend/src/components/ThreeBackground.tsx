"use client";

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const ParticleSwarm = () => {
    const ref = useRef<THREE.Points>(null);
    const count = 4000;

    const positions = useMemo(() => {
        const positions = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            // Spherical distribution
            const r = 10 * Math.cbrt(Math.random());
            const theta = Math.random() * 2 * Math.PI;
            const phi = Math.acos(2 * Math.random() - 1);

            positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
            positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            positions[i * 3 + 2] = r * Math.cos(phi);
        }
        return positions;
    }, [count]);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta * 0.02;
            ref.current.rotation.y -= delta * 0.03;
        }
    });

    return (
        <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
            <PointMaterial transparent color="#3b82f6" size={0.02} sizeAttenuation={true} depthWrite={false} opacity={0.6} />
        </Points>
    );
};

export default function ThreeBackground() {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
                <ParticleSwarm />
            </Canvas>
            {/* Gradient overlays to blend the 3D canvas smoothly into the page */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-transparent pointer-events-none" />
        </div>
    );
}
