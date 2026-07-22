import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Mail, ShieldCheck } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'How quickly can Arisva place pre-vetted SDET or BA experts on our team?',
      a: 'We maintain a pre-evaluated talent pool of senior QA Engineers, SDETs, and Business Analysts. For standard staffing requirements, we present matched candidate profiles within 48 hours, ready for immediate team onboarding.',
    },
    {
      q: 'How does Arisva integrate with our existing Jira, GitHub, and CI/CD pipelines?',
      a: 'Zero workflow disruption. Our engineers and analysts embed directly into your existing tools — linking Jira user stories with BDD acceptance criteria and configuring GitHub Actions / Jenkins to auto-trigger Playwright/Cypress test runs on every pull request.',
    },
    {
      q: 'How do your AI solutions reduce test execution time and prevent flaky tests?',
      a: 'Our AI testing models perform AST code diff analysis to run only the specific test suites impacted by a pull request (reducing regression test runs by up to 40%). Additionally, self-healing locators dynamically recover broken XPath/CSS selectors during test runs.',
    },
    {
      q: 'What engagement models do you offer for startups vs enterprise teams?',
      a: 'We offer flexible engagement models tailored to your stage: Managed Pods (QA Lead + BAs + SDETs), Staff Augmentation (Individual contract/C2H placement), Strategic Quality Audits & Consulting, and Corporate Training Bootcamps.',
    },
    {
      q: 'Does Arisva provide corporate upskilling for our existing engineering & product teams?',
      a: 'Yes. We run custom corporate bootcamps covering modern test automation (Playwright, Cypress), API testing, BDD requirement engineering for BAs, and AI-assisted engineering workflows.',
    },
    {
      q: 'How do you handle security and IP protection during client engagements?',
      a: 'All Arisva team members operate under strict Non-Disclosure Agreements (NDAs), standard enterprise IP assignment clauses, and secure environment access protocols. Your source code and proprietary data remain 100% confidential.',
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-paper border-b border-line-soft">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-brand-purple font-mono text-xs font-semibold tracking-wider uppercase">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>ENTERPRISE FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-ink">
            Frequently Asked Questions
          </h2>
          <p className="text-slate text-base sm:text-lg max-w-xl mx-auto">
            Everything you need to know about Arisva&apos;s QA, BA, Staffing, AI, and DevOps engagements.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-line rounded-xl overflow-hidden shadow-sm hover:border-brand-purple/40 transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <span className="font-display font-semibold text-lg text-ink">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                    isOpen ? 'bg-brand-purple text-white' : 'bg-paper-alt text-slate'
                  }`}>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate text-sm sm:text-base leading-relaxed border-t border-line-soft animate-in fade-in duration-200">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* FAQ Footer CTA */}
        <div className="mt-12 text-center p-6 rounded-xl bg-paper-alt border border-line flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left text-sm text-ink font-medium">
            Have a specific question about your project or stack?
          </div>
          <a
            href="mailto:info@arisva.ca?subject=FAQ Inquiry"
            className="gradient-btn text-white px-5 py-2.5 rounded-md text-xs font-mono font-semibold flex items-center gap-2 cursor-pointer whitespace-nowrap"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email info@arisva.ca</span>
          </a>
        </div>

      </div>
    </section>
  );
}
