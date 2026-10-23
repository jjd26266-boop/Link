export type LanguageKey = 'en' | 'bn' | 'hi' | 'es' | 'ar';

export interface AppSettings {
  directLinkUrl: string;
  displayDomain: string;
  videoTitle: string;
  videoDuration: string;
  viewsCount: string;
  likesPercentage: string;
  liveViewersCount: number;
  openInNewTab: boolean;
  simulatePlayerBeforeRedirect: boolean;
  thumbnailUrl: string;
}

export interface RelatedVideo {
  id: string;
  title: string;
  duration: string;
  views: string;
  timeAgo: string;
  thumbnail: string;
  quality: string;
}

export interface UserComment {
  id: string;
  author: string;
  avatar: string;
  timeAgo: string;
  likes: number;
  content: string;
  verified?: boolean;
}
