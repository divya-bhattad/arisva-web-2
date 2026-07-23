import React, { useState } from 'react';
import { 
  Monitor, 
  Tablet, 
  Smartphone, 
  Sparkles, 
  Palette, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  Code2, 
  Eye, 
  Layers, 
  Sliders, 
  MousePointer, 
  ShoppingBag, 
  TrendingUp, 
  ShieldCheck, 
  Star,
  Check
} from 'lucide-react';

export default function WebDesignShowcase() {
  // State for interactive preview
  const [selectedTemplate, setSelectedTemplate] = useState('saas'); // saas, fintech, agency, ecommerce
  const [selectedDevice, setSelectedDevice] = useState('desktop'); // desktop, tablet, mobile
  const [activeTheme, setActiveTheme] = useState('purple'); // purple, emerald, cyan, sunset
  const [activeTab, setActiveTab] = useState('preview'); // preview, specs, code
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [glowEffect, setGlowEffect] = useState(true);

  // Design templates data
  const templates = [
    {
      id: 'saas',
      name: 'AI SaaS Platform',
      tagline: 'High-Converting Next.js & React Landing Page',
      badge: 'B2B SaaS',
      description: 'Sleek dark mode layout, glassmorphic cards, gradient CTA buttons, and interactive feature grids.',
      accent: 'from-purple-500 via-indigo-500 to-blue-500',
    },
    {
      id: 'fintech',
      name: 'Financial Dashboard',
      tagline: 'Enterprise Web Application UI',
      badge: 'FinTech & Banking',
      description: 'Clean data visualizations, real-time status indicators, secure layout, and micro-analytics.',
      accent: 'from-emerald-400 via-teal-500 to-cyan-500',
    },
    {
      id: 'agency',
      name: 'Creative Agency',
      tagline: 'Interactive Portfolio & Studio',
      badge: 'Brand & Agency',
      description: 'Bold kinetic typography, interactive hover micro-animations, and dynamic gallery layouts.',
      accent: 'from-amber-400 via-orange-500 to-rose-500',
    },
    {
      id: 'ecommerce',
      name: 'Luxury E-Commerce',
      tagline: 'Modern Storefront & Product Showcase',
      badge: 'E-Commerce',
      description: 'High-resolution hero, floating product badges, instant cart trigger, and customer reviews.',
      accent: 'from-sky-400 via-blue-600 to-indigo-600',
    },
  ];

  // Theme presets
  const themeColors = {
    purple: {
      name: 'Purple Glass',
      primaryBg: 'bg-slate-950',
      accentGlow: 'shadow-purple-500/20 border-purple-500/30',
      btn: 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-500 hover:to-indigo-500',
      textAccent: 'text-purple-400',
      badgeBg: 'bg-purple-500/10 text-purple-300 border-purple-500/20',
      activeRing: 'ring-purple-500',
      dot: 'bg-purple-500',
    },
    emerald: {
      name: 'Emerald Tech',
      primaryBg: 'bg-slate-950',
      accentGlow: 'shadow-emerald-500/20 border-emerald-500/30',
      btn: 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-400 hover:to-teal-500',
      textAccent: 'text-emerald-400',
      badgeBg: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
      activeRing: 'ring-emerald-500',
      dot: 'bg-emerald-500',
    },
    cyan: {
      name: 'Cyber Cyan',
      primaryBg: 'bg-slate-950',
      accentGlow: 'shadow-cyan-500/20 border-cyan-500/30',
      btn: 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500',
      textAccent: 'text-cyan-400',
      badgeBg: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
      activeRing: 'ring-cyan-500',
      dot: 'bg-cyan-500',
    },
    sunset: {
      name: 'Sunset Glow',
      primaryBg: 'bg-slate-950',
      accentGlow: 'shadow-rose-500/20 border-rose-500/30',
      btn: 'bg-gradient-to-r from-amber-500 via-rose-500 to-pink-600 text-white hover:opacity-90',
      textAccent: 'text-rose-400',
      badgeBg: 'bg-rose-500/10 text-rose-300 border-rose-500/20',
      activeRing: 'ring-rose-500',
      dot: 'bg-rose-500',
    },
  };

  const currentTheme = themeColors[activeTheme];

  // Device sizes
  const deviceWidths = {
    desktop: 'w-full max-w-5xl',
    tablet: 'w-full max-w-2xl',
    mobile: 'w-full max-w-xs sm:max-w-sm',
  };

  return (
    <section id="web-design-demo" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Lighting Effects */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>INTERACTIVE DESIGN STUDIO</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-white mb-4">
            Website Designing & Development Showcase
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Experience our pixel-perfect design craftsmanship in action. Test live responsive layouts, dynamic theme switches, and high-performance micro-interactions below.
          </p>
        </div>

        {/* Control Toolbar */}
        <div className="bg-slate-800/80 backdrop-blur-md border border-slate-700/80 rounded-2xl p-4 sm:p-6 mb-8 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
            {/* Template Selector */}
            <div className="flex flex-wrap items-center justify-center gap-2 w-full lg:w-auto">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider mr-2 hidden sm:inline">
                Template:
              </span>
              {templates.map((tpl) => (
                <button
                  key={tpl.id}
                  onClick={() => setSelectedTemplate(tpl.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    selectedTemplate === tpl.id
                      ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                      : 'bg-slate-900/60 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/50'
                  }`}
                >
                  {tpl.name}
                </button>
              ))}
            </div>

            {/* Controls Right Group */}
            <div className="flex flex-wrap items-center justify-center gap-4 w-full lg:w-auto border-t lg:border-t-0 border-slate-700/60 pt-4 lg:pt-0">
              
              {/* Theme Color Picker */}
              <div className="flex items-center gap-1.5 bg-slate-900/80 p-1.5 rounded-xl border border-slate-700/60">
                <Palette className="w-4 h-4 text-slate-400 ml-1 mr-1" />
                {Object.keys(themeColors).map((tKey) => (
                  <button
                    key={tKey}
                    onClick={() => setActiveTheme(tKey)}
                    className={`w-6 h-6 rounded-full transition-transform cursor-pointer ${
                      tKey === 'purple' ? 'bg-purple-500' :
                      tKey === 'emerald' ? 'bg-emerald-500' :
                      tKey === 'cyan' ? 'bg-cyan-500' : 'bg-rose-500'
                    } ${activeTheme === tKey ? 'scale-125 ring-2 ring-white ring-offset-2 ring-offset-slate-900' : 'opacity-70 hover:opacity-100'}`}
                    title={themeColors[tKey].name}
                  />
                ))}
              </div>

              {/* Device Viewport Toggle */}
              <div className="flex items-center bg-slate-900/80 p-1 rounded-xl border border-slate-700/60">
                <button
                  onClick={() => setSelectedDevice('desktop')}
                  className={`p-2 rounded-lg transition-colors cursor-pointer ${
                    selectedDevice === 'desktop' ? 'bg-slate-700 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                  title="Desktop View (1200px)"
                >
                  <Monitor className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setSelectedDevice('tablet')}
                  className={`p-2 rounded-lg transition-colors cursor-pointer ${
                    selectedDevice === 'tablet' ? 'bg-slate-700 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                  title="Tablet View (768px)"
                >
                  <Tablet className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setSelectedDevice('mobile')}
                  className={`p-2 rounded-lg transition-colors cursor-pointer ${
                    selectedDevice === 'mobile' ? 'bg-slate-700 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                  title="Mobile View (375px)"
                >
                  <Smartphone className="w-4 h-4" />
                </button>
              </div>

              {/* View Mode Tabs (Preview / Specs / Code) */}
              <div className="flex items-center bg-slate-900/80 p-1 rounded-xl border border-slate-700/60">
                <button
                  onClick={() => setActiveTab('preview')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                    activeTab === 'preview' ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Preview</span>
                </button>
                <button
                  onClick={() => setActiveTab('specs')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                    activeTab === 'specs' ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Sliders className="w-3.5 h-3.5" />
                  <span>Metrics</span>
                </button>
                <button
                  onClick={() => setActiveTab('code')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                    activeTab === 'code' ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Tech Stack</span>
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* Interactive Device Screen Frame */}
        <div className="flex justify-center transition-all duration-500">
          <div className={`${deviceWidths[selectedDevice]} transition-all duration-500 ease-out`}>
            
            {/* Screen Window Wrapper */}
            <div className={`bg-slate-950 border-2 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 ${
              glowEffect ? currentTheme.accentGlow : 'border-slate-800 shadow-none'
            }`}>
              
              {/* Screen Top Bar / Browser Chrome */}
              <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>

                <div className="bg-slate-950 px-4 py-1 rounded-full text-xs font-mono text-slate-400 border border-slate-800 flex items-center gap-2 max-w-xs truncate">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>https://arisva-design.demo/{selectedTemplate}</span>
                </div>

                <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                  <button
                    onClick={() => setGlowEffect(!glowEffect)}
                    className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span className="hidden sm:inline">{glowEffect ? 'Glow ON' : 'Glow OFF'}</span>
                  </button>
                  <button
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className="hover:text-white transition-colors cursor-pointer px-2 py-0.5 rounded bg-slate-800 border border-slate-700"
                  >
                    {isDarkMode ? '🌙 Dark' : '☀️ Light'}
                  </button>
                </div>
              </div>

              {/* Main Content Area */}
              <div className={`min-h-[440px] p-6 sm:p-10 transition-colors duration-300 ${
                isDarkMode ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'
              }`}>

                {/* TAB 1: PREVIEW MODE */}
                {activeTab === 'preview' && (
                  <div className="animate-in fade-in duration-300">
                    
                    {/* Live Demo Header */}
                    <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-800/50">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg ${currentTheme.btn} flex items-center justify-center font-bold text-sm shadow-md`}>
                          A
                        </div>
                        <div>
                          <h4 className="font-bold text-sm sm:text-base leading-tight">
                            {templates.find((t) => t.id === selectedTemplate)?.name}
                          </h4>
                          <p className="text-xs text-slate-400">
                            {templates.find((t) => t.id === selectedTemplate)?.tagline}
                          </p>
                        </div>
                      </div>

                      <span className={`text-xs font-mono px-3 py-1 rounded-full border ${currentTheme.badgeBg}`}>
                        {templates.find((t) => t.id === selectedTemplate)?.badge}
                      </span>
                    </div>

                    {/* Dynamic Hero Sandbox depending on template */}
                    {selectedTemplate === 'saas' && (
                      <div className="space-y-8">
                        <div className="text-center max-w-2xl mx-auto space-y-4">
                          <span className={`inline-block text-xs font-mono font-semibold px-3 py-1 rounded-full ${currentTheme.badgeBg}`}>
                            ⚡ Next-Gen AI Automation Platform
                          </span>
                          <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                            Engineered for <span className={currentTheme.textAccent}>Maximum Conversion</span> & Speed
                          </h3>
                          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                            Turn visitors into active users with responsive glassmorphic cards, smooth button micro-interactions, and 99+ Lighthouse performance scores.
                          </p>

                          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                            <button className={`${currentTheme.btn} px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-lg cursor-pointer transform hover:scale-105 transition-transform`}>
                              <span>Get Started Free</span>
                              <ArrowRight className="w-4 h-4" />
                            </button>
                            <button className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white transition-colors cursor-pointer">
                              Explore Live Demo
                            </button>
                          </div>
                        </div>

                        {/* Interactive Feature Cards */}
                        <div className="grid sm:grid-cols-3 gap-4 pt-4">
                          {[
                            { title: 'Lightning Fast', desc: 'Sub-400ms page render speed built on Vite/Next.js.', icon: Zap },
                            { title: 'Responsive UI', desc: 'Pixel-perfect across Desktop, Tablet & Mobile.', icon: Layers },
                            { title: 'High Usability', desc: 'Optimized contrast ratios & clean visual hierarchy.', icon: ShieldCheck },
                          ].map((card, i) => {
                            const CardIcon = card.icon;
                            return (
                              <div
                                key={i}
                                className={`p-4 rounded-xl border transition-all duration-300 hover:-translate-y-1 ${
                                  isDarkMode 
                                    ? 'bg-slate-900/60 border-slate-800 hover:border-purple-500/50' 
                                    : 'bg-white border-slate-200 shadow-sm hover:shadow-md'
                                }`}
                              >
                                <div className={`w-8 h-8 rounded-lg ${currentTheme.badgeBg} flex items-center justify-center mb-3`}>
                                  <CardIcon className="w-4 h-4" />
                                </div>
                                <h5 className="font-bold text-sm mb-1">{card.title}</h5>
                                <p className="text-xs text-slate-400 leading-normal">{card.desc}</p>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {selectedTemplate === 'fintech' && (
                      <div className="space-y-6">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900/80 p-5 rounded-2xl border border-slate-800">
                          <div>
                            <span className="text-xs font-mono text-slate-400 uppercase">Total Portfolio Value</span>
                            <div className="text-2xl sm:text-3xl font-extrabold text-white mt-1 flex items-center gap-3">
                              <span>$1,482,900.50</span>
                              <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 flex items-center gap-1 font-semibold">
                                <TrendingUp className="w-3 h-3" /> +14.2%
                              </span>
                            </div>
                          </div>
                          <button className={`${currentTheme.btn} px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 cursor-pointer`}>
                            <span>Execute Transfer</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* Interactive Data Table Mock */}
                        <div className="bg-slate-900/40 rounded-xl border border-slate-800 p-4">
                          <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">Live Enterprise Transactions</h5>
                          <div className="space-y-2.5">
                            {[
                              { name: 'Payment Webhook Gateway', status: 'Verified', amount: '+$24,500.00', color: 'text-emerald-400' },
                              { name: 'Cloud Hosting Infrastructure', status: 'Completed', amount: '-$1,240.00', color: 'text-slate-300' },
                              { name: 'SaaS Customer Subscription', status: 'Verified', amount: '+$4,890.00', color: 'text-emerald-400' },
                            ].map((tx, i) => (
                              <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-slate-900/80 border border-slate-800/80 text-xs">
                                <div className="flex items-center gap-3">
                                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                                  <span className="font-semibold text-slate-200">{tx.name}</span>
                                </div>
                                <div className="flex items-center gap-4">
                                  <span className="text-slate-400">{tx.status}</span>
                                  <span className={`font-mono font-bold ${tx.color}`}>{tx.amount}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {selectedTemplate === 'agency' && (
                      <div className="space-y-6 text-center py-4">
                        <span className={`text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full ${currentTheme.badgeBg}`}>
                          DIGITAL BRAND EXPERIENCES
                        </span>
                        <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight font-display">
                          We Craft <span className={currentTheme.textAccent}>Icons</span> Not Just Apps
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
                          Empowering ambitious global companies through bespoke visual identities, fluid motion design, and high-performance WebGL & React interfaces.
                        </p>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
                          {['Luxury UI/UX', 'Motion Graphics', 'Figma Systems', 'Fullstack React'].map((spec, idx) => (
                            <div key={idx} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-semibold font-mono hover:border-amber-400/50 transition-colors">
                              {spec}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {selectedTemplate === 'ecommerce' && (
                      <div className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-6 items-center">
                          <div className="relative aspect-video rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-800 flex items-center justify-center overflow-hidden p-6">
                            <ShoppingBag className="w-16 h-16 text-slate-700 animate-bounce" />
                            <div className="absolute top-3 left-3 bg-purple-600 text-white text-[10px] font-mono px-2 py-0.5 rounded uppercase font-bold">
                              Featured Product
                            </div>
                          </div>

                          <div className="space-y-3">
                            <div className="flex items-center gap-1 text-amber-400">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                              ))}
                              <span className="text-xs text-slate-400 font-mono ml-2">(4.9/5 from 120+ reviews)</span>
                            </div>

                            <h4 className="text-xl sm:text-2xl font-bold">Arisva Premium Web UI Suite</h4>
                            <p className="text-xs text-slate-400 leading-relaxed">
                              Complete React component kit with dark mode support, glassmorphic styling, and fully customized tailwind tokens.
                            </p>

                            <div className="flex items-center gap-4 pt-2">
                              <span className="text-2xl font-extrabold font-mono text-white">$249.00</span>
                              <button className={`${currentTheme.btn} px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 cursor-pointer`}>
                                <ShoppingBag className="w-4 h-4" />
                                <span>Add To Cart</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                  </div>
                )}

                {/* TAB 2: METRICS / SPECS MODE */}
                {activeTab === 'specs' && (
                  <div className="animate-in fade-in duration-300 space-y-6">
                    <h4 className="text-sm font-mono uppercase tracking-wider text-purple-400 font-semibold mb-2">
                      ⚡ Performance & Quality Engineering Metrics
                    </h4>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {[
                        { label: 'Google Lighthouse', score: '99/100', detail: 'Performance & SEO' },
                        { label: 'First Contentful Paint', score: '0.38s', detail: 'Instant page loading' },
                        { label: 'Accessibility Rating', score: '100%', detail: 'High Contrast & Responsive' },
                        { label: 'Mobile Responsiveness', score: '100%', detail: 'All devices supported' },
                      ].map((metric, i) => (
                        <div key={i} className="bg-slate-900 p-4 rounded-xl border border-slate-800">
                          <span className="text-xs font-mono text-slate-400">{metric.label}</span>
                          <div className="text-2xl font-extrabold text-white font-mono mt-1 mb-1">{metric.score}</div>
                          <span className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" /> {metric.detail}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 space-y-3">
                      <h5 className="text-xs font-mono uppercase text-slate-300 font-semibold">Web Design Architecture Guarantee</h5>
                      <div className="grid sm:grid-cols-2 gap-3 text-xs text-slate-300">
                        <div className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-400" /> SEO Optimization & Schema markup</div>
                        <div className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-400" /> Fast CDN Edge Deployment setup</div>
                        <div className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-400" /> Custom Figma to Code conversion</div>
                        <div className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-400" /> Cross-browser cross-device QA verified</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 3: TECH STACK MODE */}
                {activeTab === 'code' && (
                  <div className="animate-in fade-in duration-300 space-y-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                        🛠️ Modern Frontend & Design Stack
                      </h4>
                      <span className="text-xs font-mono text-slate-400">Arisva Standard Stack</span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {[
                        { name: 'React 18 / Next.js', type: 'Frontend Framework' },
                        { name: 'Tailwind CSS', type: 'Styling Engine' },
                        { name: 'Figma', type: 'UI/UX Prototyping' },
                        { name: 'Framer Motion', type: 'Micro-Animations' },
                        { name: 'TypeScript', type: 'Type-Safe Logic' },
                        { name: 'Vite / Webpack', type: 'Fast Build Tooling' },
                        { name: 'Lucide Icons', type: 'Design Assets' },
                        { name: 'Lighthouse / Axe', type: 'Performance & QA' },
                      ].map((st, i) => (
                        <div key={i} className="bg-slate-900 p-3 rounded-xl border border-slate-800 text-xs">
                          <div className="font-bold text-white font-mono">{st.name}</div>
                          <div className="text-[10px] text-slate-400">{st.type}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </div>

          </div>
        </div>

        {/* Bottom CTA Block */}
        <div className="mt-12 text-center bg-gradient-to-r from-purple-900/40 via-slate-900 to-indigo-900/40 border border-purple-500/20 rounded-2xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-2">Ready for a Custom Website Designed for High Performance?</h3>
          <p className="text-sm text-slate-300 max-w-xl mx-auto mb-6">
            From initial wireframes and Figma prototypes to production-ready React web apps, our team delivers pixel-perfect designs.
          </p>
          <a
            href="mailto:info@arisva.ca?subject=Inquiry%20for%20Website%20Designing%20Services"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold px-6 py-3 rounded-xl shadow-lg shadow-purple-600/30 transition-all transform hover:-translate-y-0.5 cursor-pointer text-sm"
          >
            <span>Request Custom Web Design</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
