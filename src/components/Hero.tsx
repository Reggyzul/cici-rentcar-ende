import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, ChevronDown } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface HeroProps {
  onRentClick: () => void;
  onVisiMisiClick?: () => void;
  lang: 'ID' | 'EN';
}

export default function Hero({ onRentClick, onVisiMisiClick, lang }: HeroProps) {
  const t = TRANSLATIONS[lang];

  const handleWhatsAppClick = () => {
    const waNumber = '6281236024604';
    const text = encodeURIComponent(
      'Halo Cici Rentcar Ende, saya ingin memesan rental mobil di Ende, Flores. Mohon informasi daftar harga dan ketersediaan armada.'
    );
    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${text}`, '_blank', 'noreferrer');
  };

  const handleScrollToAbout = () => {
    if (onVisiMisiClick) {
      onVisiMisiClick();
    } else {
      const el = document.getElementById('about');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-28 sm:pt-32 pb-16 bg-gradient-to-b from-slate-50 via-white to-blue-50/50 text-[#0b192c] overflow-hidden border-b border-slate-200"
    >
      {/* Background Decorative Soft Blue Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        
        <div className="space-y-6 flex flex-col items-center" id="hero-text-container">

          {/* Main Headline with Blue Palette */}
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-[#0b192c] tracking-tight uppercase leading-none"
          >
            CICI RENTCAR <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-900">ENDE</span>
          </motion.h1>

          {/* Subtitle Highlight */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-sans text-slate-800 text-base sm:text-lg font-bold max-w-3xl mx-auto"
          >
            Sewa & Rental Mobil Terpercaya di Ende, Flores – NTT
          </motion.p>

          {/* Description Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="font-sans text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto font-medium"
          >
            Melayani Rental Dalam & Luar Kota Flores dan sekitarnya. Kami siap memberikan pelayanan sepenuh hati untuk perjalanan dinas, wisata Danau Kelimutu, hingga Trip Lintas Flores (Ende - Maumere - Bajawa - Ruteng - Labuan Bajo) dengan armada bersih, nyaman, dan pengemudi berpengalaman.
          </motion.p>

          {/* Pricing Highlight Card Bar - Blue & White Theme */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 sm:p-5 rounded-3xl bg-white border border-slate-200/90 w-full max-w-3xl shadow-xl shadow-blue-900/5"
          >
            <div className="p-3.5 rounded-2xl bg-blue-50/80 border border-blue-100 text-center">
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-800 block">Toyota Avanza / Veloz</span>
              <span className="font-display font-black text-base text-[#0b192c] block mt-0.5">Rp 800.000 <span className="text-[11px] font-medium text-slate-500">/hari</span></span>
            </div>
            <div className="p-3.5 rounded-2xl bg-blue-50/80 border border-blue-100 text-center">
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-800 block">Toyota Grand Innova</span>
              <span className="font-display font-black text-base text-[#0b192c] block mt-0.5">Rp 1.000.000 <span className="text-[11px] font-medium text-slate-500">/hari</span></span>
            </div>
            <div className="p-3.5 rounded-2xl bg-indigo-50/80 border border-indigo-100 text-center">
              <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-800 block">Toyota Innova Reborn</span>
              <span className="font-display font-black text-base text-[#0b192c] block mt-0.5">Rp 1.300.000 <span className="text-[11px] font-medium text-slate-500">/hari</span></span>
            </div>
          </motion.div>

          {/* Action Button - Blue Gradient */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="pt-2"
          >
            <button
              onClick={handleWhatsAppClick}
              className="bg-gradient-to-r from-blue-700 to-indigo-900 hover:from-blue-800 hover:to-indigo-950 text-white font-sans font-bold text-xs uppercase px-8 py-4 rounded-2xl shadow-xl shadow-blue-900/25 hover:shadow-blue-900/40 transition-all flex items-center gap-2 cursor-pointer scale-105 border border-blue-400/30"
              id="hero-cta-whatsapp"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Pesan Mobil via WhatsApp (081236024604)</span>
            </button>
          </motion.div>

          {/* Animated Down Arrow Scroll Button */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 8, 0] }}
            transition={{ opacity: { delay: 0.4 }, y: { duration: 2, repeat: Infinity, ease: 'easeInOut' } }}
            className="pt-4"
          >
            <button
              onClick={handleScrollToAbout}
              className="group flex flex-col items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-blue-800 transition-colors cursor-pointer"
              title="Lihat Keunggulan Kami"
            >
              <span className="text-[10px] uppercase tracking-wider font-extrabold text-blue-800">Keunggulan & Layanan</span>
              <div className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-blue-800 group-hover:border-blue-500 group-hover:bg-blue-50 transition-all">
                <ChevronDown className="w-5 h-5" />
              </div>
            </button>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
