"use client";

import React from 'react';
import { Settings, Wind, Scissors, Beaker, ThermometerSnowflake, PackageCheck } from 'lucide-react';

const ProcessStep = ({ index, title, description, icon: Icon }: { index: number, title: string, description: string, icon: any }) => (
    <div className="relative flex flex-col items-center text-center group cursor-default">
        <div className="w-20 h-20 bg-white border border-brand-border rounded-2xl flex items-center justify-center mb-6 z-10 relative group-hover:border-brand-accent/40 group-hover:shadow-[0_0_20px_rgba(46,125,50,0.15)] transition-all duration-300">
            <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-brand-primary text-white text-sm font-bold flex items-center justify-center border-4 border-brand-background group-hover:bg-brand-accent transition-colors">
                {index}
            </span>
            <Icon className="w-8 h-8 text-brand-primary group-hover:text-brand-accent transition-colors" />
        </div>
        <h4 className="text-xl font-bold mb-3 tracking-tight text-brand-primary">{title}</h4>
        <p className="text-sm font-medium text-gray-600 leading-relaxed max-w-[250px]">{description}</p>
    </div>
);

export default function ManufacturingProcess() {
    return (
        <section className="py-24 px-6 relative overflow-hidden bg-brand-background">
            <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-brand-accent-light/5 blur-[120px] rounded-full -translate-x-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-brand-accent text-sm font-bold uppercase tracking-widest block mb-4">Engineering Protocol</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-brand-primary">
                        How We Engineer <span className="text-brand-accent">Bio-Pellets.</span>
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed font-medium">
                        A meticulous, science-driven process ensuring every pellet exceeds international calorific and emission standards.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[2.5rem] left-[5%] right-[5%] h-px bg-brand-border z-0" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 lg:gap-12 relative z-10">
                        <ProcessStep
                            index={1}
                            title="Biomass Feedstock"
                            description="Precision selection and filtration of agricultural residues to remove impurities."
                            icon={Settings}
                        />
                        <ProcessStep
                            index={2}
                            title="Thermal Drying"
                            description="Moisture calibration to 10-12% via advanced rotary drum systems for optimal combustion."
                            icon={Wind}
                        />
                        <ProcessStep
                            index={3}
                            title="High-Speed Grinding"
                            description="Reducing biomass to consistent micro-particles (<5mm) to maximize energy density."
                            icon={Scissors}
                        />
                        <ProcessStep
                            index={4}
                            title="Compression & Pelletising"
                            description="High-torque extrusion without chemical binders, creating ultra-dense fuel assets."
                            icon={Beaker}
                        />
                        <ProcessStep
                            index={5}
                            title="Ambient Cooling"
                            description="Controlled temperature reduction to structurally solidify the extruded pellets."
                            icon={ThermometerSnowflake}
                        />
                        <ProcessStep
                            index={6}
                            title="Sifting & Packaging"
                            description="Final quality-control screening to eliminate dust before institutional distribution."
                            icon={PackageCheck}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
