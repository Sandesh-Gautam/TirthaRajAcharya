export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  currentAffiliation: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  dateOfBirth: string;
  nationality: string;
  languages: string[];
  bio: string;
}

export interface ResearchInterest {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
}

export interface Experience {
  id: string;
  title: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
  responsibilities: string[];
  achievements: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  grade: string;
  thesis?: string;
  thesisTitle?: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  volume?: string;
  issue?: string;
  pages?: string;
  doi?: string;
  impactFactor?: number;
  citations?: number;
  category: 'first-author' | 'co-author' | 'submitted' | 'in-preparation';
  abstract?: string;
  keywords?: string[];
}

export interface Skill {
  id: string;
  name: string;
  category: 'instrumentation' | 'research-techniques' | 'software' | 'programming';
  proficiency: number; // 1-5 scale
  description?: string;
}

export interface Award {
  id: string;
  title: string;
  organization: string;
  year: number;
  description: string;
  significance: string;
  icon?: string;
}

export interface Membership {
  id: string;
  organization: string;
  type: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  address: string;
  officeLocation: string;
  responseTime: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  icon?: string;
}

export interface HeroSection {
  title: string;
  subtitle: string;
  currentAffiliation: string;
  location: string;
  ctaButtons: {
    primary: {
      text: string;
      href: string;
    };
    secondary: {
      text: string;
      href: string;
    };
  };
}

export interface Stats {
  publications: number;
  citations: number;
  yearsExperience: number;
  researchAreas: number;
} 