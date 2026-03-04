"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Factory, LayoutGrid, Cpu, Package, Zap, ChevronRight, CheckCircle2,
  Leaf, Flame, Sprout, Cog, ShieldCheck, AreaChart, CircleUserRound
} from 'lucide-react';
import axios from 'axios';

// Framer motion variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function LandingPage() {
  const { scrollY } = useScroll();
  const navOpacity = useTransform(scrollY, [0, 50], [0, 1]);
  const navBlur = useTransform(scrollY, [0, 50], ["blur(0px)", "blur(16px)"]);
  const navBackground = useTransform(scrollY, [0, 50], ["rgba(255,255,255,0)", "rgba(255,255,255,0.85)"]);

  // Smooth Parallax for Hero Image
  const heroY = useTransform(scrollY, [0, 1000], ["0%", "30%"]);

  // Dynamic State
  const [homepageText, setHomepageText] = useState({
    heroHeadline: 'Clean Industrial Energy with Biomass Fuel',
    heroDescription: 'Replacing traditional fossil fuels with sustainable, high-efficiency biomass pellets and briquettes.',
    stats: [
      { label: 'Tons Supplied', value: '5000+' },
      { label: 'Industrial Clients', value: '120+' },
      { label: 'Power Plants Served', value: '15' }
    ]
  });

  const [products, setProducts] = useState([
    { title: 'Biomass Pellets', shortDescription: 'Dense, sustainable fuel for modern high-efficiency industrial burners and stoves.', imageUrl: 'https://images.unsplash.com/photo-1582216518778-be7213baf931?w=800' },
    { title: 'Industrial Briquettes', shortDescription: '90mm wide power briquettes crafted for massive stream boilers.', imageUrl: 'https://images.unsplash.com/photo-1620608518882-628d70bde68e?w=800' },
    { title: 'Press Mesh Pallets', shortDescription: 'Eco-friendly sustainable palleting solutions for factory floors.', imageUrl: 'https://images.unsplash.com/photo-1505027492977-1037f14c46fa?w=800' }
  ]);

  const [inquiryData, setInquiryData] = useState({ name: '', company: '', email: '', phone: '', requirement: '' });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useEffect(() => {
    // Fetch CMS managed content and products
    const fetchData = async () => {
      try {
        const [contentRes, prodRes] = await Promise.all([
          axios.get('http://localhost:5000/api/content/homepage').catch(() => null),
          axios.get('http://localhost:5000/api/products').catch(() => null)
        ]);

        if (contentRes && contentRes.data) {
          setHomepageText(contentRes.data);
        }
        if (prodRes && prodRes.data && prodRes.data.length > 0) {
          setProducts(prodRes.data);
        }
      } catch (err) {
        console.log("Using default fallback content.", err);
      }
    };
    fetchData();
  }, []);

  const handleInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('loading');
    try {
      await axios.post('http://localhost:5000/api/inquiries', inquiryData);
      setSubmitStatus('success');
      setInquiryData({ name: '', company: '', email: '', phone: '', requirement: '' });
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  return (
    <div className="bg-[#FFFFFF] text-gray-900 w-full overflow-hidden">

      {/* 0. NAVBAR */}
      <motion.nav
        style={{ backgroundColor: navBackground, backdropFilter: navBlur }}
        className="fixed w-full z-50 transition-all border-b border-transparent"
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-green-500/30">
              <Leaf size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900 ml-1">Narayan</span>
          </div>

          <div className="hidden md:flex items-center gap-8 font-medium text-sm text-gray-600">
            <a href="#products" className="hover:text-black transition-colors">Products</a>
            <a href="#industries" className="hover:text-black transition-colors">Industries</a>
            <a href="#process" className="hover:text-black transition-colors">Process</a>
            <a href="#why-biomass" className="hover:text-black transition-colors">Why Biomass</a>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/admin/login" className="hidden md:flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors">
              <CircleUserRound size={18} />
              <span>Partners</span>
            </Link>
            <a href="#contact" className="bg-gray-900 hover:bg-gray-800 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-xl hover:shadow-gray-900/20 active:scale-95">
              Request Quote
            </a>
          </div>
        </div>
      </motion.nav>

      {/* 1. HERO SECTION */}
      <header className="relative w-full h-[90vh] min-h-[700px] flex items-center pt-20 overflow-hidden bg-gray-50">
        <motion.div style={{ y: heroY }} className="absolute inset-0 w-full h-full z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent z-10" />
          <img
            src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2500&auto=format&fit=crop"
            alt="Clean Industrial Plant"
            className="w-full h-full object-cover object-right"
          />
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 z-10 w-full">
          <motion.div
            initial="hidden" animate="visible" variants={staggerContainer as any}
            className="max-w-2xl"
          >
            <motion.div variants={fadeInUp as any} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-100/80 border border-green-200 text-green-700 text-xs font-bold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Leading Industrial Energy Solutions
            </motion.div>

            <motion.h1
              variants={fadeInUp as any}
              className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 leading-[1.1] mb-6"
            >
              {homepageText.heroHeadline.split('Biomass Fuel').map((chunk, i, arr) => (
                <span key={i}>
                  {chunk}
                  {i !== arr.length - 1 && <span className="text-green-500 block sm:inline">Biomass Fuel.</span>}
                </span>
              ))}
            </motion.h1>

            <motion.p variants={fadeInUp as any} className="text-lg text-gray-600 mb-10 max-w-xl leading-relaxed">
              {homepageText.heroDescription}
            </motion.p>

            <motion.div variants={fadeInUp as any} className="flex flex-wrap items-center gap-4">
              <a href="#contact" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-base font-semibold transition-all hover:shadow-xl hover:shadow-green-500/30 flex items-center gap-2 group">
                Explore Products
                <ChevronRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </a>
              <a href="#process" className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 px-8 py-4 rounded-full text-base font-semibold transition-all hover:shadow-lg flex items-center gap-2">
                How it works
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Stats Bar */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="absolute bottom-0 w-full border-t border-gray-200 bg-white/80 backdrop-blur-xl z-20"
        >
          <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-3 gap-8 divide-x divide-gray-200">
            {homepageText.stats.map((stat, i) => (
              <div key={i} className="pl-6 first:pl-0 flex flex-col justify-center">
                <span className="text-3xl font-extrabold text-gray-900">{stat.value}</span>
                <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </header>

      {/* 2. PRODUCTS SECTION */}
      <section id="products" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">Premium Bio-Products</h2>
              <p className="text-gray-600 text-lg">We manufacture high-density sustainable fuels designed for immense thermal output.</p>
            </div>
            <a href="#contact" className="mt-6 md:mt-0 text-green-600 font-semibold flex items-center gap-1 hover:gap-2 transition-all">
              View technical specs <ChevronRight size={18} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((prod, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } } } as any}
                className="group rounded-3xl overflow-hidden border border-gray-100 bg-white hover:shadow-2xl hover:shadow-gray-900/5 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-transparent transition-colors z-10" />
                  <img src={prod.imageUrl} alt={prod.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{prod.title}</h3>
                  <p className="text-gray-500 mb-6 line-clamp-2">{prod.shortDescription}</p>
                  <button className="text-gray-900 font-semibold text-sm flex items-center gap-2 group-hover:text-green-600 transition-colors">
                    Request sample <ChevronRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INDUSTRIES WE SERVE */}
      <section id="industries" className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">Industries Generating Impact</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-16">Our bio-fuels power a diverse range of large-scale industrial operations across the nation.</p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Factory, label: 'Brick Kilns', desc: 'Sustained severe heat' },
              { icon: Zap, label: 'Power Plants', desc: 'Large scale electricity' },
              { icon: Flame, label: 'Industrial Boilers', desc: 'Consistent steam gen' },
              { icon: Cpu, label: 'Manufacturing Units', desc: 'Process heat supply' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1, transition: { delay: i * 0.1 } } } as any}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:border-green-200 hover:shadow-xl hover:shadow-green-500/5 transition-all group flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-gray-50 group-hover:bg-green-50 flex items-center justify-center text-gray-400 group-hover:text-green-500 transition-colors mb-6">
                  <item.icon size={32} strokeWidth={1.5} />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{item.label}</h4>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROCESS SECTION (Visual Infographic) */}
      <section id="process" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">How It's Made</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">From agricultural surplus to highly efficient thermal energy.</p>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-green-100 via-green-400 to-green-100 -translate-y-1/2 z-0 opacity-50" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
              {[
                { step: '01', title: 'Agri-Waste', desc: 'Collection of surplus biomass residue.', icon: Sprout },
                { step: '02', title: 'Processing', desc: 'Advanced filtration and thermal drying.', icon: Cog },
                { step: '03', title: 'Pelletization', desc: 'Extreme compression without binders.', icon: Package },
                { step: '04', title: 'Industrial Fuel', desc: 'Packaged and dispatched to heavy industry.', icon: ShieldCheck }
              ].map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2 }} viewport={{ once: true }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-24 h-24 rounded-full bg-white border-4 border-gray-50 flex items-center justify-center shadow-xl shadow-gray-200/50 mb-6 group-hover:border-green-400 transition-colors">
                    <s.icon size={36} className="text-gray-800" strokeWidth={1.5} />
                  </div>
                  <span className="text-green-500 font-bold text-sm tracking-widest mb-2 px-3 py-1 bg-green-50 rounded-full">STEP {s.step}</span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-sm max-w-[200px]">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY BIOMASS (Comparison) */}
      <section id="why-biomass" className="py-24 bg-[#111827] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold tracking-tight mb-6">Coal <span className="text-gray-500">vs</span> Biomass</h2>
              <p className="text-gray-400 text-lg mb-8">Modern industrial infrastructure demands performance without the devastating environmental footprint of traditional fossil fuels. The numbers speak for themselves.</p>

              <ul className="space-y-6">
                {[
                  { title: 'Zero Net Emissions', desc: 'Burns carbon exactly absorbed during plant growth.', icon: Leaf, highlight: true },
                  { title: 'Drastically Lower Ash', desc: '< 5% ash content reduces boiler maintenance costs massively.', icon: ShieldCheck, highlight: false },
                  { title: 'Cost Predictability', desc: 'Immune to volatile international coal and gas pricing.', icon: AreaChart, highlight: false }
                ].map((b, i) => (
                  <li key={i} className={`flex gap-4 p-4 rounded-2xl border ${b.highlight ? 'bg-white/5 border-green-500/30' : 'border-transparent'}`}>
                    <div className={`mt-1 ${b.highlight ? 'text-green-400' : 'text-gray-500'}`}>
                      <b.icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">{b.title}</h4>
                      <p className="text-sm text-gray-400">{b.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">
              <h3 className="text-xl font-bold mb-8 text-center">Efficiency Cost Matrix</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2"><span className="text-gray-400">Coal Emission Index</span> <span className="font-mono text-red-400">100%</span></div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-red-400 w-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2"><span className="text-gray-400">Biomass Emission Index</span> <span className="font-mono text-green-400">~15%</span></div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-green-400 w-[15%]"></div>
                  </div>
                </div>
                <div className="pt-8 border-t border-white/10">
                  <div className="flex justify-between text-sm mb-2"><span className="text-gray-400">Thermal Output (Coal)</span> <span className="font-mono text-white">Baseline</span></div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-gray-500 w-[80%]"></div></div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2"><span className="text-gray-400">Thermal Output (Pellets)</span> <span className="font-mono text-white">Equivalent</span></div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-blue-400 w-[85%]"></div></div>
                </div>
                <p className="text-xs text-center text-gray-500 mt-6">* Metric estimates based on standard boiler adaptations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CONTACT / LEAD FORM */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">Partner With Us</h2>
            <p className="text-gray-600">Get a specialized quote for your industrial fuel requirements.</p>
          </div>

          <form onSubmit={handleInquirySubmit} className="bg-white p-8 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Full Name</label>
                <input required type="text" value={inquiryData.name} onChange={e => setInquiryData({ ...inquiryData, name: e.target.value })} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Company Name</label>
                <input required type="text" value={inquiryData.company} onChange={e => setInquiryData({ ...inquiryData, company: e.target.value })} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all" placeholder="Acme Inc." />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Email Address</label>
                <input required type="email" value={inquiryData.email} onChange={e => setInquiryData({ ...inquiryData, email: e.target.value })} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all" placeholder="john@company.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Phone</label>
                <input required type="text" value={inquiryData.phone} onChange={e => setInquiryData({ ...inquiryData, phone: e.target.value })} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all" placeholder="+91 99999 99999" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Fuel Requirement (Tons/Month)</label>
              <textarea required value={inquiryData.requirement} onChange={e => setInquiryData({ ...inquiryData, requirement: e.target.value })} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all" placeholder="Please describe your monthly requirements and boiler specs..."></textarea>
            </div>

            <button disabled={submitStatus === 'loading'} className="w-full bg-gray-900 hover:bg-gray-800 text-white font-bold text-lg py-4 rounded-xl shadow-xl shadow-gray-900/20 transition-all active:scale-95 flex justify-center items-center gap-2">
              {submitStatus === 'loading' ? 'Submitting...' : submitStatus === 'success' ? 'Request Received!' : 'Request Specialized Quote'}
              {submitStatus === 'success' && <CheckCircle2 size={20} className="text-green-400" />}
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111827] border-t border-white/10 pt-16 pb-8 text-center text-sm text-gray-500">
        <div className="w-12 h-12 bg-white/5 rounded-2xl mx-auto flex items-center justify-center text-white mb-6">
          <Leaf size={24} />
        </div>
        <p className="font-semibold text-gray-300 tracking-wider uppercase mb-2">Narayan Enterprises</p>
        <p className="mb-8">Powering the future of green manufacturing.</p>
        <div className="flex justify-center gap-6 mb-8 text-gray-400">
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">Contact API</a>
        </div>
        <p>© 2026 Narayan Enterprises. Built with Next.js</p>
      </footer>
    </div>
  );
}
