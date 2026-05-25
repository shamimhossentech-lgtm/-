export interface ServiceItem {
  id: string;
  title: string;
  iconName: string; // Will match Lucide icons dynamically
  description: string;
  category: 'software' | 'hardware' | 'unlocking';
  popular?: boolean;
  bdtRange: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  device: string;
  avatarSeed: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ServiceEstimateOption {
  id: string;
  name: string;
  basePrice: number;
  timeEstimate: string;
}

export interface PhoneBrand {
  id: string;
  name: string;
  logoUrl?: string;
  models: string[];
}
