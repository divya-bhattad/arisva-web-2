import React from 'react';
import { Mail, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-paper border-t border-line-soft pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 pb-12 border-b border-line-soft">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#top" className="inline-flex items-center gap-3.5 group mb-2">
              <img
                src="/lockup-crop.png"
                alt="Arisva logo"
                className="h-12 sm:h-14 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
              <div className="flex flex-col justify-center border-l border-line-soft pl-3.5">
                <span className="font-logo font-extrabold text-2xl tracking-[0.14em] text-ink group-hover:text-brand-purple transition-colors leading-none">
                  ARISVA
                </span>
                <span className="text-xs font-mono tracking-widest font-bold mt-1 bg-gradient-to-r from-brand-cyan via-brand-purple-soft to-brand-purple bg-clip-text text-transparent">
                  Rise Through Excellence
                </span>
              </div>
            </a>
            <p className="text-slate text-sm max-w-sm leading-relaxed">
              Software Quality Assurance, Business Analysis, Staffing Services, AI Solutions, Training, and DevOps — built around one standard: rise through excellence.
            </p>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="space-y-3">
              <h4 className="font-mono text-xs font-semibold tracking-wider text-slate-muted uppercase">
                SERVICES
              </h4>
              <ul className="space-y-2 text-sm font-medium text-ink">
                <li><a href="#services" className="hover:text-brand-purple transition-colors">QA — Quality Assurance</a></li>
                <li><a href="#services" className="hover:text-brand-purple transition-colors">BA — Business Analyst</a></li>
                <li><a href="#services" className="hover:text-brand-purple transition-colors">Staffing Services</a></li>
                <li><a href="#services" className="hover:text-brand-purple transition-colors">AI Solutions</a></li>
                <li><a href="#services" className="hover:text-brand-purple transition-colors">Trainings &amp; Certifications</a></li>
                <li><a href="#services" className="hover:text-brand-purple transition-colors">DevOps &amp; Release</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-mono text-xs font-semibold tracking-wider text-slate-muted uppercase">
                EXPLORE
              </h4>
              <ul className="space-y-2 text-sm font-medium text-ink">
                <li><a href="#tech-stack" className="hover:text-brand-purple transition-colors">Tech Stack Matrix</a></li>
                <li><a href="#ai" className="hover:text-brand-purple transition-colors">AI Fundamentals</a></li>
                <li><a href="#process" className="hover:text-brand-purple transition-colors">Approach</a></li>
                <li><a href="#calculator" className="hover:text-brand-purple transition-colors">QA Calculator</a></li>
                <li><a href="#industries" className="hover:text-brand-purple transition-colors">Industries</a></li>
                <li><a href="#faq" className="hover:text-brand-purple transition-colors">Enterprise FAQ</a></li>
              </ul>
            </div>

            <div className="space-y-3 col-span-2 sm:col-span-1">
              <h4 className="font-mono text-xs font-semibold tracking-wider text-slate-muted uppercase">
                CONTACT
              </h4>
              <ul className="space-y-2 text-sm text-ink">
                <li>
                  <a href="mailto:info@arisva.ca" className="font-mono font-medium text-brand-purple hover:underline flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5" />
                    <span>info@arisva.ca</span>
                  </a>
                </li>
                <li className="font-mono text-slate text-xs pt-1">arisva.ca</li>
                <li className="text-xs text-slate-muted pt-2">Canada</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate">
          <span>© {new Date().getFullYear()} Arisva Inc. All rights reserved.</span>
          <span className="font-mono tracking-widest text-slate-muted uppercase">
            RISE THROUGH EXCELLENCE
          </span>
        </div>

      </div>
    </footer>
  );
}
