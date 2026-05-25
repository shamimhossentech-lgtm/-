import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Eye, X, ZoomIn } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  tag: string;
  imageUrl: string;
  description: string;
}

export default function GallerySection() {
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: "gal-1",
      title: "নিখুঁত ডিসপ্লে ও টাচ স্ক্রিন ফিটিং",
      tag: "Display Change",
      imageUrl: "/src/assets/images/service_screen_repair_1779706275130.png",
      description: "ওসিএ ল্যামিনেটর মেথডে নতুন ব্র্যান্ডের মত নিখুঁত ডিসপ্লে এবং টাচ গ্লাস প্রতিস্থাপন।"
    },
    {
      id: "gal-2",
      title: "মাইক্রোস্কোপ মাদারবোর্ড ডায়াগনসিস",
      tag: "Motherboard IC Work",
      imageUrl: "https://picsum.photos/seed/motherboard-repair/800/600",
      description: "অকুলার ৮X মাইক্রোস্কোপ ব্যবহার করে পাওয়ার ও সিপিইউ আইসির ফাটল বা ড্যামেজ ট্র্যাক করা।"
    },
    {
      id: "gal-3",
      title: "মোবাইল আনলকিং ও ফার্মওয়্যার রি-রাইট",
      tag: "Software Tools",
      imageUrl: "https://picsum.photos/seed/flashing-pc/800/600",
      description: "সলিড সফটওয়্যার ফ্ল্যাশ টুলের মাধ্যমে ডেড বুটলুপ বা মেমরি রাইট এরর ফিক্সিং।"
    },
    {
      id: "gal-4",
      title: "প্রফেশনাল টেকনিশিয়ান ওয়ার্কবেঞ্চ",
      tag: "Technical Workbench",
      imageUrl: "/src/assets/images/hero_repair_tech_1779706256185.png",
      description: "সকল ইএসডি সার্টিফাইড নিরাপদ টেস্টিং সরঞ্জাম নিয়ে মোঃ শামীম আহমেদ এর ওয়ার্কস্টেশন।"
    },
    {
      id: "gal-5",
      title: "অরিজিনাল মোবাইল ব্যাটারি স্টক",
      tag: "Original Parts",
      imageUrl: "https://picsum.photos/seed/phone-battery/800/600",
      description: "বিভিন্ন নামকরা ব্র্যান্ডের আমদানিকৃত ১০০% অরিজিনাল ব্যাটারি পার্টস।"
    },
    {
      id: "gal-6",
      title: "এফআরপি (FRP) গুগল একাউন্ট বাইপাস",
      tag: "Bypass Solutions",
      imageUrl: "https://picsum.photos/seed/phone-lock/800/600",
      description: "অফিসিয়াল একাউন্ট বাইপাস টুলের সাহায্যে দ্রুততার সাথে কান্ট্রি লক অপ্টিমাইজেশন।"
    }
  ];

  return (
    <section id="gallery" className="relative py-20 bg-[#040915] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Gallery Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-900/40 text-cyan-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>গ্যালারি অ্যান্ড ল্যাব</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            আমাদের কাজের গ্যালারি
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            জননী টেলিকম ল্যাবের লাইভ মেরামত, অত্যাধুনিক হার্ডওয়্যার যন্ত্রপাতি এবং পেশাদার কাজের কয়েকটি চিত্র। প্রতিটি ছবি আমাদের কাজের দক্ষতা প্রকাশ করে।
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              id={`gallery-item-${item.id}`}
              key={item.id}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              onClick={() => setActiveImage(item)}
              className="relative rounded-2xl border border-slate-800/80 overflow-hidden bg-slate-900/40 group cursor-pointer aspect-4/3"
            >
              {/* Image */}
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Tint Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-85 transition-opacity" />

              {/* Eye Button Overlay */}
              <div className="absolute top-4 right-4 p-2 bg-slate-900/80 border border-slate-700/80 text-cyan-400 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Eye className="w-4 h-4" />
              </div>

              {/* Title descriptions */}
              <div className="absolute inset-x-0 bottom-0 p-5 space-y-1">
                <span className="text-[10px] sm:text-xs font-extrabold text-cyan-400 font-mono tracking-wider uppercase bg-cyan-950/50 px-2 py-0.5 rounded border border-cyan-850 max-w-max block">
                  {item.tag}
                </span>
                <h4 className="text-sm sm:text-base font-bold text-white transition-colors group-hover:text-cyan-300">
                  {item.title}
                </h4>
                <p className="text-slate-400 text-[11px] sm:text-xs leading-normal opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                  {item.description}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Lightbox Popout Modal for Gallery Enlargements */}
        <AnimatePresence>
          {activeImage && (
            <motion.div
              id="gallery-lightbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
              onClick={() => setActiveImage(null)}
            >
              <div 
                className="relative bg-slate-950 border border-slate-800 rounded-3xl p-3 max-w-2xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close hotkey button */}
                <button
                  id="gallery-lightbox-close"
                  onClick={() => setActiveImage(null)}
                  className="absolute -top-12 right-0 p-2 text-slate-300 hover:text-white flex items-center gap-1.5 focus:outline-none"
                >
                  <X className="w-5 h-5" />
                  <span className="text-xs font-bold">বন্ধ করুন</span>
                </button>

                <img
                  src={activeImage.imageUrl}
                  alt={activeImage.title}
                  className="w-full h-auto aspect-4/3 object-cover rounded-2xl border border-slate-900"
                  referrerPolicy="no-referrer"
                />

                <div className="p-4 space-y-2">
                  <span className="text-xs text-cyan-400 font-bold tracking-widest">{activeImage.tag}</span>
                  <h3 className="text-lg font-bold text-white">{activeImage.title}</h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{activeImage.description}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
