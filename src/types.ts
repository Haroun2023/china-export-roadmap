export interface RoadmapStep {
  id: string;
  title: string;
  description: string;
  phase: string;
  phaseTitle: string;
  isCompleted: boolean;
  content: {
    instructions: string[];
    documents: string[];
    resources: { name: string; url: string }[];
    tips: string[];
  };
}

export interface Supplier {
  id: number;
  name: string;
  category: 'Electrical' | 'Plumbing';
  subCategories: string[];
  description: string;
  location: string;
  minOrder: string;
  certifications: string[];
  website: string;
  email: string;
  phone: string;
  rating: number;
  tags: string[];
  stats: string;
}

export interface CityData {
  id: string;
  name: string;
  arabicName: string;
  population: string;
  constructionValue: string;
  primaryPort: string;
  demandScore: number;
  competition: 'Low' | 'Medium' | 'High';
  logisticsCost: 'Low' | 'Medium' | 'High';
  description: string;
  keyProjects: string[];
  opportunities: string[];
}
