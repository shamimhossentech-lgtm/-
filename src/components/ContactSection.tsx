import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BUSINESS_INFO } from '../data';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, CheckCircle, AlertCircle, Sparkles } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    brandModel: '',
    problem: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMessage('অনুগ্রহ করে আপনার নাম এবং মোবাইল নম্বরটি সিলেক্ট বা টাইপ করুন।');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    // Simulate database write / network transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset details
      setFormData({
        name: '',
        phone: '',
        brandModel: '',
        problem: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-20 bg-slate-950 overflow-hidden">
      {/* Absolute top border neon line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-900/40 text-cyan-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>সরাসরি সাক্ষাৎ করুন</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            আমাদের সাথে যোগাযোগ করুন
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            আপনার প্রশ্ন বা মেরামত সংক্রান্ত বুকিং নিশ্চিত করতে সরাসরি আমাদের চিনাকান্দি বাজারের সার্ভিসিং সেন্টারে চলে আসুন অথবা মোবাইল বা হোয়াটসঅ্যাপের ম্যাসেজে যোগাযোগ করুন।
          </p>
        </div>

        {/* Info grids & Fields */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* List info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* 1. Address card */}
            <div id="contact-info-address" className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur flex items-start gap-4">
              <div className="p-3 rounded-xl bg-cyan-950/50 text-cyan-400 flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">সার্ভিস ল্যাব লোকেশনঃ</h4>
                <p className="text-sm text-slate-300 leading-relaxed font-semibold">
                  {BUSINESS_INFO.address}
                </p>
                <span className="text-xs text-cyan-500 font-medium font-mono leading-none block">সিএনজি স্ট্যান্ডের অত্যন্ত নিকটবর্তী ভবন</span>
              </div>
            </div>

            {/* 2. Phone contacts card */}
            <div id="contact-info-phone" className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur flex items-start gap-4">
              <div className="p-3 rounded-xl bg-cyan-950/50 text-cyan-400 flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">সরাসরি ফোন ও হোয়াটসঅ্যাপঃ</h4>
                <a 
                  id="contact-call-link"
                  href={`tel:${BUSINESS_INFO.phone}`} 
                  className="text-lg font-extrabold text-cyan-400 hover:text-cyan-300 font-mono block hover:underline"
                >
                  {BUSINESS_INFO.displayPhone}
                </a>
                <p className="text-xs text-slate-400">ব্যবসায়িক যেকোনো আলোচনার জন্য কল বা মেসেজ করুন।</p>
              </div>
            </div>

            {/* 3. Business Hours */}
            <div id="contact-info-hours" className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur flex items-start gap-4">
              <div className="p-3 rounded-xl bg-cyan-950/50 text-cyan-400 flex-shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div className="space-y-2">
                <h4 className="text-base font-bold text-white">সেবা প্রদানের সময়সূচীঃ</h4>
                <div className="text-xs sm:text-sm text-slate-300 space-y-1 font-medium">
                  <p className="flex justify-between gap-4">
                    <span>{BUSINESS_INFO.schedule.days}</span>
                    <span className="text-cyan-400 font-bold">{BUSINESS_INFO.schedule.hours}</span>
                  </p>
                  <p className="text-rose-400 text-xs italic">{BUSINESS_INFO.schedule.weekend}</p>
                </div>
              </div>
            </div>

            {/* Google Map Embedded Frame */}
            <div className="rounded-2xl border border-slate-800 overflow-hidden bg-slate-900 h-64 shadow-inner relative">
              <iframe
                src="https://maps.google.com/maps?q=Chinakandi%20Bazar,%20Bishwambharpur,%20Sunamganj&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.1)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer"
                title="জননী টেলিকম গুগল ম্যাপ লোকেশন"
              ></iframe>
            </div>

          </div>

          {/* Contact Interactive Form Side */}
          <div className="lg:col-span-7">
            <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-[#070e20] border border-cyan-950/60 rounded-3xl p-6 sm:p-8 backdrop-blur shadow-2xl relative">
              
              <h3 className="text-lg sm:text-xl font-bold text-slate-100 mb-2">সমস্যা লিখে মেসেজ পাঠান</h3>
              <p className="text-slate-400 text-xs sm:text-sm mb-6">
                আপনার স্মার্টফোনের সমস্যাটি জানাতে নিচের ফর্মটি পূরণ করুন। মোঃ শামীম আহমেদ নিজেই আপনার বার্তাটি দেখতে পাবেন।
              </p>

              {isSuccess ? (
                // Success State View
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4"
                >
                  <div className="p-3 w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-base sm:text-lg font-bold text-white">আপনার মেসেজটি সফলভাবে পাঠানো হয়েছে!</h4>
                    <p className="text-xs sm:text-sm text-slate-300">
                      ধন্যবাদ! জনাব মোঃ শামীম আহমেদ আপনার মেসেজটি পেয়েছেন এবং দ্রুতই আপনার নম্বরে যোগাযোগ করবেন।
                    </p>
                  </div>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="px-5 py-2 rounded-xl bg-slate-900 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 text-xs font-bold transition-colors"
                  >
                    আরেকটি মেসেজ পাঠান
                  </button>
                </motion.div>
              ) : (
                // Form Fields View
                <form id="contact-submission-form" onSubmit={handleFormSubmit} className="space-y-4 text-xs sm:text-sm">
                  
                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center gap-2">
                      <AlertCircle className="w-4.5 h-4.5 flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name input */}
                    <div className="space-y-1.5 text-left">
                      <label htmlFor="form-name" className="text-xs font-bold text-slate-400">আপনার নাম (আবশ্যক)</label>
                      <input
                        id="form-name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="যেমন: আরিয়ান আহমেদ"
                        className="w-full bg-[#030712] border border-slate-800 rounded-xl py-2.5 px-3.5 text-slate-200 placeholder-slate-600 outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>

                    {/* Phone input */}
                    <div className="space-y-1.5 text-left">
                      <label htmlFor="form-phone" className="text-xs font-bold text-slate-400">মোবাইল নম্বর (আবশ্যক)</label>
                      <input
                        id="form-phone"
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="যেমন: ০১৭১২-৩৪৫৬৭৮"
                        className="w-full bg-[#030712] border border-slate-800 rounded-xl py-2.5 px-3.5 text-slate-200 placeholder-slate-600 outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone brand & model */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="form-brand-model" className="text-xs font-bold text-slate-400">ফোনের ব্র্যান্ড ও মডেল (ঐচ্ছিক)</label>
                    <input
                      id="form-brand-model"
                      type="text"
                      name="brandModel"
                      value={formData.brandModel}
                      onChange={handleInputChange}
                      placeholder="যেমন: Samsung Galaxy A54"
                      className="w-full bg-[#030712] border border-slate-800 rounded-xl py-2.5 px-3.5 text-slate-200 placeholder-slate-600 outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  {/* Problem details */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="form-problem" className="text-xs font-bold text-slate-400">কী ধরণের সমস্যা হচ্ছে? (বিস্তারিত লিখুন)</label>
                    <textarea
                      id="form-problem"
                      name="problem"
                      rows={4}
                      value={formData.problem}
                      onChange={handleInputChange}
                      placeholder="যেমন: ডিসপ্লে ফেটে গেছে এবং চার্জ ফুরিয়ে যাচ্ছে দ্রুত, নতুন ব্যাটারি লাগবে..."
                      className="w-full bg-[#030712] border border-slate-800 rounded-xl py-2.5 px-3.5 text-slate-200 placeholder-slate-600 outline-none focus:border-cyan-500 transition-colors resize-none"
                    ></textarea>
                  </div>

                  {/* Submit buttons */}
                  <div className="pt-2">
                    <button
                      id="contact-form-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="flex items-center justify-center gap-2.5 w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-extrabold text-sm lg:text-base hover:from-cyan-400 hover:to-blue-500 transition shadow disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>ম্যাসেজ পাঠানো হচ্ছে...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-black" />
                          <span>মেসেজ জমা দিন</span>
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
