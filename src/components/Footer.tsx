import React from 'react';
import { Language } from '../types';
import { UI_TEXT, CONTACT_EMAIL, SITE_URL } from '../data/translations';
import { Mail, ShieldCheck, Heart, ExternalLink } from 'lucide-react';

interface FooterProps {
  lang: Language;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onOpenPrivacy, onOpenTerms }) => {
  const t = UI_TEXT[lang].footer;
  const isKo = lang === 'ko';

  return (
    <footer className="bg-white dark:bg-[#1A1A1B] border-t border-gray-200 dark:border-neutral-800 text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Brand & Email Column (6 cols) */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-[#FF4500] text-white flex items-center justify-center font-bold text-xs">
                r/
              </div>
              <span className="text-lg font-bold text-gray-900 dark:text-white">
                {t.title}
              </span>
            </div>

            <p className="text-xs text-gray-500 dark:text-gray-400 max-w-md leading-relaxed">
              {t.disclaimer}
            </p>

            {/* Email Contact Box */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-orange-50 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-900/40 text-xs text-gray-900 dark:text-gray-200 font-medium">
              <Mail className="w-4 h-4 text-[#FF4500]" />
              <span>{t.contactEmailLabel}</span>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-bold text-[#FF4500] hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>

          {/* Quick Links Column (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white">
              {t.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={onOpenPrivacy} className="hover:text-[#FF4500] cursor-pointer">
                  {t.privacyLink}
                </button>
              </li>
              <li>
                <button onClick={onOpenTerms} className="hover:text-[#FF4500] cursor-pointer">
                  {t.termsLink}
                </button>
              </li>
              <li>
                <a href="#concepts" className="hover:text-[#FF4500]">
                  {UI_TEXT[lang].nav.concepts}
                </a>
              </li>
              <li>
                <a href="#guide" className="hover:text-[#FF4500]">
                  {UI_TEXT[lang].nav.stepGuide}
                </a>
              </li>
            </ul>
          </div>

          {/* SEO & Search Engine Indexing Files (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white">
              {isKo ? '검색엔진 색인 파일' : 'SEO Resources'}
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a
                  href="/sitemap.xml"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#FF4500] inline-flex items-center space-x-1"
                >
                  <span>sitemap.xml</span>
                  <ExternalLink className="w-3 h-3 text-gray-400" />
                </a>
              </li>
              <li>
                <a
                  href="/robots.txt"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#FF4500] inline-flex items-center space-x-1"
                >
                  <span>robots.txt</span>
                  <ExternalLink className="w-3 h-3 text-gray-400" />
                </a>
              </li>
              <li>
                <a
                  href="/api/info"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#FF4500] inline-flex items-center space-x-1 text-emerald-600 dark:text-emerald-400"
                >
                  <span>/api/info</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="pt-8 border-t border-gray-100 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-2">
          <div>{t.copyright}</div>
          <div className="flex items-center space-x-1">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>Google AdSense Ready • Responsive UI</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
