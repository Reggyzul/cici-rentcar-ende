import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { UserCheck, Clock, ShieldCheck, Tag, Sparkles, MessageSquare } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface AboutProps {
  lang: 'ID' | 'EN';
}

export default function About({ lang }: AboutProps) {
  const [showFullStory, setShowFullStory] = useState(false);
  const t = TRANSLATIONS[lang];

  const keyStrengths = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-luxury-gold" />,
      title: t.strength_clean_title,
      description: t.strength_clean_desc
    },
    {
      icon: <UserCheck className="w-5 h-5 text-luxury-gold" />,
      title: t.strength_driver_title,
      description: t.strength_driver_desc
    },
    {
      icon: <Clock className="w-5 h-5 text-luxury-gold" />,
      title: t.strength_time_title,
      description: t.strength_time_desc
    },
    {
      icon: <Tag className="w-5 h-5 text-luxury-gold" />,
      title: t.strength_price_title,
      description: t.strength_price_desc
    }
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* About Left: The Artistic Card */}
          <div className="lg:col-span-5 relative" id="about-image-card">
            <div className="relative p-6 bg-luxury-charcoal rounded-[40px] shadow-2xl overflow-hidden group">
              
              {/* Card Header branding inside */}
              <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                <p className="text-[10px] font-display font-medium tracking-[0.2em] text-gray-400">
                  {t.about_card_tag}
                </p>
                <div className="flex flex-col items-end">
                  <span className="font-display font-bold text-xs tracking-tight text-luxury-gold">
                    CICI RENTCAR ENDE
                  </span>
                  <span className="text-[7px] text-gray-400 tracking-wider">ENDE - FLORES - NTT</span>
                </div>
              </div>

              {/* Central Premium vehicle image inside frame */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg mb-6 border border-white/5 bg-black/20">
                <img
                  src="/innova3.avif"
                  alt="Toyota Innova Reborn Cici Rentcar Ende"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-1.5 bg-luxury-gold/90 text-white font-display font-bold text-[10px] px-2.5 py-1 rounded">
                  <Sparkles className="w-3 h-3" />
                  <span>{t.about_badge}</span>
                </div>
              </div>

              {/* Gold Accented Callout Text inside frame */}
              <div className="space-y-3">
                <div className="flex items-baseline justify-between">
                  <h4 className="font-display font-bold text-base text-white tracking-tight uppercase leading-snug">
                    {lang === 'EN' ? (
                      <>
                        BEST TRAVEL <br />
                        <span className="text-luxury-gold">EXPERIENCE</span> IN FLORES
                      </>
                    ) : (
                      <>
                        PENGALAMAN RENTAL <br />
                        TERBAIK DI <span className="text-luxury-gold">PULAU FLORES</span>
                      </>
                    )}
                  </h4>
                  <div className="text-right">
                    <span className="block font-display font-black text-3xl text-luxury-gold leading-none">4.9</span>
                    <span className="text-[8px] text-gray-400">{t.about_card_rating_label}</span>
                  </div>
                </div>
                <p className="text-[11px] text-gray-400 leading-relaxed font-sans">
                  {lang === 'EN' 
                    ? 'Enjoy the breathtaking beauty of Flores without driving fatigue. Trust your journey to local experts!' 
                    : 'Nikmati keindahan eksotis Pulau Flores tanpa lelah menyetir. Serahkan perjalanan Anda kepada tim ahli lokal kami!'}
                </p>
              </div>

              {/* Decorative design nodes in frame */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-luxury-gold/5 rounded-full blur-xl pointer-events-none" />
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-luxury-gold/10 rounded-full blur-xl pointer-events-none" />
            </div>
          </div>

          {/* About Right: The Content */}
          <div className="lg:col-span-7 space-y-6 flex flex-col justify-center animate-fade-in" id="about-content">
            
            <div className="space-y-2">
              <span className="font-display font-bold text-sm text-luxury-gold tracking-widest uppercase">
                {t.about_tag}
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-gray-900 tracking-tight leading-none uppercase">
                {t.about_title_1} <br />
                <span className="text-luxury-gold">{t.about_title_2}</span>
              </h2>
            </div>

            <div className="space-y-4 font-sans text-gray-600 leading-relaxed text-sm sm:text-base">
              <p>
                {t.about_desc_1}
              </p>
              <p>
                {t.about_desc_2}
              </p>
            </div>

            {/* Strengths Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {keyStrengths.map((strength, idx) => (
                <div key={idx} className="bg-amber-50/30 p-4 rounded-2xl border border-amber-100/50 hover:border-luxury-gold/30 transition-all">
                  <div className="mb-2">{strength.icon}</div>
                  <h4 className="font-display font-bold text-sm text-gray-900 mb-1">{strength.title}</h4>
                  <p className="font-sans text-xs text-gray-500 leading-relaxed">{strength.description}</p>
                </div>
              ))}
            </div>

            {/* Buttons Row */}
            <div className="flex items-center gap-4 pt-4">
              <button
                onClick={() => setShowFullStory(!showFullStory)}
                className="bg-luxury-gold hover:bg-luxury-gold-dark text-white font-display font-bold text-sm px-6 py-3.5 rounded-full shadow-md transition-colors cursor-pointer"
                id="about-readmore-btn"
              >
                {showFullStory ? t.about_read_less : t.about_read_more}
              </button>
              
              <button
                onClick={() => {
                  const target = document.getElementById('contact');
                  if (target) target.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border border-gray-200 hover:bg-gray-50 text-gray-700 hover:text-luxury-gold p-3 rounded-full transition-all cursor-pointer"
                title="Hubungi Kami"
                id="about-contact-icon-btn"
              >
                <MessageSquare className="w-5 h-5" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
