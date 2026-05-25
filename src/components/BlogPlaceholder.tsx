import { motion } from 'motion/react';
import { Sparkles, ArrowUpRight, BookOpen } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

interface BlogItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  seed: string;
}

export default function BlogPlaceholder() {
  const blogs: BlogItem[] = [
    {
      id: "blog-1",
      title: "মোবাইল পানিতে পড়লে তাৎক্ষণিক করণীয় এবং বর্জনীয় কাজসমূহ",
      excerpt: "ভুলবশত ফোন পানিতে পড়ে গেলে চালের ড্রামে রাখার আগে অত্যন্ত প্রয়োজনীয় ৩টি পদক্ষেপ যা আপনার ফোনের মূল্যবান মাদারবোর্ড বাঁচাবে।",
      date: "মে ২৫, ২০২৬",
      category: "টিপস ও ট্রিক্স",
      readTime: "৩ মিনিট",
      seed: "phone-water-treatment"
    },
    {
      id: "blog-2",
      title: "স্মার্টফোনের ব্যাটারির লাইফ উন্নত রাখার সঠিক প্র্যাকটিস",
      excerpt: "সারারাত চার্জ করা কি ফোনের জন্য ক্ষতিকর? ব্যাটারি হেলথ ১০০% ধরে রাখতে চার্জিং লেভেল এবং সঠিক চার্জার ব্যবহারের গোপন ট্রিকস।",
      date: "মে ২০, ২০২৬",
      category: "সচেতনতা",
      readTime: "৪ মিনিট",
      seed: "battery-health-tips"
    },
    {
      id: "blog-3",
      title: "আইফোন ও অ্যান্ড্রয়েড ফোনের স্টোরেজ ফুল সমস্যা সমাধানের উপায়",
      excerpt: "কোন রকম ছবি বা প্রয়োজনীয় পার্সোনাল ফাইল না কেটেই কীভাবে কয়েক জিবি পর্যন্ত ইন্টারনাল ক্যাশ ডিলিট করে ফোন সুপার ফাস্ট করবেন।",
      date: "মে ১৫, ২০২৬",
      category: "মোবাইল গাইড",
      readTime: "৫ মিনিট",
      seed: "storage-clear-guide"
    }
  ];

  return (
    <section id="blog" className="relative py-20 bg-slate-950 overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-900/40 text-cyan-400 text-xs font-semibold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>মোবাইল টিপস ও সচেতনতা</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            ব্লগ ও মোবাইল টিপস গাইড
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            আপনার দৈনন্দিন ব্যবহৃত স্মার্টফোনটিকে সুরক্ষিত এবং সচল রাখতে মোঃ শামীম আহমেদ এর বিশেষ পরামর্শ ও প্রয়োজনীয় দিকনির্দেশনা মূলক গাইডসমূহ পড়ুন।
          </p>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.article
              id={`blog-card-${blog.id}`}
              key={blog.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="flex flex-col justify-between p-5 rounded-2.5xl bg-slate-900/30 border border-slate-800/80 hover:border-cyan-950 hover:bg-slate-900/50 transition-all duration-300 group"
            >
              <div>
                {/* Custom Seed Cover Image Placeholder */}
                <div className="relative rounded-2xl overflow-hidden aspect-video mb-4 bg-slate-950 border border-slate-900">
                  <img
                    src={`https://picsum.photos/seed/${blog.seed}/600/400`}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
                  
                  {/* Category Tag */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-bold text-cyan-400 bg-slate-950/90 border border-slate-800 rounded-lg">
                    {blog.category}
                  </span>
                </div>

                {/* Metadata */}
                <div className="flex items-center gap-3 text-[11px] text-slate-500 font-semibold mb-2 font-mono">
                  <span>{blog.date}</span>
                  <span>•</span>
                  <span>{blog.readTime} পড়া</span>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-400 transition-colors leading-snug">
                  {blog.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed line-clamp-3">
                  {blog.excerpt}
                </p>
              </div>

              {/* Read More button */}
              <div className="mt-6 pt-4 border-t border-slate-900 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-bold font-mono">READ MINIFIED POST</span>
                <a
                  id={`blog-link-${blog.id}`}
                  href={BUSINESS_INFO.socials.facebook}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors"
                >
                  <span>সবটুকু পড়ুন</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
