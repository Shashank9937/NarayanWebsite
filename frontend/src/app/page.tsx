"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const products = [
    { name: "Briquettes", desc: "Boiler Grade (Dia 90mm )", img: "https://images.unsplash.com/photo-1620608518882-628d70bde68e?w=300&h=200&fit=crop" },
    { name: "Biopellets", desc: "Stove Grade (Dia 8mm )", img: "https://images.unsplash.com/photo-1582216518778-be7213baf931?w=300&h=200&fit=crop" },
    { name: "Biopellets", desc: "Low Ash (Dia 8mm )", img: "https://images.unsplash.com/photo-1582216518778-be7213baf931?w=300&h=200&fit=crop" },
    { name: "Biopellets", desc: "Low Ash (Dia 6mm )", img: "https://images.unsplash.com/photo-1582216518778-be7213baf931?w=300&h=200&fit=crop" },
  ];

  const initiatives = [
    { title: "Bioenergy", img: "https://images.unsplash.com/photo-1582216518778-be7213baf931?w=300" },
    { title: "Solar Energy", img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=300" },
    { title: "Wind Energy", img: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=300" },
    { title: "Soya Bean Initiative", img: "https://images.unsplash.com/photo-1592688402919-725beae14e67?w=300" },
  ];

  return (
    <main className="min-h-screen">
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-blue shadow-lg py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="#1A2849" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                <path d="M12 22v-8M12 14c-2 0-4-1-4-3s1-3 4-3 4 1 4 3-2 3-4 3zM12 8V4M8 10H4M20 10h-4M10 6L8 8M14 6l2 2" />
              </svg>
            </div>
            <span className="text-white text-2xl font-semibold tracking-wider">RAJARAM</span>
          </Link>
          <div className="hidden md:flex gap-8 items-center text-white text-[13px] font-semibold tracking-wider">
            <Link href="#" className="hover:text-brand-green transition-colors">WHO WE ARE</Link>
            <Link href="#" className="hover:text-brand-green transition-colors">BUSINESS</Link>
            <Link href="#" className="hover:text-brand-green transition-colors">SUSTAINABILITY</Link>
            <Link href="#" className="hover:text-brand-green transition-colors">NEWSROOM</Link>
            <Link href="#" className="hover:text-brand-green transition-colors">CAREERS</Link>
            <Link href="#" className="hover:text-brand-green transition-colors">CONTACT US</Link>
          </div>
        </div>
      </nav>

      <section className="relative w-full h-[600px] md:h-[800px]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2641&auto=format&fit=crop')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/30" />
        </div>
      </section>

      <section className="py-20 max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/3 flex justify-center">
            <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=400&fit=crop" alt="Lightbulb with tree" className="w-full max-w-sm h-auto" />
          </div>
          <div className="w-full md:w-2/3">
            <div className="rajaram-title">
              <span className="rajaram-title-part1">BIO</span>
              <span className="rajaram-title-part2">ENERGY</span>
            </div>
            <p className="text-brand-text leading-relaxed mb-4 text-[15px]">
              Rajaram Bioenergy is an exclusive arm of Rajaram Solvex Limited engaged in manufacturing and marketing Biomass Pellets and Briquettes. With the dual objective of providing sustainable and environment-friendly energy solutions, Rajaram Bio-Energy began utilizing agricultural waste by converting it into Biofuel and has been working relentlessly to come up with alternative fuel solutions for a greener future. These products are used in various heating applications in home and commercial cooking as well as industrial steam boilers.
            </p>
            <p className="text-brand-text leading-relaxed mb-4 text-[15px]">
              With a vision to meet our commitment towards becoming carbon neutral by 2030, a pellet manufacturing plant was launched in the year 2000. Located in the quaint district of Western India, Rajaram Bioenergy is an established player in the business of aggregation and supply of Biomass products like Pellets and Briquettes.
            </p>
            <p className="text-brand-text leading-relaxed text-[15px]">
              We are one of the largest manufacturers of Bioenergy in India with approx 50,000 MT production capacity of Biomass Pellets, Briquettes per annum in Islampur, Sangli District.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p, i) => (
            <div key={i} className="flex flex-col items-start bg-white p-2">
              <img src={p.img} alt={p.name} className="w-full h-40 object-cover rounded mb-4" />
              <h4 className="font-bold text-brand-blue text-[15px] mb-1">{p.name}</h4>
              <p className="text-brand-text text-[14px]">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-1/3 flex justify-center items-start">
            <img src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&h=400&fit=crop" alt="Green City" className="w-[300px] h-auto rounded-full mt-8" />
          </div>
          <div className="w-full lg:w-2/3">
            <div className="rajaram-title">
              <span className="rajaram-title-part1">WHY</span>
              <span className="rajaram-title-part2">BIOENERGY</span>
            </div>
            <p className="text-brand-text leading-relaxed mb-6 text-[15px]">
              We collect sugarcane trash, which is generated during harvesting sugarcane with the help of New Holland Balers. We are pioneers and the largest aggregator of sugarcane trash in Maharashtra. This agricultural waste is then utilised in converting into Biomass pellets. Currently, the total sugarcane trash generated in Western Maharashtra is 75 lac MT. We follow a meticulous process and adhere to international standards in trash collection and processing.
            </p>
            <p className="text-brand-text leading-relaxed mb-8 text-[15px]">
              The use of fossil fuels in heating applications causes harm to the environment and is also expensive. Our Energy Products offer an environmentally friendly and cost-effective alternative to fossil fuels like LPG, Diesel, Furnace Oil, Coal etc., used for various heating applications from household cooking to large industrial boilers. Our energy solutions help people save fuel costs by as much as 30 to 50% against fossil fuels. In addition, we use advanced technology to convert Agricultural Waste into Biomass Pellets and Briquettes.
            </p>

            <h4 className="text-[17px] font-bold text-brand-blue mb-4">How do we make our Pellets:</h4>

            <div className="space-y-4 text-[14px]">
              <p><strong className="text-brand-blue font-bold">Biomass Feedstock:</strong> The first step in the pelletisation process is the preparation of feedstock (Raw materials, like agricultural residues, wood shavings, etc.), which includes selecting a feedstock suitable for this process, its filtration, storage and protection. Filtration is done to remove unwanted materials like stones, metals, etc.</p>
              <p><strong className="text-brand-blue font-bold">Drying:</strong> Next step is Drying; the moisture content of the raw material must be around 10% to 12% — a rotary drum dryer equipment used for this purpose. Drying is the most energy-intensive process. However, this increases the efficiency of biomass, and it produces almost no smoke on combustion.</p>
              <p><strong className="text-brand-blue font-bold">Grinding:</strong> Before feeding biomass to pellet mills for further processing, the biomass is reduced to small particles of the order of not more than 5mm. If the pellet size is too large or too small, it affects the quality of the pellet and, in turn, increases the energy consumption. Therefore, we ensure the particles are of a suitable size and consistent quality.</p>
              <p><strong className="text-brand-blue font-bold">Pelletising:</strong> Once the raw material has achieved the moisture and size requirements, pellets are produced. The pellet mill machine is used to pelletise the raw materials into wood pellets.</p>
              <p><strong className="text-brand-blue font-bold">Cooling:</strong> Pelletisation generates additional heat to reduce the heat before packaging coolers are placed at the end of the process. These coolers utilise the surrounding air to lower the temperature of the pellet, resulting in a pellet be 5 to 10 degrees C above temperature.</p>
              <p><strong className="text-brand-blue font-bold">Final Sifting and Packaging:</strong> Lastly, the Pellets pass through a sifter to get rid of any dust or crumbs, which get recirculated back in the process. Once this is done, the pellets are ready to pack for distribution.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="flex justify-center mb-12">
          <div className="rajaram-title justify-center">
            <span className="rajaram-title-part1">PATHWAY TO</span>
            <span className="rajaram-title-part2">SUSTAINABLE GROWTH</span>
          </div>
        </div>
        <p className="text-brand-text max-w-3xl mx-auto mb-12 text-[15px] text-center px-6">
          We, at Rajaram Group, pledge to work towards sustainable practices by encouraging the recycling of crop residues, improving biodiversity and enhancing soil productivity.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
          {initiatives.map((item, i) => (
            <div key={i} className="border-2 border-brand-blue pb-2 text-center bg-white shadow-sm hover:shadow-md transition">
              <img src={item.img} alt={item.title} className="w-full h-48 object-cover object-center" />
              <h4 className="mt-3 font-bold text-brand-green text-[15px]">{item.title}</h4>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-brand-gray">
        <div className="flex justify-center mb-12">
          <div className="rajaram-title justify-center">
            <span className="rajaram-title-part1">COMPARISON WITH</span>
            <span className="rajaram-title-part2">FOSSIL FUEL</span>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border rounded shadow-sm">
            <table className="w-full text-left text-[14px]">
              <thead>
                <tr className="bg-gray-100/50">
                  <th className="p-4 border-b"></th>
                  <th className="p-4 border-b text-center text-brand-blue font-bold">LPG</th>
                  <th className="p-4 border-b text-center text-brand-blue font-bold">Biomass Pellets</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border-b text-brand-text font-medium">Equivalent Quantities Kg</td>
                  <td className="p-4 border-b text-center text-brand-text">1</td>
                  <td className="p-4 border-b text-center text-brand-text">3</td>
                </tr>
                <tr>
                  <td className="p-4 text-brand-text font-medium">Rate per Kg (Rs)</td>
                  <td className="p-4 text-center text-brand-text">80</td>
                  <td className="p-4 text-center text-brand-text">15</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-white border rounded shadow-sm">
            <table className="w-full text-left text-[14px]">
              <thead>
                <tr className="bg-gray-100/50">
                  <th className="p-4 border-b"></th>
                  <th className="p-4 border-b text-center text-brand-blue font-bold">Diesel</th>
                  <th className="p-4 border-b text-center text-brand-blue font-bold">Biomass Pellets</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border-b text-brand-text font-medium">Equivalent Quantities Kg</td>
                  <td className="p-4 border-b text-center text-brand-text">1</td>
                  <td className="p-4 border-b text-center text-brand-text">2.5</td>
                </tr>
                <tr>
                  <td className="p-4 text-brand-text font-medium">Rate per Kg (Rs)</td>
                  <td className="p-4 text-center text-brand-text">95</td>
                  <td className="p-4 text-center text-brand-text">15</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="text-center mt-12">
          <button className="bg-brand-blue text-white px-8 py-3 rounded text-[14px] font-bold uppercase tracking-wider hover:bg-[#111A30] transition shadow-md">
            COMPARE CALCULATOR
          </button>
        </div>
      </section>

      <footer className="bg-brand-blue text-white pt-16 pb-6 text-center">
        <h2 className="text-5xl font-light mb-4 text-[#8b92a5]">Bioenergy</h2>
        <p className="text-[#8b92a5] text-sm font-semibold tracking-widest uppercase mb-10">Connect with us to find sustainable biofuel solutions</p>
        <button className="bg-brand-green text-white px-8 py-3 rounded text-[14px] font-bold uppercase tracking-wider hover:bg-[#7ca938] transition mb-16 shadow-md">
          Enquire Now
        </button>

        <div className="bg-[#15203A] py-8 px-4 flex flex-col items-center">
          <p className="text-[#8b92a5] text-[13px] mb-6 font-medium tracking-wide">A21/22/E43/45, MIDC, Uran Islampur, Maharashtra 415414 | <span className="text-brand-green">02342299006</span></p>
          <div className="flex flex-wrap justify-center gap-6 text-[12px] uppercase font-bold text-[#8b92a5] mb-8 tracking-wider">
            <Link href="#" className="hover:text-white transition-colors">WHO WE ARE</Link>
            <Link href="#" className="hover:text-white transition-colors">RAJARAM SOLVEX LTD</Link>
            <Link href="#" className="hover:text-white transition-colors">RAJARAM BIO ENERGY</Link>
            <Link href="#" className="hover:text-white transition-colors">RAJARAM CONSUMER CARE</Link>
            <Link href="#" className="hover:text-white transition-colors">Sustainability</Link>
            <Link href="#" className="hover:text-white transition-colors">NEWSROOM</Link>
            <Link href="#" className="hover:text-white transition-colors">CAREERS</Link>
            <Link href="#" className="hover:text-white transition-colors">CONTACT US</Link>
          </div>
          <p className="text-[11px] text-[#556382] font-medium tracking-wide">All Rights Reserved Rajaram Solvex Ltd 2021.</p>
        </div>
      </footer>
    </main>
  );
}
