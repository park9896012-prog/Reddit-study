import React, { useState } from 'react';
import { Language, GlossaryItem } from '../types';
import { UI_TEXT, GLOSSARY_ITEMS } from '../data/translations';
import { Search, Tag, Sparkles, BookMarked, Filter, CheckCircle } from 'lucide-react';

interface GlossarySectionProps {
  lang: Language;
}

export const GlossarySection: React.FC<GlossarySectionProps> = ({ lang }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeItemModal, setActiveItemModal] = useState<GlossaryItem | null>(null);

  const t = UI_TEXT[lang].glossary;
  const isKo = lang === 'ko';

  const filteredItems = GLOSSARY_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const searchLower = searchTerm.toLowerCase().trim();
    const matchesSearch =
      !searchLower ||
      item.term.toLowerCase().includes(searchLower) ||
      item.termEn.toLowerCase().includes(searchLower) ||
      item.shortDesc.toLowerCase().includes(searchLower) ||
      item.shortDescEn.toLowerCase().includes(searchLower) ||
      item.fullDesc.toLowerCase().includes(searchLower) ||
      item.fullDescEn.toLowerCase().includes(searchLower);

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="glossary" className="py-16 lg:py-20 bg-[#F8F9FA] dark:bg-[#0e0e10] border-b border-gray-200 dark:border-neutral-800">
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

        {/* Search Bar & Category Chips */}
        <div className="max-w-3xl mx-auto mb-10 space-y-4">
          
          {/* Search Input Box */}
          <div className="relative">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full pl-12 pr-10 py-3.5 bg-white dark:bg-neutral-800 rounded-2xl border border-gray-200 dark:border-neutral-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF4500] shadow-sm text-sm"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs bg-gray-200 dark:bg-neutral-700 hover:bg-gray-300 text-gray-700 dark:text-gray-200 px-2 py-1 rounded-full cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 rounded-xl font-semibold transition-all cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#FF4500] text-white shadow-md'
                  : 'bg-white dark:bg-neutral-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-neutral-700 hover:border-gray-400'
              }`}
            >
              {t.allCategories}
            </button>
            <button
              onClick={() => setSelectedCategory('basic')}
              className={`px-3.5 py-1.5 rounded-xl font-semibold transition-all cursor-pointer ${
                selectedCategory === 'basic'
                  ? 'bg-[#FF4500] text-white shadow-md'
                  : 'bg-white dark:bg-neutral-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-neutral-700 hover:border-gray-400'
              }`}
            >
              {t.catBasic}
            </button>
            <button
              onClick={() => setSelectedCategory('content')}
              className={`px-3.5 py-1.5 rounded-xl font-semibold transition-all cursor-pointer ${
                selectedCategory === 'content'
                  ? 'bg-[#FF4500] text-white shadow-md'
                  : 'bg-white dark:bg-neutral-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-neutral-700 hover:border-gray-400'
              }`}
            >
              {t.catContent}
            </button>
            <button
              onClick={() => setSelectedCategory('community')}
              className={`px-3.5 py-1.5 rounded-xl font-semibold transition-all cursor-pointer ${
                selectedCategory === 'community'
                  ? 'bg-[#FF4500] text-white shadow-md'
                  : 'bg-white dark:bg-neutral-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-neutral-700 hover:border-gray-400'
              }`}
            >
              {t.catCommunity}
            </button>
            <button
              onClick={() => setSelectedCategory('culture')}
              className={`px-3.5 py-1.5 rounded-xl font-semibold transition-all cursor-pointer ${
                selectedCategory === 'culture'
                  ? 'bg-[#FF4500] text-white shadow-md'
                  : 'bg-white dark:bg-neutral-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-neutral-700 hover:border-gray-400'
              }`}
            >
              {t.catCulture}
            </button>
          </div>

        </div>

        {/* Glossary Cards Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-12 bg-white dark:bg-neutral-900 rounded-2xl border border-gray-200 dark:border-neutral-800 max-w-xl mx-auto">
            <p className="text-gray-500 dark:text-gray-400 text-sm">{t.noResults}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveItemModal(item)}
                className="bg-white dark:bg-neutral-900 rounded-2xl p-5 border border-gray-200 dark:border-neutral-800 hover:border-orange-400 dark:hover:border-orange-600 hover:shadow-lg transition-all flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-[#FF4500] bg-orange-50 dark:bg-orange-950/60 px-2.5 py-0.5 rounded">
                      {item.termEn}
                    </span>
                    {item.badge && (
                      <span className="text-[10px] font-bold text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 px-2 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-[#FF4500] transition-colors">
                    {item.term}
                  </h3>

                  <p className="text-xs text-gray-600 dark:text-gray-300 mt-2 font-medium line-clamp-2">
                    {isKo ? item.shortDesc : item.shortDescEn}
                  </p>

                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">
                    {isKo ? item.fullDesc : item.fullDescEn}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 dark:border-neutral-800 flex items-center justify-between text-xs text-gray-400">
                  <span className="font-mono text-[11px] truncate max-w-[200px]">
                    💡 {isKo ? item.example : item.example}
                  </span>
                  <span className="text-[#FF4500] font-semibold text-[11px] group-hover:translate-x-0.5 transition-transform">
                    {isKo ? '자세히 ›' : 'More ›'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Modal detail dialog for term */}
      {activeItemModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#1A1A1B] max-w-lg w-full rounded-2xl p-6 shadow-2xl border border-gray-200 dark:border-neutral-700 relative animate-in fade-in zoom-in-95 duration-150">
            <button
              onClick={() => setActiveItemModal(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 dark:hover:text-white text-lg font-bold p-1 cursor-pointer"
            >
              ✕
            </button>

            <div className="inline-block text-xs font-mono font-bold text-[#FF4500] bg-orange-50 dark:bg-orange-950 px-2.5 py-1 rounded mb-2">
              {activeItemModal.termEn}
            </div>

            <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2">
              {activeItemModal.term}
            </h3>

            <div className="text-sm text-gray-700 dark:text-gray-200 space-y-3 mt-4">
              <div className="bg-gray-50 dark:bg-neutral-800 p-3 rounded-xl border border-gray-100 dark:border-neutral-700">
                <span className="text-xs font-bold text-gray-400 block uppercase">{isKo ? '핵심 요약' : 'Summary'}</span>
                <p className="font-medium mt-0.5">{isKo ? activeItemModal.shortDesc : activeItemModal.shortDescEn}</p>
              </div>

              <div>
                <span className="text-xs font-bold text-gray-400 block uppercase">{isKo ? '상세 설명' : 'Detailed Explanation'}</span>
                <p className="mt-1 leading-relaxed text-gray-600 dark:text-gray-300">{isKo ? activeItemModal.fullDesc : activeItemModal.fullDescEn}</p>
              </div>

              <div className="bg-orange-50/60 dark:bg-orange-950/40 p-3 rounded-xl border border-orange-100 dark:border-orange-900/40 text-xs text-gray-700 dark:text-gray-300">
                <span className="font-bold text-[#FF4500] block">{isKo ? '실제 사용 예시' : 'Example Usage'}</span>
                <p className="mt-1 font-mono">{activeItemModal.example}</p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 dark:border-neutral-800 text-right">
              <button
                onClick={() => setActiveItemModal(null)}
                className="px-5 py-2 bg-[#FF4500] text-white font-bold text-xs rounded-xl hover:bg-[#e03d00] cursor-pointer"
              >
                {isKo ? '닫기' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
