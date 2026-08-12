import React from 'react';
import { Language } from '../types';
import { UI_TEXT, USE_CASES } from '../data/translations';
import { Search, MessageSquare, BarChart3, ArrowUpRight, Globe2, Briefcase, ChevronRight } from 'lucide-react';

interface UseCasesSectionProps {
  lang: Language;
}

export const UseCasesSection: React.FC<UseCasesSectionProps> = ({ lang }) => {
  const t = UI_TEXT[lang].useCases;
  const isKo = lang === 'ko';

  const getIcon = (name: string) => {
    switch (name) {
      case 'Search':
        return <Search className="w-6 h-6 text-[#FF4500]" />;
      case 'MessageSquare':
        return <MessageSquare className="w-6 h-6 text-blue-500" />;
      case 'BarChart3':
        return <BarChart3 className="w-6 h-6 text-emerald-500" />;
      default:
        return <Briefcase className="w-6 h-6 text-[#FF4500]" />;
    }
  };

  return (
    <section id="usecases" className="py-16 lg:py-20 bg-[#F8F9FA] dark:bg-[#0e0e10] border-b border-gray-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
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

        {/* Use Cases Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {USE_CASES.map((uc) => (
            <div
              key={uc.id}
              className="bg-white dark:bg-neutral-900 rounded-3xl p-6 sm:p-8 border border-gray-200 dark:border-neutral-800 hover:border-orange-400 dark:hover:border-orange-600 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                
                {/* Icon & Title Header */}
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-2xl bg-gray-100 dark:bg-neutral-800 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    {getIcon(uc.iconName)}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">
                    {isKo ? uc.titleKo : uc.titleEn}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm font-semibold text-[#FF4500] bg-orange-50 dark:bg-orange-950/40 p-3 rounded-xl border border-orange-100 dark:border-orange-900/30">
                  {isKo ? uc.summaryKo : uc.summaryEn}
                </p>

                {/* Key Tactics Bullet List */}
                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block">
                    {isKo ? '실무 핵심 프로세스' : 'Key Process'}
                  </span>
                  {(isKo ? uc.detailsKo : uc.detailsEn).map((detail, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                      <ChevronRight className="w-3.5 h-3.5 text-[#FF4500] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Real World Example Highlight */}
                <div className="bg-gray-50 dark:bg-neutral-800/80 p-3.5 rounded-2xl border border-gray-100 dark:border-neutral-700/60 text-xs text-gray-700 dark:text-gray-300 font-medium">
                  <span className="text-[#FF4500] font-bold block mb-1">
                    {isKo ? '📌 실제 적용 사례' : '📌 Real-World Impact'}
                  </span>
                  <p className="leading-relaxed">
                    {isKo ? uc.realWorldExampleKo : uc.realWorldExampleEn}
                  </p>
                </div>

              </div>

              {/* Recommended Subreddits Footer */}
              <div className="mt-6 pt-4 border-t border-gray-100 dark:border-neutral-800">
                <span className="text-[11px] font-bold text-gray-400 block mb-2">
                  {t.recommendedSubs}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {uc.recommendedSubreddits.map((sub, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-gray-100 dark:bg-neutral-800 hover:bg-orange-100 dark:hover:bg-orange-950 text-gray-800 dark:text-gray-200 hover:text-[#FF4500] font-mono text-[11px] font-bold rounded-lg border border-gray-200 dark:border-neutral-700 transition-colors"
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
