import { BUSINESS_INFO } from '../data';
import { Wrench, Phone, MessageSquare, MapPin, Facebook, Youtube, Github, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#02050c] border-t border-slate-900 pt-16 pb-8 overflow-hidden">
      
      {/* Glow dot */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 border-b border-slate-900 pb-12">
          
          {/* Company Brief Column */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" className="flex items-center gap-2 max-w-max">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center">
                <Wrench className="w-5 h-5 text-black" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xl font-bold text-white tracking-tight">{BUSINESS_INFO.name}</span>
                <span className="text-[9px] text-cyan-500 font-mono uppercase tracking-widest">Mobile & Software solution</span>
              </div>
            </a>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed text-left">
              চিনাকান্দি বাজার (সিএনজি স্ট্যান্ড সংলগ্ন), বিশ্বম্ভরপুরে সুনামগঞ্জ জেলার সবচেয়ে বিশ্বস্ত ও অত্যন্ত আধুনিক যন্ত্রপাতিতে সমৃদ্ধ মোবাইল ফোন ডায়াগনস্টিক ও মেরামতকারী প্রতিষ্ঠান।
            </p>
            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              <a
                id="footer-social-fb"
                href={BUSINESS_INFO.socials.facebook}
                target="_blank"
                referrerPolicy="no-referrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500 transition-colors"
                aria-label="Facebook Page"
              >
                <Facebook className="w-4.5 h-4.5" />
              </a>
              <a
                id="footer-social-yt"
                href={BUSINESS_INFO.socials.youtube}
                target="_blank"
                referrerPolicy="no-referrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500 transition-colors"
                aria-label="YouTube Channel"
              >
                <Youtube className="w-4.5 h-4.5" />
              </a>
              <a
                id="footer-social-wa"
                href={BUSINESS_INFO.socials.whatsappChat}
                target="_blank"
                referrerPolicy="no-referrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500 transition-colors"
                aria-label="WhatsApp Chat"
              >
                <MessageSquare className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Quick Page Jumps */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <h4 className="text-sm font-extrabold text-white tracking-wider uppercase font-mono">পেইজ লিঙ্ক</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400 font-medium">
              <li><a href="#home" className="hover:text-cyan-400 transition-colors">হোমপেজ</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">আমাদের সেবাসমূহ</a></li>
              <li><a href="#estimator" className="hover:text-cyan-400 transition-colors">খরচ হিসাবকারী</a></li>
              <li><a href="#why-us" className="hover:text-cyan-400 transition-colors font-mono">Why Us?</a></li>
              <li><a href="#reviews" className="hover:text-cyan-400 transition-colors">গ্রাহক রিভিউজ</a></li>
              <li><a href="#faqs" className="hover:text-cyan-400 transition-colors">সাধারণ প্রশ্নাবলী</a></li>
            </ul>
          </div>

          {/* Top Services Links */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="text-sm font-extrabold text-white tracking-wider uppercase font-mono">জনপ্রিয় সেবাসমূহ</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">অ্যান্ড্রয়েড সফটওয়্যার ফ্ল্যাশ</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">আইফোন আইক্লাউড বায়পাস</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">ডেড মাদারবোর্ড আইসি রিবলিং</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">নিখুঁত ওসিএ ডিসপ্লে ফিটিংস</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">গুগল এফআরপি (FRP) আনলকিং</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">কান্ট্রি সিম লক রিলিজ</a></li>
            </ul>
          </div>

          {/* Direct Address/Call links */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="text-sm font-extrabold text-white tracking-wider uppercase font-mono">যোগাযোগ করুন</h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-400 font-medium">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{BUSINESS_INFO.shortAddress}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-cyan-400 font-mono font-bold">
                  {BUSINESS_INFO.displayPhone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-cyan-400 font-mono">
                  {BUSINESS_INFO.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Subfooter credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <p className="text-center sm:text-left">
            &copy; {currentYear} {BUSINESS_INFO.legalName}. সর্বস্বত্ব সংরক্ষিত।
          </p>
          <div className="flex gap-4">
            <span className="select-none font-mono">Designed by Admin Panel Pro</span>
            <span className="text-cyan-500 select-none">Md. Shamim Ahmed</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
