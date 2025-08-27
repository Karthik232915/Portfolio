export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'technical' | 'soft' | 'design';
  icon?: string;
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  description?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  link?: string;
}

export interface Experience {
  title: string;
  company?: string;
  duration: string;
  description: string[];
}

export interface Achievement {
  title: string;
  description: string;
  metric?: string;
  tag?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
}