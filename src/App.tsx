import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MessageSquare, 
  ArrowUp, 
  Sun, 
  Moon, 
  Wrench, 
  X, 
  Check, 
  Sparkles,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

// Import our modular components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import RepairEstimator from './components/RepairEstimator';
import AboutSection from './components/AboutSection';
import GallerySection from './components/GallerySection';
import Testimonials from './components/Testimonials';
import FaqSection from './components/FaqSection';
import BlogPlaceholder from './components/BlogPlaceholder';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { BUSINESS_INFO } from './data';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLobeActive, setIsLobeActive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Sync dark class to the document node
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.style.backgroundColor = '#030712';
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.backgroundColor = '#f8fafc';
    }
  }, [darkMode]);

  // Handle scroll trigger components
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Trigger loading animation fake effect (to prevent flash of unstyled content)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`transition-colors duration-300 ${darkMode ? 'bg-[#030712] text-slate-100 dark' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* 1. Introductory Premium Loader Frame */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            id="global-launcher-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[999] bg-[#030712] flex flex-col items-center justify-center"
          >
            <div className="space-y-6 text-center">
              {/* Spinner Graphic */}
              <div className="relative w-20 h-20 mx-auto">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 animate-spin opacity-80" />
                <div className="absolute inset-2 bg-[#030712] rounded-xl flex items-center justify-center">
                  <Wrench className="w-8 h-8 text-cyan-400 animate-pulse" />
                </div>
              </div>

              {/* Loader Copy */}
              <div className="space-y-1.5">
                <h3 className="text-2xl font-black text-white tracking-widest bg-gradient-to-r from-white via-slate-100 to-cyan-400 bg-clip-text text-transparent">
                  {BUSINESS_INFO.name}
                </h3>
                <p className="text-xs text-cyan-500 font-mono tracking-widest uppercase">
                  World-Class Repair Workbench Loading
                </p>
              </div>

              {/* Micro diagnostic bar */}
              <div className="w-48 h-1 bg-slate-900 rounded-full mx-auto overflow-hidden">
                <div className="h-full bg-cyan-500 rounded-full animate-infinite-loading" style={{
                  width: '50%',
                  animation: 'shimmerLoad 1.5s infinite ease-in-out'
                }} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Styled animation helper for standard infinite load loader */}
      <style>{`
        @keyframes shimmerLoad {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>

      {/* 2. Primary Page Blocks */}
      {!isLoading && (
        <>
          {/* Header/Nav */}
          <Navbar />

          {/* Home Hero banner */}
          <Hero />

          {/* Trust statistics counters */}
          <Stats />

          {/* Service grid searchable directory */}
          <Services />

          {/* Interactive Cost estimator diagnostic tool */}
          <RepairEstimator />

          {/* Educational blog news cards */}
          <BlogPlaceholder />

          {/* Why choose us detailed analysis */}
          <AboutSection />

          {/* Lab workspaces visual highlights gallery */}
          <GallerySection />

          {/* Social ratings reviews slider */}
          <Testimonials />

          {/* Common queries (FAQ Accordions) */}
          <FaqSection />

          {/* Location physical, Call & Submission Form section */}
          <ContactSection />

          {/* Footer details legal copyrights */}
          <Footer />

          {/* 3. Floating Quick Control Utilities */}
          
          {/* Floating Theme (Dark/Light) Switcher Tag */}
          <div className="fixed bottom-6 left-6 z-40">
            <button
              id="theme-toggler-btn"
              onClick={() => setDarkMode(!darkMode)}
              className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500 text-slate-300 hover:text-cyan-400 transition-all duration-300 shadow-xl backdrop-blur"
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          {/* Floating WhatsApp Glower Dialog Control */}
          <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
            
            {/* Pop-up message box trigger helper */}
            <AnimatePresence>
              {isLobeActive && (
                <motion.div
                  id="wa-glower-popup"
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 10 }}
                  className="bg-slate-950 border border-emerald-950 p-4 rounded-2xl shadow-2xl max-w-[280px] text-left"
                >
                  <div className="flex justify-between items-start gap-2 border-b border-slate-900 pb-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                      <span className="text-xs font-bold text-slate-200">{BUSINESS_INFO.owner}</span>
                    </div>
                    <button id="wa-glower-close" onClick={() => setIsLobeActive(false)} className="text-slate-500 hover:text-white">
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <p className="text-[11px] leading-relaxed text-slate-300">
                    আসসালামু আলাইকুম। আপনার ফোনের কী সমস্যা হচ্ছে? আমাকে সরাসরি জানালে এখনই সমাধান বা বাজেট জানিয়ে দিতে পারবো।
                  </p>
                  <a
                    id="wa-popup-direct-chat"
                    href={BUSINESS_INFO.socials.whatsappChat}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="mt-3 flex items-center justify-center gap-1.5 py-1.5 w-full bg-emerald-500 hover:bg-emerald-400 text-black text-[10px] font-black rounded-lg transition"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>চ্যাট শুরু করুন</span>
                  </a>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Glowing Main float button */}
            <button
              id="wa-floating-glower-trigger"
              onClick={() => setIsLobeActive(!isLobeActive)}
              className="p-4 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-600 text-black focus:outline-none shadow-xl hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all animate-bounce"
              style={{ animationDuration: '3s' }}
              aria-label="Contact via WhatsApp"
            >
              <MessageSquare className="w-6 h-6" />
            </button>
          </div>

          {/* Floating Scroll To Top Button */}
          <AnimatePresence>
            {showScrollTop && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="fixed bottom-24 right-6 z-40"
              >
                <button
                  id="scroll-to-top-btn"
                  onClick={handleScrollToTop}
                  className="p-3 rounded-xl bg-slate-900/95 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500 transition-all shadow-md backdrop-blur"
                  aria-label="Scroll to top"
                >
                  <ArrowUp className="w-4.5 h-4.5" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Sticky Quick Dial button for cellular layouts */}
          <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#060b18]/90 backdrop-blur border-t border-cyan-950/40 p-3 grid grid-cols-2 gap-3 shadow-2xl">
            <a
              id="sticky-mobile-phone"
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 text-slate-200 text-xs font-bold border border-slate-800 shadow"
            >
              <Phone className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span>কল করুন</span>
            </a>
            <a
              id="sticky-mobile-whatsapp"
              href={BUSINESS_INFO.socials.whatsappChat}
              target="_blank"
              referrerPolicy="no-referrer"
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black text-xs font-black shadow"
            >
              <MessageSquare className="w-4 h-4" />
              <span>হোয়াটসঅ্যাপ</span>
            </a>
          </div>
        </>
      )}

    </div>
  );
}
