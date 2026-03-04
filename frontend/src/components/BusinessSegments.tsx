"use client";

import React, { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SpecItem = ({ label, value }: { label: string, value: string }) => (
    <div className="flex justify-between py-3 border-b border-white/5">
        <span className="text-gray-400 text-sm">{label}</span>
        <span className="font-medium text-sm text-white">{value}</span>
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
        <section id="solutions" className="py-32 px-6 relative bg-[#000000]">
            <div className="max-w-6xl mx-auto">

                <div className="mb-20 text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Our Core Products</h2>
                    <p className="text-lg text-gray-400 leading-relaxed font-light">
                        Discover our suite of high-performance biomass fuels designed for industrial-scale thermal power.
                        Engineered for zero-compromise sustainability and maximum output.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {products.map((product, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -8 }}
                            className="glass-panel overflow-hidden cursor-pointer group flex flex-col h-full bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-300"
                            onClick={() => setSelectedProduct(product)}
                        >
                            <div className="h-64 overflow-hidden relative">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                            </div>
                            <div className="p-8 flex-1 flex flex-col">
                                <h3 className="text-2xl font-bold tracking-tight mb-2">{product.title}</h3>
                                <p className="text-gray-400 text-sm font-light mb-8 flex-1">{product.tagline}</p>
                                <div className="flex items-center gap-2 text-sm font-medium text-blue-400 group-hover:text-blue-300 transition-colors">
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
                        className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
                        onClick={() => setSelectedProduct(null)}
                    >
                        <motion.div
                            initial={{ y: 50, opacity: 0, scale: 0.95 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            exit={{ y: 20, opacity: 0, scale: 0.95 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="bg-[#111] border border-white/10 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedProduct(null)}
                                className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors z-10"
                            >
                                <X className="w-4 h-4" />
                            </button>

                            <div className="h-48 relative">
                                <img
                                    src={selectedProduct.image}
                                    alt={selectedProduct.title}
                                    className="w-full h-full object-cover opacity-60"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent" />
                            </div>

                            <div className="px-8 pb-10 -mt-10 relative z-10">
                                <div className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-medium tracking-wide mb-4 border border-blue-500/20">
                                    Technical Data Sheet
                                </div>
                                <h3 className="text-3xl font-bold tracking-tight mb-4">{selectedProduct.title}</h3>
                                <p className="text-gray-400 mb-8 font-light leading-relaxed">
                                    {selectedProduct.description}
                                </p>

                                <div className="bg-black/50 border border-white/5 rounded-xl p-6">
                                    <h4 className="text-sm font-semibold text-white tracking-widest uppercase mb-4">Specifications</h4>
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

