import React, { useState, useEffect, useRef } from 'react';
import { Quote, RefreshCw, ChevronLeft, ChevronRight, ShieldCheck, Sparkles } from 'lucide-react';

export default function CaseStudyReport() {
  const testimonialPool = [
    {
      quote: "Arisva didn't just test our releases — they built the QA and Business Analysis function we didn't have time to build ourselves, then trained our internal team to run it.",
      role: "VP of Engineering",
      sector: "Enterprise SaaS Sector",
      engagement: "QA + BA + Staffing",
      duration: "9 months",
      teamSize: "6 Placed",
      outcome: "Release cadence 2x & zero critical bugs",
    },
    {
      quote: "Placing senior SDETs and BAs usually takes us 6 to 8 weeks. Arisva presented pre-vetted engineers in 48 hours who immediately automated our regression suite.",
      role: "Head of Software Quality",
      sector: "Global FinTech Platform",
      engagement: "Staffing Services + BDD",
      duration: "12 months",
      teamSize: "8 Placed",
      outcome: "48-Hr Onboarding & 100% PR Gating",
    },
    {
      quote: "Our requirements used to change mid-sprint, causing mass rework. Arisva's Business Analysts introduced Gherkin BDD workflows that eliminated ambiguity before code was written.",
      role: "Director of Product Management",
      sector: "HealthTech Enterprise",
      engagement: "BA — Business Analyst + BDD",
      duration: "6 months",
      teamSize: "4 Placed",
      outcome: "0 Requirement Misalignments",
    },
    {
      quote: "The AI regression model Arisva integrated into our GitHub pipeline cut our full test suite execution time from 4 hours down to 25 minutes with zero false positives.",
      role: "Chief Technology Officer",
      sector: "Logistics & Supply Chain",
      engagement: "AI Solutions + DevOps",
      duration: "8 months",
      teamSize: "5 Placed",
      outcome: "40% Faster Release Cycle",
    },
    {
      quote: "During our peak holiday flash sales, Arisva's k6 load scripts and API automation protected our checkout pipeline from crashing under 50,000 concurrent users.",
      role: "VP of Infrastructure",
      sector: "E-Commerce Enterprise",
      engagement: "QA Performance Testing",
      duration: "4 months",
      teamSize: "3 Placed",
      outcome: "100% Uptime Under Peak Load",
    },
    {
      quote: "Arisva's corporate bootcamp transformed 14 of our manual testers into fluent Playwright and TypeScript automation engineers in less than 8 weeks.",
      role: "Head of Engineering Talent",
      sector: "EdTech Platform",
      engagement: "Trainings & Certifications",
      duration: "2 months",
      teamSize: "14 Engineers Upskilled",
      outcome: "Full Test Suite Automation",
    },
    {
      quote: "Having an integrated BA and SDET pod meant our requirements flowed seamlessly into Playwright scripts. We haven't had a single severe defect escape to production since.",
      role: "Director of Software Delivery",
      sector: "InsurTech Platform",
      engagement: "QA + BA Managed Pod",
      duration: "10 months",
      teamSize: "7 Placed",
      outcome: "Zero Escaped Defects",
    },
  ];

  const transitions = [
    'animate-in fade-in slide-in-from-top-12 duration-600 ease-out',
    'animate-in fade-in zoom-in-75 duration-500 ease-out',
    'animate-in fade-in slide-in-from-right-16 duration-600 ease-out',
    'animate-in fade-in slide-in-from-bottom-12 duration-600 ease-out',
    'animate-in fade-in slide-in-from-left-16 duration-600 ease-out',
    'animate-in fade-in spin-in-6 duration-600 ease-out',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTransition, setActiveTransition] = useState(transitions[0]);
  const lastTransitionRef = useRef(transitions[0]);
  const unvisitedRef = useRef(Array.from({ length: testimonialPool.length }, (_, i) => i));

  const getNextRandomIndex = () => {
    let pool = unvisitedRef.current;
    if (pool.length === 0) {
      pool = Array.from({ length: testimonialPool.length }, (_, i) => i).filter((i) => i !== currentIndex);
    }
    const randomIndexInPool = Math.floor(Math.random() * pool.length);
    const nextIdx = pool[randomIndexInPool];
    unvisitedRef.current = pool.filter((i) => i !== nextIdx);
    return nextIdx;
  };

  const getDifferentTransition = () => {
    const available = transitions.filter((t) => t !== lastTransitionRef.current);
    const selected = available[Math.floor(Math.random() * available.length)];
    lastTransitionRef.current = selected;
    return selected;
  };

  const handleNext = () => {
    const nextIdx = getNextRandomIndex();
    const nextTrans = getDifferentTransition();
    setActiveTransition(nextTrans);
    setCurrentIndex(nextIdx);
  };

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + testimonialPool.length) % testimonialPool.length;
    const nextTrans = getDifferentTransition();
    setActiveTransition(nextTrans);
    setCurrentIndex(prevIdx);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 4500);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const current = testimonialPool[currentIndex];

  return (
    <section className="py-20 bg-paper overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl text-ink font-display font-bold">
            Enterprise Outcomes &amp; Client Feedback
          </h2>
        </div>

        {/* Dynamic Card Container with Random Transition */}
        <div
          key={`${currentIndex}-${activeTransition}`}
          className={`bg-paper-alt border border-line rounded-2xl p-8 sm:p-12 grid lg:grid-cols-12 gap-8 items-center shadow-lg ${activeTransition}`}
        >
          {/* Quote Section */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 text-brand-purple">
              <Quote className="w-8 h-8 opacity-80" />
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-purple">
                VERIFIED EXECUTIVE IMPACT
              </span>
            </div>

            <p className="font-display font-medium text-xl sm:text-2xl text-ink leading-relaxed">
              &ldquo;{current.quote}&rdquo;
            </p>

            <div className="pt-2 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
              <div className="text-sm font-semibold text-ink">
                — {current.role}, <span className="text-brand-purple font-medium">{current.sector}</span>
              </div>
            </div>
          </div>

          {/* Metadata Section */}
          <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-line pt-6 lg:pt-0 lg:pl-8 space-y-4 font-mono text-xs text-slate">
            <div className="flex justify-between items-center pb-2 border-b border-line-soft">
              <span className="uppercase text-slate-muted">ENGAGEMENT MODEL</span>
              <b className="text-ink font-semibold text-sm">{current.engagement}</b>
            </div>

            <div className="flex justify-between items-center pb-2 border-b border-line-soft">
              <span className="uppercase text-slate-muted">ENGAGEMENT DURATION</span>
              <b className="text-ink font-semibold text-sm">{current.duration}</b>
            </div>

            <div className="flex justify-between items-center pb-2 border-b border-line-soft">
              <span className="uppercase text-slate-muted">PLACEMENT / SCOPE</span>
              <b className="text-ink font-semibold text-sm">{current.teamSize}</b>
            </div>

            <div className="flex justify-between items-center">
              <span className="uppercase text-slate-muted">KEY OUTCOME</span>
              <b className="text-brand-purple font-semibold text-sm">{current.outcome}</b>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
