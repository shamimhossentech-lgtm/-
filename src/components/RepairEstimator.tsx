import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { BRANDS, SERVICE_OPTIONS, BUSINESS_INFO } from '../data';
import { Calculator, Sparkles, MessageSquare, ShieldCheck, Check } from 'lucide-react';

export default function RepairEstimator() {
  const [selectedBrandId, setSelectedBrandId] = useState(BRANDS[0].id);
  const [customModel, setCustomModel] = useState('');
  const [selectedIssueId, setSelectedIssueId] = useState(SERVICE_OPTIONS[0].id);

  // Find currently selected structures
  const currentBrandObj = useMemo(() => {
    return BRANDS.find(b => b.id === selectedBrandId) || BRANDS[0];
  }, [selectedBrandId]);

  const currentIssueObj = useMemo(() => {
    return SERVICE_OPTIONS.find(s => s.id === selectedIssueId) || SERVICE_OPTIONS[0];
  }, [selectedIssueId]);

  // Handle setting sample model
  const [sampleModel, setSampleModel] = useState(currentBrandObj.models[0]);

  // Sync sample model when brand changes
  const handleBrandChange = (brandId: string) => {
    setSelectedBrandId(brandId);
    const brand = BRANDS.find(b => b.id === brandId) || BRANDS[0];
    setSampleModel(brand.models[0]);
    setCustomModel('');
  };

  const finalModelName = customModel.trim() || sampleModel;

  // WhatsApp link generator with deep formatted message
  const whatsappLink = useMemo(() => {
    const message = 
`আসসালামু আলাইকুম শামীম ভাই, আমি জননী টেলিকমের ওয়েবসাইট থেকে মোবাইল মেরামতের বুকিং দিতে চাইঃ

📱 ব্র্যান্ডঃ ${currentBrandObj.name}
🛠️ মডেলঃ ${finalModelName}
🛠️ সমস্যা/সেবাঃ ${currentIssueObj.name}
💵 আনুমানিক বাজেটঃ ৳${currentIssueObj.basePrice} BDT (শুরু)
⏱️ মেরামতের সময়ঃ ${currentIssueObj.timeEstimate}

অনুগ্রহ করে আমাকে বিস্তারিত জানান, ধন্যবাদ।`;

    return `https://wa.me/8801720302901?text=${encodeURIComponent(message)}`;
  }, [currentBrandObj, finalModelName, currentIssueObj]);

  return (
    <section id="estimator" className="relative py-20 bg-[#060b18] overflow-hidden">
      {/* Background glow lines */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-900/60 text-blue-400 text-xs font-semibold">
            <Calculator className="w-3.5 h-3.5" />
            <span>ইন্টারেক্টিভ ক্যালকুলেটর</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            সার্ভিসিং খরচ হিসাব করুন
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            আপনার ফোনের ব্র্যান্ড, মডেল এবং কী ধরণের সমস্যা রয়েছে তা সিলেক্ট করুন। মুহূর্তেই পেয়ে যান আনুমানিক বাজেট এবং মেরামতের সম্ভাব্য সময়সীমা।
          </p>
        </div>

        {/* Dynamic Calculator widget */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Form Side */}
          <div className="lg:col-span-7 bg-slate-900/40 border border-slate-800/80 rounded-2.5xl p-6 sm:p-8 backdrop-blur space-y-6">
            
            {/* 1. Brand Selection */}
            <div className="space-y-3">
              <label className="text-sm font-bold text-slate-300 block">১. ফোনের ব্র্যান্ড নির্বাচন করুন (Select Brand)</label>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                {BRANDS.map((b) => (
                  <button
                    id={`estimator-brand-btn-${b.id}`}
                    key={b.id}
                    type="button"
                    onClick={() => handleBrandChange(b.id)}
                    className={`p-2.5 rounded-xl text-center text-xs font-semibold transition-all border ${
                      selectedBrandId === b.id
                        ? 'bg-cyan-500/10 border-cyan-500 text-cyan-300 shadow shadow-cyan-500/5'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-300'
                    }`}
                  >
                    {b.name}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Model Input/Select */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-300 block col-span-1">২. মডেল পছন্দ করুন</label>
                <select
                  id="estimator-brand-model-select"
                  value={sampleModel}
                  onChange={(e) => {
                    setSampleModel(e.target.value);
                    setCustomModel('');
                  }}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 px-3 text-xs sm:text-sm text-slate-200 outline-none focus:border-cyan-500 transition-colors"
                >
                  {currentBrandObj.models.map((model) => (
                    <option key={model} value={model}>{model}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-300 block">অথবা, নির্দিষ্ট মডেল লিখুন</label>
                <input
                  id="estimator-custom-model-input"
                  type="text"
                  placeholder="যেমন: Galaxy F22, Note 11"
                  value={customModel}
                  onChange={(e) => setCustomModel(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2 px-3 text-xs sm:text-sm text-slate-200 placeholder-slate-600 outline-none focus:border-cyan-500 transition-colors"
                />
              </div>
            </div>

            {/* 3. Issue Selection */}
            <div className="space-y-3">
              <label className="text-sm font-bold text-slate-300 block">৩. কী ধরণের সমস্যা হচ্ছে? (Select Repair Service)</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[220px] overflow-y-auto pr-1">
                {SERVICE_OPTIONS.map((opt) => (
                  <button
                    id={`estimator-issue-btn-${opt.id}`}
                    key={opt.id}
                    type="button"
                    onClick={() => setSelectedIssueId(opt.id)}
                    className={`flex items-center justify-between p-3 rounded-xl text-left text-xs sm:text-sm transition-all border ${
                      selectedIssueId === opt.id
                        ? 'bg-blue-950/40 border-cyan-500 text-cyan-300'
                        : 'bg-slate-950/70 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-300'
                    }`}
                  >
                    <span>{opt.name}</span>
                    {selectedIssueId === opt.id && <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Diagnostic Result Ticket Side */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-cyan-500/5 to-transparent blur-3xl pointer-events-none" />

            {/* Decorative Ticket container */}
            <div className="relative bg-gradient-to-br from-slate-900 via-slate-900 to-[#070e20] border border-cyan-950/60 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
              
              {/* Receipt Header */}
              <div className="flex items-center justify-between border-b border-dashed border-slate-800 pb-5">
                <div>
                  <h4 className="font-extrabold text-lg text-white">বুকিং বাজেট রিসিপ্ট</h4>
                  <p className="text-[10px] text-cyan-400 font-mono uppercase tracking-widest mt-0.5">ESTIMATE DIAGNOSTIC REPORT</p>
                </div>
                <div className="p-2 w-10 h-10 rounded-xl bg-cyan-950/40 flex items-center justify-center border border-cyan-800/30">
                  <Calculator className="w-5 h-5 text-cyan-400" />
                </div>
              </div>

              {/* Receipt Body */}
              <div className="space-y-4 text-sm">
                
                <div className="flex justify-between items-center py-1 border-b border-slate-800/40">
                  <span className="text-slate-400 text-xs font-semibold">প্রতিষ্ঠানের নামঃ</span>
                  <span className="text-slate-100 font-bold">{BUSINESS_INFO.legalName}</span>
                </div>

                <div className="flex justify-between items-center py-1 border-b border-slate-800/40">
                  <span className="text-slate-400 text-xs font-semibold">ফোনের ব্র্যান্ডঃ</span>
                  <span className="text-cyan-400 font-bold font-mono">{currentBrandObj.name}</span>
                </div>

                <div className="flex justify-between items-center py-1 border-b border-slate-800/40">
                  <span className="text-slate-400 text-xs font-semibold">অর্গানাইজ মডেলঃ</span>
                  <span className="text-slate-100 font-extrabold">{finalModelName}</span>
                </div>

                <div className="py-2.5">
                  <span className="text-slate-400 text-xs font-semibold block mb-1">সমস্যা ও প্রয়োজনীয় সেবাঃ</span>
                  <p className="text-slate-200 font-bold bg-[#030712] p-3 rounded-lg text-xs leading-normal border border-slate-900">
                    {currentIssueObj.name}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-900 text-left">
                    <span className="text-[10px] text-slate-500 block font-semibold">কাজের সম্ভাব্য সময়</span>
                    <span className="text-sm font-bold text-slate-200">{currentIssueObj.timeEstimate}</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-900 text-left">
                    <span className="text-[10px] text-slate-500 block font-semibold">নিরাপত্তা লেভেল</span>
                    <span className="text-sm font-bold text-emerald-400">১০০% গ্যারান্টি</span>
                  </div>
                </div>

                {/* Estimate Total Pricing Badge */}
                <div className="pt-4 border-t border-dashed border-slate-800 flex items-center justify-between">
                  <span className="text-slate-400 text-xs font-bold font-mono">ESTIMATED PRICE</span>
                  <div className="text-right">
                    <span className="text-sm text-slate-400 font-bold mr-1">৳</span>
                    <span className="text-3xl font-extrabold text-cyan-400 font-mono tracking-tight">{currentIssueObj.basePrice}</span>
                    <span className="text-xs text-slate-400 font-bold ml-1">BDT+</span>
                  </div>
                </div>

                <p className="text-[11px] text-slate-500 leading-normal text-center select-none pt-2">
                  * এটি একটি আনুমানিক সার্ভিসিং বাজেট। আপনার ফোনের ভেতরের আইসি ড্যামেজ লেভেল বা পার্টসের সহজলভ্যতার উপর ভিত্তি করে প্রকৃত দাম কিছুটা কম-বেশি হতে পারে।
                </p>

              </div>

              {/* Action Button: WhatsApp Confirm booking */}
              <a
                id="estimator-wa-book-button"
                href={whatsappLink}
                target="_blank"
                referrerPolicy="no-referrer"
                className="flex items-center justify-center gap-3 w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 text-black text-sm lg:text-base font-extrabold hover:from-emerald-400 hover:to-teal-500 shadow-lg shadow-emerald-500/10 transition duration-300"
              >
                <MessageSquare className="w-5 h-5 text-black" />
                <span>বুকিং করতে WhatsApp পাঠান</span>
              </a>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
