"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PremiumLoader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.8, ease: "circIn" } }}
                    className="fixed inset-0 z-[9999] bg-brand-charcoal flex items-center justify-center flex-col"
                >
                    <div className="relative mb-8">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="w-24 h-24 bg-brand-green flex items-center justify-center font-bold text-5xl text-white rounded-sm shadow-[0_0_50px_rgba(10,61,40,0.5)]"
                        >
                            N
                        </motion.div>
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                            className="absolute -inset-4 border-2 border-brand-green/20 border-t-brand-green rounded-full"
                        />
                    </div>

                    <div className="overflow-hidden">
                        <motion.div
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                            className="text-white text-xs font-bold uppercase tracking-[0.4em] text-center"
                        >
                            Narayan Enterprises
                        </motion.div>
                    </div>

                    <div className="mt-4 w-48 h-[1px] bg-white/5 relative overflow-hidden">
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: "100%" }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                            className="absolute inset-0 bg-brand-green shadow-[0_0_10px_#0A3D28]"
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
