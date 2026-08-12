import React from 'react';
import { Language } from '../types';
import { UI_TEXT, CONTACT_EMAIL } from '../data/translations';
import { ArrowRight, Search, BookOpen, ShieldCheck, Sparkles, TrendingUp, Users, MessageCircle } from 'lucide-react';

interface HeroProps {
  lang: Language;
  onStartGuide: () => void;
  onSearchClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onStartGuide, onSearchClick }) => {
  const t = UI_TEXT[lang].hero;

  return (
    <section id="hero" className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 bg-gradient-to-b from-orange-50/50 via-white to-[#F8F9FA] dark:from-neutral-900/60 dark:via-[#1A1A1B] dark:to-[#0e0e10]">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-orange-300/20 to-amber-200/10 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-neutral-800 border border-orange-200 dark:border-neutral-700 shadow-sm text-xs font-semibold text-[#FF4500]">
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-[#FF4500]" />
            <span>{t.badge}</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-[1.15]">
            {t.titleLine1} <br className="hidden sm:inline" />
            <span className="text-[#FF4500] underline decoration-orange-300/50 underline-offset-8">
              {t.titleLine2}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 font-normal max-w-2xl mx-auto leading-relaxed">
            {t.description}
          </p>

          {/* CTA Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={onStartGuide}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#FF4500] hover:bg-[#e03d00] text-white font-bold text-base shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all flex items-center justify-center space-x-2 group cursor-pointer"
            >
              <BookOpen className="w-5 h-5" />
              <span>{t.btnStart}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onSearchClick}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white dark:bg-neutral-800 hover:bg-gray-50 dark:hover:bg-neutral-700 text-gray-900 dark:text-white border border-gray-200 dark:border-neutral-700 font-semibold text-base shadow-sm transition-all flex items-center justify-center space-x-2 cursor-pointer"
            >
              <Search className="w-5 h-5 text-gray-500" />
              <span>{t.btnSearch}</span>
            </button>
          </div>

          {/* Contact email trust label */}
          <div className="text-xs text-gray-500 dark:text-gray-400 pt-2 flex items-center justify-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>AdSense & Copyright Verified • Publisher Contact: <strong className="text-gray-700 dark:text-gray-300">{CONTACT_EMAIL}</strong></span>
          </div>

        </div>

        {/* 3 Metric Stat Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-neutral-800/80 p-5 rounded-2xl border border-gray-100 dark:border-neutral-700/60 shadow-sm hover:shadow-md transition-shadow text-center">
            <div className="w-10 h-10 mx-auto rounded-xl bg-orange-100 dark:bg-orange-950/60 flex items-center justify-center text-[#FF4500] mb-3">
              <Users className="w-5 h-5" />
            </div>
            <div className="text-3xl font-black text-gray-900 dark:text-white tracking-tight">{t.stat1Number}</div>
            <div className="text-xs font-medium text-gray-500 dark:text-gray-400 mt-1">{t.stat1Label}</div>
          </div>

          <div className="bg-white dark:bg-neutral-800/80 p-5 rounded-2xl border border-gray-100 dark:border-neutral-700/60 shadow-sm hover:shadow-md transition-shadow text-center">
            <div className="w-10 h-10 mx-auto rounded-xl bg-blue-100 dark:bg-blue-950/60 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-3">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div className="text-3xl font-black text-gray-900 dark:text-white tracking-tight">{t.stat2Number}</div>
            <div className="text-xs font-medium text-gray-500 dark:text-gray-400 mt-1">{t.stat2Label}</div>
          </div>

          <div className="bg-white dark:bg-neutral-800/80 p-5 rounded-2xl border border-gray-100 dark:border-neutral-700/60 shadow-sm hover:shadow-md transition-shadow text-center">
            <div className="w-10 h-10 mx-auto rounded-xl bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-3">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div className="text-3xl font-black text-gray-900 dark:text-white tracking-tight">{t.stat3Number}</div>
            <div className="text-xs font-medium text-gray-500 dark:text-gray-400 mt-1">{t.stat3Label}</div>
          </div>
        </div>

      </div>
    </section>
  );
};
