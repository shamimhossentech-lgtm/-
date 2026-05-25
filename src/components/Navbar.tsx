import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, MessageSquare, Wrench, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'হোম', href: '#home' },
    { name: 'আমাদের সেবা', href: '#services' },
    { name: 'খরচ হিসাবকারী', href: '#estimator' },
    { name: 'কেন আমরা', href: '#why-us' },
    { name: 'গ্রাহক মতামত', href: '#reviews' },
    { name: 'যোগাযোগ', href: '#contact' },
  ];

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#030712]/90 backdrop-blur-md border-b border-cyan-950/50 py-3 shadow-lg shadow-cyan-950/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a id="nav-logo" href="#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-md shadow-cyan-500/20 group-hover:shadow-cyan-400/40 transition-all">
              <Wrench className="w-5 h-5 text-black" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-white via-slate-100 to-cyan-400 bg-clip-text text-transparent tracking-tight">
                {BUSINESS_INFO.name}
              </span>
              <span className="text-[10px] text-cyan-500 font-mono tracking-widest uppercase">
                Mobile Repair & Software Sells
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <a
                  id={`nav-link-${link.href}`}
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors relative group py-2"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* Quick CTAs */}
            <div className="flex items-center gap-3">
              <a
                id="header-cta-phone"
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 text-sm font-medium hover:bg-slate-800 hover:border-slate-700 transition"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>কল করুন</span>
              </a>
              <a
                id="header-cta-wa"
                href={BUSINESS_INFO.socials.whatsappChat}
                target="_blank"
                referrerPolicy="no-referrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-semibold text-sm hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-500/10 hover:shadow-cyan-400/20 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#0a0f1d]/98 border-b border-cyan-950/50 overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-3">
              {navLinks.map((link) => (
                <a
                  id={`nav-link-mobile-${link.href}`}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-slate-300 hover:text-cyan-400 hover:bg-slate-900/60 transition font-medium text-base border-l-2 border-transparent hover:border-cyan-500"
                >
                  {link.name}
                </a>
              ))}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-800">
                <a
                  id="mobile-nav-phone"
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-slate-900 text-slate-200 text-sm font-medium border border-slate-800 hover:bg-slate-800"
                >
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>কল করুন</span>
                </a>
                <a
                  id="mobile-nav-wa"
                  href={BUSINESS_INFO.socials.whatsappChat}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-black text-sm font-bold shadow-md shadow-cyan-500/10 hover:from-cyan-400"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
