import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Triggers smoothly after scrolling past ~3 full sections (~1200px)
      if (window.scrollY > 1200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 animate-in fade-in zoom-in-75 duration-300">
      <button
        onClick={scrollToTop}
        className="w-11 h-11 rounded-full bg-ink/90 backdrop-blur-md text-brand-cyan hover:text-white border border-white/20 hover:border-brand-cyan flex items-center justify-center shadow-2xl transition-all duration-200 hover:scale-110 cursor-pointer group"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
      </button>
    </div>
  );
}
