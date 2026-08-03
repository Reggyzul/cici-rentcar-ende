import React from 'react';
import { ShieldCheck, UserCheck, Clock, Tag, Sparkles } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface AboutProps {
  lang: 'ID' | 'EN';
}

export default function About({ lang }: AboutProps) {
  const t = TRANSLATIONS[lang];

  const keyStrengths = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-orange-600" />,
      title: "Armada Selalu Prima & Terawat",
      description: "Kendaraan rutin menjalani inspeksi berkala, AC dingin, dan kabin senantiasa bersih steril."
    },
    {
      icon: <UserCheck className="w-6 h-6 text-orange-600" />,
      title: "Driver Lokal Berpengalaman",
      description: "Driver ramah, profesional, dan sangat paham rute wisata serta kondisi medan di seluruh Flores."
    },
    {
      icon: <Clock className="w-6 h-6 text-orange-600" />,
      title: "Tepat Waktu & Pelayanan Ramah",
      description: "Penjemputan di Bandara H. Hasan Aroeboesman Ende, hotel, atau lokasi pilihan secara tepat waktu 24/7."
    },
    {
      icon: <Tag className="w-6 h-6 text-orange-600" />,
      title: "Harga Transparan (Tanpa Biaya Tersembunyi)",
      description: "Tarif sewa jelas dan terjangkau mulai dari Rp 800.000 / hari sudah termasuk pengemudi berpengalaman."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white text-[#0f172a] overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-600 font-display font-extrabold text-xs tracking-wider uppercase shadow-sm">
            <Sparkles className="w-4 h-4 text-orange-600" />
            <span>MENGAPA MEMILIH KAMI?</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#0f172a] tracking-tight uppercase leading-tight">
            Keunggulan Layanan <span className="text-orange-600">Cici Rentcar Ende</span>
          </h2>

          <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Komitmen utama kami adalah memberikan pengalaman perjalanan di Pulau Flores yang paling aman, nyaman, dan terpercaya.
          </p>
        </div>

        {/* 4 Strengths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyStrengths.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 hover:shadow-xl hover:border-orange-300 transition-all duration-300 text-left flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-orange-100/80 text-orange-600 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="font-display font-bold text-lg text-[#0f172a] group-hover:text-orange-600 transition-colors">
                  {item.title}
                </h3>
                <p className="font-sans text-xs text-slate-600 leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
