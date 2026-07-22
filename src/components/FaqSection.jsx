import React, { useState } from 'react';
import { Mail } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null); // Collapsed by default

  const faqs = [
    {
      q: 'How quickly can Arisva place pre-vetted SDET or BA experts on our team?',
      a: 'We maintain a pre-evaluated talent pool of senior QA Engineers, SDETs, and Business Analysts. For standard staffing requirements, we present matched candidate profiles within 48 hours, ready for immediate team onboarding.',
    },
    {
      q: 'What engagement models do you offer for startups vs enterprise teams?',
      a: 'We offer flexible engagement models tailored to your stage: Managed Pods (QA Lead + BAs + SDETs), Staff Augmentation (Individual contract/C2H placement), Strategic Quality Audits & Consulting, and Corporate Training Bootcamps.',
    },
    {
      q: 'How does Arisva integrate with our existing Jira, GitHub, and CI/CD pipelines?',
      a: 'Zero workflow disruption. Our engineers and analysts embed directly into your existing tools — linking Jira user stories with BDD acceptance criteria and configuring GitHub Actions / Jenkins to auto-trigger Playwright/Cypress test runs on every pull request.',
    },
    {
      q: 'Does Arisva provide corporate upskilling for our existing engineering & product teams?',
      a: 'Yes. We run custom corporate bootcamps covering modern test automation (Playwright, Cypress), API testing, BDD requirement engineering for BAs, and AI-assisted engineering workflows.',
    },
    {
      q: 'How do your AI solutions reduce test execution time and prevent flaky tests?',
      a: 'Our AI testing models perform AST code diff analysis to run only the specific test suites impacted by a pull request (reducing regression test runs by up to 40%). Additionally, self-healing locators dynamically recover broken XPath/CSS selectors during test runs.',
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
    <section id="faq" className="py-14 bg-paper border-b border-line-soft">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-2 mb-10">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-ink">
            Frequently Asked Questions
          </h2>
          <p className="text-slate text-sm sm:text-base max-w-xl mx-auto">
            Everything you need to know about Arisva&apos;s QA, BA, Staffing, AI, and DevOps engagements.
          </p>
        </div>

        {/* 2-Column Bulleted Row List (No Box, No Border) */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-2 border-t border-b border-line-soft py-2">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-3.5 border-b md:border-b-0 border-line-soft group">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left flex items-start justify-between gap-3 focus:outline-none cursor-pointer py-1"
                >
                  <div className="flex items-start gap-2.5">
                    <span className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 transition-colors ${
                      isOpen ? 'bg-brand-cyan shadow-sm shadow-brand-cyan' : 'bg-brand-purple group-hover:bg-brand-blue'
                    }`} />
                    <span className="font-display font-semibold text-base sm:text-lg text-ink group-hover:text-brand-purple transition-colors">
                      {faq.q}
                    </span>
                  </div>
                  <span className="text-slate-muted font-mono font-bold text-base flex-shrink-0 ml-2 leading-none pt-0.5">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div className="pl-4 pt-2 pb-1 text-slate text-xs sm:text-sm leading-relaxed animate-in fade-in duration-200">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* FAQ Footer CTA */}
        <div className="mt-8 text-center flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-paper-alt border border-line-soft">
          <div className="text-left text-xs font-mono text-ink font-semibold">
            Have a specific question about your project or stack?
          </div>
          <a
            href="mailto:info@arisva.ca?subject=FAQ Inquiry"
            className="gradient-btn text-white px-4 py-2 rounded-md text-xs font-mono font-semibold flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email info@arisva.ca</span>
          </a>
        </div>

      </div>
    </section>
  );
}
