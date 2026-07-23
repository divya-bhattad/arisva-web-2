import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, Play, RefreshCw, Terminal, Sparkles, ShieldCheck, Clock, Zap, Award, Copy, Check } from 'lucide-react';

export default function Hero({ onOpenContact }) {
  const [pipelineRunning, setPipelineRunning] = useState(false);
  const [pipelinePasses, setPipelinePasses] = useState([true, true, true, true]);
  const [activeTrustIndex, setActiveTrustIndex] = useState(0);
  const [heroEmailCopied, setHeroEmailCopied] = useState(false);

  const trustHighlights = [
    {
      icon: ShieldCheck,
      badge: 'ENTERPRISE SECURITY',
      title: 'Enterprise Data & Code Security',
      sub: 'Complete IP protection and safe data handling protocols',
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-400/10 border-emerald-400/30',
    },
    {
      icon: Clock,
      badge: 'RAPID ONBOARDING',
      title: '48-Hour SDET & BA Talent Placement',
      sub: 'Pre-vetted senior experts ready to integrate immediately',
      color: 'text-brand-cyan',
      bgColor: 'bg-brand-cyan/10 border-brand-cyan/30',
    },
    {
      icon: Zap,
      badge: 'RELEASE VELOCITY',
      title: 'Zero-Downtime Pipeline Integration',
      sub: 'Automated PR testing for fast, seamless releases',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/10 border-yellow-400/30',
    },
    {
      icon: Award,
      badge: 'QUALITY GUARANTEE',
      title: '99.9% Production Defect Prevention',
      sub: 'AI-assisted regression testing catches flaws before release',
      color: 'text-brand-purple-soft',
      bgColor: 'bg-brand-purple/20 border-brand-purple/40',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTrustIndex((prev) => (prev + 1) % trustHighlights.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const stages = [
    { name: 'BA & Requirements defined', log: 'BRD, BDD stories & acceptance criteria verified' },
    { name: 'QA Automation suite executed', log: 'Playwright, Cypress & API 100% pass' },
    { name: 'AI regression & AST scan', log: '0 critical anomalies flagged by AI model' },
    { name: 'Team staffed & Web Designed', log: 'SDET + BA placed & Web UI/UX deployed' },
  ];

  const handleRunPipeline = () => {
    if (pipelineRunning) return;
    setPipelineRunning(true);
    setPipelinePasses([false, false, false, false]);

    stages.forEach((_, idx) => {
      setTimeout(() => {
        setPipelinePasses((prev) => {
          const updated = [...prev];
          updated[idx] = true;
          return updated;
        });
        if (idx === stages.length - 1) {
          setPipelineRunning(false);
        }
      }, (idx + 1) * 600);
    });
  };

  return (
    <section className="relative hero-gradient text-paper pt-16 pb-24 overflow-hidden border-b border-white/10">
      {/* Background Neural Grid SVG */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="heroEdgeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3FA9F5" />
              <stop offset="100%" stopColor="#B26CF0" />
            </linearGradient>
          </defs>
          <g stroke="url(#heroEdgeGrad)" strokeWidth="1" opacity="0.3">
            {[110, 250, 390, 530].map((y1, i) =>
              [70, 210, 350, 490, 630].map((y2, j) => (
                <line key={`line1-${i}-${j}`} x1="140" y1={y1} x2="560" y2={y2} />
              ))
            )}
            {[70, 210, 350, 490, 630].map((y1, i) =>
              [200, 390, 580].map((y2, j) => (
                <line key={`line2-${i}-${j}`} x1="560" y1={y1} x2="980" y2={y2} />
              ))
            )}
          </g>
          <circle cx="140" cy="110" r="5" fill="#3FA9F5" />
          <circle cx="140" cy="250" r="5" fill="#3FA9F5" />
          <circle cx="140" cy="390" r="5" fill="#3FA9F5" />
          <circle cx="560" cy="210" r="6" fill="#7C2CEC" />
          <circle cx="560" cy="350" r="6" fill="#7C2CEC" />
          <circle cx="980" cy="390" r="7" fill="#B26CF0" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan font-mono text-xs tracking-widest uppercase font-semibold">
              <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
              <span>Your Trusted Partner in Software Excellence</span>
            </div>

            {/* Headline */}
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.08] bg-gradient-to-r from-brand-cyan via-brand-purple-soft to-purple-400 bg-clip-text text-transparent">
              Rise through excellence.
            </h1>

            {/* Subhead / Lede */}
            <p className="text-lg sm:text-xl text-paper/80 max-w-2xl font-normal leading-relaxed">
              Arisva pairs rigorous software QA with top-tier staffing and AI tooling —
              so every release ships tested, every team is staffed right, and every engineer
              keeps getting sharper.
            </p>

            {/* Unified CTA Action Group */}
            <div className="pt-2 flex items-center gap-3">
              {/* Primary Dual-Action Gradient Pill */}
              <div className="inline-flex items-center rounded-lg bg-gradient-to-r from-brand-blue to-brand-purple p-0.5 shadow-xl">
                <a
                  href="mailto:info@arisva.ca"
                  className="px-6 py-3.5 text-white font-semibold text-base flex items-center gap-2 hover:opacity-95 transition-opacity"
                >
                  <span>Talk to our team</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <div className="h-6 w-[1px] bg-white/25" />
                <button
                  onClick={() => {
                    navigator.clipboard.writeText('info@arisva.ca');
                    setHeroEmailCopied(true);
                    setTimeout(() => setHeroEmailCopied(false), 2000);
                  }}
                  className="px-4 py-3.5 text-white/90 hover:text-white flex items-center gap-1.5 text-xs font-mono font-medium hover:bg-white/10 rounded-r-lg transition-colors cursor-pointer"
                  title="Copy info@arisva.ca"
                >
                  {heroEmailCopied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-brand-cyan" />}
                  <span>{heroEmailCopied ? 'Copied!' : 'Copy Email'}</span>
                </button>
              </div>
            </div>

            {/* Live Trust & Guarantee Animation Widget */}
            <div className="pt-4 space-y-3">
              <div className="flex items-center justify-between gap-4 text-xs font-mono">
                <span className="text-white/50 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  Live Quality &amp; Trust Verification
                </span>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple text-white font-sans text-xs font-bold tracking-wide shadow-lg shadow-brand-cyan/25 hover:shadow-brand-purple/40 hover:scale-105 transition-all duration-200 group border border-white/30"
                >
                  <span>Explore services</span>
                  <ArrowRight className="w-3.5 h-3.5 rotate-90 text-cyan-200 group-hover:translate-y-0.5 transition-transform" />
                </a>
              </div>

              <div className="card-glass rounded-xl p-4 border border-white/15 shadow-xl flex items-center justify-between gap-4 transition-all duration-300">
                {(() => {
                  const activeItem = trustHighlights[activeTrustIndex];
                  const IconComponent = activeItem.icon;
                  return (
                    <div key={activeTrustIndex} className="flex items-center gap-4 animate-in fade-in duration-300">
                      <div className={`w-11 h-11 rounded-lg border flex items-center justify-center ${activeItem.bgColor}`}>
                        <IconComponent className={`w-6 h-6 ${activeItem.color}`} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className={`text-[10px] font-mono font-bold tracking-wider px-2 py-0.5 rounded border ${activeItem.bgColor} ${activeItem.color}`}>
                            {activeItem.badge}
                          </span>
                        </div>
                        <h4 className="text-sm sm:text-base font-semibold text-white mt-1">
                          {activeItem.title}
                        </h4>
                        <p className="text-xs text-paper/70 mt-0.5">
                          {activeItem.sub}
                        </p>
                      </div>
                    </div>
                  );
                })()}
              </div>

              {/* Progress Indicators */}
              <div className="flex items-center gap-1.5 pt-1">
                {trustHighlights.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTrustIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      activeTrustIndex === idx ? 'w-8 bg-brand-cyan' : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Show trust pillar ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Interactive Release Pipeline Card */}
          <div className="lg:col-span-5">
            <div className="card-glass rounded-xl p-6 sm:p-8 shadow-2xl relative border border-white/15">
              {/* Header bar */}
              <div className="flex items-center justify-between font-mono text-xs text-white/60 mb-6 pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-brand-cyan" />
                  <span>RELEASE_PIPELINE.log</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                </div>
              </div>

              {/* Stages List */}
              <div className="space-y-4">
                {stages.map((stage, index) => {
                  const passed = pipelinePasses[index];
                  return (
                    <div
                      key={index}
                      className={`flex items-center justify-between p-3 rounded-lg border transition-all duration-300 ${
                        passed
                          ? 'bg-brand-purple/10 border-brand-purple/30 text-white'
                          : 'bg-white/5 border-white/5 text-white/40'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                            passed
                              ? 'bg-brand-purple/30 border border-brand-purple text-brand-purple-soft'
                              : 'bg-white/10 border border-white/20 text-white/30'
                          }`}
                        >
                          {passed ? (
                            <CheckCircle2 className="w-4 h-4 text-brand-purple-soft" />
                          ) : (
                            <span className="w-2 h-2 rounded-full bg-white/40 animate-ping" />
                          )}
                        </div>
                        <div>
                          <div className="text-sm font-medium">{stage.name}</div>
                          <div className="text-[11px] font-mono text-white/50">{stage.log}</div>
                        </div>
                      </div>

                      <div className="font-mono text-xs font-semibold text-brand-cyan tracking-wider">
                        {passed ? 'PASS' : 'RUNNING...'}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Pipeline Footer */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <div className="text-white/60">
                  <span>STATUS: </span>
                  <b className="text-brand-cyan tracking-wide">
                    {pipelineRunning ? 'EVALUATING PIPELINE...' : 'READY TO SHIP'}
                  </b>
                </div>

                <button
                  onClick={handleRunPipeline}
                  disabled={pipelineRunning}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/10 hover:bg-white/20 border border-white/20 text-white font-mono text-xs transition-colors cursor-pointer disabled:opacity-50"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${pipelineRunning ? 'animate-spin' : ''}`} />
                  <span>Run Scan</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
