import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { REVIEWS } from '../data';
import { Star, ChevronLeft, ChevronRight, MessageSquare, Quote } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1));
  };

  const current = REVIEWS[currentIndex];

  return (
    <section id="reviews" className="relative py-20 bg-slate-950 overflow-hidden">
      {/* Decorative grids */}
      <div className="absolute top-1/2 left-10 w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-900/40 text-cyan-400 text-xs font-semibold">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>গ্রাহক ও ব্যবসা আস্থার রিভিউ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            গ্রাহকদের বাস্তব অভিজ্ঞতা
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            চিনাকান্দি বাজার এবং সুনামগঞ্জের বিভিন্ন অঞ্চল থেকে আসা কাস্টমারদের সত্য ও কৃতজ্ঞ মতামত। আমরা আমাদের সেবার সর্বোচ্চ মান দিয়ে গ্রাহক খুশি রাখি।
          </p>
        </div>

        {/* Testimonial Active Slider Box */}
        <div className="max-w-4xl mx-auto relative">
          
          <AnimatePresence mode="wait">
            <motion.div
              id={`review-slide-${current.id}`}
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="relative p-8 sm:p-12 rounded-3xl bg-slate-900/40 border border-slate-800/80 backdrop-blur shadow-2xl space-y-6"
            >
              {/* Quote marks */}
              <Quote className="absolute top-6 right-6 w-16 h-16 text-cyan-500/5 pointer-events-none" />

              {/* Rating stars */}
              <div className="flex gap-1.5 text-amber-400">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Review Comment Text */}
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-medium">
                " {current.comment} "
              </p>

              {/* Divider */}
              <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500" />

              {/* Review Author Metadata */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-cyan-950 to-blue-950 border border-cyan-850 flex items-center justify-center font-extrabold text-cyan-400 font-mono">
                    {current.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-100">{current.name}</h4>
                    <p className="text-xs text-slate-400 font-medium">{current.location}</p>
                  </div>
                </div>

                <div className="text-left sm:text-right">
                  <span className="text-[10px] text-slate-500 block font-semibold">ডিভাইস মেরামত</span>
                  <span className="text-xs font-bold text-cyan-400 bg-cyan-950/30 border border-cyan-900 px-3 py-1 rounded-full font-mono mt-0.5 inline-block">
                    {current.device}
                  </span>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Slide Arrow Navigator Buttons */}
          <div className="flex justify-center sm:justify-end gap-3 mt-6">
            <button
              id="slider-nav-prev"
              onClick={prevReview}
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500 hover:bg-slate-800 transition shadow"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              id="slider-nav-next"
              onClick={nextReview}
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500 hover:bg-slate-800 transition shadow"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
