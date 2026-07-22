import React from 'react';
import { Search, Compass, CheckCircle2, Rocket } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      num: '01',
      title: 'Discover',
      description: 'We assess your current QA maturity, automation coverage, staffing gaps, and release pipeline friction points.',
      icon: Search,
      deliverables: 'QA Audit Report & Architecture Blueprint',
    },
    {
      num: '02',
      title: 'Build',
      description: 'Test strategy is designed, framework repositories are initialized, SDETs are placed, and AI tooling is deployed.',
      icon: Compass,
      deliverables: 'Automation Framework + Embedded Staff',
    },
    {
      num: '03',
      title: 'Verify',
      description: 'Continuous testing cycles run in parallel, quality gates validate every PR, and regression defects surface early.',
      icon: CheckCircle2,
      deliverables: 'CI/CD Gating & Real-Time Dashboards',
    },
    {
      num: '04',
      title: 'Rise',
      description: 'We tune, retrain, scale coverage, and upskill your internal teams — excellence held, not just hit once.',
      icon: Rocket,
      deliverables: 'Team Upskilling & Continuous Scaling',
    },
  ];

  return (
    <section id="process" className="py-16 bg-paper-alt border-b border-line-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono tracking-widest text-brand-purple uppercase font-semibold">
              OUR METHODOLOGY
            </span>
            <h2 className="text-3xl sm:text-4xl text-ink font-display font-bold mt-2 max-w-xl">
              How an engagement runs.
            </h2>
          </div>
          <p className="text-slate text-base sm:text-lg max-w-md">
            Four stages, same as any pipeline we&apos;d build for you — nothing ships until it clears the gate.
          </p>
        </div>

        {/* Process Steps Track */}
        <div className="grid md:grid-cols-4 gap-6 relative">
          
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-line z-0" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isLast = idx === steps.length - 1;

            return (
              <div
                key={step.num}
                className="relative z-10 bg-white rounded-xl p-6 border border-line hover:border-brand-purple/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Step Number Circle */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center font-mono font-bold text-sm border-2 transition-transform duration-200 group-hover:scale-110 ${
                        isLast
                          ? 'bg-ink text-brand-cyan border-ink'
                          : 'bg-paper-alt text-ink border-ink'
                      }`}
                    >
                      {step.num}
                    </div>
                    <Icon className="w-5 h-5 text-slate group-hover:text-brand-purple transition-colors" />
                  </div>

                  <h3 className="text-2xl font-display font-bold text-ink mb-3 group-hover:text-brand-purple transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-slate text-sm leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-line-soft">
                  <div className="text-[11px] font-mono text-slate-muted uppercase tracking-wider">
                    OUTPUT:
                  </div>
                  <div className="text-xs font-mono font-semibold text-brand-purple mt-0.5">
                    {step.deliverables}
                  </div>
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
