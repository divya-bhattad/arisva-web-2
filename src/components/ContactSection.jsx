import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowUp, Send } from 'lucide-react';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const emailAddress = 'info@arisva.ca';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-ink via-ink-deep to-ink text-paper relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <span className="font-mono text-xs text-brand-cyan tracking-widest uppercase font-semibold">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white leading-tight">
            Ready to rise through excellence?
          </h2>
          <p className="text-paper/75 text-base sm:text-lg max-w-2xl mx-auto">
            Email our team directly at <strong className="text-brand-cyan font-mono">{emailAddress}</strong> — tell us what you&apos;re building, staffing, or trying to test smarter and we&apos;ll come back with an actionable plan.
          </p>
        </div>

        {/* Direct Email Card */}
        <div className="max-w-2xl mx-auto bg-white/5 border border-white/15 rounded-2xl p-8 sm:p-12 shadow-2xl backdrop-blur-md text-center space-y-8">
          
          <div className="w-16 h-16 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan mx-auto flex items-center justify-center">
            <Mail className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono text-paper/60 uppercase tracking-wider block">
              DIRECT EMAIL CONTACT
            </span>
            <div className="text-2xl sm:text-3xl font-mono font-bold text-white tracking-wide">
              {emailAddress}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={`mailto:${emailAddress}?subject=Inquiry for Arisva Team`}
              className="w-full sm:w-auto gradient-btn text-white px-8 py-3.5 rounded-lg font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-brand-purple/40"
            >
              <Send className="w-4 h-4" />
              <span>Send Email to {emailAddress}</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="w-full sm:w-auto px-6 py-3.5 rounded-lg border border-white/20 hover:border-white text-paper font-semibold text-sm transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer bg-white/5"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 font-mono">Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Email Address</span>
                </>
              )}
            </button>
          </div>

          <div className="pt-4 text-xs font-mono text-paper/50">
            <span>Response Time: Typically under 24 hours</span>
          </div>

        </div>

        {/* Back to Top Link */}
        <div className="mt-16 text-center">
          <a
            href="#top"
            className="inline-flex items-center gap-2 text-xs font-mono text-paper/60 hover:text-white transition-colors"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
