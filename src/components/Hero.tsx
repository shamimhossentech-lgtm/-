import { motion } from 'motion/react';
import { Phone, MessageSquare, Wrench, ShieldCheck, MapPin, CheckCircle2, Award } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-950 via-slate-950 to-blue-950/20"
    >
      {/* Background Grids & Ambient Lights */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0a_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Glowing atmospheric circles */}
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none animate-glow" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none animate-glow" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content Block */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Status Indicator */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-cyan-400 text-xs font-semibold backdrop-blur-sm shadow-inner"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>লাইভ সার্ভিস চালু আছে • ১০:০০ AM - ৯:০০ PM</span>
            </motion.div>

            {/* Headline */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight"
              >
                জননী টেলিকম
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 text-3xl sm:text-4xl lg:text-5xl mt-2 font-bold select-none">
                  বিশ্বস্ত মোবাইল সার্ভিসিং ও সফটওয়্যার সলিউশন
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-slate-300 max-w-2xl leading-relaxed"
              >
                সব ধরনের স্মার্টফোন রিপেয়ার, ডেড বুট ফিক্স, অ্যান্ড্রয়েড ও আইফোন ফ্ল্যাশিং, FRP এবং কান্ট্রি লক আনলকের নির্ভরযোগ্য ঠিকানা। সুনামগঞ্জের বিশ্বম্ভরপুর উপজেলার চিনাকান্দিতে শতভাগ সততা ও ওয়ারেন্টি সহকারে সেবা প্রদান।
              </motion.p>
            </div>

            {/* Highlighted badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3"
            >
              <div className="flex items-center gap-2 p-3 rounded-lg bg-slate-900/50 border border-slate-800/60 backdrop-blur-sm">
                <ShieldCheck className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-200">১০০% নিরাপদ ডেটা</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-slate-900/50 border border-slate-800/60 backdrop-blur-sm">
                <Award className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-200">{BUSINESS_INFO.experience} অভিজ্ঞতা</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-slate-900/50 border border-slate-800/60 backdrop-blur-sm col-span-2 sm:col-span-1">
                <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-200">চিনাকান্দি বাজার</span>
              </div>
            </motion.div>

            {/* Call To Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4 items-center"
            >
              <a
                id="hero-cta-wa"
                href={BUSINESS_INFO.socials.whatsappChat}
                target="_blank"
                referrerPolicy="no-referrer"
                className="flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-bold text-black text-base hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/40 transform hover:-translate-y-0.5"
              >
                <MessageSquare className="w-5 h-5" />
                <span>WhatsApp সমাধান</span>
              </a>

              <a
                id="hero-cta-call"
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-900 text-slate-200 text-base font-semibold border border-slate-800 hover:bg-slate-800 transition active:scale-95"
              >
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>কল করুন এখনই</span>
              </a>

              <a
                id="hero-cta-services"
                href="#services"
                className="px-5 py-2.5 rounded-lg text-slate-400 hover:text-cyan-400 text-sm font-medium transition duration-200"
              >
                সার্ভিসসমূহ দেখুন &rarr;
              </a>
            </motion.div>

            {/* Verified Trust stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="pt-4 flex items-center gap-4 text-xs text-slate-400 border-t border-slate-900"
            >
              <div className="flex -space-x-2">
                <div className="w-7 h-7 rounded-full bg-slate-800 border-2 border-slate-950 flex items-center justify-center text-[10px] font-bold text-cyan-400">শ</div>
                <div className="w-7 h-7 rounded-full bg-slate-800 border-2 border-slate-950 flex items-center justify-center text-[10px] font-bold text-cyan-400">আ</div>
                <div className="w-7 h-7 rounded-full bg-slate-800 border-2 border-slate-950 flex items-center justify-center text-[10px] font-bold text-cyan-400">স</div>
              </div>
              <div>
                <span className="text-cyan-400 font-bold font-mono">৫/৫ রেটিং</span> সাধারণ গ্রাহক এবং স্থানীয় ব্যবসায়ীদের আস্থার প্রতীক।
              </div>
            </motion.div>
          </div>

          {/* Premium Image mockup */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative mx-auto max-w-sm lg:max-w-none group"
            >
              {/* Decorative backglow shadows */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-40 transition-opacity duration-500" />
              
              {/* Main Card with Image */}
              <div className="relative rounded-3xl border border-slate-800 bg-slate-900/60 p-3 overflow-hidden backdrop-blur-md shadow-2xl">
                <img
                  src="/src/assets/images/hero_repair_tech_1779706256185.png"
                  alt="জননী টেলিকম মোবাইল রিপেয়ার স্টেশন"
                  className="w-full aspect-[16/9] object-cover rounded-2xl border border-slate-800 shadow"
                  referrerPolicy="no-referrer"
                />
                
                {/* Embedded Floating Metrics Overlay */}
                <div className="mt-4 p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">প্রধান টেকনিশিয়ান</span>
                    <span className="text-sm font-semibold text-slate-100">{BUSINESS_INFO.owner}</span>
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">মোবাইল কোড</span>
                    <span className="text-sm font-bold text-cyan-400">০১৭২0-৩০২৯০১</span>
                  </div>
                </div>
              </div>

              {/* Float micro tag 1 */}
              <div className="absolute -top-4 -left-4 p-3 rounded-xl bg-slate-900/90 border border-cyan-800/50 shadow flex items-center gap-2 backdrop-blur animate-bounce" style={{ animationDuration: '4s' }}>
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span className="text-xs font-semibold text-slate-100">হ্যান্ড-অন মাদারবোর্ড ডিলার</span>
              </div>

              {/* Float micro tag 2 */}
              <div className="absolute -bottom-4 -right-4 p-3 rounded-xl bg-slate-900/90 border border-cyan-800/50 shadow flex items-center gap-2 backdrop-blur animate-bounce" style={{ animationDuration: '6s', animationDelay: '1s' }}>
                <Wrench className="w-5 h-5 text-cyan-400" />
                <span className="text-xs font-semibold text-slate-100">ওসিএ ডিসপ্লে ফিটিংস</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
