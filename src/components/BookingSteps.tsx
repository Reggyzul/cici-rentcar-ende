import React from 'react';
import { TRANSLATIONS } from '../utils/translations';
import { motion } from 'motion/react';
import { MessageCircle, Sparkles } from 'lucide-react';

interface BookingStepsProps {
  lang: 'ID' | 'EN';
}

export default function BookingSteps({ lang }: BookingStepsProps) {
  const t = TRANSLATIONS[lang];

  const stepsList = [
    {
      step: '01',
      title: 'Pilih Mobil & Rute Perjalanan 🚗',
      description: 'Tentukan kendaraan dan rute perjalanan yang Anda butuhkan sesuai jumlah anggota rombongan Anda.',
    },
    {
      step: '02',
      title: 'Hubungi CS via WhatsApp (081236024604) 📲',
      description: 'Hubungi customer service kami melalui WhatsApp untuk konsultasi jadwal, harga, dan ketersediaan armada.',
    },
    {
      step: '03',
      title: 'Konfirmasi Penjemputan Tepat Waktu 🤝',
      description: 'Driver kami akan menjemput Anda tepat waktu di lokasi yang telah disepakati untuk memulai perjalanan.',
    },
  ];

  const handleWhatsAppContact = () => {
    const waNumber = '6281236024604';
    const text = encodeURIComponent(
      'Halo CS Cici Rentcar Ende (081236024604), saya ingin berkonsultasi mengenai pemesanan rental mobil / Trip Flores.'
    );
    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${text}`, '_blank', 'noreferrer');
  };

  return (
    <section id="steps" className="py-20 bg-slate-50 text-[#0f172a] overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-600 font-display font-extrabold text-xs tracking-wider uppercase shadow-sm">
            <Sparkles className="w-4 h-4 text-orange-600" />
            <span>CARA PEMESANAN MUDAH</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#0f172a] tracking-tight uppercase leading-tight">
            3 Langkah Cepat <span className="text-orange-600">Memesan</span>
          </h2>

          <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Proses pemesanan praktis dan cepat untuk kenyamanan rencana perjalanan Anda di Flores.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
          {stepsList.map((stepItem, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.12 }}
              key={index}
              className="bg-white rounded-3xl p-8 shadow-md border border-slate-200/90 hover:shadow-xl hover:border-orange-300 transition-all duration-300 flex flex-col items-center text-center group"
            >
              {/* Step Number Circle */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 text-white flex items-center justify-center font-display font-black text-xl shadow-lg shadow-orange-500/25 mb-6 group-hover:scale-105 transition-transform duration-300">
                {stepItem.step}
              </div>
              
              <h3 className="font-display font-bold text-lg text-[#0f172a] mb-3 group-hover:text-orange-600 transition-colors">
                {stepItem.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed font-medium max-w-xs">
                {stepItem.description}
              </p>

              {/* Direct CS action for step 2 */}
              {index === 1 && (
                <button
                  onClick={handleWhatsAppContact}
                  className="mt-5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-xs py-2.5 px-4 rounded-xl flex items-center gap-1.5 shadow-md transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>WhatsApp 081236024604</span>
                </button>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
