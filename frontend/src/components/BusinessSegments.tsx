"use client";

import React, { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SpecItem = ({ label, value }: { label: string, value: string }) => (
    <div className="flex justify-between py-3 border-b border-brand-border last:border-0">
        <span className="text-gray-600 text-sm font-medium">{label}</span>
        <span className="font-bold text-sm text-brand-primary">{value}</span>
    </div>
);

export default function BusinessSegments() {
    const [selectedProduct, setSelectedProduct] = useState<any | null>(null);

    const products = [
        {
            title: "Biomass Pellets",
            tagline: "High-density thermal infrastructure",
            description: "High-density thermal infrastructure designed for continuous-run Tier-1 industrial boilers and power generation plants.",
            image: "https://images.unsplash.com/photo-1582216518778-be7213baf931?q=80&w=800",
            specs: [
                { label: "Calorific Index", value: "4600+ kcal/kg" },
                { label: "Moisture Profile", value: "< 7.5%" },
                { label: "Ash Threshold", value: "Ultra-Low (<2%)" },
                { label: "Venture Class", value: "A+ Grade" }
            ]
        },
        {
            title: "Press Mesh Pallets",
            tagline: "Engineered for thermal consistency",
            description: "Engineered press-mesh fuel segments for strategic manufacturing sectors requiring extreme thermal consistency.",
            image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=800",
            specs: [
                { label: "Thermal Rating", value: "High-Stability" },
                { label: "Process Control", value: "Automated" },
                { label: "Ash Profile", value: "Industrial (<5%)" },
                { label: "Capacity", value: "12,000 MT/Mo" }
            ]
        },
        {
            title: "Briquettes",
            tagline: "Large-format energy assets",
            description: "Large-format energy assets for high-torque industrial kilns and massive thermal-processing communities.",
            image: "https://images.unsplash.com/photo-1620608518882-628d70bde68e?q=80&w=800",
            specs: [
                { label: "Diameter Class", value: "90mm Nexus" },
                { label: "Burn Duration", value: "Extended" },
                { label: "Smoke Profile", value: "Zero-Visible" },
                { label: "Supply Tier", value: "Enterprise" }
            ]
        }
    ];

    return (
        <section id="solutions" className="py-24 px-6 relative bg-brand-background">
            <div className="max-w-7xl mx-auto">

                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <span className="text-brand-accent text-sm font-bold uppercase tracking-widest block mb-4">Our Core Products</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-brand-primary">Engineered Biomass Fuel</h2>
                    <p className="text-lg text-gray-600 leading-relaxed font-medium">
                        Discover our suite of high-performance biomass fuels designed for industrial-scale thermal power.
                        Engineered for zero-compromise sustainability and maximum output.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {products.map((product, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -8 }}
                            className="glass-panel overflow-hidden cursor-pointer group flex flex-col h-full bg-white transition-all duration-300 border-transparent hover:border-brand-accent/30 shadow-lg"
                            onClick={() => setSelectedProduct(product)}
                        >
                            <div className="h-56 overflow-hidden relative">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 via-brand-primary/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                            </div>
                            <div className="p-8 flex-1 flex flex-col bg-white">
                                <h3 className="text-2xl font-bold tracking-tight mb-3 text-brand-primary">{product.title}</h3>
                                <p className="text-gray-600 text-sm font-medium mb-8 flex-1 leading-relaxed">{product.tagline}</p>
                                <div className="flex items-center gap-2 text-sm font-bold text-brand-accent group-hover:text-green-700 transition-colors">
                                    <span>View Technical Specs</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Technical Specs Modal */}
            <AnimatePresence>
                {selectedProduct && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-brand-primary/40 backdrop-blur-sm"
                        onClick={() => setSelectedProduct(null)}
                    >
                        <motion.div
                            initial={{ y: 50, opacity: 0, scale: 0.95 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            exit={{ y: 20, opacity: 0, scale: 0.95 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative border border-brand-border"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedProduct(null)}
                                className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full bg-black/5 hover:bg-black/10 text-gray-600 hover:text-black transition-colors z-10"
                            >
                                <X className="w-4 h-4" />
                            </button>

                            <div className="h-48 relative">
                                <img
                                    src={selectedProduct.image}
                                    alt={selectedProduct.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />
                            </div>

                            <div className="px-8 pb-10 -mt-10 relative z-10">
                                <div className="inline-block px-4 py-1.5 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-bold tracking-wide mb-4">
                                    Technical Data Sheet
                                </div>
                                <h3 className="text-3xl font-extrabold tracking-tight mb-4 text-brand-primary">{selectedProduct.title}</h3>
                                <p className="text-gray-600 mb-8 font-medium leading-relaxed">
                                    {selectedProduct.description}
                                </p>

                                <div className="bg-brand-background border border-brand-border rounded-xl p-6">
                                    <h4 className="text-sm font-bold text-brand-primary tracking-widest uppercase mb-4">Specifications</h4>
                                    <div className="space-y-1">
                                        {selectedProduct.specs.map((spec: any, i: number) => (
                                            <SpecItem key={i} {...spec} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

