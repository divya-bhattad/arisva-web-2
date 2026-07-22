import React, { useState } from 'react';
import { Shield, Users, Cpu, GraduationCap, FileText, GitBranch, Check, ArrowRight, X, Layers, Code, Zap } from 'lucide-react';

export default function Services({ onOpenContact }) {
  const [activeModal, setActiveModal] = useState(null);

  const servicesData = [
    {
      id: 'qa-quality-assurance',
      tag: 'QA & TESTING',
      icon: Shield,
      title: 'QA — Quality Assurance',
      description: 'End-to-end quality coverage across web, mobile, and API layers, wired into your release cycle instead of bolted on at the end.',
      bullets: [
        'Manual, functional & regression testing',
        'Test automation (Selenium, Playwright, Cypress)',
        'Performance, stress & load testing (JMeter, k6)',
        'Security & REST/GraphQL API testing',
      ],
      details: {
        headline: 'Automated & Functional Testing Built for Velocity',
        overview: 'We embed directly with your engineering team to establish CI/CD pipeline integration, auto-triggering regression suites on every pull request.',
        deliverables: [
          'Custom automation test frameworks (TypeScript, Python, Java)',
          'Parallel execution pipelines reducing test runs from hours to minutes',
          'Detailed defect reporting with video trace & DOM logs',
          'Cross-browser & multi-device compatibility matrices',
        ],
        tools: ['Playwright', 'Cypress', 'Selenium', 'Appium', 'Postman', 'k6', 'GitHub Actions'],
      },
    },
    {
      id: 'business-analyst',
      tag: 'BUSINESS ANALYSIS',
      icon: FileText,
      title: 'BA — Business Analyst',
      description: 'Bridge the gap between business vision and technical execution with crisp requirement engineering, workflow mapping, and BDD user story formulation.',
      bullets: [
        'BRD, FRD & User Story creation with Acceptance Criteria',
        'Business Process Modeling (BPMN 2.0) & workflow design',
        'Agile backlog grooming & Product Owner proxy support',
        'Gap analysis, feasibility studies & stakeholder alignment',
      ],
      details: {
        headline: 'Precision Requirement Engineering & Business Alignment',
        overview: 'Our Business Analysts work closely with business leaders and engineering teams to transform strategic goals into clear, testable user stories and BDD specifications before writing code.',
        deliverables: [
          'Comprehensive BRD/FRD documents and Gherkin-formatted acceptance criteria',
          'End-to-end process maps (BPMN 2.0, UML state diagrams)',
          'User story mapping and sprint backlog prioritization',
          'Requirements traceability matrix (RTM) linked directly to QA test suites',
        ],
        tools: ['Jira', 'Confluence', 'Miro', 'BPMN 2.0', 'Figma', 'Draw.io', 'Cucumber / BDD'],
      },
    },
    {
      id: 'staffing-services',
      tag: 'STAFFING',
      icon: Users,
      title: 'Staffing Services',
      description: 'Vetted QA engineers, SDETs, Business Analysts, and developers — placed on contract, contract-to-hire, or direct hire, matched to how your team works.',
      bullets: [
        'QA engineers, SDETs & Business Analysts',
        'Automation, performance & cloud architects',
        'AI/ML engineers & data QA specialists',
        'Contract, C2H & permanent placement',
      ],
      details: {
        headline: 'Precision Staffing & Embedded Talent',
        overview: 'Skip the standard recruiter filter. Our candidates undergo practical technical challenges, scenario modeling, and live framework construction before you ever interview them.',
        deliverables: [
          '48-hour turnarounds for pre-vetted SDET, BA & QA profiles',
          'Embedded trial period option before full commitment',
          'Dedicated account management and ongoing engineering mentorship',
          'Scalable pod options (QA Lead + BAs + Automation Engineers)',
        ],
        tools: ['Full-stack SDETs', 'Business Analysts', 'QA Leads', 'Performance Engineers'],
      },
    },
    {
      id: 'ai-solutions-qa-ba',
      tag: 'AI SOLUTIONS',
      icon: Cpu,
      title: 'AI Solutions for QA & BA',
      description: 'AI applied where it actually moves projects forward — automated test generation, AI requirement validation, predictive regression, and defect signals.',
      bullets: [
        'AI-assisted test case & user story acceptance criteria generation',
        'Predictive defect & regression impact analysis',
        'Self-healing automated test locators & AST diff scans',
        'AI integration & prompt engineering consulting for QA/BA teams',
      ],
      details: {
        headline: 'Next-Generation AI QA & BA Intelligence',
        overview: 'Harness machine learning models to analyze requirement docs and commit diffs, predict high-risk code paths, and auto-generate test cases from PRDs.',
        deliverables: [
          'Automated user story completeness scoring & BDD generation',
          'Automated PR risk scoring before deployment',
          'Self-healing test script maintenance minimizing flaky tests',
          'Custom AI agent development for proprietary platforms',
        ],
        tools: ['PyTorch', 'OpenAI API', 'Custom Regression Models', 'AST Analysis', 'Git Diff Scanners'],
      },
    },
    {
      id: 'training-certification',
      tag: 'TRAINING',
      icon: GraduationCap,
      title: 'Trainings & Certifications',
      description: 'Cohort and corporate training that turns testers into automation engineers, analysts into BDD experts, and teams into AI-fluent problem solvers.',
      bullets: [
        'QA, SDET & BA certification tracks',
        'Selenium, Playwright & API testing bootcamps',
        'AI/ML upskilling for engineering & product teams',
        'Custom corporate training & upskilling programs',
      ],
      details: {
        headline: 'Hands-On Upskilling & Industry Certification',
        overview: 'We train your existing software and product teams on modern automation practices, agile requirement engineering, and AI-assisted workflows.',
        deliverables: [
          'Customized corporate curriculum tailored to your stack',
          'Live project capstones with real code and story reviews',
          'Certification credentials upon completion',
          'Post-training support and office hours for 90 days',
        ],
        tools: ['Playwright Masterclass', 'BDD / Agile BA Bootcamp', 'API Testing Academy', 'AI-Driven QA/BA Track'],
      },
    },
    {
      id: 'devops-release-engineering',
      tag: 'DEVOPS',
      icon: GitBranch,
      title: 'DevOps & Release Engineering',
      description: 'Automated CI/CD pipelines, containerization, cloud infrastructure management, and quality release gating that ensure fast, reliable deployments.',
      bullets: [
        'CI/CD pipeline construction (GitHub Actions, GitLab, Jenkins)',
        'Infrastructure as Code (Terraform, Docker, Kubernetes)',
        'Automated quality gating & deployment verification',
        'Cloud environment management (AWS, Azure, GCP)',
      ],
      details: {
        headline: 'Continuous Integration & Release Automation',
        overview: 'We build zero-downtime deployment pipelines that link directly with your QA test suites and BA criteria, ensuring code moves safely from PR to production.',
        deliverables: [
          'Automated CI/CD workflows with automated rollback safety',
          'Docker containerization & Kubernetes orchestration setup',
          'Environment provisioning (Staging, UAT, Production)',
          'Real-time deployment monitoring & telemetry alerting',
        ],
        tools: ['GitHub Actions', 'Docker', 'Kubernetes', 'Terraform', 'AWS', 'Azure', 'Jenkins'],
      },
    },
  ];

  return (
    <section id="services" className="py-24 bg-paper border-b border-line-soft relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono tracking-widest text-brand-purple uppercase font-semibold">
              OUR CORE DISCIPLINES
            </span>
            <h2 className="text-3xl sm:text-4xl text-ink font-display font-bold mt-2 max-w-xl">
              Six core disciplines, one standard of quality.
            </h2>
          </div>
          <p className="text-slate text-base sm:text-lg max-w-md">
            Everything Arisva does — QA, BA, staffing, AI, training, DevOps — is built to raise the bar and keep it there.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white border border-line rounded-xl p-8 hover-lift hover:border-brand-purple/60 hover:shadow-2xl hover:shadow-brand-purple/10 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-semibold text-brand-purple tracking-widest px-3 py-1 bg-brand-purple/10 rounded-md border border-brand-purple/20">
                      {service.tag}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-paper-alt flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-ink mb-3 group-hover:text-brand-blue transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate text-sm sm:text-base leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Bullet list */}
                  <div className="space-y-2.5 mb-8">
                    {service.bullets.map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-sm text-ink font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 flex-shrink-0" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-line-soft flex items-center justify-between">
                  <button
                    onClick={() => setActiveModal(service)}
                    className="text-sm font-semibold text-brand-purple hover:text-brand-purple-deep flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>View Deep Dive &amp; Stacks</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <a
                    href={`mailto:info@arisva.ca?subject=Inquiry for ${service.title}`}
                    className="text-xs font-mono text-slate hover:text-ink transition-colors cursor-pointer"
                  >
                    Inquire →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal Deep Dive Inspector */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-line relative max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-paper-alt text-slate hover:text-ink transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs font-semibold text-brand-purple tracking-widest px-3 py-1 bg-brand-purple/10 rounded-md">
                {activeModal.tag}
              </span>
              <h3 className="text-2xl font-display font-bold text-ink">
                {activeModal.title}
              </h3>
            </div>

            <h4 className="text-lg font-semibold text-brand-blue mb-4">
              {activeModal.details.headline}
            </h4>

            <p className="text-slate text-sm sm:text-base leading-relaxed mb-6">
              {activeModal.details.overview}
            </p>

            <div className="mb-6">
              <h5 className="text-xs font-mono tracking-wider uppercase text-slate-muted mb-3 font-semibold">
                KEY DELIVERABLES &amp; IMPACT
              </h5>
              <div className="space-y-2.5">
                {activeModal.details.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-ink bg-paper p-3 rounded-lg border border-line-soft">
                    <Check className="w-4 h-4 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h5 className="text-xs font-mono tracking-wider uppercase text-slate-muted mb-3 font-semibold">
                TOOLING &amp; TECHNOLOGIES
              </h5>
              <div className="flex flex-wrap gap-2">
                {activeModal.details.tools.map((tool, idx) => (
                  <span key={idx} className="px-3 py-1 rounded bg-paper-alt text-xs font-mono font-medium text-ink">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-line-soft">
              <button
                onClick={() => setActiveModal(null)}
                className="px-4 py-2 rounded border border-line text-sm font-semibold text-slate hover:text-ink cursor-pointer"
              >
                Close
              </button>
              <a
                href={`mailto:info@arisva.ca?subject=Inquiry for ${activeModal.title}`}
                onClick={() => setActiveModal(null)}
                className="gradient-btn text-white px-5 py-2 rounded text-sm font-semibold flex items-center gap-2 cursor-pointer"
              >
                <span>Discuss {activeModal.title}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
