import React from 'react';
import { Language } from '../types';
import { CONTACT_EMAIL } from '../data/translations';
import { FileText, X } from 'lucide-react';

interface TermsModalProps {
  lang: Language;
  onClose: () => void;
}

export const TermsModal: React.FC<TermsModalProps> = ({ lang, onClose }) => {
  const isKo = lang === 'ko';

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white dark:bg-[#1A1A1B] max-w-2xl w-full rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-200 dark:border-neutral-700 relative max-h-[85vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-neutral-800">
          <div className="flex items-center space-x-2">
            <FileText className="w-6 h-6 text-blue-500" />
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              {isKo ? '이용약관 (Terms of Service)' : 'Terms of Service'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-gray-400 hover:text-gray-700 dark:hover:text-white cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Terms Body */}
        <div className="flex-1 overflow-y-auto py-4 space-y-4 text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed pr-2">
          <p className="font-semibold text-gray-800 dark:text-gray-200">
            {isKo
              ? '본 웹사이트 이용약관은 사용자가 서비스를 이용함에 있어 제공자와 이용자 간의 권리, 의무 및 책임사항을 규정합니다.'
              : 'These Terms of Service govern your use of our educational website and services.'}
          </p>

          <div className="space-y-1">
            <h3 className="font-bold text-gray-900 dark:text-white">1. 서비스의 목적</h3>
            <p>
              {isKo
                ? '본 웹사이트는 Reddit 커뮤니티의 이해와 비즈니스 활용을 돕기 위한 독립적인 교육 정보 및 가이드를 무료로 제공합니다.'
                : 'This site provides free educational tutorials and guides to help users understand Reddit’s architecture.'}
            </p>
          </div>

          <div className="space-y-1">
            <h3 className="font-bold text-gray-900 dark:text-white">2. 면책 조항 (Disclaimer)</h3>
            <p>
              {isKo
                ? '본 웹사이트에서 제공하는 정보는 참고용이며, Reddit Inc.의 공식 정책 변경에 따라 일부 내용이 상이할 수 있습니다. 운영자는 본 사이트 정보를 활용한 행위로 발생한 간접 손해에 대해 법적 책임을 지지 않습니다.'
                : 'Information provided is for educational reference only. The publisher is not liable for indirect outcomes resulting from website content.'}
            </p>
          </div>

          <div className="space-y-1">
            <h3 className="font-bold text-gray-900 dark:text-white">3. 문의 및 고객지원</h3>
            <p>
              {isKo
                ? `이용약관 관련 문의는 공식 이메일(${CONTACT_EMAIL})로 전달해주시기 바랍니다.`
                : `For questions regarding terms, contact ${CONTACT_EMAIL}.`}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-gray-200 dark:border-neutral-800 text-right">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-blue-600 text-white font-bold text-xs sm:text-sm rounded-xl hover:bg-blue-700 cursor-pointer"
          >
            {isKo ? '동의 및 닫기' : 'Accept & Close'}
          </button>
        </div>

      </div>
    </div>
  );
};
