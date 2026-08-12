import React, { useState } from 'react';
import { Language } from '../types';
import { UI_TEXT } from '../data/translations';
import { Layers, ThumbsUp, Award, ArrowBigUp, ArrowBigDown, Flame, Sparkles, HelpCircle } from 'lucide-react';

interface ConceptsSectionProps {
  lang: Language;
}

export const ConceptsSection: React.FC<ConceptsSectionProps> = ({ lang }) => {
  const t = UI_TEXT[lang].concepts;
  const isKo = lang === 'ko';

  // State for interactive simulator
  const [upvoted, setUpvoted] = useState<boolean | null>(null);
  const [score, setScore] = useState(1420);
  const [userKarma, setUserKarma] = useState(380);

  const handleVote = (type: 'up' | 'down') => {
    if (type === 'up') {
      if (upvoted === true) {
        setUpvoted(null);
        setScore((prev) => prev - 1);
        setUserKarma((prev) => prev - 1);
      } else {
        const bonus = upvoted === false ? 2 : 1;
        setUpvoted(true);
        setScore((prev) => prev + bonus);
        setUserKarma((prev) => prev + bonus);
      }
    } else {
      if (upvoted === false) {
        setUpvoted(null);
        setScore((prev) => prev + 1);
        setUserKarma((prev) => prev + 1);
      } else {
        const penalty = upvoted === true ? 2 : 1;
        setUpvoted(false);
        setScore((prev) => prev - penalty);
        setUserKarma((prev) => prev - penalty);
      }
    }
  };

  return (
    <section id="concepts" className="py-16 lg:py-20 bg-white dark:bg-[#1A1A1B] border-b border-gray-100 dark:border-neutral-800">
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

        {/* 3 Core Architecture Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* 1. Subreddit */}
          <div className="bg-gray-50 dark:bg-neutral-900 p-6 rounded-2xl border border-gray-200 dark:border-neutral-800 hover:border-orange-300 dark:hover:border-orange-800 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-950/60 flex items-center justify-center text-[#FF4500] mb-4 group-hover:scale-110 transition-transform">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {t.subredditTitle}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              {t.subredditDesc}
            </p>
            <div className="mt-4 pt-3 border-t border-gray-200 dark:border-neutral-800 flex flex-wrap gap-1.5 text-xs font-mono">
              <span className="bg-white dark:bg-neutral-800 px-2 py-1 rounded text-[#FF4500] font-semibold border border-gray-200 dark:border-neutral-700">r/technology</span>
              <span className="bg-white dark:bg-neutral-800 px-2 py-1 rounded text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-neutral-700">r/korea</span>
              <span className="bg-white dark:bg-neutral-800 px-2 py-1 rounded text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-neutral-700">r/IAmA</span>
            </div>
          </div>

          {/* 2. Karma */}
          <div className="bg-gray-50 dark:bg-neutral-900 p-6 rounded-2xl border border-gray-200 dark:border-neutral-800 hover:border-orange-300 dark:hover:border-orange-800 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-950/60 flex items-center justify-center text-amber-600 dark:text-amber-400 mb-4 group-hover:scale-110 transition-transform">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {t.karmaTitle}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              {t.karmaDesc}
            </p>
            <div className="mt-4 pt-3 border-t border-gray-200 dark:border-neutral-800 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 font-medium">
              <span>Post Karma (게시글)</span>
              <span>Comment Karma (댓글)</span>
            </div>
          </div>

          {/* 3. Voting */}
          <div className="bg-gray-50 dark:bg-neutral-900 p-6 rounded-2xl border border-gray-200 dark:border-neutral-800 hover:border-orange-300 dark:hover:border-orange-800 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-950/60 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform">
              <ThumbsUp className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {t.votingTitle}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              {t.votingDesc}
            </p>
            <div className="mt-4 pt-3 border-t border-gray-200 dark:border-neutral-800 flex items-center space-x-2 text-xs text-gray-500">
              <span className="text-[#FF4500] font-bold">▲ Upvote (+1)</span>
              <span>/</span>
              <span className="text-blue-500 font-bold">▼ Downvote (-1)</span>
            </div>
          </div>

        </div>

        {/* Interactive Voting Simulator Box */}
        <div className="mt-12 bg-gradient-to-r from-orange-500 to-amber-600 p-0.5 rounded-3xl shadow-xl">
          <div className="bg-white dark:bg-[#1A1A1B] p-6 sm:p-8 rounded-[23px]">
            
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
              <div>
                <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#FF4500] bg-orange-50 dark:bg-orange-950/60 px-2.5 py-1 rounded-md mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{t.interactiveSimTitle}</span>
                </div>
                <h3 className="text-xl font-extrabold text-gray-900 dark:text-white">
                  {isKo ? '라이브 Reddit 업보트 & 카르마 시뮬레이터' : 'Live Reddit Voting & Karma Simulator'}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {t.interactiveSimDesc}
                </p>
              </div>

              {/* User Karma Counter Display */}
              <div className="bg-gray-100 dark:bg-neutral-800 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-neutral-700 flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-[#FF4500] text-white flex items-center justify-center font-bold text-xs">
                  u/ You
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-gray-400">{isKo ? '내 카르마 점수' : 'My Karma'}</div>
                  <div className="text-base font-black text-gray-900 dark:text-white flex items-center space-x-1">
                    <span>{userKarma.toLocaleString()}</span>
                    <span className="text-xs text-amber-500">★</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mock Reddit Post Widget */}
            <div className="bg-gray-50 dark:bg-neutral-900 rounded-2xl border border-gray-200 dark:border-neutral-800 p-4 sm:p-5 flex items-start space-x-4">
              
              {/* Vote Pillar */}
              <div className="flex flex-col items-center justify-center bg-white dark:bg-neutral-800 p-2 rounded-xl border border-gray-200 dark:border-neutral-700">
                <button
                  onClick={() => handleVote('up')}
                  className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                    upvoted === true
                      ? 'bg-orange-100 dark:bg-orange-950 text-[#FF4500]'
                      : 'text-gray-400 hover:bg-gray-100 dark:hover:bg-neutral-700 hover:text-gray-700'
                  }`}
                  title="Upvote"
                >
                  <ArrowBigUp className={`w-7 h-7 ${upvoted === true ? 'fill-current' : ''}`} />
                </button>

                <span className={`text-sm font-black my-1 ${
                  upvoted === true ? 'text-[#FF4500]' : upvoted === false ? 'text-blue-500' : 'text-gray-900 dark:text-white'
                }`}>
                  {score.toLocaleString()}
                </span>

                <button
                  onClick={() => handleVote('down')}
                  className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                    upvoted === false
                      ? 'bg-blue-100 dark:bg-blue-950 text-blue-500'
                      : 'text-gray-400 hover:bg-gray-100 dark:hover:bg-neutral-700 hover:text-gray-700'
                  }`}
                  title="Downvote"
                >
                  <ArrowBigDown className={`w-7 h-7 ${upvoted === false ? 'fill-current' : ''}`} />
                </button>
              </div>

              {/* Post Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400 mb-1">
                  <span className="font-bold text-[#FF4500] hover:underline cursor-pointer">r/technology</span>
                  <span>•</span>
                  <span>Posted by <span className="hover:underline">u/TechInquirer</span> 2 hours ago</span>
                  {score > 1420 && (
                    <span className="inline-flex items-center space-x-1 bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400 px-2 py-0.5 rounded text-[10px] font-bold">
                      <Flame className="w-3 h-3 fill-current" />
                      <span>HOT</span>
                    </span>
                  )}
                </div>

                <h4 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white hover:text-[#FF4500] transition-colors cursor-pointer">
                  {isKo
                    ? 'Reddit, AI 기반 서브레딧 맞춤 요약 및 실시간 자동 번역 기능 공개'
                    : 'Reddit Launches AI-Powered Subreddit Summaries & Real-time Translations'}
                </h4>

                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-1 line-clamp-2">
                  {isKo
                    ? 'Reddit이 전 세계 사용자를 위해 서브레딧 주요 토론 내용을 한눈에 요약하고 다국어로 즉시 인공지능 번역해주는 기능을 테스트 중입니다.'
                    : 'Reddit is testing automated thread summaries and multi-language AI translation features to bring global communities closer.'}
                </p>

                {/* Status Message Explanation */}
                <div className="mt-3 p-2.5 rounded-lg bg-orange-50/80 dark:bg-orange-950/40 text-xs text-gray-700 dark:text-gray-300 border border-orange-100 dark:border-orange-900/40 flex items-center space-x-2">
                  <HelpCircle className="w-4 h-4 text-[#FF4500] shrink-0" />
                  <span>
                    {upvoted === true && (isKo ? '✅ 업보트 완료! 이 글의 순위가 상단으로 올라가고 작성자의 카르마가 상승합니다.' : '✅ Upvoted! Increases post rank towards the Hot tab and adds to author Karma.')}
                    {upvoted === false && (isKo ? '⬇️ 다운보트 완료! 신뢰도가 낮은 글은 아래로 내려가고 피드에서 감소합니다.' : '⬇️ Downvoted! Lowers post visibility and demotes unhelpful content.')}
                    {upvoted === null && (isKo ? '화살표를 눌러 투표 결과와 카르마 점수 변동을 확인해보세요.' : 'Click the arrows on the left to test voting physics!')}
                  </span>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
