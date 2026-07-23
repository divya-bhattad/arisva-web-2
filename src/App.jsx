import React from 'react';
import Preloader from './components/Preloader';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WebDesignShowcase from './components/WebDesignShowcase';
import TechStackMatrix from './components/TechStackMatrix';
import AiSolutionsHub from './components/AiSolutionsHub';
import Process from './components/Process';
import QACalculator from './components/QACalculator';
import Stats from './components/Stats';
import Industries from './components/Industries';
import CaseStudyReport from './components/CaseStudyReport';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <div className="min-h-screen bg-paper flex flex-col font-sans selection:bg-brand-purple selection:text-white relative">
      <Preloader />
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <WebDesignShowcase />
        <TechStackMatrix />
        <AiSolutionsHub />
        <Process />
        <QACalculator />
        <Stats />
        <Industries />
        <CaseStudyReport />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
