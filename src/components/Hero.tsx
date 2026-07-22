import React from 'react';
import { motion } from 'motion/react';
import { Star, Briefcase, Plane, PhoneCall, ShieldCheck, UserCheck } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface HeroProps {
  onRentClick: () => void;
  lang: 'ID' | 'EN';
}

export default function Hero({ onRentClick, lang }: HeroProps) {
  const t = TRANSLATIONS[lang];

  const handleWhatsAppClick = () => {
    const waNumber = '628813305066';
    const text = encodeURIComponent(
      lang === 'EN'
        ? 'Hello Yoga Transport, I would like to inquire about booking a vehicle in Malang.'
        : 'Halo Yoga Transport, saya ingin bertanya tentang pemesanan armada rental di Malang.'
    );
    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${text}`, '_blank', 'noreferrer');
  };

  const handleLearnMore = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative pt-44 sm:pt-48 pb-20 bg-white text-gray-800 flex items-center overflow-hidden border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Hero Left: BromoCreative Collage with driver team */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center order-2 lg:order-1 mt-10 lg:mt-0" id="hero-collage-container">
            
            {/* Handwriting script title */}
            <motion.h3 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ fontFamily: 'var(--font-script)' }}
              className="text-[#2563eb] text-4xl sm:text-5xl lg:text-6xl text-center font-normal leading-none mb-1 select-none"
            >
              Premium Trip Planner
            </motion.h3>

            {/* Direct quote inside quotes */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="font-sans text-[10px] sm:text-xs text-gray-500 italic max-w-xs text-center leading-relaxed mb-6 px-4"
            >
              "Jangan ragu memilih perjalanan Anda bersama tim kami, karena kami siap memberikan pelayanan sepenuh hati dan menghadirkan pengalaman istimewa..."
            </motion.p>

            {/* Central Circle Frame with Team photo overlay */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 mx-auto" id="collage-graphic">
              {/* Circular Bromo sunrise photo */}
              <div className="w-full h-full rounded-full overflow-hidden border-[6px] border-white shadow-xl bg-gray-100 relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1588668214407-6ea9a6d7c26b?auto=format&fit=crop&q=80&w=600"
                  alt="Mount Bromo Sunrise View"
                  className="w-full h-full object-cover select-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Overlapping Red-Shirted Driver Team */}
              <div className="absolute bottom-[-16px] left-[-20px] right-[-20px] z-20 flex justify-center">
                <img
                  src="/team_red.png"
                  alt="Yoga Transport Professional Drivers"
                  className="w-[110%] h-auto object-contain select-none drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)]"
                />
              </div>

              {/* Floating plane icon */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-[-10px] w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-[#2563eb] z-30"
              >
                <Plane className="w-4 h-4 transform rotate-[45deg]" />
              </motion.div>

              {/* Floating suitcase icon */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-12 left-[-15px] w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-amber-500 z-30"
              >
                <Briefcase className="w-4 h-4" />
              </motion.div>
            </div>

          </div>

          {/* Hero Right: Ciptakan Momen Liburan Bersama Kami */}
          <div className="lg:col-span-6 flex flex-col space-y-6 order-1 lg:order-2 text-left" id="hero-text-container">
            
            {/* Small uppercase tag */}
            <span className="font-display font-extrabold text-xs text-[#2563eb] tracking-widest uppercase">
              TENTANG KAMI YOGA TRANSPORT
            </span>

            {/* Large Bold Headline */}
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-gray-900 tracking-tight leading-tight uppercase">
              Ciptakan Momen <br className="hidden sm:block" />
              Liburan Bersama Kami
            </h1>

            {/* Description matching BromoCreative about paragraph style */}
            <div className="font-sans text-gray-500 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                <strong>Yoga Transport</strong> merupakan unit usaha penyedia layanan transportasi profesional yang berbasis di Malang – Jawa Timur. Kami memiliki pengalaman bertahun-tahun dalam menangani kebutuhan perjalanan dinas, city tour Malang-Batu, hingga paket liburan keluarga dan kunjungan wisata alam Bromo dengan jangkauan layanan terbaik.
              </p>
              <p>
                Kami memahami bahwa kenyamanan dan keselamatan perjalanan Anda adalah prioritas utama. Oleh karena itu, setiap program layanan dirancang secara khusus didukung oleh pengemudi kami yang ramah, profesional, berpengalaman di rute-rute pegunungan Jawa Timur, serta ketersediaan armada bersih yang selalu terawat dan steril sebelum beroperasi.
              </p>
            </div>

            {/* Specs sticker badge */}
            <div className="flex flex-wrap gap-4 py-2 border-t border-b border-gray-100 text-gray-600 text-xs">
              <div className="flex items-center gap-1.5 font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#2563eb]" />
                <span>Armada Steril & Terawat</span>
              </div>
              <div className="flex items-center gap-1.5 font-semibold">
                <UserCheck className="w-4 h-4 text-[#2563eb]" />
                <span>Driver Profesional Ramah</span>
              </div>
            </div>

            {/* CTA Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={handleLearnMore}
                className="bg-[#2563eb] hover:bg-blue-700 text-white font-display font-bold text-xs uppercase py-3.5 px-8 rounded-xl shadow-md transition-all cursor-pointer text-center"
              >
                Learn More
              </button>
              
              <button
                onClick={handleWhatsAppClick}
                className="border border-green-200 hover:border-green-300 bg-[#25D366] hover:bg-[#20ba5a] text-white font-display font-bold text-xs uppercase py-3.5 px-6 rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Chat WhatsApp</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
