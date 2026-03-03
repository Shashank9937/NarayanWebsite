import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Narayan Enterprises | Powering Industrial India with Sustainable Biomass",
  description: "Narayan Enterprises is India's leading large-scale biomass fuel manufacturer and industrial infrastructure partner. Providing reliable, carbon-neutral energy solutions for thermal power plants and boilers.",
  keywords: ["Biomass Energy India", "Industrial Fuel Pellets", "Briquette Supply", "Clean Energy infrastructure", "Sustainable Industrial Fuel"],
  openGraph: {
    title: "Narayan Enterprises | Sustainable Biomass Energy",
    description: "Reliable. Scalable. Future-Ready biomass energy solutions for industrial India.",
    type: "website",
    locale: "en_IN",
    url: "https://narayanenterprises.com",
    siteName: "Narayan Enterprises",
  },
  twitter: {
    card: "summary_large_image",
    title: "Narayan Enterprises | Sustainable Biomass Energy",
    description: "Powering Industrial India with Sustainable Biomass pellets and briquettes.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": "Narayan Enterprises",
    "alternateName": "Narayan Biomass",
    "url": "https://narayanenterprises.com",
    "logo": "https://narayanenterprises.com/logo.png",
    "sameAs": [
      "https://www.linkedin.com/company/narayan-enterprises"
    ],
    "description": "Leading industrial biomass fuel manufacturer in India.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Level 4, BKC",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "postalCode": "400051",
      "addressCountry": "IN"
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
