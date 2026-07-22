import React, { useState } from 'react';
import { Cpu, Zap, Activity, CheckCircle, AlertTriangle } from 'lucide-react';

export default function AiFundamentals() {
  const [selectedLayer, setSelectedLayer] = useState('input');

  const layerInfo = {
    input: {
      title: 'Input Layer — Test Signals & App Telemetry',
      color: '#3FA9F5',
      badge: 'INPUT STAGE',
      description:
        'Captures raw test execution traces, HTTP API payload diffs, browser DOM mutations, console logs, and git commit history directly from CI/CD runners.',
      metrics: [
        { label: 'Signals Processed', val: '50,000+ / day' },
        { label: 'Latency', val: '< 12ms per event' },
        { label: 'Data Types', val: 'DOM Tree, Network Traces, Video Logs' },
      ],
    },
    hidden: {
      title: 'Hidden Layers — Pattern Learning & AST Scans',
      color: '#7C2CEC',
      badge: 'HIDDEN STAGE',
      description:
        'Deep learning nodes analyze historical test failure trends, code change blast-radius (AST analysis), and cross-feature dependencies to evaluate risk.',
      metrics: [
        { label: 'Model Layers', val: '4 Neural Dense Blocks' },
        { label: 'Pattern Accuracy', val: '99.4%' },
        { label: 'Self-Healing Locators', val: 'Active (XPath/CSS recovery)' },
      ],
    },
    output: {
      title: 'Output Layer — Defect Prediction & Selection',
      color: '#B26CF0',
      badge: 'OUTPUT STAGE',
      description:
        'Generates automated decision outputs: prioritized test suite selection (reducing test run times by 40%), automated bug triage tickets, and pass/flag status.',
      metrics: [
        { label: 'Regression Reduction', val: '40% Time Saved' },
        { label: 'False Positive Rate', val: '< 0.5%' },
        { label: 'Decision Output', val: 'PASS / FLAG / INVESTIGATE' },
      ],
    },
  };

  const currentLayer = layerInfo[selectedLayer];

  return (
    <section id="ai" className="relative py-24 hero-gradient text-paper border-b border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Explanatory Content */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-purple/20 border border-brand-purple/40 text-brand-purple-soft font-mono text-xs tracking-widest uppercase">
              <Cpu className="w-3.5 h-3.5" />
              <span>AI Fundamentals</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white leading-tight">
              How our AI actually helps QA
            </h2>

            <p className="text-paper/75 text-base sm:text-lg leading-relaxed">
              Under the hood, our AI-assisted testing runs on a neural architecture: raw signals from your app pass through hidden layers that learn patterns from past test runs, and come out as a prioritized call — pass, flag, or investigate.
            </p>

            {/* Interactive Layer Switcher */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-mono text-white/50 tracking-wider uppercase block">
                Click a layer below to inspect architecture:
              </span>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => setSelectedLayer('input')}
                  className={`flex items-center justify-between p-3 rounded-lg border transition-all text-left cursor-pointer ${
                    selectedLayer === 'input'
                      ? 'bg-brand-cyan/20 border-brand-cyan text-white shadow-lg'
                      : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-[#3FA9F5]" />
                    <span className="font-mono text-sm font-semibold">1. Input Layer</span>
                  </div>
                  <span className="text-xs font-mono opacity-60">Test Signals</span>
                </button>

                <button
                  onClick={() => setSelectedLayer('hidden')}
                  className={`flex items-center justify-between p-3 rounded-lg border transition-all text-left cursor-pointer ${
                    selectedLayer === 'hidden'
                      ? 'bg-brand-purple/30 border-brand-purple text-white shadow-lg'
                      : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-[#7C2CEC]" />
                    <span className="font-mono text-sm font-semibold">2. Hidden Layers</span>
                  </div>
                  <span className="text-xs font-mono opacity-60">Pattern Learning</span>
                </button>

                <button
                  onClick={() => setSelectedLayer('output')}
                  className={`flex items-center justify-between p-3 rounded-lg border transition-all text-left cursor-pointer ${
                    selectedLayer === 'output'
                      ? 'bg-brand-purple-soft/20 border-brand-purple-soft text-white shadow-lg'
                      : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-[#B26CF0]" />
                    <span className="font-mono text-sm font-semibold">3. Output Layer</span>
                  </div>
                  <span className="text-xs font-mono opacity-60">Defect Signal</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Diagram + Active Node Inspector Card */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* SVG Neural Diagram */}
            <div className="card-glass rounded-xl p-6 border border-white/15 shadow-2xl">
              <svg
                className="w-full h-auto max-h-[300px]"
                viewBox="0 0 700 420"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="neuralGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3FA9F5" />
                    <stop offset="50%" stopColor="#7C2CEC" />
                    <stop offset="100%" stopColor="#B26CF0" />
                  </linearGradient>
                </defs>

                {/* Connecting Edges with Animated Dash Laser Flow */}
                <g stroke="url(#neuralGrad)" strokeWidth="1.5" className="animate-dash" opacity={selectedLayer ? '0.75' : '0.4'}>
                  {[80, 190, 300, 410].map((y1, i) =>
                    [55, 160, 265, 370].map((y2, j) => (
                      <line key={`in-hid-${i}-${j}`} x1="90" y1={y1} x2="350" y2={y2} />
                    ))
                  )}
                  {[55, 160, 265, 370].map((y1, i) =>
                    [135, 325].map((y2, j) => (
                      <line key={`hid-out-${i}-${j}`} x1="350" y1={y1} x2="610" y2={y2} />
                    ))
                  )}
                </g>

                {/* Input Nodes (Left Column) */}
                {[80, 190, 300, 410].map((cy, idx) => (
                  <circle
                    key={`input-node-${idx}`}
                    cx="90"
                    cy={cy}
                    r={selectedLayer === 'input' ? '12' : '9'}
                    fill="#3FA9F5"
                    className="cursor-pointer transition-all duration-200 hover:scale-125"
                    onClick={() => setSelectedLayer('input')}
                  />
                ))}

                {/* Hidden Nodes (Middle Column) */}
                {[55, 160, 265, 370].map((cy, idx) => (
                  <circle
                    key={`hidden-node-${idx}`}
                    cx="350"
                    cy={cy}
                    r={selectedLayer === 'hidden' ? '12' : '9'}
                    fill="#7C2CEC"
                    className="cursor-pointer transition-all duration-200 hover:scale-125"
                    onClick={() => setSelectedLayer('hidden')}
                  />
                ))}

                {/* Output Nodes (Right Column) */}
                {[135, 325].map((cy, idx) => (
                  <circle
                    key={`output-node-${idx}`}
                    cx="610"
                    cy={cy}
                    r={selectedLayer === 'output' ? '14' : '10'}
                    fill="#B26CF0"
                    className="cursor-pointer transition-all duration-200 hover:scale-125"
                    onClick={() => setSelectedLayer('output')}
                  />
                ))}

                {/* Column Labels */}
                <text x="90" y="440" font imperial="true" fontFamily="IBM Plex Mono" fontSize="13" fill="#3FA9F5" textAnchor="middle" fontWeight="bold">
                  INPUT
                </text>
                <text x="350" y="440" fontFamily="IBM Plex Mono" fontSize="13" fill="#7C2CEC" textAnchor="middle" fontWeight="bold">
                  HIDDEN
                </text>
                <text x="610" y="440" fontFamily="IBM Plex Mono" fontSize="13" fill="#B26CF0" textAnchor="middle" fontWeight="bold">
                  OUTPUT
                </text>
              </svg>
            </div>

            {/* Inspector Detail Card */}
            <div className="bg-white/10 border border-white/20 backdrop-blur-md rounded-xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-white/10 text-white">
                  {currentLayer.badge}
                </span>
                <div className="flex items-center gap-1.5 text-xs font-mono text-brand-cyan">
                  <Activity className="w-3.5 h-3.5 animate-pulse" />
                  <span>LIVE INSPECTOR</span>
                </div>
              </div>

              <h3 className="text-xl font-display font-bold text-white">
                {currentLayer.title}
              </h3>

              <p className="text-sm text-paper/80 leading-relaxed">
                {currentLayer.description}
              </p>

              {/* Live Metrics */}
              <div className="grid sm:grid-cols-3 gap-3 pt-2">
                {currentLayer.metrics.map((m, idx) => (
                  <div key={idx} className="bg-black/30 p-3 rounded border border-white/10">
                    <div className="text-[11px] font-mono text-white/50">{m.label}</div>
                    <div className="text-sm font-mono font-bold text-brand-cyan mt-1">{m.val}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
