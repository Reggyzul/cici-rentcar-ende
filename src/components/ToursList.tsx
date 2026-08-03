import React, { useState } from 'react';
import { Clock, MapPin, CheckCircle2, ChevronRight, MessageCircle, Sparkles } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';
import { motion, AnimatePresence } from 'motion/react';

interface ToursListProps {
  lang: 'ID' | 'EN';
}

export default function ToursList({ lang }: ToursListProps) {
  const [activeRouteIndex, setActiveRouteIndex] = useState(0);
  const t = TRANSLATIONS[lang];

  const routes = [
    {
      id: 'lintas-flores',
      name: 'Trip Lintas Flores',
      badge: 'POPULER & FAVORIT',
      subtitle: 'Ende - Maumere - Bajawa - Ruteng - Labuan Bajo',
      duration: 'Fleksibel (4H3M / 5H4M / 6H5M)',
      destinations: ['Danau 3 Warna Kelimutu', 'Kampung Adat Bena', 'Ruteng Pu\'u', 'Labuan Bajo', 'Pantai Batu Hijau'],
      features: ['Mobil Bersih & AC Cold', 'Driver Lokal Paham Rute', 'BBM & Tol Termasuk (Optional)', 'Penjemputan Tepat Waktu'],
      description: 'Perjalanan jelajah Pulau Flores paling diminati! Dimulai dari penjemputan di Ende, mengunjungi Danau Kelimutu, menelusuri keunikan budaya lokal di Bajawa dan Ruteng, hingga berakhir di keindahan kota pelabuhan Labuan Bajo.',
      waMessage: 'Halo Cici Rentcar Ende, saya tertarik memesan Trip Lintas Flores (Ende - Maumere - Bajawa - Ruteng - Labuan Bajo). Mohon info jadwal & penawarannya.'
    },
    {
      id: 'tour-kelimutu',
      name: 'Tour Kelimutu & Ende',
      badge: 'WISATA SEJARAH & ALAM',
      subtitle: 'Sunrise Moni, Kelimutu & Destinasi Kota Ende',
      duration: '1 Hari Penuh (1 Day Tour)',
      destinations: ['Danau 3 Warna Kelimutu', 'Rumah Pengasingan Bung Karno', 'Taman Renungan Bung Karno', 'Pantai Batu Hijau (Penggajawa)'],
      features: ['Penjemputan Hotel / Bandara Ende', 'Driver Menguasai Spot Foto Terbaik', 'Kabin Steril & Nyaman', 'Konsultasi Waktu Sunrise'],
      description: 'Nikmati keajaiban alam Danau 3 Warna Kelimutu saat matahari terbit di Moni, dilanjutkan dengan tur edukasi sejarah jejak perjuangan Bung Karno di Kota Ende serta keunikan Pantai Batu Hijau.',
      waMessage: 'Halo Cici Rentcar Ende, saya ingin memesan paket Tour Wisata Kelimutu & Ende (1 Day Tour). Mohon rincian harganya.'
    },
    {
      id: 'tour-riung',
      name: 'Trip Ende - Riung 17 Pulau',
      badge: 'WISATA MARITIM',
      subtitle: 'Wisata Bahari & Pesona Taman Laut Riung',
      duration: '2 Hari 1 Malam (2D1N)',
      destinations: ['Taman Laut Riung 17 Pulau', 'Pulau Rutong', 'Pulau Ontoloe (Kelelawar)', 'Pantai Pasir Putih Riung'],
      features: ['Armada Prima Rute Pegunungan', 'Driver Berpengalaman & Ramah', 'Jadwal Fleksibel', 'Kapasitas Pas Kelompok / Keluarga'],
      description: 'Petualangan eksotis dari Ende menuju kawasan konservasi Taman Laut 17 Pulau Riung. Nikmati keindahan bawah laut, pulau-pulau tak berpenghuni dengan pasir putih halus, dan koloni kelelawar bakau.',
      waMessage: 'Halo Cici Rentcar Ende, saya tertarik dengan paket Trip Ende - Riung 17 Pulau. Mohon informasi ketersediaan armada.'
    },
    {
      id: 'shuttle-flores',
      name: 'Shuttle & Drop Antar Kota',
      badge: 'LAYANAN CEPAT & ON-TIME',
      subtitle: 'Ende - Maumere / Bajawa / Ruteng / Labuan Bajo',
      duration: 'Sekali Jalan (Drop Off)',
      destinations: ['Bandara H. Hasan Aroeboesman Ende', 'Hotel & Penginapan', 'Pelabuhan Ende', 'Antar Kota Pulau Flores'],
      features: ['Layanan 24/7 Standby', 'Armada Nyaman & Performa Prima', 'Tanpa Transit / Private Drop', 'Driver Sopan & Tepat Waktu'],
      description: 'Layanan antar-jemput privat dari Bandara H. Hasan Aroeboesman Ende menuju hotel, pelabuhan, atau kota-kota tujuan Anda di seluruh Flores tanpa perlu repot berganti kendaraan.',
      waMessage: 'Halo Cici Rentcar Ende, saya ingin memesan layanan Shuttle / Drop Antar Kota Flores. Mohon info ketersediaan & harganya.'
    }
  ];

  const currentRoute = routes[activeRouteIndex];

  const handleBookingClick = (msg: string) => {
    const waNumber = '6281236024604';
    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(msg)}`, '_blank', 'noreferrer');
  };

  return (
    <section id="tours" className="py-20 bg-white text-[#0b192c] overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 font-display font-extrabold text-xs tracking-wider uppercase shadow-sm">
            <Sparkles className="w-4 h-4 text-blue-700" />
            <span>RUTE & PAKET PERJALANAN FLORES</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#0b192c] tracking-tight uppercase leading-tight">
            Jelajahi Pesona <span className="text-blue-800">Pulau Flores</span>
          </h2>

          <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Pilih rute impian Anda di bawah ini dan langsung booking via WhatsApp dengan mudah dan praktis.
          </p>
        </div>

        {/* SINGLE ELEGANT FRAME BOX (Blue & Dark Navy Theme) */}
        <div className="bg-[#0b192c] text-white rounded-[32px] p-6 sm:p-10 shadow-2xl border border-slate-800 relative overflow-hidden">
          
          {/* Subtle Background Glow Accents */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

          {/* Top Frame Header: Route Selection Tabs */}
          <div className="relative z-10 mb-8 border-b border-white/10 pb-6">
            <p className="text-xs font-display font-bold tracking-wider text-blue-400 uppercase mb-4 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span>PILIH RUTE PERJALANAN (KLIK UNTUK DETAIL):</span>
            </p>
            
            {/* Horizontal Tabs / Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {routes.map((route, idx) => {
                const isActive = idx === activeRouteIndex;
                return (
                  <button
                    key={route.id}
                    onClick={() => setActiveRouteIndex(idx)}
                    className={`p-4 rounded-2xl text-left transition-all duration-300 cursor-pointer border flex flex-col justify-between ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-700 to-indigo-800 border-blue-400 text-white shadow-lg shadow-blue-900/40 scale-[1.02]'
                        : 'bg-slate-800/80 hover:bg-slate-800 border-white/5 text-slate-300 hover:text-white'
                    }`}
                  >
                    <div>
                      <span className={`inline-block text-[9px] font-bold tracking-wider px-2 py-0.5 rounded-full uppercase mb-2 ${
                        isActive ? 'bg-white/20 text-white' : 'bg-blue-500/20 text-blue-300'
                      }`}>
                        {route.badge}
                      </span>
                      <h4 className="font-display font-bold text-sm leading-snug">
                        {route.name}
                      </h4>
                    </div>
                    <div className="flex items-center justify-between mt-3 text-xs opacity-80 pt-2 border-t border-white/10">
                      <span className="text-[10px] font-medium">{route.duration}</span>
                      <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'rotate-90 text-white' : ''}`} />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Dynamic Details Box inside Frame */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentRoute.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Details Info */}
              <div className="lg:col-span-7 space-y-6 text-left">
                
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-blue-500/20 text-blue-300 font-bold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">
                      {currentRoute.badge}
                    </span>
                    <span className="text-slate-400 text-xs font-semibold flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-blue-400" />
                      {currentRoute.duration}
                    </span>
                  </div>
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight uppercase">
                    {currentRoute.name}
                  </h3>
                  <p className="text-blue-300 font-semibold text-xs sm:text-sm mt-1">
                    📍 {currentRoute.subtitle}
                  </p>
                </div>

                <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                  {currentRoute.description}
                </p>

                {/* Destinasi Chips */}
                <div className="space-y-2">
                  <p className="font-display font-bold text-[10px] uppercase tracking-widest text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-blue-400" />
                    Destinasi Unggulan Yang Dikunjungi:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {currentRoute.destinations.map((dest, i) => (
                      <span key={i} className="bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/10">
                        {dest}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Inclusions & Direct WhatsApp Booking Action */}
              <div className="lg:col-span-5 bg-slate-800/90 rounded-2xl p-6 border border-white/10 space-y-6 text-left">
                
                <div>
                  <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-3 pb-2 border-b border-white/10">
                    Fasilitas Layanan Termasuk:
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-300 font-sans">
                    {currentRoute.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Direct Booking CTA */}
                <div className="pt-2 border-t border-white/10 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Konsultasi Tarif & Ketersediaan:</span>
                    <span className="text-emerald-400 font-bold">Fast Response 24/7</span>
                  </div>

                  <button
                    onClick={() => handleBookingClick(currentRoute.waMessage)}
                    className="w-full bg-gradient-to-r from-blue-700 to-indigo-900 hover:from-blue-800 hover:to-indigo-950 text-white font-display font-extrabold text-xs sm:text-sm py-4 px-6 rounded-xl shadow-lg shadow-blue-900/30 transition-all flex items-center justify-center gap-2.5 cursor-pointer group"
                    id={`booking-btn-${currentRoute.id}`}
                  >
                    <MessageCircle className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
                    <span>Pesan Rute Ini via WhatsApp (081236024604)</span>
                  </button>
                </div>

              </div>

            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
