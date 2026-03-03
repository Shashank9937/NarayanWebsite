"use client";

import React, { useState } from 'react';
import { Send, Loader2, CheckCircle2 } from 'lucide-react';

export default function EnterpriseInquiry() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        organizationName: '',
        procurementHead: '',
        email: '',
        phone: '',
        monthlyRequirement: '',
        fuelType: 'Biomass Pellets',
        location: '',
        message: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('http://localhost:5000/api/inquiries', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                setFormData({
                    organizationName: '',
                    procurementHead: '',
                    email: '',
                    phone: '',
                    monthlyRequirement: '',
                    fuelType: 'Biomass Pellets',
                    location: '',
                    message: ''
                });
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="py-32 px-12 bg-zinc-900/50">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                    <div>
                        <span className="text-brand-green text-xs font-bold uppercase tracking-widest block mb-6">Partnership Inquiry</span>
                        <h2 className="text-5xl font-bold mb-8 tracking-tight">Request Industrial Quote.</h2>
                        <p className="text-lg text-gray-400 mb-12 leading-relaxed">
                            Our procurement team handles large-scale industrial requirements across India. Please provide your organizational details for a tailored technical proposal and volume pricing.
                        </p>

                        <div className="space-y-8">
                            <div className="bg-black/20 p-8 border border-white/5 transition-all">
                                <h4 className="font-bold text-sm uppercase tracking-widest mb-4">Strategic Sourcing Office</h4>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    Narayan House, Level 4,<br />
                                    Bandra-Kurla Complex (BKC),<br />
                                    Mumbai, Maharashtra – 400051
                                </p>
                            </div>
                            <div className="bg-black/20 p-8 border border-white/5 transition-all">
                                <h4 className="font-bold text-sm uppercase tracking-widest mb-4">Direct Procurement Line</h4>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    +91 (22) 4500 8900<br />
                                    procurement@narayanenterprises.com
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="glass-morphism p-10 border border-white/5">
                        {status === 'success' ? (
                            <div className="h-full flex flex-col items-center justify-center text-center py-20">
                                <CheckCircle2 className="w-16 h-16 text-brand-green mb-6" />
                                <h3 className="text-2xl font-bold mb-4">Inquiry Received</h3>
                                <p className="text-gray-400 text-sm">Our Industrial Sales Head will contact your organization within 24 business hours.</p>
                                <button
                                    onClick={() => setStatus('idle')}
                                    className="mt-8 text-brand-green text-xs font-bold uppercase tracking-widest hover:underline"
                                >
                                    Submit Another Inquiry
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-[10px] uppercase font-bold tracking-widest text-gray-500 mb-2">Organization Name</label>
                                        <input
                                            required
                                            name="organizationName"
                                            value={formData.organizationName}
                                            onChange={handleChange}
                                            className="w-full bg-black/40 border border-white/10 p-4 text-sm focus:border-brand-green outline-none transition-colors"
                                            placeholder="e.g. Tata Power Ltd."
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] uppercase font-bold tracking-widest text-gray-500 mb-2">Procurement Head</label>
                                        <input
                                            required
                                            name="procurementHead"
                                            value={formData.procurementHead}
                                            onChange={handleChange}
                                            className="w-full bg-black/40 border border-white/10 p-4 text-sm focus:border-brand-green outline-none transition-colors"
                                            placeholder="Name / Title"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-[10px] uppercase font-bold tracking-widest text-gray-500 mb-2">Work Email</label>
                                        <input
                                            required
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full bg-black/40 border border-white/10 p-4 text-sm focus:border-brand-green outline-none transition-colors"
                                            placeholder="corporate@domain.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] uppercase font-bold tracking-widest text-gray-500 mb-2">Contact Number</label>
                                        <input
                                            required
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full bg-black/40 border border-white/10 p-4 text-sm focus:border-brand-green outline-none transition-colors"
                                            placeholder="+91 ...."
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-[10px] uppercase font-bold tracking-widest text-gray-500 mb-2">Monthly Req. (Tons)</label>
                                        <input
                                            required
                                            name="monthlyRequirement"
                                            value={formData.monthlyRequirement}
                                            onChange={handleChange}
                                            className="w-full bg-black/40 border border-white/10 p-4 text-sm focus:border-brand-green outline-none transition-colors"
                                            placeholder="e.g. 5,000+"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] uppercase font-bold tracking-widest text-gray-500 mb-2">Industrial Location</label>
                                        <input
                                            required
                                            name="location"
                                            value={formData.location}
                                            onChange={handleChange}
                                            className="w-full bg-black/40 border border-white/10 p-4 text-sm focus:border-brand-green outline-none transition-colors"
                                            placeholder="City, State"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-[10px] uppercase font-bold tracking-widest text-gray-500 mb-2">Technical Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className="w-full bg-black/40 border border-white/10 p-4 text-sm focus:border-brand-green outline-none transition-colors"
                                        placeholder="Describe your boiler/turbine specifications or supply timelines..."
                                    />
                                </div>

                                <button
                                    disabled={status === 'loading'}
                                    className="w-full bg-brand-green text-white py-5 text-sm font-bold uppercase tracking-widest hover:bg-brand-accent transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                                >
                                    {status === 'loading' ? (
                                        <>
                                            <Loader2 className="w-4 h-4 animate-spin" />
                                            Processing Inquiry...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-4 h-4" />
                                            Submit Technical Inquiry
                                        </>
                                    )}
                                </button>
                                {status === 'error' && (
                                    <p className="text-red-500 text-[10px] uppercase font-bold tracking-widest text-center">
                                        Submission Error. Please contact support@narayanenterprises.com
                                    </p>
                                )}
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
