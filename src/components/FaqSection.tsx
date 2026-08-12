import React, { useState } from 'react';
import { Language } from '../types';
import { UI_TEXT, FAQ_ITEMS } from '../data/translations';
import { ChevronDown, HelpCircle, CheckCircle, XCircle, ShieldAlert } from 'lucide-react';

interface FaqSectionProps {
  lang: Language;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ lang }) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQ_ITEMS[0].id);

  const t = UI_TEXT[lang].faq;
  const isKo = lang === 'ko';

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-16 lg:py-20 bg-white dark:bg-[#1A1A1B] border-b border-gray-100 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* FAQ Accordion List (Left 7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {FAQ_ITEMS.map((item) => {
              const isOpen = openFaqId === item.id;
              return (
                <div
                  key={item.id}
                  className="bg-gray-50 dark:bg-neutral-900 rounded-2xl border border-gray-200 dark:border-neutral-800 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(item.id)}
                    className="w-full p-5 text-left flex items-center justify-between space-x-4 cursor-pointer hover:bg-gray-100 dark:hover:bg-neutral-800/60 transition-colors"
                  >
                    <div className="flex items-start space-x-3">
                      <HelpCircle className="w-5 h-5 text-[#FF4500] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[10px] font-bold font-mono text-[#FF4500] bg-orange-100 dark:bg-orange-950 px-2 py-0.5 rounded">
                          {isKo ? item.categoryKo : item.categoryEn}
                        </span>
                        <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white mt-1 leading-snug">
                          {isKo ? item.questionKo : item.questionEn}
                        </h3>
                      </div>
                    </div>

                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#FF4500]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed border-t border-gray-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60">
                      {isKo ? item.answerKo : item.answerEn}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Reddiquette Quick Do's & Don'ts Card (Right 5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-neutral-900 dark:to-neutral-900 p-6 rounded-3xl border border-orange-200 dark:border-neutral-700 shadow-sm space-y-5">
            <div>
              <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#FF4500] uppercase tracking-wider mb-1">
                <ShieldAlert className="w-4 h-4" />
                <span>REDDIQUETTE GUIDE</span>
              </div>
              <h3 className="text-xl font-black text-gray-900 dark:text-white">
                {isKo ? 'Reddit 에티켓 핵심 요약' : 'Reddiquette Rules of Engagement'}
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">
                {isKo ? '커뮤니티에서 차단(Ban)없이 오랫동안 환영받기 위한 규칙' : 'Essential community guidelines for long-term account health.'}
              </p>
            </div>

            {/* DO list */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider flex items-center space-x-1">
                <CheckCircle className="w-4 h-4" />
                <span>RECOMMENDED (권장)</span>
              </h4>
              <ul className="text-xs text-gray-700 dark:text-gray-200 space-y-1.5 pl-2">
                <li>• 출처가 명확한 지식 및 경험 원본 공유</li>
                <li>• 작성 전 해당 서브레딧 사이드바 규칙 필독</li>
                <li>• 타인의 정성 어린 작성글에 Upvote 누르기</li>
                <li>• 질문 시 고마움과 피드백을 댓글로 표시</li>
              </ul>
            </div>

            {/* DON'T list */}
            <div className="space-y-2 pt-2 border-t border-orange-200 dark:border-neutral-800">
              <h4 className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-wider flex items-center space-x-1">
                <XCircle className="w-4 h-4" />
                <span>STRICTLY FORBIDDEN (금지)</span>
              </h4>
              <ul className="text-xs text-gray-700 dark:text-gray-200 space-y-1.5 pl-2">
                <li>• 자사 홍보성 링크 반복 도배 (스팸)</li>
                <li>• 자극적/낚시성 제목 (Clickbait) 작성</li>
                <li>• 다중 계정 조작을 통한 셀프 Upvote 조작</li>
                <li>• 다른 회원에 대한 비하 또는 인신공격</li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
