import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AdSenseBanner } from './components/AdSenseBanner';
import { ConceptsSection } from './components/ConceptsSection';
import { GlossarySection } from './components/GlossarySection';
import { StepGuideSection } from './components/StepGuideSection';
import { UseCasesSection } from './components/UseCasesSection';
import { FaqSection } from './components/FaqSection';
import { AdSensePolicySection } from './components/AdSensePolicySection';
import { Footer } from './components/Footer';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';
import { TermsModal } from './components/TermsModal';

export default function App() {
  // 1. Language detection (Auto-detect Korean vs English)
  const [lang, setLang] = useState<Language>(() => {
    // Check URL search params first
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const urlLang = params.get('lang');
      if (urlLang === 'en' || urlLang === 'ko') {
        return urlLang;
      }
      // Detect user browser environment
      const userLang = (navigator.language || (navigator as any).userLanguage || '').toLowerCase();
      if (userLang.startsWith('ko')) {
        return 'ko';
      }
    }
    return 'en';
  });

  // 2. Dark mode state
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // 3. Modal dialog states
  const [privacyModalOpen, setPrivacyModalOpen] = useState<boolean>(false);
  const [termsModalOpen, setTermsModalOpen] = useState<boolean>(false);

  // Synchronize dark class on documentElement
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Update HTML lang attribute dynamically for SEO
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] dark:bg-[#0e0e10] text-[#1A1A1B] dark:text-[#f3f4f6] font-sans antialiased transition-colors duration-200">
      
      {/* Header Bar */}
      <Header
        lang={lang}
        setLang={setLang}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        onOpenPrivacy={() => setPrivacyModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          lang={lang}
          onStartGuide={() => scrollToSection('guide')}
          onSearchClick={() => scrollToSection('glossary')}
        />

        {/* Top AdSense Compliance Unit */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AdSenseBanner lang={lang} format="horizontal" slotId="1001001001" />
        </div>

        {/* 1. Core Concepts & Interactive Voting Simulator */}
        <ConceptsSection lang={lang} />

        {/* 2. Reddit Glossary with Real-time Search */}
        <GlossarySection lang={lang} />

        {/* 3. Interactive Step-by-Step Guide with 16:9 Mockup Frames & Red Badges */}
        <StepGuideSection lang={lang} />

        {/* 4. Business & Institutional Use Cases */}
        <UseCasesSection lang={lang} />

        {/* 5. Frequently Asked Questions & Reddiquette */}
        <FaqSection lang={lang} />

        {/* 6. Google AdSense Policy Compliance Verification */}
        <AdSensePolicySection
          lang={lang}
          onOpenPrivacy={() => setPrivacyModalOpen(true)}
          onOpenTerms={() => setTermsModalOpen(true)}
        />

        {/* Bottom AdSense Unit */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <AdSenseBanner lang={lang} format="horizontal" slotId="2002002002" />
        </div>
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        onOpenPrivacy={() => setPrivacyModalOpen(true)}
        onOpenTerms={() => setTermsModalOpen(true)}
      />

      {/* Privacy Policy Modal */}
      {privacyModalOpen && (
        <PrivacyPolicyModal
          lang={lang}
          onClose={() => setPrivacyModalOpen(false)}
        />
      )}

      {/* Terms of Service Modal */}
      {termsModalOpen && (
        <TermsModal
          lang={lang}
          onClose={() => setTermsModalOpen(false)}
        />
      )}

    </div>
  );
}
