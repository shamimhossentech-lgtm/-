import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS } from '../data';
import { HelpCircle, ChevronDown, ChevronUp, Search, Sparkles } from 'lucide-react';

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);
  const [query, setQuery] = useState('');

  const filteredFaqs = useMemo(() => {
    return FAQS.filter(f => 
      f.question.toLowerCase().includes(query.toLowerCase()) || 
      f.answer.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="relative py-20 bg-[#060b18] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header content */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-900/60 text-blue-400 text-xs font-semibold">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>সচরাচর জিজ্ঞাসা ও উত্তর</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            প্রশ্নোত্তর গ্যালারি (FAQ)
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            মোবাইল বা সফটওয়্যার সমস্যার সমাধান সংক্রান্ত বিষয়ে গ্রাহকদের সাধারণ কিছু জিজ্ঞাসা এবং বিস্তারিত সমাধান এখানে রয়েছে।
          </p>
        </div>

        {/* FAQ Search Bar */}
        <div className="relative mb-8 group max-w-md mx-auto">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400 group-focus-within:text-cyan-400 transition-colors">
            <Search className="w-4 h-4" />
          </span>
          <input
            id="faq-search-input"
            type="text"
            placeholder="আপনার প্রশ্ন লিখে খুঁজুন..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-[#030712] border border-slate-800 rounded-xl py-2.5 pl-10 pr-4 text-xs sm:text-sm text-slate-200 placeholder-slate-600 outline-none focus:border-cyan-500 transition-all"
          />
        </div>

        {/* Accordions list */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openId === faq.id;
            return (
              <div
                id={`faq-row-${faq.id}`}
                key={faq.id}
                className="rounded-2xl border border-slate-800 bg-slate-900/20 backdrop-blur overflow-hidden transition-all duration-300 hover:border-slate-700"
              >
                {/* Accordion trigger Header */}
                <button
                  id={`faq-accordion-trigger-${faq.id}`}
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 text-slate-200 hover:text-white transition-colors"
                  type="button"
                >
                  <span className="text-sm sm:text-base font-bold leading-normal">
                    {faq.question}
                  </span>
                  <div className="p-1 rounded bg-slate-950 border border-slate-800 text-slate-400 flex-shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {/* Collapsible Content wrapper */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-content-container-${faq.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="border-t border-slate-800/60 bg-slate-950/40 overflow-hidden"
                    >
                      <div className="p-5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Search Empty Frame */}
        {filteredFaqs.length === 0 && (
          <div className="text-center py-10">
            <p className="text-slate-500 text-xs sm:text-sm">দুঃখিত, আপনার খোঁজা প্রশ্নের উত্তর পাওয়া যায়নি।</p>
            <button
              onClick={() => setQuery('')}
              className="text-cyan-400 text-xs font-bold hover:underline mt-1"
            >
              রিসেট করুন
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
