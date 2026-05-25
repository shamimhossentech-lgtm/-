import { motion } from 'motion/react';
import { BUSINESS_INFO } from '../data';
import { Wrench, ShieldAlert, Cpu, Check, ThumbsUp, Sparkles, Sliders, Milestone } from 'lucide-react';

export default function AboutSection() {
  const whyChooseUsList = [
    {
      title: "অভিজ্ঞ টেকনিশিয়ান",
      desc: "আমাদের প্রধান কারিগর মোঃ শামীম আহমেদ দীর্ঘ ৮ বছরের অধিক সময় ধরে স্মার্টফোন হার্ডওয়্যার ও জটিল সফটওয়্যার মেরামত ও সলিউশনে অভিজ্ঞ।",
      icon: <Cpu className="w-5 h-5 text-cyan-400" />
    },
    {
      title: "উন্নত ল্যাব যন্ত্রপাতি",
      desc: "ক্ষুদ্র আইসি বা মাদারবোর্ড শর্ট নির্ণয়ের জন্য আমরা হাই-ডেফিনিশন স্টেরিও মাইক্রোস্কোপ, ওসিএ ডিসপ্লে ল্যামিনেটর এবং ডিজিটাল ওসিলোস্কোপ ব্যবহার করি।",
      icon: <Wrench className="w-5 h-5 text-cyan-400" />
    },
    {
      title: "১০০% নিরাপদ সার্ভিস",
      desc: "আমরা মেরামত করার সময় আপনার পার্সোনাল ফটো, ফাইল, মেসেজ এবং ব্যাংক ডিটেইলসের সর্বোচ্চ ডাটা সিকিউরিটি এবং প্রাইভেসি বজায় রাখি।",
      icon: <ShieldAlert className="w-5 h-5 text-cyan-400" />
    },
    {
      title: "লাইভ ওয়ার্কশপ",
      desc: "আমাদের চিনাকান্দি বাজারের অফিসে আপনার সাধের প্রিয় ফোনটি আমাদের দক্ষ কারিগরের হাতের সামনেই নিরাপদভাবে মেরামতের চমৎকার সুবিধা রয়েছে।",
      icon: <Sliders className="w-5 h-5 text-cyan-400" />
    },
    {
      title: "সাশ্রয়ী ও স্বচ্ছ বাজেট",
      desc: "কোন রকম অপ্রত্যাশিত হিডেন ফি ছাড়াই সব পার্টসের দাম ও কাজের পারিশ্রমিক নির্ধারণ করা হয় যা বাজারের যেকোনো সার্ভিস সেন্টারের চেয়ে সেরা।",
      icon: <Milestone className="w-5 h-5 text-cyan-400" />
    },
    {
      title: "গ্রাহক সন্তুষ্টি গ্যারান্টি",
      desc: "আমাদের মেরামত করা ফোনের সেবায় সন্তুষ্ট না হলে আমরা ফ্রি রি-চেকিং সেবা নিশ্চিত করি। শত শত স্থানীয় গ্রাহকের নির্ভরযোগ্য প্রতিষ্ঠান 'জননী টেলিকম'।",
      icon: <ThumbsUp className="w-5 h-5 text-cyan-400" />
    }
  ];

  return (
    <section id="why-us" className="relative py-20 bg-slate-950 overflow-hidden">
      {/* Decorative vertical divider line */}
      <div className="absolute top-0 right-10 bottom-0 w-px bg-slate-900 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Intro text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-900/40 text-cyan-400 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>আমাদের কথা ও লক্ষ্য</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              জননী টেলিকম — সততা ও আস্থার ৮ বছর
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              সুনামগঞ্জ জেলার বিশ্বম্ভরপুর উপজেলার চিনাকান্দিতে সেরা প্রযুক্তি সেবা দিতে আমাদের সূচনা। আমরা বিশ্বাস করি মোবাইল ফোন শুধুমাত্র একটি ডিভাইস নয়, এটি আপনার প্রাত্যহিক জীবনের আনন্দ, যোগাযোগ এবং কাজের পরম সঙ্গী। তাই আপনার ফোনটি নষ্ট হলে যত দ্রুত সম্ভব অরিজিনাল পার্টস ও অভিজ্ঞতার সমন্বয়ে তা পূর্বের ন্যায় সচল রাখাই আমাদের টিম লিডার মোঃ শামীম আহমেদ এর মূল অঙ্গীকার।
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-cyan-950 flex items-center justify-center border border-cyan-800 text-cyan-400">
                  <Check className="w-3 h-3" />
                </div>
                <span className="text-sm font-semibold text-slate-200">শতভাগ অরিজিনাল মাদারবোর্ড বাটারি ও ডিসপ্লে পার্টস</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-cyan-950 flex items-center justify-center border border-cyan-800 text-cyan-400">
                  <Check className="w-3 h-3" />
                </div>
                <span className="text-sm font-semibold text-slate-200">অত্যাধুনিক ডায়াগনস্টিক টেস্টিং ও ফ্ল্যাশিং সিস্টেম</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-cyan-950 flex items-center justify-center border border-cyan-800 text-cyan-400">
                  <Check className="w-3 h-3" />
                </div>
                <span className="text-sm font-semibold text-slate-200">চিনাকান্দি সিএনজি স্ট্যান্ডের অত্যন্ত নিকটবর্তী লোকেশন</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative p-6 rounded-2xl bg-gradient-to-tr from-slate-900 via-slate-900 to-cyan-950/20 border border-slate-800 shadow-2xl overflow-hidden group">
              {/* Abstract cyber backdrop art */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors pointer-events-none" />
              
              <div className="relative z-10 space-y-4">
                <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-3">আমাদের সেবা প্রতিশ্রুতি</h3>
                <blockquote className="text-slate-300 italic text-sm leading-relaxed">
                  "মোবাইল সার্ভিসিংয়ের ক্ষেত্রে সততার কোনো বিকল্প নেই। অনেক কাস্টমার টেকনিক্যাল বিষয় বোঝেন না বলে প্রতারিত হন। কিন্তু জননী টেলিকমে আমরা প্রতিটা সমস্যা কাস্টমারকে বুঝিয়ে বলি এবং ওনাদের চোখের সামনেই ডিভাইস মেরামত করি। গ্রাহকদের মুখের হাসিটুকুই আমাদের ৮ বছরের উপার্জিত সবচেয়ে বড় সম্পদ।"
                </blockquote>
                <div className="flex items-center gap-3 pt-2">
                  <div className="w-10 h-10 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center font-bold text-cyan-400">
                    শ
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-100">{BUSINESS_INFO.owner}</h5>
                    <p className="text-[11px] text-cyan-400 font-medium">প্রতিষ্ঠাতা ও প্রধান টেকনিশিয়ান</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us feature cards */}
        <div>
          <h3 className="text-xl font-bold text-white text-center mb-10 select-none">কেন সুনামগঞ্জের সেরা মোবাইল সার্ভিস সেন্টার আমরা?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUsList.map((item, index) => (
              <motion.div
                id={`why-choose-card-${index}`}
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-900 transition-all duration-300 backdrop-blur-sm group"
              >
                <div className="p-3 w-11 h-11 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-4 group-hover:border-cyan-500/40 transition">
                  {item.icon}
                </div>
                <h4 className="text-base sm:text-lg font-extrabold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h4>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
