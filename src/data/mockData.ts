import { AppSettings, RelatedVideo, UserComment } from '../types';
import generatedThumbnail from '../assets/images/videohub_thumbnail_1792733820721.jpg';

export const ADSTERRA_DIRECT_LINK = 'https://auctionr.org/4/0994e60099ebb463e5f4ec9f2e341447';

export const DEFAULT_SETTINGS: AppSettings = {
  directLinkUrl: ADSTERRA_DIRECT_LINK,
  displayDomain: 'auctionr.org',
  videoTitle: 'Exclusive 4K Private Premiere: Midnight Ruby Collection',
  videoDuration: '24:18',
  viewsCount: '1,842,910',
  likesPercentage: '99.2%',
  liveViewersCount: 4892,
  openInNewTab: true,
  simulatePlayerBeforeRedirect: false,
  thumbnailUrl: generatedThumbnail,
};

export const INITIAL_RELATED_VIDEOS: RelatedVideo[] = [
  {
    id: 'vid-1',
    title: 'High-Definition Glamour Showcase & Ruby Diamond Highlights',
    duration: '18:45',
    views: '842K views',
    timeAgo: '2 hours ago',
    thumbnail: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    quality: '4K 60FPS',
  },
  {
    id: 'vid-2',
    title: 'VIP Lounge Exclusive: Behind the Scenes Direct Stream',
    duration: '31:12',
    views: '1.2M views',
    timeAgo: '5 hours ago',
    thumbnail: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80',
    quality: '1080p HD',
  },
  {
    id: 'vid-3',
    title: 'Top Rated Premium Stream - Direct Ultra Fast Server Mirror',
    duration: '14:02',
    views: '694K views',
    timeAgo: 'Yesterday',
    thumbnail: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
    quality: '1080p HD',
  },
  {
    id: 'vid-4',
    title: 'Full Length Director Cut (Direct High-Speed Playback)',
    duration: '42:50',
    views: '2.1M views',
    timeAgo: '3 days ago',
    thumbnail: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80',
    quality: '4K Ultra',
  },
];

export const INITIAL_COMMENTS: UserComment[] = [
  {
    id: 'c1',
    author: 'Alex_VipStream',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80',
    timeAgo: '4 mins ago',
    likes: 142,
    content: 'The 1080p server loaded instantly without buffering! Amazing quality video.',
    verified: true,
  },
  {
    id: 'c2',
    author: 'Rahim_BD',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=120&q=80',
    timeAgo: '12 mins ago',
    likes: 89,
    content: 'অনেক ভালো কোয়ালিটি! ডিরেক্ট লিংকে ক্লিকেই চালু হয়ে গেল কোনো প্রকার ল্যাগ ছাড়াই।',
    verified: false,
  },
  {
    id: 'c3',
    author: 'Elena_Streamer',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&q=80',
    timeAgo: '28 mins ago',
    likes: 67,
    content: 'Direct link button worked right away on mobile. Fast connection.',
    verified: true,
  },
  {
    id: 'c4',
    author: 'Carlos_M',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    timeAgo: '1 hour ago',
    likes: 34,
    content: 'Fastest player I have used today. Sound and visuals are crisp.',
    verified: false,
  },
];
