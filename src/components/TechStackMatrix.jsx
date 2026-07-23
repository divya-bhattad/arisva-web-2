import React, { useState } from 'react';
import { Cpu, CheckCircle2, Layers, Terminal, Sparkles, Code2, ArrowRight, ShieldCheck } from 'lucide-react';

export default function TechStackMatrix() {
  const categories = [
    'QA & Automation',
    'Business Analysis',
    'Web Design & UX',
    'AI & Intelligence',
  ];

  const techDatabase = [
    // QA & Automation
    {
      id: 'playwright',
      name: 'Playwright',
      cat: 'QA & Automation',
      level: 'Native Automation Suite',
      badge: 'AUTOMATION',
      icon: Terminal,
      headline: 'End-to-End Multi-Browser Test Automation',
      desc: 'Arisva builds auto-healing Playwright suites with parallel execution across Chromium, Firefox, and WebKit to gate pull requests in seconds.',
      deliverables: [
        'Parallel cross-browser regression test suites',
        'Trace recorder & video artifact attachment on failure',
        'CI/CD pipeline pull request blocking',
      ],
      stack: ['TypeScript / JS', 'Python', 'Java', 'GitHub Actions'],
    },
    {
      id: 'cypress',
      name: 'Cypress',
      cat: 'QA & Automation',
      level: 'Modern Web E2E',
      badge: 'WEB QA',
      icon: Code2,
      headline: 'Component & User Journey Validation',
      desc: 'Real-time DOM inspection and flaky-test-free E2E testing for React, Vue, and Angular applications.',
      deliverables: [
        'Component isolation & network stubbing',
        'Visual regression diff testing',
        'Automated smoke test suites',
      ],
      stack: ['JavaScript / TS', 'Cypress Cloud', 'React / Next.js'],
    },
    {
      id: 'selenium',
      name: 'Selenium WebDriver',
      cat: 'QA & Automation',
      level: 'Enterprise Standard',
      badge: 'LEGACY & MATRIX',
      icon: Terminal,
      headline: 'Cross-Browser Enterprise Regression',
      desc: 'Refactoring and optimizing existing Java/Python Selenium frameworks to run 3x faster with Page Object Models (POM).',
      deliverables: [
        'POM framework refactoring & stabilization',
        'Grid & SauceLabs multi-OS matrix testing',
        'Custom report portals & Slack/Teams alerts',
      ],
      stack: ['Java', 'Python', 'C# / .NET', 'TestNG / PyTest'],
    },
    {
      id: 'k6-jmeter',
      name: 'JMeter & k6',
      cat: 'QA & Automation',
      level: 'Performance Engineering',
      badge: 'PERFORMANCE',
      icon: Cpu,
      headline: 'High-Concurrency Stress & Load Testing',
      desc: 'Simulating peak traffic spikes up to 100,000+ concurrent virtual users to identify database bottlenecks and latency degradation.',
      deliverables: [
        'Breakdown stress & soak load tests',
        'API endpoint throughput benchmarking',
        'Grafana / Datadog latency telemetry',
      ],
      stack: ['k6 (JS)', 'Apache JMeter', 'InfluxDB', 'Grafana'],
    },

    // Business Analysis
    {
      id: 'jira-confluence',
      name: 'Jira & Confluence',
      cat: 'Business Analysis',
      level: 'Agile Management',
      badge: 'REQUIREMENTS',
      icon: Layers,
      headline: 'User Story Mapping & Requirements Traceability',
      desc: 'Our BAs restructure product backlogs, write clear acceptance criteria, and establish 100% Requirements Traceability Matrices (RTM).',
      deliverables: [
        'Epic breakdown & sprint story refinement',
        'Automated RTM linking stories to QA test cases',
        'Stakeholder alignment workshops',
      ],
      stack: ['Jira Software', 'Confluence', 'Xray / Zephyr'],
    },
    {
      id: 'bpmn-miro',
      name: 'BPMN 2.0 & Miro',
      cat: 'Business Analysis',
      level: 'Process Modeling',
      badge: 'PROCESS BA',
      icon: Layers,
      headline: 'End-to-End Business Process Mapping',
      desc: 'Visualizing complex multi-system workflows, swimlanes, and edge cases to prevent logic gaps before development starts.',
      deliverables: [
        'BPMN 2.0 swimlane workflow diagrams',
        'Gap analysis & operational bottleneck audits',
        'Interactive wireframe prototypes',
      ],
      stack: ['Miro', 'Lucidchart', 'BPMN 2.0 Flowcharts'],
    },
    {
      id: 'cucumber-bdd',
      name: 'Cucumber / BDD',
      cat: 'Business Analysis',
      level: 'Spec Alignment',
      badge: 'BDD SPEC',
      icon: Code2,
      headline: 'Behavior-Driven Development (Gherkin)',
      desc: 'Bridging the gap between business sponsors and SDETs using executable Gherkin feature files (Given-When-Then).',
      deliverables: [
        'Gherkin feature file specifications',
        'Living documentation test suites',
        'Automated step definition bindings',
      ],
      stack: ['Cucumber', 'SpecFlow', 'Behave (Python)'],
    },

    // Web Design & UX
    {
      id: 'figma-design',
      name: 'Figma & UI Systems',
      cat: 'Web Design & UX',
      level: 'Design Systems',
      badge: 'UI/UX DESIGN',
      icon: Layers,
      headline: 'Pixel-Perfect Prototypes & Design Systems',
      desc: 'Crafting high-fidelity interactive wireframes, custom typography systems, and atomic component libraries before development.',
      deliverables: [
        'Interactive Figma prototypes with realistic user flows',
        'Atomic design systems & scalable UI token libraries',
        'High-contrast color palettes & micro-typography',
      ],
      stack: ['Figma', 'Figma Tokens', 'UI/UX Systems', 'Storybook'],
    },
    {
      id: 'react-tailwind',
      name: 'React, Next.js & Tailwind CSS',
      cat: 'Web Design & UX',
      level: 'Frontend Architecture',
      badge: 'HIGH PERFORMANCE',
      icon: Code2,
      headline: 'Lightning-Fast, High-Converting Web Applications',
      desc: 'Developing responsive web apps with fluid CSS animations, sub-400ms load times, and 95+ Google Lighthouse scores.',
      deliverables: [
        'Responsive mobile-first layouts with Tailwind CSS',
        'Next.js Server Side Rendering (SSR) & SEO optimization',
        'Framer Motion smooth micro-interactions & glassmorphism',
      ],
      stack: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Vite'],
    },

    // AI & Intelligence
    {
      id: 'ai-models',
      name: 'PyTorch & OpenAI API',
      cat: 'AI & Intelligence',
      level: 'Neural AI Models',
      badge: 'AI QA/BA',
      icon: Sparkles,
      headline: 'AI Acceptance Criteria & Synthetic Test Data',
      desc: 'Leveraging LLMs and fine-tuned models to autogenerate edge-case acceptance criteria and realistic mock dataset payloads.',
      deliverables: [
        'Automated BDD user story generation',
        'Synthetic PII-safe test data generation',
        'Intelligent anomaly detection algorithms',
      ],
      stack: ['OpenAI API', 'PyTorch', 'LangChain', 'Python'],
    },
    {
      id: 'ast-scanners',
      name: 'AST & Diff Scanners',
      cat: 'AI & Intelligence',
      level: 'Code Intelligence',
      badge: 'SELF-HEALING',
      icon: Sparkles,
      headline: 'Blast-Radius Analysis & Self-Healing Locators',
      desc: 'Analyzing git code diffs via Abstract Syntax Trees to execute only affected test suites and dynamically repair broken selectors.',
      deliverables: [
        'AST code diff impact scanning (40% faster runs)',
        'Self-healing dynamic DOM locator repair',
        'Flaky test root cause diagnostics',
      ],
      stack: ['AST Parsers', 'Git Diff Analysis', 'AI Locators'],
    },
  ];

  const [activeCategory, setActiveCategory] = useState('QA & Automation');

  // Filter items in current category
  const activeCatTechs = techDatabase.filter((t) => t.cat === activeCategory);
  
  // Selected tech item (defaults to first in category)
  const [selectedTechId, setSelectedTechId] = useState(activeCatTechs[0]?.id || 'playwright');

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    const firstInCat = techDatabase.find((t) => t.cat === cat);
    if (firstInCat) {
      setSelectedTechId(firstInCat.id);
    }
  };

  const selectedTech = techDatabase.find((t) => t.id === selectedTechId) || activeCatTechs[0] || techDatabase[0];
  const Icon = selectedTech.icon;

  return (
    <section id="tech-stack" className="py-20 bg-paper-alt border-b border-line-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-xs font-mono tracking-widest text-brand-purple uppercase font-semibold">
              TECHNOLOGY INTEGRATION MATRIX
            </span>
            <h2 className="text-3xl sm:text-4xl text-ink font-display font-bold mt-2">
              Wired into your exact technology stack.
            </h2>
          </div>
          <p className="text-slate text-sm sm:text-base max-w-md">
            Select a discipline and technology to inspect Arisva&apos;s native integration coverage and deliverables.
          </p>
        </div>

        {/* Discipline Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-4 py-2.5 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-ink text-brand-cyan shadow border border-ink scale-105'
                  : 'bg-white text-slate border border-line hover:border-brand-purple/40 hover:text-ink'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Compact Two-Column Technology Inspector */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Technology Selector Pills */}
          <div className="lg:col-span-4 bg-white border border-line rounded-xl p-5 shadow-sm space-y-3">
            <span className="text-[11px] font-mono text-slate-muted uppercase font-bold tracking-wider block mb-2">
              SELECT TECHNOLOGY ({activeCatTechs.length}):
            </span>

            <div className="space-y-2">
              {activeCatTechs.map((tech) => {
                const TechIcon = tech.icon;
                const isSelected = tech.id === selectedTech.id;
                return (
                  <button
                    key={tech.id}
                    onClick={() => setSelectedTechId(tech.id)}
                    className={`w-full text-left p-3 rounded-lg border transition-all flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? 'bg-brand-purple/10 border-brand-purple text-ink shadow-sm'
                        : 'bg-paper text-slate border-line-soft hover:border-brand-purple/30 hover:text-ink'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-7 h-7 rounded flex items-center justify-center text-xs ${
                        isSelected ? 'bg-brand-purple text-white' : 'bg-paper-alt text-slate'
                      }`}>
                        <TechIcon className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-display font-semibold text-sm">{tech.name}</span>
                    </div>

                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                      isSelected ? 'bg-brand-purple/20 text-brand-purple' : 'bg-paper-alt text-slate-muted'
                    }`}>
                      {tech.badge}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Selected Technology Focus Card */}
          <div className="lg:col-span-8 bg-white border border-line rounded-xl p-6 sm:p-8 shadow-xl relative overflow-hidden animate-in fade-in duration-300">
            
            {/* Top Badge & Level */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-line-soft">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-brand-purple tracking-wider uppercase px-2 py-0.5 bg-brand-purple/10 rounded">
                    {selectedTech.badge}
                  </span>
                  <h3 className="text-2xl font-display font-bold text-ink mt-1">
                    {selectedTech.name}
                  </h3>
                </div>
              </div>

              <div className="font-mono text-xs text-brand-cyan font-bold bg-ink px-3 py-1.5 rounded border border-ink flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-purple" />
                <span>{selectedTech.level}</span>
              </div>
            </div>

            {/* Headline & Overview */}
            <h4 className="text-lg font-semibold text-brand-blue mb-3">
              {selectedTech.headline}
            </h4>

            <p className="text-slate text-sm sm:text-base leading-relaxed mb-6">
              {selectedTech.desc}
            </p>

            {/* Deliverables Grid */}
            <div className="mb-6 space-y-3">
              <span className="text-xs font-mono tracking-wider uppercase text-slate-muted font-bold block">
                KEY INTEGRATION DELIVERABLES:
              </span>
              <div className="grid sm:grid-cols-1 gap-2.5">
                {selectedTech.deliverables.map((deliv, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-ink bg-paper p-3 rounded-lg border border-line-soft">
                    <CheckCircle2 className="w-4 h-4 text-brand-purple flex-shrink-0" />
                    <span className="font-medium">{deliv}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Compatible Ecosystem & CTA */}
            <div className="pt-4 border-t border-line-soft flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-mono text-slate-muted uppercase font-semibold">Supported:</span>
                {selectedTech.stack.map((item, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded bg-paper-alt text-xs font-mono font-semibold text-ink">
                    {item}
                  </span>
                ))}
              </div>

              <a
                href={`mailto:info@arisva.ca?subject=Integration Inquiry for ${selectedTech.name}`}
                className="gradient-btn text-white px-4 py-2 rounded text-xs font-mono font-semibold flex items-center gap-2 cursor-pointer whitespace-nowrap shadow-sm"
              >
                <span>Discuss {selectedTech.name}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
