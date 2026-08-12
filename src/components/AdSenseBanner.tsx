import React, { useState } from 'react';
import { Language } from '../types';
import { Code, Info, CheckCircle2 } from 'lucide-react';

interface AdSenseBannerProps {
  lang: Language;
  slotId?: string;
  format?: 'horizontal' | 'rectangle' | 'in-article';
  className?: string;
}

export const AdSenseBanner: React.FC<AdSenseBannerProps> = ({
  lang,
  slotId = '1234567890',
  format = 'horizontal',
  className = '',
}) => {
  const [showCode, setShowCode] = useState(false);

  const isKo = lang === 'ko';

  const codeSnippet = `<!-- Google AdSense Unit Placeholder -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
     crossorigin="anonymous"></script>
<!-- Reddit_Guide_${format} -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
     data-ad-slot="${slotId}"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>`;

  return (
    <div className={`my-8 bg-gray-50 dark:bg-neutral-900/80 border border-dashed border-gray-300 dark:border-neutral-700 rounded-xl p-4 text-center relative overflow-hidden transition-all ${className}`}>
      
      {/* Policy Label Header */}
      <div className="flex items-center justify-between text-xs text-gray-400 dark:text-gray-500 mb-2 px-1">
        <span className="font-semibold uppercase tracking-wider text-[10px] bg-gray-200 dark:bg-neutral-800 text-gray-600 dark:text-gray-400 px-2 py-0.5 rounded">
          {isKo ? '광고 / Advertisement' : 'ADVERTISEMENT'}
        </span>
        <button
          onClick={() => setShowCode(!showCode)}
          className="hover:text-[#FF4500] flex items-center space-x-1 cursor-pointer transition-colors"
          title="Toggle AdSense Code Preview"
        >
          <Code className="w-3.5 h-3.5" />
          <span>{showCode ? (isKo ? '미리보기' : 'Preview') : (isKo ? '애드센스 태그 코드' : 'AdSense Tag Code')}</span>
        </button>
      </div>

      {showCode ? (
        <div className="text-left bg-gray-900 text-emerald-400 font-mono text-xs p-3 rounded-lg overflow-x-auto border border-neutral-800">
          <pre>{codeSnippet}</pre>
        </div>
      ) : (
        <div className="min-h-[100px] flex flex-col items-center justify-center p-4 bg-white dark:bg-neutral-800/50 rounded-lg border border-gray-100 dark:border-neutral-800/80">
          <div className="flex items-center space-x-2 text-xs font-medium text-gray-500 dark:text-gray-400">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>
              {isKo
                ? '구글 애드센스 검수 완료 레이아웃 (반응형 디스플레이 광고 영역)'
                : 'Google AdSense Approved Responsive Ad Unit Container'}
            </span>
          </div>
          <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-1">
            {isKo
              ? '승인 완료 후 발급받은 client ID와 slot ID로 자동 연동됩니다.'
              : 'Automatically renders live AdSense banners upon domain approval.'}
          </p>
        </div>
      )}
    </div>
  );
};
