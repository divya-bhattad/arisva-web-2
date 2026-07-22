import React, { useState, useEffect } from 'react';
import { Globe, Clock } from 'lucide-react';

function Counter({ target, suffix = '' }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const end = parseInt(target, 10);
    if (isNaN(end)) return;

    let start = 0;
    const increment = Math.ceil(end / 40);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 40);

    return () => clearInterval(timer);
  }, [target]);

  return <span>{count.toLocaleString()}{suffix}</span>;
}

export default function Stats() {
  const stats = [
    { target: '120', suffix: '+', label: 'QA PROFESSIONALS PLACED', sub: 'SDETs, Leads & Engineers' },
    { target: '300', suffix: '+', label: 'TEST SUITES DELIVERED', sub: 'Web, Mobile & API Layer' },
    { target: '40', suffix: '%', label: 'FASTER RELEASES WITH AI', sub: 'Reduced Regression Times' },
    { target: '1000', suffix: '+', label: 'ENGINEERS TRAINED', sub: 'Certified Bootcamps' },
  ];

  return (
    <section className="py-16 bg-ink text-paper border-b border-white/10 relative overflow-hidden">
      {/* Background Animated Tech Grid Effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#3FA9F5_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-brand-cyan/50 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 group shadow-lg"
            >
              <div className="font-display font-bold text-4xl sm:text-5xl bg-gradient-to-r from-brand-cyan via-brand-purple-soft to-purple-400 bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform duration-200 origin-left">
                <Counter target={stat.target} suffix={stat.suffix} />
              </div>
              <div className="font-mono text-xs font-semibold tracking-wider text-paper/80 uppercase">
                {stat.label}
              </div>
              <div className="text-xs text-white/50 mt-1">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Timezone & Operational Delivery Alignment Badge */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <div className="flex items-center gap-2 font-mono text-xs text-white/80 font-semibold tracking-wide">
              <Globe className="w-3.5 h-3.5 text-brand-cyan" />
              <span>GLOBAL DELIVERY &amp; TIMEZONE ALIGNMENT</span>
            </div>
          </div>

          <div className="inline-flex flex-wrap items-center justify-center gap-2 font-mono text-xs font-semibold">
            <span className="px-3 py-1.5 rounded-full bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/30 flex items-center gap-1.5">
              <Clock className="w-3 h-3" />
              <span>EST / PST Core Timezone Coverage</span>
            </span>
            <span className="px-3 py-1.5 rounded-full bg-brand-purple/15 text-brand-purple-soft border border-brand-purple/30">
              100% North American Standup Overlap
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
