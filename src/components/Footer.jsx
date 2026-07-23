import React, { useState } from 'react';
import { Mail, X, Shield, FileText } from 'lucide-react';
import lockupLogo from '../assets/lockup-crop.png';

export default function Footer() {
  const [activeLegalModal, setActiveLegalModal] = useState(null); // 'privacy' | 'terms' | null

  return (
    <footer className="bg-paper border-t border-line-soft pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 pb-12 border-b border-line-soft">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#top" className="inline-flex items-center gap-3.5 group mb-2">
              <img
                src={lockupLogo}
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
              Software Quality Assurance, Business Analysis, Staffing Services, AI Solutions, Training, and Website Designing — built around one standard: rise through excellence.
            </p>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="space-y-3">
              <h4 className="font-mono text-xs font-semibold tracking-wider text-slate-muted uppercase">
                SERVICES
              </h4>
              <ul className="space-y-2 text-sm font-medium text-ink">
                <li><a href="#services" className="hover:text-brand-purple transition-colors">Website Designing &amp; Dev</a></li>
                <li><a href="#services" className="hover:text-brand-purple transition-colors">QA — Quality Assurance</a></li>
                <li><a href="#services" className="hover:text-brand-purple transition-colors">BA — Business Analyst</a></li>
                <li><a href="#services" className="hover:text-brand-purple transition-colors">Staffing Services</a></li>
                <li><a href="#services" className="hover:text-brand-purple transition-colors">AI Solutions</a></li>
                <li><a href="#services" className="hover:text-brand-purple transition-colors">Trainings &amp; Certifications</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-mono text-xs font-semibold tracking-wider text-slate-muted uppercase">
                EXPLORE
              </h4>
              <ul className="space-y-2 text-sm font-medium text-ink">
                <li><a href="#web-design-demo" className="hover:text-brand-purple transition-colors">Design Studio</a></li>
                <li><a href="#tech-stack" className="hover:text-brand-purple transition-colors">Tech Stack Matrix</a></li>
                <li><a href="#ai" className="hover:text-brand-purple transition-colors">AI Fundamentals</a></li>
                <li><a href="#process" className="hover:text-brand-purple transition-colors">Approach</a></li>
                <li><a href="#calculator" className="hover:text-brand-purple transition-colors">QA Calculator</a></li>
                <li><a href="#faq" className="hover:text-brand-purple transition-colors">Enterprise FAQ</a></li>
              </ul>
            </div>

            <div className="space-y-3 col-span-2 sm:col-span-1">
              <h4 className="font-mono text-xs font-semibold tracking-wider text-slate-muted uppercase">
                CONTACT &amp; LEGAL
              </h4>
              <ul className="space-y-2 text-sm text-ink">
                <li>
                  <a href="mailto:info@arisva.ca" className="font-mono font-medium text-brand-purple hover:underline flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5" />
                    <span>info@arisva.ca</span>
                  </a>
                </li>
                <li className="font-mono text-slate text-xs pt-1">arisva.ca</li>
                <li className="text-xs text-slate-muted pt-1">Canada</li>
                <li className="pt-2 flex flex-col gap-1 text-xs">
                  <button
                    onClick={() => setActiveLegalModal('privacy')}
                    className="text-slate hover:text-brand-purple transition-colors text-left font-medium cursor-pointer"
                  >
                    Privacy Policy
                  </button>
                  <button
                    onClick={() => setActiveLegalModal('terms')}
                    className="text-slate hover:text-brand-purple transition-colors text-left font-medium cursor-pointer"
                  >
                    Terms of Service
                  </button>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate">
          <div className="flex flex-wrap items-center gap-4">
            <span>© {new Date().getFullYear()} Arisva. All rights reserved.</span>
            <span className="hidden sm:inline text-slate-muted">•</span>
            <button
              onClick={() => setActiveLegalModal('privacy')}
              className="hover:text-ink transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="text-slate-muted">•</span>
            <button
              onClick={() => setActiveLegalModal('terms')}
              className="hover:text-ink transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
          </div>

          <span className="font-mono tracking-widest text-slate-muted uppercase">
            RISE THROUGH EXCELLENCE
          </span>
        </div>

      </div>

      {/* Modal Dialog for Privacy Policy / Terms of Service */}
      {activeLegalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-line relative max-h-[85vh] overflow-y-auto text-ink">
            
            <button
              onClick={() => setActiveLegalModal(null)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-paper-alt text-slate hover:text-ink transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {activeLegalModal === 'privacy' ? (
              <div className="space-y-4">
                <div className="flex items-center gap-2.5 text-brand-purple">
                  <Shield className="w-6 h-6" />
                  <h3 className="text-2xl font-display font-bold text-ink">Privacy Policy</h3>
                </div>
                <p className="text-xs font-mono text-slate-muted">Last Updated: 2026 | Arisva (Canada)</p>
                
                <div className="space-y-3 text-sm text-slate leading-relaxed border-t border-line-soft pt-4">
                  <h4 className="font-semibold text-ink">1. Information We Collect</h4>
                  <p>
                    Arisva respects your privacy. We only collect information that you voluntarily provide to us via direct contact, email inquiries, or project intake forms (such as your name, corporate email address, and project specifications).
                  </p>

                  <h4 className="font-semibold text-ink">2. How We Use Information</h4>
                  <p>
                    The information collected is used solely to respond to your inquiries, deliver our Software Quality Assurance, Business Analysis, IT Staffing, AI, and Website Designing services, and maintain client communications. We do not sell, rent, or trade your personal data to third parties.
                  </p>

                  <h4 className="font-semibold text-ink">3. Confidentiality & Data Protection</h4>
                  <p>
                    All project repositories, technical documentation, and client disclosures shared with Arisva are handled with strict enterprise confidentiality standards under non-disclosure protocols.
                  </p>

                  <h4 className="font-semibold text-ink">4. Contact Information</h4>
                  <p>
                    If you have any questions regarding this Privacy Policy, please contact us at <a href="mailto:info@arisva.ca" className="text-brand-purple font-medium underline">info@arisva.ca</a>.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center gap-2.5 text-brand-purple">
                  <FileText className="w-6 h-6" />
                  <h3 className="text-2xl font-display font-bold text-ink">Terms of Service</h3>
                </div>
                <p className="text-xs font-mono text-slate-muted">Last Updated: 2026 | Arisva (Canada)</p>
                
                <div className="space-y-3 text-sm text-slate leading-relaxed border-t border-line-soft pt-4">
                  <h4 className="font-semibold text-ink">1. Agreement to Terms</h4>
                  <p>
                    By accessing or using the services provided by Arisva, you agree to be bound by these Terms of Service. If you do not agree, please refrain from using our services.
                  </p>

                  <h4 className="font-semibold text-ink">2. Scope of Services</h4>
                  <p>
                    Arisva provides professional consulting and execution in Software Quality Assurance (QA), Business Analysis (BA), IT Staffing Services, AI Solutions, Technical Bootcamps, and Website Designing &amp; Development.
                  </p>

                  <h4 className="font-semibold text-ink">3. Intellectual Property Rights</h4>
                  <p>
                    Unless otherwise agreed in a separate written statement or statement of work (SOW), all custom test frameworks, code artifacts, designs, and user stories developed specifically for a client upon full payment shall belong to the client.
                  </p>

                  <h4 className="font-semibold text-ink">4. Disclaimer of Liability</h4>
                  <p>
                    Information and interactive tools on this website are provided for general informational purposes. Individual project timelines, speed metrics, and results depend on specific client technical environments and project scope. Arisva makes no absolute warranties of error-free code or guaranteed commercial outcomes.
                  </p>

                  <h4 className="font-semibold text-ink">5. Trademark Disclaimer</h4>
                  <p>
                    All third-party tool names, logos, and technology trademarks mentioned on this site (e.g., React, Playwright, Cypress, Figma, Jira, Next.js) belong to their respective owners. Their reference is for skill and tooling compatibility description only and does not imply direct endorsement or corporate affiliation.
                  </p>

                  <h4 className="font-semibold text-ink">6. Governing Law</h4>
                  <p>
                    These terms are governed by and construed in accordance with the laws of Canada.
                  </p>
                </div>
              </div>
            )}

            <div className="pt-6 mt-6 border-t border-line-soft flex justify-end">
              <button
                onClick={() => setActiveLegalModal(null)}
                className="px-5 py-2 rounded-lg gradient-btn text-white text-xs font-semibold cursor-pointer"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}
    </footer>
  );
}
