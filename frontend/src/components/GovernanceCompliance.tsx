import React from 'react';
import { ShieldCheck, Award, FileText, CheckCircle } from 'lucide-react';

const CertificationCard = ({ title, body }: { title: string, body: string }) => (
    <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-300">
        <Award className="w-8 h-8 text-blue-400 mb-4" />
        <h4 className="font-bold text-sm uppercase tracking-widest mb-2 text-white">{title}</h4>
        <p className="text-sm text-gray-500 leading-relaxed font-light">{body}</p>
    </div>
);

export default function GovernanceCompliance() {
    return (
        <section id="governance" className="py-32 px-6 bg-[#000000]">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <span className="text-blue-500 text-xs font-bold uppercase tracking-widest block mb-6">Governance & Standards</span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Exceeding Regulatory Benchmarks.</h2>
                        <p className="text-lg text-gray-400 mb-10 leading-relaxed font-light">
                            Narayan Enterprises operates with an institutional commitment to safety, quality, and environmental compliance. Our processes are audited regularly to ensure alignment with international standards.
                        </p>

                        <ul className="space-y-4 mb-10">
                            {[
                                "Strict adherence to CPCB/SPCB emission norms.",
                                "ZLD (Zero Liquid Discharge) certified manufacturing hubs.",
                                "Ethical sourcing policies supporting regional farming communities.",
                                "Annual ESG reporting based on global GRI standards."
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                                    <CheckCircle className="w-5 h-5 text-blue-500 shrink-0" />
                                    <span className="pt-0.5 leading-relaxed font-light">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <button className="flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 text-sm font-semibold hover:bg-white/5 hover:border-white/20 transition-all text-white bg-white/5">
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

