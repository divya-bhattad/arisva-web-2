import React, { useState } from 'react';
import { Calculator, ArrowRight, TrendingUp, Clock, ShieldCheck, Zap } from 'lucide-react';

export default function QACalculator({ onOpenContact }) {
  const [teamSize, setTeamSize] = useState(15);
  const [automationPercent, setAutomationPercent] = useState(25);
  const [releaseFrequency, setReleaseFrequency] = useState(2); // releases per month

  // Calculations
  const manualRatio = (100 - automationPercent) / 100;
  const estimatedHoursSpentTesting = Math.round(teamSize * 18 * manualRatio * releaseFrequency);
  const potentialHoursSaved = Math.round(estimatedHoursSpentTesting * 0.55);
  const defectEscapeReduction = Math.min(85, Math.round(30 + (100 - automationPercent) * 0.5));
  const velocityBoost = (1 + (automationPercent < 50 ? 0.45 : 0.25)).toFixed(1);

  return (
    <section id="calculator" className="py-24 bg-paper-alt border-b border-line-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue font-mono text-xs font-semibold tracking-wider uppercase">
            <Calculator className="w-3.5 h-3.5" />
            <span>INTERACTIVE TOOL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-ink">
            QA Maturity &amp; Velocity Estimator
          </h2>
          <p className="text-slate text-base sm:text-lg">
            See how much release time your engineering organization can reclaim by elevating test automation and AI-driven regression analysis with Arisva.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-stretch bg-white rounded-2xl border border-line shadow-xl overflow-hidden p-6 sm:p-10">
          
          {/* Left Column: Sliders & Controls */}
          <div className="lg:col-span-7 space-y-8 pr-0 lg:pr-6 lg:border-r border-line-soft flex flex-col justify-between">
            
            {/* Control 1: Team Size */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm font-semibold text-ink">
                <label htmlFor="team-size-range">Engineering &amp; QA Team Size</label>
                <span className="font-mono text-brand-purple font-bold text-base px-2.5 py-0.5 rounded bg-brand-purple/10">
                  {teamSize} Engineers
                </span>
              </div>
              <input
                id="team-size-range"
                type="range"
                min="5"
                max="100"
                step="5"
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="w-full h-2 bg-paper-alt rounded-lg appearance-none cursor-pointer accent-brand-purple"
              />
              <div className="flex justify-between text-xs font-mono text-slate-muted">
                <span>5 (Startup)</span>
                <span>50 (Mid-Market)</span>
                <span>100+ (Enterprise)</span>
              </div>
            </div>

            {/* Control 2: Current Automation % */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm font-semibold text-ink">
                <label htmlFor="automation-percent-range">Current Test Automation Coverage</label>
                <span className="font-mono text-brand-blue font-bold text-base px-2.5 py-0.5 rounded bg-brand-blue/10">
                  {automationPercent}% Automated
                </span>
              </div>
              <input
                id="automation-percent-range"
                type="range"
                min="0"
                max="90"
                step="5"
                value={automationPercent}
                onChange={(e) => setAutomationPercent(Number(e.target.value))}
                className="w-full h-2 bg-paper-alt rounded-lg appearance-none cursor-pointer accent-brand-blue"
              />
              <div className="flex justify-between text-xs font-mono text-slate-muted">
                <span>0% (Mostly Manual)</span>
                <span>50% (Partial Suite)</span>
                <span>90% (High Maturity)</span>
              </div>
            </div>

            {/* Control 3: Releases Per Month */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm font-semibold text-ink">
                <span>Release Cadence</span>
                <span className="font-mono text-brand-cyan font-bold text-sm px-2.5 py-0.5 rounded bg-brand-cyan/10">
                  {releaseFrequency === 1 && 'Monthly (1/mo)'}
                  {releaseFrequency === 2 && 'Bi-Weekly (2/mo)'}
                  {releaseFrequency === 4 && 'Weekly (4/mo)'}
                  {releaseFrequency === 8 && 'Continuous (8+/mo)'}
                </span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { label: 'Monthly', val: 1 },
                  { label: 'Bi-Weekly', val: 2 },
                  { label: 'Weekly', val: 4 },
                  { label: 'Continuous', val: 8 },
                ].map((opt) => (
                  <button
                    key={opt.val}
                    onClick={() => setReleaseFrequency(opt.val)}
                    className={`py-2 px-3 rounded-md text-xs font-semibold border transition-all cursor-pointer ${
                      releaseFrequency === opt.val
                        ? 'bg-ink text-white border-ink shadow'
                        : 'bg-paper text-slate border-line hover:border-ink'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Calculated Results Panel */}
          <div className="lg:col-span-5 bg-ink text-paper rounded-xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              <span className="font-mono text-xs text-brand-cyan tracking-widest uppercase block mb-1">
                PROJECTED ANNUAL IMPACT
              </span>
              <h3 className="text-xl font-display font-bold text-white mb-6">
                Estimated Acceleration
              </h3>

              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-brand-cyan" />
                    <div>
                      <div className="text-xs font-mono text-paper/60">Testing Hours Reclaimed</div>
                      <div className="text-xs text-paper/40">Per year</div>
                    </div>
                  </div>
                  <div className="text-2xl font-display font-bold text-brand-cyan">
                    {potentialHoursSaved.toLocaleString()} hrs
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-brand-purple-soft" />
                    <div>
                      <div className="text-xs font-mono text-paper/60">Defect Escape Reduction</div>
                      <div className="text-xs text-paper/40">Fewer production bugs</div>
                    </div>
                  </div>
                  <div className="text-2xl font-display font-bold text-brand-purple-soft">
                    {defectEscapeReduction}%
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-yellow-400" />
                    <div>
                      <div className="text-xs font-mono text-paper/60">Release Velocity</div>
                      <div className="text-xs text-paper/40">Speed multiplier</div>
                    </div>
                  </div>
                  <div className="text-2xl font-display font-bold text-yellow-400">
                    {velocityBoost}x
                  </div>
                </div>
              </div>
            </div>

            <a
              href="mailto:info@arisva.ca?subject=QA Assessment Inquiry"
              className="w-full gradient-btn text-white py-3.5 rounded-lg font-semibold text-center flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-brand-purple/40"
            >
              <span>Get Custom Assessment</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
