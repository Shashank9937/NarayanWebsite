"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Cookies from 'js-cookie';
import { motion } from 'framer-motion';
import { ShieldAlert, Loader2 } from 'lucide-react';

export default function AdminLogin() {
    const router = useRouter();
    const [email, setEmail] = useState('admin@narayan.com');
    const [password, setPassword] = useState('admin123');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
            if (res.data.token) {
                Cookies.set('admin_token', res.data.token, { expires: 1 }); // 1 day
                router.push('/admin/dashboard');
            }
        } catch (err: any) {
            setError(err.response?.data?.message || 'Login failed');
            setLoading(false);
        }
    };

    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-sm bg-white rounded-3xl shadow-xl shadow-gray-200/50 p-8 border border-gray-100">
            <div className="text-center mb-10">
                <div className="w-16 h-16 bg-gray-50 rounded-2xl mx-auto flex items-center justify-center text-gray-900 border border-gray-100 mb-6 shadow-sm">
                    <ShieldAlert size={32} strokeWidth={1.5} />
                </div>
                <h1 className="text-2xl font-bold tracking-tight text-gray-900">Sign in to CMS</h1>
                <p className="text-gray-500 text-sm mt-2">Manage content and operations.</p>
            </div>

            {error && (
                <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-100 text-red-600 text-sm font-semibold flex justify-center text-center">
                    {error}
                </div>
            )}

            <form onSubmit={handleLogin} className="space-y-5">
                <div>
                    <label className="text-xs font-bold text-gray-500 tracking-wider uppercase mb-2 block">Admin Email</label>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} required className="w-full h-12 px-4 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all text-sm font-medium" />
                </div>
                <div>
                    <label className="text-xs font-bold text-gray-500 tracking-wider uppercase mb-2 block">Secure Password</label>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} required className="w-full h-12 px-4 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all text-sm font-medium" />
                </div>

                <button type="submit" disabled={loading} className="w-full h-12 bg-gray-900 hover:bg-gray-800 text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-colors mt-8 shadow-md disabled:bg-gray-300">
                    {loading ? <Loader2 className="animate-spin" size={18} /> : 'Authenticate Session'}
                </button>
            </form>
        </motion.div>
    );
}
