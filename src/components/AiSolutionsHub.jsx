import React, { useState } from 'react';
import { Sparkles, Cpu, Code2, FileText, CheckCircle2, Play, Copy, Check, Terminal, Layers, ArrowRight } from 'lucide-react';

export default function AiSolutionsHub() {
  const [activeTab, setActiveTab] = useState('generator'); // 'generator' | 'architecture'

  // AI Generator State
  const [selectedScenario, setSelectedScenario] = useState('checkout');
  const [isGenerating, setIsGenerating] = useState(false);
  const [codeTab, setCodeTab] = useState('bdd');
  const [copied, setCopied] = useState(false);

  // Neural Architecture State
  const [selectedLayer, setSelectedLayer] = useState('hidden');

  const presets = {
    checkout: {
      label: 'E-commerce Checkout & Payment Flow',
      prompt: 'User completes credit card checkout with 3D Secure verification',
      bdd: `Feature: Payment Checkout & Verification
  @severity=critical @regression
  Scenario: Successful credit card transaction
    Given the user has items in the shopping cart
    And the order total is calculated as $149.50
    When the user submits valid payment credentials
    And 3D Secure verification completes
    Then the payment gateway returns status 200 OK
    And an order confirmation email is dispatched to the user`,
      testCode: `import { test, expect } from '@playwright/test';

test('Verify successful payment checkout flow', async ({ page }) => {
  await page.goto('/checkout');
  await page.fill('[data-testid="cc-number"]', '4532••••••••1122');
  await page.fill('[data-testid="cc-expiry"]', '12/28');
  await page.click('button[type="submit"]');
  
  // Verify order confirmation
  await expect(page.locator('.order-success-banner')).toBeVisible({ timeout: 5000 });
  await expect(page.locator('.order-id')).toContainText('ORD-');
});`,
      aiRisk: { score: 'LOW RISK (0.02%)', coverage: '100% Path Coverage', healed: '0 Flaky Locators' }
    },
    sso: {
      label: 'Multi-Factor SSO Authentication',
      prompt: 'User authenticates via Enterprise Okta SSO with TOTP 2FA',
      bdd: `Feature: Multi-Factor Enterprise SSO
  @security @authentication
  Scenario: Successful SAML/Okta authentication with TOTP
    Given the user initiates SSO login for domain "enterprise.com"
    When the SAML Identity Provider returns an assertion token
    And the user enters a valid 6-digit TOTP code
    Then an encrypted session cookie is stored
    And the user is redirected to the main dashboard`,
      testCode: `import { test, expect } from '@playwright/test';

test('Verify enterprise SSO & TOTP authentication', async ({ page }) => {
  await page.goto('/login/sso');
  await page.fill('#domain-input', 'enterprise.com');
  await page.click('#sso-continue');
  
  await page.fill('#totp-input', '849201');
  await page.click('#verify-btn');
  await expect(page).toHaveURL('/dashboard');
});`,
      aiRisk: { score: 'VERY LOW (0.01%)', coverage: '98.5% Security Coverage', healed: 'Auto-Recovered Selector' }
    },
    inventory: {
      label: 'Logistics Fleet Dispatch & Inventory',
      prompt: 'Warehouse manager updates stock levels and dispatches delivery drone',
      bdd: `Feature: Logistics Stock & Fleet Dispatch
  @logistics @realtime
  Scenario: Bulk stock sync and delivery trigger
    Given the warehouse manager scans SKU "SKU-9921"
    When stock quantity is updated to +500 units
    Then the real-time WebSocket sync broadcasts to all terminals
    And a automated fleet dispatch manifest is generated`,
      testCode: `import { test, expect } from '@playwright/test';

test('Verify warehouse stock sync & dispatch trigger', async ({ page }) => {
  await page.goto('/warehouse/dispatch');
  await page.fill('#sku-search', 'SKU-9921');
  await page.click('#add-stock-btn');
  
  const wsNotice = page.locator('.ws-sync-badge');
  await expect(wsNotice).toHaveText('SYNCED');
});`,
      aiRisk: { score: 'OPTIMAL (0.00%)', coverage: '100% Real-Time Coverage', healed: '0 Flaky Locators' }
    }
  };

  const currentGen = presets[selectedScenario] || presets.checkout;

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
    }, 600);
  };

  const handleCopy = () => {
    const textToCopy = codeTab === 'bdd' ? currentGen.bdd : currentGen.testCode;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const layerDetails = {
    input: {
      title: '1. Input Layer — System Ingestion',
      subtitle: 'Continuous Telemetry & Artifact Processing',
      description: 'Ingests pull request AST diffs, Jira user stories, API OpenAPI specs, and Playwright execution traces in real time.',
      metrics: [
        { label: 'AST Parsers', value: 'JavaScript, TypeScript, Python, Java' },
        { label: 'Ingestion Latency', value: '< 120ms per PR' },
      ],
    },
    hidden: {
      title: '2. Hidden Layers — Pattern Learning & AST Diff',
      subtitle: 'Neural Anomaly & Blast-Radius Engine',
      description: 'Calculates code diff blast radius, evaluates flaky selector probability, and predicts high-risk regression failure paths.',
      metrics: [
        { label: 'Regression Reduction', value: '40% Faster Executions' },
        { label: 'Locator Repair', value: 'Self-Healing XPath & CSS' },
      ],
    },
    output: {
      title: '3. Output Layer — Defect Signal & Gating',
      subtitle: 'Automated CI/CD Release Decisioning',
      description: 'Generates BDD Gherkin specifications, executes Playwright test sub-suites, and emits pass/fail release gating signals.',
      metrics: [
        { label: 'False Positives', value: '0.00% Verified' },
        { label: 'CI/CD Gate', value: 'GitHub & GitLab Native' },
      ],
    },
  };

  const activeLayerInfo = layerDetails[selectedLayer];

  return (
    <section id="ai" className="py-16 bg-ink text-paper border-b border-white/10 relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#3FA9F5_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
              AI Intelligence Hub
            </h2>
          </div>

          {/* Unified AI View Switcher Tabs */}
          <div className="flex items-center gap-2 bg-white/5 p-1 rounded-xl border border-white/10">
            <button
              onClick={() => setActiveTab('generator')}
              className={`px-4 py-2 rounded-lg font-mono text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'generator'
                  ? 'bg-brand-purple text-white shadow'
                  : 'text-paper/70 hover:text-white hover:bg-white/10'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Live BDD &amp; Test Generator</span>
            </button>

            <button
              onClick={() => setActiveTab('architecture')}
              className={`px-4 py-2 rounded-lg font-mono text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'architecture'
                  ? 'bg-brand-purple text-white shadow'
                  : 'text-paper/70 hover:text-white hover:bg-white/10'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>Neural Architecture</span>
            </button>
          </div>
        </div>

        {/* View 1: Interactive BDD & Test Script Generator */}
        {activeTab === 'generator' && (
          <div className="bg-black/40 text-paper rounded-2xl border border-white/15 shadow-2xl overflow-hidden grid lg:grid-cols-12 animate-in fade-in duration-300">
            
            {/* Left Controls Panel */}
            <div className="lg:col-span-5 p-6 bg-white/5 border-b lg:border-b-0 lg:border-r border-white/10 space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-xs font-mono font-semibold uppercase text-brand-cyan">
                  1. SELECT FEATURE SCENARIO
                </span>
                <div className="space-y-2">
                  {Object.keys(presets).map((key) => (
                    <button
                      key={key}
                      onClick={() => {
                        setSelectedScenario(key);
                        handleGenerate();
                      }}
                      className={`w-full text-left p-3 rounded-lg border text-xs font-mono transition-all cursor-pointer ${
                        selectedScenario === key
                          ? 'bg-brand-purple/30 border-brand-purple text-white shadow-md'
                          : 'bg-white/5 border-white/10 text-paper/70 hover:bg-white/10'
                      }`}
                    >
                      <div className="font-semibold text-sm mb-0.5">{presets[key].label}</div>
                      <div className="text-[11px] text-white/50">{presets[key].prompt}</div>
                    </button>
                  ))}
                </div>

                <button
                  onClick={handleGenerate}
                  disabled={isGenerating}
                  className="w-full gradient-btn text-white py-2.5 rounded-lg font-mono text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-lg disabled:opacity-50 mt-2"
                >
                  <Play className={`w-3.5 h-3.5 ${isGenerating ? 'animate-spin' : ''}`} />
                  <span>{isGenerating ? 'GENERATING...' : 'RUN AI GENERATOR'}</span>
                </button>
              </div>

              <div className="pt-3 border-t border-white/10 text-xs font-mono text-white/50 flex items-center justify-between">
                <span>ENGINE: ARISVA-AI-v4.2</span>
                <span className="text-brand-cyan">STATUS: READY</span>
              </div>
            </div>

            {/* Right Live Code Output */}
            <div className="lg:col-span-7 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/10">
                  <div className="flex gap-2">
                    <button
                      onClick={() => setCodeTab('bdd')}
                      className={`px-3 py-1 rounded font-mono text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                        codeTab === 'bdd' ? 'bg-brand-purple text-white' : 'bg-white/5 text-white/60 hover:bg-white/10'
                      }`}
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>BA (Gherkin BDD)</span>
                    </button>

                    <button
                      onClick={() => setCodeTab('code')}
                      className={`px-3 py-1 rounded font-mono text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                        codeTab === 'code' ? 'bg-brand-blue text-white' : 'bg-white/5 text-white/60 hover:bg-white/10'
                      }`}
                    >
                      <Code2 className="w-3.5 h-3.5" />
                      <span>QA (Playwright TS)</span>
                    </button>
                  </div>

                  <button
                    onClick={handleCopy}
                    className="px-3 py-1 rounded bg-white/10 hover:bg-white/20 text-white font-mono text-xs flex items-center gap-1.5 cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied!' : 'Copy Code'}</span>
                  </button>
                </div>

                <div className="bg-black/60 rounded-xl p-4 border border-white/10 font-mono text-xs text-brand-cyan overflow-x-auto min-h-[190px]">
                  {isGenerating ? (
                    <div className="flex items-center justify-center h-40 text-white/60 gap-2">
                      <Terminal className="w-4 h-4 animate-spin text-brand-cyan" />
                      <span>Synthesizing BDD scenarios & Playwright scripts...</span>
                    </div>
                  ) : (
                    <pre className="whitespace-pre-wrap leading-relaxed text-paper/90 font-mono">
                      {codeTab === 'bdd' ? currentGen.bdd : currentGen.testCode}
                    </pre>
                  )}
                </div>
              </div>

              {/* Telemetry Footer */}
              <div className="mt-4 pt-3 border-t border-white/10 grid grid-cols-3 gap-2 font-mono text-[10px]">
                <div className="bg-white/5 p-2 rounded border border-white/10">
                  <span className="text-white/40 block">DEFECT RISK</span>
                  <span className="text-green-400 font-bold">{currentGen.aiRisk.score}</span>
                </div>
                <div className="bg-white/5 p-2 rounded border border-white/10">
                  <span className="text-white/40 block">COVERAGE</span>
                  <span className="text-brand-cyan font-bold">{currentGen.aiRisk.coverage}</span>
                </div>
                <div className="bg-white/5 p-2 rounded border border-white/10">
                  <span className="text-white/40 block">SELF-HEALING</span>
                  <span className="text-brand-purple-soft font-bold">{currentGen.aiRisk.healed}</span>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* View 2: Neural Architecture Diagram & Inspector */}
        {activeTab === 'architecture' && (
          <div className="grid lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
            
            {/* SVG Diagram */}
            <div className="lg:col-span-7 card-glass rounded-xl p-6 border border-white/15 shadow-2xl">
              <svg
                className="w-full h-auto max-h-[280px]"
                viewBox="0 0 700 420"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="neuralGradHub" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3FA9F5" />
                    <stop offset="50%" stopColor="#7C2CEC" />
                    <stop offset="100%" stopColor="#B26CF0" />
                  </linearGradient>
                </defs>

                <g stroke="url(#neuralGradHub)" strokeWidth="1.5" className="animate-dash" opacity="0.6">
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

                {[80, 190, 300, 410].map((cy, idx) => (
                  <circle
                    key={`input-node-${idx}`}
                    cx="90"
                    cy={cy}
                    r={selectedLayer === 'input' ? '18' : '14'}
                    fill="#3FA9F5"
                    className="cursor-pointer transition-all hover:scale-110"
                    onClick={() => setSelectedLayer('input')}
                  />
                ))}

                {[55, 160, 265, 370].map((cy, idx) => (
                  <circle
                    key={`hidden-node-${idx}`}
                    cx="350"
                    cy={cy}
                    r={selectedLayer === 'hidden' ? '18' : '14'}
                    fill="#7C2CEC"
                    className="cursor-pointer transition-all hover:scale-110"
                    onClick={() => setSelectedLayer('hidden')}
                  />
                ))}

                {[135, 325].map((cy, idx) => (
                  <circle
                    key={`output-node-${idx}`}
                    cx="610"
                    cy={cy}
                    r={selectedLayer === 'output' ? '18' : '14'}
                    fill="#B26CF0"
                    className="cursor-pointer transition-all hover:scale-110"
                    onClick={() => setSelectedLayer('output')}
                  />
                ))}
              </svg>

              <div className="flex items-center justify-around font-mono text-xs text-white/70 pt-4 border-t border-white/10">
                <button onClick={() => setSelectedLayer('input')} className={`cursor-pointer hover:text-brand-cyan ${selectedLayer === 'input' ? 'text-brand-cyan font-bold' : ''}`}>
                  1. Input Ingestion
                </button>
                <button onClick={() => setSelectedLayer('hidden')} className={`cursor-pointer hover:text-brand-purple-soft ${selectedLayer === 'hidden' ? 'text-brand-purple-soft font-bold' : ''}`}>
                  2. AST &amp; Pattern Learning
                </button>
                <button onClick={() => setSelectedLayer('output')} className={`cursor-pointer hover:text-purple-300 ${selectedLayer === 'output' ? 'text-purple-300 font-bold' : ''}`}>
                  3. Defect &amp; Gating Output
                </button>
              </div>
            </div>

            {/* Inspector Details */}
            <div className="lg:col-span-5 card-glass rounded-xl p-6 border border-white/15 shadow-xl space-y-4">
              <span className="text-[10px] font-mono font-bold tracking-widest px-2.5 py-1 rounded bg-brand-purple/20 text-brand-purple-soft border border-brand-purple/30 uppercase">
                INSPECTOR: {selectedLayer.toUpperCase()} LAYER
              </span>

              <h3 className="text-xl font-display font-bold text-white">
                {activeLayerInfo.title}
              </h3>

              <p className="text-paper/70 text-sm leading-relaxed">
                {activeLayerInfo.description}
              </p>

              <div className="space-y-2 pt-2 border-t border-white/10">
                {activeLayerInfo.metrics.map((m, idx) => (
                  <div key={idx} className="flex justify-between items-center bg-white/5 p-2.5 rounded font-mono text-xs">
                    <span className="text-white/50">{m.label}:</span>
                    <span className="text-brand-cyan font-bold">{m.value}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
