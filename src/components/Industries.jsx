import React, { useState } from 'react';
import { Building2, Shield, HeartPulse, ShoppingCart, Cloud, Truck, GraduationCap, FileCheck } from 'lucide-react';

export default function Industries() {
  const [activeIndustry, setActiveIndustry] = useState(0);

  const industriesData = [
    {
      name: 'FinTech',
      icon: Building2,
      headline: 'Zero-Defect Payment & Financial API QA',
      details: 'Automated transaction messaging, security suites, transaction stress testing, and core banking API validation.',
    },
    {
      name: 'Healthcare Tech',
      icon: HeartPulse,
      headline: 'Medical Software & Clinical Workflow QA',
      details: 'HL7/FHIR protocol validation, EHR system integration testing, and clinical workflow automation scripts.',
    },
    {
      name: 'E-commerce',
      icon: ShoppingCart,
      headline: 'Peak Flash-Sale & Cart Checkout QA',
      details: 'Black Friday load testing with k6, cross-browser payment gateway verification, and inventory sync edge-case testing.',
    },
    {
      name: 'SaaS & Enterprise',
      icon: Cloud,
      headline: 'Multi-Tenant RBAC & CI/CD Pipeline Gating',
      details: 'Role-based access control regression, multi-region database latency testing, and zero-downtime release pipeline checks.',
    },
    {
      name: 'Logistics',
      icon: Truck,
      headline: 'Real-Time Telematics & Fleet Dispatch QA',
      details: 'GPS mapping API mock testing, driver app offline-sync verification, and high-frequency IoT payload automation.',
    },
    {
      name: 'EdTech',
      icon: GraduationCap,
      headline: 'Scalable LMS & Live Video Streaming QA',
      details: 'Concurrent user testing for virtual classrooms, user experience verification, and mobile learning app automation.',
    },
    {
      name: 'Insurance',
      icon: FileCheck,
      headline: 'Complex Rules & Claims Engine Testing',
      details: 'Actuarial calculation matrix verification, claims portal end-to-end user journeys, and legacy mainframe API bridges.',
    },
  ];

  const current = industriesData[activeIndustry];

  return (
    <section id="industries" className="py-16 bg-paper border-b border-line-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono tracking-widest text-brand-purple uppercase font-semibold">
            TARGET SECTORS
          </span>
          <h2 className="text-3xl sm:text-4xl text-ink font-display font-bold mt-2">
            Built for teams that can&apos;t afford a bad release.
          </h2>
          <p className="text-slate text-base sm:text-lg mt-3">
            Arisva works across high-stakes industries where quality gaps are expensive — and hiring the wrong person is worse.
          </p>
        </div>

        {/* Industry Pills Selector */}
        <div className="flex flex-wrap gap-3 mb-10">
          {industriesData.map((ind, idx) => {
            const Icon = ind.icon;
            const isActive = activeIndustry === idx;
            return (
              <button
                key={ind.name}
                onClick={() => setActiveIndustry(idx)}
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold border transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-ink text-white border-ink shadow-md scale-105'
                    : 'bg-white text-ink border-line hover:border-brand-purple/50 hover:bg-paper-alt'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-brand-cyan' : 'text-brand-purple'}`} />
                <span>{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Industry Detail Card */}
        <div key={activeIndustry} className="bg-white rounded-2xl border border-line p-8 shadow-lg max-w-4xl flex flex-col md:flex-row gap-6 items-start justify-between glass-sheen animate-in fade-in duration-300">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-purple/10 text-brand-purple font-mono text-xs font-semibold">
                <span>{current.name} SPECIALIZATION</span>
              </div>

              {/* Live Telemetry Ping */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-600 font-mono text-[11px] font-bold border border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>LIVE PIPELINE HEALTH VERIFIED</span>
              </div>
            </div>

            <h3 className="text-2xl font-display font-bold text-ink">
              {current.headline}
            </h3>
            <p className="text-slate text-base leading-relaxed">
              {current.details}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
