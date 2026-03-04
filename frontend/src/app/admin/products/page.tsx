"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { motion } from 'framer-motion';
import { Plus, Edit2, Trash2 } from 'lucide-react';

export default function ProductsManager() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        const res = await axios.get('http://localhost:5000/api/products');
        setProducts(res.data);
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this product?')) return;
        const token = Cookies.get('admin_token');
        await axios.delete(`http://localhost:5000/api/products/${id}`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        loadData();
    };

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Products Strategy</h1>
                    <p className="text-gray-500 mt-2">Manage your bio-product listings dynamically.</p>
                </div>
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-xl flex items-center gap-2 transition-colors shadow-lg shadow-green-500/20">
                    <Plus size={20} /> Add Product
                </button>
            </div>

            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50 border-b border-gray-100 text-xs font-bold text-gray-400 uppercase tracking-wider">
                            <th className="p-6">Thumbnail</th>
                            <th className="p-6">Title</th>
                            <th className="p-6">Short Desc</th>
                            <th className="p-6 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {products.map((p: any) => (
                            <tr key={p._id} className="hover:bg-gray-50/50 transition-colors">
                                <td className="p-6">
                                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-100 border border-gray-200">
                                        <img src={p.imageUrl} alt="" className="w-full h-full object-cover" />
                                    </div>
                                </td>
                                <td className="p-6 font-bold text-gray-900">{p.title}</td>
                                <td className="p-6 text-sm text-gray-500 max-w-xs truncate">{p.shortDescription}</td>
                                <td className="p-6">
                                    <div className="flex justify-end gap-3">
                                        <button className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"><Edit2 size={18} /></button>
                                        <button onClick={() => handleDelete(p._id)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"><Trash2 size={18} /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {products.length === 0 && (
                            <tr><td colSpan={4} className="p-12 text-center text-gray-400">No products configured.</td></tr>
                        )}
                    </tbody>
                </table>
            </div>
        </motion.div>
    );
}
