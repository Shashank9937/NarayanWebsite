"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { motion } from 'framer-motion';
import { Mail, Phone, Building2 } from 'lucide-react';

export default function InquiriesManager() {
    const [inquiries, setInquiries] = useState([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        try {
            const token = Cookies.get('admin_token');
            const res = await axios.get('http://localhost:5000/api/inquiries', {
                headers: { Authorization: `Bearer ${token}` }
            });
            setInquiries(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    const updateStatus = async (id: string, status: string) => {
        try {
            const token = Cookies.get('admin_token');
            await axios.put(`http://localhost:5000/api/inquiries/${id}/status`, { status }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            loadData();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
            <div>
                <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Lead Inquiries</h1>
                <p className="text-gray-500 mt-2">Manage enterprise fuel supply requests directly submitted via the landing page.</p>
            </div>

            <div className="space-y-4">
                {inquiries.map((inq: any) => (
                    <div key={inq._id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between md:items-start gap-8 hover:shadow-md transition">
                        <div className="space-y-4 flex-1">
                            <div className="flex items-center gap-3">
                                <h3 className="text-xl font-bold text-gray-900">{inq.name}</h3>
                                <span className={`px-3 py-1 text-xs font-bold uppercase rounded-full tracking-widest ${inq.status === 'new' ? 'bg-blue-100 text-blue-700' : inq.status === 'contacted' ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-500'}`}>
                                    {inq.status}
                                </span>
                            </div>

                            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                                <span className="flex items-center gap-1.5"><Building2 size={16} className="text-gray-400" /> {inq.company}</span>
                                <span className="flex items-center gap-1.5"><Mail size={16} className="text-gray-400" /> {inq.email}</span>
                                <span className="flex items-center gap-1.5"><Phone size={16} className="text-gray-400" /> {inq.phone}</span>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-xl text-sm text-gray-700 border border-gray-100 font-medium">
                                "{inq.requirement}"
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 w-full md:w-48 shrink-0">
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Update State</label>
                            <select
                                value={inq.status}
                                onChange={(e) => updateStatus(inq._id, e.target.value)}
                                className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm font-semibold text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900"
                            >
                                <option value="new">New Lead</option>
                                <option value="contacted">Contacted / Working</option>
                                <option value="closed">Closed / Archived</option>
                            </select>
                        </div>
                    </div>
                ))}

                {inquiries.length === 0 && (
                    <div className="h-48 border border-dashed border-gray-200 rounded-2xl flex items-center justify-center text-gray-400 font-medium pb-2 bg-white">
                        Inbox zero. Tracking no incoming leads at the moment.
                    </div>
                )}
            </div>
        </motion.div>
    );
}
