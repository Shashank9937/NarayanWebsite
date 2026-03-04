import '@/app/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Narayan Enterprises | Clean Industrial Energy',
  description: 'Sustainable, high-efficiency biomass pellets and briquettes.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased font-sans flex flex-col min-h-screen">
        {children}
      </body>
    </html>
  );
}
