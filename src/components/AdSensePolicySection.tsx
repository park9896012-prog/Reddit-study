import React from 'react';
import { Language } from '../types';
import { UI_TEXT, CONTACT_EMAIL } from '../data/translations';
import { AdSenseBanner } from './AdSenseBanner';
import { ShieldCheck, CheckCircle2, FileText, Lock, Mail, ExternalLink } from 'lucide-react';

interface AdSensePolicySectionProps {
  lang: Language;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const AdSensePolicySection: React.FC<AdSensePolicySectionProps> = ({
  lang,
  onOpenPrivacy,
  onOpenTerms,
}) => {
  const t = UI_TEXT[lang].adsenseSection;
  const isKo = lang === 'ko';

  return (
    <section id="adsense" className="py-16 lg:py-20 bg-[#F8F9FA] dark:bg-[#0e0e10] border-b border-gray-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FF4500] bg-orange-50 dark:bg-orange-950/50 px-3 py-1 rounded-full border border-orange-200 dark:border-orange-800">
            {t.sectionBadge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mt-3 tracking-tight">
            {t.sectionTitle}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2 text-base">
            {t.sectionDesc}
          </p>
        </div>

        {/* 4 Policy Compliance Checklist Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-10">
          
          <div className="bg-white dark:bg-neutral-900 p-6 rounded-2xl border border-gray-200 dark:border-neutral-800 shadow-sm flex items-start space-x-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white">
                {t.item1Title}
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-300 mt-1 leading-relaxed">
                {t.item1Desc}
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-900 p-6 rounded-2xl border border-gray-200 dark:border-neutral-800 shadow-sm flex items-start space-x-4">
            <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white">
                {t.item2Title}
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-300 mt-1 leading-relaxed">
                {t.item2Desc}
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-900 p-6 rounded-2xl border border-gray-200 dark:border-neutral-800 shadow-sm flex items-start space-x-4">
            <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-950 text-[#FF4500] flex items-center justify-center shrink-0">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white">
                {t.item3Title}
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-300 mt-1 leading-relaxed">
                {t.item3Desc}
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-900 p-6 rounded-2xl border border-gray-200 dark:border-neutral-800 shadow-sm flex items-start space-x-4">
            <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white">
                {t.item4Title}
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-300 mt-1 leading-relaxed">
                {t.item4Desc}
              </p>
            </div>
          </div>

        </div>

        {/* Ad Placement Demonstration Unit */}
        <div className="max-w-4xl mx-auto">
          <AdSenseBanner lang={lang} format="horizontal" slotId="9876543210" />
        </div>

        {/* Legal Modal Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenPrivacy}
            className="px-6 py-3 rounded-xl bg-white dark:bg-neutral-800 hover:bg-gray-100 dark:hover:bg-neutral-700 text-gray-900 dark:text-white border border-gray-200 dark:border-neutral-700 font-bold text-xs sm:text-sm shadow-sm transition-all flex items-center space-x-2 cursor-pointer"
          >
            <Lock className="w-4 h-4 text-[#FF4500]" />
            <span>{t.viewPrivacyBtn}</span>
            <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
          </button>

          <button
            onClick={onOpenTerms}
            className="px-6 py-3 rounded-xl bg-white dark:bg-neutral-800 hover:bg-gray-100 dark:hover:bg-neutral-700 text-gray-900 dark:text-white border border-gray-200 dark:border-neutral-700 font-bold text-xs sm:text-sm shadow-sm transition-all flex items-center space-x-2 cursor-pointer"
          >
            <FileText className="w-4 h-4 text-blue-500" />
            <span>{t.viewTermsBtn}</span>
            <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
          </button>
        </div>

      </div>
    </section>
  );
};
