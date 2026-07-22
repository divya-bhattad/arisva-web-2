import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Tech Stack', href: '#tech-stack' },
    { name: 'AI Fundamentals', href: '#ai' },
    { name: 'Approach', href: '#process' },
    { name: 'QA Calculator', href: '#calculator' },
    { name: 'Industries', href: '#industries' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-50 glass-nav">
      {/* Scroll Progress Bar */}
      <div
        className="h-[2.5px] bg-gradient-to-r from-brand-cyan via-brand-purple-soft to-brand-blue transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo Lockup */}
        <a href="#top" className="flex items-center gap-3.5 group py-1">
          <img
            src="/lockup-crop.png"
            alt="Arisva logo"
            className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
          />
          <div className="flex flex-col justify-center border-l border-line-soft pl-3.5">
            <span className="font-logo font-extrabold text-xl sm:text-2xl tracking-[0.14em] text-ink group-hover:text-brand-purple transition-colors leading-none">
              ARISVA
            </span>
            <span className="text-[10px] sm:text-[11px] font-mono tracking-widest font-bold mt-1 bg-gradient-to-r from-brand-cyan via-brand-purple-soft to-brand-purple bg-clip-text text-transparent">
              Rise Through Excellence
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 font-medium text-sm text-slate">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-ink transition-colors duration-200 py-1 relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-purple transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="mailto:info@arisva.ca"
            className="gradient-btn text-white text-sm font-semibold px-5 py-2.5 rounded-md flex items-center gap-2 cursor-pointer shadow-sm"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate hover:text-ink focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-paper/95 backdrop-blur-lg border-b border-line-soft px-4 pt-2 pb-6 space-y-3 animate-in fade-in duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate hover:text-ink hover:pl-2 transition-all duration-150"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-line-soft">
            <a
              href="mailto:info@arisva.ca"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full gradient-btn text-white py-3 rounded-md font-semibold text-center flex items-center justify-center gap-2"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
