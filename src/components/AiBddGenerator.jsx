import React, { useState } from 'react';
import { Sparkles, Code2, FileText, CheckCircle2, Play, Copy, Check, Terminal, ArrowRight } from 'lucide-react';

export default function AiBddGenerator() {
  const [selectedScenario, setSelectedScenario] = useState('checkout');
  const [customText, setCustomText] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeTab, setActiveTab] = useState('bdd');
  const [copied, setCopied] = useState(false);

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
  @security @compliance
  Scenario: Successful SAML/Okta authentication with TOTP
    Given the user initiates SSO login for domain "enterprise.com"
    When the SAML Identity Provider returns an assertion token
    And the user enters a valid 6-digit TOTP code
    Then an encrypted session cookie is stored
    And the user is redirected to the main dashboard`,
      testCode: `import { test, expect } from '@playwright/test';

test('Verify enterprise SSO & TOTP authentication', async ({ page, request }) => {
  await page.goto('/login/sso');
  await page.fill('#domain-input', 'enterprise.com');
  await page.click('#sso-continue');
  
  // Validate TOTP session
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
  
  // Real-time WebSocket verification
  const wsNotice = page.locator('.ws-sync-badge');
  await expect(wsNotice).toHaveText('SYNCED');
});`,
      aiRisk: { score: 'OPTIMAL (0.00%)', coverage: '100% Real-Time Coverage', healed: '0 Flaky Locators' }
    }
  };

  const current = presets[selectedScenario] || presets.checkout;

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
    }, 800);
  };

  const handleCopy = () => {
    const textToCopy = activeTab === 'bdd' ? current.bdd : current.testCode;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="ai-generator" className="py-24 bg-paper border-b border-line-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/30 text-brand-purple font-mono text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LIVE INTERACTIVE DEMO</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-ink leading-tight">
            Watch AI Generate BDD Stories &amp; Test Code
          </h2>
          <p className="text-slate text-base sm:text-lg max-w-2xl mx-auto">
            Select a feature scenario below to see how Arisva&apos;s AI translates raw requirements into Gherkin BDD specifications and Playwright test scripts in seconds.
          </p>
        </div>

        {/* Demo App Container */}
        <div className="max-w-5xl mx-auto bg-ink text-paper rounded-2xl border border-white/15 shadow-2xl overflow-hidden grid lg:grid-cols-12">
          
          {/* Left Controls Panel */}
          <div className="lg:col-span-5 p-6 sm:p-8 bg-white/5 border-b lg:border-b-0 lg:border-r border-white/10 space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono font-semibold uppercase text-brand-cyan">
                  1. SELECT FEATURE SCENARIO
                </span>
                <div className="space-y-2.5">
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
              </div>

              <div className="pt-2 space-y-2">
                <span className="text-xs font-mono font-semibold uppercase text-brand-cyan">
                  2. TRIGGER AI ENGINE
                </span>
                <button
                  onClick={handleGenerate}
                  disabled={isGenerating}
                  className="w-full gradient-btn text-white py-3 rounded-lg font-mono text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-lg disabled:opacity-50"
                >
                  <Play className={`w-3.5 h-3.5 ${isGenerating ? 'animate-spin' : ''}`} />
                  <span>{isGenerating ? 'GENERATING SPECIFICATIONS...' : 'GENERATE BDD & TEST CODE'}</span>
                </button>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 text-xs font-mono text-white/50 flex items-center justify-between">
              <span>ENGINE: ARISVA-AI-v4.2</span>
              <span className="text-brand-cyan">STATUS: READY</span>
            </div>
          </div>

          {/* Right Live Code Output Terminal */}
          <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between bg-black/40">
            <div>
              {/* Terminal Tab Bar */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                <div className="flex gap-2">
                  <button
                    onClick={() => setActiveTab('bdd')}
                    className={`px-3 py-1.5 rounded font-mono text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                      activeTab === 'bdd'
                        ? 'bg-brand-purple text-white'
                        : 'bg-white/5 text-white/60 hover:bg-white/10'
                    }`}
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>BA Output (Gherkin BDD)</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('code')}
                    className={`px-3 py-1.5 rounded font-mono text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                      activeTab === 'code'
                        ? 'bg-brand-blue text-white'
                        : 'bg-white/5 text-white/60 hover:bg-white/10'
                    }`}
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    <span>QA Output (Playwright)</span>
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

              {/* Code Display Area */}
              <div className="bg-black/60 rounded-xl p-4 border border-white/10 font-mono text-xs text-brand-cyan overflow-x-auto min-h-[220px]">
                {isGenerating ? (
                  <div className="flex items-center justify-center h-48 text-white/60 gap-2">
                    <Terminal className="w-4 h-4 animate-spin text-brand-cyan" />
                    <span>Synthesizing BDD scenarios & Playwright scripts...</span>
                  </div>
                ) : (
                  <pre className="whitespace-pre-wrap leading-relaxed text-paper/90 font-mono">
                    {activeTab === 'bdd' ? current.bdd : current.testCode}
                  </pre>
                )}
              </div>
            </div>

            {/* AI Risk Score Footer */}
            <div className="mt-6 pt-4 border-t border-white/10 grid grid-cols-3 gap-2 font-mono text-[11px]">
              <div className="bg-white/5 p-2.5 rounded border border-white/10">
                <span className="text-white/40 block">DEFECT RISK</span>
                <span className="text-green-400 font-bold">{current.aiRisk.score}</span>
              </div>
              <div className="bg-white/5 p-2.5 rounded border border-white/10">
                <span className="text-white/40 block">PATH COVERAGE</span>
                <span className="text-brand-cyan font-bold">{current.aiRisk.coverage}</span>
              </div>
              <div className="bg-white/5 p-2.5 rounded border border-white/10">
                <span className="text-white/40 block">SELF-HEALING</span>
                <span className="text-brand-purple-soft font-bold">{current.aiRisk.healed}</span>
              </div>
            </div>

          </div>

        </div>

        {/* CTA Footer */}
        <div className="mt-12 text-center">
          <a
            href="mailto:info@arisva.ca?subject=AI QA %26 BA Pipeline Setup Inquiry"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-purple hover:text-brand-purple-deep"
          >
            <span>Want this AI automation pipeline deployed for your team? Email info@arisva.ca →</span>
          </a>
        </div>

      </div>
    </section>
  );
}
