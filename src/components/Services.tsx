import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  SERVICES_LIST, 
  BUSINESS_INFO 
} from '../data';
import { ServiceItem } from '../types';
import * as Icons from 'lucide-react';
import { Search, Sparkles, Filter, ChevronRight, MessageSquareCode } from 'lucide-react';

// Help helper to resolve icons from Lucide dynamically
function GetServiceIcon({ iconName, className }: { iconName: string; className?: string }) {
  // Map dynamic service item keys to safe Lucide Icons
  const iconMap: Record<string, any> = {
    Cpu: Icons.Cpu,
    Smartphone: Icons.Smartphone,
    DownloadCloud: Icons.Download,
    KeyRound: Icons.Key,
    Lock: Icons.Lock,
    Globe: Icons.Globe,
    ZapOff: Icons.ZapOff,
    Layers: Icons.Layers,
    BatteryCharging: Icons.Battery,
    PlugZap: Icons.Plug,
    Droplet: Icons.Droplet,
    Volume2: Icons.Volume2,
    Camera: Icons.Camera,
    Fingerprint: Icons.Fingerprint,
    RefreshCw: Icons.RefreshCw
  };

  const IconComp = iconMap[iconName] || Icons.Wrench;
  return <IconComp className={className} />;
}

export default function Services() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'software' | 'hardware' | 'unlocking'>('all');

  // Filter logic
  const filteredServices = useMemo(() => {
    return SERVICES_LIST.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            item.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = activeTab === 'all' || item.category === activeTab;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeTab]);

  const categories = [
    { id: 'all', label: 'সব সার্ভিস (All)' },
    { id: 'hardware', label: 'হার্ডওয়্যার রিপেয়ার' },
    { id: 'software', label: 'সফটওয়্যার সলিউশন' },
    { id: 'unlocking', label: 'লক ও আনলক' },
  ] as const;

  return (
    <section id="services" className="relative py-20 bg-slate-950 overflow-hidden">
      {/* Decorative top border glow */}
      <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-900/60 text-cyan-400 text-xs font-semibold"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>প্রফেশনাল সার্ভিস ল্যাব</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            আমাদের মোবাইল সার্ভিসিং সমূহ
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            আপনার স্মার্টফোনে যেকোনো ধরণের হার্ডওয়্যার সমস্যা বা সফটওয়্যার জটিলতা দেখা দিলে, সুনামগঞ্জ বিশ্বম্ভরপুরের নির্ভরযোগ্য স্থানে নিয়ে আসুন। প্রতিটি কাজ দ্রুততার সাথে নিখুঁতভাবে সমাধান করা হয়।
          </p>
        </div>

        {/* Searching & Filtering Panel */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5 bg-slate-900/60 p-1 rounded-xl border border-slate-800/80 backdrop-blur max-w-max">
            {categories.map((c) => (
              <button
                id={`cat-tab-${c.id}`}
                key={c.id}
                onClick={() => setActiveTab(c.id)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-250 ${
                  activeTab === c.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-black shadow-md shadow-cyan-500/10'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:max-w-xs group">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400 group-focus-within:text-cyan-400 transition-colors">
              <Search className="w-4 h-4" />
            </span>
            <input
              id="service-search-input"
              type="text"
              placeholder="সার্ভিস খুঁজুন... (যেমন: ডিসপ্লে, আনলক)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0a0f1d] border border-slate-800 rounded-xl py-2.5 pl-10 pr-4 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20 transition-all shadow"
            />
          </div>
        </div>

        {/* Services Grid with Motion Layout */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => (
              <motion.div
                id={`service-card-${service.id}`}
                layout
                key={service.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2, delay: index * 0.02 }}
                className="group relative flex flex-col justify-between p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-900/30 border border-slate-800/70 hover:border-cyan-950/80 transition-all duration-300 backdrop-blur-sm hover:-translate-y-1 shadow-md hover:shadow-cyan-950/20"
              >
                {/* Micro accent corner border */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-transparent group-hover:border-cyan-500/30 rounded-tr-2xl transition-all pointer-events-none" />
                
                <div>
                  {/* Icon Panel & Popular Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-tr from-cyan-950/50 to-blue-950/50 border border-cyan-900/40 text-cyan-400 group-hover:from-cyan-900/30 group-hover:to-blue-900/30 group-hover:text-cyan-300 group-hover:border-cyan-500/30 transition-all">
                      <GetServiceIcon iconName={service.iconName} className="w-6 h-6" />
                    </div>
                    {service.popular && (
                      <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] sm:text-xs font-bold font-mono tracking-wide">
                        POPULAR
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm mt-2 leading-relaxed h-[4.5rem] overflow-hidden">
                    {service.description}
                  </p>
                </div>

                {/* Foot Action Price & WhatsApp Button Link */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-500 font-medium block">আনুমানিক বাজেট</span>
                    <span className="text-xs sm:text-sm font-bold text-slate-200 font-mono">
                      {service.bdtRange}
                    </span>
                  </div>

                  <a
                    id={`service-wa-order-${service.id}`}
                    href={`https://wa.me/8801720302901?text=${encodeURIComponent(
                      `আসসালামু আলাইকুম শামীম ভাই, আমি আপনাদের জননী টেলিকম ওয়েবসাইট থেকে আপনার "${service.title}" সার্ভিসটি সম্পর্কে জানতে চাই। আমার ফোনে সমস্যা হচ্ছে।`
                    )}`}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 text-slate-300 hover:text-black hover:bg-cyan-400 border border-slate-800 group-hover:border-cyan-900 transition-all text-xs font-semibold"
                  >
                    <span>যোগাযোগ</span>
                    <ChevronRight className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Not Found View */}
        {filteredServices.length === 0 && (
          <div className="text-center py-16">
            <p className="text-slate-500 text-sm">দুঃখিত, আপনার খোঁজা শব্দটি দিয়ে কোনো সার্ভিস পাওয়া যায়নি।</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveTab('all'); }}
              className="text-cyan-400 text-xs font-bold hover:underline mt-2"
            >
              সবগুলো সার্ভিস দেখতে রিসেট করুন
            </button>
          </div>
        )}

        {/* Warning Callout Card */}
        <div className="mt-16 bg-gradient-to-r from-cyan-950/20 via-blue-950/20 to-transparent border border-cyan-900/40 p-6 rounded-2xl flex flex-col sm:flex-row items-center gap-4">
          <div className="p-3 rounded-full bg-cyan-950/50 text-cyan-400">
            <MessageSquareCode className="w-6 h-6" />
          </div>
          <div className="text-center sm:text-left space-y-1">
            <h4 className="text-sm font-bold text-slate-200">এখানে আপনার প্রয়োজনীয় নির্দিষ্ট সার্ভিসটি খুঁজে পাচ্ছেন না?</h4>
            <p className="text-xs text-slate-400">ব্যস্ত হবেন না, আপনার স্মার্টফোনের সমস্যাটি সরাসরি শামীম ভাইকে জানাতে পারেন। আমরা সব ধরণের মাদারবোর্ড লেভেলের জটিল কাজও সমাধান করি।</p>
          </div>
          <a
            id="services-custom-query"
            href={`https://wa.me/8801720302901?text=${encodeURIComponent(
              "আসসালামু আলাইকুম মোঃ শামীম ভাই, আমার ফোনে একটি ভিন্ন ধরণের সমস্যা রয়েছে। আমি এটি মেরামত করার বিষয়ে বিস্তারিত জানতে চাই।"
            )}`}
            target="_blank"
            referrerPolicy="no-referrer"
            className="sm:ml-auto w-full sm:w-auto text-center px-4 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-black text-xs font-bold whitespace-nowrap transition"
          >
            সরাসরি হোয়াটসঅ্যাপ করুন &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
