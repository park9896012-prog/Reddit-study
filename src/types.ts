export type Language = 'ko' | 'en';

export interface GlossaryItem {
  id: string;
  term: string;
  termEn: string;
  category: 'basic' | 'content' | 'community' | 'culture';
  shortDesc: string;
  shortDescEn: string;
  fullDesc: string;
  fullDescEn: string;
  example: string;
  exampleEn: string;
  badge?: string;
}

export interface HighlightPoint {
  id: number;
  xPercentage: number; // 0-100% position on mock UI
  yPercentage: number;
  titleKo: string;
  titleEn: string;
  descKo: string;
  descEn: string;
}

export interface StepGuideItem {
  stepNumber: number;
  id: string;
  titleKo: string;
  titleEn: string;
  subtitleKo: string;
  subtitleEn: string;
  descriptionKo: string;
  descriptionEn: string;
  bulletPointsKo: string[];
  bulletPointsEn: string[];
  tipsKo: string[];
  tipsEn: string[];
  mockupType: 'profile' | 'subreddit' | 'create_post' | 'karma_rules';
  customImageUrl?: string;
  highlights: HighlightPoint[];
}

export interface UseCaseItem {
  id: string;
  iconName: string;
  titleKo: string;
  titleEn: string;
  summaryKo: string;
  summaryEn: string;
  detailsKo: string[];
  detailsEn: string[];
  realWorldExampleKo: string;
  realWorldExampleEn: string;
  recommendedSubreddits: string[];
}

export interface FaqItem {
  id: string;
  categoryKo: string;
  categoryEn: string;
  questionKo: string;
  questionEn: string;
  answerKo: string;
  answerEn: string;
}
