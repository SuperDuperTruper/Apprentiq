export interface CVTemplate {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  bestFor: string[];
  style: {
    fontFamily: string;
    primaryColor: string;
    secondaryColor: string;
    spacing: string;
    layout: 'single-column' | 'two-column';
  };
}

export const templates: CVTemplate[] = [
  {
    id: 'harvard',
    name: 'Harvard Classic',
    description: 'Clean and professional template following Harvard Business School guidelines',
    thumbnail: 'https://placehold.co/600x800/e2e8f0/1e293b?text=Harvard+Classic',
    bestFor: [
      'Academic positions',
      'Research roles',
      'Executive positions',
      'Consulting careers'
    ],
    style: {
      fontFamily: 'Garamond, serif',
      primaryColor: '#1E1E1E',
      secondaryColor: '#666666',
      spacing: '1.15',
      layout: 'single-column'
    }
  },
  {
    id: 'stanford',
    name: 'Stanford Professional',
    description: 'Modern and impactful layout inspired by Stanford GSB format',
    thumbnail: 'https://placehold.co/600x800/e2e8f0/1e293b?text=Stanford+Professional',
    bestFor: [
      'Business roles',
      'Management positions',
      'Finance careers',
      'MBA applications'
    ],
    style: {
      fontFamily: 'Helvetica, sans-serif',
      primaryColor: '#14213D',
      secondaryColor: '#4A5568',
      spacing: '1.2',
      layout: 'single-column'
    }
  },
  {
    id: 'modern-tech',
    name: 'Modern Tech',
    description: 'Contemporary design optimized for tech industry professionals',
    thumbnail: 'https://placehold.co/600x800/e2e8f0/1e293b?text=Modern+Tech',
    bestFor: [
      'Software engineering',
      'UX/UI design',
      'Product management',
      'Tech startups'
    ],
    style: {
      fontFamily: 'Inter, sans-serif',
      primaryColor: '#2563EB',
      secondaryColor: '#64748B',
      spacing: '1.25',
      layout: 'two-column'
    }
  },
  {
    id: 'executive',
    name: 'Executive Suite',
    description: 'Sophisticated layout for senior-level professionals',
    thumbnail: 'https://placehold.co/600x800/e2e8f0/1e293b?text=Executive+Suite',
    bestFor: [
      'C-level positions',
      'Senior management',
      'Board members',
      'Industry leaders'
    ],
    style: {
      fontFamily: 'Libre Baskerville, serif',
      primaryColor: '#1A1A1A',
      secondaryColor: '#4B5563',
      spacing: '1.3',
      layout: 'single-column'
    }
  },
  {
    id: 'creative',
    name: 'Creative Portfolio',
    description: 'Dynamic layout showcasing creative work and achievements',
    thumbnail: 'https://placehold.co/600x800/e2e8f0/1e293b?text=Creative+Portfolio',
    bestFor: [
      'Design roles',
      'Art directors',
      'Creative directors',
      'Marketing positions'
    ],
    style: {
      fontFamily: 'Poppins, sans-serif',
      primaryColor: '#9333EA',
      secondaryColor: '#6B7280',
      spacing: '1.2',
      layout: 'two-column'
    }
  },
  {
    id: 'minimal',
    name: 'Minimalist Pro',
    description: 'Clean and efficient design focusing on essential information',
    thumbnail: 'https://placehold.co/600x800/e2e8f0/1e293b?text=Minimalist+Pro',
    bestFor: [
      'All industries',
      'Career transitions',
      'Entry-level positions',
      'Experienced professionals'
    ],
    style: {
      fontFamily: 'Source Sans Pro, sans-serif',
      primaryColor: '#374151',
      secondaryColor: '#6B7280',
      spacing: '1.15',
      layout: 'single-column'
    }
  },
  {
    id: 'consulting',
    name: 'Consulting Elite',
    description: 'Strategic layout emphasizing achievements and metrics',
    thumbnail: 'https://placehold.co/600x800/e2e8f0/1e293b?text=Consulting+Elite',
    bestFor: [
      'Management consulting',
      'Strategy roles',
      'Business analysis',
      'Project management'
    ],
    style: {
      fontFamily: 'Lato, sans-serif',
      primaryColor: '#0F172A',
      secondaryColor: '#475569',
      spacing: '1.2',
      layout: 'single-column'
    }
  },
  {
    id: 'academic',
    name: 'Academic Excellence',
    description: 'Comprehensive layout for academic and research professionals',
    thumbnail: 'https://placehold.co/600x800/e2e8f0/1e293b?text=Academic+Excellence',
    bestFor: [
      'Professors',
      'Researchers',
      'PhD candidates',
      'Research scientists'
    ],
    style: {
      fontFamily: 'Merriweather, serif',
      primaryColor: '#18181B',
      secondaryColor: '#52525B',
      spacing: '1.4',
      layout: 'single-column'
    }
  },
  {
    id: 'legal',
    name: 'Legal Professional',
    description: 'Traditional layout tailored for legal professionals',
    thumbnail: 'https://placehold.co/600x800/e2e8f0/1e293b?text=Legal+Professional',
    bestFor: [
      'Lawyers',
      'Legal consultants',
      'Paralegals',
      'Legal researchers'
    ],
    style: {
      fontFamily: 'Crimson Text, serif',
      primaryColor: '#1F2937',
      secondaryColor: '#4B5563',
      spacing: '1.3',
      layout: 'single-column'
    }
  },
  {
    id: 'international',
    name: 'International Standard',
    description: 'Universal format suitable for global job applications',
    thumbnail: 'https://placehold.co/600x800/e2e8f0/1e293b?text=International+Standard',
    bestFor: [
      'International roles',
      'Multinational companies',
      'Global positions',
      'Cross-cultural work'
    ],
    style: {
      fontFamily: 'Roboto, sans-serif',
      primaryColor: '#0F172A',
      secondaryColor: '#475569',
      spacing: '1.25',
      layout: 'single-column'
    }
  }
]; 