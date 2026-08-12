import React, { useState } from 'react';
import { Language } from '../types';
import { UI_TEXT, CONTACT_EMAIL } from '../data/translations';
import { Moon, Sun, Globe, Menu, X, ShieldCheck, Search, BookOpen } from 'lucide-react';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  onOpenPrivacy: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  setLang,
  isDarkMode,
  setIsDarkMode,
  onOpenPrivacy,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = UI_TEXT[lang];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-[#1A1A1B]/95 backdrop-blur-md border-b border-gray-200 dark:border-neutral-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div 
            onClick={() => scrollToSection('hero')} 
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-full bg-[#FF4500] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.611a1.24 1.24 0 0 1 1.108-.705z"/>
              </svg>
            </div>
            <div>
              <span className="text-lg font-bold text-gray-900 dark:text-white tracking-tight block leading-tight">
                Reddit <span className="text-[#FF4500]">Guide</span>
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                {lang === 'ko' ? '쉽게 이해하고 활용하기' : 'Mastering Reddit'}
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium">
            <button 
              onClick={() => scrollToSection('concepts')} 
              className="text-gray-700 dark:text-gray-300 hover:text-[#FF4500] dark:hover:text-[#FF4500] transition-colors"
            >
              {t.nav.concepts}
            </button>
            <button 
              onClick={() => scrollToSection('glossary')} 
              className="text-gray-700 dark:text-gray-300 hover:text-[#FF4500] dark:hover:text-[#FF4500] transition-colors"
            >
              {t.nav.glossary}
            </button>
            <button 
              onClick={() => scrollToSection('guide')} 
              className="text-gray-700 dark:text-gray-300 hover:text-[#FF4500] dark:hover:text-[#FF4500] transition-colors"
            >
              {t.nav.stepGuide}
            </button>
            <button 
              onClick={() => scrollToSection('usecases')} 
              className="text-gray-700 dark:text-gray-300 hover:text-[#FF4500] dark:hover:text-[#FF4500] transition-colors"
            >
              {t.nav.useCases}
            </button>
            <button 
              onClick={() => scrollToSection('faq')} 
              className="text-gray-700 dark:text-gray-300 hover:text-[#FF4500] dark:hover:text-[#FF4500] transition-colors"
            >
              {t.nav.faq}
            </button>
            <button 
              onClick={() => scrollToSection('adsense')} 
              className="inline-flex items-center space-x-1.5 text-xs px-2.5 py-1 rounded-full bg-orange-50 dark:bg-orange-950/40 text-[#FF4500] border border-orange-200 dark:border-orange-800 font-semibold"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>AdSense Safe</span>
            </button>
          </nav>

          {/* Right Action Bar: Lang Toggle, Theme Toggle, Mobile Menu Toggle */}
          <div className="flex items-center space-x-3">
            
            {/* Language Toggle (KR / EN) */}
            <div className="relative inline-flex items-center bg-gray-100 dark:bg-neutral-800 p-0.5 rounded-lg border border-gray-200 dark:border-neutral-700">
              <button
                onClick={() => setLang('ko')}
                className={`px-2.5 py-1 text-xs font-bold rounded-md transition-all ${
                  lang === 'ko'
                    ? 'bg-white dark:bg-[#FF4500] text-gray-900 dark:text-white shadow-sm'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-900'
                }`}
              >
                🇰🇷 한국어
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 text-xs font-bold rounded-md transition-all ${
                  lang === 'en'
                    ? 'bg-white dark:bg-[#FF4500] text-gray-900 dark:text-white shadow-sm'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-900'
                }`}
              >
                🇺🇸 English
              </button>
            </div>

            {/* Dark / Light Mode Switch */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
              title={isDarkMode ? 'Light Mode' : 'Dark Mode'}
            >
              {isDarkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-800"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-[#1A1A1B] border-b border-gray-200 dark:border-neutral-800 px-4 pt-2 pb-6 space-y-3">
          <button 
            onClick={() => scrollToSection('concepts')} 
            className="block w-full text-left py-2 text-base font-medium text-gray-700 dark:text-gray-200 border-b border-gray-100 dark:border-neutral-800"
          >
            {t.nav.concepts}
          </button>
          <button 
            onClick={() => scrollToSection('glossary')} 
            className="block w-full text-left py-2 text-base font-medium text-gray-700 dark:text-gray-200 border-b border-gray-100 dark:border-neutral-800"
          >
            {t.nav.glossary}
          </button>
          <button 
            onClick={() => scrollToSection('guide')} 
            className="block w-full text-left py-2 text-base font-medium text-gray-700 dark:text-gray-200 border-b border-gray-100 dark:border-neutral-800"
          >
            {t.nav.stepGuide}
          </button>
          <button 
            onClick={() => scrollToSection('usecases')} 
            className="block w-full text-left py-2 text-base font-medium text-gray-700 dark:text-gray-200 border-b border-gray-100 dark:border-neutral-800"
          >
            {t.nav.useCases}
          </button>
          <button 
            onClick={() => scrollToSection('faq')} 
            className="block w-full text-left py-2 text-base font-medium text-gray-700 dark:text-gray-200 border-b border-gray-100 dark:border-neutral-800"
          >
            {t.nav.faq}
          </button>
          <button 
            onClick={() => scrollToSection('adsense')} 
            className="block w-full text-left py-2 text-base font-medium text-[#FF4500] font-semibold"
          >
            {t.nav.adsensePolicy}
          </button>
          
          <div className="pt-2 text-xs text-gray-500 dark:text-gray-400">
            {t.footer.contactEmailLabel} <a href={`mailto:${CONTACT_EMAIL}`} className="underline font-semibold text-gray-800 dark:text-gray-200">{CONTACT_EMAIL}</a>
          </div>
        </div>
      )}
    </header>
  );
};
