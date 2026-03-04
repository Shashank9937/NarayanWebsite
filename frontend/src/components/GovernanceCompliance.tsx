import React from 'react';
import { ShieldCheck, Award, FileText, CheckCircle } from 'lucide-react';

const CertificationCard = ({ title, body }: { title: string, body: string }) => (
    <div className="p-6 rounded-2xl border border-brand-border bg-white hover:border-brand-accent/30 hover:shadow-md transition-all duration-300">
        <Award className="w-8 h-8 text-brand-accent mb-4" />
        <h4 className="font-bold text-sm uppercase tracking-widest mb-2 text-brand-primary">{title}</h4>
        <p className="text-sm text-gray-600 leading-relaxed font-medium">{body}</p>
    </div>
);

export default function GovernanceCompliance() {
    return (
        <section id="governance" className="py-24 px-6 bg-brand-background border-t border-brand-border/50">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <span className="text-brand-accent text-sm font-bold uppercase tracking-widest block mb-4">Governance & Standards</span>
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight text-brand-primary">Exceeding Regulatory Benchmarks.</h2>
                        <p className="text-lg text-gray-600 mb-10 leading-relaxed font-medium">
                            Narayan Enterprises operates with an institutional commitment to safety, quality, and environmental compliance. Our processes are audited regularly to ensure alignment with international standards.
                        </p>

                        <ul className="space-y-4 mb-10">
                            {[
                                "Strict adherence to CPCB/SPCB emission norms.",
                                "ZLD (Zero Liquid Discharge) certified manufacturing hubs.",
                                "Ethical sourcing policies supporting regional farming communities.",
                                "Annual ESG reporting based on global GRI standards."
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-gray-600 font-medium">
                                    <CheckCircle className="w-5 h-5 text-brand-accent shrink-0" />
                                    <span className="pt-0.5 leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <button className="flex items-center justify-center gap-3 px-8 py-4 rounded-lg border-2 border-brand-border text-sm font-bold uppercase tracking-widest hover:border-brand-accent/50 hover:bg-brand-surface hover:text-brand-accent transition-all text-brand-primary bg-white shadow-sm">
                            <FileText className="w-4 h-4" />
                            Download ESG Report 2024
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <CertificationCard title="ISO 9001:2015" body="Certified Quality Management System for biomass production and distribution." />
                        <CertificationCard title="ISO 14001:2015" body="Environmental management standards for sustainable industrial operations." />
                        <CertificationCard title="Pollution Control" body="Fully compliant with state pollution control board (SPCB) approvals." />
                        <CertificationCard title="Safety Standard" body="OSHA aligned workplace safety protocols across all manufacturing units." />
                    </div>
                </div>
            </div>
        </section>
    );
}

