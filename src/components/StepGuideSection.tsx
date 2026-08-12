import React, { useState } from 'react';
import { Language, StepGuideItem, HighlightPoint } from '../types';
import { UI_TEXT, STEP_GUIDES } from '../data/translations';
import { ArrowRight, CheckCircle2, Lightbulb, Image as ImageIcon, Crosshair, Sparkles, AlertCircle } from 'lucide-react';

interface StepGuideSectionProps {
  lang: Language;
}

export const StepGuideSection: React.FC<StepGuideSectionProps> = ({ lang }) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [hoveredHighlight, setHoveredHighlight] = useState<number | null>(null);
  const [customImageUrls, setCustomImageUrls] = useState<{ [key: string]: string }>({});
  const [showImageInput, setShowImageInput] = useState<boolean>(false);

  const t = UI_TEXT[lang].stepGuide;
  const isKo = lang === 'ko';
  const currentStep = STEP_GUIDES[activeStepIndex];

  const handleCustomUrlChange = (stepId: string, url: string) => {
    setCustomImageUrls((prev) => ({ ...prev, [stepId]: url }));
  };

  return (
    <section id="guide" className="py-16 lg:py-20 bg-white dark:bg-[#1A1A1B] border-b border-gray-100 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
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

        {/* 4 Step Navigation Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {STEP_GUIDES.map((step, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <button
                key={step.id}
                onClick={() => {
                  setActiveStepIndex(idx);
                  setHoveredHighlight(null);
                }}
                className={`flex items-center space-x-2 px-4 py-3 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#FF4500] text-white shadow-lg shadow-orange-500/20'
                    : 'bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-neutral-700'
                }`}
              >
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black ${
                  isActive ? 'bg-white text-[#FF4500]' : 'bg-gray-200 dark:bg-neutral-700 text-gray-700 dark:text-gray-200'
                }`}>
                  {step.stepNumber}
                </span>
                <span>{isKo ? step.titleKo.split(':')[0] : `Step ${step.stepNumber}`}</span>
              </button>
            );
          })}
        </div>

        {/* Step Guide Grid Container (Explanation Panel + UI Mockup Frame) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-gray-50 dark:bg-neutral-900 rounded-3xl p-6 sm:p-8 border border-gray-200 dark:border-neutral-800">
          
          {/* Left Column: Explanation Panel */}
          <div className="lg:col-span-5 space-y-6">
            
            <div>
              <span className="text-xs font-bold font-mono text-[#FF4500] bg-orange-100 dark:bg-orange-950/80 px-2.5 py-1 rounded">
                STEP 0{currentStep.stepNumber} / 04
              </span>
              <h3 className="text-2xl font-black text-gray-900 dark:text-white mt-2 leading-tight">
                {isKo ? currentStep.titleKo : currentStep.titleEn}
              </h3>
              <p className="text-sm font-semibold text-[#FF4500] mt-1">
                {isKo ? currentStep.subtitleKo : currentStep.subtitleEn}
              </p>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-3 leading-relaxed">
                {isKo ? currentStep.descriptionKo : currentStep.descriptionEn}
              </p>
            </div>

            {/* Checklist Bullet Points */}
            <div className="space-y-2.5 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                {isKo ? '핵심 실행 체크리스트' : 'Action Steps Checklist'}
              </h4>
              {(isKo ? currentStep.bulletPointsKo : currentStep.bulletPointsEn).map((point, i) => (
                <div key={i} className="flex items-start space-x-2.5 text-xs sm:text-sm text-gray-700 dark:text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* Highlighted Key Spots Legend */}
            <div className="bg-white dark:bg-neutral-800 p-4 rounded-2xl border border-gray-200 dark:border-neutral-700 space-y-2">
              <div className="flex items-center space-x-1.5 text-xs font-bold text-[#FF4500]">
                <Crosshair className="w-4 h-4" />
                <span>{isKo ? '화면 스크린샷 붉은색 포인트 안내' : 'Highlighted Spot Guide'}</span>
              </div>
              <div className="space-y-2 pt-1">
                {currentStep.highlights.map((hl) => (
                  <div
                    key={hl.id}
                    onMouseEnter={() => setHoveredHighlight(hl.id)}
                    onMouseLeave={() => setHoveredHighlight(null)}
                    className={`p-2.5 rounded-xl border text-xs transition-all cursor-pointer ${
                      hoveredHighlight === hl.id
                        ? 'bg-red-50 dark:bg-red-950/50 border-red-400 text-red-900 dark:text-red-200 ring-2 ring-red-400/30'
                        : 'bg-gray-50 dark:bg-neutral-900 border-gray-200 dark:border-neutral-700 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    <div className="flex items-center space-x-2 font-bold">
                      <span className="w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center text-[10px] shadow">
                        {hl.id}
                      </span>
                      <span>{isKo ? hl.titleKo : hl.titleEn}</span>
                    </div>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1 pl-7">
                      {isKo ? hl.descKo : hl.descEn}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tips Box */}
            <div className="bg-amber-50 dark:bg-amber-950/40 p-4 rounded-2xl border border-amber-200 dark:border-amber-800 text-xs text-amber-900 dark:text-amber-200 space-y-1">
              {(isKo ? currentStep.tipsKo : currentStep.tipsEn).map((tip, idx) => (
                <p key={idx} className="font-medium leading-relaxed">{tip}</p>
              ))}
            </div>

            {/* Optional Custom Image URL Drawer */}
            <div className="pt-2">
              <button
                onClick={() => setShowImageInput(!showImageInput)}
                className="text-xs text-gray-500 dark:text-gray-400 hover:text-[#FF4500] flex items-center space-x-1 cursor-pointer"
              >
                <ImageIcon className="w-3.5 h-3.5" />
                <span>{t.customUrlLabel}</span>
              </button>

              {showImageInput && (
                <div className="mt-2 p-3 bg-white dark:bg-neutral-800 rounded-xl border border-gray-200 dark:border-neutral-700 space-y-2">
                  <label className="text-[11px] text-gray-500 block font-medium">
                    {isKo ? '커스텀 스크린샷 이미지 URL' : 'Custom Image URL'}
                  </label>
                  <input
                    type="url"
                    value={customImageUrls[currentStep.id] || ''}
                    onChange={(e) => handleCustomUrlChange(currentStep.id, e.target.value)}
                    placeholder={t.inputUrlPlaceholder}
                    className="w-full px-3 py-1.5 text-xs bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 rounded-lg"
                  />
                  <p className="text-[10px] text-gray-400">
                    {isKo ? '이미지 URL 입력시 아래 인터랙티브 UI Mockup 대신 해당 이미지가 노출됩니다.' : 'Replaces the mock UI frame with your image.'}
                  </p>
                </div>
              )}
            </div>

          </div>

          {/* Right Column: 16:9 Realistic Reddit UI Mockup Frame with Red Highlight Badges & Arrows */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-300 dark:border-neutral-700 bg-gray-900 aspect-video flex flex-col select-none">
              
              {/* If user gave custom URL */}
              {customImageUrls[currentStep.id] ? (
                <div className="w-full h-full relative">
                  <img
                    src={customImageUrls[currentStep.id]}
                    alt="Custom Reddit Screenshot"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay red points on top */}
                  {currentStep.highlights.map((hl) => (
                    <div
                      key={hl.id}
                      style={{ left: `${hl.xPercentage}%`, top: `${hl.yPercentage}%` }}
                      className="absolute -translate-x-1/2 -translate-y-1/2"
                    >
                      <div className="relative flex items-center justify-center">
                        <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-red-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-7 w-7 bg-red-600 text-white font-black text-xs items-center justify-center shadow-lg border-2 border-white">
                          {hl.id}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* Interactive Rendered Reddit UI Mockup */
                <RenderedRedditMockup
                  mockupType={currentStep.mockupType}
                  highlights={currentStep.highlights}
                  hoveredHighlight={hoveredHighlight}
                  setHoveredHighlight={setHoveredHighlight}
                  isKo={isKo}
                />
              )}

              {/* Caption Overlay Bar */}
              <div className="bg-gray-950/90 backdrop-blur-md px-4 py-2.5 text-xs text-gray-300 border-t border-neutral-800 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="font-semibold text-white">
                    {isKo ? 'Reddit 화면 모사 UI & 빨간색 클릭 위치 뱃지' : 'Reddit Screen UI Frame with Red Key Badges'}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-gray-400">16:9 HD Frame</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

/* Subcomponent for rendering Reddit UI Mockup layouts depending on step */
interface RenderedRedditMockupProps {
  mockupType: 'profile' | 'subreddit' | 'create_post' | 'karma_rules';
  highlights: HighlightPoint[];
  hoveredHighlight: number | null;
  setHoveredHighlight: (id: number | null) => void;
  isKo: boolean;
}

const RenderedRedditMockup: React.FC<RenderedRedditMockupProps> = ({
  mockupType,
  highlights,
  hoveredHighlight,
  setHoveredHighlight,
  isKo,
}) => {
  return (
    <div className="w-full h-full bg-[#DAE0E6] dark:bg-[#0e0e10] flex flex-col text-[#1A1A1B] dark:text-[#D7DADC] text-[11px] overflow-hidden relative">
      
      {/* Top Header Bar of Reddit */}
      <div className="h-10 bg-white dark:bg-[#1A1A1B] border-b border-gray-200 dark:border-neutral-800 px-3 flex items-center justify-between shrink-0">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 rounded-full bg-[#FF4500] text-white flex items-center justify-center font-bold text-[10px]">
            r/
          </div>
          <span className="font-bold text-xs text-gray-900 dark:text-white">reddit</span>
        </div>

        {/* Search bar inside mock */}
        <div className="flex-1 max-w-xs mx-4 bg-gray-100 dark:bg-neutral-800 px-3 py-1 rounded-full text-[10px] text-gray-500 flex items-center space-x-2 border border-gray-200 dark:border-neutral-700">
          <span>🔍</span>
          <span className="truncate">{mockupType === 'subreddit' ? 'Search r/korea or r/technology...' : 'Search Reddit...'}</span>
        </div>

        {/* User Badge */}
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 rounded-full bg-orange-400 text-white flex items-center justify-center text-[10px] font-bold">
            u/
          </div>
          <span className="font-bold text-xs">u/NewbieUser</span>
        </div>
      </div>

      {/* Body Layout */}
      <div className="flex-1 p-3 flex gap-3 overflow-hidden relative">
        
        {/* Main Feed Content Left */}
        <div className="flex-1 space-y-2.5 overflow-hidden">
          
          {mockupType === 'profile' && (
            <div className="bg-white dark:bg-[#1A1A1B] rounded-lg p-3 border border-gray-200 dark:border-neutral-800 space-y-2">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-orange-500 to-amber-400 text-white flex items-center justify-center font-bold text-lg shadow">
                  u/
                </div>
                <div>
                  <div className="font-bold text-sm text-gray-900 dark:text-white">u/AnonymousGuide_2026</div>
                  <div className="text-[10px] text-gray-400">Joined Aug 2026 • 1 Karma</div>
                </div>
              </div>
              <div className="p-2 bg-gray-50 dark:bg-neutral-900 rounded border border-gray-200 dark:border-neutral-800 text-[10px] text-gray-600 dark:text-gray-300">
                🔒 Account Security Status: Email hidden, 2FA Active
              </div>
            </div>
          )}

          {mockupType === 'subreddit' && (
            <div className="space-y-2">
              <div className="bg-white dark:bg-[#1A1A1B] rounded-lg p-3 border border-gray-200 dark:border-neutral-800 flex items-center justify-between">
                <div>
                  <h4 className="font-extrabold text-sm text-gray-900 dark:text-white">r/korea</h4>
                  <p className="text-[10px] text-gray-400">420k Members • 1.2k Online Now</p>
                </div>
                <span className="px-3 py-1 bg-[#FF4500] text-white font-bold rounded-full text-xs shadow">
                  + Join
                </span>
              </div>
              <div className="bg-white dark:bg-[#1A1A1B] rounded-lg p-3 border border-gray-200 dark:border-neutral-800">
                <span className="text-[10px] text-gray-400">Posted by u/Kim_Expat 3h ago</span>
                <p className="font-bold text-xs mt-1">What are the best tech meetups in Seoul this month?</p>
              </div>
            </div>
          )}

          {mockupType === 'create_post' && (
            <div className="bg-white dark:bg-[#1A1A1B] rounded-lg p-3 border border-gray-200 dark:border-neutral-800 space-y-2">
              <div className="flex border-b border-gray-200 dark:border-neutral-800 pb-1.5 space-x-3 text-xs font-bold text-gray-500">
                <span className="text-[#FF4500] border-b-2 border-[#FF4500] pb-1">Post</span>
                <span>Images & Video</span>
                <span>Link</span>
                <span>Poll</span>
              </div>
              <div className="p-2 bg-gray-50 dark:bg-neutral-900 rounded border border-gray-200 dark:border-neutral-700 text-gray-400">
                An interesting title...
              </div>
              <div className="p-3 bg-gray-50 dark:bg-neutral-900 rounded border border-gray-200 dark:border-neutral-700 text-gray-400 h-16">
                Text (optional rich text or markdown)...
              </div>
              <div className="flex justify-between items-center">
                <span className="px-2 py-0.5 bg-gray-200 dark:bg-neutral-800 rounded text-[10px] font-bold">
                  + Select Flair
                </span>
                <span className="px-3 py-1 bg-[#FF4500] text-white font-bold rounded-full text-xs">
                  Post
                </span>
              </div>
            </div>
          )}

          {mockupType === 'karma_rules' && (
            <div className="space-y-2">
              <div className="bg-white dark:bg-[#1A1A1B] rounded-lg p-3 border border-gray-200 dark:border-neutral-800 flex justify-between items-center">
                <div>
                  <span className="font-bold text-xs">User Karma Breakdown</span>
                  <p className="text-[10px] text-emerald-500 font-bold">Post: 120 • Comment: 350</p>
                </div>
                <span className="text-xs font-bold text-amber-500">Total: 470 ★</span>
              </div>
              <div className="bg-white dark:bg-[#1A1A1B] rounded-lg p-3 border border-gray-200 dark:border-neutral-800">
                <p className="text-xs font-bold text-gray-700 dark:text-gray-300">
                  Comment on r/AskReddit: "Here is my honest perspective..."
                </p>
                <p className="text-[10px] text-gray-400 mt-1">▲ +42 Upvotes earned</p>
              </div>
            </div>
          )}

        </div>

        {/* Right Sidebar of Mock Reddit */}
        <div className="w-36 bg-white dark:bg-[#1A1A1B] rounded-lg p-2.5 border border-gray-200 dark:border-neutral-800 hidden sm:flex flex-col justify-between shrink-0">
          <div>
            <span className="font-bold text-[10px] uppercase text-gray-400 block mb-1">
              About Community
            </span>
            <p className="text-[10px] text-gray-500 dark:text-gray-400 leading-tight">
              Community guidelines and mod enforcement.
            </p>
            <div className="mt-2 space-y-1 text-[9px] text-gray-600 dark:text-gray-300">
              <div className="p-1 bg-gray-50 dark:bg-neutral-900 rounded font-bold">1. Be Respectful</div>
              <div className="p-1 bg-gray-50 dark:bg-neutral-900 rounded font-bold">2. No Spam</div>
            </div>
          </div>
          <div className="pt-2 border-t border-gray-200 dark:border-neutral-800 text-[9px] text-[#FF4500] font-bold">
            Message the Mods
          </div>
        </div>

        {/* Pulsing Red Highlights and Arrows Overlay */}
        {highlights.map((hl) => {
          const isHovered = hoveredHighlight === hl.id;
          return (
            <div
              key={hl.id}
              style={{ left: `${hl.xPercentage}%`, top: `${hl.yPercentage}%` }}
              onMouseEnter={() => setHoveredHighlight(hl.id)}
              onMouseLeave={() => setHoveredHighlight(null)}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer group"
            >
              <div className="relative flex items-center justify-center">
                {/* Ping Ring */}
                <span className={`animate-ping absolute inline-flex h-8 w-8 rounded-full bg-red-600 ${isHovered ? 'opacity-100 scale-125' : 'opacity-75'}`}></span>
                
                {/* Red Badge */}
                <span className={`relative inline-flex rounded-full h-7 w-7 text-white font-black text-xs items-center justify-center shadow-2xl border-2 border-white transition-transform ${
                  isHovered ? 'bg-red-700 scale-125 ring-4 ring-red-400/50' : 'bg-red-600'
                }`}>
                  {hl.id}
                </span>

                {/* Arrow Pointer Graphic */}
                <div className="absolute top-7 left-1/2 -translate-x-1/2 pointer-events-none">
                  <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[8px] border-b-red-600 -rotate-180" />
                </div>

                {/* Tooltip on hover */}
                <div className="absolute bottom-9 left-1/2 -translate-x-1/2 hidden group-hover:block bg-gray-950 text-white text-[10px] font-bold py-1 px-2 rounded whitespace-nowrap shadow-xl border border-neutral-700 z-30">
                  {isKo ? hl.titleKo : hl.titleEn}
                </div>
              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
};
