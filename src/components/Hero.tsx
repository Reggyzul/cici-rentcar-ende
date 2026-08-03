import React from 'react';
import { motion } from 'motion/react';
import { PhoneCall, ShieldCheck, UserCheck, MapPin } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface HeroProps {
  onRentClick: () => void;
  lang: 'ID' | 'EN';
}

export default function Hero({ onRentClick, lang }: HeroProps) {
  const t = TRANSLATIONS[lang];

  const handleWhatsAppClick = () => {
    const waNumber = '6281236024604';
    const text = encodeURIComponent(
      lang === 'EN'
        ? 'Hello Cici Rentcar Ende, I would like to inquire about renting a car in Ende Flores.'
        : 'Halo Cici Rentcar Ende, saya ingin memesan rental mobil di Ende, Flores. Mohon informasi daftar harga dan ketersediaan armada.'
    );
    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${text}`, '_blank', 'noreferrer');
  };

  const handleViewPrices = () => {
    onRentClick();
    const el = document.getElementById('cars');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative pt-44 sm:pt-48 pb-20 bg-white text-gray-800 flex items-center overflow-hidden border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Hero Left: Artistic Banner Graphic */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center order-2 lg:order-1 mt-10 lg:mt-0" id="hero-collage-container">
            
            {/* Script Tagline */}
            <motion.h3 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ fontFamily: 'var(--font-script)' }}
              className="text-[#2563eb] text-4xl sm:text-5xl lg:text-6xl text-center font-normal leading-none mb-1 select-none"
            >
              Cici Rentcar Ende
            </motion.h3>

            {/* Direct quote tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="font-sans text-xs sm:text-sm text-amber-600 font-medium italic max-w-md text-center leading-relaxed mb-6 px-4"
            >
              "Solusi Perjalanan Aman & Nyaman Menjelajahi Keindahan Pulau Flores"
            </motion.p>

            {/* Central Circle Frame with Flores vehicle & scenery */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 mx-auto" id="collage-graphic">
              <div className="w-full h-full rounded-full overflow-hidden border-[6px] border-white shadow-2xl bg-gray-100 relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=600"
                  alt="Pesona Wisata Pulau Flores NTT"
                  className="w-full h-full object-cover select-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Overlapping Driver / Vehicle Overlay */}
              <div className="absolute bottom-[-16px] left-[-20px] right-[-20px] z-20 flex justify-center">
                <img
                  src="/innova3.avif"
                  alt="Armada Cici Rentcar Ende"
                  className="w-[90%] sm:w-[95%] h-auto object-contain select-none drop-shadow-[0_15px_30px_rgba(0,0,0,0.3)] rounded-2xl"
                />
              </div>

              {/* Location Badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-6 right-[-10px] bg-white shadow-xl px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-bold text-[#2563eb] z-30 border border-blue-100"
              >
                <MapPin className="w-4 h-4 text-red-500" />
                <span>Ende, Flores - NTT</span>
              </motion.div>
            </div>

          </div>

          {/* Hero Right: Headline & CTA */}
          <div className="lg:col-span-6 flex flex-col space-y-6 order-1 lg:order-2 text-left" id="hero-text-container">
            
            {/* Small uppercase tag */}
            <span className="font-display font-extrabold text-xs text-[#2563eb] tracking-widest uppercase">
              CICI RENTCAR ENDE – FLORES NTT
            </span>

            {/* Large Bold Headline */}
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-gray-900 tracking-tight leading-tight uppercase">
              Sewa & Rental Mobil Terpercaya di Ende, Flores – NTT
            </h1>

            {/* Sub-headline & Description */}
            <div className="font-sans text-gray-600 text-sm sm:text-base leading-relaxed space-y-4">
              <p className="font-semibold text-gray-800 text-base sm:text-lg border-l-4 border-[#2563eb] pl-3">
                Melayani Rental Dalam & Luar Kota Flores dan sekitarnya
              </p>
              <p className="text-gray-500">
                Kami siap memberikan pelayanan sepenuh hati untuk perjalanan dinas, wisata Danau Kelimutu, hingga Trip Lintas Flores (Ende - Maumere - Bajawa - Ruteng - Labuan Bajo) dengan armada bersih, nyaman, dan pengemudi berpengalaman.
              </p>
            </div>

            {/* Specs sticker badge */}
            <div className="flex flex-wrap gap-4 py-3 border-t border-b border-gray-100 text-gray-600 text-xs">
              <div className="flex items-center gap-1.5 font-semibold">
                <ShieldCheck className="w-4.5 h-4.5 text-[#2563eb]" />
                <span>Armada Selalu Prima & Terawat</span>
              </div>
              <div className="flex items-center gap-1.5 font-semibold">
                <UserCheck className="w-4.5 h-4.5 text-[#2563eb]" />
                <span>Driver Lokal Paham Rute Flores</span>
              </div>
            </div>

            {/* CTA Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={handleWhatsAppClick}
                className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-display font-bold text-xs uppercase py-4 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                id="hero-cta-whatsapp"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Pesan Mobil via WhatsApp (081236024604)</span>
              </button>

              <button
                onClick={handleViewPrices}
                className="bg-[#2563eb] hover:bg-blue-700 text-white font-display font-bold text-xs uppercase py-4 px-6 rounded-xl shadow-md transition-all cursor-pointer text-center"
                id="hero-cta-prices"
              >
                Lihat Daftar Harga
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
