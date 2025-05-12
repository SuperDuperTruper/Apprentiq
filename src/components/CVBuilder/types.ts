export interface CVFormData {
  personalInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    website: string;
  };
  education: Array<{
    school: string;
    degree: string;
    field: string;
    startDate: string;
    endDate: string;
    gpa?: string;
    achievements: string[];
  }>;
  experience: Array<{
    company: string;
    position: string;
    location: string;
    startDate: string;
    endDate: string;
    current: boolean;
    description: string[];
  }>;
  skills: Array<{
    category: string;
    items: string[];
  }>;
  projects: Array<{
    name: string;
    description: string;
    technologies: string[];
    link?: string;
  }>;
  awards: Array<{
    title: string;
    issuer: string;
    date: string;
    description: string;
  }>;
  publications: Array<{
    title: string;
    authors: string[];
    journal: string;
    date: string;
    link?: string;
  }>;
} 