import { motion } from 'motion/react';
import { COUNTERS } from '../data';
import { Award, CheckCircle, Smile, Sparkles } from 'lucide-react';

export default function Stats() {
  const getIcon = (id: string) => {
    switch (id) {
      case 'count-1':
        return <CheckCircle className="w-6 h-6 text-cyan-400" />;
      case 'count-2':
        return <Smile className="w-6 h-6 text-cyan-400" />;
      case 'count-3':
        return <Award className="w-6 h-6 text-cyan-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section className="relative py-12 bg-slate-950 border-y border-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/10 via-cyan-950/10 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {COUNTERS.map((item, index) => (
            <motion.div
              id={`stat-card-${item.id}`}
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="relative p-6 rounded-2xl bg-gradient-to-b from-slate-900/60 to-slate-900/10 border border-slate-800/80 hover:border-cyan-950 transition-all duration-300 backdrop-blur-sm group hover:-translate-y-1"
            >
              <div className="absolute top-2 right-2 w-12 h-12 bg-cyan-950/20 rounded-full blur-xl group-hover:bg-cyan-500/10 transition-colors pointer-events-none" />
              <div className="flex flex-col gap-3">
                <div className="p-2.5 w-11 h-11 rounded-lg bg-slate-950 border border-slate-800/80 flex items-center justify-center group-hover:border-cyan-500/40 transition-colors">
                  {getIcon(item.id)}
                </div>
                <div>
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text">
                      {item.value}
                    </span>
                    <span className="text-xl sm:text-2xl font-bold text-cyan-400 font-mono">
                      {item.suffix}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-slate-400 mt-1 select-none">
                    {item.label}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
