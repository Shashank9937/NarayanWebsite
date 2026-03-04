"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { AreaChart, Eye, Package, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Dashboard() {
    const [stats, setStats] = useState({ inquiries: 0, products: 0, contentStatus: 'Active' });

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const token = Cookies.get('admin_token');
                const conf = { headers: { Authorization: `Bearer ${token}` } };
                const [inq, prod] = await Promise.all([
                    axios.get('http://localhost:5000/api/inquiries', conf),
                    axios.get('http://localhost:5000/api/products', conf) // Wait, getting products doesn't require auth on GET typically, but we use same auth
                ]);
                setStats({ inquiries: inq.data.length, products: prod.data.length, contentStatus: 'Synced' });
            } catch (err) {
                console.error("Failed to load CMS stats");
            }
        };
        fetchStats();
    }, []);

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Overview Dashboard</h1>
            <p className="text-gray-500">Welcome to Narayan Enterprises CMS. Use the sidebar to manage content blocks.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4 hover:shadow-md transition">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-xl"><AreaChart size={24} /></div>
                    <div>
                        <p className="text-sm font-bold text-gray-400 tracking-wider uppercase">Lead Inquiries</p>
                        <h2 className="text-3xl font-extrabold text-gray-900 mt-1">{stats.inquiries}</h2>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4 hover:shadow-md transition">
                    <div className="p-3 bg-purple-50 text-purple-600 rounded-xl"><Package size={24} /></div>
                    <div>
                        <p className="text-sm font-bold text-gray-400 tracking-wider uppercase">Active Products</p>
                        <h2 className="text-3xl font-extrabold text-gray-900 mt-1">{stats.products}</h2>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4 hover:shadow-md transition">
                    <div className="p-3 bg-green-50 text-green-600 rounded-xl"><ShieldCheck size={24} /></div>
                    <div>
                        <p className="text-sm font-bold text-gray-400 tracking-wider uppercase">CMS Integrity</p>
                        <h2 className="text-3xl font-extrabold text-gray-900 mt-1">{stats.contentStatus}</h2>
                    </div>
                </div>
            </div>

            <div className="bg-white border flex flex-col items-center justify-center border-gray-100 rounded-3xl h-64 shadow-sm mt-8 border-dashed">
                <Eye size={48} className="text-gray-200 mb-4" />
                <p className="text-gray-500 font-medium">Select a module from the sidebar to begin editing.</p>
            </div>
        </motion.div>
    );
}
