"use client";

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Cookies from 'js-cookie';
import Link from 'next/link';
import { LayoutDashboard, Package, MessageSquare, LogOut, Loader2 } from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        setMounted(true);
        const token = Cookies.get('admin_token');
        if (!token && pathname !== '/admin/login') {
            router.push('/admin/login');
        }
    }, [pathname, router]);

    const handleLogout = () => {
        Cookies.remove('admin_token');
        router.push('/admin/login');
    };

    if (!mounted) return <div className="h-screen flex items-center justify-center bg-gray-50"><Loader2 className="animate-spin text-gray-400" /></div>;

    if (pathname === '/admin/login') {
        return <div className="min-h-screen bg-gray-50 flex items-center justify-center">{children}</div>;
    }

    return (
        <div className="flex bg-gray-100 min-h-screen font-sans antialiased text-gray-900 overflow-hidden">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-gray-200 flex flex-col justify-between hidden md:flex">
                <div>
                    <div className="h-20 flex items-center px-8 border-b border-gray-100">
                        <span className="font-bold text-xl tracking-tight">Narayan <span className="text-gray-400">CMS</span></span>
                    </div>
                    <nav className="p-4 space-y-1">
                        <Link href="/admin/dashboard" className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold transition-colors ${pathname === '/admin/dashboard' ? 'bg-gray-900 text-white' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}`}>
                            <LayoutDashboard size={18} /> Dashboard
                        </Link>
                        <Link href="/admin/products" className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold transition-colors ${pathname === '/admin/products' ? 'bg-gray-900 text-white' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}`}>
                            <Package size={18} /> Products
                        </Link>
                        <Link href="/admin/inquiries" className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold transition-colors ${pathname === '/admin/inquiries' ? 'bg-gray-900 text-white' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}`}>
                            <MessageSquare size={18} /> Inquiries
                        </Link>
                    </nav>
                </div>
                <div className="p-4">
                    <button onClick={handleLogout} className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-sm font-semibold text-red-500 hover:bg-red-50 transition-colors">
                        <LogOut size={18} /> Logout Session
                    </button>
                </div>
            </aside>

            {/* Main Content Pane */}
            <main className="flex-1 flex flex-col bg-gray-50 h-screen overflow-y-auto">
                <header className="h-20 bg-white border-b border-gray-200 flex items-center px-8 shadow-sm justify-between md:justify-end">
                    <span className="font-semibold text-gray-400 md:hidden">Mobile menu pending</span>
                    <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center text-white text-xs font-bold ring-2 ring-gray-100">A</div>
                        <span className="text-sm font-bold text-gray-700">Admin</span>
                    </div>
                </header>
                <div className="p-8 pb-32 max-w-6xl mx-auto w-full">
                    {children}
                </div>
            </main>
        </div>
    );
}
