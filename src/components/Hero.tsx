import React from 'react';
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
      {/* Background Scenery Image with Transparency Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1920"
          alt="Pemandangan Keindahan Pulau Flores NTT"
          className="w-full h-full object-cover opacity-20 filter saturate-125 scale-105"
        />
        {/* Gradient Mask so text stays 100% crystal clear & readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/85 to-white/95" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        
        {/* Full-width Hero Text Container */}
        <div className="flex flex-col items-center space-y-6 text-center" id="hero-text-container">
          
          {/* Small uppercase tag with location badge */}
          <div className="inline-flex items-center gap-2 bg-blue-50/90 backdrop-blur-sm text-[#2563eb] border border-blue-100 px-4 py-1.5 rounded-full font-display font-extrabold text-xs tracking-widest uppercase shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-red-500" />
            <span>CICI RENTCAR ENDE – FLORES NTT</span>
          </div>

          {/* Large Bold Headline */}
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-gray-900 tracking-tight leading-tight uppercase max-w-4xl drop-shadow-sm">
            Sewa & Rental Mobil Terpercaya di Ende, Flores – NTT
          </h1>

          {/* Sub-headline Highlight */}
          <p className="font-semibold text-gray-800 text-base sm:text-xl max-w-2xl bg-white/90 backdrop-blur-md py-2.5 px-6 rounded-2xl border border-slate-200/80 shadow-sm">
            Melayani Rental Dalam & Luar Kota Flores dan sekitarnya
          </p>

          {/* Description */}
          <p className="font-sans text-gray-600 text-sm sm:text-base leading-relaxed max-w-3xl font-medium">
            Kami siap memberikan pelayanan sepenuh hati untuk perjalanan dinas, wisata Danau Kelimutu, hingga Trip Lintas Flores (Ende - Maumere - Bajawa - Ruteng - Labuan Bajo) dengan armada bersih, nyaman, dan pengemudi berpengalaman.
          </p>

          {/* Feature Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 py-3 text-gray-800 text-xs sm:text-sm font-bold">
            <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl border border-gray-200/80 shadow-sm">
              <ShieldCheck className="w-5 h-5 text-[#2563eb]" />
              <span>Armada Selalu Prima & Terawat</span>
            </div>
            <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl border border-gray-200/80 shadow-sm">
              <UserCheck className="w-5 h-5 text-[#2563eb]" />
              <span>Driver Lokal Paham Rute Flores</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full sm:w-auto">
            <button
              onClick={handleWhatsAppClick}
              className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20ba5a] text-white font-display font-extrabold text-xs sm:text-sm uppercase py-4 px-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2.5 cursor-pointer"
              id="hero-cta-whatsapp"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Pesan Mobil via WhatsApp (081236024604)</span>
            </button>

            <button
              onClick={handleViewPrices}
              className="w-full sm:w-auto bg-[#2563eb] hover:bg-blue-700 text-white font-display font-extrabold text-xs sm:text-sm uppercase py-4 px-8 rounded-2xl shadow-lg transition-all cursor-pointer text-center"
              id="hero-cta-prices"
            >
              Lihat Daftar Harga
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
