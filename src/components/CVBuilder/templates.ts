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
    id: 'tech-digital',
    name: 'Technology & Digital',
    description: 'Modern template optimized for tech and digital apprenticeships',
    thumbnail: 'https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&w=500&q=80',
    bestFor: [
      'Software Development',
      'Data Analytics',
      'Digital Solutions',
      'Cyber Security',
      'Network Engineering'
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
    id: 'finance-banking',
    name: 'Finance & Banking',
    description: 'Professional template for financial services apprenticeships',
    thumbnail: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=500&q=80',
    bestFor: [
      'Investment Operations',
      'Financial Services',
      'Banking Operations',
      'Insurance',
      'Risk Management'
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
    id: 'engineering',
    name: 'Engineering & Manufacturing',
    description: 'Technical template for engineering apprenticeships',
    thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=500&q=80',
    bestFor: [
      'Mechanical Engineering',
      'Electrical Engineering',
      'Manufacturing',
      'Aerospace',
      'Automotive'
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
    id: 'business-consulting',
    name: 'Business & Consulting',
    description: 'Strategic layout for business and consulting apprenticeships',
    thumbnail: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=500&q=80',
    bestFor: [
      'Business Management',
      'Project Management',
      'Consulting',
      'Supply Chain',
      'Operations'
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
    id: 'healthcare',
    name: 'Healthcare & Life Sciences',
    description: 'Professional template for healthcare apprenticeships',
    thumbnail: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=500&q=80',
    bestFor: [
      'Healthcare Science',
      'Pharmaceutical',
      'Laboratory Science',
      'Biomedical Science',
      'Clinical Technology'
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
    id: 'construction',
    name: 'Construction & Built Environment',
    description: 'Structured template for construction and surveying apprenticeships',
    thumbnail: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=500&q=80',
    bestFor: [
      'Civil Engineering',
      'Quantity Surveying',
      'Construction Management',
      'Building Services',
      'Architecture'
    ],
    style: {
      fontFamily: 'Roboto, sans-serif',
      primaryColor: '#1E1E1E',
      secondaryColor: '#666666',
      spacing: '1.15',
      layout: 'single-column'
    }
  },
  {
    id: 'legal-professional',
    name: 'Legal & Professional Services',
    description: 'Traditional template for legal and professional apprenticeships',
    thumbnail: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=500&q=80',
    bestFor: [
      'Legal Services',
      'Chartered Legal Executive',
      'Professional Services',
      'Paralegal',
      'Compliance'
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
    id: 'creative-digital',
    name: 'Creative & Digital Media',
    description: 'Dynamic template for creative industry apprenticeships',
    thumbnail: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=500&q=80',
    bestFor: [
      'Digital Marketing',
      'Content Production',
      'UX/UI Design',
      'Digital Media',
      'Creative Technology'
    ],
    style: {
      fontFamily: 'Poppins, sans-serif',
      primaryColor: '#9333EA',
      secondaryColor: '#6B7280',
      spacing: '1.2',
      layout: 'two-column'
    }
  }
]; 