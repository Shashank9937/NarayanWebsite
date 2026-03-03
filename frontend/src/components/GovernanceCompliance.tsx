import React from 'react';
import { ShieldCheck, Award, FileText, CheckCircle } from 'lucide-react';

const CertificationCard = ({ title, body }: { title: string, body: string }) => (
    <div className="p-6 border border-white/5 bg-zinc-900/50 hover:bg-brand-green/5 transition-colors">
        <Award className="w-8 h-8 text-brand-green mb-4" />
        <h4 className="font-bold text-sm uppercase tracking-widest mb-2">{title}</h4>
        <p className="text-xs text-gray-500 leading-relaxed">{body}</p>
    </div>
);

export default function GovernanceCompliance() {
    return (
        <section id="governance" className="py-32 px-12 industrial-grid">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div>
                        <span className="text-brand-green text-xs font-bold uppercase tracking-widest block mb-6">Governance & Standards</span>
                        <h2 className="text-5xl font-bold mb-8 tracking-tight">Exceeding Regulatory Benchmarks.</h2>
                        <p className="text-lg text-gray-400 mb-12 leading-relaxed">
                            Narayan Enterprises operates with an institutional commitment to safety, quality, and environmental compliance. Our processes are audited regularly to ensure alignment with international standards.
                        </p>

                        <ul className="space-y-4 mb-12">
                            {[
                                "Strict adherence to CPCB/SPCB emission norms.",
                                "ZLD (Zero Liquid Discharge) certified manufacturing hubs.",
                                "Ethical sourcing policies supporting regional farming communities.",
                                "Annual ESG reporting based on global GRI standards."
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm text-gray-400">
                                    <CheckCircle className="w-4 h-4 text-brand-green" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <button className="flex items-center gap-3 px-8 py-4 border border-white/10 text-xs font-bold uppercase tracking-widest hover:bg-white/5 transition-all">
                            <FileText className="w-4 h-4" />
                            Download ESG Report 2024
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
