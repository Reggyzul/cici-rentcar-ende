import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TRANSLATIONS } from '../utils/translations';

interface HeaderProps {
  activeSection: string;
  onNavClick: (sectionId: string) => void;
  lang: 'ID' | 'EN';
  setLang: (lang: 'ID' | 'EN') => void;
  currentPage: 'home' | 'about' | 'tours' | 'rentals';
  setCurrentPage: (page: 'home' | 'about' | 'tours' | 'rentals') => void;
  onBookingClick: () => void;
}

export default function Header({ activeSection, onNavClick, lang, setLang, currentPage, setCurrentPage, onBookingClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const t = TRANSLATIONS[lang];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t.nav_home, id: 'home', type: 'page', pageId: 'home' },
    { label: 'Daftar Armada', id: 'cars', type: 'section', sectionId: 'cars' },
    { label: 'Rute & Trip', id: 'tours', type: 'section', sectionId: 'tours' },
    { label: 'Keunggulan', id: 'about', type: 'section', sectionId: 'about' },
    { label: t.nav_contact, id: 'contact', type: 'section', sectionId: 'contact' },
  ];

  const handleItemClick = (item: typeof navItems[0]) => {
    if (item.type === 'page') {
      setCurrentPage(item.pageId as any);
      onNavClick(item.pageId);
    } else {
      setCurrentPage('home');
      setTimeout(() => {
        onNavClick(item.sectionId as any);
      }, 100);
    }
    setIsOpen(false);
  };

  return (
    <header
      id="main-header"
      className="fixed top-0 left-0 w-full z-50 flex flex-col shadow-sm"
    >
      {/* Main Navigation Bar */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md py-2 border-b border-slate-200/80 shadow-md'
            : 'bg-white py-2.5 border-b border-slate-200/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* 1. BRAND LOGO (FAR LEFT) - CLEAN, LARGER, NO SIDE TEXT */}
            <div 
              onClick={() => handleItemClick({ label: t.nav_home, id: 'home', type: 'page', pageId: 'home' })}
              className="flex items-center cursor-pointer group shrink-0 py-1"
              id="header-logo"
            >
              <img 
                src="/logo.png" 
                alt="Cici Rentcar Ende Logo" 
                className="h-12 sm:h-14 md:h-16 w-auto object-contain drop-shadow-xs group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* 2. DESKTOP NAV ITEMS */}
            <nav className="hidden lg:flex items-center gap-2 xl:gap-3 mx-auto" id="desktop-nav">
              {navItems.map((item) => {
                const isItemActive = 
                  (item.type === 'page' && currentPage === item.pageId) ||
                  (item.type === 'section' && activeSection === item.sectionId && currentPage === 'home');
                  
                return (
                  <button
                    key={item.id}
                    onClick={() => handleItemClick(item)}
                    className={`font-sans text-xs font-extrabold uppercase tracking-wider transition-all duration-300 cursor-pointer relative px-4 py-2 rounded-full ${
                      isItemActive
                        ? 'text-blue-900 bg-blue-50 border border-blue-200 shadow-xs'
                        : 'text-[#0b192c] hover:text-blue-800 hover:bg-slate-100/80'
                    }`}
                    id={`nav-link-${item.id}`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* 3. CTA BUTTON (FAR RIGHT) - BLUE & WHITE PALETTE */}
            <div className="hidden lg:flex items-center shrink-0">
              <a
                href="https://api.whatsapp.com/send?phone=6281236024604&text=Halo%20Cici%20Rentcar%20Ende,%20saya%20ingin%20tanya%20jadwal%20dan%20pemesanan%20rental%20mobil."
                target="_blank"
                rel="noreferrer"
                className="bg-gradient-to-r from-blue-700 via-indigo-800 to-blue-900 hover:from-blue-800 hover:to-indigo-950 text-white font-sans font-extrabold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full shadow-md shadow-blue-900/20 transition-all duration-300 cursor-pointer flex items-center gap-1.5 border border-blue-400/30 hover:scale-105"
              >
                <span>PESAN WA (081236024604)</span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-3 lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2.5 rounded-xl bg-slate-100 text-[#0b192c] hover:text-blue-700 focus:outline-none cursor-pointer border border-slate-200"
                aria-label="Toggle menu"
                id="hamburger-btn"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-slate-200 shadow-xl overflow-hidden"
            id="mobile-menu"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item)}
                  className="block w-full text-left font-display font-bold text-base text-[#0b192c] hover:text-blue-700 py-3 border-b border-slate-100 cursor-pointer"
                >
                  {item.label}
                </button>
              ))}

              <div className="pt-2">
                <a
                  href="https://api.whatsapp.com/send?phone=6281236024604&text=Halo%20Cici%20Rentcar%20Ende,%20saya%20ingin%20tanya%20jadwal%20dan%20pemesanan%20rental%20mobil."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-blue-800 hover:bg-blue-900 text-white font-sans font-bold text-sm uppercase py-3.5 rounded-xl shadow-md flex items-center justify-center cursor-pointer"
                >
                  Pesan via WhatsApp (081236024604)
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}
