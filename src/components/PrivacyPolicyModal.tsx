import React from 'react';
import { Language } from '../types';
import { CONTACT_EMAIL } from '../data/translations';
import { ShieldCheck, X } from 'lucide-react';

interface PrivacyPolicyModalProps {
  lang: Language;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ lang, onClose }) => {
  const isKo = lang === 'ko';

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white dark:bg-[#1A1A1B] max-w-2xl w-full rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-200 dark:border-neutral-700 relative max-h-[85vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-neutral-800">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-6 h-6 text-[#FF4500]" />
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              {isKo ? '개인정보처리방침 (Privacy Policy)' : 'Privacy Policy'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-gray-400 hover:text-gray-700 dark:hover:text-white cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Policy Body */}
        <div className="flex-1 overflow-y-auto py-4 space-y-4 text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed pr-2">
          
          <p className="font-semibold text-gray-800 dark:text-gray-200">
            {isKo
              ? `본 웹사이트("Reddit 쉽게 이해하고 활용하기")는 방문자의 개인정보를 보호하고 관련 법령 및 구글 게시자 정책(Google Publisher Policies)을 준수합니다.`
              : `This website ("Mastering Reddit Guide") respects visitor privacy and adheres strictly to Google Publisher Policies.`}
          </p>

          <div className="space-y-1">
            <h3 className="font-bold text-gray-900 dark:text-white">1. 수집하는 개인정보 항목 및 방법</h3>
            <p>
              {isKo
                ? '본 웹사이트는 별도의 회원가입 없이 이용 가능하며, 서버 로그 및 Google Analytics를 통해 방문자의 IP 주소, 브라우저 종류, 방문 시간, 접속 경로 등의 비식별 행위 데이터만을 자동 수집합니다.'
                : 'This website requires no account creation. Non-personally identifiable browser logs, IP addresses, visit durations, and referrer URLs are collected via Google Analytics.'}
            </p>
          </div>

          <div className="space-y-1">
            <h3 className="font-bold text-gray-900 dark:text-white">2. 쿠키(Cookie) 및 구글 애드센스(Google AdSense) 활용</h3>
            <p>
              {isKo
                ? '구글을 포함한 제3자 제공업체는 쿠키를 사용하여 사용자의 이전 웹사이트 방문 기록을 바탕으로 광고를 제공합니다. 구글의 광고 쿠키 사용으로 구글 및 파트너사는 사용자의 본 사이트 및 다른 사이트 방문에 기반한 맞춤형 광고를 제공할 수 있습니다.'
                : 'Third-party vendors, including Google, use cookies to serve ads based on a user’s prior visits to this or other websites. Google’s use of advertising cookies enables it and its partners to serve personalized ads based on browsing history.'}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              {isKo
                ? '사용자는 구글 광고 설정(https://adssettings.google.com)에서 맞춤형 광고를 차단할 수 있습니다.'
                : 'Users may opt out of personalized advertising by visiting Google Ads Settings (https://adssettings.google.com).'}
            </p>
          </div>

          <div className="space-y-1">
            <h3 className="font-bold text-gray-900 dark:text-white">3. 저작권 및 이미지 사용 지침</h3>
            <p>
              {isKo
                ? '본 사이트에 게재된 가이드 텍스트 및 UI 모사 그래픽은 저작권 침해가 없는 독창적인 콘텐츠이며, Reddit® 상표는 Reddit Inc.의 등록 상표입니다.'
                : 'All text tutorials and CSS/SVG mock UI frames are original, non-infringing assets. Reddit® is a registered trademark of Reddit Inc.'}
            </p>
          </div>

          <div className="space-y-1 bg-orange-50 dark:bg-orange-950/40 p-3 rounded-xl border border-orange-100 dark:border-orange-900/40">
            <h3 className="font-bold text-[#FF4500]">4. 개인정보 보호책임자 및 문의처</h3>
            <p>
              {isKo
                ? `개인정보보호 및 웹사이트 관련 문의사항은 아래 대표 이메일로 연락주시면 신속히 답변드리겠습니다.`
                : `For privacy inquiries or feedback, please contact the publisher:`}
            </p>
            <p className="font-bold text-gray-900 dark:text-white mt-1">
              이메일: <a href={`mailto:${CONTACT_EMAIL}`} className="underline text-[#FF4500]">{CONTACT_EMAIL}</a>
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-gray-200 dark:border-neutral-800 text-right">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#FF4500] text-white font-bold text-xs sm:text-sm rounded-xl hover:bg-[#e03d00] cursor-pointer"
          >
            {isKo ? '확인 및 닫기' : 'Acknowledge & Close'}
          </button>
        </div>

      </div>
    </div>
  );
};
