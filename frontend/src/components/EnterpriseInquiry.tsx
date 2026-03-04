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

    const inputClasses = "w-full bg-brand-surface border border-brand-border rounded-lg p-4 text-sm text-brand-primary focus:border-brand-accent focus:bg-white focus:ring-1 focus:ring-brand-accent outline-none transition-all duration-300 placeholder:text-gray-400 font-medium";

    return (
        <section id="contact" className="py-24 px-6 md:px-12 rounded-[2rem] bg-brand-background overflow-hidden relative border border-brand-border mx-4 md:mx-auto max-w-7xl mb-24 shadow-sm">
            {/* Subtle nature background */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent-light/5 blur-[150px] -translate-y-1/2 pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <div>
                        <span className="text-brand-accent text-sm font-bold uppercase tracking-widest block mb-4">Partnership Inquiry</span>
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-brand-primary">Request Industrial Quote.</h2>
                        <p className="text-lg text-gray-600 mb-12 leading-relaxed font-medium">
                            Our procurement team handles large-scale industrial requirements across India. Please provide your organizational details for a tailored technical proposal and volume pricing.
                        </p>

                        <div className="space-y-6">
                            <div className="glass-panel p-8 rounded-2xl bg-white border border-brand-border shadow-sm hover:border-brand-accent/30 transition-colors">
                                <h4 className="font-bold text-base tracking-wide text-brand-primary mb-3">Strategic Sourcing Office</h4>
                                <p className="text-gray-600 text-sm leading-relaxed font-medium">
                                    Narayan House, Level 4,<br />
                                    Bandra-Kurla Complex (BKC),<br />
                                    Mumbai, Maharashtra – 400051
                                </p>
                            </div>
                            <div className="glass-panel p-8 rounded-2xl bg-white border border-brand-border shadow-sm hover:border-brand-accent/30 transition-colors">
                                <h4 className="font-bold text-base tracking-wide text-brand-primary mb-3">Direct Procurement Line</h4>
                                <p className="text-gray-600 text-sm leading-relaxed font-medium">
                                    +91 (22) 4500 8900<br />
                                    procurement@narayanenterprises.com
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="glass-panel p-8 md:p-12 rounded-3xl border border-brand-border relative overflow-hidden bg-white shadow-xl">
                        {status === 'success' ? (
                            <div className="h-full flex flex-col items-center justify-center text-center py-20">
                                <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mb-6">
                                    <CheckCircle2 className="w-10 h-10 text-brand-accent" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 tracking-tight text-brand-primary">Inquiry Received</h3>
                                <p className="text-gray-600 text-sm leading-relaxed font-medium mb-8 max-w-sm">
                                    Our Industrial Sales Head will contact your organization within 24 business hours.
                                </p>
                                <button
                                    onClick={() => setStatus('idle')}
                                    className="text-brand-accent text-sm font-bold hover:text-green-700 transition-colors"
                                >
                                    Submit Another Inquiry
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-2">Organization Name</label>
                                        <input
                                            required
                                            name="organizationName"
                                            value={formData.organizationName}
                                            onChange={handleChange}
                                            className={inputClasses}
                                            placeholder="e.g. Tata Power Ltd."
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-2">Procurement Head</label>
                                        <input
                                            required
                                            name="procurementHead"
                                            value={formData.procurementHead}
                                            onChange={handleChange}
                                            className={inputClasses}
                                            placeholder="Name / Title"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-2">Work Email</label>
                                        <input
                                            required
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={inputClasses}
                                            placeholder="corporate@domain.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-2">Contact Number</label>
                                        <input
                                            required
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className={inputClasses}
                                            placeholder="+91 ...."
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-2">Monthly Req. (Tons)</label>
                                        <input
                                            required
                                            name="monthlyRequirement"
                                            value={formData.monthlyRequirement}
                                            onChange={handleChange}
                                            className={inputClasses}
                                            placeholder="e.g. 5,000+"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-2">Industrial Location</label>
                                        <input
                                            required
                                            name="location"
                                            value={formData.location}
                                            onChange={handleChange}
                                            className={inputClasses}
                                            placeholder="City, State"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-2">Technical Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className={`${inputClasses} resize-none`}
                                        placeholder="Describe your boiler/turbine specifications or supply timelines..."
                                    />
                                </div>

                                <div className="pt-2">
                                    <button
                                        disabled={status === 'loading'}
                                        className="w-full bg-brand-accent text-white rounded-lg py-4 text-sm font-bold uppercase tracking-widest hover:bg-green-700 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_4px_14px_0_rgba(46,125,50,0.39)] hover:shadow-[0_6px_20px_rgba(46,125,50,0.23)]"
                                    >
                                        {status === 'loading' ? (
                                            <>
                                                <Loader2 className="w-4 h-4 animate-spin" />
                                                Processing...
                                            </>
                                        ) : (
                                            <>
                                                Submit Technical Inquiry
                                                <Send className="w-4 h-4 ml-2" />
                                            </>
                                        )}
                                    </button>
                                </div>
                                {status === 'error' && (
                                    <p className="text-red-500 text-xs font-bold text-center mt-4">
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

