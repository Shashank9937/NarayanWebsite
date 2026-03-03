import React from 'react';
import { Linkedin, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-brand-charcoal border-t border-white/5 pt-24 pb-12 px-12">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
                    <div className="col-span-1 lg:col-span-2">
                        <div className="flex items-center gap-2 mb-8">
                            <div className="w-8 h-8 bg-brand-green rounded-sm flex items-center justify-center font-bold text-white">N</div>
                            <span className="text-2xl font-bold tracking-tighter uppercase">Narayan <span className="text-brand-green">Enterprises</span></span>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-sm mb-8">
                            The institutional leader in sustainable industrial energy infrastructure. Empowering India's core sectors through large-scale biomass innovation.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-brand-green transition-colors">
                                <Linkedin className="w-4 h-4" />
                            </a>
                            <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-brand-green transition-colors">
                                <Mail className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-8">Corporate</h4>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li><a href="#" className="hover:text-brand-green transition-colors">Board of Directors</a></li>
                            <li><a href="#" className="hover:text-brand-green transition-colors">Vision 2030</a></li>
                            <li><a href="#" className="hover:text-brand-green transition-colors">ESG Reporting</a></li>
                            <li><a href="#" className="hover:text-brand-green transition-colors">Investor Relations</a></li>
                            <li><a href="#" className="hover:text-brand-green transition-colors flex items-center gap-2">Careers <ExternalLink className="w-3 h-3" /></a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-8">Operational HQ</h4>
                        <div className="space-y-6 text-sm text-gray-500">
                            <div className="flex gap-4">
                                <MapPin className="w-5 h-5 text-brand-green shrink-0" />
                                <span>Level 4, BKC, Mumbai,<br />Maharashtra 400051</span>
                            </div>
                            <div className="flex gap-4">
                                <Phone className="w-5 h-5 text-brand-green shrink-0" />
                                <span>+91 (22) 4500 8900</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-[10px] uppercase font-bold tracking-widest text-gray-600">
                        © {currentYear} Narayan Enterprises Limited. All Rights Reserved.
                    </div>
                    <div className="flex gap-8 text-[10px] uppercase font-bold tracking-widest text-gray-600">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Governance</a>
                        <a href="#" className="hover:text-white transition-colors">Compliance</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
